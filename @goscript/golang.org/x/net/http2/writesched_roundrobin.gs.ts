// Generated file based on writesched_roundrobin.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

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
import "@goscript/fmt/index.js"
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

$.registerTypePackagePath("golang.org/x/net/http2", ["http2.roundRobinWriteScheduler"])

export class roundRobinWriteScheduler {
	// control contains control frames (SETTINGS, PING, etc.).
	public get control(): __goscript_writesched.writeQueue {
		return this._fields.control
	}

	public set control(value: __goscript_writesched.writeQueue) {
		this._fields.control = value
	}

	// streams maps stream ID to a queue.
	public get streams(): globalThis.Map<number, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null> | null {
		return this._fields.streams
	}

	public set streams(value: globalThis.Map<number, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null> | null) {
		this._fields.streams = value
	}

	// stream queues are stored in a circular linked list.
	// head is the next stream to write, or nil if there are no streams open.
	public get head(): __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null {
		return this._fields.head
	}

	public set head(value: __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null) {
		this._fields.head = value
	}

	// pool of empty queues for reuse.
	public get queuePool(): __goscript_writesched.writeQueuePool {
		return this._fields.queuePool
	}

	public set queuePool(value: __goscript_writesched.writeQueuePool) {
		this._fields.queuePool = value
	}

	public _fields: {
		control: __goscript_writesched.writeQueue
		streams: globalThis.Map<number, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null> | null
		head: __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null
		queuePool: __goscript_writesched.writeQueuePool
	}

