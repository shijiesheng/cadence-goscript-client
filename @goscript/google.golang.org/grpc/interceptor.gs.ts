// Generated file based on interceptor.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import type * as fmt from "@goscript/fmt/index.js"

import * as balancer from "@goscript/google.golang.org/grpc/balancer/index.js"

import * as channelz from "@goscript/google.golang.org/grpc/channelz/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as encoding from "@goscript/google.golang.org/grpc/encoding/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/index.js"

import * as backoff from "@goscript/google.golang.org/grpc/internal/backoff/index.js"

import * as gracefulswitch from "@goscript/google.golang.org/grpc/internal/balancer/gracefulswitch/index.js"

import * as binarylog from "@goscript/google.golang.org/grpc/internal/binarylog/index.js"

import * as channelz2 from "@goscript/google.golang.org/grpc/internal/channelz/index.js"

import * as grpcsync from "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"

import * as idle from "@goscript/google.golang.org/grpc/internal/idle/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/internal/resolver/index.js"

import * as serviceconfig from "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"

import * as stats from "@goscript/google.golang.org/grpc/internal/stats/index.js"

import * as transport from "@goscript/google.golang.org/grpc/internal/transport/index.js"

import * as keepalive from "@goscript/google.golang.org/grpc/keepalive/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import type * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as resolver2 from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as serviceconfig2 from "@goscript/google.golang.org/grpc/serviceconfig/index.js"

import * as stats2 from "@goscript/google.golang.org/grpc/stats/index.js"

import type * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_balancer_wrapper from "./balancer_wrapper.gs.ts"

import * as __goscript_call from "./call.gs.ts"

import * as __goscript_clientconn from "./clientconn.gs.ts"

import * as __goscript_codec from "./codec.gs.ts"

import * as __goscript_dialoptions from "./dialoptions.gs.ts"

import * as __goscript_picker_wrapper from "./picker_wrapper.gs.ts"

import * as __goscript_resolver_wrapper from "./resolver_wrapper.gs.ts"

import * as __goscript_rpc_util from "./rpc_util.gs.ts"

import * as __goscript_service_config from "./service_config.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"

import * as __goscript_trace from "./trace.gs.ts"
import "@goscript/context/index.js"
import "@goscript/google.golang.org/grpc/balancer/index.js"
import "@goscript/google.golang.org/grpc/channelz/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/encoding/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/backoff/index.js"
import "@goscript/google.golang.org/grpc/internal/balancer/gracefulswitch/index.js"
import "@goscript/google.golang.org/grpc/internal/binarylog/index.js"
import "@goscript/google.golang.org/grpc/internal/channelz/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"
import "@goscript/google.golang.org/grpc/internal/idle/index.js"
import "@goscript/google.golang.org/grpc/internal/resolver/index.js"
import "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"
import "@goscript/google.golang.org/grpc/internal/stats/index.js"
import "@goscript/google.golang.org/grpc/internal/transport/index.js"
import "@goscript/google.golang.org/grpc/keepalive/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/serviceconfig/index.js"
import "@goscript/google.golang.org/grpc/stats/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "./balancer_wrapper.gs.ts"
import "./call.gs.ts"
import "./clientconn.gs.ts"
import "./codec.gs.ts"
import "./dialoptions.gs.ts"
import "./picker_wrapper.gs.ts"
import "./resolver_wrapper.gs.ts"
import "./rpc_util.gs.ts"
import "./service_config.gs.ts"
import "./stream.gs.ts"
import "./trace.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc", ["grpc.UnaryInvoker", "grpc.UnaryClientInterceptor", "grpc.Streamer", "grpc.StreamClientInterceptor", "grpc.UnaryServerInfo", "grpc.UnaryHandler", "grpc.UnaryServerInterceptor", "grpc.StreamServerInfo", "grpc.StreamServerInterceptor"])

