// Generated file based on subchannel.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as time from "@goscript/time/index.js"

import * as context from "@goscript/golang.org/x/net/context/index.js"

import * as sync from "@goscript/sync/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as context2 from "@goscript/context/index.js"

import * as relay from "@goscript/github.com/uber/tchannel-go/relay/index.js"

import type * as arg2 from "@goscript/github.com/uber/tchannel-go/thrift/arg2/index.js"

import * as tos from "@goscript/github.com/uber/tchannel-go/tos/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import type * as io from "@goscript/io/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as net from "@goscript/net/index.js"

import * as syscall from "@goscript/syscall/index.js"

import type * as __goscript__arguments from "./arguments.gs.ts"

import * as __goscript_calloptions from "./calloptions.gs.ts"

import * as __goscript_channel from "./channel.gs.ts"

import type * as __goscript_channelstate_string from "./channelstate_string.gs.ts"

import * as __goscript_checksum from "./checksum.gs.ts"

import * as __goscript_connection from "./connection.gs.ts"

import * as __goscript_connection_direction from "./connection_direction.gs.ts"

import * as __goscript_connectionstate_string from "./connectionstate_string.gs.ts"

import * as __goscript_fragmenting_reader from "./fragmenting_reader.gs.ts"

import * as __goscript_fragmenting_writer from "./fragmenting_writer.gs.ts"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_frame_pool from "./frame_pool.gs.ts"

import * as __goscript_handlers from "./handlers.gs.ts"

import * as __goscript_health from "./health.gs.ts"

import type * as __goscript_idle_sweep from "./idle_sweep.gs.ts"

import * as __goscript_inbound from "./inbound.gs.ts"

import * as __goscript_introspection from "./introspection.gs.ts"

import * as __goscript_logger from "./logger.gs.ts"

import * as __goscript_messages from "./messages.gs.ts"

import * as __goscript_messagetype_string from "./messagetype_string.gs.ts"

import * as __goscript_mex from "./mex.gs.ts"

import * as __goscript_outbound from "./outbound.gs.ts"

import * as __goscript_peer from "./peer.gs.ts"

import * as __goscript_peer_heap from "./peer_heap.gs.ts"

import * as __goscript_peer_strategies from "./peer_strategies.gs.ts"

import * as __goscript_preinit_connection from "./preinit_connection.gs.ts"

import * as __goscript_relay from "./relay.gs.ts"

import * as __goscript_relay_api from "./relay_api.gs.ts"

import * as __goscript_relay_messages from "./relay_messages.gs.ts"

import * as __goscript_relay_timer_pool from "./relay_timer_pool.gs.ts"

import * as __goscript_reqres from "./reqres.gs.ts"

import * as __goscript_reqresreaderstate_string from "./reqresreaderstate_string.gs.ts"

import * as __goscript_reqreswriterstate_string from "./reqreswriterstate_string.gs.ts"

import * as __goscript_retry from "./retry.gs.ts"

import * as __goscript_retryon_string from "./retryon_string.gs.ts"

import * as __goscript_root_peer_list from "./root_peer_list.gs.ts"

import * as __goscript_sockio_non_unix from "./sockio_non_unix.gs.ts"

import * as __goscript_stats from "./stats.gs.ts"

import * as __goscript_tracing from "./tracing.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/sync/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/uber/tchannel-go/relay/index.js"
import "@goscript/github.com/uber/tchannel-go/tos/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/net/index.js"
import "@goscript/syscall/index.js"
import "./calloptions.gs.ts"
import "./channel.gs.ts"
import "./checksum.gs.ts"
import "./connection.gs.ts"
import "./connection_direction.gs.ts"
import "./connectionstate_string.gs.ts"
import "./fragmenting_reader.gs.ts"
import "./fragmenting_writer.gs.ts"
import "./frame.gs.ts"
import "./frame_pool.gs.ts"
import "./handlers.gs.ts"
import "./health.gs.ts"
import "./inbound.gs.ts"
import "./introspection.gs.ts"
import "./logger.gs.ts"
import "./messages.gs.ts"
import "./messagetype_string.gs.ts"
import "./mex.gs.ts"
import "./outbound.gs.ts"
import "./peer.gs.ts"
import "./peer_heap.gs.ts"
import "./peer_strategies.gs.ts"
import "./preinit_connection.gs.ts"
import "./relay.gs.ts"
import "./relay_api.gs.ts"
import "./relay_messages.gs.ts"
import "./relay_timer_pool.gs.ts"
import "./reqres.gs.ts"
import "./reqresreaderstate_string.gs.ts"
import "./reqreswriterstate_string.gs.ts"
import "./retry.gs.ts"
import "./retryon_string.gs.ts"
import "./root_peer_list.gs.ts"
import "./sockio_non_unix.gs.ts"
import "./stats.gs.ts"
import "./tracing.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.SubChannelOption", "tchannel.SubChannel", "tchannel.subChannelMap"])

