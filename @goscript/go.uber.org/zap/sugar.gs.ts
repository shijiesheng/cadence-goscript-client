// Generated file based on sugar.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as multierr from "@goscript/go.uber.org/multierr/index.js"

import * as __goscript_array from "./array.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_field from "./field.gs.ts"

import * as __goscript_level from "./level.gs.ts"

import * as __goscript_logger from "./logger.gs.ts"

import * as __goscript_options from "./options.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/go.uber.org/multierr/index.js"
import "./array.gs.ts"
import "./error.gs.ts"
import "./field.gs.ts"
import "./level.gs.ts"
import "./logger.gs.ts"
import "./options.gs.ts"

$.registerTypePackagePath("go.uber.org/zap", ["zap.SugaredLogger", "zap.invalidPair", "zap.invalidPairs"])

export type invalidPairs = $.Slice<invalidPair>

$.registerNamedType("zap.invalidPairs", /* @__PURE__ */ $.sliceType("zap.invalidPair"));

$.registerNamedValueType(
	"zap.invalidPairs",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (invalidPairs_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["enc", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zap.invalidPairs",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (invalidPairs_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["enc", "zapcore.ArrayEncoder"]], ["error"])]
);

export class SugaredLogger {
	public get base(): __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null {
		return this._fields.base
	}

	public set base(value: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null) {
		this._fields.base = value
	}

	public _fields: {
		base: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null
	}

	constructor(init?: Partial<{base?: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			base: init?.base ?? (null! as __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SugaredLogger {
		return new SugaredLogger(this, true)
	}

	public __goscriptAssign(source: SugaredLogger): void {
		const target = this._fields
		const values = source._fields
		target.base = values.base
	}

	public async DPanic(args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(3, "", args, null) : SugaredLogger.prototype.log.call(s, 3, "", args, null))
	}

	public async DPanicf(template: string, args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(3, template, args, null) : SugaredLogger.prototype.log.call(s, 3, template, args, null))
	}

	public async DPanicln(args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).logln(3, args, null) : SugaredLogger.prototype.logln.call(s, 3, args, null))
	}

	public async DPanicw(msg: string, keysAndValues: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(3, msg, null, keysAndValues) : SugaredLogger.prototype.log.call(s, 3, msg, null, keysAndValues))
	}

	public async Debug(args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(-1, "", args, null) : SugaredLogger.prototype.log.call(s, -1, "", args, null))
	}

	public async Debugf(template: string, args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(-1, template, args, null) : SugaredLogger.prototype.log.call(s, -1, template, args, null))
	}

	public async Debugln(args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).logln(-1, args, null) : SugaredLogger.prototype.logln.call(s, -1, args, null))
	}

	public async Debugw(msg: string, keysAndValues: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(-1, msg, null, keysAndValues) : SugaredLogger.prototype.log.call(s, -1, msg, null, keysAndValues))
	}

	public Desugar(): __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		let base: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null = __goscript_logger.Logger.prototype.clone.call($.pointerValue<SugaredLogger>(s).base)
		let base$: __goscript_logger.Logger = base == null ? $.pointerTarget<__goscript_logger.Logger>(base) : (base as any).__isVarRef === true ? (base as any).value : (base as any).__goValue === undefined ? (base as any) : $.pointerTarget<__goscript_logger.Logger>(base);
		;(base$ as __goscript_logger.Logger).callerSkip = (base$ as __goscript_logger.Logger).callerSkip - (2)
		return base
	}

	public async Error(args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(2, "", args, null) : SugaredLogger.prototype.log.call(s, 2, "", args, null))
	}

	public async Errorf(template: string, args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(2, template, args, null) : SugaredLogger.prototype.log.call(s, 2, template, args, null))
	}

	public async Errorln(args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).logln(2, args, null) : SugaredLogger.prototype.logln.call(s, 2, args, null))
	}

	public async Errorw(msg: string, keysAndValues: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(2, msg, null, keysAndValues) : SugaredLogger.prototype.log.call(s, 2, msg, null, keysAndValues))
	}

	public async Fatal(args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(5, "", args, null) : SugaredLogger.prototype.log.call(s, 5, "", args, null))
	}

	public async Fatalf(template: string, args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(5, template, args, null) : SugaredLogger.prototype.log.call(s, 5, template, args, null))
	}

	public async Fatalln(args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).logln(5, args, null) : SugaredLogger.prototype.logln.call(s, 5, args, null))
	}

	public async Fatalw(msg: string, keysAndValues: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(5, msg, null, keysAndValues) : SugaredLogger.prototype.log.call(s, 5, msg, null, keysAndValues))
	}

	public async Info(args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(0, "", args, null) : SugaredLogger.prototype.log.call(s, 0, "", args, null))
	}

	public async Infof(template: string, args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(0, template, args, null) : SugaredLogger.prototype.log.call(s, 0, template, args, null))
	}

	public async Infoln(args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).logln(0, args, null) : SugaredLogger.prototype.logln.call(s, 0, args, null))
	}

	public async Infow(msg: string, keysAndValues: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(0, msg, null, keysAndValues) : SugaredLogger.prototype.log.call(s, 0, msg, null, keysAndValues))
	}

	public async Level(): globalThis.Promise<zapcore.Level> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		return zapcore.LevelOf(($.pointerValue<__goscript_logger.Logger>($.pointerValue<SugaredLogger>(s).base).core as zapcore.LevelEnabler | null))
	}

	public async Log(lvl: zapcore.Level, args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(lvl, "", args, null) : SugaredLogger.prototype.log.call(s, lvl, "", args, null))
	}

	public async Logf(lvl: zapcore.Level, template: string, args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(lvl, template, args, null) : SugaredLogger.prototype.log.call(s, lvl, template, args, null))
	}

	public async Logln(lvl: zapcore.Level, args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).logln(lvl, args, null) : SugaredLogger.prototype.logln.call(s, lvl, args, null))
	}

	public async Logw(lvl: zapcore.Level, msg: string, keysAndValues: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(lvl, msg, null, keysAndValues) : SugaredLogger.prototype.log.call(s, lvl, msg, null, keysAndValues))
	}

	public Named(name: string): SugaredLogger | $.VarRef<SugaredLogger> | null {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		return (() => { const __goscriptLiteralField0 = __goscript_logger.Logger.prototype.Named.call($.pointerValue<SugaredLogger>(s).base, name); return new SugaredLogger({base: __goscriptLiteralField0}) })()
	}

	public async Panic(args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(4, "", args, null) : SugaredLogger.prototype.log.call(s, 4, "", args, null))
	}

	public async Panicf(template: string, args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(4, template, args, null) : SugaredLogger.prototype.log.call(s, 4, template, args, null))
	}

	public async Panicln(args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).logln(4, args, null) : SugaredLogger.prototype.logln.call(s, 4, args, null))
	}

	public async Panicw(msg: string, keysAndValues: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(4, msg, null, keysAndValues) : SugaredLogger.prototype.log.call(s, 4, msg, null, keysAndValues))
	}

	public async Sync(): globalThis.Promise<$.GoError> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		return __goscript_logger.Logger.prototype.Sync.call($.pointerValue<SugaredLogger>(s).base)
	}

	public async Warn(args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(1, "", args, null) : SugaredLogger.prototype.log.call(s, 1, "", args, null))
	}

	public async Warnf(template: string, args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(1, template, args, null) : SugaredLogger.prototype.log.call(s, 1, template, args, null))
	}

	public async Warnln(args: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).logln(1, args, null) : SugaredLogger.prototype.logln.call(s, 1, args, null))
	}

	public async Warnw(msg: string, keysAndValues: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).log(1, msg, null, keysAndValues) : SugaredLogger.prototype.log.call(s, 1, msg, null, keysAndValues))
	}

	public async With(args: $.Slice<any>): globalThis.Promise<SugaredLogger | $.VarRef<SugaredLogger> | null> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		return (await (async () => { const __goscriptLiteralField1 = await __goscript_logger.Logger.prototype.With.call($.pointerValue<SugaredLogger>(s).base, await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).sweetenFields(args) : SugaredLogger.prototype.sweetenFields.call(s, args))); return new SugaredLogger({base: __goscriptLiteralField1}) })())
	}

	public async WithLazy(args: $.Slice<any>): globalThis.Promise<SugaredLogger | $.VarRef<SugaredLogger> | null> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		return (await (async () => { const __goscriptLiteralField2 = await __goscript_logger.Logger.prototype.WithLazy.call($.pointerValue<SugaredLogger>(s).base, await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).sweetenFields(args) : SugaredLogger.prototype.sweetenFields.call(s, args))); return new SugaredLogger({base: __goscriptLiteralField2}) })())
	}

	public async WithOptions(opts: $.Slice<__goscript_options.Option | null>): globalThis.Promise<SugaredLogger | $.VarRef<SugaredLogger> | null> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		let base: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null = __goscript_logger.Logger.prototype.clone.call($.pointerValue<SugaredLogger>(s).base)
		for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let opt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_options.Option | null)
			void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<__goscript_options.Option, null>) : $.pointerValue<Exclude<__goscript_options.Option, null>>(opt)).apply(base), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return new SugaredLogger({base: base})
	}

	public async log(lvl: zapcore.Level, template: string, fmtArgs: $.Slice<any>, context: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		const s$: SugaredLogger = s == null ? $.pointerTarget<SugaredLogger>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<SugaredLogger>(s)
		// If logging at this level is completely disabled, skip the overhead of
		// string formatting.
		if ((lvl < 3) && !(__goscriptAwait = $.pointerValue<Exclude<zapcore.Core, null>>(__goscript_logger.Logger.prototype.Core.call((s$ as SugaredLogger).base)).Enabled(lvl), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return
		}

		let msg = await getMessage(template, fmtArgs)
		{
			let ce: zapcore.CheckedEntry | $.VarRef<zapcore.CheckedEntry> | null = await __goscript_logger.Logger.prototype.Check.call((s$ as SugaredLogger).base, lvl, msg)
			if (ce != null) {
				await zapcore.CheckedEntry.prototype.Write.call(ce, await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).sweetenFields(context) : SugaredLogger.prototype.sweetenFields.call(s, context)))
			}
		}
	}

	public async logln(lvl: zapcore.Level, fmtArgs: $.Slice<any>, context: $.Slice<any>): globalThis.Promise<void> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		const s$: SugaredLogger = s == null ? $.pointerTarget<SugaredLogger>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<SugaredLogger>(s)
		if ((lvl < 3) && !(__goscriptAwait = $.pointerValue<Exclude<zapcore.Core, null>>(__goscript_logger.Logger.prototype.Core.call((s$ as SugaredLogger).base)).Enabled(lvl), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return
		}

		let msg = await getMessageln(fmtArgs)
		{
			let ce: zapcore.CheckedEntry | $.VarRef<zapcore.CheckedEntry> | null = await __goscript_logger.Logger.prototype.Check.call((s$ as SugaredLogger).base, lvl, msg)
			if (ce != null) {
				await zapcore.CheckedEntry.prototype.Write.call(ce, await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as SugaredLogger).sweetenFields(context) : SugaredLogger.prototype.sweetenFields.call(s, context)))
			}
		}
	}

	public async sweetenFields(args: $.Slice<any>): globalThis.Promise<$.Slice<__goscript_field.Field>> {
		const s: SugaredLogger | $.VarRef<SugaredLogger> | null = this;
		const s$: SugaredLogger = s == null ? $.pointerTarget<SugaredLogger>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<SugaredLogger>(s)
		if ($.sliceLen(args) == 0) {
			return null
		}

		let fields: $.Slice<__goscript_field.Field> = $.makeSlice<__goscript_field.Field>(0, $.sliceLen(args), undefined, () => new zapcore.Field(undefined, true))
		let invalid: invalidPairs = null! as invalidPairs
		let seenError: boolean = false

		for (let __goscriptSliceWindow0 = $.sliceRange(args), i = 0; i < __goscriptSliceWindow0.length; ) {
			// This is a strongly-typed field. Consume it and move on.
			{
				let [f, ok] = $.typeAssertTuple<__goscript_field.Field>(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as any), "zapcore.Field")
				if (ok) {
					fields = $.appendOne(fields, (f).clone())
					i++
					continue
				}
			}

			// If it is an error, consume it and move on.
			{
				let [err, ok] = $.typeAssertTuple<$.GoError>(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as any), "error")
				if (ok) {
					if (!seenError) {
						seenError = true
						fields = $.appendOne(fields, __goscript_error.Error(err))
					} else {
						await __goscript_logger.Logger.prototype.Error.call((s$ as SugaredLogger).base, "Multiple errors without a key.", $.arrayToSlice<__goscript_field.Field>([__goscript_error.Error(err)]))
					}
					i++
					continue
				}
			}

			// Make sure this element isn't a dangling key.
			if (i == (__goscriptSliceWindow0.length - 1)) {
				await __goscript_logger.Logger.prototype.Error.call((s$ as SugaredLogger).base, "Ignored key without a value.", $.arrayToSlice<__goscript_field.Field>([await __goscript_field.Any("ignored", ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as any))]))
				break
			}

			// Consume this value and the next, treating them as a key-value pair. If the
			// key isn't a string, add this pair to the slice of invalid pairs.
			let key = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as any)
			let val = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i + 1)] as any)
			{
				let [keyStr, ok] = $.typeAssertTuple<string>(key, /* @__PURE__ */ $.basicType("string"))
				if (!ok) {
					// Subsequent errors are likely, so allocate once up front.
					if ($.cap((invalid as invalidPairs)) == 0) {
						invalid = ($.makeSlice<invalidPair>(0, globalThis.Math.trunc(__goscriptSliceWindow0.length / 2), undefined, () => new invalidPair(undefined, true)) as invalidPairs)
					}
					invalid = ($.appendOne((invalid as invalidPairs), new invalidPair({position: i, key: key, value: val}, true)) as invalidPairs)
				} else {
					fields = $.appendOne(fields, await __goscript_field.Any(keyStr, val))
				}
			}
			i = i + (2)
		}

		// If we encountered any invalid key-value pairs, log an error.
		if ($.sliceLen((invalid as invalidPairs)) > 0) {
			await __goscript_logger.Logger.prototype.Error.call((s$ as SugaredLogger).base, "Ignored key-value pairs with non-string keys.", $.arrayToSlice<__goscript_field.Field>([__goscript_array.Array("invalid", $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>(invalid, "zap.invalidPairs", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))]))
		}
		return fields
	}

	static __typeInfo = $.registerStructType(
		"zap.SugaredLogger",
		() => new SugaredLogger(),
		() => [$.methodSignature("DPanic", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("DPanicf", [["template", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("DPanicln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("DPanicw", [["msg", /* @__PURE__ */ $.basicType("string")], ["keysAndValues", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Debug", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Debugf", [["template", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Debugln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Debugw", [["msg", /* @__PURE__ */ $.basicType("string")], ["keysAndValues", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Desugar", [], [/* @__PURE__ */ $.pointerType("zap.Logger")], true), $.methodSignature("Error", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Errorf", [["template", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Errorln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Errorw", [["msg", /* @__PURE__ */ $.basicType("string")], ["keysAndValues", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Fatal", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Fatalf", [["template", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Fatalln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Fatalw", [["msg", /* @__PURE__ */ $.basicType("string")], ["keysAndValues", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Info", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Infof", [["template", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Infoln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Infow", [["msg", /* @__PURE__ */ $.basicType("string")], ["keysAndValues", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Level", [], [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")], true), $.methodSignature("Log", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Logf", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")], ["template", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Logln", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Logw", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")], ["msg", /* @__PURE__ */ $.basicType("string")], ["keysAndValues", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Named", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("zap.SugaredLogger")], true), $.methodSignature("Panic", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Panicf", [["template", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Panicln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Panicw", [["msg", /* @__PURE__ */ $.basicType("string")], ["keysAndValues", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Sync", [], ["error"], true), $.methodSignature("Warn", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Warnf", [["template", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Warnln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Warnw", [["msg", /* @__PURE__ */ $.basicType("string")], ["keysAndValues", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("With", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("zap.SugaredLogger")], true), $.methodSignature("WithLazy", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("zap.SugaredLogger")], true), $.methodSignature("WithOptions", [["opts", /* @__PURE__ */ $.sliceType("zap.Option")]], [/* @__PURE__ */ $.pointerType("zap.SugaredLogger")], true), $.methodSignature("log", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")], ["template", /* @__PURE__ */ $.basicType("string")], ["fmtArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], ["context", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("logln", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")], ["fmtArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], ["context", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("sweetenFields", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType("zapcore.Field")], true)],
		SugaredLogger,
		() => [/* @__PURE__ */ $.structField("base", /* @__PURE__ */ $.pointerType("zap.Logger"), [0], 0, false, { pkgPath: "go.uber.org/zap" })]
	)
}

export class invalidPair {
	public get position(): number {
		return this._fields.position
	}

	public set position(value: number) {
		this._fields.position = value
	}

	public get key(): any {
		return this._fields.key
	}

	public set key(value: any) {
		this._fields.key = value
	}

	public get value(): any {
		return this._fields.value
	}

	public set value(value: any) {
		this._fields.value = value
	}

	public _fields: {
		position: number
		key: any
		value: any
	}

	constructor(init?: Partial<{position?: number, key?: any, value?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			position: init?.position ?? (0 as number),
			key: init?.key ?? (null! as any),
			value: init?.value ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): invalidPair {
		return new invalidPair(this, true)
	}

	public __goscriptAssign(source: invalidPair): void {
		const target = this._fields
		const values = source._fields
		target.position = values.position
		target.key = $.assignFieldValue(target.key, values.key, { kind: $.TypeKind.Interface, methods: [] })
		target.value = $.assignFieldValue(target.value, values.value, { kind: $.TypeKind.Interface, methods: [] })
	}

	public async MarshalLogObject(enc: zapcore.ObjectEncoder | null): globalThis.Promise<$.GoError> {
		const p = this;
		void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddInt64("position", $.int64(p.position)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await $.markAsStructValue($.cloneStructValue((await __goscript_field.Any("key", p.key)))).AddTo(enc)
		await $.markAsStructValue($.cloneStructValue((await __goscript_field.Any("value", p.value)))).AddTo(enc)
		return null
	}

	static __typeInfo = $.registerStructType(
		"zap.invalidPair",
		() => new invalidPair(),
		() => [$.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"])],
		invalidPair,
		() => [/* @__PURE__ */ $.structField("position", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "go.uber.org/zap" }), /* @__PURE__ */ $.structField("key", { kind: $.TypeKind.Interface, methods: [] }, [1], 8, false, { pkgPath: "go.uber.org/zap" }), /* @__PURE__ */ $.structField("value", { kind: $.TypeKind.Interface, methods: [] }, [2], 24, false, { pkgPath: "go.uber.org/zap" })]
	)
}

export const _oddNumberErrMsg: string = "Ignored key without a value."

export const _nonStringKeyErrMsg: string = "Ignored key-value pairs with non-string keys."

export const _multipleErrMsg: string = "Multiple errors without a key."

export async function getMessage(template: string, fmtArgs: $.Slice<any>): globalThis.Promise<string> {
	if ($.sliceLen(fmtArgs) == 0) {
		return template
	}

	if (!$.stringEqual(template, "")) {
		return fmt.Sprintf(template, ...(fmtArgs ?? []))
	}

	if ($.sliceLen(fmtArgs) == 1) {
		{
			let [str, ok] = $.typeAssertTuple<string>($.arrayIndex(fmtArgs!, 0), /* @__PURE__ */ $.basicType("string"))
			if (ok) {
				return str
			}
		}
	}
	return fmt.Sprint(...(fmtArgs ?? []))
}

export async function getMessageln(fmtArgs: $.Slice<any>): globalThis.Promise<string> {
	let msg = await fmt.Sprintln(...(fmtArgs ?? []))
	return $.sliceStringOrBytes(msg, undefined, $.stringLen(msg) - 1)
}

export async function invalidPairs_MarshalLogArray(ps: invalidPairs, enc: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	for (let __goscriptRangeTarget1 = ps, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		err = multierr.Append(err, (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(enc)).AppendObject($.interfaceValue<zapcore.ObjectMarshaler | null>((((__goscriptRangeWindow1.backing as any[])[__goscriptRangeWindow1.offset + i] as invalidPair)).clone(), "zap.invalidPair", "zap.invalidPair")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}
	return err
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (invalidPairs_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType("zap.invalidPair", "zap.invalidPairs"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("MarshalLogArray", [["enc", "zapcore.ArrayEncoder"]], ["error"])])
}

var __goscriptAwait: any
