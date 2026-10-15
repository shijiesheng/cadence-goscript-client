// Generated file based on clientconn.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as url from "@goscript/net/url/index.js"

import * as slices from "@goscript/slices/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as balancer from "@goscript/google.golang.org/grpc/balancer/index.js"

import * as base from "@goscript/google.golang.org/grpc/balancer/base/index.js"

import * as pickfirst from "@goscript/google.golang.org/grpc/balancer/pickfirst/index.js"

import * as codes from "@goscript/google.golang.org/grpc/codes/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/index.js"

import * as channelz2 from "@goscript/google.golang.org/grpc/internal/channelz/index.js"

import * as grpcsync from "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"

import * as idle from "@goscript/google.golang.org/grpc/internal/idle/index.js"

import * as iresolver from "@goscript/google.golang.org/grpc/internal/resolver/index.js"

import * as stats from "@goscript/google.golang.org/grpc/internal/stats/index.js"

import * as transport2 from "@goscript/google.golang.org/grpc/internal/transport/index.js"

import * as keepalive from "@goscript/google.golang.org/grpc/keepalive/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as serviceconfig from "@goscript/google.golang.org/grpc/serviceconfig/index.js"

import * as status from "@goscript/google.golang.org/grpc/status/index.js"

import "@goscript/google.golang.org/grpc/balancer/roundrobin/index.js"

import "@goscript/google.golang.org/grpc/internal/resolver/passthrough/index.js"

import "@goscript/google.golang.org/grpc/internal/resolver/unix/index.js"

import "@goscript/google.golang.org/grpc/resolver/dns/index.js"

import * as io from "@goscript/io/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as encoding from "@goscript/google.golang.org/grpc/encoding/index.js"

import * as balancerload from "@goscript/google.golang.org/grpc/internal/balancerload/index.js"

import * as binarylog from "@goscript/google.golang.org/grpc/internal/binarylog/index.js"

import * as grpcutil from "@goscript/google.golang.org/grpc/internal/grpcutil/index.js"

import * as imetadata from "@goscript/google.golang.org/grpc/internal/metadata/index.js"

import * as serviceconfig2 from "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"

import * as istatus from "@goscript/google.golang.org/grpc/internal/status/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as peer from "@goscript/google.golang.org/grpc/peer/index.js"

import * as stats2 from "@goscript/google.golang.org/grpc/stats/index.js"

import * as attributes from "@goscript/google.golang.org/grpc/attributes/index.js"

import * as channelz3 from "@goscript/google.golang.org/grpc/channelz/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal2 from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as backoff from "@goscript/google.golang.org/grpc/internal/backoff/index.js"

import * as gracefulswitch from "@goscript/google.golang.org/grpc/internal/balancer/gracefulswitch/index.js"

import * as net from "@goscript/net/index.js"

import * as __goscript_balancer_wrapper from "./balancer_wrapper.gs.ts"

import * as __goscript_call from "./call.gs.ts"

import * as __goscript_codec from "./codec.gs.ts"

import * as __goscript_dialoptions from "./dialoptions.gs.ts"

import * as __goscript_interceptor from "./interceptor.gs.ts"

import * as __goscript_picker_wrapper from "./picker_wrapper.gs.ts"

import * as __goscript_resolver_wrapper from "./resolver_wrapper.gs.ts"

import * as __goscript_rpc_util from "./rpc_util.gs.ts"

import * as __goscript_server from "./server.gs.ts"

import * as __goscript_service_config from "./service_config.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"

import * as __goscript_trace from "./trace.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/net/url/index.js"
import "@goscript/slices/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/grpc/balancer/index.js"
import "@goscript/google.golang.org/grpc/balancer/base/index.js"
import "@goscript/google.golang.org/grpc/balancer/pickfirst/index.js"
import "@goscript/google.golang.org/grpc/codes/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/channelz/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"
import "@goscript/google.golang.org/grpc/internal/idle/index.js"
import "@goscript/google.golang.org/grpc/internal/resolver/index.js"
import "@goscript/google.golang.org/grpc/internal/stats/index.js"
import "@goscript/google.golang.org/grpc/internal/transport/index.js"
import "@goscript/google.golang.org/grpc/keepalive/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/serviceconfig/index.js"
import "@goscript/google.golang.org/grpc/status/index.js"
import "@goscript/io/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/strconv/index.js"
import "@goscript/google.golang.org/grpc/encoding/index.js"
import "@goscript/google.golang.org/grpc/internal/balancerload/index.js"
import "@goscript/google.golang.org/grpc/internal/binarylog/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcutil/index.js"
import "@goscript/google.golang.org/grpc/internal/metadata/index.js"
import "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"
import "@goscript/google.golang.org/grpc/internal/status/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"
import "@goscript/google.golang.org/grpc/peer/index.js"
import "@goscript/google.golang.org/grpc/stats/index.js"
import "@goscript/google.golang.org/grpc/attributes/index.js"
import "@goscript/google.golang.org/grpc/channelz/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/backoff/index.js"
import "@goscript/google.golang.org/grpc/internal/balancer/gracefulswitch/index.js"
import "@goscript/net/index.js"
import "./balancer_wrapper.gs.ts"
import "./call.gs.ts"
import "./codec.gs.ts"
import "./dialoptions.gs.ts"
import "./interceptor.gs.ts"
import "./picker_wrapper.gs.ts"
import "./resolver_wrapper.gs.ts"
import "./rpc_util.gs.ts"
import "./server.gs.ts"
import "./service_config.gs.ts"
import "./stream.gs.ts"
import "./trace.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc", ["grpc.defaultConfigSelector", "grpc.idler", "grpc.connectivityStateManager", "grpc.ClientConnInterface", "grpc.ClientConn", "grpc.addrConn", "grpc.retryThrottler"])

export type ClientConnInterface = {
	Invoke(ctx: context.Context | null, method: string, args: any, reply: any, opts: $.Slice<__goscript_rpc_util.CallOption | null>): $.GoError | globalThis.Promise<$.GoError>
	NewStream(ctx: context.Context | null, desc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, method: string, opts: $.Slice<__goscript_rpc_util.CallOption | null>): [__goscript_stream.ClientStream | null, $.GoError] | globalThis.Promise<[__goscript_stream.ClientStream | null, $.GoError]>
}

$.registerInterfaceType(
	"grpc.ClientConnInterface",
	null,
	[$.methodSignature("Invoke", [["ctx", "context.Context"], ["method", /* @__PURE__ */ $.basicType("string")], ["args", { kind: $.TypeKind.Interface, methods: [] }], ["reply", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType("grpc.CallOption")]], ["error"]), $.methodSignature("NewStream", [["ctx", "context.Context"], ["desc", /* @__PURE__ */ $.pointerType("grpc.StreamDesc")], ["method", /* @__PURE__ */ $.basicType("string")], ["opts", /* @__PURE__ */ $.sliceType("grpc.CallOption")]], ["grpc.ClientStream", "error"])]
);

export class defaultConfigSelector {
	public get sc(): __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null {
		return this._fields.sc
	}

	public set sc(value: __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null) {
		this._fields.sc = value
	}

	public _fields: {
		sc: __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null
	}

