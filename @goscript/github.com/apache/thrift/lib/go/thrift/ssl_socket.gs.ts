// Generated file based on ssl_socket.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as net from "@goscript/net/index.js"

import * as time from "@goscript/time/index.js"

import type * as io from "@goscript/io/index.js"

import type * as __goscript__type from "./type.gs.ts"

import * as __goscript_configuration from "./configuration.gs.ts"

import type * as __goscript_exception from "./exception.gs.ts"

import * as __goscript_header_transport from "./header_transport.gs.ts"

import type * as __goscript_messagetype from "./messagetype.gs.ts"

import type * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_socket_conn from "./socket_conn.gs.ts"

import * as __goscript_socket_non_unix_conn from "./socket_non_unix_conn.gs.ts"

import type * as __goscript_transport from "./transport.gs.ts"

import * as __goscript_transport_exception from "./transport_exception.gs.ts"
import "@goscript/context/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/net/index.js"
import "@goscript/time/index.js"
import "./configuration.gs.ts"
import "./header_transport.gs.ts"
import "./socket_conn.gs.ts"
import "./socket_non_unix_conn.gs.ts"
import "./transport_exception.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TSSLSocket"])

export class TSSLSocket {
	public get conn(): __goscript_socket_conn.socketConn | $.VarRef<__goscript_socket_conn.socketConn> | null {
		return this._fields.conn
	}

	public set conn(value: __goscript_socket_conn.socketConn | $.VarRef<__goscript_socket_conn.socketConn> | null) {
		this._fields.conn = value
	}

	// hostPort contains host:port (e.g. "asdf.com:12345"). The field is
	// only valid if addr is nil.
	public get hostPort(): string {
		return this._fields.hostPort
	}

	public set hostPort(value: string) {
		this._fields.hostPort = value
	}

	// addr is nil when hostPort is not "", and is only used when the
	// TSSLSocket is constructed from a net.Addr.
	public get addr(): net.Addr | null {
		return this._fields.addr
	}

	public set addr(value: net.Addr | null) {
		this._fields.addr = value
	}

	public get cfg(): __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null {
		return this._fields.cfg
	}

	public set cfg(value: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null) {
		this._fields.cfg = value
	}

	public _fields: {
		conn: __goscript_socket_conn.socketConn | $.VarRef<__goscript_socket_conn.socketConn> | null
		hostPort: string
		addr: net.Addr | null
		cfg: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null
	}

