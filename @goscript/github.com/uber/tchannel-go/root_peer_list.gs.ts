// Generated file based on root_peer_list.go
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

import * as context2 from "@goscript/context/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

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

import * as __goscript_sockio_non_unix from "./sockio_non_unix.gs.ts"

import * as __goscript_stats from "./stats.gs.ts"

import * as __goscript_subchannel from "./subchannel.gs.ts"

import * as __goscript_tracing from "./tracing.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/sync/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
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
import "./sockio_non_unix.gs.ts"
import "./stats.gs.ts"
import "./subchannel.gs.ts"
import "./tracing.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.RootPeerList"])

export class RootPeerList {
	public get RWMutex(): sync.RWMutex {
		return this._fields.RWMutex
	}

	public set RWMutex(value: sync.RWMutex) {
		this._fields.RWMutex = value
	}

	public get channel(): __goscript_peer.Connectable | null {
		return this._fields.channel
	}

	public set channel(value: __goscript_peer.Connectable | null) {
		this._fields.channel = value
	}

	public get onPeerStatusChanged(): ((_p0: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null) => void) | null {
		return this._fields.onPeerStatusChanged
	}

	public set onPeerStatusChanged(value: ((_p0: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null) => void) | null) {
		this._fields.onPeerStatusChanged = value
	}

	public get peersByHostPort(): globalThis.Map<string, __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null> | null {
		return this._fields.peersByHostPort
	}

	public set peersByHostPort(value: globalThis.Map<string, __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null> | null) {
		this._fields.peersByHostPort = value
	}

	public _fields: {
		RWMutex: sync.RWMutex
		channel: __goscript_peer.Connectable | null
		onPeerStatusChanged: ((_p0: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null) => void) | null
		peersByHostPort: globalThis.Map<string, __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null> | null
	}

	constructor(init?: Partial<{RWMutex?: sync.RWMutex, channel?: __goscript_peer.Connectable | null, onPeerStatusChanged?: ((_p0: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null) => void) | null, peersByHostPort?: globalThis.Map<string, __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			RWMutex: init?.RWMutex ? $.markAsStructValue($.cloneStructValue(init.RWMutex)) : $.markAsStructValue(new sync.RWMutex()),
			channel: init?.channel ?? (null! as __goscript_peer.Connectable | null),
			onPeerStatusChanged: init?.onPeerStatusChanged ?? (null! as ((_p0: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null) => void) | null),
			peersByHostPort: init?.peersByHostPort ?? (null! as globalThis.Map<string, __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RootPeerList {
		return new RootPeerList(this, true)
	}

	public __goscriptAssign(source: RootPeerList): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.RWMutex, values.RWMutex)
		target.channel = $.assignFieldValue(target.channel, values.channel, "tchannel.Connectable")
		target.onPeerStatusChanged = values.onPeerStatusChanged
		target.peersByHostPort = values.peersByHostPort
	}

	public async Add(hostPort: string): globalThis.Promise<__goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null> {
		let l: RootPeerList | $.VarRef<RootPeerList> | null = this;
		using __defer = new $.DisposableStack()
		const l$: RootPeerList = l == null ? $.pointerTarget<RootPeerList>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<RootPeerList>(l)
		await (l$ as RootPeerList).RWMutex.RLock()

		{
			let __goscriptTuple0: any = $.mapGet<string, __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null, __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null>((l$ as RootPeerList).peersByHostPort, hostPort, null)
			let p: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				void (l$ as RootPeerList).RWMutex.RUnlock()
				return p
			}
		}

		void (l$ as RootPeerList).RWMutex.RUnlock()
		await (l$ as RootPeerList).RWMutex.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((l$ as RootPeerList).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		{
			let __goscriptTuple1: any = $.mapGet<string, __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null, __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null>((l$ as RootPeerList).peersByHostPort, hostPort, null)
			let p: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				return p
			}
		}

		let p: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null = null! as __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null
		// To avoid duplicate connections, only the root list should create new
		// peers. All other lists should keep refs to the root list's peers.
		p = await __goscript_peer.newPeer((l$ as RootPeerList).channel, hostPort, (l$ as RootPeerList).onPeerStatusChanged, $.functionValue(((__receiver) => (peer: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null) => __receiver.onClosedConnRemoved(peer))((l$ as RootPeerList)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Peer")], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*RootPeerList).onClosedConnRemoved-fm"))
		$.mapSet((l$ as RootPeerList).peersByHostPort, hostPort, p)
		return p
	}

	public async Copy(): globalThis.Promise<globalThis.Map<string, __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null> | null> {
		const l: RootPeerList | $.VarRef<RootPeerList> | null = this;
		using __defer = new $.DisposableStack()
		await $.pointerValue<RootPeerList>(l).RWMutex.RLock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<RootPeerList>(l).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })

