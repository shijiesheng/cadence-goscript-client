// Generated file based on single.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as peer2 from "@goscript/go.uber.org/yarpc/api/peer/index.js"

import * as transport2 from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as introspection from "@goscript/go.uber.org/yarpc/api/x/introspection/index.js"

import * as lifecycle from "@goscript/go.uber.org/yarpc/pkg/lifecycle/index.js"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/go.uber.org/yarpc/api/peer/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/api/x/introspection/index.js"
import "@goscript/go.uber.org/yarpc/pkg/lifecycle/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/peer", ["peer.Single"])

export class Single {
	public get once(): lifecycle.Once | $.VarRef<lifecycle.Once> | null {
		return this._fields.once
	}

	public set once(value: lifecycle.Once | $.VarRef<lifecycle.Once> | null) {
		this._fields.once = value
	}

	public get t(): peer2.Transport | null {
		return this._fields.t
	}

	public set t(value: peer2.Transport | null) {
		this._fields.t = value
	}

	public get pid(): peer2.Identifier | null {
		return this._fields.pid
	}

	public set pid(value: peer2.Identifier | null) {
		this._fields.pid = value
	}

	public get p(): peer2.Peer | null {
		return this._fields.p
	}

	public set p(value: peer2.Peer | null) {
		this._fields.p = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get boundOnFinish(): ((_p0: $.GoError) => void) | null {
		return this._fields.boundOnFinish
	}

	public set boundOnFinish(value: ((_p0: $.GoError) => void) | null) {
		this._fields.boundOnFinish = value
	}

	public _fields: {
		once: lifecycle.Once | $.VarRef<lifecycle.Once> | null
		t: peer2.Transport | null
		pid: peer2.Identifier | null
		p: peer2.Peer | null
		err: $.GoError
		boundOnFinish: ((_p0: $.GoError) => void) | null
	}

	constructor(init?: Partial<{once?: lifecycle.Once | $.VarRef<lifecycle.Once> | null, t?: peer2.Transport | null, pid?: peer2.Identifier | null, p?: peer2.Peer | null, err?: $.GoError, boundOnFinish?: ((_p0: $.GoError) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			once: init?.once ?? (null! as lifecycle.Once | $.VarRef<lifecycle.Once> | null),
			t: init?.t ?? (null! as peer2.Transport | null),
			pid: init?.pid ?? (null! as peer2.Identifier | null),
			p: init?.p ?? (null! as peer2.Peer | null),
			err: init?.err ?? (null! as $.GoError),
			boundOnFinish: init?.boundOnFinish ?? (null! as ((_p0: $.GoError) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Single {
		return new Single(this, true)
	}

	public __goscriptAssign(source: Single): void {
		const target = this._fields
		const values = source._fields
		target.once = values.once
		target.t = $.assignFieldValue(target.t, values.t, "peer.Transport")
		target.pid = $.assignFieldValue(target.pid, values.pid, "peer.Identifier")
		target.p = $.assignFieldValue(target.p, values.p, "peer.Peer")
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.boundOnFinish = values.boundOnFinish
	}

	public async Choose(ctx: context.Context | null, _p1: transport2.Request | $.VarRef<transport2.Request> | null): globalThis.Promise<[peer2.Peer | null, ((_p0: $.GoError) => void) | null, $.GoError]> {
		const s: Single | $.VarRef<Single> | null = this;
		const s$: Single = s == null ? $.pointerTarget<Single>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Single>(s)
		{
			let err = await lifecycle.Once.prototype.WaitUntilRunning.call((s$ as Single).once, ctx)
			if (err != null) {
				return [null, (null as ((_p0: $.GoError) => void) | null), err]
			}
		}
		void (__goscriptAwait = $.pointerValue<Exclude<peer2.Peer, null>>((s$ as Single).p).StartRequest(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [(s$ as Single).p, (s$ as Single).boundOnFinish, (s$ as Single).err]
	}

	public async Introspect(): globalThis.Promise<introspection.ChooserStatus> {
		const s: Single | $.VarRef<Single> | null = this;
		const s$: Single = s == null ? $.pointerTarget<Single>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Single>(s)
		if (!lifecycle.Once.prototype.IsRunning.call((s$ as Single).once)) {
			return new introspection.ChooserStatus({Name: "Single", Peers: $.arrayToSlice<introspection.PeerStatus>([(await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<peer2.Identifier, null>>((s$ as Single).pid).Identifier(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new introspection.PeerStatus({Identifier: __goscriptLiteralField0, State: "uninitialized"}, true) })())])}, true)
		}

		let peerStatus = (((__goscriptAwait = $.pointerValue<Exclude<peer2.Peer, null>>((s$ as Single).p).Status(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as peer2.Status)).clone()
		let __goscriptShadow0 = (await (async () => { const __goscriptLiteralField1 = (__goscriptAwait = $.pointerValue<Exclude<peer2.Peer, null>>((s$ as Single).p).Identifier(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField2 = await fmt.Sprintf("%s, %d pending request(s)", peer2.ConnectionStatus_String(peerStatus.ConnectionStatus), $.basicInterfaceValue(peerStatus.PendingRequestCount, "int")); return new introspection.PeerStatus({Identifier: __goscriptLiteralField1, State: __goscriptLiteralField2}, true) })())

		return new introspection.ChooserStatus({Name: "Single", Peers: $.arrayToSlice<introspection.PeerStatus>([(__goscriptShadow0).clone()])}, true)
	}

	public IsRunning(): boolean {
		const s: Single | $.VarRef<Single> | null = this;
		return true
	}

	public NotifyStatusChanged(_p0: peer2.Identifier | null): void {
		const s: Single | $.VarRef<Single> | null = this;
	}

	public Start(): $.GoError {
		const s: Single | $.VarRef<Single> | null = this;
		return lifecycle.Once.prototype.Start.call($.pointerValue<Single>(s).once, $.functionValue(((__receiver) => () => __receiver.start())($.pointerValue<Single>(s)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/peer.(*Single).start-fm"))
	}

	public Stop(): $.GoError {
		const s: Single | $.VarRef<Single> | null = this;
		return lifecycle.Once.prototype.Stop.call($.pointerValue<Single>(s).once, $.functionValue(((__receiver) => () => __receiver.stop())($.pointerValue<Single>(s)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/peer.(*Single).stop-fm"))
	}

	public Transport(): peer2.Transport | null {
		const s: Single | $.VarRef<Single> | null = this;
		return $.pointerValue<Single>(s).t
	}

	public async onFinish(_p0: $.GoError): globalThis.Promise<void> {
		const s: Single | $.VarRef<Single> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<peer2.Peer, null>>($.pointerValue<Single>(s).p).EndRequest(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async start(): globalThis.Promise<$.GoError> {
		let s: Single | $.VarRef<Single> | null = this;
		const s$: Single = s == null ? $.pointerTarget<Single>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Single>(s)
		let [p, err] = await $.pointerValue<Exclude<peer2.Transport, null>>((s$ as Single).t).RetainPeer((s$ as Single).pid, $.interfaceValue<peer2.Subscriber | null>(s, "*peer.Single", /* @__PURE__ */ $.pointerType("peer.Single")));
		;(s$ as Single).p = p;
		;(s$ as Single).err = err
		return err
	}

	public async stop(): globalThis.Promise<$.GoError> {
		const s: Single | $.VarRef<Single> | null = this;
		const s$: Single = s == null ? $.pointerTarget<Single>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Single>(s)
		return $.pointerValue<Exclude<peer2.Transport, null>>((s$ as Single).t).ReleasePeer((s$ as Single).pid, $.interfaceValue<peer2.Subscriber | null>(s, "*peer.Single", /* @__PURE__ */ $.pointerType("peer.Single")))
	}

	static __typeInfo = $.registerStructType(
		"peer.Single",
		() => new Single(),
		() => [{ name: "Choose", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "peer.Peer" }, { type: ({ kind: $.TypeKind.Function, params: ["error"], results: [] } as $.FunctionTypeInfo) }, { type: "error" }], pointerReceiver: true }, { name: "Introspect", args: [], returns: [{ type: "introspection.ChooserStatus" }], pointerReceiver: true }, { name: "IsRunning", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "NotifyStatusChanged", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "Start", args: [], returns: [{ type: "error" }], pointerReceiver: true }, { name: "Stop", args: [], returns: [{ type: "error" }], pointerReceiver: true }, { name: "Transport", args: [], returns: [{ type: "peer.Transport" }], pointerReceiver: true }, { name: "onFinish", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "start", args: [], returns: [{ type: "error" }], pointerReceiver: true }, { name: "stop", args: [], returns: [{ type: "error" }], pointerReceiver: true }],
		Single,
		() => [{ name: "once", key: "once", type: /* @__PURE__ */ $.pointerType("lifecycle.Once") }, { name: "t", key: "t", type: "peer.Transport" }, { name: "pid", key: "pid", type: "peer.Identifier" }, { name: "p", key: "p", type: "peer.Peer" }, { name: "err", key: "err", type: "error" }, { name: "boundOnFinish", key: "boundOnFinish", type: ({ kind: $.TypeKind.Function, params: ["error"], results: [] } as $.FunctionTypeInfo) }]
	)
}

export function NewSingle(pid: peer2.Identifier | null, transport: peer2.Transport | null): Single | $.VarRef<Single> | null {
	let s: Single | $.VarRef<Single> | null = (() => { const __goscriptLiteralField3 = lifecycle.NewOnce(); return new Single({once: __goscriptLiteralField3, pid: pid, t: transport}) })()
	$.pointerValue<Single>(s).boundOnFinish = $.functionValue(((__receiver) => (_p0: $.GoError) => __receiver.onFinish(_p0))($.pointerValue<Single>(s)), ({ kind: $.TypeKind.Function, params: ["error"], results: [] } as $.FunctionTypeInfo), "go.uber.org/yarpc/peer.(*Single).onFinish-fm")
	return s
}

var __goscriptAwait: any
