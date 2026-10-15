// Generated file based on transport.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as peer from "@goscript/go.uber.org/yarpc/api/peer/index.js"

import * as context from "@goscript/context/index.js"

import * as abstractpeer from "@goscript/go.uber.org/yarpc/peer/abstractpeer/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as grpc from "@goscript/google.golang.org/grpc/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as lifecycle from "@goscript/go.uber.org/yarpc/pkg/lifecycle/index.js"

import * as backoff from "@goscript/go.uber.org/yarpc/api/backoff/index.js"

import * as tls from "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"

import * as interceptor from "@goscript/go.uber.org/yarpc/internal/interceptor/index.js"

import type * as time from "@goscript/time/index.js"

import * as __goscript_codec from "./codec.gs.ts"

import * as __goscript_dialer from "./dialer.gs.ts"

import * as __goscript_inbound from "./inbound.gs.ts"

import * as __goscript_options from "./options.gs.ts"

import * as __goscript_outbound from "./outbound.gs.ts"

import * as __goscript_peer from "./peer.gs.ts"
import "@goscript/go.uber.org/yarpc/api/peer/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/peer/abstractpeer/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/google.golang.org/grpc/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/go.uber.org/yarpc/pkg/lifecycle/index.js"
import "@goscript/go.uber.org/yarpc/api/backoff/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"
import "@goscript/go.uber.org/yarpc/internal/interceptor/index.js"
import "./codec.gs.ts"
import "./dialer.gs.ts"
import "./inbound.gs.ts"
import "./options.gs.ts"
import "./outbound.gs.ts"
import "./peer.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/transport/grpc", ["grpc.Transport"])

export class Transport {
	public get lock(): sync.Mutex {
		return this._fields.lock
	}

	public set lock(value: sync.Mutex) {
		this._fields.lock = value
	}

	public get once(): lifecycle.Once | $.VarRef<lifecycle.Once> | null {
		return this._fields.once
	}

	public set once(value: lifecycle.Once | $.VarRef<lifecycle.Once> | null) {
		this._fields.once = value
	}

	public get options(): __goscript_options.transportOptions | $.VarRef<__goscript_options.transportOptions> | null {
		return this._fields.options
	}

	public set options(value: __goscript_options.transportOptions | $.VarRef<__goscript_options.transportOptions> | null) {
		this._fields.options = value
	}

	public get addressToPeer(): globalThis.Map<string, __goscript_peer.grpcPeer | $.VarRef<__goscript_peer.grpcPeer> | null> | null {
		return this._fields.addressToPeer
	}

	public set addressToPeer(value: globalThis.Map<string, __goscript_peer.grpcPeer | $.VarRef<__goscript_peer.grpcPeer> | null> | null) {
		this._fields.addressToPeer = value
	}

	public _fields: {
		lock: sync.Mutex
		once: lifecycle.Once | $.VarRef<lifecycle.Once> | null
		options: __goscript_options.transportOptions | $.VarRef<__goscript_options.transportOptions> | null
		addressToPeer: globalThis.Map<string, __goscript_peer.grpcPeer | $.VarRef<__goscript_peer.grpcPeer> | null> | null
	}

