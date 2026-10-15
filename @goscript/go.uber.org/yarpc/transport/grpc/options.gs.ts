// Generated file based on options.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as math from "@goscript/math/index.js"

import * as net from "@goscript/net/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as metrics from "@goscript/go.uber.org/net/metrics/index.js"

import * as backoff from "@goscript/go.uber.org/yarpc/api/backoff/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as yarpctls from "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"

import * as intbackoff from "@goscript/go.uber.org/yarpc/internal/backoff/index.js"

import * as inboundmiddleware from "@goscript/go.uber.org/yarpc/internal/inboundmiddleware/index.js"

import * as interceptor from "@goscript/go.uber.org/yarpc/internal/interceptor/index.js"

import * as tracinginterceptor from "@goscript/go.uber.org/yarpc/internal/tracinginterceptor/index.js"

import * as dialer from "@goscript/go.uber.org/yarpc/transport/internal/tls/dialer/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as grpc from "@goscript/google.golang.org/grpc/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as insecure from "@goscript/google.golang.org/grpc/credentials/insecure/index.js"

import * as keepalive from "@goscript/google.golang.org/grpc/keepalive/index.js"

import * as peer from "@goscript/go.uber.org/yarpc/api/peer/index.js"

import * as abstractpeer from "@goscript/go.uber.org/yarpc/peer/abstractpeer/index.js"

import * as sync from "@goscript/sync/index.js"

import type * as time from "@goscript/time/index.js"

import * as __goscript_constants from "./constants.gs.ts"

import * as __goscript_dialer from "./dialer.gs.ts"

import type * as __goscript_inbound from "./inbound.gs.ts"

import type * as __goscript_outbound from "./outbound.gs.ts"

import * as __goscript_peer from "./peer.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/context/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/math/index.js"
import "@goscript/net/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/go.uber.org/net/metrics/index.js"
import "@goscript/go.uber.org/yarpc/api/backoff/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"
import "@goscript/go.uber.org/yarpc/internal/backoff/index.js"
import "@goscript/go.uber.org/yarpc/internal/inboundmiddleware/index.js"
import "@goscript/go.uber.org/yarpc/internal/interceptor/index.js"
import "@goscript/go.uber.org/yarpc/internal/tracinginterceptor/index.js"
import "@goscript/go.uber.org/yarpc/transport/internal/tls/dialer/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/google.golang.org/grpc/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/credentials/insecure/index.js"
import "@goscript/google.golang.org/grpc/keepalive/index.js"
import "@goscript/go.uber.org/yarpc/api/peer/index.js"
import "@goscript/go.uber.org/yarpc/peer/abstractpeer/index.js"
import "@goscript/sync/index.js"
import "./constants.gs.ts"
import "./dialer.gs.ts"
import "./peer.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/transport/grpc", ["grpc.Option", "grpc.TransportOption", "grpc.InboundOption", "grpc.OutboundOption", "grpc.DialOption", "grpc.transportOptions", "grpc.inboundOptions", "grpc.outboundOptions", "grpc.dialOptions"])

export type Option = {
	grpcOption(): void
}

$.registerInterfaceType(
	"grpc.Option",
	null,
	[{ name: "grpcOption", args: [], returns: [] }]
);

export type TransportOption = ((_p0: transportOptions | $.VarRef<transportOptions> | null) => void) | null

