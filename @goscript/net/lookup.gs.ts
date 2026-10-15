// Generated file based on lookup.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as bytealg from "@goscript/internal/bytealg/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

import * as nettrace from "@goscript/internal/nettrace/index.js"

import * as netip from "@goscript/net/netip/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as time from "@goscript/time/index.js"

import * as errors from "@goscript/errors/index.js"

import * as strconv from "@goscript/internal/strconv/index.js"

import * as stringslite from "@goscript/internal/stringslite/index.js"

import * as io from "@goscript/io/index.js"

import * as os from "@goscript/os/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as dnsmessage from "@goscript/vendor/golang.org/x/net/dns/dnsmessage/index.js"

import "@goscript/unsafe/index.js"

import * as singleflight from "@goscript/internal/singleflight/index.js"

import * as poll from "@goscript/internal/poll/index.js"

import type * as fs from "@goscript/io/fs/index.js"

import * as __goscript_addrselect from "./addrselect.gs.ts"

import * as __goscript_cgo_stub from "./cgo_stub.gs.ts"

import * as __goscript_conf from "./conf.gs.ts"

import * as __goscript_dial from "./dial.gs.ts"

import * as __goscript_dnsclient from "./dnsclient.gs.ts"

import * as __goscript_dnsclient_unix from "./dnsclient_unix.gs.ts"

import * as __goscript_dnsconfig from "./dnsconfig.gs.ts"

import * as __goscript_fd_fake from "./fd_fake.gs.ts"

import * as __goscript_fd_js from "./fd_js.gs.ts"

import * as __goscript_hook from "./hook.gs.ts"

import * as __goscript_hosts from "./hosts.gs.ts"

import * as __goscript_ip from "./ip.gs.ts"

import * as __goscript_iprawsock from "./iprawsock.gs.ts"

import * as __goscript_iprawsock_posix from "./iprawsock_posix.gs.ts"

import * as __goscript_ipsock from "./ipsock.gs.ts"

import * as __goscript_lookup_unix from "./lookup_unix.gs.ts"

import * as __goscript_net from "./net.gs.ts"

import * as __goscript_net_fake from "./net_fake.gs.ts"

import * as __goscript_parse from "./parse.gs.ts"

import * as __goscript_port from "./port.gs.ts"

import * as __goscript_port_unix from "./port_unix.gs.ts"

import * as __goscript_sockaddr_posix from "./sockaddr_posix.gs.ts"

import * as __goscript_tcpsock from "./tcpsock.gs.ts"

import * as __goscript_tcpsock_posix from "./tcpsock_posix.gs.ts"

import type * as __goscript_tcpsock_unix from "./tcpsock_unix.gs.ts"

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
import "@goscript/errors/index.js"
import "@goscript/internal/strconv/index.js"
import "@goscript/internal/stringslite/index.js"
import "@goscript/io/index.js"
import "@goscript/os/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/vendor/golang.org/x/net/dns/dnsmessage/index.js"
import "@goscript/internal/singleflight/index.js"
import "@goscript/internal/poll/index.js"
import "./addrselect.gs.ts"
import "./cgo_stub.gs.ts"
import "./conf.gs.ts"
import "./dial.gs.ts"
import "./dnsclient.gs.ts"
import "./dnsclient_unix.gs.ts"
import "./dnsconfig.gs.ts"
import "./fd_fake.gs.ts"
import "./fd_js.gs.ts"
import "./hook.gs.ts"
import "./hosts.gs.ts"
import "./ip.gs.ts"
import "./iprawsock.gs.ts"
import "./iprawsock_posix.gs.ts"
import "./ipsock.gs.ts"
import "./lookup_unix.gs.ts"
import "./net.gs.ts"
import "./net_fake.gs.ts"
import "./parse.gs.ts"
import "./port.gs.ts"
import "./port_unix.gs.ts"
import "./sockaddr_posix.gs.ts"
import "./tcpsock.gs.ts"
import "./tcpsock_posix.gs.ts"
import "./udpsock.gs.ts"
import "./udpsock_posix.gs.ts"
import "./unixsock.gs.ts"
import "./unixsock_posix.gs.ts"

export class Resolver {
	// PreferGo controls whether Go's built-in DNS resolver is preferred
	// on platforms where it's available. It is equivalent to setting
	// GODEBUG=netdns=go, but scoped to just this resolver.
	public get PreferGo(): boolean {
		return this._fields.PreferGo
	}

	public set PreferGo(value: boolean) {
		this._fields.PreferGo = value
	}

	// StrictErrors controls the behavior of temporary errors
	// (including timeout, socket errors, and SERVFAIL) when using
	// Go's built-in resolver. For a query composed of multiple
	// sub-queries (such as an A+AAAA address lookup, or walking the
	// DNS search list), this option causes such errors to abort the
	// whole query instead of returning a partial result. This is
	// not enabled by default because it may affect compatibility
	// with resolvers that process AAAA queries incorrectly.
	public get StrictErrors(): boolean {
		return this._fields.StrictErrors
	}

	public set StrictErrors(value: boolean) {
		this._fields.StrictErrors = value
	}

	// Dial optionally specifies an alternate dialer for use by
	// Go's built-in DNS resolver to make TCP and UDP connections
	// to DNS services. The host in the address parameter will
	// always be a literal IP address and not a host name, and the
	// port in the address parameter will be a literal port number
	// and not a service name.
	// If the Conn returned is also a PacketConn, sent and received DNS
	// messages must adhere to RFC 1035 section 4.2.1, "UDP usage".
	// Otherwise, DNS messages transmitted over Conn must adhere
	// to RFC 7766 section 5, "Transport Protocol Selection".
	// If nil, the default dialer is used.
	public get Dial(): ((ctx: context.Context | null, network: string, address: string) => [__goscript_net.Conn | null, $.GoError] | globalThis.Promise<[__goscript_net.Conn | null, $.GoError]>) | null {
		return this._fields.Dial
	}

	public set Dial(value: ((ctx: context.Context | null, network: string, address: string) => [__goscript_net.Conn | null, $.GoError] | globalThis.Promise<[__goscript_net.Conn | null, $.GoError]>) | null) {
		this._fields.Dial = value
	}

	// lookupGroup merges LookupIPAddr calls together for lookups for the same
	// host. The lookupGroup key is the LookupIPAddr.host argument.
	// The return values are ([]IPAddr, error).
	public get lookupGroup(): singleflight.Group {
		return this._fields.lookupGroup
	}

	public set lookupGroup(value: singleflight.Group) {
		this._fields.lookupGroup = value
	}

	public _fields: {
		PreferGo: boolean
		StrictErrors: boolean
		Dial: ((ctx: context.Context | null, network: string, address: string) => [__goscript_net.Conn | null, $.GoError] | globalThis.Promise<[__goscript_net.Conn | null, $.GoError]>) | null
		lookupGroup: singleflight.Group
	}

