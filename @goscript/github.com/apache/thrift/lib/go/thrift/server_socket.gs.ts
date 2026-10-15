// Generated file based on server_socket.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import type * as context from "@goscript/context/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import type * as io from "@goscript/io/index.js"

import type * as __goscript__type from "./type.gs.ts"

import * as __goscript_configuration from "./configuration.gs.ts"

import type * as __goscript_exception from "./exception.gs.ts"

import * as __goscript_header_transport from "./header_transport.gs.ts"

import type * as __goscript_messagetype from "./messagetype.gs.ts"

import type * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_socket from "./socket.gs.ts"

import * as __goscript_socket_conn from "./socket_conn.gs.ts"

import * as __goscript_socket_non_unix_conn from "./socket_non_unix_conn.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"

import * as __goscript_transport_exception from "./transport_exception.gs.ts"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/crypto/tls/index.js"
import "./configuration.gs.ts"
import "./header_transport.gs.ts"
import "./socket.gs.ts"
import "./socket_conn.gs.ts"
import "./socket_non_unix_conn.gs.ts"
import "./transport.gs.ts"
import "./transport_exception.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TServerSocket"])

export class TServerSocket {
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

	// Protects the interrupted value to make it thread safe.
	public get mu(): sync.RWMutex {
		return this._fields.mu
	}

	public set mu(value: sync.RWMutex) {
		this._fields.mu = value
	}

	public get interrupted(): boolean {
		return this._fields.interrupted
	}

	public set interrupted(value: boolean) {
		this._fields.interrupted = value
	}

	public _fields: {
		listener: net.Listener | null
		addr: net.Addr | null
		clientTimeout: time.Duration
		mu: sync.RWMutex
		interrupted: boolean
	}

