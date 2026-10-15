// Generated file based on server.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context2 from "@goscript/context/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as log from "@goscript/log/index.js"

import * as math from "@goscript/math/index.js"

import * as net from "@goscript/net/index.js"

import * as http from "@goscript/net/http/index.js"

import * as textproto from "@goscript/net/textproto/index.js"

import * as url2 from "@goscript/net/url/index.js"

import * as os from "@goscript/os/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as httpguts from "@goscript/golang.org/x/net/http/httpguts/index.js"

import * as hpack from "@goscript/golang.org/x/net/http2/hpack/index.js"

import * as __goscript_ascii from "./ascii.gs.ts"

import * as __goscript_ciphers from "./ciphers.gs.ts"

import * as __goscript_databuffer from "./databuffer.gs.ts"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_flow from "./flow.gs.ts"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_gotrack from "./gotrack.gs.ts"

import * as __goscript_headermap from "./headermap.gs.ts"

import * as __goscript_http2 from "./http2.gs.ts"

import * as __goscript_pipe from "./pipe.gs.ts"

import * as __goscript_timer from "./timer.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"

import * as __goscript_write from "./write.gs.ts"

import * as __goscript_writesched from "./writesched.gs.ts"

import * as __goscript_writesched_roundrobin from "./writesched_roundrobin.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/log/index.js"
import "@goscript/math/index.js"
import "@goscript/net/index.js"
import "@goscript/net/http/index.js"
import "@goscript/net/textproto/index.js"
import "@goscript/net/url/index.js"
import "@goscript/os/index.js"
import "@goscript/reflect/index.js"
import "@goscript/runtime/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/net/http/httpguts/index.js"
import "@goscript/golang.org/x/net/http2/hpack/index.js"
import "./ascii.gs.ts"
import "./ciphers.gs.ts"
import "./databuffer.gs.ts"
import "./errors.gs.ts"
import "./flow.gs.ts"
import "./frame.gs.ts"
import "./gotrack.gs.ts"
import "./headermap.gs.ts"
import "./http2.gs.ts"
import "./pipe.gs.ts"
import "./timer.gs.ts"
import "./transport.gs.ts"
import "./write.gs.ts"
import "./writesched.gs.ts"
import "./writesched_roundrobin.gs.ts"

$.registerTypePackagePath("golang.org/x/net/http2", ["http2.Server", "http2.serverInternalState", "http2.baseContexter", "http2.ServeConnOpts", "http2.serverConn", "http2.stream", "http2.readFrameResult", "http2.frameWriteResult", "http2.serverMessage", "http2.requestParam", "http2.unstartedHandler", "http2.bodyReadMsg", "http2.requestBody", "http2.responseWriter", "http2.responseWriterState", "http2.chunkWriter", "http2.startPushRequest", "http2.I"])

export type serverMessage = number

export class Server {
	// MaxHandlers limits the number of http.Handler ServeHTTP goroutines
	// which may run at a time over all connections.
	// Negative or zero no limit.
	// TODO: implement
	public get MaxHandlers(): number {
		return this._fields.MaxHandlers
	}

	public set MaxHandlers(value: number) {
		this._fields.MaxHandlers = value
	}

	// MaxConcurrentStreams optionally specifies the number of
	// concurrent streams that each client may have open at a
	// time. This is unrelated to the number of http.Handler goroutines
	// which may be active globally, which is MaxHandlers.
	// If zero, MaxConcurrentStreams defaults to at least 100, per
	// the HTTP/2 spec's recommendations.
	public get MaxConcurrentStreams(): number {
		return this._fields.MaxConcurrentStreams
	}

