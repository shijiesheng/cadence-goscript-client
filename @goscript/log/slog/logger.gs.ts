// Generated file based on logger.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as log2 from "@goscript/log/index.js"

import * as loginternal from "@goscript/log/internal/index.js"

import * as internal from "@goscript/log/slog/internal/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as io from "@goscript/io/index.js"

import * as buffer from "@goscript/log/slog/internal/buffer/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_attr from "./attr.gs.ts"

import * as __goscript_handler from "./handler.gs.ts"

import * as __goscript_level from "./level.gs.ts"

import * as __goscript_record from "./record.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/log/index.js"
import "@goscript/log/internal/index.js"
import "@goscript/log/slog/internal/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/io/index.js"
import "@goscript/log/slog/internal/buffer/index.js"
import "@goscript/sync/index.js"
import "./attr.gs.ts"
import "./handler.gs.ts"
import "./level.gs.ts"
import "./record.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("log/slog", ["slog.handlerWriter", "slog.Logger"])

export class handlerWriter {
	public get h(): __goscript_handler.Handler | null {
		return this._fields.h
	}

	public set h(value: __goscript_handler.Handler | null) {
		this._fields.h = value
	}

	public get level(): __goscript_level.Leveler | null {
		return this._fields.level
	}

	public set level(value: __goscript_level.Leveler | null) {
		this._fields.level = value
	}

	public get capturePC(): boolean {
		return this._fields.capturePC
	}

	public set capturePC(value: boolean) {
		this._fields.capturePC = value
	}

	public _fields: {
		h: __goscript_handler.Handler | null
		level: __goscript_level.Leveler | null
		capturePC: boolean
	}

