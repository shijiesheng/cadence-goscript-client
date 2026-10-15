// Generated file based on headermap.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as http from "@goscript/net/http/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_ascii from "./ascii.gs.ts"
import "@goscript/net/http/index.js"
import "@goscript/sync/index.js"
import "./ascii.gs.ts"

export let commonBuildOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_commonBuildOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(commonBuildOnce.value, __goscriptValue)
}

export let commonLowerHeader: globalThis.Map<string, string> | null = null! as globalThis.Map<string, string> | null

export function __goscript_set_commonLowerHeader(__goscriptValue: globalThis.Map<string, string> | null): void {
	commonLowerHeader = __goscriptValue
}

export let commonCanonHeader: globalThis.Map<string, string> | null = null! as globalThis.Map<string, string> | null

export function __goscript_set_commonCanonHeader(__goscriptValue: globalThis.Map<string, string> | null): void {
	commonCanonHeader = __goscriptValue
}

export async function buildCommonHeaderMapsOnce(): globalThis.Promise<void> {
	await commonBuildOnce.value.Do(buildCommonHeaderMaps)
}

export function buildCommonHeaderMaps(): void {
	let common: $.Slice<string> = $.arrayToSlice<string>(["accept", "accept-charset", "accept-encoding", "accept-language", "accept-ranges", "age", "access-control-allow-credentials", "access-control-allow-headers", "access-control-allow-methods", "access-control-allow-origin", "access-control-expose-headers", "access-control-max-age", "access-control-request-headers", "access-control-request-method", "allow", "authorization", "cache-control", "content-disposition", "content-encoding", "content-language", "content-length", "content-location", "content-range", "content-type", "cookie", "date", "etag", "expect", "expires", "from", "host", "if-match", "if-modified-since", "if-none-match", "if-unmodified-since", "last-modified", "link", "location", "max-forwards", "origin", "proxy-authenticate", "proxy-authorization", "range", "referer", "refresh", "retry-after", "server", "set-cookie", "strict-transport-security", "trailer", "transfer-encoding", "user-agent", "vary", "via", "www-authenticate", "x-forwarded-for", "x-forwarded-proto"])
	commonLowerHeader = $.makeMap<string, string>()
	commonCanonHeader = $.makeMap<string, string>()
	for (let __goscriptRangeTarget0 = common, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		let chk = http.CanonicalHeaderKey(v)
		$.mapSet(commonLowerHeader, chk, v)
		$.mapSet(commonCanonHeader, v, chk)
	}
}

export async function lowerHeader(v: string): globalThis.Promise<[string, boolean]> {
	let lower: string = ""
	let ascii: boolean = false
	await buildCommonHeaderMapsOnce()
	{
		let [s, ok] = $.mapGet<string, string, string>(commonLowerHeader, v, "")
		if (ok) {
			return [s, true]
		}
	}
	return __goscript_ascii.asciiToLower(v)
}

export async function canonicalHeader(v: string): globalThis.Promise<string> {
	await buildCommonHeaderMapsOnce()
	{
		let [s, ok] = $.mapGet<string, string, string>(commonCanonHeader, v, "")
		if (ok) {
			return s
		}
	}
	return http.CanonicalHeaderKey(v)
}
