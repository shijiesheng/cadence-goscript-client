// Generated file based on binarylog.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as os from "@goscript/os/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as grpcutil from "@goscript/google.golang.org/grpc/internal/grpcutil/index.js"

import * as errors from "@goscript/errors/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import type * as context from "@goscript/context/index.js"

import type * as grpc_binarylog_v1 from "@goscript/google.golang.org/grpc/binarylog/grpc_binarylog_v1/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as __goscript_env_config from "./env_config.gs.ts"

import * as __goscript_method_logger from "./method_logger.gs.ts"

import * as __goscript_sink from "./sink.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/os/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcutil/index.js"
import "@goscript/errors/index.js"
import "@goscript/regexp/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "./env_config.gs.ts"
import "./method_logger.gs.ts"
import "./sink.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/internal/binarylog", ["binarylog.Logger", "binarylog.MethodLoggerConfig", "binarylog.LoggerConfig", "binarylog.logger"])

export type Logger = {
	GetMethodLogger(methodName: string): __goscript_method_logger.MethodLogger | null | globalThis.Promise<__goscript_method_logger.MethodLogger | null>
}

$.registerInterfaceType(
	"binarylog.Logger",
	null,
	[$.methodSignature("GetMethodLogger", [["methodName", /* @__PURE__ */ $.basicType("string")]], ["binarylog.MethodLogger"])]
);

export class MethodLoggerConfig {
	// Max length of header and message.
	public get Header(): bigint {
		return this._fields.Header
	}

	public set Header(value: bigint) {
		this._fields.Header = value
	}

	// Max length of header and message.
	public get Message(): bigint {
		return this._fields.Message
	}

	public set Message(value: bigint) {
		this._fields.Message = value
	}

	public _fields: {
		Header: bigint
		Message: bigint
	}

