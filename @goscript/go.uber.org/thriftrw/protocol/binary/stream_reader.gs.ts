// Generated file based on stream_reader.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as stream from "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as sync from "@goscript/sync/index.js"

import * as unsafe from "@goscript/unsafe/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as __goscript_common from "./common.gs.ts"

import * as __goscript_envelope from "./envelope.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_stream_envelope from "./stream_envelope.gs.ts"

import * as __goscript_string_post_go120 from "./string_post_go120.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"
import "@goscript/bytes/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/sync/index.js"
import "@goscript/unsafe/index.js"
import "@goscript/encoding/binary/index.js"
import "./common.gs.ts"
import "./envelope.gs.ts"
import "./error.gs.ts"
import "./stream_envelope.gs.ts"
import "./string_post_go120.gs.ts"

$.registerTypePackagePath("go.uber.org/thriftrw/protocol/binary", ["binary.StreamReader"])

export class StreamReader {
	public get reader(): io.Reader | null {
		return this._fields.reader
	}

	public set reader(value: io.Reader | null) {
		this._fields.reader = value
	}

	public get buffer(): Uint8Array {
		return this._fields.buffer
	}

	public set buffer(value: Uint8Array) {
		this._fields.buffer = value
	}

	// discard points to either discardOffset or discardStream based on
	// the implementation of the io.Reader we're using.
	public get discard(): ((_p0: bigint) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.discard
	}

