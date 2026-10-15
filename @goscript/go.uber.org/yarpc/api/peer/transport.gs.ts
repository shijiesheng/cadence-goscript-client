// Generated file based on transport.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_connectionstatus_string from "./connectionstatus_string.gs.ts"

import * as __goscript_peer from "./peer.gs.ts"

import type * as __goscript_status_stringer from "./status_stringer.gs.ts"
import "./connectionstatus_string.gs.ts"
import "./peer.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/peer", ["peer.Subscriber", "peer.Transport"])

export type Subscriber = {
	NotifyStatusChanged(_p0: __goscript_peer.Identifier | null): void
}

$.registerInterfaceType(
	"peer.Subscriber",
	null,
	[{ name: "NotifyStatusChanged", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [] }]
);

export type Transport = {
	ReleasePeer(_p0: __goscript_peer.Identifier | null, _p1: Subscriber | null): $.GoError | globalThis.Promise<$.GoError>
	RetainPeer(_p0: __goscript_peer.Identifier | null, _p1: Subscriber | null): [__goscript_peer.Peer | null, $.GoError] | globalThis.Promise<[__goscript_peer.Peer | null, $.GoError]>
}

$.registerInterfaceType(
	"peer.Transport",
	null,
	[{ name: "ReleasePeer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "RetainPeer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "peer.Peer" }, { type: "error" }] }]
);
