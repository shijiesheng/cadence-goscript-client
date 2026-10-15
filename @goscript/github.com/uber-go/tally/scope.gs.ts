// Generated file based on scope.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import type * as fmt from "@goscript/fmt/index.js"

import * as maphash from "@goscript/hash/maphash/index.js"

import * as sort from "@goscript/sort/index.js"

import * as __goscript_histogram from "./histogram.gs.ts"

import * as __goscript_key_gen from "./key_gen.gs.ts"

import * as __goscript_reporter from "./reporter.gs.ts"

import * as __goscript_sanitize from "./sanitize.gs.ts"

import * as __goscript_scope_registry from "./scope_registry.gs.ts"

import * as __goscript_stats from "./stats.gs.ts"

import * as __goscript_types from "./types.gs.ts"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/hash/maphash/index.js"
import "@goscript/sort/index.js"
import "./histogram.gs.ts"
import "./key_gen.gs.ts"
import "./reporter.gs.ts"
import "./sanitize.gs.ts"
import "./scope_registry.gs.ts"
import "./stats.gs.ts"
import "./types.gs.ts"

$.registerTypePackagePath("github.com/uber-go/tally", ["tally.InternalMetricOption", "tally.scope", "tally.ScopeOptions", "tally.TestScope", "tally.Snapshot", "tally.CounterSnapshot", "tally.GaugeSnapshot", "tally.TimerSnapshot", "tally.HistogramSnapshot", "tally.snapshot", "tally.counterSnapshot", "tally.gaugeSnapshot", "tally.timerSnapshot", "tally.histogramSnapshot"])

export type InternalMetricOption = number

export type TestScope = {
	Capabilities(): __goscript_types.Capabilities | null | globalThis.Promise<__goscript_types.Capabilities | null>
	Counter(name: string): __goscript_types.Counter | null | globalThis.Promise<__goscript_types.Counter | null>
	Gauge(name: string): __goscript_types.Gauge | null | globalThis.Promise<__goscript_types.Gauge | null>
	Histogram(name: string, buckets: __goscript_types.Buckets | null): __goscript_types.Histogram | null | globalThis.Promise<__goscript_types.Histogram | null>
	Snapshot(): Snapshot | null | globalThis.Promise<Snapshot | null>
	SubScope(name: string): __goscript_types.Scope | null | globalThis.Promise<__goscript_types.Scope | null>
	Tagged(tags: globalThis.Map<string, string> | null): __goscript_types.Scope | null | globalThis.Promise<__goscript_types.Scope | null>
	Timer(name: string): __goscript_types.Timer | null | globalThis.Promise<__goscript_types.Timer | null>
}

$.registerInterfaceType(
	"tally.TestScope",
	null,
	[{ name: "Capabilities", args: [], returns: [{ type: "tally.Capabilities" }] }, { name: "Counter", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Counter" }] }, { name: "Gauge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Gauge" }] }, { name: "Histogram", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Histogram" }] }, { name: "Snapshot", args: [], returns: [{ type: "tally.Snapshot" }] }, { name: "SubScope", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Scope" }] }, { name: "Tagged", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Scope" }] }, { name: "Timer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Timer" }] }]
);

export type Snapshot = {
	Counters(): globalThis.Map<string, CounterSnapshot | null> | null
	Gauges(): globalThis.Map<string, GaugeSnapshot | null> | null
	Histograms(): globalThis.Map<string, HistogramSnapshot | null> | null
	Timers(): globalThis.Map<string, TimerSnapshot | null> | null
}

$.registerInterfaceType(
	"tally.Snapshot",
	null,
	[{ name: "Counters", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tally.CounterSnapshot") }] }, { name: "Gauges", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tally.GaugeSnapshot") }] }, { name: "Histograms", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tally.HistogramSnapshot") }] }, { name: "Timers", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tally.TimerSnapshot") }] }]
);

export type CounterSnapshot = {
	Name(): string
	Tags(): globalThis.Map<string, string> | null
	Value(): bigint
}

$.registerInterfaceType(
	"tally.CounterSnapshot",
	null,
	[{ name: "Name", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }, { name: "Tags", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }] }, { name: "Value", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }] }]
);

export type GaugeSnapshot = {
	Name(): string
	Tags(): globalThis.Map<string, string> | null
	Value(): number
}

$.registerInterfaceType(
	"tally.GaugeSnapshot",
	null,
	[{ name: "Name", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }, { name: "Tags", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }] }, { name: "Value", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float64") }] }]
);

export type TimerSnapshot = {
	Name(): string
	Tags(): globalThis.Map<string, string> | null
	Values(): $.Slice<time.Duration>
}

$.registerInterfaceType(
	"tally.TimerSnapshot",
	null,
	[{ name: "Name", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }, { name: "Tags", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }] }, { name: "Values", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration")) }] }]
);

export type HistogramSnapshot = {
	Durations(): globalThis.Map<time.Duration, bigint> | null
	Name(): string
	Tags(): globalThis.Map<string, string> | null
	Values(): globalThis.Map<number, bigint> | null
}

