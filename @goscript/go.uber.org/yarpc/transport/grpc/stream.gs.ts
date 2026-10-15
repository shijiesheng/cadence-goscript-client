// Generated file based on stream.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as io from "@goscript/io/index.js"

import * as ioutil from "@goscript/io/ioutil/index.js"

import * as status2 from "@goscript/github.com/gogo/status/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as grpcerrorcodes from "@goscript/go.uber.org/yarpc/internal/grpcerrorcodes/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as grpc from "@goscript/google.golang.org/grpc/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as __goscript_marshal from "./marshal.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/io/index.js"
import "@goscript/io/ioutil/index.js"
import "@goscript/github.com/gogo/status/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/internal/grpcerrorcodes/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/google.golang.org/grpc/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"
import "./marshal.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/transport/grpc", ["grpc.BufferProvider", "grpc.serverStream", "grpc.readCloser", "grpc.clientStream"])

export type BufferProvider = {
	Buffer(): mem.Buffer | null
	Close(): $.GoError | globalThis.Promise<$.GoError>
	Read(p: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
}

$.registerInterfaceType(
	"grpc.BufferProvider",
	null,
	[{ name: "Buffer", args: [], returns: [{ type: "mem.Buffer" }] }, { name: "Close", args: [], returns: [{ type: "error" }] }, { name: "Read", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }] }]
);

export class serverStream {
	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get req(): transport.StreamRequest | $.VarRef<transport.StreamRequest> | null {
		return this._fields.req
	}

	public set req(value: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null) {
		this._fields.req = value
	}

	public get stream(): grpc.ServerStream | null {
		return this._fields.stream
	}

	public set stream(value: grpc.ServerStream | null) {
		this._fields.stream = value
	}

	public _fields: {
		ctx: context.Context | null
		req: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null
		stream: grpc.ServerStream | null
	}

