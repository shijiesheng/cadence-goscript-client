// Generated file based on rawconn.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as net from "@goscript/net/index.js"

import * as os from "@goscript/os/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as unsafe from "@goscript/unsafe/index.js"

import type * as __goscript_norace from "./norace.gs.ts"

import * as __goscript_rawconn_nommsg from "./rawconn_nommsg.gs.ts"

import * as __goscript_rawconn_nomsg from "./rawconn_nomsg.gs.ts"

import * as __goscript_socket from "./socket.gs.ts"

import * as __goscript_sys_stub from "./sys_stub.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/net/index.js"
import "@goscript/os/index.js"
import "@goscript/syscall/index.js"
import "@goscript/runtime/index.js"
import "@goscript/unsafe/index.js"
import "./rawconn_nommsg.gs.ts"
import "./rawconn_nomsg.gs.ts"
import "./socket.gs.ts"
import "./sys_stub.gs.ts"

$.registerTypePackagePath("golang.org/x/net/internal/socket", ["socket.Conn", "socket.tcpConn", "socket.udpConn", "socket.ipConn"])

export type tcpConn = {
	SetLinger(_p0: number): $.GoError | globalThis.Promise<$.GoError>
	SyscallConn(): [syscall.RawConn | null, $.GoError]
}

$.registerInterfaceType(
	"socket.tcpConn",
	null,
	[$.methodSignature("SetLinger", [/* @__PURE__ */ $.basicType("int")], ["error"]), $.methodSignature("SyscallConn", [], ["syscall.RawConn", "error"])]
);

export type udpConn = {
	ReadMsgUDP(b: $.Slice<number>, oob: $.Slice<number>): [number, number, number, net.UDPAddr | $.VarRef<net.UDPAddr> | null, $.GoError] | globalThis.Promise<[number, number, number, net.UDPAddr | $.VarRef<net.UDPAddr> | null, $.GoError]>
	SyscallConn(): [syscall.RawConn | null, $.GoError]
}

$.registerInterfaceType(
	"socket.udpConn",
	null,
	[$.methodSignature("ReadMsgUDP", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["flags", /* @__PURE__ */ $.basicType("int")], ["addr", /* @__PURE__ */ $.pointerType("net.UDPAddr")], ["err", "error"]]), $.methodSignature("SyscallConn", [], ["syscall.RawConn", "error"])]
);

export type ipConn = {
	ReadMsgIP(b: $.Slice<number>, oob: $.Slice<number>): [number, number, number, net.IPAddr | $.VarRef<net.IPAddr> | null, $.GoError] | globalThis.Promise<[number, number, number, net.IPAddr | $.VarRef<net.IPAddr> | null, $.GoError]>
	SyscallConn(): [syscall.RawConn | null, $.GoError]
}

$.registerInterfaceType(
	"socket.ipConn",
	null,
	[$.methodSignature("ReadMsgIP", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["flags", /* @__PURE__ */ $.basicType("int")], ["addr", /* @__PURE__ */ $.pointerType("net.IPAddr")], ["err", "error"]]), $.methodSignature("SyscallConn", [], ["syscall.RawConn", "error"])]
);

export class Conn {
	public get network(): string {
		return this._fields.network
	}

	public set network(value: string) {
		this._fields.network = value
	}

	public get c(): syscall.RawConn | null {
		return this._fields.c
	}

	public set c(value: syscall.RawConn | null) {
		this._fields.c = value
	}

	public _fields: {
		network: string
		c: syscall.RawConn | null
	}

