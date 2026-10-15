// Generated file based on inbound.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as yarpctls from "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"

import * as introspection from "@goscript/go.uber.org/yarpc/api/x/introspection/index.js"

import * as lifecycle from "@goscript/go.uber.org/yarpc/pkg/lifecycle/index.js"

import * as muxlistener from "@goscript/go.uber.org/yarpc/transport/internal/tls/muxlistener/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as grpc from "@goscript/google.golang.org/grpc/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import type * as fmt from "@goscript/fmt/index.js"

import * as backoff from "@goscript/go.uber.org/yarpc/api/backoff/index.js"

import * as peer from "@goscript/go.uber.org/yarpc/api/peer/index.js"

import * as interceptor from "@goscript/go.uber.org/yarpc/internal/interceptor/index.js"

import * as abstractpeer from "@goscript/go.uber.org/yarpc/peer/abstractpeer/index.js"

import type * as time from "@goscript/time/index.js"

import * as __goscript_codec from "./codec.gs.ts"

import * as __goscript_constants from "./constants.gs.ts"

import * as __goscript_dialer from "./dialer.gs.ts"

import * as __goscript_handler from "./handler.gs.ts"

import * as __goscript_options from "./options.gs.ts"

import type * as __goscript_outbound from "./outbound.gs.ts"

import * as __goscript_peer from "./peer.gs.ts"

import type * as __goscript_response_writer from "./response_writer.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"
import "@goscript/go.uber.org/yarpc/api/x/introspection/index.js"
import "@goscript/go.uber.org/yarpc/pkg/lifecycle/index.js"
import "@goscript/go.uber.org/yarpc/transport/internal/tls/muxlistener/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/google.golang.org/grpc/index.js"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/api/backoff/index.js"
import "@goscript/go.uber.org/yarpc/api/peer/index.js"
import "@goscript/go.uber.org/yarpc/internal/interceptor/index.js"
import "@goscript/go.uber.org/yarpc/peer/abstractpeer/index.js"
import "./codec.gs.ts"
import "./constants.gs.ts"
import "./dialer.gs.ts"
import "./handler.gs.ts"
import "./options.gs.ts"
import "./peer.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/transport/grpc", ["grpc.Inbound"])

export class Inbound {
	public get once(): lifecycle.Once | $.VarRef<lifecycle.Once> | null {
		return this._fields.once
	}

	public set once(value: lifecycle.Once | $.VarRef<lifecycle.Once> | null) {
		this._fields.once = value
	}

	public get lock(): sync.RWMutex {
		return this._fields.lock
	}

	public set lock(value: sync.RWMutex) {
		this._fields.lock = value
	}

	public get t(): __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null {
		return this._fields.t
	}

	public set t(value: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null) {
		this._fields.t = value
	}

	public get listener(): net.Listener | null {
		return this._fields.listener
	}

	public set listener(value: net.Listener | null) {
		this._fields.listener = value
	}

	public get options(): __goscript_options.inboundOptions | $.VarRef<__goscript_options.inboundOptions> | null {
		return this._fields.options
	}

	public set options(value: __goscript_options.inboundOptions | $.VarRef<__goscript_options.inboundOptions> | null) {
		this._fields.options = value
	}

	public get router(): transport.Router | null {
		return this._fields.router
	}

	public set router(value: transport.Router | null) {
		this._fields.router = value
	}

	public get server(): grpc.Server | $.VarRef<grpc.Server> | null {
		return this._fields.server
	}

	public set server(value: grpc.Server | $.VarRef<grpc.Server> | null) {
		this._fields.server = value
	}

	public _fields: {
		once: lifecycle.Once | $.VarRef<lifecycle.Once> | null
		lock: sync.RWMutex
		t: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null
		listener: net.Listener | null
		options: __goscript_options.inboundOptions | $.VarRef<__goscript_options.inboundOptions> | null
		router: transport.Router | null
		server: grpc.Server | $.VarRef<grpc.Server> | null
	}

