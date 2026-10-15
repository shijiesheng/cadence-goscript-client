// Generated file based on state_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_context from "./context.gs.ts"
import "@goscript/strconv/index.js"
import "./context.gs.ts"

export const _state_name: string = "stateTextstateTagstateAttrNamestateAfterNamestateBeforeValuestateHTMLCmtstateRCDATAstateAttrstateURLstateSrcsetstateJSstateJSDqStrstateJSSqStrstateJSTmplLitstateJSRegexpstateJSBlockCmtstateJSLineCmtstateJSHTMLOpenCmtstateJSHTMLCloseCmtstateCSSstateCSSDqStrstateCSSSqStrstateCSSDqURLstateCSSSqURLstateCSSURLstateCSSBlockCmtstateCSSLineCmtstateErrorstateMetaContentstateMetaContentURLstateDead"

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
	$.arrayIndex(x, ((20 - 20) & 0xff))
	$.arrayIndex(x, ((21 - 21) & 0xff))
	$.arrayIndex(x, ((22 - 22) & 0xff))
	$.arrayIndex(x, ((23 - 23) & 0xff))
	$.arrayIndex(x, ((24 - 24) & 0xff))
	$.arrayIndex(x, ((25 - 25) & 0xff))
	$.arrayIndex(x, ((26 - 26) & 0xff))
	$.arrayIndex(x, ((27 - 27) & 0xff))
	$.arrayIndex(x, ((28 - 28) & 0xff))
	$.arrayIndex(x, ((29 - 29) & 0xff))
	$.arrayIndex(x, ((30 - 30) & 0xff))
}

export let _state_index: number[] = $.arrayValue([0, 9, 17, 30, 44, 60, 72, 83, 92, 100, 111, 118, 130, 142, 156, 169, 184, 198, 216, 235, 243, 256, 269, 282, 295, 306, 322, 337, 347, 363, 382, 391])

export function __goscript_set__state_index(__goscriptValue: number[]): void {
	_state_index = __goscriptValue
}

export function state_String(i: __goscript_context.state): string {
	let idx = $.int(i) - 0
	if ((i < 0) || (idx >= 31)) {
		return $.concatString(($.concatString("state(", strconv.FormatInt($.int64(i), 10))), ")")
	}
	return $.sliceStringOrBytes("stateTextstateTagstateAttrNamestateAfterNamestateBeforeValuestateHTMLCmtstateRCDATAstateAttrstateURLstateSrcsetstateJSstateJSDqStrstateJSSqStrstateJSTmplLitstateJSRegexpstateJSBlockCmtstateJSLineCmtstateJSHTMLOpenCmtstateJSHTMLCloseCmtstateCSSstateCSSDqStrstateCSSSqStrstateCSSDqURLstateCSSSqURLstateCSSURLstateCSSBlockCmtstateCSSLineCmtstateErrorstateMetaContentstateMetaContentURLstateDead", $.arrayIndex(_state_index, idx), $.arrayIndex(_state_index, idx + 1))
}
