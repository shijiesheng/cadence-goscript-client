// Generated file based on unixsock.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as io from "@goscript/io/index.js"

import * as os from "@goscript/os/index.js"

import * as sync from "@goscript/sync/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as time from "@goscript/time/index.js"

import * as errors from "@goscript/errors/index.js"

import * as poll from "@goscript/internal/poll/index.js"

import * as singleflight from "@goscript/internal/singleflight/index.js"

import type * as netip from "@goscript/net/netip/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import type * as dnsmessage from "@goscript/vendor/golang.org/x/net/dns/dnsmessage/index.js"

import * as __goscript__interface from "./interface.gs.ts"

import * as __goscript_dial from "./dial.gs.ts"

import type * as __goscript_dnsclient from "./dnsclient.gs.ts"

import * as __goscript_dnsclient_unix from "./dnsclient_unix.gs.ts"

import type * as __goscript_dnsconfig from "./dnsconfig.gs.ts"

import * as __goscript_fd_fake from "./fd_fake.gs.ts"

import * as __goscript_fd_js from "./fd_js.gs.ts"

import * as __goscript_ip from "./ip.gs.ts"

import type * as __goscript_iprawsock from "./iprawsock.gs.ts"

import * as __goscript_iprawsock_posix from "./iprawsock_posix.gs.ts"

import * as __goscript_ipsock from "./ipsock.gs.ts"

import * as __goscript_lookup from "./lookup.gs.ts"

import * as __goscript_lookup_unix from "./lookup_unix.gs.ts"

import * as __goscript_mac from "./mac.gs.ts"

import * as __goscript_mptcpsock_stub from "./mptcpsock_stub.gs.ts"

import * as __goscript_net from "./net.gs.ts"

import * as __goscript_net_fake from "./net_fake.gs.ts"

import * as __goscript_rawconn from "./rawconn.gs.ts"

import * as __goscript_sockaddr_posix from "./sockaddr_posix.gs.ts"

import * as __goscript_tcpsock from "./tcpsock.gs.ts"

import * as __goscript_tcpsock_posix from "./tcpsock_posix.gs.ts"

import type * as __goscript_tcpsock_unix from "./tcpsock_unix.gs.ts"

import type * as __goscript_udpsock from "./udpsock.gs.ts"

import * as __goscript_udpsock_posix from "./udpsock_posix.gs.ts"

import * as __goscript_unixsock_posix from "./unixsock_posix.gs.ts"

import * as __goscript_unixsock_readmsg_other from "./unixsock_readmsg_other.gs.ts"
import "@goscript/context/index.js"
import "@goscript/io/index.js"
import "@goscript/os/index.js"
import "@goscript/sync/index.js"
import "@goscript/syscall/index.js"
import "@goscript/time/index.js"
import "@goscript/errors/index.js"
import "@goscript/internal/poll/index.js"
import "@goscript/internal/singleflight/index.js"
import "@goscript/sync/atomic/index.js"
import "./interface.gs.ts"
import "./dial.gs.ts"
import "./dnsclient_unix.gs.ts"
import "./fd_fake.gs.ts"
import "./fd_js.gs.ts"
import "./ip.gs.ts"
import "./iprawsock_posix.gs.ts"
import "./ipsock.gs.ts"
import "./lookup.gs.ts"
import "./lookup_unix.gs.ts"
import "./mac.gs.ts"
import "./mptcpsock_stub.gs.ts"
import "./net.gs.ts"
import "./net_fake.gs.ts"
import "./rawconn.gs.ts"
import "./sockaddr_posix.gs.ts"
import "./tcpsock.gs.ts"
import "./tcpsock_posix.gs.ts"
import "./udpsock_posix.gs.ts"
import "./unixsock_posix.gs.ts"
import "./unixsock_readmsg_other.gs.ts"

export class UnixAddr {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Net(): string {
		return this._fields.Net
	}

	public set Net(value: string) {
		this._fields.Net = value
	}

	public _fields: {
		Name: string
		Net: string
	}

