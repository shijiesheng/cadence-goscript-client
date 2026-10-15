// Generated file based on iprawsock.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as netip from "@goscript/net/netip/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as poll from "@goscript/internal/poll/index.js"

import * as singleflight from "@goscript/internal/singleflight/index.js"

import type * as io from "@goscript/io/index.js"

import type * as os from "@goscript/os/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import type * as dnsmessage from "@goscript/vendor/golang.org/x/net/dns/dnsmessage/index.js"

import * as __goscript__interface from "./interface.gs.ts"

import * as __goscript_dial from "./dial.gs.ts"

import type * as __goscript_dnsclient from "./dnsclient.gs.ts"

import * as __goscript_dnsclient_unix from "./dnsclient_unix.gs.ts"

import type * as __goscript_dnsconfig from "./dnsconfig.gs.ts"

import * as __goscript_fd_fake from "./fd_fake.gs.ts"

import * as __goscript_fd_js from "./fd_js.gs.ts"

import * as __goscript_ip from "./ip.gs.ts"

import * as __goscript_iprawsock_posix from "./iprawsock_posix.gs.ts"

import * as __goscript_ipsock from "./ipsock.gs.ts"

import * as __goscript_ipsock_posix from "./ipsock_posix.gs.ts"

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

import type * as __goscript_unixsock from "./unixsock.gs.ts"

import * as __goscript_unixsock_posix from "./unixsock_posix.gs.ts"
import "@goscript/context/index.js"
import "@goscript/net/netip/index.js"
import "@goscript/syscall/index.js"
import "@goscript/internal/poll/index.js"
import "@goscript/internal/singleflight/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "./interface.gs.ts"
import "./dial.gs.ts"
import "./dnsclient_unix.gs.ts"
import "./fd_fake.gs.ts"
import "./fd_js.gs.ts"
import "./ip.gs.ts"
import "./iprawsock_posix.gs.ts"
import "./ipsock.gs.ts"
import "./ipsock_posix.gs.ts"
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

export class IPAddr {
	public get IP(): __goscript_ip.IP {
		return this._fields.IP
	}

	public set IP(value: __goscript_ip.IP) {
		this._fields.IP = value
	}

	public get Zone(): string {
		return this._fields.Zone
	}

	public set Zone(value: string) {
		this._fields.Zone = value
	}

	public _fields: {
		IP: __goscript_ip.IP
		Zone: string
	}

