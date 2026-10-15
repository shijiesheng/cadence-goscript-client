// Generated file based on inbound.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as apiencoding from "@goscript/go.uber.org/yarpc/api/encoding/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as errors from "@goscript/go.uber.org/yarpc/pkg/errors/index.js"

import * as jsonpb from "@goscript/github.com/gogo/protobuf/jsonpb/index.js"

import type * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_codec_registry from "./codec_registry.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_marshal from "./marshal.gs.ts"

import * as __goscript_protobuf from "./protobuf.gs.ts"
import "@goscript/context/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/go.uber.org/yarpc/api/encoding/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/pkg/errors/index.js"
import "@goscript/github.com/gogo/protobuf/jsonpb/index.js"
import "@goscript/io/index.js"
import "./codec_registry.gs.ts"
import "./error.gs.ts"
import "./marshal.gs.ts"
import "./protobuf.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/encoding/protobuf", ["protobuf.unaryHandler", "protobuf.onewayHandler", "protobuf.streamHandler"])

export class unaryHandler {
	public get handle(): ((_p0: context.Context | null, _p1: proto.Message | null) => [proto.Message | null, $.GoError] | globalThis.Promise<[proto.Message | null, $.GoError]>) | null {
		return this._fields.handle
	}

	public set handle(value: ((_p0: context.Context | null, _p1: proto.Message | null) => [proto.Message | null, $.GoError] | globalThis.Promise<[proto.Message | null, $.GoError]>) | null) {
		this._fields.handle = value
	}

