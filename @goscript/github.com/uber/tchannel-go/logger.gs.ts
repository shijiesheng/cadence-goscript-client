// Generated file based on logger.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as time from "@goscript/time/index.js"

import * as os from "@goscript/os/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/time/index.js"
import "@goscript/os/index.js"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.Logger", "tchannel.LogField", "tchannel.LogFields", "tchannel.nullLogger", "tchannel.writerLogger", "tchannel.LogLevel", "tchannel.levelLogger"])

export type Logger = {
	Debug(msg: string): void
	Debugf(msg: string, args: $.Slice<any>): void
	Enabled(level: LogLevel): boolean
	Error(msg: string): void
	Fatal(msg: string): void
	Fields(): LogFields | globalThis.Promise<LogFields>
	Info(msg: string): void
	Infof(msg: string, args: $.Slice<any>): void
	Warn(msg: string): void
	WithFields(fields: $.Slice<LogField>): Logger | null | globalThis.Promise<Logger | null>
}

$.registerInterfaceType(
	"tchannel.Logger",
	null,
	[$.methodSignature("Debug", [["msg", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Debugf", [["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Enabled", [["level", /* @__PURE__ */ $.basicType("int", "tchannel.LogLevel")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Error", [["msg", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Fatal", [["msg", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Fields", [], [/* @__PURE__ */ $.sliceType("tchannel.LogField", "tchannel.LogFields")]), $.methodSignature("Info", [["msg", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Infof", [["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Warn", [["msg", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("WithFields", [["fields", /* @__PURE__ */ $.sliceType("tchannel.LogField")]], ["tchannel.Logger"])]
);

export type LogFields = $.Slice<LogField>

$.registerNamedType("tchannel.LogFields", /* @__PURE__ */ $.sliceType("tchannel.LogField"));

export type LogLevel = number

export class LogField {
	public get Key(): string {
		return this._fields.Key
	}

	public set Key(value: string) {
		this._fields.Key = value
	}

	public get Value(): any {
		return this._fields.Value
	}

	public set Value(value: any) {
		this._fields.Value = value
	}

	public _fields: {
		Key: string
		Value: any
	}

	constructor(init?: Partial<{Key?: string, Value?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			Key: init?.Key ?? ("" as string),
			Value: init?.Value ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LogField {
		return new LogField(this, true)
	}

	public __goscriptAssign(source: LogField): void {
		const target = this._fields
		const values = source._fields
		target.Key = values.Key
		target.Value = $.assignFieldValue(target.Value, values.Value, { kind: $.TypeKind.Interface, methods: [] })
	}

	static __typeInfo = $.registerStructType(
		"tchannel.LogField",
		() => new LogField(),
		() => [],
		LogField,
		() => [/* @__PURE__ */ $.structField("Key", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Value", { kind: $.TypeKind.Interface, methods: [] }, [1], 16, true)]
	)
}

export class nullLogger {
	public get fields(): LogFields {
		return this._fields.fields
	}

	public set fields(value: LogFields) {
		this._fields.fields = value
	}

	public _fields: {
		fields: LogFields
	}

	constructor(init?: Partial<{fields?: LogFields}>, __goscriptValue?: boolean) {
		this._fields = {
			fields: init?.fields ?? (null! as LogFields)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nullLogger {
		return new nullLogger(this, true)
	}

	public __goscriptAssign(source: nullLogger): void {
		const target = this._fields
		const values = source._fields
		target.fields = values.fields
	}

	public Debug(msg: string): void {
	}

	public Debugf(msg: string, args: $.Slice<any>): void {
	}

	public Enabled(_p0: LogLevel): boolean {
		return false
	}

	public Error(msg: string): void {
	}

	public Fatal(msg: string): void {
		os.Exit(1)
	}

	public Fields(): LogFields {
		const l = this;
		return (l.fields as LogFields)
	}

	public Info(msg: string): void {
	}

	public Infof(msg: string, args: $.Slice<any>): void {
	}

	public Warn(msg: string): void {
	}

	public WithFields(fields: $.Slice<LogField>): Logger | null {
		const l = this;
		let newFields: $.Slice<LogField> = $.makeSlice<LogField>($.sliceLen((l.Fields() as LogFields)) + $.sliceLen(fields), undefined, undefined, () => new LogField(undefined, true))
		let n = $.copy(newFields, (l.Fields() as LogFields))
		$.copy($.goSlice(newFields, n, undefined), fields)
		return $.interfaceValue<Logger | null>(new nullLogger({fields: (newFields as LogFields)}, true), "tchannel.nullLogger", "tchannel.nullLogger")
	}

	static __typeInfo = $.registerStructType(
		"tchannel.nullLogger",
		() => new nullLogger(),
		() => [$.methodSignature("Debug", [["msg", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Debugf", [["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Enabled", [["_", /* @__PURE__ */ $.basicType("int", "tchannel.LogLevel")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Error", [["msg", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Fatal", [["msg", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Fields", [], [/* @__PURE__ */ $.sliceType("tchannel.LogField", "tchannel.LogFields")]), $.methodSignature("Info", [["msg", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Infof", [["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Warn", [["msg", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("WithFields", [["fields", /* @__PURE__ */ $.sliceType("tchannel.LogField")]], ["tchannel.Logger"])],
		nullLogger,
		() => [/* @__PURE__ */ $.structField("fields", /* @__PURE__ */ $.sliceType("tchannel.LogField", "tchannel.LogFields"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class writerLogger {
	public get writer(): io.Writer | null {
		return this._fields.writer
	}

	public set writer(value: io.Writer | null) {
		this._fields.writer = value
	}

	public get fields(): LogFields {
		return this._fields.fields
	}

	public set fields(value: LogFields) {
		this._fields.fields = value
	}

	public _fields: {
		writer: io.Writer | null
		fields: LogFields
	}

	constructor(init?: Partial<{writer?: io.Writer | null, fields?: LogFields}>, __goscriptValue?: boolean) {
		this._fields = {
			writer: init?.writer ?? (null! as io.Writer | null),
			fields: init?.fields ?? (null! as LogFields)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): writerLogger {
		return new writerLogger(this, true)
	}

	public __goscriptAssign(source: writerLogger): void {
		const target = this._fields
		const values = source._fields
		target.writer = $.assignFieldValue(target.writer, values.writer, "io.Writer")
		target.fields = values.fields
	}

	public async Debug(msg: string): globalThis.Promise<void> {
		const l = this;
		await l.printfn("D", msg, null)
	}

	public async Debugf(msg: string, args: $.Slice<any>): globalThis.Promise<void> {
		const l = this;
		await l.printfn("D", msg, args)
	}

	public Enabled(_p0: LogLevel): boolean {
		const l = this;
		return true
	}

	public async Error(msg: string): globalThis.Promise<void> {
		const l = this;
		await l.printfn("E", msg, null)
	}

	public async Fatal(msg: string): globalThis.Promise<void> {
		const l = this;
		await l.printfn("F", msg, null)
		os.Exit(1)
	}

	public Fields(): LogFields {
		const l = this;
		return (l.fields as LogFields)
	}

	public async Info(msg: string): globalThis.Promise<void> {
		const l = this;
		await l.printfn("I", msg, null)
	}

	public async Infof(msg: string, args: $.Slice<any>): globalThis.Promise<void> {
		const l = this;
		await l.printfn("I", msg, args)
	}

	public async Warn(msg: string): globalThis.Promise<void> {
		const l = this;
		await l.printfn("W", msg, null)
	}

	public WithFields(newFields: $.Slice<LogField>): Logger | null {
		const l = this;
		let existingFields: LogFields = (l.Fields() as LogFields)
		let fields: LogFields = ($.makeSlice<LogField>(0, $.sliceLen((existingFields as LogFields)) + 1, undefined, () => new LogField(undefined, true)) as LogFields)
		fields = ($.appendSlice((fields as LogFields), existingFields) as LogFields)
		fields = ($.appendSlice((fields as LogFields), newFields) as LogFields)
		return $.interfaceValue<Logger | null>(new writerLogger({writer: l.writer, fields: (fields as LogFields)}, true), "tchannel.writerLogger", "tchannel.writerLogger")
	}

	public async printfn(prefix: string, msg: string, args: $.Slice<any>): globalThis.Promise<void> {
		const l = this;
		await fmt.Fprintf($.pointerValueOrNil(l.writer)!, "%s [%s] %s tags: %v\n", $.markAsStructValue($.cloneStructValue(time.Now())).Format("15:04:05.000000"), prefix, await fmt.Sprintf(msg, ...(args ?? [])), $.interfaceValue(l.fields, "tchannel.LogFields", /* @__PURE__ */ $.sliceType("tchannel.LogField", "tchannel.LogFields")))
	}

	static __typeInfo = $.registerStructType(
		"tchannel.writerLogger",
		() => new writerLogger(),
		() => [$.methodSignature("Debug", [["msg", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Debugf", [["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Enabled", [["_", /* @__PURE__ */ $.basicType("int", "tchannel.LogLevel")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Error", [["msg", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Fatal", [["msg", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Fields", [], [/* @__PURE__ */ $.sliceType("tchannel.LogField", "tchannel.LogFields")]), $.methodSignature("Info", [["msg", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Infof", [["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Warn", [["msg", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("WithFields", [["newFields", /* @__PURE__ */ $.sliceType("tchannel.LogField")]], ["tchannel.Logger"]), $.methodSignature("printfn", [["prefix", /* @__PURE__ */ $.basicType("string")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]])],
		writerLogger,
		() => [/* @__PURE__ */ $.structField("writer", "io.Writer", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("fields", /* @__PURE__ */ $.sliceType("tchannel.LogField", "tchannel.LogFields"), [1], 16, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class levelLogger {
	public get logger(): Logger | null {
		return this._fields.logger
	}

	public set logger(value: Logger | null) {
		this._fields.logger = value
	}

	public get level(): LogLevel {
		return this._fields.level
	}

	public set level(value: LogLevel) {
		this._fields.level = value
	}

	public _fields: {
		logger: Logger | null
		level: LogLevel
	}

	constructor(init?: Partial<{logger?: Logger | null, level?: LogLevel}>, __goscriptValue?: boolean) {
		this._fields = {
			logger: init?.logger ?? (null! as Logger | null),
			level: init?.level ?? (0 as LogLevel)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): levelLogger {
		return new levelLogger(this, true)
	}

	public __goscriptAssign(source: levelLogger): void {
		const target = this._fields
		const values = source._fields
		target.logger = $.assignFieldValue(target.logger, values.logger, "tchannel.Logger")
		target.level = values.level
	}

	public async Debug(msg: string): globalThis.Promise<void> {
		const l = this;
		if (l.level <= 1) {
			void (__goscriptAwait = $.pointerValue<Exclude<Logger, null>>(l.logger).Debug(msg), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async Debugf(msg: string, args: $.Slice<any>): globalThis.Promise<void> {
		const l = this;
		if (l.level <= 1) {
			void (__goscriptAwait = $.pointerValue<Exclude<Logger, null>>(l.logger).Debugf(msg, args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public Enabled(level: LogLevel): boolean {
		const l = this;
		return l.level <= level
	}

	public async Error(msg: string): globalThis.Promise<void> {
		const l = this;
		if (l.level <= 4) {
			void (__goscriptAwait = $.pointerValue<Exclude<Logger, null>>(l.logger).Error(msg), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async Fatal(msg: string): globalThis.Promise<void> {
		const l = this;
		if (l.level <= 5) {
			void (__goscriptAwait = $.pointerValue<Exclude<Logger, null>>(l.logger).Fatal(msg), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async Fields(): globalThis.Promise<LogFields> {
		const l = this;
		return (((__goscriptAwait = $.pointerValue<Exclude<Logger, null>>(l.logger).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as LogFields) as LogFields)
	}

	public async Info(msg: string): globalThis.Promise<void> {
		const l = this;
		if (l.level <= 2) {
			void (__goscriptAwait = $.pointerValue<Exclude<Logger, null>>(l.logger).Info(msg), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async Infof(msg: string, args: $.Slice<any>): globalThis.Promise<void> {
		const l = this;
		if (l.level <= 2) {
			void (__goscriptAwait = $.pointerValue<Exclude<Logger, null>>(l.logger).Infof(msg, args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async Warn(msg: string): globalThis.Promise<void> {
		const l = this;
		if (l.level <= 3) {
			void (__goscriptAwait = $.pointerValue<Exclude<Logger, null>>(l.logger).Warn(msg), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async WithFields(fields: $.Slice<LogField>): globalThis.Promise<Logger | null> {
		const l = this;
		return $.interfaceValue<Logger | null>((await (async () => { const __goscriptLiteralField1 = (__goscriptAwait = $.pointerValue<Exclude<Logger, null>>(l.logger).WithFields(fields), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new levelLogger({logger: __goscriptLiteralField1, level: l.level}, true) })()), "tchannel.levelLogger", "tchannel.levelLogger")
	}

	static __typeInfo = $.registerStructType(
		"tchannel.levelLogger",
		() => new levelLogger(),
		() => [$.methodSignature("Debug", [["msg", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Debugf", [["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Enabled", [["level", /* @__PURE__ */ $.basicType("int", "tchannel.LogLevel")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Error", [["msg", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Fatal", [["msg", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Fields", [], [/* @__PURE__ */ $.sliceType("tchannel.LogField", "tchannel.LogFields")]), $.methodSignature("Info", [["msg", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Infof", [["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Warn", [["msg", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("WithFields", [["fields", /* @__PURE__ */ $.sliceType("tchannel.LogField")]], ["tchannel.Logger"])],
		levelLogger,
		() => [/* @__PURE__ */ $.structField("logger", "tchannel.Logger", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("level", /* @__PURE__ */ $.basicType("int", "tchannel.LogLevel"), [1], 16, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export const writerLoggerStamp: string = "15:04:05.000000"

export const LogLevelAll: LogLevel = 0

export const LogLevelDebug: LogLevel = 1

export const LogLevelInfo: LogLevel = 2

export const LogLevelWarn: LogLevel = 3

export const LogLevelError: LogLevel = 4

export const LogLevelFatal: LogLevel = 5

export async function ErrField(err: $.GoError): globalThis.Promise<LogField> {
	return (await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new LogField({Key: "error", Value: __goscriptLiteralField0}, true) })())
}

export let NullLogger: Logger | null = $.interfaceValue<Logger | null>(new nullLogger(undefined, true), "tchannel.nullLogger", "tchannel.nullLogger")

export function __goscript_set_NullLogger(__goscriptValue: Logger | null): void {
	NullLogger = __goscriptValue
}

export let SimpleLogger: Logger | null = NewLogger($.interfaceValue<io.Writer | null>(os.Stdout, "*os.File", /* @__PURE__ */ $.pointerType("os.File")), null)

export function __goscript_set_SimpleLogger(__goscriptValue: Logger | null): void {
	SimpleLogger = __goscriptValue
}

export function NewLogger(writer: io.Writer | null, fields: $.Slice<LogField>): Logger | null {
	return $.interfaceValue<Logger | null>(new writerLogger({writer: writer, fields: (fields as LogFields)}), "*tchannel.writerLogger", /* @__PURE__ */ $.pointerType("tchannel.writerLogger"))
}

export function NewLevelLogger(logger: Logger | null, level: LogLevel): Logger | null {
	return $.interfaceValue<Logger | null>(new levelLogger({logger: logger, level: level}, true), "tchannel.levelLogger", "tchannel.levelLogger")
}

var __goscriptAwait: any
