// Generated file based on accuracy_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_float from "./float.gs.ts"
import "@goscript/strconv/index.js"
import "./float.gs.ts"

export const _Accuracy_name: string = "BelowExactAbove"

function __goscriptBlankFunc0(): void {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	let x: {}[] = $.arrayValue(globalThis.Array.from({ length: 1 }, () => ({})), /* @__PURE__ */ $.arrayType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, 1))
	$.arrayIndex(x, ((-1 - -1) << 24 >> 24))
	$.arrayIndex(x, ((0 - 0) << 24 >> 24))
	$.arrayIndex(x, ((1 - 1) << 24 >> 24))
}

export let _Accuracy_index: Uint8Array = $.arrayValue(new Uint8Array([0, 5, 10, 15]))

export function __goscript_set__Accuracy_index(__goscriptValue: Uint8Array): void {
	_Accuracy_index = __goscriptValue
}

export function Accuracy_String(i: __goscript_float.Accuracy): string {
	let idx = $.int(i) - -1
	if ((i < -1) || (idx >= 3)) {
		return $.concatString(($.concatString("Accuracy(", strconv.FormatInt($.int64(i), 10))), ")")
	}
	return $.sliceStringOrBytes("BelowExactAbove", $.arrayIndex(_Accuracy_index, idx), $.arrayIndex(_Accuracy_index, idx + 1))
}
