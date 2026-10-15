// Generated file based on loggerv2.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as log from "@goscript/log/index.js"

import * as os from "@goscript/os/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/log/index.js"
import "@goscript/os/index.js"

$.registerTypePackagePath("google.golang.org/grpc/grpclog/internal", ["internal.LoggerV2", "internal.DepthLoggerV2", "internal.loggerT", "internal.LoggerV2Config"])

export type LoggerV2 = {
	Error(args: $.Slice<any>): void
	Errorf(format: string, args: $.Slice<any>): void
	Errorln(args: $.Slice<any>): void
	Fatal(args: $.Slice<any>): void
	Fatalf(format: string, args: $.Slice<any>): void
	Fatalln(args: $.Slice<any>): void
	Info(args: $.Slice<any>): void
	Infof(format: string, args: $.Slice<any>): void
	Infoln(args: $.Slice<any>): void
	V(l: number): boolean | globalThis.Promise<boolean>
	Warning(args: $.Slice<any>): void
	Warningf(format: string, args: $.Slice<any>): void
	Warningln(args: $.Slice<any>): void
}

$.registerInterfaceType(
	"internal.LoggerV2",
	null,
	[$.methodSignature("Error", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Errorln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Fatal", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Fatalf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Fatalln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Info", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Infof", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Infoln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("V", [["l", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Warning", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Warningf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Warningln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]])]
);

export type DepthLoggerV2 = {
	Error(args: $.Slice<any>): void
	ErrorDepth(depth: number, args: $.Slice<any>): void
	Errorf(format: string, args: $.Slice<any>): void
	Errorln(args: $.Slice<any>): void
	Fatal(args: $.Slice<any>): void
	FatalDepth(depth: number, args: $.Slice<any>): void
	Fatalf(format: string, args: $.Slice<any>): void
	Fatalln(args: $.Slice<any>): void
	Info(args: $.Slice<any>): void
	InfoDepth(depth: number, args: $.Slice<any>): void
	Infof(format: string, args: $.Slice<any>): void
	Infoln(args: $.Slice<any>): void
	V(l: number): boolean | globalThis.Promise<boolean>
	Warning(args: $.Slice<any>): void
	WarningDepth(depth: number, args: $.Slice<any>): void
	Warningf(format: string, args: $.Slice<any>): void
	Warningln(args: $.Slice<any>): void
}

