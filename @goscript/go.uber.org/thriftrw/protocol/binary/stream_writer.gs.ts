// Generated file based on stream_writer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as stream from "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as sync from "@goscript/sync/index.js"

import * as unsafe from "@goscript/unsafe/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as __goscript_common from "./common.gs.ts"

import * as __goscript_envelope from "./envelope.gs.ts"

import * as __goscript_stream_envelope from "./stream_envelope.gs.ts"

import * as __goscript_string_post_go120 from "./string_post_go120.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/sync/index.js"
import "@goscript/unsafe/index.js"
import "@goscript/encoding/binary/index.js"
import "./common.gs.ts"
import "./envelope.gs.ts"
import "./stream_envelope.gs.ts"
import "./string_post_go120.gs.ts"

$.registerTypePackagePath("go.uber.org/thriftrw/protocol/binary", ["binary.StreamWriter"])

export class StreamWriter {
	public get writer(): io.Writer | null {
		return this._fields.writer
	}

	public set writer(value: io.Writer | null) {
		this._fields.writer = value
	}

	// This buffer is re-used every time we need a slice of up to 8 bytes.
	public get buffer(): Uint8Array {
		return this._fields.buffer
	}

	public set buffer(value: Uint8Array) {
		this._fields.buffer = value
	}

	public _fields: {
		writer: io.Writer | null
		buffer: Uint8Array
	}

	constructor(init?: Partial<{writer?: io.Writer | null, buffer?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			writer: init?.writer ?? (null! as io.Writer | null),
			buffer: init?.buffer !== undefined ? $.cloneArrayValue(init.buffer, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)) : $.arrayValue(new Uint8Array(8))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StreamWriter {
		return new StreamWriter(this, true)
	}

	public __goscriptAssign(source: StreamWriter): void {
		const target = this._fields
		const values = source._fields
		target.writer = $.assignFieldValue(target.writer, values.writer, "io.Writer")
		target.buffer = $.assignFieldValue(target.buffer, values.buffer, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8))
	}

	public Close(): $.GoError {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		returnStreamWriter(sw)
		return null
	}

