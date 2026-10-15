// Generated file based on stats.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as sort from "@goscript/sort/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as identity from "@goscript/github.com/uber-go/tally/internal/identity/index.js"

import * as __goscript_histogram from "./histogram.gs.ts"

import * as __goscript_reporter from "./reporter.gs.ts"

import * as __goscript_scope from "./scope.gs.ts"

import * as __goscript_types from "./types.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/sort/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/uber-go/tally/internal/identity/index.js"
import "./histogram.gs.ts"
import "./reporter.gs.ts"
import "./scope.gs.ts"
import "./types.gs.ts"

$.registerTypePackagePath("github.com/uber-go/tally", ["tally.capabilities", "tally.counter", "tally.gauge", "tally.timer", "tally.timerValues", "tally.timerNoReporterSink", "tally.sampleCounter", "tally.histogram", "tally.histogramType", "tally.histogramBucket", "tally.bucketStorage", "tally.bucketCache", "tally.nullStatsReporter"])

export type histogramType = number

export class capabilities {
	public get reporting(): boolean {
		return this._fields.reporting
	}

	public set reporting(value: boolean) {
		this._fields.reporting = value
	}

	public get tagging(): boolean {
		return this._fields.tagging
	}

	public set tagging(value: boolean) {
		this._fields.tagging = value
	}

	public _fields: {
		reporting: boolean
		tagging: boolean
	}

	constructor(init?: Partial<{reporting?: boolean, tagging?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			reporting: init?.reporting ?? (false as boolean),
			tagging: init?.tagging ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): capabilities {
		return new capabilities(this, true)
	}

	public __goscriptAssign(source: capabilities): void {
		const target = this._fields
		const values = source._fields
		target.reporting = values.reporting
		target.tagging = values.tagging
	}

	public Reporting(): boolean {
		const c: capabilities | $.VarRef<capabilities> | null = this;
		return $.pointerValue<capabilities>(c).reporting
	}

	public Tagging(): boolean {
		const c: capabilities | $.VarRef<capabilities> | null = this;
		return $.pointerValue<capabilities>(c).tagging
	}

	static __typeInfo = $.registerStructType(
		"tally.capabilities",
		() => new capabilities(),
		() => [{ name: "Reporting", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "Tagging", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }],
		capabilities,
		() => [{ name: "reporting", key: "reporting", type: /* @__PURE__ */ $.basicType("bool") }, { name: "tagging", key: "tagging", type: /* @__PURE__ */ $.basicType("bool") }]
	)
}

export class counter {
	public get prev(): bigint {
		return this._fields.prev
	}

	public set prev(value: bigint) {
		this._fields.prev = value
	}

	public get curr(): bigint {
		return this._fields.curr
	}

	public set curr(value: bigint) {
		this._fields.curr = value
	}

	public get cachedCount(): __goscript_reporter.CachedCount | null {
		return this._fields.cachedCount
	}

	public set cachedCount(value: __goscript_reporter.CachedCount | null) {
		this._fields.cachedCount = value
	}

	public _fields: {
		prev: bigint
		curr: bigint
		cachedCount: __goscript_reporter.CachedCount | null
	}

	constructor(init?: Partial<{prev?: bigint, curr?: bigint, cachedCount?: __goscript_reporter.CachedCount | null}>, __goscriptValue?: boolean) {
		this._fields = {
			prev: init?.prev ?? (0n as bigint),
			curr: init?.curr ?? (0n as bigint),
			cachedCount: init?.cachedCount ?? (null! as __goscript_reporter.CachedCount | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): counter {
		return new counter(this, true)
	}

	public __goscriptAssign(source: counter): void {
		const target = this._fields
		const values = source._fields
		target.prev = values.prev
		target.curr = values.curr
		target.cachedCount = $.assignFieldValue(target.cachedCount, values.cachedCount, "tally.CachedCount")
	}

	public Inc(v: bigint): void {
		const c: counter | $.VarRef<counter> | null = this;
		atomic.AddInt64($.fieldRef($.pointerValue<counter>(c)._fields, "curr"), v)
	}

	public async cachedReport(): globalThis.Promise<void> {
		const c: counter | $.VarRef<counter> | null = this;
		let delta = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as counter).value() : counter.prototype.value.call(c))
		if (delta == 0n) {
			return
		}

		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_reporter.CachedCount, null>>($.pointerValue<counter>(c).cachedCount).ReportCount(delta), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async report(name: string, tags: globalThis.Map<string, string> | null, r: __goscript_reporter.StatsReporter | null): globalThis.Promise<void> {
		const c: counter | $.VarRef<counter> | null = this;
		let delta = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as counter).value() : counter.prototype.value.call(c))
		if (delta == 0n) {
			return
		}

		void (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<__goscript_reporter.StatsReporter, null>) : $.pointerValue<Exclude<__goscript_reporter.StatsReporter, null>>(r)).ReportCounter(name, tags, delta), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public snapshot(): bigint {
		const c: counter | $.VarRef<counter> | null = this;
		const c$: counter = c == null ? $.pointerTarget<counter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<counter>(c)
		return $.int64Sub(atomic.LoadInt64($.fieldRef((c$ as counter)._fields, "curr")), atomic.LoadInt64($.fieldRef((c$ as counter)._fields, "prev")))
	}

	public value(): bigint {
		const c: counter | $.VarRef<counter> | null = this;
		const c$: counter = c == null ? $.pointerTarget<counter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<counter>(c)
		let curr = atomic.LoadInt64($.fieldRef((c$ as counter)._fields, "curr"))

		let prev = atomic.LoadInt64($.fieldRef((c$ as counter)._fields, "prev"))
		if (prev == curr) {
			return 0n
		}
		atomic.StoreInt64($.fieldRef((c$ as counter)._fields, "prev"), curr)
		return $.int64Sub(curr, prev)
	}

	static __typeInfo = $.registerStructType(
		"tally.counter",
		() => new counter(),
		() => [{ name: "Inc", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "cachedReport", args: [], returns: [], pointerReceiver: true }, { name: "report", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "snapshot", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }], pointerReceiver: true }, { name: "value", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }], pointerReceiver: true }],
		counter,
		() => [{ name: "prev", key: "prev", type: /* @__PURE__ */ $.basicType("int64") }, { name: "curr", key: "curr", type: /* @__PURE__ */ $.basicType("int64") }, { name: "cachedCount", key: "cachedCount", type: "tally.CachedCount" }]
	)
}

