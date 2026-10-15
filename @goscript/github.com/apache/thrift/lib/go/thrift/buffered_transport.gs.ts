// Generated file based on buffered_transport.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as context from "@goscript/context/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as io from "@goscript/io/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript__type from "./type.gs.ts"

import * as __goscript_configuration from "./configuration.gs.ts"

import * as __goscript_header_transport from "./header_transport.gs.ts"

import type * as __goscript_messagetype from "./messagetype.gs.ts"

import type * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/context/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/io/index.js"
import "@goscript/time/index.js"
import "./configuration.gs.ts"
import "./header_transport.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TBufferedTransportFactory", "thrift.TBufferedTransport"])

export class TBufferedTransportFactory {
	public get size(): number {
		return this._fields.size
	}

	public set size(value: number) {
		this._fields.size = value
	}

	public _fields: {
		size: number
	}

	constructor(init?: Partial<{size?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			size: init?.size ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TBufferedTransportFactory {
		return new TBufferedTransportFactory(this, true)
	}

	public __goscriptAssign(source: TBufferedTransportFactory): void {
		const target = this._fields
		const values = source._fields
		target.size = values.size
	}

	public GetTransport(trans: __goscript_transport.TTransport | null): [__goscript_transport.TTransport | null, $.GoError] {
		const p: TBufferedTransportFactory | $.VarRef<TBufferedTransportFactory> | null = this;
		return [$.interfaceValue<__goscript_transport.TTransport | null>(NewTBufferedTransport(trans, $.pointerValue<TBufferedTransportFactory>(p).size), "*thrift.TBufferedTransport", /* @__PURE__ */ $.pointerType("thrift.TBufferedTransport")), null]
	}

	static __typeInfo = $.registerStructType(
		"thrift.TBufferedTransportFactory",
		() => new TBufferedTransportFactory(),
		() => [$.methodSignature("GetTransport", [["trans", "thrift.TTransport"]], ["thrift.TTransport", "error"], true)],
		TBufferedTransportFactory,
		() => [/* @__PURE__ */ $.structField("size", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export class TBufferedTransport {
	public get ReadWriter(): bufio.ReadWriter {
		return this._fields.ReadWriter
	}

	public set ReadWriter(value: bufio.ReadWriter) {
		this._fields.ReadWriter = value
	}

	public get tp(): __goscript_transport.TTransport | null {
		return this._fields.tp
	}

	public set tp(value: __goscript_transport.TTransport | null) {
		this._fields.tp = value
	}

	public _fields: {
		ReadWriter: bufio.ReadWriter
		tp: __goscript_transport.TTransport | null
	}

	constructor(init?: Partial<{ReadWriter?: bufio.ReadWriter, tp?: __goscript_transport.TTransport | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ReadWriter: init?.ReadWriter ? init.ReadWriter.clone() : new bufio.ReadWriter(undefined, true),
			tp: init?.tp ?? (null! as __goscript_transport.TTransport | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TBufferedTransport {
		return new TBufferedTransport(this, true)
	}

	public __goscriptAssign(source: TBufferedTransport): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.ReadWriter, values.ReadWriter)
		target.tp = $.assignFieldValue(target.tp, values.tp, "thrift.TTransport")
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const p: TBufferedTransport | $.VarRef<TBufferedTransport> | null = this;
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<Exclude<__goscript_transport.TTransport, null>>($.pointerValue<TBufferedTransport>(p).tp).Close()
	}

	public async Flush(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TBufferedTransport | $.VarRef<TBufferedTransport> | null = this;
		const p$: TBufferedTransport = p == null ? $.pointerTarget<TBufferedTransport>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TBufferedTransport>(p)
		{
			let err = await $.pointerValue<bufio.Writer>((p$ as TBufferedTransport).ReadWriter.Writer).Flush()
			if (err != null) {
				bufio.Writer.prototype.Reset.call((p$ as TBufferedTransport).ReadWriter.Writer, ((p$ as TBufferedTransport).tp as io.Writer | null))
				return err
			}
		}
		return $.pointerValue<Exclude<__goscript_transport.TTransport, null>>((p$ as TBufferedTransport).tp).Flush(ctx)
	}

	public async IsOpen(): globalThis.Promise<boolean> {
		const p: TBufferedTransport | $.VarRef<TBufferedTransport> | null = this;
		return $.pointerValue<Exclude<__goscript_transport.TTransport, null>>($.pointerValue<TBufferedTransport>(p).tp).IsOpen()
	}

	public async Open(): globalThis.Promise<$.GoError> {
		const p: TBufferedTransport | $.VarRef<TBufferedTransport> | null = this;
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<Exclude<__goscript_transport.TTransport, null>>($.pointerValue<TBufferedTransport>(p).tp).Open()
	}

	public async Read(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const p: TBufferedTransport | $.VarRef<TBufferedTransport> | null = this;
		const p$: TBufferedTransport = p == null ? $.pointerTarget<TBufferedTransport>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TBufferedTransport>(p)
		let [n, err] = await $.pointerValue<bufio.Reader>((p$ as TBufferedTransport).ReadWriter.Reader).Read(b)
		if (err != null) {
			bufio.Reader.prototype.Reset.call((p$ as TBufferedTransport).ReadWriter.Reader, ((p$ as TBufferedTransport).tp as io.Reader | null))
		}
		return [n, err]
	}

	public async RemainingBytes(): globalThis.Promise<bigint> {
		const p: TBufferedTransport | $.VarRef<TBufferedTransport> | null = this;
		let num_bytes: bigint = 0n
		return $.pointerValue<Exclude<__goscript_transport.TTransport, null>>($.pointerValue<TBufferedTransport>(p).tp).RemainingBytes()
	}

	public async SetTConfiguration(conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<void> {
		const p: TBufferedTransport | $.VarRef<TBufferedTransport> | null = this;
		await __goscript_configuration.PropagateTConfiguration(($.pointerValue<TBufferedTransport>(p).tp as any), conf)
	}

	public async Write(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const p: TBufferedTransport | $.VarRef<TBufferedTransport> | null = this;
		const p$: TBufferedTransport = p == null ? $.pointerTarget<TBufferedTransport>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TBufferedTransport>(p)
		let [n, err] = await $.pointerValue<bufio.Writer>((p$ as TBufferedTransport).ReadWriter.Writer).Write(b)
		if (err != null) {
			bufio.Writer.prototype.Reset.call((p$ as TBufferedTransport).ReadWriter.Writer, ((p$ as TBufferedTransport).tp as io.Writer | null))
		}
		return [n, err]
	}

	public Available(): any {
		return $.pointerValue<any>($.pointerValue<bufio.ReadWriter>(this.ReadWriter).Writer).Available()
	}

	public AvailableBuffer(): any {
		return $.pointerValue<any>($.pointerValue<bufio.ReadWriter>(this.ReadWriter).Writer).AvailableBuffer()
	}

	public async Discard(n: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<bufio.ReadWriter>(this.ReadWriter).Reader).Discard(n)
	}

	public async Peek(n: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<bufio.ReadWriter>(this.ReadWriter).Reader).Peek(n)
	}

	public async ReadByte(): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<bufio.ReadWriter>(this.ReadWriter).Reader).ReadByte()
	}

	public async ReadBytes(delim: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<bufio.ReadWriter>(this.ReadWriter).Reader).ReadBytes(delim)
	}

	public async ReadFrom(r: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<bufio.ReadWriter>(this.ReadWriter).Writer).ReadFrom(r)
	}

	public async ReadLine(): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<bufio.ReadWriter>(this.ReadWriter).Reader).ReadLine()
	}

