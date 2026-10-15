// Generated file based on dial.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as bytealg from "@goscript/internal/bytealg/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

import * as nettrace from "@goscript/internal/nettrace/index.js"

import * as netip from "@goscript/net/netip/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as time from "@goscript/time/index.js"

import * as io from "@goscript/io/index.js"

import * as os from "@goscript/os/index.js"

import * as errors from "@goscript/errors/index.js"

import * as poll from "@goscript/internal/poll/index.js"

import * as singleflight from "@goscript/internal/singleflight/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import type * as dnsmessage from "@goscript/vendor/golang.org/x/net/dns/dnsmessage/index.js"

import * as __goscript__interface from "./interface.gs.ts"

import type * as __goscript_dnsclient from "./dnsclient.gs.ts"

import * as __goscript_dnsclient_unix from "./dnsclient_unix.gs.ts"

import type * as __goscript_dnsconfig from "./dnsconfig.gs.ts"

import * as __goscript_fd_fake from "./fd_fake.gs.ts"

import * as __goscript_fd_js from "./fd_js.gs.ts"

import * as __goscript_hook from "./hook.gs.ts"

import * as __goscript_ip from "./ip.gs.ts"

import * as __goscript_iprawsock from "./iprawsock.gs.ts"

import * as __goscript_iprawsock_posix from "./iprawsock_posix.gs.ts"

import * as __goscript_ipsock from "./ipsock.gs.ts"

import * as __goscript_ipsock_posix from "./ipsock_posix.gs.ts"

import * as __goscript_lookup from "./lookup.gs.ts"

import * as __goscript_lookup_unix from "./lookup_unix.gs.ts"

import * as __goscript_mac from "./mac.gs.ts"

import * as __goscript_mptcpsock_stub from "./mptcpsock_stub.gs.ts"

import * as __goscript_net from "./net.gs.ts"

import * as __goscript_net_fake from "./net_fake.gs.ts"

import * as __goscript_parse from "./parse.gs.ts"

import * as __goscript_sockaddr_posix from "./sockaddr_posix.gs.ts"

import * as __goscript_tcpsock from "./tcpsock.gs.ts"

import * as __goscript_tcpsock_posix from "./tcpsock_posix.gs.ts"

import * as __goscript_tcpsock_unix from "./tcpsock_unix.gs.ts"

import * as __goscript_udpsock from "./udpsock.gs.ts"

import * as __goscript_udpsock_posix from "./udpsock_posix.gs.ts"

import * as __goscript_unixsock from "./unixsock.gs.ts"

import * as __goscript_unixsock_posix from "./unixsock_posix.gs.ts"
import "@goscript/context/index.js"
import "@goscript/internal/bytealg/index.js"
import "@goscript/internal/godebug/index.js"
import "@goscript/internal/nettrace/index.js"
import "@goscript/net/netip/index.js"
import "@goscript/syscall/index.js"
import "@goscript/time/index.js"
import "@goscript/io/index.js"
import "@goscript/os/index.js"
import "@goscript/errors/index.js"
import "@goscript/internal/poll/index.js"
import "@goscript/internal/singleflight/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "./interface.gs.ts"
import "./dnsclient_unix.gs.ts"
import "./fd_fake.gs.ts"
import "./fd_js.gs.ts"
import "./hook.gs.ts"
import "./ip.gs.ts"
import "./iprawsock.gs.ts"
import "./iprawsock_posix.gs.ts"
import "./ipsock.gs.ts"
import "./ipsock_posix.gs.ts"
import "./lookup.gs.ts"
import "./lookup_unix.gs.ts"
import "./mac.gs.ts"
import "./mptcpsock_stub.gs.ts"
import "./net.gs.ts"
import "./net_fake.gs.ts"
import "./parse.gs.ts"
import "./sockaddr_posix.gs.ts"
import "./tcpsock.gs.ts"
import "./tcpsock_posix.gs.ts"
import "./tcpsock_unix.gs.ts"
import "./udpsock.gs.ts"
import "./udpsock_posix.gs.ts"
import "./unixsock.gs.ts"
import "./unixsock_posix.gs.ts"

export type mptcpStatusDial = number

