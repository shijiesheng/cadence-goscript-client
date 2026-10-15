// Generated file based on instrument_client.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as http from "@goscript/net/http/index.js"

import * as httptrace from "@goscript/net/http/httptrace/index.js"

import * as time from "@goscript/time/index.js"

import * as prometheus from "@goscript/github.com/prometheus/client_golang/prometheus/index.js"

import * as context from "@goscript/context/index.js"

import * as __goscript_instrument_server from "./instrument_server.gs.ts"

import * as __goscript_option from "./option.gs.ts"
import "@goscript/crypto/tls/index.js"
import "@goscript/net/http/index.js"
import "@goscript/net/http/httptrace/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/prometheus/client_golang/prometheus/index.js"
import "@goscript/context/index.js"
import "./instrument_server.gs.ts"
import "./option.gs.ts"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus/promhttp", ["promhttp.RoundTripperFunc", "promhttp.InstrumentTrace"])

export type RoundTripperFunc = ((req: http.Request | $.VarRef<http.Request> | null) => [http.Response | $.VarRef<http.Response> | null, $.GoError] | globalThis.Promise<[http.Response | $.VarRef<http.Response> | null, $.GoError]>) | null

$.registerNamedValueType(
	"promhttp.RoundTripperFunc",
	{RoundTrip: (receiver: any, ...args: any[]) => (RoundTripperFunc_RoundTrip as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("RoundTrip", [["r", /* @__PURE__ */ $.pointerType("http.Request")]], [/* @__PURE__ */ $.pointerType("http.Response"), "error"])]
);

$.registerNamedValueType(
	"*promhttp.RoundTripperFunc",
	{RoundTrip: (receiver: any, ...args: any[]) => (RoundTripperFunc_RoundTrip as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("RoundTrip", [["r", /* @__PURE__ */ $.pointerType("http.Request")]], [/* @__PURE__ */ $.pointerType("http.Response"), "error"])]
);

export class InstrumentTrace {
	public get GotConn(): ((_p0: number) => void) | null {
		return this._fields.GotConn
	}

	public set GotConn(value: ((_p0: number) => void) | null) {
		this._fields.GotConn = value
	}

	public get PutIdleConn(): ((_p0: number) => void) | null {
		return this._fields.PutIdleConn
	}

	public set PutIdleConn(value: ((_p0: number) => void) | null) {
		this._fields.PutIdleConn = value
	}

	public get GotFirstResponseByte(): ((_p0: number) => void) | null {
		return this._fields.GotFirstResponseByte
	}

	public set GotFirstResponseByte(value: ((_p0: number) => void) | null) {
		this._fields.GotFirstResponseByte = value
	}

	public get Got100Continue(): ((_p0: number) => void) | null {
		return this._fields.Got100Continue
	}

	public set Got100Continue(value: ((_p0: number) => void) | null) {
		this._fields.Got100Continue = value
	}

	public get DNSStart(): ((_p0: number) => void) | null {
		return this._fields.DNSStart
	}

	public set DNSStart(value: ((_p0: number) => void) | null) {
		this._fields.DNSStart = value
	}

	public get DNSDone(): ((_p0: number) => void) | null {
		return this._fields.DNSDone
	}

	public set DNSDone(value: ((_p0: number) => void) | null) {
		this._fields.DNSDone = value
	}

	public get ConnectStart(): ((_p0: number) => void) | null {
		return this._fields.ConnectStart
	}

	public set ConnectStart(value: ((_p0: number) => void) | null) {
		this._fields.ConnectStart = value
	}

	public get ConnectDone(): ((_p0: number) => void) | null {
		return this._fields.ConnectDone
	}

	public set ConnectDone(value: ((_p0: number) => void) | null) {
		this._fields.ConnectDone = value
	}

	public get TLSHandshakeStart(): ((_p0: number) => void) | null {
		return this._fields.TLSHandshakeStart
	}

	public set TLSHandshakeStart(value: ((_p0: number) => void) | null) {
		this._fields.TLSHandshakeStart = value
	}

	public get TLSHandshakeDone(): ((_p0: number) => void) | null {
		return this._fields.TLSHandshakeDone
	}

	public set TLSHandshakeDone(value: ((_p0: number) => void) | null) {
		this._fields.TLSHandshakeDone = value
	}

	public get WroteHeaders(): ((_p0: number) => void) | null {
		return this._fields.WroteHeaders
	}

	public set WroteHeaders(value: ((_p0: number) => void) | null) {
		this._fields.WroteHeaders = value
	}

	public get Wait100Continue(): ((_p0: number) => void) | null {
		return this._fields.Wait100Continue
	}

	public set Wait100Continue(value: ((_p0: number) => void) | null) {
		this._fields.Wait100Continue = value
	}

	public get WroteRequest(): ((_p0: number) => void) | null {
		return this._fields.WroteRequest
	}

	public set WroteRequest(value: ((_p0: number) => void) | null) {
		this._fields.WroteRequest = value
	}

	public _fields: {
		GotConn: ((_p0: number) => void) | null
		PutIdleConn: ((_p0: number) => void) | null
		GotFirstResponseByte: ((_p0: number) => void) | null
		Got100Continue: ((_p0: number) => void) | null
		DNSStart: ((_p0: number) => void) | null
		DNSDone: ((_p0: number) => void) | null
		ConnectStart: ((_p0: number) => void) | null
		ConnectDone: ((_p0: number) => void) | null
		TLSHandshakeStart: ((_p0: number) => void) | null
		TLSHandshakeDone: ((_p0: number) => void) | null
		WroteHeaders: ((_p0: number) => void) | null
		Wait100Continue: ((_p0: number) => void) | null
		WroteRequest: ((_p0: number) => void) | null
	}

	constructor(init?: Partial<{GotConn?: ((_p0: number) => void) | null, PutIdleConn?: ((_p0: number) => void) | null, GotFirstResponseByte?: ((_p0: number) => void) | null, Got100Continue?: ((_p0: number) => void) | null, DNSStart?: ((_p0: number) => void) | null, DNSDone?: ((_p0: number) => void) | null, ConnectStart?: ((_p0: number) => void) | null, ConnectDone?: ((_p0: number) => void) | null, TLSHandshakeStart?: ((_p0: number) => void) | null, TLSHandshakeDone?: ((_p0: number) => void) | null, WroteHeaders?: ((_p0: number) => void) | null, Wait100Continue?: ((_p0: number) => void) | null, WroteRequest?: ((_p0: number) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			GotConn: init?.GotConn ?? (null! as ((_p0: number) => void) | null),
			PutIdleConn: init?.PutIdleConn ?? (null! as ((_p0: number) => void) | null),
			GotFirstResponseByte: init?.GotFirstResponseByte ?? (null! as ((_p0: number) => void) | null),
			Got100Continue: init?.Got100Continue ?? (null! as ((_p0: number) => void) | null),
			DNSStart: init?.DNSStart ?? (null! as ((_p0: number) => void) | null),
			DNSDone: init?.DNSDone ?? (null! as ((_p0: number) => void) | null),
			ConnectStart: init?.ConnectStart ?? (null! as ((_p0: number) => void) | null),
			ConnectDone: init?.ConnectDone ?? (null! as ((_p0: number) => void) | null),
			TLSHandshakeStart: init?.TLSHandshakeStart ?? (null! as ((_p0: number) => void) | null),
			TLSHandshakeDone: init?.TLSHandshakeDone ?? (null! as ((_p0: number) => void) | null),
			WroteHeaders: init?.WroteHeaders ?? (null! as ((_p0: number) => void) | null),
			Wait100Continue: init?.Wait100Continue ?? (null! as ((_p0: number) => void) | null),
			WroteRequest: init?.WroteRequest ?? (null! as ((_p0: number) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): InstrumentTrace {
		return new InstrumentTrace(this, true)
	}

	public __goscriptAssign(source: InstrumentTrace): void {
		const target = this._fields
		const values = source._fields
		target.GotConn = values.GotConn
		target.PutIdleConn = values.PutIdleConn
		target.GotFirstResponseByte = values.GotFirstResponseByte
		target.Got100Continue = values.Got100Continue
		target.DNSStart = values.DNSStart
		target.DNSDone = values.DNSDone
		target.ConnectStart = values.ConnectStart
		target.ConnectDone = values.ConnectDone
		target.TLSHandshakeStart = values.TLSHandshakeStart
		target.TLSHandshakeDone = values.TLSHandshakeDone
		target.WroteHeaders = values.WroteHeaders
		target.Wait100Continue = values.Wait100Continue
		target.WroteRequest = values.WroteRequest
	}

	static __typeInfo = $.registerStructType(
		"promhttp.InstrumentTrace",
		() => new InstrumentTrace(),
		() => [],
		InstrumentTrace,
		() => [/* @__PURE__ */ $.structField("GotConn", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("float64")], results: [] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("PutIdleConn", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("float64")], results: [] } as $.FunctionTypeInfo), [1], 8, true), /* @__PURE__ */ $.structField("GotFirstResponseByte", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("float64")], results: [] } as $.FunctionTypeInfo), [2], 16, true), /* @__PURE__ */ $.structField("Got100Continue", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("float64")], results: [] } as $.FunctionTypeInfo), [3], 24, true), /* @__PURE__ */ $.structField("DNSStart", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("float64")], results: [] } as $.FunctionTypeInfo), [4], 32, true), /* @__PURE__ */ $.structField("DNSDone", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("float64")], results: [] } as $.FunctionTypeInfo), [5], 40, true), /* @__PURE__ */ $.structField("ConnectStart", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("float64")], results: [] } as $.FunctionTypeInfo), [6], 48, true), /* @__PURE__ */ $.structField("ConnectDone", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("float64")], results: [] } as $.FunctionTypeInfo), [7], 56, true), /* @__PURE__ */ $.structField("TLSHandshakeStart", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("float64")], results: [] } as $.FunctionTypeInfo), [8], 64, true), /* @__PURE__ */ $.structField("TLSHandshakeDone", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("float64")], results: [] } as $.FunctionTypeInfo), [9], 72, true), /* @__PURE__ */ $.structField("WroteHeaders", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("float64")], results: [] } as $.FunctionTypeInfo), [10], 80, true), /* @__PURE__ */ $.structField("Wait100Continue", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("float64")], results: [] } as $.FunctionTypeInfo), [11], 88, true), /* @__PURE__ */ $.structField("WroteRequest", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("float64")], results: [] } as $.FunctionTypeInfo), [12], 96, true)]
	)
}