$.registerInterfaceType(
	"tally.HistogramSnapshot",
	null,
	[{ name: "Durations", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64", "time.Duration"), /* @__PURE__ */ $.basicType("int64")) }] }, { name: "Name", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }, { name: "Tags", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }] }, { name: "Values", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("float64"), /* @__PURE__ */ $.basicType("int64")) }] }]
);

export class scope {
	public get separator(): string {
		return this._fields.separator
	}

	public set separator(value: string) {
		this._fields.separator = value
	}

	public get prefix(): string {
		return this._fields.prefix
	}

	public set prefix(value: string) {
		this._fields.prefix = value
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

	public get cachedReporter(): __goscript_reporter.CachedStatsReporter | null {
		return this._fields.cachedReporter
	}

	public set cachedReporter(value: __goscript_reporter.CachedStatsReporter | null) {
		this._fields.cachedReporter = value
	}

	public get baseReporter(): __goscript_reporter.BaseStatsReporter | null {
		return this._fields.baseReporter
	}

	public set baseReporter(value: __goscript_reporter.BaseStatsReporter | null) {
		this._fields.baseReporter = value
	}

	public get defaultBuckets(): __goscript_types.Buckets | null {
		return this._fields.defaultBuckets
	}

	public set defaultBuckets(value: __goscript_types.Buckets | null) {
		this._fields.defaultBuckets = value
	}

	public get sanitizer(): __goscript_sanitize.Sanitizer | null {
		return this._fields.sanitizer
	}

	public set sanitizer(value: __goscript_sanitize.Sanitizer | null) {
		this._fields.sanitizer = value
	}

	public get registry(): __goscript_scope_registry.scopeRegistry | $.VarRef<__goscript_scope_registry.scopeRegistry> | null {
		return this._fields.registry
	}

	public set registry(value: __goscript_scope_registry.scopeRegistry | $.VarRef<__goscript_scope_registry.scopeRegistry> | null) {
		this._fields.registry = value
	}

	public get cm(): sync.RWMutex {
		return this._fields.cm
	}

	public set cm(value: sync.RWMutex) {
		this._fields.cm = value
	}

	public get gm(): sync.RWMutex {
		return this._fields.gm
	}

	public set gm(value: sync.RWMutex) {
		this._fields.gm = value
	}

	public get tm(): sync.RWMutex {
		return this._fields.tm
	}

	public set tm(value: sync.RWMutex) {
		this._fields.tm = value
	}

	public get hm(): sync.RWMutex {
		return this._fields.hm
	}

	public set hm(value: sync.RWMutex) {
		this._fields.hm = value
	}

	public get counters(): globalThis.Map<string, __goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null> | null {
		return this._fields.counters
	}

	public set counters(value: globalThis.Map<string, __goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null> | null) {
		this._fields.counters = value
	}

	public get countersSlice(): $.Slice<__goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null> {
		return this._fields.countersSlice
	}

	public set countersSlice(value: $.Slice<__goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null>) {
		this._fields.countersSlice = value
	}

	public get gauges(): globalThis.Map<string, __goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null> | null {
		return this._fields.gauges
	}

	public set gauges(value: globalThis.Map<string, __goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null> | null) {
		this._fields.gauges = value
	}

	public get gaugesSlice(): $.Slice<__goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null> {
		return this._fields.gaugesSlice
	}

	public set gaugesSlice(value: $.Slice<__goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null>) {
		this._fields.gaugesSlice = value
	}

	public get histograms(): globalThis.Map<string, __goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null> | null {
		return this._fields.histograms
	}

	public set histograms(value: globalThis.Map<string, __goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null> | null) {
		this._fields.histograms = value
	}

	public get histogramsSlice(): $.Slice<__goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null> {
		return this._fields.histogramsSlice
	}

	public set histogramsSlice(value: $.Slice<__goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null>) {
		this._fields.histogramsSlice = value
	}

	public get timers(): globalThis.Map<string, __goscript_stats.timer | $.VarRef<__goscript_stats.timer> | null> | null {
		return this._fields.timers
	}

	public set timers(value: globalThis.Map<string, __goscript_stats.timer | $.VarRef<__goscript_stats.timer> | null> | null) {
		this._fields.timers = value
	}

	public get bucketCache(): __goscript_stats.bucketCache | $.VarRef<__goscript_stats.bucketCache> | null {
		return this._fields.bucketCache
	}

	public set bucketCache(value: __goscript_stats.bucketCache | $.VarRef<__goscript_stats.bucketCache> | null) {
		this._fields.bucketCache = value
	}

	public get closed(): atomic.Bool {
		return this._fields.closed
	}

	public set closed(value: atomic.Bool) {
		this._fields.closed = value
	}

	public get done(): $.Channel<{}> | null {
		return this._fields.done
	}

	public set done(value: $.Channel<{}> | null) {
		this._fields.done = value
	}

	public get wg(): sync.WaitGroup {
		return this._fields.wg
	}

	public set wg(value: sync.WaitGroup) {
		this._fields.wg = value
	}

	public get root(): boolean {
		return this._fields.root
	}

	public set root(value: boolean) {
		this._fields.root = value
	}

	public get testScope(): boolean {
		return this._fields.testScope
	}

	public set testScope(value: boolean) {
		this._fields.testScope = value
	}

	public _fields: {
		separator: string
		prefix: string
		tags: globalThis.Map<string, string> | null
		reporter: __goscript_reporter.StatsReporter | null
		cachedReporter: __goscript_reporter.CachedStatsReporter | null
		baseReporter: __goscript_reporter.BaseStatsReporter | null
		defaultBuckets: __goscript_types.Buckets | null
		sanitizer: __goscript_sanitize.Sanitizer | null
		registry: __goscript_scope_registry.scopeRegistry | $.VarRef<__goscript_scope_registry.scopeRegistry> | null
		cm: sync.RWMutex
		gm: sync.RWMutex
		tm: sync.RWMutex
		hm: sync.RWMutex
		counters: globalThis.Map<string, __goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null> | null
		countersSlice: $.Slice<__goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null>
		gauges: globalThis.Map<string, __goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null> | null
		gaugesSlice: $.Slice<__goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null>
		histograms: globalThis.Map<string, __goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null> | null
		histogramsSlice: $.Slice<__goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null>
		timers: globalThis.Map<string, __goscript_stats.timer | $.VarRef<__goscript_stats.timer> | null> | null
		bucketCache: __goscript_stats.bucketCache | $.VarRef<__goscript_stats.bucketCache> | null
		closed: atomic.Bool
		done: $.Channel<{}> | null
		wg: sync.WaitGroup
		root: boolean
		testScope: boolean
	}

	constructor(init?: Partial<{separator?: string, prefix?: string, tags?: globalThis.Map<string, string> | null, reporter?: __goscript_reporter.StatsReporter | null, cachedReporter?: __goscript_reporter.CachedStatsReporter | null, baseReporter?: __goscript_reporter.BaseStatsReporter | null, defaultBuckets?: __goscript_types.Buckets | null, sanitizer?: __goscript_sanitize.Sanitizer | null, registry?: __goscript_scope_registry.scopeRegistry | $.VarRef<__goscript_scope_registry.scopeRegistry> | null, cm?: sync.RWMutex, gm?: sync.RWMutex, tm?: sync.RWMutex, hm?: sync.RWMutex, counters?: globalThis.Map<string, __goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null> | null, countersSlice?: $.Slice<__goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null>, gauges?: globalThis.Map<string, __goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null> | null, gaugesSlice?: $.Slice<__goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null>, histograms?: globalThis.Map<string, __goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null> | null, histogramsSlice?: $.Slice<__goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null>, timers?: globalThis.Map<string, __goscript_stats.timer | $.VarRef<__goscript_stats.timer> | null> | null, bucketCache?: __goscript_stats.bucketCache | $.VarRef<__goscript_stats.bucketCache> | null, closed?: atomic.Bool, done?: $.Channel<{}> | null, wg?: sync.WaitGroup, root?: boolean, testScope?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			separator: init?.separator ?? ("" as string),
			prefix: init?.prefix ?? ("" as string),
			tags: init?.tags ?? (null! as globalThis.Map<string, string> | null),
			reporter: init?.reporter ?? (null! as __goscript_reporter.StatsReporter | null),
			cachedReporter: init?.cachedReporter ?? (null! as __goscript_reporter.CachedStatsReporter | null),
			baseReporter: init?.baseReporter ?? (null! as __goscript_reporter.BaseStatsReporter | null),
			defaultBuckets: init?.defaultBuckets ?? (null! as __goscript_types.Buckets | null),
			sanitizer: init?.sanitizer ?? (null! as __goscript_sanitize.Sanitizer | null),
			registry: init?.registry ?? (null! as __goscript_scope_registry.scopeRegistry | $.VarRef<__goscript_scope_registry.scopeRegistry> | null),
			cm: init?.cm ? $.markAsStructValue($.cloneStructValue(init.cm)) : $.markAsStructValue(new sync.RWMutex()),
			gm: init?.gm ? $.markAsStructValue($.cloneStructValue(init.gm)) : $.markAsStructValue(new sync.RWMutex()),
			tm: init?.tm ? $.markAsStructValue($.cloneStructValue(init.tm)) : $.markAsStructValue(new sync.RWMutex()),
			hm: init?.hm ? $.markAsStructValue($.cloneStructValue(init.hm)) : $.markAsStructValue(new sync.RWMutex()),
			counters: init?.counters ?? (null! as globalThis.Map<string, __goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null> | null),
			countersSlice: init?.countersSlice ?? (null! as $.Slice<__goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null>),
			gauges: init?.gauges ?? (null! as globalThis.Map<string, __goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null> | null),
			gaugesSlice: init?.gaugesSlice ?? (null! as $.Slice<__goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null>),
			histograms: init?.histograms ?? (null! as globalThis.Map<string, __goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null> | null),
			histogramsSlice: init?.histogramsSlice ?? (null! as $.Slice<__goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null>),
			timers: init?.timers ?? (null! as globalThis.Map<string, __goscript_stats.timer | $.VarRef<__goscript_stats.timer> | null> | null),
			bucketCache: init?.bucketCache ?? (null! as __goscript_stats.bucketCache | $.VarRef<__goscript_stats.bucketCache> | null),
			closed: init?.closed ? init.closed.clone() : new atomic.Bool(undefined, true),
			done: init?.done ?? (null! as $.Channel<{}> | null),
			wg: init?.wg ? $.markAsStructValue($.cloneStructValue(init.wg)) : $.markAsStructValue(new sync.WaitGroup()),
			root: init?.root ?? (false as boolean),
			testScope: init?.testScope ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): scope {
		return new scope(this, true)
	}

	public __goscriptAssign(source: scope): void {
		const target = this._fields
		const values = source._fields
		target.separator = values.separator
		target.prefix = values.prefix
		target.tags = values.tags
		target.reporter = $.assignFieldValue(target.reporter, values.reporter, "tally.StatsReporter")
		target.cachedReporter = $.assignFieldValue(target.cachedReporter, values.cachedReporter, "tally.CachedStatsReporter")
		target.baseReporter = $.assignFieldValue(target.baseReporter, values.baseReporter, "tally.BaseStatsReporter")
		target.defaultBuckets = $.assignFieldValue(target.defaultBuckets, values.defaultBuckets, "tally.Buckets")
		target.sanitizer = $.assignFieldValue(target.sanitizer, values.sanitizer, "tally.Sanitizer")
		target.registry = values.registry
		$.assignStruct(target.cm, values.cm)
		$.assignStruct(target.gm, values.gm)
		$.assignStruct(target.tm, values.tm)
		$.assignStruct(target.hm, values.hm)
		target.counters = values.counters
		target.countersSlice = values.countersSlice
		target.gauges = values.gauges
		target.gaugesSlice = values.gaugesSlice
		target.histograms = values.histograms
		target.histogramsSlice = values.histogramsSlice
		target.timers = values.timers
		target.bucketCache = values.bucketCache
		$.assignStruct(target.closed, values.closed)
		target.done = values.done
		$.assignStruct(target.wg, values.wg)
		target.root = values.root
		target.testScope = values.testScope
	}

	public async Capabilities(): globalThis.Promise<__goscript_types.Capabilities | null> {
		const s: scope | $.VarRef<scope> | null = this;
		const s$: scope = s == null ? $.pointerTarget<scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scope>(s)
		if ((s$ as scope).baseReporter == null) {
			return $.interfaceValue<__goscript_types.Capabilities | null>(__goscript_stats.capabilitiesNone, "*tally.capabilities", /* @__PURE__ */ $.pointerType("tally.capabilities"))
		}
		return $.pointerValue<Exclude<__goscript_reporter.BaseStatsReporter, null>>((s$ as scope).baseReporter).Capabilities()
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const s: scope | $.VarRef<scope> | null = this;
		const s$: scope = s == null ? $.pointerTarget<scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scope>(s)
		// n.b. Once this flag is set, the next scope report will remove it from
		//      the registry and clear its metrics.
		if (!(s$ as scope).closed.CAS(false, true)) {
			return null
		}

		void (s$ as scope).done!.close()

		if ((s$ as scope).root) {
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as scope).reportRegistry() : scope.prototype.reportRegistry.call(s))
			{
				let [closer, ok] = $.typeAssertTuple<io.Closer | null>((s$ as scope).baseReporter, "io.Closer")
				if (ok) {
					return (closer !== null && (closer as any).__isVarRef !== true && (closer as any).__goValue === undefined ? (closer as Exclude<io.Closer, null>) : $.pointerValue<Exclude<io.Closer, null>>(closer)).Close()
				}
			}
		}

		return null
	}

	public async Counter(name: string): globalThis.Promise<__goscript_types.Counter | null> {
		let s: scope | $.VarRef<scope> | null = this;
		using __defer = new $.DisposableStack()
		const s$: scope = s == null ? $.pointerTarget<scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scope>(s)
		name = (__goscriptAwait = $.pointerValue<Exclude<__goscript_sanitize.Sanitizer, null>>((s$ as scope).sanitizer).Name(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		{
			let [c, ok] = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as scope).counter(name) : scope.prototype.counter.call(s, name))
			if (ok) {
				return c
			}
		}

		await (s$ as scope).cm.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as scope).cm), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		{
			let __goscriptTuple1: any = $.mapGet<string, __goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null, __goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null>((s$ as scope).counters, name, null)
			let c: __goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				return $.interfaceValue<__goscript_types.Counter | null>(c, "*tally.counter", /* @__PURE__ */ $.pointerType("tally.counter"))
			}
		}

		let cachedCounter: __goscript_reporter.CachedCount | null = null! as __goscript_reporter.CachedCount | null
		if ((s$ as scope).cachedReporter != null) {
			cachedCounter = (__goscriptAwait = $.pointerValue<Exclude<__goscript_reporter.CachedStatsReporter, null>>((s$ as scope).cachedReporter).AllocateCounter((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as scope).fullyQualifiedName(name) : scope.prototype.fullyQualifiedName.call(s, name)), (s$ as scope).tags), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		let c: __goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null = __goscript_stats.newCounter(cachedCounter)
		$.mapSet((s$ as scope).counters, name, c);
		;(s$ as scope).countersSlice = $.appendOne((s$ as scope).countersSlice, c, $.appendZeros.nil)

		return $.interfaceValue<__goscript_types.Counter | null>(c, "*tally.counter", /* @__PURE__ */ $.pointerType("tally.counter"))
	}

	public async Gauge(name: string): globalThis.Promise<__goscript_types.Gauge | null> {
		let s: scope | $.VarRef<scope> | null = this;
		using __defer = new $.DisposableStack()
		const s$: scope = s == null ? $.pointerTarget<scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scope>(s)
		name = (__goscriptAwait = $.pointerValue<Exclude<__goscript_sanitize.Sanitizer, null>>((s$ as scope).sanitizer).Name(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		{
			let [g, ok] = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as scope).gauge(name) : scope.prototype.gauge.call(s, name))
			if (ok) {
				return g
			}
		}

		await (s$ as scope).gm.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as scope).gm), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })

		{
			let __goscriptTuple2: any = $.mapGet<string, __goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null, __goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null>((s$ as scope).gauges, name, null)
			let g: __goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			if (ok) {
				return $.interfaceValue<__goscript_types.Gauge | null>(g, "*tally.gauge", /* @__PURE__ */ $.pointerType("tally.gauge"))
			}
		}

		let cachedGauge: __goscript_reporter.CachedGauge | null = null! as __goscript_reporter.CachedGauge | null
		if ((s$ as scope).cachedReporter != null) {
			cachedGauge = (__goscriptAwait = $.pointerValue<Exclude<__goscript_reporter.CachedStatsReporter, null>>((s$ as scope).cachedReporter).AllocateGauge((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as scope).fullyQualifiedName(name) : scope.prototype.fullyQualifiedName.call(s, name)), (s$ as scope).tags), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		let g: __goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null = __goscript_stats.newGauge(cachedGauge)
		$.mapSet((s$ as scope).gauges, name, g);
		;(s$ as scope).gaugesSlice = $.appendOne((s$ as scope).gaugesSlice, g, $.appendZeros.nil)

		return $.interfaceValue<__goscript_types.Gauge | null>(g, "*tally.gauge", /* @__PURE__ */ $.pointerType("tally.gauge"))
	}

	public async Histogram(name: string, b: __goscript_types.Buckets | null): globalThis.Promise<__goscript_types.Histogram | null> {
		let s: scope | $.VarRef<scope> | null = this;
		using __defer = new $.DisposableStack()
		const s$: scope = s == null ? $.pointerTarget<scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scope>(s)
		name = (__goscriptAwait = $.pointerValue<Exclude<__goscript_sanitize.Sanitizer, null>>((s$ as scope).sanitizer).Name(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		{
			let [h, ok] = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as scope).histogram(name) : scope.prototype.histogram.call(s, name))
			if (ok) {
				return h
			}
		}

		if (b == null) {
			b = (s$ as scope).defaultBuckets
		}

		let htype = 0
		{
			let [, ok] = $.typeAssertTuple<__goscript_histogram.DurationBuckets>(b, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"), "tally.DurationBuckets"))
			if (ok) {
				htype = 1
			}
		}

		await (s$ as scope).hm.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as scope).hm), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		{
			let __goscriptTuple3: any = $.mapGet<string, __goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null, __goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null>((s$ as scope).histograms, name, null)
			let h: __goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null = __goscriptTuple3[0]
			let ok = __goscriptTuple3[1]
			if (ok) {
				return $.interfaceValue<__goscript_types.Histogram | null>(h, "*tally.histogram", /* @__PURE__ */ $.pointerType("tally.histogram"))
			}
		}

		let cachedHistogram: __goscript_reporter.CachedHistogram | null = null! as __goscript_reporter.CachedHistogram | null
		if ((s$ as scope).cachedReporter != null) {
			cachedHistogram = (__goscriptAwait = $.pointerValue<Exclude<__goscript_reporter.CachedStatsReporter, null>>((s$ as scope).cachedReporter).AllocateHistogram((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as scope).fullyQualifiedName(name) : scope.prototype.fullyQualifiedName.call(s, name)), (s$ as scope).tags, b), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		let h: __goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null = await __goscript_stats.newHistogram(htype, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as scope).fullyQualifiedName(name) : scope.prototype.fullyQualifiedName.call(s, name)), (s$ as scope).tags, (s$ as scope).reporter, await __goscript_stats.bucketCache.prototype.Get.call((s$ as scope).bucketCache, htype, b), cachedHistogram)
		$.mapSet((s$ as scope).histograms, name, h);
		;(s$ as scope).histogramsSlice = $.appendOne((s$ as scope).histogramsSlice, h, $.appendZeros.nil)

		return $.interfaceValue<__goscript_types.Histogram | null>(h, "*tally.histogram", /* @__PURE__ */ $.pointerType("tally.histogram"))
	}

	public async Snapshot(): globalThis.Promise<Snapshot | null> {
		const s: scope | $.VarRef<scope> | null = this;
		const s$: scope = s == null ? $.pointerTarget<scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scope>(s)
		let snap: snapshot | $.VarRef<snapshot> | null = newSnapshot()
		let snap$: snapshot = snap == null ? $.pointerTarget<snapshot>(snap) : (snap as any).__isVarRef === true ? (snap as any).value : (snap as any).__goValue === undefined ? (snap as any) : $.pointerTarget<snapshot>(snap)

		await __goscript_scope_registry.scopeRegistry.prototype.ForEachScope.call((s$ as scope).registry, $.functionValue(async (ss: scope | $.VarRef<scope> | null): globalThis.Promise<void> => {
			// NB(r): tags are immutable, no lock required to read.
			let tags: globalThis.Map<string, string> | null = $.makeMap<string, string>()
			for (let [k, v] of $.pointerValue<scope>(ss).tags?.entries() ?? []) {
				$.mapSet(tags, k, v)
			}

			await $.pointerValue<scope>(ss).cm.RLock()
			for (const [key, c] of $.pointerValue<scope>(ss).counters?.entries() ?? []) {
				let name = (ss !== null && (ss as any).__isVarRef !== true && (ss as any).__goValue === undefined ? ((ss as any) as scope).fullyQualifiedName(key) : scope.prototype.fullyQualifiedName.call(ss, key))
				let id = __goscript_key_gen.KeyForPrefixedStringMap(name, tags)
				$.mapSet((snap$ as snapshot).counters, id, $.interfaceValue<CounterSnapshot | null>((() => { const __goscriptLiteralField0 = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_stats.counter).snapshot() : __goscript_stats.counter.prototype.snapshot.call(c)); return new counterSnapshot({name: name, tags: tags, value: __goscriptLiteralField0}) })(), "*tally.counterSnapshot", /* @__PURE__ */ $.pointerType("tally.counterSnapshot")))
			}
			$.pointerValue<scope>(ss).cm.RUnlock()
			await $.pointerValue<scope>(ss).gm.RLock()
			for (const [key, g] of $.pointerValue<scope>(ss).gauges?.entries() ?? []) {
				let name = (ss !== null && (ss as any).__isVarRef !== true && (ss as any).__goValue === undefined ? ((ss as any) as scope).fullyQualifiedName(key) : scope.prototype.fullyQualifiedName.call(ss, key))
				let id = __goscript_key_gen.KeyForPrefixedStringMap(name, tags)
				$.mapSet((snap$ as snapshot).gauges, id, $.interfaceValue<GaugeSnapshot | null>((() => { const __goscriptLiteralField1 = (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as __goscript_stats.gauge).snapshot() : __goscript_stats.gauge.prototype.snapshot.call(g)); return new gaugeSnapshot({name: name, tags: tags, value: __goscriptLiteralField1}) })(), "*tally.gaugeSnapshot", /* @__PURE__ */ $.pointerType("tally.gaugeSnapshot")))
			}
			$.pointerValue<scope>(ss).gm.RUnlock()
			await $.pointerValue<scope>(ss).tm.RLock()
			for (const [key, t] of $.pointerValue<scope>(ss).timers?.entries() ?? []) {
				let name = (ss !== null && (ss as any).__isVarRef !== true && (ss as any).__goValue === undefined ? ((ss as any) as scope).fullyQualifiedName(key) : scope.prototype.fullyQualifiedName.call(ss, key))
				let id = __goscript_key_gen.KeyForPrefixedStringMap(name, tags)
				$.mapSet((snap$ as snapshot).timers, id, $.interfaceValue<TimerSnapshot | null>((await (async () => { const __goscriptLiteralField2 = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as __goscript_stats.timer).snapshot() : __goscript_stats.timer.prototype.snapshot.call(t)); return new timerSnapshot({name: name, tags: tags, values: __goscriptLiteralField2}) })()), "*tally.timerSnapshot", /* @__PURE__ */ $.pointerType("tally.timerSnapshot")))
			}
			$.pointerValue<scope>(ss).tm.RUnlock()
			await $.pointerValue<scope>(ss).hm.RLock()
			for (const [key, h] of $.pointerValue<scope>(ss).histograms?.entries() ?? []) {
				let name = (ss !== null && (ss as any).__isVarRef !== true && (ss as any).__goValue === undefined ? ((ss as any) as scope).fullyQualifiedName(key) : scope.prototype.fullyQualifiedName.call(ss, key))
				let id = __goscript_key_gen.KeyForPrefixedStringMap(name, tags)
				$.mapSet((snap$ as snapshot).histograms, id, $.interfaceValue<HistogramSnapshot | null>((() => { const __goscriptLiteralField3 = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as __goscript_stats.histogram).snapshotValues() : __goscript_stats.histogram.prototype.snapshotValues.call(h)); const __goscriptLiteralField4 = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as __goscript_stats.histogram).snapshotDurations() : __goscript_stats.histogram.prototype.snapshotDurations.call(h)); return new histogramSnapshot({name: name, tags: tags, values: __goscriptLiteralField3, durations: __goscriptLiteralField4}) })(), "*tally.histogramSnapshot", /* @__PURE__ */ $.pointerType("tally.histogramSnapshot")))
			}
			$.pointerValue<scope>(ss).hm.RUnlock()
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tally.scope")], results: [] } as $.FunctionTypeInfo)))

		return $.interfaceValue<Snapshot | null>(snap, "*tally.snapshot", /* @__PURE__ */ $.pointerType("tally.snapshot"))
	}

	public async SubScope(prefix: string): globalThis.Promise<__goscript_types.Scope | null> {
		const s: scope | $.VarRef<scope> | null = this;
		prefix = (__goscriptAwait = $.pointerValue<Exclude<__goscript_sanitize.Sanitizer, null>>($.pointerValue<scope>(s).sanitizer).Name(prefix), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return scope.prototype.subscope.call(s, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as scope).fullyQualifiedName(prefix) : scope.prototype.fullyQualifiedName.call(s, prefix)), null)
	}

	public async Tagged(tags: globalThis.Map<string, string> | null): globalThis.Promise<__goscript_types.Scope | null> {
		const s: scope | $.VarRef<scope> | null = this;
		return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as scope).subscope($.pointerValue<scope>(s).prefix, tags) : scope.prototype.subscope.call(s, $.pointerValue<scope>(s).prefix, tags))
	}

	public async Timer(name: string): globalThis.Promise<__goscript_types.Timer | null> {
		let s: scope | $.VarRef<scope> | null = this;
		using __defer = new $.DisposableStack()
		const s$: scope = s == null ? $.pointerTarget<scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scope>(s)
		name = (__goscriptAwait = $.pointerValue<Exclude<__goscript_sanitize.Sanitizer, null>>((s$ as scope).sanitizer).Name(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		{
			let [t, ok] = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as scope).timer(name) : scope.prototype.timer.call(s, name))
			if (ok) {
				return t
			}
		}

		await (s$ as scope).tm.Lock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as scope).tm), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })

		{
			let __goscriptTuple4: any = $.mapGet<string, __goscript_stats.timer | $.VarRef<__goscript_stats.timer> | null, __goscript_stats.timer | $.VarRef<__goscript_stats.timer> | null>((s$ as scope).timers, name, null)
			let t: __goscript_stats.timer | $.VarRef<__goscript_stats.timer> | null = __goscriptTuple4[0]
			let ok = __goscriptTuple4[1]
			if (ok) {
				return $.interfaceValue<__goscript_types.Timer | null>(t, "*tally.timer", /* @__PURE__ */ $.pointerType("tally.timer"))
			}
		}

		let cachedTimer: __goscript_reporter.CachedTimer | null = null! as __goscript_reporter.CachedTimer | null
		if ((s$ as scope).cachedReporter != null) {
			cachedTimer = (__goscriptAwait = $.pointerValue<Exclude<__goscript_reporter.CachedStatsReporter, null>>((s$ as scope).cachedReporter).AllocateTimer((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as scope).fullyQualifiedName(name) : scope.prototype.fullyQualifiedName.call(s, name)), (s$ as scope).tags), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		let t: __goscript_stats.timer | $.VarRef<__goscript_stats.timer> | null = __goscript_stats.newTimer((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as scope).fullyQualifiedName(name) : scope.prototype.fullyQualifiedName.call(s, name)), (s$ as scope).tags, (s$ as scope).reporter, cachedTimer)
		$.mapSet((s$ as scope).timers, name, t)

		return $.interfaceValue<__goscript_types.Timer | null>(t, "*tally.timer", /* @__PURE__ */ $.pointerType("tally.timer"))
	}

	public async cachedReport(): globalThis.Promise<void> {
		const s: scope | $.VarRef<scope> | null = this;
		const s$: scope = s == null ? $.pointerTarget<scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scope>(s)
		await (s$ as scope).cm.RLock()
		for (let __goscriptRangeTarget0 = (s$ as scope).countersSlice, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let counter = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null)
			await (counter !== null && (counter as any).__isVarRef !== true && (counter as any).__goValue === undefined ? ((counter as any) as __goscript_stats.counter).cachedReport() : __goscript_stats.counter.prototype.cachedReport.call(counter))
		}
		void (s$ as scope).cm.RUnlock()

		await (s$ as scope).gm.RLock()
		for (let __goscriptRangeTarget1 = (s$ as scope).gaugesSlice, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let gauge = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null)
			await (gauge !== null && (gauge as any).__isVarRef !== true && (gauge as any).__goValue === undefined ? ((gauge as any) as __goscript_stats.gauge).cachedReport() : __goscript_stats.gauge.prototype.cachedReport.call(gauge))
		}
		void (s$ as scope).gm.RUnlock()

		// we do nothing for timers here because timers report directly to ths StatsReporter without buffering

		await (s$ as scope).hm.RLock()
		for (let __goscriptRangeTarget2 = (s$ as scope).histogramsSlice, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let histogram = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null)
			await (histogram !== null && (histogram as any).__isVarRef !== true && (histogram as any).__goValue === undefined ? ((histogram as any) as __goscript_stats.histogram).cachedReport() : __goscript_stats.histogram.prototype.cachedReport.call(histogram))
		}
		void (s$ as scope).hm.RUnlock()
	}

	public async clearMetrics(): globalThis.Promise<void> {
		let s: scope | $.VarRef<scope> | null = this;
		using __defer = new $.DisposableStack()
		const s$: scope = s == null ? $.pointerTarget<scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scope>(s)
		await (s$ as scope).cm.Lock()
		await (s$ as scope).gm.Lock()
		await (s$ as scope).tm.Lock()
		await (s$ as scope).hm.Lock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as scope).cm), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as scope).gm), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee5() })
		const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as scope).tm), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee6() })
		const __goscriptDeferCallee7 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as scope).hm), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee7() })

		for (const [k, __rangeValue] of (s$ as scope).counters?.entries() ?? []) {
			$.deleteMapEntry((s$ as scope).counters, k)
		}
		;(s$ as scope).countersSlice = null

		for (const [k, __rangeValue] of (s$ as scope).gauges?.entries() ?? []) {
			$.deleteMapEntry((s$ as scope).gauges, k)
		}
		;(s$ as scope).gaugesSlice = null

		for (const [k, __rangeValue] of (s$ as scope).timers?.entries() ?? []) {
			$.deleteMapEntry((s$ as scope).timers, k)
		}

		for (const [k, __rangeValue] of (s$ as scope).histograms?.entries() ?? []) {
			$.deleteMapEntry((s$ as scope).histograms, k)
		}
		;(s$ as scope).histogramsSlice = null
	}

	public async copyAndSanitizeMap(tags: globalThis.Map<string, string> | null): globalThis.Promise<globalThis.Map<string, string> | null> {
		const s: scope | $.VarRef<scope> | null = this;
		const s$: scope = s == null ? $.pointerTarget<scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scope>(s)
		let result: globalThis.Map<string, string> | null = $.makeMap<string, string>()
		for (let [k, v] of tags?.entries() ?? []) {
			k = (__goscriptAwait = $.pointerValue<Exclude<__goscript_sanitize.Sanitizer, null>>((s$ as scope).sanitizer).Key(k), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			v = (__goscriptAwait = $.pointerValue<Exclude<__goscript_sanitize.Sanitizer, null>>((s$ as scope).sanitizer).Value(v), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			$.mapSet(result, k, v)
		}
		return result
	}

	public async counter(sanitizedName: string): globalThis.Promise<[__goscript_types.Counter | null, boolean]> {
		const s: scope | $.VarRef<scope> | null = this;
		using __defer = new $.DisposableStack()
		const s$: scope = s == null ? $.pointerTarget<scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scope>(s)
		await (s$ as scope).cm.RLock()
		const __goscriptDeferCallee8 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((s$ as scope).cm), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee8() })

		let __goscriptTuple5: any = $.mapGet<string, __goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null, __goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null>((s$ as scope).counters, sanitizedName, null)
		let c: __goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null = __goscriptTuple5[0]
		let ok = __goscriptTuple5[1]
		return [$.interfaceValue<__goscript_types.Counter | null>(c, "*tally.counter", /* @__PURE__ */ $.pointerType("tally.counter")), ok]
	}

	public fullyQualifiedName(name: string): string {
		const s: scope | $.VarRef<scope> | null = this;
		const s$: scope = s == null ? $.pointerTarget<scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scope>(s)
		if ($.stringLen((s$ as scope).prefix) == 0) {
			return name
		}
		// NB: we don't need to sanitize the output of this function as we
		// sanitize all the the inputs (prefix, separator, name); and the
		// output we're creating is a concatenation of the sanitized inputs.
		// If we change the concatenation to involve other inputs or characters,
		// we'll need to sanitize them too.
		return $.concatString(($.concatString((s$ as scope).prefix, (s$ as scope).separator)), name)
	}

	public async gauge(name: string): globalThis.Promise<[__goscript_types.Gauge | null, boolean]> {
		const s: scope | $.VarRef<scope> | null = this;
		using __defer = new $.DisposableStack()
		const s$: scope = s == null ? $.pointerTarget<scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scope>(s)
		await (s$ as scope).gm.RLock()
		const __goscriptDeferCallee9 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((s$ as scope).gm), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee9() })

		let __goscriptTuple6: any = $.mapGet<string, __goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null, __goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null>((s$ as scope).gauges, name, null)
		let g: __goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null = __goscriptTuple6[0]
		let ok = __goscriptTuple6[1]
		return [$.interfaceValue<__goscript_types.Gauge | null>(g, "*tally.gauge", /* @__PURE__ */ $.pointerType("tally.gauge")), ok]
	}

	public async histogram(sanitizedName: string): globalThis.Promise<[__goscript_types.Histogram | null, boolean]> {
		const s: scope | $.VarRef<scope> | null = this;
		using __defer = new $.DisposableStack()
		const s$: scope = s == null ? $.pointerTarget<scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scope>(s)
		await (s$ as scope).hm.RLock()
		const __goscriptDeferCallee10 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((s$ as scope).hm), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee10() })

		let __goscriptTuple7: any = $.mapGet<string, __goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null, __goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null>((s$ as scope).histograms, sanitizedName, null)
		let h: __goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null = __goscriptTuple7[0]
		let ok = __goscriptTuple7[1]
		return [$.interfaceValue<__goscript_types.Histogram | null>(h, "*tally.histogram", /* @__PURE__ */ $.pointerType("tally.histogram")), ok]
	}

	public async report(r: __goscript_reporter.StatsReporter | null): globalThis.Promise<void> {
		const s: scope | $.VarRef<scope> | null = this;
		const s$: scope = s == null ? $.pointerTarget<scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scope>(s)
		await (s$ as scope).cm.RLock()
		for (const [name, counter] of (s$ as scope).counters?.entries() ?? []) {
			await __goscript_stats.counter.prototype.report.call(counter, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as scope).fullyQualifiedName(name) : scope.prototype.fullyQualifiedName.call(s, name)), (s$ as scope).tags, r)
		}
		void (s$ as scope).cm.RUnlock()

		await (s$ as scope).gm.RLock()
		for (const [name, gauge] of (s$ as scope).gauges?.entries() ?? []) {
			await __goscript_stats.gauge.prototype.report.call(gauge, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as scope).fullyQualifiedName(name) : scope.prototype.fullyQualifiedName.call(s, name)), (s$ as scope).tags, r)
		}
		void (s$ as scope).gm.RUnlock()

		// we do nothing for timers here because timers report directly to ths StatsReporter without buffering

		await (s$ as scope).hm.RLock()
		for (const [name, histogram] of (s$ as scope).histograms?.entries() ?? []) {
			await __goscript_stats.histogram.prototype.report.call(histogram, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as scope).fullyQualifiedName(name) : scope.prototype.fullyQualifiedName.call(s, name)), (s$ as scope).tags, r)
		}
		void (s$ as scope).hm.RUnlock()
	}

	public async reportLoop(interval: time.Duration): globalThis.Promise<void> {
		const s: scope | $.VarRef<scope> | null = this;
		using __defer = new $.DisposableStack()
		let ticker: time.Ticker | $.VarRef<time.Ticker> | null = time.NewTicker(interval)
		__defer.defer(() => { time.Ticker.prototype.Stop.call($.pointerValue<time.Ticker>(ticker)) })

		while (true) {
			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: $.pointerValue<time.Ticker>(ticker).C,
					onSelected: async (__goscriptSelect0Result) => {
						await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as scope).reportLoopRun() : scope.prototype.reportLoopRun.call(s))
					}
				},
				{
					id: 1,
					isSend: false,
					channel: $.pointerValue<scope>(s).done,
					onSelected: async (__goscriptSelect0Result) => {
						return $.selectVoidReturn()
					}
				}
			], false)
			if (__goscriptSelect0HasReturn) {
				return __goscriptSelect0Value
			}
		}
	}

	public async reportLoopRun(): globalThis.Promise<void> {
		const s: scope | $.VarRef<scope> | null = this;
		if ($.pointerValue<scope>(s).closed.Load()) {
			return
		}

		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as scope).reportRegistry() : scope.prototype.reportRegistry.call(s))
	}

	public async reportRegistry(): globalThis.Promise<void> {
		const s: scope | $.VarRef<scope> | null = this;
		const s$: scope = s == null ? $.pointerTarget<scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scope>(s)
		if ((s$ as scope).reporter != null) {
			await __goscript_scope_registry.scopeRegistry.prototype.Report.call((s$ as scope).registry, (s$ as scope).reporter)
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_reporter.StatsReporter, null>>((s$ as scope).reporter).Flush(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			if ((s$ as scope).cachedReporter != null) {
				await __goscript_scope_registry.scopeRegistry.prototype.CachedReport.call((s$ as scope).registry)
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_reporter.CachedStatsReporter, null>>((s$ as scope).cachedReporter).Flush(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	}

	public async subscope(prefix: string, tags: globalThis.Map<string, string> | null): globalThis.Promise<__goscript_types.Scope | null> {
		const s: scope | $.VarRef<scope> | null = this;
		return $.interfaceValue<__goscript_types.Scope | null>(await __goscript_scope_registry.scopeRegistry.prototype.Subscope.call($.pointerValue<scope>(s).registry, s, prefix, tags), "*tally.scope", /* @__PURE__ */ $.pointerType("tally.scope"))
	}

	public async timer(sanitizedName: string): globalThis.Promise<[__goscript_types.Timer | null, boolean]> {
		const s: scope | $.VarRef<scope> | null = this;
		using __defer = new $.DisposableStack()
		const s$: scope = s == null ? $.pointerTarget<scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scope>(s)
		await (s$ as scope).tm.RLock()
		const __goscriptDeferCallee11 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((s$ as scope).tm), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee11() })

		let __goscriptTuple8: any = $.mapGet<string, __goscript_stats.timer | $.VarRef<__goscript_stats.timer> | null, __goscript_stats.timer | $.VarRef<__goscript_stats.timer> | null>((s$ as scope).timers, sanitizedName, null)
		let t: __goscript_stats.timer | $.VarRef<__goscript_stats.timer> | null = __goscriptTuple8[0]
		let ok = __goscriptTuple8[1]
		return [$.interfaceValue<__goscript_types.Timer | null>(t, "*tally.timer", /* @__PURE__ */ $.pointerType("tally.timer")), ok]
	}

	static __typeInfo = $.registerStructType(
		"tally.scope",
		() => new scope(),
		() => [{ name: "Capabilities", args: [], returns: [{ type: "tally.Capabilities" }], pointerReceiver: true }, { name: "Close", args: [], returns: [{ type: "error" }], pointerReceiver: true }, { name: "Counter", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Counter" }], pointerReceiver: true }, { name: "Gauge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Gauge" }], pointerReceiver: true }, { name: "Histogram", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Histogram" }], pointerReceiver: true }, { name: "Snapshot", args: [], returns: [{ type: "tally.Snapshot" }], pointerReceiver: true }, { name: "SubScope", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Scope" }], pointerReceiver: true }, { name: "Tagged", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Scope" }], pointerReceiver: true }, { name: "Timer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Timer" }], pointerReceiver: true }, { name: "cachedReport", args: [], returns: [], pointerReceiver: true }, { name: "clearMetrics", args: [], returns: [], pointerReceiver: true }, { name: "copyAndSanitizeMap", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }], pointerReceiver: true }, { name: "counter", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Counter" }, { type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "fullyQualifiedName", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "gauge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Gauge" }, { type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "histogram", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Histogram" }, { type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "report", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "reportLoop", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "reportLoopRun", args: [], returns: [], pointerReceiver: true }, { name: "reportRegistry", args: [], returns: [], pointerReceiver: true }, { name: "subscope", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Scope" }], pointerReceiver: true }, { name: "timer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "tally.Timer" }, { type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }],
		scope,
		() => [{ name: "separator", key: "separator", type: /* @__PURE__ */ $.basicType("string") }, { name: "prefix", key: "prefix", type: /* @__PURE__ */ $.basicType("string") }, { name: "tags", key: "tags", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }, { name: "reporter", key: "reporter", type: "tally.StatsReporter" }, { name: "cachedReporter", key: "cachedReporter", type: "tally.CachedStatsReporter" }, { name: "baseReporter", key: "baseReporter", type: "tally.BaseStatsReporter" }, { name: "defaultBuckets", key: "defaultBuckets", type: "tally.Buckets" }, { name: "sanitizer", key: "sanitizer", type: "tally.Sanitizer" }, { name: "registry", key: "registry", type: /* @__PURE__ */ $.pointerType("tally.scopeRegistry") }, { name: "cm", key: "cm", type: "sync.RWMutex" }, { name: "gm", key: "gm", type: "sync.RWMutex" }, { name: "tm", key: "tm", type: "sync.RWMutex" }, { name: "hm", key: "hm", type: "sync.RWMutex" }, { name: "counters", key: "counters", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("tally.counter")) }, { name: "countersSlice", key: "countersSlice", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("tally.counter")) }, { name: "gauges", key: "gauges", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("tally.gauge")) }, { name: "gaugesSlice", key: "gaugesSlice", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("tally.gauge")) }, { name: "histograms", key: "histograms", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("tally.histogram")) }, { name: "histogramsSlice", key: "histogramsSlice", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("tally.histogram")) }, { name: "timers", key: "timers", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("tally.timer")) }, { name: "bucketCache", key: "bucketCache", type: /* @__PURE__ */ $.pointerType("tally.bucketCache") }, { name: "closed", key: "closed", type: "atomic.Bool" }, { name: "done", key: "done", type: /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both") }, { name: "wg", key: "wg", type: "sync.WaitGroup" }, { name: "root", key: "root", type: /* @__PURE__ */ $.basicType("bool") }, { name: "testScope", key: "testScope", type: /* @__PURE__ */ $.basicType("bool") }]
	)
}

