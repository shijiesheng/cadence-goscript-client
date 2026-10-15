// Generated file based on peer_heap.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as heap from "@goscript/container/heap/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as trand from "@goscript/github.com/uber/tchannel-go/trand/index.js"

import * as context from "@goscript/context/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as relay from "@goscript/github.com/uber/tchannel-go/relay/index.js"

import type * as arg2 from "@goscript/github.com/uber/tchannel-go/thrift/arg2/index.js"

import * as tos from "@goscript/github.com/uber/tchannel-go/tos/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as context2 from "@goscript/golang.org/x/net/context/index.js"

import type * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as time from "@goscript/time/index.js"

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

import * as __goscript_tracing from "./tracing.gs.ts"
import "@goscript/container/heap/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/github.com/uber/tchannel-go/trand/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber/tchannel-go/relay/index.js"
import "@goscript/github.com/uber/tchannel-go/tos/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/syscall/index.js"
import "@goscript/time/index.js"
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

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.peerHeap"])

export class peerHeap {
	public get peerScores(): $.Slice<__goscript_peer.peerScore | $.VarRef<__goscript_peer.peerScore> | null> {
		return this._fields.peerScores
	}

	public set peerScores(value: $.Slice<__goscript_peer.peerScore | $.VarRef<__goscript_peer.peerScore> | null>) {
		this._fields.peerScores = value
	}

	public get rng(): rand.Rand | $.VarRef<rand.Rand> | null {
		return this._fields.rng
	}

	public set rng(value: rand.Rand | $.VarRef<rand.Rand> | null) {
		this._fields.rng = value
	}

	public get order(): bigint {
		return this._fields.order
	}

	public set order(value: bigint) {
		this._fields.order = value
	}

	public _fields: {
		peerScores: $.Slice<__goscript_peer.peerScore | $.VarRef<__goscript_peer.peerScore> | null>
		rng: rand.Rand | $.VarRef<rand.Rand> | null
		order: bigint
	}