	constructor(init?: Partial<{network?: string, c?: syscall.RawConn | null}>, __goscriptValue?: boolean) {
		this._fields = {
			network: init?.network ?? ("" as string),
			c: init?.c ?? (null! as syscall.RawConn | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Conn {
		return new Conn(this, true)
	}

	public __goscriptAssign(source: Conn): void {
		const target = this._fields
		const values = source._fields
		target.network = values.network
		target.c = $.assignFieldValue(target.c, values.c, "syscall.RawConn")
	}

	public RecvMsg(m: __goscript_socket.Message | $.VarRef<__goscript_socket.Message> | null, flags: number): $.GoError {
		const c: Conn | $.VarRef<Conn> | null = this;
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).recvMsg(m, flags) : Conn.prototype.recvMsg.call(c, m, flags))
	}

	public RecvMsgs(ms: $.Slice<__goscript_socket.Message>, flags: number): [number, $.GoError] {
		const c: Conn | $.VarRef<Conn> | null = this;
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).recvMsgs(ms, flags) : Conn.prototype.recvMsgs.call(c, ms, flags))
	}

	public SendMsg(m: __goscript_socket.Message | $.VarRef<__goscript_socket.Message> | null, flags: number): $.GoError {
		const c: Conn | $.VarRef<Conn> | null = this;
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendMsg(m, flags) : Conn.prototype.sendMsg.call(c, m, flags))
	}

	public SendMsgs(ms: $.Slice<__goscript_socket.Message>, flags: number): [number, $.GoError] {
		const c: Conn | $.VarRef<Conn> | null = this;
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Conn).sendMsgs(ms, flags) : Conn.prototype.sendMsgs.call(c, ms, flags))
	}

	public recvMsg(m: __goscript_socket.Message | $.VarRef<__goscript_socket.Message> | null, flags: number): $.GoError {
		const c: Conn | $.VarRef<Conn> | null = this;
		return __goscript_socket.errNotImplemented
	}

	public recvMsgs(ms: $.Slice<__goscript_socket.Message>, flags: number): [number, $.GoError] {
		const c: Conn | $.VarRef<Conn> | null = this;
		return [0, __goscript_socket.errNotImplemented]
	}

	public sendMsg(m: __goscript_socket.Message | $.VarRef<__goscript_socket.Message> | null, flags: number): $.GoError {
		const c: Conn | $.VarRef<Conn> | null = this;
		return __goscript_socket.errNotImplemented
	}

	public sendMsgs(ms: $.Slice<__goscript_socket.Message>, flags: number): [number, $.GoError] {
		const c: Conn | $.VarRef<Conn> | null = this;
		return [0, __goscript_socket.errNotImplemented]
	}

	static __typeInfo = $.registerStructType(
		"socket.Conn",
		() => new Conn(),
		() => [$.methodSignature("RecvMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("RecvMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("SendMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SendMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("recvMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("recvMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("sendMsg", [["m", /* @__PURE__ */ $.pointerType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("sendMsgs", [["ms", /* @__PURE__ */ $.sliceType("socket.Message")], ["flags", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		Conn,
		() => [/* @__PURE__ */ $.structField("network", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "golang.org/x/net/internal/socket" }), /* @__PURE__ */ $.structField("c", "syscall.RawConn", [1], 16, false, { pkgPath: "golang.org/x/net/internal/socket" })]
	)
}

export async function NewConn(c: net.Conn | null): globalThis.Promise<[Conn | $.VarRef<Conn> | null, $.GoError]> {
	let err: $.GoError = null! as $.GoError
	let cc: $.VarRef<Conn> = $.varRef(new Conn(undefined, true))
	{
		const __goscriptTypeSwitchValue = c
		switch (true) {
			case $.typeAssert<tcpConn | null>(__goscriptTypeSwitchValue, "socket.tcpConn").ok:
				{
					let c: tcpConn | null = $.typeAssert<tcpConn | null>(__goscriptTypeSwitchValue, "socket.tcpConn").value
					cc.value.network = "tcp"
					let __goscriptTuple0: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<tcpConn, null>) : $.pointerValue<Exclude<tcpConn, null>>(c)).SyscallConn()
					cc.value.c = __goscriptTuple0[0]
					err = __goscriptTuple0[1]
				}
				break
			case $.typeAssert<udpConn | null>(__goscriptTypeSwitchValue, "socket.udpConn").ok:
				{
					let c: udpConn | null = $.typeAssert<udpConn | null>(__goscriptTypeSwitchValue, "socket.udpConn").value
					cc.value.network = "udp"
					let __goscriptTuple1: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<udpConn, null>) : $.pointerValue<Exclude<udpConn, null>>(c)).SyscallConn()
					cc.value.c = __goscriptTuple1[0]
					err = __goscriptTuple1[1]
				}
				break
			case $.typeAssert<ipConn | null>(__goscriptTypeSwitchValue, "socket.ipConn").ok:
				{
					let c: ipConn | null = $.typeAssert<ipConn | null>(__goscriptTypeSwitchValue, "socket.ipConn").value
					cc.value.network = "ip"
					let __goscriptTuple2: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<ipConn, null>) : $.pointerValue<Exclude<ipConn, null>>(c)).SyscallConn()
					cc.value.c = __goscriptTuple2[0]
					err = __goscriptTuple2[1]
				}
				break
			default:
				{
					let c: any = __goscriptTypeSwitchValue
					return [null, errors.New("unknown connection type")]
				}
				break
		}
	}
	if (err != null) {
		return [null, err]
	}
	return [cc, null]
}
