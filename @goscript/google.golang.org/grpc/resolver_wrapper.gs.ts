// Generated file based on resolver_wrapper.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as channelz from "@goscript/google.golang.org/grpc/internal/channelz/index.js"

import * as grpcsync from "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"

import * as pretty from "@goscript/google.golang.org/grpc/internal/pretty/index.js"

import * as resolver2 from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as serviceconfig from "@goscript/google.golang.org/grpc/serviceconfig/index.js"

import type * as fmt from "@goscript/fmt/index.js"

import type * as attributes from "@goscript/google.golang.org/grpc/attributes/index.js"

import * as balancer from "@goscript/google.golang.org/grpc/balancer/index.js"

import * as channelz2 from "@goscript/google.golang.org/grpc/channelz/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as encoding from "@goscript/google.golang.org/grpc/encoding/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as internal2 from "@goscript/google.golang.org/grpc/internal/index.js"

import * as backoff from "@goscript/google.golang.org/grpc/internal/backoff/index.js"

import * as gracefulswitch from "@goscript/google.golang.org/grpc/internal/balancer/gracefulswitch/index.js"

import * as binarylog from "@goscript/google.golang.org/grpc/internal/binarylog/index.js"

import * as idle from "@goscript/google.golang.org/grpc/internal/idle/index.js"

import * as resolver3 from "@goscript/google.golang.org/grpc/internal/resolver/index.js"

import * as serviceconfig2 from "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"

import * as stats from "@goscript/google.golang.org/grpc/internal/stats/index.js"

import * as transport from "@goscript/google.golang.org/grpc/internal/transport/index.js"

import * as keepalive from "@goscript/google.golang.org/grpc/keepalive/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import type * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as stats2 from "@goscript/google.golang.org/grpc/stats/index.js"

import type * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_balancer_wrapper from "./balancer_wrapper.gs.ts"

import * as __goscript_call from "./call.gs.ts"

import * as __goscript_clientconn from "./clientconn.gs.ts"

import * as __goscript_codec from "./codec.gs.ts"

import * as __goscript_dialoptions from "./dialoptions.gs.ts"

import * as __goscript_interceptor from "./interceptor.gs.ts"

import * as __goscript_picker_wrapper from "./picker_wrapper.gs.ts"

import * as __goscript_rpc_util from "./rpc_util.gs.ts"

import * as __goscript_server from "./server.gs.ts"

import * as __goscript_service_config from "./service_config.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"

import * as __goscript_trace from "./trace.gs.ts"
import "@goscript/context/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/grpc/internal/channelz/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"
import "@goscript/google.golang.org/grpc/internal/pretty/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/serviceconfig/index.js"
import "@goscript/google.golang.org/grpc/balancer/index.js"
import "@goscript/google.golang.org/grpc/channelz/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/encoding/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/backoff/index.js"
import "@goscript/google.golang.org/grpc/internal/balancer/gracefulswitch/index.js"
import "@goscript/google.golang.org/grpc/internal/binarylog/index.js"
import "@goscript/google.golang.org/grpc/internal/idle/index.js"
import "@goscript/google.golang.org/grpc/internal/resolver/index.js"
import "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"
import "@goscript/google.golang.org/grpc/internal/stats/index.js"
import "@goscript/google.golang.org/grpc/internal/transport/index.js"
import "@goscript/google.golang.org/grpc/keepalive/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/grpc/stats/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "./balancer_wrapper.gs.ts"
import "./call.gs.ts"
import "./clientconn.gs.ts"
import "./codec.gs.ts"
import "./dialoptions.gs.ts"
import "./interceptor.gs.ts"
import "./picker_wrapper.gs.ts"
import "./rpc_util.gs.ts"
import "./server.gs.ts"
import "./service_config.gs.ts"
import "./stream.gs.ts"
import "./trace.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc", ["grpc.ccResolverWrapper"])

export class ccResolverWrapper {
	// The following fields are initialized when the wrapper is created and are
	// read-only afterwards, and therefore can be accessed without a mutex.
	public get cc(): __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null {
		return this._fields.cc
	}