	constructor(init?: Partial<{ctx?: context.Context | null, req?: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null, stream?: grpc.ServerStream | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ctx: init?.ctx ?? (null! as context.Context | null),
			req: init?.req ?? (null! as transport.StreamRequest | $.VarRef<transport.StreamRequest> | null),
			stream: init?.stream ?? (null! as grpc.ServerStream | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): serverStream {
		return new serverStream(this, true)
	}

	public __goscriptAssign(source: serverStream): void {
		const target = this._fields
		const values = source._fields
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.req = values.req
		target.stream = $.assignFieldValue(target.stream, values.stream, "grpc.ServerStream")
	}

	public Context(): context.Context | null {
		const ss: serverStream | $.VarRef<serverStream> | null = this;
		return $.pointerValue<serverStream>(ss).ctx
	}

	public async ReceiveMessage(_p0: context.Context | null): globalThis.Promise<[transport.StreamMessage | $.VarRef<transport.StreamMessage> | null, $.GoError]> {
		const ss: serverStream | $.VarRef<serverStream> | null = this;
		let msg: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<grpc.ServerStream, null>>($.pointerValue<serverStream>(ss).stream).RecvMsg($.interfaceValue(msg, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [null, toYARPCStreamError(err)]
			}
		}
		return [new transport.StreamMessage({Body: $.interfaceValue<io.ReadCloser | null>((() => { const __goscriptLiteralField0 = bytes.NewReader(msg.value); return new readCloser({Reader: __goscriptLiteralField0}, true) })(), "grpc.readCloser", "grpc.readCloser"), BodySize: $.sliceLen(msg.value)}), null]
	}

	public Request(): transport.StreamRequest | $.VarRef<transport.StreamRequest> | null {
		const ss: serverStream | $.VarRef<serverStream> | null = this;
		return $.pointerValue<serverStream>(ss).req
	}

	public async SendHeaders(headers: transport.Headers): globalThis.Promise<$.GoError> {
		const ss: serverStream | $.VarRef<serverStream> | null = this;
		let md: metadata.MD = $.makeMap<string, $.Slice<string>>()
		for (const [k, v] of $.markAsStructValue($.cloneStructValue(headers)).Items()?.entries() ?? []) {
			metadata.MD_Set(md, k, $.arrayToSlice<string>([v]))
		}
		return $.pointerValue<Exclude<grpc.ServerStream, null>>($.pointerValue<serverStream>(ss).stream).SendHeader(md)
	}

	public async SendMessage(_p0: context.Context | null, m: transport.StreamMessage | $.VarRef<transport.StreamMessage> | null): globalThis.Promise<$.GoError> {
		const ss: serverStream | $.VarRef<serverStream> | null = this;
		const ss$: serverStream = ss == null ? $.pointerTarget<serverStream>(ss) : (ss as any).__isVarRef === true ? (ss as any).value : (ss as any).__goValue === undefined ? (ss as any) : $.pointerTarget<serverStream>(ss)
		const m$: transport.StreamMessage = m == null ? $.pointerTarget<transport.StreamMessage>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<transport.StreamMessage>(m)
		{
			let [bufferProvider, ok] = $.typeAssertTuple<BufferProvider | null>((m$ as transport.StreamMessage).Body, "grpc.BufferProvider")
			if (ok) {
				let buffer = (__goscriptAwait = (bufferProvider !== null && (bufferProvider as any).__isVarRef !== true && (bufferProvider as any).__goValue === undefined ? (bufferProvider as Exclude<BufferProvider, null>) : $.pointerValue<Exclude<BufferProvider, null>>(bufferProvider)).Buffer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				let err = (__goscriptAwait = $.pointerValue<Exclude<grpc.ServerStream, null>>((ss$ as serverStream).stream).SendMsg((buffer as any)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				await $.pointerValue<Exclude<io.ReadCloser, null>>((m$ as transport.StreamMessage).Body).Close()
				return toYARPCStreamError(err)
			}
		}

		let __goscriptTuple0: any = ioutil.ReadAll(((m$ as transport.StreamMessage).Body as io.Reader | null))
		let msg: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		await $.pointerValue<Exclude<io.ReadCloser, null>>((m$ as transport.StreamMessage).Body).Close()
		if (err != null) {
			return err
		}
		return toYARPCStreamError((__goscriptAwait = $.pointerValue<Exclude<grpc.ServerStream, null>>((ss$ as serverStream).stream).SendMsg($.interfaceValue(msg, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	static __typeInfo = $.registerStructType(
		"grpc.serverStream",
		() => new serverStream(),
		() => [{ name: "Context", args: [], returns: [{ type: "context.Context" }], pointerReceiver: true }, { name: "ReceiveMessage", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.StreamMessage") }, { type: "error" }], pointerReceiver: true }, { name: "Request", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.StreamRequest") }], pointerReceiver: true }, { name: "SendHeaders", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "SendMessage", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		serverStream,
		() => [{ name: "ctx", key: "ctx", type: "context.Context" }, { name: "req", key: "req", type: /* @__PURE__ */ $.pointerType("transport.StreamRequest") }, { name: "stream", key: "stream", type: "grpc.ServerStream" }]
	)
}

export class readCloser {
	public get Reader(): bytes.Reader | $.VarRef<bytes.Reader> | null {
		return this._fields.Reader
	}

	public set Reader(value: bytes.Reader | $.VarRef<bytes.Reader> | null) {
		this._fields.Reader = value
	}

	public _fields: {
		Reader: bytes.Reader | $.VarRef<bytes.Reader> | null
	}

	constructor(init?: Partial<{Reader?: bytes.Reader | $.VarRef<bytes.Reader> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Reader: init?.Reader ?? (null! as bytes.Reader | $.VarRef<bytes.Reader> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): readCloser {
		return new readCloser(this, true)
	}

	public __goscriptAssign(source: readCloser): void {
		const target = this._fields
		const values = source._fields
		target.Reader = values.Reader
	}

	public Close(): $.GoError {
		const r = this;
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
		"grpc.readCloser",
		() => new readCloser(),
		() => [{ name: "Close", args: [], returns: [{ type: "error" }] }, { name: "Len", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }] }, { name: "Read", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }] }, { name: "ReadAt", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }] }, { name: "ReadByte", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("uint8") }, { type: "error" }] }, { name: "ReadRune", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }, { type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }] }, { name: "Reset", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "Seek", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }, { type: "error" }] }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }] }, { name: "UnreadByte", args: [], returns: [{ type: "error" }] }, { name: "UnreadRune", args: [], returns: [{ type: "error" }] }, { name: "WriteTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }, { type: "error" }] }],
		readCloser,
		() => [{ name: "Reader", key: "Reader", type: /* @__PURE__ */ $.pointerType("bytes.Reader"), anonymous: true }]
	)
}