export class ScopeOptions {
	public get Tags(): globalThis.Map<string, string> | null {
		return this._fields.Tags
	}

	public set Tags(value: globalThis.Map<string, string> | null) {
		this._fields.Tags = value
	}

	public get Prefix(): string {
		return this._fields.Prefix
	}

	public set Prefix(value: string) {
		this._fields.Prefix = value
	}

	public get Reporter(): __goscript_reporter.StatsReporter | null {
		return this._fields.Reporter
	}

	public set Reporter(value: __goscript_reporter.StatsReporter | null) {
		this._fields.Reporter = value
	}

	public get CachedReporter(): __goscript_reporter.CachedStatsReporter | null {
		return this._fields.CachedReporter
	}

	public set CachedReporter(value: __goscript_reporter.CachedStatsReporter | null) {
		this._fields.CachedReporter = value
	}

	public get Separator(): string {
		return this._fields.Separator
	}

	public set Separator(value: string) {
		this._fields.Separator = value
	}

	public get DefaultBuckets(): __goscript_types.Buckets | null {
		return this._fields.DefaultBuckets
	}

	public set DefaultBuckets(value: __goscript_types.Buckets | null) {
		this._fields.DefaultBuckets = value
	}

	public get SanitizeOptions(): __goscript_sanitize.SanitizeOptions | $.VarRef<__goscript_sanitize.SanitizeOptions> | null {
		return this._fields.SanitizeOptions
	}

