// Generated file based on decode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as proto from "@goscript/github.com/golang/protobuf/proto/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/github.com/golang/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

export let errInvalidVarint: $.GoError = errors.New("invalid varint32 encountered")

export function __goscript_set_errInvalidVarint(__goscriptValue: $.GoError): void {
	errInvalidVarint = __goscriptValue
}

export async function ReadDelimited(r: io.Reader | null, m: proto.Message | null): globalThis.Promise<[number, $.GoError]> {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	// Per AbstractParser#parsePartialDelimitedFrom with
	// CodedInputStream#readRawVarint32.
	let headerBuf: Uint8Array = $.arrayValue(new Uint8Array(5))
	let bytesRead: number = 0
	let varIntBytes: number = 0
	let messageLength: bigint = 0n
	while (varIntBytes == 0) {
		if (bytesRead >= 5) {
			return [bytesRead, errInvalidVarint]
		}
		// We have to read byte by byte here to avoid reading more bytes
		// than required. Each read byte is appended to what we have
		// read before.
		let [newBytesRead, __goscriptShadow0] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<io.Reader, null>) : $.pointerValue<Exclude<io.Reader, null>>(r)).Read($.goSlice(headerBuf, bytesRead, bytesRead + 1))
		if (newBytesRead == 0) {
			if (__goscriptShadow0 != null) {
				return [bytesRead, __goscriptShadow0]
			}
			// A Reader should not return (0, nil), but if it does,
			// it should be treated as no-op (according to the
			// Reader contract). So let's go on...
			continue
		}
		bytesRead = bytesRead + (newBytesRead)
		// Now present everything read so far to the varint decoder and
		// see if a varint can be decoded already.
		let __goscriptTuple0: any = proto.DecodeVarint($.goSlice(headerBuf, undefined, bytesRead))
		messageLength = __goscriptTuple0[0]
		varIntBytes = __goscriptTuple0[1]
	}

	let messageBuf: $.Slice<number> = $.makeSlice<number>(globalThis.Number(messageLength), undefined, "byte")
	let __goscriptTuple1: any = await io.ReadFull($.pointerValueOrNil(r)!, messageBuf)
	let newBytesRead = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	bytesRead = bytesRead + (newBytesRead)
	if (err != null) {
		return [bytesRead, err]
	}

	return [bytesRead, await proto.Unmarshal(messageBuf, m)]
}