export type SubChannelOption = ((_p0: SubChannel | $.VarRef<SubChannel> | null) => void) | null

export class SubChannel {
	public get RWMutex(): sync.RWMutex {
		return this._fields.RWMutex
	}

	public set RWMutex(value: sync.RWMutex) {
		this._fields.RWMutex = value
	}

	public get serviceName(): string {
		return this._fields.serviceName
	}

	public set serviceName(value: string) {
		this._fields.serviceName = value
	}

	public get topChannel(): __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null {
		return this._fields.topChannel
	}

	public set topChannel(value: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null) {
		this._fields.topChannel = value
	}

	public get defaultCallOptions(): __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null {
		return this._fields.defaultCallOptions
	}

	public set defaultCallOptions(value: __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null) {
		this._fields.defaultCallOptions = value
	}

	public get peers(): __goscript_peer.PeerList | $.VarRef<__goscript_peer.PeerList> | null {
		return this._fields.peers
	}

	public set peers(value: __goscript_peer.PeerList | $.VarRef<__goscript_peer.PeerList> | null) {
		this._fields.peers = value
	}

	public get handler(): __goscript_handlers.Handler | null {
		return this._fields.handler
	}

	public set handler(value: __goscript_handlers.Handler | null) {
		this._fields.handler = value
	}

	public get logger(): __goscript_logger.Logger | null {
		return this._fields.logger
	}

	public set logger(value: __goscript_logger.Logger | null) {
		this._fields.logger = value
	}

	public get statsReporter(): __goscript_stats.StatsReporter | null {
		return this._fields.statsReporter
	}

	public set statsReporter(value: __goscript_stats.StatsReporter | null) {
		this._fields.statsReporter = value
	}

	public _fields: {
		RWMutex: sync.RWMutex
		serviceName: string
		topChannel: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null
		defaultCallOptions: __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null
		peers: __goscript_peer.PeerList | $.VarRef<__goscript_peer.PeerList> | null
		handler: __goscript_handlers.Handler | null
		logger: __goscript_logger.Logger | null
		statsReporter: __goscript_stats.StatsReporter | null
	}

