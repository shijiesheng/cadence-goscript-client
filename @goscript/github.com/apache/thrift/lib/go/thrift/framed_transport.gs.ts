// Generated file based on framed_transport.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript__type from "./type.gs.ts"

import * as __goscript_buf_pool from "./buf_pool.gs.ts"

import * as __goscript_configuration from "./configuration.gs.ts"

import type * as __goscript_exception from "./exception.gs.ts"

import * as __goscript_header_transport from "./header_transport.gs.ts"

import type * as __goscript_messagetype from "./messagetype.gs.ts"

import type * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"

import * as __goscript_transport_exception from "./transport_exception.gs.ts"

import * as __goscript_transport_factory from "./transport_factory.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/time/index.js"
import "./buf_pool.gs.ts"
import "./configuration.gs.ts"
import "./header_transport.gs.ts"
import "./transport.gs.ts"
import "./transport_exception.gs.ts"
import "./transport_factory.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TFramedTransport", "thrift.tFramedTransportFactory"])

export class TFramedTransport {
	public get transport(): __goscript_transport.TTransport | null {
		return this._fields.transport
	}

	public set transport(value: __goscript_transport.TTransport | null) {
		this._fields.transport = value
	}

	public get cfg(): __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null {
		return this._fields.cfg
	}

	public set cfg(value: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null) {
		this._fields.cfg = value
	}

	public get writeBuf(): bytes.Buffer | $.VarRef<bytes.Buffer> | null {
		return this._fields.writeBuf
	}

	public set writeBuf(value: bytes.Buffer | $.VarRef<bytes.Buffer> | null) {
		this._fields.writeBuf = value
	}

	public get reader(): bufio.Reader | $.VarRef<bufio.Reader> | null {
		return this._fields.reader
	}

	public set reader(value: bufio.Reader | $.VarRef<bufio.Reader> | null) {
		this._fields.reader = value
	}

	public get readBuf(): bytes.Buffer | $.VarRef<bytes.Buffer> | null {
		return this._fields.readBuf
	}

	public set readBuf(value: bytes.Buffer | $.VarRef<bytes.Buffer> | null) {
		this._fields.readBuf = value
	}

	public get buffer(): Uint8Array {
		return this._fields.buffer
	}

	public set buffer(value: Uint8Array) {
		this._fields.buffer = value
	}

	public _fields: {
		transport: __goscript_transport.TTransport | null
		cfg: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null
		writeBuf: bytes.Buffer | $.VarRef<bytes.Buffer> | null
		reader: bufio.Reader | $.VarRef<bufio.Reader> | null
		readBuf: bytes.Buffer | $.VarRef<bytes.Buffer> | null
		buffer: Uint8Array
	}

	constructor(init?: Partial<{transport?: __goscript_transport.TTransport | null, cfg?: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null, writeBuf?: bytes.Buffer | $.VarRef<bytes.Buffer> | null, reader?: bufio.Reader | $.VarRef<bufio.Reader> | null, readBuf?: bytes.Buffer | $.VarRef<bytes.Buffer> | null, buffer?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			transport: init?.transport ?? (null! as __goscript_transport.TTransport | null),
			cfg: init?.cfg ?? (null! as __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null),
			writeBuf: init?.writeBuf ?? (null! as bytes.Buffer | $.VarRef<bytes.Buffer> | null),
			reader: init?.reader ?? (null! as bufio.Reader | $.VarRef<bufio.Reader> | null),
			readBuf: init?.readBuf ?? (null! as bytes.Buffer | $.VarRef<bytes.Buffer> | null),
			buffer: init?.buffer !== undefined ? $.cloneArrayValue(init.buffer, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 4)) : $.arrayValue(new Uint8Array(4))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TFramedTransport {
		return new TFramedTransport(this, true)
	}

	public __goscriptAssign(source: TFramedTransport): void {
		const target = this._fields
		const values = source._fields
		target.transport = $.assignFieldValue(target.transport, values.transport, "thrift.TTransport")
		target.cfg = values.cfg
		target.writeBuf = values.writeBuf
		target.reader = values.reader
		target.readBuf = values.readBuf
		target.buffer = $.assignFieldValue(target.buffer, values.buffer, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 4))
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const p: TFramedTransport | $.VarRef<TFramedTransport> | null = this;
		return $.pointerValue<Exclude<__goscript_transport.TTransport, null>>($.pointerValue<TFramedTransport>(p).transport).Close()
	}

