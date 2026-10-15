// Generated file based on idle.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/idle", ["idle.Enforcer", "idle.Manager"])

export type Enforcer = {
	EnterIdleMode(): void
	ExitIdleMode(): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"idle.Enforcer",
	null,
	[$.methodSignature("EnterIdleMode"), $.methodSignature("ExitIdleMode", [], ["error"])]
);

export class Manager {
	// State accessed atomically.
	public get lastCallEndTime(): bigint {
		return this._fields.lastCallEndTime
	}

	public set lastCallEndTime(value: bigint) {
		this._fields.lastCallEndTime = value
	}

	public get activeCallsCount(): number {
		return this._fields.activeCallsCount
	}

	public set activeCallsCount(value: number) {
		this._fields.activeCallsCount = value
	}

	public get activeSinceLastTimerCheck(): number {
		return this._fields.activeSinceLastTimerCheck
	}

	public set activeSinceLastTimerCheck(value: number) {
		this._fields.activeSinceLastTimerCheck = value
	}

	public get closed(): number {
		return this._fields.closed
	}

	public set closed(value: number) {
		this._fields.closed = value
	}

	// Can be accessed without atomics or mutex since these are set at creation
	// time and read-only after that.
	public get enforcer(): Enforcer | null {
		return this._fields.enforcer
	}

	public set enforcer(value: Enforcer | null) {
		this._fields.enforcer = value
	}

	public get timeout(): time.Duration {
		return this._fields.timeout
	}

	public set timeout(value: time.Duration) {
		this._fields.timeout = value
	}

	// idleMu is used to guarantee mutual exclusion in two scenarios:
	// - Opposing intentions:
	//   - a: Idle timeout has fired and handleIdleTimeout() is trying to put
	//     the channel in idle mode because the channel has been inactive.
	//   - b: At the same time an RPC is made on the channel, and OnCallBegin()
	//     is trying to prevent the channel from going idle.
	// - Competing intentions:
	//   - The channel is in idle mode and there are multiple RPCs starting at
	//     the same time, all trying to move the channel out of idle. Only one
	//     of them should succeed in doing so, while the other RPCs should
	//     piggyback on the first one and be successfully handled.
	public get idleMu(): sync.RWMutex {
		return this._fields.idleMu
	}

	public set idleMu(value: sync.RWMutex) {
		this._fields.idleMu = value
	}

	public get actuallyIdle(): boolean {
		return this._fields.actuallyIdle
	}

	public set actuallyIdle(value: boolean) {
		this._fields.actuallyIdle = value
	}

	public get timer(): time.Timer | $.VarRef<time.Timer> | null {
		return this._fields.timer
	}

	public set timer(value: time.Timer | $.VarRef<time.Timer> | null) {
		this._fields.timer = value
	}

	public _fields: {
		lastCallEndTime: bigint
		activeCallsCount: number
		activeSinceLastTimerCheck: number
		closed: number
		enforcer: Enforcer | null
		timeout: time.Duration
		idleMu: sync.RWMutex
		actuallyIdle: boolean
		timer: time.Timer | $.VarRef<time.Timer> | null
	}

