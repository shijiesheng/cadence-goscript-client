// Generated file based on json.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import type * as __goscript_dce from "./dce.gs.ts"

import type * as __goscript_node from "./node.gs.ts"

import type * as __goscript_sql from "./sql.gs.ts"

import type * as __goscript_time from "./time.gs.ts"

import * as __goscript_uuid from "./uuid.gs.ts"
import "@goscript/errors/index.js"
import "./uuid.gs.ts"

export function UUID_MarshalJSON(u: __goscript_uuid.UUID): [$.Slice<number>, $.GoError] {
	if ($.sliceLen((u as __goscript_uuid.UUID)) != 16) {
		return [new Uint8Array([34, 34]), null]
	}
	let js: Uint8Array = $.arrayValue(new Uint8Array(38))
	js[0] = 34
	__goscript_uuid.encodeHex($.goSlice(js, 1, undefined), (u as __goscript_uuid.UUID))
	js[37] = 34
	return [$.goSlice(js, undefined, undefined), null]
}

export function UUID_UnmarshalJSON(u: $.VarRef<__goscript_uuid.UUID> | null, data: $.Slice<number>): $.GoError {
	if ($.stringEqual($.bytesToString(data), "\"\"")) {
		return null
	}
	if ($.arrayIndex(data!, 0) != 34) {
		return errors.New("invalid UUID format")
	}
	data = $.goSlice(data, 1, $.sliceLen(data) - 1)
	let uu: __goscript_uuid.UUID = (__goscript_uuid.Parse($.bytesToString(data)) as __goscript_uuid.UUID)
	if (uu == null) {
		return errors.New("invalid UUID format")
	}
	u!.value = (uu as __goscript_uuid.UUID)
	return null
}
