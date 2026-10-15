// Generated file based on tcpsock.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as strconv from "@goscript/internal/strconv/index.js"

import * as io from "@goscript/io/index.js"

import * as netip from "@goscript/net/netip/index.js"

import * as os from "@goscript/os/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as time from "@goscript/time/index.js"

import * as poll from "@goscript/internal/poll/index.js"

import * as singleflight from "@goscript/internal/singleflight/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import type * as dnsmessage from "@goscript/vendor/golang.org/x/net/dns/dnsmessage/index.js"

import * as __goscript__interface from "./interface.gs.ts"

import * as __goscript_dial from "./dial.gs.ts"

import type * as __goscript_dnsclient from "./dnsclient.gs.ts"

import * as __goscript_dnsclient_unix from "./dnsclient_unix.gs.ts"

import type * as __goscript_dnsconfig from "./dnsconfig.gs.ts"

import * as __goscript_fd_fake from "./fd_fake.gs.ts"

import * as __goscript_fd_js from "./fd_js.gs.ts"

import * as __goscript_hook from "./hook.gs.ts"

import * as __goscript_ip from "./ip.gs.ts"

import type * as __goscript_iprawsock from "./iprawsock.gs.ts"

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

import * as __goscript_sendfile_stub from "./sendfile_stub.gs.ts"

import * as __goscript_sockaddr_posix from "./sockaddr_posix.gs.ts"

import * as __goscript_sockopt_fake from "./sockopt_fake.gs.ts"

import * as __goscript_splice_stub from "./splice_stub.gs.ts"

import * as __goscript_tcpsock_posix from "./tcpsock_posix.gs.ts"

import * as __goscript_tcpsock_unix from "./tcpsock_unix.gs.ts"

import * as __goscript_tcpsockopt_stub from "./tcpsockopt_stub.gs.ts"

import type * as __goscript_udpsock from "./udpsock.gs.ts"

import * as __goscript_udpsock_posix from "./udpsock_posix.gs.ts"

import type * as __goscript_unixsock from "./unixsock.gs.ts"

import * as __goscript_unixsock_posix from "./unixsock_posix.gs.ts"
import "@goscript/context/index.js"
import "@goscript/internal/strconv/index.js"
import "@goscript/io/index.js"
import "@goscript/net/netip/index.js"
import "@goscript/os/index.js"
import "@goscript/syscall/index.js"
import "@goscript/time/index.js"
import "@goscript/internal/poll/index.js"
import "@goscript/internal/singleflight/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "./interface.gs.ts"
import "./dial.gs.ts"
import "./dnsclient_unix.gs.ts"
import "./fd_fake.gs.ts"
import "./fd_js.gs.ts"
import "./hook.gs.ts"
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
import "./sendfile_stub.gs.ts"
import "./sockaddr_posix.gs.ts"
import "./sockopt_fake.gs.ts"
import "./splice_stub.gs.ts"
import "./tcpsock_posix.gs.ts"
import "./tcpsock_unix.gs.ts"
import "./tcpsockopt_stub.gs.ts"
import "./udpsock_posix.gs.ts"
import "./unixsock_posix.gs.ts"

export class TCPAddr {
	public get IP(): __goscript_ip.IP {
		return this._fields.IP
	}

	public set IP(value: __goscript_ip.IP) {
		this._fields.IP = value
	}

	public get Port(): number {
		return this._fields.Port
	}

	public set Port(value: number) {
		this._fields.Port = value
	}

	public get Zone(): string {
		return this._fields.Zone
	}

	public set Zone(value: string) {
		this._fields.Zone = value
	}

	public _fields: {
		IP: __goscript_ip.IP
		Port: number
		Zone: string
	}

