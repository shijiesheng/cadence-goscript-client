// Generated file based on go_collector.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as debug from "@goscript/runtime/debug/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as io_prometheus_client from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as __goscript_collector from "./collector.gs.ts"

import * as __goscript_desc from "./desc.gs.ts"

import * as __goscript_labels from "./labels.gs.ts"

import * as __goscript_metric from "./metric.gs.ts"

import * as __goscript_summary from "./summary.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/runtime/index.js"
import "@goscript/runtime/debug/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "./collector.gs.ts"
import "./desc.gs.ts"
import "./labels.gs.ts"
import "./metric.gs.ts"
import "./summary.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus", ["prometheus.goCollector", "prometheus.memStatsMetrics"])

export type memStatsMetrics = $.Slice<{"desc": __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, "_eval": ((_p0: runtime.MemStats | $.VarRef<runtime.MemStats> | null) => number | globalThis.Promise<number>) | null, "valType": __goscript_value.ValueType}>

$.registerNamedType("prometheus.memStatsMetrics", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }));

export class goCollector {
	public get goroutinesDesc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		return this._fields.goroutinesDesc
	}

	public set goroutinesDesc(value: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null) {
		this._fields.goroutinesDesc = value
	}

	public get threadsDesc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		return this._fields.threadsDesc
	}

	public set threadsDesc(value: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null) {
		this._fields.threadsDesc = value
	}

	public get gcDesc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		return this._fields.gcDesc
	}

	public set gcDesc(value: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null) {
		this._fields.gcDesc = value
	}

	public get goInfoDesc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		return this._fields.goInfoDesc
	}

	public set goInfoDesc(value: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null) {
		this._fields.goInfoDesc = value
	}

	// ms... are memstats related.
	public get msLast(): runtime.MemStats | $.VarRef<runtime.MemStats> | null {
		return this._fields.msLast
	}

	public set msLast(value: runtime.MemStats | $.VarRef<runtime.MemStats> | null) {
		this._fields.msLast = value
	}

	public get msLastTimestamp(): time.Time {
		return this._fields.msLastTimestamp
	}

	public set msLastTimestamp(value: time.Time) {
		this._fields.msLastTimestamp = value
	}

	public get msMtx(): sync.Mutex {
		return this._fields.msMtx
	}

	public set msMtx(value: sync.Mutex) {
		this._fields.msMtx = value
	}

	public get msMetrics(): memStatsMetrics {
		return this._fields.msMetrics
	}

	public set msMetrics(value: memStatsMetrics) {
		this._fields.msMetrics = value
	}

	public get msRead(): ((_p0: runtime.MemStats | $.VarRef<runtime.MemStats> | null) => void) | null {
		return this._fields.msRead
	}

	public set msRead(value: ((_p0: runtime.MemStats | $.VarRef<runtime.MemStats> | null) => void) | null) {
		this._fields.msRead = value
	}

	public get msMaxWait(): time.Duration {
		return this._fields.msMaxWait
	}

	public set msMaxWait(value: time.Duration) {
		this._fields.msMaxWait = value
	}

	public get msMaxAge(): time.Duration {
		return this._fields.msMaxAge
	}

	public set msMaxAge(value: time.Duration) {
		this._fields.msMaxAge = value
	}

	public _fields: {
		goroutinesDesc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
		threadsDesc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
		gcDesc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
		goInfoDesc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
		msLast: runtime.MemStats | $.VarRef<runtime.MemStats> | null
		msLastTimestamp: time.Time
		msMtx: sync.Mutex
		msMetrics: memStatsMetrics
		msRead: ((_p0: runtime.MemStats | $.VarRef<runtime.MemStats> | null) => void) | null
		msMaxWait: time.Duration
		msMaxAge: time.Duration
	}

	constructor(init?: Partial<{goroutinesDesc?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, threadsDesc?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, gcDesc?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, goInfoDesc?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, msLast?: runtime.MemStats | $.VarRef<runtime.MemStats> | null, msLastTimestamp?: time.Time, msMtx?: sync.Mutex, msMetrics?: memStatsMetrics, msRead?: ((_p0: runtime.MemStats | $.VarRef<runtime.MemStats> | null) => void) | null, msMaxWait?: time.Duration, msMaxAge?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			goroutinesDesc: init?.goroutinesDesc ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			threadsDesc: init?.threadsDesc ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			gcDesc: init?.gcDesc ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			goInfoDesc: init?.goInfoDesc ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			msLast: init?.msLast ?? (null! as runtime.MemStats | $.VarRef<runtime.MemStats> | null),
			msLastTimestamp: init?.msLastTimestamp ? $.markAsStructValue($.cloneStructValue(init.msLastTimestamp)) : $.markAsStructValue(new time.Time()),
			msMtx: init?.msMtx ? $.markAsStructValue($.cloneStructValue(init.msMtx)) : $.markAsStructValue(new sync.Mutex()),
			msMetrics: init?.msMetrics ?? (null! as memStatsMetrics),
			msRead: init?.msRead ?? (null! as ((_p0: runtime.MemStats | $.VarRef<runtime.MemStats> | null) => void) | null),
			msMaxWait: init?.msMaxWait ?? (0n as time.Duration),
			msMaxAge: init?.msMaxAge ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): goCollector {
		return new goCollector(this, true)
	}

	public __goscriptAssign(source: goCollector): void {
		const target = this._fields
		const values = source._fields
		target.goroutinesDesc = values.goroutinesDesc
		target.threadsDesc = values.threadsDesc
		target.gcDesc = values.gcDesc
		target.goInfoDesc = values.goInfoDesc
		target.msLast = values.msLast
		$.assignStruct(target.msLastTimestamp, values.msLastTimestamp)
		$.assignStruct(target.msMtx, values.msMtx)
		target.msMetrics = values.msMetrics
		target.msRead = values.msRead
		target.msMaxWait = values.msMaxWait
		target.msMaxAge = values.msMaxAge
	}

	public async Collect(ch: $.Channel<__goscript_metric.Metric | null> | null): globalThis.Promise<void> {
		const c: goCollector | $.VarRef<goCollector> | null = this;
		const c$: goCollector = c == null ? $.pointerTarget<goCollector>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<goCollector>(c)
		let ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null = new runtime.MemStats()
		let done: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
		// Start reading memstats first as it might take a while.
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			await (c$ as goCollector).msRead!(ms)
			await (c$ as goCollector).msMtx.Lock();
			;(c$ as goCollector).msLast = ms
			$.assignStruct((c$ as goCollector).msLastTimestamp, time.Now())
			void (c$ as goCollector).msMtx.Unlock()
			done!.close()
		})() })

		await $.chanSend(ch, await __goscript_value.MustNewConstMetric((c$ as goCollector).goroutinesDesc, 2, runtime.NumGoroutine(), null))
		let [n, ] = runtime.ThreadCreateProfile(null)
		await $.chanSend(ch, await __goscript_value.MustNewConstMetric((c$ as goCollector).threadsDesc, 2, n, null))

		let stats: $.VarRef<debug.GCStats> = $.varRef($.markAsStructValue(new debug.GCStats()))
		stats.value.PauseQuantiles = $.makeSlice<time.Duration>(5, undefined, "number")
		debug.ReadGCStats(stats)

		let quantiles: globalThis.Map<number, number> | null = $.makeMap<number, number>()
		for (let __goscriptRangeTarget0 = $.goSlice(stats.value.PauseQuantiles, 1, undefined), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), idx = 0; idx < __goscriptRangeWindow0.length; idx++) {
			let pq = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + idx] as time.Duration)
			$.mapSet(quantiles, (idx + 1) / ($.sliceLen(stats.value.PauseQuantiles) - 1), time.Duration_Seconds(pq))
		}
		$.mapSet(quantiles, 0.0, time.Duration_Seconds($.arrayIndex(stats.value.PauseQuantiles!, 0)))
		await $.chanSend(ch, await __goscript_summary.MustNewConstSummary((c$ as goCollector).gcDesc, $.uint64(stats.value.NumGC), time.Duration_Seconds(stats.value.PauseTotal), quantiles, null))

		await $.chanSend(ch, await __goscript_value.MustNewConstMetric((c$ as goCollector).goInfoDesc, 2, 1, null))

		let timer: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer((c$ as goCollector).msMaxWait)
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
			{
				id: 0,
				isSend: false,
				channel: done,
				onSelected: async (__goscriptSelect0Result) => {
					time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(timer))
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as goCollector).msCollect(ch, ms) : goCollector.prototype.msCollect.call(c, ch, ms))
					return $.selectVoidReturn()
				}
			},
			{
				id: 1,
				isSend: false,
				channel: $.pointerValue<time.Timer>(timer).C,
			}
		], false)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
		await (c$ as goCollector).msMtx.Lock()
		if (time.Since($.markAsStructValue($.cloneStructValue((c$ as goCollector).msLastTimestamp))) < (c$ as goCollector).msMaxAge) {
			// Last memstats are recent enough. Collect from them under the lock.
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as goCollector).msCollect(ch, (c$ as goCollector).msLast) : goCollector.prototype.msCollect.call(c, ch, (c$ as goCollector).msLast))
			void (c$ as goCollector).msMtx.Unlock()
			return
		}
		// If we are here, the last memstats are too old or don't exist. We have
		// to wait until our own ReadMemStats finally completes. For that to
		// happen, we have to release the lock.
		void (c$ as goCollector).msMtx.Unlock()
		await $.chanRecv(done)
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as goCollector).msCollect(ch, ms) : goCollector.prototype.msCollect.call(c, ch, ms))
	}

	public async Describe(ch: $.Channel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null): globalThis.Promise<void> {
		const c: goCollector | $.VarRef<goCollector> | null = this;
		const c$: goCollector = c == null ? $.pointerTarget<goCollector>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<goCollector>(c)
		await $.chanSend(ch, (c$ as goCollector).goroutinesDesc)
		await $.chanSend(ch, (c$ as goCollector).threadsDesc)
		await $.chanSend(ch, (c$ as goCollector).gcDesc)
		await $.chanSend(ch, (c$ as goCollector).goInfoDesc)
		for (let __goscriptRangeTarget1 = (c$ as goCollector).msMetrics, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let i = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as {"desc": __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, "_eval": ((_p0: runtime.MemStats | $.VarRef<runtime.MemStats> | null) => number | globalThis.Promise<number>) | null, "valType": __goscript_value.ValueType})))
			await $.chanSend(ch, i.desc)
		}
	}

	public async msCollect(ch: $.Channel<__goscript_metric.Metric | null> | null, ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): globalThis.Promise<void> {
		const c: goCollector | $.VarRef<goCollector> | null = this;
		for (let __goscriptRangeTarget2 = $.pointerValue<goCollector>(c).msMetrics, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let i = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as {"desc": __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, "_eval": ((_p0: runtime.MemStats | $.VarRef<runtime.MemStats> | null) => number | globalThis.Promise<number>) | null, "valType": __goscript_value.ValueType})))
			await $.chanSend(ch, await __goscript_value.MustNewConstMetric(i.desc, i.valType, (__goscriptAwait = i._eval!(ms), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null))
		}
	}

	static __typeInfo = $.registerStructType(
		"prometheus.goCollector",
		() => new goCollector(),
		() => [$.methodSignature("Collect", [["ch", /* @__PURE__ */ $.channelType("prometheus.Metric", "send")]], [], true), $.methodSignature("Describe", [["ch", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]], [], true), $.methodSignature("msCollect", [["ch", /* @__PURE__ */ $.channelType("prometheus.Metric", "send")], ["ms", /* @__PURE__ */ $.pointerType("runtime.MemStats")]], [], true)],
		goCollector,
		() => [/* @__PURE__ */ $.structField("goroutinesDesc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("threadsDesc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [1], 8, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("gcDesc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("goInfoDesc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [3], 24, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("msLast", /* @__PURE__ */ $.pointerType("runtime.MemStats"), [4], 32, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("msLastTimestamp", "time.Time", [5], 40, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("msMtx", "sync.Mutex", [6], 64, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("msMetrics", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }, "prometheus.memStatsMetrics"), [7], 72, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("msRead", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [] } as $.FunctionTypeInfo), [8], 96, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("msMaxWait", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [9], 104, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("msMaxAge", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [10], 112, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export async function NewGoCollector(): globalThis.Promise<__goscript_collector.Collector | null> {
	return $.interfaceValue<__goscript_collector.Collector | null>((await (async () => { const __goscriptLiteralField0 = await __goscript_desc.NewDesc("go_goroutines", "Number of goroutines that currently exist.", null, null); const __goscriptLiteralField1 = await __goscript_desc.NewDesc("go_threads", "Number of OS threads created.", null, null); const __goscriptLiteralField2 = await __goscript_desc.NewDesc("go_gc_duration_seconds", "A summary of the pause duration of garbage collection cycles.", null, null); const __goscriptLiteralField3 = await __goscript_desc.NewDesc("go_info", "Information about the Go environment.", null, $.makeMap<string, string>([["version", runtime.Version()]])); return new goCollector({goroutinesDesc: __goscriptLiteralField0, threadsDesc: __goscriptLiteralField1, gcDesc: __goscriptLiteralField2, goInfoDesc: __goscriptLiteralField3, msLast: new runtime.MemStats(), msRead: runtime.ReadMemStats, msMaxWait: 1000000000n, msMaxAge: 300000000000n, msMetrics: ($.arrayToSlice<{"desc": __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, "_eval": ((_p0: runtime.MemStats | $.VarRef<runtime.MemStats> | null) => number | globalThis.Promise<number>) | null, "valType": __goscript_value.ValueType}>([$.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("alloc_bytes"), "Number of bytes allocated and still in use.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).Alloc)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 2}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("alloc_bytes_total"), "Total number of bytes allocated, even if freed.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).TotalAlloc)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 1}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("sys_bytes"), "Number of bytes obtained from system.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).Sys)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 2}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("lookups_total"), "Total number of pointer lookups.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).Lookups)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 1}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("mallocs_total"), "Total number of mallocs.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).Mallocs)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 1}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("frees_total"), "Total number of frees.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).Frees)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 1}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("heap_alloc_bytes"), "Number of heap bytes allocated and still in use.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).HeapAlloc)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 2}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("heap_sys_bytes"), "Number of heap bytes obtained from system.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).HeapSys)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 2}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("heap_idle_bytes"), "Number of heap bytes waiting to be used.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).HeapIdle)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 2}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("heap_inuse_bytes"), "Number of heap bytes that are in use.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).HeapInuse)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 2}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("heap_released_bytes"), "Number of heap bytes released to OS.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).HeapReleased)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 2}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("heap_objects"), "Number of allocated objects.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).HeapObjects)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 2}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("stack_inuse_bytes"), "Number of bytes in use by the stack allocator.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).StackInuse)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 2}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("stack_sys_bytes"), "Number of bytes obtained from system for stack allocator.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).StackSys)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 2}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("mspan_inuse_bytes"), "Number of bytes in use by mspan structures.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).MSpanInuse)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 2}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("mspan_sys_bytes"), "Number of bytes used for mspan structures obtained from system.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).MSpanSys)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 2}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("mcache_inuse_bytes"), "Number of bytes in use by mcache structures.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).MCacheInuse)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 2}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("mcache_sys_bytes"), "Number of bytes used for mcache structures obtained from system.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).MCacheSys)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 2}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("buck_hash_sys_bytes"), "Number of bytes used by the profiling bucket hash table.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).BuckHashSys)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 2}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("gc_sys_bytes"), "Number of bytes used for garbage collection system metadata.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).GCSys)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 2}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("other_sys_bytes"), "Number of bytes used for other system allocations.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).OtherSys)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 2}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("next_gc_bytes"), "Number of heap bytes when next garbage collection will take place.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).NextGC)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 2}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("last_gc_time_seconds"), "Number of seconds since 1970 of last garbage collection.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return globalThis.Number($.pointerValue<runtime.MemStats>(ms).LastGC) / 1e9
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 2}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] }), $.anonymousStructValue({desc: await __goscript_desc.NewDesc(memstatNamespace("gc_cpu_fraction"), "The fraction of this program's available CPU time used by the GC since the program started.", null, null), _eval: $.functionValue((ms: runtime.MemStats | $.VarRef<runtime.MemStats> | null): number => {
		return $.pointerValue<runtime.MemStats>(ms).GCCPUFraction
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo)), valType: 2}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("eval", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("runtime.MemStats")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [1], 8, false, { key: "_eval", pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("valType", /* @__PURE__ */ $.basicType("int", "prometheus.ValueType"), [2], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })] })]) as memStatsMetrics)}) })()), "*prometheus.goCollector", /* @__PURE__ */ $.pointerType("prometheus.goCollector"))
}