	constructor(init?: Partial<{peerScores?: $.Slice<__goscript_peer.peerScore | $.VarRef<__goscript_peer.peerScore> | null>, rng?: rand.Rand | $.VarRef<rand.Rand> | null, order?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			peerScores: init?.peerScores ?? (null! as $.Slice<__goscript_peer.peerScore | $.VarRef<__goscript_peer.peerScore> | null>),
			rng: init?.rng ?? (null! as rand.Rand | $.VarRef<rand.Rand> | null),
			order: init?.order ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): peerHeap {
		return new peerHeap(this, true)
	}

	public __goscriptAssign(source: peerHeap): void {
		const target = this._fields
		const values = source._fields
		target.peerScores = values.peerScores
		target.rng = values.rng
		target.order = values.order
	}

	public Len(): number {
		const ph = this;
		return $.sliceLen(ph.peerScores)
	}

	public Less(i: number, j: number): boolean {
		const ph: peerHeap | $.VarRef<peerHeap> | null = this;
		const ph$: peerHeap = ph == null ? $.pointerTarget<peerHeap>(ph) : (ph as any).__isVarRef === true ? (ph as any).value : (ph as any).__goValue === undefined ? (ph as any) : $.pointerTarget<peerHeap>(ph)
		if ($.pointerValue<__goscript_peer.peerScore>($.arrayIndex((ph$ as peerHeap).peerScores!, i)).score == $.pointerValue<__goscript_peer.peerScore>($.arrayIndex((ph$ as peerHeap).peerScores!, j)).score) {
			return $.pointerValue<__goscript_peer.peerScore>($.arrayIndex((ph$ as peerHeap).peerScores!, i)).order < $.pointerValue<__goscript_peer.peerScore>($.arrayIndex((ph$ as peerHeap).peerScores!, j)).order
		}
		return $.pointerValue<__goscript_peer.peerScore>($.arrayIndex((ph$ as peerHeap).peerScores!, i)).score < $.pointerValue<__goscript_peer.peerScore>($.arrayIndex((ph$ as peerHeap).peerScores!, j)).score
	}

	public Pop(): any {
		let ph: peerHeap | $.VarRef<peerHeap> | null = this;
		let old = ($.pointerValue<peerHeap>(ph)).clone()
		let n = $.sliceLen(old.peerScores)
		let item: __goscript_peer.peerScore | $.VarRef<__goscript_peer.peerScore> | null = $.arrayIndex(old.peerScores!, n - 1)
		$.pointerValue<__goscript_peer.peerScore>(item).index = -1
		$.pointerValue<peerHeap>(ph).peerScores = $.goSlice(old.peerScores, undefined, n - 1)
		return $.interfaceValue(item, "*tchannel.peerScore", /* @__PURE__ */ $.pointerType("tchannel.peerScore"))
	}

	public Push(x: any): void {
		let ph: peerHeap | $.VarRef<peerHeap> | null = this;
		const ph$: peerHeap = ph == null ? $.pointerTarget<peerHeap>(ph) : (ph as any).__isVarRef === true ? (ph as any).value : (ph as any).__goValue === undefined ? (ph as any) : $.pointerTarget<peerHeap>(ph)
		let n = $.sliceLen((ph$ as peerHeap).peerScores)
		let item: __goscript_peer.peerScore | $.VarRef<__goscript_peer.peerScore> | null = ((x as any)?.__goType === "*tchannel.peerScore" && (x as any).__goValue === undefined && (x as any).__isTypedNil !== true ? ((x as any) as __goscript_peer.peerScore | $.VarRef<__goscript_peer.peerScore> | null) : $.mustTypeAssert<__goscript_peer.peerScore | $.VarRef<__goscript_peer.peerScore> | null>(x, /* @__PURE__ */ $.pointerType("tchannel.peerScore")))
		$.pointerValue<__goscript_peer.peerScore>(item).index = n;
		;(ph$ as peerHeap).peerScores = $.appendOne((ph$ as peerHeap).peerScores, item, $.appendZeros.nil)
	}

	public Swap(i: number, j: number): void {
		let ph: peerHeap = this;
		let __goscriptAssign0_0: __goscript_peer.peerScore | $.VarRef<__goscript_peer.peerScore> | null = $.arrayIndex(ph.peerScores!, j)
		let __goscriptAssign0_1: __goscript_peer.peerScore | $.VarRef<__goscript_peer.peerScore> | null = $.arrayIndex(ph.peerScores!, i)
		$.sliceElems(ph.peerScores!)[$.sliceSlot(ph.peerScores!, i)] = __goscriptAssign0_0
		$.sliceElems(ph.peerScores!)[$.sliceSlot(ph.peerScores!, j)] = __goscriptAssign0_1
		$.pointerValue<__goscript_peer.peerScore>($.arrayIndex(ph.peerScores!, i)).index = i
		$.pointerValue<__goscript_peer.peerScore>($.arrayIndex(ph.peerScores!, j)).index = j
	}

	public async addPeer(peerScore: __goscript_peer.peerScore | $.VarRef<__goscript_peer.peerScore> | null): globalThis.Promise<void> {
		const ph: peerHeap | $.VarRef<peerHeap> | null = this;
		await (ph !== null && (ph as any).__isVarRef !== true && (ph as any).__goValue === undefined ? ((ph as any) as peerHeap).pushPeer(peerScore) : peerHeap.prototype.pushPeer.call(ph, peerScore))

		// Pick a random element, and swap the order with that peerScore.
		let r = await rand.Rand.prototype.Intn.call($.pointerValue<peerHeap>(ph).rng, $.pointerValue<peerHeap>(ph).Len())
		await (ph !== null && (ph as any).__isVarRef !== true && (ph as any).__goValue === undefined ? ((ph as any) as peerHeap).swapOrder($.pointerValue<__goscript_peer.peerScore>(peerScore).index, r) : peerHeap.prototype.swapOrder.call(ph, $.pointerValue<__goscript_peer.peerScore>(peerScore).index, r))
	}

	public peek(): __goscript_peer.peerScore | $.VarRef<__goscript_peer.peerScore> | null {
		const ph: peerHeap | $.VarRef<peerHeap> | null = this;
		return $.arrayIndex($.pointerValue<peerHeap>(ph).peerScores!, 0)
	}

	public async popPeer(): globalThis.Promise<__goscript_peer.peerScore | $.VarRef<__goscript_peer.peerScore> | null> {
		const ph: peerHeap | $.VarRef<peerHeap> | null = this;
		return $.mustTypeAssert<__goscript_peer.peerScore | $.VarRef<__goscript_peer.peerScore> | null>(await heap.Pop($.interfaceValue<heap.Interface | null>(ph, "*tchannel.peerHeap", /* @__PURE__ */ $.pointerType("tchannel.peerHeap"))), /* @__PURE__ */ $.pointerType("tchannel.peerScore"))
	}

	public async pushPeer(peerScore: __goscript_peer.peerScore | $.VarRef<__goscript_peer.peerScore> | null): globalThis.Promise<void> {
		let ph: peerHeap | $.VarRef<peerHeap> | null = this;
		const ph$: peerHeap = ph == null ? $.pointerTarget<peerHeap>(ph) : (ph as any).__isVarRef === true ? (ph as any).value : (ph as any).__goValue === undefined ? (ph as any) : $.pointerTarget<peerHeap>(ph);
		;(ph$ as peerHeap).order++
		let newOrder = (ph$ as peerHeap).order
		// randRange will affect the deviation of peer's chosenCount
		let randRange = (globalThis.Math.trunc((ph$ as peerHeap).Len() / 2)) + 1
		$.pointerValue<__goscript_peer.peerScore>(peerScore).order = $.uint64Add(newOrder, $.uint64(await rand.Rand.prototype.Intn.call((ph$ as peerHeap).rng, randRange)))
		await heap.Push($.interfaceValue<heap.Interface | null>(ph, "*tchannel.peerHeap", /* @__PURE__ */ $.pointerType("tchannel.peerHeap")), $.interfaceValue(peerScore, "*tchannel.peerScore", /* @__PURE__ */ $.pointerType("tchannel.peerScore")))
	}

	public async removePeer(peerScore: __goscript_peer.peerScore | $.VarRef<__goscript_peer.peerScore> | null): globalThis.Promise<void> {
		const ph: peerHeap | $.VarRef<peerHeap> | null = this;
		await heap.Remove($.interfaceValue<heap.Interface | null>(ph, "*tchannel.peerHeap", /* @__PURE__ */ $.pointerType("tchannel.peerHeap")), $.pointerValue<__goscript_peer.peerScore>(peerScore).index)
	}

	public async swapOrder(i: number, j: number): globalThis.Promise<void> {
		let ph: peerHeap | $.VarRef<peerHeap> | null = this;
		const ph$: peerHeap = ph == null ? $.pointerTarget<peerHeap>(ph) : (ph as any).__isVarRef === true ? (ph as any).value : (ph as any).__goValue === undefined ? (ph as any) : $.pointerTarget<peerHeap>(ph)
		if (i == j) {
			return
		}

		let __goscriptAssign1_0: bigint = $.pointerValue<__goscript_peer.peerScore>($.arrayIndex((ph$ as peerHeap).peerScores!, j)).order
		let __goscriptAssign1_1: bigint = $.pointerValue<__goscript_peer.peerScore>($.arrayIndex((ph$ as peerHeap).peerScores!, i)).order
		$.pointerValue<__goscript_peer.peerScore>($.arrayIndex((ph$ as peerHeap).peerScores!, i)).order = __goscriptAssign1_0
		$.pointerValue<__goscript_peer.peerScore>($.arrayIndex((ph$ as peerHeap).peerScores!, j)).order = __goscriptAssign1_1
		await heap.Fix($.interfaceValue<heap.Interface | null>(ph, "*tchannel.peerHeap", /* @__PURE__ */ $.pointerType("tchannel.peerHeap")), i)
		await heap.Fix($.interfaceValue<heap.Interface | null>(ph, "*tchannel.peerHeap", /* @__PURE__ */ $.pointerType("tchannel.peerHeap")), j)
	}

	public async updatePeer(peerScore: __goscript_peer.peerScore | $.VarRef<__goscript_peer.peerScore> | null): globalThis.Promise<void> {
		const ph: peerHeap | $.VarRef<peerHeap> | null = this;
		await heap.Fix($.interfaceValue<heap.Interface | null>(ph, "*tchannel.peerHeap", /* @__PURE__ */ $.pointerType("tchannel.peerHeap")), $.pointerValue<__goscript_peer.peerScore>(peerScore).index)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.peerHeap",
		() => new peerHeap(),
		() => [$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Pop", [], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("Push", [["x", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("addPeer", [["peerScore", /* @__PURE__ */ $.pointerType("tchannel.peerScore")]], [], true), $.methodSignature("peek", [], [/* @__PURE__ */ $.pointerType("tchannel.peerScore")], true), $.methodSignature("popPeer", [], [/* @__PURE__ */ $.pointerType("tchannel.peerScore")], true), $.methodSignature("pushPeer", [["peerScore", /* @__PURE__ */ $.pointerType("tchannel.peerScore")]], [], true), $.methodSignature("removePeer", [["peerScore", /* @__PURE__ */ $.pointerType("tchannel.peerScore")]], [], true), $.methodSignature("swapOrder", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("updatePeer", [["peerScore", /* @__PURE__ */ $.pointerType("tchannel.peerScore")]], [], true)],
		peerHeap,
		() => [/* @__PURE__ */ $.structField("peerScores", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("tchannel.peerScore")), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("rng", /* @__PURE__ */ $.pointerType("rand.Rand"), [1], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("order", /* @__PURE__ */ $.basicType("uint64"), [2], 32, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export function newPeerHeap(): peerHeap | $.VarRef<peerHeap> | null {
	return (() => { const __goscriptLiteralField0 = trand.NewSeeded(); return new peerHeap({rng: __goscriptLiteralField0}) })()
}
