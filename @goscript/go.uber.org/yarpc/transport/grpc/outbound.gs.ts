// Generated file based on outbound.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes2 from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as ioutil from "@goscript/io/ioutil/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as status2 from "@goscript/github.com/gogo/status/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import * as peer from "@goscript/go.uber.org/yarpc/api/peer/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as introspection from "@goscript/go.uber.org/yarpc/api/x/introspection/index.js"

import * as grpcerrorcodes from "@goscript/go.uber.org/yarpc/internal/grpcerrorcodes/index.js"

import * as interceptor from "@goscript/go.uber.org/yarpc/internal/interceptor/index.js"

import * as outboundinterceptor from "@goscript/go.uber.org/yarpc/internal/interceptor/outboundinterceptor/index.js"

import * as intyarpcerrors from "@goscript/go.uber.org/yarpc/internal/yarpcerrors/index.js"

import * as peerchooser from "@goscript/go.uber.org/yarpc/peer/index.js"

import * as hostport from "@goscript/go.uber.org/yarpc/peer/hostport/index.js"

import * as lifecycle from "@goscript/go.uber.org/yarpc/pkg/lifecycle/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as grpc from "@goscript/google.golang.org/grpc/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as backoff from "@goscript/go.uber.org/yarpc/api/backoff/index.js"

import * as tls from "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"

import * as abstractpeer from "@goscript/go.uber.org/yarpc/peer/abstractpeer/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_constants from "./constants.gs.ts"

import * as __goscript_dialer from "./dialer.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import type * as __goscript_inbound from "./inbound.gs.ts"

import * as __goscript_marshal from "./marshal.gs.ts"

import * as __goscript_options from "./options.gs.ts"

import * as __goscript_peer from "./peer.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"

import * as __goscript_util from "./util.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/io/ioutil/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/gogo/status/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/go.uber.org/yarpc/index.js"
import "@goscript/go.uber.org/yarpc/api/peer/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/api/x/introspection/index.js"
import "@goscript/go.uber.org/yarpc/internal/grpcerrorcodes/index.js"
import "@goscript/go.uber.org/yarpc/internal/interceptor/index.js"
import "@goscript/go.uber.org/yarpc/internal/interceptor/outboundinterceptor/index.js"
import "@goscript/go.uber.org/yarpc/internal/yarpcerrors/index.js"
import "@goscript/go.uber.org/yarpc/peer/index.js"
import "@goscript/go.uber.org/yarpc/peer/hostport/index.js"
import "@goscript/go.uber.org/yarpc/pkg/lifecycle/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/google.golang.org/grpc/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"
import "@goscript/go.uber.org/yarpc/api/backoff/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"
import "@goscript/go.uber.org/yarpc/peer/abstractpeer/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"
import "./constants.gs.ts"
import "./dialer.gs.ts"
import "./headers.gs.ts"
import "./marshal.gs.ts"
import "./options.gs.ts"
import "./peer.gs.ts"
import "./stream.gs.ts"
import "./transport.gs.ts"
import "./util.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/transport/grpc", ["grpc.Outbound"])

export class Outbound {
	public get once(): lifecycle.Once | $.VarRef<lifecycle.Once> | null {
		return this._fields.once
	}

	public set once(value: lifecycle.Once | $.VarRef<lifecycle.Once> | null) {
		this._fields.once = value
	}

	public get t(): __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null {
		return this._fields.t
	}

	public set t(value: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null) {
		this._fields.t = value
	}

	public get peerChooser(): peer.Chooser | null {
		return this._fields.peerChooser
	}

	public set peerChooser(value: peer.Chooser | null) {
		this._fields.peerChooser = value
	}

	public get options(): __goscript_options.outboundOptions | $.VarRef<__goscript_options.outboundOptions> | null {
		return this._fields.options
	}

	public set options(value: __goscript_options.outboundOptions | $.VarRef<__goscript_options.outboundOptions> | null) {
		this._fields.options = value
	}

	public get unaryCallWithInterceptor(): interceptor.UnaryOutboundChain | null {
		return this._fields.unaryCallWithInterceptor
	}

	public set unaryCallWithInterceptor(value: interceptor.UnaryOutboundChain | null) {
		this._fields.unaryCallWithInterceptor = value
	}

	public get streamCallWithInterceptor(): interceptor.StreamOutboundChain | null {
		return this._fields.streamCallWithInterceptor
	}

	public set streamCallWithInterceptor(value: interceptor.StreamOutboundChain | null) {
		this._fields.streamCallWithInterceptor = value
	}

