// Generated file based on trace.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as template from "@goscript/html/template/index.js"

import * as io from "@goscript/io/index.js"

import * as log from "@goscript/log/index.js"

import * as net from "@goscript/net/index.js"

import * as http from "@goscript/net/http/index.js"

import * as url from "@goscript/net/url/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as timeseries from "@goscript/golang.org/x/net/internal/timeseries/index.js"

import * as template2 from "@goscript/text/template/index.js"

import * as __goscript_events from "./events.gs.ts"

import * as __goscript_histogram from "./histogram.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/html/template/index.js"
import "@goscript/io/index.js"
import "@goscript/log/index.js"
import "@goscript/net/index.js"
import "@goscript/net/http/index.js"
import "@goscript/net/url/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/net/internal/timeseries/index.js"
import "@goscript/text/template/index.js"
import "./events.gs.ts"
import "./histogram.gs.ts"

$.registerTypePackagePath("golang.org/x/net/trace", ["trace.contextKeyT", "trace.Trace", "trace.lazySprintf", "trace.traceSet", "trace.family", "trace.traceBucket", "trace.cond", "trace.minCond", "trace.errorCond", "trace.traceList", "trace.event", "trace.discarded", "trace.trace"])

export type contextKeyT = string

export type Trace = {
	Finish(): void
	LazyLog(x: fmt.Stringer | null, sensitive: boolean): void
	LazyPrintf(format: string, a: $.Slice<any>): void
	SetError(): void
	SetMaxEvents(m: number): void
	SetRecycler(f: ((_p0: any) => void) | null): void
	SetTraceInfo(traceID: bigint, spanID: bigint): void
}

