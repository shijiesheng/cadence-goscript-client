// Generated file based on handler.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import * as middleware from "@goscript/go.uber.org/yarpc/api/middleware/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as grpcerrorcodes from "@goscript/go.uber.org/yarpc/internal/grpcerrorcodes/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as context from "@goscript/golang.org/x/net/context/index.js"

import * as grpc from "@goscript/google.golang.org/grpc/index.js"

import * as codes from "@goscript/google.golang.org/grpc/codes/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as status from "@goscript/google.golang.org/grpc/status/index.js"

import * as context2 from "@goscript/context/index.js"

import * as backoff from "@goscript/go.uber.org/yarpc/api/backoff/index.js"

import * as peer from "@goscript/go.uber.org/yarpc/api/peer/index.js"

import * as tls from "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"

import * as interceptor from "@goscript/go.uber.org/yarpc/internal/interceptor/index.js"

import * as abstractpeer from "@goscript/go.uber.org/yarpc/peer/abstractpeer/index.js"

import type * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_constants from "./constants.gs.ts"

import * as __goscript_dialer from "./dialer.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import * as __goscript_inbound from "./inbound.gs.ts"

import * as __goscript_marshal from "./marshal.gs.ts"

import * as __goscript_options from "./options.gs.ts"

import type * as __goscript_outbound from "./outbound.gs.ts"

import * as __goscript_peer from "./peer.gs.ts"

import * as __goscript_response_writer from "./response_writer.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"

import * as __goscript_util from "./util.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/go.uber.org/yarpc/index.js"
import "@goscript/go.uber.org/yarpc/api/middleware/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/internal/grpcerrorcodes/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/google.golang.org/grpc/index.js"
import "@goscript/google.golang.org/grpc/codes/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"
import "@goscript/google.golang.org/grpc/status/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/api/backoff/index.js"
import "@goscript/go.uber.org/yarpc/api/peer/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"
import "@goscript/go.uber.org/yarpc/internal/interceptor/index.js"
import "@goscript/go.uber.org/yarpc/peer/abstractpeer/index.js"
import "@goscript/sync/index.js"
import "./constants.gs.ts"
import "./dialer.gs.ts"
import "./headers.gs.ts"
import "./inbound.gs.ts"
import "./marshal.gs.ts"
import "./options.gs.ts"
import "./peer.gs.ts"
import "./response_writer.gs.ts"
import "./stream.gs.ts"
import "./transport.gs.ts"
import "./util.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/transport/grpc", ["grpc.handler"])

export class handler {
	public get i(): __goscript_inbound.Inbound | $.VarRef<__goscript_inbound.Inbound> | null {
		return this._fields.i
	}

	public set i(value: __goscript_inbound.Inbound | $.VarRef<__goscript_inbound.Inbound> | null) {
		this._fields.i = value
	}

	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public _fields: {
		i: __goscript_inbound.Inbound | $.VarRef<__goscript_inbound.Inbound> | null
		logger: zap.Logger | $.VarRef<zap.Logger> | null
	}

