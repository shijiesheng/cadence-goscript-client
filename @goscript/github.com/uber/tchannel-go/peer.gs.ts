// Generated file based on peer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as time from "@goscript/time/index.js"

import * as context from "@goscript/golang.org/x/net/context/index.js"

import * as heap from "@goscript/container/heap/index.js"

import * as errors from "@goscript/errors/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as trand from "@goscript/github.com/uber/tchannel-go/trand/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as context2 from "@goscript/context/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as relay from "@goscript/github.com/uber/tchannel-go/relay/index.js"

import type * as arg2 from "@goscript/github.com/uber/tchannel-go/thrift/arg2/index.js"

import * as tos from "@goscript/github.com/uber/tchannel-go/tos/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

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

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_context_builder from "./context_builder.gs.ts"

import * as __goscript_context_header from "./context_header.gs.ts"

import * as __goscript_errors from "./errors.gs.ts"

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

import * as __goscript_root_peer_list from "./root_peer_list.gs.ts"

import * as __goscript_sockio_non_unix from "./sockio_non_unix.gs.ts"

import * as __goscript_stats from "./stats.gs.ts"

import * as __goscript_subchannel from "./subchannel.gs.ts"

import type * as __goscript_systemerrcode_string from "./systemerrcode_string.gs.ts"

import * as __goscript_tracing from "./tracing.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/container/heap/index.js"
import "@goscript/errors/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/github.com/uber/tchannel-go/trand/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber/tchannel-go/relay/index.js"
import "@goscript/github.com/uber/tchannel-go/tos/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/net/index.js"
import "@goscript/syscall/index.js"
import "./calloptions.gs.ts"
import "./channel.gs.ts"
import "./checksum.gs.ts"
import "./connection.gs.ts"
import "./connection_direction.gs.ts"
import "./connectionstate_string.gs.ts"
import "./context.gs.ts"
import "./context_builder.gs.ts"
import "./context_header.gs.ts"
import "./errors.gs.ts"
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
import "./root_peer_list.gs.ts"
import "./sockio_non_unix.gs.ts"
import "./stats.gs.ts"
import "./subchannel.gs.ts"
import "./tracing.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.Connectable", "tchannel.PeerList", "tchannel.peerScore", "tchannel.Peer"])

export type Connectable = {
	Connect(ctx: context.Context | null, hostPort: string): [__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, $.GoError] | globalThis.Promise<[__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, $.GoError]>
	Logger(): __goscript_logger.Logger | null
}