	constructor(init?: Partial<{Name?: string, Net?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Net: init?.Net ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UnixAddr {
		return new UnixAddr(this, true)
	}

	public __goscriptAssign(source: UnixAddr): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Net = values.Net
	}

	public Network(): string {
		const a: UnixAddr | $.VarRef<UnixAddr> | null = this;
		return $.pointerValue<UnixAddr>(a).Net
	}

	public String(): string {
		const a: UnixAddr | $.VarRef<UnixAddr> | null = this;
		if (a == null) {
			return "<nil>"
		}
		return $.pointerValue<UnixAddr>(a).Name
	}

	public family(): number {
		const a: UnixAddr | $.VarRef<UnixAddr> | null = this;
		return 1
	}

	public isWildcard(): boolean {
		const a: UnixAddr | $.VarRef<UnixAddr> | null = this;
		return (a == null) || ($.stringEqual($.pointerValue<UnixAddr>(a).Name, ""))
	}

	public opAddr(): __goscript_net.Addr | null {
		const a: UnixAddr | $.VarRef<UnixAddr> | null = this;
		if (a == null) {
			return null
		}
		return $.interfaceValue<__goscript_net.Addr | null>(a, "*net.UnixAddr", /* @__PURE__ */ $.pointerType("net.UnixAddr"))
	}

	public sockaddr(family: number): [syscall.Sockaddr | null, $.GoError] {
		const a: UnixAddr | $.VarRef<UnixAddr> | null = this;
		if (a == null) {
			return [null, null]
		}
		return [$.interfaceValue<syscall.Sockaddr | null>(new syscall.SockaddrUnix({Name: $.pointerValue<UnixAddr>(a).Name}), "*syscall.SockaddrUnix", /* @__PURE__ */ $.pointerType("syscall.SockaddrUnix")), null]
	}

	public toLocal(net: string): __goscript_sockaddr_posix.sockaddr | null {
		const a: UnixAddr | $.VarRef<UnixAddr> | null = this;
		return $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(a, "*net.UnixAddr", /* @__PURE__ */ $.pointerType("net.UnixAddr"))
	}

	static __typeInfo = $.registerStructType(
		"net.UnixAddr",
		() => new UnixAddr(),
		() => [$.methodSignature("Network", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("family", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("isWildcard", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("opAddr", [], ["net.Addr"], true), $.methodSignature("sockaddr", [["family", /* @__PURE__ */ $.basicType("int")]], ["syscall.Sockaddr", "error"], true), $.methodSignature("toLocal", [["net", /* @__PURE__ */ $.basicType("string")]], ["net.sockaddr"], true)],
		UnixAddr,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Net", /* @__PURE__ */ $.basicType("string"), [1], 16, true)]
	)
}

export class UnixConn {
	public get conn(): __goscript_net.conn {
		return this._fields.conn
	}

	public set conn(value: __goscript_net.conn) {
		this._fields.conn = value
	}

	public _fields: {
		conn: __goscript_net.conn
	}

	constructor(init?: Partial<{conn?: __goscript_net.conn}>, __goscriptValue?: boolean) {
		this._fields = {
			conn: init?.conn ? init.conn.clone() : new __goscript_net.conn(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UnixConn {
		return new UnixConn(this, true)
	}

	public __goscriptAssign(source: UnixConn): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.conn, values.conn)
	}

	public async CloseRead(): globalThis.Promise<$.GoError> {
		const c: UnixConn | $.VarRef<UnixConn> | null = this;
		const c$: UnixConn = c == null ? $.pointerTarget<UnixConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UnixConn>(c)
		if (!(c$ as UnixConn).conn.ok()) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		{
			let err = await __goscript_fd_fake.netFD.prototype.closeRead.call((c$ as UnixConn).conn.fd)
			if (err != null) {
				return $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "close", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
			}
		}
		return null
	}

	public async CloseWrite(): globalThis.Promise<$.GoError> {
		const c: UnixConn | $.VarRef<UnixConn> | null = this;
		const c$: UnixConn = c == null ? $.pointerTarget<UnixConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UnixConn>(c)
		if (!(c$ as UnixConn).conn.ok()) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		{
			let err = await __goscript_fd_fake.netFD.prototype.closeWrite.call((c$ as UnixConn).conn.fd)
			if (err != null) {
				return $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "close", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
			}
		}
		return null
	}

	public async ReadFrom(b: $.Slice<number>): globalThis.Promise<[number, __goscript_net.Addr | null, $.GoError]> {
		const c: UnixConn | $.VarRef<UnixConn> | null = this;
		const c$: UnixConn = c == null ? $.pointerTarget<UnixConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UnixConn>(c)
		if (!(c$ as UnixConn).conn.ok()) {
			return [0, null, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple0: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as UnixConn).readFrom(b) : UnixConn.prototype.readFrom.call(c, b))
		let n = __goscriptTuple0[0]
		let addr: UnixAddr | $.VarRef<UnixAddr> | null = __goscriptTuple0[1]
		let err = __goscriptTuple0[2]
		if ((err != null) && (!$.comparableEqual(err, io.EOF))) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "read", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		if (addr == null) {
			return [n, null, err]
		}
		return [n, $.interfaceValue<__goscript_net.Addr | null>(addr, "*net.UnixAddr", /* @__PURE__ */ $.pointerType("net.UnixAddr")), err]
	}

	public async ReadFromUnix(b: $.Slice<number>): globalThis.Promise<[number, UnixAddr | $.VarRef<UnixAddr> | null, $.GoError]> {
		const c: UnixConn | $.VarRef<UnixConn> | null = this;
		const c$: UnixConn = c == null ? $.pointerTarget<UnixConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UnixConn>(c)
		if (!(c$ as UnixConn).conn.ok()) {
			return [0, null, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple1: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as UnixConn).readFrom(b) : UnixConn.prototype.readFrom.call(c, b))
		let n = __goscriptTuple1[0]
		let addr: UnixAddr | $.VarRef<UnixAddr> | null = __goscriptTuple1[1]
		let err = __goscriptTuple1[2]
		if ((err != null) && (!$.comparableEqual(err, io.EOF))) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "read", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, addr, err]
	}

	public async ReadMsgUnix(b: $.Slice<number>, oob: $.Slice<number>): globalThis.Promise<[number, number, number, UnixAddr | $.VarRef<UnixAddr> | null, $.GoError]> {
		const c: UnixConn | $.VarRef<UnixConn> | null = this;
		let n: number = 0
		let oobn: number = 0
		let flags: number = 0
		let addr: UnixAddr | $.VarRef<UnixAddr> | null = null! as UnixAddr | $.VarRef<UnixAddr> | null
		let err: $.GoError = null! as $.GoError
		const c$: UnixConn = c == null ? $.pointerTarget<UnixConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UnixConn>(c)
		if (!(c$ as UnixConn).conn.ok()) {
			return [0, 0, 0, null, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple2: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as UnixConn).readMsg(b, oob) : UnixConn.prototype.readMsg.call(c, b, oob))
		n = __goscriptTuple2[0]
		oobn = __goscriptTuple2[1]
		flags = __goscriptTuple2[2]
		addr = __goscriptTuple2[3]
		err = __goscriptTuple2[4]
		if ((err != null) && (!$.comparableEqual(err, io.EOF))) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "read", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, oobn, flags, addr, err]
	}

	public SyscallConn(): [syscall.RawConn | null, $.GoError] {
		const c: UnixConn | $.VarRef<UnixConn> | null = this;
		if (!$.pointerValue<UnixConn>(c).conn.ok()) {
			return [null, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		return [$.interfaceValue<syscall.RawConn | null>(__goscript_rawconn.newRawConn($.pointerValue<UnixConn>(c).conn.fd), "*net.rawConn", /* @__PURE__ */ $.pointerType("net.rawConn")), null]
	}

	public async WriteMsgUnix(b: $.Slice<number>, oob: $.Slice<number>, addr: UnixAddr | $.VarRef<UnixAddr> | null): globalThis.Promise<[number, number, $.GoError]> {
		const c: UnixConn | $.VarRef<UnixConn> | null = this;
		let n: number = 0
		let oobn: number = 0
		let err: $.GoError = null! as $.GoError
		const c$: UnixConn = c == null ? $.pointerTarget<UnixConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UnixConn>(c)
		if (!(c$ as UnixConn).conn.ok()) {
			return [0, 0, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple3: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as UnixConn).writeMsg(b, oob, addr) : UnixConn.prototype.writeMsg.call(c, b, oob, addr))
		n = __goscriptTuple3[0]
		oobn = __goscriptTuple3[1]
		err = __goscriptTuple3[2]
		if (err != null) {
			err = $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField0 = (addr !== null && (addr as any).__isVarRef !== true && (addr as any).__goValue === undefined ? ((addr as any) as UnixAddr).opAddr() : UnixAddr.prototype.opAddr.call(addr)); return new __goscript_net.OpError({Op: "write", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).laddr, Addr: __goscriptLiteralField0, Err: err}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, oobn, err]
	}

	public async WriteTo(b: $.Slice<number>, addr: __goscript_net.Addr | null): globalThis.Promise<[number, $.GoError]> {
		const c: UnixConn | $.VarRef<UnixConn> | null = this;
		const c$: UnixConn = c == null ? $.pointerTarget<UnixConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UnixConn>(c)
		if (!(c$ as UnixConn).conn.ok()) {
			return [0, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple4: any = $.typeAssertTuple<UnixAddr | $.VarRef<UnixAddr> | null>(addr, /* @__PURE__ */ $.pointerType("net.UnixAddr"))
		let a: UnixAddr | $.VarRef<UnixAddr> | null = __goscriptTuple4[0]
		let ok = __goscriptTuple4[1]
		if (!ok) {
			return [0, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "write", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).laddr, Addr: addr, Err: $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
		}
		let [n, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as UnixConn).writeTo(b, a) : UnixConn.prototype.writeTo.call(c, b, a))
		if (err != null) {
			err = $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField1 = (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as UnixAddr).opAddr() : UnixAddr.prototype.opAddr.call(a)); return new __goscript_net.OpError({Op: "write", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).laddr, Addr: __goscriptLiteralField1, Err: err}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, err]
	}

	public async WriteToUnix(b: $.Slice<number>, addr: UnixAddr | $.VarRef<UnixAddr> | null): globalThis.Promise<[number, $.GoError]> {
		const c: UnixConn | $.VarRef<UnixConn> | null = this;
		const c$: UnixConn = c == null ? $.pointerTarget<UnixConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UnixConn>(c)
		if (!(c$ as UnixConn).conn.ok()) {
			return [0, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let [n, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as UnixConn).writeTo(b, addr) : UnixConn.prototype.writeTo.call(c, b, addr))
		if (err != null) {
			err = $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField2 = (addr !== null && (addr as any).__isVarRef !== true && (addr as any).__goValue === undefined ? ((addr as any) as UnixAddr).opAddr() : UnixAddr.prototype.opAddr.call(addr)); return new __goscript_net.OpError({Op: "write", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).laddr, Addr: __goscriptLiteralField2, Err: err}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, err]
	}

	public async readFrom(b: $.Slice<number>): globalThis.Promise<[number, UnixAddr | $.VarRef<UnixAddr> | null, $.GoError]> {
		const c: UnixConn | $.VarRef<UnixConn> | null = this;
		const c$: UnixConn = c == null ? $.pointerTarget<UnixConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UnixConn>(c)
		let addr: UnixAddr | $.VarRef<UnixAddr> | null = null! as UnixAddr | $.VarRef<UnixAddr> | null
		let [n, sa, err] = await $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).fakeNetFD).readFrom(b)
		{
			const __goscriptTypeSwitchValue = sa
			switch (true) {
				case $.typeAssert<syscall.SockaddrUnix | $.VarRef<syscall.SockaddrUnix> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("syscall.SockaddrUnix")).ok:
					{
						let sa: syscall.SockaddrUnix | $.VarRef<syscall.SockaddrUnix> | null = $.typeAssert<syscall.SockaddrUnix | $.VarRef<syscall.SockaddrUnix> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("syscall.SockaddrUnix")).value
						if (!$.stringEqual($.pointerValue<syscall.SockaddrUnix>(sa).Name, "")) {
							addr = (() => { const __goscriptLiteralField3 = __goscript_unixsock_posix.sotypeToNet($.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).sotype); return new UnixAddr({Name: $.pointerValue<syscall.SockaddrUnix>(sa).Name, Net: __goscriptLiteralField3}) })()
						}
					}
					break
			}
		}
		return [n, addr, err]
	}

	public async readMsg(b: $.Slice<number>, oob: $.Slice<number>): globalThis.Promise<[number, number, number, UnixAddr | $.VarRef<UnixAddr> | null, $.GoError]> {
		const c: UnixConn | $.VarRef<UnixConn> | null = this;
		let n: number = 0
		let oobn: number = 0
		let flags: number = 0
		let addr: UnixAddr | $.VarRef<UnixAddr> | null = null! as UnixAddr | $.VarRef<UnixAddr> | null
		let err: $.GoError = null! as $.GoError
		const c$: UnixConn = c == null ? $.pointerTarget<UnixConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UnixConn>(c)
		let sa: syscall.Sockaddr | null = null! as syscall.Sockaddr | null
		let __goscriptTuple5: any = await $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).fakeNetFD).readMsg(b, oob, 0)
		n = __goscriptTuple5[0]
		oobn = __goscriptTuple5[1]
		flags = __goscriptTuple5[2]
		sa = __goscriptTuple5[3]
		err = __goscriptTuple5[4]
		if ((((0 as number) == 0) && (err == null)) && (oobn > 0)) {
			__goscript_unixsock_readmsg_other.setReadMsgCloseOnExec($.goSlice(oob, undefined, oobn))
		}

