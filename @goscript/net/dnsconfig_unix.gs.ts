// Generated file based on dnsconfig_unix.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytealg from "@goscript/internal/bytealg/index.js"

import * as stringslite from "@goscript/internal/stringslite/index.js"

import * as netip from "@goscript/net/netip/index.js"

import * as time from "@goscript/time/index.js"

import * as fs from "@goscript/io/fs/index.js"

import * as os from "@goscript/os/index.js"

import * as __goscript_dnsclient_unix from "./dnsclient_unix.gs.ts"

import * as __goscript_dnsconfig from "./dnsconfig.gs.ts"

import * as __goscript_ipsock from "./ipsock.gs.ts"

import * as __goscript_parse from "./parse.gs.ts"
import "@goscript/internal/bytealg/index.js"
import "@goscript/internal/stringslite/index.js"
import "@goscript/net/netip/index.js"
import "@goscript/time/index.js"
import "@goscript/io/fs/index.js"
import "@goscript/os/index.js"
import "./dnsclient_unix.gs.ts"
import "./dnsconfig.gs.ts"
import "./ipsock.gs.ts"
import "./parse.gs.ts"

export async function dnsReadConfig(filename: string): globalThis.Promise<__goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null> {
	await using __defer = new $.AsyncDisposableStack()
	let __goscriptShadow0: __goscript_dnsconfig.dnsConfig | $.VarRef<__goscript_dnsconfig.dnsConfig> | null = new __goscript_dnsconfig.dnsConfig({ndots: 1, timeout: 5000000000n, attempts: 2})
	let __goscriptTuple0: any = await __goscript_parse.open(filename)
	let __goscriptShadow1: __goscript_parse.file | $.VarRef<__goscript_parse.file> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).servers = __goscript_dnsconfig.__goscript_get_defaultNS()
		$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).search = await dnsDefaultSearch()
		$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).err = err
		return __goscriptShadow0
	}
	__defer.defer(async () => { await (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as __goscript_parse.file).close() : __goscript_parse.file.prototype.close.call(__goscriptShadow1)) })
	{
		let [fi, __goscriptShadow2] = await os.File.prototype.Stat.call($.pointerValue<os.File>($.pointerValue<__goscript_parse.file>(__goscriptShadow1).file))
		if (__goscriptShadow2 == null) {
			$.assignStruct($.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).mtime, ((__goscriptAwait = (fi !== null && (fi as any).__isVarRef !== true && (fi as any).__goValue === undefined ? (fi as Exclude<fs.FileInfo, null>) : $.pointerValue<Exclude<fs.FileInfo, null>>(fi)).ModTime(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))
		} else {
			$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).servers = __goscript_dnsconfig.__goscript_get_defaultNS()
			$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).search = await dnsDefaultSearch()
			$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).err = __goscriptShadow2
			return __goscriptShadow0
		}
	}
	for (let [line, ok] = await (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as __goscript_parse.file).readLine() : __goscript_parse.file.prototype.readLine.call(__goscriptShadow1)); ok; [line, ok] = await (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as __goscript_parse.file).readLine() : __goscript_parse.file.prototype.readLine.call(__goscriptShadow1))) {
		if (($.stringLen(line) > 0) && (($.indexString(line, 0) == 59) || ($.indexString(line, 0) == 35))) {
			// comment.
			continue
		}
		let f: $.Slice<string> = __goscript_parse.getFields(line)
		if ($.sliceLen(f) < 1) {
			continue
		}
		switch ($.arrayIndex(f!, 0)) {
			case "nameserver":
			{
				if (($.sliceLen(f) > 1) && ($.sliceLen($.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).servers) < 3)) {
					// One more check: make sure server name is
					// just an IP address. Otherwise we need DNS
					// to look it up.
					{
						let [, __goscriptShadow3] = netip.ParseAddr($.arrayIndex(f!, 1))
						if (__goscriptShadow3 == null) {
							$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).servers = $.appendOne($.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).servers, __goscript_ipsock.JoinHostPort($.arrayIndex(f!, 1), "53"))
						}
					}
				}
				break
			}
			case "domain":
			{
				if ($.sliceLen(f) > 1) {
					$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).search = $.arrayToSlice<string>([ensureRooted($.arrayIndex(f!, 1))])
				}
				break
			}
			case "search":
			{
				$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).search = $.makeSlice<string>(0, $.sliceLen(f) - 1, "string")
				for (let __goscriptSliceWindow0 = $.sliceRange(f), i = 1; i < __goscriptSliceWindow0.length; i++) {
					let name = ensureRooted(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as string))
					if ($.stringEqual(name, ".")) {
						continue
					}
					$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).search = $.appendOne($.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).search, name)
				}
				break
			}
			case "options":
			{
				for (let __goscriptRangeTarget0 = $.goSlice(f, 1, undefined), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
					let s = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
					switch ((true as boolean)) {
						case stringslite.HasPrefix(s, "ndots:"):
						{
							let [n, , ] = __goscript_parse.dtoi($.sliceStringOrBytes(s, 6, undefined))
							if (n < 0) {
								n = 0
							} else {
								if (n > 15) {
									n = 15
								}
							}
							$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).ndots = n
							break
						}
						case stringslite.HasPrefix(s, "timeout:"):
						{
							let [n, , ] = __goscript_parse.dtoi($.sliceStringOrBytes(s, 8, undefined))
							if (n < 1) {
								n = 1
							}
							$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).timeout = $.int64Mul($.int64(n), 1000000000n)
							break
						}
						case stringslite.HasPrefix(s, "attempts:"):
						{
							let [n, , ] = __goscript_parse.dtoi($.sliceStringOrBytes(s, 9, undefined))
							if (n < 1) {
								n = 1
							}
							$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).attempts = n
							break
						}
						case $.stringEqual(s, "rotate"):
						{
							$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).rotate = true
							break
						}
						case ($.stringEqual(s, "single-request")) || ($.stringEqual(s, "single-request-reopen")):
						{
							$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).singleRequest = true
							break
						}
						case (($.stringEqual(s, "use-vc")) || ($.stringEqual(s, "usevc"))) || ($.stringEqual(s, "tcp")):
						{
							$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).useTCP = true
							break
						}
						case $.stringEqual(s, "trust-ad"):
						{
							$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).trustAD = true
							break
						}
						case $.stringEqual(s, "edns0"):
						{
							break
						}
						case $.stringEqual(s, "no-reload"):
						{
							$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).noReload = true
							break
						}
						default:
						{
							$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).unknownOpt = true
							break
						}
					}
				}
				break
			}
			case "lookup":
			{
				$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).lookup = $.goSlice(f, 1, undefined)
				break
			}
			default:
			{
				$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).unknownOpt = true
				break
			}
		}
	}
	if ($.sliceLen($.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).servers) == 0) {
		$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).servers = __goscript_dnsconfig.__goscript_get_defaultNS()
	}
	if ($.sliceLen($.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).search) == 0) {
		$.pointerValue<__goscript_dnsconfig.dnsConfig>(__goscriptShadow0).search = await dnsDefaultSearch()
	}
	return __goscriptShadow0
}

export async function dnsDefaultSearch(): globalThis.Promise<$.Slice<string>> {
	let [hn, err] = await __goscript_dnsconfig.__goscript_get_getHostname()!()
	if (err != null) {
		// best effort
		return null
	}
	{
		let i = bytealg.IndexByteString(hn, 46)
		if ((i >= 0) && (i < ($.stringLen(hn) - 1))) {
			return $.arrayToSlice<string>([ensureRooted($.sliceStringOrBytes(hn, i + 1, undefined))])
		}
	}
	return null
}

export function ensureRooted(s: string): string {
	if (($.stringLen(s) > 0) && ($.indexString(s, $.stringLen(s) - 1) == 46)) {
		return s
	}
	return $.concatString(s, ".")
}

var __goscriptAwait: any
