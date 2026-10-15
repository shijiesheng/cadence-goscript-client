// Generated file based on clock.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("go.uber.org/zap/zapcore", ["zapcore.Clock", "zapcore.systemClock"])

export type Clock = {
	NewTicker(_p0: time.Duration): time.Ticker | $.VarRef<time.Ticker> | null
	Now(): time.Time
}

$.registerInterfaceType(
	"zapcore.Clock",
	null,
	[$.methodSignature("NewTicker", [/* @__PURE__ */ $.basicType("int64", "time.Duration")], [/* @__PURE__ */ $.pointerType("time.Ticker")]), $.methodSignature("Now", [], ["time.Time"])]
);

export class systemClock {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): systemClock {
		return new systemClock(this, true)
	}

	public __goscriptAssign(source: systemClock): void {
	}

	public NewTicker(duration: time.Duration): time.Ticker | $.VarRef<time.Ticker> | null {
		return time.NewTicker(duration)
	}

	public Now(): time.Time {
		return $.markAsStructValue($.cloneStructValue(time.Now()))
	}

	static __typeInfo = $.registerStructType(
		"zapcore.systemClock",
		() => new systemClock(),
		() => [$.methodSignature("NewTicker", [["duration", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("time.Ticker")]), $.methodSignature("Now", [], ["time.Time"])],
		systemClock,
		() => []
	)
}

export let DefaultClock: systemClock = new systemClock(undefined, true)

export function __goscript_set_DefaultClock(__goscriptValue: systemClock): void {
	$.assignStruct(DefaultClock, __goscriptValue)
}