export class gauge {
	public get updated(): bigint {
		return this._fields.updated
	}

	public set updated(value: bigint) {
		this._fields.updated = value
	}

	public get curr(): bigint {
		return this._fields.curr
	}

	public set curr(value: bigint) {
		this._fields.curr = value
	}

	public get cachedGauge(): __goscript_reporter.CachedGauge | null {
		return this._fields.cachedGauge
	}

	public set cachedGauge(value: __goscript_reporter.CachedGauge | null) {
		this._fields.cachedGauge = value
	}

	public _fields: {
		updated: bigint
		curr: bigint
		cachedGauge: __goscript_reporter.CachedGauge | null
	}

	constructor(init?: Partial<{updated?: bigint, curr?: bigint, cachedGauge?: __goscript_reporter.CachedGauge | null}>, __goscriptValue?: boolean) {
		this._fields = {
			updated: init?.updated ?? (0n as bigint),
			curr: init?.curr ?? (0n as bigint),
			cachedGauge: init?.cachedGauge ?? (null! as __goscript_reporter.CachedGauge | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): gauge {
		return new gauge(this, true)
	}

	public __goscriptAssign(source: gauge): void {
		const target = this._fields
		const values = source._fields
		target.updated = values.updated
		target.curr = values.curr
		target.cachedGauge = $.assignFieldValue(target.cachedGauge, values.cachedGauge, "tally.CachedGauge")
	}

	public Update(v: number): void {
		const g: gauge | $.VarRef<gauge> | null = this;
		const g$: gauge = g == null ? $.pointerTarget<gauge>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<gauge>(g)
		atomic.StoreUint64($.fieldRef((g$ as gauge)._fields, "curr"), math.Float64bits(v))
		atomic.StoreUint64($.fieldRef((g$ as gauge)._fields, "updated"), 1n)
	}

	public async cachedReport(): globalThis.Promise<void> {
		const g: gauge | $.VarRef<gauge> | null = this;
		const g$: gauge = g == null ? $.pointerTarget<gauge>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<gauge>(g)
		if (atomic.SwapUint64($.fieldRef((g$ as gauge)._fields, "updated"), 0n) == 1n) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_reporter.CachedGauge, null>>((g$ as gauge).cachedGauge).ReportGauge((g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as gauge).value() : gauge.prototype.value.call(g))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async report(name: string, tags: globalThis.Map<string, string> | null, r: __goscript_reporter.StatsReporter | null): globalThis.Promise<void> {
		const g: gauge | $.VarRef<gauge> | null = this;
		if (atomic.SwapUint64($.fieldRef($.pointerValue<gauge>(g)._fields, "updated"), 0n) == 1n) {
			void (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<__goscript_reporter.StatsReporter, null>) : $.pointerValue<Exclude<__goscript_reporter.StatsReporter, null>>(r)).ReportGauge(name, tags, (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as gauge).value() : gauge.prototype.value.call(g))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public snapshot(): number {
		const g: gauge | $.VarRef<gauge> | null = this;
		return math.Float64frombits(atomic.LoadUint64($.fieldRef($.pointerValue<gauge>(g)._fields, "curr")))
	}

	public value(): number {
		const g: gauge | $.VarRef<gauge> | null = this;
		return math.Float64frombits(atomic.LoadUint64($.fieldRef($.pointerValue<gauge>(g)._fields, "curr")))
	}

	static __typeInfo = $.registerStructType(
		"tally.gauge",
		() => new gauge(),
		() => [{ name: "Update", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "cachedReport", args: [], returns: [], pointerReceiver: true }, { name: "report", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "snapshot", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float64") }], pointerReceiver: true }, { name: "value", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float64") }], pointerReceiver: true }],
		gauge,
		() => [{ name: "updated", key: "updated", type: /* @__PURE__ */ $.basicType("uint64") }, { name: "curr", key: "curr", type: /* @__PURE__ */ $.basicType("uint64") }, { name: "cachedGauge", key: "cachedGauge", type: "tally.CachedGauge" }]
	)
}

export class timerValues {
	public get RWMutex(): sync.RWMutex {
		return this._fields.RWMutex
	}

	public set RWMutex(value: sync.RWMutex) {
		this._fields.RWMutex = value
	}

	public get values(): $.Slice<time.Duration> {
		return this._fields.values
	}

	public set values(value: $.Slice<time.Duration>) {
		this._fields.values = value
	}

	public _fields: {
		RWMutex: sync.RWMutex
		values: $.Slice<time.Duration>
	}

	constructor(init?: Partial<{RWMutex?: sync.RWMutex, values?: $.Slice<time.Duration>}>, __goscriptValue?: boolean) {
		this._fields = {
			RWMutex: init?.RWMutex ? $.markAsStructValue($.cloneStructValue(init.RWMutex)) : $.markAsStructValue(new sync.RWMutex()),
			values: init?.values ?? (null! as $.Slice<time.Duration>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): timerValues {
		return new timerValues(this, true)
	}

	public __goscriptAssign(source: timerValues): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.RWMutex, values.RWMutex)
		target.values = values.values
	}

