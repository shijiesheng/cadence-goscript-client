// Generated file based on roundingmode_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_float from "./float.gs.ts"
import "@goscript/strconv/index.js"
import "./float.gs.ts"

export const _RoundingMode_name: string = "ToNearestEvenToNearestAwayToZeroAwayFromZeroToNegativeInfToPositiveInf"

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

export let _RoundingMode_index: Uint8Array = $.arrayValue(new Uint8Array([0, 13, 26, 32, 44, 57, 70]))

export function __goscript_set__RoundingMode_index(__goscriptValue: Uint8Array): void {
	_RoundingMode_index = __goscriptValue
}

export function RoundingMode_String(i: __goscript_float.RoundingMode): string {
	let idx = $.int(i) - 0
	if ((i < 0) || (idx >= 6)) {
		return $.concatString(($.concatString("RoundingMode(", strconv.FormatInt($.int64(i), 10))), ")")
	}
	return $.sliceStringOrBytes("ToNearestEvenToNearestAwayToZeroAwayFromZeroToNegativeInfToPositiveInf", $.arrayIndex(_RoundingMode_index, idx), $.arrayIndex(_RoundingMode_index, idx + 1))
}
