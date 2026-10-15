// Generated file based on emit.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as __goscript_histograms from "./histograms.gs.ts"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "./histograms.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal/common/metrics", ["metrics.MetricEmitMode", "metrics.DualStopwatch"])

export type MetricEmitMode = number

export class DualStopwatch {
	public get timerSW(): tally.Stopwatch {
		return this._fields.timerSW
	}

	public set timerSW(value: tally.Stopwatch) {
		this._fields.timerSW = value
	}

	public get histogramSW(): tally.Stopwatch {
		return this._fields.histogramSW
	}

	public set histogramSW(value: tally.Stopwatch) {
		this._fields.histogramSW = value
	}

	public get mode(): MetricEmitMode {
		return this._fields.mode
	}

	public set mode(value: MetricEmitMode) {
		this._fields.mode = value
	}

	public _fields: {
		timerSW: tally.Stopwatch
		histogramSW: tally.Stopwatch
		mode: MetricEmitMode
	}

	constructor(init?: Partial<{timerSW?: tally.Stopwatch, histogramSW?: tally.Stopwatch, mode?: MetricEmitMode}>, __goscriptValue?: boolean) {
		this._fields = {
			timerSW: init?.timerSW ? init.timerSW.clone() : new tally.Stopwatch(undefined, true),
			histogramSW: init?.histogramSW ? init.histogramSW.clone() : new tally.Stopwatch(undefined, true),
			mode: init?.mode ?? (0 as MetricEmitMode)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DualStopwatch {
		return new DualStopwatch(this, true)
	}

	public __goscriptAssign(source: DualStopwatch): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.timerSW, values.timerSW)
		$.assignStruct(target.histogramSW, values.histogramSW)
		target.mode = values.mode
	}

	public async Stop(): globalThis.Promise<void> {
		const sw: DualStopwatch | $.VarRef<DualStopwatch> | null = this;
		const sw$: DualStopwatch = sw == null ? $.pointerTarget<DualStopwatch>(sw) : (sw as any).__isVarRef === true ? (sw as any).value : (sw as any).__goValue === undefined ? (sw as any) : $.pointerTarget<DualStopwatch>(sw)
		switch ((sw$ as DualStopwatch).mode) {
			case 1:
			{
				await $.markAsStructValue($.cloneStructValue((sw$ as DualStopwatch).timerSW)).Stop()
				break
			}
			case 2:
			{
				await $.markAsStructValue($.cloneStructValue((sw$ as DualStopwatch).timerSW)).Stop()
				await $.markAsStructValue($.cloneStructValue((sw$ as DualStopwatch).histogramSW)).Stop()
				break
			}
			case 3:
			{
				await $.markAsStructValue($.cloneStructValue((sw$ as DualStopwatch).histogramSW)).Stop()
				break
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"metrics.DualStopwatch",
		() => new DualStopwatch(),
		() => [$.methodSignature("Stop", [], [], true)],
		DualStopwatch,
		() => [/* @__PURE__ */ $.structField("timerSW", "tally.Stopwatch", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("histogramSW", "tally.Stopwatch", [1], 40, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("mode", /* @__PURE__ */ $.basicType("int", "metrics.MetricEmitMode"), [2], 80, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" })]
	)
}

export const EmitModeUnset: MetricEmitMode = 0

export const EmitTimersOnly: MetricEmitMode = 1

export const EmitBoth: MetricEmitMode = 2

export const EmitHistogramsOnly: MetricEmitMode = 3

export let currentEmitMode: $.VarRef<number> = $.varRef(3)

export function __goscript_set_currentEmitMode(__goscriptValue: number): void {
	currentEmitMode.value = __goscriptValue
}

export function SetEmitMode(mode: MetricEmitMode): void {
	atomic.StoreInt32(currentEmitMode, $.int(mode, 32))
}

export function GetCurrentEmitMode(): MetricEmitMode {
	return $.int(atomic.LoadInt32(currentEmitMode))
}

export async function EmitLatency(scope: tally.Scope | null, name: string, latency: time.Duration, buckets: __goscript_histograms.SubsettableHistogram): globalThis.Promise<void> {
	switch (GetCurrentEmitMode()) {
		case 1:
		{
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Timer, null>>((__goscriptAwait = (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? (scope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(scope)).Timer(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Record(latency), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		case 2:
		{
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Timer, null>>((__goscriptAwait = (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? (scope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(scope)).Timer(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Record(latency), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await __goscript_histograms.RecordHistogram(scope, name, latency, buckets)
			break
		}
		case 3:
		{
			await __goscript_histograms.RecordHistogram(scope, name, latency, buckets)
			break
		}
	}
}

export async function StartLatency(scope: tally.Scope | null, name: string, buckets: __goscript_histograms.SubsettableHistogram): globalThis.Promise<DualStopwatch | $.VarRef<DualStopwatch> | null> {
	let mode = GetCurrentEmitMode()
	let sw: DualStopwatch | $.VarRef<DualStopwatch> | null = new DualStopwatch({mode: mode})
	let sw$: DualStopwatch = sw == null ? $.pointerTarget<DualStopwatch>(sw) : (sw as any).__isVarRef === true ? (sw as any).value : (sw as any).__goValue === undefined ? (sw as any) : $.pointerTarget<DualStopwatch>(sw)

	switch (mode) {
		case 1:
		{
			$.assignStruct((sw$ as DualStopwatch).timerSW, ((__goscriptAwait = $.pointerValue<Exclude<tally.Timer, null>>((__goscriptAwait = (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? (scope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(scope)).Timer(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Start(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as tally.Stopwatch))
			break
		}
		case 2:
		{
			$.assignStruct((sw$ as DualStopwatch).timerSW, ((__goscriptAwait = $.pointerValue<Exclude<tally.Timer, null>>((__goscriptAwait = (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? (scope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(scope)).Timer(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Start(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as tally.Stopwatch))
			$.assignStruct((sw$ as DualStopwatch).histogramSW, await __goscript_histograms.StartHistogram(scope, name, buckets))
			break
		}
		case 3:
		{
			$.assignStruct((sw$ as DualStopwatch).histogramSW, await __goscript_histograms.StartHistogram(scope, name, buckets))
			break
		}
	}

	return sw
}

var __goscriptAwait: any
