// Generated file based on join.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"
import "@goscript/fmt/index.js"

export async function QuotedJoin(terms: $.Slice<string>, conjunction: string, none: string): globalThis.Promise<string> {
	switch ($.sliceLen(terms)) {
		case 0:
		{
			return none
			break
		}
		case 1:
		{
			return fmt.Sprintf("%q", $.arrayIndex(terms!, 0))
			break
		}
		case 2:
		{
			return fmt.Sprintf("%q %s %q", $.arrayIndex(terms!, 0), conjunction, $.arrayIndex(terms!, 1))
			break
		}
		default:
		{
			let i = 1
			let inner = ""
			for (let __goscriptSliceWindow0 = $.sliceRange(terms); i < (__goscriptSliceWindow0.length - 1); i++) {
				inner = await fmt.Sprintf("%s, %q", inner, ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as string))
			}
			// first, inner, inner, and/or last
			return fmt.Sprintf("%q%s, %s %q", $.arrayIndex(terms!, 0), inner, conjunction, $.arrayIndex(terms!, i))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}