$.registerNamedValueType(
	"*net.mptcpStatusDial",
	{get: (receiver: any, ...args: any[]) => (mptcpStatusDial__get as any)(receiver, ...$.stripGenericTypeArgs(args)), set: (receiver: any, ...args: any[]) => (mptcpStatusDial__set as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("get", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("set", [["use", /* @__PURE__ */ $.basicType("bool")]])]
);

export type mptcpStatusListen = number

$.registerNamedValueType(
	"*net.mptcpStatusListen",
	{get: (receiver: any, ...args: any[]) => (mptcpStatusListen__get as any)(receiver, ...$.stripGenericTypeArgs(args)), set: (receiver: any, ...args: any[]) => (mptcpStatusListen__set as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("get", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("set", [["use", /* @__PURE__ */ $.basicType("bool")]])]
);

export class Dialer {
	// Timeout is the maximum amount of time a dial will wait for
	// a connect to complete. If Deadline is also set, it may fail
	// earlier.
	//
	// The default is no timeout.
	//
	// When using TCP and dialing a host name with multiple IP
	// addresses, the timeout may be divided between them.
	//
	// With or without a timeout, the operating system may impose
	// its own earlier timeout. For instance, TCP timeouts are
	// often around 3 minutes.
	public get Timeout(): time.Duration {
		return this._fields.Timeout
	}

	public set Timeout(value: time.Duration) {
		this._fields.Timeout = value
	}

	// Deadline is the absolute point in time after which dials
	// will fail. If Timeout is set, it may fail earlier.
	// Zero means no deadline, or dependent on the operating system
	// as with the Timeout option.
	public get Deadline(): time.Time {
		return this._fields.Deadline
	}

	public set Deadline(value: time.Time) {
		this._fields.Deadline = value
	}

	// LocalAddr is the local address to use when dialing an
	// address. The address must be of a compatible type for the
	// network being dialed.
	// If nil, a local address is automatically chosen.
	public get LocalAddr(): __goscript_net.Addr | null {
		return this._fields.LocalAddr
	}

	public set LocalAddr(value: __goscript_net.Addr | null) {
		this._fields.LocalAddr = value
	}

	// DualStack previously enabled RFC 6555 Fast Fallback
	// support, also known as "Happy Eyeballs", in which IPv4 is
	// tried soon if IPv6 appears to be misconfigured and
	// hanging.
	//
	// Deprecated: Fast Fallback is enabled by default. To
	// disable, set FallbackDelay to a negative value.
	public get DualStack(): boolean {
		return this._fields.DualStack
	}

	public set DualStack(value: boolean) {
		this._fields.DualStack = value
	}

	// FallbackDelay specifies the length of time to wait before
	// spawning a RFC 6555 Fast Fallback connection.
	//
	// When dialing "tcp" and both IPv6 and IPv4 addresses are
	// available, the address family of the first resolved address
	// is treated as the primary. After FallbackDelay, a connection
	// attempt to the other address family is started if the primary
	// connection has not yet succeeded.
	//
	// If zero, a default delay of 300ms is used.
	// A negative value disables Fast Fallback support.
	public get FallbackDelay(): time.Duration {
		return this._fields.FallbackDelay
	}

	public set FallbackDelay(value: time.Duration) {
		this._fields.FallbackDelay = value
	}

	// KeepAlive specifies the interval between keep-alive
	// probes for an active network connection.
	//
	// KeepAlive is ignored if KeepAliveConfig.Enable is true.
	//
	// If zero, keep-alive probes are sent with a default value
	// (currently 15 seconds), if supported by the protocol and operating
	// system. Network protocols or operating systems that do
	// not support keep-alive ignore this field.
	// If negative, keep-alive probes are disabled.
	public get KeepAlive(): time.Duration {
		return this._fields.KeepAlive
	}

	public set KeepAlive(value: time.Duration) {
		this._fields.KeepAlive = value
	}

	// KeepAliveConfig specifies the keep-alive probe configuration
	// for an active network connection, when supported by the
	// protocol and operating system.
	//
	// If KeepAliveConfig.Enable is true, keep-alive probes are enabled.
	// If KeepAliveConfig.Enable is false and KeepAlive is negative,
	// keep-alive probes are disabled.
	public get KeepAliveConfig(): __goscript_tcpsock.KeepAliveConfig {
		return this._fields.KeepAliveConfig
	}

	public set KeepAliveConfig(value: __goscript_tcpsock.KeepAliveConfig) {
		this._fields.KeepAliveConfig = value
	}

	// Resolver optionally specifies an alternate resolver to use.
	public get Resolver(): __goscript_lookup.Resolver | $.VarRef<__goscript_lookup.Resolver> | null {
		return this._fields.Resolver
	}

	public set Resolver(value: __goscript_lookup.Resolver | $.VarRef<__goscript_lookup.Resolver> | null) {
		this._fields.Resolver = value
	}

	// Cancel is an optional channel whose closure indicates that
	// the dial should be canceled. Not all types of dials support
	// cancellation.
	//
	// Deprecated: Use DialContext instead.
	public get Cancel(): $.Channel<{}> | null {
		return this._fields.Cancel
	}

	public set Cancel(value: $.Channel<{}> | null) {
		this._fields.Cancel = value
	}

	// If Control is not nil, it is called after creating the network
	// connection but before actually dialing.
	//
	// Network and address parameters passed to Control function are not
	// necessarily the ones passed to Dial. Calling Dial with TCP networks
	// will cause the Control function to be called with "tcp4" or "tcp6",
	// UDP networks become "udp4" or "udp6", IP networks become "ip4" or "ip6",
	// and other known networks are passed as-is.
	//
	// Control is ignored if ControlContext is not nil.
	public get Control(): ((network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.Control
	}

	public set Control(value: ((network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.Control = value
	}

	// If ControlContext is not nil, it is called after creating the network
	// connection but before actually dialing.
	//
	// Network and address parameters passed to ControlContext function are not
	// necessarily the ones passed to Dial. Calling Dial with TCP networks
	// will cause the ControlContext function to be called with "tcp4" or "tcp6",
	// UDP networks become "udp4" or "udp6", IP networks become "ip4" or "ip6",
	// and other known networks are passed as-is.
	//
	// If ControlContext is not nil, Control is ignored.
	public get ControlContext(): ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.ControlContext
	}

	public set ControlContext(value: ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.ControlContext = value
	}

	// If mptcpStatus is set to a value allowing Multipath TCP (MPTCP) to be
	// used, any call to Dial with "tcp(4|6)" as network will use MPTCP if
	// supported by the operating system.
	public get mptcpStatus(): mptcpStatusDial {
		return this._fields.mptcpStatus
	}

	public set mptcpStatus(value: mptcpStatusDial) {
		this._fields.mptcpStatus = value
	}

	public _fields: {
		Timeout: time.Duration
		Deadline: time.Time
		LocalAddr: __goscript_net.Addr | null
		DualStack: boolean
		FallbackDelay: time.Duration
		KeepAlive: time.Duration
		KeepAliveConfig: __goscript_tcpsock.KeepAliveConfig
		Resolver: __goscript_lookup.Resolver | $.VarRef<__goscript_lookup.Resolver> | null
		Cancel: $.Channel<{}> | null
		Control: ((network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		ControlContext: ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		mptcpStatus: mptcpStatusDial
	}

	constructor(init?: Partial<{Timeout?: time.Duration, Deadline?: time.Time, LocalAddr?: __goscript_net.Addr | null, DualStack?: boolean, FallbackDelay?: time.Duration, KeepAlive?: time.Duration, KeepAliveConfig?: __goscript_tcpsock.KeepAliveConfig, Resolver?: __goscript_lookup.Resolver | $.VarRef<__goscript_lookup.Resolver> | null, Cancel?: $.Channel<{}> | null, Control?: ((network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null, ControlContext?: ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null, mptcpStatus?: mptcpStatusDial}>, __goscriptValue?: boolean) {
		this._fields = {
			Timeout: init?.Timeout ?? (0n as time.Duration),
			Deadline: init?.Deadline ? $.markAsStructValue($.cloneStructValue(init.Deadline)) : $.markAsStructValue(new time.Time()),
			LocalAddr: init?.LocalAddr ?? (null! as __goscript_net.Addr | null),
			DualStack: init?.DualStack ?? (false as boolean),
			FallbackDelay: init?.FallbackDelay ?? (0n as time.Duration),
			KeepAlive: init?.KeepAlive ?? (0n as time.Duration),
			KeepAliveConfig: init?.KeepAliveConfig ? init.KeepAliveConfig.clone() : new __goscript_tcpsock.KeepAliveConfig(undefined, true),
			Resolver: init?.Resolver ?? (null! as __goscript_lookup.Resolver | $.VarRef<__goscript_lookup.Resolver> | null),
			Cancel: init?.Cancel ?? (null! as $.Channel<{}> | null),
			Control: init?.Control ?? (null! as ((network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null),
			ControlContext: init?.ControlContext ?? (null! as ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null),
			mptcpStatus: init?.mptcpStatus ?? (0 as mptcpStatusDial)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Dialer {
		return new Dialer(this, true)
	}

	public __goscriptAssign(source: Dialer): void {
		const target = this._fields
		const values = source._fields
		target.Timeout = values.Timeout
		$.assignStruct(target.Deadline, values.Deadline)
		target.LocalAddr = $.assignFieldValue(target.LocalAddr, values.LocalAddr, "net.Addr")
		target.DualStack = values.DualStack
		target.FallbackDelay = values.FallbackDelay
		target.KeepAlive = values.KeepAlive
		$.assignStruct(target.KeepAliveConfig, values.KeepAliveConfig)
		target.Resolver = values.Resolver
		target.Cancel = values.Cancel
		target.Control = values.Control
		target.ControlContext = values.ControlContext
		target.mptcpStatus = values.mptcpStatus
	}

	public async Dial(network: string, address: string): globalThis.Promise<[__goscript_net.Conn | null, $.GoError]> {
		const d: Dialer | $.VarRef<Dialer> | null = this;
		return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Dialer).DialContext(context.Background(), network, address) : Dialer.prototype.DialContext.call(d, context.Background(), network, address))
	}

	public async DialContext(ctx: context.Context | null, network: string, address: string): globalThis.Promise<[__goscript_net.Conn | null, $.GoError]> {
		const d: Dialer | $.VarRef<Dialer> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple0: any = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Dialer).dialCtx(ctx) : Dialer.prototype.dialCtx.call(d, ctx))
		ctx = __goscriptTuple0[0]
		let cancel = __goscriptTuple0[1]
		const __goscriptDeferCallee0 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		// Shadow the nettrace (if any) during resolve so Connect events don't fire for DNS lookups.
		let resolveCtx: context.Context | null = ctx
		{
			let __goscriptTuple1: any = $.typeAssertTuple<nettrace.Trace | $.VarRef<nettrace.Trace> | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new nettrace.TraceKey(undefined, true), "nettrace.TraceKey", "nettrace.TraceKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("nettrace.Trace"))
			let trace: nettrace.Trace | $.VarRef<nettrace.Trace> | null = __goscriptTuple1[0]
			if (trace != null) {
				let shadow = $.varRef(($.pointerValue<nettrace.Trace>(trace)).clone())
				shadow.value.ConnectStart = (null as ((network: string, addr: string) => void) | null)
				shadow.value.ConnectDone = (null as ((network: string, addr: string, err: $.GoError) => void) | null)
				resolveCtx = context.WithValue($.pointerValueOrNil(resolveCtx)!, $.interfaceValue(new nettrace.TraceKey(undefined, true), "nettrace.TraceKey", "nettrace.TraceKey"), $.interfaceValue(shadow, "*nettrace.Trace", /* @__PURE__ */ $.pointerType("nettrace.Trace")))
			}
		}

		let __goscriptTuple2: any = await __goscript_lookup.Resolver.prototype.resolveAddrList.call((d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Dialer).resolver() : Dialer.prototype.resolver.call(d)), resolveCtx, "dial", network, address, $.pointerValue<Dialer>(d).LocalAddr)
		let addrs: __goscript_ipsock.addrList = (__goscriptTuple2[0] as __goscript_ipsock.addrList)
		let err = __goscriptTuple2[1]
		if (err != null) {
			return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "dial", Net: network, Source: null, Addr: null, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
		}

		let sd: sysDialer | $.VarRef<sysDialer> | null = new sysDialer({Dialer: $.pointerValue<Dialer>(d), network: network, address: address})

		let primaries: __goscript_ipsock.addrList = null! as __goscript_ipsock.addrList
		let fallbacks: __goscript_ipsock.addrList = null! as __goscript_ipsock.addrList
		if ((d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Dialer).dualStack() : Dialer.prototype.dualStack.call(d)) && ($.stringEqual(network, "tcp"))) {
			let __goscriptTuple3: any = await __goscript_ipsock.addrList_partition(addrs, __goscript_ipsock.isIPv4)
			primaries = (__goscriptTuple3[0] as __goscript_ipsock.addrList)
			fallbacks = (__goscriptTuple3[1] as __goscript_ipsock.addrList)
		} else {
			primaries = (addrs as __goscript_ipsock.addrList)
		}

		return await (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as sysDialer).dialParallel(ctx, (primaries as __goscript_ipsock.addrList), (fallbacks as __goscript_ipsock.addrList)) : sysDialer.prototype.dialParallel.call(sd, ctx, (primaries as __goscript_ipsock.addrList), (fallbacks as __goscript_ipsock.addrList)))
	}

	public async DialIP(ctx: context.Context | null, network: string, laddr: netip.Addr, raddr: netip.Addr): globalThis.Promise<[__goscript_iprawsock.IPConn | $.VarRef<__goscript_iprawsock.IPConn> | null, $.GoError]> {
		const d: Dialer | $.VarRef<Dialer> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple4: any = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Dialer).dialCtx(ctx) : Dialer.prototype.dialCtx.call(d, ctx))
		ctx = __goscriptTuple4[0]
		let cancel = __goscriptTuple4[1]
		const __goscriptDeferCallee1 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee1!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		return await __goscript_iprawsock.dialIP(ctx, d, network, __goscript_iprawsock.ipAddrFromAddr(laddr), __goscript_iprawsock.ipAddrFromAddr(raddr))
	}

	public async DialTCP(ctx: context.Context | null, network: string, laddr: netip.AddrPort, raddr: netip.AddrPort): globalThis.Promise<[__goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, $.GoError]> {
		const d: Dialer | $.VarRef<Dialer> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple5: any = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Dialer).dialCtx(ctx) : Dialer.prototype.dialCtx.call(d, ctx))
		ctx = __goscriptTuple5[0]
		let cancel = __goscriptTuple5[1]
		const __goscriptDeferCallee2 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee2!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		return await __goscript_tcpsock.dialTCP(ctx, d, network, __goscript_tcpsock.TCPAddrFromAddrPort(laddr), __goscript_tcpsock.TCPAddrFromAddrPort(raddr))
	}

	public async DialUDP(ctx: context.Context | null, network: string, laddr: netip.AddrPort, raddr: netip.AddrPort): globalThis.Promise<[__goscript_udpsock.UDPConn | $.VarRef<__goscript_udpsock.UDPConn> | null, $.GoError]> {
		const d: Dialer | $.VarRef<Dialer> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple6: any = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Dialer).dialCtx(ctx) : Dialer.prototype.dialCtx.call(d, ctx))
		ctx = __goscriptTuple6[0]
		let cancel = __goscriptTuple6[1]
		const __goscriptDeferCallee3 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee3!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		return await __goscript_udpsock.dialUDP(ctx, d, network, __goscript_udpsock.UDPAddrFromAddrPort(laddr), __goscript_udpsock.UDPAddrFromAddrPort(raddr))
	}

	public async DialUnix(ctx: context.Context | null, network: string, laddr: __goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null, raddr: __goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null): globalThis.Promise<[__goscript_unixsock.UnixConn | $.VarRef<__goscript_unixsock.UnixConn> | null, $.GoError]> {
		const d: Dialer | $.VarRef<Dialer> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple7: any = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Dialer).dialCtx(ctx) : Dialer.prototype.dialCtx.call(d, ctx))
		ctx = __goscriptTuple7[0]
		let cancel = __goscriptTuple7[1]
		const __goscriptDeferCallee4 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee4!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		return await __goscript_unixsock.dialUnix(ctx, d, network, laddr, raddr)
	}

	public MultipathTCP(): boolean {
		const d: Dialer | $.VarRef<Dialer> | null = this;
		return mptcpStatusDial__get($.fieldRef($.pointerValue<Dialer>(d)._fields, "mptcpStatus"))
	}

	public SetMultipathTCP(use: boolean): void {
		const d: Dialer | $.VarRef<Dialer> | null = this;
		mptcpStatusDial__set($.fieldRef($.pointerValue<Dialer>(d)._fields, "mptcpStatus"), use)
	}

	public async deadline(ctx: context.Context | null, now: time.Time): globalThis.Promise<time.Time> {
		const d: Dialer | $.VarRef<Dialer> | null = this;
		let earliest: time.Time = $.markAsStructValue(new time.Time())
		const d$: Dialer = d == null ? $.pointerTarget<Dialer>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Dialer>(d)
		if ((d$ as Dialer).Timeout != 0n) {
			earliest = $.assignStruct(earliest, $.markAsStructValue($.cloneStructValue(now)).Add((d$ as Dialer).Timeout))
		}
		{
			let [__goscriptShadow0, ok] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Deadline()
			if (ok) {
				earliest = $.assignStruct(earliest, minNonzeroTime(earliest, __goscriptShadow0))
			}
		}
		return minNonzeroTime(earliest, $.markAsStructValue($.cloneStructValue((d$ as Dialer).Deadline)))
	}

	public async dialCtx(ctx: context.Context | null): globalThis.Promise<[context.Context | null, context.CancelFunc | null]> {
		const d: Dialer | $.VarRef<Dialer> | null = this;
		if (ctx == null) {
			$.panic("nil context")
		}
		let deadline = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Dialer).deadline(ctx, $.markAsStructValue($.cloneStructValue(time.Now()))) : Dialer.prototype.deadline.call(d, ctx, $.markAsStructValue($.cloneStructValue(time.Now()))))
		let cancel1: context.CancelFunc | null = null! as context.CancelFunc | null
		let cancel2: context.CancelFunc | null = null! as context.CancelFunc | null
		if (!$.markAsStructValue($.cloneStructValue(deadline)).IsZero()) {
			void (__goscriptAwait = __goscript_hook.testHookStepTime!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [__goscriptShadow1, ok] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Deadline()
				if (!ok || $.markAsStructValue($.cloneStructValue(deadline)).Before($.markAsStructValue($.cloneStructValue(__goscriptShadow1)))) {
					let subCtx: context.Context | null = null! as context.Context | null
					let __goscriptTuple8: any = context.WithDeadline($.pointerValueOrNil(ctx)!, $.markAsStructValue($.cloneStructValue(deadline)))
					subCtx = __goscriptTuple8[0]
					cancel1 = __goscriptTuple8[1]
					ctx = subCtx
				}
			}
		}
		{
			let oldCancel: $.Channel<{}> | null = $.pointerValue<Dialer>(d).Cancel
			if (oldCancel != null) {
				let subCtx: context.Context | null = null! as context.Context | null
				let __goscriptTuple9: any = context.WithCancel($.pointerValueOrNil(ctx)!)
				subCtx = __goscriptTuple9[0]
				cancel2 = __goscriptTuple9[1]
				queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
					const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
						{
							id: 0,
							isSend: false,
							channel: oldCancel,
							onSelected: async (__goscriptSelect0Result) => {
								void (__goscriptAwait = cancel2!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							}
						},
						{
							id: 1,
							isSend: false,
							channel: ((__goscriptAwait = (subCtx !== null && (subCtx as any).__isVarRef !== true && (subCtx as any).__goValue === undefined ? (subCtx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(subCtx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
						}
					], false)
					if (__goscriptSelect0HasReturn) {
						return __goscriptSelect0Value
					}
				})() })
				ctx = subCtx
			}
		}
		return [ctx, $.functionValue(async (): globalThis.Promise<void> => {
			if (cancel1 != null) {
				void (__goscriptAwait = cancel1!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if (cancel2 != null) {
				void (__goscriptAwait = cancel2!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))]
	}

	public dualStack(): boolean {
		const d: Dialer | $.VarRef<Dialer> | null = this;
		return $.pointerValue<Dialer>(d).FallbackDelay >= 0n
	}

	public fallbackDelay(): time.Duration {
		const d: Dialer | $.VarRef<Dialer> | null = this;
		const d$: Dialer = d == null ? $.pointerTarget<Dialer>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Dialer>(d)
		if ((d$ as Dialer).FallbackDelay > 0n) {
			return (d$ as Dialer).FallbackDelay
		} else {
			return 300000000n
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public resolver(): __goscript_lookup.Resolver | $.VarRef<__goscript_lookup.Resolver> | null {
		const d: Dialer | $.VarRef<Dialer> | null = this;
		const d$: Dialer = d == null ? $.pointerTarget<Dialer>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Dialer>(d)
		if ((d$ as Dialer).Resolver != null) {
			return (d$ as Dialer).Resolver
		}
		return __goscript_lookup.DefaultResolver
	}

	static __typeInfo = $.registerStructType(
		"net.Dialer",
		() => new Dialer(),
		() => [$.methodSignature("Dial", [["network", /* @__PURE__ */ $.basicType("string")], ["address", /* @__PURE__ */ $.basicType("string")]], ["net.Conn", "error"], true), $.methodSignature("DialContext", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["address", /* @__PURE__ */ $.basicType("string")]], ["net.Conn", "error"], true), $.methodSignature("DialIP", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["laddr", "netip.Addr"], ["raddr", "netip.Addr"]], [/* @__PURE__ */ $.pointerType("net.IPConn"), "error"], true), $.methodSignature("DialTCP", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["laddr", "netip.AddrPort"], ["raddr", "netip.AddrPort"]], [/* @__PURE__ */ $.pointerType("net.TCPConn"), "error"], true), $.methodSignature("DialUDP", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["laddr", "netip.AddrPort"], ["raddr", "netip.AddrPort"]], [/* @__PURE__ */ $.pointerType("net.UDPConn"), "error"], true), $.methodSignature("DialUnix", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["laddr", /* @__PURE__ */ $.pointerType("net.UnixAddr")], ["raddr", /* @__PURE__ */ $.pointerType("net.UnixAddr")]], [/* @__PURE__ */ $.pointerType("net.UnixConn"), "error"], true), $.methodSignature("MultipathTCP", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("SetMultipathTCP", [["use", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("deadline", [["ctx", "context.Context"], ["now", "time.Time"]], [["earliest", "time.Time"]], true), $.methodSignature("dialCtx", [["ctx", "context.Context"]], ["context.Context", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("dualStack", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("fallbackDelay", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("resolver", [], [/* @__PURE__ */ $.pointerType("net.Resolver")], true)],
		Dialer,
		() => [/* @__PURE__ */ $.structField("Timeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [0], 0, true), /* @__PURE__ */ $.structField("Deadline", "time.Time", [1], 8, true), /* @__PURE__ */ $.structField("LocalAddr", "net.Addr", [2], 32, true), /* @__PURE__ */ $.structField("DualStack", /* @__PURE__ */ $.basicType("bool"), [3], 48, true), /* @__PURE__ */ $.structField("FallbackDelay", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [4], 56, true), /* @__PURE__ */ $.structField("KeepAlive", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [5], 64, true), /* @__PURE__ */ $.structField("KeepAliveConfig", "net.KeepAliveConfig", [6], 72, true), /* @__PURE__ */ $.structField("Resolver", /* @__PURE__ */ $.pointerType("net.Resolver"), [7], 104, true), /* @__PURE__ */ $.structField("Cancel", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive"), [8], 112, true), /* @__PURE__ */ $.structField("Control", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), "syscall.RawConn"], results: ["error"] } as $.FunctionTypeInfo), [9], 120, true), /* @__PURE__ */ $.structField("ControlContext", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), "syscall.RawConn"], results: ["error"] } as $.FunctionTypeInfo), [10], 128, true), /* @__PURE__ */ $.structField("mptcpStatus", /* @__PURE__ */ $.basicType("uint8", "net.mptcpStatusDial"), [11], 136, false, { pkgPath: "net" })]
	)
}

