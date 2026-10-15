// Generated file based on header_transport.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as zlib from "@goscript/compress/zlib/index.js"

import * as context from "@goscript/context/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript__type from "./type.gs.ts"

import * as __goscript_application_exception from "./application_exception.gs.ts"

import * as __goscript_binary_protocol from "./binary_protocol.gs.ts"

import * as __goscript_buf_pool from "./buf_pool.gs.ts"

import * as __goscript_compact_protocol from "./compact_protocol.gs.ts"

import * as __goscript_configuration from "./configuration.gs.ts"

import type * as __goscript_exception from "./exception.gs.ts"

import * as __goscript_memory_buffer from "./memory_buffer.gs.ts"

import type * as __goscript_messagetype from "./messagetype.gs.ts"

import * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_protocol_exception from "./protocol_exception.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"

import * as __goscript_transport_exception from "./transport_exception.gs.ts"

import * as __goscript_transport_factory from "./transport_factory.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/compress/zlib/index.js"
import "@goscript/context/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/time/index.js"
import "./application_exception.gs.ts"
import "./binary_protocol.gs.ts"
import "./buf_pool.gs.ts"
import "./compact_protocol.gs.ts"
import "./configuration.gs.ts"
import "./memory_buffer.gs.ts"
import "./protocol.gs.ts"
import "./protocol_exception.gs.ts"
import "./transport.gs.ts"
import "./transport_exception.gs.ts"
import "./transport_factory.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.headerMeta", "thrift.clientType", "thrift.THeaderMap", "thrift.THeaderProtocolID", "thrift.THeaderTransformID", "thrift.TransformReader", "thrift.TransformWriter", "thrift.THeaderInfoType", "thrift.THeaderTransport", "thrift.THeaderTransportFactory"])

export type clientType = number

export type THeaderMap = globalThis.Map<string, string> | null