	public async ReadRune(): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<bufio.ReadWriter>(this.ReadWriter).Reader).ReadRune()
	}

	public async ReadSlice(delim: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<bufio.ReadWriter>(this.ReadWriter).Reader).ReadSlice(delim)
	}

	public async ReadString(delim: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<bufio.ReadWriter>(this.ReadWriter).Reader).ReadString(delim)
	}

	public UnreadByte(): any {
		return $.pointerValue<any>($.pointerValue<bufio.ReadWriter>(this.ReadWriter).Reader).UnreadByte()
	}

	public UnreadRune(): any {
		return $.pointerValue<any>($.pointerValue<bufio.ReadWriter>(this.ReadWriter).Reader).UnreadRune()
	}

	public async WriteByte(c: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<bufio.ReadWriter>(this.ReadWriter).Writer).WriteByte(c)
	}

	public async WriteRune(r: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<bufio.ReadWriter>(this.ReadWriter).Writer).WriteRune(r)
	}

	public async WriteString(s: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<bufio.ReadWriter>(this.ReadWriter).Writer).WriteString(s)
	}

	public async WriteTo(w: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<bufio.ReadWriter>(this.ReadWriter).Reader).WriteTo(w)
	}

	static __typeInfo = $.registerStructType(
		"thrift.TBufferedTransport",
		() => new TBufferedTransport(),
		() => [$.methodSignature("Close", [], [["err", "error"]], true), $.methodSignature("Flush", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("IsOpen", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Open", [], [["err", "error"]], true), $.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("RemainingBytes", [], [["num_bytes", /* @__PURE__ */ $.basicType("uint64")]], true), $.methodSignature("SetTConfiguration", [["conf", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]], [], true), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("Available", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("AvailableBuffer", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Discard", [["n", /* @__PURE__ */ $.basicType("int")]], [["discarded", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("Peek", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ReadByte", [], [/* @__PURE__ */ $.basicType("uint8"), "error"]), $.methodSignature("ReadBytes", [["delim", /* @__PURE__ */ $.basicType("uint8")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ReadFrom", [["r", "io.Reader"]], [["n", /* @__PURE__ */ $.basicType("int64")], ["err", "error"]]), $.methodSignature("ReadLine", [], [["line", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["isPrefix", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]]), $.methodSignature("ReadRune", [], [["r", /* @__PURE__ */ $.basicType("int32")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("ReadSlice", [["delim", /* @__PURE__ */ $.basicType("uint8")]], [["line", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]]), $.methodSignature("ReadString", [["delim", /* @__PURE__ */ $.basicType("uint8")]], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("UnreadByte", [], ["error"]), $.methodSignature("UnreadRune", [], ["error"]), $.methodSignature("WriteByte", [["c", /* @__PURE__ */ $.basicType("uint8")]], ["error"]), $.methodSignature("WriteRune", [["r", /* @__PURE__ */ $.basicType("int32")]], [["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("WriteTo", [["w", "io.Writer"]], [["n", /* @__PURE__ */ $.basicType("int64")], ["err", "error"]])],
		TBufferedTransport,
		() => [/* @__PURE__ */ $.structField("ReadWriter", "bufio.ReadWriter", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("tp", "thrift.TTransport", [1], 16, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export function NewTBufferedTransportFactory(bufferSize: number): TBufferedTransportFactory | $.VarRef<TBufferedTransportFactory> | null {
	return new TBufferedTransportFactory({size: bufferSize})
}

export function NewTBufferedTransport(trans: __goscript_transport.TTransport | null, bufferSize: number): TBufferedTransport | $.VarRef<TBufferedTransport> | null {
	return new TBufferedTransport({ReadWriter: (() => { const __goscriptLiteralField0 = bufio.NewReaderSize((trans as io.Reader | null), bufferSize); const __goscriptLiteralField1 = bufio.NewWriterSize((trans as io.Writer | null), bufferSize); return new bufio.ReadWriter({Reader: __goscriptLiteralField0, Writer: __goscriptLiteralField1}, true) })(), tp: trans})
}

var __goscriptAwait: any