	constructor(init?: Partial<{sc?: __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			sc: init?.sc ?? (null! as __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): defaultConfigSelector {
		return new defaultConfigSelector(this, true)
	}

	public __goscriptAssign(source: defaultConfigSelector): void {
		const target = this._fields
		const values = source._fields
		target.sc = values.sc
	}

	public SelectConfig(rpcInfo: iresolver.RPCInfo): [iresolver.RPCConfig | $.VarRef<iresolver.RPCConfig> | null, $.GoError] {
		const dcs: defaultConfigSelector | $.VarRef<defaultConfigSelector> | null = this;
		return [(() => { const __goscriptLiteralField0 = getMethodConfig($.pointerValue<defaultConfigSelector>(dcs).sc, rpcInfo.Method); return new iresolver.RPCConfig({Context: rpcInfo.Context, MethodConfig: __goscriptLiteralField0}) })(), null]
	}

	static __typeInfo = $.registerStructType(
		"grpc.defaultConfigSelector",
		() => new defaultConfigSelector(),
		() => [$.methodSignature("SelectConfig", [["rpcInfo", "resolver.RPCInfo"]], [/* @__PURE__ */ $.pointerType("resolver.RPCConfig"), "error"], true)],
		defaultConfigSelector,
		() => [/* @__PURE__ */ $.structField("sc", /* @__PURE__ */ $.pointerType("grpc.ServiceConfig"), [0], 0, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class idler {
	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get cancel(): (() => void) | null {
		return this._fields.cancel
	}

	public set cancel(value: (() => void) | null) {
		this._fields.cancel = value
	}

	public get target(): string {
		return this._fields.target
	}

	public set target(value: string) {
		this._fields.target = value
	}

	public get parsedTarget(): resolver.Target {
		return this._fields.parsedTarget
	}

	public set parsedTarget(value: resolver.Target) {
		this._fields.parsedTarget = value
	}

	public get authority(): string {
		return this._fields.authority
	}

	public set authority(value: string) {
		this._fields.authority = value
	}

	public get dopts(): __goscript_dialoptions.dialOptions {
		return this._fields.dopts
	}

	public set dopts(value: __goscript_dialoptions.dialOptions) {
		this._fields.dopts = value
	}

	public get channelz(): channelz2.Channel | $.VarRef<channelz2.Channel> | null {
		return this._fields.channelz
	}

	public set channelz(value: channelz2.Channel | $.VarRef<channelz2.Channel> | null) {
		this._fields.channelz = value
	}

	public get resolverBuilder(): resolver.Builder | null {
		return this._fields.resolverBuilder
	}

	public set resolverBuilder(value: resolver.Builder | null) {
		this._fields.resolverBuilder = value
	}

	public get idlenessMgr(): idle.Manager | $.VarRef<idle.Manager> | null {
		return this._fields.idlenessMgr
	}

	public set idlenessMgr(value: idle.Manager | $.VarRef<idle.Manager> | null) {
		this._fields.idlenessMgr = value
	}

	public get metricsRecorderList(): stats.MetricsRecorderList | $.VarRef<stats.MetricsRecorderList> | null {
		return this._fields.metricsRecorderList
	}

	public set metricsRecorderList(value: stats.MetricsRecorderList | $.VarRef<stats.MetricsRecorderList> | null) {
		this._fields.metricsRecorderList = value
	}

	public get csMgr(): connectivityStateManager | $.VarRef<connectivityStateManager> | null {
		return this._fields.csMgr
	}

	public set csMgr(value: connectivityStateManager | $.VarRef<connectivityStateManager> | null) {
		this._fields.csMgr = value
	}

	public get pickerWrapper(): __goscript_picker_wrapper.pickerWrapper | $.VarRef<__goscript_picker_wrapper.pickerWrapper> | null {
		return this._fields.pickerWrapper
	}

	public set pickerWrapper(value: __goscript_picker_wrapper.pickerWrapper | $.VarRef<__goscript_picker_wrapper.pickerWrapper> | null) {
		this._fields.pickerWrapper = value
	}

	public get safeConfigSelector(): iresolver.SafeConfigSelector {
		return this._fields.safeConfigSelector
	}

	public set safeConfigSelector(value: iresolver.SafeConfigSelector) {
		this._fields.safeConfigSelector = value
	}

	public get retryThrottler(): atomic.Value {
		return this._fields.retryThrottler
	}

	public set retryThrottler(value: atomic.Value) {
		this._fields.retryThrottler = value
	}

	public get mu(): sync.RWMutex {
		return this._fields.mu
	}

	public set mu(value: sync.RWMutex) {
		this._fields.mu = value
	}

	public get resolverWrapper(): __goscript_resolver_wrapper.ccResolverWrapper | $.VarRef<__goscript_resolver_wrapper.ccResolverWrapper> | null {
		return this._fields.resolverWrapper
	}

	public set resolverWrapper(value: __goscript_resolver_wrapper.ccResolverWrapper | $.VarRef<__goscript_resolver_wrapper.ccResolverWrapper> | null) {
		this._fields.resolverWrapper = value
	}

	public get balancerWrapper(): __goscript_balancer_wrapper.ccBalancerWrapper | $.VarRef<__goscript_balancer_wrapper.ccBalancerWrapper> | null {
		return this._fields.balancerWrapper
	}

	public set balancerWrapper(value: __goscript_balancer_wrapper.ccBalancerWrapper | $.VarRef<__goscript_balancer_wrapper.ccBalancerWrapper> | null) {
		this._fields.balancerWrapper = value
	}

	public get sc(): __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null {
		return this._fields.sc
	}

	public set sc(value: __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null) {
		this._fields.sc = value
	}

	public get conns(): globalThis.Map<addrConn | $.VarRef<addrConn> | null, {}> | null {
		return this._fields.conns
	}

	public set conns(value: globalThis.Map<addrConn | $.VarRef<addrConn> | null, {}> | null) {
		this._fields.conns = value
	}

	public get mkp(): keepalive.ClientParameters {
		return this._fields.mkp
	}

	public set mkp(value: keepalive.ClientParameters) {
		this._fields.mkp = value
	}

	public get firstResolveEvent(): grpcsync.Event | $.VarRef<grpcsync.Event> | null {
		return this._fields.firstResolveEvent
	}

	public set firstResolveEvent(value: grpcsync.Event | $.VarRef<grpcsync.Event> | null) {
		this._fields.firstResolveEvent = value
	}

	public get lceMu(): sync.Mutex {
		return this._fields.lceMu
	}

	public set lceMu(value: sync.Mutex) {
		this._fields.lceMu = value
	}

	public get lastConnectionError(): $.GoError {
		return this._fields.lastConnectionError
	}

	public set lastConnectionError(value: $.GoError) {
		this._fields.lastConnectionError = value
	}

	public _fields: {
		ctx: context.Context | null
		cancel: (() => void) | null
		target: string
		parsedTarget: resolver.Target
		authority: string
		dopts: __goscript_dialoptions.dialOptions
		channelz: channelz2.Channel | $.VarRef<channelz2.Channel> | null
		resolverBuilder: resolver.Builder | null
		idlenessMgr: idle.Manager | $.VarRef<idle.Manager> | null
		metricsRecorderList: stats.MetricsRecorderList | $.VarRef<stats.MetricsRecorderList> | null
		csMgr: connectivityStateManager | $.VarRef<connectivityStateManager> | null
		pickerWrapper: __goscript_picker_wrapper.pickerWrapper | $.VarRef<__goscript_picker_wrapper.pickerWrapper> | null
		safeConfigSelector: iresolver.SafeConfigSelector
		retryThrottler: atomic.Value
		mu: sync.RWMutex
		resolverWrapper: __goscript_resolver_wrapper.ccResolverWrapper | $.VarRef<__goscript_resolver_wrapper.ccResolverWrapper> | null
		balancerWrapper: __goscript_balancer_wrapper.ccBalancerWrapper | $.VarRef<__goscript_balancer_wrapper.ccBalancerWrapper> | null
		sc: __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null
		conns: globalThis.Map<addrConn | $.VarRef<addrConn> | null, {}> | null
		mkp: keepalive.ClientParameters
		firstResolveEvent: grpcsync.Event | $.VarRef<grpcsync.Event> | null
		lceMu: sync.Mutex
		lastConnectionError: $.GoError
	}

	constructor(init?: Partial<{ctx?: context.Context | null, cancel?: (() => void) | null, target?: string, parsedTarget?: resolver.Target, authority?: string, dopts?: __goscript_dialoptions.dialOptions, channelz?: channelz2.Channel | $.VarRef<channelz2.Channel> | null, resolverBuilder?: resolver.Builder | null, idlenessMgr?: idle.Manager | $.VarRef<idle.Manager> | null, metricsRecorderList?: stats.MetricsRecorderList | $.VarRef<stats.MetricsRecorderList> | null, csMgr?: connectivityStateManager | $.VarRef<connectivityStateManager> | null, pickerWrapper?: __goscript_picker_wrapper.pickerWrapper | $.VarRef<__goscript_picker_wrapper.pickerWrapper> | null, safeConfigSelector?: iresolver.SafeConfigSelector, retryThrottler?: atomic.Value, mu?: sync.RWMutex, resolverWrapper?: __goscript_resolver_wrapper.ccResolverWrapper | $.VarRef<__goscript_resolver_wrapper.ccResolverWrapper> | null, balancerWrapper?: __goscript_balancer_wrapper.ccBalancerWrapper | $.VarRef<__goscript_balancer_wrapper.ccBalancerWrapper> | null, sc?: __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null, conns?: globalThis.Map<addrConn | $.VarRef<addrConn> | null, {}> | null, mkp?: keepalive.ClientParameters, firstResolveEvent?: grpcsync.Event | $.VarRef<grpcsync.Event> | null, lceMu?: sync.Mutex, lastConnectionError?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			ctx: init?.ctx ?? (null! as context.Context | null),
			cancel: init?.cancel ?? (null! as (() => void) | null),
			target: init?.target ?? ("" as string),
			parsedTarget: init?.parsedTarget ? init.parsedTarget.clone() : new resolver.Target(undefined, true),
			authority: init?.authority ?? ("" as string),
			dopts: init?.dopts ? init.dopts.clone() : new __goscript_dialoptions.dialOptions(undefined, true),
			channelz: init?.channelz ?? (null! as channelz2.Channel | $.VarRef<channelz2.Channel> | null),
			resolverBuilder: init?.resolverBuilder ?? (null! as resolver.Builder | null),
			idlenessMgr: init?.idlenessMgr ?? (null! as idle.Manager | $.VarRef<idle.Manager> | null),
			metricsRecorderList: init?.metricsRecorderList ?? (null! as stats.MetricsRecorderList | $.VarRef<stats.MetricsRecorderList> | null),
			csMgr: init?.csMgr ?? (null! as connectivityStateManager | $.VarRef<connectivityStateManager> | null),
			pickerWrapper: init?.pickerWrapper ?? (null! as __goscript_picker_wrapper.pickerWrapper | $.VarRef<__goscript_picker_wrapper.pickerWrapper> | null),
			safeConfigSelector: init?.safeConfigSelector ? init.safeConfigSelector.clone() : new iresolver.SafeConfigSelector(undefined, true),
			retryThrottler: init?.retryThrottler ? $.markAsStructValue($.cloneStructValue(init.retryThrottler)) : $.markAsStructValue(new atomic.Value()),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.RWMutex()),
			resolverWrapper: init?.resolverWrapper ?? (null! as __goscript_resolver_wrapper.ccResolverWrapper | $.VarRef<__goscript_resolver_wrapper.ccResolverWrapper> | null),
			balancerWrapper: init?.balancerWrapper ?? (null! as __goscript_balancer_wrapper.ccBalancerWrapper | $.VarRef<__goscript_balancer_wrapper.ccBalancerWrapper> | null),
			sc: init?.sc ?? (null! as __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null),
			conns: init?.conns ?? (null! as globalThis.Map<addrConn | $.VarRef<addrConn> | null, {}> | null),
			mkp: init?.mkp ? init.mkp.clone() : new keepalive.ClientParameters(undefined, true),
			firstResolveEvent: init?.firstResolveEvent ?? (null! as grpcsync.Event | $.VarRef<grpcsync.Event> | null),
			lceMu: init?.lceMu ? $.markAsStructValue($.cloneStructValue(init.lceMu)) : $.markAsStructValue(new sync.Mutex()),
			lastConnectionError: init?.lastConnectionError ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): idler {
		return new idler(this, true)
	}

	public __goscriptAssign(source: idler): void {
		const target = this._fields
		const values = source._fields
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.cancel = values.cancel
		target.target = values.target
		$.assignStruct(target.parsedTarget, values.parsedTarget)
		target.authority = values.authority
		$.assignStruct(target.dopts, values.dopts)
		target.channelz = values.channelz
		target.resolverBuilder = $.assignFieldValue(target.resolverBuilder, values.resolverBuilder, "resolver.Builder")
		target.idlenessMgr = values.idlenessMgr
		target.metricsRecorderList = values.metricsRecorderList
		target.csMgr = values.csMgr
		target.pickerWrapper = values.pickerWrapper
		$.assignStruct(target.safeConfigSelector, values.safeConfigSelector)
		$.assignStruct(target.retryThrottler, values.retryThrottler)
		$.assignStruct(target.mu, values.mu)
		target.resolverWrapper = values.resolverWrapper
		target.balancerWrapper = values.balancerWrapper
		target.sc = values.sc
		target.conns = values.conns
		$.assignStruct(target.mkp, values.mkp)
		target.firstResolveEvent = values.firstResolveEvent
		$.assignStruct(target.lceMu, values.lceMu)
		target.lastConnectionError = $.assignFieldValue(target.lastConnectionError, values.lastConnectionError, "error")
	}

	public async EnterIdleMode(): globalThis.Promise<void> {
		const i: idler | $.VarRef<idler> | null = this;
		await ClientConn.prototype.enterIdleMode.call($.unsafePointerCast<ClientConn | $.VarRef<ClientConn> | null>(i, ClientConn))
	}

	public async ExitIdleMode(): globalThis.Promise<$.GoError> {
		const i: idler | $.VarRef<idler> | null = this;
		return ClientConn.prototype.exitIdleMode.call($.unsafePointerCast<ClientConn | $.VarRef<ClientConn> | null>(i, ClientConn))
	}

	static __typeInfo = $.registerStructType(
		"grpc.idler",
		() => new idler(),
		() => [$.methodSignature("EnterIdleMode", [], [], true), $.methodSignature("ExitIdleMode", [], ["error"], true)],
		idler,
		() => [/* @__PURE__ */ $.structField("ctx", "context.Context", [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("cancel", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), [1], 16, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("target", /* @__PURE__ */ $.basicType("string"), [2], 24, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("parsedTarget", "resolver.Target", [3], 40, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("authority", /* @__PURE__ */ $.basicType("string"), [4], 184, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("dopts", "grpc.dialOptions", [5], 200, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("channelz", /* @__PURE__ */ $.pointerType("channelz.Channel"), [6], 704, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("resolverBuilder", "resolver.Builder", [7], 712, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("idlenessMgr", /* @__PURE__ */ $.pointerType("idle.Manager"), [8], 728, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("metricsRecorderList", /* @__PURE__ */ $.pointerType("stats.MetricsRecorderList"), [9], 736, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("csMgr", /* @__PURE__ */ $.pointerType("grpc.connectivityStateManager"), [10], 744, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("pickerWrapper", /* @__PURE__ */ $.pointerType("grpc.pickerWrapper"), [11], 752, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("safeConfigSelector", "resolver.SafeConfigSelector", [12], 760, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("retryThrottler", "atomic.Value", [13], 800, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("mu", "sync.RWMutex", [14], 816, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("resolverWrapper", /* @__PURE__ */ $.pointerType("grpc.ccResolverWrapper"), [15], 840, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("balancerWrapper", /* @__PURE__ */ $.pointerType("grpc.ccBalancerWrapper"), [16], 848, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("sc", /* @__PURE__ */ $.pointerType("grpc.ServiceConfig"), [17], 856, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("conns", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("grpc.addrConn"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [18], 864, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("mkp", "keepalive.ClientParameters", [19], 872, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("firstResolveEvent", /* @__PURE__ */ $.pointerType("grpcsync.Event"), [20], 896, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("lceMu", "sync.Mutex", [21], 904, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("lastConnectionError", "error", [22], 912, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class connectivityStateManager {
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get state(): connectivity.State {
		return this._fields.state
	}

	public set state(value: connectivity.State) {
		this._fields.state = value
	}

	public get notifyChan(): $.Channel<{}> | null {
		return this._fields.notifyChan
	}

	public set notifyChan(value: $.Channel<{}> | null) {
		this._fields.notifyChan = value
	}

	public get channelz(): channelz2.Channel | $.VarRef<channelz2.Channel> | null {
		return this._fields.channelz
	}

	public set channelz(value: channelz2.Channel | $.VarRef<channelz2.Channel> | null) {
		this._fields.channelz = value
	}

	public get pubSub(): grpcsync.PubSub | $.VarRef<grpcsync.PubSub> | null {
		return this._fields.pubSub
	}

	public set pubSub(value: grpcsync.PubSub | $.VarRef<grpcsync.PubSub> | null) {
		this._fields.pubSub = value
	}

	public _fields: {
		mu: sync.Mutex
		state: connectivity.State
		notifyChan: $.Channel<{}> | null
		channelz: channelz2.Channel | $.VarRef<channelz2.Channel> | null
		pubSub: grpcsync.PubSub | $.VarRef<grpcsync.PubSub> | null
	}

	constructor(init?: Partial<{mu?: sync.Mutex, state?: connectivity.State, notifyChan?: $.Channel<{}> | null, channelz?: channelz2.Channel | $.VarRef<channelz2.Channel> | null, pubSub?: grpcsync.PubSub | $.VarRef<grpcsync.PubSub> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			state: init?.state ?? (0 as connectivity.State),
			notifyChan: init?.notifyChan ?? (null! as $.Channel<{}> | null),
			channelz: init?.channelz ?? (null! as channelz2.Channel | $.VarRef<channelz2.Channel> | null),
			pubSub: init?.pubSub ?? (null! as grpcsync.PubSub | $.VarRef<grpcsync.PubSub> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): connectivityStateManager {
		return new connectivityStateManager(this, true)
	}

	public __goscriptAssign(source: connectivityStateManager): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.state = values.state
		target.notifyChan = values.notifyChan
		target.channelz = values.channelz
		target.pubSub = values.pubSub
	}

	public async getNotifyChan(): globalThis.Promise<$.Channel<{}> | null> {
		let csm: connectivityStateManager | $.VarRef<connectivityStateManager> | null = this;
		using __defer = new $.DisposableStack()
		const csm$: connectivityStateManager = csm == null ? $.pointerTarget<connectivityStateManager>(csm) : (csm as any).__isVarRef === true ? (csm as any).value : (csm as any).__goValue === undefined ? (csm as any) : $.pointerTarget<connectivityStateManager>(csm)
		await (csm$ as connectivityStateManager).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((csm$ as connectivityStateManager).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		if ((csm$ as connectivityStateManager).notifyChan == null) {
			;(csm$ as connectivityStateManager).notifyChan = $.makeChannel<{}>(0, {}, "both")
		}
		return (csm$ as connectivityStateManager).notifyChan
	}

	public async getState(): globalThis.Promise<connectivity.State> {
		const csm: connectivityStateManager | $.VarRef<connectivityStateManager> | null = this;
		using __defer = new $.DisposableStack()
		const csm$: connectivityStateManager = csm == null ? $.pointerTarget<connectivityStateManager>(csm) : (csm as any).__isVarRef === true ? (csm as any).value : (csm as any).__goValue === undefined ? (csm as any) : $.pointerTarget<connectivityStateManager>(csm)
		await (csm$ as connectivityStateManager).mu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((csm$ as connectivityStateManager).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
		return (csm$ as connectivityStateManager).state
	}

	public async updateState(__goscriptParam0: connectivity.State): globalThis.Promise<void> {
		let csm: connectivityStateManager | $.VarRef<connectivityStateManager> | null = this;
		let state: $.VarRef<connectivity.State> = $.varRef(__goscriptParam0)
		using __defer = new $.DisposableStack()
		const csm$: connectivityStateManager = csm == null ? $.pointerTarget<connectivityStateManager>(csm) : (csm as any).__isVarRef === true ? (csm as any).value : (csm as any).__goValue === undefined ? (csm as any) : $.pointerTarget<connectivityStateManager>(csm)
		await (csm$ as connectivityStateManager).mu.Lock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((csm$ as connectivityStateManager).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })
		if ((csm$ as connectivityStateManager).state == 4) {
			return
		}
		if ((csm$ as connectivityStateManager).state == state.value) {
			return
		}
		;(csm$ as connectivityStateManager).state = state.value
		$.pointerValue<channelz2.Channel>((csm$ as connectivityStateManager).channelz).ChannelMetrics.State.Store(state)
		await grpcsync.PubSub.prototype.Publish.call((csm$ as connectivityStateManager).pubSub, $.namedValueInterfaceValue<any>(state.value, "connectivity.State", __goscriptStatic1(), __goscriptStatic2(), __goscriptStatic3()))

		await channelz2.Infof(__goscript_server.logger, $.interfaceValue<channelz2.Entity | null>((csm$ as connectivityStateManager).channelz, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel")), "Channel Connectivity change to %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(state.value, "connectivity.State", __goscriptStatic1(), __goscriptStatic2(), __goscriptStatic3())]))
		if ((csm$ as connectivityStateManager).notifyChan != null) {
			// There are other goroutines waiting on this channel.
			void (csm$ as connectivityStateManager).notifyChan!.close();
			;(csm$ as connectivityStateManager).notifyChan = null
		}
	}

	static __typeInfo = $.registerStructType(
		"grpc.connectivityStateManager",
		() => new connectivityStateManager(),
		() => [$.methodSignature("getNotifyChan", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")], true), $.methodSignature("getState", [], [/* @__PURE__ */ $.basicType("int", "connectivity.State")], true), $.methodSignature("updateState", [["state", /* @__PURE__ */ $.basicType("int", "connectivity.State")]], [], true)],
		connectivityStateManager,
		() => [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "connectivity.State"), [1], 8, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("notifyChan", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [2], 16, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("channelz", /* @__PURE__ */ $.pointerType("channelz.Channel"), [3], 24, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("pubSub", /* @__PURE__ */ $.pointerType("grpcsync.PubSub"), [4], 32, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class ClientConn {
	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get cancel(): (() => void) | null {
		return this._fields.cancel
	}

	public set cancel(value: (() => void) | null) {
		this._fields.cancel = value
	}

	// The following are initialized at dial time, and are read-only after that.
	public get target(): string {
		return this._fields.target
	}

	public set target(value: string) {
		this._fields.target = value
	}

	public get parsedTarget(): resolver.Target {
		return this._fields.parsedTarget
	}

	public set parsedTarget(value: resolver.Target) {
		this._fields.parsedTarget = value
	}

	public get authority(): string {
		return this._fields.authority
	}

	public set authority(value: string) {
		this._fields.authority = value
	}

	public get dopts(): __goscript_dialoptions.dialOptions {
		return this._fields.dopts
	}

	public set dopts(value: __goscript_dialoptions.dialOptions) {
		this._fields.dopts = value
	}

	public get channelz(): channelz2.Channel | $.VarRef<channelz2.Channel> | null {
		return this._fields.channelz
	}

	public set channelz(value: channelz2.Channel | $.VarRef<channelz2.Channel> | null) {
		this._fields.channelz = value
	}

	public get resolverBuilder(): resolver.Builder | null {
		return this._fields.resolverBuilder
	}

	public set resolverBuilder(value: resolver.Builder | null) {
		this._fields.resolverBuilder = value
	}

	public get idlenessMgr(): idle.Manager | $.VarRef<idle.Manager> | null {
		return this._fields.idlenessMgr
	}

	public set idlenessMgr(value: idle.Manager | $.VarRef<idle.Manager> | null) {
		this._fields.idlenessMgr = value
	}

	public get metricsRecorderList(): stats.MetricsRecorderList | $.VarRef<stats.MetricsRecorderList> | null {
		return this._fields.metricsRecorderList
	}

	public set metricsRecorderList(value: stats.MetricsRecorderList | $.VarRef<stats.MetricsRecorderList> | null) {
		this._fields.metricsRecorderList = value
	}

	// The following provide their own synchronization, and therefore don't
	// require cc.mu to be held to access them.
	public get csMgr(): connectivityStateManager | $.VarRef<connectivityStateManager> | null {
		return this._fields.csMgr
	}

	public set csMgr(value: connectivityStateManager | $.VarRef<connectivityStateManager> | null) {
		this._fields.csMgr = value
	}

	public get pickerWrapper(): __goscript_picker_wrapper.pickerWrapper | $.VarRef<__goscript_picker_wrapper.pickerWrapper> | null {
		return this._fields.pickerWrapper
	}

	public set pickerWrapper(value: __goscript_picker_wrapper.pickerWrapper | $.VarRef<__goscript_picker_wrapper.pickerWrapper> | null) {
		this._fields.pickerWrapper = value
	}

	public get safeConfigSelector(): iresolver.SafeConfigSelector {
		return this._fields.safeConfigSelector
	}

	public set safeConfigSelector(value: iresolver.SafeConfigSelector) {
		this._fields.safeConfigSelector = value
	}

	public get retryThrottler(): atomic.Value {
		return this._fields.retryThrottler
	}

	public set retryThrottler(value: atomic.Value) {
		this._fields.retryThrottler = value
	}

	// mu protects the following fields.
	// TODO: split mu so the same mutex isn't used for everything.
	public get mu(): sync.RWMutex {
		return this._fields.mu
	}

	public set mu(value: sync.RWMutex) {
		this._fields.mu = value
	}

	public get resolverWrapper(): __goscript_resolver_wrapper.ccResolverWrapper | $.VarRef<__goscript_resolver_wrapper.ccResolverWrapper> | null {
		return this._fields.resolverWrapper
	}

	public set resolverWrapper(value: __goscript_resolver_wrapper.ccResolverWrapper | $.VarRef<__goscript_resolver_wrapper.ccResolverWrapper> | null) {
		this._fields.resolverWrapper = value
	}

	public get balancerWrapper(): __goscript_balancer_wrapper.ccBalancerWrapper | $.VarRef<__goscript_balancer_wrapper.ccBalancerWrapper> | null {
		return this._fields.balancerWrapper
	}

	public set balancerWrapper(value: __goscript_balancer_wrapper.ccBalancerWrapper | $.VarRef<__goscript_balancer_wrapper.ccBalancerWrapper> | null) {
		this._fields.balancerWrapper = value
	}

	public get sc(): __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null {
		return this._fields.sc
	}

	public set sc(value: __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null) {
		this._fields.sc = value
	}

	public get conns(): globalThis.Map<addrConn | $.VarRef<addrConn> | null, {}> | null {
		return this._fields.conns
	}

	public set conns(value: globalThis.Map<addrConn | $.VarRef<addrConn> | null, {}> | null) {
		this._fields.conns = value
	}

	public get mkp(): keepalive.ClientParameters {
		return this._fields.mkp
	}

	public set mkp(value: keepalive.ClientParameters) {
		this._fields.mkp = value
	}

	// firstResolveEvent is used to track whether the name resolver sent us at
	// least one update. RPCs block on this event.  May be accessed without mu
	// if we know we cannot be asked to enter idle mode while accessing it (e.g.
	// when the idle manager has already been closed, or if we are already
	// entering idle mode).
	public get firstResolveEvent(): grpcsync.Event | $.VarRef<grpcsync.Event> | null {
		return this._fields.firstResolveEvent
	}

	public set firstResolveEvent(value: grpcsync.Event | $.VarRef<grpcsync.Event> | null) {
		this._fields.firstResolveEvent = value
	}

	public get lceMu(): sync.Mutex {
		return this._fields.lceMu
	}

	public set lceMu(value: sync.Mutex) {
		this._fields.lceMu = value
	}

	public get lastConnectionError(): $.GoError {
		return this._fields.lastConnectionError
	}

	public set lastConnectionError(value: $.GoError) {
		this._fields.lastConnectionError = value
	}

	public _fields: {
		ctx: context.Context | null
		cancel: (() => void) | null
		target: string
		parsedTarget: resolver.Target
		authority: string
		dopts: __goscript_dialoptions.dialOptions
		channelz: channelz2.Channel | $.VarRef<channelz2.Channel> | null
		resolverBuilder: resolver.Builder | null
		idlenessMgr: idle.Manager | $.VarRef<idle.Manager> | null
		metricsRecorderList: stats.MetricsRecorderList | $.VarRef<stats.MetricsRecorderList> | null
		csMgr: connectivityStateManager | $.VarRef<connectivityStateManager> | null
		pickerWrapper: __goscript_picker_wrapper.pickerWrapper | $.VarRef<__goscript_picker_wrapper.pickerWrapper> | null
		safeConfigSelector: iresolver.SafeConfigSelector
		retryThrottler: atomic.Value
		mu: sync.RWMutex
		resolverWrapper: __goscript_resolver_wrapper.ccResolverWrapper | $.VarRef<__goscript_resolver_wrapper.ccResolverWrapper> | null
		balancerWrapper: __goscript_balancer_wrapper.ccBalancerWrapper | $.VarRef<__goscript_balancer_wrapper.ccBalancerWrapper> | null
		sc: __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null
		conns: globalThis.Map<addrConn | $.VarRef<addrConn> | null, {}> | null
		mkp: keepalive.ClientParameters
		firstResolveEvent: grpcsync.Event | $.VarRef<grpcsync.Event> | null
		lceMu: sync.Mutex
		lastConnectionError: $.GoError
	}

	constructor(init?: Partial<{ctx?: context.Context | null, cancel?: (() => void) | null, target?: string, parsedTarget?: resolver.Target, authority?: string, dopts?: __goscript_dialoptions.dialOptions, channelz?: channelz2.Channel | $.VarRef<channelz2.Channel> | null, resolverBuilder?: resolver.Builder | null, idlenessMgr?: idle.Manager | $.VarRef<idle.Manager> | null, metricsRecorderList?: stats.MetricsRecorderList | $.VarRef<stats.MetricsRecorderList> | null, csMgr?: connectivityStateManager | $.VarRef<connectivityStateManager> | null, pickerWrapper?: __goscript_picker_wrapper.pickerWrapper | $.VarRef<__goscript_picker_wrapper.pickerWrapper> | null, safeConfigSelector?: iresolver.SafeConfigSelector, retryThrottler?: atomic.Value, mu?: sync.RWMutex, resolverWrapper?: __goscript_resolver_wrapper.ccResolverWrapper | $.VarRef<__goscript_resolver_wrapper.ccResolverWrapper> | null, balancerWrapper?: __goscript_balancer_wrapper.ccBalancerWrapper | $.VarRef<__goscript_balancer_wrapper.ccBalancerWrapper> | null, sc?: __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null, conns?: globalThis.Map<addrConn | $.VarRef<addrConn> | null, {}> | null, mkp?: keepalive.ClientParameters, firstResolveEvent?: grpcsync.Event | $.VarRef<grpcsync.Event> | null, lceMu?: sync.Mutex, lastConnectionError?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			ctx: init?.ctx ?? (null! as context.Context | null),
			cancel: init?.cancel ?? (null! as (() => void) | null),
			target: init?.target ?? ("" as string),
			parsedTarget: init?.parsedTarget ? init.parsedTarget.clone() : new resolver.Target(undefined, true),
			authority: init?.authority ?? ("" as string),
			dopts: init?.dopts ? init.dopts.clone() : new __goscript_dialoptions.dialOptions(undefined, true),
			channelz: init?.channelz ?? (null! as channelz2.Channel | $.VarRef<channelz2.Channel> | null),
			resolverBuilder: init?.resolverBuilder ?? (null! as resolver.Builder | null),
			idlenessMgr: init?.idlenessMgr ?? (null! as idle.Manager | $.VarRef<idle.Manager> | null),
			metricsRecorderList: init?.metricsRecorderList ?? (null! as stats.MetricsRecorderList | $.VarRef<stats.MetricsRecorderList> | null),
			csMgr: init?.csMgr ?? (null! as connectivityStateManager | $.VarRef<connectivityStateManager> | null),
			pickerWrapper: init?.pickerWrapper ?? (null! as __goscript_picker_wrapper.pickerWrapper | $.VarRef<__goscript_picker_wrapper.pickerWrapper> | null),
			safeConfigSelector: init?.safeConfigSelector ? init.safeConfigSelector.clone() : new iresolver.SafeConfigSelector(undefined, true),
			retryThrottler: init?.retryThrottler ? $.markAsStructValue($.cloneStructValue(init.retryThrottler)) : $.markAsStructValue(new atomic.Value()),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.RWMutex()),
			resolverWrapper: init?.resolverWrapper ?? (null! as __goscript_resolver_wrapper.ccResolverWrapper | $.VarRef<__goscript_resolver_wrapper.ccResolverWrapper> | null),
			balancerWrapper: init?.balancerWrapper ?? (null! as __goscript_balancer_wrapper.ccBalancerWrapper | $.VarRef<__goscript_balancer_wrapper.ccBalancerWrapper> | null),
			sc: init?.sc ?? (null! as __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null),
			conns: init?.conns ?? (null! as globalThis.Map<addrConn | $.VarRef<addrConn> | null, {}> | null),
			mkp: init?.mkp ? init.mkp.clone() : new keepalive.ClientParameters(undefined, true),
			firstResolveEvent: init?.firstResolveEvent ?? (null! as grpcsync.Event | $.VarRef<grpcsync.Event> | null),
			lceMu: init?.lceMu ? $.markAsStructValue($.cloneStructValue(init.lceMu)) : $.markAsStructValue(new sync.Mutex()),
			lastConnectionError: init?.lastConnectionError ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClientConn {
		return new ClientConn(this, true)
	}

	public __goscriptAssign(source: ClientConn): void {
		const target = this._fields
		const values = source._fields
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.cancel = values.cancel
		target.target = values.target
		$.assignStruct(target.parsedTarget, values.parsedTarget)
		target.authority = values.authority
		$.assignStruct(target.dopts, values.dopts)
		target.channelz = values.channelz
		target.resolverBuilder = $.assignFieldValue(target.resolverBuilder, values.resolverBuilder, "resolver.Builder")
		target.idlenessMgr = values.idlenessMgr
		target.metricsRecorderList = values.metricsRecorderList
		target.csMgr = values.csMgr
		target.pickerWrapper = values.pickerWrapper
		$.assignStruct(target.safeConfigSelector, values.safeConfigSelector)
		$.assignStruct(target.retryThrottler, values.retryThrottler)
		$.assignStruct(target.mu, values.mu)
		target.resolverWrapper = values.resolverWrapper
		target.balancerWrapper = values.balancerWrapper
		target.sc = values.sc
		target.conns = values.conns
		$.assignStruct(target.mkp, values.mkp)
		target.firstResolveEvent = values.firstResolveEvent
		$.assignStruct(target.lceMu, values.lceMu)
		target.lastConnectionError = $.assignFieldValue(target.lastConnectionError, values.lastConnectionError, "error")
	}

	public CanonicalTarget(): string {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<ClientConn>(cc).parsedTarget)).String()
	}

	public async Close(): globalThis.Promise<$.GoError> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			await (cc$ as ClientConn).cancel!()
			await $.chanRecv(grpcsync.PubSub.prototype.Done.call($.pointerValue<connectivityStateManager>((cc$ as ClientConn).csMgr).pubSub))
		})() })

		// Prevent calls to enter/exit idle immediately, and ensure we are not
		// currently entering/exiting idle mode.
		await idle.Manager.prototype.Close.call((cc$ as ClientConn).idlenessMgr)

		await (cc$ as ClientConn).mu.Lock()
		if ((cc$ as ClientConn).conns == null) {
			void (cc$ as ClientConn).mu.Unlock()
			return ErrClientConnClosing
		}

		let conns: globalThis.Map<addrConn | $.VarRef<addrConn> | null, {}> | null = (cc$ as ClientConn).conns;
		;(cc$ as ClientConn).conns = null
		await connectivityStateManager.prototype.updateState.call((cc$ as ClientConn).csMgr, 4)

		// We can safely unlock and continue to access all fields now as
		// cc.conns==nil, preventing any further operations on cc.
		void (cc$ as ClientConn).mu.Unlock()

		await __goscript_resolver_wrapper.ccResolverWrapper.prototype.close.call((cc$ as ClientConn).resolverWrapper)
		// The order of closing matters here since the balancer wrapper assumes the
		// picker is closed before it is closed.
		__goscript_picker_wrapper.pickerWrapper.prototype.close.call((cc$ as ClientConn).pickerWrapper)
		await __goscript_balancer_wrapper.ccBalancerWrapper.prototype.close.call((cc$ as ClientConn).balancerWrapper)

		await $.chanRecv(grpcsync.CallbackSerializer.prototype.Done.call($.pointerValue<__goscript_resolver_wrapper.ccResolverWrapper>((cc$ as ClientConn).resolverWrapper).serializer))
		await $.chanRecv(grpcsync.CallbackSerializer.prototype.Done.call($.pointerValue<__goscript_balancer_wrapper.ccBalancerWrapper>((cc$ as ClientConn).balancerWrapper).serializer))

		for (const [ac, __rangeValue] of conns?.entries() ?? []) {
			await (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as addrConn).tearDown(ErrClientConnClosing) : addrConn.prototype.tearDown.call(ac, ErrClientConnClosing))
		}
		await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).addTraceEvent("deleted") : ClientConn.prototype.addTraceEvent.call(cc, "deleted"))
		// TraceEvent needs to be called before RemoveEntry, as TraceEvent may add
		// trace reference to the entity being deleted, and thus prevent it from being
		// deleted right away.
		await channelz2.RemoveEntry($.pointerValue<channelz2.Channel>((cc$ as ClientConn).channelz).ID)

		return null
	}

	public async Connect(): globalThis.Promise<void> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		{
			let err = await idle.Manager.prototype.ExitIdleMode.call((cc$ as ClientConn).idlenessMgr)
			if (err != null) {
				await ClientConn.prototype.addTraceEvent.call(cc, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				return
			}
		}
		// If the ClientConn was not in idle mode, we need to call ExitIdle on the
		// LB policy so that connections can be created.
		await (cc$ as ClientConn).mu.Lock()
		await __goscript_balancer_wrapper.ccBalancerWrapper.prototype.exitIdle.call((cc$ as ClientConn).balancerWrapper)
		void (cc$ as ClientConn).mu.Unlock()
	}

	public async GetMethodConfig(method: string): globalThis.Promise<__goscript_service_config.MethodConfig> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		using __defer = new $.DisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		// TODO: Avoid the locking here.
		await (cc$ as ClientConn).mu.RLock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })
		return getMethodConfig((cc$ as ClientConn).sc, method)
	}

	public async GetState(): globalThis.Promise<connectivity.State> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		return connectivityStateManager.prototype.getState.call($.pointerValue<ClientConn>(cc).csMgr)
	}

	public async Invoke(ctx: context.Context | null, method: string, args: any, reply: any, opts: $.Slice<__goscript_rpc_util.CallOption | null>): globalThis.Promise<$.GoError> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)

		opts = __goscript_call.combine((cc$ as ClientConn).dopts.callOptions, opts)

		if ((cc$ as ClientConn).dopts.unaryInt != null) {
			return (cc$ as ClientConn).dopts.unaryInt!(ctx, method, args, reply, cc, __goscript_call.invoke, opts)
		}
		return __goscript_call.invoke(ctx, method, args, reply, cc, opts)
	}

	public async NewStream(ctx: context.Context | null, desc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, method: string, opts: $.Slice<__goscript_rpc_util.CallOption | null>): globalThis.Promise<[__goscript_stream.ClientStream | null, $.GoError]> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)

		opts = __goscript_call.combine((cc$ as ClientConn).dopts.callOptions, opts)

		if ((cc$ as ClientConn).dopts.streamInt != null) {
			return (cc$ as ClientConn).dopts.streamInt!(ctx, desc, cc, method, __goscript_stream.newClientStream, opts)
		}
		return __goscript_stream.newClientStream(ctx, desc, cc, method, opts)
	}

	public async ResetConnectBackoff(): globalThis.Promise<void> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.Lock()
		let conns: globalThis.Map<addrConn | $.VarRef<addrConn> | null, {}> | null = (cc$ as ClientConn).conns
		void (cc$ as ClientConn).mu.Unlock()
		for (const [ac, __rangeValue] of conns?.entries() ?? []) {
			await (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as addrConn).resetConnectBackoff() : addrConn.prototype.resetConnectBackoff.call(ac))
		}
	}

	public Target(): string {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		return $.pointerValue<ClientConn>(cc).target
	}

	public async WaitForStateChange(ctx: context.Context | null, sourceState: connectivity.State): globalThis.Promise<boolean> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		let ch: $.Channel<{}> | null = await connectivityStateManager.prototype.getNotifyChan.call((cc$ as ClientConn).csMgr)
		if (await connectivityStateManager.prototype.getState.call((cc$ as ClientConn).csMgr) != sourceState) {
			return true
		}
		const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, boolean>([
			{
				id: 0,
				isSend: false,
				channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect1Result) => {
					return false
				}
			},
			{
				id: 1,
				isSend: false,
				channel: ch,
				onSelected: async (__goscriptSelect1Result) => {
					return true
				}
			}
		], false)
		if (__goscriptSelect1HasReturn) {
			return __goscriptSelect1Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async addTraceEvent(msg: string): globalThis.Promise<void> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		let ted: channelz2.TraceEvent | $.VarRef<channelz2.TraceEvent> | null = (await (async () => { const __goscriptLiteralField3 = await fmt.Sprintf("Channel %s", msg); return new channelz2.TraceEvent({Desc: __goscriptLiteralField3, Severity: 1}) })())
		if ((cc$ as ClientConn).dopts.channelzParent != null) {
			$.pointerValue<channelz2.TraceEvent>(ted).Parent = (await (async () => { const __goscriptLiteralField4 = await fmt.Sprintf("Nested channel(id:%d) %s", $.basicInterfaceValue($.pointerValue<channelz2.Channel>((cc$ as ClientConn).channelz).ID, "int64"), msg); return new channelz2.TraceEvent({Desc: __goscriptLiteralField4, Severity: 1}) })())
		}
		await channelz2.AddTraceEvent(__goscript_server.logger, $.interfaceValue<channelz2.Entity | null>((cc$ as ClientConn).channelz, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel")), 0, ted)
	}

	public async applyFailingLBLocked(sc: serviceconfig.ParseResult | $.VarRef<serviceconfig.ParseResult> | null): globalThis.Promise<void> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		const sc$: serviceconfig.ParseResult = sc == null ? $.pointerTarget<serviceconfig.ParseResult>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<serviceconfig.ParseResult>(sc)
		let err: $.GoError = null! as $.GoError
		if ((sc$ as serviceconfig.ParseResult).Err != null) {
			err = await status.Errorf(14, "error parsing service config: %v", $.arrayToSlice<any>([((sc$ as serviceconfig.ParseResult).Err as any)]))
		} else {
			err = await status.Errorf(14, "illegal service config type: %T", $.arrayToSlice<any>([((sc$ as serviceconfig.ParseResult).Config as any)]))
		}
		await (cc$ as ClientConn).safeConfigSelector.UpdateConfigSelector($.interfaceValue<iresolver.ConfigSelector | null>(new defaultConfigSelector({sc: null}), "*grpc.defaultConfigSelector", /* @__PURE__ */ $.pointerType("grpc.defaultConfigSelector")))
		__goscript_picker_wrapper.pickerWrapper.prototype.updatePicker.call((cc$ as ClientConn).pickerWrapper, base.NewErrPicker(err))
		await connectivityStateManager.prototype.updateState.call((cc$ as ClientConn).csMgr, 3)
	}

	public async applyServiceConfigAndBalancer(sc: __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null, configSelector: iresolver.ConfigSelector | null): globalThis.Promise<void> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		if (sc == null) {
			// should never reach here.
			return
		}
		;(cc$ as ClientConn).sc = sc
		if (configSelector != null) {
			await (cc$ as ClientConn).safeConfigSelector.UpdateConfigSelector(configSelector)
		}

		if ($.pointerValue<__goscript_service_config.ServiceConfig>((cc$ as ClientConn).sc).retryThrottling != null) {
			let newThrottler: retryThrottler | $.VarRef<retryThrottler> | null = new retryThrottler({tokens: $.pointerValue<__goscript_service_config.retryThrottlingPolicy>($.pointerValue<__goscript_service_config.ServiceConfig>((cc$ as ClientConn).sc).retryThrottling).MaxTokens, max: $.pointerValue<__goscript_service_config.retryThrottlingPolicy>($.pointerValue<__goscript_service_config.ServiceConfig>((cc$ as ClientConn).sc).retryThrottling).MaxTokens, thresh: $.pointerValue<__goscript_service_config.retryThrottlingPolicy>($.pointerValue<__goscript_service_config.ServiceConfig>((cc$ as ClientConn).sc).retryThrottling).MaxTokens / 2, ratio: $.pointerValue<__goscript_service_config.retryThrottlingPolicy>($.pointerValue<__goscript_service_config.ServiceConfig>((cc$ as ClientConn).sc).retryThrottling).TokenRatio})
			void (cc$ as ClientConn).retryThrottler.Store($.interfaceValue(newThrottler, "*grpc.retryThrottler", /* @__PURE__ */ $.pointerType("grpc.retryThrottler")))
		} else {
			void (cc$ as ClientConn).retryThrottler.Store($.interfaceValue(null, "*grpc.retryThrottler", /* @__PURE__ */ $.pointerType("grpc.retryThrottler")))
		}
	}

	public async channelzRegistration(target: string): globalThis.Promise<void> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		let __goscriptTuple4: any = $.typeAssertTuple<channelz2.Channel | $.VarRef<channelz2.Channel> | null>((cc$ as ClientConn).dopts.channelzParent, /* @__PURE__ */ $.pointerType("channelz.Channel"))
		let parentChannel: channelz2.Channel | $.VarRef<channelz2.Channel> | null = __goscriptTuple4[0];
		;(cc$ as ClientConn).channelz = await channelz2.RegisterChannel(parentChannel, target)
		await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).addTraceEvent("created") : ClientConn.prototype.addTraceEvent.call(cc, "created"))
	}

	public async connectionError(): globalThis.Promise<$.GoError> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		using __defer = new $.DisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).lceMu.Lock()
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Unlock())((cc$ as ClientConn).lceMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee5() })
		return (cc$ as ClientConn).lastConnectionError
	}

	public async enterIdleMode(): globalThis.Promise<void> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.Lock()

		if ((cc$ as ClientConn).conns == null) {
			void (cc$ as ClientConn).mu.Unlock()
			return
		}

		let conns: globalThis.Map<addrConn | $.VarRef<addrConn> | null, {}> | null = (cc$ as ClientConn).conns

		let rWrapper: __goscript_resolver_wrapper.ccResolverWrapper | $.VarRef<__goscript_resolver_wrapper.ccResolverWrapper> | null = (cc$ as ClientConn).resolverWrapper
		await (rWrapper !== null && (rWrapper as any).__isVarRef !== true && (rWrapper as any).__goValue === undefined ? ((rWrapper as any) as __goscript_resolver_wrapper.ccResolverWrapper).close() : __goscript_resolver_wrapper.ccResolverWrapper.prototype.close.call(rWrapper))
		__goscript_picker_wrapper.pickerWrapper.prototype.reset.call((cc$ as ClientConn).pickerWrapper)
		let bWrapper: __goscript_balancer_wrapper.ccBalancerWrapper | $.VarRef<__goscript_balancer_wrapper.ccBalancerWrapper> | null = (cc$ as ClientConn).balancerWrapper
		await (bWrapper !== null && (bWrapper as any).__isVarRef !== true && (bWrapper as any).__goValue === undefined ? ((bWrapper as any) as __goscript_balancer_wrapper.ccBalancerWrapper).close() : __goscript_balancer_wrapper.ccBalancerWrapper.prototype.close.call(bWrapper))
		await connectivityStateManager.prototype.updateState.call((cc$ as ClientConn).csMgr, 0)
		await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).addTraceEvent("entering idle mode") : ClientConn.prototype.addTraceEvent.call(cc, "entering idle mode"))

		await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).initIdleStateLocked() : ClientConn.prototype.initIdleStateLocked.call(cc))

		void (cc$ as ClientConn).mu.Unlock()

		// Block until the name resolver and LB policy are closed.
		await $.chanRecv(grpcsync.CallbackSerializer.prototype.Done.call($.pointerValue<__goscript_resolver_wrapper.ccResolverWrapper>(rWrapper).serializer))
		await $.chanRecv(grpcsync.CallbackSerializer.prototype.Done.call($.pointerValue<__goscript_balancer_wrapper.ccBalancerWrapper>(bWrapper).serializer))

		// Close all subchannels after the LB policy is closed.
		for (const [ac, __rangeValue] of conns?.entries() ?? []) {
			await (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as addrConn).tearDown(errConnIdling) : addrConn.prototype.tearDown.call(ac, errConnIdling))
		}
	}

	public async exitIdleMode(): globalThis.Promise<$.GoError> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		let err: $.GoError = null! as $.GoError
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.Lock()
		if ((cc$ as ClientConn).conns == null) {
			void (cc$ as ClientConn).mu.Unlock()
			return errConnClosing
		}
		void (cc$ as ClientConn).mu.Unlock()

		// This needs to be called without cc.mu because this builds a new resolver
		// which might update state or report error inline, which would then need to
		// acquire cc.mu.
		{
			let __goscriptShadow3 = await __goscript_resolver_wrapper.ccResolverWrapper.prototype.start.call((cc$ as ClientConn).resolverWrapper)
			if (__goscriptShadow3 != null) {
				return __goscriptShadow3
			}
		}

		await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).addTraceEvent("exiting idle mode") : ClientConn.prototype.addTraceEvent.call(cc, "exiting idle mode"))
		return null
	}

	public async getResolver(scheme: string): globalThis.Promise<resolver.Builder | null> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		for (let __goscriptRangeTarget4 = $.pointerValue<ClientConn>(cc).dopts.resolvers, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let rb = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as resolver.Builder | null)
			if ($.stringEqual(scheme, (__goscriptAwait = (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? (rb as Exclude<resolver.Builder, null>) : $.pointerValue<Exclude<resolver.Builder, null>>(rb)).Scheme(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
				return rb
			}
		}
		return resolver.Get(scheme)
	}

	public getServerName(addr: resolver.Address): string {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		if (!$.stringEqual((cc$ as ClientConn).dopts.authority, "")) {
			return (cc$ as ClientConn).dopts.authority
		}
		if (!$.stringEqual(addr.ServerName, "")) {
			return addr.ServerName
		}
		return (cc$ as ClientConn).authority
	}

	public async getTransport(ctx: context.Context | null, failfast: boolean, method: string): globalThis.Promise<[transport2.ClientTransport | null, balancer.PickResult, $.GoError]> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		return __goscript_picker_wrapper.pickerWrapper.prototype.pick.call($.pointerValue<ClientConn>(cc).pickerWrapper, ctx, failfast, new balancer.PickInfo({Ctx: ctx, FullMethodName: method}, true))
	}

	public async healthCheckConfig(): globalThis.Promise<__goscript_service_config.healthCheckConfig | $.VarRef<__goscript_service_config.healthCheckConfig> | null> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		using __defer = new $.DisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.RLock()
		const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((cc$ as ClientConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee6() })
		if ((cc$ as ClientConn).sc == null) {
			return null
		}
		return $.pointerValue<__goscript_service_config.ServiceConfig>((cc$ as ClientConn).sc).healthCheckConfig
	}

	public incrCallsFailed(): void {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		$.pointerValue<channelz2.Channel>($.pointerValue<ClientConn>(cc).channelz).ChannelMetrics.CallsFailed.Add(1n)
	}

	public incrCallsStarted(): void {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		$.pointerValue<channelz2.Channel>((cc$ as ClientConn).channelz).ChannelMetrics.CallsStarted.Add(1n)
		$.pointerValue<channelz2.Channel>((cc$ as ClientConn).channelz).ChannelMetrics.LastCallStartedTimestamp.Store($.markAsStructValue($.cloneStructValue(time.Now())).UnixNano())
	}

	public incrCallsSucceeded(): void {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		$.pointerValue<channelz2.Channel>($.pointerValue<ClientConn>(cc).channelz).ChannelMetrics.CallsSucceeded.Add(1n)
	}

	public async initAuthority(): globalThis.Promise<$.GoError> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		let dopts = ((cc$ as ClientConn).dopts).clone()
		// Historically, we had two options for users to specify the serverName or
		// authority for a channel. One was through the transport credentials
		// (either in its constructor, or through the OverrideServerName() method).
		// The other option (for cases where WithInsecure() dial option was used)
		// was to use the WithAuthority() dial option.
		//
		// A few things have changed since:
		// - `insecure` package with an implementation of the `TransportCredentials`
		//   interface for the insecure case
		// - WithAuthority() dial option support for secure credentials
		let authorityFromCreds = ""
		{
			let creds = dopts.copts.TransportCredentials
			if ((creds != null) && (!$.stringEqual(((__goscriptAwait = (creds !== null && (creds as any).__isVarRef !== true && (creds as any).__goValue === undefined ? (creds as Exclude<credentials.TransportCredentials, null>) : $.pointerValue<Exclude<credentials.TransportCredentials, null>>(creds)).Info(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as credentials.ProtocolInfo).ServerName, ""))) {
				authorityFromCreds = ((__goscriptAwait = (creds !== null && (creds as any).__isVarRef !== true && (creds as any).__goValue === undefined ? (creds as Exclude<credentials.TransportCredentials, null>) : $.pointerValue<Exclude<credentials.TransportCredentials, null>>(creds)).Info(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as credentials.ProtocolInfo).ServerName
			}
		}
		let authorityFromDialOption = dopts.authority
		if (((!$.stringEqual(authorityFromCreds, "")) && (!$.stringEqual(authorityFromDialOption, ""))) && (!$.stringEqual(authorityFromCreds, authorityFromDialOption))) {
			return fmt.Errorf("ClientConn's authority from transport creds %q and dial option %q don't match", authorityFromCreds, authorityFromDialOption)
		}

		let endpoint = (cc$ as ClientConn).parsedTarget.Endpoint()
		if (!$.stringEqual(authorityFromDialOption, "")) {
			;(cc$ as ClientConn).authority = authorityFromDialOption
		} else {
			if (!$.stringEqual(authorityFromCreds, "")) {
				;(cc$ as ClientConn).authority = authorityFromCreds
			} else {
				{
					let [auth, ok] = $.typeAssertTuple<resolver.AuthorityOverrider | null>((cc$ as ClientConn).resolverBuilder, "resolver.AuthorityOverrider")
					if (ok) {
						;(cc$ as ClientConn).authority = (__goscriptAwait = (auth !== null && (auth as any).__isVarRef !== true && (auth as any).__goValue === undefined ? (auth as Exclude<resolver.AuthorityOverrider, null>) : $.pointerValue<Exclude<resolver.AuthorityOverrider, null>>(auth)).OverrideAuthority(((cc$ as ClientConn).parsedTarget).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					} else {
						if (strings.HasPrefix(endpoint, ":")) {
							;(cc$ as ClientConn).authority = $.concatString("localhost", endpoint)
						} else {
							;(cc$ as ClientConn).authority = await encodeAuthority(endpoint)
						}
					}
				}
			}
		}
		return null
	}

	public async initIdleStateLocked(): globalThis.Promise<void> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc);
		;(cc$ as ClientConn).resolverWrapper = await __goscript_resolver_wrapper.newCCResolverWrapper(cc);
		;(cc$ as ClientConn).balancerWrapper = await __goscript_balancer_wrapper.newCCBalancerWrapper(cc);
		;(cc$ as ClientConn).firstResolveEvent = grpcsync.NewEvent();
		// cc.conns == nil is a proxy for the ClientConn being closed. So, instead
		// of setting it to nil here, we recreate the map. This also means that we
		// don't have to do this when exiting idle mode.
		;(cc$ as ClientConn).conns = $.makeMap<addrConn | $.VarRef<addrConn> | null, {}>(undefined, /* @__PURE__ */ $.pointerType("grpc.addrConn"))
	}

	public async initParsedTargetAndResolverBuilder(): globalThis.Promise<$.GoError> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).Infof("original dial target is: %q", $.arrayToSlice<any>([(cc$ as ClientConn).target])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let rb: resolver.Builder | null = null! as resolver.Builder | null
		let [parsedTarget, err] = parseTarget((cc$ as ClientConn).target)
		if (err == null) {
			rb = await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).getResolver(parsedTarget.URL.Scheme) : ClientConn.prototype.getResolver.call(cc, parsedTarget.URL.Scheme))
			if (rb != null) {
				$.assignStruct((cc$ as ClientConn).parsedTarget, parsedTarget);
				;(cc$ as ClientConn).resolverBuilder = rb
				return null
			}
		}

		// We are here because the user's dial target did not contain a scheme or
		// specified an unregistered scheme. We should fallback to the default
		// scheme, except when a custom dialer is specified in which case, we should
		// always use passthrough scheme. For either case, we need to respect any overridden
		// global defaults set by the user.
		let defScheme = (cc$ as ClientConn).dopts.defaultScheme
		if (internal.UserSetDefaultScheme) {
			defScheme = resolver.GetDefaultScheme()
		}

		let canonicalTarget = $.concatString(($.concatString(defScheme, ":///")), (cc$ as ClientConn).target)

		let __goscriptTuple5: any = parseTarget(canonicalTarget)
		parsedTarget = $.assignStruct(parsedTarget, __goscriptTuple5[0])
		err = __goscriptTuple5[1]
		if (err != null) {
			return err
		}
		rb = await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).getResolver(parsedTarget.URL.Scheme) : ClientConn.prototype.getResolver.call(cc, parsedTarget.URL.Scheme))
		if (rb == null) {
			return fmt.Errorf("could not get resolver for default scheme: %q", parsedTarget.URL.Scheme)
		}
		$.assignStruct((cc$ as ClientConn).parsedTarget, parsedTarget);
		;(cc$ as ClientConn).resolverBuilder = rb
		return null
	}

	public async maybeApplyDefaultServiceConfig(): globalThis.Promise<void> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		if ((cc$ as ClientConn).sc != null) {
			await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).applyServiceConfigAndBalancer((cc$ as ClientConn).sc, null) : ClientConn.prototype.applyServiceConfigAndBalancer.call(cc, (cc$ as ClientConn).sc, null))
			return
		}
		if ((cc$ as ClientConn).dopts.defaultServiceConfig != null) {
			await ClientConn.prototype.applyServiceConfigAndBalancer.call(cc, (cc$ as ClientConn).dopts.defaultServiceConfig, $.interfaceValue<iresolver.ConfigSelector | null>(new defaultConfigSelector({sc: (cc$ as ClientConn).dopts.defaultServiceConfig}), "*grpc.defaultConfigSelector", /* @__PURE__ */ $.pointerType("grpc.defaultConfigSelector")))
		} else {
			await ClientConn.prototype.applyServiceConfigAndBalancer.call(cc, emptyServiceConfig, $.interfaceValue<iresolver.ConfigSelector | null>(new defaultConfigSelector({sc: emptyServiceConfig}), "*grpc.defaultConfigSelector", /* @__PURE__ */ $.pointerType("grpc.defaultConfigSelector")))
		}
	}

	public async newAddrConnLocked(addrs: $.Slice<resolver.Address>, opts: balancer.NewSubConnOptions): globalThis.Promise<[addrConn | $.VarRef<addrConn> | null, $.GoError]> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		if ((cc$ as ClientConn).conns == null) {
			return [null, ErrClientConnClosing]
		}

		let ac: addrConn | $.VarRef<addrConn> | null = (await (async () => { const __goscriptLiteralField5 = copyAddresses(addrs); const __goscriptLiteralField6 = await channelz2.RegisterSubChannel((cc$ as ClientConn).channelz, ""); return new addrConn({state: 0, cc: cc, addrs: __goscriptLiteralField5, scopts: opts, dopts: (cc$ as ClientConn).dopts, channelz: __goscriptLiteralField6, resetBackoff: $.makeChannel<{}>(0, {}, "both"), stateReadyChan: $.makeChannel<{}>(0, {}, "both")}) })())
		let ac$: addrConn = ac == null ? $.pointerTarget<addrConn>(ac) : (ac as any).__isVarRef === true ? (ac as any).value : (ac as any).__goValue === undefined ? (ac as any) : $.pointerTarget<addrConn>(ac)
		let __goscriptTuple6: any = context.WithCancel($.pointerValueOrNil((cc$ as ClientConn).ctx)!);
		;(ac$ as addrConn).ctx = __goscriptTuple6[0];
		;(ac$ as addrConn).cancel = __goscriptTuple6[1]
		// Start with our address set to the first address; this may be updated if
		// we connect to different addresses.
		$.pointerValue<channelz2.SubChannel>((ac$ as addrConn).channelz).ChannelMetrics.Target.Store($.fieldRef($.arrayIndex(addrs!, 0)._fields, "Addr"))

		await channelz2.AddTraceEvent(__goscript_server.logger, $.interfaceValue<channelz2.Entity | null>((ac$ as addrConn).channelz, "*channelz.SubChannel", /* @__PURE__ */ $.pointerType("channelz.SubChannel")), 0, new channelz2.TraceEvent({Desc: "Subchannel created", Severity: 1, Parent: (await (async () => { const __goscriptLiteralField7 = await fmt.Sprintf("Subchannel(id:%d) created", $.basicInterfaceValue($.pointerValue<channelz2.SubChannel>((ac$ as addrConn).channelz).ID, "int64")); return new channelz2.TraceEvent({Desc: __goscriptLiteralField7, Severity: 1}) })())}))

		// Track ac in cc. This needs to be done before any getTransport(...) is called.
		$.mapSet((cc$ as ClientConn).conns, ac, {})
		return [ac, null]
	}

	public async removeAddrConn(ac: addrConn | $.VarRef<addrConn> | null, err: $.GoError): globalThis.Promise<void> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.Lock()
		if ((cc$ as ClientConn).conns == null) {
			void (cc$ as ClientConn).mu.Unlock()
			return
		}
		$.deleteMapEntry((cc$ as ClientConn).conns, ac)
		void (cc$ as ClientConn).mu.Unlock()
		await (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as addrConn).tearDown(err) : addrConn.prototype.tearDown.call(ac, err))
	}

	public async resolveNow(o: resolver.ResolveNowOptions): globalThis.Promise<void> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).mu.RLock()
		await __goscript_resolver_wrapper.ccResolverWrapper.prototype.resolveNow.call((cc$ as ClientConn).resolverWrapper, (o).clone())
		void (cc$ as ClientConn).mu.RUnlock()
	}

	public async resolveNowLocked(o: resolver.ResolveNowOptions): globalThis.Promise<void> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		await __goscript_resolver_wrapper.ccResolverWrapper.prototype.resolveNow.call($.pointerValue<ClientConn>(cc).resolverWrapper, (o).clone())
	}

	public async updateConnectionError(err: $.GoError): globalThis.Promise<void> {
		let cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		await (cc$ as ClientConn).lceMu.Lock();
		;(cc$ as ClientConn).lastConnectionError = err
		void (cc$ as ClientConn).lceMu.Unlock()
	}

	public async updateResolverStateAndUnlock(s: resolver.State, err: $.GoError): globalThis.Promise<$.GoError> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		const __goscriptDeferCallee7 = $.functionValue(((__receiver) => () => __receiver.Fire())($.pointerValue<grpcsync.Event>((cc$ as ClientConn).firstResolveEvent)), ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo), "google.golang.org/grpc/internal/grpcsync.(*Event).Fire-fm")
		__defer.defer(async () => { await __goscriptDeferCallee7() })
		// Check if the ClientConn is already closed. Some fields (e.g.
		// balancerWrapper) are set to nil when closing the ClientConn, and could
		// cause nil pointer panic if we don't have this check.
		if ((cc$ as ClientConn).conns == null) {
			void (cc$ as ClientConn).mu.Unlock()
			return null
		}

		if (err != null) {
			// May need to apply the initial service config in case the resolver
			// doesn't support service configs, or doesn't provide a service config
			// with the new addresses.
			await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).maybeApplyDefaultServiceConfig() : ClientConn.prototype.maybeApplyDefaultServiceConfig.call(cc))

			await __goscript_balancer_wrapper.ccBalancerWrapper.prototype.resolverError.call((cc$ as ClientConn).balancerWrapper, err)

			// No addresses are valid with err set; return early.
			void (cc$ as ClientConn).mu.Unlock()
			return balancer.ErrBadResolverState
		}

		let ret: $.GoError = null! as $.GoError
		if ((cc$ as ClientConn).dopts.disableServiceConfig) {
			await channelz2.Infof(__goscript_server.logger, $.interfaceValue<channelz2.Entity | null>((cc$ as ClientConn).channelz, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel")), "ignoring service config from resolver (%v) and applying the default because service config is disabled", $.arrayToSlice<any>([$.interfaceValue(s.ServiceConfig, "*serviceconfig.ParseResult", /* @__PURE__ */ $.pointerType("serviceconfig.ParseResult"))]))
			await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).maybeApplyDefaultServiceConfig() : ClientConn.prototype.maybeApplyDefaultServiceConfig.call(cc))
		} else {
			if (s.ServiceConfig == null) {
				await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).maybeApplyDefaultServiceConfig() : ClientConn.prototype.maybeApplyDefaultServiceConfig.call(cc))
			} else {
				{
					let __goscriptTuple7: any = $.typeAssertTuple<__goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null>($.pointerValue<serviceconfig.ParseResult>(s.ServiceConfig).Config, /* @__PURE__ */ $.pointerType("grpc.ServiceConfig"))
					let sc: __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null = __goscriptTuple7[0]
					let ok = __goscriptTuple7[1]
					if (($.pointerValue<serviceconfig.ParseResult>(s.ServiceConfig).Err == null) && ok) {
						let configSelector = iresolver.GetConfigSelector((s).clone())
						if (configSelector != null) {
							if ($.len($.pointerValue<__goscript_service_config.ServiceConfig>($.mustTypeAssert<__goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null>($.pointerValue<serviceconfig.ParseResult>(s.ServiceConfig).Config, /* @__PURE__ */ $.pointerType("grpc.ServiceConfig"))).Methods) != 0) {
								await channelz2.Infof(__goscript_server.logger, $.interfaceValue<channelz2.Entity | null>((cc$ as ClientConn).channelz, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel")), "method configs in service config will be ignored due to presence of config selector", null)
							}
						} else {
							configSelector = $.interfaceValue<iresolver.ConfigSelector | null>(new defaultConfigSelector({sc: sc}), "*grpc.defaultConfigSelector", /* @__PURE__ */ $.pointerType("grpc.defaultConfigSelector"))
						}
						await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).applyServiceConfigAndBalancer(sc, configSelector) : ClientConn.prototype.applyServiceConfigAndBalancer.call(cc, sc, configSelector))
					} else {
						ret = balancer.ErrBadResolverState
						if ((cc$ as ClientConn).sc == null) {
							// Apply the failing LB only if we haven't received valid service config
							// from the name resolver in the past.
							await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).applyFailingLBLocked(s.ServiceConfig) : ClientConn.prototype.applyFailingLBLocked.call(cc, s.ServiceConfig))
							void (cc$ as ClientConn).mu.Unlock()
							return ret
						}
					}
				}
			}
		}

		let balCfg: serviceconfig.LoadBalancingConfig | null = null! as serviceconfig.LoadBalancingConfig | null
		if (((cc$ as ClientConn).sc != null) && ($.pointerValue<__goscript_service_config.ServiceConfig>((cc$ as ClientConn).sc).lbConfig != null)) {
			balCfg = $.pointerValue<__goscript_service_config.ServiceConfig>((cc$ as ClientConn).sc).lbConfig
		}
		let bw: __goscript_balancer_wrapper.ccBalancerWrapper | $.VarRef<__goscript_balancer_wrapper.ccBalancerWrapper> | null = (cc$ as ClientConn).balancerWrapper
		void (cc$ as ClientConn).mu.Unlock()

		let uccsErr = await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as __goscript_balancer_wrapper.ccBalancerWrapper).updateClientConnState(new balancer.ClientConnState({ResolverState: s, BalancerConfig: balCfg})) : __goscript_balancer_wrapper.ccBalancerWrapper.prototype.updateClientConnState.call(bw, new balancer.ClientConnState({ResolverState: s, BalancerConfig: balCfg})))
		if (ret == null) {
			ret = uccsErr
		}
		return ret
	}

	public async validateTransportCredentials(): globalThis.Promise<$.GoError> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		if (((cc$ as ClientConn).dopts.copts.TransportCredentials == null) && ((cc$ as ClientConn).dopts.copts.CredsBundle == null)) {
			return errNoTransportSecurity
		}
		if (((cc$ as ClientConn).dopts.copts.TransportCredentials != null) && ((cc$ as ClientConn).dopts.copts.CredsBundle != null)) {
			return errTransportCredsAndBundle
		}
		if (((cc$ as ClientConn).dopts.copts.CredsBundle != null) && ((__goscriptAwait = $.pointerValue<Exclude<credentials.Bundle, null>>((cc$ as ClientConn).dopts.copts.CredsBundle).TransportCredentials(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == null)) {
			return errNoTransportCredsInBundle
		}
		let transportCreds = (cc$ as ClientConn).dopts.copts.TransportCredentials
		if (transportCreds == null) {
			transportCreds = (__goscriptAwait = $.pointerValue<Exclude<credentials.Bundle, null>>((cc$ as ClientConn).dopts.copts.CredsBundle).TransportCredentials(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ($.stringEqual(((__goscriptAwait = (transportCreds !== null && (transportCreds as any).__isVarRef !== true && (transportCreds as any).__goValue === undefined ? (transportCreds as Exclude<credentials.TransportCredentials, null>) : $.pointerValue<Exclude<credentials.TransportCredentials, null>>(transportCreds)).Info(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as credentials.ProtocolInfo).SecurityProtocol, "insecure")) {
			for (let __goscriptRangeTarget5 = (cc$ as ClientConn).dopts.copts.PerRPCCredentials, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
				let cd = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as credentials.PerRPCCredentials | null)
				if ((__goscriptAwait = (cd !== null && (cd as any).__isVarRef !== true && (cd as any).__goValue === undefined ? (cd as Exclude<credentials.PerRPCCredentials, null>) : $.pointerValue<Exclude<credentials.PerRPCCredentials, null>>(cd)).RequireTransportSecurity(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					return errTransportCredentialsMissing
				}
			}
		}
		return null
	}

	public async waitForResolvedAddrs(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const cc: ClientConn | $.VarRef<ClientConn> | null = this;
		const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
		// This is on the RPC path, so we use a fast path to avoid the
		// more-expensive "select" below after the resolver has returned once.
		if (grpcsync.Event.prototype.HasFired.call((cc$ as ClientConn).firstResolveEvent)) {
			return null
		}
		const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: false,
				channel: grpcsync.Event.prototype.Done.call((cc$ as ClientConn).firstResolveEvent),
				onSelected: async (__goscriptSelect2Result) => {
					return null
				}
			},
			{
				id: 1,
				isSend: false,
				channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect2Result) => {
					return istatus.Status.prototype.Err.call(await status.FromContextError((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
				}
			},
			{
				id: 2,
				isSend: false,
				channel: ((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((cc$ as ClientConn).ctx).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect2Result) => {
					return ErrClientConnClosing
				}
			}
		], false)
		if (__goscriptSelect2HasReturn) {
			return __goscriptSelect2Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"grpc.ClientConn",
		() => new ClientConn(),
		() => [$.methodSignature("CanonicalTarget", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Close", [], ["error"], true), $.methodSignature("Connect", [], [], true), $.methodSignature("GetMethodConfig", [["method", /* @__PURE__ */ $.basicType("string")]], ["serviceconfig.MethodConfig"], true), $.methodSignature("GetState", [], [/* @__PURE__ */ $.basicType("int", "connectivity.State")], true), $.methodSignature("Invoke", [["ctx", "context.Context"], ["method", /* @__PURE__ */ $.basicType("string")], ["args", { kind: $.TypeKind.Interface, methods: [] }], ["reply", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType("grpc.CallOption")]], ["error"], true), $.methodSignature("NewStream", [["ctx", "context.Context"], ["desc", /* @__PURE__ */ $.pointerType("grpc.StreamDesc")], ["method", /* @__PURE__ */ $.basicType("string")], ["opts", /* @__PURE__ */ $.sliceType("grpc.CallOption")]], ["grpc.ClientStream", "error"], true), $.methodSignature("ResetConnectBackoff", [], [], true), $.methodSignature("Target", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("WaitForStateChange", [["ctx", "context.Context"], ["sourceState", /* @__PURE__ */ $.basicType("int", "connectivity.State")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("addTraceEvent", [["msg", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("applyFailingLBLocked", [["sc", /* @__PURE__ */ $.pointerType("serviceconfig.ParseResult")]], [], true), $.methodSignature("applyServiceConfigAndBalancer", [["sc", /* @__PURE__ */ $.pointerType("grpc.ServiceConfig")], ["configSelector", "resolver.ConfigSelector"]], [], true), $.methodSignature("channelzRegistration", [["target", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("connectionError", [], ["error"], true), $.methodSignature("enterIdleMode", [], [], true), $.methodSignature("exitIdleMode", [], [["err", "error"]], true), $.methodSignature("getResolver", [["scheme", /* @__PURE__ */ $.basicType("string")]], ["resolver.Builder"], true), $.methodSignature("getServerName", [["addr", "resolver.Address"]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("getTransport", [["ctx", "context.Context"], ["failfast", /* @__PURE__ */ $.basicType("bool")], ["method", /* @__PURE__ */ $.basicType("string")]], ["transport.ClientTransport", "balancer.PickResult", "error"], true), $.methodSignature("healthCheckConfig", [], [/* @__PURE__ */ $.pointerType("grpc.healthCheckConfig")], true), $.methodSignature("incrCallsFailed", [], [], true), $.methodSignature("incrCallsStarted", [], [], true), $.methodSignature("incrCallsSucceeded", [], [], true), $.methodSignature("initAuthority", [], ["error"], true), $.methodSignature("initIdleStateLocked", [], [], true), $.methodSignature("initParsedTargetAndResolverBuilder", [], ["error"], true), $.methodSignature("maybeApplyDefaultServiceConfig", [], [], true), $.methodSignature("newAddrConnLocked", [["addrs", /* @__PURE__ */ $.sliceType("resolver.Address")], ["opts", "balancer.NewSubConnOptions"]], [/* @__PURE__ */ $.pointerType("grpc.addrConn"), "error"], true), $.methodSignature("removeAddrConn", [["ac", /* @__PURE__ */ $.pointerType("grpc.addrConn")], ["err", "error"]], [], true), $.methodSignature("resolveNow", [["o", "resolver.ResolveNowOptions"]], [], true), $.methodSignature("resolveNowLocked", [["o", "resolver.ResolveNowOptions"]], [], true), $.methodSignature("updateConnectionError", [["err", "error"]], [], true), $.methodSignature("updateResolverStateAndUnlock", [["s", "resolver.State"], ["err", "error"]], ["error"], true), $.methodSignature("validateTransportCredentials", [], ["error"], true), $.methodSignature("waitForResolvedAddrs", [["ctx", "context.Context"]], ["error"], true)],
		ClientConn,
		() => [/* @__PURE__ */ $.structField("ctx", "context.Context", [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("cancel", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), [1], 16, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("target", /* @__PURE__ */ $.basicType("string"), [2], 24, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("parsedTarget", "resolver.Target", [3], 40, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("authority", /* @__PURE__ */ $.basicType("string"), [4], 184, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("dopts", "grpc.dialOptions", [5], 200, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("channelz", /* @__PURE__ */ $.pointerType("channelz.Channel"), [6], 704, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("resolverBuilder", "resolver.Builder", [7], 712, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("idlenessMgr", /* @__PURE__ */ $.pointerType("idle.Manager"), [8], 728, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("metricsRecorderList", /* @__PURE__ */ $.pointerType("stats.MetricsRecorderList"), [9], 736, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("csMgr", /* @__PURE__ */ $.pointerType("grpc.connectivityStateManager"), [10], 744, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("pickerWrapper", /* @__PURE__ */ $.pointerType("grpc.pickerWrapper"), [11], 752, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("safeConfigSelector", "resolver.SafeConfigSelector", [12], 760, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("retryThrottler", "atomic.Value", [13], 800, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("mu", "sync.RWMutex", [14], 816, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("resolverWrapper", /* @__PURE__ */ $.pointerType("grpc.ccResolverWrapper"), [15], 840, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("balancerWrapper", /* @__PURE__ */ $.pointerType("grpc.ccBalancerWrapper"), [16], 848, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("sc", /* @__PURE__ */ $.pointerType("grpc.ServiceConfig"), [17], 856, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("conns", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("grpc.addrConn"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [18], 864, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("mkp", "keepalive.ClientParameters", [19], 872, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("firstResolveEvent", /* @__PURE__ */ $.pointerType("grpcsync.Event"), [20], 896, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("lceMu", "sync.Mutex", [21], 904, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("lastConnectionError", "error", [22], 912, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class addrConn {
	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get cancel(): (() => void) | null {
		return this._fields.cancel
	}

	public set cancel(value: (() => void) | null) {
		this._fields.cancel = value
	}

	public get cc(): ClientConn | $.VarRef<ClientConn> | null {
		return this._fields.cc
	}

	public set cc(value: ClientConn | $.VarRef<ClientConn> | null) {
		this._fields.cc = value
	}

	public get dopts(): __goscript_dialoptions.dialOptions {
		return this._fields.dopts
	}

	public set dopts(value: __goscript_dialoptions.dialOptions) {
		this._fields.dopts = value
	}

	public get acbw(): __goscript_balancer_wrapper.acBalancerWrapper | $.VarRef<__goscript_balancer_wrapper.acBalancerWrapper> | null {
		return this._fields.acbw
	}

	public set acbw(value: __goscript_balancer_wrapper.acBalancerWrapper | $.VarRef<__goscript_balancer_wrapper.acBalancerWrapper> | null) {
		this._fields.acbw = value
	}

	public get scopts(): balancer.NewSubConnOptions {
		return this._fields.scopts
	}

	public set scopts(value: balancer.NewSubConnOptions) {
		this._fields.scopts = value
	}

	// transport is set when there's a viable transport (note: ac state may not be READY as LB channel
	// health checking may require server to report healthy to set ac to READY), and is reset
	// to nil when the current transport should no longer be used to create a stream (e.g. after GoAway
	// is received, transport is closed, ac has been torn down).
	public get transport(): transport2.ClientTransport | null {
		return this._fields.transport
	}

	public set transport(value: transport2.ClientTransport | null) {
		this._fields.transport = value
	}

	// This mutex is used on the RPC path, so its usage should be minimized as
	// much as possible.
	// TODO: Find a lock-free way to retrieve the transport and state from the
	// addrConn.
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get curAddr(): resolver.Address {
		return this._fields.curAddr
	}

	public set curAddr(value: resolver.Address) {
		this._fields.curAddr = value
	}

	public get addrs(): $.Slice<resolver.Address> {
		return this._fields.addrs
	}

	public set addrs(value: $.Slice<resolver.Address>) {
		this._fields.addrs = value
	}

	// Use updateConnectivityState for updating addrConn's connectivity state.
	public get state(): connectivity.State {
		return this._fields.state
	}

	public set state(value: connectivity.State) {
		this._fields.state = value
	}

	public get stateReadyChan(): $.Channel<{}> | null {
		return this._fields.stateReadyChan
	}

	public set stateReadyChan(value: $.Channel<{}> | null) {
		this._fields.stateReadyChan = value
	}

	public get backoffIdx(): number {
		return this._fields.backoffIdx
	}

	public set backoffIdx(value: number) {
		this._fields.backoffIdx = value
	}

	public get resetBackoff(): $.Channel<{}> | null {
		return this._fields.resetBackoff
	}

	public set resetBackoff(value: $.Channel<{}> | null) {
		this._fields.resetBackoff = value
	}

	public get channelz(): channelz2.SubChannel | $.VarRef<channelz2.SubChannel> | null {
		return this._fields.channelz
	}

	public set channelz(value: channelz2.SubChannel | $.VarRef<channelz2.SubChannel> | null) {
		this._fields.channelz = value
	}

	public _fields: {
		ctx: context.Context | null
		cancel: (() => void) | null
		cc: ClientConn | $.VarRef<ClientConn> | null
		dopts: __goscript_dialoptions.dialOptions
		acbw: __goscript_balancer_wrapper.acBalancerWrapper | $.VarRef<__goscript_balancer_wrapper.acBalancerWrapper> | null
		scopts: balancer.NewSubConnOptions
		transport: transport2.ClientTransport | null
		mu: sync.Mutex
		curAddr: resolver.Address
		addrs: $.Slice<resolver.Address>
		state: connectivity.State
		stateReadyChan: $.Channel<{}> | null
		backoffIdx: number
		resetBackoff: $.Channel<{}> | null
		channelz: channelz2.SubChannel | $.VarRef<channelz2.SubChannel> | null
	}

	constructor(init?: Partial<{ctx?: context.Context | null, cancel?: (() => void) | null, cc?: ClientConn | $.VarRef<ClientConn> | null, dopts?: __goscript_dialoptions.dialOptions, acbw?: __goscript_balancer_wrapper.acBalancerWrapper | $.VarRef<__goscript_balancer_wrapper.acBalancerWrapper> | null, scopts?: balancer.NewSubConnOptions, transport?: transport2.ClientTransport | null, mu?: sync.Mutex, curAddr?: resolver.Address, addrs?: $.Slice<resolver.Address>, state?: connectivity.State, stateReadyChan?: $.Channel<{}> | null, backoffIdx?: number, resetBackoff?: $.Channel<{}> | null, channelz?: channelz2.SubChannel | $.VarRef<channelz2.SubChannel> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ctx: init?.ctx ?? (null! as context.Context | null),
			cancel: init?.cancel ?? (null! as (() => void) | null),
			cc: init?.cc ?? (null! as ClientConn | $.VarRef<ClientConn> | null),
			dopts: init?.dopts ? init.dopts.clone() : new __goscript_dialoptions.dialOptions(undefined, true),
			acbw: init?.acbw ?? (null! as __goscript_balancer_wrapper.acBalancerWrapper | $.VarRef<__goscript_balancer_wrapper.acBalancerWrapper> | null),
			scopts: init?.scopts ? init.scopts.clone() : new balancer.NewSubConnOptions(undefined, true),
			transport: init?.transport ?? (null! as transport2.ClientTransport | null),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			curAddr: init?.curAddr ? init.curAddr.clone() : new resolver.Address(undefined, true),
			addrs: init?.addrs ?? (null! as $.Slice<resolver.Address>),
			state: init?.state ?? (0 as connectivity.State),
			stateReadyChan: init?.stateReadyChan ?? (null! as $.Channel<{}> | null),
			backoffIdx: init?.backoffIdx ?? (0 as number),
			resetBackoff: init?.resetBackoff ?? (null! as $.Channel<{}> | null),
			channelz: init?.channelz ?? (null! as channelz2.SubChannel | $.VarRef<channelz2.SubChannel> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): addrConn {
		return new addrConn(this, true)
	}

	public __goscriptAssign(source: addrConn): void {
		const target = this._fields
		const values = source._fields
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.cancel = values.cancel
		target.cc = values.cc
		$.assignStruct(target.dopts, values.dopts)
		target.acbw = values.acbw
		$.assignStruct(target.scopts, values.scopts)
		target.transport = $.assignFieldValue(target.transport, values.transport, "transport.ClientTransport")
		$.assignStruct(target.mu, values.mu)
		$.assignStruct(target.curAddr, values.curAddr)
		target.addrs = values.addrs
		target.state = values.state
		target.stateReadyChan = values.stateReadyChan
		target.backoffIdx = values.backoffIdx
		target.resetBackoff = values.resetBackoff
		target.channelz = values.channelz
	}

	public async adjustParams(r: transport2.GoAwayReason): globalThis.Promise<void> {
		let ac: addrConn | $.VarRef<addrConn> | null = this;
		const ac$: addrConn = ac == null ? $.pointerTarget<addrConn>(ac) : (ac as any).__isVarRef === true ? (ac as any).value : (ac as any).__goValue === undefined ? (ac as any) : $.pointerTarget<addrConn>(ac)
		switch (r) {
			case transport2.GoAwayTooManyPings:
			{
				let v = $.int64Mul(2n, (ac$ as addrConn).dopts.copts.KeepaliveParams.Time)
				await $.pointerValue<ClientConn>((ac$ as addrConn).cc).mu.Lock()
				if (v > $.pointerValue<ClientConn>((ac$ as addrConn).cc).mkp.Time) {
					$.pointerValue<ClientConn>((ac$ as addrConn).cc).mkp.Time = v
				}
				$.pointerValue<ClientConn>((ac$ as addrConn).cc).mu.Unlock()
				break
			}
		}
	}

	public async connect(): globalThis.Promise<$.GoError> {
		const ac: addrConn | $.VarRef<addrConn> | null = this;
		const ac$: addrConn = ac == null ? $.pointerTarget<addrConn>(ac) : (ac as any).__isVarRef === true ? (ac as any).value : (ac as any).__goValue === undefined ? (ac as any) : $.pointerTarget<addrConn>(ac)
		await (ac$ as addrConn).mu.Lock()
		if ((ac$ as addrConn).state == 4) {
			if ((__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).V(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).Infof("connect called on shutdown addrConn; ignoring.", null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			void (ac$ as addrConn).mu.Unlock()
			return errConnClosing
		}
		if ((ac$ as addrConn).state != 0) {
			if ((__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).V(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).Infof("connect called on addrConn in non-idle state (%v); ignoring.", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((ac$ as addrConn).state, "connectivity.State", __goscriptStatic1(), __goscriptStatic2(), __goscriptStatic3())])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			void (ac$ as addrConn).mu.Unlock()
			return null
		}

		await (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as addrConn).resetTransportAndUnlock() : addrConn.prototype.resetTransportAndUnlock.call(ac))
		return null
	}

	public async createTransport(ctx: context.Context | null, addr: resolver.Address, copts: transport2.ConnectOptions, connectDeadline: time.Time): globalThis.Promise<$.GoError> {
		let ac: addrConn | $.VarRef<addrConn> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const ac$: addrConn = ac == null ? $.pointerTarget<addrConn>(ac) : (ac as any).__isVarRef === true ? (ac as any).value : (ac as any).__goValue === undefined ? (ac as any) : $.pointerTarget<addrConn>(ac)
		addr.ServerName = ClientConn.prototype.getServerName.call((ac$ as addrConn).cc, addr)
		let [hctx, hcancel] = context.WithCancel($.pointerValueOrNil(ctx)!)

		let onClose: ((r: transport2.GoAwayReason) => void) | null = $.functionValue(async (r: transport2.GoAwayReason): globalThis.Promise<void> => {
			using __defer = new $.DisposableStack()
			await (ac$ as addrConn).mu.Lock()
			const __goscriptDeferCallee8 = $.functionValue(((__receiver) => () => __receiver.Unlock())((ac$ as addrConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee8() })
			// adjust params based on GoAwayReason
			await (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as addrConn).adjustParams(r) : addrConn.prototype.adjustParams.call(ac, r))
			if ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) {
				// Already shut down or connection attempt canceled.  tearDown() or
				// updateAddrs() already cleared the transport and canceled hctx
				// via ac.ctx, and we expected this connection to be closed, so do
				// nothing here.
				return
			}
			void (__goscriptAwait = hcancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ((ac$ as addrConn).transport == null) {
				// We're still connecting to this address, which could error.  Do
				// not update the connectivity state or resolve; these will happen
				// at the end of the tryAllAddrs connection loop in the event of an
				// error.
				return
			}
			;(ac$ as addrConn).transport = null
			// Refresh the name resolver on any connection loss.
			await ClientConn.prototype.resolveNow.call((ac$ as addrConn).cc, new resolver.ResolveNowOptions(undefined, true))
			// Always go idle and wait for the LB policy to initiate a new
			// connection attempt.
			await (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as addrConn).updateConnectivityState(0, null) : addrConn.prototype.updateConnectivityState.call(ac, 0, null))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint8", "transport.GoAwayReason")], results: [] } as $.FunctionTypeInfo))

		let [connectCtx, cancel] = context.WithDeadline($.pointerValueOrNil(ctx)!, $.markAsStructValue($.cloneStructValue(connectDeadline)))
		const __goscriptDeferCallee9 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee9!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		copts.ChannelzParent = (ac$ as addrConn).channelz

		let [newTr, err] = await transport2.NewClientTransport(connectCtx, $.pointerValue<ClientConn>((ac$ as addrConn).cc).ctx, addr, copts, onClose)
		if (err != null) {
			if ((__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).V(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).Infof("Creating new client transport to %q: %v", $.arrayToSlice<any>([$.interfaceValue((addr).clone(), "resolver.Address", "resolver.Address"), (err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			// newTr is either nil, or closed.
			void (__goscriptAwait = hcancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await channelz2.Warningf(__goscript_server.logger, $.interfaceValue<channelz2.Entity | null>((ac$ as addrConn).channelz, "*channelz.SubChannel", /* @__PURE__ */ $.pointerType("channelz.SubChannel")), "grpc: addrConn.createTransport failed to connect to %s. Err: %v", $.arrayToSlice<any>([$.interfaceValue((addr).clone(), "resolver.Address", "resolver.Address"), (err as any)]))
			return err
		}

		await (ac$ as addrConn).mu.Lock()
		const __goscriptDeferCallee10 = $.functionValue(((__receiver) => () => __receiver.Unlock())((ac$ as addrConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee10() })
		if ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) {
			// This can happen if the subConn was removed while in `Connecting`
			// state. tearDown() would have set the state to `Shutdown`, but
			// would not have closed the transport since ac.transport would not
			// have been set at that point.
			//
			// We run this in a goroutine because newTr.Close() calls onClose()
			// inline, which requires locking ac.mu.
			//
			// The error we pass to Close() is immaterial since there are no open
			// streams at this point, so no trailers with error details will be sent
			// out. We just need to pass a non-nil error.
			//
			// This can also happen when updateAddrs is called during a connection
			// attempt.
			const __goscriptDeferCallee11 = $.functionValue(((__receiver) => (err: $.GoError) => __receiver.Close(err))((newTr !== null && (newTr as any).__isVarRef !== true && (newTr as any).__goValue === undefined ? (newTr as Exclude<transport2.ClientTransport, null>) : $.pointerValue<Exclude<transport2.ClientTransport, null>>(newTr))), ({ kind: $.TypeKind.Function, params: ["error"], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc/internal/transport.ClientTransport.Close-fm")
			const __goscriptDeferArg0 = $.interfaceValue<$.GoError>(($.pointerValue<transport2.ConnectionError>(transport2.ErrConnClosing)).clone(), "transport.ConnectionError", "transport.ConnectionError")
			queueMicrotask(async () => { (__goscriptAwait = __goscriptDeferCallee11(__goscriptDeferArg0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			return null
		}
		if ((__goscriptAwait = (hctx !== null && (hctx as any).__isVarRef !== true && (hctx as any).__goValue === undefined ? (hctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(hctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) {
			// onClose was already called for this connection, but the connection
			// was successfully established first.  Consider it a success and set
			// the new state to Idle.
			await (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as addrConn).updateConnectivityState(0, null) : addrConn.prototype.updateConnectivityState.call(ac, 0, null))
			return null
		}
		$.assignStruct((ac$ as addrConn).curAddr, addr);
		;(ac$ as addrConn).transport = newTr
		await (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as addrConn).startHealthCheck(hctx) : addrConn.prototype.startHealthCheck.call(ac, hctx))
		return null
	}

	public async getReadyTransport(): globalThis.Promise<transport2.ClientTransport | null> {
		const ac: addrConn | $.VarRef<addrConn> | null = this;
		using __defer = new $.DisposableStack()
		const ac$: addrConn = ac == null ? $.pointerTarget<addrConn>(ac) : (ac as any).__isVarRef === true ? (ac as any).value : (ac as any).__goValue === undefined ? (ac as any) : $.pointerTarget<addrConn>(ac)
		await (ac$ as addrConn).mu.Lock()
		const __goscriptDeferCallee12 = $.functionValue(((__receiver) => () => __receiver.Unlock())((ac$ as addrConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee12() })
		if ((ac$ as addrConn).state == 2) {
			return (ac$ as addrConn).transport
		}
		return null
	}

	public async getTransport(ctx: context.Context | null): globalThis.Promise<[transport2.ClientTransport | null, $.GoError]> {
		const ac: addrConn | $.VarRef<addrConn> | null = this;
		const ac$: addrConn = ac == null ? $.pointerTarget<addrConn>(ac) : (ac as any).__isVarRef === true ? (ac as any).value : (ac as any).__goValue === undefined ? (ac as any) : $.pointerTarget<addrConn>(ac)
		while ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == null) {
			await (ac$ as addrConn).mu.Lock()
			let t = (ac$ as addrConn).transport
			let state = (ac$ as addrConn).state
			let sc: $.Channel<{}> | null = (ac$ as addrConn).stateReadyChan
			void (ac$ as addrConn).mu.Unlock()
			if (state == 2) {
				return [t, null]
			}
			if (state == 4) {
				return [null, await status.Errorf(14, "SubConn shutting down", null)]
			}

			const [__goscriptSelect3HasReturn, __goscriptSelect3Value] = await $.selectStatement<any, [transport2.ClientTransport | null, $.GoError]>([
				{
					id: 0,
					isSend: false,
					channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				},
				{
					id: 1,
					isSend: false,
					channel: sc,
				}
			], false)
			if (__goscriptSelect3HasReturn) {
				return __goscriptSelect3Value
			}
		}
		return [null, istatus.Status.prototype.Err.call(await status.FromContextError((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
	}

	public incrCallsFailed(): void {
		const ac: addrConn | $.VarRef<addrConn> | null = this;
		$.pointerValue<channelz2.SubChannel>($.pointerValue<addrConn>(ac).channelz).ChannelMetrics.CallsFailed.Add(1n)
	}

	public incrCallsStarted(): void {
		const ac: addrConn | $.VarRef<addrConn> | null = this;
		const ac$: addrConn = ac == null ? $.pointerTarget<addrConn>(ac) : (ac as any).__isVarRef === true ? (ac as any).value : (ac as any).__goValue === undefined ? (ac as any) : $.pointerTarget<addrConn>(ac)
		$.pointerValue<channelz2.SubChannel>((ac$ as addrConn).channelz).ChannelMetrics.CallsStarted.Add(1n)
		$.pointerValue<channelz2.SubChannel>((ac$ as addrConn).channelz).ChannelMetrics.LastCallStartedTimestamp.Store($.markAsStructValue($.cloneStructValue(time.Now())).UnixNano())
	}

	public incrCallsSucceeded(): void {
		const ac: addrConn | $.VarRef<addrConn> | null = this;
		$.pointerValue<channelz2.SubChannel>($.pointerValue<addrConn>(ac).channelz).ChannelMetrics.CallsSucceeded.Add(1n)
	}

	public async resetConnectBackoff(): globalThis.Promise<void> {
		let ac: addrConn | $.VarRef<addrConn> | null = this;
		const ac$: addrConn = ac == null ? $.pointerTarget<addrConn>(ac) : (ac as any).__isVarRef === true ? (ac as any).value : (ac as any).__goValue === undefined ? (ac as any) : $.pointerTarget<addrConn>(ac)
		await (ac$ as addrConn).mu.Lock()
		void (ac$ as addrConn).resetBackoff!.close();
		;(ac$ as addrConn).backoffIdx = 0;
		;(ac$ as addrConn).resetBackoff = $.makeChannel<{}>(0, {}, "both")
		void (ac$ as addrConn).mu.Unlock()
	}

	public async resetTransportAndUnlock(): globalThis.Promise<void> {
		let ac: addrConn | $.VarRef<addrConn> | null = this;
		const ac$: addrConn = ac == null ? $.pointerTarget<addrConn>(ac) : (ac as any).__isVarRef === true ? (ac as any).value : (ac as any).__goValue === undefined ? (ac as any) : $.pointerTarget<addrConn>(ac)
		let acCtx = (ac$ as addrConn).ctx
		if ((__goscriptAwait = (acCtx !== null && (acCtx as any).__isVarRef !== true && (acCtx as any).__goValue === undefined ? (acCtx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(acCtx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) {
			void (ac$ as addrConn).mu.Unlock()
			return
		}

		let addrs: $.Slice<resolver.Address> = (ac$ as addrConn).addrs
		let backoffFor = (__goscriptAwait = $.pointerValue<Exclude<backoff.Strategy, null>>((ac$ as addrConn).dopts.bs).Backoff((ac$ as addrConn).backoffIdx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		// This will be the duration that dial gets to finish.
		let dialDuration = 20000000000n
		if ((ac$ as addrConn).dopts.minConnectTimeout != null) {
			dialDuration = (__goscriptAwait = (ac$ as addrConn).dopts.minConnectTimeout!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		if (dialDuration < backoffFor) {
			// Give dial more time as we keep failing to connect.
			dialDuration = backoffFor
		}
		// We can potentially spend all the time trying the first address, and
		// if the server accepts the connection and then hangs, the following
		// addresses will never be tried.
		//
		// The spec doesn't mention what should be done for multiple addresses.
		// https://github.com/grpc/grpc/blob/master/doc/connection-backoff.md#proposed-backoff-algorithm
		let connectDeadline = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time.Now())).Add(dialDuration)))

		await (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as addrConn).updateConnectivityState(1, null) : addrConn.prototype.updateConnectivityState.call(ac, 1, null))
		void (ac$ as addrConn).mu.Unlock()

		{
			let err = await (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as addrConn).tryAllAddrs(acCtx, addrs, connectDeadline) : addrConn.prototype.tryAllAddrs.call(ac, acCtx, addrs, connectDeadline))
			if (err != null) {
				await ClientConn.prototype.resolveNow.call((ac$ as addrConn).cc, new resolver.ResolveNowOptions(undefined, true))
				await (ac$ as addrConn).mu.Lock()
				if ((__goscriptAwait = (acCtx !== null && (acCtx as any).__isVarRef !== true && (acCtx as any).__goValue === undefined ? (acCtx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(acCtx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) {
					// addrConn was torn down.
					void (ac$ as addrConn).mu.Unlock()
					return
				}
				// After exhausting all addresses, the addrConn enters
				// TRANSIENT_FAILURE.
				await (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as addrConn).updateConnectivityState(3, err) : addrConn.prototype.updateConnectivityState.call(ac, 3, err))

				// Backoff.
				let b: $.Channel<{}> | null = (ac$ as addrConn).resetBackoff
				void (ac$ as addrConn).mu.Unlock()

				let timer: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer(backoffFor)
				const [__goscriptSelect4HasReturn, __goscriptSelect4Value] = await $.selectStatement<any, void>([
					{
						id: 0,
						isSend: false,
						channel: $.pointerValue<time.Timer>(timer).C,
						onSelected: async (__goscriptSelect4Result) => {
							await (ac$ as addrConn).mu.Lock();
							;(ac$ as addrConn).backoffIdx++
							void (ac$ as addrConn).mu.Unlock()
						}
					},
					{
						id: 1,
						isSend: false,
						channel: b,
						onSelected: async (__goscriptSelect4Result) => {
							time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(timer))
						}
					},
					{
						id: 2,
						isSend: false,
						channel: ((__goscriptAwait = (acCtx !== null && (acCtx as any).__isVarRef !== true && (acCtx as any).__goValue === undefined ? (acCtx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(acCtx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
						onSelected: async (__goscriptSelect4Result) => {
							time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(timer))
							return $.selectVoidReturn()
						}
					}
				], false)
				if (__goscriptSelect4HasReturn) {
					return __goscriptSelect4Value
				}

				await (ac$ as addrConn).mu.Lock()
				if ((__goscriptAwait = (acCtx !== null && (acCtx as any).__isVarRef !== true && (acCtx as any).__goValue === undefined ? (acCtx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(acCtx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == null) {
					await (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as addrConn).updateConnectivityState(0, err) : addrConn.prototype.updateConnectivityState.call(ac, 0, err))
				}
				void (ac$ as addrConn).mu.Unlock()
				return
			}
		}
		// Success; reset backoff.
		await (ac$ as addrConn).mu.Lock();
		;(ac$ as addrConn).backoffIdx = 0
		void (ac$ as addrConn).mu.Unlock()
	}

	public async startHealthCheck(ctx: context.Context | null): globalThis.Promise<void> {
		const ac: addrConn | $.VarRef<addrConn> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const ac$: addrConn = ac == null ? $.pointerTarget<addrConn>(ac) : (ac as any).__isVarRef === true ? (ac as any).value : (ac as any).__goValue === undefined ? (ac as any) : $.pointerTarget<addrConn>(ac)
		let healthcheckManagingState: boolean = false
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			if (!healthcheckManagingState) {
				await (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as addrConn).updateConnectivityState(2, null) : addrConn.prototype.updateConnectivityState.call(ac, 2, null))
			}
		})() })

		if ($.pointerValue<ClientConn>((ac$ as addrConn).cc).dopts.disableHealthCheck) {
			return
		}
		let __goscriptShadow4: __goscript_service_config.healthCheckConfig | $.VarRef<__goscript_service_config.healthCheckConfig> | null = await ClientConn.prototype.healthCheckConfig.call((ac$ as addrConn).cc)
		if (__goscriptShadow4 == null) {
			return
		}
		if (!(ac$ as addrConn).scopts.HealthCheckEnabled) {
			return
		}
		let healthCheckFunc = $.pointerValue<ClientConn>((ac$ as addrConn).cc).dopts.healthCheckFunc
		if (healthCheckFunc == null) {
			// The health package is not imported to set health check function.
			//
			// TODO: add a link to the health check doc in the error message.
			await channelz2.Error(__goscript_server.logger, $.interfaceValue<channelz2.Entity | null>((ac$ as addrConn).channelz, "*channelz.SubChannel", /* @__PURE__ */ $.pointerType("channelz.SubChannel")), $.arrayToSlice<any>(["Health check is requested but health check function is not set."]))
			return
		}

		healthcheckManagingState = true

		// Set up the health check helper functions.
		let currentTr = (ac$ as addrConn).transport
		let newStream: ((method: string) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null = $.functionValue(async (method: string): globalThis.Promise<[any, $.GoError]> => {
			await (ac$ as addrConn).mu.Lock()
			if (!$.comparableEqual((ac$ as addrConn).transport, currentTr)) {
				void (ac$ as addrConn).mu.Unlock()
				return [null, status.Error(1, "the provided transport is no longer valid to use")]
			}
			void (ac$ as addrConn).mu.Unlock()
			const __goscriptReturn12 = await __goscript_stream.newNonRetryClientStream(ctx, new __goscript_stream.StreamDesc({ServerStreams: true}), method, currentTr, ac, null)
			return [(__goscriptReturn12[0] as any), __goscriptReturn12[1]]
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo))
		let setConnectivityState: ((s: connectivity.State, lastErr: $.GoError) => void) | null = $.functionValue(async (s: connectivity.State, lastErr: $.GoError): globalThis.Promise<void> => {
			using __defer = new $.DisposableStack()
			await (ac$ as addrConn).mu.Lock()
			const __goscriptDeferCallee13 = $.functionValue(((__receiver) => () => __receiver.Unlock())((ac$ as addrConn).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee13() })
			if (!$.comparableEqual((ac$ as addrConn).transport, currentTr)) {
				return
			}
			await (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as addrConn).updateConnectivityState(s, lastErr) : addrConn.prototype.updateConnectivityState.call(ac, s, lastErr))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int", "connectivity.State"), "error"], results: [] } as $.FunctionTypeInfo))
		// Start the health checking stream.
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			let err = await $.pointerValue<ClientConn>((ac$ as addrConn).cc).dopts.healthCheckFunc!(ctx, newStream, setConnectivityState, $.pointerValue<__goscript_service_config.healthCheckConfig>(__goscriptShadow4).ServiceName)
			if (err != null) {
				if (await status.Code(err) == 12) {
					await channelz2.Error(__goscript_server.logger, $.interfaceValue<channelz2.Entity | null>((ac$ as addrConn).channelz, "*channelz.SubChannel", /* @__PURE__ */ $.pointerType("channelz.SubChannel")), $.arrayToSlice<any>(["Subchannel health check is unimplemented at server side, thus health check is disabled"]))
				} else {
					await channelz2.Errorf(__goscript_server.logger, $.interfaceValue<channelz2.Entity | null>((ac$ as addrConn).channelz, "*channelz.SubChannel", /* @__PURE__ */ $.pointerType("channelz.SubChannel")), "Health checking failed: %v", $.arrayToSlice<any>([(err as any)]))
				}
			}
		})() })
	}

	public async tearDown(err: $.GoError): globalThis.Promise<void> {
		let ac: addrConn | $.VarRef<addrConn> | null = this;
		const ac$: addrConn = ac == null ? $.pointerTarget<addrConn>(ac) : (ac as any).__isVarRef === true ? (ac as any).value : (ac as any).__goValue === undefined ? (ac as any) : $.pointerTarget<addrConn>(ac)
		await (ac$ as addrConn).mu.Lock()
		if ((ac$ as addrConn).state == 4) {
			void (ac$ as addrConn).mu.Unlock()
			return
		}
		let curTr = (ac$ as addrConn).transport;
		;(ac$ as addrConn).transport = null
		// We have to set the state to Shutdown before anything else to prevent races
		// between setting the state and logic that waits on context cancellation / etc.
		await (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as addrConn).updateConnectivityState(4, null) : addrConn.prototype.updateConnectivityState.call(ac, 4, null))
		void (__goscriptAwait = (ac$ as addrConn).cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		$.assignStruct((ac$ as addrConn).curAddr, new resolver.Address(undefined, true))

		await channelz2.AddTraceEvent(__goscript_server.logger, $.interfaceValue<channelz2.Entity | null>((ac$ as addrConn).channelz, "*channelz.SubChannel", /* @__PURE__ */ $.pointerType("channelz.SubChannel")), 0, new channelz2.TraceEvent({Desc: "Subchannel deleted", Severity: 1, Parent: (await (async () => { const __goscriptLiteralField8 = await fmt.Sprintf("Subchannel(id:%d) deleted", $.basicInterfaceValue($.pointerValue<channelz2.SubChannel>((ac$ as addrConn).channelz).ID, "int64")); return new channelz2.TraceEvent({Desc: __goscriptLiteralField8, Severity: 1}) })())}))
		// TraceEvent needs to be called before RemoveEntry, as TraceEvent may add
		// trace reference to the entity being deleted, and thus prevent it from
		// being deleted right away.
		await channelz2.RemoveEntry($.pointerValue<channelz2.SubChannel>((ac$ as addrConn).channelz).ID)
		void (ac$ as addrConn).mu.Unlock()

		// We have to release the lock before the call to GracefulClose/Close here
		// because both of them call onClose(), which requires locking ac.mu.
		if (curTr != null) {
			if ($.comparableEqual(err, errConnDrain)) {
				// Close the transport gracefully when the subConn is being shutdown.
				//
				// GracefulClose() may be executed multiple times if:
				// - multiple GoAway frames are received from the server
				// - there are concurrent name resolver or balancer triggered
				//   address removal and GoAway
				void (__goscriptAwait = (curTr !== null && (curTr as any).__isVarRef !== true && (curTr as any).__goValue === undefined ? (curTr as Exclude<transport2.ClientTransport, null>) : $.pointerValue<Exclude<transport2.ClientTransport, null>>(curTr)).GracefulClose(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				// Hard close the transport when the channel is entering idle or is
				// being shutdown. In the case where the channel is being shutdown,
				// closing of transports is also taken care of by cancellation of cc.ctx.
				// But in the case where the channel is entering idle, we need to
				// explicitly close the transports here. Instead of distinguishing
				// between these two cases, it is simpler to close the transport
				// unconditionally here.
				void (__goscriptAwait = (curTr !== null && (curTr as any).__isVarRef !== true && (curTr as any).__goValue === undefined ? (curTr as Exclude<transport2.ClientTransport, null>) : $.pointerValue<Exclude<transport2.ClientTransport, null>>(curTr)).Close(err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	}

	public async tryAllAddrs(ctx: context.Context | null, addrs: $.Slice<resolver.Address>, connectDeadline: time.Time): globalThis.Promise<$.GoError> {
		let ac: addrConn | $.VarRef<addrConn> | null = this;
		const ac$: addrConn = ac == null ? $.pointerTarget<addrConn>(ac) : (ac as any).__isVarRef === true ? (ac as any).value : (ac as any).__goValue === undefined ? (ac as any) : $.pointerTarget<addrConn>(ac)
		let firstConnErr: $.GoError = null! as $.GoError
		for (let __goscriptRangeTarget6 = addrs, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let addr = ((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as resolver.Address)).clone()
			$.pointerValue<channelz2.SubChannel>((ac$ as addrConn).channelz).ChannelMetrics.Target.Store($.fieldRef(addr._fields, "Addr"))
			if ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) {
				return errConnClosing
			}
			await (ac$ as addrConn).mu.Lock()

			await $.pointerValue<ClientConn>((ac$ as addrConn).cc).mu.RLock()
			$.assignStruct((ac$ as addrConn).dopts.copts.KeepaliveParams, $.pointerValue<ClientConn>((ac$ as addrConn).cc).mkp)
			$.pointerValue<ClientConn>((ac$ as addrConn).cc).mu.RUnlock()

			let copts = ((ac$ as addrConn).dopts.copts).clone()
			if ((ac$ as addrConn).scopts.CredsBundle != null) {
				copts.CredsBundle = (ac$ as addrConn).scopts.CredsBundle
			}
			void (ac$ as addrConn).mu.Unlock()

			await channelz2.Infof(__goscript_server.logger, $.interfaceValue<channelz2.Entity | null>((ac$ as addrConn).channelz, "*channelz.SubChannel", /* @__PURE__ */ $.pointerType("channelz.SubChannel")), "Subchannel picks a new address %q to connect", $.arrayToSlice<any>([addr.Addr]))

			let err = await (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as addrConn).createTransport(ctx, (addr).clone(), (copts).clone(), $.markAsStructValue($.cloneStructValue(connectDeadline))) : addrConn.prototype.createTransport.call(ac, ctx, (addr).clone(), (copts).clone(), $.markAsStructValue($.cloneStructValue(connectDeadline))))
			if (err == null) {
				return null
			}
			if (firstConnErr == null) {
				firstConnErr = err
			}
			await ClientConn.prototype.updateConnectionError.call((ac$ as addrConn).cc, err)
		}

		// Couldn't connect to any address.
		return firstConnErr
	}

	public async updateAddrs(addrs: $.Slice<resolver.Address>): globalThis.Promise<void> {
		let ac: addrConn | $.VarRef<addrConn> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const ac$: addrConn = ac == null ? $.pointerTarget<addrConn>(ac) : (ac as any).__isVarRef === true ? (ac as any).value : (ac as any).__goValue === undefined ? (ac as any) : $.pointerTarget<addrConn>(ac)
		addrs = copyAddresses(addrs)
		let limit = $.sliceLen(addrs)
		if (limit > 5) {
			limit = 5
		}
		await channelz2.Infof(__goscript_server.logger, $.interfaceValue<channelz2.Entity | null>((ac$ as addrConn).channelz, "*channelz.SubChannel", /* @__PURE__ */ $.pointerType("channelz.SubChannel")), "addrConn: updateAddrs addrs (%d of %d): %v", $.arrayToSlice<any>([$.basicInterfaceValue(limit, "int"), $.basicInterfaceValue($.sliceLen(addrs), "int"), $.interfaceValue($.goSlice(addrs, undefined, limit), "[]resolver.Address", /* @__PURE__ */ $.sliceType("resolver.Address"))]))

		await (ac$ as addrConn).mu.Lock()
		if (await equalAddressesIgnoringBalAttributes((ac$ as addrConn).addrs, addrs)) {
			void (ac$ as addrConn).mu.Unlock()
			return
		}

		;(ac$ as addrConn).addrs = addrs

		if ((((ac$ as addrConn).state == 4) || ((ac$ as addrConn).state == 3)) || ((ac$ as addrConn).state == 0)) {
			// We were not connecting, so do nothing but update the addresses.
			void (ac$ as addrConn).mu.Unlock()
			return
		}

		if ((ac$ as addrConn).state == 2) {
			// Try to find the connected address.
			for (let __goscriptRangeTarget7 = addrs, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
				let a = $.varRef(((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as resolver.Address)).clone())
				a.value.ServerName = ClientConn.prototype.getServerName.call((ac$ as addrConn).cc, a.value)
				if (await equalAddressIgnoringBalAttributes(a, $.fieldRef((ac$ as addrConn)._fields, "curAddr"))) {
					// We are connected to a valid address, so do nothing but
					// update the addresses.
					void (ac$ as addrConn).mu.Unlock()
					return
				}
			}
		}

		// We are either connected to the wrong address or currently connecting.
		// Stop the current iteration and restart.

		void (__goscriptAwait = (ac$ as addrConn).cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let __goscriptTuple8: any = context.WithCancel($.pointerValueOrNil($.pointerValue<ClientConn>((ac$ as addrConn).cc).ctx)!);
		;(ac$ as addrConn).ctx = __goscriptTuple8[0];
		;(ac$ as addrConn).cancel = __goscriptTuple8[1]

		// We have to defer here because GracefulClose => onClose, which requires
		// locking ac.mu.
		if ((ac$ as addrConn).transport != null) {
			const __goscriptDeferCallee14 = $.functionValue(((__receiver) => () => __receiver.GracefulClose())($.pointerValue<Exclude<transport2.ClientTransport, null>>((ac$ as addrConn).transport)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc/internal/transport.ClientTransport.GracefulClose-fm")
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee14(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) });
			;(ac$ as addrConn).transport = null
		}

		if ($.sliceLen(addrs) == 0) {
			await (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as addrConn).updateConnectivityState(0, null) : addrConn.prototype.updateConnectivityState.call(ac, 0, null))
		}

		// Since we were connecting/connected, we should start a new connection
		// attempt.
		const __goscriptDeferCallee15 = $.functionValue(((__receiver) => () => __receiver.resetTransportAndUnlock())((ac$ as addrConn)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc.(*addrConn).resetTransportAndUnlock-fm")
		queueMicrotask(async () => { await __goscriptDeferCallee15() })
	}

	public async updateConnectivityState(__goscriptParam3: connectivity.State, lastErr: $.GoError): globalThis.Promise<void> {
		let ac: addrConn | $.VarRef<addrConn> | null = this;
		let s: $.VarRef<connectivity.State> = $.varRef(__goscriptParam3)
		const ac$: addrConn = ac == null ? $.pointerTarget<addrConn>(ac) : (ac as any).__isVarRef === true ? (ac as any).value : (ac as any).__goValue === undefined ? (ac as any) : $.pointerTarget<addrConn>(ac)
		if ((ac$ as addrConn).state == s.value) {
			return
		}
		;(ac$ as addrConn).state = s.value
		$.pointerValue<channelz2.SubChannel>((ac$ as addrConn).channelz).ChannelMetrics.State.Store(s)
		if (lastErr == null) {
			await channelz2.Infof(__goscript_server.logger, $.interfaceValue<channelz2.Entity | null>((ac$ as addrConn).channelz, "*channelz.SubChannel", /* @__PURE__ */ $.pointerType("channelz.SubChannel")), "Subchannel Connectivity change to %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(s.value, "connectivity.State", __goscriptStatic1(), __goscriptStatic2(), __goscriptStatic3())]))
		} else {
			await channelz2.Infof(__goscript_server.logger, $.interfaceValue<channelz2.Entity | null>((ac$ as addrConn).channelz, "*channelz.SubChannel", /* @__PURE__ */ $.pointerType("channelz.SubChannel")), "Subchannel Connectivity change to %v, last error: %s", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(s.value, "connectivity.State", __goscriptStatic1(), __goscriptStatic2(), __goscriptStatic3()), (lastErr as any)]))
		}
		await __goscript_balancer_wrapper.acBalancerWrapper.prototype.updateState.call((ac$ as addrConn).acbw, s.value, ((ac$ as addrConn).curAddr).clone(), lastErr)
	}

	static __typeInfo = $.registerStructType(
		"grpc.addrConn",
		() => new addrConn(),
		() => [$.methodSignature("adjustParams", [["r", /* @__PURE__ */ $.basicType("uint8", "transport.GoAwayReason")]], [], true), $.methodSignature("connect", [], ["error"], true), $.methodSignature("createTransport", [["ctx", "context.Context"], ["addr", "resolver.Address"], ["copts", "transport.ConnectOptions"], ["connectDeadline", "time.Time"]], ["error"], true), $.methodSignature("getReadyTransport", [], ["transport.ClientTransport"], true), $.methodSignature("getTransport", [["ctx", "context.Context"]], ["transport.ClientTransport", "error"], true), $.methodSignature("incrCallsFailed", [], [], true), $.methodSignature("incrCallsStarted", [], [], true), $.methodSignature("incrCallsSucceeded", [], [], true), $.methodSignature("resetConnectBackoff", [], [], true), $.methodSignature("resetTransportAndUnlock", [], [], true), $.methodSignature("startHealthCheck", [["ctx", "context.Context"]], [], true), $.methodSignature("tearDown", [["err", "error"]], [], true), $.methodSignature("tryAllAddrs", [["ctx", "context.Context"], ["addrs", /* @__PURE__ */ $.sliceType("resolver.Address")], ["connectDeadline", "time.Time"]], ["error"], true), $.methodSignature("updateAddrs", [["addrs", /* @__PURE__ */ $.sliceType("resolver.Address")]], [], true), $.methodSignature("updateConnectivityState", [["s", /* @__PURE__ */ $.basicType("int", "connectivity.State")], ["lastErr", "error"]], [], true)],
		addrConn,
		() => [/* @__PURE__ */ $.structField("ctx", "context.Context", [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("cancel", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), [1], 16, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("cc", /* @__PURE__ */ $.pointerType("grpc.ClientConn"), [2], 24, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("dopts", "grpc.dialOptions", [3], 32, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("acbw", /* @__PURE__ */ $.pointerType("grpc.acBalancerWrapper"), [4], 536, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("scopts", "balancer.NewSubConnOptions", [5], 544, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("transport", "transport.ClientTransport", [6], 576, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [7], 592, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("curAddr", "resolver.Address", [8], 600, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("addrs", /* @__PURE__ */ $.sliceType("resolver.Address"), [9], 664, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "connectivity.State"), [10], 688, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("stateReadyChan", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [11], 696, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("backoffIdx", /* @__PURE__ */ $.basicType("int"), [12], 704, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("resetBackoff", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [13], 712, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("channelz", /* @__PURE__ */ $.pointerType("channelz.SubChannel"), [14], 720, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class retryThrottler {
	public get max(): number {
		return this._fields.max
	}

	public set max(value: number) {
		this._fields.max = value
	}

	public get thresh(): number {
		return this._fields.thresh
	}

	public set thresh(value: number) {
		this._fields.thresh = value
	}

	public get ratio(): number {
		return this._fields.ratio
	}

	public set ratio(value: number) {
		this._fields.ratio = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get tokens(): number {
		return this._fields.tokens
	}

	public set tokens(value: number) {
		this._fields.tokens = value
	}

	public _fields: {
		max: number
		thresh: number
		ratio: number
		mu: sync.Mutex
		tokens: number
	}

	constructor(init?: Partial<{max?: number, thresh?: number, ratio?: number, mu?: sync.Mutex, tokens?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			max: init?.max ?? (0 as number),
			thresh: init?.thresh ?? (0 as number),
			ratio: init?.ratio ?? (0 as number),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			tokens: init?.tokens ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): retryThrottler {
		return new retryThrottler(this, true)
	}

	public __goscriptAssign(source: retryThrottler): void {
		const target = this._fields
		const values = source._fields
		target.max = values.max
		target.thresh = values.thresh
		target.ratio = values.ratio
		$.assignStruct(target.mu, values.mu)
		target.tokens = values.tokens
	}

	public async successfulRPC(): globalThis.Promise<void> {
		let rt: retryThrottler | $.VarRef<retryThrottler> | null = this;
		using __defer = new $.DisposableStack()
		const rt$: retryThrottler = rt == null ? $.pointerTarget<retryThrottler>(rt) : (rt as any).__isVarRef === true ? (rt as any).value : (rt as any).__goValue === undefined ? (rt as any) : $.pointerTarget<retryThrottler>(rt)
		if (rt == null) {
			return
		}
		await (rt$ as retryThrottler).mu.Lock()
		const __goscriptDeferCallee16 = $.functionValue(((__receiver) => () => __receiver.Unlock())((rt$ as retryThrottler).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee16() });
		;(rt$ as retryThrottler).tokens = (rt$ as retryThrottler).tokens + ((rt$ as retryThrottler).ratio)
		if ((rt$ as retryThrottler).tokens > (rt$ as retryThrottler).max) {
			;(rt$ as retryThrottler).tokens = (rt$ as retryThrottler).max
		}
	}

	public async throttle(): globalThis.Promise<boolean> {
		let rt: retryThrottler | $.VarRef<retryThrottler> | null = this;
		using __defer = new $.DisposableStack()
		const rt$: retryThrottler = rt == null ? $.pointerTarget<retryThrottler>(rt) : (rt as any).__isVarRef === true ? (rt as any).value : (rt as any).__goValue === undefined ? (rt as any) : $.pointerTarget<retryThrottler>(rt)
		if (rt == null) {
			return false
		}
		await (rt$ as retryThrottler).mu.Lock()
		const __goscriptDeferCallee17 = $.functionValue(((__receiver) => () => __receiver.Unlock())((rt$ as retryThrottler).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee17() });
		;(rt$ as retryThrottler).tokens--
		if ((rt$ as retryThrottler).tokens < 0) {
			;(rt$ as retryThrottler).tokens = 0
		}
		return (rt$ as retryThrottler).tokens <= (rt$ as retryThrottler).thresh
	}

	static __typeInfo = $.registerStructType(
		"grpc.retryThrottler",
		() => new retryThrottler(),
		() => [$.methodSignature("successfulRPC", [], [], true), $.methodSignature("throttle", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		retryThrottler,
		() => [/* @__PURE__ */ $.structField("max", /* @__PURE__ */ $.basicType("float64"), [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("thresh", /* @__PURE__ */ $.basicType("float64"), [1], 8, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("ratio", /* @__PURE__ */ $.basicType("float64"), [2], 16, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [3], 24, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("tokens", /* @__PURE__ */ $.basicType("float64"), [4], 32, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export const minConnectTimeout: time.Duration = 20000000000n

export const defaultClientMaxReceiveMessageSize: number = 4194304

export const defaultClientMaxSendMessageSize: number = 2147483647

export const defaultWriteBufSize: number = 32768

export const defaultReadBufSize: number = 32768

export let ErrClientConnClosing: $.GoError = await status.Error(1, "grpc: the client connection is closing")

export function __goscript_set_ErrClientConnClosing(__goscriptValue: $.GoError): void {
	ErrClientConnClosing = __goscriptValue
}

export let errConnDrain: $.GoError = errors.New("grpc: the connection is drained")

export function __goscript_set_errConnDrain(__goscriptValue: $.GoError): void {
	errConnDrain = __goscriptValue
}

export let errConnClosing: $.GoError = errors.New("grpc: the connection is closing")

export function __goscript_set_errConnClosing(__goscriptValue: $.GoError): void {
	errConnClosing = __goscriptValue
}

export let errConnIdling: $.GoError = errors.New("grpc: the connection is closing due to channel idleness")

export function __goscript_set_errConnIdling(__goscriptValue: $.GoError): void {
	errConnIdling = __goscriptValue
}

export let invalidDefaultServiceConfigErrPrefix: string = "grpc: the provided default service config is invalid"

export function __goscript_set_invalidDefaultServiceConfigErrPrefix(__goscriptValue: string): void {
	invalidDefaultServiceConfigErrPrefix = __goscriptValue
}

export let PickFirstBalancerName: string = pickfirst.Name

export function __goscript_set_PickFirstBalancerName(__goscriptValue: string): void {
	PickFirstBalancerName = __goscriptValue
}

export let errNoTransportSecurity: $.GoError = errors.New("grpc: no transport security set (use grpc.WithTransportCredentials(insecure.NewCredentials()) explicitly or set credentials)")

export function __goscript_set_errNoTransportSecurity(__goscriptValue: $.GoError): void {
	errNoTransportSecurity = __goscriptValue
}

export let errTransportCredsAndBundle: $.GoError = errors.New("grpc: credentials.Bundle may not be used with individual TransportCredentials")

export function __goscript_set_errTransportCredsAndBundle(__goscriptValue: $.GoError): void {
	errTransportCredsAndBundle = __goscriptValue
}

export let errNoTransportCredsInBundle: $.GoError = errors.New("grpc: credentials.Bundle must return non-nil transport credentials")

export function __goscript_set_errNoTransportCredsInBundle(__goscriptValue: $.GoError): void {
	errNoTransportCredsInBundle = __goscriptValue
}

export let errTransportCredentialsMissing: $.GoError = errors.New("grpc: the credentials require transport level security (use grpc.WithTransportCredentials() to set)")

export function __goscript_set_errTransportCredentialsMissing(__goscriptValue: $.GoError): void {
	errTransportCredentialsMissing = __goscriptValue
}

export async function NewClient(target: string, opts: $.Slice<__goscript_dialoptions.DialOption | null>): globalThis.Promise<[ClientConn | $.VarRef<ClientConn> | null, $.GoError]> {
	let conn: ClientConn | $.VarRef<ClientConn> | null = null! as ClientConn | $.VarRef<ClientConn> | null
	let err: $.GoError = null! as $.GoError
	let cc: ClientConn | $.VarRef<ClientConn> | null = (() => { const __goscriptLiteralField1 = __goscript_dialoptions.defaultDialOptions(); return new ClientConn({target: target, conns: $.makeMap<addrConn | $.VarRef<addrConn> | null, {}>(undefined, /* @__PURE__ */ $.pointerType("grpc.addrConn")), dopts: __goscriptLiteralField1}) })()
	let cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)

	void (cc$ as ClientConn).retryThrottler.Store($.interfaceValue(null, "*grpc.retryThrottler", /* @__PURE__ */ $.pointerType("grpc.retryThrottler")))
	await (cc$ as ClientConn).safeConfigSelector.UpdateConfigSelector($.interfaceValue<iresolver.ConfigSelector | null>(new defaultConfigSelector({sc: null}), "*grpc.defaultConfigSelector", /* @__PURE__ */ $.pointerType("grpc.defaultConfigSelector")))
	let __goscriptTuple0: any = context.WithCancel($.pointerValueOrNil(context.Background())!);
	;(cc$ as ClientConn).ctx = __goscriptTuple0[0];
	;(cc$ as ClientConn).cancel = __goscriptTuple0[1]

	// Apply dial options.
	let disableGlobalOpts = false
	for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let opt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_dialoptions.DialOption | null)
		{
			let [, ok] = $.typeAssertTuple<__goscript_dialoptions.disableGlobalDialOptions | $.VarRef<__goscript_dialoptions.disableGlobalDialOptions> | null>(opt, /* @__PURE__ */ $.pointerType("grpc.disableGlobalDialOptions"))
			if (ok) {
				disableGlobalOpts = true
				break
			}
		}
	}

	if (!disableGlobalOpts) {
		for (let __goscriptRangeTarget1 = __goscript_dialoptions.globalDialOptions, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let opt = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_dialoptions.DialOption | null)
			void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<__goscript_dialoptions.DialOption, null>) : $.pointerValue<Exclude<__goscript_dialoptions.DialOption, null>>(opt)).apply($.fieldRef((cc$ as ClientConn)._fields, "dopts")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	for (let __goscriptRangeTarget2 = opts, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let opt = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_dialoptions.DialOption | null)
		void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<__goscript_dialoptions.DialOption, null>) : $.pointerValue<Exclude<__goscript_dialoptions.DialOption, null>>(opt)).apply($.fieldRef((cc$ as ClientConn)._fields, "dopts")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	// Determine the resolver to use.
	{
		let __goscriptShadow0 = await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).initParsedTargetAndResolverBuilder() : ClientConn.prototype.initParsedTargetAndResolverBuilder.call(cc))
		if (__goscriptShadow0 != null) {
			return [null, __goscriptShadow0]
		}
	}

	for (let __goscriptRangeTarget3 = __goscript_dialoptions.globalPerTargetDialOptions, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let opt = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_dialoptions.perTargetDialOption | null)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_dialoptions.DialOption, null>>((__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<__goscript_dialoptions.perTargetDialOption, null>) : $.pointerValue<Exclude<__goscript_dialoptions.perTargetDialOption, null>>(opt)).DialOptionForTarget(((cc$ as ClientConn).parsedTarget.URL).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).apply($.fieldRef((cc$ as ClientConn)._fields, "dopts")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	chainUnaryClientInterceptors(cc)
	chainStreamClientInterceptors(cc)

	{
		let __goscriptShadow1 = await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).validateTransportCredentials() : ClientConn.prototype.validateTransportCredentials.call(cc))
		if (__goscriptShadow1 != null) {
			return [null, __goscriptShadow1]
		}
	}

	if ((cc$ as ClientConn).dopts.defaultServiceConfigRawJSON != null) {
		let scpr: serviceconfig.ParseResult | $.VarRef<serviceconfig.ParseResult> | null = await __goscript_service_config.parseServiceConfig($.pointerValue<string>((cc$ as ClientConn).dopts.defaultServiceConfigRawJSON), (cc$ as ClientConn).dopts.maxCallAttempts)
		let scpr$: serviceconfig.ParseResult = scpr == null ? $.pointerTarget<serviceconfig.ParseResult>(scpr) : (scpr as any).__isVarRef === true ? (scpr as any).value : (scpr as any).__goValue === undefined ? (scpr as any) : $.pointerTarget<serviceconfig.ParseResult>(scpr)
		if ((scpr$ as serviceconfig.ParseResult).Err != null) {
			return [null, fmt.Errorf("%s: %v", invalidDefaultServiceConfigErrPrefix, ((scpr$ as serviceconfig.ParseResult).Err as any))]
		}
		let __goscriptTuple1: any = $.typeAssertTuple<__goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null>((scpr$ as serviceconfig.ParseResult).Config, /* @__PURE__ */ $.pointerType("grpc.ServiceConfig"));
		;(cc$ as ClientConn).dopts.defaultServiceConfig = __goscriptTuple1[0]
	}
	$.assignStruct((cc$ as ClientConn).mkp, (cc$ as ClientConn).dopts.copts.KeepaliveParams)

	{
		err = await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).initAuthority() : ClientConn.prototype.initAuthority.call(cc))
		if (err != null) {
			return [null, err]
		}
	}

	// Register ClientConn with channelz. Note that this is only done after
	// channel creation cannot fail.
	await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).channelzRegistration(target) : ClientConn.prototype.channelzRegistration.call(cc, target))
	await channelz2.Infof(__goscript_server.logger, $.interfaceValue<channelz2.Entity | null>((cc$ as ClientConn).channelz, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel")), "parsed dial target is: %#v", $.arrayToSlice<any>([$.interfaceValue(((cc$ as ClientConn).parsedTarget).clone(), "resolver.Target", "resolver.Target")]))
	await channelz2.Infof(__goscript_server.logger, $.interfaceValue<channelz2.Entity | null>((cc$ as ClientConn).channelz, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel")), "Channel authority set to %q", $.arrayToSlice<any>([(cc$ as ClientConn).authority]));

	;(cc$ as ClientConn).csMgr = await newConnectivityStateManager((cc$ as ClientConn).ctx, (cc$ as ClientConn).channelz);
	;(cc$ as ClientConn).pickerWrapper = __goscript_picker_wrapper.newPickerWrapper((cc$ as ClientConn).dopts.copts.StatsHandlers);

	;(cc$ as ClientConn).metricsRecorderList = stats.NewMetricsRecorderList((cc$ as ClientConn).dopts.copts.StatsHandlers)

	await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).initIdleStateLocked() : ClientConn.prototype.initIdleStateLocked.call(cc));
	;(cc$ as ClientConn).idlenessMgr = idle.NewManager($.interfaceValue<idle.Enforcer | null>($.unsafePointerCast<idler | $.VarRef<idler> | null>(cc, idler), "*grpc.idler", /* @__PURE__ */ $.pointerType("grpc.idler")), (cc$ as ClientConn).dopts.idleTimeout)

	return [cc, null]
}

export async function Dial(target: string, opts: $.Slice<__goscript_dialoptions.DialOption | null>): globalThis.Promise<[ClientConn | $.VarRef<ClientConn> | null, $.GoError]> {
	return DialContext(context.Background(), target, opts)
}

export async function DialContext(ctx: context.Context | null, target: string, opts: $.Slice<__goscript_dialoptions.DialOption | null>): globalThis.Promise<[ClientConn | $.VarRef<ClientConn> | null, $.GoError]> {
	let conn: ClientConn | $.VarRef<ClientConn> | null = null! as ClientConn | $.VarRef<ClientConn> | null
	let err: $.GoError = null! as $.GoError
	await using __defer = new $.AsyncDisposableStack()
	// At the end of this method, we kick the channel out of idle, rather than
	// waiting for the first rpc.
	opts = $.appendSlice($.arrayToSlice<__goscript_dialoptions.DialOption | null>([await __goscript_dialoptions.withDefaultScheme("passthrough")]), opts, $.appendZeros.nil)
	let __goscriptTuple2: any = await NewClient(target, opts)
	let cc: ClientConn | $.VarRef<ClientConn> | null = __goscriptTuple2[0]
	err = __goscriptTuple2[1]
	let cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
	if (err != null) {
		return [null, err]
	}

	// We start the channel off in idle mode, but kick it out of idle now,
	// instead of waiting for the first RPC.  This is the legacy behavior of
	// Dial.
	__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
		if (err != null) {
			await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).Close() : ClientConn.prototype.Close.call(cc))
		}
	})() })

	// This creates the name resolver, load balancer, etc.
	{
		let __goscriptShadow2 = await idle.Manager.prototype.ExitIdleMode.call((cc$ as ClientConn).idlenessMgr)
		if (__goscriptShadow2 != null) {
			const __goscriptReturn1: [ClientConn | $.VarRef<ClientConn> | null, $.GoError] = [null, __goscriptShadow2]
			conn = __goscriptReturn1[0]
			err = __goscriptReturn1[1]
			await __defer.dispose()
			return [conn, err]
		}
	}

	// Return now for non-blocking dials.
	if (!(cc$ as ClientConn).dopts.block) {
		const __goscriptReturn2: [ClientConn | $.VarRef<ClientConn> | null, $.GoError] = [cc, null]
		conn = __goscriptReturn2[0]
		err = __goscriptReturn2[1]
		await __defer.dispose()
		return [conn, err]
	}

	if ((cc$ as ClientConn).dopts.timeout > 0n) {
		let cancel: context.CancelFunc | null = null! as context.CancelFunc | null
		let __goscriptTuple3: any = context.WithTimeout($.pointerValueOrNil(ctx)!, (cc$ as ClientConn).dopts.timeout)
		ctx = __goscriptTuple3[0]
		cancel = __goscriptTuple3[1]
		const __goscriptDeferCallee0 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
	}
	__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
			{
				id: 0,
				isSend: false,
				channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect0Result) => {
					switch ((true as boolean)) {
						case $.comparableEqual((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), err):
						{
							conn = null
							break
						}
						case (err == null) || !(cc$ as ClientConn).dopts.returnLastError:
						{
							let __goscriptAssign0_0: ClientConn | $.VarRef<ClientConn> | null = null
							let __goscriptAssign0_1: $.GoError = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							conn = __goscriptAssign0_0
							err = __goscriptAssign0_1
							break
						}
						default:
						{
							let __goscriptAssign1_0: ClientConn | $.VarRef<ClientConn> | null = null
							let __goscriptAssign1_1: $.GoError = fmt.Errorf("%v: %v", ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any), (err as any))
							conn = __goscriptAssign1_0
							err = __goscriptAssign1_1
							break
						}
					}
				}
			},
			{
				id: -1,
				isSend: false,
				channel: null,
			}
		], true)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
	})() })

	// A blocking dial blocks until the clientConn is ready.
	while (true) {
		let s = await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).GetState() : ClientConn.prototype.GetState.call(cc))
		if (s == 0) {
			await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).Connect() : ClientConn.prototype.Connect.call(cc))
		}
		if (s == 2) {
			const __goscriptReturn3: [ClientConn | $.VarRef<ClientConn> | null, $.GoError] = [cc, null]
			conn = __goscriptReturn3[0]
			err = __goscriptReturn3[1]
			await __defer.dispose()
			return [conn, err]
		} else {
			if ((cc$ as ClientConn).dopts.copts.FailOnNonTempDialError && (s == 3)) {
				{
					err = await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).connectionError() : ClientConn.prototype.connectionError.call(cc))
					if (err != null) {
						let [terr, ok] = $.typeAssertTuple<any>(err, { kind: $.TypeKind.Interface, methods: [{ name: "Temporary", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.basicType("bool") }] }] })
						if (ok && !(__goscriptAwait = (terr !== null && (terr as any).__isVarRef !== true && (terr as any).__goValue === undefined ? (terr as any) : $.pointerValue<any>(terr)).Temporary(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
							const __goscriptReturn4: [ClientConn | $.VarRef<ClientConn> | null, $.GoError] = [null, err]
							conn = __goscriptReturn4[0]
							err = __goscriptReturn4[1]
							await __defer.dispose()
							return [conn, err]
						}
					}
				}
			}
		}
		if (!await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).WaitForStateChange(ctx, s) : ClientConn.prototype.WaitForStateChange.call(cc, ctx, s))) {
			// ctx got timeout or canceled.
			{
				err = await (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as ClientConn).connectionError() : ClientConn.prototype.connectionError.call(cc))
				if ((err != null) && (cc$ as ClientConn).dopts.returnLastError) {
					const __goscriptReturn5: [ClientConn | $.VarRef<ClientConn> | null, $.GoError] = [null, err]
					conn = __goscriptReturn5[0]
					err = __goscriptReturn5[1]
					await __defer.dispose()
					return [conn, err]
				}
			}
			const __goscriptReturn6: [ClientConn | $.VarRef<ClientConn> | null, $.GoError] = [null, (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]
			conn = __goscriptReturn6[0]
			err = __goscriptReturn6[1]
			await __defer.dispose()
			return [conn, err]
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function chainUnaryClientInterceptors(cc: ClientConn | $.VarRef<ClientConn> | null): void {
	const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
	let interceptors: $.Slice<__goscript_interceptor.UnaryClientInterceptor | null> = (cc$ as ClientConn).dopts.chainUnaryInts
	// Prepend dopts.unaryInt to the chaining interceptors if it exists, since unaryInt will
	// be executed before any other chained interceptors.
	if ((cc$ as ClientConn).dopts.unaryInt != null) {
		interceptors = $.appendSlice($.arrayToSlice<__goscript_interceptor.UnaryClientInterceptor | null>([(cc$ as ClientConn).dopts.unaryInt]), interceptors, $.appendZeros.nil)
	}
	let chainedInt: __goscript_interceptor.UnaryClientInterceptor | null = null! as __goscript_interceptor.UnaryClientInterceptor | null
	if ($.sliceLen(interceptors) == 0) {
		chainedInt = (null as __goscript_interceptor.UnaryClientInterceptor | null)
	} else {
		if ($.sliceLen(interceptors) == 1) {
			chainedInt = $.arrayIndex(interceptors!, 0)
		} else {
			chainedInt = $.functionValue(async (ctx: context.Context | null, method: string, req: any, reply: any, cc: ClientConn | $.VarRef<ClientConn> | null, invoker: ((ctx: context.Context | null, method: string, req: any, reply: any, cc: ClientConn | $.VarRef<ClientConn> | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => $.GoError | globalThis.Promise<$.GoError>) | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>): globalThis.Promise<$.GoError> => {
				return $.arrayIndex(interceptors!, 0)!(ctx, method, req, reply, cc, getChainUnaryInvoker(interceptors, 0, invoker), opts)
			}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.pointerType("grpc.ClientConn"), ({ kind: $.TypeKind.Function, name: "grpc.UnaryInvoker", params: ["context.Context", /* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.pointerType("grpc.ClientConn"), /* @__PURE__ */ $.sliceType("grpc.CallOption")], results: ["error"], isVariadic: true } as $.FunctionTypeInfo), /* @__PURE__ */ $.sliceType("grpc.CallOption")], results: ["error"], isVariadic: true } as $.FunctionTypeInfo))
		}
	}
	;(cc$ as ClientConn).dopts.unaryInt = chainedInt
}

export function getChainUnaryInvoker(interceptors: $.Slice<__goscript_interceptor.UnaryClientInterceptor | null>, curr: number, finalInvoker: __goscript_interceptor.UnaryInvoker | null): __goscript_interceptor.UnaryInvoker | null {
	if (curr == ($.sliceLen(interceptors) - 1)) {
		return finalInvoker
	}
	return $.functionValue(async (ctx: context.Context | null, method: string, req: any, reply: any, cc: ClientConn | $.VarRef<ClientConn> | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>): globalThis.Promise<$.GoError> => {
		return await $.arrayIndex(interceptors!, curr + 1)!(ctx, method, req, reply, cc, getChainUnaryInvoker(interceptors, curr + 1, finalInvoker), opts)
	}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.pointerType("grpc.ClientConn"), /* @__PURE__ */ $.sliceType("grpc.CallOption")], results: ["error"], isVariadic: true } as $.FunctionTypeInfo))
}

export function chainStreamClientInterceptors(cc: ClientConn | $.VarRef<ClientConn> | null): void {
	const cc$: ClientConn = cc == null ? $.pointerTarget<ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<ClientConn>(cc)
	let interceptors: $.Slice<__goscript_interceptor.StreamClientInterceptor | null> = (cc$ as ClientConn).dopts.chainStreamInts
	// Prepend dopts.streamInt to the chaining interceptors if it exists, since streamInt will
	// be executed before any other chained interceptors.
	if ((cc$ as ClientConn).dopts.streamInt != null) {
		interceptors = $.appendSlice($.arrayToSlice<__goscript_interceptor.StreamClientInterceptor | null>([(cc$ as ClientConn).dopts.streamInt]), interceptors, $.appendZeros.nil)
	}
	let chainedInt: __goscript_interceptor.StreamClientInterceptor | null = null! as __goscript_interceptor.StreamClientInterceptor | null
	if ($.sliceLen(interceptors) == 0) {
		chainedInt = (null as __goscript_interceptor.StreamClientInterceptor | null)
	} else {
		if ($.sliceLen(interceptors) == 1) {
			chainedInt = $.arrayIndex(interceptors!, 0)
		} else {
			chainedInt = $.functionValue(async (ctx: context.Context | null, desc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, cc: ClientConn | $.VarRef<ClientConn> | null, method: string, streamer: ((ctx: context.Context | null, desc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, cc: ClientConn | $.VarRef<ClientConn> | null, method: string, opts: $.Slice<__goscript_rpc_util.CallOption | null>) => [__goscript_stream.ClientStream | null, $.GoError] | globalThis.Promise<[__goscript_stream.ClientStream | null, $.GoError]>) | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>): globalThis.Promise<[__goscript_stream.ClientStream | null, $.GoError]> => {
				return $.arrayIndex(interceptors!, 0)!(ctx, desc, cc, method, getChainStreamer(interceptors, 0, streamer), opts)
			}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.pointerType("grpc.StreamDesc"), /* @__PURE__ */ $.pointerType("grpc.ClientConn"), /* @__PURE__ */ $.basicType("string"), ({ kind: $.TypeKind.Function, name: "grpc.Streamer", params: ["context.Context", /* @__PURE__ */ $.pointerType("grpc.StreamDesc"), /* @__PURE__ */ $.pointerType("grpc.ClientConn"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("grpc.CallOption")], results: ["grpc.ClientStream", "error"], isVariadic: true } as $.FunctionTypeInfo), /* @__PURE__ */ $.sliceType("grpc.CallOption")], results: ["grpc.ClientStream", "error"], isVariadic: true } as $.FunctionTypeInfo))
		}
	}
	;(cc$ as ClientConn).dopts.streamInt = chainedInt
}

export function getChainStreamer(interceptors: $.Slice<__goscript_interceptor.StreamClientInterceptor | null>, curr: number, finalStreamer: __goscript_interceptor.Streamer | null): __goscript_interceptor.Streamer | null {
	if (curr == ($.sliceLen(interceptors) - 1)) {
		return finalStreamer
	}
	return $.functionValue(async (ctx: context.Context | null, desc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, cc: ClientConn | $.VarRef<ClientConn> | null, method: string, opts: $.Slice<__goscript_rpc_util.CallOption | null>): globalThis.Promise<[__goscript_stream.ClientStream | null, $.GoError]> => {
		return await $.arrayIndex(interceptors!, curr + 1)!(ctx, desc, cc, method, getChainStreamer(interceptors, curr + 1, finalStreamer), opts)
	}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.pointerType("grpc.StreamDesc"), /* @__PURE__ */ $.pointerType("grpc.ClientConn"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("grpc.CallOption")], results: ["grpc.ClientStream", "error"], isVariadic: true } as $.FunctionTypeInfo))
}

export async function newConnectivityStateManager(ctx: context.Context | null, channel: channelz2.Channel | $.VarRef<channelz2.Channel> | null): globalThis.Promise<connectivityStateManager | $.VarRef<connectivityStateManager> | null> {
	return (await (async () => { const __goscriptLiteralField2 = await grpcsync.NewPubSub(ctx); return new connectivityStateManager({channelz: channel, pubSub: __goscriptLiteralField2}) })())
}

export let emptyServiceConfig: __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null = null! as __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null

export function __goscript_set_emptyServiceConfig(__goscriptValue: __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null): void {
	emptyServiceConfig = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	let cfg: serviceconfig.ParseResult | $.VarRef<serviceconfig.ParseResult> | null = await __goscript_service_config.parseServiceConfig("{}", 5)
	let cfg$: serviceconfig.ParseResult = cfg == null ? $.pointerTarget<serviceconfig.ParseResult>(cfg) : (cfg as any).__isVarRef === true ? (cfg as any).value : (cfg as any).__goValue === undefined ? (cfg as any) : $.pointerTarget<serviceconfig.ParseResult>(cfg)
	if ((cfg$ as serviceconfig.ParseResult).Err != null) {
		$.panic(await fmt.Sprintf("impossible error parsing empty service config: %v", ((cfg$ as serviceconfig.ParseResult).Err as any)))
	}
	emptyServiceConfig = $.mustTypeAssert<__goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null>((cfg$ as serviceconfig.ParseResult).Config, /* @__PURE__ */ $.pointerType("grpc.ServiceConfig"))

	internal.__goscript_set_SubscribeToConnectivityStateChanges($.interfaceValue($.functionValue(async (cc: ClientConn | $.VarRef<ClientConn> | null, s: grpcsync.Subscriber | null): globalThis.Promise<(() => void) | null> => {
		return await grpcsync.PubSub.prototype.Subscribe.call($.pointerValue<connectivityStateManager>($.pointerValue<ClientConn>(cc).csMgr).pubSub, s)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.ClientConn"), "grpcsync.Subscriber"], results: [({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo)), "func(cc *grpc.ClientConn, s grpcsync.Subscriber) func()", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.ClientConn"), "grpcsync.Subscriber"], results: [({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo)))
	internal.__goscript_set_EnterIdleModeForTesting($.interfaceValue($.functionValue(async (cc: ClientConn | $.VarRef<ClientConn> | null): globalThis.Promise<void> => {
		await idle.Manager.prototype.EnterIdleModeForTesting.call($.pointerValue<ClientConn>(cc).idlenessMgr)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.ClientConn")], results: [] } as $.FunctionTypeInfo)), "func(cc *grpc.ClientConn)", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.ClientConn")], results: [] } as $.FunctionTypeInfo)))
	internal.__goscript_set_ExitIdleModeForTesting($.interfaceValue($.functionValue(async (cc: ClientConn | $.VarRef<ClientConn> | null): globalThis.Promise<$.GoError> => {
		return await idle.Manager.prototype.ExitIdleMode.call($.pointerValue<ClientConn>(cc).idlenessMgr)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.ClientConn")], results: ["error"] } as $.FunctionTypeInfo)), "func(cc *grpc.ClientConn) error", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("grpc.ClientConn")], results: ["error"] } as $.FunctionTypeInfo)))
}

export function copyAddresses(_in: $.Slice<resolver.Address>): $.Slice<resolver.Address> {
	let out: $.Slice<resolver.Address> = $.makeSlice<resolver.Address>($.sliceLen(_in), undefined, undefined, () => new resolver.Address(undefined, true))
	$.copy(out, _in)
	return out
}

export async function equalAddressIgnoringBalAttributes(a: resolver.Address | $.VarRef<resolver.Address> | null, b: resolver.Address | $.VarRef<resolver.Address> | null): globalThis.Promise<boolean> {
	return ((($.stringEqual($.pointerValue<resolver.Address>(a).Addr, $.pointerValue<resolver.Address>(b).Addr)) && ($.stringEqual($.pointerValue<resolver.Address>(a).ServerName, $.pointerValue<resolver.Address>(b).ServerName))) && await attributes.Attributes.prototype.Equal.call($.pointerValue<resolver.Address>(a).Attributes, $.pointerValue<resolver.Address>(b).Attributes)) && ($.comparableEqual($.pointerValue<resolver.Address>(a).Metadata, $.pointerValue<resolver.Address>(b).Metadata))
}

export async function equalAddressesIgnoringBalAttributes(a: $.Slice<resolver.Address>, b: $.Slice<resolver.Address>): globalThis.Promise<boolean> {
	return slices.EqualFunc(a, b, $.functionValue(async (__goscriptParam1: resolver.Address, __goscriptParam2: resolver.Address): globalThis.Promise<boolean> => {
		let a: $.VarRef<resolver.Address> = $.varRef(__goscriptParam1)
		let b: $.VarRef<resolver.Address> = $.varRef(__goscriptParam2)
		return await equalAddressIgnoringBalAttributes(a, b)
	}, ({ kind: $.TypeKind.Function, params: ["resolver.Address", "resolver.Address"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
}

export function getMethodConfig(sc: __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null, method: string): __goscript_service_config.MethodConfig {
	const sc$: __goscript_service_config.ServiceConfig = sc == null ? $.pointerTarget<__goscript_service_config.ServiceConfig>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<__goscript_service_config.ServiceConfig>(sc)
	if (sc == null) {
		return new serviceconfig2.MethodConfig(undefined, true)
	}
	{
		let [m, ok] = $.mapGet<string, __goscript_service_config.MethodConfig, __goscript_service_config.MethodConfig>((sc$ as __goscript_service_config.ServiceConfig).Methods, method, new serviceconfig2.MethodConfig(undefined, true))
		if (ok) {
			return (m).clone()
		}
	}
	let i = strings.LastIndex(method, "/")
	{
		let [m, ok] = $.mapGet<string, __goscript_service_config.MethodConfig, __goscript_service_config.MethodConfig>((sc$ as __goscript_service_config.ServiceConfig).Methods, $.sliceStringOrBytes(method, undefined, i + 1), new serviceconfig2.MethodConfig(undefined, true))
		if (ok) {
			return (m).clone()
		}
	}
	return ($.mapGet<string, __goscript_service_config.MethodConfig, __goscript_service_config.MethodConfig>((sc$ as __goscript_service_config.ServiceConfig).Methods, "", new serviceconfig2.MethodConfig(undefined, true))[0]).clone()
}

export let ErrClientConnTimeout: $.GoError = errors.New("grpc: timed out when dialing")

export function __goscript_set_ErrClientConnTimeout(__goscriptValue: $.GoError): void {
	ErrClientConnTimeout = __goscriptValue
}

export function parseTarget(target: string): [resolver.Target, $.GoError] {
	let __goscriptTuple9: any = url.Parse(target)
	let u: url.URL | $.VarRef<url.URL> | null = __goscriptTuple9[0]
	let err = __goscriptTuple9[1]
	if (err != null) {
		return [new resolver.Target(undefined, true), err]
	}

	return [new resolver.Target({URL: $.pointerValue<url.URL>(u)}, true), null]
}

export async function encodeAuthority(authority: string): globalThis.Promise<string> {
	const upperhex: string = "0123456789ABCDEF"

	// Return for characters that must be escaped as per
	// Valid chars are mentioned here:
	// https://datatracker.ietf.org/doc/html/rfc3986#section-3.2
	let shouldEscape: ((c: number) => boolean | globalThis.Promise<boolean>) | null = $.functionValue((c: number): boolean => {
		// Alphanum are always allowed.
		if ((((97 <= c) && (c <= 122)) || ((65 <= c) && (c <= 90))) || ((48 <= c) && (c <= 57))) {
			return false
		}
		switch (c) {
			case 45:
			case 95:
			case 46:
			case 126:
			{
				return false
				break
			}
			case 33:
			case 36:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 59:
			case 61:
			{
				return false
				break
			}
			case 58:
			case 91:
			case 93:
			case 64:
			{
				return false
				break
			}
		}
		// Everything else must be escaped.
		return true
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint8")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))

	let hexCount = 0
	for (let i = 0; i < $.stringLen(authority); i++) {
		let c = $.indexString(authority, i)
		if ((__goscriptAwait = shouldEscape!(c), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			hexCount++
		}
	}

	if (hexCount == 0) {
		return authority
	}

	let required = $.stringLen(authority) + (2 * hexCount)
	let t: $.Slice<number> = $.makeSlice<number>(required, undefined, "byte")

	let j = 0
	// This logic is a barebones version of escape in the go net/url library.
	for (let __goscriptSliceWindow0 = $.sliceRange(t), i = 0; i < $.stringLen(authority); i++) {
		{
			let c = $.indexString(authority, i)
			switch ((true as boolean)) {
				case (__goscriptAwait = shouldEscape!(c), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] = 37;
					;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j + 1)] = $.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46", $.uintShr(c, 4, 8));
					;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j + 2)] = $.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46", c & 15)
					j = j + (3)
					break
				}
				default:
				{
					;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] = $.indexString(authority, i)
					j++
					break
				}
			}
		}
	}
	return $.bytesToString(t)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int", "connectivity.State"), zero: () => 0, methods: {String: (receiver: any, ...args: any[]) => (connectivity.State_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])] }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({String: (receiver: any, ...args: any[]) => (connectivity.State_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= (/* @__PURE__ */ $.basicType("int", "connectivity.State"))
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }})
}

var __goscriptAwait: any

export { __goscriptInit0 }
