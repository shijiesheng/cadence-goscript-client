// Generated file based on listener.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as time from "@goscript/time/index.js"

import * as metrics from "@goscript/go.uber.org/net/metrics/index.js"

import * as yarpctls from "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"

import * as tlsmetrics from "@goscript/go.uber.org/yarpc/transport/internal/tls/metrics/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as __goscript_conn_sniffer from "./conn_sniffer.gs.ts"

import * as __goscript_tls_checker from "./tls_checker.gs.ts"
import "@goscript/context/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/syscall/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/net/metrics/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"
import "@goscript/go.uber.org/yarpc/transport/internal/tls/metrics/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/bytes/index.js"
import "./conn_sniffer.gs.ts"
import "./tls_checker.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/transport/internal/tls/muxlistener", ["muxlistener.Config", "muxlistener.listener"])

export class Config {
	public get Listener(): net.Listener | null {
		return this._fields.Listener
	}

	public set Listener(value: net.Listener | null) {
		this._fields.Listener = value
	}

	public get TLSConfig(): tls.Config | $.VarRef<tls.Config> | null {
		return this._fields.TLSConfig
	}

	public set TLSConfig(value: tls.Config | $.VarRef<tls.Config> | null) {
		this._fields.TLSConfig = value
	}

	public get ServiceName(): string {
		return this._fields.ServiceName
	}

	public set ServiceName(value: string) {
		this._fields.ServiceName = value
	}

	public get TransportName(): string {
		return this._fields.TransportName
	}

	public set TransportName(value: string) {
		this._fields.TransportName = value
	}

	public get Meter(): metrics.Scope | $.VarRef<metrics.Scope> | null {
		return this._fields.Meter
	}

	public set Meter(value: metrics.Scope | $.VarRef<metrics.Scope> | null) {
		this._fields.Meter = value
	}

