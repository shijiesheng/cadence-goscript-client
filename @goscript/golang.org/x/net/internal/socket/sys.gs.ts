// Generated file based on sys.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as unsafe from "@goscript/unsafe/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/unsafe/index.js"

export let NativeEndian: binary.ByteOrder | null = null! as binary.ByteOrder | null

export function __goscript_set_NativeEndian(__goscriptValue: binary.ByteOrder | null): void {
	NativeEndian = __goscriptValue
}

function __goscriptInit0(): void {
	let i = $.varRef(1)
	let b: $.VarRef<Uint8Array> | null = $.unsafePointerCast<$.VarRef<Uint8Array> | null>($.arrayPointerFromIndexRef<number>($.indexRef([i.value], 0), 4, 4, 1))
	if ($.arrayIndex($.pointerValue<Uint8Array>(b), 0) == 1) {
		NativeEndian = $.interfaceValue<binary.ByteOrder | null>($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))), "binary.littleEndian", "binary.littleEndian")
	} else {
		NativeEndian = $.interfaceValue<binary.ByteOrder | null>($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))), "binary.bigEndian", "binary.bigEndian")
	}
}

export { __goscriptInit0 }
