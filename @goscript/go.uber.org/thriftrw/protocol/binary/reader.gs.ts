// Generated file based on reader.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as stream from "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_envelope from "./envelope.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_lazy_list from "./lazy_list.gs.ts"

import * as __goscript_stream_envelope from "./stream_envelope.gs.ts"

import * as __goscript_stream_reader from "./stream_reader.gs.ts"

import * as __goscript_string_post_go120 from "./string_post_go120.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"
import "@goscript/io/index.js"
import "./envelope.gs.ts"
import "./error.gs.ts"
import "./lazy_list.gs.ts"
import "./stream_envelope.gs.ts"
import "./stream_reader.gs.ts"
import "./string_post_go120.gs.ts"

$.registerTypePackagePath("go.uber.org/thriftrw/protocol/binary", ["binary.offsetReader", "binary.reader", "binary.Reader"])

export class offsetReader {
	public get offset(): bigint {
		return this._fields.offset
	}

	public set offset(value: bigint) {
		this._fields.offset = value
	}

	public get reader(): io.ReaderAt | null {
		return this._fields.reader
	}

	public set reader(value: io.ReaderAt | null) {
		this._fields.reader = value
	}

	public _fields: {
		offset: bigint
		reader: io.ReaderAt | null
	}

	constructor(init?: Partial<{offset?: bigint, reader?: io.ReaderAt | null}>, __goscriptValue?: boolean) {
		this._fields = {
			offset: init?.offset ?? (0n as bigint),
			reader: init?.reader ?? (null! as io.ReaderAt | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): offsetReader {
		return new offsetReader(this, true)
	}

	public __goscriptAssign(source: offsetReader): void {
		const target = this._fields
		const values = source._fields
		target.offset = values.offset
		target.reader = $.assignFieldValue(target.reader, values.reader, "io.ReaderAt")
	}

	public async Read(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let or: offsetReader | $.VarRef<offsetReader> | null = this;
		const or$: offsetReader = or == null ? $.pointerTarget<offsetReader>(or) : (or as any).__isVarRef === true ? (or as any).value : (or as any).__goValue === undefined ? (or as any) : $.pointerTarget<offsetReader>(or)
		let [n, err] = await $.pointerValue<Exclude<io.ReaderAt, null>>((or$ as offsetReader).reader).ReadAt(p, (or$ as offsetReader).offset);
		;(or$ as offsetReader).offset = $.int64Add((or$ as offsetReader).offset, $.int64(n))

		return [n, err]
	}

	public Seek(offset: bigint, whence: number): [bigint, $.GoError] {
		let or: offsetReader | $.VarRef<offsetReader> | null = this;
		const or$: offsetReader = or == null ? $.pointerTarget<offsetReader>(or) : (or as any).__isVarRef === true ? (or as any).value : (or as any).__goValue === undefined ? (or as any) : $.pointerTarget<offsetReader>(or)
		switch (whence) {
			case io.SeekStart:
			{
				;(or$ as offsetReader).offset = offset
				break
			}
			case io.SeekCurrent:
			{
				;(or$ as offsetReader).offset = $.int64Add((or$ as offsetReader).offset, offset)
				break
			}
			default:
			{
				return [(or$ as offsetReader).offset, fmt.Errorf("unsupported whence %d", $.basicInterfaceValue(whence, "int"))]
				break
			}
		}
		return [(or$ as offsetReader).offset, null]
	}

	static __typeInfo = $.registerStructType(
		"binary.offsetReader",
		() => new offsetReader(),
		() => [$.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("Seek", [["offset", /* @__PURE__ */ $.basicType("int64")], ["whence", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int64"), "error"], true)],
		offsetReader,
		() => [/* @__PURE__ */ $.structField("offset", /* @__PURE__ */ $.basicType("int64"), [0], 0, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" }), /* @__PURE__ */ $.structField("reader", "io.ReaderAt", [1], 8, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" })]
	)
}

export class reader {
	public get or(): offsetReader | $.VarRef<offsetReader> | null {
		return this._fields.or
	}

	public set or(value: offsetReader | $.VarRef<offsetReader> | null) {
		this._fields.or = value
	}

	public get sr(): __goscript_stream_reader.StreamReader | $.VarRef<__goscript_stream_reader.StreamReader> | null {
		return this._fields.sr
	}

	public set sr(value: __goscript_stream_reader.StreamReader | $.VarRef<__goscript_stream_reader.StreamReader> | null) {
		this._fields.sr = value
	}

	public _fields: {
		or: offsetReader | $.VarRef<offsetReader> | null
		sr: __goscript_stream_reader.StreamReader | $.VarRef<__goscript_stream_reader.StreamReader> | null
	}

	constructor(init?: Partial<{or?: offsetReader | $.VarRef<offsetReader> | null, sr?: __goscript_stream_reader.StreamReader | $.VarRef<__goscript_stream_reader.StreamReader> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			or: init?.or ?? (null! as offsetReader | $.VarRef<offsetReader> | null),
			sr: init?.sr ?? (null! as __goscript_stream_reader.StreamReader | $.VarRef<__goscript_stream_reader.StreamReader> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): reader {
		return new reader(this, true)
	}

	public __goscriptAssign(source: reader): void {
		const target = this._fields
		const values = source._fields
		target.or = values.or
		target.sr = values.sr
	}

	public async ReadValue(t: wire.Type, off: bigint): globalThis.Promise<[wire.Value, bigint, $.GoError]> {
		let r: reader | $.VarRef<reader> | null = this;
		const r$: reader = r == null ? $.pointerTarget<reader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<reader>(r)
		$.pointerValue<offsetReader>((r$ as reader).or).offset = off

		switch (t) {
			case wire.TBool:
			{
				let [b, err] = await __goscript_stream_reader.StreamReader.prototype.ReadBool.call((r$ as reader).sr)
				return [wire.NewValueBool(b), $.pointerValue<offsetReader>((r$ as reader).or).offset, err]
				break
			}
			case wire.TI8:
			{
				let [b, err] = await __goscript_stream_reader.StreamReader.prototype.ReadInt8.call((r$ as reader).sr)
				return [wire.NewValueI8($.int(b, 8)), $.pointerValue<offsetReader>((r$ as reader).or).offset, err]
				break
			}
			case wire.TDouble:
			{
				let [value, err] = await __goscript_stream_reader.StreamReader.prototype.ReadDouble.call((r$ as reader).sr)
				return [wire.NewValueDouble(value), $.pointerValue<offsetReader>((r$ as reader).or).offset, err]
				break
			}
			case wire.TI16:
			{
				let [n, err] = await __goscript_stream_reader.StreamReader.prototype.ReadInt16.call((r$ as reader).sr)
				return [wire.NewValueI16(n), $.pointerValue<offsetReader>((r$ as reader).or).offset, err]
				break
			}
			case wire.TI32:
			{
				let [n, err] = await __goscript_stream_reader.StreamReader.prototype.ReadInt32.call((r$ as reader).sr)
				return [wire.NewValueI32(n), $.pointerValue<offsetReader>((r$ as reader).or).offset, err]
				break
			}
			case wire.TI64:
			{
				let [n, err] = await __goscript_stream_reader.StreamReader.prototype.ReadInt64.call((r$ as reader).sr)
				return [wire.NewValueI64(n), $.pointerValue<offsetReader>((r$ as reader).or).offset, err]
				break
			}
			case wire.TBinary:
			{
				let __goscriptTuple0: any = await __goscript_stream_reader.StreamReader.prototype.ReadBinary.call((r$ as reader).sr)
				let v: $.Slice<number> = __goscriptTuple0[0]
				let err = __goscriptTuple0[1]
				return [wire.NewValueBinary(v), $.pointerValue<offsetReader>((r$ as reader).or).offset, err]
				break
			}
			case wire.TStruct:
			{
				let [s, err] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as reader).readStructStream() : reader.prototype.readStructStream.call(r))
				return [wire.NewValueStruct(s), $.pointerValue<offsetReader>((r$ as reader).or).offset, err]
				break
			}
			case wire.TMap:
			{
				let [m, err] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as reader).readMapStream() : reader.prototype.readMapStream.call(r))
				return [wire.NewValueMap(m), $.pointerValue<offsetReader>((r$ as reader).or).offset, err]
				break
			}
			case wire.TSet:
			{
				let [s, err] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as reader).readSetStream() : reader.prototype.readSetStream.call(r))
				return [wire.NewValueSet(s), $.pointerValue<offsetReader>((r$ as reader).or).offset, err]
				break
			}
			case wire.TList:
			{
				let [l, err] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as reader).readListStream() : reader.prototype.readListStream.call(r))
				return [wire.NewValueList(l), $.pointerValue<offsetReader>((r$ as reader).or).offset, err]
				break
			}
			default:
			{
				return [new wire.Value(undefined, true), $.pointerValue<offsetReader>((r$ as reader).or).offset, $.interfaceValue<$.GoError>(await __goscript_error.decodeErrorf("unknown ttype %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(t, "wire.Type", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())])), "binary.decodeError", "binary.decodeError")]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public close(): $.GoError {
		let r: reader | $.VarRef<reader> | null = this;
		const r$: reader = r == null ? $.pointerTarget<reader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<reader>(r)
		let err = __goscript_stream_reader.StreamReader.prototype.Close.call((r$ as reader).sr);
		;(r$ as reader).sr = null;
		;(r$ as reader).or = null

		return err
	}

	public async readListStream(): globalThis.Promise<[wire.ValueList | null, $.GoError]> {
		const r: reader | $.VarRef<reader> | null = this;
		const r$: reader = r == null ? $.pointerTarget<reader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<reader>(r)
		let [lh, err] = await __goscript_stream_reader.StreamReader.prototype.ReadListBegin.call((r$ as reader).sr)
		if (err != null) {
			return [null, err]
		}

		let start = $.pointerValue<offsetReader>((r$ as reader).or).offset
		{
			let __goscriptShadow0 = await __goscript_stream_reader.StreamReader.prototype.skipListItems.call((r$ as reader).sr, lh.Type, lh.Length)
			if (__goscriptShadow0 != null) {
				return [null, __goscriptShadow0]
			}
		}

		{
			let __goscriptShadow1 = __goscript_stream_reader.StreamReader.prototype.ReadListEnd.call((r$ as reader).sr)
			if (__goscriptShadow1 != null) {
				return [null, __goscriptShadow1]
			}
		}

		let items: __goscript_lazy_list.lazyValueList | $.VarRef<__goscript_lazy_list.lazyValueList> | null = await __goscript_lazy_list.borrowLazyValueList()
		let items$: __goscript_lazy_list.lazyValueList = items == null ? $.pointerTarget<__goscript_lazy_list.lazyValueList>(items) : (items as any).__isVarRef === true ? (items as any).value : (items as any).__goValue === undefined ? (items as any) : $.pointerTarget<__goscript_lazy_list.lazyValueList>(items);
		;(items$ as __goscript_lazy_list.lazyValueList).count = $.int(lh.Length, 32);
		;(items$ as __goscript_lazy_list.lazyValueList).typ = lh.Type;
		;(items$ as __goscript_lazy_list.lazyValueList).readerAt = $.pointerValue<offsetReader>((r$ as reader).or).reader;
		;(items$ as __goscript_lazy_list.lazyValueList).startOffset = start

		return [$.interfaceValue<wire.ValueList | null>(items, "*binary.lazyValueList", /* @__PURE__ */ $.pointerType("binary.lazyValueList")), null]
	}

	public async readMapStream(): globalThis.Promise<[wire.MapItemList | null, $.GoError]> {
		const r: reader | $.VarRef<reader> | null = this;
		const r$: reader = r == null ? $.pointerTarget<reader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<reader>(r)
		let [mh, err] = await __goscript_stream_reader.StreamReader.prototype.ReadMapBegin.call((r$ as reader).sr)
		if (err != null) {
			return [null, err]
		}

		let start = $.pointerValue<offsetReader>((r$ as reader).or).offset
		{
			let __goscriptShadow2 = await __goscript_stream_reader.StreamReader.prototype.skipMapItems.call((r$ as reader).sr, mh.KeyType, mh.ValueType, $.int(mh.Length, 32))
			if (__goscriptShadow2 != null) {
				return [null, __goscriptShadow2]
			}
		}

		{
			let __goscriptShadow3 = __goscript_stream_reader.StreamReader.prototype.ReadMapEnd.call((r$ as reader).sr)
			if (__goscriptShadow3 != null) {
				return [null, __goscriptShadow3]
			}
		}

		let items: __goscript_lazy_list.lazyMapItemList | $.VarRef<__goscript_lazy_list.lazyMapItemList> | null = await __goscript_lazy_list.borrowLazyMapItemList()
		let items$: __goscript_lazy_list.lazyMapItemList = items == null ? $.pointerTarget<__goscript_lazy_list.lazyMapItemList>(items) : (items as any).__isVarRef === true ? (items as any).value : (items as any).__goValue === undefined ? (items as any) : $.pointerTarget<__goscript_lazy_list.lazyMapItemList>(items);
		;(items$ as __goscript_lazy_list.lazyMapItemList).ktype = mh.KeyType;
		;(items$ as __goscript_lazy_list.lazyMapItemList).vtype = mh.ValueType;
		;(items$ as __goscript_lazy_list.lazyMapItemList).count = $.int(mh.Length, 32);
		;(items$ as __goscript_lazy_list.lazyMapItemList).readerAt = $.pointerValue<offsetReader>((r$ as reader).or).reader;
		;(items$ as __goscript_lazy_list.lazyMapItemList).startOffset = start

		return [$.interfaceValue<wire.MapItemList | null>(items, "*binary.lazyMapItemList", /* @__PURE__ */ $.pointerType("binary.lazyMapItemList")), null]
	}

	public async readSetStream(): globalThis.Promise<[wire.ValueList | null, $.GoError]> {
		const r: reader | $.VarRef<reader> | null = this;
		const r$: reader = r == null ? $.pointerTarget<reader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<reader>(r)
		let [sh, err] = await __goscript_stream_reader.StreamReader.prototype.ReadSetBegin.call((r$ as reader).sr)
		if (err != null) {
			return [null, err]
		}

		let start = $.pointerValue<offsetReader>((r$ as reader).or).offset
		{
			let __goscriptShadow4 = await __goscript_stream_reader.StreamReader.prototype.skipListItems.call((r$ as reader).sr, sh.Type, sh.Length)
			if (__goscriptShadow4 != null) {
				return [null, __goscriptShadow4]
			}
		}

		{
			let __goscriptShadow5 = __goscript_stream_reader.StreamReader.prototype.ReadSetEnd.call((r$ as reader).sr)
			if (__goscriptShadow5 != null) {
				return [null, __goscriptShadow5]
			}
		}

		let items: __goscript_lazy_list.lazyValueList | $.VarRef<__goscript_lazy_list.lazyValueList> | null = await __goscript_lazy_list.borrowLazyValueList()
		let items$: __goscript_lazy_list.lazyValueList = items == null ? $.pointerTarget<__goscript_lazy_list.lazyValueList>(items) : (items as any).__isVarRef === true ? (items as any).value : (items as any).__goValue === undefined ? (items as any) : $.pointerTarget<__goscript_lazy_list.lazyValueList>(items);
		;(items$ as __goscript_lazy_list.lazyValueList).count = $.int(sh.Length, 32);
		;(items$ as __goscript_lazy_list.lazyValueList).typ = sh.Type;
		;(items$ as __goscript_lazy_list.lazyValueList).readerAt = $.pointerValue<offsetReader>((r$ as reader).or).reader;
		;(items$ as __goscript_lazy_list.lazyValueList).startOffset = start

		return [$.interfaceValue<wire.ValueList | null>(items, "*binary.lazyValueList", /* @__PURE__ */ $.pointerType("binary.lazyValueList")), null]
	}

	public async readStructStream(): globalThis.Promise<[wire.Struct, $.GoError]> {
		const r: reader | $.VarRef<reader> | null = this;
		const r$: reader = r == null ? $.pointerTarget<reader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<reader>(r)
		let fields: $.Slice<wire.Field> = null! as $.Slice<wire.Field>

		{
			let err = __goscript_stream_reader.StreamReader.prototype.ReadStructBegin.call((r$ as reader).sr)
			if (err != null) {
				return [new wire.Struct(undefined, true), err]
			}
		}

		let [fh, ok, err] = await __goscript_stream_reader.StreamReader.prototype.ReadFieldBegin.call((r$ as reader).sr)
		if (err != null) {
			return [new wire.Struct(undefined, true), err]
		}

		while (ok) {
			let [val, , __goscriptShadow6] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as reader).ReadValue(fh.Type, $.pointerValue<offsetReader>((r$ as reader).or).offset) : reader.prototype.ReadValue.call(r, fh.Type, $.pointerValue<offsetReader>((r$ as reader).or).offset))
			if (__goscriptShadow6 != null) {
				return [new wire.Struct(undefined, true), __goscriptShadow6]
			}

			fields = $.appendOne(fields, new wire.Field({ID: fh.ID, Value: val}, true))
			{
				let __goscriptShadow7 = __goscript_stream_reader.StreamReader.prototype.ReadFieldEnd.call((r$ as reader).sr)
				if (__goscriptShadow7 != null) {
					return [new wire.Struct(undefined, true), __goscriptShadow7]
				}
			}

			{
				let __goscriptTuple1: any = await __goscript_stream_reader.StreamReader.prototype.ReadFieldBegin.call((r$ as reader).sr)
				fh = $.assignStruct(fh, __goscriptTuple1[0])
				ok = __goscriptTuple1[1]
				__goscriptShadow6 = __goscriptTuple1[2]
				if (__goscriptShadow6 != null) {
					return [new wire.Struct(undefined, true), __goscriptShadow6]
				}
			}
		}

		{
			let __goscriptShadow8 = __goscript_stream_reader.StreamReader.prototype.ReadStructEnd.call((r$ as reader).sr)
			if (__goscriptShadow8 != null) {
				return [new wire.Struct(undefined, true), __goscriptShadow8]
			}
		}

		return [new wire.Struct({Fields: fields}, true), null]
	}

	static __typeInfo = $.registerStructType(
		"binary.reader",
		() => new reader(),
		() => [$.methodSignature("ReadValue", [["t", /* @__PURE__ */ $.basicType("uint8", "wire.Type")], ["off", /* @__PURE__ */ $.basicType("int64")]], ["wire.Value", /* @__PURE__ */ $.basicType("int64"), "error"], true), $.methodSignature("close", [], ["error"], true), $.methodSignature("readListStream", [], ["wire.ValueList", "error"], true), $.methodSignature("readMapStream", [], ["wire.MapItemList", "error"], true), $.methodSignature("readSetStream", [], ["wire.ValueList", "error"], true), $.methodSignature("readStructStream", [], ["wire.Struct", "error"], true)],
		reader,
		() => [/* @__PURE__ */ $.structField("or", /* @__PURE__ */ $.pointerType("binary.offsetReader"), [0], 0, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" }), /* @__PURE__ */ $.structField("sr", /* @__PURE__ */ $.pointerType("binary.StreamReader"), [1], 8, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" })]
	)
}

export class Reader {
	public get reader(): io.ReaderAt | null {
		return this._fields.reader
	}