	public get Logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.Logger
	}

	public set Logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.Logger = value
	}

	public get Mode(): yarpctls.Mode {
		return this._fields.Mode
	}

	public set Mode(value: yarpctls.Mode) {
		this._fields.Mode = value
	}

	public _fields: {
		Listener: net.Listener | null
		TLSConfig: tls.Config | $.VarRef<tls.Config> | null
		ServiceName: string
		TransportName: string
		Meter: metrics.Scope | $.VarRef<metrics.Scope> | null
		Logger: zap.Logger | $.VarRef<zap.Logger> | null
		Mode: yarpctls.Mode
	}

	constructor(init?: Partial<{Listener?: net.Listener | null, TLSConfig?: tls.Config | $.VarRef<tls.Config> | null, ServiceName?: string, TransportName?: string, Meter?: metrics.Scope | $.VarRef<metrics.Scope> | null, Logger?: zap.Logger | $.VarRef<zap.Logger> | null, Mode?: yarpctls.Mode}>, __goscriptValue?: boolean) {
		this._fields = {
			Listener: init?.Listener ?? (null! as net.Listener | null),
			TLSConfig: init?.TLSConfig ?? (null! as tls.Config | $.VarRef<tls.Config> | null),
			ServiceName: init?.ServiceName ?? ("" as string),
			TransportName: init?.TransportName ?? ("" as string),
			Meter: init?.Meter ?? (null! as metrics.Scope | $.VarRef<metrics.Scope> | null),
			Logger: init?.Logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			Mode: init?.Mode ?? (0 as yarpctls.Mode)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Config {
		return new Config(this, true)
	}

	public __goscriptAssign(source: Config): void {
		const target = this._fields
		const values = source._fields
		target.Listener = $.assignFieldValue(target.Listener, values.Listener, "net.Listener")
		target.TLSConfig = values.TLSConfig
		target.ServiceName = values.ServiceName
		target.TransportName = values.TransportName
		target.Meter = values.Meter
		target.Logger = values.Logger
		target.Mode = values.Mode
	}

	static __typeInfo = $.registerStructType(
		"muxlistener.Config",
		() => new Config(),
		() => [],
		Config,
		() => [{ name: "Listener", key: "Listener", type: "net.Listener" }, { name: "TLSConfig", key: "TLSConfig", type: /* @__PURE__ */ $.pointerType("tls.Config") }, { name: "ServiceName", key: "ServiceName", type: /* @__PURE__ */ $.basicType("string") }, { name: "TransportName", key: "TransportName", type: /* @__PURE__ */ $.basicType("string") }, { name: "Meter", key: "Meter", type: /* @__PURE__ */ $.pointerType("metrics.Scope") }, { name: "Logger", key: "Logger", type: /* @__PURE__ */ $.pointerType("zap.Logger") }, { name: "Mode", key: "Mode", type: /* @__PURE__ */ $.basicType("uint16", "tls.Mode") }]
	)
}

export class listener {
	public get Listener(): net.Listener | null {
		return this._fields.Listener
	}

	public set Listener(value: net.Listener | null) {
		this._fields.Listener = value
	}

	public get tlsConfig(): tls.Config | $.VarRef<tls.Config> | null {
		return this._fields.tlsConfig
	}

	public set tlsConfig(value: tls.Config | $.VarRef<tls.Config> | null) {
		this._fields.tlsConfig = value
	}

	public get observer(): tlsmetrics.Observer | $.VarRef<tlsmetrics.Observer> | null {
		return this._fields.observer
	}

	public set observer(value: tlsmetrics.Observer | $.VarRef<tlsmetrics.Observer> | null) {
		this._fields.observer = value
	}

	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public get mode(): yarpctls.Mode {
		return this._fields.mode
	}

	public set mode(value: yarpctls.Mode) {
		this._fields.mode = value
	}

	public get closeOnce(): sync.Once {
		return this._fields.closeOnce
	}

	public set closeOnce(value: sync.Once) {
		this._fields.closeOnce = value
	}

	public get connChan(): $.Channel<net.Conn | null> | null {
		return this._fields.connChan
	}

	public set connChan(value: $.Channel<net.Conn | null> | null) {
		this._fields.connChan = value
	}

	public get stopChan(): $.Channel<{}> | null {
		return this._fields.stopChan
	}

	public set stopChan(value: $.Channel<{}> | null) {
		this._fields.stopChan = value
	}

	public get stoppedChan(): $.Channel<{}> | null {
		return this._fields.stoppedChan
	}

	public set stoppedChan(value: $.Channel<{}> | null) {
		this._fields.stoppedChan = value
	}

	public _fields: {
		Listener: net.Listener | null
		tlsConfig: tls.Config | $.VarRef<tls.Config> | null
		observer: tlsmetrics.Observer | $.VarRef<tlsmetrics.Observer> | null
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		mode: yarpctls.Mode
		closeOnce: sync.Once
		connChan: $.Channel<net.Conn | null> | null
		stopChan: $.Channel<{}> | null
		stoppedChan: $.Channel<{}> | null
	}

	constructor(init?: Partial<{Listener?: net.Listener | null, tlsConfig?: tls.Config | $.VarRef<tls.Config> | null, observer?: tlsmetrics.Observer | $.VarRef<tlsmetrics.Observer> | null, logger?: zap.Logger | $.VarRef<zap.Logger> | null, mode?: yarpctls.Mode, closeOnce?: sync.Once, connChan?: $.Channel<net.Conn | null> | null, stopChan?: $.Channel<{}> | null, stoppedChan?: $.Channel<{}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Listener: init?.Listener ?? (null! as net.Listener | null),
			tlsConfig: init?.tlsConfig ?? (null! as tls.Config | $.VarRef<tls.Config> | null),
			observer: init?.observer ?? (null! as tlsmetrics.Observer | $.VarRef<tlsmetrics.Observer> | null),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			mode: init?.mode ?? (0 as yarpctls.Mode),
			closeOnce: init?.closeOnce ? $.markAsStructValue($.cloneStructValue(init.closeOnce)) : $.markAsStructValue(new sync.Once()),
			connChan: init?.connChan ?? (null! as $.Channel<net.Conn | null> | null),
			stopChan: init?.stopChan ?? (null! as $.Channel<{}> | null),
			stoppedChan: init?.stoppedChan ?? (null! as $.Channel<{}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): listener {
		return new listener(this, true)
	}

	public __goscriptAssign(source: listener): void {
		const target = this._fields
		const values = source._fields
		target.Listener = $.assignFieldValue(target.Listener, values.Listener, "net.Listener")
		target.tlsConfig = values.tlsConfig
		target.observer = values.observer
		target.logger = values.logger
		target.mode = values.mode
		$.assignStruct(target.closeOnce, values.closeOnce)
		target.connChan = values.connChan
		target.stopChan = values.stopChan
		target.stoppedChan = values.stoppedChan
	}

	public async Accept(): globalThis.Promise<[net.Conn | null, $.GoError]> {
		const l: listener | $.VarRef<listener> | null = this;
		const l$: listener = l == null ? $.pointerTarget<listener>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<listener>(l)
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, [net.Conn | null, $.GoError]>([
			{
				id: 0,
				isSend: false,
				channel: (l$ as listener).connChan,
				onSelected: async (__goscriptSelect0Result) => {
					let conn = __goscriptSelect0Result.value
					let ok = __goscriptSelect0Result.ok
					if (!ok) {
						return [null, errListenerClosed]
					}
					return [conn, null]
				}
			},
			{
				id: 1,
				isSend: false,
				channel: (l$ as listener).stopChan,
				onSelected: async (__goscriptSelect0Result) => {
					return [null, errListenerClosed]
				}
			}
		], false)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const l: listener | $.VarRef<listener> | null = this;
		const l$: listener = l == null ? $.pointerTarget<listener>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<listener>(l)
		let err: $.GoError = null! as $.GoError
		await (l$ as listener).closeOnce.Do($.functionValue(async (): globalThis.Promise<void> => {
			err = (__goscriptAwait = $.pointerValue<Exclude<net.Listener, null>>((l$ as listener).Listener).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (l$ as listener).stopChan!.close()
			await $.chanRecv((l$ as listener).stoppedChan)
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return err
	}

	public handlePlaintextConn(conn: net.Conn | null): [net.Conn | null, $.GoError] {
		const l: listener | $.VarRef<listener> | null = this;
		tlsmetrics.Observer.prototype.IncPlaintextConnections.call($.pointerValue<listener>(l).observer)
		return [conn, null]
	}

	public async handleTLSConn(ctx: context.Context | null, conn: net.Conn | null): globalThis.Promise<[net.Conn | null, $.GoError]> {
		const l: listener | $.VarRef<listener> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const l$: listener = l == null ? $.pointerTarget<listener>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<listener>(l)
		let __goscriptTuple0: any = context.WithTimeout($.pointerValueOrNil(ctx)!, _tlsHandshakeTimeout)
		ctx = __goscriptTuple0[0]
		let cancel = __goscriptTuple0[1]
		const __goscriptDeferCallee0 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		let tlsConn: tls.Conn | $.VarRef<tls.Conn> | null = tls.Server(conn, (l$ as listener).tlsConfig)
		{
			let err = (tlsConn !== null && (tlsConn as any).__isVarRef !== true && (tlsConn as any).__goValue === undefined ? ((tlsConn as any) as tls.Conn).HandshakeContext(ctx) : tls.Conn.prototype.HandshakeContext.call(tlsConn, ctx))
			if (err != null) {
				tlsmetrics.Observer.prototype.IncTLSHandshakeFailures.call((l$ as listener).observer)
				return [null, fmt.Errorf("tls handshake failed: %w", (err as any))]
			}
		}

		tlsmetrics.Observer.prototype.IncTLSConnections.call((l$ as listener).observer, (tlsConn !== null && (tlsConn as any).__isVarRef !== true && (tlsConn as any).__goValue === undefined ? ((tlsConn as any) as tls.Conn).ConnectionState() : tls.Conn.prototype.ConnectionState.call(tlsConn)).Version)
		return [$.interfaceValue<net.Conn | null>(tlsConn, "*tls.Conn", /* @__PURE__ */ $.pointerType("tls.Conn")), null]
	}

	public async mux(ctx: context.Context | null, conn: net.Conn | null): globalThis.Promise<[net.Conn | null, $.GoError]> {
		const l: listener | $.VarRef<listener> | null = this;
		if ($.pointerValue<listener>(l).mode == 2) {
			return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as listener).handleTLSConn(ctx, conn) : listener.prototype.handleTLSConn.call(l, ctx, conn))
		}

		let c: __goscript_conn_sniffer.connSniffer | $.VarRef<__goscript_conn_sniffer.connSniffer> | null = __goscript_conn_sniffer.newConnectionSniffer(conn)
		let [isTLS, err] = await matchTLSConnection(c)
		if (err != null) {
			return [null, fmt.Errorf("tls connection matcher failed: %w", (err as any))]
		}

		if (isTLS) {
			return listener.prototype.handleTLSConn.call(l, ctx, $.interfaceValue<net.Conn | null>(c, "*muxlistener.connSniffer", /* @__PURE__ */ $.pointerType("muxlistener.connSniffer")))
		}

		return listener.prototype.handlePlaintextConn.call(l, $.interfaceValue<net.Conn | null>(c, "*muxlistener.connSniffer", /* @__PURE__ */ $.pointerType("muxlistener.connSniffer")))
	}

	public async serve(): globalThis.Promise<void> {
		const l: listener | $.VarRef<listener> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const l$: listener = l == null ? $.pointerTarget<listener>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<listener>(l)
		let wg: $.VarRef<sync.WaitGroup> = $.varRef($.markAsStructValue(new sync.WaitGroup()))
		let [ctx, cancel] = context.WithCancel($.pointerValueOrNil(context.Background())!)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			void (__goscriptAwait = cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await wg.value.Wait()
			void (l$ as listener).connChan!.close()
			void (l$ as listener).stoppedChan!.close()
		})() })

		while (true) {
			let [conn, err] = await $.pointerValue<Exclude<net.Listener, null>>((l$ as listener).Listener).Accept()
			if (err != null) {
				return
			}

			wg.value.Add(1)
			const __goscriptDeferCallee1 = $.functionValue(((__receiver) => (ctx: context.Context | null, conn: net.Conn | null, wg: sync.WaitGroup | $.VarRef<sync.WaitGroup> | null) => __receiver.serveConnection(ctx, conn, wg))((l$ as listener)), ({ kind: $.TypeKind.Function, params: ["context.Context", "net.Conn", /* @__PURE__ */ $.pointerType("sync.WaitGroup")], results: [] } as $.FunctionTypeInfo), "go.uber.org/yarpc/transport/internal/tls/muxlistener.(*listener).serveConnection-fm")
			const __goscriptDeferArg0 = ctx
			const __goscriptDeferArg1 = conn
			const __goscriptDeferArg2 = wg
			queueMicrotask(async () => { await __goscriptDeferCallee1(__goscriptDeferArg0, __goscriptDeferArg1, __goscriptDeferArg2) })
		}
	}

	public async serveConnection(ctx: context.Context | null, conn: net.Conn | null, wg: sync.WaitGroup | $.VarRef<sync.WaitGroup> | null): globalThis.Promise<void> {
		const l: listener | $.VarRef<listener> | null = this;
		using __defer = new $.DisposableStack()
		const l$: listener = l == null ? $.pointerTarget<listener>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<listener>(l)
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Done())($.pointerValue<sync.WaitGroup>(wg)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*WaitGroup).Done-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		let [c, err] = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as listener).mux(ctx, conn) : listener.prototype.mux.call(l, ctx, conn))
		if (err != null) {
			void (__goscriptAwait = (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? (conn as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(conn)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

			let logLevel = 2
			if (errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(io.EOF)!) || errors.Is($.pointerValueOrNil(err)!, $.namedValueInterfaceValue<$.GoError>(syscall.ECONNRESET, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))!)) {
				// Log EOF and Connection Reset error at warn level as they mean that
				// client has already closed connection and likely nothing is wrong with the server itself.
				logLevel = 1
			}

			// TODO: Replace with logger.Log once we upgrade to zap >=1.22
			{
				let ce: any = zap.Logger.prototype.Check.call((l$ as listener).logger, logLevel, "failed to serve connection")
				if (ce != null) {
					ce.Write($.arrayToSlice<any>([zap.Error(err)]))
				}
			}

			return
		}

		const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, void>([
			{
				id: 0,
				isSend: true,
				channel: (l$ as listener).connChan,
				value: c,
			},
			{
				id: 1,
				isSend: false,
				channel: (l$ as listener).stopChan,
				onSelected: async (__goscriptSelect1Result) => {
					void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(c)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
		], false)
		if (__goscriptSelect1HasReturn) {
			return __goscriptSelect1Value
		}
	}

	public Addr(): any {
		return $.pointerValue<Exclude<net.Listener | null, null>>(this.Listener).Addr()
	}

	static __typeInfo = $.registerStructType(
		"muxlistener.listener",
		() => new listener(),
		() => [{ name: "Accept", args: [], returns: [{ type: "net.Conn" }, { type: "error" }], pointerReceiver: true }, { name: "Close", args: [], returns: [{ type: "error" }], pointerReceiver: true }, { name: "handlePlaintextConn", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "net.Conn" }, { type: "error" }], pointerReceiver: true }, { name: "handleTLSConn", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "net.Conn" }, { type: "error" }], pointerReceiver: true }, { name: "mux", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "net.Conn" }, { type: "error" }], pointerReceiver: true }, { name: "serve", args: [], returns: [], pointerReceiver: true }, { name: "serveConnection", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "Addr", args: [], returns: [{ type: "net.Addr" }] }],
		listener,
		() => [{ name: "Listener", key: "Listener", type: "net.Listener", anonymous: true }, { name: "tlsConfig", key: "tlsConfig", type: /* @__PURE__ */ $.pointerType("tls.Config") }, { name: "observer", key: "observer", type: /* @__PURE__ */ $.pointerType("metrics.Observer") }, { name: "logger", key: "logger", type: /* @__PURE__ */ $.pointerType("zap.Logger") }, { name: "mode", key: "mode", type: /* @__PURE__ */ $.basicType("uint16", "tls.Mode") }, { name: "closeOnce", key: "closeOnce", type: "sync.Once" }, { name: "connChan", key: "connChan", type: /* @__PURE__ */ $.channelType("net.Conn", "both") }, { name: "stopChan", key: "stopChan", type: /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both") }, { name: "stoppedChan", key: "stoppedChan", type: /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both") }]
	)
}