		{
			const __goscriptTypeSwitchValue = sa
			switch (true) {
				case $.typeAssert<syscall.SockaddrUnix | $.VarRef<syscall.SockaddrUnix> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("syscall.SockaddrUnix")).ok:
					{
						let sa: syscall.SockaddrUnix | $.VarRef<syscall.SockaddrUnix> | null = $.typeAssert<syscall.SockaddrUnix | $.VarRef<syscall.SockaddrUnix> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("syscall.SockaddrUnix")).value
						if (!$.stringEqual($.pointerValue<syscall.SockaddrUnix>(sa).Name, "")) {
							addr = (() => { const __goscriptLiteralField4 = __goscript_unixsock_posix.sotypeToNet($.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).sotype); return new UnixAddr({Name: $.pointerValue<syscall.SockaddrUnix>(sa).Name, Net: __goscriptLiteralField4}) })()
						}
					}
					break
			}
		}
		return [n, oobn, flags, addr, err]
	}

	public async writeMsg(b: $.Slice<number>, oob: $.Slice<number>, addr: UnixAddr | $.VarRef<UnixAddr> | null): globalThis.Promise<[number, number, $.GoError]> {
		const c: UnixConn | $.VarRef<UnixConn> | null = this;
		let n: number = 0
		let oobn: number = 0
		let err: $.GoError = null! as $.GoError
		const c$: UnixConn = c == null ? $.pointerTarget<UnixConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UnixConn>(c)
		const addr$: UnixAddr = addr == null ? $.pointerTarget<UnixAddr>(addr) : (addr as any).__isVarRef === true ? (addr as any).value : (addr as any).__goValue === undefined ? (addr as any) : $.pointerTarget<UnixAddr>(addr)
		if (($.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).sotype == 2) && $.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).isConnected) {
			return [0, 0, __goscript_net.ErrWriteToConnected]
		}
		let sa: syscall.Sockaddr | null = null! as syscall.Sockaddr | null
		if (addr != null) {
			if (!$.stringEqual((addr$ as UnixAddr).Net, __goscript_unixsock_posix.sotypeToNet($.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).sotype))) {
				return [0, 0, $.namedValueInterfaceValue<$.GoError>(syscall.EAFNOSUPPORT, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
			}
			sa = $.interfaceValue<syscall.Sockaddr | null>(new syscall.SockaddrUnix({Name: (addr$ as UnixAddr).Name}), "*syscall.SockaddrUnix", /* @__PURE__ */ $.pointerType("syscall.SockaddrUnix"))
		}
		return $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).fakeNetFD).writeMsg(b, oob, sa)
	}

	public async writeTo(b: $.Slice<number>, addr: UnixAddr | $.VarRef<UnixAddr> | null): globalThis.Promise<[number, $.GoError]> {
		const c: UnixConn | $.VarRef<UnixConn> | null = this;
		const c$: UnixConn = c == null ? $.pointerTarget<UnixConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UnixConn>(c)
		const addr$: UnixAddr = addr == null ? $.pointerTarget<UnixAddr>(addr) : (addr as any).__isVarRef === true ? (addr as any).value : (addr as any).__goValue === undefined ? (addr as any) : $.pointerTarget<UnixAddr>(addr)
		if ($.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).isConnected) {
			return [0, __goscript_net.ErrWriteToConnected]
		}
		if (addr == null) {
			return [0, __goscript_net.errMissingAddress]
		}
		if (!$.stringEqual((addr$ as UnixAddr).Net, __goscript_unixsock_posix.sotypeToNet($.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).sotype))) {
			return [0, $.namedValueInterfaceValue<$.GoError>(syscall.EAFNOSUPPORT, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let sa: syscall.SockaddrUnix | $.VarRef<syscall.SockaddrUnix> | null = new syscall.SockaddrUnix({Name: (addr$ as UnixAddr).Name})
		return $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((c$ as UnixConn).conn.fd).fakeNetFD).writeTo(b, $.interfaceValue<syscall.Sockaddr | null>(sa, "*syscall.SockaddrUnix", /* @__PURE__ */ $.pointerType("syscall.SockaddrUnix")))
	}

	public async Close(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net.conn>(this.conn).Close()
	}

	public File(): any {
		return $.pointerValue<__goscript_net.conn>(this.conn).File()
	}

	public LocalAddr(): any {
		return $.pointerValue<__goscript_net.conn>(this.conn).LocalAddr()
	}

	public async Read(b: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net.conn>(this.conn).Read(b)
	}

	public RemoteAddr(): any {
		return $.pointerValue<__goscript_net.conn>(this.conn).RemoteAddr()
	}

	public async SetDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net.conn>(this.conn).SetDeadline(t)
	}

	public async SetReadBuffer(bytes: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net.conn>(this.conn).SetReadBuffer(bytes)
	}

	public async SetReadDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net.conn>(this.conn).SetReadDeadline(t)
	}

	public SetWriteBuffer(bytes: any): any {
		return $.pointerValue<__goscript_net.conn>(this.conn).SetWriteBuffer(bytes)
	}

	public async SetWriteDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net.conn>(this.conn).SetWriteDeadline(t)
	}

	public async Write(b: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_net.conn>(this.conn).Write(b)
	}

	public ok(): any {
		return $.pointerValue<__goscript_net.conn>(this.conn).ok()
	}

	static __typeInfo = $.registerStructType(
		"net.UnixConn",
		() => new UnixConn(),
		() => [$.methodSignature("CloseRead", [], ["error"], true), $.methodSignature("CloseWrite", [], ["error"], true), $.methodSignature("ReadFrom", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "net.Addr", "error"], true), $.methodSignature("ReadFromUnix", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.pointerType("net.UnixAddr"), "error"], true), $.methodSignature("ReadMsgUnix", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["flags", /* @__PURE__ */ $.basicType("int")], ["addr", /* @__PURE__ */ $.pointerType("net.UnixAddr")], ["err", "error"]], true), $.methodSignature("SyscallConn", [], ["syscall.RawConn", "error"], true), $.methodSignature("WriteMsgUnix", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", /* @__PURE__ */ $.pointerType("net.UnixAddr")]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("WriteTo", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", "net.Addr"]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteToUnix", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", /* @__PURE__ */ $.pointerType("net.UnixAddr")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("readFrom", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.pointerType("net.UnixAddr"), "error"], true), $.methodSignature("readMsg", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["flags", /* @__PURE__ */ $.basicType("int")], ["addr", /* @__PURE__ */ $.pointerType("net.UnixAddr")], ["err", "error"]], true), $.methodSignature("writeMsg", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", /* @__PURE__ */ $.pointerType("net.UnixAddr")]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("writeTo", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", /* @__PURE__ */ $.pointerType("net.UnixAddr")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("Close", [], ["error"], true), $.methodSignature("File", [], [["f", /* @__PURE__ */ $.pointerType("os.File")], ["err", "error"]], true), $.methodSignature("LocalAddr", [], ["net.Addr"], true), $.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("RemoteAddr", [], ["net.Addr"], true), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetReadBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetWriteBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		UnixConn,
		() => [/* @__PURE__ */ $.structField("conn", "net.conn", [0], 0, false, { pkgPath: "net", anonymous: true })]
	)
}

