// Generated file based on balancer_wrapper.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sync from "@goscript/sync/index.js"

import * as balancer2 from "@goscript/google.golang.org/grpc/balancer/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/index.js"

import * as gracefulswitch from "@goscript/google.golang.org/grpc/internal/balancer/gracefulswitch/index.js"

import * as channelz from "@goscript/google.golang.org/grpc/internal/channelz/index.js"

import * as grpcsync from "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as channelz2 from "@goscript/google.golang.org/grpc/channelz/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as encoding from "@goscript/google.golang.org/grpc/encoding/index.js"

import type * as stats from "@goscript/google.golang.org/grpc/experimental/stats/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal2 from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as backoff from "@goscript/google.golang.org/grpc/internal/backoff/index.js"

import * as binarylog from "@goscript/google.golang.org/grpc/internal/binarylog/index.js"

import * as idle from "@goscript/google.golang.org/grpc/internal/idle/index.js"

import * as resolver2 from "@goscript/google.golang.org/grpc/internal/resolver/index.js"

import * as serviceconfig from "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"

import * as stats2 from "@goscript/google.golang.org/grpc/internal/stats/index.js"

import * as transport2 from "@goscript/google.golang.org/grpc/internal/transport/index.js"

import * as keepalive from "@goscript/google.golang.org/grpc/keepalive/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import type * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as serviceconfig2 from "@goscript/google.golang.org/grpc/serviceconfig/index.js"

import * as stats3 from "@goscript/google.golang.org/grpc/stats/index.js"

import type * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_call from "./call.gs.ts"

import * as __goscript_clientconn from "./clientconn.gs.ts"

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
import "@goscript/fmt/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/grpc/balancer/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/balancer/gracefulswitch/index.js"
import "@goscript/google.golang.org/grpc/internal/channelz/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/channelz/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/encoding/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/backoff/index.js"
import "@goscript/google.golang.org/grpc/internal/binarylog/index.js"
import "@goscript/google.golang.org/grpc/internal/idle/index.js"
import "@goscript/google.golang.org/grpc/internal/resolver/index.js"
import "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"
import "@goscript/google.golang.org/grpc/internal/stats/index.js"
import "@goscript/google.golang.org/grpc/internal/transport/index.js"
import "@goscript/google.golang.org/grpc/keepalive/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/grpc/serviceconfig/index.js"
import "@goscript/google.golang.org/grpc/stats/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
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
import "./stream.gs.ts"
import "./trace.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc", ["grpc.ccBalancerWrapper", "grpc.acBalancerWrapper", "grpc.refCountedProducer"])

export class ccBalancerWrapper {
	// The following fields are initialized when the wrapper is created and are
	// read-only afterwards, and therefore can be accessed without a mutex.
	public get cc(): __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null {
		return this._fields.cc
	}

	public set cc(value: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null) {
		this._fields.cc = value
	}

	public get opts(): balancer2.BuildOptions {
		return this._fields.opts
	}

