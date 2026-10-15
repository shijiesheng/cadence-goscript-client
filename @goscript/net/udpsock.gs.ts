// Generated file based on udpsock.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as strconv from "@goscript/internal/strconv/index.js"

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

import * as __goscript_sockaddr_posix from "./sockaddr_posix.gs.ts"

import * as __goscript_tcpsock from "./tcpsock.gs.ts"

import * as __goscript_tcpsock_posix from "./tcpsock_posix.gs.ts"

import type * as __goscript_tcpsock_unix from "./tcpsock_unix.gs.ts"

import * as __goscript_udpsock_posix from "./udpsock_posix.gs.ts"

import type * as __goscript_unixsock from "./unixsock.gs.ts"

import * as __goscript_unixsock_posix from "./unixsock_posix.gs.ts"
import "@goscript/context/index.js"
import "@goscript/internal/strconv/index.js"
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

export class UDPAddr {
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

	public clone(): UDPAddr {
		return new UDPAddr(this, true)
	}

	public __goscriptAssign(source: UDPAddr): void {
		const target = this._fields
		const values = source._fields
		target.IP = values.IP
		target.Port = values.Port
		target.Zone = values.Zone
	}

	public AddrPort(): netip.AddrPort {
		const a: UDPAddr | $.VarRef<UDPAddr> | null = this;
		const a$: UDPAddr = a == null ? $.pointerTarget<UDPAddr>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<UDPAddr>(a)
		if (a == null) {
			return new netip.AddrPort(undefined, true)
		}
		let [na, ] = netip.AddrFromSlice((a$ as UDPAddr).IP)
		na = $.assignStruct(na, $.markAsStructValue($.cloneStructValue(na)).WithZone((a$ as UDPAddr).Zone))
		return netip.AddrPortFrom(na, $.uint((a$ as UDPAddr).Port, 16))
	}

	public Network(): string {
		const a: UDPAddr | $.VarRef<UDPAddr> | null = this;
		return "udp"
	}

	public String(): string {
		const a: UDPAddr | $.VarRef<UDPAddr> | null = this;
		const a$: UDPAddr = a == null ? $.pointerTarget<UDPAddr>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<UDPAddr>(a)
		if (a == null) {
			return "<nil>"
		}
		let ip = __goscript_ip.ipEmptyString(((a$ as UDPAddr).IP as __goscript_ip.IP))
		if (!$.stringEqual((a$ as UDPAddr).Zone, "")) {
			return __goscript_ipsock.JoinHostPort($.concatString(($.concatString(ip, "%")), (a$ as UDPAddr).Zone), strconv.Itoa((a$ as UDPAddr).Port))
		}
		return __goscript_ipsock.JoinHostPort(ip, strconv.Itoa((a$ as UDPAddr).Port))
	}

	public family(): number {
		const a: UDPAddr | $.VarRef<UDPAddr> | null = this;
		const a$: UDPAddr = a == null ? $.pointerTarget<UDPAddr>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<UDPAddr>(a)
		if ((a == null) || ($.sliceLen(((a$ as UDPAddr).IP as __goscript_ip.IP)) <= 4)) {
			return 2
		}
		if (__goscript_ip.IP_To4((a$ as UDPAddr).IP) != null) {
			return 2
		}
		return 3
	}

	public isWildcard(): boolean {
		const a: UDPAddr | $.VarRef<UDPAddr> | null = this;
		const a$: UDPAddr = a == null ? $.pointerTarget<UDPAddr>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<UDPAddr>(a)
		if ((a == null) || ((a$ as UDPAddr).IP == null)) {
			return true
		}
		return __goscript_ip.IP_IsUnspecified((a$ as UDPAddr).IP)
	}

	public opAddr(): __goscript_net.Addr | null {
		const a: UDPAddr | $.VarRef<UDPAddr> | null = this;
		if (a == null) {
			return null
		}
		return $.interfaceValue<__goscript_net.Addr | null>(a, "*net.UDPAddr", /* @__PURE__ */ $.pointerType("net.UDPAddr"))
	}

	public async sockaddr(family: number): globalThis.Promise<[syscall.Sockaddr | null, $.GoError]> {
		const a: UDPAddr | $.VarRef<UDPAddr> | null = this;
		const a$: UDPAddr = a == null ? $.pointerTarget<UDPAddr>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<UDPAddr>(a)
		if (a == null) {
			return [null, null]
		}
		return __goscript_ipsock_posix.ipToSockaddr(family, ((a$ as UDPAddr).IP as __goscript_ip.IP), (a$ as UDPAddr).Port, (a$ as UDPAddr).Zone)
	}

	public toLocal(net: string): __goscript_sockaddr_posix.sockaddr | null {
		const a: UDPAddr | $.VarRef<UDPAddr> | null = this;
		const a$: UDPAddr = a == null ? $.pointerTarget<UDPAddr>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<UDPAddr>(a)
		return $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>((() => { const __goscriptLiteralField0 = (__goscript_ipsock.loopbackIP(net) as __goscript_ip.IP); return new UDPAddr({IP: __goscriptLiteralField0, Port: (a$ as UDPAddr).Port, Zone: (a$ as UDPAddr).Zone}) })(), "*net.UDPAddr", /* @__PURE__ */ $.pointerType("net.UDPAddr"))
	}

