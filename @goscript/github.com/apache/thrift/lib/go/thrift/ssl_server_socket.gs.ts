// Generated file based on ssl_server_socket.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as net from "@goscript/net/index.js"

import * as time from "@goscript/time/index.js"

import type * as context from "@goscript/context/index.js"

import type * as io from "@goscript/io/index.js"

import type * as __goscript__type from "./type.gs.ts"

import * as __goscript_configuration from "./configuration.gs.ts"

import type * as __goscript_exception from "./exception.gs.ts"

import * as __goscript_header_transport from "./header_transport.gs.ts"

import type * as __goscript_messagetype from "./messagetype.gs.ts"

import type * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_socket_conn from "./socket_conn.gs.ts"

import * as __goscript_socket_non_unix_conn from "./socket_non_unix_conn.gs.ts"

import * as __goscript_ssl_socket from "./ssl_socket.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"

import * as __goscript_transport_exception from "./transport_exception.gs.ts"
import "@goscript/crypto/tls/index.js"
import "@goscript/net/index.js"
import "@goscript/time/index.js"
import "./configuration.gs.ts"
import "./header_transport.gs.ts"
import "./socket_conn.gs.ts"
import "./socket_non_unix_conn.gs.ts"
import "./ssl_socket.gs.ts"
import "./transport.gs.ts"
import "./transport_exception.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TSSLServerSocket"])

export class TSSLServerSocket {
	public get listener(): net.Listener | null {
		return this._fields.listener
	}

	public set listener(value: net.Listener | null) {
		this._fields.listener = value
	}

	public get addr(): net.Addr | null {
		return this._fields.addr
	}

	public set addr(value: net.Addr | null) {
		this._fields.addr = value
	}

	public get clientTimeout(): time.Duration {
		return this._fields.clientTimeout
	}

	public set clientTimeout(value: time.Duration) {
		this._fields.clientTimeout = value
	}

	public get interrupted(): boolean {
		return this._fields.interrupted
	}

	public set interrupted(value: boolean) {
		this._fields.interrupted = value
	}

	public get cfg(): tls.Config | $.VarRef<tls.Config> | null {
		return this._fields.cfg
	}

	public set cfg(value: tls.Config | $.VarRef<tls.Config> | null) {
		this._fields.cfg = value
	}

	public _fields: {
		listener: net.Listener | null
		addr: net.Addr | null
		clientTimeout: time.Duration
		interrupted: boolean
		cfg: tls.Config | $.VarRef<tls.Config> | null
	}

	constructor(init?: Partial<{listener?: net.Listener | null, addr?: net.Addr | null, clientTimeout?: time.Duration, interrupted?: boolean, cfg?: tls.Config | $.VarRef<tls.Config> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			listener: init?.listener ?? (null! as net.Listener | null),
			addr: init?.addr ?? (null! as net.Addr | null),
			clientTimeout: init?.clientTimeout ?? (0n as time.Duration),
			interrupted: init?.interrupted ?? (false as boolean),
			cfg: init?.cfg ?? (null! as tls.Config | $.VarRef<tls.Config> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TSSLServerSocket {
		return new TSSLServerSocket(this, true)
	}

	public __goscriptAssign(source: TSSLServerSocket): void {
		const target = this._fields
		const values = source._fields
		target.listener = $.assignFieldValue(target.listener, values.listener, "net.Listener")
		target.addr = $.assignFieldValue(target.addr, values.addr, "net.Addr")
		target.clientTimeout = values.clientTimeout
		target.interrupted = values.interrupted
		target.cfg = values.cfg
	}

	public async Accept(): globalThis.Promise<[__goscript_transport.TTransport | null, $.GoError]> {
		const p: TSSLServerSocket | $.VarRef<TSSLServerSocket> | null = this;
		const p$: TSSLServerSocket = p == null ? $.pointerTarget<TSSLServerSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSSLServerSocket>(p)
		if ((p$ as TSSLServerSocket).interrupted) {
			return [null, __goscript_transport.errTransportInterrupted]
		}
		if ((p$ as TSSLServerSocket).listener == null) {
			return [null, (__goscript_transport_exception.NewTTransportException(1, "No underlying server socket") as $.GoError)]
		}
		let [conn, err] = await $.pointerValue<Exclude<net.Listener, null>>((p$ as TSSLServerSocket).listener).Accept()
		if (err != null) {
			return [null, (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)]
		}
		return [$.interfaceValue<__goscript_transport.TTransport | null>(await __goscript_ssl_socket.NewTSSLSocketFromConnTimeout(conn, (p$ as TSSLServerSocket).cfg, (p$ as TSSLServerSocket).clientTimeout), "*thrift.TSSLSocket", /* @__PURE__ */ $.pointerType("thrift.TSSLSocket")), null]
	}

	public Addr(): net.Addr | null {
		const p: TSSLServerSocket | $.VarRef<TSSLServerSocket> | null = this;
		return $.pointerValue<TSSLServerSocket>(p).addr
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const p: TSSLServerSocket | $.VarRef<TSSLServerSocket> | null = this;
		using __defer = new $.DisposableStack()
		const p$: TSSLServerSocket = p == null ? $.pointerTarget<TSSLServerSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSSLServerSocket>(p)
		__defer.defer(() => { ((): void => {
			;(p$ as TSSLServerSocket).listener = null
		})() })
		if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSSLServerSocket).IsListening() : TSSLServerSocket.prototype.IsListening.call(p))) {
			return (__goscriptAwait = $.pointerValue<Exclude<net.Listener, null>>((p$ as TSSLServerSocket).listener).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return null
	}

	public Interrupt(): $.GoError {
		let p: TSSLServerSocket | $.VarRef<TSSLServerSocket> | null = this;
		$.pointerValue<TSSLServerSocket>(p).interrupted = true
		return null
	}

	public IsListening(): boolean {
		const p: TSSLServerSocket | $.VarRef<TSSLServerSocket> | null = this;
		return $.pointerValue<TSSLServerSocket>(p).listener != null
	}

	public async Listen(): globalThis.Promise<$.GoError> {
		let p: TSSLServerSocket | $.VarRef<TSSLServerSocket> | null = this;
		const p$: TSSLServerSocket = p == null ? $.pointerTarget<TSSLServerSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSSLServerSocket>(p)
		if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSSLServerSocket).IsListening() : TSSLServerSocket.prototype.IsListening.call(p))) {
			return null
		}
		let [l, err] = await tls.Listen((__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((p$ as TSSLServerSocket).addr).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((p$ as TSSLServerSocket).addr).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (p$ as TSSLServerSocket).cfg)
		if (err != null) {
			return err
		}
		;(p$ as TSSLServerSocket).listener = l
		return null
	}