$.registerInterfaceType(
	"tchannel.Connectable",
	null,
	[$.methodSignature("Connect", [["ctx", "context.Context"], ["hostPort", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("tchannel.Connection"), "error"]), $.methodSignature("Logger", [], ["tchannel.Logger"])]
);

export class PeerList {
	public get RWMutex(): sync.RWMutex {
		return this._fields.RWMutex
	}

	public set RWMutex(value: sync.RWMutex) {
		this._fields.RWMutex = value
	}

	public get parent(): __goscript_root_peer_list.RootPeerList | $.VarRef<__goscript_root_peer_list.RootPeerList> | null {
		return this._fields.parent
	}

	public set parent(value: __goscript_root_peer_list.RootPeerList | $.VarRef<__goscript_root_peer_list.RootPeerList> | null) {
		this._fields.parent = value
	}

	public get peersByHostPort(): globalThis.Map<string, peerScore | $.VarRef<peerScore> | null> | null {
		return this._fields.peersByHostPort
	}

	public set peersByHostPort(value: globalThis.Map<string, peerScore | $.VarRef<peerScore> | null> | null) {
		this._fields.peersByHostPort = value
	}

	public get peerHeap(): __goscript_peer_heap.peerHeap | $.VarRef<__goscript_peer_heap.peerHeap> | null {
		return this._fields.peerHeap
	}

	public set peerHeap(value: __goscript_peer_heap.peerHeap | $.VarRef<__goscript_peer_heap.peerHeap> | null) {
		this._fields.peerHeap = value
	}

	public get scoreCalculator(): __goscript_peer_strategies.ScoreCalculator | null {
		return this._fields.scoreCalculator
	}

	public set scoreCalculator(value: __goscript_peer_strategies.ScoreCalculator | null) {
		this._fields.scoreCalculator = value
	}

	public get lastSelected(): bigint {
		return this._fields.lastSelected
	}

	public set lastSelected(value: bigint) {
		this._fields.lastSelected = value
	}

	public _fields: {
		RWMutex: sync.RWMutex
		parent: __goscript_root_peer_list.RootPeerList | $.VarRef<__goscript_root_peer_list.RootPeerList> | null
		peersByHostPort: globalThis.Map<string, peerScore | $.VarRef<peerScore> | null> | null
		peerHeap: __goscript_peer_heap.peerHeap | $.VarRef<__goscript_peer_heap.peerHeap> | null
		scoreCalculator: __goscript_peer_strategies.ScoreCalculator | null
		lastSelected: bigint
	}

	constructor(init?: Partial<{RWMutex?: sync.RWMutex, parent?: __goscript_root_peer_list.RootPeerList | $.VarRef<__goscript_root_peer_list.RootPeerList> | null, peersByHostPort?: globalThis.Map<string, peerScore | $.VarRef<peerScore> | null> | null, peerHeap?: __goscript_peer_heap.peerHeap | $.VarRef<__goscript_peer_heap.peerHeap> | null, scoreCalculator?: __goscript_peer_strategies.ScoreCalculator | null, lastSelected?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			RWMutex: init?.RWMutex ? $.markAsStructValue($.cloneStructValue(init.RWMutex)) : $.markAsStructValue(new sync.RWMutex()),
			parent: init?.parent ?? (null! as __goscript_root_peer_list.RootPeerList | $.VarRef<__goscript_root_peer_list.RootPeerList> | null),
			peersByHostPort: init?.peersByHostPort ?? (null! as globalThis.Map<string, peerScore | $.VarRef<peerScore> | null> | null),
			peerHeap: init?.peerHeap ?? (null! as __goscript_peer_heap.peerHeap | $.VarRef<__goscript_peer_heap.peerHeap> | null),
			scoreCalculator: init?.scoreCalculator ?? (null! as __goscript_peer_strategies.ScoreCalculator | null),
			lastSelected: init?.lastSelected ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PeerList {
		return new PeerList(this, true)
	}

	public __goscriptAssign(source: PeerList): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.RWMutex, values.RWMutex)
		target.parent = values.parent
		target.peersByHostPort = values.peersByHostPort
		target.peerHeap = values.peerHeap
		target.scoreCalculator = $.assignFieldValue(target.scoreCalculator, values.scoreCalculator, "tchannel.ScoreCalculator")
		target.lastSelected = values.lastSelected
	}

	public async Add(hostPort: string): globalThis.Promise<Peer | $.VarRef<Peer> | null> {
		let l: PeerList | $.VarRef<PeerList> | null = this;
		using __defer = new $.DisposableStack()
		const l$: PeerList = l == null ? $.pointerTarget<PeerList>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<PeerList>(l)
		{
			let __goscriptTuple0: any = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as PeerList).exists(hostPort) : PeerList.prototype.exists.call(l, hostPort))
			let ps: peerScore | $.VarRef<peerScore> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				return $.pointerValue<peerScore>(ps).Peer
			}
		}
		await (l$ as PeerList).RWMutex.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((l$ as PeerList).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		{
			let __goscriptTuple1: any = $.mapGet<string, peerScore | $.VarRef<peerScore> | null, peerScore | $.VarRef<peerScore> | null>((l$ as PeerList).peersByHostPort, hostPort, null)
			let p: peerScore | $.VarRef<peerScore> | null = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				return $.pointerValue<peerScore>(p).Peer
			}
		}

		let p: Peer | $.VarRef<Peer> | null = await __goscript_root_peer_list.RootPeerList.prototype.Add.call((l$ as PeerList).parent, hostPort)
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Peer).addSC() : Peer.prototype.addSC.call(p))
		let ps: peerScore | $.VarRef<peerScore> | null = newPeerScore(p, (__goscriptAwait = $.pointerValue<Exclude<__goscript_peer_strategies.ScoreCalculator, null>>((l$ as PeerList).scoreCalculator).GetScore(p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))

		$.mapSet((l$ as PeerList).peersByHostPort, hostPort, ps)
		await __goscript_peer_heap.peerHeap.prototype.addPeer.call((l$ as PeerList).peerHeap, ps)
		return p
	}

	public async Copy(): globalThis.Promise<globalThis.Map<string, Peer | $.VarRef<Peer> | null> | null> {
		const l: PeerList | $.VarRef<PeerList> | null = this;
		using __defer = new $.DisposableStack()
		await $.pointerValue<PeerList>(l).RWMutex.RLock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<PeerList>(l).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })

		let listCopy: globalThis.Map<string, Peer | $.VarRef<Peer> | null> | null = $.makeMap<string, Peer | $.VarRef<Peer> | null>()
		for (let [k, v] of $.pointerValue<PeerList>(l).peersByHostPort?.entries() ?? []) {
			$.mapSet(listCopy, k, $.pointerValue<peerScore>(v).Peer)
		}
		return listCopy
	}

	public async Get(prevSelected: globalThis.Map<string, {}> | null): globalThis.Promise<[Peer | $.VarRef<Peer> | null, $.GoError]> {
		const l: PeerList | $.VarRef<PeerList> | null = this;
		let __goscriptTuple2: any = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as PeerList).GetNew(prevSelected) : PeerList.prototype.GetNew.call(l, prevSelected))
		let peer: Peer | $.VarRef<Peer> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if ($.comparableEqual(err, ErrNoNewPeers)) {
			await $.pointerValue<PeerList>(l).RWMutex.Lock()
			peer = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as PeerList).choosePeer(null, false) : PeerList.prototype.choosePeer.call(l, null, false))
			$.pointerValue<PeerList>(l).RWMutex.Unlock()
		} else {
			if (err != null) {
				return [null, err]
			}
		}
		if (peer == null) {
			return [null, ErrNoPeers]
		}
		return [peer, null]
	}

	public async GetNew(prevSelected: globalThis.Map<string, {}> | null): globalThis.Promise<[Peer | $.VarRef<Peer> | null, $.GoError]> {
		const l: PeerList | $.VarRef<PeerList> | null = this;
		using __defer = new $.DisposableStack()
		await $.pointerValue<PeerList>(l).RWMutex.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<PeerList>(l).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
		if ($.pointerValue<__goscript_peer_heap.peerHeap>($.pointerValue<PeerList>(l).peerHeap).Len() == 0) {
			return [null, ErrNoPeers]
		}

		// Select a peer, avoiding previously selected peers. If all peers have been previously
		// selected, then it's OK to repick them.
		let peer: Peer | $.VarRef<Peer> | null = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as PeerList).choosePeer(prevSelected, true) : PeerList.prototype.choosePeer.call(l, prevSelected, true))
		if (peer == null) {
			peer = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as PeerList).choosePeer(prevSelected, false) : PeerList.prototype.choosePeer.call(l, prevSelected, false))
		}
		if (peer == null) {
			return [null, ErrNoNewPeers]
		}
		return [peer, null]
	}

	public async GetOrAdd(hostPort: string): globalThis.Promise<Peer | $.VarRef<Peer> | null> {
		const l: PeerList | $.VarRef<PeerList> | null = this;
		// TODO: remove calls to GetOrAdd, use Add instead
		return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as PeerList).Add(hostPort) : PeerList.prototype.Add.call(l, hostPort))
	}

	public async IntrospectList(opts: __goscript_introspection.IntrospectionOptions | $.VarRef<__goscript_introspection.IntrospectionOptions> | null): globalThis.Promise<$.Slice<__goscript_introspection.SubPeerScore>> {
		const l: PeerList | $.VarRef<PeerList> | null = this;
		let peers: $.Slice<__goscript_introspection.SubPeerScore> = null! as $.Slice<__goscript_introspection.SubPeerScore>
		await $.pointerValue<PeerList>(l).RWMutex.RLock()
		for (let __goscriptRangeTarget0 = $.pointerValue<__goscript_peer_heap.peerHeap>($.pointerValue<PeerList>(l).peerHeap).peerScores, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let ps = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as peerScore | $.VarRef<peerScore> | null)
			peers = $.appendOne(peers, new __goscript_introspection.SubPeerScore({HostPort: $.pointerValue<Peer>($.pointerValue<peerScore>(ps).Peer).hostPort, Score: $.pointerValue<peerScore>(ps).score}, true))
		}
		$.pointerValue<PeerList>(l).RWMutex.RUnlock()

		return peers
	}

	public async Len(): globalThis.Promise<number> {
		const l: PeerList | $.VarRef<PeerList> | null = this;
		using __defer = new $.DisposableStack()
		await $.pointerValue<PeerList>(l).RWMutex.RLock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<PeerList>(l).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })
		return $.pointerValue<__goscript_peer_heap.peerHeap>($.pointerValue<PeerList>(l).peerHeap).Len()
	}

	public async Remove(hostPort: string): globalThis.Promise<$.GoError> {
		const l: PeerList | $.VarRef<PeerList> | null = this;
		using __defer = new $.DisposableStack()
		const l$: PeerList = l == null ? $.pointerTarget<PeerList>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<PeerList>(l)
		await (l$ as PeerList).RWMutex.Lock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())((l$ as PeerList).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })

		let __goscriptTuple3: any = $.mapGet<string, peerScore | $.VarRef<peerScore> | null, peerScore | $.VarRef<peerScore> | null>((l$ as PeerList).peersByHostPort, hostPort, null)
		let p: peerScore | $.VarRef<peerScore> | null = __goscriptTuple3[0]
		let ok = __goscriptTuple3[1]
		if (!ok) {
			return ErrPeerNotFound
		}

		await $.pointerValue<Peer>($.pointerValue<peerScore>(p).Peer).delSC()
		$.deleteMapEntry((l$ as PeerList).peersByHostPort, hostPort)
		await __goscript_peer_heap.peerHeap.prototype.removePeer.call((l$ as PeerList).peerHeap, p)

		return null
	}

	public async SetStrategy(sc: __goscript_peer_strategies.ScoreCalculator | null): globalThis.Promise<void> {
		let l: PeerList | $.VarRef<PeerList> | null = this;
		using __defer = new $.DisposableStack()
		const l$: PeerList = l == null ? $.pointerTarget<PeerList>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<PeerList>(l)
		await (l$ as PeerList).RWMutex.Lock()
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Unlock())((l$ as PeerList).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee5() });

		;(l$ as PeerList).scoreCalculator = sc
		for (const [__rangeKey, ps] of (l$ as PeerList).peersByHostPort?.entries() ?? []) {
			let newScore = (__goscriptAwait = $.pointerValue<Exclude<__goscript_peer_strategies.ScoreCalculator, null>>((l$ as PeerList).scoreCalculator).GetScore($.pointerValue<peerScore>(ps).Peer), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as PeerList).updatePeer(ps, newScore) : PeerList.prototype.updatePeer.call(l, ps, newScore))
		}
	}

	public async choosePeer(prevSelected: globalThis.Map<string, {}> | null, avoidHost: boolean): globalThis.Promise<Peer | $.VarRef<Peer> | null> {
		const l: PeerList | $.VarRef<PeerList> | null = this;
		const l$: PeerList = l == null ? $.pointerTarget<PeerList>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<PeerList>(l)
		let psPopList: $.Slice<peerScore | $.VarRef<peerScore> | null> = null! as $.Slice<peerScore | $.VarRef<peerScore> | null>
		let ps: peerScore | $.VarRef<peerScore> | null = null! as peerScore | $.VarRef<peerScore> | null

		let canChoosePeer: ((hostPort: string) => boolean | globalThis.Promise<boolean>) | null = $.functionValue((hostPort: string): boolean => {
			{
				let [, ok] = $.mapGet<string, {}, {}>(prevSelected, hostPort, {})
				if (ok) {
					return false
				}
			}
			if (avoidHost) {
				{
					let [, ok] = $.mapGet<string, {}, {}>(prevSelected, __goscript_retry.getHost(hostPort), {})
					if (ok) {
						return false
					}
				}
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))

		let size = $.pointerValue<__goscript_peer_heap.peerHeap>((l$ as PeerList).peerHeap).Len()
		for (let i = 0; i < size; i++) {
			let popped: peerScore | $.VarRef<peerScore> | null = await __goscript_peer_heap.peerHeap.prototype.popPeer.call((l$ as PeerList).peerHeap)

			if ((__goscriptAwait = canChoosePeer!($.pointerValue<Peer>($.pointerValue<peerScore>(popped).Peer).HostPort()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				ps = popped
				break
			}
			psPopList = $.appendOne(psPopList, popped, $.appendZeros.nil)
		}

		for (let __goscriptRangeTarget1 = psPopList, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let p = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as peerScore | $.VarRef<peerScore> | null)
			await heap.Push($.interfaceValue<heap.Interface | null>((l$ as PeerList).peerHeap, "*tchannel.peerHeap", /* @__PURE__ */ $.pointerType("tchannel.peerHeap")), $.interfaceValue(p, "*tchannel.peerScore", /* @__PURE__ */ $.pointerType("tchannel.peerScore")))
		}

		if (ps == null) {
			return null
		}

		await __goscript_peer_heap.peerHeap.prototype.pushPeer.call((l$ as PeerList).peerHeap, ps)
		$.pointerValue<Peer>($.pointerValue<peerScore>(ps).Peer).chosenCount.Inc()
		return $.pointerValue<peerScore>(ps).Peer
	}

	public async exists(hostPort: string): globalThis.Promise<[peerScore | $.VarRef<peerScore> | null, boolean]> {
		const l: PeerList | $.VarRef<PeerList> | null = this;
		await $.pointerValue<PeerList>(l).RWMutex.RLock()
		let __goscriptTuple4: any = $.mapGet<string, peerScore | $.VarRef<peerScore> | null, peerScore | $.VarRef<peerScore> | null>($.pointerValue<PeerList>(l).peersByHostPort, hostPort, null)
		let ps: peerScore | $.VarRef<peerScore> | null = __goscriptTuple4[0]
		let ok = __goscriptTuple4[1]
		$.pointerValue<PeerList>(l).RWMutex.RUnlock()

		return [ps, ok]
	}

	public getPeerScore(hostPort: string): [peerScore | $.VarRef<peerScore> | null, bigint, boolean] {
		const l: PeerList | $.VarRef<PeerList> | null = this;
		let __goscriptTuple5: any = $.mapGet<string, peerScore | $.VarRef<peerScore> | null, peerScore | $.VarRef<peerScore> | null>($.pointerValue<PeerList>(l).peersByHostPort, hostPort, null)
		let ps: peerScore | $.VarRef<peerScore> | null = __goscriptTuple5[0]
		let ok = __goscriptTuple5[1]
		if (!ok) {
			return [null, 0n, false]
		}
		return [ps, $.pointerValue<peerScore>(ps).score, ok]
	}

	public newSibling(): PeerList | $.VarRef<PeerList> | null {
		const l: PeerList | $.VarRef<PeerList> | null = this;
		let sib: PeerList | $.VarRef<PeerList> | null = newPeerList($.pointerValue<PeerList>(l).parent)
		return sib
	}

	public async onPeerChange(p: Peer | $.VarRef<Peer> | null): globalThis.Promise<void> {
		const l: PeerList | $.VarRef<PeerList> | null = this;
		await $.pointerValue<PeerList>(l).RWMutex.RLock()
		let __goscriptTuple6: any = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as PeerList).getPeerScore($.pointerValue<Peer>(p).hostPort) : PeerList.prototype.getPeerScore.call(l, $.pointerValue<Peer>(p).hostPort))
		let ps: peerScore | $.VarRef<peerScore> | null = __goscriptTuple6[0]
		let psScore = __goscriptTuple6[1]
		let ok = __goscriptTuple6[2]
		let sc = $.pointerValue<PeerList>(l).scoreCalculator
		$.pointerValue<PeerList>(l).RWMutex.RUnlock()
		if (!ok) {
			return
		}

		let newScore = (__goscriptAwait = (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? (sc as Exclude<__goscript_peer_strategies.ScoreCalculator, null>) : $.pointerValue<Exclude<__goscript_peer_strategies.ScoreCalculator, null>>(sc)).GetScore($.pointerValue<peerScore>(ps).Peer), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (newScore == psScore) {
			return
		}

		await $.pointerValue<PeerList>(l).RWMutex.Lock()
		await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as PeerList).updatePeer(ps, newScore) : PeerList.prototype.updatePeer.call(l, ps, newScore))
		$.pointerValue<PeerList>(l).RWMutex.Unlock()
	}

	public async updatePeer(ps: peerScore | $.VarRef<peerScore> | null, newScore: bigint): globalThis.Promise<void> {
		const l: PeerList | $.VarRef<PeerList> | null = this;
		const ps$: peerScore = ps == null ? $.pointerTarget<peerScore>(ps) : (ps as any).__isVarRef === true ? (ps as any).value : (ps as any).__goValue === undefined ? (ps as any) : $.pointerTarget<peerScore>(ps)
		if ((ps$ as peerScore).score == newScore) {
			return
		}

		;(ps$ as peerScore).score = newScore
		await __goscript_peer_heap.peerHeap.prototype.updatePeer.call($.pointerValue<PeerList>(l).peerHeap, ps)
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
		"tchannel.PeerList",
		() => new PeerList(),
		() => [$.methodSignature("Add", [["hostPort", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("tchannel.Peer")], true), $.methodSignature("Copy", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("tchannel.Peer"))], true), $.methodSignature("Get", [["prevSelected", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Struct, methods: [], fields: [] })]], [/* @__PURE__ */ $.pointerType("tchannel.Peer"), "error"], true), $.methodSignature("GetNew", [["prevSelected", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Struct, methods: [], fields: [] })]], [/* @__PURE__ */ $.pointerType("tchannel.Peer"), "error"], true), $.methodSignature("GetOrAdd", [["hostPort", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("tchannel.Peer")], true), $.methodSignature("IntrospectList", [["opts", /* @__PURE__ */ $.pointerType("tchannel.IntrospectionOptions")]], [/* @__PURE__ */ $.sliceType("tchannel.SubPeerScore")], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Remove", [["hostPort", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("SetStrategy", [["sc", "tchannel.ScoreCalculator"]], [], true), $.methodSignature("choosePeer", [["prevSelected", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Struct, methods: [], fields: [] })], ["avoidHost", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.pointerType("tchannel.Peer")], true), $.methodSignature("exists", [["hostPort", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("tchannel.peerScore"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getPeerScore", [["hostPort", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("tchannel.peerScore"), /* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("newSibling", [], [/* @__PURE__ */ $.pointerType("tchannel.PeerList")], true), $.methodSignature("onPeerChange", [["p", /* @__PURE__ */ $.pointerType("tchannel.Peer")]], [], true), $.methodSignature("updatePeer", [["ps", /* @__PURE__ */ $.pointerType("tchannel.peerScore")], ["newScore", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("Lock", [], [], true), $.methodSignature("RLock", [], [], true), $.methodSignature("RLocker", [], ["sync.Locker"], true), $.methodSignature("RUnlock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		PeerList,
		() => [/* @__PURE__ */ $.structField("RWMutex", "sync.RWMutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("parent", /* @__PURE__ */ $.pointerType("tchannel.RootPeerList"), [1], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("peersByHostPort", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("tchannel.peerScore")), [2], 32, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("peerHeap", /* @__PURE__ */ $.pointerType("tchannel.peerHeap"), [3], 40, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("scoreCalculator", "tchannel.ScoreCalculator", [4], 48, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("lastSelected", /* @__PURE__ */ $.basicType("uint64"), [5], 64, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class peerScore {
	public get Peer(): Peer | $.VarRef<Peer> | null {
		return this._fields.Peer
	}

	public set Peer(value: Peer | $.VarRef<Peer> | null) {
		this._fields.Peer = value
	}

	// score according to the current peer list's ScoreCalculator.
	public get score(): bigint {
		return this._fields.score
	}

	public set score(value: bigint) {
		this._fields.score = value
	}

	// index of the peerScore in the peerHeap. Used to interact with container/heap.
	public get index(): number {
		return this._fields.index
	}

	public set index(value: number) {
		this._fields.index = value
	}

	// order is the tiebreaker for when score is equal. It is set when a peer
	// is pushed to the heap based on peerHeap.order with jitter.
	public get order(): bigint {
		return this._fields.order
	}

	public set order(value: bigint) {
		this._fields.order = value
	}

	public _fields: {
		Peer: Peer | $.VarRef<Peer> | null
		score: bigint
		index: number
		order: bigint
	}

	constructor(init?: Partial<{Peer?: Peer | $.VarRef<Peer> | null, score?: bigint, index?: number, order?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Peer: init?.Peer ?? (null! as Peer | $.VarRef<Peer> | null),
			score: init?.score ?? (0n as bigint),
			index: init?.index ?? (0 as number),
			order: init?.order ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): peerScore {
		return new peerScore(this, true)
	}

	public __goscriptAssign(source: peerScore): void {
		const target = this._fields
		const values = source._fields
		target.Peer = values.Peer
		target.score = values.score
		target.index = values.index
		target.order = values.order
	}

	public async BeginCall(ctx: any, serviceName: any, methodName: any, callOptions: any): globalThis.Promise<any> {
		return await $.pointerValue<Peer>(this.Peer).BeginCall(ctx, serviceName, methodName, callOptions)
	}

	public async Connect(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Peer>(this.Peer).Connect(ctx)
	}

	public async GetConnection(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Peer>(this.Peer).GetConnection(ctx)
	}

	public HostPort(): any {
		return $.pointerValue<Peer>(this.Peer).HostPort()
	}

	public async IntrospectState(opts: any): globalThis.Promise<any> {
		return await $.pointerValue<Peer>(this.Peer).IntrospectState(opts)
	}

	public Lock(): any {
		return $.pointerValue<Peer>(this.Peer).RWMutex.Lock()
	}

	public async NumConnections(): globalThis.Promise<any> {
		return await $.pointerValue<Peer>(this.Peer).NumConnections()
	}

	public async NumPendingOutbound(): globalThis.Promise<any> {
		return await $.pointerValue<Peer>(this.Peer).NumPendingOutbound()
	}

	public RLock(): any {
		return $.pointerValue<Peer>(this.Peer).RWMutex.RLock()
	}

	public RLocker(): any {
		return $.pointerValue<Peer>(this.Peer).RWMutex.RLocker()
	}

	public RUnlock(): any {
		return $.pointerValue<Peer>(this.Peer).RWMutex.RUnlock()
	}

	public TryLock(): any {
		return $.pointerValue<Peer>(this.Peer).RWMutex.TryLock()
	}

	public TryRLock(): any {
		return $.pointerValue<Peer>(this.Peer).RWMutex.TryRLock()
	}

	public Unlock(): any {
		return $.pointerValue<Peer>(this.Peer).RWMutex.Unlock()
	}

	public async addConnection(c: any, direction: any): globalThis.Promise<any> {
		return await $.pointerValue<Peer>(this.Peer).addConnection(c, direction)
	}

	public async addSC(): globalThis.Promise<any> {
		return await $.pointerValue<Peer>(this.Peer).addSC()
	}

	public async callOnUpdateComplete(): globalThis.Promise<any> {
		return await $.pointerValue<Peer>(this.Peer).callOnUpdateComplete()
	}

	public async canRemove(): globalThis.Promise<any> {
		return await $.pointerValue<Peer>(this.Peer).canRemove()
	}

	public async connectionCloseStateChange(changed: any): globalThis.Promise<any> {
		return await $.pointerValue<Peer>(this.Peer).connectionCloseStateChange(changed)
	}

	public connectionsFor(direction: any): any {
		return $.pointerValue<Peer>(this.Peer).connectionsFor(direction)
	}

	public async delSC(): globalThis.Promise<any> {
		return await $.pointerValue<Peer>(this.Peer).delSC()
	}

	public async getActiveConn(): globalThis.Promise<any> {
		return await $.pointerValue<Peer>(this.Peer).getActiveConn()
	}

	public async getActiveConnLocked(): globalThis.Promise<any> {
		return await $.pointerValue<Peer>(this.Peer).getActiveConnLocked()
	}

	public getConn(i: any): any {
		return $.pointerValue<Peer>(this.Peer).getConn(i)
	}

	public async getConnectionRelay(callTimeout: any, relayMaxConnTimeout: any): globalThis.Promise<any> {
		return await $.pointerValue<Peer>(this.Peer).getConnectionRelay(callTimeout, relayMaxConnTimeout)
	}

	public removeConnection(connsPtr: any, changed: any): any {
		return $.pointerValue<Peer>(this.Peer).removeConnection(connsPtr, changed)
	}

	public async runWithConnections(f: any): globalThis.Promise<any> {
		return await $.pointerValue<Peer>(this.Peer).runWithConnections(f)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.peerScore",
		() => new peerScore(),
		() => [$.methodSignature("BeginCall", [["ctx", "context.Context"], ["serviceName", /* @__PURE__ */ $.basicType("string")], ["methodName", /* @__PURE__ */ $.basicType("string")], ["callOptions", /* @__PURE__ */ $.pointerType("tchannel.CallOptions")]], [/* @__PURE__ */ $.pointerType("tchannel.OutboundCall"), "error"]), $.methodSignature("Connect", [["ctx", "context.Context"]], [/* @__PURE__ */ $.pointerType("tchannel.Connection"), "error"]), $.methodSignature("GetConnection", [["ctx", "context.Context"]], [/* @__PURE__ */ $.pointerType("tchannel.Connection"), "error"]), $.methodSignature("HostPort", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IntrospectState", [["opts", /* @__PURE__ */ $.pointerType("tchannel.IntrospectionOptions")]], ["tchannel.PeerRuntimeState"]), $.methodSignature("Lock"), $.methodSignature("NumConnections", [], [["inbound", /* @__PURE__ */ $.basicType("int")], ["outbound", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("NumPendingOutbound", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("RLock"), $.methodSignature("RLocker", [], ["sync.Locker"]), $.methodSignature("RUnlock"), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Unlock"), $.methodSignature("addConnection", [["c", /* @__PURE__ */ $.pointerType("tchannel.Connection")], ["direction", /* @__PURE__ */ $.basicType("int", "tchannel.connectionDirection")]], ["error"]), $.methodSignature("addSC"), $.methodSignature("callOnUpdateComplete"), $.methodSignature("canRemove", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("connectionCloseStateChange", [["changed", /* @__PURE__ */ $.pointerType("tchannel.Connection")]]), $.methodSignature("connectionsFor", [["direction", /* @__PURE__ */ $.basicType("int", "tchannel.connectionDirection")]], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("tchannel.Connection")))]), $.methodSignature("delSC"), $.methodSignature("getActiveConn", [], [/* @__PURE__ */ $.pointerType("tchannel.Connection"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getActiveConnLocked", [], [/* @__PURE__ */ $.pointerType("tchannel.Connection"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getConn", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("tchannel.Connection")]), $.methodSignature("getConnectionRelay", [["callTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["relayMaxConnTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("tchannel.Connection"), "error"]), $.methodSignature("removeConnection", [["connsPtr", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("tchannel.Connection")))], ["changed", /* @__PURE__ */ $.pointerType("tchannel.Connection")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("runWithConnections", [["f", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Connection")], results: [] } as $.FunctionTypeInfo)]])],
		peerScore,
		() => [/* @__PURE__ */ $.structField("Peer", /* @__PURE__ */ $.pointerType("tchannel.Peer"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("score", /* @__PURE__ */ $.basicType("uint64"), [1], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("index", /* @__PURE__ */ $.basicType("int"), [2], 16, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("order", /* @__PURE__ */ $.basicType("uint64"), [3], 24, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class Peer {
	public get RWMutex(): sync.RWMutex {
		return this._fields.RWMutex
	}

	public set RWMutex(value: sync.RWMutex) {
		this._fields.RWMutex = value
	}

	public get channel(): Connectable | null {
		return this._fields.channel
	}

	public set channel(value: Connectable | null) {
		this._fields.channel = value
	}

	public get hostPort(): string {
		return this._fields.hostPort
	}

	public set hostPort(value: string) {
		this._fields.hostPort = value
	}

	public get onStatusChanged(): ((_p0: Peer | $.VarRef<Peer> | null) => void) | null {
		return this._fields.onStatusChanged
	}

	public set onStatusChanged(value: ((_p0: Peer | $.VarRef<Peer> | null) => void) | null) {
		this._fields.onStatusChanged = value
	}

	public get onClosedConnRemoved(): ((_p0: Peer | $.VarRef<Peer> | null) => void) | null {
		return this._fields.onClosedConnRemoved
	}

	public set onClosedConnRemoved(value: ((_p0: Peer | $.VarRef<Peer> | null) => void) | null) {
		this._fields.onClosedConnRemoved = value
	}

	// scCount is the number of subchannels that this peer is added to.
	public get scCount(): number {
		return this._fields.scCount
	}

	public set scCount(value: number) {
		this._fields.scCount = value
	}

	// connections are mutable, and are protected by the mutex.
	public get newConnLock(): sync.Mutex {
		return this._fields.newConnLock
	}

	public set newConnLock(value: sync.Mutex) {
		this._fields.newConnLock = value
	}

	public get inboundConnections(): $.Slice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> {
		return this._fields.inboundConnections
	}

	public set inboundConnections(value: $.Slice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null>) {
		this._fields.inboundConnections = value
	}

	public get outboundConnections(): $.Slice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> {
		return this._fields.outboundConnections
	}

	public set outboundConnections(value: $.Slice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null>) {
		this._fields.outboundConnections = value
	}

	public get chosenCount(): atomic.Uint64 {
		return this._fields.chosenCount
	}

	public set chosenCount(value: atomic.Uint64) {
		this._fields.chosenCount = value
	}

	// onUpdate is a test-only hook.
	public get onUpdate(): ((_p0: Peer | $.VarRef<Peer> | null) => void) | null {
		return this._fields.onUpdate
	}

	public set onUpdate(value: ((_p0: Peer | $.VarRef<Peer> | null) => void) | null) {
		this._fields.onUpdate = value
	}

	public _fields: {
		RWMutex: sync.RWMutex
		channel: Connectable | null
		hostPort: string
		onStatusChanged: ((_p0: Peer | $.VarRef<Peer> | null) => void) | null
		onClosedConnRemoved: ((_p0: Peer | $.VarRef<Peer> | null) => void) | null
		scCount: number
		newConnLock: sync.Mutex
		inboundConnections: $.Slice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null>
		outboundConnections: $.Slice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null>
		chosenCount: atomic.Uint64
		onUpdate: ((_p0: Peer | $.VarRef<Peer> | null) => void) | null
	}

	constructor(init?: Partial<{RWMutex?: sync.RWMutex, channel?: Connectable | null, hostPort?: string, onStatusChanged?: ((_p0: Peer | $.VarRef<Peer> | null) => void) | null, onClosedConnRemoved?: ((_p0: Peer | $.VarRef<Peer> | null) => void) | null, scCount?: number, newConnLock?: sync.Mutex, inboundConnections?: $.Slice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null>, outboundConnections?: $.Slice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null>, chosenCount?: atomic.Uint64, onUpdate?: ((_p0: Peer | $.VarRef<Peer> | null) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			RWMutex: init?.RWMutex ? $.markAsStructValue($.cloneStructValue(init.RWMutex)) : $.markAsStructValue(new sync.RWMutex()),
			channel: init?.channel ?? (null! as Connectable | null),
			hostPort: init?.hostPort ?? ("" as string),
			onStatusChanged: init?.onStatusChanged ?? (null! as ((_p0: Peer | $.VarRef<Peer> | null) => void) | null),
			onClosedConnRemoved: init?.onClosedConnRemoved ?? (null! as ((_p0: Peer | $.VarRef<Peer> | null) => void) | null),
			scCount: init?.scCount ?? (0 as number),
			newConnLock: init?.newConnLock ? $.markAsStructValue($.cloneStructValue(init.newConnLock)) : $.markAsStructValue(new sync.Mutex()),
			inboundConnections: init?.inboundConnections ?? (null! as $.Slice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null>),
			outboundConnections: init?.outboundConnections ?? (null! as $.Slice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null>),
			chosenCount: init?.chosenCount ? init.chosenCount.clone() : new atomic.Uint64(undefined, true),
			onUpdate: init?.onUpdate ?? (null! as ((_p0: Peer | $.VarRef<Peer> | null) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Peer {
		return new Peer(this, true)
	}

	public __goscriptAssign(source: Peer): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.RWMutex, values.RWMutex)
		target.channel = $.assignFieldValue(target.channel, values.channel, "tchannel.Connectable")
		target.hostPort = values.hostPort
		target.onStatusChanged = values.onStatusChanged
		target.onClosedConnRemoved = values.onClosedConnRemoved
		target.scCount = values.scCount
		$.assignStruct(target.newConnLock, values.newConnLock)
		target.inboundConnections = values.inboundConnections
		target.outboundConnections = values.outboundConnections
		$.assignStruct(target.chosenCount, values.chosenCount)
		target.onUpdate = values.onUpdate
	}

	public async BeginCall(ctx: context.Context | null, serviceName: string, methodName: string, callOptions: __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null): globalThis.Promise<[__goscript_outbound.OutboundCall | $.VarRef<__goscript_outbound.OutboundCall> | null, $.GoError]> {
		const p: Peer | $.VarRef<Peer> | null = this;
		if (callOptions == null) {
			callOptions = __goscript_calloptions.defaultCallOptions
		}
		__goscript_retry.RequestState.prototype.AddSelectedPeer.call($.pointerValue<__goscript_calloptions.CallOptions>(callOptions).RequestState, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Peer).HostPort() : Peer.prototype.HostPort.call(p)))

		{
			let err = await __goscript_outbound.validateCall(ctx, serviceName, methodName, callOptions)
			if (err != null) {
				return [null, err]
			}
		}

		let __goscriptTuple7: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Peer).GetConnection(ctx) : Peer.prototype.GetConnection.call(p, ctx))
		let conn: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null = __goscriptTuple7[0]
		let err = __goscriptTuple7[1]
		if (err != null) {
			return [null, err]
		}

		let __goscriptTuple8: any = await (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as __goscript_connection.Connection).beginCall(ctx, serviceName, methodName, callOptions) : __goscript_connection.Connection.prototype.beginCall.call(conn, ctx, serviceName, methodName, callOptions))
		let call: __goscript_outbound.OutboundCall | $.VarRef<__goscript_outbound.OutboundCall> | null = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return [null, err]
		}

		return [call, err]
	}

	public async Connect(ctx: context.Context | null): globalThis.Promise<[__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, $.GoError]> {
		const p: Peer | $.VarRef<Peer> | null = this;
		const p$: Peer = p == null ? $.pointerTarget<Peer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Peer>(p)
		return $.pointerValue<Exclude<Connectable, null>>((p$ as Peer).channel).Connect(ctx, (p$ as Peer).hostPort)
	}

	public async GetConnection(ctx: context.Context | null): globalThis.Promise<[__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, $.GoError]> {
		const p: Peer | $.VarRef<Peer> | null = this;
		using __defer = new $.DisposableStack()
		const p$: Peer = p == null ? $.pointerTarget<Peer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Peer>(p)
		{
			let __goscriptTuple9: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Peer).getActiveConn() : Peer.prototype.getActiveConn.call(p))
			let activeConn: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null = __goscriptTuple9[0]
			let ok = __goscriptTuple9[1]
			if (ok) {
				return [activeConn, null]
			}
		}

		// Lock here to restrict new connection creation attempts to one goroutine
		await (p$ as Peer).newConnLock.Lock()
		const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as Peer).newConnLock), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee6() })

		// Check active connections again in case someone else got ahead of us.
		{
			let __goscriptTuple10: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Peer).getActiveConn() : Peer.prototype.getActiveConn.call(p))
			let activeConn: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null = __goscriptTuple10[0]
			let ok = __goscriptTuple10[1]
			if (ok) {
				return [activeConn, null]
			}
		}

		// No active connections, make a new outgoing connection.
		return await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Peer).Connect(ctx) : Peer.prototype.Connect.call(p, ctx))
	}

	public HostPort(): string {
		const p: Peer | $.VarRef<Peer> | null = this;
		return $.pointerValue<Peer>(p).hostPort
	}

	public async IntrospectState(opts: __goscript_introspection.IntrospectionOptions | $.VarRef<__goscript_introspection.IntrospectionOptions> | null): globalThis.Promise<__goscript_introspection.PeerRuntimeState> {
		const p: Peer | $.VarRef<Peer> | null = this;
		using __defer = new $.DisposableStack()
		const p$: Peer = p == null ? $.pointerTarget<Peer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Peer>(p)
		await (p$ as Peer).RWMutex.RLock()
		const __goscriptDeferCallee7 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((p$ as Peer).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee7() })

		return (await (async () => { const __goscriptLiteralField2 = await __goscript_introspection.getConnectionRuntimeState((p$ as Peer).inboundConnections, opts); const __goscriptLiteralField3 = await __goscript_introspection.getConnectionRuntimeState((p$ as Peer).outboundConnections, opts); const __goscriptLiteralField4 = (p$ as Peer).chosenCount.Load(); return new __goscript_introspection.PeerRuntimeState({HostPort: (p$ as Peer).hostPort, InboundConnections: __goscriptLiteralField2, OutboundConnections: __goscriptLiteralField3, ChosenCount: __goscriptLiteralField4, SCCount: (p$ as Peer).scCount}, true) })())
	}

	public async NumConnections(): globalThis.Promise<[number, number]> {
		const p: Peer | $.VarRef<Peer> | null = this;
		let inbound: number = 0
		let outbound: number = 0
		const p$: Peer = p == null ? $.pointerTarget<Peer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Peer>(p)
		await (p$ as Peer).RWMutex.RLock()
		inbound = $.sliceLen((p$ as Peer).inboundConnections)
		outbound = $.sliceLen((p$ as Peer).outboundConnections)
		void (p$ as Peer).RWMutex.RUnlock()
		return [inbound, outbound]
	}

	public async NumPendingOutbound(): globalThis.Promise<number> {
		const p: Peer | $.VarRef<Peer> | null = this;
		const p$: Peer = p == null ? $.pointerTarget<Peer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Peer>(p)
		let count = 0
		await (p$ as Peer).RWMutex.RLock()
		for (let __goscriptRangeTarget2 = (p$ as Peer).outboundConnections, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let c = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null)
			count = count + (await __goscript_mex.messageExchangeSet.prototype.count.call($.pointerValue<__goscript_connection.Connection>(c).outbound))
		}

		for (let __goscriptRangeTarget3 = (p$ as Peer).inboundConnections, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let c = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null)
			count = count + (await __goscript_mex.messageExchangeSet.prototype.count.call($.pointerValue<__goscript_connection.Connection>(c).outbound))
		}
		void (p$ as Peer).RWMutex.RUnlock()
		return count
	}

	public async addConnection(c: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, direction: __goscript_connection_direction.connectionDirection): globalThis.Promise<$.GoError> {
		const p: Peer | $.VarRef<Peer> | null = this;
		let conns = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Peer).connectionsFor(direction) : Peer.prototype.connectionsFor.call(p, direction))

		if (await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_connection.Connection).readState() : __goscript_connection.Connection.prototype.readState.call(c)) != 1) {
			return (await __goscript_init_ErrInvalidConnectionState(), __goscript_get_ErrInvalidConnectionState())
		}

		await $.pointerValue<Peer>(p).RWMutex.Lock()
		conns!.value = $.appendOne($.pointerValue<$.Slice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null>>(conns), c, $.appendZeros.nil)
		$.pointerValue<Peer>(p).RWMutex.Unlock()

		// Inform third parties that a peer gained a connection.
		void (__goscriptAwait = $.pointerValue<Peer>(p).onStatusChanged!(p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		return null
	}

	public async addSC(): globalThis.Promise<void> {
		let p: Peer | $.VarRef<Peer> | null = this;
		const p$: Peer = p == null ? $.pointerTarget<Peer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Peer>(p)
		await (p$ as Peer).RWMutex.Lock();
		;(p$ as Peer).scCount = (((p$ as Peer).scCount + 1) >>> 0)
		void (p$ as Peer).RWMutex.Unlock()
	}

	public async callOnUpdateComplete(): globalThis.Promise<void> {
		const p: Peer | $.VarRef<Peer> | null = this;
		await $.pointerValue<Peer>(p).RWMutex.RLock()
		let f: ((_p0: Peer | $.VarRef<Peer> | null) => void) | null = $.pointerValue<Peer>(p).onUpdate
		$.pointerValue<Peer>(p).RWMutex.RUnlock()

		if (f != null) {
			void (__goscriptAwait = f!(p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async canRemove(): globalThis.Promise<boolean> {
		const p: Peer | $.VarRef<Peer> | null = this;
		const p$: Peer = p == null ? $.pointerTarget<Peer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Peer>(p)
		await (p$ as Peer).RWMutex.RLock()
		let count = ($.sliceLen((p$ as Peer).inboundConnections) + $.sliceLen((p$ as Peer).outboundConnections)) + $.int((p$ as Peer).scCount)
		void (p$ as Peer).RWMutex.RUnlock()
		return count == 0
	}

	public async connectionCloseStateChange(changed: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null): globalThis.Promise<void> {
		const p: Peer | $.VarRef<Peer> | null = this;
		const p$: Peer = p == null ? $.pointerTarget<Peer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Peer>(p)
		if (await (changed !== null && (changed as any).__isVarRef !== true && (changed as any).__goValue === undefined ? ((changed as any) as __goscript_connection.Connection).IsActive() : __goscript_connection.Connection.prototype.IsActive.call(changed))) {
			return
		}

		await (p$ as Peer).RWMutex.Lock()
		let found = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Peer).removeConnection($.fieldRef((p$ as Peer)._fields, "inboundConnections"), changed) : Peer.prototype.removeConnection.call(p, $.fieldRef((p$ as Peer)._fields, "inboundConnections"), changed))
		if (!found) {
			found = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Peer).removeConnection($.fieldRef((p$ as Peer)._fields, "outboundConnections"), changed) : Peer.prototype.removeConnection.call(p, $.fieldRef((p$ as Peer)._fields, "outboundConnections"), changed))
		}
		void (p$ as Peer).RWMutex.Unlock()

		if (found) {
			void (__goscriptAwait = (p$ as Peer).onClosedConnRemoved!(p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			// Inform third parties that a peer lost a connection.
			void (__goscriptAwait = (p$ as Peer).onStatusChanged!(p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public connectionsFor(direction: __goscript_connection_direction.connectionDirection): $.VarRef<$.Slice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null>> | null {
		const p: Peer | $.VarRef<Peer> | null = this;
		const p$: Peer = p == null ? $.pointerTarget<Peer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Peer>(p)
		if (direction == 1) {
			return $.fieldRef((p$ as Peer)._fields, "inboundConnections")
		}
		return $.fieldRef((p$ as Peer)._fields, "outboundConnections")
	}

	public async delSC(): globalThis.Promise<void> {
		let p: Peer | $.VarRef<Peer> | null = this;
		const p$: Peer = p == null ? $.pointerTarget<Peer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Peer>(p)
		await (p$ as Peer).RWMutex.Lock();
		;(p$ as Peer).scCount = (((p$ as Peer).scCount - 1) >>> 0)
		void (p$ as Peer).RWMutex.Unlock()
	}

	public async getActiveConn(): globalThis.Promise<[__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, boolean]> {
		const p: Peer | $.VarRef<Peer> | null = this;
		await $.pointerValue<Peer>(p).RWMutex.RLock()
		let __goscriptTuple11: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Peer).getActiveConnLocked() : Peer.prototype.getActiveConnLocked.call(p))
		let conn: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null = __goscriptTuple11[0]
		let ok = __goscriptTuple11[1]
		$.pointerValue<Peer>(p).RWMutex.RUnlock()

		return [conn, ok]
	}

	public async getActiveConnLocked(): globalThis.Promise<[__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, boolean]> {
		const p: Peer | $.VarRef<Peer> | null = this;
		const p$: Peer = p == null ? $.pointerTarget<Peer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Peer>(p)
		let allConns = $.sliceLen((p$ as Peer).inboundConnections) + $.sliceLen((p$ as Peer).outboundConnections)
		if (allConns == 0) {
			return [null, false]
		}

		// We cycle through the connection list, starting at a random point
		// to avoid always choosing the same connection.
		let startOffset: number = 0
		if (allConns > 1) {
			startOffset = await (peerRng !== null && (peerRng as any).__isVarRef !== true && (peerRng as any).__goValue === undefined ? ((peerRng as any) as rand.Rand).Intn(allConns) : rand.Rand.prototype.Intn.call(peerRng, allConns))
		}
		for (let i = 0; i < allConns; i++) {
			let connIndex = (i + startOffset) % allConns
			{
				let conn: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Peer).getConn(connIndex) : Peer.prototype.getConn.call(p, connIndex))
				if (await (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as __goscript_connection.Connection).IsActive() : __goscript_connection.Connection.prototype.IsActive.call(conn))) {
					return [conn, true]
				}
			}
		}

		return [null, false]
	}

	public getConn(i: number): __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null {
		const p: Peer | $.VarRef<Peer> | null = this;
		const p$: Peer = p == null ? $.pointerTarget<Peer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Peer>(p)
		let inboundLen = $.sliceLen((p$ as Peer).inboundConnections)
		if (i < inboundLen) {
			return $.arrayIndex((p$ as Peer).inboundConnections!, i)
		}

		return $.arrayIndex((p$ as Peer).outboundConnections!, i - inboundLen)
	}

	public async getConnectionRelay(callTimeout: time.Duration, relayMaxConnTimeout: time.Duration): globalThis.Promise<[__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, $.GoError]> {
		const p: Peer | $.VarRef<Peer> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const p$: Peer = p == null ? $.pointerTarget<Peer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Peer>(p)
		{
			let __goscriptTuple12: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Peer).getActiveConn() : Peer.prototype.getActiveConn.call(p))
			let conn: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null = __goscriptTuple12[0]
			let ok = __goscriptTuple12[1]
			if (ok) {
				return [conn, null]
			}
		}

		// Lock here to restrict new connection creation attempts to one goroutine
		await (p$ as Peer).newConnLock.Lock()
		const __goscriptDeferCallee8 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as Peer).newConnLock), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee8() })

		// Check active connections again in case someone else got ahead of us.
		{
			let __goscriptTuple13: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Peer).getActiveConn() : Peer.prototype.getActiveConn.call(p))
			let activeConn: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null = __goscriptTuple13[0]
			let ok = __goscriptTuple13[1]
			if (ok) {
				return [activeConn, null]
			}
		}

		// Use the lower timeout value of the call timeout and the relay connection timeout.
		let timeout = callTimeout
		if ((timeout > relayMaxConnTimeout) && (relayMaxConnTimeout > 0n)) {
			timeout = relayMaxConnTimeout
		}

		// When the relay creates outbound connections, we don't want those services
		// to ever connect back to us and send us traffic. We hide the host:port
		// so that service instances on remote machines don't try to connect back
		// and don't try to send Hyperbahn traffic on this connection.
		let [ctx, cancel] = await __goscript_context_builder.ContextBuilder.prototype.Build.call(__goscript_context_builder.ContextBuilder.prototype.HideListeningOnOutbound.call(__goscript_context_builder.NewContextBuilder(timeout)))
		const __goscriptDeferCallee9 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee9!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		return await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Peer).Connect((ctx as context.Context | null)) : Peer.prototype.Connect.call(p, (ctx as context.Context | null)))
	}

	public removeConnection(connsPtr: $.VarRef<$.Slice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null>> | null, changed: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null): boolean {
		const p: Peer | $.VarRef<Peer> | null = this;
		let conns: $.Slice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> = $.pointerValue<$.Slice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null>>(connsPtr)
		for (let __goscriptRangeTarget4 = conns, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
			let c = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null)
			if ($.pointerEqual(c, changed)) {
				// Remove the connection by moving the last item forward, and slicing the list.
				let last = __goscriptRangeWindow4.length - 1
				let __goscriptAssign0_0: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null = ((__goscriptRangeWindow4.backing as any[])[$.windowSlot(__goscriptRangeWindow4, last)] as __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null)
				let __goscriptAssign0_1: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null = null;
				;(__goscriptRangeWindow4.backing as any[])[__goscriptRangeWindow4.offset + i] = __goscriptAssign0_0;
				;(__goscriptRangeWindow4.backing as any[])[$.windowSlot(__goscriptRangeWindow4, last)] = __goscriptAssign0_1
				connsPtr!.value = $.goSlice(conns, undefined, last)
				return true
			}
		}

		return false
	}

	public async runWithConnections(f: ((_p0: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null) => void) | null): globalThis.Promise<void> {
		const p: Peer | $.VarRef<Peer> | null = this;
		const p$: Peer = p == null ? $.pointerTarget<Peer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Peer>(p)
		await (p$ as Peer).RWMutex.RLock()
		for (let __goscriptRangeTarget5 = (p$ as Peer).inboundConnections, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let c = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null)
			void (__goscriptAwait = f!(c), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		for (let __goscriptRangeTarget6 = (p$ as Peer).outboundConnections, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let c = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null)
			void (__goscriptAwait = f!(c), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		void (p$ as Peer).RWMutex.RUnlock()
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
		"tchannel.Peer",
		() => new Peer(),
		() => [$.methodSignature("BeginCall", [["ctx", "context.Context"], ["serviceName", /* @__PURE__ */ $.basicType("string")], ["methodName", /* @__PURE__ */ $.basicType("string")], ["callOptions", /* @__PURE__ */ $.pointerType("tchannel.CallOptions")]], [/* @__PURE__ */ $.pointerType("tchannel.OutboundCall"), "error"], true), $.methodSignature("Connect", [["ctx", "context.Context"]], [/* @__PURE__ */ $.pointerType("tchannel.Connection"), "error"], true), $.methodSignature("GetConnection", [["ctx", "context.Context"]], [/* @__PURE__ */ $.pointerType("tchannel.Connection"), "error"], true), $.methodSignature("HostPort", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("IntrospectState", [["opts", /* @__PURE__ */ $.pointerType("tchannel.IntrospectionOptions")]], ["tchannel.PeerRuntimeState"], true), $.methodSignature("NumConnections", [], [["inbound", /* @__PURE__ */ $.basicType("int")], ["outbound", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("NumPendingOutbound", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("addConnection", [["c", /* @__PURE__ */ $.pointerType("tchannel.Connection")], ["direction", /* @__PURE__ */ $.basicType("int", "tchannel.connectionDirection")]], ["error"], true), $.methodSignature("addSC", [], [], true), $.methodSignature("callOnUpdateComplete", [], [], true), $.methodSignature("canRemove", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("connectionCloseStateChange", [["changed", /* @__PURE__ */ $.pointerType("tchannel.Connection")]], [], true), $.methodSignature("connectionsFor", [["direction", /* @__PURE__ */ $.basicType("int", "tchannel.connectionDirection")]], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("tchannel.Connection")))], true), $.methodSignature("delSC", [], [], true), $.methodSignature("getActiveConn", [], [/* @__PURE__ */ $.pointerType("tchannel.Connection"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getActiveConnLocked", [], [/* @__PURE__ */ $.pointerType("tchannel.Connection"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getConn", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("tchannel.Connection")], true), $.methodSignature("getConnectionRelay", [["callTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["relayMaxConnTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("tchannel.Connection"), "error"], true), $.methodSignature("removeConnection", [["connsPtr", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("tchannel.Connection")))], ["changed", /* @__PURE__ */ $.pointerType("tchannel.Connection")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("runWithConnections", [["f", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Connection")], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("Lock", [], [], true), $.methodSignature("RLock", [], [], true), $.methodSignature("RLocker", [], ["sync.Locker"], true), $.methodSignature("RUnlock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		Peer,
		() => [/* @__PURE__ */ $.structField("RWMutex", "sync.RWMutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("channel", "tchannel.Connectable", [1], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("hostPort", /* @__PURE__ */ $.basicType("string"), [2], 40, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("onStatusChanged", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Peer")], results: [] } as $.FunctionTypeInfo), [3], 56, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("onClosedConnRemoved", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Peer")], results: [] } as $.FunctionTypeInfo), [4], 64, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("scCount", /* @__PURE__ */ $.basicType("uint32"), [5], 72, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("newConnLock", "sync.Mutex", [6], 76, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("inboundConnections", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("tchannel.Connection")), [7], 88, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("outboundConnections", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("tchannel.Connection")), [8], 112, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("chosenCount", "atomic.Uint64", [9], 136, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("onUpdate", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Peer")], results: [] } as $.FunctionTypeInfo), [10], 144, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export var ErrInvalidConnectionState: $.GoError

export async function __goscript_init_ErrInvalidConnectionState(): globalThis.Promise<void> {
	if (((ErrInvalidConnectionState) as any) === undefined) {
		ErrInvalidConnectionState = await __goscript_errors.NewSystemError(7, "connection is in an invalid state", null)
	}
}

export function __goscript_get_ErrInvalidConnectionState(): $.GoError {
	if (((ErrInvalidConnectionState) as any) === undefined) {
		throw new globalThis.Error("goscript package variable ErrInvalidConnectionState read before initialization")
	}
	return ErrInvalidConnectionState
}

export function __goscript_set_ErrInvalidConnectionState(__goscriptValue: $.GoError): void {
	ErrInvalidConnectionState = __goscriptValue
}

export let ErrNoPeers: $.GoError = errors.New("no peers available")

export function __goscript_set_ErrNoPeers(__goscriptValue: $.GoError): void {
	ErrNoPeers = __goscriptValue
}

export let ErrPeerNotFound: $.GoError = errors.New("peer not found")

export function __goscript_set_ErrPeerNotFound(__goscriptValue: $.GoError): void {
	ErrPeerNotFound = __goscriptValue
}

export let ErrNoNewPeers: $.GoError = errors.New("no new peer available")

export function __goscript_set_ErrNoNewPeers(__goscriptValue: $.GoError): void {
	ErrNoNewPeers = __goscriptValue
}

export let peerRng: rand.Rand | $.VarRef<rand.Rand> | null = await trand.NewSeeded()

export function __goscript_set_peerRng(__goscriptValue: rand.Rand | $.VarRef<rand.Rand> | null): void {
	peerRng = __goscriptValue
}

export function newPeerList(root: __goscript_root_peer_list.RootPeerList | $.VarRef<__goscript_root_peer_list.RootPeerList> | null): PeerList | $.VarRef<PeerList> | null {
	return (() => { const __goscriptLiteralField0 = $.interfaceValue<__goscript_peer_strategies.ScoreCalculator | null>(__goscript_peer_strategies.newPreferIncomingCalculator(), "tchannel.preferIncomingCalculator", "tchannel.preferIncomingCalculator"); const __goscriptLiteralField1 = __goscript_peer_heap.newPeerHeap(); return new PeerList({parent: root, peersByHostPort: $.makeMap<string, peerScore | $.VarRef<peerScore> | null>(), scoreCalculator: __goscriptLiteralField0, peerHeap: __goscriptLiteralField1}) })()
}

export function newPeerScore(p: Peer | $.VarRef<Peer> | null, score: bigint): peerScore | $.VarRef<peerScore> | null {
	return new peerScore({Peer: p, score: score, index: -1})
}

export async function newPeer(channel: Connectable | null, hostPort: string, onStatusChanged: ((_p0: Peer | $.VarRef<Peer> | null) => void) | null, onClosedConnRemoved: ((_p0: Peer | $.VarRef<Peer> | null) => void) | null): globalThis.Promise<Peer | $.VarRef<Peer> | null> {
	if ($.stringEqual(hostPort, "")) {
		$.panic("Cannot create peer with blank hostPort")
	}
	if (onStatusChanged == null) {
		onStatusChanged = noopOnStatusChanged
	}
	return new Peer({channel: channel, hostPort: hostPort, onStatusChanged: onStatusChanged, onClosedConnRemoved: onClosedConnRemoved})
}

export function noopOnStatusChanged(_p0: Peer | $.VarRef<Peer> | null): void {
}

export function isEphemeralHostPort(hostPort: string): boolean {
	return (($.stringEqual(hostPort, "")) || ($.stringEqual(hostPort, "0.0.0.0:0"))) || strings.HasSuffix(hostPort, ":0")
}

var __goscriptAwait: any