	public get newRequest(): (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null {
		return this._fields.newRequest
	}

	public set newRequest(value: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null) {
		this._fields.newRequest = value
	}

	public get codec(): __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null {
		return this._fields.codec
	}

	public set codec(value: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null) {
		this._fields.codec = value
	}

	public _fields: {
		handle: ((_p0: context.Context | null, _p1: proto.Message | null) => [proto.Message | null, $.GoError] | globalThis.Promise<[proto.Message | null, $.GoError]>) | null
		newRequest: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null
		codec: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null
	}

	constructor(init?: Partial<{handle?: ((_p0: context.Context | null, _p1: proto.Message | null) => [proto.Message | null, $.GoError] | globalThis.Promise<[proto.Message | null, $.GoError]>) | null, newRequest?: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null, codec?: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			handle: init?.handle ?? (null! as ((_p0: context.Context | null, _p1: proto.Message | null) => [proto.Message | null, $.GoError] | globalThis.Promise<[proto.Message | null, $.GoError]>) | null),
			newRequest: init?.newRequest ?? (null! as (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null),
			codec: init?.codec ?? (null! as __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): unaryHandler {
		return new unaryHandler(this, true)
	}

	public __goscriptAssign(source: unaryHandler): void {
		const target = this._fields
		const values = source._fields
		target.handle = values.handle
		target.newRequest = values.newRequest
		target.codec = values.codec
	}

	public async Handle(ctx: context.Context | null, transportRequest: transport.Request | $.VarRef<transport.Request> | null, responseWriter: transport.ResponseWriter | null): globalThis.Promise<$.GoError> {
		const u: unaryHandler | $.VarRef<unaryHandler> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const u$: unaryHandler = u == null ? $.pointerTarget<unaryHandler>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<unaryHandler>(u)
		const transportRequest$: transport.Request = transportRequest == null ? $.pointerTarget<transport.Request>(transportRequest) : (transportRequest as any).__isVarRef === true ? (transportRequest as any).value : (transportRequest as any).__goValue === undefined ? (transportRequest as any) : $.pointerTarget<transport.Request>(transportRequest)
		let __goscriptTuple0: any = await getProtoRequest(ctx, transportRequest, (u$ as unaryHandler).newRequest, (u$ as unaryHandler).codec)
		ctx = __goscriptTuple0[0]
		let call: apiencoding.InboundCall | $.VarRef<apiencoding.InboundCall> | null = __goscriptTuple0[1]
		let request = __goscriptTuple0[2]
		let err = __goscriptTuple0[3]
		if (err != null) {
			return err
		}

		let [response, appErr] = await (u$ as unaryHandler).handle!(ctx, request)

		{
			let __goscriptShadow0 = await (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as apiencoding.InboundCall).WriteToResponse(responseWriter) : apiencoding.InboundCall.prototype.WriteToResponse.call(call, responseWriter))
			if (__goscriptShadow0 != null) {
				return __goscriptShadow0
			}
		}
		let responseData: $.Slice<number> = null! as $.Slice<number>
		let responseCleanup: (() => void) | null = null! as (() => void) | null
		if (response != null) {
			let __goscriptTuple1: any = await __goscript_marshal.marshal((transportRequest$ as transport.Request).Encoding, response, (u$ as unaryHandler).codec)
			responseData = __goscriptTuple1[0]
			responseCleanup = __goscriptTuple1[1]
			err = __goscriptTuple1[2]
			if (responseCleanup != null) {
				const __goscriptDeferCallee0 = responseCleanup
				__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			}
			if (err != null) {
				return await errors.ResponseBodyEncodeError(transportRequest, err)
			}
		}
		let __goscriptTuple2: any = await (responseWriter !== null && (responseWriter as any).__isVarRef !== true && (responseWriter as any).__goValue === undefined ? (responseWriter as Exclude<transport.ResponseWriter, null>) : $.pointerValue<Exclude<transport.ResponseWriter, null>>(responseWriter)).Write(responseData)
		err = __goscriptTuple2[1]
		if (err != null) {
			return err
		}
		if (appErr != null) {
			void (__goscriptAwait = (responseWriter !== null && (responseWriter as any).__isVarRef !== true && (responseWriter as any).__goValue === undefined ? (responseWriter as Exclude<transport.ResponseWriter, null>) : $.pointerValue<Exclude<transport.ResponseWriter, null>>(responseWriter)).SetApplicationError(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return await __goscript_error.convertToYARPCError((transportRequest$ as transport.Request).Encoding, appErr, (u$ as unaryHandler).codec, responseWriter)
	}

	static __typeInfo = $.registerStructType(
		"protobuf.unaryHandler",
		() => new unaryHandler(),
		() => [$.methodSignature("Handle", [["ctx", "context.Context"], ["transportRequest", /* @__PURE__ */ $.pointerType("transport.Request")], ["responseWriter", "transport.ResponseWriter"]], ["error"], true)],
		unaryHandler,
		() => [/* @__PURE__ */ $.structField("handle", ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" }), /* @__PURE__ */ $.structField("newRequest", ({ kind: $.TypeKind.Function, params: [], results: ["proto.Message"] } as $.FunctionTypeInfo), [1], 8, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" }), /* @__PURE__ */ $.structField("codec", /* @__PURE__ */ $.pointerType("protobuf.codec"), [2], 16, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" })]
	)
}

export class onewayHandler {
	public get handleOneway(): ((_p0: context.Context | null, _p1: proto.Message | null) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.handleOneway
	}

	public set handleOneway(value: ((_p0: context.Context | null, _p1: proto.Message | null) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.handleOneway = value
	}

	public get newRequest(): (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null {
		return this._fields.newRequest
	}

	public set newRequest(value: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null) {
		this._fields.newRequest = value
	}

	public get codec(): __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null {
		return this._fields.codec
	}

	public set codec(value: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null) {
		this._fields.codec = value
	}

	public _fields: {
		handleOneway: ((_p0: context.Context | null, _p1: proto.Message | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		newRequest: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null
		codec: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null
	}

	constructor(init?: Partial<{handleOneway?: ((_p0: context.Context | null, _p1: proto.Message | null) => $.GoError | globalThis.Promise<$.GoError>) | null, newRequest?: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null, codec?: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			handleOneway: init?.handleOneway ?? (null! as ((_p0: context.Context | null, _p1: proto.Message | null) => $.GoError | globalThis.Promise<$.GoError>) | null),
			newRequest: init?.newRequest ?? (null! as (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null),
			codec: init?.codec ?? (null! as __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): onewayHandler {
		return new onewayHandler(this, true)
	}

	public __goscriptAssign(source: onewayHandler): void {
		const target = this._fields
		const values = source._fields
		target.handleOneway = values.handleOneway
		target.newRequest = values.newRequest
		target.codec = values.codec
	}

	public async HandleOneway(ctx: context.Context | null, transportRequest: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<$.GoError> {
		const o: onewayHandler | $.VarRef<onewayHandler> | null = this;
		const o$: onewayHandler = o == null ? $.pointerTarget<onewayHandler>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<onewayHandler>(o)
		let __goscriptTuple3: any = await getProtoRequest(ctx, transportRequest, (o$ as onewayHandler).newRequest, (o$ as onewayHandler).codec)
		ctx = __goscriptTuple3[0]
		let request = __goscriptTuple3[2]
		let err = __goscriptTuple3[3]
		if (err != null) {
			return err
		}
		return __goscript_error.convertToYARPCError($.pointerValue<transport.Request>(transportRequest).Encoding, (__goscriptAwait = (o$ as onewayHandler).handleOneway!(ctx, request), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (o$ as onewayHandler).codec, null)
	}

	static __typeInfo = $.registerStructType(
		"protobuf.onewayHandler",
		() => new onewayHandler(),
		() => [$.methodSignature("HandleOneway", [["ctx", "context.Context"], ["transportRequest", /* @__PURE__ */ $.pointerType("transport.Request")]], ["error"], true)],
		onewayHandler,
		() => [/* @__PURE__ */ $.structField("handleOneway", ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["error"] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" }), /* @__PURE__ */ $.structField("newRequest", ({ kind: $.TypeKind.Function, params: [], results: ["proto.Message"] } as $.FunctionTypeInfo), [1], 8, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" }), /* @__PURE__ */ $.structField("codec", /* @__PURE__ */ $.pointerType("protobuf.codec"), [2], 16, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" })]
	)
}

export class streamHandler {
	public get handle(): ((_p0: __goscript_protobuf.ServerStream | $.VarRef<__goscript_protobuf.ServerStream> | null) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.handle
	}

	public set handle(value: ((_p0: __goscript_protobuf.ServerStream | $.VarRef<__goscript_protobuf.ServerStream> | null) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.handle = value
	}

	public get codec(): __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null {
		return this._fields.codec
	}

	public set codec(value: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null) {
		this._fields.codec = value
	}

	public _fields: {
		handle: ((_p0: __goscript_protobuf.ServerStream | $.VarRef<__goscript_protobuf.ServerStream> | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		codec: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null
	}

	constructor(init?: Partial<{handle?: ((_p0: __goscript_protobuf.ServerStream | $.VarRef<__goscript_protobuf.ServerStream> | null) => $.GoError | globalThis.Promise<$.GoError>) | null, codec?: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			handle: init?.handle ?? (null! as ((_p0: __goscript_protobuf.ServerStream | $.VarRef<__goscript_protobuf.ServerStream> | null) => $.GoError | globalThis.Promise<$.GoError>) | null),
			codec: init?.codec ?? (null! as __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): streamHandler {
		return new streamHandler(this, true)
	}

	public __goscriptAssign(source: streamHandler): void {
		const target = this._fields
		const values = source._fields
		target.handle = values.handle
		target.codec = values.codec
	}

	public async HandleStream(stream: transport.ServerStream | $.VarRef<transport.ServerStream> | null): globalThis.Promise<$.GoError> {
		const s: streamHandler | $.VarRef<streamHandler> | null = this;
		const s$: streamHandler = s == null ? $.pointerTarget<streamHandler>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<streamHandler>(s)
		let __goscriptTuple4: any = await apiencoding.NewInboundCallWithOptions(await (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.ServerStream).Context() : transport.ServerStream.prototype.Context.call(stream)), $.arrayToSlice<apiencoding.InboundCallOption | null>([apiencoding.DisableResponseHeaders()]))
		let ctx = __goscriptTuple4[0]
		let call: apiencoding.InboundCall | $.VarRef<apiencoding.InboundCall> | null = __goscriptTuple4[1]
		let transportRequest: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null = await (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.ServerStream).Request() : transport.ServerStream.prototype.Request.call(stream))
		let transportRequest$: transport.StreamRequest = transportRequest == null ? $.pointerTarget<transport.StreamRequest>(transportRequest) : (transportRequest as any).__isVarRef === true ? (transportRequest as any).value : (transportRequest as any).__goValue === undefined ? (transportRequest as any) : $.pointerTarget<transport.StreamRequest>(transportRequest)
		{
			let err = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as apiencoding.InboundCall).ReadFromRequestMeta((transportRequest$ as transport.StreamRequest).Meta) : apiencoding.InboundCall.prototype.ReadFromRequestMeta.call(call, (transportRequest$ as transport.StreamRequest).Meta))
			if (err != null) {
				return err
			}
		}
		let protoStream: __goscript_protobuf.ServerStream | $.VarRef<__goscript_protobuf.ServerStream> | null = new __goscript_protobuf.ServerStream({ctx: ctx, stream: stream, codec: (s$ as streamHandler).codec})
		return __goscript_error.convertToYARPCError($.pointerValue<transport.RequestMeta>((transportRequest$ as transport.StreamRequest).Meta).Encoding, (__goscriptAwait = (s$ as streamHandler).handle!(protoStream), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (s$ as streamHandler).codec, null)
	}

	static __typeInfo = $.registerStructType(
		"protobuf.streamHandler",
		() => new streamHandler(),
		() => [$.methodSignature("HandleStream", [["stream", /* @__PURE__ */ $.pointerType("transport.ServerStream")]], ["error"], true)],
		streamHandler,
		() => [/* @__PURE__ */ $.structField("handle", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("protobuf.ServerStream")], results: ["error"] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" }), /* @__PURE__ */ $.structField("codec", /* @__PURE__ */ $.pointerType("protobuf.codec"), [1], 8, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" })]
	)
}

export function newUnaryHandler(handle: ((_p0: context.Context | null, _p1: proto.Message | null) => [proto.Message | null, $.GoError] | globalThis.Promise<[proto.Message | null, $.GoError]>) | null, newRequest: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null, codec: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null): unaryHandler | $.VarRef<unaryHandler> | null {
	return new unaryHandler({handle: handle, newRequest: newRequest, codec: codec})
}

export function newOnewayHandler(handleOneway: ((_p0: context.Context | null, _p1: proto.Message | null) => $.GoError | globalThis.Promise<$.GoError>) | null, newRequest: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null, codec: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null): onewayHandler | $.VarRef<onewayHandler> | null {
	return new onewayHandler({handleOneway: handleOneway, newRequest: newRequest, codec: codec})
}

export function newStreamHandler(handle: ((_p0: __goscript_protobuf.ServerStream | $.VarRef<__goscript_protobuf.ServerStream> | null) => $.GoError | globalThis.Promise<$.GoError>) | null): streamHandler | $.VarRef<streamHandler> | null {
	return (() => { const __goscriptLiteralField0 = __goscript_marshal.newCodec(null); return new streamHandler({handle: handle, codec: __goscriptLiteralField0}) })()
}

export async function getProtoRequest(ctx: context.Context | null, transportRequest: transport.Request | $.VarRef<transport.Request> | null, newRequest: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null, codec: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null): globalThis.Promise<[context.Context | null, apiencoding.InboundCall | $.VarRef<apiencoding.InboundCall> | null, proto.Message | null, $.GoError]> {
	const transportRequest$: transport.Request = transportRequest == null ? $.pointerTarget<transport.Request>(transportRequest) : (transportRequest as any).__isVarRef === true ? (transportRequest as any).value : (transportRequest as any).__goValue === undefined ? (transportRequest as any) : $.pointerTarget<transport.Request>(transportRequest)
	{
		let [, ok] = __goscript_codec_registry.GetCodecForEncoding((transportRequest$ as transport.Request).Encoding)
		if (!ok) {
			return [null, null, null, await errors.ExpectEncodings(transportRequest, __goscript_codec_registry.GetCodecNames())]
		}
	}
	let __goscriptTuple5: any = await apiencoding.NewInboundCall(ctx)
	ctx = __goscriptTuple5[0]
	let call: apiencoding.InboundCall | $.VarRef<apiencoding.InboundCall> | null = __goscriptTuple5[1]
	{
		let err = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as apiencoding.InboundCall).ReadFromRequest(transportRequest) : apiencoding.InboundCall.prototype.ReadFromRequest.call(call, transportRequest))
		if (err != null) {
			return [null, null, null, err]
		}
	}
	let request = (__goscriptAwait = newRequest!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	{
		let err = await __goscript_marshal.unmarshal((transportRequest$ as transport.Request).Encoding, (transportRequest$ as transport.Request).Body, request, codec)
		if (err != null) {
			return [null, null, null, await errors.RequestBodyDecodeError(transportRequest, err)]
		}
	}
	return [ctx, call, request, null]
}

var __goscriptAwait: any
