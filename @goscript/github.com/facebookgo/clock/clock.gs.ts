// Generated file based on clock.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sort from "@goscript/sort/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sort/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("github.com/facebookgo/clock", ["clock.Clock", "clock.clock", "clock.Mock", "clock.clockTimer", "clock.clockTimers", "clock.Timer", "clock.internalTimer", "clock.Ticker", "clock.internalTicker", "clock.Calls", "clock.waiting"])

export type Clock = {
	After(d: time.Duration): $.Channel<time.Time> | null | globalThis.Promise<$.Channel<time.Time> | null>
	AfterFunc(d: time.Duration, f: (() => void) | null): Timer | $.VarRef<Timer> | null | globalThis.Promise<Timer | $.VarRef<Timer> | null>
	Now(): time.Time | globalThis.Promise<time.Time>
	Sleep(d: time.Duration): void
	Tick(d: time.Duration): $.Channel<time.Time> | null | globalThis.Promise<$.Channel<time.Time> | null>
	Ticker(d: time.Duration): Ticker | $.VarRef<Ticker> | null | globalThis.Promise<Ticker | $.VarRef<Ticker> | null>
	Timer(d: time.Duration): Timer | $.VarRef<Timer> | null | globalThis.Promise<Timer | $.VarRef<Timer> | null>
}

