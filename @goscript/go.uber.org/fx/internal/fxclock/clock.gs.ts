// Generated file based on clock.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as sort from "@goscript/sort/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/context/index.js"
import "@goscript/sort/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("go.uber.org/fx/internal/fxclock", ["fxclock.Clock", "fxclock.systemClock", "fxclock.Mock", "fxclock.deadlineCtx", "fxclock.waiter"])

export type Clock = {
	Now(): time.Time | globalThis.Promise<time.Time>
	Since(_p0: time.Time): time.Duration | globalThis.Promise<time.Duration>
	Sleep(_p0: time.Duration): void
	WithTimeout(_p0: context.Context | null, _p1: time.Duration): [context.Context | null, context.CancelFunc | null] | globalThis.Promise<[context.Context | null, context.CancelFunc | null]>
}

$.registerInterfaceType(
	"fxclock.Clock",
	null,
	[$.methodSignature("Now", [], ["time.Time"]), $.methodSignature("Since", ["time.Time"], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Sleep", [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("WithTimeout", ["context.Context", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["context.Context", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo)])]
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

	public Now(): time.Time {
		return $.markAsStructValue($.cloneStructValue(time.Now()))
	}

	public Since(t: time.Time): time.Duration {
		return time.Since($.markAsStructValue($.cloneStructValue(t)))
	}

	public async Sleep(d: time.Duration): globalThis.Promise<void> {
		await time.Sleep(d)
	}

	public WithTimeout(ctx: context.Context | null, d: time.Duration): [context.Context | null, context.CancelFunc | null] {
		return context.WithTimeout($.pointerValueOrNil(ctx)!, d)
	}

	static __typeInfo = $.registerStructType(
		"fxclock.systemClock",
		() => new systemClock(),
		() => [$.methodSignature("Now", [], ["time.Time"]), $.methodSignature("Since", [["t", "time.Time"]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Sleep", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]]), $.methodSignature("WithTimeout", [["ctx", "context.Context"], ["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["context.Context", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo)])],
		systemClock,
		() => []
	)
}

export class Mock {
	public get mu(): sync.RWMutex {
		return this._fields.mu
	}

	public set mu(value: sync.RWMutex) {
		this._fields.mu = value
	}

	public get now(): time.Time {
		return this._fields.now
	}

	public set now(value: time.Time) {
		this._fields.now = value
	}

	// The MockClock works by maintaining a list of waiters.
	// Each waiter knows the time at which it should be resolved.
	// When the clock advances, all waiters that are in range are resolved
	// in chronological order.
	public get waiters(): $.Slice<waiter> {
		return this._fields.waiters
	}

	public set waiters(value: $.Slice<waiter>) {
		this._fields.waiters = value
	}

	public get waiterAdded(): sync.Cond | $.VarRef<sync.Cond> | null {
		return this._fields.waiterAdded
	}

	public set waiterAdded(value: sync.Cond | $.VarRef<sync.Cond> | null) {
		this._fields.waiterAdded = value
	}

	public _fields: {
		mu: sync.RWMutex
		now: time.Time
		waiters: $.Slice<waiter>
		waiterAdded: sync.Cond | $.VarRef<sync.Cond> | null
	}

	constructor(init?: Partial<{mu?: sync.RWMutex, now?: time.Time, waiters?: $.Slice<waiter>, waiterAdded?: sync.Cond | $.VarRef<sync.Cond> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.RWMutex()),
			now: init?.now ? $.markAsStructValue($.cloneStructValue(init.now)) : $.markAsStructValue(new time.Time()),
			waiters: init?.waiters ?? (null! as $.Slice<waiter>),
			waiterAdded: init?.waiterAdded ?? (null! as sync.Cond | $.VarRef<sync.Cond> | null)
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
		target.waiters = values.waiters
		target.waiterAdded = values.waiterAdded
	}

	public async Add(d: time.Duration): globalThis.Promise<void> {
		let c: Mock | $.VarRef<Mock> | null = this;
		using __defer = new $.DisposableStack()
		const c$: Mock = c == null ? $.pointerTarget<Mock>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Mock>(c)
		if (d < 0n) {
			$.panic("cannot add negative duration")
		}

		await (c$ as Mock).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as Mock).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		sort.Slice($.interfaceValue((c$ as Mock).waiters, "[]fxclock.waiter", /* @__PURE__ */ $.sliceType("fxclock.waiter")), $.functionValue((i: number, j: number): boolean => {
			return $.markAsStructValue($.cloneStructValue($.arrayIndex((c$ as Mock).waiters!, i).until)).Before($.markAsStructValue($.cloneStructValue($.arrayIndex((c$ as Mock).waiters!, j).until)))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))

		let newTime = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((c$ as Mock).now)).Add(d)))
		// newTime won't be recorded until the end of this method.
		// This ensures that any waiters that are resolved
		// are resolved at the time they were expecting.

		while ($.sliceLen((c$ as Mock).waiters) > 0) {
			let w = ($.arrayIndex((c$ as Mock).waiters!, 0)).clone()
			if ($.markAsStructValue($.cloneStructValue(w.until)).After($.markAsStructValue($.cloneStructValue(newTime)))) {
				break
			}
			$.assignStruct($.sliceElems((c$ as Mock).waiters!)[$.sliceSlot((c$ as Mock).waiters!, 0)], new waiter(undefined, true));
			;(c$ as Mock).waiters = $.goSlice((c$ as Mock).waiters, 1, undefined)

			// The waiter is within range.
			// Travel to the time of the waiter and resolve it.
			$.assignStruct((c$ as Mock).now, w.until)

			// The waiter may schedule more work
			// so we must release the lock.
			void (c$ as Mock).mu.Unlock()
			void (__goscriptAwait = w.fn!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			// Sleeping here is necessary to let the side effects of waiters
			// take effect before we continue.
			await time.Sleep(1000000n)
			await (c$ as Mock).mu.Lock()
		}

		$.assignStruct((c$ as Mock).now, newTime)
	}

	public async AwaitScheduled(n: number): globalThis.Promise<void> {
		const c: Mock | $.VarRef<Mock> | null = this;
		using __defer = new $.DisposableStack()
		const c$: Mock = c == null ? $.pointerTarget<Mock>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Mock>(c)
		await (c$ as Mock).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as Mock).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })

		// Note: waiterAdded is associated with c.mu,
		// the same lock we're holding here.
		//
		// When we call Wait(), it'll release the lock
		// and block until signaled by runAt,
		// at which point it'll reacquire the lock
		// (waiting until runAt has released it).
		while ($.sliceLen((c$ as Mock).waiters) < n) {
			await sync.Cond.prototype.Wait.call($.pointerValue<sync.Cond>((c$ as Mock).waiterAdded))
		}
	}

	public async Now(): globalThis.Promise<time.Time> {
		const c: Mock | $.VarRef<Mock> | null = this;
		using __defer = new $.DisposableStack()
		const c$: Mock = c == null ? $.pointerTarget<Mock>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Mock>(c)
		await (c$ as Mock).mu.RLock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((c$ as Mock).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
		return $.markAsStructValue($.cloneStructValue((c$ as Mock).now))
	}

	public async Since(t: time.Time): globalThis.Promise<time.Duration> {
		const c: Mock | $.VarRef<Mock> | null = this;
		return $.markAsStructValue($.cloneStructValue((await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Mock).Now() : Mock.prototype.Now.call(c))))).Sub($.markAsStructValue($.cloneStructValue(t)))
	}

	public async Sleep(d: time.Duration): globalThis.Promise<void> {
		const c: Mock | $.VarRef<Mock> | null = this;
		let ch: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
		await Mock.prototype.runAt.call(c, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Mock).Now() : Mock.prototype.Now.call(c))))).Add(d))), $.functionValue((): void => {
			ch!.close()
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		await $.chanRecv(ch)
	}

	public async WithTimeout(ctx: context.Context | null, d: time.Duration): globalThis.Promise<[context.Context | null, context.CancelFunc | null]> {
		const c: Mock | $.VarRef<Mock> | null = this;
		// Unfortunately, we can't use context.WithCancelCause here.
		// Per its documentation (and verified by trying it):
		//
		//   ctx, cancel := context.WithCancelCause(parent)
		//   cancel(myError)
		//   ctx.Err() // returns context.Canceled
		//   context.Cause(ctx) // returns myError
		//
		// So it won't do for our purposes.
		let deadline = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Mock).Now() : Mock.prototype.Now.call(c))))).Add(d)))
		let [inner, cancelInner] = context.WithCancel($.pointerValueOrNil(ctx)!)
		let dctx: deadlineCtx | $.VarRef<deadlineCtx> | null = new deadlineCtx({inner: inner, cancelInner: cancelInner, done: $.makeChannel<{}>(0, {}, "both"), deadline: $.markAsStructValue($.cloneStructValue(deadline))})
		ctx = $.interfaceValue<context.Context | null>(dctx, "*fxclock.deadlineCtx", /* @__PURE__ */ $.pointerType("fxclock.deadlineCtx"))

		await Mock.prototype.runAt.call(c, deadline, $.functionValue(async (): globalThis.Promise<void> => {
			await (dctx !== null && (dctx as any).__isVarRef !== true && (dctx as any).__goValue === undefined ? ((dctx as any) as deadlineCtx).cancel(context.DeadlineExceeded) : deadlineCtx.prototype.cancel.call(dctx, context.DeadlineExceeded))
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return [ctx, $.functionValue(async (): globalThis.Promise<void> => {
			await (dctx !== null && (dctx as any).__isVarRef !== true && (dctx as any).__goValue === undefined ? ((dctx as any) as deadlineCtx).cancel(context.Canceled) : deadlineCtx.prototype.cancel.call(dctx, context.Canceled))
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))]
	}

	public async runAt(t: time.Time, fn: (() => void) | null): globalThis.Promise<void> {
		let c: Mock | $.VarRef<Mock> | null = this;
		using __defer = new $.DisposableStack()
		const c$: Mock = c == null ? $.pointerTarget<Mock>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Mock>(c)
		await (c$ as Mock).mu.Lock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as Mock).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() });

		;(c$ as Mock).waiters = $.appendOne((c$ as Mock).waiters, new waiter({until: $.markAsStructValue($.cloneStructValue(t)), fn: fn}, true))
		sync.Cond.prototype.Broadcast.call($.pointerValue<sync.Cond>((c$ as Mock).waiterAdded))
	}

	static __typeInfo = $.registerStructType(
		"fxclock.Mock",
		() => new Mock(),
		() => [$.methodSignature("Add", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("AwaitScheduled", [["n", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("Now", [], ["time.Time"], true), $.methodSignature("Since", [["t", "time.Time"]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("Sleep", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("WithTimeout", [["ctx", "context.Context"], ["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["context.Context", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("runAt", [["t", "time.Time"], ["fn", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], [], true)],
		Mock,
		() => [/* @__PURE__ */ $.structField("mu", "sync.RWMutex", [0], 0, false, { pkgPath: "go.uber.org/fx/internal/fxclock" }), /* @__PURE__ */ $.structField("now", "time.Time", [1], 24, false, { pkgPath: "go.uber.org/fx/internal/fxclock" }), /* @__PURE__ */ $.structField("waiters", /* @__PURE__ */ $.sliceType("fxclock.waiter"), [2], 48, false, { pkgPath: "go.uber.org/fx/internal/fxclock" }), /* @__PURE__ */ $.structField("waiterAdded", /* @__PURE__ */ $.pointerType("sync.Cond"), [3], 72, false, { pkgPath: "go.uber.org/fx/internal/fxclock" })]
	)
}

export class deadlineCtx {
	public get inner(): context.Context | null {
		return this._fields.inner
	}

	public set inner(value: context.Context | null) {
		this._fields.inner = value
	}

	public get cancelInner(): (() => void) | null {
		return this._fields.cancelInner
	}

	public set cancelInner(value: (() => void) | null) {
		this._fields.cancelInner = value
	}

	public get done(): $.Channel<{}> | null {
		return this._fields.done
	}

	public set done(value: $.Channel<{}> | null) {
		this._fields.done = value
	}

	public get deadline(): time.Time {
		return this._fields.deadline
	}

	public set deadline(value: time.Time) {
		this._fields.deadline = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		inner: context.Context | null
		cancelInner: (() => void) | null
		done: $.Channel<{}> | null
		deadline: time.Time
		mu: sync.Mutex
		err: $.GoError
	}

	constructor(init?: Partial<{inner?: context.Context | null, cancelInner?: (() => void) | null, done?: $.Channel<{}> | null, deadline?: time.Time, mu?: sync.Mutex, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			inner: init?.inner ?? (null! as context.Context | null),
			cancelInner: init?.cancelInner ?? (null! as (() => void) | null),
			done: init?.done ?? (null! as $.Channel<{}> | null),
			deadline: init?.deadline ? $.markAsStructValue($.cloneStructValue(init.deadline)) : $.markAsStructValue(new time.Time()),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): deadlineCtx {
		return new deadlineCtx(this, true)
	}

	public __goscriptAssign(source: deadlineCtx): void {
		const target = this._fields
		const values = source._fields
		target.inner = $.assignFieldValue(target.inner, values.inner, "context.Context")
		target.cancelInner = values.cancelInner
		target.done = values.done
		$.assignStruct(target.deadline, values.deadline)
		$.assignStruct(target.mu, values.mu)
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public Deadline(): [time.Time, boolean] {
		const c: deadlineCtx | $.VarRef<deadlineCtx> | null = this;
		let deadline: time.Time = $.markAsStructValue(new time.Time())
		let ok: boolean = false
		return [$.markAsStructValue($.cloneStructValue($.pointerValue<deadlineCtx>(c).deadline)), true]
	}

	public Done(): $.Channel<{}> | null {
		const c: deadlineCtx | $.VarRef<deadlineCtx> | null = this;
		return $.pointerValue<deadlineCtx>(c).done
	}

	public async Err(): globalThis.Promise<$.GoError> {
		const c: deadlineCtx | $.VarRef<deadlineCtx> | null = this;
		using __defer = new $.DisposableStack()
		const c$: deadlineCtx = c == null ? $.pointerTarget<deadlineCtx>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<deadlineCtx>(c)
		await (c$ as deadlineCtx).mu.Lock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as deadlineCtx).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })
		return (c$ as deadlineCtx).err
	}

	public async Value(key: any): globalThis.Promise<any> {
		const c: deadlineCtx | $.VarRef<deadlineCtx> | null = this;
		return $.pointerValue<Exclude<context.Context, null>>($.pointerValue<deadlineCtx>(c).inner).Value(key)
	}

	public async cancel(err: $.GoError): globalThis.Promise<void> {
		let c: deadlineCtx | $.VarRef<deadlineCtx> | null = this;
		const c$: deadlineCtx = c == null ? $.pointerTarget<deadlineCtx>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<deadlineCtx>(c)
		await (c$ as deadlineCtx).mu.Lock()
		if ((c$ as deadlineCtx).err == null) {
			;(c$ as deadlineCtx).err = err
			void (c$ as deadlineCtx).done!.close()
			void (__goscriptAwait = (c$ as deadlineCtx).cancelInner!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		void (c$ as deadlineCtx).mu.Unlock()
	}

	static __typeInfo = $.registerStructType(
		"fxclock.deadlineCtx",
		() => new deadlineCtx(),
		() => [$.methodSignature("Deadline", [], [["deadline", "time.Time"], ["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Done", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")], true), $.methodSignature("Err", [], ["error"], true), $.methodSignature("Value", [["key", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("cancel", [["err", "error"]], [], true)],
		deadlineCtx,
		() => [/* @__PURE__ */ $.structField("inner", "context.Context", [0], 0, false, { pkgPath: "go.uber.org/fx/internal/fxclock" }), /* @__PURE__ */ $.structField("cancelInner", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [1], 16, false, { pkgPath: "go.uber.org/fx/internal/fxclock" }), /* @__PURE__ */ $.structField("done", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [2], 24, false, { pkgPath: "go.uber.org/fx/internal/fxclock" }), /* @__PURE__ */ $.structField("deadline", "time.Time", [3], 32, false, { pkgPath: "go.uber.org/fx/internal/fxclock" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [4], 56, false, { pkgPath: "go.uber.org/fx/internal/fxclock" }), /* @__PURE__ */ $.structField("err", "error", [5], 64, false, { pkgPath: "go.uber.org/fx/internal/fxclock" })]
	)
}

export class waiter {
	public get until(): time.Time {
		return this._fields.until
	}

	public set until(value: time.Time) {
		this._fields.until = value
	}

	public get fn(): (() => void) | null {
		return this._fields.fn
	}

	public set fn(value: (() => void) | null) {
		this._fields.fn = value
	}

	public _fields: {
		until: time.Time
		fn: (() => void) | null
	}

	constructor(init?: Partial<{until?: time.Time, fn?: (() => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			until: init?.until ? $.markAsStructValue($.cloneStructValue(init.until)) : $.markAsStructValue(new time.Time()),
			fn: init?.fn ?? (null! as (() => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): waiter {
		return new waiter(this, true)
	}

	public __goscriptAssign(source: waiter): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.until, values.until)
		target.fn = values.fn
	}

	static __typeInfo = $.registerStructType(
		"fxclock.waiter",
		() => new waiter(),
		() => [],
		waiter,
		() => [/* @__PURE__ */ $.structField("until", "time.Time", [0], 0, false, { pkgPath: "go.uber.org/fx/internal/fxclock" }), /* @__PURE__ */ $.structField("fn", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [1], 24, false, { pkgPath: "go.uber.org/fx/internal/fxclock" })]
	)
}

export let System: Clock | null = $.interfaceValue<Clock | null>(new systemClock(undefined, true), "fxclock.systemClock", "fxclock.systemClock")

export function __goscript_set_System(__goscriptValue: Clock | null): void {
	System = __goscriptValue
}

export function NewMock(): Mock | $.VarRef<Mock> | null {
	let m: Mock | $.VarRef<Mock> | null = (() => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue(time.Now())); return new Mock({now: __goscriptLiteralField0}) })()
	let m$: Mock = m == null ? $.pointerTarget<Mock>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Mock>(m);
	;(m$ as Mock).waiterAdded = sync.NewCond($.pointerValueOrNil($.interfaceValue<sync.Locker | null>($.fieldRef((m$ as Mock)._fields, "mu"), "*sync.RWMutex", /* @__PURE__ */ $.pointerType("sync.RWMutex")))!)
	return m
}

var __goscriptAwait: any