	public set SanitizeOptions(value: __goscript_sanitize.SanitizeOptions | $.VarRef<__goscript_sanitize.SanitizeOptions> | null) {
		this._fields.SanitizeOptions = value
	}

	public get MetricsOption(): InternalMetricOption {
		return this._fields.MetricsOption
	}

	public set MetricsOption(value: InternalMetricOption) {
		this._fields.MetricsOption = value
	}

	public get testScope(): boolean {
		return this._fields.testScope
	}

	public set testScope(value: boolean) {
		this._fields.testScope = value
	}

	public get registryShardCount(): number {
		return this._fields.registryShardCount
	}

	public set registryShardCount(value: number) {
		this._fields.registryShardCount = value
	}

	public _fields: {
		Tags: globalThis.Map<string, string> | null
		Prefix: string
		Reporter: __goscript_reporter.StatsReporter | null
		CachedReporter: __goscript_reporter.CachedStatsReporter | null
		Separator: string
		DefaultBuckets: __goscript_types.Buckets | null
		SanitizeOptions: __goscript_sanitize.SanitizeOptions | $.VarRef<__goscript_sanitize.SanitizeOptions> | null
		MetricsOption: InternalMetricOption
		testScope: boolean
		registryShardCount: number
	}

	constructor(init?: Partial<{Tags?: globalThis.Map<string, string> | null, Prefix?: string, Reporter?: __goscript_reporter.StatsReporter | null, CachedReporter?: __goscript_reporter.CachedStatsReporter | null, Separator?: string, DefaultBuckets?: __goscript_types.Buckets | null, SanitizeOptions?: __goscript_sanitize.SanitizeOptions | $.VarRef<__goscript_sanitize.SanitizeOptions> | null, MetricsOption?: InternalMetricOption, testScope?: boolean, registryShardCount?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Tags: init?.Tags ?? (null! as globalThis.Map<string, string> | null),
			Prefix: init?.Prefix ?? ("" as string),
			Reporter: init?.Reporter ?? (null! as __goscript_reporter.StatsReporter | null),
			CachedReporter: init?.CachedReporter ?? (null! as __goscript_reporter.CachedStatsReporter | null),
			Separator: init?.Separator ?? ("" as string),
			DefaultBuckets: init?.DefaultBuckets ?? (null! as __goscript_types.Buckets | null),
			SanitizeOptions: init?.SanitizeOptions ?? (null! as __goscript_sanitize.SanitizeOptions | $.VarRef<__goscript_sanitize.SanitizeOptions> | null),
			MetricsOption: init?.MetricsOption ?? (0 as InternalMetricOption),
			testScope: init?.testScope ?? (false as boolean),
			registryShardCount: init?.registryShardCount ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScopeOptions {
		return new ScopeOptions(this, true)
	}

	public __goscriptAssign(source: ScopeOptions): void {
		const target = this._fields
		const values = source._fields
		target.Tags = values.Tags
		target.Prefix = values.Prefix
		target.Reporter = $.assignFieldValue(target.Reporter, values.Reporter, "tally.StatsReporter")
		target.CachedReporter = $.assignFieldValue(target.CachedReporter, values.CachedReporter, "tally.CachedStatsReporter")
		target.Separator = values.Separator
		target.DefaultBuckets = $.assignFieldValue(target.DefaultBuckets, values.DefaultBuckets, "tally.Buckets")
		target.SanitizeOptions = values.SanitizeOptions
		target.MetricsOption = values.MetricsOption
		target.testScope = values.testScope
		target.registryShardCount = values.registryShardCount
	}

	static __typeInfo = $.registerStructType(
		"tally.ScopeOptions",
		() => new ScopeOptions(),
		() => [],
		ScopeOptions,
		() => [{ name: "Tags", key: "Tags", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }, { name: "Prefix", key: "Prefix", type: /* @__PURE__ */ $.basicType("string") }, { name: "Reporter", key: "Reporter", type: "tally.StatsReporter" }, { name: "CachedReporter", key: "CachedReporter", type: "tally.CachedStatsReporter" }, { name: "Separator", key: "Separator", type: /* @__PURE__ */ $.basicType("string") }, { name: "DefaultBuckets", key: "DefaultBuckets", type: "tally.Buckets" }, { name: "SanitizeOptions", key: "SanitizeOptions", type: /* @__PURE__ */ $.pointerType("tally.SanitizeOptions") }, { name: "MetricsOption", key: "MetricsOption", type: /* @__PURE__ */ $.basicType("int", "tally.InternalMetricOption") }, { name: "testScope", key: "testScope", type: /* @__PURE__ */ $.basicType("bool") }, { name: "registryShardCount", key: "registryShardCount", type: /* @__PURE__ */ $.basicType("uint") }]
	)
}

export class snapshot {
	public get counters(): globalThis.Map<string, CounterSnapshot | null> | null {
		return this._fields.counters
	}

	public set counters(value: globalThis.Map<string, CounterSnapshot | null> | null) {
		this._fields.counters = value
	}

	public get gauges(): globalThis.Map<string, GaugeSnapshot | null> | null {
		return this._fields.gauges
	}

	public set gauges(value: globalThis.Map<string, GaugeSnapshot | null> | null) {
		this._fields.gauges = value
	}

	public get timers(): globalThis.Map<string, TimerSnapshot | null> | null {
		return this._fields.timers
	}

	public set timers(value: globalThis.Map<string, TimerSnapshot | null> | null) {
		this._fields.timers = value
	}

	public get histograms(): globalThis.Map<string, HistogramSnapshot | null> | null {
		return this._fields.histograms
	}

	public set histograms(value: globalThis.Map<string, HistogramSnapshot | null> | null) {
		this._fields.histograms = value
	}

	public _fields: {
		counters: globalThis.Map<string, CounterSnapshot | null> | null
		gauges: globalThis.Map<string, GaugeSnapshot | null> | null
		timers: globalThis.Map<string, TimerSnapshot | null> | null
		histograms: globalThis.Map<string, HistogramSnapshot | null> | null
	}

	constructor(init?: Partial<{counters?: globalThis.Map<string, CounterSnapshot | null> | null, gauges?: globalThis.Map<string, GaugeSnapshot | null> | null, timers?: globalThis.Map<string, TimerSnapshot | null> | null, histograms?: globalThis.Map<string, HistogramSnapshot | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			counters: init?.counters ?? (null! as globalThis.Map<string, CounterSnapshot | null> | null),
			gauges: init?.gauges ?? (null! as globalThis.Map<string, GaugeSnapshot | null> | null),
			timers: init?.timers ?? (null! as globalThis.Map<string, TimerSnapshot | null> | null),
			histograms: init?.histograms ?? (null! as globalThis.Map<string, HistogramSnapshot | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): snapshot {
		return new snapshot(this, true)
	}

	public __goscriptAssign(source: snapshot): void {
		const target = this._fields
		const values = source._fields
		target.counters = values.counters
		target.gauges = values.gauges
		target.timers = values.timers
		target.histograms = values.histograms
	}

	public Counters(): globalThis.Map<string, CounterSnapshot | null> | null {
		const s: snapshot | $.VarRef<snapshot> | null = this;
		return $.pointerValue<snapshot>(s).counters
	}

	public Gauges(): globalThis.Map<string, GaugeSnapshot | null> | null {
		const s: snapshot | $.VarRef<snapshot> | null = this;
		return $.pointerValue<snapshot>(s).gauges
	}

	public Histograms(): globalThis.Map<string, HistogramSnapshot | null> | null {
		const s: snapshot | $.VarRef<snapshot> | null = this;
		return $.pointerValue<snapshot>(s).histograms
	}

	public Timers(): globalThis.Map<string, TimerSnapshot | null> | null {
		const s: snapshot | $.VarRef<snapshot> | null = this;
		return $.pointerValue<snapshot>(s).timers
	}

	static __typeInfo = $.registerStructType(
		"tally.snapshot",
		() => new snapshot(),
		() => [{ name: "Counters", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tally.CounterSnapshot") }], pointerReceiver: true }, { name: "Gauges", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tally.GaugeSnapshot") }], pointerReceiver: true }, { name: "Histograms", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tally.HistogramSnapshot") }], pointerReceiver: true }, { name: "Timers", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tally.TimerSnapshot") }], pointerReceiver: true }],
		snapshot,
		() => [{ name: "counters", key: "counters", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tally.CounterSnapshot") }, { name: "gauges", key: "gauges", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tally.GaugeSnapshot") }, { name: "timers", key: "timers", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tally.TimerSnapshot") }, { name: "histograms", key: "histograms", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tally.HistogramSnapshot") }]
	)
}

