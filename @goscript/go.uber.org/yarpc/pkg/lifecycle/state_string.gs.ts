// Generated file based on state_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_once from "./once.gs.ts"
import "@goscript/strconv/index.js"
import "./once.gs.ts"

export const _State_name: string = "IdleStartingRunningStoppingStoppedErrored"

function __goscriptBlankFunc0(): void {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	let x: {}[] = $.arrayValue(globalThis.Array.from({ length: 1 }, () => ({})), /* @__PURE__ */ $.arrayType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, 1))
	$.arrayIndex(x, 0 - 0)
	$.arrayIndex(x, 1 - 1)
	$.arrayIndex(x, 2 - 2)
	$.arrayIndex(x, 3 - 3)
	$.arrayIndex(x, 4 - 4)
	$.arrayIndex(x, 5 - 5)
}

export let _State_index: Uint8Array = $.arrayValue(new Uint8Array([0, 4, 12, 19, 27, 34, 41]))

export function __goscript_set__State_index(__goscriptValue: Uint8Array): void {
	_State_index = __goscriptValue
}

export function State_String(i: __goscript_once.State): string {
	if ((i < 0) || (i >= 6)) {
		return $.concatString(($.concatString("State(", strconv.FormatInt($.int64(i), 10))), ")")
	}
	return $.sliceStringOrBytes("IdleStartingRunningStoppingStoppedErrored", $.arrayIndex(_State_index, i), $.arrayIndex(_State_index, i + 1))
}