$.registerInterfaceType(
	"clock.Clock",
	null,
	[$.methodSignature("After", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("AfterFunc", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["f", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("clock.Timer")]), $.methodSignature("Now", [], ["time.Time"]), $.methodSignature("Sleep", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]]), $.methodSignature("Tick", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Ticker", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("clock.Ticker")]), $.methodSignature("Timer", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("clock.Timer")])]
);

export type clockTimer = {
	Next(): time.Time
	Tick(_p0: time.Time): void
}

$.registerInterfaceType(
	"clock.clockTimer",
	null,
	[$.methodSignature("Next", [], ["time.Time"]), $.methodSignature("Tick", ["time.Time"])]
);

export type clockTimers = $.Slice<clockTimer | null>

$.registerNamedType("clock.clockTimers", /* @__PURE__ */ $.sliceType("clock.clockTimer"));

$.registerNamedValueType(
	"clock.clockTimers",
	{Len: (receiver: any, ...args: any[]) => (clockTimers_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (clockTimers_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (clockTimers_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*clock.clockTimers",
	{Len: (receiver: any, ...args: any[]) => (clockTimers_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (clockTimers_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (clockTimers_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export class clock {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): clock {
		return new clock(this, true)
	}

	public __goscriptAssign(source: clock): void {
	}

	public After(d: time.Duration): $.Channel<time.Time> | null {
		const c: clock | $.VarRef<clock> | null = this;
		return time.After(d)
	}

	public AfterFunc(d: time.Duration, f: (() => void) | null): Timer | $.VarRef<Timer> | null {
		const c: clock | $.VarRef<clock> | null = this;
		return (() => { const __goscriptLiteralField0 = time.AfterFunc(d, f); return new Timer({timer: __goscriptLiteralField0}) })()
	}

	public Now(): time.Time {
		const c: clock | $.VarRef<clock> | null = this;
		return $.markAsStructValue($.cloneStructValue(time.Now()))
	}

	public async Sleep(d: time.Duration): globalThis.Promise<void> {
		const c: clock | $.VarRef<clock> | null = this;
		await time.Sleep(d)
	}

	public Tick(d: time.Duration): $.Channel<time.Time> | null {
		const c: clock | $.VarRef<clock> | null = this;
		return time.Tick(d)
	}

	public Ticker(d: time.Duration): Ticker | $.VarRef<Ticker> | null {
		const c: clock | $.VarRef<clock> | null = this;
		let t: time.Ticker | $.VarRef<time.Ticker> | null = time.NewTicker(d)
		return new Ticker({C: $.pointerValue<time.Ticker>(t).C, ticker: t})
	}

	public Timer(d: time.Duration): Timer | $.VarRef<Timer> | null {
		const c: clock | $.VarRef<clock> | null = this;
		let t: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer(d)
		return new Timer({C: $.pointerValue<time.Timer>(t).C, timer: t})
	}

	static __typeInfo = $.registerStructType(
		"clock.clock",
		() => new clock(),
		() => [$.methodSignature("After", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.channelType("time.Time", "receive")], true), $.methodSignature("AfterFunc", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["f", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("clock.Timer")], true), $.methodSignature("Now", [], ["time.Time"], true), $.methodSignature("Sleep", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("Tick", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.channelType("time.Time", "receive")], true), $.methodSignature("Ticker", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("clock.Ticker")], true), $.methodSignature("Timer", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("clock.Timer")], true)],
		clock,
		() => []
	)
}

export class Calls {
	public get After(): number {
		return this._fields.After
	}

	public set After(value: number) {
		this._fields.After = value
	}

	public get AfterFunc(): number {
		return this._fields.AfterFunc
	}

	public set AfterFunc(value: number) {
		this._fields.AfterFunc = value
	}

	public get Now(): number {
		return this._fields.Now
	}

	public set Now(value: number) {
		this._fields.Now = value
	}

	public get Sleep(): number {
		return this._fields.Sleep
	}

	public set Sleep(value: number) {
		this._fields.Sleep = value
	}

	public get Tick(): number {
		return this._fields.Tick
	}

	public set Tick(value: number) {
		this._fields.Tick = value
	}

	public get Ticker(): number {
		return this._fields.Ticker
	}

	public set Ticker(value: number) {
		this._fields.Ticker = value
	}

	public get Timer(): number {
		return this._fields.Timer
	}

	public set Timer(value: number) {
		this._fields.Timer = value
	}

	public _fields: {
		After: number
		AfterFunc: number
		Now: number
		Sleep: number
		Tick: number
		Ticker: number
		Timer: number
	}

	constructor(init?: Partial<{After?: number, AfterFunc?: number, Now?: number, Sleep?: number, Tick?: number, Ticker?: number, Timer?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			After: init?.After ?? (0 as number),
			AfterFunc: init?.AfterFunc ?? (0 as number),
			Now: init?.Now ?? (0 as number),
			Sleep: init?.Sleep ?? (0 as number),
			Tick: init?.Tick ?? (0 as number),
			Ticker: init?.Ticker ?? (0 as number),
			Timer: init?.Timer ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Calls {
		return new Calls(this, true)
	}

	public __goscriptAssign(source: Calls): void {
		const target = this._fields
		const values = source._fields
		target.After = values.After
		target.AfterFunc = values.AfterFunc
		target.Now = values.Now
		target.Sleep = values.Sleep
		target.Tick = values.Tick
		target.Ticker = values.Ticker
		target.Timer = values.Timer
	}

	public atLeast(o: Calls): boolean {
		const c = this;
		if (c.After < o.After) {
			return false
		}
		if (c.AfterFunc < o.AfterFunc) {
			return false
		}
		if (c.Now < o.Now) {
			return false
		}
		if (c.Sleep < o.Sleep) {
			return false
		}
		if (c.Tick < o.Tick) {
			return false
		}
		if (c.Ticker < o.Ticker) {
			return false
		}
		if (c.Timer < o.Timer) {
			return false
		}
		return true
	}

	static __typeInfo = $.registerStructType(
		"clock.Calls",
		() => new Calls(),
		() => [$.methodSignature("atLeast", [["o", "clock.Calls"]], [/* @__PURE__ */ $.basicType("bool")])],
		Calls,
		() => [/* @__PURE__ */ $.structField("After", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true), /* @__PURE__ */ $.structField("AfterFunc", /* @__PURE__ */ $.basicType("uint32"), [1], 4, true), /* @__PURE__ */ $.structField("Now", /* @__PURE__ */ $.basicType("uint32"), [2], 8, true), /* @__PURE__ */ $.structField("Sleep", /* @__PURE__ */ $.basicType("uint32"), [3], 12, true), /* @__PURE__ */ $.structField("Tick", /* @__PURE__ */ $.basicType("uint32"), [4], 16, true), /* @__PURE__ */ $.structField("Ticker", /* @__PURE__ */ $.basicType("uint32"), [5], 20, true), /* @__PURE__ */ $.structField("Timer", /* @__PURE__ */ $.basicType("uint32"), [6], 24, true)]
	)
}

export class Mock {
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get now(): time.Time {
		return this._fields.now
	}

	public set now(value: time.Time) {
		this._fields.now = value
	}

	public get timers(): clockTimers {
		return this._fields.timers
	}

	public set timers(value: clockTimers) {
		this._fields.timers = value
	}

	public get calls(): Calls {
		return this._fields.calls
	}

	public set calls(value: Calls) {
		this._fields.calls = value
	}

	public get waiting(): $.Slice<waiting> {
		return this._fields.waiting
	}

	public set waiting(value: $.Slice<waiting>) {
		this._fields.waiting = value
	}

	public get callsMutex(): sync.Mutex {
		return this._fields.callsMutex
	}

	public set callsMutex(value: sync.Mutex) {
		this._fields.callsMutex = value
	}

	public _fields: {
		mu: sync.Mutex
		now: time.Time
		timers: clockTimers
		calls: Calls
		waiting: $.Slice<waiting>
		callsMutex: sync.Mutex
	}

	constructor(init?: Partial<{mu?: sync.Mutex, now?: time.Time, timers?: clockTimers, calls?: Calls, waiting?: $.Slice<waiting>, callsMutex?: sync.Mutex}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			now: init?.now ? $.markAsStructValue($.cloneStructValue(init.now)) : $.markAsStructValue(new time.Time()),
			timers: init?.timers ?? (null! as clockTimers),
			calls: init?.calls ? init.calls.clone() : new Calls(undefined, true),
			waiting: init?.waiting ?? (null! as $.Slice<waiting>),
			callsMutex: init?.callsMutex ? $.markAsStructValue($.cloneStructValue(init.callsMutex)) : $.markAsStructValue(new sync.Mutex())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Mock {
		return new Mock(this, true)
	}

	public __goscriptAssign(source: Mock): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		$.assignStruct(target.now, values.now)
		target.timers = values.timers
		$.assignStruct(target.calls, values.calls)
		target.waiting = values.waiting
		$.assignStruct(target.callsMutex, values.callsMutex)
	}

	public async Add(d: time.Duration): globalThis.Promise<void> {
		let m: Mock | $.VarRef<Mock> | null = this;
		const m$: Mock = m == null ? $.pointerTarget<Mock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mock>(m)
		// Calculate the final current time.
		let t = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((m$ as Mock).now)).Add(d)))

		// Continue to execute timers until there are no more before the new time.
		while (true) {
			if (!await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mock).runNextTimer(t) : Mock.prototype.runNextTimer.call(m, t))) {
				break
			}
		}

		// Ensure that we end with the new time.
		await (m$ as Mock).mu.Lock()
		$.assignStruct((m$ as Mock).now, t)
		void (m$ as Mock).mu.Unlock()

		// Give a small buffer to make sure the other goroutines get handled.
		gosched()
	}

	public async After(d: time.Duration): globalThis.Promise<$.Channel<time.Time> | null> {
		const m: Mock | $.VarRef<Mock> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (addr: $.VarRef<number> | null) => __receiver.inc(addr))($.pointerValue<Mock>(m)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))], results: [] } as $.FunctionTypeInfo), "github.com/facebookgo/clock.(*Mock).inc-fm")
		const __goscriptDeferArg0 = $.fieldRef($.pointerValue<Mock>(m).calls._fields, "After")
		__defer.defer(async () => { await __goscriptDeferCallee0(__goscriptDeferArg0) })
		return $.pointerValue<Timer>(await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mock).Timer(d) : Mock.prototype.Timer.call(m, d))).C
	}

	public async AfterFunc(d: time.Duration, f: (() => void) | null): globalThis.Promise<Timer | $.VarRef<Timer> | null> {
		const m: Mock | $.VarRef<Mock> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => (addr: $.VarRef<number> | null) => __receiver.inc(addr))($.pointerValue<Mock>(m)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))], results: [] } as $.FunctionTypeInfo), "github.com/facebookgo/clock.(*Mock).inc-fm")
		const __goscriptDeferArg1 = $.fieldRef($.pointerValue<Mock>(m).calls._fields, "AfterFunc")
		__defer.defer(async () => { await __goscriptDeferCallee1(__goscriptDeferArg1) })
		let t: Timer | $.VarRef<Timer> | null = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mock).Timer(d) : Mock.prototype.Timer.call(m, d))
		let t$: Timer = t == null ? $.pointerTarget<Timer>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Timer>(t);
		;(t$ as Timer).C = null;
		;(t$ as Timer).fn = f
		return t
	}

	public async Now(): globalThis.Promise<time.Time> {
		const m: Mock | $.VarRef<Mock> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const m$: Mock = m == null ? $.pointerTarget<Mock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mock>(m)
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => (addr: $.VarRef<number> | null) => __receiver.inc(addr))((m$ as Mock)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))], results: [] } as $.FunctionTypeInfo), "github.com/facebookgo/clock.(*Mock).inc-fm")
		const __goscriptDeferArg2 = $.fieldRef((m$ as Mock).calls._fields, "Now")
		__defer.defer(async () => { await __goscriptDeferCallee2(__goscriptDeferArg2) })
		await (m$ as Mock).mu.Lock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as Mock).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })
		return $.markAsStructValue($.cloneStructValue((m$ as Mock).now))
	}

	public async Sleep(d: time.Duration): globalThis.Promise<void> {
		const m: Mock | $.VarRef<Mock> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => (addr: $.VarRef<number> | null) => __receiver.inc(addr))($.pointerValue<Mock>(m)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))], results: [] } as $.FunctionTypeInfo), "github.com/facebookgo/clock.(*Mock).inc-fm")
		const __goscriptDeferArg3 = $.fieldRef($.pointerValue<Mock>(m).calls._fields, "Sleep")
		__defer.defer(async () => { await __goscriptDeferCallee4(__goscriptDeferArg3) })
		await $.chanRecv(await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mock).After(d) : Mock.prototype.After.call(m, d)))
	}

	public async Tick(d: time.Duration): globalThis.Promise<$.Channel<time.Time> | null> {
		const m: Mock | $.VarRef<Mock> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => (addr: $.VarRef<number> | null) => __receiver.inc(addr))($.pointerValue<Mock>(m)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))], results: [] } as $.FunctionTypeInfo), "github.com/facebookgo/clock.(*Mock).inc-fm")
		const __goscriptDeferArg4 = $.fieldRef($.pointerValue<Mock>(m).calls._fields, "Tick")
		__defer.defer(async () => { await __goscriptDeferCallee5(__goscriptDeferArg4) })
		return $.pointerValue<Ticker>(await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Mock).Ticker(d) : Mock.prototype.Ticker.call(m, d))).C
	}

	public async Ticker(d: time.Duration): globalThis.Promise<Ticker | $.VarRef<Ticker> | null> {
		let m: Mock | $.VarRef<Mock> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const m$: Mock = m == null ? $.pointerTarget<Mock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mock>(m)
		const __goscriptDeferCallee6 = $.functionValue(((__receiver) => (addr: $.VarRef<number> | null) => __receiver.inc(addr))((m$ as Mock)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))], results: [] } as $.FunctionTypeInfo), "github.com/facebookgo/clock.(*Mock).inc-fm")
		const __goscriptDeferArg5 = $.fieldRef((m$ as Mock).calls._fields, "Ticker")
		__defer.defer(async () => { await __goscriptDeferCallee6(__goscriptDeferArg5) })
		await (m$ as Mock).mu.Lock()
		const __goscriptDeferCallee7 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as Mock).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee7() })
		let ch: $.Channel<time.Time> | null = $.makeChannel<time.Time>(0, $.markAsStructValue(new time.Time()), "both")
		let t: Ticker | $.VarRef<Ticker> | null = (() => { const __goscriptLiteralField1 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((m$ as Mock).now)).Add(d))); return new Ticker({C: ch, c: ch, mock: m, d: d, next: __goscriptLiteralField1}) })();
		;(m$ as Mock).timers = ($.appendOne(((m$ as Mock).timers as clockTimers), $.interfaceValue<clockTimer | null>($.unsafePointerCast<internalTicker | $.VarRef<internalTicker> | null>(t, internalTicker), "*clock.internalTicker", /* @__PURE__ */ $.pointerType("clock.internalTicker")), $.appendZeros.nil) as clockTimers)
		return t
	}

	public async Timer(d: time.Duration): globalThis.Promise<Timer | $.VarRef<Timer> | null> {
		let m: Mock | $.VarRef<Mock> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const m$: Mock = m == null ? $.pointerTarget<Mock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mock>(m)
		const __goscriptDeferCallee8 = $.functionValue(((__receiver) => (addr: $.VarRef<number> | null) => __receiver.inc(addr))((m$ as Mock)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))], results: [] } as $.FunctionTypeInfo), "github.com/facebookgo/clock.(*Mock).inc-fm")
		const __goscriptDeferArg6 = $.fieldRef((m$ as Mock).calls._fields, "Timer")
		__defer.defer(async () => { await __goscriptDeferCallee8(__goscriptDeferArg6) })
		await (m$ as Mock).mu.Lock()
		const __goscriptDeferCallee9 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as Mock).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee9() })
		let ch: $.Channel<time.Time> | null = $.makeChannel<time.Time>(0, $.markAsStructValue(new time.Time()), "both")
		let t: Timer | $.VarRef<Timer> | null = (() => { const __goscriptLiteralField2 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((m$ as Mock).now)).Add(d))); return new Timer({C: ch, c: ch, mock: m, next: __goscriptLiteralField2}) })();
		;(m$ as Mock).timers = ($.appendOne(((m$ as Mock).timers as clockTimers), $.interfaceValue<clockTimer | null>($.unsafePointerCast<internalTimer | $.VarRef<internalTimer> | null>(t, internalTimer), "*clock.internalTimer", /* @__PURE__ */ $.pointerType("clock.internalTimer")), $.appendZeros.nil) as clockTimers)
		return t
	}

	public async Wait(s: Calls): globalThis.Promise<void> {
		let m: Mock | $.VarRef<Mock> | null = this;
		const m$: Mock = m == null ? $.pointerTarget<Mock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mock>(m)
		await (m$ as Mock).callsMutex.Lock()
		if ((m$ as Mock).calls.atLeast(s)) {
			void (m$ as Mock).callsMutex.Unlock()
			return
		}
		let done: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both");
		;(m$ as Mock).waiting = $.appendOne((m$ as Mock).waiting, new waiting({expected: s, done: done}, true))
		void (m$ as Mock).callsMutex.Unlock()
		await $.chanRecv(done)
	}

	public async inc(addr: $.VarRef<number> | null): globalThis.Promise<void> {
		let m: Mock | $.VarRef<Mock> | null = this;
		using __defer = new $.DisposableStack()
		const m$: Mock = m == null ? $.pointerTarget<Mock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mock>(m)
		await (m$ as Mock).callsMutex.Lock()
		const __goscriptDeferCallee10 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as Mock).callsMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee10() })
		addr!.value++
		let newWaiting: $.Slice<waiting> = null! as $.Slice<waiting>
		for (let __goscriptRangeTarget0 = (m$ as Mock).waiting, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let w = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as waiting)).clone()
			if ((m$ as Mock).calls.atLeast(w.expected)) {
				w.done!.close()
				continue
			}
			newWaiting = $.appendOne(newWaiting, (w).clone())
		}
		;(m$ as Mock).waiting = newWaiting
	}

	public async removeClockTimer(t: clockTimer | null): globalThis.Promise<void> {
		let m: Mock | $.VarRef<Mock> | null = this;
		using __defer = new $.DisposableStack()
		const m$: Mock = m == null ? $.pointerTarget<Mock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mock>(m)
		await (m$ as Mock).mu.Lock()
		const __goscriptDeferCallee11 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as Mock).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee11() })
		for (let __goscriptRangeTarget1 = (m$ as Mock).timers, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let timer = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as clockTimer | null)
			if ($.comparableEqual(timer, t)) {
				$.copy(($.goSlice((m$ as Mock).timers, i, undefined) as clockTimers), ($.goSlice((m$ as Mock).timers, i + 1, undefined) as clockTimers))
				$.sliceElems((m$ as Mock).timers!)[$.sliceSlot((m$ as Mock).timers!, $.sliceLen(((m$ as Mock).timers as clockTimers)) - 1)] = null;
				;(m$ as Mock).timers = ($.goSlice((m$ as Mock).timers, undefined, $.sliceLen(((m$ as Mock).timers as clockTimers)) - 1) as clockTimers)
				break
			}
		}
		await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((m$ as Mock).timers, "clock.clockTimers", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
	}

	public async runNextTimer(max: time.Time): globalThis.Promise<boolean> {
		let m: Mock | $.VarRef<Mock> | null = this;
		const m$: Mock = m == null ? $.pointerTarget<Mock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mock>(m)
		await (m$ as Mock).mu.Lock()

		// Sort timers by time.
		await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((m$ as Mock).timers, "clock.clockTimers", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)

		// If we have no more timers then exit.
		if ($.sliceLen(((m$ as Mock).timers as clockTimers)) == 0) {
			void (m$ as Mock).mu.Unlock()
			return false
		}

		// Retrieve next timer. Exit if next tick is after new time.
		let t = $.arrayIndex((m$ as Mock).timers!, 0)
		if ($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<clockTimer, null>) : $.pointerValue<Exclude<clockTimer, null>>(t)).Next(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).After($.markAsStructValue($.cloneStructValue(max)))) {
			void (m$ as Mock).mu.Unlock()
			return false
		}

		// Move "now" forward and unlock clock.
		$.assignStruct((m$ as Mock).now, ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<clockTimer, null>) : $.pointerValue<Exclude<clockTimer, null>>(t)).Next(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))
		void (m$ as Mock).mu.Unlock()

		// Execute timer.
		void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<clockTimer, null>) : $.pointerValue<Exclude<clockTimer, null>>(t)).Tick($.markAsStructValue($.cloneStructValue((m$ as Mock).now))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return true
	}

	static __typeInfo = $.registerStructType(
		"clock.Mock",
		() => new Mock(),
		() => [$.methodSignature("Add", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("After", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.channelType("time.Time", "receive")], true), $.methodSignature("AfterFunc", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["f", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("clock.Timer")], true), $.methodSignature("Now", [], ["time.Time"], true), $.methodSignature("Sleep", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("Tick", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.channelType("time.Time", "receive")], true), $.methodSignature("Ticker", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("clock.Ticker")], true), $.methodSignature("Timer", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("clock.Timer")], true), $.methodSignature("Wait", [["s", "clock.Calls"]], [], true), $.methodSignature("inc", [["addr", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))]], [], true), $.methodSignature("removeClockTimer", [["t", "clock.clockTimer"]], [], true), $.methodSignature("runNextTimer", [["max", "time.Time"]], [/* @__PURE__ */ $.basicType("bool")], true)],
		Mock,
		() => [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("now", "time.Time", [1], 8, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("timers", /* @__PURE__ */ $.sliceType("clock.clockTimer", "clock.clockTimers"), [2], 32, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("calls", "clock.Calls", [3], 56, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("waiting", /* @__PURE__ */ $.sliceType("clock.waiting"), [4], 88, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("callsMutex", "sync.Mutex", [5], 112, false, { pkgPath: "github.com/facebookgo/clock" })]
	)
}

export class Timer {
	public get C(): $.Channel<time.Time> | null {
		return this._fields.C
	}

	public set C(value: $.Channel<time.Time> | null) {
		this._fields.C = value
	}

	public get c(): $.Channel<time.Time> | null {
		return this._fields.c
	}

	public set c(value: $.Channel<time.Time> | null) {
		this._fields.c = value
	}

	public get timer(): time.Timer | $.VarRef<time.Timer> | null {
		return this._fields.timer
	}

	public set timer(value: time.Timer | $.VarRef<time.Timer> | null) {
		this._fields.timer = value
	}

	public get next(): time.Time {
		return this._fields.next
	}

	public set next(value: time.Time) {
		this._fields.next = value
	}

	public get mock(): Mock | $.VarRef<Mock> | null {
		return this._fields.mock
	}

	public set mock(value: Mock | $.VarRef<Mock> | null) {
		this._fields.mock = value
	}

	public get fn(): (() => void) | null {
		return this._fields.fn
	}

	public set fn(value: (() => void) | null) {
		this._fields.fn = value
	}

	public _fields: {
		C: $.Channel<time.Time> | null
		c: $.Channel<time.Time> | null
		timer: time.Timer | $.VarRef<time.Timer> | null
		next: time.Time
		mock: Mock | $.VarRef<Mock> | null
		fn: (() => void) | null
	}

	constructor(init?: Partial<{C?: $.Channel<time.Time> | null, c?: $.Channel<time.Time> | null, timer?: time.Timer | $.VarRef<time.Timer> | null, next?: time.Time, mock?: Mock | $.VarRef<Mock> | null, fn?: (() => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			C: init?.C ?? (null! as $.Channel<time.Time> | null),
			c: init?.c ?? (null! as $.Channel<time.Time> | null),
			timer: init?.timer ?? (null! as time.Timer | $.VarRef<time.Timer> | null),
			next: init?.next ? $.markAsStructValue($.cloneStructValue(init.next)) : $.markAsStructValue(new time.Time()),
			mock: init?.mock ?? (null! as Mock | $.VarRef<Mock> | null),
			fn: init?.fn ?? (null! as (() => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Timer {
		return new Timer(this, true)
	}

	public __goscriptAssign(source: Timer): void {
		const target = this._fields
		const values = source._fields
		target.C = values.C
		target.c = values.c
		target.timer = values.timer
		$.assignStruct(target.next, values.next)
		target.mock = values.mock
		target.fn = values.fn
	}

	public async Stop(): globalThis.Promise<void> {
		const t: Timer | $.VarRef<Timer> | null = this;
		const t$: Timer = t == null ? $.pointerTarget<Timer>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Timer>(t)
		if ((t$ as Timer).timer != null) {
			time.Timer.prototype.Stop.call($.pointerValue<time.Timer>((t$ as Timer).timer))
		} else {
			await Mock.prototype.removeClockTimer.call((t$ as Timer).mock, $.interfaceValue<clockTimer | null>($.unsafePointerCast<internalTimer | $.VarRef<internalTimer> | null>(t, internalTimer), "*clock.internalTimer", /* @__PURE__ */ $.pointerType("clock.internalTimer")))
		}
	}

	static __typeInfo = $.registerStructType(
		"clock.Timer",
		() => new Timer(),
		() => [$.methodSignature("Stop", [], [], true)],
		Timer,
		() => [/* @__PURE__ */ $.structField("C", /* @__PURE__ */ $.channelType("time.Time", "receive"), [0], 0, true), /* @__PURE__ */ $.structField("c", /* @__PURE__ */ $.channelType("time.Time", "both"), [1], 8, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("timer", /* @__PURE__ */ $.pointerType("time.Timer"), [2], 16, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("next", "time.Time", [3], 24, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("mock", /* @__PURE__ */ $.pointerType("clock.Mock"), [4], 48, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("fn", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [5], 56, false, { pkgPath: "github.com/facebookgo/clock" })]
	)
}

export class internalTimer {
	public get C(): $.Channel<time.Time> | null {
		return this._fields.C
	}

	public set C(value: $.Channel<time.Time> | null) {
		this._fields.C = value
	}

	public get c(): $.Channel<time.Time> | null {
		return this._fields.c
	}

	public set c(value: $.Channel<time.Time> | null) {
		this._fields.c = value
	}

	public get timer(): time.Timer | $.VarRef<time.Timer> | null {
		return this._fields.timer
	}

	public set timer(value: time.Timer | $.VarRef<time.Timer> | null) {
		this._fields.timer = value
	}

	public get next(): time.Time {
		return this._fields.next
	}

	public set next(value: time.Time) {
		this._fields.next = value
	}

	public get mock(): Mock | $.VarRef<Mock> | null {
		return this._fields.mock
	}

	public set mock(value: Mock | $.VarRef<Mock> | null) {
		this._fields.mock = value
	}

	public get fn(): (() => void) | null {
		return this._fields.fn
	}

	public set fn(value: (() => void) | null) {
		this._fields.fn = value
	}

	public _fields: {
		C: $.Channel<time.Time> | null
		c: $.Channel<time.Time> | null
		timer: time.Timer | $.VarRef<time.Timer> | null
		next: time.Time
		mock: Mock | $.VarRef<Mock> | null
		fn: (() => void) | null
	}

	constructor(init?: Partial<{C?: $.Channel<time.Time> | null, c?: $.Channel<time.Time> | null, timer?: time.Timer | $.VarRef<time.Timer> | null, next?: time.Time, mock?: Mock | $.VarRef<Mock> | null, fn?: (() => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			C: init?.C ?? (null! as $.Channel<time.Time> | null),
			c: init?.c ?? (null! as $.Channel<time.Time> | null),
			timer: init?.timer ?? (null! as time.Timer | $.VarRef<time.Timer> | null),
			next: init?.next ? $.markAsStructValue($.cloneStructValue(init.next)) : $.markAsStructValue(new time.Time()),
			mock: init?.mock ?? (null! as Mock | $.VarRef<Mock> | null),
			fn: init?.fn ?? (null! as (() => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): internalTimer {
		return new internalTimer(this, true)
	}

	public __goscriptAssign(source: internalTimer): void {
		const target = this._fields
		const values = source._fields
		target.C = values.C
		target.c = values.c
		target.timer = values.timer
		$.assignStruct(target.next, values.next)
		target.mock = values.mock
		target.fn = values.fn
	}

	public Next(): time.Time {
		const t: internalTimer | $.VarRef<internalTimer> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<internalTimer>(t).next))
	}

	public async Tick(now: time.Time): globalThis.Promise<void> {
		const t: internalTimer | $.VarRef<internalTimer> | null = this;
		const t$: internalTimer = t == null ? $.pointerTarget<internalTimer>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<internalTimer>(t)
		if ((t$ as internalTimer).fn != null) {
			void (__goscriptAwait = (t$ as internalTimer).fn!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			await $.chanSend((t$ as internalTimer).c, $.markAsStructValue($.cloneStructValue(now)))
		}
		await Mock.prototype.removeClockTimer.call((t$ as internalTimer).mock, $.interfaceValue<clockTimer | null>(t, "*clock.internalTimer", /* @__PURE__ */ $.pointerType("clock.internalTimer")))
		gosched()
	}

	static __typeInfo = $.registerStructType(
		"clock.internalTimer",
		() => new internalTimer(),
		() => [$.methodSignature("Next", [], ["time.Time"], true), $.methodSignature("Tick", [["now", "time.Time"]], [], true)],
		internalTimer,
		() => [/* @__PURE__ */ $.structField("C", /* @__PURE__ */ $.channelType("time.Time", "receive"), [0], 0, true), /* @__PURE__ */ $.structField("c", /* @__PURE__ */ $.channelType("time.Time", "both"), [1], 8, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("timer", /* @__PURE__ */ $.pointerType("time.Timer"), [2], 16, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("next", "time.Time", [3], 24, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("mock", /* @__PURE__ */ $.pointerType("clock.Mock"), [4], 48, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("fn", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [5], 56, false, { pkgPath: "github.com/facebookgo/clock" })]
	)
}

export class Ticker {
	public get C(): $.Channel<time.Time> | null {
		return this._fields.C
	}

	public set C(value: $.Channel<time.Time> | null) {
		this._fields.C = value
	}

	public get c(): $.Channel<time.Time> | null {
		return this._fields.c
	}

	public set c(value: $.Channel<time.Time> | null) {
		this._fields.c = value
	}

	public get ticker(): time.Ticker | $.VarRef<time.Ticker> | null {
		return this._fields.ticker
	}

	public set ticker(value: time.Ticker | $.VarRef<time.Ticker> | null) {
		this._fields.ticker = value
	}

	public get next(): time.Time {
		return this._fields.next
	}

	public set next(value: time.Time) {
		this._fields.next = value
	}

	public get mock(): Mock | $.VarRef<Mock> | null {
		return this._fields.mock
	}

	public set mock(value: Mock | $.VarRef<Mock> | null) {
		this._fields.mock = value
	}

	public get d(): time.Duration {
		return this._fields.d
	}

	public set d(value: time.Duration) {
		this._fields.d = value
	}

	public _fields: {
		C: $.Channel<time.Time> | null
		c: $.Channel<time.Time> | null
		ticker: time.Ticker | $.VarRef<time.Ticker> | null
		next: time.Time
		mock: Mock | $.VarRef<Mock> | null
		d: time.Duration
	}

	constructor(init?: Partial<{C?: $.Channel<time.Time> | null, c?: $.Channel<time.Time> | null, ticker?: time.Ticker | $.VarRef<time.Ticker> | null, next?: time.Time, mock?: Mock | $.VarRef<Mock> | null, d?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			C: init?.C ?? (null! as $.Channel<time.Time> | null),
			c: init?.c ?? (null! as $.Channel<time.Time> | null),
			ticker: init?.ticker ?? (null! as time.Ticker | $.VarRef<time.Ticker> | null),
			next: init?.next ? $.markAsStructValue($.cloneStructValue(init.next)) : $.markAsStructValue(new time.Time()),
			mock: init?.mock ?? (null! as Mock | $.VarRef<Mock> | null),
			d: init?.d ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Ticker {
		return new Ticker(this, true)
	}

	public __goscriptAssign(source: Ticker): void {
		const target = this._fields
		const values = source._fields
		target.C = values.C
		target.c = values.c
		target.ticker = values.ticker
		$.assignStruct(target.next, values.next)
		target.mock = values.mock
		target.d = values.d
	}

	public async Stop(): globalThis.Promise<void> {
		const t: Ticker | $.VarRef<Ticker> | null = this;
		const t$: Ticker = t == null ? $.pointerTarget<Ticker>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Ticker>(t)
		if ((t$ as Ticker).ticker != null) {
			time.Ticker.prototype.Stop.call($.pointerValue<time.Ticker>((t$ as Ticker).ticker))
		} else {
			await Mock.prototype.removeClockTimer.call((t$ as Ticker).mock, $.interfaceValue<clockTimer | null>($.unsafePointerCast<internalTicker | $.VarRef<internalTicker> | null>(t, internalTicker), "*clock.internalTicker", /* @__PURE__ */ $.pointerType("clock.internalTicker")))
		}
	}

	static __typeInfo = $.registerStructType(
		"clock.Ticker",
		() => new Ticker(),
		() => [$.methodSignature("Stop", [], [], true)],
		Ticker,
		() => [/* @__PURE__ */ $.structField("C", /* @__PURE__ */ $.channelType("time.Time", "receive"), [0], 0, true), /* @__PURE__ */ $.structField("c", /* @__PURE__ */ $.channelType("time.Time", "both"), [1], 8, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("ticker", /* @__PURE__ */ $.pointerType("time.Ticker"), [2], 16, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("next", "time.Time", [3], 24, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("mock", /* @__PURE__ */ $.pointerType("clock.Mock"), [4], 48, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("d", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [5], 56, false, { pkgPath: "github.com/facebookgo/clock" })]
	)
}

export class internalTicker {
	public get C(): $.Channel<time.Time> | null {
		return this._fields.C
	}

	public set C(value: $.Channel<time.Time> | null) {
		this._fields.C = value
	}

	public get c(): $.Channel<time.Time> | null {
		return this._fields.c
	}

	public set c(value: $.Channel<time.Time> | null) {
		this._fields.c = value
	}

	public get ticker(): time.Ticker | $.VarRef<time.Ticker> | null {
		return this._fields.ticker
	}

	public set ticker(value: time.Ticker | $.VarRef<time.Ticker> | null) {
		this._fields.ticker = value
	}

	public get next(): time.Time {
		return this._fields.next
	}

	public set next(value: time.Time) {
		this._fields.next = value
	}

	public get mock(): Mock | $.VarRef<Mock> | null {
		return this._fields.mock
	}

	public set mock(value: Mock | $.VarRef<Mock> | null) {
		this._fields.mock = value
	}

	public get d(): time.Duration {
		return this._fields.d
	}

	public set d(value: time.Duration) {
		this._fields.d = value
	}

	public _fields: {
		C: $.Channel<time.Time> | null
		c: $.Channel<time.Time> | null
		ticker: time.Ticker | $.VarRef<time.Ticker> | null
		next: time.Time
		mock: Mock | $.VarRef<Mock> | null
		d: time.Duration
	}

	constructor(init?: Partial<{C?: $.Channel<time.Time> | null, c?: $.Channel<time.Time> | null, ticker?: time.Ticker | $.VarRef<time.Ticker> | null, next?: time.Time, mock?: Mock | $.VarRef<Mock> | null, d?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			C: init?.C ?? (null! as $.Channel<time.Time> | null),
			c: init?.c ?? (null! as $.Channel<time.Time> | null),
			ticker: init?.ticker ?? (null! as time.Ticker | $.VarRef<time.Ticker> | null),
			next: init?.next ? $.markAsStructValue($.cloneStructValue(init.next)) : $.markAsStructValue(new time.Time()),
			mock: init?.mock ?? (null! as Mock | $.VarRef<Mock> | null),
			d: init?.d ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): internalTicker {
		return new internalTicker(this, true)
	}

	public __goscriptAssign(source: internalTicker): void {
		const target = this._fields
		const values = source._fields
		target.C = values.C
		target.c = values.c
		target.ticker = values.ticker
		$.assignStruct(target.next, values.next)
		target.mock = values.mock
		target.d = values.d
	}

	public Next(): time.Time {
		const t: internalTicker | $.VarRef<internalTicker> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<internalTicker>(t).next))
	}

	public async Tick(now: time.Time): globalThis.Promise<void> {
		let t: internalTicker | $.VarRef<internalTicker> | null = this;
		const t$: internalTicker = t == null ? $.pointerTarget<internalTicker>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<internalTicker>(t)
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
			{
				id: 0,
				isSend: true,
				channel: (t$ as internalTicker).c,
				value: now,
			},
			{
				id: 1,
				isSend: false,
				channel: time.After(1000000n),
			}
		], false)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
		$.assignStruct((t$ as internalTicker).next, $.markAsStructValue($.cloneStructValue(now)).Add((t$ as internalTicker).d))
		gosched()
	}

	static __typeInfo = $.registerStructType(
		"clock.internalTicker",
		() => new internalTicker(),
		() => [$.methodSignature("Next", [], ["time.Time"], true), $.methodSignature("Tick", [["now", "time.Time"]], [], true)],
		internalTicker,
		() => [/* @__PURE__ */ $.structField("C", /* @__PURE__ */ $.channelType("time.Time", "receive"), [0], 0, true), /* @__PURE__ */ $.structField("c", /* @__PURE__ */ $.channelType("time.Time", "both"), [1], 8, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("ticker", /* @__PURE__ */ $.pointerType("time.Ticker"), [2], 16, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("next", "time.Time", [3], 24, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("mock", /* @__PURE__ */ $.pointerType("clock.Mock"), [4], 48, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("d", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [5], 56, false, { pkgPath: "github.com/facebookgo/clock" })]
	)
}

export class waiting {
	public get expected(): Calls {
		return this._fields.expected
	}

	public set expected(value: Calls) {
		this._fields.expected = value
	}

	public get done(): $.Channel<{}> | null {
		return this._fields.done
	}

	public set done(value: $.Channel<{}> | null) {
		this._fields.done = value
	}

	public _fields: {
		expected: Calls
		done: $.Channel<{}> | null
	}

	constructor(init?: Partial<{expected?: Calls, done?: $.Channel<{}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			expected: init?.expected ? init.expected.clone() : new Calls(undefined, true),
			done: init?.done ?? (null! as $.Channel<{}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): waiting {
		return new waiting(this, true)
	}

	public __goscriptAssign(source: waiting): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.expected, values.expected)
		target.done = values.done
	}

	static __typeInfo = $.registerStructType(
		"clock.waiting",
		() => new waiting(),
		() => [],
		waiting,
		() => [/* @__PURE__ */ $.structField("expected", "clock.Calls", [0], 0, false, { pkgPath: "github.com/facebookgo/clock" }), /* @__PURE__ */ $.structField("done", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [1], 32, false, { pkgPath: "github.com/facebookgo/clock" })]
	)
}

export function New(): Clock | null {
	return $.interfaceValue<Clock | null>(new clock(), "*clock.clock", /* @__PURE__ */ $.pointerType("clock.clock"))
}

export function NewMock(): Mock | $.VarRef<Mock> | null {
	return (() => { const __goscriptLiteralField3 = $.markAsStructValue($.cloneStructValue(time.Unix(0n, 0n))); return new Mock({now: __goscriptLiteralField3}) })()
}

export function clockTimers_Len(a: clockTimers): number {
	return $.sliceLen((a as clockTimers))
}

export function clockTimers_Swap(a: clockTimers, i: number, j: number): void {
	let __goscriptAssign0_0: clockTimer | null = $.arrayIndex(a!, j)
	let __goscriptAssign0_1: clockTimer | null = $.arrayIndex(a!, i)
	$.sliceElems(a!)[$.sliceSlot(a!, i)] = __goscriptAssign0_0
	$.sliceElems(a!)[$.sliceSlot(a!, j)] = __goscriptAssign0_1
}

export async function clockTimers_Less(a: clockTimers, i: number, j: number): globalThis.Promise<boolean> {
	return $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<clockTimer, null>>($.arrayIndex(a!, i)).Next(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).Before($.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<clockTimer, null>>($.arrayIndex(a!, j)).Next(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))))
}

export function gosched(): void {
	runtime.Gosched()
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (clockTimers_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (clockTimers_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (clockTimers_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType("clock.clockTimer", "clock.clockTimers"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptAwait: any