	public set discard(value: ((_p0: bigint) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.discard = value
	}

	// These are bound versions of the discardStream and discardSeek
	// methods on the StreamReader. Putting them here ensures that we don't
	// cause an alloc when we do "sr.discard = sr.discardOffset".
	public get _discardStream(): ((_p0: bigint) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields._discardStream
	}

	public set _discardStream(value: ((_p0: bigint) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields._discardStream = value
	}

	public get _discardSeek(): ((_p0: bigint) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields._discardSeek
	}

	public set _discardSeek(value: ((_p0: bigint) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields._discardSeek = value
	}

	// This field is set only if the wrapped reader is an io.Seeker. ONLY
	// USE if you are discardSeek.
	public get _seeker(): io.Seeker | null {
		return this._fields._seeker
	}

	public set _seeker(value: io.Seeker | null) {
		this._fields._seeker = value
	}

	public _fields: {
		reader: io.Reader | null
		buffer: Uint8Array
		discard: ((_p0: bigint) => $.GoError | globalThis.Promise<$.GoError>) | null
		_discardStream: ((_p0: bigint) => $.GoError | globalThis.Promise<$.GoError>) | null
		_discardSeek: ((_p0: bigint) => $.GoError | globalThis.Promise<$.GoError>) | null
		_seeker: io.Seeker | null
	}

	constructor(init?: Partial<{reader?: io.Reader | null, buffer?: Uint8Array, discard?: ((_p0: bigint) => $.GoError | globalThis.Promise<$.GoError>) | null, _discardStream?: ((_p0: bigint) => $.GoError | globalThis.Promise<$.GoError>) | null, _discardSeek?: ((_p0: bigint) => $.GoError | globalThis.Promise<$.GoError>) | null, _seeker?: io.Seeker | null}>, __goscriptValue?: boolean) {
		this._fields = {
			reader: init?.reader ?? (null! as io.Reader | null),
			buffer: init?.buffer !== undefined ? $.cloneArrayValue(init.buffer, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)) : $.arrayValue(new Uint8Array(8)),
			discard: init?.discard ?? (null! as ((_p0: bigint) => $.GoError | globalThis.Promise<$.GoError>) | null),
			_discardStream: init?._discardStream ?? (null! as ((_p0: bigint) => $.GoError | globalThis.Promise<$.GoError>) | null),
			_discardSeek: init?._discardSeek ?? (null! as ((_p0: bigint) => $.GoError | globalThis.Promise<$.GoError>) | null),
			_seeker: init?._seeker ?? (null! as io.Seeker | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StreamReader {
		return new StreamReader(this, true)
	}

	public __goscriptAssign(source: StreamReader): void {
		const target = this._fields
		const values = source._fields
		target.reader = $.assignFieldValue(target.reader, values.reader, "io.Reader")
		target.buffer = $.assignFieldValue(target.buffer, values.buffer, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8))
		target.discard = values.discard
		target._discardStream = values._discardStream
		target._discardSeek = values._discardSeek
		target._seeker = $.assignFieldValue(target._seeker, values._seeker, "io.Seeker")
	}

	public Close(): $.GoError {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		returnStreamReader(sr)
		return null
	}

	public async ReadBinary(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let [length, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).ReadInt32() : StreamReader.prototype.ReadInt32.call(sr))
		if (err != null) {
			return [null, err]
		}

		if (length < 0) {
			return [null, $.interfaceValue<$.GoError>(await __goscript_error.decodeErrorf("negative length %v specified for binary field", $.arrayToSlice<any>([$.basicInterfaceValue(length, "int32")])), "binary.decodeError", "binary.decodeError")]
		}

		if (length == 0) {
			return [new Uint8Array([]) as $.Slice<number>, null]
		}

		if (length > 1048576) {
			let buf: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
			let [, __goscriptShadow0] = await io.CopyN($.pointerValueOrNil($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, $.pointerValueOrNil($.pointerValue<StreamReader>(sr).reader)!, $.int64(length))
			if ($.comparableEqual(__goscriptShadow0, io.EOF)) {
				// All EOFs are unexpected when streaming
				__goscriptShadow0 = io.ErrUnexpectedEOF
			}

			return [buf.value.Bytes(), __goscriptShadow0]
		}

		let bs: $.Slice<number> = $.makeSlice<number>(length, undefined, "byte")
		let __goscriptTuple0: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).read(bs) : StreamReader.prototype.read.call(sr, bs))
		err = __goscriptTuple0[1]
		return [bs, err]
	}

	public async ReadBool(): globalThis.Promise<[boolean, $.GoError]> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let bs: $.Slice<number> = $.goSlice($.pointerValue<StreamReader>(sr).buffer, 0, 1)
		{
			let [, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).read(bs) : StreamReader.prototype.read.call(sr, bs))
			if (err != null) {
				return [false, err]
			}
		}

		switch ($.arrayIndex(bs!, 0)) {
			case 0:
			{
				return [false, null]
				break
			}
			case 1:
			{
				return [true, null]
				break
			}
			default:
			{
				return [false, $.interfaceValue<$.GoError>(await __goscript_error.decodeErrorf("invalid bool value: %v", $.arrayToSlice<any>([$.basicInterfaceValue($.arrayIndex(bs!, 0), "byte", "uint8")])), "binary.decodeError", "binary.decodeError")]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async ReadDouble(): globalThis.Promise<[number, $.GoError]> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let [val, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).ReadInt64() : StreamReader.prototype.ReadInt64.call(sr))
		return [math.Float64frombits($.uint64(val)), err]
	}

	public async ReadEnvelopeBegin(): globalThis.Promise<[stream.EnvelopeHeader, $.GoError]> {
		const sw: StreamReader | $.VarRef<StreamReader> | null = this;
		let eh: stream.EnvelopeHeader = new stream.EnvelopeHeader(undefined, true)

		let [val, err] = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamReader).ReadInt32() : StreamReader.prototype.ReadInt32.call(sw))
		if (err != null) {
			return [(eh).clone(), err]
		}

