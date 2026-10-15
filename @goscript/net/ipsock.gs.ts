// Generated file based on ipsock.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as bytealg from "@goscript/internal/bytealg/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sync from "@goscript/sync/index.js"

import "@goscript/unsafe/index.js"

import * as poll from "@goscript/internal/poll/index.js"

import * as netip from "@goscript/net/netip/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as singleflight from "@goscript/internal/singleflight/index.js"

import * as time from "@goscript/time/index.js"

import type * as dnsmessage from "@goscript/vendor/golang.org/x/net/dns/dnsmessage/index.js"

import type * as atomic from "@goscript/sync/atomic/index.js"

import type * as __goscript_dial from "./dial.gs.ts"

import type * as __goscript_dnsclient from "./dnsclient.gs.ts"

import type * as __goscript_dnsclient_unix from "./dnsclient_unix.gs.ts"

import type * as __goscript_dnsconfig from "./dnsconfig.gs.ts"

import * as __goscript_ip from "./ip.gs.ts"

import * as __goscript_iprawsock from "./iprawsock.gs.ts"

import * as __goscript_iprawsock_posix from "./iprawsock_posix.gs.ts"

import * as __goscript_ipsock_posix from "./ipsock_posix.gs.ts"

import * as __goscript_lookup from "./lookup.gs.ts"

import type * as __goscript_lookup_unix from "./lookup_unix.gs.ts"

import * as __goscript_net from "./net.gs.ts"

import * as __goscript_net_fake from "./net_fake.gs.ts"

import type * as __goscript_sockaddr_posix from "./sockaddr_posix.gs.ts"

import * as __goscript_tcpsock from "./tcpsock.gs.ts"

import * as __goscript_tcpsock_posix from "./tcpsock_posix.gs.ts"

import * as __goscript_udpsock from "./udpsock.gs.ts"

import * as __goscript_udpsock_posix from "./udpsock_posix.gs.ts"
import "@goscript/context/index.js"
import "@goscript/internal/bytealg/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sync/index.js"
import "@goscript/internal/poll/index.js"
import "@goscript/net/netip/index.js"
import "@goscript/syscall/index.js"
import "@goscript/internal/singleflight/index.js"
import "@goscript/time/index.js"
import "./ip.gs.ts"
import "./iprawsock.gs.ts"
import "./iprawsock_posix.gs.ts"
import "./ipsock_posix.gs.ts"
import "./lookup.gs.ts"
import "./net.gs.ts"
import "./net_fake.gs.ts"
import "./tcpsock.gs.ts"
import "./tcpsock_posix.gs.ts"
import "./udpsock.gs.ts"
import "./udpsock_posix.gs.ts"

export type addrList = $.Slice<__goscript_net.Addr | null>

$.registerNamedType("net.addrList", /* @__PURE__ */ $.sliceType("net.Addr"));

