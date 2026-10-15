// Generated file based on peer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as peer from "@goscript/go.uber.org/yarpc/api/peer/index.js"

import * as abstractpeer from "@goscript/go.uber.org/yarpc/peer/abstractpeer/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as grpc from "@goscript/google.golang.org/grpc/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as backoff from "@goscript/go.uber.org/yarpc/api/backoff/index.js"

import * as tls from "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"

import * as interceptor from "@goscript/go.uber.org/yarpc/internal/interceptor/index.js"

import * as sync from "@goscript/sync/index.js"

import type * as time from "@goscript/time/index.js"

import * as __goscript_codec from "./codec.gs.ts"

import * as __goscript_dialer from "./dialer.gs.ts"

import type * as __goscript_inbound from "./inbound.gs.ts"

import * as __goscript_options from "./options.gs.ts"

import * as __goscript_outbound from "./outbound.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/api/peer/index.js"
import "@goscript/go.uber.org/yarpc/peer/abstractpeer/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/google.golang.org/grpc/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/go.uber.org/yarpc/api/backoff/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"
import "@goscript/go.uber.org/yarpc/internal/interceptor/index.js"
import "@goscript/sync/index.js"
import "./codec.gs.ts"
import "./dialer.gs.ts"
import "./options.gs.ts"
import "./outbound.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/transport/grpc", ["grpc.grpcPeer"])

export class grpcPeer {
	public get Peer(): abstractpeer.Peer | $.VarRef<abstractpeer.Peer> | null {
		return this._fields.Peer
	}

	public set Peer(value: abstractpeer.Peer | $.VarRef<abstractpeer.Peer> | null) {
		this._fields.Peer = value
	}

	public get t(): __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null {
		return this._fields.t
	}

	public set t(value: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null) {
		this._fields.t = value
	}

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

	public get clientConn(): grpc.ClientConn | $.VarRef<grpc.ClientConn> | null {
		return this._fields.clientConn
	}

	public set clientConn(value: grpc.ClientConn | $.VarRef<grpc.ClientConn> | null) {
		this._fields.clientConn = value
	}

	public get stoppedC(): $.Channel<{}> | null {
		return this._fields.stoppedC
	}

	public set stoppedC(value: $.Channel<{}> | null) {
		this._fields.stoppedC = value
	}

	public _fields: {
		Peer: abstractpeer.Peer | $.VarRef<abstractpeer.Peer> | null
		t: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null
		ctx: context.Context | null
		cancel: (() => void) | null
		clientConn: grpc.ClientConn | $.VarRef<grpc.ClientConn> | null
		stoppedC: $.Channel<{}> | null
	}

	constructor(init?: Partial<{Peer?: abstractpeer.Peer | $.VarRef<abstractpeer.Peer> | null, t?: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null, ctx?: context.Context | null, cancel?: (() => void) | null, clientConn?: grpc.ClientConn | $.VarRef<grpc.ClientConn> | null, stoppedC?: $.Channel<{}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Peer: init?.Peer ?? (null! as abstractpeer.Peer | $.VarRef<abstractpeer.Peer> | null),
			t: init?.t ?? (null! as __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null),
			ctx: init?.ctx ?? (null! as context.Context | null),
			cancel: init?.cancel ?? (null! as (() => void) | null),
			clientConn: init?.clientConn ?? (null! as grpc.ClientConn | $.VarRef<grpc.ClientConn> | null),
			stoppedC: init?.stoppedC ?? (null! as $.Channel<{}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): grpcPeer {
		return new grpcPeer(this, true)
	}

	public __goscriptAssign(source: grpcPeer): void {
		const target = this._fields
		const values = source._fields
		target.Peer = values.Peer
		target.t = values.t
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.cancel = values.cancel
		target.clientConn = values.clientConn
		target.stoppedC = values.stoppedC
	}

	public EndRequest(): void {
		const p: grpcPeer | $.VarRef<grpcPeer> | null = this;
	}

	public StartRequest(): void {
		const p: grpcPeer | $.VarRef<grpcPeer> | null = this;
	}

	public async monitorConnectionStatus(): globalThis.Promise<void> {
		const p: grpcPeer | $.VarRef<grpcPeer> | null = this;
		const p$: grpcPeer = p == null ? $.pointerTarget<grpcPeer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<grpcPeer>(p)
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as grpcPeer).setConnectionStatus(0) : grpcPeer.prototype.setConnectionStatus.call(p, 0))
		let grpcStatus: connectivity.State = 0
		while (true) {
			grpcStatus = await grpc.ClientConn.prototype.GetState.call((p$ as grpcPeer).clientConn)
			let yarpcStatus = grpcStatusToYARPCStatus(grpcStatus)
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as grpcPeer).setConnectionStatus(yarpcStatus) : grpcPeer.prototype.setConnectionStatus.call(p, yarpcStatus))

			// When active connection falling back to IDLE state, no automatic reconnection is happening.
			// There two options:
			// - Either try to make a call using this connection, which will trigger reconnection, but may lead
			// to a failed request (host is unreachable or context deadline happened).
			// - Or we may try to reconnect manually, and use connection only when it's established and explicitly available.
			// We choose second option.
			if (grpcStatus == 0) {
				await grpc.ClientConn.prototype.Connect.call((p$ as grpcPeer).clientConn)
			}

