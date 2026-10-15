// Generated file based on errors_go1_20.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import type * as __goscript_errors from "./errors.gs.ts"
import "@goscript/fmt/index.js"

export function newError(message: string, err: $.GoError, more: $.Slice<$.GoError>): $.GoError {
	let format: string = ""
	let args: $.Slice<any> = null! as $.Slice<any>
	if (!$.stringEqual(message, "")) {
		format = "%w: %s"
		args = $.arrayToSlice<any>([(err as any), message])
	} else {
		format = "%w"
		args = $.arrayToSlice<any>([(err as any)])
	}

	for (let __goscriptRangeTarget0 = more, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let e = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as $.GoError)
		format = $.concatString(format, ": %w")
		args = $.appendOne(args, (e as any), $.appendZeros.nil)
	}

	err = fmt.Errorf(format, ...(args ?? []))
	return err
}