	constructor(init?: Partial<{Header?: bigint, Message?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Header: init?.Header ?? (0n as bigint),
			Message: init?.Message ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MethodLoggerConfig {
		return new MethodLoggerConfig(this, true)
	}

	public __goscriptAssign(source: MethodLoggerConfig): void {
		const target = this._fields
		const values = source._fields
		target.Header = values.Header
		target.Message = values.Message
	}

	static __typeInfo = $.registerStructType(
		"binarylog.MethodLoggerConfig",
		() => new MethodLoggerConfig(),
		() => [],
		MethodLoggerConfig,
		() => [/* @__PURE__ */ $.structField("Header", /* @__PURE__ */ $.basicType("uint64"), [0], 0, true), /* @__PURE__ */ $.structField("Message", /* @__PURE__ */ $.basicType("uint64"), [1], 8, true)]
	)
}

export class LoggerConfig {
	public get All(): MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null {
		return this._fields.All
	}

	public set All(value: MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null) {
		this._fields.All = value
	}

	public get Services(): globalThis.Map<string, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null> | null {
		return this._fields.Services
	}

	public set Services(value: globalThis.Map<string, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null> | null) {
		this._fields.Services = value
	}

	public get Methods(): globalThis.Map<string, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null> | null {
		return this._fields.Methods
	}

	public set Methods(value: globalThis.Map<string, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null> | null) {
		this._fields.Methods = value
	}

	public get Blacklist(): globalThis.Map<string, {}> | null {
		return this._fields.Blacklist
	}

	public set Blacklist(value: globalThis.Map<string, {}> | null) {
		this._fields.Blacklist = value
	}

	public _fields: {
		All: MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null
		Services: globalThis.Map<string, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null> | null
		Methods: globalThis.Map<string, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null> | null
		Blacklist: globalThis.Map<string, {}> | null
	}

	constructor(init?: Partial<{All?: MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null, Services?: globalThis.Map<string, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null> | null, Methods?: globalThis.Map<string, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null> | null, Blacklist?: globalThis.Map<string, {}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			All: init?.All ?? (null! as MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null),
			Services: init?.Services ?? (null! as globalThis.Map<string, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null> | null),
			Methods: init?.Methods ?? (null! as globalThis.Map<string, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null> | null),
			Blacklist: init?.Blacklist ?? (null! as globalThis.Map<string, {}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LoggerConfig {
		return new LoggerConfig(this, true)
	}

	public __goscriptAssign(source: LoggerConfig): void {
		const target = this._fields
		const values = source._fields
		target.All = values.All
		target.Services = values.Services
		target.Methods = values.Methods
		target.Blacklist = values.Blacklist
	}

	static __typeInfo = $.registerStructType(
		"binarylog.LoggerConfig",
		() => new LoggerConfig(),
		() => [],
		LoggerConfig,
		() => [/* @__PURE__ */ $.structField("All", /* @__PURE__ */ $.pointerType("binarylog.MethodLoggerConfig"), [0], 0, true), /* @__PURE__ */ $.structField("Services", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("binarylog.MethodLoggerConfig")), [1], 8, true), /* @__PURE__ */ $.structField("Methods", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("binarylog.MethodLoggerConfig")), [2], 16, true), /* @__PURE__ */ $.structField("Blacklist", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [3], 24, true)]
	)
}

export class logger {
	public get config(): LoggerConfig {
		return this._fields.config
	}

	public set config(value: LoggerConfig) {
		this._fields.config = value
	}

	public _fields: {
		config: LoggerConfig
	}

	constructor(init?: Partial<{config?: LoggerConfig}>, __goscriptValue?: boolean) {
		this._fields = {
			config: init?.config ? init.config.clone() : new LoggerConfig(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): logger {
		return new logger(this, true)
	}

	public __goscriptAssign(source: logger): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.config, values.config)
	}

	public async GetMethodLogger(methodName: string): globalThis.Promise<__goscript_method_logger.MethodLogger | null> {
		const l: logger | $.VarRef<logger> | null = this;
		const l$: logger = l == null ? $.pointerTarget<logger>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<logger>(l)
		let [s, m, err] = grpcutil.ParseMethod(methodName)
		if (err != null) {
			void (__goscriptAwait = (grpclogLogger !== null && (grpclogLogger as any).__isVarRef !== true && (grpclogLogger as any).__goValue === undefined ? (grpclogLogger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(grpclogLogger)).Infof("binarylogging: failed to parse %q: %v", $.arrayToSlice<any>([methodName, (err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return null
		}
		{
			let __goscriptTuple0: any = $.mapGet<string, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null>((l$ as logger).config.Methods, $.concatString(($.concatString(s, "/")), m), null)
			let ml: MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				return $.interfaceValue<__goscript_method_logger.MethodLogger | null>(__goscript_method_logger.NewTruncatingMethodLogger($.pointerValue<MethodLoggerConfig>(ml).Header, $.pointerValue<MethodLoggerConfig>(ml).Message), "*binarylog.TruncatingMethodLogger", /* @__PURE__ */ $.pointerType("binarylog.TruncatingMethodLogger"))
			}
		}
		{
			let [, ok] = $.mapGet<string, {}, {}>((l$ as logger).config.Blacklist, $.concatString(($.concatString(s, "/")), m), {})
			if (ok) {
				return null
			}
		}
		{
			let __goscriptTuple1: any = $.mapGet<string, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null>((l$ as logger).config.Services, s, null)
			let ml: MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				return $.interfaceValue<__goscript_method_logger.MethodLogger | null>(__goscript_method_logger.NewTruncatingMethodLogger($.pointerValue<MethodLoggerConfig>(ml).Header, $.pointerValue<MethodLoggerConfig>(ml).Message), "*binarylog.TruncatingMethodLogger", /* @__PURE__ */ $.pointerType("binarylog.TruncatingMethodLogger"))
			}
		}
		if ((l$ as logger).config.All == null) {
			return null
		}
		return $.interfaceValue<__goscript_method_logger.MethodLogger | null>(__goscript_method_logger.NewTruncatingMethodLogger($.pointerValue<MethodLoggerConfig>((l$ as logger).config.All).Header, $.pointerValue<MethodLoggerConfig>((l$ as logger).config.All).Message), "*binarylog.TruncatingMethodLogger", /* @__PURE__ */ $.pointerType("binarylog.TruncatingMethodLogger"))
	}

	public async fillMethodLoggerWithConfigString(config: string): globalThis.Promise<$.GoError> {
		const l: logger | $.VarRef<logger> | null = this;

		if ($.stringEqual(config, "")) {
			return errors.New("empty string is not a valid method binary logging config")
		}

		if ($.indexString(config, 0) == 45) {
			let [s, m, suffix, err] = await __goscript_env_config.parseMethodConfigAndSuffix($.sliceStringOrBytes(config, 1, undefined))
			if (err != null) {
				return fmt.Errorf("invalid config: %q, %v", config, (err as any))
			}
			if ($.stringEqual(m, "*")) {
				return fmt.Errorf("invalid config: %q, %v", config, "* not allowed in blacklist config")
			}
			if (!$.stringEqual(suffix, "")) {
				return fmt.Errorf("invalid config: %q, %v", config, "header/message limit not allowed in blacklist config")
			}
			{
				let __goscriptShadow0 = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as logger).setBlacklist($.concatString(($.concatString(s, "/")), m)) : logger.prototype.setBlacklist.call(l, $.concatString(($.concatString(s, "/")), m)))
				if (__goscriptShadow0 != null) {
					return fmt.Errorf("invalid config: %v", (__goscriptShadow0 as any))
				}
			}
			return null
		}

		if ($.indexString(config, 0) == 42) {
			let [hdr, msg, err] = await __goscript_env_config.parseHeaderMessageLengthConfig($.sliceStringOrBytes(config, 1, undefined))
			if (err != null) {
				return fmt.Errorf("invalid config: %q, %v", config, (err as any))
			}
			{
				let __goscriptShadow1 = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as logger).setDefaultMethodLogger(new MethodLoggerConfig({Header: hdr, Message: msg})) : logger.prototype.setDefaultMethodLogger.call(l, new MethodLoggerConfig({Header: hdr, Message: msg})))
				if (__goscriptShadow1 != null) {
					return fmt.Errorf("invalid config: %v", (__goscriptShadow1 as any))
				}
			}
			return null
		}

		let [s, m, suffix, err] = await __goscript_env_config.parseMethodConfigAndSuffix(config)
		if (err != null) {
			return fmt.Errorf("invalid config: %q, %v", config, (err as any))
		}
		let __goscriptTuple2: any = await __goscript_env_config.parseHeaderMessageLengthConfig(suffix)
		let hdr = __goscriptTuple2[0]
		let msg = __goscriptTuple2[1]
		err = __goscriptTuple2[2]
		if (err != null) {
			return fmt.Errorf("invalid header/message length config: %q, %v", suffix, (err as any))
		}
		if ($.stringEqual(m, "*")) {
			{
				let __goscriptShadow2 = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as logger).setServiceMethodLogger(s, new MethodLoggerConfig({Header: hdr, Message: msg})) : logger.prototype.setServiceMethodLogger.call(l, s, new MethodLoggerConfig({Header: hdr, Message: msg})))
				if (__goscriptShadow2 != null) {
					return fmt.Errorf("invalid config: %v", (__goscriptShadow2 as any))
				}
			}
		} else {
			{
				let __goscriptShadow3 = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as logger).setMethodMethodLogger($.concatString(($.concatString(s, "/")), m), new MethodLoggerConfig({Header: hdr, Message: msg})) : logger.prototype.setMethodMethodLogger.call(l, $.concatString(($.concatString(s, "/")), m), new MethodLoggerConfig({Header: hdr, Message: msg})))
				if (__goscriptShadow3 != null) {
					return fmt.Errorf("invalid config: %v", (__goscriptShadow3 as any))
				}
			}
		}
		return null
	}

	public setBlacklist(method: string): $.GoError {
		let l: logger | $.VarRef<logger> | null = this;
		const l$: logger = l == null ? $.pointerTarget<logger>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<logger>(l)
		{
			let [, ok] = $.mapGet<string, {}, {}>((l$ as logger).config.Blacklist, method, {})
			if (ok) {
				return fmt.Errorf("conflicting blacklist rules for method %v found", method)
			}
		}
		{
			let [, ok] = $.mapGet<string, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null>((l$ as logger).config.Methods, method, null)
			if (ok) {
				return fmt.Errorf("conflicting method rules for method %v found", method)
			}
		}
		if ((l$ as logger).config.Blacklist == null) {
			;(l$ as logger).config.Blacklist = $.makeMap<string, {}>()
		}
		$.mapSet((l$ as logger).config.Blacklist, method, {})
		return null
	}

	public setDefaultMethodLogger(ml: MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null): $.GoError {
		let l: logger | $.VarRef<logger> | null = this;
		const l$: logger = l == null ? $.pointerTarget<logger>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<logger>(l)
		if ((l$ as logger).config.All != null) {
			return fmt.Errorf("conflicting global rules found")
		}
		;(l$ as logger).config.All = ml
		return null
	}

	public setMethodMethodLogger(method: string, ml: MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null): $.GoError {
		let l: logger | $.VarRef<logger> | null = this;
		const l$: logger = l == null ? $.pointerTarget<logger>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<logger>(l)
		{
			let [, ok] = $.mapGet<string, {}, {}>((l$ as logger).config.Blacklist, method, {})
			if (ok) {
				return fmt.Errorf("conflicting blacklist rules for method %v found", method)
			}
		}
		{
			let [, ok] = $.mapGet<string, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null>((l$ as logger).config.Methods, method, null)
			if (ok) {
				return fmt.Errorf("conflicting method rules for method %v found", method)
			}
		}
		if ((l$ as logger).config.Methods == null) {
			;(l$ as logger).config.Methods = $.makeMap<string, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null>()
		}
		$.mapSet((l$ as logger).config.Methods, method, ml)
		return null
	}

	public setServiceMethodLogger(service: string, ml: MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null): $.GoError {
		let l: logger | $.VarRef<logger> | null = this;
		const l$: logger = l == null ? $.pointerTarget<logger>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<logger>(l)
		{
			let [, ok] = $.mapGet<string, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null>((l$ as logger).config.Services, service, null)
			if (ok) {
				return fmt.Errorf("conflicting service rules for service %v found", service)
			}
		}
		if ((l$ as logger).config.Services == null) {
			;(l$ as logger).config.Services = $.makeMap<string, MethodLoggerConfig | $.VarRef<MethodLoggerConfig> | null>()
		}
		$.mapSet((l$ as logger).config.Services, service, ml)
		return null
	}

	static __typeInfo = $.registerStructType(
		"binarylog.logger",
		() => new logger(),
		() => [$.methodSignature("GetMethodLogger", [["methodName", /* @__PURE__ */ $.basicType("string")]], ["binarylog.MethodLogger"], true), $.methodSignature("fillMethodLoggerWithConfigString", [["config", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("setBlacklist", [["method", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("setDefaultMethodLogger", [["ml", /* @__PURE__ */ $.pointerType("binarylog.MethodLoggerConfig")]], ["error"], true), $.methodSignature("setMethodMethodLogger", [["method", /* @__PURE__ */ $.basicType("string")], ["ml", /* @__PURE__ */ $.pointerType("binarylog.MethodLoggerConfig")]], ["error"], true), $.methodSignature("setServiceMethodLogger", [["service", /* @__PURE__ */ $.basicType("string")], ["ml", /* @__PURE__ */ $.pointerType("binarylog.MethodLoggerConfig")]], ["error"], true)],
		logger,
		() => [/* @__PURE__ */ $.structField("config", "binarylog.LoggerConfig", [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/binarylog" })]
	)
}

export let grpclogLogger: grpclog.DepthLoggerV2 | null = await grpclog.Component("binarylog")

export function __goscript_set_grpclogLogger(__goscriptValue: grpclog.DepthLoggerV2 | null): void {
	grpclogLogger = __goscriptValue
}

export let binLogger: Logger | null = null! as Logger | null

export function __goscript_set_binLogger(__goscriptValue: Logger | null): void {
	binLogger = __goscriptValue
}

export function SetLogger(l: Logger | null): void {
	binLogger = l
}

export function GetLogger(): Logger | null {
	return binLogger
}

export async function GetMethodLogger(methodName: string): globalThis.Promise<__goscript_method_logger.MethodLogger | null> {
	if (binLogger == null) {
		return null
	}
	return (binLogger !== null && (binLogger as any).__isVarRef !== true && (binLogger as any).__goValue === undefined ? (binLogger as Exclude<Logger, null>) : $.pointerValue<Exclude<Logger, null>>(binLogger)).GetMethodLogger(methodName)
}

async function __goscriptInit0(): globalThis.Promise<void> {
	const envStr: string = "GRPC_BINARY_LOG_FILTER"
	let configStr = os.Getenv("GRPC_BINARY_LOG_FILTER")
	binLogger = await __goscript_env_config.NewLoggerFromConfigString(configStr)
}

export function NewLoggerFromConfig(config: LoggerConfig): Logger | null {
	return $.interfaceValue<Logger | null>(new logger({config: config}), "*binarylog.logger", /* @__PURE__ */ $.pointerType("binarylog.logger"))
}

export function newEmptyLogger(): logger | $.VarRef<logger> | null {
	return new logger()
}

var __goscriptAwait: any

export { __goscriptInit0 }
