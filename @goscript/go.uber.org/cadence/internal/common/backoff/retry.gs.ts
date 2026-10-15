// Generated file based on retry.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as s from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as __goscript_retrypolicy from "./retrypolicy.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "./retrypolicy.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal/common/backoff", ["backoff.Operation", "backoff.IsRetryable", "backoff.ConcurrentRetrier"])

export type Operation = (() => $.GoError | globalThis.Promise<$.GoError>) | null

export type IsRetryable = ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null

export class ConcurrentRetrier {
	public get Mutex(): sync.Mutex {
		return this._fields.Mutex
	}

	public set Mutex(value: sync.Mutex) {
		this._fields.Mutex = value
	}

	public get retrier(): __goscript_retrypolicy.Retrier | null {
		return this._fields.retrier
	}

	public set retrier(value: __goscript_retrypolicy.Retrier | null) {
		this._fields.retrier = value
	}

	public get failureCount(): bigint {
		return this._fields.failureCount
	}

	public set failureCount(value: bigint) {
		this._fields.failureCount = value
	}

	public _fields: {
		Mutex: sync.Mutex
		retrier: __goscript_retrypolicy.Retrier | null
		failureCount: bigint
	}

	constructor(init?: Partial<{Mutex?: sync.Mutex, retrier?: __goscript_retrypolicy.Retrier | null, failureCount?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Mutex: init?.Mutex ? $.markAsStructValue($.cloneStructValue(init.Mutex)) : $.markAsStructValue(new sync.Mutex()),
			retrier: init?.retrier ?? (null! as __goscript_retrypolicy.Retrier | null),
			failureCount: init?.failureCount ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ConcurrentRetrier {
		return new ConcurrentRetrier(this, true)
	}

	public __goscriptAssign(source: ConcurrentRetrier): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Mutex, values.Mutex)
		target.retrier = $.assignFieldValue(target.retrier, values.retrier, "backoff.Retrier")
		target.failureCount = values.failureCount
	}