	constructor(init?: Partial<{once?: lifecycle.Once | $.VarRef<lifecycle.Once> | null, lock?: sync.RWMutex, t?: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null, listener?: net.Listener | null, options?: __goscript_options.inboundOptions | $.VarRef<__goscript_options.inboundOptions> | null, router?: transport.Router | null, server?: grpc.Server | $.VarRef<grpc.Server> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			once: init?.once ?? (null! as lifecycle.Once | $.VarRef<lifecycle.Once> | null),
			lock: init?.lock ? $.markAsStructValue($.cloneStructValue(init.lock)) : $.markAsStructValue(new sync.RWMutex()),
			t: init?.t ?? (null! as __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null),
			listener: init?.listener ?? (null! as net.Listener | null),
			options: init?.options ?? (null! as __goscript_options.inboundOptions | $.VarRef<__goscript_options.inboundOptions> | null),
			router: init?.router ?? (null! as transport.Router | null),
			server: init?.server ?? (null! as grpc.Server | $.VarRef<grpc.Server> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Inbound {
		return new Inbound(this, true)
	}

	public __goscriptAssign(source: Inbound): void {
		const target = this._fields
		const values = source._fields
		target.once = values.once
		$.assignStruct(target.lock, values.lock)
		target.t = values.t
		target.listener = $.assignFieldValue(target.listener, values.listener, "net.Listener")
		target.options = values.options
		target.router = $.assignFieldValue(target.router, values.router, "transport.Router")
		target.server = values.server
	}

	public async Addr(): globalThis.Promise<net.Addr | null> {
		const i: Inbound | $.VarRef<Inbound> | null = this;
		using __defer = new $.DisposableStack()
		const i$: Inbound = i == null ? $.pointerTarget<Inbound>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Inbound>(i)
		await (i$ as Inbound).lock.RLock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((i$ as Inbound).lock), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		// i.server is set in start, so checking against nil checks
		// if Start has been called
		// we check if i.listener is nil just for safety
		if (((i$ as Inbound).server == null) || ((i$ as Inbound).listener == null)) {
			return null
		}
		return (__goscriptAwait = $.pointerValue<Exclude<net.Listener, null>>((i$ as Inbound).listener).Addr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Introspect(): globalThis.Promise<introspection.InboundStatus> {
		const i: Inbound | $.VarRef<Inbound> | null = this;
		let state = "Stopped"
		if ((i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Inbound).IsRunning() : Inbound.prototype.IsRunning.call(i))) {
			state = "Started"
		}
		let addrString: string = ""
		{
			let addr = await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Inbound).Addr() : Inbound.prototype.Addr.call(i))
			if (addr != null) {
				addrString = (__goscriptAwait = (addr !== null && (addr as any).__isVarRef !== true && (addr as any).__goValue === undefined ? (addr as Exclude<net.Addr, null>) : $.pointerValue<Exclude<net.Addr, null>>(addr)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return new introspection.InboundStatus({Transport: "grpc", Endpoint: addrString, State: state}, true)
	}

	public IsRunning(): boolean {
		const i: Inbound | $.VarRef<Inbound> | null = this;
		return lifecycle.Once.prototype.IsRunning.call($.pointerValue<Inbound>(i).once)
	}

	public async SetRouter(router: transport.Router | null): globalThis.Promise<void> {
		let i: Inbound | $.VarRef<Inbound> | null = this;
		using __defer = new $.DisposableStack()
		const i$: Inbound = i == null ? $.pointerTarget<Inbound>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Inbound>(i)
		await (i$ as Inbound).lock.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((i$ as Inbound).lock), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() });
		;(i$ as Inbound).router = router
	}

	public Start(): $.GoError {
		const i: Inbound | $.VarRef<Inbound> | null = this;
		return lifecycle.Once.prototype.Start.call($.pointerValue<Inbound>(i).once, $.functionValue(((__receiver) => () => __receiver.start())($.pointerValue<Inbound>(i)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/transport/grpc.(*Inbound).start-fm"))
	}

	public Stop(): $.GoError {
		const i: Inbound | $.VarRef<Inbound> | null = this;
		return lifecycle.Once.prototype.Stop.call($.pointerValue<Inbound>(i).once, $.functionValue(((__receiver) => () => __receiver.stop())($.pointerValue<Inbound>(i)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/transport/grpc.(*Inbound).stop-fm"))
	}

	public Transports(): $.Slice<transport.Transport | null> {
		const i: Inbound | $.VarRef<Inbound> | null = this;
		return $.arrayToSlice<transport.Transport | null>([$.interfaceValue<transport.Transport | null>($.pointerValue<Inbound>(i).t, "*grpc.Transport", /* @__PURE__ */ $.pointerType("grpc.Transport"))])
	}

	public async start(): globalThis.Promise<$.GoError> {
		let i: Inbound | $.VarRef<Inbound> | null = this;
		using __defer = new $.DisposableStack()
		const i$: Inbound = i == null ? $.pointerTarget<Inbound>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Inbound>(i)
		await (i$ as Inbound).lock.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((i$ as Inbound).lock), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
		if ((i$ as Inbound).router == null) {
			return $.interfaceValue<$.GoError>(errRouterNotSet, "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
		}

		let __goscriptShadow0: __goscript_handler.handler | $.VarRef<__goscript_handler.handler> | null = __goscript_handler.newHandler(i, $.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>((i$ as Inbound).t).options).logger)

		let serverOptions: $.Slice<grpc.ServerOption | null> = $.arrayToSlice<grpc.ServerOption | null>([grpc.ForceServerCodecV2($.interfaceValue(new __goscript_codec.customCodec(undefined, true), "grpc.customCodec", "grpc.customCodec")), grpc.UnknownServiceHandler($.functionValue(((__receiver) => (srv: any, serverStream: grpc.ServerStream | null) => __receiver.handle(srv, serverStream))($.pointerValue<__goscript_handler.handler>(__goscriptShadow0)), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, "grpc.ServerStream"], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/transport/grpc.(*handler).handle-fm")), grpc.MaxRecvMsgSize($.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>((i$ as Inbound).t).options).serverMaxRecvMsgSize), grpc.MaxSendMsgSize($.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>((i$ as Inbound).t).options).serverMaxSendMsgSize)])

		let listener = (i$ as Inbound).listener

		if ($.pointerValue<__goscript_options.inboundOptions>((i$ as Inbound).options).creds != null) {
			serverOptions = $.appendOne(serverOptions, grpc.Creds($.pointerValue<__goscript_options.inboundOptions>((i$ as Inbound).options).creds), $.appendZeros.nil)
		} else {
			if ($.pointerValue<__goscript_options.inboundOptions>((i$ as Inbound).options).tlsMode != 0) {
				if ($.pointerValue<__goscript_options.inboundOptions>((i$ as Inbound).options).tlsConfig == null) {
					return errors.New("gRPC TLS enabled but configuration not provided")
				}

				listener = await muxlistener.NewListener((() => { const __goscriptLiteralField0 = $.pointerValue<__goscript_options.inboundOptions>((i$ as Inbound).options).tlsConfig.Clone(); return new muxlistener.Config({Listener: listener, TLSConfig: __goscriptLiteralField0, Logger: $.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>((i$ as Inbound).t).options).logger, Meter: $.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>((i$ as Inbound).t).options).meter, ServiceName: $.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>((i$ as Inbound).t).options).serviceName, TransportName: "grpc", Mode: $.pointerValue<__goscript_options.inboundOptions>((i$ as Inbound).options).tlsMode}, true) })())
			}
		}

		if ($.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>((i$ as Inbound).t).options).serverMaxHeaderListSize != null) {
			serverOptions = $.appendOne(serverOptions, grpc.MaxHeaderListSize($.pointerValue<number>($.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>((i$ as Inbound).t).options).serverMaxHeaderListSize)), $.appendZeros.nil)
		}

		if ($.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>((i$ as Inbound).t).options).serverHeaderTableSize != null) {
			serverOptions = $.appendOne(serverOptions, grpc.HeaderTableSize($.pointerValue<number>($.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>((i$ as Inbound).t).options).serverHeaderTableSize)), $.appendZeros.nil)
		}

		if ($.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>((i$ as Inbound).t).options).numStreamWorkers != null) {
			serverOptions = $.appendOne(serverOptions, grpc.NumStreamWorkers($.pointerValue<number>($.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>((i$ as Inbound).t).options).numStreamWorkers)), $.appendZeros.nil)
		}

		let server: grpc.Server | $.VarRef<grpc.Server> | null = grpc.NewServer(serverOptions)

		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			zap.Logger.prototype.Info.call($.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>((i$ as Inbound).t).options).logger, "started GRPC inbound", $.arrayToSlice<zap.Field>([zap.Stringer("address", ((__goscriptAwait = $.pointerValue<Exclude<net.Listener, null>>((i$ as Inbound).listener).Addr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as fmt.Stringer | null))]))
			if ($.sliceLen(((__goscriptAwait = $.pointerValue<Exclude<transport.Router, null>>((i$ as Inbound).router).Procedures(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<transport.Procedure>)) == 0) {
				zap.Logger.prototype.Warn.call($.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>((i$ as Inbound).t).options).logger, "no procedures specified for GRPC inbound", null)
			}
			// TODO there should be some mechanism to block here
			// there is a race because the listener gets set in the grpc
			// Server implementation and we should be able to block
			// until Serve initialization is done
			//
			// It would be even better if we could do this outside the
			// lock in i
			//
			// TODO Server always returns a non-nil error but should
			// we do something with some or all errors?
			;(server !== null && (server as any).__isVarRef !== true && (server as any).__goValue === undefined ? ((server as any) as grpc.Server).Serve(listener) : grpc.Server.prototype.Serve.call(server, listener))
		})() });
		;(i$ as Inbound).server = server
		return null
	}

	public async stop(): globalThis.Promise<$.GoError> {
		let i: Inbound | $.VarRef<Inbound> | null = this;
		using __defer = new $.DisposableStack()
		const i$: Inbound = i == null ? $.pointerTarget<Inbound>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Inbound>(i)
		await (i$ as Inbound).lock.Lock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((i$ as Inbound).lock), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })
		if ((i$ as Inbound).server != null) {
			grpc.Server.prototype.GracefulStop.call((i$ as Inbound).server)
		}
		;(i$ as Inbound).server = null
		return null
	}

	static __typeInfo = $.registerStructType(
		"grpc.Inbound",
		() => new Inbound(),
		() => [{ name: "Addr", args: [], returns: [{ type: "net.Addr" }], pointerReceiver: true }, { name: "Introspect", args: [], returns: [{ type: "introspection.InboundStatus" }], pointerReceiver: true }, { name: "IsRunning", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "SetRouter", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "Start", args: [], returns: [{ type: "error" }], pointerReceiver: true }, { name: "Stop", args: [], returns: [{ type: "error" }], pointerReceiver: true }, { name: "Transports", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType("transport.Transport") }], pointerReceiver: true }, { name: "start", args: [], returns: [{ type: "error" }], pointerReceiver: true }, { name: "stop", args: [], returns: [{ type: "error" }], pointerReceiver: true }],
		Inbound,
		() => [{ name: "once", key: "once", type: /* @__PURE__ */ $.pointerType("lifecycle.Once") }, { name: "lock", key: "lock", type: "sync.RWMutex" }, { name: "t", key: "t", type: /* @__PURE__ */ $.pointerType("grpc.Transport") }, { name: "listener", key: "listener", type: "net.Listener" }, { name: "options", key: "options", type: /* @__PURE__ */ $.pointerType("grpc.inboundOptions") }, { name: "router", key: "router", type: "transport.Router" }, { name: "server", key: "server", type: /* @__PURE__ */ $.pointerType("grpc.Server") }]
	)
}

export let errRouterNotSet: yarpcerrors.Status | $.VarRef<yarpcerrors.Status> | null = await yarpcerrors.Newf(13, "router not set", null)

export function __goscript_set_errRouterNotSet(__goscriptValue: yarpcerrors.Status | $.VarRef<yarpcerrors.Status> | null): void {
	errRouterNotSet = __goscriptValue
}

export async function newInbound(t: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null, listener: net.Listener | null, options: $.Slice<__goscript_options.InboundOption | null>): globalThis.Promise<Inbound | $.VarRef<Inbound> | null> {
	return (await (async () => { const __goscriptLiteralField1 = lifecycle.NewOnce(); const __goscriptLiteralField2 = await __goscript_options.newInboundOptions(options); return new Inbound({once: __goscriptLiteralField1, t: t, listener: listener, options: __goscriptLiteralField2}) })())
}

var __goscriptAwait: any
