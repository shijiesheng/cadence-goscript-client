// Generated file based on reverseproxy.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

import * as io from "@goscript/io/index.js"

import * as log from "@goscript/log/index.js"

import * as mime from "@goscript/mime/index.js"

import * as net from "@goscript/net/index.js"

import * as http from "@goscript/net/http/index.js"

import * as httptrace from "@goscript/net/http/httptrace/index.js"

import * as ascii from "@goscript/net/http/internal/ascii/index.js"

import * as textproto from "@goscript/net/textproto/index.js"

import * as url from "@goscript/net/url/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as httpguts from "@goscript/vendor/golang.org/x/net/http/httpguts/index.js"

import * as bufio from "@goscript/bufio/index.js"

import type * as tls from "@goscript/crypto/tls/index.js"

import type * as iter from "@goscript/iter/index.js"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/internal/godebug/index.js"
import "@goscript/io/index.js"
import "@goscript/log/index.js"
import "@goscript/mime/index.js"
import "@goscript/net/index.js"
import "@goscript/net/http/index.js"
import "@goscript/net/http/httptrace/index.js"
import "@goscript/net/http/internal/ascii/index.js"
import "@goscript/net/textproto/index.js"
import "@goscript/net/url/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/vendor/golang.org/x/net/http/httpguts/index.js"
import "@goscript/bufio/index.js"

$.registerTypePackagePath("net/http/httputil", ["httputil.ProxyRequest", "httputil.ReverseProxy", "httputil.BufferPool", "httputil.maxLatencyWriter", "httputil.switchProtocolCopier"])

export type BufferPool = {
	Get(): $.Slice<number>
	Put(_p0: $.Slice<number>): void
}

