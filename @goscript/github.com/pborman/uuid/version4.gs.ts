// Generated file based on version4.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as __goscript_dce from "./dce.gs.ts"

import type * as __goscript_json from "./json.gs.ts"

import type * as __goscript_node from "./node.gs.ts"

import type * as __goscript_sql from "./sql.gs.ts"

import type * as __goscript_time from "./time.gs.ts"

import * as __goscript_util from "./util.gs.ts"

import type * as __goscript_uuid from "./uuid.gs.ts"
import "./util.gs.ts"

export async function NewRandom(): globalThis.Promise<__goscript_uuid.UUID> {
	let uuid: $.Slice<number> = $.makeSlice<number>(16, undefined, "byte")
	await __goscript_util.randomBits(uuid)
	$.sliceElems(uuid!)[$.sliceSlot(uuid!, 6)] = $.uint(($.arrayIndex(uuid!, 6) & 0x0f) | 0x40, 8)
	$.sliceElems(uuid!)[$.sliceSlot(uuid!, 8)] = $.uint(($.arrayIndex(uuid!, 8) & 0x3f) | 0x80, 8)
	return (uuid as __goscript_uuid.UUID)
}
