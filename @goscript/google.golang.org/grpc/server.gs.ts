// Generated file based on server.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as net from "@goscript/net/index.js"

import * as http from "@goscript/net/http/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as codes from "@goscript/google.golang.org/grpc/codes/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as encoding from "@goscript/google.golang.org/grpc/encoding/index.js"

import * as proto from "@goscript/google.golang.org/grpc/encoding/proto/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/index.js"

import * as binarylog from "@goscript/google.golang.org/grpc/internal/binarylog/index.js"

import * as channelz2 from "@goscript/google.golang.org/grpc/internal/channelz/index.js"

import * as grpcsync from "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"

import * as grpcutil from "@goscript/google.golang.org/grpc/internal/grpcutil/index.js"

import * as transport from "@goscript/google.golang.org/grpc/internal/transport/index.js"

import * as keepalive from "@goscript/google.golang.org/grpc/keepalive/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as peer2 from "@goscript/google.golang.org/grpc/peer/index.js"

import * as stats from "@goscript/google.golang.org/grpc/stats/index.js"

import * as status from "@goscript/google.golang.org/grpc/status/index.js"

import * as tap from "@goscript/google.golang.org/grpc/tap/index.js"

import * as internal2 from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as status2 from "@goscript/google.golang.org/grpc/internal/status/index.js"

import * as __goscript_clientconn from "./clientconn.gs.ts"

import * as __goscript_codec from "./codec.gs.ts"

import * as __goscript_interceptor from "./interceptor.gs.ts"

import * as __goscript_rpc_util from "./rpc_util.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"

import * as __goscript_trace from "./trace.gs.ts"

import * as __goscript_trace_withtrace from "./trace_withtrace.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/net/index.js"
import "@goscript/net/http/index.js"
import "@goscript/reflect/index.js"
import "@goscript/runtime/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/grpc/codes/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/encoding/index.js"
import "@goscript/google.golang.org/grpc/encoding/proto/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/binarylog/index.js"
import "@goscript/google.golang.org/grpc/internal/channelz/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcutil/index.js"
import "@goscript/google.golang.org/grpc/internal/transport/index.js"
import "@goscript/google.golang.org/grpc/keepalive/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"
import "@goscript/google.golang.org/grpc/peer/index.js"
import "@goscript/google.golang.org/grpc/stats/index.js"
import "@goscript/google.golang.org/grpc/status/index.js"
import "@goscript/google.golang.org/grpc/tap/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/status/index.js"
import "./clientconn.gs.ts"
import "./codec.gs.ts"
import "./interceptor.gs.ts"
import "./rpc_util.gs.ts"
import "./stream.gs.ts"
import "./trace.gs.ts"
import "./trace_withtrace.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc", ["grpc.methodHandler", "grpc.MethodDesc", "grpc.ServiceDesc", "grpc.serviceInfo", "grpc.Server", "grpc.serverOptions", "grpc.ServerOption", "grpc.EmptyServerOption", "grpc.funcServerOption", "grpc.joinServerOption", "grpc.MaxHeaderListSizeServerOption", "grpc.ServiceRegistrar", "grpc.MethodInfo", "grpc.ServiceInfo", "grpc.listenSocket", "grpc.streamKey", "grpc.ServerTransportStream", "grpc.serverKey", "grpc.atomicSemaphore"])