$.registerNamedValueType(
	"grpc.TransportOption",
	{grpcOption: (receiver: any, ...args: any[]) => (TransportOption_grpcOption as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("grpcOption")]
);

$.registerNamedValueType(
	"*grpc.TransportOption",
	{grpcOption: (receiver: any, ...args: any[]) => (TransportOption_grpcOption as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("grpcOption")]
);

export type InboundOption = ((_p0: inboundOptions | $.VarRef<inboundOptions> | null) => void) | null

$.registerNamedValueType(
	"grpc.InboundOption",
	{grpcOption: (receiver: any, ...args: any[]) => (InboundOption_grpcOption as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("grpcOption")]
);

$.registerNamedValueType(
	"*grpc.InboundOption",
	{grpcOption: (receiver: any, ...args: any[]) => (InboundOption_grpcOption as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("grpcOption")]
);

export type OutboundOption = ((_p0: outboundOptions | $.VarRef<outboundOptions> | null) => void) | null

$.registerNamedValueType(
	"grpc.OutboundOption",
	{grpcOption: (receiver: any, ...args: any[]) => (OutboundOption_grpcOption as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("grpcOption")]
);

$.registerNamedValueType(
	"*grpc.OutboundOption",
	{grpcOption: (receiver: any, ...args: any[]) => (OutboundOption_grpcOption as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("grpcOption")]
);

export type DialOption = ((_p0: dialOptions | $.VarRef<dialOptions> | null) => void) | null

$.registerNamedValueType(
	"grpc.DialOption",
	{grpcOption: (receiver: any, ...args: any[]) => (DialOption_grpcOption as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("grpcOption")]
);

$.registerNamedValueType(
	"*grpc.DialOption",
	{grpcOption: (receiver: any, ...args: any[]) => (DialOption_grpcOption as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("grpcOption")]
);

export class transportOptions {
	public get backoffStrategy(): backoff.Strategy | null {
		return this._fields.backoffStrategy
	}

	public set backoffStrategy(value: backoff.Strategy | null) {
		this._fields.backoffStrategy = value
	}

	public get tracer(): opentracing.Tracer | null {
		return this._fields.tracer
	}

	public set tracer(value: opentracing.Tracer | null) {
		this._fields.tracer = value
	}

	public get tracingInterceptorEnabled(): boolean {
		return this._fields.tracingInterceptorEnabled
	}

	public set tracingInterceptorEnabled(value: boolean) {
		this._fields.tracingInterceptorEnabled = value
	}

	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public get meter(): metrics.Scope | $.VarRef<metrics.Scope> | null {
		return this._fields.meter
	}

	public set meter(value: metrics.Scope | $.VarRef<metrics.Scope> | null) {
		this._fields.meter = value
	}

	public get serviceName(): string {
		return this._fields.serviceName
	}

	public set serviceName(value: string) {
		this._fields.serviceName = value
	}

	public get serverMaxRecvMsgSize(): number {
		return this._fields.serverMaxRecvMsgSize
	}

	public set serverMaxRecvMsgSize(value: number) {
		this._fields.serverMaxRecvMsgSize = value
	}

	public get serverMaxSendMsgSize(): number {
		return this._fields.serverMaxSendMsgSize
	}

	public set serverMaxSendMsgSize(value: number) {
		this._fields.serverMaxSendMsgSize = value
	}

	public get clientMaxRecvMsgSize(): number {
		return this._fields.clientMaxRecvMsgSize
	}

	public set clientMaxRecvMsgSize(value: number) {
		this._fields.clientMaxRecvMsgSize = value
	}

	public get clientMaxSendMsgSize(): number {
		return this._fields.clientMaxSendMsgSize
	}

	public set clientMaxSendMsgSize(value: number) {
		this._fields.clientMaxSendMsgSize = value
	}

	public get serverMaxHeaderListSize(): $.VarRef<number> | null {
		return this._fields.serverMaxHeaderListSize
	}

	public set serverMaxHeaderListSize(value: $.VarRef<number> | null) {
		this._fields.serverMaxHeaderListSize = value
	}

	public get serverHeaderTableSize(): $.VarRef<number> | null {
		return this._fields.serverHeaderTableSize
	}

	public set serverHeaderTableSize(value: $.VarRef<number> | null) {
		this._fields.serverHeaderTableSize = value
	}

	public get clientMaxHeaderListSize(): $.VarRef<number> | null {
		return this._fields.clientMaxHeaderListSize
	}

	public set clientMaxHeaderListSize(value: $.VarRef<number> | null) {
		this._fields.clientMaxHeaderListSize = value
	}

	public get numStreamWorkers(): $.VarRef<number> | null {
		return this._fields.numStreamWorkers
	}

	public set numStreamWorkers(value: $.VarRef<number> | null) {
		this._fields.numStreamWorkers = value
	}

	public get unaryInboundInterceptor(): interceptor.UnaryInbound | null {
		return this._fields.unaryInboundInterceptor
	}

	public set unaryInboundInterceptor(value: interceptor.UnaryInbound | null) {
		this._fields.unaryInboundInterceptor = value
	}

	public get unaryOutboundInterceptor(): $.Slice<interceptor.UnaryOutbound | null> {
		return this._fields.unaryOutboundInterceptor
	}

	public set unaryOutboundInterceptor(value: $.Slice<interceptor.UnaryOutbound | null>) {
		this._fields.unaryOutboundInterceptor = value
	}

	public get streamInboundInterceptor(): interceptor.StreamInbound | null {
		return this._fields.streamInboundInterceptor
	}

	public set streamInboundInterceptor(value: interceptor.StreamInbound | null) {
		this._fields.streamInboundInterceptor = value
	}

	public get streamOutboundInterceptor(): $.Slice<interceptor.StreamOutbound | null> {
		return this._fields.streamOutboundInterceptor
	}

	public set streamOutboundInterceptor(value: $.Slice<interceptor.StreamOutbound | null>) {
		this._fields.streamOutboundInterceptor = value
	}

	public _fields: {
		backoffStrategy: backoff.Strategy | null
		tracer: opentracing.Tracer | null
		tracingInterceptorEnabled: boolean
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		meter: metrics.Scope | $.VarRef<metrics.Scope> | null
		serviceName: string
		serverMaxRecvMsgSize: number
		serverMaxSendMsgSize: number
		clientMaxRecvMsgSize: number
		clientMaxSendMsgSize: number
		serverMaxHeaderListSize: $.VarRef<number> | null
		serverHeaderTableSize: $.VarRef<number> | null
		clientMaxHeaderListSize: $.VarRef<number> | null
		numStreamWorkers: $.VarRef<number> | null
		unaryInboundInterceptor: interceptor.UnaryInbound | null
		unaryOutboundInterceptor: $.Slice<interceptor.UnaryOutbound | null>
		streamInboundInterceptor: interceptor.StreamInbound | null
		streamOutboundInterceptor: $.Slice<interceptor.StreamOutbound | null>
	}

	constructor(init?: Partial<{backoffStrategy?: backoff.Strategy | null, tracer?: opentracing.Tracer | null, tracingInterceptorEnabled?: boolean, logger?: zap.Logger | $.VarRef<zap.Logger> | null, meter?: metrics.Scope | $.VarRef<metrics.Scope> | null, serviceName?: string, serverMaxRecvMsgSize?: number, serverMaxSendMsgSize?: number, clientMaxRecvMsgSize?: number, clientMaxSendMsgSize?: number, serverMaxHeaderListSize?: $.VarRef<number> | null, serverHeaderTableSize?: $.VarRef<number> | null, clientMaxHeaderListSize?: $.VarRef<number> | null, numStreamWorkers?: $.VarRef<number> | null, unaryInboundInterceptor?: interceptor.UnaryInbound | null, unaryOutboundInterceptor?: $.Slice<interceptor.UnaryOutbound | null>, streamInboundInterceptor?: interceptor.StreamInbound | null, streamOutboundInterceptor?: $.Slice<interceptor.StreamOutbound | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			backoffStrategy: init?.backoffStrategy ?? (null! as backoff.Strategy | null),
			tracer: init?.tracer ?? (null! as opentracing.Tracer | null),
			tracingInterceptorEnabled: init?.tracingInterceptorEnabled ?? (false as boolean),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			meter: init?.meter ?? (null! as metrics.Scope | $.VarRef<metrics.Scope> | null),
			serviceName: init?.serviceName ?? ("" as string),
			serverMaxRecvMsgSize: init?.serverMaxRecvMsgSize ?? (0 as number),
			serverMaxSendMsgSize: init?.serverMaxSendMsgSize ?? (0 as number),
			clientMaxRecvMsgSize: init?.clientMaxRecvMsgSize ?? (0 as number),
			clientMaxSendMsgSize: init?.clientMaxSendMsgSize ?? (0 as number),
			serverMaxHeaderListSize: init?.serverMaxHeaderListSize ?? (null! as $.VarRef<number> | null),
			serverHeaderTableSize: init?.serverHeaderTableSize ?? (null! as $.VarRef<number> | null),
			clientMaxHeaderListSize: init?.clientMaxHeaderListSize ?? (null! as $.VarRef<number> | null),
			numStreamWorkers: init?.numStreamWorkers ?? (null! as $.VarRef<number> | null),
			unaryInboundInterceptor: init?.unaryInboundInterceptor ?? (null! as interceptor.UnaryInbound | null),
			unaryOutboundInterceptor: init?.unaryOutboundInterceptor ?? (null! as $.Slice<interceptor.UnaryOutbound | null>),
			streamInboundInterceptor: init?.streamInboundInterceptor ?? (null! as interceptor.StreamInbound | null),
			streamOutboundInterceptor: init?.streamOutboundInterceptor ?? (null! as $.Slice<interceptor.StreamOutbound | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): transportOptions {
		return new transportOptions(this, true)
	}

	public __goscriptAssign(source: transportOptions): void {
		const target = this._fields
		const values = source._fields
		target.backoffStrategy = $.assignFieldValue(target.backoffStrategy, values.backoffStrategy, "backoff.Strategy")
		target.tracer = $.assignFieldValue(target.tracer, values.tracer, "opentracing.Tracer")
		target.tracingInterceptorEnabled = values.tracingInterceptorEnabled
		target.logger = values.logger
		target.meter = values.meter
		target.serviceName = values.serviceName
		target.serverMaxRecvMsgSize = values.serverMaxRecvMsgSize
		target.serverMaxSendMsgSize = values.serverMaxSendMsgSize
		target.clientMaxRecvMsgSize = values.clientMaxRecvMsgSize
		target.clientMaxSendMsgSize = values.clientMaxSendMsgSize
		target.serverMaxHeaderListSize = values.serverMaxHeaderListSize
		target.serverHeaderTableSize = values.serverHeaderTableSize
		target.clientMaxHeaderListSize = values.clientMaxHeaderListSize
		target.numStreamWorkers = values.numStreamWorkers
		target.unaryInboundInterceptor = $.assignFieldValue(target.unaryInboundInterceptor, values.unaryInboundInterceptor, "middleware.UnaryInbound")
		target.unaryOutboundInterceptor = values.unaryOutboundInterceptor
		target.streamInboundInterceptor = $.assignFieldValue(target.streamInboundInterceptor, values.streamInboundInterceptor, "middleware.StreamInbound")
		target.streamOutboundInterceptor = values.streamOutboundInterceptor
	}

	static __typeInfo = $.registerStructType(
		"grpc.transportOptions",
		() => new transportOptions(),
		() => [],
		transportOptions,
		() => [{ name: "backoffStrategy", key: "backoffStrategy", type: "backoff.Strategy" }, { name: "tracer", key: "tracer", type: "opentracing.Tracer" }, { name: "tracingInterceptorEnabled", key: "tracingInterceptorEnabled", type: /* @__PURE__ */ $.basicType("bool") }, { name: "logger", key: "logger", type: /* @__PURE__ */ $.pointerType("zap.Logger") }, { name: "meter", key: "meter", type: /* @__PURE__ */ $.pointerType("metrics.Scope") }, { name: "serviceName", key: "serviceName", type: /* @__PURE__ */ $.basicType("string") }, { name: "serverMaxRecvMsgSize", key: "serverMaxRecvMsgSize", type: /* @__PURE__ */ $.basicType("int") }, { name: "serverMaxSendMsgSize", key: "serverMaxSendMsgSize", type: /* @__PURE__ */ $.basicType("int") }, { name: "clientMaxRecvMsgSize", key: "clientMaxRecvMsgSize", type: /* @__PURE__ */ $.basicType("int") }, { name: "clientMaxSendMsgSize", key: "clientMaxSendMsgSize", type: /* @__PURE__ */ $.basicType("int") }, { name: "serverMaxHeaderListSize", key: "serverMaxHeaderListSize", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")) }, { name: "serverHeaderTableSize", key: "serverHeaderTableSize", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")) }, { name: "clientMaxHeaderListSize", key: "clientMaxHeaderListSize", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")) }, { name: "numStreamWorkers", key: "numStreamWorkers", type: /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")) }, { name: "unaryInboundInterceptor", key: "unaryInboundInterceptor", type: "middleware.UnaryInbound" }, { name: "unaryOutboundInterceptor", key: "unaryOutboundInterceptor", type: /* @__PURE__ */ $.sliceType("interceptor.UnaryOutbound") }, { name: "streamInboundInterceptor", key: "streamInboundInterceptor", type: "middleware.StreamInbound" }, { name: "streamOutboundInterceptor", key: "streamOutboundInterceptor", type: /* @__PURE__ */ $.sliceType("interceptor.StreamOutbound") }]
	)
}

export class inboundOptions {
	public get creds(): credentials.TransportCredentials | null {
		return this._fields.creds
	}

	public set creds(value: credentials.TransportCredentials | null) {
		this._fields.creds = value
	}

	public get tlsConfig(): tls.Config | $.VarRef<tls.Config> | null {
		return this._fields.tlsConfig
	}

	public set tlsConfig(value: tls.Config | $.VarRef<tls.Config> | null) {
		this._fields.tlsConfig = value
	}

	public get tlsMode(): yarpctls.Mode {
		return this._fields.tlsMode
	}

	public set tlsMode(value: yarpctls.Mode) {
		this._fields.tlsMode = value
	}

	public _fields: {
		creds: credentials.TransportCredentials | null
		tlsConfig: tls.Config | $.VarRef<tls.Config> | null
		tlsMode: yarpctls.Mode
	}

	constructor(init?: Partial<{creds?: credentials.TransportCredentials | null, tlsConfig?: tls.Config | $.VarRef<tls.Config> | null, tlsMode?: yarpctls.Mode}>, __goscriptValue?: boolean) {
		this._fields = {
			creds: init?.creds ?? (null! as credentials.TransportCredentials | null),
			tlsConfig: init?.tlsConfig ?? (null! as tls.Config | $.VarRef<tls.Config> | null),
			tlsMode: init?.tlsMode ?? (0 as yarpctls.Mode)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): inboundOptions {
		return new inboundOptions(this, true)
	}

	public __goscriptAssign(source: inboundOptions): void {
		const target = this._fields
		const values = source._fields
		target.creds = $.assignFieldValue(target.creds, values.creds, "credentials.TransportCredentials")
		target.tlsConfig = values.tlsConfig
		target.tlsMode = values.tlsMode
	}

	static __typeInfo = $.registerStructType(
		"grpc.inboundOptions",
		() => new inboundOptions(),
		() => [],
		inboundOptions,
		() => [{ name: "creds", key: "creds", type: "credentials.TransportCredentials" }, { name: "tlsConfig", key: "tlsConfig", type: /* @__PURE__ */ $.pointerType("tls.Config") }, { name: "tlsMode", key: "tlsMode", type: /* @__PURE__ */ $.basicType("uint16", "tls.Mode") }]
	)
}

export class outboundOptions {
	public get compressor(): string {
		return this._fields.compressor
	}

	public set compressor(value: string) {
		this._fields.compressor = value
	}

	public get tlsConfigProvider(): yarpctls.OutboundTLSConfigProvider | null {
		return this._fields.tlsConfigProvider
	}

	public set tlsConfigProvider(value: yarpctls.OutboundTLSConfigProvider | null) {
		this._fields.tlsConfigProvider = value
	}

	public _fields: {
		compressor: string
		tlsConfigProvider: yarpctls.OutboundTLSConfigProvider | null
	}

	constructor(init?: Partial<{compressor?: string, tlsConfigProvider?: yarpctls.OutboundTLSConfigProvider | null}>, __goscriptValue?: boolean) {
		this._fields = {
			compressor: init?.compressor ?? ("" as string),
			tlsConfigProvider: init?.tlsConfigProvider ?? (null! as yarpctls.OutboundTLSConfigProvider | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): outboundOptions {
		return new outboundOptions(this, true)
	}

	public __goscriptAssign(source: outboundOptions): void {
		const target = this._fields
		const values = source._fields
		target.compressor = values.compressor
		target.tlsConfigProvider = $.assignFieldValue(target.tlsConfigProvider, values.tlsConfigProvider, "tls.OutboundTLSConfigProvider")
	}

	static __typeInfo = $.registerStructType(
		"grpc.outboundOptions",
		() => new outboundOptions(),
		() => [],
		outboundOptions,
		() => [{ name: "compressor", key: "compressor", type: /* @__PURE__ */ $.basicType("string") }, { name: "tlsConfigProvider", key: "tlsConfigProvider", type: "tls.OutboundTLSConfigProvider" }]
	)
}

export class dialOptions {
	public get creds(): credentials.TransportCredentials | null {
		return this._fields.creds
	}

	public set creds(value: credentials.TransportCredentials | null) {
		this._fields.creds = value
	}

	public get contextDialer(): ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null {
		return this._fields.contextDialer
	}

	public set contextDialer(value: ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null) {
		this._fields.contextDialer = value
	}

	public get defaultCompressor(): string {
		return this._fields.defaultCompressor
	}

	public set defaultCompressor(value: string) {
		this._fields.defaultCompressor = value
	}

	public get keepaliveParams(): keepalive.ClientParameters | $.VarRef<keepalive.ClientParameters> | null {
		return this._fields.keepaliveParams
	}

	public set keepaliveParams(value: keepalive.ClientParameters | $.VarRef<keepalive.ClientParameters> | null) {
		this._fields.keepaliveParams = value
	}

	public get tlsConfig(): tls.Config | $.VarRef<tls.Config> | null {
		return this._fields.tlsConfig
	}

	public set tlsConfig(value: tls.Config | $.VarRef<tls.Config> | null) {
		this._fields.tlsConfig = value
	}

	public get destServiceName(): string {
		return this._fields.destServiceName
	}

	public set destServiceName(value: string) {
		this._fields.destServiceName = value
	}

	public _fields: {
		creds: credentials.TransportCredentials | null
		contextDialer: ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null
		defaultCompressor: string
		keepaliveParams: keepalive.ClientParameters | $.VarRef<keepalive.ClientParameters> | null
		tlsConfig: tls.Config | $.VarRef<tls.Config> | null
		destServiceName: string
	}

	constructor(init?: Partial<{creds?: credentials.TransportCredentials | null, contextDialer?: ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null, defaultCompressor?: string, keepaliveParams?: keepalive.ClientParameters | $.VarRef<keepalive.ClientParameters> | null, tlsConfig?: tls.Config | $.VarRef<tls.Config> | null, destServiceName?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			creds: init?.creds ?? (null! as credentials.TransportCredentials | null),
			contextDialer: init?.contextDialer ?? (null! as ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null),
			defaultCompressor: init?.defaultCompressor ?? ("" as string),
			keepaliveParams: init?.keepaliveParams ?? (null! as keepalive.ClientParameters | $.VarRef<keepalive.ClientParameters> | null),
			tlsConfig: init?.tlsConfig ?? (null! as tls.Config | $.VarRef<tls.Config> | null),
			destServiceName: init?.destServiceName ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dialOptions {
		return new dialOptions(this, true)
	}

	public __goscriptAssign(source: dialOptions): void {
		const target = this._fields
		const values = source._fields
		target.creds = $.assignFieldValue(target.creds, values.creds, "credentials.TransportCredentials")
		target.contextDialer = values.contextDialer
		target.defaultCompressor = values.defaultCompressor
		target.keepaliveParams = values.keepaliveParams
		target.tlsConfig = values.tlsConfig
		target.destServiceName = values.destServiceName
	}

	public async grpcOptions(t: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null): globalThis.Promise<$.Slice<grpc.DialOption | null>> {
		const d: dialOptions | $.VarRef<dialOptions> | null = this;
		const d$: dialOptions = d == null ? $.pointerTarget<dialOptions>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<dialOptions>(d)
		const t$: __goscript_transport.Transport = t == null ? $.pointerTarget<__goscript_transport.Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<__goscript_transport.Transport>(t)
		let credsOption = await grpc.WithTransportCredentials(insecure.NewCredentials())
		if ((d$ as dialOptions).creds != null) {
			credsOption = await grpc.WithTransportCredentials((d$ as dialOptions).creds)
		}

		let opts: $.Slice<grpc.DialOption | null> = $.arrayToSlice<grpc.DialOption | null>([credsOption])

		if (!$.stringEqual((d$ as dialOptions).defaultCompressor, "")) {
			opts = $.appendOne(opts, await grpc.WithDefaultCallOptions($.arrayToSlice<grpc.CallOption | null>([grpc.UseCompressor((d$ as dialOptions).defaultCompressor)])), $.appendZeros.nil)
		}

		if ((d$ as dialOptions).keepaliveParams != null) {
			opts = $.appendOne(opts, await grpc.WithKeepaliveParams(($.pointerValue<keepalive.ClientParameters>((d$ as dialOptions).keepaliveParams)).clone()), $.appendZeros.nil)
		}

		let contextDialer: ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null = (d$ as dialOptions).contextDialer
		if ((d$ as dialOptions).tlsConfig != null) {
			let params = new dialer.Params({Config: (d$ as dialOptions).tlsConfig, Meter: $.pointerValue<transportOptions>((t$ as __goscript_transport.Transport).options).meter, Logger: $.pointerValue<transportOptions>((t$ as __goscript_transport.Transport).options).logger, ServiceName: $.pointerValue<transportOptions>((t$ as __goscript_transport.Transport).options).serviceName, TransportName: "grpc", Dest: (d$ as dialOptions).destServiceName}, true)

			if ((d$ as dialOptions).contextDialer != null) {
				params.Dialer = $.functionValue(async (ctx: context.Context | null, network: string, addr: string): globalThis.Promise<[net.Conn | null, $.GoError]> => {
					return await (d$ as dialOptions).contextDialer!(ctx, addr)
				}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["net.Conn", "error"] } as $.FunctionTypeInfo))
			}
			let tlsDialer: dialer.TLSDialer | $.VarRef<dialer.TLSDialer> | null = dialer.NewTLSDialer(params)
			contextDialer = $.functionValue(async (ctx: context.Context | null, addr: string): globalThis.Promise<[net.Conn | null, $.GoError]> => {
				return await (tlsDialer !== null && (tlsDialer as any).__isVarRef !== true && (tlsDialer as any).__goValue === undefined ? ((tlsDialer as any) as dialer.TLSDialer).DialContext(ctx, "tcp", addr) : dialer.TLSDialer.prototype.DialContext.call(tlsDialer, ctx, "tcp", addr))
			}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string")], results: ["net.Conn", "error"] } as $.FunctionTypeInfo))
		}
		opts = $.appendOne(opts, await grpc.WithContextDialer(contextDialer), $.appendZeros.nil)

		return opts
	}

	static __typeInfo = $.registerStructType(
		"grpc.dialOptions",
		() => new dialOptions(),
		() => [{ name: "grpcOptions", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType("grpc.DialOption") }], pointerReceiver: true }],
		dialOptions,
		() => [{ name: "creds", key: "creds", type: "credentials.TransportCredentials" }, { name: "contextDialer", key: "contextDialer", type: ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string")], results: ["net.Conn", "error"] } as $.FunctionTypeInfo) }, { name: "defaultCompressor", key: "defaultCompressor", type: /* @__PURE__ */ $.basicType("string") }, { name: "keepaliveParams", key: "keepaliveParams", type: /* @__PURE__ */ $.pointerType("keepalive.ClientParameters") }, { name: "tlsConfig", key: "tlsConfig", type: /* @__PURE__ */ $.pointerType("tls.Config") }, { name: "destServiceName", key: "destServiceName", type: /* @__PURE__ */ $.basicType("string") }]
	)
}

export const defaultServerMaxSendMsgSize: number = 2147483647

export const defaultClientMaxSendMsgSize: number = 2147483647

export const defaultServerMaxRecvMsgSize: number = 67108864

export const defaultClientMaxRecvMsgSize: number = 67108864

let __goscriptBlank0: Option | null = $.namedValueInterfaceValue<Option | null>($.namedFunction(null, "grpc.TransportOption", ({ kind: $.TypeKind.Function, name: "grpc.TransportOption", params: [/* @__PURE__ */ $.pointerType("grpc.transportOptions")], results: [] } as $.FunctionTypeInfo)), "grpc.TransportOption", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())

let __goscriptBlank1: Option | null = $.namedValueInterfaceValue<Option | null>($.namedFunction(null, "grpc.InboundOption", ({ kind: $.TypeKind.Function, name: "grpc.InboundOption", params: [/* @__PURE__ */ $.pointerType("grpc.inboundOptions")], results: [] } as $.FunctionTypeInfo)), "grpc.InboundOption", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())

let __goscriptBlank2: Option | null = $.namedValueInterfaceValue<Option | null>($.namedFunction(null, "grpc.OutboundOption", ({ kind: $.TypeKind.Function, name: "grpc.OutboundOption", params: [/* @__PURE__ */ $.pointerType("grpc.outboundOptions")], results: [] } as $.FunctionTypeInfo)), "grpc.OutboundOption", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic2())

let __goscriptBlank3: Option | null = $.namedValueInterfaceValue<Option | null>($.namedFunction(null, "grpc.DialOption", ({ kind: $.TypeKind.Function, name: "grpc.DialOption", params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo)), "grpc.DialOption", __goscriptStatic7(), __goscriptStatic8(), __goscriptStatic2())

export function TransportOption_grpcOption(recv: TransportOption | null): void {
}

export function ServiceName(name: string): TransportOption | null {
	return $.functionValue((transportOptions: transportOptions | $.VarRef<transportOptions> | null): void => {
		$.pointerValue<transportOptions>(transportOptions).serviceName = name
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.transportOptions")], results: [] } as $.FunctionTypeInfo))
}

export function BackoffStrategy(backoffStrategy: backoff.Strategy | null): TransportOption | null {
	return $.functionValue((transportOptions: transportOptions | $.VarRef<transportOptions> | null): void => {
		$.pointerValue<transportOptions>(transportOptions).backoffStrategy = backoffStrategy
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.transportOptions")], results: [] } as $.FunctionTypeInfo))
}

export function Tracer(tracer: opentracing.Tracer | null): TransportOption | null {
	return $.functionValue((transportOptions: transportOptions | $.VarRef<transportOptions> | null): void => {
		$.pointerValue<transportOptions>(transportOptions).tracer = tracer
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.transportOptions")], results: [] } as $.FunctionTypeInfo))
}

export function TracingInterceptorEnabled(enabled: boolean): TransportOption | null {
	return $.functionValue((transportOptions: transportOptions | $.VarRef<transportOptions> | null): void => {
		$.pointerValue<transportOptions>(transportOptions).tracingInterceptorEnabled = enabled
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.transportOptions")], results: [] } as $.FunctionTypeInfo))
}

export function Logger(logger: zap.Logger | $.VarRef<zap.Logger> | null): TransportOption | null {
	return $.functionValue((transportOptions: transportOptions | $.VarRef<transportOptions> | null): void => {
		$.pointerValue<transportOptions>(transportOptions).logger = logger
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.transportOptions")], results: [] } as $.FunctionTypeInfo))
}

export function Meter(meter: metrics.Scope | $.VarRef<metrics.Scope> | null): TransportOption | null {
	return $.functionValue((transportOptions: transportOptions | $.VarRef<transportOptions> | null): void => {
		$.pointerValue<transportOptions>(transportOptions).meter = meter
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.transportOptions")], results: [] } as $.FunctionTypeInfo))
}

export function ServerMaxRecvMsgSize(serverMaxRecvMsgSize: number): TransportOption | null {
	return $.functionValue((transportOptions: transportOptions | $.VarRef<transportOptions> | null): void => {
		$.pointerValue<transportOptions>(transportOptions).serverMaxRecvMsgSize = serverMaxRecvMsgSize
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.transportOptions")], results: [] } as $.FunctionTypeInfo))
}

export function ServerMaxSendMsgSize(serverMaxSendMsgSize: number): TransportOption | null {
	return $.functionValue((transportOptions: transportOptions | $.VarRef<transportOptions> | null): void => {
		$.pointerValue<transportOptions>(transportOptions).serverMaxSendMsgSize = serverMaxSendMsgSize
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.transportOptions")], results: [] } as $.FunctionTypeInfo))
}

export function NumStreamWorkers(__goscriptParam0: number): TransportOption | null {
	let n: $.VarRef<number> = $.varRef(__goscriptParam0)
	return $.functionValue((transportOptions: transportOptions | $.VarRef<transportOptions> | null): void => {
		$.pointerValue<transportOptions>(transportOptions).numStreamWorkers = n
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.transportOptions")], results: [] } as $.FunctionTypeInfo))
}

export function ServerMaxHeaderListSize(__goscriptParam1: number): TransportOption | null {
	let serverMaxHeaderListSize: $.VarRef<number> = $.varRef(__goscriptParam1)
	return $.functionValue((transportOptions: transportOptions | $.VarRef<transportOptions> | null): void => {
		$.pointerValue<transportOptions>(transportOptions).serverMaxHeaderListSize = serverMaxHeaderListSize
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.transportOptions")], results: [] } as $.FunctionTypeInfo))
}

export function ServerHeaderTableSize(__goscriptParam2: number): TransportOption | null {
	let serverHeaderTableSize: $.VarRef<number> = $.varRef(__goscriptParam2)
	return $.functionValue((transportOptions: transportOptions | $.VarRef<transportOptions> | null): void => {
		$.pointerValue<transportOptions>(transportOptions).serverHeaderTableSize = serverHeaderTableSize
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.transportOptions")], results: [] } as $.FunctionTypeInfo))
}

export function ClientMaxRecvMsgSize(clientMaxRecvMsgSize: number): TransportOption | null {
	return $.functionValue((transportOptions: transportOptions | $.VarRef<transportOptions> | null): void => {
		$.pointerValue<transportOptions>(transportOptions).clientMaxRecvMsgSize = clientMaxRecvMsgSize
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.transportOptions")], results: [] } as $.FunctionTypeInfo))
}

export function ClientMaxSendMsgSize(clientMaxSendMsgSize: number): TransportOption | null {
	return $.functionValue((transportOptions: transportOptions | $.VarRef<transportOptions> | null): void => {
		$.pointerValue<transportOptions>(transportOptions).clientMaxSendMsgSize = clientMaxSendMsgSize
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.transportOptions")], results: [] } as $.FunctionTypeInfo))
}

export function ClientMaxHeaderListSize(__goscriptParam3: number): TransportOption | null {
	let clientMaxHeaderListSize: $.VarRef<number> = $.varRef(__goscriptParam3)
	return $.functionValue((transportOptions: transportOptions | $.VarRef<transportOptions> | null): void => {
		$.pointerValue<transportOptions>(transportOptions).clientMaxHeaderListSize = clientMaxHeaderListSize
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.transportOptions")], results: [] } as $.FunctionTypeInfo))
}

export function InboundOption_grpcOption(recv: InboundOption | null): void {
}

export function InboundCredentials(creds: credentials.TransportCredentials | null): InboundOption | null {
	return $.functionValue((inboundOptions: inboundOptions | $.VarRef<inboundOptions> | null): void => {
		$.pointerValue<inboundOptions>(inboundOptions).creds = creds
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.inboundOptions")], results: [] } as $.FunctionTypeInfo))
}

export function InboundTLSConfiguration(config: tls.Config | $.VarRef<tls.Config> | null): InboundOption | null {
	return $.functionValue((inboundOptions: inboundOptions | $.VarRef<inboundOptions> | null): void => {
		$.pointerValue<inboundOptions>(inboundOptions).tlsConfig = config
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.inboundOptions")], results: [] } as $.FunctionTypeInfo))
}

export function InboundTLSMode(mode: yarpctls.Mode): InboundOption | null {
	return $.functionValue((inboundOptions: inboundOptions | $.VarRef<inboundOptions> | null): void => {
		$.pointerValue<inboundOptions>(inboundOptions).tlsMode = mode
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.inboundOptions")], results: [] } as $.FunctionTypeInfo))
}

export function OutboundOption_grpcOption(recv: OutboundOption | null): void {
}

export function OutboundTLSConfigProvider(provider: yarpctls.OutboundTLSConfigProvider | null): OutboundOption | null {
	return $.functionValue((outboundOptions: outboundOptions | $.VarRef<outboundOptions> | null): void => {
		$.pointerValue<outboundOptions>(outboundOptions).tlsConfigProvider = provider
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.outboundOptions")], results: [] } as $.FunctionTypeInfo))
}

export function OutboundCompressor(compressor: transport.Compressor | null): OutboundOption | null {
	return $.functionValue(async (outboundOptions: outboundOptions | $.VarRef<outboundOptions> | null): globalThis.Promise<void> => {
		if (compressor != null) {
			$.pointerValue<outboundOptions>(outboundOptions).compressor = (__goscriptAwait = (compressor !== null && (compressor as any).__isVarRef !== true && (compressor as any).__goValue === undefined ? (compressor as Exclude<transport.Compressor, null>) : $.pointerValue<Exclude<transport.Compressor, null>>(compressor)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.outboundOptions")], results: [] } as $.FunctionTypeInfo))
}

export function DialOption_grpcOption(recv: DialOption | null): void {
}

export function DialerCredentials(creds: credentials.TransportCredentials | null): DialOption | null {
	return $.functionValue((dialOptions: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(dialOptions).creds = creds
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))
}

export function DialerTLSConfig(config: tls.Config | $.VarRef<tls.Config> | null): DialOption | null {
	return $.functionValue((dialOptions: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(dialOptions).tlsConfig = config
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))
}

export function DialerDestinationServiceName(service: string): DialOption | null {
	return $.functionValue((dialOptions: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(dialOptions).destServiceName = service
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))
}

export function ContextDialer(f: ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null): DialOption | null {
	return $.functionValue((dialOptions: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(dialOptions).contextDialer = f
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))
}

export function Compressor(compressor: transport.Compressor | null): DialOption | null {
	return $.functionValue(async (dialOptions: dialOptions | $.VarRef<dialOptions> | null): globalThis.Promise<void> => {
		if (compressor != null) {
			// We assume that the grpc-go compressor was also globally
			// registered and just use the name.
			// Future implementations may elect to actually use the compressor.
			$.pointerValue<dialOptions>(dialOptions).defaultCompressor = (__goscriptAwait = (compressor !== null && (compressor as any).__isVarRef !== true && (compressor as any).__goValue === undefined ? (compressor as Exclude<transport.Compressor, null>) : $.pointerValue<Exclude<transport.Compressor, null>>(compressor)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))
}

export function KeepaliveParams(__goscriptParam4: keepalive.ClientParameters): DialOption | null {
	let params: $.VarRef<keepalive.ClientParameters> = $.varRef(__goscriptParam4)
	return $.functionValue((dialOptions: dialOptions | $.VarRef<dialOptions> | null): void => {
		$.pointerValue<dialOptions>(dialOptions).keepaliveParams = params
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))
}

export async function newTransportOptions(options: $.Slice<TransportOption | null>): globalThis.Promise<transportOptions | $.VarRef<transportOptions> | null> {
	let __goscriptShadow0: transportOptions | $.VarRef<transportOptions> | null = new transportOptions({backoffStrategy: $.interfaceValue<backoff.Strategy | null>(intbackoff.DefaultExponential, "*backoff.ExponentialStrategy", /* @__PURE__ */ $.pointerType("backoff.ExponentialStrategy")), serverMaxRecvMsgSize: 67108864, serverMaxSendMsgSize: 2147483647, clientMaxRecvMsgSize: 67108864, clientMaxSendMsgSize: 2147483647})
	for (let __goscriptRangeTarget0 = options, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let option = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as TransportOption | null)
		void (__goscriptAwait = option!(__goscriptShadow0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	if ($.pointerValue<transportOptions>(__goscriptShadow0).logger == null) {
		$.pointerValue<transportOptions>(__goscriptShadow0).logger = zap.NewNop()
	}
	if ($.pointerValue<transportOptions>(__goscriptShadow0).tracer == null) {
		$.pointerValue<transportOptions>(__goscriptShadow0).tracer = opentracing.GlobalTracer()
	}
	let unaryInbounds: $.Slice<interceptor.UnaryInbound | null> = null! as $.Slice<interceptor.UnaryInbound | null>
	let streamInbounds: $.Slice<interceptor.StreamInbound | null> = null! as $.Slice<interceptor.StreamInbound | null>
	if ($.pointerValue<transportOptions>(__goscriptShadow0).tracingInterceptorEnabled) {
		let ti: tracinginterceptor.Interceptor | $.VarRef<tracinginterceptor.Interceptor> | null = tracinginterceptor.New(new tracinginterceptor.Params({Tracer: $.pointerValue<transportOptions>(__goscriptShadow0).tracer, Transport: "grpc"}, true))
		unaryInbounds = $.appendOne(unaryInbounds, $.interfaceValue<interceptor.UnaryInbound | null>(ti, "*tracinginterceptor.Interceptor", /* @__PURE__ */ $.pointerType("tracinginterceptor.Interceptor")), $.appendZeros.nil)
		streamInbounds = $.appendOne(streamInbounds, $.interfaceValue<interceptor.StreamInbound | null>(ti, "*tracinginterceptor.Interceptor", /* @__PURE__ */ $.pointerType("tracinginterceptor.Interceptor")), $.appendZeros.nil)
		$.pointerValue<transportOptions>(__goscriptShadow0).unaryOutboundInterceptor = $.arrayToSlice<interceptor.UnaryOutbound | null>([$.interfaceValue<interceptor.UnaryOutbound | null>(ti, "*tracinginterceptor.Interceptor", /* @__PURE__ */ $.pointerType("tracinginterceptor.Interceptor"))])
		$.pointerValue<transportOptions>(__goscriptShadow0).streamOutboundInterceptor = $.arrayToSlice<interceptor.StreamOutbound | null>([$.interfaceValue<interceptor.StreamOutbound | null>(ti, "*tracinginterceptor.Interceptor", /* @__PURE__ */ $.pointerType("tracinginterceptor.Interceptor"))])
		$.pointerValue<transportOptions>(__goscriptShadow0).tracer = $.interfaceValue<opentracing.Tracer | null>(new opentracing.NoopTracer(undefined, true), "opentracing.NoopTracer", "opentracing.NoopTracer")
	}

	$.pointerValue<transportOptions>(__goscriptShadow0).unaryInboundInterceptor = inboundmiddleware.UnaryChain(unaryInbounds)
	$.pointerValue<transportOptions>(__goscriptShadow0).streamInboundInterceptor = inboundmiddleware.StreamChain(streamInbounds)
	return __goscriptShadow0
}

export async function newInboundOptions(options: $.Slice<InboundOption | null>): globalThis.Promise<inboundOptions | $.VarRef<inboundOptions> | null> {
	let __goscriptShadow1: inboundOptions | $.VarRef<inboundOptions> | null = new inboundOptions()
	for (let __goscriptRangeTarget1 = options, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let option = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as InboundOption | null)
		void (__goscriptAwait = option!(__goscriptShadow1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return __goscriptShadow1
}

export async function newOutboundOptions(options: $.Slice<OutboundOption | null>): globalThis.Promise<outboundOptions | $.VarRef<outboundOptions> | null> {
	let __goscriptShadow2: outboundOptions | $.VarRef<outboundOptions> | null = new outboundOptions()
	for (let __goscriptRangeTarget2 = options, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let option = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as OutboundOption | null)
		void (__goscriptAwait = option!(__goscriptShadow2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return __goscriptShadow2
}

export async function newDialOptions(options: $.Slice<DialOption | null>): globalThis.Promise<dialOptions | $.VarRef<dialOptions> | null> {
	let dopts: $.VarRef<dialOptions> = $.varRef(new dialOptions(undefined, true))
	for (let __goscriptRangeTarget3 = options, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let option = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as DialOption | null)
		void (__goscriptAwait = option!(dopts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return dopts
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({grpcOption: (receiver: any, ...args: any[]) => (TransportOption_grpcOption as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (({ kind: $.TypeKind.Function, name: "grpc.TransportOption", params: [/* @__PURE__ */ $.pointerType("grpc.transportOptions")], results: [] } as $.FunctionTypeInfo))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("grpcOption")])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({grpcOption: (receiver: any, ...args: any[]) => (InboundOption_grpcOption as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (({ kind: $.TypeKind.Function, name: "grpc.InboundOption", params: [/* @__PURE__ */ $.pointerType("grpc.inboundOptions")], results: [] } as $.FunctionTypeInfo))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({grpcOption: (receiver: any, ...args: any[]) => (OutboundOption_grpcOption as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= (({ kind: $.TypeKind.Function, name: "grpc.OutboundOption", params: [/* @__PURE__ */ $.pointerType("grpc.outboundOptions")], results: [] } as $.FunctionTypeInfo))
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ({grpcOption: (receiver: any, ...args: any[]) => (DialOption_grpcOption as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= (({ kind: $.TypeKind.Function, name: "grpc.DialOption", params: [/* @__PURE__ */ $.pointerType("grpc.dialOptions")], results: [] } as $.FunctionTypeInfo))
}

var __goscriptAwait: any