export type UnaryInvoker = ((ctx: context.Context | null, method: string, req: any, reply: any, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => $.GoError | globalThis.Promise<$.GoError>) | null

export type UnaryClientInterceptor = ((ctx: context.Context | null, method: string, req: any, reply: any, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, invoker: ((ctx: context.Context | null, method: string, req: any, reply: any, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => $.GoError | globalThis.Promise<$.GoError>) | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => $.GoError | globalThis.Promise<$.GoError>) | null

export type Streamer = ((ctx: context.Context | null, desc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, method: string, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => [__goscript_stream.ClientStream | null, $.GoError] | globalThis.Promise<[__goscript_stream.ClientStream | null, $.GoError]>) | null

export type StreamClientInterceptor = ((ctx: context.Context | null, desc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, method: string, streamer: ((ctx: context.Context | null, desc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, method: string, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => [__goscript_stream.ClientStream | null, $.GoError] | globalThis.Promise<[__goscript_stream.ClientStream | null, $.GoError]>) | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => [__goscript_stream.ClientStream | null, $.GoError] | globalThis.Promise<[__goscript_stream.ClientStream | null, $.GoError]>) | null

export type UnaryHandler = ((ctx: context.Context | null, req: any) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null

export type UnaryServerInterceptor = ((ctx: context.Context | null, req: any, info: UnaryServerInfo | $.VarRef<UnaryServerInfo> | null, handler: ((ctx: context.Context | null, req: any) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null

export type StreamServerInterceptor = ((srv: any, ss: __goscript_stream.ServerStream | null, info: StreamServerInfo | $.VarRef<StreamServerInfo> | null, handler: ((srv: any, stream: __goscript_stream.ServerStream | null) => $.GoError | globalThis.Promise<$.GoError>) | null) => $.GoError | globalThis.Promise<$.GoError>) | null

export class UnaryServerInfo {
	// Server is the service implementation the user provides. This is read-only.
	public get Server(): any {
		return this._fields.Server
	}

	public set Server(value: any) {
		this._fields.Server = value
	}

	// FullMethod is the full RPC method string, i.e., /package.service/method.
	public get FullMethod(): string {
		return this._fields.FullMethod
	}

	public set FullMethod(value: string) {
		this._fields.FullMethod = value
	}

	public _fields: {
		Server: any
		FullMethod: string
	}

	constructor(init?: Partial<{Server?: any, FullMethod?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Server: init?.Server ?? (null! as any),
			FullMethod: init?.FullMethod ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UnaryServerInfo {
		return new UnaryServerInfo(this, true)
	}

	public __goscriptAssign(source: UnaryServerInfo): void {
		const target = this._fields
		const values = source._fields
		target.Server = $.assignFieldValue(target.Server, values.Server, { kind: $.TypeKind.Interface, methods: [] })
		target.FullMethod = values.FullMethod
	}

	static __typeInfo = $.registerStructType(
		"grpc.UnaryServerInfo",
		() => new UnaryServerInfo(),
		() => [],
		UnaryServerInfo,
		() => [/* @__PURE__ */ $.structField("Server", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, true), /* @__PURE__ */ $.structField("FullMethod", /* @__PURE__ */ $.basicType("string"), [1], 16, true)]
	)
}

export class StreamServerInfo {
	// FullMethod is the full RPC method string, i.e., /package.service/method.
	public get FullMethod(): string {
		return this._fields.FullMethod
	}

	public set FullMethod(value: string) {
		this._fields.FullMethod = value
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
		FullMethod: string
		IsClientStream: boolean
		IsServerStream: boolean
	}

	constructor(init?: Partial<{FullMethod?: string, IsClientStream?: boolean, IsServerStream?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			FullMethod: init?.FullMethod ?? ("" as string),
			IsClientStream: init?.IsClientStream ?? (false as boolean),
			IsServerStream: init?.IsServerStream ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StreamServerInfo {
		return new StreamServerInfo(this, true)
	}

	public __goscriptAssign(source: StreamServerInfo): void {
		const target = this._fields
		const values = source._fields
		target.FullMethod = values.FullMethod
		target.IsClientStream = values.IsClientStream
		target.IsServerStream = values.IsServerStream
	}

	static __typeInfo = $.registerStructType(
		"grpc.StreamServerInfo",
		() => new StreamServerInfo(),
		() => [],
		StreamServerInfo,
		() => [/* @__PURE__ */ $.structField("FullMethod", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("IsClientStream", /* @__PURE__ */ $.basicType("bool"), [1], 16, true), /* @__PURE__ */ $.structField("IsServerStream", /* @__PURE__ */ $.basicType("bool"), [2], 17, true)]
	)
}