	public Lock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).Lock()
	}

	public RLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RLock()
	}

	public RLocker(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RLocker()
	}

	public RUnlock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RUnlock()
	}

	public TryLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).TryLock()
	}

	public TryRLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).TryRLock()
	}

	public Unlock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).Unlock()
	}

	static __typeInfo = $.registerStructType(
		"tally.timerValues",
		() => new timerValues(),
		() => [{ name: "Lock", args: [], returns: [], pointerReceiver: true }, { name: "RLock", args: [], returns: [], pointerReceiver: true }, { name: "RLocker", args: [], returns: [{ type: "sync.Locker" }], pointerReceiver: true }, { name: "RUnlock", args: [], returns: [], pointerReceiver: true }, { name: "TryLock", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "TryRLock", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "Unlock", args: [], returns: [], pointerReceiver: true }],
		timerValues,
		() => [{ name: "RWMutex", key: "RWMutex", type: "sync.RWMutex", anonymous: true }, { name: "values", key: "values", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration")) }]
	)
}

export class timer {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get tags(): globalThis.Map<string, string> | null {
		return this._fields.tags
	}

	public set tags(value: globalThis.Map<string, string> | null) {
		this._fields.tags = value
	}

	public get reporter(): __goscript_reporter.StatsReporter | null {
		return this._fields.reporter
	}

	public set reporter(value: __goscript_reporter.StatsReporter | null) {
		this._fields.reporter = value
	}

	public get cachedTimer(): __goscript_reporter.CachedTimer | null {
		return this._fields.cachedTimer
	}

	public set cachedTimer(value: __goscript_reporter.CachedTimer | null) {
		this._fields.cachedTimer = value
	}

	public get unreported(): timerValues {
		return this._fields.unreported
	}

	public set unreported(value: timerValues) {
		this._fields.unreported = value
	}

	public _fields: {
		name: string
		tags: globalThis.Map<string, string> | null
		reporter: __goscript_reporter.StatsReporter | null
		cachedTimer: __goscript_reporter.CachedTimer | null
		unreported: timerValues
	}

	constructor(init?: Partial<{name?: string, tags?: globalThis.Map<string, string> | null, reporter?: __goscript_reporter.StatsReporter | null, cachedTimer?: __goscript_reporter.CachedTimer | null, unreported?: timerValues}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			tags: init?.tags ?? (null! as globalThis.Map<string, string> | null),
			reporter: init?.reporter ?? (null! as __goscript_reporter.StatsReporter | null),
			cachedTimer: init?.cachedTimer ?? (null! as __goscript_reporter.CachedTimer | null),
			unreported: init?.unreported ? init.unreported.clone() : new timerValues(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): timer {
		return new timer(this, true)
	}

	public __goscriptAssign(source: timer): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.tags = values.tags
		target.reporter = $.assignFieldValue(target.reporter, values.reporter, "tally.StatsReporter")
		target.cachedTimer = $.assignFieldValue(target.cachedTimer, values.cachedTimer, "tally.CachedTimer")
		$.assignStruct(target.unreported, values.unreported)
	}

	public async Record(interval: time.Duration): globalThis.Promise<void> {
		const t: timer | $.VarRef<timer> | null = this;
		const t$: timer = t == null ? $.pointerTarget<timer>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<timer>(t)
		if ((t$ as timer).cachedTimer != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_reporter.CachedTimer, null>>((t$ as timer).cachedTimer).ReportTimer(interval), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_reporter.StatsReporter, null>>((t$ as timer).reporter).ReportTimer((t$ as timer).name, (t$ as timer).tags, interval), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async RecordStopwatch(stopwatchStart: time.Time): globalThis.Promise<void> {
		const t: timer | $.VarRef<timer> | null = this;
		let d = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = __goscript_scope.globalNow!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).Sub($.markAsStructValue($.cloneStructValue(stopwatchStart)))
		await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as timer).Record(d) : timer.prototype.Record.call(t, d))
	}

	public async Start(): globalThis.Promise<__goscript_types.Stopwatch> {
		const t: timer | $.VarRef<timer> | null = this;
		return __goscript_types.NewStopwatch(((__goscriptAwait = __goscript_scope.globalNow!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time), $.interfaceValue<__goscript_types.StopwatchRecorder | null>(t, "*tally.timer", /* @__PURE__ */ $.pointerType("tally.timer")))
	}

	public async snapshot(): globalThis.Promise<$.Slice<time.Duration>> {
		const t: timer | $.VarRef<timer> | null = this;
		const t$: timer = t == null ? $.pointerTarget<timer>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<timer>(t)
		await (t$ as timer).unreported.RWMutex.RLock()
		let snap: $.Slice<time.Duration> = $.makeSlice<time.Duration>($.sliceLen((t$ as timer).unreported.values), undefined, "number")
		for (let __goscriptRangeTarget0 = (t$ as timer).unreported.values, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(snap), i = 0; i < __goscriptRangeWindow0.length; i++) {
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = $.arrayIndex((t$ as timer).unreported.values!, i)
		}
		void (t$ as timer).unreported.RWMutex.RUnlock()
		return snap
	}

	static __typeInfo = $.registerStructType(
		"tally.timer",
		() => new timer(),
		() => [{ name: "Record", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "RecordStopwatch", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "Start", args: [], returns: [{ type: "tally.Stopwatch" }], pointerReceiver: true }, { name: "snapshot", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration")) }], pointerReceiver: true }],
		timer,
		() => [{ name: "name", key: "name", type: /* @__PURE__ */ $.basicType("string") }, { name: "tags", key: "tags", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }, { name: "reporter", key: "reporter", type: "tally.StatsReporter" }, { name: "cachedTimer", key: "cachedTimer", type: "tally.CachedTimer" }, { name: "unreported", key: "unreported", type: "tally.timerValues" }]
	)
}

export class timerNoReporterSink {
	public get RWMutex(): sync.RWMutex {
		return this._fields.RWMutex
	}

	public set RWMutex(value: sync.RWMutex) {
		this._fields.RWMutex = value
	}

	public get timer(): timer | $.VarRef<timer> | null {
		return this._fields.timer
	}

	public set timer(value: timer | $.VarRef<timer> | null) {
		this._fields.timer = value
	}

	public _fields: {
		RWMutex: sync.RWMutex
		timer: timer | $.VarRef<timer> | null
	}

	constructor(init?: Partial<{RWMutex?: sync.RWMutex, timer?: timer | $.VarRef<timer> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			RWMutex: init?.RWMutex ? $.markAsStructValue($.cloneStructValue(init.RWMutex)) : $.markAsStructValue(new sync.RWMutex()),
			timer: init?.timer ?? (null! as timer | $.VarRef<timer> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): timerNoReporterSink {
		return new timerNoReporterSink(this, true)
	}

	public __goscriptAssign(source: timerNoReporterSink): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.RWMutex, values.RWMutex)
		target.timer = values.timer
	}

	public Capabilities(): __goscript_types.Capabilities | null {
		const r: timerNoReporterSink | $.VarRef<timerNoReporterSink> | null = this;
		return $.interfaceValue<__goscript_types.Capabilities | null>(capabilitiesReportingTagging, "*tally.capabilities", /* @__PURE__ */ $.pointerType("tally.capabilities"))
	}

	public Flush(): void {
		const r: timerNoReporterSink | $.VarRef<timerNoReporterSink> | null = this;
	}

	public ReportCounter(name: string, tags: globalThis.Map<string, string> | null, value: bigint): void {
		const r: timerNoReporterSink | $.VarRef<timerNoReporterSink> | null = this;
	}

	public ReportGauge(name: string, tags: globalThis.Map<string, string> | null, value: number): void {
		const r: timerNoReporterSink | $.VarRef<timerNoReporterSink> | null = this;
	}

	public ReportHistogramDurationSamples(name: string, tags: globalThis.Map<string, string> | null, buckets: __goscript_types.Buckets | null, bucketLowerBound: time.Duration, bucketUpperBound: time.Duration, samples: bigint): void {
		const r: timerNoReporterSink | $.VarRef<timerNoReporterSink> | null = this;
	}

	public ReportHistogramValueSamples(name: string, tags: globalThis.Map<string, string> | null, buckets: __goscript_types.Buckets | null, bucketLowerBound: number, bucketUpperBound: number, samples: bigint): void {
		const r: timerNoReporterSink | $.VarRef<timerNoReporterSink> | null = this;
	}

	public async ReportTimer(name: string, tags: globalThis.Map<string, string> | null, interval: time.Duration): globalThis.Promise<void> {
		let r: timerNoReporterSink | $.VarRef<timerNoReporterSink> | null = this;
		const r$: timerNoReporterSink = r == null ? $.pointerTarget<timerNoReporterSink>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<timerNoReporterSink>(r)
		await $.pointerValue<timer>((r$ as timerNoReporterSink).timer).unreported.RWMutex.Lock()
		$.pointerValue<timer>((r$ as timerNoReporterSink).timer).unreported.values = $.appendOne($.pointerValue<timer>((r$ as timerNoReporterSink).timer).unreported.values, interval)
		$.pointerValue<timer>((r$ as timerNoReporterSink).timer).unreported.RWMutex.Unlock()
	}

	public Lock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).Lock()
	}

	public RLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RLock()
	}

	public RLocker(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RLocker()
	}

	public RUnlock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RUnlock()
	}

	public TryLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).TryLock()
	}

	public TryRLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).TryRLock()
	}

	public Unlock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).Unlock()
	}

	static __typeInfo = $.registerStructType(
		"tally.timerNoReporterSink",
		() => new timerNoReporterSink(),
		() => [{ name: "Capabilities", args: [], returns: [{ type: "tally.Capabilities" }], pointerReceiver: true }, { name: "Flush", args: [], returns: [], pointerReceiver: true }, { name: "ReportCounter", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "ReportGauge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "ReportHistogramDurationSamples", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "ReportHistogramValueSamples", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "ReportTimer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "Lock", args: [], returns: [], pointerReceiver: true }, { name: "RLock", args: [], returns: [], pointerReceiver: true }, { name: "RLocker", args: [], returns: [{ type: "sync.Locker" }], pointerReceiver: true }, { name: "RUnlock", args: [], returns: [], pointerReceiver: true }, { name: "TryLock", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "TryRLock", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "Unlock", args: [], returns: [], pointerReceiver: true }],
		timerNoReporterSink,
		() => [{ name: "RWMutex", key: "RWMutex", type: "sync.RWMutex", anonymous: true }, { name: "timer", key: "timer", type: /* @__PURE__ */ $.pointerType("tally.timer") }]
	)
}

