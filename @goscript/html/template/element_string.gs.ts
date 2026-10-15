// Generated file based on element_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_context from "./context.gs.ts"
import "@goscript/strconv/index.js"
import "./context.gs.ts"

export const _element_name: string = "elementNoneelementScriptelementStyleelementTextareaelementTitleelementMeta"

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
}

export let _element_index: Uint8Array = $.arrayValue(new Uint8Array([0, 11, 24, 36, 51, 63, 74]))

export function __goscript_set__element_index(__goscriptValue: Uint8Array): void {
	_element_index = __goscriptValue
}

export function element_String(i: __goscript_context.element): string {
	let idx = $.int(i) - 0
	if ((i < 0) || (idx >= 6)) {
		return $.concatString(($.concatString("element(", strconv.FormatInt($.int64(i), 10))), ")")
	}
	return $.sliceStringOrBytes("elementNoneelementScriptelementStyleelementTextareaelementTitleelementMeta", $.arrayIndex(_element_index, idx), $.arrayIndex(_element_index, idx + 1))
}
