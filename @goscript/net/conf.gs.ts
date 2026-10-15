// Generated file based on conf.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as bytealg from "@goscript/internal/bytealg/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

import * as stringslite from "@goscript/internal/stringslite/index.js"

import * as fs from "@goscript/io/fs/index.js"

import * as os from "@goscript/os/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sync from "@goscript/sync/index.js"

import type * as context from "@goscript/context/index.js"

import * as singleflight from "@goscript/internal/singleflight/index.js"

import type * as netip from "@goscript/net/netip/index.js"

import type * as syscall from "@goscript/syscall/index.js"

import * as time from "@goscript/time/index.js"

import type * as dnsmessage from "@goscript/vendor/golang.org/x/net/dns/dnsmessage/index.js"

import * as __goscript_cgo_stub from "./cgo_stub.gs.ts"

import type * as __goscript_dial from "./dial.gs.ts"

import type * as __goscript_dnsclient from "./dnsclient.gs.ts"

import * as __goscript_dnsclient_unix from "./dnsclient_unix.gs.ts"

import * as __goscript_dnsconfig from "./dnsconfig.gs.ts"

import * as __goscript_ip from "./ip.gs.ts"

import type * as __goscript_iprawsock from "./iprawsock.gs.ts"

import type * as __goscript_iprawsock_posix from "./iprawsock_posix.gs.ts"

import type * as __goscript_ipsock from "./ipsock.gs.ts"

import * as __goscript_lookup from "./lookup.gs.ts"

import type * as __goscript_lookup_unix from "./lookup_unix.gs.ts"

import type * as __goscript_net from "./net.gs.ts"

import * as __goscript_netcgo_off from "./netcgo_off.gs.ts"

import * as __goscript_netgo_off from "./netgo_off.gs.ts"

import * as __goscript_nss from "./nss.gs.ts"

import * as __goscript_parse from "./parse.gs.ts"

import type * as __goscript_sockaddr_posix from "./sockaddr_posix.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/internal/bytealg/index.js"
import "@goscript/internal/godebug/index.js"
import "@goscript/internal/stringslite/index.js"
import "@goscript/io/fs/index.js"
import "@goscript/os/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sync/index.js"
import "@goscript/internal/singleflight/index.js"
import "@goscript/time/index.js"
import "./cgo_stub.gs.ts"
import "./dnsclient_unix.gs.ts"
import "./dnsconfig.gs.ts"
import "./ip.gs.ts"
import "./lookup.gs.ts"
import "./netcgo_off.gs.ts"
import "./netgo_off.gs.ts"
import "./nss.gs.ts"
import "./parse.gs.ts"

export type mdnsTest = number

export class conf {
	public get netGo(): boolean {
		return this._fields.netGo
	}

	public set netGo(value: boolean) {
		this._fields.netGo = value
	}

	public get netCgo(): boolean {
		return this._fields.netCgo
	}

	public set netCgo(value: boolean) {
		this._fields.netCgo = value
	}

	public get dnsDebugLevel(): number {
		return this._fields.dnsDebugLevel
	}

	public set dnsDebugLevel(value: number) {
		this._fields.dnsDebugLevel = value
	}

	public get preferCgo(): boolean {
		return this._fields.preferCgo
	}

	public set preferCgo(value: boolean) {
		this._fields.preferCgo = value
	}

	public get goos(): string {
		return this._fields.goos
	}

	public set goos(value: string) {
		this._fields.goos = value
	}

	public get mdnsTest(): mdnsTest {
		return this._fields.mdnsTest
	}

	public set mdnsTest(value: mdnsTest) {
		this._fields.mdnsTest = value
	}

	public _fields: {
		netGo: boolean
		netCgo: boolean
		dnsDebugLevel: number
		preferCgo: boolean
		goos: string
		mdnsTest: mdnsTest
	}

