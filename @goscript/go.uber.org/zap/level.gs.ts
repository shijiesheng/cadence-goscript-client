// Generated file based on level.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as http from "@goscript/net/http/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as internal from "@goscript/go.uber.org/zap/internal/index.js"

import * as __goscript_http_handler from "./http_handler.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/net/http/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/go.uber.org/zap/internal/index.js"
import "./http_handler.gs.ts"

$.registerTypePackagePath("go.uber.org/zap", ["zap.LevelEnablerFunc", "zap.AtomicLevel"])

export type LevelEnablerFunc = ((_p0: zapcore.Level) => boolean | globalThis.Promise<boolean>) | null

$.registerNamedValueType(
	"zap.LevelEnablerFunc",
	{Enabled: (receiver: any, ...args: any[]) => (LevelEnablerFunc_Enabled as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Enabled", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")]], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*zap.LevelEnablerFunc",
	{Enabled: (receiver: any, ...args: any[]) => (LevelEnablerFunc_Enabled as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Enabled", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")]], [/* @__PURE__ */ $.basicType("bool")])]
);

export class AtomicLevel {
	public get l(): atomic.Int32 | $.VarRef<atomic.Int32> | null {
		return this._fields.l
	}

	public set l(value: atomic.Int32 | $.VarRef<atomic.Int32> | null) {
		this._fields.l = value
	}

	public _fields: {
		l: atomic.Int32 | $.VarRef<atomic.Int32> | null
	}