export class UnixListener {
	public get fd(): __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null {
		return this._fields.fd
	}

	public set fd(value: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null) {
		this._fields.fd = value
	}

	public get path(): string {
		return this._fields.path
	}

	public set path(value: string) {
		this._fields.path = value
	}

	public get unlink(): boolean {
		return this._fields.unlink
	}

	public set unlink(value: boolean) {
		this._fields.unlink = value
	}

	public get unlinkOnce(): sync.Once {
		return this._fields.unlinkOnce
	}

	public set unlinkOnce(value: sync.Once) {
		this._fields.unlinkOnce = value
	}

	public _fields: {
		fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null
		path: string
		unlink: boolean
		unlinkOnce: sync.Once
	}

	constructor(init?: Partial<{fd?: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null, path?: string, unlink?: boolean, unlinkOnce?: sync.Once}>, __goscriptValue?: boolean) {
		this._fields = {
			fd: init?.fd ?? (null! as __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null),
			path: init?.path ?? ("" as string),
			unlink: init?.unlink ?? (false as boolean),
			unlinkOnce: init?.unlinkOnce ? $.markAsStructValue($.cloneStructValue(init.unlinkOnce)) : $.markAsStructValue(new sync.Once())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UnixListener {
		return new UnixListener(this, true)
	}

	public __goscriptAssign(source: UnixListener): void {
		const target = this._fields
		const values = source._fields
		target.fd = values.fd
		target.path = values.path
		target.unlink = values.unlink
		$.assignStruct(target.unlinkOnce, values.unlinkOnce)
	}

	public async Accept(): globalThis.Promise<[__goscript_net.Conn | null, $.GoError]> {
		const l: UnixListener | $.VarRef<UnixListener> | null = this;
		const l$: UnixListener = l == null ? $.pointerTarget<UnixListener>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<UnixListener>(l)
		if (!(l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as UnixListener).ok() : UnixListener.prototype.ok.call(l))) {
			return [null, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple7: any = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as UnixListener).accept() : UnixListener.prototype.accept.call(l))
		let c: UnixConn | $.VarRef<UnixConn> | null = __goscriptTuple7[0]
		let err = __goscriptTuple7[1]
		if (err != null) {
			return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "accept", Net: $.pointerValue<__goscript_fd_fake.netFD>((l$ as UnixListener).fd).net, Source: null, Addr: $.pointerValue<__goscript_fd_fake.netFD>((l$ as UnixListener).fd).laddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
		}
		return [$.interfaceValue<__goscript_net.Conn | null>(c, "*net.UnixConn", /* @__PURE__ */ $.pointerType("net.UnixConn")), null]
	}

	public async AcceptUnix(): globalThis.Promise<[UnixConn | $.VarRef<UnixConn> | null, $.GoError]> {
		const l: UnixListener | $.VarRef<UnixListener> | null = this;
		const l$: UnixListener = l == null ? $.pointerTarget<UnixListener>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<UnixListener>(l)
		if (!(l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as UnixListener).ok() : UnixListener.prototype.ok.call(l))) {
			return [null, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple8: any = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as UnixListener).accept() : UnixListener.prototype.accept.call(l))
		let c: UnixConn | $.VarRef<UnixConn> | null = __goscriptTuple8[0]
		let err = __goscriptTuple8[1]
		if (err != null) {
			return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "accept", Net: $.pointerValue<__goscript_fd_fake.netFD>((l$ as UnixListener).fd).net, Source: null, Addr: $.pointerValue<__goscript_fd_fake.netFD>((l$ as UnixListener).fd).laddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
		}
		return [c, null]
	}

