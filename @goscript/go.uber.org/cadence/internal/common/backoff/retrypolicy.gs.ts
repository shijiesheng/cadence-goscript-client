// Generated file based on retrypolicy.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/math/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("go.uber.org/cadence/internal/common/backoff", ["backoff.RetryPolicy", "backoff.Retrier", "backoff.Clock", "backoff.ExponentialRetryPolicy", "backoff.systemClock", "backoff.retrierImpl"])

export type RetryPolicy = {
	ComputeNextDelay(elapsedTime: time.Duration, numAttempts: number): time.Duration | globalThis.Promise<time.Duration>
}

$.registerInterfaceType(
	"backoff.RetryPolicy",
	null,
	[$.methodSignature("ComputeNextDelay", [["elapsedTime", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["numAttempts", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")])]
);

export type Retrier = {
	NextBackOff(): time.Duration | globalThis.Promise<time.Duration>
	Reset(): void
}

$.registerInterfaceType(
	"backoff.Retrier",
	null,
	[$.methodSignature("NextBackOff", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Reset")]
);

export type Clock = {
	Now(): time.Time | globalThis.Promise<time.Time>
}

$.registerInterfaceType(
	"backoff.Clock",
	null,
	[$.methodSignature("Now", [], ["time.Time"])]
);

export class ExponentialRetryPolicy {
	public get initialInterval(): time.Duration {
		return this._fields.initialInterval
	}

	public set initialInterval(value: time.Duration) {
		this._fields.initialInterval = value
	}

	public get backoffCoefficient(): number {
		return this._fields.backoffCoefficient
	}

	public set backoffCoefficient(value: number) {
		this._fields.backoffCoefficient = value
	}

	public get maximumInterval(): time.Duration {
		return this._fields.maximumInterval
	}

	public set maximumInterval(value: time.Duration) {
		this._fields.maximumInterval = value
	}

	public get expirationInterval(): time.Duration {
		return this._fields.expirationInterval
	}

	public set expirationInterval(value: time.Duration) {
		this._fields.expirationInterval = value
	}

	public get maximumAttempts(): number {
		return this._fields.maximumAttempts
	}

	public set maximumAttempts(value: number) {
		this._fields.maximumAttempts = value
	}

	public _fields: {
		initialInterval: time.Duration
		backoffCoefficient: number
		maximumInterval: time.Duration
		expirationInterval: time.Duration
		maximumAttempts: number
	}

	constructor(init?: Partial<{initialInterval?: time.Duration, backoffCoefficient?: number, maximumInterval?: time.Duration, expirationInterval?: time.Duration, maximumAttempts?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			initialInterval: init?.initialInterval ?? (0n as time.Duration),
			backoffCoefficient: init?.backoffCoefficient ?? (0 as number),
			maximumInterval: init?.maximumInterval ?? (0n as time.Duration),
			expirationInterval: init?.expirationInterval ?? (0n as time.Duration),
			maximumAttempts: init?.maximumAttempts ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ExponentialRetryPolicy {
		return new ExponentialRetryPolicy(this, true)
	}

	public __goscriptAssign(source: ExponentialRetryPolicy): void {
		const target = this._fields
		const values = source._fields
		target.initialInterval = values.initialInterval
		target.backoffCoefficient = values.backoffCoefficient
		target.maximumInterval = values.maximumInterval
		target.expirationInterval = values.expirationInterval
		target.maximumAttempts = values.maximumAttempts
	}

	public async ComputeNextDelay(elapsedTime: time.Duration, numAttempts: number): globalThis.Promise<time.Duration> {
		const p: ExponentialRetryPolicy | $.VarRef<ExponentialRetryPolicy> | null = this;
		const p$: ExponentialRetryPolicy = p == null ? $.pointerTarget<ExponentialRetryPolicy>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<ExponentialRetryPolicy>(p)
		// Check to see if we ran out of maximum number of attempts
		if (((p$ as ExponentialRetryPolicy).maximumAttempts != 0) && (numAttempts >= (p$ as ExponentialRetryPolicy).maximumAttempts)) {
			return -1n
		}

		// Stop retrying after expiration interval is elapsed
		if (((p$ as ExponentialRetryPolicy).expirationInterval != 0n) && (elapsedTime > (p$ as ExponentialRetryPolicy).expirationInterval)) {
			return -1n
		}

		let nextInterval = globalThis.Number((p$ as ExponentialRetryPolicy).initialInterval) * math.Pow((p$ as ExponentialRetryPolicy).backoffCoefficient, numAttempts)
		// Disallow retries if initialInterval is negative or nextInterval overflows
		if (nextInterval <= 0) {
			return -1n
		}
		if ((p$ as ExponentialRetryPolicy).maximumInterval != 0n) {
			nextInterval = math.Min(nextInterval, globalThis.Number((p$ as ExponentialRetryPolicy).maximumInterval))
		}

		if ((p$ as ExponentialRetryPolicy).expirationInterval != 0n) {
			let remainingTime = math.Max(0, globalThis.Number($.int64Sub((p$ as ExponentialRetryPolicy).expirationInterval, elapsedTime)))
			nextInterval = math.Min(remainingTime, nextInterval)
		}

		// Bail out if the next interval is smaller than initial retry interval
		let nextDuration = $.int64(nextInterval)
		if (nextDuration < (p$ as ExponentialRetryPolicy).initialInterval) {
			return -1n
		}

		// add jitter to avoid global synchronization
		let jitterPortion: number = $.int(0.2 * nextInterval)
		// Prevent overflow
		if (jitterPortion < 1) {
			jitterPortion = 1
		}
		nextInterval = (nextInterval * 0.8) + await rand.Intn(jitterPortion)

		return $.int64(nextInterval)
	}

	public SetBackoffCoefficient(backoffCoefficient: number): void {
		let p: ExponentialRetryPolicy | $.VarRef<ExponentialRetryPolicy> | null = this;
		$.pointerValue<ExponentialRetryPolicy>(p).backoffCoefficient = backoffCoefficient
	}

	public SetExpirationInterval(expirationInterval: time.Duration): void {
		let p: ExponentialRetryPolicy | $.VarRef<ExponentialRetryPolicy> | null = this;
		$.pointerValue<ExponentialRetryPolicy>(p).expirationInterval = expirationInterval
	}

	public SetInitialInterval(initialInterval: time.Duration): void {
		let p: ExponentialRetryPolicy | $.VarRef<ExponentialRetryPolicy> | null = this;
		$.pointerValue<ExponentialRetryPolicy>(p).initialInterval = initialInterval
	}

	public SetMaximumAttempts(maximumAttempts: number): void {
		let p: ExponentialRetryPolicy | $.VarRef<ExponentialRetryPolicy> | null = this;
		$.pointerValue<ExponentialRetryPolicy>(p).maximumAttempts = maximumAttempts
	}

	public SetMaximumInterval(maximumInterval: time.Duration): void {
		let p: ExponentialRetryPolicy | $.VarRef<ExponentialRetryPolicy> | null = this;
		$.pointerValue<ExponentialRetryPolicy>(p).maximumInterval = maximumInterval
	}

	static __typeInfo = $.registerStructType(
		"backoff.ExponentialRetryPolicy",
		() => new ExponentialRetryPolicy(),
		() => [$.methodSignature("ComputeNextDelay", [["elapsedTime", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["numAttempts", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("SetBackoffCoefficient", [["backoffCoefficient", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("SetExpirationInterval", [["expirationInterval", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("SetInitialInterval", [["initialInterval", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("SetMaximumAttempts", [["maximumAttempts", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("SetMaximumInterval", [["maximumInterval", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true)],
		ExponentialRetryPolicy,
		() => [/* @__PURE__ */ $.structField("initialInterval", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/backoff" }), /* @__PURE__ */ $.structField("backoffCoefficient", /* @__PURE__ */ $.basicType("float64"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal/common/backoff" }), /* @__PURE__ */ $.structField("maximumInterval", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal/common/backoff" }), /* @__PURE__ */ $.structField("expirationInterval", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 24, false, { pkgPath: "go.uber.org/cadence/internal/common/backoff" }), /* @__PURE__ */ $.structField("maximumAttempts", /* @__PURE__ */ $.basicType("int"), [4], 32, false, { pkgPath: "go.uber.org/cadence/internal/common/backoff" })]
	)
}

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
		const t = this;
		return $.markAsStructValue($.cloneStructValue(time.Now()))
	}

	static __typeInfo = $.registerStructType(
		"backoff.systemClock",
		() => new systemClock(),
		() => [$.methodSignature("Now", [], ["time.Time"])],
		systemClock,
		() => []
	)
}

export class retrierImpl {
	public get policy(): RetryPolicy | null {
		return this._fields.policy
	}

	public set policy(value: RetryPolicy | null) {
		this._fields.policy = value
	}

	public get clock(): Clock | null {
		return this._fields.clock
	}

	public set clock(value: Clock | null) {
		this._fields.clock = value
	}

	public get currentAttempt(): number {
		return this._fields.currentAttempt
	}

	public set currentAttempt(value: number) {
		this._fields.currentAttempt = value
	}

	public get startTime(): time.Time {
		return this._fields.startTime
	}

	public set startTime(value: time.Time) {
		this._fields.startTime = value
	}

	public _fields: {
		policy: RetryPolicy | null
		clock: Clock | null
		currentAttempt: number
		startTime: time.Time
	}

	constructor(init?: Partial<{policy?: RetryPolicy | null, clock?: Clock | null, currentAttempt?: number, startTime?: time.Time}>, __goscriptValue?: boolean) {
		this._fields = {
			policy: init?.policy ?? (null! as RetryPolicy | null),
			clock: init?.clock ?? (null! as Clock | null),
			currentAttempt: init?.currentAttempt ?? (0 as number),
			startTime: init?.startTime ? $.markAsStructValue($.cloneStructValue(init.startTime)) : $.markAsStructValue(new time.Time())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): retrierImpl {
		return new retrierImpl(this, true)
	}

	public __goscriptAssign(source: retrierImpl): void {
		const target = this._fields
		const values = source._fields
		target.policy = $.assignFieldValue(target.policy, values.policy, "backoff.RetryPolicy")
		target.clock = $.assignFieldValue(target.clock, values.clock, "backoff.Clock")
		target.currentAttempt = values.currentAttempt
		$.assignStruct(target.startTime, values.startTime)
	}

	public async NextBackOff(): globalThis.Promise<time.Duration> {
		let r: retrierImpl | $.VarRef<retrierImpl> | null = this;
		const r$: retrierImpl = r == null ? $.pointerTarget<retrierImpl>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<retrierImpl>(r)
		let nextInterval = (__goscriptAwait = $.pointerValue<Exclude<RetryPolicy, null>>((r$ as retrierImpl).policy).ComputeNextDelay(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as retrierImpl).getElapsedTime() : retrierImpl.prototype.getElapsedTime.call(r)), (r$ as retrierImpl).currentAttempt), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);

		// Now increment the current attempt
		;(r$ as retrierImpl).currentAttempt++
		return nextInterval
	}

	public async Reset(): globalThis.Promise<void> {
		let r: retrierImpl | $.VarRef<retrierImpl> | null = this;
		const r$: retrierImpl = r == null ? $.pointerTarget<retrierImpl>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<retrierImpl>(r)
		$.assignStruct((r$ as retrierImpl).startTime, ((__goscriptAwait = $.pointerValue<Exclude<Clock, null>>((r$ as retrierImpl).clock).Now(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time));
		;(r$ as retrierImpl).currentAttempt = 0
	}

	public async getElapsedTime(): globalThis.Promise<time.Duration> {
		const r: retrierImpl | $.VarRef<retrierImpl> | null = this;
		const r$: retrierImpl = r == null ? $.pointerTarget<retrierImpl>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<retrierImpl>(r)
		return $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<Clock, null>>((r$ as retrierImpl).clock).Now(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).Sub($.markAsStructValue($.cloneStructValue((r$ as retrierImpl).startTime)))
	}

	static __typeInfo = $.registerStructType(
		"backoff.retrierImpl",
		() => new retrierImpl(),
		() => [$.methodSignature("NextBackOff", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("Reset", [], [], true), $.methodSignature("getElapsedTime", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true)],
		retrierImpl,
		() => [/* @__PURE__ */ $.structField("policy", "backoff.RetryPolicy", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/backoff" }), /* @__PURE__ */ $.structField("clock", "backoff.Clock", [1], 16, false, { pkgPath: "go.uber.org/cadence/internal/common/backoff" }), /* @__PURE__ */ $.structField("currentAttempt", /* @__PURE__ */ $.basicType("int"), [2], 32, false, { pkgPath: "go.uber.org/cadence/internal/common/backoff" }), /* @__PURE__ */ $.structField("startTime", "time.Time", [3], 40, false, { pkgPath: "go.uber.org/cadence/internal/common/backoff" })]
	)
}

export const NoInterval: number = 0

export const done: time.Duration = -1n

export const noMaximumAttempts: number = 0

export const DefaultBackoffCoefficient: number = 2

export const defaultMaximumInterval: time.Duration = 10000000000n

export const defaultExpirationInterval: time.Duration = 60000000000n

export const defaultMaximumAttempts: number = 0

export let SystemClock: systemClock = new systemClock(undefined, true)

export function __goscript_set_SystemClock(__goscriptValue: systemClock): void {
	$.assignStruct(SystemClock, __goscriptValue)
}

export function NewExponentialRetryPolicy(initialInterval: time.Duration): ExponentialRetryPolicy | $.VarRef<ExponentialRetryPolicy> | null {
	let p: ExponentialRetryPolicy | $.VarRef<ExponentialRetryPolicy> | null = new ExponentialRetryPolicy({initialInterval: initialInterval, backoffCoefficient: 2, maximumInterval: 10000000000n, expirationInterval: 60000000000n, maximumAttempts: 0})

	return p
}

export async function NewRetrier(policy: RetryPolicy | null, clock: Clock | null): globalThis.Promise<Retrier | null> {
	return $.interfaceValue<Retrier | null>((await (async () => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (clock !== null && (clock as any).__isVarRef !== true && (clock as any).__goValue === undefined ? (clock as Exclude<Clock, null>) : $.pointerValue<Exclude<Clock, null>>(clock)).Now(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))); return new retrierImpl({policy: policy, clock: clock, startTime: __goscriptLiteralField0, currentAttempt: 0}) })()), "*backoff.retrierImpl", /* @__PURE__ */ $.pointerType("backoff.retrierImpl"))
}

var __goscriptAwait: any
