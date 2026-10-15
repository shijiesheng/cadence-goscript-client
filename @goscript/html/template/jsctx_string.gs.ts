// Generated file based on jsctx_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_context from "./context.gs.ts"
import "@goscript/strconv/index.js"
import "./context.gs.ts"

export const _jsCtx_name: string = "jsCtxRegexpjsCtxDivOpjsCtxUnknown"

function __goscriptBlankFunc0(): void {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	let x: {}[] = $.arrayValue(globalThis.Array.from({ length: 1 }, () => ({})), /* @__PURE__ */ $.arrayType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, 1))
	$.arrayIndex(x, ((0 - 0) & 0xff))
	$.arrayIndex(x, ((1 - 1) & 0xff))
	$.arrayIndex(x, ((2 - 2) & 0xff))
}

export let _jsCtx_index: Uint8Array = $.arrayValue(new Uint8Array([0, 11, 21, 33]))

export function __goscript_set__jsCtx_index(__goscriptValue: Uint8Array): void {
	_jsCtx_index = __goscriptValue
}

export function jsCtx_String(i: __goscript_context.jsCtx): string {
	let idx = $.int(i) - 0
	if ((i < 0) || (idx >= 3)) {
		return $.concatString(($.concatString("jsCtx(", strconv.FormatInt($.int64(i), 10))), ")")
	}
	return $.sliceStringOrBytes("jsCtxRegexpjsCtxDivOpjsCtxUnknown", $.arrayIndex(_jsCtx_index, idx), $.arrayIndex(_jsCtx_index, idx + 1))
}