$.registerNamedType("thrift.THeaderMap", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")));

export type THeaderProtocolID = number

$.registerNamedValueType(
	"thrift.THeaderProtocolID",
	{GetProtocol: (receiver: any, ...args: any[]) => (THeaderProtocolID_GetProtocol as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Validate: (receiver: any, ...args: any[]) => (THeaderProtocolID_Validate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GetProtocol", [["trans", "thrift.TTransport"]], ["thrift.TProtocol", "error"]), $.methodSignature("Validate", [], ["error"])]
);

$.registerNamedValueType(
	"*thrift.THeaderProtocolID",
	{GetProtocol: (receiver: any, ...args: any[]) => (THeaderProtocolID_GetProtocol as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Validate: (receiver: any, ...args: any[]) => (THeaderProtocolID_Validate as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GetProtocol", [["trans", "thrift.TTransport"]], ["thrift.TProtocol", "error"]), $.methodSignature("Validate", [], ["error"])]
);

export type THeaderTransformID = number

export type THeaderInfoType = number

export class headerMeta {
	public get MagicFlags(): number {
		return this._fields.MagicFlags
	}

	public set MagicFlags(value: number) {
		this._fields.MagicFlags = value
	}

	public get SequenceID(): number {
		return this._fields.SequenceID
	}

	public set SequenceID(value: number) {
		this._fields.SequenceID = value
	}

	public get HeaderLength(): number {
		return this._fields.HeaderLength
	}

	public set HeaderLength(value: number) {
		this._fields.HeaderLength = value
	}

	public _fields: {
		MagicFlags: number
		SequenceID: number
		HeaderLength: number
	}

	constructor(init?: Partial<{MagicFlags?: number, SequenceID?: number, HeaderLength?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			MagicFlags: init?.MagicFlags ?? (0 as number),
			SequenceID: init?.SequenceID ?? (0 as number),
			HeaderLength: init?.HeaderLength ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): headerMeta {
		return new headerMeta(this, true)
	}

	public __goscriptAssign(source: headerMeta): void {
		const target = this._fields
		const values = source._fields
		target.MagicFlags = values.MagicFlags
		target.SequenceID = values.SequenceID
		target.HeaderLength = values.HeaderLength
	}

	static __typeInfo = $.registerStructType(
		"thrift.headerMeta",
		() => new headerMeta(),
		() => [],
		headerMeta,
		() => [/* @__PURE__ */ $.structField("MagicFlags", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true), /* @__PURE__ */ $.structField("SequenceID", /* @__PURE__ */ $.basicType("int32"), [1], 4, true), /* @__PURE__ */ $.structField("HeaderLength", /* @__PURE__ */ $.basicType("uint16"), [2], 8, true)]
	)
}

export class TransformReader {
	public get Reader(): io.Reader | null {
		return this._fields.Reader
	}

	public set Reader(value: io.Reader | null) {
		this._fields.Reader = value
	}

	public get closers(): $.Slice<io.Closer | null> {
		return this._fields.closers
	}

	public set closers(value: $.Slice<io.Closer | null>) {
		this._fields.closers = value
	}

	public _fields: {
		Reader: io.Reader | null
		closers: $.Slice<io.Closer | null>
	}

	constructor(init?: Partial<{Reader?: io.Reader | null, closers?: $.Slice<io.Closer | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			Reader: init?.Reader ?? (null! as io.Reader | null),
			closers: init?.closers ?? (null! as $.Slice<io.Closer | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TransformReader {
		return new TransformReader(this, true)
	}

	public __goscriptAssign(source: TransformReader): void {
		const target = this._fields
		const values = source._fields
		target.Reader = $.assignFieldValue(target.Reader, values.Reader, "io.Reader")
		target.closers = values.closers
	}

	public async AddTransform(id: THeaderTransformID): globalThis.Promise<$.GoError> {
		let tr: TransformReader | $.VarRef<TransformReader> | null = this;
		const tr$: TransformReader = tr == null ? $.pointerTarget<TransformReader>(tr) : (tr as any).__isVarRef === true ? (tr as any).value : (tr as any).__goValue === undefined ? (tr as any) : $.pointerTarget<TransformReader>(tr)
		switch (id) {
			default:
			{
				return (__goscript_application_exception.NewTApplicationException(8, await fmt.Sprintf("THeaderTransformID %d not supported", $.namedValueInterfaceValue<any>(id, "thrift.THeaderTransformID", {}, /* @__PURE__ */ $.basicType("int32", "thrift.THeaderTransformID")))) as $.GoError)
				break
			}
			case 0:
			{
				break
			}
			case 1:
			{
				let [readCloser, err] = await zlib.NewReader($.pointerValueOrNil((tr$ as TransformReader).Reader)!)
				if (err != null) {
					return err
				}
				;(tr$ as TransformReader).Reader = (readCloser as io.Reader | null);
				;(tr$ as TransformReader).closers = $.appendOne((tr$ as TransformReader).closers, (readCloser as io.Closer | null), $.appendZeros.nil)
				break
			}
		}
		return null
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const tr: TransformReader | $.VarRef<TransformReader> | null = this;
		const tr$: TransformReader = tr == null ? $.pointerTarget<TransformReader>(tr) : (tr as any).__isVarRef === true ? (tr as any).value : (tr as any).__goValue === undefined ? (tr as any) : $.pointerTarget<TransformReader>(tr)
		// Call closers in reversed order
		for (let i = $.sliceLen((tr$ as TransformReader).closers) - 1; i >= 0; i--) {
			{
				let err = await $.pointerValue<Exclude<io.Closer, null>>($.arrayIndex((tr$ as TransformReader).closers!, i)).Close()
				if (err != null) {
					return err
				}
			}
		}
		return null
	}

	public async Read(p: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<io.Reader | null, null>>(this.Reader).Read(p)
	}

	static __typeInfo = $.registerStructType(
		"thrift.TransformReader",
		() => new TransformReader(),
		() => [$.methodSignature("AddTransform", [["id", /* @__PURE__ */ $.basicType("int32", "thrift.THeaderTransformID")]], ["error"], true), $.methodSignature("Close", [], ["error"], true), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])],
		TransformReader,
		() => [/* @__PURE__ */ $.structField("Reader", "io.Reader", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("closers", /* @__PURE__ */ $.sliceType("io.Closer"), [1], 16, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export class TransformWriter {
	public get Writer(): io.Writer | null {
		return this._fields.Writer
	}

	public set Writer(value: io.Writer | null) {
		this._fields.Writer = value
	}

	public get closers(): $.Slice<io.Closer | null> {
		return this._fields.closers
	}

	public set closers(value: $.Slice<io.Closer | null>) {
		this._fields.closers = value
	}

	public _fields: {
		Writer: io.Writer | null
		closers: $.Slice<io.Closer | null>
	}

	constructor(init?: Partial<{Writer?: io.Writer | null, closers?: $.Slice<io.Closer | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			Writer: init?.Writer ?? (null! as io.Writer | null),
			closers: init?.closers ?? (null! as $.Slice<io.Closer | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TransformWriter {
		return new TransformWriter(this, true)
	}

	public __goscriptAssign(source: TransformWriter): void {
		const target = this._fields
		const values = source._fields
		target.Writer = $.assignFieldValue(target.Writer, values.Writer, "io.Writer")
		target.closers = values.closers
	}

	public async AddTransform(id: THeaderTransformID): globalThis.Promise<$.GoError> {
		let tw: TransformWriter | $.VarRef<TransformWriter> | null = this;
		const tw$: TransformWriter = tw == null ? $.pointerTarget<TransformWriter>(tw) : (tw as any).__isVarRef === true ? (tw as any).value : (tw as any).__goValue === undefined ? (tw as any) : $.pointerTarget<TransformWriter>(tw)
		switch (id) {
			default:
			{
				return (__goscript_application_exception.NewTApplicationException(8, await fmt.Sprintf("THeaderTransformID %d not supported", $.namedValueInterfaceValue<any>(id, "thrift.THeaderTransformID", {}, /* @__PURE__ */ $.basicType("int32", "thrift.THeaderTransformID")))) as $.GoError)
				break
			}
			case 0:
			{
				break
			}
			case 1:
			{
				let writeCloser: zlib.Writer | $.VarRef<zlib.Writer> | null = zlib.NewWriter($.pointerValueOrNil((tw$ as TransformWriter).Writer)!);
				;(tw$ as TransformWriter).Writer = $.interfaceValue<io.Writer | null>(writeCloser, "*zlib.Writer", /* @__PURE__ */ $.pointerType("zlib.Writer"));
				;(tw$ as TransformWriter).closers = $.appendOne((tw$ as TransformWriter).closers, $.interfaceValue<io.Closer | null>(writeCloser, "*zlib.Writer", /* @__PURE__ */ $.pointerType("zlib.Writer")), $.appendZeros.nil)
				break
			}
		}
		return null
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const tw: TransformWriter | $.VarRef<TransformWriter> | null = this;
		const tw$: TransformWriter = tw == null ? $.pointerTarget<TransformWriter>(tw) : (tw as any).__isVarRef === true ? (tw as any).value : (tw as any).__goValue === undefined ? (tw as any) : $.pointerTarget<TransformWriter>(tw)
		// Call closers in reversed order
		for (let i = $.sliceLen((tw$ as TransformWriter).closers) - 1; i >= 0; i--) {
			{
				let err = await $.pointerValue<Exclude<io.Closer, null>>($.arrayIndex((tw$ as TransformWriter).closers!, i)).Close()
				if (err != null) {
					return err
				}
			}
		}
		return null
	}

	public async Write(p: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<io.Writer | null, null>>(this.Writer).Write(p)
	}

	static __typeInfo = $.registerStructType(
		"thrift.TransformWriter",
		() => new TransformWriter(),
		() => [$.methodSignature("AddTransform", [["id", /* @__PURE__ */ $.basicType("int32", "thrift.THeaderTransformID")]], ["error"], true), $.methodSignature("Close", [], ["error"], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])],
		TransformWriter,
		() => [/* @__PURE__ */ $.structField("Writer", "io.Writer", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("closers", /* @__PURE__ */ $.sliceType("io.Closer"), [1], 16, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export class THeaderTransport {
	public get SequenceID(): number {
		return this._fields.SequenceID
	}

	public set SequenceID(value: number) {
		this._fields.SequenceID = value
	}

	public get Flags(): number {
		return this._fields.Flags
	}

	public set Flags(value: number) {
		this._fields.Flags = value
	}

	public get transport(): __goscript_transport.TTransport | null {
		return this._fields.transport
	}

	public set transport(value: __goscript_transport.TTransport | null) {
		this._fields.transport = value
	}

	// THeaderMap for read and write
	public get readHeaders(): THeaderMap {
		return this._fields.readHeaders
	}

	public set readHeaders(value: THeaderMap) {
		this._fields.readHeaders = value
	}

	public get writeHeaders(): THeaderMap {
		return this._fields.writeHeaders
	}

	public set writeHeaders(value: THeaderMap) {
		this._fields.writeHeaders = value
	}

	// Reading related variables.
	public get reader(): bufio.Reader | $.VarRef<bufio.Reader> | null {
		return this._fields.reader
	}

	public set reader(value: bufio.Reader | $.VarRef<bufio.Reader> | null) {
		this._fields.reader = value
	}

	// When frame is detected, we read the frame fully into frameBuffer.
	public get frameBuffer(): bytes.Buffer | $.VarRef<bytes.Buffer> | null {
		return this._fields.frameBuffer
	}

	public set frameBuffer(value: bytes.Buffer | $.VarRef<bytes.Buffer> | null) {
		this._fields.frameBuffer = value
	}

	// When it's non-nil, Read should read from frameReader instead of
	// reader, and EOF error indicates end of frame instead of end of all
	// transport.
	public get frameReader(): io.ReadCloser | null {
		return this._fields.frameReader
	}

	public set frameReader(value: io.ReadCloser | null) {
		this._fields.frameReader = value
	}

	// Writing related variables
	public get writeBuffer(): bytes.Buffer | $.VarRef<bytes.Buffer> | null {
		return this._fields.writeBuffer
	}

	public set writeBuffer(value: bytes.Buffer | $.VarRef<bytes.Buffer> | null) {
		this._fields.writeBuffer = value
	}

	public get writeTransforms(): $.Slice<THeaderTransformID> {
		return this._fields.writeTransforms
	}

	public set writeTransforms(value: $.Slice<THeaderTransformID>) {
		this._fields.writeTransforms = value
	}

	public get clientType(): clientType {
		return this._fields.clientType
	}

	public set clientType(value: clientType) {
		this._fields.clientType = value
	}

	public get protocolID(): THeaderProtocolID {
		return this._fields.protocolID
	}

	public set protocolID(value: THeaderProtocolID) {
		this._fields.protocolID = value
	}

	public get cfg(): __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null {
		return this._fields.cfg
	}

	public set cfg(value: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null) {
		this._fields.cfg = value
	}

	// buffer is used in the following scenarios to avoid repetitive
	// allocations, while 4 is big enough for all those scenarios:
	//
	// * header padding (max size 4)
	// * write the frame size (size 4)
	public get buffer(): Uint8Array {
		return this._fields.buffer
	}

	public set buffer(value: Uint8Array) {
		this._fields.buffer = value
	}

	public _fields: {
		SequenceID: number
		Flags: number
		transport: __goscript_transport.TTransport | null
		readHeaders: THeaderMap
		writeHeaders: THeaderMap
		reader: bufio.Reader | $.VarRef<bufio.Reader> | null
		frameBuffer: bytes.Buffer | $.VarRef<bytes.Buffer> | null
		frameReader: io.ReadCloser | null
		writeBuffer: bytes.Buffer | $.VarRef<bytes.Buffer> | null
		writeTransforms: $.Slice<THeaderTransformID>
		clientType: clientType
		protocolID: THeaderProtocolID
		cfg: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null
		buffer: Uint8Array
	}

	constructor(init?: Partial<{SequenceID?: number, Flags?: number, transport?: __goscript_transport.TTransport | null, readHeaders?: THeaderMap, writeHeaders?: THeaderMap, reader?: bufio.Reader | $.VarRef<bufio.Reader> | null, frameBuffer?: bytes.Buffer | $.VarRef<bytes.Buffer> | null, frameReader?: io.ReadCloser | null, writeBuffer?: bytes.Buffer | $.VarRef<bytes.Buffer> | null, writeTransforms?: $.Slice<THeaderTransformID>, clientType?: clientType, protocolID?: THeaderProtocolID, cfg?: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null, buffer?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			SequenceID: init?.SequenceID ?? (0 as number),
			Flags: init?.Flags ?? (0 as number),
			transport: init?.transport ?? (null! as __goscript_transport.TTransport | null),
			readHeaders: init?.readHeaders ?? (null! as THeaderMap),
			writeHeaders: init?.writeHeaders ?? (null! as THeaderMap),
			reader: init?.reader ?? (null! as bufio.Reader | $.VarRef<bufio.Reader> | null),
			frameBuffer: init?.frameBuffer ?? (null! as bytes.Buffer | $.VarRef<bytes.Buffer> | null),
			frameReader: init?.frameReader ?? (null! as io.ReadCloser | null),
			writeBuffer: init?.writeBuffer ?? (null! as bytes.Buffer | $.VarRef<bytes.Buffer> | null),
			writeTransforms: init?.writeTransforms ?? (null! as $.Slice<THeaderTransformID>),
			clientType: init?.clientType ?? (0 as clientType),
			protocolID: init?.protocolID ?? (0 as THeaderProtocolID),
			cfg: init?.cfg ?? (null! as __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null),
			buffer: init?.buffer !== undefined ? $.cloneArrayValue(init.buffer, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 4)) : $.arrayValue(new Uint8Array(4))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): THeaderTransport {
		return new THeaderTransport(this, true)
	}

	public __goscriptAssign(source: THeaderTransport): void {
		const target = this._fields
		const values = source._fields
		target.SequenceID = values.SequenceID
		target.Flags = values.Flags
		target.transport = $.assignFieldValue(target.transport, values.transport, "thrift.TTransport")
		target.readHeaders = values.readHeaders
		target.writeHeaders = values.writeHeaders
		target.reader = values.reader
		target.frameBuffer = values.frameBuffer
		target.frameReader = $.assignFieldValue(target.frameReader, values.frameReader, "io.ReadCloser")
		target.writeBuffer = values.writeBuffer
		target.writeTransforms = values.writeTransforms
		target.clientType = values.clientType
		target.protocolID = values.protocolID
		target.cfg = values.cfg
		target.buffer = $.assignFieldValue(target.buffer, values.buffer, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 4))
	}

	public async AddTransform(transform: THeaderTransformID): globalThis.Promise<$.GoError> {
		let t: THeaderTransport | $.VarRef<THeaderTransport> | null = this;
		const t$: THeaderTransport = t == null ? $.pointerTarget<THeaderTransport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<THeaderTransport>(t)
		if (!$.mapGet<THeaderTransformID, boolean, boolean>(supportedTransformIDs, transform, false)[0]) {
			return (await __goscript_protocol_exception.NewTProtocolExceptionWithType(5, fmt.Errorf("THeaderTransformID %d not supported", $.namedValueInterfaceValue<any>(transform, "thrift.THeaderTransformID", {}, /* @__PURE__ */ $.basicType("int32", "thrift.THeaderTransformID")))) as $.GoError)
		}
		;(t$ as THeaderTransport).writeTransforms = $.appendOne((t$ as THeaderTransport).writeTransforms, $.int(transform, 32))
		return null
	}

	public ClearWriteHeaders(): void {
		let t: THeaderTransport | $.VarRef<THeaderTransport> | null = this;
		$.pointerValue<THeaderTransport>(t).writeHeaders = $.makeMap<string, string>()
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const t: THeaderTransport | $.VarRef<THeaderTransport> | null = this;
		{
			let err = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as THeaderTransport).Flush(context.Background()) : THeaderTransport.prototype.Flush.call(t, context.Background()))
			if (err != null) {
				return err
			}
		}
		return $.pointerValue<Exclude<__goscript_transport.TTransport, null>>($.pointerValue<THeaderTransport>(t).transport).Close()
	}

	public async Flush(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		let t: THeaderTransport | $.VarRef<THeaderTransport> | null = this;
		using __defer = new $.DisposableStack()
		const t$: THeaderTransport = t == null ? $.pointerTarget<THeaderTransport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<THeaderTransport>(t)
		if (((t$ as THeaderTransport).writeBuffer == null) || (bytes.Buffer.prototype.Len.call($.pointerValue<bytes.Buffer>((t$ as THeaderTransport).writeBuffer)) == 0)) {
			return null
		}

		const __goscriptDeferArg0 = $.fieldRef((t$ as THeaderTransport)._fields, "writeBuffer")
		__defer.defer(() => { __goscript_buf_pool.returnBufToPool(__goscriptDeferArg0) })

		switch ((t$ as THeaderTransport).clientType) {
			default:
			{
			}
			case 0:
			{
				;(t$ as THeaderTransport).clientType = 1
			}
			case 1:
			{
				let headers: __goscript_memory_buffer.TMemoryBuffer | $.VarRef<__goscript_memory_buffer.TMemoryBuffer> | null = __goscript_memory_buffer.NewTMemoryBuffer()
				let hp: __goscript_compact_protocol.TCompactProtocol | $.VarRef<__goscript_compact_protocol.TCompactProtocol> | null = await __goscript_compact_protocol.NewTCompactProtocol($.interfaceValue<__goscript_transport.TTransport | null>(headers, "*thrift.TMemoryBuffer", /* @__PURE__ */ $.pointerType("thrift.TMemoryBuffer")))
				await (hp !== null && (hp as any).__isVarRef !== true && (hp as any).__goValue === undefined ? ((hp as any) as __goscript_compact_protocol.TCompactProtocol).SetTConfiguration((t$ as THeaderTransport).cfg) : __goscript_compact_protocol.TCompactProtocol.prototype.SetTConfiguration.call(hp, (t$ as THeaderTransport).cfg))
				{
					let [, err] = await (hp !== null && (hp as any).__isVarRef !== true && (hp as any).__goValue === undefined ? ((hp as any) as __goscript_compact_protocol.TCompactProtocol).writeVarint32($.int((t$ as THeaderTransport).protocolID, 32)) : __goscript_compact_protocol.TCompactProtocol.prototype.writeVarint32.call(hp, $.int((t$ as THeaderTransport).protocolID, 32)))
					if (err != null) {
						return (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
					}
				}
				{
					let [, err] = await (hp !== null && (hp as any).__isVarRef !== true && (hp as any).__goValue === undefined ? ((hp as any) as __goscript_compact_protocol.TCompactProtocol).writeVarint32($.int($.sliceLen((t$ as THeaderTransport).writeTransforms), 32)) : __goscript_compact_protocol.TCompactProtocol.prototype.writeVarint32.call(hp, $.int($.sliceLen((t$ as THeaderTransport).writeTransforms), 32)))
					if (err != null) {
						return (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
					}
				}
				for (let __goscriptRangeTarget1 = (t$ as THeaderTransport).writeTransforms, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
					let transform = $.int((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as THeaderTransformID), 32)
					{
						let [, err] = await (hp !== null && (hp as any).__isVarRef !== true && (hp as any).__goValue === undefined ? ((hp as any) as __goscript_compact_protocol.TCompactProtocol).writeVarint32($.int(transform, 32)) : __goscript_compact_protocol.TCompactProtocol.prototype.writeVarint32.call(hp, $.int(transform, 32)))
						if (err != null) {
							return (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
						}
					}
				}
				if ($.len((t$ as THeaderTransport).writeHeaders) > 0) {
					{
						let [, err] = await (hp !== null && (hp as any).__isVarRef !== true && (hp as any).__goValue === undefined ? ((hp as any) as __goscript_compact_protocol.TCompactProtocol).writeVarint32(1) : __goscript_compact_protocol.TCompactProtocol.prototype.writeVarint32.call(hp, 1))
						if (err != null) {
							return (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
						}
					}
					{
						let [, err] = await (hp !== null && (hp as any).__isVarRef !== true && (hp as any).__goValue === undefined ? ((hp as any) as __goscript_compact_protocol.TCompactProtocol).writeVarint32($.int($.len((t$ as THeaderTransport).writeHeaders), 32)) : __goscript_compact_protocol.TCompactProtocol.prototype.writeVarint32.call(hp, $.int($.len((t$ as THeaderTransport).writeHeaders), 32)))
						if (err != null) {
							return (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
						}
					}
					for (const [key, value] of (t$ as THeaderTransport).writeHeaders?.entries() ?? []) {
						{
							let err = await (hp !== null && (hp as any).__isVarRef !== true && (hp as any).__goValue === undefined ? ((hp as any) as __goscript_compact_protocol.TCompactProtocol).WriteString(ctx, key) : __goscript_compact_protocol.TCompactProtocol.prototype.WriteString.call(hp, ctx, key))
							if (err != null) {
								return (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
							}
						}
						{
							let err = await (hp !== null && (hp as any).__isVarRef !== true && (hp as any).__goValue === undefined ? ((hp as any) as __goscript_compact_protocol.TCompactProtocol).WriteString(ctx, value) : __goscript_compact_protocol.TCompactProtocol.prototype.WriteString.call(hp, ctx, value))
							if (err != null) {
								return (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
							}
						}
					}
				}
				let padding = 4 - ($.pointerValue<bytes.Buffer>($.pointerValue<__goscript_memory_buffer.TMemoryBuffer>(headers).Buffer).Len() % 4)
				if (padding < 4) {
					let buf: $.Slice<number> = $.goSlice((t$ as THeaderTransport).buffer, undefined, padding)
					for (let __goscriptRangeTarget2 = buf, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
						;(__goscriptRangeWindow2.backing as any[])[__goscriptRangeWindow2.offset + i] = 0
					}
					{
						let [, err] = $.pointerValue<bytes.Buffer>($.pointerValue<__goscript_memory_buffer.TMemoryBuffer>(headers).Buffer).Write(buf)
						if (err != null) {
							return (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
						}
					}
				}

				let payload: $.VarRef<bytes.Buffer | $.VarRef<bytes.Buffer> | null> = $.varRef(await __goscript_buf_pool.getBufFromPool())
				const __goscriptDeferArg1 = payload
				__defer.defer(() => { __goscript_buf_pool.returnBufToPool(__goscriptDeferArg1) })
				let meta = (() => { const __goscriptLiteralField0 = $.uint(globalThis.Math.trunc($.pointerValue<bytes.Buffer>($.pointerValue<__goscript_memory_buffer.TMemoryBuffer>(headers).Buffer).Len() / 4), 16); return new headerMeta({MagicFlags: $.uint(((268369920 + ((t$ as THeaderTransport).Flags & 65535)) >>> 0), 32), SequenceID: (t$ as THeaderTransport).SequenceID, HeaderLength: __goscriptLiteralField0}, true) })()
				{
					let err = await binary.Write($.pointerValueOrNil($.interfaceValue<io.Writer | null>(payload.value, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, $.interfaceValue<binary.ByteOrder | null>($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))), "binary.bigEndian", "binary.bigEndian")!, $.interfaceValue((meta).clone(), "thrift.headerMeta", "thrift.headerMeta"))
					if (err != null) {
						return (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
					}
				}
				{
					let [, err] = await io.Copy($.pointerValueOrNil($.interfaceValue<io.Writer | null>(payload.value, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, $.pointerValueOrNil($.interfaceValue<io.Reader | null>(headers, "*thrift.TMemoryBuffer", /* @__PURE__ */ $.pointerType("thrift.TMemoryBuffer")))!)
					if (err != null) {
						return (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
					}
				}

				let [writer, err] = await NewTransformWriter($.interfaceValue<io.Writer | null>(payload.value, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")), (t$ as THeaderTransport).writeTransforms)
				if (err != null) {
					return (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
				}
				{
					let [, __goscriptShadow0] = await io.Copy($.pointerValueOrNil((writer as io.Writer | null))!, $.pointerValueOrNil($.interfaceValue<io.Reader | null>((t$ as THeaderTransport).writeBuffer, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!)
					if (__goscriptShadow0 != null) {
						return (await __goscript_transport_exception.NewTTransportExceptionFromError(__goscriptShadow0) as $.GoError)
					}
				}
				{
					let __goscriptShadow1 = await (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? (writer as Exclude<io.WriteCloser, null>) : $.pointerValue<Exclude<io.WriteCloser, null>>(writer)).Close()
					if (__goscriptShadow1 != null) {
						return (await __goscript_transport_exception.NewTTransportExceptionFromError(__goscriptShadow1) as $.GoError)
					}
				}

				// First write frame length
				let buf: $.Slice<number> = $.goSlice((t$ as THeaderTransport).buffer, undefined, 4)
				$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint32(buf, $.uint(bytes.Buffer.prototype.Len.call($.pointerValue<bytes.Buffer>(payload.value)), 32))
				{
					let [, __goscriptShadow2] = await $.pointerValue<Exclude<__goscript_transport.TTransport, null>>((t$ as THeaderTransport).transport).Write(buf)
					if (__goscriptShadow2 != null) {
						return (await __goscript_transport_exception.NewTTransportExceptionFromError(__goscriptShadow2) as $.GoError)
					}
				}
				// Then write the payload
				{
					let [, __goscriptShadow3] = await io.Copy($.pointerValueOrNil(((t$ as THeaderTransport).transport as io.Writer | null))!, $.pointerValueOrNil($.interfaceValue<io.Reader | null>(payload.value, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!)
					if (__goscriptShadow3 != null) {
						return (await __goscript_transport_exception.NewTTransportExceptionFromError(__goscriptShadow3) as $.GoError)
					}
				}
				break
			}
			case 2:
			case 4:
			{
				let buf: $.Slice<number> = $.goSlice((t$ as THeaderTransport).buffer, undefined, 4)
				$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint32(buf, $.uint(bytes.Buffer.prototype.Len.call($.pointerValue<bytes.Buffer>((t$ as THeaderTransport).writeBuffer)), 32))
				{
					let [, err] = await $.pointerValue<Exclude<__goscript_transport.TTransport, null>>((t$ as THeaderTransport).transport).Write(buf)
					if (err != null) {
						return (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
					}
				}
			}
			case 3:
			case 5:
			{
				{
					let [, err] = await io.Copy($.pointerValueOrNil(((t$ as THeaderTransport).transport as io.Writer | null))!, $.pointerValueOrNil($.interfaceValue<io.Reader | null>((t$ as THeaderTransport).writeBuffer, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!)
					if (err != null) {
						return (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
					}
				}
				break
			}
		}

		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, $.GoError>([
			{
				id: -1,
				isSend: false,
				channel: null,
			},
			{
				id: 0,
				isSend: false,
				channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect0Result) => {
					return (await __goscript_transport_exception.NewTTransportExceptionFromError((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) as $.GoError)
				}
			}
		], true)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}

		return (__goscriptAwait = $.pointerValue<Exclude<__goscript_transport.TTransport, null>>((t$ as THeaderTransport).transport).Flush(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public GetReadHeaders(): THeaderMap {
		const t: THeaderTransport | $.VarRef<THeaderTransport> | null = this;
		return $.pointerValue<THeaderTransport>(t).readHeaders
	}

	public async IsOpen(): globalThis.Promise<boolean> {
		const t: THeaderTransport | $.VarRef<THeaderTransport> | null = this;
		return $.pointerValue<Exclude<__goscript_transport.TTransport, null>>($.pointerValue<THeaderTransport>(t).transport).IsOpen()
	}

	public async Open(): globalThis.Promise<$.GoError> {
		const t: THeaderTransport | $.VarRef<THeaderTransport> | null = this;
		return $.pointerValue<Exclude<__goscript_transport.TTransport, null>>($.pointerValue<THeaderTransport>(t).transport).Open()
	}

	public Protocol(): THeaderProtocolID {
		const t: THeaderTransport | $.VarRef<THeaderTransport> | null = this;
		const t$: THeaderTransport = t == null ? $.pointerTarget<THeaderTransport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<THeaderTransport>(t)
		switch ((t$ as THeaderTransport).clientType) {
			default:
			{
				return (t$ as THeaderTransport).protocolID
				break
			}
			case 2:
			case 3:
			{
				return 0
				break
			}
			case 4:
			case 5:
			{
				return 2
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Read(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const t: THeaderTransport | $.VarRef<THeaderTransport> | null = this;
		let read: number = 0
		let err: $.GoError = null! as $.GoError
		const t$: THeaderTransport = t == null ? $.pointerTarget<THeaderTransport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<THeaderTransport>(t)
		// Here using context.Background instead of a context passed in is safe.
		// First is that there's no way to pass context into this function.
		// Then, 99% of the case when calling this Read frame is already read
		// into frameReader. ReadFrame here is more of preventing bugs that
		// didn't call ReadFrame before calling Read.
		err = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as THeaderTransport).ReadFrame(context.Background()) : THeaderTransport.prototype.ReadFrame.call(t, context.Background()))
		if (err != null) {
			return [read, err]
		}
		if ((t$ as THeaderTransport).frameReader != null) {
			let __goscriptTuple0: any = await $.pointerValue<Exclude<io.ReadCloser, null>>((t$ as THeaderTransport).frameReader).Read(p)
			read = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
			if ((err == null) && (bytes.Buffer.prototype.Len.call($.pointerValue<bytes.Buffer>((t$ as THeaderTransport).frameBuffer)) <= 0)) {
				// the last Read finished the frame, do endOfFrame
				// handling here.
				err = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as THeaderTransport).endOfFrame() : THeaderTransport.prototype.endOfFrame.call(t))
			} else {
				if ($.comparableEqual(err, io.EOF)) {
					err = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as THeaderTransport).endOfFrame() : THeaderTransport.prototype.endOfFrame.call(t))
					if (err != null) {
						return [read, err]
					}
					if (read == 0) {
						// Try to read the next frame when we hit EOF
						// (end of frame) immediately.
						// When we got here, it means the last read
						// finished the previous frame, but didn't
						// do endOfFrame handling yet.
						// We have to read the next frame here,
						// as otherwise we would return 0 and nil,
						// which is a case not handled well by most
						// protocol implementations.
						return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as THeaderTransport).Read(p) : THeaderTransport.prototype.Read.call(t, p))
					}
				}
			}
			return [read, err]
		}
		return bufio.Reader.prototype.Read.call((t$ as THeaderTransport).reader, p)
	}

	public async ReadFrame(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		let t: THeaderTransport | $.VarRef<THeaderTransport> | null = this;
		const t$: THeaderTransport = t == null ? $.pointerTarget<THeaderTransport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<THeaderTransport>(t)
		if (!(t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as THeaderTransport).needReadFrame() : THeaderTransport.prototype.needReadFrame.call(t))) {
			// No need to read frame, skipping.
			return null
		}

		// Peek and handle the first 32 bits.
		// They could either be the length field of a framed message,
		// or the first bytes of an unframed message.
		let buf: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		// This is also usually the first read from a connection,
		// so handle retries around socket timeouts.
		let [, deadlineSet] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Deadline()
		while (true) {
			let __goscriptTuple1: any = await bufio.Reader.prototype.Peek.call((t$ as THeaderTransport).reader, 4)
			buf = __goscriptTuple1[0]
			err = __goscriptTuple1[1]
			if ((deadlineSet && await __goscript_transport_exception.isTimeoutError(err)) && ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == null)) {
				// This is I/O timeout and we still have time,
				// continue trying
				continue
			}
			// For anything else, do not retry
			break
		}
		if (err != null) {
			return err
		}

		let frameSize = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint32(buf)
		if ($.uint((frameSize & 4294901760), 32) == 2147549184) {
			;(t$ as THeaderTransport).clientType = 3
			return null
		}
		if (($.arrayIndex(buf!, 0) == 130) && ($.uint(($.arrayIndex(buf!, 1) & 31), 8) == 1)) {
			;(t$ as THeaderTransport).clientType = 5
			return null
		}

		// At this point it should be a framed message,
		// sanity check on frameSize then discard the peeked part.
		if ((frameSize > 1073741823) || (frameSize > $.uint(__goscript_configuration.TConfiguration.prototype.GetMaxFrameSize.call((t$ as THeaderTransport).cfg), 32))) {
			return (await __goscript_protocol_exception.NewTProtocolExceptionWithType(3, errors.New("frame too large")) as $.GoError)
		}
		await bufio.Reader.prototype.Discard.call((t$ as THeaderTransport).reader, 4)

		// Read the frame fully into frameBuffer.
		if ((t$ as THeaderTransport).frameBuffer == null) {
			;(t$ as THeaderTransport).frameBuffer = await __goscript_buf_pool.getBufFromPool()
		}
		let __goscriptTuple2: any = await io.CopyN($.pointerValueOrNil($.interfaceValue<io.Writer | null>((t$ as THeaderTransport).frameBuffer, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, $.pointerValueOrNil($.interfaceValue<io.Reader | null>((t$ as THeaderTransport).reader, "*bufio.Reader", /* @__PURE__ */ $.pointerType("bufio.Reader")))!, $.int64(frameSize))
		err = __goscriptTuple2[1]
		if (err != null) {
			return err
		}
		;(t$ as THeaderTransport).frameReader = io.NopCloser($.pointerValueOrNil($.interfaceValue<io.Reader | null>((t$ as THeaderTransport).frameBuffer, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!)

		// Peek and handle the next 32 bits.
		buf = $.goSlice(bytes.Buffer.prototype.Bytes.call($.pointerValue<bytes.Buffer>((t$ as THeaderTransport).frameBuffer)), undefined, 4)
		let version = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint32(buf)
		if ($.uint((version & 4294901760), 32) == 268369920) {
			;(t$ as THeaderTransport).clientType = 1
			return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as THeaderTransport).parseHeaders(ctx, frameSize) : THeaderTransport.prototype.parseHeaders.call(t, ctx, frameSize))
		}
		if ($.uint((version & 4294901760), 32) == 2147549184) {
			;(t$ as THeaderTransport).clientType = 2
			return null
		}
		if (($.arrayIndex(buf!, 0) == 130) && ($.uint(($.arrayIndex(buf!, 1) & 31), 8) == 1)) {
			;(t$ as THeaderTransport).clientType = 4
			return null
		}
		{
			let __goscriptShadow4 = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as THeaderTransport).endOfFrame() : THeaderTransport.prototype.endOfFrame.call(t))
			if (__goscriptShadow4 != null) {
				return __goscriptShadow4
			}
		}
		return (await __goscript_protocol_exception.NewTProtocolExceptionWithType(5, errors.New("unsupported client transport type")) as $.GoError)
	}

	public async RemainingBytes(): globalThis.Promise<bigint> {
		const t: THeaderTransport | $.VarRef<THeaderTransport> | null = this;
		return $.pointerValue<Exclude<__goscript_transport.TTransport, null>>($.pointerValue<THeaderTransport>(t).transport).RemainingBytes()
	}

	public async SetTConfiguration(cfg: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<void> {
		let t: THeaderTransport | $.VarRef<THeaderTransport> | null = this;
		const t$: THeaderTransport = t == null ? $.pointerTarget<THeaderTransport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<THeaderTransport>(t)
		await __goscript_configuration.PropagateTConfiguration(((t$ as THeaderTransport).transport as any), cfg);
		;(t$ as THeaderTransport).cfg = cfg
	}

	public SetWriteHeader(key: string, value: string): void {
		let t: THeaderTransport | $.VarRef<THeaderTransport> | null = this;
		$.mapSet($.pointerValue<THeaderTransport>(t).writeHeaders, key, value)
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let t: THeaderTransport | $.VarRef<THeaderTransport> | null = this;
		const t$: THeaderTransport = t == null ? $.pointerTarget<THeaderTransport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<THeaderTransport>(t)
		if ((t$ as THeaderTransport).writeBuffer == null) {
			;(t$ as THeaderTransport).writeBuffer = await __goscript_buf_pool.getBufFromPool()
		}
		return bytes.Buffer.prototype.Write.call($.pointerValue<bytes.Buffer>((t$ as THeaderTransport).writeBuffer), p)
	}

	public async endOfFrame(): globalThis.Promise<$.GoError> {
		const t: THeaderTransport | $.VarRef<THeaderTransport> | null = this;
		using __defer = new $.DisposableStack()
		const t$: THeaderTransport = t == null ? $.pointerTarget<THeaderTransport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<THeaderTransport>(t)
		__defer.defer(() => { ((): void => {
			__goscript_buf_pool.returnBufToPool($.fieldRef((t$ as THeaderTransport)._fields, "frameBuffer"));
			;(t$ as THeaderTransport).frameReader = null
		})() })
		return await $.pointerValue<Exclude<io.ReadCloser, null>>((t$ as THeaderTransport).frameReader).Close()
	}

	public isFramed(): boolean {
		const t: THeaderTransport | $.VarRef<THeaderTransport> | null = this;
		switch ($.pointerValue<THeaderTransport>(t).clientType) {
			default:
			{
				return false
				break
			}
			case 1:
			case 2:
			case 4:
			{
				return true
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public needReadFrame(): boolean {
		const t: THeaderTransport | $.VarRef<THeaderTransport> | null = this;
		const t$: THeaderTransport = t == null ? $.pointerTarget<THeaderTransport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<THeaderTransport>(t)
		if ((t$ as THeaderTransport).clientType == 0) {
			// This is a new connection that's never read before.
			return true
		}
		if ((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as THeaderTransport).isFramed() : THeaderTransport.prototype.isFramed.call(t)) && ((t$ as THeaderTransport).frameReader == null)) {
			// We just finished the last frame.
			return true
		}
		return false
	}

	public async parseHeaders(ctx: context.Context | null, frameSize: number): globalThis.Promise<$.GoError> {
		let t: THeaderTransport | $.VarRef<THeaderTransport> | null = this;
		const t$: THeaderTransport = t == null ? $.pointerTarget<THeaderTransport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<THeaderTransport>(t)
		if ((t$ as THeaderTransport).clientType != 1) {
			return null
		}

		let err: $.GoError = null! as $.GoError
		let meta: $.VarRef<headerMeta> = $.varRef(new headerMeta(undefined, true))
		{
			err = await binary.Read($.pointerValueOrNil($.interfaceValue<io.Reader | null>((t$ as THeaderTransport).frameBuffer, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, $.interfaceValue<binary.ByteOrder | null>($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))), "binary.bigEndian", "binary.bigEndian")!, $.interfaceValue(meta, "*thrift.headerMeta", /* @__PURE__ */ $.pointerType("thrift.headerMeta")))
			if (err != null) {
				return err
			}
		}
		frameSize = $.uint(frameSize - (10), 32);
		;(t$ as THeaderTransport).Flags = $.uint(meta.value.MagicFlags & 65535, 32);
		;(t$ as THeaderTransport).SequenceID = meta.value.SequenceID
		let headerLength = $.int64Mul($.int64(meta.value.HeaderLength), 4n)
		if ($.int64(frameSize) < headerLength) {
			return (await __goscript_protocol_exception.NewTProtocolExceptionWithType(3, errors.New("header size is larger than the whole frame")) as $.GoError)
		}
		let headerBuf: __goscript_memory_buffer.TMemoryBuffer | $.VarRef<__goscript_memory_buffer.TMemoryBuffer> | null = __goscript_memory_buffer.NewTMemoryBuffer()
		let __goscriptTuple3: any = await io.CopyN($.pointerValueOrNil($.interfaceValue<io.Writer | null>(headerBuf, "*thrift.TMemoryBuffer", /* @__PURE__ */ $.pointerType("thrift.TMemoryBuffer")))!, $.pointerValueOrNil($.interfaceValue<io.Reader | null>((t$ as THeaderTransport).frameBuffer, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, headerLength)
		err = __goscriptTuple3[1]
		if (err != null) {
			return err
		}
		let hp: __goscript_compact_protocol.TCompactProtocol | $.VarRef<__goscript_compact_protocol.TCompactProtocol> | null = await __goscript_compact_protocol.NewTCompactProtocol($.interfaceValue<__goscript_transport.TTransport | null>(headerBuf, "*thrift.TMemoryBuffer", /* @__PURE__ */ $.pointerType("thrift.TMemoryBuffer")))
		await (hp !== null && (hp as any).__isVarRef !== true && (hp as any).__goValue === undefined ? ((hp as any) as __goscript_compact_protocol.TCompactProtocol).SetTConfiguration((t$ as THeaderTransport).cfg) : __goscript_compact_protocol.TCompactProtocol.prototype.SetTConfiguration.call(hp, (t$ as THeaderTransport).cfg))

		// At this point the header is already read into headerBuf,
		// and t.frameBuffer starts from the actual payload.
		let __goscriptTuple4: any = await (hp !== null && (hp as any).__isVarRef !== true && (hp as any).__goValue === undefined ? ((hp as any) as __goscript_compact_protocol.TCompactProtocol).readVarint32() : __goscript_compact_protocol.TCompactProtocol.prototype.readVarint32.call(hp))
		let protoID = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return err
		}
		;(t$ as THeaderTransport).protocolID = $.int(protoID, 32)

		let transformCount: number = 0
		let __goscriptTuple5: any = await (hp !== null && (hp as any).__isVarRef !== true && (hp as any).__goValue === undefined ? ((hp as any) as __goscript_compact_protocol.TCompactProtocol).readVarint32() : __goscript_compact_protocol.TCompactProtocol.prototype.readVarint32.call(hp))
		transformCount = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return err
		}
		if (transformCount > 0) {
			let reader: TransformReader | $.VarRef<TransformReader> | null = NewTransformReaderWithCapacity($.interfaceValue<io.Reader | null>((t$ as THeaderTransport).frameBuffer, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")), $.int(transformCount));
			;(t$ as THeaderTransport).frameReader = $.interfaceValue<io.ReadCloser | null>(reader, "*thrift.TransformReader", /* @__PURE__ */ $.pointerType("thrift.TransformReader"))
			let transformIDs: $.Slice<THeaderTransformID> = $.makeSlice<THeaderTransformID>(transformCount, undefined, "number")
			for (let __goscriptSliceWindow0 = $.sliceRange(transformIDs), i = 0; i < $.int(transformCount); i++) {
				let [id, __goscriptShadow5] = await (hp !== null && (hp as any).__isVarRef !== true && (hp as any).__goValue === undefined ? ((hp as any) as __goscript_compact_protocol.TCompactProtocol).readVarint32() : __goscript_compact_protocol.TCompactProtocol.prototype.readVarint32.call(hp))
				if (__goscriptShadow5 != null) {
					return __goscriptShadow5
				}
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = $.int(id, 32)
			}
			// The transform IDs on the wire was added based on the order of
			// writing, so on the reading side we need to reverse the order.
			for (let __goscriptSliceWindow1 = $.sliceRange(transformIDs), i = $.int(((transformCount - 1) | 0), 32); i >= 0; i = ((i - 1) | 0)) {
				let id = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as THeaderTransformID)
				{
					let __goscriptShadow6 = await (reader !== null && (reader as any).__isVarRef !== true && (reader as any).__goValue === undefined ? ((reader as any) as TransformReader).AddTransform(id) : TransformReader.prototype.AddTransform.call(reader, id))
					if (__goscriptShadow6 != null) {
						return __goscriptShadow6
					}
				}
			}
		}

		// The info part does not use the transforms yet, so it's
		// important to continue using headerBuf.
		let headers: THeaderMap = $.makeMap<string, string>()
		while (true) {
			let [infoType, __goscriptShadow7] = await (hp !== null && (hp as any).__isVarRef !== true && (hp as any).__goValue === undefined ? ((hp as any) as __goscript_compact_protocol.TCompactProtocol).readVarint32() : __goscript_compact_protocol.TCompactProtocol.prototype.readVarint32.call(hp))
			if (errors.Is($.pointerValueOrNil(__goscriptShadow7)!, $.pointerValueOrNil(io.EOF)!)) {
				break
			}
			if (__goscriptShadow7 != null) {
				return __goscriptShadow7
			}
			if ($.int(infoType, 32) == 1) {
				let [count, __goscriptShadow8] = await (hp !== null && (hp as any).__isVarRef !== true && (hp as any).__goValue === undefined ? ((hp as any) as __goscript_compact_protocol.TCompactProtocol).readVarint32() : __goscript_compact_protocol.TCompactProtocol.prototype.readVarint32.call(hp))
				if (__goscriptShadow8 != null) {
					return __goscriptShadow8
				}
				for (let i = 0; i < $.int(count); i++) {
					let [key, __goscriptShadow9] = await (hp !== null && (hp as any).__isVarRef !== true && (hp as any).__goValue === undefined ? ((hp as any) as __goscript_compact_protocol.TCompactProtocol).ReadString(ctx) : __goscript_compact_protocol.TCompactProtocol.prototype.ReadString.call(hp, ctx))
					if (__goscriptShadow9 != null) {
						return __goscriptShadow9
					}
					let __goscriptTuple6: any = await (hp !== null && (hp as any).__isVarRef !== true && (hp as any).__goValue === undefined ? ((hp as any) as __goscript_compact_protocol.TCompactProtocol).ReadString(ctx) : __goscript_compact_protocol.TCompactProtocol.prototype.ReadString.call(hp, ctx))
					let value = __goscriptTuple6[0]
					__goscriptShadow9 = __goscriptTuple6[1]
					if (__goscriptShadow9 != null) {
						return __goscriptShadow9
					}
					$.mapSet(headers, key, value)
				}
			} else {
				// Skip reading info section on the first
				// unsupported info type.
				break
			}
		}
		;(t$ as THeaderTransport).readHeaders = headers

		return null
	}

	static __typeInfo = $.registerStructType(
		"thrift.THeaderTransport",
		() => new THeaderTransport(),
		() => [$.methodSignature("AddTransform", [["transform", /* @__PURE__ */ $.basicType("int32", "thrift.THeaderTransformID")]], ["error"], true), $.methodSignature("ClearWriteHeaders", [], [], true), $.methodSignature("Close", [], ["error"], true), $.methodSignature("Flush", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("GetReadHeaders", [], ["thrift.THeaderMap"], true), $.methodSignature("IsOpen", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Open", [], ["error"], true), $.methodSignature("Protocol", [], [/* @__PURE__ */ $.basicType("int32", "thrift.THeaderProtocolID")], true), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["read", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ReadFrame", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("RemainingBytes", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("SetTConfiguration", [["cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]], [], true), $.methodSignature("SetWriteHeader", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("endOfFrame", [], ["error"], true), $.methodSignature("isFramed", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("needReadFrame", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("parseHeaders", [["ctx", "context.Context"], ["frameSize", /* @__PURE__ */ $.basicType("uint32")]], ["error"], true)],
		THeaderTransport,
		() => [/* @__PURE__ */ $.structField("SequenceID", /* @__PURE__ */ $.basicType("int32"), [0], 0, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint32"), [1], 4, true), /* @__PURE__ */ $.structField("transport", "thrift.TTransport", [2], 8, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("readHeaders", "thrift.THeaderMap", [3], 24, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("writeHeaders", "thrift.THeaderMap", [4], 32, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("reader", /* @__PURE__ */ $.pointerType("bufio.Reader"), [5], 40, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("frameBuffer", /* @__PURE__ */ $.pointerType("bytes.Buffer"), [6], 48, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("frameReader", "io.ReadCloser", [7], 56, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("writeBuffer", /* @__PURE__ */ $.pointerType("bytes.Buffer"), [8], 72, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("writeTransforms", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32", "thrift.THeaderTransformID")), [9], 80, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("clientType", /* @__PURE__ */ $.basicType("int", "thrift.clientType"), [10], 104, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("protocolID", /* @__PURE__ */ $.basicType("int32", "thrift.THeaderProtocolID"), [11], 112, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration"), [12], 120, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("buffer", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 4), [13], 128, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export class THeaderTransportFactory {
	// The underlying factory, could be nil.
	public get Factory(): __goscript_transport_factory.TTransportFactory | null {
		return this._fields.Factory
	}

	public set Factory(value: __goscript_transport_factory.TTransportFactory | null) {
		this._fields.Factory = value
	}

	public get cfg(): __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null {
		return this._fields.cfg
	}

	public set cfg(value: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null) {
		this._fields.cfg = value
	}

	public _fields: {
		Factory: __goscript_transport_factory.TTransportFactory | null
		cfg: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null
	}

	constructor(init?: Partial<{Factory?: __goscript_transport_factory.TTransportFactory | null, cfg?: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Factory: init?.Factory ?? (null! as __goscript_transport_factory.TTransportFactory | null),
			cfg: init?.cfg ?? (null! as __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): THeaderTransportFactory {
		return new THeaderTransportFactory(this, true)
	}

	public __goscriptAssign(source: THeaderTransportFactory): void {
		const target = this._fields
		const values = source._fields
		target.Factory = $.assignFieldValue(target.Factory, values.Factory, "thrift.TTransportFactory")
		target.cfg = values.cfg
	}

	public async GetTransport(trans: __goscript_transport.TTransport | null): globalThis.Promise<[__goscript_transport.TTransport | null, $.GoError]> {
		const f: THeaderTransportFactory | $.VarRef<THeaderTransportFactory> | null = this;
		const f$: THeaderTransportFactory = f == null ? $.pointerTarget<THeaderTransportFactory>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<THeaderTransportFactory>(f)
		if ((f$ as THeaderTransportFactory).Factory != null) {
			let [t, err] = await $.pointerValue<Exclude<__goscript_transport_factory.TTransportFactory, null>>((f$ as THeaderTransportFactory).Factory).GetTransport(trans)
			if (err != null) {
				return [null, err]
			}
			return [$.interfaceValue<__goscript_transport.TTransport | null>(await NewTHeaderTransportConf(t, (f$ as THeaderTransportFactory).cfg), "*thrift.THeaderTransport", /* @__PURE__ */ $.pointerType("thrift.THeaderTransport")), null]
		}
		return [$.interfaceValue<__goscript_transport.TTransport | null>(await NewTHeaderTransportConf(trans, (f$ as THeaderTransportFactory).cfg), "*thrift.THeaderTransport", /* @__PURE__ */ $.pointerType("thrift.THeaderTransport")), null]
	}

	public async SetTConfiguration(cfg: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<void> {
		let f: THeaderTransportFactory | $.VarRef<THeaderTransportFactory> | null = this;
		const f$: THeaderTransportFactory = f == null ? $.pointerTarget<THeaderTransportFactory>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<THeaderTransportFactory>(f)
		await __goscript_configuration.PropagateTConfiguration(((f$ as THeaderTransportFactory).Factory as any), (f$ as THeaderTransportFactory).cfg);
		;(f$ as THeaderTransportFactory).cfg = cfg
	}

	static __typeInfo = $.registerStructType(
		"thrift.THeaderTransportFactory",
		() => new THeaderTransportFactory(),
		() => [$.methodSignature("GetTransport", [["trans", "thrift.TTransport"]], ["thrift.TTransport", "error"], true), $.methodSignature("SetTConfiguration", [["cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]], [], true)],
		THeaderTransportFactory,
		() => [/* @__PURE__ */ $.structField("Factory", "thrift.TTransportFactory", [0], 0, true), /* @__PURE__ */ $.structField("cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration"), [1], 16, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export const size32: number = 4

export const headerMetaSize: number = 10

export const clientUnknown: clientType = 0

export const clientHeaders: clientType = 1

export const clientFramedBinary: clientType = 2

export const clientUnframedBinary: clientType = 3

export const clientFramedCompact: clientType = 4

export const clientUnframedCompact: clientType = 5

export const THeaderHeaderMagic: number = 268369920

export const THeaderHeaderMask: number = 4294901760

export const THeaderFlagsMask: number = 65535

export const THeaderMaxFrameSize: number = 1073741823

export const THeaderProtocolBinary: THeaderProtocolID = 0

export const THeaderProtocolCompact: THeaderProtocolID = 2

export const THeaderProtocolDefault: THeaderProtocolID = 0

export const TransformNone: THeaderTransformID = 0

export const TransformZlib: THeaderTransformID = 1

export const InfoKeyValue: THeaderInfoType = 1

export var globalMemoryBuffer: __goscript_memory_buffer.TMemoryBuffer | $.VarRef<__goscript_memory_buffer.TMemoryBuffer> | null

export function __goscript_init_globalMemoryBuffer(): void {
	if (((globalMemoryBuffer) as any) === undefined) {
		globalMemoryBuffer = __goscript_memory_buffer.NewTMemoryBuffer()
	}
}

export function __goscript_get_globalMemoryBuffer(): __goscript_memory_buffer.TMemoryBuffer | $.VarRef<__goscript_memory_buffer.TMemoryBuffer> | null {
	if (((globalMemoryBuffer) as any) === undefined) {
		__goscript_init_globalMemoryBuffer()
	}
	return globalMemoryBuffer
}

export function __goscript_set_globalMemoryBuffer(__goscriptValue: __goscript_memory_buffer.TMemoryBuffer | $.VarRef<__goscript_memory_buffer.TMemoryBuffer> | null): void {
	globalMemoryBuffer = __goscriptValue
}

export async function THeaderProtocolID_Validate(id: THeaderProtocolID): globalThis.Promise<$.GoError> {
	let [, err] = await THeaderProtocolID_GetProtocol(id, $.interfaceValue<__goscript_transport.TTransport | null>(__goscript_get_globalMemoryBuffer(), "*thrift.TMemoryBuffer", /* @__PURE__ */ $.pointerType("thrift.TMemoryBuffer")))
	return err
}

export async function THeaderProtocolID_GetProtocol(id: THeaderProtocolID, trans: __goscript_transport.TTransport | null): globalThis.Promise<[__goscript_protocol.TProtocol | null, $.GoError]> {
	switch (id) {
		default:
		{
			return [null, (__goscript_application_exception.NewTApplicationException(9, await fmt.Sprintf("THeader protocol id %d not supported", $.namedValueInterfaceValue<any>(id, "thrift.THeaderProtocolID", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))) as $.GoError)]
			break
		}
		case 0:
		{
			return [$.interfaceValue<__goscript_protocol.TProtocol | null>(await __goscript_binary_protocol.NewTBinaryProtocolTransport(trans), "*thrift.TBinaryProtocol", /* @__PURE__ */ $.pointerType("thrift.TBinaryProtocol")), null]
			break
		}
		case 2:
		{
			return [$.interfaceValue<__goscript_protocol.TProtocol | null>(await __goscript_compact_protocol.NewTCompactProtocol(trans), "*thrift.TCompactProtocol", /* @__PURE__ */ $.pointerType("thrift.TCompactProtocol")), null]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export let supportedTransformIDs: globalThis.Map<THeaderTransformID, boolean> | null = $.makeMap<THeaderTransformID, boolean>([[0, true], [1, true]])

export function __goscript_set_supportedTransformIDs(__goscriptValue: globalThis.Map<THeaderTransformID, boolean> | null): void {
	supportedTransformIDs = __goscriptValue
}

export function NewTransformReaderWithCapacity(baseReader: io.Reader | null, capacity: number): TransformReader | $.VarRef<TransformReader> | null {
	return new TransformReader({Reader: baseReader, closers: $.makeSlice<io.Closer | null>(0, capacity)})
}

export async function NewTransformWriter(baseWriter: io.Writer | null, transforms: $.Slice<THeaderTransformID>): globalThis.Promise<[io.WriteCloser | null, $.GoError]> {
	let writer: TransformWriter | $.VarRef<TransformWriter> | null = new TransformWriter({Writer: baseWriter, closers: $.makeSlice<io.Closer | null>(0, $.sliceLen(transforms))})
	for (let __goscriptRangeTarget0 = transforms, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let id = $.int((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as THeaderTransformID), 32)
		{
			let err = await (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? ((writer as any) as TransformWriter).AddTransform(id) : TransformWriter.prototype.AddTransform.call(writer, id))
			if (err != null) {
				return [null, err]
			}
		}
	}
	return [$.interfaceValue<io.WriteCloser | null>(writer, "*thrift.TransformWriter", /* @__PURE__ */ $.pointerType("thrift.TransformWriter")), null]
}

export async function NewTHeaderTransport(trans: __goscript_transport.TTransport | null): globalThis.Promise<THeaderTransport | $.VarRef<THeaderTransport> | null> {
	return NewTHeaderTransportConf(trans, new __goscript_configuration.TConfiguration({noPropagation: true}))
}

export async function NewTHeaderTransportConf(trans: __goscript_transport.TTransport | null, conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<THeaderTransport | $.VarRef<THeaderTransport> | null> {
	{
		let __goscriptTuple7: any = $.typeAssertTuple<THeaderTransport | $.VarRef<THeaderTransport> | null>(trans, /* @__PURE__ */ $.pointerType("thrift.THeaderTransport"))
		let ht: THeaderTransport | $.VarRef<THeaderTransport> | null = __goscriptTuple7[0]
		let ok = __goscriptTuple7[1]
		if (ok) {
			await (ht !== null && (ht as any).__isVarRef !== true && (ht as any).__goValue === undefined ? ((ht as any) as THeaderTransport).SetTConfiguration(conf) : THeaderTransport.prototype.SetTConfiguration.call(ht, conf))
			return ht
		}
	}
	await __goscript_configuration.PropagateTConfiguration((trans as any), conf)
	return (await (async () => { const __goscriptLiteralField1 = bufio.NewReader((trans as io.Reader | null)); const __goscriptLiteralField2 = await (conf !== null && (conf as any).__isVarRef !== true && (conf as any).__goValue === undefined ? ((conf as any) as __goscript_configuration.TConfiguration).GetTHeaderProtocolID() : __goscript_configuration.TConfiguration.prototype.GetTHeaderProtocolID.call(conf)); return new THeaderTransport({transport: trans, reader: __goscriptLiteralField1, writeHeaders: $.makeMap<string, string>(), protocolID: __goscriptLiteralField2, cfg: conf}) })())
}

export function NewTHeaderTransportFactory(factory: __goscript_transport_factory.TTransportFactory | null): __goscript_transport_factory.TTransportFactory | null {
	return NewTHeaderTransportFactoryConf(factory, new __goscript_configuration.TConfiguration({noPropagation: true}))
}

export function NewTHeaderTransportFactoryConf(factory: __goscript_transport_factory.TTransportFactory | null, conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): __goscript_transport_factory.TTransportFactory | null {
	return $.interfaceValue<__goscript_transport_factory.TTransportFactory | null>(new THeaderTransportFactory({Factory: factory, cfg: conf}), "*thrift.THeaderTransportFactory", /* @__PURE__ */ $.pointerType("thrift.THeaderTransportFactory"))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({GetProtocol: (receiver: any, ...args: any[]) => (THeaderProtocolID_GetProtocol as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Validate: (receiver: any, ...args: any[]) => (THeaderProtocolID_Validate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int32", "thrift.THeaderProtocolID"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("GetProtocol", [["trans", "thrift.TTransport"]], ["thrift.TProtocol", "error"]), $.methodSignature("Validate", [], ["error"])])
}

var __goscriptAwait: any
