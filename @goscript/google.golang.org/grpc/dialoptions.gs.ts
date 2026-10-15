// Generated file based on dialoptions.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as net from "@goscript/net/index.js"

import * as url from "@goscript/net/url/index.js"

import * as time from "@goscript/time/index.js"

import * as backoff from "@goscript/google.golang.org/grpc/backoff/index.js"

import * as channelz from "@goscript/google.golang.org/grpc/channelz/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as insecure from "@goscript/google.golang.org/grpc/credentials/insecure/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/index.js"

import * as internalbackoff from "@goscript/google.golang.org/grpc/internal/backoff/index.js"

import * as binarylog from "@goscript/google.golang.org/grpc/internal/binarylog/index.js"

import * as transport from "@goscript/google.golang.org/grpc/internal/transport/index.js"

import * as keepalive from "@goscript/google.golang.org/grpc/keepalive/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as stats from "@goscript/google.golang.org/grpc/stats/index.js"

import type * as fmt from "@goscript/fmt/index.js"

import * as balancer from "@goscript/google.golang.org/grpc/balancer/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as encoding from "@goscript/google.golang.org/grpc/encoding/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal2 from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as gracefulswitch from "@goscript/google.golang.org/grpc/internal/balancer/gracefulswitch/index.js"

import * as channelz2 from "@goscript/google.golang.org/grpc/internal/channelz/index.js"

import * as grpcsync from "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"

import * as idle from "@goscript/google.golang.org/grpc/internal/idle/index.js"

import * as resolver2 from "@goscript/google.golang.org/grpc/internal/resolver/index.js"

import * as serviceconfig from "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"

import * as stats2 from "@goscript/google.golang.org/grpc/internal/stats/index.js"

import type * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as serviceconfig2 from "@goscript/google.golang.org/grpc/serviceconfig/index.js"

import type * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_backoff from "./backoff.gs.ts"

import * as __goscript_balancer_wrapper from "./balancer_wrapper.gs.ts"

import * as __goscript_call from "./call.gs.ts"

import * as __goscript_clientconn from "./clientconn.gs.ts"

import * as __goscript_codec from "./codec.gs.ts"

import * as __goscript_interceptor from "./interceptor.gs.ts"

import * as __goscript_picker_wrapper from "./picker_wrapper.gs.ts"

import * as __goscript_resolver_wrapper from "./resolver_wrapper.gs.ts"

import * as __goscript_rpc_util from "./rpc_util.gs.ts"

import * as __goscript_server from "./server.gs.ts"

import * as __goscript_service_config from "./service_config.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"

import * as __goscript_trace from "./trace.gs.ts"
import "@goscript/context/index.js"
import "@goscript/net/index.js"
import "@goscript/net/url/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/grpc/backoff/index.js"
import "@goscript/google.golang.org/grpc/channelz/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/credentials/insecure/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/backoff/index.js"
import "@goscript/google.golang.org/grpc/internal/binarylog/index.js"
import "@goscript/google.golang.org/grpc/internal/transport/index.js"
import "@goscript/google.golang.org/grpc/keepalive/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/stats/index.js"
import "@goscript/google.golang.org/grpc/balancer/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/google.golang.org/grpc/encoding/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/balancer/gracefulswitch/index.js"
import "@goscript/google.golang.org/grpc/internal/channelz/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"
import "@goscript/google.golang.org/grpc/internal/idle/index.js"
import "@goscript/google.golang.org/grpc/internal/resolver/index.js"
import "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"
import "@goscript/google.golang.org/grpc/internal/stats/index.js"
import "@goscript/google.golang.org/grpc/serviceconfig/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "./backoff.gs.ts"
import "./balancer_wrapper.gs.ts"
import "./call.gs.ts"
import "./clientconn.gs.ts"
import "./codec.gs.ts"
import "./interceptor.gs.ts"
import "./picker_wrapper.gs.ts"
import "./resolver_wrapper.gs.ts"
import "./rpc_util.gs.ts"
import "./server.gs.ts"
import "./service_config.gs.ts"
import "./stream.gs.ts"
import "./trace.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc", ["grpc.dialOptions", "grpc.DialOption", "grpc.perTargetDialOption", "grpc.EmptyDialOption", "grpc.disableGlobalDialOptions", "grpc.funcDialOption", "grpc.joinDialOption", "grpc.MaxHeaderListSizeDialOption"])

export type DialOption = {
	apply(_p0: dialOptions | $.VarRef<dialOptions> | null): void
}

$.registerInterfaceType(
	"grpc.DialOption",
	null,
	[$.methodSignature("apply", [/* @__PURE__ */ $.pointerType("grpc.dialOptions")])]
);

export type perTargetDialOption = {
	DialOptionForTarget(parsedTarget: url.URL): DialOption | null
}

$.registerInterfaceType(
	"grpc.perTargetDialOption",
	null,
	[$.methodSignature("DialOptionForTarget", [["parsedTarget", "url.URL"]], ["grpc.DialOption"])]
);