	constructor(init?: Partial<{h?: __goscript_handler.Handler | null, level?: __goscript_level.Leveler | null, capturePC?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			h: init?.h ?? (null! as __goscript_handler.Handler | null),
			level: init?.level ?? (null! as __goscript_level.Leveler | null),
			capturePC: init?.capturePC ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): handlerWriter {
		return new handlerWriter(this, true)
	}

	public __goscriptAssign(source: handlerWriter): void {
		const target = this._fields
		const values = source._fields
		target.h = $.assignFieldValue(target.h, values.h, "slog.Handler")
		target.level = $.assignFieldValue(target.level, values.level, "slog.Leveler")
		target.capturePC = values.capturePC
	}

	public async Write(buf: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const w: handlerWriter | $.VarRef<handlerWriter> | null = this;
		const w$: handlerWriter = w == null ? $.pointerTarget<handlerWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<handlerWriter>(w)
		let level = (__goscriptAwait = $.pointerValue<Exclude<__goscript_level.Leveler, null>>((w$ as handlerWriter).level).Level(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (!(__goscriptAwait = $.pointerValue<Exclude<__goscript_handler.Handler, null>>((w$ as handlerWriter).h).Enabled(context.Background(), level), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return [0, null]
		}
		let pc: number = 0
		if (!internal.IgnorePC && (w$ as handlerWriter).capturePC) {
			// skip [runtime.Callers, w.Write, Logger.Output, log.Print]
			let pcs: number[] = $.arrayValue(globalThis.Array.from({ length: 1 }, () => 0))
			runtime.Callers(4, $.goSlice(pcs, undefined, undefined))
			pc = $.arrayIndex(pcs, 0)
		}

		// Remove final newline.
		let origLen = $.sliceLen(buf)
		buf = bytes.TrimSuffix(buf, new Uint8Array([10]) as $.Slice<number>)
		let r = __goscript_record.NewRecord(time.Now(), level, $.bytesToString(buf), pc)
		return [origLen, (__goscriptAwait = $.pointerValue<Exclude<__goscript_handler.Handler, null>>((w$ as handlerWriter).h).Handle(context.Background(), (r).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]
	}

	static __typeInfo = $.registerStructType(
		"slog.handlerWriter",
		() => new handlerWriter(),
		() => [$.methodSignature("Write", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		handlerWriter,
		() => [/* @__PURE__ */ $.structField("h", "slog.Handler", [0], 0, false, { pkgPath: "log/slog" }), /* @__PURE__ */ $.structField("level", "slog.Leveler", [1], 16, false, { pkgPath: "log/slog" }), /* @__PURE__ */ $.structField("capturePC", /* @__PURE__ */ $.basicType("bool"), [2], 32, false, { pkgPath: "log/slog" })]
	)
}

export class Logger {
	public get handler(): __goscript_handler.Handler | null {
		return this._fields.handler
	}

	public set handler(value: __goscript_handler.Handler | null) {
		this._fields.handler = value
	}

	public _fields: {
		handler: __goscript_handler.Handler | null
	}

	constructor(init?: Partial<{handler?: __goscript_handler.Handler | null}>, __goscriptValue?: boolean) {
		this._fields = {
			handler: init?.handler ?? (null! as __goscript_handler.Handler | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public __goscriptClone(): Logger {
		return new Logger(this, true)
	}

	public __goscriptAssign(source: Logger): void {
		const target = this._fields
		const values = source._fields
		target.handler = $.assignFieldValue(target.handler, values.handler, "slog.Handler")
	}

	public async Debug(msg: string, args: $.Slice<any>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).log(context.Background(), -4, msg, args) : Logger.prototype.log.call(l, context.Background(), -4, msg, args))
	}

	public async DebugContext(ctx: context.Context | null, msg: string, args: $.Slice<any>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).log(ctx, -4, msg, args) : Logger.prototype.log.call(l, ctx, -4, msg, args))
	}

	public async Enabled(ctx: context.Context | null, level: __goscript_level.Level): globalThis.Promise<boolean> {
		const l: Logger | $.VarRef<Logger> | null = this;
		if (ctx == null) {
			ctx = context.Background()
		}
		return $.pointerValue<Exclude<__goscript_handler.Handler, null>>((l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).Handler() : Logger.prototype.Handler.call(l))).Enabled(ctx, level)
	}

	public async Error(msg: string, args: $.Slice<any>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).log(context.Background(), 8, msg, args) : Logger.prototype.log.call(l, context.Background(), 8, msg, args))
	}

	public async ErrorContext(ctx: context.Context | null, msg: string, args: $.Slice<any>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).log(ctx, 8, msg, args) : Logger.prototype.log.call(l, ctx, 8, msg, args))
	}

	public Handler(): __goscript_handler.Handler | null {
		const l: Logger | $.VarRef<Logger> | null = this;
		return $.pointerValue<Logger>(l).handler
	}

	public async Info(msg: string, args: $.Slice<any>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).log(context.Background(), 0, msg, args) : Logger.prototype.log.call(l, context.Background(), 0, msg, args))
	}

