// Generated file based on socket.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as net from "@goscript/net/index.js"

import * as time from "@goscript/time/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

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
import "@goscript/net/index.js"
import "@goscript/time/index.js"
import "@goscript/crypto/tls/index.js"
import "./configuration.gs.ts"
import "./header_transport.gs.ts"
import "./socket_conn.gs.ts"
import "./socket_non_unix_conn.gs.ts"
import "./transport_exception.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TSocket", "thrift.tcpAddr"])

export type tcpAddr = string

$.registerNamedValueType(
	"thrift.tcpAddr",
	{Network: (receiver: any, ...args: any[]) => (tcpAddr_Network as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (tcpAddr_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Network", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*thrift.tcpAddr",
	{Network: (receiver: any, ...args: any[]) => (tcpAddr_Network as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (tcpAddr_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Network", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class TSocket {
	public get conn(): __goscript_socket_conn.socketConn | $.VarRef<__goscript_socket_conn.socketConn> | null {
		return this._fields.conn
	}

	public set conn(value: __goscript_socket_conn.socketConn | $.VarRef<__goscript_socket_conn.socketConn> | null) {
		this._fields.conn = value
	}

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
		addr: net.Addr | null
		cfg: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null
	}

	constructor(init?: Partial<{conn?: __goscript_socket_conn.socketConn | $.VarRef<__goscript_socket_conn.socketConn> | null, addr?: net.Addr | null, cfg?: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			conn: init?.conn ?? (null! as __goscript_socket_conn.socketConn | $.VarRef<__goscript_socket_conn.socketConn> | null),
			addr: init?.addr ?? (null! as net.Addr | null),
			cfg: init?.cfg ?? (null! as __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TSocket {
		return new TSocket(this, true)
	}

	public __goscriptAssign(source: TSocket): void {
		const target = this._fields
		const values = source._fields
		target.conn = values.conn
		target.addr = $.assignFieldValue(target.addr, values.addr, "net.Addr")
		target.cfg = values.cfg
	}

	public Addr(): net.Addr | null {
		const p: TSocket | $.VarRef<TSocket> | null = this;
		return $.pointerValue<TSocket>(p).addr
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const p: TSocket | $.VarRef<TSocket> | null = this;
		return __goscript_socket_conn.socketConn.prototype.Close.call($.pointerValue<TSocket>(p).conn)
	}

	public Conn(): net.Conn | null {
		const p: TSocket | $.VarRef<TSocket> | null = this;
		return $.interfaceValue<net.Conn | null>($.pointerValue<TSocket>(p).conn, "*thrift.socketConn", /* @__PURE__ */ $.pointerType("thrift.socketConn"))
	}

	public Flush(ctx: context.Context | null): $.GoError {
		const p: TSocket | $.VarRef<TSocket> | null = this;
		return null
	}

	public async Interrupt(): globalThis.Promise<$.GoError> {
		const p: TSocket | $.VarRef<TSocket> | null = this;
		const p$: TSocket = p == null ? $.pointerTarget<TSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSocket>(p)
		if (!__goscript_socket_conn.socketConn.prototype.isValid.call((p$ as TSocket).conn)) {
			return null
		}
		return __goscript_socket_conn.socketConn.prototype.Close.call((p$ as TSocket).conn)
	}

	public async IsOpen(): globalThis.Promise<boolean> {
		const p: TSocket | $.VarRef<TSocket> | null = this;
		return __goscript_socket_conn.socketConn.prototype.IsOpen.call($.pointerValue<TSocket>(p).conn)
	}

	public async Open(): globalThis.Promise<$.GoError> {
		let p: TSocket | $.VarRef<TSocket> | null = this;
		const p$: TSocket = p == null ? $.pointerTarget<TSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSocket>(p)
		if (__goscript_socket_conn.socketConn.prototype.isValid.call((p$ as TSocket).conn)) {
			return (__goscript_transport_exception.NewTTransportException(2, "Socket already connected.") as $.GoError)
		}
		if ((p$ as TSocket).addr == null) {
			return (__goscript_transport_exception.NewTTransportException(1, "Cannot open nil address.") as $.GoError)
		}
		if ($.stringLen((__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((p$ as TSocket).addr).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) == 0) {
			return (__goscript_transport_exception.NewTTransportException(1, "Cannot open bad network name.") as $.GoError)
		}
		if ($.stringLen((__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((p$ as TSocket).addr).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) == 0) {
			return (__goscript_transport_exception.NewTTransportException(1, "Cannot open bad address.") as $.GoError)
		}
		let err: $.GoError = null! as $.GoError
		{
			let __goscriptTuple0: any = __goscript_socket_conn.createSocketConnFromReturn(...((await net.DialTimeout((__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((p$ as TSocket).addr).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((p$ as TSocket).addr).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), __goscript_configuration.TConfiguration.prototype.GetConnectTimeout.call((p$ as TSocket).cfg))) as [net.Conn | null, $.GoError]));
			;(p$ as TSocket).conn = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
			if (err != null) {
				return $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_transport_exception.tTransportException({typeId: 1, err: err, msg: __goscriptLiteralField0}) })()), "*thrift.tTransportException", /* @__PURE__ */ $.pointerType("thrift.tTransportException"))
			}
		}
		;(p$ as TSocket).addr = await $.pointerValue<Exclude<net.Conn, null>>($.pointerValue<__goscript_socket_conn.socketConn>((p$ as TSocket).conn).Conn).RemoteAddr()
		return null
	}

	public async Read(buf: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const p: TSocket | $.VarRef<TSocket> | null = this;
		const p$: TSocket = p == null ? $.pointerTarget<TSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSocket>(p)
		if (!__goscript_socket_conn.socketConn.prototype.isValid.call((p$ as TSocket).conn)) {
			return [0, (__goscript_transport_exception.NewTTransportException(1, "Connection not open") as $.GoError)]
		}
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSocket).pushDeadline(true, false) : TSocket.prototype.pushDeadline.call(p, true, false))
		// NOTE: Calling any of p.IsOpen, p.conn.read0, or p.conn.IsOpen between
		// p.pushDeadline and p.conn.Read could cause the deadline set inside
		// p.pushDeadline being reset, thus need to be avoided.
		let [n, err] = await __goscript_socket_conn.socketConn.prototype.Read.call((p$ as TSocket).conn, buf)
		return [n, (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)]
	}

	public RemainingBytes(): bigint {
		const p: TSocket | $.VarRef<TSocket> | null = this;
		let num_bytes: bigint = 0n
		const maxSize: bigint = 18446744073709551615n
		return 18446744073709551615n
	}

	public SetConnTimeout(timeout: time.Duration): $.GoError {
		let p: TSocket | $.VarRef<TSocket> | null = this;
		const p$: TSocket = p == null ? $.pointerTarget<TSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSocket>(p)
		if ((p$ as TSocket).cfg == null) {
			;(p$ as TSocket).cfg = new __goscript_configuration.TConfiguration({noPropagation: true})
		}
		$.pointerValue<__goscript_configuration.TConfiguration>((p$ as TSocket).cfg).ConnectTimeout = timeout
		return null
	}

	public SetSocketTimeout(timeout: time.Duration): $.GoError {
		let p: TSocket | $.VarRef<TSocket> | null = this;
		const p$: TSocket = p == null ? $.pointerTarget<TSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSocket>(p)
		if ((p$ as TSocket).cfg == null) {
			;(p$ as TSocket).cfg = new __goscript_configuration.TConfiguration({noPropagation: true})
		}
		$.pointerValue<__goscript_configuration.TConfiguration>((p$ as TSocket).cfg).SocketTimeout = timeout
		return null
	}

	public SetTConfiguration(conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): void {
		let p: TSocket | $.VarRef<TSocket> | null = this;
		$.pointerValue<TSocket>(p).cfg = conf
	}

	public async Write(buf: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const p: TSocket | $.VarRef<TSocket> | null = this;
		const p$: TSocket = p == null ? $.pointerTarget<TSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSocket>(p)
		if (!__goscript_socket_conn.socketConn.prototype.isValid.call((p$ as TSocket).conn)) {
			return [0, (__goscript_transport_exception.NewTTransportException(1, "Connection not open") as $.GoError)]
		}
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSocket).pushDeadline(false, true) : TSocket.prototype.pushDeadline.call(p, false, true))
		return $.pointerValue<Exclude<net.Conn, null>>($.pointerValue<__goscript_socket_conn.socketConn>((p$ as TSocket).conn).Conn).Write(buf)
	}

	public async pushDeadline(read: boolean, write: boolean): globalThis.Promise<void> {
		const p: TSocket | $.VarRef<TSocket> | null = this;
		const p$: TSocket = p == null ? $.pointerTarget<TSocket>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSocket>(p)
		let t: time.Time = $.markAsStructValue(new time.Time())
		{
			let timeout = __goscript_configuration.TConfiguration.prototype.GetSocketTimeout.call((p$ as TSocket).cfg)
			if (timeout > 0n) {
				t = $.assignStruct(t, $.markAsStructValue($.cloneStructValue(time.Now())).Add($.int64(timeout)))
			}
		}
		if (read && write) {
			await $.pointerValue<Exclude<net.Conn, null>>($.pointerValue<__goscript_socket_conn.socketConn>((p$ as TSocket).conn).Conn).SetDeadline($.markAsStructValue($.cloneStructValue(t)))
		} else {
			if (read) {
				await $.pointerValue<Exclude<net.Conn, null>>($.pointerValue<__goscript_socket_conn.socketConn>((p$ as TSocket).conn).Conn).SetReadDeadline($.markAsStructValue($.cloneStructValue(t)))
			} else {
				if (write) {
					await $.pointerValue<Exclude<net.Conn, null>>($.pointerValue<__goscript_socket_conn.socketConn>((p$ as TSocket).conn).Conn).SetWriteDeadline($.markAsStructValue($.cloneStructValue(t)))
				}
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"thrift.TSocket",
		() => new TSocket(),
		() => [$.methodSignature("Addr", [], ["net.Addr"], true), $.methodSignature("Close", [], ["error"], true), $.methodSignature("Conn", [], ["net.Conn"], true), $.methodSignature("Flush", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("Interrupt", [], ["error"], true), $.methodSignature("IsOpen", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Open", [], ["error"], true), $.methodSignature("Read", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("RemainingBytes", [], [["num_bytes", /* @__PURE__ */ $.basicType("uint64")]], true), $.methodSignature("SetConnTimeout", [["timeout", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["error"], true), $.methodSignature("SetSocketTimeout", [["timeout", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["error"], true), $.methodSignature("SetTConfiguration", [["conf", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]], [], true), $.methodSignature("Write", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("pushDeadline", [["read", /* @__PURE__ */ $.basicType("bool")], ["write", /* @__PURE__ */ $.basicType("bool")]], [], true)],
		TSocket,
		() => [/* @__PURE__ */ $.structField("conn", /* @__PURE__ */ $.pointerType("thrift.socketConn"), [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("addr", "net.Addr", [1], 8, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration"), [2], 24, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export function tcpAddr_Network(ta: tcpAddr): string {
	return "tcp"
}

export function tcpAddr_String(ta: tcpAddr): string {
	return ta
}

export function NewTSocket(hostPort: string): [TSocket | $.VarRef<TSocket> | null, $.GoError] {
	return [NewTSocketConf(hostPort, new __goscript_configuration.TConfiguration({noPropagation: true})), null]
}

export function NewTSocketConf(hostPort: string, conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): TSocket | $.VarRef<TSocket> | null {
	return NewTSocketFromAddrConf($.namedValueInterfaceValue<net.Addr | null>(hostPort, "thrift.tcpAddr", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), conf)
}

export function NewTSocketTimeout(hostPort: string, connTimeout: time.Duration, soTimeout: time.Duration): [TSocket | $.VarRef<TSocket> | null, $.GoError] {
	return [NewTSocketConf(hostPort, new __goscript_configuration.TConfiguration({ConnectTimeout: connTimeout, SocketTimeout: soTimeout, noPropagation: true})), null]
}

export function NewTSocketFromAddrConf(addr: net.Addr | null, conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): TSocket | $.VarRef<TSocket> | null {
	return new TSocket({addr: addr, cfg: conf})
}

export function NewTSocketFromAddrTimeout(addr: net.Addr | null, connTimeout: time.Duration, soTimeout: time.Duration): TSocket | $.VarRef<TSocket> | null {
	return NewTSocketFromAddrConf(addr, new __goscript_configuration.TConfiguration({ConnectTimeout: connTimeout, SocketTimeout: soTimeout, noPropagation: true}))
}

export async function NewTSocketFromConnConf(conn: net.Conn | null, conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<TSocket | $.VarRef<TSocket> | null> {
	return (await (async () => { const __goscriptLiteralField1 = __goscript_socket_conn.wrapSocketConn(conn); const __goscriptLiteralField2 = (__goscriptAwait = (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? (conn as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(conn)).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new TSocket({conn: __goscriptLiteralField1, addr: __goscriptLiteralField2, cfg: conf}) })())
}

export async function NewTSocketFromConnTimeout(conn: net.Conn | null, socketTimeout: time.Duration): globalThis.Promise<TSocket | $.VarRef<TSocket> | null> {
	return NewTSocketFromConnConf(conn, new __goscript_configuration.TConfiguration({SocketTimeout: socketTimeout, noPropagation: true}))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Network: (receiver: any, ...args: any[]) => (tcpAddr_Network as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (tcpAddr_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "thrift.tcpAddr"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Network", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
