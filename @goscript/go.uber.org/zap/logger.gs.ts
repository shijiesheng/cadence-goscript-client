// Generated file based on logger.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as os from "@goscript/os/index.js"

import * as strings from "@goscript/strings/index.js"

import * as bufferpool from "@goscript/go.uber.org/zap/internal/bufferpool/index.js"

import * as stacktrace from "@goscript/go.uber.org/zap/internal/stacktrace/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as buffer2 from "@goscript/go.uber.org/zap/buffer/index.js"

import type * as http from "@goscript/net/http/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_config from "./config.gs.ts"

import type * as __goscript_field from "./field.gs.ts"

import * as __goscript_http_handler from "./http_handler.gs.ts"

import * as __goscript_level from "./level.gs.ts"

import * as __goscript_options from "./options.gs.ts"

import * as __goscript_sugar from "./sugar.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/os/index.js"
import "@goscript/strings/index.js"
import "@goscript/go.uber.org/zap/internal/bufferpool/index.js"
import "@goscript/go.uber.org/zap/internal/stacktrace/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/go.uber.org/zap/buffer/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "./config.gs.ts"
import "./http_handler.gs.ts"
import "./level.gs.ts"
import "./options.gs.ts"
import "./sugar.gs.ts"

$.registerTypePackagePath("go.uber.org/zap", ["zap.Logger"])

export class Logger {
	public get core(): zapcore.Core | null {
		return this._fields.core
	}

	public set core(value: zapcore.Core | null) {
		this._fields.core = value
	}

	public get development(): boolean {
		return this._fields.development
	}

	public set development(value: boolean) {
		this._fields.development = value
	}

	public get addCaller(): boolean {
		return this._fields.addCaller
	}

	public set addCaller(value: boolean) {
		this._fields.addCaller = value
	}

	public get onPanic(): zapcore.CheckWriteHook | null {
		return this._fields.onPanic
	}

	public set onPanic(value: zapcore.CheckWriteHook | null) {
		this._fields.onPanic = value
	}

	public get onFatal(): zapcore.CheckWriteHook | null {
		return this._fields.onFatal
	}

	public set onFatal(value: zapcore.CheckWriteHook | null) {
		this._fields.onFatal = value
	}

	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get errorOutput(): zapcore.WriteSyncer | null {
		return this._fields.errorOutput
	}

	public set errorOutput(value: zapcore.WriteSyncer | null) {
		this._fields.errorOutput = value
	}

	public get addStack(): zapcore.LevelEnabler | null {
		return this._fields.addStack
	}

	public set addStack(value: zapcore.LevelEnabler | null) {
		this._fields.addStack = value
	}

	public get callerSkip(): number {
		return this._fields.callerSkip
	}

	public set callerSkip(value: number) {
		this._fields.callerSkip = value
	}

	public get clock(): zapcore.Clock | null {
		return this._fields.clock
	}

	public set clock(value: zapcore.Clock | null) {
		this._fields.clock = value
	}

	public _fields: {
		core: zapcore.Core | null
		development: boolean
		addCaller: boolean
		onPanic: zapcore.CheckWriteHook | null
		onFatal: zapcore.CheckWriteHook | null
		name: string
		errorOutput: zapcore.WriteSyncer | null
		addStack: zapcore.LevelEnabler | null
		callerSkip: number
		clock: zapcore.Clock | null
	}

