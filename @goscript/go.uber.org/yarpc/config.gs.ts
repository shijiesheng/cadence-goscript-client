// Generated file based on config.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as time from "@goscript/time/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as metrics from "@goscript/go.uber.org/net/metrics/index.js"

import * as tallypush from "@goscript/go.uber.org/net/metrics/tallypush/index.js"

import * as middleware from "@goscript/go.uber.org/yarpc/api/middleware/index.js"

import * as observability from "@goscript/go.uber.org/yarpc/internal/observability/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as push from "@goscript/go.uber.org/net/metrics/push/index.js"

import type * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_dispatcher from "./dispatcher.gs.ts"
import "@goscript/context/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/net/metrics/index.js"
import "@goscript/go.uber.org/net/metrics/tallypush/index.js"
import "@goscript/go.uber.org/yarpc/api/middleware/index.js"
import "@goscript/go.uber.org/yarpc/internal/observability/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/go.uber.org/net/metrics/push/index.js"
import "@goscript/sync/index.js"
import "./dispatcher.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc", ["yarpc.DirectionalLogLevelConfig", "yarpc.LogLevelConfig", "yarpc.LoggingConfig", "yarpc.MetricsConfig", "yarpc.Config"])

export class DirectionalLogLevelConfig {
	// Level at which successful requests are logged.
	// Defaults to DebugLevel.
	public get Success(): $.VarRef<zapcore.Level> | null {
		return this._fields.Success
	}

	public set Success(value: $.VarRef<zapcore.Level> | null) {
		this._fields.Success = value
	}

	// Level at which errors are logged.
	// Thrift exceptions are application errors, which we log as a separate
	// class from success and failure.
	// Deprecated in favor of ServerError and ClientError.
	public get Failure(): $.VarRef<zapcore.Level> | null {
		return this._fields.Failure
	}

	public set Failure(value: $.VarRef<zapcore.Level> | null) {
		this._fields.Failure = value
	}

	// Level at which application errors are logged.
	// All Thrift exceptions are considered application errors.
	// All errors from Protobuf handlers are application errors.
	// Defaults to ErrorLevel.
	// Deprecated in favor of ServerError and ClientError.
	public get ApplicationError(): $.VarRef<zapcore.Level> | null {
		return this._fields.ApplicationError
	}

	public set ApplicationError(value: $.VarRef<zapcore.Level> | null) {
		this._fields.ApplicationError = value
	}

	// Level at which client errors are logged.
	// All Thrift exceptions are considered application errors if
	// they are not annotated with the option rpc.code.
	// Defaults to WarnLevel for inbound requests, ErrorLevel for outbound requests.
	public get ClientError(): $.VarRef<zapcore.Level> | null {
		return this._fields.ClientError
	}

	public set ClientError(value: $.VarRef<zapcore.Level> | null) {
		this._fields.ClientError = value
	}

	// Level at which server errors are logged.
	// Defaults to ErrorLevel.
	public get ServerError(): $.VarRef<zapcore.Level> | null {
		return this._fields.ServerError
	}

	public set ServerError(value: $.VarRef<zapcore.Level> | null) {
		this._fields.ServerError = value
	}

	public _fields: {
		Success: $.VarRef<zapcore.Level> | null
		Failure: $.VarRef<zapcore.Level> | null
		ApplicationError: $.VarRef<zapcore.Level> | null
		ClientError: $.VarRef<zapcore.Level> | null
		ServerError: $.VarRef<zapcore.Level> | null
	}

