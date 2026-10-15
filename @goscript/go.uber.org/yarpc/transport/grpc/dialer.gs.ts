// Generated file based on dialer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as peer from "@goscript/go.uber.org/yarpc/api/peer/index.js"

import * as context from "@goscript/context/index.js"

import * as backoff from "@goscript/go.uber.org/yarpc/api/backoff/index.js"

import * as tls from "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"

import * as interceptor from "@goscript/go.uber.org/yarpc/internal/interceptor/index.js"

import * as abstractpeer from "@goscript/go.uber.org/yarpc/peer/abstractpeer/index.js"

import * as sync from "@goscript/sync/index.js"

import type * as time from "@goscript/time/index.js"

import type * as __goscript_inbound from "./inbound.gs.ts"

import * as __goscript_options from "./options.gs.ts"

import type * as __goscript_outbound from "./outbound.gs.ts"

import * as __goscript_peer from "./peer.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/go.uber.org/yarpc/api/peer/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/api/backoff/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/tls/index.js"
import "@goscript/go.uber.org/yarpc/internal/interceptor/index.js"
import "@goscript/go.uber.org/yarpc/peer/abstractpeer/index.js"
import "@goscript/sync/index.js"
import "./options.gs.ts"
import "./peer.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/transport/grpc", ["grpc.Dialer"])

export class Dialer {
	public get trans(): __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null {
		return this._fields.trans
	}

	public set trans(value: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null) {
		this._fields.trans = value
	}

	public get options(): __goscript_options.dialOptions | $.VarRef<__goscript_options.dialOptions> | null {
		return this._fields.options
	}

	public set options(value: __goscript_options.dialOptions | $.VarRef<__goscript_options.dialOptions> | null) {
		this._fields.options = value
	}

	public _fields: {
		trans: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null
		options: __goscript_options.dialOptions | $.VarRef<__goscript_options.dialOptions> | null
	}

	constructor(init?: Partial<{trans?: __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null, options?: __goscript_options.dialOptions | $.VarRef<__goscript_options.dialOptions> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			trans: init?.trans ?? (null! as __goscript_transport.Transport | $.VarRef<__goscript_transport.Transport> | null),
			options: init?.options ?? (null! as __goscript_options.dialOptions | $.VarRef<__goscript_options.dialOptions> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Dialer {
		return new Dialer(this, true)
	}

	public __goscriptAssign(source: Dialer): void {
		const target = this._fields
		const values = source._fields
		target.trans = values.trans
		target.options = values.options
	}

	public async ReleasePeer(id: peer.Identifier | null, ps: peer.Subscriber | null): globalThis.Promise<$.GoError> {
		const d: Dialer | $.VarRef<Dialer> | null = this;
		return __goscript_transport.Transport.prototype.ReleasePeer.call($.pointerValue<Dialer>(d).trans, id, ps)
	}

	public async RetainPeer(id: peer.Identifier | null, ps: peer.Subscriber | null): globalThis.Promise<[peer.Peer | null, $.GoError]> {
		const d: Dialer | $.VarRef<Dialer> | null = this;
		const d$: Dialer = d == null ? $.pointerTarget<Dialer>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Dialer>(d)
		return __goscript_transport.Transport.prototype.retainPeer.call((d$ as Dialer).trans, id, (d$ as Dialer).options, ps)
	}

	static __typeInfo = $.registerStructType(
		"grpc.Dialer",
		() => new Dialer(),
		() => [{ name: "ReleasePeer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "RetainPeer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "peer.Peer" }, { type: "error" }], pointerReceiver: true }],
		Dialer,
		() => [{ name: "trans", key: "trans", type: /* @__PURE__ */ $.pointerType("grpc.Transport") }, { name: "options", key: "options", type: /* @__PURE__ */ $.pointerType("grpc.dialOptions") }]
	)
}