	constructor(init?: Partial<{core?: zapcore.Core | null, development?: boolean, addCaller?: boolean, onPanic?: zapcore.CheckWriteHook | null, onFatal?: zapcore.CheckWriteHook | null, name?: string, errorOutput?: zapcore.WriteSyncer | null, addStack?: zapcore.LevelEnabler | null, callerSkip?: number, clock?: zapcore.Clock | null}>, __goscriptValue?: boolean) {
		this._fields = {
			core: init?.core ?? (null! as zapcore.Core | null),
			development: init?.development ?? (false as boolean),
			addCaller: init?.addCaller ?? (false as boolean),
			onPanic: init?.onPanic ?? (null! as zapcore.CheckWriteHook | null),
			onFatal: init?.onFatal ?? (null! as zapcore.CheckWriteHook | null),
			name: init?.name ?? ("" as string),
			errorOutput: init?.errorOutput ?? (null! as zapcore.WriteSyncer | null),
			addStack: init?.addStack ?? (null! as zapcore.LevelEnabler | null),
			callerSkip: init?.callerSkip ?? (0 as number),
			clock: init?.clock ?? (null! as zapcore.Clock | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public __goscriptClone(): Logger {
		return new Logger(this, true)
	}

	public __goscriptAssign(source: Logger): void {
		const target = this._fields
		const values = source._fields
		target.core = $.assignFieldValue(target.core, values.core, "zapcore.Core")
		target.development = values.development
		target.addCaller = values.addCaller
		target.onPanic = $.assignFieldValue(target.onPanic, values.onPanic, "zapcore.CheckWriteHook")
		target.onFatal = $.assignFieldValue(target.onFatal, values.onFatal, "zapcore.CheckWriteHook")
		target.name = values.name
		target.errorOutput = $.assignFieldValue(target.errorOutput, values.errorOutput, "zapcore.WriteSyncer")
		target.addStack = $.assignFieldValue(target.addStack, values.addStack, "zapcore.LevelEnabler")
		target.callerSkip = values.callerSkip
		target.clock = $.assignFieldValue(target.clock, values.clock, "zapcore.Clock")
	}

	public async Check(lvl: zapcore.Level, msg: string): globalThis.Promise<zapcore.CheckedEntry | $.VarRef<zapcore.CheckedEntry> | null> {
		const log: Logger | $.VarRef<Logger> | null = this;
		return (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? ((log as any) as Logger).check(lvl, msg) : Logger.prototype.check.call(log, lvl, msg))
	}

	public Core(): zapcore.Core | null {
		const log: Logger | $.VarRef<Logger> | null = this;
		return $.pointerValue<Logger>(log).core
	}

	public async DPanic(msg: string, fields: $.Slice<__goscript_field.Field>): globalThis.Promise<void> {
		const log: Logger | $.VarRef<Logger> | null = this;
		{
			let ce: zapcore.CheckedEntry | $.VarRef<zapcore.CheckedEntry> | null = await (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? ((log as any) as Logger).check(3, msg) : Logger.prototype.check.call(log, 3, msg))
			if (ce != null) {
				await (ce !== null && (ce as any).__isVarRef !== true && (ce as any).__goValue === undefined ? ((ce as any) as zapcore.CheckedEntry).Write(fields) : zapcore.CheckedEntry.prototype.Write.call(ce, fields))
			}
		}
	}

	public async Debug(msg: string, fields: $.Slice<__goscript_field.Field>): globalThis.Promise<void> {
		const log: Logger | $.VarRef<Logger> | null = this;
		{
			let ce: zapcore.CheckedEntry | $.VarRef<zapcore.CheckedEntry> | null = await (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? ((log as any) as Logger).check(-1, msg) : Logger.prototype.check.call(log, -1, msg))
			if (ce != null) {
				await (ce !== null && (ce as any).__isVarRef !== true && (ce as any).__goValue === undefined ? ((ce as any) as zapcore.CheckedEntry).Write(fields) : zapcore.CheckedEntry.prototype.Write.call(ce, fields))
			}
		}
	}

	public async Error(msg: string, fields: $.Slice<__goscript_field.Field>): globalThis.Promise<void> {
		const log: Logger | $.VarRef<Logger> | null = this;
		{
			let ce: zapcore.CheckedEntry | $.VarRef<zapcore.CheckedEntry> | null = await (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? ((log as any) as Logger).check(2, msg) : Logger.prototype.check.call(log, 2, msg))
			if (ce != null) {
				await (ce !== null && (ce as any).__isVarRef !== true && (ce as any).__goValue === undefined ? ((ce as any) as zapcore.CheckedEntry).Write(fields) : zapcore.CheckedEntry.prototype.Write.call(ce, fields))
			}
		}
	}

	public async Fatal(msg: string, fields: $.Slice<__goscript_field.Field>): globalThis.Promise<void> {
		const log: Logger | $.VarRef<Logger> | null = this;
		{
			let ce: zapcore.CheckedEntry | $.VarRef<zapcore.CheckedEntry> | null = await (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? ((log as any) as Logger).check(5, msg) : Logger.prototype.check.call(log, 5, msg))
			if (ce != null) {
				await (ce !== null && (ce as any).__isVarRef !== true && (ce as any).__goValue === undefined ? ((ce as any) as zapcore.CheckedEntry).Write(fields) : zapcore.CheckedEntry.prototype.Write.call(ce, fields))
			}
		}
	}

	public async Info(msg: string, fields: $.Slice<__goscript_field.Field>): globalThis.Promise<void> {
		const log: Logger | $.VarRef<Logger> | null = this;
		{
			let ce: zapcore.CheckedEntry | $.VarRef<zapcore.CheckedEntry> | null = await (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? ((log as any) as Logger).check(0, msg) : Logger.prototype.check.call(log, 0, msg))
			if (ce != null) {
				await (ce !== null && (ce as any).__isVarRef !== true && (ce as any).__goValue === undefined ? ((ce as any) as zapcore.CheckedEntry).Write(fields) : zapcore.CheckedEntry.prototype.Write.call(ce, fields))
			}
		}
	}

	public async Level(): globalThis.Promise<zapcore.Level> {
		const log: Logger | $.VarRef<Logger> | null = this;
		return zapcore.LevelOf(($.pointerValue<Logger>(log).core as zapcore.LevelEnabler | null))
	}

	public async Log(lvl: zapcore.Level, msg: string, fields: $.Slice<__goscript_field.Field>): globalThis.Promise<void> {
		const log: Logger | $.VarRef<Logger> | null = this;
		{
			let ce: zapcore.CheckedEntry | $.VarRef<zapcore.CheckedEntry> | null = await (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? ((log as any) as Logger).check(lvl, msg) : Logger.prototype.check.call(log, lvl, msg))
			if (ce != null) {
				await (ce !== null && (ce as any).__isVarRef !== true && (ce as any).__goValue === undefined ? ((ce as any) as zapcore.CheckedEntry).Write(fields) : zapcore.CheckedEntry.prototype.Write.call(ce, fields))
			}
		}
	}

	public Name(): string {
		const log: Logger | $.VarRef<Logger> | null = this;
		return $.pointerValue<Logger>(log).name
	}

	public Named(s: string): Logger | $.VarRef<Logger> | null {
		const log: Logger | $.VarRef<Logger> | null = this;
		if ($.stringEqual(s, "")) {
			return log
		}
		let l: Logger | $.VarRef<Logger> | null = (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? ((log as any) as Logger).clone() : Logger.prototype.clone.call(log))
		let l$: Logger = l == null ? $.pointerTarget<Logger>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<Logger>(l)
		if ($.stringEqual($.pointerValue<Logger>(log).name, "")) {
			;(l$ as Logger).name = s
		} else {
			;(l$ as Logger).name = strings.Join($.arrayToSlice<string>([(l$ as Logger).name, s]), ".")
		}
		return l
	}

	public async Panic(msg: string, fields: $.Slice<__goscript_field.Field>): globalThis.Promise<void> {
		const log: Logger | $.VarRef<Logger> | null = this;
		{
			let ce: zapcore.CheckedEntry | $.VarRef<zapcore.CheckedEntry> | null = await (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? ((log as any) as Logger).check(4, msg) : Logger.prototype.check.call(log, 4, msg))
			if (ce != null) {
				await (ce !== null && (ce as any).__isVarRef !== true && (ce as any).__goValue === undefined ? ((ce as any) as zapcore.CheckedEntry).Write(fields) : zapcore.CheckedEntry.prototype.Write.call(ce, fields))
			}
		}
	}

	public Sugar(): __goscript_sugar.SugaredLogger | $.VarRef<__goscript_sugar.SugaredLogger> | null {
		const log: Logger | $.VarRef<Logger> | null = this;
		let core: Logger | $.VarRef<Logger> | null = (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? ((log as any) as Logger).clone() : Logger.prototype.clone.call(log))
		let core$: Logger = core == null ? $.pointerTarget<Logger>(core) : (core as any).__isVarRef === true ? (core as any).value : (core as any).__goValue === undefined ? (core as any) : $.pointerTarget<Logger>(core);
		;(core$ as Logger).callerSkip = (core$ as Logger).callerSkip + (2)
		return new __goscript_sugar.SugaredLogger({base: core})
	}

	public async Sync(): globalThis.Promise<$.GoError> {
		const log: Logger | $.VarRef<Logger> | null = this;
		return $.pointerValue<Exclude<zapcore.Core, null>>($.pointerValue<Logger>(log).core).Sync()
	}

	public async Warn(msg: string, fields: $.Slice<__goscript_field.Field>): globalThis.Promise<void> {
		const log: Logger | $.VarRef<Logger> | null = this;
		{
			let ce: zapcore.CheckedEntry | $.VarRef<zapcore.CheckedEntry> | null = await (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? ((log as any) as Logger).check(1, msg) : Logger.prototype.check.call(log, 1, msg))
			if (ce != null) {
				await (ce !== null && (ce as any).__isVarRef !== true && (ce as any).__goValue === undefined ? ((ce as any) as zapcore.CheckedEntry).Write(fields) : zapcore.CheckedEntry.prototype.Write.call(ce, fields))
			}
		}
	}

	public async With(fields: $.Slice<__goscript_field.Field>): globalThis.Promise<Logger | $.VarRef<Logger> | null> {
		const log: Logger | $.VarRef<Logger> | null = this;
		if ($.sliceLen(fields) == 0) {
			return log
		}
		let l: Logger | $.VarRef<Logger> | null = (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? ((log as any) as Logger).clone() : Logger.prototype.clone.call(log))
		let l$: Logger = l == null ? $.pointerTarget<Logger>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<Logger>(l);
		;(l$ as Logger).core = (__goscriptAwait = $.pointerValue<Exclude<zapcore.Core, null>>((l$ as Logger).core).With(fields), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return l
	}

	public async WithLazy(fields: $.Slice<__goscript_field.Field>): globalThis.Promise<Logger | $.VarRef<Logger> | null> {
		const log: Logger | $.VarRef<Logger> | null = this;
		if ($.sliceLen(fields) == 0) {
			return log
		}
		return Logger.prototype.WithOptions.call(log, $.arrayToSlice<__goscript_options.Option | null>([await __goscript_options.WrapCore($.functionValue((core: zapcore.Core | null): zapcore.Core | null => {
			return zapcore.NewLazyWith(core, fields)
		}, ({ kind: $.TypeKind.Function, params: ["zapcore.Core"], results: ["zapcore.Core"] } as $.FunctionTypeInfo)))]))
	}

	public async WithOptions(opts: $.Slice<__goscript_options.Option | null>): globalThis.Promise<Logger | $.VarRef<Logger> | null> {
		const log: Logger | $.VarRef<Logger> | null = this;
		let c: Logger | $.VarRef<Logger> | null = (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? ((log as any) as Logger).clone() : Logger.prototype.clone.call(log))
		for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let opt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_options.Option | null)
			void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<__goscript_options.Option, null>) : $.pointerValue<Exclude<__goscript_options.Option, null>>(opt)).apply(c), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return c
	}

	public async check(lvl: zapcore.Level, msg: string): globalThis.Promise<zapcore.CheckedEntry | $.VarRef<zapcore.CheckedEntry> | null> {
		const log: Logger | $.VarRef<Logger> | null = this;
		using __defer = new $.DisposableStack()
		const log$: Logger = log == null ? $.pointerTarget<Logger>(log) : (log as any).__isVarRef === true ? (log as any).value : (log as any).__goValue === undefined ? (log as any) : $.pointerTarget<Logger>(log)
		// Logger.check must always be called directly by a method in the
		// Logger interface (e.g., Check, Info, Fatal).
		// This skips Logger.check and the Info/Fatal/Check/etc. method that
		// called it.
		const callerSkipOffset: number = 2

		// Check the level first to reduce the cost of disabled log calls.
		// Since Panic and higher may exit, we skip the optimization for those levels.
		if ((lvl < 3) && !(__goscriptAwait = $.pointerValue<Exclude<zapcore.Core, null>>((log$ as Logger).core).Enabled(lvl), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return null
		}

		// Create basic checked entry thru the core; this will be non-nil if the
		// log message will actually be written somewhere.
		let ent = (await (async () => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<zapcore.Clock, null>>((log$ as Logger).clock).Now(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))); return new zapcore.Entry({LoggerName: (log$ as Logger).name, Time: __goscriptLiteralField0, Level: lvl, Message: msg}, true) })())
		let ce: zapcore.CheckedEntry | $.VarRef<zapcore.CheckedEntry> | null = ((__goscriptAwait = $.pointerValue<Exclude<zapcore.Core, null>>((log$ as Logger).core).Check((ent).clone(), null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as zapcore.CheckedEntry | $.VarRef<zapcore.CheckedEntry> | null)
		let willWrite = ce != null

		// Set up any required terminal behavior.
		switch (ent.Level) {
			case zapcore.PanicLevel:
			{
				ce = await zapcore.CheckedEntry.prototype.After.call(ce, ent, terminalHookOverride($.namedValueInterfaceValue<zapcore.CheckWriteHook | null>(zapcore.WriteThenPanic, "zapcore.CheckWriteAction", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (log$ as Logger).onPanic))
				break
			}
			case zapcore.FatalLevel:
			{
				ce = await zapcore.CheckedEntry.prototype.After.call(ce, ent, terminalHookOverride($.namedValueInterfaceValue<zapcore.CheckWriteHook | null>(zapcore.WriteThenFatal, "zapcore.CheckWriteAction", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (log$ as Logger).onFatal))
				break
			}
			case zapcore.DPanicLevel:
			{
				if ((log$ as Logger).development) {
					ce = await zapcore.CheckedEntry.prototype.After.call(ce, ent, terminalHookOverride($.namedValueInterfaceValue<zapcore.CheckWriteHook | null>(zapcore.WriteThenPanic, "zapcore.CheckWriteAction", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (log$ as Logger).onPanic))
				}
				break
			}
		}

		// Only do further annotation if we're going to write this message; checked
		// entries that exist only for terminal behavior don't benefit from
		// annotation.
		if (!willWrite) {
			return ce
		}

		// Thread the error output through to the CheckedEntry.
		$.pointerValue<zapcore.CheckedEntry>(ce).ErrorOutput = (log$ as Logger).errorOutput

		let addStack = (__goscriptAwait = $.pointerValue<Exclude<zapcore.LevelEnabler, null>>((log$ as Logger).addStack).Enabled($.pointerValue<zapcore.CheckedEntry>(ce).Entry.Level), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (!(log$ as Logger).addCaller && !addStack) {
			return ce
		}

		// Adding the caller or stack trace requires capturing the callers of
		// this function. We'll share information between these two.
		let stackDepth = 0
		if (addStack) {
			stackDepth = 1
		}
		let stack: stacktrace.Stack | $.VarRef<stacktrace.Stack> | null = await stacktrace.Capture((log$ as Logger).callerSkip + 2, stackDepth)
		__defer.defer(() => { (stack !== null && (stack as any).__isVarRef !== true && (stack as any).__goValue === undefined ? ((stack as any) as stacktrace.Stack).Free() : stacktrace.Stack.prototype.Free.call(stack)) })

		if ((stack !== null && (stack as any).__isVarRef !== true && (stack as any).__goValue === undefined ? ((stack as any) as stacktrace.Stack).Count() : stacktrace.Stack.prototype.Count.call(stack)) == 0) {
			if ((log$ as Logger).addCaller) {
				await fmt.Fprintf($.pointerValueOrNil(((log$ as Logger).errorOutput as io.Writer | null))!, "%v Logger.check error: failed to get caller\n", $.interfaceValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ent.Time)).UTC())), "time.Time", "time.Time"));
				;(__goscriptAwait = $.pointerValue<Exclude<zapcore.WriteSyncer, null>>((log$ as Logger).errorOutput).Sync(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return ce
		}

		let [frame, more] = (stack !== null && (stack as any).__isVarRef !== true && (stack as any).__goValue === undefined ? ((stack as any) as stacktrace.Stack).Next() : stacktrace.Stack.prototype.Next.call(stack))

		if ((log$ as Logger).addCaller) {
			$.assignStruct($.pointerValue<zapcore.CheckedEntry>(ce).Entry.Caller, new zapcore.EntryCaller({Defined: frame.PC != 0, PC: frame.PC, File: frame.File, Line: frame.Line, Function: frame.Function}, true))
		}

		if (addStack) {
			let buffer: buffer2.Buffer | $.VarRef<buffer2.Buffer> | null = ((__goscriptAwait = bufferpool.Get!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as buffer2.Buffer | $.VarRef<buffer2.Buffer> | null)
			__defer.defer(() => { (buffer !== null && (buffer as any).__isVarRef !== true && (buffer as any).__goValue === undefined ? ((buffer as any) as buffer2.Buffer).Free() : buffer2.Buffer.prototype.Free.call(buffer)) })

			let stackfmt = $.varRef(stacktrace.NewFormatter(buffer))

			// We've already extracted the first frame, so format that
			// separately and defer to stackfmt for the rest.
			stackfmt.value.FormatFrame(frame)
			if (more) {
				stackfmt.value.FormatStack(stack)
			}
			$.pointerValue<zapcore.CheckedEntry>(ce).Entry.Stack = (buffer !== null && (buffer as any).__isVarRef !== true && (buffer as any).__goValue === undefined ? ((buffer as any) as buffer2.Buffer).String() : buffer2.Buffer.prototype.String.call(buffer))
		}

		return ce
	}

	public clone(): Logger | $.VarRef<Logger> | null {
		const log: Logger | $.VarRef<Logger> | null = this;
		let clone = $.varRef($.markAsStructValue($.cloneStructValue($.pointerValue<Logger>(log))))
		return clone
	}

	static __typeInfo = $.registerStructType(
		"zap.Logger",
		() => new Logger(),
		() => [$.methodSignature("Check", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")], ["msg", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")], true), $.methodSignature("Core", [], ["zapcore.Core"], true), $.methodSignature("DPanic", [["msg", /* @__PURE__ */ $.basicType("string")], ["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], [], true), $.methodSignature("Debug", [["msg", /* @__PURE__ */ $.basicType("string")], ["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], [], true), $.methodSignature("Error", [["msg", /* @__PURE__ */ $.basicType("string")], ["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], [], true), $.methodSignature("Fatal", [["msg", /* @__PURE__ */ $.basicType("string")], ["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], [], true), $.methodSignature("Info", [["msg", /* @__PURE__ */ $.basicType("string")], ["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], [], true), $.methodSignature("Level", [], [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")], true), $.methodSignature("Log", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")], ["msg", /* @__PURE__ */ $.basicType("string")], ["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], [], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Named", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("zap.Logger")], true), $.methodSignature("Panic", [["msg", /* @__PURE__ */ $.basicType("string")], ["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], [], true), $.methodSignature("Sugar", [], [/* @__PURE__ */ $.pointerType("zap.SugaredLogger")], true), $.methodSignature("Sync", [], ["error"], true), $.methodSignature("Warn", [["msg", /* @__PURE__ */ $.basicType("string")], ["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], [], true), $.methodSignature("With", [["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], [/* @__PURE__ */ $.pointerType("zap.Logger")], true), $.methodSignature("WithLazy", [["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], [/* @__PURE__ */ $.pointerType("zap.Logger")], true), $.methodSignature("WithOptions", [["opts", /* @__PURE__ */ $.sliceType("zap.Option")]], [/* @__PURE__ */ $.pointerType("zap.Logger")], true), $.methodSignature("check", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")], ["msg", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")], true), $.methodSignature("clone", [], [/* @__PURE__ */ $.pointerType("zap.Logger")], true)],
		Logger,
		() => [/* @__PURE__ */ $.structField("core", "zapcore.Core", [0], 0, false, { pkgPath: "go.uber.org/zap" }), /* @__PURE__ */ $.structField("development", /* @__PURE__ */ $.basicType("bool"), [1], 16, false, { pkgPath: "go.uber.org/zap" }), /* @__PURE__ */ $.structField("addCaller", /* @__PURE__ */ $.basicType("bool"), [2], 17, false, { pkgPath: "go.uber.org/zap" }), /* @__PURE__ */ $.structField("onPanic", "zapcore.CheckWriteHook", [3], 24, false, { pkgPath: "go.uber.org/zap" }), /* @__PURE__ */ $.structField("onFatal", "zapcore.CheckWriteHook", [4], 40, false, { pkgPath: "go.uber.org/zap" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [5], 56, false, { pkgPath: "go.uber.org/zap" }), /* @__PURE__ */ $.structField("errorOutput", "zapcore.WriteSyncer", [6], 72, false, { pkgPath: "go.uber.org/zap" }), /* @__PURE__ */ $.structField("addStack", "zapcore.LevelEnabler", [7], 88, false, { pkgPath: "go.uber.org/zap" }), /* @__PURE__ */ $.structField("callerSkip", /* @__PURE__ */ $.basicType("int"), [8], 104, false, { pkgPath: "go.uber.org/zap" }), /* @__PURE__ */ $.structField("clock", "zapcore.Clock", [9], 112, false, { pkgPath: "go.uber.org/zap" })]
	)
}

export async function New(core: zapcore.Core | null, options: $.Slice<__goscript_options.Option | null>): globalThis.Promise<Logger | $.VarRef<Logger> | null> {
	if (core == null) {
		return NewNop()
	}
	let log: Logger | $.VarRef<Logger> | null = (() => { const __goscriptLiteralField1 = zapcore.Lock($.interfaceValue<zapcore.WriteSyncer | null>(os.Stderr, "*os.File", /* @__PURE__ */ $.pointerType("os.File"))); return new Logger({core: core, errorOutput: __goscriptLiteralField1, addStack: $.namedValueInterfaceValue<zapcore.LevelEnabler | null>(((zapcore.FatalLevel + 1) << 24 >> 24), "zapcore.Level", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), clock: $.interfaceValue<zapcore.Clock | null>(($.pointerValue<zapcore.systemClock>(zapcore.DefaultClock)).clone(), "zapcore.systemClock", "zapcore.systemClock")}) })()
	return (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? ((log as any) as Logger).WithOptions(options) : Logger.prototype.WithOptions.call(log, options))
}

export function NewNop(): Logger | $.VarRef<Logger> | null {
	return (() => { const __goscriptLiteralField2 = zapcore.NewNopCore(); const __goscriptLiteralField3 = zapcore.AddSync(io.Discard); return new Logger({core: __goscriptLiteralField2, errorOutput: __goscriptLiteralField3, addStack: $.namedValueInterfaceValue<zapcore.LevelEnabler | null>(((zapcore.FatalLevel + 1) << 24 >> 24), "zapcore.Level", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), clock: $.interfaceValue<zapcore.Clock | null>(($.pointerValue<zapcore.systemClock>(zapcore.DefaultClock)).clone(), "zapcore.systemClock", "zapcore.systemClock")}) })()
}

export async function NewProduction(options: $.Slice<__goscript_options.Option | null>): globalThis.Promise<[Logger | $.VarRef<Logger> | null, $.GoError]> {
	return $.markAsStructValue($.cloneStructValue(__goscript_config.NewProductionConfig())).Build(options)
}

export async function NewDevelopment(options: $.Slice<__goscript_options.Option | null>): globalThis.Promise<[Logger | $.VarRef<Logger> | null, $.GoError]> {
	return $.markAsStructValue($.cloneStructValue(__goscript_config.NewDevelopmentConfig())).Build(options)
}

export function Must(logger: Logger | $.VarRef<Logger> | null, err: $.GoError): Logger | $.VarRef<Logger> | null {
	if (err != null) {
		$.panic((err as any))
	}

	return logger
}

export async function NewExample(options: $.Slice<__goscript_options.Option | null>): globalThis.Promise<Logger | $.VarRef<Logger> | null> {
	let encoderCfg = new zapcore.EncoderConfig({MessageKey: "msg", LevelKey: "level", NameKey: "logger", EncodeLevel: zapcore.LowercaseLevelEncoder, EncodeTime: zapcore.ISO8601TimeEncoder, EncodeDuration: zapcore.StringDurationEncoder}, true)
	let core = zapcore.NewCore(await zapcore.NewJSONEncoder(encoderCfg), $.interfaceValue<zapcore.WriteSyncer | null>(os.Stdout, "*os.File", /* @__PURE__ */ $.pointerType("os.File")), $.namedValueInterfaceValue<zapcore.LevelEnabler | null>(-1, "zapcore.Level", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))
	return Logger.prototype.WithOptions.call(await New(core, null), options)
}

export function terminalHookOverride(defaultHook: zapcore.CheckWriteHook | null, override: zapcore.CheckWriteHook | null): zapcore.CheckWriteHook | null {
	// A nil or WriteThenNoop hook will lead to continued execution after
	// a Panic or Fatal log entry, which is unexpected. For example,
	//
	//   f, err := os.Open(..)
	//   if err != nil {
	//     log.Fatal("cannot open", zap.Error(err))
	//   }
	//   fmt.Println(f.Name())
	//
	// The f.Name() will panic if we continue execution after the log.Fatal.
	if ((override == null) || ($.comparableEqual(override, $.namedValueInterfaceValue<zapcore.CheckWriteHook | null>(zapcore.WriteThenNoop, "zapcore.CheckWriteAction", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))) {
		return defaultHook
	}
	return override
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({OnWrite: (receiver: any, ...args: any[]) => (zapcore.CheckWriteAction_OnWrite as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "zapcore.CheckWriteAction"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("OnWrite", [["ce", /* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")], ["_", /* @__PURE__ */ $.sliceType("zapcore.Field")]])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({CapitalString: (receiver: any, ...args: any[]) => (zapcore.Level_CapitalString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enabled: (receiver: any, ...args: any[]) => (zapcore.Level_Enabled as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (zapcore.Level_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (zapcore.Level_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int8", "zapcore.Level"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("CapitalString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Enabled", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
