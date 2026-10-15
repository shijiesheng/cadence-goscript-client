// Generated file based on dialer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as net from "@goscript/net/index.js"

import * as time from "@goscript/time/index.js"

import * as metrics from "@goscript/go.uber.org/net/metrics/index.js"

import * as yarpctls from "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"

import * as tlsmetrics from "@goscript/go.uber.org/yarpc/transport/internal/tls/metrics/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"
import "@goscript/context/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/net/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/net/metrics/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"
import "@goscript/go.uber.org/yarpc/transport/internal/tls/metrics/index.js"
import "@goscript/go.uber.org/zap/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/transport/internal/tls/dialer", ["dialer.Params", "dialer.TLSDialer"])

export class Params {
	public get Config(): tls.Config | $.VarRef<tls.Config> | null {
		return this._fields.Config
	}

	public set Config(value: tls.Config | $.VarRef<tls.Config> | null) {
		this._fields.Config = value
	}

	public get Dialer(): ((ctx: context.Context | null, network: string, address: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null {
		return this._fields.Dialer
	}

	public set Dialer(value: ((ctx: context.Context | null, network: string, address: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null) {
		this._fields.Dialer = value
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

	public get Dest(): string {
		return this._fields.Dest
	}

	public set Dest(value: string) {
		this._fields.Dest = value
	}

	public _fields: {
		Config: tls.Config | $.VarRef<tls.Config> | null
		Dialer: ((ctx: context.Context | null, network: string, address: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null
		Meter: metrics.Scope | $.VarRef<metrics.Scope> | null
		Logger: zap.Logger | $.VarRef<zap.Logger> | null
		ServiceName: string
		TransportName: string
		Dest: string
	}

	constructor(init?: Partial<{Config?: tls.Config | $.VarRef<tls.Config> | null, Dialer?: ((ctx: context.Context | null, network: string, address: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null, Meter?: metrics.Scope | $.VarRef<metrics.Scope> | null, Logger?: zap.Logger | $.VarRef<zap.Logger> | null, ServiceName?: string, TransportName?: string, Dest?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Config: init?.Config ?? (null! as tls.Config | $.VarRef<tls.Config> | null),
			Dialer: init?.Dialer ?? (null! as ((ctx: context.Context | null, network: string, address: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null),
			Meter: init?.Meter ?? (null! as metrics.Scope | $.VarRef<metrics.Scope> | null),
			Logger: init?.Logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			ServiceName: init?.ServiceName ?? ("" as string),
			TransportName: init?.TransportName ?? ("" as string),
			Dest: init?.Dest ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Params {
		return new Params(this, true)
	}

	public __goscriptAssign(source: Params): void {
		const target = this._fields
		const values = source._fields
		target.Config = values.Config
		target.Dialer = values.Dialer
		target.Meter = values.Meter
		target.Logger = values.Logger
		target.ServiceName = values.ServiceName
		target.TransportName = values.TransportName
		target.Dest = values.Dest
	}

	static __typeInfo = $.registerStructType(
		"dialer.Params",
		() => new Params(),
		() => [],
		Params,
		() => [{ name: "Config", key: "Config", type: /* @__PURE__ */ $.pointerType("tls.Config") }, { name: "Dialer", key: "Dialer", type: ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["net.Conn", "error"] } as $.FunctionTypeInfo) }, { name: "Meter", key: "Meter", type: /* @__PURE__ */ $.pointerType("metrics.Scope") }, { name: "Logger", key: "Logger", type: /* @__PURE__ */ $.pointerType("zap.Logger") }, { name: "ServiceName", key: "ServiceName", type: /* @__PURE__ */ $.basicType("string") }, { name: "TransportName", key: "TransportName", type: /* @__PURE__ */ $.basicType("string") }, { name: "Dest", key: "Dest", type: /* @__PURE__ */ $.basicType("string") }]
	)
}

export class TLSDialer {
	public get config(): tls.Config | $.VarRef<tls.Config> | null {
		return this._fields.config
	}

	public set config(value: tls.Config | $.VarRef<tls.Config> | null) {
		this._fields.config = value
	}

	public get dialer(): ((ctx: context.Context | null, network: string, address: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null {
		return this._fields.dialer
	}

	public set dialer(value: ((ctx: context.Context | null, network: string, address: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null) {
		this._fields.dialer = value
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

	public _fields: {
		config: tls.Config | $.VarRef<tls.Config> | null
		dialer: ((ctx: context.Context | null, network: string, address: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null
		observer: tlsmetrics.Observer | $.VarRef<tlsmetrics.Observer> | null
		logger: zap.Logger | $.VarRef<zap.Logger> | null
	}

	constructor(init?: Partial<{config?: tls.Config | $.VarRef<tls.Config> | null, dialer?: ((ctx: context.Context | null, network: string, address: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null, observer?: tlsmetrics.Observer | $.VarRef<tlsmetrics.Observer> | null, logger?: zap.Logger | $.VarRef<zap.Logger> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			config: init?.config ?? (null! as tls.Config | $.VarRef<tls.Config> | null),
			dialer: init?.dialer ?? (null! as ((ctx: context.Context | null, network: string, address: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null),
			observer: init?.observer ?? (null! as tlsmetrics.Observer | $.VarRef<tlsmetrics.Observer> | null),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TLSDialer {
		return new TLSDialer(this, true)
	}

	public __goscriptAssign(source: TLSDialer): void {
		const target = this._fields
		const values = source._fields
		target.config = values.config
		target.dialer = values.dialer
		target.observer = values.observer
		target.logger = values.logger
	}

	public async DialContext(ctx: context.Context | null, network: string, addr: string): globalThis.Promise<[net.Conn | null, $.GoError]> {
		const t: TLSDialer | $.VarRef<TLSDialer> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const t$: TLSDialer = t == null ? $.pointerTarget<TLSDialer>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TLSDialer>(t)
		let [conn, err] = await (t$ as TLSDialer).dialer!(ctx, network, addr)
		if (err != null) {
			zap.Logger.prototype.Error.call((t$ as TLSDialer).logger, "failed to dial connection", $.arrayToSlice<zap.Field>([zap.Error(err)]))
			return [null, err]
		}

		let tlsConn: tls.Conn | $.VarRef<tls.Conn> | null = tls.Client(conn, (t$ as TLSDialer).config)
		let __goscriptTuple0: any = context.WithTimeout($.pointerValueOrNil(ctx)!, 10000000000n)
		ctx = __goscriptTuple0[0]
		let cancel = __goscriptTuple0[1]
		const __goscriptDeferCallee0 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		{
			let __goscriptShadow0 = (tlsConn !== null && (tlsConn as any).__isVarRef !== true && (tlsConn as any).__goValue === undefined ? ((tlsConn as any) as tls.Conn).HandshakeContext(ctx) : tls.Conn.prototype.HandshakeContext.call(tlsConn, ctx))
			if (__goscriptShadow0 != null) {
				zap.Logger.prototype.Error.call((t$ as TLSDialer).logger, "failed to complete TLS handshake", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow0)]))
				tlsmetrics.Observer.prototype.IncTLSHandshakeFailures.call((t$ as TLSDialer).observer)
				return [null, __goscriptShadow0]
			}
		}

		tlsmetrics.Observer.prototype.IncTLSConnections.call((t$ as TLSDialer).observer, (tlsConn !== null && (tlsConn as any).__isVarRef !== true && (tlsConn as any).__goValue === undefined ? ((tlsConn as any) as tls.Conn).ConnectionState() : tls.Conn.prototype.ConnectionState.call(tlsConn)).Version)
		return [$.interfaceValue<net.Conn | null>(tlsConn, "*tls.Conn", /* @__PURE__ */ $.pointerType("tls.Conn")), null]
	}

	static __typeInfo = $.registerStructType(
		"dialer.TLSDialer",
		() => new TLSDialer(),
		() => [{ name: "DialContext", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "net.Conn" }, { type: "error" }], pointerReceiver: true }],
		TLSDialer,
		() => [{ name: "config", key: "config", type: /* @__PURE__ */ $.pointerType("tls.Config") }, { name: "dialer", key: "dialer", type: ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["net.Conn", "error"] } as $.FunctionTypeInfo) }, { name: "observer", key: "observer", type: /* @__PURE__ */ $.pointerType("metrics.Observer") }, { name: "logger", key: "logger", type: /* @__PURE__ */ $.pointerType("zap.Logger") }]
	)
}

export const defaultDialTimeout: time.Duration = 30000000000n

export const defaultHandshakeTimeout: time.Duration = 10000000000n

export const directionName: string = "outbound"

export function NewTLSDialer(p: Params): TLSDialer | $.VarRef<TLSDialer> | null {
	let dialer: ((ctx: context.Context | null, network: string, address: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null = p.Dialer
	if (dialer == null) {
		dialer = $.functionValue(((__receiver) => (ctx: context.Context | null, network: string, address: string) => __receiver.DialContext(ctx, network, address))($.pointerValue<net.Dialer>((new net.Dialer({Timeout: 30000000000n})))), ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["net.Conn", "error"] } as $.FunctionTypeInfo), "net.(*Dialer).DialContext-fm")
	}
	let observer: tlsmetrics.Observer | $.VarRef<tlsmetrics.Observer> | null = tlsmetrics.NewObserver(new tlsmetrics.Params({Meter: p.Meter, Logger: p.Logger, ServiceName: p.ServiceName, TransportName: p.TransportName, Dest: p.Dest, Direction: "outbound", Mode: 2}, true))
	return new TLSDialer({config: p.Config, dialer: dialer, observer: observer, logger: p.Logger})
}

var __goscriptAwait: any