	public set opts(value: balancer2.BuildOptions) {
		this._fields.opts = value
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

	// The following fields are only accessed within the serializer or during
	// initialization.
	public get curBalancerName(): string {
		return this._fields.curBalancerName
	}

	public set curBalancerName(value: string) {
		this._fields.curBalancerName = value
	}

	public get balancer(): gracefulswitch.Balancer | $.VarRef<gracefulswitch.Balancer> | null {
		return this._fields.balancer
	}

	public set balancer(value: gracefulswitch.Balancer | $.VarRef<gracefulswitch.Balancer> | null) {
		this._fields.balancer = value
	}

	// The following field is protected by mu.  Caller must take cc.mu before
	// taking mu.
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get closed(): boolean {
		return this._fields.closed
	}

	public set closed(value: boolean) {
		this._fields.closed = value
	}

	public _fields: {
		cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null
		opts: balancer2.BuildOptions
		serializer: grpcsync.CallbackSerializer | $.VarRef<grpcsync.CallbackSerializer> | null
		serializerCancel: (() => void) | null
		curBalancerName: string
		balancer: gracefulswitch.Balancer | $.VarRef<gracefulswitch.Balancer> | null
		mu: sync.Mutex
		closed: boolean
	}

	constructor(init?: Partial<{cc?: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, opts?: balancer2.BuildOptions, serializer?: grpcsync.CallbackSerializer | $.VarRef<grpcsync.CallbackSerializer> | null, serializerCancel?: (() => void) | null, curBalancerName?: string, balancer?: gracefulswitch.Balancer | $.VarRef<gracefulswitch.Balancer> | null, mu?: sync.Mutex, closed?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			cc: init?.cc ?? (null! as __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null),
			opts: init?.opts ? init.opts.clone() : new balancer2.BuildOptions(undefined, true),
			serializer: init?.serializer ?? (null! as grpcsync.CallbackSerializer | $.VarRef<grpcsync.CallbackSerializer> | null),
			serializerCancel: init?.serializerCancel ?? (null! as (() => void) | null),
			curBalancerName: init?.curBalancerName ?? ("" as string),
			balancer: init?.balancer ?? (null! as gracefulswitch.Balancer | $.VarRef<gracefulswitch.Balancer> | null),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			closed: init?.closed ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ccBalancerWrapper {
		return new ccBalancerWrapper(this, true)
	}

	public __goscriptAssign(source: ccBalancerWrapper): void {
		const target = this._fields
		const values = source._fields
		target.cc = values.cc
		$.assignStruct(target.opts, values.opts)
		target.serializer = values.serializer
		target.serializerCancel = values.serializerCancel
		target.curBalancerName = values.curBalancerName
		target.balancer = values.balancer
		$.assignStruct(target.mu, values.mu)
		target.closed = values.closed
	}

	public async NewSubConn(addrs: $.Slice<resolver.Address>, opts: balancer2.NewSubConnOptions): globalThis.Promise<[balancer2.SubConn | null, $.GoError]> {
		const ccb: ccBalancerWrapper | $.VarRef<ccBalancerWrapper> | null = this;
		using __defer = new $.DisposableStack()
		const ccb$: ccBalancerWrapper = ccb == null ? $.pointerTarget<ccBalancerWrapper>(ccb) : (ccb as any).__isVarRef === true ? (ccb as any).value : (ccb as any).__goValue === undefined ? (ccb as any) : $.pointerTarget<ccBalancerWrapper>(ccb)
		await $.pointerValue<__goscript_clientconn.ClientConn>((ccb$ as ccBalancerWrapper).cc).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<__goscript_clientconn.ClientConn>((ccb$ as ccBalancerWrapper).cc).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		await (ccb$ as ccBalancerWrapper).mu.Lock()
		if ((ccb$ as ccBalancerWrapper).closed) {
			void (ccb$ as ccBalancerWrapper).mu.Unlock()
			return [null, fmt.Errorf("balancer is being closed; no new SubConns allowed")]
		}
		void (ccb$ as ccBalancerWrapper).mu.Unlock()

		if ($.sliceLen(addrs) == 0) {
			return [null, fmt.Errorf("grpc: cannot create SubConn with empty address list")]
		}
		let __goscriptTuple0: any = await __goscript_clientconn.ClientConn.prototype.newAddrConnLocked.call((ccb$ as ccBalancerWrapper).cc, addrs, opts)
		let ac: __goscript_clientconn.addrConn | $.VarRef<__goscript_clientconn.addrConn> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			await channelz.Warningf(__goscript_server.logger, $.interfaceValue<channelz.Entity | null>($.pointerValue<__goscript_clientconn.ClientConn>((ccb$ as ccBalancerWrapper).cc).channelz, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel")), "acBalancerWrapper: NewSubConn: failed to newAddrConn: %v", $.arrayToSlice<any>([(err as any)]))
			return [null, err]
		}
		let acbw: acBalancerWrapper | $.VarRef<acBalancerWrapper> | null = new acBalancerWrapper({ccb: ccb, ac: ac, producers: $.makeMap<balancer2.ProducerBuilder | null, refCountedProducer | $.VarRef<refCountedProducer> | null>(), stateListener: opts.StateListener})
		$.pointerValue<__goscript_clientconn.addrConn>(ac).acbw = acbw
		return [$.interfaceValue<balancer2.SubConn | null>(acbw, "*grpc.acBalancerWrapper", /* @__PURE__ */ $.pointerType("grpc.acBalancerWrapper")), null]
	}

	public async RemoveSubConn(_p0: balancer2.SubConn | null): globalThis.Promise<void> {
		const ccb: ccBalancerWrapper | $.VarRef<ccBalancerWrapper> | null = this;
		// The graceful switch balancer will never call this.
		void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).Errorf("ccb RemoveSubConn(%v) called unexpectedly, sc", null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async ResolveNow(o: resolver.ResolveNowOptions): globalThis.Promise<void> {
		const ccb: ccBalancerWrapper | $.VarRef<ccBalancerWrapper> | null = this;
		using __defer = new $.DisposableStack()
		const ccb$: ccBalancerWrapper = ccb == null ? $.pointerTarget<ccBalancerWrapper>(ccb) : (ccb as any).__isVarRef === true ? (ccb as any).value : (ccb as any).__goValue === undefined ? (ccb as any) : $.pointerTarget<ccBalancerWrapper>(ccb)
		await $.pointerValue<__goscript_clientconn.ClientConn>((ccb$ as ccBalancerWrapper).cc).mu.RLock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<__goscript_clientconn.ClientConn>((ccb$ as ccBalancerWrapper).cc).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })

		await (ccb$ as ccBalancerWrapper).mu.Lock()
		if ((ccb$ as ccBalancerWrapper).closed) {
			void (ccb$ as ccBalancerWrapper).mu.Unlock()
			return
		}
		void (ccb$ as ccBalancerWrapper).mu.Unlock()
		await __goscript_clientconn.ClientConn.prototype.resolveNowLocked.call((ccb$ as ccBalancerWrapper).cc, o)
	}

	public Target(): string {
		const ccb: ccBalancerWrapper | $.VarRef<ccBalancerWrapper> | null = this;
		return $.pointerValue<__goscript_clientconn.ClientConn>($.pointerValue<ccBalancerWrapper>(ccb).cc).target
	}

	public async UpdateAddresses(sc: balancer2.SubConn | null, addrs: $.Slice<resolver.Address>): globalThis.Promise<void> {
		const ccb: ccBalancerWrapper | $.VarRef<ccBalancerWrapper> | null = this;
		let __goscriptTuple1: any = $.typeAssertTuple<acBalancerWrapper | $.VarRef<acBalancerWrapper> | null>(sc, /* @__PURE__ */ $.pointerType("grpc.acBalancerWrapper"))
		let acbw: acBalancerWrapper | $.VarRef<acBalancerWrapper> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (!ok) {
			return
		}
		await (acbw !== null && (acbw as any).__isVarRef !== true && (acbw as any).__goValue === undefined ? ((acbw as any) as acBalancerWrapper).UpdateAddresses(addrs) : acBalancerWrapper.prototype.UpdateAddresses.call(acbw, addrs))
	}

	public async UpdateState(s: balancer2.State): globalThis.Promise<void> {
		const ccb: ccBalancerWrapper | $.VarRef<ccBalancerWrapper> | null = this;
		using __defer = new $.DisposableStack()
		const ccb$: ccBalancerWrapper = ccb == null ? $.pointerTarget<ccBalancerWrapper>(ccb) : (ccb as any).__isVarRef === true ? (ccb as any).value : (ccb as any).__goValue === undefined ? (ccb as any) : $.pointerTarget<ccBalancerWrapper>(ccb)
		await $.pointerValue<__goscript_clientconn.ClientConn>((ccb$ as ccBalancerWrapper).cc).mu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<__goscript_clientconn.ClientConn>((ccb$ as ccBalancerWrapper).cc).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
		if ($.pointerValue<__goscript_clientconn.ClientConn>((ccb$ as ccBalancerWrapper).cc).conns == null) {
			// The CC has been closed; ignore this update.
			return
		}

		await (ccb$ as ccBalancerWrapper).mu.Lock()
		if ((ccb$ as ccBalancerWrapper).closed) {
			void (ccb$ as ccBalancerWrapper).mu.Unlock()
			return
		}
		void (ccb$ as ccBalancerWrapper).mu.Unlock()
		// Update picker before updating state.  Even though the ordering here does
		// not matter, it can lead to multiple calls of Pick in the common start-up
		// case where we wait for ready and then perform an RPC.  If the picker is
		// updated later, we could call the "connecting" picker when the state is
		// updated, and then call the "ready" picker after the picker gets updated.

		// Note that there is no need to check if the balancer wrapper was closed,
		// as we know the graceful switch LB policy will not call cc if it has been
		// closed.
		__goscript_picker_wrapper.pickerWrapper.prototype.updatePicker.call($.pointerValue<__goscript_clientconn.ClientConn>((ccb$ as ccBalancerWrapper).cc).pickerWrapper, s.Picker)
		await __goscript_clientconn.connectivityStateManager.prototype.updateState.call($.pointerValue<__goscript_clientconn.ClientConn>((ccb$ as ccBalancerWrapper).cc).csMgr, s.ConnectivityState)
	}

	public async close(): globalThis.Promise<void> {
		let ccb: ccBalancerWrapper | $.VarRef<ccBalancerWrapper> | null = this;
		const ccb$: ccBalancerWrapper = ccb == null ? $.pointerTarget<ccBalancerWrapper>(ccb) : (ccb as any).__isVarRef === true ? (ccb as any).value : (ccb as any).__goValue === undefined ? (ccb as any) : $.pointerTarget<ccBalancerWrapper>(ccb)
		await (ccb$ as ccBalancerWrapper).mu.Lock();
		;(ccb$ as ccBalancerWrapper).closed = true
		void (ccb$ as ccBalancerWrapper).mu.Unlock()
		await channelz.Info(__goscript_server.logger, $.interfaceValue<channelz.Entity | null>($.pointerValue<__goscript_clientconn.ClientConn>((ccb$ as ccBalancerWrapper).cc).channelz, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel")), $.arrayToSlice<any>(["ccBalancerWrapper: closing"]))
		await grpcsync.CallbackSerializer.prototype.TrySchedule.call((ccb$ as ccBalancerWrapper).serializer, $.functionValue(async (_p0: context.Context | null): globalThis.Promise<void> => {
			if ((ccb$ as ccBalancerWrapper).balancer == null) {
				return
			}
			await gracefulswitch.Balancer.prototype.Close.call((ccb$ as ccBalancerWrapper).balancer);
			;(ccb$ as ccBalancerWrapper).balancer = null
		}, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo)))
		void (__goscriptAwait = (ccb$ as ccBalancerWrapper).serializerCancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async exitIdle(): globalThis.Promise<void> {
		const ccb: ccBalancerWrapper | $.VarRef<ccBalancerWrapper> | null = this;
		const ccb$: ccBalancerWrapper = ccb == null ? $.pointerTarget<ccBalancerWrapper>(ccb) : (ccb as any).__isVarRef === true ? (ccb as any).value : (ccb as any).__goValue === undefined ? (ccb as any) : $.pointerTarget<ccBalancerWrapper>(ccb)
		await grpcsync.CallbackSerializer.prototype.TrySchedule.call((ccb$ as ccBalancerWrapper).serializer, $.functionValue(async (ctx: context.Context | null): globalThis.Promise<void> => {
			if (((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) || ((ccb$ as ccBalancerWrapper).balancer == null)) {
				return
			}
			await gracefulswitch.Balancer.prototype.ExitIdle.call((ccb$ as ccBalancerWrapper).balancer)
		}, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo)))
	}

	public async resolverError(err: $.GoError): globalThis.Promise<void> {
		const ccb: ccBalancerWrapper | $.VarRef<ccBalancerWrapper> | null = this;
		const ccb$: ccBalancerWrapper = ccb == null ? $.pointerTarget<ccBalancerWrapper>(ccb) : (ccb as any).__isVarRef === true ? (ccb as any).value : (ccb as any).__goValue === undefined ? (ccb as any) : $.pointerTarget<ccBalancerWrapper>(ccb)
		await grpcsync.CallbackSerializer.prototype.TrySchedule.call((ccb$ as ccBalancerWrapper).serializer, $.functionValue(async (ctx: context.Context | null): globalThis.Promise<void> => {
			if (((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) || ((ccb$ as ccBalancerWrapper).balancer == null)) {
				return
			}
			await gracefulswitch.Balancer.prototype.ResolverError.call((ccb$ as ccBalancerWrapper).balancer, err)
		}, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo)))
	}

	public async updateClientConnState(ccs: balancer2.ClientConnState | $.VarRef<balancer2.ClientConnState> | null): globalThis.Promise<$.GoError> {
		const ccb: ccBalancerWrapper | $.VarRef<ccBalancerWrapper> | null = this;
		const ccb$: ccBalancerWrapper = ccb == null ? $.pointerTarget<ccBalancerWrapper>(ccb) : (ccb as any).__isVarRef === true ? (ccb as any).value : (ccb as any).__goValue === undefined ? (ccb as any) : $.pointerTarget<ccBalancerWrapper>(ccb)
		let errCh: $.Channel<$.GoError> | null = $.makeChannel<$.GoError>(0, null! as $.GoError, "both")
		let uccs: ((ctx: context.Context | null) => void) | null = $.functionValue(async (ctx: context.Context | null): globalThis.Promise<void> => {
			using __defer = new $.DisposableStack()
			const __goscriptDeferArg0 = errCh
			__defer.defer(() => { __goscriptDeferArg0!.close() })
			if (((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) || ((ccb$ as ccBalancerWrapper).balancer == null)) {
				return
			}
			let name = await gracefulswitch.ChildName($.pointerValue<balancer2.ClientConnState>(ccs).BalancerConfig)
			if (!$.stringEqual((ccb$ as ccBalancerWrapper).curBalancerName, name)) {
				;(ccb$ as ccBalancerWrapper).curBalancerName = name
				await channelz.Infof(__goscript_server.logger, $.interfaceValue<channelz.Entity | null>($.pointerValue<__goscript_clientconn.ClientConn>((ccb$ as ccBalancerWrapper).cc).channelz, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel")), "Channel switches to new LB policy %q", $.arrayToSlice<any>([name]))
			}
			let err = await gracefulswitch.Balancer.prototype.UpdateClientConnState.call((ccb$ as ccBalancerWrapper).balancer, ($.pointerValue<balancer2.ClientConnState>(ccs)).clone())
			if ((__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).V(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && (err != null)) {
				void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).Infof("error from balancer.UpdateClientConnState: %v", $.arrayToSlice<any>([(err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			await $.chanSend(errCh, err)
		}, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo))
		let onFailure: (() => void) | null = $.functionValue((): void => {
			errCh!.close()
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))

		// UpdateClientConnState can race with Close, and when the latter wins, the
		// serializer is closed, and the attempt to schedule the callback will fail.
		// It is acceptable to ignore this failure. But since we want to handle the
		// state update in a blocking fashion (when we successfully schedule the
		// callback), we have to use the ScheduleOr method and not the MaybeSchedule
		// method on the serializer.
		await grpcsync.CallbackSerializer.prototype.ScheduleOr.call((ccb$ as ccBalancerWrapper).serializer, uccs, onFailure)
		return await $.chanRecv(errCh)
	}

	static __typeInfo = $.registerStructType(
		"grpc.ccBalancerWrapper",
		() => new ccBalancerWrapper(),
		() => [$.methodSignature("NewSubConn", [["addrs", /* @__PURE__ */ $.sliceType("resolver.Address")], ["opts", "balancer.NewSubConnOptions"]], ["balancer.SubConn", "error"], true), $.methodSignature("RemoveSubConn", ["balancer.SubConn"], [], true), $.methodSignature("ResolveNow", [["o", "resolver.ResolveNowOptions"]], [], true), $.methodSignature("Target", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("UpdateAddresses", [["sc", "balancer.SubConn"], ["addrs", /* @__PURE__ */ $.sliceType("resolver.Address")]], [], true), $.methodSignature("UpdateState", [["s", "balancer.State"]], [], true), $.methodSignature("close", [], [], true), $.methodSignature("exitIdle", [], [], true), $.methodSignature("resolverError", [["err", "error"]], [], true), $.methodSignature("updateClientConnState", [["ccs", /* @__PURE__ */ $.pointerType("balancer.ClientConnState")]], ["error"], true)],
		ccBalancerWrapper,
		() => [/* @__PURE__ */ $.structField("cc", /* @__PURE__ */ $.pointerType("grpc.ClientConn"), [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("opts", "balancer.BuildOptions", [1], 8, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("serializer", /* @__PURE__ */ $.pointerType("grpcsync.CallbackSerializer"), [2], 256, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("serializerCancel", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), [3], 264, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("curBalancerName", /* @__PURE__ */ $.basicType("string"), [4], 272, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("balancer", /* @__PURE__ */ $.pointerType("gracefulswitch.Balancer"), [5], 288, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [6], 296, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("closed", /* @__PURE__ */ $.basicType("bool"), [7], 304, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class acBalancerWrapper {
	public get ac(): __goscript_clientconn.addrConn | $.VarRef<__goscript_clientconn.addrConn> | null {
		return this._fields.ac
	}

	public set ac(value: __goscript_clientconn.addrConn | $.VarRef<__goscript_clientconn.addrConn> | null) {
		this._fields.ac = value
	}

	public get ccb(): ccBalancerWrapper | $.VarRef<ccBalancerWrapper> | null {
		return this._fields.ccb
	}

	public set ccb(value: ccBalancerWrapper | $.VarRef<ccBalancerWrapper> | null) {
		this._fields.ccb = value
	}

	public get stateListener(): ((_p0: balancer2.SubConnState) => void) | null {
		return this._fields.stateListener
	}

	public set stateListener(value: ((_p0: balancer2.SubConnState) => void) | null) {
		this._fields.stateListener = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get producers(): globalThis.Map<balancer2.ProducerBuilder | null, refCountedProducer | $.VarRef<refCountedProducer> | null> | null {
		return this._fields.producers
	}

	public set producers(value: globalThis.Map<balancer2.ProducerBuilder | null, refCountedProducer | $.VarRef<refCountedProducer> | null> | null) {
		this._fields.producers = value
	}

	public _fields: {
		ac: __goscript_clientconn.addrConn | $.VarRef<__goscript_clientconn.addrConn> | null
		ccb: ccBalancerWrapper | $.VarRef<ccBalancerWrapper> | null
		stateListener: ((_p0: balancer2.SubConnState) => void) | null
		mu: sync.Mutex
		producers: globalThis.Map<balancer2.ProducerBuilder | null, refCountedProducer | $.VarRef<refCountedProducer> | null> | null
	}

	constructor(init?: Partial<{ac?: __goscript_clientconn.addrConn | $.VarRef<__goscript_clientconn.addrConn> | null, ccb?: ccBalancerWrapper | $.VarRef<ccBalancerWrapper> | null, stateListener?: ((_p0: balancer2.SubConnState) => void) | null, mu?: sync.Mutex, producers?: globalThis.Map<balancer2.ProducerBuilder | null, refCountedProducer | $.VarRef<refCountedProducer> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ac: init?.ac ?? (null! as __goscript_clientconn.addrConn | $.VarRef<__goscript_clientconn.addrConn> | null),
			ccb: init?.ccb ?? (null! as ccBalancerWrapper | $.VarRef<ccBalancerWrapper> | null),
			stateListener: init?.stateListener ?? (null! as ((_p0: balancer2.SubConnState) => void) | null),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			producers: init?.producers ?? (null! as globalThis.Map<balancer2.ProducerBuilder | null, refCountedProducer | $.VarRef<refCountedProducer> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): acBalancerWrapper {
		return new acBalancerWrapper(this, true)
	}

	public __goscriptAssign(source: acBalancerWrapper): void {
		const target = this._fields
		const values = source._fields
		target.ac = values.ac
		target.ccb = values.ccb
		target.stateListener = values.stateListener
		$.assignStruct(target.mu, values.mu)
		target.producers = values.producers
	}

	public async Connect(): globalThis.Promise<void> {
		const acbw: acBalancerWrapper | $.VarRef<acBalancerWrapper> | null = this;
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.connect())($.pointerValue<__goscript_clientconn.addrConn>($.pointerValue<acBalancerWrapper>(acbw).ac)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "google.golang.org/grpc.(*addrConn).connect-fm")
		queueMicrotask(async () => { await __goscriptDeferCallee3() })
	}

	public async GetOrBuildProducer(pb: balancer2.ProducerBuilder | null): globalThis.Promise<[balancer2.Producer | null, (() => void) | null]> {
		let acbw: acBalancerWrapper | $.VarRef<acBalancerWrapper> | null = this;
		using __defer = new $.DisposableStack()
		const acbw$: acBalancerWrapper = acbw == null ? $.pointerTarget<acBalancerWrapper>(acbw) : (acbw as any).__isVarRef === true ? (acbw as any).value : (acbw as any).__goValue === undefined ? (acbw as any) : $.pointerTarget<acBalancerWrapper>(acbw)
		await (acbw$ as acBalancerWrapper).mu.Lock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())((acbw$ as acBalancerWrapper).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })

		// Look up existing producer from this builder.
		let pData: refCountedProducer | $.VarRef<refCountedProducer> | null = $.mapGet<balancer2.ProducerBuilder | null, refCountedProducer | $.VarRef<refCountedProducer> | null, refCountedProducer | $.VarRef<refCountedProducer> | null>((acbw$ as acBalancerWrapper).producers, pb, null)[0]
		if (pData == null) {
			// Not found; create a new one and add it to the producers map.
			let [p, closeFn] = await (pb !== null && (pb as any).__isVarRef !== true && (pb as any).__goValue === undefined ? (pb as Exclude<balancer2.ProducerBuilder, null>) : $.pointerValue<Exclude<balancer2.ProducerBuilder, null>>(pb)).Build($.interfaceValue(acbw, "*grpc.acBalancerWrapper", /* @__PURE__ */ $.pointerType("grpc.acBalancerWrapper")))
			pData = new refCountedProducer({producer: p, close: closeFn})
			$.mapSet((acbw$ as acBalancerWrapper).producers, pb, pData)
		}
		// Account for this new reference.
		$.pointerValue<refCountedProducer>(pData).refs++

		// Return a cleanup function wrapped in a OnceFunc to remove this reference
		// and delete the refCountedProducer from the map if the total reference
		// count goes to zero.
		let unref: (() => void) | null = $.functionValue(async (): globalThis.Promise<void> => {
			await using __defer = new $.AsyncDisposableStack()
			await (acbw$ as acBalancerWrapper).mu.Lock()
			$.pointerValue<refCountedProducer>(pData).refs--
			if ($.pointerValue<refCountedProducer>(pData).refs == 0) {
				const __goscriptDeferCallee5 = $.pointerValue<refCountedProducer>(pData).close
				__defer.defer(async () => { await __goscriptDeferCallee5!() })
				$.deleteMapEntry((acbw$ as acBalancerWrapper).producers, pb)
			}
			void (acbw$ as acBalancerWrapper).mu.Unlock()
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
		return [$.pointerValue<refCountedProducer>(pData).producer, grpcsync.OnceFunc(unref)]
	}

	public async Invoke(ctx: context.Context | null, method: string, args: any, reply: any, opts: $.Slice<__goscript_rpc_util.CallOption | null>): globalThis.Promise<$.GoError> {
		const acbw: acBalancerWrapper | $.VarRef<acBalancerWrapper> | null = this;
		let [cs, err] = await (acbw !== null && (acbw as any).__isVarRef !== true && (acbw as any).__goValue === undefined ? ((acbw as any) as acBalancerWrapper).NewStream(ctx, __goscript_call.__goscript_get_unaryStreamDesc(), method, opts) : acBalancerWrapper.prototype.NewStream.call(acbw, ctx, __goscript_call.__goscript_get_unaryStreamDesc(), method, opts))
		if (err != null) {
			return err
		}
		{
			let __goscriptShadow0 = (__goscriptAwait = (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? (cs as Exclude<__goscript_stream.ClientStream, null>) : $.pointerValue<Exclude<__goscript_stream.ClientStream, null>>(cs)).SendMsg(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow0 != null) {
				return __goscriptShadow0
			}
		}
		return (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? (cs as Exclude<__goscript_stream.ClientStream, null>) : $.pointerValue<Exclude<__goscript_stream.ClientStream, null>>(cs)).RecvMsg(reply)
	}

	public async NewStream(ctx: context.Context | null, desc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null, method: string, opts: $.Slice<__goscript_rpc_util.CallOption | null>): globalThis.Promise<[__goscript_stream.ClientStream | null, $.GoError]> {
		const acbw: acBalancerWrapper | $.VarRef<acBalancerWrapper> | null = this;
		const acbw$: acBalancerWrapper = acbw == null ? $.pointerTarget<acBalancerWrapper>(acbw) : (acbw as any).__isVarRef === true ? (acbw as any).value : (acbw as any).__goValue === undefined ? (acbw as any) : $.pointerTarget<acBalancerWrapper>(acbw)
		let [transport, err] = await __goscript_clientconn.addrConn.prototype.getTransport.call((acbw$ as acBalancerWrapper).ac, ctx)
		if (err != null) {
			return [null, err]
		}
		return __goscript_stream.newNonRetryClientStream(ctx, desc, method, transport, (acbw$ as acBalancerWrapper).ac, opts)
	}

	public async Shutdown(): globalThis.Promise<void> {
		const acbw: acBalancerWrapper | $.VarRef<acBalancerWrapper> | null = this;
		const acbw$: acBalancerWrapper = acbw == null ? $.pointerTarget<acBalancerWrapper>(acbw) : (acbw as any).__isVarRef === true ? (acbw as any).value : (acbw as any).__goValue === undefined ? (acbw as any) : $.pointerTarget<acBalancerWrapper>(acbw)
		await __goscript_clientconn.ClientConn.prototype.removeAddrConn.call($.pointerValue<ccBalancerWrapper>((acbw$ as acBalancerWrapper).ccb).cc, (acbw$ as acBalancerWrapper).ac, __goscript_clientconn.errConnDrain)
	}

	public async String(): globalThis.Promise<string> {
		const acbw: acBalancerWrapper | $.VarRef<acBalancerWrapper> | null = this;
		return fmt.Sprintf("SubConn(id:%d)", $.basicInterfaceValue($.pointerValue<channelz.SubChannel>($.pointerValue<__goscript_clientconn.addrConn>($.pointerValue<acBalancerWrapper>(acbw).ac).channelz).ID, "int64"))
	}

	public async UpdateAddresses(addrs: $.Slice<resolver.Address>): globalThis.Promise<void> {
		const acbw: acBalancerWrapper | $.VarRef<acBalancerWrapper> | null = this;
		await __goscript_clientconn.addrConn.prototype.updateAddrs.call($.pointerValue<acBalancerWrapper>(acbw).ac, addrs)
	}

	public async updateState(s: connectivity.State, curAddr: resolver.Address, err: $.GoError): globalThis.Promise<void> {
		const acbw: acBalancerWrapper | $.VarRef<acBalancerWrapper> | null = this;
		const acbw$: acBalancerWrapper = acbw == null ? $.pointerTarget<acBalancerWrapper>(acbw) : (acbw as any).__isVarRef === true ? (acbw as any).value : (acbw as any).__goValue === undefined ? (acbw as any) : $.pointerTarget<acBalancerWrapper>(acbw)
		await grpcsync.CallbackSerializer.prototype.TrySchedule.call($.pointerValue<ccBalancerWrapper>((acbw$ as acBalancerWrapper).ccb).serializer, $.functionValue(async (ctx: context.Context | null): globalThis.Promise<void> => {
			using __defer = new $.DisposableStack()
			if (((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) || ($.pointerValue<ccBalancerWrapper>((acbw$ as acBalancerWrapper).ccb).balancer == null)) {
				return
			}
			// Even though it is optional for balancers, gracefulswitch ensures
			// opts.StateListener is set, so this cannot ever be nil.
			// TODO: delete this comment when UpdateSubConnState is removed.
			let scs = $.varRef(new balancer2.SubConnState({ConnectivityState: s, ConnectionError: err}, true))
			if (s == 2) {
				void (__goscriptAwait = setConnectedAddress!(scs, (curAddr).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			void (__goscriptAwait = (acbw$ as acBalancerWrapper).stateListener!((scs.value).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await $.pointerValue<__goscript_clientconn.addrConn>((acbw$ as acBalancerWrapper).ac).mu.Lock()
			const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<__goscript_clientconn.addrConn>((acbw$ as acBalancerWrapper).ac).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee6() })
			if (s == 2) {
				// When changing states to READY, reset stateReadyChan.  Wait until
				// after we notify the LB policy's listener(s) in order to prevent
				// ac.getTransport() from unblocking before the LB policy starts
				// tracking the subchannel as READY.
				$.pointerValue<__goscript_clientconn.addrConn>((acbw$ as acBalancerWrapper).ac).stateReadyChan!.close()
				$.pointerValue<__goscript_clientconn.addrConn>((acbw$ as acBalancerWrapper).ac).stateReadyChan = $.makeChannel<{}>(0, {}, "both")
			}
		}, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo)))
	}

	static __typeInfo = $.registerStructType(
		"grpc.acBalancerWrapper",
		() => new acBalancerWrapper(),
		() => [$.methodSignature("Connect", [], [], true), $.methodSignature("GetOrBuildProducer", [["pb", "balancer.ProducerBuilder"]], ["balancer.Producer", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("Invoke", [["ctx", "context.Context"], ["method", /* @__PURE__ */ $.basicType("string")], ["args", { kind: $.TypeKind.Interface, methods: [] }], ["reply", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType("grpc.CallOption")]], ["error"], true), $.methodSignature("NewStream", [["ctx", "context.Context"], ["desc", /* @__PURE__ */ $.pointerType("grpc.StreamDesc")], ["method", /* @__PURE__ */ $.basicType("string")], ["opts", /* @__PURE__ */ $.sliceType("grpc.CallOption")]], ["grpc.ClientStream", "error"], true), $.methodSignature("Shutdown", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("UpdateAddresses", [["addrs", /* @__PURE__ */ $.sliceType("resolver.Address")]], [], true), $.methodSignature("updateState", [["s", /* @__PURE__ */ $.basicType("int", "connectivity.State")], ["curAddr", "resolver.Address"], ["err", "error"]], [], true)],
		acBalancerWrapper,
		() => [/* @__PURE__ */ $.structField("ac", /* @__PURE__ */ $.pointerType("grpc.addrConn"), [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("ccb", /* @__PURE__ */ $.pointerType("grpc.ccBalancerWrapper"), [1], 8, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("stateListener", ({ kind: $.TypeKind.Function, params: ["balancer.SubConnState"], results: [] } as $.FunctionTypeInfo), [2], 16, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [3], 24, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("producers", /* @__PURE__ */ $.mapType("balancer.ProducerBuilder", /* @__PURE__ */ $.pointerType("grpc.refCountedProducer")), [4], 32, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class refCountedProducer {
	public get producer(): balancer2.Producer | null {
		return this._fields.producer
	}

	public set producer(value: balancer2.Producer | null) {
		this._fields.producer = value
	}

	public get refs(): number {
		return this._fields.refs
	}

	public set refs(value: number) {
		this._fields.refs = value
	}

	public get close(): (() => void) | null {
		return this._fields.close
	}

	public set close(value: (() => void) | null) {
		this._fields.close = value
	}

	public _fields: {
		producer: balancer2.Producer | null
		refs: number
		close: (() => void) | null
	}

	constructor(init?: Partial<{producer?: balancer2.Producer | null, refs?: number, close?: (() => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			producer: init?.producer ?? (null! as balancer2.Producer | null),
			refs: init?.refs ?? (0 as number),
			close: init?.close ?? (null! as (() => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): refCountedProducer {
		return new refCountedProducer(this, true)
	}

	public __goscriptAssign(source: refCountedProducer): void {
		const target = this._fields
		const values = source._fields
		target.producer = $.assignFieldValue(target.producer, values.producer, "balancer.Producer")
		target.refs = values.refs
		target.close = values.close
	}

	static __typeInfo = $.registerStructType(
		"grpc.refCountedProducer",
		() => new refCountedProducer(),
		() => [],
		refCountedProducer,
		() => [/* @__PURE__ */ $.structField("producer", "balancer.Producer", [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("refs", /* @__PURE__ */ $.basicType("int"), [1], 16, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("close", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [2], 24, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export let setConnectedAddress: ((_p0: balancer2.SubConnState | $.VarRef<balancer2.SubConnState> | null, _p1: resolver.Address) => void) | null = $.mustTypeAssert<((_p0: balancer2.SubConnState | $.VarRef<balancer2.SubConnState> | null, _p1: resolver.Address) => void) | null>(internal.SetConnectedAddress, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("balancer.SubConnState"), "resolver.Address"], results: [] } as $.FunctionTypeInfo))

export function __goscript_set_setConnectedAddress(__goscriptValue: ((_p0: balancer2.SubConnState | $.VarRef<balancer2.SubConnState> | null, _p1: resolver.Address) => void) | null): void {
	setConnectedAddress = __goscriptValue
}

export async function newCCBalancerWrapper(cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null): globalThis.Promise<ccBalancerWrapper | $.VarRef<ccBalancerWrapper> | null> {
	const cc$: __goscript_clientconn.ClientConn = cc == null ? $.pointerTarget<__goscript_clientconn.ClientConn>(cc) : (cc as any).__isVarRef === true ? (cc as any).value : (cc as any).__goValue === undefined ? (cc as any) : $.pointerTarget<__goscript_clientconn.ClientConn>(cc)
	let __goscriptTuple2: any = context.WithCancel($.pointerValueOrNil((cc$ as __goscript_clientconn.ClientConn).ctx)!)
	let ctx = __goscriptTuple2[0]
	let cancel = __goscriptTuple2[1]
	let ccb: ccBalancerWrapper | $.VarRef<ccBalancerWrapper> | null = (await (async () => { const __goscriptLiteralField0 = await grpcsync.NewCallbackSerializer(ctx); return new ccBalancerWrapper({cc: cc, opts: new balancer2.BuildOptions({DialCreds: (cc$ as __goscript_clientconn.ClientConn).dopts.copts.TransportCredentials, CredsBundle: (cc$ as __goscript_clientconn.ClientConn).dopts.copts.CredsBundle, Dialer: (cc$ as __goscript_clientconn.ClientConn).dopts.copts.Dialer, Authority: (cc$ as __goscript_clientconn.ClientConn).authority, CustomUserAgent: (cc$ as __goscript_clientconn.ClientConn).dopts.copts.UserAgent, ChannelzParent: $.interfaceValue<channelz2.Identifier | null>((cc$ as __goscript_clientconn.ClientConn).channelz, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel")), Target: (cc$ as __goscript_clientconn.ClientConn).parsedTarget, MetricsRecorder: $.interfaceValue<stats.MetricsRecorder | null>((cc$ as __goscript_clientconn.ClientConn).metricsRecorderList, "*stats.MetricsRecorderList", /* @__PURE__ */ $.pointerType("stats.MetricsRecorderList"))}, true), serializer: __goscriptLiteralField0, serializerCancel: cancel}) })())
	let ccb$: ccBalancerWrapper = ccb == null ? $.pointerTarget<ccBalancerWrapper>(ccb) : (ccb as any).__isVarRef === true ? (ccb as any).value : (ccb as any).__goValue === undefined ? (ccb as any) : $.pointerTarget<ccBalancerWrapper>(ccb);
	;(ccb$ as ccBalancerWrapper).balancer = gracefulswitch.NewBalancer($.interfaceValue<balancer2.ClientConn | null>(ccb, "*grpc.ccBalancerWrapper", /* @__PURE__ */ $.pointerType("grpc.ccBalancerWrapper")), (ccb$ as ccBalancerWrapper).opts)
	return ccb
}

var __goscriptAwait: any