	constructor(init?: Partial<{lock?: sync.Mutex, once?: lifecycle.Once | $.VarRef<lifecycle.Once> | null, options?: __goscript_options.transportOptions | $.VarRef<__goscript_options.transportOptions> | null, addressToPeer?: globalThis.Map<string, __goscript_peer.grpcPeer | $.VarRef<__goscript_peer.grpcPeer> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			lock: init?.lock ? $.markAsStructValue($.cloneStructValue(init.lock)) : $.markAsStructValue(new sync.Mutex()),
			once: init?.once ?? (null! as lifecycle.Once | $.VarRef<lifecycle.Once> | null),
			options: init?.options ?? (null! as __goscript_options.transportOptions | $.VarRef<__goscript_options.transportOptions> | null),
			addressToPeer: init?.addressToPeer ?? (null! as globalThis.Map<string, __goscript_peer.grpcPeer | $.VarRef<__goscript_peer.grpcPeer> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Transport {
		return new Transport(this, true)
	}

	public __goscriptAssign(source: Transport): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.lock, values.lock)
		target.once = values.once
		target.options = values.options
		target.addressToPeer = values.addressToPeer
	}

	public IsRunning(): boolean {
		const t: Transport | $.VarRef<Transport> | null = this;
		return lifecycle.Once.prototype.IsRunning.call($.pointerValue<Transport>(t).once)
	}

	public async NewDialer(options: $.Slice<__goscript_options.DialOption | null>): globalThis.Promise<__goscript_dialer.Dialer | $.VarRef<__goscript_dialer.Dialer> | null> {
		const t: Transport | $.VarRef<Transport> | null = this;
		return (await (async () => { const __goscriptLiteralField0 = await __goscript_options.newDialOptions(options); return new __goscript_dialer.Dialer({trans: t, options: __goscriptLiteralField0}) })())
	}

	public async NewInbound(listener: net.Listener | null, options: $.Slice<__goscript_options.InboundOption | null>): globalThis.Promise<__goscript_inbound.Inbound | $.VarRef<__goscript_inbound.Inbound> | null> {
		const t: Transport | $.VarRef<Transport> | null = this;
		return __goscript_inbound.newInbound(t, listener, options)
	}

	public async NewOutbound(peerChooser: peer.Chooser | null, options: $.Slice<__goscript_options.OutboundOption | null>): globalThis.Promise<__goscript_outbound.Outbound | $.VarRef<__goscript_outbound.Outbound> | null> {
		const t: Transport | $.VarRef<Transport> | null = this;
		return __goscript_outbound.newOutbound(t, peerChooser, options)
	}

	public async NewSingleOutbound(address: string, options: $.Slice<__goscript_options.OutboundOption | null>): globalThis.Promise<__goscript_outbound.Outbound | $.VarRef<__goscript_outbound.Outbound> | null> {
		const t: Transport | $.VarRef<Transport> | null = this;
		return __goscript_outbound.newSingleOutbound(t, address, options)
	}

	public async ReleasePeer(pid: peer.Identifier | null, ps: peer.Subscriber | null): globalThis.Promise<$.GoError> {
		const t: Transport | $.VarRef<Transport> | null = this;
		using __defer = new $.DisposableStack()
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		await (t$ as Transport).lock.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((t$ as Transport).lock), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		let address = (__goscriptAwait = (pid !== null && (pid as any).__isVarRef !== true && (pid as any).__goValue === undefined ? (pid as Exclude<peer.Identifier, null>) : $.pointerValue<Exclude<peer.Identifier, null>>(pid)).Identifier(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let __goscriptTuple0: any = $.mapGet<string, __goscript_peer.grpcPeer | $.VarRef<__goscript_peer.grpcPeer> | null, __goscript_peer.grpcPeer | $.VarRef<__goscript_peer.grpcPeer> | null>((t$ as Transport).addressToPeer, address, null)
		let p: __goscript_peer.grpcPeer | $.VarRef<__goscript_peer.grpcPeer> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			return $.interfaceValue<$.GoError>(new peer.ErrTransportHasNoReferenceToPeer({TransportName: "grpc.Transport", PeerIdentifier: address}, true), "peer.ErrTransportHasNoReferenceToPeer", "peer.ErrTransportHasNoReferenceToPeer")
		}
		{
			let err = await $.pointerValue<abstractpeer.Peer>($.pointerValue<__goscript_peer.grpcPeer>(p).Peer).Unsubscribe(ps)
			if (err != null) {
				return err
			}
		}
		if (await $.pointerValue<abstractpeer.Peer>($.pointerValue<__goscript_peer.grpcPeer>(p).Peer).NumSubscribers() == 0) {
			$.deleteMapEntry((t$ as Transport).addressToPeer, address)
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as __goscript_peer.grpcPeer).stop() : __goscript_peer.grpcPeer.prototype.stop.call(p))
		}
		return null
	}

