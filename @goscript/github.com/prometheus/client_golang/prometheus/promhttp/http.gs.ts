// Generated file based on http.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as gzip from "@goscript/compress/gzip/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as http from "@goscript/net/http/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as expfmt from "@goscript/github.com/prometheus/common/expfmt/index.js"

import * as prometheus from "@goscript/github.com/prometheus/client_golang/prometheus/index.js"

import type * as io_prometheus_client from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as __goscript_instrument_server from "./instrument_server.gs.ts"

import type * as __goscript_option from "./option.gs.ts"
import "@goscript/compress/gzip/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/net/http/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/prometheus/common/expfmt/index.js"
import "@goscript/github.com/prometheus/client_golang/prometheus/index.js"
import "./instrument_server.gs.ts"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus/promhttp", ["promhttp.HandlerErrorHandling", "promhttp.Logger", "promhttp.HandlerOpts"])

export type HandlerErrorHandling = number

export type Logger = {
	Println(v: $.Slice<any>): void
}

$.registerInterfaceType(
	"promhttp.Logger",
	null,
	[$.methodSignature("Println", [["v", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]])]
);

export class HandlerOpts {
	// ErrorLog specifies an optional Logger for errors collecting and
	// serving metrics. If nil, errors are not logged at all. Note that the
	// type of a reported error is often prometheus.MultiError, which
	// formats into a multi-line error string. If you want to avoid the
	// latter, create a Logger implementation that detects a
	// prometheus.MultiError and formats the contained errors into one line.
	public get ErrorLog(): Logger | null {
		return this._fields.ErrorLog
	}

	public set ErrorLog(value: Logger | null) {
		this._fields.ErrorLog = value
	}

	// ErrorHandling defines how errors are handled. Note that errors are
	// logged regardless of the configured ErrorHandling provided ErrorLog
	// is not nil.
	public get ErrorHandling(): HandlerErrorHandling {
		return this._fields.ErrorHandling
	}

	public set ErrorHandling(value: HandlerErrorHandling) {
		this._fields.ErrorHandling = value
	}

	// If Registry is not nil, it is used to register a metric
	// "promhttp_metric_handler_errors_total", partitioned by "cause". A
	// failed registration causes a panic. Note that this error counter is
	// different from the instrumentation you get from the various
	// InstrumentHandler... helpers. It counts errors that don't necessarily
	// result in a non-2xx HTTP status code. There are two typical cases:
	// (1) Encoding errors that only happen after streaming of the HTTP body
	// has already started (and the status code 200 has been sent). This
	// should only happen with custom collectors. (2) Collection errors with
	// no effect on the HTTP status code because ErrorHandling is set to
	// ContinueOnError.
	public get Registry(): prometheus.Registerer | null {
		return this._fields.Registry
	}

	public set Registry(value: prometheus.Registerer | null) {
		this._fields.Registry = value
	}

	// If DisableCompression is true, the handler will never compress the
	// response, even if requested by the client.
	public get DisableCompression(): boolean {
		return this._fields.DisableCompression
	}

	public set DisableCompression(value: boolean) {
		this._fields.DisableCompression = value
	}

	// The number of concurrent HTTP requests is limited to
	// MaxRequestsInFlight. Additional requests are responded to with 503
	// Service Unavailable and a suitable message in the body. If
	// MaxRequestsInFlight is 0 or negative, no limit is applied.
	public get MaxRequestsInFlight(): number {
		return this._fields.MaxRequestsInFlight
	}

	public set MaxRequestsInFlight(value: number) {
		this._fields.MaxRequestsInFlight = value
	}

	// If handling a request takes longer than Timeout, it is responded to
	// with 503 ServiceUnavailable and a suitable Message. No timeout is
	// applied if Timeout is 0 or negative. Note that with the current
	// implementation, reaching the timeout simply ends the HTTP requests as
	// described above (and even that only if sending of the body hasn't
	// started yet), while the bulk work of gathering all the metrics keeps
	// running in the background (with the eventual result to be thrown
	// away). Until the implementation is improved, it is recommended to
	// implement a separate timeout in potentially slow Collectors.
	public get Timeout(): time.Duration {
		return this._fields.Timeout
	}

	public set Timeout(value: time.Duration) {
		this._fields.Timeout = value
	}

