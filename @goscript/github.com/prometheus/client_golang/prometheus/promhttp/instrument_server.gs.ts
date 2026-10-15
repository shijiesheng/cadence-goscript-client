// Generated file based on instrument_server.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as http from "@goscript/net/http/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as dto from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as prometheus from "@goscript/github.com/prometheus/client_golang/prometheus/index.js"

import * as url from "@goscript/net/url/index.js"

import * as __goscript_delegator from "./delegator.gs.ts"

import * as __goscript_option from "./option.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/net/http/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "@goscript/github.com/prometheus/client_golang/prometheus/index.js"
import "@goscript/net/url/index.js"
import "./delegator.gs.ts"
import "./option.gs.ts"

export const magicString: string = "zZgWfBxLqvG8kc8IMv3POi2Bb0tZI3vAnBx+gBaFi9FyPzB/CzKUer1yufDa"

export function InstrumentHandlerInFlight(g: prometheus.Gauge | null, next: http.Handler | null): http.Handler | null {
	return $.namedValueInterfaceValue<http.Handler | null>($.namedFunction($.functionValue(async (w: http.ResponseWriter | null, r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> => {
		await using __defer = new $.AsyncDisposableStack()
		void (__goscriptAwait = (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? (g as Exclude<prometheus.Gauge, null>) : $.pointerValue<Exclude<prometheus.Gauge, null>>(g)).Inc(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Dec())((g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? (g as Exclude<prometheus.Gauge, null>) : $.pointerValue<Exclude<prometheus.Gauge, null>>(g))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/prometheus/client_golang/prometheus.Gauge.Dec-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		await (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<http.Handler, null>) : $.pointerValue<Exclude<http.Handler, null>>(next)).ServeHTTP($.pointerValueOrNil(w)!, r)
	}, ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)), "http.HandlerFunc", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)), "http.HandlerFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export async function InstrumentHandlerDuration(obs: prometheus.ObserverVec | null, next: http.Handler | null, opts: $.Slice<__goscript_option.Option | null>): globalThis.Promise<http.HandlerFunc | null> {
	let mwOpts: __goscript_option.option | $.VarRef<__goscript_option.option> | null = new __goscript_option.option()
	let mwOpts$: __goscript_option.option = mwOpts == null ? $.pointerTarget<__goscript_option.option>(mwOpts) : (mwOpts as any).__isVarRef === true ? (mwOpts as any).value : (mwOpts as any).__goValue === undefined ? (mwOpts as any) : $.pointerTarget<__goscript_option.option>(mwOpts)
	for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let o = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_option.Option | null)
		void (__goscriptAwait = o!(mwOpts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	let [code, method] = await checkLabels((obs as prometheus.Collector | null))

	if (code) {
		return $.namedFunction($.functionValue(async (w: http.ResponseWriter | null, r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> => {
			let now = $.markAsStructValue($.cloneStructValue(time.Now()))
			let d = await __goscript_delegator.newDelegator(w, (null as ((_p0: number) => void) | null))
			await (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<http.Handler, null>) : $.pointerValue<Exclude<http.Handler, null>>(next)).ServeHTTP($.pointerValueOrNil((d as http.ResponseWriter | null))!, r)

			void (__goscriptAwait = $.pointerValue<Exclude<prometheus.Observer, null>>((__goscriptAwait = (obs !== null && (obs as any).__isVarRef !== true && (obs as any).__goValue === undefined ? (obs as Exclude<prometheus.ObserverVec, null>) : $.pointerValue<Exclude<prometheus.ObserverVec, null>>(obs)).With(labels(code, method, $.pointerValue<http.Request>(r).Method, (__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<__goscript_delegator.delegator, null>) : $.pointerValue<Exclude<__goscript_delegator.delegator, null>>(d)).Status(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (mwOpts$ as __goscript_option.option).extraMethods)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Observe(time.Duration_Seconds(time.Since($.markAsStructValue($.cloneStructValue(now))))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)), "http.HandlerFunc", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo))
	}

	return $.namedFunction($.functionValue(async (w: http.ResponseWriter | null, r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> => {
		let now = $.markAsStructValue($.cloneStructValue(time.Now()))
		await (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<http.Handler, null>) : $.pointerValue<Exclude<http.Handler, null>>(next)).ServeHTTP($.pointerValueOrNil(w)!, r)
		void (__goscriptAwait = $.pointerValue<Exclude<prometheus.Observer, null>>((__goscriptAwait = (obs !== null && (obs as any).__isVarRef !== true && (obs as any).__goValue === undefined ? (obs as Exclude<prometheus.ObserverVec, null>) : $.pointerValue<Exclude<prometheus.ObserverVec, null>>(obs)).With(labels(code, method, $.pointerValue<http.Request>(r).Method, 0, (mwOpts$ as __goscript_option.option).extraMethods)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Observe(time.Duration_Seconds(time.Since($.markAsStructValue($.cloneStructValue(now))))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}, ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)), "http.HandlerFunc", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo))
}

export async function InstrumentHandlerCounter(counter: prometheus.CounterVec | $.VarRef<prometheus.CounterVec> | null, next: http.Handler | null, opts: $.Slice<__goscript_option.Option | null>): globalThis.Promise<http.HandlerFunc | null> {
	let mwOpts: __goscript_option.option | $.VarRef<__goscript_option.option> | null = new __goscript_option.option()
	let mwOpts$: __goscript_option.option = mwOpts == null ? $.pointerTarget<__goscript_option.option>(mwOpts) : (mwOpts as any).__isVarRef === true ? (mwOpts as any).value : (mwOpts as any).__goValue === undefined ? (mwOpts as any) : $.pointerTarget<__goscript_option.option>(mwOpts)
	for (let __goscriptRangeTarget1 = opts, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let o = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_option.Option | null)
		void (__goscriptAwait = o!(mwOpts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	let [code, method] = await checkLabels($.interfaceValue<prometheus.Collector | null>(counter, "*prometheus.CounterVec", /* @__PURE__ */ $.pointerType("prometheus.CounterVec")))

	if (code) {
		return $.namedFunction($.functionValue(async (w: http.ResponseWriter | null, r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> => {
			let d = await __goscript_delegator.newDelegator(w, (null as ((_p0: number) => void) | null))
			await (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<http.Handler, null>) : $.pointerValue<Exclude<http.Handler, null>>(next)).ServeHTTP($.pointerValueOrNil((d as http.ResponseWriter | null))!, r)
			void (__goscriptAwait = $.pointerValue<Exclude<prometheus.Counter, null>>((await prometheus.CounterVec.prototype.With.call(counter, labels(code, method, $.pointerValue<http.Request>(r).Method, (__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<__goscript_delegator.delegator, null>) : $.pointerValue<Exclude<__goscript_delegator.delegator, null>>(d)).Status(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (mwOpts$ as __goscript_option.option).extraMethods)))).Inc(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)), "http.HandlerFunc", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo))
	}

	return $.namedFunction($.functionValue(async (w: http.ResponseWriter | null, r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> => {
		await (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<http.Handler, null>) : $.pointerValue<Exclude<http.Handler, null>>(next)).ServeHTTP($.pointerValueOrNil(w)!, r)
		void (__goscriptAwait = $.pointerValue<Exclude<prometheus.Counter, null>>((await (counter !== null && (counter as any).__isVarRef !== true && (counter as any).__goValue === undefined ? ((counter as any) as prometheus.CounterVec).With(labels(code, method, $.pointerValue<http.Request>(r).Method, 0, (mwOpts$ as __goscript_option.option).extraMethods)) : prometheus.CounterVec.prototype.With.call(counter, labels(code, method, $.pointerValue<http.Request>(r).Method, 0, (mwOpts$ as __goscript_option.option).extraMethods))))).Inc(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}, ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)), "http.HandlerFunc", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo))
}

export async function InstrumentHandlerTimeToWriteHeader(obs: prometheus.ObserverVec | null, next: http.Handler | null, opts: $.Slice<__goscript_option.Option | null>): globalThis.Promise<http.HandlerFunc | null> {
	let mwOpts: __goscript_option.option | $.VarRef<__goscript_option.option> | null = new __goscript_option.option()
	for (let __goscriptRangeTarget2 = opts, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let o = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_option.Option | null)
		void (__goscriptAwait = o!(mwOpts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	let [code, method] = await checkLabels((obs as prometheus.Collector | null))

	return $.namedFunction($.functionValue(async (w: http.ResponseWriter | null, r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> => {
		let now = $.markAsStructValue($.cloneStructValue(time.Now()))
		let d = await __goscript_delegator.newDelegator(w, $.functionValue(async (status: number): globalThis.Promise<void> => {
			void (__goscriptAwait = $.pointerValue<Exclude<prometheus.Observer, null>>((__goscriptAwait = (obs !== null && (obs as any).__isVarRef !== true && (obs as any).__goValue === undefined ? (obs as Exclude<prometheus.ObserverVec, null>) : $.pointerValue<Exclude<prometheus.ObserverVec, null>>(obs)).With(labels(code, method, $.pointerValue<http.Request>(r).Method, status, $.pointerValue<__goscript_option.option>(mwOpts).extraMethods)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Observe(time.Duration_Seconds(time.Since($.markAsStructValue($.cloneStructValue(now))))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo)))
		await (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<http.Handler, null>) : $.pointerValue<Exclude<http.Handler, null>>(next)).ServeHTTP($.pointerValueOrNil((d as http.ResponseWriter | null))!, r)
	}, ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)), "http.HandlerFunc", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo))
}

export async function InstrumentHandlerRequestSize(obs: prometheus.ObserverVec | null, next: http.Handler | null, opts: $.Slice<__goscript_option.Option | null>): globalThis.Promise<http.HandlerFunc | null> {
	let mwOpts: __goscript_option.option | $.VarRef<__goscript_option.option> | null = new __goscript_option.option()
	let mwOpts$: __goscript_option.option = mwOpts == null ? $.pointerTarget<__goscript_option.option>(mwOpts) : (mwOpts as any).__isVarRef === true ? (mwOpts as any).value : (mwOpts as any).__goValue === undefined ? (mwOpts as any) : $.pointerTarget<__goscript_option.option>(mwOpts)
	for (let __goscriptRangeTarget3 = opts, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let o = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_option.Option | null)
		void (__goscriptAwait = o!(mwOpts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	let [code, method] = await checkLabels((obs as prometheus.Collector | null))

	if (code) {
		return $.namedFunction($.functionValue(async (w: http.ResponseWriter | null, r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> => {
			let d = await __goscript_delegator.newDelegator(w, (null as ((_p0: number) => void) | null))
			await (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<http.Handler, null>) : $.pointerValue<Exclude<http.Handler, null>>(next)).ServeHTTP($.pointerValueOrNil((d as http.ResponseWriter | null))!, r)
			let size = computeApproximateRequestSize(r)
			void (__goscriptAwait = $.pointerValue<Exclude<prometheus.Observer, null>>((__goscriptAwait = (obs !== null && (obs as any).__isVarRef !== true && (obs as any).__goValue === undefined ? (obs as Exclude<prometheus.ObserverVec, null>) : $.pointerValue<Exclude<prometheus.ObserverVec, null>>(obs)).With(labels(code, method, $.pointerValue<http.Request>(r).Method, (__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<__goscript_delegator.delegator, null>) : $.pointerValue<Exclude<__goscript_delegator.delegator, null>>(d)).Status(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (mwOpts$ as __goscript_option.option).extraMethods)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Observe(size), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)), "http.HandlerFunc", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo))
	}

	return $.namedFunction($.functionValue(async (w: http.ResponseWriter | null, r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> => {
		await (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<http.Handler, null>) : $.pointerValue<Exclude<http.Handler, null>>(next)).ServeHTTP($.pointerValueOrNil(w)!, r)
		let size = computeApproximateRequestSize(r)
		void (__goscriptAwait = $.pointerValue<Exclude<prometheus.Observer, null>>((__goscriptAwait = (obs !== null && (obs as any).__isVarRef !== true && (obs as any).__goValue === undefined ? (obs as Exclude<prometheus.ObserverVec, null>) : $.pointerValue<Exclude<prometheus.ObserverVec, null>>(obs)).With(labels(code, method, $.pointerValue<http.Request>(r).Method, 0, (mwOpts$ as __goscript_option.option).extraMethods)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Observe(size), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}, ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)), "http.HandlerFunc", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo))
}

export async function InstrumentHandlerResponseSize(obs: prometheus.ObserverVec | null, next: http.Handler | null, opts: $.Slice<__goscript_option.Option | null>): globalThis.Promise<http.Handler | null> {
	let mwOpts: __goscript_option.option | $.VarRef<__goscript_option.option> | null = new __goscript_option.option()
	for (let __goscriptRangeTarget4 = opts, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let o = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as __goscript_option.Option | null)
		void (__goscriptAwait = o!(mwOpts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	let [code, method] = await checkLabels((obs as prometheus.Collector | null))

	return $.namedValueInterfaceValue<http.Handler | null>($.namedFunction($.functionValue(async (w: http.ResponseWriter | null, r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> => {
		let d = await __goscript_delegator.newDelegator(w, (null as ((_p0: number) => void) | null))
		await (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<http.Handler, null>) : $.pointerValue<Exclude<http.Handler, null>>(next)).ServeHTTP($.pointerValueOrNil((d as http.ResponseWriter | null))!, r)
		void (__goscriptAwait = $.pointerValue<Exclude<prometheus.Observer, null>>((__goscriptAwait = (obs !== null && (obs as any).__isVarRef !== true && (obs as any).__goValue === undefined ? (obs as Exclude<prometheus.ObserverVec, null>) : $.pointerValue<Exclude<prometheus.ObserverVec, null>>(obs)).With(labels(code, method, $.pointerValue<http.Request>(r).Method, (__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<__goscript_delegator.delegator, null>) : $.pointerValue<Exclude<__goscript_delegator.delegator, null>>(d)).Status(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.pointerValue<__goscript_option.option>(mwOpts).extraMethods)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Observe(globalThis.Number((__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<__goscript_delegator.delegator, null>) : $.pointerValue<Exclude<__goscript_delegator.delegator, null>>(d)).Written(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}, ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)), "http.HandlerFunc", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)), "http.HandlerFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export async function checkLabels(c: prometheus.Collector | null): globalThis.Promise<[boolean, boolean]> {
	let code: boolean = false
	let method: boolean = false
	// TODO(beorn7): Remove this hacky way to check for instance labels
	// once Descriptors can have their dimensionality queried.
	let desc: prometheus.Desc | $.VarRef<prometheus.Desc> | null = null! as prometheus.Desc | $.VarRef<prometheus.Desc> | null
	let m: prometheus.Metric | null = null! as prometheus.Metric | null
	let pm: $.VarRef<dto.Metric> = $.varRef($.markAsStructValue(new dto.Metric()))
	let lvs: $.Slice<string> = null! as $.Slice<string>

	// Get the Desc from the Collector.
	let descc: $.Channel<prometheus.Desc | $.VarRef<prometheus.Desc> | null> | null = $.makeChannel<prometheus.Desc | $.VarRef<prometheus.Desc> | null>(1, null! as prometheus.Desc | $.VarRef<prometheus.Desc> | null, "both")
	void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<prometheus.Collector, null>) : $.pointerValue<Exclude<prometheus.Collector, null>>(c)).Describe(descc), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, [boolean, boolean]>([
		{
			id: 0,
			isSend: false,
			channel: descc,
			onSelected: async (__goscriptSelect0Result) => {
				desc = __goscriptSelect0Result.value
			}
		},
		{
			id: -1,
			isSend: false,
			channel: null,
			onSelected: async (__goscriptSelect0Result) => {
				$.panic("no description provided by collector")
			}
		}
	], true)
	if (__goscriptSelect0HasReturn) {
		return __goscriptSelect0Value
	}
	const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, [boolean, boolean]>([
		{
			id: 0,
			isSend: false,
			channel: descc,
			onSelected: async (__goscriptSelect1Result) => {
				$.panic("more than one description provided by collector")
			}
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

	descc!.close()

	// Make sure the Collector has a valid Desc by registering it with a
	// temporary registry.
	await prometheus.Registry.prototype.MustRegister.call(prometheus.NewRegistry(), $.arrayToSlice<prometheus.Collector | null>([c]))

	// Create a ConstMetric with the Desc. Since we don't know how many
	// variable labels there are, try for as long as it needs.
	for (let err: $.GoError = errors.New("dummy"); err != null; lvs = $.appendOne(lvs, "zZgWfBxLqvG8kc8IMv3POi2Bb0tZI3vAnBx+gBaFi9FyPzB/CzKUer1yufDa")) {
		let __goscriptTuple0: any = await prometheus.NewConstMetric(desc, 3, 0, lvs)
		m = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
	}

	// Write out the metric into a proto message and look at the labels.
	// If the value is not the magicString, it is a constLabel, which doesn't interest us.
	// If the label is curried, it doesn't interest us.
	// In all other cases, only "code" or "method" is allowed.
	{
		let err = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<prometheus.Metric, null>) : $.pointerValue<Exclude<prometheus.Metric, null>>(m)).Write(pm), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			$.panic("error checking metric for labels")
		}
	}
	for (let __goscriptRangeTarget5 = pm.value.Label, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		let label = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
		let name = (label !== null && (label as any).__isVarRef !== true && (label as any).__goValue === undefined ? ((label as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(label))
		let value = (label !== null && (label as any).__isVarRef !== true && (label as any).__goValue === undefined ? ((label as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(label))
		if ((!$.stringEqual(value, "zZgWfBxLqvG8kc8IMv3POi2Bb0tZI3vAnBx+gBaFi9FyPzB/CzKUer1yufDa")) || await isLabelCurried(c, name)) {
			continue
		}
		switch (name) {
			case "code":
			{
				code = true
				break
			}
			case "method":
			{
				method = true
				break
			}
			default:
			{
				$.panic("metric partitioned with non-supported labels")
				break
			}
		}
	}
	return [code, method]
}

export async function isLabelCurried(c: prometheus.Collector | null, label: string): globalThis.Promise<boolean> {
	// This is even hackier than the label test above.
	// We essentially try to curry again and see if it works.
	// But for that, we need to type-convert to the two
	// types we use here, ObserverVec or *CounterVec.
	{
		const __goscriptTypeSwitchValue = c
		switch (true) {
			case $.typeAssert<prometheus.CounterVec | $.VarRef<prometheus.CounterVec> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("prometheus.CounterVec")).ok:
				{
					let v: prometheus.CounterVec | $.VarRef<prometheus.CounterVec> | null = $.typeAssert<prometheus.CounterVec | $.VarRef<prometheus.CounterVec> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("prometheus.CounterVec")).value
					{
						let [, err] = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as prometheus.CounterVec).CurryWith($.makeMap<string, string>([[label, "dummy"]])) : prometheus.CounterVec.prototype.CurryWith.call(v, $.makeMap<string, string>([[label, "dummy"]])))
						if (err == null) {
							return false
						}
					}
				}
				break
			case $.typeAssert<prometheus.ObserverVec | null>(__goscriptTypeSwitchValue, "prometheus.ObserverVec").ok:
				{
					let v: prometheus.ObserverVec | null = $.typeAssert<prometheus.ObserverVec | null>(__goscriptTypeSwitchValue, "prometheus.ObserverVec").value
					{
						let [, err] = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<prometheus.ObserverVec, null>) : $.pointerValue<Exclude<prometheus.ObserverVec, null>>(v)).CurryWith($.makeMap<string, string>([[label, "dummy"]]))
						if (err == null) {
							return false
						}
					}
				}
				break
			default:
				{
					let v: any = __goscriptTypeSwitchValue
					$.panic("unsupported metric vec type")
				}
				break
		}
	}
	return true
}

export let emptyLabels: prometheus.Labels = $.makeMap<string, string>([])

export function __goscript_set_emptyLabels(__goscriptValue: prometheus.Labels): void {
	emptyLabels = __goscriptValue
}

export function labels(code: boolean, method: boolean, reqMethod: string, status: number, extraMethods: $.Slice<string>): prometheus.Labels {
	if (!(code || method)) {
		return emptyLabels
	}
	let __goscriptShadow0: prometheus.Labels = $.makeMap<string, string>([])

	if (code) {
		$.mapSet(__goscriptShadow0, "code", sanitizeCode(status))
	}
	if (method) {
		$.mapSet(__goscriptShadow0, "method", sanitizeMethod(reqMethod, extraMethods))
	}

	return __goscriptShadow0
}

export function computeApproximateRequestSize(r: http.Request | $.VarRef<http.Request> | null): number {
	const r$: http.Request = r == null ? $.pointerTarget<http.Request>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<http.Request>(r)
	let s = 0
	if ((r$ as http.Request).URL != null) {
		s = s + ($.stringLen((r$ as http.Request).URL.String()))
	}

	s = s + ($.stringLen((r$ as http.Request).Method))
	s = s + ($.stringLen((r$ as http.Request).Proto))
	for (const [name, values] of (r$ as http.Request).Header?.entries() ?? []) {
		s = s + ($.stringLen(name))
		for (let __goscriptRangeTarget6 = values, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let value = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as string)
			s = s + ($.stringLen(value))
		}
	}
	s = s + ($.stringLen((r$ as http.Request).Host))

	// N.B. r.Form and r.MultipartForm are assumed to be included in r.URL.

	if ((r$ as http.Request).ContentLength != -1n) {
		s = s + ($.int((r$ as http.Request).ContentLength))
	}
	return s
}

export function sanitizeMethod(m: string, extraMethods: $.Slice<string>): string {
	// See https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods for
	// the methods chosen as default.
	switch (m) {
		case "GET":
		case "get":
		{
			return "get"
			break
		}
		case "PUT":
		case "put":
		{
			return "put"
			break
		}
		case "HEAD":
		case "head":
		{
			return "head"
			break
		}
		case "POST":
		case "post":
		{
			return "post"
			break
		}
		case "DELETE":
		case "delete":
		{
			return "delete"
			break
		}
		case "CONNECT":
		case "connect":
		{
			return "connect"
			break
		}
		case "OPTIONS":
		case "options":
		{
			return "options"
			break
		}
		case "NOTIFY":
		case "notify":
		{
			return "notify"
			break
		}
		case "TRACE":
		case "trace":
		{
			return "trace"
			break
		}
		case "PATCH":
		case "patch":
		{
			return "patch"
			break
		}
		default:
		{
			for (let __goscriptRangeTarget7 = extraMethods, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
				let method = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as string)
				if (strings.EqualFold(m, method)) {
					return strings.ToLower(m)
				}
			}
			return "unknown"
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function sanitizeCode(s: number): string {
	// See for accepted codes https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
	switch (s) {
		case 100:
		{
			return "100"
			break
		}
		case 101:
		{
			return "101"
			break
		}
		case 200:
		case 0:
		{
			return "200"
			break
		}
		case 201:
		{
			return "201"
			break
		}
		case 202:
		{
			return "202"
			break
		}
		case 203:
		{
			return "203"
			break
		}
		case 204:
		{
			return "204"
			break
		}
		case 205:
		{
			return "205"
			break
		}
		case 206:
		{
			return "206"
			break
		}
		case 300:
		{
			return "300"
			break
		}
		case 301:
		{
			return "301"
			break
		}
		case 302:
		{
			return "302"
			break
		}
		case 304:
		{
			return "304"
			break
		}
		case 305:
		{
			return "305"
			break
		}
		case 307:
		{
			return "307"
			break
		}
		case 400:
		{
			return "400"
			break
		}
		case 401:
		{
			return "401"
			break
		}
		case 402:
		{
			return "402"
			break
		}
		case 403:
		{
			return "403"
			break
		}
		case 404:
		{
			return "404"
			break
		}
		case 405:
		{
			return "405"
			break
		}
		case 406:
		{
			return "406"
			break
		}
		case 407:
		{
			return "407"
			break
		}
		case 408:
		{
			return "408"
			break
		}
		case 409:
		{
			return "409"
			break
		}
		case 410:
		{
			return "410"
			break
		}
		case 411:
		{
			return "411"
			break
		}
		case 412:
		{
			return "412"
			break
		}
		case 413:
		{
			return "413"
			break
		}
		case 414:
		{
			return "414"
			break
		}
		case 415:
		{
			return "415"
			break
		}
		case 416:
		{
			return "416"
			break
		}
		case 417:
		{
			return "417"
			break
		}
		case 418:
		{
			return "418"
			break
		}
		case 500:
		{
			return "500"
			break
		}
		case 501:
		{
			return "501"
			break
		}
		case 502:
		{
			return "502"
			break
		}
		case 503:
		{
			return "503"
			break
		}
		case 504:
		{
			return "504"
			break
		}
		case 505:
		{
			return "505"
			break
		}
		case 428:
		{
			return "428"
			break
		}
		case 429:
		{
			return "429"
			break
		}
		case 431:
		{
			return "431"
			break
		}
		case 511:
		{
			return "511"
			break
		}
		default:
		{
			if ((s >= 100) && (s <= 599)) {
				return strconv.Itoa(s)
			}
			return "unknown"
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({ServeHTTP: (receiver: any, ...args: any[]) => (http.HandlerFunc_ServeHTTP as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("ServeHTTP", [["w", "http.ResponseWriter"], ["r", /* @__PURE__ */ $.pointerType("http.Request")]])])
}

var __goscriptAwait: any
