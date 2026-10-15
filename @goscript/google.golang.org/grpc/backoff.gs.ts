// Generated file based on backoff.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as backoff from "@goscript/google.golang.org/grpc/backoff/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/grpc/backoff/index.js"

$.registerTypePackagePath("google.golang.org/grpc", ["grpc.BackoffConfig", "grpc.ConnectParams"])

export class BackoffConfig {
	// MaxDelay is the upper bound of backoff delay.
	public get MaxDelay(): time.Duration {
		return this._fields.MaxDelay
	}

	public set MaxDelay(value: time.Duration) {
		this._fields.MaxDelay = value
	}

	public _fields: {
		MaxDelay: time.Duration
	}

	constructor(init?: Partial<{MaxDelay?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			MaxDelay: init?.MaxDelay ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BackoffConfig {
		return new BackoffConfig(this, true)
	}

	public __goscriptAssign(source: BackoffConfig): void {
		const target = this._fields
		const values = source._fields
		target.MaxDelay = values.MaxDelay
	}

	static __typeInfo = $.registerStructType(
		"grpc.BackoffConfig",
		() => new BackoffConfig(),
		() => [],
		BackoffConfig,
		() => [/* @__PURE__ */ $.structField("MaxDelay", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [0], 0, true)]
	)
}

export class ConnectParams {
	// Backoff specifies the configuration options for connection backoff.
	public get Backoff(): backoff.Config {
		return this._fields.Backoff
	}

	public set Backoff(value: backoff.Config) {
		this._fields.Backoff = value
	}

	// MinConnectTimeout is the minimum amount of time we are willing to give a
	// connection to complete.
	public get MinConnectTimeout(): time.Duration {
		return this._fields.MinConnectTimeout
	}

	public set MinConnectTimeout(value: time.Duration) {
		this._fields.MinConnectTimeout = value
	}

	public _fields: {
		Backoff: backoff.Config
		MinConnectTimeout: time.Duration
	}

	constructor(init?: Partial<{Backoff?: backoff.Config, MinConnectTimeout?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			Backoff: init?.Backoff ? init.Backoff.clone() : new backoff.Config(undefined, true),
			MinConnectTimeout: init?.MinConnectTimeout ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ConnectParams {
		return new ConnectParams(this, true)
	}

	public __goscriptAssign(source: ConnectParams): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Backoff, values.Backoff)
		target.MinConnectTimeout = values.MinConnectTimeout
	}

	static __typeInfo = $.registerStructType(
		"grpc.ConnectParams",
		() => new ConnectParams(),
		() => [],
		ConnectParams,
		() => [/* @__PURE__ */ $.structField("Backoff", "backoff.Config", [0], 0, true), /* @__PURE__ */ $.structField("MinConnectTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 32, true)]
	)
}

export let DefaultBackoffConfig: BackoffConfig = new BackoffConfig({MaxDelay: 120000000000n}, true)

export function __goscript_set_DefaultBackoffConfig(__goscriptValue: BackoffConfig): void {
	$.assignStruct(DefaultBackoffConfig, __goscriptValue)
}