	constructor(init?: Partial<{IP?: __goscript_ip.IP, Zone?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			IP: init?.IP ?? (null! as __goscript_ip.IP),
			Zone: init?.Zone ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): IPAddr {
		return new IPAddr(this, true)
	}

	public __goscriptAssign(source: IPAddr): void {
		const target = this._fields
		const values = source._fields
		target.IP = values.IP
		target.Zone = values.Zone
	}

	public Network(): string {
		const a: IPAddr | $.VarRef<IPAddr> | null = this;
		return "ip"
	}

	public String(): string {
		const a: IPAddr | $.VarRef<IPAddr> | null = this;
		const a$: IPAddr = a == null ? $.pointerTarget<IPAddr>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<IPAddr>(a)
		if (a == null) {
			return "<nil>"
		}
		let ip = __goscript_ip.ipEmptyString(((a$ as IPAddr).IP as __goscript_ip.IP))
		if (!$.stringEqual((a$ as IPAddr).Zone, "")) {
			return $.concatString(($.concatString(ip, "%")), (a$ as IPAddr).Zone)
		}
		return ip
	}

	public family(): number {
		const a: IPAddr | $.VarRef<IPAddr> | null = this;
		const a$: IPAddr = a == null ? $.pointerTarget<IPAddr>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<IPAddr>(a)
		if ((a == null) || ($.sliceLen(((a$ as IPAddr).IP as __goscript_ip.IP)) <= 4)) {
			return 2
		}
		if (__goscript_ip.IP_To4((a$ as IPAddr).IP) != null) {
			return 2
		}
		return 3
	}

	public isWildcard(): boolean {
		const a: IPAddr | $.VarRef<IPAddr> | null = this;
		const a$: IPAddr = a == null ? $.pointerTarget<IPAddr>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<IPAddr>(a)
		if ((a == null) || ((a$ as IPAddr).IP == null)) {
			return true
		}
		return __goscript_ip.IP_IsUnspecified((a$ as IPAddr).IP)
	}

	public opAddr(): __goscript_net.Addr | null {
		const a: IPAddr | $.VarRef<IPAddr> | null = this;
		if (a == null) {
			return null
		}
		return $.interfaceValue<__goscript_net.Addr | null>(a, "*net.IPAddr", /* @__PURE__ */ $.pointerType("net.IPAddr"))
	}

	public async sockaddr(family: number): globalThis.Promise<[syscall.Sockaddr | null, $.GoError]> {
		const a: IPAddr | $.VarRef<IPAddr> | null = this;
		const a$: IPAddr = a == null ? $.pointerTarget<IPAddr>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<IPAddr>(a)
		if (a == null) {
			return [null, null]
		}
		return __goscript_ipsock_posix.ipToSockaddr(family, ((a$ as IPAddr).IP as __goscript_ip.IP), 0, (a$ as IPAddr).Zone)
	}

	public toLocal(net: string): __goscript_sockaddr_posix.sockaddr | null {
		const a: IPAddr | $.VarRef<IPAddr> | null = this;
		return $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>((() => { const __goscriptLiteralField2 = (__goscript_ipsock.loopbackIP(net) as __goscript_ip.IP); return new IPAddr({IP: __goscriptLiteralField2, Zone: $.pointerValue<IPAddr>(a).Zone}) })(), "*net.IPAddr", /* @__PURE__ */ $.pointerType("net.IPAddr"))
	}

	static __typeInfo = $.registerStructType(
		"net.IPAddr",
		() => new IPAddr(),
		() => [$.methodSignature("Network", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("family", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("isWildcard", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("opAddr", [], ["net.Addr"], true), $.methodSignature("sockaddr", [["family", /* @__PURE__ */ $.basicType("int")]], ["syscall.Sockaddr", "error"], true), $.methodSignature("toLocal", [["net", /* @__PURE__ */ $.basicType("string")]], ["net.sockaddr"], true)],
		IPAddr,
		() => [/* @__PURE__ */ $.structField("IP", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"), [0], 0, true), /* @__PURE__ */ $.structField("Zone", /* @__PURE__ */ $.basicType("string"), [1], 24, true)]
	)
}

export class IPConn {
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

	public clone(): IPConn {
		return new IPConn(this, true)
	}

	public __goscriptAssign(source: IPConn): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.conn, values.conn)
	}

	public async ReadFrom(b: $.Slice<number>): globalThis.Promise<[number, __goscript_net.Addr | null, $.GoError]> {
		const c: IPConn | $.VarRef<IPConn> | null = this;
		const c$: IPConn = c == null ? $.pointerTarget<IPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<IPConn>(c)
		if (!(c$ as IPConn).conn.ok()) {
			return [0, null, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple1: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as IPConn).readFrom(b) : IPConn.prototype.readFrom.call(c, b))
		let n = __goscriptTuple1[0]
		let addr: IPAddr | $.VarRef<IPAddr> | null = __goscriptTuple1[1]
		let err = __goscriptTuple1[2]
		if (err != null) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "read", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		if (addr == null) {
			return [n, null, err]
		}
		return [n, $.interfaceValue<__goscript_net.Addr | null>(addr, "*net.IPAddr", /* @__PURE__ */ $.pointerType("net.IPAddr")), err]
	}

	public async ReadFromIP(b: $.Slice<number>): globalThis.Promise<[number, IPAddr | $.VarRef<IPAddr> | null, $.GoError]> {
		const c: IPConn | $.VarRef<IPConn> | null = this;
		const c$: IPConn = c == null ? $.pointerTarget<IPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<IPConn>(c)
		if (!(c$ as IPConn).conn.ok()) {
			return [0, null, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple2: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as IPConn).readFrom(b) : IPConn.prototype.readFrom.call(c, b))
		let n = __goscriptTuple2[0]
		let addr: IPAddr | $.VarRef<IPAddr> | null = __goscriptTuple2[1]
		let err = __goscriptTuple2[2]
		if (err != null) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "read", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, addr, err]
	}

	public async ReadMsgIP(b: $.Slice<number>, oob: $.Slice<number>): globalThis.Promise<[number, number, number, IPAddr | $.VarRef<IPAddr> | null, $.GoError]> {
		const c: IPConn | $.VarRef<IPConn> | null = this;
		let n: number = 0
		let oobn: number = 0
		let flags: number = 0
		let addr: IPAddr | $.VarRef<IPAddr> | null = null! as IPAddr | $.VarRef<IPAddr> | null
		let err: $.GoError = null! as $.GoError
		const c$: IPConn = c == null ? $.pointerTarget<IPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<IPConn>(c)
		if (!(c$ as IPConn).conn.ok()) {
			return [0, 0, 0, null, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple3: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as IPConn).readMsg(b, oob) : IPConn.prototype.readMsg.call(c, b, oob))
		n = __goscriptTuple3[0]
		oobn = __goscriptTuple3[1]
		flags = __goscriptTuple3[2]
		addr = __goscriptTuple3[3]
		err = __goscriptTuple3[4]
		if (err != null) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "read", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, oobn, flags, addr, err]
	}

	public SyscallConn(): [syscall.RawConn | null, $.GoError] {
		const c: IPConn | $.VarRef<IPConn> | null = this;
		if (!$.pointerValue<IPConn>(c).conn.ok()) {
			return [null, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		return [$.interfaceValue<syscall.RawConn | null>(__goscript_rawconn.newRawConn($.pointerValue<IPConn>(c).conn.fd), "*net.rawConn", /* @__PURE__ */ $.pointerType("net.rawConn")), null]
	}

	public async WriteMsgIP(b: $.Slice<number>, oob: $.Slice<number>, addr: IPAddr | $.VarRef<IPAddr> | null): globalThis.Promise<[number, number, $.GoError]> {
		const c: IPConn | $.VarRef<IPConn> | null = this;
		let n: number = 0
		let oobn: number = 0
		let err: $.GoError = null! as $.GoError
		const c$: IPConn = c == null ? $.pointerTarget<IPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<IPConn>(c)
		if (!(c$ as IPConn).conn.ok()) {
			return [0, 0, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple4: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as IPConn).writeMsg(b, oob, addr) : IPConn.prototype.writeMsg.call(c, b, oob, addr))
		n = __goscriptTuple4[0]
		oobn = __goscriptTuple4[1]
		err = __goscriptTuple4[2]
		if (err != null) {
			err = $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField3 = (addr !== null && (addr as any).__isVarRef !== true && (addr as any).__goValue === undefined ? ((addr as any) as IPAddr).opAddr() : IPAddr.prototype.opAddr.call(addr)); return new __goscript_net.OpError({Op: "write", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).laddr, Addr: __goscriptLiteralField3, Err: err}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, oobn, err]
	}

	public async WriteTo(b: $.Slice<number>, addr: __goscript_net.Addr | null): globalThis.Promise<[number, $.GoError]> {
		const c: IPConn | $.VarRef<IPConn> | null = this;
		const c$: IPConn = c == null ? $.pointerTarget<IPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<IPConn>(c)
		if (!(c$ as IPConn).conn.ok()) {
			return [0, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple5: any = $.typeAssertTuple<IPAddr | $.VarRef<IPAddr> | null>(addr, /* @__PURE__ */ $.pointerType("net.IPAddr"))
		let a: IPAddr | $.VarRef<IPAddr> | null = __goscriptTuple5[0]
		let ok = __goscriptTuple5[1]
		if (!ok) {
			return [0, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "write", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).laddr, Addr: addr, Err: $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
		}
		let [n, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as IPConn).writeTo(b, a) : IPConn.prototype.writeTo.call(c, b, a))
		if (err != null) {
			err = $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField4 = (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as IPAddr).opAddr() : IPAddr.prototype.opAddr.call(a)); return new __goscript_net.OpError({Op: "write", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).laddr, Addr: __goscriptLiteralField4, Err: err}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, err]
	}

	public async WriteToIP(b: $.Slice<number>, addr: IPAddr | $.VarRef<IPAddr> | null): globalThis.Promise<[number, $.GoError]> {
		const c: IPConn | $.VarRef<IPConn> | null = this;
		const c$: IPConn = c == null ? $.pointerTarget<IPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<IPConn>(c)
		if (!(c$ as IPConn).conn.ok()) {
			return [0, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let [n, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as IPConn).writeTo(b, addr) : IPConn.prototype.writeTo.call(c, b, addr))
		if (err != null) {
			err = $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField5 = (addr !== null && (addr as any).__isVarRef !== true && (addr as any).__goValue === undefined ? ((addr as any) as IPAddr).opAddr() : IPAddr.prototype.opAddr.call(addr)); return new __goscript_net.OpError({Op: "write", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).laddr, Addr: __goscriptLiteralField5, Err: err}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, err]
	}

	public async readFrom(b: $.Slice<number>): globalThis.Promise<[number, IPAddr | $.VarRef<IPAddr> | null, $.GoError]> {
		const c: IPConn | $.VarRef<IPConn> | null = this;

		// Network returns the address's network name, "ip".
		let addr: IPAddr | $.VarRef<IPAddr> | null = null! as IPAddr | $.VarRef<IPAddr> | null
		let [n, sa, err] = await $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>($.pointerValue<IPConn>(c).conn.fd).fakeNetFD).readFrom(b)
		{
			const __goscriptTypeSwitchValue = sa
			switch (true) {
				case $.typeAssert<syscall.SockaddrInet4 | $.VarRef<syscall.SockaddrInet4> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("syscall.SockaddrInet4")).ok:
					{
						let sa: syscall.SockaddrInet4 | $.VarRef<syscall.SockaddrInet4> | null = $.typeAssert<syscall.SockaddrInet4 | $.VarRef<syscall.SockaddrInet4> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("syscall.SockaddrInet4")).value
						addr = new IPAddr({IP: ($.goSlice($.pointerValue<syscall.SockaddrInet4>(sa).Addr, 0, undefined) as __goscript_ip.IP)})
						n = __goscript_iprawsock_posix.stripIPv4Header(n, b)
					}
					break
				case $.typeAssert<syscall.SockaddrInet6 | $.VarRef<syscall.SockaddrInet6> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("syscall.SockaddrInet6")).ok:
					{
						let sa: syscall.SockaddrInet6 | $.VarRef<syscall.SockaddrInet6> | null = $.typeAssert<syscall.SockaddrInet6 | $.VarRef<syscall.SockaddrInet6> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("syscall.SockaddrInet6")).value
						addr = (await (async () => { const __goscriptLiteralField6 = await $.pointerValue<__goscript__interface.ipv6ZoneCache>(__goscript__interface.zoneCache).name($.int($.pointerValue<syscall.SockaddrInet6>(sa).ZoneId)); return new IPAddr({IP: ($.goSlice($.pointerValue<syscall.SockaddrInet6>(sa).Addr, 0, undefined) as __goscript_ip.IP), Zone: __goscriptLiteralField6}) })())
					}
					break
			}
		}
		return [n, addr, err]
	}

