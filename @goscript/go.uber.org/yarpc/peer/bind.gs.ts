// Generated file based on bind.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as multierr from "@goscript/go.uber.org/multierr/index.js"

import * as peer2 from "@goscript/go.uber.org/yarpc/api/peer/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as introspection from "@goscript/go.uber.org/yarpc/api/x/introspection/index.js"

import * as lifecycle from "@goscript/go.uber.org/yarpc/pkg/lifecycle/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/multierr/index.js"
import "@goscript/go.uber.org/yarpc/api/peer/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/api/x/introspection/index.js"
import "@goscript/go.uber.org/yarpc/pkg/lifecycle/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/peer", ["peer.BoundChooser", "peer.PeersUpdater"])

export class BoundChooser {
	public get once(): lifecycle.Once | $.VarRef<lifecycle.Once> | null {
		return this._fields.once
	}

	public set once(value: lifecycle.Once | $.VarRef<lifecycle.Once> | null) {
		this._fields.once = value
	}

	public get updater(): transport.Lifecycle | null {
		return this._fields.updater
	}

	public set updater(value: transport.Lifecycle | null) {
		this._fields.updater = value
	}

	public get chooserList(): peer2.ChooserList | null {
		return this._fields.chooserList
	}

	public set chooserList(value: peer2.ChooserList | null) {
		this._fields.chooserList = value
	}

	public _fields: {
		once: lifecycle.Once | $.VarRef<lifecycle.Once> | null
		updater: transport.Lifecycle | null
		chooserList: peer2.ChooserList | null
	}