export class counterSnapshot {
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

	public get value(): bigint {
		return this._fields.value
	}

	public set value(value: bigint) {
		this._fields.value = value
	}

	public _fields: {
		name: string
		tags: globalThis.Map<string, string> | null
		value: bigint
	}

	constructor(init?: Partial<{name?: string, tags?: globalThis.Map<string, string> | null, value?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			tags: init?.tags ?? (null! as globalThis.Map<string, string> | null),
			value: init?.value ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): counterSnapshot {
		return new counterSnapshot(this, true)
	}

	public __goscriptAssign(source: counterSnapshot): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.tags = values.tags
		target.value = values.value
	}

	public Name(): string {
		const s: counterSnapshot | $.VarRef<counterSnapshot> | null = this;
		return $.pointerValue<counterSnapshot>(s).name
	}

	public Tags(): globalThis.Map<string, string> | null {
		const s: counterSnapshot | $.VarRef<counterSnapshot> | null = this;
		return $.pointerValue<counterSnapshot>(s).tags
	}

	public Value(): bigint {
		const s: counterSnapshot | $.VarRef<counterSnapshot> | null = this;
		return $.pointerValue<counterSnapshot>(s).value
	}

	static __typeInfo = $.registerStructType(
		"tally.counterSnapshot",
		() => new counterSnapshot(),
		() => [{ name: "Name", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Tags", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }], pointerReceiver: true }, { name: "Value", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }], pointerReceiver: true }],
		counterSnapshot,
		() => [{ name: "name", key: "name", type: /* @__PURE__ */ $.basicType("string") }, { name: "tags", key: "tags", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }, { name: "value", key: "value", type: /* @__PURE__ */ $.basicType("int64") }]
	)
}

export class gaugeSnapshot {
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

	public get value(): number {
		return this._fields.value
	}

	public set value(value: number) {
		this._fields.value = value
	}

	public _fields: {
		name: string
		tags: globalThis.Map<string, string> | null
		value: number
	}

	constructor(init?: Partial<{name?: string, tags?: globalThis.Map<string, string> | null, value?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			tags: init?.tags ?? (null! as globalThis.Map<string, string> | null),
			value: init?.value ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): gaugeSnapshot {
		return new gaugeSnapshot(this, true)
	}

	public __goscriptAssign(source: gaugeSnapshot): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.tags = values.tags
		target.value = values.value
	}

	public Name(): string {
		const s: gaugeSnapshot | $.VarRef<gaugeSnapshot> | null = this;
		return $.pointerValue<gaugeSnapshot>(s).name
	}

	public Tags(): globalThis.Map<string, string> | null {
		const s: gaugeSnapshot | $.VarRef<gaugeSnapshot> | null = this;
		return $.pointerValue<gaugeSnapshot>(s).tags
	}

	public Value(): number {
		const s: gaugeSnapshot | $.VarRef<gaugeSnapshot> | null = this;
		return $.pointerValue<gaugeSnapshot>(s).value
	}

	static __typeInfo = $.registerStructType(
		"tally.gaugeSnapshot",
		() => new gaugeSnapshot(),
		() => [{ name: "Name", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Tags", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }], pointerReceiver: true }, { name: "Value", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float64") }], pointerReceiver: true }],
		gaugeSnapshot,
		() => [{ name: "name", key: "name", type: /* @__PURE__ */ $.basicType("string") }, { name: "tags", key: "tags", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }, { name: "value", key: "value", type: /* @__PURE__ */ $.basicType("float64") }]
	)
}