export let errListenerClosed: $.GoError = errors.New("listener closed")

export function __goscript_set_errListenerClosed(__goscriptValue: $.GoError): void {
	errListenerClosed = __goscriptValue
}

export let _sniffReadTimeout: time.Duration = 15000000000n

export function __goscript_set__sniffReadTimeout(__goscriptValue: time.Duration): void {
	_sniffReadTimeout = __goscriptValue
}

export let _tlsHandshakeTimeout: time.Duration = 120000000000n

export function __goscript_set__tlsHandshakeTimeout(__goscriptValue: time.Duration): void {
	_tlsHandshakeTimeout = __goscriptValue
}

export async function NewListener(c: Config): globalThis.Promise<net.Listener | null> {
	if (c.Mode == 0) {
		return c.Listener
	}

	let logger: zap.Logger | $.VarRef<zap.Logger> | null = zap.Logger.prototype.With.call(c.Logger, $.arrayToSlice<zap.Field>([zap.String("transportName", c.TransportName)]))

	let observer: tlsmetrics.Observer | $.VarRef<tlsmetrics.Observer> | null = tlsmetrics.NewObserver(new tlsmetrics.Params({Meter: c.Meter, Logger: logger, ServiceName: c.ServiceName, TransportName: c.TransportName, Mode: c.Mode, Direction: "inbound"}, true))

	let lis: listener | $.VarRef<listener> | null = new listener({Listener: c.Listener, tlsConfig: c.TLSConfig, observer: observer, logger: logger, connChan: $.makeChannel<net.Conn | null>(0, null! as net.Conn | null, "both"), stoppedChan: $.makeChannel<{}>(0, {}, "both"), stopChan: $.makeChannel<{}>(0, {}, "both"), mode: c.Mode})

	// Starts go routine for the connection server
	queueMicrotask(async () => { await (lis !== null && (lis as any).__isVarRef !== true && (lis as any).__goValue === undefined ? ((lis as any) as listener).serve() : listener.prototype.serve.call(lis)) })

	return $.interfaceValue<net.Listener | null>(lis, "*muxlistener.listener", /* @__PURE__ */ $.pointerType("muxlistener.listener"))
}

