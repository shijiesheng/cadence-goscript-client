// Generated file based on util.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as tls from "@goscript/crypto/tls/index.js"
import "@goscript/crypto/tls/index.js"

export const alpnProtoStrH2: string = "h2"

export function AppendH2ToNextProtos(ps: $.Slice<string>): $.Slice<string> {
	for (let __goscriptRangeTarget0 = ps, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let p = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		if ($.stringEqual(p, "h2")) {
			return ps
		}
	}
	let ret: $.Slice<string> = $.makeSlice<string>(0, $.sliceLen(ps) + 1, "string")
	ret = $.appendSlice(ret, ps)
	return $.appendOne(ret, "h2")
}

export async function CloneTLSConfig(cfg: tls.Config | $.VarRef<tls.Config> | null): globalThis.Promise<tls.Config | $.VarRef<tls.Config> | null> {
	if (cfg == null) {
		return new tls.Config()
	}

	return (cfg !== null && (cfg as any).__isVarRef !== true && (cfg as any).__goValue === undefined ? ((cfg as any) as tls.Config).Clone() : tls.Config.prototype.Clone.call(cfg))
}