	public set MaxConcurrentStreams(value: number) {
		this._fields.MaxConcurrentStreams = value
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

	// MaxReadFrameSize optionally specifies the largest frame
	// this server is willing to read. A valid value is between
	// 16k and 16M, inclusive. If zero or otherwise invalid, a
	// default value is used.
	public get MaxReadFrameSize(): number {
		return this._fields.MaxReadFrameSize
	}

	public set MaxReadFrameSize(value: number) {
		this._fields.MaxReadFrameSize = value
	}

	// PermitProhibitedCipherSuites, if true, permits the use of
	// cipher suites prohibited by the HTTP/2 spec.
	public get PermitProhibitedCipherSuites(): boolean {
		return this._fields.PermitProhibitedCipherSuites
	}

	public set PermitProhibitedCipherSuites(value: boolean) {
		this._fields.PermitProhibitedCipherSuites = value
	}

	// IdleTimeout specifies how long until idle clients should be
	// closed with a GOAWAY frame. PING frames are not considered
	// activity for the purposes of IdleTimeout.
	// If zero or negative, there is no timeout.
	public get IdleTimeout(): time.Duration {
		return this._fields.IdleTimeout
	}

	public set IdleTimeout(value: time.Duration) {
		this._fields.IdleTimeout = value
	}

	// MaxUploadBufferPerConnection is the size of the initial flow
	// control window for each connections. The HTTP/2 spec does not
	// allow this to be smaller than 65535 or larger than 2^32-1.
	// If the value is outside this range, a default value will be
	// used instead.
	public get MaxUploadBufferPerConnection(): number {
		return this._fields.MaxUploadBufferPerConnection
	}

	public set MaxUploadBufferPerConnection(value: number) {
		this._fields.MaxUploadBufferPerConnection = value
	}

	// MaxUploadBufferPerStream is the size of the initial flow control
	// window for each stream. The HTTP/2 spec does not allow this to
	// be larger than 2^32-1. If the value is zero or larger than the
	// maximum, a default value will be used instead.
	public get MaxUploadBufferPerStream(): number {
		return this._fields.MaxUploadBufferPerStream
	}

	public set MaxUploadBufferPerStream(value: number) {
		this._fields.MaxUploadBufferPerStream = value
	}

	// NewWriteScheduler constructs a write scheduler for a connection.
	// If nil, a default scheduler is chosen.
	public get NewWriteScheduler(): (() => __goscript_writesched.WriteScheduler | null | globalThis.Promise<__goscript_writesched.WriteScheduler | null>) | null {
		return this._fields.NewWriteScheduler
	}

	public set NewWriteScheduler(value: (() => __goscript_writesched.WriteScheduler | null | globalThis.Promise<__goscript_writesched.WriteScheduler | null>) | null) {
		this._fields.NewWriteScheduler = value
	}

	// CountError, if non-nil, is called on HTTP/2 server errors.
	// It's intended to increment a metric for monitoring, such
	// as an expvar or Prometheus metric.
	// The errType consists of only ASCII word characters.
	public get CountError(): ((errType: string) => void) | null {
		return this._fields.CountError
	}

	public set CountError(value: ((errType: string) => void) | null) {
		this._fields.CountError = value
	}

	// Internal state. This is a pointer (rather than embedded directly)
	// so that we don't embed a Mutex in this struct, which will make the
	// struct non-copyable, which might break some callers.
	public get state(): serverInternalState | $.VarRef<serverInternalState> | null {
		return this._fields.state
	}

	public set state(value: serverInternalState | $.VarRef<serverInternalState> | null) {
		this._fields.state = value
	}

	// Synchronization group used for testing.
	// Outside of tests, this is nil.
	public get group(): __goscript_http2.synctestGroupInterface | null {
		return this._fields.group
	}

	public set group(value: __goscript_http2.synctestGroupInterface | null) {
		this._fields.group = value
	}

	public _fields: {
		MaxHandlers: number
		MaxConcurrentStreams: number
		MaxDecoderHeaderTableSize: number
		MaxEncoderHeaderTableSize: number
		MaxReadFrameSize: number
		PermitProhibitedCipherSuites: boolean
		IdleTimeout: time.Duration
		MaxUploadBufferPerConnection: number
		MaxUploadBufferPerStream: number
		NewWriteScheduler: (() => __goscript_writesched.WriteScheduler | null | globalThis.Promise<__goscript_writesched.WriteScheduler | null>) | null
		CountError: ((errType: string) => void) | null
		state: serverInternalState | $.VarRef<serverInternalState> | null
		group: __goscript_http2.synctestGroupInterface | null
	}

	constructor(init?: Partial<{MaxHandlers?: number, MaxConcurrentStreams?: number, MaxDecoderHeaderTableSize?: number, MaxEncoderHeaderTableSize?: number, MaxReadFrameSize?: number, PermitProhibitedCipherSuites?: boolean, IdleTimeout?: time.Duration, MaxUploadBufferPerConnection?: number, MaxUploadBufferPerStream?: number, NewWriteScheduler?: (() => __goscript_writesched.WriteScheduler | null | globalThis.Promise<__goscript_writesched.WriteScheduler | null>) | null, CountError?: ((errType: string) => void) | null, state?: serverInternalState | $.VarRef<serverInternalState> | null, group?: __goscript_http2.synctestGroupInterface | null}>, __goscriptValue?: boolean) {
		this._fields = {
			MaxHandlers: init?.MaxHandlers ?? (0 as number),
			MaxConcurrentStreams: init?.MaxConcurrentStreams ?? (0 as number),
			MaxDecoderHeaderTableSize: init?.MaxDecoderHeaderTableSize ?? (0 as number),
			MaxEncoderHeaderTableSize: init?.MaxEncoderHeaderTableSize ?? (0 as number),
			MaxReadFrameSize: init?.MaxReadFrameSize ?? (0 as number),
			PermitProhibitedCipherSuites: init?.PermitProhibitedCipherSuites ?? (false as boolean),
			IdleTimeout: init?.IdleTimeout ?? (0n as time.Duration),
			MaxUploadBufferPerConnection: init?.MaxUploadBufferPerConnection ?? (0 as number),
			MaxUploadBufferPerStream: init?.MaxUploadBufferPerStream ?? (0 as number),
			NewWriteScheduler: init?.NewWriteScheduler ?? (null! as (() => __goscript_writesched.WriteScheduler | null | globalThis.Promise<__goscript_writesched.WriteScheduler | null>) | null),
			CountError: init?.CountError ?? (null! as ((errType: string) => void) | null),
			state: init?.state ?? (null! as serverInternalState | $.VarRef<serverInternalState> | null),
			group: init?.group ?? (null! as __goscript_http2.synctestGroupInterface | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Server {
		return new Server(this, true)
	}

	public __goscriptAssign(source: Server): void {
		const target = this._fields
		const values = source._fields
		target.MaxHandlers = values.MaxHandlers
		target.MaxConcurrentStreams = values.MaxConcurrentStreams
		target.MaxDecoderHeaderTableSize = values.MaxDecoderHeaderTableSize
		target.MaxEncoderHeaderTableSize = values.MaxEncoderHeaderTableSize
		target.MaxReadFrameSize = values.MaxReadFrameSize
		target.PermitProhibitedCipherSuites = values.PermitProhibitedCipherSuites
		target.IdleTimeout = values.IdleTimeout
		target.MaxUploadBufferPerConnection = values.MaxUploadBufferPerConnection
		target.MaxUploadBufferPerStream = values.MaxUploadBufferPerStream
		target.NewWriteScheduler = values.NewWriteScheduler
		target.CountError = values.CountError
		target.state = values.state
		target.group = $.assignFieldValue(target.group, values.group, "http2.synctestGroupInterface")
	}

	public async ServeConn(c: net.Conn | null, opts: ServeConnOpts | $.VarRef<ServeConnOpts> | null): globalThis.Promise<void> {
		const s: Server | $.VarRef<Server> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).serveConn(c, opts, (null as ((_p0: serverConn | $.VarRef<serverConn> | null) => void) | null)) : Server.prototype.serveConn.call(s, c, opts, (null as ((_p0: serverConn | $.VarRef<serverConn> | null) => void) | null)))
	}

	public async afterFunc(d: time.Duration, f: (() => void) | null): globalThis.Promise<__goscript_timer.timer | null> {
		const s: Server | $.VarRef<Server> | null = this;
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		if ((s$ as Server).group != null) {
			return $.pointerValue<Exclude<__goscript_http2.synctestGroupInterface, null>>((s$ as Server).group).AfterFunc(d, f)
		}
		return $.interfaceValue<__goscript_timer.timer | null>((() => { const __goscriptLiteralField0 = time.AfterFunc(d, f); return new __goscript_timer.timeTimer({Timer: __goscriptLiteralField0}, true) })(), "http2.timeTimer", "http2.timeTimer")
	}

	public initialConnRecvWindowSize(): number {
		const s: Server | $.VarRef<Server> | null = this;
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		if ((s$ as Server).MaxUploadBufferPerConnection >= 65535) {
			return (s$ as Server).MaxUploadBufferPerConnection
		}
		return 1048576
	}

	public initialStreamRecvWindowSize(): number {
		const s: Server | $.VarRef<Server> | null = this;
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		if ((s$ as Server).MaxUploadBufferPerStream > 0) {
			return (s$ as Server).MaxUploadBufferPerStream
		}
		return 1048576
	}

	public async markNewGoroutine(): globalThis.Promise<void> {
		const s: Server | $.VarRef<Server> | null = this;
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		if ((s$ as Server).group != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_http2.synctestGroupInterface, null>>((s$ as Server).group).Join(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public maxConcurrentStreams(): number {
		const s: Server | $.VarRef<Server> | null = this;
		{
			let v = $.pointerValue<Server>(s).MaxConcurrentStreams
			if (v > 0) {
				return v
			}
		}
		return 250
	}

	public maxDecoderHeaderTableSize(): number {
		const s: Server | $.VarRef<Server> | null = this;
		{
			let v = $.pointerValue<Server>(s).MaxDecoderHeaderTableSize
			if (v > 0) {
				return v
			}
		}
		return 4096
	}

	public maxEncoderHeaderTableSize(): number {
		const s: Server | $.VarRef<Server> | null = this;
		{
			let v = $.pointerValue<Server>(s).MaxEncoderHeaderTableSize
			if (v > 0) {
				return v
			}
		}
		return 4096
	}

	public maxQueuedControlFrames(): number {
		const s: Server | $.VarRef<Server> | null = this;
		// TODO: if anybody asks, add a Server field, and remember to define the
		// behavior of negative values.
		return 10000
	}

	public maxReadFrameSize(): number {
		const s: Server | $.VarRef<Server> | null = this;
		{
			let v = $.pointerValue<Server>(s).MaxReadFrameSize
			if ((v >= 16384) && (v <= 16777215)) {
				return v
			}
		}
		return 1048576
	}

	public async newTimer(d: time.Duration): globalThis.Promise<__goscript_timer.timer | null> {
		const s: Server | $.VarRef<Server> | null = this;
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		if ((s$ as Server).group != null) {
			return $.pointerValue<Exclude<__goscript_http2.synctestGroupInterface, null>>((s$ as Server).group).NewTimer(d)
		}
		return $.interfaceValue<__goscript_timer.timer | null>((() => { const __goscriptLiteralField1 = time.NewTimer(d); return new __goscript_timer.timeTimer({Timer: __goscriptLiteralField1}, true) })(), "http2.timeTimer", "http2.timeTimer")
	}

	public async now(): globalThis.Promise<time.Time> {
		const s: Server | $.VarRef<Server> | null = this;
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		if ((s$ as Server).group != null) {
			return $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<__goscript_http2.synctestGroupInterface, null>>((s$ as Server).group).Now(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time)))
		}
		return $.markAsStructValue($.cloneStructValue(time.Now()))
	}

	public async serveConn(c: net.Conn | null, opts: ServeConnOpts | $.VarRef<ServeConnOpts> | null, newf: ((_p0: serverConn | $.VarRef<serverConn> | null) => void) | null): globalThis.Promise<void> {
		const s: Server | $.VarRef<Server> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		const opts$: ServeConnOpts = opts == null ? $.pointerTarget<ServeConnOpts>(opts) : (opts as any).__isVarRef === true ? (opts as any).value : (opts as any).__goValue === undefined ? (opts as any) : $.pointerTarget<ServeConnOpts>(opts)
		let [baseCtx, cancel] = await serverConnBaseContext(c, opts)
		const __goscriptDeferCallee0 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		let sc: serverConn | $.VarRef<serverConn> | null = (await (async () => { const __goscriptLiteralField2 = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? ((opts as any) as ServeConnOpts).baseConfig() : ServeConnOpts.prototype.baseConfig.call(opts)); const __goscriptLiteralField3 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(c)).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField4 = __goscript_http2.newBufferedWriter((c as io.Writer | null)); const __goscriptLiteralField5 = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? ((opts as any) as ServeConnOpts).handler() : ServeConnOpts.prototype.handler.call(opts)); const __goscriptLiteralField6 = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).maxConcurrentStreams() : Server.prototype.maxConcurrentStreams.call(s)); const __goscriptLiteralField7 = await __goscript_gotrack.newGoroutineLock(); return new serverConn({srv: s, hs: __goscriptLiteralField2, conn: c, baseCtx: baseCtx, remoteAddrStr: __goscriptLiteralField3, bw: __goscriptLiteralField4, handler: __goscriptLiteralField5, streams: $.makeMap<number, stream | $.VarRef<stream> | null>(), readFrameCh: $.makeChannel<readFrameResult>(0, new readFrameResult(undefined, true), "both"), wantWriteFrameCh: $.makeChannel<__goscript_writesched.FrameWriteRequest>(8, new __goscript_writesched.FrameWriteRequest(undefined, true), "both"), serveMsgCh: $.makeChannel<any>(8, null! as any, "both"), wroteFrameCh: $.makeChannel<frameWriteResult>(1, new frameWriteResult(undefined, true), "both"), bodyReadCh: $.makeChannel<bodyReadMsg>(0, new bodyReadMsg(undefined, true), "both"), doneServing: $.makeChannel<{}>(0, {}, "both"), clientMaxStreams: 4294967295, advMaxStreams: __goscriptLiteralField6, initialStreamSendWindowSize: 65535, maxFrameSize: 16384, serveG: __goscriptLiteralField7, pushEnabled: true, sawClientPreface: (opts$ as ServeConnOpts).SawClientPreface}) })())
		let sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		if (newf != null) {
			void (__goscriptAwait = newf!(sc), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		await serverInternalState.prototype.registerConn.call((s$ as Server).state, sc)
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => (sc: serverConn | $.VarRef<serverConn> | null) => __receiver.unregisterConn(sc))($.pointerValue<serverInternalState>((s$ as Server).state)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http2.serverConn")], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*serverInternalState).unregisterConn-fm")
		const __goscriptDeferArg0 = sc
		__defer.defer(async () => { await __goscriptDeferCallee1(__goscriptDeferArg0) })

		// The net/http package sets the write deadline from the
		// http.Server.WriteTimeout during the TLS handshake, but then
		// passes the connection off to us with the deadline already set.
		// Write deadlines are set per stream in serverConn.newStream.
		// Disarm the net.Conn write deadline here.
		if ($.pointerValue<http.Server>((sc$ as serverConn).hs).WriteTimeout > 0n) {
			void (__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((sc$ as serverConn).conn).SetWriteDeadline($.markAsStructValue(new time.Time())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		if ((s$ as Server).NewWriteScheduler != null) {
			;(sc$ as serverConn).writeSched = (__goscriptAwait = (s$ as Server).NewWriteScheduler!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			;(sc$ as serverConn).writeSched = __goscript_writesched_roundrobin.newRoundRobinWriteScheduler()
		}

		// These start at the RFC-specified defaults. If there is a higher
		// configured value for inflow, that will be updated when we send a
		// WINDOW_UPDATE shortly after sending SETTINGS.
		void (sc$ as serverConn).flow.add(65535)
		void (sc$ as serverConn).inflow.init(65535);
		;(sc$ as serverConn).hpackEncoder = await hpack.NewEncoder($.interfaceValue<io.Writer | null>($.fieldRef((sc$ as serverConn)._fields, "headerWriteBuf"), "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))
		await hpack.Encoder.prototype.SetMaxDynamicTableSizeLimit.call((sc$ as serverConn).hpackEncoder, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).maxEncoderHeaderTableSize() : Server.prototype.maxEncoderHeaderTableSize.call(s)))

		let fr: __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null = __goscript_frame.NewFramer($.interfaceValue<io.Writer | null>((sc$ as serverConn).bw, "*http2.bufferedWriter", /* @__PURE__ */ $.pointerType("http2.bufferedWriter")), (c as io.Reader | null))
		let fr$: __goscript_frame.Framer = fr == null ? $.pointerTarget<__goscript_frame.Framer>(fr) : (fr as any).__isVarRef === true ? (fr as any).value : (fr as any).__goValue === undefined ? (fr as any) : $.pointerTarget<__goscript_frame.Framer>(fr)
		if ((s$ as Server).CountError != null) {
			;(fr$ as __goscript_frame.Framer).countError = (s$ as Server).CountError
		}
		;(fr$ as __goscript_frame.Framer).ReadMetaHeaders = await hpack.NewDecoder((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).maxDecoderHeaderTableSize() : Server.prototype.maxDecoderHeaderTableSize.call(s)), (null as ((f: hpack.HeaderField) => void) | null));
		;(fr$ as __goscript_frame.Framer).MaxHeaderListSize = (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).maxHeaderListSize() : serverConn.prototype.maxHeaderListSize.call(sc))
		__goscript_frame.Framer.prototype.SetMaxReadFrameSize.call(fr, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).maxReadFrameSize() : Server.prototype.maxReadFrameSize.call(s)));
		;(sc$ as serverConn).framer = fr

		{
			let [tc, ok] = $.typeAssertTuple<__goscript_http2.connectionStater | null>(c, "http2.connectionStater")
			if (ok) {
				;(sc$ as serverConn).tlsState = new tls.ConnectionState()
				$.assignStruct($.pointerValue<tls.ConnectionState>((sc$ as serverConn).tlsState), ((__goscriptAwait = (tc !== null && (tc as any).__isVarRef !== true && (tc as any).__goValue === undefined ? (tc as Exclude<__goscript_http2.connectionStater, null>) : $.pointerValue<Exclude<__goscript_http2.connectionStater, null>>(tc)).ConnectionState(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as tls.ConnectionState))
				// 9.2 Use of TLS Features
				// An implementation of HTTP/2 over TLS MUST use TLS
				// 1.2 or higher with the restrictions on feature set
				// and cipher suite described in this section. Due to
				// implementation limitations, it might not be
				// possible to fail TLS negotiation. An endpoint MUST
				// immediately terminate an HTTP/2 connection that
				// does not meet the TLS requirements described in
				// this section with a connection error (Section
				// 5.4.1) of type INADEQUATE_SECURITY.
				if ($.pointerValue<tls.ConnectionState>((sc$ as serverConn).tlsState).Version < 771) {
					await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).rejectConn(12, "TLS version too low") : serverConn.prototype.rejectConn.call(sc, 12, "TLS version too low"))
					return
				}

				if ($.stringEqual($.pointerValue<tls.ConnectionState>((sc$ as serverConn).tlsState).ServerName, "")) {
				}

				if (!(s$ as Server).PermitProhibitedCipherSuites && __goscript_ciphers.isBadCipher($.pointerValue<tls.ConnectionState>((sc$ as serverConn).tlsState).CipherSuite)) {
					// "Endpoints MAY choose to generate a connection error
					// (Section 5.4.1) of type INADEQUATE_SECURITY if one of
					// the prohibited cipher suites are negotiated."
					//
					// We choose that. In my opinion, the spec is weak
					// here. It also says both parties must support at least
					// TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 so there's no
					// excuses here. If we really must, we could allow an
					// "AllowInsecureWeakCiphers" option on the server later.
					// Let's see how it plays out first.
					await serverConn.prototype.rejectConn.call(sc, 12, await fmt.Sprintf("Prohibited TLS 1.2 Cipher Suite: %x", $.basicInterfaceValue($.pointerValue<tls.ConnectionState>((sc$ as serverConn).tlsState).CipherSuite, "uint16")))
					return
				}
			}
		}

		if ((opts$ as ServeConnOpts).Settings != null) {
			let __goscriptShadow0: __goscript_frame.SettingsFrame | $.VarRef<__goscript_frame.SettingsFrame> | null = new __goscript_frame.SettingsFrame({FrameHeader: new __goscript_frame.FrameHeader({valid: true}, true), p: (opts$ as ServeConnOpts).Settings})
			{
				let err = await __goscript_frame.SettingsFrame.prototype.ForeachSetting.call(__goscriptShadow0, $.functionValue(((__receiver) => (s: __goscript_http2.Setting) => __receiver.processSetting(s))((sc$ as serverConn)), ({ kind: $.TypeKind.Function, params: ["http2.Setting"], results: ["error"] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*serverConn).processSetting-fm"))
				if (err != null) {
					await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).rejectConn(1, "invalid settings") : serverConn.prototype.rejectConn.call(sc, 1, "invalid settings"))
					return
				}
			}
			;(opts$ as ServeConnOpts).Settings = null
		}

		{
			let hook: ((_p0: serverConn | $.VarRef<serverConn> | null) => void) | null = testHookGetServerConn
			if (hook != null) {
				void (__goscriptAwait = hook!(sc), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		if ((opts$ as ServeConnOpts).UpgradeRequest != null) {
			await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).upgradeRequest((opts$ as ServeConnOpts).UpgradeRequest) : serverConn.prototype.upgradeRequest.call(sc, (opts$ as ServeConnOpts).UpgradeRequest));
			;(opts$ as ServeConnOpts).UpgradeRequest = null
		}

		await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).serve() : serverConn.prototype.serve.call(sc))
	}

	static __typeInfo = $.registerStructType(
		"http2.Server",
		() => new Server(),
		() => [$.methodSignature("ServeConn", [["c", "net.Conn"], ["opts", /* @__PURE__ */ $.pointerType("http2.ServeConnOpts")]], [], true), $.methodSignature("afterFunc", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["f", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], [{ kind: $.TypeKind.Interface, methods: [$.methodSignature("C", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])] }], true), $.methodSignature("initialConnRecvWindowSize", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("initialStreamRecvWindowSize", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("markNewGoroutine", [], [], true), $.methodSignature("maxConcurrentStreams", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("maxDecoderHeaderTableSize", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("maxEncoderHeaderTableSize", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("maxQueuedControlFrames", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("maxReadFrameSize", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("newTimer", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [{ kind: $.TypeKind.Interface, methods: [$.methodSignature("C", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])] }], true), $.methodSignature("now", [], ["time.Time"], true), $.methodSignature("serveConn", [["c", "net.Conn"], ["opts", /* @__PURE__ */ $.pointerType("http2.ServeConnOpts")], ["newf", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http2.serverConn")], results: [] } as $.FunctionTypeInfo)]], [], true)],
		Server,
		() => [/* @__PURE__ */ $.structField("MaxHandlers", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("MaxConcurrentStreams", /* @__PURE__ */ $.basicType("uint32"), [1], 8, true), /* @__PURE__ */ $.structField("MaxDecoderHeaderTableSize", /* @__PURE__ */ $.basicType("uint32"), [2], 12, true), /* @__PURE__ */ $.structField("MaxEncoderHeaderTableSize", /* @__PURE__ */ $.basicType("uint32"), [3], 16, true), /* @__PURE__ */ $.structField("MaxReadFrameSize", /* @__PURE__ */ $.basicType("uint32"), [4], 20, true), /* @__PURE__ */ $.structField("PermitProhibitedCipherSuites", /* @__PURE__ */ $.basicType("bool"), [5], 24, true), /* @__PURE__ */ $.structField("IdleTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [6], 32, true), /* @__PURE__ */ $.structField("MaxUploadBufferPerConnection", /* @__PURE__ */ $.basicType("int32"), [7], 40, true), /* @__PURE__ */ $.structField("MaxUploadBufferPerStream", /* @__PURE__ */ $.basicType("int32"), [8], 44, true), /* @__PURE__ */ $.structField("NewWriteScheduler", ({ kind: $.TypeKind.Function, params: [], results: ["http2.WriteScheduler"] } as $.FunctionTypeInfo), [9], 48, true), /* @__PURE__ */ $.structField("CountError", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo), [10], 56, true), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.pointerType("http2.serverInternalState"), [11], 64, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("group", "http2.synctestGroupInterface", [12], 72, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class serverInternalState {
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get activeConns(): globalThis.Map<serverConn | $.VarRef<serverConn> | null, {}> | null {
		return this._fields.activeConns
	}

	public set activeConns(value: globalThis.Map<serverConn | $.VarRef<serverConn> | null, {}> | null) {
		this._fields.activeConns = value
	}

	public _fields: {
		mu: sync.Mutex
		activeConns: globalThis.Map<serverConn | $.VarRef<serverConn> | null, {}> | null
	}

	constructor(init?: Partial<{mu?: sync.Mutex, activeConns?: globalThis.Map<serverConn | $.VarRef<serverConn> | null, {}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			activeConns: init?.activeConns ?? (null! as globalThis.Map<serverConn | $.VarRef<serverConn> | null, {}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): serverInternalState {
		return new serverInternalState(this, true)
	}

	public __goscriptAssign(source: serverInternalState): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.activeConns = values.activeConns
	}

	public async registerConn(sc: serverConn | $.VarRef<serverConn> | null): globalThis.Promise<void> {
		let s: serverInternalState | $.VarRef<serverInternalState> | null = this;
		const s$: serverInternalState = s == null ? $.pointerTarget<serverInternalState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<serverInternalState>(s)
		if (s == null) {
			return
		}
		await (s$ as serverInternalState).mu.Lock()
		$.mapSet((s$ as serverInternalState).activeConns, sc, {})
		void (s$ as serverInternalState).mu.Unlock()
	}

	public async startGracefulShutdown(): globalThis.Promise<void> {
		const s: serverInternalState | $.VarRef<serverInternalState> | null = this;
		const s$: serverInternalState = s == null ? $.pointerTarget<serverInternalState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<serverInternalState>(s)
		if (s == null) {
			return
		}
		await (s$ as serverInternalState).mu.Lock()
		for (const [sc, __rangeValue] of (s$ as serverInternalState).activeConns?.entries() ?? []) {
			await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).startGracefulShutdown() : serverConn.prototype.startGracefulShutdown.call(sc))
		}
		void (s$ as serverInternalState).mu.Unlock()
	}

	public async unregisterConn(sc: serverConn | $.VarRef<serverConn> | null): globalThis.Promise<void> {
		const s: serverInternalState | $.VarRef<serverInternalState> | null = this;
		const s$: serverInternalState = s == null ? $.pointerTarget<serverInternalState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<serverInternalState>(s)
		if (s == null) {
			return
		}
		await (s$ as serverInternalState).mu.Lock()
		$.deleteMapEntry((s$ as serverInternalState).activeConns, sc)
		void (s$ as serverInternalState).mu.Unlock()
	}

	static __typeInfo = $.registerStructType(
		"http2.serverInternalState",
		() => new serverInternalState(),
		() => [$.methodSignature("registerConn", [["sc", /* @__PURE__ */ $.pointerType("http2.serverConn")]], [], true), $.methodSignature("startGracefulShutdown", [], [], true), $.methodSignature("unregisterConn", [["sc", /* @__PURE__ */ $.pointerType("http2.serverConn")]], [], true)],
		serverInternalState,
		() => [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("activeConns", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("http2.serverConn"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [1], 8, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class ServeConnOpts {
	// Context is the base context to use.
	// If nil, context.Background is used.
	public get Context(): context2.Context | null {
		return this._fields.Context
	}

	public set Context(value: context2.Context | null) {
		this._fields.Context = value
	}

	// BaseConfig optionally sets the base configuration
	// for values. If nil, defaults are used.
	public get BaseConfig(): http.Server | $.VarRef<http.Server> | null {
		return this._fields.BaseConfig
	}

	public set BaseConfig(value: http.Server | $.VarRef<http.Server> | null) {
		this._fields.BaseConfig = value
	}

	// Handler specifies which handler to use for processing
	// requests. If nil, BaseConfig.Handler is used. If BaseConfig
	// or BaseConfig.Handler is nil, http.DefaultServeMux is used.
	public get Handler(): http.Handler | null {
		return this._fields.Handler
	}

	public set Handler(value: http.Handler | null) {
		this._fields.Handler = value
	}

	// UpgradeRequest is an initial request received on a connection
	// undergoing an h2c upgrade. The request body must have been
	// completely read from the connection before calling ServeConn,
	// and the 101 Switching Protocols response written.
	public get UpgradeRequest(): http.Request | $.VarRef<http.Request> | null {
		return this._fields.UpgradeRequest
	}

	public set UpgradeRequest(value: http.Request | $.VarRef<http.Request> | null) {
		this._fields.UpgradeRequest = value
	}

	// Settings is the decoded contents of the HTTP2-Settings header
	// in an h2c upgrade request.
	public get Settings(): $.Slice<number> {
		return this._fields.Settings
	}

	public set Settings(value: $.Slice<number>) {
		this._fields.Settings = value
	}

	// SawClientPreface is set if the HTTP/2 connection preface
	// has already been read from the connection.
	public get SawClientPreface(): boolean {
		return this._fields.SawClientPreface
	}

	public set SawClientPreface(value: boolean) {
		this._fields.SawClientPreface = value
	}

	public _fields: {
		Context: context2.Context | null
		BaseConfig: http.Server | $.VarRef<http.Server> | null
		Handler: http.Handler | null
		UpgradeRequest: http.Request | $.VarRef<http.Request> | null
		Settings: $.Slice<number>
		SawClientPreface: boolean
	}

	constructor(init?: Partial<{Context?: context2.Context | null, BaseConfig?: http.Server | $.VarRef<http.Server> | null, Handler?: http.Handler | null, UpgradeRequest?: http.Request | $.VarRef<http.Request> | null, Settings?: $.Slice<number>, SawClientPreface?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Context: init?.Context ?? (null! as context2.Context | null),
			BaseConfig: init?.BaseConfig ?? (null! as http.Server | $.VarRef<http.Server> | null),
			Handler: init?.Handler ?? (null! as http.Handler | null),
			UpgradeRequest: init?.UpgradeRequest ?? (null! as http.Request | $.VarRef<http.Request> | null),
			Settings: init?.Settings ?? (null! as $.Slice<number>),
			SawClientPreface: init?.SawClientPreface ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ServeConnOpts {
		return new ServeConnOpts(this, true)
	}

	public __goscriptAssign(source: ServeConnOpts): void {
		const target = this._fields
		const values = source._fields
		target.Context = $.assignFieldValue(target.Context, values.Context, "context.Context")
		target.BaseConfig = values.BaseConfig
		target.Handler = $.assignFieldValue(target.Handler, values.Handler, "http.Handler")
		target.UpgradeRequest = values.UpgradeRequest
		target.Settings = values.Settings
		target.SawClientPreface = values.SawClientPreface
	}

	public baseConfig(): http.Server | $.VarRef<http.Server> | null {
		const o: ServeConnOpts | $.VarRef<ServeConnOpts> | null = this;
		const o$: ServeConnOpts = o == null ? $.pointerTarget<ServeConnOpts>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<ServeConnOpts>(o)
		if ((o != null) && ((o$ as ServeConnOpts).BaseConfig != null)) {
			return (o$ as ServeConnOpts).BaseConfig
		}
		return new http.Server()
	}

	public context(): context2.Context | null {
		const o: ServeConnOpts | $.VarRef<ServeConnOpts> | null = this;
		const o$: ServeConnOpts = o == null ? $.pointerTarget<ServeConnOpts>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<ServeConnOpts>(o)
		if ((o != null) && ((o$ as ServeConnOpts).Context != null)) {
			return (o$ as ServeConnOpts).Context
		}
		return context2.Background()
	}

	public handler(): http.Handler | null {
		const o: ServeConnOpts | $.VarRef<ServeConnOpts> | null = this;
		const o$: ServeConnOpts = o == null ? $.pointerTarget<ServeConnOpts>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<ServeConnOpts>(o)
		if (o != null) {
			if ((o$ as ServeConnOpts).Handler != null) {
				return (o$ as ServeConnOpts).Handler
			}
			if (((o$ as ServeConnOpts).BaseConfig != null) && ($.pointerValue<http.Server>((o$ as ServeConnOpts).BaseConfig).Handler != null)) {
				return $.pointerValue<http.Server>((o$ as ServeConnOpts).BaseConfig).Handler
			}
		}
		return $.interfaceValue<http.Handler | null>(http.DefaultServeMux, "*http.ServeMux", /* @__PURE__ */ $.pointerType("http.ServeMux"))
	}

	static __typeInfo = $.registerStructType(
		"http2.ServeConnOpts",
		() => new ServeConnOpts(),
		() => [$.methodSignature("baseConfig", [], [/* @__PURE__ */ $.pointerType("http.Server")], true), $.methodSignature("context", [], ["context.Context"], true), $.methodSignature("handler", [], ["http.Handler"], true)],
		ServeConnOpts,
		() => [/* @__PURE__ */ $.structField("Context", "context.Context", [0], 0, true), /* @__PURE__ */ $.structField("BaseConfig", /* @__PURE__ */ $.pointerType("http.Server"), [1], 16, true), /* @__PURE__ */ $.structField("Handler", "http.Handler", [2], 24, true), /* @__PURE__ */ $.structField("UpgradeRequest", /* @__PURE__ */ $.pointerType("http.Request"), [3], 40, true), /* @__PURE__ */ $.structField("Settings", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 48, true), /* @__PURE__ */ $.structField("SawClientPreface", /* @__PURE__ */ $.basicType("bool"), [5], 72, true)]
	)
}

export class serverConn {
	// Immutable:
	public get srv(): Server | $.VarRef<Server> | null {
		return this._fields.srv
	}

	public set srv(value: Server | $.VarRef<Server> | null) {
		this._fields.srv = value
	}

	public get hs(): http.Server | $.VarRef<http.Server> | null {
		return this._fields.hs
	}

	public set hs(value: http.Server | $.VarRef<http.Server> | null) {
		this._fields.hs = value
	}

	public get conn(): net.Conn | null {
		return this._fields.conn
	}

	public set conn(value: net.Conn | null) {
		this._fields.conn = value
	}

	public get bw(): __goscript_http2.bufferedWriter | $.VarRef<__goscript_http2.bufferedWriter> | null {
		return this._fields.bw
	}

	public set bw(value: __goscript_http2.bufferedWriter | $.VarRef<__goscript_http2.bufferedWriter> | null) {
		this._fields.bw = value
	}

	public get handler(): http.Handler | null {
		return this._fields.handler
	}

	public set handler(value: http.Handler | null) {
		this._fields.handler = value
	}

	public get baseCtx(): context2.Context | null {
		return this._fields.baseCtx
	}

	public set baseCtx(value: context2.Context | null) {
		this._fields.baseCtx = value
	}

	public get framer(): __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null {
		return this._fields.framer
	}

	public set framer(value: __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null) {
		this._fields.framer = value
	}

	public get doneServing(): $.Channel<{}> | null {
		return this._fields.doneServing
	}

	public set doneServing(value: $.Channel<{}> | null) {
		this._fields.doneServing = value
	}

	public get readFrameCh(): $.Channel<readFrameResult> | null {
		return this._fields.readFrameCh
	}

	public set readFrameCh(value: $.Channel<readFrameResult> | null) {
		this._fields.readFrameCh = value
	}

	public get wantWriteFrameCh(): $.Channel<__goscript_writesched.FrameWriteRequest> | null {
		return this._fields.wantWriteFrameCh
	}

	public set wantWriteFrameCh(value: $.Channel<__goscript_writesched.FrameWriteRequest> | null) {
		this._fields.wantWriteFrameCh = value
	}

	public get wroteFrameCh(): $.Channel<frameWriteResult> | null {
		return this._fields.wroteFrameCh
	}

	public set wroteFrameCh(value: $.Channel<frameWriteResult> | null) {
		this._fields.wroteFrameCh = value
	}

	public get bodyReadCh(): $.Channel<bodyReadMsg> | null {
		return this._fields.bodyReadCh
	}

	public set bodyReadCh(value: $.Channel<bodyReadMsg> | null) {
		this._fields.bodyReadCh = value
	}

	public get serveMsgCh(): $.Channel<any> | null {
		return this._fields.serveMsgCh
	}

	public set serveMsgCh(value: $.Channel<any> | null) {
		this._fields.serveMsgCh = value
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

	public get tlsState(): tls.ConnectionState | $.VarRef<tls.ConnectionState> | null {
		return this._fields.tlsState
	}

	public set tlsState(value: tls.ConnectionState | $.VarRef<tls.ConnectionState> | null) {
		this._fields.tlsState = value
	}

	public get remoteAddrStr(): string {
		return this._fields.remoteAddrStr
	}

	public set remoteAddrStr(value: string) {
		this._fields.remoteAddrStr = value
	}

	public get writeSched(): __goscript_writesched.WriteScheduler | null {
		return this._fields.writeSched
	}

	public set writeSched(value: __goscript_writesched.WriteScheduler | null) {
		this._fields.writeSched = value
	}

	// Everything following is owned by the serve loop; use serveG.check():
	public get serveG(): __goscript_gotrack.goroutineLock {
		return this._fields.serveG
	}

	public set serveG(value: __goscript_gotrack.goroutineLock) {
		this._fields.serveG = value
	}

	public get pushEnabled(): boolean {
		return this._fields.pushEnabled
	}

	public set pushEnabled(value: boolean) {
		this._fields.pushEnabled = value
	}

	public get sawClientPreface(): boolean {
		return this._fields.sawClientPreface
	}

	public set sawClientPreface(value: boolean) {
		this._fields.sawClientPreface = value
	}

	public get sawFirstSettings(): boolean {
		return this._fields.sawFirstSettings
	}

	public set sawFirstSettings(value: boolean) {
		this._fields.sawFirstSettings = value
	}

	public get needToSendSettingsAck(): boolean {
		return this._fields.needToSendSettingsAck
	}

	public set needToSendSettingsAck(value: boolean) {
		this._fields.needToSendSettingsAck = value
	}

	public get unackedSettings(): number {
		return this._fields.unackedSettings
	}

	public set unackedSettings(value: number) {
		this._fields.unackedSettings = value
	}

	public get queuedControlFrames(): number {
		return this._fields.queuedControlFrames
	}

	public set queuedControlFrames(value: number) {
		this._fields.queuedControlFrames = value
	}

	public get clientMaxStreams(): number {
		return this._fields.clientMaxStreams
	}

	public set clientMaxStreams(value: number) {
		this._fields.clientMaxStreams = value
	}

	public get advMaxStreams(): number {
		return this._fields.advMaxStreams
	}

	public set advMaxStreams(value: number) {
		this._fields.advMaxStreams = value
	}

	public get curClientStreams(): number {
		return this._fields.curClientStreams
	}

	public set curClientStreams(value: number) {
		this._fields.curClientStreams = value
	}

	public get curPushedStreams(): number {
		return this._fields.curPushedStreams
	}

	public set curPushedStreams(value: number) {
		this._fields.curPushedStreams = value
	}

	public get curHandlers(): number {
		return this._fields.curHandlers
	}

	public set curHandlers(value: number) {
		this._fields.curHandlers = value
	}

	public get maxClientStreamID(): number {
		return this._fields.maxClientStreamID
	}

	public set maxClientStreamID(value: number) {
		this._fields.maxClientStreamID = value
	}

	public get maxPushPromiseID(): number {
		return this._fields.maxPushPromiseID
	}

	public set maxPushPromiseID(value: number) {
		this._fields.maxPushPromiseID = value
	}

	public get streams(): globalThis.Map<number, stream | $.VarRef<stream> | null> | null {
		return this._fields.streams
	}

	public set streams(value: globalThis.Map<number, stream | $.VarRef<stream> | null> | null) {
		this._fields.streams = value
	}

	public get unstartedHandlers(): $.Slice<unstartedHandler> {
		return this._fields.unstartedHandlers
	}

	public set unstartedHandlers(value: $.Slice<unstartedHandler>) {
		this._fields.unstartedHandlers = value
	}

	public get initialStreamSendWindowSize(): number {
		return this._fields.initialStreamSendWindowSize
	}

	public set initialStreamSendWindowSize(value: number) {
		this._fields.initialStreamSendWindowSize = value
	}

	public get maxFrameSize(): number {
		return this._fields.maxFrameSize
	}

	public set maxFrameSize(value: number) {
		this._fields.maxFrameSize = value
	}

	public get peerMaxHeaderListSize(): number {
		return this._fields.peerMaxHeaderListSize
	}

	public set peerMaxHeaderListSize(value: number) {
		this._fields.peerMaxHeaderListSize = value
	}

	public get canonHeader(): globalThis.Map<string, string> | null {
		return this._fields.canonHeader
	}

	public set canonHeader(value: globalThis.Map<string, string> | null) {
		this._fields.canonHeader = value
	}

	public get canonHeaderKeysSize(): number {
		return this._fields.canonHeaderKeysSize
	}

	public set canonHeaderKeysSize(value: number) {
		this._fields.canonHeaderKeysSize = value
	}

	public get writingFrame(): boolean {
		return this._fields.writingFrame
	}

	public set writingFrame(value: boolean) {
		this._fields.writingFrame = value
	}

	public get writingFrameAsync(): boolean {
		return this._fields.writingFrameAsync
	}

	public set writingFrameAsync(value: boolean) {
		this._fields.writingFrameAsync = value
	}

	public get needsFrameFlush(): boolean {
		return this._fields.needsFrameFlush
	}

	public set needsFrameFlush(value: boolean) {
		this._fields.needsFrameFlush = value
	}

	public get inGoAway(): boolean {
		return this._fields.inGoAway
	}

	public set inGoAway(value: boolean) {
		this._fields.inGoAway = value
	}

	public get inFrameScheduleLoop(): boolean {
		return this._fields.inFrameScheduleLoop
	}

	public set inFrameScheduleLoop(value: boolean) {
		this._fields.inFrameScheduleLoop = value
	}

	public get needToSendGoAway(): boolean {
		return this._fields.needToSendGoAway
	}

	public set needToSendGoAway(value: boolean) {
		this._fields.needToSendGoAway = value
	}

	public get goAwayCode(): __goscript_errors.ErrCode {
		return this._fields.goAwayCode
	}

	public set goAwayCode(value: __goscript_errors.ErrCode) {
		this._fields.goAwayCode = value
	}

	public get shutdownTimer(): __goscript_timer.timer | null {
		return this._fields.shutdownTimer
	}

	public set shutdownTimer(value: __goscript_timer.timer | null) {
		this._fields.shutdownTimer = value
	}

	public get idleTimer(): __goscript_timer.timer | null {
		return this._fields.idleTimer
	}

	public set idleTimer(value: __goscript_timer.timer | null) {
		this._fields.idleTimer = value
	}

	// Owned by the writeFrameAsync goroutine:
	public get headerWriteBuf(): bytes.Buffer {
		return this._fields.headerWriteBuf
	}

	public set headerWriteBuf(value: bytes.Buffer) {
		this._fields.headerWriteBuf = value
	}

	public get hpackEncoder(): hpack.Encoder | $.VarRef<hpack.Encoder> | null {
		return this._fields.hpackEncoder
	}

	public set hpackEncoder(value: hpack.Encoder | $.VarRef<hpack.Encoder> | null) {
		this._fields.hpackEncoder = value
	}

	// Used by startGracefulShutdown.
	public get shutdownOnce(): sync.Once {
		return this._fields.shutdownOnce
	}

	public set shutdownOnce(value: sync.Once) {
		this._fields.shutdownOnce = value
	}

	public _fields: {
		srv: Server | $.VarRef<Server> | null
		hs: http.Server | $.VarRef<http.Server> | null
		conn: net.Conn | null
		bw: __goscript_http2.bufferedWriter | $.VarRef<__goscript_http2.bufferedWriter> | null
		handler: http.Handler | null
		baseCtx: context2.Context | null
		framer: __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null
		doneServing: $.Channel<{}> | null
		readFrameCh: $.Channel<readFrameResult> | null
		wantWriteFrameCh: $.Channel<__goscript_writesched.FrameWriteRequest> | null
		wroteFrameCh: $.Channel<frameWriteResult> | null
		bodyReadCh: $.Channel<bodyReadMsg> | null
		serveMsgCh: $.Channel<any> | null
		flow: __goscript_flow.outflow
		inflow: __goscript_flow.inflow
		tlsState: tls.ConnectionState | $.VarRef<tls.ConnectionState> | null
		remoteAddrStr: string
		writeSched: __goscript_writesched.WriteScheduler | null
		serveG: __goscript_gotrack.goroutineLock
		pushEnabled: boolean
		sawClientPreface: boolean
		sawFirstSettings: boolean
		needToSendSettingsAck: boolean
		unackedSettings: number
		queuedControlFrames: number
		clientMaxStreams: number
		advMaxStreams: number
		curClientStreams: number
		curPushedStreams: number
		curHandlers: number
		maxClientStreamID: number
		maxPushPromiseID: number
		streams: globalThis.Map<number, stream | $.VarRef<stream> | null> | null
		unstartedHandlers: $.Slice<unstartedHandler>
		initialStreamSendWindowSize: number
		maxFrameSize: number
		peerMaxHeaderListSize: number
		canonHeader: globalThis.Map<string, string> | null
		canonHeaderKeysSize: number
		writingFrame: boolean
		writingFrameAsync: boolean
		needsFrameFlush: boolean
		inGoAway: boolean
		inFrameScheduleLoop: boolean
		needToSendGoAway: boolean
		goAwayCode: __goscript_errors.ErrCode
		shutdownTimer: __goscript_timer.timer | null
		idleTimer: __goscript_timer.timer | null
		headerWriteBuf: bytes.Buffer
		hpackEncoder: hpack.Encoder | $.VarRef<hpack.Encoder> | null
		shutdownOnce: sync.Once
	}

	constructor(init?: Partial<{srv?: Server | $.VarRef<Server> | null, hs?: http.Server | $.VarRef<http.Server> | null, conn?: net.Conn | null, bw?: __goscript_http2.bufferedWriter | $.VarRef<__goscript_http2.bufferedWriter> | null, handler?: http.Handler | null, baseCtx?: context2.Context | null, framer?: __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null, doneServing?: $.Channel<{}> | null, readFrameCh?: $.Channel<readFrameResult> | null, wantWriteFrameCh?: $.Channel<__goscript_writesched.FrameWriteRequest> | null, wroteFrameCh?: $.Channel<frameWriteResult> | null, bodyReadCh?: $.Channel<bodyReadMsg> | null, serveMsgCh?: $.Channel<any> | null, flow?: __goscript_flow.outflow, inflow?: __goscript_flow.inflow, tlsState?: tls.ConnectionState | $.VarRef<tls.ConnectionState> | null, remoteAddrStr?: string, writeSched?: __goscript_writesched.WriteScheduler | null, serveG?: __goscript_gotrack.goroutineLock, pushEnabled?: boolean, sawClientPreface?: boolean, sawFirstSettings?: boolean, needToSendSettingsAck?: boolean, unackedSettings?: number, queuedControlFrames?: number, clientMaxStreams?: number, advMaxStreams?: number, curClientStreams?: number, curPushedStreams?: number, curHandlers?: number, maxClientStreamID?: number, maxPushPromiseID?: number, streams?: globalThis.Map<number, stream | $.VarRef<stream> | null> | null, unstartedHandlers?: $.Slice<unstartedHandler>, initialStreamSendWindowSize?: number, maxFrameSize?: number, peerMaxHeaderListSize?: number, canonHeader?: globalThis.Map<string, string> | null, canonHeaderKeysSize?: number, writingFrame?: boolean, writingFrameAsync?: boolean, needsFrameFlush?: boolean, inGoAway?: boolean, inFrameScheduleLoop?: boolean, needToSendGoAway?: boolean, goAwayCode?: __goscript_errors.ErrCode, shutdownTimer?: __goscript_timer.timer | null, idleTimer?: __goscript_timer.timer | null, headerWriteBuf?: bytes.Buffer, hpackEncoder?: hpack.Encoder | $.VarRef<hpack.Encoder> | null, shutdownOnce?: sync.Once}>, __goscriptValue?: boolean) {
		this._fields = {
			srv: init?.srv ?? (null! as Server | $.VarRef<Server> | null),
			hs: init?.hs ?? (null! as http.Server | $.VarRef<http.Server> | null),
			conn: init?.conn ?? (null! as net.Conn | null),
			bw: init?.bw ?? (null! as __goscript_http2.bufferedWriter | $.VarRef<__goscript_http2.bufferedWriter> | null),
			handler: init?.handler ?? (null! as http.Handler | null),
			baseCtx: init?.baseCtx ?? (null! as context2.Context | null),
			framer: init?.framer ?? (null! as __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null),
			doneServing: init?.doneServing ?? (null! as $.Channel<{}> | null),
			readFrameCh: init?.readFrameCh ?? (null! as $.Channel<readFrameResult> | null),
			wantWriteFrameCh: init?.wantWriteFrameCh ?? (null! as $.Channel<__goscript_writesched.FrameWriteRequest> | null),
			wroteFrameCh: init?.wroteFrameCh ?? (null! as $.Channel<frameWriteResult> | null),
			bodyReadCh: init?.bodyReadCh ?? (null! as $.Channel<bodyReadMsg> | null),
			serveMsgCh: init?.serveMsgCh ?? (null! as $.Channel<any> | null),
			flow: init?.flow ? init.flow.clone() : new __goscript_flow.outflow(undefined, true),
			inflow: init?.inflow ? init.inflow.clone() : new __goscript_flow.inflow(undefined, true),
			tlsState: init?.tlsState ?? (null! as tls.ConnectionState | $.VarRef<tls.ConnectionState> | null),
			remoteAddrStr: init?.remoteAddrStr ?? ("" as string),
			writeSched: init?.writeSched ?? (null! as __goscript_writesched.WriteScheduler | null),
			serveG: init?.serveG ?? (0n as __goscript_gotrack.goroutineLock),
			pushEnabled: init?.pushEnabled ?? (false as boolean),
			sawClientPreface: init?.sawClientPreface ?? (false as boolean),
			sawFirstSettings: init?.sawFirstSettings ?? (false as boolean),
			needToSendSettingsAck: init?.needToSendSettingsAck ?? (false as boolean),
			unackedSettings: init?.unackedSettings ?? (0 as number),
			queuedControlFrames: init?.queuedControlFrames ?? (0 as number),
			clientMaxStreams: init?.clientMaxStreams ?? (0 as number),
			advMaxStreams: init?.advMaxStreams ?? (0 as number),
			curClientStreams: init?.curClientStreams ?? (0 as number),
			curPushedStreams: init?.curPushedStreams ?? (0 as number),
			curHandlers: init?.curHandlers ?? (0 as number),
			maxClientStreamID: init?.maxClientStreamID ?? (0 as number),
			maxPushPromiseID: init?.maxPushPromiseID ?? (0 as number),
			streams: init?.streams ?? (null! as globalThis.Map<number, stream | $.VarRef<stream> | null> | null),
			unstartedHandlers: init?.unstartedHandlers ?? (null! as $.Slice<unstartedHandler>),
			initialStreamSendWindowSize: init?.initialStreamSendWindowSize ?? (0 as number),
			maxFrameSize: init?.maxFrameSize ?? (0 as number),
			peerMaxHeaderListSize: init?.peerMaxHeaderListSize ?? (0 as number),
			canonHeader: init?.canonHeader ?? (null! as globalThis.Map<string, string> | null),
			canonHeaderKeysSize: init?.canonHeaderKeysSize ?? (0 as number),
			writingFrame: init?.writingFrame ?? (false as boolean),
			writingFrameAsync: init?.writingFrameAsync ?? (false as boolean),
			needsFrameFlush: init?.needsFrameFlush ?? (false as boolean),
			inGoAway: init?.inGoAway ?? (false as boolean),
			inFrameScheduleLoop: init?.inFrameScheduleLoop ?? (false as boolean),
			needToSendGoAway: init?.needToSendGoAway ?? (false as boolean),
			goAwayCode: init?.goAwayCode ?? (0 as __goscript_errors.ErrCode),
			shutdownTimer: init?.shutdownTimer ?? (null! as __goscript_timer.timer | null),
			idleTimer: init?.idleTimer ?? (null! as __goscript_timer.timer | null),
			headerWriteBuf: init?.headerWriteBuf ? $.markAsStructValue($.cloneStructValue(init.headerWriteBuf)) : $.markAsStructValue(new bytes.Buffer()),
			hpackEncoder: init?.hpackEncoder ?? (null! as hpack.Encoder | $.VarRef<hpack.Encoder> | null),
			shutdownOnce: init?.shutdownOnce ? $.markAsStructValue($.cloneStructValue(init.shutdownOnce)) : $.markAsStructValue(new sync.Once())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): serverConn {
		return new serverConn(this, true)
	}

	public __goscriptAssign(source: serverConn): void {
		const target = this._fields
		const values = source._fields
		target.srv = values.srv
		target.hs = values.hs
		target.conn = $.assignFieldValue(target.conn, values.conn, "net.Conn")
		target.bw = values.bw
		target.handler = $.assignFieldValue(target.handler, values.handler, "http.Handler")
		target.baseCtx = $.assignFieldValue(target.baseCtx, values.baseCtx, "context.Context")
		target.framer = values.framer
		target.doneServing = values.doneServing
		target.readFrameCh = values.readFrameCh
		target.wantWriteFrameCh = values.wantWriteFrameCh
		target.wroteFrameCh = values.wroteFrameCh
		target.bodyReadCh = values.bodyReadCh
		target.serveMsgCh = values.serveMsgCh
		$.assignStruct(target.flow, values.flow)
		$.assignStruct(target.inflow, values.inflow)
		target.tlsState = values.tlsState
		target.remoteAddrStr = values.remoteAddrStr
		target.writeSched = $.assignFieldValue(target.writeSched, values.writeSched, "http2.WriteScheduler")
		target.serveG = values.serveG
		target.pushEnabled = values.pushEnabled
		target.sawClientPreface = values.sawClientPreface
		target.sawFirstSettings = values.sawFirstSettings
		target.needToSendSettingsAck = values.needToSendSettingsAck
		target.unackedSettings = values.unackedSettings
		target.queuedControlFrames = values.queuedControlFrames
		target.clientMaxStreams = values.clientMaxStreams
		target.advMaxStreams = values.advMaxStreams
		target.curClientStreams = values.curClientStreams
		target.curPushedStreams = values.curPushedStreams
		target.curHandlers = values.curHandlers
		target.maxClientStreamID = values.maxClientStreamID
		target.maxPushPromiseID = values.maxPushPromiseID
		target.streams = values.streams
		target.unstartedHandlers = values.unstartedHandlers
		target.initialStreamSendWindowSize = values.initialStreamSendWindowSize
		target.maxFrameSize = values.maxFrameSize
		target.peerMaxHeaderListSize = values.peerMaxHeaderListSize
		target.canonHeader = values.canonHeader
		target.canonHeaderKeysSize = values.canonHeaderKeysSize
		target.writingFrame = values.writingFrame
		target.writingFrameAsync = values.writingFrameAsync
		target.needsFrameFlush = values.needsFrameFlush
		target.inGoAway = values.inGoAway
		target.inFrameScheduleLoop = values.inFrameScheduleLoop
		target.needToSendGoAway = values.needToSendGoAway
		target.goAwayCode = values.goAwayCode
		target.shutdownTimer = $.assignFieldValue(target.shutdownTimer, values.shutdownTimer, { kind: $.TypeKind.Interface, methods: [$.methodSignature("C", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])] })
		target.idleTimer = $.assignFieldValue(target.idleTimer, values.idleTimer, { kind: $.TypeKind.Interface, methods: [$.methodSignature("C", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])] })
		$.assignStruct(target.headerWriteBuf, values.headerWriteBuf)
		target.hpackEncoder = values.hpackEncoder
		$.assignStruct(target.shutdownOnce, values.shutdownOnce)
	}

	public async CloseConn(): globalThis.Promise<$.GoError> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		return $.pointerValue<Exclude<net.Conn, null>>($.pointerValue<serverConn>(sc).conn).Close()
	}

	public async Flush(): globalThis.Promise<$.GoError> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		return __goscript_http2.bufferedWriter.prototype.Flush.call($.pointerValue<serverConn>(sc).bw)
	}

	public Framer(): __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		return $.pointerValue<serverConn>(sc).framer
	}

	public HeaderEncoder(): [hpack.Encoder | $.VarRef<hpack.Encoder> | null, bytes.Buffer | $.VarRef<bytes.Buffer> | null] {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		return [(sc$ as serverConn).hpackEncoder, $.fieldRef((sc$ as serverConn)._fields, "headerWriteBuf")]
	}

	public async canonicalHeader(v: string): globalThis.Promise<string> {
		let sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		await __goscript_headermap.buildCommonHeaderMapsOnce()
		let [cv, ok] = $.mapGet<string, string, string>(__goscript_headermap.commonCanonHeader, v, "")
		if (ok) {
			return cv
		}
		let __goscriptTuple1: any = $.mapGet<string, string, string>((sc$ as serverConn).canonHeader, v, "")
		cv = __goscriptTuple1[0]
		ok = __goscriptTuple1[1]
		if (ok) {
			return cv
		}
		if ((sc$ as serverConn).canonHeader == null) {
			;(sc$ as serverConn).canonHeader = $.makeMap<string, string>()
		}
		cv = http.CanonicalHeaderKey(v)
		let size = 100 + ($.stringLen(v) * 2)
		if (((sc$ as serverConn).canonHeaderKeysSize + size) <= 2048) {
			$.mapSet((sc$ as serverConn).canonHeader, v, cv);
			;(sc$ as serverConn).canonHeaderKeysSize = (sc$ as serverConn).canonHeaderKeysSize + (size)
		}
		return cv
	}

	public async checkPriority(streamID: number, p: __goscript_frame.PriorityParam): globalThis.Promise<$.GoError> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		if (streamID == p.StreamDep) {
			// Section 5.3.1: "A stream cannot depend on itself. An endpoint MUST treat
			// this as a stream error (Section 5.4.2) of type PROTOCOL_ERROR."
			// Section 5.3.3 says that a stream can depend on one of its dependencies,
			// so it's only self-dependencies that are forbidden.
			return serverConn.prototype.countError.call(sc, "priority", $.interfaceValue<$.GoError>(__goscript_errors.streamError(streamID, 1), "http2.StreamError", "http2.StreamError"))
		}
		return null
	}

	public async closeAllStreamsOnConnClose(): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		for (const [__rangeKey, st] of (sc$ as serverConn).streams?.entries() ?? []) {
			await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).closeStream(st, errClientDisconnected) : serverConn.prototype.closeStream.call(sc, st, errClientDisconnected))
		}
	}

	public async closeStream(st: stream | $.VarRef<stream> | null, err: $.GoError): globalThis.Promise<void> {
		let sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		const st$: stream = st == null ? $.pointerTarget<stream>(st) : (st as any).__isVarRef === true ? (st as any).value : (st as any).__goValue === undefined ? (st as any) : $.pointerTarget<stream>(st)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		if (((st$ as stream).state == 0) || ((st$ as stream).state == 4)) {
			$.panic(await fmt.Sprintf("invariant; can't close stream in state %v", $.namedValueInterfaceValue<any>((st$ as stream).state, "http2.streamState", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
		}
		;(st$ as stream).state = 4
		if ((st$ as stream).readDeadline != null) {
			void (__goscriptAwait = $.pointerValue<__goscript_timer.timer>((st$ as stream).readDeadline).Stop(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((st$ as stream).writeDeadline != null) {
			void (__goscriptAwait = $.pointerValue<__goscript_timer.timer>((st$ as stream).writeDeadline).Stop(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as stream).isPushed() : stream.prototype.isPushed.call(st))) {
			;(sc$ as serverConn).curPushedStreams = (((sc$ as serverConn).curPushedStreams - 1) >>> 0)
		} else {
			;(sc$ as serverConn).curClientStreams = (((sc$ as serverConn).curClientStreams - 1) >>> 0)
		}
		$.deleteMapEntry((sc$ as serverConn).streams, (st$ as stream).id)
		if ($.len((sc$ as serverConn).streams) == 0) {
			await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).setConnState(2) : serverConn.prototype.setConnState.call(sc, 2))
			if (($.pointerValue<Server>((sc$ as serverConn).srv).IdleTimeout > 0n) && ((sc$ as serverConn).idleTimer != null)) {
				void (__goscriptAwait = $.pointerValue<__goscript_timer.timer>((sc$ as serverConn).idleTimer).Reset($.pointerValue<Server>((sc$ as serverConn).srv).IdleTimeout), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if (await h1ServerKeepAlivesDisabled((sc$ as serverConn).hs)) {
				await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).startGracefulShutdownInternal() : serverConn.prototype.startGracefulShutdownInternal.call(sc))
			}
		}
		{
			let p: __goscript_pipe.pipe | $.VarRef<__goscript_pipe.pipe> | null = (st$ as stream).body
			if (p != null) {
				// Return any buffered unread bytes worth of conn-level flow control.
				// See golang.org/issue/16481
				await serverConn.prototype.sendWindowUpdate.call(sc, null, await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as __goscript_pipe.pipe).Len() : __goscript_pipe.pipe.prototype.Len.call(p)))

				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as __goscript_pipe.pipe).CloseWithError(err) : __goscript_pipe.pipe.prototype.CloseWithError.call(p, err))
			}
		}
		{
			let [e, ok] = $.typeAssertTuple<__goscript_errors.StreamError>(err, "http2.StreamError")
			if (ok) {
				if (e.Cause != null) {
					err = e.Cause
				} else {
					err = errStreamClosed
				}
			}
		}
		;(st$ as stream).closeErr = err
		void (__goscriptAwait = (st$ as stream).cancelCtx!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		__goscript_http2.closeWaiter_Close((st$ as stream).cw)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_writesched.WriteScheduler, null>>((sc$ as serverConn).writeSched).CloseStream((st$ as stream).id), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async condlogf(err: $.GoError, format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		if (err == null) {
			return
		}
		if (((($.comparableEqual(err, io.EOF)) || ($.comparableEqual(err, io.ErrUnexpectedEOF))) || isClosedConnError(err)) || ($.comparableEqual(err, errPrefaceTimeout))) {
			// Boring, expected errors.
			await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).vlogf(format, args) : serverConn.prototype.vlogf.call(sc, format, args))
		} else {
			await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).logf(format, args) : serverConn.prototype.logf.call(sc, format, args))
		}
	}

	public async countError(name: string, err: $.GoError): globalThis.Promise<$.GoError> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		if ((sc == null) || ((sc$ as serverConn).srv == null)) {
			return err
		}
		let f: ((errType: string) => void) | null = $.pointerValue<Server>((sc$ as serverConn).srv).CountError
		if (f == null) {
			return err
		}
		let typ: string = ""
		let code: __goscript_errors.ErrCode = 0
		{
			const __goscriptTypeSwitchValue = err
			switch (true) {
				case $.typeAssert<__goscript_errors.ConnectionError>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError")).ok:
					{
						let e: __goscript_errors.ConnectionError = $.typeAssert<__goscript_errors.ConnectionError>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError")).value
						typ = "conn"
						code = $.uint(e, 32)
					}
					break
				case $.typeAssert<__goscript_errors.StreamError>(__goscriptTypeSwitchValue, "http2.StreamError").ok:
					{
						let e: __goscript_errors.StreamError = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_errors.StreamError>(__goscriptTypeSwitchValue, "http2.StreamError").value))
						typ = "stream"
						code = $.uint(e.Code, 32)
					}
					break
				default:
					{
						let e: any = __goscriptTypeSwitchValue
						return err
					}
					break
			}
		}
		let codeStr = $.mapGet<__goscript_errors.ErrCode, string, string>(__goscript_errors.errCodeName, code, "")[0]
		if ($.stringEqual(codeStr, "")) {
			codeStr = strconv.Itoa($.int(code))
		}
		void (__goscriptAwait = f!(await fmt.Sprintf("%s_%s_%s", typ, codeStr, name)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async curOpenStreams(): globalThis.Promise<number> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		return $.uint((((sc$ as serverConn).curClientStreams + (sc$ as serverConn).curPushedStreams) >>> 0), 32)
	}

	public async goAway(code: __goscript_errors.ErrCode): globalThis.Promise<void> {
		let sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		if ((sc$ as serverConn).inGoAway) {
			if ((sc$ as serverConn).goAwayCode == 0) {
				;(sc$ as serverConn).goAwayCode = code
			}
			return
		}
		;(sc$ as serverConn).inGoAway = true;
		;(sc$ as serverConn).needToSendGoAway = true;
		;(sc$ as serverConn).goAwayCode = code
		await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).scheduleFrameWrite() : serverConn.prototype.scheduleFrameWrite.call(sc))
	}

	public async handlerDone(): globalThis.Promise<void> {
		let sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG);
		;(sc$ as serverConn).curHandlers = (((sc$ as serverConn).curHandlers - 1) >>> 0)
		let i = 0
		let maxHandlers = (sc$ as serverConn).advMaxStreams
		for (; i < $.sliceLen((sc$ as serverConn).unstartedHandlers); i++) {
			let u = ($.arrayIndex((sc$ as serverConn).unstartedHandlers!, i)).clone()
			if ($.mapGet<number, stream | $.VarRef<stream> | null, stream | $.VarRef<stream> | null>((sc$ as serverConn).streams, u.streamID, null)[0] == null) {
				// This stream was reset before its goroutine had a chance to start.
				continue
			}
			if ((sc$ as serverConn).curHandlers >= maxHandlers) {
				break
			}
			;(sc$ as serverConn).curHandlers = (((sc$ as serverConn).curHandlers + 1) >>> 0)
			const __goscriptDeferCallee2 = $.functionValue(((__receiver) => (rw: responseWriter | $.VarRef<responseWriter> | null, req: http.Request | $.VarRef<http.Request> | null, handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null) => __receiver.runHandler(rw, req, handler))((sc$ as serverConn)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http2.responseWriter"), /* @__PURE__ */ $.pointerType("http.Request"), ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*serverConn).runHandler-fm")
			const __goscriptDeferArg1 = u.rw
			const __goscriptDeferArg2 = u.req
			const __goscriptDeferArg3 = u.handler
			queueMicrotask(async () => { await __goscriptDeferCallee2(__goscriptDeferArg1, __goscriptDeferArg2, __goscriptDeferArg3) })
			$.assignStruct($.sliceElems((sc$ as serverConn).unstartedHandlers!)[$.sliceSlot((sc$ as serverConn).unstartedHandlers!, i)], new unstartedHandler(undefined, true))
		}
		;(sc$ as serverConn).unstartedHandlers = $.goSlice((sc$ as serverConn).unstartedHandlers, i, undefined)
		if ($.sliceLen((sc$ as serverConn).unstartedHandlers) == 0) {
			;(sc$ as serverConn).unstartedHandlers = null
		}
	}

	public async logf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		{
			let lg: log.Logger | $.VarRef<log.Logger> | null = $.pointerValue<http.Server>($.pointerValue<serverConn>(sc).hs).ErrorLog
			if (lg != null) {
				await (lg !== null && (lg as any).__isVarRef !== true && (lg as any).__goValue === undefined ? ((lg as any) as log.Logger).Printf(format, args) : log.Logger.prototype.Printf.call(lg, format, args))
			} else {
				await log.Printf(format, args)
			}
		}
	}

	public maxHeaderListSize(): number {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		let n = $.pointerValue<http.Server>($.pointerValue<serverConn>(sc).hs).MaxHeaderBytes
		if (n <= 0) {
			n = 1048576
		}
		// http2's count is in a slightly different unit and includes 32 bytes per pair.
		// So, take the net/http.Server value and pad it up a bit, assuming 10 headers.
		const perFieldOverhead: number = 32
		const typicalHeaders: number = 10
		return $.uint(n + (10 * 32), 32)
	}

	public async newResponseWriter(st: stream | $.VarRef<stream> | null, req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<responseWriter | $.VarRef<responseWriter> | null> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		let rws: responseWriterState | $.VarRef<responseWriterState> | null = $.mustTypeAssert<responseWriterState | $.VarRef<responseWriterState> | null>(await responseWriterStatePool.value.Get(), /* @__PURE__ */ $.pointerType("http2.responseWriterState"))
		let rws$: responseWriterState = rws == null ? $.pointerTarget<responseWriterState>(rws) : (rws as any).__isVarRef === true ? (rws as any).value : (rws as any).__goValue === undefined ? (rws as any) : $.pointerTarget<responseWriterState>(rws)
		let bwSave: bufio.Writer | $.VarRef<bufio.Writer> | null = (rws$ as responseWriterState).bw
		$.assignStruct((rws$ as responseWriterState), new responseWriterState(undefined, true));
		;(rws$ as responseWriterState).conn = sc;
		;(rws$ as responseWriterState).bw = bwSave
		bufio.Writer.prototype.Reset.call((rws$ as responseWriterState).bw, $.interfaceValue<io.Writer | null>(new chunkWriter({rws: rws}, true), "http2.chunkWriter", "http2.chunkWriter"));
		;(rws$ as responseWriterState).stream = st;
		;(rws$ as responseWriterState).req = req
		return new responseWriter({rws: rws})
	}

	public async newStream(id: number, pusherID: number, state: __goscript_http2.streamState): globalThis.Promise<stream | $.VarRef<stream> | null> {
		let sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		if (id == 0) {
			$.panic("internal error: cannot create stream with id 0")
		}

		let [ctx, cancelCtx] = context2.WithCancel($.pointerValueOrNil((sc$ as serverConn).baseCtx)!)
		let st: stream | $.VarRef<stream> | null = new stream({sc: sc, id: id, state: state, ctx: ctx, cancelCtx: cancelCtx})
		let st$: stream = st == null ? $.pointerTarget<stream>(st) : (st as any).__isVarRef === true ? (st as any).value : (st as any).__goValue === undefined ? (st as any) : $.pointerTarget<stream>(st)
		__goscript_http2.closeWaiter_Init($.fieldRef((st$ as stream)._fields, "cw"));
		;(st$ as stream).flow.conn = $.fieldRef((sc$ as serverConn)._fields, "flow")
		void (st$ as stream).flow.add((sc$ as serverConn).initialStreamSendWindowSize)
		void (st$ as stream).inflow.init(Server.prototype.initialStreamRecvWindowSize.call((sc$ as serverConn).srv))
		if ($.pointerValue<http.Server>((sc$ as serverConn).hs).WriteTimeout > 0n) {
			;(st$ as stream).writeDeadline = await Server.prototype.afterFunc.call((sc$ as serverConn).srv, $.pointerValue<http.Server>((sc$ as serverConn).hs).WriteTimeout, $.functionValue(((__receiver) => () => __receiver.onWriteTimeout())((st$ as stream)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*stream).onWriteTimeout-fm"))
		}

		$.mapSet((sc$ as serverConn).streams, id, st)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_writesched.WriteScheduler, null>>((sc$ as serverConn).writeSched).OpenStream((st$ as stream).id, new __goscript_writesched.OpenStreamOptions({PusherID: pusherID}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as stream).isPushed() : stream.prototype.isPushed.call(st))) {
			;(sc$ as serverConn).curPushedStreams = (((sc$ as serverConn).curPushedStreams + 1) >>> 0)
		} else {
			;(sc$ as serverConn).curClientStreams = (((sc$ as serverConn).curClientStreams + 1) >>> 0)
		}
		if (await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).curOpenStreams() : serverConn.prototype.curOpenStreams.call(sc)) == 1) {
			await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).setConnState(1) : serverConn.prototype.setConnState.call(sc, 1))
		}

		return st
	}

	public async newWriterAndRequest(st: stream | $.VarRef<stream> | null, f: __goscript_frame.MetaHeadersFrame | $.VarRef<__goscript_frame.MetaHeadersFrame> | null): globalThis.Promise<[responseWriter | $.VarRef<responseWriter> | null, http.Request | $.VarRef<http.Request> | null, $.GoError]> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const f$: __goscript_frame.MetaHeadersFrame = f == null ? $.pointerTarget<__goscript_frame.MetaHeadersFrame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_frame.MetaHeadersFrame>(f)
		await __goscript_gotrack.goroutineLock_check($.pointerValue<serverConn>(sc).serveG)

		let rp = (() => { const __goscriptLiteralField8 = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.MetaHeadersFrame).PseudoValue("method") : __goscript_frame.MetaHeadersFrame.prototype.PseudoValue.call(f, "method")); const __goscriptLiteralField9 = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.MetaHeadersFrame).PseudoValue("scheme") : __goscript_frame.MetaHeadersFrame.prototype.PseudoValue.call(f, "scheme")); const __goscriptLiteralField10 = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.MetaHeadersFrame).PseudoValue("authority") : __goscript_frame.MetaHeadersFrame.prototype.PseudoValue.call(f, "authority")); const __goscriptLiteralField11 = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.MetaHeadersFrame).PseudoValue("path") : __goscript_frame.MetaHeadersFrame.prototype.PseudoValue.call(f, "path")); return new requestParam({method: __goscriptLiteralField8, scheme: __goscriptLiteralField9, authority: __goscriptLiteralField10, path: __goscriptLiteralField11}, true) })()

		let isConnect = $.stringEqual(rp.method, "CONNECT")
		if (isConnect) {
			if (((!$.stringEqual(rp.path, "")) || (!$.stringEqual(rp.scheme, ""))) || ($.stringEqual(rp.authority, ""))) {
				return [null, null, await serverConn.prototype.countError.call(sc, "bad_connect", $.interfaceValue<$.GoError>(__goscript_errors.streamError($.pointerValue<__goscript_frame.HeadersFrame>((f$ as __goscript_frame.MetaHeadersFrame).HeadersFrame).FrameHeader.StreamID, 1), "http2.StreamError", "http2.StreamError"))]
			}
		} else {
			if ((($.stringEqual(rp.method, "")) || ($.stringEqual(rp.path, ""))) || ((!$.stringEqual(rp.scheme, "https")) && (!$.stringEqual(rp.scheme, "http")))) {
				// See 8.1.2.6 Malformed Requests and Responses:
				//
				// Malformed requests or responses that are detected
				// MUST be treated as a stream error (Section 5.4.2)
				// of type PROTOCOL_ERROR."
				//
				// 8.1.2.3 Request Pseudo-Header Fields
				// "All HTTP/2 requests MUST include exactly one valid
				// value for the :method, :scheme, and :path
				// pseudo-header fields"
				return [null, null, await serverConn.prototype.countError.call(sc, "bad_path_method", $.interfaceValue<$.GoError>(__goscript_errors.streamError($.pointerValue<__goscript_frame.HeadersFrame>((f$ as __goscript_frame.MetaHeadersFrame).HeadersFrame).FrameHeader.StreamID, 1), "http2.StreamError", "http2.StreamError"))]
			}
		}

		rp.header = $.makeMap<string, $.Slice<string>>()
		for (let __goscriptRangeTarget1 = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.MetaHeadersFrame).RegularFields() : __goscript_frame.MetaHeadersFrame.prototype.RegularFields.call(f)), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let hf = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as hpack.HeaderField)).clone()
			http.Header_Add(rp.header, await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).canonicalHeader(hf.Name) : serverConn.prototype.canonicalHeader.call(sc, hf.Name)), hf.Value)
		}
		if ($.stringEqual(rp.authority, "")) {
			rp.authority = await http.Header_Get(rp.header, "Host")
		}

		let __goscriptTuple2: any = await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).newWriterAndRequestNoBody(st, rp) : serverConn.prototype.newWriterAndRequestNoBody.call(sc, st, rp))
		let rw: responseWriter | $.VarRef<responseWriter> | null = __goscriptTuple2[0]
		let req: http.Request | $.VarRef<http.Request> | null = __goscriptTuple2[1]
		let err = __goscriptTuple2[2]
		let req$: http.Request = req == null ? $.pointerTarget<http.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<http.Request>(req)
		if (err != null) {
			return [null, null, err]
		}
		let bodyOpen = !$.pointerValue<__goscript_frame.HeadersFrame>((f$ as __goscript_frame.MetaHeadersFrame).HeadersFrame).StreamEnded()
		if (bodyOpen) {
			{
				let __goscriptTuple3: any = $.mapGet<string, $.Slice<string>, $.Slice<string>>(rp.header, "Content-Length", null)
				let vv: $.Slice<string> = __goscriptTuple3[0]
				let ok = __goscriptTuple3[1]
				if (ok) {
					{
						let [cl, __goscriptShadow1] = strconv.ParseUint($.arrayIndex(vv!, 0), 10, 63)
						if (__goscriptShadow1 == null) {
							;(req$ as http.Request).ContentLength = $.int64(cl)
						} else {
							;(req$ as http.Request).ContentLength = 0n
						}
					}
				} else {
					;(req$ as http.Request).ContentLength = -1n
				}
			}
			$.pointerValue<requestBody>($.mustTypeAssert<requestBody | $.VarRef<requestBody> | null>((req$ as http.Request).Body, /* @__PURE__ */ $.pointerType("http2.requestBody"))).pipe = new __goscript_pipe.pipe({b: $.interfaceValue<__goscript_pipe.pipeBuffer | null>(new __goscript_databuffer.dataBuffer({expected: (req$ as http.Request).ContentLength}), "*http2.dataBuffer", /* @__PURE__ */ $.pointerType("http2.dataBuffer"))})
		}
		return [rw, req, null]
	}

	public async newWriterAndRequestNoBody(st: stream | $.VarRef<stream> | null, rp: requestParam): globalThis.Promise<[responseWriter | $.VarRef<responseWriter> | null, http.Request | $.VarRef<http.Request> | null, $.GoError]> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		const st$: stream = st == null ? $.pointerTarget<stream>(st) : (st as any).__isVarRef === true ? (st as any).value : (st as any).__goValue === undefined ? (st as any) : $.pointerTarget<stream>(st)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)

		let tlsState: tls.ConnectionState | $.VarRef<tls.ConnectionState> | null = null! as tls.ConnectionState | $.VarRef<tls.ConnectionState> | null
		if ($.stringEqual(rp.scheme, "https")) {
			tlsState = (sc$ as serverConn).tlsState
		}

		let needsContinue = httpguts.HeaderValuesContainsToken($.mapGet<string, $.Slice<string>, $.Slice<string>>(rp.header, "Expect", null)[0], "100-continue")
		if (needsContinue) {
			http.Header_Del(rp.header, "Expect")
		}
		// Merge Cookie headers into one "; "-delimited value.
		{
			let cookies: $.Slice<string> = $.mapGet<string, $.Slice<string>, $.Slice<string>>(rp.header, "Cookie", null)[0]
			if ($.sliceLen(cookies) > 1) {
				http.Header_Set(rp.header, "Cookie", strings.Join(cookies, "; "))
			}
		}

		// Setup Trailers
		let trailer: http.Header = null! as http.Header
		for (let __goscriptRangeTarget3 = $.mapGet<string, $.Slice<string>, $.Slice<string>>(rp.header, "Trailer", null)[0], __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let v = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
			for (let __goscriptRangeTarget2 = strings.Split(v, ","), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
				let key = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string)
				key = http.CanonicalHeaderKey(textproto.TrimString(key))
				switch (key) {
					case "Transfer-Encoding":
					case "Trailer":
					case "Content-Length":
					{
						break
					}
					default:
					{
						if (trailer == null) {
							trailer = $.makeMap<string, $.Slice<string>>()
						}
						$.mapSet(trailer, key, null)
						break
					}
				}
			}
		}
		$.deleteMapEntry(rp.header, "Trailer")

		let url_: url2.URL | $.VarRef<url2.URL> | null = null! as url2.URL | $.VarRef<url2.URL> | null
		let requestURI: string = ""
		if ($.stringEqual(rp.method, "CONNECT")) {
			url_ = new url2.URL({Host: rp.authority})
			requestURI = rp.authority
		} else {
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple4: any = url2.ParseRequestURI(rp.path)
			url_ = __goscriptTuple4[0]
			err = __goscriptTuple4[1]
			if (err != null) {
				return [null, null, await serverConn.prototype.countError.call(sc, "bad_path", $.interfaceValue<$.GoError>(__goscript_errors.streamError((st$ as stream).id, 1), "http2.StreamError", "http2.StreamError"))]
			}
			requestURI = rp.path
		}

		let body: requestBody | $.VarRef<requestBody> | null = new requestBody({conn: sc, stream: st, needsContinue: needsContinue})
		let req: http.Request | $.VarRef<http.Request> | null = new http.Request({Method: rp.method, URL: url_, RemoteAddr: (sc$ as serverConn).remoteAddrStr, Header: rp.header, RequestURI: requestURI, Proto: "HTTP/2.0", ProtoMajor: 2, ProtoMinor: 0, TLS: tlsState, Host: rp.authority, Body: $.interfaceValue<io.ReadCloser | null>(body, "*http2.requestBody", /* @__PURE__ */ $.pointerType("http2.requestBody")), Trailer: trailer})
		req = http.Request.prototype.WithContext.call($.pointerValue<http.Request>(req), $.pointerValueOrNil((st$ as stream).ctx)!)

		let rw: responseWriter | $.VarRef<responseWriter> | null = await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).newResponseWriter(st, req) : serverConn.prototype.newResponseWriter.call(sc, st, req))
		return [rw, req, null]
	}

	public async noteBodyRead(st: stream | $.VarRef<stream> | null, n: number): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const st$: stream = st == null ? $.pointerTarget<stream>(st) : (st as any).__isVarRef === true ? (st as any).value : (st as any).__goValue === undefined ? (st as any) : $.pointerTarget<stream>(st)
		await __goscript_gotrack.goroutineLock_check($.pointerValue<serverConn>(sc).serveG)
		await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).sendWindowUpdate(null, n) : serverConn.prototype.sendWindowUpdate.call(sc, null, n))
		if (((st$ as stream).state != 3) && ((st$ as stream).state != 4)) {
			// Don't send this WINDOW_UPDATE if the stream is closed
			// remotely.
			await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).sendWindowUpdate(st, n) : serverConn.prototype.sendWindowUpdate.call(sc, st, n))
		}
	}

	public async noteBodyReadFromHandler(st: stream | $.VarRef<stream> | null, n: number, err: $.GoError): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_checkNotOn((sc$ as serverConn).serveG)
		if (n > 0) {
			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: true,
					channel: (sc$ as serverConn).bodyReadCh,
					value: new bodyReadMsg({st: st, n: n}, true),
				},
				{
					id: 1,
					isSend: false,
					channel: (sc$ as serverConn).doneServing,
				}
			], false)
			if (__goscriptSelect0HasReturn) {
				return __goscriptSelect0Value
			}
		}
	}

	public async notePanic(): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const __defer = new $.DisposableStack()
		try {
			// Note: this is for serverConn.serve panicking, not http.Handler code.
			if (testHookOnPanicMu != null) {
				await sync.Mutex.prototype.Lock.call($.pointerValue<sync.Mutex>(testHookOnPanicMu))
				const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<sync.Mutex>(testHookOnPanicMu)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
				__defer.defer(() => { __goscriptDeferCallee3() })
			}
			if (testHookOnPanic != null) {
				{
					let e = $.recover()
					if (e != null) {
						if ((__goscriptAwait = testHookOnPanic!(sc, e), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
							$.panic(e)
						}
					}
				}
			}
			__defer.dispose()
		} catch (e) {
			__defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
	}

	public async onIdleTimer(): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		await serverConn.prototype.sendServeMsg.call(sc, $.interfaceValue(idleTimerMsg, "*http2.serverMessage", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "http2.serverMessage"))))
	}

	public async onSettingsTimer(): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		await serverConn.prototype.sendServeMsg.call(sc, $.interfaceValue(settingsTimerMsg, "*http2.serverMessage", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "http2.serverMessage"))))
	}

	public async onShutdownTimer(): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		await serverConn.prototype.sendServeMsg.call(sc, $.interfaceValue(shutdownTimerMsg, "*http2.serverMessage", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "http2.serverMessage"))))
	}

	public async processData(f: __goscript_frame.DataFrame | $.VarRef<__goscript_frame.DataFrame> | null): globalThis.Promise<$.GoError> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		const f$: __goscript_frame.DataFrame = f == null ? $.pointerTarget<__goscript_frame.DataFrame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_frame.DataFrame>(f)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		let id = (f$ as __goscript_frame.DataFrame).FrameHeader.Header().StreamID

		let data: $.Slice<number> = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.DataFrame).Data() : __goscript_frame.DataFrame.prototype.Data.call(f))
		let __goscriptTuple5: any = await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).state(id) : serverConn.prototype.state.call(sc, id))
		let state = __goscriptTuple5[0]
		let st: stream | $.VarRef<stream> | null = __goscriptTuple5[1]
		let st$: stream = st == null ? $.pointerTarget<stream>(st) : (st as any).__isVarRef === true ? (st as any).value : (st as any).__goValue === undefined ? (st as any) : $.pointerTarget<stream>(st)
		if ((id == 0) || (state == 0)) {
			// Section 6.1: "DATA frames MUST be associated with a
			// stream. If a DATA frame is received whose stream
			// identifier field is 0x0, the recipient MUST respond
			// with a connection error (Section 5.4.1) of type
			// PROTOCOL_ERROR."
			//
			// Section 5.1: "Receiving any frame other than HEADERS
			// or PRIORITY on a stream in this state MUST be
			// treated as a connection error (Section 5.4.1) of
			// type PROTOCOL_ERROR."
			return serverConn.prototype.countError.call(sc, "data_on_idle", $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError")))
		}

		// "If a DATA frame is received whose stream is not in "open"
		// or "half closed (local)" state, the recipient MUST respond
		// with a stream error (Section 5.4.2) of type STREAM_CLOSED."
		if ((((st == null) || (state != 1)) || (st$ as stream).gotTrailerHeader) || (st$ as stream).resetQueued) {
			// This includes sending a RST_STREAM if the stream is
			// in stateHalfClosedLocal (which currently means that
			// the http.Handler returned, so it's done reading &
			// done writing). Try to stop the client from sending
			// more DATA.

			// But still enforce their connection-level flow control,
			// and return any flow control bytes since we're not going
			// to consume them.
			if (!(sc$ as serverConn).inflow.take((f$ as __goscript_frame.DataFrame).FrameHeader.Length)) {
				return (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).countError("data_flow", $.interfaceValue<$.GoError>(__goscript_errors.streamError(id, 3), "http2.StreamError", "http2.StreamError")) : serverConn.prototype.countError.call(sc, "data_flow", $.interfaceValue<$.GoError>(__goscript_errors.streamError(id, 3), "http2.StreamError", "http2.StreamError")))
			}
			await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).sendWindowUpdate(null, $.int((f$ as __goscript_frame.DataFrame).FrameHeader.Length)) : serverConn.prototype.sendWindowUpdate.call(sc, null, $.int((f$ as __goscript_frame.DataFrame).FrameHeader.Length)))

			if ((st != null) && (st$ as stream).resetQueued) {
				// Already have a stream error in flight. Don't send another.
				return null
			}
			return (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).countError("closed", $.interfaceValue<$.GoError>(__goscript_errors.streamError(id, 5), "http2.StreamError", "http2.StreamError")) : serverConn.prototype.countError.call(sc, "closed", $.interfaceValue<$.GoError>(__goscript_errors.streamError(id, 5), "http2.StreamError", "http2.StreamError")))
		}
		if ((st$ as stream).body == null) {
			$.panic("internal error: should have a body in this state")
		}

		// Sender sending more than they'd declared?
		if (((st$ as stream).declBodyBytes != -1n) && (($.int64Add((st$ as stream).bodyBytes, $.int64($.sliceLen(data)))) > (st$ as stream).declBodyBytes)) {
			if (!(sc$ as serverConn).inflow.take((f$ as __goscript_frame.DataFrame).FrameHeader.Length)) {
				return (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).countError("data_flow", $.interfaceValue<$.GoError>(__goscript_errors.streamError(id, 3), "http2.StreamError", "http2.StreamError")) : serverConn.prototype.countError.call(sc, "data_flow", $.interfaceValue<$.GoError>(__goscript_errors.streamError(id, 3), "http2.StreamError", "http2.StreamError")))
			}
			await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).sendWindowUpdate(null, $.int((f$ as __goscript_frame.DataFrame).FrameHeader.Length)) : serverConn.prototype.sendWindowUpdate.call(sc, null, $.int((f$ as __goscript_frame.DataFrame).FrameHeader.Length)))

			await __goscript_pipe.pipe.prototype.CloseWithError.call((st$ as stream).body, fmt.Errorf("sender tried to send more than declared Content-Length of %d bytes", $.basicInterfaceValue((st$ as stream).declBodyBytes, "int64")))
			// RFC 7540, sec 8.1.2.6: A request or response is also malformed if the
			// value of a content-length header field does not equal the sum of the
			// DATA frame payload lengths that form the body.
			return serverConn.prototype.countError.call(sc, "send_too_much", $.interfaceValue<$.GoError>(__goscript_errors.streamError(id, 1), "http2.StreamError", "http2.StreamError"))
		}
		if ((f$ as __goscript_frame.DataFrame).FrameHeader.Length > 0) {
			// Check whether the client has flow control quota.
			if (!__goscript_flow.takeInflows($.fieldRef((sc$ as serverConn)._fields, "inflow"), $.fieldRef((st$ as stream)._fields, "inflow"), (f$ as __goscript_frame.DataFrame).FrameHeader.Length)) {
				return serverConn.prototype.countError.call(sc, "flow_on_data_length", $.interfaceValue<$.GoError>(__goscript_errors.streamError(id, 3), "http2.StreamError", "http2.StreamError"))
			}

			if ($.sliceLen(data) > 0) {
				;(st$ as stream).bodyBytes = $.int64Add((st$ as stream).bodyBytes, $.int64($.sliceLen(data)))
				let [wrote, err] = await __goscript_pipe.pipe.prototype.Write.call((st$ as stream).body, data)
				if (err != null) {
					// The handler has closed the request body.
					// Return the connection-level flow control for the discarded data,
					// but not the stream-level flow control.
					await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).sendWindowUpdate(null, $.int((f$ as __goscript_frame.DataFrame).FrameHeader.Length) - wrote) : serverConn.prototype.sendWindowUpdate.call(sc, null, $.int((f$ as __goscript_frame.DataFrame).FrameHeader.Length) - wrote))
					return null
				}
				if (wrote != $.sliceLen(data)) {
					$.panic("internal error: bad Writer")
				}
			}

			// Return any padded flow control now, since we won't
			// refund it later on body reads.
			// Call sendWindowUpdate even if there is no padding,
			// to return buffered flow control credit if the sent
			// window has shrunk.
			let pad = $.int((($.int((f$ as __goscript_frame.DataFrame).FrameHeader.Length, 32) - $.int($.sliceLen(data), 32)) | 0), 32)
			await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).sendWindowUpdate32(null, pad) : serverConn.prototype.sendWindowUpdate32.call(sc, null, pad))
			await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).sendWindowUpdate32(st, pad) : serverConn.prototype.sendWindowUpdate32.call(sc, st, pad))
		}
		if ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.DataFrame).StreamEnded() : __goscript_frame.DataFrame.prototype.StreamEnded.call(f))) {
			await (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as stream).endStream() : stream.prototype.endStream.call(st))
		}
		return null
	}

	public async processFrame(f: __goscript_frame.Frame | null): globalThis.Promise<$.GoError> {
		let sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)

		// First frame received must be SETTINGS.
		if (!(sc$ as serverConn).sawFirstSettings) {
			{
				let [, ok] = $.typeAssertTuple<__goscript_frame.SettingsFrame | $.VarRef<__goscript_frame.SettingsFrame> | null>(f, /* @__PURE__ */ $.pointerType("http2.SettingsFrame"))
				if (!ok) {
					return serverConn.prototype.countError.call(sc, "first_settings", $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError")))
				}
			}
			;(sc$ as serverConn).sawFirstSettings = true
		}

		// Discard frames for streams initiated after the identified last
		// stream sent in a GOAWAY, or all frames after sending an error.
		// We still need to return connection-level flow control for DATA frames.
		// RFC 9113 Section 6.8.
		if ((sc$ as serverConn).inGoAway && (((sc$ as serverConn).goAwayCode != 0) || (((__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<__goscript_frame.Frame, null>) : $.pointerValue<Exclude<__goscript_frame.Frame, null>>(f)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.FrameHeader).StreamID > (sc$ as serverConn).maxClientStreamID))) {

			let __goscriptShadow2 = f
			{
				let __goscriptTuple6: any = $.typeAssertTuple<__goscript_frame.DataFrame | $.VarRef<__goscript_frame.DataFrame> | null>(__goscriptShadow2, /* @__PURE__ */ $.pointerType("http2.DataFrame"))
				let __goscriptShadow3: __goscript_frame.DataFrame | $.VarRef<__goscript_frame.DataFrame> | null = __goscriptTuple6[0]
				let ok = __goscriptTuple6[1]
				if (ok) {
					if (!(sc$ as serverConn).inflow.take($.pointerValue<__goscript_frame.DataFrame>(__goscriptShadow3).FrameHeader.Length)) {
						return serverConn.prototype.countError.call(sc, "data_flow", $.interfaceValue<$.GoError>(__goscript_errors.streamError($.pointerValue<__goscript_frame.DataFrame>(__goscriptShadow3).FrameHeader.Header().StreamID, 3), "http2.StreamError", "http2.StreamError"))
					}
					await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).sendWindowUpdate(null, $.int($.pointerValue<__goscript_frame.DataFrame>(__goscriptShadow3).FrameHeader.Length)) : serverConn.prototype.sendWindowUpdate.call(sc, null, $.int($.pointerValue<__goscript_frame.DataFrame>(__goscriptShadow3).FrameHeader.Length)))
				}
			}
			return null
		}

		{
			const __goscriptTypeSwitchValue = f
			switch (true) {
				case $.typeAssert<__goscript_frame.SettingsFrame | $.VarRef<__goscript_frame.SettingsFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.SettingsFrame")).ok:
					{
						let f: __goscript_frame.SettingsFrame | $.VarRef<__goscript_frame.SettingsFrame> | null = $.typeAssert<__goscript_frame.SettingsFrame | $.VarRef<__goscript_frame.SettingsFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.SettingsFrame")).value
						return (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).processSettings(f) : serverConn.prototype.processSettings.call(sc, f))
					}
					break
				case $.typeAssert<__goscript_frame.MetaHeadersFrame | $.VarRef<__goscript_frame.MetaHeadersFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")).ok:
					{
						let f: __goscript_frame.MetaHeadersFrame | $.VarRef<__goscript_frame.MetaHeadersFrame> | null = $.typeAssert<__goscript_frame.MetaHeadersFrame | $.VarRef<__goscript_frame.MetaHeadersFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")).value
						return (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).processHeaders(f) : serverConn.prototype.processHeaders.call(sc, f))
					}
					break
				case $.typeAssert<__goscript_frame.WindowUpdateFrame | $.VarRef<__goscript_frame.WindowUpdateFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.WindowUpdateFrame")).ok:
					{
						let f: __goscript_frame.WindowUpdateFrame | $.VarRef<__goscript_frame.WindowUpdateFrame> | null = $.typeAssert<__goscript_frame.WindowUpdateFrame | $.VarRef<__goscript_frame.WindowUpdateFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.WindowUpdateFrame")).value
						return (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).processWindowUpdate(f) : serverConn.prototype.processWindowUpdate.call(sc, f))
					}
					break
				case $.typeAssert<__goscript_frame.PingFrame | $.VarRef<__goscript_frame.PingFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.PingFrame")).ok:
					{
						let f: __goscript_frame.PingFrame | $.VarRef<__goscript_frame.PingFrame> | null = $.typeAssert<__goscript_frame.PingFrame | $.VarRef<__goscript_frame.PingFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.PingFrame")).value
						return (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).processPing(f) : serverConn.prototype.processPing.call(sc, f))
					}
					break
				case $.typeAssert<__goscript_frame.DataFrame | $.VarRef<__goscript_frame.DataFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.DataFrame")).ok:
					{
						let f: __goscript_frame.DataFrame | $.VarRef<__goscript_frame.DataFrame> | null = $.typeAssert<__goscript_frame.DataFrame | $.VarRef<__goscript_frame.DataFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.DataFrame")).value
						return (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).processData(f) : serverConn.prototype.processData.call(sc, f))
					}
					break
				case $.typeAssert<__goscript_frame.RSTStreamFrame | $.VarRef<__goscript_frame.RSTStreamFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.RSTStreamFrame")).ok:
					{
						let f: __goscript_frame.RSTStreamFrame | $.VarRef<__goscript_frame.RSTStreamFrame> | null = $.typeAssert<__goscript_frame.RSTStreamFrame | $.VarRef<__goscript_frame.RSTStreamFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.RSTStreamFrame")).value
						return (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).processResetStream(f) : serverConn.prototype.processResetStream.call(sc, f))
					}
					break
				case $.typeAssert<__goscript_frame.PriorityFrame | $.VarRef<__goscript_frame.PriorityFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.PriorityFrame")).ok:
					{
						let f: __goscript_frame.PriorityFrame | $.VarRef<__goscript_frame.PriorityFrame> | null = $.typeAssert<__goscript_frame.PriorityFrame | $.VarRef<__goscript_frame.PriorityFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.PriorityFrame")).value
						return (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).processPriority(f) : serverConn.prototype.processPriority.call(sc, f))
					}
					break
				case $.typeAssert<__goscript_frame.GoAwayFrame | $.VarRef<__goscript_frame.GoAwayFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.GoAwayFrame")).ok:
					{
						let f: __goscript_frame.GoAwayFrame | $.VarRef<__goscript_frame.GoAwayFrame> | null = $.typeAssert<__goscript_frame.GoAwayFrame | $.VarRef<__goscript_frame.GoAwayFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.GoAwayFrame")).value
						return (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).processGoAway(f) : serverConn.prototype.processGoAway.call(sc, f))
					}
					break
				case $.typeAssert<__goscript_frame.PushPromiseFrame | $.VarRef<__goscript_frame.PushPromiseFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.PushPromiseFrame")).ok:
					{
						let f: __goscript_frame.PushPromiseFrame | $.VarRef<__goscript_frame.PushPromiseFrame> | null = $.typeAssert<__goscript_frame.PushPromiseFrame | $.VarRef<__goscript_frame.PushPromiseFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.PushPromiseFrame")).value
						return serverConn.prototype.countError.call(sc, "push_promise", $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError")))
					}
					break
				default:
					{
						let f: any = __goscriptTypeSwitchValue
						await serverConn.prototype.vlogf.call(sc, "http2: server ignoring frame: %v", $.arrayToSlice<any>([$.interfaceValue((((__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<__goscript_frame.Frame, null>) : $.pointerValue<Exclude<__goscript_frame.Frame, null>>(f)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.FrameHeader)).clone(), "http2.FrameHeader", "http2.FrameHeader")]))
						return null
					}
					break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async processFrameFromReader(res: readFrameResult): globalThis.Promise<boolean> {
		let sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		let err = res.err
		if (err != null) {
			if ($.comparableEqual(err, __goscript_frame.ErrFrameTooLarge)) {
				await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).goAway(6) : serverConn.prototype.goAway.call(sc, 6))
				return true
			}
			let clientGone = (($.comparableEqual(err, io.EOF)) || ($.comparableEqual(err, io.ErrUnexpectedEOF))) || isClosedConnError(err)
			if (clientGone) {
				// TODO: could we also get into this state if
				// the peer does a half close
				// (e.g. CloseWrite) because they're done
				// sending frames but they're still wanting
				// our open replies?  Investigate.
				// TODO: add CloseWrite to crypto/tls.Conn first
				// so we have a way to test this? I suppose
				// just for testing we could have a non-TLS mode.
				return false
			}
		} else {
			let f = res.f
			if (__goscript_http2.VerboseLogs) {
				await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).vlogf("http2: server read frame %v", $.arrayToSlice<any>([await __goscript_frame.summarizeFrame(f)])) : serverConn.prototype.vlogf.call(sc, "http2: server read frame %v", $.arrayToSlice<any>([await __goscript_frame.summarizeFrame(f)])))
			}
			err = await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).processFrame(f) : serverConn.prototype.processFrame.call(sc, f))
			if (err == null) {
				return true
			}
		}

		{
			const __goscriptTypeSwitchValue = err
			switch (true) {
				case $.typeAssert<__goscript_errors.StreamError>(__goscriptTypeSwitchValue, "http2.StreamError").ok:
					{
						let ev: __goscript_errors.StreamError = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_errors.StreamError>(__goscriptTypeSwitchValue, "http2.StreamError").value))
						await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).resetStream(ev) : serverConn.prototype.resetStream.call(sc, ev))
						return true
					}
					break
				case $.typeAssert<__goscript_errors.goAwayFlowError>(__goscriptTypeSwitchValue, "http2.goAwayFlowError").ok:
					{
						let ev: __goscript_errors.goAwayFlowError = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_errors.goAwayFlowError>(__goscriptTypeSwitchValue, "http2.goAwayFlowError").value))
						await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).goAway(3) : serverConn.prototype.goAway.call(sc, 3))
						return true
					}
					break
				case $.typeAssert<__goscript_errors.ConnectionError>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError")).ok:
					{
						let ev: __goscript_errors.ConnectionError = $.typeAssert<__goscript_errors.ConnectionError>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError")).value
						if (res.f != null) {
							{
								let id = ((__goscriptAwait = $.pointerValue<Exclude<__goscript_frame.Frame, null>>(res.f).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.FrameHeader).StreamID
								if (id > (sc$ as serverConn).maxClientStreamID) {
									;(sc$ as serverConn).maxClientStreamID = id
								}
							}
						}
						await serverConn.prototype.logf.call(sc, "http2: server connection error from %v: %v", $.arrayToSlice<any>([((__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((sc$ as serverConn).conn).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any), $.namedValueInterfaceValue<any>(ev, "http2.ConnectionError", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())]))
						await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).goAway($.uint(ev, 32)) : serverConn.prototype.goAway.call(sc, $.uint(ev, 32)))
						return true
					}
					break
				default:
					{
						let ev: any = __goscriptTypeSwitchValue
						if (res.err != null) {
							await serverConn.prototype.vlogf.call(sc, "http2: server closing client connection; error reading frame from client %s: %v", $.arrayToSlice<any>([((__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((sc$ as serverConn).conn).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any), (err as any)]))
						} else {
							await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).logf("http2: server closing client connection: %v", $.arrayToSlice<any>([(err as any)])) : serverConn.prototype.logf.call(sc, "http2: server closing client connection: %v", $.arrayToSlice<any>([(err as any)])))
						}
						return false
					}
					break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async processGoAway(f: __goscript_frame.GoAwayFrame | $.VarRef<__goscript_frame.GoAwayFrame> | null): globalThis.Promise<$.GoError> {
		let sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		if ($.pointerValue<__goscript_frame.GoAwayFrame>(f).ErrCode != 0) {
			await serverConn.prototype.logf.call(sc, "http2: received GOAWAY %+v, starting graceful shutdown", $.arrayToSlice<any>([$.interfaceValue(f, "*http2.GoAwayFrame", /* @__PURE__ */ $.pointerType("http2.GoAwayFrame"))]))
		} else {
			await serverConn.prototype.vlogf.call(sc, "http2: received GOAWAY %+v, starting graceful shutdown", $.arrayToSlice<any>([$.interfaceValue(f, "*http2.GoAwayFrame", /* @__PURE__ */ $.pointerType("http2.GoAwayFrame"))]))
		}
		await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).startGracefulShutdownInternal() : serverConn.prototype.startGracefulShutdownInternal.call(sc));
		// http://tools.ietf.org/html/rfc7540#section-6.8
		// We should not create any new streams, which means we should disable push.
		;(sc$ as serverConn).pushEnabled = false
		return null
	}

	public async processHeaders(f: __goscript_frame.MetaHeadersFrame | $.VarRef<__goscript_frame.MetaHeadersFrame> | null): globalThis.Promise<$.GoError> {
		let sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		const f$: __goscript_frame.MetaHeadersFrame = f == null ? $.pointerTarget<__goscript_frame.MetaHeadersFrame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_frame.MetaHeadersFrame>(f)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		let id = $.pointerValue<__goscript_frame.HeadersFrame>((f$ as __goscript_frame.MetaHeadersFrame).HeadersFrame).FrameHeader.StreamID
		// http://tools.ietf.org/html/rfc7540#section-5.1.1
		// Streams initiated by a client MUST use odd-numbered stream
		// identifiers. [...] An endpoint that receives an unexpected
		// stream identifier MUST respond with a connection error
		// (Section 5.4.1) of type PROTOCOL_ERROR.
		if ($.uint((id % 2), 32) != 1) {
			return serverConn.prototype.countError.call(sc, "headers_even", $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError")))
		}
		// A HEADERS frame can be used to create a new stream or
		// send a trailer for an open one. If we already have a stream
		// open, let it process its own HEADERS frame (trailers at this
		// point, if it's valid).
		{
			let st: stream | $.VarRef<stream> | null = $.mapGet<number, stream | $.VarRef<stream> | null, stream | $.VarRef<stream> | null>((sc$ as serverConn).streams, $.pointerValue<__goscript_frame.HeadersFrame>((f$ as __goscript_frame.MetaHeadersFrame).HeadersFrame).FrameHeader.StreamID, null)[0]
			if (st != null) {
				if ($.pointerValue<stream>(st).resetQueued) {
					// We're sending RST_STREAM to close the stream, so don't bother
					// processing this frame.
					return null
				}
				// RFC 7540, sec 5.1: If an endpoint receives additional frames, other than
				// WINDOW_UPDATE, PRIORITY, or RST_STREAM, for a stream that is in
				// this state, it MUST respond with a stream error (Section 5.4.2) of
				// type STREAM_CLOSED.
				if ($.pointerValue<stream>(st).state == 3) {
					return serverConn.prototype.countError.call(sc, "headers_half_closed", $.interfaceValue<$.GoError>(__goscript_errors.streamError(id, 5), "http2.StreamError", "http2.StreamError"))
				}
				return (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as stream).processTrailerHeaders(f) : stream.prototype.processTrailerHeaders.call(st, f))
			}
		}

		// [...] The identifier of a newly established stream MUST be
		// numerically greater than all streams that the initiating
		// endpoint has opened or reserved. [...]  An endpoint that
		// receives an unexpected stream identifier MUST respond with
		// a connection error (Section 5.4.1) of type PROTOCOL_ERROR.
		if (id <= (sc$ as serverConn).maxClientStreamID) {
			return serverConn.prototype.countError.call(sc, "stream_went_down", $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError")))
		}
		;(sc$ as serverConn).maxClientStreamID = id

		if ((sc$ as serverConn).idleTimer != null) {
			void (__goscriptAwait = $.pointerValue<__goscript_timer.timer>((sc$ as serverConn).idleTimer).Stop(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		// http://tools.ietf.org/html/rfc7540#section-5.1.2
		// [...] Endpoints MUST NOT exceed the limit set by their peer. An
		// endpoint that receives a HEADERS frame that causes their
		// advertised concurrent stream limit to be exceeded MUST treat
		// this as a stream error (Section 5.4.2) of type PROTOCOL_ERROR
		// or REFUSED_STREAM.
		if ($.uint(((((sc$ as serverConn).curClientStreams + 1) >>> 0)), 32) > (sc$ as serverConn).advMaxStreams) {
			if ((sc$ as serverConn).unackedSettings == 0) {
				// They should know better.
				return serverConn.prototype.countError.call(sc, "over_max_streams", $.interfaceValue<$.GoError>(__goscript_errors.streamError(id, 1), "http2.StreamError", "http2.StreamError"))
			}
			// Assume it's a network race, where they just haven't
			// received our last SETTINGS update. But actually
			// this can't happen yet, because we don't yet provide
			// a way for users to adjust server parameters at
			// runtime.
			return serverConn.prototype.countError.call(sc, "over_max_streams_race", $.interfaceValue<$.GoError>(__goscript_errors.streamError(id, 7), "http2.StreamError", "http2.StreamError"))
		}

		let initialState = 1
		if ($.pointerValue<__goscript_frame.HeadersFrame>((f$ as __goscript_frame.MetaHeadersFrame).HeadersFrame).StreamEnded()) {
			initialState = 3
		}
		let st: stream | $.VarRef<stream> | null = await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).newStream(id, 0, initialState) : serverConn.prototype.newStream.call(sc, id, 0, initialState))
		let st$: stream = st == null ? $.pointerTarget<stream>(st) : (st as any).__isVarRef === true ? (st as any).value : (st as any).__goValue === undefined ? (st as any) : $.pointerTarget<stream>(st)

		if ($.pointerValue<__goscript_frame.HeadersFrame>((f$ as __goscript_frame.MetaHeadersFrame).HeadersFrame).HasPriority()) {
			{
				let err = await serverConn.prototype.checkPriority.call(sc, $.pointerValue<__goscript_frame.HeadersFrame>((f$ as __goscript_frame.MetaHeadersFrame).HeadersFrame).FrameHeader.StreamID, ($.pointerValue<__goscript_frame.HeadersFrame>((f$ as __goscript_frame.MetaHeadersFrame).HeadersFrame).Priority).clone())
				if (err != null) {
					return err
				}
			}
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_writesched.WriteScheduler, null>>((sc$ as serverConn).writeSched).AdjustStream((st$ as stream).id, ($.pointerValue<__goscript_frame.HeadersFrame>((f$ as __goscript_frame.MetaHeadersFrame).HeadersFrame).Priority).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		let __goscriptTuple7: any = await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).newWriterAndRequest(st, f) : serverConn.prototype.newWriterAndRequest.call(sc, st, f))
		let rw: responseWriter | $.VarRef<responseWriter> | null = __goscriptTuple7[0]
		let req: http.Request | $.VarRef<http.Request> | null = __goscriptTuple7[1]
		let err = __goscriptTuple7[2]
		let req$: http.Request = req == null ? $.pointerTarget<http.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<http.Request>(req)
		if (err != null) {
			return err
		}
		;(st$ as stream).reqTrailer = (req$ as http.Request).Trailer
		if ((st$ as stream).reqTrailer != null) {
			;(st$ as stream).trailer = $.makeMap<string, $.Slice<string>>()
		}
		;(st$ as stream).body = $.pointerValue<requestBody>($.mustTypeAssert<requestBody | $.VarRef<requestBody> | null>((req$ as http.Request).Body, /* @__PURE__ */ $.pointerType("http2.requestBody"))).pipe;
		;(st$ as stream).declBodyBytes = (req$ as http.Request).ContentLength

		let handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null = ($.functionValue(((__receiver) => (_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => __receiver.ServeHTTP(_p0, _p1))($.pointerValue<Exclude<http.Handler, null>>((sc$ as serverConn).handler)), ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo), "net/http.Handler.ServeHTTP-fm") as ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null)
		if ((f$ as __goscript_frame.MetaHeadersFrame).Truncated) {
			// Their header list was too long. Send a 431 error.
			handler = handleHeaderListTooLong
		} else {
			{
				let __goscriptShadow4 = checkValidHTTP2RequestHeaders((req$ as http.Request).Header)
				if (__goscriptShadow4 != null) {
					handler = new400Handler(__goscriptShadow4)
				}
			}
		}

		// The net/http package sets the read deadline from the
		// http.Server.ReadTimeout during the TLS handshake, but then
		// passes the connection off to us with the deadline already
		// set. Disarm it here after the request headers are read,
		// similar to how the http1 server works. Here it's
		// technically more like the http1 Server's ReadHeaderTimeout
		// (in Go 1.8), though. That's a more sane option anyway.
		if ($.pointerValue<http.Server>((sc$ as serverConn).hs).ReadTimeout > 0n) {
			void (__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((sc$ as serverConn).conn).SetReadDeadline($.markAsStructValue(new time.Time())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
			;(st$ as stream).readDeadline = await Server.prototype.afterFunc.call((sc$ as serverConn).srv, $.pointerValue<http.Server>((sc$ as serverConn).hs).ReadTimeout, $.functionValue(((__receiver) => () => __receiver.onReadTimeout())((st$ as stream)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*stream).onReadTimeout-fm"))
		}

		return (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).scheduleHandler(id, rw, req, handler) : serverConn.prototype.scheduleHandler.call(sc, id, rw, req, handler))
	}

	public async processPing(f: __goscript_frame.PingFrame | $.VarRef<__goscript_frame.PingFrame> | null): globalThis.Promise<$.GoError> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		await __goscript_gotrack.goroutineLock_check($.pointerValue<serverConn>(sc).serveG)
		if ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.PingFrame).IsAck() : __goscript_frame.PingFrame.prototype.IsAck.call(f))) {
			// 6.7 PING: " An endpoint MUST NOT respond to PING frames
			// containing this flag."
			return null
		}
		if ($.pointerValue<__goscript_frame.PingFrame>(f).FrameHeader.StreamID != 0) {
			// "PING frames are not associated with any individual
			// stream. If a PING frame is received with a stream
			// identifier field value other than 0x0, the recipient MUST
			// respond with a connection error (Section 5.4.1) of type
			// PROTOCOL_ERROR."
			return serverConn.prototype.countError.call(sc, "ping_on_stream", $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError")))
		}
		await serverConn.prototype.writeFrame.call(sc, new __goscript_writesched.FrameWriteRequest({write: $.interfaceValue<__goscript_write.writeFramer | null>(new __goscript_write.writePingAck({pf: f}, true), "http2.writePingAck", "http2.writePingAck")}, true))
		return null
	}

	public async processPriority(f: __goscript_frame.PriorityFrame | $.VarRef<__goscript_frame.PriorityFrame> | null): globalThis.Promise<$.GoError> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const f$: __goscript_frame.PriorityFrame = f == null ? $.pointerTarget<__goscript_frame.PriorityFrame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_frame.PriorityFrame>(f)
		{
			let err = await serverConn.prototype.checkPriority.call(sc, (f$ as __goscript_frame.PriorityFrame).FrameHeader.StreamID, ((f$ as __goscript_frame.PriorityFrame).PriorityParam).clone())
			if (err != null) {
				return err
			}
		}
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_writesched.WriteScheduler, null>>($.pointerValue<serverConn>(sc).writeSched).AdjustStream((f$ as __goscript_frame.PriorityFrame).FrameHeader.StreamID, ((f$ as __goscript_frame.PriorityFrame).PriorityParam).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return null
	}

	public async processResetStream(f: __goscript_frame.RSTStreamFrame | $.VarRef<__goscript_frame.RSTStreamFrame> | null): globalThis.Promise<$.GoError> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const f$: __goscript_frame.RSTStreamFrame = f == null ? $.pointerTarget<__goscript_frame.RSTStreamFrame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_frame.RSTStreamFrame>(f)
		await __goscript_gotrack.goroutineLock_check($.pointerValue<serverConn>(sc).serveG)

		let __goscriptTuple8: any = await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).state((f$ as __goscript_frame.RSTStreamFrame).FrameHeader.StreamID) : serverConn.prototype.state.call(sc, (f$ as __goscript_frame.RSTStreamFrame).FrameHeader.StreamID))
		let state = __goscriptTuple8[0]
		let st: stream | $.VarRef<stream> | null = __goscriptTuple8[1]
		if (state == 0) {
			// 6.4 "RST_STREAM frames MUST NOT be sent for a
			// stream in the "idle" state. If a RST_STREAM frame
			// identifying an idle stream is received, the
			// recipient MUST treat this as a connection error
			// (Section 5.4.1) of type PROTOCOL_ERROR.
			return serverConn.prototype.countError.call(sc, "reset_idle_stream", $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError")))
		}
		if (st != null) {
			void (__goscriptAwait = $.pointerValue<stream>(st).cancelCtx!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await serverConn.prototype.closeStream.call(sc, st, $.interfaceValue<$.GoError>(__goscript_errors.streamError((f$ as __goscript_frame.RSTStreamFrame).FrameHeader.StreamID, (f$ as __goscript_frame.RSTStreamFrame).ErrCode), "http2.StreamError", "http2.StreamError"))
		}
		return null
	}

	public async processSetting(s: __goscript_http2.Setting): globalThis.Promise<$.GoError> {
		let sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		{
			let err = s.Valid()
			if (err != null) {
				return err
			}
		}
		if (__goscript_http2.VerboseLogs) {
			await serverConn.prototype.vlogf.call(sc, "http2: server processing setting %v", $.arrayToSlice<any>([$.interfaceValue((s).clone(), "http2.Setting", "http2.Setting")]))
		}
		switch (s.ID) {
			case 1:
			{
				await hpack.Encoder.prototype.SetMaxDynamicTableSize.call((sc$ as serverConn).hpackEncoder, s.Val)
				break
			}
			case 2:
			{
				;(sc$ as serverConn).pushEnabled = s.Val != 0
				break
			}
			case 3:
			{
				;(sc$ as serverConn).clientMaxStreams = s.Val
				break
			}
			case 4:
			{
				return (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).processSettingInitialWindowSize(s.Val) : serverConn.prototype.processSettingInitialWindowSize.call(sc, s.Val))
				break
			}
			case 5:
			{
				;(sc$ as serverConn).maxFrameSize = $.int(s.Val, 32)
				break
			}
			case 6:
			{
				;(sc$ as serverConn).peerMaxHeaderListSize = s.Val
				break
			}
			default:
			{
				if (__goscript_http2.VerboseLogs) {
					await serverConn.prototype.vlogf.call(sc, "http2: server ignoring unknown setting %v", $.arrayToSlice<any>([$.interfaceValue((s).clone(), "http2.Setting", "http2.Setting")]))
				}
				break
			}
		}
		return null
	}

	public async processSettingInitialWindowSize(val: number): globalThis.Promise<$.GoError> {
		let sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		// Note: val already validated to be within range by
		// processSetting's Valid call.

		// "A SETTINGS frame can alter the initial flow control window
		// size for all current streams. When the value of
		// SETTINGS_INITIAL_WINDOW_SIZE changes, a receiver MUST
		// adjust the size of all stream flow control windows that it
		// maintains by the difference between the new value and the
		// old value."
		let old = (sc$ as serverConn).initialStreamSendWindowSize;
		;(sc$ as serverConn).initialStreamSendWindowSize = $.int(val, 32)
		let growth = $.int((($.int(val, 32) - old) | 0), 32)
		for (const [__rangeKey, st] of (sc$ as serverConn).streams?.entries() ?? []) {
			if (!$.pointerValue<stream>(st).flow.add(growth)) {
				// 6.9.2 Initial Flow Control Window Size
				// "An endpoint MUST treat a change to
				// SETTINGS_INITIAL_WINDOW_SIZE that causes any flow
				// control window to exceed the maximum size as a
				// connection error (Section 5.4.1) of type
				// FLOW_CONTROL_ERROR."
				return serverConn.prototype.countError.call(sc, "setting_win_size", $.namedValueInterfaceValue<$.GoError>($.uint(3, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError")))
			}
		}
		return null
	}

	public async processSettings(f: __goscript_frame.SettingsFrame | $.VarRef<__goscript_frame.SettingsFrame> | null): globalThis.Promise<$.GoError> {
		let sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		if ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.SettingsFrame).IsAck() : __goscript_frame.SettingsFrame.prototype.IsAck.call(f))) {
			;(sc$ as serverConn).unackedSettings--
			if ((sc$ as serverConn).unackedSettings < 0) {
				// Why is the peer ACKing settings we never sent?
				// The spec doesn't mention this case, but
				// hang up on them anyway.
				return serverConn.prototype.countError.call(sc, "ack_mystery", $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError")))
			}
			return null
		}
		if (((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.SettingsFrame).NumSettings() : __goscript_frame.SettingsFrame.prototype.NumSettings.call(f)) > 100) || (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.SettingsFrame).HasDuplicates() : __goscript_frame.SettingsFrame.prototype.HasDuplicates.call(f))) {
			// This isn't actually in the spec, but hang up on
			// suspiciously large settings frames or those with
			// duplicate entries.
			return serverConn.prototype.countError.call(sc, "settings_big_or_dups", $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError")))
		}
		{
			let err = await __goscript_frame.SettingsFrame.prototype.ForeachSetting.call(f, $.functionValue(((__receiver) => (s: __goscript_http2.Setting) => __receiver.processSetting(s))((sc$ as serverConn)), ({ kind: $.TypeKind.Function, params: ["http2.Setting"], results: ["error"] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*serverConn).processSetting-fm"))
			if (err != null) {
				return err
			}
		}
		// TODO: judging by RFC 7540, Section 6.5.3 each SETTINGS frame should be
		// acknowledged individually, even if multiple are received before the ACK.
		;(sc$ as serverConn).needToSendSettingsAck = true
		await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).scheduleFrameWrite() : serverConn.prototype.scheduleFrameWrite.call(sc))
		return null
	}

	public async processWindowUpdate(f: __goscript_frame.WindowUpdateFrame | $.VarRef<__goscript_frame.WindowUpdateFrame> | null): globalThis.Promise<$.GoError> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		const f$: __goscript_frame.WindowUpdateFrame = f == null ? $.pointerTarget<__goscript_frame.WindowUpdateFrame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_frame.WindowUpdateFrame>(f)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		switch ((true as boolean)) {
			case (f$ as __goscript_frame.WindowUpdateFrame).FrameHeader.StreamID != 0:
			{
				let __goscriptTuple9: any = await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).state((f$ as __goscript_frame.WindowUpdateFrame).FrameHeader.StreamID) : serverConn.prototype.state.call(sc, (f$ as __goscript_frame.WindowUpdateFrame).FrameHeader.StreamID))
				let state = __goscriptTuple9[0]
				let st: stream | $.VarRef<stream> | null = __goscriptTuple9[1]
				if (state == 0) {
					// Section 5.1: "Receiving any frame other than HEADERS
					// or PRIORITY on a stream in this state MUST be
					// treated as a connection error (Section 5.4.1) of
					// type PROTOCOL_ERROR."
					return serverConn.prototype.countError.call(sc, "stream_idle", $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError")))
				}
				if (st == null) {
					// "WINDOW_UPDATE can be sent by a peer that has sent a
					// frame bearing the END_STREAM flag. This means that a
					// receiver could receive a WINDOW_UPDATE frame on a "half
					// closed (remote)" or "closed" stream. A receiver MUST
					// NOT treat this as an error, see Section 5.1."
					return null
				}
				if (!$.pointerValue<stream>(st).flow.add($.int((f$ as __goscript_frame.WindowUpdateFrame).Increment, 32))) {
					return serverConn.prototype.countError.call(sc, "bad_flow", $.interfaceValue<$.GoError>(__goscript_errors.streamError((f$ as __goscript_frame.WindowUpdateFrame).FrameHeader.StreamID, 3), "http2.StreamError", "http2.StreamError"))
				}
				break
			}
			default:
			{
				if (!(sc$ as serverConn).flow.add($.int((f$ as __goscript_frame.WindowUpdateFrame).Increment, 32))) {
					return $.interfaceValue<$.GoError>(new __goscript_errors.goAwayFlowError(undefined, true), "http2.goAwayFlowError", "http2.goAwayFlowError")
				}
				break
			}
		}
		await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).scheduleFrameWrite() : serverConn.prototype.scheduleFrameWrite.call(sc))
		return null
	}

	public async readFrames(): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await Server.prototype.markNewGoroutine.call((sc$ as serverConn).srv)
		let gate: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
		let gateDone: (() => void) | null = $.functionValue(async (): globalThis.Promise<void> => {
			await $.chanSend(gate, {})
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
		while (true) {
			let [f, err] = await __goscript_frame.Framer.prototype.ReadFrame.call((sc$ as serverConn).framer)
			const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: true,
					channel: (sc$ as serverConn).readFrameCh,
					value: new readFrameResult({f: f, err: err, readMore: gateDone}, true),
				},
				{
					id: 1,
					isSend: false,
					channel: (sc$ as serverConn).doneServing,
					onSelected: async (__goscriptSelect1Result) => {
						return $.selectVoidReturn()
					}
				}
			], false)
			if (__goscriptSelect1HasReturn) {
				return __goscriptSelect1Value
			}
			const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: gate,
				},
				{
					id: 1,
					isSend: false,
					channel: (sc$ as serverConn).doneServing,
					onSelected: async (__goscriptSelect2Result) => {
						return $.selectVoidReturn()
					}
				}
			], false)
			if (__goscriptSelect2HasReturn) {
				return __goscriptSelect2Value
			}
			if (__goscript_frame.terminalReadFrameError(err)) {
				return
			}
		}
	}

	public async readPreface(): globalThis.Promise<$.GoError> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		if ((sc$ as serverConn).sawClientPreface) {
			return null
		}
		let errc: $.Channel<$.GoError> | null = $.makeChannel<$.GoError>(1, null! as $.GoError, "both")
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			// Read the client preface
			let buf: $.Slice<number> = $.makeSlice<number>(24, undefined, "byte")
			{
				let [, err] = await io.ReadFull($.pointerValueOrNil(((sc$ as serverConn).conn as io.Reader | null))!, buf)
				if (err != null) {
					await $.chanSend(errc, err)
				} else {
					if (!bytes.Equal(buf, __goscript_http2.clientPreface)) {
						await $.chanSend(errc, fmt.Errorf("bogus greeting %q", $.interfaceValue(buf, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
					} else {
						await $.chanSend(errc, null)
					}
				}
			}
		})() })
		let __goscriptShadow5 = await Server.prototype.newTimer.call((sc$ as serverConn).srv, 10000000000n)
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Stop())((__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as __goscript_timer.timer) : $.pointerValue<__goscript_timer.timer>(__goscriptShadow5))), ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee4(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		const [__goscriptSelect3HasReturn, __goscriptSelect3Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: false,
				channel: ((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as __goscript_timer.timer) : $.pointerValue<__goscript_timer.timer>(__goscriptShadow5)).C(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<time.Time> | null),
				onSelected: async (__goscriptSelect3Result) => {
					return errPrefaceTimeout
				}
			},
			{
				id: 1,
				isSend: false,
				channel: errc,
				onSelected: async (__goscriptSelect3Result) => {
					let err = __goscriptSelect3Result.value
					if (err == null) {
						if (__goscript_http2.VerboseLogs) {
							await serverConn.prototype.vlogf.call(sc, "http2: server: client %v said hello", $.arrayToSlice<any>([((__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((sc$ as serverConn).conn).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)]))
						}
					}
					return err
				}
			}
		], false)
		if (__goscriptSelect3HasReturn) {
			return __goscriptSelect3Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async rejectConn(err: __goscript_errors.ErrCode, debug: string): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await serverConn.prototype.vlogf.call(sc, "http2: server rejecting conn: %v, %s", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(err, "http2.ErrCode", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8()), debug]))
		// ignoring errors. hanging up anyway.
		await __goscript_frame.Framer.prototype.WriteGoAway.call((sc$ as serverConn).framer, 0, err, $.stringToBytes(debug))
		await __goscript_http2.bufferedWriter.prototype.Flush.call((sc$ as serverConn).bw)
		void (__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((sc$ as serverConn).conn).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async resetStream(se: __goscript_errors.StreamError): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		await serverConn.prototype.writeFrame.call(sc, new __goscript_writesched.FrameWriteRequest({write: $.interfaceValue<__goscript_write.writeFramer | null>((se).clone(), "http2.StreamError", "http2.StreamError")}, true))
		{
			let __goscriptTuple10: any = $.mapGet<number, stream | $.VarRef<stream> | null, stream | $.VarRef<stream> | null>((sc$ as serverConn).streams, se.StreamID, null)
			let st: stream | $.VarRef<stream> | null = __goscriptTuple10[0]
			let ok = __goscriptTuple10[1]
			if (ok) {
				$.pointerValue<stream>(st).resetQueued = true
			}
		}
	}

	public async runHandler(rw: responseWriter | $.VarRef<responseWriter> | null, req: http.Request | $.VarRef<http.Request> | null, handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const __defer = new $.AsyncDisposableStack()
		try {
			const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
			const rw$: responseWriter = rw == null ? $.pointerTarget<responseWriter>(rw) : (rw as any).__isVarRef === true ? (rw as any).value : (rw as any).__goValue === undefined ? (rw as any) : $.pointerTarget<responseWriter>(rw)
			const req$: http.Request = req == null ? $.pointerTarget<http.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<http.Request>(req)
			await Server.prototype.markNewGoroutine.call((sc$ as serverConn).srv)
			const __goscriptDeferCallee5 = $.functionValue(((__receiver) => (msg: any) => __receiver.sendServeMsg(msg))((sc$ as serverConn)), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*serverConn).sendServeMsg-fm")
			const __goscriptDeferArg4 = $.interfaceValue(handlerDoneMsg, "*http2.serverMessage", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "http2.serverMessage")))
			__defer.defer(async () => { await __goscriptDeferCallee5(__goscriptDeferArg4) })
			let didPanic = true
			__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
				void (__goscriptAwait = $.pointerValue<stream>($.pointerValue<responseWriterState>((rw$ as responseWriter).rws).stream).cancelCtx!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if ((req$ as http.Request).MultipartForm != null) {
					void (req$ as http.Request).MultipartForm.RemoveAll()
				}
				if (didPanic) {
					let e = $.recover()
					await serverConn.prototype.writeFrameFromHandler.call(sc, new __goscript_writesched.FrameWriteRequest({write: $.interfaceValue<__goscript_write.writeFramer | null>(new __goscript_write.handlerPanicRST({StreamID: $.pointerValue<stream>($.pointerValue<responseWriterState>((rw$ as responseWriter).rws).stream).id}, true), "http2.handlerPanicRST", "http2.handlerPanicRST"), stream: $.pointerValue<responseWriterState>((rw$ as responseWriter).rws).stream}, true))
					// Same as net/http:
					if ((e != null) && (!$.comparableEqual(e, http.ErrAbortHandler))) {
						const size: number = 65536
						let buf: $.Slice<number> = $.makeSlice<number>(65536, undefined, "byte")
						buf = $.goSlice(buf, undefined, runtime.Stack(buf, false))
						await serverConn.prototype.logf.call(sc, "http2: panic serving %v: %v\n%s", $.arrayToSlice<any>([((__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((sc$ as serverConn).conn).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any), e, $.interfaceValue(buf, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))
					}
					return
				}
				await (rw !== null && (rw as any).__isVarRef !== true && (rw as any).__goValue === undefined ? ((rw as any) as responseWriter).handlerDone() : responseWriter.prototype.handlerDone.call(rw))
			})() })
			void (__goscriptAwait = handler!($.interfaceValue<http.ResponseWriter | null>(rw, "*http2.responseWriter", /* @__PURE__ */ $.pointerType("http2.responseWriter")), req), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			didPanic = false
			await __defer.dispose()
		} catch (e) {
			await __defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
	}

	public async scheduleFrameWrite(): globalThis.Promise<void> {
		let sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		if ((sc$ as serverConn).writingFrame || (sc$ as serverConn).inFrameScheduleLoop) {
			return
		}
		;(sc$ as serverConn).inFrameScheduleLoop = true
		while (!(sc$ as serverConn).writingFrameAsync) {
			if ((sc$ as serverConn).needToSendGoAway) {
				;(sc$ as serverConn).needToSendGoAway = false
				await serverConn.prototype.startFrameWrite.call(sc, new __goscript_writesched.FrameWriteRequest({write: $.interfaceValue<__goscript_write.writeFramer | null>(new __goscript_write.writeGoAway({maxStreamID: (sc$ as serverConn).maxClientStreamID, code: (sc$ as serverConn).goAwayCode}), "*http2.writeGoAway", /* @__PURE__ */ $.pointerType("http2.writeGoAway"))}, true))
				continue
			}
			if ((sc$ as serverConn).needToSendSettingsAck) {
				;(sc$ as serverConn).needToSendSettingsAck = false
				await serverConn.prototype.startFrameWrite.call(sc, new __goscript_writesched.FrameWriteRequest({write: $.interfaceValue<__goscript_write.writeFramer | null>(new __goscript_write.writeSettingsAck(undefined, true), "http2.writeSettingsAck", "http2.writeSettingsAck")}, true))
				continue
			}
			if (!(sc$ as serverConn).inGoAway || ((sc$ as serverConn).goAwayCode == 0)) {
				{
					let [wr, ok] = await $.pointerValue<Exclude<__goscript_writesched.WriteScheduler, null>>((sc$ as serverConn).writeSched).Pop()
					if (ok) {
						if (wr.isControl()) {
							;(sc$ as serverConn).queuedControlFrames--
						}
						await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).startFrameWrite((wr).clone()) : serverConn.prototype.startFrameWrite.call(sc, (wr).clone()))
						continue
					}
				}
			}
			if ((sc$ as serverConn).needsFrameFlush) {
				await serverConn.prototype.startFrameWrite.call(sc, new __goscript_writesched.FrameWriteRequest({write: $.interfaceValue<__goscript_write.writeFramer | null>(new __goscript_write.flushFrameWriter(undefined, true), "http2.flushFrameWriter", "http2.flushFrameWriter")}, true));
				;(sc$ as serverConn).needsFrameFlush = false
				continue
			}
			break
		}
		;(sc$ as serverConn).inFrameScheduleLoop = false
	}

	public async scheduleHandler(streamID: number, rw: responseWriter | $.VarRef<responseWriter> | null, req: http.Request | $.VarRef<http.Request> | null, handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null): globalThis.Promise<$.GoError> {
		let sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		let maxHandlers = (sc$ as serverConn).advMaxStreams
		if ((sc$ as serverConn).curHandlers < maxHandlers) {
			;(sc$ as serverConn).curHandlers = (((sc$ as serverConn).curHandlers + 1) >>> 0)
			const __goscriptDeferCallee6 = $.functionValue(((__receiver) => (rw: responseWriter | $.VarRef<responseWriter> | null, req: http.Request | $.VarRef<http.Request> | null, handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null) => __receiver.runHandler(rw, req, handler))((sc$ as serverConn)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http2.responseWriter"), /* @__PURE__ */ $.pointerType("http.Request"), ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*serverConn).runHandler-fm")
			const __goscriptDeferArg5 = rw
			const __goscriptDeferArg6 = req
			const __goscriptDeferArg7 = handler
			queueMicrotask(async () => { await __goscriptDeferCallee6(__goscriptDeferArg5, __goscriptDeferArg6, __goscriptDeferArg7) })
			return null
		}
		if ($.sliceLen((sc$ as serverConn).unstartedHandlers) > $.int($.uint(globalThis.Math.imul(4, (sc$ as serverConn).advMaxStreams) >>> 0, 32))) {
			return serverConn.prototype.countError.call(sc, "too_many_early_resets", $.namedValueInterfaceValue<$.GoError>($.uint(11, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError")))
		}
		;(sc$ as serverConn).unstartedHandlers = $.appendOne((sc$ as serverConn).unstartedHandlers, new unstartedHandler({streamID: streamID, rw: rw, req: req, handler: handler}, true))
		return null
	}

	public async sendServeMsg(msg: any): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_checkNotOn((sc$ as serverConn).serveG)
		const [__goscriptSelect4HasReturn, __goscriptSelect4Value] = await $.selectStatement<any, void>([
			{
				id: 0,
				isSend: true,
				channel: (sc$ as serverConn).serveMsgCh,
				value: msg,
			},
			{
				id: 1,
				isSend: false,
				channel: (sc$ as serverConn).doneServing,
			}
		], false)
		if (__goscriptSelect4HasReturn) {
			return __goscriptSelect4Value
		}
	}

	public async sendWindowUpdate(st: stream | $.VarRef<stream> | null, n: number): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		const st$: stream = st == null ? $.pointerTarget<stream>(st) : (st as any).__isVarRef === true ? (st as any).value : (st as any).__goValue === undefined ? (st as any) : $.pointerTarget<stream>(st)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		let streamID: number = 0
		let send: number = 0
		if (st == null) {
			send = (sc$ as serverConn).inflow.add(n)
		} else {
			streamID = (st$ as stream).id
			send = (st$ as stream).inflow.add(n)
		}
		if (send == 0) {
			return
		}
		await serverConn.prototype.writeFrame.call(sc, new __goscript_writesched.FrameWriteRequest({write: $.interfaceValue<__goscript_write.writeFramer | null>(new __goscript_write.writeWindowUpdate({streamID: streamID, n: $.uint(send, 32)}, true), "http2.writeWindowUpdate", "http2.writeWindowUpdate"), stream: st}, true))
	}

	public async sendWindowUpdate32(st: stream | $.VarRef<stream> | null, n: number): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).sendWindowUpdate(st, $.int(n)) : serverConn.prototype.sendWindowUpdate.call(sc, st, $.int(n)))
	}

	public async serve(): globalThis.Promise<void> {
		let sc: serverConn | $.VarRef<serverConn> | null = this;
		const __defer = new $.AsyncDisposableStack()
		try {
			const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
			await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
			const __goscriptDeferCallee7 = $.functionValue(((__receiver) => () => __receiver.notePanic())((sc$ as serverConn)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*serverConn).notePanic-fm")
			__defer.defer(async () => { await __goscriptDeferCallee7() })
			const __goscriptDeferCallee8 = $.functionValue(((__receiver) => () => __receiver.Close())($.pointerValue<Exclude<net.Conn, null>>((sc$ as serverConn).conn)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "net.Conn.Close-fm")
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee8(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			const __goscriptDeferCallee9 = $.functionValue(((__receiver) => () => __receiver.closeAllStreamsOnConnClose())((sc$ as serverConn)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*serverConn).closeAllStreamsOnConnClose-fm")
			__defer.defer(async () => { await __goscriptDeferCallee9() })
			const __goscriptDeferCallee10 = $.functionValue(((__receiver) => () => __receiver.stopShutdownTimer())((sc$ as serverConn)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*serverConn).stopShutdownTimer-fm")
			__defer.defer(async () => { await __goscriptDeferCallee10() })
			const __goscriptDeferArg8 = (sc$ as serverConn).doneServing
			__defer.defer(() => { __goscriptDeferArg8!.close() })

			if (__goscript_http2.VerboseLogs) {
				await serverConn.prototype.vlogf.call(sc, "http2: server connection from %v on %p", $.arrayToSlice<any>([((__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((sc$ as serverConn).conn).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any), $.interfaceValue((sc$ as serverConn).hs, "*http.Server", /* @__PURE__ */ $.pointerType("http.Server"))]))
			}

			await serverConn.prototype.writeFrame.call(sc, new __goscript_writesched.FrameWriteRequest({write: $.namedValueInterfaceValue<__goscript_write.writeFramer | null>($.arrayToSlice<__goscript_http2.Setting>([(() => { const __goscriptLiteralField12 = Server.prototype.maxReadFrameSize.call((sc$ as serverConn).srv); return new __goscript_http2.Setting({ID: 5, Val: __goscriptLiteralField12}, true) })(), new __goscript_http2.Setting({ID: 3, Val: (sc$ as serverConn).advMaxStreams}, true), (() => { const __goscriptLiteralField13 = (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).maxHeaderListSize() : serverConn.prototype.maxHeaderListSize.call(sc)); return new __goscript_http2.Setting({ID: 6, Val: __goscriptLiteralField13}, true) })(), (() => { const __goscriptLiteralField14 = Server.prototype.maxDecoderHeaderTableSize.call((sc$ as serverConn).srv); return new __goscript_http2.Setting({ID: 1, Val: __goscriptLiteralField14}, true) })(), (() => { const __goscriptLiteralField15 = $.uint(Server.prototype.initialStreamRecvWindowSize.call((sc$ as serverConn).srv), 32); return new __goscript_http2.Setting({ID: 4, Val: __goscriptLiteralField15}, true) })()]), "http2.writeSettings", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic11())}, true));
			;(sc$ as serverConn).unackedSettings++

			// Each connection starts with initialWindowSize inflow tokens.
			// If a higher value is configured, we add more tokens.
			{
				let diff = $.int(((Server.prototype.initialConnRecvWindowSize.call((sc$ as serverConn).srv) - 65535) | 0), 32)
				if (diff > 0) {
					await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).sendWindowUpdate(null, $.int(diff)) : serverConn.prototype.sendWindowUpdate.call(sc, null, $.int(diff)))
				}
			}

			{
				let err = await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).readPreface() : serverConn.prototype.readPreface.call(sc))
				if (err != null) {
					await serverConn.prototype.condlogf.call(sc, err, "http2: server: error reading preface from client %v: %v", $.arrayToSlice<any>([((__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((sc$ as serverConn).conn).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any), (err as any)]))
					return
				}
			}
			// Now that we've got the preface, get us out of the
			// "StateNew" state. We can't go directly to idle, though.
			// Active means we read some data and anticipate a request. We'll
			// do another Active when we get a HEADERS frame.
			await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).setConnState(1) : serverConn.prototype.setConnState.call(sc, 1))
			await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).setConnState(2) : serverConn.prototype.setConnState.call(sc, 2))

			if ($.pointerValue<Server>((sc$ as serverConn).srv).IdleTimeout > 0n) {
				;(sc$ as serverConn).idleTimer = await Server.prototype.afterFunc.call((sc$ as serverConn).srv, $.pointerValue<Server>((sc$ as serverConn).srv).IdleTimeout, $.functionValue(((__receiver) => () => __receiver.onIdleTimer())((sc$ as serverConn)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*serverConn).onIdleTimer-fm"))
				const __goscriptDeferCallee11 = $.functionValue(((__receiver) => () => __receiver.Stop())($.pointerValue<__goscript_timer.timer>((sc$ as serverConn).idleTimer)), ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
				__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee11(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			}

			const __goscriptDeferCallee12 = $.functionValue(((__receiver) => () => __receiver.readFrames())((sc$ as serverConn)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*serverConn).readFrames-fm")
			queueMicrotask(async () => { await __goscriptDeferCallee12() })

			let settingsTimer = await Server.prototype.afterFunc.call((sc$ as serverConn).srv, 2000000000n, $.functionValue(((__receiver) => () => __receiver.onSettingsTimer())((sc$ as serverConn)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*serverConn).onSettingsTimer-fm"))
			const __goscriptDeferCallee13 = $.functionValue(((__receiver) => () => __receiver.Stop())((settingsTimer !== null && (settingsTimer as any).__isVarRef !== true && (settingsTimer as any).__goValue === undefined ? (settingsTimer as __goscript_timer.timer) : $.pointerValue<__goscript_timer.timer>(settingsTimer))), ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee13(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

			let loopNum = 0
			while (true) {
				loopNum++
				const [__goscriptSelect5HasReturn, __goscriptSelect5Value] = await $.selectStatement<any, any>([
					{
						id: 0,
						isSend: false,
						channel: (sc$ as serverConn).wantWriteFrameCh,
						onSelected: async (__goscriptSelect5Result) => {
							return __goscriptSelect5Result
						}
					},
					{
						id: 1,
						isSend: false,
						channel: (sc$ as serverConn).wroteFrameCh,
						onSelected: async (__goscriptSelect5Result) => {
							return __goscriptSelect5Result
						}
					},
					{
						id: 2,
						isSend: false,
						channel: (sc$ as serverConn).readFrameCh,
						onSelected: async (__goscriptSelect5Result) => {
							return __goscriptSelect5Result
						}
					},
					{
						id: 3,
						isSend: false,
						channel: (sc$ as serverConn).bodyReadCh,
						onSelected: async (__goscriptSelect5Result) => {
							return __goscriptSelect5Result
						}
					},
					{
						id: 4,
						isSend: false,
						channel: (sc$ as serverConn).serveMsgCh,
						onSelected: async (__goscriptSelect5Result) => {
							return __goscriptSelect5Result
						}
					}
				], false)
				switch (__goscriptSelect5Value?.id) {
					case 0:
						{
							const __goscriptSelect5Result = __goscriptSelect5Value
							let wr = __goscriptSelect5Result.value
							{
								let [se, ok] = $.typeAssertTuple<__goscript_errors.StreamError>(wr.write, "http2.StreamError")
								if (ok) {
									await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).resetStream(se) : serverConn.prototype.resetStream.call(sc, se))
									break
								}
							}
							await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).writeFrame((wr).clone()) : serverConn.prototype.writeFrame.call(sc, (wr).clone()))
							break
						}
					case 1:
						{
							const __goscriptSelect5Result = __goscriptSelect5Value
							let res = __goscriptSelect5Result.value
							await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).wroteFrame(res) : serverConn.prototype.wroteFrame.call(sc, res))
							break
						}
					case 2:
						{
							const __goscriptSelect5Result = __goscriptSelect5Value
							let res = __goscriptSelect5Result.value
							if ((sc$ as serverConn).writingFrameAsync) {
								const [__goscriptSelect6HasReturn, __goscriptSelect6Value] = await $.selectStatement<any, void>([
									{
										id: 0,
										isSend: false,
										channel: (sc$ as serverConn).wroteFrameCh,
										onSelected: async (__goscriptSelect6Result) => {
											let wroteRes = __goscriptSelect6Result.value
											await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).wroteFrame(wroteRes) : serverConn.prototype.wroteFrame.call(sc, wroteRes))
										}
									},
									{
										id: -1,
										isSend: false,
										channel: null,
									}
								], true)
								if (__goscriptSelect6HasReturn) {
									return __goscriptSelect6Value
								}
							}
							if (!await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).processFrameFromReader(res) : serverConn.prototype.processFrameFromReader.call(sc, res))) {
								return
							}
							void (__goscriptAwait = res.readMore!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							if (settingsTimer != null) {
								void (__goscriptAwait = (settingsTimer !== null && (settingsTimer as any).__isVarRef !== true && (settingsTimer as any).__goValue === undefined ? (settingsTimer as __goscript_timer.timer) : $.pointerValue<__goscript_timer.timer>(settingsTimer)).Stop(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
								settingsTimer = null
							}
							break
						}
					case 3:
						{
							const __goscriptSelect5Result = __goscriptSelect5Value
							let m = __goscriptSelect5Result.value
							await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).noteBodyRead(m.st, m.n) : serverConn.prototype.noteBodyRead.call(sc, m.st, m.n))
							break
						}
					case 4:
						{
							const __goscriptSelect5Result = __goscriptSelect5Value
							let msg = __goscriptSelect5Result.value
							{
								const __goscriptTypeSwitchValue = msg
								switch (true) {
									case $.typeAssert<((_p0: number) => void) | null>(__goscriptTypeSwitchValue, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo)).ok:
										{
											let v: ((_p0: number) => void) | null = $.typeAssert<((_p0: number) => void) | null>(__goscriptTypeSwitchValue, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo)).value
											void (__goscriptAwait = v!(loopNum), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
										}
										break
									case $.typeAssert<$.VarRef<serverMessage> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "http2.serverMessage"))).ok:
										{
											let v: $.VarRef<serverMessage> | null = $.typeAssert<$.VarRef<serverMessage> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "http2.serverMessage"))).value
											switch (v) {
												case settingsTimerMsg:
												{
													await serverConn.prototype.logf.call(sc, "timeout waiting for SETTINGS frames from %v", $.arrayToSlice<any>([((__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((sc$ as serverConn).conn).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)]))
													return
													break
												}
												case idleTimerMsg:
												{
													await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).vlogf("connection is idle", null) : serverConn.prototype.vlogf.call(sc, "connection is idle", null))
													await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).goAway(0) : serverConn.prototype.goAway.call(sc, 0))
													break
												}
												case shutdownTimerMsg:
												{
													await serverConn.prototype.vlogf.call(sc, "GOAWAY close timer fired; closing conn from %v", $.arrayToSlice<any>([((__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((sc$ as serverConn).conn).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)]))
													return
													break
												}
												case gracefulShutdownMsg:
												{
													await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).startGracefulShutdownInternal() : serverConn.prototype.startGracefulShutdownInternal.call(sc))
													break
												}
												case handlerDoneMsg:
												{
													await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).handlerDone() : serverConn.prototype.handlerDone.call(sc))
													break
												}
												default:
												{
													$.panic("unknown timer")
													break
												}
											}
										}
										break
									case $.typeAssert<startPushRequest | $.VarRef<startPushRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.startPushRequest")).ok:
										{
											let v: startPushRequest | $.VarRef<startPushRequest> | null = $.typeAssert<startPushRequest | $.VarRef<startPushRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.startPushRequest")).value
											await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).startPush(v) : serverConn.prototype.startPush.call(sc, v))
										}
										break
									case $.typeAssert<((_p0: serverConn | $.VarRef<serverConn> | null) => void) | null>(__goscriptTypeSwitchValue, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http2.serverConn")], results: [] } as $.FunctionTypeInfo)).ok:
										{
											let v: ((_p0: serverConn | $.VarRef<serverConn> | null) => void) | null = $.typeAssert<((_p0: serverConn | $.VarRef<serverConn> | null) => void) | null>(__goscriptTypeSwitchValue, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http2.serverConn")], results: [] } as $.FunctionTypeInfo)).value
											void (__goscriptAwait = v!(sc), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
										}
										break
									default:
										{
											let v: any = __goscriptTypeSwitchValue
											$.panic(await fmt.Sprintf("unexpected type %T", v))
										}
										break
								}
							}
							break
						}
				}

				// If the peer is causing us to generate a lot of control frames,
				// but not reading them from us, assume they are trying to make us
				// run out of memory.
				if ((sc$ as serverConn).queuedControlFrames > Server.prototype.maxQueuedControlFrames.call((sc$ as serverConn).srv)) {
					await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).vlogf("http2: too many control frames in send queue, closing connection", null) : serverConn.prototype.vlogf.call(sc, "http2: too many control frames in send queue, closing connection", null))
					return
				}

				// Start the shutdown timer after sending a GOAWAY. When sending GOAWAY
				// with no error code (graceful shutdown), don't start the timer until
				// all open streams have been completed.
				let sentGoAway = ((sc$ as serverConn).inGoAway && !(sc$ as serverConn).needToSendGoAway) && !(sc$ as serverConn).writingFrame
				let gracefulShutdownComplete = ((sc$ as serverConn).goAwayCode == 0) && (await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).curOpenStreams() : serverConn.prototype.curOpenStreams.call(sc)) == 0)
				if ((sentGoAway && ((sc$ as serverConn).shutdownTimer == null)) && (((sc$ as serverConn).goAwayCode != 0) || gracefulShutdownComplete)) {
					await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).shutDownIn(goAwayTimeout) : serverConn.prototype.shutDownIn.call(sc, goAwayTimeout))
				}
			}
			await __defer.dispose()
		} catch (e) {
			await __defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
	}

	public async setConnState(state: http.ConnState): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		if ($.pointerValue<http.Server>((sc$ as serverConn).hs).ConnState != null) {
			void (__goscriptAwait = $.pointerValue<http.Server>((sc$ as serverConn).hs).ConnState!((sc$ as serverConn).conn, state), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async shutDownIn(d: time.Duration): globalThis.Promise<void> {
		let sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG);
		;(sc$ as serverConn).shutdownTimer = await Server.prototype.afterFunc.call((sc$ as serverConn).srv, d, $.functionValue(((__receiver) => () => __receiver.onShutdownTimer())((sc$ as serverConn)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*serverConn).onShutdownTimer-fm"))
	}

	public async startFrameWrite(__goscriptParam0: __goscript_writesched.FrameWriteRequest): globalThis.Promise<void> {
		let sc: serverConn | $.VarRef<serverConn> | null = this;
		let wr: $.VarRef<__goscript_writesched.FrameWriteRequest> = $.varRef(__goscriptParam0)
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		if ((sc$ as serverConn).writingFrame) {
			$.panic("internal error: can only be writing one frame at a time")
		}

		let st: stream | $.VarRef<stream> | null = wr.value.stream
		if (st != null) {
			switch ($.pointerValue<stream>(st).state) {
				case 2:
				{
					{
						const __goscriptTypeSwitchValue = wr.value.write
						switch (true) {
							case $.is(__goscriptTypeSwitchValue, "http2.StreamError") || $.is(__goscriptTypeSwitchValue, "http2.handlerPanicRST") || $.is(__goscriptTypeSwitchValue, "http2.writeWindowUpdate"):
								{
								}
								break
							default:
								{
									$.panic(await fmt.Sprintf("internal error: attempt to send frame on a half-closed-local stream: %v", $.interfaceValue((wr.value).clone(), "http2.FrameWriteRequest", "http2.FrameWriteRequest")))
								}
								break
						}
					}
					break
				}
				case 4:
				{
					$.panic(await fmt.Sprintf("internal error: attempt to send frame on a closed stream: %v", $.interfaceValue((wr.value).clone(), "http2.FrameWriteRequest", "http2.FrameWriteRequest")))
					break
				}
			}
		}
		{
			let __goscriptTuple11: any = $.typeAssertTuple<__goscript_write.writePushPromise | $.VarRef<__goscript_write.writePushPromise> | null>(wr.value.write, /* @__PURE__ */ $.pointerType("http2.writePushPromise"))
			let wpp: __goscript_write.writePushPromise | $.VarRef<__goscript_write.writePushPromise> | null = __goscriptTuple11[0]
			let ok = __goscriptTuple11[1]
			if (ok) {
				let err: $.GoError = null! as $.GoError
				let __goscriptTuple12: any = await $.pointerValue<__goscript_write.writePushPromise>(wpp).allocatePromisedID!()
				$.pointerValue<__goscript_write.writePushPromise>(wpp).promisedID = __goscriptTuple12[0]
				err = __goscriptTuple12[1]
				if (err != null) {
					;(sc$ as serverConn).writingFrameAsync = false
					await wr.value.replyToWriter(err)
					return
				}
			}
		}

		;(sc$ as serverConn).writingFrame = true;
		;(sc$ as serverConn).needsFrameFlush = true
		if ((__goscriptAwait = $.pointerValue<Exclude<__goscript_write.writeFramer, null>>(wr.value.write).staysWithinBuffer(__goscript_http2.bufferedWriter.prototype.Available.call((sc$ as serverConn).bw)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			;(sc$ as serverConn).writingFrameAsync = false
			let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_write.writeFramer, null>>(wr.value.write).writeFrame($.interfaceValue<__goscript_write.writeContext | null>(sc, "*http2.serverConn", /* @__PURE__ */ $.pointerType("http2.serverConn"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).wroteFrame(new frameWriteResult({wr: wr.value, err: err}, true)) : serverConn.prototype.wroteFrame.call(sc, new frameWriteResult({wr: wr.value, err: err}, true)))
		} else {
			{
				let __goscriptTuple13: any = $.typeAssertTuple<__goscript_write.writeData | $.VarRef<__goscript_write.writeData> | null>(wr.value.write, /* @__PURE__ */ $.pointerType("http2.writeData"))
				let wd: __goscript_write.writeData | $.VarRef<__goscript_write.writeData> | null = __goscriptTuple13[0]
				let ok = __goscriptTuple13[1]
				if (ok) {
					// Encode the frame in the serve goroutine, to ensure we don't have
					// any lingering asynchronous references to data passed to Write.
					// See https://go.dev/issue/58446.
					__goscript_frame.Framer.prototype.startWriteDataPadded.call((sc$ as serverConn).framer, $.pointerValue<__goscript_write.writeData>(wd).streamID, $.pointerValue<__goscript_write.writeData>(wd).endStream, $.pointerValue<__goscript_write.writeData>(wd).p, null);
					;(sc$ as serverConn).writingFrameAsync = true
					const __goscriptDeferCallee14 = $.functionValue(((__receiver) => (wr: __goscript_writesched.FrameWriteRequest, wd: __goscript_write.writeData | $.VarRef<__goscript_write.writeData> | null) => __receiver.writeFrameAsync(wr, wd))((sc$ as serverConn)), ({ kind: $.TypeKind.Function, params: ["http2.FrameWriteRequest", /* @__PURE__ */ $.pointerType("http2.writeData")], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*serverConn).writeFrameAsync-fm")
					const __goscriptDeferArg9 = (wr.value).clone()
					const __goscriptDeferArg10 = wd
					queueMicrotask(async () => { await __goscriptDeferCallee14(__goscriptDeferArg9, __goscriptDeferArg10) })
				} else {
					;(sc$ as serverConn).writingFrameAsync = true
					const __goscriptDeferCallee15 = $.functionValue(((__receiver) => (wr: __goscript_writesched.FrameWriteRequest, wd: __goscript_write.writeData | $.VarRef<__goscript_write.writeData> | null) => __receiver.writeFrameAsync(wr, wd))((sc$ as serverConn)), ({ kind: $.TypeKind.Function, params: ["http2.FrameWriteRequest", /* @__PURE__ */ $.pointerType("http2.writeData")], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*serverConn).writeFrameAsync-fm")
					const __goscriptDeferArg11 = (wr.value).clone()
					queueMicrotask(async () => { await __goscriptDeferCallee15(__goscriptDeferArg11, null) })
				}
			}
		}
	}

	public async startGracefulShutdown(): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_checkNotOn((sc$ as serverConn).serveG)
		await (sc$ as serverConn).shutdownOnce.Do($.functionValue(async (): globalThis.Promise<void> => {
			await serverConn.prototype.sendServeMsg.call(sc, $.interfaceValue(gracefulShutdownMsg, "*http2.serverMessage", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "http2.serverMessage"))))
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	}

	public async startGracefulShutdownInternal(): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).goAway(0) : serverConn.prototype.goAway.call(sc, 0))
	}

	public async startPush(msg: startPushRequest | $.VarRef<startPushRequest> | null): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		const msg$: startPushRequest = msg == null ? $.pointerTarget<startPushRequest>(msg) : (msg as any).__isVarRef === true ? (msg as any).value : (msg as any).__goValue === undefined ? (msg as any) : $.pointerTarget<startPushRequest>(msg)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)

		// http://tools.ietf.org/html/rfc7540#section-6.6.
		// PUSH_PROMISE frames MUST only be sent on a peer-initiated stream that
		// is in either the "open" or "half-closed (remote)" state.
		if (($.pointerValue<stream>((msg$ as startPushRequest).parent).state != 1) && ($.pointerValue<stream>((msg$ as startPushRequest).parent).state != 3)) {
			// responseWriter.Push checks that the stream is peer-initiated.
			await $.chanSend((msg$ as startPushRequest).done, errStreamClosed)
			return
		}

		// http://tools.ietf.org/html/rfc7540#section-6.6.
		if (!(sc$ as serverConn).pushEnabled) {
			await $.chanSend((msg$ as startPushRequest).done, $.interfaceValue<$.GoError>(http.ErrNotSupported, "*http.ProtocolError", /* @__PURE__ */ $.pointerType("http.ProtocolError")))
			return
		}

		// PUSH_PROMISE frames must be sent in increasing order by stream ID, so
		// we allocate an ID for the promised stream lazily, when the PUSH_PROMISE
		// is written. Once the ID is allocated, we start the request handler.
		let allocatePromisedID: (() => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null = $.functionValue(async (): globalThis.Promise<[number, $.GoError]> => {
			await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)

			// Check this again, just in case. Technically, we might have received
			// an updated SETTINGS by the time we got around to writing this frame.
			if (!(sc$ as serverConn).pushEnabled) {
				return [0, $.interfaceValue<$.GoError>(http.ErrNotSupported, "*http.ProtocolError", /* @__PURE__ */ $.pointerType("http.ProtocolError"))]
			}
			// http://tools.ietf.org/html/rfc7540#section-6.5.2.
			if ($.uint(((((sc$ as serverConn).curPushedStreams + 1) >>> 0)), 32) > (sc$ as serverConn).clientMaxStreams) {
				return [0, ErrPushLimitReached]
			}

			// http://tools.ietf.org/html/rfc7540#section-5.1.1.
			// Streams initiated by the server MUST use even-numbered identifiers.
			// A server that is unable to establish a new stream identifier can send a GOAWAY
			// frame so that the client is forced to open a new connection for new streams.
			if ($.uint(((((sc$ as serverConn).maxPushPromiseID + 2) >>> 0)), 32) >= 2147483648) {
				await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).startGracefulShutdownInternal() : serverConn.prototype.startGracefulShutdownInternal.call(sc))
				return [0, ErrPushLimitReached]
			}
			;(sc$ as serverConn).maxPushPromiseID = $.uint((sc$ as serverConn).maxPushPromiseID + (2), 32)
			let promisedID = (sc$ as serverConn).maxPushPromiseID

			// http://tools.ietf.org/html/rfc7540#section-8.2.
			// Strictly speaking, the new stream should start in "reserved (local)", then
			// transition to "half closed (remote)" after sending the initial HEADERS, but
			// we start in "half closed (remote)" for simplicity.
			// See further comments at the definition of stateHalfClosedRemote.
			let promised: stream | $.VarRef<stream> | null = await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).newStream(promisedID, $.pointerValue<stream>((msg$ as startPushRequest).parent).id, 3) : serverConn.prototype.newStream.call(sc, promisedID, $.pointerValue<stream>((msg$ as startPushRequest).parent).id, 3))
			let __goscriptTuple14: any = await serverConn.prototype.newWriterAndRequestNoBody.call(sc, promised, (() => { const __goscriptLiteralField16 = url2.URL.prototype.RequestURI.call((msg$ as startPushRequest).url); const __goscriptLiteralField17 = cloneHeader((msg$ as startPushRequest).header); return new requestParam({method: (msg$ as startPushRequest).method, scheme: $.pointerValue<url2.URL>((msg$ as startPushRequest).url).Scheme, authority: $.pointerValue<url2.URL>((msg$ as startPushRequest).url).Host, path: __goscriptLiteralField16, header: __goscriptLiteralField17}, true) })())
			let rw: responseWriter | $.VarRef<responseWriter> | null = __goscriptTuple14[0]
			let req: http.Request | $.VarRef<http.Request> | null = __goscriptTuple14[1]
			let err = __goscriptTuple14[2]
			if (err != null) {
				// Should not happen, since we've already validated msg.url.
				$.panic(await fmt.Sprintf("newWriterAndRequestNoBody(%+v): %v", $.interfaceValue((msg$ as startPushRequest).url, "*url.URL", /* @__PURE__ */ $.pointerType("url.URL")), (err as any)))
			}

			;(sc$ as serverConn).curHandlers = (((sc$ as serverConn).curHandlers + 1) >>> 0)
			const __goscriptDeferCallee16 = $.functionValue(((__receiver) => (rw: responseWriter | $.VarRef<responseWriter> | null, req: http.Request | $.VarRef<http.Request> | null, handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null) => __receiver.runHandler(rw, req, handler))((sc$ as serverConn)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http2.responseWriter"), /* @__PURE__ */ $.pointerType("http.Request"), ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*serverConn).runHandler-fm")
			const __goscriptDeferArg12 = rw
			const __goscriptDeferArg13 = req
			const __goscriptDeferArg14 = ($.functionValue(((__receiver) => (_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => __receiver.ServeHTTP(_p0, _p1))($.pointerValue<Exclude<http.Handler, null>>((sc$ as serverConn).handler)), ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo), "net/http.Handler.ServeHTTP-fm") as ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null)
			queueMicrotask(async () => { await __goscriptDeferCallee16(__goscriptDeferArg12, __goscriptDeferArg13, __goscriptDeferArg14) })
			return [promisedID, null]
		}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("uint32"), "error"] } as $.FunctionTypeInfo))

		await serverConn.prototype.writeFrame.call(sc, new __goscript_writesched.FrameWriteRequest({write: $.interfaceValue<__goscript_write.writeFramer | null>(new __goscript_write.writePushPromise({streamID: $.pointerValue<stream>((msg$ as startPushRequest).parent).id, method: (msg$ as startPushRequest).method, url: (msg$ as startPushRequest).url, h: (msg$ as startPushRequest).header, allocatePromisedID: allocatePromisedID}), "*http2.writePushPromise", /* @__PURE__ */ $.pointerType("http2.writePushPromise")), stream: (msg$ as startPushRequest).parent, done: (msg$ as startPushRequest).done}, true))
	}

	public async state(streamID: number): globalThis.Promise<[__goscript_http2.streamState, stream | $.VarRef<stream> | null]> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		// http://tools.ietf.org/html/rfc7540#section-5.1
		{
			let __goscriptTuple15: any = $.mapGet<number, stream | $.VarRef<stream> | null, stream | $.VarRef<stream> | null>((sc$ as serverConn).streams, streamID, null)
			let st: stream | $.VarRef<stream> | null = __goscriptTuple15[0]
			let ok = __goscriptTuple15[1]
			if (ok) {
				return [$.pointerValue<stream>(st).state, st]
			}
		}
		// "The first use of a new stream identifier implicitly closes all
		// streams in the "idle" state that might have been initiated by
		// that peer with a lower-valued stream identifier. For example, if
		// a client sends a HEADERS frame on stream 7 without ever sending a
		// frame on stream 5, then stream 5 transitions to the "closed"
		// state when the first frame for stream 7 is sent or received."
		if ($.uint((streamID % 2), 32) == 1) {
			if (streamID <= (sc$ as serverConn).maxClientStreamID) {
				return [4, null]
			}
		} else {
			if (streamID <= (sc$ as serverConn).maxPushPromiseID) {
				return [4, null]
			}
		}
		return [0, null]
	}

	public async stopShutdownTimer(): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		{
			let t = (sc$ as serverConn).shutdownTimer
			if (t != null) {
				void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as __goscript_timer.timer) : $.pointerValue<__goscript_timer.timer>(t)).Stop(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	}

	public async upgradeRequest(req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> {
		let sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		let id = 1;
		;(sc$ as serverConn).maxClientStreamID = id
		let st: stream | $.VarRef<stream> | null = await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).newStream(id, 0, 3) : serverConn.prototype.newStream.call(sc, id, 0, 3))
		let st$: stream = st == null ? $.pointerTarget<stream>(st) : (st as any).__isVarRef === true ? (st as any).value : (st as any).__goValue === undefined ? (st as any) : $.pointerTarget<stream>(st);
		;(st$ as stream).reqTrailer = $.pointerValue<http.Request>(req).Trailer
		if ((st$ as stream).reqTrailer != null) {
			;(st$ as stream).trailer = $.makeMap<string, $.Slice<string>>()
		}
		let rw: responseWriter | $.VarRef<responseWriter> | null = await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).newResponseWriter(st, req) : serverConn.prototype.newResponseWriter.call(sc, st, req))

		// Disable any read deadline set by the net/http package
		// prior to the upgrade.
		if ($.pointerValue<http.Server>((sc$ as serverConn).hs).ReadTimeout > 0n) {
			void (__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((sc$ as serverConn).conn).SetReadDeadline($.markAsStructValue(new time.Time())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		// This is the first request on the connection,
		// so start the handler directly rather than going
		// through scheduleHandler.
		;(sc$ as serverConn).curHandlers = (((sc$ as serverConn).curHandlers + 1) >>> 0)
		const __goscriptDeferCallee17 = $.functionValue(((__receiver) => (rw: responseWriter | $.VarRef<responseWriter> | null, req: http.Request | $.VarRef<http.Request> | null, handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null) => __receiver.runHandler(rw, req, handler))((sc$ as serverConn)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http2.responseWriter"), /* @__PURE__ */ $.pointerType("http.Request"), ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*serverConn).runHandler-fm")
		const __goscriptDeferArg15 = rw
		const __goscriptDeferArg16 = req
		const __goscriptDeferArg17 = ($.functionValue(((__receiver) => (_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => __receiver.ServeHTTP(_p0, _p1))($.pointerValue<Exclude<http.Handler, null>>((sc$ as serverConn).handler)), ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo), "net/http.Handler.ServeHTTP-fm") as ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null)
		queueMicrotask(async () => { await __goscriptDeferCallee17(__goscriptDeferArg15, __goscriptDeferArg16, __goscriptDeferArg17) })
	}

	public async vlogf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		if (__goscript_http2.VerboseLogs) {
			await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).logf(format, args) : serverConn.prototype.logf.call(sc, format, args))
		}
	}

	public async write100ContinueHeaders(st: stream | $.VarRef<stream> | null): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		await serverConn.prototype.writeFrameFromHandler.call(sc, new __goscript_writesched.FrameWriteRequest({write: $.interfaceValue<__goscript_write.writeFramer | null>(new __goscript_write.write100ContinueHeadersFrame({streamID: $.pointerValue<stream>(st).id}, true), "http2.write100ContinueHeadersFrame", "http2.write100ContinueHeadersFrame"), stream: st}, true))
	}

	public async writeDataFromHandler(stream: stream | $.VarRef<stream> | null, data: $.Slice<number>, endStream: boolean): globalThis.Promise<$.GoError> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const stream$: stream = stream == null ? $.pointerTarget<stream>(stream) : (stream as any).__isVarRef === true ? (stream as any).value : (stream as any).__goValue === undefined ? (stream as any) : $.pointerTarget<stream>(stream)
		let ch: $.Channel<$.GoError> | null = $.mustTypeAssert<$.Channel<$.GoError> | null>(await errChanPool.value.Get(), /* @__PURE__ */ $.channelType("error", "both"))
		let writeArg: __goscript_write.writeData | $.VarRef<__goscript_write.writeData> | null = $.mustTypeAssert<__goscript_write.writeData | $.VarRef<__goscript_write.writeData> | null>(await $.pointerValue<sync.Pool>(__goscript_get_writeDataPool()).Get(), /* @__PURE__ */ $.pointerType("http2.writeData"))
		$.assignStruct($.pointerValue<__goscript_write.writeData>(writeArg), new __goscript_write.writeData({streamID: (stream$ as stream).id, p: data, endStream: endStream}, true))
		let err = await serverConn.prototype.writeFrameFromHandler.call(sc, new __goscript_writesched.FrameWriteRequest({write: $.interfaceValue<__goscript_write.writeFramer | null>(writeArg, "*http2.writeData", /* @__PURE__ */ $.pointerType("http2.writeData")), stream: stream, done: ch}, true))
		if (err != null) {
			return err
		}
		let frameWriteDone: boolean = false
		const [__goscriptSelect7HasReturn, __goscriptSelect7Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: false,
				channel: ch,
				onSelected: async (__goscriptSelect7Result) => {
					err = __goscriptSelect7Result.value
					frameWriteDone = true
				}
			},
			{
				id: 1,
				isSend: false,
				channel: $.pointerValue<serverConn>(sc).doneServing,
				onSelected: async (__goscriptSelect7Result) => {
					return errClientDisconnected
				}
			},
			{
				id: 2,
				isSend: false,
				channel: (stream$ as stream).cw,
				onSelected: async (__goscriptSelect7Result) => {
					const [__goscriptSelect8HasReturn, __goscriptSelect8Value] = await $.selectStatement<any, $.GoError>([
						{
							id: 0,
							isSend: false,
							channel: ch,
							onSelected: async (__goscriptSelect8Result) => {
								err = __goscriptSelect8Result.value
								frameWriteDone = true
							}
						},
						{
							id: -1,
							isSend: false,
							channel: null,
							onSelected: async (__goscriptSelect8Result) => {
								return errStreamClosed
							}
						}
					], true)
					if (__goscriptSelect8HasReturn) {
						return __goscriptSelect8Value
					}
				}
			}
		], false)
		if (__goscriptSelect7HasReturn) {
			return __goscriptSelect7Value
		}
		errChanPool.value.Put($.interfaceValue(ch, "chan error", /* @__PURE__ */ $.channelType("error", "both")))
		if (frameWriteDone) {
			$.pointerValue<sync.Pool>(__goscript_get_writeDataPool()).Put($.interfaceValue(writeArg, "*http2.writeData", /* @__PURE__ */ $.pointerType("http2.writeData")))
		}
		return err
	}

	public async writeFrame(wr: __goscript_writesched.FrameWriteRequest): globalThis.Promise<void> {
		let sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)

		// If true, wr will not be written and wr.done will not be signaled.
		let ignoreWrite: boolean = false

		// We are not allowed to write frames on closed streams. RFC 7540 Section
		// 5.1.1 says: "An endpoint MUST NOT send frames other than PRIORITY on
		// a closed stream." Our server never sends PRIORITY, so that exception
		// does not apply.
		//
		// The serverConn might close an open stream while the stream's handler
		// is still running. For example, the server might close a stream when it
		// receives bad data from the client. If this happens, the handler might
		// attempt to write a frame after the stream has been closed (since the
		// handler hasn't yet been notified of the close). In this case, we simply
		// ignore the frame. The handler will notice that the stream is closed when
		// it waits for the frame to be written.
		//
		// As an exception to this rule, we allow sending RST_STREAM after close.
		// This allows us to immediately reject new streams without tracking any
		// state for those streams (except for the queued RST_STREAM frame). This
		// may result in duplicate RST_STREAMs in some cases, but the client should
		// ignore those.
		if (wr.StreamID() != 0) {
			let [, isReset] = $.typeAssertTuple<__goscript_errors.StreamError>(wr.write, "http2.StreamError")
			{
				let __goscriptTuple16: any = await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).state(wr.StreamID()) : serverConn.prototype.state.call(sc, wr.StreamID()))
				let state = __goscriptTuple16[0]
				if ((state == 4) && !isReset) {
					ignoreWrite = true
				}
			}
		}

		// Don't send a 100-continue response if we've already sent headers.
		// See golang.org/issue/14030.
		{
			const __goscriptTypeSwitchValue = wr.write
			switch (true) {
				case $.typeAssert<__goscript_write.writeResHeaders | $.VarRef<__goscript_write.writeResHeaders> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.writeResHeaders")).ok:
					{
						$.pointerValue<stream>(wr.stream).wroteHeaders = true
					}
					break
				case $.typeAssert<__goscript_write.write100ContinueHeadersFrame>(__goscriptTypeSwitchValue, "http2.write100ContinueHeadersFrame").ok:
					{
						if ($.pointerValue<stream>(wr.stream).wroteHeaders) {
							// We do not need to notify wr.done because this frame is
							// never written with wr.done != nil.
							if (wr.done != null) {
								$.panic("wr.done != nil for write100ContinueHeadersFrame")
							}
							ignoreWrite = true
						}
					}
					break
			}
		}

		if (!ignoreWrite) {
			if (wr.isControl()) {
				;(sc$ as serverConn).queuedControlFrames++
				// For extra safety, detect wraparounds, which should not happen,
				// and pull the plug.
				if ((sc$ as serverConn).queuedControlFrames < 0) {
					void (__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((sc$ as serverConn).conn).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_writesched.WriteScheduler, null>>((sc$ as serverConn).writeSched).Push((wr).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).scheduleFrameWrite() : serverConn.prototype.scheduleFrameWrite.call(sc))
	}

	public async writeFrameAsync(wr: __goscript_writesched.FrameWriteRequest, wd: __goscript_write.writeData | $.VarRef<__goscript_write.writeData> | null): globalThis.Promise<void> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await Server.prototype.markNewGoroutine.call((sc$ as serverConn).srv)
		let err: $.GoError = null! as $.GoError
		if (wd == null) {
			err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_write.writeFramer, null>>(wr.write).writeFrame($.interfaceValue<__goscript_write.writeContext | null>(sc, "*http2.serverConn", /* @__PURE__ */ $.pointerType("http2.serverConn"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			err = await __goscript_frame.Framer.prototype.endWrite.call((sc$ as serverConn).framer)
		}
		await $.chanSend((sc$ as serverConn).wroteFrameCh, new frameWriteResult({wr: wr, err: err}, true))
	}

	public async writeFrameFromHandler(wr: __goscript_writesched.FrameWriteRequest): globalThis.Promise<$.GoError> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_checkNotOn((sc$ as serverConn).serveG)
		const [__goscriptSelect9HasReturn, __goscriptSelect9Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: true,
				channel: (sc$ as serverConn).wantWriteFrameCh,
				value: wr,
				onSelected: async (__goscriptSelect9Result) => {
					return null
				}
			},
			{
				id: 1,
				isSend: false,
				channel: (sc$ as serverConn).doneServing,
				onSelected: async (__goscriptSelect9Result) => {
					return errClientDisconnected
				}
			}
		], false)
		if (__goscriptSelect9HasReturn) {
			return __goscriptSelect9Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async writeHeaders(st: stream | $.VarRef<stream> | null, headerData: __goscript_write.writeResHeaders | $.VarRef<__goscript_write.writeResHeaders> | null): globalThis.Promise<$.GoError> {
		const sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_checkNotOn((sc$ as serverConn).serveG)
		let errc: $.Channel<$.GoError> | null = null! as $.Channel<$.GoError> | null
		if ($.pointerValue<__goscript_write.writeResHeaders>(headerData).h != null) {
			// If there's a header map (which we don't own), so we have to block on
			// waiting for this frame to be written, so an http.Flush mid-handler
			// writes out the correct value of keys, before a handler later potentially
			// mutates it.
			errc = $.mustTypeAssert<$.Channel<$.GoError> | null>(await errChanPool.value.Get(), /* @__PURE__ */ $.channelType("error", "both"))
		}
		{
			let err = await serverConn.prototype.writeFrameFromHandler.call(sc, new __goscript_writesched.FrameWriteRequest({write: $.interfaceValue<__goscript_write.writeFramer | null>(headerData, "*http2.writeResHeaders", /* @__PURE__ */ $.pointerType("http2.writeResHeaders")), stream: st, done: errc}, true))
			if (err != null) {
				return err
			}
		}
		if (errc != null) {
			const [__goscriptSelect10HasReturn, __goscriptSelect10Value] = await $.selectStatement<any, $.GoError>([
				{
					id: 0,
					isSend: false,
					channel: errc,
					onSelected: async (__goscriptSelect10Result) => {
						let err = __goscriptSelect10Result.value
						errChanPool.value.Put($.interfaceValue(errc, "chan error", /* @__PURE__ */ $.channelType("error", "both")))
						return err
					}
				},
				{
					id: 1,
					isSend: false,
					channel: (sc$ as serverConn).doneServing,
					onSelected: async (__goscriptSelect10Result) => {
						return errClientDisconnected
					}
				},
				{
					id: 2,
					isSend: false,
					channel: $.pointerValue<stream>(st).cw,
					onSelected: async (__goscriptSelect10Result) => {
						return errStreamClosed
					}
				}
			], false)
			if (__goscriptSelect10HasReturn) {
				return __goscriptSelect10Value
			}
			throw new globalThis.Error("unreachable select")
		}
		return null
	}

	public async wroteFrame(res: frameWriteResult): globalThis.Promise<void> {
		let sc: serverConn | $.VarRef<serverConn> | null = this;
		const sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_check((sc$ as serverConn).serveG)
		if (!(sc$ as serverConn).writingFrame) {
			$.panic("internal error: expected to be already writing a frame")
		}
		;(sc$ as serverConn).writingFrame = false;
		;(sc$ as serverConn).writingFrameAsync = false

		let wr = $.varRef((res.wr).clone())

		if (__goscript_write.writeEndsStream(wr.value.write)) {
			let st: stream | $.VarRef<stream> | null = wr.value.stream
			let st$: stream = st == null ? $.pointerTarget<stream>(st) : (st as any).__isVarRef === true ? (st as any).value : (st as any).__goValue === undefined ? (st as any) : $.pointerTarget<stream>(st)
			if (st == null) {
				$.panic("internal error: expecting non-nil stream")
			}
			switch ((st$ as stream).state) {
				case 1:
				{
					;(st$ as stream).state = 2
					// Section 8.1: a server MAY request that the client abort
					// transmission of a request without error by sending a
					// RST_STREAM with an error code of NO_ERROR after sending
					// a complete response.
					await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).resetStream(__goscript_errors.streamError((st$ as stream).id, 0)) : serverConn.prototype.resetStream.call(sc, __goscript_errors.streamError((st$ as stream).id, 0)))
					break
				}
				case 3:
				{
					await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).closeStream(st, errHandlerComplete) : serverConn.prototype.closeStream.call(sc, st, errHandlerComplete))
					break
				}
			}
		} else {
			{
				const __goscriptTypeSwitchValue = wr.value.write
				switch (true) {
					case $.typeAssert<__goscript_errors.StreamError>(__goscriptTypeSwitchValue, "http2.StreamError").ok:
						{
							let v: __goscript_errors.StreamError = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_errors.StreamError>(__goscriptTypeSwitchValue, "http2.StreamError").value))
							{
								let __goscriptTuple17: any = $.mapGet<number, stream | $.VarRef<stream> | null, stream | $.VarRef<stream> | null>((sc$ as serverConn).streams, v.StreamID, null)
								let st: stream | $.VarRef<stream> | null = __goscriptTuple17[0]
								let ok = __goscriptTuple17[1]
								if (ok) {
									await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).closeStream(st, $.interfaceValue<$.GoError>((v).clone(), "http2.StreamError", "http2.StreamError")) : serverConn.prototype.closeStream.call(sc, st, $.interfaceValue<$.GoError>((v).clone(), "http2.StreamError", "http2.StreamError")))
								}
							}
						}
						break
					case $.typeAssert<__goscript_write.handlerPanicRST>(__goscriptTypeSwitchValue, "http2.handlerPanicRST").ok:
						{
							let v: __goscript_write.handlerPanicRST = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_write.handlerPanicRST>(__goscriptTypeSwitchValue, "http2.handlerPanicRST").value))
							await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).closeStream(wr.value.stream, errHandlerPanicked) : serverConn.prototype.closeStream.call(sc, wr.value.stream, errHandlerPanicked))
						}
						break
				}
			}
		}

		// Reply (if requested) to unblock the ServeHTTP goroutine.
		await wr.value.replyToWriter(res.err)

		await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).scheduleFrameWrite() : serverConn.prototype.scheduleFrameWrite.call(sc))
	}

	static __typeInfo = $.registerStructType(
		"http2.serverConn",
		() => new serverConn(),
		() => [$.methodSignature("CloseConn", [], ["error"], true), $.methodSignature("Flush", [], ["error"], true), $.methodSignature("Framer", [], [/* @__PURE__ */ $.pointerType("http2.Framer")], true), $.methodSignature("HeaderEncoder", [], [/* @__PURE__ */ $.pointerType("hpack.Encoder"), /* @__PURE__ */ $.pointerType("bytes.Buffer")], true), $.methodSignature("canonicalHeader", [["v", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("checkPriority", [["streamID", /* @__PURE__ */ $.basicType("uint32")], ["p", "http2.PriorityParam"]], ["error"], true), $.methodSignature("closeAllStreamsOnConnClose", [], [], true), $.methodSignature("closeStream", [["st", /* @__PURE__ */ $.pointerType("http2.stream")], ["err", "error"]], [], true), $.methodSignature("condlogf", [["err", "error"], ["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("countError", [["name", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], ["error"], true), $.methodSignature("curOpenStreams", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("goAway", [["code", /* @__PURE__ */ $.basicType("uint32", "http2.ErrCode")]], [], true), $.methodSignature("handlerDone", [], [], true), $.methodSignature("logf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("maxHeaderListSize", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("newResponseWriter", [["st", /* @__PURE__ */ $.pointerType("http2.stream")], ["req", /* @__PURE__ */ $.pointerType("http.Request")]], [/* @__PURE__ */ $.pointerType("http2.responseWriter")], true), $.methodSignature("newStream", [["id", /* @__PURE__ */ $.basicType("uint32")], ["pusherID", /* @__PURE__ */ $.basicType("uint32")], ["state", /* @__PURE__ */ $.basicType("int", "http2.streamState")]], [/* @__PURE__ */ $.pointerType("http2.stream")], true), $.methodSignature("newWriterAndRequest", [["st", /* @__PURE__ */ $.pointerType("http2.stream")], ["f", /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")]], [/* @__PURE__ */ $.pointerType("http2.responseWriter"), /* @__PURE__ */ $.pointerType("http.Request"), "error"], true), $.methodSignature("newWriterAndRequestNoBody", [["st", /* @__PURE__ */ $.pointerType("http2.stream")], ["rp", "http2.requestParam"]], [/* @__PURE__ */ $.pointerType("http2.responseWriter"), /* @__PURE__ */ $.pointerType("http.Request"), "error"], true), $.methodSignature("noteBodyRead", [["st", /* @__PURE__ */ $.pointerType("http2.stream")], ["n", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("noteBodyReadFromHandler", [["st", /* @__PURE__ */ $.pointerType("http2.stream")], ["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], [], true), $.methodSignature("notePanic", [], [], true), $.methodSignature("onIdleTimer", [], [], true), $.methodSignature("onSettingsTimer", [], [], true), $.methodSignature("onShutdownTimer", [], [], true), $.methodSignature("processData", [["f", /* @__PURE__ */ $.pointerType("http2.DataFrame")]], ["error"], true), $.methodSignature("processFrame", [["f", "http2.Frame"]], ["error"], true), $.methodSignature("processFrameFromReader", [["res", "http2.readFrameResult"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("processGoAway", [["f", /* @__PURE__ */ $.pointerType("http2.GoAwayFrame")]], ["error"], true), $.methodSignature("processHeaders", [["f", /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")]], ["error"], true), $.methodSignature("processPing", [["f", /* @__PURE__ */ $.pointerType("http2.PingFrame")]], ["error"], true), $.methodSignature("processPriority", [["f", /* @__PURE__ */ $.pointerType("http2.PriorityFrame")]], ["error"], true), $.methodSignature("processResetStream", [["f", /* @__PURE__ */ $.pointerType("http2.RSTStreamFrame")]], ["error"], true), $.methodSignature("processSetting", [["s", "http2.Setting"]], ["error"], true), $.methodSignature("processSettingInitialWindowSize", [["val", /* @__PURE__ */ $.basicType("uint32")]], ["error"], true), $.methodSignature("processSettings", [["f", /* @__PURE__ */ $.pointerType("http2.SettingsFrame")]], ["error"], true), $.methodSignature("processWindowUpdate", [["f", /* @__PURE__ */ $.pointerType("http2.WindowUpdateFrame")]], ["error"], true), $.methodSignature("readFrames", [], [], true), $.methodSignature("readPreface", [], ["error"], true), $.methodSignature("rejectConn", [["err", /* @__PURE__ */ $.basicType("uint32", "http2.ErrCode")], ["debug", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("resetStream", [["se", "http2.StreamError"]], [], true), $.methodSignature("runHandler", [["rw", /* @__PURE__ */ $.pointerType("http2.responseWriter")], ["req", /* @__PURE__ */ $.pointerType("http.Request")], ["handler", ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("scheduleFrameWrite", [], [], true), $.methodSignature("scheduleHandler", [["streamID", /* @__PURE__ */ $.basicType("uint32")], ["rw", /* @__PURE__ */ $.pointerType("http2.responseWriter")], ["req", /* @__PURE__ */ $.pointerType("http.Request")], ["handler", ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("sendServeMsg", [["msg", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("sendWindowUpdate", [["st", /* @__PURE__ */ $.pointerType("http2.stream")], ["n", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("sendWindowUpdate32", [["st", /* @__PURE__ */ $.pointerType("http2.stream")], ["n", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("serve", [], [], true), $.methodSignature("setConnState", [["state", /* @__PURE__ */ $.basicType("int", "http.ConnState")]], [], true), $.methodSignature("shutDownIn", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("startFrameWrite", [["wr", "http2.FrameWriteRequest"]], [], true), $.methodSignature("startGracefulShutdown", [], [], true), $.methodSignature("startGracefulShutdownInternal", [], [], true), $.methodSignature("startPush", [["msg", /* @__PURE__ */ $.pointerType("http2.startPushRequest")]], [], true), $.methodSignature("state", [["streamID", /* @__PURE__ */ $.basicType("uint32")]], [/* @__PURE__ */ $.basicType("int", "http2.streamState"), /* @__PURE__ */ $.pointerType("http2.stream")], true), $.methodSignature("stopShutdownTimer", [], [], true), $.methodSignature("upgradeRequest", [["req", /* @__PURE__ */ $.pointerType("http.Request")]], [], true), $.methodSignature("vlogf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("write100ContinueHeaders", [["st", /* @__PURE__ */ $.pointerType("http2.stream")]], [], true), $.methodSignature("writeDataFromHandler", [["stream", /* @__PURE__ */ $.pointerType("http2.stream")], ["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["endStream", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("writeFrame", [["wr", "http2.FrameWriteRequest"]], [], true), $.methodSignature("writeFrameAsync", [["wr", "http2.FrameWriteRequest"], ["wd", /* @__PURE__ */ $.pointerType("http2.writeData")]], [], true), $.methodSignature("writeFrameFromHandler", [["wr", "http2.FrameWriteRequest"]], ["error"], true), $.methodSignature("writeHeaders", [["st", /* @__PURE__ */ $.pointerType("http2.stream")], ["headerData", /* @__PURE__ */ $.pointerType("http2.writeResHeaders")]], ["error"], true), $.methodSignature("wroteFrame", [["res", "http2.frameWriteResult"]], [], true)],
		serverConn,
		() => [/* @__PURE__ */ $.structField("srv", /* @__PURE__ */ $.pointerType("http2.Server"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("hs", /* @__PURE__ */ $.pointerType("http.Server"), [1], 8, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("conn", "net.Conn", [2], 16, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("bw", /* @__PURE__ */ $.pointerType("http2.bufferedWriter"), [3], 32, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("handler", "http.Handler", [4], 40, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("baseCtx", "context.Context", [5], 56, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("framer", /* @__PURE__ */ $.pointerType("http2.Framer"), [6], 72, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("doneServing", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [7], 80, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("readFrameCh", /* @__PURE__ */ $.channelType("http2.readFrameResult", "both"), [8], 88, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("wantWriteFrameCh", /* @__PURE__ */ $.channelType("http2.FrameWriteRequest", "both"), [9], 96, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("wroteFrameCh", /* @__PURE__ */ $.channelType("http2.frameWriteResult", "both"), [10], 104, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("bodyReadCh", /* @__PURE__ */ $.channelType("http2.bodyReadMsg", "both"), [11], 112, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("serveMsgCh", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Interface, methods: [] }, "both"), [12], 120, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("flow", "http2.outflow", [13], 128, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("inflow", "http2.inflow", [14], 144, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("tlsState", /* @__PURE__ */ $.pointerType("tls.ConnectionState"), [15], 152, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("remoteAddrStr", /* @__PURE__ */ $.basicType("string"), [16], 160, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("writeSched", "http2.WriteScheduler", [17], 176, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("serveG", /* @__PURE__ */ $.basicType("uint64", "http2.goroutineLock"), [18], 192, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("pushEnabled", /* @__PURE__ */ $.basicType("bool"), [19], 200, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("sawClientPreface", /* @__PURE__ */ $.basicType("bool"), [20], 201, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("sawFirstSettings", /* @__PURE__ */ $.basicType("bool"), [21], 202, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("needToSendSettingsAck", /* @__PURE__ */ $.basicType("bool"), [22], 203, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("unackedSettings", /* @__PURE__ */ $.basicType("int"), [23], 208, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("queuedControlFrames", /* @__PURE__ */ $.basicType("int"), [24], 216, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("clientMaxStreams", /* @__PURE__ */ $.basicType("uint32"), [25], 224, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("advMaxStreams", /* @__PURE__ */ $.basicType("uint32"), [26], 228, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("curClientStreams", /* @__PURE__ */ $.basicType("uint32"), [27], 232, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("curPushedStreams", /* @__PURE__ */ $.basicType("uint32"), [28], 236, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("curHandlers", /* @__PURE__ */ $.basicType("uint32"), [29], 240, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("maxClientStreamID", /* @__PURE__ */ $.basicType("uint32"), [30], 244, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("maxPushPromiseID", /* @__PURE__ */ $.basicType("uint32"), [31], 248, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("streams", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.pointerType("http2.stream")), [32], 256, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("unstartedHandlers", /* @__PURE__ */ $.sliceType("http2.unstartedHandler"), [33], 264, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("initialStreamSendWindowSize", /* @__PURE__ */ $.basicType("int32"), [34], 288, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("maxFrameSize", /* @__PURE__ */ $.basicType("int32"), [35], 292, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("peerMaxHeaderListSize", /* @__PURE__ */ $.basicType("uint32"), [36], 296, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("canonHeader", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [37], 304, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("canonHeaderKeysSize", /* @__PURE__ */ $.basicType("int"), [38], 312, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("writingFrame", /* @__PURE__ */ $.basicType("bool"), [39], 320, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("writingFrameAsync", /* @__PURE__ */ $.basicType("bool"), [40], 321, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("needsFrameFlush", /* @__PURE__ */ $.basicType("bool"), [41], 322, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("inGoAway", /* @__PURE__ */ $.basicType("bool"), [42], 323, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("inFrameScheduleLoop", /* @__PURE__ */ $.basicType("bool"), [43], 324, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("needToSendGoAway", /* @__PURE__ */ $.basicType("bool"), [44], 325, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("goAwayCode", /* @__PURE__ */ $.basicType("uint32", "http2.ErrCode"), [45], 328, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("shutdownTimer", { kind: $.TypeKind.Interface, methods: [$.methodSignature("C", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])] }, [46], 336, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("idleTimer", { kind: $.TypeKind.Interface, methods: [$.methodSignature("C", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])] }, [47], 352, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("headerWriteBuf", "bytes.Buffer", [48], 368, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("hpackEncoder", /* @__PURE__ */ $.pointerType("hpack.Encoder"), [49], 408, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("shutdownOnce", "sync.Once", [50], 416, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class stream {
	// immutable:
	public get sc(): serverConn | $.VarRef<serverConn> | null {
		return this._fields.sc
	}

	public set sc(value: serverConn | $.VarRef<serverConn> | null) {
		this._fields.sc = value
	}

	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public get body(): __goscript_pipe.pipe | $.VarRef<__goscript_pipe.pipe> | null {
		return this._fields.body
	}

	public set body(value: __goscript_pipe.pipe | $.VarRef<__goscript_pipe.pipe> | null) {
		this._fields.body = value
	}

	public get cw(): __goscript_http2.closeWaiter {
		return this._fields.cw
	}

	public set cw(value: __goscript_http2.closeWaiter) {
		this._fields.cw = value
	}

	public get ctx(): context2.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context2.Context | null) {
		this._fields.ctx = value
	}

	public get cancelCtx(): (() => void) | null {
		return this._fields.cancelCtx
	}

	public set cancelCtx(value: (() => void) | null) {
		this._fields.cancelCtx = value
	}

	// owned by serverConn's serve loop:
	public get bodyBytes(): bigint {
		return this._fields.bodyBytes
	}

	public set bodyBytes(value: bigint) {
		this._fields.bodyBytes = value
	}

	public get declBodyBytes(): bigint {
		return this._fields.declBodyBytes
	}

	public set declBodyBytes(value: bigint) {
		this._fields.declBodyBytes = value
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

	public get state(): __goscript_http2.streamState {
		return this._fields.state
	}

	public set state(value: __goscript_http2.streamState) {
		this._fields.state = value
	}

	public get resetQueued(): boolean {
		return this._fields.resetQueued
	}

	public set resetQueued(value: boolean) {
		this._fields.resetQueued = value
	}

	public get gotTrailerHeader(): boolean {
		return this._fields.gotTrailerHeader
	}

	public set gotTrailerHeader(value: boolean) {
		this._fields.gotTrailerHeader = value
	}

	public get wroteHeaders(): boolean {
		return this._fields.wroteHeaders
	}

	public set wroteHeaders(value: boolean) {
		this._fields.wroteHeaders = value
	}

	public get readDeadline(): __goscript_timer.timer | null {
		return this._fields.readDeadline
	}

	public set readDeadline(value: __goscript_timer.timer | null) {
		this._fields.readDeadline = value
	}

	public get writeDeadline(): __goscript_timer.timer | null {
		return this._fields.writeDeadline
	}

	public set writeDeadline(value: __goscript_timer.timer | null) {
		this._fields.writeDeadline = value
	}

	public get closeErr(): $.GoError {
		return this._fields.closeErr
	}

	public set closeErr(value: $.GoError) {
		this._fields.closeErr = value
	}

	public get trailer(): http.Header {
		return this._fields.trailer
	}

	public set trailer(value: http.Header) {
		this._fields.trailer = value
	}

	public get reqTrailer(): http.Header {
		return this._fields.reqTrailer
	}

	public set reqTrailer(value: http.Header) {
		this._fields.reqTrailer = value
	}

	public _fields: {
		sc: serverConn | $.VarRef<serverConn> | null
		id: number
		body: __goscript_pipe.pipe | $.VarRef<__goscript_pipe.pipe> | null
		cw: __goscript_http2.closeWaiter
		ctx: context2.Context | null
		cancelCtx: (() => void) | null
		bodyBytes: bigint
		declBodyBytes: bigint
		flow: __goscript_flow.outflow
		inflow: __goscript_flow.inflow
		state: __goscript_http2.streamState
		resetQueued: boolean
		gotTrailerHeader: boolean
		wroteHeaders: boolean
		readDeadline: __goscript_timer.timer | null
		writeDeadline: __goscript_timer.timer | null
		closeErr: $.GoError
		trailer: http.Header
		reqTrailer: http.Header
	}

	constructor(init?: Partial<{sc?: serverConn | $.VarRef<serverConn> | null, id?: number, body?: __goscript_pipe.pipe | $.VarRef<__goscript_pipe.pipe> | null, cw?: __goscript_http2.closeWaiter, ctx?: context2.Context | null, cancelCtx?: (() => void) | null, bodyBytes?: bigint, declBodyBytes?: bigint, flow?: __goscript_flow.outflow, inflow?: __goscript_flow.inflow, state?: __goscript_http2.streamState, resetQueued?: boolean, gotTrailerHeader?: boolean, wroteHeaders?: boolean, readDeadline?: __goscript_timer.timer | null, writeDeadline?: __goscript_timer.timer | null, closeErr?: $.GoError, trailer?: http.Header, reqTrailer?: http.Header}>, __goscriptValue?: boolean) {
		this._fields = {
			sc: init?.sc ?? (null! as serverConn | $.VarRef<serverConn> | null),
			id: init?.id ?? (0 as number),
			body: init?.body ?? (null! as __goscript_pipe.pipe | $.VarRef<__goscript_pipe.pipe> | null),
			cw: init?.cw ?? (null! as __goscript_http2.closeWaiter),
			ctx: init?.ctx ?? (null! as context2.Context | null),
			cancelCtx: init?.cancelCtx ?? (null! as (() => void) | null),
			bodyBytes: init?.bodyBytes ?? (0n as bigint),
			declBodyBytes: init?.declBodyBytes ?? (0n as bigint),
			flow: init?.flow ? init.flow.clone() : new __goscript_flow.outflow(undefined, true),
			inflow: init?.inflow ? init.inflow.clone() : new __goscript_flow.inflow(undefined, true),
			state: init?.state ?? (0 as __goscript_http2.streamState),
			resetQueued: init?.resetQueued ?? (false as boolean),
			gotTrailerHeader: init?.gotTrailerHeader ?? (false as boolean),
			wroteHeaders: init?.wroteHeaders ?? (false as boolean),
			readDeadline: init?.readDeadline ?? (null! as __goscript_timer.timer | null),
			writeDeadline: init?.writeDeadline ?? (null! as __goscript_timer.timer | null),
			closeErr: init?.closeErr ?? (null! as $.GoError),
			trailer: init?.trailer ?? (null! as http.Header),
			reqTrailer: init?.reqTrailer ?? (null! as http.Header)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): stream {
		return new stream(this, true)
	}

	public __goscriptAssign(source: stream): void {
		const target = this._fields
		const values = source._fields
		target.sc = values.sc
		target.id = values.id
		target.body = values.body
		target.cw = values.cw
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.cancelCtx = values.cancelCtx
		target.bodyBytes = values.bodyBytes
		target.declBodyBytes = values.declBodyBytes
		$.assignStruct(target.flow, values.flow)
		$.assignStruct(target.inflow, values.inflow)
		target.state = values.state
		target.resetQueued = values.resetQueued
		target.gotTrailerHeader = values.gotTrailerHeader
		target.wroteHeaders = values.wroteHeaders
		target.readDeadline = $.assignFieldValue(target.readDeadline, values.readDeadline, { kind: $.TypeKind.Interface, methods: [$.methodSignature("C", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])] })
		target.writeDeadline = $.assignFieldValue(target.writeDeadline, values.writeDeadline, { kind: $.TypeKind.Interface, methods: [$.methodSignature("C", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])] })
		target.closeErr = $.assignFieldValue(target.closeErr, values.closeErr, "error")
		target.trailer = values.trailer
		target.reqTrailer = values.reqTrailer
	}

	public copyTrailersToHandlerRequest(): void {
		let st: stream | $.VarRef<stream> | null = this;
		const st$: stream = st == null ? $.pointerTarget<stream>(st) : (st as any).__isVarRef === true ? (st as any).value : (st as any).__goValue === undefined ? (st as any) : $.pointerTarget<stream>(st)
		for (let [k, vv] of (st$ as stream).trailer?.entries() ?? []) {
			{
				let [, ok] = $.mapGet<string, $.Slice<string>, $.Slice<string>>((st$ as stream).reqTrailer, k, null)
				if (ok) {
					// Only copy it over it was pre-declared.
					$.mapSet((st$ as stream).reqTrailer, k, vv)
				}
			}
		}
	}

	public async endStream(): globalThis.Promise<void> {
		let st: stream | $.VarRef<stream> | null = this;
		const st$: stream = st == null ? $.pointerTarget<stream>(st) : (st as any).__isVarRef === true ? (st as any).value : (st as any).__goValue === undefined ? (st as any) : $.pointerTarget<stream>(st)
		let sc: serverConn | $.VarRef<serverConn> | null = (st$ as stream).sc
		await __goscript_gotrack.goroutineLock_check($.pointerValue<serverConn>(sc).serveG)

		if (((st$ as stream).declBodyBytes != -1n) && ((st$ as stream).declBodyBytes != (st$ as stream).bodyBytes)) {
			await __goscript_pipe.pipe.prototype.CloseWithError.call((st$ as stream).body, fmt.Errorf("request declared a Content-Length of %d but only wrote %d bytes", $.basicInterfaceValue((st$ as stream).declBodyBytes, "int64"), $.basicInterfaceValue((st$ as stream).bodyBytes, "int64")))
		} else {
			await __goscript_pipe.pipe.prototype.closeWithErrorAndCode.call((st$ as stream).body, io.EOF, $.functionValue(((__receiver) => () => __receiver.copyTrailersToHandlerRequest())((st$ as stream)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*stream).copyTrailersToHandlerRequest-fm"))
			await __goscript_pipe.pipe.prototype.CloseWithError.call((st$ as stream).body, io.EOF)
		}
		;(st$ as stream).state = 3
	}

	public isPushed(): boolean {
		const st: stream | $.VarRef<stream> | null = this;
		return $.uint(($.pointerValue<stream>(st).id % 2), 32) == 0
	}

	public async onReadTimeout(): globalThis.Promise<void> {
		const st: stream | $.VarRef<stream> | null = this;
		const st$: stream = st == null ? $.pointerTarget<stream>(st) : (st as any).__isVarRef === true ? (st as any).value : (st as any).__goValue === undefined ? (st as any) : $.pointerTarget<stream>(st)
		if ((st$ as stream).body != null) {
			// Wrap the ErrDeadlineExceeded to avoid callers depending on us
			// returning the bare error.
			await __goscript_pipe.pipe.prototype.CloseWithError.call((st$ as stream).body, fmt.Errorf("%w", (os.ErrDeadlineExceeded as any)))
		}
	}

	public async onWriteTimeout(): globalThis.Promise<void> {
		const st: stream | $.VarRef<stream> | null = this;
		const st$: stream = st == null ? $.pointerTarget<stream>(st) : (st as any).__isVarRef === true ? (st as any).value : (st as any).__goValue === undefined ? (st as any) : $.pointerTarget<stream>(st)
		await serverConn.prototype.writeFrameFromHandler.call((st$ as stream).sc, new __goscript_writesched.FrameWriteRequest({write: $.interfaceValue<__goscript_write.writeFramer | null>(new __goscript_errors.StreamError({StreamID: (st$ as stream).id, Code: 2, Cause: os.ErrDeadlineExceeded}, true), "http2.StreamError", "http2.StreamError")}, true))
	}

	public async processTrailerHeaders(f: __goscript_frame.MetaHeadersFrame | $.VarRef<__goscript_frame.MetaHeadersFrame> | null): globalThis.Promise<$.GoError> {
		let st: stream | $.VarRef<stream> | null = this;
		const st$: stream = st == null ? $.pointerTarget<stream>(st) : (st as any).__isVarRef === true ? (st as any).value : (st as any).__goValue === undefined ? (st as any) : $.pointerTarget<stream>(st)
		let sc: serverConn | $.VarRef<serverConn> | null = (st$ as stream).sc
		await __goscript_gotrack.goroutineLock_check($.pointerValue<serverConn>(sc).serveG)
		if ((st$ as stream).gotTrailerHeader) {
			return serverConn.prototype.countError.call(sc, "dup_trailers", $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError")))
		}
		;(st$ as stream).gotTrailerHeader = true
		if (!$.pointerValue<__goscript_frame.HeadersFrame>($.pointerValue<__goscript_frame.MetaHeadersFrame>(f).HeadersFrame).StreamEnded()) {
			return serverConn.prototype.countError.call(sc, "trailers_not_ended", $.interfaceValue<$.GoError>(__goscript_errors.streamError((st$ as stream).id, 1), "http2.StreamError", "http2.StreamError"))
		}

		if ($.sliceLen((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.MetaHeadersFrame).PseudoFields() : __goscript_frame.MetaHeadersFrame.prototype.PseudoFields.call(f))) > 0) {
			return serverConn.prototype.countError.call(sc, "trailers_pseudo", $.interfaceValue<$.GoError>(__goscript_errors.streamError((st$ as stream).id, 1), "http2.StreamError", "http2.StreamError"))
		}
		if ((st$ as stream).trailer != null) {
			for (let __goscriptRangeTarget4 = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.MetaHeadersFrame).RegularFields() : __goscript_frame.MetaHeadersFrame.prototype.RegularFields.call(f)), __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
				let hf = ((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as hpack.HeaderField)).clone()
				let key = await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as serverConn).canonicalHeader(hf.Name) : serverConn.prototype.canonicalHeader.call(sc, hf.Name))
				if (!await httpguts.ValidTrailerHeader(key)) {
					// TODO: send more details to the peer somehow. But http2 has
					// no way to send debug data at a stream level. Discuss with
					// HTTP folk.
					return serverConn.prototype.countError.call(sc, "trailers_bogus", $.interfaceValue<$.GoError>(__goscript_errors.streamError((st$ as stream).id, 1), "http2.StreamError", "http2.StreamError"))
				}
				$.mapSet((st$ as stream).trailer, key, $.appendOne($.mapGet<string, $.Slice<string>, $.Slice<string>>((st$ as stream).trailer, key, null)[0], hf.Value))
			}
		}
		await (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as stream).endStream() : stream.prototype.endStream.call(st))
		return null
	}

	static __typeInfo = $.registerStructType(
		"http2.stream",
		() => new stream(),
		() => [$.methodSignature("copyTrailersToHandlerRequest", [], [], true), $.methodSignature("endStream", [], [], true), $.methodSignature("isPushed", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("onReadTimeout", [], [], true), $.methodSignature("onWriteTimeout", [], [], true), $.methodSignature("processTrailerHeaders", [["f", /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")]], ["error"], true)],
		stream,
		() => [/* @__PURE__ */ $.structField("sc", /* @__PURE__ */ $.pointerType("http2.serverConn"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint32"), [1], 8, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("body", /* @__PURE__ */ $.pointerType("http2.pipe"), [2], 16, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("cw", "http2.closeWaiter", [3], 24, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("ctx", "context.Context", [4], 32, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("cancelCtx", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [5], 48, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("bodyBytes", /* @__PURE__ */ $.basicType("int64"), [6], 56, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("declBodyBytes", /* @__PURE__ */ $.basicType("int64"), [7], 64, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("flow", "http2.outflow", [8], 72, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("inflow", "http2.inflow", [9], 88, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "http2.streamState"), [10], 96, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("resetQueued", /* @__PURE__ */ $.basicType("bool"), [11], 104, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("gotTrailerHeader", /* @__PURE__ */ $.basicType("bool"), [12], 105, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("wroteHeaders", /* @__PURE__ */ $.basicType("bool"), [13], 106, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("readDeadline", { kind: $.TypeKind.Interface, methods: [$.methodSignature("C", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])] }, [14], 112, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("writeDeadline", { kind: $.TypeKind.Interface, methods: [$.methodSignature("C", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])] }, [15], 128, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("closeErr", "error", [16], 144, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("trailer", "http.Header", [17], 160, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("reqTrailer", "http.Header", [18], 168, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class readFrameResult {
	public get f(): __goscript_frame.Frame | null {
		return this._fields.f
	}

	public set f(value: __goscript_frame.Frame | null) {
		this._fields.f = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	// readMore should be called once the consumer no longer needs or
	// retains f. After readMore, f is invalid and more frames can be
	// read.
	public get readMore(): (() => void) | null {
		return this._fields.readMore
	}

	public set readMore(value: (() => void) | null) {
		this._fields.readMore = value
	}

	public _fields: {
		f: __goscript_frame.Frame | null
		err: $.GoError
		readMore: (() => void) | null
	}

	constructor(init?: Partial<{f?: __goscript_frame.Frame | null, err?: $.GoError, readMore?: (() => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			f: init?.f ?? (null! as __goscript_frame.Frame | null),
			err: init?.err ?? (null! as $.GoError),
			readMore: init?.readMore ?? (null! as (() => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): readFrameResult {
		return new readFrameResult(this, true)
	}

	public __goscriptAssign(source: readFrameResult): void {
		const target = this._fields
		const values = source._fields
		target.f = $.assignFieldValue(target.f, values.f, "http2.Frame")
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.readMore = values.readMore
	}

	static __typeInfo = $.registerStructType(
		"http2.readFrameResult",
		() => new readFrameResult(),
		() => [],
		readFrameResult,
		() => [/* @__PURE__ */ $.structField("f", "http2.Frame", [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("err", "error", [1], 16, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("readMore", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [2], 32, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class frameWriteResult {
	public get _blank0(): __goscript_http2.incomparable {
		return this._fields._blank0
	}

	public set _blank0(value: __goscript_http2.incomparable) {
		this._fields._blank0 = value
	}

	public get wr(): __goscript_writesched.FrameWriteRequest {
		return this._fields.wr
	}

	public set wr(value: __goscript_writesched.FrameWriteRequest) {
		this._fields.wr = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		_blank0: __goscript_http2.incomparable
		wr: __goscript_writesched.FrameWriteRequest
		err: $.GoError
	}

	constructor(init?: Partial<{_blank0?: __goscript_http2.incomparable, wr?: __goscript_writesched.FrameWriteRequest, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "http2.incomparable") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			wr: init?.wr ? init.wr.clone() : new __goscript_writesched.FrameWriteRequest(undefined, true),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): frameWriteResult {
		return new frameWriteResult(this, true)
	}

	public __goscriptAssign(source: frameWriteResult): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "http2.incomparable")
		$.assignStruct(target.wr, values.wr)
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	static __typeInfo = $.registerStructType(
		"http2.frameWriteResult",
		() => new frameWriteResult(),
		() => [],
		frameWriteResult,
		() => [/* @__PURE__ */ $.structField("_", "http2.incomparable", [0], 0, false, { key: "_blank0", pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("wr", "http2.FrameWriteRequest", [1], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("err", "error", [2], 32, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class requestParam {
	public get method(): string {
		return this._fields.method
	}

	public set method(value: string) {
		this._fields.method = value
	}

	public get scheme(): string {
		return this._fields.scheme
	}

	public set scheme(value: string) {
		this._fields.scheme = value
	}

	public get authority(): string {
		return this._fields.authority
	}

	public set authority(value: string) {
		this._fields.authority = value
	}

	public get path(): string {
		return this._fields.path
	}

	public set path(value: string) {
		this._fields.path = value
	}

	public get header(): http.Header {
		return this._fields.header
	}

	public set header(value: http.Header) {
		this._fields.header = value
	}

	public _fields: {
		method: string
		scheme: string
		authority: string
		path: string
		header: http.Header
	}

	constructor(init?: Partial<{method?: string, scheme?: string, authority?: string, path?: string, header?: http.Header}>, __goscriptValue?: boolean) {
		this._fields = {
			method: init?.method ?? ("" as string),
			scheme: init?.scheme ?? ("" as string),
			authority: init?.authority ?? ("" as string),
			path: init?.path ?? ("" as string),
			header: init?.header ?? (null! as http.Header)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): requestParam {
		return new requestParam(this, true)
	}

	public __goscriptAssign(source: requestParam): void {
		const target = this._fields
		const values = source._fields
		target.method = values.method
		target.scheme = values.scheme
		target.authority = values.authority
		target.path = values.path
		target.header = values.header
	}

	static __typeInfo = $.registerStructType(
		"http2.requestParam",
		() => new requestParam(),
		() => [],
		requestParam,
		() => [/* @__PURE__ */ $.structField("method", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("scheme", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("authority", /* @__PURE__ */ $.basicType("string"), [2], 32, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("path", /* @__PURE__ */ $.basicType("string"), [3], 48, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("header", "http.Header", [4], 64, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class unstartedHandler {
	public get streamID(): number {
		return this._fields.streamID
	}

	public set streamID(value: number) {
		this._fields.streamID = value
	}

	public get rw(): responseWriter | $.VarRef<responseWriter> | null {
		return this._fields.rw
	}

	public set rw(value: responseWriter | $.VarRef<responseWriter> | null) {
		this._fields.rw = value
	}

	public get req(): http.Request | $.VarRef<http.Request> | null {
		return this._fields.req
	}

	public set req(value: http.Request | $.VarRef<http.Request> | null) {
		this._fields.req = value
	}

	public get handler(): ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null {
		return this._fields.handler
	}

	public set handler(value: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null) {
		this._fields.handler = value
	}

	public _fields: {
		streamID: number
		rw: responseWriter | $.VarRef<responseWriter> | null
		req: http.Request | $.VarRef<http.Request> | null
		handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null
	}

	constructor(init?: Partial<{streamID?: number, rw?: responseWriter | $.VarRef<responseWriter> | null, req?: http.Request | $.VarRef<http.Request> | null, handler?: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			streamID: init?.streamID ?? (0 as number),
			rw: init?.rw ?? (null! as responseWriter | $.VarRef<responseWriter> | null),
			req: init?.req ?? (null! as http.Request | $.VarRef<http.Request> | null),
			handler: init?.handler ?? (null! as ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): unstartedHandler {
		return new unstartedHandler(this, true)
	}

	public __goscriptAssign(source: unstartedHandler): void {
		const target = this._fields
		const values = source._fields
		target.streamID = values.streamID
		target.rw = values.rw
		target.req = values.req
		target.handler = values.handler
	}

	static __typeInfo = $.registerStructType(
		"http2.unstartedHandler",
		() => new unstartedHandler(),
		() => [],
		unstartedHandler,
		() => [/* @__PURE__ */ $.structField("streamID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("rw", /* @__PURE__ */ $.pointerType("http2.responseWriter"), [1], 8, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("req", /* @__PURE__ */ $.pointerType("http.Request"), [2], 16, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("handler", ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo), [3], 24, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class bodyReadMsg {
	public get st(): stream | $.VarRef<stream> | null {
		return this._fields.st
	}

	public set st(value: stream | $.VarRef<stream> | null) {
		this._fields.st = value
	}

	public get n(): number {
		return this._fields.n
	}

	public set n(value: number) {
		this._fields.n = value
	}

	public _fields: {
		st: stream | $.VarRef<stream> | null
		n: number
	}

	constructor(init?: Partial<{st?: stream | $.VarRef<stream> | null, n?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			st: init?.st ?? (null! as stream | $.VarRef<stream> | null),
			n: init?.n ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): bodyReadMsg {
		return new bodyReadMsg(this, true)
	}

	public __goscriptAssign(source: bodyReadMsg): void {
		const target = this._fields
		const values = source._fields
		target.st = values.st
		target.n = values.n
	}

	static __typeInfo = $.registerStructType(
		"http2.bodyReadMsg",
		() => new bodyReadMsg(),
		() => [],
		bodyReadMsg,
		() => [/* @__PURE__ */ $.structField("st", /* @__PURE__ */ $.pointerType("http2.stream"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("n", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class requestBody {
	public get _blank0(): __goscript_http2.incomparable {
		return this._fields._blank0
	}

	public set _blank0(value: __goscript_http2.incomparable) {
		this._fields._blank0 = value
	}

	public get stream(): stream | $.VarRef<stream> | null {
		return this._fields.stream
	}

	public set stream(value: stream | $.VarRef<stream> | null) {
		this._fields.stream = value
	}

	public get conn(): serverConn | $.VarRef<serverConn> | null {
		return this._fields.conn
	}

	public set conn(value: serverConn | $.VarRef<serverConn> | null) {
		this._fields.conn = value
	}

	public get closeOnce(): sync.Once {
		return this._fields.closeOnce
	}

	public set closeOnce(value: sync.Once) {
		this._fields.closeOnce = value
	}

	public get sawEOF(): boolean {
		return this._fields.sawEOF
	}

	public set sawEOF(value: boolean) {
		this._fields.sawEOF = value
	}

	public get pipe(): __goscript_pipe.pipe | $.VarRef<__goscript_pipe.pipe> | null {
		return this._fields.pipe
	}

	public set pipe(value: __goscript_pipe.pipe | $.VarRef<__goscript_pipe.pipe> | null) {
		this._fields.pipe = value
	}

	public get needsContinue(): boolean {
		return this._fields.needsContinue
	}

	public set needsContinue(value: boolean) {
		this._fields.needsContinue = value
	}

	public _fields: {
		_blank0: __goscript_http2.incomparable
		stream: stream | $.VarRef<stream> | null
		conn: serverConn | $.VarRef<serverConn> | null
		closeOnce: sync.Once
		sawEOF: boolean
		pipe: __goscript_pipe.pipe | $.VarRef<__goscript_pipe.pipe> | null
		needsContinue: boolean
	}

	constructor(init?: Partial<{_blank0?: __goscript_http2.incomparable, stream?: stream | $.VarRef<stream> | null, conn?: serverConn | $.VarRef<serverConn> | null, closeOnce?: sync.Once, sawEOF?: boolean, pipe?: __goscript_pipe.pipe | $.VarRef<__goscript_pipe.pipe> | null, needsContinue?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "http2.incomparable") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			stream: init?.stream ?? (null! as stream | $.VarRef<stream> | null),
			conn: init?.conn ?? (null! as serverConn | $.VarRef<serverConn> | null),
			closeOnce: init?.closeOnce ? $.markAsStructValue($.cloneStructValue(init.closeOnce)) : $.markAsStructValue(new sync.Once()),
			sawEOF: init?.sawEOF ?? (false as boolean),
			pipe: init?.pipe ?? (null! as __goscript_pipe.pipe | $.VarRef<__goscript_pipe.pipe> | null),
			needsContinue: init?.needsContinue ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): requestBody {
		return new requestBody(this, true)
	}

	public __goscriptAssign(source: requestBody): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "http2.incomparable")
		target.stream = values.stream
		target.conn = values.conn
		$.assignStruct(target.closeOnce, values.closeOnce)
		target.sawEOF = values.sawEOF
		target.pipe = values.pipe
		target.needsContinue = values.needsContinue
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const b: requestBody | $.VarRef<requestBody> | null = this;
		const b$: requestBody = b == null ? $.pointerTarget<requestBody>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<requestBody>(b)
		await (b$ as requestBody).closeOnce.Do($.functionValue(async (): globalThis.Promise<void> => {
			if ((b$ as requestBody).pipe != null) {
				await __goscript_pipe.pipe.prototype.BreakWithError.call((b$ as requestBody).pipe, errClosedBody)
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return null
	}

	public async Read(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let b: requestBody | $.VarRef<requestBody> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const b$: requestBody = b == null ? $.pointerTarget<requestBody>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<requestBody>(b)
		if ((b$ as requestBody).needsContinue) {
			;(b$ as requestBody).needsContinue = false
			await serverConn.prototype.write100ContinueHeaders.call((b$ as requestBody).conn, (b$ as requestBody).stream)
		}
		if (((b$ as requestBody).pipe == null) || (b$ as requestBody).sawEOF) {
			return [0, io.EOF]
		}
		let __goscriptTuple20: any = await __goscript_pipe.pipe.prototype.Read.call((b$ as requestBody).pipe, p)
		n = __goscriptTuple20[0]
		err = __goscriptTuple20[1]
		if ($.comparableEqual(err, io.EOF)) {
			;(b$ as requestBody).sawEOF = true
		}
		if (((b$ as requestBody).conn == null) && __goscript_http2.inTests) {
			return [n, err]
		}
		await serverConn.prototype.noteBodyReadFromHandler.call((b$ as requestBody).conn, (b$ as requestBody).stream, n, err)
		return [n, err]
	}

	static __typeInfo = $.registerStructType(
		"http2.requestBody",
		() => new requestBody(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		requestBody,
		() => [/* @__PURE__ */ $.structField("_", "http2.incomparable", [0], 0, false, { key: "_blank0", pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("stream", /* @__PURE__ */ $.pointerType("http2.stream"), [1], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("conn", /* @__PURE__ */ $.pointerType("http2.serverConn"), [2], 8, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("closeOnce", "sync.Once", [3], 16, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("sawEOF", /* @__PURE__ */ $.basicType("bool"), [4], 28, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("pipe", /* @__PURE__ */ $.pointerType("http2.pipe"), [5], 32, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("needsContinue", /* @__PURE__ */ $.basicType("bool"), [6], 40, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class responseWriter {
	public get rws(): responseWriterState | $.VarRef<responseWriterState> | null {
		return this._fields.rws
	}

	public set rws(value: responseWriterState | $.VarRef<responseWriterState> | null) {
		this._fields.rws = value
	}

	public _fields: {
		rws: responseWriterState | $.VarRef<responseWriterState> | null
	}

	constructor(init?: Partial<{rws?: responseWriterState | $.VarRef<responseWriterState> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			rws: init?.rws ?? (null! as responseWriterState | $.VarRef<responseWriterState> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): responseWriter {
		return new responseWriter(this, true)
	}

	public __goscriptAssign(source: responseWriter): void {
		const target = this._fields
		const values = source._fields
		target.rws = values.rws
	}

	public async CloseNotify(): globalThis.Promise<$.Channel<boolean> | null> {
		const w: responseWriter | $.VarRef<responseWriter> | null = this;
		let rws: responseWriterState | $.VarRef<responseWriterState> | null = $.pointerValue<responseWriter>(w).rws
		let rws$: responseWriterState = rws == null ? $.pointerTarget<responseWriterState>(rws) : (rws as any).__isVarRef === true ? (rws as any).value : (rws as any).__goValue === undefined ? (rws as any) : $.pointerTarget<responseWriterState>(rws)
		if (rws == null) {
			$.panic("CloseNotify called after Handler finished")
		}
		await (rws$ as responseWriterState).closeNotifierMu.Lock()
		let ch: $.Channel<boolean> | null = (rws$ as responseWriterState).closeNotifierCh
		if (ch == null) {
			ch = $.makeChannel<boolean>(1, false, "both");
			;(rws$ as responseWriterState).closeNotifierCh = ch
			let cw: __goscript_http2.closeWaiter = $.pointerValue<stream>((rws$ as responseWriterState).stream).cw
			queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
				await __goscript_http2.closeWaiter_Wait(cw)
				await $.chanSend(ch, true)
			})() })
		}
		void (rws$ as responseWriterState).closeNotifierMu.Unlock()
		return ch
	}

	public async Flush(): globalThis.Promise<void> {
		const w: responseWriter | $.VarRef<responseWriter> | null = this;
		await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as responseWriter).FlushError() : responseWriter.prototype.FlushError.call(w))
	}

	public async FlushError(): globalThis.Promise<$.GoError> {
		const w: responseWriter | $.VarRef<responseWriter> | null = this;
		let rws: responseWriterState | $.VarRef<responseWriterState> | null = $.pointerValue<responseWriter>(w).rws
		let rws$: responseWriterState = rws == null ? $.pointerTarget<responseWriterState>(rws) : (rws as any).__isVarRef === true ? (rws as any).value : (rws as any).__goValue === undefined ? (rws as any) : $.pointerTarget<responseWriterState>(rws)
		if (rws == null) {
			$.panic("Header called after Handler finished")
		}
		let err: $.GoError = null! as $.GoError
		if (bufio.Writer.prototype.Buffered.call((rws$ as responseWriterState).bw) > 0) {
			err = await bufio.Writer.prototype.Flush.call((rws$ as responseWriterState).bw)
		} else {
			// The bufio.Writer won't call chunkWriter.Write
			// (writeChunk with zero bytes), so we have to do it
			// ourselves to force the HTTP response header and/or
			// final DATA frame (with END_STREAM) to be sent.
			let __goscriptTuple21: any = await $.markAsStructValue($.cloneStructValue(new chunkWriter({rws: rws}, true))).Write(null)
			err = __goscriptTuple21[1]
			if (err == null) {
				const [__goscriptSelect11HasReturn, __goscriptSelect11Value] = await $.selectStatement<any, $.GoError>([
					{
						id: 0,
						isSend: false,
						channel: $.pointerValue<stream>((rws$ as responseWriterState).stream).cw,
						onSelected: async (__goscriptSelect11Result) => {
							err = $.pointerValue<stream>((rws$ as responseWriterState).stream).closeErr
						}
					},
					{
						id: -1,
						isSend: false,
						channel: null,
					}
				], true)
				if (__goscriptSelect11HasReturn) {
					return __goscriptSelect11Value
				}
			}
		}
		return err
	}

	public Header(): http.Header {
		const w: responseWriter | $.VarRef<responseWriter> | null = this;
		let rws: responseWriterState | $.VarRef<responseWriterState> | null = $.pointerValue<responseWriter>(w).rws
		let rws$: responseWriterState = rws == null ? $.pointerTarget<responseWriterState>(rws) : (rws as any).__isVarRef === true ? (rws as any).value : (rws as any).__goValue === undefined ? (rws as any) : $.pointerTarget<responseWriterState>(rws)
		if (rws == null) {
			$.panic("Header called after Handler finished")
		}
		if ((rws$ as responseWriterState).handlerHeader == null) {
			;(rws$ as responseWriterState).handlerHeader = $.makeMap<string, $.Slice<string>>()
		}
		return (rws$ as responseWriterState).handlerHeader
	}

	public async Push(target: string, opts: http.PushOptions | $.VarRef<http.PushOptions> | null): globalThis.Promise<$.GoError> {
		const w: responseWriter | $.VarRef<responseWriter> | null = this;
		const w$: responseWriter = w == null ? $.pointerTarget<responseWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<responseWriter>(w)
		let st: stream | $.VarRef<stream> | null = $.pointerValue<responseWriterState>((w$ as responseWriter).rws).stream
		let st$: stream = st == null ? $.pointerTarget<stream>(st) : (st as any).__isVarRef === true ? (st as any).value : (st as any).__goValue === undefined ? (st as any) : $.pointerTarget<stream>(st)
		let sc: serverConn | $.VarRef<serverConn> | null = (st$ as stream).sc
		let sc$: serverConn = sc == null ? $.pointerTarget<serverConn>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serverConn>(sc)
		await __goscript_gotrack.goroutineLock_checkNotOn((sc$ as serverConn).serveG)

		// No recursive pushes: "PUSH_PROMISE frames MUST only be sent on a peer-initiated stream."
		// http://tools.ietf.org/html/rfc7540#section-6.6
		if ((st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as stream).isPushed() : stream.prototype.isPushed.call(st))) {
			return ErrRecursivePush
		}

		if (opts == null) {
			opts = new http.PushOptions()
		}

		// Default options.
		if ($.stringEqual($.pointerValue<http.PushOptions>(opts).Method, "")) {
			$.pointerValue<http.PushOptions>(opts).Method = "GET"
		}
		if ($.pointerValue<http.PushOptions>(opts).Header == null) {
			$.pointerValue<http.PushOptions>(opts).Header = $.makeMap<string, $.Slice<string>>([])
		}
		let wantScheme = "http"
		if ($.pointerValue<http.Request>($.pointerValue<responseWriterState>((w$ as responseWriter).rws).req).TLS != null) {
			wantScheme = "https"
		}

		// Validate the request.
		let __goscriptTuple22: any = url2.Parse(target)
		let u: url2.URL | $.VarRef<url2.URL> | null = __goscriptTuple22[0]
		let err = __goscriptTuple22[1]
		let u$: url2.URL = u == null ? $.pointerTarget<url2.URL>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<url2.URL>(u)
		if (err != null) {
			return err
		}
		if ($.stringEqual((u$ as url2.URL).Scheme, "")) {
			if (!strings.HasPrefix(target, "/")) {
				return fmt.Errorf("target must be an absolute URL or an absolute path: %q", target)
			}
			;(u$ as url2.URL).Scheme = wantScheme;
			;(u$ as url2.URL).Host = $.pointerValue<http.Request>($.pointerValue<responseWriterState>((w$ as responseWriter).rws).req).Host
		} else {
			if (!$.stringEqual((u$ as url2.URL).Scheme, wantScheme)) {
				return fmt.Errorf("cannot push URL with scheme %q from request with scheme %q", (u$ as url2.URL).Scheme, wantScheme)
			}
			if ($.stringEqual((u$ as url2.URL).Host, "")) {
				return errors.New("URL must have a host")
			}
		}
		for (const [k, __rangeValue] of $.pointerValue<http.PushOptions>(opts).Header?.entries() ?? []) {
			if (strings.HasPrefix(k, ":")) {
				return fmt.Errorf("promised request headers cannot include pseudo header %q", k)
			}
			// These headers are meaningful only if the request has a body,
			// but PUSH_PROMISE requests cannot have a body.
			// http://tools.ietf.org/html/rfc7540#section-8.2
			// Also disallow Host, since the promised URL must be absolute.
			if (((((__goscript_ascii.asciiEqualFold(k, "content-length") || __goscript_ascii.asciiEqualFold(k, "content-encoding")) || __goscript_ascii.asciiEqualFold(k, "trailer")) || __goscript_ascii.asciiEqualFold(k, "te")) || __goscript_ascii.asciiEqualFold(k, "expect")) || __goscript_ascii.asciiEqualFold(k, "host")) {
				return fmt.Errorf("promised request headers cannot include %q", k)
			}
		}
		{
			let __goscriptShadow7 = checkValidHTTP2RequestHeaders($.pointerValue<http.PushOptions>(opts).Header)
			if (__goscriptShadow7 != null) {
				return __goscriptShadow7
			}
		}

		// The RFC effectively limits promised requests to GET and HEAD:
		// "Promised requests MUST be cacheable [GET, HEAD, or POST], and MUST be safe [GET or HEAD]"
		// http://tools.ietf.org/html/rfc7540#section-8.2
		if ((!$.stringEqual($.pointerValue<http.PushOptions>(opts).Method, "GET")) && (!$.stringEqual($.pointerValue<http.PushOptions>(opts).Method, "HEAD"))) {
			return fmt.Errorf("method %q must be GET or HEAD", $.pointerValue<http.PushOptions>(opts).Method)
		}

		let msg: startPushRequest | $.VarRef<startPushRequest> | null = (await (async () => { const __goscriptLiteralField18 = cloneHeader($.pointerValue<http.PushOptions>(opts).Header); return new startPushRequest({parent: st, method: $.pointerValue<http.PushOptions>(opts).Method, url: u, header: __goscriptLiteralField18, done: $.mustTypeAssert<$.Channel<$.GoError> | null>(await errChanPool.value.Get(), /* @__PURE__ */ $.channelType("error", "both"))}) })())
		let msg$: startPushRequest = msg == null ? $.pointerTarget<startPushRequest>(msg) : (msg as any).__isVarRef === true ? (msg as any).value : (msg as any).__goValue === undefined ? (msg as any) : $.pointerTarget<startPushRequest>(msg)

		const [__goscriptSelect12HasReturn, __goscriptSelect12Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: false,
				channel: (sc$ as serverConn).doneServing,
				onSelected: async (__goscriptSelect12Result) => {
					return errClientDisconnected
				}
			},
			{
				id: 1,
				isSend: false,
				channel: (st$ as stream).cw,
				onSelected: async (__goscriptSelect12Result) => {
					return errStreamClosed
				}
			},
			{
				id: 2,
				isSend: true,
				channel: (sc$ as serverConn).serveMsgCh,
				value: msg,
			}
		], false)
		if (__goscriptSelect12HasReturn) {
			return __goscriptSelect12Value
		}

		const [__goscriptSelect13HasReturn, __goscriptSelect13Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: false,
				channel: (sc$ as serverConn).doneServing,
				onSelected: async (__goscriptSelect13Result) => {
					return errClientDisconnected
				}
			},
			{
				id: 1,
				isSend: false,
				channel: (st$ as stream).cw,
				onSelected: async (__goscriptSelect13Result) => {
					return errStreamClosed
				}
			},
			{
				id: 2,
				isSend: false,
				channel: (msg$ as startPushRequest).done,
				onSelected: async (__goscriptSelect13Result) => {
					let err = __goscriptSelect13Result.value
					errChanPool.value.Put($.interfaceValue((msg$ as startPushRequest).done, "chan error", /* @__PURE__ */ $.channelType("error", "both")))
					return err
				}
			}
		], false)
		if (__goscriptSelect13HasReturn) {
			return __goscriptSelect13Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async SetReadDeadline(deadline: time.Time): globalThis.Promise<$.GoError> {
		const w: responseWriter | $.VarRef<responseWriter> | null = this;
		const w$: responseWriter = w == null ? $.pointerTarget<responseWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<responseWriter>(w)
		let st: stream | $.VarRef<stream> | null = $.pointerValue<responseWriterState>((w$ as responseWriter).rws).stream
		let st$: stream = st == null ? $.pointerTarget<stream>(st) : (st as any).__isVarRef === true ? (st as any).value : (st as any).__goValue === undefined ? (st as any) : $.pointerTarget<stream>(st)
		if (!$.markAsStructValue($.cloneStructValue(deadline)).IsZero() && $.markAsStructValue($.cloneStructValue(deadline)).Before(await Server.prototype.now.call($.pointerValue<serverConn>($.pointerValue<responseWriterState>((w$ as responseWriter).rws).conn).srv))) {
			// If we're setting a deadline in the past, reset the stream immediately
			// so writes after SetWriteDeadline returns will fail.
			await (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as stream).onReadTimeout() : stream.prototype.onReadTimeout.call(st))
			return null
		}
		await serverConn.prototype.sendServeMsg.call($.pointerValue<responseWriterState>((w$ as responseWriter).rws).conn, $.interfaceValue($.functionValue(async (sc: serverConn | $.VarRef<serverConn> | null): globalThis.Promise<void> => {
			if ((st$ as stream).readDeadline != null) {
				if (!(__goscriptAwait = $.pointerValue<__goscript_timer.timer>((st$ as stream).readDeadline).Stop(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					// Deadline already exceeded, or stream has been closed.
					return
				}
			}
			if ($.markAsStructValue($.cloneStructValue(deadline)).IsZero()) {
				;(st$ as stream).readDeadline = null
			} else {
				if ((st$ as stream).readDeadline == null) {
					;(st$ as stream).readDeadline = await Server.prototype.afterFunc.call($.pointerValue<serverConn>(sc).srv, $.markAsStructValue($.cloneStructValue(deadline)).Sub(await Server.prototype.now.call($.pointerValue<serverConn>(sc).srv)), $.functionValue(((__receiver) => () => __receiver.onReadTimeout())((st$ as stream)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*stream).onReadTimeout-fm"))
				} else {
					void (__goscriptAwait = $.pointerValue<__goscript_timer.timer>((st$ as stream).readDeadline).Reset($.markAsStructValue($.cloneStructValue(deadline)).Sub(await Server.prototype.now.call($.pointerValue<serverConn>(sc).srv))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http2.serverConn")], results: [] } as $.FunctionTypeInfo)), "func(sc *http2.serverConn)", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http2.serverConn")], results: [] } as $.FunctionTypeInfo)))
		return null
	}

	public async SetWriteDeadline(deadline: time.Time): globalThis.Promise<$.GoError> {
		const w: responseWriter | $.VarRef<responseWriter> | null = this;
		const w$: responseWriter = w == null ? $.pointerTarget<responseWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<responseWriter>(w)
		let st: stream | $.VarRef<stream> | null = $.pointerValue<responseWriterState>((w$ as responseWriter).rws).stream
		let st$: stream = st == null ? $.pointerTarget<stream>(st) : (st as any).__isVarRef === true ? (st as any).value : (st as any).__goValue === undefined ? (st as any) : $.pointerTarget<stream>(st)
		if (!$.markAsStructValue($.cloneStructValue(deadline)).IsZero() && $.markAsStructValue($.cloneStructValue(deadline)).Before(await Server.prototype.now.call($.pointerValue<serverConn>($.pointerValue<responseWriterState>((w$ as responseWriter).rws).conn).srv))) {
			// If we're setting a deadline in the past, reset the stream immediately
			// so writes after SetWriteDeadline returns will fail.
			await (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as stream).onWriteTimeout() : stream.prototype.onWriteTimeout.call(st))
			return null
		}
		await serverConn.prototype.sendServeMsg.call($.pointerValue<responseWriterState>((w$ as responseWriter).rws).conn, $.interfaceValue($.functionValue(async (sc: serverConn | $.VarRef<serverConn> | null): globalThis.Promise<void> => {
			if ((st$ as stream).writeDeadline != null) {
				if (!(__goscriptAwait = $.pointerValue<__goscript_timer.timer>((st$ as stream).writeDeadline).Stop(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					// Deadline already exceeded, or stream has been closed.
					return
				}
			}
			if ($.markAsStructValue($.cloneStructValue(deadline)).IsZero()) {
				;(st$ as stream).writeDeadline = null
			} else {
				if ((st$ as stream).writeDeadline == null) {
					;(st$ as stream).writeDeadline = await Server.prototype.afterFunc.call($.pointerValue<serverConn>(sc).srv, $.markAsStructValue($.cloneStructValue(deadline)).Sub(await Server.prototype.now.call($.pointerValue<serverConn>(sc).srv)), $.functionValue(((__receiver) => () => __receiver.onWriteTimeout())((st$ as stream)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*stream).onWriteTimeout-fm"))
				} else {
					void (__goscriptAwait = $.pointerValue<__goscript_timer.timer>((st$ as stream).writeDeadline).Reset($.markAsStructValue($.cloneStructValue(deadline)).Sub(await Server.prototype.now.call($.pointerValue<serverConn>(sc).srv))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http2.serverConn")], results: [] } as $.FunctionTypeInfo)), "func(sc *http2.serverConn)", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http2.serverConn")], results: [] } as $.FunctionTypeInfo)))
		return null
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const w: responseWriter | $.VarRef<responseWriter> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as responseWriter).write($.sliceLen(p), p, "") : responseWriter.prototype.write.call(w, $.sliceLen(p), p, ""))
	}

	public async WriteHeader(code: number): globalThis.Promise<void> {
		const w: responseWriter | $.VarRef<responseWriter> | null = this;
		let rws: responseWriterState | $.VarRef<responseWriterState> | null = $.pointerValue<responseWriter>(w).rws
		if (rws == null) {
			$.panic("WriteHeader called after Handler finished")
		}
		await (rws !== null && (rws as any).__isVarRef !== true && (rws as any).__goValue === undefined ? ((rws as any) as responseWriterState).writeHeader(code) : responseWriterState.prototype.writeHeader.call(rws, code))
	}

	public async WriteString(s: string): globalThis.Promise<[number, $.GoError]> {
		const w: responseWriter | $.VarRef<responseWriter> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as responseWriter).write($.stringLen(s), null, s) : responseWriter.prototype.write.call(w, $.stringLen(s), null, s))
	}

	public async handlerDone(): globalThis.Promise<void> {
		let w: responseWriter | $.VarRef<responseWriter> | null = this;
		const w$: responseWriter = w == null ? $.pointerTarget<responseWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<responseWriter>(w)
		let rws: responseWriterState | $.VarRef<responseWriterState> | null = (w$ as responseWriter).rws
		$.pointerValue<responseWriterState>(rws).handlerDone = true
		await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as responseWriter).Flush() : responseWriter.prototype.Flush.call(w));
		;(w$ as responseWriter).rws = null
		responseWriterStatePool.value.Put($.interfaceValue(rws, "*http2.responseWriterState", /* @__PURE__ */ $.pointerType("http2.responseWriterState")))
	}

	public async write(lenData: number, dataB: $.Slice<number>, dataS: string): globalThis.Promise<[number, $.GoError]> {
		const w: responseWriter | $.VarRef<responseWriter> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		let rws: responseWriterState | $.VarRef<responseWriterState> | null = $.pointerValue<responseWriter>(w).rws
		let rws$: responseWriterState = rws == null ? $.pointerTarget<responseWriterState>(rws) : (rws as any).__isVarRef === true ? (rws as any).value : (rws as any).__goValue === undefined ? (rws as any) : $.pointerTarget<responseWriterState>(rws)
		if (rws == null) {
			$.panic("Write called after Handler finished")
		}
		if (!(rws$ as responseWriterState).wroteHeader) {
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as responseWriter).WriteHeader(200) : responseWriter.prototype.WriteHeader.call(w, 200))
		}
		if (!__goscript_http2.bodyAllowedForStatus((rws$ as responseWriterState).status)) {
			return [0, http.ErrBodyNotAllowed]
		}
		;(rws$ as responseWriterState).wroteBytes = $.int64Add((rws$ as responseWriterState).wroteBytes, $.int64Add($.int64($.sliceLen(dataB)), $.int64($.stringLen(dataS))))
		if (((rws$ as responseWriterState).sentContentLen != 0n) && ((rws$ as responseWriterState).wroteBytes > (rws$ as responseWriterState).sentContentLen)) {
			// TODO: send a RST_STREAM
			return [0, errors.New("http2: handler wrote more than declared Content-Length")]
		}

		if (dataB != null) {
			return bufio.Writer.prototype.Write.call((rws$ as responseWriterState).bw, dataB)
		} else {
			return bufio.Writer.prototype.WriteString.call((rws$ as responseWriterState).bw, dataS)
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"http2.responseWriter",
		() => new responseWriter(),
		() => [$.methodSignature("CloseNotify", [], [/* @__PURE__ */ $.channelType(/* @__PURE__ */ $.basicType("bool"), "receive")], true), $.methodSignature("Flush", [], [], true), $.methodSignature("FlushError", [], ["error"], true), $.methodSignature("Header", [], ["http.Header"], true), $.methodSignature("Push", [["target", /* @__PURE__ */ $.basicType("string")], ["opts", /* @__PURE__ */ $.pointerType("http.PushOptions")]], ["error"], true), $.methodSignature("SetReadDeadline", [["deadline", "time.Time"]], ["error"], true), $.methodSignature("SetWriteDeadline", [["deadline", "time.Time"]], ["error"], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("WriteHeader", [["code", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("handlerDone", [], [], true), $.methodSignature("write", [["lenData", /* @__PURE__ */ $.basicType("int")], ["dataB", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["dataS", /* @__PURE__ */ $.basicType("string")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		responseWriter,
		() => [/* @__PURE__ */ $.structField("rws", /* @__PURE__ */ $.pointerType("http2.responseWriterState"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class responseWriterState {
	// immutable within a request:
	public get stream(): stream | $.VarRef<stream> | null {
		return this._fields.stream
	}

	public set stream(value: stream | $.VarRef<stream> | null) {
		this._fields.stream = value
	}

	public get req(): http.Request | $.VarRef<http.Request> | null {
		return this._fields.req
	}

	public set req(value: http.Request | $.VarRef<http.Request> | null) {
		this._fields.req = value
	}

	public get conn(): serverConn | $.VarRef<serverConn> | null {
		return this._fields.conn
	}

	public set conn(value: serverConn | $.VarRef<serverConn> | null) {
		this._fields.conn = value
	}

	// TODO: adjust buffer writing sizes based on server config, frame size updates from peer, etc
	public get bw(): bufio.Writer | $.VarRef<bufio.Writer> | null {
		return this._fields.bw
	}

	public set bw(value: bufio.Writer | $.VarRef<bufio.Writer> | null) {
		this._fields.bw = value
	}

	// mutated by http.Handler goroutine:
	public get handlerHeader(): http.Header {
		return this._fields.handlerHeader
	}

	public set handlerHeader(value: http.Header) {
		this._fields.handlerHeader = value
	}

	public get snapHeader(): http.Header {
		return this._fields.snapHeader
	}

	public set snapHeader(value: http.Header) {
		this._fields.snapHeader = value
	}

	public get trailers(): $.Slice<string> {
		return this._fields.trailers
	}

	public set trailers(value: $.Slice<string>) {
		this._fields.trailers = value
	}

	public get status(): number {
		return this._fields.status
	}

	public set status(value: number) {
		this._fields.status = value
	}

	public get wroteHeader(): boolean {
		return this._fields.wroteHeader
	}

	public set wroteHeader(value: boolean) {
		this._fields.wroteHeader = value
	}

	public get sentHeader(): boolean {
		return this._fields.sentHeader
	}

	public set sentHeader(value: boolean) {
		this._fields.sentHeader = value
	}

	public get handlerDone(): boolean {
		return this._fields.handlerDone
	}

	public set handlerDone(value: boolean) {
		this._fields.handlerDone = value
	}

	public get sentContentLen(): bigint {
		return this._fields.sentContentLen
	}

	public set sentContentLen(value: bigint) {
		this._fields.sentContentLen = value
	}

	public get wroteBytes(): bigint {
		return this._fields.wroteBytes
	}

	public set wroteBytes(value: bigint) {
		this._fields.wroteBytes = value
	}

	public get closeNotifierMu(): sync.Mutex {
		return this._fields.closeNotifierMu
	}

	public set closeNotifierMu(value: sync.Mutex) {
		this._fields.closeNotifierMu = value
	}

	public get closeNotifierCh(): $.Channel<boolean> | null {
		return this._fields.closeNotifierCh
	}

	public set closeNotifierCh(value: $.Channel<boolean> | null) {
		this._fields.closeNotifierCh = value
	}

	public _fields: {
		stream: stream | $.VarRef<stream> | null
		req: http.Request | $.VarRef<http.Request> | null
		conn: serverConn | $.VarRef<serverConn> | null
		bw: bufio.Writer | $.VarRef<bufio.Writer> | null
		handlerHeader: http.Header
		snapHeader: http.Header
		trailers: $.Slice<string>
		status: number
		wroteHeader: boolean
		sentHeader: boolean
		handlerDone: boolean
		sentContentLen: bigint
		wroteBytes: bigint
		closeNotifierMu: sync.Mutex
		closeNotifierCh: $.Channel<boolean> | null
	}

	constructor(init?: Partial<{stream?: stream | $.VarRef<stream> | null, req?: http.Request | $.VarRef<http.Request> | null, conn?: serverConn | $.VarRef<serverConn> | null, bw?: bufio.Writer | $.VarRef<bufio.Writer> | null, handlerHeader?: http.Header, snapHeader?: http.Header, trailers?: $.Slice<string>, status?: number, wroteHeader?: boolean, sentHeader?: boolean, handlerDone?: boolean, sentContentLen?: bigint, wroteBytes?: bigint, closeNotifierMu?: sync.Mutex, closeNotifierCh?: $.Channel<boolean> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			stream: init?.stream ?? (null! as stream | $.VarRef<stream> | null),
			req: init?.req ?? (null! as http.Request | $.VarRef<http.Request> | null),
			conn: init?.conn ?? (null! as serverConn | $.VarRef<serverConn> | null),
			bw: init?.bw ?? (null! as bufio.Writer | $.VarRef<bufio.Writer> | null),
			handlerHeader: init?.handlerHeader ?? (null! as http.Header),
			snapHeader: init?.snapHeader ?? (null! as http.Header),
			trailers: init?.trailers ?? (null! as $.Slice<string>),
			status: init?.status ?? (0 as number),
			wroteHeader: init?.wroteHeader ?? (false as boolean),
			sentHeader: init?.sentHeader ?? (false as boolean),
			handlerDone: init?.handlerDone ?? (false as boolean),
			sentContentLen: init?.sentContentLen ?? (0n as bigint),
			wroteBytes: init?.wroteBytes ?? (0n as bigint),
			closeNotifierMu: init?.closeNotifierMu ? $.markAsStructValue($.cloneStructValue(init.closeNotifierMu)) : $.markAsStructValue(new sync.Mutex()),
			closeNotifierCh: init?.closeNotifierCh ?? (null! as $.Channel<boolean> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): responseWriterState {
		return new responseWriterState(this, true)
	}

	public __goscriptAssign(source: responseWriterState): void {
		const target = this._fields
		const values = source._fields
		target.stream = values.stream
		target.req = values.req
		target.conn = values.conn
		target.bw = values.bw
		target.handlerHeader = values.handlerHeader
		target.snapHeader = values.snapHeader
		target.trailers = values.trailers
		target.status = values.status
		target.wroteHeader = values.wroteHeader
		target.sentHeader = values.sentHeader
		target.handlerDone = values.handlerDone
		target.sentContentLen = values.sentContentLen
		target.wroteBytes = values.wroteBytes
		$.assignStruct(target.closeNotifierMu, values.closeNotifierMu)
		target.closeNotifierCh = values.closeNotifierCh
	}

	public async declareTrailer(k: string): globalThis.Promise<void> {
		let rws: responseWriterState | $.VarRef<responseWriterState> | null = this;
		const rws$: responseWriterState = rws == null ? $.pointerTarget<responseWriterState>(rws) : (rws as any).__isVarRef === true ? (rws as any).value : (rws as any).__goValue === undefined ? (rws as any) : $.pointerTarget<responseWriterState>(rws)
		k = http.CanonicalHeaderKey(k)
		if (!await httpguts.ValidTrailerHeader(k)) {
			// Forbidden by RFC 7230, section 4.1.2.
			await serverConn.prototype.logf.call((rws$ as responseWriterState).conn, "ignoring invalid trailer %q", $.arrayToSlice<any>([k]))
			return
		}
		if (!__goscript_transport.strSliceContains((rws$ as responseWriterState).trailers, k)) {
			;(rws$ as responseWriterState).trailers = $.appendOne((rws$ as responseWriterState).trailers, k)
		}
	}

	public hasNonemptyTrailers(): boolean {
		const rws: responseWriterState | $.VarRef<responseWriterState> | null = this;
		const rws$: responseWriterState = rws == null ? $.pointerTarget<responseWriterState>(rws) : (rws as any).__isVarRef === true ? (rws as any).value : (rws as any).__goValue === undefined ? (rws as any) : $.pointerTarget<responseWriterState>(rws)
		for (let __goscriptRangeTarget5 = (rws$ as responseWriterState).trailers, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let trailer = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as string)
			{
				let [, ok] = $.mapGet<string, $.Slice<string>, $.Slice<string>>((rws$ as responseWriterState).handlerHeader, trailer, null)
				if (ok) {
					return true
				}
			}
		}
		return false
	}

	public hasTrailers(): boolean {
		const rws: responseWriterState | $.VarRef<responseWriterState> | null = this;
		return $.sliceLen($.pointerValue<responseWriterState>(rws).trailers) > 0
	}

	public async promoteUndeclaredTrailers(): globalThis.Promise<void> {
		let rws: responseWriterState | $.VarRef<responseWriterState> | null = this;
		const rws$: responseWriterState = rws == null ? $.pointerTarget<responseWriterState>(rws) : (rws as any).__isVarRef === true ? (rws as any).value : (rws as any).__goValue === undefined ? (rws as any) : $.pointerTarget<responseWriterState>(rws)
		for (const [k, vv] of (rws$ as responseWriterState).handlerHeader?.entries() ?? []) {
			if (!strings.HasPrefix(k, "Trailer:")) {
				continue
			}
			let trailerKey = strings.TrimPrefix(k, "Trailer:")
			await (rws !== null && (rws as any).__isVarRef !== true && (rws as any).__goValue === undefined ? ((rws as any) as responseWriterState).declareTrailer(trailerKey) : responseWriterState.prototype.declareTrailer.call(rws, trailerKey))
			$.mapSet((rws$ as responseWriterState).handlerHeader, http.CanonicalHeaderKey(trailerKey), vv)
		}

		if ($.sliceLen((rws$ as responseWriterState).trailers) > 1) {
			let __goscriptShadow8: __goscript_http2.sorter | $.VarRef<__goscript_http2.sorter> | null = $.mustTypeAssert<__goscript_http2.sorter | $.VarRef<__goscript_http2.sorter> | null>(await $.pointerValue<sync.Pool>(__goscript_http2.sorterPool).Get(), /* @__PURE__ */ $.pointerType("http2.sorter"))
			await (__goscriptShadow8 !== null && (__goscriptShadow8 as any).__isVarRef !== true && (__goscriptShadow8 as any).__goValue === undefined ? ((__goscriptShadow8 as any) as __goscript_http2.sorter).SortStrings((rws$ as responseWriterState).trailers) : __goscript_http2.sorter.prototype.SortStrings.call(__goscriptShadow8, (rws$ as responseWriterState).trailers))
			$.pointerValue<sync.Pool>(__goscript_http2.sorterPool).Put($.interfaceValue(__goscriptShadow8, "*http2.sorter", /* @__PURE__ */ $.pointerType("http2.sorter")))
		}
	}

	public async writeChunk(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let rws: responseWriterState | $.VarRef<responseWriterState> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const rws$: responseWriterState = rws == null ? $.pointerTarget<responseWriterState>(rws) : (rws as any).__isVarRef === true ? (rws as any).value : (rws as any).__goValue === undefined ? (rws as any) : $.pointerTarget<responseWriterState>(rws)
		if (!(rws$ as responseWriterState).wroteHeader) {
			await (rws !== null && (rws as any).__isVarRef !== true && (rws as any).__goValue === undefined ? ((rws as any) as responseWriterState).writeHeader(200) : responseWriterState.prototype.writeHeader.call(rws, 200))
		}

		if ((rws$ as responseWriterState).handlerDone) {
			await (rws !== null && (rws as any).__isVarRef !== true && (rws as any).__goValue === undefined ? ((rws as any) as responseWriterState).promoteUndeclaredTrailers() : responseWriterState.prototype.promoteUndeclaredTrailers.call(rws))
		}

		let isHeadResp = $.stringEqual($.pointerValue<http.Request>((rws$ as responseWriterState).req).Method, "HEAD")
		if (!(rws$ as responseWriterState).sentHeader) {
			;(rws$ as responseWriterState).sentHeader = true
			let ctype: string = ""
			let clen: string = ""
			{
				clen = await http.Header_Get((rws$ as responseWriterState).snapHeader, "Content-Length")
				if (!$.stringEqual(clen, "")) {
					http.Header_Del((rws$ as responseWriterState).snapHeader, "Content-Length")
					{
						let [cl, __goscriptShadow9] = strconv.ParseUint(clen, 10, 63)
						if (__goscriptShadow9 == null) {
							;(rws$ as responseWriterState).sentContentLen = $.int64(cl)
						} else {
							clen = ""
						}
					}
				}
			}
			let [, hasContentLength] = $.mapGet<string, $.Slice<string>, $.Slice<string>>((rws$ as responseWriterState).snapHeader, "Content-Length", null)
			if ((((!hasContentLength && ($.stringEqual(clen, ""))) && (rws$ as responseWriterState).handlerDone) && __goscript_http2.bodyAllowedForStatus((rws$ as responseWriterState).status)) && (($.sliceLen(p) > 0) || !isHeadResp)) {
				clen = strconv.Itoa($.sliceLen(p))
			}
			let [, hasContentType] = $.mapGet<string, $.Slice<string>, $.Slice<string>>((rws$ as responseWriterState).snapHeader, "Content-Type", null)
			// If the Content-Encoding is non-blank, we shouldn't
			// sniff the body. See Issue golang.org/issue/31753.
			let ce = await http.Header_Get((rws$ as responseWriterState).snapHeader, "Content-Encoding")
			let hasCE = $.stringLen(ce) > 0
			if (((!hasCE && !hasContentType) && __goscript_http2.bodyAllowedForStatus((rws$ as responseWriterState).status)) && ($.sliceLen(p) > 0)) {
				ctype = http.DetectContentType(p)
			}
			let date: string = ""
			{
				let [, ok] = $.mapGet<string, $.Slice<string>, $.Slice<string>>((rws$ as responseWriterState).snapHeader, "Date", null)
				if (!ok) {
					// TODO(bradfitz): be faster here, like net/http? measure.
					date = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await Server.prototype.now.call($.pointerValue<serverConn>((rws$ as responseWriterState).conn).srv)))).UTC())).Format(http.TimeFormat)
				}
			}

			for (let __goscriptRangeTarget6 = $.mapGet<string, $.Slice<string>, $.Slice<string>>((rws$ as responseWriterState).snapHeader, "Trailer", null)[0], __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
				let v = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as string)
				await foreachHeaderElement(v, $.functionValue(((__receiver) => (k: string) => __receiver.declareTrailer(k))((rws$ as responseWriterState)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*responseWriterState).declareTrailer-fm"))
			}

			// "Connection" headers aren't allowed in HTTP/2 (RFC 7540, 8.1.2.2),
			// but respect "Connection" == "close" to mean sending a GOAWAY and tearing
			// down the TCP connection when idle, like we do for HTTP/1.
			// TODO: remove more Connection-specific header fields here, in addition
			// to "Connection".
			{
				let [, ok] = $.mapGet<string, $.Slice<string>, $.Slice<string>>((rws$ as responseWriterState).snapHeader, "Connection", null)
				if (ok) {
					let v = await http.Header_Get((rws$ as responseWriterState).snapHeader, "Connection")
					$.deleteMapEntry((rws$ as responseWriterState).snapHeader, "Connection")
					if ($.stringEqual(v, "close")) {
						await serverConn.prototype.startGracefulShutdown.call((rws$ as responseWriterState).conn)
					}
				}
			}

			let endStream = (((rws$ as responseWriterState).handlerDone && !(rws !== null && (rws as any).__isVarRef !== true && (rws as any).__goValue === undefined ? ((rws as any) as responseWriterState).hasTrailers() : responseWriterState.prototype.hasTrailers.call(rws))) && ($.sliceLen(p) == 0)) || isHeadResp
			err = await serverConn.prototype.writeHeaders.call((rws$ as responseWriterState).conn, (rws$ as responseWriterState).stream, new __goscript_write.writeResHeaders({streamID: $.pointerValue<stream>((rws$ as responseWriterState).stream).id, httpResCode: (rws$ as responseWriterState).status, h: (rws$ as responseWriterState).snapHeader, endStream: endStream, contentType: ctype, contentLength: clen, date: date}))
			if (err != null) {
				return [0, err]
			}
			if (endStream) {
				return [0, null]
			}
		}
		if (isHeadResp) {
			return [$.sliceLen(p), null]
		}
		if (($.sliceLen(p) == 0) && !(rws$ as responseWriterState).handlerDone) {
			return [0, null]
		}

		// only send trailers if they have actually been defined by the
		// server handler.
		let hasNonemptyTrailers = (rws !== null && (rws as any).__isVarRef !== true && (rws as any).__goValue === undefined ? ((rws as any) as responseWriterState).hasNonemptyTrailers() : responseWriterState.prototype.hasNonemptyTrailers.call(rws))
		let endStream = (rws$ as responseWriterState).handlerDone && !hasNonemptyTrailers
		if (($.sliceLen(p) > 0) || endStream) {
			// only send a 0 byte DATA frame if we're ending the stream.
			{
				let __goscriptShadow10 = await serverConn.prototype.writeDataFromHandler.call((rws$ as responseWriterState).conn, (rws$ as responseWriterState).stream, p, endStream)
				if (__goscriptShadow10 != null) {
					return [0, __goscriptShadow10]
				}
			}
		}

		if ((rws$ as responseWriterState).handlerDone && hasNonemptyTrailers) {
			err = await serverConn.prototype.writeHeaders.call((rws$ as responseWriterState).conn, (rws$ as responseWriterState).stream, new __goscript_write.writeResHeaders({streamID: $.pointerValue<stream>((rws$ as responseWriterState).stream).id, h: (rws$ as responseWriterState).handlerHeader, trailers: (rws$ as responseWriterState).trailers, endStream: true}))
			return [$.sliceLen(p), err]
		}
		return [$.sliceLen(p), null]
	}

	public async writeHeader(code: number): globalThis.Promise<void> {
		let rws: responseWriterState | $.VarRef<responseWriterState> | null = this;
		const rws$: responseWriterState = rws == null ? $.pointerTarget<responseWriterState>(rws) : (rws as any).__isVarRef === true ? (rws as any).value : (rws as any).__goValue === undefined ? (rws as any) : $.pointerTarget<responseWriterState>(rws)
		if ((rws$ as responseWriterState).wroteHeader) {
			return
		}

		await checkWriteHeaderCode(code)

		// Handle informational headers
		if ((code >= 100) && (code <= 199)) {
			// Per RFC 8297 we must not clear the current header map
			let h: http.Header = (rws$ as responseWriterState).handlerHeader

			let [, cl] = $.mapGet<string, $.Slice<string>, $.Slice<string>>(h, "Content-Length", null)
			let [, te] = $.mapGet<string, $.Slice<string>, $.Slice<string>>(h, "Transfer-Encoding", null)
			if (cl || te) {
				h = http.Header_Clone(h)
				http.Header_Del(h, "Content-Length")
				http.Header_Del(h, "Transfer-Encoding")
			}

			await serverConn.prototype.writeHeaders.call((rws$ as responseWriterState).conn, (rws$ as responseWriterState).stream, (() => { const __goscriptLiteralField19 = (rws$ as responseWriterState).handlerDone && !(rws !== null && (rws as any).__isVarRef !== true && (rws as any).__goValue === undefined ? ((rws as any) as responseWriterState).hasTrailers() : responseWriterState.prototype.hasTrailers.call(rws)); return new __goscript_write.writeResHeaders({streamID: $.pointerValue<stream>((rws$ as responseWriterState).stream).id, httpResCode: code, h: h, endStream: __goscriptLiteralField19}) })())

			return
		}

		;(rws$ as responseWriterState).wroteHeader = true;
		;(rws$ as responseWriterState).status = code
		if ($.len((rws$ as responseWriterState).handlerHeader) > 0) {
			;(rws$ as responseWriterState).snapHeader = cloneHeader((rws$ as responseWriterState).handlerHeader)
		}
	}

	static __typeInfo = $.registerStructType(
		"http2.responseWriterState",
		() => new responseWriterState(),
		() => [$.methodSignature("declareTrailer", [["k", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("hasNonemptyTrailers", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("hasTrailers", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("promoteUndeclaredTrailers", [], [], true), $.methodSignature("writeChunk", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("writeHeader", [["code", /* @__PURE__ */ $.basicType("int")]], [], true)],
		responseWriterState,
		() => [/* @__PURE__ */ $.structField("stream", /* @__PURE__ */ $.pointerType("http2.stream"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("req", /* @__PURE__ */ $.pointerType("http.Request"), [1], 8, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("conn", /* @__PURE__ */ $.pointerType("http2.serverConn"), [2], 16, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("bw", /* @__PURE__ */ $.pointerType("bufio.Writer"), [3], 24, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("handlerHeader", "http.Header", [4], 32, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("snapHeader", "http.Header", [5], 40, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("trailers", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [6], 48, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("status", /* @__PURE__ */ $.basicType("int"), [7], 72, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("wroteHeader", /* @__PURE__ */ $.basicType("bool"), [8], 80, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("sentHeader", /* @__PURE__ */ $.basicType("bool"), [9], 81, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("handlerDone", /* @__PURE__ */ $.basicType("bool"), [10], 82, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("sentContentLen", /* @__PURE__ */ $.basicType("int64"), [11], 88, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("wroteBytes", /* @__PURE__ */ $.basicType("int64"), [12], 96, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("closeNotifierMu", "sync.Mutex", [13], 104, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("closeNotifierCh", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.basicType("bool"), "both"), [14], 112, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class chunkWriter {
	public get rws(): responseWriterState | $.VarRef<responseWriterState> | null {
		return this._fields.rws
	}

	public set rws(value: responseWriterState | $.VarRef<responseWriterState> | null) {
		this._fields.rws = value
	}

	public _fields: {
		rws: responseWriterState | $.VarRef<responseWriterState> | null
	}

	constructor(init?: Partial<{rws?: responseWriterState | $.VarRef<responseWriterState> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			rws: init?.rws ?? (null! as responseWriterState | $.VarRef<responseWriterState> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): chunkWriter {
		return new chunkWriter(this, true)
	}

	public __goscriptAssign(source: chunkWriter): void {
		const target = this._fields
		const values = source._fields
		target.rws = values.rws
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const cw = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple23: any = await responseWriterState.prototype.writeChunk.call(cw.rws, p)
		n = __goscriptTuple23[0]
		err = __goscriptTuple23[1]
		if ($.comparableEqual(err, errStreamClosed)) {
			// If writing failed because the stream has been closed,
			// return the reason it was closed.
			err = $.pointerValue<stream>($.pointerValue<responseWriterState>(cw.rws).stream).closeErr
		}
		return [n, err]
	}

	static __typeInfo = $.registerStructType(
		"http2.chunkWriter",
		() => new chunkWriter(),
		() => [$.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])],
		chunkWriter,
		() => [/* @__PURE__ */ $.structField("rws", /* @__PURE__ */ $.pointerType("http2.responseWriterState"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class startPushRequest {
	public get parent(): stream | $.VarRef<stream> | null {
		return this._fields.parent
	}

	public set parent(value: stream | $.VarRef<stream> | null) {
		this._fields.parent = value
	}

	public get method(): string {
		return this._fields.method
	}

	public set method(value: string) {
		this._fields.method = value
	}

	public get url(): url2.URL | $.VarRef<url2.URL> | null {
		return this._fields.url
	}

	public set url(value: url2.URL | $.VarRef<url2.URL> | null) {
		this._fields.url = value
	}

	public get header(): http.Header {
		return this._fields.header
	}

	public set header(value: http.Header) {
		this._fields.header = value
	}

	public get done(): $.Channel<$.GoError> | null {
		return this._fields.done
	}

	public set done(value: $.Channel<$.GoError> | null) {
		this._fields.done = value
	}

	public _fields: {
		parent: stream | $.VarRef<stream> | null
		method: string
		url: url2.URL | $.VarRef<url2.URL> | null
		header: http.Header
		done: $.Channel<$.GoError> | null
	}

	constructor(init?: Partial<{parent?: stream | $.VarRef<stream> | null, method?: string, url?: url2.URL | $.VarRef<url2.URL> | null, header?: http.Header, done?: $.Channel<$.GoError> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			parent: init?.parent ?? (null! as stream | $.VarRef<stream> | null),
			method: init?.method ?? ("" as string),
			url: init?.url ?? (null! as url2.URL | $.VarRef<url2.URL> | null),
			header: init?.header ?? (null! as http.Header),
			done: init?.done ?? (null! as $.Channel<$.GoError> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): startPushRequest {
		return new startPushRequest(this, true)
	}

	public __goscriptAssign(source: startPushRequest): void {
		const target = this._fields
		const values = source._fields
		target.parent = values.parent
		target.method = values.method
		target.url = values.url
		target.header = values.header
		target.done = values.done
	}

	static __typeInfo = $.registerStructType(
		"http2.startPushRequest",
		() => new startPushRequest(),
		() => [],
		startPushRequest,
		() => [/* @__PURE__ */ $.structField("parent", /* @__PURE__ */ $.pointerType("http2.stream"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("method", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("url", /* @__PURE__ */ $.pointerType("url.URL"), [2], 24, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("header", "http.Header", [3], 32, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("done", /* @__PURE__ */ $.channelType("error", "both"), [4], 40, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export const prefaceTimeout: time.Duration = 10000000000n

export const firstSettingsTimeout: time.Duration = 2000000000n

export const handlerChunkWriteSize: number = 4096

export const defaultMaxStreams: number = 250

export const maxQueuedControlFrames: number = 10000

export const maxCachedCanonicalHeadersKeysSize: number = 2048

export const TrailerPrefix: string = "Trailer:"

export let errClientDisconnected: $.GoError = errors.New("client disconnected")

export function __goscript_set_errClientDisconnected(__goscriptValue: $.GoError): void {
	errClientDisconnected = __goscriptValue
}

export let errClosedBody: $.GoError = errors.New("body closed by handler")

export function __goscript_set_errClosedBody(__goscriptValue: $.GoError): void {
	errClosedBody = __goscriptValue
}

export let errHandlerComplete: $.GoError = errors.New("http2: request body closed due to handler exiting")

export function __goscript_set_errHandlerComplete(__goscriptValue: $.GoError): void {
	errHandlerComplete = __goscriptValue
}

export let errStreamClosed: $.GoError = errors.New("http2: stream closed")

export function __goscript_set_errStreamClosed(__goscriptValue: $.GoError): void {
	errStreamClosed = __goscriptValue
}

export let responseWriterStatePool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	let rws: responseWriterState | $.VarRef<responseWriterState> | null = new responseWriterState()
	$.pointerValue<responseWriterState>(rws).bw = bufio.NewWriterSize($.interfaceValue<io.Writer | null>(new chunkWriter({rws: rws}, true), "http2.chunkWriter", "http2.chunkWriter"), 4096)
	return $.interfaceValue(rws, "*http2.responseWriterState", /* @__PURE__ */ $.pointerType("http2.responseWriterState"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_responseWriterStatePool(__goscriptValue: sync.Pool): void {
	$.assignStruct(responseWriterStatePool.value, __goscriptValue)
}

export let testHookOnConn: (() => void) | null = null! as (() => void) | null

export function __goscript_set_testHookOnConn(__goscriptValue: (() => void) | null): void {
	testHookOnConn = __goscriptValue
}

export let testHookGetServerConn: ((_p0: serverConn | $.VarRef<serverConn> | null) => void) | null = null! as ((_p0: serverConn | $.VarRef<serverConn> | null) => void) | null

export function __goscript_set_testHookGetServerConn(__goscriptValue: ((_p0: serverConn | $.VarRef<serverConn> | null) => void) | null): void {
	testHookGetServerConn = __goscriptValue
}

export let testHookOnPanicMu: sync.Mutex | $.VarRef<sync.Mutex> | null = null! as sync.Mutex | $.VarRef<sync.Mutex> | null

export function __goscript_set_testHookOnPanicMu(__goscriptValue: sync.Mutex | $.VarRef<sync.Mutex> | null): void {
	testHookOnPanicMu = __goscriptValue
}

export let testHookOnPanic: ((sc: serverConn | $.VarRef<serverConn> | null, panicVal: any) => boolean | globalThis.Promise<boolean>) | null = null! as ((sc: serverConn | $.VarRef<serverConn> | null, panicVal: any) => boolean | globalThis.Promise<boolean>) | null

export function __goscript_set_testHookOnPanic(__goscriptValue: ((sc: serverConn | $.VarRef<serverConn> | null, panicVal: any) => boolean | globalThis.Promise<boolean>) | null): void {
	testHookOnPanic = __goscriptValue
}

export function ConfigureServer(s: http.Server | $.VarRef<http.Server> | null, conf: Server | $.VarRef<Server> | null): $.GoError {
	const s$: http.Server = s == null ? $.pointerTarget<http.Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<http.Server>(s)
	if (s == null) {
		$.panic("nil *http.Server")
	}
	if (conf == null) {
		conf = new Server()
	}
	$.pointerValue<Server>(conf).state = new serverInternalState({activeConns: $.makeMap<serverConn | $.VarRef<serverConn> | null, {}>(undefined, /* @__PURE__ */ $.pointerType("http2.serverConn"))})
	{
		let h1: http.Server | $.VarRef<http.Server> | null = s
		let h2: Server | $.VarRef<Server> | null = conf
		if ($.pointerValue<Server>(h2).IdleTimeout == 0n) {
			if ($.pointerValue<http.Server>(h1).IdleTimeout != 0n) {
				$.pointerValue<Server>(h2).IdleTimeout = $.pointerValue<http.Server>(h1).IdleTimeout
			} else {
				$.pointerValue<Server>(h2).IdleTimeout = $.pointerValue<http.Server>(h1).ReadTimeout
			}
		}
	}
	http.Server.prototype.RegisterOnShutdown.call($.pointerValue<http.Server>(s), $.functionValue(((__receiver) => () => __receiver.startGracefulShutdown())($.pointerValue<serverInternalState>($.pointerValue<Server>(conf).state)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*serverInternalState).startGracefulShutdown-fm"))

	if ((s$ as http.Server).TLSConfig == null) {
		;(s$ as http.Server).TLSConfig = new tls.Config()
	} else {
		if (($.pointerValue<tls.Config>((s$ as http.Server).TLSConfig).CipherSuites != null) && ($.pointerValue<tls.Config>((s$ as http.Server).TLSConfig).MinVersion < 772)) {
			// If they already provided a TLS 1.0–1.2 CipherSuite list, return an
			// error if it is missing ECDHE_RSA_WITH_AES_128_GCM_SHA256 or
			// ECDHE_ECDSA_WITH_AES_128_GCM_SHA256.
			let haveRequired = false
			for (let __goscriptRangeTarget0 = $.pointerValue<tls.Config>((s$ as http.Server).TLSConfig).CipherSuites, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let cs = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 16)
				switch (cs) {
					case tls.TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256:
					case tls.TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256:
					{
						haveRequired = true
						break
					}
				}
			}
			if (!haveRequired) {
				return fmt.Errorf("http2: TLSConfig.CipherSuites is missing an HTTP/2-required AES_128_GCM_SHA256 cipher (need at least one of TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 or TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256)")
			}
		}
	}

	// Note: not setting MinVersion to tls.VersionTLS12,
	// as we don't want to interfere with HTTP/1.1 traffic
	// on the user's server. We enforce TLS 1.2 later once
	// we accept a connection. Ideally this should be done
	// during next-proto selection, but using TLS <1.2 with
	// HTTP/2 is still the client's bug.

	$.pointerValue<tls.Config>((s$ as http.Server).TLSConfig).PreferServerCipherSuites = true

	if (!__goscript_transport.strSliceContains($.pointerValue<tls.Config>((s$ as http.Server).TLSConfig).NextProtos, "h2")) {
		$.pointerValue<tls.Config>((s$ as http.Server).TLSConfig).NextProtos = $.appendOne($.pointerValue<tls.Config>((s$ as http.Server).TLSConfig).NextProtos, "h2")
	}
	if (!__goscript_transport.strSliceContains($.pointerValue<tls.Config>((s$ as http.Server).TLSConfig).NextProtos, "http/1.1")) {
		$.pointerValue<tls.Config>((s$ as http.Server).TLSConfig).NextProtos = $.appendOne($.pointerValue<tls.Config>((s$ as http.Server).TLSConfig).NextProtos, "http/1.1")
	}

	if ((s$ as http.Server).TLSNextProto == null) {
		;(s$ as http.Server).TLSNextProto = $.makeMap<string, ((_p0: http.Server | $.VarRef<http.Server> | null, _p1: tls.Conn | $.VarRef<tls.Conn> | null, _p2: http.Handler | null) => void) | null>([])
	}
	let protoHandler: ((hs: http.Server | $.VarRef<http.Server> | null, c: tls.Conn | $.VarRef<tls.Conn> | null, h: http.Handler | null) => void) | null = $.functionValue(async (hs: http.Server | $.VarRef<http.Server> | null, c: tls.Conn | $.VarRef<tls.Conn> | null, h: http.Handler | null): globalThis.Promise<void> => {
		if (testHookOnConn != null) {
			void (__goscriptAwait = testHookOnConn!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		// The TLSNextProto interface predates contexts, so
		// the net/http package passes down its per-connection
		// base context via an exported but unadvertised
		// method on the Handler. This is for internal
		// net/http<=>http2 use only.
		let ctx: context2.Context | null = null! as context2.Context | null
		type baseContexter = {
			BaseContext(): context2.Context | null
		}

		$.registerInterfaceType(
			"http2.baseContexter",
			null,
			[$.methodSignature("BaseContext", [], ["context.Context"])]
		);
		{
			let [bc, ok] = $.typeAssertTuple<baseContexter | null>(h, "http2.baseContexter")
			if (ok) {
				ctx = (__goscriptAwait = (bc !== null && (bc as any).__isVarRef !== true && (bc as any).__goValue === undefined ? (bc as Exclude<baseContexter, null>) : $.pointerValue<Exclude<baseContexter, null>>(bc)).BaseContext(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		await Server.prototype.ServeConn.call(conf, $.interfaceValue<net.Conn | null>(c, "*tls.Conn", /* @__PURE__ */ $.pointerType("tls.Conn")), new ServeConnOpts({Context: ctx, Handler: h, BaseConfig: hs}))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http.Server"), /* @__PURE__ */ $.pointerType("tls.Conn"), "http.Handler"], results: [] } as $.FunctionTypeInfo))
	$.mapSet((s$ as http.Server).TLSNextProto, "h2", protoHandler)
	return null
}

export async function serverConnBaseContext(c: net.Conn | null, opts: ServeConnOpts | $.VarRef<ServeConnOpts> | null): globalThis.Promise<[context2.Context | null, (() => void) | null]> {
	let ctx: context2.Context | null = null! as context2.Context | null
	let cancel: (() => void) | null = null! as (() => void) | null
	let __goscriptTuple0: any = context2.WithCancel($.pointerValueOrNil((opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? ((opts as any) as ServeConnOpts).context() : ServeConnOpts.prototype.context.call(opts)))!)
	ctx = __goscriptTuple0[0]
	cancel = __goscriptTuple0[1]
	ctx = context2.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(http.LocalAddrContextKey, "*http.contextKey", /* @__PURE__ */ $.pointerType("http.contextKey")), ((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(c)).LocalAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any))
	{
		let hs: http.Server | $.VarRef<http.Server> | null = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? ((opts as any) as ServeConnOpts).baseConfig() : ServeConnOpts.prototype.baseConfig.call(opts))
		if (hs != null) {
			ctx = context2.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(http.ServerContextKey, "*http.contextKey", /* @__PURE__ */ $.pointerType("http.contextKey")), $.interfaceValue(hs, "*http.Server", /* @__PURE__ */ $.pointerType("http.Server")))
		}
	}
	return [ctx, cancel]
}

export function errno(v: $.GoError): number {
	{
		let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((v as any))))
		if ($.markAsStructValue($.cloneStructValue(rv)).Kind() == 12) {
			return $.uint($.markAsStructValue($.cloneStructValue(rv)).Uint(), 64)
		}
	}
	return 0
}

export function isClosedConnError(err: $.GoError): boolean {
	if (err == null) {
		return false
	}

	if (errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(net.ErrClosed)!)) {
		return true
	}

	// TODO(bradfitz): x/tools/cmd/bundle doesn't really support
	// build tags, so I can't make an http2_windows.go file with
	// Windows-specific stuff. Fix that and move this, once we
	// have a way to bundle this into std's net/http somehow.
	if ($.stringEqual(runtime.GOOS, "windows")) {
		{
			let __goscriptTuple18: any = $.typeAssertTuple<net.OpError | $.VarRef<net.OpError> | null>(err, /* @__PURE__ */ $.pointerType("net.OpError"))
			let oe: net.OpError | $.VarRef<net.OpError> | null = __goscriptTuple18[0]
			let ok = __goscriptTuple18[1]
			if (ok && ($.stringEqual($.pointerValue<net.OpError>(oe).Op, "read"))) {
				{
					let __goscriptTuple19: any = $.typeAssertTuple<os.SyscallError | $.VarRef<os.SyscallError> | null>($.pointerValue<net.OpError>(oe).Err, /* @__PURE__ */ $.pointerType("os.SyscallError"))
					let se: os.SyscallError | $.VarRef<os.SyscallError> | null = __goscriptTuple19[0]
					let __goscriptShadow6 = __goscriptTuple19[1]
					if (__goscriptShadow6 && ($.stringEqual($.pointerValue<os.SyscallError>(se).Syscall, "wsarecv"))) {
						const WSAECONNABORTED: number = 10053
						const WSAECONNRESET: number = 10054
						{
							let n = errno($.pointerValue<os.SyscallError>(se).Err)
							if ((n == 10054) || (n == 10053)) {
								return true
							}
						}
					}
				}
			}
		}
	}
	return false
}

export let settingsTimerMsg: $.VarRef<serverMessage> | null = $.varRef<serverMessage>(0)

export function __goscript_set_settingsTimerMsg(__goscriptValue: $.VarRef<serverMessage> | null): void {
	settingsTimerMsg = __goscriptValue
}

export let idleTimerMsg: $.VarRef<serverMessage> | null = $.varRef<serverMessage>(0)

export function __goscript_set_idleTimerMsg(__goscriptValue: $.VarRef<serverMessage> | null): void {
	idleTimerMsg = __goscriptValue
}

export let shutdownTimerMsg: $.VarRef<serverMessage> | null = $.varRef<serverMessage>(0)

export function __goscript_set_shutdownTimerMsg(__goscriptValue: $.VarRef<serverMessage> | null): void {
	shutdownTimerMsg = __goscriptValue
}

export let gracefulShutdownMsg: $.VarRef<serverMessage> | null = $.varRef<serverMessage>(0)

export function __goscript_set_gracefulShutdownMsg(__goscriptValue: $.VarRef<serverMessage> | null): void {
	gracefulShutdownMsg = __goscriptValue
}

export let handlerDoneMsg: $.VarRef<serverMessage> | null = $.varRef<serverMessage>(0)

export function __goscript_set_handlerDoneMsg(__goscriptValue: $.VarRef<serverMessage> | null): void {
	handlerDoneMsg = __goscriptValue
}

export let errPrefaceTimeout: $.GoError = errors.New("timeout waiting for client preface")

export function __goscript_set_errPrefaceTimeout(__goscriptValue: $.GoError): void {
	errPrefaceTimeout = __goscriptValue
}

export let errChanPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue($.makeChannel<$.GoError>(1, null! as $.GoError, "both"), "chan error", /* @__PURE__ */ $.channelType("error", "both"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_errChanPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(errChanPool.value, __goscriptValue)
}

export var writeDataPool: $.VarRef<sync.Pool>

export function __goscript_init_writeDataPool(): void {
	if (((writeDataPool) as any) === undefined) {
		writeDataPool = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(new __goscript_write.writeData(), "*http2.writeData", /* @__PURE__ */ $.pointerType("http2.writeData"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))
	}
}

export function __goscript_get_writeDataPool(): $.VarRef<sync.Pool> {
	if (((writeDataPool) as any) === undefined) {
		__goscript_init_writeDataPool()
	}
	return writeDataPool
}

export function __goscript_set_writeDataPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(__goscript_get_writeDataPool().value, __goscriptValue)
}

export let errHandlerPanicked: $.GoError = errors.New("http2: handler panicked")

export function __goscript_set_errHandlerPanicked(__goscriptValue: $.GoError): void {
	errHandlerPanicked = __goscriptValue
}

export let goAwayTimeout: time.Duration = 1000000000n

export function __goscript_set_goAwayTimeout(__goscriptValue: time.Duration): void {
	goAwayTimeout = __goscriptValue
}

export async function handleHeaderListTooLong(w: http.ResponseWriter | null, r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> {
	// 10.5.1 Limits on Header Block Size:
	// .. "A server that receives a larger header block than it is
	// willing to handle can send an HTTP 431 (Request Header Fields Too
	// Large) status code"
	const statusRequestHeaderFieldsTooLarge: number = 431
	void (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(w)).WriteHeader(431), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	await io.WriteString($.pointerValueOrNil((w as io.Writer | null))!, "<h1>HTTP Error 431</h1><p>Request Header Field(s) Too Large</p>")
}

export async function checkWriteHeaderCode(code: number): globalThis.Promise<void> {
	// Issue 22880: require valid WriteHeader status codes.
	// For now we only enforce that it's three digits.
	// In the future we might block things over 599 (600 and above aren't defined
	// at http://httpwg.org/specs/rfc7231.html#status.codes).
	// But for now any three digits.
	//
	// We used to send "HTTP/1.1 000 0" on the wire in responses but there's
	// no equivalent bogus thing we can realistically send in HTTP/2,
	// so we'll consistently panic instead and help people find their bugs
	// early. (We can't return an error from WriteHeader even if we wanted to.)
	if ((code < 100) || (code > 999)) {
		$.panic(await fmt.Sprintf("invalid WriteHeader code %v", $.basicInterfaceValue(code, "int")))
	}
}

export function cloneHeader(h: http.Header): http.Header {
	let h2: http.Header = $.makeMap<string, $.Slice<string>>()
	for (let [k, vv] of h?.entries() ?? []) {
		let vv2: $.Slice<string> = $.makeSlice<string>($.sliceLen(vv), undefined, "string")
		$.copy(vv2, vv)
		$.mapSet(h2, k, vv2)
	}
	return h2
}

export let ErrRecursivePush: $.GoError = errors.New("http2: recursive push not allowed")

export function __goscript_set_ErrRecursivePush(__goscriptValue: $.GoError): void {
	ErrRecursivePush = __goscriptValue
}

export let ErrPushLimitReached: $.GoError = errors.New("http2: push would exceed peer's SETTINGS_MAX_CONCURRENT_STREAMS")

export function __goscript_set_ErrPushLimitReached(__goscriptValue: $.GoError): void {
	ErrPushLimitReached = __goscriptValue
}

export async function foreachHeaderElement(v: string, fn: ((_p0: string) => void) | null): globalThis.Promise<void> {
	v = textproto.TrimString(v)
	if ($.stringEqual(v, "")) {
		return
	}
	if (!strings.Contains(v, ",")) {
		void (__goscriptAwait = fn!(v), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return
	}
	for (let __goscriptRangeTarget7 = strings.Split(v, ","), __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
		let f = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as string)
		{
			f = textproto.TrimString(f)
			if (!$.stringEqual(f, "")) {
				void (__goscriptAwait = fn!(f), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	}
}

export let connHeaders: $.Slice<string> = $.arrayToSlice<string>(["Connection", "Keep-Alive", "Proxy-Connection", "Transfer-Encoding", "Upgrade"])

export function __goscript_set_connHeaders(__goscriptValue: $.Slice<string>): void {
	connHeaders = __goscriptValue
}

export function checkValidHTTP2RequestHeaders(h: http.Header): $.GoError {
	for (let __goscriptRangeTarget8 = connHeaders, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
		let k = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as string)
		{
			let [, ok] = $.mapGet<string, $.Slice<string>, $.Slice<string>>(h, k, null)
			if (ok) {
				return fmt.Errorf("request header %q is not valid in HTTP/2", k)
			}
		}
	}
	let te: $.Slice<string> = $.mapGet<string, $.Slice<string>, $.Slice<string>>(h, "Te", null)[0]
	if (($.sliceLen(te) > 0) && (($.sliceLen(te) > 1) || ((!$.stringEqual($.arrayIndex(te!, 0), "trailers")) && (!$.stringEqual($.arrayIndex(te!, 0), ""))))) {
		return errors.New("request header \"TE\" may only be \"trailers\" in HTTP/2")
	}
	return null
}

export function new400Handler(err: $.GoError): http.HandlerFunc | null {
	return $.functionValue(async (w: http.ResponseWriter | null, r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> => {
		http.Error($.pointerValueOrNil(w)!, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 400)
	}, ({ kind: $.TypeKind.Function, params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo))
}

export async function h1ServerKeepAlivesDisabled(hs: http.Server | $.VarRef<http.Server> | null): globalThis.Promise<boolean> {
	let x: any = $.interfaceValue(hs, "*http.Server", /* @__PURE__ */ $.pointerType("http.Server"))
	type I = {
		doKeepAlives(): boolean
	}

	$.registerInterfaceType(
		"http2.I",
		null,
		[$.methodSignature("doKeepAlives", [], [/* @__PURE__ */ $.basicType("bool")])]
	);
	{
		let [__goscriptShadow11, ok] = $.typeAssertTuple<I | null>(x, "http2.I")
		if (ok) {
			return !(__goscriptAwait = (__goscriptShadow11 !== null && (__goscriptShadow11 as any).__isVarRef !== true && (__goscriptShadow11 as any).__goValue === undefined ? (__goscriptShadow11 as Exclude<I, null>) : $.pointerValue<Exclude<I, null>>(__goscriptShadow11)).doKeepAlives(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return false
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_http2.streamState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "http2.streamState"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Error: (receiver: any, ...args: any[]) => (__goscript_errors.ConnectionError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_errors.ErrCode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), stringToken: (receiver: any, ...args: any[]) => (__goscript_errors.ErrCode_stringToken as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.basicType("uint32", "http2.ErrCode"))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("stringToken", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ({staysWithinBuffer: (receiver: any, ...args: any[]) => (__goscript_write.writeSettings_staysWithinBuffer as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), writeFrame: (receiver: any, ...args: any[]) => (__goscript_write.writeSettings_writeFrame as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= (/* @__PURE__ */ $.sliceType("http2.Setting", "http2.writeSettings"))
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ([$.methodSignature("staysWithinBuffer", [["max", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("writeFrame", [["ctx", "http2.writeContext"]], ["error"])])
}

var __goscriptAwait: any
