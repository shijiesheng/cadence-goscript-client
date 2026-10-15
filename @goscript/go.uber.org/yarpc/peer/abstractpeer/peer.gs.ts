// Generated file based on peer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as peer2 from "@goscript/go.uber.org/yarpc/api/peer/index.js"
import "@goscript/sync/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/go.uber.org/yarpc/api/peer/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/peer/abstractpeer", ["abstractpeer.PeerIdentifier", "abstractpeer.Peer"])

export type PeerIdentifier = string

$.registerNamedValueType(
	"abstractpeer.PeerIdentifier",
	{Identifier: (receiver: any, ...args: any[]) => (PeerIdentifier_Identifier as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Identifier", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*abstractpeer.PeerIdentifier",
	{Identifier: (receiver: any, ...args: any[]) => (PeerIdentifier_Identifier as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Identifier", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class Peer {
	public get PeerIdentifier(): PeerIdentifier {
		return this._fields.PeerIdentifier
	}

	public set PeerIdentifier(value: PeerIdentifier) {
		this._fields.PeerIdentifier = value
	}

	public get lock(): sync.RWMutex {
		return this._fields.lock
	}

	public set lock(value: sync.RWMutex) {
		this._fields.lock = value
	}

	public get transport(): peer2.Transport | null {
		return this._fields.transport
	}

	public set transport(value: peer2.Transport | null) {
		this._fields.transport = value
	}

	public get subscribers(): globalThis.Map<peer2.Subscriber | null, {}> | null {
		return this._fields.subscribers
	}

	public set subscribers(value: globalThis.Map<peer2.Subscriber | null, {}> | null) {
		this._fields.subscribers = value
	}

	public get pending(): atomic.Int32 {
		return this._fields.pending
	}

	public set pending(value: atomic.Int32) {
		this._fields.pending = value
	}

	public get connectionStatus(): atomic.Int32 {
		return this._fields.connectionStatus
	}

	public set connectionStatus(value: atomic.Int32) {
		this._fields.connectionStatus = value
	}

	public _fields: {
		PeerIdentifier: PeerIdentifier
		lock: sync.RWMutex
		transport: peer2.Transport | null
		subscribers: globalThis.Map<peer2.Subscriber | null, {}> | null
		pending: atomic.Int32
		connectionStatus: atomic.Int32
	}

	constructor(init?: Partial<{PeerIdentifier?: PeerIdentifier, lock?: sync.RWMutex, transport?: peer2.Transport | null, subscribers?: globalThis.Map<peer2.Subscriber | null, {}> | null, pending?: atomic.Int32, connectionStatus?: atomic.Int32}>, __goscriptValue?: boolean) {
		this._fields = {
			PeerIdentifier: init?.PeerIdentifier ?? ("" as PeerIdentifier),
			lock: init?.lock ? $.markAsStructValue($.cloneStructValue(init.lock)) : $.markAsStructValue(new sync.RWMutex()),
			transport: init?.transport ?? (null! as peer2.Transport | null),
			subscribers: init?.subscribers ?? (null! as globalThis.Map<peer2.Subscriber | null, {}> | null),
			pending: init?.pending ? init.pending.clone() : new atomic.Int32(undefined, true),
			connectionStatus: init?.connectionStatus ? init.connectionStatus.clone() : new atomic.Int32(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Peer {
		return new Peer(this, true)
	}

	public __goscriptAssign(source: Peer): void {
		const target = this._fields
		const values = source._fields
		target.PeerIdentifier = values.PeerIdentifier
		$.assignStruct(target.lock, values.lock)
		target.transport = $.assignFieldValue(target.transport, values.transport, "peer.Transport")
		target.subscribers = values.subscribers
		$.assignStruct(target.pending, values.pending)
		$.assignStruct(target.connectionStatus, values.connectionStatus)
	}

	public EndRequest(): void {
		const p: Peer | $.VarRef<Peer> | null = this;
		$.pointerValue<Peer>(p).pending.Dec()
	}

	public HostPort(): string {
		const p: Peer | $.VarRef<Peer> | null = this;
		return $.pointerValue<Peer>(p).PeerIdentifier
	}

	public async NotifyStatusChanged(): globalThis.Promise<void> {
		const p: Peer | $.VarRef<Peer> | null = this;
		const p$: Peer = p == null ? $.pointerTarget<Peer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Peer>(p)
		await (p$ as Peer).lock.RLock()
		let subs: $.Slice<peer2.Subscriber | null> = $.makeSlice<peer2.Subscriber | null>(0, $.len((p$ as Peer).subscribers))
		for (const [sub, __rangeValue] of (p$ as Peer).subscribers?.entries() ?? []) {
			subs = $.appendOne(subs, sub, $.appendZeros.nil)
		}
		void (p$ as Peer).lock.RUnlock()

		for (let __goscriptRangeTarget0 = subs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let sub = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as peer2.Subscriber | null)
			void (__goscriptAwait = (sub !== null && (sub as any).__isVarRef !== true && (sub as any).__goValue === undefined ? (sub as Exclude<peer2.Subscriber, null>) : $.pointerValue<Exclude<peer2.Subscriber, null>>(sub)).NotifyStatusChanged($.interfaceValue<peer2.Identifier | null>(p, "*abstractpeer.Peer", /* @__PURE__ */ $.pointerType("abstractpeer.Peer"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async NumSubscribers(): globalThis.Promise<number> {
		const p: Peer | $.VarRef<Peer> | null = this;
		const p$: Peer = p == null ? $.pointerTarget<Peer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Peer>(p)
		await (p$ as Peer).lock.RLock()
		let subs = $.len((p$ as Peer).subscribers)
		void (p$ as Peer).lock.RUnlock()
		return subs
	}

	public SetStatus(status: peer2.ConnectionStatus): void {
		const p: Peer | $.VarRef<Peer> | null = this;
		$.pointerValue<Peer>(p).connectionStatus.Store($.int(status, 32))
	}

	public StartRequest(): void {
		const p: Peer | $.VarRef<Peer> | null = this;
		$.pointerValue<Peer>(p).pending.Inc()
	}

	public Status(): peer2.Status {
		const p: Peer | $.VarRef<Peer> | null = this;
		const p$: Peer = p == null ? $.pointerTarget<Peer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Peer>(p)
		return (() => { const __goscriptLiteralField0 = $.int((p$ as Peer).pending.Load()); const __goscriptLiteralField1 = $.int((p$ as Peer).connectionStatus.Load()); return new peer2.Status({PendingRequestCount: __goscriptLiteralField0, ConnectionStatus: __goscriptLiteralField1}, true) })()
	}

	public async Subscribe(sub: peer2.Subscriber | null): globalThis.Promise<void> {
		let p: Peer | $.VarRef<Peer> | null = this;
		const p$: Peer = p == null ? $.pointerTarget<Peer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Peer>(p)
		await (p$ as Peer).lock.Lock()
		$.mapSet((p$ as Peer).subscribers, sub, {})
		void (p$ as Peer).lock.Unlock()
	}

	public Transport(): peer2.Transport | null {
		const p: Peer | $.VarRef<Peer> | null = this;
		return $.pointerValue<Peer>(p).transport
	}

	public async Unsubscribe(sub: peer2.Subscriber | null): globalThis.Promise<$.GoError> {
		const p: Peer | $.VarRef<Peer> | null = this;
		using __defer = new $.DisposableStack()
		const p$: Peer = p == null ? $.pointerTarget<Peer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Peer>(p)
		await (p$ as Peer).lock.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as Peer).lock), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		{
			let [, ok] = $.mapGet<peer2.Subscriber | null, {}, {}>((p$ as Peer).subscribers, sub, {})
			if (!ok) {
				return $.interfaceValue<$.GoError>(new peer2.ErrPeerHasNoReferenceToSubscriber({PeerIdentifier: $.namedValueInterfaceValue<peer2.Identifier | null>((p$ as Peer).PeerIdentifier, "abstractpeer.PeerIdentifier", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), PeerSubscriber: sub}, true), "peer.ErrPeerHasNoReferenceToSubscriber", "peer.ErrPeerHasNoReferenceToSubscriber")
			}
		}

		$.deleteMapEntry((p$ as Peer).subscribers, sub)
		return null
	}

	public Identifier(): any {
		return PeerIdentifier_Identifier(this.PeerIdentifier)
	}

	static __typeInfo = $.registerStructType(
		"abstractpeer.Peer",
		() => new Peer(),
		() => [{ name: "EndRequest", args: [], returns: [], pointerReceiver: true }, { name: "HostPort", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "NotifyStatusChanged", args: [], returns: [], pointerReceiver: true }, { name: "NumSubscribers", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "SetStatus", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "StartRequest", args: [], returns: [], pointerReceiver: true }, { name: "Status", args: [], returns: [{ type: "peer.Status" }], pointerReceiver: true }, { name: "Subscribe", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "Transport", args: [], returns: [{ type: "peer.Transport" }], pointerReceiver: true }, { name: "Unsubscribe", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "Identifier", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }],
		Peer,
		() => [{ name: "PeerIdentifier", key: "PeerIdentifier", type: /* @__PURE__ */ $.basicType("string", "abstractpeer.PeerIdentifier"), anonymous: true }, { name: "lock", key: "lock", type: "sync.RWMutex" }, { name: "transport", key: "transport", type: "peer.Transport" }, { name: "subscribers", key: "subscribers", type: /* @__PURE__ */ $.mapType("peer.Subscriber", { kind: $.TypeKind.Struct, methods: [], fields: [] }) }, { name: "pending", key: "pending", type: "atomic.Int32" }, { name: "connectionStatus", key: "connectionStatus", type: "atomic.Int32" }]
	)
}

export function PeerIdentifier_Identifier(p: PeerIdentifier): string {
	return p
}

export function Identify(peer: string): peer2.Identifier | null {
	return $.namedValueInterfaceValue<peer2.Identifier | null>(peer, "abstractpeer.PeerIdentifier", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export function NewPeer(pid: PeerIdentifier, transport: peer2.Transport | null): Peer | $.VarRef<Peer> | null {
	let p: Peer | $.VarRef<Peer> | null = new Peer({PeerIdentifier: pid, transport: transport, subscribers: $.makeMap<peer2.Subscriber | null, {}>()})
	$.pointerValue<Peer>(p).connectionStatus.Store(0)
	return p
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Identifier: (receiver: any, ...args: any[]) => (PeerIdentifier_Identifier as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "abstractpeer.PeerIdentifier"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Identifier", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
