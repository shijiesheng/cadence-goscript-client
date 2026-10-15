// Generated file based on rate.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as context from "@goscript/context/index.js"

import * as __goscript_rate_go17 from "./rate_go17.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/context/index.js"
import "./rate_go17.gs.ts"

$.registerTypePackagePath("golang.org/x/time/rate", ["rate.Limit", "rate.Limiter", "rate.Reservation", "rate.contextContext"])

export type Limit = number

$.registerNamedValueType(
	"rate.Limit",
	{durationFromTokens: (receiver: any, ...args: any[]) => (Limit_durationFromTokens as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), tokensFromDuration: (receiver: any, ...args: any[]) => (Limit_tokensFromDuration as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("durationFromTokens", [["tokens", /* @__PURE__ */ $.basicType("float64")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("tokensFromDuration", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("float64")])]
);

$.registerNamedValueType(
	"*rate.Limit",
	{durationFromTokens: (receiver: any, ...args: any[]) => (Limit_durationFromTokens as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), tokensFromDuration: (receiver: any, ...args: any[]) => (Limit_tokensFromDuration as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("durationFromTokens", [["tokens", /* @__PURE__ */ $.basicType("float64")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("tokensFromDuration", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("float64")])]
);

export type contextContext = {
	Deadline(): [time.Time, boolean]
	Done(): $.Channel<{}> | null
	Err(): $.GoError | globalThis.Promise<$.GoError>
	Value(key: any): any | globalThis.Promise<any>
}

$.registerInterfaceType(
	"rate.contextContext",
	null,
	[$.methodSignature("Deadline", [], [["deadline", "time.Time"], ["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("Done", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")]), $.methodSignature("Err", [], ["error"]), $.methodSignature("Value", [["key", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }])]
);

export class Limiter {
	public get limit(): Limit {
		return this._fields.limit
	}

	public set limit(value: Limit) {
		this._fields.limit = value
	}

	public get burst(): number {
		return this._fields.burst
	}

	public set burst(value: number) {
		this._fields.burst = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get tokens(): number {
		return this._fields.tokens
	}

	public set tokens(value: number) {
		this._fields.tokens = value
	}

	// last is the last time the limiter's tokens field was updated
	public get last(): time.Time {
		return this._fields.last
	}

	public set last(value: time.Time) {
		this._fields.last = value
	}

	// lastEvent is the latest time of a rate-limited event (past or future)
	public get lastEvent(): time.Time {
		return this._fields.lastEvent
	}

	public set lastEvent(value: time.Time) {
		this._fields.lastEvent = value
	}

	public _fields: {
		limit: Limit
		burst: number
		mu: sync.Mutex
		tokens: number
		last: time.Time
		lastEvent: time.Time
	}

	constructor(init?: Partial<{limit?: Limit, burst?: number, mu?: sync.Mutex, tokens?: number, last?: time.Time, lastEvent?: time.Time}>, __goscriptValue?: boolean) {
		this._fields = {
			limit: init?.limit ?? (0 as Limit),
			burst: init?.burst ?? (0 as number),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			tokens: init?.tokens ?? (0 as number),
			last: init?.last ? $.markAsStructValue($.cloneStructValue(init.last)) : $.markAsStructValue(new time.Time()),
			lastEvent: init?.lastEvent ? $.markAsStructValue($.cloneStructValue(init.lastEvent)) : $.markAsStructValue(new time.Time())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Limiter {
		return new Limiter(this, true)
	}

	public __goscriptAssign(source: Limiter): void {
		const target = this._fields
		const values = source._fields
		target.limit = values.limit
		target.burst = values.burst
		$.assignStruct(target.mu, values.mu)
		target.tokens = values.tokens
		$.assignStruct(target.last, values.last)
		$.assignStruct(target.lastEvent, values.lastEvent)
	}

	public async Allow(): globalThis.Promise<boolean> {
		const lim: Limiter | $.VarRef<Limiter> | null = this;
		return (lim !== null && (lim as any).__isVarRef !== true && (lim as any).__goValue === undefined ? ((lim as any) as Limiter).AllowN($.markAsStructValue($.cloneStructValue(time.Now())), 1) : Limiter.prototype.AllowN.call(lim, $.markAsStructValue($.cloneStructValue(time.Now())), 1))
	}

	public async AllowN(now: time.Time, n: number): globalThis.Promise<boolean> {
		const lim: Limiter | $.VarRef<Limiter> | null = this;
		return (await (lim !== null && (lim as any).__isVarRef !== true && (lim as any).__goValue === undefined ? ((lim as any) as Limiter).reserveN($.markAsStructValue($.cloneStructValue(now)), n, 0n) : Limiter.prototype.reserveN.call(lim, $.markAsStructValue($.cloneStructValue(now)), n, 0n))).ok
	}

	public Burst(): number {
		const lim: Limiter | $.VarRef<Limiter> | null = this;
		return $.pointerValue<Limiter>(lim).burst
	}

	public async Limit(): globalThis.Promise<Limit> {
		const lim: Limiter | $.VarRef<Limiter> | null = this;
		using __defer = new $.DisposableStack()
		const lim$: Limiter = lim == null ? $.pointerTarget<Limiter>(lim) : (lim as any).__isVarRef === true ? (lim as any).value : (lim as any).__goValue === undefined ? (lim as any) : $.pointerTarget<Limiter>(lim)
		await (lim$ as Limiter).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((lim$ as Limiter).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		return (lim$ as Limiter).limit
	}

	public async Reserve(): globalThis.Promise<Reservation | $.VarRef<Reservation> | null> {
		const lim: Limiter | $.VarRef<Limiter> | null = this;
		return (lim !== null && (lim as any).__isVarRef !== true && (lim as any).__goValue === undefined ? ((lim as any) as Limiter).ReserveN($.markAsStructValue($.cloneStructValue(time.Now())), 1) : Limiter.prototype.ReserveN.call(lim, $.markAsStructValue($.cloneStructValue(time.Now())), 1))
	}

	public async ReserveN(now: time.Time, n: number): globalThis.Promise<Reservation | $.VarRef<Reservation> | null> {
		const lim: Limiter | $.VarRef<Limiter> | null = this;
		let r = $.varRef(await (lim !== null && (lim as any).__isVarRef !== true && (lim as any).__goValue === undefined ? ((lim as any) as Limiter).reserveN($.markAsStructValue($.cloneStructValue(now)), n, 9223372036854775807n) : Limiter.prototype.reserveN.call(lim, $.markAsStructValue($.cloneStructValue(now)), n, 9223372036854775807n)))
		return r
	}

	public async SetLimit(newLimit: Limit): globalThis.Promise<void> {
		const lim: Limiter | $.VarRef<Limiter> | null = this;
		await (lim !== null && (lim as any).__isVarRef !== true && (lim as any).__goValue === undefined ? ((lim as any) as Limiter).SetLimitAt($.markAsStructValue($.cloneStructValue(time.Now())), newLimit) : Limiter.prototype.SetLimitAt.call(lim, $.markAsStructValue($.cloneStructValue(time.Now())), newLimit))
	}

	public async SetLimitAt(now: time.Time, newLimit: Limit): globalThis.Promise<void> {
		let lim: Limiter | $.VarRef<Limiter> | null = this;
		using __defer = new $.DisposableStack()
		const lim$: Limiter = lim == null ? $.pointerTarget<Limiter>(lim) : (lim as any).__isVarRef === true ? (lim as any).value : (lim as any).__goValue === undefined ? (lim as any) : $.pointerTarget<Limiter>(lim)
		await (lim$ as Limiter).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((lim$ as Limiter).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })

		let __goscriptTuple0: any = (lim !== null && (lim as any).__isVarRef !== true && (lim as any).__goValue === undefined ? ((lim as any) as Limiter).advance(now) : Limiter.prototype.advance.call(lim, now))
		now = $.assignStruct(now, __goscriptTuple0[0])
		let tokens = __goscriptTuple0[2]

		$.assignStruct((lim$ as Limiter).last, now);
		;(lim$ as Limiter).tokens = tokens;
		;(lim$ as Limiter).limit = newLimit
	}

	public async Wait(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const lim: Limiter | $.VarRef<Limiter> | null = this;
		let err: $.GoError = null! as $.GoError
		return (lim !== null && (lim as any).__isVarRef !== true && (lim as any).__goValue === undefined ? ((lim as any) as Limiter).waitN((ctx as contextContext | null), 1) : Limiter.prototype.waitN.call(lim, (ctx as contextContext | null), 1))
	}

	public async WaitN(ctx: context.Context | null, n: number): globalThis.Promise<$.GoError> {
		const lim: Limiter | $.VarRef<Limiter> | null = this;
		let err: $.GoError = null! as $.GoError
		return (lim !== null && (lim as any).__isVarRef !== true && (lim as any).__goValue === undefined ? ((lim as any) as Limiter).waitN((ctx as contextContext | null), n) : Limiter.prototype.waitN.call(lim, (ctx as contextContext | null), n))
	}

	public advance(now: time.Time): [time.Time, time.Time, number] {
		const lim: Limiter | $.VarRef<Limiter> | null = this;
		let newNow: time.Time = $.markAsStructValue(new time.Time())
		let newLast: time.Time = $.markAsStructValue(new time.Time())
		let newTokens: number = 0
		const lim$: Limiter = lim == null ? $.pointerTarget<Limiter>(lim) : (lim as any).__isVarRef === true ? (lim as any).value : (lim as any).__goValue === undefined ? (lim as any) : $.pointerTarget<Limiter>(lim)
		let last = $.markAsStructValue($.cloneStructValue((lim$ as Limiter).last))
		if ($.markAsStructValue($.cloneStructValue(now)).Before($.markAsStructValue($.cloneStructValue(last)))) {
			last = $.assignStruct(last, now)
		}

		// Avoid making delta overflow below when last is very old.
		let maxElapsed = Limit_durationFromTokens((lim$ as Limiter).limit, (lim$ as Limiter).burst - (lim$ as Limiter).tokens)
		let elapsed = $.markAsStructValue($.cloneStructValue(now)).Sub($.markAsStructValue($.cloneStructValue(last)))
		if (elapsed > maxElapsed) {
			elapsed = maxElapsed
		}

		// Calculate the new number of tokens, due to time that passed.
		let delta = Limit_tokensFromDuration((lim$ as Limiter).limit, elapsed)
		let tokens = (lim$ as Limiter).tokens + delta
		{
			let burst = (lim$ as Limiter).burst
			if (tokens > burst) {
				tokens = burst
			}
		}

		return [$.markAsStructValue($.cloneStructValue(now)), $.markAsStructValue($.cloneStructValue(last)), tokens]
	}

	public async reserveN(now: time.Time, n: number, maxFutureReserve: time.Duration): globalThis.Promise<Reservation> {
		let lim: Limiter | $.VarRef<Limiter> | null = this;
		const lim$: Limiter = lim == null ? $.pointerTarget<Limiter>(lim) : (lim as any).__isVarRef === true ? (lim as any).value : (lim as any).__goValue === undefined ? (lim as any) : $.pointerTarget<Limiter>(lim)
		await (lim$ as Limiter).mu.Lock()

		if ((lim$ as Limiter).limit == 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368) {
			void (lim$ as Limiter).mu.Unlock()
			return new Reservation({ok: true, lim: lim, tokens: n, timeToAct: $.markAsStructValue($.cloneStructValue(now))}, true)
		}

		let __goscriptTuple1: any = (lim !== null && (lim as any).__isVarRef !== true && (lim as any).__goValue === undefined ? ((lim as any) as Limiter).advance(now) : Limiter.prototype.advance.call(lim, now))
		now = $.assignStruct(now, __goscriptTuple1[0])
		let last = __goscriptTuple1[1]
		let tokens = __goscriptTuple1[2]

		// Calculate the remaining number of tokens resulting from the request.
		tokens = tokens - (n)

		// Calculate the wait duration
		let waitDuration: time.Duration = 0n
		if (tokens < 0) {
			waitDuration = Limit_durationFromTokens((lim$ as Limiter).limit, -tokens)
		}

		// Decide result
		let ok = (n <= (lim$ as Limiter).burst) && (waitDuration <= maxFutureReserve)

		// Prepare reservation
		let r = new Reservation({ok: ok, lim: lim, limit: (lim$ as Limiter).limit}, true)
		if (ok) {
			r.tokens = n
			$.assignStruct(r.timeToAct, $.markAsStructValue($.cloneStructValue(now)).Add(waitDuration))
		}

		// Update state
		if (ok) {
			$.assignStruct((lim$ as Limiter).last, now);
			;(lim$ as Limiter).tokens = tokens
			$.assignStruct((lim$ as Limiter).lastEvent, r.timeToAct)
		} else {
			$.assignStruct((lim$ as Limiter).last, last)
		}

		void (lim$ as Limiter).mu.Unlock()
		return (r).clone()
	}

	public async wait(ctx: contextContext | null): globalThis.Promise<$.GoError> {
		const lim: Limiter | $.VarRef<Limiter> | null = this;
		let err: $.GoError = null! as $.GoError
		return (lim !== null && (lim as any).__isVarRef !== true && (lim as any).__goValue === undefined ? ((lim as any) as Limiter).WaitN((ctx as context.Context | null), 1) : Limiter.prototype.WaitN.call(lim, (ctx as context.Context | null), 1))
	}

	public async waitN(ctx: contextContext | null, n: number): globalThis.Promise<$.GoError> {
		const lim: Limiter | $.VarRef<Limiter> | null = this;
		let err: $.GoError = null! as $.GoError
		using __defer = new $.DisposableStack()
		const lim$: Limiter = lim == null ? $.pointerTarget<Limiter>(lim) : (lim as any).__isVarRef === true ? (lim as any).value : (lim as any).__goValue === undefined ? (lim as any) : $.pointerTarget<Limiter>(lim)
		if ((n > (lim$ as Limiter).burst) && ((lim$ as Limiter).limit != 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368)) {
			return fmt.Errorf("rate: Wait(n=%d) exceeds limiter's burst %d", $.basicInterfaceValue(n, "int"), $.basicInterfaceValue((lim$ as Limiter).burst, "int"))
		}
		// Check if ctx is already cancelled
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: false,
				channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<contextContext, null>) : $.pointerValue<Exclude<contextContext, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect0Result) => {
					return (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<contextContext, null>) : $.pointerValue<Exclude<contextContext, null>>(ctx)).Err()
				}
			},
			{
				id: -1,
				isSend: false,
				channel: null,
			}
		], true)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
		// Determine wait limit
		let now = $.markAsStructValue($.cloneStructValue(time.Now()))
		let waitLimit = 9223372036854775807n
		{
			let [deadline, ok] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<contextContext, null>) : $.pointerValue<Exclude<contextContext, null>>(ctx)).Deadline()
			if (ok) {
				waitLimit = $.markAsStructValue($.cloneStructValue(deadline)).Sub($.markAsStructValue($.cloneStructValue(now)))
			}
		}
		// Reserve
		let r = $.varRef(await (lim !== null && (lim as any).__isVarRef !== true && (lim as any).__goValue === undefined ? ((lim as any) as Limiter).reserveN($.markAsStructValue($.cloneStructValue(now)), n, waitLimit) : Limiter.prototype.reserveN.call(lim, $.markAsStructValue($.cloneStructValue(now)), n, waitLimit)))
		if (!r.value.ok) {
			return fmt.Errorf("rate: Wait(n=%d) would exceed context deadline", $.basicInterfaceValue(n, "int"))
		}
		// Wait
		let t: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer(r.value.DelayFrom(now))
		__defer.defer(() => { time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(t)) })
		const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: false,
				channel: $.pointerValue<time.Timer>(t).C,
				onSelected: async (__goscriptSelect1Result) => {
					const __goscriptReturn0: $.GoError = null
					err = __goscriptReturn0
					__defer.dispose()
					return err
				}
			},
			{
				id: 1,
				isSend: false,
				channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<contextContext, null>) : $.pointerValue<Exclude<contextContext, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect1Result) => {
					await r.value.Cancel()
					const __goscriptReturn1: $.GoError = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<contextContext, null>) : $.pointerValue<Exclude<contextContext, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					err = __goscriptReturn1
					__defer.dispose()
					return err
				}
			}
		], false)
		if (__goscriptSelect1HasReturn) {
			return __goscriptSelect1Value
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"rate.Limiter",
		() => new Limiter(),
		() => [$.methodSignature("Allow", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("AllowN", [["now", "time.Time"], ["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Burst", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Limit", [], [/* @__PURE__ */ $.basicType("float64", "rate.Limit")], true), $.methodSignature("Reserve", [], [/* @__PURE__ */ $.pointerType("rate.Reservation")], true), $.methodSignature("ReserveN", [["now", "time.Time"], ["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("rate.Reservation")], true), $.methodSignature("SetLimit", [["newLimit", /* @__PURE__ */ $.basicType("float64", "rate.Limit")]], [], true), $.methodSignature("SetLimitAt", [["now", "time.Time"], ["newLimit", /* @__PURE__ */ $.basicType("float64", "rate.Limit")]], [], true), $.methodSignature("Wait", [["ctx", "context.Context"]], [["err", "error"]], true), $.methodSignature("WaitN", [["ctx", "context.Context"], ["n", /* @__PURE__ */ $.basicType("int")]], [["err", "error"]], true), $.methodSignature("advance", [["now", "time.Time"]], [["newNow", "time.Time"], ["newLast", "time.Time"], ["newTokens", /* @__PURE__ */ $.basicType("float64")]], true), $.methodSignature("reserveN", [["now", "time.Time"], ["n", /* @__PURE__ */ $.basicType("int")], ["maxFutureReserve", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["rate.Reservation"], true), $.methodSignature("wait", [["ctx", "rate.contextContext"]], [["err", "error"]], true), $.methodSignature("waitN", [["ctx", "rate.contextContext"], ["n", /* @__PURE__ */ $.basicType("int")]], [["err", "error"]], true)],
		Limiter,
		() => [/* @__PURE__ */ $.structField("limit", /* @__PURE__ */ $.basicType("float64", "rate.Limit"), [0], 0, false, { pkgPath: "golang.org/x/time/rate" }), /* @__PURE__ */ $.structField("burst", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "golang.org/x/time/rate" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [2], 16, false, { pkgPath: "golang.org/x/time/rate" }), /* @__PURE__ */ $.structField("tokens", /* @__PURE__ */ $.basicType("float64"), [3], 24, false, { pkgPath: "golang.org/x/time/rate" }), /* @__PURE__ */ $.structField("last", "time.Time", [4], 32, false, { pkgPath: "golang.org/x/time/rate" }), /* @__PURE__ */ $.structField("lastEvent", "time.Time", [5], 56, false, { pkgPath: "golang.org/x/time/rate" })]
	)
}

export class Reservation {
	public get ok(): boolean {
		return this._fields.ok
	}

	public set ok(value: boolean) {
		this._fields.ok = value
	}

	public get lim(): Limiter | $.VarRef<Limiter> | null {
		return this._fields.lim
	}

	public set lim(value: Limiter | $.VarRef<Limiter> | null) {
		this._fields.lim = value
	}

	public get tokens(): number {
		return this._fields.tokens
	}

	public set tokens(value: number) {
		this._fields.tokens = value
	}

	public get timeToAct(): time.Time {
		return this._fields.timeToAct
	}

	public set timeToAct(value: time.Time) {
		this._fields.timeToAct = value
	}

	// This is the Limit at reservation time, it can change later.
	public get limit(): Limit {
		return this._fields.limit
	}

	public set limit(value: Limit) {
		this._fields.limit = value
	}

	public _fields: {
		ok: boolean
		lim: Limiter | $.VarRef<Limiter> | null
		tokens: number
		timeToAct: time.Time
		limit: Limit
	}

	constructor(init?: Partial<{ok?: boolean, lim?: Limiter | $.VarRef<Limiter> | null, tokens?: number, timeToAct?: time.Time, limit?: Limit}>, __goscriptValue?: boolean) {
		this._fields = {
			ok: init?.ok ?? (false as boolean),
			lim: init?.lim ?? (null! as Limiter | $.VarRef<Limiter> | null),
			tokens: init?.tokens ?? (0 as number),
			timeToAct: init?.timeToAct ? $.markAsStructValue($.cloneStructValue(init.timeToAct)) : $.markAsStructValue(new time.Time()),
			limit: init?.limit ?? (0 as Limit)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Reservation {
		return new Reservation(this, true)
	}

	public __goscriptAssign(source: Reservation): void {
		const target = this._fields
		const values = source._fields
		target.ok = values.ok
		target.lim = values.lim
		target.tokens = values.tokens
		$.assignStruct(target.timeToAct, values.timeToAct)
		target.limit = values.limit
	}

	public async Cancel(): globalThis.Promise<void> {
		const r: Reservation | $.VarRef<Reservation> | null = this;
		await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reservation).CancelAt($.markAsStructValue($.cloneStructValue(time.Now()))) : Reservation.prototype.CancelAt.call(r, $.markAsStructValue($.cloneStructValue(time.Now()))))
		return
	}

	public async CancelAt(now: time.Time): globalThis.Promise<void> {
		let r: Reservation | $.VarRef<Reservation> | null = this;
		using __defer = new $.DisposableStack()
		const r$: Reservation = r == null ? $.pointerTarget<Reservation>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Reservation>(r)
		if (!(r$ as Reservation).ok) {
			return
		}

		await $.pointerValue<Limiter>((r$ as Reservation).lim).mu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<Limiter>((r$ as Reservation).lim).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		if ((($.pointerValue<Limiter>((r$ as Reservation).lim).limit == 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368) || ((r$ as Reservation).tokens == 0)) || $.markAsStructValue($.cloneStructValue((r$ as Reservation).timeToAct)).Before($.markAsStructValue($.cloneStructValue(now)))) {
			return
		}

		// calculate tokens to restore
		// The duration between lim.lastEvent and r.timeToAct tells us how many tokens were reserved
		// after r was obtained. These tokens should not be restored.
		let restoreTokens = (r$ as Reservation).tokens - Limit_tokensFromDuration((r$ as Reservation).limit, $.markAsStructValue($.cloneStructValue($.pointerValue<Limiter>((r$ as Reservation).lim).lastEvent)).Sub($.markAsStructValue($.cloneStructValue((r$ as Reservation).timeToAct))))
		if (restoreTokens <= 0) {
			return
		}
		// advance time to now
		let __goscriptTuple2: any = Limiter.prototype.advance.call((r$ as Reservation).lim, now)
		now = $.assignStruct(now, __goscriptTuple2[0])
		let tokens = __goscriptTuple2[2]
		// calculate new number of tokens
		tokens = tokens + (restoreTokens)
		{
			let burst = $.pointerValue<Limiter>((r$ as Reservation).lim).burst
			if (tokens > burst) {
				tokens = burst
			}
		}
		// update state
		$.assignStruct($.pointerValue<Limiter>((r$ as Reservation).lim).last, now)
		$.pointerValue<Limiter>((r$ as Reservation).lim).tokens = tokens
		if ($.structEqual((r$ as Reservation).timeToAct, $.pointerValue<Limiter>((r$ as Reservation).lim).lastEvent)) {
			let prevEvent = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((r$ as Reservation).timeToAct)).Add(Limit_durationFromTokens((r$ as Reservation).limit, -(r$ as Reservation).tokens))))
			if (!$.markAsStructValue($.cloneStructValue(prevEvent)).Before($.markAsStructValue($.cloneStructValue(now)))) {
				$.assignStruct($.pointerValue<Limiter>((r$ as Reservation).lim).lastEvent, prevEvent)
			}
		}

		return
	}

	public Delay(): time.Duration {
		const r: Reservation | $.VarRef<Reservation> | null = this;
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reservation).DelayFrom($.markAsStructValue($.cloneStructValue(time.Now()))) : Reservation.prototype.DelayFrom.call(r, $.markAsStructValue($.cloneStructValue(time.Now()))))
	}

	public DelayFrom(now: time.Time): time.Duration {
		const r: Reservation | $.VarRef<Reservation> | null = this;
		const r$: Reservation = r == null ? $.pointerTarget<Reservation>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Reservation>(r)
		if (!(r$ as Reservation).ok) {
			return 9223372036854775807n
		}
		let delay = $.markAsStructValue($.cloneStructValue((r$ as Reservation).timeToAct)).Sub($.markAsStructValue($.cloneStructValue(now)))
		if (delay < 0n) {
			return 0n
		}
		return delay
	}

	public OK(): boolean {
		const r: Reservation | $.VarRef<Reservation> | null = this;
		return $.pointerValue<Reservation>(r).ok
	}

	static __typeInfo = $.registerStructType(
		"rate.Reservation",
		() => new Reservation(),
		() => [$.methodSignature("Cancel", [], [], true), $.methodSignature("CancelAt", [["now", "time.Time"]], [], true), $.methodSignature("Delay", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("DelayFrom", [["now", "time.Time"]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("OK", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		Reservation,
		() => [/* @__PURE__ */ $.structField("ok", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "golang.org/x/time/rate" }), /* @__PURE__ */ $.structField("lim", /* @__PURE__ */ $.pointerType("rate.Limiter"), [1], 8, false, { pkgPath: "golang.org/x/time/rate" }), /* @__PURE__ */ $.structField("tokens", /* @__PURE__ */ $.basicType("int"), [2], 16, false, { pkgPath: "golang.org/x/time/rate" }), /* @__PURE__ */ $.structField("timeToAct", "time.Time", [3], 24, false, { pkgPath: "golang.org/x/time/rate" }), /* @__PURE__ */ $.structField("limit", /* @__PURE__ */ $.basicType("float64", "rate.Limit"), [4], 48, false, { pkgPath: "golang.org/x/time/rate" })]
	)
}

export const Inf: Limit = 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368

export const InfDuration: time.Duration = 9223372036854775807n

export function Every(interval: time.Duration): Limit {
	if (interval <= 0n) {
		return 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368
	}
	return 1 / time.Duration_Seconds(interval)
}

export function NewLimiter(r: Limit, b: number): Limiter | $.VarRef<Limiter> | null {
	return new Limiter({limit: r, burst: b})
}

export function Limit_durationFromTokens(limit: Limit, tokens: number): time.Duration {
	let seconds = tokens / limit
	return $.int64Mul(1n, $.int64(1e9 * seconds))
}

export function Limit_tokensFromDuration(limit: Limit, d: time.Duration): number {
	return time.Duration_Seconds(d) * limit
}

var __goscriptAwait: any