$.registerInterfaceType(
	"httputil.BufferPool",
	null,
	[$.methodSignature("Get", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Put", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))])]
);

export class ProxyRequest {
	// In is the request received by the proxy.
	// The Rewrite function must not modify In.
	public get In(): http.Request | $.VarRef<http.Request> | null {
		return this._fields.In
	}

	public set In(value: http.Request | $.VarRef<http.Request> | null) {
		this._fields.In = value
	}

	// Out is the request which will be sent by the proxy.
	// The Rewrite function may modify or replace this request.
	// Hop-by-hop headers are removed from this request
	// before Rewrite is called.
	public get Out(): http.Request | $.VarRef<http.Request> | null {
		return this._fields.Out
	}

	public set Out(value: http.Request | $.VarRef<http.Request> | null) {
		this._fields.Out = value
	}

	public _fields: {
		In: http.Request | $.VarRef<http.Request> | null
		Out: http.Request | $.VarRef<http.Request> | null
	}

	constructor(init?: Partial<{In?: http.Request | $.VarRef<http.Request> | null, Out?: http.Request | $.VarRef<http.Request> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			In: init?.In ?? (null! as http.Request | $.VarRef<http.Request> | null),
			Out: init?.Out ?? (null! as http.Request | $.VarRef<http.Request> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ProxyRequest {
		return new ProxyRequest(this, true)
	}

	public __goscriptAssign(source: ProxyRequest): void {
		const target = this._fields
		const values = source._fields
		target.In = values.In
		target.Out = values.Out
	}

	public SetURL(target: url.URL | $.VarRef<url.URL> | null): void {
		let r: ProxyRequest | $.VarRef<ProxyRequest> | null = this;
		const r$: ProxyRequest = r == null ? $.pointerTarget<ProxyRequest>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<ProxyRequest>(r)
		rewriteRequestURL((r$ as ProxyRequest).Out, target)
		$.pointerValue<http.Request>((r$ as ProxyRequest).Out).Host = ""
	}

	public async SetXForwarded(): globalThis.Promise<void> {
		const r: ProxyRequest | $.VarRef<ProxyRequest> | null = this;
		const r$: ProxyRequest = r == null ? $.pointerTarget<ProxyRequest>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<ProxyRequest>(r)
		let [clientIP, , err] = await net.SplitHostPort($.pointerValue<http.Request>((r$ as ProxyRequest).In).RemoteAddr)
		if (err == null) {
			let prior: $.Slice<string> = $.mapGet<string, $.Slice<string>, $.Slice<string>>($.pointerValue<http.Request>((r$ as ProxyRequest).Out).Header, "X-Forwarded-For", null)[0]
			if ($.sliceLen(prior) > 0) {
				clientIP = $.concatString(($.concatString(strings.Join(prior, ", "), ", ")), clientIP)
			}
			http.Header_Set($.pointerValue<http.Request>((r$ as ProxyRequest).Out).Header, "X-Forwarded-For", clientIP)
		} else {
			http.Header_Del($.pointerValue<http.Request>((r$ as ProxyRequest).Out).Header, "X-Forwarded-For")
		}
		http.Header_Set($.pointerValue<http.Request>((r$ as ProxyRequest).Out).Header, "X-Forwarded-Host", $.pointerValue<http.Request>((r$ as ProxyRequest).In).Host)
		if ($.pointerValue<http.Request>((r$ as ProxyRequest).In).TLS == null) {
			http.Header_Set($.pointerValue<http.Request>((r$ as ProxyRequest).Out).Header, "X-Forwarded-Proto", "http")
		} else {
			http.Header_Set($.pointerValue<http.Request>((r$ as ProxyRequest).Out).Header, "X-Forwarded-Proto", "https")
		}
	}

	static __typeInfo = $.registerStructType(
		"httputil.ProxyRequest",
		() => new ProxyRequest(),
		() => [$.methodSignature("SetURL", [["target", /* @__PURE__ */ $.pointerType("url.URL")]], [], true), $.methodSignature("SetXForwarded", [], [], true)],
		ProxyRequest,
		() => [/* @__PURE__ */ $.structField("In", /* @__PURE__ */ $.pointerType("http.Request"), [0], 0, true), /* @__PURE__ */ $.structField("Out", /* @__PURE__ */ $.pointerType("http.Request"), [1], 8, true)]
	)
}

export class ReverseProxy {
	// Rewrite must be a function which modifies
	// the request into a new request to be sent
	// using Transport. Its response is then copied
	// back to the original client unmodified.
	// Rewrite must not access the provided ProxyRequest
	// or its contents after returning.
	//
	// The Forwarded, X-Forwarded, X-Forwarded-Host,
	// and X-Forwarded-Proto headers are removed from the
	// outbound request before Rewrite is called. See also
	// the ProxyRequest.SetXForwarded method.
	//
	// Unparsable query parameters are removed from the
	// outbound request before Rewrite is called.
	// The Rewrite function may copy the inbound URL's
	// RawQuery to the outbound URL to preserve the original
	// parameter string. Note that this can lead to security
	// issues if the proxy's interpretation of query parameters
	// does not match that of the downstream server.
	//
	// At most one of Rewrite or Director may be set.
	public get Rewrite(): ((_p0: ProxyRequest | $.VarRef<ProxyRequest> | null) => void) | null {
		return this._fields.Rewrite
	}

	public set Rewrite(value: ((_p0: ProxyRequest | $.VarRef<ProxyRequest> | null) => void) | null) {
		this._fields.Rewrite = value
	}

	// The transport used to perform proxy requests.
	// If nil, http.DefaultTransport is used.
	public get Transport(): http.RoundTripper | null {
		return this._fields.Transport
	}

	public set Transport(value: http.RoundTripper | null) {
		this._fields.Transport = value
	}

	// FlushInterval specifies the flush interval
	// to flush to the client while copying the
	// response body.
	// If zero, no periodic flushing is done.
	// A negative value means to flush immediately
	// after each write to the client.
	// The FlushInterval is ignored when ReverseProxy
	// recognizes a response as a streaming response, or
	// if its ContentLength is -1; for such responses, writes
	// are flushed to the client immediately.
	public get FlushInterval(): time.Duration {
		return this._fields.FlushInterval
	}

	public set FlushInterval(value: time.Duration) {
		this._fields.FlushInterval = value
	}

	// ErrorLog specifies an optional logger for errors
	// that occur when attempting to proxy the request.
	// If nil, logging is done via the log package's standard logger.
	public get ErrorLog(): log.Logger | $.VarRef<log.Logger> | null {
		return this._fields.ErrorLog
	}

	public set ErrorLog(value: log.Logger | $.VarRef<log.Logger> | null) {
		this._fields.ErrorLog = value
	}

	// BufferPool optionally specifies a buffer pool to
	// get byte slices for use by io.CopyBuffer when
	// copying HTTP response bodies.
	public get BufferPool(): BufferPool | null {
		return this._fields.BufferPool
	}

	public set BufferPool(value: BufferPool | null) {
		this._fields.BufferPool = value
	}

	// ModifyResponse is an optional function that modifies the
	// Response from the backend. It is called if the backend
	// returns a response at all, with any HTTP status code.
	// If the backend is unreachable, the optional ErrorHandler is
	// called without any call to ModifyResponse.
	//
	// Hop-by-hop headers are removed from the response before
	// calling ModifyResponse. ModifyResponse may need to remove
	// additional headers to fit its deployment model, such as Alt-Svc.
	//
	// If ModifyResponse returns an error, ErrorHandler is called
	// with its error value. If ErrorHandler is nil, its default
	// implementation is used.
	public get ModifyResponse(): ((_p0: http.Response | $.VarRef<http.Response> | null) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.ModifyResponse
	}

	public set ModifyResponse(value: ((_p0: http.Response | $.VarRef<http.Response> | null) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.ModifyResponse = value
	}

	// ErrorHandler is an optional function that handles errors
	// reaching the backend or errors from ModifyResponse.
	//
	// If nil, the default is to log the provided error and return
	// a 502 Status Bad Gateway response.
	public get ErrorHandler(): ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null, _p2: $.GoError) => void) | null {
		return this._fields.ErrorHandler
	}

	public set ErrorHandler(value: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null, _p2: $.GoError) => void) | null) {
		this._fields.ErrorHandler = value
	}

	// Director is deprecated. Use Rewrite instead.
	//
	// This function is insecure:
	//
	//   - Hop-by-hop headers are removed from the request after Director
	//     returns, which can remove headers added by Director.
	//     A client can designate headers as hop-by-hop by listing them
	//     in the Connection header, so this permits a malicious client
	//     to remove any headers that may be added by Director.
	//
	//   - X-Forwarded-For, X-Forwarded-Host, and X-Forwarded-Proto
	//     headers in inbound requests are preserved by default,
	//     which can permit IP spoofing if the Director function is
	//     not careful to remove these headers.
	//
	// Rewrite addresses these issues.
	//
	// As an example of converting a Director function to Rewrite:
	//
	// 	// ReverseProxy with a Director function.
	// 	proxy := &httputil.ReverseProxy{
	// 		Director: func(req *http.Request) {
	// 			req.URL.Scheme = "https"
	// 			req.URL.Host = proxyHost
	//
	// 			// A malicious client can remove this header.
	// 			req.Header.Set("Some-Header", "some-header-value")
	//
	// 			// X-Forwarded-* headers sent by the client are preserved,
	// 			// since Director did not remove them.
	// 		},
	// 	}
	//
	// 	// ReverseProxy with a Rewrite function.
	// 	proxy := &httputil.ReverseProxy{
	// 		Rewrite: func(preq *httputil.ProxyRequest) {
	// 			// See also ProxyRequest.SetURL.
	// 			preq.Out.URL.Scheme = "https"
	// 			preq.Out.URL.Host = proxyHost
	//
	// 			// This header cannot be affected by a malicious client.
	// 			preq.Out.Header.Set("Some-Header", "some-header-value")
	//
	// 			// X-Forwarded- headers sent by the client have been
	// 			// removed from preq.Out.
	// 			// ProxyRequest.SetXForwarded optionally adds new ones.
	// 			preq.SetXForwarded()
	// 		},
	// 	}
	//
	// Director is a function which modifies
	// the request into a new request to be sent
	// using Transport. Its response is then copied
	// back to the original client unmodified.
	// Director must not access the provided Request
	// after returning.
	//
	// By default, the X-Forwarded-For header is set to the
	// value of the client IP address. If an X-Forwarded-For
	// header already exists, the client IP is appended to the
	// existing values. As a special case, if the header
	// exists in the Request.Header map but has a nil value
	// (such as when set by the Director func), the X-Forwarded-For
	// header is not modified.
	//
	// To prevent IP spoofing, be sure to delete any pre-existing
	// X-Forwarded-For header coming from the client or
	// an untrusted proxy.
	//
	// Hop-by-hop headers are removed from the request after
	// Director returns, which can remove headers added by
	// Director. Use a Rewrite function instead to ensure
	// modifications to the request are preserved.
	//
	// Unparsable query parameters are removed from the outbound
	// request if Request.Form is set after Director returns.
	//
	// At most one of Rewrite or Director may be set.
	//
	// Deprecated: Use Rewrite instead.
	public get Director(): ((_p0: http.Request | $.VarRef<http.Request> | null) => void) | null {
		return this._fields.Director
	}

	public set Director(value: ((_p0: http.Request | $.VarRef<http.Request> | null) => void) | null) {
		this._fields.Director = value
	}

	public _fields: {
		Rewrite: ((_p0: ProxyRequest | $.VarRef<ProxyRequest> | null) => void) | null
		Transport: http.RoundTripper | null
		FlushInterval: time.Duration
		ErrorLog: log.Logger | $.VarRef<log.Logger> | null
		BufferPool: BufferPool | null
		ModifyResponse: ((_p0: http.Response | $.VarRef<http.Response> | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		ErrorHandler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null, _p2: $.GoError) => void) | null
		Director: ((_p0: http.Request | $.VarRef<http.Request> | null) => void) | null
	}

	constructor(init?: Partial<{Rewrite?: ((_p0: ProxyRequest | $.VarRef<ProxyRequest> | null) => void) | null, Transport?: http.RoundTripper | null, FlushInterval?: time.Duration, ErrorLog?: log.Logger | $.VarRef<log.Logger> | null, BufferPool?: BufferPool | null, ModifyResponse?: ((_p0: http.Response | $.VarRef<http.Response> | null) => $.GoError | globalThis.Promise<$.GoError>) | null, ErrorHandler?: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null, _p2: $.GoError) => void) | null, Director?: ((_p0: http.Request | $.VarRef<http.Request> | null) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Rewrite: init?.Rewrite ?? (null! as ((_p0: ProxyRequest | $.VarRef<ProxyRequest> | null) => void) | null),
			Transport: init?.Transport ?? (null! as http.RoundTripper | null),
			FlushInterval: init?.FlushInterval ?? (0n as time.Duration),
			ErrorLog: init?.ErrorLog ?? (null! as log.Logger | $.VarRef<log.Logger> | null),
			BufferPool: init?.BufferPool ?? (null! as BufferPool | null),
			ModifyResponse: init?.ModifyResponse ?? (null! as ((_p0: http.Response | $.VarRef<http.Response> | null) => $.GoError | globalThis.Promise<$.GoError>) | null),
			ErrorHandler: init?.ErrorHandler ?? (null! as ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null, _p2: $.GoError) => void) | null),
			Director: init?.Director ?? (null! as ((_p0: http.Request | $.VarRef<http.Request> | null) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ReverseProxy {
		return new ReverseProxy(this, true)
	}

	public __goscriptAssign(source: ReverseProxy): void {
		const target = this._fields
		const values = source._fields
		target.Rewrite = values.Rewrite
		target.Transport = $.assignFieldValue(target.Transport, values.Transport, "http.RoundTripper")
		target.FlushInterval = values.FlushInterval
		target.ErrorLog = values.ErrorLog
		target.BufferPool = $.assignFieldValue(target.BufferPool, values.BufferPool, "httputil.BufferPool")
		target.ModifyResponse = values.ModifyResponse
		target.ErrorHandler = values.ErrorHandler
		target.Director = values.Director
	}

	public async ServeHTTP(rw: http.ResponseWriter | null, req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> {
		const p: ReverseProxy | $.VarRef<ReverseProxy> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const p$: ReverseProxy = p == null ? $.pointerTarget<ReverseProxy>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<ReverseProxy>(p)
		const req$: http.Request = req == null ? $.pointerTarget<http.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<http.Request>(req)
		let transport = (p$ as ReverseProxy).Transport
		if (transport == null) {
			transport = http.DefaultTransport
		}

		let ctx: context.Context | null = http.Request.prototype.Context.call($.pointerValue<http.Request>(req))
		if (((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null) != null) {
		} else {
			{
				let [cn, ok] = $.typeAssertTuple<http.CloseNotifier | null>(rw, "http.CloseNotifier")
				if (ok) {
					let cancel: context.CancelFunc | null = null! as context.CancelFunc | null
					let __goscriptTuple0: any = context.WithCancel($.pointerValueOrNil(ctx)!)
					ctx = __goscriptTuple0[0]
					cancel = __goscriptTuple0[1]
					const __goscriptDeferCallee0 = cancel
					__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
					let notifyChan: $.Channel<boolean> | null = ((__goscriptAwait = (cn !== null && (cn as any).__isVarRef !== true && (cn as any).__goValue === undefined ? (cn as Exclude<http.CloseNotifier, null>) : $.pointerValue<Exclude<http.CloseNotifier, null>>(cn)).CloseNotify(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<boolean> | null)
					queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
						const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
							{
								id: 0,
								isSend: false,
								channel: notifyChan,
								onSelected: async (__goscriptSelect0Result) => {
									void (__goscriptAwait = cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
								}
							},
							{
								id: 1,
								isSend: false,
								channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
							}
						], false)
						if (__goscriptSelect0HasReturn) {
							return __goscriptSelect0Value
						}
					})() })
				}
			}
		}

		let outreq: http.Request | $.VarRef<http.Request> | null = http.Request.prototype.Clone.call($.pointerValue<http.Request>(req), $.pointerValueOrNil(ctx)!)
		if ((req$ as http.Request).ContentLength == 0n) {
			$.pointerValue<http.Request>(outreq).Body = null
		}
		if ($.pointerValue<http.Request>(outreq).Body != null) {
			// Reading from the request body after returning from a handler is not
			// allowed, and the RoundTrip goroutine that reads the Body can outlive
			// this handler. This can lead to a crash if the handler panics (see
			// Issue 46866). Although calling Close doesn't guarantee there isn't
			// any Read in flight after the handle returns, in practice it's safe to
			// read after closing it.
			const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Close())($.pointerValue<Exclude<io.ReadCloser, null>>($.pointerValue<http.Request>(outreq).Body)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "io.Closer.Close-fm")
			__defer.defer(async () => { await __goscriptDeferCallee1() })
		}
		if ($.pointerValue<http.Request>(outreq).Header == null) {
			$.pointerValue<http.Request>(outreq).Header = $.makeMap<string, $.Slice<string>>()
		}

		if (((p$ as ReverseProxy).Director != null) == ((p$ as ReverseProxy).Rewrite != null)) {
			void (__goscriptAwait = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as ReverseProxy).getErrorHandler() : ReverseProxy.prototype.getErrorHandler.call(p))!(rw, req, errors.New("ReverseProxy must have exactly one of Director or Rewrite set")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}

		if ((p$ as ReverseProxy).Director != null) {
			void (__goscriptAwait = (p$ as ReverseProxy).Director!(outreq), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ($.pointerValue<http.Request>(outreq).Form != null) {
				$.pointerValue<url.URL>($.pointerValue<http.Request>(outreq).URL).RawQuery = await cleanQueryParams($.pointerValue<url.URL>($.pointerValue<http.Request>(outreq).URL).RawQuery)
			}
		}
		$.pointerValue<http.Request>(outreq).Close = false

		let reqUpType = await upgradeType($.pointerValue<http.Request>(outreq).Header)
		if (!ascii.IsPrint(reqUpType)) {
			void (__goscriptAwait = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as ReverseProxy).getErrorHandler() : ReverseProxy.prototype.getErrorHandler.call(p))!(rw, req, fmt.Errorf("client tried to switch to invalid protocol %q", reqUpType)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		await removeHopByHopHeaders($.pointerValue<http.Request>(outreq).Header)

		// Issue 21096: tell backend applications that care about trailer support
		// that we support trailers. (We do, but we don't go out of our way to
		// advertise that unless the incoming client request thought it was worth
		// mentioning.) Note that we look at req.Header, not outreq.Header, since
		// the latter has passed through removeHopByHopHeaders.
		if (httpguts.HeaderValuesContainsToken($.mapGet<string, $.Slice<string>, $.Slice<string>>((req$ as http.Request).Header, "Te", null)[0], "trailers")) {
			http.Header_Set($.pointerValue<http.Request>(outreq).Header, "Te", "trailers")
		}

		// After stripping all the hop-by-hop connection headers above, add back any
		// necessary for protocol upgrades, such as for websockets.
		if (!$.stringEqual(reqUpType, "")) {
			http.Header_Set($.pointerValue<http.Request>(outreq).Header, "Connection", "Upgrade")
			http.Header_Set($.pointerValue<http.Request>(outreq).Header, "Upgrade", reqUpType)
		}

		if ((p$ as ReverseProxy).Rewrite != null) {
			// Strip client-provided forwarding headers.
			// The Rewrite func may use SetXForwarded to set new values
			// for these or copy the previous values from the inbound request.
			http.Header_Del($.pointerValue<http.Request>(outreq).Header, "Forwarded")
			http.Header_Del($.pointerValue<http.Request>(outreq).Header, "X-Forwarded-For")
			http.Header_Del($.pointerValue<http.Request>(outreq).Header, "X-Forwarded-Host")
			http.Header_Del($.pointerValue<http.Request>(outreq).Header, "X-Forwarded-Proto")

			// Remove unparsable query parameters from the outbound request.
			$.pointerValue<url.URL>($.pointerValue<http.Request>(outreq).URL).RawQuery = await cleanQueryParams($.pointerValue<url.URL>($.pointerValue<http.Request>(outreq).URL).RawQuery)

			let pr: ProxyRequest | $.VarRef<ProxyRequest> | null = new ProxyRequest({In: req, Out: outreq})
			void (__goscriptAwait = (p$ as ReverseProxy).Rewrite!(pr), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			outreq = $.pointerValue<ProxyRequest>(pr).Out
		} else {
			{
				let [clientIP, , err] = await net.SplitHostPort((req$ as http.Request).RemoteAddr)
				if (err == null) {
					// If we aren't the first proxy retain prior
					// X-Forwarded-For information as a comma+space
					// separated list and fold multiple headers into one.
					let __goscriptTuple1: any = $.mapGet<string, $.Slice<string>, $.Slice<string>>($.pointerValue<http.Request>(outreq).Header, "X-Forwarded-For", null)
					let prior: $.Slice<string> = __goscriptTuple1[0]
					let ok = __goscriptTuple1[1]
					let omit = ok && (prior == null)
					if ($.sliceLen(prior) > 0) {
						clientIP = $.concatString(($.concatString(strings.Join(prior, ", "), ", ")), clientIP)
					}
					if (!omit) {
						http.Header_Set($.pointerValue<http.Request>(outreq).Header, "X-Forwarded-For", clientIP)
					}
				}
			}
		}

		if ($.stringEqual($.pointerValue<http.Request>(outreq).Method, "CONNECT")) {
			// We cannot handle CONNECT requests.
			// (Perhaps we should just send a 405 and never call ErrorHandler?
			// More consistent to always call ErrorHandler or ModifyResponse,
			// so we do that for now.)
			let err = errors.New("client sent unsupported CONNECT request")
			if ((p$ as ReverseProxy).ErrorHandler != null) {
				void (__goscriptAwait = (p$ as ReverseProxy).ErrorHandler!(rw, outreq, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as ReverseProxy).logf("http: proxy error: %v", $.arrayToSlice<any>([(err as any)])) : ReverseProxy.prototype.logf.call(p, "http: proxy error: %v", $.arrayToSlice<any>([(err as any)])))
				void (__goscriptAwait = (rw !== null && (rw as any).__isVarRef !== true && (rw as any).__goValue === undefined ? (rw as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(rw)).WriteHeader(405), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return
		}

		{
			let [, ok] = $.mapGet<string, $.Slice<string>, $.Slice<string>>($.pointerValue<http.Request>(outreq).Header, "User-Agent", null)
			if (!ok) {
				// If the outbound request doesn't have a User-Agent header set,
				// don't send the default Go HTTP client User-Agent.
				http.Header_Set($.pointerValue<http.Request>(outreq).Header, "User-Agent", "")
			}
		}

		let roundTripMutex: $.VarRef<sync.Mutex> = $.varRef($.markAsStructValue(new sync.Mutex()))
		let roundTripDone: boolean = false
		let trace: httptrace.ClientTrace | $.VarRef<httptrace.ClientTrace> | null = new httptrace.ClientTrace({Got1xxResponse: $.functionValue(async (code: number, header: textproto.MIMEHeader): globalThis.Promise<$.GoError> => {
			using __defer = new $.DisposableStack()
			await roundTripMutex.value.Lock()
			__defer.defer(() => { roundTripMutex.value.Unlock() })
			if (roundTripDone) {
				// If RoundTrip has returned, don't try to further modify
				// the ResponseWriter's header map.
				return null
			}
			let h: http.Header = ((__goscriptAwait = (rw !== null && (rw as any).__isVarRef !== true && (rw as any).__goValue === undefined ? (rw as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(rw)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as http.Header)
			copyHeader(h, header)
			void (__goscriptAwait = (rw !== null && (rw as any).__isVarRef !== true && (rw as any).__goValue === undefined ? (rw as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(rw)).WriteHeader(code), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

			// Clear headers, it's not automatically done by ResponseWriter.WriteHeader() for 1xx responses
			$.clear(h)
			return null
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), "textproto.MIMEHeader"], results: ["error"] } as $.FunctionTypeInfo))})
		outreq = http.Request.prototype.WithContext.call($.pointerValue<http.Request>(outreq), $.pointerValueOrNil(await httptrace.WithClientTrace(http.Request.prototype.Context.call($.pointerValue<http.Request>(outreq)), trace))!)

		let __goscriptTuple2: any = await (transport !== null && (transport as any).__isVarRef !== true && (transport as any).__goValue === undefined ? (transport as Exclude<http.RoundTripper, null>) : $.pointerValue<Exclude<http.RoundTripper, null>>(transport)).RoundTrip(outreq)
		let res: http.Response | $.VarRef<http.Response> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		let res$: http.Response = res == null ? $.pointerTarget<http.Response>(res) : (res as any).__isVarRef === true ? (res as any).value : (res as any).__goValue === undefined ? (res as any) : $.pointerTarget<http.Response>(res)
		await roundTripMutex.value.Lock()
		roundTripDone = true
		roundTripMutex.value.Unlock()
		if (err != null) {
			void (__goscriptAwait = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as ReverseProxy).getErrorHandler() : ReverseProxy.prototype.getErrorHandler.call(p))!(rw, outreq, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}

		// Deal with 101 Switching Protocols responses: (WebSocket, h2c, etc)
		if ((res$ as http.Response).StatusCode == 101) {
			if (!await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as ReverseProxy).modifyResponse(rw, res, outreq) : ReverseProxy.prototype.modifyResponse.call(p, rw, res, outreq))) {
				return
			}
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as ReverseProxy).handleUpgradeResponse(rw, outreq, res) : ReverseProxy.prototype.handleUpgradeResponse.call(p, rw, outreq, res))
			return
		}

		await removeHopByHopHeaders((res$ as http.Response).Header)

		if (!await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as ReverseProxy).modifyResponse(rw, res, outreq) : ReverseProxy.prototype.modifyResponse.call(p, rw, res, outreq))) {
			return
		}

		copyHeader(((__goscriptAwait = (rw !== null && (rw as any).__isVarRef !== true && (rw as any).__goValue === undefined ? (rw as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(rw)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as http.Header), (res$ as http.Response).Header)

		// The "Trailer" header isn't included in the Transport's response,
		// at least for *http.Transport. Build it up from Trailer.
		let announcedTrailers = $.len((res$ as http.Response).Trailer)
		if (announcedTrailers > 0) {
			let trailerKeys: $.Slice<string> = $.makeSlice<string>(0, $.len((res$ as http.Response).Trailer), "string")
			for (const [k, __rangeValue] of (res$ as http.Response).Trailer?.entries() ?? []) {
				trailerKeys = $.appendOne(trailerKeys, k)
			}
			http.Header_Add(((__goscriptAwait = (rw !== null && (rw as any).__isVarRef !== true && (rw as any).__goValue === undefined ? (rw as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(rw)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as http.Header), "Trailer", strings.Join(trailerKeys, ", "))
		}

		void (__goscriptAwait = (rw !== null && (rw as any).__isVarRef !== true && (rw as any).__goValue === undefined ? (rw as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(rw)).WriteHeader((res$ as http.Response).StatusCode), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		err = await ReverseProxy.prototype.copyResponse.call(p, rw, ((res$ as http.Response).Body as io.Reader | null), await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as ReverseProxy).flushInterval(res) : ReverseProxy.prototype.flushInterval.call(p, res)))
		if (err != null) {
			const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Close())($.pointerValue<Exclude<io.ReadCloser, null>>((res$ as http.Response).Body)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "io.Closer.Close-fm")
			__defer.defer(async () => { await __goscriptDeferCallee2() })
			// Since we're streaming the response, if we run into an error all we can do
			// is abort the request. Issue 23643: ReverseProxy should use ErrAbortHandler
			// on read error while copying body.
			if (!await shouldPanicOnCopyError(req)) {
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as ReverseProxy).logf("suppressing panic for copyResponse error in test; copy error: %v", $.arrayToSlice<any>([(err as any)])) : ReverseProxy.prototype.logf.call(p, "suppressing panic for copyResponse error in test; copy error: %v", $.arrayToSlice<any>([(err as any)])))
				return
			}
			$.panic((http.ErrAbortHandler as any))
		}
		await $.pointerValue<Exclude<io.ReadCloser, null>>((res$ as http.Response).Body).Close()

		if ($.len((res$ as http.Response).Trailer) > 0) {
			// Force chunking if we saw a response trailer.
			// This prevents net/http from calculating the length for short
			// bodies and adding a Content-Length.
			http.ResponseController.prototype.Flush.call($.pointerValue<http.ResponseController>(http.NewResponseController($.pointerValueOrNil(rw)!)))
		}

		if ($.len((res$ as http.Response).Trailer) == announcedTrailers) {
			copyHeader(((__goscriptAwait = (rw !== null && (rw as any).__isVarRef !== true && (rw as any).__goValue === undefined ? (rw as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(rw)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as http.Header), (res$ as http.Response).Trailer)
			return
		}

		for (let [k, vv] of (res$ as http.Response).Trailer?.entries() ?? []) {
			k = $.concatString(http.TrailerPrefix, k)
			for (let __goscriptRangeTarget0 = vv, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let v = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
				http.Header_Add(((__goscriptAwait = (rw !== null && (rw as any).__isVarRef !== true && (rw as any).__goValue === undefined ? (rw as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(rw)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as http.Header), k, v)
			}
		}
	}

	public async copyBuffer(dst: io.Writer | null, src: io.Reader | null, buf: $.Slice<number>): globalThis.Promise<[bigint, $.GoError]> {
		const p: ReverseProxy | $.VarRef<ReverseProxy> | null = this;
		if ($.sliceLen(buf) == 0) {
			buf = $.makeSlice<number>(32 * 1024, undefined, "byte")
		}
		let written: bigint = 0n
		while (true) {
			let [nr, rerr] = await (src !== null && (src as any).__isVarRef !== true && (src as any).__goValue === undefined ? (src as Exclude<io.Reader, null>) : $.pointerValue<Exclude<io.Reader, null>>(src)).Read(buf)
			if (((rerr != null) && (!$.comparableEqual(rerr, io.EOF))) && (!$.comparableEqual(rerr, context.Canceled))) {
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as ReverseProxy).logf("httputil: ReverseProxy read error during body copy: %v", $.arrayToSlice<any>([(rerr as any)])) : ReverseProxy.prototype.logf.call(p, "httputil: ReverseProxy read error during body copy: %v", $.arrayToSlice<any>([(rerr as any)])))
			}
			if (nr > 0) {
				let [nw, werr] = await (dst !== null && (dst as any).__isVarRef !== true && (dst as any).__goValue === undefined ? (dst as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(dst)).Write($.goSlice(buf, undefined, nr))
				if (nw > 0) {
					written = $.int64Add(written, $.int64(nw))
				}
				if (werr != null) {
					return [written, werr]
				}
				if (nr != nw) {
					return [written, io.ErrShortWrite]
				}
			}
			if (rerr != null) {
				if ($.comparableEqual(rerr, io.EOF)) {
					rerr = null
				}
				return [written, rerr]
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async copyResponse(dst: http.ResponseWriter | null, src: io.Reader | null, flushInterval: time.Duration): globalThis.Promise<$.GoError> {
		const p: ReverseProxy | $.VarRef<ReverseProxy> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const p$: ReverseProxy = p == null ? $.pointerTarget<ReverseProxy>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<ReverseProxy>(p)
		let w: io.Writer | null = (dst as io.Writer | null)

		if (flushInterval != 0n) {
			let mlw: maxLatencyWriter | $.VarRef<maxLatencyWriter> | null = new maxLatencyWriter({dst: (dst as io.Writer | null), flush: $.functionValue(((__receiver) => () => __receiver.Flush())($.pointerValue<http.ResponseController>(http.NewResponseController($.pointerValueOrNil(dst)!))), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "net/http.(*ResponseController).Flush-fm"), latency: flushInterval})
			let mlw$: maxLatencyWriter = mlw == null ? $.pointerTarget<maxLatencyWriter>(mlw) : (mlw as any).__isVarRef === true ? (mlw as any).value : (mlw as any).__goValue === undefined ? (mlw as any) : $.pointerTarget<maxLatencyWriter>(mlw)
			__defer.defer(async () => { await (mlw !== null && (mlw as any).__isVarRef !== true && (mlw as any).__goValue === undefined ? ((mlw as any) as maxLatencyWriter).stop() : maxLatencyWriter.prototype.stop.call(mlw)) });

			// set up initial timer so headers get flushed even if body writes are delayed
			;(mlw$ as maxLatencyWriter).flushPending = true;
			;(mlw$ as maxLatencyWriter).t = time.AfterFunc(flushInterval, $.functionValue(((__receiver) => () => __receiver.delayedFlush())((mlw$ as maxLatencyWriter)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "net/http/httputil.(*maxLatencyWriter).delayedFlush-fm"))

			w = $.interfaceValue<io.Writer | null>(mlw, "*httputil.maxLatencyWriter", /* @__PURE__ */ $.pointerType("httputil.maxLatencyWriter"))
		}

		let buf: $.Slice<number> = null! as $.Slice<number>
		if ((p$ as ReverseProxy).BufferPool != null) {
			buf = ((__goscriptAwait = $.pointerValue<Exclude<BufferPool, null>>((p$ as ReverseProxy).BufferPool).Get(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
			const __goscriptDeferCallee3 = $.functionValue(((__receiver) => (_p0: $.Slice<number>) => __receiver.Put(_p0))($.pointerValue<Exclude<BufferPool, null>>((p$ as ReverseProxy).BufferPool)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [] } as $.FunctionTypeInfo), "net/http/httputil.BufferPool.Put-fm")
			const __goscriptDeferArg0 = buf
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee3(__goscriptDeferArg0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		}
		let [, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as ReverseProxy).copyBuffer(w, src, buf) : ReverseProxy.prototype.copyBuffer.call(p, w, src, buf))
		return err
	}

	public async defaultErrorHandler(rw: http.ResponseWriter | null, req: http.Request | $.VarRef<http.Request> | null, err: $.GoError): globalThis.Promise<void> {
		const p: ReverseProxy | $.VarRef<ReverseProxy> | null = this;
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as ReverseProxy).logf("http: proxy error: %v", $.arrayToSlice<any>([(err as any)])) : ReverseProxy.prototype.logf.call(p, "http: proxy error: %v", $.arrayToSlice<any>([(err as any)])))
		void (__goscriptAwait = (rw !== null && (rw as any).__isVarRef !== true && (rw as any).__goValue === undefined ? (rw as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(rw)).WriteHeader(502), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async flushInterval(res: http.Response | $.VarRef<http.Response> | null): globalThis.Promise<time.Duration> {
		const p: ReverseProxy | $.VarRef<ReverseProxy> | null = this;
		const res$: http.Response = res == null ? $.pointerTarget<http.Response>(res) : (res as any).__isVarRef === true ? (res as any).value : (res as any).__goValue === undefined ? (res as any) : $.pointerTarget<http.Response>(res)
		let resCT = await http.Header_Get((res$ as http.Response).Header, "Content-Type")

		// For Server-Sent Events responses, flush immediately.
		// The MIME type is defined in https://www.w3.org/TR/eventsource/#text-event-stream
		{
			let [baseCT, , ] = mime.ParseMediaType(resCT)
			if ($.stringEqual(baseCT, "text/event-stream")) {
				return -1n
			}
		}

		// We might have the case of streaming for which Content-Length might be unset.
		if ((res$ as http.Response).ContentLength == -1n) {
			return -1n
		}

		return $.pointerValue<ReverseProxy>(p).FlushInterval
	}

	public getErrorHandler(): ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null, _p2: $.GoError) => void) | null {
		const p: ReverseProxy | $.VarRef<ReverseProxy> | null = this;
		const p$: ReverseProxy = p == null ? $.pointerTarget<ReverseProxy>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<ReverseProxy>(p)
		if ((p$ as ReverseProxy).ErrorHandler != null) {
			return (p$ as ReverseProxy).ErrorHandler
		}
		return $.functionValue(((__receiver) => (rw: http.ResponseWriter | null, req: http.Request | $.VarRef<http.Request> | null, err: $.GoError) => __receiver.defaultErrorHandler(rw, req, err))((p$ as ReverseProxy)), ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request"), "error"], results: [] } as $.FunctionTypeInfo), "net/http/httputil.(*ReverseProxy).defaultErrorHandler-fm")
	}

	public async handleUpgradeResponse(rw: http.ResponseWriter | null, req: http.Request | $.VarRef<http.Request> | null, res: http.Response | $.VarRef<http.Response> | null): globalThis.Promise<void> {
		const p: ReverseProxy | $.VarRef<ReverseProxy> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const res$: http.Response = res == null ? $.pointerTarget<http.Response>(res) : (res as any).__isVarRef === true ? (res as any).value : (res as any).__goValue === undefined ? (res as any) : $.pointerTarget<http.Response>(res)
		let reqUpType = await upgradeType($.pointerValue<http.Request>(req).Header)
		let resUpType = await upgradeType((res$ as http.Response).Header)
		if (!ascii.IsPrint(resUpType)) {
			void (__goscriptAwait = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as ReverseProxy).getErrorHandler() : ReverseProxy.prototype.getErrorHandler.call(p))!(rw, req, fmt.Errorf("backend tried to switch to invalid protocol %q", resUpType)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		if (!ascii.EqualFold(reqUpType, resUpType)) {
			void (__goscriptAwait = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as ReverseProxy).getErrorHandler() : ReverseProxy.prototype.getErrorHandler.call(p))!(rw, req, fmt.Errorf("backend tried to switch protocol %q when %q was requested", resUpType, reqUpType)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}

		let [backConn, ok] = $.typeAssertTuple<io.ReadWriteCloser | null>((res$ as http.Response).Body, "io.ReadWriteCloser")
		if (!ok) {
			void (__goscriptAwait = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as ReverseProxy).getErrorHandler() : ReverseProxy.prototype.getErrorHandler.call(p))!(rw, req, fmt.Errorf("internal error: 101 switching protocols response with non-writable body")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}

		let rc: http.ResponseController | $.VarRef<http.ResponseController> | null = http.NewResponseController($.pointerValueOrNil(rw)!)
		let __goscriptTuple3: any = http.ResponseController.prototype.Hijack.call($.pointerValue<http.ResponseController>(rc))
		let conn = __goscriptTuple3[0]
		let brw: bufio.ReadWriter | $.VarRef<bufio.ReadWriter> | null = __goscriptTuple3[1]
		let hijackErr = __goscriptTuple3[2]
		if (errors.Is($.pointerValueOrNil(hijackErr)!, $.pointerValueOrNil($.interfaceValue<$.GoError>(http.ErrNotSupported, "*http.ProtocolError", /* @__PURE__ */ $.pointerType("http.ProtocolError")))!)) {
			void (__goscriptAwait = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as ReverseProxy).getErrorHandler() : ReverseProxy.prototype.getErrorHandler.call(p))!(rw, req, fmt.Errorf("can't switch protocols using non-Hijacker ResponseWriter type %T", (rw as any))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}

		let backConnCloseCh: $.Channel<boolean> | null = $.makeChannel<boolean>(0, false, "both")
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			// Ensure that the cancellation of a request closes the backend.
			// See issue https://golang.org/issue/35559.
			const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: ((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>(http.Request.prototype.Context.call($.pointerValue<http.Request>(req))).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				},
				{
					id: 1,
					isSend: false,
					channel: backConnCloseCh,
				}
			], false)
			if (__goscriptSelect1HasReturn) {
				return __goscriptSelect1Value
			}
			await (backConn !== null && (backConn as any).__isVarRef !== true && (backConn as any).__goValue === undefined ? (backConn as Exclude<io.ReadWriteCloser, null>) : $.pointerValue<Exclude<io.ReadWriteCloser, null>>(backConn)).Close()
		})() })
		const __goscriptDeferArg1 = backConnCloseCh
		__defer.defer(() => { __goscriptDeferArg1!.close() })

		if (hijackErr != null) {
			void (__goscriptAwait = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as ReverseProxy).getErrorHandler() : ReverseProxy.prototype.getErrorHandler.call(p))!(rw, req, fmt.Errorf("Hijack failed on protocol switch: %v", (hijackErr as any))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Close())((conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? (conn as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(conn))), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "net.Conn.Close-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee4(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		copyHeader(((__goscriptAwait = (rw !== null && (rw as any).__isVarRef !== true && (rw as any).__goValue === undefined ? (rw as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(rw)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as http.Header), (res$ as http.Response).Header);

		;(res$ as http.Response).Header = ((__goscriptAwait = (rw !== null && (rw as any).__isVarRef !== true && (rw as any).__goValue === undefined ? (rw as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(rw)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as http.Header);
		;(res$ as http.Response).Body = null
		{
			let err = await http.Response.prototype.Write.call($.pointerValue<http.Response>(res), $.pointerValueOrNil($.interfaceValue<io.Writer | null>(brw, "*bufio.ReadWriter", /* @__PURE__ */ $.pointerType("bufio.ReadWriter")))!)
			if (err != null) {
				void (__goscriptAwait = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as ReverseProxy).getErrorHandler() : ReverseProxy.prototype.getErrorHandler.call(p))!(rw, req, fmt.Errorf("response write: %v", (err as any))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return
			}
		}
		{
			let err = await $.pointerValue<bufio.Writer>($.pointerValue<bufio.ReadWriter>(brw).Writer).Flush()
			if (err != null) {
				void (__goscriptAwait = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as ReverseProxy).getErrorHandler() : ReverseProxy.prototype.getErrorHandler.call(p))!(rw, req, fmt.Errorf("response flush: %v", (err as any))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return
			}
		}
		let errc: $.Channel<$.GoError> | null = $.makeChannel<$.GoError>(1, null! as $.GoError, "both")
		let spc = new switchProtocolCopier({user: (conn as io.ReadWriter | null), backend: (backConn as io.ReadWriter | null)}, true)
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => (errc: $.Channel<$.GoError> | null) => __receiver.copyToBackend(errc))($.markAsStructValue($.cloneStructValue(spc))), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.channelType("error", "send")], results: [] } as $.FunctionTypeInfo), "net/http/httputil.switchProtocolCopier.copyToBackend-fm")
		const __goscriptDeferArg2 = errc
		queueMicrotask(async () => { await __goscriptDeferCallee5(__goscriptDeferArg2) })
		const __goscriptDeferCallee6 = $.functionValue(((__receiver) => (errc: $.Channel<$.GoError> | null) => __receiver.copyFromBackend(errc))($.markAsStructValue($.cloneStructValue(spc))), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.channelType("error", "send")], results: [] } as $.FunctionTypeInfo), "net/http/httputil.switchProtocolCopier.copyFromBackend-fm")
		const __goscriptDeferArg3 = errc
		queueMicrotask(async () => { await __goscriptDeferCallee6(__goscriptDeferArg3) })

		// Wait until both copy functions have sent on the error channel,
		// or until one fails.
		let err = await $.chanRecv(errc)
		if (err == null) {
			err = await $.chanRecv(errc)
		}
	}

	public async logf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const p: ReverseProxy | $.VarRef<ReverseProxy> | null = this;
		const p$: ReverseProxy = p == null ? $.pointerTarget<ReverseProxy>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<ReverseProxy>(p)
		if ((p$ as ReverseProxy).ErrorLog != null) {
			await log.Logger.prototype.Printf.call((p$ as ReverseProxy).ErrorLog, format, args)
		} else {
			await log.Printf(format, args)
		}
	}

	public async modifyResponse(rw: http.ResponseWriter | null, res: http.Response | $.VarRef<http.Response> | null, req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<boolean> {
		const p: ReverseProxy | $.VarRef<ReverseProxy> | null = this;
		const p$: ReverseProxy = p == null ? $.pointerTarget<ReverseProxy>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<ReverseProxy>(p)
		if ((p$ as ReverseProxy).ModifyResponse == null) {
			return true
		}
		{
			let err = (__goscriptAwait = (p$ as ReverseProxy).ModifyResponse!(res), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				await $.pointerValue<Exclude<io.ReadCloser, null>>($.pointerValue<http.Response>(res).Body).Close()
				void (__goscriptAwait = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as ReverseProxy).getErrorHandler() : ReverseProxy.prototype.getErrorHandler.call(p))!(rw, req, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return false
			}
		}
		return true
	}

	static __typeInfo = $.registerStructType(
		"httputil.ReverseProxy",
		() => new ReverseProxy(),
		() => [$.methodSignature("ServeHTTP", [["rw", "http.ResponseWriter"], ["req", /* @__PURE__ */ $.pointerType("http.Request")]], [], true), $.methodSignature("copyBuffer", [["dst", "io.Writer"], ["src", "io.Reader"], ["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int64"), "error"], true), $.methodSignature("copyResponse", [["dst", "http.ResponseWriter"], ["src", "io.Reader"], ["flushInterval", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["error"], true), $.methodSignature("defaultErrorHandler", [["rw", "http.ResponseWriter"], ["req", /* @__PURE__ */ $.pointerType("http.Request")], ["err", "error"]], [], true), $.methodSignature("flushInterval", [["res", /* @__PURE__ */ $.pointerType("http.Response")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("getErrorHandler", [], [({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request"), "error"], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("handleUpgradeResponse", [["rw", "http.ResponseWriter"], ["req", /* @__PURE__ */ $.pointerType("http.Request")], ["res", /* @__PURE__ */ $.pointerType("http.Response")]], [], true), $.methodSignature("logf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("modifyResponse", [["rw", "http.ResponseWriter"], ["res", /* @__PURE__ */ $.pointerType("http.Response")], ["req", /* @__PURE__ */ $.pointerType("http.Request")]], [/* @__PURE__ */ $.basicType("bool")], true)],
		ReverseProxy,
		() => [/* @__PURE__ */ $.structField("Rewrite", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("httputil.ProxyRequest")], results: [] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("Transport", "http.RoundTripper", [1], 8, true), /* @__PURE__ */ $.structField("FlushInterval", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 24, true), /* @__PURE__ */ $.structField("ErrorLog", /* @__PURE__ */ $.pointerType("log.Logger"), [3], 32, true), /* @__PURE__ */ $.structField("BufferPool", "httputil.BufferPool", [4], 40, true), /* @__PURE__ */ $.structField("ModifyResponse", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http.Response")], results: ["error"] } as $.FunctionTypeInfo), [5], 56, true), /* @__PURE__ */ $.structField("ErrorHandler", ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request"), "error"], results: [] } as $.FunctionTypeInfo), [6], 64, true), /* @__PURE__ */ $.structField("Director", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo), [7], 72, true)]
	)
}

export class maxLatencyWriter {
	public get dst(): io.Writer | null {
		return this._fields.dst
	}

	public set dst(value: io.Writer | null) {
		this._fields.dst = value
	}

	public get flush(): (() => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.flush
	}

	public set flush(value: (() => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.flush = value
	}

	public get latency(): time.Duration {
		return this._fields.latency
	}

	public set latency(value: time.Duration) {
		this._fields.latency = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get t(): time.Timer | $.VarRef<time.Timer> | null {
		return this._fields.t
	}

	public set t(value: time.Timer | $.VarRef<time.Timer> | null) {
		this._fields.t = value
	}

	public get flushPending(): boolean {
		return this._fields.flushPending
	}

	public set flushPending(value: boolean) {
		this._fields.flushPending = value
	}

	public _fields: {
		dst: io.Writer | null
		flush: (() => $.GoError | globalThis.Promise<$.GoError>) | null
		latency: time.Duration
		mu: sync.Mutex
		t: time.Timer | $.VarRef<time.Timer> | null
		flushPending: boolean
	}

	constructor(init?: Partial<{dst?: io.Writer | null, flush?: (() => $.GoError | globalThis.Promise<$.GoError>) | null, latency?: time.Duration, mu?: sync.Mutex, t?: time.Timer | $.VarRef<time.Timer> | null, flushPending?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			dst: init?.dst ?? (null! as io.Writer | null),
			flush: init?.flush ?? (null! as (() => $.GoError | globalThis.Promise<$.GoError>) | null),
			latency: init?.latency ?? (0n as time.Duration),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			t: init?.t ?? (null! as time.Timer | $.VarRef<time.Timer> | null),
			flushPending: init?.flushPending ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): maxLatencyWriter {
		return new maxLatencyWriter(this, true)
	}

	public __goscriptAssign(source: maxLatencyWriter): void {
		const target = this._fields
		const values = source._fields
		target.dst = $.assignFieldValue(target.dst, values.dst, "io.Writer")
		target.flush = values.flush
		target.latency = values.latency
		$.assignStruct(target.mu, values.mu)
		target.t = values.t
		target.flushPending = values.flushPending
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let m: maxLatencyWriter | $.VarRef<maxLatencyWriter> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		using __defer = new $.DisposableStack()
		const m$: maxLatencyWriter = m == null ? $.pointerTarget<maxLatencyWriter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<maxLatencyWriter>(m)
		await (m$ as maxLatencyWriter).mu.Lock()
		const __goscriptDeferCallee7 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as maxLatencyWriter).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee7() })
		let __goscriptTuple5: any = await $.pointerValue<Exclude<io.Writer, null>>((m$ as maxLatencyWriter).dst).Write(p)
		n = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if ((m$ as maxLatencyWriter).latency < 0n) {
			void (__goscriptAwait = (m$ as maxLatencyWriter).flush!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			__defer.dispose()
			return [n, err]
		}
		if ((m$ as maxLatencyWriter).flushPending) {
			__defer.dispose()
			return [n, err]
		}
		if ((m$ as maxLatencyWriter).t == null) {
			;(m$ as maxLatencyWriter).t = time.AfterFunc((m$ as maxLatencyWriter).latency, $.functionValue(((__receiver) => () => __receiver.delayedFlush())((m$ as maxLatencyWriter)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "net/http/httputil.(*maxLatencyWriter).delayedFlush-fm"))
		} else {
			time.Timer.prototype.Reset.call($.pointerValue<time.Timer>((m$ as maxLatencyWriter).t), (m$ as maxLatencyWriter).latency)
		}
		;(m$ as maxLatencyWriter).flushPending = true
		__defer.dispose()
		return [n, err]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async delayedFlush(): globalThis.Promise<void> {
		let m: maxLatencyWriter | $.VarRef<maxLatencyWriter> | null = this;
		using __defer = new $.DisposableStack()
		const m$: maxLatencyWriter = m == null ? $.pointerTarget<maxLatencyWriter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<maxLatencyWriter>(m)
		await (m$ as maxLatencyWriter).mu.Lock()
		const __goscriptDeferCallee8 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as maxLatencyWriter).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee8() })
		if (!(m$ as maxLatencyWriter).flushPending) {
			return
		}
		void (__goscriptAwait = (m$ as maxLatencyWriter).flush!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(m$ as maxLatencyWriter).flushPending = false
	}

	public async stop(): globalThis.Promise<void> {
		let m: maxLatencyWriter | $.VarRef<maxLatencyWriter> | null = this;
		using __defer = new $.DisposableStack()
		const m$: maxLatencyWriter = m == null ? $.pointerTarget<maxLatencyWriter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<maxLatencyWriter>(m)
		await (m$ as maxLatencyWriter).mu.Lock()
		const __goscriptDeferCallee9 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as maxLatencyWriter).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee9() });
		;(m$ as maxLatencyWriter).flushPending = false
		if ((m$ as maxLatencyWriter).t != null) {
			time.Timer.prototype.Stop.call($.pointerValue<time.Timer>((m$ as maxLatencyWriter).t))
		}
	}

	static __typeInfo = $.registerStructType(
		"httputil.maxLatencyWriter",
		() => new maxLatencyWriter(),
		() => [$.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("delayedFlush", [], [], true), $.methodSignature("stop", [], [], true)],
		maxLatencyWriter,
		() => [/* @__PURE__ */ $.structField("dst", "io.Writer", [0], 0, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("flush", ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), [1], 16, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("latency", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 24, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [3], 32, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("t", /* @__PURE__ */ $.pointerType("time.Timer"), [4], 40, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("flushPending", /* @__PURE__ */ $.basicType("bool"), [5], 48, false, { pkgPath: "net/http/httputil" })]
	)
}

export class switchProtocolCopier {
	public get user(): io.ReadWriter | null {
		return this._fields.user
	}

	public set user(value: io.ReadWriter | null) {
		this._fields.user = value
	}

	public get backend(): io.ReadWriter | null {
		return this._fields.backend
	}

	public set backend(value: io.ReadWriter | null) {
		this._fields.backend = value
	}

	public _fields: {
		user: io.ReadWriter | null
		backend: io.ReadWriter | null
	}

	constructor(init?: Partial<{user?: io.ReadWriter | null, backend?: io.ReadWriter | null}>, __goscriptValue?: boolean) {
		this._fields = {
			user: init?.user ?? (null! as io.ReadWriter | null),
			backend: init?.backend ?? (null! as io.ReadWriter | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): switchProtocolCopier {
		return new switchProtocolCopier(this, true)
	}

	public __goscriptAssign(source: switchProtocolCopier): void {
		const target = this._fields
		const values = source._fields
		target.user = $.assignFieldValue(target.user, values.user, "io.ReadWriter")
		target.backend = $.assignFieldValue(target.backend, values.backend, "io.ReadWriter")
	}

	public async copyFromBackend(errc: $.Channel<$.GoError> | null): globalThis.Promise<void> {
		const c = this;
		{
			let [, err] = await io.Copy($.pointerValueOrNil((c.user as io.Writer | null))!, $.pointerValueOrNil((c.backend as io.Reader | null))!)
			if (err != null) {
				await $.chanSend(errc, err)
				return
			}
		}

		// backend conn has reached EOF so propogate close write to user conn
		{
			let [wc, ok] = $.typeAssertTuple<any>(c.user, { kind: $.TypeKind.Interface, methods: [{ name: "CloseWrite", args: [], returns: [{ name: "_r0", type: "error" }] }] })
			if (ok) {
				await $.chanSend(errc, (__goscriptAwait = (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? (wc as any) : $.pointerValue<any>(wc)).CloseWrite(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				return
			}
		}

		await $.chanSend(errc, errCopyDone)
	}

	public async copyToBackend(errc: $.Channel<$.GoError> | null): globalThis.Promise<void> {
		const c = this;
		{
			let [, err] = await io.Copy($.pointerValueOrNil((c.backend as io.Writer | null))!, $.pointerValueOrNil((c.user as io.Reader | null))!)
			if (err != null) {
				await $.chanSend(errc, err)
				return
			}
		}

		// user conn has reached EOF so propogate close write to backend conn
		{
			let [wc, ok] = $.typeAssertTuple<any>(c.backend, { kind: $.TypeKind.Interface, methods: [{ name: "CloseWrite", args: [], returns: [{ name: "_r0", type: "error" }] }] })
			if (ok) {
				await $.chanSend(errc, (__goscriptAwait = (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? (wc as any) : $.pointerValue<any>(wc)).CloseWrite(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				return
			}
		}

		await $.chanSend(errc, errCopyDone)
	}

	static __typeInfo = $.registerStructType(
		"httputil.switchProtocolCopier",
		() => new switchProtocolCopier(),
		() => [$.methodSignature("copyFromBackend", [["errc", /* @__PURE__ */ $.channelType("error", "send")]]), $.methodSignature("copyToBackend", [["errc", /* @__PURE__ */ $.channelType("error", "send")]])],
		switchProtocolCopier,
		() => [/* @__PURE__ */ $.structField("user", "io.ReadWriter", [0], 0, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("backend", "io.ReadWriter", [1], 16, false, { pkgPath: "net/http/httputil" })]
	)
}

export const defaultMaxParams: number = 10000

export function singleJoiningSlash(a: string, b: string): string {
	let aslash = strings.HasSuffix(a, "/")
	let bslash = strings.HasPrefix(b, "/")
	switch ((true as boolean)) {
		case aslash && bslash:
		{
			return $.concatString(a, $.sliceStringOrBytes(b, 1, undefined))
			break
		}
		case !aslash && !bslash:
		{
			return $.concatString(($.concatString(a, "/")), b)
			break
		}
	}
	return $.concatString(a, b)
}

export function joinURLPath(a: url.URL | $.VarRef<url.URL> | null, b: url.URL | $.VarRef<url.URL> | null): [string, string] {
	let path: string = ""
	let rawpath: string = ""
	if (($.stringEqual($.pointerValue<url.URL>(a).RawPath, "")) && ($.stringEqual($.pointerValue<url.URL>(b).RawPath, ""))) {
		return [singleJoiningSlash($.pointerValue<url.URL>(a).Path, $.pointerValue<url.URL>(b).Path), ""]
	}
	// Same as singleJoiningSlash, but uses EscapedPath to determine
	// whether a slash should be added
	let apath = (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as url.URL).EscapedPath() : url.URL.prototype.EscapedPath.call(a))
	let bpath = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as url.URL).EscapedPath() : url.URL.prototype.EscapedPath.call(b))

	let aslash = strings.HasSuffix(apath, "/")
	let bslash = strings.HasPrefix(bpath, "/")

	switch ((true as boolean)) {
		case aslash && bslash:
		{
			return [$.concatString($.pointerValue<url.URL>(a).Path, $.sliceStringOrBytes($.pointerValue<url.URL>(b).Path, 1, undefined)), $.concatString(apath, $.sliceStringOrBytes(bpath, 1, undefined))]
			break
		}
		case !aslash && !bslash:
		{
			return [$.concatString(($.concatString($.pointerValue<url.URL>(a).Path, "/")), $.pointerValue<url.URL>(b).Path), $.concatString(($.concatString(apath, "/")), bpath)]
			break
		}
	}
	return [$.concatString($.pointerValue<url.URL>(a).Path, $.pointerValue<url.URL>(b).Path), $.concatString(apath, bpath)]
}

export function NewSingleHostReverseProxy(target: url.URL | $.VarRef<url.URL> | null): ReverseProxy | $.VarRef<ReverseProxy> | null {
	let director: ((req: http.Request | $.VarRef<http.Request> | null) => void) | null = $.functionValue((req: http.Request | $.VarRef<http.Request> | null): void => {
		rewriteRequestURL(req, target)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo))
	return new ReverseProxy({Director: director})
}

export function rewriteRequestURL(req: http.Request | $.VarRef<http.Request> | null, target: url.URL | $.VarRef<url.URL> | null): void {
	const req$: http.Request = req == null ? $.pointerTarget<http.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<http.Request>(req)
	const target$: url.URL = target == null ? $.pointerTarget<url.URL>(target) : (target as any).__isVarRef === true ? (target as any).value : (target as any).__goValue === undefined ? (target as any) : $.pointerTarget<url.URL>(target)
	let targetQuery = (target$ as url.URL).RawQuery
	$.pointerValue<url.URL>((req$ as http.Request).URL).Scheme = (target$ as url.URL).Scheme
	$.pointerValue<url.URL>((req$ as http.Request).URL).Host = (target$ as url.URL).Host
	let __goscriptTuple4: any = joinURLPath(target, (req$ as http.Request).URL)
	$.pointerValue<url.URL>((req$ as http.Request).URL).Path = __goscriptTuple4[0]
	$.pointerValue<url.URL>((req$ as http.Request).URL).RawPath = __goscriptTuple4[1]
	if (($.stringEqual(targetQuery, "")) || ($.stringEqual($.pointerValue<url.URL>((req$ as http.Request).URL).RawQuery, ""))) {
		$.pointerValue<url.URL>((req$ as http.Request).URL).RawQuery = $.concatString(targetQuery, $.pointerValue<url.URL>((req$ as http.Request).URL).RawQuery)
	} else {
		$.pointerValue<url.URL>((req$ as http.Request).URL).RawQuery = $.concatString(($.concatString(targetQuery, "&")), $.pointerValue<url.URL>((req$ as http.Request).URL).RawQuery)
	}
}

export function copyHeader(dst: http.Header, src: http.Header): void {
	for (const [k, vv] of src?.entries() ?? []) {
		for (let __goscriptRangeTarget1 = vv, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let v = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
			http.Header_Add(dst, k, v)
		}
	}
}

export let hopHeaders: $.Slice<string> = $.arrayToSlice<string>(["Connection", "Proxy-Connection", "Keep-Alive", "Proxy-Authenticate", "Proxy-Authorization", "Te", "Trailer", "Transfer-Encoding", "Upgrade"])

export function __goscript_set_hopHeaders(__goscriptValue: $.Slice<string>): void {
	hopHeaders = __goscriptValue
}

export let inOurTests: boolean = false

export function __goscript_set_inOurTests(__goscriptValue: boolean): void {
	inOurTests = __goscriptValue
}

export async function shouldPanicOnCopyError(req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<boolean> {
	if (inOurTests) {
		// Our tests know to handle this panic.
		return true
	}
	if ((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>(http.Request.prototype.Context.call($.pointerValue<http.Request>(req))).Value($.interfaceValue(http.ServerContextKey, "*http.contextKey", /* @__PURE__ */ $.pointerType("http.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) {
		// We seem to be running under an HTTP server, so
		// it'll recover the panic.
		return true
	}
	// Otherwise act like Go 1.10 and earlier to not break
	// existing tests.
	return false
}

export async function removeHopByHopHeaders(h: http.Header): globalThis.Promise<void> {
	// RFC 7230, section 6.1: Remove headers listed in the "Connection" header.
	for (let __goscriptRangeTarget2 = $.mapGet<string, $.Slice<string>, $.Slice<string>>(h, "Connection", null)[0], __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let f = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
		let __goscriptRangeReturn0 = false
		;await (async () => {
			await strings.SplitSeq(f, ",")!(async (sf) => {
				{
					sf = textproto.TrimString(sf)
					if (!$.stringEqual(sf, "")) {
						http.Header_Del(h, sf)
					}
				}
				return true
			})
		})()
		if (__goscriptRangeReturn0) {
			return
		}
	}
	// RFC 2616, section 13.5.1: Remove a set of known hop-by-hop headers.
	// This behavior is superseded by the RFC 7230 Connection header, but
	// preserve it for backwards compatibility.
	for (let __goscriptRangeTarget3 = hopHeaders, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let f = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string)
		http.Header_Del(h, f)
	}
}

export async function upgradeType(h: http.Header): globalThis.Promise<string> {
	if (!httpguts.HeaderValuesContainsToken($.mapGet<string, $.Slice<string>, $.Slice<string>>(h, "Connection", null)[0], "Upgrade")) {
		return ""
	}
	return http.Header_Get(h, "Upgrade")
}

export let errCopyDone: $.GoError = errors.New("hijacked connection copy complete")

export function __goscript_set_errCopyDone(__goscriptValue: $.GoError): void {
	errCopyDone = __goscriptValue
}

export let urlmaxqueryparams: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("urlmaxqueryparams")

export function __goscript_set_urlmaxqueryparams(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	urlmaxqueryparams = __goscriptValue
}

export async function cleanQueryParams(s: string): globalThis.Promise<string> {
	let reencode: ((s: string) => string | globalThis.Promise<string>) | null = $.functionValue((s: string): string => {
		let __goscriptTuple6: any = url.ParseQuery(s)
		let v: url.Values = __goscriptTuple6[0]
		return url.Values_Encode(v)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo))
	if (!$.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(urlmaxqueryparams)), "")) {
		// Always reencode when a non-default urlmaxqueryparams is set.
		return reencode!(s)
	}
	{
		let numParams = strings.Count(s, "&") + 1
		if (numParams > 10000) {
			// Too many query parameters.
			return reencode!(s)
		}
	}
	for (let i = 0; i < $.stringLen(s); ) {
		switch ($.indexString(s, i)) {
			case 59:
			{
				return reencode!(s)
				break
			}
			case 37:
			{
				if ((((i + 2) >= $.stringLen(s)) || !ishex($.indexString(s, i + 1))) || !ishex($.indexString(s, i + 2))) {
					return reencode!(s)
				}
				i = i + (3)
				break
			}
			default:
			{
				i++
				break
			}
		}
	}
	return s
}

export function ishex(c: number): boolean {
	switch ((true as boolean)) {
		case (48 <= c) && (c <= 57):
		{
			return true
			break
		}
		case (97 <= c) && (c <= 102):
		{
			return true
			break
		}
		case (65 <= c) && (c <= 70):
		{
			return true
			break
		}
	}
	return false
}

var __goscriptAwait: any