	constructor(init?: Partial<{Success?: $.VarRef<zapcore.Level> | null, Failure?: $.VarRef<zapcore.Level> | null, ApplicationError?: $.VarRef<zapcore.Level> | null, ClientError?: $.VarRef<zapcore.Level> | null, ServerError?: $.VarRef<zapcore.Level> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Success: init?.Success ?? (null! as $.VarRef<zapcore.Level> | null),
			Failure: init?.Failure ?? (null! as $.VarRef<zapcore.Level> | null),
			ApplicationError: init?.ApplicationError ?? (null! as $.VarRef<zapcore.Level> | null),
			ClientError: init?.ClientError ?? (null! as $.VarRef<zapcore.Level> | null),
			ServerError: init?.ServerError ?? (null! as $.VarRef<zapcore.Level> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DirectionalLogLevelConfig {
		return new DirectionalLogLevelConfig(this, true)
	}

	public __goscriptAssign(source: DirectionalLogLevelConfig): void {
		const target = this._fields
		const values = source._fields
		target.Success = values.Success
		target.Failure = values.Failure
		target.ApplicationError = values.ApplicationError
		target.ClientError = values.ClientError
		target.ServerError = values.ServerError
	}

	static __typeInfo = $.registerStructType(
		"yarpc.DirectionalLogLevelConfig",
		() => new DirectionalLogLevelConfig(),
		() => [],
		DirectionalLogLevelConfig,
		() => [/* @__PURE__ */ $.structField("Success", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8", "zapcore.Level")), [0], 0, true), /* @__PURE__ */ $.structField("Failure", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8", "zapcore.Level")), [1], 8, true), /* @__PURE__ */ $.structField("ApplicationError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8", "zapcore.Level")), [2], 16, true), /* @__PURE__ */ $.structField("ClientError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8", "zapcore.Level")), [3], 24, true), /* @__PURE__ */ $.structField("ServerError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8", "zapcore.Level")), [4], 32, true)]
	)
}

export class LogLevelConfig {
	// Level at which successful requests are logged.
	// Defaults to DebugLevel.
	// Can be overridden by Inbound.Success or Outbound.Success for inbound or
	// outbound requests.
	public get Success(): $.VarRef<zapcore.Level> | null {
		return this._fields.Success
	}

	public set Success(value: $.VarRef<zapcore.Level> | null) {
		this._fields.Success = value
	}

	// Level at which errors are logged.
	// Thrift exceptions are application errors, which we log as a separate
	// class from success and failure.
	// Can be overridden by Inbound.Failure or Outbound.Failure for inbound or
	// outbound requests.
	// Deprecated in favor of ServerError and ClientError.
	public get Failure(): $.VarRef<zapcore.Level> | null {
		return this._fields.Failure
	}

	public set Failure(value: $.VarRef<zapcore.Level> | null) {
		this._fields.Failure = value
	}

	// Level at which application errors are logged.
	// All Thrift exceptions are considered application errors.
	// Defaults to ErrorLevel.
	// Can be overridden by Inbound.ApplicationError or
	// Outbound.ApplicationError for inbound or outbound requests.
	// Deprecated in favor of ServerError and ClientError.
	public get ApplicationError(): $.VarRef<zapcore.Level> | null {
		return this._fields.ApplicationError
	}

	public set ApplicationError(value: $.VarRef<zapcore.Level> | null) {
		this._fields.ApplicationError = value
	}

	// Level at which client errors are logged.
	// All Thrift exceptions are considered application errors if
	// they are not annotated with the option rpc.code.
	// Defaults to WarnLevel for inbound requests, ErrorLevel for outbound requests.
	// Can be overridden by Inbound.ApplicationError or
	// Outbound.ApplicationError for inbound or outbound requests.
	public get ClientError(): $.VarRef<zapcore.Level> | null {
		return this._fields.ClientError
	}

	public set ClientError(value: $.VarRef<zapcore.Level> | null) {
		this._fields.ClientError = value
	}

	// Level at which server errors are logged.
	// Defaults to ErrorLevel.
	// Can be overridden by Inbound.ApplicationError or
	// Outbound.ApplicationError for inbound or outbound requests.
	public get ServerError(): $.VarRef<zapcore.Level> | null {
		return this._fields.ServerError
	}

	public set ServerError(value: $.VarRef<zapcore.Level> | null) {
		this._fields.ServerError = value
	}

	// Specific overrides for inbound and outbound requests.
	public get Inbound(): DirectionalLogLevelConfig {
		return this._fields.Inbound
	}