	constructor(init?: Partial<{once?: lifecycle.Once | $.VarRef<lifecycle.Once> | null, updater?: transport.Lifecycle | null, chooserList?: peer2.ChooserList | null}>, __goscriptValue?: boolean) {
		this._fields = {
			once: init?.once ?? (null! as lifecycle.Once | $.VarRef<lifecycle.Once> | null),
			updater: init?.updater ?? (null! as transport.Lifecycle | null),
			chooserList: init?.chooserList ?? (null! as peer2.ChooserList | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BoundChooser {
		return new BoundChooser(this, true)
	}

	public __goscriptAssign(source: BoundChooser): void {
		const target = this._fields
		const values = source._fields
		target.once = values.once
		target.updater = $.assignFieldValue(target.updater, values.updater, "transport.Lifecycle")
		target.chooserList = $.assignFieldValue(target.chooserList, values.chooserList, "peer.ChooserList")
	}

	public async Choose(ctx: context.Context | null, treq: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<[peer2.Peer | null, ((_p0: $.GoError) => void) | null, $.GoError]> {
		const c: BoundChooser | $.VarRef<BoundChooser> | null = this;
		let peer: peer2.Peer | null = null! as peer2.Peer | null
		let onFinish: ((_p0: $.GoError) => void) | null = null! as ((_p0: $.GoError) => void) | null
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<Exclude<peer2.ChooserList, null>>($.pointerValue<BoundChooser>(c).chooserList).Choose(ctx, treq)
	}

	public ChooserList(): peer2.ChooserList | null {
		const c: BoundChooser | $.VarRef<BoundChooser> | null = this;
		return $.pointerValue<BoundChooser>(c).chooserList
	}

	public async Introspect(): globalThis.Promise<introspection.ChooserStatus> {
		const c: BoundChooser | $.VarRef<BoundChooser> | null = this;
		{
			let [ic, ok] = $.typeAssertTuple<introspection.IntrospectableChooser | null>($.pointerValue<BoundChooser>(c).chooserList, "introspection.IntrospectableChooser")
			if (ok) {
				return (((__goscriptAwait = (ic !== null && (ic as any).__isVarRef !== true && (ic as any).__goValue === undefined ? (ic as Exclude<introspection.IntrospectableChooser, null>) : $.pointerValue<Exclude<introspection.IntrospectableChooser, null>>(ic)).Introspect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as introspection.ChooserStatus)).clone()
			}
		}
		return new introspection.ChooserStatus(undefined, true)
	}

	public async IsRunning(): globalThis.Promise<boolean> {
		const c: BoundChooser | $.VarRef<BoundChooser> | null = this;
		const c$: BoundChooser = c == null ? $.pointerTarget<BoundChooser>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<BoundChooser>(c)
		return (__goscriptAwait = $.pointerValue<Exclude<peer2.ChooserList, null>>((c$ as BoundChooser).chooserList).IsRunning(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && (__goscriptAwait = $.pointerValue<Exclude<transport.Lifecycle, null>>((c$ as BoundChooser).updater).IsRunning(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public Start(): $.GoError {
		const c: BoundChooser | $.VarRef<BoundChooser> | null = this;
		return lifecycle.Once.prototype.Start.call($.pointerValue<BoundChooser>(c).once, $.functionValue(((__receiver) => () => __receiver.start())($.pointerValue<BoundChooser>(c)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/peer.(*BoundChooser).start-fm"))
	}

	public Stop(): $.GoError {
		const c: BoundChooser | $.VarRef<BoundChooser> | null = this;
		return lifecycle.Once.prototype.Stop.call($.pointerValue<BoundChooser>(c).once, $.functionValue(((__receiver) => () => __receiver.stop())($.pointerValue<BoundChooser>(c)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/peer.(*BoundChooser).stop-fm"))
	}

	public Updater(): transport.Lifecycle | null {
		const c: BoundChooser | $.VarRef<BoundChooser> | null = this;
		return $.pointerValue<BoundChooser>(c).updater
	}

	public async start(): globalThis.Promise<$.GoError> {
		const c: BoundChooser | $.VarRef<BoundChooser> | null = this;
		const c$: BoundChooser = c == null ? $.pointerTarget<BoundChooser>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<BoundChooser>(c)

		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<peer2.ChooserList, null>>((c$ as BoundChooser).chooserList).Start(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		let errs: $.GoError = null! as $.GoError
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<transport.Lifecycle, null>>((c$ as BoundChooser).updater).Start(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				errs = multierr.Append(errs, err)

				// Abort the peer chooser if the updater failed to start.
				{
					let __goscriptShadow0 = (__goscriptAwait = $.pointerValue<Exclude<peer2.ChooserList, null>>((c$ as BoundChooser).chooserList).Stop(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (__goscriptShadow0 != null) {
						errs = multierr.Append(errs, __goscriptShadow0)
					}
				}
			}
		}

		return errs
	}

	public async stop(): globalThis.Promise<$.GoError> {
		const c: BoundChooser | $.VarRef<BoundChooser> | null = this;
		const c$: BoundChooser = c == null ? $.pointerTarget<BoundChooser>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<BoundChooser>(c)
		let errs: $.GoError = null! as $.GoError

		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<transport.Lifecycle, null>>((c$ as BoundChooser).updater).Stop(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				errs = multierr.Append(errs, err)
			}
		}

		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<peer2.ChooserList, null>>((c$ as BoundChooser).chooserList).Stop(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				errs = multierr.Append(errs, err)
			}
		}

		return errs
	}

	static __typeInfo = $.registerStructType(
		"peer.BoundChooser",
		() => new BoundChooser(),
		() => [{ name: "Choose", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "peer.Peer" }, { type: ({ kind: $.TypeKind.Function, params: ["error"], results: [] } as $.FunctionTypeInfo) }, { type: "error" }], pointerReceiver: true }, { name: "ChooserList", args: [], returns: [{ type: "peer.ChooserList" }], pointerReceiver: true }, { name: "Introspect", args: [], returns: [{ type: "introspection.ChooserStatus" }], pointerReceiver: true }, { name: "IsRunning", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "Start", args: [], returns: [{ type: "error" }], pointerReceiver: true }, { name: "Stop", args: [], returns: [{ type: "error" }], pointerReceiver: true }, { name: "Updater", args: [], returns: [{ type: "transport.Lifecycle" }], pointerReceiver: true }, { name: "start", args: [], returns: [{ type: "error" }], pointerReceiver: true }, { name: "stop", args: [], returns: [{ type: "error" }], pointerReceiver: true }],
		BoundChooser,
		() => [{ name: "once", key: "once", type: /* @__PURE__ */ $.pointerType("lifecycle.Once") }, { name: "updater", key: "updater", type: "transport.Lifecycle" }, { name: "chooserList", key: "chooserList", type: "peer.ChooserList" }]
	)
}

export class PeersUpdater {
	public get once(): lifecycle.Once | $.VarRef<lifecycle.Once> | null {
		return this._fields.once
	}

	public set once(value: lifecycle.Once | $.VarRef<lifecycle.Once> | null) {
		this._fields.once = value
	}

	public get pl(): peer2.List | null {
		return this._fields.pl
	}

	public set pl(value: peer2.List | null) {
		this._fields.pl = value
	}

	public get ids(): $.Slice<peer2.Identifier | null> {
		return this._fields.ids
	}

	public set ids(value: $.Slice<peer2.Identifier | null>) {
		this._fields.ids = value
	}

	public _fields: {
		once: lifecycle.Once | $.VarRef<lifecycle.Once> | null
		pl: peer2.List | null
		ids: $.Slice<peer2.Identifier | null>
	}

	constructor(init?: Partial<{once?: lifecycle.Once | $.VarRef<lifecycle.Once> | null, pl?: peer2.List | null, ids?: $.Slice<peer2.Identifier | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			once: init?.once ?? (null! as lifecycle.Once | $.VarRef<lifecycle.Once> | null),
			pl: init?.pl ?? (null! as peer2.List | null),
			ids: init?.ids ?? (null! as $.Slice<peer2.Identifier | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PeersUpdater {
		return new PeersUpdater(this, true)
	}

	public __goscriptAssign(source: PeersUpdater): void {
		const target = this._fields
		const values = source._fields
		target.once = values.once
		target.pl = $.assignFieldValue(target.pl, values.pl, "peer.List")
		target.ids = values.ids
	}

	public IsRunning(): boolean {
		const s: PeersUpdater | $.VarRef<PeersUpdater> | null = this;
		return lifecycle.Once.prototype.IsRunning.call($.pointerValue<PeersUpdater>(s).once)
	}

	public Start(): $.GoError {
		const s: PeersUpdater | $.VarRef<PeersUpdater> | null = this;
		return lifecycle.Once.prototype.Start.call($.pointerValue<PeersUpdater>(s).once, $.functionValue(((__receiver) => () => __receiver.start())($.pointerValue<PeersUpdater>(s)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/peer.(*PeersUpdater).start-fm"))
	}

	public Stop(): $.GoError {
		const s: PeersUpdater | $.VarRef<PeersUpdater> | null = this;
		return lifecycle.Once.prototype.Stop.call($.pointerValue<PeersUpdater>(s).once, $.functionValue(((__receiver) => () => __receiver.stop())($.pointerValue<PeersUpdater>(s)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/peer.(*PeersUpdater).stop-fm"))
	}

	public async start(): globalThis.Promise<$.GoError> {
		const s: PeersUpdater | $.VarRef<PeersUpdater> | null = this;
		const s$: PeersUpdater = s == null ? $.pointerTarget<PeersUpdater>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<PeersUpdater>(s)
		return $.pointerValue<Exclude<peer2.List, null>>((s$ as PeersUpdater).pl).Update(new peer2.ListUpdates({Additions: (s$ as PeersUpdater).ids}, true))
	}

	public async stop(): globalThis.Promise<$.GoError> {
		const s: PeersUpdater | $.VarRef<PeersUpdater> | null = this;
		const s$: PeersUpdater = s == null ? $.pointerTarget<PeersUpdater>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<PeersUpdater>(s)
		return $.pointerValue<Exclude<peer2.List, null>>((s$ as PeersUpdater).pl).Update(new peer2.ListUpdates({Removals: (s$ as PeersUpdater).ids}, true))
	}

	static __typeInfo = $.registerStructType(
		"peer.PeersUpdater",
		() => new PeersUpdater(),
		() => [{ name: "IsRunning", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "Start", args: [], returns: [{ type: "error" }], pointerReceiver: true }, { name: "Stop", args: [], returns: [{ type: "error" }], pointerReceiver: true }, { name: "start", args: [], returns: [{ type: "error" }], pointerReceiver: true }, { name: "stop", args: [], returns: [{ type: "error" }], pointerReceiver: true }],
		PeersUpdater,
		() => [{ name: "once", key: "once", type: /* @__PURE__ */ $.pointerType("lifecycle.Once") }, { name: "pl", key: "pl", type: "peer.List" }, { name: "ids", key: "ids", type: /* @__PURE__ */ $.sliceType("peer.Identifier") }]
	)
}

export async function Bind(chooserList: peer2.ChooserList | null, bind: ((_p0: peer2.List | null) => transport.Lifecycle | null | globalThis.Promise<transport.Lifecycle | null>) | null): globalThis.Promise<BoundChooser | $.VarRef<BoundChooser> | null> {
	return (await (async () => { const __goscriptLiteralField0 = lifecycle.NewOnce(); const __goscriptLiteralField1 = (__goscriptAwait = bind!((chooserList as peer2.List | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new BoundChooser({once: __goscriptLiteralField0, chooserList: chooserList, updater: __goscriptLiteralField1}) })())
}

export function BindPeers(ids: $.Slice<peer2.Identifier | null>): peer2.Binder | null {
	return $.functionValue((pl: peer2.List | null): transport.Lifecycle | null => {
		return $.interfaceValue<transport.Lifecycle | null>((() => { const __goscriptLiteralField2 = lifecycle.NewOnce(); return new PeersUpdater({once: __goscriptLiteralField2, pl: pl, ids: ids}) })(), "*peer.PeersUpdater", /* @__PURE__ */ $.pointerType("peer.PeersUpdater"))
	}, ({ kind: $.TypeKind.Function, params: ["peer.List"], results: ["transport.Lifecycle"] } as $.FunctionTypeInfo))
}

var __goscriptAwait: any
