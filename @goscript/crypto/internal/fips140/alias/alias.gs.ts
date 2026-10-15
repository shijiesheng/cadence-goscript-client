// Generated file based on alias.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as unsafe from "@goscript/unsafe/index.js"
import "@goscript/unsafe/index.js"

export function AnyOverlap(x: $.Slice<number>, y: $.Slice<number>): boolean {
	return ((($.sliceLen(x) > 0) && ($.sliceLen(y) > 0)) && ($.indexByteAddress(x!, 0, 1) <= $.indexByteAddress(y!, $.sliceLen(y) - 1, 1))) && ($.indexByteAddress(y!, 0, 1) <= $.indexByteAddress(x!, $.sliceLen(x) - 1, 1))
}

export function InexactOverlap(x: $.Slice<number>, y: $.Slice<number>): boolean {
	if ((($.sliceLen(x) == 0) || ($.sliceLen(y) == 0)) || ($.indexAddress(x!, 0) == $.indexAddress(y!, 0))) {
		return false
	}
	return AnyOverlap(x, y)
}
