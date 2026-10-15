// Generated file based on stream.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import * as jsonpb from "@goscript/github.com/gogo/protobuf/jsonpb/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_marshal from "./marshal.gs.ts"

import * as __goscript_protobuf from "./protobuf.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/github.com/gogo/protobuf/jsonpb/index.js"
import "@goscript/io/index.js"
import "./error.gs.ts"
import "./marshal.gs.ts"
import "./protobuf.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/encoding/protobuf", ["protobuf.poolWrapper", "protobuf.bufferReadCloser"])

export class poolWrapper {
	public get cleanup(): (() => void) | null {
		return this._fields.cleanup
	}

	public set cleanup(value: (() => void) | null) {
		this._fields.cleanup = value
	}

	public _fields: {
		cleanup: (() => void) | null
	}

	constructor(init?: Partial<{cleanup?: (() => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			cleanup: init?.cleanup ?? (null! as (() => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): poolWrapper {
		return new poolWrapper(this, true)
	}

	public __goscriptAssign(source: poolWrapper): void {
		const target = this._fields
		const values = source._fields
		target.cleanup = values.cleanup
	}

	public Get(length: number): $.VarRef<$.Slice<number>> | null {
		const p: poolWrapper | $.VarRef<poolWrapper> | null = this;
		return null
	}

	public async Put(buf: $.VarRef<$.Slice<number>> | null): globalThis.Promise<void> {
		const p: poolWrapper | $.VarRef<poolWrapper> | null = this;
		const p$: poolWrapper = p == null ? $.pointerTarget<poolWrapper>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<poolWrapper>(p)
		if ((p$ as poolWrapper).cleanup != null) {
			void (__goscriptAwait = (p$ as poolWrapper).cleanup!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	static __typeInfo = $.registerStructType(
		"protobuf.poolWrapper",
		() => new poolWrapper(),
		() => [$.methodSignature("Get", [["length", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))], true), $.methodSignature("Put", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]], [], true)],
		poolWrapper,
		() => [/* @__PURE__ */ $.structField("cleanup", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" })]
	)
}

export class bufferReadCloser {
	public get buffer(): mem.Buffer | null {
		return this._fields.buffer
	}

	public set buffer(value: mem.Buffer | null) {
		this._fields.buffer = value
	}

	public get Reader(): bytes.Reader | $.VarRef<bytes.Reader> | null {
		return this._fields.Reader
	}

	public set Reader(value: bytes.Reader | $.VarRef<bytes.Reader> | null) {
		this._fields.Reader = value
	}

	public _fields: {
		buffer: mem.Buffer | null
		Reader: bytes.Reader | $.VarRef<bytes.Reader> | null
	}

	constructor(init?: Partial<{buffer?: mem.Buffer | null, Reader?: bytes.Reader | $.VarRef<bytes.Reader> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			buffer: init?.buffer ?? (null! as mem.Buffer | null),
			Reader: init?.Reader ?? (null! as bytes.Reader | $.VarRef<bytes.Reader> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): bufferReadCloser {
		return new bufferReadCloser(this, true)
	}

	public __goscriptAssign(source: bufferReadCloser): void {
		const target = this._fields
		const values = source._fields
		target.buffer = $.assignFieldValue(target.buffer, values.buffer, "mem.Buffer")
		target.Reader = values.Reader
	}

	public Buffer(): mem.Buffer | null {
		const b: bufferReadCloser | $.VarRef<bufferReadCloser> | null = this;
		return $.pointerValue<bufferReadCloser>(b).buffer
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const b: bufferReadCloser | $.VarRef<bufferReadCloser> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<mem.Buffer, null>>($.pointerValue<bufferReadCloser>(b).buffer).Free(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return null
	}

	public Len(): any {
		return $.pointerValue<bytes.Reader>(this.Reader).Len()
	}

	public Read(b: any): any {
		return $.pointerValue<bytes.Reader>(this.Reader).Read(b)
	}

	public ReadAt(b: any, off: any): any {
		return $.pointerValue<bytes.Reader>(this.Reader).ReadAt(b, off)
	}

	public ReadByte(): any {
		return $.pointerValue<bytes.Reader>(this.Reader).ReadByte()
	}

	public ReadRune(): any {
		return $.pointerValue<bytes.Reader>(this.Reader).ReadRune()
	}

	public Reset(b: any): any {
		return $.pointerValue<bytes.Reader>(this.Reader).Reset(b)
	}

	public Seek(offset: any, whence: any): any {
		return $.pointerValue<bytes.Reader>(this.Reader).Seek(offset, whence)
	}

	public Size(): any {
		return $.pointerValue<bytes.Reader>(this.Reader).Size()
	}

	public UnreadByte(): any {
		return $.pointerValue<bytes.Reader>(this.Reader).UnreadByte()
	}

	public UnreadRune(): any {
		return $.pointerValue<bytes.Reader>(this.Reader).UnreadRune()
	}

	public WriteTo(w: any): any {
		return $.pointerValue<bytes.Reader>(this.Reader).WriteTo(w)
	}

	static __typeInfo = $.registerStructType(
		"protobuf.bufferReadCloser",
		() => new bufferReadCloser(),
		() => [$.methodSignature("Buffer", [], ["mem.Buffer"], true), $.methodSignature("Close", [], ["error"], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("ReadAt", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["off", /* @__PURE__ */ $.basicType("int64")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("ReadByte", [], [/* @__PURE__ */ $.basicType("uint8"), "error"]), $.methodSignature("ReadRune", [], [["ch", /* @__PURE__ */ $.basicType("int32")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("Reset", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("Seek", [["offset", /* @__PURE__ */ $.basicType("int64")], ["whence", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int64"), "error"]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("UnreadByte", [], ["error"]), $.methodSignature("UnreadRune", [], ["error"]), $.methodSignature("WriteTo", [["w", "io.Writer"]], [["n", /* @__PURE__ */ $.basicType("int64")], ["err", "error"]])],
		bufferReadCloser,
		() => [/* @__PURE__ */ $.structField("buffer", "mem.Buffer", [0], 0, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" }), /* @__PURE__ */ $.structField("Reader", /* @__PURE__ */ $.pointerType("bytes.Reader"), [1], 16, true, { anonymous: true })]
	)
}

export async function readFromStream(ctx: context.Context | null, stream: transport.Stream | null, newMessage: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null, codec: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
	let __goscriptTuple0: any = await (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? (stream as Exclude<transport.Stream, null>) : $.pointerValue<Exclude<transport.Stream, null>>(stream)).ReceiveMessage(ctx)
	let streamMsg: transport.StreamMessage | $.VarRef<transport.StreamMessage> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	let streamMsg$: transport.StreamMessage = streamMsg == null ? $.pointerTarget<transport.StreamMessage>(streamMsg) : (streamMsg as any).__isVarRef === true ? (streamMsg as any).value : (streamMsg as any).__goValue === undefined ? (streamMsg as any) : $.pointerTarget<transport.StreamMessage>(streamMsg)
	if (err != null) {
		return [null, await __goscript_error.convertFromYARPCError("proto", err, codec)]
	}
	let message = (__goscriptAwait = newMessage!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	{
		let __goscriptShadow0 = await __goscript_marshal.unmarshal($.pointerValue<transport.RequestMeta>($.pointerValue<transport.StreamRequest>(((__goscriptAwait = (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? (stream as Exclude<transport.Stream, null>) : $.pointerValue<Exclude<transport.Stream, null>>(stream)).Request(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as transport.StreamRequest | $.VarRef<transport.StreamRequest> | null)).Meta).Encoding, ((streamMsg$ as transport.StreamMessage).Body as io.Reader | null), message, codec)
		if (__goscriptShadow0 != null) {
			await $.pointerValue<Exclude<io.ReadCloser, null>>((streamMsg$ as transport.StreamMessage).Body).Close()
			return [null, __goscriptShadow0]
		}
	}
	if ((streamMsg$ as transport.StreamMessage).Body != null) {
		await $.pointerValue<Exclude<io.ReadCloser, null>>((streamMsg$ as transport.StreamMessage).Body).Close()
	}
	return [message, null]
}

export async function writeToStream(ctx: context.Context | null, stream: transport.Stream | null, message: proto.Message | null, codec: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null): globalThis.Promise<$.GoError> {
	let __goscriptTuple1: any = await __goscript_marshal.marshal($.pointerValue<transport.RequestMeta>($.pointerValue<transport.StreamRequest>(((__goscriptAwait = (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? (stream as Exclude<transport.Stream, null>) : $.pointerValue<Exclude<transport.Stream, null>>(stream)).Request(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as transport.StreamRequest | $.VarRef<transport.StreamRequest> | null)).Meta).Encoding, message, codec)
	let messageData: $.VarRef<$.Slice<number>> = $.varRef(__goscriptTuple1[0])
	let cleanup: (() => void) | null = __goscriptTuple1[1]
	let err = __goscriptTuple1[2]
	if (err != null) {
		return err
	}

	let buffer = await mem.NewBuffer(messageData, $.interfaceValue<mem.BufferPool | null>(new poolWrapper({cleanup: cleanup}), "*protobuf.poolWrapper", /* @__PURE__ */ $.pointerType("protobuf.poolWrapper")))

	return (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? (stream as Exclude<transport.Stream, null>) : $.pointerValue<Exclude<transport.Stream, null>>(stream)).SendMessage(ctx, new transport.StreamMessage({Body: $.interfaceValue<io.ReadCloser | null>((() => { const __goscriptLiteralField0 = bytes.NewReader(messageData.value); return new bufferReadCloser({buffer: buffer, Reader: __goscriptLiteralField0}) })(), "*protobuf.bufferReadCloser", /* @__PURE__ */ $.pointerType("protobuf.bufferReadCloser")), BodySize: $.sliceLen(messageData.value)}))
}

var __goscriptAwait: any