	public async Flush(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TFramedTransport | $.VarRef<TFramedTransport> | null = this;
		using __defer = new $.DisposableStack()
		const p$: TFramedTransport = p == null ? $.pointerTarget<TFramedTransport>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TFramedTransport>(p)
		const __goscriptDeferArg0 = $.fieldRef((p$ as TFramedTransport)._fields, "writeBuf")
		__defer.defer(() => { __goscript_buf_pool.returnBufToPool(__goscriptDeferArg0) })
		let size = bytes.Buffer.prototype.Len.call($.pointerValue<bytes.Buffer>((p$ as TFramedTransport).writeBuf))
		let buf: $.Slice<number> = $.goSlice((p$ as TFramedTransport).buffer, undefined, 4)
		$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint32(buf, $.uint(size, 32))
		let [, err] = await $.pointerValue<Exclude<__goscript_transport.TTransport, null>>((p$ as TFramedTransport).transport).Write(buf)
		if (err != null) {
			return (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
		}
		if (size > 0) {
			{
				let [, __goscriptShadow0] = await io.Copy($.pointerValueOrNil(((p$ as TFramedTransport).transport as io.Writer | null))!, $.pointerValueOrNil($.interfaceValue<io.Reader | null>((p$ as TFramedTransport).writeBuf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!)
				if (__goscriptShadow0 != null) {
					return (await __goscript_transport_exception.NewTTransportExceptionFromError(__goscriptShadow0) as $.GoError)
				}
			}
		}
		err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_transport.TTransport, null>>((p$ as TFramedTransport).transport).Flush(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
	}

	public async IsOpen(): globalThis.Promise<boolean> {
		const p: TFramedTransport | $.VarRef<TFramedTransport> | null = this;
		return $.pointerValue<Exclude<__goscript_transport.TTransport, null>>($.pointerValue<TFramedTransport>(p).transport).IsOpen()
	}

	public async Open(): globalThis.Promise<$.GoError> {
		const p: TFramedTransport | $.VarRef<TFramedTransport> | null = this;
		return $.pointerValue<Exclude<__goscript_transport.TTransport, null>>($.pointerValue<TFramedTransport>(p).transport).Open()
	}

	public async Read(buf: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const p: TFramedTransport | $.VarRef<TFramedTransport> | null = this;
		let read: number = 0
		let err: $.GoError = null! as $.GoError
		using __defer = new $.DisposableStack()
		const p$: TFramedTransport = p == null ? $.pointerTarget<TFramedTransport>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TFramedTransport>(p)
		__defer.defer(() => { ((): void => {
			// Make sure we return the read buffer back to pool
			// after we finished reading from it.
			if (((p$ as TFramedTransport).readBuf != null) && (bytes.Buffer.prototype.Len.call($.pointerValue<bytes.Buffer>((p$ as TFramedTransport).readBuf)) == 0)) {
				__goscript_buf_pool.returnBufToPool($.fieldRef((p$ as TFramedTransport)._fields, "readBuf"))
			}
		})() })

		if ((p$ as TFramedTransport).readBuf != null) {

			let __goscriptTuple0: any = bytes.Buffer.prototype.Read.call($.pointerValue<bytes.Buffer>((p$ as TFramedTransport).readBuf), buf)
			read = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
			if (!$.comparableEqual(err, io.EOF)) {
				__defer.dispose()
				return [read, err]
			}

			// For bytes.Buffer.Read, EOF would only happen when read is zero,
			// but still, do a sanity check,
			// in case that behavior is changed in a future version of go stdlib.
			// When that happens, just return nil error,
			// and let the caller call Read again to read the next frame.
			if (read > 0) {
				const __goscriptReturn0: [number, $.GoError] = [read, null]
				read = __goscriptReturn0[0]
				err = __goscriptReturn0[1]
				__defer.dispose()
				return [read, err]
			}
		}

		// Reaching here means that the last Read finished the last frame,
		// so we need to read the next frame into readBuf now.
		{
			err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TFramedTransport).readFrame() : TFramedTransport.prototype.readFrame.call(p))
			if (err != null) {
				const __goscriptReturn1: [number, $.GoError] = [read, err]
				read = __goscriptReturn1[0]
				err = __goscriptReturn1[1]
				__defer.dispose()
				return [read, err]
			}
		}
		let __goscriptTuple1: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TFramedTransport).Read($.goSlice(buf, read, undefined)) : TFramedTransport.prototype.Read.call(p, $.goSlice(buf, read, undefined)))
		let newRead = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		const __goscriptReturn2: [number, $.GoError] = [read + newRead, err]
		read = __goscriptReturn2[0]
		err = __goscriptReturn2[1]
		__defer.dispose()
		return [read, err]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async ReadByte(): globalThis.Promise<[number, $.GoError]> {
		const p: TFramedTransport | $.VarRef<TFramedTransport> | null = this;
		let c: number = 0
		let err: $.GoError = null! as $.GoError
		let buf: $.Slice<number> = $.goSlice($.pointerValue<TFramedTransport>(p).buffer, undefined, 1)
		let __goscriptTuple2: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TFramedTransport).Read(buf) : TFramedTransport.prototype.Read.call(p, buf))
		err = __goscriptTuple2[1]
		if (err != null) {
			return [c, err]
		}
		c = $.arrayIndex(buf!, 0)
		return [c, err]
	}

	public RemainingBytes(): bigint {
		const p: TFramedTransport | $.VarRef<TFramedTransport> | null = this;
		let num_bytes: bigint = 0n
		const p$: TFramedTransport = p == null ? $.pointerTarget<TFramedTransport>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TFramedTransport>(p)
		if ((p$ as TFramedTransport).readBuf == null) {
			return 0n
		}
		return $.uint64(bytes.Buffer.prototype.Len.call($.pointerValue<bytes.Buffer>((p$ as TFramedTransport).readBuf)))
	}

	public async SetTConfiguration(cfg: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<void> {
		let p: TFramedTransport | $.VarRef<TFramedTransport> | null = this;
		const p$: TFramedTransport = p == null ? $.pointerTarget<TFramedTransport>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TFramedTransport>(p)
		await __goscript_configuration.PropagateTConfiguration(((p$ as TFramedTransport).transport as any), cfg);
		;(p$ as TFramedTransport).cfg = cfg
	}

	public async Write(buf: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const p: TFramedTransport | $.VarRef<TFramedTransport> | null = this;
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TFramedTransport).ensureWriteBufferBeforeWrite() : TFramedTransport.prototype.ensureWriteBufferBeforeWrite.call(p))
		let [n, err] = bytes.Buffer.prototype.Write.call($.pointerValue<bytes.Buffer>($.pointerValue<TFramedTransport>(p).writeBuf), buf)
		return [n, (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)]
	}

	public async WriteByte(c: number): globalThis.Promise<$.GoError> {
		const p: TFramedTransport | $.VarRef<TFramedTransport> | null = this;
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TFramedTransport).ensureWriteBufferBeforeWrite() : TFramedTransport.prototype.ensureWriteBufferBeforeWrite.call(p))
		return bytes.Buffer.prototype.WriteByte.call($.pointerValue<bytes.Buffer>($.pointerValue<TFramedTransport>(p).writeBuf), c)
	}

	public async WriteString(s: string): globalThis.Promise<[number, $.GoError]> {
		const p: TFramedTransport | $.VarRef<TFramedTransport> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TFramedTransport).ensureWriteBufferBeforeWrite() : TFramedTransport.prototype.ensureWriteBufferBeforeWrite.call(p))
		return bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>($.pointerValue<TFramedTransport>(p).writeBuf), s)
	}

	public async ensureWriteBufferBeforeWrite(): globalThis.Promise<void> {
		let p: TFramedTransport | $.VarRef<TFramedTransport> | null = this;
		const p$: TFramedTransport = p == null ? $.pointerTarget<TFramedTransport>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TFramedTransport>(p)
		if ((p$ as TFramedTransport).writeBuf == null) {
			;(p$ as TFramedTransport).writeBuf = await __goscript_buf_pool.getBufFromPool()
		}
	}

	public async readFrame(): globalThis.Promise<$.GoError> {
		let p: TFramedTransport | $.VarRef<TFramedTransport> | null = this;
		const p$: TFramedTransport = p == null ? $.pointerTarget<TFramedTransport>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TFramedTransport>(p)
		if ((p$ as TFramedTransport).readBuf != null) {
			__goscript_buf_pool.returnBufToPool($.fieldRef((p$ as TFramedTransport)._fields, "readBuf"))
		}
		;(p$ as TFramedTransport).readBuf = await __goscript_buf_pool.getBufFromPool()

		let buf: $.Slice<number> = $.goSlice((p$ as TFramedTransport).buffer, undefined, 4)
		{
			let [, err] = await io.ReadFull($.pointerValueOrNil($.interfaceValue<io.Reader | null>((p$ as TFramedTransport).reader, "*bufio.Reader", /* @__PURE__ */ $.pointerType("bufio.Reader")))!, buf)
			if (err != null) {
				return err
			}
		}
		let size = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint32(buf)
		if (size > $.uint(__goscript_configuration.TConfiguration.prototype.GetMaxFrameSize.call((p$ as TFramedTransport).cfg), 32)) {
			return (__goscript_transport_exception.NewTTransportException(0, await fmt.Sprintf("Incorrect frame size (%d)", $.basicInterfaceValue(size, "uint32"))) as $.GoError)
		}
		let [, err] = await io.CopyN($.pointerValueOrNil($.interfaceValue<io.Writer | null>((p$ as TFramedTransport).readBuf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, $.pointerValueOrNil($.interfaceValue<io.Reader | null>((p$ as TFramedTransport).reader, "*bufio.Reader", /* @__PURE__ */ $.pointerType("bufio.Reader")))!, $.int64(size))
		return (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
	}

	static __typeInfo = $.registerStructType(
		"thrift.TFramedTransport",
		() => new TFramedTransport(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Flush", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("IsOpen", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Open", [], ["error"], true), $.methodSignature("Read", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["read", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ReadByte", [], [["c", /* @__PURE__ */ $.basicType("uint8")], ["err", "error"]], true), $.methodSignature("RemainingBytes", [], [["num_bytes", /* @__PURE__ */ $.basicType("uint64")]], true), $.methodSignature("SetTConfiguration", [["cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]], [], true), $.methodSignature("Write", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteByte", [["c", /* @__PURE__ */ $.basicType("uint8")]], ["error"], true), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ensureWriteBufferBeforeWrite", [], [], true), $.methodSignature("readFrame", [], ["error"], true)],
		TFramedTransport,
		() => [/* @__PURE__ */ $.structField("transport", "thrift.TTransport", [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration"), [1], 16, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("writeBuf", /* @__PURE__ */ $.pointerType("bytes.Buffer"), [2], 24, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("reader", /* @__PURE__ */ $.pointerType("bufio.Reader"), [3], 32, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("readBuf", /* @__PURE__ */ $.pointerType("bytes.Buffer"), [4], 40, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("buffer", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 4), [5], 48, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export class tFramedTransportFactory {
	public get factory(): __goscript_transport_factory.TTransportFactory | null {
		return this._fields.factory
	}

	public set factory(value: __goscript_transport_factory.TTransportFactory | null) {
		this._fields.factory = value
	}

	public get cfg(): __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null {
		return this._fields.cfg
	}

	public set cfg(value: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null) {
		this._fields.cfg = value
	}

	public _fields: {
		factory: __goscript_transport_factory.TTransportFactory | null
		cfg: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null
	}

	constructor(init?: Partial<{factory?: __goscript_transport_factory.TTransportFactory | null, cfg?: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			factory: init?.factory ?? (null! as __goscript_transport_factory.TTransportFactory | null),
			cfg: init?.cfg ?? (null! as __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tFramedTransportFactory {
		return new tFramedTransportFactory(this, true)
	}

	public __goscriptAssign(source: tFramedTransportFactory): void {
		const target = this._fields
		const values = source._fields
		target.factory = $.assignFieldValue(target.factory, values.factory, "thrift.TTransportFactory")
		target.cfg = values.cfg
	}

	public async GetTransport(base: __goscript_transport.TTransport | null): globalThis.Promise<[__goscript_transport.TTransport | null, $.GoError]> {
		const p: tFramedTransportFactory | $.VarRef<tFramedTransportFactory> | null = this;
		const p$: tFramedTransportFactory = p == null ? $.pointerTarget<tFramedTransportFactory>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<tFramedTransportFactory>(p)
		await __goscript_configuration.PropagateTConfiguration((base as any), (p$ as tFramedTransportFactory).cfg)
		let [tt, err] = await $.pointerValue<Exclude<__goscript_transport_factory.TTransportFactory, null>>((p$ as tFramedTransportFactory).factory).GetTransport(base)
		if (err != null) {
			return [null, err]
		}
		return [$.interfaceValue<__goscript_transport.TTransport | null>(await NewTFramedTransportConf(tt, (p$ as tFramedTransportFactory).cfg), "*thrift.TFramedTransport", /* @__PURE__ */ $.pointerType("thrift.TFramedTransport")), null]
	}

	public async SetTConfiguration(cfg: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<void> {
		let p: tFramedTransportFactory | $.VarRef<tFramedTransportFactory> | null = this;
		const p$: tFramedTransportFactory = p == null ? $.pointerTarget<tFramedTransportFactory>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<tFramedTransportFactory>(p)
		await __goscript_configuration.PropagateTConfiguration(((p$ as tFramedTransportFactory).factory as any), cfg);
		;(p$ as tFramedTransportFactory).cfg = cfg
	}

	static __typeInfo = $.registerStructType(
		"thrift.tFramedTransportFactory",
		() => new tFramedTransportFactory(),
		() => [$.methodSignature("GetTransport", [["base", "thrift.TTransport"]], ["thrift.TTransport", "error"], true), $.methodSignature("SetTConfiguration", [["cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]], [], true)],
		tFramedTransportFactory,
		() => [/* @__PURE__ */ $.structField("factory", "thrift.TTransportFactory", [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration"), [1], 16, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export const DEFAULT_MAX_LENGTH: number = 16384000

export async function NewTFramedTransportFactory(factory: __goscript_transport_factory.TTransportFactory | null): globalThis.Promise<__goscript_transport_factory.TTransportFactory | null> {
	return NewTFramedTransportFactoryConf(factory, new __goscript_configuration.TConfiguration({MaxFrameSize: 16384000, noPropagation: true}))
}

export async function NewTFramedTransportFactoryMaxLength(factory: __goscript_transport_factory.TTransportFactory | null, maxLength: number): globalThis.Promise<__goscript_transport_factory.TTransportFactory | null> {
	return NewTFramedTransportFactoryConf(factory, new __goscript_configuration.TConfiguration({MaxFrameSize: $.int(maxLength, 32), noPropagation: true}))
}

export async function NewTFramedTransportFactoryConf(factory: __goscript_transport_factory.TTransportFactory | null, conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<__goscript_transport_factory.TTransportFactory | null> {
	await __goscript_configuration.PropagateTConfiguration((factory as any), conf)
	return $.interfaceValue<__goscript_transport_factory.TTransportFactory | null>(new tFramedTransportFactory({factory: factory, cfg: conf}), "*thrift.tFramedTransportFactory", /* @__PURE__ */ $.pointerType("thrift.tFramedTransportFactory"))
}

export async function NewTFramedTransport(transport: __goscript_transport.TTransport | null): globalThis.Promise<TFramedTransport | $.VarRef<TFramedTransport> | null> {
	return NewTFramedTransportConf(transport, new __goscript_configuration.TConfiguration({MaxFrameSize: 16384000, noPropagation: true}))
}

export async function NewTFramedTransportMaxLength(transport: __goscript_transport.TTransport | null, maxLength: number): globalThis.Promise<TFramedTransport | $.VarRef<TFramedTransport> | null> {
	return NewTFramedTransportConf(transport, new __goscript_configuration.TConfiguration({MaxFrameSize: $.int(maxLength, 32), noPropagation: true}))
}

export async function NewTFramedTransportConf(transport: __goscript_transport.TTransport | null, conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<TFramedTransport | $.VarRef<TFramedTransport> | null> {
	await __goscript_configuration.PropagateTConfiguration((transport as any), conf)
	return (() => { const __goscriptLiteralField0 = bufio.NewReader((transport as io.Reader | null)); return new TFramedTransport({transport: transport, reader: __goscriptLiteralField0, cfg: conf}) })()
}

var __goscriptAwait: any
