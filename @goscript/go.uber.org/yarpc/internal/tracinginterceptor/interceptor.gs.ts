// Generated file based on interceptor.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as time from "@goscript/time/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as ext from "@goscript/github.com/opentracing/opentracing-go/ext/index.js"

import * as log2 from "@goscript/github.com/opentracing/opentracing-go/log/index.js"

import * as transport2 from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as interceptor from "@goscript/go.uber.org/yarpc/internal/interceptor/index.js"

import * as tracing from "@goscript/go.uber.org/yarpc/transport/tchannel/tracing/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as __goscript_tagshelper from "./tagshelper.gs.ts"

import * as __goscript_tracedstream from "./tracedstream.gs.ts"
import "@goscript/context/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/opentracing/opentracing-go/ext/index.js"
import "@goscript/github.com/opentracing/opentracing-go/log/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/internal/interceptor/index.js"
import "@goscript/go.uber.org/yarpc/transport/tchannel/tracing/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "./tagshelper.gs.ts"
import "./tracedstream.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/internal/tracinginterceptor", ["tracinginterceptor.Params", "tracinginterceptor.Interceptor", "tracinginterceptor.PropagationCarrier"])

export type PropagationCarrier = {
	ForeachKey(handler: ((key: string, val: string) => $.GoError | globalThis.Promise<$.GoError>) | null): $.GoError | globalThis.Promise<$.GoError>
	Set(key: string, val: string): void
}

$.registerInterfaceType(
	"tracinginterceptor.PropagationCarrier",
	null,
	[{ name: "ForeachKey", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "Set", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }]
);

export class Params {
	public get Tracer(): opentracing.Tracer | null {
		return this._fields.Tracer
	}

	public set Tracer(value: opentracing.Tracer | null) {
		this._fields.Tracer = value
	}

	public get Transport(): string {
		return this._fields.Transport
	}

	public set Transport(value: string) {
		this._fields.Transport = value
	}

