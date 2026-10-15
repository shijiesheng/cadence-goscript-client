// Generated file based on trie13.0.0.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as __goscript_idna10_0_0 from "./idna10.0.0.gs.ts"

import * as __goscript_tables15_0_0 from "./tables15.0.0.gs.ts"

import * as __goscript_trieval from "./trieval.gs.ts"
import "./tables15.0.0.gs.ts"
import "./trieval.gs.ts"

export function info_appendMapping(c: __goscript_trieval.info, b: $.Slice<number>, s: string): $.Slice<number> {
	let index = $.int($.uintShr(c, 3, 16))
	if ($.uint((c & 4), 16) == 0) {
		let p = index
		return $.appendSlice(b, $.stringToBytes($.sliceStringOrBytes(__goscript_tables15_0_0.mappings, $.arrayIndex(__goscript_tables15_0_0.mappingIndex!, p), $.arrayIndex(__goscript_tables15_0_0.mappingIndex!, p + 1))), $.byteSliceHint)
	}
	b = $.appendSlice(b, $.stringToBytes(s), $.byteSliceHint)
	if ($.uint((c & 57344), 16) == 57344) {
		// TODO: support and handle two-byte inline masks
		const __goscriptOperand0 = $.sliceLen(b) - 1
		$.sliceElems(b!)[$.sliceSlot(b!, __goscriptOperand0)] = $.sliceElems(b!)[$.sliceSlot(b!, __goscriptOperand0)] ^ ($.uint(index, 8))
	} else {
		for (let __goscriptSliceWindow0 = $.sliceRange(b), p = $.sliceLen(b) - $.int($.indexString(__goscript_tables15_0_0.xorData, index)); p < __goscriptSliceWindow0.length; p++) {
			index++;
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, p)] = (__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, p)] ^ ($.indexString(__goscript_tables15_0_0.xorData, index))
		}
	}
	return b
}