export function memstatNamespace(s: string): string {
	return $.concatString("go_memstats_", s)
}

export async function NewBuildInfoCollector(): globalThis.Promise<__goscript_collector.Collector | null> {
	let path = "unknown"
	let version = "unknown"
	let sum = "unknown"
	{
		let __goscriptTuple0: any = debug.ReadBuildInfo()
		let bi: debug.BuildInfo | $.VarRef<debug.BuildInfo> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (ok) {
			path = $.pointerValue<debug.BuildInfo>(bi).Main.Path
			version = $.pointerValue<debug.BuildInfo>(bi).Main.Version
			sum = $.pointerValue<debug.BuildInfo>(bi).Main.Sum
		}
	}
	let c: __goscript_collector.selfCollector | $.VarRef<__goscript_collector.selfCollector> | null = (await (async () => { const __goscriptLiteralField4 = await __goscript_value.MustNewConstMetric(await __goscript_desc.NewDesc("go_build_info", "Build information about the main Go module.", null, $.makeMap<string, string>([["path", path], ["version", version], ["checksum", sum]])), 2, 1, null); return new __goscript_collector.selfCollector({self: __goscriptLiteralField4}) })())
	void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_collector.selfCollector).init($.pointerValue<__goscript_collector.selfCollector>(c).self) : __goscript_collector.selfCollector.prototype.init.call(c, $.pointerValue<__goscript_collector.selfCollector>(c).self))
	return $.interfaceValue<__goscript_collector.Collector | null>(c, "*prometheus.selfCollector", /* @__PURE__ */ $.pointerType("prometheus.selfCollector"))
}

var __goscriptAwait: any
