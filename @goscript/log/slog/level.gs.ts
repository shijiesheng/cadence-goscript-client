// Generated file based on level.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/atomic/index.js"

$.registerTypePackagePath("log/slog", ["slog.Level", "slog.LevelVar", "slog.Leveler"])

export type Level = number

$.registerNamedValueType(
	"slog.Level",
	{AppendText: (receiver: any, ...args: any[]) => (Level_AppendText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Level: (receiver: any, ...args: any[]) => (Level_Level as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (Level_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (Level_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Level_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("AppendText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Level", [], [/* @__PURE__ */ $.basicType("int", "slog.Level")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*slog.Level",
	{AppendText: (receiver: any, ...args: any[]) => (Level_AppendText as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Level: (receiver: any, ...args: any[]) => (Level_Level as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (Level_MarshalJSON as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (Level_MarshalText as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Level_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (Level_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args)), UnmarshalText: (receiver: any, ...args: any[]) => (Level_UnmarshalText as any)(receiver, ...$.stripGenericTypeArgs(args)), parse: (receiver: any, ...args: any[]) => (Level_parse as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("AppendText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Level", [], [/* @__PURE__ */ $.basicType("int", "slog.Level")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalJSON", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("UnmarshalText", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("parse", [["s", /* @__PURE__ */ $.basicType("string")]], [["err", "error"]])]
);

export type Leveler = {
	Level(): Level
}

$.registerInterfaceType(
	"slog.Leveler",
	null,
	[$.methodSignature("Level", [], [/* @__PURE__ */ $.basicType("int", "slog.Level")])]
);

export class LevelVar {
	public get val(): atomic.Int64 {
		return this._fields.val
	}

	public set val(value: atomic.Int64) {
		this._fields.val = value
	}

	public _fields: {
		val: atomic.Int64
	}

	constructor(init?: Partial<{val?: atomic.Int64}>, __goscriptValue?: boolean) {
		this._fields = {
			val: init?.val ? $.markAsStructValue($.cloneStructValue(init.val)) : $.markAsStructValue(new atomic.Int64())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LevelVar {
		return new LevelVar(this, true)
	}

	public __goscriptAssign(source: LevelVar): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.val, values.val)
	}

	public async AppendText(b: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const v: LevelVar | $.VarRef<LevelVar> | null = this;
		return Level_AppendText((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as LevelVar).Level() : LevelVar.prototype.Level.call(v)), b)
	}

	public Level(): Level {
		const v: LevelVar | $.VarRef<LevelVar> | null = this;
		return $.int($.int($.pointerValue<LevelVar>(v).val.Load()))
	}

	public async MarshalText(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const v: LevelVar | $.VarRef<LevelVar> | null = this;
		return (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as LevelVar).AppendText(null) : LevelVar.prototype.AppendText.call(v, null))
	}

	public Set(l: Level): void {
		const v: LevelVar | $.VarRef<LevelVar> | null = this;
		$.pointerValue<LevelVar>(v).val.Store($.int64(l))
	}

	public async String(): globalThis.Promise<string> {
		const v: LevelVar | $.VarRef<LevelVar> | null = this;
		return fmt.Sprintf("LevelVar(%s)", $.namedValueInterfaceValue<any>((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as LevelVar).Level() : LevelVar.prototype.Level.call(v)), "slog.Level", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}

	public UnmarshalText(data: $.Slice<number>): $.GoError {
		const v: LevelVar | $.VarRef<LevelVar> | null = this;
		let l: $.VarRef<Level> = $.varRef(0)
		{
			let err = Level_UnmarshalText(l, data)
			if (err != null) {
				return err
			}
		}
		void (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as LevelVar).Set(l.value) : LevelVar.prototype.Set.call(v, l.value))
		return null
	}

	static __typeInfo = $.registerStructType(
		"slog.LevelVar",
		() => new LevelVar(),
		() => [$.methodSignature("AppendText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Level", [], [/* @__PURE__ */ $.basicType("int", "slog.Level")], true), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Set", [["l", /* @__PURE__ */ $.basicType("int", "slog.Level")]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("UnmarshalText", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		LevelVar,
		() => [/* @__PURE__ */ $.structField("val", "atomic.Int64", [0], 0, false, { pkgPath: "log/slog" })]
	)
}

export const LevelDebug: Level = -4

export const LevelInfo: Level = 0

export const LevelWarn: Level = 4

export const LevelError: Level = 8

export async function Level_String(l: Level): globalThis.Promise<string> {
	let str: ((base: string, val: Level) => string | globalThis.Promise<string>) | null = $.functionValue((base: string, val: Level): string => {
		if (val == 0) {
			return base
		}
		let sval = strconv.Itoa($.int(val))
		if (val > 0) {
			sval = $.concatString("+", sval)
		}
		return $.concatString(base, sval)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int", "slog.Level")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo))

	switch ((true as boolean)) {
		case l < 0:
		{
			return str!("DEBUG", l - -4)
			break
		}
		case l < 4:
		{
			return str!("INFO", l - 0)
			break
		}
		case l < 8:
		{
			return str!("WARN", l - 4)
			break
		}
		default:
		{
			return str!("ERROR", l - 8)
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function Level_MarshalJSON(l: Level): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	// AppendQuote is sufficient for JSON-encoding all Level strings.
	// They don't contain any runes that would produce invalid JSON
	// when escaped.
	return [strconv.AppendQuote(null, await Level_String(l)), null]
}

export function Level_UnmarshalJSON(l: $.VarRef<Level> | null, data: $.Slice<number>): $.GoError {
	let [s, err] = strconv.Unquote($.bytesToString(data))
	if (err != null) {
		return err
	}
	return Level_parse(l, s)
}

export async function Level_AppendText(l: Level, b: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	return [$.appendSlice(b, $.stringToBytes(await Level_String(l)), $.byteSliceHint), null]
}

export async function Level_MarshalText(l: Level): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	return Level_AppendText(l, null)
}

export function Level_UnmarshalText(l: $.VarRef<Level> | null, data: $.Slice<number>): $.GoError {
	return Level_parse(l, $.bytesToString(data))
}

export function Level_parse(l: $.VarRef<Level> | null, s: string): $.GoError {
	let err: $.GoError = null! as $.GoError
	using __defer = new $.DisposableStack()
	__defer.defer(() => { ((): void => {
		if (err != null) {
			err = fmt.Errorf("slog: level string %q: %w", s, (err as any))
		}
	})() })

	let name = s
	let offset = 0
	{
		let i = strings.IndexAny(s, "+-")
		if (i >= 0) {
			name = $.sliceStringOrBytes(s, undefined, i)
			let __goscriptTuple0: any = strconv.Atoi($.sliceStringOrBytes(s, i, undefined))
			offset = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
			if (err != null) {
				const __goscriptReturn1: $.GoError = err
				err = __goscriptReturn1
				__defer.dispose()
				return err
			}
		}
	}
	switch (strings.ToUpper(name)) {
		case "DEBUG":
		{
			l!.value = -4
			break
		}
		case "INFO":
		{
			l!.value = 0
			break
		}
		case "WARN":
		{
			l!.value = 4
			break
		}
		case "ERROR":
		{
			l!.value = 8
			break
		}
		default:
		{
			const __goscriptReturn2: $.GoError = errors.New("unknown name")
			err = __goscriptReturn2
			__defer.dispose()
			return err
			break
		}
	}
	l!.value = l!.value + ($.int(offset))
	const __goscriptReturn3: $.GoError = null
	err = __goscriptReturn3
	__defer.dispose()
	return err
	throw new globalThis.Error("goscript: unreachable return")
}

export function Level_Level(l: Level): Level {
	return l
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({AppendText: (receiver: any, ...args: any[]) => (Level_AppendText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Level: (receiver: any, ...args: any[]) => (Level_Level as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (Level_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (Level_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Level_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
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