$.registerInterfaceType(
	"internal.DepthLoggerV2",
	null,
	[$.methodSignature("Error", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("ErrorDepth", [["depth", /* @__PURE__ */ $.basicType("int")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Errorln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Fatal", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("FatalDepth", [["depth", /* @__PURE__ */ $.basicType("int")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Fatalf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Fatalln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Info", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("InfoDepth", [["depth", /* @__PURE__ */ $.basicType("int")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Infof", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Infoln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("V", [["l", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Warning", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("WarningDepth", [["depth", /* @__PURE__ */ $.basicType("int")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Warningf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Warningln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]])]
);

export class loggerT {
	public get m(): $.Slice<log.Logger | $.VarRef<log.Logger> | null> {
		return this._fields.m
	}

	public set m(value: $.Slice<log.Logger | $.VarRef<log.Logger> | null>) {
		this._fields.m = value
	}

	public get v(): number {
		return this._fields.v
	}

	public set v(value: number) {
		this._fields.v = value
	}

	public get jsonFormat(): boolean {
		return this._fields.jsonFormat
	}

	public set jsonFormat(value: boolean) {
		this._fields.jsonFormat = value
	}

	public _fields: {
		m: $.Slice<log.Logger | $.VarRef<log.Logger> | null>
		v: number
		jsonFormat: boolean
	}

	constructor(init?: Partial<{m?: $.Slice<log.Logger | $.VarRef<log.Logger> | null>, v?: number, jsonFormat?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			m: init?.m ?? (null! as $.Slice<log.Logger | $.VarRef<log.Logger> | null>),
			v: init?.v ?? (0 as number),
			jsonFormat: init?.jsonFormat ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): loggerT {
		return new loggerT(this, true)
	}

	public __goscriptAssign(source: loggerT): void {
		const target = this._fields
		const values = source._fields
		target.m = values.m
		target.v = values.v
		target.jsonFormat = values.jsonFormat
	}

	public async Error(args: $.Slice<any>): globalThis.Promise<void> {
		const g: loggerT | $.VarRef<loggerT> | null = this;
		await (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as loggerT).output(2, await fmt.Sprint(...(args ?? []))) : loggerT.prototype.output.call(g, 2, await fmt.Sprint(...(args ?? []))))
	}

	public async Errorf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const g: loggerT | $.VarRef<loggerT> | null = this;
		await (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as loggerT).output(2, await fmt.Sprintf(format, ...(args ?? []))) : loggerT.prototype.output.call(g, 2, await fmt.Sprintf(format, ...(args ?? []))))
	}

	public async Errorln(args: $.Slice<any>): globalThis.Promise<void> {
		const g: loggerT | $.VarRef<loggerT> | null = this;
		await (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as loggerT).output(2, await fmt.Sprintln(...(args ?? []))) : loggerT.prototype.output.call(g, 2, await fmt.Sprintln(...(args ?? []))))
	}

	public async Fatal(args: $.Slice<any>): globalThis.Promise<void> {
		const g: loggerT | $.VarRef<loggerT> | null = this;
		await (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as loggerT).output(3, await fmt.Sprint(...(args ?? []))) : loggerT.prototype.output.call(g, 3, await fmt.Sprint(...(args ?? []))))
		os.Exit(1)
	}

	public async Fatalf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const g: loggerT | $.VarRef<loggerT> | null = this;
		await (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as loggerT).output(3, await fmt.Sprintf(format, ...(args ?? []))) : loggerT.prototype.output.call(g, 3, await fmt.Sprintf(format, ...(args ?? []))))
		os.Exit(1)
	}

	public async Fatalln(args: $.Slice<any>): globalThis.Promise<void> {
		const g: loggerT | $.VarRef<loggerT> | null = this;
		await (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as loggerT).output(3, await fmt.Sprintln(...(args ?? []))) : loggerT.prototype.output.call(g, 3, await fmt.Sprintln(...(args ?? []))))
		os.Exit(1)
	}

	public async Info(args: $.Slice<any>): globalThis.Promise<void> {
		const g: loggerT | $.VarRef<loggerT> | null = this;
		await (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as loggerT).output(0, await fmt.Sprint(...(args ?? []))) : loggerT.prototype.output.call(g, 0, await fmt.Sprint(...(args ?? []))))
	}

	public async Infof(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const g: loggerT | $.VarRef<loggerT> | null = this;
		await (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as loggerT).output(0, await fmt.Sprintf(format, ...(args ?? []))) : loggerT.prototype.output.call(g, 0, await fmt.Sprintf(format, ...(args ?? []))))
	}

	public async Infoln(args: $.Slice<any>): globalThis.Promise<void> {
		const g: loggerT | $.VarRef<loggerT> | null = this;
		await (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as loggerT).output(0, await fmt.Sprintln(...(args ?? []))) : loggerT.prototype.output.call(g, 0, await fmt.Sprintln(...(args ?? []))))
	}

	public V(l: number): boolean {
		const g: loggerT | $.VarRef<loggerT> | null = this;
		return l <= $.pointerValue<loggerT>(g).v
	}

	public async Warning(args: $.Slice<any>): globalThis.Promise<void> {
		const g: loggerT | $.VarRef<loggerT> | null = this;
		await (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as loggerT).output(1, await fmt.Sprint(...(args ?? []))) : loggerT.prototype.output.call(g, 1, await fmt.Sprint(...(args ?? []))))
	}

	public async Warningf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const g: loggerT | $.VarRef<loggerT> | null = this;
		await (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as loggerT).output(1, await fmt.Sprintf(format, ...(args ?? []))) : loggerT.prototype.output.call(g, 1, await fmt.Sprintf(format, ...(args ?? []))))
	}

	public async Warningln(args: $.Slice<any>): globalThis.Promise<void> {
		const g: loggerT | $.VarRef<loggerT> | null = this;
		await (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as loggerT).output(1, await fmt.Sprintln(...(args ?? []))) : loggerT.prototype.output.call(g, 1, await fmt.Sprintln(...(args ?? []))))
	}

	public async output(severity: number, s: string): globalThis.Promise<void> {
		const g: loggerT | $.VarRef<loggerT> | null = this;
		const g$: loggerT = g == null ? $.pointerTarget<loggerT>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<loggerT>(g)
		let sevStr = $.arrayIndex(severityName!, severity)
		if (!(g$ as loggerT).jsonFormat) {
			await log.Logger.prototype.Output.call($.arrayIndex((g$ as loggerT).m!, severity), 2, await fmt.Sprintf("%v: %v", sevStr, s))
			return
		}
		// TODO: we can also include the logging component, but that needs more
		// (API) changes.
		let __goscriptTuple0: any = await json.Marshal($.interfaceValue($.makeMap<string, string>([["severity", sevStr], ["message", s]]), "map[string]string", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))))
		let b: $.Slice<number> = __goscriptTuple0[0]
		await log.Logger.prototype.Output.call($.arrayIndex((g$ as loggerT).m!, severity), 2, $.bytesToString(b))
	}

	static __typeInfo = $.registerStructType(
		"internal.loggerT",
		() => new loggerT(),
		() => [$.methodSignature("Error", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Errorln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Fatal", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Fatalf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Fatalln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Info", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Infof", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Infoln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("V", [["l", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Warning", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Warningf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Warningln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("output", [["severity", /* @__PURE__ */ $.basicType("int")], ["s", /* @__PURE__ */ $.basicType("string")]], [], true)],
		loggerT,
		() => [/* @__PURE__ */ $.structField("m", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("log.Logger")), [0], 0, false, { pkgPath: "google.golang.org/grpc/grpclog/internal" }), /* @__PURE__ */ $.structField("v", /* @__PURE__ */ $.basicType("int"), [1], 24, false, { pkgPath: "google.golang.org/grpc/grpclog/internal" }), /* @__PURE__ */ $.structField("jsonFormat", /* @__PURE__ */ $.basicType("bool"), [2], 32, false, { pkgPath: "google.golang.org/grpc/grpclog/internal" })]
	)
}