	public set Inbound(value: DirectionalLogLevelConfig) {
		this._fields.Inbound = value
	}

	// Specific overrides for inbound and outbound requests.
	public get Outbound(): DirectionalLogLevelConfig {
		return this._fields.Outbound
	}

	public set Outbound(value: DirectionalLogLevelConfig) {
		this._fields.Outbound = value
	}

	public _fields: {
		Success: $.VarRef<zapcore.Level> | null
		Failure: $.VarRef<zapcore.Level> | null
		ApplicationError: $.VarRef<zapcore.Level> | null
		ClientError: $.VarRef<zapcore.Level> | null
		ServerError: $.VarRef<zapcore.Level> | null
		Inbound: DirectionalLogLevelConfig
		Outbound: DirectionalLogLevelConfig
	}

	constructor(init?: Partial<{Success?: $.VarRef<zapcore.Level> | null, Failure?: $.VarRef<zapcore.Level> | null, ApplicationError?: $.VarRef<zapcore.Level> | null, ClientError?: $.VarRef<zapcore.Level> | null, ServerError?: $.VarRef<zapcore.Level> | null, Inbound?: DirectionalLogLevelConfig, Outbound?: DirectionalLogLevelConfig}>, __goscriptValue?: boolean) {
		this._fields = {
			Success: init?.Success ?? (null! as $.VarRef<zapcore.Level> | null),
			Failure: init?.Failure ?? (null! as $.VarRef<zapcore.Level> | null),
			ApplicationError: init?.ApplicationError ?? (null! as $.VarRef<zapcore.Level> | null),
			ClientError: init?.ClientError ?? (null! as $.VarRef<zapcore.Level> | null),
			ServerError: init?.ServerError ?? (null! as $.VarRef<zapcore.Level> | null),
			Inbound: init?.Inbound ? init.Inbound.clone() : new DirectionalLogLevelConfig(undefined, true),
			Outbound: init?.Outbound ? init.Outbound.clone() : new DirectionalLogLevelConfig(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LogLevelConfig {
		return new LogLevelConfig(this, true)
	}

	public __goscriptAssign(source: LogLevelConfig): void {
		const target = this._fields
		const values = source._fields
		target.Success = values.Success
		target.Failure = values.Failure
		target.ApplicationError = values.ApplicationError
		target.ClientError = values.ClientError
		target.ServerError = values.ServerError
		$.assignStruct(target.Inbound, values.Inbound)
		$.assignStruct(target.Outbound, values.Outbound)
	}

	static __typeInfo = $.registerStructType(
		"yarpc.LogLevelConfig",
		() => new LogLevelConfig(),
		() => [],
		LogLevelConfig,
		() => [/* @__PURE__ */ $.structField("Success", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8", "zapcore.Level")), [0], 0, true), /* @__PURE__ */ $.structField("Failure", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8", "zapcore.Level")), [1], 8, true), /* @__PURE__ */ $.structField("ApplicationError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8", "zapcore.Level")), [2], 16, true), /* @__PURE__ */ $.structField("ClientError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8", "zapcore.Level")), [3], 24, true), /* @__PURE__ */ $.structField("ServerError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8", "zapcore.Level")), [4], 32, true), /* @__PURE__ */ $.structField("Inbound", "yarpc.DirectionalLogLevelConfig", [5], 40, true), /* @__PURE__ */ $.structField("Outbound", "yarpc.DirectionalLogLevelConfig", [6], 80, true)]
	)
}

export class LoggingConfig {
	// Supplies a logger for the dispatcher. By default, no logs are
	// emitted.
	public get Zap(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.Zap
	}

	public set Zap(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.Zap = value
	}

	// If supplied, ExtractContext is used to log request-scoped
	// information carried on the context (e.g., trace and span IDs).
	public get ContextExtractor(): ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null {
		return this._fields.ContextExtractor
	}

	public set ContextExtractor(value: ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null) {
		this._fields.ContextExtractor = value
	}