	static __typeInfo = $.registerStructType(
		"net.UDPAddr",
		() => new UDPAddr(),
		() => [$.methodSignature("AddrPort", [], ["netip.AddrPort"], true), $.methodSignature("Network", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("family", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("isWildcard", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("opAddr", [], ["net.Addr"], true), $.methodSignature("sockaddr", [["family", /* @__PURE__ */ $.basicType("int")]], ["syscall.Sockaddr", "error"], true), $.methodSignature("toLocal", [["net", /* @__PURE__ */ $.basicType("string")]], ["net.sockaddr"], true)],
		UDPAddr,
		() => [/* @__PURE__ */ $.structField("IP", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"), [0], 0, true), /* @__PURE__ */ $.structField("Port", /* @__PURE__ */ $.basicType("int"), [1], 24, true), /* @__PURE__ */ $.structField("Zone", /* @__PURE__ */ $.basicType("string"), [2], 32, true)]
	)
}

export class addrPortUDPAddr {
	public get AddrPort(): netip.AddrPort {
		return this._fields.AddrPort
	}

	public set AddrPort(value: netip.AddrPort) {
		this._fields.AddrPort = value
	}

	public _fields: {
		AddrPort: netip.AddrPort
	}

	constructor(init?: Partial<{AddrPort?: netip.AddrPort}>, __goscriptValue?: boolean) {
		this._fields = {
			AddrPort: init?.AddrPort ? init.AddrPort.clone() : new netip.AddrPort(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): addrPortUDPAddr {
		return new addrPortUDPAddr(this, true)
	}

	public __goscriptAssign(source: addrPortUDPAddr): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.AddrPort, values.AddrPort)
	}

	public Network(): string {
		return "udp"
	}

	public Addr(): any {
		return $.pointerValue<netip.AddrPort>(this.AddrPort).Addr()
	}

	public AppendBinary(b: any): any {
		return $.pointerValue<netip.AddrPort>(this.AddrPort).AppendBinary(b)
	}

	public AppendText(b: any): any {
		return $.pointerValue<netip.AddrPort>(this.AddrPort).AppendText(b)
	}

	public AppendTo(b: any): any {
		return $.pointerValue<netip.AddrPort>(this.AddrPort).AppendTo(b)
	}

	public Compare(p2: any): any {
		return $.pointerValue<netip.AddrPort>(this.AddrPort).Compare(p2)
	}

	public IsValid(): any {
		return $.pointerValue<netip.AddrPort>(this.AddrPort).IsValid()
	}

	public MarshalBinary(): any {
		return $.pointerValue<netip.AddrPort>(this.AddrPort).MarshalBinary()
	}

	public MarshalText(): any {
		return $.pointerValue<netip.AddrPort>(this.AddrPort).MarshalText()
	}

	public Port(): any {
		return $.pointerValue<netip.AddrPort>(this.AddrPort).Port()
	}

	public String(): any {
		return $.pointerValue<netip.AddrPort>(this.AddrPort).String()
	}

	public UnmarshalBinary(b: any): any {
		return $.pointerValue<netip.AddrPort>(this.AddrPort).UnmarshalBinary(b)
	}

	public UnmarshalText(text: any): any {
		return $.pointerValue<netip.AddrPort>(this.AddrPort).UnmarshalText(text)
	}

	static __typeInfo = $.registerStructType(
		"net.addrPortUDPAddr",
		() => new addrPortUDPAddr(),
		() => [$.methodSignature("Network", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Addr", [], ["netip.Addr"]), $.methodSignature("AppendBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("AppendText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("AppendTo", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Compare", [["p2", "netip.AddrPort"]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalBinary", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Port", [], [/* @__PURE__ */ $.basicType("uint16")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("UnmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		addrPortUDPAddr,
		() => [/* @__PURE__ */ $.structField("AddrPort", "netip.AddrPort", [0], 0, true, { anonymous: true })]
	)
}

export class UDPConn {
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

	public clone(): UDPConn {
		return new UDPConn(this, true)
	}

	public __goscriptAssign(source: UDPConn): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.conn, values.conn)
	}

	public async ReadFrom(b: $.Slice<number>): globalThis.Promise<[number, __goscript_net.Addr | null, $.GoError]> {
		const c: UDPConn | $.VarRef<UDPConn> | null = this;
		let __goscriptTuple1: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as UDPConn).readFromUDP(b, new UDPAddr()) : UDPConn.prototype.readFromUDP.call(c, b, new UDPAddr()))
		let n = __goscriptTuple1[0]
		let addr: UDPAddr | $.VarRef<UDPAddr> | null = __goscriptTuple1[1]
		let err = __goscriptTuple1[2]
		if (addr == null) {
			// Return Addr(nil), not Addr(*UDPConn(nil)).
			return [n, null, err]
		}
		return [n, $.interfaceValue<__goscript_net.Addr | null>(addr, "*net.UDPAddr", /* @__PURE__ */ $.pointerType("net.UDPAddr")), err]
	}

	public async ReadFromUDP(b: $.Slice<number>): globalThis.Promise<[number, UDPAddr | $.VarRef<UDPAddr> | null, $.GoError]> {
		const c: UDPConn | $.VarRef<UDPConn> | null = this;
		let n: number = 0
		let addr: UDPAddr | $.VarRef<UDPAddr> | null = null! as UDPAddr | $.VarRef<UDPAddr> | null
		let err: $.GoError = null! as $.GoError
		// This function is designed to allow the caller to control the lifetime
		// of the returned *UDPAddr and thereby prevent an allocation.
		// See https://blog.filippo.io/efficient-go-apis-with-the-inliner/.
		// The real work is done by readFromUDP, below.
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as UDPConn).readFromUDP(b, new UDPAddr()) : UDPConn.prototype.readFromUDP.call(c, b, new UDPAddr()))
	}

	public async ReadFromUDPAddrPort(b: $.Slice<number>): globalThis.Promise<[number, netip.AddrPort, $.GoError]> {
		const c: UDPConn | $.VarRef<UDPConn> | null = this;
		let n: number = 0
		let addr: netip.AddrPort = new netip.AddrPort(undefined, true)
		let err: $.GoError = null! as $.GoError
		const c$: UDPConn = c == null ? $.pointerTarget<UDPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UDPConn>(c)
		if (!(c$ as UDPConn).conn.ok()) {
			return [0, new netip.AddrPort(undefined, true), $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple2: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as UDPConn).readFromAddrPort(b) : UDPConn.prototype.readFromAddrPort.call(c, b))
		n = __goscriptTuple2[0]
		addr = $.assignStruct(addr, __goscriptTuple2[1])
		err = __goscriptTuple2[2]
		if (err != null) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "read", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, (addr).clone(), err]
	}

	public async ReadMsgUDP(b: $.Slice<number>, oob: $.Slice<number>): globalThis.Promise<[number, number, number, UDPAddr | $.VarRef<UDPAddr> | null, $.GoError]> {
		const c: UDPConn | $.VarRef<UDPConn> | null = this;
		let n: number = 0
		let oobn: number = 0
		let flags: number = 0
		let addr: UDPAddr | $.VarRef<UDPAddr> | null = null! as UDPAddr | $.VarRef<UDPAddr> | null
		let err: $.GoError = null! as $.GoError
		let ap: netip.AddrPort = new netip.AddrPort(undefined, true)
		let __goscriptTuple3: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as UDPConn).ReadMsgUDPAddrPort(b, oob) : UDPConn.prototype.ReadMsgUDPAddrPort.call(c, b, oob))
		n = __goscriptTuple3[0]
		oobn = __goscriptTuple3[1]
		flags = __goscriptTuple3[2]
		ap = $.assignStruct(ap, __goscriptTuple3[3])
		err = __goscriptTuple3[4]
		if (ap.IsValid()) {
			addr = UDPAddrFromAddrPort(ap)
		}
		return [n, oobn, flags, addr, err]
	}

	public async ReadMsgUDPAddrPort(b: $.Slice<number>, oob: $.Slice<number>): globalThis.Promise<[number, number, number, netip.AddrPort, $.GoError]> {
		const c: UDPConn | $.VarRef<UDPConn> | null = this;
		let n: number = 0
		let oobn: number = 0
		let flags: number = 0
		let addr: netip.AddrPort = new netip.AddrPort(undefined, true)
		let err: $.GoError = null! as $.GoError
		const c$: UDPConn = c == null ? $.pointerTarget<UDPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UDPConn>(c)
		if (!(c$ as UDPConn).conn.ok()) {
			return [0, 0, 0, new netip.AddrPort(undefined, true), $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple4: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as UDPConn).readMsg(b, oob) : UDPConn.prototype.readMsg.call(c, b, oob))
		n = __goscriptTuple4[0]
		oobn = __goscriptTuple4[1]
		flags = __goscriptTuple4[2]
		addr = $.assignStruct(addr, __goscriptTuple4[3])
		err = __goscriptTuple4[4]
		if (err != null) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "read", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, oobn, flags, addr, err]
	}

	public SyscallConn(): [syscall.RawConn | null, $.GoError] {
		const c: UDPConn | $.VarRef<UDPConn> | null = this;
		if (!$.pointerValue<UDPConn>(c).conn.ok()) {
			return [null, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		return [$.interfaceValue<syscall.RawConn | null>(__goscript_rawconn.newRawConn($.pointerValue<UDPConn>(c).conn.fd), "*net.rawConn", /* @__PURE__ */ $.pointerType("net.rawConn")), null]
	}

	public async WriteMsgUDP(b: $.Slice<number>, oob: $.Slice<number>, addr: UDPAddr | $.VarRef<UDPAddr> | null): globalThis.Promise<[number, number, $.GoError]> {
		const c: UDPConn | $.VarRef<UDPConn> | null = this;
		let n: number = 0
		let oobn: number = 0
		let err: $.GoError = null! as $.GoError
		const c$: UDPConn = c == null ? $.pointerTarget<UDPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UDPConn>(c)
		if (!(c$ as UDPConn).conn.ok()) {
			return [0, 0, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple5: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as UDPConn).writeMsg(b, oob, addr) : UDPConn.prototype.writeMsg.call(c, b, oob, addr))
		n = __goscriptTuple5[0]
		oobn = __goscriptTuple5[1]
		err = __goscriptTuple5[2]
		if (err != null) {
			err = $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField4 = (addr !== null && (addr as any).__isVarRef !== true && (addr as any).__goValue === undefined ? ((addr as any) as UDPAddr).opAddr() : UDPAddr.prototype.opAddr.call(addr)); return new __goscript_net.OpError({Op: "write", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).laddr, Addr: __goscriptLiteralField4, Err: err}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, oobn, err]
	}

	public async WriteMsgUDPAddrPort(b: $.Slice<number>, oob: $.Slice<number>, addr: netip.AddrPort): globalThis.Promise<[number, number, $.GoError]> {
		const c: UDPConn | $.VarRef<UDPConn> | null = this;
		let n: number = 0
		let oobn: number = 0
		let err: $.GoError = null! as $.GoError
		const c$: UDPConn = c == null ? $.pointerTarget<UDPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UDPConn>(c)
		if (!(c$ as UDPConn).conn.ok()) {
			return [0, 0, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple6: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as UDPConn).writeMsgAddrPort(b, oob, addr) : UDPConn.prototype.writeMsgAddrPort.call(c, b, oob, addr))
		n = __goscriptTuple6[0]
		oobn = __goscriptTuple6[1]
		err = __goscriptTuple6[2]
		if (err != null) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "write", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).laddr, Addr: $.interfaceValue<__goscript_net.Addr | null>(new addrPortUDPAddr({AddrPort: addr}, true), "net.addrPortUDPAddr", "net.addrPortUDPAddr"), Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, oobn, err]
	}

	public async WriteTo(b: $.Slice<number>, addr: __goscript_net.Addr | null): globalThis.Promise<[number, $.GoError]> {
		const c: UDPConn | $.VarRef<UDPConn> | null = this;
		const c$: UDPConn = c == null ? $.pointerTarget<UDPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UDPConn>(c)
		if (!(c$ as UDPConn).conn.ok()) {
			return [0, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple7: any = $.typeAssertTuple<UDPAddr | $.VarRef<UDPAddr> | null>(addr, /* @__PURE__ */ $.pointerType("net.UDPAddr"))
		let a: UDPAddr | $.VarRef<UDPAddr> | null = __goscriptTuple7[0]
		let ok = __goscriptTuple7[1]
		if (!ok) {
			return [0, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "write", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).laddr, Addr: addr, Err: $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
		}
		let [n, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as UDPConn).writeTo(b, a) : UDPConn.prototype.writeTo.call(c, b, a))
		if (err != null) {
			err = $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField5 = (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as UDPAddr).opAddr() : UDPAddr.prototype.opAddr.call(a)); return new __goscript_net.OpError({Op: "write", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).laddr, Addr: __goscriptLiteralField5, Err: err}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, err]
	}

	public async WriteToUDP(b: $.Slice<number>, addr: UDPAddr | $.VarRef<UDPAddr> | null): globalThis.Promise<[number, $.GoError]> {
		const c: UDPConn | $.VarRef<UDPConn> | null = this;
		const c$: UDPConn = c == null ? $.pointerTarget<UDPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UDPConn>(c)
		if (!(c$ as UDPConn).conn.ok()) {
			return [0, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let [n, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as UDPConn).writeTo(b, addr) : UDPConn.prototype.writeTo.call(c, b, addr))
		if (err != null) {
			err = $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField6 = (addr !== null && (addr as any).__isVarRef !== true && (addr as any).__goValue === undefined ? ((addr as any) as UDPAddr).opAddr() : UDPAddr.prototype.opAddr.call(addr)); return new __goscript_net.OpError({Op: "write", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).laddr, Addr: __goscriptLiteralField6, Err: err}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, err]
	}

	public async WriteToUDPAddrPort(b: $.Slice<number>, addr: netip.AddrPort): globalThis.Promise<[number, $.GoError]> {
		const c: UDPConn | $.VarRef<UDPConn> | null = this;
		const c$: UDPConn = c == null ? $.pointerTarget<UDPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UDPConn>(c)
		if (!(c$ as UDPConn).conn.ok()) {
			return [0, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let [n, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as UDPConn).writeToAddrPort(b, addr) : UDPConn.prototype.writeToAddrPort.call(c, b, addr))
		if (err != null) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "write", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).laddr, Addr: $.interfaceValue<__goscript_net.Addr | null>(new addrPortUDPAddr({AddrPort: addr}, true), "net.addrPortUDPAddr", "net.addrPortUDPAddr"), Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, err]
	}

	public async readFrom(b: $.Slice<number>, addr: UDPAddr | $.VarRef<UDPAddr> | null): globalThis.Promise<[number, UDPAddr | $.VarRef<UDPAddr> | null, $.GoError]> {
		const c: UDPConn | $.VarRef<UDPConn> | null = this;
		const c$: UDPConn = c == null ? $.pointerTarget<UDPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UDPConn>(c)
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		switch ($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).family) {
			case syscall.AF_INET:
			{
				let _from: $.VarRef<syscall.SockaddrInet4> = $.varRef($.markAsStructValue(new syscall.SockaddrInet4()))
				let __goscriptTuple8: any = await $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).fakeNetFD).readFromInet4(b, _from)
				n = __goscriptTuple8[0]
				err = __goscriptTuple8[1]
				if (err == null) {
					let ip = $.cloneArrayValue(_from.value.Addr, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 4))
					$.assignStruct($.pointerValue<UDPAddr>(addr), new UDPAddr({IP: ($.goSlice(ip, undefined, undefined) as __goscript_ip.IP), Port: _from.value.Port}, true))
				}
				break
			}
			case syscall.AF_INET6:
			{
				let _from: $.VarRef<syscall.SockaddrInet6> = $.varRef($.markAsStructValue(new syscall.SockaddrInet6()))
				let __goscriptTuple9: any = await $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).fakeNetFD).readFromInet6(b, _from)
				n = __goscriptTuple9[0]
				err = __goscriptTuple9[1]
				if (err == null) {
					let ip = $.cloneArrayValue(_from.value.Addr, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))
					$.assignStruct($.pointerValue<UDPAddr>(addr), (await (async () => { const __goscriptLiteralField7 = await $.pointerValue<__goscript__interface.ipv6ZoneCache>(__goscript__interface.zoneCache).name($.int(_from.value.ZoneId)); return new UDPAddr({IP: ($.goSlice(ip, undefined, undefined) as __goscript_ip.IP), Port: _from.value.Port, Zone: __goscriptLiteralField7}, true) })()))
				}
				break
			}
		}
		if (err != null) {

			addr = null
		}
		return [n, addr, err]
	}

	public async readFromAddrPort(b: $.Slice<number>): globalThis.Promise<[number, netip.AddrPort, $.GoError]> {
		const c: UDPConn | $.VarRef<UDPConn> | null = this;
		let n: number = 0
		let addr: netip.AddrPort = new netip.AddrPort(undefined, true)
		let err: $.GoError = null! as $.GoError
		const c$: UDPConn = c == null ? $.pointerTarget<UDPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UDPConn>(c)
		let ip: netip.Addr = new netip.Addr(undefined, true)
		let port: number = 0
		switch ($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).family) {
			case syscall.AF_INET:
			{
				let _from: $.VarRef<syscall.SockaddrInet4> = $.varRef($.markAsStructValue(new syscall.SockaddrInet4()))
				let __goscriptTuple10: any = await $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).fakeNetFD).readFromInet4(b, _from)
				n = __goscriptTuple10[0]
				err = __goscriptTuple10[1]
				if (err == null) {
					ip = $.assignStruct(ip, netip.AddrFrom4($.cloneArrayValue(_from.value.Addr, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 4))))
					port = _from.value.Port
				}
				break
			}
			case syscall.AF_INET6:
			{
				let _from: $.VarRef<syscall.SockaddrInet6> = $.varRef($.markAsStructValue(new syscall.SockaddrInet6()))
				let __goscriptTuple11: any = await $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).fakeNetFD).readFromInet6(b, _from)
				n = __goscriptTuple11[0]
				err = __goscriptTuple11[1]
				if (err == null) {
					ip = $.assignStruct(ip, $.markAsStructValue($.cloneStructValue(netip.AddrFrom16($.cloneArrayValue(_from.value.Addr, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))))).WithZone(await $.pointerValue<__goscript__interface.ipv6ZoneCache>(__goscript__interface.zoneCache).name($.int(_from.value.ZoneId))))
					port = _from.value.Port
				}
				break
			}
		}
		if (err == null) {
			addr = $.assignStruct(addr, netip.AddrPortFrom(ip, $.uint(port, 16)))
		}
		return [n, (addr).clone(), err]
	}

	public async readFromUDP(b: $.Slice<number>, addr: UDPAddr | $.VarRef<UDPAddr> | null): globalThis.Promise<[number, UDPAddr | $.VarRef<UDPAddr> | null, $.GoError]> {
		const c: UDPConn | $.VarRef<UDPConn> | null = this;
		const c$: UDPConn = c == null ? $.pointerTarget<UDPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UDPConn>(c)
		if (!(c$ as UDPConn).conn.ok()) {
			return [0, null, $.namedValueInterfaceValue<$.GoError>(syscall.EINVAL, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))]
		}
		let __goscriptTuple12: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as UDPConn).readFrom(b, addr) : UDPConn.prototype.readFrom.call(c, b, addr))
		let n = __goscriptTuple12[0]
		addr = __goscriptTuple12[1]
		let err = __goscriptTuple12[2]
		if (err != null) {
			err = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "read", Net: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).net, Source: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).laddr, Addr: $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).raddr, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [n, addr, err]
	}

	public async readMsg(b: $.Slice<number>, oob: $.Slice<number>): globalThis.Promise<[number, number, number, netip.AddrPort, $.GoError]> {
		const c: UDPConn | $.VarRef<UDPConn> | null = this;
		let n: number = 0
		let oobn: number = 0
		let flags: number = 0
		let addr: netip.AddrPort = new netip.AddrPort(undefined, true)
		let err: $.GoError = null! as $.GoError
		const c$: UDPConn = c == null ? $.pointerTarget<UDPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UDPConn>(c)
		switch ($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).family) {
			case syscall.AF_INET:
			{
				let sa: $.VarRef<syscall.SockaddrInet4> = $.varRef($.markAsStructValue(new syscall.SockaddrInet4()))
				let __goscriptTuple13: any = await $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).fakeNetFD).readMsgInet4(b, oob, 0, sa)
				n = __goscriptTuple13[0]
				oobn = __goscriptTuple13[1]
				flags = __goscriptTuple13[2]
				err = __goscriptTuple13[3]
				let ip = netip.AddrFrom4($.cloneArrayValue(sa.value.Addr, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 4)))
				addr = $.assignStruct(addr, netip.AddrPortFrom(ip, $.uint(sa.value.Port, 16)))
				break
			}
			case syscall.AF_INET6:
			{
				let sa: $.VarRef<syscall.SockaddrInet6> = $.varRef($.markAsStructValue(new syscall.SockaddrInet6()))
				let __goscriptTuple14: any = await $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).fakeNetFD).readMsgInet6(b, oob, 0, sa)
				n = __goscriptTuple14[0]
				oobn = __goscriptTuple14[1]
				flags = __goscriptTuple14[2]
				err = __goscriptTuple14[3]
				let ip = $.markAsStructValue($.cloneStructValue(netip.AddrFrom16($.cloneArrayValue(sa.value.Addr, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))))).WithZone(await $.pointerValue<__goscript__interface.ipv6ZoneCache>(__goscript__interface.zoneCache).name($.int(sa.value.ZoneId)))
				addr = $.assignStruct(addr, netip.AddrPortFrom(ip, $.uint(sa.value.Port, 16)))
				break
			}
		}
		return [n, oobn, flags, (addr).clone(), err]
	}

	public async writeMsg(b: $.Slice<number>, oob: $.Slice<number>, addr: UDPAddr | $.VarRef<UDPAddr> | null): globalThis.Promise<[number, number, $.GoError]> {
		const c: UDPConn | $.VarRef<UDPConn> | null = this;
		let n: number = 0
		let oobn: number = 0
		let err: $.GoError = null! as $.GoError
		const c$: UDPConn = c == null ? $.pointerTarget<UDPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UDPConn>(c)
		if ($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).isConnected && (addr != null)) {
			return [0, 0, __goscript_net.ErrWriteToConnected]
		}
		if (!$.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).isConnected && (addr == null)) {
			return [0, 0, __goscript_net.errMissingAddress]
		}
		let __goscriptTuple15: any = await (addr !== null && (addr as any).__isVarRef !== true && (addr as any).__goValue === undefined ? ((addr as any) as UDPAddr).sockaddr($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).family) : UDPAddr.prototype.sockaddr.call(addr, $.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).family))
		let sa = __goscriptTuple15[0]
		err = __goscriptTuple15[1]
		if (err != null) {
			return [0, 0, err]
		}
		return $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).fakeNetFD).writeMsg(b, oob, sa)
	}

	public async writeMsgAddrPort(b: $.Slice<number>, oob: $.Slice<number>, addr: netip.AddrPort): globalThis.Promise<[number, number, $.GoError]> {
		const c: UDPConn | $.VarRef<UDPConn> | null = this;
		let n: number = 0
		let oobn: number = 0
		let err: $.GoError = null! as $.GoError
		const c$: UDPConn = c == null ? $.pointerTarget<UDPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UDPConn>(c)
		if ($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).isConnected && $.markAsStructValue($.cloneStructValue(addr)).IsValid()) {
			return [0, 0, __goscript_net.ErrWriteToConnected]
		}
		if (!$.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).isConnected && !$.markAsStructValue($.cloneStructValue(addr)).IsValid()) {
			return [0, 0, __goscript_net.errMissingAddress]
		}

		switch ($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).family) {
			case syscall.AF_INET:
			{
				let sap: syscall.SockaddrInet4 | $.VarRef<syscall.SockaddrInet4> | null = null! as syscall.SockaddrInet4 | $.VarRef<syscall.SockaddrInet4> | null
				if ($.markAsStructValue($.cloneStructValue(addr)).IsValid()) {
					let __goscriptTuple16: any = __goscript_ipsock_posix.addrPortToSockaddrInet4((addr).clone())
					let sa = $.varRef(__goscriptTuple16[0])
					let __goscriptShadow0 = __goscriptTuple16[1]
					if (__goscriptShadow0 != null) {
						return [0, 0, __goscriptShadow0]
					}
					sap = sa
				}
				return $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).fakeNetFD).writeMsgInet4(b, oob, sap)
				break
			}
			case syscall.AF_INET6:
			{
				let sap: syscall.SockaddrInet6 | $.VarRef<syscall.SockaddrInet6> | null = null! as syscall.SockaddrInet6 | $.VarRef<syscall.SockaddrInet6> | null
				if ($.markAsStructValue($.cloneStructValue(addr)).IsValid()) {
					let __goscriptTuple17: any = await __goscript_ipsock_posix.addrPortToSockaddrInet6((addr).clone())
					let sa = $.varRef(__goscriptTuple17[0])
					let __goscriptShadow1 = __goscriptTuple17[1]
					if (__goscriptShadow1 != null) {
						return [0, 0, __goscriptShadow1]
					}
					sap = sa
				}
				return $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).fakeNetFD).writeMsgInet6(b, oob, sap)
				break
			}
			default:
			{
				return [0, 0, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField8 = $.markAsStructValue($.cloneStructValue(addr.Addr())).String(); return new __goscript_net.AddrError({Err: "invalid address family", Addr: __goscriptLiteralField8}) })(), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async writeTo(b: $.Slice<number>, addr: UDPAddr | $.VarRef<UDPAddr> | null): globalThis.Promise<[number, $.GoError]> {
		const c: UDPConn | $.VarRef<UDPConn> | null = this;
		const c$: UDPConn = c == null ? $.pointerTarget<UDPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UDPConn>(c)
		const addr$: UDPAddr = addr == null ? $.pointerTarget<UDPAddr>(addr) : (addr as any).__isVarRef === true ? (addr as any).value : (addr as any).__goValue === undefined ? (addr as any) : $.pointerTarget<UDPAddr>(addr)
		if ($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).isConnected) {
			return [0, __goscript_net.ErrWriteToConnected]
		}
		if (addr == null) {
			return [0, __goscript_net.errMissingAddress]
		}

		switch ($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).family) {
			case syscall.AF_INET:
			{
				let __goscriptTuple18: any = __goscript_ipsock_posix.ipToSockaddrInet4(((addr$ as UDPAddr).IP as __goscript_ip.IP), (addr$ as UDPAddr).Port)
				let sa = $.varRef(__goscriptTuple18[0])
				let err = __goscriptTuple18[1]
				if (err != null) {
					return [0, err]
				}
				return $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).fakeNetFD).writeToInet4(b, sa)
				break
			}
			case syscall.AF_INET6:
			{
				let __goscriptTuple19: any = await __goscript_ipsock_posix.ipToSockaddrInet6(((addr$ as UDPAddr).IP as __goscript_ip.IP), (addr$ as UDPAddr).Port, (addr$ as UDPAddr).Zone)
				let sa = $.varRef(__goscriptTuple19[0])
				let err = __goscriptTuple19[1]
				if (err != null) {
					return [0, err]
				}
				return $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).fakeNetFD).writeToInet6(b, sa)
				break
			}
			default:
			{
				return [0, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField9 = __goscript_ip.IP_String((addr$ as UDPAddr).IP); return new __goscript_net.AddrError({Err: "invalid address family", Addr: __goscriptLiteralField9}) })(), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async writeToAddrPort(b: $.Slice<number>, addr: netip.AddrPort): globalThis.Promise<[number, $.GoError]> {
		const c: UDPConn | $.VarRef<UDPConn> | null = this;
		const c$: UDPConn = c == null ? $.pointerTarget<UDPConn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<UDPConn>(c)
		if ($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).isConnected) {
			return [0, __goscript_net.ErrWriteToConnected]
		}
		if (!$.markAsStructValue($.cloneStructValue(addr)).IsValid()) {
			return [0, __goscript_net.errMissingAddress]
		}

		switch ($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).family) {
			case syscall.AF_INET:
			{
				let __goscriptTuple20: any = __goscript_ipsock_posix.addrPortToSockaddrInet4((addr).clone())
				let sa = $.varRef(__goscriptTuple20[0])
				let err = __goscriptTuple20[1]
				if (err != null) {
					return [0, err]
				}
				return $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).fakeNetFD).writeToInet4(b, sa)
				break
			}
			case syscall.AF_INET6:
			{
				let __goscriptTuple21: any = await __goscript_ipsock_posix.addrPortToSockaddrInet6((addr).clone())
				let sa = $.varRef(__goscriptTuple21[0])
				let err = __goscriptTuple21[1]
				if (err != null) {
					return [0, err]
				}
				return $.pointerValue<__goscript_net_fake.fakeNetFD>($.pointerValue<__goscript_fd_fake.netFD>((c$ as UDPConn).conn.fd).fakeNetFD).writeToInet6(b, sa)
				break
			}
			default:
			{
				return [0, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField10 = $.markAsStructValue($.cloneStructValue(addr.Addr())).String(); return new __goscript_net.AddrError({Err: "invalid address family", Addr: __goscriptLiteralField10}) })(), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
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
		"net.UDPConn",
		() => new UDPConn(),
		() => [$.methodSignature("ReadFrom", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "net.Addr", "error"], true), $.methodSignature("ReadFromUDP", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["addr", /* @__PURE__ */ $.pointerType("net.UDPAddr")], ["err", "error"]], true), $.methodSignature("ReadFromUDPAddrPort", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["addr", "netip.AddrPort"], ["err", "error"]], true), $.methodSignature("ReadMsgUDP", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["flags", /* @__PURE__ */ $.basicType("int")], ["addr", /* @__PURE__ */ $.pointerType("net.UDPAddr")], ["err", "error"]], true), $.methodSignature("ReadMsgUDPAddrPort", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["flags", /* @__PURE__ */ $.basicType("int")], ["addr", "netip.AddrPort"], ["err", "error"]], true), $.methodSignature("SyscallConn", [], ["syscall.RawConn", "error"], true), $.methodSignature("WriteMsgUDP", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", /* @__PURE__ */ $.pointerType("net.UDPAddr")]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("WriteMsgUDPAddrPort", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", "netip.AddrPort"]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("WriteTo", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", "net.Addr"]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteToUDP", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", /* @__PURE__ */ $.pointerType("net.UDPAddr")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteToUDPAddrPort", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", "netip.AddrPort"]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("readFrom", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", /* @__PURE__ */ $.pointerType("net.UDPAddr")]], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.pointerType("net.UDPAddr"), "error"], true), $.methodSignature("readFromAddrPort", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["addr", "netip.AddrPort"], ["err", "error"]], true), $.methodSignature("readFromUDP", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", /* @__PURE__ */ $.pointerType("net.UDPAddr")]], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.pointerType("net.UDPAddr"), "error"], true), $.methodSignature("readMsg", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["flags", /* @__PURE__ */ $.basicType("int")], ["addr", "netip.AddrPort"], ["err", "error"]], true), $.methodSignature("writeMsg", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", /* @__PURE__ */ $.pointerType("net.UDPAddr")]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("writeMsgAddrPort", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["oob", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", "netip.AddrPort"]], [["n", /* @__PURE__ */ $.basicType("int")], ["oobn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("writeTo", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", /* @__PURE__ */ $.pointerType("net.UDPAddr")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("writeToAddrPort", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["addr", "netip.AddrPort"]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("Close", [], ["error"], true), $.methodSignature("File", [], [["f", /* @__PURE__ */ $.pointerType("os.File")], ["err", "error"]], true), $.methodSignature("LocalAddr", [], ["net.Addr"], true), $.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("RemoteAddr", [], ["net.Addr"], true), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetReadBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetWriteBuffer", [["bytes", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ok", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		UDPConn,
		() => [/* @__PURE__ */ $.structField("conn", "net.conn", [0], 0, false, { pkgPath: "net", anonymous: true })]
	)
}

export async function ResolveUDPAddr(network: string, address: string): globalThis.Promise<[UDPAddr | $.VarRef<UDPAddr> | null, $.GoError]> {
	switch (network) {
		case "udp":
		case "udp4":
		case "udp6":
		{
			break
		}
		case "":
		{
			network = "udp"
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
	return [$.mustTypeAssert<UDPAddr | $.VarRef<UDPAddr> | null>(await __goscript_ipsock.addrList_forResolve(addrs, network, address), /* @__PURE__ */ $.pointerType("net.UDPAddr")), null]
}

export function UDPAddrFromAddrPort(addr: netip.AddrPort): UDPAddr | $.VarRef<UDPAddr> | null {
	return (() => { const __goscriptLiteralField1 = ($.markAsStructValue($.cloneStructValue(addr.Addr())).AsSlice() as __goscript_ip.IP); const __goscriptLiteralField2 = $.markAsStructValue($.cloneStructValue(addr.Addr())).Zone(); const __goscriptLiteralField3 = $.int(addr.Port()); return new UDPAddr({IP: __goscriptLiteralField1, Zone: __goscriptLiteralField2, Port: __goscriptLiteralField3}) })()
}

export function newUDPConn(fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null): UDPConn | $.VarRef<UDPConn> | null {
	return new UDPConn({conn: new __goscript_net.conn({fd: fd}, true)})
}

export async function DialUDP(network: string, laddr: UDPAddr | $.VarRef<UDPAddr> | null, raddr: UDPAddr | $.VarRef<UDPAddr> | null): globalThis.Promise<[UDPConn | $.VarRef<UDPConn> | null, $.GoError]> {
	return dialUDP(context.Background(), null, network, laddr, raddr)
}

export async function dialUDP(ctx: context.Context | null, dialer: __goscript_dial.Dialer | $.VarRef<__goscript_dial.Dialer> | null, network: string, laddr: UDPAddr | $.VarRef<UDPAddr> | null, raddr: UDPAddr | $.VarRef<UDPAddr> | null): globalThis.Promise<[UDPConn | $.VarRef<UDPConn> | null, $.GoError]> {
	switch (network) {
		case "udp":
		case "udp4":
		case "udp6":
		{
			break
		}
		default:
		{
			return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField11 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as UDPAddr).opAddr() : UDPAddr.prototype.opAddr.call(laddr)); const __goscriptLiteralField12 = (raddr !== null && (raddr as any).__isVarRef !== true && (raddr as any).__goValue === undefined ? ((raddr as any) as UDPAddr).opAddr() : UDPAddr.prototype.opAddr.call(raddr)); return new __goscript_net.OpError({Op: "dial", Net: network, Source: __goscriptLiteralField11, Addr: __goscriptLiteralField12, Err: $.namedValueInterfaceValue<$.GoError>(network, "net.UnknownNetworkError", {"Error": __goscript_net.UnknownNetworkError_Error}, /* @__PURE__ */ $.basicType("string", "net.UnknownNetworkError"))}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
			break
		}
	}
	if (raddr == null) {
		return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField13 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as UDPAddr).opAddr() : UDPAddr.prototype.opAddr.call(laddr)); return new __goscript_net.OpError({Op: "dial", Net: network, Source: __goscriptLiteralField13, Addr: null, Err: __goscript_net.errMissingAddress}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	let sd: __goscript_dial.sysDialer | $.VarRef<__goscript_dial.sysDialer> | null = (() => { const __goscriptLiteralField14 = (raddr !== null && (raddr as any).__isVarRef !== true && (raddr as any).__goValue === undefined ? ((raddr as any) as UDPAddr).String() : UDPAddr.prototype.String.call(raddr)); return new __goscript_dial.sysDialer({network: network, address: __goscriptLiteralField14}) })()
	if (dialer != null) {
		$.assignStruct($.pointerValue<__goscript_dial.sysDialer>(sd).Dialer, $.pointerValue<__goscript_dial.Dialer>(dialer))
	}
	let __goscriptTuple22: any = await (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as __goscript_dial.sysDialer).dialUDP(ctx, laddr, raddr) : __goscript_dial.sysDialer.prototype.dialUDP.call(sd, ctx, laddr, raddr))
	let c: UDPConn | $.VarRef<UDPConn> | null = __goscriptTuple22[0]
	let err = __goscriptTuple22[1]
	if (err != null) {
		return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField15 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as UDPAddr).opAddr() : UDPAddr.prototype.opAddr.call(laddr)); const __goscriptLiteralField16 = (raddr !== null && (raddr as any).__isVarRef !== true && (raddr as any).__goValue === undefined ? ((raddr as any) as UDPAddr).opAddr() : UDPAddr.prototype.opAddr.call(raddr)); return new __goscript_net.OpError({Op: "dial", Net: network, Source: __goscriptLiteralField15, Addr: __goscriptLiteralField16, Err: err}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	return [c, null]
}

export async function ListenUDP(network: string, laddr: UDPAddr | $.VarRef<UDPAddr> | null): globalThis.Promise<[UDPConn | $.VarRef<UDPConn> | null, $.GoError]> {
	switch (network) {
		case "udp":
		case "udp4":
		case "udp6":
		{
			break
		}
		default:
		{
			return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField17 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as UDPAddr).opAddr() : UDPAddr.prototype.opAddr.call(laddr)); return new __goscript_net.OpError({Op: "listen", Net: network, Source: null, Addr: __goscriptLiteralField17, Err: $.namedValueInterfaceValue<$.GoError>(network, "net.UnknownNetworkError", {"Error": __goscript_net.UnknownNetworkError_Error}, /* @__PURE__ */ $.basicType("string", "net.UnknownNetworkError"))}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
			break
		}
	}
	if (laddr == null) {
		laddr = new UDPAddr()
	}
	let sl: __goscript_dial.sysListener | $.VarRef<__goscript_dial.sysListener> | null = (() => { const __goscriptLiteralField18 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as UDPAddr).String() : UDPAddr.prototype.String.call(laddr)); return new __goscript_dial.sysListener({network: network, address: __goscriptLiteralField18}) })()
	let __goscriptTuple23: any = await (sl !== null && (sl as any).__isVarRef !== true && (sl as any).__goValue === undefined ? ((sl as any) as __goscript_dial.sysListener).listenUDP(context.Background(), laddr) : __goscript_dial.sysListener.prototype.listenUDP.call(sl, context.Background(), laddr))
	let c: UDPConn | $.VarRef<UDPConn> | null = __goscriptTuple23[0]
	let err = __goscriptTuple23[1]
	if (err != null) {
		return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField19 = (laddr !== null && (laddr as any).__isVarRef !== true && (laddr as any).__goValue === undefined ? ((laddr as any) as UDPAddr).opAddr() : UDPAddr.prototype.opAddr.call(laddr)); return new __goscript_net.OpError({Op: "listen", Net: network, Source: null, Addr: __goscriptLiteralField19, Err: err}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	return [c, null]
}

export async function ListenMulticastUDP(network: string, ifi: __goscript__interface.Interface | $.VarRef<__goscript__interface.Interface> | null, gaddr: UDPAddr | $.VarRef<UDPAddr> | null): globalThis.Promise<[UDPConn | $.VarRef<UDPConn> | null, $.GoError]> {
	switch (network) {
		case "udp":
		case "udp4":
		case "udp6":
		{
			break
		}
		default:
		{
			return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField20 = (gaddr !== null && (gaddr as any).__isVarRef !== true && (gaddr as any).__goValue === undefined ? ((gaddr as any) as UDPAddr).opAddr() : UDPAddr.prototype.opAddr.call(gaddr)); return new __goscript_net.OpError({Op: "listen", Net: network, Source: null, Addr: __goscriptLiteralField20, Err: $.namedValueInterfaceValue<$.GoError>(network, "net.UnknownNetworkError", {"Error": __goscript_net.UnknownNetworkError_Error}, /* @__PURE__ */ $.basicType("string", "net.UnknownNetworkError"))}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
			break
		}
	}
	if ((gaddr == null) || ($.pointerValue<UDPAddr>(gaddr).IP == null)) {
		return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField21 = (gaddr !== null && (gaddr as any).__isVarRef !== true && (gaddr as any).__goValue === undefined ? ((gaddr as any) as UDPAddr).opAddr() : UDPAddr.prototype.opAddr.call(gaddr)); return new __goscript_net.OpError({Op: "listen", Net: network, Source: null, Addr: __goscriptLiteralField21, Err: __goscript_net.errMissingAddress}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	let sl: __goscript_dial.sysListener | $.VarRef<__goscript_dial.sysListener> | null = (() => { const __goscriptLiteralField22 = (gaddr !== null && (gaddr as any).__isVarRef !== true && (gaddr as any).__goValue === undefined ? ((gaddr as any) as UDPAddr).String() : UDPAddr.prototype.String.call(gaddr)); return new __goscript_dial.sysListener({network: network, address: __goscriptLiteralField22}) })()
	let __goscriptTuple24: any = await (sl !== null && (sl as any).__isVarRef !== true && (sl as any).__goValue === undefined ? ((sl as any) as __goscript_dial.sysListener).listenMulticastUDP(context.Background(), ifi, gaddr) : __goscript_dial.sysListener.prototype.listenMulticastUDP.call(sl, context.Background(), ifi, gaddr))
	let c: UDPConn | $.VarRef<UDPConn> | null = __goscriptTuple24[0]
	let err = __goscriptTuple24[1]
	if (err != null) {
		return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField23 = (gaddr !== null && (gaddr as any).__isVarRef !== true && (gaddr as any).__goValue === undefined ? ((gaddr as any) as UDPAddr).opAddr() : UDPAddr.prototype.opAddr.call(gaddr)); return new __goscript_net.OpError({Op: "listen", Net: network, Source: null, Addr: __goscriptLiteralField23, Err: err}) })(), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
	}
	return [c, null]
}
