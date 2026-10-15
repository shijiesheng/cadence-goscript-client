// Generated file based on urlpart_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_context from "./context.gs.ts"
import "@goscript/strconv/index.js"
import "./context.gs.ts"

export const _urlPart_name: string = "urlPartNoneurlPartPreQueryurlPartQueryOrFragurlPartUnknown"

function __goscriptBlankFunc0(): void {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	let x: {}[] = $.arrayValue(globalThis.Array.from({ length: 1 }, () => ({})), /* @__PURE__ */ $.arrayType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, 1))
	$.arrayIndex(x, ((0 - 0) & 0xff))
	$.arrayIndex(x, ((1 - 1) & 0xff))
	$.arrayIndex(x, ((2 - 2) & 0xff))
	$.arrayIndex(x, ((3 - 3) & 0xff))
}

export let _urlPart_index: Uint8Array = $.arrayValue(new Uint8Array([0, 11, 26, 44, 58]))

export function __goscript_set__urlPart_index(__goscriptValue: Uint8Array): void {
	_urlPart_index = __goscriptValue
}

export function urlPart_String(i: __goscript_context.urlPart): string {
	let idx = $.int(i) - 0
	if ((i < 0) || (idx >= 4)) {
		return $.concatString(($.concatString("urlPart(", strconv.FormatInt($.int64(i), 10))), ")")
	}
	return $.sliceStringOrBytes("urlPartNoneurlPartPreQueryurlPartQueryOrFragurlPartUnknown", $.arrayIndex(_urlPart_index, idx), $.arrayIndex(_urlPart_index, idx + 1))
}