	// Levels configures the levels at which YARPC logs various messages.
	public get Levels(): LogLevelConfig {
		return this._fields.Levels
	}

	public set Levels(value: LogLevelConfig) {
		this._fields.Levels = value
	}

	public _fields: {
		Zap: zap.Logger | $.VarRef<zap.Logger> | null
		ContextExtractor: ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null
		Levels: LogLevelConfig
	}

	constructor(init?: Partial<{Zap?: zap.Logger | $.VarRef<zap.Logger> | null, ContextExtractor?: ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null, Levels?: LogLevelConfig}>, __goscriptValue?: boolean) {
		this._fields = {
			Zap: init?.Zap ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			ContextExtractor: init?.ContextExtractor ?? (null! as ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null),
			Levels: init?.Levels ? init.Levels.clone() : new LogLevelConfig(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LoggingConfig {
		return new LoggingConfig(this, true)
	}

	public __goscriptAssign(source: LoggingConfig): void {
		const target = this._fields
		const values = source._fields
		target.Zap = values.Zap
		target.ContextExtractor = values.ContextExtractor
		$.assignStruct(target.Levels, values.Levels)
	}

	public extractor(): observability.ContextExtractor | null {
		const c = this;
		if (c.ContextExtractor == null) {
			return observability.NewNopContextExtractor()
		}
		return $.namedFunction(c.ContextExtractor, "observability.ContextExtractor", ({ kind: $.TypeKind.Function, name: "observability.ContextExtractor", params: ["context.Context"], results: ["zapcore.Field"] } as $.FunctionTypeInfo))
	}

	public async logger(name: string): globalThis.Promise<zap.Logger | $.VarRef<zap.Logger> | null> {
		const c = this;
		if (c.Zap == null) {
			return zap.NewNop()
		}
		return zap.Logger.prototype.With.call(zap.Logger.prototype.Named.call(c.Zap, "yarpc"), $.arrayToSlice<zap.Field>([zap.Namespace("yarpc"), zap.String("dispatcher", name)]))
	}

	static __typeInfo = $.registerStructType(
		"yarpc.LoggingConfig",
		() => new LoggingConfig(),
		() => [$.methodSignature("extractor", [], [({ kind: $.TypeKind.Function, name: "observability.ContextExtractor", params: ["context.Context"], results: ["zapcore.Field"] } as $.FunctionTypeInfo)]), $.methodSignature("logger", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("zap.Logger")])],
		LoggingConfig,
		() => [/* @__PURE__ */ $.structField("Zap", /* @__PURE__ */ $.pointerType("zap.Logger"), [0], 0, true), /* @__PURE__ */ $.structField("ContextExtractor", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["zapcore.Field"] } as $.FunctionTypeInfo), [1], 8, true), /* @__PURE__ */ $.structField("Levels", "yarpc.LogLevelConfig", [2], 16, true)]
	)
}

export class MetricsConfig {
	// Metrics is a *"go.uber.org/net/metrics".Scope for recording stats.
	// YARPC does not push these metrics; pushing metrics from the root is an
	// external concern.
	public get Metrics(): metrics.Scope | $.VarRef<metrics.Scope> | null {
		return this._fields.Metrics
	}

	public set Metrics(value: metrics.Scope | $.VarRef<metrics.Scope> | null) {
		this._fields.Metrics = value
	}

	// Tally scope used for pushing to M3 or StatsD-based systems. By
	// default, metrics are collected in memory but not pushed.
	// TODO deprecate this option for metrics configuration.
	public get Tally(): tally.Scope | null {
		return this._fields.Tally
	}

	public set Tally(value: tally.Scope | null) {
		this._fields.Tally = value
	}

	// TagsBlocklist enlists tags' keys that should be suppressed from all the metrics
	// emitted from w/in YARPC middleware.
	public get TagsBlocklist(): $.Slice<string> {
		return this._fields.TagsBlocklist
	}

	public set TagsBlocklist(value: $.Slice<string>) {
		this._fields.TagsBlocklist = value
	}