	public set cc(value: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null) {
		this._fields.cc = value
	}

	public get ignoreServiceConfig(): boolean {
		return this._fields.ignoreServiceConfig
	}

	public set ignoreServiceConfig(value: boolean) {
		this._fields.ignoreServiceConfig = value
	}

	public get serializer(): grpcsync.CallbackSerializer | $.VarRef<grpcsync.CallbackSerializer> | null {
		return this._fields.serializer
	}

	public set serializer(value: grpcsync.CallbackSerializer | $.VarRef<grpcsync.CallbackSerializer> | null) {
		this._fields.serializer = value
	}

	public get serializerCancel(): (() => void) | null {
		return this._fields.serializerCancel
	}

	public set serializerCancel(value: (() => void) | null) {
		this._fields.serializerCancel = value
	}

	public get resolver(): resolver2.Resolver | null {
		return this._fields.resolver
	}

	public set resolver(value: resolver2.Resolver | null) {
		this._fields.resolver = value
	}

	// The following fields are protected by mu.  Caller must take cc.mu before
	// taking mu.
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get curState(): resolver2.State {
		return this._fields.curState
	}

	public set curState(value: resolver2.State) {
		this._fields.curState = value
	}

	public get closed(): boolean {
		return this._fields.closed
	}

	public set closed(value: boolean) {
		this._fields.closed = value
	}

	public _fields: {
		cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null
		ignoreServiceConfig: boolean
		serializer: grpcsync.CallbackSerializer | $.VarRef<grpcsync.CallbackSerializer> | null
		serializerCancel: (() => void) | null
		resolver: resolver2.Resolver | null
		mu: sync.Mutex
		curState: resolver2.State
		closed: boolean
	}