	constructor(init?: Partial<{PreferGo?: boolean, StrictErrors?: boolean, Dial?: ((ctx: context.Context | null, network: string, address: string) => [__goscript_net.Conn | null, $.GoError] | globalThis.Promise<[__goscript_net.Conn | null, $.GoError]>) | null, lookupGroup?: singleflight.Group}>, __goscriptValue?: boolean) {
		this._fields = {
			PreferGo: init?.PreferGo ?? (false as boolean),
			StrictErrors: init?.StrictErrors ?? (false as boolean),
			Dial: init?.Dial ?? (null! as ((ctx: context.Context | null, network: string, address: string) => [__goscript_net.Conn | null, $.GoError] | globalThis.Promise<[__goscript_net.Conn | null, $.GoError]>) | null),
			lookupGroup: init?.lookupGroup ? init.lookupGroup.clone() : new singleflight.Group(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Resolver {
		return new Resolver(this, true)
	}

	public __goscriptAssign(source: Resolver): void {
		const target = this._fields
		const values = source._fields
		target.PreferGo = values.PreferGo
		target.StrictErrors = values.StrictErrors
		target.Dial = values.Dial
		$.assignStruct(target.lookupGroup, values.lookupGroup)
	}

	public async LookupAddr(ctx: context.Context | null, addr: string): globalThis.Promise<[$.Slice<string>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let __goscriptTuple1: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).lookupAddr(ctx, addr) : Resolver.prototype.lookupAddr.call(r, ctx, addr))
		let names: $.Slice<string> = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		let filteredNames: $.Slice<string> = $.makeSlice<string>(0, $.sliceLen(names), "string")
		for (let __goscriptRangeTarget0 = names, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let name = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
			if (__goscript_dnsclient.isDomainName(name)) {
				filteredNames = $.appendOne(filteredNames, name)
			}
		}
		if ($.sliceLen(names) != $.sliceLen(filteredNames)) {
			return [filteredNames, $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: errMalformedDNSRecordsDetail, Name: addr}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
		}
		return [filteredNames, null]
	}

	public async LookupCNAME(ctx: context.Context | null, host: string): globalThis.Promise<[string, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let [cname, err] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).lookupCNAME(ctx, host) : Resolver.prototype.lookupCNAME.call(r, ctx, host))
		if (err != null) {
			return ["", err]
		}
		if (!__goscript_dnsclient.isDomainName(cname)) {
			return ["", $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: errMalformedDNSRecordsDetail, Name: host}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
		}
		return [cname, null]
	}

	public async LookupHost(ctx: context.Context | null, host: string): globalThis.Promise<[$.Slice<string>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let addrs: $.Slice<string> = null! as $.Slice<string>
		let err: $.GoError = null! as $.GoError
		// Make sure that no matter what we do later, host=="" is rejected.
		if ($.stringEqual(host, "")) {
			return [null, $.interfaceValue<$.GoError>(await __goscript_net.newDNSError($.interfaceValue<$.GoError>(__goscript_net.errNoSuchHost, "*net.notFoundError", /* @__PURE__ */ $.pointerType("net.notFoundError")), host, ""), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
		}
		{
			let [, __goscriptShadow2] = netip.ParseAddr(host)
			if (__goscriptShadow2 == null) {
				return [$.arrayToSlice<string>([host]), null]
			}
		}
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).lookupHost(ctx, host) : Resolver.prototype.lookupHost.call(r, ctx, host))
	}

	public async LookupIP(ctx: context.Context | null, network: string, host: string): globalThis.Promise<[$.Slice<__goscript_ip.IP>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let [afnet, , err] = await __goscript_dial.parseNetwork(ctx, network, false)
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

		if ($.stringEqual(host, "")) {
			return [null, $.interfaceValue<$.GoError>(await __goscript_net.newDNSError($.interfaceValue<$.GoError>(__goscript_net.errNoSuchHost, "*net.notFoundError", /* @__PURE__ */ $.pointerType("net.notFoundError")), host, ""), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
		}
		let __goscriptTuple2: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).internetAddrList(ctx, afnet, host) : Resolver.prototype.internetAddrList.call(r, ctx, afnet, host))
		let addrs: __goscript_ipsock.addrList = (__goscriptTuple2[0] as __goscript_ipsock.addrList)
		err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}

		let ips: $.Slice<__goscript_ip.IP> = $.makeSlice<__goscript_ip.IP>(0, $.sliceLen((addrs as __goscript_ipsock.addrList)))
		for (let __goscriptRangeTarget1 = addrs, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let addr = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_net.Addr | null)
			ips = $.appendOne(ips, ($.pointerValue<__goscript_iprawsock.IPAddr>(((addr as any)?.__goType === "*net.IPAddr" && (addr as any).__goValue === undefined && (addr as any).__isTypedNil !== true ? ((addr as any) as __goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null) : $.mustTypeAssert<__goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null>(addr, /* @__PURE__ */ $.pointerType("net.IPAddr")))).IP as __goscript_ip.IP), $.appendZeros.nil)
		}
		return [ips, null]
	}

	public async LookupIPAddr(ctx: context.Context | null, host: string): globalThis.Promise<[$.Slice<__goscript_iprawsock.IPAddr>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).lookupIPAddr(ctx, "ip", host) : Resolver.prototype.lookupIPAddr.call(r, ctx, "ip", host))
	}

	public async LookupMX(ctx: context.Context | null, name: string): globalThis.Promise<[$.Slice<__goscript_dnsclient.MX | $.VarRef<__goscript_dnsclient.MX> | null>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let __goscriptTuple3: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).lookupMX(ctx, name) : Resolver.prototype.lookupMX.call(r, ctx, name))
		let records: $.Slice<__goscript_dnsclient.MX | $.VarRef<__goscript_dnsclient.MX> | null> = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}
		let filteredMX: $.Slice<__goscript_dnsclient.MX | $.VarRef<__goscript_dnsclient.MX> | null> = $.makeSlice<__goscript_dnsclient.MX | $.VarRef<__goscript_dnsclient.MX> | null>(0, $.sliceLen(records))
		for (let __goscriptRangeTarget2 = records, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let mx = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_dnsclient.MX | $.VarRef<__goscript_dnsclient.MX> | null)
			if (mx == null) {
				continue
			}
			if (!__goscript_dnsclient.isDomainName($.pointerValue<__goscript_dnsclient.MX>(mx).Host)) {
				// Check for IP address. In practice we observe
				// these with a trailing dot, so strip that.
				let [ip, __goscriptShadow3] = netip.ParseAddr(stringslite.TrimSuffix($.pointerValue<__goscript_dnsclient.MX>(mx).Host, "."))
				if ((__goscriptShadow3 != null) || (!$.stringEqual(ip.Zone(), ""))) {
					continue
				}
			}
			filteredMX = $.appendOne(filteredMX, mx, $.appendZeros.nil)
		}
		if ($.sliceLen(records) != $.sliceLen(filteredMX)) {
			return [filteredMX, $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: errMalformedDNSRecordsDetail, Name: name}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
		}
		return [filteredMX, null]
	}

	public async LookupNS(ctx: context.Context | null, name: string): globalThis.Promise<[$.Slice<__goscript_dnsclient.NS | $.VarRef<__goscript_dnsclient.NS> | null>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let __goscriptTuple4: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).lookupNS(ctx, name) : Resolver.prototype.lookupNS.call(r, ctx, name))
		let records: $.Slice<__goscript_dnsclient.NS | $.VarRef<__goscript_dnsclient.NS> | null> = __goscriptTuple4[0]
		let err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		let filteredNS: $.Slice<__goscript_dnsclient.NS | $.VarRef<__goscript_dnsclient.NS> | null> = $.makeSlice<__goscript_dnsclient.NS | $.VarRef<__goscript_dnsclient.NS> | null>(0, $.sliceLen(records))
		for (let __goscriptRangeTarget3 = records, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let ns = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_dnsclient.NS | $.VarRef<__goscript_dnsclient.NS> | null)
			if (ns == null) {
				continue
			}
			if (!__goscript_dnsclient.isDomainName($.pointerValue<__goscript_dnsclient.NS>(ns).Host)) {
				continue
			}
			filteredNS = $.appendOne(filteredNS, ns, $.appendZeros.nil)
		}
		if ($.sliceLen(records) != $.sliceLen(filteredNS)) {
			return [filteredNS, $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: errMalformedDNSRecordsDetail, Name: name}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
		}
		return [filteredNS, null]
	}

	public async LookupNetIP(ctx: context.Context | null, network: string, host: string): globalThis.Promise<[$.Slice<netip.Addr>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		// TODO(bradfitz): make this efficient, making the internal net package
		// type throughout be netip.Addr and only converting to the net.IP slice
		// version at the edge. But for now (2021-10-20), this is a wrapper around
		// the old way.
		let __goscriptTuple5: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).LookupIP(ctx, network, host) : Resolver.prototype.LookupIP.call(r, ctx, network, host))
		let ips: $.Slice<__goscript_ip.IP> = __goscriptTuple5[0]
		let err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}
		let ret: $.Slice<netip.Addr> = $.makeSlice<netip.Addr>(0, $.sliceLen(ips), undefined, () => new netip.Addr(undefined, true))
		for (let __goscriptRangeTarget4 = ips, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let ip = ((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as __goscript_ip.IP) as __goscript_ip.IP)
			{
				let [a, ok] = netip.AddrFromSlice(ip)
				if (ok) {
					ret = $.appendOne(ret, (a).clone())
				}
			}
		}
		return [ret, null]
	}

	public async LookupPort(ctx: context.Context | null, network: string, service: string): globalThis.Promise<[number, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let port: number = 0
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple6: any = __goscript_port.parsePort(service)
		port = __goscriptTuple6[0]
		let needsLookup = __goscriptTuple6[1]
		if (needsLookup) {
			switch (network) {
				case "tcp":
				case "tcp4":
				case "tcp6":
				case "udp":
				case "udp4":
				case "udp6":
				case "ip":
				{
					break
				}
				case "":
				{
					network = "ip"
					break
				}
				default:
				{
					return [0, $.interfaceValue<$.GoError>(new __goscript_net.AddrError({Err: "unknown network", Addr: network}), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))]
					break
				}
			}
			let __goscriptTuple7: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).lookupPort(ctx, network, service) : Resolver.prototype.lookupPort.call(r, ctx, network, service))
			port = __goscriptTuple7[0]
			err = __goscriptTuple7[1]
			if (err != null) {
				return [0, err]
			}
		}
		if ((0 > port) || (port > 65535)) {
			return [0, $.interfaceValue<$.GoError>(new __goscript_net.AddrError({Err: "invalid port", Addr: service}), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))]
		}
		return [port, null]
	}

	public async LookupSRV(ctx: context.Context | null, service: string, proto: string, name: string): globalThis.Promise<[string, $.Slice<__goscript_dnsclient.SRV | $.VarRef<__goscript_dnsclient.SRV> | null>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let __goscriptTuple8: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).lookupSRV(ctx, service, proto, name) : Resolver.prototype.lookupSRV.call(r, ctx, service, proto, name))
		let cname = __goscriptTuple8[0]
		let addrs: $.Slice<__goscript_dnsclient.SRV | $.VarRef<__goscript_dnsclient.SRV> | null> = __goscriptTuple8[1]
		let err = __goscriptTuple8[2]
		if (err != null) {
			return ["", null, err]
		}
		if ((!$.stringEqual(cname, "")) && !__goscript_dnsclient.isDomainName(cname)) {
			return ["", null, $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: "SRV header name is invalid", Name: name}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
		}
		let filteredAddrs: $.Slice<__goscript_dnsclient.SRV | $.VarRef<__goscript_dnsclient.SRV> | null> = $.makeSlice<__goscript_dnsclient.SRV | $.VarRef<__goscript_dnsclient.SRV> | null>(0, $.sliceLen(addrs))
		for (let __goscriptRangeTarget5 = addrs, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let addr = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as __goscript_dnsclient.SRV | $.VarRef<__goscript_dnsclient.SRV> | null)
			if (addr == null) {
				continue
			}
			if (!__goscript_dnsclient.isDomainName($.pointerValue<__goscript_dnsclient.SRV>(addr).Target)) {
				continue
			}
			filteredAddrs = $.appendOne(filteredAddrs, addr, $.appendZeros.nil)
		}
		if ($.sliceLen(addrs) != $.sliceLen(filteredAddrs)) {
			return [cname, filteredAddrs, $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: errMalformedDNSRecordsDetail, Name: name}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
		}
		return [cname, filteredAddrs, null]
	}

	public async LookupTXT(ctx: context.Context | null, name: string): globalThis.Promise<[$.Slice<string>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).lookupTXT(ctx, name) : Resolver.prototype.lookupTXT.call(r, ctx, name))
	}

	public async dial(ctx: context.Context | null, network: string, server: string): globalThis.Promise<[__goscript_net.Conn | null, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		const r$: Resolver = r == null ? $.pointerTarget<Resolver>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Resolver>(r)
		// Calling Dial here is scary -- we have to be sure not to
		// dial a name that will require a DNS lookup, or Dial will
		// call back here to translate it. The DNS config parser has
		// already checked that all the cfg.servers are IP
		// addresses, which Dial will use without a DNS lookup.
		let c: __goscript_net.Conn | null = null! as __goscript_net.Conn | null
		let err: $.GoError = null! as $.GoError
		if ((r != null) && ((r$ as Resolver).Dial != null)) {
			let __goscriptTuple9: any = await (r$ as Resolver).Dial!(ctx, network, server)
			c = __goscriptTuple9[0]
			err = __goscriptTuple9[1]
		} else {
			let d: $.VarRef<__goscript_dial.Dialer> = $.varRef(new __goscript_dial.Dialer(undefined, true))
			let __goscriptTuple10: any = await d.value.DialContext(ctx, network, server)
			c = __goscriptTuple10[0]
			err = __goscriptTuple10[1]
		}
		if (err != null) {
			return [null, __goscript_net.mapErr(err)]
		}
		return [c, null]
	}

	public async exchange(ctx: context.Context | null, server: string, q: dnsmessage.Question, timeout: time.Duration, useTCP: boolean, ad: boolean): globalThis.Promise<[dnsmessage.Parser, dnsmessage.Header, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		q.Class = 1
		let __goscriptTuple11: any = __goscript_dnsclient_unix.newRequest((q).clone(), ad)
		let id = __goscriptTuple11[0]
		let udpReq: $.Slice<number> = __goscriptTuple11[1]
		let tcpReq: $.Slice<number> = __goscriptTuple11[2]
		let err = __goscriptTuple11[3]
		if (err != null) {
			return [new dnsmessage.Parser(undefined, true), new dnsmessage.Header(undefined, true), __goscript_dnsclient_unix.errCannotMarshalDNSMessage]
		}
		let networks: $.Slice<string> = null! as $.Slice<string>
		if (useTCP) {
			networks = $.arrayToSlice<string>(["tcp"])
		} else {
			networks = $.arrayToSlice<string>(["udp", "tcp"])
		}
		for (let __goscriptRangeTarget6 = networks, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let network = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as string)
			let __goscriptShadow4 = ctx
			let __goscriptTuple12: any = context.WithDeadline($.pointerValueOrNil(__goscriptShadow4)!, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time.Now())).Add(timeout))))
			let __goscriptShadow5 = __goscriptTuple12[0]
			let cancel = __goscriptTuple12[1]
			const __goscriptDeferCallee0 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

			let [c, __goscriptShadow6] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).dial(__goscriptShadow5, network, server) : Resolver.prototype.dial.call(r, __goscriptShadow5, network, server))
			if (__goscriptShadow6 != null) {
				return [new dnsmessage.Parser(undefined, true), new dnsmessage.Header(undefined, true), __goscriptShadow6]
			}
			{
				let [d, ok] = await (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(__goscriptShadow5)).Deadline()
				if (ok && !$.markAsStructValue($.cloneStructValue(d)).IsZero()) {
					void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_net.Conn, null>) : $.pointerValue<Exclude<__goscript_net.Conn, null>>(c)).SetDeadline($.markAsStructValue($.cloneStructValue(d))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
			let p: $.VarRef<dnsmessage.Parser> = $.varRef(new dnsmessage.Parser(undefined, true))
			let h: dnsmessage.Header = new dnsmessage.Header(undefined, true)
			{
				let [, ok] = $.typeAssertTuple<__goscript_net.PacketConn | null>(c, "net.PacketConn")
				if (ok) {
					let __goscriptTuple13: any = await __goscript_dnsclient_unix.dnsPacketRoundTrip(c, id, (q).clone(), udpReq)
					p.value = $.assignStruct(p.value, __goscriptTuple13[0])
					h = $.assignStruct(h, __goscriptTuple13[1])
					__goscriptShadow6 = __goscriptTuple13[2]
				} else {
					let __goscriptTuple14: any = await __goscript_dnsclient_unix.dnsStreamRoundTrip(c, id, (q).clone(), tcpReq)
					p.value = $.assignStruct(p.value, __goscriptTuple14[0])
					h = $.assignStruct(h, __goscriptTuple14[1])
					__goscriptShadow6 = __goscriptTuple14[2]
				}
			}
			void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_net.Conn, null>) : $.pointerValue<Exclude<__goscript_net.Conn, null>>(c)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow6 != null) {
				return [new dnsmessage.Parser(undefined, true), new dnsmessage.Header(undefined, true), __goscript_net.mapErr(__goscriptShadow6)]
			}
			{
				let __goscriptShadow7 = p.value.SkipQuestion()
				if (!$.comparableEqual(__goscriptShadow7, dnsmessage.ErrSectionDone)) {
					return [new dnsmessage.Parser(undefined, true), new dnsmessage.Header(undefined, true), __goscript_dnsclient_unix.errInvalidDNSResponse]
				}
			}

			if (h.Truncated && ($.stringEqual(network, "udp"))) {
				continue
			}
			return [(p.value).clone(), (h).clone(), null]
		}
		return [new dnsmessage.Parser(undefined, true), new dnsmessage.Header(undefined, true), __goscript_dnsclient_unix.errNoAnswerFromDNSServer]
	}

	public getLookupGroup(): singleflight.Group | $.VarRef<singleflight.Group> | null {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		if (r == null) {
			return $.fieldRef($.pointerValue<Resolver>(DefaultResolver)._fields, "lookupGroup")
		}
		return $.fieldRef($.pointerValue<Resolver>(r)._fields, "lookupGroup")
	}

	public async goLookupCNAME(ctx: context.Context | null, host: string, order: __goscript_dnsclient_unix.hostLookupOrder, conf: __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null): globalThis.Promise<[string, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let [, cname, err] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).goLookupIPCNAMEOrder(ctx, "CNAME", host, order, conf) : Resolver.prototype.goLookupIPCNAMEOrder.call(r, ctx, "CNAME", host, order, conf))
		return [cname.String(), err]
	}

	public async goLookupHostOrder(ctx: context.Context | null, name: string, order: __goscript_dnsclient_unix.hostLookupOrder, conf: __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null): globalThis.Promise<[$.Slice<string>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let addrs: $.Slice<string> = null! as $.Slice<string>
		let err: $.GoError = null! as $.GoError
		if ((order == 1) || (order == 3)) {

			let __goscriptTuple15: any = await __goscript_hosts.lookupStaticHost(name)
			addrs = __goscriptTuple15[0]
			if ($.sliceLen(addrs) > 0) {
				return [addrs, err]
			}

			if (order == 3) {
				return [null, $.interfaceValue<$.GoError>(await __goscript_net.newDNSError($.interfaceValue<$.GoError>(__goscript_net.errNoSuchHost, "*net.notFoundError", /* @__PURE__ */ $.pointerType("net.notFoundError")), name, ""), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
			}
		}
		let __goscriptTuple16: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).goLookupIPCNAMEOrder(ctx, "ip", name, order, conf) : Resolver.prototype.goLookupIPCNAMEOrder.call(r, ctx, "ip", name, order, conf))
		let ips: $.Slice<__goscript_iprawsock.IPAddr> = __goscriptTuple16[0]
		err = __goscriptTuple16[2]
		if (err != null) {
			return [addrs, err]
		}
		addrs = $.makeSlice<string>(0, $.sliceLen(ips), "string")
		for (let __goscriptRangeTarget7 = ips, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
			let ip = $.varRef(((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as __goscript_iprawsock.IPAddr)).clone())
			addrs = $.appendOne(addrs, ip.value.String())
		}
		return [addrs, err]
	}

	public async goLookupIP(ctx: context.Context | null, network: string, host: string, order: __goscript_dnsclient_unix.hostLookupOrder, conf: __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null): globalThis.Promise<[$.Slice<__goscript_iprawsock.IPAddr>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let addrs: $.Slice<__goscript_iprawsock.IPAddr> = null! as $.Slice<__goscript_iprawsock.IPAddr>
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple17: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).goLookupIPCNAMEOrder(ctx, network, host, order, conf) : Resolver.prototype.goLookupIPCNAMEOrder.call(r, ctx, network, host, order, conf))
		addrs = __goscriptTuple17[0]
		err = __goscriptTuple17[2]
		return [addrs, err]
	}

	public async goLookupIPCNAMEOrder(ctx: context.Context | null, network: string, name: string, order: __goscript_dnsclient_unix.hostLookupOrder, conf: __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null): globalThis.Promise<[$.Slice<__goscript_iprawsock.IPAddr>, dnsmessage.Name, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let addrs: $.Slice<__goscript_iprawsock.IPAddr> = null! as $.Slice<__goscript_iprawsock.IPAddr>
		let cname: dnsmessage.Name = new dnsmessage.Name(undefined, true)
		let err: $.GoError = null! as $.GoError
		if ((order == 1) || (order == 3)) {
			let canonical: string = ""
			let __goscriptTuple18: any = await __goscript_dnsclient_unix.goLookupIPFiles(name)
			addrs = __goscriptTuple18[0]
			canonical = __goscriptTuple18[1]

			if ($.sliceLen(addrs) > 0) {
				let __goscriptShadow8: $.GoError = null! as $.GoError
				let __goscriptTuple19: any = dnsmessage.NewName(canonical)
				cname = $.assignStruct(cname, __goscriptTuple19[0])
				__goscriptShadow8 = __goscriptTuple19[1]
				if (__goscriptShadow8 != null) {
					return [null, new dnsmessage.Name(undefined, true), __goscriptShadow8]
				}
				return [addrs, (cname).clone(), null]
			}

			if (order == 3) {
				return [null, new dnsmessage.Name(undefined, true), $.interfaceValue<$.GoError>(await __goscript_net.newDNSError($.interfaceValue<$.GoError>(__goscript_net.errNoSuchHost, "*net.notFoundError", /* @__PURE__ */ $.pointerType("net.notFoundError")), name, ""), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
			}
		}

		if (!__goscript_dnsclient.isDomainName(name)) {

			return [null, new dnsmessage.Name(undefined, true), $.interfaceValue<$.GoError>(await __goscript_net.newDNSError($.interfaceValue<$.GoError>(__goscript_net.errNoSuchHost, "*net.notFoundError", /* @__PURE__ */ $.pointerType("net.notFoundError")), name, ""), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
		}
		class result {
			public get p(): dnsmessage.Parser {
				return this._fields.p
			}

			public set p(value: dnsmessage.Parser) {
				this._fields.p = value
			}

			public get server(): string {
				return this._fields.server
			}

			public set server(value: string) {
				this._fields.server = value
			}

			public get error(): $.GoError {
				return this._fields.error
			}

			public set error(value: $.GoError) {
				this._fields.error = value
			}

			public _fields: {
				p: dnsmessage.Parser
				server: string
				error: $.GoError
			}

			constructor(init?: Partial<{p?: dnsmessage.Parser, server?: string, error?: $.GoError}>, __goscriptValue?: boolean) {
				this._fields = {
					p: init?.p ? init.p.clone() : new dnsmessage.Parser(undefined, true),
					server: init?.server ?? ("" as string),
					error: init?.error ?? (null! as $.GoError)
				}
				;(this as any)[$.structValueMarker] = __goscriptValue === true
			}

			public clone(): result {
				return new result(this, true)
			}

			public __goscriptAssign(source: result): void {
				const target = this._fields
				const values = source._fields
				$.assignStruct(target.p, values.p)
				target.server = values.server
				target.error = $.assignFieldValue(target.error, values.error, "error")
			}

			static __typeInfo = $.registerStructType(
				"net.result",
				() => new result(),
				() => [],
				result,
				() => [/* @__PURE__ */ $.structField("p", "dnsmessage.Parser", [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("server", /* @__PURE__ */ $.basicType("string"), [1], 80, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("error", "error", [2], 96, false, { pkgPath: "net" })]
			)
		}

		if (conf == null) {
			conf = await __goscript_dnsclient_unix.getSystemDNSConfig()
		}

		let lane: $.Channel<result> | null = $.makeChannel<result>(1, $.markAsStructValue(new result()), "both")
		let qtypes: $.Slice<dnsmessage.Type> = $.arrayToSlice<dnsmessage.Type>([1, 28])
		if ($.stringEqual(network, "CNAME")) {
			qtypes = $.appendOne(qtypes, $.uint(dnsmessage.TypeCNAME, 16))
		}
		switch (ipVersion(network)) {
			case 52:
			{
				qtypes = $.arrayToSlice<dnsmessage.Type>([1])
				break
			}
			case 54:
			{
				qtypes = $.arrayToSlice<dnsmessage.Type>([28])
				break
			}
		}
		let queryFn: ((fqdn: string, qtype: dnsmessage.Type) => void) | null = null! as ((fqdn: string, qtype: dnsmessage.Type) => void) | null
		let responseFn: ((fqdn: string, qtype: dnsmessage.Type) => result | globalThis.Promise<result>) | null = null! as ((fqdn: string, qtype: dnsmessage.Type) => result | globalThis.Promise<result>) | null
		if ($.pointerValue<__goscript_dnsconfig.dnsConfig>(conf).singleRequest) {
			queryFn = $.functionValue((fqdn: string, qtype: dnsmessage.Type): void => {
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")], results: [] } as $.FunctionTypeInfo))
			responseFn = $.functionValue(async (fqdn: string, qtype: dnsmessage.Type): globalThis.Promise<result> => {
				using __defer = new $.DisposableStack()
				dnsWaitGroup.value.Add(1)
				const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Done())(dnsWaitGroup.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*WaitGroup).Done-fm")
				__defer.defer(() => { __goscriptDeferCallee1() })
				let [p, server, __goscriptShadow9] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).tryOneName(ctx, conf, fqdn, qtype) : Resolver.prototype.tryOneName.call(r, ctx, conf, fqdn, qtype))
				return $.markAsStructValue(new result({p: (p).clone(), server: server, error: __goscriptShadow9}))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")], results: ["net.result"] } as $.FunctionTypeInfo))
		} else {
			queryFn = $.functionValue(async (fqdn: string, qtype: dnsmessage.Type): globalThis.Promise<void> => {
				dnsWaitGroup.value.Add(1)
				const __goscriptDeferArg0 = qtype
				queueMicrotask(async () => { await (async (qtype: dnsmessage.Type): globalThis.Promise<void> => {
					let [p, server, __goscriptShadow10] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).tryOneName(ctx, conf, fqdn, qtype) : Resolver.prototype.tryOneName.call(r, ctx, conf, fqdn, qtype))
					await $.chanSend(lane, $.markAsStructValue(new result({p: (p).clone(), server: server, error: __goscriptShadow10})))
					dnsWaitGroup.value.Done()
				})(__goscriptDeferArg0) })
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")], results: [] } as $.FunctionTypeInfo))
			responseFn = $.functionValue(async (fqdn: string, qtype: dnsmessage.Type): globalThis.Promise<result> => {
				return $.markAsStructValue($.cloneStructValue(await $.chanRecv(lane)))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")], results: ["net.result"] } as $.FunctionTypeInfo))
		}
		let lastErr: $.GoError = null! as $.GoError
		for (let __goscriptRangeTarget10 = (conf !== null && (conf as any).__isVarRef !== true && (conf as any).__goValue === undefined ? ((conf as any) as __goscript_dnsconfig.dnsConfig).nameList(name) : __goscript_dnsconfig.dnsConfig.prototype.nameList.call(conf, name)), __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
			let fqdn = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as string)
			for (let __goscriptRangeTarget8 = qtypes, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
				let qtype = $.uint((__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as dnsmessage.Type), 16)
				void (__goscriptAwait = queryFn!(fqdn, qtype), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			let hitStrictError = false
			for (let __goscriptRangeTarget9 = qtypes, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
				let qtype = $.uint((__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as dnsmessage.Type), 16)
				let __goscriptShadow11 = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = responseFn!(fqdn, qtype), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as result)))
				if (__goscriptShadow11.error != null) {
					{
						let [nerr, ok] = $.typeAssertTuple<__goscript_net.Error | null>(__goscriptShadow11.error, "net.Error")
						if ((ok && (__goscriptAwait = (nerr !== null && (nerr as any).__isVarRef !== true && (nerr as any).__goValue === undefined ? (nerr as Exclude<__goscript_net.Error, null>) : $.pointerValue<Exclude<__goscript_net.Error, null>>(nerr)).Temporary(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) && (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).strictErrors() : Resolver.prototype.strictErrors.call(r))) {

							hitStrictError = true
							lastErr = __goscriptShadow11.error
						} else {
							if ((lastErr == null) || ($.stringEqual(fqdn, ($.concatString(name, "."))))) {

								lastErr = __goscriptShadow11.error
							}
						}
					}
					continue
				}

				loop: while (true) {
					let [h, __goscriptShadow12] = __goscriptShadow11.p.AnswerHeader()
					if ((__goscriptShadow12 != null) && (!$.comparableEqual(__goscriptShadow12, dnsmessage.ErrSectionDone))) {
						lastErr = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>(__goscript_dnsclient_unix.errCannotUnmarshalDNSMessage).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_net.DNSError({Err: __goscriptLiteralField0, Name: name, Server: __goscriptShadow11.server}) })()), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))
					}
					if (__goscriptShadow12 != null) {
						break
					}
					switch (h.Type) {
						case dnsmessage.TypeA:
						{
							let [a, __goscriptShadow13] = __goscriptShadow11.p.AResource()
							if (__goscriptShadow13 != null) {
								lastErr = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField1 = (__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>(__goscript_dnsclient_unix.errCannotUnmarshalDNSMessage).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_net.DNSError({Err: __goscriptLiteralField1, Name: name, Server: __goscriptShadow11.server}) })()), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))
								break loop
							}
							addrs = $.appendOne(addrs, new __goscript_iprawsock.IPAddr({IP: (($.goSlice(a.A, undefined, undefined) as __goscript_ip.IP) as __goscript_ip.IP)}, true))
							if ((cname.Length == 0) && (h.Name.Length != 0)) {
								cname = $.assignStruct(cname, h.Name)
							}
							break
						}
						case dnsmessage.TypeAAAA:
						{
							let [aaaa, __goscriptShadow14] = __goscriptShadow11.p.AAAAResource()
							if (__goscriptShadow14 != null) {
								lastErr = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField2 = (__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>(__goscript_dnsclient_unix.errCannotUnmarshalDNSMessage).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_net.DNSError({Err: __goscriptLiteralField2, Name: name, Server: __goscriptShadow11.server}) })()), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))
								break loop
							}
							addrs = $.appendOne(addrs, new __goscript_iprawsock.IPAddr({IP: (($.goSlice(aaaa.AAAA, undefined, undefined) as __goscript_ip.IP) as __goscript_ip.IP)}, true))
							if ((cname.Length == 0) && (h.Name.Length != 0)) {
								cname = $.assignStruct(cname, h.Name)
							}
							break
						}
						case dnsmessage.TypeCNAME:
						{
							let [c, __goscriptShadow15] = __goscriptShadow11.p.CNAMEResource()
							if (__goscriptShadow15 != null) {
								lastErr = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField3 = (__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>(__goscript_dnsclient_unix.errCannotUnmarshalDNSMessage).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_net.DNSError({Err: __goscriptLiteralField3, Name: name, Server: __goscriptShadow11.server}) })()), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))
								break loop
							}
							if ((cname.Length == 0) && (c.CNAME.Length > 0)) {
								cname = $.assignStruct(cname, c.CNAME)
							}
							break
						}
						default:
						{
							{
								let __goscriptShadow16 = __goscriptShadow11.p.SkipAnswer()
								if (__goscriptShadow16 != null) {
									lastErr = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField4 = (__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>(__goscript_dnsclient_unix.errCannotUnmarshalDNSMessage).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_net.DNSError({Err: __goscriptLiteralField4, Name: name, Server: __goscriptShadow11.server}) })()), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))
									break loop
								}
							}
							continue
							break
						}
					}
				}
			}
			if (hitStrictError) {

				addrs = null
				break
			}
			if (($.sliceLen(addrs) > 0) || (($.stringEqual(network, "CNAME")) && (cname.Length > 0))) {
				break
			}
		}
		let __goscriptShadow17 = lastErr
		{
			let __goscriptTuple20: any = $.typeAssertTuple<__goscript_net.DNSError | $.VarRef<__goscript_net.DNSError> | null>(__goscriptShadow17, /* @__PURE__ */ $.pointerType("net.DNSError"))
			let __goscriptShadow18: __goscript_net.DNSError | $.VarRef<__goscript_net.DNSError> | null = __goscriptTuple20[0]
			let ok = __goscriptTuple20[1]
			if (ok) {

				$.pointerValue<__goscript_net.DNSError>(__goscriptShadow18).Name = name
			}
		}
		await __goscript_addrselect.sortByRFC6724(addrs)
		if (($.sliceLen(addrs) == 0) && !(($.stringEqual(network, "CNAME")) && (cname.Length > 0))) {
			if (order == 2) {
				let canonical: string = ""
				let __goscriptTuple21: any = await __goscript_dnsclient_unix.goLookupIPFiles(name)
				addrs = __goscriptTuple21[0]
				canonical = __goscriptTuple21[1]
				if ($.sliceLen(addrs) > 0) {
					let __goscriptShadow19: $.GoError = null! as $.GoError
					let __goscriptTuple22: any = dnsmessage.NewName(canonical)
					cname = $.assignStruct(cname, __goscriptTuple22[0])
					__goscriptShadow19 = __goscriptTuple22[1]
					if (__goscriptShadow19 != null) {
						return [null, new dnsmessage.Name(undefined, true), __goscriptShadow19]
					}
					return [addrs, (cname).clone(), null]
				}
			}
			if (lastErr != null) {
				return [null, new dnsmessage.Name(undefined, true), lastErr]
			}
		}
		return [addrs, (cname).clone(), null]
	}

	public async goLookupMX(ctx: context.Context | null, name: string): globalThis.Promise<[$.Slice<__goscript_dnsclient.MX | $.VarRef<__goscript_dnsclient.MX> | null>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let __goscriptTuple23: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).lookup(ctx, name, 15, null) : Resolver.prototype.lookup.call(r, ctx, name, 15, null))
		let p = $.varRef(__goscriptTuple23[0])
		let server = __goscriptTuple23[1]
		let err = __goscriptTuple23[2]
		if (err != null) {
			return [null, err]
		}
		let mxs: $.Slice<__goscript_dnsclient.MX | $.VarRef<__goscript_dnsclient.MX> | null> = null! as $.Slice<__goscript_dnsclient.MX | $.VarRef<__goscript_dnsclient.MX> | null>
		while (true) {
			let [h, __goscriptShadow20] = p.value.AnswerHeader()
			if ($.comparableEqual(__goscriptShadow20, dnsmessage.ErrSectionDone)) {
				break
			}
			if (__goscriptShadow20 != null) {
				return [null, $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: "cannot unmarshal DNS message", Name: name, Server: server}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
			}
			if (h.Type != 15) {
				{
					let __goscriptShadow21 = p.value.SkipAnswer()
					if (__goscriptShadow21 != null) {
						return [null, $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: "cannot unmarshal DNS message", Name: name, Server: server}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
					}
				}
				continue
			}
			let __goscriptTuple24: any = p.value.MXResource()
			let mx = __goscriptTuple24[0]
			__goscriptShadow20 = __goscriptTuple24[1]
			if (__goscriptShadow20 != null) {
				return [null, $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: "cannot unmarshal DNS message", Name: name, Server: server}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
			}
			mxs = $.appendOne(mxs, (() => { const __goscriptLiteralField5 = mx.MX.String(); return new __goscript_dnsclient.MX({Host: __goscriptLiteralField5, Pref: mx.Pref}) })(), $.appendZeros.nil)
		}
		__goscript_dnsclient.byPref_sort((mxs as __goscript_dnsclient.byPref))
		return [mxs, null]
	}

	public async goLookupNS(ctx: context.Context | null, name: string): globalThis.Promise<[$.Slice<__goscript_dnsclient.NS | $.VarRef<__goscript_dnsclient.NS> | null>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let __goscriptTuple25: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).lookup(ctx, name, 2, null) : Resolver.prototype.lookup.call(r, ctx, name, 2, null))
		let p = $.varRef(__goscriptTuple25[0])
		let server = __goscriptTuple25[1]
		let err = __goscriptTuple25[2]
		if (err != null) {
			return [null, err]
		}
		let nss: $.Slice<__goscript_dnsclient.NS | $.VarRef<__goscript_dnsclient.NS> | null> = null! as $.Slice<__goscript_dnsclient.NS | $.VarRef<__goscript_dnsclient.NS> | null>
		while (true) {
			let [h, __goscriptShadow22] = p.value.AnswerHeader()
			if ($.comparableEqual(__goscriptShadow22, dnsmessage.ErrSectionDone)) {
				break
			}
			if (__goscriptShadow22 != null) {
				return [null, $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: "cannot unmarshal DNS message", Name: name, Server: server}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
			}
			if (h.Type != 2) {
				{
					let __goscriptShadow23 = p.value.SkipAnswer()
					if (__goscriptShadow23 != null) {
						return [null, $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: "cannot unmarshal DNS message", Name: name, Server: server}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
					}
				}
				continue
			}
			let __goscriptTuple26: any = p.value.NSResource()
			let ns = __goscriptTuple26[0]
			__goscriptShadow22 = __goscriptTuple26[1]
			if (__goscriptShadow22 != null) {
				return [null, $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: "cannot unmarshal DNS message", Name: name, Server: server}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
			}
			nss = $.appendOne(nss, (() => { const __goscriptLiteralField6 = ns.NS.String(); return new __goscript_dnsclient.NS({Host: __goscriptLiteralField6}) })(), $.appendZeros.nil)
		}
		return [nss, null]
	}

	public async goLookupPTR(ctx: context.Context | null, addr: string, order: __goscript_dnsclient_unix.hostLookupOrder, conf: __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null): globalThis.Promise<[$.Slice<string>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		if ((order == 3) || (order == 1)) {
			let names: $.Slice<string> = await __goscript_hosts.lookupStaticAddr(addr)
			if ($.sliceLen(names) > 0) {
				return [names, null]
			}
			// goLookupTXT returns the TXT records from name.
			if (order == 3) {
				return [null, $.interfaceValue<$.GoError>(await __goscript_net.newDNSError($.interfaceValue<$.GoError>(__goscript_net.errNoSuchHost, "*net.notFoundError", /* @__PURE__ */ $.pointerType("net.notFoundError")), addr, ""), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
			}
		}

		let [arpa, err] = __goscript_dnsclient.reverseaddr(addr)
		if (err != null) {
			return [null, err]
		}
		let __goscriptTuple27: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).lookup(ctx, arpa, 12, conf) : Resolver.prototype.lookup.call(r, ctx, arpa, 12, conf))
		let p = $.varRef(__goscriptTuple27[0])
		let server = __goscriptTuple27[1]
		err = __goscriptTuple27[2]
		if (err != null) {
			{
				let __goscriptTuple28: any = errors.AsType(__goscriptStatic0(), $.pointerValueOrNil(err)!)
				let dnsErr: __goscript_net.DNSError | $.VarRef<__goscript_net.DNSError> | null = (__goscriptTuple28[0] as __goscript_net.DNSError | $.VarRef<__goscript_net.DNSError> | null)
				let ok = __goscriptTuple28[1]
				if (ok && $.pointerValue<__goscript_net.DNSError>(dnsErr).IsNotFound) {
					if (order == 2) {
						let names: $.Slice<string> = await __goscript_hosts.lookupStaticAddr(addr)
						if ($.sliceLen(names) > 0) {
							return [names, null]
						}
					}
				}
			}
			return [null, err]
		}
		let ptrs: $.Slice<string> = null! as $.Slice<string>
		while (true) {
			let [h, __goscriptShadow24] = p.value.AnswerHeader()
			if ($.comparableEqual(__goscriptShadow24, dnsmessage.ErrSectionDone)) {
				break
			}
			if (__goscriptShadow24 != null) {
				return [null, $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField7 = (__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>(__goscript_dnsclient_unix.errCannotUnmarshalDNSMessage).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_net.DNSError({Err: __goscriptLiteralField7, Name: addr, Server: server}) })()), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
			}
			if (h.Type != 12) {
				let __goscriptShadow25 = p.value.SkipAnswer()
				if (__goscriptShadow25 != null) {
					return [null, $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField8 = (__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>(__goscript_dnsclient_unix.errCannotUnmarshalDNSMessage).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_net.DNSError({Err: __goscriptLiteralField8, Name: addr, Server: server}) })()), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
				}
				continue
			}
			let __goscriptTuple29: any = p.value.PTRResource()
			let ptr = __goscriptTuple29[0]
			__goscriptShadow24 = __goscriptTuple29[1]
			if (__goscriptShadow24 != null) {
				return [null, $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField9 = (__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>(__goscript_dnsclient_unix.errCannotUnmarshalDNSMessage).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_net.DNSError({Err: __goscriptLiteralField9, Name: addr, Server: server}) })()), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
			}
			ptrs = $.appendOne(ptrs, ptr.PTR.String())
		}

		return [ptrs, null]
	}

	public async goLookupSRV(ctx: context.Context | null, service: string, proto: string, name: string): globalThis.Promise<[string, $.Slice<__goscript_dnsclient.SRV | $.VarRef<__goscript_dnsclient.SRV> | null>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let target: string = ""
		let srvs: $.Slice<__goscript_dnsclient.SRV | $.VarRef<__goscript_dnsclient.SRV> | null> = null! as $.Slice<__goscript_dnsclient.SRV | $.VarRef<__goscript_dnsclient.SRV> | null>
		let err: $.GoError = null! as $.GoError
		if (($.stringEqual(service, "")) && ($.stringEqual(proto, ""))) {
			target = name
		} else {
			target = $.concatString(($.concatString(($.concatString(($.concatString(($.concatString("_", service)), "._")), proto)), ".")), name)
		}
		let __goscriptTuple30: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).lookup(ctx, target, 33, null) : Resolver.prototype.lookup.call(r, ctx, target, 33, null))
		let p = $.varRef(__goscriptTuple30[0])
		let server = __goscriptTuple30[1]
		err = __goscriptTuple30[2]
		if (err != null) {
			return ["", null, err]
		}
		let cname: dnsmessage.Name = new dnsmessage.Name(undefined, true)
		while (true) {
			let [h, __goscriptShadow26] = p.value.AnswerHeader()
			if ($.comparableEqual(__goscriptShadow26, dnsmessage.ErrSectionDone)) {
				break
			}
			if (__goscriptShadow26 != null) {
				return ["", null, $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: "cannot unmarshal DNS message", Name: name, Server: server}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
			}
			if (h.Type != 33) {
				{
					let __goscriptShadow27 = p.value.SkipAnswer()
					if (__goscriptShadow27 != null) {
						return ["", null, $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: "cannot unmarshal DNS message", Name: name, Server: server}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
					}
				}
				continue
			}
			if ((cname.Length == 0) && (h.Name.Length != 0)) {
				cname = $.assignStruct(cname, h.Name)
			}
			let __goscriptTuple31: any = p.value.SRVResource()
			let srv = __goscriptTuple31[0]
			__goscriptShadow26 = __goscriptTuple31[1]
			if (__goscriptShadow26 != null) {
				return ["", null, $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: "cannot unmarshal DNS message", Name: name, Server: server}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
			}
			srvs = $.appendOne(srvs, (() => { const __goscriptLiteralField10 = srv.Target.String(); return new __goscript_dnsclient.SRV({Target: __goscriptLiteralField10, Port: srv.Port, Priority: srv.Priority, Weight: srv.Weight}) })(), $.appendZeros.nil)
		}
		__goscript_dnsclient.byPriorityWeight_sort((srvs as __goscript_dnsclient.byPriorityWeight))
		return [cname.String(), srvs, null]
	}

	public async goLookupTXT(ctx: context.Context | null, name: string): globalThis.Promise<[$.Slice<string>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let __goscriptTuple32: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).lookup(ctx, name, 16, null) : Resolver.prototype.lookup.call(r, ctx, name, 16, null))
		let p = $.varRef(__goscriptTuple32[0])
		let server = __goscriptTuple32[1]
		let err = __goscriptTuple32[2]
		if (err != null) {
			return [null, err]
		}
		let txts: $.Slice<string> = null! as $.Slice<string>
		while (true) {
			let [h, __goscriptShadow28] = p.value.AnswerHeader()
			if ($.comparableEqual(__goscriptShadow28, dnsmessage.ErrSectionDone)) {
				break
			}
			if (__goscriptShadow28 != null) {
				return [null, $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: "cannot unmarshal DNS message", Name: name, Server: server}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
			}
			if (h.Type != 16) {
				{
					let __goscriptShadow29 = p.value.SkipAnswer()
					if (__goscriptShadow29 != null) {
						return [null, $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: "cannot unmarshal DNS message", Name: name, Server: server}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
					}
				}
				continue
			}
			let __goscriptTuple33: any = p.value.TXTResource()
			let txt = __goscriptTuple33[0]
			__goscriptShadow28 = __goscriptTuple33[1]
			if (__goscriptShadow28 != null) {
				return [null, $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: "cannot unmarshal DNS message", Name: name, Server: server}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
			}
			// Multiple strings in one TXT record need to be
			// concatenated without separator to be consistent
			// with previous Go resolver.
			let n = 0
			for (let __goscriptRangeTarget11 = txt.TXT, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
				let s = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as string)
				n = n + ($.stringLen(s))
			}
			let txtJoin: $.Slice<number> = $.makeSlice<number>(0, n, "byte")
			for (let __goscriptRangeTarget12 = txt.TXT, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
				let s = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as string)
				txtJoin = $.appendSlice(txtJoin, $.stringToBytes(s), $.byteSliceHint)
			}
			if ($.sliceLen(txts) == 0) {
				txts = $.makeSlice<string>(0, 1, "string")
			}
			txts = $.appendOne(txts, $.bytesToString(txtJoin))
		}
		return [txts, null]
	}

	public async internetAddrList(ctx: context.Context | null, net: string, addr: string): globalThis.Promise<[__goscript_ipsock.addrList, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let err: $.GoError = null! as $.GoError
		let host: string = ""
		let port: string = ""
		let portnum: number = 0
		switch (net) {
			case "tcp":
			case "tcp4":
			case "tcp6":
			case "udp":
			case "udp4":
			case "udp6":
			{
				if (!$.stringEqual(addr, "")) {
					{
						let __goscriptTuple34: any = await __goscript_ipsock.SplitHostPort(addr)
						host = __goscriptTuple34[0]
						port = __goscriptTuple34[1]
						err = __goscriptTuple34[2]
						if (err != null) {
							return [(null as __goscript_ipsock.addrList), err]
						}
					}
					{
						let __goscriptTuple35: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).LookupPort(ctx, net, port) : Resolver.prototype.LookupPort.call(r, ctx, net, port))
						portnum = __goscriptTuple35[0]
						err = __goscriptTuple35[1]
						if (err != null) {
							return [(null as __goscript_ipsock.addrList), err]
						}
					}
				}
				break
			}
			case "ip":
			case "ip4":
			case "ip6":
			{
				if (!$.stringEqual(addr, "")) {
					host = addr
				}
				break
			}
			default:
			{
				return [(null as __goscript_ipsock.addrList), $.namedValueInterfaceValue<$.GoError>(net, "net.UnknownNetworkError", {"Error": __goscript_net.UnknownNetworkError_Error}, /* @__PURE__ */ $.basicType("string", "net.UnknownNetworkError"))]
				break
			}
		}
		let inetaddr: ((ip: __goscript_iprawsock.IPAddr) => __goscript_net.Addr | null | globalThis.Promise<__goscript_net.Addr | null>) | null = $.functionValue((ip: __goscript_iprawsock.IPAddr): __goscript_net.Addr | null => {
			switch (net) {
				case "tcp":
				case "tcp4":
				case "tcp6":
				{
					return $.interfaceValue<__goscript_net.Addr | null>(new __goscript_tcpsock.TCPAddr({IP: (ip.IP as __goscript_ip.IP), Port: portnum, Zone: ip.Zone}), "*net.TCPAddr", /* @__PURE__ */ $.pointerType("net.TCPAddr"))
					break
				}
				case "udp":
				case "udp4":
				case "udp6":
				{
					return $.interfaceValue<__goscript_net.Addr | null>(new __goscript_udpsock.UDPAddr({IP: (ip.IP as __goscript_ip.IP), Port: portnum, Zone: ip.Zone}), "*net.UDPAddr", /* @__PURE__ */ $.pointerType("net.UDPAddr"))
					break
				}
				case "ip":
				case "ip4":
				case "ip6":
				{
					return $.interfaceValue<__goscript_net.Addr | null>(new __goscript_iprawsock.IPAddr({IP: (ip.IP as __goscript_ip.IP), Zone: ip.Zone}), "*net.IPAddr", /* @__PURE__ */ $.pointerType("net.IPAddr"))
					break
				}
				default:
				{
					$.panic($.concatString("unexpected network: ", net))
					break
				}
			}
		}, ({ kind: $.TypeKind.Function, params: ["net.IPAddr"], results: ["net.Addr"] } as $.FunctionTypeInfo))
		if ($.stringEqual(host, "")) {
			return [($.arrayToSlice<__goscript_net.Addr | null>([(__goscriptAwait = inetaddr!(new __goscript_iprawsock.IPAddr(undefined, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]) as __goscript_ipsock.addrList), null]
		}

		let __goscriptTuple36: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).lookupIPAddr(ctx, net, host) : Resolver.prototype.lookupIPAddr.call(r, ctx, net, host))
		let ips: $.Slice<__goscript_iprawsock.IPAddr> = __goscriptTuple36[0]
		err = __goscriptTuple36[1]
		if (err != null) {
			return [(null as __goscript_ipsock.addrList), err]
		}

		if (($.sliceLen(ips) == 1) && __goscript_ip.IP_Equal($.arrayIndex(ips!, 0).IP, (__goscript_ip.IPv6unspecified as __goscript_ip.IP))) {
			ips = $.appendOne(ips, new __goscript_iprawsock.IPAddr({IP: (__goscript_ip.IPv4zero as __goscript_ip.IP)}, true))
		}

		let filter: ((_p0: __goscript_iprawsock.IPAddr) => boolean | globalThis.Promise<boolean>) | null = null! as ((_p0: __goscript_iprawsock.IPAddr) => boolean | globalThis.Promise<boolean>) | null
		if ((!$.stringEqual(net, "")) && ($.indexString(net, $.stringLen(net) - 1) == 52)) {
			filter = __goscript_ipsock.ipv4only
		}
		if ((!$.stringEqual(net, "")) && ($.indexString(net, $.stringLen(net) - 1) == 54)) {
			filter = __goscript_ipsock.ipv6only
		}
		const __goscriptReturn6 = await __goscript_ipsock.filterAddrList(filter, ips, inetaddr, host)
		return [(__goscriptReturn6[0] as __goscript_ipsock.addrList), __goscriptReturn6[1]]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async lookup(ctx: context.Context | null, name: string, qtype: dnsmessage.Type, conf: __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null): globalThis.Promise<[dnsmessage.Parser, string, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		if (!__goscript_dnsclient.isDomainName(name)) {

			return [new dnsmessage.Parser(undefined, true), "", $.interfaceValue<$.GoError>(await __goscript_net.newDNSError($.interfaceValue<$.GoError>(__goscript_net.errNoSuchHost, "*net.notFoundError", /* @__PURE__ */ $.pointerType("net.notFoundError")), name, ""), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
		}

		if (conf == null) {
			conf = await __goscript_dnsclient_unix.getSystemDNSConfig()
		}

		let p: dnsmessage.Parser = new dnsmessage.Parser(undefined, true)
		let server: string = ""
		let err: $.GoError = null! as $.GoError
		for (let __goscriptRangeTarget13 = (conf !== null && (conf as any).__isVarRef !== true && (conf as any).__goValue === undefined ? ((conf as any) as __goscript_dnsconfig.dnsConfig).nameList(name) : __goscript_dnsconfig.dnsConfig.prototype.nameList.call(conf, name)), __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
			let fqdn = (__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as string)
			let __goscriptTuple37: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).tryOneName(ctx, conf, fqdn, qtype) : Resolver.prototype.tryOneName.call(r, ctx, conf, fqdn, qtype))
			p = $.assignStruct(p, __goscriptTuple37[0])
			server = __goscriptTuple37[1]
			err = __goscriptTuple37[2]
			if (err == null) {
				break
			}
			{
				let [nerr, ok] = $.typeAssertTuple<__goscript_net.Error | null>(err, "net.Error")
				if ((ok && (__goscriptAwait = (nerr !== null && (nerr as any).__isVarRef !== true && (nerr as any).__goValue === undefined ? (nerr as Exclude<__goscript_net.Error, null>) : $.pointerValue<Exclude<__goscript_net.Error, null>>(nerr)).Temporary(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) && (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).strictErrors() : Resolver.prototype.strictErrors.call(r))) {

					break
				}
			}
		}
		if (err == null) {
			return [(p).clone(), server, null]
		}
		let __goscriptShadow30 = err
		{
			let __goscriptTuple38: any = $.typeAssertTuple<__goscript_net.DNSError | $.VarRef<__goscript_net.DNSError> | null>(__goscriptShadow30, /* @__PURE__ */ $.pointerType("net.DNSError"))
			let __goscriptShadow31: __goscript_net.DNSError | $.VarRef<__goscript_net.DNSError> | null = __goscriptTuple38[0]
			let ok = __goscriptTuple38[1]
			if (ok) {

				$.pointerValue<__goscript_net.DNSError>(__goscriptShadow31).Name = name
			}
		}
		return [new dnsmessage.Parser(undefined, true), "", err]
	}

	public async lookupAddr(ctx: context.Context | null, addr: string): globalThis.Promise<[$.Slice<string>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let __goscriptTuple39: any = await __goscript_conf.conf.prototype.addrLookupOrder.call(await __goscript_conf.systemConf(), r, addr)
		let order = __goscriptTuple39[0]
		let __goscriptShadow32: __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null = __goscriptTuple39[1]
		if (order == 0) {
			return __goscript_cgo_stub.cgoLookupPTR(ctx, addr)
		}
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).goLookupPTR(ctx, addr, order, __goscriptShadow32) : Resolver.prototype.goLookupPTR.call(r, ctx, addr, order, __goscriptShadow32))
	}

	public async lookupCNAME(ctx: context.Context | null, name: string): globalThis.Promise<[string, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let __goscriptTuple40: any = await __goscript_conf.conf.prototype.hostLookupOrder.call(await __goscript_conf.systemConf(), r, name)
		let order = __goscriptTuple40[0]
		let __goscriptShadow33: __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null = __goscriptTuple40[1]
		if (order == 0) {
			{
				let [cname, err] = __goscript_cgo_stub.cgoLookupCNAME(ctx, name)
				if (err == null) {
					return [cname, null]
				}
			}
		}
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).goLookupCNAME(ctx, name, order, __goscriptShadow33) : Resolver.prototype.goLookupCNAME.call(r, ctx, name, order, __goscriptShadow33))
	}

	public async lookupHost(ctx: context.Context | null, host: string): globalThis.Promise<[$.Slice<string>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let addrs: $.Slice<string> = null! as $.Slice<string>
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple41: any = await __goscript_conf.conf.prototype.hostLookupOrder.call(await __goscript_conf.systemConf(), r, host)
		let order = __goscriptTuple41[0]
		let __goscriptShadow34: __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null = __goscriptTuple41[1]
		if (order == 0) {
			return __goscript_cgo_stub.cgoLookupHost(ctx, host)
		}
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).goLookupHostOrder(ctx, host, order, __goscriptShadow34) : Resolver.prototype.goLookupHostOrder.call(r, ctx, host, order, __goscriptShadow34))
	}

	public async lookupIP(ctx: context.Context | null, network: string, host: string): globalThis.Promise<[$.Slice<__goscript_iprawsock.IPAddr>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let addrs: $.Slice<__goscript_iprawsock.IPAddr> = null! as $.Slice<__goscript_iprawsock.IPAddr>
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple42: any = await __goscript_conf.conf.prototype.hostLookupOrder.call(await __goscript_conf.systemConf(), r, host)
		let order = __goscriptTuple42[0]
		let __goscriptShadow35: __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null = __goscriptTuple42[1]
		if (order == 0) {
			return __goscript_cgo_stub.cgoLookupIP(ctx, network, host)
		}
		let __goscriptTuple43: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).goLookupIPCNAMEOrder(ctx, network, host, order, __goscriptShadow35) : Resolver.prototype.goLookupIPCNAMEOrder.call(r, ctx, network, host, order, __goscriptShadow35))
		let ips: $.Slice<__goscript_iprawsock.IPAddr> = __goscriptTuple43[0]
		err = __goscriptTuple43[2]
		return [ips, err]
	}

	public async lookupIPAddr(ctx: context.Context | null, network: string, host: string): globalThis.Promise<[$.Slice<__goscript_iprawsock.IPAddr>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		// Make sure that no matter what we do later, host=="" is rejected.
		if ($.stringEqual(host, "")) {
			return [null, $.interfaceValue<$.GoError>(await __goscript_net.newDNSError($.interfaceValue<$.GoError>(__goscript_net.errNoSuchHost, "*net.notFoundError", /* @__PURE__ */ $.pointerType("net.notFoundError")), host, ""), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
		}
		{
			let [ip, err] = netip.ParseAddr(host)
			if (err == null) {
				return [$.arrayToSlice<__goscript_iprawsock.IPAddr>([(() => { const __goscriptLiteralField11 = (__goscript_ip.IP_To16((ip.AsSlice() as __goscript_ip.IP)) as __goscript_ip.IP); const __goscriptLiteralField12 = ip.Zone(); return new __goscript_iprawsock.IPAddr({IP: __goscriptLiteralField11, Zone: __goscriptLiteralField12}, true) })()]), null]
			}
		}
		let __goscriptTuple44: any = $.typeAssertTuple<nettrace.Trace | $.VarRef<nettrace.Trace> | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new nettrace.TraceKey(undefined, true), "nettrace.TraceKey", "nettrace.TraceKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("nettrace.Trace"))
		let trace: nettrace.Trace | $.VarRef<nettrace.Trace> | null = __goscriptTuple44[0]
		let trace$: nettrace.Trace = trace == null ? $.pointerTarget<nettrace.Trace>(trace) : (trace as any).__isVarRef === true ? (trace as any).value : (trace as any).__goValue === undefined ? (trace as any) : $.pointerTarget<nettrace.Trace>(trace)
		if ((trace != null) && ((trace$ as nettrace.Trace).DNSStart != null)) {
			void (__goscriptAwait = (trace$ as nettrace.Trace).DNSStart!(host), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		// The underlying resolver func is lookupIP by default but it
		// can be overridden by tests. This is needed by net/http, so it
		// uses a context key instead of unexported variables.
		let resolverFunc: ((ctx: context.Context | null, network: string, host: string) => [$.Slice<__goscript_iprawsock.IPAddr>, $.GoError] | globalThis.Promise<[$.Slice<__goscript_iprawsock.IPAddr>, $.GoError]>) | null = $.functionValue(((__receiver) => (ctx: context.Context | null, network: string, host: string) => __receiver.lookupIP(ctx, network, host))($.pointerValue<Resolver>(r)), ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.sliceType("net.IPAddr"), "error"] } as $.FunctionTypeInfo), "net.(*Resolver).lookupIP-fm")
		{
			let [alt, ] = $.typeAssertTuple<((_p0: context.Context | null, _p1: string, _p2: string) => [$.Slice<__goscript_iprawsock.IPAddr>, $.GoError] | globalThis.Promise<[$.Slice<__goscript_iprawsock.IPAddr>, $.GoError]>) | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new nettrace.LookupIPAltResolverKey(undefined, true), "nettrace.LookupIPAltResolverKey", "nettrace.LookupIPAltResolverKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.sliceType("net.IPAddr"), "error"] } as $.FunctionTypeInfo))
			if (alt != null) {
				resolverFunc = alt
			}
		}

		// We don't want a cancellation of ctx to affect the
		// lookupGroup operation. Otherwise if our context gets
		// canceled it might cause an error to be returned to a lookup
		// using a completely different context. However we need to preserve
		// only the values in context. See Issue 28600.
		let [lookupGroupCtx, lookupGroupCancel] = context.WithCancel($.pointerValueOrNil(withUnexpiredValuesPreserved(ctx))!)

		let lookupKey = $.concatString(($.concatString(network, "\x00")), host)
		dnsWaitGroup.value.Add(1)
		let ch: $.Channel<singleflight.Result> | null = await singleflight.Group.prototype.DoChan.call((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).getLookupGroup() : Resolver.prototype.getLookupGroup.call(r)), lookupKey, $.functionValue(async (): globalThis.Promise<[any, $.GoError]> => {
			const __goscriptReturn13 = await __goscript_hook.__goscript_get_testHookLookupIP()!(lookupGroupCtx, resolverFunc, network, host)
			return [$.interfaceValue(__goscriptReturn13[0], "[]net.IPAddr", /* @__PURE__ */ $.sliceType("net.IPAddr")), __goscriptReturn13[1]]
		}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)))

		let dnsWaitGroupDone: ((ch: $.Channel<singleflight.Result> | null, cancelFn: (() => void) | null) => void) | null = $.functionValue(async (ch: $.Channel<singleflight.Result> | null, cancelFn: context.CancelFunc | null): globalThis.Promise<void> => {
			await $.chanRecv(ch)
			dnsWaitGroup.value.Done()
			void (__goscriptAwait = cancelFn!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.channelType("singleflight.Result", "receive"), ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo))
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, [$.Slice<__goscript_iprawsock.IPAddr>, $.GoError]>([
			{
				id: 0,
				isSend: false,
				channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect0Result) => {
					if (await singleflight.Group.prototype.ForgetUnshared.call((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).getLookupGroup() : Resolver.prototype.getLookupGroup.call(r)), lookupKey)) {
						void (__goscriptAwait = lookupGroupCancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						const __goscriptDeferCallee2 = dnsWaitGroupDone
						const __goscriptDeferArg1 = ch
						const __goscriptDeferArg2 = $.functionValue((): void => {
						}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
						queueMicrotask(async () => { (__goscriptAwait = __goscriptDeferCallee2!(__goscriptDeferArg1, __goscriptDeferArg2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
					} else {
						const __goscriptDeferCallee3 = dnsWaitGroupDone
						const __goscriptDeferArg3 = ch
						const __goscriptDeferArg4 = lookupGroupCancel
						queueMicrotask(async () => { (__goscriptAwait = __goscriptDeferCallee3!(__goscriptDeferArg3, __goscriptDeferArg4), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
					}
					let err: __goscript_net.DNSError | $.VarRef<__goscript_net.DNSError> | null = await __goscript_net.newDNSError(__goscript_net.mapErr((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), host, "")
					if ((trace != null) && ((trace$ as nettrace.Trace).DNSDone != null)) {
						void (__goscriptAwait = (trace$ as nettrace.Trace).DNSDone!(null, false, $.interfaceValue<$.GoError>(err, "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return [null, $.interfaceValue<$.GoError>(err, "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
				}
			},
			{
				id: 1,
				isSend: false,
				channel: ch,
				onSelected: async (__goscriptSelect0Result) => {
					let r = __goscriptSelect0Result.value
					dnsWaitGroup.value.Done()
					void (__goscriptAwait = lookupGroupCancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					let err = r.Err
					if (err != null) {
						{
							let [, ok] = $.typeAssertTuple<__goscript_net.DNSError | $.VarRef<__goscript_net.DNSError> | null>(err, /* @__PURE__ */ $.pointerType("net.DNSError"))
							if (!ok) {
								err = $.interfaceValue<$.GoError>(await __goscript_net.newDNSError(__goscript_net.mapErr(err), host, ""), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))
							}
						}
					}
					if ((trace != null) && ((trace$ as nettrace.Trace).DNSDone != null)) {
						let __goscriptTuple45: any = $.typeAssertTuple<$.Slice<__goscript_iprawsock.IPAddr>>(r.Val, /* @__PURE__ */ $.sliceType("net.IPAddr"))
						let addrs: $.Slice<__goscript_iprawsock.IPAddr> = __goscriptTuple45[0]
						void (__goscriptAwait = (trace$ as nettrace.Trace).DNSDone!(ipAddrsEface(addrs), r.Shared, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return lookupIPReturn(r.Val, err, r.Shared)
				}
			}
		], false)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async lookupMX(ctx: context.Context | null, name: string): globalThis.Promise<[$.Slice<__goscript_dnsclient.MX | $.VarRef<__goscript_dnsclient.MX> | null>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).goLookupMX(ctx, name) : Resolver.prototype.goLookupMX.call(r, ctx, name))
	}

	public async lookupNS(ctx: context.Context | null, name: string): globalThis.Promise<[$.Slice<__goscript_dnsclient.NS | $.VarRef<__goscript_dnsclient.NS> | null>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).goLookupNS(ctx, name) : Resolver.prototype.goLookupNS.call(r, ctx, name))
	}

	public async lookupPort(ctx: context.Context | null, network: string, service: string): globalThis.Promise<[number, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;

		if (!__goscript_conf.conf.prototype.mustUseGoResolver.call(await __goscript_conf.systemConf(), r)) {
			let [port, err] = __goscript_cgo_stub.cgoLookupPort(ctx, network, service)
			if (err != null) {

				{
					let [__goscriptShadow36, __goscriptShadow37] = await __goscript_port_unix.goLookupPort(network, service)
					if (__goscriptShadow37 == null) {
						return [__goscriptShadow36, null]
					}
				}
			}
			return [port, err]
		}
		return __goscript_port_unix.goLookupPort(network, service)
	}

	public async lookupSRV(ctx: context.Context | null, service: string, proto: string, name: string): globalThis.Promise<[string, $.Slice<__goscript_dnsclient.SRV | $.VarRef<__goscript_dnsclient.SRV> | null>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).goLookupSRV(ctx, service, proto, name) : Resolver.prototype.goLookupSRV.call(r, ctx, service, proto, name))
	}

	public async lookupTXT(ctx: context.Context | null, name: string): globalThis.Promise<[$.Slice<string>, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).goLookupTXT(ctx, name) : Resolver.prototype.goLookupTXT.call(r, ctx, name))
	}

	public preferGo(): boolean {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		return (r != null) && $.pointerValue<Resolver>(r).PreferGo
	}

	public async resolveAddrList(ctx: context.Context | null, op: string, network: string, addr: string, hint: __goscript_net.Addr | null): globalThis.Promise<[__goscript_ipsock.addrList, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		let [afnet, , err] = await __goscript_dial.parseNetwork(ctx, network, true)
		if (err != null) {
			return [(null as __goscript_ipsock.addrList), err]
		}
		if (($.stringEqual(op, "dial")) && ($.stringEqual(addr, ""))) {
			return [(null as __goscript_ipsock.addrList), __goscript_net.errMissingAddress]
		}
		switch (afnet) {
			case "unix":
			case "unixgram":
			case "unixpacket":
			{
				let __goscriptShadow38 = addr
				let __goscriptTuple46: any = __goscript_unixsock.ResolveUnixAddr(afnet, __goscriptShadow38)
				let __goscriptShadow39: __goscript_unixsock.UnixAddr | $.VarRef<__goscript_unixsock.UnixAddr> | null = __goscriptTuple46[0]
				let __goscriptShadow40 = __goscriptTuple46[1]
				if (__goscriptShadow40 != null) {
					return [(null as __goscript_ipsock.addrList), __goscriptShadow40]
				}
				if ((($.stringEqual(op, "dial")) && (hint != null)) && (!$.stringEqual((__goscriptShadow39 !== null && (__goscriptShadow39 as any).__isVarRef !== true && (__goscriptShadow39 as any).__goValue === undefined ? ((__goscriptShadow39 as any) as __goscript_unixsock.UnixAddr).Network() : __goscript_unixsock.UnixAddr.prototype.Network.call(__goscriptShadow39)), (__goscriptAwait = (hint !== null && (hint as any).__isVarRef !== true && (hint as any).__goValue === undefined ? (hint as Exclude<__goscript_net.Addr, null>) : $.pointerValue<Exclude<__goscript_net.Addr, null>>(hint)).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))) {
					return [(null as __goscript_ipsock.addrList), $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField13 = (__goscriptAwait = (hint !== null && (hint as any).__isVarRef !== true && (hint as any).__goValue === undefined ? (hint as Exclude<__goscript_net.Addr, null>) : $.pointerValue<Exclude<__goscript_net.Addr, null>>(hint)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_net.AddrError({Err: "mismatched local address type", Addr: __goscriptLiteralField13}) })()), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))]
				}
				return [($.arrayToSlice<__goscript_net.Addr | null>([$.interfaceValue<__goscript_net.Addr | null>(__goscriptShadow39, "*net.UnixAddr", /* @__PURE__ */ $.pointerType("net.UnixAddr"))]) as __goscript_ipsock.addrList), null]
				break
			}
		}
		let __goscriptTuple47: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Resolver).internetAddrList(ctx, afnet, addr) : Resolver.prototype.internetAddrList.call(r, ctx, afnet, addr))
		let addrs: __goscript_ipsock.addrList = (__goscriptTuple47[0] as __goscript_ipsock.addrList)
		err = __goscriptTuple47[1]
		if (((err != null) || (!$.stringEqual(op, "dial"))) || (hint == null)) {
			return [(addrs as __goscript_ipsock.addrList), err]
		}
		let tcp: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null = null! as __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null
		let udp: __goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null = null! as __goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null
		let ip: __goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null = null! as __goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null
		let wildcard: boolean = false
		{
			const __goscriptTypeSwitchValue = hint
			switch (true) {
				case $.typeAssert<__goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.TCPAddr")).ok:
					{
						let hint: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null = $.typeAssert<__goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.TCPAddr")).value
						tcp = hint
						wildcard = (tcp !== null && (tcp as any).__isVarRef !== true && (tcp as any).__goValue === undefined ? ((tcp as any) as __goscript_tcpsock.TCPAddr).isWildcard() : __goscript_tcpsock.TCPAddr.prototype.isWildcard.call(tcp))
					}
					break
				case $.typeAssert<__goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UDPAddr")).ok:
					{
						let hint: __goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null = $.typeAssert<__goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UDPAddr")).value
						udp = hint
						wildcard = (udp !== null && (udp as any).__isVarRef !== true && (udp as any).__goValue === undefined ? ((udp as any) as __goscript_udpsock.UDPAddr).isWildcard() : __goscript_udpsock.UDPAddr.prototype.isWildcard.call(udp))
					}
					break
				case $.typeAssert<__goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.IPAddr")).ok:
					{
						let hint: __goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null = $.typeAssert<__goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.IPAddr")).value
						ip = hint
						wildcard = (ip !== null && (ip as any).__isVarRef !== true && (ip as any).__goValue === undefined ? ((ip as any) as __goscript_iprawsock.IPAddr).isWildcard() : __goscript_iprawsock.IPAddr.prototype.isWildcard.call(ip))
					}
					break
			}
		}
		let naddrs: __goscript_ipsock.addrList = ($.goSlice(addrs, undefined, 0) as __goscript_ipsock.addrList)
		for (let __goscriptRangeTarget14 = addrs, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow14.length; __rangeIndex++) {
			let addr = (__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + __rangeIndex] as __goscript_net.Addr | null)
			if (!$.stringEqual((__goscriptAwait = (addr !== null && (addr as any).__isVarRef !== true && (addr as any).__goValue === undefined ? (addr as Exclude<__goscript_net.Addr, null>) : $.pointerValue<Exclude<__goscript_net.Addr, null>>(addr)).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = (hint !== null && (hint as any).__isVarRef !== true && (hint as any).__goValue === undefined ? (hint as Exclude<__goscript_net.Addr, null>) : $.pointerValue<Exclude<__goscript_net.Addr, null>>(hint)).Network(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
				return [(null as __goscript_ipsock.addrList), $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField14 = (__goscriptAwait = (hint !== null && (hint as any).__isVarRef !== true && (hint as any).__goValue === undefined ? (hint as Exclude<__goscript_net.Addr, null>) : $.pointerValue<Exclude<__goscript_net.Addr, null>>(hint)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_net.AddrError({Err: "mismatched local address type", Addr: __goscriptLiteralField14}) })()), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))]
			}
			{
				const __goscriptTypeSwitchValue = addr
				switch (true) {
					case $.typeAssert<__goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.TCPAddr")).ok:
						{
							let addr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null = $.typeAssert<__goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.TCPAddr")).value
							if ((!wildcard && !(addr !== null && (addr as any).__isVarRef !== true && (addr as any).__goValue === undefined ? ((addr as any) as __goscript_tcpsock.TCPAddr).isWildcard() : __goscript_tcpsock.TCPAddr.prototype.isWildcard.call(addr))) && !__goscript_ip.IP_matchAddrFamily($.pointerValue<__goscript_tcpsock.TCPAddr>(addr).IP, ($.pointerValue<__goscript_tcpsock.TCPAddr>(tcp).IP as __goscript_ip.IP))) {
								continue
							}
							naddrs = ($.appendOne((naddrs as __goscript_ipsock.addrList), $.interfaceValue<__goscript_net.Addr | null>(addr, "*net.TCPAddr", /* @__PURE__ */ $.pointerType("net.TCPAddr")), $.appendZeros.nil) as __goscript_ipsock.addrList)
						}
						break
					case $.typeAssert<__goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UDPAddr")).ok:
						{
							let addr: __goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null = $.typeAssert<__goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UDPAddr")).value
							if ((!wildcard && !(addr !== null && (addr as any).__isVarRef !== true && (addr as any).__goValue === undefined ? ((addr as any) as __goscript_udpsock.UDPAddr).isWildcard() : __goscript_udpsock.UDPAddr.prototype.isWildcard.call(addr))) && !__goscript_ip.IP_matchAddrFamily($.pointerValue<__goscript_udpsock.UDPAddr>(addr).IP, ($.pointerValue<__goscript_udpsock.UDPAddr>(udp).IP as __goscript_ip.IP))) {
								continue
							}
							naddrs = ($.appendOne((naddrs as __goscript_ipsock.addrList), $.interfaceValue<__goscript_net.Addr | null>(addr, "*net.UDPAddr", /* @__PURE__ */ $.pointerType("net.UDPAddr")), $.appendZeros.nil) as __goscript_ipsock.addrList)
						}
						break
					case $.typeAssert<__goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.IPAddr")).ok:
						{
							let addr: __goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null = $.typeAssert<__goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.IPAddr")).value
							if ((!wildcard && !(addr !== null && (addr as any).__isVarRef !== true && (addr as any).__goValue === undefined ? ((addr as any) as __goscript_iprawsock.IPAddr).isWildcard() : __goscript_iprawsock.IPAddr.prototype.isWildcard.call(addr))) && !__goscript_ip.IP_matchAddrFamily($.pointerValue<__goscript_iprawsock.IPAddr>(addr).IP, ($.pointerValue<__goscript_iprawsock.IPAddr>(ip).IP as __goscript_ip.IP))) {
								continue
							}
							naddrs = ($.appendOne((naddrs as __goscript_ipsock.addrList), $.interfaceValue<__goscript_net.Addr | null>(addr, "*net.IPAddr", /* @__PURE__ */ $.pointerType("net.IPAddr")), $.appendZeros.nil) as __goscript_ipsock.addrList)
						}
						break
				}
			}
		}
		if ($.sliceLen((naddrs as __goscript_ipsock.addrList)) == 0) {
			return [(null as __goscript_ipsock.addrList), $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField15 = (__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>(__goscript_net.errNoSuitableAddress).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField16 = (__goscriptAwait = (hint !== null && (hint as any).__isVarRef !== true && (hint as any).__goValue === undefined ? (hint as Exclude<__goscript_net.Addr, null>) : $.pointerValue<Exclude<__goscript_net.Addr, null>>(hint)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_net.AddrError({Err: __goscriptLiteralField15, Addr: __goscriptLiteralField16}) })()), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))]
		}
		return [(naddrs as __goscript_ipsock.addrList), null]
	}

	public strictErrors(): boolean {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		return (r != null) && $.pointerValue<Resolver>(r).StrictErrors
	}

	public async tryOneName(ctx: context.Context | null, cfg: __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null, name: string, qtype: dnsmessage.Type): globalThis.Promise<[dnsmessage.Parser, string, $.GoError]> {
		const r: Resolver | $.VarRef<Resolver> | null = this;
		const cfg$: __goscript_dnsconfig.dnsConfig = cfg == null ? $.pointerTarget<__goscript_dnsconfig.dnsConfig>(cfg) : (cfg as any).__isVarRef === true ? (cfg as any).value : (cfg as any).__goValue === undefined ? (cfg as any) : $.pointerTarget<__goscript_dnsconfig.dnsConfig>(cfg)
		let lastErr: $.GoError = null! as $.GoError
		let serverOffset = (cfg !== null && (cfg as any).__isVarRef !== true && (cfg as any).__goValue === undefined ? ((cfg as any) as __goscript_dnsconfig.dnsConfig).serverOffset() : __goscript_dnsconfig.dnsConfig.prototype.serverOffset.call(cfg))
		let sLen = $.uint($.sliceLen((cfg$ as __goscript_dnsconfig.dnsConfig).servers), 32)

		let [n, err] = dnsmessage.NewName(name)
		if (err != null) {
			return [new dnsmessage.Parser(undefined, true), "", $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField17 = (__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>(__goscript_dnsclient_unix.errCannotMarshalDNSMessage).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_net.DNSError({Err: __goscriptLiteralField17, Name: name}) })()), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
		}
		let q = new dnsmessage.Question({Name: n, Type: qtype, Class: 1}, true)

		for (let i = 0; i < (cfg$ as __goscript_dnsconfig.dnsConfig).attempts; i++) {
			for (let j = 0; j < sLen; j = ((j + 1) >>> 0)) {
				let server = $.arrayIndex((cfg$ as __goscript_dnsconfig.dnsConfig).servers!, (((serverOffset + j) >>> 0)) % sLen)

				let __goscriptTuple48: any = await Resolver.prototype.exchange.call(r, ctx, server, (q).clone(), (cfg$ as __goscript_dnsconfig.dnsConfig).timeout, (cfg$ as __goscript_dnsconfig.dnsConfig).useTCP, (cfg$ as __goscript_dnsconfig.dnsConfig).trustAD)
				let p = $.varRef(__goscriptTuple48[0])
				let h = __goscriptTuple48[1]
				let __goscriptShadow41 = __goscriptTuple48[2]
				if (__goscriptShadow41 != null) {
					let dnsErr: __goscript_net.DNSError | $.VarRef<__goscript_net.DNSError> | null = await __goscript_net.newDNSError(__goscriptShadow41, name, server)

					{
						let [, ok] = $.typeAssertTuple<__goscript_net.OpError | $.VarRef<__goscript_net.OpError> | null>(__goscriptShadow41, /* @__PURE__ */ $.pointerType("net.OpError"))
						if (ok) {
							$.pointerValue<__goscript_net.DNSError>(dnsErr).IsTemporary = true
						}
					}
					lastErr = $.interfaceValue<$.GoError>(dnsErr, "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))
					continue
				}

				{
					let __goscriptShadow42 = __goscript_dnsclient_unix.checkHeader(p, (h).clone())
					if (__goscriptShadow42 != null) {
						if ($.comparableEqual(__goscriptShadow42, $.interfaceValue<$.GoError>(__goscript_net.errNoSuchHost, "*net.notFoundError", /* @__PURE__ */ $.pointerType("net.notFoundError")))) {

							return [(p.value).clone(), server, $.interfaceValue<$.GoError>(await __goscript_net.newDNSError($.interfaceValue<$.GoError>(__goscript_net.errNoSuchHost, "*net.notFoundError", /* @__PURE__ */ $.pointerType("net.notFoundError")), name, server), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
						}
						lastErr = $.interfaceValue<$.GoError>(await __goscript_net.newDNSError(__goscriptShadow42, name, server), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))
						continue
					}
				}

				{
					let __goscriptShadow43 = __goscript_dnsclient_unix.skipToAnswer(p, qtype)
					if (__goscriptShadow43 != null) {
						if ($.comparableEqual(__goscriptShadow43, $.interfaceValue<$.GoError>(__goscript_net.errNoSuchHost, "*net.notFoundError", /* @__PURE__ */ $.pointerType("net.notFoundError")))) {

							return [(p.value).clone(), server, $.interfaceValue<$.GoError>(await __goscript_net.newDNSError($.interfaceValue<$.GoError>(__goscript_net.errNoSuchHost, "*net.notFoundError", /* @__PURE__ */ $.pointerType("net.notFoundError")), name, server), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
						}
						lastErr = $.interfaceValue<$.GoError>(await __goscript_net.newDNSError(__goscriptShadow43, name, server), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))
						continue
					}
				}

				return [(p.value).clone(), server, null]
			}
		}
		return [new dnsmessage.Parser(undefined, true), "", lastErr]
	}

	static __typeInfo = $.registerStructType(
		"net.Resolver",
		() => new Resolver(),
		() => [$.methodSignature("LookupAddr", [["ctx", "context.Context"], ["addr", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), "error"], true), $.methodSignature("LookupCNAME", [["ctx", "context.Context"], ["host", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("LookupHost", [["ctx", "context.Context"], ["host", /* @__PURE__ */ $.basicType("string")]], [["addrs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["err", "error"]], true), $.methodSignature("LookupIP", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["host", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")), "error"], true), $.methodSignature("LookupIPAddr", [["ctx", "context.Context"], ["host", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType("net.IPAddr"), "error"], true), $.methodSignature("LookupMX", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("net.MX")), "error"], true), $.methodSignature("LookupNS", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("net.NS")), "error"], true), $.methodSignature("LookupNetIP", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["host", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType("netip.Addr"), "error"], true), $.methodSignature("LookupPort", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["service", /* @__PURE__ */ $.basicType("string")]], [["port", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("LookupSRV", [["ctx", "context.Context"], ["service", /* @__PURE__ */ $.basicType("string")], ["proto", /* @__PURE__ */ $.basicType("string")], ["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("net.SRV")), "error"], true), $.methodSignature("LookupTXT", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), "error"], true), $.methodSignature("dial", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["server", /* @__PURE__ */ $.basicType("string")]], ["net.Conn", "error"], true), $.methodSignature("exchange", [["ctx", "context.Context"], ["server", /* @__PURE__ */ $.basicType("string")], ["q", "dnsmessage.Question"], ["timeout", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["useTCP", /* @__PURE__ */ $.basicType("bool")], ["ad", /* @__PURE__ */ $.basicType("bool")]], ["dnsmessage.Parser", "dnsmessage.Header", "error"], true), $.methodSignature("getLookupGroup", [], [/* @__PURE__ */ $.pointerType("singleflight.Group")], true), $.methodSignature("goLookupCNAME", [["ctx", "context.Context"], ["host", /* @__PURE__ */ $.basicType("string")], ["order", /* @__PURE__ */ $.basicType("int", "net.hostLookupOrder")], ["conf", /* @__PURE__ */ $.pointerType("net.dnsConfig")]], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("goLookupHostOrder", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["order", /* @__PURE__ */ $.basicType("int", "net.hostLookupOrder")], ["conf", /* @__PURE__ */ $.pointerType("net.dnsConfig")]], [["addrs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["err", "error"]], true), $.methodSignature("goLookupIP", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["host", /* @__PURE__ */ $.basicType("string")], ["order", /* @__PURE__ */ $.basicType("int", "net.hostLookupOrder")], ["conf", /* @__PURE__ */ $.pointerType("net.dnsConfig")]], [["addrs", /* @__PURE__ */ $.sliceType("net.IPAddr")], ["err", "error"]], true), $.methodSignature("goLookupIPCNAMEOrder", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["name", /* @__PURE__ */ $.basicType("string")], ["order", /* @__PURE__ */ $.basicType("int", "net.hostLookupOrder")], ["conf", /* @__PURE__ */ $.pointerType("net.dnsConfig")]], [["addrs", /* @__PURE__ */ $.sliceType("net.IPAddr")], ["cname", "dnsmessage.Name"], ["err", "error"]], true), $.methodSignature("goLookupMX", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("net.MX")), "error"], true), $.methodSignature("goLookupNS", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("net.NS")), "error"], true), $.methodSignature("goLookupPTR", [["ctx", "context.Context"], ["addr", /* @__PURE__ */ $.basicType("string")], ["order", /* @__PURE__ */ $.basicType("int", "net.hostLookupOrder")], ["conf", /* @__PURE__ */ $.pointerType("net.dnsConfig")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), "error"], true), $.methodSignature("goLookupSRV", [["ctx", "context.Context"], ["service", /* @__PURE__ */ $.basicType("string")], ["proto", /* @__PURE__ */ $.basicType("string")], ["name", /* @__PURE__ */ $.basicType("string")]], [["target", /* @__PURE__ */ $.basicType("string")], ["srvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("net.SRV"))], ["err", "error"]], true), $.methodSignature("goLookupTXT", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), "error"], true), $.methodSignature("internetAddrList", [["ctx", "context.Context"], ["net", /* @__PURE__ */ $.basicType("string")], ["addr", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType("net.Addr", "net.addrList"), "error"], true), $.methodSignature("lookup", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["qtype", /* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")], ["conf", /* @__PURE__ */ $.pointerType("net.dnsConfig")]], ["dnsmessage.Parser", /* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("lookupAddr", [["ctx", "context.Context"], ["addr", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), "error"], true), $.methodSignature("lookupCNAME", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("lookupHost", [["ctx", "context.Context"], ["host", /* @__PURE__ */ $.basicType("string")]], [["addrs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["err", "error"]], true), $.methodSignature("lookupIP", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["host", /* @__PURE__ */ $.basicType("string")]], [["addrs", /* @__PURE__ */ $.sliceType("net.IPAddr")], ["err", "error"]], true), $.methodSignature("lookupIPAddr", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["host", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType("net.IPAddr"), "error"], true), $.methodSignature("lookupMX", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("net.MX")), "error"], true), $.methodSignature("lookupNS", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("net.NS")), "error"], true), $.methodSignature("lookupPort", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["service", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("lookupSRV", [["ctx", "context.Context"], ["service", /* @__PURE__ */ $.basicType("string")], ["proto", /* @__PURE__ */ $.basicType("string")], ["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("net.SRV")), "error"], true), $.methodSignature("lookupTXT", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), "error"], true), $.methodSignature("preferGo", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("resolveAddrList", [["ctx", "context.Context"], ["op", /* @__PURE__ */ $.basicType("string")], ["network", /* @__PURE__ */ $.basicType("string")], ["addr", /* @__PURE__ */ $.basicType("string")], ["hint", "net.Addr"]], [/* @__PURE__ */ $.sliceType("net.Addr", "net.addrList"), "error"], true), $.methodSignature("strictErrors", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("tryOneName", [["ctx", "context.Context"], ["cfg", /* @__PURE__ */ $.pointerType("net.dnsConfig")], ["name", /* @__PURE__ */ $.basicType("string")], ["qtype", /* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")]], ["dnsmessage.Parser", /* @__PURE__ */ $.basicType("string"), "error"], true)],
		Resolver,
		() => [/* @__PURE__ */ $.structField("PreferGo", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("StrictErrors", /* @__PURE__ */ $.basicType("bool"), [1], 1, true), /* @__PURE__ */ $.structField("Dial", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["net.Conn", "error"] } as $.FunctionTypeInfo), [2], 8, true), /* @__PURE__ */ $.structField("lookupGroup", "singleflight.Group", [3], 16, false, { pkgPath: "net" })]
	)
}