export class timerSnapshot {
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

	public get values(): $.Slice<time.Duration> {
		return this._fields.values
	}

	public set values(value: $.Slice<time.Duration>) {
		this._fields.values = value
	}

	public _fields: {
		name: string
		tags: globalThis.Map<string, string> | null
		values: $.Slice<time.Duration>
	}

	constructor(init?: Partial<{name?: string, tags?: globalThis.Map<string, string> | null, values?: $.Slice<time.Duration>}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			tags: init?.tags ?? (null! as globalThis.Map<string, string> | null),
			values: init?.values ?? (null! as $.Slice<time.Duration>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): timerSnapshot {
		return new timerSnapshot(this, true)
	}

	public __goscriptAssign(source: timerSnapshot): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.tags = values.tags
		target.values = values.values
	}

	public Name(): string {
		const s: timerSnapshot | $.VarRef<timerSnapshot> | null = this;
		return $.pointerValue<timerSnapshot>(s).name
	}

	public Tags(): globalThis.Map<string, string> | null {
		const s: timerSnapshot | $.VarRef<timerSnapshot> | null = this;
		return $.pointerValue<timerSnapshot>(s).tags
	}

	public Values(): $.Slice<time.Duration> {
		const s: timerSnapshot | $.VarRef<timerSnapshot> | null = this;
		return $.pointerValue<timerSnapshot>(s).values
	}