export class LoggerV2Config {
	// Verbosity sets the verbosity level of the logger.
	public get Verbosity(): number {
		return this._fields.Verbosity
	}

	public set Verbosity(value: number) {
		this._fields.Verbosity = value
	}

	// FormatJSON controls whether the logger should output logs in JSON format.
	public get FormatJSON(): boolean {
		return this._fields.FormatJSON
	}

	public set FormatJSON(value: boolean) {
		this._fields.FormatJSON = value
	}

	public _fields: {
		Verbosity: number
		FormatJSON: boolean
	}

	constructor(init?: Partial<{Verbosity?: number, FormatJSON?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Verbosity: init?.Verbosity ?? (0 as number),
			FormatJSON: init?.FormatJSON ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LoggerV2Config {
		return new LoggerV2Config(this, true)
	}

	public __goscriptAssign(source: LoggerV2Config): void {
		const target = this._fields
		const values = source._fields
		target.Verbosity = values.Verbosity
		target.FormatJSON = values.FormatJSON
	}

	static __typeInfo = $.registerStructType(
		"internal.LoggerV2Config",
		() => new LoggerV2Config(),
		() => [],
		LoggerV2Config,
		() => [/* @__PURE__ */ $.structField("Verbosity", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("FormatJSON", /* @__PURE__ */ $.basicType("bool"), [1], 8, true)]
	)
}

export const infoLog: number = 0

export const warningLog: number = 1

export const errorLog: number = 2

export const fatalLog: number = 3

export let severityName: $.Slice<string> = $.arrayToSlice<string>(["INFO", "WARNING", "ERROR", "FATAL"])

export function __goscript_set_severityName(__goscriptValue: $.Slice<string>): void {
	severityName = __goscriptValue
}

export async function NewLoggerV2(infoW: io.Writer | null, warningW: io.Writer | null, errorW: io.Writer | null, c: LoggerV2Config): globalThis.Promise<LoggerV2 | null> {
	let m: $.Slice<log.Logger | $.VarRef<log.Logger> | null> = null! as $.Slice<log.Logger | $.VarRef<log.Logger> | null>
	let flag = 3
	if (c.FormatJSON) {
		flag = 0
	}
	m = $.appendOne(m, await log.New(infoW, "", flag), $.appendZeros.nil)
	m = $.appendOne(m, await log.New(io.MultiWriter($.pointerValueOrNil(infoW)!, $.pointerValueOrNil(warningW)!), "", flag), $.appendZeros.nil)
	let ew = io.MultiWriter($.pointerValueOrNil(infoW)!, $.pointerValueOrNil(warningW)!, $.pointerValueOrNil(errorW)!)
	m = $.appendOne(m, await log.New(ew, "", flag), $.appendZeros.nil)
	m = $.appendOne(m, await log.New(ew, "", flag), $.appendZeros.nil)
	return $.interfaceValue<LoggerV2 | null>(new loggerT({m: m, v: c.Verbosity, jsonFormat: c.FormatJSON}), "*internal.loggerT", /* @__PURE__ */ $.pointerType("internal.loggerT"))
}
