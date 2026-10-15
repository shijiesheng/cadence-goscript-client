// Generated file based on scope.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/uber-go/tally/index.js"

$.registerTypePackagePath("go.uber.org/cadence/internal/common/metrics", ["metrics.Clock", "metrics.durationRecorder", "metrics.replayAwareScope", "metrics.replayAwareCounter", "metrics.replayAwareGauge", "metrics.replayAwareTimer", "metrics.replayAwareHistogram", "metrics.replayAwareStopwatchRecorder", "metrics.TaggedScope"])

export type Clock = {
	Now(): time.Time | globalThis.Promise<time.Time>
}

$.registerInterfaceType(
	"metrics.Clock",
	null,
	[$.methodSignature("Now", [], ["time.Time"])]
);

export type durationRecorder = {
	RecordDuration(duration: time.Duration): void
}

$.registerInterfaceType(
	"metrics.durationRecorder",
	null,
	[$.methodSignature("RecordDuration", [["duration", /* @__PURE__ */ $.basicType("int64", "time.Duration")]])]
);

export class replayAwareScope {
	public get isReplay(): $.VarRef<boolean> | null {
		return this._fields.isReplay
	}

	public set isReplay(value: $.VarRef<boolean> | null) {
		this._fields.isReplay = value
	}

	public get scope(): tally.Scope | null {
		return this._fields.scope
	}

	public set scope(value: tally.Scope | null) {
		this._fields.scope = value
	}

	public get clock(): Clock | null {
		return this._fields.clock
	}

	public set clock(value: Clock | null) {
		this._fields.clock = value
	}

	public _fields: {
		isReplay: $.VarRef<boolean> | null
		scope: tally.Scope | null
		clock: Clock | null
	}

	constructor(init?: Partial<{isReplay?: $.VarRef<boolean> | null, scope?: tally.Scope | null, clock?: Clock | null}>, __goscriptValue?: boolean) {
		this._fields = {
			isReplay: init?.isReplay ?? (null! as $.VarRef<boolean> | null),
			scope: init?.scope ?? (null! as tally.Scope | null),
			clock: init?.clock ?? (null! as Clock | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): replayAwareScope {
		return new replayAwareScope(this, true)
	}

	public __goscriptAssign(source: replayAwareScope): void {
		const target = this._fields
		const values = source._fields
		target.isReplay = values.isReplay
		target.scope = $.assignFieldValue(target.scope, values.scope, "tally.Scope")
		target.clock = $.assignFieldValue(target.clock, values.clock, "metrics.Clock")
	}

	public async Capabilities(): globalThis.Promise<tally.Capabilities | null> {
		const s: replayAwareScope | $.VarRef<replayAwareScope> | null = this;
		return $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<replayAwareScope>(s).scope).Capabilities()
	}

	public async Counter(name: string): globalThis.Promise<tally.Counter | null> {
		const s: replayAwareScope | $.VarRef<replayAwareScope> | null = this;
		const s$: replayAwareScope = s == null ? $.pointerTarget<replayAwareScope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<replayAwareScope>(s)
		return $.interfaceValue<tally.Counter | null>((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((s$ as replayAwareScope).scope).Counter(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new replayAwareCounter({isReplay: (s$ as replayAwareScope).isReplay, counter: __goscriptLiteralField0}) })()), "*metrics.replayAwareCounter", /* @__PURE__ */ $.pointerType("metrics.replayAwareCounter"))
	}