	constructor(init?: Partial<{control?: __goscript_writesched.writeQueue, streams?: globalThis.Map<number, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null> | null, head?: __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null, queuePool?: __goscript_writesched.writeQueuePool}>, __goscriptValue?: boolean) {
		this._fields = {
			control: init?.control ? init.control.clone() : new __goscript_writesched.writeQueue(undefined, true),
			streams: init?.streams ?? (null! as globalThis.Map<number, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null> | null),
			head: init?.head ?? (null! as __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null),
			queuePool: init?.queuePool ?? (null! as __goscript_writesched.writeQueuePool)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): roundRobinWriteScheduler {
		return new roundRobinWriteScheduler(this, true)
	}

	public __goscriptAssign(source: roundRobinWriteScheduler): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.control, values.control)
		target.streams = values.streams
		target.head = values.head
		target.queuePool = values.queuePool
	}

	public AdjustStream(streamID: number, priority: __goscript_frame.PriorityParam): void {
		const ws: roundRobinWriteScheduler | $.VarRef<roundRobinWriteScheduler> | null = this;
	}

	public CloseStream(streamID: number): void {
		let ws: roundRobinWriteScheduler | $.VarRef<roundRobinWriteScheduler> | null = this;
		const ws$: roundRobinWriteScheduler = ws == null ? $.pointerTarget<roundRobinWriteScheduler>(ws) : (ws as any).__isVarRef === true ? (ws as any).value : (ws as any).__goValue === undefined ? (ws as any) : $.pointerTarget<roundRobinWriteScheduler>(ws)
		let q: __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null = $.mapGet<number, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null>((ws$ as roundRobinWriteScheduler).streams, streamID, null)[0]
		let q$: __goscript_writesched.writeQueue = q == null ? $.pointerTarget<__goscript_writesched.writeQueue>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<__goscript_writesched.writeQueue>(q)
		if (q == null) {
			return
		}
		if ($.pointerEqual((q$ as __goscript_writesched.writeQueue).next, q)) {
			// This was the only open stream.
			;(ws$ as roundRobinWriteScheduler).head = null
		} else {
			$.pointerValue<__goscript_writesched.writeQueue>((q$ as __goscript_writesched.writeQueue).prev).next = (q$ as __goscript_writesched.writeQueue).next
			$.pointerValue<__goscript_writesched.writeQueue>((q$ as __goscript_writesched.writeQueue).next).prev = (q$ as __goscript_writesched.writeQueue).prev
			if ($.pointerEqual((ws$ as roundRobinWriteScheduler).head, q)) {
				;(ws$ as roundRobinWriteScheduler).head = (q$ as __goscript_writesched.writeQueue).next
			}
		}
		$.deleteMapEntry((ws$ as roundRobinWriteScheduler).streams, streamID)
		__goscript_writesched.writeQueuePool_put($.fieldRef((ws$ as roundRobinWriteScheduler)._fields, "queuePool"), q)
	}

	public OpenStream(streamID: number, options: __goscript_writesched.OpenStreamOptions): void {
		let ws: roundRobinWriteScheduler | $.VarRef<roundRobinWriteScheduler> | null = this;
		const ws$: roundRobinWriteScheduler = ws == null ? $.pointerTarget<roundRobinWriteScheduler>(ws) : (ws as any).__isVarRef === true ? (ws as any).value : (ws as any).__goValue === undefined ? (ws as any) : $.pointerTarget<roundRobinWriteScheduler>(ws)
		if ($.mapGet<number, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null>((ws$ as roundRobinWriteScheduler).streams, streamID, null)[0] != null) {
			$.panic((fmt.Errorf("stream %d already opened", $.basicInterfaceValue(streamID, "uint32")) as any))
		}
		let q: __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null = __goscript_writesched.writeQueuePool__get($.fieldRef((ws$ as roundRobinWriteScheduler)._fields, "queuePool"))
		let q$: __goscript_writesched.writeQueue = q == null ? $.pointerTarget<__goscript_writesched.writeQueue>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<__goscript_writesched.writeQueue>(q)
		$.mapSet((ws$ as roundRobinWriteScheduler).streams, streamID, q)
		if ((ws$ as roundRobinWriteScheduler).head == null) {
			;(ws$ as roundRobinWriteScheduler).head = q;
			;(q$ as __goscript_writesched.writeQueue).next = q;
			;(q$ as __goscript_writesched.writeQueue).prev = q
		} else {
			// Queues are stored in a ring.
			// Insert the new stream before ws.head, putting it at the end of the list.
			;(q$ as __goscript_writesched.writeQueue).prev = $.pointerValue<__goscript_writesched.writeQueue>((ws$ as roundRobinWriteScheduler).head).prev;
			;(q$ as __goscript_writesched.writeQueue).next = (ws$ as roundRobinWriteScheduler).head
			$.pointerValue<__goscript_writesched.writeQueue>((q$ as __goscript_writesched.writeQueue).prev).next = q
			$.pointerValue<__goscript_writesched.writeQueue>((q$ as __goscript_writesched.writeQueue).next).prev = q
		}
	}

	public Pop(): [__goscript_writesched.FrameWriteRequest, boolean] {
		let ws: roundRobinWriteScheduler | $.VarRef<roundRobinWriteScheduler> | null = this;
		const ws$: roundRobinWriteScheduler = ws == null ? $.pointerTarget<roundRobinWriteScheduler>(ws) : (ws as any).__isVarRef === true ? (ws as any).value : (ws as any).__goValue === undefined ? (ws as any) : $.pointerTarget<roundRobinWriteScheduler>(ws)
		// Control and RST_STREAM frames first.
		if (!(ws$ as roundRobinWriteScheduler).control.empty()) {
			return [(ws$ as roundRobinWriteScheduler).control.shift(), true]
		}
		if ((ws$ as roundRobinWriteScheduler).head == null) {
			return [new __goscript_writesched.FrameWriteRequest(undefined, true), false]
		}
		let q: __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null = (ws$ as roundRobinWriteScheduler).head
		while (true) {
			{
				let [wr, ok] = (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as __goscript_writesched.writeQueue).consume(2147483647) : __goscript_writesched.writeQueue.prototype.consume.call(q, 2147483647))
				if (ok) {
					;(ws$ as roundRobinWriteScheduler).head = $.pointerValue<__goscript_writesched.writeQueue>(q).next
					return [(wr).clone(), true]
				}
			}
			q = $.pointerValue<__goscript_writesched.writeQueue>(q).next
			if ($.pointerEqual(q, (ws$ as roundRobinWriteScheduler).head)) {
				break
			}
		}
		return [new __goscript_writesched.FrameWriteRequest(undefined, true), false]
	}

	public Push(wr: __goscript_writesched.FrameWriteRequest): void {
		const ws: roundRobinWriteScheduler | $.VarRef<roundRobinWriteScheduler> | null = this;
		const ws$: roundRobinWriteScheduler = ws == null ? $.pointerTarget<roundRobinWriteScheduler>(ws) : (ws as any).__isVarRef === true ? (ws as any).value : (ws as any).__goValue === undefined ? (ws as any) : $.pointerTarget<roundRobinWriteScheduler>(ws)
		if (wr.isControl()) {
			void (ws$ as roundRobinWriteScheduler).control.push(wr)
			return
		}
		let q: __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null = $.mapGet<number, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null>((ws$ as roundRobinWriteScheduler).streams, wr.StreamID(), null)[0]
		if (q == null) {
			// This is a closed stream.
			// wr should not be a HEADERS or DATA frame.
			// We push the request onto the control queue.
			if (wr.DataSize() > 0) {
				$.panic("add DATA on non-open stream")
			}
			void (ws$ as roundRobinWriteScheduler).control.push(wr)
			return
		}
		void (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as __goscript_writesched.writeQueue).push(wr) : __goscript_writesched.writeQueue.prototype.push.call(q, wr))
	}

	static __typeInfo = $.registerStructType(
		"http2.roundRobinWriteScheduler",
		() => new roundRobinWriteScheduler(),
		() => [$.methodSignature("AdjustStream", [["streamID", /* @__PURE__ */ $.basicType("uint32")], ["priority", "http2.PriorityParam"]], [], true), $.methodSignature("CloseStream", [["streamID", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("OpenStream", [["streamID", /* @__PURE__ */ $.basicType("uint32")], ["options", "http2.OpenStreamOptions"]], [], true), $.methodSignature("Pop", [], ["http2.FrameWriteRequest", /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Push", [["wr", "http2.FrameWriteRequest"]], [], true)],
		roundRobinWriteScheduler,
		() => [/* @__PURE__ */ $.structField("control", "http2.writeQueue", [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("streams", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.pointerType("http2.writeQueue")), [1], 40, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("head", /* @__PURE__ */ $.pointerType("http2.writeQueue"), [2], 48, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("queuePool", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("http2.writeQueue"), "http2.writeQueuePool"), [3], 56, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export function newRoundRobinWriteScheduler(): __goscript_writesched.WriteScheduler | null {
	let ws: roundRobinWriteScheduler | $.VarRef<roundRobinWriteScheduler> | null = new roundRobinWriteScheduler({streams: $.makeMap<number, __goscript_writesched.writeQueue | $.VarRef<__goscript_writesched.writeQueue> | null>()})
	return $.interfaceValue<__goscript_writesched.WriteScheduler | null>(ws, "*http2.roundRobinWriteScheduler", /* @__PURE__ */ $.pointerType("http2.roundRobinWriteScheduler"))
}