	public async readMsg(b: $.Slice<number>, oob: $.Slice<number>): globalThis.Promise<[number, number, number, IPAddr | $.VarRef<IPAddr> | null, $.GoError]> {
		const c: IPConn | $.VarRef<IPConn> | null = this;
		let n: number = 0
		let oobn: number = 0
		let flags: number = 0
		let addr: IPAddr | $.VarRef<IPAddr> | null = null! as IPAddr | $.VarRef<IPAddr> | null
		let err: $.GoError = null! as $.GoError
		let sa: syscall.Sockaddr | null = null! as syscall.Sockaddr | null
		let __goscriptTuple6: any = await $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>($.pointerValue<IPConn>(c).conn.fd).fakeNetFD).readMsg(b, oob, 0)
		n = __goscriptTuple6[0]
		oobn = __goscriptTuple6[1]
		flags = __goscriptTuple6[2]
		sa = __goscriptTuple6[3]
		err = __goscriptTuple6[4]
		{
			const __goscriptTypeSwitchValue = sa
			switch (true) {
				case $.typeAssert<syscall.SockaddrInet4 | $.VarRef<syscall.SockaddrInet4> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("syscall.SockaddrInet4")).ok:
					{
						let sa: syscall.SockaddrInet4 | $.VarRef<syscall.SockaddrInet4> | null = $.typeAssert<syscall.SockaddrInet4 | $.VarRef<syscall.SockaddrInet4> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("syscall.SockaddrInet4")).value
						addr = new IPAddr({IP: ($.goSlice($.pointerValue<syscall.SockaddrInet4>(sa).Addr, 0, undefined) as __goscript_ip.IP)})
					}
					break
				case $.typeAssert<syscall.SockaddrInet6 | $.VarRef<syscall.SockaddrInet6> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("syscall.SockaddrInet6")).ok:
					{
						let sa: syscall.SockaddrInet6 | $.VarRef<syscall.SockaddrInet6> | null = $.typeAssert<syscall.SockaddrInet6 | $.VarRef<syscall.SockaddrInet6> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("syscall.SockaddrInet6")).value
						addr = (await (async () => { const __goscriptLiteralField7 = await $.pointerValue<__goscript__interface.ipv6ZoneCache>(__goscript__interface.zoneCache).name($.int($.pointerValue<syscall.SockaddrInet6>(sa).ZoneId)); return new IPAddr({IP: ($.goSlice($.pointerValue<syscall.SockaddrInet6>(sa).Addr, 0, undefined) as __goscript_ip.IP), Zone: __goscriptLiteralField7}) })())
					}
					break
			}
		}
		return [n, oobn, flags, addr, err]
	}

	public async writeMsg(b: $.Slice<number>, oob: $.Slice<number>, addr: IPAddr | $.VarRef<IPAddr> | null): globalThis.Promise<[number, number, $.GoError]> {
		const c: IPConn | $.VarRef<IPConn> | null = this;
		let n: number = 0
		let oobn: number = 0
		let err: $.GoError = null! as $.GoError
		const c$: IPConn = c == null ? $.pointerTarget<IPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<IPConn>(c)
		if ($.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).isConnected) {
			return [0, 0, __goscript_net.ErrWriteToConnected]
		}
		if (addr == null) {
			return [0, 0, __goscript_net.errMissingAddress]
		}
		let __goscriptTuple7: any = await (addr !== null && (addr as any).__isVarRef !== true && (addr as any).__goValue === undefined ? ((addr as any) as IPAddr).sockaddr($.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).family) : IPAddr.prototype.sockaddr.call(addr, $.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).family))
		let sa = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [0, 0, err]
		}
		return $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).fakeNetFD).writeMsg(b, oob, sa)
	}

	public async writeTo(b: $.Slice<number>, addr: IPAddr | $.VarRef<IPAddr> | null): globalThis.Promise<[number, $.GoError]> {
		const c: IPConn | $.VarRef<IPConn> | null = this;
		const c$: IPConn = c == null ? $.pointerTarget<IPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<IPConn>(c)
		if ($.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).isConnected) {
			return [0, __goscript_net.ErrWriteToConnected]
		}
		if (addr == null) {
			return [0, __goscript_net.errMissingAddress]
		}
		let [sa, err] = await (addr !== null && (addr as any).__isVarRef !== true && (addr as any).__goValue === undefined ? ((addr as any) as IPAddr).sockaddr($.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).family) : IPAddr.prototype.sockaddr.call(addr, $.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).family))
		if (err != null) {
			return [0, err]
		}
		return $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((c$ as IPConn).conn.fd).fakeNetFD).writeTo(b, sa)
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
		"net.IPConn",
		() => new IPConn(),
		() => [$.methodSignature("ReadFrom", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "net.Addr", "error"], true), $.methodSignature("ReadFromIP", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.pointerType("net.IPAddr"), "error"], true), $.methodSignature("ReadMsgIP", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["flags", /* @__PURE__ */ $.basicType("int")], ["addr", /* @__PURE__ */ $.pointerType("net.IPAddr")], ["err", "error"]], true), $.methodSignature("SyscallConn", [], ["syscall.RawConn", "error"], true), $.methodSignature("WriteMsgIP", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", /* @__PURE__ */ $.pointerType("net.IPAddr")]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("WriteTo", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", "net.Addr"]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteToIP", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", /* @__PURE__ */ $.pointerType("net.IPAddr")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("readFrom", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.pointerType("net.IPAddr"), "error"], true), $.methodSignature("readMsg", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["flags", /* @__PURE__ */ $.basicType("int")], ["addr", /* @__PURE__ */ $.pointerType("net.IPAddr")], ["err", "error"]], true), $.methodSignature("writeMsg", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", /* @__PURE__ */ $.pointerType("net.IPAddr")]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("writeTo", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", /* @__PURE__ */ $.pointerType("net.IPAddr")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("Close", [], ["error"], true), $.methodSignature("File", [], [["f", /* @__PURE__ */ $.pointerType("os.File")], ["err", "error"]], true), $.methodSignature("LocalAddr", [], ["net.Addr"], true), $.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("RemoteAddr", [], ["net.Addr"], true), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetReadBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetWriteBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		IPConn,
		() => [/* @__PURE__ */ $.structField("conn", "net.conn", [0], 0, false, { pkgPath: "net", anonymous: true })]
	)
}

