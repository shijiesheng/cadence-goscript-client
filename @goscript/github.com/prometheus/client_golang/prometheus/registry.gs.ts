// Generated file based on registry.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as ioutil from "@goscript/io/ioutil/index.js"

import * as os from "@goscript/os/index.js"

import * as filepath from "@goscript/path/filepath/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as xxhash from "@goscript/github.com/cespare/xxhash/v2/index.js"

import * as proto from "@goscript/github.com/golang/protobuf/proto/index.js"

import * as expfmt from "@goscript/github.com/prometheus/common/expfmt/index.js"

import * as dto from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as internal from "@goscript/github.com/prometheus/client_golang/prometheus/internal/index.js"

import type * as io from "@goscript/io/index.js"

import type * as fs from "@goscript/io/fs/index.js"

import * as __goscript_collector from "./collector.gs.ts"

import * as __goscript_desc from "./desc.gs.ts"

import * as __goscript_go_collector from "./go_collector.gs.ts"

import * as __goscript_labels from "./labels.gs.ts"

import * as __goscript_metric from "./metric.gs.ts"

import * as __goscript_process_collector from "./process_collector.gs.ts"

import * as __goscript_summary from "./summary.gs.ts"

import * as __goscript_wrap from "./wrap.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/ioutil/index.js"
import "@goscript/os/index.js"
import "@goscript/path/filepath/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sort/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/github.com/cespare/xxhash/v2/index.js"
import "@goscript/github.com/golang/protobuf/proto/index.js"
import "@goscript/github.com/prometheus/common/expfmt/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "@goscript/github.com/prometheus/client_golang/prometheus/internal/index.js"
import "./collector.gs.ts"
import "./desc.gs.ts"
import "./go_collector.gs.ts"
import "./labels.gs.ts"
import "./metric.gs.ts"
import "./process_collector.gs.ts"
import "./summary.gs.ts"
import "./wrap.gs.ts"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus", ["prometheus.Registerer", "prometheus.Gatherer", "prometheus.GathererFunc", "prometheus.AlreadyRegisteredError", "prometheus.MultiError", "prometheus.Registry", "prometheus.Gatherers"])

export type Registerer = {
	MustRegister(_p0: $.Slice<__goscript_collector.Collector | null>): void
	Register(_p0: __goscript_collector.Collector | null): $.GoError | globalThis.Promise<$.GoError>
	Unregister(_p0: __goscript_collector.Collector | null): boolean | globalThis.Promise<boolean>
}

$.registerInterfaceType(
	"prometheus.Registerer",
	null,
	[$.methodSignature("MustRegister", [/* @__PURE__ */ $.sliceType("prometheus.Collector")]), $.methodSignature("Register", ["prometheus.Collector"], ["error"]), $.methodSignature("Unregister", ["prometheus.Collector"], [/* @__PURE__ */ $.basicType("bool")])]
);

export type Gatherer = {
	Gather(): [$.Slice<dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>, $.GoError] | globalThis.Promise<[$.Slice<dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>, $.GoError]>
}

$.registerInterfaceType(
	"prometheus.Gatherer",
	null,
	[$.methodSignature("Gather", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")), "error"])]
);

export type GathererFunc = (() => [$.Slice<dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>, $.GoError] | globalThis.Promise<[$.Slice<dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>, $.GoError]>) | null

$.registerNamedValueType(
	"prometheus.GathererFunc",
	{Gather: (receiver: any, ...args: any[]) => (GathererFunc_Gather as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Gather", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")), "error"])]
);

$.registerNamedValueType(
	"*prometheus.GathererFunc",
	{Gather: (receiver: any, ...args: any[]) => (GathererFunc_Gather as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Gather", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")), "error"])]
);

export type MultiError = $.Slice<$.GoError>

$.registerNamedType("prometheus.MultiError", /* @__PURE__ */ $.sliceType("error"));

$.registerNamedValueType(
	"prometheus.MultiError",
	{Error: (receiver: any, ...args: any[]) => (MultiError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MaybeUnwrap: (receiver: any, ...args: any[]) => (MultiError_MaybeUnwrap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("MaybeUnwrap", [], ["error"])]
);

$.registerNamedValueType(
	"*prometheus.MultiError",
	{Append: (receiver: any, ...args: any[]) => (MultiError_Append as any)(receiver, ...$.stripGenericTypeArgs(args)), Error: (receiver: any, ...args: any[]) => (MultiError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MaybeUnwrap: (receiver: any, ...args: any[]) => (MultiError_MaybeUnwrap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Append", [["err", "error"]]), $.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("MaybeUnwrap", [], ["error"])]
);

export type Gatherers = $.Slice<Gatherer | null>

$.registerNamedType("prometheus.Gatherers", /* @__PURE__ */ $.sliceType("prometheus.Gatherer"));

$.registerNamedValueType(
	"prometheus.Gatherers",
	{Gather: (receiver: any, ...args: any[]) => (Gatherers_Gather as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Gather", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")), "error"])]
);

$.registerNamedValueType(
	"*prometheus.Gatherers",
	{Gather: (receiver: any, ...args: any[]) => (Gatherers_Gather as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Gather", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")), "error"])]
);

export class AlreadyRegisteredError {
	public get ExistingCollector(): __goscript_collector.Collector | null {
		return this._fields.ExistingCollector
	}

	public set ExistingCollector(value: __goscript_collector.Collector | null) {
		this._fields.ExistingCollector = value
	}

	public get NewCollector(): __goscript_collector.Collector | null {
		return this._fields.NewCollector
	}

	public set NewCollector(value: __goscript_collector.Collector | null) {
		this._fields.NewCollector = value
	}

	public _fields: {
		ExistingCollector: __goscript_collector.Collector | null
		NewCollector: __goscript_collector.Collector | null
	}

