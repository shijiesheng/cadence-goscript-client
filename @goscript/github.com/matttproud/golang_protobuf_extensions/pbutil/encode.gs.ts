// Generated file based on encode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as io from "@goscript/io/index.js"

import * as proto from "@goscript/github.com/golang/protobuf/proto/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/io/index.js"
import "@goscript/github.com/golang/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

export async function WriteDelimited(w: io.Writer | null, m: proto.Message | null): globalThis.Promise<[number, $.GoError]> {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let __goscriptTuple0: any = await proto.Marshal(m)
	let buffer: $.Slice<number> = __goscriptTuple0[0]
	err = __goscriptTuple0[1]
	if (err != null) {
		return [0, err]
	}

	let buf: Uint8Array = $.arrayValue(new Uint8Array(5))
	let encodedLength = binary.PutUvarint($.goSlice(buf, undefined, undefined), $.uint64($.sliceLen(buffer)))

	let __goscriptTuple1: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.goSlice(buf, undefined, encodedLength))
	let sync = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		return [sync, err]
	}

	let __goscriptTuple2: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(buffer)
	n = __goscriptTuple2[0]
	err = __goscriptTuple2[1]
	return [n + sync, err]
}
