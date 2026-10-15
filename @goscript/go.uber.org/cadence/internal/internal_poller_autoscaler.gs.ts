// Generated file based on internal_poller_autoscaler.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.AutoScalerOptions"])

export class AutoScalerOptions {
	// Optional: Enable the auto scaler.
	// default: false
	public get Enabled(): boolean {
		return this._fields.Enabled
	}

	public set Enabled(value: boolean) {
		this._fields.Enabled = value
	}

	// Optional: The cooldown period after a scale up or down.
	// default: 10 seconds
	public get Cooldown(): time.Duration {
		return this._fields.Cooldown
	}

	public set Cooldown(value: time.Duration) {
		this._fields.Cooldown = value
	}

	// Optional: The minimum number of pollers to start with.
	// default: 2
	public get PollerMinCount(): number {
		return this._fields.PollerMinCount
	}

	public set PollerMinCount(value: number) {
		this._fields.PollerMinCount = value
	}

	// Optional: The maximum number of pollers to start with.
	// default: 20
	public get PollerMaxCount(): number {
		return this._fields.PollerMaxCount
	}

	public set PollerMaxCount(value: number) {
		this._fields.PollerMaxCount = value
	}

	// Optional: The initial number of pollers to start with.
	// default: 2
	public get PollerInitCount(): number {
		return this._fields.PollerInitCount
	}

	public set PollerInitCount(value: number) {
		this._fields.PollerInitCount = value
	}

	// Optional: The upper bound of poller wait time for poller autoscaler to scale down.
	// default: 256ms
	// NOTE: This is normally not needed to be set by user.
	public get PollerWaitTimeUpperBound(): time.Duration {
		return this._fields.PollerWaitTimeUpperBound
	}

	public set PollerWaitTimeUpperBound(value: time.Duration) {
		this._fields.PollerWaitTimeUpperBound = value
	}

	// Optional: The lower bound of poller wait time for poller autoscaler to scale up.
	// default: 16ms
	// NOTE: This is normally not needed to be set by user.
	public get PollerWaitTimeLowerBound(): time.Duration {
		return this._fields.PollerWaitTimeLowerBound
	}

	public set PollerWaitTimeLowerBound(value: time.Duration) {
		this._fields.PollerWaitTimeLowerBound = value
	}

	public _fields: {
		Enabled: boolean
		Cooldown: time.Duration
		PollerMinCount: number
		PollerMaxCount: number
		PollerInitCount: number
		PollerWaitTimeUpperBound: time.Duration
		PollerWaitTimeLowerBound: time.Duration
	}

	constructor(init?: Partial<{Enabled?: boolean, Cooldown?: time.Duration, PollerMinCount?: number, PollerMaxCount?: number, PollerInitCount?: number, PollerWaitTimeUpperBound?: time.Duration, PollerWaitTimeLowerBound?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			Enabled: init?.Enabled ?? (false as boolean),
			Cooldown: init?.Cooldown ?? (0n as time.Duration),
			PollerMinCount: init?.PollerMinCount ?? (0 as number),
			PollerMaxCount: init?.PollerMaxCount ?? (0 as number),
			PollerInitCount: init?.PollerInitCount ?? (0 as number),
			PollerWaitTimeUpperBound: init?.PollerWaitTimeUpperBound ?? (0n as time.Duration),
			PollerWaitTimeLowerBound: init?.PollerWaitTimeLowerBound ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): AutoScalerOptions {
		return new AutoScalerOptions(this, true)
	}

	public __goscriptAssign(source: AutoScalerOptions): void {
		const target = this._fields
		const values = source._fields
		target.Enabled = values.Enabled
		target.Cooldown = values.Cooldown
		target.PollerMinCount = values.PollerMinCount
		target.PollerMaxCount = values.PollerMaxCount
		target.PollerInitCount = values.PollerInitCount
		target.PollerWaitTimeUpperBound = values.PollerWaitTimeUpperBound
		target.PollerWaitTimeLowerBound = values.PollerWaitTimeLowerBound
	}

	static __typeInfo = $.registerStructType(
		"internal.AutoScalerOptions",
		() => new AutoScalerOptions(),
		() => [],
		AutoScalerOptions,
		() => [/* @__PURE__ */ $.structField("Enabled", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("Cooldown", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 8, true), /* @__PURE__ */ $.structField("PollerMinCount", /* @__PURE__ */ $.basicType("int"), [2], 16, true), /* @__PURE__ */ $.structField("PollerMaxCount", /* @__PURE__ */ $.basicType("int"), [3], 24, true), /* @__PURE__ */ $.structField("PollerInitCount", /* @__PURE__ */ $.basicType("int"), [4], 32, true), /* @__PURE__ */ $.structField("PollerWaitTimeUpperBound", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [5], 40, true), /* @__PURE__ */ $.structField("PollerWaitTimeLowerBound", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [6], 48, true)]
	)
}

export const defaultPollerAutoScalerCooldown: time.Duration = 10000000000n

export const defaultMinPollerSize: number = 2

export const defaultMaxPollerSize: number = 20

export const defaultInitPollerSize: number = 2

export const defaultPollerAutoScalerWaitTimeUpperBound: time.Duration = 256000000n

export const defaultPollerAutoScalerWaitTimeLowerBound: time.Duration = 16000000n