export class sampleCounter {
	public get counter(): counter | $.VarRef<counter> | null {
		return this._fields.counter
	}

	public set counter(value: counter | $.VarRef<counter> | null) {
		this._fields.counter = value
	}

	public get cachedBucket(): __goscript_reporter.CachedHistogramBucket | null {
		return this._fields.cachedBucket
	}

	public set cachedBucket(value: __goscript_reporter.CachedHistogramBucket | null) {
		this._fields.cachedBucket = value
	}

	public _fields: {
		counter: counter | $.VarRef<counter> | null
		cachedBucket: __goscript_reporter.CachedHistogramBucket | null
	}

	constructor(init?: Partial<{counter?: counter | $.VarRef<counter> | null, cachedBucket?: __goscript_reporter.CachedHistogramBucket | null}>, __goscriptValue?: boolean) {
		this._fields = {
			counter: init?.counter ?? (null! as counter | $.VarRef<counter> | null),
			cachedBucket: init?.cachedBucket ?? (null! as __goscript_reporter.CachedHistogramBucket | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sampleCounter {
		return new sampleCounter(this, true)
	}

	public __goscriptAssign(source: sampleCounter): void {
		const target = this._fields
		const values = source._fields
		target.counter = values.counter
		target.cachedBucket = $.assignFieldValue(target.cachedBucket, values.cachedBucket, "tally.CachedHistogramBucket")
	}

	static __typeInfo = $.registerStructType(
		"tally.sampleCounter",
		() => new sampleCounter(),
		() => [],
		sampleCounter,
		() => [{ name: "counter", key: "counter", type: /* @__PURE__ */ $.pointerType("tally.counter") }, { name: "cachedBucket", key: "cachedBucket", type: "tally.CachedHistogramBucket" }]
	)
}

export class histogram {
	public get htype(): histogramType {
		return this._fields.htype
	}

	public set htype(value: histogramType) {
		this._fields.htype = value
	}

	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get tags(): globalThis.Map<string, string> | null {
		return this._fields.tags
	}

	public set tags(value: globalThis.Map<string, string> | null) {
		this._fields.tags = value
	}

	public get reporter(): __goscript_reporter.StatsReporter | null {
		return this._fields.reporter
	}

	public set reporter(value: __goscript_reporter.StatsReporter | null) {
		this._fields.reporter = value
	}

	public get specification(): __goscript_types.Buckets | null {
		return this._fields.specification
	}

	public set specification(value: __goscript_types.Buckets | null) {
		this._fields.specification = value
	}

	public get buckets(): $.Slice<histogramBucket> {
		return this._fields.buckets
	}

	public set buckets(value: $.Slice<histogramBucket>) {
		this._fields.buckets = value
	}

	public get samples(): $.Slice<sampleCounter> {
		return this._fields.samples
	}

	public set samples(value: $.Slice<sampleCounter>) {
		this._fields.samples = value
	}

	public _fields: {
		htype: histogramType
		name: string
		tags: globalThis.Map<string, string> | null
		reporter: __goscript_reporter.StatsReporter | null
		specification: __goscript_types.Buckets | null
		buckets: $.Slice<histogramBucket>
		samples: $.Slice<sampleCounter>
	}

	constructor(init?: Partial<{htype?: histogramType, name?: string, tags?: globalThis.Map<string, string> | null, reporter?: __goscript_reporter.StatsReporter | null, specification?: __goscript_types.Buckets | null, buckets?: $.Slice<histogramBucket>, samples?: $.Slice<sampleCounter>}>, __goscriptValue?: boolean) {
		this._fields = {
			htype: init?.htype ?? (0 as histogramType),
			name: init?.name ?? ("" as string),
			tags: init?.tags ?? (null! as globalThis.Map<string, string> | null),
			reporter: init?.reporter ?? (null! as __goscript_reporter.StatsReporter | null),
			specification: init?.specification ?? (null! as __goscript_types.Buckets | null),
			buckets: init?.buckets ?? (null! as $.Slice<histogramBucket>),
			samples: init?.samples ?? (null! as $.Slice<sampleCounter>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): histogram {
		return new histogram(this, true)
	}

	public __goscriptAssign(source: histogram): void {
		const target = this._fields
		const values = source._fields
		target.htype = values.htype
		target.name = values.name
		target.tags = values.tags
		target.reporter = $.assignFieldValue(target.reporter, values.reporter, "tally.StatsReporter")
		target.specification = $.assignFieldValue(target.specification, values.specification, "tally.Buckets")
		target.buckets = values.buckets
		target.samples = values.samples
	}

	public RecordDuration(value: time.Duration): void {
		const h: histogram | $.VarRef<histogram> | null = this;
		const h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h)
		if ((h$ as histogram).htype != 1) {
			return
		}

		// Find the highest inclusive of the bucket upper bound
		// and emit directly to it. Since we use BucketPairs to derive
		// buckets there will always be an inclusive bucket as
		// we always have a math.MaxInt64 bucket.
		let idx = sort.Search($.sliceLen((h$ as histogram).buckets), $.functionValue((i: number): boolean => {
			return $.arrayIndex((h$ as histogram).buckets!, i).durationUpperBound >= value
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		counter.prototype.Inc.call($.arrayIndex((h$ as histogram).samples!, idx).counter, 1n)
	}

	public async RecordStopwatch(stopwatchStart: time.Time): globalThis.Promise<void> {
		const h: histogram | $.VarRef<histogram> | null = this;
		let d = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = __goscript_scope.globalNow!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).Sub($.markAsStructValue($.cloneStructValue(stopwatchStart)))
		void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as histogram).RecordDuration(d) : histogram.prototype.RecordDuration.call(h, d))
	}

	public RecordValue(value: number): void {
		const h: histogram | $.VarRef<histogram> | null = this;
		const h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h)
		if ((h$ as histogram).htype != 0) {
			return
		}

		// Find the highest inclusive of the bucket upper bound
		// and emit directly to it. Since we use BucketPairs to derive
		// buckets there will always be an inclusive bucket as
		// we always have a math.MaxFloat64 bucket.
		let idx = sort.Search($.sliceLen((h$ as histogram).buckets), $.functionValue((i: number): boolean => {
			return $.arrayIndex((h$ as histogram).buckets!, i).valueUpperBound >= value
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		counter.prototype.Inc.call($.arrayIndex((h$ as histogram).samples!, idx).counter, 1n)
	}

	public async Start(): globalThis.Promise<__goscript_types.Stopwatch> {
		const h: histogram | $.VarRef<histogram> | null = this;
		return __goscript_types.NewStopwatch(((__goscriptAwait = __goscript_scope.globalNow!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time), $.interfaceValue<__goscript_types.StopwatchRecorder | null>(h, "*tally.histogram", /* @__PURE__ */ $.pointerType("tally.histogram")))
	}

	public async cachedReport(): globalThis.Promise<void> {
		const h: histogram | $.VarRef<histogram> | null = this;
		const h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h)
		for (let __goscriptRangeTarget1 = (h$ as histogram).buckets, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let samples = counter.prototype.value.call($.arrayIndex((h$ as histogram).samples!, i).counter)
			if (samples == 0n) {
				continue
			}

			switch ((h$ as histogram).htype) {
				case 0:
				{
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_reporter.CachedHistogramBucket, null>>($.arrayIndex((h$ as histogram).samples!, i).cachedBucket).ReportSamples(samples), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					break
				}
				case 1:
				{
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_reporter.CachedHistogramBucket, null>>($.arrayIndex((h$ as histogram).samples!, i).cachedBucket).ReportSamples(samples), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					break
				}
			}
		}
	}

	public async report(name: string, tags: globalThis.Map<string, string> | null, r: __goscript_reporter.StatsReporter | null): globalThis.Promise<void> {
		const h: histogram | $.VarRef<histogram> | null = this;
		const h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h)
		for (let __goscriptRangeTarget2 = (h$ as histogram).buckets, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
			let samples = counter.prototype.value.call($.arrayIndex((h$ as histogram).samples!, i).counter)
			if (samples == 0n) {
				continue
			}

			switch ((h$ as histogram).htype) {
				case 0:
				{
					void (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<__goscript_reporter.StatsReporter, null>) : $.pointerValue<Exclude<__goscript_reporter.StatsReporter, null>>(r)).ReportHistogramValueSamples(name, tags, (h$ as histogram).specification, valueLowerBound((h$ as histogram).buckets, i), $.arrayIndex((h$ as histogram).buckets!, i).valueUpperBound, samples), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					break
				}
				case 1:
				{
					void (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<__goscript_reporter.StatsReporter, null>) : $.pointerValue<Exclude<__goscript_reporter.StatsReporter, null>>(r)).ReportHistogramDurationSamples(name, tags, (h$ as histogram).specification, durationLowerBound((h$ as histogram).buckets, i), $.arrayIndex((h$ as histogram).buckets!, i).durationUpperBound, samples), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					break
				}
			}
		}
	}

	public snapshotDurations(): globalThis.Map<time.Duration, bigint> | null {
		let h: histogram | $.VarRef<histogram> | null = this;
		const h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h)
		if ((h$ as histogram).htype != 1) {
			return null
		}

		let durations: globalThis.Map<time.Duration, bigint> | null = $.makeMap<time.Duration, bigint>()
		for (let __goscriptRangeTarget3 = (h$ as histogram).buckets, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
			$.mapSet(durations, $.arrayIndex((h$ as histogram).buckets!, i).durationUpperBound, counter.prototype.snapshot.call($.arrayIndex((h$ as histogram).samples!, i).counter))
		}

		return durations
	}

	public snapshotValues(): globalThis.Map<number, bigint> | null {
		let h: histogram | $.VarRef<histogram> | null = this;
		const h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h)
		if ((h$ as histogram).htype != 0) {
			return null
		}

		let vals: globalThis.Map<number, bigint> | null = $.makeMap<number, bigint>()
		for (let __goscriptRangeTarget4 = (h$ as histogram).buckets, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
			$.mapSet(vals, $.arrayIndex((h$ as histogram).buckets!, i).valueUpperBound, counter.prototype.snapshot.call($.arrayIndex((h$ as histogram).samples!, i).counter))
		}

		return vals
	}

	static __typeInfo = $.registerStructType(
		"tally.histogram",
		() => new histogram(),
		() => [{ name: "RecordDuration", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "RecordStopwatch", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "RecordValue", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "Start", args: [], returns: [{ type: "tally.Stopwatch" }], pointerReceiver: true }, { name: "cachedReport", args: [], returns: [], pointerReceiver: true }, { name: "report", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "snapshotDurations", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64", "time.Duration"), /* @__PURE__ */ $.basicType("int64")) }], pointerReceiver: true }, { name: "snapshotValues", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("float64"), /* @__PURE__ */ $.basicType("int64")) }], pointerReceiver: true }],
		histogram,
		() => [{ name: "htype", key: "htype", type: /* @__PURE__ */ $.basicType("int", "tally.histogramType") }, { name: "name", key: "name", type: /* @__PURE__ */ $.basicType("string") }, { name: "tags", key: "tags", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }, { name: "reporter", key: "reporter", type: "tally.StatsReporter" }, { name: "specification", key: "specification", type: "tally.Buckets" }, { name: "buckets", key: "buckets", type: /* @__PURE__ */ $.sliceType("tally.histogramBucket") }, { name: "samples", key: "samples", type: /* @__PURE__ */ $.sliceType("tally.sampleCounter") }]
	)
}

export class histogramBucket {
	public get valueUpperBound(): number {
		return this._fields.valueUpperBound
	}

	public set valueUpperBound(value: number) {
		this._fields.valueUpperBound = value
	}

	public get durationUpperBound(): time.Duration {
		return this._fields.durationUpperBound
	}

	public set durationUpperBound(value: time.Duration) {
		this._fields.durationUpperBound = value
	}

	public get cachedValueBucket(): __goscript_reporter.CachedHistogramBucket | null {
		return this._fields.cachedValueBucket
	}

	public set cachedValueBucket(value: __goscript_reporter.CachedHistogramBucket | null) {
		this._fields.cachedValueBucket = value
	}

	public get cachedDurationBucket(): __goscript_reporter.CachedHistogramBucket | null {
		return this._fields.cachedDurationBucket
	}

	public set cachedDurationBucket(value: __goscript_reporter.CachedHistogramBucket | null) {
		this._fields.cachedDurationBucket = value
	}

	public _fields: {
		valueUpperBound: number
		durationUpperBound: time.Duration
		cachedValueBucket: __goscript_reporter.CachedHistogramBucket | null
		cachedDurationBucket: __goscript_reporter.CachedHistogramBucket | null
	}

	constructor(init?: Partial<{valueUpperBound?: number, durationUpperBound?: time.Duration, cachedValueBucket?: __goscript_reporter.CachedHistogramBucket | null, cachedDurationBucket?: __goscript_reporter.CachedHistogramBucket | null}>, __goscriptValue?: boolean) {
		this._fields = {
			valueUpperBound: init?.valueUpperBound ?? (0 as number),
			durationUpperBound: init?.durationUpperBound ?? (0n as time.Duration),
			cachedValueBucket: init?.cachedValueBucket ?? (null! as __goscript_reporter.CachedHistogramBucket | null),
			cachedDurationBucket: init?.cachedDurationBucket ?? (null! as __goscript_reporter.CachedHistogramBucket | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): histogramBucket {
		return new histogramBucket(this, true)
	}

	public __goscriptAssign(source: histogramBucket): void {
		const target = this._fields
		const values = source._fields
		target.valueUpperBound = values.valueUpperBound
		target.durationUpperBound = values.durationUpperBound
		target.cachedValueBucket = $.assignFieldValue(target.cachedValueBucket, values.cachedValueBucket, "tally.CachedHistogramBucket")
		target.cachedDurationBucket = $.assignFieldValue(target.cachedDurationBucket, values.cachedDurationBucket, "tally.CachedHistogramBucket")
	}

	static __typeInfo = $.registerStructType(
		"tally.histogramBucket",
		() => new histogramBucket(),
		() => [],
		histogramBucket,
		() => [{ name: "valueUpperBound", key: "valueUpperBound", type: /* @__PURE__ */ $.basicType("float64") }, { name: "durationUpperBound", key: "durationUpperBound", type: /* @__PURE__ */ $.basicType("int64", "time.Duration") }, { name: "cachedValueBucket", key: "cachedValueBucket", type: "tally.CachedHistogramBucket" }, { name: "cachedDurationBucket", key: "cachedDurationBucket", type: "tally.CachedHistogramBucket" }]
	)
}

export class bucketStorage {
	public get buckets(): __goscript_types.Buckets | null {
		return this._fields.buckets
	}

	public set buckets(value: __goscript_types.Buckets | null) {
		this._fields.buckets = value
	}

	public get hbuckets(): $.Slice<histogramBucket> {
		return this._fields.hbuckets
	}

	public set hbuckets(value: $.Slice<histogramBucket>) {
		this._fields.hbuckets = value
	}

	public _fields: {
		buckets: __goscript_types.Buckets | null
		hbuckets: $.Slice<histogramBucket>
	}

	constructor(init?: Partial<{buckets?: __goscript_types.Buckets | null, hbuckets?: $.Slice<histogramBucket>}>, __goscriptValue?: boolean) {
		this._fields = {
			buckets: init?.buckets ?? (null! as __goscript_types.Buckets | null),
			hbuckets: init?.hbuckets ?? (null! as $.Slice<histogramBucket>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): bucketStorage {
		return new bucketStorage(this, true)
	}

	public __goscriptAssign(source: bucketStorage): void {
		const target = this._fields
		const values = source._fields
		target.buckets = $.assignFieldValue(target.buckets, values.buckets, "tally.Buckets")
		target.hbuckets = values.hbuckets
	}

	static __typeInfo = $.registerStructType(
		"tally.bucketStorage",
		() => new bucketStorage(),
		() => [],
		bucketStorage,
		() => [{ name: "buckets", key: "buckets", type: "tally.Buckets" }, { name: "hbuckets", key: "hbuckets", type: /* @__PURE__ */ $.sliceType("tally.histogramBucket") }]
	)
}

export class bucketCache {
	public get mtx(): sync.RWMutex {
		return this._fields.mtx
	}

	public set mtx(value: sync.RWMutex) {
		this._fields.mtx = value
	}

	public get cache(): globalThis.Map<bigint, bucketStorage> | null {
		return this._fields.cache
	}

	public set cache(value: globalThis.Map<bigint, bucketStorage> | null) {
		this._fields.cache = value
	}

	public _fields: {
		mtx: sync.RWMutex
		cache: globalThis.Map<bigint, bucketStorage> | null
	}

	constructor(init?: Partial<{mtx?: sync.RWMutex, cache?: globalThis.Map<bigint, bucketStorage> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mtx: init?.mtx ? $.markAsStructValue($.cloneStructValue(init.mtx)) : $.markAsStructValue(new sync.RWMutex()),
			cache: init?.cache ?? (null! as globalThis.Map<bigint, bucketStorage> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): bucketCache {
		return new bucketCache(this, true)
	}

	public __goscriptAssign(source: bucketCache): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mtx, values.mtx)
		target.cache = values.cache
	}

	public async Get(htype: histogramType, buckets: __goscript_types.Buckets | null): globalThis.Promise<bucketStorage> {
		let c: bucketCache | $.VarRef<bucketCache> | null = this;
		const c$: bucketCache = c == null ? $.pointerTarget<bucketCache>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<bucketCache>(c)
		let id = await getBucketsIdentity(buckets)

		await (c$ as bucketCache).mtx.RLock()
		let [storage, ok] = $.mapGet<bigint, bucketStorage, bucketStorage>((c$ as bucketCache).cache, id, new bucketStorage(undefined, true))
		if (!ok) {
			void (c$ as bucketCache).mtx.RUnlock()
			await (c$ as bucketCache).mtx.Lock()
			storage = $.assignStruct(storage, await newBucketStorage(htype, buckets))
			$.mapSet((c$ as bucketCache).cache, id, (storage).clone())
			void (c$ as bucketCache).mtx.Unlock()
		} else {
			void (c$ as bucketCache).mtx.RUnlock()
			if (!__goscript_histogram.bucketsEqual(buckets, storage.buckets)) {
				storage = $.assignStruct(storage, await newBucketStorage(htype, buckets))
			}
		}

		return (storage).clone()
	}

	static __typeInfo = $.registerStructType(
		"tally.bucketCache",
		() => new bucketCache(),
		() => [{ name: "Get", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.bucketStorage" }], pointerReceiver: true }],
		bucketCache,
		() => [{ name: "mtx", key: "mtx", type: "sync.RWMutex" }, { name: "cache", key: "cache", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint64"), "tally.bucketStorage") }]
	)
}

export class nullStatsReporter {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nullStatsReporter {
		return new nullStatsReporter(this, true)
	}

	public __goscriptAssign(source: nullStatsReporter): void {
	}

	public Capabilities(): __goscript_types.Capabilities | null {
		const r = this;
		return $.interfaceValue<__goscript_types.Capabilities | null>(capabilitiesNone, "*tally.capabilities", /* @__PURE__ */ $.pointerType("tally.capabilities"))
	}

	public Flush(): void {
		const r = this;
	}

	public ReportCounter(name: string, tags: globalThis.Map<string, string> | null, value: bigint): void {
		const r = this;
	}

	public ReportGauge(name: string, tags: globalThis.Map<string, string> | null, value: number): void {
		const r = this;
	}

	public ReportHistogramDurationSamples(name: string, tags: globalThis.Map<string, string> | null, buckets: __goscript_types.Buckets | null, bucketLowerBound: time.Duration, bucketUpperBound: time.Duration, samples: bigint): void {
		const r = this;
	}

	public ReportHistogramValueSamples(name: string, tags: globalThis.Map<string, string> | null, buckets: __goscript_types.Buckets | null, bucketLowerBound: number, bucketUpperBound: number, samples: bigint): void {
		const r = this;
	}

	public ReportTimer(name: string, tags: globalThis.Map<string, string> | null, interval: time.Duration): void {
		const r = this;
	}

	static __typeInfo = $.registerStructType(
		"tally.nullStatsReporter",
		() => new nullStatsReporter(),
		() => [{ name: "Capabilities", args: [], returns: [{ type: "tally.Capabilities" }] }, { name: "Flush", args: [], returns: [] }, { name: "ReportCounter", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "ReportGauge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "ReportHistogramDurationSamples", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "ReportHistogramValueSamples", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "ReportTimer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }],
		nullStatsReporter,
		() => []
	)
}

export const valueHistogramType: histogramType = 0

export const durationHistogramType: histogramType = 1

export let capabilitiesNone: capabilities | $.VarRef<capabilities> | null = new capabilities({reporting: false, tagging: false})

export function __goscript_set_capabilitiesNone(__goscriptValue: capabilities | $.VarRef<capabilities> | null): void {
	capabilitiesNone = __goscriptValue
}

export let capabilitiesReportingNoTagging: capabilities | $.VarRef<capabilities> | null = new capabilities({reporting: true, tagging: false})

export function __goscript_set_capabilitiesReportingNoTagging(__goscriptValue: capabilities | $.VarRef<capabilities> | null): void {
	capabilitiesReportingNoTagging = __goscriptValue
}

export let capabilitiesReportingTagging: capabilities | $.VarRef<capabilities> | null = new capabilities({reporting: true, tagging: true})

export function __goscript_set_capabilitiesReportingTagging(__goscriptValue: capabilities | $.VarRef<capabilities> | null): void {
	capabilitiesReportingTagging = __goscriptValue
}

export function newCounter(cachedCount: __goscript_reporter.CachedCount | null): counter | $.VarRef<counter> | null {
	return new counter({cachedCount: cachedCount})
}

export function newGauge(cachedGauge: __goscript_reporter.CachedGauge | null): gauge | $.VarRef<gauge> | null {
	return new gauge({cachedGauge: cachedGauge})
}

export function newTimer(name: string, tags: globalThis.Map<string, string> | null, r: __goscript_reporter.StatsReporter | null, cachedTimer: __goscript_reporter.CachedTimer | null): timer | $.VarRef<timer> | null {
	let t: timer | $.VarRef<timer> | null = new timer({name: name, tags: tags, reporter: r, cachedTimer: cachedTimer})
	if (r == null) {
		$.pointerValue<timer>(t).reporter = $.interfaceValue<__goscript_reporter.StatsReporter | null>(new timerNoReporterSink({timer: t}), "*tally.timerNoReporterSink", /* @__PURE__ */ $.pointerType("tally.timerNoReporterSink"))
	}
	return t
}

export async function newHistogram(htype: histogramType, name: string, tags: globalThis.Map<string, string> | null, reporter: __goscript_reporter.StatsReporter | null, storage: bucketStorage, cachedHistogram: __goscript_reporter.CachedHistogram | null): globalThis.Promise<histogram | $.VarRef<histogram> | null> {
	let h: histogram | $.VarRef<histogram> | null = new histogram({htype: htype, name: name, tags: tags, reporter: reporter, specification: storage.buckets, buckets: storage.hbuckets, samples: $.makeSlice<sampleCounter>($.sliceLen(storage.hbuckets), undefined, undefined, () => new sampleCounter(undefined, true))})
	let h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h)

	for (let __goscriptRangeTarget5 = (h$ as histogram).samples, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
		$.arrayIndex((h$ as histogram).samples!, i).counter = newCounter(null)

		if (cachedHistogram != null) {
			switch (htype) {
				case 1:
				{
					$.arrayIndex((h$ as histogram).samples!, i).cachedBucket = (__goscriptAwait = (cachedHistogram !== null && (cachedHistogram as any).__isVarRef !== true && (cachedHistogram as any).__goValue === undefined ? (cachedHistogram as Exclude<__goscript_reporter.CachedHistogram, null>) : $.pointerValue<Exclude<__goscript_reporter.CachedHistogram, null>>(cachedHistogram)).DurationBucket(durationLowerBound(storage.hbuckets, i), $.arrayIndex(storage.hbuckets!, i).durationUpperBound), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					break
				}
				case 0:
				{
					$.arrayIndex((h$ as histogram).samples!, i).cachedBucket = (__goscriptAwait = (cachedHistogram !== null && (cachedHistogram as any).__isVarRef !== true && (cachedHistogram as any).__goValue === undefined ? (cachedHistogram as Exclude<__goscript_reporter.CachedHistogram, null>) : $.pointerValue<Exclude<__goscript_reporter.CachedHistogram, null>>(cachedHistogram)).ValueBucket(valueLowerBound(storage.hbuckets, i), $.arrayIndex(storage.hbuckets!, i).valueUpperBound), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					break
				}
			}
		}
	}

	return h
}

export function durationLowerBound(buckets: $.Slice<histogramBucket>, i: number): time.Duration {
	if (i <= 0) {
		return -9223372036854775808n
	}
	return $.arrayIndex(buckets!, i - 1).durationUpperBound
}

export function valueLowerBound(buckets: $.Slice<histogramBucket>, i: number): number {
	if (i <= 0) {
		return -math.MaxFloat64
	}
	return $.arrayIndex(buckets!, i - 1).valueUpperBound
}

export async function newBucketStorage(htype: histogramType, buckets: __goscript_types.Buckets | null): globalThis.Promise<bucketStorage> {
	let pairs: $.Slice<__goscript_types.BucketPair | null> = await __goscript_histogram.BucketPairs(buckets)
	let storage: bucketStorage = new bucketStorage({buckets: buckets, hbuckets: $.makeSlice<histogramBucket>(0, $.sliceLen(pairs), undefined, () => new histogramBucket(undefined, true))}, true)

	for (let __goscriptRangeTarget6 = pairs, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
		let pair = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as __goscript_types.BucketPair | null)
		storage.hbuckets = $.appendOne(storage.hbuckets, (await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = (pair !== null && (pair as any).__isVarRef !== true && (pair as any).__goValue === undefined ? (pair as Exclude<__goscript_types.BucketPair, null>) : $.pointerValue<Exclude<__goscript_types.BucketPair, null>>(pair)).UpperBoundValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField1 = (__goscriptAwait = (pair !== null && (pair as any).__isVarRef !== true && (pair as any).__goValue === undefined ? (pair as Exclude<__goscript_types.BucketPair, null>) : $.pointerValue<Exclude<__goscript_types.BucketPair, null>>(pair)).UpperBoundDuration(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new histogramBucket({valueUpperBound: __goscriptLiteralField0, durationUpperBound: __goscriptLiteralField1}, true) })()))
	}

	return (storage).clone()
}

export function newBucketCache(): bucketCache | $.VarRef<bucketCache> | null {
	return new bucketCache({cache: $.makeMap<bigint, bucketStorage>()})
}

export var NullStatsReporter: __goscript_reporter.StatsReporter | null

export function __goscript_init_NullStatsReporter(): void {
	if (((NullStatsReporter) as any) === undefined) {
		NullStatsReporter = $.interfaceValue<__goscript_reporter.StatsReporter | null>(new nullStatsReporter(undefined, true), "tally.nullStatsReporter", "tally.nullStatsReporter")
	}
}

export function __goscript_get_NullStatsReporter(): __goscript_reporter.StatsReporter | null {
	if (((NullStatsReporter) as any) === undefined) {
		__goscript_init_NullStatsReporter()
	}
	return NullStatsReporter
}

export function __goscript_set_NullStatsReporter(__goscriptValue: __goscript_reporter.StatsReporter | null): void {
	NullStatsReporter = __goscriptValue
}

export async function getBucketsIdentity(buckets: __goscript_types.Buckets | null): globalThis.Promise<bigint> {
	{
		const __goscriptTypeSwitchValue = buckets
		switch (true) {
			case $.typeAssert<__goscript_histogram.DurationBuckets>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"), "tally.DurationBuckets")).ok:
				{
					let b: __goscript_histogram.DurationBuckets = $.typeAssert<__goscript_histogram.DurationBuckets>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"), "tally.DurationBuckets")).value
					return identity.Durations(__goscript_histogram.DurationBuckets_AsDurations(b))
				}
				break
			case $.typeAssert<__goscript_histogram.ValueBuckets>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"), "tally.ValueBuckets")).ok:
				{
					let b: __goscript_histogram.ValueBuckets = $.typeAssert<__goscript_histogram.ValueBuckets>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"), "tally.ValueBuckets")).value
					return identity.Float64s(__goscript_histogram.ValueBuckets_AsValues(b))
				}
				break
			default:
				{
					let b: any = __goscriptTypeSwitchValue
					$.panic(await fmt.Sprintf("unexpected bucket type: %T", (b as any)))
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptAwait: any
