// Generated file based on config.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as sort from "@goscript/sort/index.js"

import * as time from "@goscript/time/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import type * as http from "@goscript/net/http/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_encoder from "./encoder.gs.ts"

import * as __goscript_field from "./field.gs.ts"

import * as __goscript_http_handler from "./http_handler.gs.ts"

import * as __goscript_level from "./level.gs.ts"

import * as __goscript_logger from "./logger.gs.ts"

import * as __goscript_options from "./options.gs.ts"

import type * as __goscript_sugar from "./sugar.gs.ts"

import * as __goscript_writer from "./writer.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/sort/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/sync/atomic/index.js"
import "./encoder.gs.ts"
import "./field.gs.ts"
import "./http_handler.gs.ts"
import "./level.gs.ts"
import "./logger.gs.ts"
import "./options.gs.ts"
import "./writer.gs.ts"

$.registerTypePackagePath("go.uber.org/zap", ["zap.SamplingConfig", "zap.Config"])

export class SamplingConfig {
	public get Initial(): number {
		return this._fields.Initial
	}

	public set Initial(value: number) {
		this._fields.Initial = value
	}

	public get Thereafter(): number {
		return this._fields.Thereafter
	}

	public set Thereafter(value: number) {
		this._fields.Thereafter = value
	}

	public get Hook(): ((_p0: zapcore.Entry, _p1: zapcore.SamplingDecision) => void) | null {
		return this._fields.Hook
	}

	public set Hook(value: ((_p0: zapcore.Entry, _p1: zapcore.SamplingDecision) => void) | null) {
		this._fields.Hook = value
	}

	public _fields: {
		Initial: number
		Thereafter: number
		Hook: ((_p0: zapcore.Entry, _p1: zapcore.SamplingDecision) => void) | null
	}