	constructor(init?: Partial<{i?: __goscript_inbound.Inbound | $.VarRef<__goscript_inbound.Inbound> | null, logger?: zap.Logger | $.VarRef<zap.Logger> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			i: init?.i ?? (null! as __goscript_inbound.Inbound | $.VarRef<__goscript_inbound.Inbound> | null),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): handler {
		return new handler(this, true)
	}

	public __goscriptAssign(source: handler): void {
		const target = this._fields
		const values = source._fields
		target.i = values.i
		target.logger = values.logger
	}

	public callUnary(ctx: context.Context | null, transportRequest: transport.Request | $.VarRef<transport.Request> | null, unaryHandler: transport.UnaryHandler | null, responseWriter: __goscript_response_writer.responseWriter | $.VarRef<__goscript_response_writer.responseWriter> | null): $.GoError {
		const h: handler | $.VarRef<handler> | null = this;
		{
			let err = transport.ValidateRequestContext(ctx)
			if (err != null) {
				return err
			}
		}
		return transport.InvokeUnaryHandler((() => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue(time.Now())); return new transport.UnaryInvokeRequest({Context: ctx, StartTime: __goscriptLiteralField0, Request: transportRequest, ResponseWriter: $.interfaceValue<transport.ResponseWriter | null>(responseWriter, "*grpc.responseWriter", /* @__PURE__ */ $.pointerType("grpc.responseWriter")), Handler: unaryHandler, Logger: $.pointerValue<handler>(h).logger}, true) })())
	}

	public getBasicTransportRequest(ctx: context.Context | null, streamMethod: string): [transport.Request | $.VarRef<transport.Request> | null, $.GoError] {
		const h: handler | $.VarRef<handler> | null = this;
		let __goscriptTuple0: any = metadata.FromIncomingContext(ctx)
		let md: metadata.MD = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if ((md == null) || !ok) {
			return [null, $.interfaceValue<$.GoError>(yarpcerrors.Newf(13, "cannot get metadata from ctx: %v", $.arrayToSlice<any>([(ctx as any)])), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))]
		}
		let __goscriptTuple1: any = __goscript_headers.metadataToTransportRequest(md)
		let transportRequest: transport.Request | $.VarRef<transport.Request> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		let transportRequest$: transport.Request = transportRequest == null ? $.pointerTarget<transport.Request>(transportRequest) : (transportRequest as any).__isVarRef === true ? (transportRequest as any).value : (transportRequest as any).__goValue === undefined ? (transportRequest as any) : $.pointerTarget<transport.Request>(transportRequest)
		if (err != null) {
			return [null, err]
		}
		;(transportRequest$ as transport.Request).Transport = "grpc"

		let __goscriptTuple2: any = procedureFromStreamMethod(streamMethod)
		let procedure = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}

		;(transportRequest$ as transport.Request).Procedure = procedure
		{
			let __goscriptShadow0 = transport.ValidateRequest(transportRequest)
			if (__goscriptShadow0 != null) {
				return [null, __goscriptShadow0]
			}
		}
		return [transportRequest, null]
	}

	public async handle(srv: any, serverStream: grpc.ServerStream | null): globalThis.Promise<$.GoError> {
		const h: handler | $.VarRef<handler> | null = this;
		let err: $.GoError = null! as $.GoError
		using __defer = new $.DisposableStack()
		const h$: handler = h == null ? $.pointerTarget<handler>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<handler>(h)
		__defer.defer(() => { ((): void => {
			err = toGRPCError(err)
		})() })

		let start = $.markAsStructValue($.cloneStructValue(time.Now()))
		let ctx = (__goscriptAwait = (serverStream !== null && (serverStream as any).__isVarRef !== true && (serverStream as any).__goValue === undefined ? (serverStream as Exclude<grpc.ServerStream, null>) : $.pointerValue<Exclude<grpc.ServerStream, null>>(serverStream)).Context(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let [streamMethod, ok] = grpc.MethodFromServerStream(serverStream)
		if (!ok) {
			const __goscriptReturn0: $.GoError = errInvalidGRPCStream
			err = __goscriptReturn0
			__defer.dispose()
			return err
		}

		let __goscriptTuple3: any = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as handler).getBasicTransportRequest(ctx, streamMethod) : handler.prototype.getBasicTransportRequest.call(h, ctx, streamMethod))
		let transportRequest: transport.Request | $.VarRef<transport.Request> | null = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			const __goscriptReturn1: $.GoError = err
			err = __goscriptReturn1
			__defer.dispose()
			return err
		}

		let __goscriptTuple4: any = await $.pointerValue<Exclude<transport.Router, null>>($.pointerValue<__goscript_inbound.Inbound>((h$ as handler).i).router).Choose(ctx, transportRequest)
		let handlerSpec = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			const __goscriptReturn2: $.GoError = err
			err = __goscriptReturn2
			__defer.dispose()
			return err
		}
		switch ($.markAsStructValue($.cloneStructValue(handlerSpec)).Type()) {
			case transport.Unary:
			{
				const __goscriptReturn3: $.GoError = await handler.prototype.handleUnary.call(h, ctx, transportRequest, serverStream, streamMethod, start, middleware.ApplyUnaryInbound($.markAsStructValue($.cloneStructValue(handlerSpec)).Unary(), $.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>($.pointerValue<__goscript_inbound.Inbound>((h$ as handler).i).t).options).unaryInboundInterceptor))
				err = __goscriptReturn3
				__defer.dispose()
				return err
				break
			}
			case transport.Streaming:
			{
				const __goscriptReturn4: $.GoError = await handler.prototype.handleStream.call(h, ctx, transportRequest, serverStream, start, middleware.ApplyStreamInbound($.markAsStructValue($.cloneStructValue(handlerSpec)).Stream(), $.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>($.pointerValue<__goscript_inbound.Inbound>((h$ as handler).i).t).options).streamInboundInterceptor))
				err = __goscriptReturn4
				__defer.dispose()
				return err
				break
			}
		}
		const __goscriptReturn5: $.GoError = $.interfaceValue<$.GoError>(yarpcerrors.Newf(12, "transport grpc does not handle %s handlers", $.arrayToSlice<any>([transport.Type_String($.markAsStructValue($.cloneStructValue(handlerSpec)).Type())])), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
		err = __goscriptReturn5
		__defer.dispose()
		return err
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async handleStream(ctx: context.Context | null, transportRequest: transport.Request | $.VarRef<transport.Request> | null, serverStream: grpc.ServerStream | null, start: time.Time, streamHandler: transport.StreamHandler | null): globalThis.Promise<$.GoError> {
		const h: handler | $.VarRef<handler> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const h$: handler = h == null ? $.pointerTarget<handler>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<handler>(h)
		let tracer = $.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>($.pointerValue<__goscript_inbound.Inbound>((h$ as handler).i).t).options).tracer
		let parentSpanCtx: opentracing.SpanContext | null = null! as opentracing.SpanContext | null
		let __goscriptTuple5: any = metadata.FromIncomingContext(ctx)
		let md: metadata.MD = __goscriptTuple5[0]
		let ok = __goscriptTuple5[1]
		if (ok) {
			let __goscriptTuple6: any = await (tracer !== null && (tracer as any).__isVarRef !== true && (tracer as any).__goValue === undefined ? (tracer as Exclude<opentracing.Tracer, null>) : $.pointerValue<Exclude<opentracing.Tracer, null>>(tracer)).Extract($.namedValueInterfaceValue<any>(opentracing.HTTPHeaders, "opentracing.BuiltinFormat", {}, /* @__PURE__ */ $.basicType("uint8", "opentracing.BuiltinFormat")), $.namedValueInterfaceValue<any>(md, "grpc.mdReadWriter", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
			parentSpanCtx = __goscriptTuple6[0]
		}
		let extractOpenTracingSpan: transport.ExtractOpenTracingSpan | $.VarRef<transport.ExtractOpenTracingSpan> | null = new transport.ExtractOpenTracingSpan({ParentSpanContext: parentSpanCtx, Tracer: tracer, TransportName: "grpc", StartTime: $.markAsStructValue($.cloneStructValue(start)), ExtraTags: yarpc.OpentracingTags})
		let __goscriptTuple7: any = (extractOpenTracingSpan !== null && (extractOpenTracingSpan as any).__isVarRef !== true && (extractOpenTracingSpan as any).__goValue === undefined ? ((extractOpenTracingSpan as any) as transport.ExtractOpenTracingSpan).Do(ctx, transportRequest) : transport.ExtractOpenTracingSpan.prototype.Do.call(extractOpenTracingSpan, ctx, transportRequest))
		ctx = __goscriptTuple7[0]
		let span = __goscriptTuple7[1]
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Finish())((span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/opentracing/opentracing-go.Span.Finish-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		let stream: __goscript_stream.serverStream | $.VarRef<__goscript_stream.serverStream> | null = __goscript_stream.newServerStream(ctx, (() => { const __goscriptLiteralField1 = (transportRequest !== null && (transportRequest as any).__isVarRef !== true && (transportRequest as any).__goValue === undefined ? ((transportRequest as any) as transport.Request).ToRequestMeta() : transport.Request.prototype.ToRequestMeta.call(transportRequest)); return new transport.StreamRequest({Meta: __goscriptLiteralField1}) })(), serverStream)
		let __goscriptTuple8: any = transport.NewServerStream($.interfaceValue<transport.Stream | null>(stream, "*grpc.serverStream", /* @__PURE__ */ $.pointerType("grpc.serverStream")), null)
		let tServerStream: transport.ServerStream | $.VarRef<transport.ServerStream> | null = __goscriptTuple8[0]
		let err = __goscriptTuple8[1]
		if (err != null) {
			return err
		}
		let apperr = transport.InvokeStreamHandler(new transport.StreamInvokeRequest({Stream: tServerStream, Handler: streamHandler, Logger: (h$ as handler).logger}, true))
		apperr = handlerErrorToGRPCError(apperr, null)
		return transport.UpdateSpanWithErr(span, apperr)
	}

	public async handleUnary(ctx: context.Context | null, transportRequest: transport.Request | $.VarRef<transport.Request> | null, serverStream: grpc.ServerStream | null, streamMethod: string, start: time.Time, handler: transport.UnaryHandler | null): globalThis.Promise<$.GoError> {
		const h: handler | $.VarRef<handler> | null = this;
		using __defer = new $.DisposableStack()
		const transportRequest$: transport.Request = transportRequest == null ? $.pointerTarget<transport.Request>(transportRequest) : (transportRequest as any).__isVarRef === true ? (transportRequest as any).value : (transportRequest as any).__goValue === undefined ? (transportRequest as any) : $.pointerTarget<transport.Request>(transportRequest)
		let requestData: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
		{
			let err = (__goscriptAwait = (serverStream !== null && (serverStream as any).__isVarRef !== true && (serverStream as any).__goValue === undefined ? (serverStream as Exclude<grpc.ServerStream, null>) : $.pointerValue<Exclude<grpc.ServerStream, null>>(serverStream)).RecvMsg($.interfaceValue(requestData, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		;(transportRequest$ as transport.Request).Body = $.interfaceValue<io.Reader | null>(bytes.NewReader(requestData.value), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader"));
		;(transportRequest$ as transport.Request).BodySize = $.sliceLen(requestData.value)

		let __goscriptShadow1: __goscript_response_writer.responseWriter | $.VarRef<__goscript_response_writer.responseWriter> | null = __goscript_response_writer.newResponseWriter()
		__defer.defer(() => { (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as __goscript_response_writer.responseWriter).Close() : __goscript_response_writer.responseWriter.prototype.Close.call(__goscriptShadow1)) })

		// Echo accepted rpc-service in response header
		void (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as __goscript_response_writer.responseWriter).AddSystemHeader("rpc-service", (transportRequest$ as transport.Request).Service) : __goscript_response_writer.responseWriter.prototype.AddSystemHeader.call(__goscriptShadow1, "rpc-service", (transportRequest$ as transport.Request).Service))

		let err = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as handler).handleUnaryBeforeErrorConversion(ctx, transportRequest, __goscriptShadow1, start, handler) : handler.prototype.handleUnaryBeforeErrorConversion.call(h, ctx, transportRequest, __goscriptShadow1, start, handler))
		err = handlerErrorToGRPCError(err, __goscriptShadow1)

		// Send the response attributes back and end the stream.
		//
		// Warning: SendMsg() holds onto these bytes after returning. Therefore, we
		// cannot pool this responseWriter.
		//
		// See https://github.com/yarpc/yarpc-go/pull/1738 for details.
		{
			let sendErr = (__goscriptAwait = (serverStream !== null && (serverStream as any).__isVarRef !== true && (serverStream as any).__goValue === undefined ? (serverStream as Exclude<grpc.ServerStream, null>) : $.pointerValue<Exclude<grpc.ServerStream, null>>(serverStream)).SendMsg($.interfaceValue((__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as __goscript_response_writer.responseWriter).Bytes() : __goscript_response_writer.responseWriter.prototype.Bytes.call(__goscriptShadow1)), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (sendErr != null) {
				// We couldn't send the response.
				return sendErr
			}
		}
		if ($.pointerValue<__goscript_response_writer.responseWriter>(__goscriptShadow1).md != null) {
			void (__goscriptAwait = (serverStream !== null && (serverStream as any).__isVarRef !== true && (serverStream as any).__goValue === undefined ? (serverStream as Exclude<grpc.ServerStream, null>) : $.pointerValue<Exclude<grpc.ServerStream, null>>(serverStream)).SetTrailer($.pointerValue<__goscript_response_writer.responseWriter>(__goscriptShadow1).md), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async handleUnaryBeforeErrorConversion(ctx: context.Context | null, transportRequest: transport.Request | $.VarRef<transport.Request> | null, responseWriter: __goscript_response_writer.responseWriter | $.VarRef<__goscript_response_writer.responseWriter> | null, start: time.Time, handler: transport.UnaryHandler | null): globalThis.Promise<$.GoError> {
		const h: handler | $.VarRef<handler> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		let tracer = $.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>($.pointerValue<__goscript_inbound.Inbound>($.pointerValue<handler>(h).i).t).options).tracer
		let parentSpanCtx: opentracing.SpanContext | null = null! as opentracing.SpanContext | null
		let __goscriptTuple9: any = metadata.FromIncomingContext(ctx)
		let md: metadata.MD = __goscriptTuple9[0]
		let ok = __goscriptTuple9[1]
		if (ok) {
			let __goscriptTuple10: any = await (tracer !== null && (tracer as any).__isVarRef !== true && (tracer as any).__goValue === undefined ? (tracer as Exclude<opentracing.Tracer, null>) : $.pointerValue<Exclude<opentracing.Tracer, null>>(tracer)).Extract($.namedValueInterfaceValue<any>(opentracing.HTTPHeaders, "opentracing.BuiltinFormat", {}, /* @__PURE__ */ $.basicType("uint8", "opentracing.BuiltinFormat")), $.namedValueInterfaceValue<any>(md, "grpc.mdReadWriter", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
			parentSpanCtx = __goscriptTuple10[0]
		}
		let extractOpenTracingSpan: transport.ExtractOpenTracingSpan | $.VarRef<transport.ExtractOpenTracingSpan> | null = new transport.ExtractOpenTracingSpan({ParentSpanContext: parentSpanCtx, Tracer: tracer, TransportName: "grpc", StartTime: $.markAsStructValue($.cloneStructValue(start)), ExtraTags: yarpc.OpentracingTags})
		let __goscriptTuple11: any = (extractOpenTracingSpan !== null && (extractOpenTracingSpan as any).__isVarRef !== true && (extractOpenTracingSpan as any).__goValue === undefined ? ((extractOpenTracingSpan as any) as transport.ExtractOpenTracingSpan).Do(ctx, transportRequest) : transport.ExtractOpenTracingSpan.prototype.Do.call(extractOpenTracingSpan, ctx, transportRequest))
		ctx = __goscriptTuple11[0]
		let span = __goscriptTuple11[1]
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Finish())((span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/opentracing/opentracing-go.Span.Finish-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee1(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		let err = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as handler).callUnary(ctx, transportRequest, handler, responseWriter) : handler.prototype.callUnary.call(h, ctx, transportRequest, handler, responseWriter))
		return transport.UpdateSpanWithErr(span, err)
	}

	static __typeInfo = $.registerStructType(
		"grpc.handler",
		() => new handler(),
		() => [{ name: "callUnary", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "getBasicTransportRequest", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.Request") }, { type: "error" }], pointerReceiver: true }, { name: "handle", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "handleStream", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "handleUnary", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "handleUnaryBeforeErrorConversion", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		handler,
		() => [{ name: "i", key: "i", type: /* @__PURE__ */ $.pointerType("grpc.Inbound") }, { name: "logger", key: "logger", type: /* @__PURE__ */ $.pointerType("zap.Logger") }]
	)
}

export let errInvalidGRPCStream: $.GoError = await status.Error(3, "received grpc request with invalid stream")

export function __goscript_set_errInvalidGRPCStream(__goscriptValue: $.GoError): void {
	errInvalidGRPCStream = __goscriptValue
}

export let errInvalidGRPCMethod: yarpcerrors.Status | $.VarRef<yarpcerrors.Status> | null = await yarpcerrors.Newf(3, "invalid stream method name for request", null)

export function __goscript_set_errInvalidGRPCMethod(__goscriptValue: yarpcerrors.Status | $.VarRef<yarpcerrors.Status> | null): void {
	errInvalidGRPCMethod = __goscriptValue
}

export function newHandler(i: __goscript_inbound.Inbound | $.VarRef<__goscript_inbound.Inbound> | null, l: zap.Logger | $.VarRef<zap.Logger> | null): handler | $.VarRef<handler> | null {
	return new handler({i: i, logger: l})
}

export function procedureFromStreamMethod(streamMethod: string): [string, $.GoError] {
	if ((!$.stringEqual(streamMethod, "")) && ($.indexString(streamMethod, 0) == 47)) {
		streamMethod = $.sliceStringOrBytes(streamMethod, 1, undefined)
	}
	let pos = strings.LastIndex(streamMethod, "/")
	if (pos == -1) {
		return ["", $.interfaceValue<$.GoError>(errInvalidGRPCMethod, "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))]
	}
	let service = $.sliceStringOrBytes(streamMethod, undefined, pos)
	let method = $.sliceStringOrBytes(streamMethod, pos + 1, undefined)
	return __goscript_util.procedureToName(service, method)
}

export function handlerErrorToGRPCError(err: $.GoError, responseWriter: __goscript_response_writer.responseWriter | $.VarRef<__goscript_response_writer.responseWriter> | null): $.GoError {
	if (err == null) {
		return null
	}
	// if this is an error created from grpc-go, return the error
	{
		let [, ok] = status.FromError(err)
		if (ok) {
			return err
		}
	}
	// if this is not a yarpc error, return the error
	// this will result in the error being a grpc-go error with codes.Unknown
	if (!yarpcerrors.IsStatus(err)) {
		return err
	}
	// we now know we have a yarpc error
	let yarpcStatus: yarpcerrors.Status | $.VarRef<yarpcerrors.Status> | null = yarpcerrors.FromError(err)
	let name = (yarpcStatus !== null && (yarpcStatus as any).__isVarRef !== true && (yarpcStatus as any).__goValue === undefined ? ((yarpcStatus as any) as yarpcerrors.Status).Name() : yarpcerrors.Status.prototype.Name.call(yarpcStatus))
	let message = (yarpcStatus !== null && (yarpcStatus as any).__isVarRef !== true && (yarpcStatus as any).__goValue === undefined ? ((yarpcStatus as any) as yarpcerrors.Status).Message() : yarpcerrors.Status.prototype.Message.call(yarpcStatus))
	// if the yarpc error has a name, set the header
	if (!$.stringEqual(name, "")) {
		if (responseWriter != null) {
			void (responseWriter !== null && (responseWriter as any).__isVarRef !== true && (responseWriter as any).__goValue === undefined ? ((responseWriter as any) as __goscript_response_writer.responseWriter).AddSystemHeader("rpc-error-name", name) : __goscript_response_writer.responseWriter.prototype.AddSystemHeader.call(responseWriter, "rpc-error-name", name))
		}
		if ($.stringEqual(message, "")) {
			// if the message is empty, set the message to the name for grpc compatibility
			message = name
		} else {
			// else, we set the name as the prefix for grpc compatibility
			// we parse this off the front if the name header is set on the client-side
			message = $.concatString(($.concatString(name, ": ")), message)
		}
	}

	{
		let body: $.Slice<number> = (yarpcStatus !== null && (yarpcStatus as any).__isVarRef !== true && (yarpcStatus as any).__goValue === undefined ? ((yarpcStatus as any) as yarpcerrors.Status).Details() : yarpcerrors.Status.prototype.Details.call(yarpcStatus))
		if (body != null) {
			return __goscript_marshal.unmarshalError(body)
		}
	}

	let [grpcCode, ok] = $.mapGet<yarpcerrors.Code, codes.Code, codes.Code>(grpcerrorcodes.YARPCCodeToGRPCCode, (yarpcStatus !== null && (yarpcStatus as any).__isVarRef !== true && (yarpcStatus as any).__goValue === undefined ? ((yarpcStatus as any) as yarpcerrors.Status).Code() : yarpcerrors.Status.prototype.Code.call(yarpcStatus)), 0)
	// should only happen if grpcerrorcodes.YARPCCodeToGRPCCode does not cover all codes
	if (!ok) {
		grpcCode = 2
	}
	return status.Error(grpcCode, message)
}

export function toGRPCError(err: $.GoError): $.GoError {
	if (err == null) {
		return null
	}

	// if this is not a yarpc error, return the error
	// this will result in the error being a grpc-go error with codes.Unknown
	if (!yarpcerrors.IsStatus(err)) {
		return err
	}
	// we now know we have a yarpc error
	let yarpcStatus: yarpcerrors.Status | $.VarRef<yarpcerrors.Status> | null = yarpcerrors.FromError(err)
	let message = (yarpcStatus !== null && (yarpcStatus as any).__isVarRef !== true && (yarpcStatus as any).__goValue === undefined ? ((yarpcStatus as any) as yarpcerrors.Status).Message() : yarpcerrors.Status.prototype.Message.call(yarpcStatus))
	let [grpcCode, ok] = $.mapGet<yarpcerrors.Code, codes.Code, codes.Code>(grpcerrorcodes.YARPCCodeToGRPCCode, (yarpcStatus !== null && (yarpcStatus as any).__isVarRef !== true && (yarpcStatus as any).__goValue === undefined ? ((yarpcStatus as any) as yarpcerrors.Status).Code() : yarpcerrors.Status.prototype.Code.call(yarpcStatus)), 0)
	// should only happen if grpcerrorcodes.YARPCCodeToGRPCCode does not cover all codes
	if (!ok) {
		grpcCode = 2
	}
	return status.Error(grpcCode, message)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({ForeachKey: (receiver: any, ...args: any[]) => (__goscript_headers.mdReadWriter_ForeachKey as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (__goscript_headers.mdReadWriter_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ("grpc.mdReadWriter")
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("ForeachKey", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]])])
}

var __goscriptAwait: any
