// Generated file based on iostream_transport.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as context from "@goscript/context/index.js"

import * as io from "@goscript/io/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript__type from "./type.gs.ts"

import * as __goscript_configuration from "./configuration.gs.ts"

import type * as __goscript_exception from "./exception.gs.ts"

import * as __goscript_header_transport from "./header_transport.gs.ts"

import type * as __goscript_messagetype from "./messagetype.gs.ts"

import type * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_rich_transport from "./rich_transport.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"

import * as __goscript_transport_exception from "./transport_exception.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/context/index.js"
import "@goscript/io/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/time/index.js"
import "./configuration.gs.ts"
import "./header_transport.gs.ts"
import "./rich_transport.gs.ts"
import "./transport.gs.ts"
import "./transport_exception.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.StreamTransport", "thrift.StreamTransportFactory"])

export class StreamTransport {
	public get Reader(): io.Reader | null {
		return this._fields.Reader
	}

	public set Reader(value: io.Reader | null) {
		this._fields.Reader = value
	}

	public get Writer(): io.Writer | null {
		return this._fields.Writer
	}

	public set Writer(value: io.Writer | null) {
		this._fields.Writer = value
	}

	public get isReadWriter(): boolean {
		return this._fields.isReadWriter
	}

	public set isReadWriter(value: boolean) {
		this._fields.isReadWriter = value
	}

	public get closed(): boolean {
		return this._fields.closed
	}

	public set closed(value: boolean) {
		this._fields.closed = value
	}

	public _fields: {
		Reader: io.Reader | null
		Writer: io.Writer | null
		isReadWriter: boolean
		closed: boolean
	}

