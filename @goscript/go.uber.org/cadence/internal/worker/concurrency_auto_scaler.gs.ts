// Generated file based on concurrency_auto_scaler.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as clockwork from "@goscript/github.com/jonboulle/clockwork/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import type * as context from "@goscript/context/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as __goscript_concurrency from "./concurrency.gs.ts"
import "@goscript/math/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/jonboulle/clockwork/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "./concurrency.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal/worker", ["worker.ConcurrencyAutoScaler", "worker.ConcurrencyAutoScalerInput", "worker.autoScalerEvent", "worker.number", "worker.rollingAverage"])

export type autoScalerEvent = string

export type _number = any

$.registerInterfaceType(
	"worker.number",
	null,
	[]
);

export class ConcurrencyAutoScaler {
	public get shutdownChan(): $.Channel<{}> | null {
		return this._fields.shutdownChan
	}

	public set shutdownChan(value: $.Channel<{}> | null) {
		this._fields.shutdownChan = value
	}

	public get wg(): sync.WaitGroup {
		return this._fields.wg
	}

	public set wg(value: sync.WaitGroup) {
		this._fields.wg = value
	}

	public get log(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.log
	}

	public set log(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.log = value
	}

	public get scope(): tally.Scope | null {
		return this._fields.scope
	}

	public set scope(value: tally.Scope | null) {
		this._fields.scope = value
	}

	public get clock(): clockwork.Clock | null {
		return this._fields.clock
	}

	public set clock(value: clockwork.Clock | null) {
		this._fields.clock = value
	}

	public get concurrency(): __goscript_concurrency.ConcurrencyLimit | $.VarRef<__goscript_concurrency.ConcurrencyLimit> | null {
		return this._fields.concurrency
	}

	public set concurrency(value: __goscript_concurrency.ConcurrencyLimit | $.VarRef<__goscript_concurrency.ConcurrencyLimit> | null) {
		this._fields.concurrency = value
	}

	public get cooldown(): time.Duration {
		return this._fields.cooldown
	}

	public set cooldown(value: time.Duration) {
		this._fields.cooldown = value
	}

	public get updateTick(): time.Duration {
		return this._fields.updateTick
	}

	public set updateTick(value: time.Duration) {
		this._fields.updateTick = value
	}

	// state of autoscaler
	public get lock(): sync.RWMutex {
		return this._fields.lock
	}

	public set lock(value: sync.RWMutex) {
		this._fields.lock = value
	}

	public get enabled(): boolean {
		return this._fields.enabled
	}

	public set enabled(value: boolean) {
		this._fields.enabled = value
	}

	// poller
	public get pollerInitCount(): number {
		return this._fields.pollerInitCount
	}

	public set pollerInitCount(value: number) {
		this._fields.pollerInitCount = value
	}

	public get pollerMaxCount(): number {
		return this._fields.pollerMaxCount
	}

	public set pollerMaxCount(value: number) {
		this._fields.pollerMaxCount = value
	}

	public get pollerMinCount(): number {
		return this._fields.pollerMinCount
	}

	public set pollerMinCount(value: number) {
		this._fields.pollerMinCount = value
	}

	public get pollerWaitTime(): rollingAverage | $.VarRef<rollingAverage> | null {
		return this._fields.pollerWaitTime
	}

	public set pollerWaitTime(value: rollingAverage | $.VarRef<rollingAverage> | null) {
		this._fields.pollerWaitTime = value
	}

	public get pollerPermitLastUpdate(): time.Time {
		return this._fields.pollerPermitLastUpdate
	}

	public set pollerPermitLastUpdate(value: time.Time) {
		this._fields.pollerPermitLastUpdate = value
	}

	public get pollerWaitTimeUpperBound(): time.Duration {
		return this._fields.pollerWaitTimeUpperBound
	}

	public set pollerWaitTimeUpperBound(value: time.Duration) {
		this._fields.pollerWaitTimeUpperBound = value
	}

	public get pollerWaitTimeLowerBound(): time.Duration {
		return this._fields.pollerWaitTimeLowerBound
	}

	public set pollerWaitTimeLowerBound(value: time.Duration) {
		this._fields.pollerWaitTimeLowerBound = value
	}

	public _fields: {
		shutdownChan: $.Channel<{}> | null
		wg: sync.WaitGroup
		log: zap.Logger | $.VarRef<zap.Logger> | null
		scope: tally.Scope | null
		clock: clockwork.Clock | null
		concurrency: __goscript_concurrency.ConcurrencyLimit | $.VarRef<__goscript_concurrency.ConcurrencyLimit> | null
		cooldown: time.Duration
		updateTick: time.Duration
		lock: sync.RWMutex
		enabled: boolean
		pollerInitCount: number
		pollerMaxCount: number
		pollerMinCount: number
		pollerWaitTime: rollingAverage | $.VarRef<rollingAverage> | null
		pollerPermitLastUpdate: time.Time
		pollerWaitTimeUpperBound: time.Duration
		pollerWaitTimeLowerBound: time.Duration
	}

