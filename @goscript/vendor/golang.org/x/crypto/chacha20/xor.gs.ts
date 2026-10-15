// Generated file based on xor.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as runtime from "@goscript/runtime/index.js"
import "@goscript/runtime/index.js"

export const unaligned: boolean = false

export function addXor(dst: $.Slice<number>, src: $.Slice<number>, a: number, b: number): void {
	let __goscriptAssign0_0 = $.arrayIndex(src!, 3)
	let __goscriptAssign0_1 = $.arrayIndex(dst!, 3)
	if (false) {
		// The compiler should optimize this code into
		// 32-bit unaligned little endian loads and stores.
		// TODO: delete once the compiler does a reliably
		// good job with the generic code below.
		// See issue #25111 for more details.
		let v = $.uint($.arrayIndex(src!, 0), 32)
		v = v | ($.uint((($.uint($.arrayIndex(src!, 1), 32) << 8) >>> 0), 32))
		v = v | ($.uint((($.uint($.arrayIndex(src!, 2), 32) << 16) >>> 0), 32))
		v = v | ($.uint((($.uint($.arrayIndex(src!, 3), 32) << 24) >>> 0), 32))
		v = v ^ ($.uint(((a + b) >>> 0), 32))
		$.sliceElems(dst!)[$.sliceSlot(dst!, 0)] = $.uint(v, 8)
		$.sliceElems(dst!)[$.sliceSlot(dst!, 1)] = $.uint($.uintShr(v, 8, 32), 8)
		$.sliceElems(dst!)[$.sliceSlot(dst!, 2)] = $.uint($.uintShr(v, 16, 32), 8)
		$.sliceElems(dst!)[$.sliceSlot(dst!, 3)] = $.uint($.uintShr(v, 24, 32), 8)
	} else {
		a = $.uint(a + (b), 32)
		$.sliceElems(dst!)[$.sliceSlot(dst!, 0)] = $.uint($.arrayIndex(src!, 0) ^ $.uint(a, 8), 8)
		$.sliceElems(dst!)[$.sliceSlot(dst!, 1)] = $.uint($.arrayIndex(src!, 1) ^ $.uint($.uintShr(a, 8, 32), 8), 8)
		$.sliceElems(dst!)[$.sliceSlot(dst!, 2)] = $.uint($.arrayIndex(src!, 2) ^ $.uint($.uintShr(a, 16, 32), 8), 8)
		$.sliceElems(dst!)[$.sliceSlot(dst!, 3)] = $.uint($.arrayIndex(src!, 3) ^ $.uint($.uintShr(a, 24, 32), 8), 8)
	}
}
