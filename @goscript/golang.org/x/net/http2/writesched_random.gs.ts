// Generated file based on writesched_random.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as hpack from "@goscript/golang.org/x/net/http2/hpack/index.js"

import * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as http from "@goscript/net/http/index.js"

import * as url from "@goscript/net/url/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_flow from "./flow.gs.ts"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_gotrack from "./gotrack.gs.ts"

import * as __goscript_http2 from "./http2.gs.ts"

import * as __goscript_pipe from "./pipe.gs.ts"

import * as __goscript_server from "./server.gs.ts"

import * as __goscript_timer from "./timer.gs.ts"

import * as __goscript_write from "./write.gs.ts"

import * as __goscript_writesched from "./writesched.gs.ts"
import "@goscript/math/index.js"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/golang.org/x/net/http2/hpack/index.js"
import "@goscript/io/index.js"
import "@goscript/net/index.js"
import "@goscript/net/http/index.js"
import "@goscript/net/url/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./errors.gs.ts"
import "./flow.gs.ts"
import "./frame.gs.ts"
import "./gotrack.gs.ts"
import "./http2.gs.ts"
import "./pipe.gs.ts"
import "./server.gs.ts"
import "./timer.gs.ts"
import "./write.gs.ts"
import "./writesched.gs.ts"

$.registerTypePackagePath("golang.org/x/net/http2", ["http2.randomWriteScheduler"])

export class randomWriteScheduler {
	// zero are frames not associated with a specific stream.
	public get zero(): __goscript_writesched.writeQueue {
		return this._fields.zero
	}

	public set zero(value: __goscript_writesched.writeQueue) {
		this._fields.zero = value
	}

	// sq contains the stream-specific queues, keyed by stream ID.
	// When a stream is idle, closed, or emptied, it's deleted
	// from the map.
	public get sq(): globalThis.Map<number, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null> | null {
		return this._fields.sq
	}

	public set sq(value: globalThis.Map<number, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null> | null) {
		this._fields.sq = value
	}

	// pool of empty queues for reuse.
	public get queuePool(): __goscript_writesched.writeQueuePool {
		return this._fields.queuePool
	}

	public set queuePool(value: __goscript_writesched.writeQueuePool) {
		this._fields.queuePool = value
	}

	public _fields: {
		zero: __goscript_writesched.writeQueue
		sq: globalThis.Map<number, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null> | null
		queuePool: __goscript_writesched.writeQueuePool
	}