		if (val > 0) {
			{
				let __goscriptTuple1: any = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamReader).readNonStrictEnvelope(val) : StreamReader.prototype.readNonStrictEnvelope.call(sw, val))
				eh = $.assignStruct(eh, __goscriptTuple1[0])
				err = __goscriptTuple1[1]
				if (err != null) {
					return [(eh).clone(), err]
				}
			}
		} else {
			{
				let __goscriptTuple2: any = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamReader).readStrictEnvelope(val) : StreamReader.prototype.readStrictEnvelope.call(sw, val))
				eh = $.assignStruct(eh, __goscriptTuple2[0])
				err = __goscriptTuple2[1]
				if (err != null) {
					return [(eh).clone(), err]
				}
			}
		}

		let __goscriptTuple3: any = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamReader).ReadInt32() : StreamReader.prototype.ReadInt32.call(sw))
		let seqID = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return [(eh).clone(), err]
		}

		eh.SeqID = seqID
		return [(eh).clone(), null]
	}

	public ReadEnvelopeEnd(): $.GoError {
		const sw: StreamReader | $.VarRef<StreamReader> | null = this;
		return null
	}

	public async ReadFieldBegin(): globalThis.Promise<[stream.FieldHeader, boolean, $.GoError]> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let fh: stream.FieldHeader = new stream.FieldHeader(undefined, true)
		let ok: boolean = false
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple4: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).ReadInt8() : StreamReader.prototype.ReadInt8.call(sr))
		let fieldType = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [(fh).clone(), false, err]
		}

		// fieldType 0 is the equivalent of the stop field, signaling the end
		if (fieldType == 0) {
			return [(fh).clone(), false, null]
		}

		let __goscriptTuple5: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).ReadInt16() : StreamReader.prototype.ReadInt16.call(sr))
		let fieldID = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [(fh).clone(), false, err]
		}

		fh.ID = fieldID
		fh.Type = $.uint(fieldType, 8)
		return [(fh).clone(), true, null]
	}

	public ReadFieldEnd(): $.GoError {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		return null
	}

	public async ReadInt16(): globalThis.Promise<[number, $.GoError]> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let bs: $.Slice<number> = $.goSlice($.pointerValue<StreamReader>(sr).buffer, 0, 2)
		let [, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).read(bs) : StreamReader.prototype.read.call(sr, bs))
		return [$.int($.markAsStructValue($.cloneStructValue(__goscript_common.bigEndian)).Uint16(bs), 16), err]
	}

	public async ReadInt32(): globalThis.Promise<[number, $.GoError]> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let bs: $.Slice<number> = $.goSlice($.pointerValue<StreamReader>(sr).buffer, 0, 4)
		let [, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).read(bs) : StreamReader.prototype.read.call(sr, bs))
		return [$.int($.markAsStructValue($.cloneStructValue(__goscript_common.bigEndian)).Uint32(bs), 32), err]
	}

	public async ReadInt64(): globalThis.Promise<[bigint, $.GoError]> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let bs: $.Slice<number> = $.goSlice($.pointerValue<StreamReader>(sr).buffer, 0, 8)
		let [, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).read(bs) : StreamReader.prototype.read.call(sr, bs))
		return [$.int64($.markAsStructValue($.cloneStructValue(__goscript_common.bigEndian)).Uint64(bs)), err]
	}

	public async ReadInt8(): globalThis.Promise<[number, $.GoError]> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let bs: $.Slice<number> = $.goSlice($.pointerValue<StreamReader>(sr).buffer, 0, 1)
		let [, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).read(bs) : StreamReader.prototype.read.call(sr, bs))
		return [$.int($.arrayIndex(bs!, 0), 8), err]
	}

	public async ReadListBegin(): globalThis.Promise<[stream.ListHeader, $.GoError]> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let lh: stream.ListHeader = new stream.ListHeader(undefined, true)
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple6: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).readTypeSizeHeader() : StreamReader.prototype.readTypeSizeHeader.call(sr))
		let elemType = __goscriptTuple6[0]
		let listSize = __goscriptTuple6[1]
		err = __goscriptTuple6[2]
		if (err != null) {
			return [(lh).clone(), err]
		}

		lh.Type = $.uint(elemType, 8)
		lh.Length = $.int(listSize)
		return [(lh).clone(), null]
	}

	public ReadListEnd(): $.GoError {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		return null
	}

	public async ReadMapBegin(): globalThis.Promise<[stream.MapHeader, $.GoError]> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let mh: stream.MapHeader = new stream.MapHeader(undefined, true)
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple7: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).ReadInt8() : StreamReader.prototype.ReadInt8.call(sr))
		let keyType = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [(mh).clone(), err]
		}

		let __goscriptTuple8: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).ReadInt8() : StreamReader.prototype.ReadInt8.call(sr))
		let valueType = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return [(mh).clone(), err]
		}

		let __goscriptTuple9: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).ReadInt32() : StreamReader.prototype.ReadInt32.call(sr))
		let size = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			return [(mh).clone(), err]
		}

		if (size < 0) {
			return [(mh).clone(), $.interfaceValue<$.GoError>(await __goscript_error.decodeErrorf("got negative length: %v", $.arrayToSlice<any>([$.basicInterfaceValue(size, "int32")])), "binary.decodeError", "binary.decodeError")]
		}

		mh.KeyType = $.uint(keyType, 8)
		mh.ValueType = $.uint(valueType, 8)
		mh.Length = $.int(size)
		return [(mh).clone(), null]
	}

	public ReadMapEnd(): $.GoError {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		return null
	}

	public async ReadSetBegin(): globalThis.Promise<[stream.SetHeader, $.GoError]> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let sh: stream.SetHeader = new stream.SetHeader(undefined, true)
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple10: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).readTypeSizeHeader() : StreamReader.prototype.readTypeSizeHeader.call(sr))
		let elemType = __goscriptTuple10[0]
		let setSize = __goscriptTuple10[1]
		err = __goscriptTuple10[2]
		if (err != null) {
			return [(sh).clone(), err]
		}

		sh.Type = elemType
		sh.Length = setSize
		return [(sh).clone(), null]
	}

	public ReadSetEnd(): $.GoError {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		return null
	}

	public async ReadString(): globalThis.Promise<[string, $.GoError]> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let __goscriptTuple11: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).ReadBinary() : StreamReader.prototype.ReadBinary.call(sr))
		let bs: $.Slice<number> = __goscriptTuple11[0]
		let err = __goscriptTuple11[1]

		return [unsafe.String!(unsafe.SliceData!(bs), $.sliceLen(bs)), err]
	}

	public ReadStructBegin(): $.GoError {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		return null
	}

	public ReadStructEnd(): $.GoError {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		return null
	}

	public async Skip(t: wire.Type): globalThis.Promise<$.GoError> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		const sr$: StreamReader = sr == null ? $.pointerTarget<StreamReader>(sr) : (sr as any).__isVarRef === true ? (sr as any).value : (sr as any).__goValue === undefined ? (sr as any) : $.pointerTarget<StreamReader>(sr)
		// if it's a primitive type, skip over it based on its width
		{
			let w = fixedWidth(t)
			if (w > 0n) {
				return (sr$ as StreamReader).discard!(w)
			}
		}

		switch (t) {
			case wire.TBinary:
			{
				let [length, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).ReadInt32() : StreamReader.prototype.ReadInt32.call(sr))
				if (err != null) {
					return err
				}

				if (length < 0) {
					return $.interfaceValue<$.GoError>(await __goscript_error.decodeErrorf("got negative length: %v", $.arrayToSlice<any>([$.basicInterfaceValue(length, "int32")])), "binary.decodeError", "binary.decodeError")
				}

				return (sr$ as StreamReader).discard!($.int64(length))
				break
			}
			case wire.TStruct:
			{
				return (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).skipStruct() : StreamReader.prototype.skipStruct.call(sr))
				break
			}
			case wire.TMap:
			{
				return (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).skipMap() : StreamReader.prototype.skipMap.call(sr))
				break
			}
			case wire.TSet:
			{
				return (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).skipList() : StreamReader.prototype.skipList.call(sr))
				break
			}
			case wire.TList:
			{
				return (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).skipList() : StreamReader.prototype.skipList.call(sr))
				break
			}
			default:
			{
				return $.interfaceValue<$.GoError>(await __goscript_error.decodeErrorf("unknown ttype %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(t, "wire.Type", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())])), "binary.decodeError", "binary.decodeError")
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async discardSeek(n: bigint): globalThis.Promise<$.GoError> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let [, err] = await $.pointerValue<Exclude<io.Seeker, null>>($.pointerValue<StreamReader>(sr)._seeker).Seek(n, 1)
		return err
	}

	public async discardStream(n: bigint): globalThis.Promise<$.GoError> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let [, err] = await io.CopyN($.pointerValueOrNil(io.Discard)!, $.pointerValueOrNil($.pointerValue<StreamReader>(sr).reader)!, n)
		if ($.comparableEqual(err, io.EOF)) {
			// All EOFs are unexpected when streaming
			err = io.ErrUnexpectedEOF
		}

		return err
	}

	public async read(bs: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let [n, err] = await io.ReadFull($.pointerValueOrNil($.pointerValue<StreamReader>(sr).reader)!, bs)

		if ($.comparableEqual(err, io.EOF)) {
			// All EOFs are unexpected when streaming
			err = io.ErrUnexpectedEOF
		}

		return [n, err]
	}

	public async readNonStrictEnvelope(length: number): globalThis.Promise<[stream.EnvelopeHeader, $.GoError]> {
		const sw: StreamReader | $.VarRef<StreamReader> | null = this;
		let eh: stream.EnvelopeHeader = new stream.EnvelopeHeader(undefined, true)

		let buf: $.Slice<number> = $.makeSlice<number>(length, undefined, "byte")
		for (let i = 0; i < length; i = ((i + 1) | 0)) {
			let [i8, err] = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamReader).ReadInt8() : StreamReader.prototype.ReadInt8.call(sw))
			if (err != null) {
				return [(eh).clone(), err]
			}
			$.sliceElems(buf!)[$.sliceSlot(buf!, i)] = $.uint(i8, 8)
		}

		let [typ, err] = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamReader).ReadInt8() : StreamReader.prototype.ReadInt8.call(sw))
		if (err != null) {
			return [(eh).clone(), err]
		}
		// All EOFs are unexpected when streaming
		eh.Name = $.bytesToString(buf)
		eh.Type = $.int(typ, 8)
		return [(eh).clone(), null]
	}

	public async readStrictEnvelope(ver: number): globalThis.Promise<[stream.EnvelopeHeader, $.GoError]> {
		const sw: StreamReader | $.VarRef<StreamReader> | null = this;
		let eh: stream.EnvelopeHeader = new stream.EnvelopeHeader(undefined, true)

		{
			let v = $.uint($.uint(ver, 32) & 4294901760, 32)
			if (v != 2147549184) {
				return [(eh).clone(), fmt.Errorf("cannot decode envelope of version: %v", $.basicInterfaceValue(v, "uint32"))]
			}
		}

		let [name, err] = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as StreamReader).ReadString() : StreamReader.prototype.ReadString.call(sw))
		if (err != null) {
			return [(eh).clone(), err]
		}

		eh.Type = $.int(ver, 8)
		eh.Name = name
		return [(eh).clone(), null]
	}

	public async readTypeSizeHeader(): globalThis.Promise<[wire.Type, number, $.GoError]> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let [elemType, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).ReadInt8() : StreamReader.prototype.ReadInt8.call(sr))
		if (err != null) {
			return [0, 0, err]
		}

		let __goscriptTuple12: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).ReadInt32() : StreamReader.prototype.ReadInt32.call(sr))
		let size = __goscriptTuple12[0]
		err = __goscriptTuple12[1]
		if (err != null) {
			return [0, 0, err]
		}

		if (size < 0) {
			return [0, 0, $.interfaceValue<$.GoError>(await __goscript_error.decodeErrorf("got negative length: %v", $.arrayToSlice<any>([$.basicInterfaceValue(size, "int32")])), "binary.decodeError", "binary.decodeError")]
		}

		return [$.uint(elemType, 8), $.int(size), null]
	}

	public async skipList(): globalThis.Promise<$.GoError> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let [elemType, size, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).readTypeSizeHeader() : StreamReader.prototype.readTypeSizeHeader.call(sr))
		if (err != null) {
			return err
		}

		return (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).skipListItems(elemType, size) : StreamReader.prototype.skipListItems.call(sr, elemType, size))
	}

	public async skipListItems(elemType: wire.Type, size: number): globalThis.Promise<$.GoError> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let width = fixedWidth(elemType)
		if (width > 0n) {
			let length = $.int64Mul(width, $.int64(size))
			return $.pointerValue<StreamReader>(sr).discard!(length)
		}

		for (let i = 0; i < size; i++) {
			{
				let err = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).Skip(elemType) : StreamReader.prototype.Skip.call(sr, elemType))
				if (err != null) {
					return err
				}
			}
		}

		return null
	}

	public async skipMap(): globalThis.Promise<$.GoError> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let [key, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).ReadInt8() : StreamReader.prototype.ReadInt8.call(sr))
		if (err != null) {
			return err
		}

		let __goscriptTuple13: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).ReadInt8() : StreamReader.prototype.ReadInt8.call(sr))
		let value = __goscriptTuple13[0]
		err = __goscriptTuple13[1]
		if (err != null) {
			return err
		}

		let __goscriptTuple14: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).ReadInt32() : StreamReader.prototype.ReadInt32.call(sr))
		let size = __goscriptTuple14[0]
		err = __goscriptTuple14[1]
		if (err != null) {
			return err
		}

		if (size < 0) {
			return $.interfaceValue<$.GoError>(await __goscript_error.decodeErrorf("got negative length: %v", $.arrayToSlice<any>([$.basicInterfaceValue(size, "int32")])), "binary.decodeError", "binary.decodeError")
		}

		return (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).skipMapItems($.uint(key, 8), $.uint(value, 8), size) : StreamReader.prototype.skipMapItems.call(sr, $.uint(key, 8), $.uint(value, 8), size))
	}

	public async skipMapItems(key: wire.Type, value: wire.Type, size: number): globalThis.Promise<$.GoError> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let keyWidth = fixedWidth(key)
		let valueWidth = fixedWidth(value)
		if ((keyWidth > 0n) && (valueWidth > 0n)) {
			let length = $.int64Mul($.int64(size), ($.int64Add(keyWidth, valueWidth)))
			return $.pointerValue<StreamReader>(sr).discard!(length)
		}

		for (let i = 0; i < size; i = ((i + 1) | 0)) {
			{
				let err = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).Skip(key) : StreamReader.prototype.Skip.call(sr, key))
				if (err != null) {
					return err
				}
			}

			{
				let err = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).Skip(value) : StreamReader.prototype.Skip.call(sr, value))
				if (err != null) {
					return err
				}
			}
		}

		return null
	}

	public async skipStruct(): globalThis.Promise<$.GoError> {
		const sr: StreamReader | $.VarRef<StreamReader> | null = this;
		let [fieldType, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).ReadInt8() : StreamReader.prototype.ReadInt8.call(sr))
		if (err != null) {
			return err
		}

		while (fieldType != 0) {
			// field id
			{
				let __goscriptShadow1 = (__goscriptAwait = $.pointerValue<StreamReader>(sr).discard!(2n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (__goscriptShadow1 != null) {
					return __goscriptShadow1
				}
			}

			{
				let __goscriptShadow2 = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).Skip($.uint(fieldType, 8)) : StreamReader.prototype.Skip.call(sr, $.uint(fieldType, 8)))
				if (__goscriptShadow2 != null) {
					return __goscriptShadow2
				}
			}

			{
				let __goscriptTuple15: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as StreamReader).ReadInt8() : StreamReader.prototype.ReadInt8.call(sr))
				fieldType = __goscriptTuple15[0]
				err = __goscriptTuple15[1]
				if (err != null) {
					return err
				}
			}
		}

		return null
	}

	static __typeInfo = $.registerStructType(
		"binary.StreamReader",
		() => new StreamReader(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("ReadBinary", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("ReadBool", [], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("ReadDouble", [], [/* @__PURE__ */ $.basicType("float64"), "error"], true), $.methodSignature("ReadEnvelopeBegin", [], ["stream.EnvelopeHeader", "error"], true), $.methodSignature("ReadEnvelopeEnd", [], ["error"], true), $.methodSignature("ReadFieldBegin", [], [["fh", "stream.FieldHeader"], ["ok", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]], true), $.methodSignature("ReadFieldEnd", [], ["error"], true), $.methodSignature("ReadInt16", [], [/* @__PURE__ */ $.basicType("int16"), "error"], true), $.methodSignature("ReadInt32", [], [/* @__PURE__ */ $.basicType("int32"), "error"], true), $.methodSignature("ReadInt64", [], [/* @__PURE__ */ $.basicType("int64"), "error"], true), $.methodSignature("ReadInt8", [], [/* @__PURE__ */ $.basicType("int8"), "error"], true), $.methodSignature("ReadListBegin", [], [["lh", "stream.ListHeader"], ["err", "error"]], true), $.methodSignature("ReadListEnd", [], ["error"], true), $.methodSignature("ReadMapBegin", [], [["mh", "stream.MapHeader"], ["err", "error"]], true), $.methodSignature("ReadMapEnd", [], ["error"], true), $.methodSignature("ReadSetBegin", [], [["sh", "stream.SetHeader"], ["err", "error"]], true), $.methodSignature("ReadSetEnd", [], ["error"], true), $.methodSignature("ReadString", [], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("ReadStructBegin", [], ["error"], true), $.methodSignature("ReadStructEnd", [], ["error"], true), $.methodSignature("Skip", [["t", /* @__PURE__ */ $.basicType("uint8", "wire.Type")]], ["error"], true), $.methodSignature("discardSeek", [["n", /* @__PURE__ */ $.basicType("int64")]], ["error"], true), $.methodSignature("discardStream", [["n", /* @__PURE__ */ $.basicType("int64")]], ["error"], true), $.methodSignature("read", [["bs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("readNonStrictEnvelope", [["length", /* @__PURE__ */ $.basicType("int32")]], ["stream.EnvelopeHeader", "error"], true), $.methodSignature("readStrictEnvelope", [["ver", /* @__PURE__ */ $.basicType("int32")]], ["stream.EnvelopeHeader", "error"], true), $.methodSignature("readTypeSizeHeader", [], [/* @__PURE__ */ $.basicType("uint8", "wire.Type"), /* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("skipList", [], ["error"], true), $.methodSignature("skipListItems", [["elemType", /* @__PURE__ */ $.basicType("uint8", "wire.Type")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("skipMap", [], ["error"], true), $.methodSignature("skipMapItems", [["key", /* @__PURE__ */ $.basicType("uint8", "wire.Type")], ["value", /* @__PURE__ */ $.basicType("uint8", "wire.Type")], ["size", /* @__PURE__ */ $.basicType("int32")]], ["error"], true), $.methodSignature("skipStruct", [], ["error"], true)],
		StreamReader,
		() => [/* @__PURE__ */ $.structField("reader", "io.Reader", [0], 0, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" }), /* @__PURE__ */ $.structField("buffer", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8), [1], 16, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" }), /* @__PURE__ */ $.structField("discard", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int64")], results: ["error"] } as $.FunctionTypeInfo), [2], 24, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" }), /* @__PURE__ */ $.structField("_discardStream", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int64")], results: ["error"] } as $.FunctionTypeInfo), [3], 32, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" }), /* @__PURE__ */ $.structField("_discardSeek", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int64")], results: ["error"] } as $.FunctionTypeInfo), [4], 40, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" }), /* @__PURE__ */ $.structField("_seeker", "io.Seeker", [5], 48, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" })]
	)
}

export const bytesAllocThreshold: number = 1048576

export function fixedWidth(t: wire.Type): bigint {
	switch (t) {
		case wire.TBool:
		{
			return 1n
			break
		}
		case wire.TI8:
		{
			return 1n
			break
		}
		case wire.TDouble:
		{
			return 8n
			break
		}
		case wire.TI16:
		{
			return 2n
			break
		}
		case wire.TI32:
		{
			return 4n
			break
		}
		case wire.TI64:
		{
			return 8n
			break
		}
		default:
		{
			return -1n
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export let streamReaderPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	let sr: StreamReader | $.VarRef<StreamReader> | null = new StreamReader()
	$.pointerValue<StreamReader>(sr)._discardSeek = $.functionValue(((__receiver) => (n: bigint) => __receiver.discardSeek(n))($.pointerValue<StreamReader>(sr)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int64")], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/thriftrw/protocol/binary.(*StreamReader).discardSeek-fm")
	$.pointerValue<StreamReader>(sr)._discardStream = $.functionValue(((__receiver) => (n: bigint) => __receiver.discardStream(n))($.pointerValue<StreamReader>(sr)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int64")], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/thriftrw/protocol/binary.(*StreamReader).discardStream-fm")
	return $.interfaceValue(sr, "*binary.StreamReader", /* @__PURE__ */ $.pointerType("binary.StreamReader"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_streamReaderPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(streamReaderPool.value, __goscriptValue)
}

export async function NewStreamReader(r: io.Reader | null): globalThis.Promise<StreamReader | $.VarRef<StreamReader> | null> {
	let sr: StreamReader | $.VarRef<StreamReader> | null = $.mustTypeAssert<StreamReader | $.VarRef<StreamReader> | null>(await streamReaderPool.value.Get(), /* @__PURE__ */ $.pointerType("binary.StreamReader"))
	let sr$: StreamReader = sr == null ? $.pointerTarget<StreamReader>(sr) : (sr as any).__isVarRef === true ? (sr as any).value : (sr as any).__goValue === undefined ? (sr as any) : $.pointerTarget<StreamReader>(sr);
	;(sr$ as StreamReader).reader = r;
	;(sr$ as StreamReader).discard = (sr$ as StreamReader)._discardStream
	{
		let [seeker, ok] = $.typeAssertTuple<io.Seeker | null>(r, "io.Seeker")
		if (ok) {
			// If we're wrapping a seeker (like *offsetReader), we can skip
			// bytes much more efficiently.
			;(sr$ as StreamReader)._seeker = seeker;
			;(sr$ as StreamReader).discard = (sr$ as StreamReader)._discardSeek
		}
	}
	return sr
}

export function returnStreamReader(sr: StreamReader | $.VarRef<StreamReader> | null): void {
	const sr$: StreamReader = sr == null ? $.pointerTarget<StreamReader>(sr) : (sr as any).__isVarRef === true ? (sr as any).value : (sr as any).__goValue === undefined ? (sr as any) : $.pointerTarget<StreamReader>(sr);
	;(sr$ as StreamReader).reader = null;
	;(sr$ as StreamReader)._seeker = null
	streamReaderPool.value.Put($.interfaceValue(sr, "*binary.StreamReader", /* @__PURE__ */ $.pointerType("binary.StreamReader")))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (wire.Type_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "wire.Type"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
