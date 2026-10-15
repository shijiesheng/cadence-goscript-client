// Generated file based on scope_registry.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as maphash from "@goscript/hash/maphash/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sync from "@goscript/sync/index.js"

import * as unsafe from "@goscript/unsafe/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import type * as fmt from "@goscript/fmt/index.js"

import type * as sort from "@goscript/sort/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_key_gen from "./key_gen.gs.ts"

import * as __goscript_reporter from "./reporter.gs.ts"

import * as __goscript_sanitize from "./sanitize.gs.ts"

import * as __goscript_scope from "./scope.gs.ts"

import * as __goscript_stats from "./stats.gs.ts"

import * as __goscript_types from "./types.gs.ts"

import * as __goscript_version from "./version.gs.ts"
import "@goscript/hash/maphash/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sync/index.js"
import "@goscript/unsafe/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/time/index.js"
import "./key_gen.gs.ts"
import "./reporter.gs.ts"
import "./sanitize.gs.ts"
import "./scope.gs.ts"
import "./stats.gs.ts"
import "./types.gs.ts"
import "./version.gs.ts"

$.registerTypePackagePath("github.com/uber-go/tally", ["tally.scopeRegistry", "tally.scopeBucket"])

export class scopeRegistry {
	public get seed(): maphash.Seed {
		return this._fields.seed
	}

	public set seed(value: maphash.Seed) {
		this._fields.seed = value
	}

	public get root(): __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null {
		return this._fields.root
	}

	public set root(value: __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null) {
		this._fields.root = value
	}

	// We need a subscope per GOPROC so that we can take advantage of all the cpu available to the application.
	public get subscopes(): $.Slice<scopeBucket | $.VarRef<scopeBucket> | null> {
		return this._fields.subscopes
	}

	public set subscopes(value: $.Slice<scopeBucket | $.VarRef<scopeBucket> | null>) {
		this._fields.subscopes = value
	}

	// Internal metrics related.
	public get internalMetricsOption(): __goscript_scope.InternalMetricOption {
		return this._fields.internalMetricsOption
	}

	public set internalMetricsOption(value: __goscript_scope.InternalMetricOption) {
		this._fields.internalMetricsOption = value
	}

	public get sanitizedCounterCardinalityName(): string {
		return this._fields.sanitizedCounterCardinalityName
	}

	public set sanitizedCounterCardinalityName(value: string) {
		this._fields.sanitizedCounterCardinalityName = value
	}

	public get sanitizedGaugeCardinalityName(): string {
		return this._fields.sanitizedGaugeCardinalityName
	}

	public set sanitizedGaugeCardinalityName(value: string) {
		this._fields.sanitizedGaugeCardinalityName = value
	}

	public get sanitizedHistogramCardinalityName(): string {
		return this._fields.sanitizedHistogramCardinalityName
	}

	public set sanitizedHistogramCardinalityName(value: string) {
		this._fields.sanitizedHistogramCardinalityName = value
	}

	public _fields: {
		seed: maphash.Seed
		root: __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null
		subscopes: $.Slice<scopeBucket | $.VarRef<scopeBucket> | null>
		internalMetricsOption: __goscript_scope.InternalMetricOption
		sanitizedCounterCardinalityName: string
		sanitizedGaugeCardinalityName: string
		sanitizedHistogramCardinalityName: string
	}

