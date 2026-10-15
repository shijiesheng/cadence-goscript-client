// Generated file based on handler.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as buffer from "@goscript/log/slog/internal/buffer/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as slices from "@goscript/slices/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_attr from "./attr.gs.ts"

import * as __goscript_json_handler from "./json_handler.gs.ts"

import * as __goscript_level from "./level.gs.ts"

import * as __goscript_logger from "./logger.gs.ts"

import * as __goscript_record from "./record.gs.ts"

import * as __goscript_text_handler from "./text_handler.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/log/slog/internal/buffer/index.js"
import "@goscript/reflect/index.js"
import "@goscript/slices/index.js"
import "@goscript/strconv/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/sync/atomic/index.js"
import "./attr.gs.ts"
import "./json_handler.gs.ts"
import "./level.gs.ts"
import "./logger.gs.ts"
import "./record.gs.ts"
import "./text_handler.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("log/slog", ["slog.Handler", "slog.defaultHandler", "slog.HandlerOptions", "slog.commonHandler", "slog.handleState", "slog.discardHandler"])

export type Handler = {
	Enabled(_p0: context.Context | null, _p1: __goscript_level.Level): boolean | globalThis.Promise<boolean>
	Handle(_p0: context.Context | null, _p1: __goscript_record.Record): $.GoError | globalThis.Promise<$.GoError>
	WithAttrs(attrs: $.Slice<__goscript_attr.Attr>): Handler | null | globalThis.Promise<Handler | null>
	WithGroup(name: string): Handler | null | globalThis.Promise<Handler | null>
}

