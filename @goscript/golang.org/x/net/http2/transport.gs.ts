// Generated file based on transport.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as gzip from "@goscript/compress/gzip/index.js"

import * as context from "@goscript/context/index.js"

import * as rand from "@goscript/crypto/rand/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as fs from "@goscript/io/fs/index.js"

import * as log from "@goscript/log/index.js"

import * as math from "@goscript/math/index.js"

import * as bits2 from "@goscript/math/bits/index.js"

import * as mathrand from "@goscript/math/rand/index.js"

import * as net from "@goscript/net/index.js"

import * as http from "@goscript/net/http/index.js"

import * as httptrace from "@goscript/net/http/httptrace/index.js"

import * as textproto from "@goscript/net/textproto/index.js"

import * as os from "@goscript/os/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as httpguts from "@goscript/golang.org/x/net/http/httpguts/index.js"

import * as hpack from "@goscript/golang.org/x/net/http2/hpack/index.js"

import * as idna from "@goscript/golang.org/x/net/idna/index.js"

import * as url from "@goscript/net/url/index.js"

import * as __goscript_ascii from "./ascii.gs.ts"

import * as __goscript_client_conn_pool from "./client_conn_pool.gs.ts"

import * as __goscript_databuffer from "./databuffer.gs.ts"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_flow from "./flow.gs.ts"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_headermap from "./headermap.gs.ts"

import * as __goscript_http2 from "./http2.gs.ts"

import * as __goscript_pipe from "./pipe.gs.ts"

import * as __goscript_server from "./server.gs.ts"

import * as __goscript_timer from "./timer.gs.ts"

import * as __goscript_write from "./write.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/compress/gzip/index.js"
import "@goscript/context/index.js"
import "@goscript/crypto/rand/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/io/fs/index.js"
import "@goscript/log/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/net/index.js"
import "@goscript/net/http/index.js"
import "@goscript/net/http/httptrace/index.js"
import "@goscript/net/textproto/index.js"
import "@goscript/os/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/net/http/httpguts/index.js"
import "@goscript/golang.org/x/net/http2/hpack/index.js"
import "@goscript/golang.org/x/net/idna/index.js"
import "@goscript/net/url/index.js"
import "./ascii.gs.ts"
import "./client_conn_pool.gs.ts"
import "./databuffer.gs.ts"
import "./errors.gs.ts"
import "./flow.gs.ts"
import "./frame.gs.ts"
import "./headermap.gs.ts"
import "./http2.gs.ts"
import "./pipe.gs.ts"
import "./server.gs.ts"
import "./timer.gs.ts"
import "./write.gs.ts"

$.registerTypePackagePath("golang.org/x/net/http2", ["http2.Transport", "http2.transportTestHooks", "http2.ClientConn", "http2.clientStream", "http2.stickyErrWriter", "http2.noCachedConnError", "http2.RoundTripOpt", "http2.ClientConnState", "http2.clientConnIdleState", "http2.resAndError", "http2.clientConnReadLoop", "http2.GoAwayError", "http2.transportResponseBody", "http2.noBodyReader", "http2.missingBody", "http2.erringRoundTripper", "http2.gzipReader", "http2.errorReader", "http2.noDialH2RoundTripper"])

