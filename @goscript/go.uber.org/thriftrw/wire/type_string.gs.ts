// Generated file based on type_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript__type from "./type.gs.ts"
import "@goscript/strconv/index.js"
import "./type.gs.ts"

export const _Type_name_0: string = "TBoolTI8TDouble"

export const _Type_name_1: string = "TI16"

export const _Type_name_2: string = "TI32"

export const _Type_name_3: string = "TI64TBinaryTStructTMapTSetTList"

function __goscriptBlankFunc0(): void {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	let x: {}[] = $.arrayValue(globalThis.Array.from({ length: 1 }, () => ({})), /* @__PURE__ */ $.arrayType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, 1))
	$.arrayIndex(x, ((2 - 2) & 0xff))
	$.arrayIndex(x, ((3 - 3) & 0xff))
	$.arrayIndex(x, ((4 - 4) & 0xff))
	$.arrayIndex(x, ((6 - 6) & 0xff))
	$.arrayIndex(x, ((8 - 8) & 0xff))
	$.arrayIndex(x, ((10 - 10) & 0xff))
	$.arrayIndex(x, ((11 - 11) & 0xff))
	$.arrayIndex(x, ((12 - 12) & 0xff))
	$.arrayIndex(x, ((13 - 13) & 0xff))
	$.arrayIndex(x, ((14 - 14) & 0xff))
	$.arrayIndex(x, ((15 - 15) & 0xff))
}

export let _Type_index_0: Uint8Array = $.arrayValue(new Uint8Array([0, 5, 8, 15]))

export function __goscript_set__Type_index_0(__goscriptValue: Uint8Array): void {
	_Type_index_0 = __goscriptValue
}

export let _Type_index_3: Uint8Array = $.arrayValue(new Uint8Array([0, 4, 11, 18, 22, 26, 31]))

export function __goscript_set__Type_index_3(__goscriptValue: Uint8Array): void {
	_Type_index_3 = __goscriptValue
}

export function Type_String(i: __goscript__type.Type): string {
	switch ((true as boolean)) {
		case (2 <= i) && (i <= 4):
		{
			i = $.uint(i - (2), 8)
			return $.sliceStringOrBytes("TBoolTI8TDouble", $.arrayIndex(_Type_index_0, i), $.arrayIndex(_Type_index_0, ((i + 1) & 0xff)))
			break
		}
		case i == 6:
		{
			return "TI16"
			break
		}
		case i == 8:
		{
			return "TI32"
			break
		}
		case (10 <= i) && (i <= 15):
		{
			i = $.uint(i - (10), 8)
			return $.sliceStringOrBytes("TI64TBinaryTStructTMapTSetTList", $.arrayIndex(_Type_index_3, i), $.arrayIndex(_Type_index_3, ((i + 1) & 0xff)))
			break
		}
		default:
		{
			return $.concatString(($.concatString("Type(", strconv.FormatInt($.int64(i), 10))), ")")
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}