export async function RoundTripperFunc_RoundTrip(rt: RoundTripperFunc | null, r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<[http.Response | $.VarRef<http.Response> | null, $.GoError]> {
	return rt!(r)
}

export function InstrumentRoundTripperInFlight(gauge: prometheus.Gauge | null, next: http.RoundTripper | null): RoundTripperFunc | null {
	return $.namedFunction($.functionValue(async (r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<[http.Response | $.VarRef<http.Response> | null, $.GoError]> => {
		await using __defer = new $.AsyncDisposableStack()
		void (__goscriptAwait = (gauge !== null && (gauge as any).__isVarRef !== true && (gauge as any).__goValue === undefined ? (gauge as Exclude<prometheus.Gauge, null>) : $.pointerValue<Exclude<prometheus.Gauge, null>>(gauge)).Inc(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Dec())((gauge !== null && (gauge as any).__isVarRef !== true && (gauge as any).__goValue === undefined ? (gauge as Exclude<prometheus.Gauge, null>) : $.pointerValue<Exclude<prometheus.Gauge, null>>(gauge))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/prometheus/client_golang/prometheus.Gauge.Dec-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		return await (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<http.RoundTripper, null>) : $.pointerValue<Exclude<http.RoundTripper, null>>(next)).RoundTrip(r)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http.Request")], results: [/* @__PURE__ */ $.pointerType("http.Response"), "error"] } as $.FunctionTypeInfo)), "promhttp.RoundTripperFunc", ({ kind: $.TypeKind.Function, name: "promhttp.RoundTripperFunc", params: [/* @__PURE__ */ $.pointerType("http.Request")], results: [/* @__PURE__ */ $.pointerType("http.Response"), "error"] } as $.FunctionTypeInfo))
}

export async function InstrumentRoundTripperCounter(counter: prometheus.CounterVec | $.VarRef<prometheus.CounterVec> | null, next: http.RoundTripper | null, opts: $.Slice<__goscript_option.Option | null>): globalThis.Promise<RoundTripperFunc | null> {
	let rtOpts: __goscript_option.option | $.VarRef<__goscript_option.option> | null = new __goscript_option.option()
	for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let o = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_option.Option | null)
		void (__goscriptAwait = o!(rtOpts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	let [code, method] = await __goscript_instrument_server.checkLabels($.interfaceValue<prometheus.Collector | null>(counter, "*prometheus.CounterVec", /* @__PURE__ */ $.pointerType("prometheus.CounterVec")))

	return $.namedFunction($.functionValue(async (r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<[http.Response | $.VarRef<http.Response> | null, $.GoError]> => {
		let __goscriptTuple0: any = await (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<http.RoundTripper, null>) : $.pointerValue<Exclude<http.RoundTripper, null>>(next)).RoundTrip(r)
		let resp: http.Response | $.VarRef<http.Response> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err == null) {
			void (__goscriptAwait = $.pointerValue<Exclude<prometheus.Counter, null>>((await prometheus.CounterVec.prototype.With.call(counter, __goscript_instrument_server.labels(code, method, $.pointerValue<http.Request>(r).Method, $.pointerValue<http.Response>(resp).StatusCode, $.pointerValue<__goscript_option.option>(rtOpts).extraMethods)))).Inc(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return [resp, err]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http.Request")], results: [/* @__PURE__ */ $.pointerType("http.Response"), "error"] } as $.FunctionTypeInfo)), "promhttp.RoundTripperFunc", ({ kind: $.TypeKind.Function, name: "promhttp.RoundTripperFunc", params: [/* @__PURE__ */ $.pointerType("http.Request")], results: [/* @__PURE__ */ $.pointerType("http.Response"), "error"] } as $.FunctionTypeInfo))
}

export async function InstrumentRoundTripperDuration(obs: prometheus.ObserverVec | null, next: http.RoundTripper | null, opts: $.Slice<__goscript_option.Option | null>): globalThis.Promise<RoundTripperFunc | null> {
	let rtOpts: __goscript_option.option | $.VarRef<__goscript_option.option> | null = new __goscript_option.option()
	for (let __goscriptRangeTarget1 = opts, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let o = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_option.Option | null)
		void (__goscriptAwait = o!(rtOpts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	let [code, method] = await __goscript_instrument_server.checkLabels((obs as prometheus.Collector | null))

	return $.namedFunction($.functionValue(async (r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<[http.Response | $.VarRef<http.Response> | null, $.GoError]> => {
		let start = $.markAsStructValue($.cloneStructValue(time.Now()))
		let __goscriptTuple1: any = await (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<http.RoundTripper, null>) : $.pointerValue<Exclude<http.RoundTripper, null>>(next)).RoundTrip(r)
		let resp: http.Response | $.VarRef<http.Response> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err == null) {
			void (__goscriptAwait = $.pointerValue<Exclude<prometheus.Observer, null>>((__goscriptAwait = (obs !== null && (obs as any).__isVarRef !== true && (obs as any).__goValue === undefined ? (obs as Exclude<prometheus.ObserverVec, null>) : $.pointerValue<Exclude<prometheus.ObserverVec, null>>(obs)).With(__goscript_instrument_server.labels(code, method, $.pointerValue<http.Request>(r).Method, $.pointerValue<http.Response>(resp).StatusCode, $.pointerValue<__goscript_option.option>(rtOpts).extraMethods)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Observe(time.Duration_Seconds(time.Since($.markAsStructValue($.cloneStructValue(start))))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return [resp, err]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http.Request")], results: [/* @__PURE__ */ $.pointerType("http.Response"), "error"] } as $.FunctionTypeInfo)), "promhttp.RoundTripperFunc", ({ kind: $.TypeKind.Function, name: "promhttp.RoundTripperFunc", params: [/* @__PURE__ */ $.pointerType("http.Request")], results: [/* @__PURE__ */ $.pointerType("http.Response"), "error"] } as $.FunctionTypeInfo))
}

export function InstrumentRoundTripperTrace(it: InstrumentTrace | $.VarRef<InstrumentTrace> | null, next: http.RoundTripper | null): RoundTripperFunc | null {
	const it$: InstrumentTrace = it == null ? $.pointerTarget<InstrumentTrace>(it) : (it as any).__isVarRef === true ? (it as any).value : (it as any).__goValue === undefined ? (it as any) : $.pointerTarget<InstrumentTrace>(it)
	return $.namedFunction($.functionValue(async (r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<[http.Response | $.VarRef<http.Response> | null, $.GoError]> => {
		let start = $.markAsStructValue($.cloneStructValue(time.Now()))

		let trace: httptrace.ClientTrace | $.VarRef<httptrace.ClientTrace> | null = new httptrace.ClientTrace({GotConn: $.functionValue(async (_p0: httptrace.GotConnInfo): globalThis.Promise<void> => {
			if ((it$ as InstrumentTrace).GotConn != null) {
				await (it$ as InstrumentTrace).GotConn!(time.Duration_Seconds(time.Since($.markAsStructValue($.cloneStructValue(start)))))
			}
		}, ({ kind: $.TypeKind.Function, params: ["httptrace.GotConnInfo"], results: [] } as $.FunctionTypeInfo)), PutIdleConn: $.functionValue(async (err: $.GoError): globalThis.Promise<void> => {
			if (err != null) {
				return
			}
			if ((it$ as InstrumentTrace).PutIdleConn != null) {
				await (it$ as InstrumentTrace).PutIdleConn!(time.Duration_Seconds(time.Since($.markAsStructValue($.cloneStructValue(start)))))
			}
		}, ({ kind: $.TypeKind.Function, params: ["error"], results: [] } as $.FunctionTypeInfo)), DNSStart: $.functionValue(async (_p0: httptrace.DNSStartInfo): globalThis.Promise<void> => {
			if ((it$ as InstrumentTrace).DNSStart != null) {
				await (it$ as InstrumentTrace).DNSStart!(time.Duration_Seconds(time.Since($.markAsStructValue($.cloneStructValue(start)))))
			}
		}, ({ kind: $.TypeKind.Function, params: ["httptrace.DNSStartInfo"], results: [] } as $.FunctionTypeInfo)), DNSDone: $.functionValue(async (_p0: httptrace.DNSDoneInfo): globalThis.Promise<void> => {
			if ((it$ as InstrumentTrace).DNSDone != null) {
				await (it$ as InstrumentTrace).DNSDone!(time.Duration_Seconds(time.Since($.markAsStructValue($.cloneStructValue(start)))))
			}
		}, ({ kind: $.TypeKind.Function, params: ["httptrace.DNSDoneInfo"], results: [] } as $.FunctionTypeInfo)), ConnectStart: $.functionValue(async (_p0: string, _p1: string): globalThis.Promise<void> => {
			if ((it$ as InstrumentTrace).ConnectStart != null) {
				await (it$ as InstrumentTrace).ConnectStart!(time.Duration_Seconds(time.Since($.markAsStructValue($.cloneStructValue(start)))))
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo)), ConnectDone: $.functionValue(async (_p0: string, _p1: string, err: $.GoError): globalThis.Promise<void> => {
			if (err != null) {
				return
			}
			if ((it$ as InstrumentTrace).ConnectDone != null) {
				await (it$ as InstrumentTrace).ConnectDone!(time.Duration_Seconds(time.Since($.markAsStructValue($.cloneStructValue(start)))))
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), "error"], results: [] } as $.FunctionTypeInfo)), GotFirstResponseByte: $.functionValue(async (): globalThis.Promise<void> => {
			if ((it$ as InstrumentTrace).GotFirstResponseByte != null) {
				await (it$ as InstrumentTrace).GotFirstResponseByte!(time.Duration_Seconds(time.Since($.markAsStructValue($.cloneStructValue(start)))))
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), Got100Continue: $.functionValue(async (): globalThis.Promise<void> => {
			if ((it$ as InstrumentTrace).Got100Continue != null) {
				await (it$ as InstrumentTrace).Got100Continue!(time.Duration_Seconds(time.Since($.markAsStructValue($.cloneStructValue(start)))))
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), TLSHandshakeStart: $.functionValue(async (): globalThis.Promise<void> => {
			if ((it$ as InstrumentTrace).TLSHandshakeStart != null) {
				await (it$ as InstrumentTrace).TLSHandshakeStart!(time.Duration_Seconds(time.Since($.markAsStructValue($.cloneStructValue(start)))))
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), TLSHandshakeDone: $.functionValue(async (_p0: tls.ConnectionState, err: $.GoError): globalThis.Promise<void> => {
			if (err != null) {
				return
			}
			if ((it$ as InstrumentTrace).TLSHandshakeDone != null) {
				await (it$ as InstrumentTrace).TLSHandshakeDone!(time.Duration_Seconds(time.Since($.markAsStructValue($.cloneStructValue(start)))))
			}
		}, ({ kind: $.TypeKind.Function, params: ["tls.ConnectionState", "error"], results: [] } as $.FunctionTypeInfo)), WroteHeaders: $.functionValue(async (): globalThis.Promise<void> => {
			if ((it$ as InstrumentTrace).WroteHeaders != null) {
				await (it$ as InstrumentTrace).WroteHeaders!(time.Duration_Seconds(time.Since($.markAsStructValue($.cloneStructValue(start)))))
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), Wait100Continue: $.functionValue(async (): globalThis.Promise<void> => {
			if ((it$ as InstrumentTrace).Wait100Continue != null) {
				await (it$ as InstrumentTrace).Wait100Continue!(time.Duration_Seconds(time.Since($.markAsStructValue($.cloneStructValue(start)))))
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), WroteRequest: $.functionValue(async (_p0: httptrace.WroteRequestInfo): globalThis.Promise<void> => {
			if ((it$ as InstrumentTrace).WroteRequest != null) {
				await (it$ as InstrumentTrace).WroteRequest!(time.Duration_Seconds(time.Since($.markAsStructValue($.cloneStructValue(start)))))
			}
		}, ({ kind: $.TypeKind.Function, params: ["httptrace.WroteRequestInfo"], results: [] } as $.FunctionTypeInfo))})
		r = http.Request.prototype.WithContext.call($.pointerValue<http.Request>(r), $.pointerValueOrNil(await httptrace.WithClientTrace(http.Request.prototype.Context.call($.pointerValue<http.Request>(r)), trace))!)

		return (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<http.RoundTripper, null>) : $.pointerValue<Exclude<http.RoundTripper, null>>(next)).RoundTrip(r)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http.Request")], results: [/* @__PURE__ */ $.pointerType("http.Response"), "error"] } as $.FunctionTypeInfo)), "promhttp.RoundTripperFunc", ({ kind: $.TypeKind.Function, name: "promhttp.RoundTripperFunc", params: [/* @__PURE__ */ $.pointerType("http.Request")], results: [/* @__PURE__ */ $.pointerType("http.Response"), "error"] } as $.FunctionTypeInfo))
}

var __goscriptAwait: any
