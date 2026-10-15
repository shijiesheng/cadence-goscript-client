// Generated file based on list.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as __goscript_connectionstatus_string from "./connectionstatus_string.gs.ts"

import * as __goscript_peer from "./peer.gs.ts"

import type * as __goscript_status_stringer from "./status_stringer.gs.ts"

import type * as __goscript_transport from "./transport.gs.ts"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "./connectionstatus_string.gs.ts"
import "./peer.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/peer", ["peer.Chooser", "peer.List", "peer.ListUpdates", "peer.ChooserList", "peer.ListImplementation", "peer.Binder"])

export type Chooser = {
	Choose(_p0: context.Context | null, _p1: transport.Request | $.VarRef<transport.Request> | null): [__goscript_peer.Peer | null, ((_p0: $.GoError) => void) | null, $.GoError] | globalThis.Promise<[__goscript_peer.Peer | null, ((_p0: $.GoError) => void) | null, $.GoError]>
	IsRunning(): boolean | globalThis.Promise<boolean>
	Start(): $.GoError
	Stop(): $.GoError
}

$.registerInterfaceType(
	"peer.Chooser",
	null,
	[{ name: "Choose", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "peer.Peer" }, { type: ({ kind: $.TypeKind.Function, params: ["error"], results: [] } as $.FunctionTypeInfo) }, { type: "error" }] }, { name: "IsRunning", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "Start", args: [], returns: [{ type: "error" }] }, { name: "Stop", args: [], returns: [{ type: "error" }] }]
);

export type List = {
	Update(updates: ListUpdates): $.GoError
}

$.registerInterfaceType(
	"peer.List",
	null,
	[{ name: "Update", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }]
);

export type ChooserList = {
	Choose(_p0: context.Context | null, _p1: transport.Request | $.VarRef<transport.Request> | null): [__goscript_peer.Peer | null, ((_p0: $.GoError) => void) | null, $.GoError] | globalThis.Promise<[__goscript_peer.Peer | null, ((_p0: $.GoError) => void) | null, $.GoError]>
	IsRunning(): boolean | globalThis.Promise<boolean>
	Start(): $.GoError
	Stop(): $.GoError
	Update(updates: ListUpdates): $.GoError
}

$.registerInterfaceType(
	"peer.ChooserList",
	null,
	[{ name: "Choose", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "peer.Peer" }, { type: ({ kind: $.TypeKind.Function, params: ["error"], results: [] } as $.FunctionTypeInfo) }, { type: "error" }] }, { name: "IsRunning", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "Start", args: [], returns: [{ type: "error" }] }, { name: "Stop", args: [], returns: [{ type: "error" }] }, { name: "Update", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }]
);

export type ListImplementation = {
	Add(_p0: __goscript_peer.StatusPeer | null): __goscript_transport.Subscriber | null
	Choose(_p0: context.Context | null, _p1: transport.Request | $.VarRef<transport.Request> | null): __goscript_peer.StatusPeer | null
	IsRunning(): boolean | globalThis.Promise<boolean>
	Remove(_p0: __goscript_peer.StatusPeer | null, _p1: __goscript_transport.Subscriber | null): void
	Start(): $.GoError
	Stop(): $.GoError
}

$.registerInterfaceType(
	"peer.ListImplementation",
	null,
	[{ name: "Add", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "peer.Subscriber" }] }, { name: "Choose", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "peer.StatusPeer" }] }, { name: "IsRunning", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "Remove", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }, { name: "Start", args: [], returns: [{ type: "error" }] }, { name: "Stop", args: [], returns: [{ type: "error" }] }]
);

export type Binder = ((_p0: List | null) => transport.Lifecycle | null | globalThis.Promise<transport.Lifecycle | null>) | null

export class ListUpdates {
	// Additions are the identifiers that should be added to the list
	public get Additions(): $.Slice<__goscript_peer.Identifier | null> {
		return this._fields.Additions
	}

	public set Additions(value: $.Slice<__goscript_peer.Identifier | null>) {
		this._fields.Additions = value
	}

	// Removals are the identifiers that should be removed to the list
	public get Removals(): $.Slice<__goscript_peer.Identifier | null> {
		return this._fields.Removals
	}

	public set Removals(value: $.Slice<__goscript_peer.Identifier | null>) {
		this._fields.Removals = value
	}

	public _fields: {
		Additions: $.Slice<__goscript_peer.Identifier | null>
		Removals: $.Slice<__goscript_peer.Identifier | null>
	}

	constructor(init?: Partial<{Additions?: $.Slice<__goscript_peer.Identifier | null>, Removals?: $.Slice<__goscript_peer.Identifier | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			Additions: init?.Additions ?? (null! as $.Slice<__goscript_peer.Identifier | null>),
			Removals: init?.Removals ?? (null! as $.Slice<__goscript_peer.Identifier | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListUpdates {
		return new ListUpdates(this, true)
	}

	public __goscriptAssign(source: ListUpdates): void {
		const target = this._fields
		const values = source._fields
		target.Additions = values.Additions
		target.Removals = values.Removals
	}

	static __typeInfo = $.registerStructType(
		"peer.ListUpdates",
		() => new ListUpdates(),
		() => [],
		ListUpdates,
		() => [{ name: "Additions", key: "Additions", type: /* @__PURE__ */ $.sliceType("peer.Identifier") }, { name: "Removals", key: "Removals", type: /* @__PURE__ */ $.sliceType("peer.Identifier") }]
	)
}