	static __typeInfo = $.registerStructType(
		"tally.timerSnapshot",
		() => new timerSnapshot(),
		() => [{ name: "Name", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Tags", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }], pointerReceiver: true }, { name: "Values", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration")) }], pointerReceiver: true }],
		timerSnapshot,
		() => [{ name: "name", key: "name", type: /* @__PURE__ */ $.basicType("string") }, { name: "tags", key: "tags", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }, { name: "values", key: "values", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration")) }]
	)
}

export class histogramSnapshot {
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

	public get values(): globalThis.Map<number, bigint> | null {
		return this._fields.values
	}

	public set values(value: globalThis.Map<number, bigint> | null) {
		this._fields.values = value
	}

	public get durations(): globalThis.Map<time.Duration, bigint> | null {
		return this._fields.durations
	}

	public set durations(value: globalThis.Map<time.Duration, bigint> | null) {
		this._fields.durations = value
	}

	public _fields: {
		name: string
		tags: globalThis.Map<string, string> | null
		values: globalThis.Map<number, bigint> | null
		durations: globalThis.Map<time.Duration, bigint> | null
	}

	constructor(init?: Partial<{name?: string, tags?: globalThis.Map<string, string> | null, values?: globalThis.Map<number, bigint> | null, durations?: globalThis.Map<time.Duration, bigint> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			tags: init?.tags ?? (null! as globalThis.Map<string, string> | null),
			values: init?.values ?? (null! as globalThis.Map<number, bigint> | null),
			durations: init?.durations ?? (null! as globalThis.Map<time.Duration, bigint> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): histogramSnapshot {
		return new histogramSnapshot(this, true)
	}

	public __goscriptAssign(source: histogramSnapshot): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.tags = values.tags
		target.values = values.values
		target.durations = values.durations
	}

	public Durations(): globalThis.Map<time.Duration, bigint> | null {
		const s: histogramSnapshot | $.VarRef<histogramSnapshot> | null = this;
		return $.pointerValue<histogramSnapshot>(s).durations
	}

	public Name(): string {
		const s: histogramSnapshot | $.VarRef<histogramSnapshot> | null = this;
		return $.pointerValue<histogramSnapshot>(s).name
	}

	public Tags(): globalThis.Map<string, string> | null {
		const s: histogramSnapshot | $.VarRef<histogramSnapshot> | null = this;
		return $.pointerValue<histogramSnapshot>(s).tags
	}

	public Values(): globalThis.Map<number, bigint> | null {
		const s: histogramSnapshot | $.VarRef<histogramSnapshot> | null = this;
		return $.pointerValue<histogramSnapshot>(s).values
	}

	static __typeInfo = $.registerStructType(
		"tally.histogramSnapshot",
		() => new histogramSnapshot(),
		() => [{ name: "Durations", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64", "time.Duration"), /* @__PURE__ */ $.basicType("int64")) }], pointerReceiver: true }, { name: "Name", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Tags", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }], pointerReceiver: true }, { name: "Values", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("float64"), /* @__PURE__ */ $.basicType("int64")) }], pointerReceiver: true }],
		histogramSnapshot,
		() => [{ name: "name", key: "name", type: /* @__PURE__ */ $.basicType("string") }, { name: "tags", key: "tags", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }, { name: "values", key: "values", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("float64"), /* @__PURE__ */ $.basicType("int64")) }, { name: "durations", key: "durations", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64", "time.Duration"), /* @__PURE__ */ $.basicType("int64")) }]
	)
}

