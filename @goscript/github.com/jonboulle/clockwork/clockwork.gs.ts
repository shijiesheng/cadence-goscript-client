// Generated file based on clockwork.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as sort from "@goscript/sort/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time2 from "@goscript/time/index.js"

import * as __goscript_ticker from "./ticker.gs.ts"

import * as __goscript_timer from "./timer.gs.ts"
import "@goscript/context/index.js"
import "@goscript/sort/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./ticker.gs.ts"
import "./timer.gs.ts"

$.registerTypePackagePath("github.com/jonboulle/clockwork", ["clockwork.Clock", "clockwork.FakeClock", "clockwork.realClock", "clockwork.fakeClock", "clockwork.blocker", "clockwork.expirer", "clockwork.firer"])

export type Clock = {
	After(d: time2.Duration): $.Channel<time2.Time> | null | globalThis.Promise<$.Channel<time2.Time> | null>
	AfterFunc(d: time2.Duration, f: (() => void) | null): __goscript_timer.Timer | null | globalThis.Promise<__goscript_timer.Timer | null>
	NewTicker(d: time2.Duration): __goscript_ticker.Ticker | null | globalThis.Promise<__goscript_ticker.Ticker | null>
	NewTimer(d: time2.Duration): __goscript_timer.Timer | null | globalThis.Promise<__goscript_timer.Timer | null>
	Now(): time2.Time | globalThis.Promise<time2.Time>
	Since(t: time2.Time): time2.Duration | globalThis.Promise<time2.Duration>
	Sleep(d: time2.Duration): void
}