	constructor(init?: Partial<{shutdownChan?: $.Channel<{}> | null, wg?: sync.WaitGroup, log?: zap.Logger | $.VarRef<zap.Logger> | null, scope?: tally.Scope | null, clock?: clockwork.Clock | null, concurrency?: __goscript_concurrency.ConcurrencyLimit | $.VarRef<__goscript_concurrency.ConcurrencyLimit> | null, cooldown?: time.Duration, updateTick?: time.Duration, lock?: sync.RWMutex, enabled?: boolean, pollerInitCount?: number, pollerMaxCount?: number, pollerMinCount?: number, pollerWaitTime?: rollingAverage | $.VarRef<rollingAverage> | null, pollerPermitLastUpdate?: time.Time, pollerWaitTimeUpperBound?: time.Duration, pollerWaitTimeLowerBound?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			shutdownChan: init?.shutdownChan ?? (null! as $.Channel<{}> | null),
			wg: init?.wg ? $.markAsStructValue($.cloneStructValue(init.wg)) : $.markAsStructValue(new sync.WaitGroup()),
			log: init?.log ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			scope: init?.scope ?? (null! as tally.Scope | null),
			clock: init?.clock ?? (null! as clockwork.Clock | null),
			concurrency: init?.concurrency ?? (null! as __goscript_concurrency.ConcurrencyLimit | $.VarRef<__goscript_concurrency.ConcurrencyLimit> | null),
			cooldown: init?.cooldown ?? (0n as time.Duration),
			updateTick: init?.updateTick ?? (0n as time.Duration),
			lock: init?.lock ? $.markAsStructValue($.cloneStructValue(init.lock)) : $.markAsStructValue(new sync.RWMutex()),
			enabled: init?.enabled ?? (false as boolean),
			pollerInitCount: init?.pollerInitCount ?? (0 as number),
			pollerMaxCount: init?.pollerMaxCount ?? (0 as number),
			pollerMinCount: init?.pollerMinCount ?? (0 as number),
			pollerWaitTime: init?.pollerWaitTime ?? (null! as rollingAverage | $.VarRef<rollingAverage> | null),
			pollerPermitLastUpdate: init?.pollerPermitLastUpdate ? $.markAsStructValue($.cloneStructValue(init.pollerPermitLastUpdate)) : $.markAsStructValue(new time.Time()),
			pollerWaitTimeUpperBound: init?.pollerWaitTimeUpperBound ?? (0n as time.Duration),
			pollerWaitTimeLowerBound: init?.pollerWaitTimeLowerBound ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ConcurrencyAutoScaler {
		return new ConcurrencyAutoScaler(this, true)
	}

	public __goscriptAssign(source: ConcurrencyAutoScaler): void {
		const target = this._fields
		const values = source._fields
		target.shutdownChan = values.shutdownChan
		$.assignStruct(target.wg, values.wg)
		target.log = values.log
		target.scope = $.assignFieldValue(target.scope, values.scope, "tally.Scope")
		target.clock = $.assignFieldValue(target.clock, values.clock, "clockwork.Clock")
		target.concurrency = values.concurrency
		target.cooldown = values.cooldown
		target.updateTick = values.updateTick
		$.assignStruct(target.lock, values.lock)
		target.enabled = values.enabled
		target.pollerInitCount = values.pollerInitCount
		target.pollerMaxCount = values.pollerMaxCount
		target.pollerMinCount = values.pollerMinCount
		target.pollerWaitTime = values.pollerWaitTime
		$.assignStruct(target.pollerPermitLastUpdate, values.pollerPermitLastUpdate)
		target.pollerWaitTimeUpperBound = values.pollerWaitTimeUpperBound
		target.pollerWaitTimeLowerBound = values.pollerWaitTimeLowerBound
	}

	public async ProcessPollerHint(hint: shared.AutoConfigHint | $.VarRef<shared.AutoConfigHint> | null): globalThis.Promise<void> {
		let c: ConcurrencyAutoScaler | $.VarRef<ConcurrencyAutoScaler> | null = this;
		using __defer = new $.DisposableStack()
		const c$: ConcurrencyAutoScaler = c == null ? $.pointerTarget<ConcurrencyAutoScaler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ConcurrencyAutoScaler>(c)
		const hint$: shared.AutoConfigHint = hint == null ? $.pointerTarget<shared.AutoConfigHint>(hint) : (hint as any).__isVarRef === true ? (hint as any).value : (hint as any).__goValue === undefined ? (hint as any) : $.pointerTarget<shared.AutoConfigHint>(hint)
		if (c == null) {
			return
		}

		if (hint == null) {
			return
		}

		await (c$ as ConcurrencyAutoScaler).lock.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as ConcurrencyAutoScaler).lock), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		if (((hint$ as shared.AutoConfigHint).PollerWaitTimeInMs != null) && ($.pointerValue<bigint>((hint$ as shared.AutoConfigHint).PollerWaitTimeInMs) >= 0n)) {
			let waitTimeInMs = $.pointerValue<bigint>((hint$ as shared.AutoConfigHint).PollerWaitTimeInMs)
			await rollingAverage.prototype.Add.call((c$ as ConcurrencyAutoScaler).pollerWaitTime, __goscriptStatic0(), $.int64Mul(1000000n, $.int64(waitTimeInMs)))
		}

		let shouldEnable: boolean = false
		if (((hint$ as shared.AutoConfigHint).EnableAutoConfig != null) && $.pointerValue<boolean>((hint$ as shared.AutoConfigHint).EnableAutoConfig)) {
			shouldEnable = true
		}
		if (shouldEnable != (c$ as ConcurrencyAutoScaler).enabled) {
			;(c$ as ConcurrencyAutoScaler).enabled = shouldEnable
			if (shouldEnable) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConcurrencyAutoScaler).logEvent("auto-scaler-enable") : ConcurrencyAutoScaler.prototype.logEvent.call(c, "auto-scaler-enable"))
			} else {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConcurrencyAutoScaler).resetConcurrency() : ConcurrencyAutoScaler.prototype.resetConcurrency.call(c))
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConcurrencyAutoScaler).logEvent("auto-scaler-disable") : ConcurrencyAutoScaler.prototype.logEvent.call(c, "auto-scaler-disable"))
			}
		}
	}

	public async Start(): globalThis.Promise<void> {
		const c: ConcurrencyAutoScaler | $.VarRef<ConcurrencyAutoScaler> | null = this;
		const c$: ConcurrencyAutoScaler = c == null ? $.pointerTarget<ConcurrencyAutoScaler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ConcurrencyAutoScaler>(c)
		if (c == null) {
			return
		}
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConcurrencyAutoScaler).logEvent("auto-scaler-start") : ConcurrencyAutoScaler.prototype.logEvent.call(c, "auto-scaler-start"))

		void (c$ as ConcurrencyAutoScaler).wg.Add(1)

		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			const __defer = new $.AsyncDisposableStack()
			try {
				const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Done())((c$ as ConcurrencyAutoScaler).wg), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*WaitGroup).Done-fm")
				__defer.defer(() => { __goscriptDeferCallee1() })
				__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
					{
						let r = $.recover()
						if (r != null) {
							await zap.Logger.prototype.Error.call((c$ as ConcurrencyAutoScaler).log, "panic in concurrency auto scaler, stopping the auto scaler", $.arrayToSlice<zap.Field>([await zap.Any("error", r)]))
						}
					}
				})() })
				let ticker = (__goscriptAwait = $.pointerValue<Exclude<clockwork.Clock, null>>((c$ as ConcurrencyAutoScaler).clock).NewTicker((c$ as ConcurrencyAutoScaler).updateTick), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Stop())((ticker !== null && (ticker as any).__isVarRef !== true && (ticker as any).__goValue === undefined ? (ticker as Exclude<clockwork.Ticker, null>) : $.pointerValue<Exclude<clockwork.Ticker, null>>(ticker))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/jonboulle/clockwork.Ticker.Stop-fm")
				__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee2(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
				while (true) {
					const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
						{
							id: 0,
							isSend: false,
							channel: (c$ as ConcurrencyAutoScaler).shutdownChan,
							onSelected: async (__goscriptSelect0Result) => {
								return $.selectVoidReturn()
							}
						},
						{
							id: 1,
							isSend: false,
							channel: ((__goscriptAwait = (ticker !== null && (ticker as any).__isVarRef !== true && (ticker as any).__goValue === undefined ? (ticker as Exclude<clockwork.Ticker, null>) : $.pointerValue<Exclude<clockwork.Ticker, null>>(ticker)).Chan(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<time.Time> | null),
							onSelected: async (__goscriptSelect0Result) => {
								await (c$ as ConcurrencyAutoScaler).lock.Lock()
								await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConcurrencyAutoScaler).logEvent("auto-scaler-emit-metrics") : ConcurrencyAutoScaler.prototype.logEvent.call(c, "auto-scaler-emit-metrics"))
								await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConcurrencyAutoScaler).updatePollerPermit() : ConcurrencyAutoScaler.prototype.updatePollerPermit.call(c))
								void (c$ as ConcurrencyAutoScaler).lock.Unlock()
							}
						}
					], false)
					if (__goscriptSelect0HasReturn) {
						return __goscriptSelect0Value
					}
				}
				await __defer.dispose()
			} catch (e) {
				await __defer.disposePanic(e)
				if (!$.recovered(e)) {
					throw e
				}
			}
		})() })
	}

	public async Stop(): globalThis.Promise<void> {
		const c: ConcurrencyAutoScaler | $.VarRef<ConcurrencyAutoScaler> | null = this;
		const c$: ConcurrencyAutoScaler = c == null ? $.pointerTarget<ConcurrencyAutoScaler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ConcurrencyAutoScaler>(c)
		if (c == null) {
			return
		}
		await (c$ as ConcurrencyAutoScaler).lock.Lock()
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConcurrencyAutoScaler).logEvent("auto-scaler-stop") : ConcurrencyAutoScaler.prototype.logEvent.call(c, "auto-scaler-stop"))
		void (c$ as ConcurrencyAutoScaler).lock.Unlock()
		void (c$ as ConcurrencyAutoScaler).shutdownChan!.close()
		await (c$ as ConcurrencyAutoScaler).wg.Wait()
	}

	public async logEvent(event: autoScalerEvent): globalThis.Promise<void> {
		const c: ConcurrencyAutoScaler | $.VarRef<ConcurrencyAutoScaler> | null = this;
		const c$: ConcurrencyAutoScaler = c == null ? $.pointerTarget<ConcurrencyAutoScaler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ConcurrencyAutoScaler>(c)
		if ((c$ as ConcurrencyAutoScaler).enabled) {
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((c$ as ConcurrencyAutoScaler).scope).Counter("enabled"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((c$ as ConcurrencyAutoScaler).scope).Counter("disabled"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		void (__goscriptAwait = $.pointerValue<Exclude<tally.Histogram, null>>((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((c$ as ConcurrencyAutoScaler).scope).Histogram("poller-quota", $.namedValueInterfaceValue<tally.Buckets | null>(metricsPollerQuotaBuckets, "tally.ValueBuckets", __goscriptStatic1(), __goscriptStatic2(), __goscriptStatic3())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).RecordValue((__goscriptAwait = $.pointerValue<Exclude<__goscript_concurrency.Permit, null>>($.pointerValue<__goscript_concurrency.ConcurrencyLimit>((c$ as ConcurrencyAutoScaler).concurrency).PollerPermit).Quota(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = $.pointerValue<Exclude<tally.Histogram, null>>((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((c$ as ConcurrencyAutoScaler).scope).Histogram("poller-wait-time", $.namedValueInterfaceValue<tally.Buckets | null>(metricsPollerWaitTimeBuckets, "tally.DurationBuckets", __goscriptStatic4(), __goscriptStatic5(), __goscriptStatic3())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).RecordDuration(await rollingAverage.prototype.Average.call((c$ as ConcurrencyAutoScaler).pollerWaitTime, __goscriptStatic0())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (!$.stringEqual(event, "auto-scaler-emit-metrics")) {
			await zap.Logger.prototype.Debug.call((c$ as ConcurrencyAutoScaler).log, "concurrency auto scaler event", $.arrayToSlice<zap.Field>([zap.String("event", event), zap.Bool("enabled", (c$ as ConcurrencyAutoScaler).enabled), zap.Int("poller_quota", (__goscriptAwait = $.pointerValue<Exclude<__goscript_concurrency.Permit, null>>($.pointerValue<__goscript_concurrency.ConcurrencyLimit>((c$ as ConcurrencyAutoScaler).concurrency).PollerPermit).Quota(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]))
		}
	}

	public async resetConcurrency(): globalThis.Promise<void> {
		const c: ConcurrencyAutoScaler | $.VarRef<ConcurrencyAutoScaler> | null = this;
		const c$: ConcurrencyAutoScaler = c == null ? $.pointerTarget<ConcurrencyAutoScaler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ConcurrencyAutoScaler>(c)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_concurrency.Permit, null>>($.pointerValue<__goscript_concurrency.ConcurrencyLimit>((c$ as ConcurrencyAutoScaler).concurrency).PollerPermit).SetQuota((c$ as ConcurrencyAutoScaler).pollerInitCount), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async scaleDownPollerPermit(pollerWaitTime: time.Duration): globalThis.Promise<number> {
		const c: ConcurrencyAutoScaler | $.VarRef<ConcurrencyAutoScaler> | null = this;
		const c$: ConcurrencyAutoScaler = c == null ? $.pointerTarget<ConcurrencyAutoScaler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ConcurrencyAutoScaler>(c)
		let currentQuota = (__goscriptAwait = $.pointerValue<Exclude<__goscript_concurrency.Permit, null>>($.pointerValue<__goscript_concurrency.ConcurrencyLimit>((c$ as ConcurrencyAutoScaler).concurrency).PollerPermit).Quota(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		// inverse scaling with edge case of 0 wait time
		// use logrithm to smooth the scaling to avoid drastic change
		let newQuota = math.Round((currentQuota * smoothingFunc((c$ as ConcurrencyAutoScaler).pollerWaitTimeUpperBound)) / smoothingFunc(pollerWaitTime))
		newQuota = math.Max((c$ as ConcurrencyAutoScaler).pollerMinCount, math.Min((c$ as ConcurrencyAutoScaler).pollerMaxCount, newQuota))
		return $.int(newQuota)
	}

	public async scaleUpPollerPermit(pollerWaitTime: time.Duration): globalThis.Promise<number> {
		const c: ConcurrencyAutoScaler | $.VarRef<ConcurrencyAutoScaler> | null = this;
		const c$: ConcurrencyAutoScaler = c == null ? $.pointerTarget<ConcurrencyAutoScaler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ConcurrencyAutoScaler>(c)
		let currentQuota = (__goscriptAwait = $.pointerValue<Exclude<__goscript_concurrency.Permit, null>>($.pointerValue<__goscript_concurrency.ConcurrencyLimit>((c$ as ConcurrencyAutoScaler).concurrency).PollerPermit).Quota(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		// inverse scaling with edge case of 0 wait time
		// use logrithm to smooth the scaling to avoid drastic change
		let newQuota = math.Round((currentQuota * smoothingFunc((c$ as ConcurrencyAutoScaler).pollerWaitTimeLowerBound)) / smoothingFunc(pollerWaitTime))
		newQuota = math.Max((c$ as ConcurrencyAutoScaler).pollerMinCount, math.Min((c$ as ConcurrencyAutoScaler).pollerMaxCount, newQuota))
		return $.int(newQuota)
	}

	public async updatePollerPermit(): globalThis.Promise<void> {
		let c: ConcurrencyAutoScaler | $.VarRef<ConcurrencyAutoScaler> | null = this;
		const c$: ConcurrencyAutoScaler = c == null ? $.pointerTarget<ConcurrencyAutoScaler>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ConcurrencyAutoScaler>(c)
		if (!(c$ as ConcurrencyAutoScaler).enabled) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConcurrencyAutoScaler).logEvent("poller-limit-skip-update-not-enabled") : ConcurrencyAutoScaler.prototype.logEvent.call(c, "poller-limit-skip-update-not-enabled"))
			return
		}
		let updateTime = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<clockwork.Clock, null>>((c$ as ConcurrencyAutoScaler).clock).Now(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time)))
		if ($.markAsStructValue($.cloneStructValue(updateTime)).Before($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((c$ as ConcurrencyAutoScaler).pollerPermitLastUpdate)).Add((c$ as ConcurrencyAutoScaler).cooldown))))) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConcurrencyAutoScaler).logEvent("poller-limit-skip-update-cooldown") : ConcurrencyAutoScaler.prototype.logEvent.call(c, "poller-limit-skip-update-cooldown"))
			return
		}

		let newQuota: number = 0
		let pollerWaitTime = (await rollingAverage.prototype.Average.call((c$ as ConcurrencyAutoScaler).pollerWaitTime, __goscriptStatic0()) as time.Duration)
		if (pollerWaitTime < (c$ as ConcurrencyAutoScaler).pollerWaitTimeLowerBound) {
			newQuota = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConcurrencyAutoScaler).scaleUpPollerPermit(pollerWaitTime) : ConcurrencyAutoScaler.prototype.scaleUpPollerPermit.call(c, pollerWaitTime))
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_concurrency.Permit, null>>($.pointerValue<__goscript_concurrency.ConcurrencyLimit>((c$ as ConcurrencyAutoScaler).concurrency).PollerPermit).SetQuota(newQuota), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			$.assignStruct((c$ as ConcurrencyAutoScaler).pollerPermitLastUpdate, updateTime)
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConcurrencyAutoScaler).logEvent("poller-limit-scale-up") : ConcurrencyAutoScaler.prototype.logEvent.call(c, "poller-limit-scale-up"))
		} else {
			if (pollerWaitTime > (c$ as ConcurrencyAutoScaler).pollerWaitTimeUpperBound) {
				newQuota = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConcurrencyAutoScaler).scaleDownPollerPermit(pollerWaitTime) : ConcurrencyAutoScaler.prototype.scaleDownPollerPermit.call(c, pollerWaitTime))
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_concurrency.Permit, null>>($.pointerValue<__goscript_concurrency.ConcurrencyLimit>((c$ as ConcurrencyAutoScaler).concurrency).PollerPermit).SetQuota(newQuota), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				$.assignStruct((c$ as ConcurrencyAutoScaler).pollerPermitLastUpdate, updateTime)
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConcurrencyAutoScaler).logEvent("poller-limit-scale-down") : ConcurrencyAutoScaler.prototype.logEvent.call(c, "poller-limit-scale-down"))
			} else {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConcurrencyAutoScaler).logEvent("poller-limit-skip-update-no-change") : ConcurrencyAutoScaler.prototype.logEvent.call(c, "poller-limit-skip-update-no-change"))
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"worker.ConcurrencyAutoScaler",
		() => new ConcurrencyAutoScaler(),
		() => [$.methodSignature("ProcessPollerHint", [["hint", /* @__PURE__ */ $.pointerType("shared.AutoConfigHint")]], [], true), $.methodSignature("Start", [], [], true), $.methodSignature("Stop", [], [], true), $.methodSignature("logEvent", [["event", /* @__PURE__ */ $.basicType("string", "worker.autoScalerEvent")]], [], true), $.methodSignature("resetConcurrency", [], [], true), $.methodSignature("scaleDownPollerPermit", [["pollerWaitTime", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("scaleUpPollerPermit", [["pollerWaitTime", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("updatePollerPermit", [], [], true)],
		ConcurrencyAutoScaler,
		() => [/* @__PURE__ */ $.structField("shutdownChan", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("wg", "sync.WaitGroup", [1], 8, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("log", /* @__PURE__ */ $.pointerType("zap.Logger"), [2], 24, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("scope", "tally.Scope", [3], 32, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("clock", "clockwork.Clock", [4], 48, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("concurrency", /* @__PURE__ */ $.pointerType("worker.ConcurrencyLimit"), [5], 64, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("cooldown", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [6], 72, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("updateTick", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [7], 80, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("lock", "sync.RWMutex", [8], 88, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("enabled", /* @__PURE__ */ $.basicType("bool"), [9], 112, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("pollerInitCount", /* @__PURE__ */ $.basicType("int"), [10], 120, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("pollerMaxCount", /* @__PURE__ */ $.basicType("int"), [11], 128, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("pollerMinCount", /* @__PURE__ */ $.basicType("int"), [12], 136, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("pollerWaitTime", /* @__PURE__ */ $.pointerType("worker.rollingAverage"), [13], 144, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("pollerPermitLastUpdate", "time.Time", [14], 152, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("pollerWaitTimeUpperBound", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [15], 176, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("pollerWaitTimeLowerBound", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [16], 184, false, { pkgPath: "go.uber.org/cadence/internal/worker" })]
	)
}

export class ConcurrencyAutoScalerInput {
	public get Concurrency(): __goscript_concurrency.ConcurrencyLimit | $.VarRef<__goscript_concurrency.ConcurrencyLimit> | null {
		return this._fields.Concurrency
	}

	public set Concurrency(value: __goscript_concurrency.ConcurrencyLimit | $.VarRef<__goscript_concurrency.ConcurrencyLimit> | null) {
		this._fields.Concurrency = value
	}

	public get Cooldown(): time.Duration {
		return this._fields.Cooldown
	}

	public set Cooldown(value: time.Duration) {
		this._fields.Cooldown = value
	}

	public get Tick(): time.Duration {
		return this._fields.Tick
	}

	public set Tick(value: time.Duration) {
		this._fields.Tick = value
	}

	public get PollerMaxCount(): number {
		return this._fields.PollerMaxCount
	}

	public set PollerMaxCount(value: number) {
		this._fields.PollerMaxCount = value
	}

	public get PollerMinCount(): number {
		return this._fields.PollerMinCount
	}

	public set PollerMinCount(value: number) {
		this._fields.PollerMinCount = value
	}

	public get PollerWaitTimeUpperBound(): time.Duration {
		return this._fields.PollerWaitTimeUpperBound
	}

	public set PollerWaitTimeUpperBound(value: time.Duration) {
		this._fields.PollerWaitTimeUpperBound = value
	}

	public get PollerWaitTimeLowerBound(): time.Duration {
		return this._fields.PollerWaitTimeLowerBound
	}

	public set PollerWaitTimeLowerBound(value: time.Duration) {
		this._fields.PollerWaitTimeLowerBound = value
	}

	public get Logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.Logger
	}

	public set Logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.Logger = value
	}

	public get Scope(): tally.Scope | null {
		return this._fields.Scope
	}

	public set Scope(value: tally.Scope | null) {
		this._fields.Scope = value
	}

	public get Clock(): clockwork.Clock | null {
		return this._fields.Clock
	}

	public set Clock(value: clockwork.Clock | null) {
		this._fields.Clock = value
	}

	public _fields: {
		Concurrency: __goscript_concurrency.ConcurrencyLimit | $.VarRef<__goscript_concurrency.ConcurrencyLimit> | null
		Cooldown: time.Duration
		Tick: time.Duration
		PollerMaxCount: number
		PollerMinCount: number
		PollerWaitTimeUpperBound: time.Duration
		PollerWaitTimeLowerBound: time.Duration
		Logger: zap.Logger | $.VarRef<zap.Logger> | null
		Scope: tally.Scope | null
		Clock: clockwork.Clock | null
	}

	constructor(init?: Partial<{Concurrency?: __goscript_concurrency.ConcurrencyLimit | $.VarRef<__goscript_concurrency.ConcurrencyLimit> | null, Cooldown?: time.Duration, Tick?: time.Duration, PollerMaxCount?: number, PollerMinCount?: number, PollerWaitTimeUpperBound?: time.Duration, PollerWaitTimeLowerBound?: time.Duration, Logger?: zap.Logger | $.VarRef<zap.Logger> | null, Scope?: tally.Scope | null, Clock?: clockwork.Clock | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Concurrency: init?.Concurrency ?? (null! as __goscript_concurrency.ConcurrencyLimit | $.VarRef<__goscript_concurrency.ConcurrencyLimit> | null),
			Cooldown: init?.Cooldown ?? (0n as time.Duration),
			Tick: init?.Tick ?? (0n as time.Duration),
			PollerMaxCount: init?.PollerMaxCount ?? (0 as number),
			PollerMinCount: init?.PollerMinCount ?? (0 as number),
			PollerWaitTimeUpperBound: init?.PollerWaitTimeUpperBound ?? (0n as time.Duration),
			PollerWaitTimeLowerBound: init?.PollerWaitTimeLowerBound ?? (0n as time.Duration),
			Logger: init?.Logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			Scope: init?.Scope ?? (null! as tally.Scope | null),
			Clock: init?.Clock ?? (null! as clockwork.Clock | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ConcurrencyAutoScalerInput {
		return new ConcurrencyAutoScalerInput(this, true)
	}

	public __goscriptAssign(source: ConcurrencyAutoScalerInput): void {
		const target = this._fields
		const values = source._fields
		target.Concurrency = values.Concurrency
		target.Cooldown = values.Cooldown
		target.Tick = values.Tick
		target.PollerMaxCount = values.PollerMaxCount
		target.PollerMinCount = values.PollerMinCount
		target.PollerWaitTimeUpperBound = values.PollerWaitTimeUpperBound
		target.PollerWaitTimeLowerBound = values.PollerWaitTimeLowerBound
		target.Logger = values.Logger
		target.Scope = $.assignFieldValue(target.Scope, values.Scope, "tally.Scope")
		target.Clock = $.assignFieldValue(target.Clock, values.Clock, "clockwork.Clock")
	}

	static __typeInfo = $.registerStructType(
		"worker.ConcurrencyAutoScalerInput",
		() => new ConcurrencyAutoScalerInput(),
		() => [],
		ConcurrencyAutoScalerInput,
		() => [/* @__PURE__ */ $.structField("Concurrency", /* @__PURE__ */ $.pointerType("worker.ConcurrencyLimit"), [0], 0, true), /* @__PURE__ */ $.structField("Cooldown", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 8, true), /* @__PURE__ */ $.structField("Tick", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 16, true), /* @__PURE__ */ $.structField("PollerMaxCount", /* @__PURE__ */ $.basicType("int"), [3], 24, true), /* @__PURE__ */ $.structField("PollerMinCount", /* @__PURE__ */ $.basicType("int"), [4], 32, true), /* @__PURE__ */ $.structField("PollerWaitTimeUpperBound", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [5], 40, true), /* @__PURE__ */ $.structField("PollerWaitTimeLowerBound", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [6], 48, true), /* @__PURE__ */ $.structField("Logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [7], 56, true), /* @__PURE__ */ $.structField("Scope", "tally.Scope", [8], 64, true), /* @__PURE__ */ $.structField("Clock", "clockwork.Clock", [9], 80, true)]
	)
}

export class rollingAverage {
	public get mu(): sync.RWMutex {
		return this._fields.mu
	}

	public set mu(value: sync.RWMutex) {
		this._fields.mu = value
	}

	public get window(): $.Slice<any> {
		return this._fields.window
	}

	public set window(value: $.Slice<any>) {
		this._fields.window = value
	}

	public get index(): number {
		return this._fields.index
	}

	public set index(value: number) {
		this._fields.index = value
	}

	public get sum(): any {
		return this._fields.sum
	}

	public set sum(value: any) {
		this._fields.sum = value
	}

	public get count(): number {
		return this._fields.count
	}

	public set count(value: number) {
		this._fields.count = value
	}

	public _fields: {
		mu: sync.RWMutex
		window: $.Slice<any>
		index: number
		sum: any
		count: number
	}

	constructor(init?: Partial<{mu?: sync.RWMutex, window?: $.Slice<any>, index?: number, sum?: any, count?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.RWMutex()),
			window: init?.window ?? (null! as $.Slice<any>),
			index: init?.index ?? (0 as number),
			sum: init?.sum ?? (null! as any),
			count: init?.count ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): rollingAverage {
		return new rollingAverage(this, true)
	}

	public __goscriptAssign(source: rollingAverage): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.window = values.window
		target.index = values.index
		target.sum = $.assignFieldValue(target.sum, values.sum, { kind: $.TypeKind.Interface, methods: [] })
		target.count = values.count
	}

	public async Add(__typeArgs: $.GenericTypeArgs | undefined, value: any): globalThis.Promise<void> {
		let r: rollingAverage | $.VarRef<rollingAverage> | null = this;
		using __defer = new $.DisposableStack()
		const r$: rollingAverage = r == null ? $.pointerTarget<rollingAverage>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<rollingAverage>(r)
		// no op on zero rolling window
		if ($.sliceLen((r$ as rollingAverage).window) == 0) {
			return
		}

		await (r$ as rollingAverage).mu.Lock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((r$ as rollingAverage).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() });

		// replace the old value with the new value
		;(r$ as rollingAverage).sum = (r$ as rollingAverage).sum + ((value as any) - ($.arrayIndex((r$ as rollingAverage).window!, (r$ as rollingAverage).index) as any))
		$.sliceElems((r$ as rollingAverage).window!)[$.sliceSlot((r$ as rollingAverage).window!, (r$ as rollingAverage).index)] = value;
		;(r$ as rollingAverage).index++;
		;(r$ as rollingAverage).index = (r$ as rollingAverage).index % ($.sliceLen((r$ as rollingAverage).window))

		if ((r$ as rollingAverage).count < $.sliceLen((r$ as rollingAverage).window)) {
			;(r$ as rollingAverage).count++
		}
	}

	public async Average(__typeArgs: $.GenericTypeArgs | undefined): globalThis.Promise<any> {
		const r: rollingAverage | $.VarRef<rollingAverage> | null = this;
		using __defer = new $.DisposableStack()
		const r$: rollingAverage = r == null ? $.pointerTarget<rollingAverage>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<rollingAverage>(r)
		await (r$ as rollingAverage).mu.RLock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((r$ as rollingAverage).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })
		if ((r$ as rollingAverage).count == 0) {
			return 0
		}
		return ((r$ as rollingAverage).sum as any) / ($.genericConvert<any>(__typeArgs, "T", (r$ as rollingAverage).count) as any)
	}

	static __typeInfo = $.registerStructType(
		"worker.rollingAverage",
		() => new rollingAverage(),
		() => [$.methodSignature("Add", [["value", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("Average", [], [{ kind: $.TypeKind.Interface, methods: [] }], true)],
		rollingAverage,
		() => [/* @__PURE__ */ $.structField("mu", "sync.RWMutex", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("window", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [1], 0, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("index", /* @__PURE__ */ $.basicType("int"), [2], 0, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("sum", { kind: $.TypeKind.Interface, methods: [] }, [3], 0, false, { pkgPath: "go.uber.org/cadence/internal/worker" }), /* @__PURE__ */ $.structField("count", /* @__PURE__ */ $.basicType("int"), [4], 0, false, { pkgPath: "go.uber.org/cadence/internal/worker" })]
	)
}

export const defaultAutoScalerUpdateTick: time.Duration = 1000000000n

export const numberOfPollsInRollingAverage: number = 5

export const autoScalerEventPollerScaleUp: autoScalerEvent = "poller-limit-scale-up"

export const autoScalerEventPollerScaleDown: autoScalerEvent = "poller-limit-scale-down"

export const autoScalerEventPollerSkipUpdateCooldown: autoScalerEvent = "poller-limit-skip-update-cooldown"

export const autoScalerEventPollerSkipUpdateNoChange: autoScalerEvent = "poller-limit-skip-update-no-change"

export const autoScalerEventPollerSkipUpdateNotEnabled: autoScalerEvent = "poller-limit-skip-update-not-enabled"

export const autoScalerEventEmitMetrics: autoScalerEvent = "auto-scaler-emit-metrics"

export const autoScalerEventEnable: autoScalerEvent = "auto-scaler-enable"

export const autoScalerEventDisable: autoScalerEvent = "auto-scaler-disable"

export const autoScalerEventStart: autoScalerEvent = "auto-scaler-start"

export const autoScalerEventStop: autoScalerEvent = "auto-scaler-stop"

export const autoScalerEventLogMsg: string = "concurrency auto scaler event"

export const metricsEnabled: string = "enabled"

export const metricsDisabled: string = "disabled"

export const metricsPollerQuota: string = "poller-quota"

export const metricsPollerWaitTime: string = "poller-wait-time"

export let metricsPollerQuotaBuckets: tally.ValueBuckets = await (tally.MustMakeExponentialValueBuckets(1, 2, 10) as tally.ValueBuckets)

export function __goscript_set_metricsPollerQuotaBuckets(__goscriptValue: tally.ValueBuckets): void {
	metricsPollerQuotaBuckets = __goscriptValue
}

export let metricsPollerWaitTimeBuckets: tally.DurationBuckets = await (tally.MustMakeExponentialDurationBuckets(1000000n, 2, 14) as tally.DurationBuckets)

export function __goscript_set_metricsPollerWaitTimeBuckets(__goscriptValue: tally.DurationBuckets): void {
	metricsPollerWaitTimeBuckets = __goscriptValue
}

export async function NewConcurrencyAutoScaler(input: ConcurrencyAutoScalerInput): globalThis.Promise<ConcurrencyAutoScaler | $.VarRef<ConcurrencyAutoScaler> | null> {
	let tick = 1000000000n
	if (input.Tick != 0n) {
		tick = input.Tick
	}
	return (await (async () => { const __goscriptLiteralField0 = await zap.Logger.prototype.With.call(input.Logger, $.arrayToSlice<zap.Field>([zap.String("component", metrics.ConcurrencyAutoScalerScope)])); const __goscriptLiteralField1 = (__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>(input.Scope).SubScope(metrics.ConcurrencyAutoScalerScope), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField2 = (__goscriptAwait = $.pointerValue<Exclude<__goscript_concurrency.Permit, null>>($.pointerValue<__goscript_concurrency.ConcurrencyLimit>(input.Concurrency).PollerPermit).Quota(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField3 = newRollingAverage(__goscriptStatic0(), 5); const __goscriptLiteralField4 = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<clockwork.Clock, null>>(input.Clock).Now(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))); return new ConcurrencyAutoScaler({shutdownChan: $.makeChannel<{}>(0, {}, "both"), concurrency: input.Concurrency, cooldown: input.Cooldown, log: __goscriptLiteralField0, scope: __goscriptLiteralField1, clock: input.Clock, updateTick: tick, enabled: false, pollerInitCount: __goscriptLiteralField2, pollerMaxCount: input.PollerMaxCount, pollerMinCount: input.PollerMinCount, pollerWaitTime: __goscriptLiteralField3, pollerWaitTimeUpperBound: input.PollerWaitTimeUpperBound, pollerWaitTimeLowerBound: input.PollerWaitTimeLowerBound, pollerPermitLastUpdate: __goscriptLiteralField4}) })())
}

export function smoothingFunc(x: time.Duration): number {
	return math.Log2(2 + globalThis.Number($.int64Div(x, 1000000n)))
}

export function newRollingAverage(__typeArgs: $.GenericTypeArgs | undefined, capacity: number): rollingAverage | $.VarRef<rollingAverage> | null {
	return new rollingAverage({window: $.makeSlice<any>(capacity, undefined, undefined, () => ($.genericZero(__typeArgs, "T", null) as any)), sum: $.genericZero(__typeArgs, "T", null)})
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int64", "time.Duration"), zero: () => 0n, methods: {Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])] }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({AsDurations: (receiver: any, ...args: any[]) => (tally.ValueBuckets_AsDurations as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), AsValues: (receiver: any, ...args: any[]) => (tally.ValueBuckets_AsValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (tally.ValueBuckets_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (tally.ValueBuckets_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (tally.ValueBuckets_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (tally.ValueBuckets_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"), "tally.ValueBuckets"))
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ([$.methodSignature("AsDurations", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))]), $.methodSignature("AsValues", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ({AsDurations: (receiver: any, ...args: any[]) => (tally.DurationBuckets_AsDurations as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), AsValues: (receiver: any, ...args: any[]) => (tally.DurationBuckets_AsValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (tally.DurationBuckets_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (tally.DurationBuckets_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (tally.DurationBuckets_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (tally.DurationBuckets_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"), "tally.DurationBuckets"))
}

var __goscriptAwait: any