$.registerInterfaceType(
	"trace.Trace",
	null,
	[$.methodSignature("Finish"), $.methodSignature("LazyLog", [["x", "fmt.Stringer"], ["sensitive", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("LazyPrintf", [["format", /* @__PURE__ */ $.basicType("string")], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("SetError"), $.methodSignature("SetMaxEvents", [["m", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("SetRecycler", [["f", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo)]]), $.methodSignature("SetTraceInfo", [["traceID", /* @__PURE__ */ $.basicType("uint64")], ["spanID", /* @__PURE__ */ $.basicType("uint64")]])]
);

export type cond = {
	String(): string | globalThis.Promise<string>
	match(t: trace | $.VarRef<trace> | null): boolean
}

$.registerInterfaceType(
	"trace.cond",
	null,
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("match", [["t", /* @__PURE__ */ $.pointerType("trace.trace")]], [/* @__PURE__ */ $.basicType("bool")])]
);

export type minCond = bigint

$.registerNamedValueType(
	"trace.minCond",
	{String: (receiver: any, ...args: any[]) => (minCond_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), match: (receiver: any, ...args: any[]) => (minCond_match as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("match", [["t", /* @__PURE__ */ $.pointerType("trace.trace")]], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*trace.minCond",
	{String: (receiver: any, ...args: any[]) => (minCond_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), match: (receiver: any, ...args: any[]) => (minCond_match as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("match", [["t", /* @__PURE__ */ $.pointerType("trace.trace")]], [/* @__PURE__ */ $.basicType("bool")])]
);

export type traceList = $.Slice<trace | $.VarRef<trace> | null>

$.registerNamedType("trace.traceList", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("trace.trace")));

$.registerNamedValueType(
	"trace.traceList",
	{Free: (receiver: any, ...args: any[]) => (traceList_Free as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (traceList_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (traceList_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (traceList_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Free"), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*trace.traceList",
	{Free: (receiver: any, ...args: any[]) => (traceList_Free as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (traceList_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (traceList_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (traceList_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Free"), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export type discarded = number

$.registerNamedValueType(
	"*trace.discarded",
	{String: (receiver: any, ...args: any[]) => (discarded_String as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class lazySprintf {
	public get format(): string {
		return this._fields.format
	}

	public set format(value: string) {
		this._fields.format = value
	}

	public get a(): $.Slice<any> {
		return this._fields.a
	}

	public set a(value: $.Slice<any>) {
		this._fields.a = value
	}

	public _fields: {
		format: string
		a: $.Slice<any>
	}

	constructor(init?: Partial<{format?: string, a?: $.Slice<any>}>, __goscriptValue?: boolean) {
		this._fields = {
			format: init?.format ?? ("" as string),
			a: init?.a ?? (null! as $.Slice<any>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lazySprintf {
		return new lazySprintf(this, true)
	}

	public __goscriptAssign(source: lazySprintf): void {
		const target = this._fields
		const values = source._fields
		target.format = values.format
		target.a = values.a
	}

	public async String(): globalThis.Promise<string> {
		const l: lazySprintf | $.VarRef<lazySprintf> | null = this;
		const l$: lazySprintf = l == null ? $.pointerTarget<lazySprintf>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<lazySprintf>(l)
		return fmt.Sprintf((l$ as lazySprintf).format, ...((l$ as lazySprintf).a ?? []))
	}

	static __typeInfo = $.registerStructType(
		"trace.lazySprintf",
		() => new lazySprintf(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		lazySprintf,
		() => [/* @__PURE__ */ $.structField("format", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [1], 16, false, { pkgPath: "golang.org/x/net/trace" })]
	)
}

export class traceSet {
	public get mu(): sync.RWMutex {
		return this._fields.mu
	}

	public set mu(value: sync.RWMutex) {
		this._fields.mu = value
	}

	public get m(): globalThis.Map<trace | $.VarRef<trace> | null, boolean> | null {
		return this._fields.m
	}

	public set m(value: globalThis.Map<trace | $.VarRef<trace> | null, boolean> | null) {
		this._fields.m = value
	}

	public _fields: {
		mu: sync.RWMutex
		m: globalThis.Map<trace | $.VarRef<trace> | null, boolean> | null
	}

	constructor(init?: Partial<{mu?: sync.RWMutex, m?: globalThis.Map<trace | $.VarRef<trace> | null, boolean> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.RWMutex()),
			m: init?.m ?? (null! as globalThis.Map<trace | $.VarRef<trace> | null, boolean> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): traceSet {
		return new traceSet(this, true)
	}

	public __goscriptAssign(source: traceSet): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.m = values.m
	}

	public async Add(tr: trace | $.VarRef<trace> | null): globalThis.Promise<void> {
		let ts: traceSet | $.VarRef<traceSet> | null = this;
		const ts$: traceSet = ts == null ? $.pointerTarget<traceSet>(ts) : (ts as any).__isVarRef === true ? (ts as any).value : (ts as any).__goValue === undefined ? (ts as any) : $.pointerTarget<traceSet>(ts)
		await (ts$ as traceSet).mu.Lock()
		if ((ts$ as traceSet).m == null) {
			;(ts$ as traceSet).m = $.makeMap<trace | $.VarRef<trace> | null, boolean>(undefined, /* @__PURE__ */ $.pointerType("trace.trace"))
		}
		$.mapSet((ts$ as traceSet).m, tr, true)
		void (ts$ as traceSet).mu.Unlock()
	}

	public async FirstN(n: number): globalThis.Promise<traceList> {
		const ts: traceSet | $.VarRef<traceSet> | null = this;
		using __defer = new $.DisposableStack()
		const ts$: traceSet = ts == null ? $.pointerTarget<traceSet>(ts) : (ts as any).__isVarRef === true ? (ts as any).value : (ts as any).__goValue === undefined ? (ts as any) : $.pointerTarget<traceSet>(ts)
		await (ts$ as traceSet).mu.RLock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((ts$ as traceSet).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		if (n > $.len((ts$ as traceSet).m)) {
			n = $.len((ts$ as traceSet).m)
		}
		let trl: traceList = ($.makeSlice<trace | $.VarRef<trace> | null>(0, n) as traceList)

		// Fast path for when no selectivity is needed.
		if (n == $.len((ts$ as traceSet).m)) {
			for (const [tr, __rangeValue] of (ts$ as traceSet).m?.entries() ?? []) {
				void (tr !== null && (tr as any).__isVarRef !== true && (tr as any).__goValue === undefined ? ((tr as any) as trace).ref() : trace.prototype.ref.call(tr))
				trl = ($.appendOne((trl as traceList), tr, $.appendZeros.nil) as traceList)
			}
			await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>(trl, "trace.traceList", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
			return (trl as traceList)
		}

		// Pick the oldest n traces.
		// This is inefficient. See the comment in the traceSet struct.
		for (const [tr, __rangeValue] of (ts$ as traceSet).m?.entries() ?? []) {
			// Put the first n traces into trl in the order they occur.
			// When we have n, sort trl, and thereafter maintain its order.
			if ($.sliceLen((trl as traceList)) < n) {
				void (tr !== null && (tr as any).__isVarRef !== true && (tr as any).__goValue === undefined ? ((tr as any) as trace).ref() : trace.prototype.ref.call(tr))
				trl = ($.appendOne((trl as traceList), tr, $.appendZeros.nil) as traceList)
				if ($.sliceLen((trl as traceList)) == n) {
					// This is guaranteed to happen exactly once during this loop.
					await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>(trl, "trace.traceList", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
				}
				continue
			}
			if ($.markAsStructValue($.cloneStructValue($.pointerValue<trace>(tr).Start)).After($.markAsStructValue($.cloneStructValue($.pointerValue<trace>($.arrayIndex(trl!, n - 1)).Start)))) {
				continue
			}

			// Find where to insert this one.
			void (tr !== null && (tr as any).__isVarRef !== true && (tr as any).__goValue === undefined ? ((tr as any) as trace).ref() : trace.prototype.ref.call(tr))
			let i = sort.Search(n, $.functionValue((i: number): boolean => {
				return $.markAsStructValue($.cloneStructValue($.pointerValue<trace>($.arrayIndex(trl!, i)).Start)).After($.markAsStructValue($.cloneStructValue($.pointerValue<trace>(tr).Start)))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
			await trace.prototype.unref.call($.arrayIndex(trl!, n - 1))
			$.copy(($.goSlice(trl, i + 1, undefined) as traceList), ($.goSlice(trl, i, undefined) as traceList))
			$.sliceElems(trl!)[$.sliceSlot(trl!, i)] = tr
		}

		return (trl as traceList)
	}

	public async Len(): globalThis.Promise<number> {
		const ts: traceSet | $.VarRef<traceSet> | null = this;
		using __defer = new $.DisposableStack()
		const ts$: traceSet = ts == null ? $.pointerTarget<traceSet>(ts) : (ts as any).__isVarRef === true ? (ts as any).value : (ts as any).__goValue === undefined ? (ts as any) : $.pointerTarget<traceSet>(ts)
		await (ts$ as traceSet).mu.RLock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((ts$ as traceSet).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })
		return $.len((ts$ as traceSet).m)
	}

	public async Remove(tr: trace | $.VarRef<trace> | null): globalThis.Promise<void> {
		const ts: traceSet | $.VarRef<traceSet> | null = this;
		const ts$: traceSet = ts == null ? $.pointerTarget<traceSet>(ts) : (ts as any).__isVarRef === true ? (ts as any).value : (ts as any).__goValue === undefined ? (ts as any) : $.pointerTarget<traceSet>(ts)
		await (ts$ as traceSet).mu.Lock()
		$.deleteMapEntry((ts$ as traceSet).m, tr)
		void (ts$ as traceSet).mu.Unlock()
	}

	static __typeInfo = $.registerStructType(
		"trace.traceSet",
		() => new traceSet(),
		() => [$.methodSignature("Add", [["tr", /* @__PURE__ */ $.pointerType("trace.trace")]], [], true), $.methodSignature("FirstN", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("trace.trace"), "trace.traceList")], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Remove", [["tr", /* @__PURE__ */ $.pointerType("trace.trace")]], [], true)],
		traceSet,
		() => [/* @__PURE__ */ $.structField("mu", "sync.RWMutex", [0], 0, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("m", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("trace.trace"), /* @__PURE__ */ $.basicType("bool")), [1], 24, false, { pkgPath: "golang.org/x/net/trace" })]
	)
}

export class family {
	// traces may occur in multiple buckets.
	public get Buckets(): (traceBucket | $.VarRef<traceBucket> | null)[] {
		return this._fields.Buckets
	}

	public set Buckets(value: (traceBucket | $.VarRef<traceBucket> | null)[]) {
		this._fields.Buckets = value
	}

	// latency time series
	public get LatencyMu(): sync.RWMutex {
		return this._fields.LatencyMu
	}

	public set LatencyMu(value: sync.RWMutex) {
		this._fields.LatencyMu = value
	}

	public get Latency(): timeseries.MinuteHourSeries | $.VarRef<timeseries.MinuteHourSeries> | null {
		return this._fields.Latency
	}

	public set Latency(value: timeseries.MinuteHourSeries | $.VarRef<timeseries.MinuteHourSeries> | null) {
		this._fields.Latency = value
	}

	public _fields: {
		Buckets: (traceBucket | $.VarRef<traceBucket> | null)[]
		LatencyMu: sync.RWMutex
		Latency: timeseries.MinuteHourSeries | $.VarRef<timeseries.MinuteHourSeries> | null
	}

	constructor(init?: Partial<{Buckets?: (traceBucket | $.VarRef<traceBucket> | null)[], LatencyMu?: sync.RWMutex, Latency?: timeseries.MinuteHourSeries | $.VarRef<timeseries.MinuteHourSeries> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Buckets: init?.Buckets !== undefined ? $.cloneArrayValue(init.Buckets, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType("trace.traceBucket"), 9)) : $.arrayValue(globalThis.Array.from({ length: 9 }, () => null)),
			LatencyMu: init?.LatencyMu ? $.markAsStructValue($.cloneStructValue(init.LatencyMu)) : $.markAsStructValue(new sync.RWMutex()),
			Latency: init?.Latency ?? (null! as timeseries.MinuteHourSeries | $.VarRef<timeseries.MinuteHourSeries> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): family {
		return new family(this, true)
	}

	public __goscriptAssign(source: family): void {
		const target = this._fields
		const values = source._fields
		target.Buckets = $.assignFieldValue(target.Buckets, values.Buckets, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType("trace.traceBucket"), 9))
		$.assignStruct(target.LatencyMu, values.LatencyMu)
		target.Latency = values.Latency
	}

	static __typeInfo = $.registerStructType(
		"trace.family",
		() => new family(),
		() => [],
		family,
		() => [/* @__PURE__ */ $.structField("Buckets", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType("trace.traceBucket"), 9), [0], 0, true), /* @__PURE__ */ $.structField("LatencyMu", "sync.RWMutex", [1], 72, true), /* @__PURE__ */ $.structField("Latency", /* @__PURE__ */ $.pointerType("timeseries.MinuteHourSeries"), [2], 96, true)]
	)
}

export class traceBucket {
	public get Cond(): cond | null {
		return this._fields.Cond
	}

	public set Cond(value: cond | null) {
		this._fields.Cond = value
	}

	// Ring buffer implementation of a fixed-size FIFO queue.
	public get mu(): sync.RWMutex {
		return this._fields.mu
	}

	public set mu(value: sync.RWMutex) {
		this._fields.mu = value
	}

	public get buf(): (trace | $.VarRef<trace> | null)[] {
		return this._fields.buf
	}

	public set buf(value: (trace | $.VarRef<trace> | null)[]) {
		this._fields.buf = value
	}

	public get start(): number {
		return this._fields.start
	}

	public set start(value: number) {
		this._fields.start = value
	}

	public get length(): number {
		return this._fields.length
	}

	public set length(value: number) {
		this._fields.length = value
	}

	public _fields: {
		Cond: cond | null
		mu: sync.RWMutex
		buf: (trace | $.VarRef<trace> | null)[]
		start: number
		length: number
	}

	constructor(init?: Partial<{Cond?: cond | null, mu?: sync.RWMutex, buf?: (trace | $.VarRef<trace> | null)[], start?: number, length?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Cond: init?.Cond ?? (null! as cond | null),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.RWMutex()),
			buf: init?.buf !== undefined ? $.cloneArrayValue(init.buf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType("trace.trace"), 10)) : $.arrayValue(globalThis.Array.from({ length: 10 }, () => null)),
			start: init?.start ?? (0 as number),
			length: init?.length ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): traceBucket {
		return new traceBucket(this, true)
	}

	public __goscriptAssign(source: traceBucket): void {
		const target = this._fields
		const values = source._fields
		target.Cond = $.assignFieldValue(target.Cond, values.Cond, "trace.cond")
		$.assignStruct(target.mu, values.mu)
		target.buf = $.assignFieldValue(target.buf, values.buf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType("trace.trace"), 10))
		target.start = values.start
		target.length = values.length
	}

	public async Add(tr: trace | $.VarRef<trace> | null): globalThis.Promise<void> {
		let b: traceBucket | $.VarRef<traceBucket> | null = this;
		using __defer = new $.DisposableStack()
		const b$: traceBucket = b == null ? $.pointerTarget<traceBucket>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<traceBucket>(b)
		await (b$ as traceBucket).mu.Lock()
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Unlock())((b$ as traceBucket).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee5() })

		let i = (b$ as traceBucket).start + (b$ as traceBucket).length
		if (i >= 10) {
			i = i - (10)
		}
		if ((b$ as traceBucket).length == 10) {
			// "Remove" an element from the bucket.
			await trace.prototype.unref.call($.arrayIndex((b$ as traceBucket).buf, i));
			;(b$ as traceBucket).start++
			if ((b$ as traceBucket).start == 10) {
				;(b$ as traceBucket).start = 0
			}
		}
		;(b$ as traceBucket).buf[i] = tr
		if ((b$ as traceBucket).length < 10) {
			;(b$ as traceBucket).length++
		}
		void (tr !== null && (tr as any).__isVarRef !== true && (tr as any).__goValue === undefined ? ((tr as any) as trace).ref() : trace.prototype.ref.call(tr))
	}

	public async Copy(tracedOnly: boolean): globalThis.Promise<traceList> {
		const b: traceBucket | $.VarRef<traceBucket> | null = this;
		using __defer = new $.DisposableStack()
		const b$: traceBucket = b == null ? $.pointerTarget<traceBucket>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<traceBucket>(b)
		await (b$ as traceBucket).mu.RLock()
		const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((b$ as traceBucket).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee6() })

		let trl: traceList = ($.makeSlice<trace | $.VarRef<trace> | null>(0, (b$ as traceBucket).length) as traceList)
		for (let i = 0, x = (b$ as traceBucket).start; i < (b$ as traceBucket).length; i++) {
			let tr: trace | $.VarRef<trace> | null = $.arrayIndex((b$ as traceBucket).buf, x)
			if (!tracedOnly || ($.pointerValue<trace>(tr).spanID != 0n)) {
				void (tr !== null && (tr as any).__isVarRef !== true && (tr as any).__goValue === undefined ? ((tr as any) as trace).ref() : trace.prototype.ref.call(tr))
				trl = ($.appendOne((trl as traceList), tr, $.appendZeros.nil) as traceList)
			}
			x++
			if (x == (b$ as traceBucket).length) {
				x = 0
			}
		}
		return (trl as traceList)
	}

	public async Empty(): globalThis.Promise<boolean> {
		const b: traceBucket | $.VarRef<traceBucket> | null = this;
		using __defer = new $.DisposableStack()
		const b$: traceBucket = b == null ? $.pointerTarget<traceBucket>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<traceBucket>(b)
		await (b$ as traceBucket).mu.RLock()
		const __goscriptDeferCallee7 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((b$ as traceBucket).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee7() })
		return (b$ as traceBucket).length == 0
	}

	static __typeInfo = $.registerStructType(
		"trace.traceBucket",
		() => new traceBucket(),
		() => [$.methodSignature("Add", [["tr", /* @__PURE__ */ $.pointerType("trace.trace")]], [], true), $.methodSignature("Copy", [["tracedOnly", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("trace.trace"), "trace.traceList")], true), $.methodSignature("Empty", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		traceBucket,
		() => [/* @__PURE__ */ $.structField("Cond", "trace.cond", [0], 0, true), /* @__PURE__ */ $.structField("mu", "sync.RWMutex", [1], 16, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType("trace.trace"), 10), [2], 40, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("start", /* @__PURE__ */ $.basicType("int"), [3], 120, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("length", /* @__PURE__ */ $.basicType("int"), [4], 128, false, { pkgPath: "golang.org/x/net/trace" })]
	)
}

export class errorCond {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errorCond {
		return new errorCond(this, true)
	}

	public __goscriptAssign(source: errorCond): void {
	}

	public String(): string {
		const e = this;
		return "errors"
	}

	public match(t: trace | $.VarRef<trace> | null): boolean {
		const e = this;
		return $.pointerValue<trace>(t).IsError
	}

	static __typeInfo = $.registerStructType(
		"trace.errorCond",
		() => new errorCond(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("match", [["t", /* @__PURE__ */ $.pointerType("trace.trace")]], [/* @__PURE__ */ $.basicType("bool")])],
		errorCond,
		() => []
	)
}

export class event {
	public get When(): time.Time {
		return this._fields.When
	}

	public set When(value: time.Time) {
		this._fields.When = value
	}

	public get Elapsed(): time.Duration {
		return this._fields.Elapsed
	}

	public set Elapsed(value: time.Duration) {
		this._fields.Elapsed = value
	}

	public get NewDay(): boolean {
		return this._fields.NewDay
	}

	public set NewDay(value: boolean) {
		this._fields.NewDay = value
	}

	public get Recyclable(): boolean {
		return this._fields.Recyclable
	}

	public set Recyclable(value: boolean) {
		this._fields.Recyclable = value
	}

	public get Sensitive(): boolean {
		return this._fields.Sensitive
	}

	public set Sensitive(value: boolean) {
		this._fields.Sensitive = value
	}

	public get What(): any {
		return this._fields.What
	}

	public set What(value: any) {
		this._fields.What = value
	}

	public _fields: {
		When: time.Time
		Elapsed: time.Duration
		NewDay: boolean
		Recyclable: boolean
		Sensitive: boolean
		What: any
	}

	constructor(init?: Partial<{When?: time.Time, Elapsed?: time.Duration, NewDay?: boolean, Recyclable?: boolean, Sensitive?: boolean, What?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			When: init?.When ? $.markAsStructValue($.cloneStructValue(init.When)) : $.markAsStructValue(new time.Time()),
			Elapsed: init?.Elapsed ?? (0n as time.Duration),
			NewDay: init?.NewDay ?? (false as boolean),
			Recyclable: init?.Recyclable ?? (false as boolean),
			Sensitive: init?.Sensitive ?? (false as boolean),
			What: init?.What ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): event {
		return new event(this, true)
	}

	public __goscriptAssign(source: event): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.When, values.When)
		target.Elapsed = values.Elapsed
		target.NewDay = values.NewDay
		target.Recyclable = values.Recyclable
		target.Sensitive = values.Sensitive
		target.What = $.assignFieldValue(target.What, values.What, { kind: $.TypeKind.Interface, methods: [] })
	}

	public WhenString(): string {
		const e = this;
		if (e.NewDay) {
			return $.markAsStructValue($.cloneStructValue(e.When)).Format("2006/01/02 15:04:05.000000")
		}
		return $.markAsStructValue($.cloneStructValue(e.When)).Format("15:04:05.000000")
	}

	static __typeInfo = $.registerStructType(
		"trace.event",
		() => new event(),
		() => [$.methodSignature("WhenString", [], [/* @__PURE__ */ $.basicType("string")])],
		event,
		() => [/* @__PURE__ */ $.structField("When", "time.Time", [0], 0, true), /* @__PURE__ */ $.structField("Elapsed", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 24, true), /* @__PURE__ */ $.structField("NewDay", /* @__PURE__ */ $.basicType("bool"), [2], 32, true), /* @__PURE__ */ $.structField("Recyclable", /* @__PURE__ */ $.basicType("bool"), [3], 33, true), /* @__PURE__ */ $.structField("Sensitive", /* @__PURE__ */ $.basicType("bool"), [4], 34, true), /* @__PURE__ */ $.structField("What", { kind: $.TypeKind.Interface, methods: [] }, [5], 40, true)]
	)
}

export class trace {
	// Family is the top-level grouping of traces to which this belongs.
	public get Family(): string {
		return this._fields.Family
	}

	public set Family(value: string) {
		this._fields.Family = value
	}

	// Title is the title of this trace.
	public get Title(): string {
		return this._fields.Title
	}

	public set Title(value: string) {
		this._fields.Title = value
	}

	// Start time of the this trace.
	public get Start(): time.Time {
		return this._fields.Start
	}

	public set Start(value: time.Time) {
		this._fields.Start = value
	}

	public get mu(): sync.RWMutex {
		return this._fields.mu
	}

	public set mu(value: sync.RWMutex) {
		this._fields.mu = value
	}

	public get events(): $.Slice<event> {
		return this._fields.events
	}

	public set events(value: $.Slice<event>) {
		this._fields.events = value
	}

	public get maxEvents(): number {
		return this._fields.maxEvents
	}

	public set maxEvents(value: number) {
		this._fields.maxEvents = value
	}

	public get recycler(): ((_p0: any) => void) | null {
		return this._fields.recycler
	}

	public set recycler(value: ((_p0: any) => void) | null) {
		this._fields.recycler = value
	}

	public get IsError(): boolean {
		return this._fields.IsError
	}

	public set IsError(value: boolean) {
		this._fields.IsError = value
	}

	public get Elapsed(): time.Duration {
		return this._fields.Elapsed
	}

	public set Elapsed(value: time.Duration) {
		this._fields.Elapsed = value
	}

	public get traceID(): bigint {
		return this._fields.traceID
	}

	public set traceID(value: bigint) {
		this._fields.traceID = value
	}

	public get spanID(): bigint {
		return this._fields.spanID
	}

	public set spanID(value: bigint) {
		this._fields.spanID = value
	}

	public get refs(): number {
		return this._fields.refs
	}

	public set refs(value: number) {
		this._fields.refs = value
	}

	public get disc(): discarded {
		return this._fields.disc
	}

	public set disc(value: discarded) {
		this._fields.disc = value
	}

	public get finishStack(): $.Slice<number> {
		return this._fields.finishStack
	}

	public set finishStack(value: $.Slice<number>) {
		this._fields.finishStack = value
	}

	public get eventsBuf(): event[] {
		return this._fields.eventsBuf
	}

	public set eventsBuf(value: event[]) {
		this._fields.eventsBuf = value
	}

	public _fields: {
		Family: string
		Title: string
		Start: time.Time
		mu: sync.RWMutex
		events: $.Slice<event>
		maxEvents: number
		recycler: ((_p0: any) => void) | null
		IsError: boolean
		Elapsed: time.Duration
		traceID: bigint
		spanID: bigint
		refs: number
		disc: discarded
		finishStack: $.Slice<number>
		eventsBuf: event[]
	}

	constructor(init?: Partial<{Family?: string, Title?: string, Start?: time.Time, mu?: sync.RWMutex, events?: $.Slice<event>, maxEvents?: number, recycler?: ((_p0: any) => void) | null, IsError?: boolean, Elapsed?: time.Duration, traceID?: bigint, spanID?: bigint, refs?: number, disc?: discarded, finishStack?: $.Slice<number>, eventsBuf?: event[]}>, __goscriptValue?: boolean) {
		this._fields = {
			Family: init?.Family ?? ("" as string),
			Title: init?.Title ?? ("" as string),
			Start: init?.Start ? $.markAsStructValue($.cloneStructValue(init.Start)) : $.markAsStructValue(new time.Time()),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.RWMutex()),
			events: init?.events ?? (null! as $.Slice<event>),
			maxEvents: init?.maxEvents ?? (0 as number),
			recycler: init?.recycler ?? (null! as ((_p0: any) => void) | null),
			IsError: init?.IsError ?? (false as boolean),
			Elapsed: init?.Elapsed ?? (0n as time.Duration),
			traceID: init?.traceID ?? (0n as bigint),
			spanID: init?.spanID ?? (0n as bigint),
			refs: init?.refs ?? (0 as number),
			disc: init?.disc ?? (0 as discarded),
			finishStack: init?.finishStack ?? (null! as $.Slice<number>),
			eventsBuf: init?.eventsBuf !== undefined ? $.cloneArrayValue(init.eventsBuf, /* @__PURE__ */ $.arrayType("trace.event", 4)) : $.arrayValue(globalThis.Array.from({ length: 4 }, () => new event(undefined, true)), /* @__PURE__ */ $.arrayType("trace.event", 4))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): trace {
		return new trace(this, true)
	}

	public __goscriptAssign(source: trace): void {
		const target = this._fields
		const values = source._fields
		target.Family = values.Family
		target.Title = values.Title
		$.assignStruct(target.Start, values.Start)
		$.assignStruct(target.mu, values.mu)
		target.events = values.events
		target.maxEvents = values.maxEvents
		target.recycler = values.recycler
		target.IsError = values.IsError
		target.Elapsed = values.Elapsed
		target.traceID = values.traceID
		target.spanID = values.spanID
		target.refs = values.refs
		target.disc = values.disc
		target.finishStack = values.finishStack
		target.eventsBuf = $.assignFieldValue(target.eventsBuf, values.eventsBuf, /* @__PURE__ */ $.arrayType("trace.event", 4))
	}

	public async ElapsedTime(): globalThis.Promise<string> {
		const tr: trace | $.VarRef<trace> | null = this;
		const tr$: trace = tr == null ? $.pointerTarget<trace>(tr) : (tr as any).__isVarRef === true ? (tr as any).value : (tr as any).__goValue === undefined ? (tr as any) : $.pointerTarget<trace>(tr)
		await (tr$ as trace).mu.RLock()
		let t = (tr$ as trace).Elapsed
		void (tr$ as trace).mu.RUnlock()

		if (t == 0n) {
			// Active trace.
			t = time.Since($.markAsStructValue($.cloneStructValue((tr$ as trace).Start)))
		}
		return fmt.Sprintf("%.6f", $.basicInterfaceValue(time.Duration_Seconds(t), "float64"))
	}

	public async Events(): globalThis.Promise<$.Slice<event>> {
		const tr: trace | $.VarRef<trace> | null = this;
		using __defer = new $.DisposableStack()
		const tr$: trace = tr == null ? $.pointerTarget<trace>(tr) : (tr as any).__isVarRef === true ? (tr as any).value : (tr as any).__goValue === undefined ? (tr as any) : $.pointerTarget<trace>(tr)
		await (tr$ as trace).mu.RLock()
		const __goscriptDeferCallee8 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((tr$ as trace).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee8() })
		return (tr$ as trace).events
	}

	public async Finish(): globalThis.Promise<void> {
		let tr: trace | $.VarRef<trace> | null = this;
		const tr$: trace = tr == null ? $.pointerTarget<trace>(tr) : (tr as any).__isVarRef === true ? (tr as any).value : (tr as any).__goValue === undefined ? (tr as any) : $.pointerTarget<trace>(tr)
		let elapsed = time.Since($.markAsStructValue($.cloneStructValue((tr$ as trace).Start)))
		await (tr$ as trace).mu.Lock();
		;(tr$ as trace).Elapsed = elapsed
		void (tr$ as trace).mu.Unlock()

		if (DebugUseAfterFinish) {
			let buf: $.Slice<number> = $.makeSlice<number>(4096, undefined, "byte")
			let n = runtime.Stack(buf, false);
			;(tr$ as trace).finishStack = $.goSlice(buf, undefined, n)
		}

		await activeMu.value.RLock()
		let m: traceSet | $.VarRef<traceSet> | null = $.mapGet<string, traceSet | $.VarRef<traceSet> | null, traceSet | $.VarRef<traceSet> | null>(activeTraces, (tr$ as trace).Family, null)[0]
		activeMu.value.RUnlock()
		await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as traceSet).Remove(tr) : traceSet.prototype.Remove.call(m, tr))

		let f: family | $.VarRef<family> | null = await getFamily((tr$ as trace).Family, true)
		let f$: family = f == null ? $.pointerTarget<family>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<family>(f)
		await (tr$ as trace).mu.RLock()
		for (let __goscriptRangeTarget1 = (f$ as family).Buckets, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let b = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as traceBucket | $.VarRef<traceBucket> | null)
			if ((__goscriptAwait = $.pointerValue<Exclude<cond, null>>($.pointerValue<traceBucket>(b).Cond).match(tr), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as traceBucket).Add(tr) : traceBucket.prototype.Add.call(b, tr))
			}
		}
		void (tr$ as trace).mu.RUnlock()

		// Add a sample of elapsed time as microseconds to the family's timeseries
		let h: __goscript_histogram.histogram | $.VarRef<__goscript_histogram.histogram> | null = new __goscript_histogram.histogram()
		void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as __goscript_histogram.histogram).addMeasurement($.int64Div(time.Duration_Nanoseconds(elapsed), 1000n)) : __goscript_histogram.histogram.prototype.addMeasurement.call(h, $.int64Div(time.Duration_Nanoseconds(elapsed), 1000n)))
		await (f$ as family).LatencyMu.Lock()
		await $.pointerValue<timeseries.MinuteHourSeries>((f$ as family).Latency).timeSeries.Add($.interfaceValue<timeseries.Observable | null>(h, "*trace.histogram", /* @__PURE__ */ $.pointerType("trace.histogram")))
		void (f$ as family).LatencyMu.Unlock()

		await (tr !== null && (tr as any).__isVarRef !== true && (tr as any).__goValue === undefined ? ((tr as any) as trace).unref() : trace.prototype.unref.call(tr))
	}

	public async LazyLog(x: fmt.Stringer | null, sensitive: boolean): globalThis.Promise<void> {
		const tr: trace | $.VarRef<trace> | null = this;
		await (tr !== null && (tr as any).__isVarRef !== true && (tr as any).__goValue === undefined ? ((tr as any) as trace).addEvent((x as any), true, sensitive) : trace.prototype.addEvent.call(tr, (x as any), true, sensitive))
	}

	public async LazyPrintf(format: string, a: $.Slice<any>): globalThis.Promise<void> {
		const tr: trace | $.VarRef<trace> | null = this;
		await trace.prototype.addEvent.call(tr, $.interfaceValue(new lazySprintf({format: format, a: a}), "*trace.lazySprintf", /* @__PURE__ */ $.pointerType("trace.lazySprintf")), false, false)
	}

	public async SetError(): globalThis.Promise<void> {
		let tr: trace | $.VarRef<trace> | null = this;
		const tr$: trace = tr == null ? $.pointerTarget<trace>(tr) : (tr as any).__isVarRef === true ? (tr as any).value : (tr as any).__goValue === undefined ? (tr as any) : $.pointerTarget<trace>(tr)
		await (tr$ as trace).mu.Lock();
		;(tr$ as trace).IsError = true
		void (tr$ as trace).mu.Unlock()
	}

	public async SetMaxEvents(m: number): globalThis.Promise<void> {
		let tr: trace | $.VarRef<trace> | null = this;
		const tr$: trace = tr == null ? $.pointerTarget<trace>(tr) : (tr as any).__isVarRef === true ? (tr as any).value : (tr as any).__goValue === undefined ? (tr as any) : $.pointerTarget<trace>(tr)
		await (tr$ as trace).mu.Lock()
		// Always keep at least three events: first, discarded count, last.
		if (($.sliceLen((tr$ as trace).events) == 0) && (m > 3)) {
			;(tr$ as trace).maxEvents = m
		}
		void (tr$ as trace).mu.Unlock()
	}

	public async SetRecycler(f: ((_p0: any) => void) | null): globalThis.Promise<void> {
		let tr: trace | $.VarRef<trace> | null = this;
		const tr$: trace = tr == null ? $.pointerTarget<trace>(tr) : (tr as any).__isVarRef === true ? (tr as any).value : (tr as any).__goValue === undefined ? (tr as any) : $.pointerTarget<trace>(tr)
		await (tr$ as trace).mu.Lock();
		;(tr$ as trace).recycler = f
		void (tr$ as trace).mu.Unlock()
	}

	public async SetTraceInfo(traceID: bigint, spanID: bigint): globalThis.Promise<void> {
		let tr: trace | $.VarRef<trace> | null = this;
		const tr$: trace = tr == null ? $.pointerTarget<trace>(tr) : (tr as any).__isVarRef === true ? (tr as any).value : (tr as any).__goValue === undefined ? (tr as any) : $.pointerTarget<trace>(tr)
		await (tr$ as trace).mu.Lock()
		let __goscriptAssign2_0: bigint = traceID
		let __goscriptAssign2_1: bigint = spanID;
		;(tr$ as trace).traceID = __goscriptAssign2_0;
		;(tr$ as trace).spanID = __goscriptAssign2_1
		void (tr$ as trace).mu.Unlock()
	}

	public When(): string {
		const tr: trace | $.VarRef<trace> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<trace>(tr).Start)).Format("2006/01/02 15:04:05.000000")
	}

	public async addEvent(x: any, recyclable: boolean, sensitive: boolean): globalThis.Promise<void> {
		let tr: trace | $.VarRef<trace> | null = this;
		const tr$: trace = tr == null ? $.pointerTarget<trace>(tr) : (tr as any).__isVarRef === true ? (tr as any).value : (tr as any).__goValue === undefined ? (tr as any) : $.pointerTarget<trace>(tr)
		if (DebugUseAfterFinish && ((tr$ as trace).finishStack != null)) {
			let buf: $.Slice<number> = $.makeSlice<number>(4096, undefined, "byte")
			let n = runtime.Stack(buf, false)
			await log.Printf("net/trace: trace used after finish:\nFinished at:\n%s\nUsed at:\n%s", $.arrayToSlice<any>([$.interfaceValue((tr$ as trace).finishStack, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), $.interfaceValue($.goSlice(buf, undefined, n), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))
		}

		/*
				NOTE TO DEBUGGERS

				If you are here because your program panicked in this code,
				it is almost definitely the fault of code using this package,
				and very unlikely to be the fault of this code.

				The most likely scenario is that some code elsewhere is using
				a trace.Trace after its Finish method is called.
				You can temporarily set the DebugUseAfterFinish var
				to help discover where that is; do not leave that var set,
				since it makes this package much less efficient.
			*/

		let e = (() => { const __goscriptLiteralField1 = $.markAsStructValue($.cloneStructValue(time.Now())); return new event({When: __goscriptLiteralField1, What: x, Recyclable: recyclable, Sensitive: sensitive}, true) })()
		await (tr$ as trace).mu.Lock()
		let __goscriptTuple3: any = (tr !== null && (tr as any).__isVarRef !== true && (tr as any).__goValue === undefined ? ((tr as any) as trace).delta(e.When) : trace.prototype.delta.call(tr, e.When))
		e.Elapsed = __goscriptTuple3[0]
		e.NewDay = __goscriptTuple3[1]
		if ($.sliceLen((tr$ as trace).events) < (tr$ as trace).maxEvents) {
			;(tr$ as trace).events = $.appendOne((tr$ as trace).events, (e).clone())
		} else {
			// Discard the middle events.
			let di = $.int(globalThis.Math.trunc(((tr$ as trace).maxEvents - 1) / 2))
			{
				let __goscriptTuple4: any = $.typeAssertTuple<$.VarRef<discarded> | null>($.arrayIndex((tr$ as trace).events!, di).What, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "trace.discarded")))
				let d: $.VarRef<discarded> | null = __goscriptTuple4[0]
				let ok = __goscriptTuple4[1]
				if (ok) {
					d!.value++
				} else {
					// disc starts at two to count for the event it is replacing,
					// plus the next one that we are about to drop.
					;(tr$ as trace).disc = 2
					if (((tr$ as trace).recycler != null) && $.arrayIndex((tr$ as trace).events!, di).Recyclable) {
						const __goscriptDeferCallee9 = (tr$ as trace).recycler
						const __goscriptDeferArg1 = $.arrayIndex((tr$ as trace).events!, di).What
						queueMicrotask(async () => { (__goscriptAwait = __goscriptDeferCallee9!(__goscriptDeferArg1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
					}
					$.arrayIndex((tr$ as trace).events!, di).What = $.namedValueInterfaceValue<any>($.fieldRef((tr$ as trace)._fields, "disc"), "*trace.discarded", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8())
				}
			}
			// The timestamp of the discarded meta-event should be
			// the time of the last event it is representing.
			$.assignStruct($.arrayIndex((tr$ as trace).events!, di).When, $.arrayIndex((tr$ as trace).events!, di + 1).When)

			if (((tr$ as trace).recycler != null) && $.arrayIndex((tr$ as trace).events!, di + 1).Recyclable) {
				const __goscriptDeferCallee10 = (tr$ as trace).recycler
				const __goscriptDeferArg2 = $.arrayIndex((tr$ as trace).events!, di + 1).What
				queueMicrotask(async () => { (__goscriptAwait = __goscriptDeferCallee10!(__goscriptDeferArg2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			}
			$.copy($.goSlice((tr$ as trace).events, di + 1, undefined), $.goSlice((tr$ as trace).events, di + 2, undefined))
			$.assignStruct($.sliceElems((tr$ as trace).events!)[$.sliceSlot((tr$ as trace).events!, (tr$ as trace).maxEvents - 1)], e)
		}
		void (tr$ as trace).mu.Unlock()
	}

	public delta(t: time.Time): [time.Duration, boolean] {
		const tr: trace | $.VarRef<trace> | null = this;
		const tr$: trace = tr == null ? $.pointerTarget<trace>(tr) : (tr as any).__isVarRef === true ? (tr as any).value : (tr as any).__goValue === undefined ? (tr as any) : $.pointerTarget<trace>(tr)
		if ($.sliceLen((tr$ as trace).events) == 0) {
			return [$.markAsStructValue($.cloneStructValue(t)).Sub($.markAsStructValue($.cloneStructValue((tr$ as trace).Start))), false]
		}
		let prev = $.markAsStructValue($.cloneStructValue($.arrayIndex((tr$ as trace).events!, $.sliceLen((tr$ as trace).events) - 1).When))
		return [$.markAsStructValue($.cloneStructValue(t)).Sub($.markAsStructValue($.cloneStructValue(prev))), $.markAsStructValue($.cloneStructValue(prev)).Day() != $.markAsStructValue($.cloneStructValue(t)).Day()]
	}

	public ref(): void {
		const tr: trace | $.VarRef<trace> | null = this;
		atomic.AddInt32($.fieldRef($.pointerValue<trace>(tr)._fields, "refs"), 1)
	}

	public async reset(): globalThis.Promise<void> {
		let tr: trace | $.VarRef<trace> | null = this;
		const tr$: trace = tr == null ? $.pointerTarget<trace>(tr) : (tr as any).__isVarRef === true ? (tr as any).value : (tr as any).__goValue === undefined ? (tr as any) : $.pointerTarget<trace>(tr);
		// Clear all but the mutex. Mutexes may not be copied, even when unlocked.
		;(tr$ as trace).Family = "";
		;(tr$ as trace).Title = ""
		$.assignStruct((tr$ as trace).Start, $.markAsStructValue(new time.Time()))

		await (tr$ as trace).mu.Lock();
		;(tr$ as trace).Elapsed = 0n;
		;(tr$ as trace).traceID = 0n;
		;(tr$ as trace).spanID = 0n;
		;(tr$ as trace).IsError = false;
		;(tr$ as trace).maxEvents = 0;
		;(tr$ as trace).events = null;
		;(tr$ as trace).recycler = (null as ((_p0: any) => void) | null)
		void (tr$ as trace).mu.Unlock();

		;(tr$ as trace).refs = 0;
		;(tr$ as trace).disc = 0;
		;(tr$ as trace).finishStack = null
		for (let __goscriptRangeTarget2 = (tr$ as trace).eventsBuf, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
			$.assignStruct((tr$ as trace).eventsBuf[i], new event(undefined, true))
		}
	}

	public async unref(): globalThis.Promise<void> {
		const tr: trace | $.VarRef<trace> | null = this;
		const tr$: trace = tr == null ? $.pointerTarget<trace>(tr) : (tr as any).__isVarRef === true ? (tr as any).value : (tr as any).__goValue === undefined ? (tr as any) : $.pointerTarget<trace>(tr)
		if (atomic.AddInt32($.fieldRef((tr$ as trace)._fields, "refs"), -1) == 0) {
			await (tr$ as trace).mu.RLock()
			if ((tr$ as trace).recycler != null) {
				// freeTrace clears tr, so we hold tr.recycler and tr.events here.
				const __goscriptDeferArg3 = (tr$ as trace).recycler
				const __goscriptDeferArg4 = (tr$ as trace).events
				queueMicrotask(async () => { await (async (f: ((_p0: any) => void) | null, es: $.Slice<event>): globalThis.Promise<void> => {
					for (let __goscriptRangeTarget3 = es, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
						let e = ((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as event)).clone()
						if (e.Recyclable) {
							void (__goscriptAwait = f!(e.What), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
					}
				})(__goscriptDeferArg3, __goscriptDeferArg4) })
			}
			void (tr$ as trace).mu.RUnlock()

			await freeTrace(tr)
		}
	}

	static __typeInfo = $.registerStructType(
		"trace.trace",
		() => new trace(),
		() => [$.methodSignature("ElapsedTime", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Events", [], [/* @__PURE__ */ $.sliceType("trace.event")], true), $.methodSignature("Finish", [], [], true), $.methodSignature("LazyLog", [["x", "fmt.Stringer"], ["sensitive", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("LazyPrintf", [["format", /* @__PURE__ */ $.basicType("string")], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("SetError", [], [], true), $.methodSignature("SetMaxEvents", [["m", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("SetRecycler", [["f", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("SetTraceInfo", [["traceID", /* @__PURE__ */ $.basicType("uint64")], ["spanID", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("When", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("addEvent", [["x", { kind: $.TypeKind.Interface, methods: [] }], ["recyclable", /* @__PURE__ */ $.basicType("bool")], ["sensitive", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("delta", [["t", "time.Time"]], [/* @__PURE__ */ $.basicType("int64", "time.Duration"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("ref", [], [], true), $.methodSignature("reset", [], [], true), $.methodSignature("unref", [], [], true)],
		trace,
		() => [/* @__PURE__ */ $.structField("Family", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Title", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Start", "time.Time", [2], 32, true), /* @__PURE__ */ $.structField("mu", "sync.RWMutex", [3], 56, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("events", /* @__PURE__ */ $.sliceType("trace.event"), [4], 80, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("maxEvents", /* @__PURE__ */ $.basicType("int"), [5], 104, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("recycler", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), [6], 112, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("IsError", /* @__PURE__ */ $.basicType("bool"), [7], 120, true), /* @__PURE__ */ $.structField("Elapsed", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [8], 128, true), /* @__PURE__ */ $.structField("traceID", /* @__PURE__ */ $.basicType("uint64"), [9], 136, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("spanID", /* @__PURE__ */ $.basicType("uint64"), [10], 144, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("refs", /* @__PURE__ */ $.basicType("int32"), [11], 152, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("disc", /* @__PURE__ */ $.basicType("int", "trace.discarded"), [12], 160, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("finishStack", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [13], 168, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("eventsBuf", /* @__PURE__ */ $.arrayType("trace.event", 4), [14], 192, false, { pkgPath: "golang.org/x/net/trace" })]
	)
}

export const debugRequestsPath: string = "/debug/requests"

export const debugEventsPath: string = "/debug/events"

export const bucketsPerFamily: number = 9

export const tracesPerBucket: number = 10

export const maxActiveTraces: number = 20

export const maxEventsPerTrace: number = 10

export const numHistogramBuckets: number = 38

export const pageHTML: string = "\n{{template \"Prolog\" .}}\n{{template \"StatusTable\" .}}\n{{template \"Epilog\" .}}\n\n{{define \"Prolog\"}}\n<html>\n\t<head>\n\t<title>/debug/requests</title>\n\t<style type=\"text/css\">\n\t\tbody {\n\t\t\tfont-family: sans-serif;\n\t\t}\n\t\ttable#tr-status td.family {\n\t\t\tpadding-right: 2em;\n\t\t}\n\t\ttable#tr-status td.active {\n\t\t\tpadding-right: 1em;\n\t\t}\n\t\ttable#tr-status td.latency-first {\n\t\t\tpadding-left: 1em;\n\t\t}\n\t\ttable#tr-status td.empty {\n\t\t\tcolor: #aaa;\n\t\t}\n\t\ttable#reqs {\n\t\t\tmargin-top: 1em;\n\t\t}\n\t\ttable#reqs tr.first {\n\t\t\t{{if $.Expanded}}font-weight: bold;{{end}}\n\t\t}\n\t\ttable#reqs td {\n\t\t\tfont-family: monospace;\n\t\t}\n\t\ttable#reqs td.when {\n\t\t\ttext-align: right;\n\t\t\twhite-space: nowrap;\n\t\t}\n\t\ttable#reqs td.elapsed {\n\t\t\tpadding: 0 0.5em;\n\t\t\ttext-align: right;\n\t\t\twhite-space: pre;\n\t\t\twidth: 10em;\n\t\t}\n\t\taddress {\n\t\t\tfont-size: smaller;\n\t\t\tmargin-top: 5em;\n\t\t}\n\t</style>\n\t</head>\n\t<body>\n\n<h1>/debug/requests</h1>\n{{end}} {{/* end of Prolog */}}\n\n{{define \"StatusTable\"}}\n<table id=\"tr-status\">\n\t{{range $fam := .Families}}\n\t<tr>\n\t\t<td class=\"family\">{{$fam}}</td>\n\n\t\t{{$n := index $.ActiveTraceCount $fam}}\n\t\t<td class=\"active {{if not $n}}empty{{end}}\">\n\t\t\t{{if $n}}<a href=\"?fam={{$fam}}&b=-1{{if $.Expanded}}&exp=1{{end}}\">{{end}}\n\t\t\t[{{$n}} active]\n\t\t\t{{if $n}}</a>{{end}}\n\t\t</td>\n\n\t\t{{$f := index $.CompletedTraces $fam}}\n\t\t{{range $i, $b := $f.Buckets}}\n\t\t{{$empty := $b.Empty}}\n\t\t<td {{if $empty}}class=\"empty\"{{end}}>\n\t\t{{if not $empty}}<a href=\"?fam={{$fam}}&b={{$i}}{{if $.Expanded}}&exp=1{{end}}\">{{end}}\n\t\t[{{.Cond}}]\n\t\t{{if not $empty}}</a>{{end}}\n\t\t</td>\n\t\t{{end}}\n\n\t\t{{$nb := len $f.Buckets}}\n\t\t<td class=\"latency-first\">\n\t\t<a href=\"?fam={{$fam}}&b={{$nb}}\">[minute]</a>\n\t\t</td>\n\t\t<td>\n\t\t<a href=\"?fam={{$fam}}&b={{add $nb 1}}\">[hour]</a>\n\t\t</td>\n\t\t<td>\n\t\t<a href=\"?fam={{$fam}}&b={{add $nb 2}}\">[total]</a>\n\t\t</td>\n\n\t</tr>\n\t{{end}}\n</table>\n{{end}} {{/* end of StatusTable */}}\n\n{{define \"Epilog\"}}\n{{if $.Traces}}\n<hr />\n<h3>Family: {{$.Family}}</h3>\n\n{{if or $.Expanded $.Traced}}\n  <a href=\"?fam={{$.Family}}&b={{$.Bucket}}\">[Normal/Summary]</a>\n{{else}}\n  [Normal/Summary]\n{{end}}\n\n{{if or (not $.Expanded) $.Traced}}\n  <a href=\"?fam={{$.Family}}&b={{$.Bucket}}&exp=1\">[Normal/Expanded]</a>\n{{else}}\n  [Normal/Expanded]\n{{end}}\n\n{{if not $.Active}}\n\t{{if or $.Expanded (not $.Traced)}}\n\t<a href=\"?fam={{$.Family}}&b={{$.Bucket}}&rtraced=1\">[Traced/Summary]</a>\n\t{{else}}\n\t[Traced/Summary]\n\t{{end}}\n\t{{if or (not $.Expanded) (not $.Traced)}}\n\t<a href=\"?fam={{$.Family}}&b={{$.Bucket}}&exp=1&rtraced=1\">[Traced/Expanded]</a>\n        {{else}}\n\t[Traced/Expanded]\n\t{{end}}\n{{end}}\n\n{{if $.Total}}\n<p><em>Showing <b>{{len $.Traces}}</b> of <b>{{$.Total}}</b> traces.</em></p>\n{{end}}\n\n<table id=\"reqs\">\n\t<caption>\n\t\t{{if $.Active}}Active{{else}}Completed{{end}} Requests\n\t</caption>\n\t<tr><th>When</th><th>Elapsed&nbsp;(s)</th></tr>\n\t{{range $tr := $.Traces}}\n\t<tr class=\"first\">\n\t\t<td class=\"when\">{{$tr.When}}</td>\n\t\t<td class=\"elapsed\">{{$tr.ElapsedTime}}</td>\n\t\t<td>{{$tr.Title}}</td>\n\t\t{{/* TODO: include traceID/spanID */}}\n\t</tr>\n\t{{if $.Expanded}}\n\t{{range $tr.Events}}\n\t<tr>\n\t\t<td class=\"when\">{{.WhenString}}</td>\n\t\t<td class=\"elapsed\">{{elapsed .Elapsed}}</td>\n\t\t<td>{{if or $.ShowSensitive (not .Sensitive)}}... {{.What}}{{else}}<em>[redacted]</em>{{end}}</td>\n\t</tr>\n\t{{end}}\n\t{{end}}\n\t{{end}}\n</table>\n{{end}} {{/* if $.Traces */}}\n\n{{if $.Histogram}}\n<h4>Latency (&micro;s) of {{$.Family}} over {{$.HistogramWindow}}</h4>\n{{$.Histogram}}\n{{end}} {{/* if $.Histogram */}}\n\n\t</body>\n</html>\n{{end}} {{/* end of Epilog */}}\n"

export let DebugUseAfterFinish: boolean = false

export function __goscript_set_DebugUseAfterFinish(__goscriptValue: boolean): void {
	DebugUseAfterFinish = __goscriptValue
}

export let AuthRequest: ((req: http.Request | $.VarRef<http.Request> | null) => [boolean, boolean] | globalThis.Promise<[boolean, boolean]>) | null = $.functionValue(async (req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<[boolean, boolean]> => {
	let _any: boolean = false
	let sensitive: boolean = false
	// RemoteAddr is commonly in the form "IP" or "IP:port".
	// If it is in the form "IP:port", split off the port.
	let [host, , err] = await net.SplitHostPort($.pointerValue<http.Request>(req).RemoteAddr)
	if (err != null) {
		host = $.pointerValue<http.Request>(req).RemoteAddr
	}
	switch (host) {
		case "localhost":
		case "127.0.0.1":
		case "::1":
		{
			return [true, true]
			break
		}
		default:
		{
			return [false, false]
			break
		}
	}
}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http.Request")], results: [/* @__PURE__ */ $.basicType("bool"), /* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))

export function __goscript_set_AuthRequest(__goscriptValue: ((req: http.Request | $.VarRef<http.Request> | null) => [boolean, boolean] | globalThis.Promise<[boolean, boolean]>) | null): void {
	AuthRequest = __goscriptValue
}

function __goscriptInit0(): void {
	let [, pat] = http.ServeMux.prototype.Handler.call($.pointerValue<http.ServeMux>(http.DefaultServeMux), new http.Request({URL: new url.URL({Path: "/debug/requests"})}))
	if ($.stringEqual(pat, "/debug/requests")) {
		$.panic($.concatString(($.concatString("/debug/requests is already registered. You may have two independent copies of ", "golang.org/x/net/trace in your binary, trying to maintain separate state. This may ")), "involve a vendored copy of golang.org/x/net/trace."))
	}

	// TODO(jbd): Serve Traces from /debug/traces in the future?
	// There is no requirement for a request to be present to have traces.
	http.HandleFunc("/debug/requests", Traces)
	http.HandleFunc("/debug/events", Events)
}

export function NewContext(ctx: context.Context | null, tr: Trace | null): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.namedValueInterfaceValue<any>(contextKey, "trace.contextKeyT", {}, /* @__PURE__ */ $.basicType("string", "trace.contextKeyT")), (tr as any))
}

export async function FromContext(ctx: context.Context | null): globalThis.Promise<[Trace | null, boolean]> {
	let tr: Trace | null = null! as Trace | null
	let ok: boolean = false
	let __goscriptTuple0: any = $.typeAssertTuple<Trace | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>(contextKey, "trace.contextKeyT", {}, /* @__PURE__ */ $.basicType("string", "trace.contextKeyT"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "trace.Trace")
	tr = __goscriptTuple0[0]
	ok = __goscriptTuple0[1]
	return [tr, ok]
}

export async function Traces(w: http.ResponseWriter | null, req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> {
	let [_any, sensitive] = await AuthRequest!(req)
	if (!_any) {
		http.Error($.pointerValueOrNil(w)!, "not allowed", 401)
		return
	}
	http.Header_Set(((__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(w)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as http.Header), "Content-Type", "text/html; charset=utf-8")
	await Render((w as io.Writer | null), req, sensitive)
}

export async function Events(w: http.ResponseWriter | null, req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> {
	let [_any, sensitive] = await AuthRequest!(req)
	if (!_any) {
		http.Error($.pointerValueOrNil(w)!, "not allowed", 401)
		return
	}
	http.Header_Set(((__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(w)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as http.Header), "Content-Type", "text/html; charset=utf-8")
	await __goscript_events.RenderEvents(w, req, sensitive)
}

export async function Render(w: io.Writer | null, req: http.Request | $.VarRef<http.Request> | null, sensitive: boolean): globalThis.Promise<void> {
	await using __defer = new $.AsyncDisposableStack()
	let __goscriptShadow0 = $.varRef($.anonymousStructValue({Families: (null as $.Slice<string>), ActiveTraceCount: (null as globalThis.Map<string, number> | null), CompletedTraces: completedTraces, Traces: (null as traceList), Family: ("" as string), Bucket: (0 as number), Expanded: (false as boolean), Traced: (false as boolean), Active: (false as boolean), ShowSensitive: (false as boolean), Histogram: ("" as template.HTML), HistogramWindow: ("" as string), Total: (0 as number)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Families", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, true), /* @__PURE__ */ $.structField("ActiveTraceCount", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int")), [1], 24, true), /* @__PURE__ */ $.structField("CompletedTraces", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("trace.family")), [2], 32, true), /* @__PURE__ */ $.structField("Traces", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("trace.trace"), "trace.traceList"), [3], 40, true), /* @__PURE__ */ $.structField("Family", /* @__PURE__ */ $.basicType("string"), [4], 64, true), /* @__PURE__ */ $.structField("Bucket", /* @__PURE__ */ $.basicType("int"), [5], 80, true), /* @__PURE__ */ $.structField("Expanded", /* @__PURE__ */ $.basicType("bool"), [6], 88, true), /* @__PURE__ */ $.structField("Traced", /* @__PURE__ */ $.basicType("bool"), [7], 89, true), /* @__PURE__ */ $.structField("Active", /* @__PURE__ */ $.basicType("bool"), [8], 90, true), /* @__PURE__ */ $.structField("ShowSensitive", /* @__PURE__ */ $.basicType("bool"), [9], 91, true), /* @__PURE__ */ $.structField("Histogram", /* @__PURE__ */ $.basicType("string", "template.HTML"), [10], 96, true), /* @__PURE__ */ $.structField("HistogramWindow", /* @__PURE__ */ $.basicType("string"), [11], 112, true), /* @__PURE__ */ $.structField("Total", /* @__PURE__ */ $.basicType("int"), [12], 128, true)] }))

	$.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).ShowSensitive = sensitive
	if (req != null) {
		// Allow show_sensitive=0 to force hiding of sensitive data for testing.
		// This only goes one way; you can't use show_sensitive=1 to see things.
		if ($.stringEqual(http.Request.prototype.FormValue.call($.pointerValue<http.Request>(req), "show_sensitive"), "0")) {
			$.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).ShowSensitive = false
		}

		{
			let [exp, err] = strconv.ParseBool(http.Request.prototype.FormValue.call($.pointerValue<http.Request>(req), "exp"))
			if (err == null) {
				$.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Expanded = exp
			}
		}
		{
			let [exp, err] = strconv.ParseBool(http.Request.prototype.FormValue.call($.pointerValue<http.Request>(req), "rtraced"))
			if (err == null) {
				$.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Traced = exp
			}
		}
	}

	await completedMu.value.RLock()
	$.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Families = $.makeSlice<string>(0, $.len(completedTraces), "string")
	for (const [fam, __rangeValue] of completedTraces?.entries() ?? []) {
		$.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Families = $.appendOne($.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Families, fam)
	}
	completedMu.value.RUnlock()
	sort.Strings($.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Families)

	// We are careful here to minimize the time spent locking activeMu,
	// since that lock is required every time an RPC starts and finishes.
	$.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).ActiveTraceCount = $.makeMap<string, number>()
	await activeMu.value.RLock()
	for (let [fam, s] of activeTraces?.entries() ?? []) {
		$.mapSet($.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).ActiveTraceCount, fam, await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as traceSet).Len() : traceSet.prototype.Len.call(s)))
	}
	activeMu.value.RUnlock()

	let ok: boolean = false
	let __goscriptTuple1: any = parseArgs(req)
	$.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Family = __goscriptTuple1[0]
	$.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Bucket = __goscriptTuple1[1]
	ok = __goscriptTuple1[2]
	switch ((true as boolean)) {
		case !ok:
		{
			break
		}
		case $.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Bucket == -1:
		{
			$.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Active = true
			let n = $.mapGet<string, number, number>($.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).ActiveTraceCount, $.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Family, 0)[0]
			$.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Traces = (await getActiveTraces($.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Family) as traceList)
			if ($.sliceLen(($.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Traces as traceList)) < n) {
				$.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Total = n
			}
			break
		}
		case $.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Bucket < 9:
		{
			{
				let b: traceBucket | $.VarRef<traceBucket> | null = await lookupBucket($.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Family, $.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Bucket)
				if (b != null) {
					$.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Traces = (await traceBucket.prototype.Copy.call(b, $.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Traced) as traceList)
				}
			}
			break
		}
		default:
		{
			{
				let f: family | $.VarRef<family> | null = await getFamily($.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Family, false)
				if (f != null) {
					let obs: timeseries.Observable | null = null! as timeseries.Observable | null
					await $.pointerValue<family>(f).LatencyMu.RLock()
					{
						let o = $.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Bucket - 9
						switch (o) {
							case 0:
							{
								obs = await timeseries.MinuteHourSeries.prototype.Minute.call($.pointerValue<family>(f).Latency)
								$.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).HistogramWindow = "last minute"
								break
							}
							case 1:
							{
								obs = await timeseries.MinuteHourSeries.prototype.Hour.call($.pointerValue<family>(f).Latency)
								$.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).HistogramWindow = "last hour"
								break
							}
							case 2:
							{
								obs = await $.pointerValue<timeseries.MinuteHourSeries>($.pointerValue<family>(f).Latency).timeSeries.Total()
								$.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).HistogramWindow = "all time"
								break
							}
						}
					}
					$.pointerValue<family>(f).LatencyMu.RUnlock()
					if (obs != null) {
						$.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Histogram = await __goscript_histogram.histogram.prototype.html.call(((obs as any)?.__goType === "*trace.histogram" && (obs as any).__goValue === undefined && (obs as any).__isTypedNil !== true ? ((obs as any) as __goscript_histogram.histogram | $.VarRef<__goscript_histogram.histogram> | null) : $.mustTypeAssert<__goscript_histogram.histogram | $.VarRef<__goscript_histogram.histogram> | null>(obs, /* @__PURE__ */ $.pointerType("trace.histogram"))))
					}
				}
			}
			break
		}
	}

	if ($.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Traces != null) {
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => traceList_Free(__receiver))($.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Traces), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/trace.traceList.Free-fm")
		__defer.defer(async () => { await __goscriptDeferCallee0() })
		await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>($.pointerValue<{"Families": $.Slice<string>, "ActiveTraceCount": globalThis.Map<string, number> | null, "CompletedTraces": globalThis.Map<string, family | $.VarRef<family> | null> | null, "Traces": traceList, "Family": string, "Bucket": number, "Expanded": boolean, "Traced": boolean, "Active": boolean, "ShowSensitive": boolean, "Histogram": template.HTML, "HistogramWindow": string, "Total": number}>(__goscriptShadow0).Traces, "trace.traceList", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
	}

	await completedMu.value.RLock()
	const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(completedMu.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
	__defer.defer(() => { __goscriptDeferCallee1() })
	{
		let err = await template.Template.prototype.ExecuteTemplate.call(await pageTmpl(), w, "Page", $.interfaceValue(__goscriptShadow0, "*struct{Families []string; ActiveTraceCount map[string]int; CompletedTraces map[string]*trace.family; Traces trace.traceList; Family string; Bucket int; Expanded bool; Traced bool; Active bool; ShowSensitive bool; Histogram template.HTML; HistogramWindow string; Total int}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Families", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, true), /* @__PURE__ */ $.structField("ActiveTraceCount", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int")), [1], 24, true), /* @__PURE__ */ $.structField("CompletedTraces", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("trace.family")), [2], 32, true), /* @__PURE__ */ $.structField("Traces", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("trace.trace"), "trace.traceList"), [3], 40, true), /* @__PURE__ */ $.structField("Family", /* @__PURE__ */ $.basicType("string"), [4], 64, true), /* @__PURE__ */ $.structField("Bucket", /* @__PURE__ */ $.basicType("int"), [5], 80, true), /* @__PURE__ */ $.structField("Expanded", /* @__PURE__ */ $.basicType("bool"), [6], 88, true), /* @__PURE__ */ $.structField("Traced", /* @__PURE__ */ $.basicType("bool"), [7], 89, true), /* @__PURE__ */ $.structField("Active", /* @__PURE__ */ $.basicType("bool"), [8], 90, true), /* @__PURE__ */ $.structField("ShowSensitive", /* @__PURE__ */ $.basicType("bool"), [9], 91, true), /* @__PURE__ */ $.structField("Histogram", /* @__PURE__ */ $.basicType("string", "template.HTML"), [10], 96, true), /* @__PURE__ */ $.structField("HistogramWindow", /* @__PURE__ */ $.basicType("string"), [11], 112, true), /* @__PURE__ */ $.structField("Total", /* @__PURE__ */ $.basicType("int"), [12], 128, true)] })))
		if (err != null) {
			await log.Printf("net/trace: Failed executing template: %v", $.arrayToSlice<any>([(err as any)]))
		}
	}
}

export function parseArgs(req: http.Request | $.VarRef<http.Request> | null): [string, number, boolean] {
	let fam: string = ""
	let b: number = 0
	let ok: boolean = false
	if (req == null) {
		return ["", 0, false]
	}
	fam = http.Request.prototype.FormValue.call($.pointerValue<http.Request>(req), "fam")
	let bStr = http.Request.prototype.FormValue.call($.pointerValue<http.Request>(req), "b")
	if (($.stringEqual(fam, "")) || ($.stringEqual(bStr, ""))) {
		return ["", 0, false]
	}
	let __goscriptTuple2: any = strconv.Atoi(bStr)
	b = __goscriptTuple2[0]
	let err = __goscriptTuple2[1]
	if ((err != null) || (b < -1)) {
		return ["", 0, false]
	}

	return [fam, b, true]
}

export async function lookupBucket(fam: string, b: number): globalThis.Promise<traceBucket | $.VarRef<traceBucket> | null> {
	let f: family | $.VarRef<family> | null = await getFamily(fam, false)
	let f$: family = f == null ? $.pointerTarget<family>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<family>(f)
	if (((f == null) || (b < 0)) || (b >= 9)) {
		return null
	}
	return $.arrayIndex((f$ as family).Buckets, b)
}

export let contextKey: contextKeyT = "golang.org/x/net/trace.Trace"

export function __goscript_set_contextKey(__goscriptValue: contextKeyT): void {
	contextKey = __goscriptValue
}

export async function New(family: string, title: string): globalThis.Promise<Trace | null> {
	let tr: trace | $.VarRef<trace> | null = await newTrace()
	let tr$: trace = tr == null ? $.pointerTarget<trace>(tr) : (tr as any).__isVarRef === true ? (tr as any).value : (tr as any).__goValue === undefined ? (tr as any) : $.pointerTarget<trace>(tr)
	void (tr !== null && (tr as any).__isVarRef !== true && (tr as any).__goValue === undefined ? ((tr as any) as trace).ref() : trace.prototype.ref.call(tr))
	let __goscriptAssign0_0: string = family
	let __goscriptAssign0_1: string = title;
	;(tr$ as trace).Family = __goscriptAssign0_0;
	;(tr$ as trace).Title = __goscriptAssign0_1
	$.assignStruct((tr$ as trace).Start, time.Now());
	;(tr$ as trace).maxEvents = 10;
	;(tr$ as trace).events = $.goSlice((tr$ as trace).eventsBuf, undefined, 0)

	await activeMu.value.RLock()
	let s: traceSet | $.VarRef<traceSet> | null = $.mapGet<string, traceSet | $.VarRef<traceSet> | null, traceSet | $.VarRef<traceSet> | null>(activeTraces, (tr$ as trace).Family, null)[0]
	activeMu.value.RUnlock()
	if (s == null) {
		await activeMu.value.Lock()
		s = $.mapGet<string, traceSet | $.VarRef<traceSet> | null, traceSet | $.VarRef<traceSet> | null>(activeTraces, (tr$ as trace).Family, null)[0]
		if (s == null) {
			s = new traceSet()
			$.mapSet(activeTraces, (tr$ as trace).Family, s)
		}
		activeMu.value.Unlock()
	}
	await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as traceSet).Add(tr) : traceSet.prototype.Add.call(s, tr))

	// Trigger allocation of the completed trace structure for this family.
	// This will cause the family to be present in the request page during
	// the first trace of this family. We don't care about the return value,
	// nor is there any need for this to run inline, so we execute it in its
	// own goroutine, but only if the family isn't allocated yet.
	await completedMu.value.RLock()
	{
		let [, ok] = $.mapGet<string, family | $.VarRef<family> | null, family | $.VarRef<family> | null>(completedTraces, (tr$ as trace).Family, null)
		if (!ok) {
			const __goscriptDeferArg0 = (tr$ as trace).Family
			queueMicrotask(async () => { await allocFamily(__goscriptDeferArg0) })
		}
	}
	completedMu.value.RUnlock()

	return $.interfaceValue<Trace | null>(tr, "*trace.trace", /* @__PURE__ */ $.pointerType("trace.trace"))
}

export let activeMu: $.VarRef<sync.RWMutex> = $.varRef($.markAsStructValue(new sync.RWMutex()))

export function __goscript_set_activeMu(__goscriptValue: sync.RWMutex): void {
	$.assignStruct(activeMu.value, __goscriptValue)
}

export let activeTraces: globalThis.Map<string, traceSet | $.VarRef<traceSet> | null> | null = $.makeMap<string, traceSet | $.VarRef<traceSet> | null>()

export function __goscript_set_activeTraces(__goscriptValue: globalThis.Map<string, traceSet | $.VarRef<traceSet> | null> | null): void {
	activeTraces = __goscriptValue
}

export let completedMu: $.VarRef<sync.RWMutex> = $.varRef($.markAsStructValue(new sync.RWMutex()))

export function __goscript_set_completedMu(__goscriptValue: sync.RWMutex): void {
	$.assignStruct(completedMu.value, __goscriptValue)
}

export let completedTraces: globalThis.Map<string, family | $.VarRef<family> | null> | null = $.makeMap<string, family | $.VarRef<family> | null>()

export function __goscript_set_completedTraces(__goscriptValue: globalThis.Map<string, family | $.VarRef<family> | null> | null): void {
	completedTraces = __goscriptValue
}

export async function getActiveTraces(fam: string): globalThis.Promise<traceList> {
	await activeMu.value.RLock()
	let s: traceSet | $.VarRef<traceSet> | null = $.mapGet<string, traceSet | $.VarRef<traceSet> | null, traceSet | $.VarRef<traceSet> | null>(activeTraces, fam, null)[0]
	activeMu.value.RUnlock()
	if (s == null) {
		return (null as traceList)
	}
	return (await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as traceSet).FirstN(20) : traceSet.prototype.FirstN.call(s, 20)) as traceList)
}

export async function getFamily(fam: string, allocNew: boolean): globalThis.Promise<family | $.VarRef<family> | null> {
	await completedMu.value.RLock()
	let f: family | $.VarRef<family> | null = $.mapGet<string, family | $.VarRef<family> | null, family | $.VarRef<family> | null>(completedTraces, fam, null)[0]
	completedMu.value.RUnlock()
	if ((f == null) && allocNew) {
		f = await allocFamily(fam)
	}
	return f
}

export async function allocFamily(fam: string): globalThis.Promise<family | $.VarRef<family> | null> {
	using __defer = new $.DisposableStack()
	await completedMu.value.Lock()
	const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())(completedMu.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee4() })
	let f: family | $.VarRef<family> | null = $.mapGet<string, family | $.VarRef<family> | null, family | $.VarRef<family> | null>(completedTraces, fam, null)[0]
	if (f == null) {
		f = await newFamily()
		$.mapSet(completedTraces, fam, f)
	}
	return f
}

export async function newFamily(): globalThis.Promise<family | $.VarRef<family> | null> {
	return (await (async () => { const __goscriptLiteralField0 = await timeseries.NewMinuteHourSeries($.functionValue((): timeseries.Observable | null => {
		return $.interfaceValue<timeseries.Observable | null>(new __goscript_histogram.histogram(), "*trace.histogram", /* @__PURE__ */ $.pointerType("trace.histogram"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["timeseries.Observable"] } as $.FunctionTypeInfo))); return new family({Buckets: $.arrayValue([new traceBucket({Cond: $.namedValueInterfaceValue<cond | null>(0n, "trace.minCond", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())}), new traceBucket({Cond: $.namedValueInterfaceValue<cond | null>(50000000n, "trace.minCond", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())}), new traceBucket({Cond: $.namedValueInterfaceValue<cond | null>(100000000n, "trace.minCond", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())}), new traceBucket({Cond: $.namedValueInterfaceValue<cond | null>(200000000n, "trace.minCond", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())}), new traceBucket({Cond: $.namedValueInterfaceValue<cond | null>(500000000n, "trace.minCond", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())}), new traceBucket({Cond: $.namedValueInterfaceValue<cond | null>(1000000000n, "trace.minCond", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())}), new traceBucket({Cond: $.namedValueInterfaceValue<cond | null>(10000000000n, "trace.minCond", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())}), new traceBucket({Cond: $.namedValueInterfaceValue<cond | null>(100000000000n, "trace.minCond", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())}), new traceBucket({Cond: $.interfaceValue<cond | null>(new errorCond(undefined, true), "trace.errorCond", "trace.errorCond")})]), Latency: __goscriptLiteralField0}) })())
}

export function minCond_match(m: minCond, t: trace | $.VarRef<trace> | null): boolean {
	return $.pointerValue<trace>(t).Elapsed >= $.int64(m)
}

export async function minCond_String(m: minCond): globalThis.Promise<string> {
	return fmt.Sprintf("\xe2\x89\xa5%gs", $.basicInterfaceValue(time.Duration_Seconds($.int64(m)), "float64"))
}

export async function traceList_Free(trl: traceList): globalThis.Promise<void> {
	for (let __goscriptRangeTarget0 = trl, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let t = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as trace | $.VarRef<trace> | null)
		await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as trace).unref() : trace.prototype.unref.call(t))
	}
}

export function traceList_Len(trl: traceList): number {
	return $.sliceLen((trl as traceList))
}

export function traceList_Less(trl: traceList, i: number, j: number): boolean {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<trace>($.arrayIndex(trl!, i)).Start)).After($.markAsStructValue($.cloneStructValue($.pointerValue<trace>($.arrayIndex(trl!, j)).Start)))
}

export function traceList_Swap(trl: traceList, i: number, j: number): void {
	let __goscriptAssign1_0: trace | $.VarRef<trace> | null = $.arrayIndex(trl!, j)
	let __goscriptAssign1_1: trace | $.VarRef<trace> | null = $.arrayIndex(trl!, i)
	$.sliceElems(trl!)[$.sliceSlot(trl!, i)] = __goscriptAssign1_0
	$.sliceElems(trl!)[$.sliceSlot(trl!, j)] = __goscriptAssign1_1
}

export async function discarded_String(d: $.VarRef<discarded> | null): globalThis.Promise<string> {
	return fmt.Sprintf("(%d events discarded)", $.basicInterfaceValue($.int($.pointerValue<discarded>(d)), "int"))
}

export let traceFreeList: $.Channel<trace | $.VarRef<trace> | null> | null = $.makeChannel<trace | $.VarRef<trace> | null>(1000, null! as trace | $.VarRef<trace> | null, "both")

export function __goscript_set_traceFreeList(__goscriptValue: $.Channel<trace | $.VarRef<trace> | null> | null): void {
	traceFreeList = __goscriptValue
}

export async function newTrace(): globalThis.Promise<trace | $.VarRef<trace> | null> {
	const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, trace | $.VarRef<trace> | null>([
		{
			id: 0,
			isSend: false,
			channel: traceFreeList,
			onSelected: async (__goscriptSelect0Result) => {
				let tr = __goscriptSelect0Result.value
				return tr
			}
		},
		{
			id: -1,
			isSend: false,
			channel: null,
			onSelected: async (__goscriptSelect0Result) => {
				return new trace()
			}
		}
	], true)
	if (__goscriptSelect0HasReturn) {
		return __goscriptSelect0Value
	}
	throw new globalThis.Error("unreachable select")
	throw new globalThis.Error("goscript: unreachable return")
}

export async function freeTrace(tr: trace | $.VarRef<trace> | null): globalThis.Promise<void> {
	if (DebugUseAfterFinish) {
		return
	}
	await (tr !== null && (tr as any).__isVarRef !== true && (tr as any).__goValue === undefined ? ((tr as any) as trace).reset() : trace.prototype.reset.call(tr))
	const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, void>([
		{
			id: 0,
			isSend: true,
			channel: traceFreeList,
			value: tr,
		},
		{
			id: -1,
			isSend: false,
			channel: null,
		}
	], true)
	if (__goscriptSelect1HasReturn) {
		return __goscriptSelect1Value
	}
}

export async function elapsed(d: time.Duration): globalThis.Promise<string> {
	let b: $.Slice<number> = $.stringToBytes(await fmt.Sprintf("%.6f", $.basicInterfaceValue(time.Duration_Seconds(d), "float64")))

	// For subsecond durations, blank all zeros before decimal point,
	// and all zeros between the decimal point and the first non-zero digit.
	if (d < 1000000000n) {
		let dot = bytes.IndexByte(b, 46)
		for (let __goscriptSliceWindow0 = $.sliceRange(b), i = 0; i < dot; i++) {
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = 32
		}
		for (let __goscriptSliceWindow1 = $.sliceRange(b), i = dot + 1; i < __goscriptSliceWindow1.length; i++) {
			if (((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as number) == 48) {
				;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = 32
			} else {
				break
			}
		}
	}

	return $.bytesToString(b)
}

export let pageTmplCache: template.Template | $.VarRef<template.Template> | null = null! as template.Template | $.VarRef<template.Template> | null

export function __goscript_set_pageTmplCache(__goscriptValue: template.Template | $.VarRef<template.Template> | null): void {
	pageTmplCache = __goscriptValue
}

export let pageTmplOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_pageTmplOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(pageTmplOnce.value, __goscriptValue)
}

export async function pageTmpl(): globalThis.Promise<template.Template | $.VarRef<template.Template> | null> {
	await pageTmplOnce.value.Do($.functionValue(async (): globalThis.Promise<void> => {
		pageTmplCache = template.Must(...((await template.Template.prototype.Parse.call(await template.Template.prototype.Funcs.call(template.New("Page"), $.makeMap<string, any>([["elapsed", $.interfaceValue($.goFunc(elapsed, "golang.org/x/net/trace.elapsed"), "func(d time.Duration) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int64", "time.Duration")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo))], ["add", $.interfaceValue($.functionValue((a: number, b: number): number => {
			return a + b
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo)), "func(a int, b int) int", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo))]])), "\n{{template \"Prolog\" .}}\n{{template \"StatusTable\" .}}\n{{template \"Epilog\" .}}\n\n{{define \"Prolog\"}}\n<html>\n\t<head>\n\t<title>/debug/requests</title>\n\t<style type=\"text/css\">\n\t\tbody {\n\t\t\tfont-family: sans-serif;\n\t\t}\n\t\ttable#tr-status td.family {\n\t\t\tpadding-right: 2em;\n\t\t}\n\t\ttable#tr-status td.active {\n\t\t\tpadding-right: 1em;\n\t\t}\n\t\ttable#tr-status td.latency-first {\n\t\t\tpadding-left: 1em;\n\t\t}\n\t\ttable#tr-status td.empty {\n\t\t\tcolor: #aaa;\n\t\t}\n\t\ttable#reqs {\n\t\t\tmargin-top: 1em;\n\t\t}\n\t\ttable#reqs tr.first {\n\t\t\t{{if $.Expanded}}font-weight: bold;{{end}}\n\t\t}\n\t\ttable#reqs td {\n\t\t\tfont-family: monospace;\n\t\t}\n\t\ttable#reqs td.when {\n\t\t\ttext-align: right;\n\t\t\twhite-space: nowrap;\n\t\t}\n\t\ttable#reqs td.elapsed {\n\t\t\tpadding: 0 0.5em;\n\t\t\ttext-align: right;\n\t\t\twhite-space: pre;\n\t\t\twidth: 10em;\n\t\t}\n\t\taddress {\n\t\t\tfont-size: smaller;\n\t\t\tmargin-top: 5em;\n\t\t}\n\t</style>\n\t</head>\n\t<body>\n\n<h1>/debug/requests</h1>\n{{end}} {{/* end of Prolog */}}\n\n{{define \"StatusTable\"}}\n<table id=\"tr-status\">\n\t{{range $fam := .Families}}\n\t<tr>\n\t\t<td class=\"family\">{{$fam}}</td>\n\n\t\t{{$n := index $.ActiveTraceCount $fam}}\n\t\t<td class=\"active {{if not $n}}empty{{end}}\">\n\t\t\t{{if $n}}<a href=\"?fam={{$fam}}&b=-1{{if $.Expanded}}&exp=1{{end}}\">{{end}}\n\t\t\t[{{$n}} active]\n\t\t\t{{if $n}}</a>{{end}}\n\t\t</td>\n\n\t\t{{$f := index $.CompletedTraces $fam}}\n\t\t{{range $i, $b := $f.Buckets}}\n\t\t{{$empty := $b.Empty}}\n\t\t<td {{if $empty}}class=\"empty\"{{end}}>\n\t\t{{if not $empty}}<a href=\"?fam={{$fam}}&b={{$i}}{{if $.Expanded}}&exp=1{{end}}\">{{end}}\n\t\t[{{.Cond}}]\n\t\t{{if not $empty}}</a>{{end}}\n\t\t</td>\n\t\t{{end}}\n\n\t\t{{$nb := len $f.Buckets}}\n\t\t<td class=\"latency-first\">\n\t\t<a href=\"?fam={{$fam}}&b={{$nb}}\">[minute]</a>\n\t\t</td>\n\t\t<td>\n\t\t<a href=\"?fam={{$fam}}&b={{add $nb 1}}\">[hour]</a>\n\t\t</td>\n\t\t<td>\n\t\t<a href=\"?fam={{$fam}}&b={{add $nb 2}}\">[total]</a>\n\t\t</td>\n\n\t</tr>\n\t{{end}}\n</table>\n{{end}} {{/* end of StatusTable */}}\n\n{{define \"Epilog\"}}\n{{if $.Traces}}\n<hr />\n<h3>Family: {{$.Family}}</h3>\n\n{{if or $.Expanded $.Traced}}\n  <a href=\"?fam={{$.Family}}&b={{$.Bucket}}\">[Normal/Summary]</a>\n{{else}}\n  [Normal/Summary]\n{{end}}\n\n{{if or (not $.Expanded) $.Traced}}\n  <a href=\"?fam={{$.Family}}&b={{$.Bucket}}&exp=1\">[Normal/Expanded]</a>\n{{else}}\n  [Normal/Expanded]\n{{end}}\n\n{{if not $.Active}}\n\t{{if or $.Expanded (not $.Traced)}}\n\t<a href=\"?fam={{$.Family}}&b={{$.Bucket}}&rtraced=1\">[Traced/Summary]</a>\n\t{{else}}\n\t[Traced/Summary]\n\t{{end}}\n\t{{if or (not $.Expanded) (not $.Traced)}}\n\t<a href=\"?fam={{$.Family}}&b={{$.Bucket}}&exp=1&rtraced=1\">[Traced/Expanded]</a>\n        {{else}}\n\t[Traced/Expanded]\n\t{{end}}\n{{end}}\n\n{{if $.Total}}\n<p><em>Showing <b>{{len $.Traces}}</b> of <b>{{$.Total}}</b> traces.</em></p>\n{{end}}\n\n<table id=\"reqs\">\n\t<caption>\n\t\t{{if $.Active}}Active{{else}}Completed{{end}} Requests\n\t</caption>\n\t<tr><th>When</th><th>Elapsed&nbsp;(s)</th></tr>\n\t{{range $tr := $.Traces}}\n\t<tr class=\"first\">\n\t\t<td class=\"when\">{{$tr.When}}</td>\n\t\t<td class=\"elapsed\">{{$tr.ElapsedTime}}</td>\n\t\t<td>{{$tr.Title}}</td>\n\t\t{{/* TODO: include traceID/spanID */}}\n\t</tr>\n\t{{if $.Expanded}}\n\t{{range $tr.Events}}\n\t<tr>\n\t\t<td class=\"when\">{{.WhenString}}</td>\n\t\t<td class=\"elapsed\">{{elapsed .Elapsed}}</td>\n\t\t<td>{{if or $.ShowSensitive (not .Sensitive)}}... {{.What}}{{else}}<em>[redacted]</em>{{end}}</td>\n\t</tr>\n\t{{end}}\n\t{{end}}\n\t{{end}}\n</table>\n{{end}} {{/* if $.Traces */}}\n\n{{if $.Histogram}}\n<h4>Latency (&micro;s) of {{$.Family}} over {{$.HistogramWindow}}</h4>\n{{$.Histogram}}\n{{end}} {{/* if $.Histogram */}}\n\n\t</body>\n</html>\n{{end}} {{/* end of Epilog */}}\n")) as [template.Template | $.VarRef<template.Template> | null, $.GoError]))
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	return pageTmplCache
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Free: (receiver: any, ...args: any[]) => (traceList_Free as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (traceList_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (traceList_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (traceList_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("trace.trace"), "trace.traceList"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Free"), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({String: (receiver: any, ...args: any[]) => (minCond_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), match: (receiver: any, ...args: any[]) => (minCond_match as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int64", "trace.minCond"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("match", [["t", /* @__PURE__ */ $.pointerType("trace.trace")]], [/* @__PURE__ */ $.basicType("bool")])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({String: (receiver: any, ...args: any[]) => (discarded_String as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "trace.discarded")))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any

export { __goscriptInit0 }
