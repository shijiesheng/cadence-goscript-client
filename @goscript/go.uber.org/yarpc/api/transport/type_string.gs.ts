// Generated file based on type_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_handler from "./handler.gs.ts"
import "@goscript/strconv/index.js"
import "./handler.gs.ts"

export const _Type_name: string = "UnaryOnewayStreaming"

function __goscriptBlankFunc0(): void {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	let x: {}[] = $.arrayValue(globalThis.Array.from({ length: 1 }, () => ({})), /* @__PURE__ */ $.arrayType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, 1))
	$.arrayIndex(x, 1 - 1)
	$.arrayIndex(x, 2 - 2)
	$.arrayIndex(x, 3 - 3)
}

export let _Type_index: Uint8Array = $.arrayValue(new Uint8Array([0, 5, 11, 20]))

export function __goscript_set__Type_index(__goscriptValue: Uint8Array): void {
	_Type_index = __goscriptValue
}

export function Type_String(i: __goscript_handler.Type): string {
	i = i - (1)
	if ((i < 0) || (i >= 3)) {
		return $.concatString(($.concatString("Type(", strconv.FormatInt($.int64(i + 1), 10))), ")")
	}
	return $.sliceStringOrBytes("UnaryOnewayStreaming", $.arrayIndex(_Type_index, i), $.arrayIndex(_Type_index, i + 1))
}