	public get Logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.Logger
	}

	public set Logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.Logger = value
	}

	public _fields: {
		Tracer: opentracing.Tracer | null
		Transport: string
		Logger: zap.Logger | $.VarRef<zap.Logger> | null
	}

	constructor(init?: Partial<{Tracer?: opentracing.Tracer | null, Transport?: string, Logger?: zap.Logger | $.VarRef<zap.Logger> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Tracer: init?.Tracer ?? (null! as opentracing.Tracer | null),
			Transport: init?.Transport ?? ("" as string),
			Logger: init?.Logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Params {
		return new Params(this, true)
	}

	public __goscriptAssign(source: Params): void {
		const target = this._fields
		const values = source._fields
		target.Tracer = $.assignFieldValue(target.Tracer, values.Tracer, "opentracing.Tracer")
		target.Transport = values.Transport
		target.Logger = values.Logger
	}

	static __typeInfo = $.registerStructType(
		"tracinginterceptor.Params",
		() => new Params(),
		() => [],
		Params,
		() => [{ name: "Tracer", key: "Tracer", type: "opentracing.Tracer" }, { name: "Transport", key: "Transport", type: /* @__PURE__ */ $.basicType("string") }, { name: "Logger", key: "Logger", type: /* @__PURE__ */ $.pointerType("zap.Logger") }]
	)
}

export class Interceptor {
	public get tracer(): opentracing.Tracer | null {
		return this._fields.tracer
	}

	public set tracer(value: opentracing.Tracer | null) {
		this._fields.tracer = value
	}

	public get transport(): string {
		return this._fields.transport
	}

	public set transport(value: string) {
		this._fields.transport = value
	}

	public get propagationFormat(): opentracing.BuiltinFormat {
		return this._fields.propagationFormat
	}

	public set propagationFormat(value: opentracing.BuiltinFormat) {
		this._fields.propagationFormat = value
	}

	public get log(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.log
	}

	public set log(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.log = value
	}

	public _fields: {
		tracer: opentracing.Tracer | null
		transport: string
		propagationFormat: opentracing.BuiltinFormat
		log: zap.Logger | $.VarRef<zap.Logger> | null
	}

	constructor(init?: Partial<{tracer?: opentracing.Tracer | null, transport?: string, propagationFormat?: opentracing.BuiltinFormat, log?: zap.Logger | $.VarRef<zap.Logger> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			tracer: init?.tracer ?? (null! as opentracing.Tracer | null),
			transport: init?.transport ?? ("" as string),
			propagationFormat: init?.propagationFormat ?? (0 as opentracing.BuiltinFormat),
			log: init?.log ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Interceptor {
		return new Interceptor(this, true)
	}

	public __goscriptAssign(source: Interceptor): void {
		const target = this._fields
		const values = source._fields
		target.tracer = $.assignFieldValue(target.tracer, values.tracer, "opentracing.Tracer")
		target.transport = values.transport
		target.propagationFormat = values.propagationFormat
		target.log = values.log
	}

	public async Call(ctx: context.Context | null, req: transport2.Request | $.VarRef<transport2.Request> | null, out: interceptor.UnaryOutboundChain | null): globalThis.Promise<[transport2.Response | $.VarRef<transport2.Response> | null, $.GoError]> {
		const i: Interceptor | $.VarRef<Interceptor> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const i$: Interceptor = i == null ? $.pointerTarget<Interceptor>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Interceptor>(i)
		const req$: transport2.Request = req == null ? $.pointerTarget<transport2.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<transport2.Request>(req)
		let createOpenTracingSpan: transport2.CreateOpenTracingSpan | $.VarRef<transport2.CreateOpenTracingSpan> | null = (() => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue(time.Now())); return new transport2.CreateOpenTracingSpan({Tracer: (i$ as Interceptor).tracer, TransportName: (i$ as Interceptor).transport, StartTime: __goscriptLiteralField0, ExtraTags: __goscript_tagshelper.commonTracingTags}) })()
		let __goscriptTuple0: any = (createOpenTracingSpan !== null && (createOpenTracingSpan as any).__isVarRef !== true && (createOpenTracingSpan as any).__goValue === undefined ? ((createOpenTracingSpan as any) as transport2.CreateOpenTracingSpan).Do(ctx, req) : transport2.CreateOpenTracingSpan.prototype.Do.call(createOpenTracingSpan, ctx, req))
		ctx = __goscriptTuple0[0]
		let span = __goscriptTuple0[1]
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Finish())((span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/opentracing/opentracing-go.Span.Finish-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		let tracingHeaders: globalThis.Map<string, string> | null = $.makeMap<string, string>()

		// We use i.transport here because this is an outbound call made by the interceptor.
		// In inbound handlers (e.g., Handle function), req.Transport is used because it's the transport from the incoming request.
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<opentracing.Tracer, null>>((i$ as Interceptor).tracer).Inject((__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).Context(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.namedValueInterfaceValue<any>((i$ as Interceptor).propagationFormat, "opentracing.BuiltinFormat", {}, /* @__PURE__ */ $.basicType("uint8", "opentracing.BuiltinFormat")), (getPropagationCarrier(tracingHeaders, (i$ as Interceptor).transport) as any)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).LogFields($.arrayToSlice<log2.Field>([(__goscript_tagshelper.logFieldEventError).clone(), log2.String("message", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				for (const [k, v] of tracingHeaders?.entries() ?? []) {
					$.assignStruct((req$ as transport2.Request).Headers, $.markAsStructValue($.cloneStructValue((req$ as transport2.Request).Headers)).With(k, v))
				}
			}
		}

		let __goscriptTuple1: any = await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<interceptor.UnaryOutboundChain, null>) : $.pointerValue<Exclude<interceptor.UnaryOutboundChain, null>>(out)).Next(ctx, req)
		let res: transport2.Response | $.VarRef<transport2.Response> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		let res$: transport2.Response = res == null ? $.pointerTarget<transport2.Response>(res) : (res as any).__isVarRef === true ? (res as any).value : (res as any).__goValue === undefined ? (res as any) : $.pointerTarget<transport2.Response>(res)
		if (res != null) {
			return [res, await updateSpanWithErrorDetails(span, (res$ as transport2.Response).ApplicationError, (res$ as transport2.Response).ApplicationErrorMeta, err)]
		}
		return [null, await updateSpanWithErrorDetails(span, false, null, err)]
	}

	public async CallOneway(ctx: context.Context | null, req: transport2.Request | $.VarRef<transport2.Request> | null, out: interceptor.OnewayOutboundChain | null): globalThis.Promise<[transport2.Ack | null, $.GoError]> {
		const i: Interceptor | $.VarRef<Interceptor> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const i$: Interceptor = i == null ? $.pointerTarget<Interceptor>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Interceptor>(i)
		const req$: transport2.Request = req == null ? $.pointerTarget<transport2.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<transport2.Request>(req)
		let createOpenTracingSpan: transport2.CreateOpenTracingSpan | $.VarRef<transport2.CreateOpenTracingSpan> | null = (() => { const __goscriptLiteralField1 = $.markAsStructValue($.cloneStructValue(time.Now())); return new transport2.CreateOpenTracingSpan({Tracer: (i$ as Interceptor).tracer, TransportName: (i$ as Interceptor).transport, StartTime: __goscriptLiteralField1, ExtraTags: __goscript_tagshelper.commonTracingTags}) })()
		let __goscriptTuple2: any = (createOpenTracingSpan !== null && (createOpenTracingSpan as any).__isVarRef !== true && (createOpenTracingSpan as any).__goValue === undefined ? ((createOpenTracingSpan as any) as transport2.CreateOpenTracingSpan).Do(ctx, req) : transport2.CreateOpenTracingSpan.prototype.Do.call(createOpenTracingSpan, ctx, req))
		ctx = __goscriptTuple2[0]
		let span = __goscriptTuple2[1]
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Finish())((span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/opentracing/opentracing-go.Span.Finish-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee1(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		let tracingHeaders: globalThis.Map<string, string> | null = $.makeMap<string, string>()
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<opentracing.Tracer, null>>((i$ as Interceptor).tracer).Inject((__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).Context(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.namedValueInterfaceValue<any>((i$ as Interceptor).propagationFormat, "opentracing.BuiltinFormat", {}, /* @__PURE__ */ $.basicType("uint8", "opentracing.BuiltinFormat")), (getPropagationCarrier(tracingHeaders, (i$ as Interceptor).transport) as any)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).LogFields($.arrayToSlice<log2.Field>([(__goscript_tagshelper.logFieldEventError).clone(), log2.String("message", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				for (const [k, v] of tracingHeaders?.entries() ?? []) {
					$.assignStruct((req$ as transport2.Request).Headers, $.markAsStructValue($.cloneStructValue((req$ as transport2.Request).Headers)).With(k, v))
				}
			}
		}

		let [ack, err] = await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<interceptor.OnewayOutboundChain, null>) : $.pointerValue<Exclude<interceptor.OnewayOutboundChain, null>>(out)).Next(ctx, req)
		return [ack, await updateSpanWithErrorDetails(span, false, null, err)]
	}

	public async CallStream(ctx: context.Context | null, req: transport2.StreamRequest | $.VarRef<transport2.StreamRequest> | null, out: interceptor.StreamOutboundChain | null): globalThis.Promise<[transport2.ClientStream | $.VarRef<transport2.ClientStream> | null, $.GoError]> {
		const i: Interceptor | $.VarRef<Interceptor> | null = this;
		const i$: Interceptor = i == null ? $.pointerTarget<Interceptor>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Interceptor>(i)
		const req$: transport2.StreamRequest = req == null ? $.pointerTarget<transport2.StreamRequest>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<transport2.StreamRequest>(req)
		let createOpenTracingSpan: transport2.CreateOpenTracingSpan | $.VarRef<transport2.CreateOpenTracingSpan> | null = (() => { const __goscriptLiteralField2 = $.markAsStructValue($.cloneStructValue(time.Now())); return new transport2.CreateOpenTracingSpan({Tracer: (i$ as Interceptor).tracer, TransportName: (i$ as Interceptor).transport, StartTime: __goscriptLiteralField2, ExtraTags: __goscript_tagshelper.commonTracingTags}) })()
		let [, span] = transport2.CreateOpenTracingSpan.prototype.Do.call(createOpenTracingSpan, ctx, new transport2.Request({Caller: $.pointerValue<transport2.RequestMeta>((req$ as transport2.StreamRequest).Meta).Caller, Service: $.pointerValue<transport2.RequestMeta>((req$ as transport2.StreamRequest).Meta).Service, Procedure: $.pointerValue<transport2.RequestMeta>((req$ as transport2.StreamRequest).Meta).Procedure, Headers: $.pointerValue<transport2.RequestMeta>((req$ as transport2.StreamRequest).Meta).Headers, Transport: $.pointerValue<transport2.RequestMeta>((req$ as transport2.StreamRequest).Meta).Transport}))

		// Inject span context into headers for tracing propagation
		let tracingHeaders: globalThis.Map<string, string> | null = $.makeMap<string, string>()
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<opentracing.Tracer, null>>((i$ as Interceptor).tracer).Inject((__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).Context(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.namedValueInterfaceValue<any>((i$ as Interceptor).propagationFormat, "opentracing.BuiltinFormat", {}, /* @__PURE__ */ $.basicType("uint8", "opentracing.BuiltinFormat")), (getPropagationCarrier(tracingHeaders, (i$ as Interceptor).transport) as any)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).LogFields($.arrayToSlice<log2.Field>([(__goscript_tagshelper.logFieldEventError).clone(), log2.String("message", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				for (const [k, v] of tracingHeaders?.entries() ?? []) {
					$.assignStruct($.pointerValue<transport2.RequestMeta>((req$ as transport2.StreamRequest).Meta).Headers, $.markAsStructValue($.cloneStructValue($.pointerValue<transport2.RequestMeta>((req$ as transport2.StreamRequest).Meta).Headers)).With(k, v))
				}
			}
		}

		let __goscriptTuple3: any = await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<interceptor.StreamOutboundChain, null>) : $.pointerValue<Exclude<interceptor.StreamOutboundChain, null>>(out)).Next(ctx, req)
		let clientStream: transport2.ClientStream | $.VarRef<transport2.ClientStream> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err != null) {
			await updateSpanWithErrorDetails(span, false, null, err)
			void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).Finish(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [null, err]
		}

		let tracedStream: __goscript_tracedstream.tracedClientStream | $.VarRef<__goscript_tracedstream.tracedClientStream> | null = new __goscript_tracedstream.tracedClientStream({clientStream: clientStream, span: span})

		return [await wrapTracedClientStream(tracedStream), null]
	}

	public async Handle(ctx: context.Context | null, req: transport2.Request | $.VarRef<transport2.Request> | null, resw: transport2.ResponseWriter | null, h: transport2.UnaryHandler | null): globalThis.Promise<$.GoError> {
		const i: Interceptor | $.VarRef<Interceptor> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const i$: Interceptor = i == null ? $.pointerTarget<Interceptor>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Interceptor>(i)
		const req$: transport2.Request = req == null ? $.pointerTarget<transport2.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<transport2.Request>(req)
		let [parentSpanCtx, ] = await $.pointerValue<Exclude<opentracing.Tracer, null>>((i$ as Interceptor).tracer).Extract($.namedValueInterfaceValue<any>((i$ as Interceptor).propagationFormat, "opentracing.BuiltinFormat", {}, /* @__PURE__ */ $.basicType("uint8", "opentracing.BuiltinFormat")), (getPropagationCarrier($.markAsStructValue($.cloneStructValue((req$ as transport2.Request).Headers)).Items(), (req$ as transport2.Request).Transport) as any))
		let extractOpenTracingSpan: transport2.ExtractOpenTracingSpan | $.VarRef<transport2.ExtractOpenTracingSpan> | null = (() => { const __goscriptLiteralField3 = $.markAsStructValue($.cloneStructValue(time.Now())); return new transport2.ExtractOpenTracingSpan({ParentSpanContext: parentSpanCtx, Tracer: (i$ as Interceptor).tracer, TransportName: (req$ as transport2.Request).Transport, StartTime: __goscriptLiteralField3, ExtraTags: __goscript_tagshelper.commonTracingTags}) })()
		let __goscriptTuple4: any = (extractOpenTracingSpan !== null && (extractOpenTracingSpan as any).__isVarRef !== true && (extractOpenTracingSpan as any).__goValue === undefined ? ((extractOpenTracingSpan as any) as transport2.ExtractOpenTracingSpan).Do(ctx, req) : transport2.ExtractOpenTracingSpan.prototype.Do.call(extractOpenTracingSpan, ctx, req))
		ctx = __goscriptTuple4[0]
		let span = __goscriptTuple4[1]
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Finish())((span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/opentracing/opentracing-go.Span.Finish-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee2(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		let err = (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<transport2.UnaryHandler, null>) : $.pointerValue<Exclude<transport2.UnaryHandler, null>>(h)).Handle(ctx, req, resw), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let [extendedWriter, ok] = $.typeAssertTuple<transport2.ExtendedResponseWriter | null>(resw, "transport.ExtendedResponseWriter")
		if (!ok) {
			zap.Logger.prototype.Debug.call((i$ as Interceptor).log, "ResponseWriter does not implement ExtendedResponseWriter, passing false and nil for app error meta", null)
			return await updateSpanWithErrorDetails(span, false, null, err)
		}

		return await updateSpanWithErrorDetails(span, (__goscriptAwait = (extendedWriter !== null && (extendedWriter as any).__isVarRef !== true && (extendedWriter as any).__goValue === undefined ? (extendedWriter as Exclude<transport2.ExtendedResponseWriter, null>) : $.pointerValue<Exclude<transport2.ExtendedResponseWriter, null>>(extendedWriter)).IsApplicationError(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), ((__goscriptAwait = (extendedWriter !== null && (extendedWriter as any).__isVarRef !== true && (extendedWriter as any).__goValue === undefined ? (extendedWriter as Exclude<transport2.ExtendedResponseWriter, null>) : $.pointerValue<Exclude<transport2.ExtendedResponseWriter, null>>(extendedWriter)).ApplicationErrorMeta(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as transport2.ApplicationErrorMeta | $.VarRef<transport2.ApplicationErrorMeta> | null), err)
	}

	public async HandleOneway(ctx: context.Context | null, req: transport2.Request | $.VarRef<transport2.Request> | null, h: transport2.OnewayHandler | null): globalThis.Promise<$.GoError> {
		const i: Interceptor | $.VarRef<Interceptor> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const i$: Interceptor = i == null ? $.pointerTarget<Interceptor>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Interceptor>(i)
		const req$: transport2.Request = req == null ? $.pointerTarget<transport2.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<transport2.Request>(req)
		let [parentSpanCtx, ] = await $.pointerValue<Exclude<opentracing.Tracer, null>>((i$ as Interceptor).tracer).Extract($.namedValueInterfaceValue<any>((i$ as Interceptor).propagationFormat, "opentracing.BuiltinFormat", {}, /* @__PURE__ */ $.basicType("uint8", "opentracing.BuiltinFormat")), (getPropagationCarrier($.markAsStructValue($.cloneStructValue((req$ as transport2.Request).Headers)).Items(), (req$ as transport2.Request).Transport) as any))
		let extractOpenTracingSpan: transport2.ExtractOpenTracingSpan | $.VarRef<transport2.ExtractOpenTracingSpan> | null = (() => { const __goscriptLiteralField4 = $.markAsStructValue($.cloneStructValue(time.Now())); return new transport2.ExtractOpenTracingSpan({ParentSpanContext: parentSpanCtx, Tracer: (i$ as Interceptor).tracer, TransportName: (req$ as transport2.Request).Transport, StartTime: __goscriptLiteralField4, ExtraTags: __goscript_tagshelper.commonTracingTags}) })()
		let __goscriptTuple5: any = (extractOpenTracingSpan !== null && (extractOpenTracingSpan as any).__isVarRef !== true && (extractOpenTracingSpan as any).__goValue === undefined ? ((extractOpenTracingSpan as any) as transport2.ExtractOpenTracingSpan).Do(ctx, req) : transport2.ExtractOpenTracingSpan.prototype.Do.call(extractOpenTracingSpan, ctx, req))
		ctx = __goscriptTuple5[0]
		let span = __goscriptTuple5[1]
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Finish())((span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/opentracing/opentracing-go.Span.Finish-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee3(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		let err = (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<transport2.OnewayHandler, null>) : $.pointerValue<Exclude<transport2.OnewayHandler, null>>(h)).HandleOneway(ctx, req), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return await updateSpanWithErrorDetails(span, false, null, err)
	}

	public async HandleStream(s: transport2.ServerStream | $.VarRef<transport2.ServerStream> | null, h: transport2.StreamHandler | null): globalThis.Promise<$.GoError> {
		const i: Interceptor | $.VarRef<Interceptor> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const i$: Interceptor = i == null ? $.pointerTarget<Interceptor>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Interceptor>(i)
		let req: transport2.StreamRequest | $.VarRef<transport2.StreamRequest> | null = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as transport2.ServerStream).Request() : transport2.ServerStream.prototype.Request.call(s))
		let req$: transport2.StreamRequest = req == null ? $.pointerTarget<transport2.StreamRequest>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<transport2.StreamRequest>(req)
		let [parentSpanCtx, ] = await $.pointerValue<Exclude<opentracing.Tracer, null>>((i$ as Interceptor).tracer).Extract($.namedValueInterfaceValue<any>((i$ as Interceptor).propagationFormat, "opentracing.BuiltinFormat", {}, /* @__PURE__ */ $.basicType("uint8", "opentracing.BuiltinFormat")), (getPropagationCarrier($.markAsStructValue($.cloneStructValue($.pointerValue<transport2.RequestMeta>((req$ as transport2.StreamRequest).Meta).Headers)).Items(), (i$ as Interceptor).transport) as any))
		let transportRequest: transport2.Request | $.VarRef<transport2.Request> | null = new transport2.Request({Caller: $.pointerValue<transport2.RequestMeta>((req$ as transport2.StreamRequest).Meta).Caller, Service: $.pointerValue<transport2.RequestMeta>((req$ as transport2.StreamRequest).Meta).Service, Procedure: $.pointerValue<transport2.RequestMeta>((req$ as transport2.StreamRequest).Meta).Procedure, Headers: $.pointerValue<transport2.RequestMeta>((req$ as transport2.StreamRequest).Meta).Headers, Transport: $.pointerValue<transport2.RequestMeta>((req$ as transport2.StreamRequest).Meta).Transport})
		let extractOpenTracingSpan: transport2.ExtractOpenTracingSpan | $.VarRef<transport2.ExtractOpenTracingSpan> | null = (() => { const __goscriptLiteralField5 = $.markAsStructValue($.cloneStructValue(time.Now())); return new transport2.ExtractOpenTracingSpan({ParentSpanContext: parentSpanCtx, Tracer: (i$ as Interceptor).tracer, TransportName: $.pointerValue<transport2.RequestMeta>((req$ as transport2.StreamRequest).Meta).Transport, StartTime: __goscriptLiteralField5, ExtraTags: __goscript_tagshelper.commonTracingTags}) })()
		let [ctx, span] = transport2.ExtractOpenTracingSpan.prototype.Do.call(extractOpenTracingSpan, (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as transport2.ServerStream).Context() : transport2.ServerStream.prototype.Context.call(s)), transportRequest)
		if (span == null) {
			return (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<transport2.StreamHandler, null>) : $.pointerValue<Exclude<transport2.StreamHandler, null>>(h)).HandleStream(s)
		}
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Finish())((span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/opentracing/opentracing-go.Span.Finish-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee4(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		let tracedRaw: __goscript_tracedstream.tracedServerStream | $.VarRef<__goscript_tracedstream.tracedServerStream> | null = new __goscript_tracedstream.tracedServerStream({serverStream: s, span: span, ctx: ctx})
		let __goscriptTuple6: any = transport2.NewServerStream($.interfaceValue<transport2.Stream | null>(tracedRaw, "*tracinginterceptor.tracedServerStream", /* @__PURE__ */ $.pointerType("tracinginterceptor.tracedServerStream")), null)
		let wrapped: transport2.ServerStream | $.VarRef<transport2.ServerStream> | null = __goscriptTuple6[0]
		let err = __goscriptTuple6[1]
		if (err != null) {
			void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).LogFields($.arrayToSlice<log2.Field>([(__goscript_tagshelper.logFieldEventError).clone(), log2.String("message", "Failed to wrap the traced server stream")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return err
		}
		err = (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<transport2.StreamHandler, null>) : $.pointerValue<Exclude<transport2.StreamHandler, null>>(h)).HandleStream(wrapped), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return await updateSpanWithErrorDetails(span, err != null, null, err)
	}

	static __typeInfo = $.registerStructType(
		"tracinginterceptor.Interceptor",
		() => new Interceptor(),
		() => [{ name: "Call", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.Response") }, { type: "error" }], pointerReceiver: true }, { name: "CallOneway", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "transport.Ack" }, { type: "error" }], pointerReceiver: true }, { name: "CallStream", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.ClientStream") }, { type: "error" }], pointerReceiver: true }, { name: "Handle", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "HandleOneway", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "HandleStream", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		Interceptor,
		() => [{ name: "tracer", key: "tracer", type: "opentracing.Tracer" }, { name: "transport", key: "transport", type: /* @__PURE__ */ $.basicType("string") }, { name: "propagationFormat", key: "propagationFormat", type: /* @__PURE__ */ $.basicType("uint8", "opentracing.BuiltinFormat") }, { name: "log", key: "log", type: /* @__PURE__ */ $.pointerType("zap.Logger") }]
	)
}

export function New(p: Params): Interceptor | $.VarRef<Interceptor> | null {
	let i: Interceptor | $.VarRef<Interceptor> | null = (() => { const __goscriptLiteralField6 = getPropagationFormat(p.Transport); return new Interceptor({tracer: p.Tracer, transport: p.Transport, propagationFormat: __goscriptLiteralField6, log: p.Logger}) })()
	let i$: Interceptor = i == null ? $.pointerTarget<Interceptor>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Interceptor>(i)
	if ((i$ as Interceptor).tracer == null) {
		;(i$ as Interceptor).tracer = opentracing.GlobalTracer()
	}
	if ((i$ as Interceptor).log == null) {
		;(i$ as Interceptor).log = zap.NewNop()
	}
	return i
}

export async function updateSpanWithErrorDetails(span: opentracing.Span | null, isApplicationError: boolean, appErrorMeta: transport2.ApplicationErrorMeta | $.VarRef<transport2.ApplicationErrorMeta> | null, err: $.GoError): globalThis.Promise<$.GoError> {
	const appErrorMeta$: transport2.ApplicationErrorMeta = appErrorMeta == null ? $.pointerTarget<transport2.ApplicationErrorMeta>(appErrorMeta) : (appErrorMeta as any).__isVarRef === true ? (appErrorMeta as any).value : (appErrorMeta as any).__goValue === undefined ? (appErrorMeta as any) : $.pointerTarget<transport2.ApplicationErrorMeta>(appErrorMeta)
	if ((err == null) && !isApplicationError) {
		return null
	}
	ext.BoolTagName_Set(ext.Error, span, true)
	{
		let status: yarpcerrors.Status | $.VarRef<yarpcerrors.Status> | null = yarpcerrors.FromError(err)
		if (status != null) {
			let errCode = (status !== null && (status as any).__isVarRef !== true && (status as any).__goValue === undefined ? ((status as any) as yarpcerrors.Status).Code() : yarpcerrors.Status.prototype.Code.call(status))
			void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).SetTag("rpc.yarpc.status_code", $.basicInterfaceValue($.int(errCode), "int")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return err
		}
	}
	if (isApplicationError) {
		void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).SetTag("rpc.yarpc.status_code", "application_error"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		if (appErrorMeta != null) {
			if ((appErrorMeta$ as transport2.ApplicationErrorMeta).Code != null) {
				void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).SetTag("rpc.yarpc.status_code", $.basicInterfaceValue($.int($.pointerValue<yarpcerrors.Code>((appErrorMeta$ as transport2.ApplicationErrorMeta).Code)), "int")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if (!$.stringEqual((appErrorMeta$ as transport2.ApplicationErrorMeta).Name, "")) {
				void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).SetTag("error.name", (appErrorMeta$ as transport2.ApplicationErrorMeta).Name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return err
	}
	void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).SetTag("rpc.yarpc.status_code", $.basicInterfaceValue($.int(yarpcerrors.CodeUnknown), "int")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return err
}

export function getPropagationFormat(transport: string): opentracing.BuiltinFormat {
	if ($.stringEqual(transport, "tchannel")) {
		return 1
	}
	return 2
}

export function getPropagationCarrier(headers: globalThis.Map<string, string> | null, transport: string): PropagationCarrier | null {
	if ($.stringEqual(transport, "tchannel")) {
		return $.namedValueInterfaceValue<PropagationCarrier | null>(headers, "tracing.HeadersCarrier", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
	}
	return $.namedValueInterfaceValue<PropagationCarrier | null>(headers, "opentracing.TextMapCarrier", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())
}

export async function wrapTracedClientStream(tracedStream: __goscript_tracedstream.tracedClientStream | $.VarRef<__goscript_tracedstream.tracedClientStream> | null): globalThis.Promise<transport2.ClientStream | $.VarRef<transport2.ClientStream> | null> {
	const tracedStream$: __goscript_tracedstream.tracedClientStream = tracedStream == null ? $.pointerTarget<__goscript_tracedstream.tracedClientStream>(tracedStream) : (tracedStream as any).__isVarRef === true ? (tracedStream as any).value : (tracedStream as any).__goValue === undefined ? (tracedStream as any) : $.pointerTarget<__goscript_tracedstream.tracedClientStream>(tracedStream)
	let __goscriptTuple7: any = transport2.NewClientStream($.interfaceValue<transport2.StreamCloser | null>(tracedStream, "*tracinginterceptor.tracedClientStream", /* @__PURE__ */ $.pointerType("tracinginterceptor.tracedClientStream")), null)
	let wrapped: transport2.ClientStream | $.VarRef<transport2.ClientStream> | null = __goscriptTuple7[0]
	let err = __goscriptTuple7[1]
	if (err != null) {
		// This should not happen, since NewClientStream only fails for the nil streams.
		void (__goscriptAwait = $.pointerValue<Exclude<opentracing.Span, null>>((tracedStream$ as __goscript_tracedstream.tracedClientStream).span).LogFields($.arrayToSlice<log2.Field>([(__goscript_tagshelper.logFieldEventError).clone(), log2.String("message", "Failed to wrap traced client stream")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = $.pointerValue<Exclude<opentracing.Span, null>>((tracedStream$ as __goscript_tracedstream.tracedClientStream).span).Finish(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return (tracedStream$ as __goscript_tracedstream.tracedClientStream).clientStream
	}
	return wrapped
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({ForeachKey: (receiver: any, ...args: any[]) => (tracing.HeadersCarrier_ForeachKey as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (tracing.HeadersCarrier_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ("tracing.HeadersCarrier")
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("ForeachKey", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({ForeachKey: (receiver: any, ...args: any[]) => (opentracing.TextMapCarrier_ForeachKey as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (opentracing.TextMapCarrier_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ("opentracing.TextMapCarrier")
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("ForeachKey", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("string")]])])
}

var __goscriptAwait: any