	public async Failed(): globalThis.Promise<void> {
		let c: ConcurrentRetrier | $.VarRef<ConcurrentRetrier> | null = this;
		using __defer = new $.DisposableStack()
		const c$: ConcurrentRetrier = c == null ? $.pointerTarget<ConcurrentRetrier>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ConcurrentRetrier>(c)
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as ConcurrentRetrier).Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		await (c$ as ConcurrentRetrier).Mutex.Lock();
		;(c$ as ConcurrentRetrier).failureCount++
	}

	public async Succeeded(): globalThis.Promise<void> {
		let c: ConcurrentRetrier | $.VarRef<ConcurrentRetrier> | null = this;
		using __defer = new $.DisposableStack()
		const c$: ConcurrentRetrier = c == null ? $.pointerTarget<ConcurrentRetrier>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ConcurrentRetrier>(c)
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as ConcurrentRetrier).Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		await (c$ as ConcurrentRetrier).Mutex.Lock();
		;(c$ as ConcurrentRetrier).failureCount = 0n
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_retrypolicy.Retrier, null>>((c$ as ConcurrentRetrier).retrier).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Throttle(): globalThis.Promise<void> {
		const c: ConcurrentRetrier | $.VarRef<ConcurrentRetrier> | null = this;
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConcurrentRetrier).throttleInternal() : ConcurrentRetrier.prototype.throttleInternal.call(c))
	}

	public async throttleInternal(): globalThis.Promise<time.Duration> {
		const c: ConcurrentRetrier | $.VarRef<ConcurrentRetrier> | null = this;
		const c$: ConcurrentRetrier = c == null ? $.pointerTarget<ConcurrentRetrier>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ConcurrentRetrier>(c)
		let next = -1n

		// Check if we have failure count.
		await (c$ as ConcurrentRetrier).Mutex.Lock()
		if ((c$ as ConcurrentRetrier).failureCount > 0n) {
			next = (__goscriptAwait = $.pointerValue<Exclude<__goscript_retrypolicy.Retrier, null>>((c$ as ConcurrentRetrier).retrier).NextBackOff(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		void (c$ as ConcurrentRetrier).Mutex.Unlock()

		if (next != -1n) {
			await time.Sleep(next)
		}

		return next
	}

	public Lock(): any {
		return $.pointerValue<sync.Mutex>(this.Mutex).Lock()
	}

	public TryLock(): any {
		return $.pointerValue<sync.Mutex>(this.Mutex).TryLock()
	}

	public Unlock(): any {
		return $.pointerValue<sync.Mutex>(this.Mutex).Unlock()
	}

	static __typeInfo = $.registerStructType(
		"backoff.ConcurrentRetrier",
		() => new ConcurrentRetrier(),
		() => [$.methodSignature("Failed", [], [], true), $.methodSignature("Succeeded", [], [], true), $.methodSignature("Throttle", [], [], true), $.methodSignature("throttleInternal", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("Lock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		ConcurrentRetrier,
		() => [/* @__PURE__ */ $.structField("Mutex", "sync.Mutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("retrier", "backoff.Retrier", [1], 8, false, { pkgPath: "go.uber.org/cadence/internal/common/backoff" }), /* @__PURE__ */ $.structField("failureCount", /* @__PURE__ */ $.basicType("int64"), [2], 24, false, { pkgPath: "go.uber.org/cadence/internal/common/backoff" })]
	)
}

export async function NewConcurrentRetrier(retryPolicy: __goscript_retrypolicy.RetryPolicy | null): globalThis.Promise<ConcurrentRetrier | $.VarRef<ConcurrentRetrier> | null> {
	let retrier = await __goscript_retrypolicy.NewRetrier(retryPolicy, $.interfaceValue<__goscript_retrypolicy.Clock | null>((__goscript_retrypolicy.SystemClock).clone(), "backoff.systemClock", "backoff.systemClock"))
	return new ConcurrentRetrier({retrier: retrier})
}

export async function Retry(ctx: context.Context | null, operation: (() => $.GoError | globalThis.Promise<$.GoError>) | null, policy: __goscript_retrypolicy.RetryPolicy | null, isRetriable: ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	let next: time.Duration = 0n

	let r = await __goscript_retrypolicy.NewRetrier(policy, $.interfaceValue<__goscript_retrypolicy.Clock | null>((__goscript_retrypolicy.SystemClock).clone(), "backoff.systemClock", "backoff.systemClock"))
	Retry_Loop: while (true) {
		// operation completed successfully.  No need to retry.
		{
			err = (__goscriptAwait = operation!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err == null) {
				return null
			}
		}

		{
			next = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<__goscript_retrypolicy.Retrier, null>) : $.pointerValue<Exclude<__goscript_retrypolicy.Retrier, null>>(r)).NextBackOff(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (next == -1n) {
				return err
			}
		}

		if (!(__goscriptAwait = isRetriable!(err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return err
		}

		let retryAfter = ErrRetryableAfter(err)
		// update the time to wait until the next attempt.
		// as this is a *minimum*, just add it to the current delay time.
		//
		// this could be changed to clamp to retryAfter as a minimum.
		// this is intentionally *not* done here, so repeated service-busy errors are guaranteed
		// to generate *increasing* amount of time between requests, and not just send N in a row
		// with 1 second of delay.  duplicates imply "still overloaded", so this will hopefully
		// help reduce the odds of snowballing.
		// this is a pretty minor thing though, and it should not cause problems if we change it
		// to make behavior more predictable.
		next = $.int64Add(next, retryAfter)

		// check if ctx is done
		if ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) {
			return err
		}

		// wait for the next retry period (or context timeout)
		{
			let ctxDone: $.Channel<{}> | null = ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null)
			if (ctxDone != null) {
				// we could check if this is longer than context deadline and immediately fail...
				// ...but wasting time prevents higher-level retries from trying too early.
				// this is particularly useful for service-busy, but seems valid for essentially all retried errors.
				//
				// this could probably be changed if we get requests for it, but for now it better-protects
				// the server by preventing "external" retry storms.
				let timer: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer(next)
				const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, any>([
					{
						id: 0,
						isSend: false,
						channel: ctxDone,
						onSelected: async (__goscriptSelect0Result) => {
							return __goscriptSelect0Result
						}
					},
					{
						id: 1,
						isSend: false,
						channel: $.pointerValue<time.Timer>(timer).C,
						onSelected: async (__goscriptSelect0Result) => {
							return __goscriptSelect0Result
						}
					}
				], false)
				switch (__goscriptSelect0Value?.id) {
					case 0:
						{
							const __goscriptSelect0Result = __goscriptSelect0Value
							time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(timer))
							return err
							break
						}
					case 1:
						{
							const __goscriptSelect0Result = __goscriptSelect0Value
							continue Retry_Loop
							break
						}
				}
			}
		}

		// ctx is not cancellable
		await time.Sleep(next)
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function ErrRetryableAfter(err: $.GoError): time.Duration {
	let retryAfter: time.Duration = 0n
	{
		let target: $.VarRef<s.ServiceBusyError | $.VarRef<s.ServiceBusyError> | null> = $.varRef(null)
		if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(target, "**shared.ServiceBusyError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("shared.ServiceBusyError"))))) {
			// eventually: return a time-until-retry from the server.
			// for now though, just ensure at least one second before the next attempt.
			return 1000000000n
		}
	}
	return 0n
}

var __goscriptAwait: any