	public _fields: {
		Metrics: metrics.Scope | $.VarRef<metrics.Scope> | null
		Tally: tally.Scope | null
		TagsBlocklist: $.Slice<string>
	}

	constructor(init?: Partial<{Metrics?: metrics.Scope | $.VarRef<metrics.Scope> | null, Tally?: tally.Scope | null, TagsBlocklist?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			Metrics: init?.Metrics ?? (null! as metrics.Scope | $.VarRef<metrics.Scope> | null),
			Tally: init?.Tally ?? (null! as tally.Scope | null),
			TagsBlocklist: init?.TagsBlocklist ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MetricsConfig {
		return new MetricsConfig(this, true)
	}

	public __goscriptAssign(source: MetricsConfig): void {
		const target = this._fields
		const values = source._fields
		target.Metrics = values.Metrics
		target.Tally = $.assignFieldValue(target.Tally, values.Tally, "tally.Scope")
		target.TagsBlocklist = values.TagsBlocklist
	}

	public async scope(name: string, logger: zap.Logger | $.VarRef<zap.Logger> | null): globalThis.Promise<[metrics.Scope | $.VarRef<metrics.Scope> | null, context.CancelFunc | null]> {
		let c: MetricsConfig = this;
		// Neither: no-op metrics, not pushed
		if ((c.Metrics == null) && (c.Tally == null)) {
			return [null, $.functionValue((): void => {
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))]
		}

		// Both: ignore Tally and warn.
		if ((c.Metrics != null) && (c.Tally != null)) {
			await zap.Logger.prototype.Warn.call(logger, $.concatString("yarpc.NewDispatcher expects only one of Metrics.Tally or Metrics.Scope. ", "To push to Tally, either use a Metrics.Scope and use tallypush, or just pass a Tally Scope"), null)
			c.Tally = null
		}

		// Hereafter: We have one of either c.Metrics or c.Tally exclusively.

		let root: metrics.Root | $.VarRef<metrics.Root> | null = null! as metrics.Root | $.VarRef<metrics.Root> | null
		let parent: metrics.Scope | $.VarRef<metrics.Scope> | null = null! as metrics.Scope | $.VarRef<metrics.Scope> | null

		if (c.Metrics != null) {
			// root remains nil
			parent = c.Metrics
		} else {
			root = await metrics.New(null)
			parent = (root !== null && (root as any).__isVarRef !== true && (root as any).__goValue === undefined ? ((root as any) as metrics.Root).Scope() : metrics.Root.prototype.Scope.call(root))
		}

		let meter: metrics.Scope | $.VarRef<metrics.Scope> | null = await (parent !== null && (parent as any).__isVarRef !== true && (parent as any).__goValue === undefined ? ((parent as any) as metrics.Scope).Tagged($.makeMap<string, string>([["component", "yarpc"], ["dispatcher", name]])) : metrics.Scope.prototype.Tagged.call(parent, $.makeMap<string, string>([["component", "yarpc"], ["dispatcher", name]])))

		// When we have c.Metrics, we do not push
		if (root == null) {
			return [meter, $.functionValue((): void => {
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))]
		}

		// When we have c.Tally, we measure *and* push
		let [stopMeter, err] = await (root !== null && (root as any).__isVarRef !== true && (root as any).__goValue === undefined ? ((root as any) as metrics.Root).Push(tallypush.New(c.Tally), 500000000n) : metrics.Root.prototype.Push.call(root, tallypush.New(c.Tally), 500000000n))
		if (err != null) {
			await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Error("Failed to start pushing metrics to Tally.", $.arrayToSlice<zap.Field>([zap.Error(err)])) : zap.Logger.prototype.Error.call(logger, "Failed to start pushing metrics to Tally.", $.arrayToSlice<zap.Field>([zap.Error(err)])))
			return [meter, $.functionValue((): void => {
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))]
		}
		return [meter, stopMeter]
	}

	static __typeInfo = $.registerStructType(
		"yarpc.MetricsConfig",
		() => new MetricsConfig(),
		() => [$.methodSignature("scope", [["name", /* @__PURE__ */ $.basicType("string")], ["logger", /* @__PURE__ */ $.pointerType("zap.Logger")]], [/* @__PURE__ */ $.pointerType("metrics.Scope"), ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo)])],
		MetricsConfig,
		() => [/* @__PURE__ */ $.structField("Metrics", /* @__PURE__ */ $.pointerType("metrics.Scope"), [0], 0, true), /* @__PURE__ */ $.structField("Tally", "tally.Scope", [1], 8, true), /* @__PURE__ */ $.structField("TagsBlocklist", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 24, true)]
	)
}

