// Generated file based on stream.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as balancer from "@goscript/google.golang.org/grpc/balancer/index.js"

import * as codes from "@goscript/google.golang.org/grpc/codes/index.js"

import * as encoding from "@goscript/google.golang.org/grpc/encoding/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/index.js"

import * as balancerload from "@goscript/google.golang.org/grpc/internal/balancerload/index.js"

import * as binarylog from "@goscript/google.golang.org/grpc/internal/binarylog/index.js"

import * as channelz from "@goscript/google.golang.org/grpc/internal/channelz/index.js"

import * as grpcutil from "@goscript/google.golang.org/grpc/internal/grpcutil/index.js"

import * as imetadata from "@goscript/google.golang.org/grpc/internal/metadata/index.js"

import * as iresolver from "@goscript/google.golang.org/grpc/internal/resolver/index.js"

import * as serviceconfig from "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"

import * as istatus from "@goscript/google.golang.org/grpc/internal/status/index.js"

import * as transport from "@goscript/google.golang.org/grpc/internal/transport/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as peer2 from "@goscript/google.golang.org/grpc/peer/index.js"

import * as stats from "@goscript/google.golang.org/grpc/stats/index.js"

import * as status from "@goscript/google.golang.org/grpc/status/index.js"

import type * as fmt from "@goscript/fmt/index.js"

import * as channelz2 from "@goscript/google.golang.org/grpc/channelz/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal2 from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as backoff from "@goscript/google.golang.org/grpc/internal/backoff/index.js"

import * as gracefulswitch from "@goscript/google.golang.org/grpc/internal/balancer/gracefulswitch/index.js"

import * as grpcsync from "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"

import * as idle from "@goscript/google.golang.org/grpc/internal/idle/index.js"

import * as stats2 from "@goscript/google.golang.org/grpc/internal/stats/index.js"

import * as keepalive from "@goscript/google.golang.org/grpc/keepalive/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as serviceconfig2 from "@goscript/google.golang.org/grpc/serviceconfig/index.js"

import * as net from "@goscript/net/index.js"

import * as url from "@goscript/net/url/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_balancer_wrapper from "./balancer_wrapper.gs.ts"

import * as __goscript_call from "./call.gs.ts"

import * as __goscript_clientconn from "./clientconn.gs.ts"

import * as __goscript_codec from "./codec.gs.ts"

import * as __goscript_dialoptions from "./dialoptions.gs.ts"

import * as __goscript_interceptor from "./interceptor.gs.ts"

import * as __goscript_picker_wrapper from "./picker_wrapper.gs.ts"

import type * as __goscript_preloader from "./preloader.gs.ts"

import * as __goscript_resolver_wrapper from "./resolver_wrapper.gs.ts"

import * as __goscript_rpc_util from "./rpc_util.gs.ts"

import * as __goscript_server from "./server.gs.ts"

import * as __goscript_service_config from "./service_config.gs.ts"

import * as __goscript_trace from "./trace.gs.ts"

import * as __goscript_trace_withtrace from "./trace_withtrace.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/strconv/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/grpc/balancer/index.js"
import "@goscript/google.golang.org/grpc/codes/index.js"
import "@goscript/google.golang.org/grpc/encoding/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/balancerload/index.js"
import "@goscript/google.golang.org/grpc/internal/binarylog/index.js"
import "@goscript/google.golang.org/grpc/internal/channelz/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcutil/index.js"
import "@goscript/google.golang.org/grpc/internal/metadata/index.js"
import "@goscript/google.golang.org/grpc/internal/resolver/index.js"
import "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"
import "@goscript/google.golang.org/grpc/internal/status/index.js"
import "@goscript/google.golang.org/grpc/internal/transport/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"
import "@goscript/google.golang.org/grpc/peer/index.js"
import "@goscript/google.golang.org/grpc/stats/index.js"
import "@goscript/google.golang.org/grpc/status/index.js"
import "@goscript/google.golang.org/grpc/channelz/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/backoff/index.js"
import "@goscript/google.golang.org/grpc/internal/balancer/gracefulswitch/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"
import "@goscript/google.golang.org/grpc/internal/idle/index.js"
import "@goscript/google.golang.org/grpc/internal/stats/index.js"
import "@goscript/google.golang.org/grpc/keepalive/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/serviceconfig/index.js"
import "@goscript/net/index.js"
import "@goscript/net/url/index.js"
import "@goscript/sync/atomic/index.js"
import "./balancer_wrapper.gs.ts"
import "./call.gs.ts"
import "./clientconn.gs.ts"
import "./codec.gs.ts"
import "./dialoptions.gs.ts"
import "./interceptor.gs.ts"
import "./picker_wrapper.gs.ts"
import "./resolver_wrapper.gs.ts"
import "./rpc_util.gs.ts"
import "./server.gs.ts"
import "./service_config.gs.ts"
import "./trace.gs.ts"
import "./trace_withtrace.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc", ["grpc.StreamHandler", "grpc.StreamDesc", "grpc.Stream", "grpc.ClientStream", "grpc.clientStream", "grpc.replayOp", "grpc.csAttempt", "grpc.addrConnStream", "grpc.ServerStream", "grpc.serverStream"])

export type StreamHandler = ((srv: any, stream: ServerStream | null) => $.GoError | globalThis.Promise<$.GoError>) | null