	constructor(init?: Partial<{conn?: __goscript_socket_conn.socketConn | $.VarRef<__goscript_socket_conn.socketConn> | null, hostPort?: string, addr?: net.Addr | null, cfg?: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			conn: init?.conn ?? (null! as __goscript_socket_conn.socketConn | $.VarRef<__goscript_socket_conn.socketConn> | null),
			hostPort: init?.hostPort ?? ("" as string),
			addr: init?.addr ?? (null! as net.Addr | null),
			cfg: init?.cfg ?? (null! as __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TSSLSocket {
		return new TSSLSocket(this, true)
	}

	public __goscriptAssign(source: TSSLSocket): void {
		const target = this._fields
		const values = source._fields
		target.conn = values.conn
		target.hostPort = values.hostPort
		target.addr = $.assignFieldValue(target.addr, values.addr, "net.Addr")
		target.cfg = values.cfg
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const p: TSSLSocket | $.VarRef<TSSLSocket> | null = this;
		return __goscript_socket_conn.socketConn.prototype.Close.call($.pointerValue<TSSLSocket>(p).conn)
	}

	public Conn(): net.Conn | null {
		const p: TSSLSocket | $.VarRef<TSSLSocket> | null = this;
		return $.interfaceValue<net.Conn | null>($.pointerValue<TSSLSocket>(p).conn, "*thrift.socketConn", /* @__PURE__ */ $.pointerType("thrift.socketConn"))
	}

	public Flush(ctx: context.Context | null): $.GoError {
		const p: TSSLSocket | $.VarRef<TSSLSocket> | null = this;
		return null
	}

	public async Interrupt(): globalThis.Promise<$.GoError> {
		const p: TSSLSocket | $.VarRef<TSSLSocket> | null = this;
		const p$: TSSLSocket = p == null ? $.pointerTarget<TSSLSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSSLSocket>(p)
		if (!__goscript_socket_conn.socketConn.prototype.isValid.call((p$ as TSSLSocket).conn)) {
			return null
		}
		return __goscript_socket_conn.socketConn.prototype.Close.call((p$ as TSSLSocket).conn)
	}

	public async IsOpen(): globalThis.Promise<boolean> {
		const p: TSSLSocket | $.VarRef<TSSLSocket> | null = this;
		return __goscript_socket_conn.socketConn.prototype.IsOpen.call($.pointerValue<TSSLSocket>(p).conn)
	}

	public async Open(): globalThis.Promise<$.GoError> {
		let p: TSSLSocket | $.VarRef<TSSLSocket> | null = this;
		const p$: TSSLSocket = p == null ? $.pointerTarget<TSSLSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSSLSocket>(p)
		let err: $.GoError = null! as $.GoError
		// If we have a hostname, we need to pass the hostname to tls.Dial for
		// certificate hostname checks.
		if (!$.stringEqual((p$ as TSSLSocket).hostPort, "")) {
			{
				let __goscriptTuple0: any = __goscript_socket_conn.createSocketConnFromReturn(...(await (async () => { const __goscriptTupleArg0 = await tls.DialWithDialer((() => { const __goscriptLiteralField0 = __goscript_configuration.TConfiguration.prototype.GetConnectTimeout.call((p$ as TSSLSocket).cfg); return new net.Dialer({Timeout: __goscriptLiteralField0}) })(), "tcp", (p$ as TSSLSocket).hostPort, __goscript_configuration.TConfiguration.prototype.GetTLSConfig.call((p$ as TSSLSocket).cfg)); return [$.interfaceValue<net.Conn | null>(__goscriptTupleArg0[0], "*tls.Conn", /* @__PURE__ */ $.pointerType("tls.Conn")), __goscriptTupleArg0[1]] as [net.Conn | null, $.GoError] })()));
				;(p$ as TSSLSocket).conn = __goscriptTuple0[0]
				err = __goscriptTuple0[1]
				if (err != null) {
					return $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField1 = (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_transport_exception.tTransportException({typeId: 1, err: err, msg: __goscriptLiteralField1}) })()), "*thrift.tTransportException", /* @__PURE__ */ $.pointerType("thrift.tTransportException"))
				}
			}
		} else {
			if (__goscript_socket_conn.socketConn.prototype.isValid.call((p$ as TSSLSocket).conn)) {
				return (__goscript_transport_exception.NewTTransportException(2, "Socket already connected.") as $.GoError)
			}
			if ((p$ as TSSLSocket).addr == null) {
				return (__goscript_transport_exception.NewTTransportException(1, "Cannot open nil address.") as $.GoError)
			}
			if ($.stringLen((__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((p$ as TSSLSocket).addr).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) == 0) {
				return (__goscript_transport_exception.NewTTransportException(1, "Cannot open bad network name.") as $.GoError)
			}
			if ($.stringLen((__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((p$ as TSSLSocket).addr).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) == 0) {
				return (__goscript_transport_exception.NewTTransportException(1, "Cannot open bad address.") as $.GoError)
			}
			{
				let __goscriptTuple1: any = __goscript_socket_conn.createSocketConnFromReturn(...(await (async () => { const __goscriptTupleArg1 = await tls.DialWithDialer((() => { const __goscriptLiteralField2 = __goscript_configuration.TConfiguration.prototype.GetConnectTimeout.call((p$ as TSSLSocket).cfg); return new net.Dialer({Timeout: __goscriptLiteralField2}) })(), (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((p$ as TSSLSocket).addr).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((p$ as TSSLSocket).addr).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), __goscript_configuration.TConfiguration.prototype.GetTLSConfig.call((p$ as TSSLSocket).cfg)); return [$.interfaceValue<net.Conn | null>(__goscriptTupleArg1[0], "*tls.Conn", /* @__PURE__ */ $.pointerType("tls.Conn")), __goscriptTupleArg1[1]] as [net.Conn | null, $.GoError] })()));
				;(p$ as TSSLSocket).conn = __goscriptTuple1[0]
				err = __goscriptTuple1[1]
				if (err != null) {
					return $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField3 = (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_transport_exception.tTransportException({typeId: 1, err: err, msg: __goscriptLiteralField3}) })()), "*thrift.tTransportException", /* @__PURE__ */ $.pointerType("thrift.tTransportException"))
				}
			}
		}
		return null
	}

	public async Read(buf: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const p: TSSLSocket | $.VarRef<TSSLSocket> | null = this;
		const p$: TSSLSocket = p == null ? $.pointerTarget<TSSLSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSSLSocket>(p)
		if (!__goscript_socket_conn.socketConn.prototype.isValid.call((p$ as TSSLSocket).conn)) {
			return [0, (__goscript_transport_exception.NewTTransportException(1, "Connection not open") as $.GoError)]
		}
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSSLSocket).pushDeadline(true, false) : TSSLSocket.prototype.pushDeadline.call(p, true, false))
		// NOTE: Calling any of p.IsOpen, p.conn.read0, or p.conn.IsOpen between
		// p.pushDeadline and p.conn.Read could cause the deadline set inside
		// p.pushDeadline being reset, thus need to be avoided.
		let [n, err] = await __goscript_socket_conn.socketConn.prototype.Read.call((p$ as TSSLSocket).conn, buf)
		return [n, (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)]
	}

	public RemainingBytes(): bigint {
		const p: TSSLSocket | $.VarRef<TSSLSocket> | null = this;
		let num_bytes: bigint = 0n
		const maxSize: bigint = 18446744073709551615n
		return 18446744073709551615n
	}

	public SetConnTimeout(timeout: time.Duration): $.GoError {
		let p: TSSLSocket | $.VarRef<TSSLSocket> | null = this;
		const p$: TSSLSocket = p == null ? $.pointerTarget<TSSLSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSSLSocket>(p)
		if ((p$ as TSSLSocket).cfg == null) {
			;(p$ as TSSLSocket).cfg = new __goscript_configuration.TConfiguration()
		}
		$.pointerValue<__goscript_configuration.TConfiguration>((p$ as TSSLSocket).cfg).ConnectTimeout = timeout
		return null
	}

	public SetSocketTimeout(timeout: time.Duration): $.GoError {
		let p: TSSLSocket | $.VarRef<TSSLSocket> | null = this;
		const p$: TSSLSocket = p == null ? $.pointerTarget<TSSLSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSSLSocket>(p)
		if ((p$ as TSSLSocket).cfg == null) {
			;(p$ as TSSLSocket).cfg = new __goscript_configuration.TConfiguration()
		}
		$.pointerValue<__goscript_configuration.TConfiguration>((p$ as TSSLSocket).cfg).SocketTimeout = timeout
		return null
	}

	public SetTConfiguration(conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): void {
		let p: TSSLSocket | $.VarRef<TSSLSocket> | null = this;
		$.pointerValue<TSSLSocket>(p).cfg = conf
	}

	public async Write(buf: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const p: TSSLSocket | $.VarRef<TSSLSocket> | null = this;
		const p$: TSSLSocket = p == null ? $.pointerTarget<TSSLSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSSLSocket>(p)
		if (!__goscript_socket_conn.socketConn.prototype.isValid.call((p$ as TSSLSocket).conn)) {
			return [0, (__goscript_transport_exception.NewTTransportException(1, "Connection not open") as $.GoError)]
		}
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSSLSocket).pushDeadline(false, true) : TSSLSocket.prototype.pushDeadline.call(p, false, true))
		return $.pointerValue<Exclude<net.Conn, null>>($.pointerValue<__goscript_socket_conn.socketConn>((p$ as TSSLSocket).conn).Conn).Write(buf)
	}

	public async pushDeadline(read: boolean, write: boolean): globalThis.Promise<void> {
		const p: TSSLSocket | $.VarRef<TSSLSocket> | null = this;
		const p$: TSSLSocket = p == null ? $.pointerTarget<TSSLSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSSLSocket>(p)
		let t: time.Time = $.markAsStructValue(new time.Time())
		{
			let timeout = __goscript_configuration.TConfiguration.prototype.GetSocketTimeout.call((p$ as TSSLSocket).cfg)
			if (timeout > 0n) {
				t = $.assignStruct(t, $.markAsStructValue($.cloneStructValue(time.Now())).Add($.int64(timeout)))
			}
		}
		if (read && write) {
			await $.pointerValue<Exclude<net.Conn, null>>($.pointerValue<__goscript_socket_conn.socketConn>((p$ as TSSLSocket).conn).Conn).SetDeadline($.markAsStructValue($.cloneStructValue(t)))
		} else {
			if (read) {
				await $.pointerValue<Exclude<net.Conn, null>>($.pointerValue<__goscript_socket_conn.socketConn>((p$ as TSSLSocket).conn).Conn).SetReadDeadline($.markAsStructValue($.cloneStructValue(t)))
			} else {
				if (write) {
					await $.pointerValue<Exclude<net.Conn, null>>($.pointerValue<__goscript_socket_conn.socketConn>((p$ as TSSLSocket).conn).Conn).SetWriteDeadline($.markAsStructValue($.cloneStructValue(t)))
				}
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"thrift.TSSLSocket",
		() => new TSSLSocket(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Conn", [], ["net.Conn"], true), $.methodSignature("Flush", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("Interrupt", [], ["error"], true), $.methodSignature("IsOpen", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Open", [], ["error"], true), $.methodSignature("Read", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("RemainingBytes", [], [["num_bytes", /* @__PURE__ */ $.basicType("uint64")]], true), $.methodSignature("SetConnTimeout", [["timeout", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["error"], true), $.methodSignature("SetSocketTimeout", [["timeout", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["error"], true), $.methodSignature("SetTConfiguration", [["conf", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]], [], true), $.methodSignature("Write", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("pushDeadline", [["read", /* @__PURE__ */ $.basicType("bool")], ["write", /* @__PURE__ */ $.basicType("bool")]], [], true)],
		TSSLSocket,
		() => [/* @__PURE__ */ $.structField("conn", /* @__PURE__ */ $.pointerType("thrift.socketConn"), [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("hostPort", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("addr", "net.Addr", [2], 24, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration"), [3], 40, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export function NewTSSLSocketConf(hostPort: string, conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): TSSLSocket | $.VarRef<TSSLSocket> | null {
	{
		let cfg: tls.Config | $.VarRef<tls.Config> | null = (conf !== null && (conf as any).__isVarRef !== true && (conf as any).__goValue === undefined ? ((conf as any) as __goscript_configuration.TConfiguration).GetTLSConfig() : __goscript_configuration.TConfiguration.prototype.GetTLSConfig.call(conf))
		if ((cfg != null) && ($.pointerValue<tls.Config>(cfg).MinVersion == 0)) {
			$.pointerValue<tls.Config>(cfg).MinVersion = 769
		}
	}
	return new TSSLSocket({hostPort: hostPort, cfg: conf})
}

export function NewTSSLSocket(hostPort: string, cfg: tls.Config | $.VarRef<tls.Config> | null): [TSSLSocket | $.VarRef<TSSLSocket> | null, $.GoError] {
	return [NewTSSLSocketConf(hostPort, new __goscript_configuration.TConfiguration({TLSConfig: cfg, noPropagation: true})), null]
}

export function NewTSSLSocketTimeout(hostPort: string, cfg: tls.Config | $.VarRef<tls.Config> | null, connectTimeout: time.Duration, socketTimeout: time.Duration): [TSSLSocket | $.VarRef<TSSLSocket> | null, $.GoError] {
	return [NewTSSLSocketConf(hostPort, new __goscript_configuration.TConfiguration({ConnectTimeout: connectTimeout, SocketTimeout: socketTimeout, TLSConfig: cfg, noPropagation: true})), null]
}

export function NewTSSLSocketFromAddrConf(addr: net.Addr | null, conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): TSSLSocket | $.VarRef<TSSLSocket> | null {
	return new TSSLSocket({addr: addr, cfg: conf})
}

export function NewTSSLSocketFromAddrTimeout(addr: net.Addr | null, cfg: tls.Config | $.VarRef<tls.Config> | null, connectTimeout: time.Duration, socketTimeout: time.Duration): TSSLSocket | $.VarRef<TSSLSocket> | null {
	return NewTSSLSocketFromAddrConf(addr, new __goscript_configuration.TConfiguration({ConnectTimeout: connectTimeout, SocketTimeout: socketTimeout, TLSConfig: cfg, noPropagation: true}))
}

export async function NewTSSLSocketFromConnConf(conn: net.Conn | null, conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<TSSLSocket | $.VarRef<TSSLSocket> | null> {
	return (await (async () => { const __goscriptLiteralField4 = __goscript_socket_conn.wrapSocketConn(conn); const __goscriptLiteralField5 = (__goscriptAwait = (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? (conn as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(conn)).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new TSSLSocket({conn: __goscriptLiteralField4, addr: __goscriptLiteralField5, cfg: conf}) })())
}

export async function NewTSSLSocketFromConnTimeout(conn: net.Conn | null, cfg: tls.Config | $.VarRef<tls.Config> | null, socketTimeout: time.Duration): globalThis.Promise<TSSLSocket | $.VarRef<TSSLSocket> | null> {
	return NewTSSLSocketFromConnConf(conn, new __goscript_configuration.TConfiguration({SocketTimeout: socketTimeout, TLSConfig: cfg, noPropagation: true}))
}

var __goscriptAwait: any