$.registerNamedValueType(
	"net.addrList",
	{first: (receiver: any, ...args: any[]) => (addrList_first as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), forResolve: (receiver: any, ...args: any[]) => (addrList_forResolve as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), partition: (receiver: any, ...args: any[]) => (addrList_partition as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("first", [["strategy", ({ kind: $.TypeKind.Function, params: ["net.Addr"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], ["net.Addr"]), $.methodSignature("forResolve", [["network", /* @__PURE__ */ $.basicType("string")], ["addr", /* @__PURE__ */ $.basicType("string")]], ["net.Addr"]), $.methodSignature("partition", [["strategy", ({ kind: $.TypeKind.Function, params: ["net.Addr"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [["primaries", /* @__PURE__ */ $.sliceType("net.Addr", "net.addrList")], ["fallbacks", /* @__PURE__ */ $.sliceType("net.Addr", "net.addrList")]])]
);

$.registerNamedValueType(
	"*net.addrList",
	{first: (receiver: any, ...args: any[]) => (addrList_first as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), forResolve: (receiver: any, ...args: any[]) => (addrList_forResolve as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), partition: (receiver: any, ...args: any[]) => (addrList_partition as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("first", [["strategy", ({ kind: $.TypeKind.Function, params: ["net.Addr"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], ["net.Addr"]), $.methodSignature("forResolve", [["network", /* @__PURE__ */ $.basicType("string")], ["addr", /* @__PURE__ */ $.basicType("string")]], ["net.Addr"]), $.methodSignature("partition", [["strategy", ({ kind: $.TypeKind.Function, params: ["net.Addr"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [["primaries", /* @__PURE__ */ $.sliceType("net.Addr", "net.addrList")], ["fallbacks", /* @__PURE__ */ $.sliceType("net.Addr", "net.addrList")]])]
);

export class ipStackCapabilities {
	public get Once(): sync.Once {
		return this._fields.Once
	}

	public set Once(value: sync.Once) {
		this._fields.Once = value
	}

	public get ipv4Enabled(): boolean {
		return this._fields.ipv4Enabled
	}

	public set ipv4Enabled(value: boolean) {
		this._fields.ipv4Enabled = value
	}

	public get ipv6Enabled(): boolean {
		return this._fields.ipv6Enabled
	}

	public set ipv6Enabled(value: boolean) {
		this._fields.ipv6Enabled = value
	}

	public get ipv4MappedIPv6Enabled(): boolean {
		return this._fields.ipv4MappedIPv6Enabled
	}

	public set ipv4MappedIPv6Enabled(value: boolean) {
		this._fields.ipv4MappedIPv6Enabled = value
	}

	public _fields: {
		Once: sync.Once
		ipv4Enabled: boolean
		ipv6Enabled: boolean
		ipv4MappedIPv6Enabled: boolean
	}

	constructor(init?: Partial<{Once?: sync.Once, ipv4Enabled?: boolean, ipv6Enabled?: boolean, ipv4MappedIPv6Enabled?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Once: init?.Once ? $.markAsStructValue($.cloneStructValue(init.Once)) : $.markAsStructValue(new sync.Once()),
			ipv4Enabled: init?.ipv4Enabled ?? (false as boolean),
			ipv6Enabled: init?.ipv6Enabled ?? (false as boolean),
			ipv4MappedIPv6Enabled: init?.ipv4MappedIPv6Enabled ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ipStackCapabilities {
		return new ipStackCapabilities(this, true)
	}

	public __goscriptAssign(source: ipStackCapabilities): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Once, values.Once)
		target.ipv4Enabled = values.ipv4Enabled
		target.ipv6Enabled = values.ipv6Enabled
		target.ipv4MappedIPv6Enabled = values.ipv4MappedIPv6Enabled
	}

	public async probe(): globalThis.Promise<void> {
		let p: ipStackCapabilities | $.VarRef<ipStackCapabilities> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const p$: ipStackCapabilities = p == null ? $.pointerTarget<ipStackCapabilities>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<ipStackCapabilities>(p)
		switch ((runtime.GOOS as string)) {
			case "js":
			case "wasip1":
			{
				;(p$ as ipStackCapabilities).ipv4Enabled = true;
				;(p$ as ipStackCapabilities).ipv6Enabled = true;
				;(p$ as ipStackCapabilities).ipv4MappedIPv6Enabled = true
				return
				break
			}
		}

		let [s, err] = __goscript_net_fake.sysSocket(2, 1, 6)
		{
			let __goscriptSwitch0 = err
			switch ((true as boolean)) {
				case $.comparableEqual(__goscriptSwitch0, $.namedValueInterfaceValue<$.GoError>(syscall.EAFNOSUPPORT, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))):
				case $.comparableEqual(__goscriptSwitch0, $.namedValueInterfaceValue<$.GoError>(syscall.EPROTONOSUPPORT, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))):
				{
					break
				}
				case $.comparableEqual(__goscriptSwitch0, null):
				{
					void (__goscriptAwait = poll.CloseFunc!(s), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
					;(p$ as ipStackCapabilities).ipv4Enabled = true
					break
				}
			}
		}
		let probes: $.Slice<{"laddr": __goscript_tcpsock.TCPAddr, "value": number}> = $.arrayToSlice<{"laddr": __goscript_tcpsock.TCPAddr, "value": number}>([$.anonymousStructValue({laddr: (() => { const __goscriptLiteralField0 = (__goscript_ip.ParseIP("::1") as __goscript_ip.IP); return new __goscript_tcpsock.TCPAddr({IP: __goscriptLiteralField0}, true) })(), value: 1}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("laddr", "net.TCPAddr", [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("value", /* @__PURE__ */ $.basicType("int"), [1], 48, false, { pkgPath: "net" })] }), $.anonymousStructValue({laddr: (() => { const __goscriptLiteralField1 = (__goscript_ip.IPv4(127, 0, 0, 1) as __goscript_ip.IP); return new __goscript_tcpsock.TCPAddr({IP: __goscriptLiteralField1}, true) })(), value: 0}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("laddr", "net.TCPAddr", [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("value", /* @__PURE__ */ $.basicType("int"), [1], 48, false, { pkgPath: "net" })] })])
		switch ((runtime.GOOS as string)) {
			case "dragonfly":
			case "openbsd":
			{
				probes = $.goSlice(probes, undefined, 1)
				break
			}
		}
		for (let __goscriptRangeTarget0 = probes, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let [__goscriptShadow0, __goscriptShadow1] = __goscript_net_fake.sysSocket(3, 1, 6)
			if (__goscriptShadow1 != null) {
				continue
			}
			const __goscriptDeferCallee0 = poll.CloseFunc
			const __goscriptDeferArg0 = __goscriptShadow0
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(__goscriptDeferArg0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			syscall.SetsockoptInt(__goscriptShadow0, 41, 1, $.arrayIndex(probes!, i).value)
			let __goscriptTuple0: any = await $.arrayIndex(probes!, i).laddr.sockaddr(3)
			let sa = __goscriptTuple0[0]
			__goscriptShadow1 = __goscriptTuple0[1]
			if (__goscriptShadow1 != null) {
				continue
			}
			{
				let __goscriptShadow2 = syscall.Bind(__goscriptShadow0, sa)
				if (__goscriptShadow2 != null) {

					// isNotIPv4 reports whether addr does not contain an IPv4 address.
					if ((!$.comparableEqual(__goscriptShadow2, $.namedValueInterfaceValue<$.GoError>(syscall.EPERM, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno")))) && (!$.comparableEqual(__goscriptShadow2, $.namedValueInterfaceValue<$.GoError>(syscall.EACCES, "syscall.Errno", {"Error": syscall.Errno_Error}, /* @__PURE__ */ $.basicType("uintptr", "syscall.Errno"))))) {
						continue
					}
				}
			}
			if (i == 0) {
				;(p$ as ipStackCapabilities).ipv6Enabled = true
			} else {
				;(p$ as ipStackCapabilities).ipv4MappedIPv6Enabled = true
			}
		}
	}

	public Do(f: any): any {
		return $.pointerValue<sync.Once>(this.Once).Do(f)
	}

	static __typeInfo = $.registerStructType(
		"net.ipStackCapabilities",
		() => new ipStackCapabilities(),
		() => [$.methodSignature("probe", [], [], true), $.methodSignature("Do", [["f", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], [], true)],
		ipStackCapabilities,
		() => [/* @__PURE__ */ $.structField("Once", "sync.Once", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("ipv4Enabled", /* @__PURE__ */ $.basicType("bool"), [1], 12, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("ipv6Enabled", /* @__PURE__ */ $.basicType("bool"), [2], 13, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("ipv4MappedIPv6Enabled", /* @__PURE__ */ $.basicType("bool"), [3], 14, false, { pkgPath: "net" })]
	)
}

export let ipStackCaps: $.VarRef<ipStackCapabilities> = $.varRef(new ipStackCapabilities(undefined, true))

export function __goscript_set_ipStackCaps(__goscriptValue: ipStackCapabilities): void {
	$.assignStruct(ipStackCaps.value, __goscriptValue)
}

export async function supportsIPv4(): globalThis.Promise<boolean> {
	await ipStackCaps.value.Once.Do($.functionValue(((__receiver) => () => __receiver.probe())(ipStackCaps.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "net.(*ipStackCapabilities).probe-fm"))
	return ipStackCaps.value.ipv4Enabled
}

export async function supportsIPv6(): globalThis.Promise<boolean> {
	await ipStackCaps.value.Once.Do($.functionValue(((__receiver) => () => __receiver.probe())(ipStackCaps.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "net.(*ipStackCapabilities).probe-fm"))
	return ipStackCaps.value.ipv6Enabled
}

export async function supportsIPv4map(): globalThis.Promise<boolean> {
	// Some operating systems provide no support for mapping IPv4
	// addresses to IPv6, and a runtime check is unnecessary.
	switch ((runtime.GOOS as string)) {
		case "dragonfly":
		case "openbsd":
		{
			return false
			break
		}
	}

	await ipStackCaps.value.Once.Do($.functionValue(((__receiver) => () => __receiver.probe())(ipStackCaps.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "net.(*ipStackCapabilities).probe-fm"))
	return ipStackCaps.value.ipv4MappedIPv6Enabled
}

export function isIPv4(addr: __goscript_net.Addr | null): boolean {
	{
		const __goscriptTypeSwitchValue = addr
		switch (true) {
			case $.typeAssert<__goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.TCPAddr")).ok:
				{
					let addr: __goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null = $.typeAssert<__goscript_tcpsock.TCPAddr | $.VarRef<__goscript_tcpsock.TCPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.TCPAddr")).value
					return __goscript_ip.IP_To4($.pointerValue<__goscript_tcpsock.TCPAddr>(addr).IP) != null
				}
				break
			case $.typeAssert<__goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UDPAddr")).ok:
				{
					let addr: __goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null = $.typeAssert<__goscript_udpsock.UDPAddr | $.VarRef<__goscript_udpsock.UDPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UDPAddr")).value
					return __goscript_ip.IP_To4($.pointerValue<__goscript_udpsock.UDPAddr>(addr).IP) != null
				}
				break
			case $.typeAssert<__goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.IPAddr")).ok:
				{
					let addr: __goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null = $.typeAssert<__goscript_iprawsock.IPAddr | $.VarRef<__goscript_iprawsock.IPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.IPAddr")).value
					return __goscript_ip.IP_To4($.pointerValue<__goscript_iprawsock.IPAddr>(addr).IP) != null
				}
				break
		}
	}
	return false
}

export function isNotIPv4(addr: __goscript_net.Addr | null): boolean {
	return !isIPv4(addr)
}

export async function addrList_forResolve(addrs: addrList, network: string, addr: string): globalThis.Promise<__goscript_net.Addr | null> {
	let want6: boolean = false
	switch (network) {
		case "ip":
		{
			want6 = bytealg.CountString(addr, 58) > 0
			break
		}
		case "tcp":
		case "udp":
		{
			want6 = bytealg.CountString(addr, 91) > 0
			break
		}
	}
	if (want6) {
		return addrList_first(addrs, isNotIPv4)
	}
	return addrList_first(addrs, isIPv4)
}

export async function addrList_first(addrs: addrList, strategy: ((_p0: __goscript_net.Addr | null) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<__goscript_net.Addr | null> {
	for (let __goscriptRangeTarget1 = addrs, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let addr = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_net.Addr | null)
		if ((__goscriptAwait = strategy!(addr), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return addr
		}
	}
	return $.arrayIndex(addrs!, 0)
}

export async function addrList_partition(addrs: addrList, strategy: ((_p0: __goscript_net.Addr | null) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<[addrList, addrList]> {
	let primaries: addrList = null! as addrList
	let fallbacks: addrList = null! as addrList
	let primaryLabel: boolean = false
	for (let __goscriptRangeTarget2 = addrs, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
		let addr = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as __goscript_net.Addr | null)
		let label = (__goscriptAwait = strategy!(addr), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((i == 0) || (label == primaryLabel)) {
			primaryLabel = label
			primaries = ($.appendOne((primaries as addrList), addr, $.appendZeros.nil) as addrList)
		} else {
			fallbacks = ($.appendOne((fallbacks as addrList), addr, $.appendZeros.nil) as addrList)
		}
	}
	return [primaries, fallbacks]
}

export async function filterAddrList(filter: ((_p0: __goscript_iprawsock.IPAddr) => boolean | globalThis.Promise<boolean>) | null, ips: $.Slice<__goscript_iprawsock.IPAddr>, inetaddr: ((_p0: __goscript_iprawsock.IPAddr) => __goscript_net.Addr | null | globalThis.Promise<__goscript_net.Addr | null>) | null, originalAddr: string): globalThis.Promise<[addrList, $.GoError]> {
	let addrs: addrList = null! as addrList
	for (let __goscriptRangeTarget3 = ips, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let ip = ((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_iprawsock.IPAddr)).clone()
		if ((filter == null) || (__goscriptAwait = filter!((ip).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			addrs = ($.appendOne((addrs as addrList), (__goscriptAwait = inetaddr!((ip).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.appendZeros.nil) as addrList)
		}
	}
	if ($.sliceLen((addrs as addrList)) == 0) {
		return [(null as addrList), $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField2 = (__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>(__goscript_net.errNoSuitableAddress).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_net.AddrError({Err: __goscriptLiteralField2, Addr: originalAddr}) })()), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))]
	}
	return [(addrs as addrList), null]
}

export function ipv4only(addr: __goscript_iprawsock.IPAddr): boolean {
	return __goscript_ip.IP_To4(addr.IP) != null
}

export function ipv6only(addr: __goscript_iprawsock.IPAddr): boolean {
	return ($.sliceLen((addr.IP as __goscript_ip.IP)) == 16) && (__goscript_ip.IP_To4(addr.IP) == null)
}

export async function SplitHostPort(hostport: string): globalThis.Promise<[string, string, $.GoError]> {
	let host: string = ""
	let port: string = ""
	let err: $.GoError = null! as $.GoError
	const missingPort: string = "missing port in address"
	const tooManyColons: string = "too many colons in address"
	let addrErr: ((addr: string, why: string) => [string, string, $.GoError] | globalThis.Promise<[string, string, $.GoError]>) | null = $.functionValue((addr: string, why: string): [string, string, $.GoError] => {
		let host: string = ""
		let port: string = ""
		let err: $.GoError = null! as $.GoError
		return ["", "", $.interfaceValue<$.GoError>(new __goscript_net.AddrError({Err: why, Addr: addr}), "*net.AddrError", /* @__PURE__ */ $.pointerType("net.AddrError"))]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), "error"] } as $.FunctionTypeInfo))
	let j = 0
	let k = 0

	// The port starts after the last colon.
	let i = bytealg.LastIndexByteString(hostport, 58)
	if (i < 0) {
		return addrErr!(hostport, "missing port in address")
	}

	if ($.indexString(hostport, 0) == 91) {
		// Expect the first ']' just before the last ':'.
		let end = bytealg.IndexByteString(hostport, 93)
		if (end < 0) {
			return addrErr!(hostport, "missing ']' in address")
		}
		switch (end + 1) {
			case $.stringLen(hostport):
			{
				return addrErr!(hostport, "missing port in address")
				break
			}
			case i:
			{
				break
			}
			default:
			{
				if ($.indexString(hostport, end + 1) == 58) {
					return addrErr!(hostport, "too many colons in address")
				}
				return addrErr!(hostport, "missing port in address")
				break
			}
		}
		host = $.sliceStringOrBytes(hostport, 1, end)
		let __goscriptAssign0_0: number = 1
		let __goscriptAssign0_1: number = end + 1
		j = __goscriptAssign0_0
		k = __goscriptAssign0_1
	} else {
		host = $.sliceStringOrBytes(hostport, undefined, i)
		if (bytealg.IndexByteString(host, 58) >= 0) {
			return addrErr!(hostport, "too many colons in address")
		}
	}
	if (bytealg.IndexByteString($.sliceStringOrBytes(hostport, j, undefined), 91) >= 0) {
		return addrErr!(hostport, "unexpected '[' in address")
	}
	if (bytealg.IndexByteString($.sliceStringOrBytes(hostport, k, undefined), 93) >= 0) {
		return addrErr!(hostport, "unexpected ']' in address")
	}

	port = $.sliceStringOrBytes(hostport, i + 1, undefined)
	return [host, port, null]
}

export function splitHostZone(s: string): [string, string] {
	let host: string = ""
	let zone: string = ""
	// The IPv6 scoped addressing zone identifier starts after the
	// last percent sign.
	{
		let i = bytealg.LastIndexByteString(s, 37)
		if (i > 0) {
			let __goscriptAssign1_0: string = $.sliceStringOrBytes(s, undefined, i)
			let __goscriptAssign1_1: string = $.sliceStringOrBytes(s, i + 1, undefined)
			host = __goscriptAssign1_0
			zone = __goscriptAssign1_1
		} else {
			host = s
		}
	}
	return [host, zone]
}

export function JoinHostPort(host: string, port: string): string {
	// We assume that host is a literal IPv6 address if host has
	// colons.
	if (bytealg.IndexByteString(host, 58) >= 0) {
		return $.concatString(($.concatString(($.concatString("[", host)), "]:")), port)
	}
	return $.concatString(($.concatString(host, ":")), port)
}

export function loopbackIP(net: string): __goscript_ip.IP {
	if ((!$.stringEqual(net, "")) && ($.indexString(net, $.stringLen(net) - 1) == 54)) {
		return (__goscript_ip.IPv6loopback as __goscript_ip.IP)
	}
	return (new Uint8Array([127, 0, 0, 1]) as $.Slice<number> as __goscript_ip.IP)
}

var __goscriptAwait: any
