// Generated file based on inject.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as protocol from "@goscript/go.uber.org/thriftrw/protocol/index.js"

import * as __goscript_options from "./options.gs.ts"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/index.js"
import "./options.gs.ts"

export function ClientBuilderOptions(_p0: transport.ClientConfig | null, f: reflect.StructField): $.Slice<__goscript_options.ClientOption | null> {
	// Note that we don't use ClientConfig right now but since this code is
	// called by generated code, we still accept it so that we can add logic
	// based on it in the future without breaking the API (and thus, all
	// generated code).

	let optionList: $.Slice<string> = strings.Split(reflect.StructTag_Get(f.Tag, "thrift"), ",")
	let opts: $.Slice<__goscript_options.ClientOption | null> = null! as $.Slice<__goscript_options.ClientOption | null>
	for (let __goscriptRangeTarget0 = optionList, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let opt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		switch (strings.ToLower(opt)) {
			case "multiplexed":
			{
				opts = $.appendOne(opts, __goscript_options.Multiplexed, $.appendZeros.nil)
				break
			}
			case "enveloped":
			{
				opts = $.appendOne(opts, (__goscript_options.Enveloped as __goscript_options.ClientOption | null), $.appendZeros.nil)
				break
			}
			case "nowire":
			{
				opts = $.appendOne(opts, (__goscript_options.NoWire(true) as __goscript_options.ClientOption | null), $.appendZeros.nil)
				break
			}
			default:
			{
				break
			}
		}
	}
	return opts
}