	public Addr(): __goscript_net.Addr | null {
		const l: UnixListener | $.VarRef<UnixListener> | null = this;
		return $.pointerValue<__goscript_fd_fake.netFD>($.pointerValue<UnixListener>(l).fd).laddr
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const l: UnixListener | $.VarRef<UnixListener> | null = this;
		const l$: UnixListener = l == null ? $.pointerTarget<UnixListener>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<UnixListener>(l)
		if (!(l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as UnixListener).ok() : UnixListener.prototype.ok.call(l))) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		{
			let err = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as UnixListener).close() : UnixListener.prototype.close.call(l))
			if (err != null) {
				return $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "close", Net: $.pointerValue<__goscript_fd_fake.netFD>((l$ as UnixListener).fd).net, Source: null, Addr: $.pointerValue<__goscript_fd_fake.netFD>((l$ as UnixListener).fd).laddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
			}
		}
		return null
	}

	public File(): [os.File | $.VarRef<os.File> | null, $.GoError] {
		const l: UnixListener | $.VarRef<UnixListener> | null = this;
		let f: os.File | $.VarRef<os.File> | null = null! as os.File | $.VarRef<os.File> | null
		let err: $.GoError = null! as $.GoError
		const l$: UnixListener = l == null ? $.pointerTarget<UnixListener>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<UnixListener>(l)
		if (!(l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as UnixListener).ok() : UnixListener.prototype.ok.call(l))) {
			return [null, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple9: any = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as UnixListener).file() : UnixListener.prototype.file.call(l))
		f = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "file", Net: $.pointerValue<__goscript_fd_fake.netFD>((l$ as UnixListener).fd).net, Source: null, Addr: $.pointerValue<__goscript_fd_fake.netFD>((l$ as UnixListener).fd).laddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [f, err]
	}

	public async SetDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const l: UnixListener | $.VarRef<UnixListener> | null = this;
		if (!(l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as UnixListener).ok() : UnixListener.prototype.ok.call(l))) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		return __goscript_fd_fake.netFD.prototype.SetDeadline.call($.pointerValue<UnixListener>(l).fd, t)
	}

	public SetUnlinkOnClose(unlink: boolean): void {
		let l: UnixListener | $.VarRef<UnixListener> | null = this;
		$.pointerValue<UnixListener>(l).unlink = unlink
	}

	public SyscallConn(): [syscall.RawConn | null, $.GoError] {
		const l: UnixListener | $.VarRef<UnixListener> | null = this;
		if (!(l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as UnixListener).ok() : UnixListener.prototype.ok.call(l))) {
			return [null, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		return [$.interfaceValue<syscall.RawConn | null>(__goscript_rawconn.newRawListener($.pointerValue<UnixListener>(l).fd), "*net.rawListener", /* @__PURE__ */ $.pointerType("net.rawListener")), null]
	}

	public async accept(): globalThis.Promise<[UnixConn | $.VarRef<UnixConn> | null, $.GoError]> {
		const ln: UnixListener | $.VarRef<UnixListener> | null = this;
		let __goscriptTuple10: any = await __goscript_fd_fake.netFD.prototype.accept.call($.pointerValue<UnixListener>(ln).fd)
		let fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null = __goscriptTuple10[0]
		let err = __goscriptTuple10[1]
		if (err != null) {
			return [null, err]
		}
		return [newUnixConn(fd), null]
	}

	public async close(): globalThis.Promise<$.GoError> {
		const ln: UnixListener | $.VarRef<UnixListener> | null = this;
		const ln$: UnixListener = ln == null ? $.pointerTarget<UnixListener>(ln) : (ln as any).__isVarRef === true ? (ln as any).value : (ln as any).__goValue === undefined ? (ln as any) : $.pointerTarget<UnixListener>(ln)

		await (ln$ as UnixListener).unlinkOnce.Do($.functionValue((): void => {
			if (($.indexString((ln$ as UnixListener).path, 0) != 64) && (ln$ as UnixListener).unlink) {
				syscall.Unlink((ln$ as UnixListener).path)
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return __goscript_fd_fake.netFD.prototype.Close.call((ln$ as UnixListener).fd)
	}

	public file(): [os.File | $.VarRef<os.File> | null, $.GoError] {
		const ln: UnixListener | $.VarRef<UnixListener> | null = this;
		let __goscriptTuple11: any = $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>($.pointerValue<UnixListener>(ln).fd).fakeNetFD).dup()
		let f: os.File | $.VarRef<os.File> | null = __goscriptTuple11[0]
		let err = __goscriptTuple11[1]
		if (err != null) {
			return [null, err]
		}
		return [f, null]
	}

	public ok(): boolean {
		const ln: UnixListener | $.VarRef<UnixListener> | null = this;
		return (ln != null) && ($.pointerValue<UnixListener>(ln).fd != null)
	}

	static __typeInfo = $.registerStructType(
		"net.UnixListener",
		() => new UnixListener(),
		() => [$.methodSignature("Accept", [], ["net.Conn", "error"], true), $.methodSignature("AcceptUnix", [], [/* @__PURE__ */ $.pointerType("net.UnixConn"), "error"], true), $.methodSignature("Addr", [], ["net.Addr"], true), $.methodSignature("Close", [], ["error"], true), $.methodSignature("File", [], [["f", /* @__PURE__ */ $.pointerType("os.File")], ["err", "error"]], true), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetUnlinkOnClose", [["unlink", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("SyscallConn", [], ["syscall.RawConn", "error"], true), $.methodSignature("accept", [], [/* @__PURE__ */ $.pointerType("net.UnixConn"), "error"], true), $.methodSignature("close", [], ["error"], true), $.methodSignature("file", [], [/* @__PURE__ */ $.pointerType("os.File"), "error"], true), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		UnixListener,
		() => [/* @__PURE__ */ $.structField("fd", /* @__PURE__ */ $.pointerType("net.netFD"), [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("path", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("unlink", /* @__PURE__ */ $.basicType("bool"), [2], 24, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("unlinkOnce", "sync.Once", [3], 28, false, { pkgPath: "net" })]
	)
}

export function ResolveUnixAddr(network: string, address: string): [UnixAddr | $.VarRef<UnixAddr> | null, $.GoError] {
	switch (network) {
		case "unix":
		case "unixgram":
		case "unixpacket":
		{
			return [new UnixAddr({Name: address, Net: network}), null]
			break
		}
		default:
		{
			return [null, $.namedValueInterfaceValue<$.GoError>(network, "net.UnknownNetworkError", {"Error": __goscript_net.UnknownNetworkError_Error}, /* @__PURE__ */ $.basicType("string", "net.UnknownNetworkError"))]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function newUnixConn(fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null): UnixConn | $.VarRef<UnixConn> | null {
	return new UnixConn({conn: new __goscript_net.conn({fd: fd}, true)})
}

export async function DialUnix(network: string, laddr: UnixAddr | $.VarRef<UnixAddr> | null, raddr: UnixAddr | $.VarRef<UnixAddr> | null): globalThis.Promise<[UnixConn | $.VarRef<UnixConn> | null, $.GoError]> {
	return dialUnix(context.Background(), null, network, laddr, raddr)
}

export async function dialUnix(ctx: context.Context | null, dialer: __goscript_dial.Dialer | $.VarRef<__goscript_dial.Dialer> | null, network: string, laddr: UnixAddr | $.VarRef<UnixAddr> | null, raddr: UnixAddr | $.VarRef<UnixAddr> | null): globalThis.Promise<[UnixConn | $.VarRef<UnixConn> | null, $.GoError]> {
	switch (network) {
		case "unix":
		case "unixgram":
		case "unixpacket":
		{
			break
		}
		default:
		{
			return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField5 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as UnixAddr).opAddr() : UnixAddr.prototype.opAddr.call(laddr)); const __goscriptLiteralField6 = (raddr !== null && (raddr as any).__isVarRef !== true && (raddr as any).__goValue === undefined ? ((raddr as any) as UnixAddr).opAddr() : UnixAddr.prototype.opAddr.call(raddr)); return new __goscript_net.OpError({Op: "dial", Net: network, Source: __goscriptLiteralField5, Addr: __goscriptLiteralField6, Err: $.namedValueInterfaceValue<$.GoError>(network, "net.UnknownNetworkError", {"Error": __goscript_net.UnknownNetworkError_Error}, /* @__PURE__ */ $.basicType("string", "net.UnknownNetworkError"))}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
			break
		}
	}
	let sd: __goscript_dial.sysDialer | $.VarRef<__goscript_dial.sysDialer> | null = (() => { const __goscriptLiteralField7 = (raddr !== null && (raddr as any).__isVarRef !== true && (raddr as any).__goValue === undefined ? ((raddr as any) as UnixAddr).String() : UnixAddr.prototype.String.call(raddr)); return new __goscript_dial.sysDialer({network: network, address: __goscriptLiteralField7}) })()
	if (dialer != null) {
		$.assignStruct($.pointerValue<__goscript_dial.sysDialer>(sd).Dialer, $.pointerValue<__goscript_dial.Dialer>(dialer))
	}
	let __goscriptTuple6: any = await (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as __goscript_dial.sysDialer).dialUnix(ctx, laddr, raddr) : __goscript_dial.sysDialer.prototype.dialUnix.call(sd, ctx, laddr, raddr))
	let c: UnixConn | $.VarRef<UnixConn> | null = __goscriptTuple6[0]
	let err = __goscriptTuple6[1]
	if (err != null) {
		return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField8 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as UnixAddr).opAddr() : UnixAddr.prototype.opAddr.call(laddr)); const __goscriptLiteralField9 = (raddr !== null && (raddr as any).__isVarRef !== true && (raddr as any).__goValue === undefined ? ((raddr as any) as UnixAddr).opAddr() : UnixAddr.prototype.opAddr.call(raddr)); return new __goscript_net.OpError({Op: "dial", Net: network, Source: __goscriptLiteralField8, Addr: __goscriptLiteralField9, Err: err}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	return [c, null]
}

export async function ListenUnix(network: string, laddr: UnixAddr | $.VarRef<UnixAddr> | null): globalThis.Promise<[UnixListener | $.VarRef<UnixListener> | null, $.GoError]> {
	switch (network) {
		case "unix":
		case "unixpacket":
		{
			break
		}
		default:
		{
			return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField10 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as UnixAddr).opAddr() : UnixAddr.prototype.opAddr.call(laddr)); return new __goscript_net.OpError({Op: "listen", Net: network, Source: null, Addr: __goscriptLiteralField10, Err: $.namedValueInterfaceValue<$.GoError>(network, "net.UnknownNetworkError", {"Error": __goscript_net.UnknownNetworkError_Error}, /* @__PURE__ */ $.basicType("string", "net.UnknownNetworkError"))}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
			break
		}
	}
	if (laddr == null) {
		return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField11 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as UnixAddr).opAddr() : UnixAddr.prototype.opAddr.call(laddr)); return new __goscript_net.OpError({Op: "listen", Net: network, Source: null, Addr: __goscriptLiteralField11, Err: __goscript_net.errMissingAddress}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	let sl: __goscript_dial.sysListener | $.VarRef<__goscript_dial.sysListener> | null = (() => { const __goscriptLiteralField12 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as UnixAddr).String() : UnixAddr.prototype.String.call(laddr)); return new __goscript_dial.sysListener({network: network, address: __goscriptLiteralField12}) })()
	let __goscriptTuple12: any = await (sl !== null && (sl as any).__isVarRef !== true && (sl as any).__goValue === undefined ? ((sl as any) as __goscript_dial.sysListener).listenUnix(context.Background(), laddr) : __goscript_dial.sysListener.prototype.listenUnix.call(sl, context.Background(), laddr))
	let ln: UnixListener | $.VarRef<UnixListener> | null = __goscriptTuple12[0]
	let err = __goscriptTuple12[1]
	if (err != null) {
		return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField13 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as UnixAddr).opAddr() : UnixAddr.prototype.opAddr.call(laddr)); return new __goscript_net.OpError({Op: "listen", Net: network, Source: null, Addr: __goscriptLiteralField13, Err: err}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	return [ln, null]
}

export async function ListenUnixgram(network: string, laddr: UnixAddr | $.VarRef<UnixAddr> | null): globalThis.Promise<[UnixConn | $.VarRef<UnixConn> | null, $.GoError]> {
	switch (network) {
		case "unixgram":
		{
			break
		}
		default:
		{
			return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField14 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as UnixAddr).opAddr() : UnixAddr.prototype.opAddr.call(laddr)); return new __goscript_net.OpError({Op: "listen", Net: network, Source: null, Addr: __goscriptLiteralField14, Err: $.namedValueInterfaceValue<$.GoError>(network, "net.UnknownNetworkError", {"Error": __goscript_net.UnknownNetworkError_Error}, /* @__PURE__ */ $.basicType("string", "net.UnknownNetworkError"))}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
			break
		}
	}
	if (laddr == null) {
		return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "listen", Net: network, Source: null, Addr: null, Err: __goscript_net.errMissingAddress}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	let sl: __goscript_dial.sysListener | $.VarRef<__goscript_dial.sysListener> | null = (() => { const __goscriptLiteralField15 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as UnixAddr).String() : UnixAddr.prototype.String.call(laddr)); return new __goscript_dial.sysListener({network: network, address: __goscriptLiteralField15}) })()
	let __goscriptTuple13: any = await (sl !== null && (sl as any).__isVarRef !== true && (sl as any).__goValue === undefined ? ((sl as any) as __goscript_dial.sysListener).listenUnixgram(context.Background(), laddr) : __goscript_dial.sysListener.prototype.listenUnixgram.call(sl, context.Background(), laddr))
	let c: UnixConn | $.VarRef<UnixConn> | null = __goscriptTuple13[0]
	let err = __goscriptTuple13[1]
	if (err != null) {
		return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField16 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as UnixAddr).opAddr() : UnixAddr.prototype.opAddr.call(laddr)); return new __goscript_net.OpError({Op: "listen", Net: network, Source: null, Addr: __goscriptLiteralField16, Err: err}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	return [c, null]
}