	constructor(init?: Partial<{l?: atomic.Int32 | $.VarRef<atomic.Int32> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			l: init?.l ?? (null! as atomic.Int32 | $.VarRef<atomic.Int32> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): AtomicLevel {
		return new AtomicLevel(this, true)
	}

	public __goscriptAssign(source: AtomicLevel): void {
		const target = this._fields
		const values = source._fields
		target.l = values.l
	}

	public Enabled(l: zapcore.Level): boolean {
		const lvl = this;
		return zapcore.Level_Enabled($.markAsStructValue($.cloneStructValue(lvl)).Level(), l)
	}

	public Level(): zapcore.Level {
		const lvl = this;
		return $.int($.int(atomic.Int32.prototype.Load.call($.pointerValue<atomic.Int32>(lvl.l)), 8), 8)
	}

	public async MarshalText(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const lvl = this;
		let text: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		return zapcore.Level_MarshalText($.markAsStructValue($.cloneStructValue(lvl)).Level())
	}

	public async ServeHTTP(w: http.ResponseWriter | null, r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> {
		const lvl = this;
		{
			let err = await $.markAsStructValue($.cloneStructValue(lvl)).serveHTTP(w, r)
			if (err != null) {
				void (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(w)).WriteHeader(500), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				await fmt.Fprintf($.pointerValueOrNil((w as io.Writer | null))!, "internal error: %v", (err as any))
			}
		}
	}

	public SetLevel(l: zapcore.Level): void {
		const lvl = this;
		atomic.Int32.prototype.Store.call($.pointerValue<atomic.Int32>(lvl.l), $.int(l, 32))
	}

	public async String(): globalThis.Promise<string> {
		const lvl = this;
		return zapcore.Level_String($.markAsStructValue($.cloneStructValue(lvl)).Level())
	}

	public UnmarshalText(text: $.Slice<number>): $.GoError {
		let lvl: AtomicLevel | $.VarRef<AtomicLevel> | null = this;
		const lvl$: AtomicLevel = lvl == null ? $.pointerTarget<AtomicLevel>(lvl) : (lvl as any).__isVarRef === true ? (lvl as any).value : (lvl as any).__goValue === undefined ? (lvl as any) : $.pointerTarget<AtomicLevel>(lvl)
		if ((lvl$ as AtomicLevel).l == null) {
			;(lvl$ as AtomicLevel).l = new atomic.Int32()
		}

		let l: $.VarRef<zapcore.Level> = $.varRef(0)
		{
			let err = zapcore.Level_UnmarshalText(l, text)
			if (err != null) {
				return err
			}
		}

		$.markAsStructValue($.cloneStructValue((lvl$ as AtomicLevel))).SetLevel(l.value)
		return null
	}

	public async serveHTTP(w: http.ResponseWriter | null, r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<$.GoError> {
		const lvl = this;
		const r$: http.Request = r == null ? $.pointerTarget<http.Request>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<http.Request>(r)
		class errorResponse {
			public get Error(): string {
				return this._fields.Error
			}

			public set Error(value: string) {
				this._fields.Error = value
			}

			public _fields: {
				Error: string
			}

			constructor(init?: Partial<{Error?: string}>, __goscriptValue?: boolean) {
				this._fields = {
					Error: init?.Error ?? ("" as string)
				}
				;(this as any)[$.structValueMarker] = __goscriptValue === true
			}

			public clone(): errorResponse {
				return new errorResponse(this, true)
			}

			public __goscriptAssign(source: errorResponse): void {
				const target = this._fields
				const values = source._fields
				target.Error = values.Error
			}

			static __typeInfo = $.registerStructType(
				"zap.errorResponse",
				() => new errorResponse(),
				() => [],
				errorResponse,
				() => [/* @__PURE__ */ $.structField("Error", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"error\"" })]
			)
		}
		class payload {
			public get Level(): zapcore.Level {
				return this._fields.Level
			}

			public set Level(value: zapcore.Level) {
				this._fields.Level = value
			}

			public _fields: {
				Level: zapcore.Level
			}

			constructor(init?: Partial<{Level?: zapcore.Level}>, __goscriptValue?: boolean) {
				this._fields = {
					Level: init?.Level ?? (0 as zapcore.Level)
				}
				;(this as any)[$.structValueMarker] = __goscriptValue === true
			}

			public clone(): payload {
				return new payload(this, true)
			}

			public __goscriptAssign(source: payload): void {
				const target = this._fields
				const values = source._fields
				target.Level = values.Level
			}

			static __typeInfo = $.registerStructType(
				"zap.payload",
				() => new payload(),
				() => [],
				payload,
				() => [/* @__PURE__ */ $.structField("Level", /* @__PURE__ */ $.basicType("int8", "zapcore.Level"), [0], 0, true, { tag: "json:\"level\"" })]
			)
		}

		let enc: json.Encoder | $.VarRef<json.Encoder> | null = json.NewEncoder($.pointerValueOrNil((w as io.Writer | null))!)

		switch ((r$ as http.Request).Method) {
			case http.MethodGet:
			{
				return json.Encoder.prototype.Encode.call($.pointerValue<json.Encoder>(enc), $.interfaceValue((() => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue(lvl)).Level(); return $.markAsStructValue(new payload({Level: __goscriptLiteralField0})) })(), "zap.payload", "zap.payload"))
				break
			}
			case http.MethodPut:
			{
				let [requestedLvl, err] = await __goscript_http_handler.decodePutRequest(await http.Header_Get((r$ as http.Request).Header, "Content-Type"), r)
				if (err != null) {
					void (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(w)).WriteHeader(400), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					return json.Encoder.prototype.Encode.call($.pointerValue<json.Encoder>(enc), $.interfaceValue((await (async () => { const __goscriptLiteralField1 = (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return $.markAsStructValue(new errorResponse({Error: __goscriptLiteralField1})) })()), "zap.errorResponse", "zap.errorResponse"))
				}
				$.markAsStructValue($.cloneStructValue(lvl)).SetLevel(requestedLvl)
				return json.Encoder.prototype.Encode.call($.pointerValue<json.Encoder>(enc), $.interfaceValue((() => { const __goscriptLiteralField2 = $.markAsStructValue($.cloneStructValue(lvl)).Level(); return $.markAsStructValue(new payload({Level: __goscriptLiteralField2})) })(), "zap.payload", "zap.payload"))
				break
			}
			default:
			{
				void (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(w)).WriteHeader(405), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return json.Encoder.prototype.Encode.call($.pointerValue<json.Encoder>(enc), $.interfaceValue($.markAsStructValue(new errorResponse({Error: "Only GET and PUT are supported."})), "zap.errorResponse", "zap.errorResponse"))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"zap.AtomicLevel",
		() => new AtomicLevel(),
		() => [$.methodSignature("Enabled", [["l", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Level", [], [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")]), $.methodSignature("MarshalText", [], [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]]), $.methodSignature("ServeHTTP", [["w", "http.ResponseWriter"], ["r", /* @__PURE__ */ $.pointerType("http.Request")]]), $.methodSignature("SetLevel", [["l", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")]]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("serveHTTP", [["w", "http.ResponseWriter"], ["r", /* @__PURE__ */ $.pointerType("http.Request")]], ["error"])],
		AtomicLevel,
		() => [/* @__PURE__ */ $.structField("l", /* @__PURE__ */ $.pointerType("atomic.Int32"), [0], 0, false, { pkgPath: "go.uber.org/zap" })]
	)
}

export const DebugLevel: zapcore.Level = -1

export const InfoLevel: zapcore.Level = 0

export const WarnLevel: zapcore.Level = 1

export const ErrorLevel: zapcore.Level = 2

export const DPanicLevel: zapcore.Level = 3

export const PanicLevel: zapcore.Level = 4

export const FatalLevel: zapcore.Level = 5

export async function LevelEnablerFunc_Enabled(f: LevelEnablerFunc | null, lvl: zapcore.Level): globalThis.Promise<boolean> {
	return f!(lvl)
}

export function NewAtomicLevel(): AtomicLevel {
	let lvl = new AtomicLevel({l: new atomic.Int32()}, true)
	atomic.Int32.prototype.Store.call($.pointerValue<atomic.Int32>(lvl.l), 0)
	return (lvl).clone()
}

export function NewAtomicLevelAt(l: zapcore.Level): AtomicLevel {
	let a = NewAtomicLevel()
	$.markAsStructValue($.cloneStructValue(a)).SetLevel(l)
	return (a).clone()
}

export function ParseAtomicLevel(text: string): [AtomicLevel, $.GoError] {
	let a = NewAtomicLevel()
	let [l, err] = zapcore.ParseLevel(text)
	if (err != null) {
		return [(a).clone(), err]
	}

	$.markAsStructValue($.cloneStructValue(a)).SetLevel(l)
	return [(a).clone(), null]
}

var __goscriptAwait: any
