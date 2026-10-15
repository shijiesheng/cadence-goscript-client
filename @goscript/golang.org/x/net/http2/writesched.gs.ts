// Generated file based on writesched.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

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
import "@goscript/fmt/index.js"
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

$.registerTypePackagePath("golang.org/x/net/http2", ["http2.WriteScheduler", "http2.OpenStreamOptions", "http2.FrameWriteRequest", "http2.writeQueue", "http2.writeQueuePool"])

export type WriteScheduler = {
	AdjustStream(streamID: number, priority: __goscript_frame.PriorityParam): void
	CloseStream(streamID: number): void
	OpenStream(streamID: number, options: OpenStreamOptions): void
	Pop(): [FrameWriteRequest, boolean] | globalThis.Promise<[FrameWriteRequest, boolean]>
	Push(wr: FrameWriteRequest): void
}

$.registerInterfaceType(
	"http2.WriteScheduler",
	null,
	[$.methodSignature("AdjustStream", [["streamID", /* @__PURE__ */ $.basicType("uint32")], ["priority", "http2.PriorityParam"]]), $.methodSignature("CloseStream", [["streamID", /* @__PURE__ */ $.basicType("uint32")]]), $.methodSignature("OpenStream", [["streamID", /* @__PURE__ */ $.basicType("uint32")], ["options", "http2.OpenStreamOptions"]]), $.methodSignature("Pop", [], [["wr", "http2.FrameWriteRequest"], ["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("Push", [["wr", "http2.FrameWriteRequest"]])]
);

export type writeQueuePool = $.Slice<writeQueue | $.VarRef<writeQueue> | null>

$.registerNamedType("http2.writeQueuePool", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("http2.writeQueue")));

$.registerNamedValueType(
	"*http2.writeQueuePool",
	{get: (receiver: any, ...args: any[]) => (writeQueuePool__get as any)(receiver, ...$.stripGenericTypeArgs(args)), put: (receiver: any, ...args: any[]) => (writeQueuePool_put as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("get", [], [/* @__PURE__ */ $.pointerType("http2.writeQueue")]), $.methodSignature("put", [["q", /* @__PURE__ */ $.pointerType("http2.writeQueue")]])]
);

export class OpenStreamOptions {
	// PusherID is zero if the stream was initiated by the client. Otherwise,
	// PusherID names the stream that pushed the newly opened stream.
	public get PusherID(): number {
		return this._fields.PusherID
	}

	public set PusherID(value: number) {
		this._fields.PusherID = value
	}

	public _fields: {
		PusherID: number
	}

	constructor(init?: Partial<{PusherID?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			PusherID: init?.PusherID ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OpenStreamOptions {
		return new OpenStreamOptions(this, true)
	}

	public __goscriptAssign(source: OpenStreamOptions): void {
		const target = this._fields
		const values = source._fields
		target.PusherID = values.PusherID
	}

	static __typeInfo = $.registerStructType(
		"http2.OpenStreamOptions",
		() => new OpenStreamOptions(),
		() => [],
		OpenStreamOptions,
		() => [/* @__PURE__ */ $.structField("PusherID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true)]
	)
}

export class FrameWriteRequest {
	// write is the interface value that does the writing, once the
	// WriteScheduler has selected this frame to write. The write
	// functions are all defined in write.go.
	public get write(): __goscript_write.writeFramer | null {
		return this._fields.write
	}

	public set write(value: __goscript_write.writeFramer | null) {
		this._fields.write = value
	}

	// stream is the stream on which this frame will be written.
	// nil for non-stream frames like PING and SETTINGS.
	// nil for RST_STREAM streams, which use the StreamError.StreamID field instead.
	public get stream(): __goscript_server.stream | $.VarRef<__goscript_server.stream> | null {
		return this._fields.stream
	}

	public set stream(value: __goscript_server.stream | $.VarRef<__goscript_server.stream> | null) {
		this._fields.stream = value
	}

	// done, if non-nil, must be a buffered channel with space for
	// 1 message and is sent the return value from write (or an
	// earlier error) when the frame has been written.
	public get done(): $.Channel<$.GoError> | null {
		return this._fields.done
	}

	public set done(value: $.Channel<$.GoError> | null) {
		this._fields.done = value
	}

	public _fields: {
		write: __goscript_write.writeFramer | null
		stream: __goscript_server.stream | $.VarRef<__goscript_server.stream> | null
		done: $.Channel<$.GoError> | null
	}

	constructor(init?: Partial<{write?: __goscript_write.writeFramer | null, stream?: __goscript_server.stream | $.VarRef<__goscript_server.stream> | null, done?: $.Channel<$.GoError> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			write: init?.write ?? (null! as __goscript_write.writeFramer | null),
			stream: init?.stream ?? (null! as __goscript_server.stream | $.VarRef<__goscript_server.stream> | null),
			done: init?.done ?? (null! as $.Channel<$.GoError> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FrameWriteRequest {
		return new FrameWriteRequest(this, true)
	}

	public __goscriptAssign(source: FrameWriteRequest): void {
		const target = this._fields
		const values = source._fields
		target.write = $.assignFieldValue(target.write, values.write, "http2.writeFramer")
		target.stream = values.stream
		target.done = values.done
	}

	public Consume(n: number): [FrameWriteRequest, FrameWriteRequest, number] {
		const wr = this;
		let empty: FrameWriteRequest = new FrameWriteRequest(undefined, true)

		// Non-DATA frames are always consumed whole.
		let __goscriptTuple0: any = $.typeAssertTuple<__goscript_write.writeData | $.VarRef<__goscript_write.writeData> | null>(wr.write, /* @__PURE__ */ $.pointerType("http2.writeData"))
		let wd: __goscript_write.writeData | $.VarRef<__goscript_write.writeData> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		let wd$: __goscript_write.writeData = wd == null ? $.pointerTarget<__goscript_write.writeData>(wd) : (wd as any).__isVarRef === true ? (wd as any).value : (wd as any).__goValue === undefined ? (wd as any) : $.pointerTarget<__goscript_write.writeData>(wd)
		if (!ok || ($.sliceLen((wd$ as __goscript_write.writeData).p) == 0)) {
			return [(wr).clone(), (empty).clone(), 1]
		}

		// Might need to split after applying limits.
		let allowed = $.pointerValue<__goscript_server.stream>(wr.stream).flow.available()
		if (n < allowed) {
			allowed = n
		}
		if ($.pointerValue<__goscript_server.serverConn>($.pointerValue<__goscript_server.stream>(wr.stream).sc).maxFrameSize < allowed) {
			allowed = $.pointerValue<__goscript_server.serverConn>($.pointerValue<__goscript_server.stream>(wr.stream).sc).maxFrameSize
		}
		if (allowed <= 0) {
			return [(empty).clone(), (empty).clone(), 0]
		}
		if ($.sliceLen((wd$ as __goscript_write.writeData).p) > $.int(allowed)) {
			$.pointerValue<__goscript_server.stream>(wr.stream).flow.take(allowed)
			let consumed = new FrameWriteRequest({stream: wr.stream, write: $.interfaceValue<__goscript_write.writeFramer | null>(new __goscript_write.writeData({streamID: (wd$ as __goscript_write.writeData).streamID, p: $.goSlice((wd$ as __goscript_write.writeData).p, undefined, allowed), endStream: false}), "*http2.writeData", /* @__PURE__ */ $.pointerType("http2.writeData")), done: null}, true)
			let rest = new FrameWriteRequest({stream: wr.stream, write: $.interfaceValue<__goscript_write.writeFramer | null>(new __goscript_write.writeData({streamID: (wd$ as __goscript_write.writeData).streamID, p: $.goSlice((wd$ as __goscript_write.writeData).p, allowed, undefined), endStream: (wd$ as __goscript_write.writeData).endStream}), "*http2.writeData", /* @__PURE__ */ $.pointerType("http2.writeData")), done: wr.done}, true)
			return [(consumed).clone(), (rest).clone(), 2]
		}

		// The frame is consumed whole.
		// NB: This cast cannot overflow because allowed is <= math.MaxInt32.
		$.pointerValue<__goscript_server.stream>(wr.stream).flow.take($.int($.sliceLen((wd$ as __goscript_write.writeData).p), 32))
		return [(wr).clone(), (empty).clone(), 1]
	}

	public DataSize(): number {
		const wr = this;
		{
			let __goscriptTuple1: any = $.typeAssertTuple<__goscript_write.writeData | $.VarRef<__goscript_write.writeData> | null>(wr.write, /* @__PURE__ */ $.pointerType("http2.writeData"))
			let wd: __goscript_write.writeData | $.VarRef<__goscript_write.writeData> | null = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				return $.sliceLen($.pointerValue<__goscript_write.writeData>(wd).p)
			}
		}
		return 0
	}

	public StreamID(): number {
		const wr = this;
		if (wr.stream == null) {
			{
				let [se, ok] = $.typeAssertTuple<__goscript_errors.StreamError>(wr.write, "http2.StreamError")
				if (ok) {
					// (*serverConn).resetStream doesn't set
					// stream because it doesn't necessarily have
					// one. So special case this type of write
					// message.
					return se.StreamID
				}
			}
			return 0
		}
		return $.pointerValue<__goscript_server.stream>(wr.stream).id
	}

	public async String(): globalThis.Promise<string> {
		const wr = this;
		let des: string = ""
		{
			let [s, ok] = $.typeAssertTuple<fmt.Stringer | null>(wr.write, "fmt.Stringer")
			if (ok) {
				des = (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt.Stringer, null>) : $.pointerValue<Exclude<fmt.Stringer, null>>(s)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				des = await fmt.Sprintf("%T", (wr.write as any))
			}
		}
		return fmt.Sprintf("[FrameWriteRequest stream=%d, ch=%v, writer=%v]", $.basicInterfaceValue(wr.StreamID(), "uint32"), wr.done != null, des)
	}

	public isControl(): boolean {
		const wr = this;
		return wr.stream == null
	}

	public async replyToWriter(err: $.GoError): globalThis.Promise<void> {
		let wr: FrameWriteRequest | $.VarRef<FrameWriteRequest> | null = this;
		const wr$: FrameWriteRequest = wr == null ? $.pointerTarget<FrameWriteRequest>(wr) : (wr as any).__isVarRef === true ? (wr as any).value : (wr as any).__goValue === undefined ? (wr as any) : $.pointerTarget<FrameWriteRequest>(wr)
		if ((wr$ as FrameWriteRequest).done == null) {
			return
		}
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
			{
				id: 0,
				isSend: true,
				channel: (wr$ as FrameWriteRequest).done,
				value: err,
			},
			{
				id: -1,
				isSend: false,
				channel: null,
				onSelected: async (__goscriptSelect0Result) => {
					$.panic(await fmt.Sprintf("unbuffered done channel passed in for type %T", ((wr$ as FrameWriteRequest).write as any)))
				}
			}
		], true)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
		;(wr$ as FrameWriteRequest).write = null
	}

	static __typeInfo = $.registerStructType(
		"http2.FrameWriteRequest",
		() => new FrameWriteRequest(),
		() => [$.methodSignature("Consume", [["n", /* @__PURE__ */ $.basicType("int32")]], ["http2.FrameWriteRequest", "http2.FrameWriteRequest", /* @__PURE__ */ $.basicType("int")]), $.methodSignature("DataSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("StreamID", [], [/* @__PURE__ */ $.basicType("uint32")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("isControl", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("replyToWriter", [["err", "error"]], [], true)],
		FrameWriteRequest,
		() => [/* @__PURE__ */ $.structField("write", "http2.writeFramer", [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("stream", /* @__PURE__ */ $.pointerType("http2.stream"), [1], 16, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("done", /* @__PURE__ */ $.channelType("error", "both"), [2], 24, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class writeQueue {
	public get s(): $.Slice<FrameWriteRequest> {
		return this._fields.s
	}

	public set s(value: $.Slice<FrameWriteRequest>) {
		this._fields.s = value
	}

	public get prev(): writeQueue | $.VarRef<writeQueue> | null {
		return this._fields.prev
	}

	public set prev(value: writeQueue | $.VarRef<writeQueue> | null) {
		this._fields.prev = value
	}

	public get next(): writeQueue | $.VarRef<writeQueue> | null {
		return this._fields.next
	}

	public set next(value: writeQueue | $.VarRef<writeQueue> | null) {
		this._fields.next = value
	}

	public _fields: {
		s: $.Slice<FrameWriteRequest>
		prev: writeQueue | $.VarRef<writeQueue> | null
		next: writeQueue | $.VarRef<writeQueue> | null
	}

	constructor(init?: Partial<{s?: $.Slice<FrameWriteRequest>, prev?: writeQueue | $.VarRef<writeQueue> | null, next?: writeQueue | $.VarRef<writeQueue> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			s: init?.s ?? (null! as $.Slice<FrameWriteRequest>),
			prev: init?.prev ?? (null! as writeQueue | $.VarRef<writeQueue> | null),
			next: init?.next ?? (null! as writeQueue | $.VarRef<writeQueue> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): writeQueue {
		return new writeQueue(this, true)
	}

	public __goscriptAssign(source: writeQueue): void {
		const target = this._fields
		const values = source._fields
		target.s = values.s
		target.prev = values.prev
		target.next = values.next
	}

	public consume(n: number): [FrameWriteRequest, boolean] {
		let q: writeQueue | $.VarRef<writeQueue> | null = this;
		const q$: writeQueue = q == null ? $.pointerTarget<writeQueue>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<writeQueue>(q)
		if ($.sliceLen((q$ as writeQueue).s) == 0) {
			return [new FrameWriteRequest(undefined, true), false]
		}
		let [consumed, rest, numresult] = $.markAsStructValue($.cloneStructValue($.arrayIndex((q$ as writeQueue).s!, 0))).Consume(n)
		switch (numresult) {
			case 0:
			{
				return [new FrameWriteRequest(undefined, true), false]
				break
			}
			case 1:
			{
				void (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as writeQueue).shift() : writeQueue.prototype.shift.call(q))
				break
			}
			case 2:
			{
				$.assignStruct($.sliceElems((q$ as writeQueue).s!)[$.sliceSlot((q$ as writeQueue).s!, 0)], rest)
				break
			}
		}
		return [(consumed).clone(), true]
	}

	public empty(): boolean {
		const q: writeQueue | $.VarRef<writeQueue> | null = this;
		return $.sliceLen($.pointerValue<writeQueue>(q).s) == 0
	}

	public push(wr: FrameWriteRequest): void {
		let q: writeQueue | $.VarRef<writeQueue> | null = this;
		const q$: writeQueue = q == null ? $.pointerTarget<writeQueue>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<writeQueue>(q);
		;(q$ as writeQueue).s = $.appendOne((q$ as writeQueue).s, (wr).clone())
	}

	public shift(): FrameWriteRequest {
		let q: writeQueue | $.VarRef<writeQueue> | null = this;
		const q$: writeQueue = q == null ? $.pointerTarget<writeQueue>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<writeQueue>(q)
		if ($.sliceLen((q$ as writeQueue).s) == 0) {
			$.panic("invalid use of queue")
		}
		let wr = ($.arrayIndex((q$ as writeQueue).s!, 0)).clone()
		// TODO: less copy-happy queue.
		$.copy((q$ as writeQueue).s, $.goSlice((q$ as writeQueue).s, 1, undefined))
		$.assignStruct($.sliceElems((q$ as writeQueue).s!)[$.sliceSlot((q$ as writeQueue).s!, $.sliceLen((q$ as writeQueue).s) - 1)], new FrameWriteRequest(undefined, true));
		;(q$ as writeQueue).s = $.goSlice((q$ as writeQueue).s, undefined, $.sliceLen((q$ as writeQueue).s) - 1)
		return (wr).clone()
	}

	static __typeInfo = $.registerStructType(
		"http2.writeQueue",
		() => new writeQueue(),
		() => [$.methodSignature("consume", [["n", /* @__PURE__ */ $.basicType("int32")]], ["http2.FrameWriteRequest", /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("empty", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("push", [["wr", "http2.FrameWriteRequest"]], [], true), $.methodSignature("shift", [], ["http2.FrameWriteRequest"], true)],
		writeQueue,
		() => [/* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.sliceType("http2.FrameWriteRequest"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("prev", /* @__PURE__ */ $.pointerType("http2.writeQueue"), [1], 24, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("next", /* @__PURE__ */ $.pointerType("http2.writeQueue"), [2], 32, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export function writeQueuePool_put(p: $.VarRef<writeQueuePool> | null, q: writeQueue | $.VarRef<writeQueue> | null): void {
	const q$: writeQueue = q == null ? $.pointerTarget<writeQueue>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<writeQueue>(q)
	for (let __goscriptRangeTarget0 = (q$ as writeQueue).s, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		$.assignStruct($.sliceElems((q$ as writeQueue).s!)[$.sliceSlot((q$ as writeQueue).s!, i)], new FrameWriteRequest(undefined, true))
	}
	;(q$ as writeQueue).s = $.goSlice((q$ as writeQueue).s, undefined, 0)
	p!.value = ($.appendOne(($.pointerValue<writeQueuePool>(p) as writeQueuePool), q, $.appendZeros.nil) as writeQueuePool)
}

export function writeQueuePool__get(p: $.VarRef<writeQueuePool> | null): writeQueue | $.VarRef<writeQueue> | null {
	let ln = $.sliceLen(($.pointerValue<writeQueuePool>(p) as writeQueuePool))
	if (ln == 0) {
		return new writeQueue()
	}
	let x = ln - 1
	let q: writeQueue | $.VarRef<writeQueue> | null = $.arrayIndex(($.pointerValue<writeQueuePool>(p))!, x)
	$.sliceElems(($.pointerValue<writeQueuePool>(p))!)[$.sliceSlot(($.pointerValue<writeQueuePool>(p))!, x)] = null
	p!.value = ($.goSlice(($.pointerValue<writeQueuePool>(p)), undefined, x) as writeQueuePool)
	return q
}

var __goscriptAwait: any
