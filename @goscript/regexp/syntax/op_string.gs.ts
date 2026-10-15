// Generated file based on op_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_regexp from "./regexp.gs.ts"
import "@goscript/strconv/index.js"
import "./regexp.gs.ts"

export const _Op_name_0: string = "NoMatchEmptyMatchLiteralCharClassAnyCharNotNLAnyCharBeginLineEndLineBeginTextEndTextWordBoundaryNoWordBoundaryCaptureStarPlusQuestRepeatConcatAlternate"

export const _Op_name_1: string = "opPseudo"

function __goscriptBlankFunc0(): void {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	let x: {}[] = $.arrayValue(globalThis.Array.from({ length: 1 }, () => ({})), /* @__PURE__ */ $.arrayType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, 1))
	$.arrayIndex(x, ((1 - 1) & 0xff))
	$.arrayIndex(x, ((2 - 2) & 0xff))
	$.arrayIndex(x, ((3 - 3) & 0xff))
	$.arrayIndex(x, ((4 - 4) & 0xff))
	$.arrayIndex(x, ((5 - 5) & 0xff))
	$.arrayIndex(x, ((6 - 6) & 0xff))
	$.arrayIndex(x, ((7 - 7) & 0xff))
	$.arrayIndex(x, ((8 - 8) & 0xff))
	$.arrayIndex(x, ((9 - 9) & 0xff))
	$.arrayIndex(x, ((10 - 10) & 0xff))
	$.arrayIndex(x, ((11 - 11) & 0xff))
	$.arrayIndex(x, ((12 - 12) & 0xff))
	$.arrayIndex(x, ((13 - 13) & 0xff))
	$.arrayIndex(x, ((14 - 14) & 0xff))
	$.arrayIndex(x, ((15 - 15) & 0xff))
	$.arrayIndex(x, ((16 - 16) & 0xff))
	$.arrayIndex(x, ((17 - 17) & 0xff))
	$.arrayIndex(x, ((18 - 18) & 0xff))
	$.arrayIndex(x, ((19 - 19) & 0xff))
	$.arrayIndex(x, ((128 - 128) & 0xff))
}

export let _Op_index_0: Uint8Array = $.arrayValue(new Uint8Array([0, 7, 17, 24, 33, 45, 52, 61, 68, 77, 84, 96, 110, 117, 121, 125, 130, 136, 142, 151]))

export function __goscript_set__Op_index_0(__goscriptValue: Uint8Array): void {
	_Op_index_0 = __goscriptValue
}

export function Op_String(i: __goscript_regexp.Op): string {
	switch ((true as boolean)) {
		case (1 <= i) && (i <= 19):
		{
			i = $.uint(i - (1), 8)
			return $.sliceStringOrBytes("NoMatchEmptyMatchLiteralCharClassAnyCharNotNLAnyCharBeginLineEndLineBeginTextEndTextWordBoundaryNoWordBoundaryCaptureStarPlusQuestRepeatConcatAlternate", $.arrayIndex(_Op_index_0, i), $.arrayIndex(_Op_index_0, ((i + 1) & 0xff)))
			break
		}
		case i == 128:
		{
			return "opPseudo"
			break
		}
		default:
		{
			return $.concatString(($.concatString("Op(", strconv.FormatInt($.int64(i), 10))), ")")
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}
