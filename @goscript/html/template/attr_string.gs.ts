// Generated file based on attr_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_context from "./context.gs.ts"
import "@goscript/strconv/index.js"
import "./context.gs.ts"

export const _attr_name: string = "attrNoneattrScriptattrScriptTypeattrStyleattrURLattrSrcsetattrMetaContent"

function __goscriptBlankFunc0(): void {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	let x: {}[] = $.arrayValue(globalThis.Array.from({ length: 1 }, () => ({})), /* @__PURE__ */ $.arrayType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, 1))
	$.arrayIndex(x, ((0 - 0) & 0xff))
	$.arrayIndex(x, ((1 - 1) & 0xff))
	$.arrayIndex(x, ((2 - 2) & 0xff))
	$.arrayIndex(x, ((3 - 3) & 0xff))
	$.arrayIndex(x, ((4 - 4) & 0xff))
	$.arrayIndex(x, ((5 - 5) & 0xff))
	$.arrayIndex(x, ((6 - 6) & 0xff))
}

export let _attr_index: Uint8Array = $.arrayValue(new Uint8Array([0, 8, 18, 32, 41, 48, 58, 73]))

export function __goscript_set__attr_index(__goscriptValue: Uint8Array): void {
	_attr_index = __goscriptValue
}

export function attr_String(i: __goscript_context.attr): string {
	let idx = $.int(i) - 0
	if ((i < 0) || (idx >= 7)) {
		return $.concatString(($.concatString("attr(", strconv.FormatInt($.int64(i), 10))), ")")
	}
	return $.sliceStringOrBytes("attrNoneattrScriptattrScriptTypeattrStyleattrURLattrSrcsetattrMetaContent", $.arrayIndex(_attr_index, idx), $.arrayIndex(_attr_index, idx + 1))
}