export class clientStream {
	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get req(): transport.StreamRequest | $.VarRef<transport.StreamRequest> | null {
		return this._fields.req
	}

	public set req(value: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null) {
		this._fields.req = value
	}

	public get stream(): grpc.ClientStream | null {
		return this._fields.stream
	}

	public set stream(value: grpc.ClientStream | null) {
		this._fields.stream = value
	}

	public get span(): opentracing.Span | null {
		return this._fields.span
	}

	public set span(value: opentracing.Span | null) {
		this._fields.span = value
	}

	public get closed(): atomic.Bool {
		return this._fields.closed
	}

	public set closed(value: atomic.Bool) {
		this._fields.closed = value
	}

	public get release(): ((_p0: $.GoError) => void) | null {
		return this._fields.release
	}

	public set release(value: ((_p0: $.GoError) => void) | null) {
		this._fields.release = value
	}

	public _fields: {
		ctx: context.Context | null
		req: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null
		stream: grpc.ClientStream | null
		span: opentracing.Span | null
		closed: atomic.Bool
		release: ((_p0: $.GoError) => void) | null
	}

	constructor(init?: Partial<{ctx?: context.Context | null, req?: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null, stream?: grpc.ClientStream | null, span?: opentracing.Span | null, closed?: atomic.Bool, release?: ((_p0: $.GoError) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ctx: init?.ctx ?? (null! as context.Context | null),
			req: init?.req ?? (null! as transport.StreamRequest | $.VarRef<transport.StreamRequest> | null),
			stream: init?.stream ?? (null! as grpc.ClientStream | null),
			span: init?.span ?? (null! as opentracing.Span | null),
			closed: init?.closed ? init.closed.clone() : new atomic.Bool(undefined, true),
			release: init?.release ?? (null! as ((_p0: $.GoError) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): clientStream {
		return new clientStream(this, true)
	}

	public __goscriptAssign(source: clientStream): void {
		const target = this._fields
		const values = source._fields
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.req = values.req
		target.stream = $.assignFieldValue(target.stream, values.stream, "grpc.ClientStream")
		target.span = $.assignFieldValue(target.span, values.span, "opentracing.Span")
		$.assignStruct(target.closed, values.closed)
		target.release = values.release
	}

	public async Close(_p0: context.Context | null): globalThis.Promise<$.GoError> {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).closeWithErr(null) : clientStream.prototype.closeWithErr.call(cs, null))
		return $.pointerValue<Exclude<grpc.ClientStream, null>>($.pointerValue<clientStream>(cs).stream).CloseSend()
	}

	public Context(): context.Context | null {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		return $.pointerValue<clientStream>(cs).ctx
	}

	public async Headers(): globalThis.Promise<[transport.Headers, $.GoError]> {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		let __goscriptTuple1: any = await $.pointerValue<Exclude<grpc.ClientStream, null>>($.pointerValue<clientStream>(cs).stream).Header()
		let md: metadata.MD = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return [transport.NewHeaders(), err]
		}
		let headers = transport.NewHeadersWithCapacity($.len(md))
		for (const [k, vs] of md?.entries() ?? []) {
			if ($.sliceLen(vs) > 0) {
				headers = $.assignStruct(headers, $.markAsStructValue($.cloneStructValue(headers)).With(k, $.arrayIndex(vs!, 0)))
			}
		}
		return [(headers).clone(), null]
	}

	public async ReceiveMessage(_p0: context.Context | null): globalThis.Promise<[transport.StreamMessage | $.VarRef<transport.StreamMessage> | null, $.GoError]> {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		// TODO use buffers for performance reasons.
		let msg: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<grpc.ClientStream, null>>($.pointerValue<clientStream>(cs).stream).RecvMsg($.interfaceValue(msg, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [null, toYARPCStreamError(await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).closeWithErr(err) : clientStream.prototype.closeWithErr.call(cs, err)))]
			}
		}
		return [(() => { const __goscriptLiteralField1 = ioutil.NopCloser($.interfaceValue<io.Reader | null>(bytes.NewReader(msg.value), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader"))); return new transport.StreamMessage({Body: __goscriptLiteralField1}) })(), null]
	}

	public Request(): transport.StreamRequest | $.VarRef<transport.StreamRequest> | null {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		return $.pointerValue<clientStream>(cs).req
	}

	public async SendMessage(_p0: context.Context | null, m: transport.StreamMessage | $.VarRef<transport.StreamMessage> | null): globalThis.Promise<$.GoError> {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		const m$: transport.StreamMessage = m == null ? $.pointerTarget<transport.StreamMessage>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<transport.StreamMessage>(m)
		if ((cs$ as clientStream).closed.Load()) {
			return io.EOF
		}

		{
			let [bufferProvider, ok] = $.typeAssertTuple<BufferProvider | null>((m$ as transport.StreamMessage).Body, "grpc.BufferProvider")
			if (ok) {
				let buffer = (__goscriptAwait = (bufferProvider !== null && (bufferProvider as any).__isVarRef !== true && (bufferProvider as any).__goValue === undefined ? (bufferProvider as Exclude<BufferProvider, null>) : $.pointerValue<Exclude<BufferProvider, null>>(bufferProvider)).Buffer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				let err = (__goscriptAwait = $.pointerValue<Exclude<grpc.ClientStream, null>>((cs$ as clientStream).stream).SendMsg((buffer as any)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				await $.pointerValue<Exclude<io.ReadCloser, null>>((m$ as transport.StreamMessage).Body).Close()
				if (err != null) {
					return toYARPCStreamError(await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).closeWithErr(err) : clientStream.prototype.closeWithErr.call(cs, err)))
				}
				return null
			}
		}

		let __goscriptTuple2: any = ioutil.ReadAll(((m$ as transport.StreamMessage).Body as io.Reader | null))
		let msg: $.Slice<number> = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		await $.pointerValue<Exclude<io.ReadCloser, null>>((m$ as transport.StreamMessage).Body).Close()
		if (err != null) {
			return toYARPCStreamError(err)
		}
		{
			let __goscriptShadow0 = (__goscriptAwait = $.pointerValue<Exclude<grpc.ClientStream, null>>((cs$ as clientStream).stream).SendMsg($.interfaceValue(msg, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow0 != null) {
				return toYARPCStreamError(await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).closeWithErr(__goscriptShadow0) : clientStream.prototype.closeWithErr.call(cs, __goscriptShadow0)))
			}
		}
		return null
	}

	public async closeWithErr(err: $.GoError): globalThis.Promise<$.GoError> {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		if (!(cs$ as clientStream).closed.Swap(true)) {
			err = transport.UpdateSpanWithErr((cs$ as clientStream).span, err)
			void (__goscriptAwait = $.pointerValue<Exclude<opentracing.Span, null>>((cs$ as clientStream).span).Finish(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = (cs$ as clientStream).release!(err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	static __typeInfo = $.registerStructType(
		"grpc.clientStream",
		() => new clientStream(),
		() => [{ name: "Close", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "Context", args: [], returns: [{ type: "context.Context" }], pointerReceiver: true }, { name: "Headers", args: [], returns: [{ type: "transport.Headers" }, { type: "error" }], pointerReceiver: true }, { name: "ReceiveMessage", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.StreamMessage") }, { type: "error" }], pointerReceiver: true }, { name: "Request", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.StreamRequest") }], pointerReceiver: true }, { name: "SendMessage", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "closeWithErr", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		clientStream,
		() => [{ name: "ctx", key: "ctx", type: "context.Context" }, { name: "req", key: "req", type: /* @__PURE__ */ $.pointerType("transport.StreamRequest") }, { name: "stream", key: "stream", type: "grpc.ClientStream" }, { name: "span", key: "span", type: "opentracing.Span" }, { name: "closed", key: "closed", type: "atomic.Bool" }, { name: "release", key: "release", type: ({ kind: $.TypeKind.Function, params: ["error"], results: [] } as $.FunctionTypeInfo) }]
	)
}

export function newServerStream(ctx: context.Context | null, req: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null, stream: grpc.ServerStream | null): serverStream | $.VarRef<serverStream> | null {
	return new serverStream({ctx: ctx, req: req, stream: stream})
}

export function newClientStream(ctx: context.Context | null, req: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null, stream: grpc.ClientStream | null, span: opentracing.Span | null, release: ((_p0: $.GoError) => void) | null): clientStream | $.VarRef<clientStream> | null {
	return new clientStream({ctx: ctx, req: req, stream: stream, span: span, release: release})
}

export function toYARPCStreamError(err: $.GoError): $.GoError {
	if (err == null) {
		return null
	}
	if ($.comparableEqual(err, io.EOF)) {
		return err
	}
	if (yarpcerrors.IsStatus(err)) {
		return err
	}
	let __goscriptTuple3: any = status2.FromError(err)
	let __goscriptShadow1: status2.Status | $.VarRef<status2.Status> | null = __goscriptTuple3[0]
	let ok = __goscriptTuple3[1]
	// if not a yarpc error or grpc error, just return a wrapped error
	if (!ok) {
		return $.interfaceValue<$.GoError>(yarpcerrors.FromError(err), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
	}
	let __goscriptTuple4: any = $.mapGet<any, yarpcerrors.Code, yarpcerrors.Code>(grpcerrorcodes.GRPCCodeToYARPCCode, (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as status2.Status).Code() : status2.Status.prototype.Code.call(__goscriptShadow1)), 0)
	let code = __goscriptTuple4[0]
	ok = __goscriptTuple4[1]
	if (!ok) {
		code = 2
	}
	let yarpcerr: yarpcerrors.Status | $.VarRef<yarpcerrors.Status> | null = yarpcerrors.Newf(code, (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as status2.Status).Message() : status2.Status.prototype.Message.call(__goscriptShadow1)), null)
	let __goscriptTuple5: any = __goscript_marshal.marshalError(__goscriptShadow1)
	let details: $.Slice<number> = __goscriptTuple5[0]
	err = __goscriptTuple5[1]
	if (err != null) {
		return $.interfaceValue<$.GoError>(yarpcerrors.FromError(err), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
	}
	if (details != null) {
		yarpcerr = (yarpcerr !== null && (yarpcerr as any).__isVarRef !== true && (yarpcerr as any).__goValue === undefined ? ((yarpcerr as any) as yarpcerrors.Status).WithDetails(details) : yarpcerrors.Status.prototype.WithDetails.call(yarpcerr, details))
	}
	return $.interfaceValue<$.GoError>(yarpcerr, "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

var __goscriptAwait: any
