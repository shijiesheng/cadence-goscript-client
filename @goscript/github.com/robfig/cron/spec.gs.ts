// Generated file based on spec.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("github.com/robfig/cron", ["cron.SpecSchedule", "cron.bounds"])

export class SpecSchedule {
	public get Second(): bigint {
		return this._fields.Second
	}

	public set Second(value: bigint) {
		this._fields.Second = value
	}

	public get Minute(): bigint {
		return this._fields.Minute
	}

	public set Minute(value: bigint) {
		this._fields.Minute = value
	}

	public get Hour(): bigint {
		return this._fields.Hour
	}

	public set Hour(value: bigint) {
		this._fields.Hour = value
	}

	public get Dom(): bigint {
		return this._fields.Dom
	}

	public set Dom(value: bigint) {
		this._fields.Dom = value
	}

	public get Month(): bigint {
		return this._fields.Month
	}

	public set Month(value: bigint) {
		this._fields.Month = value
	}

	public get Dow(): bigint {
		return this._fields.Dow
	}

	public set Dow(value: bigint) {
		this._fields.Dow = value
	}

	public _fields: {
		Second: bigint
		Minute: bigint
		Hour: bigint
		Dom: bigint
		Month: bigint
		Dow: bigint
	}

	constructor(init?: Partial<{Second?: bigint, Minute?: bigint, Hour?: bigint, Dom?: bigint, Month?: bigint, Dow?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Second: init?.Second ?? (0n as bigint),
			Minute: init?.Minute ?? (0n as bigint),
			Hour: init?.Hour ?? (0n as bigint),
			Dom: init?.Dom ?? (0n as bigint),
			Month: init?.Month ?? (0n as bigint),
			Dow: init?.Dow ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SpecSchedule {
		return new SpecSchedule(this, true)
	}

	public __goscriptAssign(source: SpecSchedule): void {
		const target = this._fields
		const values = source._fields
		target.Second = values.Second
		target.Minute = values.Minute
		target.Hour = values.Hour
		target.Dom = values.Dom
		target.Month = values.Month
		target.Dow = values.Dow
	}

	public Next(t: time.Time): time.Time {
		const s: SpecSchedule | $.VarRef<SpecSchedule> | null = this;
		const s$: SpecSchedule = s == null ? $.pointerTarget<SpecSchedule>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<SpecSchedule>(s)
		// General approach:
		// For Month, Day, Hour, Minute, Second:
		// Check if the time value matches.  If yes, continue to the next field.
		// If the field doesn't match the schedule, then increment the field until it matches.
		// While incrementing the field, a wrap-around brings it back to the beginning
		// of the field list (since it is necessary to re-verify previous field
		// values)

		// Start at the earliest possible time (the upcoming second).
		t = $.assignStruct(t, $.markAsStructValue($.cloneStructValue(t)).Add($.int64Sub(1000000000n, ($.int64Mul($.int64($.markAsStructValue($.cloneStructValue(t)).Nanosecond()), 1n)))))

		// This flag indicates whether a field has been incremented.
		let added = false

		// If no time is found within five years, return zero.
		let yearLimit = $.markAsStructValue($.cloneStructValue(t)).Year() + 5

		WRAP: while (true) {
			if ($.markAsStructValue($.cloneStructValue(t)).Year() > yearLimit) {
				return $.markAsStructValue(new time.Time())
			}

			// Find the first applicable month.
			// If it's this month, then do nothing.
			while (($.uint64And(($.uint64Shl(1n, $.uint($.markAsStructValue($.cloneStructValue(t)).Month(), 64))), (s$ as SpecSchedule).Month)) == 0n) {
				// If we have to add a month, reset the other parts to 0.
				if (!added) {
					added = true
					// Otherwise, set the date at the beginning (since the current time is irrelevant).
					t = $.assignStruct(t, time.Date($.markAsStructValue($.cloneStructValue(t)).Year(), $.markAsStructValue($.cloneStructValue(t)).Month(), 1, 0, 0, 0, 0, $.markAsStructValue($.cloneStructValue(t)).Location()))
				}
				t = $.assignStruct(t, $.markAsStructValue($.cloneStructValue(t)).AddDate(0, 1, 0))

				// Wrapped around.
				if ($.markAsStructValue($.cloneStructValue(t)).Month() == 1) {
					continue WRAP
				}
			}

			// Now get a day in that month.
			while (!dayMatches(s, t)) {
				if (!added) {
					added = true
					t = $.assignStruct(t, time.Date($.markAsStructValue($.cloneStructValue(t)).Year(), $.markAsStructValue($.cloneStructValue(t)).Month(), $.markAsStructValue($.cloneStructValue(t)).Day(), 0, 0, 0, 0, $.markAsStructValue($.cloneStructValue(t)).Location()))
				}
				t = $.assignStruct(t, $.markAsStructValue($.cloneStructValue(t)).AddDate(0, 0, 1))

				if ($.markAsStructValue($.cloneStructValue(t)).Day() == 1) {
					continue WRAP
				}
			}

			while (($.uint64And(($.uint64Shl(1n, $.uint($.markAsStructValue($.cloneStructValue(t)).Hour(), 64))), (s$ as SpecSchedule).Hour)) == 0n) {
				if (!added) {
					added = true
					t = $.assignStruct(t, time.Date($.markAsStructValue($.cloneStructValue(t)).Year(), $.markAsStructValue($.cloneStructValue(t)).Month(), $.markAsStructValue($.cloneStructValue(t)).Day(), $.markAsStructValue($.cloneStructValue(t)).Hour(), 0, 0, 0, $.markAsStructValue($.cloneStructValue(t)).Location()))
				}
				t = $.assignStruct(t, $.markAsStructValue($.cloneStructValue(t)).Add(3600000000000n))

				if ($.markAsStructValue($.cloneStructValue(t)).Hour() == 0) {
					continue WRAP
				}
			}

			while (($.uint64And(($.uint64Shl(1n, $.uint($.markAsStructValue($.cloneStructValue(t)).Minute(), 64))), (s$ as SpecSchedule).Minute)) == 0n) {
				if (!added) {
					added = true
					t = $.assignStruct(t, $.markAsStructValue($.cloneStructValue(t)).Truncate(60000000000n))
				}
				t = $.assignStruct(t, $.markAsStructValue($.cloneStructValue(t)).Add(60000000000n))

				if ($.markAsStructValue($.cloneStructValue(t)).Minute() == 0) {
					continue WRAP
				}
			}

			while (($.uint64And(($.uint64Shl(1n, $.uint($.markAsStructValue($.cloneStructValue(t)).Second(), 64))), (s$ as SpecSchedule).Second)) == 0n) {
				if (!added) {
					added = true
					t = $.assignStruct(t, $.markAsStructValue($.cloneStructValue(t)).Truncate(1000000000n))
				}
				t = $.assignStruct(t, $.markAsStructValue($.cloneStructValue(t)).Add(1000000000n))

				if ($.markAsStructValue($.cloneStructValue(t)).Second() == 0) {
					continue WRAP
				}
			}

			return $.markAsStructValue($.cloneStructValue(t))
			break
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"cron.SpecSchedule",
		() => new SpecSchedule(),
		() => [$.methodSignature("Next", [["t", "time.Time"]], ["time.Time"], true)],
		SpecSchedule,
		() => [/* @__PURE__ */ $.structField("Second", /* @__PURE__ */ $.basicType("uint64"), [0], 0, true), /* @__PURE__ */ $.structField("Minute", /* @__PURE__ */ $.basicType("uint64"), [1], 8, true), /* @__PURE__ */ $.structField("Hour", /* @__PURE__ */ $.basicType("uint64"), [2], 16, true), /* @__PURE__ */ $.structField("Dom", /* @__PURE__ */ $.basicType("uint64"), [3], 24, true), /* @__PURE__ */ $.structField("Month", /* @__PURE__ */ $.basicType("uint64"), [4], 32, true), /* @__PURE__ */ $.structField("Dow", /* @__PURE__ */ $.basicType("uint64"), [5], 40, true)]
	)
}

export class bounds {
	public get min(): number {
		return this._fields.min
	}

	public set min(value: number) {
		this._fields.min = value
	}

	public get max(): number {
		return this._fields.max
	}

	public set max(value: number) {
		this._fields.max = value
	}

	public get names(): globalThis.Map<string, number> | null {
		return this._fields.names
	}

	public set names(value: globalThis.Map<string, number> | null) {
		this._fields.names = value
	}

	public _fields: {
		min: number
		max: number
		names: globalThis.Map<string, number> | null
	}

	constructor(init?: Partial<{min?: number, max?: number, names?: globalThis.Map<string, number> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			min: init?.min ?? (0 as number),
			max: init?.max ?? (0 as number),
			names: init?.names ?? (null! as globalThis.Map<string, number> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): bounds {
		return new bounds(this, true)
	}

	public __goscriptAssign(source: bounds): void {
		const target = this._fields
		const values = source._fields
		target.min = values.min
		target.max = values.max
		target.names = values.names
	}

	static __typeInfo = $.registerStructType(
		"cron.bounds",
		() => new bounds(),
		() => [],
		bounds,
		() => [/* @__PURE__ */ $.structField("min", /* @__PURE__ */ $.basicType("uint"), [0], 0, false, { pkgPath: "github.com/robfig/cron" }), /* @__PURE__ */ $.structField("max", /* @__PURE__ */ $.basicType("uint"), [1], 8, false, { pkgPath: "github.com/robfig/cron" }), /* @__PURE__ */ $.structField("names", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint")), [2], 16, false, { pkgPath: "github.com/robfig/cron" })]
	)
}

export const starBit: number = 9223372036854775808

export let seconds: bounds = new bounds({min: 0, max: 59, names: null}, true)

export function __goscript_set_seconds(__goscriptValue: bounds): void {
	$.assignStruct(seconds, __goscriptValue)
}

export let minutes: bounds = new bounds({min: 0, max: 59, names: null}, true)

export function __goscript_set_minutes(__goscriptValue: bounds): void {
	$.assignStruct(minutes, __goscriptValue)
}

export let hours: bounds = new bounds({min: 0, max: 23, names: null}, true)

export function __goscript_set_hours(__goscriptValue: bounds): void {
	$.assignStruct(hours, __goscriptValue)
}

export let dom: bounds = new bounds({min: 1, max: 31, names: null}, true)

export function __goscript_set_dom(__goscriptValue: bounds): void {
	$.assignStruct(dom, __goscriptValue)
}

export let months: bounds = new bounds({min: 1, max: 12, names: $.makeMap<string, number>([["jan", 1], ["feb", 2], ["mar", 3], ["apr", 4], ["may", 5], ["jun", 6], ["jul", 7], ["aug", 8], ["sep", 9], ["oct", 10], ["nov", 11], ["dec", 12]])}, true)

export function __goscript_set_months(__goscriptValue: bounds): void {
	$.assignStruct(months, __goscriptValue)
}

export let dow: bounds = new bounds({min: 0, max: 6, names: $.makeMap<string, number>([["sun", 0], ["mon", 1], ["tue", 2], ["wed", 3], ["thu", 4], ["fri", 5], ["sat", 6]])}, true)

export function __goscript_set_dow(__goscriptValue: bounds): void {
	$.assignStruct(dow, __goscriptValue)
}

export function dayMatches(s: SpecSchedule | $.VarRef<SpecSchedule> | null, t: time.Time): boolean {
	const s$: SpecSchedule = s == null ? $.pointerTarget<SpecSchedule>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<SpecSchedule>(s)
	let domMatch: boolean = ($.uint64And(($.uint64Shl(1n, $.uint($.markAsStructValue($.cloneStructValue(t)).Day(), 64))), (s$ as SpecSchedule).Dom)) > 0n
	let dowMatch: boolean = ($.uint64And(($.uint64Shl(1n, $.uint($.markAsStructValue($.cloneStructValue(t)).Weekday(), 64))), (s$ as SpecSchedule).Dow)) > 0n
	if ((($.uint64And((s$ as SpecSchedule).Dom, 9223372036854775808n)) > 0n) || (($.uint64And((s$ as SpecSchedule).Dow, 9223372036854775808n)) > 0n)) {
		return domMatch && dowMatch
	}
	return domMatch || dowMatch
}