	constructor(init?: Partial<{Initial?: number, Thereafter?: number, Hook?: ((_p0: zapcore.Entry, _p1: zapcore.SamplingDecision) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Initial: init?.Initial ?? (0 as number),
			Thereafter: init?.Thereafter ?? (0 as number),
			Hook: init?.Hook ?? (null! as ((_p0: zapcore.Entry, _p1: zapcore.SamplingDecision) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SamplingConfig {
		return new SamplingConfig(this, true)
	}

	public __goscriptAssign(source: SamplingConfig): void {
		const target = this._fields
		const values = source._fields
		target.Initial = values.Initial
		target.Thereafter = values.Thereafter
		target.Hook = values.Hook
	}

	static __typeInfo = $.registerStructType(
		"zap.SamplingConfig",
		() => new SamplingConfig(),
		() => [],
		SamplingConfig,
		() => [/* @__PURE__ */ $.structField("Initial", /* @__PURE__ */ $.basicType("int"), [0], 0, true, { tag: "json:\"initial\" yaml:\"initial\"" }), /* @__PURE__ */ $.structField("Thereafter", /* @__PURE__ */ $.basicType("int"), [1], 8, true, { tag: "json:\"thereafter\" yaml:\"thereafter\"" }), /* @__PURE__ */ $.structField("Hook", ({ kind: $.TypeKind.Function, params: ["zapcore.Entry", /* @__PURE__ */ $.basicType("uint32", "zapcore.SamplingDecision")], results: [] } as $.FunctionTypeInfo), [2], 16, true, { tag: "json:\"-\" yaml:\"-\"" })]
	)
}

export class Config {
	// Level is the minimum enabled logging level. Note that this is a dynamic
	// level, so calling Config.Level.SetLevel will atomically change the log
	// level of all loggers descended from this config.
	public get Level(): __goscript_level.AtomicLevel {
		return this._fields.Level
	}

	public set Level(value: __goscript_level.AtomicLevel) {
		this._fields.Level = value
	}

	// Development puts the logger in development mode, which changes the
	// behavior of DPanicLevel and takes stacktraces more liberally.
	public get Development(): boolean {
		return this._fields.Development
	}

	public set Development(value: boolean) {
		this._fields.Development = value
	}

	// DisableCaller stops annotating logs with the calling function's file
	// name and line number. By default, all logs are annotated.
	public get DisableCaller(): boolean {
		return this._fields.DisableCaller
	}

	public set DisableCaller(value: boolean) {
		this._fields.DisableCaller = value
	}

	// DisableStacktrace completely disables automatic stacktrace capturing. By
	// default, stacktraces are captured for WarnLevel and above logs in
	// development and ErrorLevel and above in production.
	public get DisableStacktrace(): boolean {
		return this._fields.DisableStacktrace
	}

	public set DisableStacktrace(value: boolean) {
		this._fields.DisableStacktrace = value
	}

	// Sampling sets a sampling policy. A nil SamplingConfig disables sampling.
	public get Sampling(): SamplingConfig | $.VarRef<SamplingConfig> | null {
		return this._fields.Sampling
	}

	public set Sampling(value: SamplingConfig | $.VarRef<SamplingConfig> | null) {
		this._fields.Sampling = value
	}

	// Encoding sets the logger's encoding. Valid values are "json" and
	// "console", as well as any third-party encodings registered via
	// RegisterEncoder.
	public get Encoding(): string {
		return this._fields.Encoding
	}

	public set Encoding(value: string) {
		this._fields.Encoding = value
	}

	// EncoderConfig sets options for the chosen encoder. See
	// zapcore.EncoderConfig for details.
	public get EncoderConfig(): zapcore.EncoderConfig {
		return this._fields.EncoderConfig
	}

	public set EncoderConfig(value: zapcore.EncoderConfig) {
		this._fields.EncoderConfig = value
	}

	// OutputPaths is a list of URLs or file paths to write logging output to.
	// See Open for details.
	public get OutputPaths(): $.Slice<string> {
		return this._fields.OutputPaths
	}

	public set OutputPaths(value: $.Slice<string>) {
		this._fields.OutputPaths = value
	}

	// ErrorOutputPaths is a list of URLs to write internal logger errors to.
	// The default is standard error.
	//
	// Note that this setting only affects internal errors; for sample code that
	// sends error-level logs to a different location from info- and debug-level
	// logs, see the package-level AdvancedConfiguration example.
	public get ErrorOutputPaths(): $.Slice<string> {
		return this._fields.ErrorOutputPaths
	}

	public set ErrorOutputPaths(value: $.Slice<string>) {
		this._fields.ErrorOutputPaths = value
	}

	// InitialFields is a collection of fields to add to the root logger.
	public get InitialFields(): globalThis.Map<string, any> | null {
		return this._fields.InitialFields
	}

	public set InitialFields(value: globalThis.Map<string, any> | null) {
		this._fields.InitialFields = value
	}

	public _fields: {
		Level: __goscript_level.AtomicLevel
		Development: boolean
		DisableCaller: boolean
		DisableStacktrace: boolean
		Sampling: SamplingConfig | $.VarRef<SamplingConfig> | null
		Encoding: string
		EncoderConfig: zapcore.EncoderConfig
		OutputPaths: $.Slice<string>
		ErrorOutputPaths: $.Slice<string>
		InitialFields: globalThis.Map<string, any> | null
	}

	constructor(init?: Partial<{Level?: __goscript_level.AtomicLevel, Development?: boolean, DisableCaller?: boolean, DisableStacktrace?: boolean, Sampling?: SamplingConfig | $.VarRef<SamplingConfig> | null, Encoding?: string, EncoderConfig?: zapcore.EncoderConfig, OutputPaths?: $.Slice<string>, ErrorOutputPaths?: $.Slice<string>, InitialFields?: globalThis.Map<string, any> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Level: init?.Level ? init.Level.clone() : new __goscript_level.AtomicLevel(undefined, true),
			Development: init?.Development ?? (false as boolean),
			DisableCaller: init?.DisableCaller ?? (false as boolean),
			DisableStacktrace: init?.DisableStacktrace ?? (false as boolean),
			Sampling: init?.Sampling ?? (null! as SamplingConfig | $.VarRef<SamplingConfig> | null),
			Encoding: init?.Encoding ?? ("" as string),
			EncoderConfig: init?.EncoderConfig ? init.EncoderConfig.clone() : new zapcore.EncoderConfig(undefined, true),
			OutputPaths: init?.OutputPaths ?? (null! as $.Slice<string>),
			ErrorOutputPaths: init?.ErrorOutputPaths ?? (null! as $.Slice<string>),
			InitialFields: init?.InitialFields ?? (null! as globalThis.Map<string, any> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Config {
		return new Config(this, true)
	}

	public __goscriptAssign(source: Config): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Level, values.Level)
		target.Development = values.Development
		target.DisableCaller = values.DisableCaller
		target.DisableStacktrace = values.DisableStacktrace
		target.Sampling = values.Sampling
		target.Encoding = values.Encoding
		$.assignStruct(target.EncoderConfig, values.EncoderConfig)
		target.OutputPaths = values.OutputPaths
		target.ErrorOutputPaths = values.ErrorOutputPaths
		target.InitialFields = values.InitialFields
	}

	public async Build(opts: $.Slice<__goscript_options.Option | null>): globalThis.Promise<[__goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null, $.GoError]> {
		const cfg = this;
		let [enc, err] = await cfg.buildEncoder()
		if (err != null) {
			return [null, err]
		}

		let __goscriptTuple0: any = await cfg.openSinks()
		let sink = __goscriptTuple0[0]
		let errSink = __goscriptTuple0[1]
		err = __goscriptTuple0[2]
		if (err != null) {
			return [null, err]
		}

		if ($.structEqual(cfg.Level, (new __goscript_level.AtomicLevel(undefined, true)))) {
			return [null, errors.New("missing Level")]
		}

		let log: __goscript_logger.Logger | $.VarRef<__goscript_logger.Logger> | null = await __goscript_logger.New(zapcore.NewCore(enc, sink, $.interfaceValue<zapcore.LevelEnabler | null>((cfg.Level).clone(), "zap.AtomicLevel", "zap.AtomicLevel")), await $.markAsStructValue($.cloneStructValue(cfg)).buildOptions(errSink))
		if ($.sliceLen(opts) > 0) {
			log = await (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? ((log as any) as __goscript_logger.Logger).WithOptions(opts) : __goscript_logger.Logger.prototype.WithOptions.call(log, opts))
		}
		return [log, null]
	}

	public async buildEncoder(): globalThis.Promise<[zapcore.Encoder | null, $.GoError]> {
		const cfg = this;
		return __goscript_encoder.newEncoder(cfg.Encoding, cfg.EncoderConfig)
	}

	public async buildOptions(errSink: zapcore.WriteSyncer | null): globalThis.Promise<$.Slice<__goscript_options.Option | null>> {
		const cfg = this;
		let opts: $.Slice<__goscript_options.Option | null> = $.arrayToSlice<__goscript_options.Option | null>([__goscript_options.ErrorOutput(errSink)])

		if (cfg.Development) {
			opts = $.appendOne(opts, __goscript_options.Development(), $.appendZeros.nil)
		}

		if (!cfg.DisableCaller) {
			opts = $.appendOne(opts, __goscript_options.AddCaller(), $.appendZeros.nil)
		}

		let stackLevel = 2
		if (cfg.Development) {
			stackLevel = 1
		}
		if (!cfg.DisableStacktrace) {
			opts = $.appendOne(opts, __goscript_options.AddStacktrace($.namedValueInterfaceValue<zapcore.LevelEnabler | null>(stackLevel, "zapcore.Level", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())), $.appendZeros.nil)
		}

		{
			let scfg: SamplingConfig | $.VarRef<SamplingConfig> | null = cfg.Sampling
			if (scfg != null) {
				opts = $.appendOne(opts, await __goscript_options.WrapCore($.functionValue(async (core: zapcore.Core | null): globalThis.Promise<zapcore.Core | null> => {
					let samplerOpts: $.Slice<zapcore.SamplerOption | null> = null! as $.Slice<zapcore.SamplerOption | null>
					if ($.pointerValue<SamplingConfig>(scfg).Hook != null) {
						samplerOpts = $.appendOne(samplerOpts, zapcore.SamplerHook($.pointerValue<SamplingConfig>(scfg).Hook), $.appendZeros.nil)
					}
					return await zapcore.NewSamplerWithOptions(core, 1000000000n, $.pointerValue<SamplingConfig>(cfg.Sampling).Initial, $.pointerValue<SamplingConfig>(cfg.Sampling).Thereafter, samplerOpts)
				}, ({ kind: $.TypeKind.Function, params: ["zapcore.Core"], results: ["zapcore.Core"] } as $.FunctionTypeInfo))), $.appendZeros.nil)
			}
		}

		if ($.len(cfg.InitialFields) > 0) {
			let fs: $.Slice<__goscript_field.Field> = $.makeSlice<__goscript_field.Field>(0, $.len(cfg.InitialFields), undefined, () => new zapcore.Field(undefined, true))
			let keys: $.Slice<string> = $.makeSlice<string>(0, $.len(cfg.InitialFields), "string")
			for (const [k, __rangeValue] of cfg.InitialFields?.entries() ?? []) {
				keys = $.appendOne(keys, k)
			}
			sort.Strings(keys)
			for (let __goscriptRangeTarget0 = keys, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let k = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
				fs = $.appendOne(fs, await __goscript_field.Any(k, $.mapGet<string, any, any>(cfg.InitialFields, k, null)[0]))
			}
			opts = $.appendOne(opts, __goscript_options.Fields(fs), $.appendZeros.nil)
		}

		return opts
	}

	public async openSinks(): globalThis.Promise<[zapcore.WriteSyncer | null, zapcore.WriteSyncer | null, $.GoError]> {
		const cfg = this;
		let [sink, closeOut, err] = await __goscript_writer.Open(cfg.OutputPaths)
		if (err != null) {
			return [null, null, err]
		}
		let __goscriptTuple1: any = await __goscript_writer.Open(cfg.ErrorOutputPaths)
		let errSink = __goscriptTuple1[0]
		err = __goscriptTuple1[2]
		if (err != null) {
			void (__goscriptAwait = closeOut!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [null, null, err]
		}
		return [sink, errSink, null]
	}

	static __typeInfo = $.registerStructType(
		"zap.Config",
		() => new Config(),
		() => [$.methodSignature("Build", [["opts", /* @__PURE__ */ $.sliceType("zap.Option")]], [/* @__PURE__ */ $.pointerType("zap.Logger"), "error"]), $.methodSignature("buildEncoder", [], ["zapcore.Encoder", "error"]), $.methodSignature("buildOptions", [["errSink", "zapcore.WriteSyncer"]], [/* @__PURE__ */ $.sliceType("zap.Option")]), $.methodSignature("openSinks", [], ["zapcore.WriteSyncer", "zapcore.WriteSyncer", "error"])],
		Config,
		() => [/* @__PURE__ */ $.structField("Level", "zap.AtomicLevel", [0], 0, true, { tag: "json:\"level\" yaml:\"level\"" }), /* @__PURE__ */ $.structField("Development", /* @__PURE__ */ $.basicType("bool"), [1], 8, true, { tag: "json:\"development\" yaml:\"development\"" }), /* @__PURE__ */ $.structField("DisableCaller", /* @__PURE__ */ $.basicType("bool"), [2], 9, true, { tag: "json:\"disableCaller\" yaml:\"disableCaller\"" }), /* @__PURE__ */ $.structField("DisableStacktrace", /* @__PURE__ */ $.basicType("bool"), [3], 10, true, { tag: "json:\"disableStacktrace\" yaml:\"disableStacktrace\"" }), /* @__PURE__ */ $.structField("Sampling", /* @__PURE__ */ $.pointerType("zap.SamplingConfig"), [4], 16, true, { tag: "json:\"sampling\" yaml:\"sampling\"" }), /* @__PURE__ */ $.structField("Encoding", /* @__PURE__ */ $.basicType("string"), [5], 24, true, { tag: "json:\"encoding\" yaml:\"encoding\"" }), /* @__PURE__ */ $.structField("EncoderConfig", "zapcore.EncoderConfig", [6], 40, true, { tag: "json:\"encoderConfig\" yaml:\"encoderConfig\"" }), /* @__PURE__ */ $.structField("OutputPaths", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [7], 240, true, { tag: "json:\"outputPaths\" yaml:\"outputPaths\"" }), /* @__PURE__ */ $.structField("ErrorOutputPaths", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [8], 264, true, { tag: "json:\"errorOutputPaths\" yaml:\"errorOutputPaths\"" }), /* @__PURE__ */ $.structField("InitialFields", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }), [9], 288, true, { tag: "json:\"initialFields\" yaml:\"initialFields\"" })]
	)
}

export function NewProductionEncoderConfig(): zapcore.EncoderConfig {
	return new zapcore.EncoderConfig({TimeKey: "ts", LevelKey: "level", NameKey: "logger", CallerKey: "caller", FunctionKey: zapcore.OmitKey, MessageKey: "msg", StacktraceKey: "stacktrace", LineEnding: zapcore.DefaultLineEnding, EncodeLevel: zapcore.LowercaseLevelEncoder, EncodeTime: zapcore.EpochTimeEncoder, EncodeDuration: zapcore.SecondsDurationEncoder, EncodeCaller: zapcore.ShortCallerEncoder}, true)
}

export function NewProductionConfig(): Config {
	return (() => { const __goscriptLiteralField0 = __goscript_level.NewAtomicLevelAt(0); const __goscriptLiteralField1 = NewProductionEncoderConfig(); return new Config({Level: __goscriptLiteralField0, Development: false, Sampling: new SamplingConfig({Initial: 100, Thereafter: 100}), Encoding: "json", EncoderConfig: __goscriptLiteralField1, OutputPaths: $.arrayToSlice<string>(["stderr"]), ErrorOutputPaths: $.arrayToSlice<string>(["stderr"])}, true) })()
}

export function NewDevelopmentEncoderConfig(): zapcore.EncoderConfig {
	return new zapcore.EncoderConfig({TimeKey: "T", LevelKey: "L", NameKey: "N", CallerKey: "C", FunctionKey: zapcore.OmitKey, MessageKey: "M", StacktraceKey: "S", LineEnding: zapcore.DefaultLineEnding, EncodeLevel: zapcore.CapitalLevelEncoder, EncodeTime: zapcore.ISO8601TimeEncoder, EncodeDuration: zapcore.StringDurationEncoder, EncodeCaller: zapcore.ShortCallerEncoder}, true)
}

export function NewDevelopmentConfig(): Config {
	return (() => { const __goscriptLiteralField2 = __goscript_level.NewAtomicLevelAt(-1); const __goscriptLiteralField3 = NewDevelopmentEncoderConfig(); return new Config({Level: __goscriptLiteralField2, Development: true, Encoding: "console", EncoderConfig: __goscriptLiteralField3, OutputPaths: $.arrayToSlice<string>(["stderr"]), ErrorOutputPaths: $.arrayToSlice<string>(["stderr"])}, true) })()
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({CapitalString: (receiver: any, ...args: any[]) => (zapcore.Level_CapitalString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enabled: (receiver: any, ...args: any[]) => (zapcore.Level_Enabled as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (zapcore.Level_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (zapcore.Level_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int8", "zapcore.Level"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("CapitalString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Enabled", [["lvl", /* @__PURE__ */ $.basicType("int8", "zapcore.Level")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
