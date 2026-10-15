// Generated file based on compressor.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/strings/index.js"

export let RegisteredCompressorNames: $.Slice<string> = null! as $.Slice<string>

export function __goscript_set_RegisteredCompressorNames(__goscriptValue: $.Slice<string>): void {
	RegisteredCompressorNames = __goscriptValue
}

export function IsCompressorNameRegistered(name: string): boolean {
	for (let __goscriptRangeTarget0 = RegisteredCompressorNames, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let compressor = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		if ($.stringEqual(compressor, name)) {
			return true
		}
	}
	return false
}

export function RegisteredCompressors(): string {
	return strings.Join(RegisteredCompressorNames, ",")
}