export class sysDialer {
	public get Dialer(): Dialer {
		return this._fields.Dialer
	}

	public set Dialer(value: Dialer) {
		this._fields.Dialer = value
	}

	public get network(): string {
		return this._fields.network
	}

	public set network(value: string) {
		this._fields.network = value
	}

	public get address(): string {
		return this._fields.address
	}

	public set address(value: string) {
		this._fields.address = value
	}

	public get testHookDialTCP(): ((ctx: context.Context | null, net: string, laddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null, raddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null) => [__goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, $.GoError] | globalThis.Promise<[__goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, $.GoError]>) | null {
		return this._fields.testHookDialTCP
	}

	public set testHookDialTCP(value: ((ctx: context.Context | null, net: string, laddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null, raddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null) => [__goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, $.GoError] | globalThis.Promise<[__goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, $.GoError]>) | null) {
		this._fields.testHookDialTCP = value
	}

	public _fields: {
		Dialer: Dialer
		network: string
		address: string
		testHookDialTCP: ((ctx: context.Context | null, net: string, laddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null, raddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null) => [__goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, $.GoError] | globalThis.Promise<[__goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, $.GoError]>) | null
	}

	constructor(init?: Partial<{Dialer?: Dialer, network?: string, address?: string, testHookDialTCP?: ((ctx: context.Context | null, net: string, laddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null, raddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null) => [__goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, $.GoError] | globalThis.Promise<[__goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, $.GoError]>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Dialer: init?.Dialer ? init.Dialer.clone() : new Dialer(undefined, true),
			network: init?.network ?? ("" as string),
			address: init?.address ?? ("" as string),
			testHookDialTCP: init?.testHookDialTCP ?? (null! as ((ctx: context.Context | null, net: string, laddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null, raddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null) => [__goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, $.GoError] | globalThis.Promise<[__goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, $.GoError]>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sysDialer {
		return new sysDialer(this, true)
	}

	public __goscriptAssign(source: sysDialer): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Dialer, values.Dialer)
		target.network = values.network
		target.address = values.address
		target.testHookDialTCP = values.testHookDialTCP
	}

	public async dialIP(ctx: context.Context | null, laddr: __goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null, raddr: __goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null): globalThis.Promise<[__goscript_iprawsock.IPConn | $.VarRef<__goscript_iprawsock.IPConn> | null, $.GoError]> {
		const sd: sysDialer | $.VarRef<sysDialer> | null = this;
		const sd$: sysDialer = sd == null ? $.pointerTarget<sysDialer>(sd) : (sd as any).__isVarRef === true ? (sd as any).value : (sd as any).__goValue === undefined ? (sd as any) : $.pointerTarget<sysDialer>(sd)
		let __goscriptTuple11: any = await parseNetwork(ctx, (sd$ as sysDialer).network, true)
		let network = __goscriptTuple11[0]
		let proto = __goscriptTuple11[1]
		let err = __goscriptTuple11[2]
		if (err != null) {
			return [null, err]
		}
		switch (network) {
			case "ip":
			case "ip4":
			case "ip6":
			{
				break
			}
			default:
			{
				return [null, $.namedValueInterfaceValue<$.GoError>((sd$ as sysDialer).network, "net.UnknownNetworkError", {"Error": __goscript_net.UnknownNetworkError_Error}, /* @__PURE__ */ $.basicType("string", "net.UnknownNetworkError"))]
				break
			}
		}
		let ctrlCtxFn: ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null = (sd$ as sysDialer).Dialer.ControlContext
		if ((ctrlCtxFn == null) && ((sd$ as sysDialer).Dialer.Control != null)) {
			ctrlCtxFn = $.functionValue(async (ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null): globalThis.Promise<$.GoError> => {
				return await (sd$ as sysDialer).Dialer.Control!(network, address, c)
			}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), "syscall.RawConn"], results: ["error"] } as $.FunctionTypeInfo))
		}
		let __goscriptTuple12: any = await __goscript_ipsock_posix.internetSocket(ctx, network, $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(laddr, "*net.IPAddr", /* @__PURE__ */ $.pointerType("net.IPAddr")), $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(raddr, "*net.IPAddr", /* @__PURE__ */ $.pointerType("net.IPAddr")), 3, proto, "dial", ctrlCtxFn)
		let fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null = __goscriptTuple12[0]
		err = __goscriptTuple12[1]
		if (err != null) {
			return [null, err]
		}
		return [__goscript_iprawsock.newIPConn(fd), null]
	}

	public async dialMPTCP(ctx: context.Context | null, laddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null, raddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null): globalThis.Promise<[__goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, $.GoError]> {
		const sd: sysDialer | $.VarRef<sysDialer> | null = this;
		return (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as sysDialer).dialTCP(ctx, laddr, raddr) : sysDialer.prototype.dialTCP.call(sd, ctx, laddr, raddr))
	}

	public async dialParallel(ctx: context.Context | null, primaries: __goscript_ipsock.addrList, fallbacks: __goscript_ipsock.addrList): globalThis.Promise<[__goscript_net.Conn | null, $.GoError]> {
		const sd: sysDialer | $.VarRef<sysDialer> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		if ($.sliceLen((fallbacks as __goscript_ipsock.addrList)) == 0) {
			return (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as sysDialer).dialSerial(ctx, (primaries as __goscript_ipsock.addrList)) : sysDialer.prototype.dialSerial.call(sd, ctx, (primaries as __goscript_ipsock.addrList)))
		}

		let returned: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
		const __goscriptDeferArg0 = returned
		__defer.defer(() => { __goscriptDeferArg0!.close() })

		class dialResult {
			public get Conn(): __goscript_net.Conn | null {
				return this._fields.Conn
			}

			public set Conn(value: __goscript_net.Conn | null) {
				this._fields.Conn = value
			}

			public get error(): $.GoError {
				return this._fields.error
			}

			public set error(value: $.GoError) {
				this._fields.error = value
			}

			public get primary(): boolean {
				return this._fields.primary
			}

			public set primary(value: boolean) {
				this._fields.primary = value
			}

			public get done(): boolean {
				return this._fields.done
			}

			public set done(value: boolean) {
				this._fields.done = value
			}

			public _fields: {
				Conn: __goscript_net.Conn | null
				error: $.GoError
				primary: boolean
				done: boolean
			}

			constructor(init?: Partial<{Conn?: __goscript_net.Conn | null, error?: $.GoError, primary?: boolean, done?: boolean}>, __goscriptValue?: boolean) {
				this._fields = {
					Conn: init?.Conn ?? (null! as __goscript_net.Conn | null),
					error: init?.error ?? (null! as $.GoError),
					primary: init?.primary ?? (false as boolean),
					done: init?.done ?? (false as boolean)
				}
				;(this as any)[$.structValueMarker] = __goscriptValue === true
			}

			public clone(): dialResult {
				return new dialResult(this, true)
			}

			public __goscriptAssign(source: dialResult): void {
				const target = this._fields
				const values = source._fields
				target.Conn = $.assignFieldValue(target.Conn, values.Conn, "net.Conn")
				target.error = $.assignFieldValue(target.error, values.error, "error")
				target.primary = values.primary
				target.done = values.done
			}

			public async Close(): globalThis.Promise<any> {
				return await $.pointerValue<Exclude<__goscript_net.Conn | null, null>>(this.Conn).Close()
			}

			public async LocalAddr(): globalThis.Promise<any> {
				return await $.pointerValue<Exclude<__goscript_net.Conn | null, null>>(this.Conn).LocalAddr()
			}

			public async Read(b: any): globalThis.Promise<any> {
				return await $.pointerValue<Exclude<__goscript_net.Conn | null, null>>(this.Conn).Read(b)
			}

			public async RemoteAddr(): globalThis.Promise<any> {
				return await $.pointerValue<Exclude<__goscript_net.Conn | null, null>>(this.Conn).RemoteAddr()
			}

			public async SetDeadline(t: any): globalThis.Promise<any> {
				return await $.pointerValue<Exclude<__goscript_net.Conn | null, null>>(this.Conn).SetDeadline(t)
			}

			public async SetReadDeadline(t: any): globalThis.Promise<any> {
				return await $.pointerValue<Exclude<__goscript_net.Conn | null, null>>(this.Conn).SetReadDeadline(t)
			}

			public async SetWriteDeadline(t: any): globalThis.Promise<any> {
				return await $.pointerValue<Exclude<__goscript_net.Conn | null, null>>(this.Conn).SetWriteDeadline(t)
			}

			public async Write(b: any): globalThis.Promise<any> {
				return await $.pointerValue<Exclude<__goscript_net.Conn | null, null>>(this.Conn).Write(b)
			}

			static __typeInfo = $.registerStructType(
				"net.dialResult",
				() => new dialResult(),
				() => [$.methodSignature("Close", [], ["error"]), $.methodSignature("LocalAddr", [], ["net.Addr"]), $.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("RemoteAddr", [], ["net.Addr"]), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])],
				dialResult,
				() => [/* @__PURE__ */ $.structField("Conn", "net.Conn", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("error", "error", [1], 16, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("primary", /* @__PURE__ */ $.basicType("bool"), [2], 32, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("done", /* @__PURE__ */ $.basicType("bool"), [3], 33, false, { pkgPath: "net" })]
			)
		}
		let results: $.Channel<dialResult> | null = $.makeChannel<dialResult>(0, $.markAsStructValue(new dialResult()), "both")

		let startRacer: ((ctx: context.Context | null, primary: boolean) => void) | null = $.functionValue(async (ctx: context.Context | null, primary: boolean): globalThis.Promise<void> => {
			let ras: __goscript_ipsock.addrList = (primaries as __goscript_ipsock.addrList)
			if (!primary) {
				ras = (fallbacks as __goscript_ipsock.addrList)
			}
			let [c, err] = await (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as sysDialer).dialSerial(ctx, (ras as __goscript_ipsock.addrList)) : sysDialer.prototype.dialSerial.call(sd, ctx, (ras as __goscript_ipsock.addrList)))
			const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: true,
					channel: results,
					value: $.markAsStructValue(new dialResult({Conn: c, error: err, primary: primary, done: true})),
				},
				{
					id: 1,
					isSend: false,
					channel: returned,
					onSelected: async (__goscriptSelect1Result) => {
						if (c != null) {
							void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_net.Conn, null>) : $.pointerValue<Exclude<__goscript_net.Conn, null>>(c)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
					}
				}
			], false)
			if (__goscriptSelect1HasReturn) {
				return __goscriptSelect1Value
			}
		}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("bool")], results: [] } as $.FunctionTypeInfo))

		let primary: dialResult = $.markAsStructValue(new dialResult())
		let fallback: dialResult = $.markAsStructValue(new dialResult())

		// Start the main racer.
		let [primaryCtx, primaryCancel] = context.WithCancel($.pointerValueOrNil(ctx)!)
		const __goscriptDeferCallee5 = primaryCancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee5!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		const __goscriptDeferCallee6 = startRacer
		const __goscriptDeferArg1 = primaryCtx
		queueMicrotask(async () => { (__goscriptAwait = __goscriptDeferCallee6!(__goscriptDeferArg1, true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		// Start the timer for the fallback racer.
		let fallbackTimer: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer($.pointerValue<sysDialer>(sd).Dialer.fallbackDelay())
		__defer.defer(() => { time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(fallbackTimer)) })

		while (true) {
			const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, [__goscript_net.Conn | null, $.GoError]>([
				{
					id: 0,
					isSend: false,
					channel: $.pointerValue<time.Timer>(fallbackTimer).C,
					onSelected: async (__goscriptSelect2Result) => {
						let [fallbackCtx, fallbackCancel] = context.WithCancel($.pointerValueOrNil(ctx)!)
						const __goscriptDeferCallee7 = fallbackCancel
						__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee7!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
						const __goscriptDeferCallee8 = startRacer
						const __goscriptDeferArg2 = fallbackCtx
						queueMicrotask(async () => { (__goscriptAwait = __goscriptDeferCallee8!(__goscriptDeferArg2, false), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
					}
				},
				{
					id: 1,
					isSend: false,
					channel: results,
					onSelected: async (__goscriptSelect2Result) => {
						let res = __goscriptSelect2Result.value
						if (res.error == null) {
							return [res.Conn, null]
						}
						if (res.primary) {
							primary = $.assignStruct(primary, res)
						} else {
							fallback = $.assignStruct(fallback, res)
						}
						if (primary.done && fallback.done) {
							return [null, primary.error]
						}
						if (res.primary && time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(fallbackTimer))) {
							// If we were able to stop the timer, that means it
							// was running (hadn't yet started the fallback), but
							// we just got an error on the primary path, so start
							// the fallback immediately (in 0 nanoseconds).
							time.Timer.prototype.Reset.call($.pointerValue<time.Timer>(fallbackTimer), 0n)
						}
					}
				}
			], false)
			if (__goscriptSelect2HasReturn) {
				return __goscriptSelect2Value
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async dialSerial(ctx: context.Context | null, ras: __goscript_ipsock.addrList): globalThis.Promise<[__goscript_net.Conn | null, $.GoError]> {
		const sd: sysDialer | $.VarRef<sysDialer> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const sd$: sysDialer = sd == null ? $.pointerTarget<sysDialer>(sd) : (sd as any).__isVarRef === true ? (sd as any).value : (sd as any).__goValue === undefined ? (sd as any) : $.pointerTarget<sysDialer>(sd)
		let firstErr: $.GoError = null! as $.GoError

		for (let __goscriptRangeTarget0 = ras, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let ra = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as __goscript_net.Addr | null)
			const [__goscriptSelect3HasReturn, __goscriptSelect3Value] = await $.selectStatement<any, [__goscript_net.Conn | null, $.GoError]>([
				{
					id: 0,
					isSend: false,
					channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
					onSelected: async (__goscriptSelect3Result) => {
						return [null, $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField0 = __goscript_net.mapErr((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)); return new __goscript_net.OpError({Op: "dial", Net: (sd$ as sysDialer).network, Source: (sd$ as sysDialer).Dialer.LocalAddr, Addr: ra, Err: __goscriptLiteralField0}) })()), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
					}
				},
				{
					id: -1,
					isSend: false,
					channel: null,
				}
			], true)
			if (__goscriptSelect3HasReturn) {
				return __goscriptSelect3Value
			}

			let dialCtx: context.Context | null = ctx
			{
				let [deadline, hasDeadline] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Deadline()
				if (hasDeadline) {
					let __goscriptShadow5 = partialDeadline
					let __goscriptTuple13: any = __goscriptShadow5($.markAsStructValue($.cloneStructValue(time.Now())), deadline, $.sliceLen((ras as __goscript_ipsock.addrList)) - i)
					let __goscriptShadow6 = __goscriptTuple13[0]
					let err = __goscriptTuple13[1]
					if (err != null) {
						// Ran out of time.
						if (firstErr == null) {
							firstErr = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "dial", Net: (sd$ as sysDialer).network, Source: (sd$ as sysDialer).Dialer.LocalAddr, Addr: ra, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
						}
						break
					}
					if ($.markAsStructValue($.cloneStructValue(__goscriptShadow6)).Before($.markAsStructValue($.cloneStructValue(deadline)))) {
						let cancel: context.CancelFunc | null = null! as context.CancelFunc | null
						let __goscriptTuple14: any = context.WithDeadline($.pointerValueOrNil(ctx)!, $.markAsStructValue($.cloneStructValue(__goscriptShadow6)))
						dialCtx = __goscriptTuple14[0]
						cancel = __goscriptTuple14[1]
						const __goscriptDeferCallee9 = cancel
						__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee9!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
					}
				}
			}

			let [c, err] = await (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as sysDialer).dialSingle(dialCtx, ra) : sysDialer.prototype.dialSingle.call(sd, dialCtx, ra))
			if (err == null) {
				return [c, null]
			}
			if (firstErr == null) {
				firstErr = err
			}
		}

		if (firstErr == null) {
			firstErr = $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "dial", Net: (sd$ as sysDialer).network, Source: null, Addr: null, Err: __goscript_net.errMissingAddress}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))
		}
		return [null, firstErr]
	}

	public async dialSingle(ctx: context.Context | null, ra: __goscript_net.Addr | null): globalThis.Promise<[__goscript_net.Conn | null, $.GoError]> {
		const sd: sysDialer | $.VarRef<sysDialer> | null = this;
		let c: __goscript_net.Conn | null = null! as __goscript_net.Conn | null
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const sd$: sysDialer = sd == null ? $.pointerTarget<sysDialer>(sd) : (sd as any).__isVarRef === true ? (sd as any).value : (sd as any).__goValue === undefined ? (sd as any) : $.pointerTarget<sysDialer>(sd)
		let __goscriptTuple15: any = $.typeAssertTuple<nettrace.Trace | $.VarRef<nettrace.Trace> | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new nettrace.TraceKey(undefined, true), "nettrace.TraceKey", "nettrace.TraceKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("nettrace.Trace"))
		let trace: nettrace.Trace | $.VarRef<nettrace.Trace> | null = __goscriptTuple15[0]
		let trace$: nettrace.Trace = trace == null ? $.pointerTarget<nettrace.Trace>(trace) : (trace as any).__isVarRef === true ? (trace as any).value : (trace as any).__goValue === undefined ? (trace as any) : $.pointerTarget<nettrace.Trace>(trace)
		if (trace != null) {
			let raStr = (__goscriptAwait = (ra !== null && (ra as any).__isVarRef !== true && (ra as any).__goValue === undefined ? (ra as Exclude<__goscript_net.Addr, null>) : $.pointerValue<Exclude<__goscript_net.Addr, null>>(ra)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ((trace$ as nettrace.Trace).ConnectStart != null) {
				void (__goscriptAwait = (trace$ as nettrace.Trace).ConnectStart!((sd$ as sysDialer).network, raStr), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if ((trace$ as nettrace.Trace).ConnectDone != null) {
				__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
					await (trace$ as nettrace.Trace).ConnectDone!((sd$ as sysDialer).network, raStr, err)
				})() })
			}
		}
		let la = (sd$ as sysDialer).Dialer.LocalAddr
		{
			const __goscriptTypeSwitchValue = ra
			switch (true) {
				case $.typeAssert<__goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.TCPAddr")).ok:
					{
						let ra: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null = $.typeAssert<__goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.TCPAddr")).value
						let __goscriptShadow7 = la
						let __goscriptTuple16: any = $.typeAssertTuple<__goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null>(__goscriptShadow7, /* @__PURE__ */ $.pointerType("net.TCPAddr"))
						let __goscriptShadow8: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null = __goscriptTuple16[0]
						if ((sd$ as sysDialer).Dialer.MultipathTCP()) {
							let __goscriptTuple17: any = await (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as sysDialer).dialMPTCP(ctx, __goscriptShadow8, ra) : sysDialer.prototype.dialMPTCP.call(sd, ctx, __goscriptShadow8, ra))
							c = $.interfaceValue<__goscript_net.Conn | null>(__goscriptTuple17[0], "*net.TCPConn", /* @__PURE__ */ $.pointerType("net.TCPConn"))
							err = __goscriptTuple17[1]
						} else {
							let __goscriptTuple18: any = await (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as sysDialer).dialTCP(ctx, __goscriptShadow8, ra) : sysDialer.prototype.dialTCP.call(sd, ctx, __goscriptShadow8, ra))
							c = $.interfaceValue<__goscript_net.Conn | null>(__goscriptTuple18[0], "*net.TCPConn", /* @__PURE__ */ $.pointerType("net.TCPConn"))
							err = __goscriptTuple18[1]
						}
					}
					break
				case $.typeAssert<__goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UDPAddr")).ok:
					{
						let ra: __goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null = $.typeAssert<__goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UDPAddr")).value
						let __goscriptShadow9 = la
						let __goscriptTuple19: any = $.typeAssertTuple<__goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null>(__goscriptShadow9, /* @__PURE__ */ $.pointerType("net.UDPAddr"))
						let __goscriptShadow10: __goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null = __goscriptTuple19[0]
						let __goscriptTuple20: any = await (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as sysDialer).dialUDP(ctx, __goscriptShadow10, ra) : sysDialer.prototype.dialUDP.call(sd, ctx, __goscriptShadow10, ra))
						c = $.interfaceValue<__goscript_net.Conn | null>(__goscriptTuple20[0], "*net.UDPConn", /* @__PURE__ */ $.pointerType("net.UDPConn"))
						err = __goscriptTuple20[1]
					}
					break
				case $.typeAssert<__goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.IPAddr")).ok:
					{
						let ra: __goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null = $.typeAssert<__goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.IPAddr")).value
						let __goscriptShadow11 = la
						let __goscriptTuple21: any = $.typeAssertTuple<__goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null>(__goscriptShadow11, /* @__PURE__ */ $.pointerType("net.IPAddr"))
						let __goscriptShadow12: __goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null = __goscriptTuple21[0]
						let __goscriptTuple22: any = await (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as sysDialer).dialIP(ctx, __goscriptShadow12, ra) : sysDialer.prototype.dialIP.call(sd, ctx, __goscriptShadow12, ra))
						c = $.interfaceValue<__goscript_net.Conn | null>(__goscriptTuple22[0], "*net.IPConn", /* @__PURE__ */ $.pointerType("net.IPConn"))
						err = __goscriptTuple22[1]
					}
					break
				case $.typeAssert<__goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UnixAddr")).ok:
					{
						let ra: __goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null = $.typeAssert<__goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UnixAddr")).value
						let __goscriptShadow13 = la
						let __goscriptTuple23: any = $.typeAssertTuple<__goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null>(__goscriptShadow13, /* @__PURE__ */ $.pointerType("net.UnixAddr"))
						let __goscriptShadow14: __goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null = __goscriptTuple23[0]
						let __goscriptTuple24: any = await (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as sysDialer).dialUnix(ctx, __goscriptShadow14, ra) : sysDialer.prototype.dialUnix.call(sd, ctx, __goscriptShadow14, ra))
						c = $.interfaceValue<__goscript_net.Conn | null>(__goscriptTuple24[0], "*net.UnixConn", /* @__PURE__ */ $.pointerType("net.UnixConn"))
						err = __goscriptTuple24[1]
					}
					break
				default:
					{
						let ra: any = __goscriptTypeSwitchValue
						const __goscriptReturn10: [__goscript_net.Conn | null, $.GoError] = [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "dial", Net: (sd$ as sysDialer).network, Source: la, Addr: ra, Err: $.interfaceValue<$.GoError>(new __goscript_net.AddrError({Err: "unexpected address type", Addr: (sd$ as sysDialer).address}), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
						c = __goscriptReturn10[0]
						err = __goscriptReturn10[1]
						await __defer.dispose()
						return [c, err]
					}
					break
			}
		}
		if (err != null) {
			const __goscriptReturn11: [__goscript_net.Conn | null, $.GoError] = [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "dial", Net: (sd$ as sysDialer).network, Source: la, Addr: ra, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
			c = __goscriptReturn11[0]
			err = __goscriptReturn11[1]
			await __defer.dispose()
			return [c, err]
		}
		const __goscriptReturn12: [__goscript_net.Conn | null, $.GoError] = [c, null]
		c = __goscriptReturn12[0]
		err = __goscriptReturn12[1]
		await __defer.dispose()
		return [c, err]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async dialTCP(ctx: context.Context | null, laddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null, raddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null): globalThis.Promise<[__goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, $.GoError]> {
		const sd: sysDialer | $.VarRef<sysDialer> | null = this;
		const sd$: sysDialer = sd == null ? $.pointerTarget<sysDialer>(sd) : (sd as any).__isVarRef === true ? (sd as any).value : (sd as any).__goValue === undefined ? (sd as any) : $.pointerTarget<sysDialer>(sd)
		{
			let h: ((ctx: context.Context | null, net: string, laddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null, raddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null) => [__goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, $.GoError] | globalThis.Promise<[__goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, $.GoError]>) | null = (sd$ as sysDialer).testHookDialTCP
			if (h != null) {
				return h!(ctx, (sd$ as sysDialer).network, laddr, raddr)
			}
		}
		{
			let h: ((ctx: context.Context | null, net: string, laddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null, raddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null) => [__goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, $.GoError] | globalThis.Promise<[__goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, $.GoError]>) | null = __goscript_hook.testHookDialTCP
			if (h != null) {
				return h!(ctx, (sd$ as sysDialer).network, laddr, raddr)
			}
		}
		return (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as sysDialer).doDialTCP(ctx, laddr, raddr) : sysDialer.prototype.doDialTCP.call(sd, ctx, laddr, raddr))
	}

	public async dialUDP(ctx: context.Context | null, laddr: __goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null, raddr: __goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null): globalThis.Promise<[__goscript_udpsock.UDPConn | $.VarRef<__goscript_udpsock.UDPConn> | null, $.GoError]> {
		const sd: sysDialer | $.VarRef<sysDialer> | null = this;
		const sd$: sysDialer = sd == null ? $.pointerTarget<sysDialer>(sd) : (sd as any).__isVarRef === true ? (sd as any).value : (sd as any).__goValue === undefined ? (sd as any) : $.pointerTarget<sysDialer>(sd)
		let ctrlCtxFn: ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null = (sd$ as sysDialer).Dialer.ControlContext
		if ((ctrlCtxFn == null) && ((sd$ as sysDialer).Dialer.Control != null)) {
			ctrlCtxFn = $.functionValue(async (ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null): globalThis.Promise<$.GoError> => {
				return await (sd$ as sysDialer).Dialer.Control!(network, address, c)
			}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), "syscall.RawConn"], results: ["error"] } as $.FunctionTypeInfo))
		}
		let __goscriptTuple25: any = await __goscript_ipsock_posix.internetSocket(ctx, (sd$ as sysDialer).network, $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(laddr, "*net.UDPAddr", /* @__PURE__ */ $.pointerType("net.UDPAddr")), $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(raddr, "*net.UDPAddr", /* @__PURE__ */ $.pointerType("net.UDPAddr")), 2, 0, "dial", ctrlCtxFn)
		let fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null = __goscriptTuple25[0]
		let err = __goscriptTuple25[1]
		if (err != null) {
			return [null, err]
		}
		return [__goscript_udpsock.newUDPConn(fd), null]
	}

	public async dialUnix(ctx: context.Context | null, laddr: __goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null, raddr: __goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null): globalThis.Promise<[__goscript_unixsock.UnixConn | $.VarRef<__goscript_unixsock.UnixConn> | null, $.GoError]> {
		const sd: sysDialer | $.VarRef<sysDialer> | null = this;
		const sd$: sysDialer = sd == null ? $.pointerTarget<sysDialer>(sd) : (sd as any).__isVarRef === true ? (sd as any).value : (sd as any).__goValue === undefined ? (sd as any) : $.pointerTarget<sysDialer>(sd)
		let ctrlCtxFn: ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null = (sd$ as sysDialer).Dialer.ControlContext
		if ((ctrlCtxFn == null) && ((sd$ as sysDialer).Dialer.Control != null)) {
			ctrlCtxFn = $.functionValue(async (ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null): globalThis.Promise<$.GoError> => {
				return await (sd$ as sysDialer).Dialer.Control!(network, address, c)
			}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), "syscall.RawConn"], results: ["error"] } as $.FunctionTypeInfo))
		}
		let __goscriptTuple26: any = await __goscript_unixsock_posix.unixSocket(ctx, (sd$ as sysDialer).network, $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(laddr, "*net.UnixAddr", /* @__PURE__ */ $.pointerType("net.UnixAddr")), $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(raddr, "*net.UnixAddr", /* @__PURE__ */ $.pointerType("net.UnixAddr")), "dial", ctrlCtxFn)
		let fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null = __goscriptTuple26[0]
		let err = __goscriptTuple26[1]
		if (err != null) {
			return [null, err]
		}
		return [__goscript_unixsock.newUnixConn(fd), null]
	}

	public async doDialTCP(ctx: context.Context | null, laddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null, raddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null): globalThis.Promise<[__goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, $.GoError]> {
		const sd: sysDialer | $.VarRef<sysDialer> | null = this;
		return (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as sysDialer).doDialTCPProto(ctx, laddr, raddr, 0) : sysDialer.prototype.doDialTCPProto.call(sd, ctx, laddr, raddr, 0))
	}

	public async doDialTCPProto(ctx: context.Context | null, laddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null, raddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null, proto: number): globalThis.Promise<[__goscript_tcpsock.TCPConn | $.VarRef<__goscript_tcpsock.TCPConn> | null, $.GoError]> {
		const sd: sysDialer | $.VarRef<sysDialer> | null = this;
		const sd$: sysDialer = sd == null ? $.pointerTarget<sysDialer>(sd) : (sd as any).__isVarRef === true ? (sd as any).value : (sd as any).__goValue === undefined ? (sd as any) : $.pointerTarget<sysDialer>(sd)
		let ctrlCtxFn: ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null = (sd$ as sysDialer).Dialer.ControlContext
		if ((ctrlCtxFn == null) && ((sd$ as sysDialer).Dialer.Control != null)) {
			ctrlCtxFn = $.functionValue(async (ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null): globalThis.Promise<$.GoError> => {
				return await (sd$ as sysDialer).Dialer.Control!(network, address, c)
			}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), "syscall.RawConn"], results: ["error"] } as $.FunctionTypeInfo))
		}
		let __goscriptTuple27: any = await __goscript_ipsock_posix.internetSocket(ctx, (sd$ as sysDialer).network, $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(laddr, "*net.TCPAddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")), $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(raddr, "*net.TCPAddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")), 1, proto, "dial", ctrlCtxFn)
		let fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null = __goscriptTuple27[0]
		let err = __goscriptTuple27[1]
		// The value 0 is the system default, linked to defaultMPTCPEnabledListen

		// If MPTCP is disabled via GODEBUG=multipathtcp=0 or only
		// enabled on dialers, but not on listeners.

		for (let i = 0; ((i < 2) && ((laddr == null) || ($.pointerValue<__goscript_tcpsock.TCPAddr>(laddr).Port == 0))) && (__goscript_tcpsock_posix.selfConnect(fd, err) || __goscript_tcpsock_posix.spuriousENOTAVAIL(err)); i++) {
			if (err == null) {
				await (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as __goscript_fd_fake.netFD).Close() : __goscript_fd_fake.netFD.prototype.Close.call(fd))
			}
			let __goscriptTuple28: any = await __goscript_ipsock_posix.internetSocket(ctx, (sd$ as sysDialer).network, $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(laddr, "*net.TCPAddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")), $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(raddr, "*net.TCPAddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")), 1, proto, "dial", ctrlCtxFn)
			fd = __goscriptTuple28[0]
			err = __goscriptTuple28[1]
		}

		if (err != null) {
			return [null, err]
		}
		return [await __goscript_tcpsock.newTCPConn(fd, (sd$ as sysDialer).Dialer.KeepAlive, ((sd$ as sysDialer).Dialer.KeepAliveConfig).clone(), __goscript_hook.__goscript_get_testPreHookSetKeepAlive(), __goscript_hook.__goscript_get_testHookSetKeepAlive()), null]
	}

	public async Dial(network: any, address: any): globalThis.Promise<any> {
		return await $.pointerValue<Dialer>(this.Dialer).Dial(network, address)
	}

	public async DialContext(ctx: any, network: any, address: any): globalThis.Promise<any> {
		return await $.pointerValue<Dialer>(this.Dialer).DialContext(ctx, network, address)
	}

	public async DialIP(ctx: any, network: any, laddr: any, raddr: any): globalThis.Promise<any> {
		return await $.pointerValue<Dialer>(this.Dialer).DialIP(ctx, network, laddr, raddr)
	}

	public async DialTCP(ctx: any, network: any, laddr: any, raddr: any): globalThis.Promise<any> {
		return await $.pointerValue<Dialer>(this.Dialer).DialTCP(ctx, network, laddr, raddr)
	}

	public async DialUDP(ctx: any, network: any, laddr: any, raddr: any): globalThis.Promise<any> {
		return await $.pointerValue<Dialer>(this.Dialer).DialUDP(ctx, network, laddr, raddr)
	}

	public async DialUnix(ctx: any, network: any, laddr: any, raddr: any): globalThis.Promise<any> {
		return await $.pointerValue<Dialer>(this.Dialer).DialUnix(ctx, network, laddr, raddr)
	}

	public MultipathTCP(): any {
		return $.pointerValue<Dialer>(this.Dialer).MultipathTCP()
	}

	public SetMultipathTCP(use: any): any {
		return $.pointerValue<Dialer>(this.Dialer).SetMultipathTCP(use)
	}

	public async deadline(ctx: any, now: any): globalThis.Promise<any> {
		return await $.pointerValue<Dialer>(this.Dialer).deadline(ctx, now)
	}

	public async dialCtx(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Dialer>(this.Dialer).dialCtx(ctx)
	}

	public dualStack(): any {
		return $.pointerValue<Dialer>(this.Dialer).dualStack()
	}

	public fallbackDelay(): any {
		return $.pointerValue<Dialer>(this.Dialer).fallbackDelay()
	}

	public resolver(): any {
		return $.pointerValue<Dialer>(this.Dialer).resolver()
	}

	static __typeInfo = $.registerStructType(
		"net.sysDialer",
		() => new sysDialer(),
		() => [$.methodSignature("dialIP", [["ctx", "context.Context"], ["laddr", /* @__PURE__ */ $.pointerType("net.IPAddr")], ["raddr", /* @__PURE__ */ $.pointerType("net.IPAddr")]], [/* @__PURE__ */ $.pointerType("net.IPConn"), "error"], true), $.methodSignature("dialMPTCP", [["ctx", "context.Context"], ["laddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")], ["raddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")]], [/* @__PURE__ */ $.pointerType("net.TCPConn"), "error"], true), $.methodSignature("dialParallel", [["ctx", "context.Context"], ["primaries", /* @__PURE__ */ $.sliceType("net.Addr", "net.addrList")], ["fallbacks", /* @__PURE__ */ $.sliceType("net.Addr", "net.addrList")]], ["net.Conn", "error"], true), $.methodSignature("dialSerial", [["ctx", "context.Context"], ["ras", /* @__PURE__ */ $.sliceType("net.Addr", "net.addrList")]], ["net.Conn", "error"], true), $.methodSignature("dialSingle", [["ctx", "context.Context"], ["ra", "net.Addr"]], [["c", "net.Conn"], ["err", "error"]], true), $.methodSignature("dialTCP", [["ctx", "context.Context"], ["laddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")], ["raddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")]], [/* @__PURE__ */ $.pointerType("net.TCPConn"), "error"], true), $.methodSignature("dialUDP", [["ctx", "context.Context"], ["laddr", /* @__PURE__ */ $.pointerType("net.UDPAddr")], ["raddr", /* @__PURE__ */ $.pointerType("net.UDPAddr")]], [/* @__PURE__ */ $.pointerType("net.UDPConn"), "error"], true), $.methodSignature("dialUnix", [["ctx", "context.Context"], ["laddr", /* @__PURE__ */ $.pointerType("net.UnixAddr")], ["raddr", /* @__PURE__ */ $.pointerType("net.UnixAddr")]], [/* @__PURE__ */ $.pointerType("net.UnixConn"), "error"], true), $.methodSignature("doDialTCP", [["ctx", "context.Context"], ["laddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")], ["raddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")]], [/* @__PURE__ */ $.pointerType("net.TCPConn"), "error"], true), $.methodSignature("doDialTCPProto", [["ctx", "context.Context"], ["laddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")], ["raddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")], ["proto", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("net.TCPConn"), "error"], true), $.methodSignature("Dial", [["network", /* @__PURE__ */ $.basicType("string")], ["address", /* @__PURE__ */ $.basicType("string")]], ["net.Conn", "error"], true), $.methodSignature("DialContext", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["address", /* @__PURE__ */ $.basicType("string")]], ["net.Conn", "error"], true), $.methodSignature("DialIP", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["laddr", "netip.Addr"], ["raddr", "netip.Addr"]], [/* @__PURE__ */ $.pointerType("net.IPConn"), "error"], true), $.methodSignature("DialTCP", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["laddr", "netip.AddrPort"], ["raddr", "netip.AddrPort"]], [/* @__PURE__ */ $.pointerType("net.TCPConn"), "error"], true), $.methodSignature("DialUDP", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["laddr", "netip.AddrPort"], ["raddr", "netip.AddrPort"]], [/* @__PURE__ */ $.pointerType("net.UDPConn"), "error"], true), $.methodSignature("DialUnix", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["laddr", /* @__PURE__ */ $.pointerType("net.UnixAddr")], ["raddr", /* @__PURE__ */ $.pointerType("net.UnixAddr")]], [/* @__PURE__ */ $.pointerType("net.UnixConn"), "error"], true), $.methodSignature("MultipathTCP", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("SetMultipathTCP", [["use", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("deadline", [["ctx", "context.Context"], ["now", "time.Time"]], [["earliest", "time.Time"]], true), $.methodSignature("dialCtx", [["ctx", "context.Context"]], ["context.Context", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("dualStack", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("fallbackDelay", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("resolver", [], [/* @__PURE__ */ $.pointerType("net.Resolver")], true)],
		sysDialer,
		() => [/* @__PURE__ */ $.structField("Dialer", "net.Dialer", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("network", /* @__PURE__ */ $.basicType("string"), [1], 144, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("address", /* @__PURE__ */ $.basicType("string"), [2], 160, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("testHookDialTCP", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("net.TCPAddr"), /* @__PURE__ */ $.pointerType("net.TCPAddr")], results: [/* @__PURE__ */ $.pointerType("net.TCPConn"), "error"] } as $.FunctionTypeInfo), [3], 176, false, { pkgPath: "net" })]
	)
}

export class ListenConfig {
	// If Control is not nil, it is called after creating the network
	// connection but before binding it to the operating system.
	//
	// Network and address parameters passed to Control function are not
	// necessarily the ones passed to Listen. Calling Listen with TCP networks
	// will cause the Control function to be called with "tcp4" or "tcp6",
	// UDP networks become "udp4" or "udp6", IP networks become "ip4" or "ip6",
	// and other known networks are passed as-is.
	public get Control(): ((network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.Control
	}

	public set Control(value: ((network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.Control = value
	}

	// KeepAlive specifies the keep-alive period for network
	// connections accepted by this listener.
	//
	// KeepAlive is ignored if KeepAliveConfig.Enable is true.
	//
	// If zero, keep-alive are enabled if supported by the protocol
	// and operating system. Network protocols or operating systems
	// that do not support keep-alive ignore this field.
	// If negative, keep-alive are disabled.
	public get KeepAlive(): time.Duration {
		return this._fields.KeepAlive
	}

	public set KeepAlive(value: time.Duration) {
		this._fields.KeepAlive = value
	}

	// KeepAliveConfig specifies the keep-alive probe configuration
	// for an active network connection, when supported by the
	// protocol and operating system.
	//
	// If KeepAliveConfig.Enable is true, keep-alive probes are enabled.
	// If KeepAliveConfig.Enable is false and KeepAlive is negative,
	// keep-alive probes are disabled.
	public get KeepAliveConfig(): __goscript_tcpsock.KeepAliveConfig {
		return this._fields.KeepAliveConfig
	}

	public set KeepAliveConfig(value: __goscript_tcpsock.KeepAliveConfig) {
		this._fields.KeepAliveConfig = value
	}

	// If mptcpStatus is set to a value allowing Multipath TCP (MPTCP) to be
	// used, any call to Listen with "tcp(4|6)" as network will use MPTCP if
	// supported by the operating system.
	public get mptcpStatus(): mptcpStatusListen {
		return this._fields.mptcpStatus
	}

	public set mptcpStatus(value: mptcpStatusListen) {
		this._fields.mptcpStatus = value
	}

	public _fields: {
		Control: ((network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		KeepAlive: time.Duration
		KeepAliveConfig: __goscript_tcpsock.KeepAliveConfig
		mptcpStatus: mptcpStatusListen
	}

	constructor(init?: Partial<{Control?: ((network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null, KeepAlive?: time.Duration, KeepAliveConfig?: __goscript_tcpsock.KeepAliveConfig, mptcpStatus?: mptcpStatusListen}>, __goscriptValue?: boolean) {
		this._fields = {
			Control: init?.Control ?? (null! as ((network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null),
			KeepAlive: init?.KeepAlive ?? (0n as time.Duration),
			KeepAliveConfig: init?.KeepAliveConfig ? init.KeepAliveConfig.clone() : new __goscript_tcpsock.KeepAliveConfig(undefined, true),
			mptcpStatus: init?.mptcpStatus ?? (0 as mptcpStatusListen)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListenConfig {
		return new ListenConfig(this, true)
	}

	public __goscriptAssign(source: ListenConfig): void {
		const target = this._fields
		const values = source._fields
		target.Control = values.Control
		target.KeepAlive = values.KeepAlive
		$.assignStruct(target.KeepAliveConfig, values.KeepAliveConfig)
		target.mptcpStatus = values.mptcpStatus
	}

	public async Listen(ctx: context.Context | null, network: string, address: string): globalThis.Promise<[__goscript_net.Listener | null, $.GoError]> {
		const lc: ListenConfig | $.VarRef<ListenConfig> | null = this;
		let __goscriptTuple29: any = await __goscript_lookup.Resolver.prototype.resolveAddrList.call(__goscript_lookup.DefaultResolver, ctx, "listen", network, address, null)
		let addrs: __goscript_ipsock.addrList = (__goscriptTuple29[0] as __goscript_ipsock.addrList)
		let err = __goscriptTuple29[1]
		if (err != null) {
			return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "listen", Net: network, Source: null, Addr: null, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
		}
		let sl: sysListener | $.VarRef<sysListener> | null = new sysListener({ListenConfig: $.pointerValue<ListenConfig>(lc), network: network, address: address})
		let sl$: sysListener = sl == null ? $.pointerTarget<sysListener>(sl) : (sl as any).__isVarRef === true ? (sl as any).value : (sl as any).__goValue === undefined ? (sl as any) : $.pointerTarget<sysListener>(sl)
		let l: __goscript_net.Listener | null = null! as __goscript_net.Listener | null
		let la = await __goscript_ipsock.addrList_first(addrs, __goscript_ipsock.isIPv4)
		{
			const __goscriptTypeSwitchValue = la
			switch (true) {
				case $.typeAssert<__goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.TCPAddr")).ok:
					{
						let la: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null = $.typeAssert<__goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.TCPAddr")).value
						if ((sl$ as sysListener).ListenConfig.MultipathTCP()) {
							let __goscriptTuple30: any = await (sl !== null && (sl as any).__isVarRef !== true && (sl as any).__goValue === undefined ? ((sl as any) as sysListener).listenMPTCP(ctx, la) : sysListener.prototype.listenMPTCP.call(sl, ctx, la))
							l = $.interfaceValue<__goscript_net.Listener | null>(__goscriptTuple30[0], "*net.TCPListener", /* @__PURE__ */ $.pointerType("net.TCPListener"))
							err = __goscriptTuple30[1]
						} else {
							let __goscriptTuple31: any = await (sl !== null && (sl as any).__isVarRef !== true && (sl as any).__goValue === undefined ? ((sl as any) as sysListener).listenTCP(ctx, la) : sysListener.prototype.listenTCP.call(sl, ctx, la))
							l = $.interfaceValue<__goscript_net.Listener | null>(__goscriptTuple31[0], "*net.TCPListener", /* @__PURE__ */ $.pointerType("net.TCPListener"))
							err = __goscriptTuple31[1]
						}
					}
					break
				case $.typeAssert<__goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UnixAddr")).ok:
					{
						let la: __goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null = $.typeAssert<__goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UnixAddr")).value
						let __goscriptTuple32: any = await (sl !== null && (sl as any).__isVarRef !== true && (sl as any).__goValue === undefined ? ((sl as any) as sysListener).listenUnix(ctx, la) : sysListener.prototype.listenUnix.call(sl, ctx, la))
						l = $.interfaceValue<__goscript_net.Listener | null>(__goscriptTuple32[0], "*net.UnixListener", /* @__PURE__ */ $.pointerType("net.UnixListener"))
						err = __goscriptTuple32[1]
					}
					break
				default:
					{
						let la: any = __goscriptTypeSwitchValue
						return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "listen", Net: (sl$ as sysListener).network, Source: null, Addr: la, Err: $.interfaceValue<$.GoError>(new __goscript_net.AddrError({Err: "unexpected address type", Addr: address}), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
					}
					break
			}
		}
		if (err != null) {
			return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "listen", Net: (sl$ as sysListener).network, Source: null, Addr: la, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
		}
		return [l, null]
	}

	public async ListenPacket(ctx: context.Context | null, network: string, address: string): globalThis.Promise<[__goscript_net.PacketConn | null, $.GoError]> {
		const lc: ListenConfig | $.VarRef<ListenConfig> | null = this;
		let __goscriptTuple33: any = await __goscript_lookup.Resolver.prototype.resolveAddrList.call(__goscript_lookup.DefaultResolver, ctx, "listen", network, address, null)
		let addrs: __goscript_ipsock.addrList = (__goscriptTuple33[0] as __goscript_ipsock.addrList)
		let err = __goscriptTuple33[1]
		if (err != null) {
			return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "listen", Net: network, Source: null, Addr: null, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
		}
		let sl: sysListener | $.VarRef<sysListener> | null = new sysListener({ListenConfig: $.pointerValue<ListenConfig>(lc), network: network, address: address})
		let sl$: sysListener = sl == null ? $.pointerTarget<sysListener>(sl) : (sl as any).__isVarRef === true ? (sl as any).value : (sl as any).__goValue === undefined ? (sl as any) : $.pointerTarget<sysListener>(sl)
		let c: __goscript_net.PacketConn | null = null! as __goscript_net.PacketConn | null
		let la = await __goscript_ipsock.addrList_first(addrs, __goscript_ipsock.isIPv4)
		{
			const __goscriptTypeSwitchValue = la
			switch (true) {
				case $.typeAssert<__goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UDPAddr")).ok:
					{
						let la: __goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null = $.typeAssert<__goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UDPAddr")).value
						let __goscriptTuple34: any = await (sl !== null && (sl as any).__isVarRef !== true && (sl as any).__goValue === undefined ? ((sl as any) as sysListener).listenUDP(ctx, la) : sysListener.prototype.listenUDP.call(sl, ctx, la))
						c = $.interfaceValue<__goscript_net.PacketConn | null>(__goscriptTuple34[0], "*net.UDPConn", /* @__PURE__ */ $.pointerType("net.UDPConn"))
						err = __goscriptTuple34[1]
					}
					break
				case $.typeAssert<__goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.IPAddr")).ok:
					{
						let la: __goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null = $.typeAssert<__goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.IPAddr")).value
						let __goscriptTuple35: any = await (sl !== null && (sl as any).__isVarRef !== true && (sl as any).__goValue === undefined ? ((sl as any) as sysListener).listenIP(ctx, la) : sysListener.prototype.listenIP.call(sl, ctx, la))
						c = $.interfaceValue<__goscript_net.PacketConn | null>(__goscriptTuple35[0], "*net.IPConn", /* @__PURE__ */ $.pointerType("net.IPConn"))
						err = __goscriptTuple35[1]
					}
					break
				case $.typeAssert<__goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UnixAddr")).ok:
					{
						let la: __goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null = $.typeAssert<__goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UnixAddr")).value
						let __goscriptTuple36: any = await (sl !== null && (sl as any).__isVarRef !== true && (sl as any).__goValue === undefined ? ((sl as any) as sysListener).listenUnixgram(ctx, la) : sysListener.prototype.listenUnixgram.call(sl, ctx, la))
						c = $.interfaceValue<__goscript_net.PacketConn | null>(__goscriptTuple36[0], "*net.UnixConn", /* @__PURE__ */ $.pointerType("net.UnixConn"))
						err = __goscriptTuple36[1]
					}
					break
				default:
					{
						let la: any = __goscriptTypeSwitchValue
						return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "listen", Net: (sl$ as sysListener).network, Source: null, Addr: la, Err: $.interfaceValue<$.GoError>(new __goscript_net.AddrError({Err: "unexpected address type", Addr: address}), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
					}
					break
			}
		}
		if (err != null) {
			return [null, $.interfaceValue<$.GoError>(new __goscript_net.OpError({Op: "listen", Net: (sl$ as sysListener).network, Source: null, Addr: la, Err: err}), "*net.OpError", /* @__PURE__ */ $.pointerType("net.OpError"))]
		}
		return [c, null]
	}

	public MultipathTCP(): boolean {
		const lc: ListenConfig | $.VarRef<ListenConfig> | null = this;
		return mptcpStatusListen__get($.fieldRef($.pointerValue<ListenConfig>(lc)._fields, "mptcpStatus"))
	}

	public SetMultipathTCP(use: boolean): void {
		const lc: ListenConfig | $.VarRef<ListenConfig> | null = this;
		mptcpStatusListen__set($.fieldRef($.pointerValue<ListenConfig>(lc)._fields, "mptcpStatus"), use)
	}

	static __typeInfo = $.registerStructType(
		"net.ListenConfig",
		() => new ListenConfig(),
		() => [$.methodSignature("Listen", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["address", /* @__PURE__ */ $.basicType("string")]], ["net.Listener", "error"], true), $.methodSignature("ListenPacket", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["address", /* @__PURE__ */ $.basicType("string")]], ["net.PacketConn", "error"], true), $.methodSignature("MultipathTCP", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("SetMultipathTCP", [["use", /* @__PURE__ */ $.basicType("bool")]], [], true)],
		ListenConfig,
		() => [/* @__PURE__ */ $.structField("Control", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), "syscall.RawConn"], results: ["error"] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("KeepAlive", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 8, true), /* @__PURE__ */ $.structField("KeepAliveConfig", "net.KeepAliveConfig", [2], 16, true), /* @__PURE__ */ $.structField("mptcpStatus", /* @__PURE__ */ $.basicType("uint8", "net.mptcpStatusListen"), [3], 48, false, { pkgPath: "net" })]
	)
}

export class sysListener {
	public get ListenConfig(): ListenConfig {
		return this._fields.ListenConfig
	}

	public set ListenConfig(value: ListenConfig) {
		this._fields.ListenConfig = value
	}

	public get network(): string {
		return this._fields.network
	}

	public set network(value: string) {
		this._fields.network = value
	}

	public get address(): string {
		return this._fields.address
	}

	public set address(value: string) {
		this._fields.address = value
	}

	public _fields: {
		ListenConfig: ListenConfig
		network: string
		address: string
	}

	constructor(init?: Partial<{ListenConfig?: ListenConfig, network?: string, address?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			ListenConfig: init?.ListenConfig ? init.ListenConfig.clone() : new ListenConfig(undefined, true),
			network: init?.network ?? ("" as string),
			address: init?.address ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sysListener {
		return new sysListener(this, true)
	}

	public __goscriptAssign(source: sysListener): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.ListenConfig, values.ListenConfig)
		target.network = values.network
		target.address = values.address
	}

	public async listenIP(ctx: context.Context | null, laddr: __goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null): globalThis.Promise<[__goscript_iprawsock.IPConn | $.VarRef<__goscript_iprawsock.IPConn> | null, $.GoError]> {
		const sl: sysListener | $.VarRef<sysListener> | null = this;
		const sl$: sysListener = sl == null ? $.pointerTarget<sysListener>(sl) : (sl as any).__isVarRef === true ? (sl as any).value : (sl as any).__goValue === undefined ? (sl as any) : $.pointerTarget<sysListener>(sl)
		let __goscriptTuple37: any = await parseNetwork(ctx, (sl$ as sysListener).network, true)
		let network = __goscriptTuple37[0]
		let proto = __goscriptTuple37[1]
		let err = __goscriptTuple37[2]
		if (err != null) {
			return [null, err]
		}
		switch (network) {
			case "ip":
			case "ip4":
			case "ip6":
			{
				break
			}
			default:
			{
				return [null, $.namedValueInterfaceValue<$.GoError>((sl$ as sysListener).network, "net.UnknownNetworkError", {"Error": __goscript_net.UnknownNetworkError_Error}, /* @__PURE__ */ $.basicType("string", "net.UnknownNetworkError"))]
				break
			}
		}
		let ctrlCtxFn: ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null = null! as ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		if ((sl$ as sysListener).ListenConfig.Control != null) {
			ctrlCtxFn = $.functionValue(async (ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null): globalThis.Promise<$.GoError> => {
				return await (sl$ as sysListener).ListenConfig.Control!(network, address, c)
			}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), "syscall.RawConn"], results: ["error"] } as $.FunctionTypeInfo))
		}
		let __goscriptTuple38: any = await __goscript_ipsock_posix.internetSocket(ctx, network, $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(laddr, "*net.IPAddr", /* @__PURE__ */ $.pointerType("net.IPAddr")), null, 3, proto, "listen", ctrlCtxFn)
		let fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null = __goscriptTuple38[0]
		err = __goscriptTuple38[1]
		if (err != null) {
			return [null, err]
		}
		return [__goscript_iprawsock.newIPConn(fd), null]
	}

	public async listenMPTCP(ctx: context.Context | null, laddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null): globalThis.Promise<[__goscript_tcpsock.TCPListener | $.VarRef<__goscript_tcpsock.TCPListener> | null, $.GoError]> {
		const sl: sysListener | $.VarRef<sysListener> | null = this;
		return (sl !== null && (sl as any).__isVarRef !== true && (sl as any).__goValue === undefined ? ((sl as any) as sysListener).listenTCP(ctx, laddr) : sysListener.prototype.listenTCP.call(sl, ctx, laddr))
	}

	public async listenMulticastUDP(ctx: context.Context | null, ifi: __goscript__interface.Interface | $.VarRef<__goscript__interface.Interface> | null, gaddr: __goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null): globalThis.Promise<[__goscript_udpsock.UDPConn | $.VarRef<__goscript_udpsock.UDPConn> | null, $.GoError]> {
		const sl: sysListener | $.VarRef<sysListener> | null = this;
		const sl$: sysListener = sl == null ? $.pointerTarget<sysListener>(sl) : (sl as any).__isVarRef === true ? (sl as any).value : (sl as any).__goValue === undefined ? (sl as any) : $.pointerTarget<sysListener>(sl)
		const gaddr$: __goscript_udpsock.UDPAddr = gaddr == null ? $.pointerTarget<__goscript_udpsock.UDPAddr>(gaddr) : (gaddr as any).__isVarRef === true ? (gaddr as any).value : (gaddr as any).__goValue === undefined ? (gaddr as any) : $.pointerTarget<__goscript_udpsock.UDPAddr>(gaddr)
		let ctrlCtxFn: ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null = null! as ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		if ((sl$ as sysListener).ListenConfig.Control != null) {
			ctrlCtxFn = $.functionValue(async (ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null): globalThis.Promise<$.GoError> => {
				return await (sl$ as sysListener).ListenConfig.Control!(network, address, c)
			}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), "syscall.RawConn"], results: ["error"] } as $.FunctionTypeInfo))
		}
		let __goscriptTuple39: any = await __goscript_ipsock_posix.internetSocket(ctx, (sl$ as sysListener).network, $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(gaddr, "*net.UDPAddr", /* @__PURE__ */ $.pointerType("net.UDPAddr")), null, 2, 0, "listen", ctrlCtxFn)
		let fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null = __goscriptTuple39[0]
		let err = __goscriptTuple39[1]
		if (err != null) {
			return [null, err]
		}
		let c: __goscript_udpsock.UDPConn | $.VarRef<__goscript_udpsock.UDPConn> | null = __goscript_udpsock.newUDPConn(fd)
		{
			let ip4: __goscript_ip.IP = (__goscript_ip.IP_To4((gaddr$ as __goscript_udpsock.UDPAddr).IP) as __goscript_ip.IP)
			if (ip4 != null) {
				{
					let __goscriptShadow15 = __goscript_udpsock_posix.listenIPv4MulticastUDP(c, ifi, (ip4 as __goscript_ip.IP))
					if (__goscriptShadow15 != null) {
						await $.pointerValue<__goscript_udpsock.UDPConn>(c).conn.Close()
						return [null, __goscriptShadow15]
					}
				}
			} else {
				{
					let __goscriptShadow16 = __goscript_udpsock_posix.listenIPv6MulticastUDP(c, ifi, ((gaddr$ as __goscript_udpsock.UDPAddr).IP as __goscript_ip.IP))
					if (__goscriptShadow16 != null) {
						await $.pointerValue<__goscript_udpsock.UDPConn>(c).conn.Close()
						return [null, __goscriptShadow16]
					}
				}
			}
		}
		return [c, null]
	}

	public async listenTCP(ctx: context.Context | null, laddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null): globalThis.Promise<[__goscript_tcpsock.TCPListener | $.VarRef<__goscript_tcpsock.TCPListener> | null, $.GoError]> {
		const sl: sysListener | $.VarRef<sysListener> | null = this;
		return (sl !== null && (sl as any).__isVarRef !== true && (sl as any).__goValue === undefined ? ((sl as any) as sysListener).listenTCPProto(ctx, laddr, 0) : sysListener.prototype.listenTCPProto.call(sl, ctx, laddr, 0))
	}

	public async listenTCPProto(ctx: context.Context | null, laddr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null, proto: number): globalThis.Promise<[__goscript_tcpsock.TCPListener | $.VarRef<__goscript_tcpsock.TCPListener> | null, $.GoError]> {
		const sl: sysListener | $.VarRef<sysListener> | null = this;
		const sl$: sysListener = sl == null ? $.pointerTarget<sysListener>(sl) : (sl as any).__isVarRef === true ? (sl as any).value : (sl as any).__goValue === undefined ? (sl as any) : $.pointerTarget<sysListener>(sl)
		let ctrlCtxFn: ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null = null! as ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		if ((sl$ as sysListener).ListenConfig.Control != null) {
			ctrlCtxFn = $.functionValue(async (ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null): globalThis.Promise<$.GoError> => {
				return await (sl$ as sysListener).ListenConfig.Control!(network, address, c)
			}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), "syscall.RawConn"], results: ["error"] } as $.FunctionTypeInfo))
		}
		let __goscriptTuple40: any = await __goscript_ipsock_posix.internetSocket(ctx, (sl$ as sysListener).network, $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(laddr, "*net.TCPAddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")), null, 1, proto, "listen", ctrlCtxFn)
		let fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null = __goscriptTuple40[0]
		let err = __goscriptTuple40[1]
		if (err != null) {
			return [null, err]
		}
		return [new __goscript_tcpsock.TCPListener({fd: fd, lc: (sl$ as sysListener).ListenConfig}), null]
	}

	public async listenUDP(ctx: context.Context | null, laddr: __goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null): globalThis.Promise<[__goscript_udpsock.UDPConn | $.VarRef<__goscript_udpsock.UDPConn> | null, $.GoError]> {
		const sl: sysListener | $.VarRef<sysListener> | null = this;
		const sl$: sysListener = sl == null ? $.pointerTarget<sysListener>(sl) : (sl as any).__isVarRef === true ? (sl as any).value : (sl as any).__goValue === undefined ? (sl as any) : $.pointerTarget<sysListener>(sl)
		let ctrlCtxFn: ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null = null! as ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		if ((sl$ as sysListener).ListenConfig.Control != null) {
			ctrlCtxFn = $.functionValue(async (ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null): globalThis.Promise<$.GoError> => {
				return await (sl$ as sysListener).ListenConfig.Control!(network, address, c)
			}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), "syscall.RawConn"], results: ["error"] } as $.FunctionTypeInfo))
		}
		let __goscriptTuple41: any = await __goscript_ipsock_posix.internetSocket(ctx, (sl$ as sysListener).network, $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(laddr, "*net.UDPAddr", /* @__PURE__ */ $.pointerType("net.UDPAddr")), null, 2, 0, "listen", ctrlCtxFn)
		let fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null = __goscriptTuple41[0]
		let err = __goscriptTuple41[1]
		if (err != null) {
			return [null, err]
		}
		return [__goscript_udpsock.newUDPConn(fd), null]
	}

	public async listenUnix(ctx: context.Context | null, laddr: __goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null): globalThis.Promise<[__goscript_unixsock.UnixListener | $.VarRef<__goscript_unixsock.UnixListener> | null, $.GoError]> {
		const sl: sysListener | $.VarRef<sysListener> | null = this;
		const sl$: sysListener = sl == null ? $.pointerTarget<sysListener>(sl) : (sl as any).__isVarRef === true ? (sl as any).value : (sl as any).__goValue === undefined ? (sl as any) : $.pointerTarget<sysListener>(sl)
		let ctrlCtxFn: ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null = null! as ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		if ((sl$ as sysListener).ListenConfig.Control != null) {
			ctrlCtxFn = $.functionValue(async (ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null): globalThis.Promise<$.GoError> => {
				return await (sl$ as sysListener).ListenConfig.Control!(network, address, c)
			}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), "syscall.RawConn"], results: ["error"] } as $.FunctionTypeInfo))
		}
		let __goscriptTuple42: any = await __goscript_unixsock_posix.unixSocket(ctx, (sl$ as sysListener).network, $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(laddr, "*net.UnixAddr", /* @__PURE__ */ $.pointerType("net.UnixAddr")), null, "listen", ctrlCtxFn)
		let fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null = __goscriptTuple42[0]
		let err = __goscriptTuple42[1]
		if (err != null) {
			return [null, err]
		}
		return [(await (async () => { const __goscriptLiteralField1 = (__goscriptAwait = $.pointerValue<Exclude<__goscript_net.Addr, null>>($.pointerValue<__goscript_fd_fake.netFD>(fd).laddr).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_unixsock.UnixListener({fd: fd, path: __goscriptLiteralField1, unlink: true}) })()), null]
	}

	public async listenUnixgram(ctx: context.Context | null, laddr: __goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null): globalThis.Promise<[__goscript_unixsock.UnixConn | $.VarRef<__goscript_unixsock.UnixConn> | null, $.GoError]> {
		const sl: sysListener | $.VarRef<sysListener> | null = this;
		const sl$: sysListener = sl == null ? $.pointerTarget<sysListener>(sl) : (sl as any).__isVarRef === true ? (sl as any).value : (sl as any).__goValue === undefined ? (sl as any) : $.pointerTarget<sysListener>(sl)
		let ctrlCtxFn: ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null = null! as ((ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		if ((sl$ as sysListener).ListenConfig.Control != null) {
			ctrlCtxFn = $.functionValue(async (ctx: context.Context | null, network: string, address: string, c: syscall.RawConn | null): globalThis.Promise<$.GoError> => {
				return await (sl$ as sysListener).ListenConfig.Control!(network, address, c)
			}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), "syscall.RawConn"], results: ["error"] } as $.FunctionTypeInfo))
		}
		let __goscriptTuple43: any = await __goscript_unixsock_posix.unixSocket(ctx, (sl$ as sysListener).network, $.interfaceValue<__goscript_sockaddr_posix.sockaddr | null>(laddr, "*net.UnixAddr", /* @__PURE__ */ $.pointerType("net.UnixAddr")), null, "listen", ctrlCtxFn)
		let fd: __goscript_fd_fake.netFD | $.VarRef<__goscript_fd_fake.netFD> | null = __goscriptTuple43[0]
		let err = __goscriptTuple43[1]
		if (err != null) {
			return [null, err]
		}
		return [__goscript_unixsock.newUnixConn(fd), null]
	}

	public async Listen(ctx: any, network: any, address: any): globalThis.Promise<any> {
		return await $.pointerValue<ListenConfig>(this.ListenConfig).Listen(ctx, network, address)
	}

	public async ListenPacket(ctx: any, network: any, address: any): globalThis.Promise<any> {
		return await $.pointerValue<ListenConfig>(this.ListenConfig).ListenPacket(ctx, network, address)
	}

	public MultipathTCP(): any {
		return $.pointerValue<ListenConfig>(this.ListenConfig).MultipathTCP()
	}

	public SetMultipathTCP(use: any): any {
		return $.pointerValue<ListenConfig>(this.ListenConfig).SetMultipathTCP(use)
	}

	static __typeInfo = $.registerStructType(
		"net.sysListener",
		() => new sysListener(),
		() => [$.methodSignature("listenIP", [["ctx", "context.Context"], ["laddr", /* @__PURE__ */ $.pointerType("net.IPAddr")]], [/* @__PURE__ */ $.pointerType("net.IPConn"), "error"], true), $.methodSignature("listenMPTCP", [["ctx", "context.Context"], ["laddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")]], [/* @__PURE__ */ $.pointerType("net.TCPListener"), "error"], true), $.methodSignature("listenMulticastUDP", [["ctx", "context.Context"], ["ifi", /* @__PURE__ */ $.pointerType("net.Interface")], ["gaddr", /* @__PURE__ */ $.pointerType("net.UDPAddr")]], [/* @__PURE__ */ $.pointerType("net.UDPConn"), "error"], true), $.methodSignature("listenTCP", [["ctx", "context.Context"], ["laddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")]], [/* @__PURE__ */ $.pointerType("net.TCPListener"), "error"], true), $.methodSignature("listenTCPProto", [["ctx", "context.Context"], ["laddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")], ["proto", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("net.TCPListener"), "error"], true), $.methodSignature("listenUDP", [["ctx", "context.Context"], ["laddr", /* @__PURE__ */ $.pointerType("net.UDPAddr")]], [/* @__PURE__ */ $.pointerType("net.UDPConn"), "error"], true), $.methodSignature("listenUnix", [["ctx", "context.Context"], ["laddr", /* @__PURE__ */ $.pointerType("net.UnixAddr")]], [/* @__PURE__ */ $.pointerType("net.UnixListener"), "error"], true), $.methodSignature("listenUnixgram", [["ctx", "context.Context"], ["laddr", /* @__PURE__ */ $.pointerType("net.UnixAddr")]], [/* @__PURE__ */ $.pointerType("net.UnixConn"), "error"], true), $.methodSignature("Listen", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["address", /* @__PURE__ */ $.basicType("string")]], ["net.Listener", "error"], true), $.methodSignature("ListenPacket", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["address", /* @__PURE__ */ $.basicType("string")]], ["net.PacketConn", "error"], true), $.methodSignature("MultipathTCP", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("SetMultipathTCP", [["use", /* @__PURE__ */ $.basicType("bool")]], [], true)],
		sysListener,
		() => [/* @__PURE__ */ $.structField("ListenConfig", "net.ListenConfig", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("network", /* @__PURE__ */ $.basicType("string"), [1], 56, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("address", /* @__PURE__ */ $.basicType("string"), [2], 72, false, { pkgPath: "net" })]
	)
}

