// Generated file based on encoding.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import * as encoding from "@goscript/go.uber.org/yarpc/api/encoding/index.js"
import "@goscript/go.uber.org/yarpc/index.js"
import "@goscript/go.uber.org/yarpc/api/encoding/index.js"

export function FromOptions(opts: $.Slice<yarpc.CallOption>): $.Slice<encoding.CallOption> {
	let newOpts: $.Slice<encoding.CallOption> = $.makeSlice<encoding.CallOption>($.sliceLen(opts), undefined, undefined, () => new encoding.CallOption(undefined, true))
	for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(newOpts), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let o = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as yarpc.CallOption)).clone()
		$.assignStruct((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)], (() => { const __goscriptConvert0 = o; return $.markAsStructValue(new encoding.CallOption({opt: __goscriptConvert0.opt})) })())
	}
	return newOpts
}
