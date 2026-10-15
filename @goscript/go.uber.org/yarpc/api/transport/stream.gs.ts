// Generated file based on stream.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as io from "@goscript/io/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import type * as iter from "@goscript/iter/index.js"

import * as __goscript_header from "./header.gs.ts"

import * as __goscript_request from "./request.gs.ts"
import "@goscript/context/index.js"
import "@goscript/io/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "./header.gs.ts"
import "./request.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/transport", ["transport.StreamRequest", "transport.ServerStreamOption", "transport.ServerStream", "transport.StreamHeadersSender", "transport.ClientStreamOption", "transport.ClientStream", "transport.StreamHeadersReader", "transport.StreamCloser", "transport.Stream", "transport.StreamMessage"])

export type ServerStreamOption = {
	unimplemented(): void
}

$.registerInterfaceType(
	"transport.ServerStreamOption",
	null,
	[$.methodSignature("unimplemented")]
);

export type StreamHeadersSender = {
	SendHeaders(headers: __goscript_header.Headers): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"transport.StreamHeadersSender",
	null,
	[$.methodSignature("SendHeaders", [["headers", "transport.Headers"]], ["error"])]
);

export type ClientStreamOption = {
	unimplemented(): void
}

$.registerInterfaceType(
	"transport.ClientStreamOption",
	null,
	[$.methodSignature("unimplemented")]
);

export type StreamHeadersReader = {
	Headers(): [__goscript_header.Headers, $.GoError] | globalThis.Promise<[__goscript_header.Headers, $.GoError]>
}

$.registerInterfaceType(
	"transport.StreamHeadersReader",
	null,
	[$.methodSignature("Headers", [], ["transport.Headers", "error"])]
);