export const defaultTCPKeepAliveIdle: time.Duration = 15000000000n

export const defaultTCPKeepAliveInterval: time.Duration = 15000000000n

export const defaultTCPKeepAliveCount: number = 9

export const defaultMPTCPEnabledListen: boolean = true

export const defaultMPTCPEnabledDial: boolean = false

export const mptcpUseDefaultDial: mptcpStatusDial = 0

export const mptcpEnabledDial: mptcpStatusDial = 1

export const mptcpDisabledDial: mptcpStatusDial = 2

export const mptcpUseDefaultListen: mptcpStatusListen = 0

export const mptcpEnabledListen: mptcpStatusListen = 1

export const mptcpDisabledListen: mptcpStatusListen = 2

export let multipathtcp: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("multipathtcp")

export function __goscript_set_multipathtcp(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	multipathtcp = __goscriptValue
}

export function mptcpStatusDial__get(m: $.VarRef<mptcpStatusDial> | null): boolean {
	switch ($.pointerValue<mptcpStatusDial>(m)) {
		case 1:
		{
			return true
			break
		}
		case 2:
		{
			return false
			break
		}
	}

	// If MPTCP is forced via GODEBUG=multipathtcp=1
	if (($.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(multipathtcp)), "1")) || ($.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(multipathtcp)), "3"))) {
		godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(multipathtcp))

		return true
	}

	return false
}

