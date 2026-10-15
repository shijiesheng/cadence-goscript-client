// Generated file based on guts.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as textproto from "@goscript/net/textproto/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/net/textproto/index.js"
import "@goscript/strings/index.js"

export async function ValidTrailerHeader(name: string): globalThis.Promise<boolean> {
	name = await textproto.CanonicalMIMEHeaderKey(name)
	if (strings.HasPrefix(name, "If-") || $.mapGet<string, boolean, boolean>(badTrailer, name, false)[0]) {
		return false
	}
	return true
}

export let badTrailer: globalThis.Map<string, boolean> | null = $.makeMap<string, boolean>([["Authorization", true], ["Cache-Control", true], ["Connection", true], ["Content-Encoding", true], ["Content-Length", true], ["Content-Range", true], ["Content-Type", true], ["Expect", true], ["Host", true], ["Keep-Alive", true], ["Max-Forwards", true], ["Pragma", true], ["Proxy-Authenticate", true], ["Proxy-Authorization", true], ["Proxy-Connection", true], ["Range", true], ["Realm", true], ["Te", true], ["Trailer", true], ["Transfer-Encoding", true], ["Www-Authenticate", true]])

export function __goscript_set_badTrailer(__goscriptValue: globalThis.Map<string, boolean> | null): void {
	badTrailer = __goscriptValue
}