	constructor(init?: Partial<{zero?: __goscript_writesched.writeQueue, sq?: globalThis.Map<number, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null> | null, queuePool?: __goscript_writesched.writeQueuePool}>, __goscriptValue?: boolean) {
		this._fields = {
			zero: init?.zero ? init.zero.clone() : new __goscript_writesched.writeQueue(undefined, true),
			sq: init?.sq ?? (null! as globalThis.Map<number, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null> | null),
			queuePool: init?.queuePool ?? (null! as __goscript_writesched.writeQueuePool)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): randomWriteScheduler {
		return new randomWriteScheduler(this, true)
	}

	public __goscriptAssign(source: randomWriteScheduler): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.zero, values.zero)
		target.sq = values.sq
		target.queuePool = values.queuePool
	}

	public AdjustStream(streamID: number, priority: __goscript_frame.PriorityParam): void {
		const ws: randomWriteScheduler | $.VarRef<randomWriteScheduler> | null = this;
	}

	public CloseStream(streamID: number): void {
		const ws: randomWriteScheduler | $.VarRef<randomWriteScheduler> | null = this;
		const ws$: randomWriteScheduler = ws == null ? $.pointerTarget<randomWriteScheduler>(ws) : (ws as any).__isVarRef === true ? (ws as any).value : (ws as any).__goValue === undefined ? (ws as any) : $.pointerTarget<randomWriteScheduler>(ws)
		let __goscriptTuple0: any = $.mapGet<number, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null>((ws$ as randomWriteScheduler).sq, streamID, null)
		let q: __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			return
		}
		$.deleteMapEntry((ws$ as randomWriteScheduler).sq, streamID)
		__goscript_writesched.writeQueuePool_put($.fieldRef((ws$ as randomWriteScheduler)._fields, "queuePool"), q)
	}

	public OpenStream(streamID: number, options: __goscript_writesched.OpenStreamOptions): void {
		const ws: randomWriteScheduler | $.VarRef<randomWriteScheduler> | null = this;
	}

	public Pop(): [__goscript_writesched.FrameWriteRequest, boolean] {
		const ws: randomWriteScheduler | $.VarRef<randomWriteScheduler> | null = this;
		const ws$: randomWriteScheduler = ws == null ? $.pointerTarget<randomWriteScheduler>(ws) : (ws as any).__isVarRef === true ? (ws as any).value : (ws as any).__goValue === undefined ? (ws as any) : $.pointerTarget<randomWriteScheduler>(ws)
		// Control and RST_STREAM frames first.
		if (!(ws$ as randomWriteScheduler).zero.empty()) {
			return [(ws$ as randomWriteScheduler).zero.shift(), true]
		}
		// Iterate over all non-idle streams until finding one that can be consumed.
		for (const [streamID, q] of (ws$ as randomWriteScheduler).sq?.entries() ?? []) {
			{
				let [wr, ok] = (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as __goscript_writesched.writeQueue).consume(2147483647) : __goscript_writesched.writeQueue.prototype.consume.call(q, 2147483647))
				if (ok) {
					if ((q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as __goscript_writesched.writeQueue).empty() : __goscript_writesched.writeQueue.prototype.empty.call(q))) {
						$.deleteMapEntry((ws$ as randomWriteScheduler).sq, streamID)
						__goscript_writesched.writeQueuePool_put($.fieldRef((ws$ as randomWriteScheduler)._fields, "queuePool"), q)
					}
					return [(wr).clone(), true]
				}
			}
		}
		return [new __goscript_writesched.FrameWriteRequest(undefined, true), false]
	}

	public Push(wr: __goscript_writesched.FrameWriteRequest): void {
		let ws: randomWriteScheduler | $.VarRef<randomWriteScheduler> | null = this;
		const ws$: randomWriteScheduler = ws == null ? $.pointerTarget<randomWriteScheduler>(ws) : (ws as any).__isVarRef === true ? (ws as any).value : (ws as any).__goValue === undefined ? (ws as any) : $.pointerTarget<randomWriteScheduler>(ws)
		if (wr.isControl()) {
			void (ws$ as randomWriteScheduler).zero.push(wr)
			return
		}
		let id = wr.StreamID()
		let __goscriptTuple1: any = $.mapGet<number, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null>((ws$ as randomWriteScheduler).sq, id, null)
		let q: __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (!ok) {
			q = __goscript_writesched.writeQueuePool__get($.fieldRef((ws$ as randomWriteScheduler)._fields, "queuePool"))
			$.mapSet((ws$ as randomWriteScheduler).sq, id, q)
		}
		void (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as __goscript_writesched.writeQueue).push(wr) : __goscript_writesched.writeQueue.prototype.push.call(q, wr))
	}

	static __typeInfo = $.registerStructType(
		"http2.randomWriteScheduler",
		() => new randomWriteScheduler(),
		() => [$.methodSignature("AdjustStream", [["streamID", /* @__PURE__ */ $.basicType("uint32")], ["priority", "http2.PriorityParam"]], [], true), $.methodSignature("CloseStream", [["streamID", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("OpenStream", [["streamID", /* @__PURE__ */ $.basicType("uint32")], ["options", "http2.OpenStreamOptions"]], [], true), $.methodSignature("Pop", [], ["http2.FrameWriteRequest", /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Push", [["wr", "http2.FrameWriteRequest"]], [], true)],
		randomWriteScheduler,
		() => [/* @__PURE__ */ $.structField("zero", "http2.writeQueue", [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("sq", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.pointerType("http2.writeQueue")), [1], 40, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("queuePool", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("http2.writeQueue"), "http2.writeQueuePool"), [2], 48, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export function NewRandomWriteScheduler(): __goscript_writesched.WriteScheduler | null {
	return $.interfaceValue<__goscript_writesched.WriteScheduler | null>(new randomWriteScheduler({sq: $.makeMap<number, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null>()}), "*http2.randomWriteScheduler", /* @__PURE__ */ $.pointerType("http2.randomWriteScheduler"))
}
