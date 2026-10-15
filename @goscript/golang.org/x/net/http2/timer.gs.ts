// Generated file based on timer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("golang.org/x/net/http2", ["http2.timeTimer"])

export type timer = any

export class timeTimer {
	public get Timer(): time.Timer | $.VarRef<time.Timer> | null {
		return this._fields.Timer
	}

	public set Timer(value: time.Timer | $.VarRef<time.Timer> | null) {
		this._fields.Timer = value
	}

	public _fields: {
		Timer: time.Timer | $.VarRef<time.Timer> | null
	}

	constructor(init?: Partial<{Timer?: time.Timer | $.VarRef<time.Timer> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Timer: init?.Timer ?? (null! as time.Timer | $.VarRef<time.Timer> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): timeTimer {
		return new timeTimer(this, true)
	}

	public __goscriptAssign(source: timeTimer): void {
		const target = this._fields
		const values = source._fields
		target.Timer = values.Timer
	}

	public C(): $.Channel<time.Time> | null {
		const t = this;
		return $.pointerValue<time.Timer>(t.Timer).C
	}

	public Reset(d: any): any {
		return $.pointerValue<time.Timer>(this.Timer).Reset(d)
	}

	public Stop(): any {
		return $.pointerValue<time.Timer>(this.Timer).Stop()
	}

	static __typeInfo = $.registerStructType(
		"http2.timeTimer",
		() => new timeTimer(),
		() => [$.methodSignature("C", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])],
		timeTimer,
		() => [/* @__PURE__ */ $.structField("Timer", /* @__PURE__ */ $.pointerType("time.Timer"), [0], 0, true, { anonymous: true })]
	)
}