export async function matchTLSConnection(cs: __goscript_conn_sniffer.connSniffer | $.VarRef<__goscript_conn_sniffer.connSniffer> | null): globalThis.Promise<[boolean, $.GoError]> {
	using __defer = new $.DisposableStack()
	{
		let err = $.pointerValue<Exclude<net.Conn, null>>($.pointerValue<__goscript_conn_sniffer.connSniffer>(cs).Conn).SetReadDeadline($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time.Now())).Add(_sniffReadTimeout))))
		if (err != null) {
			return [false, err]
		}
	}

	// Reset read deadline after sniffing. See below:
	// https://github.com/golang/go/blob/be0b2a393a5a7297a3c8f42ca7d5ad3e4b15dcbe/src/net/http/server.go#L1887
	__defer.defer(() => { ((): void => {
		$.pointerValue<Exclude<net.Conn, null>>($.pointerValue<__goscript_conn_sniffer.connSniffer>(cs).Conn).SetReadDeadline($.markAsStructValue(new time.Time()))
	})() })

	let [isTLS, err] = await __goscript_tls_checker.isTLSClientHelloRecord($.interfaceValue<io.Reader | null>(cs, "*muxlistener.connSniffer", /* @__PURE__ */ $.pointerType("muxlistener.connSniffer")))
	if (err != null) {
		return [false, err]
	}

	void (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as __goscript_conn_sniffer.connSniffer).stopSniffing() : __goscript_conn_sniffer.connSniffer.prototype.stopSniffing.call(cs))
	return [isTLS, null]
}

var __goscriptAwait: any
