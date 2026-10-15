// Generated file based on service_config.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as time from "@goscript/time/index.js"

import * as balancer from "@goscript/google.golang.org/grpc/balancer/index.js"

import * as pickfirst from "@goscript/google.golang.org/grpc/balancer/pickfirst/index.js"

import * as codes from "@goscript/google.golang.org/grpc/codes/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/index.js"

import * as gracefulswitch from "@goscript/google.golang.org/grpc/internal/balancer/gracefulswitch/index.js"

import * as internalserviceconfig from "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"

import * as serviceconfig from "@goscript/google.golang.org/grpc/serviceconfig/index.js"

import * as jsontext from "@goscript/encoding/json/jsontext/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal2 from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as __goscript_dialoptions from "./dialoptions.gs.ts"

import * as __goscript_server from "./server.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/grpc/balancer/index.js"
import "@goscript/google.golang.org/grpc/balancer/pickfirst/index.js"
import "@goscript/google.golang.org/grpc/codes/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/balancer/gracefulswitch/index.js"
import "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"
import "@goscript/google.golang.org/grpc/serviceconfig/index.js"
import "@goscript/encoding/json/jsontext/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "./dialoptions.gs.ts"
import "./server.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc", ["grpc.ServiceConfig", "grpc.healthCheckConfig", "grpc.jsonRetryPolicy", "grpc.retryThrottlingPolicy", "grpc.jsonName", "grpc.jsonMC", "grpc.jsonSC"])

export type MethodConfig = internalserviceconfig.MethodConfig

export class ServiceConfig {
	public get Config(): serviceconfig.Config | null {
		return this._fields.Config
	}

	public set Config(value: serviceconfig.Config | null) {
		this._fields.Config = value
	}

	// lbConfig is the service config's load balancing configuration.  If
	// lbConfig and LB are both present, lbConfig will be used.
	public get lbConfig(): serviceconfig.LoadBalancingConfig | null {
		return this._fields.lbConfig
	}

	public set lbConfig(value: serviceconfig.LoadBalancingConfig | null) {
		this._fields.lbConfig = value
	}

	// Methods contains a map for the methods in this service.  If there is an
	// exact match for a method (i.e. /service/method) in the map, use the
	// corresponding MethodConfig.  If there's no exact match, look for the
	// default config for the service (/service/) and use the corresponding
	// MethodConfig if it exists.  Otherwise, the method has no MethodConfig to
	// use.
	public get Methods(): globalThis.Map<string, MethodConfig> | null {
		return this._fields.Methods
	}

	public set Methods(value: globalThis.Map<string, MethodConfig> | null) {
		this._fields.Methods = value
	}

	// If a retryThrottlingPolicy is provided, gRPC will automatically throttle
	// retry attempts and hedged RPCs when the client’s ratio of failures to
	// successes exceeds a threshold.
	//
	// For each server name, the gRPC client will maintain a token_count which is
	// initially set to maxTokens, and can take values between 0 and maxTokens.
	//
	// Every outgoing RPC (regardless of service or method invoked) will change
	// token_count as follows:
	//
	//   - Every failed RPC will decrement the token_count by 1.
	//   - Every successful RPC will increment the token_count by tokenRatio.
	//
	// If token_count is less than or equal to maxTokens / 2, then RPCs will not
	// be retried and hedged RPCs will not be sent.
	public get retryThrottling(): retryThrottlingPolicy | $.VarRef<retryThrottlingPolicy> | null {
		return this._fields.retryThrottling
	}

	public set retryThrottling(value: retryThrottlingPolicy | $.VarRef<retryThrottlingPolicy> | null) {
		this._fields.retryThrottling = value
	}

	// healthCheckConfig must be set as one of the requirement to enable LB channel
	// health check.
	public get healthCheckConfig(): healthCheckConfig | $.VarRef<healthCheckConfig> | null {
		return this._fields.healthCheckConfig
	}

	public set healthCheckConfig(value: healthCheckConfig | $.VarRef<healthCheckConfig> | null) {
		this._fields.healthCheckConfig = value
	}

	// rawJSONString stores service config json string that get parsed into
	// this service config struct.
	public get rawJSONString(): string {
		return this._fields.rawJSONString
	}

	public set rawJSONString(value: string) {
		this._fields.rawJSONString = value
	}

	public _fields: {
		Config: serviceconfig.Config | null
		lbConfig: serviceconfig.LoadBalancingConfig | null
		Methods: globalThis.Map<string, MethodConfig> | null
		retryThrottling: retryThrottlingPolicy | $.VarRef<retryThrottlingPolicy> | null
		healthCheckConfig: healthCheckConfig | $.VarRef<healthCheckConfig> | null
		rawJSONString: string
	}