export class onlyValuesCtx {
	public get Context(): context.Context | null {
		return this._fields.Context
	}

	public set Context(value: context.Context | null) {
		this._fields.Context = value
	}

	public get lookupValues(): context.Context | null {
		return this._fields.lookupValues
	}

	public set lookupValues(value: context.Context | null) {
		this._fields.lookupValues = value
	}

	public _fields: {
		Context: context.Context | null
		lookupValues: context.Context | null
	}

	constructor(init?: Partial<{Context?: context.Context | null, lookupValues?: context.Context | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Context: init?.Context ?? (null! as context.Context | null),
			lookupValues: init?.lookupValues ?? (null! as context.Context | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): onlyValuesCtx {
		return new onlyValuesCtx(this, true)
	}

	public __goscriptAssign(source: onlyValuesCtx): void {
		const target = this._fields
		const values = source._fields
		target.Context = $.assignFieldValue(target.Context, values.Context, "context.Context")
		target.lookupValues = $.assignFieldValue(target.lookupValues, values.lookupValues, "context.Context")
	}

	public async Value(key: any): globalThis.Promise<any> {
		const ovc: onlyValuesCtx | $.VarRef<onlyValuesCtx> | null = this;
		const ovc$: onlyValuesCtx = ovc == null ? $.pointerTarget<onlyValuesCtx>(ovc) : (ovc as any).__isVarRef === true ? (ovc as any).value : (ovc as any).__goValue === undefined ? (ovc as any) : $.pointerTarget<onlyValuesCtx>(ovc)
		const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, any>([
			{
				id: 0,
				isSend: false,
				channel: ((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((ovc$ as onlyValuesCtx).lookupValues).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect1Result) => {
					return null
				}
			},
			{
				id: -1,
				isSend: false,
				channel: null,
				onSelected: async (__goscriptSelect1Result) => {
					return $.pointerValue<Exclude<context.Context, null>>((ovc$ as onlyValuesCtx).lookupValues).Value(key)
				}
			}
		], true)
		if (__goscriptSelect1HasReturn) {
			return __goscriptSelect1Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public Deadline(): any {
		return $.pointerValue<Exclude<context.Context | null, null>>(this.Context).Deadline()
	}

	public Done(): any {
		return $.pointerValue<Exclude<context.Context | null, null>>(this.Context).Done()
	}

	public async Err(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<context.Context | null, null>>(this.Context).Err()
	}

	static __typeInfo = $.registerStructType(
		"net.onlyValuesCtx",
		() => new onlyValuesCtx(),
		() => [$.methodSignature("Value", [["key", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("Deadline", [], [["deadline", "time.Time"], ["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("Done", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")]), $.methodSignature("Err", [], ["error"])],
		onlyValuesCtx,
		() => [/* @__PURE__ */ $.structField("Context", "context.Context", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("lookupValues", "context.Context", [1], 16, false, { pkgPath: "net" })]
	)
}

export const maxProtoLength: number = 25

export const maxPortBufSize: number = 25

export var protocols: globalThis.Map<string, number> | null

export function __goscript_init_protocols(): void {
	if (((protocols) as any) === undefined) {
		protocols = $.makeMap<string, number>([["icmp", 1], ["igmp", 2], ["tcp", 6], ["udp", 17], ["ipv6-icmp", 58]])
	}
}

export function __goscript_get_protocols(): globalThis.Map<string, number> | null {
	if (((protocols) as any) === undefined) {
		__goscript_init_protocols()
	}
	return protocols
}

export function __goscript_set_protocols(__goscriptValue: globalThis.Map<string, number> | null): void {
	protocols = __goscriptValue
}

export let services: globalThis.Map<string, globalThis.Map<string, number> | null> | null = $.makeMap<string, globalThis.Map<string, number> | null>([["udp", $.makeMap<string, number>([["domain", 53]])], ["tcp", $.makeMap<string, number>([["ftp", 21], ["ftps", 990], ["gopher", 70], ["http", 80], ["https", 443], ["imap2", 143], ["imap3", 220], ["imaps", 993], ["pop3", 110], ["pop3s", 995], ["smtp", 25], ["submissions", 465], ["ssh", 22], ["telnet", 23]])]])

export function __goscript_set_services(__goscriptValue: globalThis.Map<string, globalThis.Map<string, number> | null> | null): void {
	services = __goscriptValue
}

export let dnsWaitGroup: $.VarRef<sync.WaitGroup> = $.varRef($.markAsStructValue(new sync.WaitGroup()))

export function __goscript_set_dnsWaitGroup(__goscriptValue: sync.WaitGroup): void {
	$.assignStruct(dnsWaitGroup.value, __goscriptValue)
}

export function lookupProtocolMap(name: string): [number, $.GoError] {
	let lowerProtocol: Uint8Array = $.arrayValue(new Uint8Array(25))
	let n = $.copy($.goSlice(lowerProtocol, undefined, undefined), name)
	__goscript_parse.lowerASCIIBytes($.goSlice(lowerProtocol, undefined, n))
	let [proto, found] = $.mapGet<string, number, number>(__goscript_get_protocols(), $.bytesToString($.goSlice(lowerProtocol, undefined, n)), 0)
	if (!found || (n != $.stringLen(name))) {
		return [0, $.interfaceValue<$.GoError>(new __goscript_net.AddrError({Err: "unknown IP protocol specified", Addr: name}), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))]
	}
	return [proto, null]
}

export async function lookupPortMap(network: string, service: string): globalThis.Promise<[number, $.GoError]> {
	let port: number = 0
	let error: $.GoError = null! as $.GoError
	switch (network) {
		case "ip":
		{
			{
				let [p, err] = await lookupPortMapWithNetwork("tcp", "ip", service)
				if (err == null) {
					return [p, null]
				}
			}
			return lookupPortMapWithNetwork("udp", "ip", service)
			break
		}
		case "tcp":
		case "tcp4":
		case "tcp6":
		{
			return lookupPortMapWithNetwork("tcp", "tcp", service)
			break
		}
		case "udp":
		case "udp4":
		case "udp6":
		{
			return lookupPortMapWithNetwork("udp", "udp", service)
			break
		}
	}
	return [0, $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: "unknown network", Name: $.concatString(($.concatString(network, "/")), service)}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
}

export async function lookupPortMapWithNetwork(network: string, errNetwork: string, service: string): globalThis.Promise<[number, $.GoError]> {
	let port: number = 0
	let error: $.GoError = null! as $.GoError
	{
		let __goscriptTuple0: any = $.mapGet<string, globalThis.Map<string, number> | null, globalThis.Map<string, number> | null>(services, network, null)
		let m: globalThis.Map<string, number> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (ok) {
			let lowerService: Uint8Array = $.arrayValue(new Uint8Array(25))
			let n = $.copy($.goSlice(lowerService, undefined, undefined), service)
			__goscript_parse.lowerASCIIBytes($.goSlice(lowerService, undefined, n))
			{
				let [__goscriptShadow0, __goscriptShadow1] = $.mapGet<string, number, number>(m, $.bytesToString($.goSlice(lowerService, undefined, n)), 0)
				if (__goscriptShadow1 && (n == $.stringLen(service))) {
					return [__goscriptShadow0, null]
				}
			}
			return [0, $.interfaceValue<$.GoError>(await __goscript_net.newDNSError($.interfaceValue<$.GoError>(__goscript_net.errUnknownPort, "*net.notFoundError", /* @__PURE__ */ $.pointerType("net.notFoundError")), $.concatString(($.concatString(errNetwork, "/")), service), ""), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
		}
	}
	return [0, $.interfaceValue<$.GoError>(new __goscript_net.DNSError({Err: "unknown network", Name: $.concatString(($.concatString(errNetwork, "/")), service)}), "*net.DNSError", /* @__PURE__ */ $.pointerType("net.DNSError"))]
}

export function ipVersion(network: string): number {
	if ($.stringEqual(network, "")) {
		return 0
	}
	let n = $.indexString(network, $.stringLen(network) - 1)
	if ((n != 52) && (n != 54)) {
		n = 0
	}
	return n
}

export let DefaultResolver: Resolver | $.VarRef<Resolver> | null = new Resolver()

export function __goscript_set_DefaultResolver(__goscriptValue: Resolver | $.VarRef<Resolver> | null): void {
	DefaultResolver = __goscriptValue
}

export async function LookupHost(host: string): globalThis.Promise<[$.Slice<string>, $.GoError]> {
	let addrs: $.Slice<string> = null! as $.Slice<string>
	let err: $.GoError = null! as $.GoError
	return (DefaultResolver !== null && (DefaultResolver as any).__isVarRef !== true && (DefaultResolver as any).__goValue === undefined ? ((DefaultResolver as any) as Resolver).LookupHost(context.Background(), host) : Resolver.prototype.LookupHost.call(DefaultResolver, context.Background(), host))
}

export async function LookupIP(host: string): globalThis.Promise<[$.Slice<__goscript_ip.IP>, $.GoError]> {
	let __goscriptTuple49: any = await (DefaultResolver !== null && (DefaultResolver as any).__isVarRef !== true && (DefaultResolver as any).__goValue === undefined ? ((DefaultResolver as any) as Resolver).LookupIPAddr(context.Background(), host) : Resolver.prototype.LookupIPAddr.call(DefaultResolver, context.Background(), host))
	let addrs: $.Slice<__goscript_iprawsock.IPAddr> = __goscriptTuple49[0]
	let err = __goscriptTuple49[1]
	if (err != null) {
		return [null, err]
	}
	let ips: $.Slice<__goscript_ip.IP> = $.makeSlice<__goscript_ip.IP>($.sliceLen(addrs))
	for (let __goscriptRangeTarget15 = addrs, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), __goscriptSliceWindow0 = $.sliceRange(ips), i = 0; i < __goscriptRangeWindow15.length; i++) {
		let ia = ((__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + i] as __goscript_iprawsock.IPAddr)).clone();
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = (ia.IP as __goscript_ip.IP)
	}
	return [ips, null]
}

export function withUnexpiredValuesPreserved(lookupCtx: context.Context | null): context.Context | null {
	return $.interfaceValue<context.Context | null>((() => { const __goscriptLiteralField18 = context.Background(); return new onlyValuesCtx({Context: __goscriptLiteralField18, lookupValues: lookupCtx}) })(), "*net.onlyValuesCtx", /* @__PURE__ */ $.pointerType("net.onlyValuesCtx"))
}

export function lookupIPReturn(addrsi: any, err: $.GoError, shared: boolean): [$.Slice<__goscript_iprawsock.IPAddr>, $.GoError] {
	if (err != null) {
		return [null, err]
	}
	let addrs: $.Slice<__goscript_iprawsock.IPAddr> = $.mustTypeAssert<$.Slice<__goscript_iprawsock.IPAddr>>(addrsi, /* @__PURE__ */ $.sliceType("net.IPAddr"))
	if (shared) {
		let clone: $.Slice<__goscript_iprawsock.IPAddr> = $.makeSlice<__goscript_iprawsock.IPAddr>($.sliceLen(addrs), undefined, undefined, () => new __goscript_iprawsock.IPAddr(undefined, true))
		$.copy(clone, addrs)
		addrs = clone
	}
	return [addrs, null]
}

export function ipAddrsEface(addrs: $.Slice<__goscript_iprawsock.IPAddr>): $.Slice<any> {
	let s: $.Slice<any> = $.makeSlice<any>($.sliceLen(addrs))
	for (let __goscriptRangeTarget16 = addrs, __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), __goscriptSliceWindow1 = $.sliceRange(s), i = 0; i < __goscriptRangeWindow16.length; i++) {
		let v = ((__goscriptRangeWindow16.backing[__goscriptRangeWindow16.offset + i] as __goscript_iprawsock.IPAddr)).clone();
		;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = $.interfaceValue((v).clone(), "net.IPAddr", "net.IPAddr")
	}
	return s
}

export async function LookupPort(network: string, service: string): globalThis.Promise<[number, $.GoError]> {
	let port: number = 0
	let err: $.GoError = null! as $.GoError
	return (DefaultResolver !== null && (DefaultResolver as any).__isVarRef !== true && (DefaultResolver as any).__goValue === undefined ? ((DefaultResolver as any) as Resolver).LookupPort(context.Background(), network, service) : Resolver.prototype.LookupPort.call(DefaultResolver, context.Background(), network, service))
}

export async function LookupCNAME(host: string): globalThis.Promise<[string, $.GoError]> {
	let cname: string = ""
	let err: $.GoError = null! as $.GoError
	return (DefaultResolver !== null && (DefaultResolver as any).__isVarRef !== true && (DefaultResolver as any).__goValue === undefined ? ((DefaultResolver as any) as Resolver).LookupCNAME(context.Background(), host) : Resolver.prototype.LookupCNAME.call(DefaultResolver, context.Background(), host))
}

export async function LookupSRV(service: string, proto: string, name: string): globalThis.Promise<[string, $.Slice<__goscript_dnsclient.SRV | $.VarRef<__goscript_dnsclient.SRV> | null>, $.GoError]> {
	let cname: string = ""
	let addrs: $.Slice<__goscript_dnsclient.SRV | $.VarRef<__goscript_dnsclient.SRV> | null> = null! as $.Slice<__goscript_dnsclient.SRV | $.VarRef<__goscript_dnsclient.SRV> | null>
	let err: $.GoError = null! as $.GoError
	return (DefaultResolver !== null && (DefaultResolver as any).__isVarRef !== true && (DefaultResolver as any).__goValue === undefined ? ((DefaultResolver as any) as Resolver).LookupSRV(context.Background(), service, proto, name) : Resolver.prototype.LookupSRV.call(DefaultResolver, context.Background(), service, proto, name))
}

export async function LookupMX(name: string): globalThis.Promise<[$.Slice<__goscript_dnsclient.MX | $.VarRef<__goscript_dnsclient.MX> | null>, $.GoError]> {
	return (DefaultResolver !== null && (DefaultResolver as any).__isVarRef !== true && (DefaultResolver as any).__goValue === undefined ? ((DefaultResolver as any) as Resolver).LookupMX(context.Background(), name) : Resolver.prototype.LookupMX.call(DefaultResolver, context.Background(), name))
}

export async function LookupNS(name: string): globalThis.Promise<[$.Slice<__goscript_dnsclient.NS | $.VarRef<__goscript_dnsclient.NS> | null>, $.GoError]> {
	return (DefaultResolver !== null && (DefaultResolver as any).__isVarRef !== true && (DefaultResolver as any).__goValue === undefined ? ((DefaultResolver as any) as Resolver).LookupNS(context.Background(), name) : Resolver.prototype.LookupNS.call(DefaultResolver, context.Background(), name))
}

export async function LookupTXT(name: string): globalThis.Promise<[$.Slice<string>, $.GoError]> {
	return (DefaultResolver !== null && (DefaultResolver as any).__isVarRef !== true && (DefaultResolver as any).__goValue === undefined ? ((DefaultResolver as any) as Resolver).lookupTXT(context.Background(), name) : Resolver.prototype.lookupTXT.call(DefaultResolver, context.Background(), name))
}

export async function LookupAddr(addr: string): globalThis.Promise<[$.Slice<string>, $.GoError]> {
	let names: $.Slice<string> = null! as $.Slice<string>
	let err: $.GoError = null! as $.GoError
	return (DefaultResolver !== null && (DefaultResolver as any).__isVarRef !== true && (DefaultResolver as any).__goValue === undefined ? ((DefaultResolver as any) as Resolver).LookupAddr(context.Background(), addr) : Resolver.prototype.LookupAddr.call(DefaultResolver, context.Background(), addr))
}

export let errMalformedDNSRecordsDetail: string = "DNS response contained records which contain invalid names"

export function __goscript_set_errMalformedDNSRecordsDetail(__goscriptValue: string): void {
	errMalformedDNSRecordsDetail = __goscriptValue
}

export function parseCNAMEFromResources(resources: $.Slice<dnsmessage.Resource>): [string, $.GoError] {
	if ($.sliceLen(resources) == 0) {
		return ["", errors.New("no CNAME record received")]
	}
	let __goscriptTuple50: any = $.typeAssertTuple<dnsmessage.CNAMEResource | $.VarRef<dnsmessage.CNAMEResource> | null>($.arrayIndex(resources!, 0).Body, /* @__PURE__ */ $.pointerType("dnsmessage.CNAMEResource"))
	let c: dnsmessage.CNAMEResource | $.VarRef<dnsmessage.CNAMEResource> | null = __goscriptTuple50[0]
	let ok = __goscriptTuple50[1]
	if (!ok) {
		return ["", errors.New("could not parse CNAME record")]
	}
	return [$.pointerValue<dnsmessage.CNAMEResource>(c).CNAME.String(), null]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.pointerType("net.DNSError"), zero: () => null, methods: {Error: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Error(...$.stripGenericTypeArgs(args)), Temporary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Temporary(...$.stripGenericTypeArgs(args)), Timeout: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Timeout(...$.stripGenericTypeArgs(args)), Unwrap: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Unwrap(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptAwait: any