	public async InfoContext(ctx: context.Context | null, msg: string, args: $.Slice<any>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).log(ctx, 0, msg, args) : Logger.prototype.log.call(l, ctx, 0, msg, args))
	}

	public async Log(ctx: context.Context | null, level: __goscript_level.Level, msg: string, args: $.Slice<any>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).log(ctx, level, msg, args) : Logger.prototype.log.call(l, ctx, level, msg, args))
	}

	public async LogAttrs(ctx: context.Context | null, level: __goscript_level.Level, msg: string, attrs: $.Slice<__goscript_attr.Attr>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).logAttrs(ctx, level, msg, attrs) : Logger.prototype.logAttrs.call(l, ctx, level, msg, attrs))
	}

	public async Warn(msg: string, args: $.Slice<any>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).log(context.Background(), 4, msg, args) : Logger.prototype.log.call(l, context.Background(), 4, msg, args))
	}

	public async WarnContext(ctx: context.Context | null, msg: string, args: $.Slice<any>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).log(ctx, 4, msg, args) : Logger.prototype.log.call(l, ctx, 4, msg, args))
	}

	public async With(args: $.Slice<any>): globalThis.Promise<Logger | $.VarRef<Logger> | null> {
		const l: Logger | $.VarRef<Logger> | null = this;
		if ($.sliceLen(args) == 0) {
			return l
		}
		let c: Logger | $.VarRef<Logger> | null = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).clone() : Logger.prototype.clone.call(l))
		$.pointerValue<Logger>(c).handler = (__goscriptAwait = $.pointerValue<Exclude<__goscript_handler.Handler, null>>($.pointerValue<Logger>(l).handler).WithAttrs(__goscript_attr.argsToAttrSlice(args)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return c
	}

	public async WithGroup(name: string): globalThis.Promise<Logger | $.VarRef<Logger> | null> {
		const l: Logger | $.VarRef<Logger> | null = this;
		if ($.stringEqual(name, "")) {
			return l
		}
		let c: Logger | $.VarRef<Logger> | null = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).clone() : Logger.prototype.clone.call(l))
		$.pointerValue<Logger>(c).handler = (__goscriptAwait = $.pointerValue<Exclude<__goscript_handler.Handler, null>>($.pointerValue<Logger>(l).handler).WithGroup(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return c
	}

	public clone(): Logger | $.VarRef<Logger> | null {
		const l: Logger | $.VarRef<Logger> | null = this;
		let c = $.varRef($.markAsStructValue($.cloneStructValue($.pointerValue<Logger>(l))))
		return c
	}

	public async log(ctx: context.Context | null, level: __goscript_level.Level, msg: string, args: $.Slice<any>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		if (ctx == null) {
			ctx = context.Background()
		}
		if (!await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).Enabled(ctx, level) : Logger.prototype.Enabled.call(l, ctx, level))) {
			return
		}
		let pc: number = 0
		if (!internal.IgnorePC) {
			let pcs: number[] = $.arrayValue(globalThis.Array.from({ length: 1 }, () => 0))
			// skip [runtime.Callers, this function, this function's caller]
			runtime.Callers(3, $.goSlice(pcs, undefined, undefined))
			pc = $.arrayIndex(pcs, 0)
		}
		let r = $.varRef(__goscript_record.NewRecord(time.Now(), level, msg, pc))
		r.value.Add(args);
		;(__goscriptAwait = $.pointerValue<Exclude<__goscript_handler.Handler, null>>((l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).Handler() : Logger.prototype.Handler.call(l))).Handle(ctx, (r.value).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async logAttrs(ctx: context.Context | null, level: __goscript_level.Level, msg: string, attrs: $.Slice<__goscript_attr.Attr>): globalThis.Promise<void> {
		const l: Logger | $.VarRef<Logger> | null = this;
		if (ctx == null) {
			ctx = context.Background()
		}
		if (!await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).Enabled(ctx, level) : Logger.prototype.Enabled.call(l, ctx, level))) {
			return
		}
		let pc: number = 0
		if (!internal.IgnorePC) {
			let pcs: number[] = $.arrayValue(globalThis.Array.from({ length: 1 }, () => 0))
			// skip [runtime.Callers, this function, this function's caller]
			runtime.Callers(3, $.goSlice(pcs, undefined, undefined))
			pc = $.arrayIndex(pcs, 0)
		}
		let r = $.varRef(__goscript_record.NewRecord(time.Now(), level, msg, pc))
		r.value.AddAttrs(attrs);
		;(__goscriptAwait = $.pointerValue<Exclude<__goscript_handler.Handler, null>>((l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).Handler() : Logger.prototype.Handler.call(l))).Handle(ctx, (r.value).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"slog.Logger",
		() => new Logger(),
		() => [$.methodSignature("Debug", [["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("DebugContext", [["ctx", "context.Context"], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Enabled", [["ctx", "context.Context"], ["level", /* @__PURE__ */ $.basicType("int", "slog.Level")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Error", [["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("ErrorContext", [["ctx", "context.Context"], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Handler", [], ["slog.Handler"], true), $.methodSignature("Info", [["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("InfoContext", [["ctx", "context.Context"], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Log", [["ctx", "context.Context"], ["level", /* @__PURE__ */ $.basicType("int", "slog.Level")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("LogAttrs", [["ctx", "context.Context"], ["level", /* @__PURE__ */ $.basicType("int", "slog.Level")], ["msg", /* @__PURE__ */ $.basicType("string")], ["attrs", /* @__PURE__ */ $.sliceType("slog.Attr")]], [], true), $.methodSignature("Warn", [["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("WarnContext", [["ctx", "context.Context"], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("With", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("slog.Logger")], true), $.methodSignature("WithGroup", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("slog.Logger")], true), $.methodSignature("clone", [], [/* @__PURE__ */ $.pointerType("slog.Logger")], true), $.methodSignature("log", [["ctx", "context.Context"], ["level", /* @__PURE__ */ $.basicType("int", "slog.Level")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("logAttrs", [["ctx", "context.Context"], ["level", /* @__PURE__ */ $.basicType("int", "slog.Level")], ["msg", /* @__PURE__ */ $.basicType("string")], ["attrs", /* @__PURE__ */ $.sliceType("slog.Attr")]], [], true)],
		Logger,
		() => [/* @__PURE__ */ $.structField("handler", "slog.Handler", [0], 0, false, { pkgPath: "log/slog" })]
	)
}

export let defaultLogger: $.VarRef<atomic.Pointer<Logger>> = $.varRef($.markAsStructValue(new atomic.Pointer<Logger>()))

export function __goscript_set_defaultLogger(__goscriptValue: atomic.Pointer<Logger>): void {
	$.assignStruct(defaultLogger.value, __goscriptValue)
}

export var logLoggerLevel: $.VarRef<__goscript_level.LevelVar>

export function __goscript_init_logLoggerLevel(): void {
	if (((logLoggerLevel) as any) === undefined) {
		logLoggerLevel = $.varRef(new __goscript_level.LevelVar(undefined, true))
	}
}

export function __goscript_get_logLoggerLevel(): $.VarRef<__goscript_level.LevelVar> {
	if (((logLoggerLevel) as any) === undefined) {
		__goscript_init_logLoggerLevel()
	}
	return logLoggerLevel
}

export function __goscript_set_logLoggerLevel(__goscriptValue: __goscript_level.LevelVar): void {
	$.assignStruct(__goscript_get_logLoggerLevel().value, __goscriptValue)
}

export function SetLogLoggerLevel(level: __goscript_level.Level): __goscript_level.Level {
	let oldLevel: __goscript_level.Level = 0
	oldLevel = $.pointerValue<__goscript_level.LevelVar>(__goscript_get_logLoggerLevel()).Level()
	$.pointerValue<__goscript_level.LevelVar>(__goscript_get_logLoggerLevel()).Set(level)
	return oldLevel
}

function __goscriptInit0(): void {
	defaultLogger.value.Store(New($.interfaceValue<__goscript_handler.Handler | null>(__goscript_handler.newDefaultHandler(loginternal.DefaultOutput), "*slog.defaultHandler", /* @__PURE__ */ $.pointerType("slog.defaultHandler"))))
}

export function Default(): Logger | $.VarRef<Logger> | null {
	return (defaultLogger.value.Load() as Logger | $.VarRef<Logger> | null)
}

export async function SetDefault(l: Logger | $.VarRef<Logger> | null): globalThis.Promise<void> {
	defaultLogger.value.Store(l)
	// If the default's handler is a defaultHandler, then don't use a handleWriter,
	// or we'll deadlock as they both try to acquire the log default mutex.
	// The defaultHandler will use whatever the log default writer is currently
	// set to, which is correct.
	// This can occur with SetDefault(Default()).
	// See TestSetDefault.
	{
		let [, ok] = $.typeAssertTuple<__goscript_handler.defaultHandler | $.VarRef<__goscript_handler.defaultHandler> | null>((l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).Handler() : Logger.prototype.Handler.call(l)), /* @__PURE__ */ $.pointerType("slog.defaultHandler"))
		if (!ok) {
			let capturePC = (log2.Flags() & (log2.Lshortfile | log2.Llongfile)) != 0
			await log2.SetOutput($.interfaceValue<io.Writer | null>((() => { const __goscriptLiteralField0 = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Logger).Handler() : Logger.prototype.Handler.call(l)); return new handlerWriter({h: __goscriptLiteralField0, level: $.interfaceValue<__goscript_level.Leveler | null>(__goscript_get_logLoggerLevel(), "*slog.LevelVar", /* @__PURE__ */ $.pointerType("slog.LevelVar")), capturePC: capturePC}) })(), "*slog.handlerWriter", /* @__PURE__ */ $.pointerType("slog.handlerWriter")))
			log2.SetFlags(0)
		}
	}
}

export function New(h: __goscript_handler.Handler | null): Logger | $.VarRef<Logger> | null {
	if (h == null) {
		$.panic("nil Handler")
	}
	return new Logger({handler: h})
}

export async function With(args: $.Slice<any>): globalThis.Promise<Logger | $.VarRef<Logger> | null> {
	return Logger.prototype.With.call(Default(), args)
}

export async function NewLogLogger(h: __goscript_handler.Handler | null, level: __goscript_level.Level): globalThis.Promise<log2.Logger | $.VarRef<log2.Logger> | null> {
	return log2.New($.interfaceValue<io.Writer | null>(new handlerWriter({h: h, level: $.namedValueInterfaceValue<__goscript_level.Leveler | null>(level, "slog.Level", __goscriptStatic1(), __goscriptStatic2(), __goscriptStatic3()), capturePC: true}), "*slog.handlerWriter", /* @__PURE__ */ $.pointerType("slog.handlerWriter")), "", 0)
}

export async function Debug(msg: string, args: $.Slice<any>): globalThis.Promise<void> {
	await Logger.prototype.log.call(Default(), context.Background(), -4, msg, args)
}

export async function DebugContext(ctx: context.Context | null, msg: string, args: $.Slice<any>): globalThis.Promise<void> {
	await Logger.prototype.log.call(Default(), ctx, -4, msg, args)
}

export async function Info(msg: string, args: $.Slice<any>): globalThis.Promise<void> {
	await Logger.prototype.log.call(Default(), context.Background(), 0, msg, args)
}

export async function InfoContext(ctx: context.Context | null, msg: string, args: $.Slice<any>): globalThis.Promise<void> {
	await Logger.prototype.log.call(Default(), ctx, 0, msg, args)
}

export async function Warn(msg: string, args: $.Slice<any>): globalThis.Promise<void> {
	await Logger.prototype.log.call(Default(), context.Background(), 4, msg, args)
}

export async function WarnContext(ctx: context.Context | null, msg: string, args: $.Slice<any>): globalThis.Promise<void> {
	await Logger.prototype.log.call(Default(), ctx, 4, msg, args)
}

export async function Error(msg: string, args: $.Slice<any>): globalThis.Promise<void> {
	await Logger.prototype.log.call(Default(), context.Background(), 8, msg, args)
}

export async function ErrorContext(ctx: context.Context | null, msg: string, args: $.Slice<any>): globalThis.Promise<void> {
	await Logger.prototype.log.call(Default(), ctx, 8, msg, args)
}

export async function Log(ctx: context.Context | null, level: __goscript_level.Level, msg: string, args: $.Slice<any>): globalThis.Promise<void> {
	await Logger.prototype.log.call(Default(), ctx, level, msg, args)
}

export async function LogAttrs(ctx: context.Context | null, level: __goscript_level.Level, msg: string, attrs: $.Slice<__goscript_attr.Attr>): globalThis.Promise<void> {
	await Logger.prototype.logAttrs.call(Default(), ctx, level, msg, attrs)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "slog.Logger", zero: () => $.markAsStructValue(new Logger()) }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({AppendText: (receiver: any, ...args: any[]) => (__goscript_level.Level_AppendText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Level: (receiver: any, ...args: any[]) => (__goscript_level.Level_Level as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (__goscript_level.Level_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (__goscript_level.Level_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_level.Level_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= (/* @__PURE__ */ $.basicType("int", "slog.Level"))
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ([$.methodSignature("AppendText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Level", [], [/* @__PURE__ */ $.basicType("int", "slog.Level")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any

export { __goscriptInit0 }