export class dialOptions {
	public get unaryInt(): ((ctx: context.Context | null, method: string, req: any, reply: any, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, invoker: ((ctx: context.Context | null, method: string, req: any, reply: any, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => $.GoError | globalThis.Promise<$.GoError>) | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.unaryInt
	}

	public set unaryInt(value: ((ctx: context.Context | null, method: string, req: any, reply: any, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, invoker: ((ctx: context.Context | null, method: string, req: any, reply: any, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => $.GoError | globalThis.Promise<$.GoError>) | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.unaryInt = value
	}

	public get streamInt(): ((ctx: context.Context | null, desc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, method: string, streamer: ((ctx: context.Context | null, desc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, method: string, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => [__goscript_stream.ClientStream | null, $.GoError] | globalThis.Promise<[__goscript_stream.ClientStream | null, $.GoError]>) | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => [__goscript_stream.ClientStream | null, $.GoError] | globalThis.Promise<[__goscript_stream.ClientStream | null, $.GoError]>) | null {
		return this._fields.streamInt
	}

	public set streamInt(value: ((ctx: context.Context | null, desc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, method: string, streamer: ((ctx: context.Context | null, desc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, method: string, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => [__goscript_stream.ClientStream | null, $.GoError] | globalThis.Promise<[__goscript_stream.ClientStream | null, $.GoError]>) | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => [__goscript_stream.ClientStream | null, $.GoError] | globalThis.Promise<[__goscript_stream.ClientStream | null, $.GoError]>) | null) {
		this._fields.streamInt = value
	}

	public get chainUnaryInts(): $.Slice<__goscript_interceptor.UnaryClientInterceptor | null> {
		return this._fields.chainUnaryInts
	}

	public set chainUnaryInts(value: $.Slice<__goscript_interceptor.UnaryClientInterceptor | null>) {
		this._fields.chainUnaryInts = value
	}

	public get chainStreamInts(): $.Slice<__goscript_interceptor.StreamClientInterceptor | null> {
		return this._fields.chainStreamInts
	}

	public set chainStreamInts(value: $.Slice<__goscript_interceptor.StreamClientInterceptor | null>) {
		this._fields.chainStreamInts = value
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

	public get bs(): internalbackoff.Strategy | null {
		return this._fields.bs
	}

	public set bs(value: internalbackoff.Strategy | null) {
		this._fields.bs = value
	}

	public get block(): boolean {
		return this._fields.block
	}

	public set block(value: boolean) {
		this._fields.block = value
	}

	public get returnLastError(): boolean {
		return this._fields.returnLastError
	}

	public set returnLastError(value: boolean) {
		this._fields.returnLastError = value
	}

	public get timeout(): time.Duration {
		return this._fields.timeout
	}

	public set timeout(value: time.Duration) {
		this._fields.timeout = value
	}

	public get authority(): string {
		return this._fields.authority
	}

	public set authority(value: string) {
		this._fields.authority = value
	}

	public get binaryLogger(): binarylog.Logger | null {
		return this._fields.binaryLogger
	}

	public set binaryLogger(value: binarylog.Logger | null) {
		this._fields.binaryLogger = value
	}

	public get copts(): transport.ConnectOptions {
		return this._fields.copts
	}

	public set copts(value: transport.ConnectOptions) {
		this._fields.copts = value
	}

	public get callOptions(): $.Slice<__goscript_rpc_util.CallOption | null> {
		return this._fields.callOptions
	}

	public set callOptions(value: $.Slice<__goscript_rpc_util.CallOption | null>) {
		this._fields.callOptions = value
	}

	public get channelzParent(): channelz.Identifier | null {
		return this._fields.channelzParent
	}

	public set channelzParent(value: channelz.Identifier | null) {
		this._fields.channelzParent = value
	}

	public get disableServiceConfig(): boolean {
		return this._fields.disableServiceConfig
	}

	public set disableServiceConfig(value: boolean) {
		this._fields.disableServiceConfig = value
	}

	public get disableRetry(): boolean {
		return this._fields.disableRetry
	}

	public set disableRetry(value: boolean) {
		this._fields.disableRetry = value
	}

	public get disableHealthCheck(): boolean {
		return this._fields.disableHealthCheck
	}

	public set disableHealthCheck(value: boolean) {
		this._fields.disableHealthCheck = value
	}

	public get healthCheckFunc(): ((ctx: context.Context | null, newStream: ((_p0: string) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null, setConnectivityState: ((_p0: connectivity.State, _p1: $.GoError) => void) | null, serviceName: string) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.healthCheckFunc
	}

	public set healthCheckFunc(value: ((ctx: context.Context | null, newStream: ((_p0: string) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null, setConnectivityState: ((_p0: connectivity.State, _p1: $.GoError) => void) | null, serviceName: string) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.healthCheckFunc = value
	}

	public get minConnectTimeout(): (() => time.Duration | globalThis.Promise<time.Duration>) | null {
		return this._fields.minConnectTimeout
	}

	public set minConnectTimeout(value: (() => time.Duration | globalThis.Promise<time.Duration>) | null) {
		this._fields.minConnectTimeout = value
	}

	public get defaultServiceConfig(): __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null {
		return this._fields.defaultServiceConfig
	}

	public set defaultServiceConfig(value: __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null) {
		this._fields.defaultServiceConfig = value
	}

	public get defaultServiceConfigRawJSON(): $.VarRef<string> | null {
		return this._fields.defaultServiceConfigRawJSON
	}

	public set defaultServiceConfigRawJSON(value: $.VarRef<string> | null) {
		this._fields.defaultServiceConfigRawJSON = value
	}

	public get resolvers(): $.Slice<resolver.Builder | null> {
		return this._fields.resolvers
	}

	public set resolvers(value: $.Slice<resolver.Builder | null>) {
		this._fields.resolvers = value
	}

	public get idleTimeout(): time.Duration {
		return this._fields.idleTimeout
	}

	public set idleTimeout(value: time.Duration) {
		this._fields.idleTimeout = value
	}

	public get defaultScheme(): string {
		return this._fields.defaultScheme
	}

	public set defaultScheme(value: string) {
		this._fields.defaultScheme = value
	}

	public get maxCallAttempts(): number {
		return this._fields.maxCallAttempts
	}

	public set maxCallAttempts(value: number) {
		this._fields.maxCallAttempts = value
	}

	public _fields: {
		unaryInt: ((ctx: context.Context | null, method: string, req: any, reply: any, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, invoker: ((ctx: context.Context | null, method: string, req: any, reply: any, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => $.GoError | globalThis.Promise<$.GoError>) | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => $.GoError | globalThis.Promise<$.GoError>) | null
		streamInt: ((ctx: context.Context | null, desc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, method: string, streamer: ((ctx: context.Context | null, desc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, method: string, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => [__goscript_stream.ClientStream | null, $.GoError] | globalThis.Promise<[__goscript_stream.ClientStream | null, $.GoError]>) | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => [__goscript_stream.ClientStream | null, $.GoError] | globalThis.Promise<[__goscript_stream.ClientStream | null, $.GoError]>) | null
		chainUnaryInts: $.Slice<__goscript_interceptor.UnaryClientInterceptor | null>
		chainStreamInts: $.Slice<__goscript_interceptor.StreamClientInterceptor | null>
		cp: __goscript_rpc_util.Compressor | null
		dc: __goscript_rpc_util.Decompressor | null
		bs: internalbackoff.Strategy | null
		block: boolean
		returnLastError: boolean
		timeout: time.Duration
		authority: string
		binaryLogger: binarylog.Logger | null
		copts: transport.ConnectOptions
		callOptions: $.Slice<__goscript_rpc_util.CallOption | null>
		channelzParent: channelz.Identifier | null
		disableServiceConfig: boolean
		disableRetry: boolean
		disableHealthCheck: boolean
		healthCheckFunc: ((ctx: context.Context | null, newStream: ((_p0: string) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null, setConnectivityState: ((_p0: connectivity.State, _p1: $.GoError) => void) | null, serviceName: string) => $.GoError | globalThis.Promise<$.GoError>) | null
		minConnectTimeout: (() => time.Duration | globalThis.Promise<time.Duration>) | null
		defaultServiceConfig: __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null
		defaultServiceConfigRawJSON: $.VarRef<string> | null
		resolvers: $.Slice<resolver.Builder | null>
		idleTimeout: time.Duration
		defaultScheme: string
		maxCallAttempts: number
	}

	constructor(init?: Partial<{unaryInt?: ((ctx: context.Context | null, method: string, req: any, reply: any, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, invoker: ((ctx: context.Context | null, method: string, req: any, reply: any, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => $.GoError | globalThis.Promise<$.GoError>) | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => $.GoError | globalThis.Promise<$.GoError>) | null, streamInt?: ((ctx: context.Context | null, desc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, method: string, streamer: ((ctx: context.Context | null, desc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, method: string, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => [__goscript_stream.ClientStream | null, $.GoError] | globalThis.Promise<[__goscript_stream.ClientStream | null, $.GoError]>) | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => [__goscript_stream.ClientStream | null, $.GoError] | globalThis.Promise<[__goscript_stream.ClientStream | null, $.GoError]>) | null, chainUnaryInts?: $.Slice<__goscript_interceptor.UnaryClientInterceptor | null>, chainStreamInts?: $.Slice<__goscript_interceptor.StreamClientInterceptor | null>, cp?: __goscript_rpc_util.Compressor | null, dc?: __goscript_rpc_util.Decompressor | null, bs?: internalbackoff.Strategy | null, block?: boolean, returnLastError?: boolean, timeout?: time.Duration, authority?: string, binaryLogger?: binarylog.Logger | null, copts?: transport.ConnectOptions, callOptions?: $.Slice<__goscript_rpc_util.CallOption | null>, channelzParent?: channelz.Identifier | null, disableServiceConfig?: boolean, disableRetry?: boolean, disableHealthCheck?: boolean, healthCheckFunc?: ((ctx: context.Context | null, newStream: ((_p0: string) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null, setConnectivityState: ((_p0: connectivity.State, _p1: $.GoError) => void) | null, serviceName: string) => $.GoError | globalThis.Promise<$.GoError>) | null, minConnectTimeout?: (() => time.Duration | globalThis.Promise<time.Duration>) | null, defaultServiceConfig?: __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null, defaultServiceConfigRawJSON?: $.VarRef<string> | null, resolvers?: $.Slice<resolver.Builder | null>, idleTimeout?: time.Duration, defaultScheme?: string, maxCallAttempts?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			unaryInt: init?.unaryInt ?? (null! as ((ctx: context.Context | null, method: string, req: any, reply: any, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, invoker: ((ctx: context.Context | null, method: string, req: any, reply: any, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => $.GoError | globalThis.Promise<$.GoError>) | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => $.GoError | globalThis.Promise<$.GoError>) | null),
			streamInt: init?.streamInt ?? (null! as ((ctx: context.Context | null, desc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, method: string, streamer: ((ctx: context.Context | null, desc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, method: string, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => [__goscript_stream.ClientStream | null, $.GoError] | globalThis.Promise<[__goscript_stream.ClientStream | null, $.GoError]>) | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => [__goscript_stream.ClientStream | null, $.GoError] | globalThis.Promise<[__goscript_stream.ClientStream | null, $.GoError]>) | null),
			chainUnaryInts: init?.chainUnaryInts ?? (null! as $.Slice<__goscript_interceptor.UnaryClientInterceptor | null>),
			chainStreamInts: init?.chainStreamInts ?? (null! as $.Slice<__goscript_interceptor.StreamClientInterceptor | null>),
			cp: init?.cp ?? (null! as __goscript_rpc_util.Compressor | null),
			dc: init?.dc ?? (null! as __goscript_rpc_util.Decompressor | null),
			bs: init?.bs ?? (null! as internalbackoff.Strategy | null),
			block: init?.block ?? (false as boolean),
			returnLastError: init?.returnLastError ?? (false as boolean),
			timeout: init?.timeout ?? (0n as time.Duration),
			authority: init?.authority ?? ("" as string),
			binaryLogger: init?.binaryLogger ?? (null! as binarylog.Logger | null),
			copts: init?.copts ? init.copts.clone() : new transport.ConnectOptions(undefined, true),
			callOptions: init?.callOptions ?? (null! as $.Slice<__goscript_rpc_util.CallOption | null>),
			channelzParent: init?.channelzParent ?? (null! as channelz.Identifier | null),
			disableServiceConfig: init?.disableServiceConfig ?? (false as boolean),
			disableRetry: init?.disableRetry ?? (false as boolean),
			disableHealthCheck: init?.disableHealthCheck ?? (false as boolean),
			healthCheckFunc: init?.healthCheckFunc ?? (null! as ((ctx: context.Context | null, newStream: ((_p0: string) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null, setConnectivityState: ((_p0: connectivity.State, _p1: $.GoError) => void) | null, serviceName: string) => $.GoError | globalThis.Promise<$.GoError>) | null),
			minConnectTimeout: init?.minConnectTimeout ?? (null! as (() => time.Duration | globalThis.Promise<time.Duration>) | null),
			defaultServiceConfig: init?.defaultServiceConfig ?? (null! as __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null),
			defaultServiceConfigRawJSON: init?.defaultServiceConfigRawJSON ?? (null! as $.VarRef<string> | null),
			resolvers: init?.resolvers ?? (null! as $.Slice<resolver.Builder | null>),
			idleTimeout: init?.idleTimeout ?? (0n as time.Duration),
			defaultScheme: init?.defaultScheme ?? ("" as string),
			maxCallAttempts: init?.maxCallAttempts ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dialOptions {
		return new dialOptions(this, true)
	}

	public __goscriptAssign(source: dialOptions): void {
		const target = this._fields
		const values = source._fields
		target.unaryInt = values.unaryInt
		target.streamInt = values.streamInt
		target.chainUnaryInts = values.chainUnaryInts
		target.chainStreamInts = values.chainStreamInts
		target.cp = $.assignFieldValue(target.cp, values.cp, "grpc.Compressor")
		target.dc = $.assignFieldValue(target.dc, values.dc, "grpc.Decompressor")
		target.bs = $.assignFieldValue(target.bs, values.bs, "backoff.Strategy")
		target.block = values.block
		target.returnLastError = values.returnLastError
		target.timeout = values.timeout
		target.authority = values.authority
		target.binaryLogger = $.assignFieldValue(target.binaryLogger, values.binaryLogger, "binarylog.Logger")
		$.assignStruct(target.copts, values.copts)
		target.callOptions = values.callOptions
		target.channelzParent = $.assignFieldValue(target.channelzParent, values.channelzParent, "channelz.Identifier")
		target.disableServiceConfig = values.disableServiceConfig
		target.disableRetry = values.disableRetry
		target.disableHealthCheck = values.disableHealthCheck
		target.healthCheckFunc = values.healthCheckFunc
		target.minConnectTimeout = values.minConnectTimeout
		target.defaultServiceConfig = values.defaultServiceConfig
		target.defaultServiceConfigRawJSON = values.defaultServiceConfigRawJSON
		target.resolvers = values.resolvers
		target.idleTimeout = values.idleTimeout
		target.defaultScheme = values.defaultScheme
		target.maxCallAttempts = values.maxCallAttempts
	}

	static __typeInfo = $.registerStructType(
		"grpc.dialOptions",
		() => new dialOptions(),
		() => [],
		dialOptions,
		() => [/* @__PURE__ */ $.structField("unaryInt", ({ kind: $.TypeKind.Function, name: "grpc.UnaryClientInterceptor", params: ["context.Context", /* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.pointerType("grpc.ClientConn"), ({ kind: $.TypeKind.Function, name: "grpc.UnaryInvoker", params: ["context.Context", /* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.pointerType("grpc.ClientConn"), /* @__PURE__ */ $.sliceType("grpc.CallOption")], results: ["error"], isVariadic: true } as $.FunctionTypeInfo), /* @__PURE__ */ $.sliceType("grpc.CallOption")], results: ["error"], isVariadic: true } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("streamInt", ({ kind: $.TypeKind.Function, name: "grpc.StreamClientInterceptor", params: ["context.Context", /* @__PURE__ */ $.pointerType("grpc.StreamDesc"), /* @__PURE__ */ $.pointerType("grpc.ClientConn"), /* @__PURE__ */ $.basicType("string"), ({ kind: $.TypeKind.Function, name: "grpc.Streamer", params: ["context.Context", /* @__PURE__ */ $.pointerType("grpc.StreamDesc"), /* @__PURE__ */ $.pointerType("grpc.ClientConn"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("grpc.CallOption")], results: ["grpc.ClientStream", "error"], isVariadic: true } as $.FunctionTypeInfo), /* @__PURE__ */ $.sliceType("grpc.CallOption")], results: ["grpc.ClientStream", "error"], isVariadic: true } as $.FunctionTypeInfo), [1], 8, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("chainUnaryInts", /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, name: "grpc.UnaryClientInterceptor", params: ["context.Context", /* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.pointerType("grpc.ClientConn"), ({ kind: $.TypeKind.Function, name: "grpc.UnaryInvoker", params: ["context.Context", /* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.pointerType("grpc.ClientConn"), /* @__PURE__ */ $.sliceType("grpc.CallOption")], results: ["error"], isVariadic: true } as $.FunctionTypeInfo), /* @__PURE__ */ $.sliceType("grpc.CallOption")], results: ["error"], isVariadic: true } as $.FunctionTypeInfo)), [2], 16, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("chainStreamInts", /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, name: "grpc.StreamClientInterceptor", params: ["context.Context", /* @__PURE__ */ $.pointerType("grpc.StreamDesc"), /* @__PURE__ */ $.pointerType("grpc.ClientConn"), /* @__PURE__ */ $.basicType("string"), ({ kind: $.TypeKind.Function, name: "grpc.Streamer", params: ["context.Context", /* @__PURE__ */ $.pointerType("grpc.StreamDesc"), /* @__PURE__ */ $.pointerType("grpc.ClientConn"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("grpc.CallOption")], results: ["grpc.ClientStream", "error"], isVariadic: true } as $.FunctionTypeInfo), /* @__PURE__ */ $.sliceType("grpc.CallOption")], results: ["grpc.ClientStream", "error"], isVariadic: true } as $.FunctionTypeInfo)), [3], 40, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("cp", "grpc.Compressor", [4], 64, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("dc", "grpc.Decompressor", [5], 80, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("bs", "backoff.Strategy", [6], 96, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("block", /* @__PURE__ */ $.basicType("bool"), [7], 112, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("returnLastError", /* @__PURE__ */ $.basicType("bool"), [8], 113, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("timeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [9], 120, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("authority", /* @__PURE__ */ $.basicType("string"), [10], 128, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("binaryLogger", "binarylog.Logger", [11], 144, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("copts", "transport.ConnectOptions", [12], 160, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("callOptions", /* @__PURE__ */ $.sliceType("grpc.CallOption"), [13], 368, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("channelzParent", "channelz.Identifier", [14], 392, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("disableServiceConfig", /* @__PURE__ */ $.basicType("bool"), [15], 408, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("disableRetry", /* @__PURE__ */ $.basicType("bool"), [16], 409, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("disableHealthCheck", /* @__PURE__ */ $.basicType("bool"), [17], 410, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("healthCheckFunc", ({ kind: $.TypeKind.Function, name: "internal.HealthChecker", params: ["context.Context", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int", "connectivity.State"), "error"], results: [] } as $.FunctionTypeInfo), /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo), [18], 416, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("minConnectTimeout", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("int64", "time.Duration")] } as $.FunctionTypeInfo), [19], 424, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("defaultServiceConfig", /* @__PURE__ */ $.pointerType("grpc.ServiceConfig"), [20], 432, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("defaultServiceConfigRawJSON", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [21], 440, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("resolvers", /* @__PURE__ */ $.sliceType("resolver.Builder"), [22], 448, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("idleTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [23], 472, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("defaultScheme", /* @__PURE__ */ $.basicType("string"), [24], 480, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("maxCallAttempts", /* @__PURE__ */ $.basicType("int"), [25], 496, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class EmptyDialOption {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EmptyDialOption {
		return new EmptyDialOption(this, true)
	}

	public __goscriptAssign(source: EmptyDialOption): void {
	}

	public apply(_p0: dialOptions | $.VarRef<dialOptions> | null): void {
	}

	static __typeInfo = $.registerStructType(
		"grpc.EmptyDialOption",
		() => new EmptyDialOption(),
		() => [$.methodSignature("apply", [/* @__PURE__ */ $.pointerType("grpc.dialOptions")])],
		EmptyDialOption,
		() => []
	)
}

export class disableGlobalDialOptions {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): disableGlobalDialOptions {
		return new disableGlobalDialOptions(this, true)
	}

	public __goscriptAssign(source: disableGlobalDialOptions): void {
	}

	public apply(_p0: dialOptions | $.VarRef<dialOptions> | null): void {
	}

	static __typeInfo = $.registerStructType(
		"grpc.disableGlobalDialOptions",
		() => new disableGlobalDialOptions(),
		() => [$.methodSignature("apply", [/* @__PURE__ */ $.pointerType("grpc.dialOptions")])],
		disableGlobalDialOptions,
		() => []
	)
}

export class funcDialOption {
	public get f(): ((_p0: dialOptions | $.VarRef<dialOptions> | null) => void) | null {
		return this._fields.f
	}

	public set f(value: ((_p0: dialOptions | $.VarRef<dialOptions> | null) => void) | null) {
		this._fields.f = value
	}

	public _fields: {
		f: ((_p0: dialOptions | $.VarRef<dialOptions> | null) => void) | null
	}

	constructor(init?: Partial<{f?: ((_p0: dialOptions | $.VarRef<dialOptions> | null) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			f: init?.f ?? (null! as ((_p0: dialOptions | $.VarRef<dialOptions> | null) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): funcDialOption {
		return new funcDialOption(this, true)
	}

	public __goscriptAssign(source: funcDialOption): void {
		const target = this._fields
		const values = source._fields
		target.f = values.f
	}

	public async apply(_do: dialOptions | $.VarRef<dialOptions> | null): globalThis.Promise<void> {
		const fdo: funcDialOption | $.VarRef<funcDialOption> | null = this;
		void (__goscriptAwait = $.pointerValue<funcDialOption>(fdo).f!(_do), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"grpc.funcDialOption",
		() => new funcDialOption(),
		() => [$.methodSignature("apply", [["do", /* @__PURE__ */ $.pointerType("grpc.dialOptions")]], [], true)],
		funcDialOption,
		() => [/* @__PURE__ */ $.structField("f", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class joinDialOption {
	public get opts(): $.Slice<DialOption | null> {
		return this._fields.opts
	}

	public set opts(value: $.Slice<DialOption | null>) {
		this._fields.opts = value
	}

	public _fields: {
		opts: $.Slice<DialOption | null>
	}

	constructor(init?: Partial<{opts?: $.Slice<DialOption | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			opts: init?.opts ?? (null! as $.Slice<DialOption | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): joinDialOption {
		return new joinDialOption(this, true)
	}

	public __goscriptAssign(source: joinDialOption): void {
		const target = this._fields
		const values = source._fields
		target.opts = values.opts
	}

	public async apply(_do: dialOptions | $.VarRef<dialOptions> | null): globalThis.Promise<void> {
		const jdo: joinDialOption | $.VarRef<joinDialOption> | null = this;
		for (let __goscriptRangeTarget0 = $.pointerValue<joinDialOption>(jdo).opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let opt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as DialOption | null)
			void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<DialOption, null>) : $.pointerValue<Exclude<DialOption, null>>(opt)).apply(_do), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	static __typeInfo = $.registerStructType(
		"grpc.joinDialOption",
		() => new joinDialOption(),
		() => [$.methodSignature("apply", [["do", /* @__PURE__ */ $.pointerType("grpc.dialOptions")]], [], true)],
		joinDialOption,
		() => [/* @__PURE__ */ $.structField("opts", /* @__PURE__ */ $.sliceType("grpc.DialOption"), [0], 0, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class MaxHeaderListSizeDialOption {
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

	public clone(): MaxHeaderListSizeDialOption {
		return new MaxHeaderListSizeDialOption(this, true)
	}

	public __goscriptAssign(source: MaxHeaderListSizeDialOption): void {
		const target = this._fields
		const values = source._fields
		target.MaxHeaderListSize = values.MaxHeaderListSize
	}

	public apply(_do: dialOptions | $.VarRef<dialOptions> | null): void {
		const o = this;
		$.pointerValue<dialOptions>(_do).copts.MaxHeaderListSize = $.fieldRef(o._fields, "MaxHeaderListSize")
	}

	static __typeInfo = $.registerStructType(
		"grpc.MaxHeaderListSizeDialOption",
		() => new MaxHeaderListSizeDialOption(),
		() => [$.methodSignature("apply", [["do", /* @__PURE__ */ $.pointerType("grpc.dialOptions")]])],
		MaxHeaderListSizeDialOption,
		() => [/* @__PURE__ */ $.structField("MaxHeaderListSize", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true)]
	)
}

export const defaultMaxCallAttempts: number = 5

async function __goscriptInit0(): globalThis.Promise<void> {
	internal.__goscript_set_AddGlobalDialOptions($.interfaceValue($.functionValue((opt: $.Slice<DialOption | null>): void => {
		globalDialOptions = $.appendSlice(globalDialOptions, opt, $.appendZeros.nil)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("grpc.DialOption")], results: [], isVariadic: true } as $.FunctionTypeInfo)), "func(opt ...grpc.DialOption)", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("grpc.DialOption")], results: [], isVariadic: true } as $.FunctionTypeInfo)))
	internal.__goscript_set_ClearGlobalDialOptions($.functionValue((): void => {
		globalDialOptions = null
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	internal.__goscript_set_AddGlobalPerTargetDialOptions($.interfaceValue($.functionValue((opt: any): void => {
		{
			let [ptdo, ok] = $.typeAssertTuple<perTargetDialOption | null>(opt, "grpc.perTargetDialOption")
			if (ok) {
				globalPerTargetDialOptions = $.appendOne(globalPerTargetDialOptions, ptdo, $.appendZeros.nil)
			}
		}
	}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo)), "func(opt any)", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo)))
	internal.__goscript_set_ClearGlobalPerTargetDialOptions($.functionValue((): void => {
		globalPerTargetDialOptions = null
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	internal.__goscript_set_WithBinaryLogger($.interfaceValue($.goFunc(withBinaryLogger, "google.golang.org/grpc.withBinaryLogger"), "func(bl binarylog.Logger) grpc.DialOption", ({ kind: $.TypeKind.Function, params: ["binarylog.Logger"], results: ["grpc.DialOption"] } as $.FunctionTypeInfo)))
	internal.__goscript_set_JoinDialOptions($.interfaceValue($.goFunc(newJoinDialOption, "google.golang.org/grpc.newJoinDialOption"), "func(opts ...grpc.DialOption) grpc.DialOption", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("grpc.DialOption")], results: ["grpc.DialOption"], isVariadic: true } as $.FunctionTypeInfo)))
	internal.__goscript_set_DisableGlobalDialOptions($.interfaceValue($.goFunc(newDisableGlobalDialOptions, "google.golang.org/grpc.newDisableGlobalDialOptions"), "func() grpc.DialOption", ({ kind: $.TypeKind.Function, params: [], results: ["grpc.DialOption"] } as $.FunctionTypeInfo)))
	internal.__goscript_set_WithBufferPool($.interfaceValue($.goFunc(withBufferPool, "google.golang.org/grpc.withBufferPool"), "func(bufferPool mem.BufferPool) grpc.DialOption", ({ kind: $.TypeKind.Function, params: ["mem.BufferPool"], results: ["grpc.DialOption"] } as $.FunctionTypeInfo)))
}

export let globalDialOptions: $.Slice<DialOption | null> = null! as $.Slice<DialOption | null>

export function __goscript_set_globalDialOptions(__goscriptValue: $.Slice<DialOption | null>): void {
	globalDialOptions = __goscriptValue
}

export let globalPerTargetDialOptions: $.Slice<perTargetDialOption | null> = null! as $.Slice<perTargetDialOption | null>

export function __goscript_set_globalPerTargetDialOptions(__goscriptValue: $.Slice<perTargetDialOption | null>): void {
	globalPerTargetDialOptions = __goscriptValue
}

export function newDisableGlobalDialOptions(): DialOption | null {
	return $.interfaceValue<DialOption | null>(new disableGlobalDialOptions(), "*grpc.disableGlobalDialOptions", /* @__PURE__ */ $.pointerType("grpc.disableGlobalDialOptions"))
}

export async function newFuncDialOption(f: ((_p0: dialOptions | $.VarRef<dialOptions> | null) => void) | null): globalThis.Promise<funcDialOption | $.VarRef<funcDialOption> | null> {
	return new funcDialOption({f: f})
}

export function newJoinDialOption(opts: $.Slice<DialOption | null>): DialOption | null {
	return $.interfaceValue<DialOption | null>(new joinDialOption({opts: opts}), "*grpc.joinDialOption", /* @__PURE__ */ $.pointerType("grpc.joinDialOption"))
}

export async function WithSharedWriteBuffer(val: boolean): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).copts.SharedWriteBuffer = val
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithWriteBufferSize(s: number): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).copts.WriteBufferSize = s
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithReadBufferSize(s: number): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).copts.ReadBufferSize = s
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithInitialWindowSize(s: number): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).copts.InitialWindowSize = s
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithInitialConnWindowSize(s: number): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).copts.InitialConnWindowSize = s
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithMaxMsgSize(s: number): globalThis.Promise<DialOption | null> {
	return WithDefaultCallOptions($.arrayToSlice<__goscript_rpc_util.CallOption | null>([__goscript_rpc_util.MaxCallRecvMsgSize(s)]))
}

export async function WithDefaultCallOptions(cos: $.Slice<__goscript_rpc_util.CallOption | null>): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).callOptions = $.appendSlice($.pointerValue<dialOptions>(o).callOptions, cos, $.appendZeros.nil)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithCodec(c: __goscript_codec.Codec | null): globalThis.Promise<DialOption | null> {
	return WithDefaultCallOptions($.arrayToSlice<__goscript_rpc_util.CallOption | null>([__goscript_rpc_util.CallCustomCodec(c)]))
}

export async function WithCompressor(cp: __goscript_rpc_util.Compressor | null): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).cp = cp
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithDecompressor(dc: __goscript_rpc_util.Decompressor | null): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).dc = dc
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithConnectParams(p: __goscript_backoff.ConnectParams): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).bs = $.interfaceValue<internalbackoff.Strategy | null>(new internalbackoff.Exponential({Config: p.Backoff}, true), "backoff.Exponential", "backoff.Exponential")
		$.pointerValue<dialOptions>(o).minConnectTimeout = $.functionValue((): time.Duration => {
			return p.MinConnectTimeout
		}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("int64", "time.Duration")] } as $.FunctionTypeInfo))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithBackoffMaxDelay(md: time.Duration): globalThis.Promise<DialOption | null> {
	return WithBackoffConfig(new __goscript_backoff.BackoffConfig({MaxDelay: md}, true))
}

export async function WithBackoffConfig(b: __goscript_backoff.BackoffConfig): globalThis.Promise<DialOption | null> {
	let bc = ($.pointerValue<backoff.Config>(backoff.DefaultConfig)).clone()
	bc.MaxDelay = b.MaxDelay
	return withBackoff($.interfaceValue<internalbackoff.Strategy | null>(new internalbackoff.Exponential({Config: bc}, true), "backoff.Exponential", "backoff.Exponential"))
}

export async function withBackoff(bs: internalbackoff.Strategy | null): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).bs = bs
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithBlock(): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).block = true
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithReturnConnectionError(): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).block = true
		$.pointerValue<dialOptions>(o).returnLastError = true
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithInsecure(): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).copts.TransportCredentials = insecure.NewCredentials()
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithNoProxy(): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).copts.UseProxy = false
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithTransportCredentials(creds: credentials.TransportCredentials | null): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).copts.TransportCredentials = creds
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithPerRPCCredentials(creds: credentials.PerRPCCredentials | null): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).copts.PerRPCCredentials = $.appendOne($.pointerValue<dialOptions>(o).copts.PerRPCCredentials, creds, $.appendZeros.nil)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithCredentialsBundle(b: credentials.Bundle | null): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).copts.CredsBundle = b
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithTimeout(d: time.Duration): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).timeout = d
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithContextDialer(f: ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).copts.Dialer = f
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

async function __goscriptInit1(): globalThis.Promise<void> {
	internal.__goscript_set_WithHealthCheckFunc($.interfaceValue($.goFunc(withHealthCheckFunc, "google.golang.org/grpc.withHealthCheckFunc"), "func(f internal.HealthChecker) grpc.DialOption", ({ kind: $.TypeKind.Function, params: [({ kind: $.TypeKind.Function, name: "internal.HealthChecker", params: ["context.Context", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int", "connectivity.State"), "error"], results: [] } as $.FunctionTypeInfo), /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)], results: ["grpc.DialOption"] } as $.FunctionTypeInfo)))
}

export async function WithDialer(f: ((_p0: string, _p1: time.Duration) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null): globalThis.Promise<DialOption | null> {
	return WithContextDialer($.functionValue(async (ctx: context.Context | null, addr: string): globalThis.Promise<[net.Conn | null, $.GoError]> => {
		{
			let [deadline, ok] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Deadline()
			if (ok) {
				return f!(addr, time.Until($.markAsStructValue($.cloneStructValue(deadline))))
			}
		}
		return f!(addr, 0n)
	}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string")], results: ["net.Conn", "error"] } as $.FunctionTypeInfo)))
}

export async function WithStatsHandler(h: stats.Handler | null): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue(async (o: dialOptions | $.VarRef<dialOptions> | null): globalThis.Promise<void> => {
		if (h == null) {
			void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).Error($.arrayToSlice<any>(["ignoring nil parameter in grpc.WithStatsHandler ClientOption"])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			// Do not allow a nil stats handler, which would otherwise cause
			// panics.
			return
		}
		$.pointerValue<dialOptions>(o).copts.StatsHandlers = $.appendOne($.pointerValue<dialOptions>(o).copts.StatsHandlers, h, $.appendZeros.nil)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function withBinaryLogger(bl: binarylog.Logger | null): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).binaryLogger = bl
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function FailOnNonTempDialError(f: boolean): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).copts.FailOnNonTempDialError = f
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithUserAgent(s: string): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).copts.UserAgent = $.concatString(($.concatString(s, " ")), "grpc-go/1.67.3")
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithKeepaliveParams(kp: keepalive.ClientParameters): globalThis.Promise<DialOption | null> {
	if (kp.Time < internal.KeepaliveMinPingTime) {
		void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).Warningf("Adjusting keepalive ping interval to minimum period of %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(internal.KeepaliveMinPingTime, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		kp.Time = internal.KeepaliveMinPingTime
	}
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.assignStruct($.pointerValue<dialOptions>(o).copts.KeepaliveParams, kp)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithUnaryInterceptor(f: ((ctx: context.Context | null, method: string, req: any, reply: any, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, invoker: __goscript_interceptor.UnaryInvoker | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).unaryInt = f
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithChainUnaryInterceptor(interceptors: $.Slice<__goscript_interceptor.UnaryClientInterceptor | null>): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).chainUnaryInts = $.appendSlice($.pointerValue<dialOptions>(o).chainUnaryInts, interceptors, $.appendZeros.nil)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithStreamInterceptor(f: ((ctx: context.Context | null, desc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, method: string, streamer: __goscript_interceptor.Streamer | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => [__goscript_stream.ClientStream | null, $.GoError] | globalThis.Promise<[__goscript_stream.ClientStream | null, $.GoError]>) | null): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).streamInt = f
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithChainStreamInterceptor(interceptors: $.Slice<__goscript_interceptor.StreamClientInterceptor | null>): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).chainStreamInts = $.appendSlice($.pointerValue<dialOptions>(o).chainStreamInts, interceptors, $.appendZeros.nil)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithAuthority(a: string): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).authority = a
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithChannelzParentID(c: channelz.Identifier | null): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).channelzParent = c
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithDisableServiceConfig(): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).disableServiceConfig = true
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithDefaultServiceConfig(__goscriptParam0: string): globalThis.Promise<DialOption | null> {
	let s: $.VarRef<string> = $.varRef(__goscriptParam0)
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).defaultServiceConfigRawJSON = s
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithDisableRetry(): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).disableRetry = true
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export function WithMaxHeaderListSize(s: number): DialOption | null {
	return $.interfaceValue<DialOption | null>(new MaxHeaderListSizeDialOption({MaxHeaderListSize: s}, true), "grpc.MaxHeaderListSizeDialOption", "grpc.MaxHeaderListSizeDialOption")
}

export async function WithDisableHealthCheck(): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).disableHealthCheck = true
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function withHealthCheckFunc(f: ((ctx: context.Context | null, newStream: ((_p0: string) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null, setConnectivityState: ((_p0: connectivity.State, _p1: $.GoError) => void) | null, serviceName: string) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).healthCheckFunc = f
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export function defaultDialOptions(): dialOptions {
	return new dialOptions({copts: (() => { const __goscriptLiteralField0 = mem.DefaultBufferPool(); return new transport.ConnectOptions({ReadBufferSize: 32768, WriteBufferSize: 32768, UseProxy: true, UserAgent: "grpc-go/1.67.3", BufferPool: __goscriptLiteralField0}, true) })(), bs: $.interfaceValue<internalbackoff.Strategy | null>(($.pointerValue<internalbackoff.Exponential>(internalbackoff.DefaultExponential)).clone(), "backoff.Exponential", "backoff.Exponential"), healthCheckFunc: internal.HealthCheckFunc, idleTimeout: 1800000000000n, defaultScheme: "dns", maxCallAttempts: 5}, true)
}

export async function withMinConnectDeadline(f: (() => time.Duration | globalThis.Promise<time.Duration>) | null): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).minConnectTimeout = f
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function withDefaultScheme(s: string): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).defaultScheme = s
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithResolvers(rs: $.Slice<resolver.Builder | null>): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).resolvers = $.appendSlice($.pointerValue<dialOptions>(o).resolvers, rs, $.appendZeros.nil)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithIdleTimeout(d: time.Duration): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).idleTimeout = d
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function WithMaxCallAttempts(n: number): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		if (n < 2) {
			n = 5
		}
		$.pointerValue<dialOptions>(o).maxCallAttempts = n
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
}

export async function withBufferPool(bufferPool: mem.BufferPool | null): globalThis.Promise<DialOption | null> {
	return $.interfaceValue<DialOption | null>(await newFuncDialOption($.functionValue((o: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(o).copts.BufferPool = bufferPool
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))), "*grpc.funcDialOption", /* @__PURE__ */ $.pointerType("grpc.funcDialOption"))
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

var __goscriptAwait: any

export { __goscriptInit0 }

export { __goscriptInit1 }