export function ipAddrFromAddr(addr: netip.Addr): IPAddr | $.VarRef<IPAddr> | null {
	return (() => { const __goscriptLiteralField0 = (addr.AsSlice() as __goscript_ip.IP); const __goscriptLiteralField1 = addr.Zone(); return new IPAddr({IP: __goscriptLiteralField0, Zone: __goscriptLiteralField1}) })()
}

export async function ResolveIPAddr(network: string, address: string): globalThis.Promise<[IPAddr | $.VarRef<IPAddr> | null, $.GoError]> {
	if ($.stringEqual(network, "")) {
		network = "ip"
	}
	let [afnet, , err] = await __goscript_dial.parseNetwork(context.Background(), network, false)
	if (err != null) {
		return [null, err]
	}
	switch (afnet) {
		case "ip":
		case "ip4":
		case "ip6":
		{
			break
		}
		default:
		{
			return [null, $.namedValueInterfaceValue<$.GoError>(network, "net.UnknownNetworkError", {"Error": __goscript_net.UnknownNetworkError_Error}, /* @__PURE__ */ $.basicType("string", "net.UnknownNetworkError"))]
			break
		}
	}
	let __goscriptTuple0: any = await __goscript_lookup.Resolver.prototype.internetAddrList.call(__goscript_lookup.DefaultResolver, context.Background(), afnet, address)
	let addrs: __goscript_ipsock.addrList = (__goscriptTuple0[0] as __goscript_ipsock.addrList)
	err = __goscriptTuple0[1]
	if (err != null) {
		return [null, err]
	}
	return [$.mustTypeAssert<IPAddr | $.VarRef<IPAddr> | null>(await __goscript_ipsock.addrList_forResolve(addrs, network, address), /* @__PURE__ */ $.pointerType("net.IPAddr")), null]
}