		let listCopy: globalThis.Map<string, __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null> | null = $.makeMap<string, __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null>()
		for (let [k, v] of $.pointerValue<RootPeerList>(l).peersByHostPort?.entries() ?? []) {
			$.mapSet(listCopy, k, v)
		}
		return listCopy
	}

	public async Get(hostPort: string): globalThis.Promise<[__goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null, boolean]> {
		const l: RootPeerList | $.VarRef<RootPeerList> | null = this;
		await $.pointerValue<RootPeerList>(l).RWMutex.RLock()
		let __goscriptTuple2: any = $.mapGet<string, __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null, __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null>($.pointerValue<RootPeerList>(l).peersByHostPort, hostPort, null)
		let p: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		$.pointerValue<RootPeerList>(l).RWMutex.RUnlock()
		return [p, ok]
	}

	public async GetOrAdd(hostPort: string): globalThis.Promise<__goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null> {
		const l: RootPeerList | $.VarRef<RootPeerList> | null = this;
		let __goscriptTuple3: any = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as RootPeerList).Get(hostPort) : RootPeerList.prototype.Get.call(l, hostPort))
		let peer: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null = __goscriptTuple3[0]
		let ok = __goscriptTuple3[1]
		if (ok) {
			return peer
		}

		return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as RootPeerList).Add(hostPort) : RootPeerList.prototype.Add.call(l, hostPort))
	}

	public async IntrospectState(opts: __goscript_introspection.IntrospectionOptions | $.VarRef<__goscript_introspection.IntrospectionOptions> | null): globalThis.Promise<globalThis.Map<string, __goscript_introspection.PeerRuntimeState> | null> {
		const l: RootPeerList | $.VarRef<RootPeerList> | null = this;
		return __goscript_introspection.fromPeerList($.interfaceValue<__goscript_introspection.containsPeerList | null>(l, "*tchannel.RootPeerList", /* @__PURE__ */ $.pointerType("tchannel.RootPeerList")), opts)
	}

	public newChild(): __goscript_peer.PeerList | $.VarRef<__goscript_peer.PeerList> | null {
		const l: RootPeerList | $.VarRef<RootPeerList> | null = this;
		return __goscript_peer.newPeerList(l)
	}

	public async onClosedConnRemoved(peer: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null): globalThis.Promise<void> {
		const l: RootPeerList | $.VarRef<RootPeerList> | null = this;
		const l$: RootPeerList = l == null ? $.pointerTarget<RootPeerList>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<RootPeerList>(l)
		let hostPort = (peer !== null && (peer as any).__isVarRef !== true && (peer as any).__goValue === undefined ? ((peer as any) as __goscript_peer.Peer).HostPort() : __goscript_peer.Peer.prototype.HostPort.call(peer))
		let __goscriptTuple4: any = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as RootPeerList).Get(hostPort) : RootPeerList.prototype.Get.call(l, hostPort))
		let p: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null = __goscriptTuple4[0]
		let ok = __goscriptTuple4[1]
		if (!ok) {
			// It's possible that multiple connections were closed and removed at the same time,
			// so multiple goroutines might be removing the peer from the root peer list.
			return
		}

		if (await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as __goscript_peer.Peer).canRemove() : __goscript_peer.Peer.prototype.canRemove.call(p))) {
			await (l$ as RootPeerList).RWMutex.Lock()
			$.deleteMapEntry((l$ as RootPeerList).peersByHostPort, hostPort)
			void (l$ as RootPeerList).RWMutex.Unlock()
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_peer.Connectable, null>>((l$ as RootPeerList).channel).Logger(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "remoteHostPort", Value: hostPort}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Debug("Removed peer from root peer list."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
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
		"tchannel.RootPeerList",
		() => new RootPeerList(),
		() => [$.methodSignature("Add", [["hostPort", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("tchannel.Peer")], true), $.methodSignature("Copy", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("tchannel.Peer"))], true), $.methodSignature("Get", [["hostPort", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("tchannel.Peer"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetOrAdd", [["hostPort", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("tchannel.Peer")], true), $.methodSignature("IntrospectState", [["opts", /* @__PURE__ */ $.pointerType("tchannel.IntrospectionOptions")]], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tchannel.PeerRuntimeState")], true), $.methodSignature("newChild", [], [/* @__PURE__ */ $.pointerType("tchannel.PeerList")], true), $.methodSignature("onClosedConnRemoved", [["peer", /* @__PURE__ */ $.pointerType("tchannel.Peer")]], [], true), $.methodSignature("Lock", [], [], true), $.methodSignature("RLock", [], [], true), $.methodSignature("RLocker", [], ["sync.Locker"], true), $.methodSignature("RUnlock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		RootPeerList,
		() => [/* @__PURE__ */ $.structField("RWMutex", "sync.RWMutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("channel", "tchannel.Connectable", [1], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("onPeerStatusChanged", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Peer")], results: [] } as $.FunctionTypeInfo), [2], 40, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("peersByHostPort", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("tchannel.Peer")), [3], 48, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export function newRootPeerList(ch: __goscript_peer.Connectable | null, onPeerStatusChanged: ((_p0: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null) => void) | null): RootPeerList | $.VarRef<RootPeerList> | null {
	return new RootPeerList({channel: ch, onPeerStatusChanged: onPeerStatusChanged, peersByHostPort: $.makeMap<string, __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null>()})
}

var __goscriptAwait: any