	public async RetainPeer(pid: peer.Identifier | null, ps: peer.Subscriber | null): globalThis.Promise<[peer.Peer | null, $.GoError]> {
		const t: Transport | $.VarRef<Transport> | null = this;
		return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).retainPeer(pid, __goscript_get_emptyDialOpts(), ps) : Transport.prototype.retainPeer.call(t, pid, __goscript_get_emptyDialOpts(), ps))
	}

	public Start(): $.GoError {
		const t: Transport | $.VarRef<Transport> | null = this;
		return lifecycle.Once.prototype.Start.call($.pointerValue<Transport>(t).once, (null as (() => $.GoError | globalThis.Promise<$.GoError>) | null))
	}

	public Stop(): $.GoError {
		const t: Transport | $.VarRef<Transport> | null = this;
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		return lifecycle.Once.prototype.Stop.call((t$ as Transport).once, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			using __defer = new $.DisposableStack()
			await (t$ as Transport).lock.Lock()
			const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((t$ as Transport).lock), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee1() })

			for (const [__rangeKey, grpcPeer] of (t$ as Transport).addressToPeer?.entries() ?? []) {
				await (grpcPeer !== null && (grpcPeer as any).__isVarRef !== true && (grpcPeer as any).__goValue === undefined ? ((grpcPeer as any) as __goscript_peer.grpcPeer).stop() : __goscript_peer.grpcPeer.prototype.stop.call(grpcPeer))
			}
			for (const [__rangeKey, grpcPeer] of (t$ as Transport).addressToPeer?.entries() ?? []) {
				await (grpcPeer !== null && (grpcPeer as any).__isVarRef !== true && (grpcPeer as any).__goValue === undefined ? ((grpcPeer as any) as __goscript_peer.grpcPeer).wait() : __goscript_peer.grpcPeer.prototype.wait.call(grpcPeer))
			}
			return null
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	}

	public async newPeer(address: string, options: __goscript_options.dialOptions | $.VarRef<__goscript_options.dialOptions> | null): globalThis.Promise<[__goscript_peer.grpcPeer | $.VarRef<__goscript_peer.grpcPeer> | null, $.GoError]> {
		const t: Transport | $.VarRef<Transport> | null = this;
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		let __goscriptShadow0: $.Slice<grpc.DialOption | null> = $.appendSlice($.arrayToSlice<grpc.DialOption | null>([await grpc.WithUserAgent("yarpc-go/1.0.0-dev"), await grpc.WithDefaultCallOptions($.arrayToSlice<grpc.CallOption | null>([grpc.ForceCodecV2($.interfaceValue(new __goscript_codec.customCodec(undefined, true), "grpc.customCodec", "grpc.customCodec")), grpc.MaxCallRecvMsgSize($.pointerValue<__goscript_options.transportOptions>((t$ as Transport).options).clientMaxRecvMsgSize), grpc.MaxCallSendMsgSize($.pointerValue<__goscript_options.transportOptions>((t$ as Transport).options).clientMaxSendMsgSize)]))]), await (options !== null && (options as any).__isVarRef !== true && (options as any).__goValue === undefined ? ((options as any) as __goscript_options.dialOptions).grpcOptions(t) : __goscript_options.dialOptions.prototype.grpcOptions.call(options, t)), $.appendZeros.nil)

		if ($.pointerValue<__goscript_options.transportOptions>((t$ as Transport).options).clientMaxHeaderListSize != null) {
			__goscriptShadow0 = $.appendOne(__goscriptShadow0, grpc.WithMaxHeaderListSize($.pointerValue<number>($.pointerValue<__goscript_options.transportOptions>((t$ as Transport).options).clientMaxHeaderListSize)), $.appendZeros.nil)
		}

		let __goscriptTuple1: any = await grpc.Dial(address, __goscriptShadow0)
		let clientConn: grpc.ClientConn | $.VarRef<grpc.ClientConn> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}

		let [ctx, cancel] = context.WithCancel($.pointerValueOrNil(context.Background())!)

		let __goscriptShadow1: __goscript_peer.grpcPeer | $.VarRef<__goscript_peer.grpcPeer> | null = (() => { const __goscriptLiteralField1 = abstractpeer.NewPeer(address, $.interfaceValue<peer.Transport | null>(t, "*grpc.Transport", /* @__PURE__ */ $.pointerType("grpc.Transport"))); return new __goscript_peer.grpcPeer({Peer: __goscriptLiteralField1, t: t, ctx: ctx, cancel: cancel, clientConn: clientConn, stoppedC: $.makeChannel<{}>(0, {}, "both")}) })()

		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.monitorConnectionStatus())($.pointerValue<__goscript_peer.grpcPeer>(__goscriptShadow1)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "go.uber.org/yarpc/transport/grpc.(*grpcPeer).monitorConnectionStatus-fm")
		queueMicrotask(async () => { await __goscriptDeferCallee2() })

		return [__goscriptShadow1, null]
	}

	public async retainPeer(pid: peer.Identifier | null, options: __goscript_options.dialOptions | $.VarRef<__goscript_options.dialOptions> | null, ps: peer.Subscriber | null): globalThis.Promise<[peer.Peer | null, $.GoError]> {
		let t: Transport | $.VarRef<Transport> | null = this;
		using __defer = new $.DisposableStack()
		const t$: Transport = t == null ? $.pointerTarget<Transport>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Transport>(t)
		await (t$ as Transport).lock.Lock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((t$ as Transport).lock), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })
		let address = (__goscriptAwait = (pid !== null && (pid as any).__isVarRef !== true && (pid as any).__goValue === undefined ? (pid as Exclude<peer.Identifier, null>) : $.pointerValue<Exclude<peer.Identifier, null>>(pid)).Identifier(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let __goscriptTuple2: any = $.mapGet<string, __goscript_peer.grpcPeer | $.VarRef<__goscript_peer.grpcPeer> | null, __goscript_peer.grpcPeer | $.VarRef<__goscript_peer.grpcPeer> | null>((t$ as Transport).addressToPeer, address, null)
		let p: __goscript_peer.grpcPeer | $.VarRef<__goscript_peer.grpcPeer> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple3: any = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Transport).newPeer(address, options) : Transport.prototype.newPeer.call(t, address, options))
			p = __goscriptTuple3[0]
			err = __goscriptTuple3[1]
			if (err != null) {
				return [null, err]
			}
			$.mapSet((t$ as Transport).addressToPeer, address, p)
		}
		await $.pointerValue<abstractpeer.Peer>($.pointerValue<__goscript_peer.grpcPeer>(p).Peer).Subscribe(ps)
		return [$.interfaceValue<peer.Peer | null>(p, "*grpc.grpcPeer", /* @__PURE__ */ $.pointerType("grpc.grpcPeer")), null]
	}

	static __typeInfo = $.registerStructType(
		"grpc.Transport",
		() => new Transport(),
		() => [{ name: "IsRunning", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "NewDialer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("grpc.Dialer") }], pointerReceiver: true }, { name: "NewInbound", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("grpc.Inbound") }], pointerReceiver: true }, { name: "NewOutbound", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("grpc.Outbound") }], pointerReceiver: true }, { name: "NewSingleOutbound", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("grpc.Outbound") }], pointerReceiver: true }, { name: "ReleasePeer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "RetainPeer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "peer.Peer" }, { type: "error" }], pointerReceiver: true }, { name: "Start", args: [], returns: [{ type: "error" }], pointerReceiver: true }, { name: "Stop", args: [], returns: [{ type: "error" }], pointerReceiver: true }, { name: "newPeer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("grpc.grpcPeer") }, { type: "error" }], pointerReceiver: true }, { name: "retainPeer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "peer.Peer" }, { type: "error" }], pointerReceiver: true }],
		Transport,
		() => [{ name: "lock", key: "lock", type: "sync.Mutex" }, { name: "once", key: "once", type: /* @__PURE__ */ $.pointerType("lifecycle.Once") }, { name: "options", key: "options", type: /* @__PURE__ */ $.pointerType("grpc.transportOptions") }, { name: "addressToPeer", key: "addressToPeer", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("grpc.grpcPeer")) }]
	)
}