$.registerInterfaceType(
	"slog.Handler",
	null,
	[$.methodSignature("Enabled", ["context.Context", /* @__PURE__ */ $.basicType("int", "slog.Level")], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Handle", ["context.Context", "slog.Record"], ["error"]), $.methodSignature("WithAttrs", [["attrs", /* @__PURE__ */ $.sliceType("slog.Attr")]], ["slog.Handler"]), $.methodSignature("WithGroup", [["name", /* @__PURE__ */ $.basicType("string")]], ["slog.Handler"])]
);

export class defaultHandler {
	public get ch(): commonHandler | $.VarRef<commonHandler> | null {
		return this._fields.ch
	}

	public set ch(value: commonHandler | $.VarRef<commonHandler> | null) {
		this._fields.ch = value
	}

	// internal.DefaultOutput, except for testing
	public get output(): ((pc: number, data: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.output
	}

	public set output(value: ((pc: number, data: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.output = value
	}

	public _fields: {
		ch: commonHandler | $.VarRef<commonHandler> | null
		output: ((pc: number, data: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null
	}

	constructor(init?: Partial<{ch?: commonHandler | $.VarRef<commonHandler> | null, output?: ((pc: number, data: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ch: init?.ch ?? (null! as commonHandler | $.VarRef<commonHandler> | null),
			output: init?.output ?? (null! as ((pc: number, data: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): defaultHandler {
		return new defaultHandler(this, true)
	}

	public __goscriptAssign(source: defaultHandler): void {
		const target = this._fields
		const values = source._fields
		target.ch = values.ch
		target.output = values.output
	}

	public Enabled(_p0: context.Context | null, l: __goscript_level.Level): boolean {
		return l >= $.pointerValue<__goscript_level.LevelVar>(__goscript_logger.__goscript_get_logLoggerLevel()).Level()
	}

	public async Handle(ctx: context.Context | null, r: __goscript_record.Record): globalThis.Promise<$.GoError> {
		const h: defaultHandler | $.VarRef<defaultHandler> | null = this;
		using __defer = new $.DisposableStack()
		const h$: defaultHandler = h == null ? $.pointerTarget<defaultHandler>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<defaultHandler>(h)
		let buf: $.VarRef<buffer.Buffer> | null = await buffer.New()
		buffer.Buffer_WriteString(buf, await __goscript_level.Level_String(r.Level))
		buffer.Buffer_WriteByte(buf, 32)
		buffer.Buffer_WriteString(buf, r.Message)
		let state = $.varRef(await commonHandler.prototype.newHandleState.call((h$ as defaultHandler).ch, buf, true, " "))
		__defer.defer(() => { state.value.free() })
		await state.value.appendNonBuiltIns(r)
		return (__goscriptAwait = (h$ as defaultHandler).output!(r.PC, $.pointerValue<buffer.Buffer>(buf)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async WithAttrs(_as: $.Slice<__goscript_attr.Attr>): globalThis.Promise<Handler | null> {
		const h: defaultHandler | $.VarRef<defaultHandler> | null = this;
		const h$: defaultHandler = h == null ? $.pointerTarget<defaultHandler>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<defaultHandler>(h)
		return $.interfaceValue<Handler | null>((await (async () => { const __goscriptLiteralField0 = await commonHandler.prototype.withAttrs.call((h$ as defaultHandler).ch, _as); return new defaultHandler({ch: __goscriptLiteralField0, output: (h$ as defaultHandler).output}) })()), "*slog.defaultHandler", /* @__PURE__ */ $.pointerType("slog.defaultHandler"))
	}

	public WithGroup(name: string): Handler | null {
		const h: defaultHandler | $.VarRef<defaultHandler> | null = this;
		const h$: defaultHandler = h == null ? $.pointerTarget<defaultHandler>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<defaultHandler>(h)
		return $.interfaceValue<Handler | null>((() => { const __goscriptLiteralField1 = commonHandler.prototype.withGroup.call((h$ as defaultHandler).ch, name); return new defaultHandler({ch: __goscriptLiteralField1, output: (h$ as defaultHandler).output}) })(), "*slog.defaultHandler", /* @__PURE__ */ $.pointerType("slog.defaultHandler"))
	}

	static __typeInfo = $.registerStructType(
		"slog.defaultHandler",
		() => new defaultHandler(),
		() => [$.methodSignature("Enabled", [["_", "context.Context"], ["l", /* @__PURE__ */ $.basicType("int", "slog.Level")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Handle", [["ctx", "context.Context"], ["r", "slog.Record"]], ["error"], true), $.methodSignature("WithAttrs", [["as", /* @__PURE__ */ $.sliceType("slog.Attr")]], ["slog.Handler"], true), $.methodSignature("WithGroup", [["name", /* @__PURE__ */ $.basicType("string")]], ["slog.Handler"], true)],
		defaultHandler,
		() => [/* @__PURE__ */ $.structField("ch", /* @__PURE__ */ $.pointerType("slog.commonHandler"), [0], 0, false, { pkgPath: "log/slog" }), /* @__PURE__ */ $.structField("output", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uintptr"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo), [1], 8, false, { pkgPath: "log/slog" })]
	)
}

export class HandlerOptions {
	// AddSource causes the handler to compute the source code position
	// of the log statement and add a SourceKey attribute to the output.
	public get AddSource(): boolean {
		return this._fields.AddSource
	}

	public set AddSource(value: boolean) {
		this._fields.AddSource = value
	}

	// Level reports the minimum record level that will be logged.
	// The handler discards records with lower levels.
	// If Level is nil, the handler assumes LevelInfo.
	// The handler calls Level.Level for each record processed;
	// to adjust the minimum level dynamically, use a LevelVar.
	public get Level(): __goscript_level.Leveler | null {
		return this._fields.Level
	}

	public set Level(value: __goscript_level.Leveler | null) {
		this._fields.Level = value
	}

	// ReplaceAttr is called to rewrite each non-group attribute before it is logged.
	// The attribute's value has been resolved (see [Value.Resolve]).
	// If ReplaceAttr returns a zero Attr, the attribute is discarded.
	//
	// The built-in attributes with keys "time", "level", "source", and "msg"
	// are passed to this function, except that time is omitted
	// if zero, and source is omitted if AddSource is false.
	//
	// The first argument is a list of currently open groups that contain the
	// Attr. It must not be retained or modified. ReplaceAttr is never called
	// for Group attributes, only their contents. For example, the attribute
	// list
	//
	//     Int("a", 1), Group("g", Int("b", 2)), Int("c", 3)
	//
	// results in consecutive calls to ReplaceAttr with the following arguments:
	//
	//     nil, Int("a", 1)
	//     []string{"g"}, Int("b", 2)
	//     nil, Int("c", 3)
	//
	// ReplaceAttr can be used to change the default keys of the built-in
	// attributes, convert types (for example, to replace a `time.Time` with the
	// integer seconds since the Unix epoch), sanitize personal information, or
	// remove attributes from the output.
	public get ReplaceAttr(): ((groups: $.Slice<string>, a: __goscript_attr.Attr) => __goscript_attr.Attr | globalThis.Promise<__goscript_attr.Attr>) | null {
		return this._fields.ReplaceAttr
	}

	public set ReplaceAttr(value: ((groups: $.Slice<string>, a: __goscript_attr.Attr) => __goscript_attr.Attr | globalThis.Promise<__goscript_attr.Attr>) | null) {
		this._fields.ReplaceAttr = value
	}

	public _fields: {
		AddSource: boolean
		Level: __goscript_level.Leveler | null
		ReplaceAttr: ((groups: $.Slice<string>, a: __goscript_attr.Attr) => __goscript_attr.Attr | globalThis.Promise<__goscript_attr.Attr>) | null
	}

	constructor(init?: Partial<{AddSource?: boolean, Level?: __goscript_level.Leveler | null, ReplaceAttr?: ((groups: $.Slice<string>, a: __goscript_attr.Attr) => __goscript_attr.Attr | globalThis.Promise<__goscript_attr.Attr>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			AddSource: init?.AddSource ?? (false as boolean),
			Level: init?.Level ?? (null! as __goscript_level.Leveler | null),
			ReplaceAttr: init?.ReplaceAttr ?? (null! as ((groups: $.Slice<string>, a: __goscript_attr.Attr) => __goscript_attr.Attr | globalThis.Promise<__goscript_attr.Attr>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HandlerOptions {
		return new HandlerOptions(this, true)
	}

	public __goscriptAssign(source: HandlerOptions): void {
		const target = this._fields
		const values = source._fields
		target.AddSource = values.AddSource
		target.Level = $.assignFieldValue(target.Level, values.Level, "slog.Leveler")
		target.ReplaceAttr = values.ReplaceAttr
	}

	static __typeInfo = $.registerStructType(
		"slog.HandlerOptions",
		() => new HandlerOptions(),
		() => [],
		HandlerOptions,
		() => [/* @__PURE__ */ $.structField("AddSource", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("Level", "slog.Leveler", [1], 8, true), /* @__PURE__ */ $.structField("ReplaceAttr", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), "slog.Attr"], results: ["slog.Attr"] } as $.FunctionTypeInfo), [2], 24, true)]
	)
}

export class commonHandler {
	public get json(): boolean {
		return this._fields.json
	}

	public set json(value: boolean) {
		this._fields.json = value
	}

	public get opts(): HandlerOptions {
		return this._fields.opts
	}

	public set opts(value: HandlerOptions) {
		this._fields.opts = value
	}

	public get preformattedAttrs(): $.Slice<number> {
		return this._fields.preformattedAttrs
	}

	public set preformattedAttrs(value: $.Slice<number>) {
		this._fields.preformattedAttrs = value
	}

	// groupPrefix is for the text handler only.
	// It holds the prefix for groups that were already pre-formatted.
	// A group will appear here when a call to WithGroup is followed by
	// a call to WithAttrs.
	public get groupPrefix(): string {
		return this._fields.groupPrefix
	}

	public set groupPrefix(value: string) {
		this._fields.groupPrefix = value
	}

	public get groups(): $.Slice<string> {
		return this._fields.groups
	}

	public set groups(value: $.Slice<string>) {
		this._fields.groups = value
	}

	public get nOpenGroups(): number {
		return this._fields.nOpenGroups
	}

	public set nOpenGroups(value: number) {
		this._fields.nOpenGroups = value
	}

	public get mu(): sync.Mutex | $.VarRef<sync.Mutex> | null {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex | $.VarRef<sync.Mutex> | null) {
		this._fields.mu = value
	}

	public get w(): io.Writer | null {
		return this._fields.w
	}

	public set w(value: io.Writer | null) {
		this._fields.w = value
	}

	public _fields: {
		json: boolean
		opts: HandlerOptions
		preformattedAttrs: $.Slice<number>
		groupPrefix: string
		groups: $.Slice<string>
		nOpenGroups: number
		mu: sync.Mutex | $.VarRef<sync.Mutex> | null
		w: io.Writer | null
	}

	constructor(init?: Partial<{json?: boolean, opts?: HandlerOptions, preformattedAttrs?: $.Slice<number>, groupPrefix?: string, groups?: $.Slice<string>, nOpenGroups?: number, mu?: sync.Mutex | $.VarRef<sync.Mutex> | null, w?: io.Writer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			json: init?.json ?? (false as boolean),
			opts: init?.opts ? init.opts.clone() : new HandlerOptions(undefined, true),
			preformattedAttrs: init?.preformattedAttrs ?? (null! as $.Slice<number>),
			groupPrefix: init?.groupPrefix ?? ("" as string),
			groups: init?.groups ?? (null! as $.Slice<string>),
			nOpenGroups: init?.nOpenGroups ?? (0 as number),
			mu: init?.mu ?? (null! as sync.Mutex | $.VarRef<sync.Mutex> | null),
			w: init?.w ?? (null! as io.Writer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public __goscriptClone(): commonHandler {
		return new commonHandler(this, true)
	}

	public __goscriptAssign(source: commonHandler): void {
		const target = this._fields
		const values = source._fields
		target.json = values.json
		$.assignStruct(target.opts, values.opts)
		target.preformattedAttrs = values.preformattedAttrs
		target.groupPrefix = values.groupPrefix
		target.groups = values.groups
		target.nOpenGroups = values.nOpenGroups
		target.mu = values.mu
		target.w = $.assignFieldValue(target.w, values.w, "io.Writer")
	}

	public attrSep(): string {
		const h: commonHandler | $.VarRef<commonHandler> | null = this;
		if ($.pointerValue<commonHandler>(h).json) {
			return ","
		}
		return " "
	}

	public clone(): commonHandler | $.VarRef<commonHandler> | null {
		const h: commonHandler | $.VarRef<commonHandler> | null = this;
		const h$: commonHandler = h == null ? $.pointerTarget<commonHandler>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<commonHandler>(h)
		return (() => { const __goscriptLiteralField2 = slices.Clip((h$ as commonHandler).preformattedAttrs); const __goscriptLiteralField3 = slices.Clip((h$ as commonHandler).groups); return new commonHandler({json: (h$ as commonHandler).json, opts: ((h$ as commonHandler).opts).clone(), preformattedAttrs: __goscriptLiteralField2, groupPrefix: (h$ as commonHandler).groupPrefix, groups: __goscriptLiteralField3, nOpenGroups: (h$ as commonHandler).nOpenGroups, w: (h$ as commonHandler).w, mu: (h$ as commonHandler).mu}) })()
	}

	public async enabled(l: __goscript_level.Level): globalThis.Promise<boolean> {
		const h: commonHandler | $.VarRef<commonHandler> | null = this;
		const h$: commonHandler = h == null ? $.pointerTarget<commonHandler>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<commonHandler>(h)
		let minLevel = 0
		if ((h$ as commonHandler).opts.Level != null) {
			minLevel = (__goscriptAwait = $.pointerValue<Exclude<__goscript_level.Leveler, null>>((h$ as commonHandler).opts.Level).Level(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return l >= minLevel
	}

	public async handle(r: __goscript_record.Record): globalThis.Promise<$.GoError> {
		const h: commonHandler | $.VarRef<commonHandler> | null = this;
		using __defer = new $.DisposableStack()
		const h$: commonHandler = h == null ? $.pointerTarget<commonHandler>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<commonHandler>(h)
		let state = $.varRef(await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as commonHandler).newHandleState(await buffer.New(), true, "") : commonHandler.prototype.newHandleState.call(h, await buffer.New(), true, "")))
		__defer.defer(() => { state.value.free() })
		if ((h$ as commonHandler).json) {
			buffer.Buffer_WriteByte(state.value.buf, 123)
		}
		// Built-in attributes. They are not in a group.
		let stateGroups = state.value.groups
		state.value.groups = null
		let rep: ((groups: $.Slice<string>, a: __goscript_attr.Attr) => __goscript_attr.Attr | globalThis.Promise<__goscript_attr.Attr>) | null = (h$ as commonHandler).opts.ReplaceAttr
		// time
		if (!$.markAsStructValue($.cloneStructValue(r.Time)).IsZero()) {
			let key = "time"
			let val = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(r.Time)).Round(0n)))
			if (rep == null) {
				await state.value.appendKey(key)
				await state.value.appendTime(val)
			} else {
				await state.value.appendAttr(__goscript_attr.Time(key, val))
			}
		}
		// level
		let key = "level"
		let val = r.Level
		if (rep == null) {
			await state.value.appendKey(key)
			await state.value.appendString(await __goscript_level.Level_String(val))
		} else {
			await state.value.appendAttr(__goscript_attr.Any(key, $.namedValueInterfaceValue<any>(val, "slog.Level", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
		}
		// source
		if ((h$ as commonHandler).opts.AddSource) {
			let src: __goscript_record.Source | $.VarRef<__goscript_record.Source> | null = r.Source()
			if (src == null) {
				src = new __goscript_record.Source()
			}
			await state.value.appendAttr(__goscript_attr.Any("source", $.interfaceValue(src, "*slog.Source", /* @__PURE__ */ $.pointerType("slog.Source"))))
		}
		key = "msg"
		let msg = r.Message
		if (rep == null) {
			await state.value.appendKey(key)
			await state.value.appendString(msg)
		} else {
			await state.value.appendAttr(__goscript_attr.String(key, msg))
		}
		state.value.groups = stateGroups
		await state.value.appendNonBuiltIns(r)
		buffer.Buffer_WriteByte(state.value.buf, 10)

		await sync.Mutex.prototype.Lock.call($.pointerValue<sync.Mutex>((h$ as commonHandler).mu))
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<sync.Mutex>((h$ as commonHandler).mu)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		let [, err] = await $.pointerValue<Exclude<io.Writer, null>>((h$ as commonHandler).w).Write($.pointerValue<buffer.Buffer>(state.value.buf))
		return err
	}

	public async newHandleState(buf: $.VarRef<buffer.Buffer> | null, freeBuf: boolean, sep: string): globalThis.Promise<handleState> {
		const h: commonHandler | $.VarRef<commonHandler> | null = this;
		const h$: commonHandler = h == null ? $.pointerTarget<commonHandler>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<commonHandler>(h)
		let s = (await (async () => { const __goscriptLiteralField4 = await buffer.New(); return new handleState({h: h, buf: buf, freeBuf: freeBuf, sep: sep, prefix: __goscriptLiteralField4}, true) })())
		if ((h$ as commonHandler).opts.ReplaceAttr != null) {
			s.groups = $.mustTypeAssert<$.VarRef<$.Slice<string>> | null>(await groupPool.value.Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
			s.groups!.value = $.appendSlice($.pointerValue<$.Slice<string>>(s.groups), $.goSlice((h$ as commonHandler).groups, undefined, (h$ as commonHandler).nOpenGroups))
		}
		return (s).clone()
	}

	public async withAttrs(_as: $.Slice<__goscript_attr.Attr>): globalThis.Promise<commonHandler | $.VarRef<commonHandler> | null> {
		const h: commonHandler | $.VarRef<commonHandler> | null = this;
		using __defer = new $.DisposableStack()
		// We are going to ignore empty groups, so if the entire slice consists of
		// them, there is nothing to do.
		if (__goscript_value.countEmptyGroups(_as) == $.sliceLen(_as)) {
			return h
		}
		let h2: commonHandler | $.VarRef<commonHandler> | null = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as commonHandler).clone() : commonHandler.prototype.clone.call(h))
		let h2$: commonHandler = h2 == null ? $.pointerTarget<commonHandler>(h2) : (h2 as any).__isVarRef === true ? (h2 as any).value : (h2 as any).__goValue === undefined ? (h2 as any) : $.pointerTarget<commonHandler>(h2)
		// Pre-format the attributes as an optimization.
		let state = $.varRef(await (h2 !== null && (h2 as any).__isVarRef !== true && (h2 as any).__goValue === undefined ? ((h2 as any) as commonHandler).newHandleState($.fieldRef((h2$ as commonHandler)._fields, "preformattedAttrs"), false, "") : commonHandler.prototype.newHandleState.call(h2, $.fieldRef((h2$ as commonHandler)._fields, "preformattedAttrs"), false, "")))
		__defer.defer(() => { state.value.free() })
		buffer.Buffer_WriteString(state.value.prefix, $.pointerValue<commonHandler>(h).groupPrefix)
		{
			let pfa: $.Slice<number> = (h2$ as commonHandler).preformattedAttrs
			if ($.sliceLen(pfa) > 0) {
				state.value.sep = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as commonHandler).attrSep() : commonHandler.prototype.attrSep.call(h))
				if ((h2$ as commonHandler).json && ($.arrayIndex(pfa!, $.sliceLen(pfa) - 1) == 123)) {
					state.value.sep = ""
				}
			}
		}
		// Remember the position in the buffer, in case all attrs are empty.
		let pos = buffer.Buffer_Len(state.value.buf)
		await state.value.openGroups()
		if (!await state.value.appendAttrs(_as)) {
			buffer.Buffer_SetLen(state.value.buf, pos)
		} else {
			// Remember the new prefix for later keys.
			;(h2$ as commonHandler).groupPrefix = buffer.Buffer_String(state.value.prefix);
			// Remember how many opened groups are in preformattedAttrs,
			// so we don't open them again when we handle a Record.
			;(h2$ as commonHandler).nOpenGroups = $.sliceLen((h2$ as commonHandler).groups)
		}
		return h2
	}

	public withGroup(name: string): commonHandler | $.VarRef<commonHandler> | null {
		const h: commonHandler | $.VarRef<commonHandler> | null = this;
		let h2: commonHandler | $.VarRef<commonHandler> | null = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as commonHandler).clone() : commonHandler.prototype.clone.call(h))
		let h2$: commonHandler = h2 == null ? $.pointerTarget<commonHandler>(h2) : (h2 as any).__isVarRef === true ? (h2 as any).value : (h2 as any).__goValue === undefined ? (h2 as any) : $.pointerTarget<commonHandler>(h2);
		;(h2$ as commonHandler).groups = $.appendOne((h2$ as commonHandler).groups, name)
		return h2
	}

	static __typeInfo = $.registerStructType(
		"slog.commonHandler",
		() => new commonHandler(),
		() => [$.methodSignature("attrSep", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("clone", [], [/* @__PURE__ */ $.pointerType("slog.commonHandler")], true), $.methodSignature("enabled", [["l", /* @__PURE__ */ $.basicType("int", "slog.Level")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("handle", [["r", "slog.Record"]], ["error"], true), $.methodSignature("newHandleState", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "buffer.Buffer"))], ["freeBuf", /* @__PURE__ */ $.basicType("bool")], ["sep", /* @__PURE__ */ $.basicType("string")]], ["slog.handleState"], true), $.methodSignature("withAttrs", [["as", /* @__PURE__ */ $.sliceType("slog.Attr")]], [/* @__PURE__ */ $.pointerType("slog.commonHandler")], true), $.methodSignature("withGroup", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("slog.commonHandler")], true)],
		commonHandler,
		() => [/* @__PURE__ */ $.structField("json", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "log/slog" }), /* @__PURE__ */ $.structField("opts", "slog.HandlerOptions", [1], 8, false, { pkgPath: "log/slog" }), /* @__PURE__ */ $.structField("preformattedAttrs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 40, false, { pkgPath: "log/slog" }), /* @__PURE__ */ $.structField("groupPrefix", /* @__PURE__ */ $.basicType("string"), [3], 64, false, { pkgPath: "log/slog" }), /* @__PURE__ */ $.structField("groups", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [4], 80, false, { pkgPath: "log/slog" }), /* @__PURE__ */ $.structField("nOpenGroups", /* @__PURE__ */ $.basicType("int"), [5], 104, false, { pkgPath: "log/slog" }), /* @__PURE__ */ $.structField("mu", /* @__PURE__ */ $.pointerType("sync.Mutex"), [6], 112, false, { pkgPath: "log/slog" }), /* @__PURE__ */ $.structField("w", "io.Writer", [7], 120, false, { pkgPath: "log/slog" })]
	)
}

export class handleState {
	public get h(): commonHandler | $.VarRef<commonHandler> | null {
		return this._fields.h
	}

	public set h(value: commonHandler | $.VarRef<commonHandler> | null) {
		this._fields.h = value
	}

	public get buf(): $.VarRef<buffer.Buffer> | null {
		return this._fields.buf
	}

	public set buf(value: $.VarRef<buffer.Buffer> | null) {
		this._fields.buf = value
	}

	public get freeBuf(): boolean {
		return this._fields.freeBuf
	}

	public set freeBuf(value: boolean) {
		this._fields.freeBuf = value
	}

	public get sep(): string {
		return this._fields.sep
	}

	public set sep(value: string) {
		this._fields.sep = value
	}

	public get prefix(): $.VarRef<buffer.Buffer> | null {
		return this._fields.prefix
	}

	public set prefix(value: $.VarRef<buffer.Buffer> | null) {
		this._fields.prefix = value
	}

	public get groups(): $.VarRef<$.Slice<string>> | null {
		return this._fields.groups
	}

	public set groups(value: $.VarRef<$.Slice<string>> | null) {
		this._fields.groups = value
	}

	public _fields: {
		h: commonHandler | $.VarRef<commonHandler> | null
		buf: $.VarRef<buffer.Buffer> | null
		freeBuf: boolean
		sep: string
		prefix: $.VarRef<buffer.Buffer> | null
		groups: $.VarRef<$.Slice<string>> | null
	}

	constructor(init?: Partial<{h?: commonHandler | $.VarRef<commonHandler> | null, buf?: $.VarRef<buffer.Buffer> | null, freeBuf?: boolean, sep?: string, prefix?: $.VarRef<buffer.Buffer> | null, groups?: $.VarRef<$.Slice<string>> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			h: init?.h ?? (null! as commonHandler | $.VarRef<commonHandler> | null),
			buf: init?.buf ?? (null! as $.VarRef<buffer.Buffer> | null),
			freeBuf: init?.freeBuf ?? (false as boolean),
			sep: init?.sep ?? ("" as string),
			prefix: init?.prefix ?? (null! as $.VarRef<buffer.Buffer> | null),
			groups: init?.groups ?? (null! as $.VarRef<$.Slice<string>> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): handleState {
		return new handleState(this, true)
	}

	public __goscriptAssign(source: handleState): void {
		const target = this._fields
		const values = source._fields
		target.h = values.h
		target.buf = values.buf
		target.freeBuf = values.freeBuf
		target.sep = values.sep
		target.prefix = values.prefix
		target.groups = values.groups
	}

	public async appendAttr(a: __goscript_attr.Attr): globalThis.Promise<boolean> {
		const s: handleState | $.VarRef<handleState> | null = this;
		const s$: handleState = s == null ? $.pointerTarget<handleState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<handleState>(s)
		$.assignStruct(a.Value, await $.markAsStructValue($.cloneStructValue(a.Value)).Resolve())
		{
			let rep: ((groups: $.Slice<string>, a: __goscript_attr.Attr) => __goscript_attr.Attr | globalThis.Promise<__goscript_attr.Attr>) | null = $.pointerValue<commonHandler>((s$ as handleState).h).opts.ReplaceAttr
			if ((rep != null) && (a.Value.Kind() != 8)) {
				let gs: $.Slice<string> = null! as $.Slice<string>
				if ((s$ as handleState).groups != null) {
					gs = $.pointerValue<$.Slice<string>>((s$ as handleState).groups)
				}
				// a.Value is resolved before calling ReplaceAttr, so the user doesn't have to.
				a = $.assignStruct(a, ((__goscriptAwait = rep!(gs, (a).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_attr.Attr))
				// The ReplaceAttr function may return an unresolved Attr.
				$.assignStruct(a.Value, await $.markAsStructValue($.cloneStructValue(a.Value)).Resolve())
			}
		}
		// Elide empty Attrs.
		if (a.isEmpty()) {
			return false
		}
		// Special case: Source.
		{
			let v = (a.Value).clone()
			if (v.Kind() == 0) {
				{
					let __goscriptTuple0: any = $.typeAssertTuple<__goscript_record.Source | $.VarRef<__goscript_record.Source> | null>(await v.Any(), /* @__PURE__ */ $.pointerType("slog.Source"))
					let src: __goscript_record.Source | $.VarRef<__goscript_record.Source> | null = __goscriptTuple0[0]
					let ok = __goscriptTuple0[1]
					if (ok) {
						if ((src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? ((src as any) as __goscript_record.Source).isEmpty() : __goscript_record.Source.prototype.isEmpty.call(src))) {
							return false
						}
						if ($.pointerValue<commonHandler>((s$ as handleState).h).json) {
							$.assignStruct(a.Value, (src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? ((src as any) as __goscript_record.Source).group() : __goscript_record.Source.prototype.group.call(src)))
						} else {
							$.assignStruct(a.Value, __goscript_value.StringValue(await fmt.Sprintf("%s:%d", $.pointerValue<__goscript_record.Source>(src).File, $.basicInterfaceValue($.pointerValue<__goscript_record.Source>(src).Line, "int"))))
						}
					}
				}
			}
		}
		if (a.Value.Kind() == 8) {
			let attrs: $.Slice<__goscript_attr.Attr> = a.Value.Group()
			// Output only non-empty groups.
			if ($.sliceLen(attrs) > 0) {
				// The group may turn out to be empty even though it has attrs (for
				// example, ReplaceAttr may delete all the attrs).
				// So remember where we are in the buffer, to restore the position
				// later if necessary.
				let pos = buffer.Buffer_Len((s$ as handleState).buf)
				// Inline a group with an empty key.
				if (!$.stringEqual(a.Key, "")) {
					await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as handleState).openGroup(a.Key) : handleState.prototype.openGroup.call(s, a.Key))
				}
				if (!await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as handleState).appendAttrs(attrs) : handleState.prototype.appendAttrs.call(s, attrs))) {
					buffer.Buffer_SetLen((s$ as handleState).buf, pos)
					return false
				}
				if (!$.stringEqual(a.Key, "")) {
					void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as handleState).closeGroup(a.Key) : handleState.prototype.closeGroup.call(s, a.Key))
				}
			}
		} else {
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as handleState).appendKey(a.Key) : handleState.prototype.appendKey.call(s, a.Key))
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as handleState).appendValue((a.Value).clone()) : handleState.prototype.appendValue.call(s, (a.Value).clone()))
		}
		return true
	}

	public async appendAttrs(_as: $.Slice<__goscript_attr.Attr>): globalThis.Promise<boolean> {
		const s: handleState | $.VarRef<handleState> | null = this;
		let nonEmpty = false
		for (let __goscriptRangeTarget0 = _as, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let a = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_attr.Attr)).clone()
			if (await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as handleState).appendAttr((a).clone()) : handleState.prototype.appendAttr.call(s, (a).clone()))) {
				nonEmpty = true
			}
		}
		return nonEmpty
	}

	public async appendError(err: $.GoError): globalThis.Promise<void> {
		const s: handleState | $.VarRef<handleState> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as handleState).appendString(await fmt.Sprintf("!ERROR:%v", (err as any))) : handleState.prototype.appendString.call(s, await fmt.Sprintf("!ERROR:%v", (err as any))))
	}

	public async appendKey(key: string): globalThis.Promise<void> {
		let s: handleState | $.VarRef<handleState> | null = this;
		const s$: handleState = s == null ? $.pointerTarget<handleState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<handleState>(s)
		buffer.Buffer_WriteString((s$ as handleState).buf, (s$ as handleState).sep)
		if (((s$ as handleState).prefix != null) && ($.sliceLen(($.pointerValue<buffer.Buffer>((s$ as handleState).prefix) as buffer.Buffer)) > 0)) {
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as handleState).appendTwoStrings($.bytesToString($.pointerValue<buffer.Buffer>((s$ as handleState).prefix)), key) : handleState.prototype.appendTwoStrings.call(s, $.bytesToString($.pointerValue<buffer.Buffer>((s$ as handleState).prefix)), key))
		} else {
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as handleState).appendString(key) : handleState.prototype.appendString.call(s, key))
		}
		if ($.pointerValue<commonHandler>((s$ as handleState).h).json) {
			buffer.Buffer_WriteByte((s$ as handleState).buf, 58)
		} else {
			buffer.Buffer_WriteByte((s$ as handleState).buf, 61)
		}
		;(s$ as handleState).sep = commonHandler.prototype.attrSep.call((s$ as handleState).h)
	}

	public async appendNonBuiltIns(r: __goscript_record.Record): globalThis.Promise<void> {
		let s: handleState | $.VarRef<handleState> | null = this;
		const s$: handleState = s == null ? $.pointerTarget<handleState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<handleState>(s)
		// preformatted Attrs
		{
			let pfa: $.Slice<number> = $.pointerValue<commonHandler>((s$ as handleState).h).preformattedAttrs
			if ($.sliceLen(pfa) > 0) {
				buffer.Buffer_WriteString((s$ as handleState).buf, (s$ as handleState).sep)
				buffer.Buffer_Write((s$ as handleState).buf, pfa);
				;(s$ as handleState).sep = commonHandler.prototype.attrSep.call((s$ as handleState).h)
				if ($.pointerValue<commonHandler>((s$ as handleState).h).json && ($.arrayIndex(pfa!, $.sliceLen(pfa) - 1) == 123)) {
					;(s$ as handleState).sep = ""
				}
			}
		}
		// Attrs in Record -- unlike the built-in ones, they are in groups started
		// from WithGroup.
		// If the record has no Attrs, don't output any groups.
		let nOpenGroups = $.pointerValue<commonHandler>((s$ as handleState).h).nOpenGroups
		if (r.NumAttrs() > 0) {
			buffer.Buffer_WriteString((s$ as handleState).prefix, $.pointerValue<commonHandler>((s$ as handleState).h).groupPrefix)
			// The group may turn out to be empty even though it has attrs (for
			// example, ReplaceAttr may delete all the attrs).
			// So remember where we are in the buffer, to restore the position
			// later if necessary.
			let pos = buffer.Buffer_Len((s$ as handleState).buf)
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as handleState).openGroups() : handleState.prototype.openGroups.call(s))
			nOpenGroups = $.sliceLen($.pointerValue<commonHandler>((s$ as handleState).h).groups)
			let empty = true
			await r.Attrs($.functionValue(async (a: __goscript_attr.Attr): globalThis.Promise<boolean> => {
				if (await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as handleState).appendAttr((a).clone()) : handleState.prototype.appendAttr.call(s, (a).clone()))) {
					empty = false
				}
				return true
			}, ({ kind: $.TypeKind.Function, params: ["slog.Attr"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
			if (empty) {
				buffer.Buffer_SetLen((s$ as handleState).buf, pos)
				nOpenGroups = $.pointerValue<commonHandler>((s$ as handleState).h).nOpenGroups
			}
		}
		if ($.pointerValue<commonHandler>((s$ as handleState).h).json) {
			// Close all open groups.
			for (let __goscriptRangeTarget1 = $.goSlice($.pointerValue<commonHandler>((s$ as handleState).h).groups, undefined, nOpenGroups), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				buffer.Buffer_WriteByte((s$ as handleState).buf, 125)
			}
			// Close the top-level object.
			buffer.Buffer_WriteByte((s$ as handleState).buf, 125)
		}
	}

	public async appendString(str: string): globalThis.Promise<void> {
		let s: handleState | $.VarRef<handleState> | null = this;
		const s$: handleState = s == null ? $.pointerTarget<handleState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<handleState>(s)
		if ($.pointerValue<commonHandler>((s$ as handleState).h).json) {
			buffer.Buffer_WriteByte((s$ as handleState).buf, 34);
			;(s$ as handleState).buf!.value = (await __goscript_json_handler.appendEscapedJSONString($.pointerValue<buffer.Buffer>((s$ as handleState).buf), str) as buffer.Buffer)
			buffer.Buffer_WriteByte((s$ as handleState).buf, 34)
		} else {
			// text
			if (__goscript_text_handler.needsQuoting(str)) {
				;(s$ as handleState).buf!.value = (strconv.AppendQuote($.pointerValue<buffer.Buffer>((s$ as handleState).buf), str) as buffer.Buffer)
			} else {
				buffer.Buffer_WriteString((s$ as handleState).buf, str)
			}
		}
	}

	public async appendTime(t: time.Time): globalThis.Promise<void> {
		let s: handleState | $.VarRef<handleState> | null = this;
		const s$: handleState = s == null ? $.pointerTarget<handleState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<handleState>(s)
		if ($.pointerValue<commonHandler>((s$ as handleState).h).json) {
			await __goscript_json_handler.appendJSONTime(s, t)
		} else {
			;(s$ as handleState).buf!.value = (appendRFC3339Millis($.pointerValue<buffer.Buffer>((s$ as handleState).buf), $.markAsStructValue($.cloneStructValue(t))) as buffer.Buffer)
		}
	}

	public async appendTwoStrings(x: string, y: string): globalThis.Promise<void> {
		let s: handleState | $.VarRef<handleState> | null = this;
		const s$: handleState = s == null ? $.pointerTarget<handleState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<handleState>(s)
		let buf: $.VarRef<buffer.Buffer> = $.varRef(($.pointerValue<buffer.Buffer>((s$ as handleState).buf) as buffer.Buffer))
		switch ((true as boolean)) {
			case $.pointerValue<commonHandler>((s$ as handleState).h).json:
			{
				buffer.Buffer_WriteByte(buf, 34)
				buf.value = (await __goscript_json_handler.appendEscapedJSONString(buf.value, x) as buffer.Buffer)
				buf.value = (await __goscript_json_handler.appendEscapedJSONString(buf.value, y) as buffer.Buffer)
				buffer.Buffer_WriteByte(buf, 34)
				break
			}
			case !__goscript_text_handler.needsQuoting(x) && !__goscript_text_handler.needsQuoting(y):
			{
				buffer.Buffer_WriteString(buf, x)
				buffer.Buffer_WriteString(buf, y)
				break
			}
			default:
			{
				buf.value = (strconv.AppendQuote(buf.value, $.concatString(x, y)) as buffer.Buffer)
				break
			}
		}
		;(s$ as handleState).buf!.value = (buf.value as buffer.Buffer)
	}

	public async appendValue(v: __goscript_value.Value): globalThis.Promise<void> {
		const s: handleState | $.VarRef<handleState> | null = this;
		const __defer = new $.AsyncDisposableStack()
		try {
			__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
				{
					let r = $.recover()
					if (r != null) {
						// If it panics with a nil pointer, the most likely cases are
						// an encoding.TextMarshaler or error fails to guard against nil,
						// in which case "<nil>" seems to be the feasible choice.
						//
						// Adapted from the code in fmt/print.go.
						let __goscriptShadow0 = v
						{
							let __goscriptShadow1 = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(__goscriptShadow0._any)))
							if (($.markAsStructValue($.cloneStructValue(__goscriptShadow1)).Kind() == 22) && $.markAsStructValue($.cloneStructValue(__goscriptShadow1)).IsNil()) {
								await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as handleState).appendString("<nil>") : handleState.prototype.appendString.call(s, "<nil>"))
								return
							}
						}

						// Otherwise just print the original panic message.
						await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as handleState).appendString(await fmt.Sprintf("!PANIC: %v", r)) : handleState.prototype.appendString.call(s, await fmt.Sprintf("!PANIC: %v", r)))
					}
				}
			})() })

			let err: $.GoError = null! as $.GoError
			if ($.pointerValue<commonHandler>($.pointerValue<handleState>(s).h).json) {
				err = await __goscript_json_handler.appendJSONValue(s, (v).clone())
			} else {
				err = await __goscript_text_handler.appendTextValue(s, (v).clone())
			}
			if (err != null) {
				await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as handleState).appendError(err) : handleState.prototype.appendError.call(s, err))
			}
			await __defer.dispose()
		} catch (e) {
			await __defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
	}

	public closeGroup(name: string): void {
		let s: handleState | $.VarRef<handleState> | null = this;
		const s$: handleState = s == null ? $.pointerTarget<handleState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<handleState>(s)
		if ($.pointerValue<commonHandler>((s$ as handleState).h).json) {
			buffer.Buffer_WriteByte((s$ as handleState).buf, 125)
		} else {
			;(s$ as handleState).prefix!.value = ($.goSlice(($.pointerValue<buffer.Buffer>((s$ as handleState).prefix)), undefined, ($.sliceLen(($.pointerValue<buffer.Buffer>((s$ as handleState).prefix) as buffer.Buffer)) - $.stringLen(name)) - 1) as buffer.Buffer)
		}
		;(s$ as handleState).sep = commonHandler.prototype.attrSep.call((s$ as handleState).h)
		if ((s$ as handleState).groups != null) {
			;(s$ as handleState).groups!.value = $.goSlice(($.pointerValue<$.Slice<string>>((s$ as handleState).groups)), undefined, $.sliceLen($.pointerValue<$.Slice<string>>((s$ as handleState).groups)) - 1)
		}
	}

	public free(): void {
		const s: handleState | $.VarRef<handleState> | null = this;
		const s$: handleState = s == null ? $.pointerTarget<handleState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<handleState>(s)
		if ((s$ as handleState).freeBuf) {
			buffer.Buffer_Free((s$ as handleState).buf)
		}
		{
			let gs = (s$ as handleState).groups
			if (gs != null) {
				gs!.value = $.goSlice(($.pointerValue<$.Slice<string>>(gs)), undefined, 0)
				groupPool.value.Put($.interfaceValue(gs, "*[]string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))))
			}
		}
		buffer.Buffer_Free((s$ as handleState).prefix)
	}

	public async openGroup(name: string): globalThis.Promise<void> {
		let s: handleState | $.VarRef<handleState> | null = this;
		const s$: handleState = s == null ? $.pointerTarget<handleState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<handleState>(s)
		if ($.pointerValue<commonHandler>((s$ as handleState).h).json) {
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as handleState).appendKey(name) : handleState.prototype.appendKey.call(s, name))
			buffer.Buffer_WriteByte((s$ as handleState).buf, 123);
			;(s$ as handleState).sep = ""
		} else {
			buffer.Buffer_WriteString((s$ as handleState).prefix, name)
			buffer.Buffer_WriteByte((s$ as handleState).prefix, 46)
		}
		// Collect group names for ReplaceAttr.
		if ((s$ as handleState).groups != null) {
			;(s$ as handleState).groups!.value = $.appendOne($.pointerValue<$.Slice<string>>((s$ as handleState).groups), name)
		}
	}

	public async openGroups(): globalThis.Promise<void> {
		const s: handleState | $.VarRef<handleState> | null = this;
		const s$: handleState = s == null ? $.pointerTarget<handleState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<handleState>(s)
		for (let __goscriptRangeTarget2 = $.goSlice($.pointerValue<commonHandler>((s$ as handleState).h).groups, $.pointerValue<commonHandler>((s$ as handleState).h).nOpenGroups, undefined), __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let n = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as handleState).openGroup(n) : handleState.prototype.openGroup.call(s, n))
		}
	}

	static __typeInfo = $.registerStructType(
		"slog.handleState",
		() => new handleState(),
		() => [$.methodSignature("appendAttr", [["a", "slog.Attr"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("appendAttrs", [["as", /* @__PURE__ */ $.sliceType("slog.Attr")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("appendError", [["err", "error"]], [], true), $.methodSignature("appendKey", [["key", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("appendNonBuiltIns", [["r", "slog.Record"]], [], true), $.methodSignature("appendString", [["str", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("appendTime", [["t", "time.Time"]], [], true), $.methodSignature("appendTwoStrings", [["x", /* @__PURE__ */ $.basicType("string")], ["y", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("appendValue", [["v", "slog.Value"]], [], true), $.methodSignature("closeGroup", [["name", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("free", [], [], true), $.methodSignature("openGroup", [["name", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("openGroups", [], [], true)],
		handleState,
		() => [/* @__PURE__ */ $.structField("h", /* @__PURE__ */ $.pointerType("slog.commonHandler"), [0], 0, false, { pkgPath: "log/slog" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "buffer.Buffer")), [1], 8, false, { pkgPath: "log/slog" }), /* @__PURE__ */ $.structField("freeBuf", /* @__PURE__ */ $.basicType("bool"), [2], 16, false, { pkgPath: "log/slog" }), /* @__PURE__ */ $.structField("sep", /* @__PURE__ */ $.basicType("string"), [3], 24, false, { pkgPath: "log/slog" }), /* @__PURE__ */ $.structField("prefix", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "buffer.Buffer")), [4], 40, false, { pkgPath: "log/slog" }), /* @__PURE__ */ $.structField("groups", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))), [5], 48, false, { pkgPath: "log/slog" })]
	)
}

export class discardHandler {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): discardHandler {
		return new discardHandler(this, true)
	}

	public __goscriptAssign(source: discardHandler): void {
	}

	public Enabled(_p0: context.Context | null, _p1: __goscript_level.Level): boolean {
		const dh = this;
		return false
	}

	public Handle(_p0: context.Context | null, _p1: __goscript_record.Record): $.GoError {
		const dh = this;
		return null
	}

	public WithAttrs(attrs: $.Slice<__goscript_attr.Attr>): Handler | null {
		const dh = this;
		return $.interfaceValue<Handler | null>((dh).clone(), "slog.discardHandler", "slog.discardHandler")
	}

	public WithGroup(name: string): Handler | null {
		const dh = this;
		return $.interfaceValue<Handler | null>((dh).clone(), "slog.discardHandler", "slog.discardHandler")
	}

	static __typeInfo = $.registerStructType(
		"slog.discardHandler",
		() => new discardHandler(),
		() => [$.methodSignature("Enabled", ["context.Context", /* @__PURE__ */ $.basicType("int", "slog.Level")], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Handle", ["context.Context", "slog.Record"], ["error"]), $.methodSignature("WithAttrs", [["attrs", /* @__PURE__ */ $.sliceType("slog.Attr")]], ["slog.Handler"]), $.methodSignature("WithGroup", [["name", /* @__PURE__ */ $.basicType("string")]], ["slog.Handler"])],
		discardHandler,
		() => []
	)
}

export const TimeKey: string = "time"

export const LevelKey: string = "level"

export const MessageKey: string = "msg"

export const SourceKey: string = "source"

export const keyComponentSep: number = 46

export function newDefaultHandler(output: ((_p0: number, _p1: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null): defaultHandler | $.VarRef<defaultHandler> | null {
	return new defaultHandler({ch: new commonHandler({json: false}), output: output})
}

export let groupPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	let s: $.VarRef<$.Slice<string>> = $.varRef($.makeSlice<string>(0, 10, "string"))
	return $.interfaceValue(s, "*[]string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_groupPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(groupPool.value, __goscriptValue)
}

export function appendRFC3339Millis(b: $.Slice<number>, t: time.Time): $.Slice<number> {
	// Format according to time.RFC3339Nano since it is highly optimized,
	// but truncate it to use millisecond resolution.
	// Unfortunately, that format trims trailing 0s, so add 1/10 millisecond
	// to guarantee that there are exactly 4 digits after the period.
	const prefixLen: number = 23
	let n: number = $.sliceLen(b)
	t = $.assignStruct(t, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(t)).Truncate(1000000n))).Add(100000n))
	b = $.markAsStructValue($.cloneStructValue(t)).AppendFormat(b, time.RFC3339Nano)
	b = $.appendSlice($.goSlice(b, undefined, n + 23), $.goSlice(b, (n + 23) + 1, undefined), $.byteSliceHint)
	return b
}

export let DiscardHandler: Handler | null = $.interfaceValue<Handler | null>(new discardHandler(undefined, true), "slog.discardHandler", "slog.discardHandler")

export function __goscript_set_DiscardHandler(__goscriptValue: Handler | null): void {
	DiscardHandler = __goscriptValue
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({AppendText: (receiver: any, ...args: any[]) => (__goscript_level.Level_AppendText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Level: (receiver: any, ...args: any[]) => (__goscript_level.Level_Level as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (__goscript_level.Level_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (__goscript_level.Level_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_level.Level_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "slog.Level"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("AppendText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Level", [], [/* @__PURE__ */ $.basicType("int", "slog.Level")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