export type StreamCloser = {
	Close(_p0: context.Context | null): $.GoError | globalThis.Promise<$.GoError>
	Context(): context.Context | null | globalThis.Promise<context.Context | null>
	ReceiveMessage(_p0: context.Context | null): [StreamMessage | $.VarRef<StreamMessage> | null, $.GoError] | globalThis.Promise<[StreamMessage | $.VarRef<StreamMessage> | null, $.GoError]>
	Request(): StreamRequest | $.VarRef<StreamRequest> | null | globalThis.Promise<StreamRequest | $.VarRef<StreamRequest> | null>
	SendMessage(_p0: context.Context | null, _p1: StreamMessage | $.VarRef<StreamMessage> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"transport.StreamCloser",
	null,
	[$.methodSignature("Close", ["context.Context"], ["error"]), $.methodSignature("Context", [], ["context.Context"]), $.methodSignature("ReceiveMessage", ["context.Context"], [/* @__PURE__ */ $.pointerType("transport.StreamMessage"), "error"]), $.methodSignature("Request", [], [/* @__PURE__ */ $.pointerType("transport.StreamRequest")]), $.methodSignature("SendMessage", ["context.Context", /* @__PURE__ */ $.pointerType("transport.StreamMessage")], ["error"])]
);

export type Stream = {
	Context(): context.Context | null | globalThis.Promise<context.Context | null>
	ReceiveMessage(_p0: context.Context | null): [StreamMessage | $.VarRef<StreamMessage> | null, $.GoError] | globalThis.Promise<[StreamMessage | $.VarRef<StreamMessage> | null, $.GoError]>
	Request(): StreamRequest | $.VarRef<StreamRequest> | null | globalThis.Promise<StreamRequest | $.VarRef<StreamRequest> | null>
	SendMessage(_p0: context.Context | null, _p1: StreamMessage | $.VarRef<StreamMessage> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"transport.Stream",
	null,
	[$.methodSignature("Context", [], ["context.Context"]), $.methodSignature("ReceiveMessage", ["context.Context"], [/* @__PURE__ */ $.pointerType("transport.StreamMessage"), "error"]), $.methodSignature("Request", [], [/* @__PURE__ */ $.pointerType("transport.StreamRequest")]), $.methodSignature("SendMessage", ["context.Context", /* @__PURE__ */ $.pointerType("transport.StreamMessage")], ["error"])]
);

export class StreamRequest {
	public get Meta(): __goscript_request.RequestMeta | $.VarRef<__goscript_request.RequestMeta> | null {
		return this._fields.Meta
	}

	public set Meta(value: __goscript_request.RequestMeta | $.VarRef<__goscript_request.RequestMeta> | null) {
		this._fields.Meta = value
	}

	public _fields: {
		Meta: __goscript_request.RequestMeta | $.VarRef<__goscript_request.RequestMeta> | null
	}

	constructor(init?: Partial<{Meta?: __goscript_request.RequestMeta | $.VarRef<__goscript_request.RequestMeta> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Meta: init?.Meta ?? (null! as __goscript_request.RequestMeta | $.VarRef<__goscript_request.RequestMeta> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StreamRequest {
		return new StreamRequest(this, true)
	}

	public __goscriptAssign(source: StreamRequest): void {
		const target = this._fields
		const values = source._fields
		target.Meta = values.Meta
	}

	static __typeInfo = $.registerStructType(
		"transport.StreamRequest",
		() => new StreamRequest(),
		() => [],
		StreamRequest,
		() => [/* @__PURE__ */ $.structField("Meta", /* @__PURE__ */ $.pointerType("transport.RequestMeta"), [0], 0, true)]
	)
}

export class ServerStream {
	public get stream(): Stream | null {
		return this._fields.stream
	}

	public set stream(value: Stream | null) {
		this._fields.stream = value
	}

	public _fields: {
		stream: Stream | null
	}

	constructor(init?: Partial<{stream?: Stream | null}>, __goscriptValue?: boolean) {
		this._fields = {
			stream: init?.stream ?? (null! as Stream | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ServerStream {
		return new ServerStream(this, true)
	}

	public __goscriptAssign(source: ServerStream): void {
		const target = this._fields
		const values = source._fields
		target.stream = $.assignFieldValue(target.stream, values.stream, "transport.Stream")
	}

	public async Context(): globalThis.Promise<context.Context | null> {
		const s: ServerStream | $.VarRef<ServerStream> | null = this;
		return $.pointerValue<Exclude<Stream, null>>($.pointerValue<ServerStream>(s).stream).Context()
	}

	public async ReceiveMessage(ctx: context.Context | null): globalThis.Promise<[StreamMessage | $.VarRef<StreamMessage> | null, $.GoError]> {
		const s: ServerStream | $.VarRef<ServerStream> | null = this;
		return $.pointerValue<Exclude<Stream, null>>($.pointerValue<ServerStream>(s).stream).ReceiveMessage(ctx)
	}

	public async Request(): globalThis.Promise<StreamRequest | $.VarRef<StreamRequest> | null> {
		const s: ServerStream | $.VarRef<ServerStream> | null = this;
		return $.pointerValue<Exclude<Stream, null>>($.pointerValue<ServerStream>(s).stream).Request()
	}

	public async SendHeaders(headers: __goscript_header.Headers): globalThis.Promise<$.GoError> {
		const s: ServerStream | $.VarRef<ServerStream> | null = this;
		return SendStreamHeaders($.pointerValue<ServerStream>(s).stream, headers)
	}

	public async SendMessage(ctx: context.Context | null, msg: StreamMessage | $.VarRef<StreamMessage> | null): globalThis.Promise<$.GoError> {
		const s: ServerStream | $.VarRef<ServerStream> | null = this;
		return $.pointerValue<Exclude<Stream, null>>($.pointerValue<ServerStream>(s).stream).SendMessage(ctx, msg)
	}

	static __typeInfo = $.registerStructType(
		"transport.ServerStream",
		() => new ServerStream(),
		() => [$.methodSignature("Context", [], ["context.Context"], true), $.methodSignature("ReceiveMessage", [["ctx", "context.Context"]], [/* @__PURE__ */ $.pointerType("transport.StreamMessage"), "error"], true), $.methodSignature("Request", [], [/* @__PURE__ */ $.pointerType("transport.StreamRequest")], true), $.methodSignature("SendHeaders", [["headers", "transport.Headers"]], ["error"], true), $.methodSignature("SendMessage", [["ctx", "context.Context"], ["msg", /* @__PURE__ */ $.pointerType("transport.StreamMessage")]], ["error"], true)],
		ServerStream,
		() => [/* @__PURE__ */ $.structField("stream", "transport.Stream", [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/transport" })]
	)
}

export class ClientStream {
	public get stream(): StreamCloser | null {
		return this._fields.stream
	}

	public set stream(value: StreamCloser | null) {
		this._fields.stream = value
	}

	public _fields: {
		stream: StreamCloser | null
	}

	constructor(init?: Partial<{stream?: StreamCloser | null}>, __goscriptValue?: boolean) {
		this._fields = {
			stream: init?.stream ?? (null! as StreamCloser | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClientStream {
		return new ClientStream(this, true)
	}

	public __goscriptAssign(source: ClientStream): void {
		const target = this._fields
		const values = source._fields
		target.stream = $.assignFieldValue(target.stream, values.stream, "transport.StreamCloser")
	}

	public async Close(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const s: ClientStream | $.VarRef<ClientStream> | null = this;
		return $.pointerValue<Exclude<StreamCloser, null>>($.pointerValue<ClientStream>(s).stream).Close(ctx)
	}

	public async Context(): globalThis.Promise<context.Context | null> {
		const s: ClientStream | $.VarRef<ClientStream> | null = this;
		return $.pointerValue<Exclude<StreamCloser, null>>($.pointerValue<ClientStream>(s).stream).Context()
	}

	public async Headers(): globalThis.Promise<[__goscript_header.Headers, $.GoError]> {
		const s: ClientStream | $.VarRef<ClientStream> | null = this;
		return ReadStreamHeaders(($.pointerValue<ClientStream>(s).stream as Stream | null))
	}

	public async ReceiveMessage(ctx: context.Context | null): globalThis.Promise<[StreamMessage | $.VarRef<StreamMessage> | null, $.GoError]> {
		const s: ClientStream | $.VarRef<ClientStream> | null = this;
		return $.pointerValue<Exclude<StreamCloser, null>>($.pointerValue<ClientStream>(s).stream).ReceiveMessage(ctx)
	}

	public async Request(): globalThis.Promise<StreamRequest | $.VarRef<StreamRequest> | null> {
		const s: ClientStream | $.VarRef<ClientStream> | null = this;
		return $.pointerValue<Exclude<StreamCloser, null>>($.pointerValue<ClientStream>(s).stream).Request()
	}

	public async SendMessage(ctx: context.Context | null, msg: StreamMessage | $.VarRef<StreamMessage> | null): globalThis.Promise<$.GoError> {
		const s: ClientStream | $.VarRef<ClientStream> | null = this;
		return $.pointerValue<Exclude<StreamCloser, null>>($.pointerValue<ClientStream>(s).stream).SendMessage(ctx, msg)
	}

	static __typeInfo = $.registerStructType(
		"transport.ClientStream",
		() => new ClientStream(),
		() => [$.methodSignature("Close", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("Context", [], ["context.Context"], true), $.methodSignature("Headers", [], ["transport.Headers", "error"], true), $.methodSignature("ReceiveMessage", [["ctx", "context.Context"]], [/* @__PURE__ */ $.pointerType("transport.StreamMessage"), "error"], true), $.methodSignature("Request", [], [/* @__PURE__ */ $.pointerType("transport.StreamRequest")], true), $.methodSignature("SendMessage", [["ctx", "context.Context"], ["msg", /* @__PURE__ */ $.pointerType("transport.StreamMessage")]], ["error"], true)],
		ClientStream,
		() => [/* @__PURE__ */ $.structField("stream", "transport.StreamCloser", [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/transport" })]
	)
}

export class StreamMessage {
	public get Body(): io.ReadCloser | null {
		return this._fields.Body
	}

	public set Body(value: io.ReadCloser | null) {
		this._fields.Body = value
	}

	public get BodySize(): number {
		return this._fields.BodySize
	}

	public set BodySize(value: number) {
		this._fields.BodySize = value
	}

	public _fields: {
		Body: io.ReadCloser | null
		BodySize: number
	}

	constructor(init?: Partial<{Body?: io.ReadCloser | null, BodySize?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Body: init?.Body ?? (null! as io.ReadCloser | null),
			BodySize: init?.BodySize ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StreamMessage {
		return new StreamMessage(this, true)
	}

	public __goscriptAssign(source: StreamMessage): void {
		const target = this._fields
		const values = source._fields
		target.Body = $.assignFieldValue(target.Body, values.Body, "io.ReadCloser")
		target.BodySize = values.BodySize
	}

	static __typeInfo = $.registerStructType(
		"transport.StreamMessage",
		() => new StreamMessage(),
		() => [],
		StreamMessage,
		() => [/* @__PURE__ */ $.structField("Body", "io.ReadCloser", [0], 0, true), /* @__PURE__ */ $.structField("BodySize", /* @__PURE__ */ $.basicType("int"), [1], 16, true)]
	)
}

export function NewServerStream(s: Stream | null, options: $.Slice<ServerStreamOption | null>): [ServerStream | $.VarRef<ServerStream> | null, $.GoError] {
	if (s == null) {
		return [null, yarpcerrors.InvalidArgumentErrorf("non-nil stream is required", null)]
	}
	return [new ServerStream({stream: s}), null]
}

export async function SendStreamHeaders(s: Stream | null, headers: __goscript_header.Headers): globalThis.Promise<$.GoError> {
	{
		let [w, ok] = $.typeAssertTuple<StreamHeadersSender | null>(s, "transport.StreamHeadersSender")
		if (ok) {
			return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<StreamHeadersSender, null>) : $.pointerValue<Exclude<StreamHeadersSender, null>>(w)).SendHeaders((headers).clone())
		}
	}
	return yarpcerrors.UnimplementedErrorf("stream does not support sending headers", null)
}

export function NewClientStream(s: StreamCloser | null, options: $.Slice<ClientStreamOption | null>): [ClientStream | $.VarRef<ClientStream> | null, $.GoError] {
	if (s == null) {
		return [null, yarpcerrors.InvalidArgumentErrorf("non-nil stream with close is required", null)]
	}
	return [new ClientStream({stream: s}), null]
}

export async function ReadStreamHeaders(s: Stream | null): globalThis.Promise<[__goscript_header.Headers, $.GoError]> {
	{
		let [r, ok] = $.typeAssertTuple<StreamHeadersReader | null>(s, "transport.StreamHeadersReader")
		if (ok) {
			return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<StreamHeadersReader, null>) : $.pointerValue<Exclude<StreamHeadersReader, null>>(r)).Headers()
		}
	}
	return [__goscript_header.NewHeaders(), yarpcerrors.UnimplementedErrorf("stream does not support reading headers", null)]
}

var __goscriptAwait: any