	constructor(init?: Partial<{lastCallEndTime?: bigint, activeCallsCount?: number, activeSinceLastTimerCheck?: number, closed?: number, enforcer?: Enforcer | null, timeout?: time.Duration, idleMu?: sync.RWMutex, actuallyIdle?: boolean, timer?: time.Timer | $.VarRef<time.Timer> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			lastCallEndTime: init?.lastCallEndTime ?? (0n as bigint),
			activeCallsCount: init?.activeCallsCount ?? (0 as number),
			activeSinceLastTimerCheck: init?.activeSinceLastTimerCheck ?? (0 as number),
			closed: init?.closed ?? (0 as number),
			enforcer: init?.enforcer ?? (null! as Enforcer | null),
			timeout: init?.timeout ?? (0n as time.Duration),
			idleMu: init?.idleMu ? $.markAsStructValue($.cloneStructValue(init.idleMu)) : $.markAsStructValue(new sync.RWMutex()),
			actuallyIdle: init?.actuallyIdle ?? (false as boolean),
			timer: init?.timer ?? (null! as time.Timer | $.VarRef<time.Timer> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Manager {
		return new Manager(this, true)
	}

	public __goscriptAssign(source: Manager): void {
		const target = this._fields
		const values = source._fields
		target.lastCallEndTime = values.lastCallEndTime
		target.activeCallsCount = values.activeCallsCount
		target.activeSinceLastTimerCheck = values.activeSinceLastTimerCheck
		target.closed = values.closed
		target.enforcer = $.assignFieldValue(target.enforcer, values.enforcer, "idle.Enforcer")
		target.timeout = values.timeout
		$.assignStruct(target.idleMu, values.idleMu)
		target.actuallyIdle = values.actuallyIdle
		target.timer = values.timer
	}

	public async Close(): globalThis.Promise<void> {
		let m: Manager | $.VarRef<Manager> | null = this;
		const m$: Manager = m == null ? $.pointerTarget<Manager>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Manager>(m)
		atomic.StoreInt32($.fieldRef((m$ as Manager)._fields, "closed"), 1)

		await (m$ as Manager).idleMu.Lock()
		if ((m$ as Manager).timer != null) {
			time.Timer.prototype.Stop.call($.pointerValue<time.Timer>((m$ as Manager).timer));
			;(m$ as Manager).timer = null
		}
		void (m$ as Manager).idleMu.Unlock()
	}

	public async EnterIdleModeForTesting(): globalThis.Promise<void> {
		const m: Manager | $.VarRef<Manager> | null = this;
		await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Manager).tryEnterIdleMode() : Manager.prototype.tryEnterIdleMode.call(m))
	}

	public async ExitIdleMode(): globalThis.Promise<$.GoError> {
		let m: Manager | $.VarRef<Manager> | null = this;
		using __defer = new $.DisposableStack()
		const m$: Manager = m == null ? $.pointerTarget<Manager>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Manager>(m)
		// Holds idleMu which ensures mutual exclusion with tryEnterIdleMode.
		await (m$ as Manager).idleMu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as Manager).idleMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		if ((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Manager).isClosed() : Manager.prototype.isClosed.call(m)) || !(m$ as Manager).actuallyIdle) {
			// This can happen in three scenarios:
			// - handleIdleTimeout() set the calls count to -math.MaxInt32 and called
			//   tryEnterIdleMode(). But before the latter could grab the lock, an RPC
			//   came in and OnCallBegin() noticed that the calls count is negative.
			// - Channel is in idle mode, and multiple new RPCs come in at the same
			//   time, all of them notice a negative calls count in OnCallBegin and get
			//   here. The first one to get the lock would got the channel to exit idle.
			// - Channel is not in idle mode, and the user calls Connect which calls
			//   m.ExitIdleMode.
			//
			// In any case, there is nothing to do here.
			return null
		}

		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<Enforcer, null>>((m$ as Manager).enforcer).ExitIdleMode(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return fmt.Errorf("failed to exit idle mode: %w", (err as any))
			}
		}

		// Undo the idle entry process. This also respects any new RPC attempts.
		atomic.AddInt32($.fieldRef((m$ as Manager)._fields, "activeCallsCount"), 2147483647);
		;(m$ as Manager).actuallyIdle = false

		// Start a new timer to fire after the configured idle timeout.
		await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Manager).resetIdleTimerLocked((m$ as Manager).timeout) : Manager.prototype.resetIdleTimerLocked.call(m, (m$ as Manager).timeout))
		return null
	}

	public async OnCallBegin(): globalThis.Promise<$.GoError> {
		const m: Manager | $.VarRef<Manager> | null = this;
		const m$: Manager = m == null ? $.pointerTarget<Manager>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Manager>(m)
		if ((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Manager).isClosed() : Manager.prototype.isClosed.call(m))) {
			return null
		}

		if (atomic.AddInt32($.fieldRef((m$ as Manager)._fields, "activeCallsCount"), 1) > 0) {
			// Channel is not idle now. Set the activity bit and allow the call.
			atomic.StoreInt32($.fieldRef((m$ as Manager)._fields, "activeSinceLastTimerCheck"), 1)
			return null
		}

		// Channel is either in idle mode or is in the process of moving to idle
		// mode. Attempt to exit idle mode to allow this RPC.
		{
			let err = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Manager).ExitIdleMode() : Manager.prototype.ExitIdleMode.call(m))
			if (err != null) {
				// Undo the increment to calls count, and return an error causing the
				// RPC to fail.
				atomic.AddInt32($.fieldRef((m$ as Manager)._fields, "activeCallsCount"), -1)
				return err
			}
		}

		atomic.StoreInt32($.fieldRef((m$ as Manager)._fields, "activeSinceLastTimerCheck"), 1)
		return null
	}

	public OnCallEnd(): void {
		const m: Manager | $.VarRef<Manager> | null = this;
		const m$: Manager = m == null ? $.pointerTarget<Manager>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Manager>(m)
		if ((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Manager).isClosed() : Manager.prototype.isClosed.call(m))) {
			return
		}

		// Record the time at which the most recent call finished.
		atomic.StoreInt64($.fieldRef((m$ as Manager)._fields, "lastCallEndTime"), $.markAsStructValue($.cloneStructValue(time.Now())).UnixNano())

		// Decrement the active calls count. This count can temporarily go negative
		// when the timer callback is in the process of moving the channel to idle
		// mode, but one or more RPCs come in and complete before the timer callback
		// can get done with the process of moving to idle mode.
		atomic.AddInt32($.fieldRef((m$ as Manager)._fields, "activeCallsCount"), -1)
	}

	public async handleIdleTimeout(): globalThis.Promise<void> {
		const m: Manager | $.VarRef<Manager> | null = this;
		const m$: Manager = m == null ? $.pointerTarget<Manager>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Manager>(m)
		if ((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Manager).isClosed() : Manager.prototype.isClosed.call(m))) {
			return
		}

		if (atomic.LoadInt32($.fieldRef((m$ as Manager)._fields, "activeCallsCount")) > 0) {
			await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Manager).resetIdleTimer((m$ as Manager).timeout) : Manager.prototype.resetIdleTimer.call(m, (m$ as Manager).timeout))
			return
		}

		// There has been activity on the channel since we last got here. Reset the
		// timer and return.
		if (atomic.LoadInt32($.fieldRef((m$ as Manager)._fields, "activeSinceLastTimerCheck")) == 1) {
			// Set the timer to fire after a duration of idle timeout, calculated
			// from the time the most recent RPC completed.
			atomic.StoreInt32($.fieldRef((m$ as Manager)._fields, "activeSinceLastTimerCheck"), 0)
			await Manager.prototype.resetIdleTimer.call(m, $.int64Add($.int64($.int64Sub(atomic.LoadInt64($.fieldRef((m$ as Manager)._fields, "lastCallEndTime")), $.markAsStructValue($.cloneStructValue(time.Now())).UnixNano())), (m$ as Manager).timeout))
			return
		}

		// Now that we've checked that there has been no activity, attempt to enter
		// idle mode, which is very likely to succeed.
		if (await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Manager).tryEnterIdleMode() : Manager.prototype.tryEnterIdleMode.call(m))) {
			// Successfully entered idle mode. No timer needed until we exit idle.
			return
		}

		// Failed to enter idle mode due to a concurrent RPC that kept the channel
		// active, or because of an error from the channel. Undo the attempt to
		// enter idle, and reset the timer to try again later.
		await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Manager).resetIdleTimer((m$ as Manager).timeout) : Manager.prototype.resetIdleTimer.call(m, (m$ as Manager).timeout))
	}

	public isClosed(): boolean {
		const m: Manager | $.VarRef<Manager> | null = this;
		return atomic.LoadInt32($.fieldRef($.pointerValue<Manager>(m)._fields, "closed")) == 1
	}

	public async resetIdleTimer(d: time.Duration): globalThis.Promise<void> {
		const m: Manager | $.VarRef<Manager> | null = this;
		using __defer = new $.DisposableStack()
		const m$: Manager = m == null ? $.pointerTarget<Manager>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Manager>(m)
		await (m$ as Manager).idleMu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as Manager).idleMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Manager).resetIdleTimerLocked(d) : Manager.prototype.resetIdleTimerLocked.call(m, d))
	}

	public async resetIdleTimerLocked(d: time.Duration): globalThis.Promise<void> {
		let m: Manager | $.VarRef<Manager> | null = this;
		const m$: Manager = m == null ? $.pointerTarget<Manager>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Manager>(m)
		if (((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Manager).isClosed() : Manager.prototype.isClosed.call(m)) || ((m$ as Manager).timeout == 0n)) || (m$ as Manager).actuallyIdle) {
			return
		}

		// It is safe to ignore the return value from Reset() because this method is
		// only ever called from the timer callback or when exiting idle mode.
		if ((m$ as Manager).timer != null) {
			time.Timer.prototype.Stop.call($.pointerValue<time.Timer>((m$ as Manager).timer))
		}
		;(m$ as Manager).timer = ((__goscriptAwait = timeAfterFunc!(d, $.functionValue(((__receiver) => () => __receiver.handleIdleTimeout())((m$ as Manager)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc/internal/idle.(*Manager).handleIdleTimeout-fm")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Timer | $.VarRef<time.Timer> | null)
	}

	public async tryEnterIdleMode(): globalThis.Promise<boolean> {
		let m: Manager | $.VarRef<Manager> | null = this;
		using __defer = new $.DisposableStack()
		const m$: Manager = m == null ? $.pointerTarget<Manager>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Manager>(m)
		// Setting the activeCallsCount to -math.MaxInt32 indicates to OnCallBegin()
		// that the channel is either in idle mode or is trying to get there.
		if (!atomic.CompareAndSwapInt32($.fieldRef((m$ as Manager)._fields, "activeCallsCount"), 0, -2147483647)) {
			// This CAS operation can fail if an RPC started after we checked for
			// activity in the timer handler, or one was ongoing from before the
			// last time the timer fired, or if a test is attempting to enter idle
			// mode without checking.  In all cases, abort going into idle mode.
			return false
		}
		// N.B. if we fail to enter idle mode after this, we must re-add
		// math.MaxInt32 to m.activeCallsCount.

		await (m$ as Manager).idleMu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as Manager).idleMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		if (atomic.LoadInt32($.fieldRef((m$ as Manager)._fields, "activeCallsCount")) != -2147483647) {
			// We raced and lost to a new RPC. Very rare, but stop entering idle.
			atomic.AddInt32($.fieldRef((m$ as Manager)._fields, "activeCallsCount"), 2147483647)
			return false
		}
		if (atomic.LoadInt32($.fieldRef((m$ as Manager)._fields, "activeSinceLastTimerCheck")) == 1) {
			// A very short RPC could have come in (and also finished) after we
			// checked for calls count and activity in handleIdleTimeout(), but
			// before the CAS operation. So, we need to check for activity again.
			atomic.AddInt32($.fieldRef((m$ as Manager)._fields, "activeCallsCount"), 2147483647)
			return false
		}

		// No new RPCs have come in since we set the active calls count value to
		// -math.MaxInt32. And since we have the lock, it is safe to enter idle mode
		// unconditionally now.
		void (__goscriptAwait = $.pointerValue<Exclude<Enforcer, null>>((m$ as Manager).enforcer).EnterIdleMode(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(m$ as Manager).actuallyIdle = true
		return true
	}

	static __typeInfo = $.registerStructType(
		"idle.Manager",
		() => new Manager(),
		() => [$.methodSignature("Close", [], [], true), $.methodSignature("EnterIdleModeForTesting", [], [], true), $.methodSignature("ExitIdleMode", [], ["error"], true), $.methodSignature("OnCallBegin", [], ["error"], true), $.methodSignature("OnCallEnd", [], [], true), $.methodSignature("handleIdleTimeout", [], [], true), $.methodSignature("isClosed", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("resetIdleTimer", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("resetIdleTimerLocked", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("tryEnterIdleMode", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		Manager,
		() => [/* @__PURE__ */ $.structField("lastCallEndTime", /* @__PURE__ */ $.basicType("int64"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/idle" }), /* @__PURE__ */ $.structField("activeCallsCount", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/idle" }), /* @__PURE__ */ $.structField("activeSinceLastTimerCheck", /* @__PURE__ */ $.basicType("int32"), [2], 12, false, { pkgPath: "google.golang.org/grpc/internal/idle" }), /* @__PURE__ */ $.structField("closed", /* @__PURE__ */ $.basicType("int32"), [3], 16, false, { pkgPath: "google.golang.org/grpc/internal/idle" }), /* @__PURE__ */ $.structField("enforcer", "idle.Enforcer", [4], 24, false, { pkgPath: "google.golang.org/grpc/internal/idle" }), /* @__PURE__ */ $.structField("timeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [5], 40, false, { pkgPath: "google.golang.org/grpc/internal/idle" }), /* @__PURE__ */ $.structField("idleMu", "sync.RWMutex", [6], 48, false, { pkgPath: "google.golang.org/grpc/internal/idle" }), /* @__PURE__ */ $.structField("actuallyIdle", /* @__PURE__ */ $.basicType("bool"), [7], 72, false, { pkgPath: "google.golang.org/grpc/internal/idle" }), /* @__PURE__ */ $.structField("timer", /* @__PURE__ */ $.pointerType("time.Timer"), [8], 80, false, { pkgPath: "google.golang.org/grpc/internal/idle" })]
	)
}

export let timeAfterFunc: ((d: time.Duration, f: (() => void) | null) => time.Timer | $.VarRef<time.Timer> | null | globalThis.Promise<time.Timer | $.VarRef<time.Timer> | null>) | null = $.functionValue((d: time.Duration, f: (() => void) | null): time.Timer | $.VarRef<time.Timer> | null => {
	return time.AfterFunc(d, f)
}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int64", "time.Duration"), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)], results: [/* @__PURE__ */ $.pointerType("time.Timer")] } as $.FunctionTypeInfo))

export function __goscript_set_timeAfterFunc(__goscriptValue: ((d: time.Duration, f: (() => void) | null) => time.Timer | $.VarRef<time.Timer> | null | globalThis.Promise<time.Timer | $.VarRef<time.Timer> | null>) | null): void {
	timeAfterFunc = __goscriptValue
}

export function NewManager(enforcer: Enforcer | null, timeout: time.Duration): Manager | $.VarRef<Manager> | null {
	return new Manager({enforcer: enforcer, timeout: timeout, actuallyIdle: true, activeCallsCount: -2147483647})
}

var __goscriptAwait: any