export const Unset: InternalMetricOption = 0

export const SendInternalMetrics: InternalMetricOption = 1

export const OmitInternalMetrics: InternalMetricOption = 2

export const _defaultInitialSliceSize: number = 16

export const _defaultReportingInterval: time.Duration = 2000000000n

export var NoopScope: __goscript_types.Scope | null

export async function __goscript_init_NoopScope(): globalThis.Promise<void> {
	if (((NoopScope) as any) === undefined) {
		const [scope] = await NewRootScope(new ScopeOptions({Reporter: __goscript_stats.__goscript_get_NullStatsReporter()}, true), 0n)
		NoopScope = scope
	}
}

export function __goscript_get_NoopScope(): __goscript_types.Scope | null {
	if (((NoopScope) as any) === undefined) {
		throw new globalThis.Error("goscript package variable NoopScope read before initialization")
	}
	return NoopScope
}

export let DefaultSeparator: string = "."

export function __goscript_set_DefaultSeparator(__goscriptValue: string): void {
	DefaultSeparator = __goscriptValue
}

export let globalNow: (() => time.Time | globalThis.Promise<time.Time>) | null = time.Now

export function __goscript_set_globalNow(__goscriptValue: (() => time.Time | globalThis.Promise<time.Time>) | null): void {
	globalNow = __goscriptValue
}

export var defaultScopeBuckets: __goscript_histogram.DurationBuckets

export function __goscript_init_defaultScopeBuckets(): void {
	if (((defaultScopeBuckets) as any) === undefined) {
		defaultScopeBuckets = ($.arrayToSlice<time.Duration>([0n, 10000000n, 25000000n, 50000000n, 75000000n, 100000000n, 200000000n, 300000000n, 400000000n, 500000000n, 600000000n, 800000000n, 1000000000n, 2000000000n, 5000000000n]) as __goscript_histogram.DurationBuckets)
	}
}

export function __goscript_get_defaultScopeBuckets(): __goscript_histogram.DurationBuckets {
	if (((defaultScopeBuckets) as any) === undefined) {
		__goscript_init_defaultScopeBuckets()
	}
	return defaultScopeBuckets
}

export function __goscript_set_defaultScopeBuckets(__goscriptValue: __goscript_histogram.DurationBuckets): void {
	defaultScopeBuckets = __goscriptValue
}

export async function NewRootScope(opts: ScopeOptions, interval: time.Duration): globalThis.Promise<[__goscript_types.Scope | null, io.Closer | null]> {
	let s: scope | $.VarRef<scope> | null = await newRootScope((opts).clone(), interval)
	return [$.interfaceValue<__goscript_types.Scope | null>(s, "*tally.scope", /* @__PURE__ */ $.pointerType("tally.scope")), $.interfaceValue<io.Closer | null>(s, "*tally.scope", /* @__PURE__ */ $.pointerType("tally.scope"))]
}

export async function NewRootScopeWithDefaultInterval(opts: ScopeOptions): globalThis.Promise<[__goscript_types.Scope | null, io.Closer | null]> {
	return NewRootScope(opts, 2000000000n)
}

export async function NewTestScope(prefix: string, tags: globalThis.Map<string, string> | null): globalThis.Promise<TestScope | null> {
	return $.interfaceValue<TestScope | null>(await newRootScope(new ScopeOptions({Prefix: prefix, Tags: tags, testScope: true}, true), 0n), "*tally.scope", /* @__PURE__ */ $.pointerType("tally.scope"))
}

export async function newRootScope(opts: ScopeOptions, interval: time.Duration): globalThis.Promise<scope | $.VarRef<scope> | null> {
	let __goscriptShadow0 = __goscript_sanitize.NewNoOpSanitizer()
	{
		let o: __goscript_sanitize.SanitizeOptions | $.VarRef<__goscript_sanitize.SanitizeOptions> | null = opts.SanitizeOptions
		if (o != null) {
			__goscriptShadow0 = __goscript_sanitize.NewSanitizer(($.pointerValue<__goscript_sanitize.SanitizeOptions>(o)).clone())
		}
	}

	if (opts.Tags == null) {
		opts.Tags = $.makeMap<string, string>()
	}
	if ($.stringEqual(opts.Separator, "")) {
		opts.Separator = DefaultSeparator
	}

	let baseReporter: __goscript_reporter.BaseStatsReporter | null = null! as __goscript_reporter.BaseStatsReporter | null
	if (opts.Reporter != null) {
		baseReporter = (opts.Reporter as __goscript_reporter.BaseStatsReporter | null)
	} else {
		if (opts.CachedReporter != null) {
			baseReporter = (opts.CachedReporter as __goscript_reporter.BaseStatsReporter | null)
		}
	}

	if ((opts.DefaultBuckets == null) || ((__goscriptAwait = $.pointerValue<Exclude<__goscript_types.Buckets, null>>(opts.DefaultBuckets).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) < 1)) {
		opts.DefaultBuckets = $.namedValueInterfaceValue<__goscript_types.Buckets | null>(__goscript_get_defaultScopeBuckets(), "tally.DurationBuckets", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
	}

	let s: scope | $.VarRef<scope> | null = (await (async () => { const __goscriptLiteralField5 = __goscript_stats.newBucketCache(); const __goscriptLiteralField6 = (__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<__goscript_sanitize.Sanitizer, null>) : $.pointerValue<Exclude<__goscript_sanitize.Sanitizer, null>>(__goscriptShadow0)).Name(opts.Prefix), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField7 = (__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<__goscript_sanitize.Sanitizer, null>) : $.pointerValue<Exclude<__goscript_sanitize.Sanitizer, null>>(__goscriptShadow0)).Name(opts.Separator), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new scope({baseReporter: baseReporter, bucketCache: __goscriptLiteralField5, cachedReporter: opts.CachedReporter, counters: $.makeMap<string, __goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null>(), countersSlice: $.makeSlice<__goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null>(0, 16), defaultBuckets: opts.DefaultBuckets, done: $.makeChannel<{}>(0, {}, "both"), gauges: $.makeMap<string, __goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null>(), gaugesSlice: $.makeSlice<__goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null>(0, 16), histograms: $.makeMap<string, __goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null>(), histogramsSlice: $.makeSlice<__goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null>(0, 16), prefix: __goscriptLiteralField6, reporter: opts.Reporter, sanitizer: __goscriptShadow0, separator: __goscriptLiteralField7, timers: $.makeMap<string, __goscript_stats.timer | $.VarRef<__goscript_stats.timer> | null>(), root: true, testScope: opts.testScope}) })())
	let s$: scope = s == null ? $.pointerTarget<scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scope>(s);

	// NB(r): Take a copy of the tags on creation
	// so that it cannot be modified after set.
	;(s$ as scope).tags = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as scope).copyAndSanitizeMap(opts.Tags) : scope.prototype.copyAndSanitizeMap.call(s, opts.Tags));

	// Register the root scope
	;(s$ as scope).registry = await __goscript_scope_registry.newScopeRegistryWithShardCount(s, opts.registryShardCount, opts.MetricsOption)

	if (interval > 0n) {
		void (s$ as scope).wg.Add(1)
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			using __defer = new $.DisposableStack()
			const __goscriptDeferCallee12 = $.functionValue(((__receiver) => () => __receiver.Done())((s$ as scope).wg), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*WaitGroup).Done-fm")
			__defer.defer(() => { __goscriptDeferCallee12() })
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as scope).reportLoop(interval) : scope.prototype.reportLoop.call(s, interval))
		})() })
	}

	return s
}

export function mergeRightTags(tagsLeft: globalThis.Map<string, string> | null, tagsRight: globalThis.Map<string, string> | null): globalThis.Map<string, string> | null {
	if ((tagsLeft == null) && (tagsRight == null)) {
		return null
	}
	if ($.len(tagsRight) == 0) {
		return tagsLeft
	}
	if ($.len(tagsLeft) == 0) {
		return tagsRight
	}

	let result: globalThis.Map<string, string> | null = $.makeMap<string, string>()
	for (let [k, v] of tagsLeft?.entries() ?? []) {
		$.mapSet(result, k, v)
	}
	for (let [k, v] of tagsRight?.entries() ?? []) {
		$.mapSet(result, k, v)
	}
	return result
}

export function newSnapshot(): snapshot | $.VarRef<snapshot> | null {
	return new snapshot({counters: $.makeMap<string, CounterSnapshot | null>(), gauges: $.makeMap<string, GaugeSnapshot | null>(), timers: $.makeMap<string, TimerSnapshot | null>(), histograms: $.makeMap<string, HistogramSnapshot | null>()})
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({AsDurations: (receiver: any, ...args: any[]) => (__goscript_histogram.DurationBuckets_AsDurations as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), AsValues: (receiver: any, ...args: any[]) => (__goscript_histogram.DurationBuckets_AsValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (__goscript_histogram.DurationBuckets_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (__goscript_histogram.DurationBuckets_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_histogram.DurationBuckets_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (__goscript_histogram.DurationBuckets_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"), "tally.DurationBuckets"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("AsDurations", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))]), $.methodSignature("AsValues", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptAwait: any