export class Config {
	// Name of the service. This is the name used by other services when
	// making requests to this service.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// Inbounds define how this service receives incoming requests from other
	// services.
	//
	// This may be nil if this service does not receive any requests.
	public get Inbounds(): __goscript_dispatcher.Inbounds {
		return this._fields.Inbounds
	}

	public set Inbounds(value: __goscript_dispatcher.Inbounds) {
		this._fields.Inbounds = value
	}

	// Outbounds defines how this service makes requests to other services.
	//
	// This may be nil if this service does not send any requests.
	public get Outbounds(): __goscript_dispatcher.Outbounds {
		return this._fields.Outbounds
	}

	public set Outbounds(value: __goscript_dispatcher.Outbounds) {
		this._fields.Outbounds = value
	}

	// Inbound and Outbound Middleware that will be applied to all incoming
	// and outgoing requests respectively.
	//
	// These may be nil if there is no middleware to apply.
	public get InboundMiddleware(): __goscript_dispatcher.InboundMiddleware {
		return this._fields.InboundMiddleware
	}

	public set InboundMiddleware(value: __goscript_dispatcher.InboundMiddleware) {
		this._fields.InboundMiddleware = value
	}

	public get OutboundMiddleware(): __goscript_dispatcher.OutboundMiddleware {
		return this._fields.OutboundMiddleware
	}

	public set OutboundMiddleware(value: __goscript_dispatcher.OutboundMiddleware) {
		this._fields.OutboundMiddleware = value
	}

	// Tracer is meant to add/record tracing information to a request.
	//
	// Deprecated: The dispatcher does nothing with this property.  Set the
	// tracer directly on the transports used to build inbounds and outbounds.
	public get Tracer(): opentracing.Tracer | null {
		return this._fields.Tracer
	}

	public set Tracer(value: opentracing.Tracer | null) {
		this._fields.Tracer = value
	}

	// RouterMiddleware is middleware to control how requests are routed.
	public get RouterMiddleware(): middleware.Router | null {
		return this._fields.RouterMiddleware
	}

	public set RouterMiddleware(value: middleware.Router | null) {
		this._fields.RouterMiddleware = value
	}

	// Configures logging.
	public get Logging(): LoggingConfig {
		return this._fields.Logging
	}

	public set Logging(value: LoggingConfig) {
		this._fields.Logging = value
	}

	// Configures telemetry.
	public get Metrics(): MetricsConfig {
		return this._fields.Metrics
	}

	public set Metrics(value: MetricsConfig) {
		this._fields.Metrics = value
	}

	// DisableAutoObservabilityMiddleware is used to stop the dispatcher from
	// automatically attaching observability middleware to all inbounds and
	// outbounds.  It is the assumption that if if this option is disabled the
	// observability middleware is being inserted in the Inbound/Outbound
	// Middleware.
	public get DisableAutoObservabilityMiddleware(): boolean {
		return this._fields.DisableAutoObservabilityMiddleware
	}

	public set DisableAutoObservabilityMiddleware(value: boolean) {
		this._fields.DisableAutoObservabilityMiddleware = value
	}