	constructor(init?: Partial<{seed?: maphash.Seed, root?: __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null, subscopes?: $.Slice<scopeBucket | $.VarRef<scopeBucket> | null>, internalMetricsOption?: __goscript_scope.InternalMetricOption, sanitizedCounterCardinalityName?: string, sanitizedGaugeCardinalityName?: string, sanitizedHistogramCardinalityName?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			seed: init?.seed ? $.markAsStructValue($.cloneStructValue(init.seed)) : $.markAsStructValue(new maphash.Seed()),
			root: init?.root ?? (null! as __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null),
			subscopes: init?.subscopes ?? (null! as $.Slice<scopeBucket | $.VarRef<scopeBucket> | null>),
			internalMetricsOption: init?.internalMetricsOption ?? (0 as __goscript_scope.InternalMetricOption),
			sanitizedCounterCardinalityName: init?.sanitizedCounterCardinalityName ?? ("" as string),
			sanitizedGaugeCardinalityName: init?.sanitizedGaugeCardinalityName ?? ("" as string),
			sanitizedHistogramCardinalityName: init?.sanitizedHistogramCardinalityName ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): scopeRegistry {
		return new scopeRegistry(this, true)
	}

	public __goscriptAssign(source: scopeRegistry): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.seed, values.seed)
		target.root = values.root
		target.subscopes = values.subscopes
		target.internalMetricsOption = values.internalMetricsOption
		target.sanitizedCounterCardinalityName = values.sanitizedCounterCardinalityName
		target.sanitizedGaugeCardinalityName = values.sanitizedGaugeCardinalityName
		target.sanitizedHistogramCardinalityName = values.sanitizedHistogramCardinalityName
	}

	public async CachedReport(): globalThis.Promise<void> {
		const r: scopeRegistry | $.VarRef<scopeRegistry> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.purgeIfRootClosed())($.pointerValue<scopeRegistry>(r)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/uber-go/tally.(*scopeRegistry).purgeIfRootClosed-fm")
		__defer.defer(async () => { await __goscriptDeferCallee0() })
		await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as scopeRegistry).reportInternalMetrics() : scopeRegistry.prototype.reportInternalMetrics.call(r))

		for (let __goscriptRangeTarget0 = $.pointerValue<scopeRegistry>(r).subscopes, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let subscopeBucket = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as scopeBucket | $.VarRef<scopeBucket> | null)
			await $.pointerValue<scopeBucket>(subscopeBucket).mu.RLock()

			for (const [name, __goscriptRangeShadow0] of $.pointerValue<scopeBucket>(subscopeBucket).s?.entries() ?? []) {
				await (__goscriptRangeShadow0 !== null && (__goscriptRangeShadow0 as any).__isVarRef !== true && (__goscriptRangeShadow0 as any).__goValue === undefined ? ((__goscriptRangeShadow0 as any) as __goscript_scope.scope).cachedReport() : __goscript_scope.scope.prototype.cachedReport.call(__goscriptRangeShadow0))

				if ($.pointerValue<__goscript_scope.scope>(__goscriptRangeShadow0).closed.Load()) {
					await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as scopeRegistry).removeWithRLock(subscopeBucket, name) : scopeRegistry.prototype.removeWithRLock.call(r, subscopeBucket, name))
					await (__goscriptRangeShadow0 !== null && (__goscriptRangeShadow0 as any).__isVarRef !== true && (__goscriptRangeShadow0 as any).__goValue === undefined ? ((__goscriptRangeShadow0 as any) as __goscript_scope.scope).clearMetrics() : __goscript_scope.scope.prototype.clearMetrics.call(__goscriptRangeShadow0))
				}
			}

			$.pointerValue<scopeBucket>(subscopeBucket).mu.RUnlock()
		}
	}

	public async ForEachScope(f: ((_p0: __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null) => void) | null): globalThis.Promise<void> {
		const r: scopeRegistry | $.VarRef<scopeRegistry> | null = this;
		for (let __goscriptRangeTarget1 = $.pointerValue<scopeRegistry>(r).subscopes, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let subscopeBucket = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as scopeBucket | $.VarRef<scopeBucket> | null)
			await $.pointerValue<scopeBucket>(subscopeBucket).mu.RLock()
			for (const [__rangeKey, __goscriptRangeShadow1] of $.pointerValue<scopeBucket>(subscopeBucket).s?.entries() ?? []) {
				void (__goscriptAwait = f!(__goscriptRangeShadow1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			$.pointerValue<scopeBucket>(subscopeBucket).mu.RUnlock()
		}
	}

	public async Report(reporter: __goscript_reporter.StatsReporter | null): globalThis.Promise<void> {
		const r: scopeRegistry | $.VarRef<scopeRegistry> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.purgeIfRootClosed())($.pointerValue<scopeRegistry>(r)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/uber-go/tally.(*scopeRegistry).purgeIfRootClosed-fm")
		__defer.defer(async () => { await __goscriptDeferCallee1() })
		await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as scopeRegistry).reportInternalMetrics() : scopeRegistry.prototype.reportInternalMetrics.call(r))

		for (let __goscriptRangeTarget2 = $.pointerValue<scopeRegistry>(r).subscopes, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let subscopeBucket = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as scopeBucket | $.VarRef<scopeBucket> | null)
			await $.pointerValue<scopeBucket>(subscopeBucket).mu.RLock()

			for (const [name, __goscriptRangeShadow2] of $.pointerValue<scopeBucket>(subscopeBucket).s?.entries() ?? []) {
				await (__goscriptRangeShadow2 !== null && (__goscriptRangeShadow2 as any).__isVarRef !== true && (__goscriptRangeShadow2 as any).__goValue === undefined ? ((__goscriptRangeShadow2 as any) as __goscript_scope.scope).report(reporter) : __goscript_scope.scope.prototype.report.call(__goscriptRangeShadow2, reporter))

				if ($.pointerValue<__goscript_scope.scope>(__goscriptRangeShadow2).closed.Load()) {
					await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as scopeRegistry).removeWithRLock(subscopeBucket, name) : scopeRegistry.prototype.removeWithRLock.call(r, subscopeBucket, name))
					await (__goscriptRangeShadow2 !== null && (__goscriptRangeShadow2 as any).__isVarRef !== true && (__goscriptRangeShadow2 as any).__goValue === undefined ? ((__goscriptRangeShadow2 as any) as __goscript_scope.scope).clearMetrics() : __goscript_scope.scope.prototype.clearMetrics.call(__goscriptRangeShadow2))
				}
			}

			$.pointerValue<scopeBucket>(subscopeBucket).mu.RUnlock()
		}
	}

	public async Subscope(parent: __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null, prefix: string, tags: globalThis.Map<string, string> | null): globalThis.Promise<__goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null> {
		const r: scopeRegistry | $.VarRef<scopeRegistry> | null = this;
		using __defer = new $.DisposableStack()
		const r$: scopeRegistry = r == null ? $.pointerTarget<scopeRegistry>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<scopeRegistry>(r)
		const parent$: __goscript_scope.scope = parent == null ? $.pointerTarget<__goscript_scope.scope>(parent) : (parent as any).__isVarRef === true ? (parent as any).value : (parent as any).__goValue === undefined ? (parent as any) : $.pointerTarget<__goscript_scope.scope>(parent)
		if ($.pointerValue<__goscript_scope.scope>((r$ as scopeRegistry).root).closed.Load() || (parent$ as __goscript_scope.scope).closed.Load()) {
			return $.mustTypeAssert<__goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null>((await __goscript_scope.__goscript_init_NoopScope(), __goscript_scope.__goscript_get_NoopScope()), /* @__PURE__ */ $.pointerType("tally.scope"))
		}

		let buf: $.VarRef<$.Slice<number>> = $.varRef(__goscript_key_gen.keyForPrefixedStringMapsAsKey($.makeSlice<number>(0, 256, "byte"), prefix, $.arrayToSlice<globalThis.Map<string, string> | null>([(parent$ as __goscript_scope.scope).tags, tags])))
		let h: $.VarRef<maphash.Hash> = $.varRef($.markAsStructValue(new maphash.Hash()))

		h.value.SetSeed($.markAsStructValue($.cloneStructValue((r$ as scopeRegistry).seed)))
		h.value.Write(buf.value)
		let subscopeBucket: scopeBucket | $.VarRef<scopeBucket> | null = $.arrayIndex((r$ as scopeRegistry).subscopes!, globalThis.Number($.uint64Mod(h.value.Sum64(), $.uint64($.sliceLen((r$ as scopeRegistry).subscopes)))))
		let subscopeBucket$: scopeBucket = subscopeBucket == null ? $.pointerTarget<scopeBucket>(subscopeBucket) : (subscopeBucket as any).__isVarRef === true ? (subscopeBucket as any).value : (subscopeBucket as any).__goValue === undefined ? (subscopeBucket as any) : $.pointerTarget<scopeBucket>(subscopeBucket)

		await (subscopeBucket$ as scopeBucket).mu.RLock()
		// buf is stack allocated and casting it to a string for lookup from the cache
		// as the memory layout of []byte is a superset of string the below casting is safe and does not do any alloc
		// However it cannot be used outside of the stack; a heap allocation is needed if that string needs to be stored
		// in the map as a key
		let unsanitizedKey: string = $.bytesToString(buf.value)
		let sanitizedKey: string = ""

		let __goscriptTuple0: any = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as scopeRegistry).lockedLookup(subscopeBucket, unsanitizedKey) : scopeRegistry.prototype.lockedLookup.call(r, subscopeBucket, unsanitizedKey))
		let s: __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		let s$: __goscript_scope.scope = s == null ? $.pointerTarget<__goscript_scope.scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_scope.scope>(s)
		if (ok) {
			// If this subscope isn't closed or is a test scope, return it.
			// Otherwise, report it immediately and delete it so that a new
			// (functional) scope can be returned instead.
			if (!(s$ as __goscript_scope.scope).closed.Load() || (s$ as __goscript_scope.scope).testScope) {
				void (subscopeBucket$ as scopeBucket).mu.RUnlock()
				return s
			}

			switch ((true as boolean)) {
				case (parent$ as __goscript_scope.scope).reporter != null:
				{
					await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_scope.scope).report((parent$ as __goscript_scope.scope).reporter) : __goscript_scope.scope.prototype.report.call(s, (parent$ as __goscript_scope.scope).reporter))
					break
				}
				case (parent$ as __goscript_scope.scope).cachedReporter != null:
				{
					await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_scope.scope).cachedReport() : __goscript_scope.scope.prototype.cachedReport.call(s))
					break
				}
			}
		}

		tags = await (parent !== null && (parent as any).__isVarRef !== true && (parent as any).__goValue === undefined ? ((parent as any) as __goscript_scope.scope).copyAndSanitizeMap(tags) : __goscript_scope.scope.prototype.copyAndSanitizeMap.call(parent, tags))
		sanitizedKey = (__goscriptAwait = __goscript_get_scopeRegistryKey()!(prefix, $.arrayToSlice<globalThis.Map<string, string> | null>([(parent$ as __goscript_scope.scope).tags, tags])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		// If a scope was found above but we didn't return, we need to remove the
		// scope from both keys.
		if (ok) {
			await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as scopeRegistry).removeWithRLock(subscopeBucket, unsanitizedKey) : scopeRegistry.prototype.removeWithRLock.call(r, subscopeBucket, unsanitizedKey))
			await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as scopeRegistry).removeWithRLock(subscopeBucket, sanitizedKey) : scopeRegistry.prototype.removeWithRLock.call(r, subscopeBucket, sanitizedKey))
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_scope.scope).clearMetrics() : __goscript_scope.scope.prototype.clearMetrics.call(s))
		}

		void (subscopeBucket$ as scopeBucket).mu.RUnlock()

		// Force-allocate the unsafe string as a safe string. Note that neither
		// string(x) nor x+"" will have the desired effect (the former is a nop,
		// and the latter will likely be elided), so append a new character and
		// truncate instead.
		//
		// ref: https://go.dev/play/p/sxhExUKSxCw
		unsanitizedKey = $.sliceStringOrBytes(($.concatString(unsanitizedKey, ".")), undefined, $.stringLen(unsanitizedKey))

		await (subscopeBucket$ as scopeBucket).mu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((subscopeBucket$ as scopeBucket).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		{
			let __goscriptTuple1: any = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as scopeRegistry).lockedLookup(subscopeBucket, sanitizedKey) : scopeRegistry.prototype.lockedLookup.call(r, subscopeBucket, sanitizedKey))
			let __goscriptShadow0: __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null = __goscriptTuple1[0]
			let __goscriptShadow1 = __goscriptTuple1[1]
			if (__goscriptShadow1) {
				{
					let __goscriptTuple2: any = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as scopeRegistry).lockedLookup(subscopeBucket, unsanitizedKey) : scopeRegistry.prototype.lockedLookup.call(r, subscopeBucket, unsanitizedKey))
					__goscriptShadow1 = __goscriptTuple2[1]
					if (!__goscriptShadow1) {
						$.mapSet((subscopeBucket$ as scopeBucket).s, unsanitizedKey, __goscriptShadow0)
					}
				}
				return __goscriptShadow0
			}
		}

		let allTags: globalThis.Map<string, string> | null = __goscript_scope.mergeRightTags((parent$ as __goscript_scope.scope).tags, tags)
		let subscope: __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null = new __goscript_scope.scope({separator: (parent$ as __goscript_scope.scope).separator, prefix: prefix, tags: allTags, reporter: (parent$ as __goscript_scope.scope).reporter, cachedReporter: (parent$ as __goscript_scope.scope).cachedReporter, baseReporter: (parent$ as __goscript_scope.scope).baseReporter, defaultBuckets: (parent$ as __goscript_scope.scope).defaultBuckets, sanitizer: (parent$ as __goscript_scope.scope).sanitizer, registry: (parent$ as __goscript_scope.scope).registry, counters: $.makeMap<string, __goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null>(), countersSlice: $.makeSlice<__goscript_stats.counter | $.VarRef<__goscript_stats.counter> | null>(0, 16), gauges: $.makeMap<string, __goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null>(), gaugesSlice: $.makeSlice<__goscript_stats.gauge | $.VarRef<__goscript_stats.gauge> | null>(0, 16), histograms: $.makeMap<string, __goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null>(), histogramsSlice: $.makeSlice<__goscript_stats.histogram | $.VarRef<__goscript_stats.histogram> | null>(0, 16), timers: $.makeMap<string, __goscript_stats.timer | $.VarRef<__goscript_stats.timer> | null>(), bucketCache: (parent$ as __goscript_scope.scope).bucketCache, done: $.makeChannel<{}>(0, {}, "both"), testScope: (parent$ as __goscript_scope.scope).testScope})
		$.mapSet((subscopeBucket$ as scopeBucket).s, sanitizedKey, subscope)
		{
			let [, __goscriptShadow2] = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as scopeRegistry).lockedLookup(subscopeBucket, unsanitizedKey) : scopeRegistry.prototype.lockedLookup.call(r, subscopeBucket, unsanitizedKey))
			if (!__goscriptShadow2) {
				$.mapSet((subscopeBucket$ as scopeBucket).s, unsanitizedKey, subscope)
			}
		}
		return subscope
	}

	public lockedLookup(subscopeBucket: scopeBucket | $.VarRef<scopeBucket> | null, key: string): [__goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null, boolean] {
		const r: scopeRegistry | $.VarRef<scopeRegistry> | null = this;
		let __goscriptTuple3: any = $.mapGet<string, __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null, __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null>($.pointerValue<scopeBucket>(subscopeBucket).s, key, null)
		let ss: __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null = __goscriptTuple3[0]
		let ok = __goscriptTuple3[1]
		return [ss, ok]
	}

	public async purgeIfRootClosed(): globalThis.Promise<void> {
		const r: scopeRegistry | $.VarRef<scopeRegistry> | null = this;
		const r$: scopeRegistry = r == null ? $.pointerTarget<scopeRegistry>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<scopeRegistry>(r)
		if (!$.pointerValue<__goscript_scope.scope>((r$ as scopeRegistry).root).closed.Load()) {
			return
		}

		for (let __goscriptRangeTarget3 = (r$ as scopeRegistry).subscopes, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let subscopeBucket = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as scopeBucket | $.VarRef<scopeBucket> | null)
			await $.pointerValue<scopeBucket>(subscopeBucket).mu.Lock()
			for (const [k, __goscriptRangeShadow3] of $.pointerValue<scopeBucket>(subscopeBucket).s?.entries() ?? []) {
				await (__goscriptRangeShadow3 !== null && (__goscriptRangeShadow3 as any).__isVarRef !== true && (__goscriptRangeShadow3 as any).__goValue === undefined ? ((__goscriptRangeShadow3 as any) as __goscript_scope.scope).Close() : __goscript_scope.scope.prototype.Close.call(__goscriptRangeShadow3))
				await (__goscriptRangeShadow3 !== null && (__goscriptRangeShadow3 as any).__isVarRef !== true && (__goscriptRangeShadow3 as any).__goValue === undefined ? ((__goscriptRangeShadow3 as any) as __goscript_scope.scope).clearMetrics() : __goscript_scope.scope.prototype.clearMetrics.call(__goscriptRangeShadow3))
				$.deleteMapEntry($.pointerValue<scopeBucket>(subscopeBucket).s, k)
			}
			$.pointerValue<scopeBucket>(subscopeBucket).mu.Unlock()
		}
	}

	public async removeWithRLock(subscopeBucket: scopeBucket | $.VarRef<scopeBucket> | null, key: string): globalThis.Promise<void> {
		const r: scopeRegistry | $.VarRef<scopeRegistry> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const subscopeBucket$: scopeBucket = subscopeBucket == null ? $.pointerTarget<scopeBucket>(subscopeBucket) : (subscopeBucket as any).__isVarRef === true ? (subscopeBucket as any).value : (subscopeBucket as any).__goValue === undefined ? (subscopeBucket as any) : $.pointerTarget<scopeBucket>(subscopeBucket)
		// n.b. This function must lock the registry for writing and return it to an
		//      RLocked state prior to exiting. Defer order is important (LIFO).
		void (subscopeBucket$ as scopeBucket).mu.RUnlock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.RLock())((subscopeBucket$ as scopeBucket).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RLock-fm")
		__defer.defer(async () => { await __goscriptDeferCallee3() })
		await (subscopeBucket$ as scopeBucket).mu.Lock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())((subscopeBucket$ as scopeBucket).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })
		$.deleteMapEntry((subscopeBucket$ as scopeBucket).s, key)
	}

	public async reportInternalMetrics(): globalThis.Promise<void> {
		const r: scopeRegistry | $.VarRef<scopeRegistry> | null = this;
		const r$: scopeRegistry = r == null ? $.pointerTarget<scopeRegistry>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<scopeRegistry>(r)
		if ((r$ as scopeRegistry).internalMetricsOption != 1) {
			return
		}

		let counters = $.varRef(new atomic.Int64(undefined, true))
		let gauges = $.varRef(new atomic.Int64(undefined, true))
		let histograms = $.varRef(new atomic.Int64(undefined, true))
		let rootCounters = $.varRef(new atomic.Int64(undefined, true))
		let rootGauges = $.varRef(new atomic.Int64(undefined, true))
		let rootHistograms = $.varRef(new atomic.Int64(undefined, true))
		await scopeRegistry.prototype.ForEachScope.call(r, $.functionValue((ss: __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null): void => {
			let counterSliceLen = $.int64($.sliceLen($.pointerValue<__goscript_scope.scope>(ss).countersSlice))
			let gaugeSliceLen = $.int64($.sliceLen($.pointerValue<__goscript_scope.scope>(ss).gaugesSlice))
			let histogramSliceLen = $.int64($.sliceLen($.pointerValue<__goscript_scope.scope>(ss).histogramsSlice))
			if ($.pointerValue<__goscript_scope.scope>(ss).root) {
				rootCounters.value.Store(counterSliceLen)
				rootGauges.value.Store(gaugeSliceLen)
				rootHistograms.value.Store(histogramSliceLen)
				return
			}
			counters.value.Add(counterSliceLen)
			gauges.value.Add(gaugeSliceLen)
			histograms.value.Add(histogramSliceLen)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tally.scope")], results: [] } as $.FunctionTypeInfo)))

		counters.value.Add(rootCounters.value.Load())
		gauges.value.Add(rootGauges.value.Load())
		histograms.value.Add(rootHistograms.value.Load())

		if ($.pointerValue<__goscript_scope.scope>((r$ as scopeRegistry).root).reporter != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_reporter.StatsReporter, null>>($.pointerValue<__goscript_scope.scope>((r$ as scopeRegistry).root).reporter).ReportCounter((r$ as scopeRegistry).sanitizedCounterCardinalityName, __goscript_get_internalTags(), counters.value.Load()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_reporter.StatsReporter, null>>($.pointerValue<__goscript_scope.scope>((r$ as scopeRegistry).root).reporter).ReportCounter((r$ as scopeRegistry).sanitizedGaugeCardinalityName, __goscript_get_internalTags(), gauges.value.Load()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_reporter.StatsReporter, null>>($.pointerValue<__goscript_scope.scope>((r$ as scopeRegistry).root).reporter).ReportCounter((r$ as scopeRegistry).sanitizedHistogramCardinalityName, __goscript_get_internalTags(), histograms.value.Load()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		if ($.pointerValue<__goscript_scope.scope>((r$ as scopeRegistry).root).cachedReporter != null) {
			let numCounters = (__goscriptAwait = $.pointerValue<Exclude<__goscript_reporter.CachedStatsReporter, null>>($.pointerValue<__goscript_scope.scope>((r$ as scopeRegistry).root).cachedReporter).AllocateCounter((r$ as scopeRegistry).sanitizedCounterCardinalityName, __goscript_get_internalTags()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			let numGauges = (__goscriptAwait = $.pointerValue<Exclude<__goscript_reporter.CachedStatsReporter, null>>($.pointerValue<__goscript_scope.scope>((r$ as scopeRegistry).root).cachedReporter).AllocateCounter((r$ as scopeRegistry).sanitizedGaugeCardinalityName, __goscript_get_internalTags()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			let numHistograms = (__goscriptAwait = $.pointerValue<Exclude<__goscript_reporter.CachedStatsReporter, null>>($.pointerValue<__goscript_scope.scope>((r$ as scopeRegistry).root).cachedReporter).AllocateCounter((r$ as scopeRegistry).sanitizedHistogramCardinalityName, __goscript_get_internalTags()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = (numCounters !== null && (numCounters as any).__isVarRef !== true && (numCounters as any).__goValue === undefined ? (numCounters as Exclude<__goscript_reporter.CachedCount, null>) : $.pointerValue<Exclude<__goscript_reporter.CachedCount, null>>(numCounters)).ReportCount(counters.value.Load()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = (numGauges !== null && (numGauges as any).__isVarRef !== true && (numGauges as any).__goValue === undefined ? (numGauges as Exclude<__goscript_reporter.CachedCount, null>) : $.pointerValue<Exclude<__goscript_reporter.CachedCount, null>>(numGauges)).ReportCount(gauges.value.Load()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = (numHistograms !== null && (numHistograms as any).__isVarRef !== true && (numHistograms as any).__goValue === undefined ? (numHistograms as Exclude<__goscript_reporter.CachedCount, null>) : $.pointerValue<Exclude<__goscript_reporter.CachedCount, null>>(numHistograms)).ReportCount(histograms.value.Load()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	static __typeInfo = $.registerStructType(
		"tally.scopeRegistry",
		() => new scopeRegistry(),
		() => [$.methodSignature("CachedReport", [], [], true), $.methodSignature("ForEachScope", [["f", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tally.scope")], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("Report", [["reporter", "tally.StatsReporter"]], [], true), $.methodSignature("Subscope", [["parent", /* @__PURE__ */ $.pointerType("tally.scope")], ["prefix", /* @__PURE__ */ $.basicType("string")], ["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.pointerType("tally.scope")], true), $.methodSignature("lockedLookup", [["subscopeBucket", /* @__PURE__ */ $.pointerType("tally.scopeBucket")], ["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("tally.scope"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("purgeIfRootClosed", [], [], true), $.methodSignature("removeWithRLock", [["subscopeBucket", /* @__PURE__ */ $.pointerType("tally.scopeBucket")], ["key", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("reportInternalMetrics", [], [], true)],
		scopeRegistry,
		() => [/* @__PURE__ */ $.structField("seed", "maphash.Seed", [0], 0, false, { pkgPath: "github.com/uber-go/tally" }), /* @__PURE__ */ $.structField("root", /* @__PURE__ */ $.pointerType("tally.scope"), [1], 8, false, { pkgPath: "github.com/uber-go/tally" }), /* @__PURE__ */ $.structField("subscopes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("tally.scopeBucket")), [2], 16, false, { pkgPath: "github.com/uber-go/tally" }), /* @__PURE__ */ $.structField("internalMetricsOption", /* @__PURE__ */ $.basicType("int", "tally.InternalMetricOption"), [3], 40, false, { pkgPath: "github.com/uber-go/tally" }), /* @__PURE__ */ $.structField("sanitizedCounterCardinalityName", /* @__PURE__ */ $.basicType("string"), [4], 48, false, { pkgPath: "github.com/uber-go/tally" }), /* @__PURE__ */ $.structField("sanitizedGaugeCardinalityName", /* @__PURE__ */ $.basicType("string"), [5], 64, false, { pkgPath: "github.com/uber-go/tally" }), /* @__PURE__ */ $.structField("sanitizedHistogramCardinalityName", /* @__PURE__ */ $.basicType("string"), [6], 80, false, { pkgPath: "github.com/uber-go/tally" })]
	)
}

export class scopeBucket {
	public get mu(): sync.RWMutex {
		return this._fields.mu
	}

	public set mu(value: sync.RWMutex) {
		this._fields.mu = value
	}

	public get s(): globalThis.Map<string, __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null> | null {
		return this._fields.s
	}

	public set s(value: globalThis.Map<string, __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null> | null) {
		this._fields.s = value
	}

	public _fields: {
		mu: sync.RWMutex
		s: globalThis.Map<string, __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null> | null
	}

	constructor(init?: Partial<{mu?: sync.RWMutex, s?: globalThis.Map<string, __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.RWMutex()),
			s: init?.s ?? (null! as globalThis.Map<string, __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): scopeBucket {
		return new scopeBucket(this, true)
	}

	public __goscriptAssign(source: scopeBucket): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.s = values.s
	}

	static __typeInfo = $.registerStructType(
		"tally.scopeBucket",
		() => new scopeBucket(),
		() => [],
		scopeBucket,
		() => [/* @__PURE__ */ $.structField("mu", "sync.RWMutex", [0], 0, false, { pkgPath: "github.com/uber-go/tally" }), /* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("tally.scope")), [1], 24, false, { pkgPath: "github.com/uber-go/tally" })]
	)
}

export var scopeRegistryKey: ((prefix: string, maps: $.Slice<globalThis.Map<string, string> | null>) => string | globalThis.Promise<string>) | null

export function __goscript_init_scopeRegistryKey(): void {
	if (((scopeRegistryKey) as any) === undefined) {
		scopeRegistryKey = __goscript_key_gen.keyForPrefixedStringMaps
	}
}

export function __goscript_get_scopeRegistryKey(): ((prefix: string, maps: $.Slice<globalThis.Map<string, string> | null>) => string | globalThis.Promise<string>) | null {
	if (((scopeRegistryKey) as any) === undefined) {
		__goscript_init_scopeRegistryKey()
	}
	return scopeRegistryKey
}

export function __goscript_set_scopeRegistryKey(__goscriptValue: ((prefix: string, maps: $.Slice<globalThis.Map<string, string> | null>) => string | globalThis.Promise<string>) | null): void {
	scopeRegistryKey = __goscriptValue
}

export var internalTags: globalThis.Map<string, string> | null

export function __goscript_init_internalTags(): void {
	if (((internalTags) as any) === undefined) {
		internalTags = $.makeMap<string, string>([["version", "3.5.8"]])
	}
}

export function __goscript_get_internalTags(): globalThis.Map<string, string> | null {
	if (((internalTags) as any) === undefined) {
		__goscript_init_internalTags()
	}
	return internalTags
}

export function __goscript_set_internalTags(__goscriptValue: globalThis.Map<string, string> | null): void {
	internalTags = __goscriptValue
}

export var counterCardinalityName: string

export function __goscript_init_counterCardinalityName(): void {
	if (((counterCardinalityName) as any) === undefined) {
		counterCardinalityName = "tally_internal_counter_cardinality"
	}
}

export function __goscript_get_counterCardinalityName(): string {
	if (((counterCardinalityName) as any) === undefined) {
		__goscript_init_counterCardinalityName()
	}
	return counterCardinalityName
}

export function __goscript_set_counterCardinalityName(__goscriptValue: string): void {
	counterCardinalityName = __goscriptValue
}

export var gaugeCardinalityName: string

export function __goscript_init_gaugeCardinalityName(): void {
	if (((gaugeCardinalityName) as any) === undefined) {
		gaugeCardinalityName = "tally_internal_gauge_cardinality"
	}
}

export function __goscript_get_gaugeCardinalityName(): string {
	if (((gaugeCardinalityName) as any) === undefined) {
		__goscript_init_gaugeCardinalityName()
	}
	return gaugeCardinalityName
}

export function __goscript_set_gaugeCardinalityName(__goscriptValue: string): void {
	gaugeCardinalityName = __goscriptValue
}

export var histogramCardinalityName: string

export function __goscript_init_histogramCardinalityName(): void {
	if (((histogramCardinalityName) as any) === undefined) {
		histogramCardinalityName = "tally_internal_histogram_cardinality"
	}
}

export function __goscript_get_histogramCardinalityName(): string {
	if (((histogramCardinalityName) as any) === undefined) {
		__goscript_init_histogramCardinalityName()
	}
	return histogramCardinalityName
}

export function __goscript_set_histogramCardinalityName(__goscriptValue: string): void {
	histogramCardinalityName = __goscriptValue
}

export async function newScopeRegistryWithShardCount(root: __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null, shardCount: number, internalMetricsOption: __goscript_scope.InternalMetricOption): globalThis.Promise<scopeRegistry | $.VarRef<scopeRegistry> | null> {
	const root$: __goscript_scope.scope = root == null ? $.pointerTarget<__goscript_scope.scope>(root) : (root as any).__isVarRef === true ? (root as any).value : (root as any).__goValue === undefined ? (root as any) : $.pointerTarget<__goscript_scope.scope>(root)
	if (shardCount == 0) {
		shardCount = $.uint(runtime.GOMAXPROCS(-1), 64)
	}

	let r: scopeRegistry | $.VarRef<scopeRegistry> | null = (await (async () => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue(maphash.MakeSeed())); const __goscriptLiteralField1 = (__goscriptAwait = $.pointerValue<Exclude<__goscript_sanitize.Sanitizer, null>>((root$ as __goscript_scope.scope).sanitizer).Name(__goscript_get_counterCardinalityName()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField2 = (__goscriptAwait = $.pointerValue<Exclude<__goscript_sanitize.Sanitizer, null>>((root$ as __goscript_scope.scope).sanitizer).Name(__goscript_get_gaugeCardinalityName()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField3 = (__goscriptAwait = $.pointerValue<Exclude<__goscript_sanitize.Sanitizer, null>>((root$ as __goscript_scope.scope).sanitizer).Name(__goscript_get_histogramCardinalityName()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new scopeRegistry({root: root, subscopes: $.makeSlice<scopeBucket | $.VarRef<scopeBucket> | null>(shardCount), seed: __goscriptLiteralField0, internalMetricsOption: internalMetricsOption, sanitizedCounterCardinalityName: __goscriptLiteralField1, sanitizedGaugeCardinalityName: __goscriptLiteralField2, sanitizedHistogramCardinalityName: __goscriptLiteralField3}) })())
	let r$: scopeRegistry = r == null ? $.pointerTarget<scopeRegistry>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<scopeRegistry>(r)
	for (let i = 0; i < shardCount; i++) {
		$.sliceElems((r$ as scopeRegistry).subscopes!)[$.sliceSlot((r$ as scopeRegistry).subscopes!, i)] = new scopeBucket({s: $.makeMap<string, __goscript_scope.scope | $.VarRef<__goscript_scope.scope> | null>()})
		$.mapSet($.pointerValue<scopeBucket>($.arrayIndex((r$ as scopeRegistry).subscopes!, i)).s, (__goscriptAwait = __goscript_get_scopeRegistryKey()!((root$ as __goscript_scope.scope).prefix, $.arrayToSlice<globalThis.Map<string, string> | null>([(root$ as __goscript_scope.scope).tags])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), root)
	}
	return r
}

var __goscriptAwait: any