export type methodHandler = ((srv: any, ctx: context.Context | null, dec: ((_p0: any) => $.GoError | globalThis.Promise<$.GoError>) | null, interceptor: ((ctx: context.Context | null, req: any, info: __goscript_interceptor.UnaryServerInfo | $.VarRef<__goscript_interceptor.UnaryServerInfo> | null, handler: __goscript_interceptor.UnaryHandler | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null

export type ServerOption = {
	apply(_p0: serverOptions | $.VarRef<serverOptions> | null): void
}

$.registerInterfaceType(
	"grpc.ServerOption",
	null,
	[$.methodSignature("apply", [/* @__PURE__ */ $.pointerType("grpc.serverOptions")])]
);

export type ServiceRegistrar = {
	RegisterService(desc: ServiceDesc | $.VarRef<ServiceDesc> | null, impl: any): void
}

$.registerInterfaceType(
	"grpc.ServiceRegistrar",
	null,
	[$.methodSignature("RegisterService", [["desc", /* @__PURE__ */ $.pointerType("grpc.ServiceDesc")], ["impl", { kind: $.TypeKind.Interface, methods: [] }]])]
);

export type ServerTransportStream = {
	Method(): string
	SendHeader(md: metadata.MD): $.GoError | globalThis.Promise<$.GoError>
	SetHeader(md: metadata.MD): $.GoError | globalThis.Promise<$.GoError>
	SetTrailer(md: metadata.MD): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"grpc.ServerTransportStream",
	null,
	[$.methodSignature("Method", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("SendHeader", [["md", "metadata.MD"]], ["error"]), $.methodSignature("SetHeader", [["md", "metadata.MD"]], ["error"]), $.methodSignature("SetTrailer", [["md", "metadata.MD"]], ["error"])]
);

export class MethodDesc {
	public get MethodName(): string {
		return this._fields.MethodName
	}

	public set MethodName(value: string) {
		this._fields.MethodName = value
	}

	public get Handler(): ((srv: any, ctx: context.Context | null, dec: ((_p0: any) => $.GoError | globalThis.Promise<$.GoError>) | null, interceptor: ((ctx: context.Context | null, req: any, info: __goscript_interceptor.UnaryServerInfo | $.VarRef<__goscript_interceptor.UnaryServerInfo> | null, handler: __goscript_interceptor.UnaryHandler | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null {
		return this._fields.Handler
	}

	public set Handler(value: ((srv: any, ctx: context.Context | null, dec: ((_p0: any) => $.GoError | globalThis.Promise<$.GoError>) | null, interceptor: ((ctx: context.Context | null, req: any, info: __goscript_interceptor.UnaryServerInfo | $.VarRef<__goscript_interceptor.UnaryServerInfo> | null, handler: __goscript_interceptor.UnaryHandler | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null) {
		this._fields.Handler = value
	}

	public _fields: {
		MethodName: string
		Handler: ((srv: any, ctx: context.Context | null, dec: ((_p0: any) => $.GoError | globalThis.Promise<$.GoError>) | null, interceptor: ((ctx: context.Context | null, req: any, info: __goscript_interceptor.UnaryServerInfo | $.VarRef<__goscript_interceptor.UnaryServerInfo> | null, handler: __goscript_interceptor.UnaryHandler | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null
	}

	constructor(init?: Partial<{MethodName?: string, Handler?: ((srv: any, ctx: context.Context | null, dec: ((_p0: any) => $.GoError | globalThis.Promise<$.GoError>) | null, interceptor: ((ctx: context.Context | null, req: any, info: __goscript_interceptor.UnaryServerInfo | $.VarRef<__goscript_interceptor.UnaryServerInfo> | null, handler: __goscript_interceptor.UnaryHandler | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			MethodName: init?.MethodName ?? ("" as string),
			Handler: init?.Handler ?? (null! as ((srv: any, ctx: context.Context | null, dec: ((_p0: any) => $.GoError | globalThis.Promise<$.GoError>) | null, interceptor: ((ctx: context.Context | null, req: any, info: __goscript_interceptor.UnaryServerInfo | $.VarRef<__goscript_interceptor.UnaryServerInfo> | null, handler: __goscript_interceptor.UnaryHandler | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MethodDesc {
		return new MethodDesc(this, true)
	}

	public __goscriptAssign(source: MethodDesc): void {
		const target = this._fields
		const values = source._fields
		target.MethodName = values.MethodName
		target.Handler = values.Handler
	}

	static __typeInfo = $.registerStructType(
		"grpc.MethodDesc",
		() => new MethodDesc(),
		() => [],
		MethodDesc,
		() => [/* @__PURE__ */ $.structField("MethodName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Handler", ({ kind: $.TypeKind.Function, name: "grpc.methodHandler", params: [{ kind: $.TypeKind.Interface, methods: [] }, "context.Context", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: ["error"] } as $.FunctionTypeInfo), ({ kind: $.TypeKind.Function, name: "grpc.UnaryServerInterceptor", params: ["context.Context", { kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.pointerType("grpc.UnaryServerInfo"), ({ kind: $.TypeKind.Function, name: "grpc.UnaryHandler", params: ["context.Context", { kind: $.TypeKind.Interface, methods: [] }], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo), [1], 16, true)]
	)
}

export class ServiceDesc {
	public get ServiceName(): string {
		return this._fields.ServiceName
	}

	public set ServiceName(value: string) {
		this._fields.ServiceName = value
	}

	// The pointer to the service interface. Used to check whether the user
	// provided implementation satisfies the interface requirements.
	public get HandlerType(): any {
		return this._fields.HandlerType
	}

	public set HandlerType(value: any) {
		this._fields.HandlerType = value
	}

	public get Methods(): $.Slice<MethodDesc> {
		return this._fields.Methods
	}

	public set Methods(value: $.Slice<MethodDesc>) {
		this._fields.Methods = value
	}

	public get Streams(): $.Slice<__goscript_stream.StreamDesc> {
		return this._fields.Streams
	}

	public set Streams(value: $.Slice<__goscript_stream.StreamDesc>) {
		this._fields.Streams = value
	}

	public get Metadata(): any {
		return this._fields.Metadata
	}

	public set Metadata(value: any) {
		this._fields.Metadata = value
	}

	public _fields: {
		ServiceName: string
		HandlerType: any
		Methods: $.Slice<MethodDesc>
		Streams: $.Slice<__goscript_stream.StreamDesc>
		Metadata: any
	}

	constructor(init?: Partial<{ServiceName?: string, HandlerType?: any, Methods?: $.Slice<MethodDesc>, Streams?: $.Slice<__goscript_stream.StreamDesc>, Metadata?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			ServiceName: init?.ServiceName ?? ("" as string),
			HandlerType: init?.HandlerType ?? (null! as any),
			Methods: init?.Methods ?? (null! as $.Slice<MethodDesc>),
			Streams: init?.Streams ?? (null! as $.Slice<__goscript_stream.StreamDesc>),
			Metadata: init?.Metadata ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ServiceDesc {
		return new ServiceDesc(this, true)
	}

	public __goscriptAssign(source: ServiceDesc): void {
		const target = this._fields
		const values = source._fields
		target.ServiceName = values.ServiceName
		target.HandlerType = $.assignFieldValue(target.HandlerType, values.HandlerType, { kind: $.TypeKind.Interface, methods: [] })
		target.Methods = values.Methods
		target.Streams = values.Streams
		target.Metadata = $.assignFieldValue(target.Metadata, values.Metadata, { kind: $.TypeKind.Interface, methods: [] })
	}

	static __typeInfo = $.registerStructType(
		"grpc.ServiceDesc",
		() => new ServiceDesc(),
		() => [],
		ServiceDesc,
		() => [/* @__PURE__ */ $.structField("ServiceName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("HandlerType", { kind: $.TypeKind.Interface, methods: [] }, [1], 16, true), /* @__PURE__ */ $.structField("Methods", /* @__PURE__ */ $.sliceType("grpc.MethodDesc"), [2], 32, true), /* @__PURE__ */ $.structField("Streams", /* @__PURE__ */ $.sliceType("grpc.StreamDesc"), [3], 56, true), /* @__PURE__ */ $.structField("Metadata", { kind: $.TypeKind.Interface, methods: [] }, [4], 80, true)]
	)
}

export class serviceInfo {
	// Contains the implementation for the methods in this service.
	public get serviceImpl(): any {
		return this._fields.serviceImpl
	}

	public set serviceImpl(value: any) {
		this._fields.serviceImpl = value
	}

	public get methods(): globalThis.Map<string, MethodDesc | $.VarRef<MethodDesc> | null> | null {
		return this._fields.methods
	}

	public set methods(value: globalThis.Map<string, MethodDesc | $.VarRef<MethodDesc> | null> | null) {
		this._fields.methods = value
	}

	public get streams(): globalThis.Map<string, __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null> | null {
		return this._fields.streams
	}

	public set streams(value: globalThis.Map<string, __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null> | null) {
		this._fields.streams = value
	}

	public get mdata(): any {
		return this._fields.mdata
	}

	public set mdata(value: any) {
		this._fields.mdata = value
	}

	public _fields: {
		serviceImpl: any
		methods: globalThis.Map<string, MethodDesc | $.VarRef<MethodDesc> | null> | null
		streams: globalThis.Map<string, __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null> | null
		mdata: any
	}

	constructor(init?: Partial<{serviceImpl?: any, methods?: globalThis.Map<string, MethodDesc | $.VarRef<MethodDesc> | null> | null, streams?: globalThis.Map<string, __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null> | null, mdata?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			serviceImpl: init?.serviceImpl ?? (null! as any),
			methods: init?.methods ?? (null! as globalThis.Map<string, MethodDesc | $.VarRef<MethodDesc> | null> | null),
			streams: init?.streams ?? (null! as globalThis.Map<string, __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null> | null),
			mdata: init?.mdata ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): serviceInfo {
		return new serviceInfo(this, true)
	}

	public __goscriptAssign(source: serviceInfo): void {
		const target = this._fields
		const values = source._fields
		target.serviceImpl = $.assignFieldValue(target.serviceImpl, values.serviceImpl, { kind: $.TypeKind.Interface, methods: [] })
		target.methods = values.methods
		target.streams = values.streams
		target.mdata = $.assignFieldValue(target.mdata, values.mdata, { kind: $.TypeKind.Interface, methods: [] })
	}

	static __typeInfo = $.registerStructType(
		"grpc.serviceInfo",
		() => new serviceInfo(),
		() => [],
		serviceInfo,
		() => [/* @__PURE__ */ $.structField("serviceImpl", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("methods", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("grpc.MethodDesc")), [1], 16, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("streams", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("grpc.StreamDesc")), [2], 24, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("mdata", { kind: $.TypeKind.Interface, methods: [] }, [3], 32, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class serverOptions {
	public get creds(): credentials.TransportCredentials | null {
		return this._fields.creds
	}

	public set creds(value: credentials.TransportCredentials | null) {
		this._fields.creds = value
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

	public get unaryInt(): ((ctx: context.Context | null, req: any, info: __goscript_interceptor.UnaryServerInfo | $.VarRef<__goscript_interceptor.UnaryServerInfo> | null, handler: ((ctx: context.Context | null, req: any) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null {
		return this._fields.unaryInt
	}

	public set unaryInt(value: ((ctx: context.Context | null, req: any, info: __goscript_interceptor.UnaryServerInfo | $.VarRef<__goscript_interceptor.UnaryServerInfo> | null, handler: ((ctx: context.Context | null, req: any) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null) {
		this._fields.unaryInt = value
	}

	public get streamInt(): ((srv: any, ss: __goscript_stream.ServerStream | null, info: __goscript_interceptor.StreamServerInfo | $.VarRef<__goscript_interceptor.StreamServerInfo> | null, handler: ((srv: any, stream: __goscript_stream.ServerStream | null) => $.GoError | globalThis.Promise<$.GoError>) | null) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.streamInt
	}

	public set streamInt(value: ((srv: any, ss: __goscript_stream.ServerStream | null, info: __goscript_interceptor.StreamServerInfo | $.VarRef<__goscript_interceptor.StreamServerInfo> | null, handler: ((srv: any, stream: __goscript_stream.ServerStream | null) => $.GoError | globalThis.Promise<$.GoError>) | null) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.streamInt = value
	}

	public get chainUnaryInts(): $.Slice<__goscript_interceptor.UnaryServerInterceptor | null> {
		return this._fields.chainUnaryInts
	}

	public set chainUnaryInts(value: $.Slice<__goscript_interceptor.UnaryServerInterceptor | null>) {
		this._fields.chainUnaryInts = value
	}

	public get chainStreamInts(): $.Slice<__goscript_interceptor.StreamServerInterceptor | null> {
		return this._fields.chainStreamInts
	}

	public set chainStreamInts(value: $.Slice<__goscript_interceptor.StreamServerInterceptor | null>) {
		this._fields.chainStreamInts = value
	}

	public get binaryLogger(): binarylog.Logger | null {
		return this._fields.binaryLogger
	}

	public set binaryLogger(value: binarylog.Logger | null) {
		this._fields.binaryLogger = value
	}

	public get inTapHandle(): ((ctx: context.Context | null, info: tap.Info | $.VarRef<tap.Info> | null) => [context.Context | null, $.GoError] | globalThis.Promise<[context.Context | null, $.GoError]>) | null {
		return this._fields.inTapHandle
	}

	public set inTapHandle(value: ((ctx: context.Context | null, info: tap.Info | $.VarRef<tap.Info> | null) => [context.Context | null, $.GoError] | globalThis.Promise<[context.Context | null, $.GoError]>) | null) {
		this._fields.inTapHandle = value
	}

	public get statsHandlers(): $.Slice<stats.Handler | null> {
		return this._fields.statsHandlers
	}

	public set statsHandlers(value: $.Slice<stats.Handler | null>) {
		this._fields.statsHandlers = value
	}

	public get maxConcurrentStreams(): number {
		return this._fields.maxConcurrentStreams
	}

	public set maxConcurrentStreams(value: number) {
		this._fields.maxConcurrentStreams = value
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

	public get unknownStreamDesc(): __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null {
		return this._fields.unknownStreamDesc
	}

	public set unknownStreamDesc(value: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null) {
		this._fields.unknownStreamDesc = value
	}

	public get keepaliveParams(): keepalive.ServerParameters {
		return this._fields.keepaliveParams
	}

	public set keepaliveParams(value: keepalive.ServerParameters) {
		this._fields.keepaliveParams = value
	}

	public get keepalivePolicy(): keepalive.EnforcementPolicy {
		return this._fields.keepalivePolicy
	}

	public set keepalivePolicy(value: keepalive.EnforcementPolicy) {
		this._fields.keepalivePolicy = value
	}

	public get initialWindowSize(): number {
		return this._fields.initialWindowSize
	}

	public set initialWindowSize(value: number) {
		this._fields.initialWindowSize = value
	}

	public get initialConnWindowSize(): number {
		return this._fields.initialConnWindowSize
	}

	public set initialConnWindowSize(value: number) {
		this._fields.initialConnWindowSize = value
	}

	public get writeBufferSize(): number {
		return this._fields.writeBufferSize
	}

	public set writeBufferSize(value: number) {
		this._fields.writeBufferSize = value
	}

	public get readBufferSize(): number {
		return this._fields.readBufferSize
	}

	public set readBufferSize(value: number) {
		this._fields.readBufferSize = value
	}

	public get sharedWriteBuffer(): boolean {
		return this._fields.sharedWriteBuffer
	}

	public set sharedWriteBuffer(value: boolean) {
		this._fields.sharedWriteBuffer = value
	}

	public get connectionTimeout(): time.Duration {
		return this._fields.connectionTimeout
	}

	public set connectionTimeout(value: time.Duration) {
		this._fields.connectionTimeout = value
	}

	public get maxHeaderListSize(): $.VarRef<number> | null {
		return this._fields.maxHeaderListSize
	}

	public set maxHeaderListSize(value: $.VarRef<number> | null) {
		this._fields.maxHeaderListSize = value
	}

	public get headerTableSize(): $.VarRef<number> | null {
		return this._fields.headerTableSize
	}

	public set headerTableSize(value: $.VarRef<number> | null) {
		this._fields.headerTableSize = value
	}

	public get numServerWorkers(): number {
		return this._fields.numServerWorkers
	}

	public set numServerWorkers(value: number) {
		this._fields.numServerWorkers = value
	}

	public get bufferPool(): mem.BufferPool | null {
		return this._fields.bufferPool
	}

	public set bufferPool(value: mem.BufferPool | null) {
		this._fields.bufferPool = value
	}

	public get waitForHandlers(): boolean {
		return this._fields.waitForHandlers
	}

	public set waitForHandlers(value: boolean) {
		this._fields.waitForHandlers = value
	}

	public _fields: {
		creds: credentials.TransportCredentials | null
		codec: __goscript_codec.baseCodec | null
		cp: __goscript_rpc_util.Compressor | null
		dc: __goscript_rpc_util.Decompressor | null
		unaryInt: ((ctx: context.Context | null, req: any, info: __goscript_interceptor.UnaryServerInfo | $.VarRef<__goscript_interceptor.UnaryServerInfo> | null, handler: ((ctx: context.Context | null, req: any) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null
		streamInt: ((srv: any, ss: __goscript_stream.ServerStream | null, info: __goscript_interceptor.StreamServerInfo | $.VarRef<__goscript_interceptor.StreamServerInfo> | null, handler: ((srv: any, stream: __goscript_stream.ServerStream | null) => $.GoError | globalThis.Promise<$.GoError>) | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		chainUnaryInts: $.Slice<__goscript_interceptor.UnaryServerInterceptor | null>
		chainStreamInts: $.Slice<__goscript_interceptor.StreamServerInterceptor | null>
		binaryLogger: binarylog.Logger | null
		inTapHandle: ((ctx: context.Context | null, info: tap.Info | $.VarRef<tap.Info> | null) => [context.Context | null, $.GoError] | globalThis.Promise<[context.Context | null, $.GoError]>) | null
		statsHandlers: $.Slice<stats.Handler | null>
		maxConcurrentStreams: number
		maxReceiveMessageSize: number
		maxSendMessageSize: number
		unknownStreamDesc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null
		keepaliveParams: keepalive.ServerParameters
		keepalivePolicy: keepalive.EnforcementPolicy
		initialWindowSize: number
		initialConnWindowSize: number
		writeBufferSize: number
		readBufferSize: number
		sharedWriteBuffer: boolean
		connectionTimeout: time.Duration
		maxHeaderListSize: $.VarRef<number> | null
		headerTableSize: $.VarRef<number> | null
		numServerWorkers: number
		bufferPool: mem.BufferPool | null
		waitForHandlers: boolean
	}

	constructor(init?: Partial<{creds?: credentials.TransportCredentials | null, codec?: __goscript_codec.baseCodec | null, cp?: __goscript_rpc_util.Compressor | null, dc?: __goscript_rpc_util.Decompressor | null, unaryInt?: ((ctx: context.Context | null, req: any, info: __goscript_interceptor.UnaryServerInfo | $.VarRef<__goscript_interceptor.UnaryServerInfo> | null, handler: ((ctx: context.Context | null, req: any) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null, streamInt?: ((srv: any, ss: __goscript_stream.ServerStream | null, info: __goscript_interceptor.StreamServerInfo | $.VarRef<__goscript_interceptor.StreamServerInfo> | null, handler: ((srv: any, stream: __goscript_stream.ServerStream | null) => $.GoError | globalThis.Promise<$.GoError>) | null) => $.GoError | globalThis.Promise<$.GoError>) | null, chainUnaryInts?: $.Slice<__goscript_interceptor.UnaryServerInterceptor | null>, chainStreamInts?: $.Slice<__goscript_interceptor.StreamServerInterceptor | null>, binaryLogger?: binarylog.Logger | null, inTapHandle?: ((ctx: context.Context | null, info: tap.Info | $.VarRef<tap.Info> | null) => [context.Context | null, $.GoError] | globalThis.Promise<[context.Context | null, $.GoError]>) | null, statsHandlers?: $.Slice<stats.Handler | null>, maxConcurrentStreams?: number, maxReceiveMessageSize?: number, maxSendMessageSize?: number, unknownStreamDesc?: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, keepaliveParams?: keepalive.ServerParameters, keepalivePolicy?: keepalive.EnforcementPolicy, initialWindowSize?: number, initialConnWindowSize?: number, writeBufferSize?: number, readBufferSize?: number, sharedWriteBuffer?: boolean, connectionTimeout?: time.Duration, maxHeaderListSize?: $.VarRef<number> | null, headerTableSize?: $.VarRef<number> | null, numServerWorkers?: number, bufferPool?: mem.BufferPool | null, waitForHandlers?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			creds: init?.creds ?? (null! as credentials.TransportCredentials | null),
			codec: init?.codec ?? (null! as __goscript_codec.baseCodec | null),
			cp: init?.cp ?? (null! as __goscript_rpc_util.Compressor | null),
			dc: init?.dc ?? (null! as __goscript_rpc_util.Decompressor | null),
			unaryInt: init?.unaryInt ?? (null! as ((ctx: context.Context | null, req: any, info: __goscript_interceptor.UnaryServerInfo | $.VarRef<__goscript_interceptor.UnaryServerInfo> | null, handler: ((ctx: context.Context | null, req: any) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null),
			streamInt: init?.streamInt ?? (null! as ((srv: any, ss: __goscript_stream.ServerStream | null, info: __goscript_interceptor.StreamServerInfo | $.VarRef<__goscript_interceptor.StreamServerInfo> | null, handler: ((srv: any, stream: __goscript_stream.ServerStream | null) => $.GoError | globalThis.Promise<$.GoError>) | null) => $.GoError | globalThis.Promise<$.GoError>) | null),
			chainUnaryInts: init?.chainUnaryInts ?? (null! as $.Slice<__goscript_interceptor.UnaryServerInterceptor | null>),
			chainStreamInts: init?.chainStreamInts ?? (null! as $.Slice<__goscript_interceptor.StreamServerInterceptor | null>),
			binaryLogger: init?.binaryLogger ?? (null! as binarylog.Logger | null),
			inTapHandle: init?.inTapHandle ?? (null! as ((ctx: context.Context | null, info: tap.Info | $.VarRef<tap.Info> | null) => [context.Context | null, $.GoError] | globalThis.Promise<[context.Context | null, $.GoError]>) | null),
			statsHandlers: init?.statsHandlers ?? (null! as $.Slice<stats.Handler | null>),
			maxConcurrentStreams: init?.maxConcurrentStreams ?? (0 as number),
			maxReceiveMessageSize: init?.maxReceiveMessageSize ?? (0 as number),
			maxSendMessageSize: init?.maxSendMessageSize ?? (0 as number),
			unknownStreamDesc: init?.unknownStreamDesc ?? (null! as __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null),
			keepaliveParams: init?.keepaliveParams ? init.keepaliveParams.clone() : new keepalive.ServerParameters(undefined, true),
			keepalivePolicy: init?.keepalivePolicy ? init.keepalivePolicy.clone() : new keepalive.EnforcementPolicy(undefined, true),
			initialWindowSize: init?.initialWindowSize ?? (0 as number),
			initialConnWindowSize: init?.initialConnWindowSize ?? (0 as number),
			writeBufferSize: init?.writeBufferSize ?? (0 as number),
			readBufferSize: init?.readBufferSize ?? (0 as number),
			sharedWriteBuffer: init?.sharedWriteBuffer ?? (false as boolean),
			connectionTimeout: init?.connectionTimeout ?? (0n as time.Duration),
			maxHeaderListSize: init?.maxHeaderListSize ?? (null! as $.VarRef<number> | null),
			headerTableSize: init?.headerTableSize ?? (null! as $.VarRef<number> | null),
			numServerWorkers: init?.numServerWorkers ?? (0 as number),
			bufferPool: init?.bufferPool ?? (null! as mem.BufferPool | null),
			waitForHandlers: init?.waitForHandlers ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): serverOptions {
		return new serverOptions(this, true)
	}

	public __goscriptAssign(source: serverOptions): void {
		const target = this._fields
		const values = source._fields
		target.creds = $.assignFieldValue(target.creds, values.creds, "credentials.TransportCredentials")
		target.codec = $.assignFieldValue(target.codec, values.codec, "grpc.baseCodec")
		target.cp = $.assignFieldValue(target.cp, values.cp, "grpc.Compressor")
		target.dc = $.assignFieldValue(target.dc, values.dc, "grpc.Decompressor")
		target.unaryInt = values.unaryInt
		target.streamInt = values.streamInt
		target.chainUnaryInts = values.chainUnaryInts
		target.chainStreamInts = values.chainStreamInts
		target.binaryLogger = $.assignFieldValue(target.binaryLogger, values.binaryLogger, "binarylog.Logger")
		target.inTapHandle = values.inTapHandle
		target.statsHandlers = values.statsHandlers
		target.maxConcurrentStreams = values.maxConcurrentStreams
		target.maxReceiveMessageSize = values.maxReceiveMessageSize
		target.maxSendMessageSize = values.maxSendMessageSize
		target.unknownStreamDesc = values.unknownStreamDesc
		$.assignStruct(target.keepaliveParams, values.keepaliveParams)
		$.assignStruct(target.keepalivePolicy, values.keepalivePolicy)
		target.initialWindowSize = values.initialWindowSize
		target.initialConnWindowSize = values.initialConnWindowSize
		target.writeBufferSize = values.writeBufferSize
		target.readBufferSize = values.readBufferSize
		target.sharedWriteBuffer = values.sharedWriteBuffer
		target.connectionTimeout = values.connectionTimeout
		target.maxHeaderListSize = values.maxHeaderListSize
		target.headerTableSize = values.headerTableSize
		target.numServerWorkers = values.numServerWorkers
		target.bufferPool = $.assignFieldValue(target.bufferPool, values.bufferPool, "mem.BufferPool")
		target.waitForHandlers = values.waitForHandlers
	}

	static __typeInfo = $.registerStructType(
		"grpc.serverOptions",
		() => new serverOptions(),
		() => [],
		serverOptions,
		() => [/* @__PURE__ */ $.structField("creds", "credentials.TransportCredentials", [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("codec", "grpc.baseCodec", [1], 16, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("cp", "grpc.Compressor", [2], 32, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("dc", "grpc.Decompressor", [3], 48, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("unaryInt", ({ kind: $.TypeKind.Function, name: "grpc.UnaryServerInterceptor", params: ["context.Context", { kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.pointerType("grpc.UnaryServerInfo"), ({ kind: $.TypeKind.Function, name: "grpc.UnaryHandler", params: ["context.Context", { kind: $.TypeKind.Interface, methods: [] }], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo), [4], 64, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("streamInt", ({ kind: $.TypeKind.Function, name: "grpc.StreamServerInterceptor", params: [{ kind: $.TypeKind.Interface, methods: [] }, "grpc.ServerStream", /* @__PURE__ */ $.pointerType("grpc.StreamServerInfo"), ({ kind: $.TypeKind.Function, name: "grpc.StreamHandler", params: [{ kind: $.TypeKind.Interface, methods: [] }, "grpc.ServerStream"], results: ["error"] } as $.FunctionTypeInfo)], results: ["error"] } as $.FunctionTypeInfo), [5], 72, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("chainUnaryInts", /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, name: "grpc.UnaryServerInterceptor", params: ["context.Context", { kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.pointerType("grpc.UnaryServerInfo"), ({ kind: $.TypeKind.Function, name: "grpc.UnaryHandler", params: ["context.Context", { kind: $.TypeKind.Interface, methods: [] }], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)), [6], 80, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("chainStreamInts", /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, name: "grpc.StreamServerInterceptor", params: [{ kind: $.TypeKind.Interface, methods: [] }, "grpc.ServerStream", /* @__PURE__ */ $.pointerType("grpc.StreamServerInfo"), ({ kind: $.TypeKind.Function, name: "grpc.StreamHandler", params: [{ kind: $.TypeKind.Interface, methods: [] }, "grpc.ServerStream"], results: ["error"] } as $.FunctionTypeInfo)], results: ["error"] } as $.FunctionTypeInfo)), [7], 104, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("binaryLogger", "binarylog.Logger", [8], 128, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("inTapHandle", ({ kind: $.TypeKind.Function, name: "tap.ServerInHandle", params: ["context.Context", /* @__PURE__ */ $.pointerType("tap.Info")], results: ["context.Context", "error"] } as $.FunctionTypeInfo), [9], 144, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("statsHandlers", /* @__PURE__ */ $.sliceType("stats.Handler"), [10], 152, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("maxConcurrentStreams", /* @__PURE__ */ $.basicType("uint32"), [11], 176, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("maxReceiveMessageSize", /* @__PURE__ */ $.basicType("int"), [12], 184, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("maxSendMessageSize", /* @__PURE__ */ $.basicType("int"), [13], 192, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("unknownStreamDesc", /* @__PURE__ */ $.pointerType("grpc.StreamDesc"), [14], 200, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("keepaliveParams", "keepalive.ServerParameters", [15], 208, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("keepalivePolicy", "keepalive.EnforcementPolicy", [16], 248, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("initialWindowSize", /* @__PURE__ */ $.basicType("int32"), [17], 264, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("initialConnWindowSize", /* @__PURE__ */ $.basicType("int32"), [18], 268, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("writeBufferSize", /* @__PURE__ */ $.basicType("int"), [19], 272, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("readBufferSize", /* @__PURE__ */ $.basicType("int"), [20], 280, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("sharedWriteBuffer", /* @__PURE__ */ $.basicType("bool"), [21], 288, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("connectionTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [22], 296, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("maxHeaderListSize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")), [23], 304, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("headerTableSize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")), [24], 312, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("numServerWorkers", /* @__PURE__ */ $.basicType("uint32"), [25], 320, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("bufferPool", "mem.BufferPool", [26], 328, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("waitForHandlers", /* @__PURE__ */ $.basicType("bool"), [27], 344, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class Server {
	public get opts(): serverOptions {
		return this._fields.opts
	}

	public set opts(value: serverOptions) {
		this._fields.opts = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get lis(): globalThis.Map<net.Listener | null, boolean> | null {
		return this._fields.lis
	}

	public set lis(value: globalThis.Map<net.Listener | null, boolean> | null) {
		this._fields.lis = value
	}

	// conns contains all active server transports. It is a map keyed on a
	// listener address with the value being the set of active transports
	// belonging to that listener.
	public get conns(): globalThis.Map<string, globalThis.Map<transport.ServerTransport | null, boolean> | null> | null {
		return this._fields.conns
	}

	public set conns(value: globalThis.Map<string, globalThis.Map<transport.ServerTransport | null, boolean> | null> | null) {
		this._fields.conns = value
	}

	public get serve(): boolean {
		return this._fields.serve
	}

	public set serve(value: boolean) {
		this._fields.serve = value
	}

	public get drain(): boolean {
		return this._fields.drain
	}

	public set drain(value: boolean) {
		this._fields.drain = value
	}

	public get cv(): sync.Cond | $.VarRef<sync.Cond> | null {
		return this._fields.cv
	}

	public set cv(value: sync.Cond | $.VarRef<sync.Cond> | null) {
		this._fields.cv = value
	}

	public get services(): globalThis.Map<string, serviceInfo | $.VarRef<serviceInfo> | null> | null {
		return this._fields.services
	}

	public set services(value: globalThis.Map<string, serviceInfo | $.VarRef<serviceInfo> | null> | null) {
		this._fields.services = value
	}

	public get events(): __goscript_trace.traceEventLog | null {
		return this._fields.events
	}

	public set events(value: __goscript_trace.traceEventLog | null) {
		this._fields.events = value
	}

	public get quit(): grpcsync.Event | $.VarRef<grpcsync.Event> | null {
		return this._fields.quit
	}

	public set quit(value: grpcsync.Event | $.VarRef<grpcsync.Event> | null) {
		this._fields.quit = value
	}

	public get done(): grpcsync.Event | $.VarRef<grpcsync.Event> | null {
		return this._fields.done
	}

	public set done(value: grpcsync.Event | $.VarRef<grpcsync.Event> | null) {
		this._fields.done = value
	}

	public get channelzRemoveOnce(): sync.Once {
		return this._fields.channelzRemoveOnce
	}

	public set channelzRemoveOnce(value: sync.Once) {
		this._fields.channelzRemoveOnce = value
	}

	public get serveWG(): sync.WaitGroup {
		return this._fields.serveWG
	}

	public set serveWG(value: sync.WaitGroup) {
		this._fields.serveWG = value
	}

	public get handlersWG(): sync.WaitGroup {
		return this._fields.handlersWG
	}

	public set handlersWG(value: sync.WaitGroup) {
		this._fields.handlersWG = value
	}

	public get channelz(): channelz2.Server | $.VarRef<channelz2.Server> | null {
		return this._fields.channelz
	}

	public set channelz(value: channelz2.Server | $.VarRef<channelz2.Server> | null) {
		this._fields.channelz = value
	}

	public get serverWorkerChannel(): $.Channel<(() => void) | null> | null {
		return this._fields.serverWorkerChannel
	}

	public set serverWorkerChannel(value: $.Channel<(() => void) | null> | null) {
		this._fields.serverWorkerChannel = value
	}

	public get serverWorkerChannelClose(): (() => void) | null {
		return this._fields.serverWorkerChannelClose
	}

	public set serverWorkerChannelClose(value: (() => void) | null) {
		this._fields.serverWorkerChannelClose = value
	}

	public _fields: {
		opts: serverOptions
		mu: sync.Mutex
		lis: globalThis.Map<net.Listener | null, boolean> | null
		conns: globalThis.Map<string, globalThis.Map<transport.ServerTransport | null, boolean> | null> | null
		serve: boolean
		drain: boolean
		cv: sync.Cond | $.VarRef<sync.Cond> | null
		services: globalThis.Map<string, serviceInfo | $.VarRef<serviceInfo> | null> | null
		events: __goscript_trace.traceEventLog | null
		quit: grpcsync.Event | $.VarRef<grpcsync.Event> | null
		done: grpcsync.Event | $.VarRef<grpcsync.Event> | null
		channelzRemoveOnce: sync.Once
		serveWG: sync.WaitGroup
		handlersWG: sync.WaitGroup
		channelz: channelz2.Server | $.VarRef<channelz2.Server> | null
		serverWorkerChannel: $.Channel<(() => void) | null> | null
		serverWorkerChannelClose: (() => void) | null
	}

	constructor(init?: Partial<{opts?: serverOptions, mu?: sync.Mutex, lis?: globalThis.Map<net.Listener | null, boolean> | null, conns?: globalThis.Map<string, globalThis.Map<transport.ServerTransport | null, boolean> | null> | null, serve?: boolean, drain?: boolean, cv?: sync.Cond | $.VarRef<sync.Cond> | null, services?: globalThis.Map<string, serviceInfo | $.VarRef<serviceInfo> | null> | null, events?: __goscript_trace.traceEventLog | null, quit?: grpcsync.Event | $.VarRef<grpcsync.Event> | null, done?: grpcsync.Event | $.VarRef<grpcsync.Event> | null, channelzRemoveOnce?: sync.Once, serveWG?: sync.WaitGroup, handlersWG?: sync.WaitGroup, channelz?: channelz2.Server | $.VarRef<channelz2.Server> | null, serverWorkerChannel?: $.Channel<(() => void) | null> | null, serverWorkerChannelClose?: (() => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			opts: init?.opts ? init.opts.clone() : new serverOptions(undefined, true),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			lis: init?.lis ?? (null! as globalThis.Map<net.Listener | null, boolean> | null),
			conns: init?.conns ?? (null! as globalThis.Map<string, globalThis.Map<transport.ServerTransport | null, boolean> | null> | null),
			serve: init?.serve ?? (false as boolean),
			drain: init?.drain ?? (false as boolean),
			cv: init?.cv ?? (null! as sync.Cond | $.VarRef<sync.Cond> | null),
			services: init?.services ?? (null! as globalThis.Map<string, serviceInfo | $.VarRef<serviceInfo> | null> | null),
			events: init?.events ?? (null! as __goscript_trace.traceEventLog | null),
			quit: init?.quit ?? (null! as grpcsync.Event | $.VarRef<grpcsync.Event> | null),
			done: init?.done ?? (null! as grpcsync.Event | $.VarRef<grpcsync.Event> | null),
			channelzRemoveOnce: init?.channelzRemoveOnce ? $.markAsStructValue($.cloneStructValue(init.channelzRemoveOnce)) : $.markAsStructValue(new sync.Once()),
			serveWG: init?.serveWG ? $.markAsStructValue($.cloneStructValue(init.serveWG)) : $.markAsStructValue(new sync.WaitGroup()),
			handlersWG: init?.handlersWG ? $.markAsStructValue($.cloneStructValue(init.handlersWG)) : $.markAsStructValue(new sync.WaitGroup()),
			channelz: init?.channelz ?? (null! as channelz2.Server | $.VarRef<channelz2.Server> | null),
			serverWorkerChannel: init?.serverWorkerChannel ?? (null! as $.Channel<(() => void) | null> | null),
			serverWorkerChannelClose: init?.serverWorkerChannelClose ?? (null! as (() => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Server {
		return new Server(this, true)
	}

	public __goscriptAssign(source: Server): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.opts, values.opts)
		$.assignStruct(target.mu, values.mu)
		target.lis = values.lis
		target.conns = values.conns
		target.serve = values.serve
		target.drain = values.drain
		target.cv = values.cv
		target.services = values.services
		target.events = $.assignFieldValue(target.events, values.events, "grpc.traceEventLog")
		target.quit = values.quit
		target.done = values.done
		$.assignStruct(target.channelzRemoveOnce, values.channelzRemoveOnce)
		$.assignStruct(target.serveWG, values.serveWG)
		$.assignStruct(target.handlersWG, values.handlersWG)
		target.channelz = values.channelz
		target.serverWorkerChannel = values.serverWorkerChannel
		target.serverWorkerChannelClose = values.serverWorkerChannelClose
	}

	public GetServiceInfo(): globalThis.Map<string, ServiceInfo> | null {
		const s: Server | $.VarRef<Server> | null = this;
		let ret: globalThis.Map<string, ServiceInfo> | null = $.makeMap<string, ServiceInfo>()
		for (let [n, srv] of $.pointerValue<Server>(s).services?.entries() ?? []) {
			let methods: $.Slice<MethodInfo> = $.makeSlice<MethodInfo>(0, $.len($.pointerValue<serviceInfo>(srv).methods) + $.len($.pointerValue<serviceInfo>(srv).streams), undefined, () => new MethodInfo(undefined, true))
			for (const [m, __rangeValue] of $.pointerValue<serviceInfo>(srv).methods?.entries() ?? []) {
				methods = $.appendOne(methods, new MethodInfo({Name: m, IsClientStream: false, IsServerStream: false}, true))
			}
			for (const [m, d] of $.pointerValue<serviceInfo>(srv).streams?.entries() ?? []) {
				methods = $.appendOne(methods, new MethodInfo({Name: m, IsClientStream: $.pointerValue<__goscript_stream.StreamDesc>(d).ClientStreams, IsServerStream: $.pointerValue<__goscript_stream.StreamDesc>(d).ServerStreams}, true))
			}

			$.mapSet(ret, n, new ServiceInfo({Methods: methods, Metadata: $.pointerValue<serviceInfo>(srv).mdata}, true))
		}
		return ret
	}

	public async GracefulStop(): globalThis.Promise<void> {
		const s: Server | $.VarRef<Server> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).stop(true) : Server.prototype.stop.call(s, true))
	}

	public async RegisterService(sd: ServiceDesc | $.VarRef<ServiceDesc> | null, ss: any): globalThis.Promise<void> {
		const s: Server | $.VarRef<Server> | null = this;
		if (ss != null) {
			let ht = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.pointerValue<ServiceDesc>(sd).HandlerType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			let st = reflect.TypeOf(ss)
			if (!(__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(st)).Implements($.pointerValueOrNil(ht)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Fatalf("grpc: Server.RegisterService found the handler of type %v that does not satisfy %v", $.arrayToSlice<any>([(st as any), (ht as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).register(sd, ss) : Server.prototype.register.call(s, sd, ss))
	}

	public async Serve(lis: net.Listener | null): globalThis.Promise<$.GoError> {
		let s: Server | $.VarRef<Server> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		await (s$ as Server).mu.Lock()
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).printf("serving", null) : Server.prototype.printf.call(s, "serving", null));
		;(s$ as Server).serve = true
		if ((s$ as Server).lis == null) {
			// Serve called after Stop or GracefulStop.
			void (s$ as Server).mu.Unlock()
			void (__goscriptAwait = (lis !== null && (lis as any).__isVarRef !== true && (lis as any).__goValue === undefined ? (lis as Exclude<net.Listener, null>) : $.pointerValue<Exclude<net.Listener, null>>(lis)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return ErrServerStopped
		}

		void (s$ as Server).serveWG.Add(1)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			void (s$ as Server).serveWG.Done()
			if (grpcsync.Event.prototype.HasFired.call((s$ as Server).quit)) {
				// Stop or GracefulStop called; block until done and return nil.
				await $.chanRecv(grpcsync.Event.prototype.Done.call((s$ as Server).done))
			}
		})() })

		let ls: listenSocket | $.VarRef<listenSocket> | null = (await (async () => { const __goscriptLiteralField3 = await channelz2.RegisterSocket((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((__goscriptAwait = (lis !== null && (lis as any).__isVarRef !== true && (lis as any).__goValue === undefined ? (lis as Exclude<net.Listener, null>) : $.pointerValue<Exclude<net.Listener, null>>(lis)).Addr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField1 = (__goscriptAwait = (lis !== null && (lis as any).__isVarRef !== true && (lis as any).__goValue === undefined ? (lis as Exclude<net.Listener, null>) : $.pointerValue<Exclude<net.Listener, null>>(lis)).Addr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField2 = channelz2.GetSocketOption((lis as any)); return new channelz2.Socket({SocketType: channelz2.SocketTypeListen, Parent: $.interfaceValue<channelz2.Entity | null>((s$ as Server).channelz, "*channelz.Server", /* @__PURE__ */ $.pointerType("channelz.Server")), RefName: __goscriptLiteralField0, LocalAddr: __goscriptLiteralField1, SocketOptions: __goscriptLiteralField2}) })())); return new listenSocket({Listener: lis, channelz: __goscriptLiteralField3}) })())
		$.mapSet((s$ as Server).lis, $.interfaceValue<net.Listener | null>(ls, "*grpc.listenSocket", /* @__PURE__ */ $.pointerType("grpc.listenSocket")), true)

		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			await (s$ as Server).mu.Lock()
			if (((s$ as Server).lis != null) && $.mapGet<net.Listener | null, boolean, boolean>((s$ as Server).lis, $.interfaceValue<net.Listener | null>(ls, "*grpc.listenSocket", /* @__PURE__ */ $.pointerType("grpc.listenSocket")), false)[0]) {
				await (ls !== null && (ls as any).__isVarRef !== true && (ls as any).__goValue === undefined ? ((ls as any) as listenSocket).Close() : listenSocket.prototype.Close.call(ls))
				$.deleteMapEntry((s$ as Server).lis, $.interfaceValue<net.Listener | null>(ls, "*grpc.listenSocket", /* @__PURE__ */ $.pointerType("grpc.listenSocket")))
			}
			void (s$ as Server).mu.Unlock()
		})() })

		void (s$ as Server).mu.Unlock()
		await channelz2.Info(logger, $.interfaceValue<channelz2.Entity | null>($.pointerValue<listenSocket>(ls).channelz, "*channelz.Socket", /* @__PURE__ */ $.pointerType("channelz.Socket")), $.arrayToSlice<any>(["ListenSocket created"]))

		let tempDelay: time.Duration = 0n
		while (true) {
			let [rawConn, err] = await (lis !== null && (lis as any).__isVarRef !== true && (lis as any).__goValue === undefined ? (lis as Exclude<net.Listener, null>) : $.pointerValue<Exclude<net.Listener, null>>(lis)).Accept()
			if (err != null) {
				{
					let [ne, ok] = $.typeAssertTuple<any>(err, { kind: $.TypeKind.Interface, methods: [{ name: "Temporary", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.basicType("bool") }] }] })
					if (ok && (__goscriptAwait = (ne !== null && (ne as any).__isVarRef !== true && (ne as any).__goValue === undefined ? (ne as any) : $.pointerValue<any>(ne)).Temporary(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						if (tempDelay == 0n) {
							tempDelay = 5000000n
						} else {
							tempDelay = $.int64Mul(tempDelay, 2n)
						}
						{
							let max = 1000000000n
							if (tempDelay > max) {
								tempDelay = max
							}
						}
						await (s$ as Server).mu.Lock()
						await Server.prototype.printf.call(s, "Accept error: %v; retrying in %v", $.arrayToSlice<any>([(err as any), $.namedValueInterfaceValue<any>(tempDelay, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
						void (s$ as Server).mu.Unlock()
						let timer: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer(tempDelay)
						const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, $.GoError>([
							{
								id: 0,
								isSend: false,
								channel: $.pointerValue<time.Timer>(timer).C,
							},
							{
								id: 1,
								isSend: false,
								channel: grpcsync.Event.prototype.Done.call((s$ as Server).quit),
								onSelected: async (__goscriptSelect0Result) => {
									time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(timer))
									return null
								}
							}
						], false)
						if (__goscriptSelect0HasReturn) {
							return __goscriptSelect0Value
						}
						continue
					}
				}
				await (s$ as Server).mu.Lock()
				await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).printf("done serving; Accept = %v", $.arrayToSlice<any>([(err as any)])) : Server.prototype.printf.call(s, "done serving; Accept = %v", $.arrayToSlice<any>([(err as any)])))
				void (s$ as Server).mu.Unlock()

				if (grpcsync.Event.prototype.HasFired.call((s$ as Server).quit)) {
					return null
				}
				return err
			}
			tempDelay = 0n
			// Start a new goroutine to deal with rawConn so we don't stall this Accept
			// loop goroutine.
			//
			// Make sure we account for the goroutine so GracefulStop doesn't nil out
			// s.conns before this conn can be added.
			void (s$ as Server).serveWG.Add(1)
			queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
				await Server.prototype.handleRawConn.call(s, (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((__goscriptAwait = (lis !== null && (lis as any).__isVarRef !== true && (lis as any).__goValue === undefined ? (lis as Exclude<net.Listener, null>) : $.pointerValue<Exclude<net.Listener, null>>(lis)).Addr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), rawConn)
				void (s$ as Server).serveWG.Done()
			})() })
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async ServeHTTP(w: http.ResponseWriter | null, r: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> {
		const s: Server | $.VarRef<Server> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		let [st, err] = await transport.NewServerHandlerTransport(w, r, (s$ as Server).opts.statsHandlers, (s$ as Server).opts.bufferPool)
		if (err != null) {
			// Errors returned from transport.NewServerHandlerTransport have
			// already been written to w.
			return
		}
		if (!await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).addConn("listenerAddressForServeHTTP", st) : Server.prototype.addConn.call(s, "listenerAddressForServeHTTP", st))) {
			return
		}
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (addr: string, st: transport.ServerTransport | null) => __receiver.removeConn(addr, st))((s$ as Server)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), "transport.ServerTransport"], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc.(*Server).removeConn-fm")
		const __goscriptDeferArg0 = st
		__defer.defer(async () => { await __goscriptDeferCallee0("listenerAddressForServeHTTP", __goscriptDeferArg0) })
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).serveStreams(http.Request.prototype.Context.call($.pointerValue<http.Request>(r)), st, null) : Server.prototype.serveStreams.call(s, http.Request.prototype.Context.call($.pointerValue<http.Request>(r)), st, null))
	}

	public async Stop(): globalThis.Promise<void> {
		const s: Server | $.VarRef<Server> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).stop(false) : Server.prototype.stop.call(s, false))
	}

	public async addConn(addr: string, st: transport.ServerTransport | null): globalThis.Promise<boolean> {
		let s: Server | $.VarRef<Server> | null = this;
		using __defer = new $.DisposableStack()
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		await (s$ as Server).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as Server).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		if ((s$ as Server).conns == null) {
			void (__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(st)).Close(errors.New("Server.addConn called when server has already been stopped")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return false
		}
		if ((s$ as Server).drain) {
			// Transport added after we drained our existing conns: drain it
			// immediately.
			void (__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(st)).Drain(""), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		if ($.mapGet<string, globalThis.Map<transport.ServerTransport | null, boolean> | null, globalThis.Map<transport.ServerTransport | null, boolean> | null>((s$ as Server).conns, addr, null)[0] == null) {
			// Create a map entry if this is the first connection on this listener.
			$.mapSet((s$ as Server).conns, addr, $.makeMap<transport.ServerTransport | null, boolean>())
		}
		$.mapSet($.mapGet<string, globalThis.Map<transport.ServerTransport | null, boolean> | null, globalThis.Map<transport.ServerTransport | null, boolean> | null>((s$ as Server).conns, addr, null)[0], st, true)
		return true
	}

	public async closeListenersLocked(): globalThis.Promise<void> {
		let s: Server | $.VarRef<Server> | null = this;
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		for (const [__goscriptRangeShadow0, __rangeValue] of (s$ as Server).lis?.entries() ?? []) {
			void (__goscriptAwait = (__goscriptRangeShadow0 !== null && (__goscriptRangeShadow0 as any).__isVarRef !== true && (__goscriptRangeShadow0 as any).__goValue === undefined ? (__goscriptRangeShadow0 as Exclude<net.Listener, null>) : $.pointerValue<Exclude<net.Listener, null>>(__goscriptRangeShadow0)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		;(s$ as Server).lis = null
	}

	public async closeServerTransportsLocked(): globalThis.Promise<void> {
		const s: Server | $.VarRef<Server> | null = this;
		for (const [__rangeKey, __goscriptRangeShadow1] of $.pointerValue<Server>(s).conns?.entries() ?? []) {
			for (const [st, __rangeValue] of __goscriptRangeShadow1?.entries() ?? []) {
				void (__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(st)).Close(errors.New("Server.Stop called")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	}

	public async drainAllServerTransportsLocked(): globalThis.Promise<void> {
		let s: Server | $.VarRef<Server> | null = this;
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		if (!(s$ as Server).drain) {
			for (const [__rangeKey, __goscriptRangeShadow2] of (s$ as Server).conns?.entries() ?? []) {
				for (const [st, __rangeValue] of __goscriptRangeShadow2?.entries() ?? []) {
					void (__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(st)).Drain("graceful_stop"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
			;(s$ as Server).drain = true
		}
	}

	public async errorf(format: string, a: $.Slice<any>): globalThis.Promise<void> {
		const s: Server | $.VarRef<Server> | null = this;
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		if ((s$ as Server).events != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceEventLog, null>>((s$ as Server).events).Errorf(format, a), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async getCodec(contentSubtype: string): globalThis.Promise<__goscript_codec.baseCodec | null> {
		const s: Server | $.VarRef<Server> | null = this;
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		if ((s$ as Server).opts.codec != null) {
			return (s$ as Server).opts.codec
		}
		if ($.stringEqual(contentSubtype, "")) {
			return (await __goscript_codec.getCodec(proto.Name) as __goscript_codec.baseCodec | null)
		}
		let codec = await __goscript_codec.getCodec(contentSubtype)
		if (codec == null) {
			void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Warningf("Unsupported codec %q. Defaulting to %q for now. This will start to fail in future releases.", $.arrayToSlice<any>([contentSubtype, proto.Name])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return (await __goscript_codec.getCodec(proto.Name) as __goscript_codec.baseCodec | null)
		}
		return (codec as __goscript_codec.baseCodec | null)
	}

	public async handleRawConn(lisAddr: string, rawConn: net.Conn | null): globalThis.Promise<void> {
		const s: Server | $.VarRef<Server> | null = this;
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		if (grpcsync.Event.prototype.HasFired.call((s$ as Server).quit)) {
			void (__goscriptAwait = (rawConn !== null && (rawConn as any).__isVarRef !== true && (rawConn as any).__goValue === undefined ? (rawConn as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(rawConn)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		void (__goscriptAwait = (rawConn !== null && (rawConn as any).__isVarRef !== true && (rawConn as any).__goValue === undefined ? (rawConn as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(rawConn)).SetDeadline($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time.Now())).Add((s$ as Server).opts.connectionTimeout)))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		// Finish handshaking (HTTP2)
		let st = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).newHTTP2Transport(rawConn) : Server.prototype.newHTTP2Transport.call(s, rawConn))
		void (__goscriptAwait = (rawConn !== null && (rawConn as any).__isVarRef !== true && (rawConn as any).__goValue === undefined ? (rawConn as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(rawConn)).SetDeadline($.markAsStructValue(new time.Time())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (st == null) {
			return
		}

		{
			let [cc, ok] = $.typeAssertTuple<any>(rawConn, { kind: $.TypeKind.Interface, methods: [{ name: "PassServerTransport", args: [{ name: "_p0", type: "transport.ServerTransport" }], returns: [] }] })
			if (ok) {
				void (__goscriptAwait = (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? (cc as any) : $.pointerValue<any>(cc)).PassServerTransport(st), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		if (!await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).addConn(lisAddr, st) : Server.prototype.addConn.call(s, lisAddr, st))) {
			return
		}
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).serveStreams(context.Background(), st, rawConn) : Server.prototype.serveStreams.call(s, context.Background(), st, rawConn))
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).removeConn(lisAddr, st) : Server.prototype.removeConn.call(s, lisAddr, st))
		})() })
	}

	public async handleStream(t: transport.ServerTransport | null, stream: transport.Stream | $.VarRef<transport.Stream> | null): globalThis.Promise<void> {
		const s: Server | $.VarRef<Server> | null = this;
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		let ctx = (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).Context() : transport.Stream.prototype.Context.call(stream))
		ctx = contextWithServer(ctx, s)
		let ti: __goscript_trace.traceInfo | $.VarRef<__goscript_trace.traceInfo> | null = null! as __goscript_trace.traceInfo | $.VarRef<__goscript_trace.traceInfo> | null
		if (__goscript_trace.EnableTracing) {
			let tr = await __goscript_trace_withtrace.newTrace($.concatString("grpc.Recv.", __goscript_trace.methodFamily((stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).Method() : transport.Stream.prototype.Method.call(stream)))), (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).Method() : transport.Stream.prototype.Method.call(stream)))
			ctx = __goscript_trace_withtrace.newTraceContext(ctx, tr)
			ti = new __goscript_trace.traceInfo({tr: tr, firstLine: new __goscript_trace.firstLine({client: false, remoteAddr: $.pointerValue<peer2.Peer>(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(t)).Peer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as peer2.Peer | $.VarRef<peer2.Peer> | null)).Addr}, true)})
			{
				let [dl, ok] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Deadline()
				if (ok) {
					$.pointerValue<__goscript_trace.traceInfo>(ti).firstLine.deadline = time.Until($.markAsStructValue($.cloneStructValue(dl)))
				}
			}
		}

		let sm = (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).Method() : transport.Stream.prototype.Method.call(stream))
		if ((!$.stringEqual(sm, "")) && ($.indexString(sm, 0) == 47)) {
			sm = $.sliceStringOrBytes(sm, 1, undefined)
		}
		let pos = strings.LastIndex(sm, "/")
		if (pos == -1) {
			if (ti != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>(ti).tr).LazyLog($.interfaceValue<fmt.Stringer | null>(new __goscript_trace.fmtStringer({format: "Malformed method name %q", a: $.arrayToSlice<any>([sm])}), "*grpc.fmtStringer", /* @__PURE__ */ $.pointerType("grpc.fmtStringer")), true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>(ti).tr).SetError(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			let errDesc = await fmt.Sprintf("malformed method name: %q", (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).Method() : transport.Stream.prototype.Method.call(stream)))
			{
				let err = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(t)).WriteStatus(stream, status.New(12, errDesc)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					if (ti != null) {
						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>(ti).tr).LazyLog($.interfaceValue<fmt.Stringer | null>(new __goscript_trace.fmtStringer({format: "%v", a: $.arrayToSlice<any>([(err as any)])}), "*grpc.fmtStringer", /* @__PURE__ */ $.pointerType("grpc.fmtStringer")), true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>(ti).tr).SetError(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					await channelz2.Warningf(logger, $.interfaceValue<channelz2.Entity | null>((s$ as Server).channelz, "*channelz.Server", /* @__PURE__ */ $.pointerType("channelz.Server")), "grpc: Server.handleStream failed to write status: %v", $.arrayToSlice<any>([(err as any)]))
				}
			}
			if (ti != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>(ti).tr).Finish(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return
		}
		let service = $.sliceStringOrBytes(sm, undefined, pos)
		let method = $.sliceStringOrBytes(sm, pos + 1, undefined)

		let __goscriptTuple0: any = await metadata.FromIncomingContext(ctx)
		let md: metadata.MD = __goscriptTuple0[0]
		for (let __goscriptRangeTarget0 = (s$ as Server).opts.statsHandlers, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let sh = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as stats.Handler | null)
			ctx = (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).TagRPC(ctx, (() => { const __goscriptLiteralField4 = (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).Method() : transport.Stream.prototype.Method.call(stream)); return new stats.RPCTagInfo({FullMethodName: __goscriptLiteralField4}) })()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleRPC(ctx, $.interfaceValue<stats.RPCStats | null>((await (async () => { const __goscriptLiteralField5 = (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).Method() : transport.Stream.prototype.Method.call(stream)); const __goscriptLiteralField6 = await (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).RecvCompress() : transport.Stream.prototype.RecvCompress.call(stream)); const __goscriptLiteralField7 = (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).HeaderWireLength() : transport.Stream.prototype.HeaderWireLength.call(stream)); return new stats.InHeader({FullMethod: __goscriptLiteralField5, RemoteAddr: $.pointerValue<peer2.Peer>(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(t)).Peer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as peer2.Peer | $.VarRef<peer2.Peer> | null)).Addr, LocalAddr: $.pointerValue<peer2.Peer>(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(t)).Peer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as peer2.Peer | $.VarRef<peer2.Peer> | null)).LocalAddr, Compression: __goscriptLiteralField6, WireLength: __goscriptLiteralField7, Header: md}) })()), "*stats.InHeader", /* @__PURE__ */ $.pointerType("stats.InHeader"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		// To have calls in stream callouts work. Will delete once all stats handler
		// calls come from the gRPC layer.
		void (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).SetContext(ctx) : transport.Stream.prototype.SetContext.call(stream, ctx))

		let __goscriptTuple1: any = $.mapGet<string, serviceInfo | $.VarRef<serviceInfo> | null, serviceInfo | $.VarRef<serviceInfo> | null>((s$ as Server).services, service, null)
		let srv: serviceInfo | $.VarRef<serviceInfo> | null = __goscriptTuple1[0]
		let knownService = __goscriptTuple1[1]
		let srv$: serviceInfo = srv == null ? $.pointerTarget<serviceInfo>(srv) : (srv as any).__isVarRef === true ? (srv as any).value : (srv as any).__goValue === undefined ? (srv as any) : $.pointerTarget<serviceInfo>(srv)
		if (knownService) {
			{
				let __goscriptTuple2: any = $.mapGet<string, MethodDesc | $.VarRef<MethodDesc> | null, MethodDesc | $.VarRef<MethodDesc> | null>((srv$ as serviceInfo).methods, method, null)
				let __goscriptShadow0: MethodDesc | $.VarRef<MethodDesc> | null = __goscriptTuple2[0]
				let ok = __goscriptTuple2[1]
				if (ok) {
					await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).processUnaryRPC(ctx, t, stream, srv, __goscriptShadow0, ti) : Server.prototype.processUnaryRPC.call(s, ctx, t, stream, srv, __goscriptShadow0, ti))
					return
				}
			}
			{
				let __goscriptTuple3: any = $.mapGet<string, __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null>((srv$ as serviceInfo).streams, method, null)
				let sd: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null = __goscriptTuple3[0]
				let ok = __goscriptTuple3[1]
				if (ok) {
					await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).processStreamingRPC(ctx, t, stream, srv, sd, ti) : Server.prototype.processStreamingRPC.call(s, ctx, t, stream, srv, sd, ti))
					return
				}
			}
		}
		// Unknown service, or known server unknown method.
		{
			let unknownDesc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null = (s$ as Server).opts.unknownStreamDesc
			if (unknownDesc != null) {
				await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).processStreamingRPC(ctx, t, stream, null, unknownDesc, ti) : Server.prototype.processStreamingRPC.call(s, ctx, t, stream, null, unknownDesc, ti))
				return
			}
		}
		let errDesc: string = ""
		if (!knownService) {
			errDesc = await fmt.Sprintf("unknown service %v", service)
		} else {
			errDesc = await fmt.Sprintf("unknown method %v for service %v", method, service)
		}
		if (ti != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>(ti).tr).LazyPrintf("%s", $.arrayToSlice<any>([errDesc])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>(ti).tr).SetError(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		{
			let err = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(t)).WriteStatus(stream, status.New(12, errDesc)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				if (ti != null) {
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>(ti).tr).LazyLog($.interfaceValue<fmt.Stringer | null>(new __goscript_trace.fmtStringer({format: "%v", a: $.arrayToSlice<any>([(err as any)])}), "*grpc.fmtStringer", /* @__PURE__ */ $.pointerType("grpc.fmtStringer")), true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>(ti).tr).SetError(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				await channelz2.Warningf(logger, $.interfaceValue<channelz2.Entity | null>((s$ as Server).channelz, "*channelz.Server", /* @__PURE__ */ $.pointerType("channelz.Server")), "grpc: Server.handleStream failed to write status: %v", $.arrayToSlice<any>([(err as any)]))
			}
		}
		if (ti != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>(ti).tr).Finish(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public incrCallsFailed(): void {
		const s: Server | $.VarRef<Server> | null = this;
		$.pointerValue<channelz2.Server>($.pointerValue<Server>(s).channelz).ServerMetrics.CallsFailed.Add(1n)
	}

	public incrCallsStarted(): void {
		const s: Server | $.VarRef<Server> | null = this;
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		$.pointerValue<channelz2.Server>((s$ as Server).channelz).ServerMetrics.CallsStarted.Add(1n)
		$.pointerValue<channelz2.Server>((s$ as Server).channelz).ServerMetrics.LastCallStartedTimestamp.Store($.markAsStructValue($.cloneStructValue(time.Now())).UnixNano())
	}

	public incrCallsSucceeded(): void {
		const s: Server | $.VarRef<Server> | null = this;
		$.pointerValue<channelz2.Server>($.pointerValue<Server>(s).channelz).ServerMetrics.CallsSucceeded.Add(1n)
	}

	public async initServerWorkers(): globalThis.Promise<void> {
		let s: Server | $.VarRef<Server> | null = this;
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s);
		;(s$ as Server).serverWorkerChannel = $.makeChannel<(() => void) | null>(0, null! as (() => void) | null, "both");
		;(s$ as Server).serverWorkerChannelClose = grpcsync.OnceFunc($.functionValue((): void => {
			void (s$ as Server).serverWorkerChannel!.close()
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		for (let i = 0; i < (s$ as Server).opts.numServerWorkers; i = ((i + 1) >>> 0)) {
			const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.serverWorker())((s$ as Server)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc.(*Server).serverWorker-fm")
			queueMicrotask(async () => { await __goscriptDeferCallee2() })
		}
	}

	public isRegisteredMethod(serviceMethod: string): boolean {
		const s: Server | $.VarRef<Server> | null = this;
		if ((!$.stringEqual(serviceMethod, "")) && ($.indexString(serviceMethod, 0) == 47)) {
			serviceMethod = $.sliceStringOrBytes(serviceMethod, 1, undefined)
		}
		let pos = strings.LastIndex(serviceMethod, "/")
		if (pos == -1) {
			return false
		}
		let service = $.sliceStringOrBytes(serviceMethod, undefined, pos)
		let method = $.sliceStringOrBytes(serviceMethod, pos + 1, undefined)
		let __goscriptTuple4: any = $.mapGet<string, serviceInfo | $.VarRef<serviceInfo> | null, serviceInfo | $.VarRef<serviceInfo> | null>($.pointerValue<Server>(s).services, service, null)
		let srv: serviceInfo | $.VarRef<serviceInfo> | null = __goscriptTuple4[0]
		let knownService = __goscriptTuple4[1]
		let srv$: serviceInfo = srv == null ? $.pointerTarget<serviceInfo>(srv) : (srv as any).__isVarRef === true ? (srv as any).value : (srv as any).__goValue === undefined ? (srv as any) : $.pointerTarget<serviceInfo>(srv)
		if (knownService) {
			{
				let [, ok] = $.mapGet<string, MethodDesc | $.VarRef<MethodDesc> | null, MethodDesc | $.VarRef<MethodDesc> | null>((srv$ as serviceInfo).methods, method, null)
				if (ok) {
					return true
				}
			}
			{
				let [, ok] = $.mapGet<string, __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null>((srv$ as serviceInfo).streams, method, null)
				if (ok) {
					return true
				}
			}
		}
		return false
	}

	public async newHTTP2Transport(c: net.Conn | null): globalThis.Promise<transport.ServerTransport | null> {
		const s: Server | $.VarRef<Server> | null = this;
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		let config: transport.ServerConfig | $.VarRef<transport.ServerConfig> | null = new transport.ServerConfig({MaxStreams: (s$ as Server).opts.maxConcurrentStreams, ConnectionTimeout: (s$ as Server).opts.connectionTimeout, Credentials: (s$ as Server).opts.creds, InTapHandle: (s$ as Server).opts.inTapHandle, StatsHandlers: (s$ as Server).opts.statsHandlers, KeepaliveParams: (s$ as Server).opts.keepaliveParams, KeepalivePolicy: (s$ as Server).opts.keepalivePolicy, InitialWindowSize: (s$ as Server).opts.initialWindowSize, InitialConnWindowSize: (s$ as Server).opts.initialConnWindowSize, WriteBufferSize: (s$ as Server).opts.writeBufferSize, ReadBufferSize: (s$ as Server).opts.readBufferSize, SharedWriteBuffer: (s$ as Server).opts.sharedWriteBuffer, ChannelzParent: (s$ as Server).channelz, MaxHeaderListSize: (s$ as Server).opts.maxHeaderListSize, HeaderTableSize: (s$ as Server).opts.headerTableSize, BufferPool: (s$ as Server).opts.bufferPool})
		let [st, err] = await transport.NewServerTransport(c, config)
		if (err != null) {
			await (s$ as Server).mu.Lock()
			await Server.prototype.errorf.call(s, "NewServerTransport(%q) failed: %v", $.arrayToSlice<any>([((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(c)).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any), (err as any)]))
			void (s$ as Server).mu.Unlock()
			// ErrConnDispatched means that the connection was dispatched away from
			// gRPC; those connections should be left open.
			if (!$.comparableEqual(err, credentials.ErrConnDispatched)) {
				// Don't log on ErrConnDispatched and io.EOF to prevent log spam.
				if (!$.comparableEqual(err, io.EOF)) {
					await channelz2.Info(logger, $.interfaceValue<channelz2.Entity | null>((s$ as Server).channelz, "*channelz.Server", /* @__PURE__ */ $.pointerType("channelz.Server")), $.arrayToSlice<any>(["grpc: Server.Serve failed to create ServerTransport: ", (err as any)]))
				}
				void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(c)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return null
		}

		return st
	}

	public async printf(format: string, a: $.Slice<any>): globalThis.Promise<void> {
		const s: Server | $.VarRef<Server> | null = this;
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		if ((s$ as Server).events != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceEventLog, null>>((s$ as Server).events).Printf(format, a), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async processStreamingRPC(ctx: context.Context | null, t: transport.ServerTransport | null, stream: transport.Stream | $.VarRef<transport.Stream> | null, info: serviceInfo | $.VarRef<serviceInfo> | null, sd: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, trInfo: __goscript_trace.traceInfo | $.VarRef<__goscript_trace.traceInfo> | null): globalThis.Promise<$.GoError> {
		const s: Server | $.VarRef<Server> | null = this;
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		const sd$: __goscript_stream.StreamDesc = sd == null ? $.pointerTarget<__goscript_stream.StreamDesc>(sd) : (sd as any).__isVarRef === true ? (sd as any).value : (sd as any).__goValue === undefined ? (sd as any) : $.pointerTarget<__goscript_stream.StreamDesc>(sd)
		const trInfo$: __goscript_trace.traceInfo = trInfo == null ? $.pointerTarget<__goscript_trace.traceInfo>(trInfo) : (trInfo as any).__isVarRef === true ? (trInfo as any).value : (trInfo as any).__goValue === undefined ? (trInfo as any) : $.pointerTarget<__goscript_trace.traceInfo>(trInfo)
		if (channelz2.IsOn()) {
			void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).incrCallsStarted() : Server.prototype.incrCallsStarted.call(s))
		}
		let shs: $.Slice<stats.Handler | null> = (s$ as Server).opts.statsHandlers
		let statsBegin: stats.Begin | $.VarRef<stats.Begin> | null = null! as stats.Begin | $.VarRef<stats.Begin> | null
		if ($.sliceLen(shs) != 0) {
			let beginTime = $.markAsStructValue($.cloneStructValue(time.Now()))
			statsBegin = new stats.Begin({BeginTime: $.markAsStructValue($.cloneStructValue(beginTime)), IsClientStream: (sd$ as __goscript_stream.StreamDesc).ClientStreams, IsServerStream: (sd$ as __goscript_stream.StreamDesc).ServerStreams})
			for (let __goscriptRangeTarget1 = shs, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				let sh = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as stats.Handler | null)
				void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleRPC(ctx, $.interfaceValue<stats.RPCStats | null>(statsBegin, "*stats.Begin", /* @__PURE__ */ $.pointerType("stats.Begin"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		ctx = NewContextWithServerTransportStream(ctx, $.interfaceValue<ServerTransportStream | null>(stream, "*transport.Stream", /* @__PURE__ */ $.pointerType("transport.Stream")))
		let ss: __goscript_stream.serverStream | $.VarRef<__goscript_stream.serverStream> | null = (await (async () => { const __goscriptLiteralField8 = await Server.prototype.getCodec.call(s, (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).ContentSubtype() : transport.Stream.prototype.ContentSubtype.call(stream))); return new __goscript_stream.serverStream({ctx: ctx, t: t, s: stream, p: new __goscript_rpc_util.parser({r: $.interfaceValue<__goscript_rpc_util.streamReader | null>(stream, "*transport.Stream", /* @__PURE__ */ $.pointerType("transport.Stream")), bufferPool: (s$ as Server).opts.bufferPool}), codec: __goscriptLiteralField8, maxReceiveMessageSize: (s$ as Server).opts.maxReceiveMessageSize, maxSendMessageSize: (s$ as Server).opts.maxSendMessageSize, trInfo: trInfo, statsHandler: shs}) })())
		let ss$: __goscript_stream.serverStream = ss == null ? $.pointerTarget<__goscript_stream.serverStream>(ss) : (ss as any).__isVarRef === true ? (ss as any).value : (ss as any).__goValue === undefined ? (ss as any) : $.pointerTarget<__goscript_stream.serverStream>(ss)

		if ((($.sliceLen(shs) != 0) || (trInfo != null)) || channelz2.IsOn()) {
			// See comment in processUnaryRPC on defers.
			__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
				if (trInfo != null) {
					await (ss$ as __goscript_stream.serverStream).mu.Lock()
					if ((err != null) && (!$.comparableEqual(err, io.EOF))) {
						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>((ss$ as __goscript_stream.serverStream).trInfo).tr).LazyLog($.interfaceValue<fmt.Stringer | null>(new __goscript_trace.fmtStringer({format: "%v", a: $.arrayToSlice<any>([(err as any)])}), "*grpc.fmtStringer", /* @__PURE__ */ $.pointerType("grpc.fmtStringer")), true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>((ss$ as __goscript_stream.serverStream).trInfo).tr).SetError(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>((ss$ as __goscript_stream.serverStream).trInfo).tr).Finish(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					$.pointerValue<__goscript_trace.traceInfo>((ss$ as __goscript_stream.serverStream).trInfo).tr = null
					void (ss$ as __goscript_stream.serverStream).mu.Unlock()
				}

				if ($.sliceLen(shs) != 0) {
					let end: stats.End | $.VarRef<stats.End> | null = (() => { const __goscriptLiteralField9 = $.markAsStructValue($.cloneStructValue(time.Now())); return new stats.End({BeginTime: $.markAsStructValue($.cloneStructValue($.pointerValue<stats.Begin>(statsBegin).BeginTime)), EndTime: __goscriptLiteralField9}) })()
					if ((err != null) && (!$.comparableEqual(err, io.EOF))) {
						$.pointerValue<stats.End>(end).Error = await __goscript_rpc_util.toRPCErr(err)
					}
					for (let __goscriptRangeTarget2 = shs, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
						let sh = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as stats.Handler | null)
						void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleRPC(ctx, $.interfaceValue<stats.RPCStats | null>(end, "*stats.End", /* @__PURE__ */ $.pointerType("stats.End"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}

				if (channelz2.IsOn()) {
					if ((err != null) && (!$.comparableEqual(err, io.EOF))) {
						void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).incrCallsFailed() : Server.prototype.incrCallsFailed.call(s))
					} else {
						void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).incrCallsSucceeded() : Server.prototype.incrCallsSucceeded.call(s))
					}
				}
			})() })
		}

		{
			let ml = await binarylog.GetMethodLogger((stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).Method() : transport.Stream.prototype.Method.call(stream)))
			if (ml != null) {
				;(ss$ as __goscript_stream.serverStream).binlogs = $.appendOne((ss$ as __goscript_stream.serverStream).binlogs, ml, $.appendZeros.nil)
			}
		}
		if ((s$ as Server).opts.binaryLogger != null) {
			{
				let ml = (__goscriptAwait = $.pointerValue<Exclude<binarylog.Logger, null>>((s$ as Server).opts.binaryLogger).GetMethodLogger((stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).Method() : transport.Stream.prototype.Method.call(stream))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (ml != null) {
					;(ss$ as __goscript_stream.serverStream).binlogs = $.appendOne((ss$ as __goscript_stream.serverStream).binlogs, ml, $.appendZeros.nil)
				}
			}
		}
		if ($.sliceLen((ss$ as __goscript_stream.serverStream).binlogs) != 0) {
			let __goscriptTuple5: any = await metadata.FromIncomingContext(ctx)
			let md: metadata.MD = __goscriptTuple5[0]
			let logEntry: binarylog.ClientHeader | $.VarRef<binarylog.ClientHeader> | null = (() => { const __goscriptLiteralField10 = (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).Method() : transport.Stream.prototype.Method.call(stream)); return new binarylog.ClientHeader({Header: md, MethodName: __goscriptLiteralField10, PeerAddr: null}) })()
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
			{
				let a: $.Slice<string> = $.mapGet<string, $.Slice<string>, $.Slice<string>>(md, ":authority", null)[0]
				if ($.sliceLen(a) > 0) {
					;(logEntry$ as binarylog.ClientHeader).Authority = $.arrayIndex(a!, 0)
				}
			}
			{
				let __goscriptTuple6: any = await peer2.FromContext((ss !== null && (ss as any).__isVarRef !== true && (ss as any).__goValue === undefined ? ((ss as any) as __goscript_stream.serverStream).Context() : __goscript_stream.serverStream.prototype.Context.call(ss)))
				let __goscriptShadow1: peer2.Peer | $.VarRef<peer2.Peer> | null = __goscriptTuple6[0]
				let ok = __goscriptTuple6[1]
				if (ok) {
					;(logEntry$ as binarylog.ClientHeader).PeerAddr = $.pointerValue<peer2.Peer>(__goscriptShadow1).Addr
				}
			}
			for (let __goscriptRangeTarget3 = (ss$ as __goscript_stream.serverStream).binlogs, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
				let binlog = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as binarylog.MethodLogger | null)
				void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log(ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(logEntry, "*binarylog.ClientHeader", /* @__PURE__ */ $.pointerType("binarylog.ClientHeader"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		// If dc is set and matches the stream's compression, use it.  Otherwise, try
		// to find a matching registered compressor for decomp.
		{
			let rc = await (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).RecvCompress() : transport.Stream.prototype.RecvCompress.call(stream))
			if (((s$ as Server).opts.dc != null) && ($.stringEqual((__goscriptAwait = $.pointerValue<Exclude<__goscript_rpc_util.Decompressor, null>>((s$ as Server).opts.dc).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), rc))) {
				;(ss$ as __goscript_stream.serverStream).dc = (s$ as Server).opts.dc
			} else {
				if ((!$.stringEqual(rc, "")) && (!$.stringEqual(rc, encoding.Identity))) {
					;(ss$ as __goscript_stream.serverStream).decomp = encoding.GetCompressor(rc)
					if ((ss$ as __goscript_stream.serverStream).decomp == null) {
						let st: status2.Status | $.VarRef<status2.Status> | null = await status.Newf(12, "grpc: Decompressor is not installed for grpc-encoding %q", $.arrayToSlice<any>([rc]))
						void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(t)).WriteStatus((ss$ as __goscript_stream.serverStream).s, st), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						const __goscriptReturn0: $.GoError = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as status2.Status).Err() : status2.Status.prototype.Err.call(st))
						err = __goscriptReturn0
						await __defer.dispose()
						return err
					}
				}
			}
		}

		// If cp is set, use it.  Otherwise, attempt to compress the response using
		// the incoming message compression method.
		//
		// NOTE: this needs to be ahead of all handling, https://github.com/grpc/grpc-go/issues/686.
		if ((s$ as Server).opts.cp != null) {
			;(ss$ as __goscript_stream.serverStream).cp = (s$ as Server).opts.cp;
			;(ss$ as __goscript_stream.serverStream).sendCompressorName = (__goscriptAwait = $.pointerValue<Exclude<__goscript_rpc_util.Compressor, null>>((s$ as Server).opts.cp).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			{
				let rc = await (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).RecvCompress() : transport.Stream.prototype.RecvCompress.call(stream))
				if ((!$.stringEqual(rc, "")) && (!$.stringEqual(rc, encoding.Identity))) {
					// Legacy compressor not specified; attempt to respond with same encoding.
					;(ss$ as __goscript_stream.serverStream).comp = encoding.GetCompressor(rc)
					if ((ss$ as __goscript_stream.serverStream).comp != null) {
						;(ss$ as __goscript_stream.serverStream).sendCompressorName = rc
					}
				}
			}
		}

		if (!$.stringEqual((ss$ as __goscript_stream.serverStream).sendCompressorName, "")) {
			{
				let __goscriptShadow2 = (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).SetSendCompress((ss$ as __goscript_stream.serverStream).sendCompressorName) : transport.Stream.prototype.SetSendCompress.call(stream, (ss$ as __goscript_stream.serverStream).sendCompressorName))
				if (__goscriptShadow2 != null) {
					const __goscriptReturn1: $.GoError = await status.Errorf(13, "grpc: failed to set send compressor: %v", $.arrayToSlice<any>([(__goscriptShadow2 as any)]))
					err = __goscriptReturn1
					await __defer.dispose()
					return err
				}
			}
		}

		;(ss$ as __goscript_stream.serverStream).ctx = __goscript_rpc_util.newContextWithRPCInfo((ss$ as __goscript_stream.serverStream).ctx, false, (ss$ as __goscript_stream.serverStream).codec, (ss$ as __goscript_stream.serverStream).cp, (ss$ as __goscript_stream.serverStream).comp)

		if (trInfo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>((trInfo$ as __goscript_trace.traceInfo).tr).LazyLog($.interfaceValue<fmt.Stringer | null>($.fieldRef((trInfo$ as __goscript_trace.traceInfo)._fields, "firstLine"), "*grpc.firstLine", /* @__PURE__ */ $.pointerType("grpc.firstLine")), false), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		let appErr: $.GoError = null! as $.GoError
		let server: any = null! as any
		if (info != null) {
			server = $.pointerValue<serviceInfo>(info).serviceImpl
		}
		if ((s$ as Server).opts.streamInt == null) {
			appErr = (__goscriptAwait = (sd$ as __goscript_stream.StreamDesc).Handler!(server, $.interfaceValue<__goscript_stream.ServerStream | null>(ss, "*grpc.serverStream", /* @__PURE__ */ $.pointerType("grpc.serverStream"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			let __goscriptShadow3: __goscript_interceptor.StreamServerInfo | $.VarRef<__goscript_interceptor.StreamServerInfo> | null = (() => { const __goscriptLiteralField11 = (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).Method() : transport.Stream.prototype.Method.call(stream)); return new __goscript_interceptor.StreamServerInfo({FullMethod: __goscriptLiteralField11, IsClientStream: (sd$ as __goscript_stream.StreamDesc).ClientStreams, IsServerStream: (sd$ as __goscript_stream.StreamDesc).ServerStreams}) })()
			appErr = (__goscriptAwait = (s$ as Server).opts.streamInt!(server, $.interfaceValue<__goscript_stream.ServerStream | null>(ss, "*grpc.serverStream", /* @__PURE__ */ $.pointerType("grpc.serverStream")), __goscriptShadow3, (sd$ as __goscript_stream.StreamDesc).Handler), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if (appErr != null) {
			let __goscriptTuple7: any = await status.FromError(appErr)
			let appStatus: status2.Status | $.VarRef<status2.Status> | null = __goscriptTuple7[0]
			let ok = __goscriptTuple7[1]
			if (!ok) {
				// Convert non-status application error to a status error with code
				// Unknown, but handle context errors specifically.
				appStatus = await status.FromContextError(appErr)
				appErr = (appStatus !== null && (appStatus as any).__isVarRef !== true && (appStatus as any).__goValue === undefined ? ((appStatus as any) as status2.Status).Err() : status2.Status.prototype.Err.call(appStatus))
			}
			if (trInfo != null) {
				await (ss$ as __goscript_stream.serverStream).mu.Lock()
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>((ss$ as __goscript_stream.serverStream).trInfo).tr).LazyLog($.namedValueInterfaceValue<fmt.Stringer | null>((appStatus !== null && (appStatus as any).__isVarRef !== true && (appStatus as any).__goValue === undefined ? ((appStatus as any) as status2.Status).Message() : status2.Status.prototype.Message.call(appStatus)), "grpc.stringer", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>((ss$ as __goscript_stream.serverStream).trInfo).tr).SetError(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (ss$ as __goscript_stream.serverStream).mu.Unlock()
			}
			if ($.sliceLen((ss$ as __goscript_stream.serverStream).binlogs) != 0) {
				let st: binarylog.ServerTrailer | $.VarRef<binarylog.ServerTrailer> | null = (() => { const __goscriptLiteralField12 = transport.Stream.prototype.Trailer.call((ss$ as __goscript_stream.serverStream).s); return new binarylog.ServerTrailer({Trailer: __goscriptLiteralField12, Err: appErr}) })()
				for (let __goscriptRangeTarget4 = (ss$ as __goscript_stream.serverStream).binlogs, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
					let binlog = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as binarylog.MethodLogger | null)
					void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log(ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(st, "*binarylog.ServerTrailer", /* @__PURE__ */ $.pointerType("binarylog.ServerTrailer"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
			void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(t)).WriteStatus((ss$ as __goscript_stream.serverStream).s, appStatus), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			// TODO: Should we log an error from WriteStatus here and below?
			const __goscriptReturn2: $.GoError = appErr
			err = __goscriptReturn2
			await __defer.dispose()
			return err
		}
		if (trInfo != null) {
			await (ss$ as __goscript_stream.serverStream).mu.Lock()
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>($.pointerValue<__goscript_trace.traceInfo>((ss$ as __goscript_stream.serverStream).trInfo).tr).LazyLog($.namedValueInterfaceValue<fmt.Stringer | null>("OK", "grpc.stringer", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), false), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (ss$ as __goscript_stream.serverStream).mu.Unlock()
		}
		if ($.sliceLen((ss$ as __goscript_stream.serverStream).binlogs) != 0) {
			let st: binarylog.ServerTrailer | $.VarRef<binarylog.ServerTrailer> | null = (() => { const __goscriptLiteralField13 = transport.Stream.prototype.Trailer.call((ss$ as __goscript_stream.serverStream).s); return new binarylog.ServerTrailer({Trailer: __goscriptLiteralField13, Err: appErr}) })()
			for (let __goscriptRangeTarget5 = (ss$ as __goscript_stream.serverStream).binlogs, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
				let binlog = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as binarylog.MethodLogger | null)
				void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log(ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(st, "*binarylog.ServerTrailer", /* @__PURE__ */ $.pointerType("binarylog.ServerTrailer"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		const __goscriptReturn3: $.GoError = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(t)).WriteStatus((ss$ as __goscript_stream.serverStream).s, statusOK), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		err = __goscriptReturn3
		await __defer.dispose()
		return err
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async processUnaryRPC(ctx: context.Context | null, t: transport.ServerTransport | null, stream: transport.Stream | $.VarRef<transport.Stream> | null, info: serviceInfo | $.VarRef<serviceInfo> | null, md: MethodDesc | $.VarRef<MethodDesc> | null, trInfo: __goscript_trace.traceInfo | $.VarRef<__goscript_trace.traceInfo> | null): globalThis.Promise<$.GoError> {
		const s: Server | $.VarRef<Server> | null = this;
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		const trInfo$: __goscript_trace.traceInfo = trInfo == null ? $.pointerTarget<__goscript_trace.traceInfo>(trInfo) : (trInfo as any).__isVarRef === true ? (trInfo as any).value : (trInfo as any).__goValue === undefined ? (trInfo as any) : $.pointerTarget<__goscript_trace.traceInfo>(trInfo)
		let shs: $.Slice<stats.Handler | null> = (s$ as Server).opts.statsHandlers
		if ((($.sliceLen(shs) != 0) || (trInfo != null)) || channelz2.IsOn()) {
			if (channelz2.IsOn()) {
				void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).incrCallsStarted() : Server.prototype.incrCallsStarted.call(s))
			}
			let statsBegin: stats.Begin | $.VarRef<stats.Begin> | null = null! as stats.Begin | $.VarRef<stats.Begin> | null
			for (let __goscriptRangeTarget6 = shs, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
				let sh = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as stats.Handler | null)
				let beginTime = $.markAsStructValue($.cloneStructValue(time.Now()))
				statsBegin = new stats.Begin({BeginTime: $.markAsStructValue($.cloneStructValue(beginTime)), IsClientStream: false, IsServerStream: false})
				void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleRPC(ctx, $.interfaceValue<stats.RPCStats | null>(statsBegin, "*stats.Begin", /* @__PURE__ */ $.pointerType("stats.Begin"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if (trInfo != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>((trInfo$ as __goscript_trace.traceInfo).tr).LazyLog($.interfaceValue<fmt.Stringer | null>($.fieldRef((trInfo$ as __goscript_trace.traceInfo)._fields, "firstLine"), "*grpc.firstLine", /* @__PURE__ */ $.pointerType("grpc.firstLine")), false), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			// The deferred error handling for tracing, stats handler and channelz are
			// combined into one function to reduce stack usage -- a defer takes ~56-64
			// bytes on the stack, so overflowing the stack will require a stack
			// re-allocation, which is expensive.
			//
			// To maintain behavior similar to separate deferred statements, statements
			// should be executed in the reverse order. That is, tracing first, stats
			// handler second, and channelz last. Note that panics *within* defers will
			// lead to different behavior, but that's an acceptable compromise; that
			// would be undefined behavior territory anyway.
			__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
				if (trInfo != null) {
					if ((err != null) && (!$.comparableEqual(err, io.EOF))) {
						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>((trInfo$ as __goscript_trace.traceInfo).tr).LazyLog($.interfaceValue<fmt.Stringer | null>(new __goscript_trace.fmtStringer({format: "%v", a: $.arrayToSlice<any>([(err as any)])}), "*grpc.fmtStringer", /* @__PURE__ */ $.pointerType("grpc.fmtStringer")), true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>((trInfo$ as __goscript_trace.traceInfo).tr).SetError(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>((trInfo$ as __goscript_trace.traceInfo).tr).Finish(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}

				for (let __goscriptRangeTarget7 = shs, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
					let sh = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as stats.Handler | null)
					let end: stats.End | $.VarRef<stats.End> | null = (() => { const __goscriptLiteralField14 = $.markAsStructValue($.cloneStructValue(time.Now())); return new stats.End({BeginTime: $.markAsStructValue($.cloneStructValue($.pointerValue<stats.Begin>(statsBegin).BeginTime)), EndTime: __goscriptLiteralField14}) })()
					if ((err != null) && (!$.comparableEqual(err, io.EOF))) {
						$.pointerValue<stats.End>(end).Error = await __goscript_rpc_util.toRPCErr(err)
					}
					void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleRPC(ctx, $.interfaceValue<stats.RPCStats | null>(end, "*stats.End", /* @__PURE__ */ $.pointerType("stats.End"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}

				if (channelz2.IsOn()) {
					if ((err != null) && (!$.comparableEqual(err, io.EOF))) {
						void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).incrCallsFailed() : Server.prototype.incrCallsFailed.call(s))
					} else {
						void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).incrCallsSucceeded() : Server.prototype.incrCallsSucceeded.call(s))
					}
				}
			})() })
		}
		let binlogs: $.Slice<binarylog.MethodLogger | null> = null! as $.Slice<binarylog.MethodLogger | null>
		{
			let ml = await binarylog.GetMethodLogger((stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).Method() : transport.Stream.prototype.Method.call(stream)))
			if (ml != null) {
				binlogs = $.appendOne(binlogs, ml, $.appendZeros.nil)
			}
		}
		if ((s$ as Server).opts.binaryLogger != null) {
			{
				let ml = (__goscriptAwait = $.pointerValue<Exclude<binarylog.Logger, null>>((s$ as Server).opts.binaryLogger).GetMethodLogger((stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).Method() : transport.Stream.prototype.Method.call(stream))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (ml != null) {
					binlogs = $.appendOne(binlogs, ml, $.appendZeros.nil)
				}
			}
		}
		if ($.sliceLen(binlogs) != 0) {
			let __goscriptTuple8: any = await metadata.FromIncomingContext(ctx)
			let __goscriptShadow4: metadata.MD = __goscriptTuple8[0]
			let logEntry: binarylog.ClientHeader | $.VarRef<binarylog.ClientHeader> | null = (() => { const __goscriptLiteralField15 = (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).Method() : transport.Stream.prototype.Method.call(stream)); return new binarylog.ClientHeader({Header: __goscriptShadow4, MethodName: __goscriptLiteralField15, PeerAddr: null}) })()
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
			{
				let a: $.Slice<string> = $.mapGet<string, $.Slice<string>, $.Slice<string>>(__goscriptShadow4, ":authority", null)[0]
				if ($.sliceLen(a) > 0) {
					;(logEntry$ as binarylog.ClientHeader).Authority = $.arrayIndex(a!, 0)
				}
			}
			{
				let __goscriptTuple9: any = await peer2.FromContext(ctx)
				let __goscriptShadow5: peer2.Peer | $.VarRef<peer2.Peer> | null = __goscriptTuple9[0]
				let ok = __goscriptTuple9[1]
				if (ok) {
					;(logEntry$ as binarylog.ClientHeader).PeerAddr = $.pointerValue<peer2.Peer>(__goscriptShadow5).Addr
				}
			}
			for (let __goscriptRangeTarget8 = binlogs, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
				let binlog = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as binarylog.MethodLogger | null)
				void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log(ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(logEntry, "*binarylog.ClientHeader", /* @__PURE__ */ $.pointerType("binarylog.ClientHeader"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		// comp and cp are used for compression.  decomp and dc are used for
		// decompression.  If comp and decomp are both set, they are the same;
		// however they are kept separate to ensure that at most one of the
		// compressor/decompressor variable pairs are set for use later.
		let comp: encoding.Compressor | null = null! as encoding.Compressor | null
		let decomp: encoding.Compressor | null = null! as encoding.Compressor | null
		let cp: __goscript_rpc_util.Compressor | null = null! as __goscript_rpc_util.Compressor | null
		let dc: __goscript_rpc_util.Decompressor | null = null! as __goscript_rpc_util.Decompressor | null
		let sendCompressorName: string = ""

		// If dc is set and matches the stream's compression, use it.  Otherwise, try
		// to find a matching registered compressor for decomp.
		{
			let rc = await (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).RecvCompress() : transport.Stream.prototype.RecvCompress.call(stream))
			if (((s$ as Server).opts.dc != null) && ($.stringEqual((__goscriptAwait = $.pointerValue<Exclude<__goscript_rpc_util.Decompressor, null>>((s$ as Server).opts.dc).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), rc))) {
				dc = (s$ as Server).opts.dc
			} else {
				if ((!$.stringEqual(rc, "")) && (!$.stringEqual(rc, encoding.Identity))) {
					decomp = encoding.GetCompressor(rc)
					if (decomp == null) {
						let st: status2.Status | $.VarRef<status2.Status> | null = await status.Newf(12, "grpc: Decompressor is not installed for grpc-encoding %q", $.arrayToSlice<any>([rc]))
						void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(t)).WriteStatus(stream, st), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						const __goscriptReturn4: $.GoError = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as status2.Status).Err() : status2.Status.prototype.Err.call(st))
						err = __goscriptReturn4
						await __defer.dispose()
						return err
					}
				}
			}
		}

		// If cp is set, use it.  Otherwise, attempt to compress the response using
		// the incoming message compression method.
		//
		// NOTE: this needs to be ahead of all handling, https://github.com/grpc/grpc-go/issues/686.
		if ((s$ as Server).opts.cp != null) {
			cp = (s$ as Server).opts.cp
			sendCompressorName = (__goscriptAwait = (cp !== null && (cp as any).__isVarRef !== true && (cp as any).__goValue === undefined ? (cp as Exclude<__goscript_rpc_util.Compressor, null>) : $.pointerValue<Exclude<__goscript_rpc_util.Compressor, null>>(cp)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			{
				let rc = await (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).RecvCompress() : transport.Stream.prototype.RecvCompress.call(stream))
				if ((!$.stringEqual(rc, "")) && (!$.stringEqual(rc, encoding.Identity))) {
					// Legacy compressor not specified; attempt to respond with same encoding.
					comp = encoding.GetCompressor(rc)
					if (comp != null) {
						sendCompressorName = (__goscriptAwait = (comp !== null && (comp as any).__isVarRef !== true && (comp as any).__goValue === undefined ? (comp as Exclude<encoding.Compressor, null>) : $.pointerValue<Exclude<encoding.Compressor, null>>(comp)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
			}
		}

		if (!$.stringEqual(sendCompressorName, "")) {
			{
				let __goscriptShadow6 = (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).SetSendCompress(sendCompressorName) : transport.Stream.prototype.SetSendCompress.call(stream, sendCompressorName))
				if (__goscriptShadow6 != null) {
					const __goscriptReturn5: $.GoError = await status.Errorf(13, "grpc: failed to set send compressor: %v", $.arrayToSlice<any>([(__goscriptShadow6 as any)]))
					err = __goscriptReturn5
					await __defer.dispose()
					return err
				}
			}
		}

		let payInfo: __goscript_rpc_util.payloadInfo | $.VarRef<__goscript_rpc_util.payloadInfo> | null = null! as __goscript_rpc_util.payloadInfo | $.VarRef<__goscript_rpc_util.payloadInfo> | null
		if (($.sliceLen(shs) != 0) || ($.sliceLen(binlogs) != 0)) {
			payInfo = new __goscript_rpc_util.payloadInfo()
			const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.free())($.pointerValue<__goscript_rpc_util.payloadInfo>(payInfo)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc.(*payloadInfo).free-fm")
			__defer.defer(async () => { await __goscriptDeferCallee3() })
		}

		let __goscriptTuple10: any = await __goscript_rpc_util.recvAndDecompress(new __goscript_rpc_util.parser({r: $.interfaceValue<__goscript_rpc_util.streamReader | null>(stream, "*transport.Stream", /* @__PURE__ */ $.pointerType("transport.Stream")), bufferPool: (s$ as Server).opts.bufferPool}), stream, dc, (s$ as Server).opts.maxReceiveMessageSize, payInfo, decomp, true)
		let d: mem.BufferSlice = (__goscriptTuple10[0] as mem.BufferSlice)
		err = __goscriptTuple10[1]
		if (err != null) {
			{
				let e = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(t)).WriteStatus(stream, await status.Convert(err)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (e != null) {
					await channelz2.Warningf(logger, $.interfaceValue<channelz2.Entity | null>((s$ as Server).channelz, "*channelz.Server", /* @__PURE__ */ $.pointerType("channelz.Server")), "grpc: Server.processUnaryRPC failed to write status: %v", $.arrayToSlice<any>([(e as any)]))
				}
			}
			const __goscriptReturn6: $.GoError = err
			err = __goscriptReturn6
			await __defer.dispose()
			return err
		}
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => mem.BufferSlice_Free(__receiver))(d), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc/mem.BufferSlice.Free-fm")
		__defer.defer(async () => { await __goscriptDeferCallee4() })
		if (channelz2.IsOn()) {
			void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(t)).IncrMsgRecv(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		let df: ((v: any) => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue(async (v: any): globalThis.Promise<$.GoError> => {
			{
				let __goscriptShadow7 = (__goscriptAwait = $.pointerValue<Exclude<__goscript_codec.baseCodec, null>>((await Server.prototype.getCodec.call(s, (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).ContentSubtype() : transport.Stream.prototype.ContentSubtype.call(stream))))).Unmarshal((d as mem.BufferSlice), v), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (__goscriptShadow7 != null) {
					return status.Errorf(13, "grpc: error unmarshalling request: %v", $.arrayToSlice<any>([(__goscriptShadow7 as any)]))
				}
			}

			for (let __goscriptRangeTarget9 = shs, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
				let sh = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as stats.Handler | null)
				void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleRPC(ctx, $.interfaceValue<stats.RPCStats | null>((() => { const __goscriptLiteralField16 = $.markAsStructValue($.cloneStructValue(time.Now())); const __goscriptLiteralField17 = mem.BufferSlice_Len(d); return new stats.InPayload({RecvTime: __goscriptLiteralField16, Payload: v, Length: __goscriptLiteralField17, WireLength: $.pointerValue<__goscript_rpc_util.payloadInfo>(payInfo).compressedLength + 5, CompressedLength: $.pointerValue<__goscript_rpc_util.payloadInfo>(payInfo).compressedLength}) })(), "*stats.InPayload", /* @__PURE__ */ $.pointerType("stats.InPayload"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if ($.sliceLen(binlogs) != 0) {
				let cm: binarylog.ClientMessage | $.VarRef<binarylog.ClientMessage> | null = (() => { const __goscriptLiteralField18 = $.interfaceValue(mem.BufferSlice_Materialize(d), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))); return new binarylog.ClientMessage({Message: __goscriptLiteralField18}) })()
				for (let __goscriptRangeTarget10 = binlogs, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
					let binlog = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as binarylog.MethodLogger | null)
					void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log(ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(cm, "*binarylog.ClientMessage", /* @__PURE__ */ $.pointerType("binarylog.ClientMessage"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
			if (trInfo != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>((trInfo$ as __goscript_trace.traceInfo).tr).LazyLog($.interfaceValue<fmt.Stringer | null>(new __goscript_trace.payload({sent: false, msg: v}), "*grpc.payload", /* @__PURE__ */ $.pointerType("grpc.payload")), true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return null
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: ["error"] } as $.FunctionTypeInfo))
		ctx = NewContextWithServerTransportStream(ctx, $.interfaceValue<ServerTransportStream | null>(stream, "*transport.Stream", /* @__PURE__ */ $.pointerType("transport.Stream")))
		let [reply, appErr] = await $.pointerValue<MethodDesc>(md).Handler!($.pointerValue<serviceInfo>(info).serviceImpl, ctx, df, (s$ as Server).opts.unaryInt)
		if (appErr != null) {
			let __goscriptTuple11: any = await status.FromError(appErr)
			let appStatus: status2.Status | $.VarRef<status2.Status> | null = __goscriptTuple11[0]
			let ok = __goscriptTuple11[1]
			if (!ok) {
				// Convert non-status application error to a status error with code
				// Unknown, but handle context errors specifically.
				appStatus = await status.FromContextError(appErr)
				appErr = (appStatus !== null && (appStatus as any).__isVarRef !== true && (appStatus as any).__goValue === undefined ? ((appStatus as any) as status2.Status).Err() : status2.Status.prototype.Err.call(appStatus))
			}
			if (trInfo != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>((trInfo$ as __goscript_trace.traceInfo).tr).LazyLog($.namedValueInterfaceValue<fmt.Stringer | null>((appStatus !== null && (appStatus as any).__isVarRef !== true && (appStatus as any).__goValue === undefined ? ((appStatus as any) as status2.Status).Message() : status2.Status.prototype.Message.call(appStatus)), "grpc.stringer", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>((trInfo$ as __goscript_trace.traceInfo).tr).SetError(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			{
				let e = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(t)).WriteStatus(stream, appStatus), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (e != null) {
					await channelz2.Warningf(logger, $.interfaceValue<channelz2.Entity | null>((s$ as Server).channelz, "*channelz.Server", /* @__PURE__ */ $.pointerType("channelz.Server")), "grpc: Server.processUnaryRPC failed to write status: %v", $.arrayToSlice<any>([(e as any)]))
				}
			}
			if ($.sliceLen(binlogs) != 0) {
				{
					let __goscriptTuple12: any = await (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).Header() : transport.Stream.prototype.Header.call(stream))
					let h: metadata.MD = __goscriptTuple12[0]
					if (metadata.MD_Len(h) > 0) {
						// Only log serverHeader if there was header. Otherwise it can
						// be trailer only.
						let sh: binarylog.ServerHeader | $.VarRef<binarylog.ServerHeader> | null = new binarylog.ServerHeader({Header: h})
						for (let __goscriptRangeTarget11 = binlogs, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
							let binlog = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as binarylog.MethodLogger | null)
							void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log(ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(sh, "*binarylog.ServerHeader", /* @__PURE__ */ $.pointerType("binarylog.ServerHeader"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
					}
				}
				let st: binarylog.ServerTrailer | $.VarRef<binarylog.ServerTrailer> | null = (() => { const __goscriptLiteralField19 = (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).Trailer() : transport.Stream.prototype.Trailer.call(stream)); return new binarylog.ServerTrailer({Trailer: __goscriptLiteralField19, Err: appErr}) })()
				for (let __goscriptRangeTarget12 = binlogs, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
					let binlog = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as binarylog.MethodLogger | null)
					void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log(ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(st, "*binarylog.ServerTrailer", /* @__PURE__ */ $.pointerType("binarylog.ServerTrailer"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
			const __goscriptReturn7: $.GoError = appErr
			err = __goscriptReturn7
			await __defer.dispose()
			return err
		}
		if (trInfo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>((trInfo$ as __goscript_trace.traceInfo).tr).LazyLog($.namedValueInterfaceValue<fmt.Stringer | null>("OK", "grpc.stringer", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), false), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		let opts: transport.Options | $.VarRef<transport.Options> | null = new transport.Options({Last: true})

		// Server handler could have set new compressor by calling SetSendCompressor.
		// In case it is set, we need to use it for compressing outbound message.
		if (!$.stringEqual((stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).SendCompress() : transport.Stream.prototype.SendCompress.call(stream)), sendCompressorName)) {
			comp = encoding.GetCompressor((stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).SendCompress() : transport.Stream.prototype.SendCompress.call(stream)))
		}
		{
			let __goscriptShadow8 = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).sendResponse(ctx, t, stream, reply, cp, opts, comp) : Server.prototype.sendResponse.call(s, ctx, t, stream, reply, cp, opts, comp))
			if (__goscriptShadow8 != null) {
				if ($.comparableEqual(__goscriptShadow8, io.EOF)) {
					// The entire stream is done (for unary RPC only).
					const __goscriptReturn8: $.GoError = __goscriptShadow8
					err = __goscriptReturn8
					await __defer.dispose()
					return err
				}
				{
					let __goscriptTuple13: any = await status.FromError(__goscriptShadow8)
					let sts: status2.Status | $.VarRef<status2.Status> | null = __goscriptTuple13[0]
					let ok = __goscriptTuple13[1]
					if (ok) {
						{
							let e = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(t)).WriteStatus(stream, sts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							if (e != null) {
								await channelz2.Warningf(logger, $.interfaceValue<channelz2.Entity | null>((s$ as Server).channelz, "*channelz.Server", /* @__PURE__ */ $.pointerType("channelz.Server")), "grpc: Server.processUnaryRPC failed to write status: %v", $.arrayToSlice<any>([(e as any)]))
							}
						}
					} else {
						{
							const __goscriptTypeSwitchValue = __goscriptShadow8
							switch (true) {
								case $.typeAssert<transport.ConnectionError>(__goscriptTypeSwitchValue, "transport.ConnectionError").ok:
									{
										let st: transport.ConnectionError = $.markAsStructValue($.cloneStructValue($.typeAssert<transport.ConnectionError>(__goscriptTypeSwitchValue, "transport.ConnectionError").value))
									}
									break
								default:
									{
										let st: any = __goscriptTypeSwitchValue
										$.panic(await fmt.Sprintf("grpc: Unexpected error (%T) from sendResponse: %v", (st as any), (st as any)))
									}
									break
							}
						}
					}
				}
				if ($.sliceLen(binlogs) != 0) {
					let __goscriptTuple14: any = await (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).Header() : transport.Stream.prototype.Header.call(stream))
					let h: metadata.MD = __goscriptTuple14[0]
					let sh: binarylog.ServerHeader | $.VarRef<binarylog.ServerHeader> | null = new binarylog.ServerHeader({Header: h})
					let st: binarylog.ServerTrailer | $.VarRef<binarylog.ServerTrailer> | null = (() => { const __goscriptLiteralField20 = (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).Trailer() : transport.Stream.prototype.Trailer.call(stream)); return new binarylog.ServerTrailer({Trailer: __goscriptLiteralField20, Err: appErr}) })()
					for (let __goscriptRangeTarget13 = binlogs, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
						let binlog = (__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as binarylog.MethodLogger | null)
						void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log(ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(sh, "*binarylog.ServerHeader", /* @__PURE__ */ $.pointerType("binarylog.ServerHeader"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log(ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(st, "*binarylog.ServerTrailer", /* @__PURE__ */ $.pointerType("binarylog.ServerTrailer"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
				const __goscriptReturn9: $.GoError = __goscriptShadow8
				err = __goscriptReturn9
				await __defer.dispose()
				return err
			}
		}
		if ($.sliceLen(binlogs) != 0) {
			let __goscriptTuple15: any = await (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).Header() : transport.Stream.prototype.Header.call(stream))
			let h: metadata.MD = __goscriptTuple15[0]
			let sh: binarylog.ServerHeader | $.VarRef<binarylog.ServerHeader> | null = new binarylog.ServerHeader({Header: h})
			let sm: binarylog.ServerMessage | $.VarRef<binarylog.ServerMessage> | null = new binarylog.ServerMessage({Message: reply})
			for (let __goscriptRangeTarget14 = binlogs, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow14.length; __rangeIndex++) {
				let binlog = (__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + __rangeIndex] as binarylog.MethodLogger | null)
				void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log(ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(sh, "*binarylog.ServerHeader", /* @__PURE__ */ $.pointerType("binarylog.ServerHeader"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log(ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(sm, "*binarylog.ServerMessage", /* @__PURE__ */ $.pointerType("binarylog.ServerMessage"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		if (channelz2.IsOn()) {
			void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(t)).IncrMsgSent(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if (trInfo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceLog, null>>((trInfo$ as __goscript_trace.traceInfo).tr).LazyLog($.interfaceValue<fmt.Stringer | null>(new __goscript_trace.payload({sent: true, msg: reply}), "*grpc.payload", /* @__PURE__ */ $.pointerType("grpc.payload")), true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		// TODO: Should we be logging if writing status failed here, like above?
		// Should the logging be in WriteStatus?  Should we ignore the WriteStatus
		// error or allow the stats handler to see it?
		if ($.sliceLen(binlogs) != 0) {
			let st: binarylog.ServerTrailer | $.VarRef<binarylog.ServerTrailer> | null = (() => { const __goscriptLiteralField21 = (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).Trailer() : transport.Stream.prototype.Trailer.call(stream)); return new binarylog.ServerTrailer({Trailer: __goscriptLiteralField21, Err: appErr}) })()
			for (let __goscriptRangeTarget15 = binlogs, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow15.length; __rangeIndex++) {
				let binlog = (__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + __rangeIndex] as binarylog.MethodLogger | null)
				void (__goscriptAwait = (binlog !== null && (binlog as any).__isVarRef !== true && (binlog as any).__goValue === undefined ? (binlog as Exclude<binarylog.MethodLogger, null>) : $.pointerValue<Exclude<binarylog.MethodLogger, null>>(binlog)).Log(ctx, $.interfaceValue<binarylog.LogEntryConfig | null>(st, "*binarylog.ServerTrailer", /* @__PURE__ */ $.pointerType("binarylog.ServerTrailer"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		const __goscriptReturn10: $.GoError = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(t)).WriteStatus(stream, statusOK), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		err = __goscriptReturn10
		await __defer.dispose()
		return err
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async register(sd: ServiceDesc | $.VarRef<ServiceDesc> | null, ss: any): globalThis.Promise<void> {
		let s: Server | $.VarRef<Server> | null = this;
		using __defer = new $.DisposableStack()
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		const sd$: ServiceDesc = sd == null ? $.pointerTarget<ServiceDesc>(sd) : (sd as any).__isVarRef === true ? (sd as any).value : (sd as any).__goValue === undefined ? (sd as any) : $.pointerTarget<ServiceDesc>(sd)
		await (s$ as Server).mu.Lock()
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as Server).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee5() })
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).printf("RegisterService(%q)", $.arrayToSlice<any>([(sd$ as ServiceDesc).ServiceName])) : Server.prototype.printf.call(s, "RegisterService(%q)", $.arrayToSlice<any>([(sd$ as ServiceDesc).ServiceName])))
		if ((s$ as Server).serve) {
			void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Fatalf("grpc: Server.RegisterService after Server.Serve for %q", $.arrayToSlice<any>([(sd$ as ServiceDesc).ServiceName])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		{
			let [, ok] = $.mapGet<string, serviceInfo | $.VarRef<serviceInfo> | null, serviceInfo | $.VarRef<serviceInfo> | null>((s$ as Server).services, (sd$ as ServiceDesc).ServiceName, null)
			if (ok) {
				void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Fatalf("grpc: Server.RegisterService found duplicate service registration for %q", $.arrayToSlice<any>([(sd$ as ServiceDesc).ServiceName])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		let info: serviceInfo | $.VarRef<serviceInfo> | null = new serviceInfo({serviceImpl: ss, methods: $.makeMap<string, MethodDesc | $.VarRef<MethodDesc> | null>(), streams: $.makeMap<string, __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null>(), mdata: (sd$ as ServiceDesc).Metadata})
		let info$: serviceInfo = info == null ? $.pointerTarget<serviceInfo>(info) : (info as any).__isVarRef === true ? (info as any).value : (info as any).__goValue === undefined ? (info as any) : $.pointerTarget<serviceInfo>(info)
		for (let __goscriptRangeTarget16 = (sd$ as ServiceDesc).Methods, __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), i = 0; i < __goscriptRangeWindow16.length; i++) {
			let d: MethodDesc | $.VarRef<MethodDesc> | null = $.indexRef((sd$ as ServiceDesc).Methods!, i)
			$.mapSet((info$ as serviceInfo).methods, $.pointerValue<MethodDesc>(d).MethodName, d)
		}
		for (let __goscriptRangeTarget17 = (sd$ as ServiceDesc).Streams, __goscriptRangeWindow17 = $.sliceRange(__goscriptRangeTarget17), i = 0; i < __goscriptRangeWindow17.length; i++) {
			let d: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null = $.indexRef((sd$ as ServiceDesc).Streams!, i)
			$.mapSet((info$ as serviceInfo).streams, $.pointerValue<__goscript_stream.StreamDesc>(d).StreamName, d)
		}
		$.mapSet((s$ as Server).services, (sd$ as ServiceDesc).ServiceName, info)
	}

	public async removeConn(addr: string, st: transport.ServerTransport | null): globalThis.Promise<void> {
		const s: Server | $.VarRef<Server> | null = this;
		using __defer = new $.DisposableStack()
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		await (s$ as Server).mu.Lock()
		const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as Server).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee6() })

		let conns: globalThis.Map<transport.ServerTransport | null, boolean> | null = $.mapGet<string, globalThis.Map<transport.ServerTransport | null, boolean> | null, globalThis.Map<transport.ServerTransport | null, boolean> | null>((s$ as Server).conns, addr, null)[0]
		if (conns != null) {
			$.deleteMapEntry(conns, st)
			if ($.len(conns) == 0) {
				// If the last connection for this address is being removed, also
				// remove the map entry corresponding to the address. This is used
				// in GracefulStop() when waiting for all connections to be closed.
				$.deleteMapEntry((s$ as Server).conns, addr)
			}
			sync.Cond.prototype.Broadcast.call($.pointerValue<sync.Cond>((s$ as Server).cv))
		}
	}

	public async sendResponse(ctx: context.Context | null, t: transport.ServerTransport | null, stream: transport.Stream | $.VarRef<transport.Stream> | null, msg: any, cp: __goscript_rpc_util.Compressor | null, opts: transport.Options | $.VarRef<transport.Options> | null, comp: encoding.Compressor | null): globalThis.Promise<$.GoError> {
		const s: Server | $.VarRef<Server> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		let __goscriptTuple16: any = await __goscript_rpc_util.encode(await Server.prototype.getCodec.call(s, (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).ContentSubtype() : transport.Stream.prototype.ContentSubtype.call(stream))), msg)
		let data: mem.BufferSlice = (__goscriptTuple16[0] as mem.BufferSlice)
		let err = __goscriptTuple16[1]
		if (err != null) {
			await channelz2.Error(logger, $.interfaceValue<channelz2.Entity | null>((s$ as Server).channelz, "*channelz.Server", /* @__PURE__ */ $.pointerType("channelz.Server")), $.arrayToSlice<any>(["grpc: server failed to encode response: ", (err as any)]))
			return err
		}

		let __goscriptTuple17: any = await __goscript_rpc_util.compress((data as mem.BufferSlice), cp, comp, (s$ as Server).opts.bufferPool)
		let compData: mem.BufferSlice = (__goscriptTuple17[0] as mem.BufferSlice)
		let pf = __goscriptTuple17[1]
		err = __goscriptTuple17[2]
		if (err != null) {
			await mem.BufferSlice_Free(data)
			await channelz2.Error(logger, $.interfaceValue<channelz2.Entity | null>((s$ as Server).channelz, "*channelz.Server", /* @__PURE__ */ $.pointerType("channelz.Server")), $.arrayToSlice<any>(["grpc: server failed to compress response: ", (err as any)]))
			return err
		}

		let __goscriptTuple18: any = __goscript_rpc_util.msgHeader((data as mem.BufferSlice), (compData as mem.BufferSlice), pf)
		let hdr: $.Slice<number> = __goscriptTuple18[0]
		let __goscriptShadow9: mem.BufferSlice = (__goscriptTuple18[1] as mem.BufferSlice)

		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			await mem.BufferSlice_Free(compData)
			await mem.BufferSlice_Free(data)
		})() })

		let dataLen = mem.BufferSlice_Len(data)
		let payloadLen = mem.BufferSlice_Len(__goscriptShadow9)
		// TODO(dfawley): should we be checking len(data) instead?
		if (payloadLen > (s$ as Server).opts.maxSendMessageSize) {
			return await status.Errorf(8, "grpc: trying to send message larger than max (%d vs. %d)", $.arrayToSlice<any>([$.basicInterfaceValue(payloadLen, "int"), $.basicInterfaceValue((s$ as Server).opts.maxSendMessageSize, "int")]))
		}
		err = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(t)).Write(stream, hdr, (__goscriptShadow9 as mem.BufferSlice), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err == null) {
			if ($.sliceLen((s$ as Server).opts.statsHandlers) != 0) {
				for (let __goscriptRangeTarget18 = (s$ as Server).opts.statsHandlers, __goscriptRangeWindow18 = $.sliceRange(__goscriptRangeTarget18), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow18.length; __rangeIndex++) {
					let sh = (__goscriptRangeWindow18.backing[__goscriptRangeWindow18.offset + __rangeIndex] as stats.Handler | null)
					void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleRPC(ctx, $.interfaceValue<stats.RPCStats | null>(__goscript_rpc_util.outPayload(false, msg, dataLen, payloadLen, time.Now()), "*stats.OutPayload", /* @__PURE__ */ $.pointerType("stats.OutPayload"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
		}
		return err
	}

	public async serveStreams(ctx: context.Context | null, st: transport.ServerTransport | null, rawConn: net.Conn | null): globalThis.Promise<void> {
		const s: Server | $.VarRef<Server> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		ctx = transport.SetConnection(ctx, rawConn)
		ctx = peer2.NewContext(ctx, ((__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(st)).Peer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as peer2.Peer | $.VarRef<peer2.Peer> | null))
		for (let __goscriptRangeTarget19 = (s$ as Server).opts.statsHandlers, __goscriptRangeWindow19 = $.sliceRange(__goscriptRangeTarget19), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow19.length; __rangeIndex++) {
			let sh = (__goscriptRangeWindow19.backing[__goscriptRangeWindow19.offset + __rangeIndex] as stats.Handler | null)
			ctx = (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).TagConn(ctx, new stats.ConnTagInfo({RemoteAddr: $.pointerValue<peer2.Peer>(((__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(st)).Peer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as peer2.Peer | $.VarRef<peer2.Peer> | null)).Addr, LocalAddr: $.pointerValue<peer2.Peer>(((__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(st)).Peer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as peer2.Peer | $.VarRef<peer2.Peer> | null)).LocalAddr})), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleConn(ctx, $.interfaceValue<stats.ConnStats | null>(new stats.ConnBegin(), "*stats.ConnBegin", /* @__PURE__ */ $.pointerType("stats.ConnBegin"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			void (__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(st)).Close(errors.New("finished serving streams for the server transport")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			for (let __goscriptRangeTarget20 = (s$ as Server).opts.statsHandlers, __goscriptRangeWindow20 = $.sliceRange(__goscriptRangeTarget20), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow20.length; __rangeIndex++) {
				let sh = (__goscriptRangeWindow20.backing[__goscriptRangeWindow20.offset + __rangeIndex] as stats.Handler | null)
				void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleConn(ctx, $.interfaceValue<stats.ConnStats | null>(new stats.ConnEnd(), "*stats.ConnEnd", /* @__PURE__ */ $.pointerType("stats.ConnEnd"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		})() })

		let streamQuota: atomicSemaphore | $.VarRef<atomicSemaphore> | null = newHandlerQuota((s$ as Server).opts.maxConcurrentStreams)
		void (__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<transport.ServerTransport, null>) : $.pointerValue<Exclude<transport.ServerTransport, null>>(st)).HandleStreams(ctx, $.functionValue(async (stream: transport.Stream | $.VarRef<transport.Stream> | null): globalThis.Promise<void> => {
			void (s$ as Server).handlersWG.Add(1)
			await (streamQuota !== null && (streamQuota as any).__isVarRef !== true && (streamQuota as any).__goValue === undefined ? ((streamQuota as any) as atomicSemaphore).acquire() : atomicSemaphore.prototype.acquire.call(streamQuota))
			let f: (() => void) | null = $.functionValue(async (): globalThis.Promise<void> => {
				await using __defer = new $.AsyncDisposableStack()
				__defer.defer(async () => { await (streamQuota !== null && (streamQuota as any).__isVarRef !== true && (streamQuota as any).__goValue === undefined ? ((streamQuota as any) as atomicSemaphore).release() : atomicSemaphore.prototype.release.call(streamQuota)) })
				const __goscriptDeferCallee7 = $.functionValue(((__receiver) => () => __receiver.Done())((s$ as Server).handlersWG), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*WaitGroup).Done-fm")
				__defer.defer(() => { __goscriptDeferCallee7() })
				await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).handleStream(st, stream) : Server.prototype.handleStream.call(s, st, stream))
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))

			if ((s$ as Server).opts.numServerWorkers > 0) {
				const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, void>([
					{
						id: 0,
						isSend: true,
						channel: (s$ as Server).serverWorkerChannel,
						value: f,
						onSelected: async (__goscriptSelect1Result) => {
							return $.selectVoidReturn()
						}
					},
					{
						id: -1,
						isSend: false,
						channel: null,
					}
				], true)
				if (__goscriptSelect1HasReturn) {
					return __goscriptSelect1Value
				}
			}
			const __goscriptDeferCallee8 = f
			queueMicrotask(async () => { (__goscriptAwait = __goscriptDeferCallee8!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("transport.Stream")], results: [] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async serverWorker(): globalThis.Promise<void> {
		const s: Server | $.VarRef<Server> | null = this;
		for (let completed = 0; completed < 65536; completed++) {
			let __goscriptRecv0 = await $.chanRecvWithOk($.pointerValue<Server>(s).serverWorkerChannel)
			let f: (() => void) | null = __goscriptRecv0.value
			let ok = __goscriptRecv0.ok
			if (!ok) {
				return
			}
			void (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		const __goscriptDeferCallee9 = $.functionValue(((__receiver) => () => __receiver.serverWorker())($.pointerValue<Server>(s)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc.(*Server).serverWorker-fm")
		queueMicrotask(async () => { await __goscriptDeferCallee9() })
	}

	public async stop(graceful: boolean): globalThis.Promise<void> {
		let s: Server | $.VarRef<Server> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		await grpcsync.Event.prototype.Fire.call((s$ as Server).quit)
		const __goscriptDeferCallee10 = $.functionValue(((__receiver) => () => __receiver.Fire())($.pointerValue<grpcsync.Event>((s$ as Server).done)), ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo), "google.golang.org/grpc/internal/grpcsync.(*Event).Fire-fm")
		__defer.defer(async () => { await __goscriptDeferCallee10() })

		await (s$ as Server).channelzRemoveOnce.Do($.functionValue(async (): globalThis.Promise<void> => {
			await channelz2.RemoveEntry($.pointerValue<channelz2.Server>((s$ as Server).channelz).ID)
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		await (s$ as Server).mu.Lock()
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).closeListenersLocked() : Server.prototype.closeListenersLocked.call(s))
		// Wait for serving threads to be ready to exit.  Only then can we be sure no
		// new conns will be created.
		void (s$ as Server).mu.Unlock()
		await (s$ as Server).serveWG.Wait()

		await (s$ as Server).mu.Lock()
		const __goscriptDeferCallee11 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as Server).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee11() })

		if (graceful) {
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).drainAllServerTransportsLocked() : Server.prototype.drainAllServerTransportsLocked.call(s))
		} else {
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).closeServerTransportsLocked() : Server.prototype.closeServerTransportsLocked.call(s))
		}

		while ($.len((s$ as Server).conns) != 0) {
			await sync.Cond.prototype.Wait.call($.pointerValue<sync.Cond>((s$ as Server).cv))
		}
		;(s$ as Server).conns = null

		if ((s$ as Server).opts.numServerWorkers > 0) {
			// Closing the channel (only once, via grpcsync.OnceFunc) after all the
			// connections have been closed above ensures that there are no
			// goroutines executing the callback passed to st.HandleStreams (where
			// the channel is written to).
			void (__goscriptAwait = (s$ as Server).serverWorkerChannelClose!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		if (graceful || (s$ as Server).opts.waitForHandlers) {
			await (s$ as Server).handlersWG.Wait()
		}

		if ((s$ as Server).events != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_trace.traceEventLog, null>>((s$ as Server).events).Finish(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
			;(s$ as Server).events = null
		}
	}

	static __typeInfo = $.registerStructType(
		"grpc.Server",
		() => new Server(),
		() => [$.methodSignature("GetServiceInfo", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "grpc.ServiceInfo")], true), $.methodSignature("GracefulStop", [], [], true), $.methodSignature("RegisterService", [["sd", /* @__PURE__ */ $.pointerType("grpc.ServiceDesc")], ["ss", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("Serve", [["lis", "net.Listener"]], ["error"], true), $.methodSignature("ServeHTTP", [["w", "http.ResponseWriter"], ["r", /* @__PURE__ */ $.pointerType("http.Request")]], [], true), $.methodSignature("Stop", [], [], true), $.methodSignature("addConn", [["addr", /* @__PURE__ */ $.basicType("string")], ["st", "transport.ServerTransport"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("closeListenersLocked", [], [], true), $.methodSignature("closeServerTransportsLocked", [], [], true), $.methodSignature("drainAllServerTransportsLocked", [], [], true), $.methodSignature("errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("getCodec", [["contentSubtype", /* @__PURE__ */ $.basicType("string")]], ["grpc.baseCodec"], true), $.methodSignature("handleRawConn", [["lisAddr", /* @__PURE__ */ $.basicType("string")], ["rawConn", "net.Conn"]], [], true), $.methodSignature("handleStream", [["t", "transport.ServerTransport"], ["stream", /* @__PURE__ */ $.pointerType("transport.Stream")]], [], true), $.methodSignature("incrCallsFailed", [], [], true), $.methodSignature("incrCallsStarted", [], [], true), $.methodSignature("incrCallsSucceeded", [], [], true), $.methodSignature("initServerWorkers", [], [], true), $.methodSignature("isRegisteredMethod", [["serviceMethod", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("newHTTP2Transport", [["c", "net.Conn"]], ["transport.ServerTransport"], true), $.methodSignature("printf", [["format", /* @__PURE__ */ $.basicType("string")], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("processStreamingRPC", [["ctx", "context.Context"], ["t", "transport.ServerTransport"], ["stream", /* @__PURE__ */ $.pointerType("transport.Stream")], ["info", /* @__PURE__ */ $.pointerType("grpc.serviceInfo")], ["sd", /* @__PURE__ */ $.pointerType("grpc.StreamDesc")], ["trInfo", /* @__PURE__ */ $.pointerType("grpc.traceInfo")]], [["err", "error"]], true), $.methodSignature("processUnaryRPC", [["ctx", "context.Context"], ["t", "transport.ServerTransport"], ["stream", /* @__PURE__ */ $.pointerType("transport.Stream")], ["info", /* @__PURE__ */ $.pointerType("grpc.serviceInfo")], ["md", /* @__PURE__ */ $.pointerType("grpc.MethodDesc")], ["trInfo", /* @__PURE__ */ $.pointerType("grpc.traceInfo")]], [["err", "error"]], true), $.methodSignature("register", [["sd", /* @__PURE__ */ $.pointerType("grpc.ServiceDesc")], ["ss", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("removeConn", [["addr", /* @__PURE__ */ $.basicType("string")], ["st", "transport.ServerTransport"]], [], true), $.methodSignature("sendResponse", [["ctx", "context.Context"], ["t", "transport.ServerTransport"], ["stream", /* @__PURE__ */ $.pointerType("transport.Stream")], ["msg", { kind: $.TypeKind.Interface, methods: [] }], ["cp", "grpc.Compressor"], ["opts", /* @__PURE__ */ $.pointerType("transport.Options")], ["comp", "encoding.Compressor"]], ["error"], true), $.methodSignature("serveStreams", [["ctx", "context.Context"], ["st", "transport.ServerTransport"], ["rawConn", "net.Conn"]], [], true), $.methodSignature("serverWorker", [], [], true), $.methodSignature("stop", [["graceful", /* @__PURE__ */ $.basicType("bool")]], [], true)],
		Server,
		() => [/* @__PURE__ */ $.structField("opts", "grpc.serverOptions", [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [1], 352, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("lis", /* @__PURE__ */ $.mapType("net.Listener", /* @__PURE__ */ $.basicType("bool")), [2], 360, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("conns", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.mapType("transport.ServerTransport", /* @__PURE__ */ $.basicType("bool"))), [3], 368, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("serve", /* @__PURE__ */ $.basicType("bool"), [4], 376, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("drain", /* @__PURE__ */ $.basicType("bool"), [5], 377, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("cv", /* @__PURE__ */ $.pointerType("sync.Cond"), [6], 384, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("services", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("grpc.serviceInfo")), [7], 392, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("events", "grpc.traceEventLog", [8], 400, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("quit", /* @__PURE__ */ $.pointerType("grpcsync.Event"), [9], 416, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("done", /* @__PURE__ */ $.pointerType("grpcsync.Event"), [10], 424, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("channelzRemoveOnce", "sync.Once", [11], 432, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("serveWG", "sync.WaitGroup", [12], 448, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("handlersWG", "sync.WaitGroup", [13], 464, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("channelz", /* @__PURE__ */ $.pointerType("channelz.Server"), [14], 480, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("serverWorkerChannel", /* @__PURE__ */ $.channelType(({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "both"), [15], 488, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("serverWorkerChannelClose", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [16], 496, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class EmptyServerOption {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EmptyServerOption {
		return new EmptyServerOption(this, true)
	}

	public __goscriptAssign(source: EmptyServerOption): void {
	}

	public apply(_p0: serverOptions | $.VarRef<serverOptions> | null): void {
	}

	static __typeInfo = $.registerStructType(
		"grpc.EmptyServerOption",
		() => new EmptyServerOption(),
		() => [$.methodSignature("apply", [/* @__PURE__ */ $.pointerType("grpc.serverOptions")])],
		EmptyServerOption,
		() => []
	)
}

export class funcServerOption {
	public get f(): ((_p0: serverOptions | $.VarRef<serverOptions> | null) => void) | null {
		return this._fields.f
	}

	public set f(value: ((_p0: serverOptions | $.VarRef<serverOptions> | null) => void) | null) {
		this._fields.f = value
	}

	public _fields: {
		f: ((_p0: serverOptions | $.VarRef<serverOptions> | null) => void) | null
	}

	constructor(init?: Partial<{f?: ((_p0: serverOptions | $.VarRef<serverOptions> | null) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			f: init?.f ?? (null! as ((_p0: serverOptions | $.VarRef<serverOptions> | null) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): funcServerOption {
		return new funcServerOption(this, true)
	}

	public __goscriptAssign(source: funcServerOption): void {
		const target = this._fields
		const values = source._fields
		target.f = values.f
	}

	public async apply(_do: serverOptions | $.VarRef<serverOptions> | null): globalThis.Promise<void> {
		const fdo: funcServerOption | $.VarRef<funcServerOption> | null = this;
		void (__goscriptAwait = $.pointerValue<funcServerOption>(fdo).f!(_do), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"grpc.funcServerOption",
		() => new funcServerOption(),
		() => [$.methodSignature("apply", [["do", /* @__PURE__ */ $.pointerType("grpc.serverOptions")]], [], true)],
		funcServerOption,
		() => [/* @__PURE__ */ $.structField("f", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class joinServerOption {
	public get opts(): $.Slice<ServerOption | null> {
		return this._fields.opts
	}

	public set opts(value: $.Slice<ServerOption | null>) {
		this._fields.opts = value
	}

	public _fields: {
		opts: $.Slice<ServerOption | null>
	}

	constructor(init?: Partial<{opts?: $.Slice<ServerOption | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			opts: init?.opts ?? (null! as $.Slice<ServerOption | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): joinServerOption {
		return new joinServerOption(this, true)
	}

	public __goscriptAssign(source: joinServerOption): void {
		const target = this._fields
		const values = source._fields
		target.opts = values.opts
	}

	public async apply(_do: serverOptions | $.VarRef<serverOptions> | null): globalThis.Promise<void> {
		const mdo: joinServerOption | $.VarRef<joinServerOption> | null = this;
		for (let __goscriptRangeTarget21 = $.pointerValue<joinServerOption>(mdo).opts, __goscriptRangeWindow21 = $.sliceRange(__goscriptRangeTarget21), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow21.length; __rangeIndex++) {
			let opt = (__goscriptRangeWindow21.backing[__goscriptRangeWindow21.offset + __rangeIndex] as ServerOption | null)
			void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<ServerOption, null>) : $.pointerValue<Exclude<ServerOption, null>>(opt)).apply(_do), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	static __typeInfo = $.registerStructType(
		"grpc.joinServerOption",
		() => new joinServerOption(),
		() => [$.methodSignature("apply", [["do", /* @__PURE__ */ $.pointerType("grpc.serverOptions")]], [], true)],
		joinServerOption,
		() => [/* @__PURE__ */ $.structField("opts", /* @__PURE__ */ $.sliceType("grpc.ServerOption"), [0], 0, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class MaxHeaderListSizeServerOption {
	public get MaxHeaderListSize(): number {
		return this._fields.MaxHeaderListSize
	}

	public set MaxHeaderListSize(value: number) {
		this._fields.MaxHeaderListSize = value
	}

	public _fields: {
		MaxHeaderListSize: number
	}

	constructor(init?: Partial<{MaxHeaderListSize?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			MaxHeaderListSize: init?.MaxHeaderListSize ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MaxHeaderListSizeServerOption {
		return new MaxHeaderListSizeServerOption(this, true)
	}

	public __goscriptAssign(source: MaxHeaderListSizeServerOption): void {
		const target = this._fields
		const values = source._fields
		target.MaxHeaderListSize = values.MaxHeaderListSize
	}

	public apply(so: serverOptions | $.VarRef<serverOptions> | null): void {
		const o = this;
		$.pointerValue<serverOptions>(so).maxHeaderListSize = $.fieldRef(o._fields, "MaxHeaderListSize")
	}

	static __typeInfo = $.registerStructType(
		"grpc.MaxHeaderListSizeServerOption",
		() => new MaxHeaderListSizeServerOption(),
		() => [$.methodSignature("apply", [["so", /* @__PURE__ */ $.pointerType("grpc.serverOptions")]])],
		MaxHeaderListSizeServerOption,
		() => [/* @__PURE__ */ $.structField("MaxHeaderListSize", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true)]
	)
}

export class MethodInfo {
	// Name is the method name only, without the service name or package name.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// IsClientStream indicates whether the RPC is a client streaming RPC.
	public get IsClientStream(): boolean {
		return this._fields.IsClientStream
	}

	public set IsClientStream(value: boolean) {
		this._fields.IsClientStream = value
	}

	// IsServerStream indicates whether the RPC is a server streaming RPC.
	public get IsServerStream(): boolean {
		return this._fields.IsServerStream
	}

	public set IsServerStream(value: boolean) {
		this._fields.IsServerStream = value
	}

	public _fields: {
		Name: string
		IsClientStream: boolean
		IsServerStream: boolean
	}

	constructor(init?: Partial<{Name?: string, IsClientStream?: boolean, IsServerStream?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			IsClientStream: init?.IsClientStream ?? (false as boolean),
			IsServerStream: init?.IsServerStream ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MethodInfo {
		return new MethodInfo(this, true)
	}

	public __goscriptAssign(source: MethodInfo): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.IsClientStream = values.IsClientStream
		target.IsServerStream = values.IsServerStream
	}

	static __typeInfo = $.registerStructType(
		"grpc.MethodInfo",
		() => new MethodInfo(),
		() => [],
		MethodInfo,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("IsClientStream", /* @__PURE__ */ $.basicType("bool"), [1], 16, true), /* @__PURE__ */ $.structField("IsServerStream", /* @__PURE__ */ $.basicType("bool"), [2], 17, true)]
	)
}

export class ServiceInfo {
	public get Methods(): $.Slice<MethodInfo> {
		return this._fields.Methods
	}

	public set Methods(value: $.Slice<MethodInfo>) {
		this._fields.Methods = value
	}

	// Metadata is the metadata specified in ServiceDesc when registering service.
	public get Metadata(): any {
		return this._fields.Metadata
	}

	public set Metadata(value: any) {
		this._fields.Metadata = value
	}

	public _fields: {
		Methods: $.Slice<MethodInfo>
		Metadata: any
	}

	constructor(init?: Partial<{Methods?: $.Slice<MethodInfo>, Metadata?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			Methods: init?.Methods ?? (null! as $.Slice<MethodInfo>),
			Metadata: init?.Metadata ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ServiceInfo {
		return new ServiceInfo(this, true)
	}

	public __goscriptAssign(source: ServiceInfo): void {
		const target = this._fields
		const values = source._fields
		target.Methods = values.Methods
		target.Metadata = $.assignFieldValue(target.Metadata, values.Metadata, { kind: $.TypeKind.Interface, methods: [] })
	}

	static __typeInfo = $.registerStructType(
		"grpc.ServiceInfo",
		() => new ServiceInfo(),
		() => [],
		ServiceInfo,
		() => [/* @__PURE__ */ $.structField("Methods", /* @__PURE__ */ $.sliceType("grpc.MethodInfo"), [0], 0, true), /* @__PURE__ */ $.structField("Metadata", { kind: $.TypeKind.Interface, methods: [] }, [1], 24, true)]
	)
}

export class listenSocket {
	public get Listener(): net.Listener | null {
		return this._fields.Listener
	}

	public set Listener(value: net.Listener | null) {
		this._fields.Listener = value
	}

	public get channelz(): channelz2.Socket | $.VarRef<channelz2.Socket> | null {
		return this._fields.channelz
	}

	public set channelz(value: channelz2.Socket | $.VarRef<channelz2.Socket> | null) {
		this._fields.channelz = value
	}

	public _fields: {
		Listener: net.Listener | null
		channelz: channelz2.Socket | $.VarRef<channelz2.Socket> | null
	}

	constructor(init?: Partial<{Listener?: net.Listener | null, channelz?: channelz2.Socket | $.VarRef<channelz2.Socket> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Listener: init?.Listener ?? (null! as net.Listener | null),
			channelz: init?.channelz ?? (null! as channelz2.Socket | $.VarRef<channelz2.Socket> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): listenSocket {
		return new listenSocket(this, true)
	}

	public __goscriptAssign(source: listenSocket): void {
		const target = this._fields
		const values = source._fields
		target.Listener = $.assignFieldValue(target.Listener, values.Listener, "net.Listener")
		target.channelz = values.channelz
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const l: listenSocket | $.VarRef<listenSocket> | null = this;
		const l$: listenSocket = l == null ? $.pointerTarget<listenSocket>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<listenSocket>(l)
		let err = (__goscriptAwait = $.pointerValue<Exclude<net.Listener, null>>((l$ as listenSocket).Listener).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await channelz2.RemoveEntry($.pointerValue<channelz2.Socket>((l$ as listenSocket).channelz).ID)
		await channelz2.Info(logger, $.interfaceValue<channelz2.Entity | null>((l$ as listenSocket).channelz, "*channelz.Socket", /* @__PURE__ */ $.pointerType("channelz.Socket")), $.arrayToSlice<any>(["ListenSocket deleted"]))
		return err
	}

	public async Accept(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.Listener | null, null>>(this.Listener).Accept()
	}

	public Addr(): any {
		return $.pointerValue<Exclude<net.Listener | null, null>>(this.Listener).Addr()
	}

	static __typeInfo = $.registerStructType(
		"grpc.listenSocket",
		() => new listenSocket(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Accept", [], ["net.Conn", "error"]), $.methodSignature("Addr", [], ["net.Addr"])],
		listenSocket,
		() => [/* @__PURE__ */ $.structField("Listener", "net.Listener", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("channelz", /* @__PURE__ */ $.pointerType("channelz.Socket"), [1], 16, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class streamKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): streamKey {
		return new streamKey(this, true)
	}

	public __goscriptAssign(source: streamKey): void {
	}

	static __typeInfo = $.registerStructType(
		"grpc.streamKey",
		() => new streamKey(),
		() => [],
		streamKey,
		() => []
	)
}

export class serverKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): serverKey {
		return new serverKey(this, true)
	}

	public __goscriptAssign(source: serverKey): void {
	}

	static __typeInfo = $.registerStructType(
		"grpc.serverKey",
		() => new serverKey(),
		() => [],
		serverKey,
		() => []
	)
}

export class atomicSemaphore {
	public get n(): atomic.Int64 {
		return this._fields.n
	}

	public set n(value: atomic.Int64) {
		this._fields.n = value
	}

	public get wait(): $.Channel<{}> | null {
		return this._fields.wait
	}

	public set wait(value: $.Channel<{}> | null) {
		this._fields.wait = value
	}

	public _fields: {
		n: atomic.Int64
		wait: $.Channel<{}> | null
	}

	constructor(init?: Partial<{n?: atomic.Int64, wait?: $.Channel<{}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			n: init?.n ? $.markAsStructValue($.cloneStructValue(init.n)) : $.markAsStructValue(new atomic.Int64()),
			wait: init?.wait ?? (null! as $.Channel<{}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): atomicSemaphore {
		return new atomicSemaphore(this, true)
	}

	public __goscriptAssign(source: atomicSemaphore): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.n, values.n)
		target.wait = values.wait
	}

	public async acquire(): globalThis.Promise<void> {
		const q: atomicSemaphore | $.VarRef<atomicSemaphore> | null = this;
		const q$: atomicSemaphore = q == null ? $.pointerTarget<atomicSemaphore>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<atomicSemaphore>(q)
		if ((q$ as atomicSemaphore).n.Add(-1n) < 0n) {
			// We ran out of quota.  Block until a release happens.
			await $.chanRecv((q$ as atomicSemaphore).wait)
		}
	}

	public async release(): globalThis.Promise<void> {
		const q: atomicSemaphore | $.VarRef<atomicSemaphore> | null = this;
		const q$: atomicSemaphore = q == null ? $.pointerTarget<atomicSemaphore>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<atomicSemaphore>(q)
		// N.B. the "<= 0" check below should allow for this to work with multiple
		// concurrent calls to acquire, but also note that with synchronous calls to
		// acquire, as our system does, n will never be less than -1.  There are
		// fairness issues (queuing) to consider if this was to be generalized.
		if ((q$ as atomicSemaphore).n.Add(1n) <= 0n) {
			// An acquire was waiting on us.  Unblock it.
			await $.chanSend((q$ as atomicSemaphore).wait, {})
		}
	}

	static __typeInfo = $.registerStructType(
		"grpc.atomicSemaphore",
		() => new atomicSemaphore(),
		() => [$.methodSignature("acquire", [], [], true), $.methodSignature("release", [], [], true)],
		atomicSemaphore,
		() => [/* @__PURE__ */ $.structField("n", "atomic.Int64", [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("wait", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [1], 8, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export const defaultServerMaxReceiveMessageSize: number = 4194304

export const defaultServerMaxSendMessageSize: number = 2147483647

export const listenerAddressForServeHTTP: string = "listenerAddressForServeHTTP"

export const serverWorkerResetThreshold: number = 65536

async function __goscriptInit0(): globalThis.Promise<void> {
	internal.__goscript_set_GetServerCredentials($.interfaceValue($.functionValue((srv: Server | $.VarRef<Server> | null): credentials.TransportCredentials | null => {
		return $.pointerValue<Server>(srv).opts.creds
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.Server")], results: ["credentials.TransportCredentials"] } as $.FunctionTypeInfo)), "func(srv *grpc.Server) credentials.TransportCredentials", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.Server")], results: ["credentials.TransportCredentials"] } as $.FunctionTypeInfo)))
	internal.__goscript_set_IsRegisteredMethod($.interfaceValue($.functionValue((srv: Server | $.VarRef<Server> | null, method: string): boolean => {
		return (srv !== null && (srv as any).__isVarRef !== true && (srv as any).__goValue === undefined ? ((srv as any) as Server).isRegisteredMethod(method) : Server.prototype.isRegisteredMethod.call(srv, method))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.Server"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)), "func(srv *grpc.Server, method string) bool", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.Server"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
	internal.__goscript_set_ServerFromContext($.interfaceValue($.goFunc(serverFromContext, "google.golang.org/grpc.serverFromContext"), "func(ctx context.Context) *grpc.Server", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [/* @__PURE__ */ $.pointerType("grpc.Server")] } as $.FunctionTypeInfo)))
	internal.__goscript_set_AddGlobalServerOptions($.interfaceValue($.functionValue((opt: $.Slice<ServerOption | null>): void => {
		globalServerOptions = $.appendSlice(globalServerOptions, opt, $.appendZeros.nil)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("grpc.ServerOption")], results: [], isVariadic: true } as $.FunctionTypeInfo)), "func(opt ...grpc.ServerOption)", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("grpc.ServerOption")], results: [], isVariadic: true } as $.FunctionTypeInfo)))
	internal.__goscript_set_ClearGlobalServerOptions($.functionValue((): void => {
		globalServerOptions = null
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	internal.__goscript_set_BinaryLogger($.interfaceValue($.goFunc(binaryLogger, "google.golang.org/grpc.binaryLogger"), "func(bl binarylog.Logger) grpc.ServerOption", ({ kind: $.TypeKind.Function, params: ["binarylog.Logger"], results: ["grpc.ServerOption"] } as $.FunctionTypeInfo)))
	internal.__goscript_set_JoinServerOptions($.interfaceValue($.goFunc(newJoinServerOption, "google.golang.org/grpc.newJoinServerOption"), "func(opts ...grpc.ServerOption) grpc.ServerOption", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("grpc.ServerOption")], results: ["grpc.ServerOption"], isVariadic: true } as $.FunctionTypeInfo)))
	internal.__goscript_set_BufferPool($.interfaceValue($.goFunc(bufferPool, "google.golang.org/grpc.bufferPool"), "func(bufferPool mem.BufferPool) grpc.ServerOption", ({ kind: $.TypeKind.Function, params: ["mem.BufferPool"], results: ["grpc.ServerOption"] } as $.FunctionTypeInfo)))
}

export let statusOK: status2.Status | $.VarRef<status2.Status> | null = await status.New(0, "")

export function __goscript_set_statusOK(__goscriptValue: status2.Status | $.VarRef<status2.Status> | null): void {
	statusOK = __goscriptValue
}

export let logger: grpclog.DepthLoggerV2 | null = await grpclog.Component("core")

export function __goscript_set_logger(__goscriptValue: grpclog.DepthLoggerV2 | null): void {
	logger = __goscriptValue
}

export var defaultServerOptions: serverOptions

export async function __goscript_init_defaultServerOptions(): globalThis.Promise<void> {
	if (((defaultServerOptions) as any) === undefined) {
		defaultServerOptions = await (() => { const __goscriptLiteralField22 = mem.DefaultBufferPool(); return new serverOptions({maxConcurrentStreams: 4294967295, maxReceiveMessageSize: 4194304, maxSendMessageSize: 2147483647, connectionTimeout: 120000000000n, writeBufferSize: 32768, readBufferSize: 32768, bufferPool: __goscriptLiteralField22}, true) })()
	}
}

export function __goscript_get_defaultServerOptions(): serverOptions {
	if (((defaultServerOptions) as any) === undefined) {
		throw new globalThis.Error("goscript package variable defaultServerOptions read before initialization")
	}
	return defaultServerOptions
}

export function __goscript_set_defaultServerOptions(__goscriptValue: serverOptions): void {
	$.assignStruct(defaultServerOptions, __goscriptValue)
}

export let globalServerOptions: $.Slice<ServerOption | null> = null! as $.Slice<ServerOption | null>

export function __goscript_set_globalServerOptions(__goscriptValue: $.Slice<ServerOption | null>): void {
	globalServerOptions = __goscriptValue
}

export async function newFuncServerOption(f: ((_p0: serverOptions | $.VarRef<serverOptions> | null) => void) | null): globalThis.Promise<funcServerOption | $.VarRef<funcServerOption> | null> {
	return new funcServerOption({f: f})
}

export function newJoinServerOption(opts: $.Slice<ServerOption | null>): ServerOption | null {
	return $.interfaceValue<ServerOption | null>(new joinServerOption({opts: opts}), "*grpc.joinServerOption", /* @__PURE__ */ $.pointerType("grpc.joinServerOption"))
}

export async function SharedWriteBuffer(val: boolean): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).sharedWriteBuffer = val
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function WriteBufferSize(s: number): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).writeBufferSize = s
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function ReadBufferSize(s: number): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).readBufferSize = s
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function InitialWindowSize(s: number): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).initialWindowSize = s
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function InitialConnWindowSize(s: number): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).initialConnWindowSize = s
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function KeepaliveParams(kp: keepalive.ServerParameters): globalThis.Promise<ServerOption | null> {
	if ((kp.Time > 0n) && (kp.Time < internal.KeepaliveMinServerPingTime)) {
		void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Warning($.arrayToSlice<any>(["Adjusting keepalive ping interval to minimum period of 1s"])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		kp.Time = internal.KeepaliveMinServerPingTime
	}

	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.assignStruct($.pointerValue<serverOptions>(o).keepaliveParams, kp)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function KeepaliveEnforcementPolicy(kep: keepalive.EnforcementPolicy): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.assignStruct($.pointerValue<serverOptions>(o).keepalivePolicy, kep)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function CustomCodec(codec: __goscript_codec.Codec | null): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).codec = __goscript_codec.newCodecV0Bridge(codec)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function ForceServerCodec(codec: encoding.Codec | null): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue(async (o: serverOptions | $.VarRef<serverOptions> | null): globalThis.Promise<void> => {
		$.pointerValue<serverOptions>(o).codec = (await __goscript_codec.newCodecV1Bridge(codec) as __goscript_codec.baseCodec | null)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function ForceServerCodecV2(codecV2: encoding.CodecV2 | null): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).codec = (codecV2 as __goscript_codec.baseCodec | null)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function RPCCompressor(cp: __goscript_rpc_util.Compressor | null): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).cp = cp
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function RPCDecompressor(dc: __goscript_rpc_util.Decompressor | null): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).dc = dc
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function MaxMsgSize(m: number): globalThis.Promise<ServerOption | null> {
	return MaxRecvMsgSize(m)
}

export async function MaxRecvMsgSize(m: number): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).maxReceiveMessageSize = m
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function MaxSendMsgSize(m: number): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).maxSendMessageSize = m
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function MaxConcurrentStreams(n: number): globalThis.Promise<ServerOption | null> {
	if (n == 0) {
		n = 4294967295
	}
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).maxConcurrentStreams = n
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function Creds(c: credentials.TransportCredentials | null): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).creds = c
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function UnaryInterceptor(i: ((ctx: context.Context | null, req: any, info: __goscript_interceptor.UnaryServerInfo | $.VarRef<__goscript_interceptor.UnaryServerInfo> | null, handler: __goscript_interceptor.UnaryHandler | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		if ($.pointerValue<serverOptions>(o).unaryInt != null) {
			$.panic("The unary server interceptor was already set and may not be reset.")
		}
		$.pointerValue<serverOptions>(o).unaryInt = i
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function ChainUnaryInterceptor(interceptors: $.Slice<__goscript_interceptor.UnaryServerInterceptor | null>): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).chainUnaryInts = $.appendSlice($.pointerValue<serverOptions>(o).chainUnaryInts, interceptors, $.appendZeros.nil)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function StreamInterceptor(i: ((srv: any, ss: __goscript_stream.ServerStream | null, info: __goscript_interceptor.StreamServerInfo | $.VarRef<__goscript_interceptor.StreamServerInfo> | null, handler: __goscript_stream.StreamHandler | null) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		if ($.pointerValue<serverOptions>(o).streamInt != null) {
			$.panic("The stream server interceptor was already set and may not be reset.")
		}
		$.pointerValue<serverOptions>(o).streamInt = i
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function ChainStreamInterceptor(interceptors: $.Slice<__goscript_interceptor.StreamServerInterceptor | null>): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).chainStreamInts = $.appendSlice($.pointerValue<serverOptions>(o).chainStreamInts, interceptors, $.appendZeros.nil)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function InTapHandle(h: ((ctx: context.Context | null, info: tap.Info | $.VarRef<tap.Info> | null) => [context.Context | null, $.GoError] | globalThis.Promise<[context.Context | null, $.GoError]>) | null): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		if ($.pointerValue<serverOptions>(o).inTapHandle != null) {
			$.panic("The tap handle was already set and may not be reset.")
		}
		$.pointerValue<serverOptions>(o).inTapHandle = h
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function StatsHandler(h: stats.Handler | null): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue(async (o: serverOptions | $.VarRef<serverOptions> | null): globalThis.Promise<void> => {
		if (h == null) {
			void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Error($.arrayToSlice<any>(["ignoring nil parameter in grpc.StatsHandler ServerOption"])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			// Do not allow a nil stats handler, which would otherwise cause
			// panics.
			return
		}
		$.pointerValue<serverOptions>(o).statsHandlers = $.appendOne($.pointerValue<serverOptions>(o).statsHandlers, h, $.appendZeros.nil)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function binaryLogger(bl: binarylog.Logger | null): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).binaryLogger = bl
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function UnknownServiceHandler(streamHandler: ((srv: any, stream: __goscript_stream.ServerStream | null) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).unknownStreamDesc = new __goscript_stream.StreamDesc({StreamName: "unknown_service_handler", Handler: streamHandler, ClientStreams: true, ServerStreams: true})
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function ConnectionTimeout(d: time.Duration): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).connectionTimeout = d
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export function MaxHeaderListSize(s: number): ServerOption | null {
	return $.interfaceValue<ServerOption | null>(new MaxHeaderListSizeServerOption({MaxHeaderListSize: s}, true), "grpc.MaxHeaderListSizeServerOption", "grpc.MaxHeaderListSizeServerOption")
}

export async function HeaderTableSize(__goscriptParam0: number): globalThis.Promise<ServerOption | null> {
	let s: $.VarRef<number> = $.varRef(__goscriptParam0)
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).headerTableSize = s
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function NumStreamWorkers(numServerWorkers: number): globalThis.Promise<ServerOption | null> {
	// TODO: If/when this API gets stabilized (i.e. stream workers become the
	// only way streams are processed), change the behavior of the zero value to
	// a sane default. Preliminary experiments suggest that a value equal to the
	// number of CPUs available is most performant; requires thorough testing.
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).numServerWorkers = numServerWorkers
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function WaitForHandlers(w: boolean): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).waitForHandlers = w
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function bufferPool(bufferPool: mem.BufferPool | null): globalThis.Promise<ServerOption | null> {
	return $.interfaceValue<ServerOption | null>(await newFuncServerOption($.functionValue((o: serverOptions | $.VarRef<serverOptions> | null): void => {
		$.pointerValue<serverOptions>(o).bufferPool = bufferPool
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.serverOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcServerOption", /* @__PURE__ */ $.pointerType("grpc.funcServerOption"))
}

export async function NewServer(opt: $.Slice<ServerOption | null>): globalThis.Promise<Server | $.VarRef<Server> | null> {
	let opts = $.varRef(((await __goscript_init_defaultServerOptions(), __goscript_get_defaultServerOptions())).clone())
	for (let __goscriptRangeTarget22 = globalServerOptions, __goscriptRangeWindow22 = $.sliceRange(__goscriptRangeTarget22), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow22.length; __rangeIndex++) {
		let o = (__goscriptRangeWindow22.backing[__goscriptRangeWindow22.offset + __rangeIndex] as ServerOption | null)
		void (__goscriptAwait = (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? (o as Exclude<ServerOption, null>) : $.pointerValue<Exclude<ServerOption, null>>(o)).apply(opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	for (let __goscriptRangeTarget23 = opt, __goscriptRangeWindow23 = $.sliceRange(__goscriptRangeTarget23), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow23.length; __rangeIndex++) {
		let o = (__goscriptRangeWindow23.backing[__goscriptRangeWindow23.offset + __rangeIndex] as ServerOption | null)
		void (__goscriptAwait = (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? (o as Exclude<ServerOption, null>) : $.pointerValue<Exclude<ServerOption, null>>(o)).apply(opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	let s: Server | $.VarRef<Server> | null = (await (async () => { const __goscriptLiteralField23 = grpcsync.NewEvent(); const __goscriptLiteralField24 = grpcsync.NewEvent(); const __goscriptLiteralField25 = await channelz2.RegisterServer(""); return new Server({lis: $.makeMap<net.Listener | null, boolean>(), opts: opts.value, conns: $.makeMap<string, globalThis.Map<transport.ServerTransport | null, boolean> | null>(), services: $.makeMap<string, serviceInfo | $.VarRef<serviceInfo> | null>(), quit: __goscriptLiteralField23, done: __goscriptLiteralField24, channelz: __goscriptLiteralField25}) })())
	let s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
	chainUnaryServerInterceptors(s)
	chainStreamServerInterceptors(s);
	;(s$ as Server).cv = sync.NewCond($.pointerValueOrNil($.interfaceValue<sync.Locker | null>($.fieldRef((s$ as Server)._fields, "mu"), "*sync.Mutex", /* @__PURE__ */ $.pointerType("sync.Mutex")))!)
	if (__goscript_trace.EnableTracing) {
		let [, file, line, ] = runtime.Caller(1);
		;(s$ as Server).events = await __goscript_trace_withtrace.newTraceEventLog("grpc.Server", await fmt.Sprintf("%s:%d", file, $.basicInterfaceValue(line, "int")))
	}

	if ((s$ as Server).opts.numServerWorkers > 0) {
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).initServerWorkers() : Server.prototype.initServerWorkers.call(s))
	}

	await channelz2.Info(logger, $.interfaceValue<channelz2.Entity | null>((s$ as Server).channelz, "*channelz.Server", /* @__PURE__ */ $.pointerType("channelz.Server")), $.arrayToSlice<any>(["Server created"]))
	return s
}

export let ErrServerStopped: $.GoError = errors.New("grpc: the server has been stopped")

export function __goscript_set_ErrServerStopped(__goscriptValue: $.GoError): void {
	ErrServerStopped = __goscriptValue
}

export function chainUnaryServerInterceptors(s: Server | $.VarRef<Server> | null): void {
	const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
	// Prepend opts.unaryInt to the chaining interceptors if it exists, since unaryInt will
	// be executed before any other chained interceptors.
	let interceptors: $.Slice<__goscript_interceptor.UnaryServerInterceptor | null> = (s$ as Server).opts.chainUnaryInts
	if ((s$ as Server).opts.unaryInt != null) {
		interceptors = $.appendSlice($.arrayToSlice<__goscript_interceptor.UnaryServerInterceptor | null>([(s$ as Server).opts.unaryInt]), (s$ as Server).opts.chainUnaryInts, $.appendZeros.nil)
	}

	let chainedInt: __goscript_interceptor.UnaryServerInterceptor | null = null! as __goscript_interceptor.UnaryServerInterceptor | null
	if ($.sliceLen(interceptors) == 0) {
		chainedInt = (null as __goscript_interceptor.UnaryServerInterceptor | null)
	} else {
		if ($.sliceLen(interceptors) == 1) {
			chainedInt = $.arrayIndex(interceptors!, 0)
		} else {
			chainedInt = chainUnaryInterceptors(interceptors)
		}
	}

	;(s$ as Server).opts.unaryInt = chainedInt
}

export function chainUnaryInterceptors(interceptors: $.Slice<__goscript_interceptor.UnaryServerInterceptor | null>): __goscript_interceptor.UnaryServerInterceptor | null {
	return $.functionValue(async (ctx: context.Context | null, req: any, info: __goscript_interceptor.UnaryServerInfo | $.VarRef<__goscript_interceptor.UnaryServerInfo> | null, handler: ((ctx: context.Context | null, req: any) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null): globalThis.Promise<[any, $.GoError]> => {
		return $.arrayIndex(interceptors!, 0)!(ctx, req, info, getChainUnaryHandler(interceptors, 0, info, handler))
	}, ({ kind: $.TypeKind.Function, params: ["context.Context", { kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.pointerType("grpc.UnaryServerInfo"), ({ kind: $.TypeKind.Function, name: "grpc.UnaryHandler", params: ["context.Context", { kind: $.TypeKind.Interface, methods: [] }], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo))
}

export function getChainUnaryHandler(interceptors: $.Slice<__goscript_interceptor.UnaryServerInterceptor | null>, curr: number, info: __goscript_interceptor.UnaryServerInfo | $.VarRef<__goscript_interceptor.UnaryServerInfo> | null, finalHandler: __goscript_interceptor.UnaryHandler | null): __goscript_interceptor.UnaryHandler | null {
	if (curr == ($.sliceLen(interceptors) - 1)) {
		return finalHandler
	}
	return $.functionValue(async (ctx: context.Context | null, req: any): globalThis.Promise<[any, $.GoError]> => {
		return await $.arrayIndex(interceptors!, curr + 1)!(ctx, req, info, getChainUnaryHandler(interceptors, curr + 1, info, finalHandler))
	}, ({ kind: $.TypeKind.Function, params: ["context.Context", { kind: $.TypeKind.Interface, methods: [] }], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo))
}

export function chainStreamServerInterceptors(s: Server | $.VarRef<Server> | null): void {
	const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
	// Prepend opts.streamInt to the chaining interceptors if it exists, since streamInt will
	// be executed before any other chained interceptors.
	let interceptors: $.Slice<__goscript_interceptor.StreamServerInterceptor | null> = (s$ as Server).opts.chainStreamInts
	if ((s$ as Server).opts.streamInt != null) {
		interceptors = $.appendSlice($.arrayToSlice<__goscript_interceptor.StreamServerInterceptor | null>([(s$ as Server).opts.streamInt]), (s$ as Server).opts.chainStreamInts, $.appendZeros.nil)
	}

	let chainedInt: __goscript_interceptor.StreamServerInterceptor | null = null! as __goscript_interceptor.StreamServerInterceptor | null
	if ($.sliceLen(interceptors) == 0) {
		chainedInt = (null as __goscript_interceptor.StreamServerInterceptor | null)
	} else {
		if ($.sliceLen(interceptors) == 1) {
			chainedInt = $.arrayIndex(interceptors!, 0)
		} else {
			chainedInt = chainStreamInterceptors(interceptors)
		}
	}

	;(s$ as Server).opts.streamInt = chainedInt
}

export function chainStreamInterceptors(interceptors: $.Slice<__goscript_interceptor.StreamServerInterceptor | null>): __goscript_interceptor.StreamServerInterceptor | null {
	return $.functionValue(async (srv: any, ss: __goscript_stream.ServerStream | null, info: __goscript_interceptor.StreamServerInfo | $.VarRef<__goscript_interceptor.StreamServerInfo> | null, handler: ((srv: any, stream: __goscript_stream.ServerStream | null) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> => {
		return $.arrayIndex(interceptors!, 0)!(srv, ss, info, getChainStreamHandler(interceptors, 0, info, handler))
	}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, "grpc.ServerStream", /* @__PURE__ */ $.pointerType("grpc.StreamServerInfo"), ({ kind: $.TypeKind.Function, name: "grpc.StreamHandler", params: [{ kind: $.TypeKind.Interface, methods: [] }, "grpc.ServerStream"], results: ["error"] } as $.FunctionTypeInfo)], results: ["error"] } as $.FunctionTypeInfo))
}

export function getChainStreamHandler(interceptors: $.Slice<__goscript_interceptor.StreamServerInterceptor | null>, curr: number, info: __goscript_interceptor.StreamServerInfo | $.VarRef<__goscript_interceptor.StreamServerInfo> | null, finalHandler: __goscript_stream.StreamHandler | null): __goscript_stream.StreamHandler | null {
	if (curr == ($.sliceLen(interceptors) - 1)) {
		return finalHandler
	}
	return $.functionValue(async (srv: any, stream: __goscript_stream.ServerStream | null): globalThis.Promise<$.GoError> => {
		return await $.arrayIndex(interceptors!, curr + 1)!(srv, stream, info, getChainStreamHandler(interceptors, curr + 1, info, finalHandler))
	}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, "grpc.ServerStream"], results: ["error"] } as $.FunctionTypeInfo))
}

export function NewContextWithServerTransportStream(ctx: context.Context | null, stream: ServerTransportStream | null): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(new streamKey(undefined, true), "grpc.streamKey", "grpc.streamKey"), (stream as any))
}

export async function ServerTransportStreamFromContext(ctx: context.Context | null): globalThis.Promise<ServerTransportStream | null> {
	let [s, ] = $.typeAssertTuple<ServerTransportStream | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new streamKey(undefined, true), "grpc.streamKey", "grpc.streamKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "grpc.ServerTransportStream")
	return s
}

export async function serverFromContext(ctx: context.Context | null): globalThis.Promise<Server | $.VarRef<Server> | null> {
	let __goscriptTuple19: any = $.typeAssertTuple<Server | $.VarRef<Server> | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new serverKey(undefined, true), "grpc.serverKey", "grpc.serverKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("grpc.Server"))
	let s: Server | $.VarRef<Server> | null = __goscriptTuple19[0]
	return s
}

export function contextWithServer(ctx: context.Context | null, server: Server | $.VarRef<Server> | null): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(new serverKey(undefined, true), "grpc.serverKey", "grpc.serverKey"), $.interfaceValue(server, "*grpc.Server", /* @__PURE__ */ $.pointerType("grpc.Server")))
}

export async function SetHeader(ctx: context.Context | null, md: metadata.MD): globalThis.Promise<$.GoError> {
	if (metadata.MD_Len(md) == 0) {
		return null
	}
	let stream = await ServerTransportStreamFromContext(ctx)
	if (stream == null) {
		return status.Errorf(13, "grpc: failed to fetch the stream from the context %v", $.arrayToSlice<any>([(ctx as any)]))
	}
	return (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? (stream as Exclude<ServerTransportStream, null>) : $.pointerValue<Exclude<ServerTransportStream, null>>(stream)).SetHeader(md)
}

export async function SendHeader(ctx: context.Context | null, md: metadata.MD): globalThis.Promise<$.GoError> {
	let stream = await ServerTransportStreamFromContext(ctx)
	if (stream == null) {
		return status.Errorf(13, "grpc: failed to fetch the stream from the context %v", $.arrayToSlice<any>([(ctx as any)]))
	}
	{
		let err = (__goscriptAwait = (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? (stream as Exclude<ServerTransportStream, null>) : $.pointerValue<Exclude<ServerTransportStream, null>>(stream)).SendHeader(md), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			return __goscript_rpc_util.toRPCErr(err)
		}
	}
	return null
}

export async function SetSendCompressor(ctx: context.Context | null, name: string): globalThis.Promise<$.GoError> {
	let __goscriptTuple20: any = $.typeAssertTuple<transport.Stream | $.VarRef<transport.Stream> | null>(await ServerTransportStreamFromContext(ctx), /* @__PURE__ */ $.pointerType("transport.Stream"))
	let stream: transport.Stream | $.VarRef<transport.Stream> | null = __goscriptTuple20[0]
	let ok = __goscriptTuple20[1]
	if (!ok || (stream == null)) {
		return fmt.Errorf("failed to fetch the stream from the given context")
	}

	{
		let err = validateSendCompressor(name, (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).ClientAdvertisedCompressors() : transport.Stream.prototype.ClientAdvertisedCompressors.call(stream)))
		if (err != null) {
			return fmt.Errorf("unable to set send compressor: %w", (err as any))
		}
	}

	return (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).SetSendCompress(name) : transport.Stream.prototype.SetSendCompress.call(stream, name))
}

export async function ClientSupportedCompressors(ctx: context.Context | null): globalThis.Promise<[$.Slice<string>, $.GoError]> {
	let __goscriptTuple21: any = $.typeAssertTuple<transport.Stream | $.VarRef<transport.Stream> | null>(await ServerTransportStreamFromContext(ctx), /* @__PURE__ */ $.pointerType("transport.Stream"))
	let stream: transport.Stream | $.VarRef<transport.Stream> | null = __goscriptTuple21[0]
	let ok = __goscriptTuple21[1]
	if (!ok || (stream == null)) {
		return [null, fmt.Errorf("failed to fetch the stream from the given context %v", (ctx as any))]
	}

	return [(stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? ((stream as any) as transport.Stream).ClientAdvertisedCompressors() : transport.Stream.prototype.ClientAdvertisedCompressors.call(stream)), null]
}

export async function SetTrailer(ctx: context.Context | null, md: metadata.MD): globalThis.Promise<$.GoError> {
	if (metadata.MD_Len(md) == 0) {
		return null
	}
	let stream = await ServerTransportStreamFromContext(ctx)
	if (stream == null) {
		return status.Errorf(13, "grpc: failed to fetch the stream from the context %v", $.arrayToSlice<any>([(ctx as any)]))
	}
	return (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? (stream as Exclude<ServerTransportStream, null>) : $.pointerValue<Exclude<ServerTransportStream, null>>(stream)).SetTrailer(md)
}

export async function Method(ctx: context.Context | null): globalThis.Promise<[string, boolean]> {
	let s = await ServerTransportStreamFromContext(ctx)
	if (s == null) {
		return ["", false]
	}
	return [(__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<ServerTransportStream, null>) : $.pointerValue<Exclude<ServerTransportStream, null>>(s)).Method(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), true]
}

export function validateSendCompressor(name: string, clientCompressors: $.Slice<string>): $.GoError {
	if ($.stringEqual(name, encoding.Identity)) {
		return null
	}

	if (!grpcutil.IsCompressorNameRegistered(name)) {
		return fmt.Errorf("compressor not registered %q", name)
	}

	for (let __goscriptRangeTarget24 = clientCompressors, __goscriptRangeWindow24 = $.sliceRange(__goscriptRangeTarget24), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow24.length; __rangeIndex++) {
		let c = (__goscriptRangeWindow24.backing[__goscriptRangeWindow24.offset + __rangeIndex] as string)
		if ($.stringEqual(c, name)) {
			return null
		}
	}
	return fmt.Errorf("client does not support compressor %q", name)
}

export function newHandlerQuota(n: number): atomicSemaphore | $.VarRef<atomicSemaphore> | null {
	let a: atomicSemaphore | $.VarRef<atomicSemaphore> | null = new atomicSemaphore({wait: $.makeChannel<{}>(1, {}, "both")})
	$.pointerValue<atomicSemaphore>(a).n.Store($.int64(n))
	return a
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_trace.stringer_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("string", "grpc.stringer"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any

export { __goscriptInit0 }