	constructor(init?: Partial<{Config?: serviceconfig.Config | null, lbConfig?: serviceconfig.LoadBalancingConfig | null, Methods?: globalThis.Map<string, MethodConfig> | null, retryThrottling?: retryThrottlingPolicy | $.VarRef<retryThrottlingPolicy> | null, healthCheckConfig?: healthCheckConfig | $.VarRef<healthCheckConfig> | null, rawJSONString?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Config: init?.Config ?? (null! as serviceconfig.Config | null),
			lbConfig: init?.lbConfig ?? (null! as serviceconfig.LoadBalancingConfig | null),
			Methods: init?.Methods ?? (null! as globalThis.Map<string, MethodConfig> | null),
			retryThrottling: init?.retryThrottling ?? (null! as retryThrottlingPolicy | $.VarRef<retryThrottlingPolicy> | null),
			healthCheckConfig: init?.healthCheckConfig ?? (null! as healthCheckConfig | $.VarRef<healthCheckConfig> | null),
			rawJSONString: init?.rawJSONString ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ServiceConfig {
		return new ServiceConfig(this, true)
	}

	public __goscriptAssign(source: ServiceConfig): void {
		const target = this._fields
		const values = source._fields
		target.Config = $.assignFieldValue(target.Config, values.Config, "serviceconfig.Config")
		target.lbConfig = $.assignFieldValue(target.lbConfig, values.lbConfig, "serviceconfig.LoadBalancingConfig")
		target.Methods = values.Methods
		target.retryThrottling = values.retryThrottling
		target.healthCheckConfig = values.healthCheckConfig
		target.rawJSONString = values.rawJSONString
	}

	static __typeInfo = $.registerStructType(
		"grpc.ServiceConfig",
		() => new ServiceConfig(),
		() => [],
		ServiceConfig,
		() => [/* @__PURE__ */ $.structField("Config", "serviceconfig.Config", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("lbConfig", "serviceconfig.LoadBalancingConfig", [1], 16, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("Methods", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "serviceconfig.MethodConfig"), [2], 32, true), /* @__PURE__ */ $.structField("retryThrottling", /* @__PURE__ */ $.pointerType("grpc.retryThrottlingPolicy"), [3], 40, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("healthCheckConfig", /* @__PURE__ */ $.pointerType("grpc.healthCheckConfig"), [4], 48, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("rawJSONString", /* @__PURE__ */ $.basicType("string"), [5], 56, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class healthCheckConfig {
	// serviceName is the service name to use in the health-checking request.
	public get ServiceName(): string {
		return this._fields.ServiceName
	}

	public set ServiceName(value: string) {
		this._fields.ServiceName = value
	}

	public _fields: {
		ServiceName: string
	}

	constructor(init?: Partial<{ServiceName?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			ServiceName: init?.ServiceName ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): healthCheckConfig {
		return new healthCheckConfig(this, true)
	}

	public __goscriptAssign(source: healthCheckConfig): void {
		const target = this._fields
		const values = source._fields
		target.ServiceName = values.ServiceName
	}

	static __typeInfo = $.registerStructType(
		"grpc.healthCheckConfig",
		() => new healthCheckConfig(),
		() => [],
		healthCheckConfig,
		() => [/* @__PURE__ */ $.structField("ServiceName", /* @__PURE__ */ $.basicType("string"), [0], 0, true)]
	)
}

export class jsonRetryPolicy {
	public get MaxAttempts(): number {
		return this._fields.MaxAttempts
	}

	public set MaxAttempts(value: number) {
		this._fields.MaxAttempts = value
	}

	public get InitialBackoff(): internalserviceconfig.Duration {
		return this._fields.InitialBackoff
	}

	public set InitialBackoff(value: internalserviceconfig.Duration) {
		this._fields.InitialBackoff = value
	}

	public get MaxBackoff(): internalserviceconfig.Duration {
		return this._fields.MaxBackoff
	}

	public set MaxBackoff(value: internalserviceconfig.Duration) {
		this._fields.MaxBackoff = value
	}

	public get BackoffMultiplier(): number {
		return this._fields.BackoffMultiplier
	}

	public set BackoffMultiplier(value: number) {
		this._fields.BackoffMultiplier = value
	}

	public get RetryableStatusCodes(): $.Slice<codes.Code> {
		return this._fields.RetryableStatusCodes
	}

	public set RetryableStatusCodes(value: $.Slice<codes.Code>) {
		this._fields.RetryableStatusCodes = value
	}

	public _fields: {
		MaxAttempts: number
		InitialBackoff: internalserviceconfig.Duration
		MaxBackoff: internalserviceconfig.Duration
		BackoffMultiplier: number
		RetryableStatusCodes: $.Slice<codes.Code>
	}

	constructor(init?: Partial<{MaxAttempts?: number, InitialBackoff?: internalserviceconfig.Duration, MaxBackoff?: internalserviceconfig.Duration, BackoffMultiplier?: number, RetryableStatusCodes?: $.Slice<codes.Code>}>, __goscriptValue?: boolean) {
		this._fields = {
			MaxAttempts: init?.MaxAttempts ?? (0 as number),
			InitialBackoff: init?.InitialBackoff ?? (0n as internalserviceconfig.Duration),
			MaxBackoff: init?.MaxBackoff ?? (0n as internalserviceconfig.Duration),
			BackoffMultiplier: init?.BackoffMultiplier ?? (0 as number),
			RetryableStatusCodes: init?.RetryableStatusCodes ?? (null! as $.Slice<codes.Code>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): jsonRetryPolicy {
		return new jsonRetryPolicy(this, true)
	}

	public __goscriptAssign(source: jsonRetryPolicy): void {
		const target = this._fields
		const values = source._fields
		target.MaxAttempts = values.MaxAttempts
		target.InitialBackoff = values.InitialBackoff
		target.MaxBackoff = values.MaxBackoff
		target.BackoffMultiplier = values.BackoffMultiplier
		target.RetryableStatusCodes = values.RetryableStatusCodes
	}

	static __typeInfo = $.registerStructType(
		"grpc.jsonRetryPolicy",
		() => new jsonRetryPolicy(),
		() => [],
		jsonRetryPolicy,
		() => [/* @__PURE__ */ $.structField("MaxAttempts", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("InitialBackoff", /* @__PURE__ */ $.basicType("int64", "serviceconfig.Duration"), [1], 8, true), /* @__PURE__ */ $.structField("MaxBackoff", /* @__PURE__ */ $.basicType("int64", "serviceconfig.Duration"), [2], 16, true), /* @__PURE__ */ $.structField("BackoffMultiplier", /* @__PURE__ */ $.basicType("float64"), [3], 24, true), /* @__PURE__ */ $.structField("RetryableStatusCodes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32", "codes.Code")), [4], 32, true)]
	)
}

export class retryThrottlingPolicy {
	// The number of tokens starts at maxTokens. The token_count will always be
	// between 0 and maxTokens.
	//
	// This field is required and must be greater than zero.
	public get MaxTokens(): number {
		return this._fields.MaxTokens
	}

	public set MaxTokens(value: number) {
		this._fields.MaxTokens = value
	}

	// The amount of tokens to add on each successful RPC. Typically this will
	// be some number between 0 and 1, e.g., 0.1.
	//
	// This field is required and must be greater than zero. Up to 3 decimal
	// places are supported.
	public get TokenRatio(): number {
		return this._fields.TokenRatio
	}

	public set TokenRatio(value: number) {
		this._fields.TokenRatio = value
	}

	public _fields: {
		MaxTokens: number
		TokenRatio: number
	}

	constructor(init?: Partial<{MaxTokens?: number, TokenRatio?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			MaxTokens: init?.MaxTokens ?? (0 as number),
			TokenRatio: init?.TokenRatio ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): retryThrottlingPolicy {
		return new retryThrottlingPolicy(this, true)
	}

	public __goscriptAssign(source: retryThrottlingPolicy): void {
		const target = this._fields
		const values = source._fields
		target.MaxTokens = values.MaxTokens
		target.TokenRatio = values.TokenRatio
	}

	static __typeInfo = $.registerStructType(
		"grpc.retryThrottlingPolicy",
		() => new retryThrottlingPolicy(),
		() => [],
		retryThrottlingPolicy,
		() => [/* @__PURE__ */ $.structField("MaxTokens", /* @__PURE__ */ $.basicType("float64"), [0], 0, true), /* @__PURE__ */ $.structField("TokenRatio", /* @__PURE__ */ $.basicType("float64"), [1], 8, true)]
	)
}

export class jsonName {
	public get Service(): string {
		return this._fields.Service
	}

	public set Service(value: string) {
		this._fields.Service = value
	}

	public get Method(): string {
		return this._fields.Method
	}

	public set Method(value: string) {
		this._fields.Method = value
	}

	public _fields: {
		Service: string
		Method: string
	}

	constructor(init?: Partial<{Service?: string, Method?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Service: init?.Service ?? ("" as string),
			Method: init?.Method ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): jsonName {
		return new jsonName(this, true)
	}

	public __goscriptAssign(source: jsonName): void {
		const target = this._fields
		const values = source._fields
		target.Service = values.Service
		target.Method = values.Method
	}

	public generatePath(): [string, $.GoError] {
		const j = this;
		if ($.stringEqual(j.Service, "")) {
			if (!$.stringEqual(j.Method, "")) {
				return ["", errEmptyServiceNonEmptyMethod]
			}
			return ["", null]
		}
		let res = $.concatString(($.concatString("/", j.Service)), "/")
		if (!$.stringEqual(j.Method, "")) {
			res = $.concatString(res, j.Method)
		}
		return [res, null]
	}

	static __typeInfo = $.registerStructType(
		"grpc.jsonName",
		() => new jsonName(),
		() => [$.methodSignature("generatePath", [], [/* @__PURE__ */ $.basicType("string"), "error"])],
		jsonName,
		() => [/* @__PURE__ */ $.structField("Service", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Method", /* @__PURE__ */ $.basicType("string"), [1], 16, true)]
	)
}

export class jsonMC {
	public get Name(): $.VarRef<$.Slice<jsonName>> | null {
		return this._fields.Name
	}

	public set Name(value: $.VarRef<$.Slice<jsonName>> | null) {
		this._fields.Name = value
	}

	public get WaitForReady(): $.VarRef<boolean> | null {
		return this._fields.WaitForReady
	}

	public set WaitForReady(value: $.VarRef<boolean> | null) {
		this._fields.WaitForReady = value
	}

	public get Timeout(): $.VarRef<internalserviceconfig.Duration> | null {
		return this._fields.Timeout
	}

	public set Timeout(value: $.VarRef<internalserviceconfig.Duration> | null) {
		this._fields.Timeout = value
	}

	public get MaxRequestMessageBytes(): $.VarRef<bigint> | null {
		return this._fields.MaxRequestMessageBytes
	}

	public set MaxRequestMessageBytes(value: $.VarRef<bigint> | null) {
		this._fields.MaxRequestMessageBytes = value
	}

	public get MaxResponseMessageBytes(): $.VarRef<bigint> | null {
		return this._fields.MaxResponseMessageBytes
	}

	public set MaxResponseMessageBytes(value: $.VarRef<bigint> | null) {
		this._fields.MaxResponseMessageBytes = value
	}

	public get RetryPolicy(): jsonRetryPolicy | $.VarRef<jsonRetryPolicy> | null {
		return this._fields.RetryPolicy
	}

	public set RetryPolicy(value: jsonRetryPolicy | $.VarRef<jsonRetryPolicy> | null) {
		this._fields.RetryPolicy = value
	}

	public _fields: {
		Name: $.VarRef<$.Slice<jsonName>> | null
		WaitForReady: $.VarRef<boolean> | null
		Timeout: $.VarRef<internalserviceconfig.Duration> | null
		MaxRequestMessageBytes: $.VarRef<bigint> | null
		MaxResponseMessageBytes: $.VarRef<bigint> | null
		RetryPolicy: jsonRetryPolicy | $.VarRef<jsonRetryPolicy> | null
	}

	constructor(init?: Partial<{Name?: $.VarRef<$.Slice<jsonName>> | null, WaitForReady?: $.VarRef<boolean> | null, Timeout?: $.VarRef<internalserviceconfig.Duration> | null, MaxRequestMessageBytes?: $.VarRef<bigint> | null, MaxResponseMessageBytes?: $.VarRef<bigint> | null, RetryPolicy?: jsonRetryPolicy | $.VarRef<jsonRetryPolicy> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? (null! as $.VarRef<$.Slice<jsonName>> | null),
			WaitForReady: init?.WaitForReady ?? (null! as $.VarRef<boolean> | null),
			Timeout: init?.Timeout ?? (null! as $.VarRef<internalserviceconfig.Duration> | null),
			MaxRequestMessageBytes: init?.MaxRequestMessageBytes ?? (null! as $.VarRef<bigint> | null),
			MaxResponseMessageBytes: init?.MaxResponseMessageBytes ?? (null! as $.VarRef<bigint> | null),
			RetryPolicy: init?.RetryPolicy ?? (null! as jsonRetryPolicy | $.VarRef<jsonRetryPolicy> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): jsonMC {
		return new jsonMC(this, true)
	}

	public __goscriptAssign(source: jsonMC): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.WaitForReady = values.WaitForReady
		target.Timeout = values.Timeout
		target.MaxRequestMessageBytes = values.MaxRequestMessageBytes
		target.MaxResponseMessageBytes = values.MaxResponseMessageBytes
		target.RetryPolicy = values.RetryPolicy
	}

	static __typeInfo = $.registerStructType(
		"grpc.jsonMC",
		() => new jsonMC(),
		() => [],
		jsonMC,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType("grpc.jsonName")), [0], 0, true), /* @__PURE__ */ $.structField("WaitForReady", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), [1], 8, true), /* @__PURE__ */ $.structField("Timeout", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "serviceconfig.Duration")), [2], 16, true), /* @__PURE__ */ $.structField("MaxRequestMessageBytes", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [3], 24, true), /* @__PURE__ */ $.structField("MaxResponseMessageBytes", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [4], 32, true), /* @__PURE__ */ $.structField("RetryPolicy", /* @__PURE__ */ $.pointerType("grpc.jsonRetryPolicy"), [5], 40, true)]
	)
}

export class jsonSC {
	public get LoadBalancingPolicy(): $.VarRef<string> | null {
		return this._fields.LoadBalancingPolicy
	}

	public set LoadBalancingPolicy(value: $.VarRef<string> | null) {
		this._fields.LoadBalancingPolicy = value
	}

	public get LoadBalancingConfig(): $.VarRef<jsontext.Value> | null {
		return this._fields.LoadBalancingConfig
	}

	public set LoadBalancingConfig(value: $.VarRef<jsontext.Value> | null) {
		this._fields.LoadBalancingConfig = value
	}

	public get MethodConfig(): $.VarRef<$.Slice<jsonMC>> | null {
		return this._fields.MethodConfig
	}

	public set MethodConfig(value: $.VarRef<$.Slice<jsonMC>> | null) {
		this._fields.MethodConfig = value
	}

	public get RetryThrottling(): retryThrottlingPolicy | $.VarRef<retryThrottlingPolicy> | null {
		return this._fields.RetryThrottling
	}

	public set RetryThrottling(value: retryThrottlingPolicy | $.VarRef<retryThrottlingPolicy> | null) {
		this._fields.RetryThrottling = value
	}

	public get HealthCheckConfig(): healthCheckConfig | $.VarRef<healthCheckConfig> | null {
		return this._fields.HealthCheckConfig
	}

	public set HealthCheckConfig(value: healthCheckConfig | $.VarRef<healthCheckConfig> | null) {
		this._fields.HealthCheckConfig = value
	}

	public _fields: {
		LoadBalancingPolicy: $.VarRef<string> | null
		LoadBalancingConfig: $.VarRef<jsontext.Value> | null
		MethodConfig: $.VarRef<$.Slice<jsonMC>> | null
		RetryThrottling: retryThrottlingPolicy | $.VarRef<retryThrottlingPolicy> | null
		HealthCheckConfig: healthCheckConfig | $.VarRef<healthCheckConfig> | null
	}

	constructor(init?: Partial<{LoadBalancingPolicy?: $.VarRef<string> | null, LoadBalancingConfig?: $.VarRef<jsontext.Value> | null, MethodConfig?: $.VarRef<$.Slice<jsonMC>> | null, RetryThrottling?: retryThrottlingPolicy | $.VarRef<retryThrottlingPolicy> | null, HealthCheckConfig?: healthCheckConfig | $.VarRef<healthCheckConfig> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			LoadBalancingPolicy: init?.LoadBalancingPolicy ?? (null! as $.VarRef<string> | null),
			LoadBalancingConfig: init?.LoadBalancingConfig ?? (null! as $.VarRef<jsontext.Value> | null),
			MethodConfig: init?.MethodConfig ?? (null! as $.VarRef<$.Slice<jsonMC>> | null),
			RetryThrottling: init?.RetryThrottling ?? (null! as retryThrottlingPolicy | $.VarRef<retryThrottlingPolicy> | null),
			HealthCheckConfig: init?.HealthCheckConfig ?? (null! as healthCheckConfig | $.VarRef<healthCheckConfig> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): jsonSC {
		return new jsonSC(this, true)
	}

	public __goscriptAssign(source: jsonSC): void {
		const target = this._fields
		const values = source._fields
		target.LoadBalancingPolicy = values.LoadBalancingPolicy
		target.LoadBalancingConfig = values.LoadBalancingConfig
		target.MethodConfig = values.MethodConfig
		target.RetryThrottling = values.RetryThrottling
		target.HealthCheckConfig = values.HealthCheckConfig
	}

	static __typeInfo = $.registerStructType(
		"grpc.jsonSC",
		() => new jsonSC(),
		() => [],
		jsonSC,
		() => [/* @__PURE__ */ $.structField("LoadBalancingPolicy", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [0], 0, true), /* @__PURE__ */ $.structField("LoadBalancingConfig", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value")), [1], 8, true), /* @__PURE__ */ $.structField("MethodConfig", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType("grpc.jsonMC")), [2], 16, true), /* @__PURE__ */ $.structField("RetryThrottling", /* @__PURE__ */ $.pointerType("grpc.retryThrottlingPolicy"), [3], 24, true), /* @__PURE__ */ $.structField("HealthCheckConfig", /* @__PURE__ */ $.pointerType("grpc.healthCheckConfig"), [4], 32, true)]
	)
}

export const maxInt: number = 9223372036854775807

export let errDuplicatedName: $.GoError = errors.New("duplicated name")

export function __goscript_set_errDuplicatedName(__goscriptValue: $.GoError): void {
	errDuplicatedName = __goscriptValue
}

export let errEmptyServiceNonEmptyMethod: $.GoError = errors.New("cannot combine empty 'service' and non-empty 'method'")

export function __goscript_set_errEmptyServiceNonEmptyMethod(__goscriptValue: $.GoError): void {
	errEmptyServiceNonEmptyMethod = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	internal.__goscript_set_ParseServiceConfig($.interfaceValue($.functionValue(async (js: string): globalThis.Promise<serviceconfig.ParseResult | $.VarRef<serviceconfig.ParseResult> | null> => {
		return await parseServiceConfig(js, 5)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.pointerType("serviceconfig.ParseResult")] } as $.FunctionTypeInfo)), "func(js string) *serviceconfig.ParseResult", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.pointerType("serviceconfig.ParseResult")] } as $.FunctionTypeInfo)))
}

export async function parseServiceConfig(js: string, maxAttempts: number): globalThis.Promise<serviceconfig.ParseResult | $.VarRef<serviceconfig.ParseResult> | null> {
	if ($.stringLen(js) == 0) {
		return (() => { const __goscriptLiteralField0 = fmt.Errorf("no JSON service config provided"); return new serviceconfig.ParseResult({Err: __goscriptLiteralField0}) })()
	}
	let rsc: $.VarRef<jsonSC> = $.varRef(new jsonSC(undefined, true))
	let err: $.GoError = await json.Unmarshal($.stringToBytes(js), $.interfaceValue(rsc, "*grpc.jsonSC", /* @__PURE__ */ $.pointerType("grpc.jsonSC")))
	if (err != null) {
		void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).Warningf("grpc: unmarshalling service config %s: %v", $.arrayToSlice<any>([js, (err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return new serviceconfig.ParseResult({Err: err})
	}
	let sc = $.varRef(new ServiceConfig({Methods: $.makeMap<string, MethodConfig>(), retryThrottling: rsc.value.RetryThrottling, healthCheckConfig: rsc.value.HealthCheckConfig, rawJSONString: js}, true))
	let c: $.VarRef<jsontext.Value> | null = rsc.value.LoadBalancingConfig
	if (c == null) {
		let name = pickfirst.Name
		if (rsc.value.LoadBalancingPolicy != null) {
			name = $.pointerValue<string>(rsc.value.LoadBalancingPolicy)
		}
		if (await balancer.Get(name) == null) {
			name = pickfirst.Name
		}
		let cfg: $.Slice<globalThis.Map<string, any> | null> = $.arrayToSlice<globalThis.Map<string, any> | null>([$.makeMap<string, any>([[name, {}]])])
		let __goscriptTuple0: any = await json.Marshal($.interfaceValue(cfg, "[]map[string]interface{}", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))))
		let strCfg: $.Slice<number> = __goscriptTuple0[0]
		let __goscriptShadow0 = __goscriptTuple0[1]
		if (__goscriptShadow0 != null) {
			return (() => { const __goscriptLiteralField1 = fmt.Errorf("unexpected error marshaling simple LB config: %w", (__goscriptShadow0 as any)); return new serviceconfig.ParseResult({Err: __goscriptLiteralField1}) })()
		}
		let r: $.VarRef<json.RawMessage> = $.varRef(((strCfg as json.RawMessage) as json.RawMessage))
		c = r
	}
	let __goscriptTuple1: any = await gracefulswitch.ParseConfig(($.pointerValue<json.RawMessage>(c) as json.RawMessage))
	let cfg = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		return new serviceconfig.ParseResult({Err: err})
	}
	sc.value.lbConfig = cfg

	if (rsc.value.MethodConfig == null) {
		return new serviceconfig.ParseResult({Config: $.interfaceValue<serviceconfig.Config | null>(sc, "*grpc.ServiceConfig", /* @__PURE__ */ $.pointerType("grpc.ServiceConfig"))})
	}

	let paths: globalThis.Map<string, {}> | null = $.makeMap<string, {}>([])
	for (let __goscriptRangeTarget1 = $.pointerValue<$.Slice<jsonMC>>(rsc.value.MethodConfig), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let m = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as jsonMC)).clone()
		if (m.Name == null) {
			continue
		}

		let mc = new internalserviceconfig.MethodConfig({WaitForReady: m.WaitForReady, Timeout: m.Timeout}, true)
		{
			let __goscriptTuple2: any = await convertRetryPolicy(m.RetryPolicy, maxAttempts)
			mc.RetryPolicy = __goscriptTuple2[0]
			err = __goscriptTuple2[1]
			if (err != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).Warningf("grpc: unmarshalling service config %s: %v", $.arrayToSlice<any>([js, (err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return new serviceconfig.ParseResult({Err: err})
			}
		}
		if (m.MaxRequestMessageBytes != null) {
			if ($.pointerValue<bigint>(m.MaxRequestMessageBytes) > 9223372036854775807n) {
				mc.MaxReqSize = newInt($.int("9223372036854775807", 64))
			} else {
				mc.MaxReqSize = newInt($.int($.pointerValue<bigint>(m.MaxRequestMessageBytes)))
			}
		}
		if (m.MaxResponseMessageBytes != null) {
			if ($.pointerValue<bigint>(m.MaxResponseMessageBytes) > 9223372036854775807n) {
				mc.MaxRespSize = newInt($.int("9223372036854775807", 64))
			} else {
				mc.MaxRespSize = newInt($.int($.pointerValue<bigint>(m.MaxResponseMessageBytes)))
			}
		}
		for (let __goscriptRangeTarget0 = $.pointerValue<$.Slice<jsonName>>(m.Name), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let n = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as jsonName)).clone()
			let [path, __goscriptShadow1] = n.generatePath()
			if (__goscriptShadow1 != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).Warningf("grpc: error unmarshalling service config %s due to methodConfig[%d]: %v", $.arrayToSlice<any>([js, $.basicInterfaceValue(i, "int"), (__goscriptShadow1 as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return new serviceconfig.ParseResult({Err: __goscriptShadow1})
			}

			{
				let [, ok] = $.mapGet<string, {}, {}>(paths, path, {})
				if (ok) {
					__goscriptShadow1 = errDuplicatedName
					void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).Warningf("grpc: error unmarshalling service config %s due to methodConfig[%d]: %v", $.arrayToSlice<any>([js, $.basicInterfaceValue(i, "int"), (__goscriptShadow1 as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					return new serviceconfig.ParseResult({Err: __goscriptShadow1})
				}
			}
			$.mapSet(paths, path, {})
			$.mapSet(sc.value.Methods, path, (mc).clone())
		}
	}

	if (sc.value.retryThrottling != null) {
		{
			let mt = $.pointerValue<retryThrottlingPolicy>(sc.value.retryThrottling).MaxTokens
			if ((mt <= 0) || (mt > 1000)) {
				return (() => { const __goscriptLiteralField2 = fmt.Errorf("invalid retry throttling config: maxTokens (%v) out of range (0, 1000]", $.basicInterfaceValue(mt, "float64")); return new serviceconfig.ParseResult({Err: __goscriptLiteralField2}) })()
			}
		}
		{
			let tr = $.pointerValue<retryThrottlingPolicy>(sc.value.retryThrottling).TokenRatio
			if (tr <= 0) {
				return (() => { const __goscriptLiteralField3 = fmt.Errorf("invalid retry throttling config: tokenRatio (%v) may not be negative", $.basicInterfaceValue(tr, "float64")); return new serviceconfig.ParseResult({Err: __goscriptLiteralField3}) })()
			}
		}
	}
	return new serviceconfig.ParseResult({Config: $.interfaceValue<serviceconfig.Config | null>(sc, "*grpc.ServiceConfig", /* @__PURE__ */ $.pointerType("grpc.ServiceConfig"))})
}

export async function convertRetryPolicy(jrp: jsonRetryPolicy | $.VarRef<jsonRetryPolicy> | null, maxAttempts: number): globalThis.Promise<[internalserviceconfig.RetryPolicy | $.VarRef<internalserviceconfig.RetryPolicy> | null, $.GoError]> {
	let p: internalserviceconfig.RetryPolicy | $.VarRef<internalserviceconfig.RetryPolicy> | null = null! as internalserviceconfig.RetryPolicy | $.VarRef<internalserviceconfig.RetryPolicy> | null
	let err: $.GoError = null! as $.GoError
	const jrp$: jsonRetryPolicy = jrp == null ? $.pointerTarget<jsonRetryPolicy>(jrp) : (jrp as any).__isVarRef === true ? (jrp as any).value : (jrp as any).__goValue === undefined ? (jrp as any) : $.pointerTarget<jsonRetryPolicy>(jrp)
	if (jrp == null) {
		return [null, null]
	}

	if ((((((jrp$ as jsonRetryPolicy).MaxAttempts <= 1) || ((jrp$ as jsonRetryPolicy).InitialBackoff <= 0n)) || ((jrp$ as jsonRetryPolicy).MaxBackoff <= 0n)) || ((jrp$ as jsonRetryPolicy).BackoffMultiplier <= 0)) || ($.sliceLen((jrp$ as jsonRetryPolicy).RetryableStatusCodes) == 0)) {
		void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).Warningf("grpc: ignoring retry policy %v due to illegal configuration", $.arrayToSlice<any>([$.interfaceValue(jrp, "*grpc.jsonRetryPolicy", /* @__PURE__ */ $.pointerType("grpc.jsonRetryPolicy"))])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, null]
	}

	if ((jrp$ as jsonRetryPolicy).MaxAttempts < maxAttempts) {
		maxAttempts = (jrp$ as jsonRetryPolicy).MaxAttempts
	}
	let rp: internalserviceconfig.RetryPolicy | $.VarRef<internalserviceconfig.RetryPolicy> | null = new internalserviceconfig.RetryPolicy({MaxAttempts: maxAttempts, InitialBackoff: $.int64((jrp$ as jsonRetryPolicy).InitialBackoff), MaxBackoff: $.int64((jrp$ as jsonRetryPolicy).MaxBackoff), BackoffMultiplier: (jrp$ as jsonRetryPolicy).BackoffMultiplier, RetryableStatusCodes: $.makeMap<codes.Code, boolean>()})
	for (let __goscriptRangeTarget2 = (jrp$ as jsonRetryPolicy).RetryableStatusCodes, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let code = $.uint((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as codes.Code), 32)
		$.mapSet($.pointerValue<internalserviceconfig.RetryPolicy>(rp).RetryableStatusCodes, code, true)
	}
	return [rp, null]
}

export function min(a: $.VarRef<number> | null, b: $.VarRef<number> | null): $.VarRef<number> | null {
	if ($.pointerValue<number>(a) < $.pointerValue<number>(b)) {
		return a
	}
	return b
}

export function getMaxSize(mcMax: $.VarRef<number> | null, doptMax: $.VarRef<number> | null, __goscriptParam0: number): $.VarRef<number> | null {
	let defaultVal: $.VarRef<number> = $.varRef(__goscriptParam0)
	if ((mcMax == null) && (doptMax == null)) {
		return defaultVal
	}
	if ((mcMax != null) && (doptMax != null)) {
		return min(mcMax, doptMax)
	}
	if (mcMax != null) {
		return mcMax
	}
	return doptMax
}

export function newInt(__goscriptParam1: number): $.VarRef<number> | null {
	let b: $.VarRef<number> = $.varRef(__goscriptParam1)
	return b
}

async function __goscriptInit1(): globalThis.Promise<void> {
	internal.__goscript_set_EqualServiceConfigForTesting(equalServiceConfig)
}

export function equalServiceConfig(a: serviceconfig.Config | null, b: serviceconfig.Config | null): boolean {
	using __defer = new $.DisposableStack()
	if ((a == null) && (b == null)) {
		return true
	}
	let __goscriptTuple3: any = $.typeAssertTuple<ServiceConfig | $.VarRef<ServiceConfig> | null>(a, /* @__PURE__ */ $.pointerType("grpc.ServiceConfig"))
	let aa: ServiceConfig | $.VarRef<ServiceConfig> | null = __goscriptTuple3[0]
	let ok = __goscriptTuple3[1]
	let aa$: ServiceConfig = aa == null ? $.pointerTarget<ServiceConfig>(aa) : (aa as any).__isVarRef === true ? (aa as any).value : (aa as any).__goValue === undefined ? (aa as any) : $.pointerTarget<ServiceConfig>(aa)
	if (!ok) {
		return false
	}
	let __goscriptTuple4: any = $.typeAssertTuple<ServiceConfig | $.VarRef<ServiceConfig> | null>(b, /* @__PURE__ */ $.pointerType("grpc.ServiceConfig"))
	let bb: ServiceConfig | $.VarRef<ServiceConfig> | null = __goscriptTuple4[0]
	ok = __goscriptTuple4[1]
	let bb$: ServiceConfig = bb == null ? $.pointerTarget<ServiceConfig>(bb) : (bb as any).__isVarRef === true ? (bb as any).value : (bb as any).__goValue === undefined ? (bb as any) : $.pointerTarget<ServiceConfig>(bb)
	if (!ok) {
		return false
	}
	let aaRaw = (aa$ as ServiceConfig).rawJSONString;
	;(aa$ as ServiceConfig).rawJSONString = ""
	let bbRaw = (bb$ as ServiceConfig).rawJSONString;
	;(bb$ as ServiceConfig).rawJSONString = ""
	__defer.defer(() => { ((): void => {
		;(aa$ as ServiceConfig).rawJSONString = aaRaw;
		;(bb$ as ServiceConfig).rawJSONString = bbRaw
	})() })
	// Using reflect.DeepEqual instead of cmp.Equal because many balancer
	// configs are unexported, and cmp.Equal cannot compare unexported fields
	// from unexported structs.
	return reflect.DeepEqual($.interfaceValue(aa, "*grpc.ServiceConfig", /* @__PURE__ */ $.pointerType("grpc.ServiceConfig")), $.interfaceValue(bb, "*grpc.ServiceConfig", /* @__PURE__ */ $.pointerType("grpc.ServiceConfig")))
}

var __goscriptAwait: any

export { __goscriptInit0 }

export { __goscriptInit1 }
