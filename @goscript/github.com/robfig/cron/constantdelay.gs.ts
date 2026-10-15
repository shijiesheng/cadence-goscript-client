// Generated file based on constantdelay.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("github.com/robfig/cron", ["cron.ConstantDelaySchedule"])

export class ConstantDelaySchedule {
	public get Delay(): time.Duration {
		return this._fields.Delay
	}

	public set Delay(value: time.Duration) {
		this._fields.Delay = value
	}

	public _fields: {
		Delay: time.Duration
	}

	constructor(init?: Partial<{Delay?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			Delay: init?.Delay ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ConstantDelaySchedule {
		return new ConstantDelaySchedule(this, true)
	}

	public __goscriptAssign(source: ConstantDelaySchedule): void {
		const target = this._fields
		const values = source._fields
		target.Delay = values.Delay
	}

	public Next(t: time.Time): time.Time {
		const schedule = this;
		return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(t)).Add($.int64Sub(schedule.Delay, ($.int64Mul($.int64($.markAsStructValue($.cloneStructValue(t)).Nanosecond()), 1n))))))
	}

	static __typeInfo = $.registerStructType(
		"cron.ConstantDelaySchedule",
		() => new ConstantDelaySchedule(),
		() => [$.methodSignature("Next", [["t", "time.Time"]], ["time.Time"])],
		ConstantDelaySchedule,
		() => [/* @__PURE__ */ $.structField("Delay", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [0], 0, true)]
	)
}

export function Every(duration: time.Duration): ConstantDelaySchedule {
	if (duration < 1000000000n) {
		duration = 1000000000n
	}
	return (() => { const __goscriptLiteralField0 = $.int64Sub(duration, ($.int64Mod($.int64(time.Duration_Nanoseconds(duration)), 1000000000n))); return new ConstantDelaySchedule({Delay: __goscriptLiteralField0}, true) })()
}