export function mptcpStatusDial__set(m: $.VarRef<mptcpStatusDial> | null, use: boolean): void {
	if (use) {
		m!.value = 1
	} else {
		m!.value = 2
	}
}

export function mptcpStatusListen__get(m: $.VarRef<mptcpStatusListen> | null): boolean {
	switch ($.pointerValue<mptcpStatusListen>(m)) {
		case 1:
		{
			return true
			break
		}
		case 2:
		{
			return false
			break
		}
	}

	// If MPTCP is disabled via GODEBUG=multipathtcp=0 or only
	// enabled on dialers, but not on listeners.
	if (($.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(multipathtcp)), "0")) || ($.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(multipathtcp)), "3"))) {
		godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(multipathtcp))

		return false
	}

	return true
}

export function mptcpStatusListen__set(m: $.VarRef<mptcpStatusListen> | null, use: boolean): void {
	if (use) {
		m!.value = 1
	} else {
		m!.value = 2
	}
}

export function minNonzeroTime(a: time.Time, b: time.Time): time.Time {
	if ($.markAsStructValue($.cloneStructValue(a)).IsZero()) {
		return $.markAsStructValue($.cloneStructValue(b))
	}
	if ($.markAsStructValue($.cloneStructValue(b)).IsZero() || $.markAsStructValue($.cloneStructValue(a)).Before($.markAsStructValue($.cloneStructValue(b)))) {
		return $.markAsStructValue($.cloneStructValue(a))
	}
	return $.markAsStructValue($.cloneStructValue(b))
}