	public async WriteBinary(b: $.Slice<number>): globalThis.Promise<$.GoError> {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		{
			let err = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).WriteInt32($.int($.sliceLen(b), 32)) : StreamWriter.prototype.WriteInt32.call(sw, $.int($.sliceLen(b), 32)))
			if (err != null) {
				return err
			}
		}
		return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).write(b) : StreamWriter.prototype.write.call(sw, b))
	}

	public async WriteBool(b: boolean): globalThis.Promise<$.GoError> {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		if (b) {
			return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).writeByte(1) : StreamWriter.prototype.writeByte.call(sw, 1))
		}
		return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).writeByte(0) : StreamWriter.prototype.writeByte.call(sw, 0))
	}

	public async WriteDouble(d: number): globalThis.Promise<$.GoError> {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		let value = math.Float64bits(d)
		return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).WriteInt64($.int64(value)) : StreamWriter.prototype.WriteInt64.call(sw, $.int64(value)))
	}

	public async WriteEnvelopeBegin(eh: stream.EnvelopeHeader): globalThis.Promise<$.GoError> {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		let version = $.uint($.uint(2147549184, 32) | $.uint(eh.Type, 32), 32)

		{
			let err = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).WriteInt32($.int(version, 32)) : StreamWriter.prototype.WriteInt32.call(sw, $.int(version, 32)))
			if (err != null) {
				return err
			}
		}

		{
			let err = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).WriteString(eh.Name) : StreamWriter.prototype.WriteString.call(sw, eh.Name))
			if (err != null) {
				return err
			}
		}
		// This buffer is re-used every time we need a slice of up to 8 bytes.
		return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).WriteInt32(eh.SeqID) : StreamWriter.prototype.WriteInt32.call(sw, eh.SeqID))
	}

	public WriteEnvelopeEnd(): $.GoError {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		return null
	}

	public async WriteFieldBegin(f: stream.FieldHeader): globalThis.Promise<$.GoError> {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		// type:1
		{
			let err = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).writeByte($.uint(f.Type, 8)) : StreamWriter.prototype.writeByte.call(sw, $.uint(f.Type, 8)))
			if (err != null) {
				return err
			}
		}

		// id:2
		{
			let err = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).WriteInt16(f.ID) : StreamWriter.prototype.WriteInt16.call(sw, f.ID))
			if (err != null) {
				return err
			}
		}

		return null
	}

	public WriteFieldEnd(): $.GoError {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		return null
	}

	public async WriteInt16(i: number): globalThis.Promise<$.GoError> {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		let bs: $.Slice<number> = $.goSlice($.pointerValue<StreamWriter>(sw).buffer, 0, 2)
		$.markAsStructValue($.cloneStructValue(__goscript_common.bigEndian)).PutUint16(bs, $.uint(i, 16))
		return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).write(bs) : StreamWriter.prototype.write.call(sw, bs))
	}

	public async WriteInt32(i: number): globalThis.Promise<$.GoError> {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		let bs: $.Slice<number> = $.goSlice($.pointerValue<StreamWriter>(sw).buffer, 0, 4)
		$.markAsStructValue($.cloneStructValue(__goscript_common.bigEndian)).PutUint32(bs, $.uint(i, 32))
		return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).write(bs) : StreamWriter.prototype.write.call(sw, bs))
	}

	public async WriteInt64(i: bigint): globalThis.Promise<$.GoError> {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		let bs: $.Slice<number> = $.goSlice($.pointerValue<StreamWriter>(sw).buffer, 0, 8)
		$.markAsStructValue($.cloneStructValue(__goscript_common.bigEndian)).PutUint64(bs, $.uint64(i))
		return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).write(bs) : StreamWriter.prototype.write.call(sw, bs))
	}

	public async WriteInt8(i: number): globalThis.Promise<$.GoError> {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).writeByte($.uint(i, 8)) : StreamWriter.prototype.writeByte.call(sw, $.uint(i, 8)))
	}

	public async WriteLegacyEnvelopeBegin(eh: stream.EnvelopeHeader): globalThis.Promise<$.GoError> {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		{
			let err = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).WriteString(eh.Name) : StreamWriter.prototype.WriteString.call(sw, eh.Name))
			if (err != null) {
				return err
			}
		}

		{
			let err = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).writeByte($.uint(eh.Type, 8)) : StreamWriter.prototype.writeByte.call(sw, $.uint(eh.Type, 8)))
			if (err != null) {
				return err
			}
		}

		return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).WriteInt32(eh.SeqID) : StreamWriter.prototype.WriteInt32.call(sw, eh.SeqID))
	}

	public WriteLegacyEnvelopeEnd(): $.GoError {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		return null
	}

	public async WriteListBegin(l: stream.ListHeader): globalThis.Promise<$.GoError> {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		// vtype:1
		{
			let err = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).writeByte($.uint(l.Type, 8)) : StreamWriter.prototype.writeByte.call(sw, $.uint(l.Type, 8)))
			if (err != null) {
				return err
			}
		}

		// length:4
		{
			let err = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).WriteInt32($.int(l.Length, 32)) : StreamWriter.prototype.WriteInt32.call(sw, $.int(l.Length, 32)))
			if (err != null) {
				return err
			}
		}

		return null
	}

	public WriteListEnd(): $.GoError {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		return null
	}

	public async WriteMapBegin(m: stream.MapHeader): globalThis.Promise<$.GoError> {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		// ktype:1
		{
			let err = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).writeByte($.uint(m.KeyType, 8)) : StreamWriter.prototype.writeByte.call(sw, $.uint(m.KeyType, 8)))
			if (err != null) {
				return err
			}
		}

		// vtype:1
		{
			let err = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).writeByte($.uint(m.ValueType, 8)) : StreamWriter.prototype.writeByte.call(sw, $.uint(m.ValueType, 8)))
			if (err != null) {
				return err
			}
		}

		// length:4
		{
			let err = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).WriteInt32($.int(m.Length, 32)) : StreamWriter.prototype.WriteInt32.call(sw, $.int(m.Length, 32)))
			if (err != null) {
				return err
			}
		}

		return null
	}

	public WriteMapEnd(): $.GoError {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		return null
	}

	public async WriteSetBegin(s: stream.SetHeader): globalThis.Promise<$.GoError> {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		// vtype:1
		{
			let err = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).writeByte($.uint(s.Type, 8)) : StreamWriter.prototype.writeByte.call(sw, $.uint(s.Type, 8)))
			if (err != null) {
				return err
			}
		}

		// length:4
		{
			let err = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).WriteInt32($.int(s.Length, 32)) : StreamWriter.prototype.WriteInt32.call(sw, $.int(s.Length, 32)))
			if (err != null) {
				return err
			}
		}

		return null
	}

	public WriteSetEnd(): $.GoError {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		return null
	}

	public async WriteString(s: string): globalThis.Promise<$.GoError> {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		{
			let err = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).WriteInt32($.int($.stringLen(s), 32)) : StreamWriter.prototype.WriteInt32.call(sw, $.int($.stringLen(s), 32)))
			if (err != null) {
				return err
			}
		}
		// This buffer is re-used every time we need a slice of up to 8 bytes.

		let b: $.Slice<number> = (unsafe.Slice!(unsafe.StringData!(s), $.stringLen(s)) as $.Slice<number>)
		return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).write(b) : StreamWriter.prototype.write.call(sw, b))
	}

	public WriteStructBegin(): $.GoError {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		return null
	}

	public async WriteStructEnd(): globalThis.Promise<$.GoError> {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).writeByte(0) : StreamWriter.prototype.writeByte.call(sw, 0))
	}

	public async write(bs: $.Slice<number>): globalThis.Promise<$.GoError> {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		let [, err] = await $.pointerValue<Exclude<io.Writer, null>>($.pointerValue<StreamWriter>(sw).writer).Write(bs)
		return err
	}

	public async writeByte(b: number): globalThis.Promise<$.GoError> {
		const sw: StreamWriter | $.VarRef<StreamWriter> | null = this;
		let bs: $.Slice<number> = $.goSlice($.pointerValue<StreamWriter>(sw).buffer, 0, 1)
		$.sliceElems(bs!)[$.sliceSlot(bs!, 0)] = b
		return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamWriter).write(bs) : StreamWriter.prototype.write.call(sw, bs))
	}

	static __typeInfo = $.registerStructType(
		"binary.StreamWriter",
		() => new StreamWriter(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("WriteBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("WriteBool", [["b", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("WriteDouble", [["d", /* @__PURE__ */ $.basicType("float64")]], ["error"], true), $.methodSignature("WriteEnvelopeBegin", [["eh", "stream.EnvelopeHeader"]], ["error"], true), $.methodSignature("WriteEnvelopeEnd", [], ["error"], true), $.methodSignature("WriteFieldBegin", [["f", "stream.FieldHeader"]], ["error"], true), $.methodSignature("WriteFieldEnd", [], ["error"], true), $.methodSignature("WriteInt16", [["i", /* @__PURE__ */ $.basicType("int16")]], ["error"], true), $.methodSignature("WriteInt32", [["i", /* @__PURE__ */ $.basicType("int32")]], ["error"], true), $.methodSignature("WriteInt64", [["i", /* @__PURE__ */ $.basicType("int64")]], ["error"], true), $.methodSignature("WriteInt8", [["i", /* @__PURE__ */ $.basicType("int8")]], ["error"], true), $.methodSignature("WriteLegacyEnvelopeBegin", [["eh", "stream.EnvelopeHeader"]], ["error"], true), $.methodSignature("WriteLegacyEnvelopeEnd", [], ["error"], true), $.methodSignature("WriteListBegin", [["l", "stream.ListHeader"]], ["error"], true), $.methodSignature("WriteListEnd", [], ["error"], true), $.methodSignature("WriteMapBegin", [["m", "stream.MapHeader"]], ["error"], true), $.methodSignature("WriteMapEnd", [], ["error"], true), $.methodSignature("WriteSetBegin", [["s", "stream.SetHeader"]], ["error"], true), $.methodSignature("WriteSetEnd", [], ["error"], true), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("WriteStructBegin", [], ["error"], true), $.methodSignature("WriteStructEnd", [], ["error"], true), $.methodSignature("write", [["bs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("writeByte", [["b", /* @__PURE__ */ $.basicType("uint8")]], ["error"], true)],
		StreamWriter,
		() => [/* @__PURE__ */ $.structField("writer", "io.Writer", [0], 0, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" }), /* @__PURE__ */ $.structField("buffer", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8), [1], 16, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" })]
	)
}

export let streamWriterPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(new StreamWriter(), "*binary.StreamWriter", /* @__PURE__ */ $.pointerType("binary.StreamWriter"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_streamWriterPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(streamWriterPool.value, __goscriptValue)
}

export async function NewStreamWriter(w: io.Writer | null): globalThis.Promise<StreamWriter | $.VarRef<StreamWriter> | null> {
	let streamWriter: StreamWriter | $.VarRef<StreamWriter> | null = $.mustTypeAssert<StreamWriter | $.VarRef<StreamWriter> | null>(await streamWriterPool.value.Get(), /* @__PURE__ */ $.pointerType("binary.StreamWriter"))
	$.pointerValue<StreamWriter>(streamWriter).writer = w
	return streamWriter
}

export function returnStreamWriter(sw: StreamWriter | $.VarRef<StreamWriter> | null): void {
	$.pointerValue<StreamWriter>(sw).writer = null
	streamWriterPool.value.Put($.interfaceValue(sw, "*binary.StreamWriter", /* @__PURE__ */ $.pointerType("binary.StreamWriter")))
}