export class Transport {
	// DialTLSContext specifies an optional dial function with context for
	// creating TLS connections for requests.
	//
	// If DialTLSContext and DialTLS is nil, tls.Dial is used.
	//
	// If the returned net.Conn has a ConnectionState method like tls.Conn,
	// it will be used to set http.Response.TLS.
	public get DialTLSContext(): ((ctx: context.Context | null, network: string, addr: string, cfg: tls.Config | $.VarRef<tls.Config> | null) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null {
		return this._fields.DialTLSContext
	}

	public set DialTLSContext(value: ((ctx: context.Context | null, network: string, addr: string, cfg: tls.Config | $.VarRef<tls.Config> | null) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null) {
		this._fields.DialTLSContext = value
	}

	// DialTLS specifies an optional dial function for creating
	// TLS connections for requests.
	//
	// If DialTLSContext and DialTLS is nil, tls.Dial is used.
	//
	// Deprecated: Use DialTLSContext instead, which allows the transport
	// to cancel dials as soon as they are no longer needed.
	// If both are set, DialTLSContext takes priority.
	public get DialTLS(): ((network: string, addr: string, cfg: tls.Config | $.VarRef<tls.Config> | null) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null {
		return this._fields.DialTLS
	}

	public set DialTLS(value: ((network: string, addr: string, cfg: tls.Config | $.VarRef<tls.Config> | null) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null) {
		this._fields.DialTLS = value
	}

	// TLSClientConfig specifies the TLS configuration to use with
	// tls.Client. If nil, the default configuration is used.
	public get TLSClientConfig(): tls.Config | $.VarRef<tls.Config> | null {
		return this._fields.TLSClientConfig
	}

	public set TLSClientConfig(value: tls.Config | $.VarRef<tls.Config> | null) {
		this._fields.TLSClientConfig = value
	}

	// ConnPool optionally specifies an alternate connection pool to use.
	// If nil, the default is used.
	public get ConnPool(): __goscript_client_conn_pool.ClientConnPool | null {
		return this._fields.ConnPool
	}

	public set ConnPool(value: __goscript_client_conn_pool.ClientConnPool | null) {
		this._fields.ConnPool = value
	}

	// DisableCompression, if true, prevents the Transport from
	// requesting compression with an "Accept-Encoding: gzip"
	// request header when the Request contains no existing
	// Accept-Encoding value. If the Transport requests gzip on
	// its own and gets a gzipped response, it's transparently
	// decoded in the Response.Body. However, if the user
	// explicitly requested gzip it is not automatically
	// uncompressed.
	public get DisableCompression(): boolean {
		return this._fields.DisableCompression
	}

	public set DisableCompression(value: boolean) {
		this._fields.DisableCompression = value
	}

	// AllowHTTP, if true, permits HTTP/2 requests using the insecure,
	// plain-text "http" scheme. Note that this does not enable h2c support.
	public get AllowHTTP(): boolean {
		return this._fields.AllowHTTP
	}

	public set AllowHTTP(value: boolean) {
		this._fields.AllowHTTP = value
	}

	// MaxHeaderListSize is the http2 SETTINGS_MAX_HEADER_LIST_SIZE to
	// send in the initial settings frame. It is how many bytes
	// of response headers are allowed. Unlike the http2 spec, zero here
	// means to use a default limit (currently 10MB). If you actually
	// want to advertise an unlimited value to the peer, Transport
	// interprets the highest possible value here (0xffffffff or 1<<32-1)
	// to mean no limit.
	public get MaxHeaderListSize(): number {
		return this._fields.MaxHeaderListSize
	}

	public set MaxHeaderListSize(value: number) {
		this._fields.MaxHeaderListSize = value
	}

	// MaxReadFrameSize is the http2 SETTINGS_MAX_FRAME_SIZE to send in the
	// initial settings frame. It is the size in bytes of the largest frame
	// payload that the sender is willing to receive. If 0, no setting is
	// sent, and the value is provided by the peer, which should be 16384
	// according to the spec:
	// https://datatracker.ietf.org/doc/html/rfc7540#section-6.5.2.
	// Values are bounded in the range 16k to 16M.
	public get MaxReadFrameSize(): number {
		return this._fields.MaxReadFrameSize
	}

	public set MaxReadFrameSize(value: number) {
		this._fields.MaxReadFrameSize = value
	}

	// MaxDecoderHeaderTableSize optionally specifies the http2
	// SETTINGS_HEADER_TABLE_SIZE to send in the initial settings frame. It
	// informs the remote endpoint of the maximum size of the header compression
	// table used to decode header blocks, in octets. If zero, the default value
	// of 4096 is used.
	public get MaxDecoderHeaderTableSize(): number {
		return this._fields.MaxDecoderHeaderTableSize
	}

	public set MaxDecoderHeaderTableSize(value: number) {
		this._fields.MaxDecoderHeaderTableSize = value
	}

	// MaxEncoderHeaderTableSize optionally specifies an upper limit for the
	// header compression table used for encoding request headers. Received
	// SETTINGS_HEADER_TABLE_SIZE settings are capped at this limit. If zero,
	// the default value of 4096 is used.
	public get MaxEncoderHeaderTableSize(): number {
		return this._fields.MaxEncoderHeaderTableSize
	}

	public set MaxEncoderHeaderTableSize(value: number) {
		this._fields.MaxEncoderHeaderTableSize = value
	}

	// StrictMaxConcurrentStreams controls whether the server's
	// SETTINGS_MAX_CONCURRENT_STREAMS should be respected
	// globally. If false, new TCP connections are created to the
	// server as needed to keep each under the per-connection
	// SETTINGS_MAX_CONCURRENT_STREAMS limit. If true, the
	// server's SETTINGS_MAX_CONCURRENT_STREAMS is interpreted as
	// a global limit and callers of RoundTrip block when needed,
	// waiting for their turn.
	public get StrictMaxConcurrentStreams(): boolean {
		return this._fields.StrictMaxConcurrentStreams
	}

	public set StrictMaxConcurrentStreams(value: boolean) {
		this._fields.StrictMaxConcurrentStreams = value
	}

	// IdleConnTimeout is the maximum amount of time an idle
	// (keep-alive) connection will remain idle before closing
	// itself.
	// Zero means no limit.
	public get IdleConnTimeout(): time.Duration {
		return this._fields.IdleConnTimeout
	}

	public set IdleConnTimeout(value: time.Duration) {
		this._fields.IdleConnTimeout = value
	}

	// ReadIdleTimeout is the timeout after which a health check using ping
	// frame will be carried out if no frame is received on the connection.
	// Note that a ping response will is considered a received frame, so if
	// there is no other traffic on the connection, the health check will
	// be performed every ReadIdleTimeout interval.
	// If zero, no health check is performed.
	public get ReadIdleTimeout(): time.Duration {
		return this._fields.ReadIdleTimeout
	}

	public set ReadIdleTimeout(value: time.Duration) {
		this._fields.ReadIdleTimeout = value
	}

	// PingTimeout is the timeout after which the connection will be closed
	// if a response to Ping is not received.
	// Defaults to 15s.
	public get PingTimeout(): time.Duration {
		return this._fields.PingTimeout
	}

	public set PingTimeout(value: time.Duration) {
		this._fields.PingTimeout = value
	}

	// WriteByteTimeout is the timeout after which the connection will be
	// closed no data can be written to it. The timeout begins when data is
	// available to write, and is extended whenever any bytes are written.
	public get WriteByteTimeout(): time.Duration {
		return this._fields.WriteByteTimeout
	}

	public set WriteByteTimeout(value: time.Duration) {
		this._fields.WriteByteTimeout = value
	}

	// CountError, if non-nil, is called on HTTP/2 transport errors.
	// It's intended to increment a metric for monitoring, such
	// as an expvar or Prometheus metric.
	// The errType consists of only ASCII word characters.
	public get CountError(): ((errType: string) => void) | null {
		return this._fields.CountError
	}

	public set CountError(value: ((errType: string) => void) | null) {
		this._fields.CountError = value
	}

	// t1, if non-nil, is the standard library Transport using
	// this transport. Its settings are used (but not its
	// RoundTrip method, etc).
	public get t1(): http.Transport | $.VarRef<http.Transport> | null {
		return this._fields.t1
	}

	public set t1(value: http.Transport | $.VarRef<http.Transport> | null) {
		this._fields.t1 = value
	}

	public get connPoolOnce(): sync.Once {
		return this._fields.connPoolOnce
	}

	public set connPoolOnce(value: sync.Once) {
		this._fields.connPoolOnce = value
	}

	public get connPoolOrDef(): __goscript_client_conn_pool.ClientConnPool | null {
		return this._fields.connPoolOrDef
	}

	public set connPoolOrDef(value: __goscript_client_conn_pool.ClientConnPool | null) {
		this._fields.connPoolOrDef = value
	}

	public get transportTestHooks(): transportTestHooks | $.VarRef<transportTestHooks> | null {
		return this._fields.transportTestHooks
	}

	public set transportTestHooks(value: transportTestHooks | $.VarRef<transportTestHooks> | null) {
		this._fields.transportTestHooks = value
	}

	public _fields: {
		DialTLSContext: ((ctx: context.Context | null, network: string, addr: string, cfg: tls.Config | $.VarRef<tls.Config> | null) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null
		DialTLS: ((network: string, addr: string, cfg: tls.Config | $.VarRef<tls.Config> | null) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null
		TLSClientConfig: tls.Config | $.VarRef<tls.Config> | null
		ConnPool: __goscript_client_conn_pool.ClientConnPool | null
		DisableCompression: boolean
		AllowHTTP: boolean
		MaxHeaderListSize: number
		MaxReadFrameSize: number
		MaxDecoderHeaderTableSize: number
		MaxEncoderHeaderTableSize: number
		StrictMaxConcurrentStreams: boolean
		IdleConnTimeout: time.Duration
		ReadIdleTimeout: time.Duration
		PingTimeout: time.Duration
		WriteByteTimeout: time.Duration
		CountError: ((errType: string) => void) | null
		t1: http.Transport | $.VarRef<http.Transport> | null
		connPoolOnce: sync.Once
		connPoolOrDef: __goscript_client_conn_pool.ClientConnPool | null
		transportTestHooks: transportTestHooks | $.VarRef<transportTestHooks> | null
	}

	constructor(init?: Partial<{DialTLSContext?: ((ctx: context.Context | null, network: string, addr: string, cfg: tls.Config | $.VarRef<tls.Config> | null) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null, DialTLS?: ((network: string, addr: string, cfg: tls.Config | $.VarRef<tls.Config> | null) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null, TLSClientConfig?: tls.Config | $.VarRef<tls.Config> | null, ConnPool?: __goscript_client_conn_pool.ClientConnPool | null, DisableCompression?: boolean, AllowHTTP?: boolean, MaxHeaderListSize?: number, MaxReadFrameSize?: number, MaxDecoderHeaderTableSize?: number, MaxEncoderHeaderTableSize?: number, StrictMaxConcurrentStreams?: boolean, IdleConnTimeout?: time.Duration, ReadIdleTimeout?: time.Duration, PingTimeout?: time.Duration, WriteByteTimeout?: time.Duration, CountError?: ((errType: string) => void) | null, t1?: http.Transport | $.VarRef<http.Transport> | null, connPoolOnce?: sync.Once, connPoolOrDef?: __goscript_client_conn_pool.ClientConnPool | null, transportTestHooks?: transportTestHooks | $.VarRef<transportTestHooks> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			DialTLSContext: init?.DialTLSContext ?? (null! as ((ctx: context.Context | null, network: string, addr: string, cfg: tls.Config | $.VarRef<tls.Config> | null) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null),
			DialTLS: init?.DialTLS ?? (null! as ((network: string, addr: string, cfg: tls.Config | $.VarRef<tls.Config> | null) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null),
			TLSClientConfig: init?.TLSClientConfig ?? (null! as tls.Config | $.VarRef<tls.Config> | null),
			ConnPool: init?.ConnPool ?? (null! as __goscript_client_conn_pool.ClientConnPool | null),
			DisableCompression: init?.DisableCompression ?? (false as boolean),
			AllowHTTP: init?.AllowHTTP ?? (false as boolean),
			MaxHeaderListSize: init?.MaxHeaderListSize ?? (0 as number),
			MaxReadFrameSize: init?.MaxReadFrameSize ?? (0 as number),
			MaxDecoderHeaderTableSize: init?.MaxDecoderHeaderTableSize ?? (0 as number),
			MaxEncoderHeaderTableSize: init?.MaxEncoderHeaderTableSize ?? (0 as number),
			StrictMaxConcurrentStreams: init?.StrictMaxConcurrentStreams ?? (false as boolean),
			IdleConnTimeout: init?.IdleConnTimeout ?? (0n as time.Duration),
			ReadIdleTimeout: init?.ReadIdleTimeout ?? (0n as time.Duration),
			PingTimeout: init?.PingTimeout ?? (0n as time.Duration),
			WriteByteTimeout: init?.WriteByteTimeout ?? (0n as time.Duration),
			CountError: init?.CountError ?? (null! as ((errType: string) => void) | null),
			t1: init?.t1 ?? (null! as http.Transport | $.VarRef<http.Transport> | null),
			connPoolOnce: init?.connPoolOnce ? $.markAsStructValue($.cloneStructValue(init.connPoolOnce)) : $.markAsStructValue(new sync.Once()),
			connPoolOrDef: init?.connPoolOrDef ?? (null! as __goscript_client_conn_pool.ClientConnPool | null),
			transportTestHooks: init?.transportTestHooks ?? (null! as transportTestHooks | $.VarRef<transportTestHooks> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Transport {
		return new Transport(this, true)
	}

	public __goscriptAssign(source: Transport): void {
		const target = this._fields
		const values = source._fields
		target.DialTLSContext = values.DialTLSContext
		target.DialTLS = values.DialTLS
		target.TLSClientConfig = values.TLSClientConfig
		target.ConnPool = $.assignFieldValue(target.ConnPool, values.ConnPool, "http2.ClientConnPool")
		target.DisableCompression = values.DisableCompression
		target.AllowHTTP = values.AllowHTTP
		target.MaxHeaderListSize = values.MaxHeaderListSize
		target.MaxReadFrameSize = values.MaxReadFrameSize
		target.MaxDecoderHeaderTableSize = values.MaxDecoderHeaderTableSize
		target.MaxEncoderHeaderTableSize = values.MaxEncoderHeaderTableSize
		target.StrictMaxConcurrentStreams = values.StrictMaxConcurrentStreams
		target.IdleConnTimeout = values.IdleConnTimeout
		target.ReadIdleTimeout = values.ReadIdleTimeout
		target.PingTimeout = values.PingTimeout
		target.WriteByteTimeout = values.WriteByteTimeout
		target.CountError = values.CountError
		target.t1 = values.t1
		$.assignStruct(target.connPoolOnce, values.connPoolOnce)
		target.connPoolOrDef = $.assignFieldValue(target.connPoolOrDef, values.connPoolOrDef, "http2.ClientConnPool")
		target.transportTestHooks = values.transportTestHooks
	}

	public async CloseIdleConnections(): globalThis.Promise<void> {
		const t: Transport | $.VarRef<Transport> | null = this;
		{
			let [cp, ok] = $.typeAssertTuple<__goscript_client_conn_pool.clientConnPoolIdleCloser | null>(await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).connPool() : Transport.prototype.connPool.call(t)), "http2.clientConnPoolIdleCloser")
			if (ok) {
				void (__goscriptAwait = (cp !== null && (cp as any).__isVarRef !== true && (cp as any).__goValue === undefined ? (cp as Exclude<__goscript_client_conn_pool.clientConnPoolIdleCloser, null>) : $.pointerValue<Exclude<__goscript_client_conn_pool.clientConnPoolIdleCloser, null>>(cp)).closeIdleConnections(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	}

	public async NewClientConn(c: net.Conn | null): globalThis.Promise<[ClientConn | $.VarRef<ClientConn> | null, $.GoError]> {
		const t: Transport | $.VarRef<Transport> | null = this;
		return Transport.prototype.newClientConn.call(t, c, (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).disableKeepAlives() : Transport.prototype.disableKeepAlives.call(t)))
	}

	public async RoundTrip(req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<[http.Response | $.VarRef<http.Response> | null, $.GoError]> {
		const t: Transport | $.VarRef<Transport> | null = this;
		return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).RoundTripOpt(req, new RoundTripOpt(undefined, true)) : Transport.prototype.RoundTripOpt.call(t, req, new RoundTripOpt(undefined, true)))
	}

	public async RoundTripOpt(req: http.Request | $.VarRef<http.Request> | null, opt: RoundTripOpt): globalThis.Promise<[http.Response | $.VarRef<http.Response> | null, $.GoError]> {
		const t: Transport | $.VarRef<Transport> | null = this;
		if (!(($.stringEqual($.pointerValue<url.URL>($.pointerValue<http.Request>(req).URL).Scheme, "https")) || (($.stringEqual($.pointerValue<url.URL>($.pointerValue<http.Request>(req).URL).Scheme, "http")) && $.pointerValue<Transport>(t).AllowHTTP))) {
			return [null, errors.New("http2: unsupported scheme")]
		}

		let addr = await authorityAddr($.pointerValue<url.URL>($.pointerValue<http.Request>(req).URL).Scheme, $.pointerValue<url.URL>($.pointerValue<http.Request>(req).URL).Host)
		for (let retry = 0; ; retry++) {
			let __goscriptTuple0: any = await $.pointerValue<Exclude<__goscript_client_conn_pool.ClientConnPool, null>>((await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).connPool() : Transport.prototype.connPool.call(t)))).GetClientConn(req, addr)
			let cc: ClientConn | $.VarRef<ClientConn> | null = __goscriptTuple0[0]
			let err = __goscriptTuple0[1]
			if (err != null) {
				await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).vlogf("http2: Transport failed to get client conn for %s: %v", $.arrayToSlice<any>([addr, (err as any)])) : Transport.prototype.vlogf.call(t, "http2: Transport failed to get client conn for %s: %v", $.arrayToSlice<any>([addr, (err as any)])))
				return [null, err]
			}
			let reused = !atomic.CompareAndSwapUint32($.fieldRef($.pointerValue<ClientConn>(cc)._fields, "reused"), 0, 1)
			await traceGotConn(req, cc, reused)
			let __goscriptTuple1: any = await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).RoundTrip(req) : ClientConn.prototype.RoundTrip.call(cc, req))
			let res: http.Response | $.VarRef<http.Response> | null = __goscriptTuple1[0]
			err = __goscriptTuple1[1]
			if ((err != null) && (retry <= 6)) {
				let roundTripErr: $.GoError = err
				{
					let __goscriptTuple2: any = await shouldRetryRequest(req, err)
					req = __goscriptTuple2[0]
					err = __goscriptTuple2[1]
					if (err == null) {
						// After the first retry, do exponential backoff with 10% jitter.
						if (retry == 0) {
							await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).vlogf("RoundTrip retrying after failure: %v", $.arrayToSlice<any>([(roundTripErr as any)])) : Transport.prototype.vlogf.call(t, "RoundTrip retrying after failure: %v", $.arrayToSlice<any>([(roundTripErr as any)])))
							continue
						}
						let backoff = ($.uint($.uint64Shl(1n, ($.uint($.uint64Sub($.uint(retry, 64), 1n), 64))), 64))
						backoff = backoff + (backoff * (0.1 * await mathrand.Float64()))
						let d = $.int64Mul(1000000000n, $.int64(backoff))
						let tm = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).newTimer(d) : Transport.prototype.newTimer.call(t, d))
						const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, any>([
							{
								id: 0,
								isSend: false,
								channel: ((__goscriptAwait = (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? (tm as __goscript_timer.timer) : $.pointerValue<__goscript_timer.timer>(tm)).C(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<time.Time> | null),
								onSelected: async (__goscriptSelect0Result) => {
									return __goscriptSelect0Result
								}
							},
							{
								id: 1,
								isSend: false,
								channel: ((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>(http.Request.prototype.Context.call($.pointerValue<http.Request>(req))).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
								onSelected: async (__goscriptSelect0Result) => {
									return __goscriptSelect0Result
								}
							}
						], false)
						switch (__goscriptSelect0Value?.id) {
							case 0:
								{
									const __goscriptSelect0Result = __goscriptSelect0Value
									await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).vlogf("RoundTrip retrying after failure: %v", $.arrayToSlice<any>([(roundTripErr as any)])) : Transport.prototype.vlogf.call(t, "RoundTrip retrying after failure: %v", $.arrayToSlice<any>([(roundTripErr as any)])))
									continue
									break
								}
							case 1:
								{
									const __goscriptSelect0Result = __goscriptSelect0Value
									void (__goscriptAwait = (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? (tm as __goscript_timer.timer) : $.pointerValue<__goscript_timer.timer>(tm)).Stop(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
									err = (__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>(http.Request.prototype.Context.call($.pointerValue<http.Request>(req))).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
									break
								}
						}
					}
				}
			}
			if (err != null) {
				await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).vlogf("RoundTrip failure: %v", $.arrayToSlice<any>([(err as any)])) : Transport.prototype.vlogf.call(t, "RoundTrip failure: %v", $.arrayToSlice<any>([(err as any)])))
				return [null, err]
			}
			return [res, null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async afterFunc(d: time.Duration, f: (() => void) | null): globalThis.Promise<__goscript_timer.timer | null> {
		const t: Transport | $.VarRef<Transport> | null = this;
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		if ((t$ as Transport).transportTestHooks != null) {
			return $.pointerValue<Exclude<__goscript_http2.synctestGroupInterface, null>>($.pointerValue<transportTestHooks>((t$ as Transport).transportTestHooks).group).AfterFunc(d, f)
		}
		return $.interfaceValue<__goscript_timer.timer | null>((() => { const __goscriptLiteralField0 = time.AfterFunc(d, f); return new __goscript_timer.timeTimer({Timer: __goscriptLiteralField0}, true) })(), "http2.timeTimer", "http2.timeTimer")
	}

	public async connPool(): globalThis.Promise<__goscript_client_conn_pool.ClientConnPool | null> {
		const t: Transport | $.VarRef<Transport> | null = this;
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		await (t$ as Transport).connPoolOnce.Do($.functionValue(((__receiver) => () => __receiver.initConnPool())((t$ as Transport)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*Transport).initConnPool-fm"))
		return (t$ as Transport).connPoolOrDef
	}

	public async contextWithTimeout(ctx: context.Context | null, d: time.Duration): globalThis.Promise<[context.Context | null, context.CancelFunc | null]> {
		const t: Transport | $.VarRef<Transport> | null = this;
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		if ((t$ as Transport).transportTestHooks != null) {
			return $.pointerValue<Exclude<__goscript_http2.synctestGroupInterface, null>>($.pointerValue<transportTestHooks>((t$ as Transport).transportTestHooks).group).ContextWithTimeout(ctx, d)
		}
		return context.WithTimeout($.pointerValueOrNil(ctx)!, d)
	}

	public async dialClientConn(ctx: context.Context | null, addr: string, singleUse: boolean): globalThis.Promise<[ClientConn | $.VarRef<ClientConn> | null, $.GoError]> {
		const t: Transport | $.VarRef<Transport> | null = this;
		if ($.pointerValue<Transport>(t).transportTestHooks != null) {
			return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).newClientConn(null, singleUse) : Transport.prototype.newClientConn.call(t, null, singleUse))
		}
		let [host, , err] = await net.SplitHostPort(addr)
		if (err != null) {
			return [null, err]
		}
		let __goscriptTuple3: any = await Transport.prototype.dialTLS.call(t, ctx, "tcp", addr, await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).newTLSConfig(host) : Transport.prototype.newTLSConfig.call(t, host)))
		let tconn = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}
		return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).newClientConn(tconn, singleUse) : Transport.prototype.newClientConn.call(t, tconn, singleUse))
	}

	public async dialTLS(ctx: context.Context | null, network: string, addr: string, tlsCfg: tls.Config | $.VarRef<tls.Config> | null): globalThis.Promise<[net.Conn | null, $.GoError]> {
		const t: Transport | $.VarRef<Transport> | null = this;
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		if ((t$ as Transport).DialTLSContext != null) {
			return (t$ as Transport).DialTLSContext!(ctx, network, addr, tlsCfg)
		} else {
			if ((t$ as Transport).DialTLS != null) {
				return (t$ as Transport).DialTLS!(network, addr, tlsCfg)
			}
		}

		let __goscriptTuple4: any = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).dialTLSWithContext(ctx, network, addr, tlsCfg) : Transport.prototype.dialTLSWithContext.call(t, ctx, network, addr, tlsCfg))
		let tlsCn: tls.Conn | $.VarRef<tls.Conn> | null = __goscriptTuple4[0]
		let err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		let state = await (tlsCn !== null && (tlsCn as any).__isVarRef !== true && (tlsCn as any).__goValue === undefined ? ((tlsCn as any) as tls.Conn).ConnectionState() : tls.Conn.prototype.ConnectionState.call(tlsCn))
		{
			let p = state.NegotiatedProtocol
			if (!$.stringEqual(p, "h2")) {
				return [null, fmt.Errorf("http2: unexpected ALPN protocol %q; want %q", p, "h2")]
			}
		}
		if (!state.NegotiatedProtocolIsMutual) {
			return [null, errors.New("http2: could not negotiate protocol mutually")]
		}
		return [$.interfaceValue<net.Conn | null>(tlsCn, "*tls.Conn", /* @__PURE__ */ $.pointerType("tls.Conn")), null]
	}

	public async dialTLSWithContext(ctx: context.Context | null, network: string, addr: string, cfg: tls.Config | $.VarRef<tls.Config> | null): globalThis.Promise<[tls.Conn | $.VarRef<tls.Conn> | null, $.GoError]> {
		const t: Transport | $.VarRef<Transport> | null = this;
		let dialer: tls.Dialer | $.VarRef<tls.Dialer> | null = new tls.Dialer({Config: cfg})
		let [cn, err] = await (dialer !== null && (dialer as any).__isVarRef !== true && (dialer as any).__goValue === undefined ? ((dialer as any) as tls.Dialer).DialContext(ctx, network, addr) : tls.Dialer.prototype.DialContext.call(dialer, ctx, network, addr))
		if (err != null) {
			return [null, err]
		}
		let tlsCn: tls.Conn | $.VarRef<tls.Conn> | null = ((cn as any)?.__goType === "*tls.Conn" && (cn as any).__goValue === undefined && (cn as any).__isTypedNil !== true ? ((cn as any) as tls.Conn | $.VarRef<tls.Conn> | null) : $.mustTypeAssert<tls.Conn | $.VarRef<tls.Conn> | null>(cn, /* @__PURE__ */ $.pointerType("tls.Conn")))
		return [tlsCn, null]
	}

	public disableCompression(): boolean {
		const t: Transport | $.VarRef<Transport> | null = this;
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		return (t$ as Transport).DisableCompression || (((t$ as Transport).t1 != null) && $.pointerValue<http.Transport>((t$ as Transport).t1).DisableCompression)
	}

	public disableKeepAlives(): boolean {
		const t: Transport | $.VarRef<Transport> | null = this;
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		return ((t$ as Transport).t1 != null) && $.pointerValue<http.Transport>((t$ as Transport).t1).DisableKeepAlives
	}

	public expectContinueTimeout(): time.Duration {
		const t: Transport | $.VarRef<Transport> | null = this;
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		if ((t$ as Transport).t1 == null) {
			return 0n
		}
		return $.pointerValue<http.Transport>((t$ as Transport).t1).ExpectContinueTimeout
	}

	public idleConnTimeout(): time.Duration {
		const t: Transport | $.VarRef<Transport> | null = this;
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		// to keep things backwards compatible, we use non-zero values of
		// IdleConnTimeout, followed by using the IdleConnTimeout on the underlying
		// http1 transport, followed by 0
		if ((t$ as Transport).IdleConnTimeout != 0n) {
			return (t$ as Transport).IdleConnTimeout
		}

		if ((t$ as Transport).t1 != null) {
			return $.pointerValue<http.Transport>((t$ as Transport).t1).IdleConnTimeout
		}

		return 0n
	}

	public initConnPool(): void {
		let t: Transport | $.VarRef<Transport> | null = this;
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		if ((t$ as Transport).ConnPool != null) {
			;(t$ as Transport).connPoolOrDef = (t$ as Transport).ConnPool
		} else {
			;(t$ as Transport).connPoolOrDef = $.interfaceValue<__goscript_client_conn_pool.ClientConnPool | null>(new __goscript_client_conn_pool.clientConnPool({t: t}), "*http2.clientConnPool", /* @__PURE__ */ $.pointerType("http2.clientConnPool"))
		}
	}

	public async logf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const t: Transport | $.VarRef<Transport> | null = this;
		await log.Printf(format, args)
	}

	public async markNewGoroutine(): globalThis.Promise<void> {
		const t: Transport | $.VarRef<Transport> | null = this;
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		if ((t != null) && ((t$ as Transport).transportTestHooks != null)) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_http2.synctestGroupInterface, null>>($.pointerValue<transportTestHooks>((t$ as Transport).transportTestHooks).group).Join(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public maxDecoderHeaderTableSize(): number {
		const t: Transport | $.VarRef<Transport> | null = this;
		{
			let v = $.pointerValue<Transport>(t).MaxDecoderHeaderTableSize
			if (v > 0) {
				return v
			}
		}
		return 4096
	}

	public maxEncoderHeaderTableSize(): number {
		const t: Transport | $.VarRef<Transport> | null = this;
		{
			let v = $.pointerValue<Transport>(t).MaxEncoderHeaderTableSize
			if (v > 0) {
				return v
			}
		}
		return 4096
	}

	public maxFrameReadSize(): number {
		const t: Transport | $.VarRef<Transport> | null = this;
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		if ((t$ as Transport).MaxReadFrameSize == 0) {
			return 0
		}
		if ((t$ as Transport).MaxReadFrameSize < 16384) {
			return 16384
		}
		if ((t$ as Transport).MaxReadFrameSize > 16777215) {
			return 16777215
		}
		return (t$ as Transport).MaxReadFrameSize
	}

	public maxHeaderListSize(): number {
		const t: Transport | $.VarRef<Transport> | null = this;
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		if ((t$ as Transport).MaxHeaderListSize == 0) {
			return 10485760
		}
		if ((t$ as Transport).MaxHeaderListSize == 0xffffffff) {
			return 0
		}
		return (t$ as Transport).MaxHeaderListSize
	}

	public async newClientConn(c: net.Conn | null, singleUse: boolean): globalThis.Promise<[ClientConn | $.VarRef<ClientConn> | null, $.GoError]> {
		const t: Transport | $.VarRef<Transport> | null = this;
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		let cc: ClientConn | $.VarRef<ClientConn> | null = new ClientConn({t: t, tconn: c, readerDone: $.makeChannel<{}>(0, {}, "both"), nextStreamID: 1, maxFrameSize: 16384, initialWindowSize: 65535, maxConcurrentStreams: 100, peerMaxHeaderListSize: 18446744073709551615n, streams: $.makeMap<number, clientStream | $.VarRef<clientStream> | null>(), singleUse: singleUse, wantSettingsAck: true, pings: $.makeMap<Uint8Array, $.Channel<{}> | null>(), reqHeaderMu: $.makeChannel<{}>(1, {}, "both")})
		let cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		if ((t$ as Transport).transportTestHooks != null) {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).markNewGoroutine() : Transport.prototype.markNewGoroutine.call(t))
			void (__goscriptAwait = $.pointerValue<transportTestHooks>((t$ as Transport).transportTestHooks).newclientconn!(cc), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			c = (cc$ as ClientConn).tconn
		}
		if (__goscript_http2.VerboseLogs) {
			await Transport.prototype.vlogf.call(t, "http2: Transport creating client conn %p to %v", $.arrayToSlice<any>([$.interfaceValue(cc, "*http2.ClientConn", /* @__PURE__ */ $.pointerType("http2.ClientConn")), ((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(c)).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)]))
		}

		;(cc$ as ClientConn).cond = sync.NewCond($.pointerValueOrNil($.interfaceValue<sync.Locker | null>($.fieldRef((cc$ as ClientConn)._fields, "mu"), "*sync.Mutex", /* @__PURE__ */ $.pointerType("sync.Mutex")))!)
		void (cc$ as ClientConn).flow.add(65535);

		// TODO: adjust this writer size to account for frame size +
		// MTU + crypto/tls record padding.
		;(cc$ as ClientConn).bw = bufio.NewWriter($.interfaceValue<io.Writer | null>(new stickyErrWriter({conn: c, timeout: (t$ as Transport).WriteByteTimeout, err: $.fieldRef((cc$ as ClientConn)._fields, "werr")}, true), "http2.stickyErrWriter", "http2.stickyErrWriter"));
		;(cc$ as ClientConn).br = bufio.NewReader((c as io.Reader | null));
		;(cc$ as ClientConn).fr = __goscript_frame.NewFramer($.interfaceValue<io.Writer | null>((cc$ as ClientConn).bw, "*bufio.Writer", /* @__PURE__ */ $.pointerType("bufio.Writer")), $.interfaceValue<io.Reader | null>((cc$ as ClientConn).br, "*bufio.Reader", /* @__PURE__ */ $.pointerType("bufio.Reader")))
		if ((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).maxFrameReadSize() : Transport.prototype.maxFrameReadSize.call(t)) != 0) {
			__goscript_frame.Framer.prototype.SetMaxReadFrameSize.call((cc$ as ClientConn).fr, (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).maxFrameReadSize() : Transport.prototype.maxFrameReadSize.call(t)))
		}
		if ((t$ as Transport).CountError != null) {
			$.pointerValue<__goscript_frame.Framer>((cc$ as ClientConn).fr).countError = (t$ as Transport).CountError
		}
		let maxHeaderTableSize = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).maxDecoderHeaderTableSize() : Transport.prototype.maxDecoderHeaderTableSize.call(t))
		$.pointerValue<__goscript_frame.Framer>((cc$ as ClientConn).fr).ReadMetaHeaders = await hpack.NewDecoder(maxHeaderTableSize, (null as ((f: hpack.HeaderField) => void) | null))
		$.pointerValue<__goscript_frame.Framer>((cc$ as ClientConn).fr).MaxHeaderListSize = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).maxHeaderListSize() : Transport.prototype.maxHeaderListSize.call(t));

		;(cc$ as ClientConn).henc = await hpack.NewEncoder($.interfaceValue<io.Writer | null>($.fieldRef((cc$ as ClientConn)._fields, "hbuf"), "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))
		await hpack.Encoder.prototype.SetMaxDynamicTableSizeLimit.call((cc$ as ClientConn).henc, (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).maxEncoderHeaderTableSize() : Transport.prototype.maxEncoderHeaderTableSize.call(t)));
		;(cc$ as ClientConn).peerMaxHeaderTableSize = 4096

		{
			let [cs, ok] = $.typeAssertTuple<__goscript_http2.connectionStater | null>(c, "http2.connectionStater")
			if (ok) {
				let state = $.varRef((((__goscriptAwait = (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? (cs as Exclude<__goscript_http2.connectionStater, null>) : $.pointerValue<Exclude<__goscript_http2.connectionStater, null>>(cs)).ConnectionState(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as tls.ConnectionState)).clone());
				;(cc$ as ClientConn).tlsState = state
			}
		}

		let initialSettings: $.Slice<__goscript_http2.Setting> = $.arrayToSlice<__goscript_http2.Setting>([new __goscript_http2.Setting({ID: 2, Val: 0}, true), new __goscript_http2.Setting({ID: 4, Val: 4194304}, true)])
		{
			let max = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).maxFrameReadSize() : Transport.prototype.maxFrameReadSize.call(t))
			if (max != 0) {
				initialSettings = $.appendOne(initialSettings, new __goscript_http2.Setting({ID: 5, Val: max}, true))
			}
		}
		{
			let max = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).maxHeaderListSize() : Transport.prototype.maxHeaderListSize.call(t))
			if (max != 0) {
				initialSettings = $.appendOne(initialSettings, new __goscript_http2.Setting({ID: 6, Val: max}, true))
			}
		}
		if (maxHeaderTableSize != 4096) {
			initialSettings = $.appendOne(initialSettings, new __goscript_http2.Setting({ID: 1, Val: maxHeaderTableSize}, true))
		}

		await bufio.Writer.prototype.Write.call((cc$ as ClientConn).bw, __goscript_http2.clientPreface)
		await __goscript_frame.Framer.prototype.WriteSettings.call((cc$ as ClientConn).fr, initialSettings)
		await __goscript_frame.Framer.prototype.WriteWindowUpdate.call((cc$ as ClientConn).fr, 0, 1073741824)
		void (cc$ as ClientConn).inflow.init(1073807359)
		await bufio.Writer.prototype.Flush.call((cc$ as ClientConn).bw)
		if ((cc$ as ClientConn).werr != null) {
			await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).Close() : ClientConn.prototype.Close.call(cc))
			return [null, (cc$ as ClientConn).werr]
		}

		// Start the idle timer after the connection is fully initialized.
		{
			let d = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).idleConnTimeout() : Transport.prototype.idleConnTimeout.call(t))
			if (d != 0n) {
				;(cc$ as ClientConn).idleTimeout = d;
				;(cc$ as ClientConn).idleTimer = await Transport.prototype.afterFunc.call(t, d, $.functionValue(((__receiver) => () => __receiver.onIdleTimeout())((cc$ as ClientConn)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*ClientConn).onIdleTimeout-fm"))
			}
		}

		queueMicrotask(async () => { await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).readLoop() : ClientConn.prototype.readLoop.call(cc)) })
		return [cc, null]
	}

	public async newTLSConfig(host: string): globalThis.Promise<tls.Config | $.VarRef<tls.Config> | null> {
		const t: Transport | $.VarRef<Transport> | null = this;
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		let cfg: tls.Config | $.VarRef<tls.Config> | null = new tls.Config()
		let cfg$: tls.Config = cfg == null ? $.pointerTarget<tls.Config>(cfg) : (cfg as any).__isVarRef === true ? (cfg as any).value : (cfg as any).__goValue === undefined ? (cfg as any) : $.pointerTarget<tls.Config>(cfg)
		if ((t$ as Transport).TLSClientConfig != null) {
			$.assignStruct((cfg$ as tls.Config), $.pointerValue<tls.Config>(await tls.Config.prototype.Clone.call((t$ as Transport).TLSClientConfig)))
		}
		if (!strSliceContains((cfg$ as tls.Config).NextProtos, "h2")) {
			;(cfg$ as tls.Config).NextProtos = $.appendSlice($.arrayToSlice<string>(["h2"]), (cfg$ as tls.Config).NextProtos)
		}
		if ($.stringEqual((cfg$ as tls.Config).ServerName, "")) {
			;(cfg$ as tls.Config).ServerName = host
		}
		return cfg
	}

	public async newTimer(d: time.Duration): globalThis.Promise<__goscript_timer.timer | null> {
		const t: Transport | $.VarRef<Transport> | null = this;
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		if ((t$ as Transport).transportTestHooks != null) {
			return $.pointerValue<Exclude<__goscript_http2.synctestGroupInterface, null>>($.pointerValue<transportTestHooks>((t$ as Transport).transportTestHooks).group).NewTimer(d)
		}
		return $.interfaceValue<__goscript_timer.timer | null>((() => { const __goscriptLiteralField1 = time.NewTimer(d); return new __goscript_timer.timeTimer({Timer: __goscriptLiteralField1}, true) })(), "http2.timeTimer", "http2.timeTimer")
	}

	public pingTimeout(): time.Duration {
		const t: Transport | $.VarRef<Transport> | null = this;
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		if ((t$ as Transport).PingTimeout == 0n) {
			return 15000000000n
		}
		return (t$ as Transport).PingTimeout
	}

	public async vlogf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const t: Transport | $.VarRef<Transport> | null = this;
		if (__goscript_http2.VerboseLogs) {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).logf(format, args) : Transport.prototype.logf.call(t, format, args))
		}
	}

	static __typeInfo = $.registerStructType(
		"http2.Transport",
		() => new Transport(),
		() => [$.methodSignature("CloseIdleConnections", [], [], true), $.methodSignature("NewClientConn", [["c", "net.Conn"]], [/* @__PURE__ */ $.pointerType("http2.ClientConn"), "error"], true), $.methodSignature("RoundTrip", [["req", /* @__PURE__ */ $.pointerType("http.Request")]], [/* @__PURE__ */ $.pointerType("http.Response"), "error"], true), $.methodSignature("RoundTripOpt", [["req", /* @__PURE__ */ $.pointerType("http.Request")], ["opt", "http2.RoundTripOpt"]], [/* @__PURE__ */ $.pointerType("http.Response"), "error"], true), $.methodSignature("afterFunc", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["f", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], [{ kind: $.TypeKind.Interface, methods: [$.methodSignature("C", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])] }], true), $.methodSignature("connPool", [], ["http2.ClientConnPool"], true), $.methodSignature("contextWithTimeout", [["ctx", "context.Context"], ["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["context.Context", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("dialClientConn", [["ctx", "context.Context"], ["addr", /* @__PURE__ */ $.basicType("string")], ["singleUse", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.pointerType("http2.ClientConn"), "error"], true), $.methodSignature("dialTLS", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["addr", /* @__PURE__ */ $.basicType("string")], ["tlsCfg", /* @__PURE__ */ $.pointerType("tls.Config")]], ["net.Conn", "error"], true), $.methodSignature("dialTLSWithContext", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["addr", /* @__PURE__ */ $.basicType("string")], ["cfg", /* @__PURE__ */ $.pointerType("tls.Config")]], [/* @__PURE__ */ $.pointerType("tls.Conn"), "error"], true), $.methodSignature("disableCompression", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("disableKeepAlives", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("expectContinueTimeout", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("idleConnTimeout", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("initConnPool", [], [], true), $.methodSignature("logf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("markNewGoroutine", [], [], true), $.methodSignature("maxDecoderHeaderTableSize", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("maxEncoderHeaderTableSize", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("maxFrameReadSize", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("maxHeaderListSize", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("newClientConn", [["c", "net.Conn"], ["singleUse", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.pointerType("http2.ClientConn"), "error"], true), $.methodSignature("newTLSConfig", [["host", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("tls.Config")], true), $.methodSignature("newTimer", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [{ kind: $.TypeKind.Interface, methods: [$.methodSignature("C", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])] }], true), $.methodSignature("pingTimeout", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("vlogf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true)],
		Transport,
		() => [/* @__PURE__ */ $.structField("DialTLSContext", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("tls.Config")], results: ["net.Conn", "error"] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("DialTLS", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("tls.Config")], results: ["net.Conn", "error"] } as $.FunctionTypeInfo), [1], 8, true), /* @__PURE__ */ $.structField("TLSClientConfig", /* @__PURE__ */ $.pointerType("tls.Config"), [2], 16, true), /* @__PURE__ */ $.structField("ConnPool", "http2.ClientConnPool", [3], 24, true), /* @__PURE__ */ $.structField("DisableCompression", /* @__PURE__ */ $.basicType("bool"), [4], 40, true), /* @__PURE__ */ $.structField("AllowHTTP", /* @__PURE__ */ $.basicType("bool"), [5], 41, true), /* @__PURE__ */ $.structField("MaxHeaderListSize", /* @__PURE__ */ $.basicType("uint32"), [6], 44, true), /* @__PURE__ */ $.structField("MaxReadFrameSize", /* @__PURE__ */ $.basicType("uint32"), [7], 48, true), /* @__PURE__ */ $.structField("MaxDecoderHeaderTableSize", /* @__PURE__ */ $.basicType("uint32"), [8], 52, true), /* @__PURE__ */ $.structField("MaxEncoderHeaderTableSize", /* @__PURE__ */ $.basicType("uint32"), [9], 56, true), /* @__PURE__ */ $.structField("StrictMaxConcurrentStreams", /* @__PURE__ */ $.basicType("bool"), [10], 60, true), /* @__PURE__ */ $.structField("IdleConnTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [11], 64, true), /* @__PURE__ */ $.structField("ReadIdleTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [12], 72, true), /* @__PURE__ */ $.structField("PingTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [13], 80, true), /* @__PURE__ */ $.structField("WriteByteTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [14], 88, true), /* @__PURE__ */ $.structField("CountError", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo), [15], 96, true), /* @__PURE__ */ $.structField("t1", /* @__PURE__ */ $.pointerType("http.Transport"), [16], 104, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("connPoolOnce", "sync.Once", [17], 112, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("connPoolOrDef", "http2.ClientConnPool", [18], 128, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("transportTestHooks", /* @__PURE__ */ $.pointerType("http2.transportTestHooks"), [19], 144, false, { pkgPath: "golang.org/x/net/http2", anonymous: true })]
	)
}

export class transportTestHooks {
	public get newclientconn(): ((_p0: ClientConn | $.VarRef<ClientConn> | null) => void) | null {
		return this._fields.newclientconn
	}

	public set newclientconn(value: ((_p0: ClientConn | $.VarRef<ClientConn> | null) => void) | null) {
		this._fields.newclientconn = value
	}

	public get group(): __goscript_http2.synctestGroupInterface | null {
		return this._fields.group
	}

	public set group(value: __goscript_http2.synctestGroupInterface | null) {
		this._fields.group = value
	}

	public _fields: {
		newclientconn: ((_p0: ClientConn | $.VarRef<ClientConn> | null) => void) | null
		group: __goscript_http2.synctestGroupInterface | null
	}

	constructor(init?: Partial<{newclientconn?: ((_p0: ClientConn | $.VarRef<ClientConn> | null) => void) | null, group?: __goscript_http2.synctestGroupInterface | null}>, __goscriptValue?: boolean) {
		this._fields = {
			newclientconn: init?.newclientconn ?? (null! as ((_p0: ClientConn | $.VarRef<ClientConn> | null) => void) | null),
			group: init?.group ?? (null! as __goscript_http2.synctestGroupInterface | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): transportTestHooks {
		return new transportTestHooks(this, true)
	}

	public __goscriptAssign(source: transportTestHooks): void {
		const target = this._fields
		const values = source._fields
		target.newclientconn = values.newclientconn
		target.group = $.assignFieldValue(target.group, values.group, "http2.synctestGroupInterface")
	}

	static __typeInfo = $.registerStructType(
		"http2.transportTestHooks",
		() => new transportTestHooks(),
		() => [],
		transportTestHooks,
		() => [/* @__PURE__ */ $.structField("newclientconn", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http2.ClientConn")], results: [] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("group", "http2.synctestGroupInterface", [1], 8, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class ClientConn {
	public get t(): Transport | $.VarRef<Transport> | null {
		return this._fields.t
	}

	public set t(value: Transport | $.VarRef<Transport> | null) {
		this._fields.t = value
	}

	public get tconn(): net.Conn | null {
		return this._fields.tconn
	}

	public set tconn(value: net.Conn | null) {
		this._fields.tconn = value
	}

	public get tlsState(): tls.ConnectionState | $.VarRef<tls.ConnectionState> | null {
		return this._fields.tlsState
	}

	public set tlsState(value: tls.ConnectionState | $.VarRef<tls.ConnectionState> | null) {
		this._fields.tlsState = value
	}

	public get reused(): number {
		return this._fields.reused
	}

	public set reused(value: number) {
		this._fields.reused = value
	}

	public get singleUse(): boolean {
		return this._fields.singleUse
	}

	public set singleUse(value: boolean) {
		this._fields.singleUse = value
	}

	public get getConnCalled(): boolean {
		return this._fields.getConnCalled
	}

	public set getConnCalled(value: boolean) {
		this._fields.getConnCalled = value
	}

	// readLoop goroutine fields:
	public get readerDone(): $.Channel<{}> | null {
		return this._fields.readerDone
	}

	public set readerDone(value: $.Channel<{}> | null) {
		this._fields.readerDone = value
	}

	public get readerErr(): $.GoError {
		return this._fields.readerErr
	}

	public set readerErr(value: $.GoError) {
		this._fields.readerErr = value
	}

	public get idleTimeout(): time.Duration {
		return this._fields.idleTimeout
	}

	public set idleTimeout(value: time.Duration) {
		this._fields.idleTimeout = value
	}

	public get idleTimer(): __goscript_timer.timer | null {
		return this._fields.idleTimer
	}

	public set idleTimer(value: __goscript_timer.timer | null) {
		this._fields.idleTimer = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get cond(): sync.Cond | $.VarRef<sync.Cond> | null {
		return this._fields.cond
	}

	public set cond(value: sync.Cond | $.VarRef<sync.Cond> | null) {
		this._fields.cond = value
	}

	public get flow(): __goscript_flow.outflow {
		return this._fields.flow
	}

	public set flow(value: __goscript_flow.outflow) {
		this._fields.flow = value
	}

	public get inflow(): __goscript_flow.inflow {
		return this._fields.inflow
	}

	public set inflow(value: __goscript_flow.inflow) {
		this._fields.inflow = value
	}

	public get doNotReuse(): boolean {
		return this._fields.doNotReuse
	}

	public set doNotReuse(value: boolean) {
		this._fields.doNotReuse = value
	}

	public get closing(): boolean {
		return this._fields.closing
	}

	public set closing(value: boolean) {
		this._fields.closing = value
	}

	public get closed(): boolean {
		return this._fields.closed
	}

	public set closed(value: boolean) {
		this._fields.closed = value
	}

	public get seenSettings(): boolean {
		return this._fields.seenSettings
	}

	public set seenSettings(value: boolean) {
		this._fields.seenSettings = value
	}

	public get wantSettingsAck(): boolean {
		return this._fields.wantSettingsAck
	}

	public set wantSettingsAck(value: boolean) {
		this._fields.wantSettingsAck = value
	}

	public get goAway(): __goscript_frame.GoAwayFrame | $.VarRef<__goscript_frame.GoAwayFrame> | null {
		return this._fields.goAway
	}

	public set goAway(value: __goscript_frame.GoAwayFrame | $.VarRef<__goscript_frame.GoAwayFrame> | null) {
		this._fields.goAway = value
	}

	public get goAwayDebug(): string {
		return this._fields.goAwayDebug
	}

	public set goAwayDebug(value: string) {
		this._fields.goAwayDebug = value
	}

	public get streams(): globalThis.Map<number, clientStream | $.VarRef<clientStream> | null> | null {
		return this._fields.streams
	}

	public set streams(value: globalThis.Map<number, clientStream | $.VarRef<clientStream> | null> | null) {
		this._fields.streams = value
	}

	public get streamsReserved(): number {
		return this._fields.streamsReserved
	}

	public set streamsReserved(value: number) {
		this._fields.streamsReserved = value
	}

	public get nextStreamID(): number {
		return this._fields.nextStreamID
	}

	public set nextStreamID(value: number) {
		this._fields.nextStreamID = value
	}

	public get pendingRequests(): number {
		return this._fields.pendingRequests
	}

	public set pendingRequests(value: number) {
		this._fields.pendingRequests = value
	}

	public get pings(): globalThis.Map<Uint8Array, $.Channel<{}> | null> | null {
		return this._fields.pings
	}

	public set pings(value: globalThis.Map<Uint8Array, $.Channel<{}> | null> | null) {
		this._fields.pings = value
	}

	public get br(): bufio.Reader | $.VarRef<bufio.Reader> | null {
		return this._fields.br
	}

	public set br(value: bufio.Reader | $.VarRef<bufio.Reader> | null) {
		this._fields.br = value
	}

	public get lastActive(): time.Time {
		return this._fields.lastActive
	}

	public set lastActive(value: time.Time) {
		this._fields.lastActive = value
	}

	public get lastIdle(): time.Time {
		return this._fields.lastIdle
	}

	public set lastIdle(value: time.Time) {
		this._fields.lastIdle = value
	}

	// Settings from peer: (also guarded by wmu)
	public get maxFrameSize(): number {
		return this._fields.maxFrameSize
	}

	public set maxFrameSize(value: number) {
		this._fields.maxFrameSize = value
	}

	public get maxConcurrentStreams(): number {
		return this._fields.maxConcurrentStreams
	}

	public set maxConcurrentStreams(value: number) {
		this._fields.maxConcurrentStreams = value
	}

	public get peerMaxHeaderListSize(): bigint {
		return this._fields.peerMaxHeaderListSize
	}

	public set peerMaxHeaderListSize(value: bigint) {
		this._fields.peerMaxHeaderListSize = value
	}

	public get peerMaxHeaderTableSize(): number {
		return this._fields.peerMaxHeaderTableSize
	}

	public set peerMaxHeaderTableSize(value: number) {
		this._fields.peerMaxHeaderTableSize = value
	}

	public get initialWindowSize(): number {
		return this._fields.initialWindowSize
	}

	public set initialWindowSize(value: number) {
		this._fields.initialWindowSize = value
	}

	// reqHeaderMu is a 1-element semaphore channel controlling access to sending new requests.
	// Write to reqHeaderMu to lock it, read from it to unlock.
	// Lock reqmu BEFORE mu or wmu.
	public get reqHeaderMu(): $.Channel<{}> | null {
		return this._fields.reqHeaderMu
	}

	public set reqHeaderMu(value: $.Channel<{}> | null) {
		this._fields.reqHeaderMu = value
	}

	// wmu is held while writing.
	// Acquire BEFORE mu when holding both, to avoid blocking mu on network writes.
	// Only acquire both at the same time when changing peer settings.
	public get wmu(): sync.Mutex {
		return this._fields.wmu
	}

	public set wmu(value: sync.Mutex) {
		this._fields.wmu = value
	}

	public get bw(): bufio.Writer | $.VarRef<bufio.Writer> | null {
		return this._fields.bw
	}

	public set bw(value: bufio.Writer | $.VarRef<bufio.Writer> | null) {
		this._fields.bw = value
	}

	public get fr(): __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null {
		return this._fields.fr
	}

	public set fr(value: __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null) {
		this._fields.fr = value
	}

	public get werr(): $.GoError {
		return this._fields.werr
	}

	public set werr(value: $.GoError) {
		this._fields.werr = value
	}

	public get hbuf(): bytes.Buffer {
		return this._fields.hbuf
	}

	public set hbuf(value: bytes.Buffer) {
		this._fields.hbuf = value
	}

	public get henc(): hpack.Encoder | $.VarRef<hpack.Encoder> | null {
		return this._fields.henc
	}

	public set henc(value: hpack.Encoder | $.VarRef<hpack.Encoder> | null) {
		this._fields.henc = value
	}

	public _fields: {
		t: Transport | $.VarRef<Transport> | null
		tconn: net.Conn | null
		tlsState: tls.ConnectionState | $.VarRef<tls.ConnectionState> | null
		reused: number
		singleUse: boolean
		getConnCalled: boolean
		readerDone: $.Channel<{}> | null
		readerErr: $.GoError
		idleTimeout: time.Duration
		idleTimer: __goscript_timer.timer | null
		mu: sync.Mutex
		cond: sync.Cond | $.VarRef<sync.Cond> | null
		flow: __goscript_flow.outflow
		inflow: __goscript_flow.inflow
		doNotReuse: boolean
		closing: boolean
		closed: boolean
		seenSettings: boolean
		wantSettingsAck: boolean
		goAway: __goscript_frame.GoAwayFrame | $.VarRef<__goscript_frame.GoAwayFrame> | null
		goAwayDebug: string
		streams: globalThis.Map<number, clientStream | $.VarRef<clientStream> | null> | null
		streamsReserved: number
		nextStreamID: number
		pendingRequests: number
		pings: globalThis.Map<Uint8Array, $.Channel<{}> | null> | null
		br: bufio.Reader | $.VarRef<bufio.Reader> | null
		lastActive: time.Time
		lastIdle: time.Time
		maxFrameSize: number
		maxConcurrentStreams: number
		peerMaxHeaderListSize: bigint
		peerMaxHeaderTableSize: number
		initialWindowSize: number
		reqHeaderMu: $.Channel<{}> | null
		wmu: sync.Mutex
		bw: bufio.Writer | $.VarRef<bufio.Writer> | null
		fr: __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null
		werr: $.GoError
		hbuf: bytes.Buffer
		henc: hpack.Encoder | $.VarRef<hpack.Encoder> | null
	}

	constructor(init?: Partial<{t?: Transport | $.VarRef<Transport> | null, tconn?: net.Conn | null, tlsState?: tls.ConnectionState | $.VarRef<tls.ConnectionState> | null, reused?: number, singleUse?: boolean, getConnCalled?: boolean, readerDone?: $.Channel<{}> | null, readerErr?: $.GoError, idleTimeout?: time.Duration, idleTimer?: __goscript_timer.timer | null, mu?: sync.Mutex, cond?: sync.Cond | $.VarRef<sync.Cond> | null, flow?: __goscript_flow.outflow, inflow?: __goscript_flow.inflow, doNotReuse?: boolean, closing?: boolean, closed?: boolean, seenSettings?: boolean, wantSettingsAck?: boolean, goAway?: __goscript_frame.GoAwayFrame | $.VarRef<__goscript_frame.GoAwayFrame> | null, goAwayDebug?: string, streams?: globalThis.Map<number, clientStream | $.VarRef<clientStream> | null> | null, streamsReserved?: number, nextStreamID?: number, pendingRequests?: number, pings?: globalThis.Map<Uint8Array, $.Channel<{}> | null> | null, br?: bufio.Reader | $.VarRef<bufio.Reader> | null, lastActive?: time.Time, lastIdle?: time.Time, maxFrameSize?: number, maxConcurrentStreams?: number, peerMaxHeaderListSize?: bigint, peerMaxHeaderTableSize?: number, initialWindowSize?: number, reqHeaderMu?: $.Channel<{}> | null, wmu?: sync.Mutex, bw?: bufio.Writer | $.VarRef<bufio.Writer> | null, fr?: __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null, werr?: $.GoError, hbuf?: bytes.Buffer, henc?: hpack.Encoder | $.VarRef<hpack.Encoder> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			t: init?.t ?? (null! as Transport | $.VarRef<Transport> | null),
			tconn: init?.tconn ?? (null! as net.Conn | null),
			tlsState: init?.tlsState ?? (null! as tls.ConnectionState | $.VarRef<tls.ConnectionState> | null),
			reused: init?.reused ?? (0 as number),
			singleUse: init?.singleUse ?? (false as boolean),
			getConnCalled: init?.getConnCalled ?? (false as boolean),
			readerDone: init?.readerDone ?? (null! as $.Channel<{}> | null),
			readerErr: init?.readerErr ?? (null! as $.GoError),
			idleTimeout: init?.idleTimeout ?? (0n as time.Duration),
			idleTimer: init?.idleTimer ?? (null! as __goscript_timer.timer | null),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			cond: init?.cond ?? (null! as sync.Cond | $.VarRef<sync.Cond> | null),
			flow: init?.flow ? init.flow.clone() : new __goscript_flow.outflow(undefined, true),
			inflow: init?.inflow ? init.inflow.clone() : new __goscript_flow.inflow(undefined, true),
			doNotReuse: init?.doNotReuse ?? (false as boolean),
			closing: init?.closing ?? (false as boolean),
			closed: init?.closed ?? (false as boolean),
			seenSettings: init?.seenSettings ?? (false as boolean),
			wantSettingsAck: init?.wantSettingsAck ?? (false as boolean),
			goAway: init?.goAway ?? (null! as __goscript_frame.GoAwayFrame | $.VarRef<__goscript_frame.GoAwayFrame> | null),
			goAwayDebug: init?.goAwayDebug ?? ("" as string),
			streams: init?.streams ?? (null! as globalThis.Map<number, clientStream | $.VarRef<clientStream> | null> | null),
			streamsReserved: init?.streamsReserved ?? (0 as number),
			nextStreamID: init?.nextStreamID ?? (0 as number),
			pendingRequests: init?.pendingRequests ?? (0 as number),
			pings: init?.pings ?? (null! as globalThis.Map<Uint8Array, $.Channel<{}> | null> | null),
			br: init?.br ?? (null! as bufio.Reader | $.VarRef<bufio.Reader> | null),
			lastActive: init?.lastActive ? $.markAsStructValue($.cloneStructValue(init.lastActive)) : $.markAsStructValue(new time.Time()),
			lastIdle: init?.lastIdle ? $.markAsStructValue($.cloneStructValue(init.lastIdle)) : $.markAsStructValue(new time.Time()),
			maxFrameSize: init?.maxFrameSize ?? (0 as number),
			maxConcurrentStreams: init?.maxConcurrentStreams ?? (0 as number),
			peerMaxHeaderListSize: init?.peerMaxHeaderListSize ?? (0n as bigint),
			peerMaxHeaderTableSize: init?.peerMaxHeaderTableSize ?? (0 as number),
			initialWindowSize: init?.initialWindowSize ?? (0 as number),
			reqHeaderMu: init?.reqHeaderMu ?? (null! as $.Channel<{}> | null),
			wmu: init?.wmu ? $.markAsStructValue($.cloneStructValue(init.wmu)) : $.markAsStructValue(new sync.Mutex()),
			bw: init?.bw ?? (null! as bufio.Writer | $.VarRef<bufio.Writer> | null),
			fr: init?.fr ?? (null! as __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null),
			werr: init?.werr ?? (null! as $.GoError),
			hbuf: init?.hbuf ? $.markAsStructValue($.cloneStructValue(init.hbuf)) : $.markAsStructValue(new bytes.Buffer()),
			henc: init?.henc ?? (null! as hpack.Encoder | $.VarRef<hpack.Encoder> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClientConn {
		return new ClientConn(this, true)
	}

	public __goscriptAssign(source: ClientConn): void {
		const target = this._fields
		const values = source._fields
		target.t = values.t
		target.tconn = $.assignFieldValue(target.tconn, values.tconn, "net.Conn")
		target.tlsState = values.tlsState
		target.reused = values.reused
		target.singleUse = values.singleUse
		target.getConnCalled = values.getConnCalled
		target.readerDone = values.readerDone
		target.readerErr = $.assignFieldValue(target.readerErr, values.readerErr, "error")
		target.idleTimeout = values.idleTimeout
		target.idleTimer = $.assignFieldValue(target.idleTimer, values.idleTimer, { kind: $.TypeKind.Interface, methods: [$.methodSignature("C", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])] })
		$.assignStruct(target.mu, values.mu)
		target.cond = values.cond
		$.assignStruct(target.flow, values.flow)
		$.assignStruct(target.inflow, values.inflow)
		target.doNotReuse = values.doNotReuse
		target.closing = values.closing
		target.closed = values.closed
		target.seenSettings = values.seenSettings
		target.wantSettingsAck = values.wantSettingsAck
		target.goAway = values.goAway
		target.goAwayDebug = values.goAwayDebug
		target.streams = values.streams
		target.streamsReserved = values.streamsReserved
		target.nextStreamID = values.nextStreamID
		target.pendingRequests = values.pendingRequests
		target.pings = values.pings
		target.br = values.br
		$.assignStruct(target.lastActive, values.lastActive)
		$.assignStruct(target.lastIdle, values.lastIdle)
		target.maxFrameSize = values.maxFrameSize
		target.maxConcurrentStreams = values.maxConcurrentStreams
		target.peerMaxHeaderListSize = values.peerMaxHeaderListSize
		target.peerMaxHeaderTableSize = values.peerMaxHeaderTableSize
		target.initialWindowSize = values.initialWindowSize
		target.reqHeaderMu = values.reqHeaderMu
		$.assignStruct(target.wmu, values.wmu)
		target.bw = values.bw
		target.fr = values.fr
		target.werr = $.assignFieldValue(target.werr, values.werr, "error")
		$.assignStruct(target.hbuf, values.hbuf)
		target.henc = values.henc
	}

	public async CanTakeNewRequest(): globalThis.Promise<boolean> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		using __defer = new $.DisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
		return (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).canTakeNewRequestLocked() : ClientConn.prototype.canTakeNewRequestLocked.call(cc))
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		let err = errors.New("http2: client connection force closed via ClientConn.Close")
		await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).closeForError(err) : ClientConn.prototype.closeForError.call(cc, err))
		return null
	}

	public async Ping(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		let c: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
		// Generate a random payload
		let p: Uint8Array = $.arrayValue(new Uint8Array(8))
		while (true) {
			{
				let [, err] = await rand.Read($.goSlice(p, undefined, undefined))
				if (err != null) {
					return err
				}
			}
			await (cc$ as ClientConn).mu.Lock()
			// check for dup before insert
			{
				let [, found] = $.mapGet<Uint8Array, $.Channel<{}> | null, $.Channel<{}> | null>((cc$ as ClientConn).pings, $.cloneArrayValue(p, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)), null)
				if (!found) {
					$.mapSet((cc$ as ClientConn).pings, $.cloneArrayValue(p, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)), c)
					void (cc$ as ClientConn).mu.Unlock()
					break
				}
			}
			void (cc$ as ClientConn).mu.Unlock()
		}
		let pingError: $.GoError = null! as $.GoError
		let errc: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			using __defer = new $.DisposableStack()
			await Transport.prototype.markNewGoroutine.call((cc$ as ClientConn).t)
			await (cc$ as ClientConn).wmu.Lock()
			const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).wmu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee3() })
			{
				pingError = await __goscript_frame.Framer.prototype.WritePing.call((cc$ as ClientConn).fr, false, $.cloneArrayValue(p, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)))
				if (pingError != null) {
					errc!.close()
					return
				}
			}
			{
				pingError = await bufio.Writer.prototype.Flush.call((cc$ as ClientConn).bw)
				if (pingError != null) {
					errc!.close()
					return
				}
			}
		})() })
		const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: false,
				channel: c,
				onSelected: async (__goscriptSelect1Result) => {
					return null
				}
			},
			{
				id: 1,
				isSend: false,
				channel: errc,
				onSelected: async (__goscriptSelect1Result) => {
					return pingError
				}
			},
			{
				id: 2,
				isSend: false,
				channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect1Result) => {
					return (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err()
				}
			},
			{
				id: 3,
				isSend: false,
				channel: (cc$ as ClientConn).readerDone,
				onSelected: async (__goscriptSelect1Result) => {
					return (cc$ as ClientConn).readerErr
				}
			}
		], false)
		if (__goscriptSelect1HasReturn) {
			return __goscriptSelect1Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async ReserveNewRequest(): globalThis.Promise<boolean> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		using __defer = new $.DisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.Lock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })
		{
			let st = (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).idleStateLocked() : ClientConn.prototype.idleStateLocked.call(cc))
			if (!st.canTakeNewRequest) {
				return false
			}
		}
		;(cc$ as ClientConn).streamsReserved++
		return true
	}

	public async RoundTrip(req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<[http.Response | $.VarRef<http.Response> | null, $.GoError]> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		return (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).roundTrip(req, (null as ((_p0: clientStream | $.VarRef<clientStream> | null) => void) | null)) : ClientConn.prototype.roundTrip.call(cc, req, (null as ((_p0: clientStream | $.VarRef<clientStream> | null) => void) | null)))
	}

	public async SetDoNotReuse(): globalThis.Promise<void> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		using __defer = new $.DisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.Lock()
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee5() });
		;(cc$ as ClientConn).doNotReuse = true
	}

	public async Shutdown(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		{
			let err = await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).sendGoAway() : ClientConn.prototype.sendGoAway.call(cc))
			if (err != null) {
				return err
			}
		}
		// Wait for all in-flight streams to complete or connection to close
		let done: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
		let cancelled = false
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			using __defer = new $.DisposableStack()
			await Transport.prototype.markNewGoroutine.call((cc$ as ClientConn).t)
			await (cc$ as ClientConn).mu.Lock()
			const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee6() })
			while (true) {
				if (($.len((cc$ as ClientConn).streams) == 0) || (cc$ as ClientConn).closed) {
					;(cc$ as ClientConn).closed = true
					done!.close()
					break
				}
				if (cancelled) {
					break
				}
				await sync.Cond.prototype.Wait.call($.pointerValue<sync.Cond>((cc$ as ClientConn).cond))
			}
		})() })
		void (__goscriptAwait = shutdownEnterWaitStateHook!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: false,
				channel: done,
				onSelected: async (__goscriptSelect2Result) => {
					await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).closeConn() : ClientConn.prototype.closeConn.call(cc))
					return null
				}
			},
			{
				id: 1,
				isSend: false,
				channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect2Result) => {
					await (cc$ as ClientConn).mu.Lock()
					// Free the goroutine above
					cancelled = true
					sync.Cond.prototype.Broadcast.call($.pointerValue<sync.Cond>((cc$ as ClientConn).cond))
					void (cc$ as ClientConn).mu.Unlock()
					return (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err()
				}
			}
		], false)
		if (__goscriptSelect2HasReturn) {
			return __goscriptSelect2Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async State(): globalThis.Promise<ClientConnState> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		using __defer = new $.DisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).wmu.Lock()
		let maxConcurrent = (cc$ as ClientConn).maxConcurrentStreams
		if (!(cc$ as ClientConn).seenSettings) {
			maxConcurrent = 0
		}
		void (cc$ as ClientConn).wmu.Unlock()

		await (cc$ as ClientConn).mu.Lock()
		const __goscriptDeferCallee7 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee7() })
		return new ClientConnState({Closed: (cc$ as ClientConn).closed, Closing: (((cc$ as ClientConn).closing || (cc$ as ClientConn).singleUse) || (cc$ as ClientConn).doNotReuse) || ((cc$ as ClientConn).goAway != null), StreamsActive: $.len((cc$ as ClientConn).streams), StreamsReserved: (cc$ as ClientConn).streamsReserved, StreamsPending: (cc$ as ClientConn).pendingRequests, LastIdle: $.markAsStructValue($.cloneStructValue((cc$ as ClientConn).lastIdle)), MaxConcurrentStreams: maxConcurrent}, true)
	}

	public addStreamLocked(cs: clientStream | $.VarRef<clientStream> | null): void {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		void (cs$ as clientStream).flow.add($.int((cc$ as ClientConn).initialWindowSize, 32))
		void (cs$ as clientStream).flow.setConnFlow($.fieldRef((cc$ as ClientConn)._fields, "flow"))
		void (cs$ as clientStream).inflow.init(4194304);
		;(cs$ as clientStream).ID = (cc$ as ClientConn).nextStreamID;
		;(cc$ as ClientConn).nextStreamID = $.uint((cc$ as ClientConn).nextStreamID + (2), 32)
		$.mapSet((cc$ as ClientConn).streams, (cs$ as clientStream).ID, cs)
		if ((cs$ as clientStream).ID == 0) {
			$.panic("assigned stream ID 0")
		}
	}

	public async awaitOpenSlotForStreamLocked(cs: clientStream | $.VarRef<clientStream> | null): globalThis.Promise<$.GoError> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		while (true) {
			$.assignStruct((cc$ as ClientConn).lastActive, time.Now())
			if ((cc$ as ClientConn).closed || !(cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).canTakeNewRequestLocked() : ClientConn.prototype.canTakeNewRequestLocked.call(cc))) {
				return errClientConnUnusable
			}
			$.assignStruct((cc$ as ClientConn).lastIdle, $.markAsStructValue(new time.Time()))
			if ($.int64($.len((cc$ as ClientConn).streams)) < $.int64((cc$ as ClientConn).maxConcurrentStreams)) {
				return null
			}
			;(cc$ as ClientConn).pendingRequests++
			await sync.Cond.prototype.Wait.call($.pointerValue<sync.Cond>((cc$ as ClientConn).cond));
			;(cc$ as ClientConn).pendingRequests--
			const [__goscriptSelect3HasReturn, __goscriptSelect3Value] = await $.selectStatement<any, $.GoError>([
				{
					id: 0,
					isSend: false,
					channel: (cs$ as clientStream).abort,
					onSelected: async (__goscriptSelect3Result) => {
						return (cs$ as clientStream).abortErr
					}
				},
				{
					id: -1,
					isSend: false,
					channel: null,
				}
			], true)
			if (__goscriptSelect3HasReturn) {
				return __goscriptSelect3Value
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public canTakeNewRequestLocked(): boolean {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		let st = (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).idleStateLocked() : ClientConn.prototype.idleStateLocked.call(cc))
		return st.canTakeNewRequest
	}

	public async closeConn(): globalThis.Promise<void> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		using __defer = new $.DisposableStack()
		let t: time.Timer | $.VarRef<time.Timer> | null = time.AfterFunc(250000000n, $.functionValue(((__receiver) => () => __receiver.forceCloseConn())($.pointerValue<ClientConn>(cc)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*ClientConn).forceCloseConn-fm"))
		__defer.defer(() => { time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(t)) })
		void (__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>($.pointerValue<ClientConn>(cc).tconn).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async closeForError(err: $.GoError): globalThis.Promise<void> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.Lock();
		;(cc$ as ClientConn).closed = true
		for (const [__rangeKey, cs] of (cc$ as ClientConn).streams?.entries() ?? []) {
			await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).abortStreamLocked(err) : clientStream.prototype.abortStreamLocked.call(cs, err))
		}
		sync.Cond.prototype.Broadcast.call($.pointerValue<sync.Cond>((cc$ as ClientConn).cond))
		void (cc$ as ClientConn).mu.Unlock()
		await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).closeConn() : ClientConn.prototype.closeConn.call(cc))
	}

	public async closeForLostPing(): globalThis.Promise<void> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		let err = errors.New("http2: client connection lost")
		{
			let f: ((errType: string) => void) | null = $.pointerValue<Transport>($.pointerValue<ClientConn>(cc).t).CountError
			if (f != null) {
				void (__goscriptAwait = f!("conn_close_lost_ping"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).closeForError(err) : ClientConn.prototype.closeForError.call(cc, err))
	}

	public async closeIfIdle(): globalThis.Promise<void> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.Lock()
		if (($.len((cc$ as ClientConn).streams) > 0) || ((cc$ as ClientConn).streamsReserved > 0)) {
			void (cc$ as ClientConn).mu.Unlock()
			return
		}
		;(cc$ as ClientConn).closed = true
		let nextID = (cc$ as ClientConn).nextStreamID
		// TODO: do clients send GOAWAY too? maybe? Just Close:
		void (cc$ as ClientConn).mu.Unlock()

		if (__goscript_http2.VerboseLogs) {
			await ClientConn.prototype.vlogf.call(cc, "http2: Transport closing idle conn %p (forSingleUse=%v, maxStream=%v)", $.arrayToSlice<any>([$.interfaceValue(cc, "*http2.ClientConn", /* @__PURE__ */ $.pointerType("http2.ClientConn")), (cc$ as ClientConn).singleUse, $.basicInterfaceValue(((nextID - 2) >>> 0), "uint32")]))
		}
		await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).closeConn() : ClientConn.prototype.closeConn.call(cc))
	}

	public async countReadFrameError(err: $.GoError): globalThis.Promise<void> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		let f: ((errType: string) => void) | null = $.pointerValue<Transport>($.pointerValue<ClientConn>(cc).t).CountError
		if ((f == null) || (err == null)) {
			return
		}
		{
			let [ce, ok] = $.typeAssertTuple<__goscript_errors.ConnectionError>(err, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))
			if (ok) {
				let errCode = $.uint(ce, 32)
				void (__goscriptAwait = f!(await fmt.Sprintf("read_frame_conn_error_%s", await __goscript_errors.ErrCode_stringToken(errCode))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return
			}
		}
		if (errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(io.EOF)!)) {
			void (__goscriptAwait = f!("read_frame_eof"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		if (errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(io.ErrUnexpectedEOF)!)) {
			void (__goscriptAwait = f!("read_frame_unexpected_eof"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		if (errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(__goscript_frame.ErrFrameTooLarge)!)) {
			void (__goscriptAwait = f!("read_frame_too_large"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		void (__goscriptAwait = f!("read_frame_other"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async decrStreamReservations(): globalThis.Promise<void> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		using __defer = new $.DisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.Lock()
		const __goscriptDeferCallee8 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee8() })
		void (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).decrStreamReservationsLocked() : ClientConn.prototype.decrStreamReservationsLocked.call(cc))
	}

	public decrStreamReservationsLocked(): void {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		if ((cc$ as ClientConn).streamsReserved > 0) {
			;(cc$ as ClientConn).streamsReserved--
		}
	}

	public async encodeHeaders(req: http.Request | $.VarRef<http.Request> | null, addGzipHeader: boolean, trailers: string, contentLength: bigint): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		const req$: http.Request = req == null ? $.pointerTarget<http.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<http.Request>(req)
		void (cc$ as ClientConn).hbuf.Reset()
		if ((req$ as http.Request).URL == null) {
			return [null, errNilRequestURL]
		}

		let host = (req$ as http.Request).Host
		if ($.stringEqual(host, "")) {
			host = $.pointerValue<url.URL>((req$ as http.Request).URL).Host
		}
		let __goscriptTuple5: any = await httpguts.PunycodeHostPort(host)
		host = __goscriptTuple5[0]
		let err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}
		if (!httpguts.ValidHostHeader(host)) {
			return [null, errors.New("http2: invalid Host header")]
		}

		let path: string = ""
		if (!$.stringEqual((req$ as http.Request).Method, "CONNECT")) {
			path = (req$ as http.Request).URL.RequestURI()
			if (!__goscript_http2.validPseudoPath(path)) {
				let orig = path
				path = strings.TrimPrefix(path, $.concatString(($.concatString($.pointerValue<url.URL>((req$ as http.Request).URL).Scheme, "://")), host))
				if (!__goscript_http2.validPseudoPath(path)) {
					if (!$.stringEqual($.pointerValue<url.URL>((req$ as http.Request).URL).Opaque, "")) {
						return [null, fmt.Errorf("invalid request :path %q from URL.Opaque = %q", orig, $.pointerValue<url.URL>((req$ as http.Request).URL).Opaque)]
					} else {
						return [null, fmt.Errorf("invalid request :path %q", orig)]
					}
				}
			}
		}

		// Check for any invalid headers+trailers and return an error before we
		// potentially pollute our hpack state. (We want to be able to
		// continue to reuse the hpack encoder for future requests)
		{
			let __goscriptShadow0 = await validateHeaders((req$ as http.Request).Header)
			if (!$.stringEqual(__goscriptShadow0, "")) {
				return [null, fmt.Errorf("invalid HTTP header %s", __goscriptShadow0)]
			}
		}
		{
			let __goscriptShadow1 = await validateHeaders((req$ as http.Request).Trailer)
			if (!$.stringEqual(__goscriptShadow1, "")) {
				return [null, fmt.Errorf("invalid HTTP trailer %s", __goscriptShadow1)]
			}
		}

		let enumerateHeaders: ((f: ((name: string, value: string) => void) | null) => void) | null = $.functionValue(async (f: ((name: string, value: string) => void) | null): globalThis.Promise<void> => {
			// 8.1.2.3 Request Pseudo-Header Fields
			// The :path pseudo-header field includes the path and query parts of the
			// target URI (the path-absolute production and optionally a '?' character
			// followed by the query production, see Sections 3.3 and 3.4 of
			// [RFC3986]).
			void (__goscriptAwait = f!(":authority", host), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			let m = (req$ as http.Request).Method
			if ($.stringEqual(m, "")) {
				m = http.MethodGet
			}
			void (__goscriptAwait = f!(":method", m), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!$.stringEqual((req$ as http.Request).Method, "CONNECT")) {
				void (__goscriptAwait = f!(":path", path), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (__goscriptAwait = f!(":scheme", $.pointerValue<url.URL>((req$ as http.Request).URL).Scheme), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if (!$.stringEqual(trailers, "")) {
				void (__goscriptAwait = f!("trailer", trailers), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}

			let didUA: boolean = false
			for (let [k, vv] of (req$ as http.Request).Header?.entries() ?? []) {
				if (__goscript_ascii.asciiEqualFold(k, "host") || __goscript_ascii.asciiEqualFold(k, "content-length")) {
					// Host is :authority, already sent.
					// Content-Length is automatic, set below.
					continue
				} else {
					if ((((__goscript_ascii.asciiEqualFold(k, "connection") || __goscript_ascii.asciiEqualFold(k, "proxy-connection")) || __goscript_ascii.asciiEqualFold(k, "transfer-encoding")) || __goscript_ascii.asciiEqualFold(k, "upgrade")) || __goscript_ascii.asciiEqualFold(k, "keep-alive")) {
						// Per 8.1.2.2 Connection-Specific Header
						// Fields, don't send connection-specific
						// fields. We have already checked if any
						// are error-worthy so just ignore the rest.
						continue
					} else {
						if (__goscript_ascii.asciiEqualFold(k, "user-agent")) {
							// Match Go's http1 behavior: at most one
							// User-Agent. If set to nil or empty string,
							// then omit it. Otherwise if not mentioned,
							// include the default (below).
							didUA = true
							if ($.sliceLen(vv) < 1) {
								continue
							}
							vv = $.goSlice(vv, undefined, 1)
							if ($.stringEqual($.arrayIndex(vv!, 0), "")) {
								continue
							}
						} else {
							if (__goscript_ascii.asciiEqualFold(k, "cookie")) {
								// Per 8.1.2.5 To allow for better compression efficiency, the
								// Cookie header field MAY be split into separate header fields,
								// each with one or more cookie-pairs.
								for (let __goscriptRangeTarget0 = vv, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
									let v = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
									while (true) {
										let p: number = strings.IndexByte(v, 59)
										if (p < 0) {
											break
										}
										void (__goscriptAwait = f!("cookie", $.sliceStringOrBytes(v, undefined, p)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
										p++
										// strip space after semicolon if any.
										while (((p + 1) <= $.stringLen(v)) && ($.indexString(v, p) == 32)) {
											p++
										}
										v = $.sliceStringOrBytes(v, p, undefined)
									}
									if ($.stringLen(v) > 0) {
										void (__goscriptAwait = f!("cookie", v), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
									}
								}
								continue
							}
						}
					}
				}

				for (let __goscriptRangeTarget1 = vv, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
					let v = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
					void (__goscriptAwait = f!(k, v), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
			if (shouldSendReqContentLength((req$ as http.Request).Method, contentLength)) {
				void (__goscriptAwait = f!("content-length", strconv.FormatInt(contentLength, 10)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if (addGzipHeader) {
				void (__goscriptAwait = f!("accept-encoding", "gzip"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if (!didUA) {
				void (__goscriptAwait = f!("user-agent", "Go-http-client/2.0"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}, ({ kind: $.TypeKind.Function, params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo))

		// Do a first pass over the headers counting bytes to ensure
		// we don't exceed cc.peerMaxHeaderListSize. This is done as a
		// separate pass before encoding the headers to prevent
		// modifying the hpack state.
		let hlSize = 0n
		void (__goscriptAwait = enumerateHeaders!($.functionValue((name: string, value: string): void => {
			let hf = new hpack.HeaderField({Name: name, Value: value}, true)
			hlSize = $.uint64Add(hlSize, $.uint64(hf.Size()))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		if (hlSize > (cc$ as ClientConn).peerMaxHeaderListSize) {
			return [null, errRequestHeaderListSize]
		}

		let trace: httptrace.ClientTrace | $.VarRef<httptrace.ClientTrace> | null = await httptrace.ContextClientTrace(http.Request.prototype.Context.call($.pointerValue<http.Request>(req)))
		let traceHeaders = traceHasWroteHeaderField(trace)

		// Header list size is ok. Write the headers.
		void (__goscriptAwait = enumerateHeaders!($.functionValue(async (name: string, value: string): globalThis.Promise<void> => {
			let __goscriptTuple6: any = await __goscript_headermap.lowerHeader(name)
			name = __goscriptTuple6[0]
			let ascii = __goscriptTuple6[1]
			if (!ascii) {
				// Skip writing invalid headers. Per RFC 7540, Section 8.1.2, header
				// field names have to be ASCII characters (just as in HTTP/1.x).
				return
			}
			await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).writeHeader(name, value) : ClientConn.prototype.writeHeader.call(cc, name, value))
			if (traceHeaders) {
				await traceWroteHeaderField(trace, name, value)
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		return [(cc$ as ClientConn).hbuf.Bytes(), null]
	}

	public async encodeTrailers(trailer: http.Header): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		void (cc$ as ClientConn).hbuf.Reset()

		let hlSize = 0n
		for (const [k, vv] of trailer?.entries() ?? []) {
			for (let __goscriptRangeTarget2 = vv, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let v = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
				let hf = new hpack.HeaderField({Name: k, Value: v}, true)
				hlSize = $.uint64Add(hlSize, $.uint64(hf.Size()))
			}
		}
		if (hlSize > (cc$ as ClientConn).peerMaxHeaderListSize) {
			return [null, errRequestHeaderListSize]
		}

		for (const [k, vv] of trailer?.entries() ?? []) {
			let [lowKey, ascii] = await __goscript_headermap.lowerHeader(k)
			if (!ascii) {
				// Skip writing invalid headers. Per RFC 7540, Section 8.1.2, header
				// field names have to be ASCII characters (just as in HTTP/1.x).
				continue
			}
			// Transfer-Encoding, etc.. have already been filtered at the
			// start of RoundTrip
			for (let __goscriptRangeTarget3 = vv, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
				let v = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string)
				await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).writeHeader(lowKey, v) : ClientConn.prototype.writeHeader.call(cc, lowKey, v))
			}
		}
		return [(cc$ as ClientConn).hbuf.Bytes(), null]
	}

	public async forceCloseConn(): globalThis.Promise<void> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		let __goscriptTuple7: any = $.typeAssertTuple<tls.Conn | $.VarRef<tls.Conn> | null>($.pointerValue<ClientConn>(cc).tconn, /* @__PURE__ */ $.pointerType("tls.Conn"))
		let tc: tls.Conn | $.VarRef<tls.Conn> | null = __goscriptTuple7[0]
		let ok = __goscriptTuple7[1]
		if (!ok) {
			return
		}
		{
			let nc = (tc !== null && (tc as any).__isVarRef !== true && (tc as any).__goValue === undefined ? ((tc as any) as tls.Conn).NetConn() : tls.Conn.prototype.NetConn.call(tc))
			if (nc != null) {
				void (__goscriptAwait = (nc !== null && (nc as any).__isVarRef !== true && (nc as any).__goValue === undefined ? (nc as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(nc)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	}

	public async forgetStreamID(id: number): globalThis.Promise<void> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.Lock()
		let slen = $.len((cc$ as ClientConn).streams)
		$.deleteMapEntry((cc$ as ClientConn).streams, id)
		if ($.len((cc$ as ClientConn).streams) != (slen - 1)) {
			$.panic("forgetting unknown stream id")
		}
		$.assignStruct((cc$ as ClientConn).lastActive, time.Now())
		if (($.len((cc$ as ClientConn).streams) == 0) && ((cc$ as ClientConn).idleTimer != null)) {
			void (__goscriptAwait = $.pointerValue<__goscript_timer.timer>((cc$ as ClientConn).idleTimer).Reset((cc$ as ClientConn).idleTimeout), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			$.assignStruct((cc$ as ClientConn).lastIdle, time.Now())
		}
		// Wake up writeRequestBody via clientStream.awaitFlowControl and
		// wake up RoundTrip if there is a pending request.
		sync.Cond.prototype.Broadcast.call($.pointerValue<sync.Cond>((cc$ as ClientConn).cond))

		let closeOnIdle = (((cc$ as ClientConn).singleUse || (cc$ as ClientConn).doNotReuse) || Transport.prototype.disableKeepAlives.call((cc$ as ClientConn).t)) || ((cc$ as ClientConn).goAway != null)
		if ((closeOnIdle && ((cc$ as ClientConn).streamsReserved == 0)) && ($.len((cc$ as ClientConn).streams) == 0)) {
			if (__goscript_http2.VerboseLogs) {
				await ClientConn.prototype.vlogf.call(cc, "http2: Transport closing idle conn %p (forSingleUse=%v, maxStream=%v)", $.arrayToSlice<any>([$.interfaceValue(cc, "*http2.ClientConn", /* @__PURE__ */ $.pointerType("http2.ClientConn")), (cc$ as ClientConn).singleUse, $.basicInterfaceValue((((cc$ as ClientConn).nextStreamID - 2) >>> 0), "uint32")]))
			}
			;(cc$ as ClientConn).closed = true
			const __goscriptDeferCallee9 = $.functionValue(((__receiver) => () => __receiver.closeConn())((cc$ as ClientConn)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*ClientConn).closeConn-fm")
			__defer.defer(async () => { await __goscriptDeferCallee9() })
		}

		void (cc$ as ClientConn).mu.Unlock()
	}

	public async healthCheck(): globalThis.Promise<void> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		let pingTimeout = Transport.prototype.pingTimeout.call((cc$ as ClientConn).t)
		// We don't need to periodically ping in the health check, because the readLoop of ClientConn will
		// trigger the healthCheck again if there is no frame received.
		let [ctx, cancel] = await Transport.prototype.contextWithTimeout.call((cc$ as ClientConn).t, context.Background(), pingTimeout)
		const __goscriptDeferCallee10 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee10!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).vlogf("http2: Transport sending health check", null) : ClientConn.prototype.vlogf.call(cc, "http2: Transport sending health check", null))
		let err = await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).Ping(ctx) : ClientConn.prototype.Ping.call(cc, ctx))
		if (err != null) {
			await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).vlogf("http2: Transport health check failure: %v", $.arrayToSlice<any>([(err as any)])) : ClientConn.prototype.vlogf.call(cc, "http2: Transport health check failure: %v", $.arrayToSlice<any>([(err as any)])))
			await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).closeForLostPing() : ClientConn.prototype.closeForLostPing.call(cc))
		} else {
			await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).vlogf("http2: Transport health check success", null) : ClientConn.prototype.vlogf.call(cc, "http2: Transport health check success", null))
		}
	}

	public async idleState(): globalThis.Promise<clientConnIdleState> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		using __defer = new $.DisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.Lock()
		const __goscriptDeferCallee11 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee11() })
		return (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).idleStateLocked() : ClientConn.prototype.idleStateLocked.call(cc))
	}

	public idleStateLocked(): clientConnIdleState {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		let st: clientConnIdleState = new clientConnIdleState(undefined, true)
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		if ((cc$ as ClientConn).singleUse && ((cc$ as ClientConn).nextStreamID > 1)) {
			return st
		}
		let maxConcurrentOkay: boolean = false
		if ($.pointerValue<Transport>((cc$ as ClientConn).t).StrictMaxConcurrentStreams) {
			// We'll tell the caller we can take a new request to
			// prevent the caller from dialing a new TCP
			// connection, but then we'll block later before
			// writing it.
			maxConcurrentOkay = true
		} else {
			maxConcurrentOkay = $.int64(($.len((cc$ as ClientConn).streams) + (cc$ as ClientConn).streamsReserved) + 1) <= $.int64((cc$ as ClientConn).maxConcurrentStreams)
		}

		st.canTakeNewRequest = (((((((cc$ as ClientConn).goAway == null) && !(cc$ as ClientConn).closed) && !(cc$ as ClientConn).closing) && maxConcurrentOkay) && !(cc$ as ClientConn).doNotReuse) && (($.int64Add($.int64((cc$ as ClientConn).nextStreamID), ($.int64Mul(2n, $.int64((cc$ as ClientConn).pendingRequests))))) < 2147483647n)) && !(cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).tooIdleLocked() : ClientConn.prototype.tooIdleLocked.call(cc))
		return st
	}

	public async isDoNotReuseAndIdle(): globalThis.Promise<boolean> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		using __defer = new $.DisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.Lock()
		const __goscriptDeferCallee12 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee12() })
		return (cc$ as ClientConn).doNotReuse && ($.len((cc$ as ClientConn).streams) == 0)
	}

	public async logf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		await Transport.prototype.logf.call($.pointerValue<ClientConn>(cc).t, format, args)
	}

	public async onIdleTimeout(): globalThis.Promise<void> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).closeIfIdle() : ClientConn.prototype.closeIfIdle.call(cc))
	}

	public async readLoop(): globalThis.Promise<void> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await Transport.prototype.markNewGoroutine.call((cc$ as ClientConn).t)
		let rl: clientConnReadLoop | $.VarRef<clientConnReadLoop> | null = new clientConnReadLoop({cc: cc})
		__defer.defer(async () => { await (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).cleanup() : clientConnReadLoop.prototype.cleanup.call(rl)) });
		;(cc$ as ClientConn).readerErr = await (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).run() : clientConnReadLoop.prototype.run.call(rl))
		{
			let [ce, ok] = $.typeAssertTuple<__goscript_errors.ConnectionError>((cc$ as ClientConn).readerErr, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))
			if (ok) {
				await (cc$ as ClientConn).wmu.Lock()
				await __goscript_frame.Framer.prototype.WriteGoAway.call((cc$ as ClientConn).fr, 0, $.uint(ce, 32), null)
				void (cc$ as ClientConn).wmu.Unlock()
			}
		}
	}

	public responseHeaderTimeout(): time.Duration {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		if ($.pointerValue<Transport>((cc$ as ClientConn).t).t1 != null) {
			return $.pointerValue<http.Transport>($.pointerValue<Transport>((cc$ as ClientConn).t).t1).ResponseHeaderTimeout
		}
		// No way to do this (yet?) with just an http2.Transport. Probably
		// no need. Request.Cancel this is the new way. We only need to support
		// this for compatibility with the old http.Transport fields when
		// we're doing transparent http2.
		return 0n
	}

	public async roundTrip(req: http.Request | $.VarRef<http.Request> | null, streamf: ((_p0: clientStream | $.VarRef<clientStream> | null) => void) | null): globalThis.Promise<[http.Response | $.VarRef<http.Response> | null, $.GoError]> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		const req$: http.Request = req == null ? $.pointerTarget<http.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<http.Request>(req)
		let ctx = http.Request.prototype.Context.call($.pointerValue<http.Request>(req))
		let cs: clientStream | $.VarRef<clientStream> | null = (await (async () => { const __goscriptLiteralField2 = actualContentLength(req); const __goscriptLiteralField3 = await httptrace.ContextClientTrace(ctx); return new clientStream({cc: cc, ctx: ctx, reqCancel: (req$ as http.Request).Cancel, isHead: $.stringEqual((req$ as http.Request).Method, "HEAD"), reqBody: (req$ as http.Request).Body, reqBodyContentLength: __goscriptLiteralField2, trace: __goscriptLiteralField3, peerClosed: $.makeChannel<{}>(0, {}, "both"), abort: $.makeChannel<{}>(0, {}, "both"), respHeaderRecv: $.makeChannel<{}>(0, {}, "both"), donec: $.makeChannel<{}>(0, {}, "both")}) })())
		let cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)

		// TODO(bradfitz): this is a copy of the logic in net/http. Unify somewhere?
		if (((!Transport.prototype.disableCompression.call((cc$ as ClientConn).t) && ($.stringEqual(await http.Header_Get((req$ as http.Request).Header, "Accept-Encoding"), ""))) && ($.stringEqual(await http.Header_Get((req$ as http.Request).Header, "Range"), ""))) && !(cs$ as clientStream).isHead) {
			// Request gzip only, not deflate. Deflate is ambiguous and
			// not as universally supported anyway.
			// See: https://zlib.net/zlib_faq.html#faq39
			//
			// Note that we don't request this for HEAD requests,
			// due to a bug in nginx:
			//   http://trac.nginx.org/nginx/ticket/358
			//   https://golang.org/issue/5522
			//
			// We don't request gzip if the request is for a range, since
			// auto-decoding a portion of a gzipped document will just fail
			// anyway. See https://golang.org/issue/8923
			;(cs$ as clientStream).requestedGzip = true
		}

		const __goscriptDeferArg0 = req
		const __goscriptDeferArg1 = streamf
		queueMicrotask(async () => { await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).doRequest(__goscriptDeferArg0, __goscriptDeferArg1) : clientStream.prototype.doRequest.call(cs, __goscriptDeferArg0, __goscriptDeferArg1)) })

		let waitDone: (() => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue(async (): globalThis.Promise<$.GoError> => {
			const [__goscriptSelect4HasReturn, __goscriptSelect4Value] = await $.selectStatement<any, $.GoError>([
				{
					id: 0,
					isSend: false,
					channel: (cs$ as clientStream).donec,
					onSelected: async (__goscriptSelect4Result) => {
						return null
					}
				},
				{
					id: 1,
					isSend: false,
					channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
					onSelected: async (__goscriptSelect4Result) => {
						return (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err()
					}
				},
				{
					id: 2,
					isSend: false,
					channel: (cs$ as clientStream).reqCancel,
					onSelected: async (__goscriptSelect4Result) => {
						return errRequestCanceled
					}
				}
			], false)
			if (__goscriptSelect4HasReturn) {
				return __goscriptSelect4Value
			}
			throw new globalThis.Error("unreachable select")
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo))

		let handleResponseHeaders: (() => [http.Response | $.VarRef<http.Response> | null, $.GoError] | globalThis.Promise<[http.Response | $.VarRef<http.Response> | null, $.GoError]>) | null = $.functionValue(async (): globalThis.Promise<[http.Response | $.VarRef<http.Response> | null, $.GoError]> => {
			let res: http.Response | $.VarRef<http.Response> | null = (cs$ as clientStream).res
			let res$: http.Response = res == null ? $.pointerTarget<http.Response>(res) : (res as any).__isVarRef === true ? (res as any).value : (res as any).__goValue === undefined ? (res as any) : $.pointerTarget<http.Response>(res)
			if ((res$ as http.Response).StatusCode > 299) {
				// On error or status code 3xx, 4xx, 5xx, etc abort any
				// ongoing write, assuming that the server doesn't care
				// about our request body. If the server replied with 1xx or
				// 2xx, however, then assume the server DOES potentially
				// want our body (e.g. full-duplex streaming:
				// golang.org/issue/13444). If it turns out the server
				// doesn't, they'll RST_STREAM us soon enough. This is a
				// heuristic to avoid adding knobs to Transport. Hopefully
				// we can keep it.
				await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).abortRequestBodyWrite() : clientStream.prototype.abortRequestBodyWrite.call(cs))
			}
			;(res$ as http.Response).Request = req;
			;(res$ as http.Response).TLS = (cc$ as ClientConn).tlsState
			if (($.comparableEqual((res$ as http.Response).Body, noBody)) && (actualContentLength(req) == 0n)) {
				// If there isn't a request or response body still being
				// written, then wait for the stream to be closed before
				// RoundTrip returns.
				{
					let err = (__goscriptAwait = waitDone!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (err != null) {
						return [null, err]
					}
				}
			}
			return [res, null]
		}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("http.Response"), "error"] } as $.FunctionTypeInfo))

		let cancelRequest: ((cs: clientStream | $.VarRef<clientStream> | null, err: $.GoError) => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue(async (cs: clientStream | $.VarRef<clientStream> | null, err: $.GoError): globalThis.Promise<$.GoError> => {
			await $.pointerValue<ClientConn>($.pointerValue<clientStream>(cs).cc).mu.Lock()
			let bodyClosed: $.Channel<{}> | null = $.pointerValue<clientStream>(cs).reqBodyClosed
			$.pointerValue<ClientConn>($.pointerValue<clientStream>(cs).cc).mu.Unlock()
			// Wait for the request body to be closed.
			//
			// If nothing closed the body before now, abortStreamLocked
			// will have started a goroutine to close it.
			//
			// Closing the body before returning avoids a race condition
			// with net/http checking its readTrackingBody to see if the
			// body was read from or closed. See golang/go#60041.
			//
			// The body is closed in a separate goroutine without the
			// connection mutex held, but dropping the mutex before waiting
			// will keep us from holding it indefinitely if the body
			// close is slow for some reason.
			if (bodyClosed != null) {
				await $.chanRecv(bodyClosed)
			}
			return err
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http2.clientStream"), "error"], results: ["error"] } as $.FunctionTypeInfo))

		while (true) {
			const [__goscriptSelect5HasReturn, __goscriptSelect5Value] = await $.selectStatement<any, [http.Response | $.VarRef<http.Response> | null, $.GoError]>([
				{
					id: 0,
					isSend: false,
					channel: (cs$ as clientStream).respHeaderRecv,
					onSelected: async (__goscriptSelect5Result) => {
						return handleResponseHeaders!()
					}
				},
				{
					id: 1,
					isSend: false,
					channel: (cs$ as clientStream).abort,
					onSelected: async (__goscriptSelect5Result) => {
						const [__goscriptSelect6HasReturn, __goscriptSelect6Value] = await $.selectStatement<any, [http.Response | $.VarRef<http.Response> | null, $.GoError]>([
							{
								id: 0,
								isSend: false,
								channel: (cs$ as clientStream).respHeaderRecv,
								onSelected: async (__goscriptSelect6Result) => {
									return handleResponseHeaders!()
								}
							},
							{
								id: -1,
								isSend: false,
								channel: null,
								onSelected: async (__goscriptSelect6Result) => {
									void (__goscriptAwait = waitDone!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
									return [null, (cs$ as clientStream).abortErr]
								}
							}
						], true)
						if (__goscriptSelect6HasReturn) {
							return __goscriptSelect6Value
						}
						throw new globalThis.Error("unreachable select")
					}
				},
				{
					id: 2,
					isSend: false,
					channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
					onSelected: async (__goscriptSelect5Result) => {
						let err = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).abortStream(err) : clientStream.prototype.abortStream.call(cs, err))
						return [null, (__goscriptAwait = cancelRequest!(cs, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]
					}
				},
				{
					id: 3,
					isSend: false,
					channel: (cs$ as clientStream).reqCancel,
					onSelected: async (__goscriptSelect5Result) => {
						await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).abortStream(errRequestCanceled) : clientStream.prototype.abortStream.call(cs, errRequestCanceled))
						return [null, (__goscriptAwait = cancelRequest!(cs, errRequestCanceled), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]
					}
				}
			], false)
			if (__goscriptSelect5HasReturn) {
				return __goscriptSelect5Value
			}
			throw new globalThis.Error("unreachable select")
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async sendGoAway(): globalThis.Promise<$.GoError> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		using __defer = new $.DisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.Lock()
		let closing = (cc$ as ClientConn).closing;
		;(cc$ as ClientConn).closing = true
		let maxStreamID = (cc$ as ClientConn).nextStreamID
		void (cc$ as ClientConn).mu.Unlock()
		if (closing) {
			// GOAWAY sent already
			return null
		}

		await (cc$ as ClientConn).wmu.Lock()
		const __goscriptDeferCallee13 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).wmu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee13() })
		// Send a graceful shutdown frame to server
		{
			let err = await __goscript_frame.Framer.prototype.WriteGoAway.call((cc$ as ClientConn).fr, maxStreamID, 0, null)
			if (err != null) {
				return err
			}
		}
		{
			let err = await bufio.Writer.prototype.Flush.call((cc$ as ClientConn).bw)
			if (err != null) {
				return err
			}
		}
		// Prevent new requests
		return null
	}

	public async setGoAway(f: __goscript_frame.GoAwayFrame | $.VarRef<__goscript_frame.GoAwayFrame> | null): globalThis.Promise<void> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		using __defer = new $.DisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.Lock()
		const __goscriptDeferCallee14 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee14() })

		let old: __goscript_frame.GoAwayFrame | $.VarRef<__goscript_frame.GoAwayFrame> | null = (cc$ as ClientConn).goAway
		let old$: __goscript_frame.GoAwayFrame = old == null ? $.pointerTarget<__goscript_frame.GoAwayFrame>(old) : (old as any).__isVarRef === true ? (old as any).value : (old as any).__goValue === undefined ? (old as any) : $.pointerTarget<__goscript_frame.GoAwayFrame>(old);
		;(cc$ as ClientConn).goAway = f

		// Merge the previous and current GoAway error frames.
		if ($.stringEqual((cc$ as ClientConn).goAwayDebug, "")) {
			;(cc$ as ClientConn).goAwayDebug = $.bytesToString((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.GoAwayFrame).DebugData() : __goscript_frame.GoAwayFrame.prototype.DebugData.call(f)))
		}
		if ((old != null) && ((old$ as __goscript_frame.GoAwayFrame).ErrCode != 0)) {
			$.pointerValue<__goscript_frame.GoAwayFrame>((cc$ as ClientConn).goAway).ErrCode = (old$ as __goscript_frame.GoAwayFrame).ErrCode
		}
		let last = $.pointerValue<__goscript_frame.GoAwayFrame>(f).LastStreamID
		for (const [streamID, cs] of (cc$ as ClientConn).streams?.entries() ?? []) {
			if (streamID <= last) {
				// The server's GOAWAY indicates that it received this stream.
				// It will either finish processing it, or close the connection
				// without doing so. Either way, leave the stream alone for now.
				continue
			}
			if ((streamID == 1) && ($.pointerValue<__goscript_frame.GoAwayFrame>((cc$ as ClientConn).goAway).ErrCode != 0)) {
				// Don't retry the first stream on a connection if we get a non-NO error.
				// If the server is sending an error on a new connection,
				// retrying the request on a new one probably isn't going to work.
				await clientStream.prototype.abortStreamLocked.call(cs, fmt.Errorf("http2: Transport received GOAWAY from server ErrCode:%v", $.namedValueInterfaceValue<any>($.pointerValue<__goscript_frame.GoAwayFrame>((cc$ as ClientConn).goAway).ErrCode, "http2.ErrCode", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			} else {
				// Aborting the stream with errClentConnGotGoAway indicates that
				// the request should be retried on a new connection.
				await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).abortStreamLocked(errClientConnGotGoAway) : clientStream.prototype.abortStreamLocked.call(cs, errClientConnGotGoAway))
			}
		}
	}

	public tooIdleLocked(): boolean {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		// The Round(0) strips the monontonic clock reading so the
		// times are compared based on their wall time. We don't want
		// to reuse a connection that's been sitting idle during
		// VM/laptop suspend if monotonic time was also frozen.
		return (((cc$ as ClientConn).idleTimeout != 0n) && !$.markAsStructValue($.cloneStructValue((cc$ as ClientConn).lastIdle)).IsZero()) && (time.Since($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((cc$ as ClientConn).lastIdle)).Round(0n)))) > (cc$ as ClientConn).idleTimeout)
	}

	public async vlogf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		await Transport.prototype.vlogf.call($.pointerValue<ClientConn>(cc).t, format, args)
	}

	public async writeHeader(name: string, value: string): globalThis.Promise<void> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		if (__goscript_http2.VerboseLogs) {
			await log.Printf("http2: Transport encoding header %q = %q", $.arrayToSlice<any>([name, value]))
		}
		await hpack.Encoder.prototype.WriteField.call($.pointerValue<ClientConn>(cc).henc, new hpack.HeaderField({Name: name, Value: value}, true))
	}

	public async writeHeaders(streamID: number, endStream: boolean, maxFrameSize: number, hdrs: $.Slice<number>): globalThis.Promise<$.GoError> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		let first = true
		while (($.sliceLen(hdrs) > 0) && ((cc$ as ClientConn).werr == null)) {
			let chunk: $.Slice<number> = hdrs
			if ($.sliceLen(chunk) > maxFrameSize) {
				chunk = $.goSlice(chunk, undefined, maxFrameSize)
			}
			hdrs = $.goSlice(hdrs, $.sliceLen(chunk), undefined)
			let endHeaders = $.sliceLen(hdrs) == 0
			if (first) {
				await __goscript_frame.Framer.prototype.WriteHeaders.call((cc$ as ClientConn).fr, new __goscript_frame.HeadersFrameParam({StreamID: streamID, BlockFragment: chunk, EndStream: endStream, EndHeaders: endHeaders}, true))
				first = false
			} else {
				await __goscript_frame.Framer.prototype.WriteContinuation.call((cc$ as ClientConn).fr, streamID, endHeaders, chunk)
			}
		}
		await bufio.Writer.prototype.Flush.call((cc$ as ClientConn).bw)
		return (cc$ as ClientConn).werr
	}

	public async writeStreamReset(streamID: number, code: __goscript_errors.ErrCode, err: $.GoError): globalThis.Promise<void> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		// TODO: map err to more interesting error codes, once the
		// HTTP community comes up with some. But currently for
		// RST_STREAM there's no equivalent to GOAWAY frame's debug
		// data, and the error codes are all pretty vague ("cancel").
		await (cc$ as ClientConn).wmu.Lock()
		await __goscript_frame.Framer.prototype.WriteRSTStream.call((cc$ as ClientConn).fr, streamID, code)
		await bufio.Writer.prototype.Flush.call((cc$ as ClientConn).bw)
		void (cc$ as ClientConn).wmu.Unlock()
	}

	static __typeInfo = $.registerStructType(
		"http2.ClientConn",
		() => new ClientConn(),
		() => [$.methodSignature("CanTakeNewRequest", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Close", [], ["error"], true), $.methodSignature("Ping", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReserveNewRequest", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("RoundTrip", [["req", /* @__PURE__ */ $.pointerType("http.Request")]], [/* @__PURE__ */ $.pointerType("http.Response"), "error"], true), $.methodSignature("SetDoNotReuse", [], [], true), $.methodSignature("Shutdown", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("State", [], ["http2.ClientConnState"], true), $.methodSignature("addStreamLocked", [["cs", /* @__PURE__ */ $.pointerType("http2.clientStream")]], [], true), $.methodSignature("awaitOpenSlotForStreamLocked", [["cs", /* @__PURE__ */ $.pointerType("http2.clientStream")]], ["error"], true), $.methodSignature("canTakeNewRequestLocked", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("closeConn", [], [], true), $.methodSignature("closeForError", [["err", "error"]], [], true), $.methodSignature("closeForLostPing", [], [], true), $.methodSignature("closeIfIdle", [], [], true), $.methodSignature("countReadFrameError", [["err", "error"]], [], true), $.methodSignature("decrStreamReservations", [], [], true), $.methodSignature("decrStreamReservationsLocked", [], [], true), $.methodSignature("encodeHeaders", [["req", /* @__PURE__ */ $.pointerType("http.Request")], ["addGzipHeader", /* @__PURE__ */ $.basicType("bool")], ["trailers", /* @__PURE__ */ $.basicType("string")], ["contentLength", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("encodeTrailers", [["trailer", "http.Header"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("forceCloseConn", [], [], true), $.methodSignature("forgetStreamID", [["id", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("healthCheck", [], [], true), $.methodSignature("idleState", [], ["http2.clientConnIdleState"], true), $.methodSignature("idleStateLocked", [], [["st", "http2.clientConnIdleState"]], true), $.methodSignature("isDoNotReuseAndIdle", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("logf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("onIdleTimeout", [], [], true), $.methodSignature("readLoop", [], [], true), $.methodSignature("responseHeaderTimeout", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("roundTrip", [["req", /* @__PURE__ */ $.pointerType("http.Request")], ["streamf", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http2.clientStream")], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("http.Response"), "error"], true), $.methodSignature("sendGoAway", [], ["error"], true), $.methodSignature("setGoAway", [["f", /* @__PURE__ */ $.pointerType("http2.GoAwayFrame")]], [], true), $.methodSignature("tooIdleLocked", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("vlogf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("writeHeader", [["name", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("writeHeaders", [["streamID", /* @__PURE__ */ $.basicType("uint32")], ["endStream", /* @__PURE__ */ $.basicType("bool")], ["maxFrameSize", /* @__PURE__ */ $.basicType("int")], ["hdrs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("writeStreamReset", [["streamID", /* @__PURE__ */ $.basicType("uint32")], ["code", /* @__PURE__ */ $.basicType("uint32", "http2.ErrCode")], ["err", "error"]], [], true)],
		ClientConn,
		() => [/* @__PURE__ */ $.structField("t", /* @__PURE__ */ $.pointerType("http2.Transport"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("tconn", "net.Conn", [1], 8, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("tlsState", /* @__PURE__ */ $.pointerType("tls.ConnectionState"), [2], 24, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("reused", /* @__PURE__ */ $.basicType("uint32"), [3], 32, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("singleUse", /* @__PURE__ */ $.basicType("bool"), [4], 36, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("getConnCalled", /* @__PURE__ */ $.basicType("bool"), [5], 37, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("readerDone", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [6], 40, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("readerErr", "error", [7], 48, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("idleTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [8], 64, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("idleTimer", { kind: $.TypeKind.Interface, methods: [$.methodSignature("C", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])] }, [9], 72, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [10], 88, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("cond", /* @__PURE__ */ $.pointerType("sync.Cond"), [11], 96, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("flow", "http2.outflow", [12], 104, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("inflow", "http2.inflow", [13], 120, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("doNotReuse", /* @__PURE__ */ $.basicType("bool"), [14], 128, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("closing", /* @__PURE__ */ $.basicType("bool"), [15], 129, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("closed", /* @__PURE__ */ $.basicType("bool"), [16], 130, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("seenSettings", /* @__PURE__ */ $.basicType("bool"), [17], 131, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("wantSettingsAck", /* @__PURE__ */ $.basicType("bool"), [18], 132, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("goAway", /* @__PURE__ */ $.pointerType("http2.GoAwayFrame"), [19], 136, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("goAwayDebug", /* @__PURE__ */ $.basicType("string"), [20], 144, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("streams", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.pointerType("http2.clientStream")), [21], 160, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("streamsReserved", /* @__PURE__ */ $.basicType("int"), [22], 168, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("nextStreamID", /* @__PURE__ */ $.basicType("uint32"), [23], 176, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("pendingRequests", /* @__PURE__ */ $.basicType("int"), [24], 184, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("pings", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8), /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both")), [25], 192, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("br", /* @__PURE__ */ $.pointerType("bufio.Reader"), [26], 200, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("lastActive", "time.Time", [27], 208, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("lastIdle", "time.Time", [28], 232, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("maxFrameSize", /* @__PURE__ */ $.basicType("uint32"), [29], 256, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("maxConcurrentStreams", /* @__PURE__ */ $.basicType("uint32"), [30], 260, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("peerMaxHeaderListSize", /* @__PURE__ */ $.basicType("uint64"), [31], 264, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("peerMaxHeaderTableSize", /* @__PURE__ */ $.basicType("uint32"), [32], 272, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("initialWindowSize", /* @__PURE__ */ $.basicType("uint32"), [33], 276, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("reqHeaderMu", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [34], 280, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("wmu", "sync.Mutex", [35], 288, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("bw", /* @__PURE__ */ $.pointerType("bufio.Writer"), [36], 296, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("fr", /* @__PURE__ */ $.pointerType("http2.Framer"), [37], 304, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("werr", "error", [38], 312, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("hbuf", "bytes.Buffer", [39], 328, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("henc", /* @__PURE__ */ $.pointerType("hpack.Encoder"), [40], 368, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class clientStream {
	public get cc(): ClientConn | $.VarRef<ClientConn> | null {
		return this._fields.cc
	}

	public set cc(value: ClientConn | $.VarRef<ClientConn> | null) {
		this._fields.cc = value
	}

	// Fields of Request that we may access even after the response body is closed.
	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get reqCancel(): $.Channel<{}> | null {
		return this._fields.reqCancel
	}

	public set reqCancel(value: $.Channel<{}> | null) {
		this._fields.reqCancel = value
	}

	public get trace(): httptrace.ClientTrace | $.VarRef<httptrace.ClientTrace> | null {
		return this._fields.trace
	}

	public set trace(value: httptrace.ClientTrace | $.VarRef<httptrace.ClientTrace> | null) {
		this._fields.trace = value
	}

	public get ID(): number {
		return this._fields.ID
	}

	public set ID(value: number) {
		this._fields.ID = value
	}

	public get bufPipe(): __goscript_pipe.pipe {
		return this._fields.bufPipe
	}

	public set bufPipe(value: __goscript_pipe.pipe) {
		this._fields.bufPipe = value
	}

	public get requestedGzip(): boolean {
		return this._fields.requestedGzip
	}

	public set requestedGzip(value: boolean) {
		this._fields.requestedGzip = value
	}

	public get isHead(): boolean {
		return this._fields.isHead
	}

	public set isHead(value: boolean) {
		this._fields.isHead = value
	}

	public get abortOnce(): sync.Once {
		return this._fields.abortOnce
	}

	public set abortOnce(value: sync.Once) {
		this._fields.abortOnce = value
	}

	public get abort(): $.Channel<{}> | null {
		return this._fields.abort
	}

	public set abort(value: $.Channel<{}> | null) {
		this._fields.abort = value
	}

	public get abortErr(): $.GoError {
		return this._fields.abortErr
	}

	public set abortErr(value: $.GoError) {
		this._fields.abortErr = value
	}

	public get peerClosed(): $.Channel<{}> | null {
		return this._fields.peerClosed
	}

	public set peerClosed(value: $.Channel<{}> | null) {
		this._fields.peerClosed = value
	}

	public get donec(): $.Channel<{}> | null {
		return this._fields.donec
	}

	public set donec(value: $.Channel<{}> | null) {
		this._fields.donec = value
	}

	public get on100(): $.Channel<{}> | null {
		return this._fields.on100
	}

	public set on100(value: $.Channel<{}> | null) {
		this._fields.on100 = value
	}

	public get respHeaderRecv(): $.Channel<{}> | null {
		return this._fields.respHeaderRecv
	}

	public set respHeaderRecv(value: $.Channel<{}> | null) {
		this._fields.respHeaderRecv = value
	}

	public get res(): http.Response | $.VarRef<http.Response> | null {
		return this._fields.res
	}

	public set res(value: http.Response | $.VarRef<http.Response> | null) {
		this._fields.res = value
	}

	public get flow(): __goscript_flow.outflow {
		return this._fields.flow
	}

	public set flow(value: __goscript_flow.outflow) {
		this._fields.flow = value
	}

	public get inflow(): __goscript_flow.inflow {
		return this._fields.inflow
	}

	public set inflow(value: __goscript_flow.inflow) {
		this._fields.inflow = value
	}

	public get bytesRemain(): bigint {
		return this._fields.bytesRemain
	}

	public set bytesRemain(value: bigint) {
		this._fields.bytesRemain = value
	}

	public get readErr(): $.GoError {
		return this._fields.readErr
	}

	public set readErr(value: $.GoError) {
		this._fields.readErr = value
	}

	public get reqBody(): io.ReadCloser | null {
		return this._fields.reqBody
	}

	public set reqBody(value: io.ReadCloser | null) {
		this._fields.reqBody = value
	}

	public get reqBodyContentLength(): bigint {
		return this._fields.reqBodyContentLength
	}

	public set reqBodyContentLength(value: bigint) {
		this._fields.reqBodyContentLength = value
	}

	public get reqBodyClosed(): $.Channel<{}> | null {
		return this._fields.reqBodyClosed
	}

	public set reqBodyClosed(value: $.Channel<{}> | null) {
		this._fields.reqBodyClosed = value
	}

	// owned by writeRequest:
	public get sentEndStream(): boolean {
		return this._fields.sentEndStream
	}

	public set sentEndStream(value: boolean) {
		this._fields.sentEndStream = value
	}

	public get sentHeaders(): boolean {
		return this._fields.sentHeaders
	}

	public set sentHeaders(value: boolean) {
		this._fields.sentHeaders = value
	}

	// owned by clientConnReadLoop:
	public get firstByte(): boolean {
		return this._fields.firstByte
	}

	public set firstByte(value: boolean) {
		this._fields.firstByte = value
	}

	public get pastHeaders(): boolean {
		return this._fields.pastHeaders
	}

	public set pastHeaders(value: boolean) {
		this._fields.pastHeaders = value
	}

	public get pastTrailers(): boolean {
		return this._fields.pastTrailers
	}

	public set pastTrailers(value: boolean) {
		this._fields.pastTrailers = value
	}

	public get num1xx(): number {
		return this._fields.num1xx
	}

	public set num1xx(value: number) {
		this._fields.num1xx = value
	}

	public get readClosed(): boolean {
		return this._fields.readClosed
	}

	public set readClosed(value: boolean) {
		this._fields.readClosed = value
	}

	public get readAborted(): boolean {
		return this._fields.readAborted
	}

	public set readAborted(value: boolean) {
		this._fields.readAborted = value
	}

	public get trailer(): http.Header {
		return this._fields.trailer
	}

	public set trailer(value: http.Header) {
		this._fields.trailer = value
	}

	public get resTrailer(): $.VarRef<http.Header> | null {
		return this._fields.resTrailer
	}

	public set resTrailer(value: $.VarRef<http.Header> | null) {
		this._fields.resTrailer = value
	}

	public _fields: {
		cc: ClientConn | $.VarRef<ClientConn> | null
		ctx: context.Context | null
		reqCancel: $.Channel<{}> | null
		trace: httptrace.ClientTrace | $.VarRef<httptrace.ClientTrace> | null
		ID: number
		bufPipe: __goscript_pipe.pipe
		requestedGzip: boolean
		isHead: boolean
		abortOnce: sync.Once
		abort: $.Channel<{}> | null
		abortErr: $.GoError
		peerClosed: $.Channel<{}> | null
		donec: $.Channel<{}> | null
		on100: $.Channel<{}> | null
		respHeaderRecv: $.Channel<{}> | null
		res: http.Response | $.VarRef<http.Response> | null
		flow: __goscript_flow.outflow
		inflow: __goscript_flow.inflow
		bytesRemain: bigint
		readErr: $.GoError
		reqBody: io.ReadCloser | null
		reqBodyContentLength: bigint
		reqBodyClosed: $.Channel<{}> | null
		sentEndStream: boolean
		sentHeaders: boolean
		firstByte: boolean
		pastHeaders: boolean
		pastTrailers: boolean
		num1xx: number
		readClosed: boolean
		readAborted: boolean
		trailer: http.Header
		resTrailer: $.VarRef<http.Header> | null
	}

	constructor(init?: Partial<{cc?: ClientConn | $.VarRef<ClientConn> | null, ctx?: context.Context | null, reqCancel?: $.Channel<{}> | null, trace?: httptrace.ClientTrace | $.VarRef<httptrace.ClientTrace> | null, ID?: number, bufPipe?: __goscript_pipe.pipe, requestedGzip?: boolean, isHead?: boolean, abortOnce?: sync.Once, abort?: $.Channel<{}> | null, abortErr?: $.GoError, peerClosed?: $.Channel<{}> | null, donec?: $.Channel<{}> | null, on100?: $.Channel<{}> | null, respHeaderRecv?: $.Channel<{}> | null, res?: http.Response | $.VarRef<http.Response> | null, flow?: __goscript_flow.outflow, inflow?: __goscript_flow.inflow, bytesRemain?: bigint, readErr?: $.GoError, reqBody?: io.ReadCloser | null, reqBodyContentLength?: bigint, reqBodyClosed?: $.Channel<{}> | null, sentEndStream?: boolean, sentHeaders?: boolean, firstByte?: boolean, pastHeaders?: boolean, pastTrailers?: boolean, num1xx?: number, readClosed?: boolean, readAborted?: boolean, trailer?: http.Header, resTrailer?: $.VarRef<http.Header> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			cc: init?.cc ?? (null! as ClientConn | $.VarRef<ClientConn> | null),
			ctx: init?.ctx ?? (null! as context.Context | null),
			reqCancel: init?.reqCancel ?? (null! as $.Channel<{}> | null),
			trace: init?.trace ?? (null! as httptrace.ClientTrace | $.VarRef<httptrace.ClientTrace> | null),
			ID: init?.ID ?? (0 as number),
			bufPipe: init?.bufPipe ? init.bufPipe.clone() : new __goscript_pipe.pipe(undefined, true),
			requestedGzip: init?.requestedGzip ?? (false as boolean),
			isHead: init?.isHead ?? (false as boolean),
			abortOnce: init?.abortOnce ? $.markAsStructValue($.cloneStructValue(init.abortOnce)) : $.markAsStructValue(new sync.Once()),
			abort: init?.abort ?? (null! as $.Channel<{}> | null),
			abortErr: init?.abortErr ?? (null! as $.GoError),
			peerClosed: init?.peerClosed ?? (null! as $.Channel<{}> | null),
			donec: init?.donec ?? (null! as $.Channel<{}> | null),
			on100: init?.on100 ?? (null! as $.Channel<{}> | null),
			respHeaderRecv: init?.respHeaderRecv ?? (null! as $.Channel<{}> | null),
			res: init?.res ?? (null! as http.Response | $.VarRef<http.Response> | null),
			flow: init?.flow ? init.flow.clone() : new __goscript_flow.outflow(undefined, true),
			inflow: init?.inflow ? init.inflow.clone() : new __goscript_flow.inflow(undefined, true),
			bytesRemain: init?.bytesRemain ?? (0n as bigint),
			readErr: init?.readErr ?? (null! as $.GoError),
			reqBody: init?.reqBody ?? (null! as io.ReadCloser | null),
			reqBodyContentLength: init?.reqBodyContentLength ?? (0n as bigint),
			reqBodyClosed: init?.reqBodyClosed ?? (null! as $.Channel<{}> | null),
			sentEndStream: init?.sentEndStream ?? (false as boolean),
			sentHeaders: init?.sentHeaders ?? (false as boolean),
			firstByte: init?.firstByte ?? (false as boolean),
			pastHeaders: init?.pastHeaders ?? (false as boolean),
			pastTrailers: init?.pastTrailers ?? (false as boolean),
			num1xx: init?.num1xx ?? (0 as number),
			readClosed: init?.readClosed ?? (false as boolean),
			readAborted: init?.readAborted ?? (false as boolean),
			trailer: init?.trailer ?? (null! as http.Header),
			resTrailer: init?.resTrailer ?? (null! as $.VarRef<http.Header> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): clientStream {
		return new clientStream(this, true)
	}

	public __goscriptAssign(source: clientStream): void {
		const target = this._fields
		const values = source._fields
		target.cc = values.cc
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.reqCancel = values.reqCancel
		target.trace = values.trace
		target.ID = values.ID
		$.assignStruct(target.bufPipe, values.bufPipe)
		target.requestedGzip = values.requestedGzip
		target.isHead = values.isHead
		$.assignStruct(target.abortOnce, values.abortOnce)
		target.abort = values.abort
		target.abortErr = $.assignFieldValue(target.abortErr, values.abortErr, "error")
		target.peerClosed = values.peerClosed
		target.donec = values.donec
		target.on100 = values.on100
		target.respHeaderRecv = values.respHeaderRecv
		target.res = values.res
		$.assignStruct(target.flow, values.flow)
		$.assignStruct(target.inflow, values.inflow)
		target.bytesRemain = values.bytesRemain
		target.readErr = $.assignFieldValue(target.readErr, values.readErr, "error")
		target.reqBody = $.assignFieldValue(target.reqBody, values.reqBody, "io.ReadCloser")
		target.reqBodyContentLength = values.reqBodyContentLength
		target.reqBodyClosed = values.reqBodyClosed
		target.sentEndStream = values.sentEndStream
		target.sentHeaders = values.sentHeaders
		target.firstByte = values.firstByte
		target.pastHeaders = values.pastHeaders
		target.pastTrailers = values.pastTrailers
		target.num1xx = values.num1xx
		target.readClosed = values.readClosed
		target.readAborted = values.readAborted
		target.trailer = values.trailer
		target.resTrailer = values.resTrailer
	}

	public async abortRequestBodyWrite(): globalThis.Promise<void> {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		using __defer = new $.DisposableStack()
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		let cc: ClientConn | $.VarRef<ClientConn> | null = (cs$ as clientStream).cc
		let cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.Lock()
		const __goscriptDeferCallee15 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee15() })
		if (((cs$ as clientStream).reqBody != null) && ((cs$ as clientStream).reqBodyClosed == null)) {
			await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).closeReqBodyLocked() : clientStream.prototype.closeReqBodyLocked.call(cs))
			sync.Cond.prototype.Broadcast.call($.pointerValue<sync.Cond>((cc$ as ClientConn).cond))
		}
	}

	public async abortStream(err: $.GoError): globalThis.Promise<void> {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		using __defer = new $.DisposableStack()
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		await $.pointerValue<ClientConn>((cs$ as clientStream).cc).mu.Lock()
		const __goscriptDeferCallee16 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<ClientConn>((cs$ as clientStream).cc).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee16() })
		await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).abortStreamLocked(err) : clientStream.prototype.abortStreamLocked.call(cs, err))
	}

	public async abortStreamLocked(err: $.GoError): globalThis.Promise<void> {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		await (cs$ as clientStream).abortOnce.Do($.functionValue((): void => {
			;(cs$ as clientStream).abortErr = err
			void (cs$ as clientStream).abort!.close()
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		if ((cs$ as clientStream).reqBody != null) {
			await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).closeReqBodyLocked() : clientStream.prototype.closeReqBodyLocked.call(cs))
		}
		// TODO(dneil): Clean up tests where cs.cc.cond is nil.
		if ($.pointerValue<ClientConn>((cs$ as clientStream).cc).cond != null) {
			// Wake up writeRequestBody if it is waiting on flow control.
			sync.Cond.prototype.Broadcast.call($.pointerValue<sync.Cond>($.pointerValue<ClientConn>((cs$ as clientStream).cc).cond))
		}
	}

	public async awaitFlowControl(maxBytes: number): globalThis.Promise<[number, $.GoError]> {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		let taken: number = 0
		let err: $.GoError = null! as $.GoError
		using __defer = new $.DisposableStack()
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		let cc: ClientConn | $.VarRef<ClientConn> | null = (cs$ as clientStream).cc
		let cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		let ctx = (cs$ as clientStream).ctx
		await (cc$ as ClientConn).mu.Lock()
		const __goscriptDeferCallee17 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee17() })
		while (true) {
			if ((cc$ as ClientConn).closed) {
				const __goscriptReturn12: [number, $.GoError] = [0, errClientConnClosed]
				taken = __goscriptReturn12[0]
				err = __goscriptReturn12[1]
				__defer.dispose()
				return [taken, err]
			}
			if ((cs$ as clientStream).reqBodyClosed != null) {
				const __goscriptReturn13: [number, $.GoError] = [0, errStopReqBodyWrite]
				taken = __goscriptReturn13[0]
				err = __goscriptReturn13[1]
				__defer.dispose()
				return [taken, err]
			}
			const [__goscriptSelect7HasReturn, __goscriptSelect7Value] = await $.selectStatement<any, [number, $.GoError]>([
				{
					id: 0,
					isSend: false,
					channel: (cs$ as clientStream).abort,
					onSelected: async (__goscriptSelect7Result) => {
						const __goscriptReturn14: [number, $.GoError] = [0, (cs$ as clientStream).abortErr]
						taken = __goscriptReturn14[0]
						err = __goscriptReturn14[1]
						__defer.dispose()
						return [taken, err]
					}
				},
				{
					id: 1,
					isSend: false,
					channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
					onSelected: async (__goscriptSelect7Result) => {
						const __goscriptReturn15: [number, $.GoError] = [0, (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]
						taken = __goscriptReturn15[0]
						err = __goscriptReturn15[1]
						__defer.dispose()
						return [taken, err]
					}
				},
				{
					id: 2,
					isSend: false,
					channel: (cs$ as clientStream).reqCancel,
					onSelected: async (__goscriptSelect7Result) => {
						const __goscriptReturn16: [number, $.GoError] = [0, errRequestCanceled]
						taken = __goscriptReturn16[0]
						err = __goscriptReturn16[1]
						__defer.dispose()
						return [taken, err]
					}
				},
				{
					id: -1,
					isSend: false,
					channel: null,
				}
			], true)
			if (__goscriptSelect7HasReturn) {
				return __goscriptSelect7Value
			}
			{
				let a = (cs$ as clientStream).flow.available()
				if (a > 0) {
					let take = a
					if ($.int(take) > maxBytes) {

						take = $.int(maxBytes, 32)
					}
					if (take > $.int((cc$ as ClientConn).maxFrameSize, 32)) {
						take = $.int((cc$ as ClientConn).maxFrameSize, 32)
					}
					void (cs$ as clientStream).flow.take(take)
					const __goscriptReturn17: [number, $.GoError] = [take, null]
					taken = __goscriptReturn17[0]
					err = __goscriptReturn17[1]
					__defer.dispose()
					return [taken, err]
				}
			}
			await sync.Cond.prototype.Wait.call($.pointerValue<sync.Cond>((cc$ as ClientConn).cond))
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async cleanupWriteRequest(err: $.GoError): globalThis.Promise<void> {
		let cs: clientStream | $.VarRef<clientStream> | null = this;
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		let cc: ClientConn | $.VarRef<ClientConn> | null = (cs$ as clientStream).cc
		let cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)

		if ((cs$ as clientStream).ID == 0) {
			// We were canceled before creating the stream, so return our reservation.
			await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).decrStreamReservations() : ClientConn.prototype.decrStreamReservations.call(cc))
		}

		// TODO: write h12Compare test showing whether
		// Request.Body is closed by the Transport,
		// and in multiple cases: server replies <=299 and >299
		// while still writing request body
		await (cc$ as ClientConn).mu.Lock()
		let mustCloseBody = false
		if (((cs$ as clientStream).reqBody != null) && ((cs$ as clientStream).reqBodyClosed == null)) {
			mustCloseBody = true;
			;(cs$ as clientStream).reqBodyClosed = $.makeChannel<{}>(0, {}, "both")
		}
		let bodyClosed: $.Channel<{}> | null = (cs$ as clientStream).reqBodyClosed
		void (cc$ as ClientConn).mu.Unlock()
		if (mustCloseBody) {
			await $.pointerValue<Exclude<io.ReadCloser, null>>((cs$ as clientStream).reqBody).Close()
			bodyClosed!.close()
		}
		if (bodyClosed != null) {
			await $.chanRecv(bodyClosed)
		}

		if ((err != null) && (cs$ as clientStream).sentEndStream) {
			// If the connection is closed immediately after the response is read,
			// we may be aborted before finishing up here. If the stream was closed
			// cleanly on both sides, there is no error.
			const [__goscriptSelect8HasReturn, __goscriptSelect8Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: (cs$ as clientStream).peerClosed,
					onSelected: async (__goscriptSelect8Result) => {
						err = null
					}
				},
				{
					id: -1,
					isSend: false,
					channel: null,
				}
			], true)
			if (__goscriptSelect8HasReturn) {
				return __goscriptSelect8Value
			}
		}
		if (err != null) {
			await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).abortStream(err) : clientStream.prototype.abortStream.call(cs, err))
			if ((cs$ as clientStream).sentHeaders) {
				{
					let [se, ok] = $.typeAssertTuple<__goscript_errors.StreamError>(err, "http2.StreamError")
					if (ok) {
						if (!$.comparableEqual(se.Cause, __goscript_errors.errFromPeer)) {
							await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).writeStreamReset((cs$ as clientStream).ID, se.Code, err) : ClientConn.prototype.writeStreamReset.call(cc, (cs$ as clientStream).ID, se.Code, err))
						}
					} else {
						await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).writeStreamReset((cs$ as clientStream).ID, 8, err) : ClientConn.prototype.writeStreamReset.call(cc, (cs$ as clientStream).ID, 8, err))
					}
				}
			}
			await (cs$ as clientStream).bufPipe.CloseWithError(err)
		} else {
			if ((cs$ as clientStream).sentHeaders && !(cs$ as clientStream).sentEndStream) {
				await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).writeStreamReset((cs$ as clientStream).ID, 0, null) : ClientConn.prototype.writeStreamReset.call(cc, (cs$ as clientStream).ID, 0, null))
			}
			await (cs$ as clientStream).bufPipe.CloseWithError(errRequestCanceled)
		}
		if ((cs$ as clientStream).ID != 0) {
			await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).forgetStreamID((cs$ as clientStream).ID) : ClientConn.prototype.forgetStreamID.call(cc, (cs$ as clientStream).ID))
		}

		await (cc$ as ClientConn).wmu.Lock()
		let werr = (cc$ as ClientConn).werr
		void (cc$ as ClientConn).wmu.Unlock()
		if (werr != null) {
			await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).Close() : ClientConn.prototype.Close.call(cc))
		}

		void (cs$ as clientStream).donec!.close()
	}

	public async closeReqBodyLocked(): globalThis.Promise<void> {
		let cs: clientStream | $.VarRef<clientStream> | null = this;
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		if ((cs$ as clientStream).reqBodyClosed != null) {
			return
		}
		;(cs$ as clientStream).reqBodyClosed = $.makeChannel<{}>(0, {}, "both")
		let reqBodyClosed: $.Channel<{}> | null = (cs$ as clientStream).reqBodyClosed
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			await Transport.prototype.markNewGoroutine.call($.pointerValue<ClientConn>((cs$ as clientStream).cc).t)
			await $.pointerValue<Exclude<io.ReadCloser, null>>((cs$ as clientStream).reqBody).Close()
			reqBodyClosed!.close()
		})() })
	}

	public copyTrailers(): void {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		for (let [k, vv] of (cs$ as clientStream).trailer?.entries() ?? []) {
			let t: $.VarRef<http.Header> | null = (cs$ as clientStream).resTrailer
			if ($.pointerValue<http.Header>(t) == null) {
				t!.value = $.makeMap<string, $.Slice<string>>()
			}
			$.mapSet(($.pointerValue<http.Header>(t)), k, vv)
		}
	}

	public async doRequest(req: http.Request | $.VarRef<http.Request> | null, streamf: ((_p0: clientStream | $.VarRef<clientStream> | null) => void) | null): globalThis.Promise<void> {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		await Transport.prototype.markNewGoroutine.call($.pointerValue<ClientConn>($.pointerValue<clientStream>(cs).cc).t)
		let err = await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).writeRequest(req, streamf) : clientStream.prototype.writeRequest.call(cs, req, streamf))
		await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).cleanupWriteRequest(err) : clientStream.prototype.cleanupWriteRequest.call(cs, err))
	}

	public async encodeAndWriteHeaders(req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<$.GoError> {
		let cs: clientStream | $.VarRef<clientStream> | null = this;
		using __defer = new $.DisposableStack()
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		let cc: ClientConn | $.VarRef<ClientConn> | null = (cs$ as clientStream).cc
		let cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		let ctx = (cs$ as clientStream).ctx

		await (cc$ as ClientConn).wmu.Lock()
		const __goscriptDeferCallee18 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).wmu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee18() })

		// If the request was canceled while waiting for cc.mu, just quit.
		const [__goscriptSelect9HasReturn, __goscriptSelect9Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: false,
				channel: (cs$ as clientStream).abort,
				onSelected: async (__goscriptSelect9Result) => {
					return (cs$ as clientStream).abortErr
				}
			},
			{
				id: 1,
				isSend: false,
				channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect9Result) => {
					return (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			},
			{
				id: 2,
				isSend: false,
				channel: (cs$ as clientStream).reqCancel,
				onSelected: async (__goscriptSelect9Result) => {
					return errRequestCanceled
				}
			},
			{
				id: -1,
				isSend: false,
				channel: null,
			}
		], true)
		if (__goscriptSelect9HasReturn) {
			return __goscriptSelect9Value
		}

		// Encode headers.
		//
		// we send: HEADERS{1}, CONTINUATION{0,} + DATA{0,} (DATA is
		// sent by writeRequestBody below, along with any Trailers,
		// again in form HEADERS{1}, CONTINUATION{0,})
		let [trailers, err] = await commaSeparatedTrailers(req)
		if (err != null) {
			return err
		}
		let hasTrailers = !$.stringEqual(trailers, "")
		let contentLen = actualContentLength(req)
		let hasBody = contentLen != 0n
		let __goscriptTuple8: any = await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).encodeHeaders(req, (cs$ as clientStream).requestedGzip, trailers, contentLen) : ClientConn.prototype.encodeHeaders.call(cc, req, (cs$ as clientStream).requestedGzip, trailers, contentLen))
		let hdrs: $.Slice<number> = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return err
		}

		// Write the request.
		let endStream = !hasBody && !hasTrailers;
		;(cs$ as clientStream).sentHeaders = true
		err = await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).writeHeaders((cs$ as clientStream).ID, endStream, $.int((cc$ as ClientConn).maxFrameSize), hdrs) : ClientConn.prototype.writeHeaders.call(cc, (cs$ as clientStream).ID, endStream, $.int((cc$ as ClientConn).maxFrameSize), hdrs))
		await traceWroteHeaders((cs$ as clientStream).trace)
		return err
	}

	public frameScratchBufferLen(maxFrameSize: number): number {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		const max: number = 524288
		let n = $.int64(maxFrameSize)
		if (n > 524288n) {
			n = 524288n
		}
		{
			let cl = $.pointerValue<clientStream>(cs).reqBodyContentLength
			if ((cl != -1n) && (($.int64Add(cl, 1n)) < n)) {
				// Add an extra byte past the declared content-length to
				// give the caller's Request.Body io.Reader a chance to
				// give us more bytes than they declared, so we can catch it
				// early.
				n = $.int64Add(cl, 1n)
			}
		}
		if (n < 1n) {
			return 1
		}
		return $.int(n)
	}

	public get1xxTraceFunc(): ((_p0: number, _p1: textproto.MIMEHeader) => $.GoError | globalThis.Promise<$.GoError>) | null {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		{
			let fn: ((_p0: number, _p1: textproto.MIMEHeader) => $.GoError | globalThis.Promise<$.GoError>) | null = got1xxFuncForTests
			if (fn != null) {
				return fn
			}
		}
		return traceGot1xxResponseFunc($.pointerValue<clientStream>(cs).trace)
	}

	public async writeRequest(req: http.Request | $.VarRef<http.Request> | null, streamf: ((_p0: clientStream | $.VarRef<clientStream> | null) => void) | null): globalThis.Promise<$.GoError> {
		let cs: clientStream | $.VarRef<clientStream> | null = this;
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		let cc: ClientConn | $.VarRef<ClientConn> | null = (cs$ as clientStream).cc
		let cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		let ctx = (cs$ as clientStream).ctx

		{
			let __goscriptShadow2 = await checkConnHeaders(req)
			if (__goscriptShadow2 != null) {
				return __goscriptShadow2
			}
		}

		// Acquire the new-request lock by writing to reqHeaderMu.
		// This lock guards the critical section covering allocating a new stream ID
		// (requires mu) and creating the stream (requires wmu).
		if ((cc$ as ClientConn).reqHeaderMu == null) {
			$.panic("RoundTrip on uninitialized ClientConn")
		}
		const [__goscriptSelect10HasReturn, __goscriptSelect10Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: true,
				channel: (cc$ as ClientConn).reqHeaderMu,
				value: {},
			},
			{
				id: 1,
				isSend: false,
				channel: (cs$ as clientStream).reqCancel,
				onSelected: async (__goscriptSelect10Result) => {
					return errRequestCanceled
				}
			},
			{
				id: 2,
				isSend: false,
				channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect10Result) => {
					return (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err()
				}
			}
		], false)
		if (__goscriptSelect10HasReturn) {
			return __goscriptSelect10Value
		}

		await (cc$ as ClientConn).mu.Lock()
		if ((cc$ as ClientConn).idleTimer != null) {
			void (__goscriptAwait = $.pointerValue<__goscript_timer.timer>((cc$ as ClientConn).idleTimer).Stop(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		void (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).decrStreamReservationsLocked() : ClientConn.prototype.decrStreamReservationsLocked.call(cc))
		{
			let __goscriptShadow3 = await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).awaitOpenSlotForStreamLocked(cs) : ClientConn.prototype.awaitOpenSlotForStreamLocked.call(cc, cs))
			if (__goscriptShadow3 != null) {
				void (cc$ as ClientConn).mu.Unlock()
				await $.chanRecv((cc$ as ClientConn).reqHeaderMu)
				return __goscriptShadow3
			}
		}
		void (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).addStreamLocked(cs) : ClientConn.prototype.addStreamLocked.call(cc, cs))
		if (isConnectionCloseRequest(req)) {
			;(cc$ as ClientConn).doNotReuse = true
		}
		void (cc$ as ClientConn).mu.Unlock()

		if (streamf != null) {
			void (__goscriptAwait = streamf!(cs), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		let continueTimeout = Transport.prototype.expectContinueTimeout.call((cc$ as ClientConn).t)
		if (continueTimeout != 0n) {
			if (!httpguts.HeaderValuesContainsToken($.mapGet<string, $.Slice<string>, $.Slice<string>>($.pointerValue<http.Request>(req).Header, "Expect", null)[0], "100-continue")) {
				continueTimeout = 0n
			} else {
				;(cs$ as clientStream).on100 = $.makeChannel<{}>(1, {}, "both")
			}
		}

		// Past this point (where we send request headers), it is possible for
		// RoundTrip to return successfully. Since the RoundTrip contract permits
		// the caller to "mutate or reuse" the Request after closing the Response's Body,
		// we must take care when referencing the Request from here on.
		err = await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).encodeAndWriteHeaders(req) : clientStream.prototype.encodeAndWriteHeaders.call(cs, req))
		await $.chanRecv((cc$ as ClientConn).reqHeaderMu)
		if (err != null) {
			return err
		}

		let hasBody = (cs$ as clientStream).reqBodyContentLength != 0n
		if (!hasBody) {
			;(cs$ as clientStream).sentEndStream = true
		} else {
			if (continueTimeout != 0n) {
				await traceWait100Continue((cs$ as clientStream).trace)
				let __goscriptShadow4: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer(continueTimeout)
				const [__goscriptSelect11HasReturn, __goscriptSelect11Value] = await $.selectStatement<any, $.GoError>([
					{
						id: 0,
						isSend: false,
						channel: $.pointerValue<time.Timer>(__goscriptShadow4).C,
						onSelected: async (__goscriptSelect11Result) => {
							err = null
						}
					},
					{
						id: 1,
						isSend: false,
						channel: (cs$ as clientStream).on100,
						onSelected: async (__goscriptSelect11Result) => {
							err = null
						}
					},
					{
						id: 2,
						isSend: false,
						channel: (cs$ as clientStream).abort,
						onSelected: async (__goscriptSelect11Result) => {
							err = (cs$ as clientStream).abortErr
						}
					},
					{
						id: 3,
						isSend: false,
						channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
						onSelected: async (__goscriptSelect11Result) => {
							err = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
					},
					{
						id: 4,
						isSend: false,
						channel: (cs$ as clientStream).reqCancel,
						onSelected: async (__goscriptSelect11Result) => {
							err = errRequestCanceled
						}
					}
				], false)
				if (__goscriptSelect11HasReturn) {
					return __goscriptSelect11Value
				}
				time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(__goscriptShadow4))
				if (err != null) {
					await traceWroteRequest((cs$ as clientStream).trace, err)
					return err
				}
			}

			{
				err = await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).writeRequestBody(req) : clientStream.prototype.writeRequestBody.call(cs, req))
				if (err != null) {
					if (!$.comparableEqual(err, errStopReqBodyWrite)) {
						await traceWroteRequest((cs$ as clientStream).trace, err)
						return err
					}
				} else {
					;(cs$ as clientStream).sentEndStream = true
				}
			}
		}

		await traceWroteRequest((cs$ as clientStream).trace, err)

		let respHeaderTimer: $.Channel<time.Time> | null = null! as $.Channel<time.Time> | null
		let respHeaderRecv: $.Channel<{}> | null = null! as $.Channel<{}> | null
		{
			let d = (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).responseHeaderTimeout() : ClientConn.prototype.responseHeaderTimeout.call(cc))
			if (d != 0n) {
				let __goscriptShadow5 = await Transport.prototype.newTimer.call((cc$ as ClientConn).t, d)
				const __goscriptDeferCallee19 = $.functionValue(((__receiver) => () => __receiver.Stop())((__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as __goscript_timer.timer) : $.pointerValue<__goscript_timer.timer>(__goscriptShadow5))), ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
				__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee19(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
				respHeaderTimer = ((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as __goscript_timer.timer) : $.pointerValue<__goscript_timer.timer>(__goscriptShadow5)).C(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<time.Time> | null)
				respHeaderRecv = (cs$ as clientStream).respHeaderRecv
			}
		}
		// Wait until the peer half-closes its end of the stream,
		// or until the request is aborted (via context, error, or otherwise),
		// whichever comes first.
		while (true) {
			const [__goscriptSelect12HasReturn, __goscriptSelect12Value] = await $.selectStatement<any, $.GoError>([
				{
					id: 0,
					isSend: false,
					channel: (cs$ as clientStream).peerClosed,
					onSelected: async (__goscriptSelect12Result) => {
						const __goscriptReturn18: $.GoError = null
						err = __goscriptReturn18
						await __defer.dispose()
						return err
					}
				},
				{
					id: 1,
					isSend: false,
					channel: respHeaderTimer,
					onSelected: async (__goscriptSelect12Result) => {
						const __goscriptReturn19: $.GoError = __goscript_http2.errTimeout
						err = __goscriptReturn19
						await __defer.dispose()
						return err
					}
				},
				{
					id: 2,
					isSend: false,
					channel: respHeaderRecv,
					onSelected: async (__goscriptSelect12Result) => {
						respHeaderRecv = null
						respHeaderTimer = null
					}
				},
				{
					id: 3,
					isSend: false,
					channel: (cs$ as clientStream).abort,
					onSelected: async (__goscriptSelect12Result) => {
						const __goscriptReturn20: $.GoError = (cs$ as clientStream).abortErr
						err = __goscriptReturn20
						await __defer.dispose()
						return err
					}
				},
				{
					id: 4,
					isSend: false,
					channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
					onSelected: async (__goscriptSelect12Result) => {
						const __goscriptReturn21: $.GoError = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						err = __goscriptReturn21
						await __defer.dispose()
						return err
					}
				},
				{
					id: 5,
					isSend: false,
					channel: (cs$ as clientStream).reqCancel,
					onSelected: async (__goscriptSelect12Result) => {
						const __goscriptReturn22: $.GoError = errRequestCanceled
						err = __goscriptReturn22
						await __defer.dispose()
						return err
					}
				}
			], false)
			if (__goscriptSelect12HasReturn) {
				return __goscriptSelect12Value
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async writeRequestBody(req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<$.GoError> {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		let err: $.GoError = null! as $.GoError
		using __defer = new $.DisposableStack()
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		const req$: http.Request = req == null ? $.pointerTarget<http.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<http.Request>(req)
		let cc: ClientConn | $.VarRef<ClientConn> | null = (cs$ as clientStream).cc
		let cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		let body = (cs$ as clientStream).reqBody
		let sentEnd = false

		let hasTrailers = (req$ as http.Request).Trailer != null
		let remainLen = (cs$ as clientStream).reqBodyContentLength
		let hasContentLen = remainLen != -1n

		await (cc$ as ClientConn).mu.Lock()
		let maxFrameSize = $.int((cc$ as ClientConn).maxFrameSize)
		void (cc$ as ClientConn).mu.Unlock()

		// Scratch buffer for reading into & writing from.
		let scratchLen = (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).frameScratchBufferLen(maxFrameSize) : clientStream.prototype.frameScratchBufferLen.call(cs, maxFrameSize))
		let buf: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
		let index = bufPoolIndex(scratchLen)
		{
			let [bp, ok] = $.typeAssertTuple<$.VarRef<$.Slice<number>> | null>(await $.arrayIndex(bufPools, index).Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
			if (ok && ($.sliceLen($.pointerValue<$.Slice<number>>(bp)) >= scratchLen)) {
				const __goscriptDeferCallee20 = $.functionValue(((__receiver) => (x: any) => __receiver.Put(x))($.arrayIndex(bufPools, index)), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), "sync.(*Pool).Put-fm")
				const __goscriptDeferArg2 = $.interfaceValue(bp, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
				__defer.defer(() => { __goscriptDeferCallee20(__goscriptDeferArg2) })
				buf.value = $.pointerValue<$.Slice<number>>(bp)
			} else {
				buf.value = $.makeSlice<number>(scratchLen, undefined, "byte")
				const __goscriptDeferCallee21 = $.functionValue(((__receiver) => (x: any) => __receiver.Put(x))($.arrayIndex(bufPools, index)), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), "sync.(*Pool).Put-fm")
				const __goscriptDeferArg3 = $.interfaceValue(buf, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
				__defer.defer(() => { __goscriptDeferCallee21(__goscriptDeferArg3) })
			}
		}

		let sawEOF: boolean = false
		while (!sawEOF) {
			let [n, __goscriptShadow6] = await (body !== null && (body as any).__isVarRef !== true && (body as any).__goValue === undefined ? (body as Exclude<io.ReadCloser, null>) : $.pointerValue<Exclude<io.ReadCloser, null>>(body)).Read(buf.value)
			if (hasContentLen) {
				remainLen = $.int64Sub(remainLen, $.int64(n))
				if ((remainLen == 0n) && (__goscriptShadow6 == null)) {
					// The request body's Content-Length was predeclared and
					// we just finished reading it all, but the underlying io.Reader
					// returned the final chunk with a nil error (which is one of
					// the two valid things a Reader can do at EOF). Because we'd prefer
					// to send the END_STREAM bit early, double-check that we're actually
					// at EOF. Subsequent reads should return (0, EOF) at this point.
					// If either value is different, we return an error in one of two ways below.
					let scratch: Uint8Array = $.arrayValue(new Uint8Array(1))
					let n1: number = 0
					let __goscriptTuple9: any = await (body !== null && (body as any).__isVarRef !== true && (body as any).__goValue === undefined ? (body as Exclude<io.ReadCloser, null>) : $.pointerValue<Exclude<io.ReadCloser, null>>(body)).Read($.goSlice(scratch, undefined, undefined))
					n1 = __goscriptTuple9[0]
					__goscriptShadow6 = __goscriptTuple9[1]
					remainLen = $.int64Sub(remainLen, $.int64(n1))
				}
				if (remainLen < 0n) {
					__goscriptShadow6 = errReqBodyTooLong
					const __goscriptReturn23: $.GoError = __goscriptShadow6
					err = __goscriptReturn23
					__defer.dispose()
					return err
				}
			}
			if (__goscriptShadow6 != null) {
				await (cc$ as ClientConn).mu.Lock()
				let bodyClosed = (cs$ as clientStream).reqBodyClosed != null
				void (cc$ as ClientConn).mu.Unlock()
				switch ((true as boolean)) {
					case bodyClosed:
					{
						const __goscriptReturn24: $.GoError = errStopReqBodyWrite
						err = __goscriptReturn24
						__defer.dispose()
						return err
						break
					}
					case $.comparableEqual(__goscriptShadow6, io.EOF):
					{
						sawEOF = true
						__goscriptShadow6 = null
						break
					}
					default:
					{
						const __goscriptReturn25: $.GoError = __goscriptShadow6
						err = __goscriptReturn25
						__defer.dispose()
						return err
						break
					}
				}
			}

			let remain: $.Slice<number> = $.goSlice(buf.value, undefined, n)
			while (($.sliceLen(remain) > 0) && (__goscriptShadow6 == null)) {
				let allowed: number = 0
				let __goscriptTuple10: any = await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).awaitFlowControl($.sliceLen(remain)) : clientStream.prototype.awaitFlowControl.call(cs, $.sliceLen(remain)))
				allowed = __goscriptTuple10[0]
				__goscriptShadow6 = __goscriptTuple10[1]
				if (__goscriptShadow6 != null) {
					const __goscriptReturn26: $.GoError = __goscriptShadow6
					err = __goscriptReturn26
					__defer.dispose()
					return err
				}
				await (cc$ as ClientConn).wmu.Lock()
				let data: $.Slice<number> = $.goSlice(remain, undefined, allowed)
				remain = $.goSlice(remain, allowed, undefined)
				sentEnd = (sawEOF && ($.sliceLen(remain) == 0)) && !hasTrailers
				__goscriptShadow6 = await __goscript_frame.Framer.prototype.WriteData.call((cc$ as ClientConn).fr, (cs$ as clientStream).ID, sentEnd, data)
				if (__goscriptShadow6 == null) {
					// TODO(bradfitz): this flush is for latency, not bandwidth.
					// Most requests won't need this. Make this opt-in or
					// opt-out?  Use some heuristic on the body type? Nagel-like
					// timers?  Based on 'n'? Only last chunk of this for loop,
					// unless flow control tokens are low? For now, always.
					// If we change this, see comment below.
					__goscriptShadow6 = await bufio.Writer.prototype.Flush.call((cc$ as ClientConn).bw)
				}
				void (cc$ as ClientConn).wmu.Unlock()
			}
			if (__goscriptShadow6 != null) {
				const __goscriptReturn27: $.GoError = __goscriptShadow6
				err = __goscriptReturn27
				__defer.dispose()
				return err
			}
		}

		if (sentEnd) {
			// Already sent END_STREAM (which implies we have no
			// trailers) and flushed, because currently all
			// WriteData frames above get a flush. So we're done.
			const __goscriptReturn28: $.GoError = null
			err = __goscriptReturn28
			__defer.dispose()
			return err
		}

		// Since the RoundTrip contract permits the caller to "mutate or reuse"
		// a request after the Response's Body is closed, verify that this hasn't
		// happened before accessing the trailers.
		await (cc$ as ClientConn).mu.Lock()
		let trailer: http.Header = (req$ as http.Request).Trailer
		err = (cs$ as clientStream).abortErr
		void (cc$ as ClientConn).mu.Unlock()
		if (err != null) {
			const __goscriptReturn29: $.GoError = err
			err = __goscriptReturn29
			__defer.dispose()
			return err
		}

		await (cc$ as ClientConn).wmu.Lock()
		const __goscriptDeferCallee22 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).wmu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee22() })
		let trls: $.Slice<number> = null! as $.Slice<number>
		if ($.len(trailer) > 0) {
			let __goscriptTuple11: any = await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).encodeTrailers(trailer) : ClientConn.prototype.encodeTrailers.call(cc, trailer))
			trls = __goscriptTuple11[0]
			err = __goscriptTuple11[1]
			if (err != null) {
				const __goscriptReturn30: $.GoError = err
				err = __goscriptReturn30
				__defer.dispose()
				return err
			}
		}

		// Two ways to send END_STREAM: either with trailers, or
		// with an empty DATA frame.
		if ($.sliceLen(trls) > 0) {
			err = await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).writeHeaders((cs$ as clientStream).ID, true, maxFrameSize, trls) : ClientConn.prototype.writeHeaders.call(cc, (cs$ as clientStream).ID, true, maxFrameSize, trls))
		} else {
			err = await __goscript_frame.Framer.prototype.WriteData.call((cc$ as ClientConn).fr, (cs$ as clientStream).ID, true, null)
		}
		{
			let ferr = await bufio.Writer.prototype.Flush.call((cc$ as ClientConn).bw)
			if ((ferr != null) && (err == null)) {
				err = ferr
			}
		}
		const __goscriptReturn31: $.GoError = err
		err = __goscriptReturn31
		__defer.dispose()
		return err
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"http2.clientStream",
		() => new clientStream(),
		() => [$.methodSignature("abortRequestBodyWrite", [], [], true), $.methodSignature("abortStream", [["err", "error"]], [], true), $.methodSignature("abortStreamLocked", [["err", "error"]], [], true), $.methodSignature("awaitFlowControl", [["maxBytes", /* @__PURE__ */ $.basicType("int")]], [["taken", /* @__PURE__ */ $.basicType("int32")], ["err", "error"]], true), $.methodSignature("cleanupWriteRequest", [["err", "error"]], [], true), $.methodSignature("closeReqBodyLocked", [], [], true), $.methodSignature("copyTrailers", [], [], true), $.methodSignature("doRequest", [["req", /* @__PURE__ */ $.pointerType("http.Request")], ["streamf", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http2.clientStream")], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("encodeAndWriteHeaders", [["req", /* @__PURE__ */ $.pointerType("http.Request")]], ["error"], true), $.methodSignature("frameScratchBufferLen", [["maxFrameSize", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("get1xxTraceFunc", [], [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), "textproto.MIMEHeader"], results: ["error"] } as $.FunctionTypeInfo)], true), $.methodSignature("writeRequest", [["req", /* @__PURE__ */ $.pointerType("http.Request")], ["streamf", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http2.clientStream")], results: [] } as $.FunctionTypeInfo)]], [["err", "error"]], true), $.methodSignature("writeRequestBody", [["req", /* @__PURE__ */ $.pointerType("http.Request")]], [["err", "error"]], true)],
		clientStream,
		() => [/* @__PURE__ */ $.structField("cc", /* @__PURE__ */ $.pointerType("http2.ClientConn"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("ctx", "context.Context", [1], 8, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("reqCancel", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive"), [2], 24, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("trace", /* @__PURE__ */ $.pointerType("httptrace.ClientTrace"), [3], 32, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("uint32"), [4], 40, true), /* @__PURE__ */ $.structField("bufPipe", "http2.pipe", [5], 48, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("requestedGzip", /* @__PURE__ */ $.basicType("bool"), [6], 184, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("isHead", /* @__PURE__ */ $.basicType("bool"), [7], 185, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("abortOnce", "sync.Once", [8], 188, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("abort", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [9], 200, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("abortErr", "error", [10], 208, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("peerClosed", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [11], 224, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("donec", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [12], 232, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("on100", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [13], 240, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("respHeaderRecv", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [14], 248, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("res", /* @__PURE__ */ $.pointerType("http.Response"), [15], 256, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("flow", "http2.outflow", [16], 264, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("inflow", "http2.inflow", [17], 280, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("bytesRemain", /* @__PURE__ */ $.basicType("int64"), [18], 288, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("readErr", "error", [19], 296, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("reqBody", "io.ReadCloser", [20], 312, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("reqBodyContentLength", /* @__PURE__ */ $.basicType("int64"), [21], 328, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("reqBodyClosed", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [22], 336, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("sentEndStream", /* @__PURE__ */ $.basicType("bool"), [23], 344, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("sentHeaders", /* @__PURE__ */ $.basicType("bool"), [24], 345, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("firstByte", /* @__PURE__ */ $.basicType("bool"), [25], 346, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("pastHeaders", /* @__PURE__ */ $.basicType("bool"), [26], 347, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("pastTrailers", /* @__PURE__ */ $.basicType("bool"), [27], 348, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("num1xx", /* @__PURE__ */ $.basicType("uint8"), [28], 349, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("readClosed", /* @__PURE__ */ $.basicType("bool"), [29], 350, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("readAborted", /* @__PURE__ */ $.basicType("bool"), [30], 351, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("trailer", "http.Header", [31], 352, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("resTrailer", /* @__PURE__ */ $.pointerType("http.Header"), [32], 360, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class stickyErrWriter {
	public get conn(): net.Conn | null {
		return this._fields.conn
	}

	public set conn(value: net.Conn | null) {
		this._fields.conn = value
	}

	public get timeout(): time.Duration {
		return this._fields.timeout
	}

	public set timeout(value: time.Duration) {
		this._fields.timeout = value
	}

	public get err(): $.VarRef<$.GoError> | null {
		return this._fields.err
	}

	public set err(value: $.VarRef<$.GoError> | null) {
		this._fields.err = value
	}

	public _fields: {
		conn: net.Conn | null
		timeout: time.Duration
		err: $.VarRef<$.GoError> | null
	}

	constructor(init?: Partial<{conn?: net.Conn | null, timeout?: time.Duration, err?: $.VarRef<$.GoError> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			conn: init?.conn ?? (null! as net.Conn | null),
			timeout: init?.timeout ?? (0n as time.Duration),
			err: init?.err ?? (null! as $.VarRef<$.GoError> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): stickyErrWriter {
		return new stickyErrWriter(this, true)
	}

	public __goscriptAssign(source: stickyErrWriter): void {
		const target = this._fields
		const values = source._fields
		target.conn = $.assignFieldValue(target.conn, values.conn, "net.Conn")
		target.timeout = values.timeout
		target.err = values.err
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let sew: stickyErrWriter = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		if ($.pointerValue<$.GoError>(sew.err) != null) {
			return [0, $.pointerValue<$.GoError>(sew.err)]
		}
		while (true) {
			if (sew.timeout != 0n) {
				void (__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>(sew.conn).SetWriteDeadline($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time.Now())).Add(sew.timeout)))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			let [nn, __goscriptShadow7] = await $.pointerValue<Exclude<net.Conn, null>>(sew.conn).Write($.goSlice(p, n, undefined))
			n = n + (nn)
			if (((n < $.sliceLen(p)) && (nn > 0)) && errors.Is($.pointerValueOrNil(__goscriptShadow7)!, $.pointerValueOrNil(os.ErrDeadlineExceeded)!)) {
				// Keep extending the deadline so long as we're making progress.
				continue
			}
			if (sew.timeout != 0n) {
				void (__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>(sew.conn).SetWriteDeadline($.markAsStructValue(new time.Time())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			sew.err!.value = __goscriptShadow7
			return [n, __goscriptShadow7]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"http2.stickyErrWriter",
		() => new stickyErrWriter(),
		() => [$.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])],
		stickyErrWriter,
		() => [/* @__PURE__ */ $.structField("conn", "net.Conn", [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("timeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 16, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("err", /* @__PURE__ */ $.pointerType("error"), [2], 24, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class noCachedConnError {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): noCachedConnError {
		return new noCachedConnError(this, true)
	}

	public __goscriptAssign(source: noCachedConnError): void {
	}

	public Error(): string {
		return "http2: no cached connection was available"
	}

	public IsHTTP2NoCachedConnError(): void {
	}

	static __typeInfo = $.registerStructType(
		"http2.noCachedConnError",
		() => new noCachedConnError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IsHTTP2NoCachedConnError")],
		noCachedConnError,
		() => []
	)
}

export class RoundTripOpt {
	// OnlyCachedConn controls whether RoundTripOpt may
	// create a new TCP connection. If set true and
	// no cached connection is available, RoundTripOpt
	// will return ErrNoCachedConn.
	public get OnlyCachedConn(): boolean {
		return this._fields.OnlyCachedConn
	}

	public set OnlyCachedConn(value: boolean) {
		this._fields.OnlyCachedConn = value
	}

	public _fields: {
		OnlyCachedConn: boolean
	}

	constructor(init?: Partial<{OnlyCachedConn?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			OnlyCachedConn: init?.OnlyCachedConn ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RoundTripOpt {
		return new RoundTripOpt(this, true)
	}

	public __goscriptAssign(source: RoundTripOpt): void {
		const target = this._fields
		const values = source._fields
		target.OnlyCachedConn = values.OnlyCachedConn
	}

	static __typeInfo = $.registerStructType(
		"http2.RoundTripOpt",
		() => new RoundTripOpt(),
		() => [],
		RoundTripOpt,
		() => [/* @__PURE__ */ $.structField("OnlyCachedConn", /* @__PURE__ */ $.basicType("bool"), [0], 0, true)]
	)
}

export class ClientConnState {
	// Closed is whether the connection is closed.
	public get Closed(): boolean {
		return this._fields.Closed
	}

	public set Closed(value: boolean) {
		this._fields.Closed = value
	}

	// Closing is whether the connection is in the process of
	// closing. It may be closing due to shutdown, being a
	// single-use connection, being marked as DoNotReuse, or
	// having received a GOAWAY frame.
	public get Closing(): boolean {
		return this._fields.Closing
	}

	public set Closing(value: boolean) {
		this._fields.Closing = value
	}

	// StreamsActive is how many streams are active.
	public get StreamsActive(): number {
		return this._fields.StreamsActive
	}

	public set StreamsActive(value: number) {
		this._fields.StreamsActive = value
	}

	// StreamsReserved is how many streams have been reserved via
	// ClientConn.ReserveNewRequest.
	public get StreamsReserved(): number {
		return this._fields.StreamsReserved
	}

	public set StreamsReserved(value: number) {
		this._fields.StreamsReserved = value
	}

	// StreamsPending is how many requests have been sent in excess
	// of the peer's advertised MaxConcurrentStreams setting and
	// are waiting for other streams to complete.
	public get StreamsPending(): number {
		return this._fields.StreamsPending
	}

	public set StreamsPending(value: number) {
		this._fields.StreamsPending = value
	}

	// MaxConcurrentStreams is how many concurrent streams the
	// peer advertised as acceptable. Zero means no SETTINGS
	// frame has been received yet.
	public get MaxConcurrentStreams(): number {
		return this._fields.MaxConcurrentStreams
	}

	public set MaxConcurrentStreams(value: number) {
		this._fields.MaxConcurrentStreams = value
	}

	// LastIdle, if non-zero, is when the connection last
	// transitioned to idle state.
	public get LastIdle(): time.Time {
		return this._fields.LastIdle
	}

	public set LastIdle(value: time.Time) {
		this._fields.LastIdle = value
	}

	public _fields: {
		Closed: boolean
		Closing: boolean
		StreamsActive: number
		StreamsReserved: number
		StreamsPending: number
		MaxConcurrentStreams: number
		LastIdle: time.Time
	}

	constructor(init?: Partial<{Closed?: boolean, Closing?: boolean, StreamsActive?: number, StreamsReserved?: number, StreamsPending?: number, MaxConcurrentStreams?: number, LastIdle?: time.Time}>, __goscriptValue?: boolean) {
		this._fields = {
			Closed: init?.Closed ?? (false as boolean),
			Closing: init?.Closing ?? (false as boolean),
			StreamsActive: init?.StreamsActive ?? (0 as number),
			StreamsReserved: init?.StreamsReserved ?? (0 as number),
			StreamsPending: init?.StreamsPending ?? (0 as number),
			MaxConcurrentStreams: init?.MaxConcurrentStreams ?? (0 as number),
			LastIdle: init?.LastIdle ? $.markAsStructValue($.cloneStructValue(init.LastIdle)) : $.markAsStructValue(new time.Time())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClientConnState {
		return new ClientConnState(this, true)
	}

	public __goscriptAssign(source: ClientConnState): void {
		const target = this._fields
		const values = source._fields
		target.Closed = values.Closed
		target.Closing = values.Closing
		target.StreamsActive = values.StreamsActive
		target.StreamsReserved = values.StreamsReserved
		target.StreamsPending = values.StreamsPending
		target.MaxConcurrentStreams = values.MaxConcurrentStreams
		$.assignStruct(target.LastIdle, values.LastIdle)
	}

	static __typeInfo = $.registerStructType(
		"http2.ClientConnState",
		() => new ClientConnState(),
		() => [],
		ClientConnState,
		() => [/* @__PURE__ */ $.structField("Closed", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("Closing", /* @__PURE__ */ $.basicType("bool"), [1], 1, true), /* @__PURE__ */ $.structField("StreamsActive", /* @__PURE__ */ $.basicType("int"), [2], 8, true), /* @__PURE__ */ $.structField("StreamsReserved", /* @__PURE__ */ $.basicType("int"), [3], 16, true), /* @__PURE__ */ $.structField("StreamsPending", /* @__PURE__ */ $.basicType("int"), [4], 24, true), /* @__PURE__ */ $.structField("MaxConcurrentStreams", /* @__PURE__ */ $.basicType("uint32"), [5], 32, true), /* @__PURE__ */ $.structField("LastIdle", "time.Time", [6], 40, true)]
	)
}

export class clientConnIdleState {
	public get canTakeNewRequest(): boolean {
		return this._fields.canTakeNewRequest
	}

	public set canTakeNewRequest(value: boolean) {
		this._fields.canTakeNewRequest = value
	}

	public _fields: {
		canTakeNewRequest: boolean
	}

	constructor(init?: Partial<{canTakeNewRequest?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			canTakeNewRequest: init?.canTakeNewRequest ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): clientConnIdleState {
		return new clientConnIdleState(this, true)
	}

	public __goscriptAssign(source: clientConnIdleState): void {
		const target = this._fields
		const values = source._fields
		target.canTakeNewRequest = values.canTakeNewRequest
	}

	static __typeInfo = $.registerStructType(
		"http2.clientConnIdleState",
		() => new clientConnIdleState(),
		() => [],
		clientConnIdleState,
		() => [/* @__PURE__ */ $.structField("canTakeNewRequest", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class resAndError {
	public get _blank0(): __goscript_http2.incomparable {
		return this._fields._blank0
	}

	public set _blank0(value: __goscript_http2.incomparable) {
		this._fields._blank0 = value
	}

	public get res(): http.Response | $.VarRef<http.Response> | null {
		return this._fields.res
	}

	public set res(value: http.Response | $.VarRef<http.Response> | null) {
		this._fields.res = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		_blank0: __goscript_http2.incomparable
		res: http.Response | $.VarRef<http.Response> | null
		err: $.GoError
	}

	constructor(init?: Partial<{_blank0?: __goscript_http2.incomparable, res?: http.Response | $.VarRef<http.Response> | null, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "http2.incomparable") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			res: init?.res ?? (null! as http.Response | $.VarRef<http.Response> | null),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): resAndError {
		return new resAndError(this, true)
	}

	public __goscriptAssign(source: resAndError): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "http2.incomparable")
		target.res = values.res
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	static __typeInfo = $.registerStructType(
		"http2.resAndError",
		() => new resAndError(),
		() => [],
		resAndError,
		() => [/* @__PURE__ */ $.structField("_", "http2.incomparable", [0], 0, false, { key: "_blank0", pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("res", /* @__PURE__ */ $.pointerType("http.Response"), [1], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("err", "error", [2], 8, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class clientConnReadLoop {
	public get _blank0(): __goscript_http2.incomparable {
		return this._fields._blank0
	}

	public set _blank0(value: __goscript_http2.incomparable) {
		this._fields._blank0 = value
	}

	public get cc(): ClientConn | $.VarRef<ClientConn> | null {
		return this._fields.cc
	}

	public set cc(value: ClientConn | $.VarRef<ClientConn> | null) {
		this._fields.cc = value
	}

	public _fields: {
		_blank0: __goscript_http2.incomparable
		cc: ClientConn | $.VarRef<ClientConn> | null
	}

	constructor(init?: Partial<{_blank0?: __goscript_http2.incomparable, cc?: ClientConn | $.VarRef<ClientConn> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "http2.incomparable") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			cc: init?.cc ?? (null! as ClientConn | $.VarRef<ClientConn> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): clientConnReadLoop {
		return new clientConnReadLoop(this, true)
	}

	public __goscriptAssign(source: clientConnReadLoop): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "http2.incomparable")
		target.cc = values.cc
	}

	public async cleanup(): globalThis.Promise<void> {
		const rl: clientConnReadLoop | $.VarRef<clientConnReadLoop> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		let cc: ClientConn | $.VarRef<ClientConn> | null = $.pointerValue<clientConnReadLoop>(rl).cc
		let cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_client_conn_pool.ClientConnPool, null>>((await Transport.prototype.connPool.call((cc$ as ClientConn).t))).MarkDead(cc), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		__defer.defer(async () => { await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).closeConn() : ClientConn.prototype.closeConn.call(cc)) })
		const __goscriptDeferArg4 = (cc$ as ClientConn).readerDone
		__defer.defer(() => { __goscriptDeferArg4!.close() })

		if ((cc$ as ClientConn).idleTimer != null) {
			void (__goscriptAwait = $.pointerValue<__goscript_timer.timer>((cc$ as ClientConn).idleTimer).Stop(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		// Close any response bodies if the server closes prematurely.
		// TODO: also do this if we've written the headers but not
		// gotten a response yet.
		let err = (cc$ as ClientConn).readerErr
		await (cc$ as ClientConn).mu.Lock()
		if (((cc$ as ClientConn).goAway != null) && isEOFOrNetReadError(err)) {
			err = $.interfaceValue<$.GoError>(new GoAwayError({LastStreamID: $.pointerValue<__goscript_frame.GoAwayFrame>((cc$ as ClientConn).goAway).LastStreamID, ErrCode: $.pointerValue<__goscript_frame.GoAwayFrame>((cc$ as ClientConn).goAway).ErrCode, DebugData: (cc$ as ClientConn).goAwayDebug}, true), "http2.GoAwayError", "http2.GoAwayError")
		} else {
			if ($.comparableEqual(err, io.EOF)) {
				err = io.ErrUnexpectedEOF
			}
		}
		;(cc$ as ClientConn).closed = true

		for (const [__rangeKey, cs] of (cc$ as ClientConn).streams?.entries() ?? []) {
			const [__goscriptSelect13HasReturn, __goscriptSelect13Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: $.pointerValue<clientStream>(cs).peerClosed,
				},
				{
					id: -1,
					isSend: false,
					channel: null,
					onSelected: async (__goscriptSelect13Result) => {
						await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).abortStreamLocked(err) : clientStream.prototype.abortStreamLocked.call(cs, err))
					}
				}
			], true)
			if (__goscriptSelect13HasReturn) {
				return __goscriptSelect13Value
			}
		}
		sync.Cond.prototype.Broadcast.call($.pointerValue<sync.Cond>((cc$ as ClientConn).cond))
		void (cc$ as ClientConn).mu.Unlock()
	}

	public async endStream(cs: clientStream | $.VarRef<clientStream> | null): globalThis.Promise<void> {
		const rl: clientConnReadLoop | $.VarRef<clientConnReadLoop> | null = this;
		using __defer = new $.DisposableStack()
		const rl$: clientConnReadLoop = rl == null ? $.pointerTarget<clientConnReadLoop>(rl) : (rl as any).__isVarRef === true ? (rl as any).value : (rl as any).__goValue === undefined ? (rl as any) : $.pointerTarget<clientConnReadLoop>(rl)
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		// TODO: check that any declared content-length matches, like
		// server.go's (*stream).endStream method.
		if (!(cs$ as clientStream).readClosed) {
			;(cs$ as clientStream).readClosed = true
			// Close cs.bufPipe and cs.peerClosed with cc.mu held to avoid a
			// race condition: The caller can read io.EOF from Response.Body
			// and close the body before we close cs.peerClosed, causing
			// cleanupWriteRequest to send a RST_STREAM.
			await $.pointerValue<ClientConn>((rl$ as clientConnReadLoop).cc).mu.Lock()
			const __goscriptDeferCallee23 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<ClientConn>((rl$ as clientConnReadLoop).cc).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee23() })
			await (cs$ as clientStream).bufPipe.closeWithErrorAndCode(io.EOF, $.functionValue(((__receiver) => () => __receiver.copyTrailers())((cs$ as clientStream)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*clientStream).copyTrailers-fm"))
			void (cs$ as clientStream).peerClosed!.close()
		}
	}

	public async endStreamError(cs: clientStream | $.VarRef<clientStream> | null, err: $.GoError): globalThis.Promise<void> {
		const rl: clientConnReadLoop | $.VarRef<clientConnReadLoop> | null = this;
		$.pointerValue<clientStream>(cs).readAborted = true
		await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).abortStream(err) : clientStream.prototype.abortStream.call(cs, err))
	}

	public async handleResponse(cs: clientStream | $.VarRef<clientStream> | null, f: __goscript_frame.MetaHeadersFrame | $.VarRef<__goscript_frame.MetaHeadersFrame> | null): globalThis.Promise<[http.Response | $.VarRef<http.Response> | null, $.GoError]> {
		const rl: clientConnReadLoop | $.VarRef<clientConnReadLoop> | null = this;
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		if ($.pointerValue<__goscript_frame.MetaHeadersFrame>(f).Truncated) {
			return [null, errResponseHeaderListSize]
		}

		let status = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.MetaHeadersFrame).PseudoValue("status") : __goscript_frame.MetaHeadersFrame.prototype.PseudoValue.call(f, "status"))
		if ($.stringEqual(status, "")) {
			return [null, errors.New("malformed response from server: missing status pseudo header")]
		}
		let [statusCode, err] = strconv.Atoi(status)
		if (err != null) {
			return [null, errors.New("malformed response from server: malformed non-numeric status pseudo header")]
		}

		let regularFields: $.Slice<hpack.HeaderField> = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.MetaHeadersFrame).RegularFields() : __goscript_frame.MetaHeadersFrame.prototype.RegularFields.call(f))
		let strs: $.Slice<string> = $.makeSlice<string>($.sliceLen(regularFields), undefined, "string")
		let header: http.Header = $.makeMap<string, $.Slice<string>>()
		let res: http.Response | $.VarRef<http.Response> | null = (() => { const __goscriptLiteralField4 = $.concatString(($.concatString(status, " ")), http.StatusText(statusCode)); return new http.Response({Proto: "HTTP/2.0", ProtoMajor: 2, Header: header, StatusCode: statusCode, Status: __goscriptLiteralField4}) })()
		let res$: http.Response = res == null ? $.pointerTarget<http.Response>(res) : (res as any).__isVarRef === true ? (res as any).value : (res as any).__goValue === undefined ? (res as any) : $.pointerTarget<http.Response>(res)
		for (let __goscriptRangeTarget5 = regularFields, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let hf = ((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as hpack.HeaderField)).clone()
			let key = await __goscript_headermap.canonicalHeader(hf.Name)
			if ($.stringEqual(key, "Trailer")) {
				let t: http.Header = (res$ as http.Response).Trailer
				if (t == null) {
					t = $.makeMap<string, $.Slice<string>>();
					;(res$ as http.Response).Trailer = t
				}
				await __goscript_server.foreachHeaderElement(hf.Value, $.functionValue(async (v: string): globalThis.Promise<void> => {
					$.mapSet(t, await __goscript_headermap.canonicalHeader(v), null)
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo)))
			} else {
				let vv: $.Slice<string> = $.mapGet<string, $.Slice<string>, $.Slice<string>>(header, key, null)[0]
				if ((vv == null) && ($.sliceLen(strs) > 0)) {
					// More than likely this will be a single-element key.
					// Most headers aren't multi-valued.
					// Set the capacity on strs[0] to 1, so any future append
					// won't extend the slice into the other strings.
					let __goscriptAssign0_0: $.Slice<string> = $.goSlice(strs, undefined, 1, 1)
					let __goscriptAssign0_1: $.Slice<string> = $.goSlice(strs, 1, undefined)
					vv = __goscriptAssign0_0
					strs = __goscriptAssign0_1
					$.sliceElems(vv!)[$.sliceSlot(vv!, 0)] = hf.Value
					$.mapSet(header, key, vv)
				} else {
					$.mapSet(header, key, $.appendOne(vv, hf.Value))
				}
			}
		}

		if ((statusCode >= 100) && (statusCode <= 199)) {
			if ($.pointerValue<__goscript_frame.HeadersFrame>($.pointerValue<__goscript_frame.MetaHeadersFrame>(f).HeadersFrame).StreamEnded()) {
				return [null, errors.New("1xx informational response with END_STREAM flag")]
			}
			;(cs$ as clientStream).num1xx = (((cs$ as clientStream).num1xx + 1) & 0xff)
			const max1xxResponses: number = 5
			if ((cs$ as clientStream).num1xx > 5) {
				return [null, errors.New("http2: too many 1xx informational responses")]
			}
			{
				let fn: ((_p0: number, _p1: textproto.MIMEHeader) => $.GoError | globalThis.Promise<$.GoError>) | null = (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).get1xxTraceFunc() : clientStream.prototype.get1xxTraceFunc.call(cs))
				if (fn != null) {
					{
						let __goscriptShadow11 = (__goscriptAwait = fn!(statusCode, header), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (__goscriptShadow11 != null) {
							return [null, __goscriptShadow11]
						}
					}
				}
			}
			if (statusCode == 100) {
				await traceGot100Continue((cs$ as clientStream).trace)
				const [__goscriptSelect14HasReturn, __goscriptSelect14Value] = await $.selectStatement<any, [http.Response | $.VarRef<http.Response> | null, $.GoError]>([
					{
						id: 0,
						isSend: true,
						channel: (cs$ as clientStream).on100,
						value: {},
					},
					{
						id: -1,
						isSend: false,
						channel: null,
					}
				], true)
				if (__goscriptSelect14HasReturn) {
					return __goscriptSelect14Value
				}
			}
			;(cs$ as clientStream).pastHeaders = false
			return [null, null]
		}

		;(res$ as http.Response).ContentLength = -1n
		{
			let clens: $.Slice<string> = $.mapGet<string, $.Slice<string>, $.Slice<string>>((res$ as http.Response).Header, "Content-Length", null)[0]
			if ($.sliceLen(clens) == 1) {
				{
					let [cl, __goscriptShadow12] = strconv.ParseUint($.arrayIndex(clens!, 0), 10, 63)
					if (__goscriptShadow12 == null) {
						;(res$ as http.Response).ContentLength = $.int64(cl)
					}
				}
			} else {
				if ($.sliceLen(clens) > 1) {
				} else {
					if ($.pointerValue<__goscript_frame.HeadersFrame>($.pointerValue<__goscript_frame.MetaHeadersFrame>(f).HeadersFrame).StreamEnded() && !(cs$ as clientStream).isHead) {
						;(res$ as http.Response).ContentLength = 0n
					}
				}
			}
		}

		if ((cs$ as clientStream).isHead) {
			;(res$ as http.Response).Body = noBody
			return [res, null]
		}

		if ($.pointerValue<__goscript_frame.HeadersFrame>($.pointerValue<__goscript_frame.MetaHeadersFrame>(f).HeadersFrame).StreamEnded()) {
			if ((res$ as http.Response).ContentLength > 0n) {
				;(res$ as http.Response).Body = $.interfaceValue<io.ReadCloser | null>(new missingBody(undefined, true), "http2.missingBody", "http2.missingBody")
			} else {
				;(res$ as http.Response).Body = noBody
			}
			return [res, null]
		}

		await (cs$ as clientStream).bufPipe.setBuffer($.interfaceValue<__goscript_pipe.pipeBuffer | null>(new __goscript_databuffer.dataBuffer({expected: (res$ as http.Response).ContentLength}), "*http2.dataBuffer", /* @__PURE__ */ $.pointerType("http2.dataBuffer")));
		;(cs$ as clientStream).bytesRemain = (res$ as http.Response).ContentLength;
		;(res$ as http.Response).Body = $.interfaceValue<io.ReadCloser | null>(new transportResponseBody({cs: cs}, true), "http2.transportResponseBody", "http2.transportResponseBody")

		if ((cs$ as clientStream).requestedGzip && __goscript_ascii.asciiEqualFold(await http.Header_Get((res$ as http.Response).Header, "Content-Encoding"), "gzip")) {
			http.Header_Del((res$ as http.Response).Header, "Content-Encoding")
			http.Header_Del((res$ as http.Response).Header, "Content-Length");
			;(res$ as http.Response).ContentLength = -1n;
			;(res$ as http.Response).Body = $.interfaceValue<io.ReadCloser | null>(new gzipReader({body: (res$ as http.Response).Body}), "*http2.gzipReader", /* @__PURE__ */ $.pointerType("http2.gzipReader"));
			;(res$ as http.Response).Uncompressed = true
		}
		return [res, null]
	}

	public async processData(f: __goscript_frame.DataFrame | $.VarRef<__goscript_frame.DataFrame> | null): globalThis.Promise<$.GoError> {
		const rl: clientConnReadLoop | $.VarRef<clientConnReadLoop> | null = this;
		const f$: __goscript_frame.DataFrame = f == null ? $.pointerTarget<__goscript_frame.DataFrame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_frame.DataFrame>(f)
		let cc: ClientConn | $.VarRef<ClientConn> | null = $.pointerValue<clientConnReadLoop>(rl).cc
		let cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		let cs: clientStream | $.VarRef<clientStream> | null = await (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).streamByID((f$ as __goscript_frame.DataFrame).FrameHeader.StreamID) : clientConnReadLoop.prototype.streamByID.call(rl, (f$ as __goscript_frame.DataFrame).FrameHeader.StreamID))
		let cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		let data: $.Slice<number> = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.DataFrame).Data() : __goscript_frame.DataFrame.prototype.Data.call(f))
		if (cs == null) {
			await (cc$ as ClientConn).mu.Lock()
			let neverSent = (cc$ as ClientConn).nextStreamID
			void (cc$ as ClientConn).mu.Unlock()
			if ((f$ as __goscript_frame.DataFrame).FrameHeader.StreamID >= neverSent) {
				// We never asked for this.
				await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).logf("http2: Transport received unsolicited DATA frame; closing connection", null) : ClientConn.prototype.logf.call(cc, "http2: Transport received unsolicited DATA frame; closing connection", null))
				return $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))
			}
			// We probably did ask for this, but canceled. Just ignore it.
			// TODO: be stricter here? only silently ignore things which
			// we canceled, but not things which were closed normally
			// by the peer? Tough without accumulating too much state.

			// But at least return their flow control:
			if ((f$ as __goscript_frame.DataFrame).FrameHeader.Length > 0) {
				await (cc$ as ClientConn).mu.Lock()
				let ok = (cc$ as ClientConn).inflow.take((f$ as __goscript_frame.DataFrame).FrameHeader.Length)
				let connAdd = (cc$ as ClientConn).inflow.add($.int((f$ as __goscript_frame.DataFrame).FrameHeader.Length))
				void (cc$ as ClientConn).mu.Unlock()
				if (!ok) {
					return $.namedValueInterfaceValue<$.GoError>($.uint(3, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))
				}
				if (connAdd > 0) {
					await (cc$ as ClientConn).wmu.Lock()
					await __goscript_frame.Framer.prototype.WriteWindowUpdate.call((cc$ as ClientConn).fr, 0, $.uint(connAdd, 32))
					await bufio.Writer.prototype.Flush.call((cc$ as ClientConn).bw)
					void (cc$ as ClientConn).wmu.Unlock()
				}
			}
			return null
		}
		if ((cs$ as clientStream).readClosed) {
			await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).logf("protocol error: received DATA after END_STREAM", null) : ClientConn.prototype.logf.call(cc, "protocol error: received DATA after END_STREAM", null))
			await clientConnReadLoop.prototype.endStreamError.call(rl, cs, $.interfaceValue<$.GoError>(new __goscript_errors.StreamError({StreamID: (f$ as __goscript_frame.DataFrame).FrameHeader.StreamID, Code: 1}, true), "http2.StreamError", "http2.StreamError"))
			return null
		}
		if (!(cs$ as clientStream).pastHeaders) {
			await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).logf("protocol error: received DATA before a HEADERS frame", null) : ClientConn.prototype.logf.call(cc, "protocol error: received DATA before a HEADERS frame", null))
			await clientConnReadLoop.prototype.endStreamError.call(rl, cs, $.interfaceValue<$.GoError>(new __goscript_errors.StreamError({StreamID: (f$ as __goscript_frame.DataFrame).FrameHeader.StreamID, Code: 1}, true), "http2.StreamError", "http2.StreamError"))
			return null
		}
		if ((f$ as __goscript_frame.DataFrame).FrameHeader.Length > 0) {
			if ((cs$ as clientStream).isHead && ($.sliceLen(data) > 0)) {
				await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).logf("protocol error: received DATA on a HEAD request", null) : ClientConn.prototype.logf.call(cc, "protocol error: received DATA on a HEAD request", null))
				await clientConnReadLoop.prototype.endStreamError.call(rl, cs, $.interfaceValue<$.GoError>(new __goscript_errors.StreamError({StreamID: (f$ as __goscript_frame.DataFrame).FrameHeader.StreamID, Code: 1}, true), "http2.StreamError", "http2.StreamError"))
				return null
			}
			// Check connection-level flow control.
			await (cc$ as ClientConn).mu.Lock()
			if (!__goscript_flow.takeInflows($.fieldRef((cc$ as ClientConn)._fields, "inflow"), $.fieldRef((cs$ as clientStream)._fields, "inflow"), (f$ as __goscript_frame.DataFrame).FrameHeader.Length)) {
				void (cc$ as ClientConn).mu.Unlock()
				return $.namedValueInterfaceValue<$.GoError>($.uint(3, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))
			}
			// Return any padded flow control now, since we won't
			// refund it later on body reads.
			let refund: number = 0
			{
				let pad = $.int((f$ as __goscript_frame.DataFrame).FrameHeader.Length) - $.sliceLen(data)
				if (pad > 0) {
					refund = refund + (pad)
				}
			}

			let didReset = false
			let err: $.GoError = null! as $.GoError
			if ($.sliceLen(data) > 0) {
				{
					let __goscriptTuple12: any = await (cs$ as clientStream).bufPipe.Write(data)
					err = __goscriptTuple12[1]
					if (err != null) {
						// Return len(data) now if the stream is already closed,
						// since data will never be read.
						didReset = true
						refund = refund + ($.sliceLen(data))
					}
				}
			}

			let sendConn = (cc$ as ClientConn).inflow.add(refund)
			let sendStream: number = 0
			if (!didReset) {
				sendStream = (cs$ as clientStream).inflow.add(refund)
			}
			void (cc$ as ClientConn).mu.Unlock()

			if ((sendConn > 0) || (sendStream > 0)) {
				await (cc$ as ClientConn).wmu.Lock()
				if (sendConn > 0) {
					await __goscript_frame.Framer.prototype.WriteWindowUpdate.call((cc$ as ClientConn).fr, 0, $.uint(sendConn, 32))
				}
				if (sendStream > 0) {
					await __goscript_frame.Framer.prototype.WriteWindowUpdate.call((cc$ as ClientConn).fr, (cs$ as clientStream).ID, $.uint(sendStream, 32))
				}
				await bufio.Writer.prototype.Flush.call((cc$ as ClientConn).bw)
				void (cc$ as ClientConn).wmu.Unlock()
			}

			if (err != null) {
				await (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).endStreamError(cs, err) : clientConnReadLoop.prototype.endStreamError.call(rl, cs, err))
				return null
			}
		}

		if ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.DataFrame).StreamEnded() : __goscript_frame.DataFrame.prototype.StreamEnded.call(f))) {
			await (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).endStream(cs) : clientConnReadLoop.prototype.endStream.call(rl, cs))
		}
		return null
	}

	public async processGoAway(f: __goscript_frame.GoAwayFrame | $.VarRef<__goscript_frame.GoAwayFrame> | null): globalThis.Promise<$.GoError> {
		const rl: clientConnReadLoop | $.VarRef<clientConnReadLoop> | null = this;
		const f$: __goscript_frame.GoAwayFrame = f == null ? $.pointerTarget<__goscript_frame.GoAwayFrame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_frame.GoAwayFrame>(f)
		let cc: ClientConn | $.VarRef<ClientConn> | null = $.pointerValue<clientConnReadLoop>(rl).cc
		let cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_client_conn_pool.ClientConnPool, null>>((await Transport.prototype.connPool.call((cc$ as ClientConn).t))).MarkDead(cc), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((f$ as __goscript_frame.GoAwayFrame).ErrCode != 0) {
			// TODO: deal with GOAWAY more. particularly the error code
			await ClientConn.prototype.vlogf.call(cc, "transport got GOAWAY with error code = %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((f$ as __goscript_frame.GoAwayFrame).ErrCode, "http2.ErrCode", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
			{
				let fn: ((errType: string) => void) | null = $.pointerValue<Transport>((cc$ as ClientConn).t).CountError
				if (fn != null) {
					void (__goscriptAwait = fn!($.concatString("recv_goaway_", await __goscript_errors.ErrCode_stringToken((f$ as __goscript_frame.GoAwayFrame).ErrCode))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
		}
		await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).setGoAway(f) : ClientConn.prototype.setGoAway.call(cc, f))
		return null
	}

	public async processHeaders(f: __goscript_frame.MetaHeadersFrame | $.VarRef<__goscript_frame.MetaHeadersFrame> | null): globalThis.Promise<$.GoError> {
		const rl: clientConnReadLoop | $.VarRef<clientConnReadLoop> | null = this;
		const f$: __goscript_frame.MetaHeadersFrame = f == null ? $.pointerTarget<__goscript_frame.MetaHeadersFrame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_frame.MetaHeadersFrame>(f)
		let cs: clientStream | $.VarRef<clientStream> | null = await clientConnReadLoop.prototype.streamByID.call(rl, $.pointerValue<__goscript_frame.HeadersFrame>((f$ as __goscript_frame.MetaHeadersFrame).HeadersFrame).FrameHeader.StreamID)
		let cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		if (cs == null) {
			// We'd get here if we canceled a request while the
			// server had its response still in flight. So if this
			// was just something we canceled, ignore it.
			return null
		}
		if ((cs$ as clientStream).readClosed) {
			await clientConnReadLoop.prototype.endStreamError.call(rl, cs, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField5 = errors.New("protocol error: headers after END_STREAM"); return new __goscript_errors.StreamError({StreamID: $.pointerValue<__goscript_frame.HeadersFrame>((f$ as __goscript_frame.MetaHeadersFrame).HeadersFrame).FrameHeader.StreamID, Code: 1, Cause: __goscriptLiteralField5}, true) })(), "http2.StreamError", "http2.StreamError"))
			return null
		}
		if (!(cs$ as clientStream).firstByte) {
			if ((cs$ as clientStream).trace != null) {
				// TODO(bradfitz): move first response byte earlier,
				// when we first read the 9 byte header, not waiting
				// until all the HEADERS+CONTINUATION frames have been
				// merged. This works for now.
				await traceFirstResponseByte((cs$ as clientStream).trace)
			}
			;(cs$ as clientStream).firstByte = true
		}
		if (!(cs$ as clientStream).pastHeaders) {
			;(cs$ as clientStream).pastHeaders = true
		} else {
			return (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).processTrailers(cs, f) : clientConnReadLoop.prototype.processTrailers.call(rl, cs, f))
		}

		let __goscriptTuple13: any = await (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).handleResponse(cs, f) : clientConnReadLoop.prototype.handleResponse.call(rl, cs, f))
		let res: http.Response | $.VarRef<http.Response> | null = __goscriptTuple13[0]
		let err = __goscriptTuple13[1]
		if (err != null) {
			{
				let [, ok] = $.typeAssertTuple<__goscript_errors.ConnectionError>(err, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))
				if (ok) {
					return err
				}
			}
			// Any other error type is a stream error.
			await clientConnReadLoop.prototype.endStreamError.call(rl, cs, $.interfaceValue<$.GoError>(new __goscript_errors.StreamError({StreamID: $.pointerValue<__goscript_frame.HeadersFrame>((f$ as __goscript_frame.MetaHeadersFrame).HeadersFrame).FrameHeader.StreamID, Code: 1, Cause: err}, true), "http2.StreamError", "http2.StreamError"))
			return null
		}
		if (res == null) {
			// (nil, nil) special case. See handleResponse docs.
			return null
		}
		;(cs$ as clientStream).resTrailer = $.fieldRef($.pointerValue<http.Response>(res)._fields, "Trailer");
		;(cs$ as clientStream).res = res
		void (cs$ as clientStream).respHeaderRecv!.close()
		if ($.pointerValue<__goscript_frame.HeadersFrame>((f$ as __goscript_frame.MetaHeadersFrame).HeadersFrame).StreamEnded()) {
			await (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).endStream(cs) : clientConnReadLoop.prototype.endStream.call(rl, cs))
		}
		return null
	}

	public async processPing(f: __goscript_frame.PingFrame | $.VarRef<__goscript_frame.PingFrame> | null): globalThis.Promise<$.GoError> {
		const rl: clientConnReadLoop | $.VarRef<clientConnReadLoop> | null = this;
		using __defer = new $.DisposableStack()
		const rl$: clientConnReadLoop = rl == null ? $.pointerTarget<clientConnReadLoop>(rl) : (rl as any).__isVarRef === true ? (rl as any).value : (rl as any).__goValue === undefined ? (rl as any) : $.pointerTarget<clientConnReadLoop>(rl)
		const f$: __goscript_frame.PingFrame = f == null ? $.pointerTarget<__goscript_frame.PingFrame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_frame.PingFrame>(f)
		if ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.PingFrame).IsAck() : __goscript_frame.PingFrame.prototype.IsAck.call(f))) {
			let cc: ClientConn | $.VarRef<ClientConn> | null = (rl$ as clientConnReadLoop).cc
			let cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
			await (cc$ as ClientConn).mu.Lock()
			const __goscriptDeferCallee24 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee24() })
			// If ack, notify listener if any
			{
				let __goscriptTuple14: any = $.mapGet<Uint8Array, $.Channel<{}> | null, $.Channel<{}> | null>((cc$ as ClientConn).pings, $.cloneArrayValue((f$ as __goscript_frame.PingFrame).Data, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)), null)
				let c: $.Channel<{}> | null = __goscriptTuple14[0]
				let ok = __goscriptTuple14[1]
				if (ok) {
					c!.close()
					$.deleteMapEntry((cc$ as ClientConn).pings, $.cloneArrayValue((f$ as __goscript_frame.PingFrame).Data, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)))
				}
			}
			return null
		}
		let cc: ClientConn | $.VarRef<ClientConn> | null = (rl$ as clientConnReadLoop).cc
		let cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).wmu.Lock()
		const __goscriptDeferCallee25 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).wmu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee25() })
		{
			let err = await __goscript_frame.Framer.prototype.WritePing.call((cc$ as ClientConn).fr, true, $.cloneArrayValue((f$ as __goscript_frame.PingFrame).Data, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)))
			if (err != null) {
				return err
			}
		}
		return await bufio.Writer.prototype.Flush.call((cc$ as ClientConn).bw)
	}

	public processPushPromise(f: __goscript_frame.PushPromiseFrame | $.VarRef<__goscript_frame.PushPromiseFrame> | null): $.GoError {
		const rl: clientConnReadLoop | $.VarRef<clientConnReadLoop> | null = this;
		// We told the peer we don't want them.
		// Spec says:
		// "PUSH_PROMISE MUST NOT be sent if the SETTINGS_ENABLE_PUSH
		// setting of the peer endpoint is set to 0. An endpoint that
		// has set this setting and has received acknowledgement MUST
		// treat the receipt of a PUSH_PROMISE frame as a connection
		// error (Section 5.4.1) of type PROTOCOL_ERROR."
		return $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))
	}

	public async processResetStream(f: __goscript_frame.RSTStreamFrame | $.VarRef<__goscript_frame.RSTStreamFrame> | null): globalThis.Promise<$.GoError> {
		const rl: clientConnReadLoop | $.VarRef<clientConnReadLoop> | null = this;
		const f$: __goscript_frame.RSTStreamFrame = f == null ? $.pointerTarget<__goscript_frame.RSTStreamFrame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_frame.RSTStreamFrame>(f)
		let cs: clientStream | $.VarRef<clientStream> | null = await (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).streamByID((f$ as __goscript_frame.RSTStreamFrame).FrameHeader.StreamID) : clientConnReadLoop.prototype.streamByID.call(rl, (f$ as __goscript_frame.RSTStreamFrame).FrameHeader.StreamID))
		let cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		if (cs == null) {
			// TODO: return error if server tries to RST_STREAM an idle stream
			return null
		}
		let serr = __goscript_errors.streamError((cs$ as clientStream).ID, (f$ as __goscript_frame.RSTStreamFrame).ErrCode)
		serr.Cause = __goscript_errors.errFromPeer
		if ((f$ as __goscript_frame.RSTStreamFrame).ErrCode == 1) {
			await ClientConn.prototype.SetDoNotReuse.call($.pointerValue<clientConnReadLoop>(rl).cc)
		}
		{
			let fn: ((errType: string) => void) | null = $.pointerValue<Transport>($.pointerValue<ClientConn>((cs$ as clientStream).cc).t).CountError
			if (fn != null) {
				void (__goscriptAwait = fn!($.concatString("recv_rststream_", await __goscript_errors.ErrCode_stringToken((f$ as __goscript_frame.RSTStreamFrame).ErrCode))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).abortStream($.interfaceValue<$.GoError>((serr).clone(), "http2.StreamError", "http2.StreamError")) : clientStream.prototype.abortStream.call(cs, $.interfaceValue<$.GoError>((serr).clone(), "http2.StreamError", "http2.StreamError")))

		await (cs$ as clientStream).bufPipe.CloseWithError($.interfaceValue<$.GoError>((serr).clone(), "http2.StreamError", "http2.StreamError"))
		return null
	}

	public async processSettings(f: __goscript_frame.SettingsFrame | $.VarRef<__goscript_frame.SettingsFrame> | null): globalThis.Promise<$.GoError> {
		const rl: clientConnReadLoop | $.VarRef<clientConnReadLoop> | null = this;
		using __defer = new $.DisposableStack()
		let cc: ClientConn | $.VarRef<ClientConn> | null = $.pointerValue<clientConnReadLoop>(rl).cc
		let cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		// Locking both mu and wmu here allows frame encoding to read settings with only wmu held.
		// Acquiring wmu when f.IsAck() is unnecessary, but convenient and mostly harmless.
		await (cc$ as ClientConn).wmu.Lock()
		const __goscriptDeferCallee26 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).wmu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee26() })

		{
			let err = await (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).processSettingsNoWrite(f) : clientConnReadLoop.prototype.processSettingsNoWrite.call(rl, f))
			if (err != null) {
				return err
			}
		}
		if (!(f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.SettingsFrame).IsAck() : __goscript_frame.SettingsFrame.prototype.IsAck.call(f))) {
			await __goscript_frame.Framer.prototype.WriteSettingsAck.call((cc$ as ClientConn).fr)
			await bufio.Writer.prototype.Flush.call((cc$ as ClientConn).bw)
		}
		return null
	}

	public async processSettingsNoWrite(f: __goscript_frame.SettingsFrame | $.VarRef<__goscript_frame.SettingsFrame> | null): globalThis.Promise<$.GoError> {
		const rl: clientConnReadLoop | $.VarRef<clientConnReadLoop> | null = this;
		using __defer = new $.DisposableStack()
		let cc: ClientConn | $.VarRef<ClientConn> | null = $.pointerValue<clientConnReadLoop>(rl).cc
		let cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.Lock()
		const __goscriptDeferCallee27 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee27() })

		if ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.SettingsFrame).IsAck() : __goscript_frame.SettingsFrame.prototype.IsAck.call(f))) {
			if ((cc$ as ClientConn).wantSettingsAck) {
				;(cc$ as ClientConn).wantSettingsAck = false
				return null
			}
			return $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))
		}

		let seenMaxConcurrentStreams: boolean = false
		let err = await __goscript_frame.SettingsFrame.prototype.ForeachSetting.call(f, $.functionValue(async (s: __goscript_http2.Setting): globalThis.Promise<$.GoError> => {
			switch (s.ID) {
				case 5:
				{
					;(cc$ as ClientConn).maxFrameSize = s.Val
					break
				}
				case 3:
				{
					;(cc$ as ClientConn).maxConcurrentStreams = s.Val
					seenMaxConcurrentStreams = true
					break
				}
				case 6:
				{
					;(cc$ as ClientConn).peerMaxHeaderListSize = $.uint64(s.Val)
					break
				}
				case 4:
				{
					if (s.Val > 2147483647) {
						return $.namedValueInterfaceValue<$.GoError>($.uint(3, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))
					}

					// Adjust flow control of currently-open
					// frames by the difference of the old initial
					// window size and this one.
					let delta = $.int((($.int(s.Val, 32) - $.int((cc$ as ClientConn).initialWindowSize, 32)) | 0), 32)
					for (const [__rangeKey, cs] of (cc$ as ClientConn).streams?.entries() ?? []) {
						$.pointerValue<clientStream>(cs).flow.add(delta)
					}
					sync.Cond.prototype.Broadcast.call($.pointerValue<sync.Cond>((cc$ as ClientConn).cond));

					;(cc$ as ClientConn).initialWindowSize = s.Val
					break
				}
				case 1:
				{
					await hpack.Encoder.prototype.SetMaxDynamicTableSize.call((cc$ as ClientConn).henc, s.Val);
					;(cc$ as ClientConn).peerMaxHeaderTableSize = s.Val
					break
				}
				default:
				{
					await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).vlogf("Unhandled Setting: %v", $.arrayToSlice<any>([$.interfaceValue((s).clone(), "http2.Setting", "http2.Setting")])) : ClientConn.prototype.vlogf.call(cc, "Unhandled Setting: %v", $.arrayToSlice<any>([$.interfaceValue((s).clone(), "http2.Setting", "http2.Setting")])))
					break
				}
			}
			return null
		}, ({ kind: $.TypeKind.Function, params: ["http2.Setting"], results: ["error"] } as $.FunctionTypeInfo)))
		if (err != null) {
			return err
		}

		if (!(cc$ as ClientConn).seenSettings) {
			if (!seenMaxConcurrentStreams) {
				// This was the servers initial SETTINGS frame and it
				// didn't contain a MAX_CONCURRENT_STREAMS field so
				// increase the number of concurrent streams this
				// connection can establish to our default.
				;(cc$ as ClientConn).maxConcurrentStreams = 1000
			}
			;(cc$ as ClientConn).seenSettings = true
		}

		return null
	}

	public async processTrailers(cs: clientStream | $.VarRef<clientStream> | null, f: __goscript_frame.MetaHeadersFrame | $.VarRef<__goscript_frame.MetaHeadersFrame> | null): globalThis.Promise<$.GoError> {
		const rl: clientConnReadLoop | $.VarRef<clientConnReadLoop> | null = this;
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		if ((cs$ as clientStream).pastTrailers) {
			// Too many HEADERS frames for this stream.
			return $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))
		}
		;(cs$ as clientStream).pastTrailers = true
		if (!$.pointerValue<__goscript_frame.HeadersFrame>($.pointerValue<__goscript_frame.MetaHeadersFrame>(f).HeadersFrame).StreamEnded()) {
			// We expect that any headers for trailers also
			// has END_STREAM.
			return $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))
		}
		if ($.sliceLen((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.MetaHeadersFrame).PseudoFields() : __goscript_frame.MetaHeadersFrame.prototype.PseudoFields.call(f))) > 0) {
			// No pseudo header fields are defined for trailers.
			// TODO: ConnectionError might be overly harsh? Check.
			return $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))
		}

		let trailer: http.Header = $.makeMap<string, $.Slice<string>>()
		for (let __goscriptRangeTarget6 = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.MetaHeadersFrame).RegularFields() : __goscript_frame.MetaHeadersFrame.prototype.RegularFields.call(f)), __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let hf = ((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as hpack.HeaderField)).clone()
			let key = await __goscript_headermap.canonicalHeader(hf.Name)
			$.mapSet(trailer, key, $.appendOne($.mapGet<string, $.Slice<string>, $.Slice<string>>(trailer, key, null)[0], hf.Value))
		}
		;(cs$ as clientStream).trailer = trailer

		await (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).endStream(cs) : clientConnReadLoop.prototype.endStream.call(rl, cs))
		return null
	}

	public async processWindowUpdate(f: __goscript_frame.WindowUpdateFrame | $.VarRef<__goscript_frame.WindowUpdateFrame> | null): globalThis.Promise<$.GoError> {
		const rl: clientConnReadLoop | $.VarRef<clientConnReadLoop> | null = this;
		using __defer = new $.DisposableStack()
		const f$: __goscript_frame.WindowUpdateFrame = f == null ? $.pointerTarget<__goscript_frame.WindowUpdateFrame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_frame.WindowUpdateFrame>(f)
		let cc: ClientConn | $.VarRef<ClientConn> | null = $.pointerValue<clientConnReadLoop>(rl).cc
		let cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		let cs: clientStream | $.VarRef<clientStream> | null = await (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).streamByID((f$ as __goscript_frame.WindowUpdateFrame).FrameHeader.StreamID) : clientConnReadLoop.prototype.streamByID.call(rl, (f$ as __goscript_frame.WindowUpdateFrame).FrameHeader.StreamID))
		if (((f$ as __goscript_frame.WindowUpdateFrame).FrameHeader.StreamID != 0) && (cs == null)) {
			return null
		}

		await (cc$ as ClientConn).mu.Lock()
		const __goscriptDeferCallee28 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee28() })

		let fl: __goscript_flow.outflow | $.VarRef<__goscript_flow.outflow> | null = $.fieldRef((cc$ as ClientConn)._fields, "flow")
		if (cs != null) {
			fl = $.fieldRef($.pointerValue<clientStream>(cs)._fields, "flow")
		}
		if (!(fl !== null && (fl as any).__isVarRef !== true && (fl as any).__goValue === undefined ? ((fl as any) as __goscript_flow.outflow).add($.int((f$ as __goscript_frame.WindowUpdateFrame).Increment, 32)) : __goscript_flow.outflow.prototype.add.call(fl, $.int((f$ as __goscript_frame.WindowUpdateFrame).Increment, 32)))) {
			// For stream, the sender sends RST_STREAM with an error code of FLOW_CONTROL_ERROR
			if (cs != null) {
				await clientConnReadLoop.prototype.endStreamError.call(rl, cs, $.interfaceValue<$.GoError>(new __goscript_errors.StreamError({StreamID: (f$ as __goscript_frame.WindowUpdateFrame).FrameHeader.StreamID, Code: 3}, true), "http2.StreamError", "http2.StreamError"))
				return null
			}

			return $.namedValueInterfaceValue<$.GoError>($.uint(3, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))
		}
		sync.Cond.prototype.Broadcast.call($.pointerValue<sync.Cond>((cc$ as ClientConn).cond))
		return null
	}

	public async run(): globalThis.Promise<$.GoError> {
		const rl: clientConnReadLoop | $.VarRef<clientConnReadLoop> | null = this;
		let cc: ClientConn | $.VarRef<ClientConn> | null = $.pointerValue<clientConnReadLoop>(rl).cc
		let cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		let gotSettings = false
		let readIdleTimeout = $.pointerValue<Transport>((cc$ as ClientConn).t).ReadIdleTimeout
		let t: __goscript_timer.timer | null = null! as __goscript_timer.timer | null
		if (readIdleTimeout != 0n) {
			t = await Transport.prototype.afterFunc.call((cc$ as ClientConn).t, readIdleTimeout, $.functionValue(((__receiver) => () => __receiver.healthCheck())((cc$ as ClientConn)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*ClientConn).healthCheck-fm"))
		}
		while (true) {
			let [f, err] = await __goscript_frame.Framer.prototype.ReadFrame.call((cc$ as ClientConn).fr)
			if (t != null) {
				void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as __goscript_timer.timer) : $.pointerValue<__goscript_timer.timer>(t)).Reset(readIdleTimeout), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if (err != null) {
				await ClientConn.prototype.vlogf.call(cc, "http2: Transport readFrame error on conn %p: (%T) %v", $.arrayToSlice<any>([$.interfaceValue(cc, "*http2.ClientConn", /* @__PURE__ */ $.pointerType("http2.ClientConn")), (err as any), (err as any)]))
			}
			{
				let [se, ok] = $.typeAssertTuple<__goscript_errors.StreamError>(err, "http2.StreamError")
				if (ok) {
					{
						let cs: clientStream | $.VarRef<clientStream> | null = await (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).streamByID(se.StreamID) : clientConnReadLoop.prototype.streamByID.call(rl, se.StreamID))
						if (cs != null) {
							if (se.Cause == null) {
								se.Cause = $.pointerValue<__goscript_frame.Framer>((cc$ as ClientConn).fr).errDetail
							}
							await (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).endStreamError(cs, $.interfaceValue<$.GoError>((se).clone(), "http2.StreamError", "http2.StreamError")) : clientConnReadLoop.prototype.endStreamError.call(rl, cs, $.interfaceValue<$.GoError>((se).clone(), "http2.StreamError", "http2.StreamError")))
						}
					}
					continue
				} else {
					if (err != null) {
						await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).countReadFrameError(err) : ClientConn.prototype.countReadFrameError.call(cc, err))
						return err
					}
				}
			}
			if (__goscript_http2.VerboseLogs) {
				await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).vlogf("http2: Transport received %s", $.arrayToSlice<any>([await __goscript_frame.summarizeFrame(f)])) : ClientConn.prototype.vlogf.call(cc, "http2: Transport received %s", $.arrayToSlice<any>([await __goscript_frame.summarizeFrame(f)])))
			}
			if (!gotSettings) {
				{
					let [, ok] = $.typeAssertTuple<__goscript_frame.SettingsFrame | $.VarRef<__goscript_frame.SettingsFrame> | null>(f, /* @__PURE__ */ $.pointerType("http2.SettingsFrame"))
					if (!ok) {
						await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).logf("protocol error: received %T before a SETTINGS frame", $.arrayToSlice<any>([(f as any)])) : ClientConn.prototype.logf.call(cc, "protocol error: received %T before a SETTINGS frame", $.arrayToSlice<any>([(f as any)])))
						return $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))
					}
				}
				gotSettings = true
			}

			{
				const __goscriptTypeSwitchValue = f
				switch (true) {
					case $.typeAssert<__goscript_frame.MetaHeadersFrame | $.VarRef<__goscript_frame.MetaHeadersFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")).ok:
						{
							let f: __goscript_frame.MetaHeadersFrame | $.VarRef<__goscript_frame.MetaHeadersFrame> | null = $.typeAssert<__goscript_frame.MetaHeadersFrame | $.VarRef<__goscript_frame.MetaHeadersFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")).value
							err = await (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).processHeaders(f) : clientConnReadLoop.prototype.processHeaders.call(rl, f))
						}
						break
					case $.typeAssert<__goscript_frame.DataFrame | $.VarRef<__goscript_frame.DataFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.DataFrame")).ok:
						{
							let f: __goscript_frame.DataFrame | $.VarRef<__goscript_frame.DataFrame> | null = $.typeAssert<__goscript_frame.DataFrame | $.VarRef<__goscript_frame.DataFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.DataFrame")).value
							err = await (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).processData(f) : clientConnReadLoop.prototype.processData.call(rl, f))
						}
						break
					case $.typeAssert<__goscript_frame.GoAwayFrame | $.VarRef<__goscript_frame.GoAwayFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.GoAwayFrame")).ok:
						{
							let f: __goscript_frame.GoAwayFrame | $.VarRef<__goscript_frame.GoAwayFrame> | null = $.typeAssert<__goscript_frame.GoAwayFrame | $.VarRef<__goscript_frame.GoAwayFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.GoAwayFrame")).value
							err = await (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).processGoAway(f) : clientConnReadLoop.prototype.processGoAway.call(rl, f))
						}
						break
					case $.typeAssert<__goscript_frame.RSTStreamFrame | $.VarRef<__goscript_frame.RSTStreamFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.RSTStreamFrame")).ok:
						{
							let f: __goscript_frame.RSTStreamFrame | $.VarRef<__goscript_frame.RSTStreamFrame> | null = $.typeAssert<__goscript_frame.RSTStreamFrame | $.VarRef<__goscript_frame.RSTStreamFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.RSTStreamFrame")).value
							err = await (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).processResetStream(f) : clientConnReadLoop.prototype.processResetStream.call(rl, f))
						}
						break
					case $.typeAssert<__goscript_frame.SettingsFrame | $.VarRef<__goscript_frame.SettingsFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.SettingsFrame")).ok:
						{
							let f: __goscript_frame.SettingsFrame | $.VarRef<__goscript_frame.SettingsFrame> | null = $.typeAssert<__goscript_frame.SettingsFrame | $.VarRef<__goscript_frame.SettingsFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.SettingsFrame")).value
							err = await (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).processSettings(f) : clientConnReadLoop.prototype.processSettings.call(rl, f))
						}
						break
					case $.typeAssert<__goscript_frame.PushPromiseFrame | $.VarRef<__goscript_frame.PushPromiseFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.PushPromiseFrame")).ok:
						{
							let f: __goscript_frame.PushPromiseFrame | $.VarRef<__goscript_frame.PushPromiseFrame> | null = $.typeAssert<__goscript_frame.PushPromiseFrame | $.VarRef<__goscript_frame.PushPromiseFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.PushPromiseFrame")).value
							err = (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).processPushPromise(f) : clientConnReadLoop.prototype.processPushPromise.call(rl, f))
						}
						break
					case $.typeAssert<__goscript_frame.WindowUpdateFrame | $.VarRef<__goscript_frame.WindowUpdateFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.WindowUpdateFrame")).ok:
						{
							let f: __goscript_frame.WindowUpdateFrame | $.VarRef<__goscript_frame.WindowUpdateFrame> | null = $.typeAssert<__goscript_frame.WindowUpdateFrame | $.VarRef<__goscript_frame.WindowUpdateFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.WindowUpdateFrame")).value
							err = await (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).processWindowUpdate(f) : clientConnReadLoop.prototype.processWindowUpdate.call(rl, f))
						}
						break
					case $.typeAssert<__goscript_frame.PingFrame | $.VarRef<__goscript_frame.PingFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.PingFrame")).ok:
						{
							let f: __goscript_frame.PingFrame | $.VarRef<__goscript_frame.PingFrame> | null = $.typeAssert<__goscript_frame.PingFrame | $.VarRef<__goscript_frame.PingFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.PingFrame")).value
							err = await (rl !== null && (rl as any).__isVarRef !== true && (rl as any).__goValue === undefined ? ((rl as any) as clientConnReadLoop).processPing(f) : clientConnReadLoop.prototype.processPing.call(rl, f))
						}
						break
					default:
						{
							let f: any = __goscriptTypeSwitchValue
							await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).logf("Transport: unhandled response frame type %T", $.arrayToSlice<any>([(f as any)])) : ClientConn.prototype.logf.call(cc, "Transport: unhandled response frame type %T", $.arrayToSlice<any>([(f as any)])))
						}
						break
				}
			}
			if (err != null) {
				if (__goscript_http2.VerboseLogs) {
					await ClientConn.prototype.vlogf.call(cc, "http2: Transport conn %p received error from processing frame %v: %v", $.arrayToSlice<any>([$.interfaceValue(cc, "*http2.ClientConn", /* @__PURE__ */ $.pointerType("http2.ClientConn")), await __goscript_frame.summarizeFrame(f), (err as any)]))
				}
				return err
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async streamByID(id: number): globalThis.Promise<clientStream | $.VarRef<clientStream> | null> {
		const rl: clientConnReadLoop | $.VarRef<clientConnReadLoop> | null = this;
		using __defer = new $.DisposableStack()
		const rl$: clientConnReadLoop = rl == null ? $.pointerTarget<clientConnReadLoop>(rl) : (rl as any).__isVarRef === true ? (rl as any).value : (rl as any).__goValue === undefined ? (rl as any) : $.pointerTarget<clientConnReadLoop>(rl)
		await $.pointerValue<ClientConn>((rl$ as clientConnReadLoop).cc).mu.Lock()
		const __goscriptDeferCallee29 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<ClientConn>((rl$ as clientConnReadLoop).cc).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee29() })
		let cs: clientStream | $.VarRef<clientStream> | null = $.mapGet<number, clientStream | $.VarRef<clientStream> | null, clientStream | $.VarRef<clientStream> | null>($.pointerValue<ClientConn>((rl$ as clientConnReadLoop).cc).streams, id, null)[0]
		if ((cs != null) && !$.pointerValue<clientStream>(cs).readAborted) {
			return cs
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"http2.clientConnReadLoop",
		() => new clientConnReadLoop(),
		() => [$.methodSignature("cleanup", [], [], true), $.methodSignature("endStream", [["cs", /* @__PURE__ */ $.pointerType("http2.clientStream")]], [], true), $.methodSignature("endStreamError", [["cs", /* @__PURE__ */ $.pointerType("http2.clientStream")], ["err", "error"]], [], true), $.methodSignature("handleResponse", [["cs", /* @__PURE__ */ $.pointerType("http2.clientStream")], ["f", /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")]], [/* @__PURE__ */ $.pointerType("http.Response"), "error"], true), $.methodSignature("processData", [["f", /* @__PURE__ */ $.pointerType("http2.DataFrame")]], ["error"], true), $.methodSignature("processGoAway", [["f", /* @__PURE__ */ $.pointerType("http2.GoAwayFrame")]], ["error"], true), $.methodSignature("processHeaders", [["f", /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")]], ["error"], true), $.methodSignature("processPing", [["f", /* @__PURE__ */ $.pointerType("http2.PingFrame")]], ["error"], true), $.methodSignature("processPushPromise", [["f", /* @__PURE__ */ $.pointerType("http2.PushPromiseFrame")]], ["error"], true), $.methodSignature("processResetStream", [["f", /* @__PURE__ */ $.pointerType("http2.RSTStreamFrame")]], ["error"], true), $.methodSignature("processSettings", [["f", /* @__PURE__ */ $.pointerType("http2.SettingsFrame")]], ["error"], true), $.methodSignature("processSettingsNoWrite", [["f", /* @__PURE__ */ $.pointerType("http2.SettingsFrame")]], ["error"], true), $.methodSignature("processTrailers", [["cs", /* @__PURE__ */ $.pointerType("http2.clientStream")], ["f", /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")]], ["error"], true), $.methodSignature("processWindowUpdate", [["f", /* @__PURE__ */ $.pointerType("http2.WindowUpdateFrame")]], ["error"], true), $.methodSignature("run", [], ["error"], true), $.methodSignature("streamByID", [["id", /* @__PURE__ */ $.basicType("uint32")]], [/* @__PURE__ */ $.pointerType("http2.clientStream")], true)],
		clientConnReadLoop,
		() => [/* @__PURE__ */ $.structField("_", "http2.incomparable", [0], 0, false, { key: "_blank0", pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("cc", /* @__PURE__ */ $.pointerType("http2.ClientConn"), [1], 0, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class GoAwayError {
	public get LastStreamID(): number {
		return this._fields.LastStreamID
	}

	public set LastStreamID(value: number) {
		this._fields.LastStreamID = value
	}

	public get ErrCode(): __goscript_errors.ErrCode {
		return this._fields.ErrCode
	}

	public set ErrCode(value: __goscript_errors.ErrCode) {
		this._fields.ErrCode = value
	}

	public get DebugData(): string {
		return this._fields.DebugData
	}

	public set DebugData(value: string) {
		this._fields.DebugData = value
	}

	public _fields: {
		LastStreamID: number
		ErrCode: __goscript_errors.ErrCode
		DebugData: string
	}

	constructor(init?: Partial<{LastStreamID?: number, ErrCode?: __goscript_errors.ErrCode, DebugData?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			LastStreamID: init?.LastStreamID ?? (0 as number),
			ErrCode: init?.ErrCode ?? (0 as __goscript_errors.ErrCode),
			DebugData: init?.DebugData ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GoAwayError {
		return new GoAwayError(this, true)
	}

	public __goscriptAssign(source: GoAwayError): void {
		const target = this._fields
		const values = source._fields
		target.LastStreamID = values.LastStreamID
		target.ErrCode = values.ErrCode
		target.DebugData = values.DebugData
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprintf("http2: server sent GOAWAY and closed the connection; LastStreamID=%v, ErrCode=%v, debug=%q", $.basicInterfaceValue(e.LastStreamID, "uint32"), $.namedValueInterfaceValue<any>(e.ErrCode, "http2.ErrCode", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), e.DebugData)
	}

	static __typeInfo = $.registerStructType(
		"http2.GoAwayError",
		() => new GoAwayError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		GoAwayError,
		() => [/* @__PURE__ */ $.structField("LastStreamID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true), /* @__PURE__ */ $.structField("ErrCode", /* @__PURE__ */ $.basicType("uint32", "http2.ErrCode"), [1], 4, true), /* @__PURE__ */ $.structField("DebugData", /* @__PURE__ */ $.basicType("string"), [2], 8, true)]
	)
}

export class transportResponseBody {
	public get cs(): clientStream | $.VarRef<clientStream> | null {
		return this._fields.cs
	}

	public set cs(value: clientStream | $.VarRef<clientStream> | null) {
		this._fields.cs = value
	}

	public _fields: {
		cs: clientStream | $.VarRef<clientStream> | null
	}

	constructor(init?: Partial<{cs?: clientStream | $.VarRef<clientStream> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			cs: init?.cs ?? (null! as clientStream | $.VarRef<clientStream> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): transportResponseBody {
		return new transportResponseBody(this, true)
	}

	public __goscriptAssign(source: transportResponseBody): void {
		const target = this._fields
		const values = source._fields
		target.cs = values.cs
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const b = this;
		let cs: clientStream | $.VarRef<clientStream> | null = b.cs
		let cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		let cc: ClientConn | $.VarRef<ClientConn> | null = (cs$ as clientStream).cc
		let cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)

		await (cs$ as clientStream).bufPipe.BreakWithError(errClosedResponseBody)
		await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).abortStream(errClosedResponseBody) : clientStream.prototype.abortStream.call(cs, errClosedResponseBody))

		let unread = await (cs$ as clientStream).bufPipe.Len()
		if (unread > 0) {
			await (cc$ as ClientConn).mu.Lock()
			// Return connection-level flow control.
			let connAdd = (cc$ as ClientConn).inflow.add(unread)
			void (cc$ as ClientConn).mu.Unlock()

			// TODO(dneil): Acquiring this mutex can block indefinitely.
			// Move flow control return to a goroutine?
			await (cc$ as ClientConn).wmu.Lock()
			// Return connection-level flow control.
			if (connAdd > 0) {
				await __goscript_frame.Framer.prototype.WriteWindowUpdate.call((cc$ as ClientConn).fr, 0, $.uint(connAdd, 32))
			}
			await bufio.Writer.prototype.Flush.call((cc$ as ClientConn).bw)
			void (cc$ as ClientConn).wmu.Unlock()
		}

		const [__goscriptSelect15HasReturn, __goscriptSelect15Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: false,
				channel: (cs$ as clientStream).donec,
			},
			{
				id: 1,
				isSend: false,
				channel: ((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((cs$ as clientStream).ctx).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect15Result) => {
					return null
				}
			},
			{
				id: 2,
				isSend: false,
				channel: (cs$ as clientStream).reqCancel,
				onSelected: async (__goscriptSelect15Result) => {
					return errRequestCanceled
				}
			}
		], false)
		if (__goscriptSelect15HasReturn) {
			return __goscriptSelect15Value
		}
		return null
	}

	public async Read(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const b = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		using __defer = new $.DisposableStack()
		let cs: clientStream | $.VarRef<clientStream> | null = b.cs
		let cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		let cc: ClientConn | $.VarRef<ClientConn> | null = (cs$ as clientStream).cc
		let cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)

		if ((cs$ as clientStream).readErr != null) {
			return [0, (cs$ as clientStream).readErr]
		}
		let __goscriptTuple16: any = await $.pointerValue<clientStream>(b.cs).bufPipe.Read(p)
		n = __goscriptTuple16[0]
		err = __goscriptTuple16[1]
		if ((cs$ as clientStream).bytesRemain != -1n) {
			if ($.int64(n) > (cs$ as clientStream).bytesRemain) {
				n = $.int((cs$ as clientStream).bytesRemain)
				if (err == null) {
					err = errors.New("net/http: server replied with more than declared Content-Length; truncated")
					await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).abortStream(err) : clientStream.prototype.abortStream.call(cs, err))
				}
				;(cs$ as clientStream).readErr = err
				return [$.int((cs$ as clientStream).bytesRemain), err]
			}
			;(cs$ as clientStream).bytesRemain = $.int64Sub((cs$ as clientStream).bytesRemain, $.int64(n))
			if (($.comparableEqual(err, io.EOF)) && ((cs$ as clientStream).bytesRemain > 0n)) {
				err = io.ErrUnexpectedEOF;
				;(cs$ as clientStream).readErr = err
				return [n, err]
			}
		}
		if (n == 0) {
			// No flow control tokens to send back.
			return [n, err]
		}

		await (cc$ as ClientConn).mu.Lock()
		let connAdd = (cc$ as ClientConn).inflow.add(n)
		let streamAdd: number = 0
		if (err == null) {
			streamAdd = (cs$ as clientStream).inflow.add(n)
		}
		void (cc$ as ClientConn).mu.Unlock()

		if ((connAdd != 0) || (streamAdd != 0)) {
			await (cc$ as ClientConn).wmu.Lock()
			const __goscriptDeferCallee30 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).wmu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee30() })
			if (connAdd != 0) {
				await __goscript_frame.Framer.prototype.WriteWindowUpdate.call((cc$ as ClientConn).fr, 0, __goscript_http2.mustUint31(connAdd))
			}
			if (streamAdd != 0) {
				await __goscript_frame.Framer.prototype.WriteWindowUpdate.call((cc$ as ClientConn).fr, (cs$ as clientStream).ID, __goscript_http2.mustUint31(streamAdd))
			}
			await bufio.Writer.prototype.Flush.call((cc$ as ClientConn).bw)
		}
		__defer.dispose()
		return [n, err]
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"http2.transportResponseBody",
		() => new transportResponseBody(),
		() => [$.methodSignature("Close", [], ["error"]), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])],
		transportResponseBody,
		() => [/* @__PURE__ */ $.structField("cs", /* @__PURE__ */ $.pointerType("http2.clientStream"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class noBodyReader {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): noBodyReader {
		return new noBodyReader(this, true)
	}

	public __goscriptAssign(source: noBodyReader): void {
	}

	public Close(): $.GoError {
		return null
	}

	public Read(_p0: $.Slice<number>): [number, $.GoError] {
		return [0, io.EOF]
	}

	static __typeInfo = $.registerStructType(
		"http2.noBodyReader",
		() => new noBodyReader(),
		() => [$.methodSignature("Close", [], ["error"]), $.methodSignature("Read", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [/* @__PURE__ */ $.basicType("int"), "error"])],
		noBodyReader,
		() => []
	)
}

export class missingBody {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): missingBody {
		return new missingBody(this, true)
	}

	public __goscriptAssign(source: missingBody): void {
	}

	public Close(): $.GoError {
		return null
	}

	public Read(_p0: $.Slice<number>): [number, $.GoError] {
		return [0, io.ErrUnexpectedEOF]
	}

	static __typeInfo = $.registerStructType(
		"http2.missingBody",
		() => new missingBody(),
		() => [$.methodSignature("Close", [], ["error"]), $.methodSignature("Read", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [/* @__PURE__ */ $.basicType("int"), "error"])],
		missingBody,
		() => []
	)
}

export class erringRoundTripper {
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		err: $.GoError
	}

	constructor(init?: Partial<{err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): erringRoundTripper {
		return new erringRoundTripper(this, true)
	}

	public __goscriptAssign(source: erringRoundTripper): void {
		const target = this._fields
		const values = source._fields
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public RoundTrip(_p0: http.Request | $.VarRef<http.Request> | null): [http.Response | $.VarRef<http.Response> | null, $.GoError] {
		const rt = this;
		return [null, rt.err]
	}

	public RoundTripErr(): $.GoError {
		const rt = this;
		return rt.err
	}

	static __typeInfo = $.registerStructType(
		"http2.erringRoundTripper",
		() => new erringRoundTripper(),
		() => [$.methodSignature("RoundTrip", [/* @__PURE__ */ $.pointerType("http.Request")], [/* @__PURE__ */ $.pointerType("http.Response"), "error"]), $.methodSignature("RoundTripErr", [], ["error"])],
		erringRoundTripper,
		() => [/* @__PURE__ */ $.structField("err", "error", [0], 0, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class gzipReader {
	public get _blank0(): __goscript_http2.incomparable {
		return this._fields._blank0
	}

	public set _blank0(value: __goscript_http2.incomparable) {
		this._fields._blank0 = value
	}

	public get body(): io.ReadCloser | null {
		return this._fields.body
	}

	public set body(value: io.ReadCloser | null) {
		this._fields.body = value
	}

	public get zr(): gzip.Reader | $.VarRef<gzip.Reader> | null {
		return this._fields.zr
	}

	public set zr(value: gzip.Reader | $.VarRef<gzip.Reader> | null) {
		this._fields.zr = value
	}

	public get zerr(): $.GoError {
		return this._fields.zerr
	}

	public set zerr(value: $.GoError) {
		this._fields.zerr = value
	}

	public _fields: {
		_blank0: __goscript_http2.incomparable
		body: io.ReadCloser | null
		zr: gzip.Reader | $.VarRef<gzip.Reader> | null
		zerr: $.GoError
	}

	constructor(init?: Partial<{_blank0?: __goscript_http2.incomparable, body?: io.ReadCloser | null, zr?: gzip.Reader | $.VarRef<gzip.Reader> | null, zerr?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "http2.incomparable") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			body: init?.body ?? (null! as io.ReadCloser | null),
			zr: init?.zr ?? (null! as gzip.Reader | $.VarRef<gzip.Reader> | null),
			zerr: init?.zerr ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): gzipReader {
		return new gzipReader(this, true)
	}

	public __goscriptAssign(source: gzipReader): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "http2.incomparable")
		target.body = $.assignFieldValue(target.body, values.body, "io.ReadCloser")
		target.zr = values.zr
		target.zerr = $.assignFieldValue(target.zerr, values.zerr, "error")
	}

	public async Close(): globalThis.Promise<$.GoError> {
		let gz: gzipReader | $.VarRef<gzipReader> | null = this;
		const gz$: gzipReader = gz == null ? $.pointerTarget<gzipReader>(gz) : (gz as any).__isVarRef === true ? (gz as any).value : (gz as any).__goValue === undefined ? (gz as any) : $.pointerTarget<gzipReader>(gz)
		{
			let err = await $.pointerValue<Exclude<io.ReadCloser, null>>((gz$ as gzipReader).body).Close()
			if (err != null) {
				return err
			}
		}
		;(gz$ as gzipReader).zerr = fs.ErrClosed
		return null
	}

	public async Read(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let gz: gzipReader | $.VarRef<gzipReader> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const gz$: gzipReader = gz == null ? $.pointerTarget<gzipReader>(gz) : (gz as any).__isVarRef === true ? (gz as any).value : (gz as any).__goValue === undefined ? (gz as any) : $.pointerTarget<gzipReader>(gz)
		if ((gz$ as gzipReader).zerr != null) {
			return [0, (gz$ as gzipReader).zerr]
		}
		if ((gz$ as gzipReader).zr == null) {
			let __goscriptTuple17: any = await gzip.NewReader($.pointerValueOrNil(((gz$ as gzipReader).body as io.Reader | null))!);
			;(gz$ as gzipReader).zr = __goscriptTuple17[0]
			err = __goscriptTuple17[1]
			if (err != null) {
				;(gz$ as gzipReader).zerr = err
				return [0, err]
			}
		}
		return gzip.Reader.prototype.Read.call($.pointerValue<gzip.Reader>((gz$ as gzipReader).zr), p)
	}

	static __typeInfo = $.registerStructType(
		"http2.gzipReader",
		() => new gzipReader(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		gzipReader,
		() => [/* @__PURE__ */ $.structField("_", "http2.incomparable", [0], 0, false, { key: "_blank0", pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("body", "io.ReadCloser", [1], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("zr", /* @__PURE__ */ $.pointerType("gzip.Reader"), [2], 16, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("zerr", "error", [3], 24, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class errorReader {
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		err: $.GoError
	}

	constructor(init?: Partial<{err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errorReader {
		return new errorReader(this, true)
	}

	public __goscriptAssign(source: errorReader): void {
		const target = this._fields
		const values = source._fields
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public Read(p: $.Slice<number>): [number, $.GoError] {
		const r = this;
		return [0, r.err]
	}

	static __typeInfo = $.registerStructType(
		"http2.errorReader",
		() => new errorReader(),
		() => [$.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"])],
		errorReader,
		() => [/* @__PURE__ */ $.structField("err", "error", [0], 0, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class noDialH2RoundTripper {
	public get Transport(): Transport | $.VarRef<Transport> | null {
		return this._fields.Transport
	}

	public set Transport(value: Transport | $.VarRef<Transport> | null) {
		this._fields.Transport = value
	}

	public _fields: {
		Transport: Transport | $.VarRef<Transport> | null
	}

	constructor(init?: Partial<{Transport?: Transport | $.VarRef<Transport> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Transport: init?.Transport ?? (null! as Transport | $.VarRef<Transport> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): noDialH2RoundTripper {
		return new noDialH2RoundTripper(this, true)
	}

	public __goscriptAssign(source: noDialH2RoundTripper): void {
		const target = this._fields
		const values = source._fields
		target.Transport = values.Transport
	}

	public async RoundTrip(req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<[http.Response | $.VarRef<http.Response> | null, $.GoError]> {
		const rt = this;
		let __goscriptTuple18: any = await Transport.prototype.RoundTrip.call(rt.Transport, req)
		let res: http.Response | $.VarRef<http.Response> | null = __goscriptTuple18[0]
		let err = __goscriptTuple18[1]
		if (isNoCachedConnError(err)) {
			return [null, http.ErrSkipAltProtocol]
		}
		return [res, err]
	}

	public async CloseIdleConnections(): globalThis.Promise<any> {
		return await $.pointerValue<Transport>(this.Transport).CloseIdleConnections()
	}

	public async NewClientConn(c: any): globalThis.Promise<any> {
		return await $.pointerValue<Transport>(this.Transport).NewClientConn(c)
	}

	public async RoundTripOpt(req: any, opt: any): globalThis.Promise<any> {
		return await $.pointerValue<Transport>(this.Transport).RoundTripOpt(req, opt)
	}

	public async afterFunc(d: any, f: any): globalThis.Promise<any> {
		return await $.pointerValue<Transport>(this.Transport).afterFunc(d, f)
	}

	public async connPool(): globalThis.Promise<any> {
		return await $.pointerValue<Transport>(this.Transport).connPool()
	}

	public async contextWithTimeout(ctx: any, d: any): globalThis.Promise<any> {
		return await $.pointerValue<Transport>(this.Transport).contextWithTimeout(ctx, d)
	}

	public async dialClientConn(ctx: any, addr: any, singleUse: any): globalThis.Promise<any> {
		return await $.pointerValue<Transport>(this.Transport).dialClientConn(ctx, addr, singleUse)
	}

	public async dialTLS(ctx: any, network: any, addr: any, tlsCfg: any): globalThis.Promise<any> {
		return await $.pointerValue<Transport>(this.Transport).dialTLS(ctx, network, addr, tlsCfg)
	}

	public async dialTLSWithContext(ctx: any, network: any, addr: any, cfg: any): globalThis.Promise<any> {
		return await $.pointerValue<Transport>(this.Transport).dialTLSWithContext(ctx, network, addr, cfg)
	}

	public disableCompression(): any {
		return $.pointerValue<Transport>(this.Transport).disableCompression()
	}

	public disableKeepAlives(): any {
		return $.pointerValue<Transport>(this.Transport).disableKeepAlives()
	}

	public expectContinueTimeout(): any {
		return $.pointerValue<Transport>(this.Transport).expectContinueTimeout()
	}

	public idleConnTimeout(): any {
		return $.pointerValue<Transport>(this.Transport).idleConnTimeout()
	}

	public initConnPool(): any {
		return $.pointerValue<Transport>(this.Transport).initConnPool()
	}

	public async logf(format: any, args: any): globalThis.Promise<any> {
		return await $.pointerValue<Transport>(this.Transport).logf(format, args)
	}

	public async markNewGoroutine(): globalThis.Promise<any> {
		return await $.pointerValue<Transport>(this.Transport).markNewGoroutine()
	}

	public maxDecoderHeaderTableSize(): any {
		return $.pointerValue<Transport>(this.Transport).maxDecoderHeaderTableSize()
	}

	public maxEncoderHeaderTableSize(): any {
		return $.pointerValue<Transport>(this.Transport).maxEncoderHeaderTableSize()
	}

	public maxFrameReadSize(): any {
		return $.pointerValue<Transport>(this.Transport).maxFrameReadSize()
	}

	public maxHeaderListSize(): any {
		return $.pointerValue<Transport>(this.Transport).maxHeaderListSize()
	}

	public async newClientConn(c: any, singleUse: any): globalThis.Promise<any> {
		return await $.pointerValue<Transport>(this.Transport).newClientConn(c, singleUse)
	}

	public async newTLSConfig(host: any): globalThis.Promise<any> {
		return await $.pointerValue<Transport>(this.Transport).newTLSConfig(host)
	}

	public async newTimer(d: any): globalThis.Promise<any> {
		return await $.pointerValue<Transport>(this.Transport).newTimer(d)
	}

	public pingTimeout(): any {
		return $.pointerValue<Transport>(this.Transport).pingTimeout()
	}

	public async vlogf(format: any, args: any): globalThis.Promise<any> {
		return await $.pointerValue<Transport>(this.Transport).vlogf(format, args)
	}

	static __typeInfo = $.registerStructType(
		"http2.noDialH2RoundTripper",
		() => new noDialH2RoundTripper(),
		() => [$.methodSignature("RoundTrip", [["req", /* @__PURE__ */ $.pointerType("http.Request")]], [/* @__PURE__ */ $.pointerType("http.Response"), "error"]), $.methodSignature("CloseIdleConnections"), $.methodSignature("NewClientConn", [["c", "net.Conn"]], [/* @__PURE__ */ $.pointerType("http2.ClientConn"), "error"]), $.methodSignature("RoundTripOpt", [["req", /* @__PURE__ */ $.pointerType("http.Request")], ["opt", "http2.RoundTripOpt"]], [/* @__PURE__ */ $.pointerType("http.Response"), "error"]), $.methodSignature("afterFunc", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["f", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], [{ kind: $.TypeKind.Interface, methods: [$.methodSignature("C", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])] }]), $.methodSignature("connPool", [], ["http2.ClientConnPool"]), $.methodSignature("contextWithTimeout", [["ctx", "context.Context"], ["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["context.Context", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo)]), $.methodSignature("dialClientConn", [["ctx", "context.Context"], ["addr", /* @__PURE__ */ $.basicType("string")], ["singleUse", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.pointerType("http2.ClientConn"), "error"]), $.methodSignature("dialTLS", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["addr", /* @__PURE__ */ $.basicType("string")], ["tlsCfg", /* @__PURE__ */ $.pointerType("tls.Config")]], ["net.Conn", "error"]), $.methodSignature("dialTLSWithContext", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["addr", /* @__PURE__ */ $.basicType("string")], ["cfg", /* @__PURE__ */ $.pointerType("tls.Config")]], [/* @__PURE__ */ $.pointerType("tls.Conn"), "error"]), $.methodSignature("disableCompression", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("disableKeepAlives", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("expectContinueTimeout", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("idleConnTimeout", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("initConnPool"), $.methodSignature("logf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("markNewGoroutine"), $.methodSignature("maxDecoderHeaderTableSize", [], [/* @__PURE__ */ $.basicType("uint32")]), $.methodSignature("maxEncoderHeaderTableSize", [], [/* @__PURE__ */ $.basicType("uint32")]), $.methodSignature("maxFrameReadSize", [], [/* @__PURE__ */ $.basicType("uint32")]), $.methodSignature("maxHeaderListSize", [], [/* @__PURE__ */ $.basicType("uint32")]), $.methodSignature("newClientConn", [["c", "net.Conn"], ["singleUse", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.pointerType("http2.ClientConn"), "error"]), $.methodSignature("newTLSConfig", [["host", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("tls.Config")]), $.methodSignature("newTimer", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [{ kind: $.TypeKind.Interface, methods: [$.methodSignature("C", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])] }]), $.methodSignature("pingTimeout", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("vlogf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]])],
		noDialH2RoundTripper,
		() => [/* @__PURE__ */ $.structField("Transport", /* @__PURE__ */ $.pointerType("http2.Transport"), [0], 0, true, { anonymous: true })]
	)
}

export const transportDefaultConnFlow: number = 1073741824

export const transportDefaultStreamFlow: number = 4194304

export const defaultUserAgent: string = "Go-http-client/2.0"

export const initialMaxConcurrentStreams: number = 100

export const defaultMaxConcurrentStreams: number = 1000

export function ConfigureTransport(t1: http.Transport | $.VarRef<http.Transport> | null): $.GoError {
	let [, err] = ConfigureTransports(t1)
	return err
}

export function ConfigureTransports(t1: http.Transport | $.VarRef<http.Transport> | null): [Transport | $.VarRef<Transport> | null, $.GoError] {
	return configureTransports(t1)
}

export function configureTransports(t1: http.Transport | $.VarRef<http.Transport> | null): [Transport | $.VarRef<Transport> | null, $.GoError] {
	const t1$: http.Transport = t1 == null ? $.pointerTarget<http.Transport>(t1) : (t1 as any).__isVarRef === true ? (t1 as any).value : (t1 as any).__goValue === undefined ? (t1 as any) : $.pointerTarget<http.Transport>(t1)
	let connPool: __goscript_client_conn_pool.clientConnPool | $.VarRef<__goscript_client_conn_pool.clientConnPool> | null = new __goscript_client_conn_pool.clientConnPool()
	let t2: Transport | $.VarRef<Transport> | null = new Transport({ConnPool: $.interfaceValue<__goscript_client_conn_pool.ClientConnPool | null>(new __goscript_client_conn_pool.noDialClientConnPool({clientConnPool: connPool}, true), "http2.noDialClientConnPool", "http2.noDialClientConnPool"), t1: t1})
	$.pointerValue<__goscript_client_conn_pool.clientConnPool>(connPool).t = t2
	{
		let err = registerHTTPSProtocol(t1, new noDialH2RoundTripper({Transport: t2}, true))
		if (err != null) {
			return [null, err]
		}
	}
	if ((t1$ as http.Transport).TLSClientConfig == null) {
		;(t1$ as http.Transport).TLSClientConfig = new tls.Config()
	}
	if (!strSliceContains($.pointerValue<tls.Config>((t1$ as http.Transport).TLSClientConfig).NextProtos, "h2")) {
		$.pointerValue<tls.Config>((t1$ as http.Transport).TLSClientConfig).NextProtos = $.appendSlice($.arrayToSlice<string>(["h2"]), $.pointerValue<tls.Config>((t1$ as http.Transport).TLSClientConfig).NextProtos)
	}
	if (!strSliceContains($.pointerValue<tls.Config>((t1$ as http.Transport).TLSClientConfig).NextProtos, "http/1.1")) {
		$.pointerValue<tls.Config>((t1$ as http.Transport).TLSClientConfig).NextProtos = $.appendOne($.pointerValue<tls.Config>((t1$ as http.Transport).TLSClientConfig).NextProtos, "http/1.1")
	}
	let upgradeFn: ((authority: string, c: tls.Conn | $.VarRef<tls.Conn> | null) => http.RoundTripper | null | globalThis.Promise<http.RoundTripper | null>) | null = $.functionValue(async (authority: string, c: tls.Conn | $.VarRef<tls.Conn> | null): globalThis.Promise<http.RoundTripper | null> => {
		let addr = await authorityAddr("https", authority)
		{
			let [used, err] = await (connPool !== null && (connPool as any).__isVarRef !== true && (connPool as any).__goValue === undefined ? ((connPool as any) as __goscript_client_conn_pool.clientConnPool).addConnIfNeeded(addr, t2, c) : __goscript_client_conn_pool.clientConnPool.prototype.addConnIfNeeded.call(connPool, addr, t2, c))
			if (err != null) {
				const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Close())($.pointerValue<tls.Conn>(c)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "crypto/tls.(*Conn).Close-fm")
				queueMicrotask(async () => { await __goscriptDeferCallee0() })
				return $.interfaceValue<http.RoundTripper | null>(new erringRoundTripper({err: err}, true), "http2.erringRoundTripper", "http2.erringRoundTripper")
			} else {
				if (!used) {
					// Turns out we don't need this c.
					// For example, two goroutines made requests to the same host
					// at the same time, both kicking off TCP dials. (since protocol
					// was unknown)
					const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Close())($.pointerValue<tls.Conn>(c)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "crypto/tls.(*Conn).Close-fm")
					queueMicrotask(async () => { await __goscriptDeferCallee1() })
				}
			}
		}
		return $.interfaceValue<http.RoundTripper | null>(t2, "*http2.Transport", /* @__PURE__ */ $.pointerType("http2.Transport"))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("tls.Conn")], results: ["http.RoundTripper"] } as $.FunctionTypeInfo))
	{
		let m: globalThis.Map<string, ((authority: string, c: tls.Conn | $.VarRef<tls.Conn> | null) => http.RoundTripper | null | globalThis.Promise<http.RoundTripper | null>) | null> | null = (t1$ as http.Transport).TLSNextProto
		if ($.len(m) == 0) {
			;(t1$ as http.Transport).TLSNextProto = $.makeMap<string, ((_p0: string, _p1: tls.Conn | $.VarRef<tls.Conn> | null) => http.RoundTripper | null | globalThis.Promise<http.RoundTripper | null>) | null>([["h2", upgradeFn]])
		} else {
			$.mapSet(m, "h2", upgradeFn)
		}
	}
	return [t2, null]
}

export let got1xxFuncForTests: ((_p0: number, _p1: textproto.MIMEHeader) => $.GoError | globalThis.Promise<$.GoError>) | null = null! as ((_p0: number, _p1: textproto.MIMEHeader) => $.GoError | globalThis.Promise<$.GoError>) | null

export function __goscript_set_got1xxFuncForTests(__goscriptValue: ((_p0: number, _p1: textproto.MIMEHeader) => $.GoError | globalThis.Promise<$.GoError>) | null): void {
	got1xxFuncForTests = __goscriptValue
}

export function isNoCachedConnError(err: $.GoError): boolean {
	let [, ok] = $.typeAssertTuple<any>(err, { kind: $.TypeKind.Interface, methods: [{ name: "IsHTTP2NoCachedConnError", args: [], returns: [] }] })
	return ok
}

export let ErrNoCachedConn: $.GoError = $.interfaceValue<$.GoError>(new noCachedConnError(undefined, true), "http2.noCachedConnError", "http2.noCachedConnError")

export function __goscript_set_ErrNoCachedConn(__goscriptValue: $.GoError): void {
	ErrNoCachedConn = __goscriptValue
}

export async function authorityAddr(scheme: string, authority: string): globalThis.Promise<string> {
	let addr: string = ""
	let [host, port, err] = await net.SplitHostPort(authority)
	if (err != null) {
		host = authority
		port = ""
	}
	if ($.stringEqual(port, "")) {
		port = "443"
		if ($.stringEqual(scheme, "http")) {
			port = "80"
		}
	}
	{
		let [a, __goscriptShadow8] = await idna.ToASCII(host)
		if (__goscriptShadow8 == null) {
			host = a
		}
	}
	// IPv6 address literal, without a port:
	if (strings.HasPrefix(host, "[") && strings.HasSuffix(host, "]")) {
		return $.concatString(($.concatString(host, ":")), port)
	}
	return net.JoinHostPort(host, port)
}

export let errClientConnClosed: $.GoError = errors.New("http2: client conn is closed")

export function __goscript_set_errClientConnClosed(__goscriptValue: $.GoError): void {
	errClientConnClosed = __goscriptValue
}

export let errClientConnUnusable: $.GoError = errors.New("http2: client conn not usable")

export function __goscript_set_errClientConnUnusable(__goscriptValue: $.GoError): void {
	errClientConnUnusable = __goscriptValue
}

export let errClientConnGotGoAway: $.GoError = errors.New("http2: Transport received Server's graceful shutdown GOAWAY")

export function __goscript_set_errClientConnGotGoAway(__goscriptValue: $.GoError): void {
	errClientConnGotGoAway = __goscriptValue
}

export async function shouldRetryRequest(req: http.Request | $.VarRef<http.Request> | null, err: $.GoError): globalThis.Promise<[http.Request | $.VarRef<http.Request> | null, $.GoError]> {
	const req$: http.Request = req == null ? $.pointerTarget<http.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<http.Request>(req)
	if (!canRetryError(err)) {
		return [null, err]
	}
	// If the Body is nil (or http.NoBody), it's safe to reuse
	// this request and its Body.
	if (((req$ as http.Request).Body == null) || ($.comparableEqual((req$ as http.Request).Body, $.interfaceValue<io.ReadCloser | null>($.pointerValue<any>(http.NoBody), "http.noBody", "http.noBody")))) {
		return [req, null]
	}

	// If the request body can be reset back to its original
	// state via the optional req.GetBody, do that.
	if ((req$ as http.Request).GetBody != null) {
		let [body, __goscriptShadow9] = await (req$ as http.Request).GetBody!()
		if (__goscriptShadow9 != null) {
			return [null, __goscriptShadow9]
		}
		let newReq = $.varRef($.markAsStructValue($.cloneStructValue((req$ as http.Request))))
		newReq.value.Body = body
		return [newReq, null]
	}

	// The Request.Body can't reset back to the beginning, but we
	// don't seem to have started to read from it yet, so reuse
	// the request directly.
	if ($.comparableEqual(err, errClientConnUnusable)) {
		return [req, null]
	}

	return [null, fmt.Errorf("http2: Transport: cannot retry err [%v] after Request.Body was written; define Request.GetBody to avoid this error", (err as any))]
}

export function canRetryError(err: $.GoError): boolean {
	if (($.comparableEqual(err, errClientConnUnusable)) || ($.comparableEqual(err, errClientConnGotGoAway))) {
		return true
	}
	{
		let [se, ok] = $.typeAssertTuple<__goscript_errors.StreamError>(err, "http2.StreamError")
		if (ok) {
			if ((se.Code == 1) && ($.comparableEqual(se.Cause, __goscript_errors.errFromPeer))) {
				// See golang/go#47635, golang/go#42777
				return true
			}
			return se.Code == 7
		}
	}
	return false
}

export let shutdownEnterWaitStateHook: (() => void) | null = $.functionValue((): void => {
}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))

export function __goscript_set_shutdownEnterWaitStateHook(__goscriptValue: (() => void) | null): void {
	shutdownEnterWaitStateHook = __goscriptValue
}

export let errRequestCanceled: $.GoError = errors.New("net/http: request canceled")

export function __goscript_set_errRequestCanceled(__goscriptValue: $.GoError): void {
	errRequestCanceled = __goscriptValue
}

export async function commaSeparatedTrailers(req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<[string, $.GoError]> {
	const req$: http.Request = req == null ? $.pointerTarget<http.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<http.Request>(req)
	let keys: $.Slice<string> = $.makeSlice<string>(0, $.len((req$ as http.Request).Trailer), "string")
	for (let [k, __rangeValue] of (req$ as http.Request).Trailer?.entries() ?? []) {
		k = await __goscript_headermap.canonicalHeader(k)
		switch (k) {
			case "Transfer-Encoding":
			case "Trailer":
			case "Content-Length":
			{
				return ["", fmt.Errorf("invalid Trailer key %q", k)]
				break
			}
		}
		keys = $.appendOne(keys, k)
	}
	if ($.sliceLen(keys) > 0) {
		sort.Strings(keys)
		return [strings.Join(keys, ","), null]
	}
	return ["", null]
}

export async function checkConnHeaders(req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<$.GoError> {
	const req$: http.Request = req == null ? $.pointerTarget<http.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<http.Request>(req)
	{
		let v = await http.Header_Get((req$ as http.Request).Header, "Upgrade")
		if (!$.stringEqual(v, "")) {
			return fmt.Errorf("http2: invalid Upgrade request header: %q", $.interfaceValue($.mapGet<string, $.Slice<string>, $.Slice<string>>((req$ as http.Request).Header, "Upgrade", null)[0], "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
		}
	}
	{
		let vv: $.Slice<string> = $.mapGet<string, $.Slice<string>, $.Slice<string>>((req$ as http.Request).Header, "Transfer-Encoding", null)[0]
		if (($.sliceLen(vv) > 0) && (($.sliceLen(vv) > 1) || ((!$.stringEqual($.arrayIndex(vv!, 0), "")) && (!$.stringEqual($.arrayIndex(vv!, 0), "chunked"))))) {
			return fmt.Errorf("http2: invalid Transfer-Encoding request header: %q", $.interfaceValue(vv, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
		}
	}
	{
		let vv: $.Slice<string> = $.mapGet<string, $.Slice<string>, $.Slice<string>>((req$ as http.Request).Header, "Connection", null)[0]
		if (($.sliceLen(vv) > 0) && (($.sliceLen(vv) > 1) || (((!$.stringEqual($.arrayIndex(vv!, 0), "")) && !__goscript_ascii.asciiEqualFold($.arrayIndex(vv!, 0), "close")) && !__goscript_ascii.asciiEqualFold($.arrayIndex(vv!, 0), "keep-alive")))) {
			return fmt.Errorf("http2: invalid Connection request header: %q", $.interfaceValue(vv, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
		}
	}
	return null
}

export function actualContentLength(req: http.Request | $.VarRef<http.Request> | null): bigint {
	const req$: http.Request = req == null ? $.pointerTarget<http.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<http.Request>(req)
	if (((req$ as http.Request).Body == null) || ($.comparableEqual((req$ as http.Request).Body, $.interfaceValue<io.ReadCloser | null>($.pointerValue<any>(http.NoBody), "http.noBody", "http.noBody")))) {
		return 0n
	}
	if ((req$ as http.Request).ContentLength != 0n) {
		return (req$ as http.Request).ContentLength
	}
	return -1n
}

export let errStopReqBodyWrite: $.GoError = errors.New("http2: aborting request body write")

export function __goscript_set_errStopReqBodyWrite(__goscriptValue: $.GoError): void {
	errStopReqBodyWrite = __goscriptValue
}

export let errStopReqBodyWriteAndCancel: $.GoError = errors.New("http2: canceling request")

export function __goscript_set_errStopReqBodyWriteAndCancel(__goscriptValue: $.GoError): void {
	errStopReqBodyWriteAndCancel = __goscriptValue
}

export let errReqBodyTooLong: $.GoError = errors.New("http2: request body larger than specified content length")

export function __goscript_set_errReqBodyTooLong(__goscriptValue: $.GoError): void {
	errReqBodyTooLong = __goscriptValue
}

export let bufPools: sync.Pool[] = $.arrayValue(globalThis.Array.from({ length: 7 }, () => $.markAsStructValue(new sync.Pool())), /* @__PURE__ */ $.arrayType("sync.Pool", 7))

export function __goscript_set_bufPools(__goscriptValue: sync.Pool[]): void {
	bufPools = __goscriptValue
}

export function bufPoolIndex(size: number): number {
	if (size <= 16384) {
		return 0
	}
	size = size - (1)
	let __goscriptShadow10 = bits2.Len($.uint(size, 64))
	let index = __goscriptShadow10 - 14
	if (index >= 7) {
		return 6
	}
	return index
}

export async function validateHeaders(hdrs: http.Header): globalThis.Promise<string> {
	for (const [k, vv] of hdrs?.entries() ?? []) {
		if (!httpguts.ValidHeaderFieldName(k)) {
			return fmt.Sprintf("name %q", k)
		}
		for (let __goscriptRangeTarget4 = vv, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let v = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as string)
			if (!httpguts.ValidHeaderFieldValue(v)) {
				// Don't include the value in the error,
				// because it may be sensitive.
				return fmt.Sprintf("value for header %q", k)
			}
		}
	}
	return ""
}

export let errNilRequestURL: $.GoError = errors.New("http2: Request.URI is nil")

export function __goscript_set_errNilRequestURL(__goscriptValue: $.GoError): void {
	errNilRequestURL = __goscriptValue
}

export function shouldSendReqContentLength(method: string, contentLength: bigint): boolean {
	if (contentLength > 0n) {
		return true
	}
	if (contentLength < 0n) {
		return false
	}
	// For zero bodies, whether we send a content-length depends on the method.
	// It also kinda doesn't matter for http2 either way, with END_STREAM.
	switch (method) {
		case "POST":
		case "PUT":
		case "PATCH":
		{
			return true
			break
		}
		default:
		{
			return false
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function isEOFOrNetReadError(err: $.GoError): boolean {
	if ($.comparableEqual(err, io.EOF)) {
		return true
	}
	let __goscriptTuple15: any = $.typeAssertTuple<net.OpError | $.VarRef<net.OpError> | null>(err, /* @__PURE__ */ $.pointerType("net.OpError"))
	let ne: net.OpError | $.VarRef<net.OpError> | null = __goscriptTuple15[0]
	let ok = __goscriptTuple15[1]
	return ok && ($.stringEqual($.pointerValue<net.OpError>(ne).Op, "read"))
}

export let errClosedResponseBody: $.GoError = errors.New("http2: response body closed")

export function __goscript_set_errClosedResponseBody(__goscriptValue: $.GoError): void {
	errClosedResponseBody = __goscriptValue
}

export let errResponseHeaderListSize: $.GoError = errors.New("http2: response header list larger than advertised limit")

export function __goscript_set_errResponseHeaderListSize(__goscriptValue: $.GoError): void {
	errResponseHeaderListSize = __goscriptValue
}

export let errRequestHeaderListSize: $.GoError = errors.New("http2: request header list larger than peer's advertised limit")

export function __goscript_set_errRequestHeaderListSize(__goscriptValue: $.GoError): void {
	errRequestHeaderListSize = __goscriptValue
}

export let noBody: io.ReadCloser | null = $.interfaceValue<io.ReadCloser | null>(new noBodyReader(undefined, true), "http2.noBodyReader", "http2.noBodyReader")

export function __goscript_set_noBody(__goscriptValue: io.ReadCloser | null): void {
	noBody = __goscriptValue
}

export function strSliceContains(ss: $.Slice<string>, s: string): boolean {
	for (let __goscriptRangeTarget7 = ss, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as string)
		if ($.stringEqual(v, s)) {
			return true
		}
	}
	return false
}

export function isConnectionCloseRequest(req: http.Request | $.VarRef<http.Request> | null): boolean {
	const req$: http.Request = req == null ? $.pointerTarget<http.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<http.Request>(req)
	return (req$ as http.Request).Close || httpguts.HeaderValuesContainsToken($.mapGet<string, $.Slice<string>, $.Slice<string>>((req$ as http.Request).Header, "Connection", null)[0], "close")
}

export function registerHTTPSProtocol(t: http.Transport | $.VarRef<http.Transport> | null, rt: noDialH2RoundTripper): $.GoError {
	let err: $.GoError = null! as $.GoError
	const __defer = new $.DisposableStack()
	try {
		__defer.defer(() => { ((): void => {
			{
				let e = $.recover()
				if (e != null) {
					err = fmt.Errorf("%v", e)
				}
			}
		})() })
		http.Transport.prototype.RegisterProtocol.call($.pointerValue<http.Transport>(t), "https", $.interfaceValue<http.RoundTripper | null>((rt).clone(), "http2.noDialH2RoundTripper", "http2.noDialH2RoundTripper")!)
		const __goscriptReturn33: $.GoError = null
		err = __goscriptReturn33
		__defer.dispose()
		return err
		__defer.dispose()
	} catch (e) {
		__defer.disposePanic(e)
		if (!$.recovered(e)) {
			throw e
		}
	}
	return err
}

export async function traceGetConn(req: http.Request | $.VarRef<http.Request> | null, hostPort: string): globalThis.Promise<void> {
	let trace: httptrace.ClientTrace | $.VarRef<httptrace.ClientTrace> | null = await httptrace.ContextClientTrace(http.Request.prototype.Context.call($.pointerValue<http.Request>(req)))
	let trace$: httptrace.ClientTrace = trace == null ? $.pointerTarget<httptrace.ClientTrace>(trace) : (trace as any).__isVarRef === true ? (trace as any).value : (trace as any).__goValue === undefined ? (trace as any) : $.pointerTarget<httptrace.ClientTrace>(trace)
	if ((trace == null) || ((trace$ as httptrace.ClientTrace).GetConn == null)) {
		return
	}
	void (__goscriptAwait = (trace$ as httptrace.ClientTrace).GetConn!(hostPort), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function traceGotConn(req: http.Request | $.VarRef<http.Request> | null, cc: ClientConn | $.VarRef<ClientConn> | null, reused: boolean): globalThis.Promise<void> {
	const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
	let trace: httptrace.ClientTrace | $.VarRef<httptrace.ClientTrace> | null = await httptrace.ContextClientTrace(http.Request.prototype.Context.call($.pointerValue<http.Request>(req)))
	let trace$: httptrace.ClientTrace = trace == null ? $.pointerTarget<httptrace.ClientTrace>(trace) : (trace as any).__isVarRef === true ? (trace as any).value : (trace as any).__goValue === undefined ? (trace as any) : $.pointerTarget<httptrace.ClientTrace>(trace)
	if ((trace == null) || ((trace$ as httptrace.ClientTrace).GotConn == null)) {
		return
	}
	let ci = new httptrace.GotConnInfo({Conn: (cc$ as ClientConn).tconn}, true)
	ci.Reused = reused
	await (cc$ as ClientConn).mu.Lock()
	ci.WasIdle = ($.len((cc$ as ClientConn).streams) == 0) && reused
	if (ci.WasIdle && !$.markAsStructValue($.cloneStructValue((cc$ as ClientConn).lastActive)).IsZero()) {
		ci.IdleTime = time.Since($.markAsStructValue($.cloneStructValue((cc$ as ClientConn).lastActive)))
	}
	void (cc$ as ClientConn).mu.Unlock()

	void (__goscriptAwait = (trace$ as httptrace.ClientTrace).GotConn!((ci).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function traceWroteHeaders(trace: httptrace.ClientTrace | $.VarRef<httptrace.ClientTrace> | null): globalThis.Promise<void> {
	const trace$: httptrace.ClientTrace = trace == null ? $.pointerTarget<httptrace.ClientTrace>(trace) : (trace as any).__isVarRef === true ? (trace as any).value : (trace as any).__goValue === undefined ? (trace as any) : $.pointerTarget<httptrace.ClientTrace>(trace)
	if ((trace != null) && ((trace$ as httptrace.ClientTrace).WroteHeaders != null)) {
		void (__goscriptAwait = (trace$ as httptrace.ClientTrace).WroteHeaders!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
}

export async function traceGot100Continue(trace: httptrace.ClientTrace | $.VarRef<httptrace.ClientTrace> | null): globalThis.Promise<void> {
	const trace$: httptrace.ClientTrace = trace == null ? $.pointerTarget<httptrace.ClientTrace>(trace) : (trace as any).__isVarRef === true ? (trace as any).value : (trace as any).__goValue === undefined ? (trace as any) : $.pointerTarget<httptrace.ClientTrace>(trace)
	if ((trace != null) && ((trace$ as httptrace.ClientTrace).Got100Continue != null)) {
		void (__goscriptAwait = (trace$ as httptrace.ClientTrace).Got100Continue!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
}

export async function traceWait100Continue(trace: httptrace.ClientTrace | $.VarRef<httptrace.ClientTrace> | null): globalThis.Promise<void> {
	const trace$: httptrace.ClientTrace = trace == null ? $.pointerTarget<httptrace.ClientTrace>(trace) : (trace as any).__isVarRef === true ? (trace as any).value : (trace as any).__goValue === undefined ? (trace as any) : $.pointerTarget<httptrace.ClientTrace>(trace)
	if ((trace != null) && ((trace$ as httptrace.ClientTrace).Wait100Continue != null)) {
		void (__goscriptAwait = (trace$ as httptrace.ClientTrace).Wait100Continue!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
}

export async function traceWroteRequest(trace: httptrace.ClientTrace | $.VarRef<httptrace.ClientTrace> | null, err: $.GoError): globalThis.Promise<void> {
	const trace$: httptrace.ClientTrace = trace == null ? $.pointerTarget<httptrace.ClientTrace>(trace) : (trace as any).__isVarRef === true ? (trace as any).value : (trace as any).__goValue === undefined ? (trace as any) : $.pointerTarget<httptrace.ClientTrace>(trace)
	if ((trace != null) && ((trace$ as httptrace.ClientTrace).WroteRequest != null)) {
		void (__goscriptAwait = (trace$ as httptrace.ClientTrace).WroteRequest!(new httptrace.WroteRequestInfo({Err: err}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
}

export async function traceFirstResponseByte(trace: httptrace.ClientTrace | $.VarRef<httptrace.ClientTrace> | null): globalThis.Promise<void> {
	const trace$: httptrace.ClientTrace = trace == null ? $.pointerTarget<httptrace.ClientTrace>(trace) : (trace as any).__isVarRef === true ? (trace as any).value : (trace as any).__goValue === undefined ? (trace as any) : $.pointerTarget<httptrace.ClientTrace>(trace)
	if ((trace != null) && ((trace$ as httptrace.ClientTrace).GotFirstResponseByte != null)) {
		void (__goscriptAwait = (trace$ as httptrace.ClientTrace).GotFirstResponseByte!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
}

export function traceHasWroteHeaderField(trace: httptrace.ClientTrace | $.VarRef<httptrace.ClientTrace> | null): boolean {
	return (trace != null) && ($.pointerValue<httptrace.ClientTrace>(trace).WroteHeaderField != null)
}

export async function traceWroteHeaderField(trace: httptrace.ClientTrace | $.VarRef<httptrace.ClientTrace> | null, k: string, v: string): globalThis.Promise<void> {
	const trace$: httptrace.ClientTrace = trace == null ? $.pointerTarget<httptrace.ClientTrace>(trace) : (trace as any).__isVarRef === true ? (trace as any).value : (trace as any).__goValue === undefined ? (trace as any) : $.pointerTarget<httptrace.ClientTrace>(trace)
	if ((trace != null) && ((trace$ as httptrace.ClientTrace).WroteHeaderField != null)) {
		void (__goscriptAwait = (trace$ as httptrace.ClientTrace).WroteHeaderField!(k, $.arrayToSlice<string>([v])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
}

export function traceGot1xxResponseFunc(trace: httptrace.ClientTrace | $.VarRef<httptrace.ClientTrace> | null): ((_p0: number, _p1: textproto.MIMEHeader) => $.GoError | globalThis.Promise<$.GoError>) | null {
	if (trace != null) {
		return $.pointerValue<httptrace.ClientTrace>(trace).Got1xxResponse
	}
	return (null as ((_p0: number, _p1: textproto.MIMEHeader) => $.GoError | globalThis.Promise<$.GoError>) | null)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_errors.ErrCode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), stringToken: (receiver: any, ...args: any[]) => (__goscript_errors.ErrCode_stringToken as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint32", "http2.ErrCode"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("stringToken", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
