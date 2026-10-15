// Generated file based on backoff.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("google.golang.org/grpc/backoff", ["backoff.Config"])

export class Config {
	// BaseDelay is the amount of time to backoff after the first failure.
	public get BaseDelay(): time.Duration {
		return this._fields.BaseDelay
	}

	public set BaseDelay(value: time.Duration) {
		this._fields.BaseDelay = value
	}

	// Multiplier is the factor with which to multiply backoffs after a
	// failed retry. Should ideally be greater than 1.
	public get Multiplier(): number {
		return this._fields.Multiplier
	}

	public set Multiplier(value: number) {
		this._fields.Multiplier = value
	}

	// Jitter is the factor with which backoffs are randomized.
	public get Jitter(): number {
		return this._fields.Jitter
	}

	public set Jitter(value: number) {
		this._fields.Jitter = value
	}

	// MaxDelay is the upper bound of backoff delay.
	public get MaxDelay(): time.Duration {
		return this._fields.MaxDelay
	}

	public set MaxDelay(value: time.Duration) {
		this._fields.MaxDelay = value
	}

	public _fields: {
		BaseDelay: time.Duration
		Multiplier: number
		Jitter: number
		MaxDelay: time.Duration
	}

	constructor(init?: Partial<{BaseDelay?: time.Duration, Multiplier?: number, Jitter?: number, MaxDelay?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			BaseDelay: init?.BaseDelay ?? (0n as time.Duration),
			Multiplier: init?.Multiplier ?? (0 as number),
			Jitter: init?.Jitter ?? (0 as number),
			MaxDelay: init?.MaxDelay ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Config {
		return new Config(this, true)
	}

	public __goscriptAssign(source: Config): void {
		const target = this._fields
		const values = source._fields
		target.BaseDelay = values.BaseDelay
		target.Multiplier = values.Multiplier
		target.Jitter = values.Jitter
		target.MaxDelay = values.MaxDelay
	}

	static __typeInfo = $.registerStructType(
		"backoff.Config",
		() => new Config(),
		() => [],
		Config,
		() => [/* @__PURE__ */ $.structField("BaseDelay", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [0], 0, true), /* @__PURE__ */ $.structField("Multiplier", /* @__PURE__ */ $.basicType("float64"), [1], 8, true), /* @__PURE__ */ $.structField("Jitter", /* @__PURE__ */ $.basicType("float64"), [2], 16, true), /* @__PURE__ */ $.structField("MaxDelay", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 24, true)]
	)
}

export let DefaultConfig: Config = new Config({BaseDelay: 1000000000n, Multiplier: 1.6, Jitter: 0.2, MaxDelay: 120000000000n}, true)

export function __goscript_set_DefaultConfig(__goscriptValue: Config): void {
	$.assignStruct(DefaultConfig, __goscriptValue)
}
