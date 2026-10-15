// Generated file based on mode_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_mode from "./mode.gs.ts"
import "@goscript/strconv/index.js"
import "./mode.gs.ts"

export const _Mode_name: string = "DisabledPermissiveEnforced"

function __goscriptBlankFunc0(): void {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	let x: {}[] = $.arrayValue(globalThis.Array.from({ length: 1 }, () => ({})), /* @__PURE__ */ $.arrayType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, 1))
	$.arrayIndex(x, ((0 - 0) & 0xffff))
	$.arrayIndex(x, ((1 - 1) & 0xffff))
	$.arrayIndex(x, ((2 - 2) & 0xffff))
}

export let _Mode_index: Uint8Array = $.arrayValue(new Uint8Array([0, 8, 18, 26]))

export function __goscript_set__Mode_index(__goscriptValue: Uint8Array): void {
	_Mode_index = __goscriptValue
}

export function Mode_String(i: __goscript_mode.Mode): string {
	if (i >= 3) {
		return $.concatString(($.concatString("Mode(", strconv.FormatInt($.int64(i), 10))), ")")
	}
	return $.sliceStringOrBytes("DisabledPermissiveEnforced", $.arrayIndex(_Mode_index, i), $.arrayIndex(_Mode_index, ((i + 1) & 0xffff)))
}