	constructor(init?: Partial<{ExistingCollector?: __goscript_collector.Collector | null, NewCollector?: __goscript_collector.Collector | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ExistingCollector: init?.ExistingCollector ?? (null! as __goscript_collector.Collector | null),
			NewCollector: init?.NewCollector ?? (null! as __goscript_collector.Collector | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): AlreadyRegisteredError {
		return new AlreadyRegisteredError(this, true)
	}

	public __goscriptAssign(source: AlreadyRegisteredError): void {
		const target = this._fields
		const values = source._fields
		target.ExistingCollector = $.assignFieldValue(target.ExistingCollector, values.ExistingCollector, "prometheus.Collector")
		target.NewCollector = $.assignFieldValue(target.NewCollector, values.NewCollector, "prometheus.Collector")
	}

	public Error(): string {
		const err = this;
		return "duplicate metrics collector registration attempted"
	}

	static __typeInfo = $.registerStructType(
		"prometheus.AlreadyRegisteredError",
		() => new AlreadyRegisteredError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		AlreadyRegisteredError,
		() => [/* @__PURE__ */ $.structField("ExistingCollector", "prometheus.Collector", [0], 0, true), /* @__PURE__ */ $.structField("NewCollector", "prometheus.Collector", [1], 16, true)]
	)
}

export class Registry {
	public get mtx(): sync.RWMutex {
		return this._fields.mtx
	}

	public set mtx(value: sync.RWMutex) {
		this._fields.mtx = value
	}

	public get collectorsByID(): globalThis.Map<bigint, __goscript_collector.Collector | null> | null {
		return this._fields.collectorsByID
	}

	public set collectorsByID(value: globalThis.Map<bigint, __goscript_collector.Collector | null> | null) {
		this._fields.collectorsByID = value
	}

	public get descIDs(): globalThis.Map<bigint, {}> | null {
		return this._fields.descIDs
	}

	public set descIDs(value: globalThis.Map<bigint, {}> | null) {
		this._fields.descIDs = value
	}

	public get dimHashesByName(): globalThis.Map<string, bigint> | null {
		return this._fields.dimHashesByName
	}

	public set dimHashesByName(value: globalThis.Map<string, bigint> | null) {
		this._fields.dimHashesByName = value
	}

	public get uncheckedCollectors(): $.Slice<__goscript_collector.Collector | null> {
		return this._fields.uncheckedCollectors
	}

	public set uncheckedCollectors(value: $.Slice<__goscript_collector.Collector | null>) {
		this._fields.uncheckedCollectors = value
	}

	public get pedanticChecksEnabled(): boolean {
		return this._fields.pedanticChecksEnabled
	}

	public set pedanticChecksEnabled(value: boolean) {
		this._fields.pedanticChecksEnabled = value
	}

	public _fields: {
		mtx: sync.RWMutex
		collectorsByID: globalThis.Map<bigint, __goscript_collector.Collector | null> | null
		descIDs: globalThis.Map<bigint, {}> | null
		dimHashesByName: globalThis.Map<string, bigint> | null
		uncheckedCollectors: $.Slice<__goscript_collector.Collector | null>
		pedanticChecksEnabled: boolean
	}

	constructor(init?: Partial<{mtx?: sync.RWMutex, collectorsByID?: globalThis.Map<bigint, __goscript_collector.Collector | null> | null, descIDs?: globalThis.Map<bigint, {}> | null, dimHashesByName?: globalThis.Map<string, bigint> | null, uncheckedCollectors?: $.Slice<__goscript_collector.Collector | null>, pedanticChecksEnabled?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			mtx: init?.mtx ? $.markAsStructValue($.cloneStructValue(init.mtx)) : $.markAsStructValue(new sync.RWMutex()),
			collectorsByID: init?.collectorsByID ?? (null! as globalThis.Map<bigint, __goscript_collector.Collector | null> | null),
			descIDs: init?.descIDs ?? (null! as globalThis.Map<bigint, {}> | null),
			dimHashesByName: init?.dimHashesByName ?? (null! as globalThis.Map<string, bigint> | null),
			uncheckedCollectors: init?.uncheckedCollectors ?? (null! as $.Slice<__goscript_collector.Collector | null>),
			pedanticChecksEnabled: init?.pedanticChecksEnabled ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Registry {
		return new Registry(this, true)
	}

	public __goscriptAssign(source: Registry): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mtx, values.mtx)
		target.collectorsByID = values.collectorsByID
		target.descIDs = values.descIDs
		target.dimHashesByName = values.dimHashesByName
		target.uncheckedCollectors = values.uncheckedCollectors
		target.pedanticChecksEnabled = values.pedanticChecksEnabled
	}

	public async Gather(): globalThis.Promise<[$.Slice<dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>, $.GoError]> {
		const r: Registry | $.VarRef<Registry> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const r$: Registry = r == null ? $.pointerTarget<Registry>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Registry>(r)
		let checkedMetricChan: $.Channel<__goscript_metric.Metric | null> | null = $.makeChannel<__goscript_metric.Metric | null>(1000, null! as __goscript_metric.Metric | null, "both")
		let uncheckedMetricChan: $.Channel<__goscript_metric.Metric | null> | null = $.makeChannel<__goscript_metric.Metric | null>(1000, null! as __goscript_metric.Metric | null, "both")
		let metricHashes: globalThis.Map<bigint, {}> | null = $.makeMap<bigint, {}>([])
		let wg: $.VarRef<sync.WaitGroup> = $.varRef($.markAsStructValue(new sync.WaitGroup()))
		let errs: $.VarRef<MultiError> = $.varRef(null! as MultiError)
		let registeredDescIDs: globalThis.Map<bigint, {}> | null = null! as globalThis.Map<bigint, {}> | null

		await (r$ as Registry).mtx.RLock()
		let goroutineBudget = $.len((r$ as Registry).collectorsByID) + $.sliceLen((r$ as Registry).uncheckedCollectors)
		let metricFamiliesByName: globalThis.Map<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null> | null = $.makeMap<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>()
		let checkedCollectors: $.Channel<__goscript_collector.Collector | null> | null = $.makeChannel<__goscript_collector.Collector | null>($.len((r$ as Registry).collectorsByID), null! as __goscript_collector.Collector | null, "both")
		let uncheckedCollectors: $.Channel<__goscript_collector.Collector | null> | null = $.makeChannel<__goscript_collector.Collector | null>($.sliceLen((r$ as Registry).uncheckedCollectors), null! as __goscript_collector.Collector | null, "both")
		for (const [__rangeKey, collector] of (r$ as Registry).collectorsByID?.entries() ?? []) {
			await $.chanSend(checkedCollectors, collector)
		}
		for (let __goscriptRangeTarget1 = (r$ as Registry).uncheckedCollectors, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let collector = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_collector.Collector | null)
			await $.chanSend(uncheckedCollectors, collector)
		}
		// In case pedantic checks are enabled, we have to copy the map before
		// giving up the RLock.
		if ((r$ as Registry).pedanticChecksEnabled) {
			registeredDescIDs = $.makeMap<bigint, {}>()
			for (let [id, __rangeValue] of (r$ as Registry).descIDs?.entries() ?? []) {
				$.mapSet(registeredDescIDs, id, {})
			}
		}
		void (r$ as Registry).mtx.RUnlock()

		wg.value.Add(goroutineBudget)

		let collectWorker: (() => void) | null = $.functionValue(async (): globalThis.Promise<void> => {
			while (true) {
				const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
					{
						id: 0,
						isSend: false,
						channel: checkedCollectors,
						onSelected: async (__goscriptSelect0Result) => {
							let collector = __goscriptSelect0Result.value
							void (__goscriptAwait = (collector !== null && (collector as any).__isVarRef !== true && (collector as any).__goValue === undefined ? (collector as Exclude<__goscript_collector.Collector, null>) : $.pointerValue<Exclude<__goscript_collector.Collector, null>>(collector)).Collect(checkedMetricChan), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
					},
					{
						id: 1,
						isSend: false,
						channel: uncheckedCollectors,
						onSelected: async (__goscriptSelect0Result) => {
							let collector = __goscriptSelect0Result.value
							void (__goscriptAwait = (collector !== null && (collector as any).__isVarRef !== true && (collector as any).__goValue === undefined ? (collector as Exclude<__goscript_collector.Collector, null>) : $.pointerValue<Exclude<__goscript_collector.Collector, null>>(collector)).Collect(uncheckedMetricChan), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
					},
					{
						id: -1,
						isSend: false,
						channel: null,
						onSelected: async (__goscriptSelect0Result) => {
							return $.selectVoidReturn()
						}
					}
				], true)
				if (__goscriptSelect0HasReturn) {
					return __goscriptSelect0Value
				}
				wg.value.Done()
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))

		// Start the first worker now to make sure at least one is running.
		const __goscriptDeferCallee0 = collectWorker
		queueMicrotask(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		goroutineBudget--

		// Close checkedMetricChan and uncheckedMetricChan once all collectors
		// are collected.
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			await wg.value.Wait()
			checkedMetricChan!.close()
			uncheckedMetricChan!.close()
		})() })

		// Drain checkedMetricChan and uncheckedMetricChan in case of premature return.
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			if (checkedMetricChan != null) {
				while (true) {
					let __goscriptRange0 = await $.chanRecvWithOk(checkedMetricChan)
					if (!__goscriptRange0.ok) {
						break
					}
				}
			}
			if (uncheckedMetricChan != null) {
				while (true) {
					let __goscriptRange1 = await $.chanRecvWithOk(uncheckedMetricChan)
					if (!__goscriptRange1.ok) {
						break
					}
				}
			}
		})() })

		// Copy the channel references so we can nil them out later to remove
		// them from the select statements below.
		let cmc: $.Channel<__goscript_metric.Metric | null> | null = checkedMetricChan
		let umc: $.Channel<__goscript_metric.Metric | null> | null = uncheckedMetricChan

		while (true) {
			const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, any>([
				{
					id: 0,
					isSend: false,
					channel: cmc,
					onSelected: async (__goscriptSelect1Result) => {
						return __goscriptSelect1Result
					}
				},
				{
					id: 1,
					isSend: false,
					channel: umc,
					onSelected: async (__goscriptSelect1Result) => {
						return __goscriptSelect1Result
					}
				},
				{
					id: -1,
					isSend: false,
					channel: null,
					onSelected: async (__goscriptSelect1Result) => {
						return __goscriptSelect1Result
					}
				}
			], true)
			switch (__goscriptSelect1Value?.id) {
				case 0:
					{
						const __goscriptSelect1Result = __goscriptSelect1Value
						let metric = __goscriptSelect1Result.value
						let ok = __goscriptSelect1Result.ok
						if (!ok) {
							cmc = null
							break
						}
						MultiError_Append(errs, await processMetric(metric, metricFamiliesByName, metricHashes, registeredDescIDs))
						break
					}
				case 1:
					{
						const __goscriptSelect1Result = __goscriptSelect1Value
						let metric = __goscriptSelect1Result.value
						let ok = __goscriptSelect1Result.ok
						if (!ok) {
							umc = null
							break
						}
						MultiError_Append(errs, await processMetric(metric, metricFamiliesByName, metricHashes, null))
						break
					}
				case -1:
					{
						const __goscriptSelect1Result = __goscriptSelect1Value
						if ((goroutineBudget <= 0) || (($.len(checkedCollectors) + $.len(uncheckedCollectors)) == 0)) {
							// All collectors are already being worked on or
							// we have already as many goroutines started as
							// there are collectors. Do the same as above,
							// just without the default.
							const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, any>([
								{
									id: 0,
									isSend: false,
									channel: cmc,
									onSelected: async (__goscriptSelect2Result) => {
										return __goscriptSelect2Result
									}
								},
								{
									id: 1,
									isSend: false,
									channel: umc,
									onSelected: async (__goscriptSelect2Result) => {
										return __goscriptSelect2Result
									}
								}
							], false)
							switch (__goscriptSelect2Value?.id) {
								case 0:
									{
										const __goscriptSelect2Result = __goscriptSelect2Value
										let metric = __goscriptSelect2Result.value
										let ok = __goscriptSelect2Result.ok
										if (!ok) {
											cmc = null
											break
										}
										MultiError_Append(errs, await processMetric(metric, metricFamiliesByName, metricHashes, registeredDescIDs))
										break
									}
								case 1:
									{
										const __goscriptSelect2Result = __goscriptSelect2Value
										let metric = __goscriptSelect2Result.value
										let ok = __goscriptSelect2Result.ok
										if (!ok) {
											umc = null
											break
										}
										MultiError_Append(errs, await processMetric(metric, metricFamiliesByName, metricHashes, null))
										break
									}
							}
							break
						}
						// Start more workers.
						const __goscriptDeferCallee1 = collectWorker
						queueMicrotask(async () => { (__goscriptAwait = __goscriptDeferCallee1!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
						goroutineBudget--
						runtime.Gosched()
						break
					}
			}
			// Once both checkedMetricChan and uncheckdMetricChan are closed
			// and drained, the contraption above will nil out cmc and umc,
			// and then we can leave the collect loop here.
			if ((cmc == null) && (umc == null)) {
				break
			}
		}
		return [await internal.NormalizeMetricFamilies(metricFamiliesByName), MultiError_MaybeUnwrap(errs.value)]
	}

	public async MustRegister(cs: $.Slice<__goscript_collector.Collector | null>): globalThis.Promise<void> {
		const r: Registry | $.VarRef<Registry> | null = this;
		for (let __goscriptRangeTarget2 = cs, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let c = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_collector.Collector | null)
			{
				let err = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Registry).Register(c) : Registry.prototype.Register.call(r, c))
				if (err != null) {
					$.panic((err as any))
				}
			}
		}
	}

	public async Register(c: __goscript_collector.Collector | null): globalThis.Promise<$.GoError> {
		let r: Registry | $.VarRef<Registry> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const r$: Registry = r == null ? $.pointerTarget<Registry>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Registry>(r)
		let descChan: $.Channel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null = $.makeChannel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null>(10, null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, "both")
		let newDescIDs: globalThis.Map<bigint, {}> | null = $.makeMap<bigint, {}>([])
		let newDimHashesByName: globalThis.Map<string, bigint> | null = $.makeMap<string, bigint>([])
		let collectorID: bigint = 0n
		let duplicateDescErr: $.GoError = null! as $.GoError
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_collector.Collector, null>) : $.pointerValue<Exclude<__goscript_collector.Collector, null>>(c)).Describe(descChan), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			descChan!.close()
		})() })
		await (r$ as Registry).mtx.Lock()
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			// Drain channel in case of premature return to not leak a goroutine.
			while (true) {
				let __goscriptRange2 = await $.chanRecvWithOk(descChan)
				if (!__goscriptRange2.ok) {
					break
				}
			}
			void (r$ as Registry).mtx.Unlock()
		})() })
		// Conduct various tests...
		while (true) {
			let __goscriptRange3 = await $.chanRecvWithOk(descChan)
			if (!__goscriptRange3.ok) {
				break
			}
			let desc = __goscriptRange3.value

			// Is the descriptor valid at all?
			if ($.pointerValue<__goscript_desc.Desc>(desc).err != null) {
				return fmt.Errorf("descriptor %s is invalid: %s", $.interfaceValue(desc, "*prometheus.Desc", /* @__PURE__ */ $.pointerType("prometheus.Desc")), ($.pointerValue<__goscript_desc.Desc>(desc).err as any))
			}

			// Is the descID unique?
			// (In other words: Is the fqName + constLabel combination unique?)
			{
				let [, exists] = $.mapGet<bigint, {}, {}>((r$ as Registry).descIDs, $.pointerValue<__goscript_desc.Desc>(desc).id, {})
				if (exists) {
					duplicateDescErr = fmt.Errorf("descriptor %s already exists with the same fully-qualified name and const label values", $.interfaceValue(desc, "*prometheus.Desc", /* @__PURE__ */ $.pointerType("prometheus.Desc")))
				}
			}
			// If it is not a duplicate desc in this collector, XOR it to
			// the collectorID.  (We allow duplicate descs within the same
			// collector, but their existence must be a no-op.)
			{
				let [, exists] = $.mapGet<bigint, {}, {}>(newDescIDs, $.pointerValue<__goscript_desc.Desc>(desc).id, {})
				if (!exists) {
					$.mapSet(newDescIDs, $.pointerValue<__goscript_desc.Desc>(desc).id, {})
					collectorID = $.uint64Xor(collectorID, $.pointerValue<__goscript_desc.Desc>(desc).id)
				}
			}

			// Are all the label names and the help string consistent with
			// previous descriptors of the same name?
			// First check existing descriptors...
			{
				let [dimHash, exists] = $.mapGet<string, bigint, bigint>((r$ as Registry).dimHashesByName, $.pointerValue<__goscript_desc.Desc>(desc).fqName, 0n)
				if (exists) {
					if (dimHash != $.pointerValue<__goscript_desc.Desc>(desc).dimHash) {
						return fmt.Errorf("a previously registered descriptor with the same fully-qualified name as %s has different label names or a different help string", $.interfaceValue(desc, "*prometheus.Desc", /* @__PURE__ */ $.pointerType("prometheus.Desc")))
					}
				} else {
					// ...then check the new descriptors already seen.
					{
						let [__goscriptShadow0, __goscriptShadow1] = $.mapGet<string, bigint, bigint>(newDimHashesByName, $.pointerValue<__goscript_desc.Desc>(desc).fqName, 0n)
						if (__goscriptShadow1) {
							if (__goscriptShadow0 != $.pointerValue<__goscript_desc.Desc>(desc).dimHash) {
								return fmt.Errorf("descriptors reported by collector have inconsistent label names or help strings for the same fully-qualified name, offender is %s", $.interfaceValue(desc, "*prometheus.Desc", /* @__PURE__ */ $.pointerType("prometheus.Desc")))
							}
						} else {
							$.mapSet(newDimHashesByName, $.pointerValue<__goscript_desc.Desc>(desc).fqName, $.pointerValue<__goscript_desc.Desc>(desc).dimHash)
						}
					}
				}
			}
		}
		// A Collector yielding no Desc at all is considered unchecked.
		if ($.len(newDescIDs) == 0) {
			;(r$ as Registry).uncheckedCollectors = $.appendOne((r$ as Registry).uncheckedCollectors, c, $.appendZeros.nil)
			return null
		}
		{
			let [existing, exists] = $.mapGet<bigint, __goscript_collector.Collector | null, __goscript_collector.Collector | null>((r$ as Registry).collectorsByID, collectorID, null)
			if (exists) {
				{
					const __goscriptTypeSwitchValue = existing
					switch (true) {
						case $.typeAssert<__goscript_wrap.wrappingCollector | $.VarRef<__goscript_wrap.wrappingCollector> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("prometheus.wrappingCollector")).ok:
							{
								let e: __goscript_wrap.wrappingCollector | $.VarRef<__goscript_wrap.wrappingCollector> | null = $.typeAssert<__goscript_wrap.wrappingCollector | $.VarRef<__goscript_wrap.wrappingCollector> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("prometheus.wrappingCollector")).value
								return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField0 = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_wrap.wrappingCollector).unwrapRecursively() : __goscript_wrap.wrappingCollector.prototype.unwrapRecursively.call(e)); return new AlreadyRegisteredError({ExistingCollector: __goscriptLiteralField0, NewCollector: c}, true) })(), "prometheus.AlreadyRegisteredError", "prometheus.AlreadyRegisteredError")
							}
							break
						default:
							{
								let e: any = __goscriptTypeSwitchValue
								return $.interfaceValue<$.GoError>(new AlreadyRegisteredError({ExistingCollector: e, NewCollector: c}, true), "prometheus.AlreadyRegisteredError", "prometheus.AlreadyRegisteredError")
							}
							break
					}
				}
			}
		}
		// If the collectorID is new, but at least one of the descs existed
		// before, we are in trouble.
		if (duplicateDescErr != null) {
			return duplicateDescErr
		}

		// Only after all tests have passed, actually register.
		$.mapSet((r$ as Registry).collectorsByID, collectorID, c)
		for (let [hash, __rangeValue] of newDescIDs?.entries() ?? []) {
			$.mapSet((r$ as Registry).descIDs, hash, {})
		}
		for (let [name, dimHash] of newDimHashesByName?.entries() ?? []) {
			$.mapSet((r$ as Registry).dimHashesByName, name, dimHash)
		}
		return null
	}

	public async Unregister(c: __goscript_collector.Collector | null): globalThis.Promise<boolean> {
		const r: Registry | $.VarRef<Registry> | null = this;
		using __defer = new $.DisposableStack()
		const r$: Registry = r == null ? $.pointerTarget<Registry>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Registry>(r)
		let descChan: $.Channel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null = $.makeChannel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null>(10, null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, "both")
		let descIDs: globalThis.Map<bigint, {}> | null = $.makeMap<bigint, {}>([])
		let collectorID: bigint = 0n
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_collector.Collector, null>) : $.pointerValue<Exclude<__goscript_collector.Collector, null>>(c)).Describe(descChan), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			descChan!.close()
		})() })
		while (true) {
			let __goscriptRange4 = await $.chanRecvWithOk(descChan)
			if (!__goscriptRange4.ok) {
				break
			}
			let desc = __goscriptRange4.value
			{
				let [, exists] = $.mapGet<bigint, {}, {}>(descIDs, $.pointerValue<__goscript_desc.Desc>(desc).id, {})
				if (!exists) {
					collectorID = $.uint64Xor(collectorID, $.pointerValue<__goscript_desc.Desc>(desc).id)
					$.mapSet(descIDs, $.pointerValue<__goscript_desc.Desc>(desc).id, {})
				}
			}
		}

		await (r$ as Registry).mtx.RLock()
		{
			let [, exists] = $.mapGet<bigint, __goscript_collector.Collector | null, __goscript_collector.Collector | null>((r$ as Registry).collectorsByID, collectorID, null)
			if (!exists) {
				void (r$ as Registry).mtx.RUnlock()
				return false
			}
		}
		void (r$ as Registry).mtx.RUnlock()

		await (r$ as Registry).mtx.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((r$ as Registry).mtx), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		$.deleteMapEntry((r$ as Registry).collectorsByID, collectorID)
		for (const [id, __rangeValue] of descIDs?.entries() ?? []) {
			$.deleteMapEntry((r$ as Registry).descIDs, id)
		}
		// dimHashesByName is left untouched as those must be consistent
		// throughout the lifetime of a program.
		return true
	}

	static __typeInfo = $.registerStructType(
		"prometheus.Registry",
		() => new Registry(),
		() => [$.methodSignature("Gather", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")), "error"], true), $.methodSignature("MustRegister", [["cs", /* @__PURE__ */ $.sliceType("prometheus.Collector")]], [], true), $.methodSignature("Register", [["c", "prometheus.Collector"]], ["error"], true), $.methodSignature("Unregister", [["c", "prometheus.Collector"]], [/* @__PURE__ */ $.basicType("bool")], true)],
		Registry,
		() => [/* @__PURE__ */ $.structField("mtx", "sync.RWMutex", [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("collectorsByID", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint64"), "prometheus.Collector"), [1], 24, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("descIDs", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint64"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [2], 32, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("dimHashesByName", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint64")), [3], 40, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("uncheckedCollectors", /* @__PURE__ */ $.sliceType("prometheus.Collector"), [4], 48, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("pedanticChecksEnabled", /* @__PURE__ */ $.basicType("bool"), [5], 72, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export const capMetricChan: number = 1000

export const capDescChan: number = 10

export var defaultRegistry: Registry | $.VarRef<Registry> | null

export function __goscript_init_defaultRegistry(): void {
	if (((defaultRegistry) as any) === undefined) {
		defaultRegistry = NewRegistry()
	}
}

export function __goscript_get_defaultRegistry(): Registry | $.VarRef<Registry> | null {
	if (((defaultRegistry) as any) === undefined) {
		__goscript_init_defaultRegistry()
	}
	return defaultRegistry
}

export function __goscript_set_defaultRegistry(__goscriptValue: Registry | $.VarRef<Registry> | null): void {
	defaultRegistry = __goscriptValue
}

export let DefaultRegisterer: Registerer | null = $.interfaceValue<Registerer | null>(__goscript_get_defaultRegistry(), "*prometheus.Registry", /* @__PURE__ */ $.pointerType("prometheus.Registry"))

export function __goscript_set_DefaultRegisterer(__goscriptValue: Registerer | null): void {
	DefaultRegisterer = __goscriptValue
}

export let DefaultGatherer: Gatherer | null = $.interfaceValue<Gatherer | null>(__goscript_get_defaultRegistry(), "*prometheus.Registry", /* @__PURE__ */ $.pointerType("prometheus.Registry"))

export function __goscript_set_DefaultGatherer(__goscriptValue: Gatherer | null): void {
	DefaultGatherer = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await MustRegister($.arrayToSlice<__goscript_collector.Collector | null>([await __goscript_process_collector.NewProcessCollector(new __goscript_process_collector.ProcessCollectorOpts(undefined, true))]))
	await MustRegister($.arrayToSlice<__goscript_collector.Collector | null>([await __goscript_go_collector.NewGoCollector()]))
}

export function NewRegistry(): Registry | $.VarRef<Registry> | null {
	return new Registry({collectorsByID: $.makeMap<bigint, __goscript_collector.Collector | null>([]), descIDs: $.makeMap<bigint, {}>([]), dimHashesByName: $.makeMap<string, bigint>([])})
}

export function NewPedanticRegistry(): Registry | $.VarRef<Registry> | null {
	let r: Registry | $.VarRef<Registry> | null = NewRegistry()
	$.pointerValue<Registry>(r).pedanticChecksEnabled = true
	return r
}

export async function Register(c: __goscript_collector.Collector | null): globalThis.Promise<$.GoError> {
	return (DefaultRegisterer !== null && (DefaultRegisterer as any).__isVarRef !== true && (DefaultRegisterer as any).__goValue === undefined ? (DefaultRegisterer as Exclude<Registerer, null>) : $.pointerValue<Exclude<Registerer, null>>(DefaultRegisterer)).Register(c)
}

export async function MustRegister(cs: $.Slice<__goscript_collector.Collector | null>): globalThis.Promise<void> {
	void (__goscriptAwait = (DefaultRegisterer !== null && (DefaultRegisterer as any).__isVarRef !== true && (DefaultRegisterer as any).__goValue === undefined ? (DefaultRegisterer as Exclude<Registerer, null>) : $.pointerValue<Exclude<Registerer, null>>(DefaultRegisterer)).MustRegister(cs), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function Unregister(c: __goscript_collector.Collector | null): globalThis.Promise<boolean> {
	return (DefaultRegisterer !== null && (DefaultRegisterer as any).__isVarRef !== true && (DefaultRegisterer as any).__goValue === undefined ? (DefaultRegisterer as Exclude<Registerer, null>) : $.pointerValue<Exclude<Registerer, null>>(DefaultRegisterer)).Unregister(c)
}

export async function GathererFunc_Gather(gf: GathererFunc | null): globalThis.Promise<[$.Slice<dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>, $.GoError]> {
	return gf!()
}

export async function MultiError_Error(errs: MultiError): globalThis.Promise<string> {
	if ($.sliceLen((errs as MultiError)) == 0) {
		return ""
	}
	let buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null = new bytes.Buffer()
	await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "%d error(s) occurred:", $.basicInterfaceValue($.sliceLen((errs as MultiError)), "int"))
	for (let __goscriptRangeTarget0 = errs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let err = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as $.GoError)
		await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "\n* %s", (err as any))
	}
	return bytes.Buffer.prototype.String.call($.pointerValue<bytes.Buffer>(buf))
}

export function MultiError_Append(errs: $.VarRef<MultiError> | null, err: $.GoError): void {
	if (err != null) {
		errs!.value = ($.appendOne(($.pointerValue<MultiError>(errs) as MultiError), err, $.appendZeros.nil) as MultiError)
	}
}

export function MultiError_MaybeUnwrap(errs: MultiError): $.GoError {
	switch ($.sliceLen((errs as MultiError))) {
		case 0:
		{
			return null
			break
		}
		case 1:
		{
			return $.arrayIndex(errs!, 0)
			break
		}
		default:
		{
			return $.namedValueInterfaceValue<$.GoError>(errs, "prometheus.MultiError", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function WriteToTextfile(filename: string, g: Gatherer | null): globalThis.Promise<$.GoError> {
	await using __defer = new $.AsyncDisposableStack()
	let __goscriptTuple0: any = await ioutil.TempFile(filepath.Dir(filename), filepath.Base(filename))
	let tmp: os.File | $.VarRef<os.File> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return err
	}
	const __goscriptDeferArg0 = os.File.prototype.Name.call($.pointerValue<os.File>(tmp))
	__defer.defer(async () => { await os.Remove(__goscriptDeferArg0) })

	let __goscriptTuple1: any = await (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? (g as Exclude<Gatherer, null>) : $.pointerValue<Exclude<Gatherer, null>>(g)).Gather()
	let mfs: $.Slice<dto.MetricFamily | $.VarRef<dto.MetricFamily> | null> = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		return err
	}
	for (let __goscriptRangeTarget3 = mfs, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let mf = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as dto.MetricFamily | $.VarRef<dto.MetricFamily> | null)
		{
			let [, __goscriptShadow2] = await expfmt.MetricFamilyToText($.interfaceValue<io.Writer | null>(tmp, "*os.File", /* @__PURE__ */ $.pointerType("os.File")), mf)
			if (__goscriptShadow2 != null) {
				return __goscriptShadow2
			}
		}
	}
	{
		let __goscriptShadow3 = await os.File.prototype.Close.call($.pointerValue<os.File>(tmp))
		if (__goscriptShadow3 != null) {
			return __goscriptShadow3
		}
	}

	{
		let __goscriptShadow4 = await os.Chmod(os.File.prototype.Name.call($.pointerValue<os.File>(tmp)), 0o644)
		if (__goscriptShadow4 != null) {
			return __goscriptShadow4
		}
	}
	return await os.Rename(os.File.prototype.Name.call($.pointerValue<os.File>(tmp)), filename)
}

export async function processMetric(metric: __goscript_metric.Metric | null, metricFamiliesByName: globalThis.Map<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null> | null, metricHashes: globalThis.Map<bigint, {}> | null, registeredDescIDs: globalThis.Map<bigint, {}> | null): globalThis.Promise<$.GoError> {
	let desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null = ((__goscriptAwait = (metric !== null && (metric as any).__isVarRef !== true && (metric as any).__goValue === undefined ? (metric as Exclude<__goscript_metric.Metric, null>) : $.pointerValue<Exclude<__goscript_metric.Metric, null>>(metric)).Desc(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null)
	let desc$: __goscript_desc.Desc = desc == null ? $.pointerTarget<__goscript_desc.Desc>(desc) : (desc as any).__isVarRef === true ? (desc as any).value : (desc as any).__goValue === undefined ? (desc as any) : $.pointerTarget<__goscript_desc.Desc>(desc)
	// Wrapped metrics collected by an unchecked Collector can have an
	// invalid Desc.
	if ((desc$ as __goscript_desc.Desc).err != null) {
		return (desc$ as __goscript_desc.Desc).err
	}
	let dtoMetric: dto.Metric | $.VarRef<dto.Metric> | null = new dto.Metric()
	let dtoMetric$: dto.Metric = dtoMetric == null ? $.pointerTarget<dto.Metric>(dtoMetric) : (dtoMetric as any).__isVarRef === true ? (dtoMetric as any).value : (dtoMetric as any).__goValue === undefined ? (dtoMetric as any) : $.pointerTarget<dto.Metric>(dtoMetric)
	{
		let err = (__goscriptAwait = (metric !== null && (metric as any).__isVarRef !== true && (metric as any).__goValue === undefined ? (metric as Exclude<__goscript_metric.Metric, null>) : $.pointerValue<Exclude<__goscript_metric.Metric, null>>(metric)).Write(dtoMetric), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			return fmt.Errorf("error collecting metric %v: %s", $.interfaceValue(desc, "*prometheus.Desc", /* @__PURE__ */ $.pointerType("prometheus.Desc")), (err as any))
		}
	}
	let __goscriptTuple2: any = $.mapGet<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>(metricFamiliesByName, (desc$ as __goscript_desc.Desc).fqName, null)
	let metricFamily: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null = __goscriptTuple2[0]
	let ok = __goscriptTuple2[1]
	if (ok) {
		if (!$.stringEqual((metricFamily !== null && (metricFamily as any).__isVarRef !== true && (metricFamily as any).__goValue === undefined ? ((metricFamily as any) as dto.MetricFamily).GetHelp() : dto.MetricFamily.prototype.GetHelp.call(metricFamily)), (desc$ as __goscript_desc.Desc).help)) {
			return fmt.Errorf("collected metric %s %s has help %q but should have %q", (desc$ as __goscript_desc.Desc).fqName, $.interfaceValue(dtoMetric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")), (desc$ as __goscript_desc.Desc).help, (metricFamily !== null && (metricFamily as any).__isVarRef !== true && (metricFamily as any).__goValue === undefined ? ((metricFamily as any) as dto.MetricFamily).GetHelp() : dto.MetricFamily.prototype.GetHelp.call(metricFamily)))
		}
		// TODO(beorn7): Simplify switch once Desc has type.
		switch ((metricFamily !== null && (metricFamily as any).__isVarRef !== true && (metricFamily as any).__goValue === undefined ? ((metricFamily as any) as dto.MetricFamily).GetType() : dto.MetricFamily.prototype.GetType.call(metricFamily))) {
			case dto.MetricType_COUNTER:
			{
				if ((dtoMetric$ as dto.Metric).Counter == null) {
					return fmt.Errorf("collected metric %s %s should be a Counter", (desc$ as __goscript_desc.Desc).fqName, $.interfaceValue(dtoMetric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")))
				}
				break
			}
			case dto.MetricType_GAUGE:
			{
				if ((dtoMetric$ as dto.Metric).Gauge == null) {
					return fmt.Errorf("collected metric %s %s should be a Gauge", (desc$ as __goscript_desc.Desc).fqName, $.interfaceValue(dtoMetric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")))
				}
				break
			}
			case dto.MetricType_SUMMARY:
			{
				if ((dtoMetric$ as dto.Metric).Summary == null) {
					return fmt.Errorf("collected metric %s %s should be a Summary", (desc$ as __goscript_desc.Desc).fqName, $.interfaceValue(dtoMetric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")))
				}
				break
			}
			case dto.MetricType_UNTYPED:
			{
				if ((dtoMetric$ as dto.Metric).Untyped == null) {
					return fmt.Errorf("collected metric %s %s should be Untyped", (desc$ as __goscript_desc.Desc).fqName, $.interfaceValue(dtoMetric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")))
				}
				break
			}
			case dto.MetricType_HISTOGRAM:
			{
				if ((dtoMetric$ as dto.Metric).Histogram == null) {
					return fmt.Errorf("collected metric %s %s should be a Histogram", (desc$ as __goscript_desc.Desc).fqName, $.interfaceValue(dtoMetric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")))
				}
				break
			}
			default:
			{
				$.panic("encountered MetricFamily with invalid type")
				break
			}
		}
	} else {
		metricFamily = new dto.MetricFamily()
		$.pointerValue<dto.MetricFamily>(metricFamily).Name = proto.String((desc$ as __goscript_desc.Desc).fqName)
		$.pointerValue<dto.MetricFamily>(metricFamily).Help = proto.String((desc$ as __goscript_desc.Desc).help)
		// TODO(beorn7): Simplify switch once Desc has type.
		switch ((true as boolean)) {
			case (dtoMetric$ as dto.Metric).Gauge != null:
			{
				$.pointerValue<dto.MetricFamily>(metricFamily).Type = dto.MetricType_Enum(dto.MetricType_GAUGE)
				break
			}
			case (dtoMetric$ as dto.Metric).Counter != null:
			{
				$.pointerValue<dto.MetricFamily>(metricFamily).Type = dto.MetricType_Enum(dto.MetricType_COUNTER)
				break
			}
			case (dtoMetric$ as dto.Metric).Summary != null:
			{
				$.pointerValue<dto.MetricFamily>(metricFamily).Type = dto.MetricType_Enum(dto.MetricType_SUMMARY)
				break
			}
			case (dtoMetric$ as dto.Metric).Untyped != null:
			{
				$.pointerValue<dto.MetricFamily>(metricFamily).Type = dto.MetricType_Enum(dto.MetricType_UNTYPED)
				break
			}
			case (dtoMetric$ as dto.Metric).Histogram != null:
			{
				$.pointerValue<dto.MetricFamily>(metricFamily).Type = dto.MetricType_Enum(dto.MetricType_HISTOGRAM)
				break
			}
			default:
			{
				return fmt.Errorf("empty metric collected: %s", $.interfaceValue(dtoMetric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")))
				break
			}
		}
		{
			let err = checkSuffixCollisions(metricFamily, metricFamiliesByName)
			if (err != null) {
				return err
			}
		}
		$.mapSet(metricFamiliesByName, (desc$ as __goscript_desc.Desc).fqName, metricFamily)
	}
	{
		let err = await checkMetricConsistency(metricFamily, dtoMetric, metricHashes)
		if (err != null) {
			return err
		}
	}
	if (registeredDescIDs != null) {
		// Is the desc registered at all?
		{
			let [, exist] = $.mapGet<bigint, {}, {}>(registeredDescIDs, (desc$ as __goscript_desc.Desc).id, {})
			if (!exist) {
				return fmt.Errorf("collected metric %s %s with unregistered descriptor %s", (metricFamily !== null && (metricFamily as any).__isVarRef !== true && (metricFamily as any).__goValue === undefined ? ((metricFamily as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(metricFamily)), $.interfaceValue(dtoMetric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")), $.interfaceValue(desc, "*prometheus.Desc", /* @__PURE__ */ $.pointerType("prometheus.Desc")))
			}
		}
		{
			let err = await checkDescConsistency(metricFamily, dtoMetric, desc)
			if (err != null) {
				return err
			}
		}
	}
	$.pointerValue<dto.MetricFamily>(metricFamily).Metric = $.appendOne($.pointerValue<dto.MetricFamily>(metricFamily).Metric, dtoMetric, $.appendZeros.nil)
	return null
}

export async function Gatherers_Gather(gs: Gatherers): globalThis.Promise<[$.Slice<dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>, $.GoError]> {
	let metricFamiliesByName: globalThis.Map<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null> | null = $.makeMap<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>([])
	let metricHashes: globalThis.Map<bigint, {}> | null = $.makeMap<bigint, {}>([])
	let errs: MultiError = null! as MultiError

	for (let __goscriptRangeTarget7 = gs, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget7), i = 0; i < __goscriptRangeWindow4.length; i++) {
		let g = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as Gatherer | null)
		let __goscriptTuple3: any = await (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? (g as Exclude<Gatherer, null>) : $.pointerValue<Exclude<Gatherer, null>>(g)).Gather()
		let mfs: $.Slice<dto.MetricFamily | $.VarRef<dto.MetricFamily> | null> = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err != null) {
			{
				let __goscriptTuple4: any = $.typeAssertTuple<MultiError>(err, /* @__PURE__ */ $.sliceType("error", "prometheus.MultiError"))
				let multiErr: MultiError = (__goscriptTuple4[0] as MultiError)
				let ok = __goscriptTuple4[1]
				if (ok) {
					for (let __goscriptRangeTarget4 = multiErr, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
						let err = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as $.GoError)
						errs = ($.appendOne((errs as MultiError), fmt.Errorf("[from Gatherer #%d] %s", $.basicInterfaceValue(i + 1, "int"), (err as any)), $.appendZeros.nil) as MultiError)
					}
				} else {
					errs = ($.appendOne((errs as MultiError), fmt.Errorf("[from Gatherer #%d] %s", $.basicInterfaceValue(i + 1, "int"), (err as any)), $.appendZeros.nil) as MultiError)
				}
			}
		}
		for (let __goscriptRangeTarget6 = mfs, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let mf = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as dto.MetricFamily | $.VarRef<dto.MetricFamily> | null)
			let __goscriptTuple5: any = $.mapGet<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>(metricFamiliesByName, (mf !== null && (mf as any).__isVarRef !== true && (mf as any).__goValue === undefined ? ((mf as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(mf)), null)
			let existingMF: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null = __goscriptTuple5[0]
			let exists = __goscriptTuple5[1]
			if (exists) {
				if (!$.stringEqual((existingMF !== null && (existingMF as any).__isVarRef !== true && (existingMF as any).__goValue === undefined ? ((existingMF as any) as dto.MetricFamily).GetHelp() : dto.MetricFamily.prototype.GetHelp.call(existingMF)), (mf !== null && (mf as any).__isVarRef !== true && (mf as any).__goValue === undefined ? ((mf as any) as dto.MetricFamily).GetHelp() : dto.MetricFamily.prototype.GetHelp.call(mf)))) {
					errs = ($.appendOne((errs as MultiError), fmt.Errorf("gathered metric family %s has help %q but should have %q", (mf !== null && (mf as any).__isVarRef !== true && (mf as any).__goValue === undefined ? ((mf as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(mf)), (mf !== null && (mf as any).__isVarRef !== true && (mf as any).__goValue === undefined ? ((mf as any) as dto.MetricFamily).GetHelp() : dto.MetricFamily.prototype.GetHelp.call(mf)), (existingMF !== null && (existingMF as any).__isVarRef !== true && (existingMF as any).__goValue === undefined ? ((existingMF as any) as dto.MetricFamily).GetHelp() : dto.MetricFamily.prototype.GetHelp.call(existingMF))), $.appendZeros.nil) as MultiError)
					continue
				}
				if ((existingMF !== null && (existingMF as any).__isVarRef !== true && (existingMF as any).__goValue === undefined ? ((existingMF as any) as dto.MetricFamily).GetType() : dto.MetricFamily.prototype.GetType.call(existingMF)) != (mf !== null && (mf as any).__isVarRef !== true && (mf as any).__goValue === undefined ? ((mf as any) as dto.MetricFamily).GetType() : dto.MetricFamily.prototype.GetType.call(mf))) {
					errs = ($.appendOne((errs as MultiError), fmt.Errorf("gathered metric family %s has type %s but should have %s", (mf !== null && (mf as any).__isVarRef !== true && (mf as any).__goValue === undefined ? ((mf as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(mf)), $.namedValueInterfaceValue<any>((mf !== null && (mf as any).__isVarRef !== true && (mf as any).__goValue === undefined ? ((mf as any) as dto.MetricFamily).GetType() : dto.MetricFamily.prototype.GetType.call(mf)), "io_prometheus_client.MetricType", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), $.namedValueInterfaceValue<any>((existingMF !== null && (existingMF as any).__isVarRef !== true && (existingMF as any).__goValue === undefined ? ((existingMF as any) as dto.MetricFamily).GetType() : dto.MetricFamily.prototype.GetType.call(existingMF)), "io_prometheus_client.MetricType", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())), $.appendZeros.nil) as MultiError)
					continue
				}
			} else {
				existingMF = new dto.MetricFamily()
				$.pointerValue<dto.MetricFamily>(existingMF).Name = $.pointerValue<dto.MetricFamily>(mf).Name
				$.pointerValue<dto.MetricFamily>(existingMF).Help = $.pointerValue<dto.MetricFamily>(mf).Help
				$.pointerValue<dto.MetricFamily>(existingMF).Type = $.pointerValue<dto.MetricFamily>(mf).Type
				{
					let __goscriptShadow5 = checkSuffixCollisions(existingMF, metricFamiliesByName)
					if (__goscriptShadow5 != null) {
						errs = ($.appendOne((errs as MultiError), __goscriptShadow5, $.appendZeros.nil) as MultiError)
						continue
					}
				}
				$.mapSet(metricFamiliesByName, (mf !== null && (mf as any).__isVarRef !== true && (mf as any).__goValue === undefined ? ((mf as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(mf)), existingMF)
			}
			for (let __goscriptRangeTarget5 = $.pointerValue<dto.MetricFamily>(mf).Metric, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
				let m = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as dto.Metric | $.VarRef<dto.Metric> | null)
				{
					let __goscriptShadow6 = await checkMetricConsistency(existingMF, m, metricHashes)
					if (__goscriptShadow6 != null) {
						errs = ($.appendOne((errs as MultiError), __goscriptShadow6, $.appendZeros.nil) as MultiError)
						continue
					}
				}
				$.pointerValue<dto.MetricFamily>(existingMF).Metric = $.appendOne($.pointerValue<dto.MetricFamily>(existingMF).Metric, m, $.appendZeros.nil)
			}
		}
	}
	return [await internal.NormalizeMetricFamilies(metricFamiliesByName), MultiError_MaybeUnwrap(errs)]
}

export function checkSuffixCollisions(mf: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null, mfs: globalThis.Map<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null> | null): $.GoError {
	let newName: string = (mf !== null && (mf as any).__isVarRef !== true && (mf as any).__goValue === undefined ? ((mf as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(mf))
	let newType: dto.MetricType = (mf !== null && (mf as any).__isVarRef !== true && (mf as any).__goValue === undefined ? ((mf as any) as dto.MetricFamily).GetType() : dto.MetricFamily.prototype.GetType.call(mf))
	let newNameWithoutSuffix: string = ""
	switch ((true as boolean)) {
		case strings.HasSuffix(newName, "_count"):
		{
			newNameWithoutSuffix = $.sliceStringOrBytes(newName, undefined, $.stringLen(newName) - 6)
			break
		}
		case strings.HasSuffix(newName, "_sum"):
		{
			newNameWithoutSuffix = $.sliceStringOrBytes(newName, undefined, $.stringLen(newName) - 4)
			break
		}
		case strings.HasSuffix(newName, "_bucket"):
		{
			newNameWithoutSuffix = $.sliceStringOrBytes(newName, undefined, $.stringLen(newName) - 7)
			break
		}
	}
	if (!$.stringEqual(newNameWithoutSuffix, "")) {
		{
			let __goscriptTuple6: any = $.mapGet<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>(mfs, newNameWithoutSuffix, null)
			let existingMF: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null = __goscriptTuple6[0]
			let ok = __goscriptTuple6[1]
			if (ok) {
				switch ((existingMF !== null && (existingMF as any).__isVarRef !== true && (existingMF as any).__goValue === undefined ? ((existingMF as any) as dto.MetricFamily).GetType() : dto.MetricFamily.prototype.GetType.call(existingMF))) {
					case dto.MetricType_SUMMARY:
					{
						if (!strings.HasSuffix(newName, "_bucket")) {
							return fmt.Errorf("collected metric named %q collides with previously collected summary named %q", newName, newNameWithoutSuffix)
						}
						break
					}
					case dto.MetricType_HISTOGRAM:
					{
						return fmt.Errorf("collected metric named %q collides with previously collected histogram named %q", newName, newNameWithoutSuffix)
						break
					}
				}
			}
		}
	}
	if ((newType == 2) || (newType == 4)) {
		{
			let [, ok] = $.mapGet<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>(mfs, $.concatString(newName, "_count"), null)
			if (ok) {
				return fmt.Errorf("collected histogram or summary named %q collides with previously collected metric named %q", newName, $.concatString(newName, "_count"))
			}
		}
		{
			let [, ok] = $.mapGet<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>(mfs, $.concatString(newName, "_sum"), null)
			if (ok) {
				return fmt.Errorf("collected histogram or summary named %q collides with previously collected metric named %q", newName, $.concatString(newName, "_sum"))
			}
		}
	}
	if (newType == 4) {
		{
			let [, ok] = $.mapGet<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>(mfs, $.concatString(newName, "_bucket"), null)
			if (ok) {
				return fmt.Errorf("collected histogram named %q collides with previously collected metric named %q", newName, $.concatString(newName, "_bucket"))
			}
		}
	}
	return null
}

export async function checkMetricConsistency(metricFamily: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null, dtoMetric: dto.Metric | $.VarRef<dto.Metric> | null, metricHashes: globalThis.Map<bigint, {}> | null): globalThis.Promise<$.GoError> {
	const dtoMetric$: dto.Metric = dtoMetric == null ? $.pointerTarget<dto.Metric>(dtoMetric) : (dtoMetric as any).__isVarRef === true ? (dtoMetric as any).value : (dtoMetric as any).__goValue === undefined ? (dtoMetric as any) : $.pointerTarget<dto.Metric>(dtoMetric)
	let name = (metricFamily !== null && (metricFamily as any).__isVarRef !== true && (metricFamily as any).__goValue === undefined ? ((metricFamily as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(metricFamily))

	// Type consistency with metric family.
	if (((((((metricFamily !== null && (metricFamily as any).__isVarRef !== true && (metricFamily as any).__goValue === undefined ? ((metricFamily as any) as dto.MetricFamily).GetType() : dto.MetricFamily.prototype.GetType.call(metricFamily)) == 1) && ((dtoMetric$ as dto.Metric).Gauge == null)) || (((metricFamily !== null && (metricFamily as any).__isVarRef !== true && (metricFamily as any).__goValue === undefined ? ((metricFamily as any) as dto.MetricFamily).GetType() : dto.MetricFamily.prototype.GetType.call(metricFamily)) == 0) && ((dtoMetric$ as dto.Metric).Counter == null))) || (((metricFamily !== null && (metricFamily as any).__isVarRef !== true && (metricFamily as any).__goValue === undefined ? ((metricFamily as any) as dto.MetricFamily).GetType() : dto.MetricFamily.prototype.GetType.call(metricFamily)) == 2) && ((dtoMetric$ as dto.Metric).Summary == null))) || (((metricFamily !== null && (metricFamily as any).__isVarRef !== true && (metricFamily as any).__goValue === undefined ? ((metricFamily as any) as dto.MetricFamily).GetType() : dto.MetricFamily.prototype.GetType.call(metricFamily)) == 4) && ((dtoMetric$ as dto.Metric).Histogram == null))) || (((metricFamily !== null && (metricFamily as any).__isVarRef !== true && (metricFamily as any).__goValue === undefined ? ((metricFamily as any) as dto.MetricFamily).GetType() : dto.MetricFamily.prototype.GetType.call(metricFamily)) == 3) && ((dtoMetric$ as dto.Metric).Untyped == null))) {
		return fmt.Errorf("collected metric %q { %s} is not a %s", name, $.interfaceValue(dtoMetric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")), $.namedValueInterfaceValue<any>((metricFamily !== null && (metricFamily as any).__isVarRef !== true && (metricFamily as any).__goValue === undefined ? ((metricFamily as any) as dto.MetricFamily).GetType() : dto.MetricFamily.prototype.GetType.call(metricFamily)), "io_prometheus_client.MetricType", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))
	}

	let previousLabelName = ""
	for (let __goscriptRangeTarget8 = (dtoMetric !== null && (dtoMetric as any).__isVarRef !== true && (dtoMetric as any).__goValue === undefined ? ((dtoMetric as any) as dto.Metric).GetLabel() : dto.Metric.prototype.GetLabel.call(dtoMetric)), __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
		let labelPair = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
		let labelName = (labelPair !== null && (labelPair as any).__isVarRef !== true && (labelPair as any).__goValue === undefined ? ((labelPair as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(labelPair))
		if ($.stringEqual(labelName, previousLabelName)) {
			return fmt.Errorf("collected metric %q { %s} has two or more labels with the same name: %s", name, $.interfaceValue(dtoMetric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")), labelName)
		}
		if (!__goscript_labels.checkLabelName(labelName)) {
			return fmt.Errorf("collected metric %q { %s} has a label with an invalid name: %s", name, $.interfaceValue(dtoMetric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")), labelName)
		}
		if (((dtoMetric$ as dto.Metric).Summary != null) && ($.stringEqual(labelName, "quantile"))) {
			return fmt.Errorf("collected metric %q { %s} must not have an explicit %q label", name, $.interfaceValue(dtoMetric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")), "quantile")
		}
		if (!utf8.ValidString((labelPair !== null && (labelPair as any).__isVarRef !== true && (labelPair as any).__goValue === undefined ? ((labelPair as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(labelPair)))) {
			return fmt.Errorf("collected metric %q { %s} has a label named %q whose value is not utf8: %#v", name, $.interfaceValue(dtoMetric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")), labelName, (labelPair !== null && (labelPair as any).__isVarRef !== true && (labelPair as any).__goValue === undefined ? ((labelPair as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(labelPair)))
		}
		previousLabelName = labelName
	}

	// Is the metric unique (i.e. no other metric with the same name and the same labels)?
	let h: xxhash.Digest | $.VarRef<xxhash.Digest> | null = xxhash.New()
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as xxhash.Digest).WriteString(name) : xxhash.Digest.prototype.WriteString.call(h, name))
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as xxhash.Digest).Write(__goscript_metric.__goscript_get_separatorByteSlice()) : xxhash.Digest.prototype.Write.call(h, __goscript_metric.__goscript_get_separatorByteSlice()))
	// Make sure label pairs are sorted. We depend on it for the consistency
	// check.
	if (!await sort.IsSorted($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>(((dtoMetric$ as dto.Metric).Label as __goscript_metric.labelPairSorter), "prometheus.labelPairSorter", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8()))!)) {
		// We cannot sort dtoMetric.Label in place as it is immutable by contract.
		let copiedLabels: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null> = $.makeSlice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>($.sliceLen((dtoMetric$ as dto.Metric).Label))
		$.copy(copiedLabels, (dtoMetric$ as dto.Metric).Label)
		await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((copiedLabels as __goscript_metric.labelPairSorter), "prometheus.labelPairSorter", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8()))!);
		;(dtoMetric$ as dto.Metric).Label = copiedLabels
	}
	for (let __goscriptRangeTarget9 = (dtoMetric$ as dto.Metric).Label, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
		let lp = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
		xxhash.Digest.prototype.WriteString.call(h, (lp !== null && (lp as any).__isVarRef !== true && (lp as any).__goValue === undefined ? ((lp as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(lp)))
		void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as xxhash.Digest).Write(__goscript_metric.__goscript_get_separatorByteSlice()) : xxhash.Digest.prototype.Write.call(h, __goscript_metric.__goscript_get_separatorByteSlice()))
		xxhash.Digest.prototype.WriteString.call(h, (lp !== null && (lp as any).__isVarRef !== true && (lp as any).__goValue === undefined ? ((lp as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(lp)))
		void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as xxhash.Digest).Write(__goscript_metric.__goscript_get_separatorByteSlice()) : xxhash.Digest.prototype.Write.call(h, __goscript_metric.__goscript_get_separatorByteSlice()))
	}
	let hSum = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as xxhash.Digest).Sum64() : xxhash.Digest.prototype.Sum64.call(h))
	{
		let [, exists] = $.mapGet<bigint, {}, {}>(metricHashes, hSum, {})
		if (exists) {
			return fmt.Errorf("collected metric %q { %s} was collected before with the same name and label values", name, $.interfaceValue(dtoMetric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")))
		}
	}
	$.mapSet(metricHashes, hSum, {})
	return null
}

export async function checkDescConsistency(metricFamily: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null, dtoMetric: dto.Metric | $.VarRef<dto.Metric> | null, desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null): globalThis.Promise<$.GoError> {
	const dtoMetric$: dto.Metric = dtoMetric == null ? $.pointerTarget<dto.Metric>(dtoMetric) : (dtoMetric as any).__isVarRef === true ? (dtoMetric as any).value : (dtoMetric as any).__goValue === undefined ? (dtoMetric as any) : $.pointerTarget<dto.Metric>(dtoMetric)
	const desc$: __goscript_desc.Desc = desc == null ? $.pointerTarget<__goscript_desc.Desc>(desc) : (desc as any).__isVarRef === true ? (desc as any).value : (desc as any).__goValue === undefined ? (desc as any) : $.pointerTarget<__goscript_desc.Desc>(desc)
	// Desc help consistency with metric family help.
	if (!$.stringEqual((metricFamily !== null && (metricFamily as any).__isVarRef !== true && (metricFamily as any).__goValue === undefined ? ((metricFamily as any) as dto.MetricFamily).GetHelp() : dto.MetricFamily.prototype.GetHelp.call(metricFamily)), (desc$ as __goscript_desc.Desc).help)) {
		return fmt.Errorf("collected metric %s %s has help %q but should have %q", (metricFamily !== null && (metricFamily as any).__isVarRef !== true && (metricFamily as any).__goValue === undefined ? ((metricFamily as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(metricFamily)), $.interfaceValue(dtoMetric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")), (metricFamily !== null && (metricFamily as any).__isVarRef !== true && (metricFamily as any).__goValue === undefined ? ((metricFamily as any) as dto.MetricFamily).GetHelp() : dto.MetricFamily.prototype.GetHelp.call(metricFamily)), (desc$ as __goscript_desc.Desc).help)
	}

	// Is the desc consistent with the content of the metric?
	let lpsFromDesc: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null> = $.makeSlice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>($.sliceLen((desc$ as __goscript_desc.Desc).constLabelPairs), $.sliceLen((dtoMetric$ as dto.Metric).Label))
	$.copy(lpsFromDesc, (desc$ as __goscript_desc.Desc).constLabelPairs)
	for (let __goscriptRangeTarget10 = (desc$ as __goscript_desc.Desc).variableLabels, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
		let l = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as string)
		lpsFromDesc = $.appendOne(lpsFromDesc, (() => { const __goscriptLiteralField1 = proto.String(l); return new dto.LabelPair({Name: __goscriptLiteralField1}) })(), $.appendZeros.nil)
	}
	if ($.sliceLen(lpsFromDesc) != $.sliceLen((dtoMetric$ as dto.Metric).Label)) {
		return fmt.Errorf("labels in collected metric %s %s are inconsistent with descriptor %s", (metricFamily !== null && (metricFamily as any).__isVarRef !== true && (metricFamily as any).__goValue === undefined ? ((metricFamily as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(metricFamily)), $.interfaceValue(dtoMetric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")), $.interfaceValue(desc, "*prometheus.Desc", /* @__PURE__ */ $.pointerType("prometheus.Desc")))
	}
	await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((lpsFromDesc as __goscript_metric.labelPairSorter), "prometheus.labelPairSorter", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8()))!)
	for (let __goscriptRangeTarget11 = lpsFromDesc, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), i = 0; i < __goscriptRangeWindow11.length; i++) {
		let lpFromDesc = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + i] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
		let lpFromMetric: dto.LabelPair | $.VarRef<dto.LabelPair> | null = $.arrayIndex((dtoMetric$ as dto.Metric).Label!, i)
		if ((!$.stringEqual((lpFromDesc !== null && (lpFromDesc as any).__isVarRef !== true && (lpFromDesc as any).__goValue === undefined ? ((lpFromDesc as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(lpFromDesc)), (lpFromMetric !== null && (lpFromMetric as any).__isVarRef !== true && (lpFromMetric as any).__goValue === undefined ? ((lpFromMetric as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(lpFromMetric)))) || (($.pointerValue<dto.LabelPair>(lpFromDesc).Value != null) && (!$.stringEqual((lpFromDesc !== null && (lpFromDesc as any).__isVarRef !== true && (lpFromDesc as any).__goValue === undefined ? ((lpFromDesc as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(lpFromDesc)), (lpFromMetric !== null && (lpFromMetric as any).__isVarRef !== true && (lpFromMetric as any).__goValue === undefined ? ((lpFromMetric as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(lpFromMetric)))))) {
			return fmt.Errorf("labels in collected metric %s %s are inconsistent with descriptor %s", (metricFamily !== null && (metricFamily as any).__isVarRef !== true && (metricFamily as any).__goValue === undefined ? ((metricFamily as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(metricFamily)), $.interfaceValue(dtoMetric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")), $.interfaceValue(desc, "*prometheus.Desc", /* @__PURE__ */ $.pointerType("prometheus.Desc")))
		}
	}
	return null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Error: (receiver: any, ...args: any[]) => (MultiError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MaybeUnwrap: (receiver: any, ...args: any[]) => (MultiError_MaybeUnwrap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType("error", "prometheus.MultiError"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("MaybeUnwrap", [], ["error"])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (dto.MetricType_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (dto.MetricType_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (dto.MetricType_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (dto.MetricType_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (dto.MetricType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (dto.MetricType_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int32", "io_prometheus_client.MetricType"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "io_prometheus_client.MetricType"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({Len: (receiver: any, ...args: any[]) => (__goscript_metric.labelPairSorter_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (__goscript_metric.labelPairSorter_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (__goscript_metric.labelPairSorter_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair"), "prometheus.labelPairSorter"))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptAwait: any

export { __goscriptInit0 }