	constructor(init?: Partial<{IP?: __goscript_ip.IP, Port?: number, Zone?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			IP: init?.IP ?? (null! as __goscript_ip.IP),
			Port: init?.Port ?? (0 as number),
			Zone: init?.Zone ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TCPAddr {
		return new TCPAddr(this, true)
	}

	public __goscriptAssign(source: TCPAddr): void {
		const target = this._fields
		const values = source._fields
		target.IP = values.IP
		target.Port = values.Port
		target.Zone = values.Zone
	}

	public AddrPort(): netip.AddrPort {
		const a: TCPAddr | $.VarRef<TCPAddr> | null = this;
		const a$: TCPAddr = a == null ? $.pointerTarget<TCPAddr>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<TCPAddr>(a)
		if (a == null) {
			return new netip.AddrPort(undefined, true)
		}
		let [na, ] = netip.AddrFromSlice((a$ as TCPAddr).IP)
		na = $.assignStruct(na, $.markAsStructValue($.cloneStructValue(na)).WithZone((a$ as TCPAddr).Zone))
		return netip.AddrPortFrom(na, $.uint((a$ as TCPAddr).Port, 16))
	}

	public Network(): string {
		const a: TCPAddr | $.VarRef<TCPAddr> | null = this;
		return "tcp"
	}

	public String(): string {
		const a: TCPAddr | $.VarRef<TCPAddr> | null = this;
		const a$: TCPAddr = a == null ? $.pointerTarget<TCPAddr>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<TCPAddr>(a)
		if (a == null) {
			return "<nil>"
		}
		let ip = __goscript_ip.ipEmptyString(((a$ as TCPAddr).IP as __goscript_ip.IP))
		if (!$.stringEqual((a$ as TCPAddr).Zone, "")) {
			return __goscript_ipsock.JoinHostPort($.concatString(($.concatString(ip, "%")), (a$ as TCPAddr).Zone), strconv.Itoa((a$ as TCPAddr).Port))
		}
		return __goscript_ipsock.JoinHostPort(ip, strconv.Itoa((a$ as TCPAddr).Port))
	}

	public family(): number {
		const a: TCPAddr | $.VarRef<TCPAddr> | null = this;
		const a$: TCPAddr = a == null ? $.pointerTarget<TCPAddr>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<TCPAddr>(a)
		if ((a == null) || ($.sliceLen(((a$ as TCPAddr).IP as __goscript_ip.IP)) <= 4)) {
			return 2
		}
		if (__goscript_ip.IP_To4((a$ as TCPAddr).IP) != null) {
			return 2
		}
		return 3
	}

	public isWildcard(): boolean {
		const a: TCPAddr | $.VarRef<TCPAddr> | null = this;
		const a$: TCPAddr = a == null ? $.pointerTarget<TCPAddr>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<TCPAddr>(a)
		if ((a == null) || ((a$ as TCPAddr).IP == null)) {
			return true
		}
		return __goscript_ip.IP_IsUnspecified((a$ as TCPAddr).IP)
	}

	public opAddr(): __goscript_net.Addr | null {
		const a: TCPAddr | $.VarRef<TCPAddr> | null = this;
		if (a == null) {
			return null
		}
		return $.interfaceValue<__goscript_net.Addr | null>(a, "*net.TCPAddr", /* @__PURE__ */ $.pointerType("net.TCPAddr"))
	}

	public async sockaddr(family: number): globalThis.Promise<[syscall.Sockaddr | null, $.GoError]> {
		const a: TCPAddr | $.VarRef<TCPAddr> | null = this;
		const a$: TCPAddr = a == null ? $.pointerTarget<TCPAddr>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<TCPAddr>(a)
		if (a == null) {
			return [null, null]
		}
		return __goscript_ipsock_posix.ipToSockaddr(family, ((a$ as TCPAddr).IP as __goscript_ip.IP), (a$ as TCPAddr).Port, (a$ as TCPAddr).Zone)
	}

	public toLocal(net: string): __goscript_sockaddr_posix.sockaddr | null {
		const a: TCPAddr | $.VarRef<TCPAddr> | null = this;
		const a$: TCPAddr = a == null ? $.pointerTarget<TCPAddr>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<TCPAddr>(a)
		return $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>((() => { const __goscriptLiteralField0 = (__goscript_ipsock.loopbackIP(net) as __goscript_ip.IP); return new TCPAddr({IP: __goscriptLiteralField0, Port: (a$ as TCPAddr).Port, Zone: (a$ as TCPAddr).Zone}) })(), "*net.TCPAddr", /* @__PURE__ */ $.pointerType("net.TCPAddr"))
	}

	static __typeInfo = $.registerStructType(
		"net.TCPAddr",
		() => new TCPAddr(),
		() => [$.methodSignature("AddrPort", [], ["netip.AddrPort"], true), $.methodSignature("Network", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("family", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("isWildcard", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("opAddr", [], ["net.Addr"], true), $.methodSignature("sockaddr", [["family", /* @__PURE__ */ $.basicType("int")]], ["syscall.Sockaddr", "error"], true), $.methodSignature("toLocal", [["net", /* @__PURE__ */ $.basicType("string")]], ["net.sockaddr"], true)],
		TCPAddr,
		() => [/* @__PURE__ */ $.structField("IP", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"), [0], 0, true), /* @__PURE__ */ $.structField("Port", /* @__PURE__ */ $.basicType("int"), [1], 24, true), /* @__PURE__ */ $.structField("Zone", /* @__PURE__ */ $.basicType("string"), [2], 32, true)]
	)
}

export class TCPConn {
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

	public clone(): TCPConn {
		return new TCPConn(this, true)
	}

	public __goscriptAssign(source: TCPConn): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.conn, values.conn)
	}

	public async CloseRead(): globalThis.Promise<$.GoError> {
		const c: TCPConn | $.VarRef<TCPConn> | null = this;
		const c$: TCPConn = c == null ? $.pointerTarget<TCPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<TCPConn>(c)
		if (!(c$ as TCPConn).conn.ok()) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		{
			let err = await __goscript_fd_fake.netFD.prototype.closeRead.call((c$ as TCPConn).conn.fd)
			if (err != null) {
				return $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "close", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
			}
		}
		return null
	}

	public async CloseWrite(): globalThis.Promise<$.GoError> {
		const c: TCPConn | $.VarRef<TCPConn> | null = this;
		const c$: TCPConn = c == null ? $.pointerTarget<TCPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<TCPConn>(c)
		if (!(c$ as TCPConn).conn.ok()) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		{
			let err = await __goscript_fd_fake.netFD.prototype.closeWrite.call((c$ as TCPConn).conn.fd)
			if (err != null) {
				return $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "close", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
			}
		}
		return null
	}

	public MultipathTCP(): [boolean, $.GoError] {
		const c: TCPConn | $.VarRef<TCPConn> | null = this;
		if (!$.pointerValue<TCPConn>(c).conn.ok()) {
			return [false, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		return [__goscript_mptcpsock_stub.isUsingMultipathTCP($.pointerValue<TCPConn>(c).conn.fd), null]
	}

	public async ReadFrom(r: io.Reader | null): globalThis.Promise<[bigint, $.GoError]> {
		const c: TCPConn | $.VarRef<TCPConn> | null = this;
		const c$: TCPConn = c == null ? $.pointerTarget<TCPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<TCPConn>(c)
		if (!(c$ as TCPConn).conn.ok()) {
			return [0n, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let [n, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as TCPConn).readFrom(r) : TCPConn.prototype.readFrom.call(c, r))
		if ((err != null) && (!$.comparableEqual(err, io.EOF))) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "readfrom", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, err]
	}

	public SetKeepAlive(keepalive: boolean): $.GoError {
		const c: TCPConn | $.VarRef<TCPConn> | null = this;
		const c$: TCPConn = c == null ? $.pointerTarget<TCPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<TCPConn>(c)
		if (!(c$ as TCPConn).conn.ok()) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		{
			let err = __goscript_sockopt_fake.setKeepAlive((c$ as TCPConn).conn.fd, keepalive)
			if (err != null) {
				return $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "set", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
			}
		}
		return null
	}

	public SetKeepAliveConfig(config: KeepAliveConfig): $.GoError {
		const c: TCPConn | $.VarRef<TCPConn> | null = this;
		const c$: TCPConn = c == null ? $.pointerTarget<TCPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<TCPConn>(c)
		if (!(c$ as TCPConn).conn.ok()) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}

		{
			let err = __goscript_sockopt_fake.setKeepAlive((c$ as TCPConn).conn.fd, config.Enable)
			if (err != null) {
				return $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "set", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
			}
		}
		{
			let err = __goscript_tcpsockopt_stub.setKeepAliveIdle((c$ as TCPConn).conn.fd, config.Idle)
			if (err != null) {
				return $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "set", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
			}
		}
		{
			let err = __goscript_tcpsockopt_stub.setKeepAliveInterval((c$ as TCPConn).conn.fd, config.Interval)
			if (err != null) {
				return $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "set", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
			}
		}
		{
			let err = __goscript_tcpsockopt_stub.setKeepAliveCount((c$ as TCPConn).conn.fd, config.Count)
			if (err != null) {
				return $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "set", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
			}
		}

		return null
	}

	public SetKeepAlivePeriod(d: time.Duration): $.GoError {
		const c: TCPConn | $.VarRef<TCPConn> | null = this;
		const c$: TCPConn = c == null ? $.pointerTarget<TCPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<TCPConn>(c)
		if (!(c$ as TCPConn).conn.ok()) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		{
			let err = __goscript_tcpsockopt_stub.setKeepAliveIdle((c$ as TCPConn).conn.fd, d)
			if (err != null) {
				return $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "set", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
			}
		}
		return null
	}

	public async SetLinger(sec: number): globalThis.Promise<$.GoError> {
		const c: TCPConn | $.VarRef<TCPConn> | null = this;
		const c$: TCPConn = c == null ? $.pointerTarget<TCPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<TCPConn>(c)
		if (!(c$ as TCPConn).conn.ok()) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		{
			let err = await __goscript_sockopt_fake.setLinger((c$ as TCPConn).conn.fd, sec)
			if (err != null) {
				return $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "set", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
			}
		}
		return null
	}

	public SetNoDelay(noDelay: boolean): $.GoError {
		const c: TCPConn | $.VarRef<TCPConn> | null = this;
		const c$: TCPConn = c == null ? $.pointerTarget<TCPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<TCPConn>(c)
		if (!(c$ as TCPConn).conn.ok()) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		{
			let err = __goscript_tcpsockopt_stub.setNoDelay((c$ as TCPConn).conn.fd, noDelay)
			if (err != null) {
				return $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "set", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
			}
		}
		return null
	}

	public SyscallConn(): [syscall.RawConn | null, $.GoError] {
		const c: TCPConn | $.VarRef<TCPConn> | null = this;
		if (!$.pointerValue<TCPConn>(c).conn.ok()) {
			return [null, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		return [$.interfaceValue<syscall.RawConn | null>(__goscript_rawconn.newRawConn($.pointerValue<TCPConn>(c).conn.fd), "*net.rawConn", /* @__PURE__ */ $.pointerType("net.rawConn")), null]
	}

	public async WriteTo(w: io.Writer | null): globalThis.Promise<[bigint, $.GoError]> {
		const c: TCPConn | $.VarRef<TCPConn> | null = this;
		const c$: TCPConn = c == null ? $.pointerTarget<TCPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<TCPConn>(c)
		if (!(c$ as TCPConn).conn.ok()) {
			return [0n, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let [n, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as TCPConn).writeTo(w) : TCPConn.prototype.writeTo.call(c, w))
		if ((err != null) && (!$.comparableEqual(err, io.EOF))) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "writeto", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as TCPConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, err]
	}

	public async readFrom(r: io.Reader | null): globalThis.Promise<[bigint, $.GoError]> {
		const c: TCPConn | $.VarRef<TCPConn> | null = this;
		const c$: TCPConn = c == null ? $.pointerTarget<TCPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<TCPConn>(c)
		{
			let [n, err, handled] = __goscript_splice_stub.spliceFrom((c$ as TCPConn).conn.fd, r)
			if (handled) {
				return [n, err]
			}
		}
		{
			let [n, err, handled] = __goscript_sendfile_stub.sendFile((c$ as TCPConn).conn.fd, r)
			if (handled) {
				return [n, err]
			}
		}
		return __goscript_net.genericReadFrom(c, r)
	}

	public async writeTo(w: io.Writer | null): globalThis.Promise<[bigint, $.GoError]> {
		const c: TCPConn | $.VarRef<TCPConn> | null = this;
		{
			let [n, err, handled] = __goscript_splice_stub.spliceTo(w, $.pointerValue<TCPConn>(c).conn.fd)
			if (handled) {
				return [n, err]
			}
		}
		return __goscript_net.genericWriteTo(c, w)
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
		"net.TCPConn",
		() => new TCPConn(),
		() => [$.methodSignature("CloseRead", [], ["error"], true), $.methodSignature("CloseWrite", [], ["error"], true), $.methodSignature("MultipathTCP", [], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("ReadFrom", [["r", "io.Reader"]], [/* @__PURE__ */ $.basicType("int64"), "error"], true), $.methodSignature("SetKeepAlive", [["keepalive", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("SetKeepAliveConfig", [["config", "net.KeepAliveConfig"]], ["error"], true), $.methodSignature("SetKeepAlivePeriod", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["error"], true), $.methodSignature("SetLinger", [["sec", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetNoDelay", [["noDelay", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("SyscallConn", [], ["syscall.RawConn", "error"], true), $.methodSignature("WriteTo", [["w", "io.Writer"]], [/* @__PURE__ */ $.basicType("int64"), "error"], true), $.methodSignature("readFrom", [["r", "io.Reader"]], [/* @__PURE__ */ $.basicType("int64"), "error"], true), $.methodSignature("writeTo", [["w", "io.Writer"]], [/* @__PURE__ */ $.basicType("int64"), "error"], true), $.methodSignature("Close", [], ["error"], true), $.methodSignature("File", [], [["f", /* @__PURE__ */ $.pointerType("os.File")], ["err", "error"]], true), $.methodSignature("LocalAddr", [], ["net.Addr"], true), $.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("RemoteAddr", [], ["net.Addr"], true), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetReadBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetWriteBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		TCPConn,
		() => [/* @__PURE__ */ $.structField("conn", "net.conn", [0], 0, false, { pkgPath: "net", anonymous: true })]
	)
}

export class KeepAliveConfig {
	// If Enable is true, keep-alive probes are enabled.
	public get Enable(): boolean {
		return this._fields.Enable
	}

	public set Enable(value: boolean) {
		this._fields.Enable = value
	}

	// Idle is the time that the connection must be idle before
	// the first keep-alive probe is sent.
	// If zero, a default value of 15 seconds is used.
	public get Idle(): time.Duration {
		return this._fields.Idle
	}

	public set Idle(value: time.Duration) {
		this._fields.Idle = value
	}

	// Interval is the time between keep-alive probes.
	// If zero, a default value of 15 seconds is used.
	public get Interval(): time.Duration {
		return this._fields.Interval
	}

	public set Interval(value: time.Duration) {
		this._fields.Interval = value
	}

	// Count is the maximum number of keep-alive probes that
	// can go unanswered before dropping a connection.
	// If zero, a default value of 9 is used.
	public get Count(): number {
		return this._fields.Count
	}

	public set Count(value: number) {
		this._fields.Count = value
	}

	public _fields: {
		Enable: boolean
		Idle: time.Duration
		Interval: time.Duration
		Count: number
	}

	constructor(init?: Partial<{Enable?: boolean, Idle?: time.Duration, Interval?: time.Duration, Count?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Enable: init?.Enable ?? (false as boolean),
			Idle: init?.Idle ?? (0n as time.Duration),
			Interval: init?.Interval ?? (0n as time.Duration),
			Count: init?.Count ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): KeepAliveConfig {
		return new KeepAliveConfig(this, true)
	}

	public __goscriptAssign(source: KeepAliveConfig): void {
		const target = this._fields
		const values = source._fields
		target.Enable = values.Enable
		target.Idle = values.Idle
		target.Interval = values.Interval
		target.Count = values.Count
	}

	static __typeInfo = $.registerStructType(
		"net.KeepAliveConfig",
		() => new KeepAliveConfig(),
		() => [],
		KeepAliveConfig,
		() => [/* @__PURE__ */ $.structField("Enable", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("Idle", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 8, true), /* @__PURE__ */ $.structField("Interval", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 16, true), /* @__PURE__ */ $.structField("Count", /* @__PURE__ */ $.basicType("int"), [3], 24, true)]
	)
}

export class TCPListener {
	public get fd(): __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null {
		return this._fields.fd
	}

	public set fd(value: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null) {
		this._fields.fd = value
	}

	public get lc(): __goscript_dial.ListenConfig {
		return this._fields.lc
	}

	public set lc(value: __goscript_dial.ListenConfig) {
		this._fields.lc = value
	}

	public _fields: {
		fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null
		lc: __goscript_dial.ListenConfig
	}

	constructor(init?: Partial<{fd?: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null, lc?: __goscript_dial.ListenConfig}>, __goscriptValue?: boolean) {
		this._fields = {
			fd: init?.fd ?? (null! as __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null),
			lc: init?.lc ? init.lc.clone() : new __goscript_dial.ListenConfig(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TCPListener {
		return new TCPListener(this, true)
	}

	public __goscriptAssign(source: TCPListener): void {
		const target = this._fields
		const values = source._fields
		target.fd = values.fd
		$.assignStruct(target.lc, values.lc)
	}

	public async Accept(): globalThis.Promise<[__goscript_net.Conn | null, $.GoError]> {
		const l: TCPListener | $.VarRef<TCPListener> | null = this;
		const l$: TCPListener = l == null ? $.pointerTarget<TCPListener>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<TCPListener>(l)
		if (!(l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as TCPListener).ok() : TCPListener.prototype.ok.call(l))) {
			return [null, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple3: any = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as TCPListener).accept() : TCPListener.prototype.accept.call(l))
		let c: TCPConn | $.VarRef<TCPConn> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err != null) {
			return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "accept", Net: $.pointerValue<__goscript_fd_fake.netFD>((l$ as TCPListener).fd).net, Source: null, Addr: $.pointerValue<__goscript_fd_fake.netFD>((l$ as TCPListener).fd).laddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
		}
		return [$.interfaceValue<__goscript_net.Conn | null>(c, "*net.TCPConn", /* @__PURE__ */ $.pointerType("net.TCPConn")), null]
	}

	public async AcceptTCP(): globalThis.Promise<[TCPConn | $.VarRef<TCPConn> | null, $.GoError]> {
		const l: TCPListener | $.VarRef<TCPListener> | null = this;
		const l$: TCPListener = l == null ? $.pointerTarget<TCPListener>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<TCPListener>(l)
		if (!(l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as TCPListener).ok() : TCPListener.prototype.ok.call(l))) {
			return [null, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple4: any = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as TCPListener).accept() : TCPListener.prototype.accept.call(l))
		let c: TCPConn | $.VarRef<TCPConn> | null = __goscriptTuple4[0]
		let err = __goscriptTuple4[1]
		if (err != null) {
			return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "accept", Net: $.pointerValue<__goscript_fd_fake.netFD>((l$ as TCPListener).fd).net, Source: null, Addr: $.pointerValue<__goscript_fd_fake.netFD>((l$ as TCPListener).fd).laddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
		}
		return [c, null]
	}

	public Addr(): __goscript_net.Addr | null {
		const l: TCPListener | $.VarRef<TCPListener> | null = this;
		return $.pointerValue<__goscript_fd_fake.netFD>($.pointerValue<TCPListener>(l).fd).laddr
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const l: TCPListener | $.VarRef<TCPListener> | null = this;
		const l$: TCPListener = l == null ? $.pointerTarget<TCPListener>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<TCPListener>(l)
		if (!(l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as TCPListener).ok() : TCPListener.prototype.ok.call(l))) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		{
			let err = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as TCPListener).close() : TCPListener.prototype.close.call(l))
			if (err != null) {
				return $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "close", Net: $.pointerValue<__goscript_fd_fake.netFD>((l$ as TCPListener).fd).net, Source: null, Addr: $.pointerValue<__goscript_fd_fake.netFD>((l$ as TCPListener).fd).laddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
			}
		}
		return null
	}

	public File(): [os.File | $.VarRef<os.File> | null, $.GoError] {
		const l: TCPListener | $.VarRef<TCPListener> | null = this;
		let f: os.File | $.VarRef<os.File> | null = null! as os.File | $.VarRef<os.File> | null
		let err: $.GoError = null! as $.GoError
		const l$: TCPListener = l == null ? $.pointerTarget<TCPListener>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<TCPListener>(l)
		if (!(l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as TCPListener).ok() : TCPListener.prototype.ok.call(l))) {
			return [null, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple5: any = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as TCPListener).file() : TCPListener.prototype.file.call(l))
		f = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "file", Net: $.pointerValue<__goscript_fd_fake.netFD>((l$ as TCPListener).fd).net, Source: null, Addr: $.pointerValue<__goscript_fd_fake.netFD>((l$ as TCPListener).fd).laddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
		}
		return [f, err]
	}

	public async SetDeadline(t: time.Time): globalThis.Promise<$.GoError> {
		const l: TCPListener | $.VarRef<TCPListener> | null = this;
		if (!(l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as TCPListener).ok() : TCPListener.prototype.ok.call(l))) {
			return $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))
		}
		return __goscript_fd_fake.netFD.prototype.SetDeadline.call($.pointerValue<TCPListener>(l).fd, t)
	}

	public SyscallConn(): [syscall.RawConn | null, $.GoError] {
		const l: TCPListener | $.VarRef<TCPListener> | null = this;
		if (!(l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as TCPListener).ok() : TCPListener.prototype.ok.call(l))) {
			return [null, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		return [$.interfaceValue<syscall.RawConn | null>(__goscript_rawconn.newRawListener($.pointerValue<TCPListener>(l).fd), "*net.rawListener", /* @__PURE__ */ $.pointerType("net.rawListener")), null]
	}

	public async accept(): globalThis.Promise<[TCPConn | $.VarRef<TCPConn> | null, $.GoError]> {
		const ln: TCPListener | $.VarRef<TCPListener> | null = this;
		const ln$: TCPListener = ln == null ? $.pointerTarget<TCPListener>(ln) : (ln as any).__isVarRef === true ? (ln as any).value : (ln as any).__goValue === undefined ? (ln as any) : $.pointerTarget<TCPListener>(ln)
		let __goscriptTuple6: any = await __goscript_fd_fake.netFD.prototype.accept.call((ln$ as TCPListener).fd)
		let fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null = __goscriptTuple6[0]
		let err = __goscriptTuple6[1]
		if (err != null) {
			return [null, err]
		}
		return [await newTCPConn(fd, (ln$ as TCPListener).lc.KeepAlive, ((ln$ as TCPListener).lc.KeepAliveConfig).clone(), __goscript_hook.__goscript_get_testPreHookSetKeepAlive(), __goscript_hook.__goscript_get_testHookSetKeepAlive()), null]
	}

	public async close(): globalThis.Promise<$.GoError> {
		const ln: TCPListener | $.VarRef<TCPListener> | null = this;
		return __goscript_fd_fake.netFD.prototype.Close.call($.pointerValue<TCPListener>(ln).fd)
	}

	public file(): [os.File | $.VarRef<os.File> | null, $.GoError] {
		const ln: TCPListener | $.VarRef<TCPListener> | null = this;
		let __goscriptTuple7: any = $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>($.pointerValue<TCPListener>(ln).fd).fakeNetFD).dup()
		let f: os.File | $.VarRef<os.File> | null = __goscriptTuple7[0]
		let err = __goscriptTuple7[1]
		if (err != null) {
			return [null, err]
		}
		return [f, null]
	}

	public ok(): boolean {
		const ln: TCPListener | $.VarRef<TCPListener> | null = this;
		return (ln != null) && ($.pointerValue<TCPListener>(ln).fd != null)
	}

	static __typeInfo = $.registerStructType(
		"net.TCPListener",
		() => new TCPListener(),
		() => [$.methodSignature("Accept", [], ["net.Conn", "error"], true), $.methodSignature("AcceptTCP", [], [/* @__PURE__ */ $.pointerType("net.TCPConn"), "error"], true), $.methodSignature("Addr", [], ["net.Addr"], true), $.methodSignature("Close", [], ["error"], true), $.methodSignature("File", [], [["f", /* @__PURE__ */ $.pointerType("os.File")], ["err", "error"]], true), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SyscallConn", [], ["syscall.RawConn", "error"], true), $.methodSignature("accept", [], [/* @__PURE__ */ $.pointerType("net.TCPConn"), "error"], true), $.methodSignature("close", [], ["error"], true), $.methodSignature("file", [], [/* @__PURE__ */ $.pointerType("os.File"), "error"], true), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		TCPListener,
		() => [/* @__PURE__ */ $.structField("fd", /* @__PURE__ */ $.pointerType("net.netFD"), [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("lc", "net.ListenConfig", [1], 8, false, { pkgPath: "net" })]
	)
}

export async function ResolveTCPAddr(network: string, address: string): globalThis.Promise<[TCPAddr | $.VarRef<TCPAddr> | null, $.GoError]> {
	switch (network) {
		case "tcp":
		case "tcp4":
		case "tcp6":
		{
			break
		}
		case "":
		{
			network = "tcp"
			break
		}
		default:
		{
			return [null, $.namedValueInterfaceValue<$.GoError>(network, "net.UnknownNetworkError", {"Error": __goscript_net.UnknownNetworkError_Error}, /* @__PURE__ */ $.basicType("string", "net.UnknownNetworkError"))]
			break
		}
	}
	let __goscriptTuple0: any = await __goscript_lookup.Resolver.prototype.internetAddrList.call(__goscript_lookup.DefaultResolver, context.Background(), network, address)
	let addrs: __goscript_ipsock.addrList = (__goscriptTuple0[0] as __goscript_ipsock.addrList)
	let err = __goscriptTuple0[1]
	if (err != null) {
		return [null, err]
	}
	return [$.mustTypeAssert<TCPAddr | $.VarRef<TCPAddr> | null>(await __goscript_ipsock.addrList_forResolve(addrs, network, address), /* @__PURE__ */ $.pointerType("net.TCPAddr")), null]
}

export function TCPAddrFromAddrPort(addr: netip.AddrPort): TCPAddr | $.VarRef<TCPAddr> | null {
	return (() => { const __goscriptLiteralField1 = ($.markAsStructValue($.cloneStructValue(addr.Addr())).AsSlice() as __goscript_ip.IP); const __goscriptLiteralField2 = $.markAsStructValue($.cloneStructValue(addr.Addr())).Zone(); const __goscriptLiteralField3 = $.int(addr.Port()); return new TCPAddr({IP: __goscriptLiteralField1, Zone: __goscriptLiteralField2, Port: __goscriptLiteralField3}) })()
}

export async function newTCPConn(fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null, keepAliveIdle: time.Duration, keepAliveCfg: KeepAliveConfig, preKeepAliveHook: ((_p0: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null) => void) | null, keepAliveHook: ((_p0: KeepAliveConfig) => void) | null): globalThis.Promise<TCPConn | $.VarRef<TCPConn> | null> {
	__goscript_tcpsockopt_stub.setNoDelay(fd, true)
	if (!keepAliveCfg.Enable && (keepAliveIdle >= 0n)) {
		keepAliveCfg = $.assignStruct(keepAliveCfg, new KeepAliveConfig({Enable: true, Idle: keepAliveIdle}, true))
	}
	let c: TCPConn | $.VarRef<TCPConn> | null = new TCPConn({conn: new __goscript_net.conn({fd: fd}, true)})
	if (keepAliveCfg.Enable) {
		if (preKeepAliveHook != null) {
			void (__goscriptAwait = preKeepAliveHook!(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as TCPConn).SetKeepAliveConfig(keepAliveCfg) : TCPConn.prototype.SetKeepAliveConfig.call(c, keepAliveCfg))
		if (keepAliveHook != null) {
			void (__goscriptAwait = keepAliveHook!((keepAliveCfg).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return c
}

export async function DialTCP(network: string, laddr: TCPAddr | $.VarRef<TCPAddr> | null, raddr: TCPAddr | $.VarRef<TCPAddr> | null): globalThis.Promise<[TCPConn | $.VarRef<TCPConn> | null, $.GoError]> {
	return dialTCP(context.Background(), null, network, laddr, raddr)
}

export async function dialTCP(ctx: context.Context | null, dialer: __goscript_dial.Dialer | $.VarRef<__goscript_dial.Dialer> | null, network: string, laddr: TCPAddr | $.VarRef<TCPAddr> | null, raddr: TCPAddr | $.VarRef<TCPAddr> | null): globalThis.Promise<[TCPConn | $.VarRef<TCPConn> | null, $.GoError]> {
	switch (network) {
		case "tcp":
		case "tcp4":
		case "tcp6":
		{
			break
		}
		default:
		{
			return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField4 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as TCPAddr).opAddr() : TCPAddr.prototype.opAddr.call(laddr)); const __goscriptLiteralField5 = (raddr !== null && (raddr as any).__isVarRef !== true && (raddr as any).__goValue === undefined ? ((raddr as any) as TCPAddr).opAddr() : TCPAddr.prototype.opAddr.call(raddr)); return new __goscript_net.OpError({Op: "dial", Net: network, Source: __goscriptLiteralField4, Addr: __goscriptLiteralField5, Err: $.namedValueInterfaceValue<$.GoError>(network, "net.UnknownNetworkError", {"Error": __goscript_net.UnknownNetworkError_Error}, /* @__PURE__ */ $.basicType("string", "net.UnknownNetworkError"))}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
			break
		}
	}
	if (raddr == null) {
		return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField6 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as TCPAddr).opAddr() : TCPAddr.prototype.opAddr.call(laddr)); return new __goscript_net.OpError({Op: "dial", Net: network, Source: __goscriptLiteralField6, Addr: null, Err: __goscript_net.errMissingAddress}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	let sd: __goscript_dial.sysDialer | $.VarRef<__goscript_dial.sysDialer> | null = (() => { const __goscriptLiteralField7 = (raddr !== null && (raddr as any).__isVarRef !== true && (raddr as any).__goValue === undefined ? ((raddr as any) as TCPAddr).String() : TCPAddr.prototype.String.call(raddr)); return new __goscript_dial.sysDialer({network: network, address: __goscriptLiteralField7}) })()
	let c: TCPConn | $.VarRef<TCPConn> | null = null! as TCPConn | $.VarRef<TCPConn> | null
	let err: $.GoError = null! as $.GoError
	if (dialer != null) {
		$.assignStruct($.pointerValue<__goscript_dial.sysDialer>(sd).Dialer, $.pointerValue<__goscript_dial.Dialer>(dialer))
	}
	if ($.pointerValue<__goscript_dial.sysDialer>(sd).Dialer.MultipathTCP()) {
		let __goscriptTuple1: any = await (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as __goscript_dial.sysDialer).dialMPTCP(ctx, laddr, raddr) : __goscript_dial.sysDialer.prototype.dialMPTCP.call(sd, ctx, laddr, raddr))
		c = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
	} else {
		let __goscriptTuple2: any = await (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as __goscript_dial.sysDialer).dialTCP(ctx, laddr, raddr) : __goscript_dial.sysDialer.prototype.dialTCP.call(sd, ctx, laddr, raddr))
		c = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
	}
	if (err != null) {
		return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField8 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as TCPAddr).opAddr() : TCPAddr.prototype.opAddr.call(laddr)); const __goscriptLiteralField9 = (raddr !== null && (raddr as any).__isVarRef !== true && (raddr as any).__goValue === undefined ? ((raddr as any) as TCPAddr).opAddr() : TCPAddr.prototype.opAddr.call(raddr)); return new __goscript_net.OpError({Op: "dial", Net: network, Source: __goscriptLiteralField8, Addr: __goscriptLiteralField9, Err: err}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	return [c, null]
}

export async function ListenTCP(network: string, laddr: TCPAddr | $.VarRef<TCPAddr> | null): globalThis.Promise<[TCPListener | $.VarRef<TCPListener> | null, $.GoError]> {
	switch (network) {
		case "tcp":
		case "tcp4":
		case "tcp6":
		{
			break
		}
		default:
		{
			return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField10 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as TCPAddr).opAddr() : TCPAddr.prototype.opAddr.call(laddr)); return new __goscript_net.OpError({Op: "listen", Net: network, Source: null, Addr: __goscriptLiteralField10, Err: $.namedValueInterfaceValue<$.GoError>(network, "net.UnknownNetworkError", {"Error": __goscript_net.UnknownNetworkError_Error}, /* @__PURE__ */ $.basicType("string", "net.UnknownNetworkError"))}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
			break
		}
	}
	if (laddr == null) {
		laddr = new TCPAddr()
	}
	let sl: __goscript_dial.sysListener | $.VarRef<__goscript_dial.sysListener> | null = (() => { const __goscriptLiteralField11 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as TCPAddr).String() : TCPAddr.prototype.String.call(laddr)); return new __goscript_dial.sysListener({network: network, address: __goscriptLiteralField11}) })()
	let ln: TCPListener | $.VarRef<TCPListener> | null = null! as TCPListener | $.VarRef<TCPListener> | null
	let err: $.GoError = null! as $.GoError
	if ($.pointerValue<__goscript_dial.sysListener>(sl).ListenConfig.MultipathTCP()) {
		let __goscriptTuple8: any = await (sl !== null && (sl as any).__isVarRef !== true && (sl as any).__goValue === undefined ? ((sl as any) as __goscript_dial.sysListener).listenMPTCP(context.Background(), laddr) : __goscript_dial.sysListener.prototype.listenMPTCP.call(sl, context.Background(), laddr))
		ln = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
	} else {
		let __goscriptTuple9: any = await (sl !== null && (sl as any).__isVarRef !== true && (sl as any).__goValue === undefined ? ((sl as any) as __goscript_dial.sysListener).listenTCP(context.Background(), laddr) : __goscript_dial.sysListener.prototype.listenTCP.call(sl, context.Background(), laddr))
		ln = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
	}
	if (err != null) {
		return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField12 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as TCPAddr).opAddr() : TCPAddr.prototype.opAddr.call(laddr)); return new __goscript_net.OpError({Op: "listen", Net: network, Source: null, Addr: __goscriptLiteralField12, Err: err}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	return [ln, null]
}

export function roundDurationUp(d: time.Duration, to: time.Duration): time.Duration {
	return $.int64Div(($.int64Sub(($.int64Add(d, to)), 1n)), to)
}

var __goscriptAwait: any
