// Generated file based on common.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"
import "@goscript/encoding/binary/index.js"

export let bigEndian: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian)))

export function __goscript_set_bigEndian(__goscriptValue: any): void {
	$.assignStruct(bigEndian, __goscriptValue)
}