	public async Open(): globalThis.Promise<$.GoError> {
		let p: TSSLServerSocket | $.VarRef<TSSLServerSocket> | null = this;
		const p$: TSSLServerSocket = p == null ? $.pointerTarget<TSSLServerSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSSLServerSocket>(p)
		if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSSLServerSocket).IsListening() : TSSLServerSocket.prototype.IsListening.call(p))) {
			return (__goscript_transport_exception.NewTTransportException(2, "Server socket already open") as $.GoError)
		}
		{
			let [l, err] = await tls.Listen((__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((p$ as TSSLServerSocket).addr).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((p$ as TSSLServerSocket).addr).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (p$ as TSSLServerSocket).cfg)
			if (err != null) {
				return err
			} else {
				;(p$ as TSSLServerSocket).listener = l
			}
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"thrift.TSSLServerSocket",
		() => new TSSLServerSocket(),
		() => [$.methodSignature("Accept", [], ["thrift.TTransport", "error"], true), $.methodSignature("Addr", [], ["net.Addr"], true), $.methodSignature("Close", [], ["error"], true), $.methodSignature("Interrupt", [], ["error"], true), $.methodSignature("IsListening", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Listen", [], ["error"], true), $.methodSignature("Open", [], ["error"], true)],
		TSSLServerSocket,
		() => [/* @__PURE__ */ $.structField("listener", "net.Listener", [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("addr", "net.Addr", [1], 16, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("clientTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 32, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("interrupted", /* @__PURE__ */ $.basicType("bool"), [3], 40, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("cfg", /* @__PURE__ */ $.pointerType("tls.Config"), [4], 48, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export async function NewTSSLServerSocket(listenAddr: string, cfg: tls.Config | $.VarRef<tls.Config> | null): globalThis.Promise<[TSSLServerSocket | $.VarRef<TSSLServerSocket> | null, $.GoError]> {
	return NewTSSLServerSocketTimeout(listenAddr, cfg, 0n)
}

export async function NewTSSLServerSocketTimeout(listenAddr: string, cfg: tls.Config | $.VarRef<tls.Config> | null, clientTimeout: time.Duration): globalThis.Promise<[TSSLServerSocket | $.VarRef<TSSLServerSocket> | null, $.GoError]> {
	const cfg$: tls.Config = cfg == null ? $.pointerTarget<tls.Config>(cfg) : (cfg as any).__isVarRef === true ? (cfg as any).value : (cfg as any).__goValue === undefined ? (cfg as any) : $.pointerTarget<tls.Config>(cfg)
	if ((cfg$ as tls.Config).MinVersion == 0) {
		;(cfg$ as tls.Config).MinVersion = 769
	}
	let __goscriptTuple0: any = await net.ResolveTCPAddr("tcp", listenAddr)
	let addr: net.TCPAddr | $.VarRef<net.TCPAddr> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return [null, err]
	}
	return [new TSSLServerSocket({addr: $.interfaceValue<net.Addr | null>(addr, "*net.TCPAddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")), clientTimeout: clientTimeout, cfg: cfg}), null]
}

var __goscriptAwait: any