	public async Gauge(name: string): globalThis.Promise<tally.Gauge | null> {
		const s: replayAwareScope | $.VarRef<replayAwareScope> | null = this;
		const s$: replayAwareScope = s == null ? $.pointerTarget<replayAwareScope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<replayAwareScope>(s)
		return $.interfaceValue<tally.Gauge | null>((await (async () => { const __goscriptLiteralField1 = (__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((s$ as replayAwareScope).scope).Gauge(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new replayAwareGauge({isReplay: (s$ as replayAwareScope).isReplay, gauge: __goscriptLiteralField1}) })()), "*metrics.replayAwareGauge", /* @__PURE__ */ $.pointerType("metrics.replayAwareGauge"))
	}

	public async Histogram(name: string, buckets: tally.Buckets | null): globalThis.Promise<tally.Histogram | null> {
		const s: replayAwareScope | $.VarRef<replayAwareScope> | null = this;
		const s$: replayAwareScope = s == null ? $.pointerTarget<replayAwareScope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<replayAwareScope>(s)
		return $.interfaceValue<tally.Histogram | null>((await (async () => { const __goscriptLiteralField2 = (__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((s$ as replayAwareScope).scope).Histogram(name, buckets), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new replayAwareHistogram({isReplay: (s$ as replayAwareScope).isReplay, histogram: __goscriptLiteralField2, clock: (s$ as replayAwareScope).clock}) })()), "*metrics.replayAwareHistogram", /* @__PURE__ */ $.pointerType("metrics.replayAwareHistogram"))
	}

	public async SubScope(name: string): globalThis.Promise<tally.Scope | null> {
		const s: replayAwareScope | $.VarRef<replayAwareScope> | null = this;
		const s$: replayAwareScope = s == null ? $.pointerTarget<replayAwareScope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<replayAwareScope>(s)
		return $.interfaceValue<tally.Scope | null>((await (async () => { const __goscriptLiteralField3 = (__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((s$ as replayAwareScope).scope).SubScope(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new replayAwareScope({isReplay: (s$ as replayAwareScope).isReplay, scope: __goscriptLiteralField3, clock: (s$ as replayAwareScope).clock}) })()), "*metrics.replayAwareScope", /* @__PURE__ */ $.pointerType("metrics.replayAwareScope"))
	}

	public async Tagged(tags: globalThis.Map<string, string> | null): globalThis.Promise<tally.Scope | null> {
		const s: replayAwareScope | $.VarRef<replayAwareScope> | null = this;
		const s$: replayAwareScope = s == null ? $.pointerTarget<replayAwareScope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<replayAwareScope>(s)
		return $.interfaceValue<tally.Scope | null>((await (async () => { const __goscriptLiteralField4 = (__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((s$ as replayAwareScope).scope).Tagged(tags), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new replayAwareScope({isReplay: (s$ as replayAwareScope).isReplay, scope: __goscriptLiteralField4, clock: (s$ as replayAwareScope).clock}) })()), "*metrics.replayAwareScope", /* @__PURE__ */ $.pointerType("metrics.replayAwareScope"))
	}

	public async Timer(name: string): globalThis.Promise<tally.Timer | null> {
		const s: replayAwareScope | $.VarRef<replayAwareScope> | null = this;
		const s$: replayAwareScope = s == null ? $.pointerTarget<replayAwareScope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<replayAwareScope>(s)
		return $.interfaceValue<tally.Timer | null>((await (async () => { const __goscriptLiteralField5 = (__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((s$ as replayAwareScope).scope).Timer(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new replayAwareTimer({isReplay: (s$ as replayAwareScope).isReplay, timer: __goscriptLiteralField5, clock: (s$ as replayAwareScope).clock}) })()), "*metrics.replayAwareTimer", /* @__PURE__ */ $.pointerType("metrics.replayAwareTimer"))
	}

	static __typeInfo = $.registerStructType(
		"metrics.replayAwareScope",
		() => new replayAwareScope(),
		() => [$.methodSignature("Capabilities", [], ["tally.Capabilities"], true), $.methodSignature("Counter", [["name", /* @__PURE__ */ $.basicType("string")]], ["tally.Counter"], true), $.methodSignature("Gauge", [["name", /* @__PURE__ */ $.basicType("string")]], ["tally.Gauge"], true), $.methodSignature("Histogram", [["name", /* @__PURE__ */ $.basicType("string")], ["buckets", "tally.Buckets"]], ["tally.Histogram"], true), $.methodSignature("SubScope", [["name", /* @__PURE__ */ $.basicType("string")]], ["tally.Scope"], true), $.methodSignature("Tagged", [["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]], ["tally.Scope"], true), $.methodSignature("Timer", [["name", /* @__PURE__ */ $.basicType("string")]], ["tally.Timer"], true)],
		replayAwareScope,
		() => [/* @__PURE__ */ $.structField("isReplay", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("scope", "tally.Scope", [1], 8, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("clock", "metrics.Clock", [2], 24, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" })]
	)
}

export class replayAwareCounter {
	public get isReplay(): $.VarRef<boolean> | null {
		return this._fields.isReplay
	}

	public set isReplay(value: $.VarRef<boolean> | null) {
		this._fields.isReplay = value
	}

	public get counter(): tally.Counter | null {
		return this._fields.counter
	}

	public set counter(value: tally.Counter | null) {
		this._fields.counter = value
	}

	public _fields: {
		isReplay: $.VarRef<boolean> | null
		counter: tally.Counter | null
	}

	constructor(init?: Partial<{isReplay?: $.VarRef<boolean> | null, counter?: tally.Counter | null}>, __goscriptValue?: boolean) {
		this._fields = {
			isReplay: init?.isReplay ?? (null! as $.VarRef<boolean> | null),
			counter: init?.counter ?? (null! as tally.Counter | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): replayAwareCounter {
		return new replayAwareCounter(this, true)
	}

	public __goscriptAssign(source: replayAwareCounter): void {
		const target = this._fields
		const values = source._fields
		target.isReplay = values.isReplay
		target.counter = $.assignFieldValue(target.counter, values.counter, "tally.Counter")
	}

	public async Inc(delta: bigint): globalThis.Promise<void> {
		const c: replayAwareCounter | $.VarRef<replayAwareCounter> | null = this;
		const c$: replayAwareCounter = c == null ? $.pointerTarget<replayAwareCounter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<replayAwareCounter>(c)
		if ($.pointerValue<boolean>((c$ as replayAwareCounter).isReplay)) {
			return
		}
		void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((c$ as replayAwareCounter).counter).Inc(delta), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"metrics.replayAwareCounter",
		() => new replayAwareCounter(),
		() => [$.methodSignature("Inc", [["delta", /* @__PURE__ */ $.basicType("int64")]], [], true)],
		replayAwareCounter,
		() => [/* @__PURE__ */ $.structField("isReplay", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("counter", "tally.Counter", [1], 8, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" })]
	)
}

export class replayAwareGauge {
	public get isReplay(): $.VarRef<boolean> | null {
		return this._fields.isReplay
	}

	public set isReplay(value: $.VarRef<boolean> | null) {
		this._fields.isReplay = value
	}

	public get gauge(): tally.Gauge | null {
		return this._fields.gauge
	}

	public set gauge(value: tally.Gauge | null) {
		this._fields.gauge = value
	}

	public _fields: {
		isReplay: $.VarRef<boolean> | null
		gauge: tally.Gauge | null
	}

	constructor(init?: Partial<{isReplay?: $.VarRef<boolean> | null, gauge?: tally.Gauge | null}>, __goscriptValue?: boolean) {
		this._fields = {
			isReplay: init?.isReplay ?? (null! as $.VarRef<boolean> | null),
			gauge: init?.gauge ?? (null! as tally.Gauge | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): replayAwareGauge {
		return new replayAwareGauge(this, true)
	}

	public __goscriptAssign(source: replayAwareGauge): void {
		const target = this._fields
		const values = source._fields
		target.isReplay = values.isReplay
		target.gauge = $.assignFieldValue(target.gauge, values.gauge, "tally.Gauge")
	}

	public async Update(value: number): globalThis.Promise<void> {
		const g: replayAwareGauge | $.VarRef<replayAwareGauge> | null = this;
		const g$: replayAwareGauge = g == null ? $.pointerTarget<replayAwareGauge>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<replayAwareGauge>(g)
		if ($.pointerValue<boolean>((g$ as replayAwareGauge).isReplay)) {
			return
		}
		void (__goscriptAwait = $.pointerValue<Exclude<tally.Gauge, null>>((g$ as replayAwareGauge).gauge).Update(value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"metrics.replayAwareGauge",
		() => new replayAwareGauge(),
		() => [$.methodSignature("Update", [["value", /* @__PURE__ */ $.basicType("float64")]], [], true)],
		replayAwareGauge,
		() => [/* @__PURE__ */ $.structField("isReplay", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("gauge", "tally.Gauge", [1], 8, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" })]
	)
}

export class replayAwareTimer {
	public get isReplay(): $.VarRef<boolean> | null {
		return this._fields.isReplay
	}

	public set isReplay(value: $.VarRef<boolean> | null) {
		this._fields.isReplay = value
	}

	public get timer(): tally.Timer | null {
		return this._fields.timer
	}

	public set timer(value: tally.Timer | null) {
		this._fields.timer = value
	}

	public get clock(): Clock | null {
		return this._fields.clock
	}

	public set clock(value: Clock | null) {
		this._fields.clock = value
	}

	public _fields: {
		isReplay: $.VarRef<boolean> | null
		timer: tally.Timer | null
		clock: Clock | null
	}

	constructor(init?: Partial<{isReplay?: $.VarRef<boolean> | null, timer?: tally.Timer | null, clock?: Clock | null}>, __goscriptValue?: boolean) {
		this._fields = {
			isReplay: init?.isReplay ?? (null! as $.VarRef<boolean> | null),
			timer: init?.timer ?? (null! as tally.Timer | null),
			clock: init?.clock ?? (null! as Clock | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): replayAwareTimer {
		return new replayAwareTimer(this, true)
	}

	public __goscriptAssign(source: replayAwareTimer): void {
		const target = this._fields
		const values = source._fields
		target.isReplay = values.isReplay
		target.timer = $.assignFieldValue(target.timer, values.timer, "tally.Timer")
		target.clock = $.assignFieldValue(target.clock, values.clock, "metrics.Clock")
	}

	public async Record(value: time.Duration): globalThis.Promise<void> {
		const t: replayAwareTimer | $.VarRef<replayAwareTimer> | null = this;
		const t$: replayAwareTimer = t == null ? $.pointerTarget<replayAwareTimer>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<replayAwareTimer>(t)
		if ($.pointerValue<boolean>((t$ as replayAwareTimer).isReplay)) {
			return
		}
		void (__goscriptAwait = $.pointerValue<Exclude<tally.Timer, null>>((t$ as replayAwareTimer).timer).Record(value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async RecordDuration(duration: time.Duration): globalThis.Promise<void> {
		const t: replayAwareTimer | $.VarRef<replayAwareTimer> | null = this;
		await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as replayAwareTimer).Record(duration) : replayAwareTimer.prototype.Record.call(t, duration))
	}

	public async Start(): globalThis.Promise<tally.Stopwatch> {
		const t: replayAwareTimer | $.VarRef<replayAwareTimer> | null = this;
		const t$: replayAwareTimer = t == null ? $.pointerTarget<replayAwareTimer>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<replayAwareTimer>(t)
		return tally.NewStopwatch(((__goscriptAwait = $.pointerValue<Exclude<Clock, null>>((t$ as replayAwareTimer).clock).Now(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time), $.interfaceValue<tally.StopwatchRecorder | null>(new replayAwareStopwatchRecorder({isReplay: (t$ as replayAwareTimer).isReplay, recorder: $.interfaceValue<durationRecorder | null>(t, "*metrics.replayAwareTimer", /* @__PURE__ */ $.pointerType("metrics.replayAwareTimer")), clock: (t$ as replayAwareTimer).clock}), "*metrics.replayAwareStopwatchRecorder", /* @__PURE__ */ $.pointerType("metrics.replayAwareStopwatchRecorder")))
	}

	static __typeInfo = $.registerStructType(
		"metrics.replayAwareTimer",
		() => new replayAwareTimer(),
		() => [$.methodSignature("Record", [["value", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("RecordDuration", [["duration", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("Start", [], ["tally.Stopwatch"], true)],
		replayAwareTimer,
		() => [/* @__PURE__ */ $.structField("isReplay", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("timer", "tally.Timer", [1], 8, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("clock", "metrics.Clock", [2], 24, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" })]
	)
}

export class replayAwareHistogram {
	public get isReplay(): $.VarRef<boolean> | null {
		return this._fields.isReplay
	}

	public set isReplay(value: $.VarRef<boolean> | null) {
		this._fields.isReplay = value
	}

	public get histogram(): tally.Histogram | null {
		return this._fields.histogram
	}

	public set histogram(value: tally.Histogram | null) {
		this._fields.histogram = value
	}

	public get clock(): Clock | null {
		return this._fields.clock
	}

	public set clock(value: Clock | null) {
		this._fields.clock = value
	}

	public _fields: {
		isReplay: $.VarRef<boolean> | null
		histogram: tally.Histogram | null
		clock: Clock | null
	}

	constructor(init?: Partial<{isReplay?: $.VarRef<boolean> | null, histogram?: tally.Histogram | null, clock?: Clock | null}>, __goscriptValue?: boolean) {
		this._fields = {
			isReplay: init?.isReplay ?? (null! as $.VarRef<boolean> | null),
			histogram: init?.histogram ?? (null! as tally.Histogram | null),
			clock: init?.clock ?? (null! as Clock | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): replayAwareHistogram {
		return new replayAwareHistogram(this, true)
	}

	public __goscriptAssign(source: replayAwareHistogram): void {
		const target = this._fields
		const values = source._fields
		target.isReplay = values.isReplay
		target.histogram = $.assignFieldValue(target.histogram, values.histogram, "tally.Histogram")
		target.clock = $.assignFieldValue(target.clock, values.clock, "metrics.Clock")
	}

	public async RecordDuration(value: time.Duration): globalThis.Promise<void> {
		const h: replayAwareHistogram | $.VarRef<replayAwareHistogram> | null = this;
		const h$: replayAwareHistogram = h == null ? $.pointerTarget<replayAwareHistogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<replayAwareHistogram>(h)
		if ($.pointerValue<boolean>((h$ as replayAwareHistogram).isReplay)) {
			return
		}
		void (__goscriptAwait = $.pointerValue<Exclude<tally.Histogram, null>>((h$ as replayAwareHistogram).histogram).RecordDuration(value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async RecordValue(value: number): globalThis.Promise<void> {
		const h: replayAwareHistogram | $.VarRef<replayAwareHistogram> | null = this;
		const h$: replayAwareHistogram = h == null ? $.pointerTarget<replayAwareHistogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<replayAwareHistogram>(h)
		if ($.pointerValue<boolean>((h$ as replayAwareHistogram).isReplay)) {
			return
		}
		void (__goscriptAwait = $.pointerValue<Exclude<tally.Histogram, null>>((h$ as replayAwareHistogram).histogram).RecordValue(value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Start(): globalThis.Promise<tally.Stopwatch> {
		const h: replayAwareHistogram | $.VarRef<replayAwareHistogram> | null = this;
		const h$: replayAwareHistogram = h == null ? $.pointerTarget<replayAwareHistogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<replayAwareHistogram>(h)
		return tally.NewStopwatch(((__goscriptAwait = $.pointerValue<Exclude<Clock, null>>((h$ as replayAwareHistogram).clock).Now(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time), $.interfaceValue<tally.StopwatchRecorder | null>(new replayAwareStopwatchRecorder({isReplay: (h$ as replayAwareHistogram).isReplay, recorder: $.interfaceValue<durationRecorder | null>(h, "*metrics.replayAwareHistogram", /* @__PURE__ */ $.pointerType("metrics.replayAwareHistogram")), clock: (h$ as replayAwareHistogram).clock}), "*metrics.replayAwareStopwatchRecorder", /* @__PURE__ */ $.pointerType("metrics.replayAwareStopwatchRecorder")))
	}

	static __typeInfo = $.registerStructType(
		"metrics.replayAwareHistogram",
		() => new replayAwareHistogram(),
		() => [$.methodSignature("RecordDuration", [["value", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("RecordValue", [["value", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("Start", [], ["tally.Stopwatch"], true)],
		replayAwareHistogram,
		() => [/* @__PURE__ */ $.structField("isReplay", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("histogram", "tally.Histogram", [1], 8, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("clock", "metrics.Clock", [2], 24, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" })]
	)
}

export class replayAwareStopwatchRecorder {
	public get isReplay(): $.VarRef<boolean> | null {
		return this._fields.isReplay
	}

	public set isReplay(value: $.VarRef<boolean> | null) {
		this._fields.isReplay = value
	}

	public get recorder(): durationRecorder | null {
		return this._fields.recorder
	}

	public set recorder(value: durationRecorder | null) {
		this._fields.recorder = value
	}

	public get clock(): Clock | null {
		return this._fields.clock
	}

	public set clock(value: Clock | null) {
		this._fields.clock = value
	}

	public _fields: {
		isReplay: $.VarRef<boolean> | null
		recorder: durationRecorder | null
		clock: Clock | null
	}

	constructor(init?: Partial<{isReplay?: $.VarRef<boolean> | null, recorder?: durationRecorder | null, clock?: Clock | null}>, __goscriptValue?: boolean) {
		this._fields = {
			isReplay: init?.isReplay ?? (null! as $.VarRef<boolean> | null),
			recorder: init?.recorder ?? (null! as durationRecorder | null),
			clock: init?.clock ?? (null! as Clock | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): replayAwareStopwatchRecorder {
		return new replayAwareStopwatchRecorder(this, true)
	}

	public __goscriptAssign(source: replayAwareStopwatchRecorder): void {
		const target = this._fields
		const values = source._fields
		target.isReplay = values.isReplay
		target.recorder = $.assignFieldValue(target.recorder, values.recorder, "metrics.durationRecorder")
		target.clock = $.assignFieldValue(target.clock, values.clock, "metrics.Clock")
	}

	public async RecordStopwatch(stopwatchStart: time.Time): globalThis.Promise<void> {
		const r: replayAwareStopwatchRecorder | $.VarRef<replayAwareStopwatchRecorder> | null = this;
		const r$: replayAwareStopwatchRecorder = r == null ? $.pointerTarget<replayAwareStopwatchRecorder>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<replayAwareStopwatchRecorder>(r)
		if ($.pointerValue<boolean>((r$ as replayAwareStopwatchRecorder).isReplay)) {
			return
		}
		let d = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<Clock, null>>((r$ as replayAwareStopwatchRecorder).clock).Now(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).Sub($.markAsStructValue($.cloneStructValue(stopwatchStart)))
		void (__goscriptAwait = $.pointerValue<Exclude<durationRecorder, null>>((r$ as replayAwareStopwatchRecorder).recorder).RecordDuration(d), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"metrics.replayAwareStopwatchRecorder",
		() => new replayAwareStopwatchRecorder(),
		() => [$.methodSignature("RecordStopwatch", [["stopwatchStart", "time.Time"]], [], true)],
		replayAwareStopwatchRecorder,
		() => [/* @__PURE__ */ $.structField("isReplay", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("recorder", "metrics.durationRecorder", [1], 8, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("clock", "metrics.Clock", [2], 24, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" })]
	)
}

export class TaggedScope {
	public get Scope(): tally.Scope | null {
		return this._fields.Scope
	}

	public set Scope(value: tally.Scope | null) {
		this._fields.Scope = value
	}

	public get Map(): sync.Map | $.VarRef<sync.Map> | null {
		return this._fields.Map
	}

	public set Map(value: sync.Map | $.VarRef<sync.Map> | null) {
		this._fields.Map = value
	}

	public _fields: {
		Scope: tally.Scope | null
		Map: sync.Map | $.VarRef<sync.Map> | null
	}

	constructor(init?: Partial<{Scope?: tally.Scope | null, Map?: sync.Map | $.VarRef<sync.Map> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Scope: init?.Scope ?? (null! as tally.Scope | null),
			Map: init?.Map ?? (null! as sync.Map | $.VarRef<sync.Map> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TaggedScope {
		return new TaggedScope(this, true)
	}

	public __goscriptAssign(source: TaggedScope): void {
		const target = this._fields
		const values = source._fields
		target.Scope = $.assignFieldValue(target.Scope, values.Scope, "tally.Scope")
		target.Map = values.Map
	}

	public async GetTaggedScope(keyValueinPairs: $.Slice<string>): globalThis.Promise<tally.Scope | null> {
		let ts: TaggedScope | $.VarRef<TaggedScope> | null = this;
		const ts$: TaggedScope = ts == null ? $.pointerTarget<TaggedScope>(ts) : (ts as any).__isVarRef === true ? (ts as any).value : (ts as any).__goValue === undefined ? (ts as any) : $.pointerTarget<TaggedScope>(ts)
		if (($.sliceLen(keyValueinPairs) % 2) != 0) {
			$.panic("GetTaggedScope key value are not in pairs")
		}
		if ((ts$ as TaggedScope).Map == null) {
			;(ts$ as TaggedScope).Map = new sync.Map()
		}

		let key = ""
		let tagsMap: globalThis.Map<string, string> | null = $.makeMap<string, string>([])
		for (let __goscriptSliceWindow0 = $.sliceRange(keyValueinPairs), i = 0; i < __goscriptSliceWindow0.length; i = i + (2)) {
			let tagName = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as string)
			let tagValue = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i + 1)] as string)
			key = $.concatString(($.concatString(($.concatString(($.concatString(key, tagName)), ":")), tagValue)), "-")
			$.mapSet(tagsMap, tagName, tagValue)
		}

		let [taggedScope, ok] = await $.pointerValue<sync.Map>((ts$ as TaggedScope).Map).Load(key)
		if (!ok) {
			await $.pointerValue<sync.Map>((ts$ as TaggedScope).Map).Store(key, ((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((ts$ as TaggedScope).Scope).Tagged(tagsMap), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any))
			let __goscriptTuple0: any = await $.pointerValue<sync.Map>((ts$ as TaggedScope).Map).Load(key)
			taggedScope = __goscriptTuple0[0]
		}
		if (taggedScope == null) {
			$.panic("metric scope cannot be tagged")
		}

		return $.mustTypeAssert<tally.Scope | null>(taggedScope, "tally.Scope")
	}

	public async Capabilities(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<tally.Scope | null, null>>(this.Scope).Capabilities()
	}

	public async Counter(name: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<tally.Scope | null, null>>(this.Scope).Counter(name)
	}

	public async Gauge(name: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<tally.Scope | null, null>>(this.Scope).Gauge(name)
	}

	public async Histogram(name: any, buckets: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<tally.Scope | null, null>>(this.Scope).Histogram(name, buckets)
	}

	public async SubScope(name: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<tally.Scope | null, null>>(this.Scope).SubScope(name)
	}

	public async Tagged(tags: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<tally.Scope | null, null>>(this.Scope).Tagged(tags)
	}

	public async Timer(name: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<tally.Scope | null, null>>(this.Scope).Timer(name)
	}

	public Clear(): any {
		return $.pointerValue<sync.Map>(this.Map).Clear()
	}

	public CompareAndDelete(key: any, old: any): any {
		return $.pointerValue<sync.Map>(this.Map).CompareAndDelete(key, old)
	}

	public CompareAndSwap(key: any, old: any, _new: any): any {
		return $.pointerValue<sync.Map>(this.Map).CompareAndSwap(key, old, _new)
	}

	public Delete(key: any): any {
		return $.pointerValue<sync.Map>(this.Map).Delete(key)
	}

	public Load(key: any): any {
		return $.pointerValue<sync.Map>(this.Map).Load(key)
	}

	public LoadAndDelete(key: any): any {
		return $.pointerValue<sync.Map>(this.Map).LoadAndDelete(key)
	}

	public LoadOrStore(key: any, value: any): any {
		return $.pointerValue<sync.Map>(this.Map).LoadOrStore(key, value)
	}

	public Range(f: any): any {
		return $.pointerValue<sync.Map>(this.Map).Range(f)
	}

	public Store(key: any, value: any): any {
		return $.pointerValue<sync.Map>(this.Map).Store(key, value)
	}

	public Swap(key: any, value: any): any {
		return $.pointerValue<sync.Map>(this.Map).Swap(key, value)
	}

	static __typeInfo = $.registerStructType(
		"metrics.TaggedScope",
		() => new TaggedScope(),
		() => [$.methodSignature("GetTaggedScope", [["keyValueinPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["tally.Scope"], true), $.methodSignature("Capabilities", [], ["tally.Capabilities"]), $.methodSignature("Counter", [["name", /* @__PURE__ */ $.basicType("string")]], ["tally.Counter"]), $.methodSignature("Gauge", [["name", /* @__PURE__ */ $.basicType("string")]], ["tally.Gauge"]), $.methodSignature("Histogram", [["name", /* @__PURE__ */ $.basicType("string")], ["buckets", "tally.Buckets"]], ["tally.Histogram"]), $.methodSignature("SubScope", [["name", /* @__PURE__ */ $.basicType("string")]], ["tally.Scope"]), $.methodSignature("Tagged", [["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]], ["tally.Scope"]), $.methodSignature("Timer", [["name", /* @__PURE__ */ $.basicType("string")]], ["tally.Timer"]), $.methodSignature("Clear"), $.methodSignature("CompareAndDelete", [["key", { kind: $.TypeKind.Interface, methods: [] }], ["old", { kind: $.TypeKind.Interface, methods: [] }]], [["deleted", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("CompareAndSwap", [["key", { kind: $.TypeKind.Interface, methods: [] }], ["old", { kind: $.TypeKind.Interface, methods: [] }], ["new", { kind: $.TypeKind.Interface, methods: [] }]], [["swapped", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("Delete", [["key", { kind: $.TypeKind.Interface, methods: [] }]]), $.methodSignature("Load", [["key", { kind: $.TypeKind.Interface, methods: [] }]], [["value", { kind: $.TypeKind.Interface, methods: [] }], ["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("LoadAndDelete", [["key", { kind: $.TypeKind.Interface, methods: [] }]], [["value", { kind: $.TypeKind.Interface, methods: [] }], ["loaded", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("LoadOrStore", [["key", { kind: $.TypeKind.Interface, methods: [] }], ["value", { kind: $.TypeKind.Interface, methods: [] }]], [["actual", { kind: $.TypeKind.Interface, methods: [] }], ["loaded", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("Range", [["f", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]]), $.methodSignature("Store", [["key", { kind: $.TypeKind.Interface, methods: [] }], ["value", { kind: $.TypeKind.Interface, methods: [] }]]), $.methodSignature("Swap", [["key", { kind: $.TypeKind.Interface, methods: [] }], ["value", { kind: $.TypeKind.Interface, methods: [] }]], [["previous", { kind: $.TypeKind.Interface, methods: [] }], ["loaded", /* @__PURE__ */ $.basicType("bool")]])],
		TaggedScope,
		() => [/* @__PURE__ */ $.structField("Scope", "tally.Scope", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Map", /* @__PURE__ */ $.pointerType("sync.Map"), [1], 16, true, { anonymous: true })]
	)
}

export function WrapScope(isReplay: $.VarRef<boolean> | null, scope: tally.Scope | null, clock: Clock | null): tally.Scope | null {
	return $.interfaceValue<tally.Scope | null>(new replayAwareScope({isReplay: isReplay, scope: scope, clock: clock}), "*metrics.replayAwareScope", /* @__PURE__ */ $.pointerType("metrics.replayAwareScope"))
}

export async function NewTaggedScope(scope: tally.Scope | null): globalThis.Promise<TaggedScope | $.VarRef<TaggedScope> | null> {
	if (scope == null) {
		scope = (await tally.__goscript_init_NoopScope(), tally.__goscript_get_NoopScope())
	}
	return new TaggedScope({Scope: scope, Map: new sync.Map()})
}

var __goscriptAwait: any