	constructor(init?: Partial<{RWMutex?: sync.RWMutex, serviceName?: string, topChannel?: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null, defaultCallOptions?: __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null, peers?: __goscript_peer.PeerList | $.VarRef<__goscript_peer.PeerList> | null, handler?: __goscript_handlers.Handler | null, logger?: __goscript_logger.Logger | null, statsReporter?: __goscript_stats.StatsReporter | null}>, __goscriptValue?: boolean) {
		this._fields = {
			RWMutex: init?.RWMutex ? $.markAsStructValue($.cloneStructValue(init.RWMutex)) : $.markAsStructValue(new sync.RWMutex()),
			serviceName: init?.serviceName ?? ("" as string),
			topChannel: init?.topChannel ?? (null! as __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null),
			defaultCallOptions: init?.defaultCallOptions ?? (null! as __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null),
			peers: init?.peers ?? (null! as __goscript_peer.PeerList | $.VarRef<__goscript_peer.PeerList> | null),
			handler: init?.handler ?? (null! as __goscript_handlers.Handler | null),
			logger: init?.logger ?? (null! as __goscript_logger.Logger | null),
			statsReporter: init?.statsReporter ?? (null! as __goscript_stats.StatsReporter | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SubChannel {
		return new SubChannel(this, true)
	}

	public __goscriptAssign(source: SubChannel): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.RWMutex, values.RWMutex)
		target.serviceName = values.serviceName
		target.topChannel = values.topChannel
		target.defaultCallOptions = values.defaultCallOptions
		target.peers = values.peers
		target.handler = $.assignFieldValue(target.handler, values.handler, "tchannel.Handler")
		target.logger = $.assignFieldValue(target.logger, values.logger, "tchannel.Logger")
		target.statsReporter = $.assignFieldValue(target.statsReporter, values.statsReporter, "tchannel.StatsReporter")
	}

	public async BeginCall(ctx: context.Context | null, methodName: string, callOptions: __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null): globalThis.Promise<[__goscript_outbound.OutboundCall | $.VarRef<__goscript_outbound.OutboundCall> | null, $.GoError]> {
		const c: SubChannel | $.VarRef<SubChannel> | null = this;
		if (callOptions == null) {
			callOptions = __goscript_calloptions.defaultCallOptions
		}

		let __goscriptTuple0: any = await __goscript_peer.PeerList.prototype.Get.call($.pointerValue<SubChannel>(c).peers, __goscript_retry.RequestState.prototype.PrevSelectedPeers.call($.pointerValue<__goscript_calloptions.CallOptions>(callOptions).RequestState))
		let peer: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}

		return __goscript_peer.Peer.prototype.BeginCall.call(peer, ctx, (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as SubChannel).ServiceName() : SubChannel.prototype.ServiceName.call(c)), methodName, callOptions)
	}

	public async GetHandlers(): globalThis.Promise<globalThis.Map<string, __goscript_handlers.Handler | null> | null> {
		const c: SubChannel | $.VarRef<SubChannel> | null = this;
		let __goscriptTuple1: any = $.typeAssertTuple<__goscript_handlers.handlerMap | $.VarRef<__goscript_handlers.handlerMap> | null>($.pointerValue<SubChannel>(c).handler, /* @__PURE__ */ $.pointerType("tchannel.handlerMap"))
		let handlers: __goscript_handlers.handlerMap | $.VarRef<__goscript_handlers.handlerMap> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		let handlers$: __goscript_handlers.handlerMap = handlers == null ? $.pointerTarget<__goscript_handlers.handlerMap>(handlers) : (handlers as any).__isVarRef === true ? (handlers as any).value : (handlers as any).__goValue === undefined ? (handlers as any) : $.pointerTarget<__goscript_handlers.handlerMap>(handlers)
		if (!ok) {
			$.panic(await fmt.Sprintf("handler for SubChannel(%v) was changed to disallow method registration", (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as SubChannel).ServiceName() : SubChannel.prototype.ServiceName.call(c))))
		}

		await (handlers$ as __goscript_handlers.handlerMap).RWMutex.RLock()
		let handlersMap: globalThis.Map<string, __goscript_handlers.Handler | null> | null = $.makeMap<string, __goscript_handlers.Handler | null>()
		for (let [k, v] of (handlers$ as __goscript_handlers.handlerMap).handlers?.entries() ?? []) {
			$.mapSet(handlersMap, k, v)
		}
		void (handlers$ as __goscript_handlers.handlerMap).RWMutex.RUnlock()
		return handlersMap
	}

	public async Isolated(): globalThis.Promise<boolean> {
		const c: SubChannel | $.VarRef<SubChannel> | null = this;
		using __defer = new $.DisposableStack()
		const c$: SubChannel = c == null ? $.pointerTarget<SubChannel>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<SubChannel>(c)
		await (c$ as SubChannel).RWMutex.RLock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((c$ as SubChannel).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		return !$.pointerEqual(__goscript_channel.Channel.prototype.Peers.call((c$ as SubChannel).topChannel), (c$ as SubChannel).peers)
	}

	public Logger(): __goscript_logger.Logger | null {
		const c: SubChannel | $.VarRef<SubChannel> | null = this;
		return $.pointerValue<SubChannel>(c).logger
	}

	public Peers(): __goscript_peer.PeerList | $.VarRef<__goscript_peer.PeerList> | null {
		const c: SubChannel | $.VarRef<SubChannel> | null = this;
		return $.pointerValue<SubChannel>(c).peers
	}

	public async Register(h: __goscript_handlers.Handler | null, methodName: string): globalThis.Promise<void> {
		const c: SubChannel | $.VarRef<SubChannel> | null = this;
		let [r, ok] = $.typeAssertTuple<__goscript_handlers.registrar | null>($.pointerValue<SubChannel>(c).handler, "tchannel.registrar")
		if (!ok) {
			$.panic(await fmt.Sprintf("handler for SubChannel(%v) configured with alternate root handler without Register method", (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as SubChannel).ServiceName() : SubChannel.prototype.ServiceName.call(c))))
		}

		void (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<__goscript_handlers.registrar, null>) : $.pointerValue<Exclude<__goscript_handlers.registrar, null>>(r)).Register(h, methodName), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public ServiceName(): string {
		const c: SubChannel | $.VarRef<SubChannel> | null = this;
		return $.pointerValue<SubChannel>(c).serviceName
	}

	public SetHandler(h: __goscript_handlers.Handler | null): void {
		let c: SubChannel | $.VarRef<SubChannel> | null = this;
		$.pointerValue<SubChannel>(c).handler = h
	}

	public StatsReporter(): __goscript_stats.StatsReporter | null {
		const c: SubChannel | $.VarRef<SubChannel> | null = this;
		return __goscript_channel.Channel.prototype.StatsReporter.call($.pointerValue<SubChannel>(c).topChannel)
	}

	public StatsTags(): globalThis.Map<string, string> | null {
		const c: SubChannel | $.VarRef<SubChannel> | null = this;
		const c$: SubChannel = c == null ? $.pointerTarget<SubChannel>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<SubChannel>(c)
		let tags: globalThis.Map<string, string> | null = __goscript_channel.Channel.prototype.StatsTags.call((c$ as SubChannel).topChannel)
		$.mapSet(tags, "subchannel", (c$ as SubChannel).serviceName)
		return tags
	}

	public Tracer(): opentracing.Tracer | null {
		const c: SubChannel | $.VarRef<SubChannel> | null = this;
		return $.pointerValue<__goscript_channel.Channel>($.pointerValue<SubChannel>(c).topChannel).channelConnectionCommon.Tracer()
	}

	public Lock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).Lock()
	}

	public RLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RLock()
	}

	public RLocker(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RLocker()
	}

	public RUnlock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RUnlock()
	}

	public TryLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).TryLock()
	}

	public TryRLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).TryRLock()
	}

	public Unlock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).Unlock()
	}

	static __typeInfo = $.registerStructType(
		"tchannel.SubChannel",
		() => new SubChannel(),
		() => [$.methodSignature("BeginCall", [["ctx", "context.Context"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["callOptions", /* @__PURE__ */ $.pointerType("tchannel.CallOptions")]], [/* @__PURE__ */ $.pointerType("tchannel.OutboundCall"), "error"], true), $.methodSignature("GetHandlers", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tchannel.Handler")], true), $.methodSignature("Isolated", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Logger", [], ["tchannel.Logger"], true), $.methodSignature("Peers", [], [/* @__PURE__ */ $.pointerType("tchannel.PeerList")], true), $.methodSignature("Register", [["h", "tchannel.Handler"], ["methodName", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("ServiceName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("SetHandler", [["h", "tchannel.Handler"]], [], true), $.methodSignature("StatsReporter", [], ["tchannel.StatsReporter"], true), $.methodSignature("StatsTags", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("Tracer", [], ["opentracing.Tracer"], true), $.methodSignature("Lock", [], [], true), $.methodSignature("RLock", [], [], true), $.methodSignature("RLocker", [], ["sync.Locker"], true), $.methodSignature("RUnlock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		SubChannel,
		() => [/* @__PURE__ */ $.structField("RWMutex", "sync.RWMutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("serviceName", /* @__PURE__ */ $.basicType("string"), [1], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("topChannel", /* @__PURE__ */ $.pointerType("tchannel.Channel"), [2], 40, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("defaultCallOptions", /* @__PURE__ */ $.pointerType("tchannel.CallOptions"), [3], 48, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("peers", /* @__PURE__ */ $.pointerType("tchannel.PeerList"), [4], 56, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("handler", "tchannel.Handler", [5], 64, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("logger", "tchannel.Logger", [6], 80, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("statsReporter", "tchannel.StatsReporter", [7], 96, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class subChannelMap {
	public get RWMutex(): sync.RWMutex {
		return this._fields.RWMutex
	}

	public set RWMutex(value: sync.RWMutex) {
		this._fields.RWMutex = value
	}

	public get subchannels(): globalThis.Map<string, SubChannel | $.VarRef<SubChannel> | null> | null {
		return this._fields.subchannels
	}

	public set subchannels(value: globalThis.Map<string, SubChannel | $.VarRef<SubChannel> | null> | null) {
		this._fields.subchannels = value
	}

	public _fields: {
		RWMutex: sync.RWMutex
		subchannels: globalThis.Map<string, SubChannel | $.VarRef<SubChannel> | null> | null
	}

	constructor(init?: Partial<{RWMutex?: sync.RWMutex, subchannels?: globalThis.Map<string, SubChannel | $.VarRef<SubChannel> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			RWMutex: init?.RWMutex ? $.markAsStructValue($.cloneStructValue(init.RWMutex)) : $.markAsStructValue(new sync.RWMutex()),
			subchannels: init?.subchannels ?? (null! as globalThis.Map<string, SubChannel | $.VarRef<SubChannel> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): subChannelMap {
		return new subChannelMap(this, true)
	}

	public __goscriptAssign(source: subChannelMap): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.RWMutex, values.RWMutex)
		target.subchannels = values.subchannels
	}

	public async IntrospectState(opts: __goscript_introspection.IntrospectionOptions | $.VarRef<__goscript_introspection.IntrospectionOptions> | null): globalThis.Promise<globalThis.Map<string, __goscript_introspection.SubChannelRuntimeState> | null> {
		const subChMap: subChannelMap | $.VarRef<subChannelMap> | null = this;
		let m: globalThis.Map<string, __goscript_introspection.SubChannelRuntimeState> | null = $.makeMap<string, __goscript_introspection.SubChannelRuntimeState>()
		await $.pointerValue<subChannelMap>(subChMap).RWMutex.RLock()
		for (let [k, sc] of $.pointerValue<subChannelMap>(subChMap).subchannels?.entries() ?? []) {
			let state = (await (async () => { const __goscriptLiteralField0 = await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as SubChannel).Isolated() : SubChannel.prototype.Isolated.call(sc)); return new __goscript_introspection.SubChannelRuntimeState({Service: k, Isolated: __goscriptLiteralField0}, true) })())
			if (state.Isolated) {
				state.IsolatedPeers = await __goscript_peer.PeerList.prototype.IntrospectList.call((sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as SubChannel).Peers() : SubChannel.prototype.Peers.call(sc)), opts)
			}
			{
				let __goscriptTuple2: any = $.typeAssertTuple<__goscript_handlers.handlerMap | $.VarRef<__goscript_handlers.handlerMap> | null>($.pointerValue<SubChannel>(sc).handler, /* @__PURE__ */ $.pointerType("tchannel.handlerMap"))
				let hmap: __goscript_handlers.handlerMap | $.VarRef<__goscript_handlers.handlerMap> | null = __goscriptTuple2[0]
				let ok = __goscriptTuple2[1]
				if (ok) {
					state.Handler.Type = "methods"
					let methods: $.Slice<string> = $.makeSlice<string>(0, $.len($.pointerValue<__goscript_handlers.handlerMap>(hmap).handlers), "string")
					for (const [k, __rangeValue] of $.pointerValue<__goscript_handlers.handlerMap>(hmap).handlers?.entries() ?? []) {
						methods = $.appendOne(methods, k)
					}
					sort.Strings(methods)
					state.Handler.Methods = methods
				} else {
					state.Handler.Type = "overriden"
				}
			}
			$.mapSet(m, k, (state).clone())
		}
		$.pointerValue<subChannelMap>(subChMap).RWMutex.RUnlock()
		return m
	}

	public async ["get"](serviceName: string): globalThis.Promise<[SubChannel | $.VarRef<SubChannel> | null, boolean]> {
		const subChMap: subChannelMap | $.VarRef<subChannelMap> | null = this;
		await $.pointerValue<subChannelMap>(subChMap).RWMutex.RLock()
		let __goscriptTuple3: any = $.mapGet<string, SubChannel | $.VarRef<SubChannel> | null, SubChannel | $.VarRef<SubChannel> | null>($.pointerValue<subChannelMap>(subChMap).subchannels, serviceName, null)
		let sc: SubChannel | $.VarRef<SubChannel> | null = __goscriptTuple3[0]
		let ok = __goscriptTuple3[1]
		$.pointerValue<subChannelMap>(subChMap).RWMutex.RUnlock()
		return [sc, ok]
	}

	public async getOrAdd(serviceName: string, ch: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null): globalThis.Promise<[SubChannel | $.VarRef<SubChannel> | null, boolean]> {
		const subChMap: subChannelMap | $.VarRef<subChannelMap> | null = this;
		let added: boolean = false
		{
			let __goscriptTuple4: any = await (subChMap !== null && (subChMap as any).__isVarRef !== true && (subChMap as any).__goValue === undefined ? ((subChMap as any) as subChannelMap)["get"](serviceName) : subChannelMap.prototype.get.call(subChMap, serviceName))
			let sc: SubChannel | $.VarRef<SubChannel> | null = __goscriptTuple4[0]
			let ok = __goscriptTuple4[1]
			if (ok) {
				return [sc, false]
			}
		}

		return (subChMap !== null && (subChMap as any).__isVarRef !== true && (subChMap as any).__goValue === undefined ? ((subChMap as any) as subChannelMap).registerNewSubChannel(serviceName, ch) : subChannelMap.prototype.registerNewSubChannel.call(subChMap, serviceName, ch))
	}

	public async registerNewSubChannel(serviceName: string, ch: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null): globalThis.Promise<[SubChannel | $.VarRef<SubChannel> | null, boolean]> {
		let subChMap: subChannelMap | $.VarRef<subChannelMap> | null = this;
		let added: boolean = false
		using __defer = new $.DisposableStack()
		const subChMap$: subChannelMap = subChMap == null ? $.pointerTarget<subChannelMap>(subChMap) : (subChMap as any).__isVarRef === true ? (subChMap as any).value : (subChMap as any).__goValue === undefined ? (subChMap as any) : $.pointerTarget<subChannelMap>(subChMap)
		await (subChMap$ as subChannelMap).RWMutex.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((subChMap$ as subChannelMap).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })

		if ((subChMap$ as subChannelMap).subchannels == null) {
			;(subChMap$ as subChannelMap).subchannels = $.makeMap<string, SubChannel | $.VarRef<SubChannel> | null>()
		}

		{
			let __goscriptTuple5: any = $.mapGet<string, SubChannel | $.VarRef<SubChannel> | null, SubChannel | $.VarRef<SubChannel> | null>((subChMap$ as subChannelMap).subchannels, serviceName, null)
			let sc: SubChannel | $.VarRef<SubChannel> | null = __goscriptTuple5[0]
			let ok = __goscriptTuple5[1]
			if (ok) {
				const __goscriptReturn2: [SubChannel | $.VarRef<SubChannel> | null, boolean] = [sc, false]
				added = __goscriptReturn2[1]
				__defer.dispose()
				return [__goscriptReturn2[0], added]
			}
		}

		let sc: SubChannel | $.VarRef<SubChannel> | null = await newSubChannel(serviceName, ch)
		$.mapSet((subChMap$ as subChannelMap).subchannels, serviceName, sc)
		const __goscriptReturn3: [SubChannel | $.VarRef<SubChannel> | null, boolean] = [sc, true]
		added = __goscriptReturn3[1]
		__defer.dispose()
		return [__goscriptReturn3[0], added]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async updatePeer(p: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null): globalThis.Promise<void> {
		const subChMap: subChannelMap | $.VarRef<subChannelMap> | null = this;
		await $.pointerValue<subChannelMap>(subChMap).RWMutex.RLock()
		for (const [__rangeKey, subCh] of $.pointerValue<subChannelMap>(subChMap).subchannels?.entries() ?? []) {
			if (await (subCh !== null && (subCh as any).__isVarRef !== true && (subCh as any).__goValue === undefined ? ((subCh as any) as SubChannel).Isolated() : SubChannel.prototype.Isolated.call(subCh))) {
				await $.pointerValue<SubChannel>(subCh).RWMutex.RLock()
				await __goscript_peer.PeerList.prototype.onPeerChange.call((subCh !== null && (subCh as any).__isVarRef !== true && (subCh as any).__goValue === undefined ? ((subCh as any) as SubChannel).Peers() : SubChannel.prototype.Peers.call(subCh)), p)
				$.pointerValue<SubChannel>(subCh).RWMutex.RUnlock()
			}
		}
		$.pointerValue<subChannelMap>(subChMap).RWMutex.RUnlock()
	}

	public Lock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).Lock()
	}

	public RLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RLock()
	}

	public RLocker(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RLocker()
	}

	public RUnlock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RUnlock()
	}

	public TryLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).TryLock()
	}

	public TryRLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).TryRLock()
	}

	public Unlock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).Unlock()
	}

	static __typeInfo = $.registerStructType(
		"tchannel.subChannelMap",
		() => new subChannelMap(),
		() => [$.methodSignature("IntrospectState", [["opts", /* @__PURE__ */ $.pointerType("tchannel.IntrospectionOptions")]], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tchannel.SubChannelRuntimeState")], true), $.methodSignature("get", [["serviceName", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("tchannel.SubChannel"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getOrAdd", [["serviceName", /* @__PURE__ */ $.basicType("string")], ["ch", /* @__PURE__ */ $.pointerType("tchannel.Channel")]], [["_", /* @__PURE__ */ $.pointerType("tchannel.SubChannel")], ["added", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("registerNewSubChannel", [["serviceName", /* @__PURE__ */ $.basicType("string")], ["ch", /* @__PURE__ */ $.pointerType("tchannel.Channel")]], [["_", /* @__PURE__ */ $.pointerType("tchannel.SubChannel")], ["added", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("updatePeer", [["p", /* @__PURE__ */ $.pointerType("tchannel.Peer")]], [], true), $.methodSignature("Lock", [], [], true), $.methodSignature("RLock", [], [], true), $.methodSignature("RLocker", [], ["sync.Locker"], true), $.methodSignature("RUnlock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		subChannelMap,
		() => [/* @__PURE__ */ $.structField("RWMutex", "sync.RWMutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("subchannels", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("tchannel.SubChannel")), [1], 24, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export async function Isolated(s: SubChannel | $.VarRef<SubChannel> | null): globalThis.Promise<void> {
	const s$: SubChannel = s == null ? $.pointerTarget<SubChannel>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<SubChannel>(s)
	await (s$ as SubChannel).RWMutex.Lock();
	;(s$ as SubChannel).peers = __goscript_peer.PeerList.prototype.newSibling.call($.pointerValue<__goscript_channel.Channel>((s$ as SubChannel).topChannel).peers)
	await __goscript_peer.PeerList.prototype.SetStrategy.call((s$ as SubChannel).peers, $.interfaceValue<__goscript_peer_strategies.ScoreCalculator | null>(__goscript_peer_strategies.newLeastPendingCalculator(), "tchannel.leastPendingCalculator", "tchannel.leastPendingCalculator"))
	void (s$ as SubChannel).RWMutex.Unlock()
}

export async function newSubChannel(serviceName: string, ch: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null): globalThis.Promise<SubChannel | $.VarRef<SubChannel> | null> {
	let logger = (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as __goscript_channel.Channel).Logger() : __goscript_channel.Channel.prototype.Logger.call(ch))).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "subchannel", Value: serviceName}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return (() => { const __goscriptLiteralField1 = (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as __goscript_channel.Channel).StatsReporter() : __goscript_channel.Channel.prototype.StatsReporter.call(ch)); return new SubChannel({serviceName: serviceName, peers: $.pointerValue<__goscript_channel.Channel>(ch).peers, topChannel: ch, handler: $.interfaceValue<__goscript_handlers.Handler | null>(new __goscript_handlers.handlerMap(), "*tchannel.handlerMap", /* @__PURE__ */ $.pointerType("tchannel.handlerMap")), logger: logger, statsReporter: __goscriptLiteralField1}) })()
}

var __goscriptAwait: any