	constructor(init?: Partial<{netGo?: boolean, netCgo?: boolean, dnsDebugLevel?: number, preferCgo?: boolean, goos?: string, mdnsTest?: mdnsTest}>, __goscriptValue?: boolean) {
		this._fields = {
			netGo: init?.netGo ?? (false as boolean),
			netCgo: init?.netCgo ?? (false as boolean),
			dnsDebugLevel: init?.dnsDebugLevel ?? (0 as number),
			preferCgo: init?.preferCgo ?? (false as boolean),
			goos: init?.goos ?? ("" as string),
			mdnsTest: init?.mdnsTest ?? (0 as mdnsTest)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): conf {
		return new conf(this, true)
	}

	public __goscriptAssign(source: conf): void {
		const target = this._fields
		const values = source._fields
		target.netGo = values.netGo
		target.netCgo = values.netCgo
		target.dnsDebugLevel = values.dnsDebugLevel
		target.preferCgo = values.preferCgo
		target.goos = values.goos
		target.mdnsTest = values.mdnsTest
	}

	public async addrLookupOrder(r: __goscript_lookup.Resolver | $.VarRef<__goscript_lookup.Resolver> | null, addr: string): globalThis.Promise<[__goscript_dnsclient_unix.hostLookupOrder, __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null]> {
		const c: conf | $.VarRef<conf> | null = this;
		let ret: __goscript_dnsclient_unix.hostLookupOrder = 0
		let dnsConf: __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null = null! as __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null
		await using __defer = new $.AsyncDisposableStack()
		if ($.pointerValue<conf>(c).dnsDebugLevel > 1) {
			__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
				await $.print("go package net: addrLookupOrder(", addr, ") = ", __goscript_dnsclient_unix.hostLookupOrder_String(ret), "\n")
			})() })
		}
		const __goscriptReturn1: [__goscript_dnsclient_unix.hostLookupOrder, __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as conf).lookupOrder(r, "") : conf.prototype.lookupOrder.call(c, r, ""))
		ret = __goscriptReturn1[0]
		dnsConf = __goscriptReturn1[1]
		await __defer.dispose()
		return [ret, dnsConf]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async hostLookupOrder(r: __goscript_lookup.Resolver | $.VarRef<__goscript_lookup.Resolver> | null, hostname: string): globalThis.Promise<[__goscript_dnsclient_unix.hostLookupOrder, __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null]> {
		const c: conf | $.VarRef<conf> | null = this;
		let ret: __goscript_dnsclient_unix.hostLookupOrder = 0
		let dnsConf: __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null = null! as __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null
		await using __defer = new $.AsyncDisposableStack()
		if ($.pointerValue<conf>(c).dnsDebugLevel > 1) {
			__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
				await $.print("go package net: hostLookupOrder(", hostname, ") = ", __goscript_dnsclient_unix.hostLookupOrder_String(ret), "\n")
			})() })
		}
		const __goscriptReturn3: [__goscript_dnsclient_unix.hostLookupOrder, __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as conf).lookupOrder(r, hostname) : conf.prototype.lookupOrder.call(c, r, hostname))
		ret = __goscriptReturn3[0]
		dnsConf = __goscriptReturn3[1]
		await __defer.dispose()
		return [ret, dnsConf]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async lookupOrder(r: __goscript_lookup.Resolver | $.VarRef<__goscript_lookup.Resolver> | null, hostname: string): globalThis.Promise<[__goscript_dnsclient_unix.hostLookupOrder, __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null]> {
		const c: conf | $.VarRef<conf> | null = this;
		let ret: __goscript_dnsclient_unix.hostLookupOrder = 0
		let dnsConf: __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null = null! as __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null
		const c$: conf = c == null ? $.pointerTarget<conf>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<conf>(c)
		// fallbackOrder is the order we return if we can't figure it out.
		let fallbackOrder: __goscript_dnsclient_unix.hostLookupOrder = 0

		let canUseCgo: boolean = false
		if ((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as conf).mustUseGoResolver(r) : conf.prototype.mustUseGoResolver.call(c, r))) {
			// Go resolver was explicitly requested
			// or cgo resolver is not available.
			// Figure out the order below.
			fallbackOrder = 1
			canUseCgo = false
		} else {
			if ((c$ as conf).netCgo) {
				// Cgo resolver was explicitly requested.
				return [0, null]
			} else {
				if ((c$ as conf).preferCgo) {
					// Given a choice, we prefer the cgo resolver.
					return [0, null]
				} else {
					// Neither resolver was explicitly requested
					// and we have no preference.

					if ((bytealg.IndexByteString(hostname, 92) != -1) || (bytealg.IndexByteString(hostname, 37) != -1)) {
						// Don't deal with special form hostnames
						// with backslashes or '%'.
						return [0, null]
					}

					// If something is unrecognized, use cgo.
					fallbackOrder = 0
					canUseCgo = true
				}
			}
		}

		// On systems that don't use /etc/resolv.conf or /etc/nsswitch.conf, we are done.
		switch ((c$ as conf).goos) {
			case "windows":
			case "plan9":
			case "android":
			case "ios":
			{
				return [fallbackOrder, null]
				break
			}
		}

		// Try to figure out the order to use for searches.
		// If we don't recognize something, use fallbackOrder.
		// That will use cgo unless the Go resolver was explicitly requested.
		// If we do figure out the order, return something other
		// than fallbackOrder to use the Go resolver with that order.

		dnsConf = await __goscript_dnsclient_unix.getSystemDNSConfig()

		if (((canUseCgo && ($.pointerValue<__goscript_dnsconfig.dnsConfig>(dnsConf).err != null)) && !errors.Is($.pointerValueOrNil($.pointerValue<__goscript_dnsconfig.dnsConfig>(dnsConf).err)!, $.pointerValueOrNil(fs.ErrNotExist)!)) && !errors.Is($.pointerValueOrNil($.pointerValue<__goscript_dnsconfig.dnsConfig>(dnsConf).err)!, $.pointerValueOrNil(fs.ErrPermission)!)) {
			// We can't read the resolv.conf file, so use cgo if we can.
			return [0, dnsConf]
		}

		if (canUseCgo && $.pointerValue<__goscript_dnsconfig.dnsConfig>(dnsConf).unknownOpt) {
			// We didn't recognize something in resolv.conf,
			// so use cgo if we can.
			return [0, dnsConf]
		}

		// OpenBSD is unique and doesn't use nsswitch.conf.
		// It also doesn't support mDNS.
		if ($.stringEqual((c$ as conf).goos, "openbsd")) {
			// OpenBSD's resolv.conf manpage says that a
			// non-existent resolv.conf means "lookup" defaults
			// to only "files", without DNS lookups.
			if (errors.Is($.pointerValueOrNil($.pointerValue<__goscript_dnsconfig.dnsConfig>(dnsConf).err)!, $.pointerValueOrNil(fs.ErrNotExist)!)) {
				return [3, dnsConf]
			}

			let lookup: $.Slice<string> = $.pointerValue<__goscript_dnsconfig.dnsConfig>(dnsConf).lookup
			if ($.sliceLen(lookup) == 0) {
				// https://www.openbsd.org/cgi-bin/man.cgi/OpenBSD-current/man5/resolv.conf.5
				// "If the lookup keyword is not used in the
				// system's resolv.conf file then the assumed
				// order is 'bind file'"
				return [2, dnsConf]
			}
			if (($.sliceLen(lookup) < 1) || ($.sliceLen(lookup) > 2)) {
				// We don't recognize this format.
				return [fallbackOrder, dnsConf]
			}
			switch ($.arrayIndex(lookup!, 0)) {
				case "bind":
				{
					if ($.sliceLen(lookup) == 2) {
						if ($.stringEqual($.arrayIndex(lookup!, 1), "file")) {
							return [2, dnsConf]
						}
						// Unrecognized.
						return [fallbackOrder, dnsConf]
					}
					return [4, dnsConf]
					break
				}
				case "file":
				{
					if ($.sliceLen(lookup) == 2) {
						if ($.stringEqual($.arrayIndex(lookup!, 1), "bind")) {
							return [1, dnsConf]
						}
						// Unrecognized.
						return [fallbackOrder, dnsConf]
					}
					return [3, dnsConf]
					break
				}
				default:
				{
					return [fallbackOrder, dnsConf]
					break
				}
			}
		}

		// Canonicalize the hostname by removing any trailing dot.
		hostname = stringslite.TrimSuffix(hostname, ".")

		let nss: __goscript_nss.nssConf | $.VarRef<__goscript_nss.nssConf> | null = await __goscript_nss.getSystemNSS()
		let nss$: __goscript_nss.nssConf = nss == null ? $.pointerTarget<__goscript_nss.nssConf>(nss) : (nss as any).__isVarRef === true ? (nss as any).value : (nss as any).__goValue === undefined ? (nss as any) : $.pointerTarget<__goscript_nss.nssConf>(nss)
		let srcs: $.Slice<__goscript_nss.nssSource> = $.mapGet<string, $.Slice<__goscript_nss.nssSource>, $.Slice<__goscript_nss.nssSource>>((nss$ as __goscript_nss.nssConf).sources, "hosts", null)[0]
		// If /etc/nsswitch.conf doesn't exist or doesn't specify any
		// sources for "hosts", assume Go's DNS will work fine.
		if (errors.Is($.pointerValueOrNil((nss$ as __goscript_nss.nssConf).err)!, $.pointerValueOrNil(fs.ErrNotExist)!) || (((nss$ as __goscript_nss.nssConf).err == null) && ($.sliceLen(srcs) == 0))) {
			if (canUseCgo && ($.stringEqual((c$ as conf).goos, "solaris"))) {
				// illumos defaults to
				// "nis [NOTFOUND=return] files",
				// which the go resolver doesn't support.
				return [0, dnsConf]
			}

			return [1, dnsConf]
		}
		if ((nss$ as __goscript_nss.nssConf).err != null) {
			// We failed to parse or open nsswitch.conf, so
			// we have nothing to base an order on.
			return [fallbackOrder, dnsConf]
		}

		let hasDNSSource: boolean = false
		let hasDNSSourceChecked: boolean = false

		let filesSource: boolean = false
		let dnsSource: boolean = false
		let first: string = ""
		for (let __goscriptRangeTarget1 = srcs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let src = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as __goscript_nss.nssSource)).clone()
			if (($.stringEqual(src.source, "files")) || ($.stringEqual(src.source, "dns"))) {
				if (canUseCgo && !src.standardCriteria()) {
					// non-standard; let libc deal with it.
					return [0, dnsConf]
				}
				if ($.stringEqual(src.source, "files")) {
					filesSource = true
				} else {
					hasDNSSource = true
					hasDNSSourceChecked = true
					dnsSource = true
				}
				if ($.stringEqual(first, "")) {
					first = src.source
				}
				continue
			}

			if (canUseCgo) {
				switch ((true as boolean)) {
					case (!$.stringEqual(hostname, "")) && ($.stringEqual(src.source, "myhostname")):
					{
						if ((isLocalhost(hostname) || isGateway(hostname)) || isOutbound(hostname)) {
							return [0, dnsConf]
						}
						let [hn, err] = await __goscript_dnsconfig.__goscript_get_getHostname()!()
						if ((err != null) || __goscript_parse.stringsEqualFold(hostname, hn)) {
							return [0, dnsConf]
						}
						continue
						break
					}
					case (!$.stringEqual(hostname, "")) && stringslite.HasPrefix(src.source, "mdns"):
					{
						if (__goscript_parse.stringsHasSuffixFold(hostname, ".local")) {
							// Per RFC 6762, the ".local" TLD is special. And
							// because Go's native resolver doesn't do mDNS or
							// similar local resolution mechanisms, assume that
							// libc might (via Avahi, etc) and use cgo.
							return [0, dnsConf]
						}

						// We don't parse mdns.allow files. They're rare. If one
						// exists, it might list other TLDs (besides .local) or even
						// '*', so just let libc deal with it.
						let haveMDNSAllow: boolean = false
						switch ((c$ as conf).mdnsTest) {
							case 0:
							{
								let [, err] = await os.Stat("/etc/mdns.allow")
								if ((err != null) && !errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(fs.ErrNotExist)!)) {
									// Let libc figure out what is going on.
									return [0, dnsConf]
								}
								haveMDNSAllow = err == null
								break
							}
							case 1:
							{
								haveMDNSAllow = true
								break
							}
							case 2:
							{
								haveMDNSAllow = false
								break
							}
						}
						if (haveMDNSAllow) {
							return [0, dnsConf]
						}
						continue
						break
					}
					default:
					{
						return [0, dnsConf]
						break
					}
				}
			}

			if (!hasDNSSourceChecked) {
				hasDNSSourceChecked = true
				for (let __goscriptRangeTarget0 = $.goSlice(srcs, i + 1, undefined), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
					let v = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_nss.nssSource)).clone()
					if ($.stringEqual(v.source, "dns")) {
						hasDNSSource = true
						break
					}
				}
			}

			// If we saw a source we don't recognize, which can only
			// happen if we can't use the cgo resolver, treat it as DNS,
			// but only when there is no dns in all other sources.
			if (!hasDNSSource) {
				dnsSource = true
				if ($.stringEqual(first, "")) {
					first = "dns"
				}
			}
		}

		// Cases where Go can handle it without cgo and C thread overhead,
		// or where the Go resolver has been forced.
		switch ((true as boolean)) {
			case filesSource && dnsSource:
			{
				if ($.stringEqual(first, "files")) {
					return [1, dnsConf]
				} else {
					return [2, dnsConf]
				}
				break
			}
			case filesSource:
			{
				return [3, dnsConf]
				break
			}
			case dnsSource:
			{
				return [4, dnsConf]
				break
			}
		}

		// Something weird. Fallback to the default.
		return [fallbackOrder, dnsConf]
	}

	public mustUseGoResolver(r: __goscript_lookup.Resolver | $.VarRef<__goscript_lookup.Resolver> | null): boolean {
		const c: conf | $.VarRef<conf> | null = this;
		if (!false) {
			return true
		}

		if ($.stringEqual(runtime.GOOS, "plan9")) {
			// TODO(bradfitz): for now we only permit use of the PreferGo
			// implementation when there's a non-nil Resolver with a
			// non-nil Dialer. This is a sign that the code is trying
			// to use their DNS-speaking net.Conn (such as an in-memory
			// DNS cache) and they don't want to actually hit the network.
			// Once we add support for looking the default DNS servers
			// from plan9, though, then we can relax this.
			if ((r == null) || ($.pointerValue<__goscript_lookup.Resolver>(r).Dial == null)) {
				return false
			}
		}

		return $.pointerValue<conf>(c).netGo || (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as __goscript_lookup.Resolver).preferGo() : __goscript_lookup.Resolver.prototype.preferGo.call(r))
	}

	static __typeInfo = $.registerStructType(
		"net.conf",
		() => new conf(),
		() => [$.methodSignature("addrLookupOrder", [["r", /* @__PURE__ */ $.pointerType("net.Resolver")], ["addr", /* @__PURE__ */ $.basicType("string")]], [["ret", /* @__PURE__ */ $.basicType("int", "net.hostLookupOrder")], ["dnsConf", /* @__PURE__ */ $.pointerType("net.dnsConfig")]], true), $.methodSignature("hostLookupOrder", [["r", /* @__PURE__ */ $.pointerType("net.Resolver")], ["hostname", /* @__PURE__ */ $.basicType("string")]], [["ret", /* @__PURE__ */ $.basicType("int", "net.hostLookupOrder")], ["dnsConf", /* @__PURE__ */ $.pointerType("net.dnsConfig")]], true), $.methodSignature("lookupOrder", [["r", /* @__PURE__ */ $.pointerType("net.Resolver")], ["hostname", /* @__PURE__ */ $.basicType("string")]], [["ret", /* @__PURE__ */ $.basicType("int", "net.hostLookupOrder")], ["dnsConf", /* @__PURE__ */ $.pointerType("net.dnsConfig")]], true), $.methodSignature("mustUseGoResolver", [["r", /* @__PURE__ */ $.pointerType("net.Resolver")]], [/* @__PURE__ */ $.basicType("bool")], true)],
		conf,
		() => [/* @__PURE__ */ $.structField("netGo", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("netCgo", /* @__PURE__ */ $.basicType("bool"), [1], 1, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("dnsDebugLevel", /* @__PURE__ */ $.basicType("int"), [2], 8, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("preferCgo", /* @__PURE__ */ $.basicType("bool"), [3], 16, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("goos", /* @__PURE__ */ $.basicType("string"), [4], 24, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("mdnsTest", /* @__PURE__ */ $.basicType("int", "net.mdnsTest"), [5], 40, false, { pkgPath: "net" })]
	)
}

export const mdnsFromSystem: mdnsTest = 0

export const mdnsAssumeExists: mdnsTest = 1

export const mdnsAssumeDoesNotExist: mdnsTest = 2

export let confOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_confOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(confOnce.value, __goscriptValue)
}

export let confVal: conf | $.VarRef<conf> | null = new conf({goos: runtime.GOOS})

export function __goscript_set_confVal(__goscriptValue: conf | $.VarRef<conf> | null): void {
	confVal = __goscriptValue
}

export async function systemConf(): globalThis.Promise<conf | $.VarRef<conf> | null> {
	await confOnce.value.Do(initConfVal)
	return confVal
}

export async function initConfVal(): globalThis.Promise<void> {
	await using __defer = new $.AsyncDisposableStack()
	let [dnsMode, debugLevel] = await goDebugNetDNS()
	$.pointerValue<conf>(confVal).netGo = false || ($.stringEqual(dnsMode, "go"))
	$.pointerValue<conf>(confVal).netCgo = false || ($.stringEqual(dnsMode, "cgo"))
	$.pointerValue<conf>(confVal).dnsDebugLevel = debugLevel

	if ($.pointerValue<conf>(confVal).dnsDebugLevel > 0) {
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			if ($.pointerValue<conf>(confVal).dnsDebugLevel > 1) {
				await $.println("go package net: confVal.netCgo =", $.pointerValue<conf>(confVal).netCgo, " netGo =", $.pointerValue<conf>(confVal).netGo)
			}
			if (((!$.stringEqual(dnsMode, "go")) && (!$.stringEqual(dnsMode, "cgo"))) && (!$.stringEqual(dnsMode, ""))) {
				await $.println("go package net: GODEBUG=netdns contains an invalid dns mode, ignoring it")
			}
			switch ((true as boolean)) {
				case false || !false:
				{
					if ($.stringEqual(dnsMode, "cgo")) {
						await $.println("go package net: ignoring GODEBUG=netdns=cgo as the binary was compiled without support for the cgo resolver")
					} else {
						await $.println("go package net: using the Go DNS resolver")
					}
					break
				}
				case false:
				{
					if ($.stringEqual(dnsMode, "go")) {
						await $.println("go package net: GODEBUG setting forcing use of the Go resolver")
					} else {
						await $.println("go package net: using the cgo DNS resolver")
					}
					break
				}
				default:
				{
					if ($.stringEqual(dnsMode, "go")) {
						await $.println("go package net: GODEBUG setting forcing use of the Go resolver")
					} else {
						if ($.stringEqual(dnsMode, "cgo")) {
							await $.println("go package net: GODEBUG setting forcing use of the cgo resolver")
						} else {
							await $.println("go package net: dynamic selection of DNS resolver")
						}
					}
					break
				}
			}
		})() })
	}

	// The remainder of this function sets preferCgo based on
	// conditions that will not change during program execution.

	// By default, prefer the go resolver.
	$.pointerValue<conf>(confVal).preferCgo = false

	// If the cgo resolver is not available, we can't prefer it.
	if (!false) {
		return
	}

	// Some operating systems always prefer the cgo resolver.
	if (goosPrefersCgo()) {
		$.pointerValue<conf>(confVal).preferCgo = true
		return
	}

	// The remaining checks are specific to Unix systems.
	switch ((runtime.GOOS as string)) {
		case "plan9":
		case "windows":
		case "js":
		case "wasip1":
		{
			return
			break
		}
	}

	// If any environment-specified resolver options are specified,
	// prefer the cgo resolver.
	// Note that LOCALDOMAIN can change behavior merely by being
	// specified with the empty string.
	let [, localDomainDefined] = os.LookupEnv("LOCALDOMAIN")
	if ((localDomainDefined || (!$.stringEqual(os.Getenv("RES_OPTIONS"), ""))) || (!$.stringEqual(os.Getenv("HOSTALIASES"), ""))) {
		$.pointerValue<conf>(confVal).preferCgo = true
		return
	}

	// OpenBSD apparently lets you override the location of resolv.conf
	// with ASR_CONFIG. If we notice that, defer to libc.
	if (($.stringEqual(runtime.GOOS, "openbsd")) && (!$.stringEqual(os.Getenv("ASR_CONFIG"), ""))) {
		$.pointerValue<conf>(confVal).preferCgo = true
		return
	}
}