	constructor(init?: Partial<{cc?: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, ignoreServiceConfig?: boolean, serializer?: grpcsync.CallbackSerializer | $.VarRef<grpcsync.CallbackSerializer> | null, serializerCancel?: (() => void) | null, resolver?: resolver2.Resolver | null, mu?: sync.Mutex, curState?: resolver2.State, closed?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			cc: init?.cc ?? (null! as __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null),
			ignoreServiceConfig: init?.ignoreServiceConfig ?? (false as boolean),
			serializer: init?.serializer ?? (null! as grpcsync.CallbackSerializer | $.VarRef<grpcsync.CallbackSerializer> | null),
			serializerCancel: init?.serializerCancel ?? (null! as (() => void) | null),
			resolver: init?.resolver ?? (null! as resolver2.Resolver | null),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			curState: init?.curState ? init.curState.clone() : new resolver2.State(undefined, true),
			closed: init?.closed ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ccResolverWrapper {
		return new ccResolverWrapper(this, true)
	}

	public __goscriptAssign(source: ccResolverWrapper): void {
		const target = this._fields
		const values = source._fields
		target.cc = values.cc
		target.ignoreServiceConfig = values.ignoreServiceConfig
		target.serializer = values.serializer
		target.serializerCancel = values.serializerCancel
		target.resolver = $.assignFieldValue(target.resolver, values.resolver, "resolver.Resolver")
		$.assignStruct(target.mu, values.mu)
		$.assignStruct(target.curState, values.curState)
		target.closed = values.closed
	}

	public async NewAddress(addrs: $.Slice<resolver2.Address>): globalThis.Promise<void> {
		let ccr: ccResolverWrapper | $.VarRef<ccResolverWrapper> | null = this;
		const ccr$: ccResolverWrapper = ccr == null ? $.pointerTarget<ccResolverWrapper>(ccr) : (ccr as any).__isVarRef === true ? (ccr as any).value : (ccr as any).__goValue === undefined ? (ccr as any) : $.pointerTarget<ccResolverWrapper>(ccr)
		await $.pointerValue<__goscript_clientconn.ClientConn>((ccr$ as ccResolverWrapper).cc).mu.Lock()
		await (ccr$ as ccResolverWrapper).mu.Lock()
		if ((ccr$ as ccResolverWrapper).closed) {
			void (ccr$ as ccResolverWrapper).mu.Unlock()
			$.pointerValue<__goscript_clientconn.ClientConn>((ccr$ as ccResolverWrapper).cc).mu.Unlock()
			return
		}
		let s = new resolver2.State({Addresses: addrs, ServiceConfig: (ccr$ as ccResolverWrapper).curState.ServiceConfig}, true)
		await (ccr !== null && (ccr as any).__isVarRef !== true && (ccr as any).__goValue === undefined ? ((ccr as any) as ccResolverWrapper).addChannelzTraceEvent(s) : ccResolverWrapper.prototype.addChannelzTraceEvent.call(ccr, s))
		$.assignStruct((ccr$ as ccResolverWrapper).curState, s)
		void (ccr$ as ccResolverWrapper).mu.Unlock()
		await __goscript_clientconn.ClientConn.prototype.updateResolverStateAndUnlock.call((ccr$ as ccResolverWrapper).cc, s, null)
	}

	public async ParseServiceConfig(scJSON: string): globalThis.Promise<serviceconfig.ParseResult | $.VarRef<serviceconfig.ParseResult> | null> {
		const ccr: ccResolverWrapper | $.VarRef<ccResolverWrapper> | null = this;
		return __goscript_service_config.parseServiceConfig(scJSON, $.pointerValue<__goscript_clientconn.ClientConn>($.pointerValue<ccResolverWrapper>(ccr).cc).dopts.maxCallAttempts)
	}

	public async ReportError(err: $.GoError): globalThis.Promise<void> {
		const ccr: ccResolverWrapper | $.VarRef<ccResolverWrapper> | null = this;
		const ccr$: ccResolverWrapper = ccr == null ? $.pointerTarget<ccResolverWrapper>(ccr) : (ccr as any).__isVarRef === true ? (ccr as any).value : (ccr as any).__goValue === undefined ? (ccr as any) : $.pointerTarget<ccResolverWrapper>(ccr)
		await $.pointerValue<__goscript_clientconn.ClientConn>((ccr$ as ccResolverWrapper).cc).mu.Lock()
		await (ccr$ as ccResolverWrapper).mu.Lock()
		if ((ccr$ as ccResolverWrapper).closed) {
			void (ccr$ as ccResolverWrapper).mu.Unlock()
			$.pointerValue<__goscript_clientconn.ClientConn>((ccr$ as ccResolverWrapper).cc).mu.Unlock()
			return
		}
		void (ccr$ as ccResolverWrapper).mu.Unlock()
		await channelz.Warningf(__goscript_server.logger, $.interfaceValue<channelz.Entity | null>($.pointerValue<__goscript_clientconn.ClientConn>((ccr$ as ccResolverWrapper).cc).channelz, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel")), "ccResolverWrapper: reporting error to cc: %v", $.arrayToSlice<any>([(err as any)]))
		await __goscript_clientconn.ClientConn.prototype.updateResolverStateAndUnlock.call((ccr$ as ccResolverWrapper).cc, new resolver2.State(undefined, true), err)
	}

	public async UpdateState(s: resolver2.State): globalThis.Promise<$.GoError> {
		let ccr: ccResolverWrapper | $.VarRef<ccResolverWrapper> | null = this;
		const ccr$: ccResolverWrapper = ccr == null ? $.pointerTarget<ccResolverWrapper>(ccr) : (ccr as any).__isVarRef === true ? (ccr as any).value : (ccr as any).__goValue === undefined ? (ccr as any) : $.pointerTarget<ccResolverWrapper>(ccr)
		await $.pointerValue<__goscript_clientconn.ClientConn>((ccr$ as ccResolverWrapper).cc).mu.Lock()
		await (ccr$ as ccResolverWrapper).mu.Lock()
		if ((ccr$ as ccResolverWrapper).closed) {
			void (ccr$ as ccResolverWrapper).mu.Unlock()
			$.pointerValue<__goscript_clientconn.ClientConn>((ccr$ as ccResolverWrapper).cc).mu.Unlock()
			return null
		}
		if (s.Endpoints == null) {
			s.Endpoints = $.makeSlice<resolver2.Endpoint>(0, $.sliceLen(s.Addresses), undefined, () => new resolver2.Endpoint(undefined, true))
			for (let __goscriptRangeTarget0 = s.Addresses, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let a = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as resolver2.Address)).clone()
				let ep = new resolver2.Endpoint({Addresses: $.arrayToSlice<resolver2.Address>([(a).clone()]), Attributes: a.BalancerAttributes}, true)
				$.arrayIndex(ep.Addresses!, 0).BalancerAttributes = null
				s.Endpoints = $.appendOne(s.Endpoints, (ep).clone())
			}
		}
		await (ccr !== null && (ccr as any).__isVarRef !== true && (ccr as any).__goValue === undefined ? ((ccr as any) as ccResolverWrapper).addChannelzTraceEvent(s) : ccResolverWrapper.prototype.addChannelzTraceEvent.call(ccr, s))
		$.assignStruct((ccr$ as ccResolverWrapper).curState, s)
		void (ccr$ as ccResolverWrapper).mu.Unlock()
		return __goscript_clientconn.ClientConn.prototype.updateResolverStateAndUnlock.call((ccr$ as ccResolverWrapper).cc, s, null)
	}

	public async addChannelzTraceEvent(s: resolver2.State): globalThis.Promise<void> {
		const ccr: ccResolverWrapper | $.VarRef<ccResolverWrapper> | null = this;
		const ccr$: ccResolverWrapper = ccr == null ? $.pointerTarget<ccResolverWrapper>(ccr) : (ccr as any).__isVarRef === true ? (ccr as any).value : (ccr as any).__goValue === undefined ? (ccr as any) : $.pointerTarget<ccResolverWrapper>(ccr)
		if (!(__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).V(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && !channelz.IsOn()) {
			return
		}
		let updates: $.Slice<string> = null! as $.Slice<string>
		let oldSC: __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null = null! as __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null
		let newSC: __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null = null! as __goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null
		let oldOK: boolean = false
		let newOK: boolean = false
		if ((ccr$ as ccResolverWrapper).curState.ServiceConfig != null) {
			let __goscriptTuple0: any = $.typeAssertTuple<__goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null>($.pointerValue<serviceconfig.ParseResult>((ccr$ as ccResolverWrapper).curState.ServiceConfig).Config, /* @__PURE__ */ $.pointerType("grpc.ServiceConfig"))
			oldSC = __goscriptTuple0[0]
			oldOK = __goscriptTuple0[1]
		}
		if (s.ServiceConfig != null) {
			let __goscriptTuple1: any = $.typeAssertTuple<__goscript_service_config.ServiceConfig | $.VarRef<__goscript_service_config.ServiceConfig> | null>($.pointerValue<serviceconfig.ParseResult>(s.ServiceConfig).Config, /* @__PURE__ */ $.pointerType("grpc.ServiceConfig"))
			newSC = __goscriptTuple1[0]
			newOK = __goscriptTuple1[1]
		}
		if ((oldOK != newOK) || ((oldOK && newOK) && (!$.stringEqual($.pointerValue<__goscript_service_config.ServiceConfig>(oldSC).rawJSONString, $.pointerValue<__goscript_service_config.ServiceConfig>(newSC).rawJSONString)))) {
			updates = $.appendOne(updates, "service config updated")
		}
		if (($.sliceLen((ccr$ as ccResolverWrapper).curState.Addresses) > 0) && ($.sliceLen(s.Addresses) == 0)) {
			updates = $.appendOne(updates, "resolver returned an empty address list")
		} else {
			if (($.sliceLen((ccr$ as ccResolverWrapper).curState.Addresses) == 0) && ($.sliceLen(s.Addresses) > 0)) {
				updates = $.appendOne(updates, "resolver returned new addresses")
			}
		}
		await channelz.Infof(__goscript_server.logger, $.interfaceValue<channelz.Entity | null>($.pointerValue<__goscript_clientconn.ClientConn>((ccr$ as ccResolverWrapper).cc).channelz, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel")), "Resolver state updated: %s (%v)", $.arrayToSlice<any>([await pretty.ToJSON($.interfaceValue((s).clone(), "resolver.State", "resolver.State")), strings.Join(updates, "; ")]))
	}

	public async close(): globalThis.Promise<void> {
		let ccr: ccResolverWrapper | $.VarRef<ccResolverWrapper> | null = this;
		const ccr$: ccResolverWrapper = ccr == null ? $.pointerTarget<ccResolverWrapper>(ccr) : (ccr as any).__isVarRef === true ? (ccr as any).value : (ccr as any).__goValue === undefined ? (ccr as any) : $.pointerTarget<ccResolverWrapper>(ccr)
		await channelz.Info(__goscript_server.logger, $.interfaceValue<channelz.Entity | null>($.pointerValue<__goscript_clientconn.ClientConn>((ccr$ as ccResolverWrapper).cc).channelz, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel")), $.arrayToSlice<any>(["Closing the name resolver"]))
		await (ccr$ as ccResolverWrapper).mu.Lock();
		;(ccr$ as ccResolverWrapper).closed = true
		void (ccr$ as ccResolverWrapper).mu.Unlock()

		await grpcsync.CallbackSerializer.prototype.TrySchedule.call((ccr$ as ccResolverWrapper).serializer, $.functionValue(async (_p0: context.Context | null): globalThis.Promise<void> => {
			if ((ccr$ as ccResolverWrapper).resolver == null) {
				return
			}
			void (__goscriptAwait = $.pointerValue<Exclude<resolver2.Resolver, null>>((ccr$ as ccResolverWrapper).resolver).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
			;(ccr$ as ccResolverWrapper).resolver = null
		}, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo)))
		void (__goscriptAwait = (ccr$ as ccResolverWrapper).serializerCancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async resolveNow(o: resolver2.ResolveNowOptions): globalThis.Promise<void> {
		const ccr: ccResolverWrapper | $.VarRef<ccResolverWrapper> | null = this;
		const ccr$: ccResolverWrapper = ccr == null ? $.pointerTarget<ccResolverWrapper>(ccr) : (ccr as any).__isVarRef === true ? (ccr as any).value : (ccr as any).__goValue === undefined ? (ccr as any) : $.pointerTarget<ccResolverWrapper>(ccr)
		await grpcsync.CallbackSerializer.prototype.TrySchedule.call((ccr$ as ccResolverWrapper).serializer, $.functionValue(async (ctx: context.Context | null): globalThis.Promise<void> => {
			if (((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) || ((ccr$ as ccResolverWrapper).resolver == null)) {
				return
			}
			void (__goscriptAwait = $.pointerValue<Exclude<resolver2.Resolver, null>>((ccr$ as ccResolverWrapper).resolver).ResolveNow((o).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo)))
	}

	public async start(): globalThis.Promise<$.GoError> {
		const ccr: ccResolverWrapper | $.VarRef<ccResolverWrapper> | null = this;
		const ccr$: ccResolverWrapper = ccr == null ? $.pointerTarget<ccResolverWrapper>(ccr) : (ccr as any).__isVarRef === true ? (ccr as any).value : (ccr as any).__goValue === undefined ? (ccr as any) : $.pointerTarget<ccResolverWrapper>(ccr)
		let errCh: $.Channel<$.GoError> | null = $.makeChannel<$.GoError>(0, null! as $.GoError, "both")
		await grpcsync.CallbackSerializer.prototype.TrySchedule.call((ccr$ as ccResolverWrapper).serializer, $.functionValue(async (ctx: context.Context | null): globalThis.Promise<void> => {
			if ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) {
				return
			}
			let opts = new resolver2.BuildOptions({DisableServiceConfig: $.pointerValue<__goscript_clientconn.ClientConn>((ccr$ as ccResolverWrapper).cc).dopts.disableServiceConfig, DialCreds: $.pointerValue<__goscript_clientconn.ClientConn>((ccr$ as ccResolverWrapper).cc).dopts.copts.TransportCredentials, CredsBundle: $.pointerValue<__goscript_clientconn.ClientConn>((ccr$ as ccResolverWrapper).cc).dopts.copts.CredsBundle, Dialer: $.pointerValue<__goscript_clientconn.ClientConn>((ccr$ as ccResolverWrapper).cc).dopts.copts.Dialer, Authority: $.pointerValue<__goscript_clientconn.ClientConn>((ccr$ as ccResolverWrapper).cc).authority}, true)
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple2: any = await $.pointerValue<Exclude<resolver2.Builder, null>>($.pointerValue<__goscript_clientconn.ClientConn>((ccr$ as ccResolverWrapper).cc).resolverBuilder).Build(($.pointerValue<__goscript_clientconn.ClientConn>((ccr$ as ccResolverWrapper).cc).parsedTarget).clone(), $.interfaceValue<resolver2.ClientConn | null>(ccr, "*grpc.ccResolverWrapper", /* @__PURE__ */ $.pointerType("grpc.ccResolverWrapper")), (opts).clone());
			;(ccr$ as ccResolverWrapper).resolver = __goscriptTuple2[0]
			err = __goscriptTuple2[1]
			await $.chanSend(errCh, err)
		}, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo)))
		return await $.chanRecv(errCh)
	}

	static __typeInfo = $.registerStructType(
		"grpc.ccResolverWrapper",
		() => new ccResolverWrapper(),
		() => [$.methodSignature("NewAddress", [["addrs", /* @__PURE__ */ $.sliceType("resolver.Address")]], [], true), $.methodSignature("ParseServiceConfig", [["scJSON", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("serviceconfig.ParseResult")], true), $.methodSignature("ReportError", [["err", "error"]], [], true), $.methodSignature("UpdateState", [["s", "resolver.State"]], ["error"], true), $.methodSignature("addChannelzTraceEvent", [["s", "resolver.State"]], [], true), $.methodSignature("close", [], [], true), $.methodSignature("resolveNow", [["o", "resolver.ResolveNowOptions"]], [], true), $.methodSignature("start", [], ["error"], true)],
		ccResolverWrapper,
		() => [/* @__PURE__ */ $.structField("cc", /* @__PURE__ */ $.pointerType("grpc.ClientConn"), [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("ignoreServiceConfig", /* @__PURE__ */ $.basicType("bool"), [1], 8, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("serializer", /* @__PURE__ */ $.pointerType("grpcsync.CallbackSerializer"), [2], 16, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("serializerCancel", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), [3], 24, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("resolver", "resolver.Resolver", [4], 32, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [5], 48, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("curState", "resolver.State", [6], 56, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("closed", /* @__PURE__ */ $.basicType("bool"), [7], 120, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export async function newCCResolverWrapper(cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null): globalThis.Promise<ccResolverWrapper | $.VarRef<ccResolverWrapper> | null> {
	const cc$: __goscript_clientconn.ClientConn = cc == null ? $.pointerTarget<__goscript_clientconn.ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<__goscript_clientconn.ClientConn>(cc)
	let __goscriptTuple3: any = context.WithCancel($.pointerValueOrNil((cc$ as __goscript_clientconn.ClientConn).ctx)!)
	let ctx = __goscriptTuple3[0]
	let cancel = __goscriptTuple3[1]
	return (await (async () => { const __goscriptLiteralField0 = await grpcsync.NewCallbackSerializer(ctx); return new ccResolverWrapper({cc: cc, ignoreServiceConfig: (cc$ as __goscript_clientconn.ClientConn).dopts.disableServiceConfig, serializer: __goscriptLiteralField0, serializerCancel: cancel}) })())
}

var __goscriptAwait: any