	public _fields: {
		once: lifecycle.Once | $.VarRef<lifecycle.Once> | null
		t: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null
		peerChooser: peer.Chooser | null
		options: __goscript_options.outboundOptions | $.VarRef<__goscript_options.outboundOptions> | null
		unaryCallWithInterceptor: interceptor.UnaryOutboundChain | null
		streamCallWithInterceptor: interceptor.StreamOutboundChain | null
	}

	constructor(init?: Partial<{once?: lifecycle.Once | $.VarRef<lifecycle.Once> | null, t?: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null, peerChooser?: peer.Chooser | null, options?: __goscript_options.outboundOptions | $.VarRef<__goscript_options.outboundOptions> | null, unaryCallWithInterceptor?: interceptor.UnaryOutboundChain | null, streamCallWithInterceptor?: interceptor.StreamOutboundChain | null}>, __goscriptValue?: boolean) {
		this._fields = {
			once: init?.once ?? (null! as lifecycle.Once | $.VarRef<lifecycle.Once> | null),
			t: init?.t ?? (null! as __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null),
			peerChooser: init?.peerChooser ?? (null! as peer.Chooser | null),
			options: init?.options ?? (null! as __goscript_options.outboundOptions | $.VarRef<__goscript_options.outboundOptions> | null),
			unaryCallWithInterceptor: init?.unaryCallWithInterceptor ?? (null! as interceptor.UnaryOutboundChain | null),
			streamCallWithInterceptor: init?.streamCallWithInterceptor ?? (null! as interceptor.StreamOutboundChain | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Outbound {
		return new Outbound(this, true)
	}

	public __goscriptAssign(source: Outbound): void {
		const target = this._fields
		const values = source._fields
		target.once = values.once
		target.t = values.t
		target.peerChooser = $.assignFieldValue(target.peerChooser, values.peerChooser, "peer.Chooser")
		target.options = values.options
		target.unaryCallWithInterceptor = $.assignFieldValue(target.unaryCallWithInterceptor, values.unaryCallWithInterceptor, "interceptor.UnaryOutboundChain")
		target.streamCallWithInterceptor = $.assignFieldValue(target.streamCallWithInterceptor, values.streamCallWithInterceptor, "interceptor.StreamOutboundChain")
	}

	public async Call(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<[transport.Response | $.VarRef<transport.Response> | null, $.GoError]> {
		const o: Outbound | $.VarRef<Outbound> | null = this;
		return $.pointerValue<Exclude<interceptor.UnaryOutboundChain, null>>($.pointerValue<Outbound>(o).unaryCallWithInterceptor).Next(ctx, request)
	}

	public async CallStream(ctx: context.Context | null, request: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null): globalThis.Promise<[transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError]> {
		const o: Outbound | $.VarRef<Outbound> | null = this;
		return $.pointerValue<Exclude<interceptor.StreamOutboundChain, null>>($.pointerValue<Outbound>(o).streamCallWithInterceptor).Next(ctx, request)
	}

	public Chooser(): peer.Chooser | null {
		const o: Outbound | $.VarRef<Outbound> | null = this;
		return $.pointerValue<Outbound>(o).peerChooser
	}

	public async DirectCall(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<[transport.Response | $.VarRef<transport.Response> | null, $.GoError]> {
		const o: Outbound | $.VarRef<Outbound> | null = this;
		if (request == null) {
			return [null, yarpcerrors.InvalidArgumentErrorf("request for grpc outbound was nil", null)]
		}
		{
			let err = validateRequest(request)
			if (err != null) {
				return [null, err]
			}
		}
		{
			let err = await lifecycle.Once.prototype.WaitUntilRunning.call($.pointerValue<Outbound>(o).once, ctx)
			if (err != null) {
				return [null, $.interfaceValue<$.GoError>(await intyarpcerrors.AnnotateWithInfo(await yarpcerrors.FromError(err), "error waiting for grpc outbound to start for service: %s", $.arrayToSlice<any>([$.pointerValue<transport.Request>(request).Service])), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))]
			}
		}
		let start = $.markAsStructValue($.cloneStructValue(time.Now()))
		let responseBody: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
		let responseMD: $.VarRef<metadata.MD> = $.varRef(null! as metadata.MD)
		let invokeErr = await (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as Outbound).invoke(ctx, request, responseBody, responseMD, start) : Outbound.prototype.invoke.call(o, ctx, request, responseBody, responseMD, start))
		let [responseHeaders, err] = __goscript_headers.getApplicationHeaders(responseMD.value)
		if (err != null) {
			return [null, err]
		}
		return [(() => { const __goscriptLiteralField0 = ioutil.NopCloser($.interfaceValue<io.Reader | null>(bytes2.NewReader(responseBody.value), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader"))); const __goscriptLiteralField1 = metadataToIsApplicationError(responseMD.value); const __goscriptLiteralField2 = __goscript_headers.metadataToApplicationErrorMeta(responseMD.value); return new transport.Response({Body: __goscriptLiteralField0, BodySize: $.sliceLen(responseBody.value), Headers: responseHeaders, ApplicationError: __goscriptLiteralField1, ApplicationErrorMeta: __goscriptLiteralField2}) })(), invokeErr]
	}

	public async DirectCallStream(ctx: context.Context | null, request: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null): globalThis.Promise<[transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError]> {
		const o: Outbound | $.VarRef<Outbound> | null = this;
		{
			let err = await lifecycle.Once.prototype.WaitUntilRunning.call($.pointerValue<Outbound>(o).once, ctx)
			if (err != null) {
				return [null, err]
			}
		}
		return (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as Outbound).stream(ctx, request, $.markAsStructValue($.cloneStructValue(time.Now()))) : Outbound.prototype.stream.call(o, ctx, request, $.markAsStructValue($.cloneStructValue(time.Now()))))
	}

	public async Introspect(): globalThis.Promise<introspection.OutboundStatus> {
		const o: Outbound | $.VarRef<Outbound> | null = this;
		let state = "Stopped"
		if ((o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as Outbound).IsRunning() : Outbound.prototype.IsRunning.call(o))) {
			state = "Running"
		}
		let chooser: introspection.ChooserStatus = new introspection.ChooserStatus(undefined, true)
		{
			let [i, ok] = $.typeAssertTuple<introspection.IntrospectableChooser | null>($.pointerValue<Outbound>(o).peerChooser, "introspection.IntrospectableChooser")
			if (ok) {
				chooser = $.assignStruct(chooser, ((__goscriptAwait = (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<introspection.IntrospectableChooser, null>) : $.pointerValue<Exclude<introspection.IntrospectableChooser, null>>(i)).Introspect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as introspection.ChooserStatus))
			} else {
				chooser = $.assignStruct(chooser, new introspection.ChooserStatus({Name: "Introspection not available"}, true))
			}
		}
		return new introspection.OutboundStatus({Transport: "grpc", State: state, Chooser: chooser}, true)
	}

	public IsRunning(): boolean {
		const o: Outbound | $.VarRef<Outbound> | null = this;
		return lifecycle.Once.prototype.IsRunning.call($.pointerValue<Outbound>(o).once)
	}

	public Start(): $.GoError {
		const o: Outbound | $.VarRef<Outbound> | null = this;
		const o$: Outbound = o == null ? $.pointerTarget<Outbound>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<Outbound>(o)
		return lifecycle.Once.prototype.Start.call((o$ as Outbound).once, $.functionValue(((__receiver) => () => __receiver.Start())($.pointerValue<Exclude<peer.Chooser, null>>((o$ as Outbound).peerChooser)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/api/transport.Lifecycle.Start-fm"))
	}

	public Stop(): $.GoError {
		const o: Outbound | $.VarRef<Outbound> | null = this;
		const o$: Outbound = o == null ? $.pointerTarget<Outbound>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<Outbound>(o)
		return lifecycle.Once.prototype.Stop.call((o$ as Outbound).once, $.functionValue(((__receiver) => () => __receiver.Stop())($.pointerValue<Exclude<peer.Chooser, null>>((o$ as Outbound).peerChooser)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/api/transport.Lifecycle.Stop-fm"))
	}

	public TransportName(): string {
		const o: Outbound | $.VarRef<Outbound> | null = this;
		return "grpc"
	}

	public Transports(): $.Slice<transport.Transport | null> {
		const o: Outbound | $.VarRef<Outbound> | null = this;
		return $.arrayToSlice<transport.Transport | null>([$.interfaceValue<transport.Transport | null>($.pointerValue<Outbound>(o).t, "*grpc.Transport", /* @__PURE__ */ $.pointerType("grpc.Transport"))])
	}

	public async invoke(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null, responseBody: $.VarRef<$.Slice<number>> | null, responseMD: $.VarRef<metadata.MD> | null, start: time.Time): globalThis.Promise<$.GoError> {
		const o: Outbound | $.VarRef<Outbound> | null = this;
		let retErr: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const o$: Outbound = o == null ? $.pointerTarget<Outbound>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<Outbound>(o)
		const request$: transport.Request = request == null ? $.pointerTarget<transport.Request>(request) : (request as any).__isVarRef === true ? (request as any).value : (request as any).__goValue === undefined ? (request as any) : $.pointerTarget<transport.Request>(request)
		let __goscriptTuple0: any = __goscript_headers.transportRequestToMetadata(request)
		let md: metadata.MD = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return err
		}

		let msg: any = null! as any
		if ((request$ as transport.Request).Body != null) {
			{
				let [buffer, ok] = $.typeAssertTuple<mem.Buffer | null>((request$ as transport.Request).Body, "mem.Buffer")
				if (ok) {
					msg = (buffer as any)
				} else {
					let __goscriptShadow0: $.Slice<number> = null! as $.Slice<number>
					let __goscriptTuple1: any = await ioutil.ReadAll((request$ as transport.Request).Body)
					__goscriptShadow0 = __goscriptTuple1[0]
					err = __goscriptTuple1[1]
					if (err != null) {
						return err
					}
					msg = $.interfaceValue(__goscriptShadow0, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
				}
			}
		}
		let __goscriptTuple2: any = await __goscript_util.procedureNameToFullMethod((request$ as transport.Request).Procedure)
		let fullMethod = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return err
		}
		let callOptions: $.Slice<grpc.CallOption | null> = null! as $.Slice<grpc.CallOption | null>
		if (responseMD != null) {
			callOptions = $.arrayToSlice<grpc.CallOption | null>([grpc.Trailer(responseMD)])
		}
		if (!$.stringEqual($.pointerValue<__goscript_options.outboundOptions>((o$ as Outbound).options).compressor, "")) {
			callOptions = $.appendOne(callOptions, grpc.UseCompressor($.pointerValue<__goscript_options.outboundOptions>((o$ as Outbound).options).compressor), $.appendZeros.nil)
		}
		let __goscriptTuple3: any = await $.pointerValue<Exclude<peer.Chooser, null>>((o$ as Outbound).peerChooser).Choose(ctx, request)
		let apiPeer = __goscriptTuple3[0]
		let onFinish: ((_p0: $.GoError) => void) | null = __goscriptTuple3[1]
		err = __goscriptTuple3[2]
		if (err != null) {
			return err
		}
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			void (__goscriptAwait = onFinish!(retErr), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		})() })
		let __goscriptTuple4: any = $.typeAssertTuple<__goscript_peer.grpcPeer | $.VarRef<__goscript_peer.grpcPeer> | null>(apiPeer, /* @__PURE__ */ $.pointerType("grpc.grpcPeer"))
		let __goscriptShadow1: __goscript_peer.grpcPeer | $.VarRef<__goscript_peer.grpcPeer> | null = __goscriptTuple4[0]
		let ok = __goscriptTuple4[1]
		if (!ok) {
			const __goscriptReturn3: $.GoError = $.interfaceValue<$.GoError>(new peer.ErrInvalidPeerConversion({Peer: apiPeer, ExpectedType: "*grpcPeer"}, true), "peer.ErrInvalidPeerConversion", "peer.ErrInvalidPeerConversion")
			retErr = __goscriptReturn3
			await __defer.dispose()
			return retErr
		}

		let tracer = $.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>((o$ as Outbound).t).options).tracer
		let createOpenTracingSpan: transport.CreateOpenTracingSpan | $.VarRef<transport.CreateOpenTracingSpan> | null = new transport.CreateOpenTracingSpan({Tracer: tracer, TransportName: "grpc", StartTime: $.markAsStructValue($.cloneStructValue(start)), ExtraTags: yarpc.OpentracingTags})
		let __goscriptTuple5: any = await (createOpenTracingSpan !== null && (createOpenTracingSpan as any).__isVarRef !== true && (createOpenTracingSpan as any).__goValue === undefined ? ((createOpenTracingSpan as any) as transport.CreateOpenTracingSpan).Do(ctx, request) : transport.CreateOpenTracingSpan.prototype.Do.call(createOpenTracingSpan, ctx, request))
		ctx = __goscriptTuple5[0]
		let span = __goscriptTuple5[1]
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Finish())((span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/opentracing/opentracing-go.Span.Finish-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		{
			let __goscriptShadow2 = (__goscriptAwait = (tracer !== null && (tracer as any).__isVarRef !== true && (tracer as any).__goValue === undefined ? (tracer as Exclude<opentracing.Tracer, null>) : $.pointerValue<Exclude<opentracing.Tracer, null>>(tracer)).Inject((__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).Context(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.namedValueInterfaceValue<any>(opentracing.HTTPHeaders, "opentracing.BuiltinFormat", {}, /* @__PURE__ */ $.basicType("uint8", "opentracing.BuiltinFormat")), $.namedValueInterfaceValue<any>(md, "grpc.mdReadWriter", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow2 != null) {
				const __goscriptReturn4: $.GoError = __goscriptShadow2
				retErr = __goscriptReturn4
				await __defer.dispose()
				return retErr
			}
		}

		err = await transport.UpdateSpanWithErr(span, await grpc.ClientConn.prototype.Invoke.call($.pointerValue<__goscript_peer.grpcPeer>(__goscriptShadow1).clientConn, metadata.NewOutgoingContext(ctx, md), fullMethod, msg, $.interfaceValue(responseBody, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))), callOptions))
		if (err != null) {
			const __goscriptReturn5: $.GoError = await invokeErrorToYARPCError(err, $.pointerValue<metadata.MD>(responseMD))
			retErr = __goscriptReturn5
			await __defer.dispose()
			return retErr
		}
		// Service name match validation, return yarpcerrors.CodeInternal error if not match
		{
			let [match, resSvcName] = checkServiceMatch((request$ as transport.Request).Service, $.pointerValue<metadata.MD>(responseMD))
			if (!match) {
				// If service doesn't match => we got response => span must not be nil
				const __goscriptReturn6: $.GoError = await transport.UpdateSpanWithErr(span, yarpcerrors.InternalErrorf($.concatString("service name sent from the request ", "does not match the service name received in the response: sent %q, got: %q"), $.arrayToSlice<any>([(request$ as transport.Request).Service, resSvcName])))
				retErr = __goscriptReturn6
				await __defer.dispose()
				return retErr
			}
		}
		const __goscriptReturn7: $.GoError = null
		retErr = __goscriptReturn7
		await __defer.dispose()
		return retErr
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async stream(ctx: context.Context | null, req: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null, start: time.Time): globalThis.Promise<[transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError]> {
		const o: Outbound | $.VarRef<Outbound> | null = this;
		let err: $.GoError = null! as $.GoError
		const o$: Outbound = o == null ? $.pointerTarget<Outbound>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<Outbound>(o)
		const req$: transport.StreamRequest = req == null ? $.pointerTarget<transport.StreamRequest>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<transport.StreamRequest>(req)
		if ((req$ as transport.StreamRequest).Meta == null) {
			return [null, yarpcerrors.InvalidArgumentErrorf("stream request requires a request metadata", null)]
		}
		let treq: transport.Request | $.VarRef<transport.Request> | null = transport.RequestMeta.prototype.ToRequest.call((req$ as transport.StreamRequest).Meta)
		{
			let __goscriptShadow3 = validateRequest(treq)
			if (__goscriptShadow3 != null) {
				return [null, __goscriptShadow3]
			}
		}

		let __goscriptTuple6: any = __goscript_headers.transportRequestToMetadata(treq)
		let md: metadata.MD = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		if (err != null) {
			return [null, err]
		}

		let __goscriptTuple7: any = await __goscript_util.procedureNameToFullMethod($.pointerValue<transport.RequestMeta>((req$ as transport.StreamRequest).Meta).Procedure)
		let fullMethod = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [null, err]
		}

		let __goscriptTuple8: any = await $.pointerValue<Exclude<peer.Chooser, null>>((o$ as Outbound).peerChooser).Choose(ctx, treq)
		let apiPeer = __goscriptTuple8[0]
		let onFinish: ((_p0: $.GoError) => void) | null = __goscriptTuple8[1]
		err = __goscriptTuple8[2]
		if (err != null) {
			return [null, err]
		}

		let __goscriptTuple9: any = $.typeAssertTuple<__goscript_peer.grpcPeer | $.VarRef<__goscript_peer.grpcPeer> | null>(apiPeer, /* @__PURE__ */ $.pointerType("grpc.grpcPeer"))
		let __goscriptShadow4: __goscript_peer.grpcPeer | $.VarRef<__goscript_peer.grpcPeer> | null = __goscriptTuple9[0]
		let ok = __goscriptTuple9[1]
		if (!ok) {
			let __goscriptShadow5 = new peer.ErrInvalidPeerConversion({Peer: apiPeer, ExpectedType: "*grpcPeer"}, true)
			void (__goscriptAwait = onFinish!($.interfaceValue<$.GoError>((__goscriptShadow5).clone(), "peer.ErrInvalidPeerConversion", "peer.ErrInvalidPeerConversion")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [null, $.interfaceValue<$.GoError>((__goscriptShadow5).clone(), "peer.ErrInvalidPeerConversion", "peer.ErrInvalidPeerConversion")]
		}

		let tracer = $.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>((o$ as Outbound).t).options).tracer
		let createOpenTracingSpan: transport.CreateOpenTracingSpan | $.VarRef<transport.CreateOpenTracingSpan> | null = new transport.CreateOpenTracingSpan({Tracer: tracer, TransportName: "grpc", StartTime: $.markAsStructValue($.cloneStructValue(start)), ExtraTags: yarpc.OpentracingTags})
		let [, span] = (createOpenTracingSpan !== null && (createOpenTracingSpan as any).__isVarRef !== true && (createOpenTracingSpan as any).__goValue === undefined ? ((createOpenTracingSpan as any) as transport.CreateOpenTracingSpan).Do(ctx, treq) : transport.CreateOpenTracingSpan.prototype.Do.call(createOpenTracingSpan, ctx, treq))

		{
			let __goscriptShadow6 = (__goscriptAwait = (tracer !== null && (tracer as any).__isVarRef !== true && (tracer as any).__goValue === undefined ? (tracer as Exclude<opentracing.Tracer, null>) : $.pointerValue<Exclude<opentracing.Tracer, null>>(tracer)).Inject((__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).Context(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.namedValueInterfaceValue<any>(opentracing.HTTPHeaders, "opentracing.BuiltinFormat", {}, /* @__PURE__ */ $.basicType("uint8", "opentracing.BuiltinFormat")), $.namedValueInterfaceValue<any>(md, "grpc.mdReadWriter", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow6 != null) {
				void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).Finish(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (__goscriptAwait = onFinish!(__goscriptShadow6), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [null, __goscriptShadow6]
			}
		}

		let streamCtx = metadata.NewOutgoingContext(ctx, md)
		let __goscriptTuple10: any = grpc.ClientConn.prototype.NewStream.call($.pointerValue<__goscript_peer.grpcPeer>(__goscriptShadow4).clientConn, streamCtx, new grpc.StreamDesc({ClientStreams: true, ServerStreams: true}), fullMethod, null)
		let __goscriptShadow7 = __goscriptTuple10[0]
		err = __goscriptTuple10[1]
		if (err != null) {
			void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).Finish(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = onFinish!(err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [null, err]
		}
		let stream: __goscript_stream.clientStream | $.VarRef<__goscript_stream.clientStream> | null = __goscript_stream.newClientStream(streamCtx, req, __goscriptShadow7, span, onFinish)
		let __goscriptTuple11: any = transport.NewClientStream($.interfaceValue<transport.StreamCloser | null>(stream, "*grpc.clientStream", /* @__PURE__ */ $.pointerType("grpc.clientStream")), null)
		let tClientStream: transport.ClientStream | $.VarRef<transport.ClientStream> | null = __goscriptTuple11[0]
		err = __goscriptTuple11[1]
		if (err != null) {
			void (__goscriptAwait = onFinish!(err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).Finish(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [null, err]
		}
		return [tClientStream, null]
	}

	static __typeInfo = $.registerStructType(
		"grpc.Outbound",
		() => new Outbound(),
		() => [{ name: "Call", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.Response") }, { type: "error" }], pointerReceiver: true }, { name: "CallStream", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.ClientStream") }, { type: "error" }], pointerReceiver: true }, { name: "Chooser", args: [], returns: [{ type: "peer.Chooser" }], pointerReceiver: true }, { name: "DirectCall", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.Response") }, { type: "error" }], pointerReceiver: true }, { name: "DirectCallStream", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.ClientStream") }, { type: "error" }], pointerReceiver: true }, { name: "Introspect", args: [], returns: [{ type: "introspection.OutboundStatus" }], pointerReceiver: true }, { name: "IsRunning", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "Start", args: [], returns: [{ type: "error" }], pointerReceiver: true }, { name: "Stop", args: [], returns: [{ type: "error" }], pointerReceiver: true }, { name: "TransportName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Transports", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType("transport.Transport") }], pointerReceiver: true }, { name: "invoke", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "stream", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.ClientStream") }, { type: "error" }], pointerReceiver: true }],
		Outbound,
		() => [{ name: "once", key: "once", type: /* @__PURE__ */ $.pointerType("lifecycle.Once") }, { name: "t", key: "t", type: /* @__PURE__ */ $.pointerType("grpc.Transport") }, { name: "peerChooser", key: "peerChooser", type: "peer.Chooser" }, { name: "options", key: "options", type: /* @__PURE__ */ $.pointerType("grpc.outboundOptions") }, { name: "unaryCallWithInterceptor", key: "unaryCallWithInterceptor", type: "interceptor.UnaryOutboundChain" }, { name: "streamCallWithInterceptor", key: "streamCallWithInterceptor", type: "interceptor.StreamOutboundChain" }]
	)
}

export const UserAgent: string = "yarpc-go/1.0.0-dev"

export let invalidHeaderValueCharSet: string = $.concatString("\r\n", $.runeToString(0))

export function __goscript_set_invalidHeaderValueCharSet(__goscriptValue: string): void {
	invalidHeaderValueCharSet = __goscriptValue
}

export async function newSingleOutbound(t: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null, address: string, options: $.Slice<__goscript_options.OutboundOption | null>): globalThis.Promise<Outbound | $.VarRef<Outbound> | null> {
	return newOutbound(t, $.interfaceValue<peer.Chooser | null>(peerchooser.NewSingle($.namedValueInterfaceValue<peer.Identifier | null>(address, "hostport.PeerIdentifier", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), $.interfaceValue<peer.Transport | null>(t, "*grpc.Transport", /* @__PURE__ */ $.pointerType("grpc.Transport"))), "*peer.Single", /* @__PURE__ */ $.pointerType("peer.Single")), options)
}

export async function newOutbound(t: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null, peerChooser: peer.Chooser | null, options: $.Slice<__goscript_options.OutboundOption | null>): globalThis.Promise<Outbound | $.VarRef<Outbound> | null> {
	const t$: __goscript_transport.Transport = t == null ? $.pointerTarget<__goscript_transport.Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<__goscript_transport.Transport>(t)
	let o: Outbound | $.VarRef<Outbound> | null = (await (async () => { const __goscriptLiteralField3 = lifecycle.NewOnce(); const __goscriptLiteralField4 = await __goscript_options.newOutboundOptions(options); return new Outbound({once: __goscriptLiteralField3, t: t, peerChooser: peerChooser, options: __goscriptLiteralField4}) })())
	let o$: Outbound = o == null ? $.pointerTarget<Outbound>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<Outbound>(o);
	;(o$ as Outbound).unaryCallWithInterceptor = outboundinterceptor.NewUnaryChain($.interfaceValue<interceptor.DirectUnaryOutbound | null>(o, "*grpc.Outbound", /* @__PURE__ */ $.pointerType("grpc.Outbound")), $.pointerValue<__goscript_options.transportOptions>((t$ as __goscript_transport.Transport).options).unaryOutboundInterceptor);
	;(o$ as Outbound).streamCallWithInterceptor = outboundinterceptor.NewStreamChain($.interfaceValue<interceptor.DirectStreamOutbound | null>(o, "*grpc.Outbound", /* @__PURE__ */ $.pointerType("grpc.Outbound")), $.pointerValue<__goscript_options.transportOptions>((t$ as __goscript_transport.Transport).options).streamOutboundInterceptor)
	return o
}

export function validateRequest(req: transport.Request | $.VarRef<transport.Request> | null): $.GoError {
	for (const [__rangeKey, v] of $.markAsStructValue($.cloneStructValue($.pointerValue<transport.Request>(req).Headers)).Items()?.entries() ?? []) {
		// from https://httpwg.org/specs/rfc7540.html#rfc.section.10.3:
		// HTTP/2 allows header field values that are not valid.
		// While most of the values that can be encoded will not alter header field parsing,
		// carriage return (CR, ASCII 0xd), line feed (LF, ASCII 0xa),
		// and the zero character (NUL, ASCII 0x0) might be exploited
		// by an attacker if they are translated verbatim.
		// This should be done by grpc-go but the workaround in https://github.com/grpc/grpc-go/pull/610
		// does not cover this case.
		// This validation can be entirely removed if the https://github.com/grpc/grpc/issues/4672
		// is solved properly.
		if (strings.ContainsAny(v, invalidHeaderValueCharSet)) {
			return yarpcerrors.InvalidArgumentErrorf("grpc request header value contains invalid characters including ASCII 0xd, 0xa, or 0x0", null)
		}
	}
	return null
}

export function metadataToIsApplicationError(responseMD: metadata.MD): boolean {
	if (responseMD == null) {
		return false
	}
	let __goscriptTuple12: any = $.mapGet<string, $.Slice<string>, $.Slice<string>>(responseMD, "rpc-application-error", null)
	let value: $.Slice<string> = __goscriptTuple12[0]
	let ok = __goscriptTuple12[1]
	return (ok && ($.sliceLen(value) > 0)) && ($.stringLen($.arrayIndex(value!, 0)) > 0)
}

export async function invokeErrorToYARPCError(err: $.GoError, responseMD: metadata.MD): globalThis.Promise<$.GoError> {
	if (err == null) {
		return null
	}
	if (await yarpcerrors.IsStatus(err)) {
		return err
	}
	let __goscriptTuple13: any = await status2.FromError(err)
	let __goscriptShadow8: status2.Status | $.VarRef<status2.Status> | null = __goscriptTuple13[0]
	let ok = __goscriptTuple13[1]
	// if not a yarpc error or grpc error, just return a wrapped error
	if (!ok) {
		return $.interfaceValue<$.GoError>(await yarpcerrors.FromError(err), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
	}
	let __goscriptTuple14: any = $.mapGet<any, yarpcerrors.Code, yarpcerrors.Code>(grpcerrorcodes.GRPCCodeToYARPCCode, (__goscriptShadow8 !== null && (__goscriptShadow8 as any).__isVarRef !== true && (__goscriptShadow8 as any).__goValue === undefined ? ((__goscriptShadow8 as any) as status2.Status).Code() : status2.Status.prototype.Code.call(__goscriptShadow8)), 0)
	let code = __goscriptTuple14[0]
	ok = __goscriptTuple14[1]
	if (!ok) {
		code = 2
	}
	let name: string = ""
	if (responseMD != null) {
		let __goscriptTuple15: any = $.mapGet<string, $.Slice<string>, $.Slice<string>>(responseMD, "rpc-error-name", null)
		let value: $.Slice<string> = __goscriptTuple15[0]
		let __goscriptShadow9 = __goscriptTuple15[1]
		// TODO: what to do if the length is > 1?
		if (__goscriptShadow9 && ($.sliceLen(value) == 1)) {
			name = $.arrayIndex(value!, 0)
		}
	}
	let message = (__goscriptShadow8 !== null && (__goscriptShadow8 as any).__isVarRef !== true && (__goscriptShadow8 as any).__goValue === undefined ? ((__goscriptShadow8 as any) as status2.Status).Message() : status2.Status.prototype.Message.call(__goscriptShadow8))
	// we put the name as a prefix for grpc compatibility
	// if there was no message, the message will be the name, so we leave it as the message
	if (((!$.stringEqual(name, "")) && (!$.stringEqual(message, ""))) && (!$.stringEqual(message, name))) {
		message = strings.TrimPrefix(message, $.concatString(name, ": "))
	} else {
		if ((!$.stringEqual(name, "")) && ($.stringEqual(message, name))) {
			message = ""
		}
	}

	let yarpcErr: yarpcerrors.Status | $.VarRef<yarpcerrors.Status> | null = intyarpcerrors.NewWithNamef(code, name, message, null)
	{
		let __goscriptTuple16: any = await __goscript_marshal.marshalError(__goscriptShadow8)
		let details: $.Slice<number> = __goscriptTuple16[0]
		let __goscriptShadow10 = __goscriptTuple16[1]
		if (__goscriptShadow10 != null) {
			return __goscriptShadow10
		} else {
			if (details != null) {
				yarpcErr = (yarpcErr !== null && (yarpcErr as any).__isVarRef !== true && (yarpcErr as any).__goValue === undefined ? ((yarpcErr as any) as yarpcerrors.Status).WithDetails(details) : yarpcerrors.Status.prototype.WithDetails.call(yarpcErr, details))
			}
		}
	}
	return $.interfaceValue<$.GoError>(yarpcErr, "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export function checkServiceMatch(reqSvcName: string, responseMD: metadata.MD): [boolean, string] {
	{
		let __goscriptTuple17: any = $.mapGet<string, $.Slice<string>, $.Slice<string>>(responseMD, "rpc-service", null)
		let resSvcName: $.Slice<string> = __goscriptTuple17[0]
		let ok = __goscriptTuple17[1]
		if (ok) {
			return [$.stringEqual(reqSvcName, $.arrayIndex(resSvcName!, 0)), $.arrayIndex(resSvcName!, 0)]
		}
	}
	return [true, ""]
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

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Identifier: (receiver: any, ...args: any[]) => (hostport.PeerIdentifier_Identifier as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("string", "hostport.PeerIdentifier"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Identifier", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