$.registerInterfaceType(
	"clockwork.Clock",
	null,
	[$.methodSignature("After", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("AfterFunc", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["f", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], ["clockwork.Timer"]), $.methodSignature("NewTicker", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["clockwork.Ticker"]), $.methodSignature("NewTimer", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["clockwork.Timer"]), $.methodSignature("Now", [], ["time.Time"]), $.methodSignature("Since", [["t", "time.Time"]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Sleep", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]])]
);

export type FakeClock = {
	Advance(d: time2.Duration): void
	After(d: time2.Duration): $.Channel<time2.Time> | null | globalThis.Promise<$.Channel<time2.Time> | null>
	AfterFunc(d: time2.Duration, f: (() => void) | null): __goscript_timer.Timer | null | globalThis.Promise<__goscript_timer.Timer | null>
	BlockUntil(waiters: number): void
	NewTicker(d: time2.Duration): __goscript_ticker.Ticker | null | globalThis.Promise<__goscript_ticker.Ticker | null>
	NewTimer(d: time2.Duration): __goscript_timer.Timer | null | globalThis.Promise<__goscript_timer.Timer | null>
	Now(): time2.Time | globalThis.Promise<time2.Time>
	Since(t: time2.Time): time2.Duration | globalThis.Promise<time2.Duration>
	Sleep(d: time2.Duration): void
}

$.registerInterfaceType(
	"clockwork.FakeClock",
	null,
	[$.methodSignature("Advance", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]]), $.methodSignature("After", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("AfterFunc", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["f", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], ["clockwork.Timer"]), $.methodSignature("BlockUntil", [["waiters", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("NewTicker", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["clockwork.Ticker"]), $.methodSignature("NewTimer", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["clockwork.Timer"]), $.methodSignature("Now", [], ["time.Time"]), $.methodSignature("Since", [["t", "time.Time"]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Sleep", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]])]
);

export type expirer = {
	expire(now: time2.Time): $.VarRef<time2.Duration> | null | globalThis.Promise<$.VarRef<time2.Duration> | null>
	expiry(): time2.Time
	setExpiry(_p0: time2.Time): void
}

$.registerInterfaceType(
	"clockwork.expirer",
	null,
	[$.methodSignature("expire", [["now", "time.Time"]], [["next", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))]]), $.methodSignature("expiry", [], ["time.Time"]), $.methodSignature("setExpiry", ["time.Time"])]
);

export class realClock {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): realClock {
		return new realClock(this, true)
	}

	public __goscriptAssign(source: realClock): void {
	}

	public After(d: time2.Duration): $.Channel<time2.Time> | null {
		const rc: realClock | $.VarRef<realClock> | null = this;
		return time2.After(d)
	}

	public AfterFunc(d: time2.Duration, f: (() => void) | null): __goscript_timer.Timer | null {
		const rc: realClock | $.VarRef<realClock> | null = this;
		return $.interfaceValue<__goscript_timer.Timer | null>((() => { const __goscriptLiteralField0 = time2.AfterFunc(d, f); return new __goscript_timer.realTimer({Timer: __goscriptLiteralField0}, true) })(), "clockwork.realTimer", "clockwork.realTimer")
	}

	public NewTicker(d: time2.Duration): __goscript_ticker.Ticker | null {
		const rc: realClock | $.VarRef<realClock> | null = this;
		return $.interfaceValue<__goscript_ticker.Ticker | null>((() => { const __goscriptLiteralField1 = time2.NewTicker(d); return new __goscript_ticker.realTicker({Ticker: __goscriptLiteralField1}, true) })(), "clockwork.realTicker", "clockwork.realTicker")
	}

	public NewTimer(d: time2.Duration): __goscript_timer.Timer | null {
		const rc: realClock | $.VarRef<realClock> | null = this;
		return $.interfaceValue<__goscript_timer.Timer | null>((() => { const __goscriptLiteralField2 = time2.NewTimer(d); return new __goscript_timer.realTimer({Timer: __goscriptLiteralField2}, true) })(), "clockwork.realTimer", "clockwork.realTimer")
	}

	public Now(): time2.Time {
		const rc: realClock | $.VarRef<realClock> | null = this;
		return $.markAsStructValue($.cloneStructValue(time2.Now()))
	}

	public Since(t: time2.Time): time2.Duration {
		const rc: realClock | $.VarRef<realClock> | null = this;
		return $.markAsStructValue($.cloneStructValue((rc !== null && (rc as any).__isVarRef !== true && (rc as any).__goValue === undefined ? ((rc as any) as realClock).Now() : realClock.prototype.Now.call(rc)))).Sub($.markAsStructValue($.cloneStructValue(t)))
	}

	public async Sleep(d: time2.Duration): globalThis.Promise<void> {
		const rc: realClock | $.VarRef<realClock> | null = this;
		await time2.Sleep(d)
	}

	static __typeInfo = $.registerStructType(
		"clockwork.realClock",
		() => new realClock(),
		() => [$.methodSignature("After", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.channelType("time.Time", "receive")], true), $.methodSignature("AfterFunc", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["f", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], ["clockwork.Timer"], true), $.methodSignature("NewTicker", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["clockwork.Ticker"], true), $.methodSignature("NewTimer", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["clockwork.Timer"], true), $.methodSignature("Now", [], ["time.Time"], true), $.methodSignature("Since", [["t", "time.Time"]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("Sleep", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true)],
		realClock,
		() => []
	)
}

export class fakeClock {
	// l protects all attributes of the clock, including all attributes of all
	// waiters and blockers.
	public get l(): sync.RWMutex {
		return this._fields.l
	}

	public set l(value: sync.RWMutex) {
		this._fields.l = value
	}

	public get waiters(): $.Slice<expirer | null> {
		return this._fields.waiters
	}

	public set waiters(value: $.Slice<expirer | null>) {
		this._fields.waiters = value
	}

	public get blockers(): $.Slice<blocker | $.VarRef<blocker> | null> {
		return this._fields.blockers
	}

	public set blockers(value: $.Slice<blocker | $.VarRef<blocker> | null>) {
		this._fields.blockers = value
	}

	public get time(): time2.Time {
		return this._fields.time
	}

	public set time(value: time2.Time) {
		this._fields.time = value
	}

	public _fields: {
		l: sync.RWMutex
		waiters: $.Slice<expirer | null>
		blockers: $.Slice<blocker | $.VarRef<blocker> | null>
		time: time2.Time
	}

	constructor(init?: Partial<{l?: sync.RWMutex, waiters?: $.Slice<expirer | null>, blockers?: $.Slice<blocker | $.VarRef<blocker> | null>, time?: time2.Time}>, __goscriptValue?: boolean) {
		this._fields = {
			l: init?.l ? $.markAsStructValue($.cloneStructValue(init.l)) : $.markAsStructValue(new sync.RWMutex()),
			waiters: init?.waiters ?? (null! as $.Slice<expirer | null>),
			blockers: init?.blockers ?? (null! as $.Slice<blocker | $.VarRef<blocker> | null>),
			time: init?.time ? $.markAsStructValue($.cloneStructValue(init.time)) : $.markAsStructValue(new time2.Time())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): fakeClock {
		return new fakeClock(this, true)
	}

	public __goscriptAssign(source: fakeClock): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.l, values.l)
		target.waiters = values.waiters
		target.blockers = values.blockers
		$.assignStruct(target.time, values.time)
	}

	public async Advance(d: time2.Duration): globalThis.Promise<void> {
		let fc: fakeClock | $.VarRef<fakeClock> | null = this;
		using __defer = new $.DisposableStack()
		const fc$: fakeClock = fc == null ? $.pointerTarget<fakeClock>(fc) : (fc as any).__isVarRef === true ? (fc as any).value : (fc as any).__goValue === undefined ? (fc as any) : $.pointerTarget<fakeClock>(fc)
		await (fc$ as fakeClock).l.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((fc$ as fakeClock).l), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		let end = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((fc$ as fakeClock).time)).Add(d)))
		// Expire the earliest waiter until the earliest waiter's expiration is after
		// end.
		//
		// We don't iterate because the callback of the waiter might register a new
		// waiter, so the list of waiters might change as we execute this.
		while (($.sliceLen((fc$ as fakeClock).waiters) > 0) && !$.markAsStructValue($.cloneStructValue(end)).Before($.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<expirer, null>>($.arrayIndex((fc$ as fakeClock).waiters!, 0)).expiry(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time2.Time))))) {
			let w = $.arrayIndex((fc$ as fakeClock).waiters!, 0);
			;(fc$ as fakeClock).waiters = $.goSlice((fc$ as fakeClock).waiters, 1, undefined)

			// Use the waiter's expriation as the current time for this expiration.
			let now = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<expirer, null>) : $.pointerValue<Exclude<expirer, null>>(w)).expiry(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time2.Time)))
			$.assignStruct((fc$ as fakeClock).time, now)
			{
				let __goscriptShadow0: $.VarRef<time2.Duration> | null = ((__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<expirer, null>) : $.pointerValue<Exclude<expirer, null>>(w)).expire($.markAsStructValue($.cloneStructValue(now))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<time2.Duration> | null)
				if (__goscriptShadow0 != null) {
					// Set the new exipration if needed.
					await (fc !== null && (fc as any).__isVarRef !== true && (fc as any).__goValue === undefined ? ((fc as any) as fakeClock).setExpirer(w, $.pointerValue<time2.Duration>(__goscriptShadow0)) : fakeClock.prototype.setExpirer.call(fc, w, $.pointerValue<time2.Duration>(__goscriptShadow0)))
				}
			}
		}
		$.assignStruct((fc$ as fakeClock).time, end)
	}

	public async After(d: time2.Duration): globalThis.Promise<$.Channel<time2.Time> | null> {
		const fc: fakeClock | $.VarRef<fakeClock> | null = this;
		return $.pointerValue<Exclude<__goscript_timer.Timer, null>>((await (fc !== null && (fc as any).__isVarRef !== true && (fc as any).__goValue === undefined ? ((fc as any) as fakeClock).NewTimer(d) : fakeClock.prototype.NewTimer.call(fc, d)))).Chan()
	}

	public async AfterFunc(d: time2.Duration, f: (() => void) | null): globalThis.Promise<__goscript_timer.Timer | null> {
		const fc: fakeClock | $.VarRef<fakeClock> | null = this;
		return $.interfaceValue<__goscript_timer.Timer | null>(await (fc !== null && (fc as any).__isVarRef !== true && (fc as any).__goValue === undefined ? ((fc as any) as fakeClock).newTimer(d, f) : fakeClock.prototype.newTimer.call(fc, d, f)), "*clockwork.fakeTimer", /* @__PURE__ */ $.pointerType("clockwork.fakeTimer"))
	}

	public async BlockUntil(n: number): globalThis.Promise<void> {
		const fc: fakeClock | $.VarRef<fakeClock> | null = this;
		let b: blocker | $.VarRef<blocker> | null = await (fc !== null && (fc as any).__isVarRef !== true && (fc as any).__goValue === undefined ? ((fc as any) as fakeClock).newBlocker(n) : fakeClock.prototype.newBlocker.call(fc, n))
		if (b == null) {
			return
		}
		await $.chanRecv($.pointerValue<blocker>(b).ch)
	}

	public async BlockUntilContext(ctx: context.Context | null, n: number): globalThis.Promise<$.GoError> {
		const fc: fakeClock | $.VarRef<fakeClock> | null = this;
		let b: blocker | $.VarRef<blocker> | null = await (fc !== null && (fc as any).__isVarRef !== true && (fc as any).__goValue === undefined ? ((fc as any) as fakeClock).newBlocker(n) : fakeClock.prototype.newBlocker.call(fc, n))
		if (b == null) {
			return null
		}

		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: false,
				channel: $.pointerValue<blocker>(b).ch,
				onSelected: async (__goscriptSelect0Result) => {
					return null
				}
			},
			{
				id: 1,
				isSend: false,
				channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect0Result) => {
					return (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err()
				}
			}
		], false)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async NewTicker(d: time2.Duration): globalThis.Promise<__goscript_ticker.Ticker | null> {
		const fc: fakeClock | $.VarRef<fakeClock> | null = this;
		let ft: __goscript_ticker.fakeTicker | $.VarRef<__goscript_ticker.fakeTicker> | null = null! as __goscript_ticker.fakeTicker | $.VarRef<__goscript_ticker.fakeTicker> | null
		ft = (await (async () => { const __goscriptLiteralField3 = newFirer(); return new __goscript_ticker.fakeTicker({firer: __goscriptLiteralField3, d: d, reset: $.functionValue(async (d: time2.Duration): globalThis.Promise<void> => {
			await (fc !== null && (fc as any).__isVarRef !== true && (fc as any).__goValue === undefined ? ((fc as any) as fakeClock)["set"]($.interfaceValue<expirer | null>(ft, "*clockwork.fakeTicker", /* @__PURE__ */ $.pointerType("clockwork.fakeTicker")), d) : fakeClock.prototype.set.call(fc, $.interfaceValue<expirer | null>(ft, "*clockwork.fakeTicker", /* @__PURE__ */ $.pointerType("clockwork.fakeTicker")), d))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int64", "time.Duration")], results: [] } as $.FunctionTypeInfo)), stop: $.functionValue(async (): globalThis.Promise<void> => {
			await (fc !== null && (fc as any).__isVarRef !== true && (fc as any).__goValue === undefined ? ((fc as any) as fakeClock).stop($.interfaceValue<expirer | null>(ft, "*clockwork.fakeTicker", /* @__PURE__ */ $.pointerType("clockwork.fakeTicker"))) : fakeClock.prototype.stop.call(fc, $.interfaceValue<expirer | null>(ft, "*clockwork.fakeTicker", /* @__PURE__ */ $.pointerType("clockwork.fakeTicker"))))
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))}) })())
		await (fc !== null && (fc as any).__isVarRef !== true && (fc as any).__goValue === undefined ? ((fc as any) as fakeClock)["set"]($.interfaceValue<expirer | null>(ft, "*clockwork.fakeTicker", /* @__PURE__ */ $.pointerType("clockwork.fakeTicker")), d) : fakeClock.prototype.set.call(fc, $.interfaceValue<expirer | null>(ft, "*clockwork.fakeTicker", /* @__PURE__ */ $.pointerType("clockwork.fakeTicker")), d))
		return $.interfaceValue<__goscript_ticker.Ticker | null>(ft, "*clockwork.fakeTicker", /* @__PURE__ */ $.pointerType("clockwork.fakeTicker"))
	}

	public async NewTimer(d: time2.Duration): globalThis.Promise<__goscript_timer.Timer | null> {
		const fc: fakeClock | $.VarRef<fakeClock> | null = this;
		return $.interfaceValue<__goscript_timer.Timer | null>(await (fc !== null && (fc as any).__isVarRef !== true && (fc as any).__goValue === undefined ? ((fc as any) as fakeClock).newTimer(d, (null as (() => void) | null)) : fakeClock.prototype.newTimer.call(fc, d, (null as (() => void) | null))), "*clockwork.fakeTimer", /* @__PURE__ */ $.pointerType("clockwork.fakeTimer"))
	}

	public async Now(): globalThis.Promise<time2.Time> {
		const fc: fakeClock | $.VarRef<fakeClock> | null = this;
		using __defer = new $.DisposableStack()
		const fc$: fakeClock = fc == null ? $.pointerTarget<fakeClock>(fc) : (fc as any).__isVarRef === true ? (fc as any).value : (fc as any).__goValue === undefined ? (fc as any) : $.pointerTarget<fakeClock>(fc)
		await (fc$ as fakeClock).l.RLock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((fc$ as fakeClock).l), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		return $.markAsStructValue($.cloneStructValue((fc$ as fakeClock).time))
	}

	public async Since(t: time2.Time): globalThis.Promise<time2.Duration> {
		const fc: fakeClock | $.VarRef<fakeClock> | null = this;
		return $.markAsStructValue($.cloneStructValue((await (fc !== null && (fc as any).__isVarRef !== true && (fc as any).__goValue === undefined ? ((fc as any) as fakeClock).Now() : fakeClock.prototype.Now.call(fc))))).Sub($.markAsStructValue($.cloneStructValue(t)))
	}

	public async Sleep(d: time2.Duration): globalThis.Promise<void> {
		const fc: fakeClock | $.VarRef<fakeClock> | null = this;
		await $.chanRecv(await (fc !== null && (fc as any).__isVarRef !== true && (fc as any).__goValue === undefined ? ((fc as any) as fakeClock).After(d) : fakeClock.prototype.After.call(fc, d)))
	}

	public async newBlocker(n: number): globalThis.Promise<blocker | $.VarRef<blocker> | null> {
		let fc: fakeClock | $.VarRef<fakeClock> | null = this;
		using __defer = new $.DisposableStack()
		const fc$: fakeClock = fc == null ? $.pointerTarget<fakeClock>(fc) : (fc as any).__isVarRef === true ? (fc as any).value : (fc as any).__goValue === undefined ? (fc as any) : $.pointerTarget<fakeClock>(fc)
		await (fc$ as fakeClock).l.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((fc$ as fakeClock).l), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
		// Fast path: we already have >= n waiters.
		if ($.sliceLen((fc$ as fakeClock).waiters) >= n) {
			return null
		}
		// Set up a new blocker to wait for more waiters.
		let b: blocker | $.VarRef<blocker> | null = new blocker({count: n, ch: $.makeChannel<{}>(0, {}, "both")});
		;(fc$ as fakeClock).blockers = $.appendOne((fc$ as fakeClock).blockers, b, $.appendZeros.nil)
		return b
	}

	public async newTimer(d: time2.Duration, afterfunc: (() => void) | null): globalThis.Promise<__goscript_timer.fakeTimer | $.VarRef<__goscript_timer.fakeTimer> | null> {
		const fc: fakeClock | $.VarRef<fakeClock> | null = this;
		const fc$: fakeClock = fc == null ? $.pointerTarget<fakeClock>(fc) : (fc as any).__isVarRef === true ? (fc as any).value : (fc as any).__goValue === undefined ? (fc as any) : $.pointerTarget<fakeClock>(fc)
		let ft: __goscript_timer.fakeTimer | $.VarRef<__goscript_timer.fakeTimer> | null = null! as __goscript_timer.fakeTimer | $.VarRef<__goscript_timer.fakeTimer> | null
		ft = (await (async () => { const __goscriptLiteralField4 = newFirer(); return new __goscript_timer.fakeTimer({firer: __goscriptLiteralField4, reset: $.functionValue(async (d: time2.Duration): globalThis.Promise<boolean> => {
			using __defer = new $.DisposableStack()
			await (fc$ as fakeClock).l.Lock()
			const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((fc$ as fakeClock).l), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee3() })
			// fc.l must be held across the calls to stopExpirer & setExpirer.
			let stopped = (fc !== null && (fc as any).__isVarRef !== true && (fc as any).__goValue === undefined ? ((fc as any) as fakeClock).stopExpirer($.interfaceValue<expirer | null>(ft, "*clockwork.fakeTimer", /* @__PURE__ */ $.pointerType("clockwork.fakeTimer"))) : fakeClock.prototype.stopExpirer.call(fc, $.interfaceValue<expirer | null>(ft, "*clockwork.fakeTimer", /* @__PURE__ */ $.pointerType("clockwork.fakeTimer"))))
			await (fc !== null && (fc as any).__isVarRef !== true && (fc as any).__goValue === undefined ? ((fc as any) as fakeClock).setExpirer($.interfaceValue<expirer | null>(ft, "*clockwork.fakeTimer", /* @__PURE__ */ $.pointerType("clockwork.fakeTimer")), d) : fakeClock.prototype.setExpirer.call(fc, $.interfaceValue<expirer | null>(ft, "*clockwork.fakeTimer", /* @__PURE__ */ $.pointerType("clockwork.fakeTimer")), d))
			return stopped
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int64", "time.Duration")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)), stop: $.functionValue(async (): globalThis.Promise<boolean> => {
			return await (fc !== null && (fc as any).__isVarRef !== true && (fc as any).__goValue === undefined ? ((fc as any) as fakeClock).stop($.interfaceValue<expirer | null>(ft, "*clockwork.fakeTimer", /* @__PURE__ */ $.pointerType("clockwork.fakeTimer"))) : fakeClock.prototype.stop.call(fc, $.interfaceValue<expirer | null>(ft, "*clockwork.fakeTimer", /* @__PURE__ */ $.pointerType("clockwork.fakeTimer"))))
		}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)), afterFunc: afterfunc}) })())
		await (fc !== null && (fc as any).__isVarRef !== true && (fc as any).__goValue === undefined ? ((fc as any) as fakeClock)["set"]($.interfaceValue<expirer | null>(ft, "*clockwork.fakeTimer", /* @__PURE__ */ $.pointerType("clockwork.fakeTimer")), d) : fakeClock.prototype.set.call(fc, $.interfaceValue<expirer | null>(ft, "*clockwork.fakeTimer", /* @__PURE__ */ $.pointerType("clockwork.fakeTimer")), d))
		return ft
	}

	public async ["set"](e: expirer | null, d: time2.Duration): globalThis.Promise<void> {
		const fc: fakeClock | $.VarRef<fakeClock> | null = this;
		using __defer = new $.DisposableStack()
		const fc$: fakeClock = fc == null ? $.pointerTarget<fakeClock>(fc) : (fc as any).__isVarRef === true ? (fc as any).value : (fc as any).__goValue === undefined ? (fc as any) : $.pointerTarget<fakeClock>(fc)
		await (fc$ as fakeClock).l.Lock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())((fc$ as fakeClock).l), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })
		await (fc !== null && (fc as any).__isVarRef !== true && (fc as any).__goValue === undefined ? ((fc as any) as fakeClock).setExpirer(e, d) : fakeClock.prototype.setExpirer.call(fc, e, d))
	}

	public async setExpirer(e: expirer | null, d: time2.Duration): globalThis.Promise<void> {
		let fc: fakeClock | $.VarRef<fakeClock> | null = this;
		const fc$: fakeClock = fc == null ? $.pointerTarget<fakeClock>(fc) : (fc as any).__isVarRef === true ? (fc as any).value : (fc as any).__goValue === undefined ? (fc as any) : $.pointerTarget<fakeClock>(fc)
		if (time2.Duration_Nanoseconds(d) <= 0n) {
			// special case - trigger immediately, never reset.
			//
			// TODO: Explain what cases this covers.
			void ((__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<expirer, null>) : $.pointerValue<Exclude<expirer, null>>(e)).expire($.markAsStructValue($.cloneStructValue((fc$ as fakeClock).time))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<time2.Duration> | null)
			return
		}
		// Add the expirer to the set of waiters and notify any blockers.
		void (__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<expirer, null>) : $.pointerValue<Exclude<expirer, null>>(e)).setExpiry($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((fc$ as fakeClock).time)).Add(d)))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(fc$ as fakeClock).waiters = $.appendOne((fc$ as fakeClock).waiters, e, $.appendZeros.nil)
		await sort.Slice($.interfaceValue((fc$ as fakeClock).waiters, "[]clockwork.expirer", /* @__PURE__ */ $.sliceType("clockwork.expirer")), $.functionValue(async (i: number, j: number): globalThis.Promise<boolean> => {
			return $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<expirer, null>>($.arrayIndex((fc$ as fakeClock).waiters!, i)).expiry(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time2.Time))).Before($.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<expirer, null>>($.arrayIndex((fc$ as fakeClock).waiters!, j)).expiry(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time2.Time))))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))

		// Notify blockers of our new waiter.
		let blocked: $.Slice<blocker | $.VarRef<blocker> | null> = null! as $.Slice<blocker | $.VarRef<blocker> | null>
		let count = $.sliceLen((fc$ as fakeClock).waiters)
		for (let __goscriptRangeTarget0 = (fc$ as fakeClock).blockers, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let b = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as blocker | $.VarRef<blocker> | null)
			if ($.pointerValue<blocker>(b).count <= count) {
				$.pointerValue<blocker>(b).ch!.close()
				continue
			}
			blocked = $.appendOne(blocked, b, $.appendZeros.nil)
		}
		;(fc$ as fakeClock).blockers = blocked
	}

	public async stop(e: expirer | null): globalThis.Promise<boolean> {
		const fc: fakeClock | $.VarRef<fakeClock> | null = this;
		using __defer = new $.DisposableStack()
		const fc$: fakeClock = fc == null ? $.pointerTarget<fakeClock>(fc) : (fc as any).__isVarRef === true ? (fc as any).value : (fc as any).__goValue === undefined ? (fc as any) : $.pointerTarget<fakeClock>(fc)
		await (fc$ as fakeClock).l.Lock()
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Unlock())((fc$ as fakeClock).l), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee5() })
		return (fc !== null && (fc as any).__isVarRef !== true && (fc as any).__goValue === undefined ? ((fc as any) as fakeClock).stopExpirer(e) : fakeClock.prototype.stopExpirer.call(fc, e))
	}

	public stopExpirer(e: expirer | null): boolean {
		let fc: fakeClock | $.VarRef<fakeClock> | null = this;
		const fc$: fakeClock = fc == null ? $.pointerTarget<fakeClock>(fc) : (fc as any).__isVarRef === true ? (fc as any).value : (fc as any).__goValue === undefined ? (fc as any) : $.pointerTarget<fakeClock>(fc)
		for (let __goscriptRangeTarget1 = (fc$ as fakeClock).waiters, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let t = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as expirer | null)
			if ($.comparableEqual(t, e)) {
				// Remove element, maintaining order.
				$.copy($.goSlice((fc$ as fakeClock).waiters, i, undefined), $.goSlice((fc$ as fakeClock).waiters, i + 1, undefined))
				$.sliceElems((fc$ as fakeClock).waiters!)[$.sliceSlot((fc$ as fakeClock).waiters!, $.sliceLen((fc$ as fakeClock).waiters) - 1)] = null;
				;(fc$ as fakeClock).waiters = $.goSlice((fc$ as fakeClock).waiters, undefined, $.sliceLen((fc$ as fakeClock).waiters) - 1)
				return true
			}
		}
		return false
	}

	static __typeInfo = $.registerStructType(
		"clockwork.fakeClock",
		() => new fakeClock(),
		() => [$.methodSignature("Advance", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("After", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.channelType("time.Time", "receive")], true), $.methodSignature("AfterFunc", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["f", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], ["clockwork.Timer"], true), $.methodSignature("BlockUntil", [["n", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("BlockUntilContext", [["ctx", "context.Context"], ["n", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("NewTicker", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["clockwork.Ticker"], true), $.methodSignature("NewTimer", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["clockwork.Timer"], true), $.methodSignature("Now", [], ["time.Time"], true), $.methodSignature("Since", [["t", "time.Time"]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("Sleep", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("newBlocker", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("clockwork.blocker")], true), $.methodSignature("newTimer", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["afterfunc", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("clockwork.fakeTimer")], true), $.methodSignature("set", [["e", "clockwork.expirer"], ["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("setExpirer", [["e", "clockwork.expirer"], ["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("stop", [["e", "clockwork.expirer"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("stopExpirer", [["e", "clockwork.expirer"]], [/* @__PURE__ */ $.basicType("bool")], true)],
		fakeClock,
		() => [/* @__PURE__ */ $.structField("l", "sync.RWMutex", [0], 0, false, { pkgPath: "github.com/jonboulle/clockwork" }), /* @__PURE__ */ $.structField("waiters", /* @__PURE__ */ $.sliceType("clockwork.expirer"), [1], 24, false, { pkgPath: "github.com/jonboulle/clockwork" }), /* @__PURE__ */ $.structField("blockers", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("clockwork.blocker")), [2], 48, false, { pkgPath: "github.com/jonboulle/clockwork" }), /* @__PURE__ */ $.structField("time", "time.Time", [3], 72, false, { pkgPath: "github.com/jonboulle/clockwork" })]
	)
}

export class blocker {
	public get count(): number {
		return this._fields.count
	}

	public set count(value: number) {
		this._fields.count = value
	}

	// ch is closed when the underlying clock has the specificed number of blockers.
	public get ch(): $.Channel<{}> | null {
		return this._fields.ch
	}

	public set ch(value: $.Channel<{}> | null) {
		this._fields.ch = value
	}

	public _fields: {
		count: number
		ch: $.Channel<{}> | null
	}

	constructor(init?: Partial<{count?: number, ch?: $.Channel<{}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			count: init?.count ?? (0 as number),
			ch: init?.ch ?? (null! as $.Channel<{}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): blocker {
		return new blocker(this, true)
	}

	public __goscriptAssign(source: blocker): void {
		const target = this._fields
		const values = source._fields
		target.count = values.count
		target.ch = values.ch
	}

	static __typeInfo = $.registerStructType(
		"clockwork.blocker",
		() => new blocker(),
		() => [],
		blocker,
		() => [/* @__PURE__ */ $.structField("count", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "github.com/jonboulle/clockwork" }), /* @__PURE__ */ $.structField("ch", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [1], 8, false, { pkgPath: "github.com/jonboulle/clockwork" })]
	)
}

export class firer {
	// The channel associated with the firer, used to send expriation times.
	public get c(): $.Channel<time2.Time> | null {
		return this._fields.c
	}

	public set c(value: $.Channel<time2.Time> | null) {
		this._fields.c = value
	}

	// The time when the firer expires. Only meaningful if the firer is currently
	// one of a fakeClock's waiters.
	public get exp(): time2.Time {
		return this._fields.exp
	}

	public set exp(value: time2.Time) {
		this._fields.exp = value
	}

	public _fields: {
		c: $.Channel<time2.Time> | null
		exp: time2.Time
	}

	constructor(init?: Partial<{c?: $.Channel<time2.Time> | null, exp?: time2.Time}>, __goscriptValue?: boolean) {
		this._fields = {
			c: init?.c ?? (null! as $.Channel<time2.Time> | null),
			exp: init?.exp ? $.markAsStructValue($.cloneStructValue(init.exp)) : $.markAsStructValue(new time2.Time())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): firer {
		return new firer(this, true)
	}

	public __goscriptAssign(source: firer): void {
		const target = this._fields
		const values = source._fields
		target.c = values.c
		$.assignStruct(target.exp, values.exp)
	}

	public Chan(): $.Channel<time2.Time> | null {
		const f: firer | $.VarRef<firer> | null = this;
		return $.pointerValue<firer>(f).c
	}

	public expiry(): time2.Time {
		const f: firer | $.VarRef<firer> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<firer>(f).exp))
	}

	public setExpiry(t: time2.Time): void {
		let f: firer | $.VarRef<firer> | null = this;
		$.assignStruct($.pointerValue<firer>(f).exp, t)
	}

	static __typeInfo = $.registerStructType(
		"clockwork.firer",
		() => new firer(),
		() => [$.methodSignature("Chan", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")], true), $.methodSignature("expiry", [], ["time.Time"], true), $.methodSignature("setExpiry", [["t", "time.Time"]], [], true)],
		firer,
		() => [/* @__PURE__ */ $.structField("c", /* @__PURE__ */ $.channelType("time.Time", "both"), [0], 0, false, { pkgPath: "github.com/jonboulle/clockwork" }), /* @__PURE__ */ $.structField("exp", "time.Time", [1], 8, false, { pkgPath: "github.com/jonboulle/clockwork" })]
	)
}

export function NewRealClock(): Clock | null {
	return $.interfaceValue<Clock | null>(new realClock(), "*clockwork.realClock", /* @__PURE__ */ $.pointerType("clockwork.realClock"))
}

export function NewFakeClock(): FakeClock | null {
	return NewFakeClockAt(time2.Now())
}

export function NewFakeClockAt(t: time2.Time): FakeClock | null {
	return $.interfaceValue<FakeClock | null>(new fakeClock({time: $.markAsStructValue($.cloneStructValue(t))}), "*clockwork.fakeClock", /* @__PURE__ */ $.pointerType("clockwork.fakeClock"))
}

export function newFirer(): firer {
	return new firer({c: $.makeChannel<time2.Time>(1, $.markAsStructValue(new time2.Time()), "both")}, true)
}

var __goscriptAwait: any