	// If true, the experimental OpenMetrics encoding is added to the
	// possible options during content negotiation. Note that Prometheus
	// 2.5.0+ will negotiate OpenMetrics as first priority. OpenMetrics is
	// the only way to transmit exemplars. However, the move to OpenMetrics
	// is not completely transparent. Most notably, the values of "quantile"
	// labels of Summaries and "le" labels of Histograms are formatted with
	// a trailing ".0" if they would otherwise look like integer numbers
	// (which changes the identity of the resulting series on the Prometheus
	// server).
	public get EnableOpenMetrics(): boolean {
		return this._fields.EnableOpenMetrics
	}

	public set EnableOpenMetrics(value: boolean) {
		this._fields.EnableOpenMetrics = value
	}

	public _fields: {
		ErrorLog: Logger | null
		ErrorHandling: HandlerErrorHandling
		Registry: prometheus.Registerer | null
		DisableCompression: boolean
		MaxRequestsInFlight: number
		Timeout: time.Duration
		EnableOpenMetrics: boolean
	}

	constructor(init?: Partial<{ErrorLog?: Logger | null, ErrorHandling?: HandlerErrorHandling, Registry?: prometheus.Registerer | null, DisableCompression?: boolean, MaxRequestsInFlight?: number, Timeout?: time.Duration, EnableOpenMetrics?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			ErrorLog: init?.ErrorLog ?? (null! as Logger | null),
			ErrorHandling: init?.ErrorHandling ?? (0 as HandlerErrorHandling),
			Registry: init?.Registry ?? (null! as prometheus.Registerer | null),
			DisableCompression: init?.DisableCompression ?? (false as boolean),
			MaxRequestsInFlight: init?.MaxRequestsInFlight ?? (0 as number),
			Timeout: init?.Timeout ?? (0n as time.Duration),
			EnableOpenMetrics: init?.EnableOpenMetrics ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HandlerOpts {
		return new HandlerOpts(this, true)
	}

	public __goscriptAssign(source: HandlerOpts): void {
		const target = this._fields
		const values = source._fields
		target.ErrorLog = $.assignFieldValue(target.ErrorLog, values.ErrorLog, "promhttp.Logger")
		target.ErrorHandling = values.ErrorHandling
		target.Registry = $.assignFieldValue(target.Registry, values.Registry, "prometheus.Registerer")
		target.DisableCompression = values.DisableCompression
		target.MaxRequestsInFlight = values.MaxRequestsInFlight
		target.Timeout = values.Timeout
		target.EnableOpenMetrics = values.EnableOpenMetrics
	}

	static __typeInfo = $.registerStructType(
		"promhttp.HandlerOpts",
		() => new HandlerOpts(),
		() => [],
		HandlerOpts,
		() => [/* @__PURE__ */ $.structField("ErrorLog", "promhttp.Logger", [0], 0, true), /* @__PURE__ */ $.structField("ErrorHandling", /* @__PURE__ */ $.basicType("int", "promhttp.HandlerErrorHandling"), [1], 16, true), /* @__PURE__ */ $.structField("Registry", "prometheus.Registerer", [2], 24, true), /* @__PURE__ */ $.structField("DisableCompression", /* @__PURE__ */ $.basicType("bool"), [3], 40, true), /* @__PURE__ */ $.structField("MaxRequestsInFlight", /* @__PURE__ */ $.basicType("int"), [4], 48, true), /* @__PURE__ */ $.structField("Timeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [5], 56, true), /* @__PURE__ */ $.structField("EnableOpenMetrics", /* @__PURE__ */ $.basicType("bool"), [6], 64, true)]
	)
}

export const contentTypeHeader: string = "Content-Type"

export const contentEncodingHeader: string = "Content-Encoding"

export const acceptEncodingHeader: string = "Accept-Encoding"

export const HTTPErrorOnError: HandlerErrorHandling = 0

export const ContinueOnError: HandlerErrorHandling = 1

export const PanicOnError: HandlerErrorHandling = 2

export let gzipPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(gzip.NewWriter(null!), "*gzip.Writer", /* @__PURE__ */ $.pointerType("gzip.Writer"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_gzipPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(gzipPool.value, __goscriptValue)
}

export async function Handler(): globalThis.Promise<http.Handler | null> {
	return InstrumentMetricHandler(prometheus.DefaultRegisterer, await HandlerFor(prometheus.DefaultGatherer, new HandlerOpts(undefined, true)))
}

export async function HandlerFor(reg: prometheus.Gatherer | null, opts: HandlerOpts): globalThis.Promise<http.Handler | null> {
	let inFlightSem: $.Channel<{}> | null = null! as $.Channel<{}> | null
	let errCnt: prometheus.CounterVec | $.VarRef<prometheus.CounterVec> | null = await prometheus.NewCounterVec(new prometheus.CounterOpts({Name: "promhttp_metric_handler_errors_total", Help: "Total number of internal errors encountered by the promhttp metric handler."}, true), $.arrayToSlice<string>(["cause"]))

	if (opts.MaxRequestsInFlight > 0) {
		inFlightSem = $.makeChannel<{}>(opts.MaxRequestsInFlight, {}, "both")
	}
	if (opts.Registry != null) {
		// Initialize all possibilities that can occur below.
		await (errCnt !== null && (errCnt as any).__isVarRef !== true && (errCnt as any).__goValue === undefined ? ((errCnt as any) as prometheus.CounterVec).WithLabelValues($.arrayToSlice<string>(["gathering"])) : prometheus.CounterVec.prototype.WithLabelValues.call(errCnt, $.arrayToSlice<string>(["gathering"])))
		await (errCnt !== null && (errCnt as any).__isVarRef !== true && (errCnt as any).__goValue === undefined ? ((errCnt as any) as prometheus.CounterVec).WithLabelValues($.arrayToSlice<string>(["encoding"])) : prometheus.CounterVec.prototype.WithLabelValues.call(errCnt, $.arrayToSlice<string>(["encoding"])))
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<prometheus.Registerer, null>>(opts.Registry).Register($.interfaceValue<prometheus.Collector | null>(errCnt, "*prometheus.CounterVec", /* @__PURE__ */ $.pointerType("prometheus.CounterVec"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				{
					let [are, ok] = $.typeAssertTuple<prometheus.AlreadyRegisteredError>(err, "prometheus.AlreadyRegisteredError")
					if (ok) {
						errCnt = $.mustTypeAssert<prometheus.CounterVec | $.VarRef<prometheus.CounterVec> | null>(are.ExistingCollector, /* @__PURE__ */ $.pointerType("prometheus.CounterVec"))
					} else {
						$.panic((err as any))
					}
				}
			}
		}
	}

	let h = $.namedFunction($.functionValue(async (rsp: http.ResponseWriter | null, req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> => {
		await using __defer = new $.AsyncDisposableStack()
		if (inFlightSem != null) {
			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: true,
					channel: inFlightSem,
					value: {},
					onSelected: async (__goscriptSelect0Result) => {
						__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
							await $.chanRecv(inFlightSem)
						})() })
					}
				},
				{
					id: -1,
					isSend: false,
					channel: null,
					onSelected: async (__goscriptSelect0Result) => {
						http.Error($.pointerValueOrNil(rsp)!, await fmt.Sprintf("Limit of concurrent requests reached (%d), try again later.", $.basicInterfaceValue(opts.MaxRequestsInFlight, "int")), 503)
						return $.selectVoidReturn()
					}
				}
			], true)
			if (__goscriptSelect0HasReturn) {
				return __goscriptSelect0Value
			}
		}
		let __goscriptTuple0: any = await (reg !== null && (reg as any).__isVarRef !== true && (reg as any).__goValue === undefined ? (reg as Exclude<prometheus.Gatherer, null>) : $.pointerValue<Exclude<prometheus.Gatherer, null>>(reg)).Gather()
		let mfs: $.Slice<io_prometheus_client.MetricFamily | $.VarRef<io_prometheus_client.MetricFamily> | null> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			if (opts.ErrorLog != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<Logger, null>>(opts.ErrorLog).Println($.arrayToSlice<any>(["error gathering metrics:", (err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			void (__goscriptAwait = $.pointerValue<Exclude<prometheus.Counter, null>>((await (errCnt !== null && (errCnt as any).__isVarRef !== true && (errCnt as any).__goValue === undefined ? ((errCnt as any) as prometheus.CounterVec).WithLabelValues($.arrayToSlice<string>(["gathering"])) : prometheus.CounterVec.prototype.WithLabelValues.call(errCnt, $.arrayToSlice<string>(["gathering"]))))).Inc(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			switch (opts.ErrorHandling) {
				case 2:
				{
					$.panic((err as any))
					break
				}
				case 1:
				{
					if ($.sliceLen(mfs) == 0) {
						// Still report the error if no metrics have been gathered.
						await httpError(rsp, err)
						return
					}
					break
				}
				case 0:
				{
					await httpError(rsp, err)
					return
					break
				}
			}
		}

		let contentType: expfmt.Format = ""
		if (opts.EnableOpenMetrics) {
			contentType = await expfmt.NegotiateIncludingOpenMetrics($.pointerValue<http.Request>(req).Header)
		} else {
			contentType = await expfmt.Negotiate($.pointerValue<http.Request>(req).Header)
		}
		let header: http.Header = ((__goscriptAwait = (rsp !== null && (rsp as any).__isVarRef !== true && (rsp as any).__goValue === undefined ? (rsp as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(rsp)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as http.Header)
		http.Header_Set(header, "Content-Type", contentType)

		let w = (rsp as io.Writer | null)
		if (!opts.DisableCompression && await gzipAccepted($.pointerValue<http.Request>(req).Header)) {
			http.Header_Set(header, "Content-Encoding", "gzip")
			let gz: gzip.Writer | $.VarRef<gzip.Writer> | null = $.mustTypeAssert<gzip.Writer | $.VarRef<gzip.Writer> | null>(await gzipPool.value.Get(), /* @__PURE__ */ $.pointerType("gzip.Writer"))
			const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (x: any) => __receiver.Put(x))(gzipPool.value), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), "sync.(*Pool).Put-fm")
			const __goscriptDeferArg0 = $.interfaceValue(gz, "*gzip.Writer", /* @__PURE__ */ $.pointerType("gzip.Writer"))
			__defer.defer(() => { __goscriptDeferCallee0(__goscriptDeferArg0) })

			gzip.Writer.prototype.Reset.call($.pointerValue<gzip.Writer>(gz), $.pointerValueOrNil(w)!)
			__defer.defer(async () => { await gzip.Writer.prototype.Close.call($.pointerValue<gzip.Writer>(gz)) })

			w = $.interfaceValue<io.Writer | null>(gz, "*gzip.Writer", /* @__PURE__ */ $.pointerType("gzip.Writer"))
		}

		let enc = expfmt.NewEncoder(w, contentType)

		// handleError handles the error according to opts.ErrorHandling
		// and returns true if we have to abort after the handling.
		let handleError: ((err: $.GoError) => boolean | globalThis.Promise<boolean>) | null = $.functionValue(async (err: $.GoError): globalThis.Promise<boolean> => {
			if (err == null) {
				return false
			}
			if (opts.ErrorLog != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<Logger, null>>(opts.ErrorLog).Println($.arrayToSlice<any>(["error encoding and sending metric family:", (err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			void (__goscriptAwait = $.pointerValue<Exclude<prometheus.Counter, null>>((await (errCnt !== null && (errCnt as any).__isVarRef !== true && (errCnt as any).__goValue === undefined ? ((errCnt as any) as prometheus.CounterVec).WithLabelValues($.arrayToSlice<string>(["encoding"])) : prometheus.CounterVec.prototype.WithLabelValues.call(errCnt, $.arrayToSlice<string>(["encoding"]))))).Inc(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			switch (opts.ErrorHandling) {
				case 2:
				{
					$.panic((err as any))
					break
				}
				case 0:
				{
					return true
					break
				}
			}
			// Do nothing in all other cases, including ContinueOnError.
			return false
		}, ({ kind: $.TypeKind.Function, params: ["error"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))

		for (let __goscriptRangeTarget0 = mfs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let mf = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as io_prometheus_client.MetricFamily | $.VarRef<io_prometheus_client.MetricFamily> | null)
			if ((__goscriptAwait = handleError!((__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<expfmt.Encoder, null>) : $.pointerValue<Exclude<expfmt.Encoder, null>>(enc)).Encode(mf), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return
			}
		}
		{
			let [closer, ok] = $.typeAssertTuple<expfmt.Closer | null>(enc, "expfmt.Closer")
			if (ok) {
				// This in particular takes care of the final "# EOF\n" line for OpenMetrics.
				if ((__goscriptAwait = handleError!((__goscriptAwait = (closer !== null && (closer as any).__isVarRef !== true && (closer as any).__goValue === undefined ? (closer as Exclude<expfmt.Closer, null>) : $.pointerValue<Exclude<expfmt.Closer, null>>(closer)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					return
				}
			}
		}
	}, ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)), "http.HandlerFunc", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo))

	if (opts.Timeout <= 0n) {
		return $.namedValueInterfaceValue<http.Handler | null>(h, "http.HandlerFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
	}
	return http.TimeoutHandler($.pointerValueOrNil($.namedValueInterfaceValue<http.Handler | null>(h, "http.HandlerFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!, opts.Timeout, await fmt.Sprintf("Exceeded configured timeout of %v.\n", $.namedValueInterfaceValue<any>(opts.Timeout, "time.Duration", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())))
}

export async function InstrumentMetricHandler(reg: prometheus.Registerer | null, handler: http.Handler | null): globalThis.Promise<http.Handler | null> {
	let cnt: prometheus.CounterVec | $.VarRef<prometheus.CounterVec> | null = await prometheus.NewCounterVec(new prometheus.CounterOpts({Name: "promhttp_metric_handler_requests_total", Help: "Total number of scrapes by HTTP status code."}, true), $.arrayToSlice<string>(["code"]))
	// Initialize the most likely HTTP status codes.
	await (cnt !== null && (cnt as any).__isVarRef !== true && (cnt as any).__goValue === undefined ? ((cnt as any) as prometheus.CounterVec).WithLabelValues($.arrayToSlice<string>(["200"])) : prometheus.CounterVec.prototype.WithLabelValues.call(cnt, $.arrayToSlice<string>(["200"])))
	await (cnt !== null && (cnt as any).__isVarRef !== true && (cnt as any).__goValue === undefined ? ((cnt as any) as prometheus.CounterVec).WithLabelValues($.arrayToSlice<string>(["500"])) : prometheus.CounterVec.prototype.WithLabelValues.call(cnt, $.arrayToSlice<string>(["500"])))
	await (cnt !== null && (cnt as any).__isVarRef !== true && (cnt as any).__goValue === undefined ? ((cnt as any) as prometheus.CounterVec).WithLabelValues($.arrayToSlice<string>(["503"])) : prometheus.CounterVec.prototype.WithLabelValues.call(cnt, $.arrayToSlice<string>(["503"])))
	{
		let err = (__goscriptAwait = (reg !== null && (reg as any).__isVarRef !== true && (reg as any).__goValue === undefined ? (reg as Exclude<prometheus.Registerer, null>) : $.pointerValue<Exclude<prometheus.Registerer, null>>(reg)).Register($.interfaceValue<prometheus.Collector | null>(cnt, "*prometheus.CounterVec", /* @__PURE__ */ $.pointerType("prometheus.CounterVec"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			{
				let [are, ok] = $.typeAssertTuple<prometheus.AlreadyRegisteredError>(err, "prometheus.AlreadyRegisteredError")
				if (ok) {
					cnt = $.mustTypeAssert<prometheus.CounterVec | $.VarRef<prometheus.CounterVec> | null>(are.ExistingCollector, /* @__PURE__ */ $.pointerType("prometheus.CounterVec"))
				} else {
					$.panic((err as any))
				}
			}
		}
	}

	let gge = await prometheus.NewGauge(new prometheus.GaugeOpts({Name: "promhttp_metric_handler_requests_in_flight", Help: "Current number of scrapes being served."}, true))
	{
		let err = (__goscriptAwait = (reg !== null && (reg as any).__isVarRef !== true && (reg as any).__goValue === undefined ? (reg as Exclude<prometheus.Registerer, null>) : $.pointerValue<Exclude<prometheus.Registerer, null>>(reg)).Register((gge as prometheus.Collector | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			{
				let [are, ok] = $.typeAssertTuple<prometheus.AlreadyRegisteredError>(err, "prometheus.AlreadyRegisteredError")
				if (ok) {
					gge = $.mustTypeAssert<prometheus.Gauge | null>(are.ExistingCollector, "prometheus.Gauge")
				} else {
					$.panic((err as any))
				}
			}
		}
	}

	return $.namedValueInterfaceValue<http.Handler | null>(await __goscript_instrument_server.InstrumentHandlerCounter(cnt, __goscript_instrument_server.InstrumentHandlerInFlight(gge, handler), null), "http.HandlerFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export async function gzipAccepted(header: http.Header): globalThis.Promise<boolean> {
	let a = await http.Header_Get(header, "Accept-Encoding")
	let parts: $.Slice<string> = strings.Split(a, ",")
	for (let __goscriptRangeTarget1 = parts, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let part = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
		part = strings.TrimSpace(part)
		if (($.stringEqual(part, "gzip")) || strings.HasPrefix(part, "gzip;")) {
			return true
		}
	}
	return false
}

export async function httpError(rsp: http.ResponseWriter | null, err: $.GoError): globalThis.Promise<void> {
	http.Header_Del(((__goscriptAwait = (rsp !== null && (rsp as any).__isVarRef !== true && (rsp as any).__goValue === undefined ? (rsp as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(rsp)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as http.Header), "Content-Encoding")
	http.Error($.pointerValueOrNil(rsp)!, $.concatString("An error has occurred while serving metrics:\n\n", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), 500)
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

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptAwait: any