	public _fields: {
		Name: string
		Inbounds: __goscript_dispatcher.Inbounds
		Outbounds: __goscript_dispatcher.Outbounds
		InboundMiddleware: __goscript_dispatcher.InboundMiddleware
		OutboundMiddleware: __goscript_dispatcher.OutboundMiddleware
		Tracer: opentracing.Tracer | null
		RouterMiddleware: middleware.Router | null
		Logging: LoggingConfig
		Metrics: MetricsConfig
		DisableAutoObservabilityMiddleware: boolean
	}

	constructor(init?: Partial<{Name?: string, Inbounds?: __goscript_dispatcher.Inbounds, Outbounds?: __goscript_dispatcher.Outbounds, InboundMiddleware?: __goscript_dispatcher.InboundMiddleware, OutboundMiddleware?: __goscript_dispatcher.OutboundMiddleware, Tracer?: opentracing.Tracer | null, RouterMiddleware?: middleware.Router | null, Logging?: LoggingConfig, Metrics?: MetricsConfig, DisableAutoObservabilityMiddleware?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Inbounds: init?.Inbounds ?? (null! as __goscript_dispatcher.Inbounds),
			Outbounds: init?.Outbounds ?? (null! as __goscript_dispatcher.Outbounds),
			InboundMiddleware: init?.InboundMiddleware ? init.InboundMiddleware.clone() : new __goscript_dispatcher.InboundMiddleware(undefined, true),
			OutboundMiddleware: init?.OutboundMiddleware ? init.OutboundMiddleware.clone() : new __goscript_dispatcher.OutboundMiddleware(undefined, true),
			Tracer: init?.Tracer ?? (null! as opentracing.Tracer | null),
			RouterMiddleware: init?.RouterMiddleware ?? (null! as middleware.Router | null),
			Logging: init?.Logging ? init.Logging.clone() : new LoggingConfig(undefined, true),
			Metrics: init?.Metrics ? init.Metrics.clone() : new MetricsConfig(undefined, true),
			DisableAutoObservabilityMiddleware: init?.DisableAutoObservabilityMiddleware ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Config {
		return new Config(this, true)
	}

	public __goscriptAssign(source: Config): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Inbounds = values.Inbounds
		target.Outbounds = values.Outbounds
		$.assignStruct(target.InboundMiddleware, values.InboundMiddleware)
		$.assignStruct(target.OutboundMiddleware, values.OutboundMiddleware)
		target.Tracer = $.assignFieldValue(target.Tracer, values.Tracer, "opentracing.Tracer")
		target.RouterMiddleware = $.assignFieldValue(target.RouterMiddleware, values.RouterMiddleware, "middleware.Router")
		$.assignStruct(target.Logging, values.Logging)
		$.assignStruct(target.Metrics, values.Metrics)
		target.DisableAutoObservabilityMiddleware = values.DisableAutoObservabilityMiddleware
	}

	static __typeInfo = $.registerStructType(
		"yarpc.Config",
		() => new Config(),
		() => [],
		Config,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Inbounds", /* @__PURE__ */ $.sliceType("transport.Inbound", "yarpc.Inbounds"), [1], 16, true), /* @__PURE__ */ $.structField("Outbounds", "yarpc.Outbounds", [2], 40, true), /* @__PURE__ */ $.structField("InboundMiddleware", "yarpc.InboundMiddleware", [3], 48, true), /* @__PURE__ */ $.structField("OutboundMiddleware", "yarpc.OutboundMiddleware", [4], 96, true), /* @__PURE__ */ $.structField("Tracer", "opentracing.Tracer", [5], 144, true), /* @__PURE__ */ $.structField("RouterMiddleware", "middleware.Router", [6], 160, true), /* @__PURE__ */ $.structField("Logging", "yarpc.LoggingConfig", [7], 176, true), /* @__PURE__ */ $.structField("Metrics", "yarpc.MetricsConfig", [8], 312, true), /* @__PURE__ */ $.structField("DisableAutoObservabilityMiddleware", /* @__PURE__ */ $.basicType("bool"), [9], 360, true)]
	)
}

export const _tallyPushInterval: time.Duration = 500000000n

export const _packageName: string = "yarpc"
