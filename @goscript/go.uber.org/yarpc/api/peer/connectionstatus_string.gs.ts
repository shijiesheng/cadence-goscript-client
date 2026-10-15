// Generated file based on connectionstatus_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_peer from "./peer.gs.ts"
import "@goscript/strconv/index.js"
import "./peer.gs.ts"

export const _ConnectionStatus_name: string = "UnavailableConnectingAvailable"

function __goscriptBlankFunc0(): void {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	let x: {}[] = $.arrayValue(globalThis.Array.from({ length: 1 }, () => ({})), /* @__PURE__ */ $.arrayType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, 1))
	$.arrayIndex(x, 0 - 0)
	$.arrayIndex(x, 1 - 1)
	$.arrayIndex(x, 2 - 2)
}

export let _ConnectionStatus_index: Uint8Array = $.arrayValue(new Uint8Array([0, 11, 21, 30]))

export function __goscript_set__ConnectionStatus_index(__goscriptValue: Uint8Array): void {
	_ConnectionStatus_index = __goscriptValue
}

export function ConnectionStatus_String(i: __goscript_peer.ConnectionStatus): string {
	if ((i < 0) || (i >= 3)) {
		return $.concatString(($.concatString("ConnectionStatus(", strconv.FormatInt($.int64(i), 10))), ")")
	}
	return $.sliceStringOrBytes("UnavailableConnectingAvailable", $.arrayIndex(_ConnectionStatus_index, i), $.arrayIndex(_ConnectionStatus_index, i + 1))
}