export function goosPrefersCgo(): boolean {
	switch ((runtime.GOOS as string)) {
		case "windows":
		case "plan9":
		{
			return true
			break
		}
		case "darwin":
		case "ios":
		{
			return true
			break
		}
		case "android":
		{
			return true
			break
		}
		default:
		{
			return false
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export let netdns: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("netdns")

export function __goscript_set_netdns(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	netdns = __goscriptValue
}

export async function goDebugNetDNS(): globalThis.Promise<[string, number]> {
	let dnsMode: string = ""
	let debugLevel: number = 0
	let goDebug = godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(netdns))
	let parsePart: ((s: string) => void) | null = $.functionValue((s: string): void => {
		if ($.stringEqual(s, "")) {
			return
		}
		if ((48 <= $.indexString(s, 0)) && ($.indexString(s, 0) <= 57)) {
			let __goscriptTuple0: any = __goscript_parse.dtoi(s)
			debugLevel = __goscriptTuple0[0]
		} else {
			dnsMode = s
		}
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo))
	{
		let i = bytealg.IndexByteString(goDebug, 43)
		if (i != -1) {
			void (__goscriptAwait = parsePart!($.sliceStringOrBytes(goDebug, undefined, i)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = parsePart!($.sliceStringOrBytes(goDebug, i + 1, undefined)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [dnsMode, debugLevel]
		}
	}
	void (__goscriptAwait = parsePart!(goDebug), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return [dnsMode, debugLevel]
}

export function isLocalhost(h: string): boolean {
	return ((__goscript_parse.stringsEqualFold(h, "localhost") || __goscript_parse.stringsEqualFold(h, "localhost.localdomain")) || __goscript_parse.stringsHasSuffixFold(h, ".localhost")) || __goscript_parse.stringsHasSuffixFold(h, ".localhost.localdomain")
}

export function isGateway(h: string): boolean {
	return __goscript_parse.stringsEqualFold(h, "_gateway")
}

export function isOutbound(h: string): boolean {
	return __goscript_parse.stringsEqualFold(h, "_outbound")
}

var __goscriptAwait: any