export function partialDeadline(now: time.Time, deadline: time.Time, addrsRemaining: number): [time.Time, $.GoError] {
	if ($.markAsStructValue($.cloneStructValue(deadline)).IsZero()) {
		return [$.markAsStructValue($.cloneStructValue(deadline)), null]
	}
	let timeRemaining = $.markAsStructValue($.cloneStructValue(deadline)).Sub($.markAsStructValue($.cloneStructValue(now)))
	if (timeRemaining <= 0n) {
		return [$.markAsStructValue(new time.Time()), __goscript_net.errTimeout]
	}
	// Tentatively allocate equal time to each remaining address.
	let __goscriptShadow2 = $.int64Div(timeRemaining, $.int64(addrsRemaining))
	// If the time per address is too short, steal from the end of the list.
	const saneMinimum: time.Duration = 2000000000n
	if (__goscriptShadow2 < 2000000000n) {
		if (timeRemaining < 2000000000n) {
			__goscriptShadow2 = timeRemaining
		} else {
			__goscriptShadow2 = 2000000000n
		}
	}
	return [$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(now)).Add(__goscriptShadow2))), null]
}

export async function parseNetwork(ctx: context.Context | null, network: string, needsProto: boolean): globalThis.Promise<[string, number, $.GoError]> {
	let afnet: string = ""
	let proto: number = 0
	let err: $.GoError = null! as $.GoError
	let i = bytealg.LastIndexByteString(network, 58)
	if (i < 0) {
		switch (network) {
			case "tcp":
			case "tcp4":
			case "tcp6":
			{
				break
			}
			case "udp":
			case "udp4":
			case "udp6":
			{
				break
			}
			case "ip":
			case "ip4":
			case "ip6":
			{
				if (needsProto) {
					return ["", 0, $.namedValueInterfaceValue<$.GoError>(network, "net.UnknownNetworkError", {"Error": __goscript_net.UnknownNetworkError_Error}, /* @__PURE__ */ $.basicType("string", "net.UnknownNetworkError"))]
				}
				break
			}
			case "unix":
			case "unixgram":
			case "unixpacket":
			{
				break
			}
			default:
			{
				return ["", 0, $.namedValueInterfaceValue<$.GoError>(network, "net.UnknownNetworkError", {"Error": __goscript_net.UnknownNetworkError_Error}, /* @__PURE__ */ $.basicType("string", "net.UnknownNetworkError"))]
				break
			}
		}
		return [network, 0, null]
	}
	afnet = $.sliceStringOrBytes(network, undefined, i)
	switch (afnet) {
		case "ip":
		case "ip4":
		case "ip6":
		{
			let protostr = $.sliceStringOrBytes(network, i + 1, undefined)
			let [__goscriptShadow3, __goscriptShadow4, ok] = __goscript_parse.dtoi(protostr)
			if (!ok || (__goscriptShadow4 != $.stringLen(protostr))) {
				let __goscriptTuple10: any = await __goscript_lookup_unix.lookupProtocol(ctx, protostr)
				__goscriptShadow3 = __goscriptTuple10[0]
				err = __goscriptTuple10[1]
				if (err != null) {
					return ["", 0, err]
				}
			}
			return [afnet, __goscriptShadow3, null]
			break
		}
	}
	return ["", 0, $.namedValueInterfaceValue<$.GoError>(network, "net.UnknownNetworkError", {"Error": __goscript_net.UnknownNetworkError_Error}, /* @__PURE__ */ $.basicType("string", "net.UnknownNetworkError"))]
}

export async function Dial(network: string, address: string): globalThis.Promise<[__goscript_net.Conn | null, $.GoError]> {
	let d: $.VarRef<Dialer> = $.varRef(new Dialer(undefined, true))
	return d.value.Dial(network, address)
}

export async function DialTimeout(network: string, address: string, timeout: time.Duration): globalThis.Promise<[__goscript_net.Conn | null, $.GoError]> {
	let d = $.varRef(new Dialer({Timeout: timeout}, true))
	return d.value.Dial(network, address)
}

export async function Listen(network: string, address: string): globalThis.Promise<[__goscript_net.Listener | null, $.GoError]> {
	let lc: $.VarRef<ListenConfig> = $.varRef(new ListenConfig(undefined, true))
	return lc.value.Listen(context.Background(), network, address)
}

export async function ListenPacket(network: string, address: string): globalThis.Promise<[__goscript_net.PacketConn | null, $.GoError]> {
	let lc: $.VarRef<ListenConfig> = $.varRef(new ListenConfig(undefined, true))
	return lc.value.ListenPacket(context.Background(), network, address)
}

var __goscriptAwait: any
