// Generated file based on timer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_observer from "./observer.gs.ts"
import "@goscript/time/index.js"
import "./observer.gs.ts"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus", ["prometheus.Timer"])

export class Timer {
	public get begin(): time.Time {
		return this._fields.begin
	}

	public set begin(value: time.Time) {
		this._fields.begin = value
	}

	public get observer(): __goscript_observer.Observer | null {
		return this._fields.observer
	}

	public set observer(value: __goscript_observer.Observer | null) {
		this._fields.observer = value
	}

	public _fields: {
		begin: time.Time
		observer: __goscript_observer.Observer | null
	}

	constructor(init?: Partial<{begin?: time.Time, observer?: __goscript_observer.Observer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			begin: init?.begin ? $.markAsStructValue($.cloneStructValue(init.begin)) : $.markAsStructValue(new time.Time()),
			observer: init?.observer ?? (null! as __goscript_observer.Observer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Timer {
		return new Timer(this, true)
	}

	public __goscriptAssign(source: Timer): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.begin, values.begin)
		target.observer = $.assignFieldValue(target.observer, values.observer, "prometheus.Observer")
	}

	public async ObserveDuration(): globalThis.Promise<time.Duration> {
		const t: Timer | $.VarRef<Timer> | null = this;
		const t$: Timer = t == null ? $.pointerTarget<Timer>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Timer>(t)
		let d = time.Since($.markAsStructValue($.cloneStructValue((t$ as Timer).begin)))
		if ((t$ as Timer).observer != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_observer.Observer, null>>((t$ as Timer).observer).Observe(time.Duration_Seconds(d)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return d
	}

	static __typeInfo = $.registerStructType(
		"prometheus.Timer",
		() => new Timer(),
		() => [$.methodSignature("ObserveDuration", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true)],
		Timer,
		() => [/* @__PURE__ */ $.structField("begin", "time.Time", [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("observer", "prometheus.Observer", [1], 24, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export function NewTimer(o: __goscript_observer.Observer | null): Timer | $.VarRef<Timer> | null {
	return (() => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue(time.Now())); return new Timer({begin: __goscriptLiteralField0, observer: o}) })()
}

var __goscriptAwait: any