export var emptyDialOpts: __goscript_options.dialOptions | $.VarRef<__goscript_options.dialOptions> | null

export function __goscript_init_emptyDialOpts(): void {
	if (((emptyDialOpts) as any) === undefined) {
		emptyDialOpts = new __goscript_options.dialOptions()
	}
}

export function __goscript_get_emptyDialOpts(): __goscript_options.dialOptions | $.VarRef<__goscript_options.dialOptions> | null {
	if (((emptyDialOpts) as any) === undefined) {
		__goscript_init_emptyDialOpts()
	}
	return emptyDialOpts
}

export function __goscript_set_emptyDialOpts(__goscriptValue: __goscript_options.dialOptions | $.VarRef<__goscript_options.dialOptions> | null): void {
	emptyDialOpts = __goscriptValue
}

export async function NewTransport(options: $.Slice<__goscript_options.TransportOption | null>): globalThis.Promise<Transport | $.VarRef<Transport> | null> {
	return newTransport(await __goscript_options.newTransportOptions(options))
}

export function newTransport(transportOptions: __goscript_options.transportOptions | $.VarRef<__goscript_options.transportOptions> | null): Transport | $.VarRef<Transport> | null {
	return (() => { const __goscriptLiteralField2 = lifecycle.NewOnce(); return new Transport({once: __goscriptLiteralField2, options: transportOptions, addressToPeer: $.makeMap<string, __goscript_peer.grpcPeer | $.VarRef<__goscript_peer.grpcPeer> | null>()}) })()
}

var __goscriptAwait: any