	public set reader(value: io.ReaderAt | null) {
		this._fields.reader = value
	}

	public _fields: {
		reader: io.ReaderAt | null
	}

	constructor(init?: Partial<{reader?: io.ReaderAt | null}>, __goscriptValue?: boolean) {
		this._fields = {
			reader: init?.reader ?? (null! as io.ReaderAt | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Reader {
		return new Reader(this, true)
	}

	public __goscriptAssign(source: Reader): void {
		const target = this._fields
		const values = source._fields
		target.reader = $.assignFieldValue(target.reader, values.reader, "io.ReaderAt")
	}

	public async ReadEnveloped(): globalThis.Promise<[wire.Envelope, $.GoError]> {
		const bw: Reader | $.VarRef<Reader> | null = this;
		let e: wire.Envelope = new wire.Envelope(undefined, true)
		let __goscriptTuple2: any = await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as Reader).ReadValue(8, 0n) : Reader.prototype.ReadValue.call(bw, 8, 0n))
		let val = $.varRef(__goscriptTuple2[0])
		let off = __goscriptTuple2[1]
		let err = __goscriptTuple2[2]
		if (err != null) {
			return [new wire.Envelope(undefined, true), err]
		}

		let initial = val.value.GetI32()
		if (initial > 0) {
			let __goscriptTuple3: any = await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as Reader).readNonStrictNameType() : Reader.prototype.readNonStrictNameType.call(bw))
			e = $.assignStruct(e, __goscriptTuple3[0])
			off = __goscriptTuple3[1]
			err = __goscriptTuple3[2]
		} else {
			let __goscriptTuple4: any = await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as Reader).readStrictNameType(initial, off) : Reader.prototype.readStrictNameType.call(bw, initial, off))
			e = $.assignStruct(e, __goscriptTuple4[0])
			off = __goscriptTuple4[1]
			err = __goscriptTuple4[2]
		}
		if (err != null) {
			return [(e).clone(), err]
		}

		let __goscriptTuple5: any = await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as Reader).ReadValue(8, off) : Reader.prototype.ReadValue.call(bw, 8, off))
		val.value = $.assignStruct(val.value, __goscriptTuple5[0])
		off = __goscriptTuple5[1]
		err = __goscriptTuple5[2]
		e.SeqID = val.value.GetI32()
		if (err != null) {
			return [(e).clone(), err]
		}

		let __goscriptTuple6: any = await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as Reader).ReadValue(12, off) : Reader.prototype.ReadValue.call(bw, 12, off))
		$.assignStruct(e.Value, __goscriptTuple6[0])
		err = __goscriptTuple6[2]
		if (err != null) {
			return [new wire.Envelope(undefined, true), err]
		}

		return [(e).clone(), null]
	}

	public async ReadValue(t: wire.Type, off: bigint): globalThis.Promise<[wire.Value, bigint, $.GoError]> {
		const br: Reader | $.VarRef<Reader> | null = this;
		using __defer = new $.DisposableStack()
		let __goscriptShadow9 = $.varRef(await newReader($.pointerValue<Reader>(br).reader, off))
		__defer.defer(() => { __goscriptShadow9.value.close() })
		return await __goscriptShadow9.value.ReadValue(t, off)
	}

	public async readNonStrictNameType(): globalThis.Promise<[wire.Envelope, bigint, $.GoError]> {
		const bw: Reader | $.VarRef<Reader> | null = this;
		let e: wire.Envelope = new wire.Envelope(undefined, true)

		let __goscriptTuple7: any = await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as Reader).ReadValue(11, 0n) : Reader.prototype.ReadValue.call(bw, 11, 0n))
		let name = $.varRef(__goscriptTuple7[0])
		let off = __goscriptTuple7[1]
		let err = __goscriptTuple7[2]
		if (err != null) {
			return [(e).clone(), off, err]
		}
		e.Name = name.value.GetString()

		let __goscriptTuple8: any = await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as Reader).ReadValue(3, off) : Reader.prototype.ReadValue.call(bw, 3, off))
		let val = $.varRef(__goscriptTuple8[0])
		off = __goscriptTuple8[1]
		err = __goscriptTuple8[2]
		if (err != null) {
			return [(e).clone(), off, err]
		}
		e.Type = $.int(val.value.GetI8(), 8)

		return [(e).clone(), off, null]
	}

	public async readStrictNameType(initial: number, off: bigint): globalThis.Promise<[wire.Envelope, bigint, $.GoError]> {
		const bw: Reader | $.VarRef<Reader> | null = this;
		let e: wire.Envelope = new wire.Envelope(undefined, true)

		{
			let v = $.uint($.uint(initial, 32) & 4294901760, 32)
			if (v != 2147549184) {
				return [(e).clone(), off, fmt.Errorf("cannot decode envelope of version: %v", $.basicInterfaceValue(v, "uint32"))]
			}
		}

		e.Type = $.int(initial, 8)

		let __goscriptTuple9: any = await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as Reader).ReadValue(11, off) : Reader.prototype.ReadValue.call(bw, 11, off))
		let name = $.varRef(__goscriptTuple9[0])
		off = __goscriptTuple9[1]
		let err = __goscriptTuple9[2]
		e.Name = name.value.GetString()
		return [(e).clone(), off, err]
	}

	static __typeInfo = $.registerStructType(
		"binary.Reader",
		() => new Reader(),
		() => [$.methodSignature("ReadEnveloped", [], ["wire.Envelope", "error"], true), $.methodSignature("ReadValue", [["t", /* @__PURE__ */ $.basicType("uint8", "wire.Type")], ["off", /* @__PURE__ */ $.basicType("int64")]], ["wire.Value", /* @__PURE__ */ $.basicType("int64"), "error"], true), $.methodSignature("readNonStrictNameType", [], ["wire.Envelope", /* @__PURE__ */ $.basicType("int64"), "error"], true), $.methodSignature("readStrictNameType", [["initial", /* @__PURE__ */ $.basicType("int32")], ["off", /* @__PURE__ */ $.basicType("int64")]], ["wire.Envelope", /* @__PURE__ */ $.basicType("int64"), "error"], true)],
		Reader,
		() => [/* @__PURE__ */ $.structField("reader", "io.ReaderAt", [0], 0, false, { pkgPath: "go.uber.org/thriftrw/protocol/binary" })]
	)
}

export async function newReader(r: io.ReaderAt | null, off: bigint): globalThis.Promise<reader> {
	let or = $.varRef(new offsetReader({reader: r, offset: off}, true))

	return (await (async () => { const __goscriptLiteralField0 = await __goscript_stream_reader.NewStreamReader($.interfaceValue<io.Reader | null>(or, "*binary.offsetReader", /* @__PURE__ */ $.pointerType("binary.offsetReader"))); return new reader({or: or, sr: __goscriptLiteralField0}, true) })())
}

export function NewReader(r: io.ReaderAt | null): Reader {
	return new Reader({reader: r}, true)
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