	constructor(init?: Partial<{listener?: net.Listener | null, addr?: net.Addr | null, clientTimeout?: time.Duration, mu?: sync.RWMutex, interrupted?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			listener: init?.listener ?? (null! as net.Listener | null),
			addr: init?.addr ?? (null! as net.Addr | null),
			clientTimeout: init?.clientTimeout ?? (0n as time.Duration),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.RWMutex()),
			interrupted: init?.interrupted ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TServerSocket {
		return new TServerSocket(this, true)
	}

	public __goscriptAssign(source: TServerSocket): void {
		const target = this._fields
		const values = source._fields
		target.listener = $.assignFieldValue(target.listener, values.listener, "net.Listener")
		target.addr = $.assignFieldValue(target.addr, values.addr, "net.Addr")
		target.clientTimeout = values.clientTimeout
		$.assignStruct(target.mu, values.mu)
		target.interrupted = values.interrupted
	}

	public async Accept(): globalThis.Promise<[__goscript_transport.TTransport | null, $.GoError]> {
		const p: TServerSocket | $.VarRef<TServerSocket> | null = this;
		const p$: TServerSocket = p == null ? $.pointerTarget<TServerSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TServerSocket>(p)
		await (p$ as TServerSocket).mu.RLock()
		let interrupted = (p$ as TServerSocket).interrupted
		void (p$ as TServerSocket).mu.RUnlock()

		if (interrupted) {
			return [null, __goscript_transport.errTransportInterrupted]
		}

		await (p$ as TServerSocket).mu.Lock()
		let listener = (p$ as TServerSocket).listener
		void (p$ as TServerSocket).mu.Unlock()
		if (listener == null) {
			return [null, (__goscript_transport_exception.NewTTransportException(1, "No underlying server socket") as $.GoError)]
		}

		let [conn, err] = await (listener !== null && (listener as any).__isVarRef !== true && (listener as any).__goValue === undefined ? (listener as Exclude<net.Listener, null>) : $.pointerValue<Exclude<net.Listener, null>>(listener)).Accept()
		if (err != null) {
			return [null, (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)]
		}
		return [$.interfaceValue<__goscript_transport.TTransport | null>(await __goscript_socket.NewTSocketFromConnTimeout(conn, (p$ as TServerSocket).clientTimeout), "*thrift.TSocket", /* @__PURE__ */ $.pointerType("thrift.TSocket")), null]
	}

	public async Addr(): globalThis.Promise<net.Addr | null> {
		const p: TServerSocket | $.VarRef<TServerSocket> | null = this;
		const p$: TServerSocket = p == null ? $.pointerTarget<TServerSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TServerSocket>(p)
		if ((p$ as TServerSocket).listener != null) {
			return $.pointerValue<Exclude<net.Listener, null>>((p$ as TServerSocket).listener).Addr()
		}
		return (p$ as TServerSocket).addr
	}

	public async Close(): globalThis.Promise<$.GoError> {
		let p: TServerSocket | $.VarRef<TServerSocket> | null = this;
		const p$: TServerSocket = p == null ? $.pointerTarget<TServerSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TServerSocket>(p)
		let err: $.GoError = null! as $.GoError
		await (p$ as TServerSocket).mu.Lock()
		if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TServerSocket).IsListening() : TServerSocket.prototype.IsListening.call(p))) {
			err = (__goscriptAwait = $.pointerValue<Exclude<net.Listener, null>>((p$ as TServerSocket).listener).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
			;(p$ as TServerSocket).listener = null
		}
		void (p$ as TServerSocket).mu.Unlock()
		return err
	}

	public async Interrupt(): globalThis.Promise<$.GoError> {
		let p: TServerSocket | $.VarRef<TServerSocket> | null = this;
		const p$: TServerSocket = p == null ? $.pointerTarget<TServerSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TServerSocket>(p)
		await (p$ as TServerSocket).mu.Lock();
		;(p$ as TServerSocket).interrupted = true
		void (p$ as TServerSocket).mu.Unlock()
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TServerSocket).Close() : TServerSocket.prototype.Close.call(p))

		return null
	}

	public IsListening(): boolean {
		const p: TServerSocket | $.VarRef<TServerSocket> | null = this;
		return $.pointerValue<TServerSocket>(p).listener != null
	}

	public async Listen(): globalThis.Promise<$.GoError> {
		let p: TServerSocket | $.VarRef<TServerSocket> | null = this;
		using __defer = new $.DisposableStack()
		const p$: TServerSocket = p == null ? $.pointerTarget<TServerSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TServerSocket>(p)
		await (p$ as TServerSocket).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as TServerSocket).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TServerSocket).IsListening() : TServerSocket.prototype.IsListening.call(p))) {
			return null
		}
		let [l, err] = await net.Listen((__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((p$ as TServerSocket).addr).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((p$ as TServerSocket).addr).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		if (err != null) {
			return err
		}
		;(p$ as TServerSocket).listener = l
		return null
	}

	public async Open(): globalThis.Promise<$.GoError> {
		let p: TServerSocket | $.VarRef<TServerSocket> | null = this;
		using __defer = new $.DisposableStack()
		const p$: TServerSocket = p == null ? $.pointerTarget<TServerSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TServerSocket>(p)
		await (p$ as TServerSocket).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as TServerSocket).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TServerSocket).IsListening() : TServerSocket.prototype.IsListening.call(p))) {
			return (__goscript_transport_exception.NewTTransportException(2, "Server socket already open") as $.GoError)
		}
		{
			let [l, err] = await net.Listen((__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((p$ as TServerSocket).addr).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((p$ as TServerSocket).addr).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			if (err != null) {
				return err
			} else {
				;(p$ as TServerSocket).listener = l
			}
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"thrift.TServerSocket",
		() => new TServerSocket(),
		() => [$.methodSignature("Accept", [], ["thrift.TTransport", "error"], true), $.methodSignature("Addr", [], ["net.Addr"], true), $.methodSignature("Close", [], ["error"], true), $.methodSignature("Interrupt", [], ["error"], true), $.methodSignature("IsListening", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Listen", [], ["error"], true), $.methodSignature("Open", [], ["error"], true)],
		TServerSocket,
		() => [/* @__PURE__ */ $.structField("listener", "net.Listener", [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("addr", "net.Addr", [1], 16, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("clientTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 32, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("mu", "sync.RWMutex", [3], 40, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("interrupted", /* @__PURE__ */ $.basicType("bool"), [4], 64, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export async function NewTServerSocket(listenAddr: string): globalThis.Promise<[TServerSocket | $.VarRef<TServerSocket> | null, $.GoError]> {
	return NewTServerSocketTimeout(listenAddr, 0n)
}

export async function NewTServerSocketTimeout(listenAddr: string, clientTimeout: time.Duration): globalThis.Promise<[TServerSocket | $.VarRef<TServerSocket> | null, $.GoError]> {
	let __goscriptTuple0: any = await net.ResolveTCPAddr("tcp", listenAddr)
	let addr: net.TCPAddr | $.VarRef<net.TCPAddr> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return [null, err]
	}
	return [new TServerSocket({addr: $.interfaceValue<net.Addr | null>(addr, "*net.TCPAddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")), clientTimeout: clientTimeout}), null]
}

export function NewTServerSocketFromAddrTimeout(addr: net.Addr | null, clientTimeout: time.Duration): TServerSocket | $.VarRef<TServerSocket> | null {
	return new TServerSocket({addr: addr, clientTimeout: clientTimeout})
}

var __goscriptAwait: any