	constructor(init?: Partial<{Reader?: io.Reader | null, Writer?: io.Writer | null, isReadWriter?: boolean, closed?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Reader: init?.Reader ?? (null! as io.Reader | null),
			Writer: init?.Writer ?? (null! as io.Writer | null),
			isReadWriter: init?.isReadWriter ?? (false as boolean),
			closed: init?.closed ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StreamTransport {
		return new StreamTransport(this, true)
	}

	public __goscriptAssign(source: StreamTransport): void {
		const target = this._fields
		const values = source._fields
		target.Reader = $.assignFieldValue(target.Reader, values.Reader, "io.Reader")
		target.Writer = $.assignFieldValue(target.Writer, values.Writer, "io.Writer")
		target.isReadWriter = values.isReadWriter
		target.closed = values.closed
	}

	public async Close(): globalThis.Promise<$.GoError> {
		let p: StreamTransport | $.VarRef<StreamTransport> | null = this;
		const p$: StreamTransport = p == null ? $.pointerTarget<StreamTransport>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<StreamTransport>(p)
		if ((p$ as StreamTransport).closed) {
			return (__goscript_transport_exception.NewTTransportException(1, "StreamTransport already closed.") as $.GoError)
		}
		;(p$ as StreamTransport).closed = true
		let closedReader = false
		if ((p$ as StreamTransport).Reader != null) {
			let [c, ok] = $.typeAssertTuple<io.Closer | null>((p$ as StreamTransport).Reader, "io.Closer")
			if (ok) {
				let e = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<io.Closer, null>) : $.pointerValue<Exclude<io.Closer, null>>(c)).Close()
				closedReader = true
				if (e != null) {
					return e
				}
			}
			;(p$ as StreamTransport).Reader = null
		}
		if (((p$ as StreamTransport).Writer != null) && (!closedReader || !(p$ as StreamTransport).isReadWriter)) {
			let [c, ok] = $.typeAssertTuple<io.Closer | null>((p$ as StreamTransport).Writer, "io.Closer")
			if (ok) {
				let e = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<io.Closer, null>) : $.pointerValue<Exclude<io.Closer, null>>(c)).Close()
				if (e != null) {
					return e
				}
			}
			;(p$ as StreamTransport).Writer = null
		}
		return null
	}

	public async Flush(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: StreamTransport | $.VarRef<StreamTransport> | null = this;
		const p$: StreamTransport = p == null ? $.pointerTarget<StreamTransport>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<StreamTransport>(p)
		if ((p$ as StreamTransport).Writer == null) {
			return (__goscript_transport_exception.NewTTransportException(1, "Cannot flush null outputStream") as $.GoError)
		}
		let [f, ok] = $.typeAssertTuple<__goscript_transport.Flusher | null>((p$ as StreamTransport).Writer, "thrift.Flusher")
		if (ok) {
			let err = (__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<__goscript_transport.Flusher, null>) : $.pointerValue<Exclude<__goscript_transport.Flusher, null>>(f)).Flush(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
			}
		}
		return null
	}

	public IsOpen(): boolean {
		const p: StreamTransport | $.VarRef<StreamTransport> | null = this;
		return !$.pointerValue<StreamTransport>(p).closed
	}

	public Open(): $.GoError {
		const p: StreamTransport | $.VarRef<StreamTransport> | null = this;
		if (!$.pointerValue<StreamTransport>(p).closed) {
			return (__goscript_transport_exception.NewTTransportException(2, "StreamTransport already open.") as $.GoError)
		} else {
			return (__goscript_transport_exception.NewTTransportException(1, "cannot reopen StreamTransport.") as $.GoError)
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Read(c: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const p: StreamTransport | $.VarRef<StreamTransport> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple0: any = await $.pointerValue<Exclude<io.Reader, null>>($.pointerValue<StreamTransport>(p).Reader).Read(c)
		n = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			err = (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
		}
		return [n, err]
	}

	public async ReadByte(): globalThis.Promise<[number, $.GoError]> {
		const p: StreamTransport | $.VarRef<StreamTransport> | null = this;
		let c: number = 0
		let err: $.GoError = null! as $.GoError
		const p$: StreamTransport = p == null ? $.pointerTarget<StreamTransport>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<StreamTransport>(p)
		let [f, ok] = $.typeAssertTuple<io.ByteReader | null>((p$ as StreamTransport).Reader, "io.ByteReader")
		if (ok) {
			let __goscriptTuple1: any = await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<io.ByteReader, null>) : $.pointerValue<Exclude<io.ByteReader, null>>(f)).ReadByte()
			c = __goscriptTuple1[0]
			err = __goscriptTuple1[1]
		} else {
			let __goscriptTuple2: any = await __goscript_rich_transport.readByte((p$ as StreamTransport).Reader)
			c = __goscriptTuple2[0]
			err = __goscriptTuple2[1]
		}
		if (err != null) {
			err = (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
		}
		return [c, err]
	}

	public RemainingBytes(): bigint {
		const p: StreamTransport | $.VarRef<StreamTransport> | null = this;
		let num_bytes: bigint = 0n
		const maxSize: bigint = 18446744073709551615n
		return 18446744073709551615n
	}

	public async SetTConfiguration(conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<void> {
		const p: StreamTransport | $.VarRef<StreamTransport> | null = this;
		const p$: StreamTransport = p == null ? $.pointerTarget<StreamTransport>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<StreamTransport>(p)
		await __goscript_configuration.PropagateTConfiguration(((p$ as StreamTransport).Reader as any), conf)
		await __goscript_configuration.PropagateTConfiguration(((p$ as StreamTransport).Writer as any), conf)
	}

	public async Write(c: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const p: StreamTransport | $.VarRef<StreamTransport> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple3: any = await $.pointerValue<Exclude<io.Writer, null>>($.pointerValue<StreamTransport>(p).Writer).Write(c)
		n = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			err = (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
		}
		return [n, err]
	}

	public async WriteByte(c: number): globalThis.Promise<$.GoError> {
		const p: StreamTransport | $.VarRef<StreamTransport> | null = this;
		let err: $.GoError = null! as $.GoError
		const p$: StreamTransport = p == null ? $.pointerTarget<StreamTransport>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<StreamTransport>(p)
		let [f, ok] = $.typeAssertTuple<io.ByteWriter | null>((p$ as StreamTransport).Writer, "io.ByteWriter")
		if (ok) {
			err = (__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<io.ByteWriter, null>) : $.pointerValue<Exclude<io.ByteWriter, null>>(f)).WriteByte(c), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			err = await __goscript_rich_transport.writeByte((p$ as StreamTransport).Writer, c)
		}
		if (err != null) {
			err = (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
		}
		return err
	}

	public async WriteString(s: string): globalThis.Promise<[number, $.GoError]> {
		const p: StreamTransport | $.VarRef<StreamTransport> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const p$: StreamTransport = p == null ? $.pointerTarget<StreamTransport>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<StreamTransport>(p)
		let [f, ok] = $.typeAssertTuple<__goscript_transport.stringWriter | null>((p$ as StreamTransport).Writer, "thrift.stringWriter")
		if (ok) {
			let __goscriptTuple4: any = await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<__goscript_transport.stringWriter, null>) : $.pointerValue<Exclude<__goscript_transport.stringWriter, null>>(f)).WriteString(s)
			n = __goscriptTuple4[0]
			err = __goscriptTuple4[1]
		} else {
			let __goscriptTuple5: any = await $.pointerValue<Exclude<io.Writer, null>>((p$ as StreamTransport).Writer).Write($.stringToBytes(s))
			n = __goscriptTuple5[0]
			err = __goscriptTuple5[1]
		}
		if (err != null) {
			err = (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
		}
		return [n, err]
	}

	static __typeInfo = $.registerStructType(
		"thrift.StreamTransport",
		() => new StreamTransport(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Flush", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("IsOpen", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Open", [], ["error"], true), $.methodSignature("Read", [["c", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ReadByte", [], [["c", /* @__PURE__ */ $.basicType("uint8")], ["err", "error"]], true), $.methodSignature("RemainingBytes", [], [["num_bytes", /* @__PURE__ */ $.basicType("uint64")]], true), $.methodSignature("SetTConfiguration", [["conf", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]], [], true), $.methodSignature("Write", [["c", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("WriteByte", [["c", /* @__PURE__ */ $.basicType("uint8")]], [["err", "error"]], true), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		StreamTransport,
		() => [/* @__PURE__ */ $.structField("Reader", "io.Reader", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Writer", "io.Writer", [1], 16, true, { anonymous: true }), /* @__PURE__ */ $.structField("isReadWriter", /* @__PURE__ */ $.basicType("bool"), [2], 32, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("closed", /* @__PURE__ */ $.basicType("bool"), [3], 33, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export class StreamTransportFactory {
	public get Reader(): io.Reader | null {
		return this._fields.Reader
	}

	public set Reader(value: io.Reader | null) {
		this._fields.Reader = value
	}

	public get Writer(): io.Writer | null {
		return this._fields.Writer
	}

	public set Writer(value: io.Writer | null) {
		this._fields.Writer = value
	}

	public get isReadWriter(): boolean {
		return this._fields.isReadWriter
	}

	public set isReadWriter(value: boolean) {
		this._fields.isReadWriter = value
	}

	public _fields: {
		Reader: io.Reader | null
		Writer: io.Writer | null
		isReadWriter: boolean
	}

	constructor(init?: Partial<{Reader?: io.Reader | null, Writer?: io.Writer | null, isReadWriter?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Reader: init?.Reader ?? (null! as io.Reader | null),
			Writer: init?.Writer ?? (null! as io.Writer | null),
			isReadWriter: init?.isReadWriter ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StreamTransportFactory {
		return new StreamTransportFactory(this, true)
	}

	public __goscriptAssign(source: StreamTransportFactory): void {
		const target = this._fields
		const values = source._fields
		target.Reader = $.assignFieldValue(target.Reader, values.Reader, "io.Reader")
		target.Writer = $.assignFieldValue(target.Writer, values.Writer, "io.Writer")
		target.isReadWriter = values.isReadWriter
	}

	public GetTransport(trans: __goscript_transport.TTransport | null): [__goscript_transport.TTransport | null, $.GoError] {
		const p: StreamTransportFactory | $.VarRef<StreamTransportFactory> | null = this;
		const p$: StreamTransportFactory = p == null ? $.pointerTarget<StreamTransportFactory>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<StreamTransportFactory>(p)
		if (trans != null) {
			let __goscriptTuple6: any = $.typeAssertTuple<StreamTransport | $.VarRef<StreamTransport> | null>(trans, /* @__PURE__ */ $.pointerType("thrift.StreamTransport"))
			let t: StreamTransport | $.VarRef<StreamTransport> | null = __goscriptTuple6[0]
			let ok = __goscriptTuple6[1]
			let t$: StreamTransport = t == null ? $.pointerTarget<StreamTransport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<StreamTransport>(t)
			if (ok) {
				if ((t$ as StreamTransport).isReadWriter) {
					return [$.interfaceValue<__goscript_transport.TTransport | null>(NewStreamTransportRW($.mustTypeAssert<io.ReadWriter | null>((t$ as StreamTransport).Reader, "io.ReadWriter")), "*thrift.StreamTransport", /* @__PURE__ */ $.pointerType("thrift.StreamTransport")), null]
				}
				if (((t$ as StreamTransport).Reader != null) && ((t$ as StreamTransport).Writer != null)) {
					return [$.interfaceValue<__goscript_transport.TTransport | null>(NewStreamTransport((t$ as StreamTransport).Reader, (t$ as StreamTransport).Writer), "*thrift.StreamTransport", /* @__PURE__ */ $.pointerType("thrift.StreamTransport")), null]
				}
				if (((t$ as StreamTransport).Reader != null) && ((t$ as StreamTransport).Writer == null)) {
					return [$.interfaceValue<__goscript_transport.TTransport | null>(NewStreamTransportR((t$ as StreamTransport).Reader), "*thrift.StreamTransport", /* @__PURE__ */ $.pointerType("thrift.StreamTransport")), null]
				}
				if (((t$ as StreamTransport).Reader == null) && ((t$ as StreamTransport).Writer != null)) {
					return [$.interfaceValue<__goscript_transport.TTransport | null>(NewStreamTransportW((t$ as StreamTransport).Writer), "*thrift.StreamTransport", /* @__PURE__ */ $.pointerType("thrift.StreamTransport")), null]
				}
				return [$.interfaceValue<__goscript_transport.TTransport | null>(new StreamTransport(), "*thrift.StreamTransport", /* @__PURE__ */ $.pointerType("thrift.StreamTransport")), null]
			}
		}
		if ((p$ as StreamTransportFactory).isReadWriter) {
			return [$.interfaceValue<__goscript_transport.TTransport | null>(NewStreamTransportRW($.mustTypeAssert<io.ReadWriter | null>((p$ as StreamTransportFactory).Reader, "io.ReadWriter")), "*thrift.StreamTransport", /* @__PURE__ */ $.pointerType("thrift.StreamTransport")), null]
		}
		if (((p$ as StreamTransportFactory).Reader != null) && ((p$ as StreamTransportFactory).Writer != null)) {
			return [$.interfaceValue<__goscript_transport.TTransport | null>(NewStreamTransport((p$ as StreamTransportFactory).Reader, (p$ as StreamTransportFactory).Writer), "*thrift.StreamTransport", /* @__PURE__ */ $.pointerType("thrift.StreamTransport")), null]
		}
		if (((p$ as StreamTransportFactory).Reader != null) && ((p$ as StreamTransportFactory).Writer == null)) {
			return [$.interfaceValue<__goscript_transport.TTransport | null>(NewStreamTransportR((p$ as StreamTransportFactory).Reader), "*thrift.StreamTransport", /* @__PURE__ */ $.pointerType("thrift.StreamTransport")), null]
		}
		if (((p$ as StreamTransportFactory).Reader == null) && ((p$ as StreamTransportFactory).Writer != null)) {
			return [$.interfaceValue<__goscript_transport.TTransport | null>(NewStreamTransportW((p$ as StreamTransportFactory).Writer), "*thrift.StreamTransport", /* @__PURE__ */ $.pointerType("thrift.StreamTransport")), null]
		}
		return [$.interfaceValue<__goscript_transport.TTransport | null>(new StreamTransport(), "*thrift.StreamTransport", /* @__PURE__ */ $.pointerType("thrift.StreamTransport")), null]
	}

	static __typeInfo = $.registerStructType(
		"thrift.StreamTransportFactory",
		() => new StreamTransportFactory(),
		() => [$.methodSignature("GetTransport", [["trans", "thrift.TTransport"]], ["thrift.TTransport", "error"], true)],
		StreamTransportFactory,
		() => [/* @__PURE__ */ $.structField("Reader", "io.Reader", [0], 0, true), /* @__PURE__ */ $.structField("Writer", "io.Writer", [1], 16, true), /* @__PURE__ */ $.structField("isReadWriter", /* @__PURE__ */ $.basicType("bool"), [2], 32, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export function NewStreamTransportFactory(reader: io.Reader | null, writer: io.Writer | null, isReadWriter: boolean): StreamTransportFactory | $.VarRef<StreamTransportFactory> | null {
	return new StreamTransportFactory({Reader: reader, Writer: writer, isReadWriter: isReadWriter})
}

export function NewStreamTransport(r: io.Reader | null, w: io.Writer | null): StreamTransport | $.VarRef<StreamTransport> | null {
	return (() => { const __goscriptLiteralField0 = $.interfaceValue<io.Reader | null>(bufio.NewReader(r), "*bufio.Reader", /* @__PURE__ */ $.pointerType("bufio.Reader")); const __goscriptLiteralField1 = $.interfaceValue<io.Writer | null>(bufio.NewWriter(w), "*bufio.Writer", /* @__PURE__ */ $.pointerType("bufio.Writer")); return new StreamTransport({Reader: __goscriptLiteralField0, Writer: __goscriptLiteralField1}) })()
}

export function NewStreamTransportR(r: io.Reader | null): StreamTransport | $.VarRef<StreamTransport> | null {
	return (() => { const __goscriptLiteralField2 = $.interfaceValue<io.Reader | null>(bufio.NewReader(r), "*bufio.Reader", /* @__PURE__ */ $.pointerType("bufio.Reader")); return new StreamTransport({Reader: __goscriptLiteralField2}) })()
}

export function NewStreamTransportW(w: io.Writer | null): StreamTransport | $.VarRef<StreamTransport> | null {
	return (() => { const __goscriptLiteralField3 = $.interfaceValue<io.Writer | null>(bufio.NewWriter(w), "*bufio.Writer", /* @__PURE__ */ $.pointerType("bufio.Writer")); return new StreamTransport({Writer: __goscriptLiteralField3}) })()
}

export function NewStreamTransportRW(rw: io.ReadWriter | null): StreamTransport | $.VarRef<StreamTransport> | null {
	let bufrw: bufio.ReadWriter | $.VarRef<bufio.ReadWriter> | null = bufio.NewReadWriter(bufio.NewReader((rw as io.Reader | null)), bufio.NewWriter((rw as io.Writer | null)))
	return new StreamTransport({Reader: $.interfaceValue<io.Reader | null>(bufrw, "*bufio.ReadWriter", /* @__PURE__ */ $.pointerType("bufio.ReadWriter")), Writer: $.interfaceValue<io.Writer | null>(bufrw, "*bufio.ReadWriter", /* @__PURE__ */ $.pointerType("bufio.ReadWriter")), isReadWriter: true})
}

var __goscriptAwait: any