export function newIPConn(fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null): IPConn | $.VarRef<IPConn> | null {
	return new IPConn({conn: new __goscript_net.conn({fd: fd}, true)})
}

export async function DialIP(network: string, laddr: IPAddr | $.VarRef<IPAddr> | null, raddr: IPAddr | $.VarRef<IPAddr> | null): globalThis.Promise<[IPConn | $.VarRef<IPConn> | null, $.GoError]> {
	return dialIP(context.Background(), null, network, laddr, raddr)
}

export async function dialIP(ctx: context.Context | null, dialer: __goscript_dial.Dialer | $.VarRef<__goscript_dial.Dialer> | null, network: string, laddr: IPAddr | $.VarRef<IPAddr> | null, raddr: IPAddr | $.VarRef<IPAddr> | null): globalThis.Promise<[IPConn | $.VarRef<IPConn> | null, $.GoError]> {
	if (raddr == null) {
		return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField8 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as IPAddr).opAddr() : IPAddr.prototype.opAddr.call(laddr)); return new __goscript_net.OpError({Op: "dial", Net: network, Source: __goscriptLiteralField8, Addr: null, Err: __goscript_net.errMissingAddress}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	let sd: __goscript_dial.sysDialer | $.VarRef<__goscript_dial.sysDialer> | null = (() => { const __goscriptLiteralField9 = (raddr !== null && (raddr as any).__isVarRef !== true && (raddr as any).__goValue === undefined ? ((raddr as any) as IPAddr).String() : IPAddr.prototype.String.call(raddr)); return new __goscript_dial.sysDialer({network: network, address: __goscriptLiteralField9}) })()
	if (dialer != null) {
		$.assignStruct($.pointerValue<__goscript_dial.sysDialer>(sd).Dialer, $.pointerValue<__goscript_dial.Dialer>(dialer))
	}
	let __goscriptTuple8: any = await (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as __goscript_dial.sysDialer).dialIP(ctx, laddr, raddr) : __goscript_dial.sysDialer.prototype.dialIP.call(sd, ctx, laddr, raddr))
	let c: IPConn | $.VarRef<IPConn> | null = __goscriptTuple8[0]
	let err = __goscriptTuple8[1]
	if (err != null) {
		return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField10 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as IPAddr).opAddr() : IPAddr.prototype.opAddr.call(laddr)); const __goscriptLiteralField11 = (raddr !== null && (raddr as any).__isVarRef !== true && (raddr as any).__goValue === undefined ? ((raddr as any) as IPAddr).opAddr() : IPAddr.prototype.opAddr.call(raddr)); return new __goscript_net.OpError({Op: "dial", Net: network, Source: __goscriptLiteralField10, Addr: __goscriptLiteralField11, Err: err}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	return [c, null]
}

