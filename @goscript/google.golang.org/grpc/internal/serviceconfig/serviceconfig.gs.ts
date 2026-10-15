// Generated file based on serviceconfig.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as time from "@goscript/time/index.js"

import * as balancer from "@goscript/google.golang.org/grpc/balancer/index.js"

import * as codes from "@goscript/google.golang.org/grpc/codes/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as externalserviceconfig from "@goscript/google.golang.org/grpc/serviceconfig/index.js"

import * as jsontext from "@goscript/encoding/json/jsontext/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/grpc/balancer/index.js"
import "@goscript/google.golang.org/grpc/codes/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/serviceconfig/index.js"
import "@goscript/encoding/json/jsontext/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/serviceconfig", ["serviceconfig.BalancerConfig", "serviceconfig.intermediateBalancerConfig", "serviceconfig.MethodConfig", "serviceconfig.RetryPolicy"])

export type intermediateBalancerConfig = $.Slice<globalThis.Map<string, json.RawMessage> | null>

$.registerNamedType("serviceconfig.intermediateBalancerConfig", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value"))));

export class BalancerConfig {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Config(): externalserviceconfig.LoadBalancingConfig | null {
		return this._fields.Config
	}

	public set Config(value: externalserviceconfig.LoadBalancingConfig | null) {
		this._fields.Config = value
	}

	public _fields: {
		Name: string
		Config: externalserviceconfig.LoadBalancingConfig | null
	}

	constructor(init?: Partial<{Name?: string, Config?: externalserviceconfig.LoadBalancingConfig | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Config: init?.Config ?? (null! as externalserviceconfig.LoadBalancingConfig | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BalancerConfig {
		return new BalancerConfig(this, true)
	}

	public __goscriptAssign(source: BalancerConfig): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Config = $.assignFieldValue(target.Config, values.Config, "serviceconfig.LoadBalancingConfig")
	}

	public async MarshalJSON(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const bc: BalancerConfig | $.VarRef<BalancerConfig> | null = this;
		const bc$: BalancerConfig = bc == null ? $.pointerTarget<BalancerConfig>(bc) : (bc as any).__isVarRef === true ? (bc as any).value : (bc as any).__goValue === undefined ? (bc as any) : $.pointerTarget<BalancerConfig>(bc)
		if ((bc$ as BalancerConfig).Config == null) {
			// If config is nil, return empty config `{}`.
			return [$.stringToBytes(await fmt.Sprintf("[{%q: %v}]", (bc$ as BalancerConfig).Name, "{}")), null]
		}
		let __goscriptTuple0: any = await json.Marshal(((bc$ as BalancerConfig).Config as any))
		let c: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		return [$.stringToBytes(await fmt.Sprintf("[{%q: %s}]", (bc$ as BalancerConfig).Name, $.interfaceValue(c, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))), null]
	}

	public async UnmarshalJSON(b: $.Slice<number>): globalThis.Promise<$.GoError> {
		let bc: BalancerConfig | $.VarRef<BalancerConfig> | null = this;
		const bc$: BalancerConfig = bc == null ? $.pointerTarget<BalancerConfig>(bc) : (bc as any).__isVarRef === true ? (bc as any).value : (bc as any).__goValue === undefined ? (bc as any) : $.pointerTarget<BalancerConfig>(bc)
		let ir: $.VarRef<intermediateBalancerConfig> = $.varRef(null! as intermediateBalancerConfig)
		let err = await json.Unmarshal(b, $.interfaceValue(ir, "*serviceconfig.intermediateBalancerConfig", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value")), "serviceconfig.intermediateBalancerConfig"))))
		if (err != null) {
			return err
		}

		let names: $.Slice<string> = null! as $.Slice<string>
		for (let __goscriptRangeTarget0 = ir.value, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let lbcfg = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as globalThis.Map<string, json.RawMessage> | null)
			if ($.len(lbcfg) != 1) {
				return fmt.Errorf("invalid loadBalancingConfig: entry %v does not contain exactly 1 policy/config pair: %q", $.basicInterfaceValue(i, "int"), $.interfaceValue(lbcfg, "map[string]jsontext.Value", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value"))))
			}

			let name: string = ""
			let jsonCfg: json.RawMessage = null! as json.RawMessage
			// Get the key:value pair from the map. We have already made sure that
			// the map contains a single entry.
			for (const [__goscriptRangeKey0, __goscriptRangeValue0] of lbcfg?.entries() ?? []) {
				name = __goscriptRangeKey0
				jsonCfg = __goscriptRangeValue0
			}

			names = $.appendOne(names, name)
			let builder = await balancer.Get(name)
			if (builder == null) {
				// If the balancer is not registered, move on to the next config.
				// This is not an error.
				continue
			}
			;(bc$ as BalancerConfig).Name = name

			let [parser, ok] = $.typeAssertTuple<balancer.ConfigParser | null>(builder, "balancer.ConfigParser")
			if (!ok) {
				if (!$.stringEqual($.bytesToString(jsonCfg), "{}")) {
					void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Warningf("non-empty balancer configuration %q, but balancer does not implement ParseConfig", $.arrayToSlice<any>([$.bytesToString(jsonCfg)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				// Stop at this, though the builder doesn't support parsing config.
				return null
			}

			let [cfg, __goscriptShadow0] = await (parser !== null && (parser as any).__isVarRef !== true && (parser as any).__goValue === undefined ? (parser as Exclude<balancer.ConfigParser, null>) : $.pointerValue<Exclude<balancer.ConfigParser, null>>(parser)).ParseConfig((jsonCfg as json.RawMessage))
			if (__goscriptShadow0 != null) {
				return fmt.Errorf("error parsing loadBalancingConfig for policy %q: %v", name, (__goscriptShadow0 as any))
			}
			;(bc$ as BalancerConfig).Config = cfg
			return null
		}
		// This is reached when the for loop iterates over all entries, but didn't
		// return. This means we had a loadBalancingConfig slice but did not
		// encounter a registered policy. The config is considered invalid in this
		// case.
		return fmt.Errorf("invalid loadBalancingConfig: no supported policies found in %v", $.interfaceValue(names, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
	}

	static __typeInfo = $.registerStructType(
		"serviceconfig.BalancerConfig",
		() => new BalancerConfig(),
		() => [$.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		BalancerConfig,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Config", "serviceconfig.LoadBalancingConfig", [1], 16, true)]
	)
}

export class MethodConfig {
	// WaitForReady indicates whether RPCs sent to this method should wait until
	// the connection is ready by default (!failfast). The value specified via the
	// gRPC client API will override the value set here.
	public get WaitForReady(): $.VarRef<boolean> | null {
		return this._fields.WaitForReady
	}

	public set WaitForReady(value: $.VarRef<boolean> | null) {
		this._fields.WaitForReady = value
	}

	// Timeout is the default timeout for RPCs sent to this method. The actual
	// deadline used will be the minimum of the value specified here and the value
	// set by the application via the gRPC client API.  If either one is not set,
	// then the other will be used.  If neither is set, then the RPC has no deadline.
	public get Timeout(): $.VarRef<time.Duration> | null {
		return this._fields.Timeout
	}

	public set Timeout(value: $.VarRef<time.Duration> | null) {
		this._fields.Timeout = value
	}

	// MaxReqSize is the maximum allowed payload size for an individual request in a
	// stream (client->server) in bytes. The size which is measured is the serialized
	// payload after per-message compression (but before stream compression) in bytes.
	// The actual value used is the minimum of the value specified here and the value set
	// by the application via the gRPC client API. If either one is not set, then the other
	// will be used.  If neither is set, then the built-in default is used.
	public get MaxReqSize(): $.VarRef<number> | null {
		return this._fields.MaxReqSize
	}

	public set MaxReqSize(value: $.VarRef<number> | null) {
		this._fields.MaxReqSize = value
	}

	// MaxRespSize is the maximum allowed payload size for an individual response in a
	// stream (server->client) in bytes.
	public get MaxRespSize(): $.VarRef<number> | null {
		return this._fields.MaxRespSize
	}

	public set MaxRespSize(value: $.VarRef<number> | null) {
		this._fields.MaxRespSize = value
	}

	// RetryPolicy configures retry options for the method.
	public get RetryPolicy(): RetryPolicy | $.VarRef<RetryPolicy> | null {
		return this._fields.RetryPolicy
	}

	public set RetryPolicy(value: RetryPolicy | $.VarRef<RetryPolicy> | null) {
		this._fields.RetryPolicy = value
	}

	public _fields: {
		WaitForReady: $.VarRef<boolean> | null
		Timeout: $.VarRef<time.Duration> | null
		MaxReqSize: $.VarRef<number> | null
		MaxRespSize: $.VarRef<number> | null
		RetryPolicy: RetryPolicy | $.VarRef<RetryPolicy> | null
	}

	constructor(init?: Partial<{WaitForReady?: $.VarRef<boolean> | null, Timeout?: $.VarRef<time.Duration> | null, MaxReqSize?: $.VarRef<number> | null, MaxRespSize?: $.VarRef<number> | null, RetryPolicy?: RetryPolicy | $.VarRef<RetryPolicy> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			WaitForReady: init?.WaitForReady ?? (null! as $.VarRef<boolean> | null),
			Timeout: init?.Timeout ?? (null! as $.VarRef<time.Duration> | null),
			MaxReqSize: init?.MaxReqSize ?? (null! as $.VarRef<number> | null),
			MaxRespSize: init?.MaxRespSize ?? (null! as $.VarRef<number> | null),
			RetryPolicy: init?.RetryPolicy ?? (null! as RetryPolicy | $.VarRef<RetryPolicy> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MethodConfig {
		return new MethodConfig(this, true)
	}

	public __goscriptAssign(source: MethodConfig): void {
		const target = this._fields
		const values = source._fields
		target.WaitForReady = values.WaitForReady
		target.Timeout = values.Timeout
		target.MaxReqSize = values.MaxReqSize
		target.MaxRespSize = values.MaxRespSize
		target.RetryPolicy = values.RetryPolicy
	}

	static __typeInfo = $.registerStructType(
		"serviceconfig.MethodConfig",
		() => new MethodConfig(),
		() => [],
		MethodConfig,
		() => [/* @__PURE__ */ $.structField("WaitForReady", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), [0], 0, true), /* @__PURE__ */ $.structField("Timeout", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration")), [1], 8, true), /* @__PURE__ */ $.structField("MaxReqSize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int")), [2], 16, true), /* @__PURE__ */ $.structField("MaxRespSize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int")), [3], 24, true), /* @__PURE__ */ $.structField("RetryPolicy", /* @__PURE__ */ $.pointerType("serviceconfig.RetryPolicy"), [4], 32, true)]
	)
}

export class RetryPolicy {
	// MaxAttempts is the maximum number of attempts, including the original RPC.
	//
	// This field is required and must be two or greater.
	public get MaxAttempts(): number {
		return this._fields.MaxAttempts
	}

	public set MaxAttempts(value: number) {
		this._fields.MaxAttempts = value
	}

	// Exponential backoff parameters. The initial retry attempt will occur at
	// random(0, initialBackoff). In general, the nth attempt will occur at
	// random(0,
	//   min(initialBackoff*backoffMultiplier**(n-1), maxBackoff)).
	//
	// These fields are required and must be greater than zero.
	public get InitialBackoff(): time.Duration {
		return this._fields.InitialBackoff
	}

	public set InitialBackoff(value: time.Duration) {
		this._fields.InitialBackoff = value
	}

	public get MaxBackoff(): time.Duration {
		return this._fields.MaxBackoff
	}

	public set MaxBackoff(value: time.Duration) {
		this._fields.MaxBackoff = value
	}

	public get BackoffMultiplier(): number {
		return this._fields.BackoffMultiplier
	}

	public set BackoffMultiplier(value: number) {
		this._fields.BackoffMultiplier = value
	}

	// The set of status codes which may be retried.
	//
	// Status codes are specified as strings, e.g., "UNAVAILABLE".
	//
	// This field is required and must be non-empty.
	// Note: a set is used to store this for easy lookup.
	public get RetryableStatusCodes(): globalThis.Map<codes.Code, boolean> | null {
		return this._fields.RetryableStatusCodes
	}

	public set RetryableStatusCodes(value: globalThis.Map<codes.Code, boolean> | null) {
		this._fields.RetryableStatusCodes = value
	}

	public _fields: {
		MaxAttempts: number
		InitialBackoff: time.Duration
		MaxBackoff: time.Duration
		BackoffMultiplier: number
		RetryableStatusCodes: globalThis.Map<codes.Code, boolean> | null
	}

	constructor(init?: Partial<{MaxAttempts?: number, InitialBackoff?: time.Duration, MaxBackoff?: time.Duration, BackoffMultiplier?: number, RetryableStatusCodes?: globalThis.Map<codes.Code, boolean> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			MaxAttempts: init?.MaxAttempts ?? (0 as number),
			InitialBackoff: init?.InitialBackoff ?? (0n as time.Duration),
			MaxBackoff: init?.MaxBackoff ?? (0n as time.Duration),
			BackoffMultiplier: init?.BackoffMultiplier ?? (0 as number),
			RetryableStatusCodes: init?.RetryableStatusCodes ?? (null! as globalThis.Map<codes.Code, boolean> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RetryPolicy {
		return new RetryPolicy(this, true)
	}

	public __goscriptAssign(source: RetryPolicy): void {
		const target = this._fields
		const values = source._fields
		target.MaxAttempts = values.MaxAttempts
		target.InitialBackoff = values.InitialBackoff
		target.MaxBackoff = values.MaxBackoff
		target.BackoffMultiplier = values.BackoffMultiplier
		target.RetryableStatusCodes = values.RetryableStatusCodes
	}

	static __typeInfo = $.registerStructType(
		"serviceconfig.RetryPolicy",
		() => new RetryPolicy(),
		() => [],
		RetryPolicy,
		() => [/* @__PURE__ */ $.structField("MaxAttempts", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("InitialBackoff", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 8, true), /* @__PURE__ */ $.structField("MaxBackoff", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 16, true), /* @__PURE__ */ $.structField("BackoffMultiplier", /* @__PURE__ */ $.basicType("float64"), [3], 24, true), /* @__PURE__ */ $.structField("RetryableStatusCodes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint32", "codes.Code"), /* @__PURE__ */ $.basicType("bool")), [4], 32, true)]
	)
}

export let logger: grpclog.DepthLoggerV2 | null = await grpclog.Component("core")

export function __goscript_set_logger(__goscriptValue: grpclog.DepthLoggerV2 | null): void {
	logger = __goscriptValue
}

var __goscriptAwait: any