			if (!await grpc.ClientConn.prototype.WaitForStateChange.call((p$ as grpcPeer).clientConn, (p$ as grpcPeer).ctx, grpcStatus)) {
				break
			}
		}
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as grpcPeer).setConnectionStatus(0) : grpcPeer.prototype.setConnectionStatus.call(p, 0))

		// Close always returns an error.
		await grpc.ClientConn.prototype.Close.call((p$ as grpcPeer).clientConn)
		void (p$ as grpcPeer).stoppedC!.close()
	}

	public async setConnectionStatus(status: peer.ConnectionStatus): globalThis.Promise<void> {
		const p: grpcPeer | $.VarRef<grpcPeer> | null = this;
		const p$: grpcPeer = p == null ? $.pointerTarget<grpcPeer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<grpcPeer>(p)
		zap.Logger.prototype.Debug.call($.pointerValue<__goscript_options.transportOptions>($.pointerValue<__goscript_transport.Transport>((p$ as grpcPeer).t).options).logger, "peer status change", $.arrayToSlice<zap.Field>([zap.String("status", peer.ConnectionStatus_String(status)), zap.String("peer", abstractpeer.PeerIdentifier_Identifier($.pointerValue<abstractpeer.Peer>((p$ as grpcPeer).Peer).PeerIdentifier)), zap.String("transport", "grpc")]))
		abstractpeer.Peer.prototype.SetStatus.call((p$ as grpcPeer).Peer, status)
		await abstractpeer.Peer.prototype.NotifyStatusChanged.call((p$ as grpcPeer).Peer)
	}

	public async stop(): globalThis.Promise<void> {
		const p: grpcPeer | $.VarRef<grpcPeer> | null = this;
		void (__goscriptAwait = $.pointerValue<grpcPeer>(p).cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async wait(): globalThis.Promise<void> {
		const p: grpcPeer | $.VarRef<grpcPeer> | null = this;
		await $.chanRecv($.pointerValue<grpcPeer>(p).stoppedC)
	}

	public HostPort(): any {
		return $.pointerValue<abstractpeer.Peer>(this.Peer).HostPort()
	}

	public Identifier(): any {
		return abstractpeer.PeerIdentifier_Identifier($.pointerValue<abstractpeer.Peer>(this.Peer).PeerIdentifier)
	}

	public async NotifyStatusChanged(): globalThis.Promise<any> {
		return await $.pointerValue<abstractpeer.Peer>(this.Peer).NotifyStatusChanged()
	}

	public async NumSubscribers(): globalThis.Promise<any> {
		return await $.pointerValue<abstractpeer.Peer>(this.Peer).NumSubscribers()
	}

	public SetStatus(status: any): any {
		return $.pointerValue<abstractpeer.Peer>(this.Peer).SetStatus(status)
	}

	public Status(): any {
		return $.pointerValue<abstractpeer.Peer>(this.Peer).Status()
	}

	public async Subscribe(sub: any): globalThis.Promise<any> {
		return await $.pointerValue<abstractpeer.Peer>(this.Peer).Subscribe(sub)
	}

	public Transport(): any {
		return $.pointerValue<abstractpeer.Peer>(this.Peer).Transport()
	}

	public async Unsubscribe(sub: any): globalThis.Promise<any> {
		return await $.pointerValue<abstractpeer.Peer>(this.Peer).Unsubscribe(sub)
	}

	static __typeInfo = $.registerStructType(
		"grpc.grpcPeer",
		() => new grpcPeer(),
		() => [{ name: "EndRequest", args: [], returns: [], pointerReceiver: true }, { name: "StartRequest", args: [], returns: [], pointerReceiver: true }, { name: "monitorConnectionStatus", args: [], returns: [], pointerReceiver: true }, { name: "setConnectionStatus", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "stop", args: [], returns: [], pointerReceiver: true }, { name: "wait", args: [], returns: [], pointerReceiver: true }, { name: "HostPort", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }, { name: "Identifier", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }, { name: "NotifyStatusChanged", args: [], returns: [] }, { name: "NumSubscribers", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }] }, { name: "SetStatus", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "Status", args: [], returns: [{ type: "peer.Status" }] }, { name: "Subscribe", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "Transport", args: [], returns: [{ type: "peer.Transport" }] }, { name: "Unsubscribe", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }],
		grpcPeer,
		() => [{ name: "Peer", key: "Peer", type: /* @__PURE__ */ $.pointerType("abstractpeer.Peer"), anonymous: true }, { name: "t", key: "t", type: /* @__PURE__ */ $.pointerType("grpc.Transport") }, { name: "ctx", key: "ctx", type: "context.Context" }, { name: "cancel", key: "cancel", type: ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo) }, { name: "clientConn", key: "clientConn", type: /* @__PURE__ */ $.pointerType("grpc.ClientConn") }, { name: "stoppedC", key: "stoppedC", type: /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both") }]
	)
}

export function grpcStatusToYARPCStatus(grpcStatus: connectivity.State): peer.ConnectionStatus {
	switch (grpcStatus) {
		case connectivity.Ready:
		{
			return 2
			break
		}
		case connectivity.Connecting:
		{
			return 1
			break
		}
		default:
		{
			return 0
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptAwait: any