export type Stream = {
	Context(): context.Context | null | globalThis.Promise<context.Context | null>
	RecvMsg(m: any): $.GoError | globalThis.Promise<$.GoError>
	SendMsg(m: any): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"grpc.Stream",
	null,
	[$.methodSignature("Context", [], ["context.Context"]), $.methodSignature("RecvMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("SendMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"])]
);

export type ClientStream = {
	CloseSend(): $.GoError | globalThis.Promise<$.GoError>
	Context(): context.Context | null | globalThis.Promise<context.Context | null>
	Header(): [metadata.MD, $.GoError] | globalThis.Promise<[metadata.MD, $.GoError]>
	RecvMsg(m: any): $.GoError | globalThis.Promise<$.GoError>
	SendMsg(m: any): $.GoError | globalThis.Promise<$.GoError>
	Trailer(): metadata.MD | globalThis.Promise<metadata.MD>
}

$.registerInterfaceType(
	"grpc.ClientStream",
	null,
	[$.methodSignature("CloseSend", [], ["error"]), $.methodSignature("Context", [], ["context.Context"]), $.methodSignature("Header", [], ["metadata.MD", "error"]), $.methodSignature("RecvMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("SendMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("Trailer", [], ["metadata.MD"])]
);

export type ServerStream = {
	Context(): context.Context | null
	RecvMsg(m: any): $.GoError | globalThis.Promise<$.GoError>
	SendHeader(_p0: metadata.MD): $.GoError | globalThis.Promise<$.GoError>
	SendMsg(m: any): $.GoError | globalThis.Promise<$.GoError>
	SetHeader(_p0: metadata.MD): $.GoError | globalThis.Promise<$.GoError>
	SetTrailer(_p0: metadata.MD): void
}

$.registerInterfaceType(
	"grpc.ServerStream",
	null,
	[$.methodSignature("Context", [], ["context.Context"]), $.methodSignature("RecvMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("SendHeader", ["metadata.MD"], ["error"]), $.methodSignature("SendMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("SetHeader", ["metadata.MD"], ["error"]), $.methodSignature("SetTrailer", ["metadata.MD"])]
);

export class StreamDesc {
	// StreamName and Handler are only used when registering handlers on a
	// server.
	public get StreamName(): string {
		return this._fields.StreamName
	}

	public set StreamName(value: string) {
		this._fields.StreamName = value
	}

	public get Handler(): ((srv: any, stream: ServerStream | null) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.Handler
	}

	public set Handler(value: ((srv: any, stream: ServerStream | null) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.Handler = value
	}

	// ServerStreams and ClientStreams are used for registering handlers on a
	// server as well as defining RPC behavior when passed to NewClientStream
	// and ClientConn.NewStream.  At least one must be true.
	public get ServerStreams(): boolean {
		return this._fields.ServerStreams
	}

	public set ServerStreams(value: boolean) {
		this._fields.ServerStreams = value
	}

	public get ClientStreams(): boolean {
		return this._fields.ClientStreams
	}

	public set ClientStreams(value: boolean) {
		this._fields.ClientStreams = value
	}

	public _fields: {
		StreamName: string
		Handler: ((srv: any, stream: ServerStream | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		ServerStreams: boolean
		ClientStreams: boolean
	}

	constructor(init?: Partial<{StreamName?: string, Handler?: ((srv: any, stream: ServerStream | null) => $.GoError | globalThis.Promise<$.GoError>) | null, ServerStreams?: boolean, ClientStreams?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			StreamName: init?.StreamName ?? ("" as string),
			Handler: init?.Handler ?? (null! as ((srv: any, stream: ServerStream | null) => $.GoError | globalThis.Promise<$.GoError>) | null),
			ServerStreams: init?.ServerStreams ?? (false as boolean),
			ClientStreams: init?.ClientStreams ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StreamDesc {
		return new StreamDesc(this, true)
	}

	public __goscriptAssign(source: StreamDesc): void {
		const target = this._fields
		const values = source._fields
		target.StreamName = values.StreamName
		target.Handler = values.Handler
		target.ServerStreams = values.ServerStreams
		target.ClientStreams = values.ClientStreams
	}

	static __typeInfo = $.registerStructType(
		"grpc.StreamDesc",
		() => new StreamDesc(),
		() => [],
		StreamDesc,
		() => [/* @__PURE__ */ $.structField("StreamName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Handler", ({ kind: $.TypeKind.Function, name: "grpc.StreamHandler", params: [{ kind: $.TypeKind.Interface, methods: [] }, "grpc.ServerStream"], results: ["error"] } as $.FunctionTypeInfo), [1], 16, true), /* @__PURE__ */ $.structField("ServerStreams", /* @__PURE__ */ $.basicType("bool"), [2], 24, true), /* @__PURE__ */ $.structField("ClientStreams", /* @__PURE__ */ $.basicType("bool"), [3], 25, true)]
	)
}

export class clientStream {
	public get callHdr(): transport.CallHdr | $.VarRef<transport.CallHdr> | null {
		return this._fields.callHdr
	}

	public set callHdr(value: transport.CallHdr | $.VarRef<transport.CallHdr> | null) {
		this._fields.callHdr = value
	}

	public get opts(): $.Slice<__goscript_rpc_util.CallOption | null> {
		return this._fields.opts
	}

	public set opts(value: $.Slice<__goscript_rpc_util.CallOption | null>) {
		this._fields.opts = value
	}

	public get callInfo(): __goscript_rpc_util.callInfo | $.VarRef<__goscript_rpc_util.callInfo> | null {
		return this._fields.callInfo
	}

	public set callInfo(value: __goscript_rpc_util.callInfo | $.VarRef<__goscript_rpc_util.callInfo> | null) {
		this._fields.callInfo = value
	}

	public get cc(): __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null {
		return this._fields.cc
	}

	public set cc(value: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null) {
		this._fields.cc = value
	}

	public get desc(): StreamDesc | $.VarRef<StreamDesc> | null {
		return this._fields.desc
	}

	public set desc(value: StreamDesc | $.VarRef<StreamDesc> | null) {
		this._fields.desc = value
	}

	public get codec(): __goscript_codec.baseCodec | null {
		return this._fields.codec
	}

	public set codec(value: __goscript_codec.baseCodec | null) {
		this._fields.codec = value
	}

	public get cp(): __goscript_rpc_util.Compressor | null {
		return this._fields.cp
	}

	public set cp(value: __goscript_rpc_util.Compressor | null) {
		this._fields.cp = value
	}

	public get comp(): encoding.Compressor | null {
		return this._fields.comp
	}

	public set comp(value: encoding.Compressor | null) {
		this._fields.comp = value
	}

	public get cancel(): (() => void) | null {
		return this._fields.cancel
	}

	public set cancel(value: (() => void) | null) {
		this._fields.cancel = value
	}

	public get sentLast(): boolean {
		return this._fields.sentLast
	}

	public set sentLast(value: boolean) {
		this._fields.sentLast = value
	}

	public get methodConfig(): serviceconfig.MethodConfig | $.VarRef<serviceconfig.MethodConfig> | null {
		return this._fields.methodConfig
	}

	public set methodConfig(value: serviceconfig.MethodConfig | $.VarRef<serviceconfig.MethodConfig> | null) {
		this._fields.methodConfig = value
	}

	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get retryThrottler(): __goscript_clientconn.retryThrottler | $.VarRef<__goscript_clientconn.retryThrottler> | null {
		return this._fields.retryThrottler
	}

	public set retryThrottler(value: __goscript_clientconn.retryThrottler | $.VarRef<__goscript_clientconn.retryThrottler> | null) {
		this._fields.retryThrottler = value
	}

	public get binlogs(): $.Slice<binarylog.MethodLogger | null> {
		return this._fields.binlogs
	}

	public set binlogs(value: $.Slice<binarylog.MethodLogger | null>) {
		this._fields.binlogs = value
	}

	// serverHeaderBinlogged is a boolean for whether server header has been
	// logged. Server header will be logged when the first time one of those
	// happens: stream.Header(), stream.Recv().
	//
	// It's only read and used by Recv() and Header(), so it doesn't need to be
	// synchronized.
	public get serverHeaderBinlogged(): boolean {
		return this._fields.serverHeaderBinlogged
	}

	public set serverHeaderBinlogged(value: boolean) {
		this._fields.serverHeaderBinlogged = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get firstAttempt(): boolean {
		return this._fields.firstAttempt
	}

	public set firstAttempt(value: boolean) {
		this._fields.firstAttempt = value
	}

	public get numRetries(): number {
		return this._fields.numRetries
	}

	public set numRetries(value: number) {
		this._fields.numRetries = value
	}

	public get numRetriesSincePushback(): number {
		return this._fields.numRetriesSincePushback
	}

	public set numRetriesSincePushback(value: number) {
		this._fields.numRetriesSincePushback = value
	}

	public get finished(): boolean {
		return this._fields.finished
	}

	public set finished(value: boolean) {
		this._fields.finished = value
	}

	// attempt is the active client stream attempt.
	// The only place where it is written is the newAttemptLocked method and this method never writes nil.
	// So, attempt can be nil only inside newClientStream function when clientStream is first created.
	// One of the first things done after clientStream's creation, is to call newAttemptLocked which either
	// assigns a non nil value to the attempt or returns an error. If an error is returned from newAttemptLocked,
	// then newClientStream calls finish on the clientStream and returns. So, finish method is the only
	// place where we need to check if the attempt is nil.
	public get attempt(): csAttempt | $.VarRef<csAttempt> | null {
		return this._fields.attempt
	}

	public set attempt(value: csAttempt | $.VarRef<csAttempt> | null) {
		this._fields.attempt = value
	}

	// TODO(hedging): hedging will have multiple attempts simultaneously.
	public get committed(): boolean {
		return this._fields.committed
	}

	public set committed(value: boolean) {
		this._fields.committed = value
	}

	public get onCommit(): (() => void) | null {
		return this._fields.onCommit
	}

	public set onCommit(value: (() => void) | null) {
		this._fields.onCommit = value
	}

	public get replayBuffer(): $.Slice<replayOp> {
		return this._fields.replayBuffer
	}

	public set replayBuffer(value: $.Slice<replayOp>) {
		this._fields.replayBuffer = value
	}

	public get replayBufferSize(): number {
		return this._fields.replayBufferSize
	}

	public set replayBufferSize(value: number) {
		this._fields.replayBufferSize = value
	}

	public _fields: {
		callHdr: transport.CallHdr | $.VarRef<transport.CallHdr> | null
		opts: $.Slice<__goscript_rpc_util.CallOption | null>
		callInfo: __goscript_rpc_util.callInfo | $.VarRef<__goscript_rpc_util.callInfo> | null
		cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null
		desc: StreamDesc | $.VarRef<StreamDesc> | null
		codec: __goscript_codec.baseCodec | null
		cp: __goscript_rpc_util.Compressor | null
		comp: encoding.Compressor | null
		cancel: (() => void) | null
		sentLast: boolean
		methodConfig: serviceconfig.MethodConfig | $.VarRef<serviceconfig.MethodConfig> | null
		ctx: context.Context | null
		retryThrottler: __goscript_clientconn.retryThrottler | $.VarRef<__goscript_clientconn.retryThrottler> | null
		binlogs: $.Slice<binarylog.MethodLogger | null>
		serverHeaderBinlogged: boolean
		mu: sync.Mutex
		firstAttempt: boolean
		numRetries: number
		numRetriesSincePushback: number
		finished: boolean
		attempt: csAttempt | $.VarRef<csAttempt> | null
		committed: boolean
		onCommit: (() => void) | null
		replayBuffer: $.Slice<replayOp>
		replayBufferSize: number
	}

	constructor(init?: Partial<{callHdr?: transport.CallHdr | $.VarRef<transport.CallHdr> | null, opts?: $.Slice<__goscript_rpc_util.CallOption | null>, callInfo?: __goscript_rpc_util.callInfo | $.VarRef<__goscript_rpc_util.callInfo> | null, cc?: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, desc?: StreamDesc | $.VarRef<StreamDesc> | null, codec?: __goscript_codec.baseCodec | null, cp?: __goscript_rpc_util.Compressor | null, comp?: encoding.Compressor | null, cancel?: (() => void) | null, sentLast?: boolean, methodConfig?: serviceconfig.MethodConfig | $.VarRef<serviceconfig.MethodConfig> | null, ctx?: context.Context | null, retryThrottler?: __goscript_clientconn.retryThrottler | $.VarRef<__goscript_clientconn.retryThrottler> | null, binlogs?: $.Slice<binarylog.MethodLogger | null>, serverHeaderBinlogged?: boolean, mu?: sync.Mutex, firstAttempt?: boolean, numRetries?: number, numRetriesSincePushback?: number, finished?: boolean, attempt?: csAttempt | $.VarRef<csAttempt> | null, committed?: boolean, onCommit?: (() => void) | null, replayBuffer?: $.Slice<replayOp>, replayBufferSize?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			callHdr: init?.callHdr ?? (null! as transport.CallHdr | $.VarRef<transport.CallHdr> | null),
			opts: init?.opts ?? (null! as $.Slice<__goscript_rpc_util.CallOption | null>),
			callInfo: init?.callInfo ?? (null! as __goscript_rpc_util.callInfo | $.VarRef<__goscript_rpc_util.callInfo> | null),
			cc: init?.cc ?? (null! as __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null),
			desc: init?.desc ?? (null! as StreamDesc | $.VarRef<StreamDesc> | null),
			codec: init?.codec ?? (null! as __goscript_codec.baseCodec | null),
			cp: init?.cp ?? (null! as __goscript_rpc_util.Compressor | null),
			comp: init?.comp ?? (null! as encoding.Compressor | null),
			cancel: init?.cancel ?? (null! as (() => void) | null),
			sentLast: init?.sentLast ?? (false as boolean),
			methodConfig: init?.methodConfig ?? (null! as serviceconfig.MethodConfig | $.VarRef<serviceconfig.MethodConfig> | null),
			ctx: init?.ctx ?? (null! as context.Context | null),
			retryThrottler: init?.retryThrottler ?? (null! as __goscript_clientconn.retryThrottler | $.VarRef<__goscript_clientconn.retryThrottler> | null),
			binlogs: init?.binlogs ?? (null! as $.Slice<binarylog.MethodLogger | null>),
			serverHeaderBinlogged: init?.serverHeaderBinlogged ?? (false as boolean),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			firstAttempt: init?.firstAttempt ?? (false as boolean),
			numRetries: init?.numRetries ?? (0 as number),
			numRetriesSincePushback: init?.numRetriesSincePushback ?? (0 as number),
			finished: init?.finished ?? (false as boolean),
			attempt: init?.attempt ?? (null! as csAttempt | $.VarRef<csAttempt> | null),
			committed: init?.committed ?? (false as boolean),
			onCommit: init?.onCommit ?? (null! as (() => void) | null),
			replayBuffer: init?.replayBuffer ?? (null! as $.Slice<replayOp>),
			replayBufferSize: init?.replayBufferSize ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): clientStream {
		return new clientStream(this, true)
	}

	public __goscriptAssign(source: clientStream): void {
		const target = this._fields
		const values = source._fields
		target.callHdr = values.callHdr
		target.opts = values.opts
		target.callInfo = values.callInfo
		target.cc = values.cc
		target.desc = values.desc
		target.codec = $.assignFieldValue(target.codec, values.codec, "grpc.baseCodec")
		target.cp = $.assignFieldValue(target.cp, values.cp, "grpc.Compressor")
		target.comp = $.assignFieldValue(target.comp, values.comp, "encoding.Compressor")
		target.cancel = values.cancel
		target.sentLast = values.sentLast
		target.methodConfig = values.methodConfig
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.retryThrottler = values.retryThrottler
		target.binlogs = values.binlogs
		target.serverHeaderBinlogged = values.serverHeaderBinlogged
		$.assignStruct(target.mu, values.mu)
		target.firstAttempt = values.firstAttempt
		target.numRetries = values.numRetries
		target.numRetriesSincePushback = values.numRetriesSincePushback
		target.finished = values.finished
		target.attempt = values.attempt
		target.committed = values.committed
		target.onCommit = values.onCommit
		target.replayBuffer = values.replayBuffer
		target.replayBufferSize = values.replayBufferSize
	}

	public async CloseSend(): globalThis.Promise<$.GoError> {
		let cs: clientStream | $.VarRef<clientStream> | null = this;
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		if ((cs$ as clientStream).sentLast) {
			// TODO: return an error and finish the stream instead, due to API misuse?
			return null
		}
		;(cs$ as clientStream).sentLast = true
		let op: ((a: csAttempt | $.VarRef<csAttempt> | null) => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue(async (a: csAttempt | $.VarRef<csAttempt> | null): globalThis.Promise<$.GoError> => {
			void (__goscriptAwait = $.pointerValue<Exclude<transport.ClientTransport, null>>($.pointerValue<csAttempt>(a).t).Write($.pointerValue<csAttempt>(a).s, null, (null as mem.BufferSlice), new transport.Options({Last: true})), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			// Always return nil; io.EOF is the only error that might make sense
			// instead, but there is no need to signal the client to call RecvMsg
			// as the only use left for the stream after CloseSend is to call
			// RecvMsg.  This also matches historical behavior.
			return null
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.csAttempt")], results: ["error"] } as $.FunctionTypeInfo))
		await clientStream.prototype.withRetry.call(cs, op, $.functionValue(async (): globalThis.Promise<void> => {
			await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).bufferForRetryLocked(0, op, (null as (() => void) | null)) : clientStream.prototype.bufferForRetryLocked.call(cs, 0, op, (null as (() => void) | null)))
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		if ($.sliceLen((cs$ as clientStream).binlogs) != 0) {
			let chc: binarylog.ClientHalfClose | $.VarRef<binarylog.ClientHalfClose> | null = new binarylog.ClientHalfClose({OnClientSide: true})
			for (let __goscriptRangeTarget3 = (cs$ as clientStream).binlogs, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
				let binlog = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as binarylog.MethodLogger | null)
				void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log((cs$ as clientStream).ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(chc, "*binarylog.ClientHalfClose", /* @__PURE__ */ $.pointerType("binarylog.ClientHalfClose"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		// We never returned an error here for reasons.
		return null
	}

	public async Context(): globalThis.Promise<context.Context | null> {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).commitAttempt() : clientStream.prototype.commitAttempt.call(cs))
		// No need to lock before using attempt, since we know it is committed and
		// cannot change.
		if ($.pointerValue<csAttempt>((cs$ as clientStream).attempt).s != null) {
			return transport.Stream.prototype.Context.call($.pointerValue<csAttempt>((cs$ as clientStream).attempt).s)
		}
		return (cs$ as clientStream).ctx
	}

	public async Header(): globalThis.Promise<[metadata.MD, $.GoError]> {
		let cs: clientStream | $.VarRef<clientStream> | null = this;
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		let m: metadata.MD = null! as metadata.MD
		let err = await clientStream.prototype.withRetry.call(cs, $.functionValue(async (a: csAttempt | $.VarRef<csAttempt> | null): globalThis.Promise<$.GoError> => {
			let __goscriptShadow11: $.GoError = null! as $.GoError
			let __goscriptTuple6: any = await transport.Stream.prototype.Header.call($.pointerValue<csAttempt>(a).s)
			m = __goscriptTuple6[0]
			__goscriptShadow11 = __goscriptTuple6[1]
			return await __goscript_rpc_util.toRPCErr(__goscriptShadow11)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.csAttempt")], results: ["error"] } as $.FunctionTypeInfo)), $.functionValue(((__receiver) => () => __receiver.commitAttemptLocked())((cs$ as clientStream)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc.(*clientStream).commitAttemptLocked-fm"))

		if ((m == null) && (err == null)) {
			// The stream ended with success.  Finish the clientStream.
			err = io.EOF
		}

		if (err != null) {
			await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).finish(err) : clientStream.prototype.finish.call(cs, err))
			// Do not return the error.  The user should get it by calling Recv().
			return [null, null]
		}

		if ((($.sliceLen((cs$ as clientStream).binlogs) != 0) && !(cs$ as clientStream).serverHeaderBinlogged) && (m != null)) {
			// Only log if binary log is on and header has not been logged, and
			// there is actually headers to log.
			let logEntry: binarylog.ServerHeader | $.VarRef<binarylog.ServerHeader> | null = new binarylog.ServerHeader({OnClientSide: true, Header: m, PeerAddr: null})
			{
				let __goscriptTuple7: any = await peer2.FromContext(await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).Context() : clientStream.prototype.Context.call(cs)))
				let __goscriptShadow12: peer2.Peer | $.VarRef<peer2.Peer> | null = __goscriptTuple7[0]
				let ok = __goscriptTuple7[1]
				if (ok) {
					$.pointerValue<binarylog.ServerHeader>(logEntry).PeerAddr = $.pointerValue<peer2.Peer>(__goscriptShadow12).Addr
				}
			}
			;(cs$ as clientStream).serverHeaderBinlogged = true
			for (let __goscriptRangeTarget4 = (cs$ as clientStream).binlogs, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
				let binlog = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as binarylog.MethodLogger | null)
				void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log((cs$ as clientStream).ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(logEntry, "*binarylog.ServerHeader", /* @__PURE__ */ $.pointerType("binarylog.ServerHeader"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		return [m, null]
	}

	public async RecvMsg(m: any): globalThis.Promise<$.GoError> {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		if (($.sliceLen((cs$ as clientStream).binlogs) != 0) && !(cs$ as clientStream).serverHeaderBinlogged) {
			// Call Header() to binary log header if it's not already logged.
			await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).Header() : clientStream.prototype.Header.call(cs))
		}
		let recvInfo: __goscript_rpc_util.payloadInfo | $.VarRef<__goscript_rpc_util.payloadInfo> | null = null! as __goscript_rpc_util.payloadInfo | $.VarRef<__goscript_rpc_util.payloadInfo> | null
		if ($.sliceLen((cs$ as clientStream).binlogs) != 0) {
			recvInfo = new __goscript_rpc_util.payloadInfo()
			const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.free())($.pointerValue<__goscript_rpc_util.payloadInfo>(recvInfo)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc.(*payloadInfo).free-fm")
			__defer.defer(async () => { await __goscriptDeferCallee0() })
		}
		let err = await clientStream.prototype.withRetry.call(cs, $.functionValue(async (a: csAttempt | $.VarRef<csAttempt> | null): globalThis.Promise<$.GoError> => {
			return await (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as csAttempt).recvMsg(m, recvInfo) : csAttempt.prototype.recvMsg.call(a, m, recvInfo))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.csAttempt")], results: ["error"] } as $.FunctionTypeInfo)), $.functionValue(((__receiver) => () => __receiver.commitAttemptLocked())((cs$ as clientStream)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc.(*clientStream).commitAttemptLocked-fm"))
		if (($.sliceLen((cs$ as clientStream).binlogs) != 0) && (err == null)) {
			let sm: binarylog.ServerMessage | $.VarRef<binarylog.ServerMessage> | null = (() => { const __goscriptLiteralField0 = $.interfaceValue(mem.BufferSlice_Materialize($.pointerValue<__goscript_rpc_util.payloadInfo>(recvInfo).uncompressedBytes), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))); return new binarylog.ServerMessage({OnClientSide: true, Message: __goscriptLiteralField0}) })()
			for (let __goscriptRangeTarget5 = (cs$ as clientStream).binlogs, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
				let binlog = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as binarylog.MethodLogger | null)
				void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log((cs$ as clientStream).ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(sm, "*binarylog.ServerMessage", /* @__PURE__ */ $.pointerType("binarylog.ServerMessage"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		if ((err != null) || !$.pointerValue<StreamDesc>((cs$ as clientStream).desc).ServerStreams) {
			// err != nil or non-server-streaming indicates end of stream.
			await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).finish(err) : clientStream.prototype.finish.call(cs, err))
		}
		return err
	}

	public async SendMsg(m: any): globalThis.Promise<$.GoError> {
		let cs: clientStream | $.VarRef<clientStream> | null = this;
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			if ((err != null) && (!$.comparableEqual(err, io.EOF))) {
				// Call finish on the client stream for errors generated by this SendMsg
				// call, as these indicate problems created by this client.  (Transport
				// errors are converted to an io.EOF error in csAttempt.sendMsg; the real
				// error will be returned from RecvMsg eventually in that case, or be
				// retried.)
				await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).finish(err) : clientStream.prototype.finish.call(cs, err))
			}
		})() })
		if ((cs$ as clientStream).sentLast) {
			const __goscriptReturn12: $.GoError = await status.Errorf(13, "SendMsg called after CloseSend", null)
			err = __goscriptReturn12
			await __defer.dispose()
			return err
		}
		if (!$.pointerValue<StreamDesc>((cs$ as clientStream).desc).ClientStreams) {
			;(cs$ as clientStream).sentLast = true
		}

		// load hdr, payload, data
		let __goscriptTuple8: any = await prepareMsg(m, (cs$ as clientStream).codec, (cs$ as clientStream).cp, (cs$ as clientStream).comp, $.pointerValue<__goscript_clientconn.ClientConn>((cs$ as clientStream).cc).dopts.copts.BufferPool)
		let hdr: $.Slice<number> = __goscriptTuple8[0]
		let data: mem.BufferSlice = (__goscriptTuple8[1] as mem.BufferSlice)
		let __goscriptShadow13: mem.BufferSlice = (__goscriptTuple8[2] as mem.BufferSlice)
		let pf = __goscriptTuple8[3]
		err = __goscriptTuple8[4]
		if (err != null) {
			const __goscriptReturn13: $.GoError = err
			err = __goscriptReturn13
			await __defer.dispose()
			return err
		}

		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			await mem.BufferSlice_Free(data)
			// only free payload if compression was made, and therefore it is a different set
			// of buffers from data.
			if (__goscript_rpc_util.payloadFormat_isCompressed(pf)) {
				await mem.BufferSlice_Free(__goscriptShadow13)
			}
		})() })

		let dataLen = mem.BufferSlice_Len(data)
		let payloadLen = mem.BufferSlice_Len(__goscriptShadow13)
		// TODO(dfawley): should we be checking len(data) instead?
		if (payloadLen > $.pointerValue<number>($.pointerValue<__goscript_rpc_util.callInfo>((cs$ as clientStream).callInfo).maxSendMessageSize)) {
			const __goscriptReturn14: $.GoError = await status.Errorf(8, "trying to send message larger than max (%d vs. %d)", $.arrayToSlice<any>([$.basicInterfaceValue(payloadLen, "int"), $.basicInterfaceValue($.pointerValue<number>($.pointerValue<__goscript_rpc_util.callInfo>((cs$ as clientStream).callInfo).maxSendMessageSize), "int")]))
			err = __goscriptReturn14
			await __defer.dispose()
			return err
		}

		// always take an extra ref in case data == payload (i.e. when the data isn't
		// compressed). The original ref will always be freed by the deferred free above.
		mem.BufferSlice_Ref(__goscriptShadow13)
		let op: ((a: csAttempt | $.VarRef<csAttempt> | null) => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue(async (a: csAttempt | $.VarRef<csAttempt> | null): globalThis.Promise<$.GoError> => {
			return await (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as csAttempt).sendMsg(m, hdr, (__goscriptShadow13 as mem.BufferSlice), dataLen, payloadLen) : csAttempt.prototype.sendMsg.call(a, m, hdr, (__goscriptShadow13 as mem.BufferSlice), dataLen, payloadLen))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.csAttempt")], results: ["error"] } as $.FunctionTypeInfo))

		// onSuccess is invoked when the op is captured for a subsequent retry. If the
		// stream was established by a previous message and therefore retries are
		// disabled, onSuccess will not be invoked, and payloadRef can be freed
		// immediately.
		let onSuccessCalled = false
		err = await clientStream.prototype.withRetry.call(cs, op, $.functionValue(async (): globalThis.Promise<void> => {
			await clientStream.prototype.bufferForRetryLocked.call(cs, $.sliceLen(hdr) + payloadLen, op, $.functionValue(((__receiver) => () => mem.BufferSlice_Free(__receiver))(__goscriptShadow13), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc/mem.BufferSlice.Free-fm"))
			onSuccessCalled = true
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		if (!onSuccessCalled) {
			await mem.BufferSlice_Free(__goscriptShadow13)
		}
		if (($.sliceLen((cs$ as clientStream).binlogs) != 0) && (err == null)) {
			let cm: binarylog.ClientMessage | $.VarRef<binarylog.ClientMessage> | null = (() => { const __goscriptLiteralField1 = $.interfaceValue(mem.BufferSlice_Materialize(data), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))); return new binarylog.ClientMessage({OnClientSide: true, Message: __goscriptLiteralField1}) })()
			for (let __goscriptRangeTarget6 = (cs$ as clientStream).binlogs, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
				let binlog = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as binarylog.MethodLogger | null)
				void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log((cs$ as clientStream).ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(cm, "*binarylog.ClientMessage", /* @__PURE__ */ $.pointerType("binarylog.ClientMessage"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		const __goscriptReturn15: $.GoError = err
		err = __goscriptReturn15
		await __defer.dispose()
		return err
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Trailer(): globalThis.Promise<metadata.MD> {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		// On RPC failure, we never need to retry, because usage requires that
		// RecvMsg() returned a non-nil error before calling this function is valid.
		// We would have retried earlier if necessary.
		//
		// Commit the attempt anyway, just in case users are not following those
		// directions -- it will prevent races and should not meaningfully impact
		// performance.
		await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).commitAttempt() : clientStream.prototype.commitAttempt.call(cs))
		if ($.pointerValue<csAttempt>((cs$ as clientStream).attempt).s == null) {
			return null
		}
		return transport.Stream.prototype.Trailer.call($.pointerValue<csAttempt>((cs$ as clientStream).attempt).s)
	}

	public async bufferForRetryLocked(sz: number, op: ((a: csAttempt | $.VarRef<csAttempt> | null) => $.GoError | globalThis.Promise<$.GoError>) | null, cleanup: (() => void) | null): globalThis.Promise<void> {
		let cs: clientStream | $.VarRef<clientStream> | null = this;
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		// Note: we still will buffer if retry is disabled (for transparent retries).
		if ((cs$ as clientStream).committed) {
			return
		}
		;(cs$ as clientStream).replayBufferSize = (cs$ as clientStream).replayBufferSize + (sz)
		if ((cs$ as clientStream).replayBufferSize > $.pointerValue<__goscript_rpc_util.callInfo>((cs$ as clientStream).callInfo).maxRetryRPCBufferSize) {
			await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).commitAttemptLocked() : clientStream.prototype.commitAttemptLocked.call(cs))
			void (__goscriptAwait = cleanup!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		;(cs$ as clientStream).replayBuffer = $.appendOne((cs$ as clientStream).replayBuffer, new replayOp({op: op, cleanup: cleanup}, true))
	}

	public async commitAttempt(): globalThis.Promise<void> {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		await (cs$ as clientStream).mu.Lock()
		await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).commitAttemptLocked() : clientStream.prototype.commitAttemptLocked.call(cs))
		void (cs$ as clientStream).mu.Unlock()
	}

	public async commitAttemptLocked(): globalThis.Promise<void> {
		let cs: clientStream | $.VarRef<clientStream> | null = this;
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		if (!(cs$ as clientStream).committed && ((cs$ as clientStream).onCommit != null)) {
			void (__goscriptAwait = (cs$ as clientStream).onCommit!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		;(cs$ as clientStream).committed = true
		for (let __goscriptRangeTarget7 = (cs$ as clientStream).replayBuffer, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
			let op = ((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as replayOp)).clone()
			if (op.cleanup != null) {
				void (__goscriptAwait = op.cleanup!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		;(cs$ as clientStream).replayBuffer = null
	}

	public async finish(err: $.GoError): globalThis.Promise<void> {
		let cs: clientStream | $.VarRef<clientStream> | null = this;
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		if ($.comparableEqual(err, io.EOF)) {
			// Ending a stream with EOF indicates a success.
			err = null
		}
		await (cs$ as clientStream).mu.Lock()
		if ((cs$ as clientStream).finished) {
			void (cs$ as clientStream).mu.Unlock()
			return
		}
		;(cs$ as clientStream).finished = true
		for (let __goscriptRangeTarget8 = $.pointerValue<__goscript_rpc_util.callInfo>((cs$ as clientStream).callInfo).onFinish, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
			let __goscriptRangeShadow0 = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as ((err: $.GoError) => void) | null)
			void (__goscriptAwait = __goscriptRangeShadow0!(err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).commitAttemptLocked() : clientStream.prototype.commitAttemptLocked.call(cs))
		if ((cs$ as clientStream).attempt != null) {
			await csAttempt.prototype.finish.call((cs$ as clientStream).attempt, err)
			// after functions all rely upon having a stream.
			if ($.pointerValue<csAttempt>((cs$ as clientStream).attempt).s != null) {
				for (let __goscriptRangeTarget9 = (cs$ as clientStream).opts, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
					let o = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as __goscript_rpc_util.CallOption | null)
					void (__goscriptAwait = (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? (o as Exclude<__goscript_rpc_util.CallOption, null>) : $.pointerValue<Exclude<__goscript_rpc_util.CallOption, null>>(o)).after((cs$ as clientStream).callInfo, (cs$ as clientStream).attempt), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
		}

		void (cs$ as clientStream).mu.Unlock()
		// Only one of cancel or trailer needs to be logged.
		if ($.sliceLen((cs$ as clientStream).binlogs) != 0) {
			{
				let __goscriptSwitch0 = err
				switch ((true as boolean)) {
					case $.comparableEqual(__goscriptSwitch0, __goscript_rpc_util.errContextCanceled):
					case $.comparableEqual(__goscriptSwitch0, __goscript_rpc_util.errContextDeadline):
					case $.comparableEqual(__goscriptSwitch0, __goscript_clientconn.ErrClientConnClosing):
					{
						let c: binarylog.Cancel | $.VarRef<binarylog.Cancel> | null = new binarylog.Cancel({OnClientSide: true})
						for (let __goscriptRangeTarget10 = (cs$ as clientStream).binlogs, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
							let binlog = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as binarylog.MethodLogger | null)
							void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log((cs$ as clientStream).ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(c, "*binarylog.Cancel", /* @__PURE__ */ $.pointerType("binarylog.Cancel"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
						break
					}
					default:
					{
						let logEntry: binarylog.ServerTrailer | $.VarRef<binarylog.ServerTrailer> | null = (await (async () => { const __goscriptLiteralField2 = await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).Trailer() : clientStream.prototype.Trailer.call(cs)); return new binarylog.ServerTrailer({OnClientSide: true, Trailer: __goscriptLiteralField2, Err: err}) })())
						{
							let __goscriptTuple9: any = await peer2.FromContext(await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).Context() : clientStream.prototype.Context.call(cs)))
							let __goscriptShadow14: peer2.Peer | $.VarRef<peer2.Peer> | null = __goscriptTuple9[0]
							let ok = __goscriptTuple9[1]
							if (ok) {
								$.pointerValue<binarylog.ServerTrailer>(logEntry).PeerAddr = $.pointerValue<peer2.Peer>(__goscriptShadow14).Addr
							}
						}
						for (let __goscriptRangeTarget11 = (cs$ as clientStream).binlogs, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
							let binlog = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as binarylog.MethodLogger | null)
							void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log((cs$ as clientStream).ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(logEntry, "*binarylog.ServerTrailer", /* @__PURE__ */ $.pointerType("binarylog.ServerTrailer"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
						break
					}
				}
			}
		}
		if (err == null) {
			await __goscript_clientconn.retryThrottler.prototype.successfulRPC.call((cs$ as clientStream).retryThrottler)
		}
		if (channelz.IsOn()) {
			if (err != null) {
				__goscript_clientconn.ClientConn.prototype.incrCallsFailed.call((cs$ as clientStream).cc)
			} else {
				__goscript_clientconn.ClientConn.prototype.incrCallsSucceeded.call((cs$ as clientStream).cc)
			}
		}
		void (__goscriptAwait = (cs$ as clientStream).cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async newAttemptLocked(isTransparent: boolean): globalThis.Promise<[csAttempt | $.VarRef<csAttempt> | null, $.GoError]> {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((cs$ as clientStream).ctx).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [null, await __goscript_rpc_util.toRPCErr(err)]
			}
		}
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>($.pointerValue<__goscript_clientconn.ClientConn>((cs$ as clientStream).cc).ctx).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [null, __goscript_clientconn.ErrClientConnClosing]
			}
		}

		let ctx = __goscript_rpc_util.newContextWithRPCInfo((cs$ as clientStream).ctx, $.pointerValue<__goscript_rpc_util.callInfo>((cs$ as clientStream).callInfo).failFast, $.pointerValue<__goscript_rpc_util.callInfo>((cs$ as clientStream).callInfo).codec, (cs$ as clientStream).cp, (cs$ as clientStream).comp)
		let method = $.pointerValue<transport.CallHdr>((cs$ as clientStream).callHdr).Method
		let beginTime: time.Time = $.markAsStructValue(new time.Time())
		let shs: $.Slice<stats.Handler | null> = $.pointerValue<__goscript_clientconn.ClientConn>((cs$ as clientStream).cc).dopts.copts.StatsHandlers
		for (let __goscriptRangeTarget12 = shs, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
			let sh = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as stats.Handler | null)
			ctx = (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).TagRPC(ctx, new stats.RPCTagInfo({FullMethodName: method, FailFast: $.pointerValue<__goscript_rpc_util.callInfo>((cs$ as clientStream).callInfo).failFast})), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			beginTime = $.assignStruct(beginTime, time.Now())
			let begin: stats.Begin | $.VarRef<stats.Begin> | null = new stats.Begin({Client: true, BeginTime: $.markAsStructValue($.cloneStructValue(beginTime)), FailFast: $.pointerValue<__goscript_rpc_util.callInfo>((cs$ as clientStream).callInfo).failFast, IsClientStream: $.pointerValue<StreamDesc>((cs$ as clientStream).desc).ClientStreams, IsServerStream: $.pointerValue<StreamDesc>((cs$ as clientStream).desc).ServerStreams, IsTransparentRetryAttempt: isTransparent})
			void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleRPC(ctx, $.interfaceValue<stats.RPCStats | null>(begin, "*stats.Begin", /* @__PURE__ */ $.pointerType("stats.Begin"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		let trInfo: __goscript_trace.traceInfo | $.VarRef<__goscript_trace.traceInfo> | null = null! as __goscript_trace.traceInfo | $.VarRef<__goscript_trace.traceInfo> | null
		if (__goscript_trace.EnableTracing) {
			trInfo = (await (async () => { const __goscriptLiteralField3 = await __goscript_trace_withtrace.newTrace($.concatString("grpc.Sent.", __goscript_trace.methodFamily(method)), method); return new __goscript_trace.traceInfo({tr: __goscriptLiteralField3, firstLine: new __goscript_trace.firstLine({client: true}, true)}) })())
			{
				let [deadline, ok] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Deadline()
				if (ok) {
					$.pointerValue<__goscript_trace.traceInfo>(trInfo).firstLine.deadline = time.Until($.markAsStructValue($.cloneStructValue(deadline)))
				}
			}
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>(trInfo).tr).LazyLog($.interfaceValue<fmt.Stringer | null>($.fieldRef($.pointerValue<__goscript_trace.traceInfo>(trInfo)._fields, "firstLine"), "*grpc.firstLine", /* @__PURE__ */ $.pointerType("grpc.firstLine")), false), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			ctx = __goscript_trace_withtrace.newTraceContext(ctx, $.pointerValue<__goscript_trace.traceInfo>(trInfo).tr)
		}

		if ($.stringEqual($.pointerValue<__goscript_clientconn.ClientConn>((cs$ as clientStream).cc).parsedTarget.URL.Scheme, internal.GRPCResolverSchemeExtraMetadata)) {
			// Add extra metadata (metadata that will be added by transport) to context
			// so the balancer can see them.
			ctx = grpcutil.WithExtraMetadata(ctx, await metadata.Pairs($.arrayToSlice<string>(["content-type", grpcutil.ContentType($.pointerValue<transport.CallHdr>((cs$ as clientStream).callHdr).ContentSubtype)])))
		}

		return [new csAttempt({ctx: ctx, beginTime: $.markAsStructValue($.cloneStructValue(beginTime)), cs: cs, dc: $.pointerValue<__goscript_clientconn.ClientConn>((cs$ as clientStream).cc).dopts.dc, statsHandlers: shs, trInfo: trInfo}), null]
	}

	public async replayBufferLocked(attempt: csAttempt | $.VarRef<csAttempt> | null): globalThis.Promise<$.GoError> {
		const cs: clientStream | $.VarRef<clientStream> | null = this;
		for (let __goscriptRangeTarget13 = $.pointerValue<clientStream>(cs).replayBuffer, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
			let f = ((__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as replayOp)).clone()
			{
				let err = (__goscriptAwait = f.op!(attempt), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}
		return null
	}

	public async retryLocked(attempt: csAttempt | $.VarRef<csAttempt> | null, lastErr: $.GoError): globalThis.Promise<$.GoError> {
		let cs: clientStream | $.VarRef<clientStream> | null = this;
		while (true) {
			await (attempt !== null && (attempt as any).__isVarRef !== true && (attempt as any).__goValue === undefined ? ((attempt as any) as csAttempt).finish(await __goscript_rpc_util.toRPCErr(lastErr)) : csAttempt.prototype.finish.call(attempt, await __goscript_rpc_util.toRPCErr(lastErr)))
			let [isTransparent, err] = await (attempt !== null && (attempt as any).__isVarRef !== true && (attempt as any).__goValue === undefined ? ((attempt as any) as csAttempt).shouldRetry(lastErr) : csAttempt.prototype.shouldRetry.call(attempt, lastErr))
			if (err != null) {
				await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).commitAttemptLocked() : clientStream.prototype.commitAttemptLocked.call(cs))
				return err
			}
			$.pointerValue<clientStream>(cs).firstAttempt = false
			let __goscriptTuple10: any = await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).newAttemptLocked(isTransparent) : clientStream.prototype.newAttemptLocked.call(cs, isTransparent))
			attempt = __goscriptTuple10[0]
			err = __goscriptTuple10[1]
			if (err != null) {
				// Only returns error if the clientconn is closed or the context of
				// the stream is canceled.
				return err
			}
			// Note that the first op in replayBuffer always sets cs.attempt
			// if it is able to pick a transport and create a stream.
			{
				lastErr = await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).replayBufferLocked(attempt) : clientStream.prototype.replayBufferLocked.call(cs, attempt))
				if (lastErr == null) {
					return null
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async withRetry(op: ((a: csAttempt | $.VarRef<csAttempt> | null) => $.GoError | globalThis.Promise<$.GoError>) | null, onSuccess: (() => void) | null): globalThis.Promise<$.GoError> {
		let cs: clientStream | $.VarRef<clientStream> | null = this;
		const cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		await (cs$ as clientStream).mu.Lock()
		while (true) {
			if ((cs$ as clientStream).committed) {
				void (cs$ as clientStream).mu.Unlock()
				// toRPCErr is used in case the error from the attempt comes from
				// NewClientStream, which intentionally doesn't return a status
				// error to allow for further inspection; all other errors should
				// already be status errors.
				return __goscript_rpc_util.toRPCErr((__goscriptAwait = op!((cs$ as clientStream).attempt), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			}
			if ($.sliceLen((cs$ as clientStream).replayBuffer) == 0) {
				// For the first op, which controls creation of the stream and
				// assigns cs.attempt, we need to create a new attempt inline
				// before executing the first op.  On subsequent ops, the attempt
				// is created immediately before replaying the ops.
				let err: $.GoError = null! as $.GoError
				{
					let __goscriptTuple11: any = await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).newAttemptLocked(false) : clientStream.prototype.newAttemptLocked.call(cs, false));
					;(cs$ as clientStream).attempt = __goscriptTuple11[0]
					err = __goscriptTuple11[1]
					if (err != null) {
						void (cs$ as clientStream).mu.Unlock()
						await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).finish(err) : clientStream.prototype.finish.call(cs, err))
						return err
					}
				}
			}
			let a: csAttempt | $.VarRef<csAttempt> | null = (cs$ as clientStream).attempt
			let a$: csAttempt = a == null ? $.pointerTarget<csAttempt>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<csAttempt>(a)
			void (cs$ as clientStream).mu.Unlock()
			let err = (__goscriptAwait = op!(a), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await (cs$ as clientStream).mu.Lock()
			if (!$.pointerEqual(a, (cs$ as clientStream).attempt)) {
				// We started another attempt already.
				continue
			}
			if ($.comparableEqual(err, io.EOF)) {
				await $.chanRecv(transport.Stream.prototype.Done.call((a$ as csAttempt).s))
			}
			if ((err == null) || (($.comparableEqual(err, io.EOF)) && (istatus.Status.prototype.Code.call(transport.Stream.prototype.Status.call((a$ as csAttempt).s)) == 0))) {
				void (__goscriptAwait = onSuccess!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (cs$ as clientStream).mu.Unlock()
				return err
			}
			let __goscriptShadow15 = err
			{
				let __goscriptShadow16 = await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).retryLocked(a, __goscriptShadow15) : clientStream.prototype.retryLocked.call(cs, a, __goscriptShadow15))
				if (__goscriptShadow16 != null) {
					void (cs$ as clientStream).mu.Unlock()
					return __goscriptShadow16
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"grpc.clientStream",
		() => new clientStream(),
		() => [$.methodSignature("CloseSend", [], ["error"], true), $.methodSignature("Context", [], ["context.Context"], true), $.methodSignature("Header", [], ["metadata.MD", "error"], true), $.methodSignature("RecvMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("SendMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], [["err", "error"]], true), $.methodSignature("Trailer", [], ["metadata.MD"], true), $.methodSignature("bufferForRetryLocked", [["sz", /* @__PURE__ */ $.basicType("int")], ["op", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.csAttempt")], results: ["error"] } as $.FunctionTypeInfo)], ["cleanup", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("commitAttempt", [], [], true), $.methodSignature("commitAttemptLocked", [], [], true), $.methodSignature("finish", [["err", "error"]], [], true), $.methodSignature("newAttemptLocked", [["isTransparent", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.pointerType("grpc.csAttempt"), "error"], true), $.methodSignature("replayBufferLocked", [["attempt", /* @__PURE__ */ $.pointerType("grpc.csAttempt")]], ["error"], true), $.methodSignature("retryLocked", [["attempt", /* @__PURE__ */ $.pointerType("grpc.csAttempt")], ["lastErr", "error"]], ["error"], true), $.methodSignature("withRetry", [["op", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.csAttempt")], results: ["error"] } as $.FunctionTypeInfo)], ["onSuccess", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], ["error"], true)],
		clientStream,
		() => [/* @__PURE__ */ $.structField("callHdr", /* @__PURE__ */ $.pointerType("transport.CallHdr"), [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("opts", /* @__PURE__ */ $.sliceType("grpc.CallOption"), [1], 8, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("callInfo", /* @__PURE__ */ $.pointerType("grpc.callInfo"), [2], 32, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("cc", /* @__PURE__ */ $.pointerType("grpc.ClientConn"), [3], 40, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("grpc.StreamDesc"), [4], 48, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("codec", "grpc.baseCodec", [5], 56, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("cp", "grpc.Compressor", [6], 72, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("comp", "encoding.Compressor", [7], 88, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("cancel", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), [8], 104, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("sentLast", /* @__PURE__ */ $.basicType("bool"), [9], 112, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("methodConfig", /* @__PURE__ */ $.pointerType("serviceconfig.MethodConfig"), [10], 120, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("ctx", "context.Context", [11], 128, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("retryThrottler", /* @__PURE__ */ $.pointerType("grpc.retryThrottler"), [12], 144, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("binlogs", /* @__PURE__ */ $.sliceType("binarylog.MethodLogger"), [13], 152, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("serverHeaderBinlogged", /* @__PURE__ */ $.basicType("bool"), [14], 176, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [15], 180, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("firstAttempt", /* @__PURE__ */ $.basicType("bool"), [16], 188, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("numRetries", /* @__PURE__ */ $.basicType("int"), [17], 192, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("numRetriesSincePushback", /* @__PURE__ */ $.basicType("int"), [18], 200, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("finished", /* @__PURE__ */ $.basicType("bool"), [19], 208, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("attempt", /* @__PURE__ */ $.pointerType("grpc.csAttempt"), [20], 216, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("committed", /* @__PURE__ */ $.basicType("bool"), [21], 224, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("onCommit", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [22], 232, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("replayBuffer", /* @__PURE__ */ $.sliceType("grpc.replayOp"), [23], 240, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("replayBufferSize", /* @__PURE__ */ $.basicType("int"), [24], 264, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class replayOp {
	public get op(): ((a: csAttempt | $.VarRef<csAttempt> | null) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.op
	}

	public set op(value: ((a: csAttempt | $.VarRef<csAttempt> | null) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.op = value
	}

	public get cleanup(): (() => void) | null {
		return this._fields.cleanup
	}

	public set cleanup(value: (() => void) | null) {
		this._fields.cleanup = value
	}

	public _fields: {
		op: ((a: csAttempt | $.VarRef<csAttempt> | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		cleanup: (() => void) | null
	}

	constructor(init?: Partial<{op?: ((a: csAttempt | $.VarRef<csAttempt> | null) => $.GoError | globalThis.Promise<$.GoError>) | null, cleanup?: (() => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			op: init?.op ?? (null! as ((a: csAttempt | $.VarRef<csAttempt> | null) => $.GoError | globalThis.Promise<$.GoError>) | null),
			cleanup: init?.cleanup ?? (null! as (() => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): replayOp {
		return new replayOp(this, true)
	}

	public __goscriptAssign(source: replayOp): void {
		const target = this._fields
		const values = source._fields
		target.op = values.op
		target.cleanup = values.cleanup
	}

	static __typeInfo = $.registerStructType(
		"grpc.replayOp",
		() => new replayOp(),
		() => [],
		replayOp,
		() => [/* @__PURE__ */ $.structField("op", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.csAttempt")], results: ["error"] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("cleanup", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [1], 8, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class csAttempt {
	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get cs(): clientStream | $.VarRef<clientStream> | null {
		return this._fields.cs
	}

	public set cs(value: clientStream | $.VarRef<clientStream> | null) {
		this._fields.cs = value
	}

	public get t(): transport.ClientTransport | null {
		return this._fields.t
	}

	public set t(value: transport.ClientTransport | null) {
		this._fields.t = value
	}

	public get s(): transport.Stream | $.VarRef<transport.Stream> | null {
		return this._fields.s
	}

	public set s(value: transport.Stream | $.VarRef<transport.Stream> | null) {
		this._fields.s = value
	}

	public get p(): __goscript_rpc_util.parser | $.VarRef<__goscript_rpc_util.parser> | null {
		return this._fields.p
	}

	public set p(value: __goscript_rpc_util.parser | $.VarRef<__goscript_rpc_util.parser> | null) {
		this._fields.p = value
	}

	public get pickResult(): balancer.PickResult {
		return this._fields.pickResult
	}

	public set pickResult(value: balancer.PickResult) {
		this._fields.pickResult = value
	}

	public get finished(): boolean {
		return this._fields.finished
	}

	public set finished(value: boolean) {
		this._fields.finished = value
	}

	public get dc(): __goscript_rpc_util.Decompressor | null {
		return this._fields.dc
	}

	public set dc(value: __goscript_rpc_util.Decompressor | null) {
		this._fields.dc = value
	}

	public get decomp(): encoding.Compressor | null {
		return this._fields.decomp
	}

	public set decomp(value: encoding.Compressor | null) {
		this._fields.decomp = value
	}

	public get decompSet(): boolean {
		return this._fields.decompSet
	}

	public set decompSet(value: boolean) {
		this._fields.decompSet = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	// trInfo may be nil (if EnableTracing is false).
	// trInfo.tr is set when created (if EnableTracing is true),
	// and cleared when the finish method is called.
	public get trInfo(): __goscript_trace.traceInfo | $.VarRef<__goscript_trace.traceInfo> | null {
		return this._fields.trInfo
	}

	public set trInfo(value: __goscript_trace.traceInfo | $.VarRef<__goscript_trace.traceInfo> | null) {
		this._fields.trInfo = value
	}

	public get statsHandlers(): $.Slice<stats.Handler | null> {
		return this._fields.statsHandlers
	}

	public set statsHandlers(value: $.Slice<stats.Handler | null>) {
		this._fields.statsHandlers = value
	}

	public get beginTime(): time.Time {
		return this._fields.beginTime
	}

	public set beginTime(value: time.Time) {
		this._fields.beginTime = value
	}

	// set for newStream errors that may be transparently retried
	public get allowTransparentRetry(): boolean {
		return this._fields.allowTransparentRetry
	}

	public set allowTransparentRetry(value: boolean) {
		this._fields.allowTransparentRetry = value
	}

	// set for pick errors that are returned as a status
	public get drop(): boolean {
		return this._fields.drop
	}

	public set drop(value: boolean) {
		this._fields.drop = value
	}

	public _fields: {
		ctx: context.Context | null
		cs: clientStream | $.VarRef<clientStream> | null
		t: transport.ClientTransport | null
		s: transport.Stream | $.VarRef<transport.Stream> | null
		p: __goscript_rpc_util.parser | $.VarRef<__goscript_rpc_util.parser> | null
		pickResult: balancer.PickResult
		finished: boolean
		dc: __goscript_rpc_util.Decompressor | null
		decomp: encoding.Compressor | null
		decompSet: boolean
		mu: sync.Mutex
		trInfo: __goscript_trace.traceInfo | $.VarRef<__goscript_trace.traceInfo> | null
		statsHandlers: $.Slice<stats.Handler | null>
		beginTime: time.Time
		allowTransparentRetry: boolean
		drop: boolean
	}

	constructor(init?: Partial<{ctx?: context.Context | null, cs?: clientStream | $.VarRef<clientStream> | null, t?: transport.ClientTransport | null, s?: transport.Stream | $.VarRef<transport.Stream> | null, p?: __goscript_rpc_util.parser | $.VarRef<__goscript_rpc_util.parser> | null, pickResult?: balancer.PickResult, finished?: boolean, dc?: __goscript_rpc_util.Decompressor | null, decomp?: encoding.Compressor | null, decompSet?: boolean, mu?: sync.Mutex, trInfo?: __goscript_trace.traceInfo | $.VarRef<__goscript_trace.traceInfo> | null, statsHandlers?: $.Slice<stats.Handler | null>, beginTime?: time.Time, allowTransparentRetry?: boolean, drop?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			ctx: init?.ctx ?? (null! as context.Context | null),
			cs: init?.cs ?? (null! as clientStream | $.VarRef<clientStream> | null),
			t: init?.t ?? (null! as transport.ClientTransport | null),
			s: init?.s ?? (null! as transport.Stream | $.VarRef<transport.Stream> | null),
			p: init?.p ?? (null! as __goscript_rpc_util.parser | $.VarRef<__goscript_rpc_util.parser> | null),
			pickResult: init?.pickResult ? init.pickResult.clone() : new balancer.PickResult(undefined, true),
			finished: init?.finished ?? (false as boolean),
			dc: init?.dc ?? (null! as __goscript_rpc_util.Decompressor | null),
			decomp: init?.decomp ?? (null! as encoding.Compressor | null),
			decompSet: init?.decompSet ?? (false as boolean),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			trInfo: init?.trInfo ?? (null! as __goscript_trace.traceInfo | $.VarRef<__goscript_trace.traceInfo> | null),
			statsHandlers: init?.statsHandlers ?? (null! as $.Slice<stats.Handler | null>),
			beginTime: init?.beginTime ? $.markAsStructValue($.cloneStructValue(init.beginTime)) : $.markAsStructValue(new time.Time()),
			allowTransparentRetry: init?.allowTransparentRetry ?? (false as boolean),
			drop: init?.drop ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): csAttempt {
		return new csAttempt(this, true)
	}

	public __goscriptAssign(source: csAttempt): void {
		const target = this._fields
		const values = source._fields
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.cs = values.cs
		target.t = $.assignFieldValue(target.t, values.t, "transport.ClientTransport")
		target.s = values.s
		target.p = values.p
		$.assignStruct(target.pickResult, values.pickResult)
		target.finished = values.finished
		target.dc = $.assignFieldValue(target.dc, values.dc, "grpc.Decompressor")
		target.decomp = $.assignFieldValue(target.decomp, values.decomp, "encoding.Compressor")
		target.decompSet = values.decompSet
		$.assignStruct(target.mu, values.mu)
		target.trInfo = values.trInfo
		target.statsHandlers = values.statsHandlers
		$.assignStruct(target.beginTime, values.beginTime)
		target.allowTransparentRetry = values.allowTransparentRetry
		target.drop = values.drop
	}

	public async finish(err: $.GoError): globalThis.Promise<void> {
		let a: csAttempt | $.VarRef<csAttempt> | null = this;
		const a$: csAttempt = a == null ? $.pointerTarget<csAttempt>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<csAttempt>(a)
		await (a$ as csAttempt).mu.Lock()
		if ((a$ as csAttempt).finished) {
			void (a$ as csAttempt).mu.Unlock()
			return
		}
		;(a$ as csAttempt).finished = true
		if ($.comparableEqual(err, io.EOF)) {
			// Ending a stream with EOF indicates a success.
			err = null
		}
		let tr: metadata.MD = null! as metadata.MD
		if ((a$ as csAttempt).s != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<transport.ClientTransport, null>>((a$ as csAttempt).t).CloseStream((a$ as csAttempt).s, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			tr = transport.Stream.prototype.Trailer.call((a$ as csAttempt).s)
		}

		if ((a$ as csAttempt).pickResult.Done != null) {
			let br = false
			if ((a$ as csAttempt).s != null) {
				br = transport.Stream.prototype.BytesReceived.call((a$ as csAttempt).s)
			}
			void (__goscriptAwait = (a$ as csAttempt).pickResult.Done!((await (async () => { const __goscriptLiteralField4 = await balancerload.Parse(tr); return new balancer.DoneInfo({Err: err, Trailer: tr, BytesSent: (a$ as csAttempt).s != null, BytesReceived: br, ServerLoad: __goscriptLiteralField4}, true) })())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		for (let __goscriptRangeTarget14 = (a$ as csAttempt).statsHandlers, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow14.length; __rangeIndex++) {
			let sh = (__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + __rangeIndex] as stats.Handler | null)
			let end: stats.End | $.VarRef<stats.End> | null = (() => { const __goscriptLiteralField5 = $.markAsStructValue($.cloneStructValue(time.Now())); return new stats.End({Client: true, BeginTime: $.markAsStructValue($.cloneStructValue((a$ as csAttempt).beginTime)), EndTime: __goscriptLiteralField5, Trailer: tr, Error: err}) })()
			void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleRPC((a$ as csAttempt).ctx, $.interfaceValue<stats.RPCStats | null>(end, "*stats.End", /* @__PURE__ */ $.pointerType("stats.End"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if (((a$ as csAttempt).trInfo != null) && ($.pointerValue<__goscript_trace.traceInfo>((a$ as csAttempt).trInfo).tr != null)) {
			if (err == null) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>((a$ as csAttempt).trInfo).tr).LazyPrintf("RPC: [OK]", null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>((a$ as csAttempt).trInfo).tr).LazyPrintf("RPC: [%v]", $.arrayToSlice<any>([(err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>((a$ as csAttempt).trInfo).tr).SetError(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>((a$ as csAttempt).trInfo).tr).Finish(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			$.pointerValue<__goscript_trace.traceInfo>((a$ as csAttempt).trInfo).tr = null
		}
		void (a$ as csAttempt).mu.Unlock()
	}

	public async getTransport(): globalThis.Promise<$.GoError> {
		let a: csAttempt | $.VarRef<csAttempt> | null = this;
		const a$: csAttempt = a == null ? $.pointerTarget<csAttempt>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<csAttempt>(a)
		let cs: clientStream | $.VarRef<clientStream> | null = (a$ as csAttempt).cs
		let cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)

		let err: $.GoError = null! as $.GoError
		let __goscriptTuple12: any = await __goscript_clientconn.ClientConn.prototype.getTransport.call((cs$ as clientStream).cc, (a$ as csAttempt).ctx, $.pointerValue<__goscript_rpc_util.callInfo>((cs$ as clientStream).callInfo).failFast, $.pointerValue<transport.CallHdr>((cs$ as clientStream).callHdr).Method);
		;(a$ as csAttempt).t = __goscriptTuple12[0]
		$.assignStruct((a$ as csAttempt).pickResult, __goscriptTuple12[1])
		err = __goscriptTuple12[2]
		if (err != null) {
			{
				let [de, ok] = $.typeAssertTuple<__goscript_picker_wrapper.dropError>(err, "grpc.dropError")
				if (ok) {
					err = de.error;
					;(a$ as csAttempt).drop = true
				}
			}
			return err
		}
		if ((a$ as csAttempt).trInfo != null) {
			await $.pointerValue<__goscript_trace.traceInfo>((a$ as csAttempt).trInfo).firstLine.SetRemoteAddr((__goscriptAwait = $.pointerValue<Exclude<transport.ClientTransport, null>>((a$ as csAttempt).t).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		return null
	}

	public async newStream(): globalThis.Promise<$.GoError> {
		let a: csAttempt | $.VarRef<csAttempt> | null = this;
		const a$: csAttempt = a == null ? $.pointerTarget<csAttempt>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<csAttempt>(a)
		let cs: clientStream | $.VarRef<clientStream> | null = (a$ as csAttempt).cs
		let cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		$.pointerValue<transport.CallHdr>((cs$ as clientStream).callHdr).PreviousAttempts = (cs$ as clientStream).numRetries

		// Merge metadata stored in PickResult, if any, with existing call metadata.
		// It is safe to overwrite the csAttempt's context here, since all state
		// maintained in it are local to the attempt. When the attempt has to be
		// retried, a new instance of csAttempt will be created.
		if ((a$ as csAttempt).pickResult.Metadata != null) {
			// We currently do not have a function it the metadata package which
			// merges given metadata with existing metadata in a context. Existing
			// function `AppendToOutgoingContext()` takes a variadic argument of key
			// value pairs.
			//
			// TODO: Make it possible to retrieve key value pairs from metadata.MD
			// in a form passable to AppendToOutgoingContext(), or create a version
			// of AppendToOutgoingContext() that accepts a metadata.MD.
			let __goscriptTuple13: any = await metadata.FromOutgoingContext((a$ as csAttempt).ctx)
			let md: metadata.MD = __goscriptTuple13[0]
			md = metadata.Join($.arrayToSlice<metadata.MD>([md, (a$ as csAttempt).pickResult.Metadata]));
			;(a$ as csAttempt).ctx = metadata.NewOutgoingContext((a$ as csAttempt).ctx, md)
		}

		let __goscriptTuple14: any = await $.pointerValue<Exclude<transport.ClientTransport, null>>((a$ as csAttempt).t).NewStream((a$ as csAttempt).ctx, (cs$ as clientStream).callHdr)
		let s: transport.Stream | $.VarRef<transport.Stream> | null = __goscriptTuple14[0]
		let err = __goscriptTuple14[1]
		if (err != null) {
			let __goscriptTuple15: any = $.typeAssertTuple<transport.NewStreamError | $.VarRef<transport.NewStreamError> | null>(err, /* @__PURE__ */ $.pointerType("transport.NewStreamError"))
			let nse: transport.NewStreamError | $.VarRef<transport.NewStreamError> | null = __goscriptTuple15[0]
			let ok = __goscriptTuple15[1]
			let nse$: transport.NewStreamError = nse == null ? $.pointerTarget<transport.NewStreamError>(nse) : (nse as any).__isVarRef === true ? (nse as any).value : (nse as any).__goValue === undefined ? (nse as any) : $.pointerTarget<transport.NewStreamError>(nse)
			if (!ok) {
				// Unexpected.
				return err
			}

			if ((nse$ as transport.NewStreamError).AllowTransparentRetry) {
				;(a$ as csAttempt).allowTransparentRetry = true
			}

			// Unwrap and convert error.
			return __goscript_rpc_util.toRPCErr((nse$ as transport.NewStreamError).Err)
		}
		;(a$ as csAttempt).s = s;
		;(a$ as csAttempt).ctx = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as transport.Stream).Context() : transport.Stream.prototype.Context.call(s));
		;(a$ as csAttempt).p = new __goscript_rpc_util.parser({r: $.interfaceValue<__goscript_rpc_util.streamReader | null>(s, "*transport.Stream", /* @__PURE__ */ $.pointerType("transport.Stream")), bufferPool: $.pointerValue<__goscript_clientconn.ClientConn>($.pointerValue<clientStream>((a$ as csAttempt).cs).cc).dopts.copts.BufferPool})
		return null
	}

	public async recvMsg(m: any, payInfo: __goscript_rpc_util.payloadInfo | $.VarRef<__goscript_rpc_util.payloadInfo> | null): globalThis.Promise<$.GoError> {
		let a: csAttempt | $.VarRef<csAttempt> | null = this;
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const a$: csAttempt = a == null ? $.pointerTarget<csAttempt>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<csAttempt>(a)
		let cs: clientStream | $.VarRef<clientStream> | null = (a$ as csAttempt).cs
		let cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		if (($.sliceLen((a$ as csAttempt).statsHandlers) != 0) && (payInfo == null)) {
			payInfo = new __goscript_rpc_util.payloadInfo()
			const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.free())($.pointerValue<__goscript_rpc_util.payloadInfo>(payInfo)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc.(*payloadInfo).free-fm")
			__defer.defer(async () => { await __goscriptDeferCallee1() })
		}

		if (!(a$ as csAttempt).decompSet) {
			// Block until we receive headers containing received message encoding.
			{
				let ct = await transport.Stream.prototype.RecvCompress.call((a$ as csAttempt).s)
				if ((!$.stringEqual(ct, "")) && (!$.stringEqual(ct, encoding.Identity))) {
					if (((a$ as csAttempt).dc == null) || (!$.stringEqual((__goscriptAwait = $.pointerValue<Exclude<__goscript_rpc_util.Decompressor, null>>((a$ as csAttempt).dc).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), ct))) {
						// No configured decompressor, or it does not match the incoming
						// message encoding; attempt to find a registered compressor that does.
						;(a$ as csAttempt).dc = null;
						;(a$ as csAttempt).decomp = encoding.GetCompressor(ct)
					}
				} else {
					// No compression is used; disable our decompressor.
					;(a$ as csAttempt).dc = null
				}
			}
			// Only initialize this state once per stream.
			;(a$ as csAttempt).decompSet = true
		}
		{
			let __goscriptShadow17 = await __goscript_rpc_util.recv((a$ as csAttempt).p, (cs$ as clientStream).codec, (a$ as csAttempt).s, (a$ as csAttempt).dc, m, $.pointerValue<number>($.pointerValue<__goscript_rpc_util.callInfo>((cs$ as clientStream).callInfo).maxReceiveMessageSize), payInfo, (a$ as csAttempt).decomp, false)
			if (__goscriptShadow17 != null) {
				if ($.comparableEqual(__goscriptShadow17, io.EOF)) {
					{
						let statusErr = istatus.Status.prototype.Err.call(transport.Stream.prototype.Status.call((a$ as csAttempt).s))
						if (statusErr != null) {
							const __goscriptReturn16: $.GoError = statusErr
							err = __goscriptReturn16
							await __defer.dispose()
							return err
						}
					}
					const __goscriptReturn17: $.GoError = io.EOF
					err = __goscriptReturn17
					await __defer.dispose()
					return err
				}

				const __goscriptReturn18: $.GoError = await __goscript_rpc_util.toRPCErr(__goscriptShadow17)
				err = __goscriptReturn18
				await __defer.dispose()
				return err
			}
		}
		if ((a$ as csAttempt).trInfo != null) {
			await (a$ as csAttempt).mu.Lock()
			if ($.pointerValue<__goscript_trace.traceInfo>((a$ as csAttempt).trInfo).tr != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>((a$ as csAttempt).trInfo).tr).LazyLog($.interfaceValue<fmt.Stringer | null>(new __goscript_trace.payload({sent: false, msg: m}), "*grpc.payload", /* @__PURE__ */ $.pointerType("grpc.payload")), true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			void (a$ as csAttempt).mu.Unlock()
		}
		for (let __goscriptRangeTarget15 = (a$ as csAttempt).statsHandlers, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow15.length; __rangeIndex++) {
			let sh = (__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + __rangeIndex] as stats.Handler | null)
			void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleRPC((a$ as csAttempt).ctx, $.interfaceValue<stats.RPCStats | null>((() => { const __goscriptLiteralField6 = $.markAsStructValue($.cloneStructValue(time.Now())); const __goscriptLiteralField7 = mem.BufferSlice_Len($.pointerValue<__goscript_rpc_util.payloadInfo>(payInfo).uncompressedBytes); return new stats.InPayload({Client: true, RecvTime: __goscriptLiteralField6, Payload: m, WireLength: $.pointerValue<__goscript_rpc_util.payloadInfo>(payInfo).compressedLength + 5, CompressedLength: $.pointerValue<__goscript_rpc_util.payloadInfo>(payInfo).compressedLength, Length: __goscriptLiteralField7}) })(), "*stats.InPayload", /* @__PURE__ */ $.pointerType("stats.InPayload"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if (channelz.IsOn()) {
			void (__goscriptAwait = $.pointerValue<Exclude<transport.ClientTransport, null>>((a$ as csAttempt).t).IncrMsgRecv(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ($.pointerValue<StreamDesc>((cs$ as clientStream).desc).ServerStreams) {
			// Subsequent messages should be received by subsequent RecvMsg calls.
			const __goscriptReturn19: $.GoError = null
			err = __goscriptReturn19
			await __defer.dispose()
			return err
		}
		// Special handling for non-server-stream rpcs.
		// This recv expects EOF or errors, so we don't collect inPayload.
		{
			let __goscriptShadow18 = await __goscript_rpc_util.recv((a$ as csAttempt).p, (cs$ as clientStream).codec, (a$ as csAttempt).s, (a$ as csAttempt).dc, m, $.pointerValue<number>($.pointerValue<__goscript_rpc_util.callInfo>((cs$ as clientStream).callInfo).maxReceiveMessageSize), null, (a$ as csAttempt).decomp, false)
			if ($.comparableEqual(__goscriptShadow18, io.EOF)) {
				const __goscriptReturn20: $.GoError = istatus.Status.prototype.Err.call(transport.Stream.prototype.Status.call((a$ as csAttempt).s))
				err = __goscriptReturn20
				await __defer.dispose()
				return err
			} else {
				if (__goscriptShadow18 != null) {
					const __goscriptReturn21: $.GoError = await __goscript_rpc_util.toRPCErr(__goscriptShadow18)
					err = __goscriptReturn21
					await __defer.dispose()
					return err
				}
			}
		}
		const __goscriptReturn22: $.GoError = await __goscript_rpc_util.toRPCErr(errors.New("grpc: client streaming protocol violation: get <nil>, want <EOF>"))
		err = __goscriptReturn22
		await __defer.dispose()
		return err
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async sendMsg(m: any, hdr: $.Slice<number>, payld: mem.BufferSlice, dataLength: number, payloadLength: number): globalThis.Promise<$.GoError> {
		const a: csAttempt | $.VarRef<csAttempt> | null = this;
		const a$: csAttempt = a == null ? $.pointerTarget<csAttempt>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<csAttempt>(a)
		let cs: clientStream | $.VarRef<clientStream> | null = (a$ as csAttempt).cs
		let cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
		if ((a$ as csAttempt).trInfo != null) {
			await (a$ as csAttempt).mu.Lock()
			if ($.pointerValue<__goscript_trace.traceInfo>((a$ as csAttempt).trInfo).tr != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>((a$ as csAttempt).trInfo).tr).LazyLog($.interfaceValue<fmt.Stringer | null>(new __goscript_trace.payload({sent: true, msg: m}), "*grpc.payload", /* @__PURE__ */ $.pointerType("grpc.payload")), true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			void (a$ as csAttempt).mu.Unlock()
		}
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<transport.ClientTransport, null>>((a$ as csAttempt).t).Write((a$ as csAttempt).s, hdr, (payld as mem.BufferSlice), new transport.Options({Last: !$.pointerValue<StreamDesc>((cs$ as clientStream).desc).ClientStreams})), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				if (!$.pointerValue<StreamDesc>((cs$ as clientStream).desc).ClientStreams) {
					// For non-client-streaming RPCs, we return nil instead of EOF on error
					// because the generated code requires it.  finish is not called; RecvMsg()
					// will call it with the stream's status independently.
					return null
				}
				return io.EOF
			}
		}
		if ($.sliceLen((a$ as csAttempt).statsHandlers) != 0) {
			for (let __goscriptRangeTarget16 = (a$ as csAttempt).statsHandlers, __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow16.length; __rangeIndex++) {
				let sh = (__goscriptRangeWindow16.backing[__goscriptRangeWindow16.offset + __rangeIndex] as stats.Handler | null)
				void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleRPC((a$ as csAttempt).ctx, $.interfaceValue<stats.RPCStats | null>(__goscript_rpc_util.outPayload(true, m, dataLength, payloadLength, time.Now()), "*stats.OutPayload", /* @__PURE__ */ $.pointerType("stats.OutPayload"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		if (channelz.IsOn()) {
			void (__goscriptAwait = $.pointerValue<Exclude<transport.ClientTransport, null>>((a$ as csAttempt).t).IncrMsgSent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return null
	}

	public async shouldRetry(err: $.GoError): globalThis.Promise<[boolean, $.GoError]> {
		const a: csAttempt | $.VarRef<csAttempt> | null = this;
		const a$: csAttempt = a == null ? $.pointerTarget<csAttempt>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<csAttempt>(a)
		let cs: clientStream | $.VarRef<clientStream> | null = (a$ as csAttempt).cs
		let cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)

		if (((cs$ as clientStream).finished || (cs$ as clientStream).committed) || (a$ as csAttempt).drop) {
			// RPC is finished or committed or was dropped by the picker; cannot retry.
			return [false, err]
		}
		if (((a$ as csAttempt).s == null) && (a$ as csAttempt).allowTransparentRetry) {
			return [true, null]
		}
		// Wait for the trailers.
		let unprocessed = false
		if ((a$ as csAttempt).s != null) {
			await $.chanRecv(transport.Stream.prototype.Done.call((a$ as csAttempt).s))
			unprocessed = transport.Stream.prototype.Unprocessed.call((a$ as csAttempt).s)
		}
		if ((cs$ as clientStream).firstAttempt && unprocessed) {
			// First attempt, stream unprocessed: transparently retry.
			return [true, null]
		}
		if ($.pointerValue<__goscript_clientconn.ClientConn>((cs$ as clientStream).cc).dopts.disableRetry) {
			return [false, err]
		}

		let pushback = 0
		let hasPushback = false
		if ((a$ as csAttempt).s != null) {
			if (!await transport.Stream.prototype.TrailersOnly.call((a$ as csAttempt).s)) {
				return [false, err]
			}

			// TODO(retry): Move down if the spec changes to not check server pushback
			// before considering this a failure for throttling.
			let sps: $.Slice<string> = $.mapGet<string, $.Slice<string>, $.Slice<string>>(transport.Stream.prototype.Trailer.call((a$ as csAttempt).s), "grpc-retry-pushback-ms", null)[0]
			if ($.sliceLen(sps) == 1) {
				let e: $.GoError = null! as $.GoError
				{
					let __goscriptTuple16: any = strconv.Atoi($.arrayIndex(sps!, 0))
					pushback = __goscriptTuple16[0]
					e = __goscriptTuple16[1]
					if ((e != null) || (pushback < 0)) {
						await channelz.Infof(__goscript_server.logger, $.interfaceValue<channelz.Entity | null>($.pointerValue<__goscript_clientconn.ClientConn>((cs$ as clientStream).cc).channelz, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel")), "Server retry pushback specified to abort (%q).", $.arrayToSlice<any>([$.arrayIndex(sps!, 0)]))
						await __goscript_clientconn.retryThrottler.prototype.throttle.call((cs$ as clientStream).retryThrottler)
						return [false, err]
					}
				}
				hasPushback = true
			} else {
				if ($.sliceLen(sps) > 1) {
					await channelz.Warningf(__goscript_server.logger, $.interfaceValue<channelz.Entity | null>($.pointerValue<__goscript_clientconn.ClientConn>((cs$ as clientStream).cc).channelz, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel")), "Server retry pushback specified multiple values (%q); not retrying.", $.arrayToSlice<any>([$.interfaceValue(sps, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))]))
					await __goscript_clientconn.retryThrottler.prototype.throttle.call((cs$ as clientStream).retryThrottler)
					return [false, err]
				}
			}
		}

		let code: codes.Code = 0
		if ((a$ as csAttempt).s != null) {
			code = istatus.Status.prototype.Code.call(transport.Stream.prototype.Status.call((a$ as csAttempt).s))
		} else {
			code = await status.Code(err)
		}

		let rp: serviceconfig.RetryPolicy | $.VarRef<serviceconfig.RetryPolicy> | null = $.pointerValue<__goscript_service_config.MethodConfig>((cs$ as clientStream).methodConfig).RetryPolicy
		let rp$: serviceconfig.RetryPolicy = rp == null ? $.pointerTarget<serviceconfig.RetryPolicy>(rp) : (rp as any).__isVarRef === true ? (rp as any).value : (rp as any).__goValue === undefined ? (rp as any) : $.pointerTarget<serviceconfig.RetryPolicy>(rp)
		if ((rp == null) || !$.mapGet<codes.Code, boolean, boolean>((rp$ as serviceconfig.RetryPolicy).RetryableStatusCodes, code, false)[0]) {
			return [false, err]
		}

		// Note: the ordering here is important; we count this as a failure
		// only if the code matched a retryable code.
		if (await __goscript_clientconn.retryThrottler.prototype.throttle.call((cs$ as clientStream).retryThrottler)) {
			return [false, err]
		}
		if (((cs$ as clientStream).numRetries + 1) >= (rp$ as serviceconfig.RetryPolicy).MaxAttempts) {
			return [false, err]
		}

		let dur: time.Duration = 0n
		if (hasPushback) {
			dur = $.int64Mul(1000000n, $.int64(pushback));
			;(cs$ as clientStream).numRetriesSincePushback = 0
		} else {
			let fact = math.Pow((rp$ as serviceconfig.RetryPolicy).BackoffMultiplier, (cs$ as clientStream).numRetriesSincePushback)
			let cur = globalThis.Number((rp$ as serviceconfig.RetryPolicy).InitialBackoff) * fact
			{
				let max = globalThis.Number((rp$ as serviceconfig.RetryPolicy).MaxBackoff)
				if (cur > max) {
					cur = max
				}
			}
			dur = $.int64(await rand.Int63n($.int64(cur)));
			;(cs$ as clientStream).numRetriesSincePushback++
		}

		// TODO(dfawley): we could eagerly fail here if dur puts us past the
		// deadline, but unsure if it is worth doing.
		let t: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer(dur)
		const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, [boolean, $.GoError]>([
			{
				id: 0,
				isSend: false,
				channel: $.pointerValue<time.Timer>(t).C,
				onSelected: async (__goscriptSelect1Result) => {
					;(cs$ as clientStream).numRetries++
					return [false, null]
				}
			},
			{
				id: 1,
				isSend: false,
				channel: ((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((cs$ as clientStream).ctx).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect1Result) => {
					time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(t))
					return [false, istatus.Status.prototype.Err.call(await status.FromContextError((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((cs$ as clientStream).ctx).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
				}
			}
		], false)
		if (__goscriptSelect1HasReturn) {
			return __goscriptSelect1Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"grpc.csAttempt",
		() => new csAttempt(),
		() => [$.methodSignature("finish", [["err", "error"]], [], true), $.methodSignature("getTransport", [], ["error"], true), $.methodSignature("newStream", [], ["error"], true), $.methodSignature("recvMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }], ["payInfo", /* @__PURE__ */ $.pointerType("grpc.payloadInfo")]], [["err", "error"]], true), $.methodSignature("sendMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }], ["hdr", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["payld", /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice")], ["dataLength", /* @__PURE__ */ $.basicType("int")], ["payloadLength", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("shouldRetry", [["err", "error"]], [/* @__PURE__ */ $.basicType("bool"), "error"], true)],
		csAttempt,
		() => [/* @__PURE__ */ $.structField("ctx", "context.Context", [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("cs", /* @__PURE__ */ $.pointerType("grpc.clientStream"), [1], 16, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("t", "transport.ClientTransport", [2], 24, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.pointerType("transport.Stream"), [3], 40, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("p", /* @__PURE__ */ $.pointerType("grpc.parser"), [4], 48, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("pickResult", "balancer.PickResult", [5], 56, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("finished", /* @__PURE__ */ $.basicType("bool"), [6], 88, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("dc", "grpc.Decompressor", [7], 96, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("decomp", "encoding.Compressor", [8], 112, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("decompSet", /* @__PURE__ */ $.basicType("bool"), [9], 128, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [10], 132, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("trInfo", /* @__PURE__ */ $.pointerType("grpc.traceInfo"), [11], 144, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("statsHandlers", /* @__PURE__ */ $.sliceType("stats.Handler"), [12], 152, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("beginTime", "time.Time", [13], 176, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("allowTransparentRetry", /* @__PURE__ */ $.basicType("bool"), [14], 200, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("drop", /* @__PURE__ */ $.basicType("bool"), [15], 201, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class addrConnStream {
	public get s(): transport.Stream | $.VarRef<transport.Stream> | null {
		return this._fields.s
	}

	public set s(value: transport.Stream | $.VarRef<transport.Stream> | null) {
		this._fields.s = value
	}

	public get ac(): __goscript_clientconn.addrConn | $.VarRef<__goscript_clientconn.addrConn> | null {
		return this._fields.ac
	}

	public set ac(value: __goscript_clientconn.addrConn | $.VarRef<__goscript_clientconn.addrConn> | null) {
		this._fields.ac = value
	}

	public get callHdr(): transport.CallHdr | $.VarRef<transport.CallHdr> | null {
		return this._fields.callHdr
	}

	public set callHdr(value: transport.CallHdr | $.VarRef<transport.CallHdr> | null) {
		this._fields.callHdr = value
	}

	public get cancel(): (() => void) | null {
		return this._fields.cancel
	}

	public set cancel(value: (() => void) | null) {
		this._fields.cancel = value
	}

	public get opts(): $.Slice<__goscript_rpc_util.CallOption | null> {
		return this._fields.opts
	}

	public set opts(value: $.Slice<__goscript_rpc_util.CallOption | null>) {
		this._fields.opts = value
	}

	public get callInfo(): __goscript_rpc_util.callInfo | $.VarRef<__goscript_rpc_util.callInfo> | null {
		return this._fields.callInfo
	}

	public set callInfo(value: __goscript_rpc_util.callInfo | $.VarRef<__goscript_rpc_util.callInfo> | null) {
		this._fields.callInfo = value
	}

	public get t(): transport.ClientTransport | null {
		return this._fields.t
	}

	public set t(value: transport.ClientTransport | null) {
		this._fields.t = value
	}

	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get sentLast(): boolean {
		return this._fields.sentLast
	}

	public set sentLast(value: boolean) {
		this._fields.sentLast = value
	}

	public get desc(): StreamDesc | $.VarRef<StreamDesc> | null {
		return this._fields.desc
	}

	public set desc(value: StreamDesc | $.VarRef<StreamDesc> | null) {
		this._fields.desc = value
	}

	public get codec(): __goscript_codec.baseCodec | null {
		return this._fields.codec
	}

	public set codec(value: __goscript_codec.baseCodec | null) {
		this._fields.codec = value
	}

	public get cp(): __goscript_rpc_util.Compressor | null {
		return this._fields.cp
	}

	public set cp(value: __goscript_rpc_util.Compressor | null) {
		this._fields.cp = value
	}

	public get comp(): encoding.Compressor | null {
		return this._fields.comp
	}

	public set comp(value: encoding.Compressor | null) {
		this._fields.comp = value
	}

	public get decompSet(): boolean {
		return this._fields.decompSet
	}

	public set decompSet(value: boolean) {
		this._fields.decompSet = value
	}

	public get dc(): __goscript_rpc_util.Decompressor | null {
		return this._fields.dc
	}

	public set dc(value: __goscript_rpc_util.Decompressor | null) {
		this._fields.dc = value
	}

	public get decomp(): encoding.Compressor | null {
		return this._fields.decomp
	}

	public set decomp(value: encoding.Compressor | null) {
		this._fields.decomp = value
	}

	public get p(): __goscript_rpc_util.parser | $.VarRef<__goscript_rpc_util.parser> | null {
		return this._fields.p
	}

	public set p(value: __goscript_rpc_util.parser | $.VarRef<__goscript_rpc_util.parser> | null) {
		this._fields.p = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get finished(): boolean {
		return this._fields.finished
	}

	public set finished(value: boolean) {
		this._fields.finished = value
	}

	public _fields: {
		s: transport.Stream | $.VarRef<transport.Stream> | null
		ac: __goscript_clientconn.addrConn | $.VarRef<__goscript_clientconn.addrConn> | null
		callHdr: transport.CallHdr | $.VarRef<transport.CallHdr> | null
		cancel: (() => void) | null
		opts: $.Slice<__goscript_rpc_util.CallOption | null>
		callInfo: __goscript_rpc_util.callInfo | $.VarRef<__goscript_rpc_util.callInfo> | null
		t: transport.ClientTransport | null
		ctx: context.Context | null
		sentLast: boolean
		desc: StreamDesc | $.VarRef<StreamDesc> | null
		codec: __goscript_codec.baseCodec | null
		cp: __goscript_rpc_util.Compressor | null
		comp: encoding.Compressor | null
		decompSet: boolean
		dc: __goscript_rpc_util.Decompressor | null
		decomp: encoding.Compressor | null
		p: __goscript_rpc_util.parser | $.VarRef<__goscript_rpc_util.parser> | null
		mu: sync.Mutex
		finished: boolean
	}

	constructor(init?: Partial<{s?: transport.Stream | $.VarRef<transport.Stream> | null, ac?: __goscript_clientconn.addrConn | $.VarRef<__goscript_clientconn.addrConn> | null, callHdr?: transport.CallHdr | $.VarRef<transport.CallHdr> | null, cancel?: (() => void) | null, opts?: $.Slice<__goscript_rpc_util.CallOption | null>, callInfo?: __goscript_rpc_util.callInfo | $.VarRef<__goscript_rpc_util.callInfo> | null, t?: transport.ClientTransport | null, ctx?: context.Context | null, sentLast?: boolean, desc?: StreamDesc | $.VarRef<StreamDesc> | null, codec?: __goscript_codec.baseCodec | null, cp?: __goscript_rpc_util.Compressor | null, comp?: encoding.Compressor | null, decompSet?: boolean, dc?: __goscript_rpc_util.Decompressor | null, decomp?: encoding.Compressor | null, p?: __goscript_rpc_util.parser | $.VarRef<__goscript_rpc_util.parser> | null, mu?: sync.Mutex, finished?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			s: init?.s ?? (null! as transport.Stream | $.VarRef<transport.Stream> | null),
			ac: init?.ac ?? (null! as __goscript_clientconn.addrConn | $.VarRef<__goscript_clientconn.addrConn> | null),
			callHdr: init?.callHdr ?? (null! as transport.CallHdr | $.VarRef<transport.CallHdr> | null),
			cancel: init?.cancel ?? (null! as (() => void) | null),
			opts: init?.opts ?? (null! as $.Slice<__goscript_rpc_util.CallOption | null>),
			callInfo: init?.callInfo ?? (null! as __goscript_rpc_util.callInfo | $.VarRef<__goscript_rpc_util.callInfo> | null),
			t: init?.t ?? (null! as transport.ClientTransport | null),
			ctx: init?.ctx ?? (null! as context.Context | null),
			sentLast: init?.sentLast ?? (false as boolean),
			desc: init?.desc ?? (null! as StreamDesc | $.VarRef<StreamDesc> | null),
			codec: init?.codec ?? (null! as __goscript_codec.baseCodec | null),
			cp: init?.cp ?? (null! as __goscript_rpc_util.Compressor | null),
			comp: init?.comp ?? (null! as encoding.Compressor | null),
			decompSet: init?.decompSet ?? (false as boolean),
			dc: init?.dc ?? (null! as __goscript_rpc_util.Decompressor | null),
			decomp: init?.decomp ?? (null! as encoding.Compressor | null),
			p: init?.p ?? (null! as __goscript_rpc_util.parser | $.VarRef<__goscript_rpc_util.parser> | null),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			finished: init?.finished ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): addrConnStream {
		return new addrConnStream(this, true)
	}

	public __goscriptAssign(source: addrConnStream): void {
		const target = this._fields
		const values = source._fields
		target.s = values.s
		target.ac = values.ac
		target.callHdr = values.callHdr
		target.cancel = values.cancel
		target.opts = values.opts
		target.callInfo = values.callInfo
		target.t = $.assignFieldValue(target.t, values.t, "transport.ClientTransport")
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.sentLast = values.sentLast
		target.desc = values.desc
		target.codec = $.assignFieldValue(target.codec, values.codec, "grpc.baseCodec")
		target.cp = $.assignFieldValue(target.cp, values.cp, "grpc.Compressor")
		target.comp = $.assignFieldValue(target.comp, values.comp, "encoding.Compressor")
		target.decompSet = values.decompSet
		target.dc = $.assignFieldValue(target.dc, values.dc, "grpc.Decompressor")
		target.decomp = $.assignFieldValue(target.decomp, values.decomp, "encoding.Compressor")
		target.p = values.p
		$.assignStruct(target.mu, values.mu)
		target.finished = values.finished
	}

	public async CloseSend(): globalThis.Promise<$.GoError> {
		let _as: addrConnStream | $.VarRef<addrConnStream> | null = this;
		const _as$: addrConnStream = _as == null ? $.pointerTarget<addrConnStream>(_as) : (_as as any).__isVarRef === true ? (_as as any).value : (_as as any).__goValue === undefined ? (_as as any) : $.pointerTarget<addrConnStream>(_as)
		if ((_as$ as addrConnStream).sentLast) {
			// TODO: return an error and finish the stream instead, due to API misuse?
			return null
		}
		;(_as$ as addrConnStream).sentLast = true

		void (__goscriptAwait = $.pointerValue<Exclude<transport.ClientTransport, null>>((_as$ as addrConnStream).t).Write((_as$ as addrConnStream).s, null, (null as mem.BufferSlice), new transport.Options({Last: true})), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		// Always return nil; io.EOF is the only error that might make sense
		// instead, but there is no need to signal the client to call RecvMsg
		// as the only use left for the stream after CloseSend is to call
		// RecvMsg.  This also matches historical behavior.
		return null
	}

	public Context(): context.Context | null {
		const _as: addrConnStream | $.VarRef<addrConnStream> | null = this;
		return transport.Stream.prototype.Context.call($.pointerValue<addrConnStream>(_as).s)
	}

	public async Header(): globalThis.Promise<[metadata.MD, $.GoError]> {
		const _as: addrConnStream | $.VarRef<addrConnStream> | null = this;
		let __goscriptTuple19: any = await transport.Stream.prototype.Header.call($.pointerValue<addrConnStream>(_as).s)
		let m: metadata.MD = __goscriptTuple19[0]
		let err = __goscriptTuple19[1]
		if (err != null) {
			await (_as !== null && (_as as any).__isVarRef !== true && (_as as any).__goValue === undefined ? ((_as as any) as addrConnStream).finish(await __goscript_rpc_util.toRPCErr(err)) : addrConnStream.prototype.finish.call(_as, await __goscript_rpc_util.toRPCErr(err)))
		}
		return [m, err]
	}

	public async RecvMsg(m: any): globalThis.Promise<$.GoError> {
		let _as: addrConnStream | $.VarRef<addrConnStream> | null = this;
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const _as$: addrConnStream = _as == null ? $.pointerTarget<addrConnStream>(_as) : (_as as any).__isVarRef === true ? (_as as any).value : (_as as any).__goValue === undefined ? (_as as any) : $.pointerTarget<addrConnStream>(_as)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			if ((err != null) || !$.pointerValue<StreamDesc>((_as$ as addrConnStream).desc).ServerStreams) {
				// err != nil or non-server-streaming indicates end of stream.
				await (_as !== null && (_as as any).__isVarRef !== true && (_as as any).__goValue === undefined ? ((_as as any) as addrConnStream).finish(err) : addrConnStream.prototype.finish.call(_as, err))
			}
		})() })

		if (!(_as$ as addrConnStream).decompSet) {
			// Block until we receive headers containing received message encoding.
			{
				let ct = await transport.Stream.prototype.RecvCompress.call((_as$ as addrConnStream).s)
				if ((!$.stringEqual(ct, "")) && (!$.stringEqual(ct, encoding.Identity))) {
					if (((_as$ as addrConnStream).dc == null) || (!$.stringEqual((__goscriptAwait = $.pointerValue<Exclude<__goscript_rpc_util.Decompressor, null>>((_as$ as addrConnStream).dc).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), ct))) {
						// No configured decompressor, or it does not match the incoming
						// message encoding; attempt to find a registered compressor that does.
						;(_as$ as addrConnStream).dc = null;
						;(_as$ as addrConnStream).decomp = encoding.GetCompressor(ct)
					}
				} else {
					// No compression is used; disable our decompressor.
					;(_as$ as addrConnStream).dc = null
				}
			}
			// Only initialize this state once per stream.
			;(_as$ as addrConnStream).decompSet = true
		}
		{
			let __goscriptShadow21 = await __goscript_rpc_util.recv((_as$ as addrConnStream).p, (_as$ as addrConnStream).codec, (_as$ as addrConnStream).s, (_as$ as addrConnStream).dc, m, $.pointerValue<number>($.pointerValue<__goscript_rpc_util.callInfo>((_as$ as addrConnStream).callInfo).maxReceiveMessageSize), null, (_as$ as addrConnStream).decomp, false)
			if (__goscriptShadow21 != null) {
				if ($.comparableEqual(__goscriptShadow21, io.EOF)) {
					{
						let statusErr = istatus.Status.prototype.Err.call(transport.Stream.prototype.Status.call((_as$ as addrConnStream).s))
						if (statusErr != null) {
							const __goscriptReturn28: $.GoError = statusErr
							err = __goscriptReturn28
							await __defer.dispose()
							return err
						}
					}
					const __goscriptReturn29: $.GoError = io.EOF
					err = __goscriptReturn29
					await __defer.dispose()
					return err
				}
				const __goscriptReturn30: $.GoError = await __goscript_rpc_util.toRPCErr(__goscriptShadow21)
				err = __goscriptReturn30
				await __defer.dispose()
				return err
			}
		}

		if (channelz.IsOn()) {
			void (__goscriptAwait = $.pointerValue<Exclude<transport.ClientTransport, null>>((_as$ as addrConnStream).t).IncrMsgRecv(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ($.pointerValue<StreamDesc>((_as$ as addrConnStream).desc).ServerStreams) {
			// Subsequent messages should be received by subsequent RecvMsg calls.
			const __goscriptReturn31: $.GoError = null
			err = __goscriptReturn31
			await __defer.dispose()
			return err
		}

		// Special handling for non-server-stream rpcs.
		// This recv expects EOF or errors, so we don't collect inPayload.
		{
			let __goscriptShadow22 = await __goscript_rpc_util.recv((_as$ as addrConnStream).p, (_as$ as addrConnStream).codec, (_as$ as addrConnStream).s, (_as$ as addrConnStream).dc, m, $.pointerValue<number>($.pointerValue<__goscript_rpc_util.callInfo>((_as$ as addrConnStream).callInfo).maxReceiveMessageSize), null, (_as$ as addrConnStream).decomp, false)
			if ($.comparableEqual(__goscriptShadow22, io.EOF)) {
				const __goscriptReturn32: $.GoError = istatus.Status.prototype.Err.call(transport.Stream.prototype.Status.call((_as$ as addrConnStream).s))
				err = __goscriptReturn32
				await __defer.dispose()
				return err
			} else {
				if (__goscriptShadow22 != null) {
					const __goscriptReturn33: $.GoError = await __goscript_rpc_util.toRPCErr(__goscriptShadow22)
					err = __goscriptReturn33
					await __defer.dispose()
					return err
				}
			}
		}
		const __goscriptReturn34: $.GoError = await __goscript_rpc_util.toRPCErr(errors.New("grpc: client streaming protocol violation: get <nil>, want <EOF>"))
		err = __goscriptReturn34
		await __defer.dispose()
		return err
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async SendMsg(m: any): globalThis.Promise<$.GoError> {
		let _as: addrConnStream | $.VarRef<addrConnStream> | null = this;
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const _as$: addrConnStream = _as == null ? $.pointerTarget<addrConnStream>(_as) : (_as as any).__isVarRef === true ? (_as as any).value : (_as as any).__goValue === undefined ? (_as as any) : $.pointerTarget<addrConnStream>(_as)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			if ((err != null) && (!$.comparableEqual(err, io.EOF))) {
				// Call finish on the client stream for errors generated by this SendMsg
				// call, as these indicate problems created by this client.  (Transport
				// errors are converted to an io.EOF error in csAttempt.sendMsg; the real
				// error will be returned from RecvMsg eventually in that case, or be
				// retried.)
				await (_as !== null && (_as as any).__isVarRef !== true && (_as as any).__goValue === undefined ? ((_as as any) as addrConnStream).finish(err) : addrConnStream.prototype.finish.call(_as, err))
			}
		})() })
		if ((_as$ as addrConnStream).sentLast) {
			const __goscriptReturn35: $.GoError = await status.Errorf(13, "SendMsg called after CloseSend", null)
			err = __goscriptReturn35
			await __defer.dispose()
			return err
		}
		if (!$.pointerValue<StreamDesc>((_as$ as addrConnStream).desc).ClientStreams) {
			;(_as$ as addrConnStream).sentLast = true
		}

		// load hdr, payload, data
		let __goscriptTuple20: any = await prepareMsg(m, (_as$ as addrConnStream).codec, (_as$ as addrConnStream).cp, (_as$ as addrConnStream).comp, $.pointerValue<__goscript_clientconn.addrConn>((_as$ as addrConnStream).ac).dopts.copts.BufferPool)
		let hdr: $.Slice<number> = __goscriptTuple20[0]
		let data: mem.BufferSlice = (__goscriptTuple20[1] as mem.BufferSlice)
		let __goscriptShadow23: mem.BufferSlice = (__goscriptTuple20[2] as mem.BufferSlice)
		let pf = __goscriptTuple20[3]
		err = __goscriptTuple20[4]
		if (err != null) {
			const __goscriptReturn36: $.GoError = err
			err = __goscriptReturn36
			await __defer.dispose()
			return err
		}

		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			await mem.BufferSlice_Free(data)
			// only free payload if compression was made, and therefore it is a different set
			// of buffers from data.
			if (__goscript_rpc_util.payloadFormat_isCompressed(pf)) {
				await mem.BufferSlice_Free(__goscriptShadow23)
			}
		})() })

		// TODO(dfawley): should we be checking len(data) instead?
		if (mem.BufferSlice_Len(__goscriptShadow23) > $.pointerValue<number>($.pointerValue<__goscript_rpc_util.callInfo>((_as$ as addrConnStream).callInfo).maxSendMessageSize)) {
			const __goscriptReturn37: $.GoError = await status.Errorf(8, "trying to send message larger than max (%d vs. %d)", $.arrayToSlice<any>([$.basicInterfaceValue(mem.BufferSlice_Len(__goscriptShadow23), "int"), $.basicInterfaceValue($.pointerValue<number>($.pointerValue<__goscript_rpc_util.callInfo>((_as$ as addrConnStream).callInfo).maxSendMessageSize), "int")]))
			err = __goscriptReturn37
			await __defer.dispose()
			return err
		}

		{
			let __goscriptShadow24 = (__goscriptAwait = $.pointerValue<Exclude<transport.ClientTransport, null>>((_as$ as addrConnStream).t).Write((_as$ as addrConnStream).s, hdr, (__goscriptShadow23 as mem.BufferSlice), new transport.Options({Last: !$.pointerValue<StreamDesc>((_as$ as addrConnStream).desc).ClientStreams})), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow24 != null) {
				if (!$.pointerValue<StreamDesc>((_as$ as addrConnStream).desc).ClientStreams) {
					// For non-client-streaming RPCs, we return nil instead of EOF on error
					// because the generated code requires it.  finish is not called; RecvMsg()
					// will call it with the stream's status independently.
					const __goscriptReturn38: $.GoError = null
					err = __goscriptReturn38
					await __defer.dispose()
					return err
				}
				const __goscriptReturn39: $.GoError = io.EOF
				err = __goscriptReturn39
				await __defer.dispose()
				return err
			}
		}

		if (channelz.IsOn()) {
			void (__goscriptAwait = $.pointerValue<Exclude<transport.ClientTransport, null>>((_as$ as addrConnStream).t).IncrMsgSent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		const __goscriptReturn40: $.GoError = null
		err = __goscriptReturn40
		await __defer.dispose()
		return err
		throw new globalThis.Error("goscript: unreachable return")
	}

	public Trailer(): metadata.MD {
		const _as: addrConnStream | $.VarRef<addrConnStream> | null = this;
		return transport.Stream.prototype.Trailer.call($.pointerValue<addrConnStream>(_as).s)
	}

	public async finish(err: $.GoError): globalThis.Promise<void> {
		let _as: addrConnStream | $.VarRef<addrConnStream> | null = this;
		const _as$: addrConnStream = _as == null ? $.pointerTarget<addrConnStream>(_as) : (_as as any).__isVarRef === true ? (_as as any).value : (_as as any).__goValue === undefined ? (_as as any) : $.pointerTarget<addrConnStream>(_as)
		await (_as$ as addrConnStream).mu.Lock()
		if ((_as$ as addrConnStream).finished) {
			void (_as$ as addrConnStream).mu.Unlock()
			return
		}
		;(_as$ as addrConnStream).finished = true
		if ($.comparableEqual(err, io.EOF)) {
			// Ending a stream with EOF indicates a success.
			err = null
		}
		if ((_as$ as addrConnStream).s != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<transport.ClientTransport, null>>((_as$ as addrConnStream).t).CloseStream((_as$ as addrConnStream).s, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		if (err != null) {
			__goscript_clientconn.addrConn.prototype.incrCallsFailed.call((_as$ as addrConnStream).ac)
		} else {
			__goscript_clientconn.addrConn.prototype.incrCallsSucceeded.call((_as$ as addrConnStream).ac)
		}
		void (__goscriptAwait = (_as$ as addrConnStream).cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (_as$ as addrConnStream).mu.Unlock()
	}

	static __typeInfo = $.registerStructType(
		"grpc.addrConnStream",
		() => new addrConnStream(),
		() => [$.methodSignature("CloseSend", [], ["error"], true), $.methodSignature("Context", [], ["context.Context"], true), $.methodSignature("Header", [], ["metadata.MD", "error"], true), $.methodSignature("RecvMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], [["err", "error"]], true), $.methodSignature("SendMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], [["err", "error"]], true), $.methodSignature("Trailer", [], ["metadata.MD"], true), $.methodSignature("finish", [["err", "error"]], [], true)],
		addrConnStream,
		() => [/* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.pointerType("transport.Stream"), [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("ac", /* @__PURE__ */ $.pointerType("grpc.addrConn"), [1], 8, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("callHdr", /* @__PURE__ */ $.pointerType("transport.CallHdr"), [2], 16, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("cancel", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), [3], 24, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("opts", /* @__PURE__ */ $.sliceType("grpc.CallOption"), [4], 32, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("callInfo", /* @__PURE__ */ $.pointerType("grpc.callInfo"), [5], 56, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("t", "transport.ClientTransport", [6], 64, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("ctx", "context.Context", [7], 80, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("sentLast", /* @__PURE__ */ $.basicType("bool"), [8], 96, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("grpc.StreamDesc"), [9], 104, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("codec", "grpc.baseCodec", [10], 112, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("cp", "grpc.Compressor", [11], 128, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("comp", "encoding.Compressor", [12], 144, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("decompSet", /* @__PURE__ */ $.basicType("bool"), [13], 160, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("dc", "grpc.Decompressor", [14], 168, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("decomp", "encoding.Compressor", [15], 184, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("p", /* @__PURE__ */ $.pointerType("grpc.parser"), [16], 200, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [17], 208, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("finished", /* @__PURE__ */ $.basicType("bool"), [18], 216, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class serverStream {
	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get t(): transport.ServerTransport | null {
		return this._fields.t
	}

	public set t(value: transport.ServerTransport | null) {
		this._fields.t = value
	}

	public get s(): transport.Stream | $.VarRef<transport.Stream> | null {
		return this._fields.s
	}

	public set s(value: transport.Stream | $.VarRef<transport.Stream> | null) {
		this._fields.s = value
	}

	public get p(): __goscript_rpc_util.parser | $.VarRef<__goscript_rpc_util.parser> | null {
		return this._fields.p
	}

	public set p(value: __goscript_rpc_util.parser | $.VarRef<__goscript_rpc_util.parser> | null) {
		this._fields.p = value
	}

	public get codec(): __goscript_codec.baseCodec | null {
		return this._fields.codec
	}

	public set codec(value: __goscript_codec.baseCodec | null) {
		this._fields.codec = value
	}

	public get cp(): __goscript_rpc_util.Compressor | null {
		return this._fields.cp
	}

	public set cp(value: __goscript_rpc_util.Compressor | null) {
		this._fields.cp = value
	}

	public get dc(): __goscript_rpc_util.Decompressor | null {
		return this._fields.dc
	}

	public set dc(value: __goscript_rpc_util.Decompressor | null) {
		this._fields.dc = value
	}

	public get comp(): encoding.Compressor | null {
		return this._fields.comp
	}

	public set comp(value: encoding.Compressor | null) {
		this._fields.comp = value
	}

	public get decomp(): encoding.Compressor | null {
		return this._fields.decomp
	}

	public set decomp(value: encoding.Compressor | null) {
		this._fields.decomp = value
	}

	public get sendCompressorName(): string {
		return this._fields.sendCompressorName
	}

	public set sendCompressorName(value: string) {
		this._fields.sendCompressorName = value
	}

	public get maxReceiveMessageSize(): number {
		return this._fields.maxReceiveMessageSize
	}

	public set maxReceiveMessageSize(value: number) {
		this._fields.maxReceiveMessageSize = value
	}

	public get maxSendMessageSize(): number {
		return this._fields.maxSendMessageSize
	}

	public set maxSendMessageSize(value: number) {
		this._fields.maxSendMessageSize = value
	}

	public get trInfo(): __goscript_trace.traceInfo | $.VarRef<__goscript_trace.traceInfo> | null {
		return this._fields.trInfo
	}

	public set trInfo(value: __goscript_trace.traceInfo | $.VarRef<__goscript_trace.traceInfo> | null) {
		this._fields.trInfo = value
	}

	public get statsHandler(): $.Slice<stats.Handler | null> {
		return this._fields.statsHandler
	}

	public set statsHandler(value: $.Slice<stats.Handler | null>) {
		this._fields.statsHandler = value
	}

	public get binlogs(): $.Slice<binarylog.MethodLogger | null> {
		return this._fields.binlogs
	}

	public set binlogs(value: $.Slice<binarylog.MethodLogger | null>) {
		this._fields.binlogs = value
	}

	// serverHeaderBinlogged indicates whether server header has been logged. It
	// will happen when one of the following two happens: stream.SendHeader(),
	// stream.Send().
	//
	// It's only checked in send and sendHeader, doesn't need to be
	// synchronized.
	public get serverHeaderBinlogged(): boolean {
		return this._fields.serverHeaderBinlogged
	}

	public set serverHeaderBinlogged(value: boolean) {
		this._fields.serverHeaderBinlogged = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public _fields: {
		ctx: context.Context | null
		t: transport.ServerTransport | null
		s: transport.Stream | $.VarRef<transport.Stream> | null
		p: __goscript_rpc_util.parser | $.VarRef<__goscript_rpc_util.parser> | null
		codec: __goscript_codec.baseCodec | null
		cp: __goscript_rpc_util.Compressor | null
		dc: __goscript_rpc_util.Decompressor | null
		comp: encoding.Compressor | null
		decomp: encoding.Compressor | null
		sendCompressorName: string
		maxReceiveMessageSize: number
		maxSendMessageSize: number
		trInfo: __goscript_trace.traceInfo | $.VarRef<__goscript_trace.traceInfo> | null
		statsHandler: $.Slice<stats.Handler | null>
		binlogs: $.Slice<binarylog.MethodLogger | null>
		serverHeaderBinlogged: boolean
		mu: sync.Mutex
	}

	constructor(init?: Partial<{ctx?: context.Context | null, t?: transport.ServerTransport | null, s?: transport.Stream | $.VarRef<transport.Stream> | null, p?: __goscript_rpc_util.parser | $.VarRef<__goscript_rpc_util.parser> | null, codec?: __goscript_codec.baseCodec | null, cp?: __goscript_rpc_util.Compressor | null, dc?: __goscript_rpc_util.Decompressor | null, comp?: encoding.Compressor | null, decomp?: encoding.Compressor | null, sendCompressorName?: string, maxReceiveMessageSize?: number, maxSendMessageSize?: number, trInfo?: __goscript_trace.traceInfo | $.VarRef<__goscript_trace.traceInfo> | null, statsHandler?: $.Slice<stats.Handler | null>, binlogs?: $.Slice<binarylog.MethodLogger | null>, serverHeaderBinlogged?: boolean, mu?: sync.Mutex}>, __goscriptValue?: boolean) {
		this._fields = {
			ctx: init?.ctx ?? (null! as context.Context | null),
			t: init?.t ?? (null! as transport.ServerTransport | null),
			s: init?.s ?? (null! as transport.Stream | $.VarRef<transport.Stream> | null),
			p: init?.p ?? (null! as __goscript_rpc_util.parser | $.VarRef<__goscript_rpc_util.parser> | null),
			codec: init?.codec ?? (null! as __goscript_codec.baseCodec | null),
			cp: init?.cp ?? (null! as __goscript_rpc_util.Compressor | null),
			dc: init?.dc ?? (null! as __goscript_rpc_util.Decompressor | null),
			comp: init?.comp ?? (null! as encoding.Compressor | null),
			decomp: init?.decomp ?? (null! as encoding.Compressor | null),
			sendCompressorName: init?.sendCompressorName ?? ("" as string),
			maxReceiveMessageSize: init?.maxReceiveMessageSize ?? (0 as number),
			maxSendMessageSize: init?.maxSendMessageSize ?? (0 as number),
			trInfo: init?.trInfo ?? (null! as __goscript_trace.traceInfo | $.VarRef<__goscript_trace.traceInfo> | null),
			statsHandler: init?.statsHandler ?? (null! as $.Slice<stats.Handler | null>),
			binlogs: init?.binlogs ?? (null! as $.Slice<binarylog.MethodLogger | null>),
			serverHeaderBinlogged: init?.serverHeaderBinlogged ?? (false as boolean),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex())
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
		target.t = $.assignFieldValue(target.t, values.t, "transport.ServerTransport")
		target.s = values.s
		target.p = values.p
		target.codec = $.assignFieldValue(target.codec, values.codec, "grpc.baseCodec")
		target.cp = $.assignFieldValue(target.cp, values.cp, "grpc.Compressor")
		target.dc = $.assignFieldValue(target.dc, values.dc, "grpc.Decompressor")
		target.comp = $.assignFieldValue(target.comp, values.comp, "encoding.Compressor")
		target.decomp = $.assignFieldValue(target.decomp, values.decomp, "encoding.Compressor")
		target.sendCompressorName = values.sendCompressorName
		target.maxReceiveMessageSize = values.maxReceiveMessageSize
		target.maxSendMessageSize = values.maxSendMessageSize
		target.trInfo = values.trInfo
		target.statsHandler = values.statsHandler
		target.binlogs = values.binlogs
		target.serverHeaderBinlogged = values.serverHeaderBinlogged
		$.assignStruct(target.mu, values.mu)
	}

	public Context(): context.Context | null {
		const ss: serverStream | $.VarRef<serverStream> | null = this;
		return $.pointerValue<serverStream>(ss).ctx
	}

	public async RecvMsg(m: any): globalThis.Promise<$.GoError> {
		const ss: serverStream | $.VarRef<serverStream> | null = this;
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const ss$: serverStream = ss == null ? $.pointerTarget<serverStream>(ss) : (ss as any).__isVarRef === true ? (ss as any).value : (ss as any).__goValue === undefined ? (ss as any) : $.pointerTarget<serverStream>(ss)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			if ((ss$ as serverStream).trInfo != null) {
				await (ss$ as serverStream).mu.Lock()
				if ($.pointerValue<__goscript_trace.traceInfo>((ss$ as serverStream).trInfo).tr != null) {
					if (err == null) {
						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>((ss$ as serverStream).trInfo).tr).LazyLog($.interfaceValue<fmt.Stringer | null>(new __goscript_trace.payload({sent: false, msg: m}), "*grpc.payload", /* @__PURE__ */ $.pointerType("grpc.payload")), true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					} else {
						if (!$.comparableEqual(err, io.EOF)) {
							void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>((ss$ as serverStream).trInfo).tr).LazyLog($.interfaceValue<fmt.Stringer | null>(new __goscript_trace.fmtStringer({format: "%v", a: $.arrayToSlice<any>([(err as any)])}), "*grpc.fmtStringer", /* @__PURE__ */ $.pointerType("grpc.fmtStringer")), true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>((ss$ as serverStream).trInfo).tr).SetError(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
					}
				}
				void (ss$ as serverStream).mu.Unlock()
			}
			if ((err != null) && (!$.comparableEqual(err, io.EOF))) {
				let __goscriptTuple21: any = await status.FromError(await __goscript_rpc_util.toRPCErr(err))
				let st: istatus.Status | $.VarRef<istatus.Status> | null = __goscriptTuple21[0]
				void (__goscriptAwait = $.pointerValue<Exclude<transport.ServerTransport, null>>((ss$ as serverStream).t).WriteStatus((ss$ as serverStream).s, st), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if (channelz.IsOn() && (err == null)) {
				void (__goscriptAwait = $.pointerValue<Exclude<transport.ServerTransport, null>>((ss$ as serverStream).t).IncrMsgRecv(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		})() })
		let payInfo: __goscript_rpc_util.payloadInfo | $.VarRef<__goscript_rpc_util.payloadInfo> | null = null! as __goscript_rpc_util.payloadInfo | $.VarRef<__goscript_rpc_util.payloadInfo> | null
		if (($.sliceLen((ss$ as serverStream).statsHandler) != 0) || ($.sliceLen((ss$ as serverStream).binlogs) != 0)) {
			payInfo = new __goscript_rpc_util.payloadInfo()
			const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.free())($.pointerValue<__goscript_rpc_util.payloadInfo>(payInfo)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc.(*payloadInfo).free-fm")
			__defer.defer(async () => { await __goscriptDeferCallee2() })
		}
		{
			let __goscriptShadow25 = await __goscript_rpc_util.recv((ss$ as serverStream).p, (ss$ as serverStream).codec, (ss$ as serverStream).s, (ss$ as serverStream).dc, m, (ss$ as serverStream).maxReceiveMessageSize, payInfo, (ss$ as serverStream).decomp, true)
			if (__goscriptShadow25 != null) {
				if ($.comparableEqual(__goscriptShadow25, io.EOF)) {
					if ($.sliceLen((ss$ as serverStream).binlogs) != 0) {
						let chc: binarylog.ClientHalfClose | $.VarRef<binarylog.ClientHalfClose> | null = new binarylog.ClientHalfClose()
						for (let __goscriptRangeTarget18 = (ss$ as serverStream).binlogs, __goscriptRangeWindow18 = $.sliceRange(__goscriptRangeTarget18), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow18.length; __rangeIndex++) {
							let binlog = (__goscriptRangeWindow18.backing[__goscriptRangeWindow18.offset + __rangeIndex] as binarylog.MethodLogger | null)
							void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log((ss$ as serverStream).ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(chc, "*binarylog.ClientHalfClose", /* @__PURE__ */ $.pointerType("binarylog.ClientHalfClose"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
					}
					const __goscriptReturn41: $.GoError = __goscriptShadow25
					err = __goscriptReturn41
					await __defer.dispose()
					return err
				}
				if ($.comparableEqual(__goscriptShadow25, io.ErrUnexpectedEOF)) {
					__goscriptShadow25 = await status.Errorf(13, (__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>(io.ErrUnexpectedEOF).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)
				}
				const __goscriptReturn42: $.GoError = await __goscript_rpc_util.toRPCErr(__goscriptShadow25)
				err = __goscriptReturn42
				await __defer.dispose()
				return err
			}
		}
		if ($.sliceLen((ss$ as serverStream).statsHandler) != 0) {
			for (let __goscriptRangeTarget19 = (ss$ as serverStream).statsHandler, __goscriptRangeWindow19 = $.sliceRange(__goscriptRangeTarget19), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow19.length; __rangeIndex++) {
				let sh = (__goscriptRangeWindow19.backing[__goscriptRangeWindow19.offset + __rangeIndex] as stats.Handler | null)
				void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleRPC(transport.Stream.prototype.Context.call((ss$ as serverStream).s), $.interfaceValue<stats.RPCStats | null>((() => { const __goscriptLiteralField8 = $.markAsStructValue($.cloneStructValue(time.Now())); const __goscriptLiteralField9 = mem.BufferSlice_Len($.pointerValue<__goscript_rpc_util.payloadInfo>(payInfo).uncompressedBytes); return new stats.InPayload({RecvTime: __goscriptLiteralField8, Payload: m, Length: __goscriptLiteralField9, WireLength: $.pointerValue<__goscript_rpc_util.payloadInfo>(payInfo).compressedLength + 5, CompressedLength: $.pointerValue<__goscript_rpc_util.payloadInfo>(payInfo).compressedLength}) })(), "*stats.InPayload", /* @__PURE__ */ $.pointerType("stats.InPayload"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		if ($.sliceLen((ss$ as serverStream).binlogs) != 0) {
			let cm: binarylog.ClientMessage | $.VarRef<binarylog.ClientMessage> | null = (() => { const __goscriptLiteralField10 = $.interfaceValue(mem.BufferSlice_Materialize($.pointerValue<__goscript_rpc_util.payloadInfo>(payInfo).uncompressedBytes), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))); return new binarylog.ClientMessage({Message: __goscriptLiteralField10}) })()
			for (let __goscriptRangeTarget20 = (ss$ as serverStream).binlogs, __goscriptRangeWindow20 = $.sliceRange(__goscriptRangeTarget20), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow20.length; __rangeIndex++) {
				let binlog = (__goscriptRangeWindow20.backing[__goscriptRangeWindow20.offset + __rangeIndex] as binarylog.MethodLogger | null)
				void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log((ss$ as serverStream).ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(cm, "*binarylog.ClientMessage", /* @__PURE__ */ $.pointerType("binarylog.ClientMessage"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		const __goscriptReturn43: $.GoError = null
		err = __goscriptReturn43
		await __defer.dispose()
		return err
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async SendHeader(md: metadata.MD): globalThis.Promise<$.GoError> {
		let ss: serverStream | $.VarRef<serverStream> | null = this;
		const ss$: serverStream = ss == null ? $.pointerTarget<serverStream>(ss) : (ss as any).__isVarRef === true ? (ss as any).value : (ss as any).__goValue === undefined ? (ss as any) : $.pointerTarget<serverStream>(ss)
		let err = imetadata.Validate(md)
		if (err != null) {
			return status.Error(13, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}

		err = (__goscriptAwait = $.pointerValue<Exclude<transport.ServerTransport, null>>((ss$ as serverStream).t).WriteHeader((ss$ as serverStream).s, md), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (($.sliceLen((ss$ as serverStream).binlogs) != 0) && !(ss$ as serverStream).serverHeaderBinlogged) {
			let __goscriptTuple22: any = await transport.Stream.prototype.Header.call((ss$ as serverStream).s)
			let h: metadata.MD = __goscriptTuple22[0]
			let sh: binarylog.ServerHeader | $.VarRef<binarylog.ServerHeader> | null = new binarylog.ServerHeader({Header: h});
			;(ss$ as serverStream).serverHeaderBinlogged = true
			for (let __goscriptRangeTarget21 = (ss$ as serverStream).binlogs, __goscriptRangeWindow21 = $.sliceRange(__goscriptRangeTarget21), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow21.length; __rangeIndex++) {
				let binlog = (__goscriptRangeWindow21.backing[__goscriptRangeWindow21.offset + __rangeIndex] as binarylog.MethodLogger | null)
				void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log((ss$ as serverStream).ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(sh, "*binarylog.ServerHeader", /* @__PURE__ */ $.pointerType("binarylog.ServerHeader"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return err
	}

	public async SendMsg(m: any): globalThis.Promise<$.GoError> {
		let ss: serverStream | $.VarRef<serverStream> | null = this;
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const ss$: serverStream = ss == null ? $.pointerTarget<serverStream>(ss) : (ss as any).__isVarRef === true ? (ss as any).value : (ss as any).__goValue === undefined ? (ss as any) : $.pointerTarget<serverStream>(ss)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			if ((ss$ as serverStream).trInfo != null) {
				await (ss$ as serverStream).mu.Lock()
				if ($.pointerValue<__goscript_trace.traceInfo>((ss$ as serverStream).trInfo).tr != null) {
					if (err == null) {
						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>((ss$ as serverStream).trInfo).tr).LazyLog($.interfaceValue<fmt.Stringer | null>(new __goscript_trace.payload({sent: true, msg: m}), "*grpc.payload", /* @__PURE__ */ $.pointerType("grpc.payload")), true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					} else {
						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>((ss$ as serverStream).trInfo).tr).LazyLog($.interfaceValue<fmt.Stringer | null>(new __goscript_trace.fmtStringer({format: "%v", a: $.arrayToSlice<any>([(err as any)])}), "*grpc.fmtStringer", /* @__PURE__ */ $.pointerType("grpc.fmtStringer")), true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>((ss$ as serverStream).trInfo).tr).SetError(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
				void (ss$ as serverStream).mu.Unlock()
			}
			if ((err != null) && (!$.comparableEqual(err, io.EOF))) {
				let __goscriptTuple23: any = await status.FromError(await __goscript_rpc_util.toRPCErr(err))
				let st: istatus.Status | $.VarRef<istatus.Status> | null = __goscriptTuple23[0]
				void (__goscriptAwait = $.pointerValue<Exclude<transport.ServerTransport, null>>((ss$ as serverStream).t).WriteStatus((ss$ as serverStream).s, st), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if (channelz.IsOn() && (err == null)) {
				void (__goscriptAwait = $.pointerValue<Exclude<transport.ServerTransport, null>>((ss$ as serverStream).t).IncrMsgSent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		})() })

		// Server handler could have set new compressor by calling SetSendCompressor.
		// In case it is set, we need to use it for compressing outbound message.
		{
			let sendCompressorsName = transport.Stream.prototype.SendCompress.call((ss$ as serverStream).s)
			if (!$.stringEqual(sendCompressorsName, (ss$ as serverStream).sendCompressorName)) {
				;(ss$ as serverStream).comp = encoding.GetCompressor(sendCompressorsName);
				;(ss$ as serverStream).sendCompressorName = sendCompressorsName
			}
		}

		// load hdr, payload, data
		let __goscriptTuple24: any = await prepareMsg(m, (ss$ as serverStream).codec, (ss$ as serverStream).cp, (ss$ as serverStream).comp, $.pointerValue<__goscript_rpc_util.parser>((ss$ as serverStream).p).bufferPool)
		let hdr: $.Slice<number> = __goscriptTuple24[0]
		let data: mem.BufferSlice = (__goscriptTuple24[1] as mem.BufferSlice)
		let __goscriptShadow26: mem.BufferSlice = (__goscriptTuple24[2] as mem.BufferSlice)
		let pf = __goscriptTuple24[3]
		err = __goscriptTuple24[4]
		if (err != null) {
			const __goscriptReturn44: $.GoError = err
			err = __goscriptReturn44
			await __defer.dispose()
			return err
		}

		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			await mem.BufferSlice_Free(data)
			// only free payload if compression was made, and therefore it is a different set
			// of buffers from data.
			if (__goscript_rpc_util.payloadFormat_isCompressed(pf)) {
				await mem.BufferSlice_Free(__goscriptShadow26)
			}
		})() })

		let dataLen = mem.BufferSlice_Len(data)
		let payloadLen = mem.BufferSlice_Len(__goscriptShadow26)

		// TODO(dfawley): should we be checking len(data) instead?
		if (payloadLen > (ss$ as serverStream).maxSendMessageSize) {
			const __goscriptReturn45: $.GoError = await status.Errorf(8, "trying to send message larger than max (%d vs. %d)", $.arrayToSlice<any>([$.basicInterfaceValue(payloadLen, "int"), $.basicInterfaceValue((ss$ as serverStream).maxSendMessageSize, "int")]))
			err = __goscriptReturn45
			await __defer.dispose()
			return err
		}
		{
			let __goscriptShadow27 = (__goscriptAwait = $.pointerValue<Exclude<transport.ServerTransport, null>>((ss$ as serverStream).t).Write((ss$ as serverStream).s, hdr, (__goscriptShadow26 as mem.BufferSlice), new transport.Options({Last: false})), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow27 != null) {
				const __goscriptReturn46: $.GoError = await __goscript_rpc_util.toRPCErr(__goscriptShadow27)
				err = __goscriptReturn46
				await __defer.dispose()
				return err
			}
		}

		if ($.sliceLen((ss$ as serverStream).binlogs) != 0) {
			if (!(ss$ as serverStream).serverHeaderBinlogged) {
				let __goscriptTuple25: any = await transport.Stream.prototype.Header.call((ss$ as serverStream).s)
				let h: metadata.MD = __goscriptTuple25[0]
				let sh: binarylog.ServerHeader | $.VarRef<binarylog.ServerHeader> | null = new binarylog.ServerHeader({Header: h});
				;(ss$ as serverStream).serverHeaderBinlogged = true
				for (let __goscriptRangeTarget22 = (ss$ as serverStream).binlogs, __goscriptRangeWindow22 = $.sliceRange(__goscriptRangeTarget22), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow22.length; __rangeIndex++) {
					let binlog = (__goscriptRangeWindow22.backing[__goscriptRangeWindow22.offset + __rangeIndex] as binarylog.MethodLogger | null)
					void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log((ss$ as serverStream).ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(sh, "*binarylog.ServerHeader", /* @__PURE__ */ $.pointerType("binarylog.ServerHeader"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
			let sm: binarylog.ServerMessage | $.VarRef<binarylog.ServerMessage> | null = (() => { const __goscriptLiteralField11 = $.interfaceValue(mem.BufferSlice_Materialize(data), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))); return new binarylog.ServerMessage({Message: __goscriptLiteralField11}) })()
			for (let __goscriptRangeTarget23 = (ss$ as serverStream).binlogs, __goscriptRangeWindow23 = $.sliceRange(__goscriptRangeTarget23), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow23.length; __rangeIndex++) {
				let binlog = (__goscriptRangeWindow23.backing[__goscriptRangeWindow23.offset + __rangeIndex] as binarylog.MethodLogger | null)
				void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log((ss$ as serverStream).ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(sm, "*binarylog.ServerMessage", /* @__PURE__ */ $.pointerType("binarylog.ServerMessage"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		if ($.sliceLen((ss$ as serverStream).statsHandler) != 0) {
			for (let __goscriptRangeTarget24 = (ss$ as serverStream).statsHandler, __goscriptRangeWindow24 = $.sliceRange(__goscriptRangeTarget24), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow24.length; __rangeIndex++) {
				let sh = (__goscriptRangeWindow24.backing[__goscriptRangeWindow24.offset + __rangeIndex] as stats.Handler | null)
				void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleRPC(transport.Stream.prototype.Context.call((ss$ as serverStream).s), $.interfaceValue<stats.RPCStats | null>(__goscript_rpc_util.outPayload(false, m, dataLen, payloadLen, time.Now()), "*stats.OutPayload", /* @__PURE__ */ $.pointerType("stats.OutPayload"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		const __goscriptReturn47: $.GoError = null
		err = __goscriptReturn47
		await __defer.dispose()
		return err
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async SetHeader(md: metadata.MD): globalThis.Promise<$.GoError> {
		const ss: serverStream | $.VarRef<serverStream> | null = this;
		if (metadata.MD_Len(md) == 0) {
			return null
		}
		let err = imetadata.Validate(md)
		if (err != null) {
			return status.Error(13, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		return transport.Stream.prototype.SetHeader.call($.pointerValue<serverStream>(ss).s, md)
	}

	public async SetTrailer(md: metadata.MD): globalThis.Promise<void> {
		const ss: serverStream | $.VarRef<serverStream> | null = this;
		if (metadata.MD_Len(md) == 0) {
			return
		}
		{
			let err = imetadata.Validate(md)
			if (err != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).Errorf("stream: failed to validate md when setting trailer, err: %v", $.arrayToSlice<any>([(err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		await transport.Stream.prototype.SetTrailer.call($.pointerValue<serverStream>(ss).s, md)
	}

	static __typeInfo = $.registerStructType(
		"grpc.serverStream",
		() => new serverStream(),
		() => [$.methodSignature("Context", [], ["context.Context"], true), $.methodSignature("RecvMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], [["err", "error"]], true), $.methodSignature("SendHeader", [["md", "metadata.MD"]], ["error"], true), $.methodSignature("SendMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], [["err", "error"]], true), $.methodSignature("SetHeader", [["md", "metadata.MD"]], ["error"], true), $.methodSignature("SetTrailer", [["md", "metadata.MD"]], [], true)],
		serverStream,
		() => [/* @__PURE__ */ $.structField("ctx", "context.Context", [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("t", "transport.ServerTransport", [1], 16, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.pointerType("transport.Stream"), [2], 32, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("p", /* @__PURE__ */ $.pointerType("grpc.parser"), [3], 40, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("codec", "grpc.baseCodec", [4], 48, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("cp", "grpc.Compressor", [5], 64, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("dc", "grpc.Decompressor", [6], 80, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("comp", "encoding.Compressor", [7], 96, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("decomp", "encoding.Compressor", [8], 112, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("sendCompressorName", /* @__PURE__ */ $.basicType("string"), [9], 128, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("maxReceiveMessageSize", /* @__PURE__ */ $.basicType("int"), [10], 144, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("maxSendMessageSize", /* @__PURE__ */ $.basicType("int"), [11], 152, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("trInfo", /* @__PURE__ */ $.pointerType("grpc.traceInfo"), [12], 160, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("statsHandler", /* @__PURE__ */ $.sliceType("stats.Handler"), [13], 168, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("binlogs", /* @__PURE__ */ $.sliceType("binarylog.MethodLogger"), [14], 192, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("serverHeaderBinlogged", /* @__PURE__ */ $.basicType("bool"), [15], 216, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [16], 220, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export let metadataFromOutgoingContextRaw: ((_p0: context.Context | null) => [metadata.MD, $.Slice<$.Slice<string>>, boolean] | globalThis.Promise<[metadata.MD, $.Slice<$.Slice<string>>, boolean]>) | null = $.mustTypeAssert<((_p0: context.Context | null) => [metadata.MD, $.Slice<$.Slice<string>>, boolean] | globalThis.Promise<[metadata.MD, $.Slice<$.Slice<string>>, boolean]>) | null>(internal.FromOutgoingContextRaw, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["metadata.MD", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))), /* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))

export function __goscript_set_metadataFromOutgoingContextRaw(__goscriptValue: ((_p0: context.Context | null) => [metadata.MD, $.Slice<$.Slice<string>>, boolean] | globalThis.Promise<[metadata.MD, $.Slice<$.Slice<string>>, boolean]>) | null): void {
	metadataFromOutgoingContextRaw = __goscriptValue
}

export async function NewClientStream(ctx: context.Context | null, desc: StreamDesc | $.VarRef<StreamDesc> | null, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, method: string, opts: $.Slice<__goscript_rpc_util.CallOption | null>): globalThis.Promise<[ClientStream | null, $.GoError]> {
	return (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as __goscript_clientconn.ClientConn).NewStream(ctx, desc, method, opts) : __goscript_clientconn.ClientConn.prototype.NewStream.call(cc, ctx, desc, method, opts))
}

export async function newClientStream(ctx: context.Context | null, desc: StreamDesc | $.VarRef<StreamDesc> | null, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, method: string, opts: $.Slice<__goscript_rpc_util.CallOption | null>): globalThis.Promise<[ClientStream | null, $.GoError]> {
	let err: $.GoError = null! as $.GoError
	using __defer = new $.DisposableStack()
	const cc$: __goscript_clientconn.ClientConn = cc == null ? $.pointerTarget<__goscript_clientconn.ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<__goscript_clientconn.ClientConn>(cc)
	// Start tracking the RPC for idleness purposes. This is where a stream is
	// created for both streaming and unary RPCs, and hence is a good place to
	// track active RPC count.
	{
		let __goscriptShadow0 = await idle.Manager.prototype.OnCallBegin.call((cc$ as __goscript_clientconn.ClientConn).idlenessMgr)
		if (__goscriptShadow0 != null) {
			return [null, __goscriptShadow0]
		}
	}
	// Add a calloption, to decrement the active call count, that gets executed
	// when the RPC completes.
	opts = $.appendSlice($.arrayToSlice<__goscript_rpc_util.CallOption | null>([__goscript_rpc_util.OnFinish($.functionValue((_p0: $.GoError): void => {
		idle.Manager.prototype.OnCallEnd.call((cc$ as __goscript_clientconn.ClientConn).idlenessMgr)
	}, ({ kind: $.TypeKind.Function, params: ["error"], results: [] } as $.FunctionTypeInfo)))]), opts, $.appendZeros.nil)

	{
		let __goscriptTuple0: any = await metadataFromOutgoingContextRaw!(ctx)
		let md: metadata.MD = __goscriptTuple0[0]
		let added: $.Slice<$.Slice<string>> = __goscriptTuple0[1]
		let ok = __goscriptTuple0[2]
		if (ok) {
			// validate md
			{
				let __goscriptShadow1 = imetadata.Validate(md)
				if (__goscriptShadow1 != null) {
					return [null, status.Error(13, (__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow1)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]
				}
			}
			// validate added
			for (let __goscriptRangeTarget0 = added, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let kvs = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as $.Slice<string>)
				for (let __goscriptSliceWindow0 = $.sliceRange(kvs), i = 0; i < __goscriptSliceWindow0.length; i = i + (2)) {
					{
						let __goscriptShadow2 = imetadata.ValidatePair(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as string), $.arrayToSlice<string>([((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i + 1)] as string)]))
						if (__goscriptShadow2 != null) {
							return [null, status.Error(13, (__goscriptAwait = (__goscriptShadow2 !== null && (__goscriptShadow2 as any).__isVarRef !== true && (__goscriptShadow2 as any).__goValue === undefined ? (__goscriptShadow2 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow2)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]
						}
					}
				}
			}
		}
	}
	if (channelz.IsOn()) {
		void (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as __goscript_clientconn.ClientConn).incrCallsStarted() : __goscript_clientconn.ClientConn.prototype.incrCallsStarted.call(cc))
		__defer.defer(() => { ((): void => {
			if (err != null) {
				void (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as __goscript_clientconn.ClientConn).incrCallsFailed() : __goscript_clientconn.ClientConn.prototype.incrCallsFailed.call(cc))
			}
		})() })
	}
	// Provide an opportunity for the first RPC to see the first service config
	// provided by the resolver.
	{
		let __goscriptShadow3 = await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as __goscript_clientconn.ClientConn).waitForResolvedAddrs(ctx) : __goscript_clientconn.ClientConn.prototype.waitForResolvedAddrs.call(cc, ctx))
		if (__goscriptShadow3 != null) {
			const __goscriptReturn1: [ClientStream | null, $.GoError] = [null, __goscriptShadow3]
			err = __goscriptReturn1[1]
			__defer.dispose()
			return [__goscriptReturn1[0], err]
		}
	}

	let mc: serviceconfig.MethodConfig = new serviceconfig.MethodConfig(undefined, true)
	let onCommit: (() => void) | null = null! as (() => void) | null
	let newStream: ((ctx: context.Context | null, done: (() => void) | null) => [iresolver.ClientStream | null, $.GoError] | globalThis.Promise<[iresolver.ClientStream | null, $.GoError]>) | null = $.functionValue(async (ctx: context.Context | null, done: (() => void) | null): globalThis.Promise<[iresolver.ClientStream | null, $.GoError]> => {
		return await newClientStreamWithParams(ctx, desc, cc, method, (mc).clone(), onCommit, done, opts)
	}, ({ kind: $.TypeKind.Function, params: ["context.Context", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)], results: ["resolver.ClientStream", "error"] } as $.FunctionTypeInfo))

	let __goscriptShadow4 = new iresolver.RPCInfo({Context: ctx, Method: method}, true)
	let __goscriptTuple1: any = await (cc$ as __goscript_clientconn.ClientConn).safeConfigSelector.SelectConfig((__goscriptShadow4).clone())
	let rpcConfig: iresolver.RPCConfig | $.VarRef<iresolver.RPCConfig> | null = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	let rpcConfig$: iresolver.RPCConfig = rpcConfig == null ? $.pointerTarget<iresolver.RPCConfig>(rpcConfig) : (rpcConfig as any).__isVarRef === true ? (rpcConfig as any).value : (rpcConfig as any).__goValue === undefined ? (rpcConfig as any) : $.pointerTarget<iresolver.RPCConfig>(rpcConfig)
	if (err != null) {
		{
			let __goscriptTuple2: any = await status.FromError(err)
			let st: istatus.Status | $.VarRef<istatus.Status> | null = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			if (ok) {
				// Restrict the code to the list allowed by gRFC A54.
				if (istatus.IsRestrictedControlPlaneCode(st)) {
					err = await status.Errorf(13, "config selector returned illegal status: %v", $.arrayToSlice<any>([(err as any)]))
				}
				const __goscriptReturn3: [ClientStream | null, $.GoError] = [null, err]
				err = __goscriptReturn3[1]
				__defer.dispose()
				return [__goscriptReturn3[0], err]
			}
		}
		const __goscriptReturn4: [ClientStream | null, $.GoError] = [null, await __goscript_rpc_util.toRPCErr(err)]
		err = __goscriptReturn4[1]
		__defer.dispose()
		return [__goscriptReturn4[0], err]
	}

	if (rpcConfig != null) {
		if ((rpcConfig$ as iresolver.RPCConfig).Context != null) {
			ctx = (rpcConfig$ as iresolver.RPCConfig).Context
		}
		mc = $.assignStruct(mc, (rpcConfig$ as iresolver.RPCConfig).MethodConfig)
		onCommit = (rpcConfig$ as iresolver.RPCConfig).OnCommitted
		if ((rpcConfig$ as iresolver.RPCConfig).Interceptor != null) {
			__goscriptShadow4.Context = null
			let ns: ((ctx: context.Context | null, done: (() => void) | null) => [iresolver.ClientStream | null, $.GoError] | globalThis.Promise<[iresolver.ClientStream | null, $.GoError]>) | null = newStream
			newStream = $.functionValue(async (ctx: context.Context | null, done: (() => void) | null): globalThis.Promise<[iresolver.ClientStream | null, $.GoError]> => {
				let [cs, __goscriptShadow5] = await $.pointerValue<Exclude<iresolver.ClientInterceptor, null>>((rpcConfig$ as iresolver.RPCConfig).Interceptor).NewStream(ctx, (__goscriptShadow4).clone(), done, ns)
				if (__goscriptShadow5 != null) {
					return [null, await __goscript_rpc_util.toRPCErr(__goscriptShadow5)]
				}
				return [cs, null]
			}, ({ kind: $.TypeKind.Function, params: ["context.Context", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)], results: ["resolver.ClientStream", "error"] } as $.FunctionTypeInfo))
		}
	}

	const __goscriptReturn5 = await newStream!(ctx, $.functionValue((): void => {
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	const __goscriptReturn6: [ClientStream | null, $.GoError] = [(__goscriptReturn5[0] as ClientStream | null), __goscriptReturn5[1]]
	err = __goscriptReturn6[1]
	__defer.dispose()
	return [__goscriptReturn6[0], err]
	throw new globalThis.Error("goscript: unreachable return")
}

export async function newClientStreamWithParams(ctx: context.Context | null, desc: StreamDesc | $.VarRef<StreamDesc> | null, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, method: string, __goscriptParam0: serviceconfig.MethodConfig, onCommit: (() => void) | null, doneFunc: (() => void) | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>): globalThis.Promise<[iresolver.ClientStream | null, $.GoError]> {
	let mc: $.VarRef<serviceconfig.MethodConfig> = $.varRef(__goscriptParam0)
	let err: $.GoError = null! as $.GoError
	await using __defer = new $.AsyncDisposableStack()
	const cc$: __goscript_clientconn.ClientConn = cc == null ? $.pointerTarget<__goscript_clientconn.ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<__goscript_clientconn.ClientConn>(cc)
	let c: __goscript_rpc_util.callInfo | $.VarRef<__goscript_rpc_util.callInfo> | null = __goscript_rpc_util.defaultCallInfo()
	let c$: __goscript_rpc_util.callInfo = c == null ? $.pointerTarget<__goscript_rpc_util.callInfo>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_rpc_util.callInfo>(c)
	if (mc.value.WaitForReady != null) {
		;(c$ as __goscript_rpc_util.callInfo).failFast = !$.pointerValue<boolean>(mc.value.WaitForReady)
	}

	// Possible context leak:
	// The cancel function for the child context we create will only be called
	// when RecvMsg returns a non-nil error, if the ClientConn is closed, or if
	// an error is generated by SendMsg.
	// https://github.com/grpc/grpc-go/issues/1818.
	let cancel: context.CancelFunc | null = null! as context.CancelFunc | null
	if ((mc.value.Timeout != null) && ($.pointerValue<time.Duration>(mc.value.Timeout) >= 0n)) {
		let __goscriptTuple3: any = context.WithTimeout($.pointerValueOrNil(ctx)!, $.pointerValue<time.Duration>(mc.value.Timeout))
		ctx = __goscriptTuple3[0]
		cancel = __goscriptTuple3[1]
	} else {
		let __goscriptTuple4: any = context.WithCancel($.pointerValueOrNil(ctx)!)
		ctx = __goscriptTuple4[0]
		cancel = __goscriptTuple4[1]
	}
	__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
		if (err != null) {
			void (__goscriptAwait = cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	})() })

	for (let __goscriptRangeTarget1 = opts, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let o = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_rpc_util.CallOption | null)
		{
			let __goscriptShadow6 = (__goscriptAwait = (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? (o as Exclude<__goscript_rpc_util.CallOption, null>) : $.pointerValue<Exclude<__goscript_rpc_util.CallOption, null>>(o)).before(c), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow6 != null) {
				const __goscriptReturn7: [iresolver.ClientStream | null, $.GoError] = [null, await __goscript_rpc_util.toRPCErr(__goscriptShadow6)]
				err = __goscriptReturn7[1]
				await __defer.dispose()
				return [__goscriptReturn7[0], err]
			}
		}
	}
	;(c$ as __goscript_rpc_util.callInfo).maxSendMessageSize = __goscript_service_config.getMaxSize(mc.value.MaxReqSize, (c$ as __goscript_rpc_util.callInfo).maxSendMessageSize, 2147483647);
	;(c$ as __goscript_rpc_util.callInfo).maxReceiveMessageSize = __goscript_service_config.getMaxSize(mc.value.MaxRespSize, (c$ as __goscript_rpc_util.callInfo).maxReceiveMessageSize, 4194304)
	{
		let __goscriptShadow7 = await __goscript_rpc_util.setCallInfoCodec(c)
		if (__goscriptShadow7 != null) {
			const __goscriptReturn8: [iresolver.ClientStream | null, $.GoError] = [null, __goscriptShadow7]
			err = __goscriptReturn8[1]
			await __defer.dispose()
			return [__goscriptReturn8[0], err]
		}
	}

	let callHdr: transport.CallHdr | $.VarRef<transport.CallHdr> | null = new transport.CallHdr({Host: (cc$ as __goscript_clientconn.ClientConn).authority, Method: method, ContentSubtype: (c$ as __goscript_rpc_util.callInfo).contentSubtype, DoneFunc: doneFunc})
	let callHdr$: transport.CallHdr = callHdr == null ? $.pointerTarget<transport.CallHdr>(callHdr) : (callHdr as any).__isVarRef === true ? (callHdr as any).value : (callHdr as any).__goValue === undefined ? (callHdr as any) : $.pointerTarget<transport.CallHdr>(callHdr)

	// Set our outgoing compression according to the UseCompressor CallOption, if
	// set.  In that case, also find the compressor from the encoding package.
	// Otherwise, use the compressor configured by the WithCompressor DialOption,
	// if set.
	let cp: __goscript_rpc_util.Compressor | null = null! as __goscript_rpc_util.Compressor | null
	let comp: encoding.Compressor | null = null! as encoding.Compressor | null
	{
		let ct = (c$ as __goscript_rpc_util.callInfo).compressorType
		if (!$.stringEqual(ct, "")) {
			;(callHdr$ as transport.CallHdr).SendCompress = ct
			if (!$.stringEqual(ct, encoding.Identity)) {
				comp = encoding.GetCompressor(ct)
				if (comp == null) {
					const __goscriptReturn9: [iresolver.ClientStream | null, $.GoError] = [null, await status.Errorf(13, "grpc: Compressor is not installed for requested grpc-encoding %q", $.arrayToSlice<any>([ct]))]
					err = __goscriptReturn9[1]
					await __defer.dispose()
					return [__goscriptReturn9[0], err]
				}
			}
		} else {
			if ((cc$ as __goscript_clientconn.ClientConn).dopts.cp != null) {
				;(callHdr$ as transport.CallHdr).SendCompress = (__goscriptAwait = $.pointerValue<Exclude<__goscript_rpc_util.Compressor, null>>((cc$ as __goscript_clientconn.ClientConn).dopts.cp).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				cp = (cc$ as __goscript_clientconn.ClientConn).dopts.cp
			}
		}
	}
	if ((c$ as __goscript_rpc_util.callInfo).creds != null) {
		;(callHdr$ as transport.CallHdr).Creds = (c$ as __goscript_rpc_util.callInfo).creds
	}

	let cs: clientStream | $.VarRef<clientStream> | null = new clientStream({callHdr: callHdr, ctx: ctx, methodConfig: mc, opts: opts, callInfo: c, cc: cc, desc: desc, codec: (c$ as __goscript_rpc_util.callInfo).codec, cp: cp, comp: comp, cancel: cancel, firstAttempt: true, onCommit: onCommit})
	let cs$: clientStream = cs == null ? $.pointerTarget<clientStream>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<clientStream>(cs)
	if (!(cc$ as __goscript_clientconn.ClientConn).dopts.disableRetry) {
		;(cs$ as clientStream).retryThrottler = $.mustTypeAssert<__goscript_clientconn.retryThrottler | $.VarRef<__goscript_clientconn.retryThrottler> | null>((cc$ as __goscript_clientconn.ClientConn).retryThrottler.Load(), /* @__PURE__ */ $.pointerType("grpc.retryThrottler"))
	}
	{
		let ml = await binarylog.GetMethodLogger(method)
		if (ml != null) {
			;(cs$ as clientStream).binlogs = $.appendOne((cs$ as clientStream).binlogs, ml, $.appendZeros.nil)
		}
	}
	if ((cc$ as __goscript_clientconn.ClientConn).dopts.binaryLogger != null) {
		{
			let ml = (__goscriptAwait = $.pointerValue<Exclude<binarylog.Logger, null>>((cc$ as __goscript_clientconn.ClientConn).dopts.binaryLogger).GetMethodLogger(method), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (ml != null) {
				;(cs$ as clientStream).binlogs = $.appendOne((cs$ as clientStream).binlogs, ml, $.appendZeros.nil)
			}
		}
	}

	// Pick the transport to use and create a new stream on the transport.
	// Assign cs.attempt upon success.
	let op: ((a: csAttempt | $.VarRef<csAttempt> | null) => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue(async (a: csAttempt | $.VarRef<csAttempt> | null): globalThis.Promise<$.GoError> => {
		{
			let __goscriptShadow8 = await (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as csAttempt).getTransport() : csAttempt.prototype.getTransport.call(a))
			if (__goscriptShadow8 != null) {
				return __goscriptShadow8
			}
		}
		{
			let __goscriptShadow9 = await (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as csAttempt).newStream() : csAttempt.prototype.newStream.call(a))
			if (__goscriptShadow9 != null) {
				return __goscriptShadow9
			}
		}
		// Because this operation is always called either here (while creating
		// the clientStream) or by the retry code while locked when replaying
		// the operation, it is safe to access cs.attempt directly.
		;(cs$ as clientStream).attempt = a
		return null
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.csAttempt")], results: ["error"] } as $.FunctionTypeInfo))
	{
		let __goscriptShadow10 = await clientStream.prototype.withRetry.call(cs, op, $.functionValue(async (): globalThis.Promise<void> => {
			await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).bufferForRetryLocked(0, op, (null as (() => void) | null)) : clientStream.prototype.bufferForRetryLocked.call(cs, 0, op, (null as (() => void) | null)))
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		if (__goscriptShadow10 != null) {
			const __goscriptReturn10: [iresolver.ClientStream | null, $.GoError] = [null, __goscriptShadow10]
			err = __goscriptReturn10[1]
			await __defer.dispose()
			return [__goscriptReturn10[0], err]
		}
	}

	if ($.sliceLen((cs$ as clientStream).binlogs) != 0) {
		let __goscriptTuple5: any = await metadata.FromOutgoingContext(ctx)
		let md: metadata.MD = __goscriptTuple5[0]
		let logEntry: binarylog.ClientHeader | $.VarRef<binarylog.ClientHeader> | null = new binarylog.ClientHeader({OnClientSide: true, Header: md, MethodName: method, Authority: $.pointerValue<__goscript_clientconn.ClientConn>((cs$ as clientStream).cc).authority})
		let logEntry$: binarylog.ClientHeader = logEntry == null ? $.pointerTarget<binarylog.ClientHeader>(logEntry) : (logEntry as any).__isVarRef === true ? (logEntry as any).value : (logEntry as any).__goValue === undefined ? (logEntry as any) : $.pointerTarget<binarylog.ClientHeader>(logEntry)
		{
			let [deadline, ok] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Deadline()
			if (ok) {
				;(logEntry$ as binarylog.ClientHeader).Timeout = time.Until($.markAsStructValue($.cloneStructValue(deadline)))
				if ((logEntry$ as binarylog.ClientHeader).Timeout < 0n) {
					;(logEntry$ as binarylog.ClientHeader).Timeout = 0n
				}
			}
		}
		for (let __goscriptRangeTarget2 = (cs$ as clientStream).binlogs, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let binlog = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as binarylog.MethodLogger | null)
			void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log((cs$ as clientStream).ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(logEntry, "*binarylog.ClientHeader", /* @__PURE__ */ $.pointerType("binarylog.ClientHeader"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	if (!$.pointerEqual(desc, __goscript_call.__goscript_get_unaryStreamDesc())) {
		// Listen on cc and stream contexts to cleanup when the user closes the
		// ClientConn or cancels the stream context.  In all other cases, an error
		// should already be injected into the recv buffer by the transport, which
		// the client will eventually receive, and then we will cancel the stream's
		// context in clientStream.finish.
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: ((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((cc$ as __goscript_clientconn.ClientConn).ctx).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
					onSelected: async (__goscriptSelect0Result) => {
						await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as clientStream).finish(__goscript_clientconn.ErrClientConnClosing) : clientStream.prototype.finish.call(cs, __goscript_clientconn.ErrClientConnClosing))
					}
				},
				{
					id: 1,
					isSend: false,
					channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
					onSelected: async (__goscriptSelect0Result) => {
						await clientStream.prototype.finish.call(cs, await __goscript_rpc_util.toRPCErr((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
					}
				}
			], false)
			if (__goscriptSelect0HasReturn) {
				return __goscriptSelect0Value
			}
		})() })
	}
	const __goscriptReturn11: [iresolver.ClientStream | null, $.GoError] = [$.interfaceValue<iresolver.ClientStream | null>(cs, "*grpc.clientStream", /* @__PURE__ */ $.pointerType("grpc.clientStream")), null]
	err = __goscriptReturn11[1]
	await __defer.dispose()
	return [__goscriptReturn11[0], err]
	throw new globalThis.Error("goscript: unreachable return")
}

export async function newNonRetryClientStream(ctx: context.Context | null, desc: StreamDesc | $.VarRef<StreamDesc> | null, method: string, t: transport.ClientTransport | null, ac: __goscript_clientconn.addrConn | $.VarRef<__goscript_clientconn.addrConn> | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>): globalThis.Promise<[ClientStream | null, $.GoError]> {
	let err: $.GoError = null! as $.GoError
	await using __defer = new $.AsyncDisposableStack()
	const ac$: __goscript_clientconn.addrConn = ac == null ? $.pointerTarget<__goscript_clientconn.addrConn>(ac) : (ac as any).__isVarRef === true ? (ac as any).value : (ac as any).__goValue === undefined ? (ac as any) : $.pointerTarget<__goscript_clientconn.addrConn>(ac)
	if (t == null) {
		// TODO: return RPC error here?
		return [null, errors.New("transport provided is nil")]
	}
	// defaultCallInfo contains unnecessary info(i.e. failfast, maxRetryRPCBufferSize), so we just initialize an empty struct.
	let c: __goscript_rpc_util.callInfo | $.VarRef<__goscript_rpc_util.callInfo> | null = new __goscript_rpc_util.callInfo()
	let c$: __goscript_rpc_util.callInfo = c == null ? $.pointerTarget<__goscript_rpc_util.callInfo>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_rpc_util.callInfo>(c)

	// Possible context leak:
	// The cancel function for the child context we create will only be called
	// when RecvMsg returns a non-nil error, if the ClientConn is closed, or if
	// an error is generated by SendMsg.
	// https://github.com/grpc/grpc-go/issues/1818.
	let __goscriptTuple17: any = context.WithCancel($.pointerValueOrNil(ctx)!)
	ctx = __goscriptTuple17[0]
	let cancel = __goscriptTuple17[1]
	__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
		if (err != null) {
			void (__goscriptAwait = cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	})() })

	for (let __goscriptRangeTarget17 = opts, __goscriptRangeWindow17 = $.sliceRange(__goscriptRangeTarget17), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow17.length; __rangeIndex++) {
		let o = (__goscriptRangeWindow17.backing[__goscriptRangeWindow17.offset + __rangeIndex] as __goscript_rpc_util.CallOption | null)
		{
			let __goscriptShadow19 = (__goscriptAwait = (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? (o as Exclude<__goscript_rpc_util.CallOption, null>) : $.pointerValue<Exclude<__goscript_rpc_util.CallOption, null>>(o)).before(c), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow19 != null) {
				const __goscriptReturn23: [ClientStream | null, $.GoError] = [null, await __goscript_rpc_util.toRPCErr(__goscriptShadow19)]
				err = __goscriptReturn23[1]
				await __defer.dispose()
				return [__goscriptReturn23[0], err]
			}
		}
	}
	;(c$ as __goscript_rpc_util.callInfo).maxReceiveMessageSize = __goscript_service_config.getMaxSize(null, (c$ as __goscript_rpc_util.callInfo).maxReceiveMessageSize, 4194304);
	;(c$ as __goscript_rpc_util.callInfo).maxSendMessageSize = __goscript_service_config.getMaxSize(null, (c$ as __goscript_rpc_util.callInfo).maxSendMessageSize, 2147483647)
	{
		let __goscriptShadow20 = await __goscript_rpc_util.setCallInfoCodec(c)
		if (__goscriptShadow20 != null) {
			const __goscriptReturn24: [ClientStream | null, $.GoError] = [null, __goscriptShadow20]
			err = __goscriptReturn24[1]
			await __defer.dispose()
			return [__goscriptReturn24[0], err]
		}
	}

	let callHdr: transport.CallHdr | $.VarRef<transport.CallHdr> | null = new transport.CallHdr({Host: $.pointerValue<__goscript_clientconn.ClientConn>((ac$ as __goscript_clientconn.addrConn).cc).authority, Method: method, ContentSubtype: (c$ as __goscript_rpc_util.callInfo).contentSubtype})
	let callHdr$: transport.CallHdr = callHdr == null ? $.pointerTarget<transport.CallHdr>(callHdr) : (callHdr as any).__isVarRef === true ? (callHdr as any).value : (callHdr as any).__goValue === undefined ? (callHdr as any) : $.pointerTarget<transport.CallHdr>(callHdr)

	// Set our outgoing compression according to the UseCompressor CallOption, if
	// set.  In that case, also find the compressor from the encoding package.
	// Otherwise, use the compressor configured by the WithCompressor DialOption,
	// if set.
	let cp: __goscript_rpc_util.Compressor | null = null! as __goscript_rpc_util.Compressor | null
	let comp: encoding.Compressor | null = null! as encoding.Compressor | null
	{
		let ct = (c$ as __goscript_rpc_util.callInfo).compressorType
		if (!$.stringEqual(ct, "")) {
			;(callHdr$ as transport.CallHdr).SendCompress = ct
			if (!$.stringEqual(ct, encoding.Identity)) {
				comp = encoding.GetCompressor(ct)
				if (comp == null) {
					const __goscriptReturn25: [ClientStream | null, $.GoError] = [null, await status.Errorf(13, "grpc: Compressor is not installed for requested grpc-encoding %q", $.arrayToSlice<any>([ct]))]
					err = __goscriptReturn25[1]
					await __defer.dispose()
					return [__goscriptReturn25[0], err]
				}
			}
		} else {
			if ($.pointerValue<__goscript_clientconn.ClientConn>((ac$ as __goscript_clientconn.addrConn).cc).dopts.cp != null) {
				;(callHdr$ as transport.CallHdr).SendCompress = (__goscriptAwait = $.pointerValue<Exclude<__goscript_rpc_util.Compressor, null>>($.pointerValue<__goscript_clientconn.ClientConn>((ac$ as __goscript_clientconn.addrConn).cc).dopts.cp).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				cp = $.pointerValue<__goscript_clientconn.ClientConn>((ac$ as __goscript_clientconn.addrConn).cc).dopts.cp
			}
		}
	}
	if ((c$ as __goscript_rpc_util.callInfo).creds != null) {
		;(callHdr$ as transport.CallHdr).Creds = (c$ as __goscript_rpc_util.callInfo).creds
	}

	// Use a special addrConnStream to avoid retry.
	let _as: addrConnStream | $.VarRef<addrConnStream> | null = new addrConnStream({callHdr: callHdr, ac: ac, ctx: ctx, cancel: cancel, opts: opts, callInfo: c, desc: desc, codec: (c$ as __goscript_rpc_util.callInfo).codec, cp: cp, comp: comp, t: t})
	let _as$: addrConnStream = _as == null ? $.pointerTarget<addrConnStream>(_as) : (_as as any).__isVarRef === true ? (_as as any).value : (_as as any).__goValue === undefined ? (_as as any) : $.pointerTarget<addrConnStream>(_as)

	let __goscriptTuple18: any = await $.pointerValue<Exclude<transport.ClientTransport, null>>((_as$ as addrConnStream).t).NewStream((_as$ as addrConnStream).ctx, (_as$ as addrConnStream).callHdr)
	let s: transport.Stream | $.VarRef<transport.Stream> | null = __goscriptTuple18[0]
	err = __goscriptTuple18[1]
	if (err != null) {
		err = await __goscript_rpc_util.toRPCErr(err)
		const __goscriptReturn26: [ClientStream | null, $.GoError] = [null, err]
		err = __goscriptReturn26[1]
		await __defer.dispose()
		return [__goscriptReturn26[0], err]
	}
	;(_as$ as addrConnStream).s = s;
	;(_as$ as addrConnStream).p = new __goscript_rpc_util.parser({r: $.interfaceValue<__goscript_rpc_util.streamReader | null>(s, "*transport.Stream", /* @__PURE__ */ $.pointerType("transport.Stream")), bufferPool: (ac$ as __goscript_clientconn.addrConn).dopts.copts.BufferPool})
	void (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as __goscript_clientconn.addrConn).incrCallsStarted() : __goscript_clientconn.addrConn.prototype.incrCallsStarted.call(ac))
	if (!$.pointerEqual(desc, __goscript_call.__goscript_get_unaryStreamDesc())) {
		// Listen on stream context to cleanup when the stream context is
		// canceled.  Also listen for the addrConn's context in case the
		// addrConn is closed or reconnects to a different address.  In all
		// other cases, an error should already be injected into the recv
		// buffer by the transport, which the client will eventually receive,
		// and then we will cancel the stream's context in
		// addrConnStream.finish.
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			await (ac$ as __goscript_clientconn.addrConn).mu.Lock()
			let acCtx = (ac$ as __goscript_clientconn.addrConn).ctx
			void (ac$ as __goscript_clientconn.addrConn).mu.Unlock()
			const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: ((__goscriptAwait = (acCtx !== null && (acCtx as any).__isVarRef !== true && (acCtx as any).__goValue === undefined ? (acCtx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(acCtx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
					onSelected: async (__goscriptSelect2Result) => {
						await (_as !== null && (_as as any).__isVarRef !== true && (_as as any).__goValue === undefined ? ((_as as any) as addrConnStream).finish(status.Error(1, "grpc: the SubConn is closing")) : addrConnStream.prototype.finish.call(_as, status.Error(1, "grpc: the SubConn is closing")))
					}
				},
				{
					id: 1,
					isSend: false,
					channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
					onSelected: async (__goscriptSelect2Result) => {
						await addrConnStream.prototype.finish.call(_as, await __goscript_rpc_util.toRPCErr((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
					}
				}
			], false)
			if (__goscriptSelect2HasReturn) {
				return __goscriptSelect2Value
			}
		})() })
	}
	const __goscriptReturn27: [ClientStream | null, $.GoError] = [$.interfaceValue<ClientStream | null>(_as, "*grpc.addrConnStream", /* @__PURE__ */ $.pointerType("grpc.addrConnStream")), null]
	err = __goscriptReturn27[1]
	await __defer.dispose()
	return [__goscriptReturn27[0], err]
	throw new globalThis.Error("goscript: unreachable return")
}

export async function MethodFromServerStream(stream: ServerStream | null): globalThis.Promise<[string, boolean]> {
	return __goscript_server.Method((__goscriptAwait = (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? (stream as Exclude<ServerStream, null>) : $.pointerValue<Exclude<ServerStream, null>>(stream)).Context(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
}

export async function prepareMsg(m: any, codec: __goscript_codec.baseCodec | null, cp: __goscript_rpc_util.Compressor | null, comp: encoding.Compressor | null, pool: mem.BufferPool | null): globalThis.Promise<[$.Slice<number>, mem.BufferSlice, mem.BufferSlice, __goscript_rpc_util.payloadFormat, $.GoError]> {
	let hdr: $.Slice<number> = null! as $.Slice<number>
	let data: mem.BufferSlice = null! as mem.BufferSlice
	let payload: mem.BufferSlice = null! as mem.BufferSlice
	let pf: __goscript_rpc_util.payloadFormat = 0
	let err: $.GoError = null! as $.GoError
	{
		let __goscriptTuple26: any = $.typeAssertTuple<__goscript_preloader.PreparedMsg | $.VarRef<__goscript_preloader.PreparedMsg> | null>(m, /* @__PURE__ */ $.pointerType("grpc.PreparedMsg"))
		let preparedMsg: __goscript_preloader.PreparedMsg | $.VarRef<__goscript_preloader.PreparedMsg> | null = __goscriptTuple26[0]
		let ok = __goscriptTuple26[1]
		if (ok) {
			return [$.pointerValue<__goscript_preloader.PreparedMsg>(preparedMsg).hdr, ($.pointerValue<__goscript_preloader.PreparedMsg>(preparedMsg).encodedData as mem.BufferSlice), ($.pointerValue<__goscript_preloader.PreparedMsg>(preparedMsg).payload as mem.BufferSlice), $.pointerValue<__goscript_preloader.PreparedMsg>(preparedMsg).pf, null]
		}
	}
	// The input interface is not a prepared msg.
	// Marshal and Compress the data at this point
	let __goscriptTuple27: any = await __goscript_rpc_util.encode(codec, m)
	data = (__goscriptTuple27[0] as mem.BufferSlice)
	err = __goscriptTuple27[1]
	if (err != null) {
		return [null, (null as mem.BufferSlice), (null as mem.BufferSlice), 0, err]
	}
	let __goscriptTuple28: any = await __goscript_rpc_util.compress((data as mem.BufferSlice), cp, comp, pool)
	let compData: mem.BufferSlice = (__goscriptTuple28[0] as mem.BufferSlice)
	pf = __goscriptTuple28[1]
	err = __goscriptTuple28[2]
	if (err != null) {
		await mem.BufferSlice_Free(data)
		return [null, (null as mem.BufferSlice), (null as mem.BufferSlice), 0, err]
	}
	let __goscriptTuple29: any = __goscript_rpc_util.msgHeader((data as mem.BufferSlice), (compData as mem.BufferSlice), pf)
	hdr = __goscriptTuple29[0]
	payload = (__goscriptTuple29[1] as mem.BufferSlice)
	return [hdr, (data as mem.BufferSlice), (payload as mem.BufferSlice), pf, null]
}

var __goscriptAwait: any
