// Generated file based on version1.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import type * as __goscript_dce from "./dce.gs.ts"

import type * as __goscript_json from "./json.gs.ts"

import * as __goscript_node from "./node.gs.ts"

import type * as __goscript_sql from "./sql.gs.ts"

import * as __goscript_time from "./time.gs.ts"

import type * as __goscript_uuid from "./uuid.gs.ts"
import "@goscript/encoding/binary/index.js"
import "./node.gs.ts"
import "./time.gs.ts"

export async function NewUUID(): globalThis.Promise<__goscript_uuid.UUID> {
	if (__goscript_node.nodeID == null) {
		await __goscript_node.SetNodeInterface("")
	}

	let [now, seq, err] = await __goscript_time.GetTime()
	if (err != null) {
		return (null as __goscript_uuid.UUID)
	}

	let uuid: $.Slice<number> = $.makeSlice<number>(16, undefined, "byte")

	let time_low = $.uint($.int64And(now, 4294967295n), 32)
	let time_mid = $.uint($.int64And(($.int64Shr(now, 32n)), 65535n), 16)
	let time_hi = $.uint($.int64And(($.int64Shr(now, 48n)), 4095n), 16)
	time_hi = time_hi | (0x1000)

	$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint32($.goSlice(uuid, 0, undefined), time_low)
	$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint16($.goSlice(uuid, 4, undefined), time_mid)
	$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint16($.goSlice(uuid, 6, undefined), time_hi)
	$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint16($.goSlice(uuid, 8, undefined), seq)
	$.copy($.goSlice(uuid, 10, undefined), __goscript_node.nodeID)

	return (uuid as __goscript_uuid.UUID)
}