export async function ListenIP(network: string, laddr: IPAddr | $.VarRef<IPAddr> | null): globalThis.Promise<[IPConn | $.VarRef<IPConn> | null, $.GoError]> {
	if (laddr == null) {
		laddr = new IPAddr()
	}
	let sl: __goscript_dial.sysListener | $.VarRef<__goscript_dial.sysListener> | null = (() => { const __goscriptLiteralField12 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as IPAddr).String() : IPAddr.prototype.String.call(laddr)); return new __goscript_dial.sysListener({network: network, address: __goscriptLiteralField12}) })()
	let __goscriptTuple9: any = await (sl !== null && (sl as any).__isVarRef !== true && (sl as any).__goValue === undefined ? ((sl as any) as __goscript_dial.sysListener).listenIP(context.Background(), laddr) : __goscript_dial.sysListener.prototype.listenIP.call(sl, context.Background(), laddr))
	let c: IPConn | $.VarRef<IPConn> | null = __goscriptTuple9[0]
	let err = __goscriptTuple9[1]
	if (err != null) {
		return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField13 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as IPAddr).opAddr() : IPAddr.prototype.opAddr.call(laddr)); return new __goscript_net.OpError({Op: "listen", Net: network, Source: null, Addr: __goscriptLiteralField13, Err: err}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	return [c, null]
}
