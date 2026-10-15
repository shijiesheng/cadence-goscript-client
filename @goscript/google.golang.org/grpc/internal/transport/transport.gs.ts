// Generated file based on transport.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as codes from "@goscript/google.golang.org/grpc/codes/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as channelz from "@goscript/google.golang.org/grpc/internal/channelz/index.js"

import * as keepalive from "@goscript/google.golang.org/grpc/keepalive/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as peer from "@goscript/google.golang.org/grpc/peer/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as stats from "@goscript/google.golang.org/grpc/stats/index.js"

import * as status2 from "@goscript/google.golang.org/grpc/status/index.js"

import * as tap from "@goscript/google.golang.org/grpc/tap/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as http2 from "@goscript/golang.org/x/net/http2/index.js"

import * as hpack from "@goscript/golang.org/x/net/http2/hpack/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/internal/grpclog/index.js"

import * as status3 from "@goscript/google.golang.org/grpc/internal/status/index.js"

import * as __goscript_bdp_estimator from "./bdp_estimator.gs.ts"

import * as __goscript_controlbuf from "./controlbuf.gs.ts"

import * as __goscript_flowcontrol from "./flowcontrol.gs.ts"

import * as __goscript_http2_client from "./http2_client.gs.ts"

import * as __goscript_http2_server from "./http2_server.gs.ts"

import * as __goscript_http_util from "./http_util.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/net/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/grpc/codes/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/internal/channelz/index.js"
import "@goscript/google.golang.org/grpc/keepalive/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"
import "@goscript/google.golang.org/grpc/peer/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/stats/index.js"
import "@goscript/google.golang.org/grpc/status/index.js"
import "@goscript/google.golang.org/grpc/tap/index.js"
import "@goscript/bytes/index.js"
import "@goscript/golang.org/x/net/http2/index.js"
import "@goscript/golang.org/x/net/http2/hpack/index.js"
import "@goscript/google.golang.org/grpc/internal/grpclog/index.js"
import "@goscript/google.golang.org/grpc/internal/status/index.js"
import "./bdp_estimator.gs.ts"
import "./controlbuf.gs.ts"
import "./flowcontrol.gs.ts"
import "./http2_client.gs.ts"
import "./http2_server.gs.ts"
import "./http_util.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/internal/transport", ["transport.recvMsg", "transport.recvBuffer", "transport.recvBufferReader", "transport.streamState", "transport.Stream", "transport.transportReader", "transport.transportState", "transport.ServerConfig", "transport.ConnectOptions", "transport.Options", "transport.CallHdr", "transport.ClientTransport", "transport.ServerTransport", "transport.ConnectionError", "transport.GoAwayReason"])

export type streamState = number

export type transportState = number

export type ClientTransport = {
	Close(err: $.GoError): void
	CloseStream(stream: Stream | $.VarRef<Stream> | null, err: $.GoError): void
	Error(): $.Channel<{}> | null | globalThis.Promise<$.Channel<{}> | null>
	GetGoAwayReason(): [GoAwayReason, string] | globalThis.Promise<[GoAwayReason, string]>
	GoAway(): $.Channel<{}> | null
	GracefulClose(): void
	IncrMsgRecv(): void
	IncrMsgSent(): void
	NewStream(ctx: context.Context | null, callHdr: CallHdr | $.VarRef<CallHdr> | null): [Stream | $.VarRef<Stream> | null, $.GoError] | globalThis.Promise<[Stream | $.VarRef<Stream> | null, $.GoError]>
	RemoteAddr(): net.Addr | null
	Write(s: Stream | $.VarRef<Stream> | null, hdr: $.Slice<number>, data: mem.BufferSlice, opts: Options | $.VarRef<Options> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"transport.ClientTransport",
	null,
	[$.methodSignature("Close", [["err", "error"]]), $.methodSignature("CloseStream", [["stream", /* @__PURE__ */ $.pointerType("transport.Stream")], ["err", "error"]]), $.methodSignature("Error", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")]), $.methodSignature("GetGoAwayReason", [], [/* @__PURE__ */ $.basicType("uint8", "transport.GoAwayReason"), /* @__PURE__ */ $.basicType("string")]), $.methodSignature("GoAway", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")]), $.methodSignature("GracefulClose"), $.methodSignature("IncrMsgRecv"), $.methodSignature("IncrMsgSent"), $.methodSignature("NewStream", [["ctx", "context.Context"], ["callHdr", /* @__PURE__ */ $.pointerType("transport.CallHdr")]], [/* @__PURE__ */ $.pointerType("transport.Stream"), "error"]), $.methodSignature("RemoteAddr", [], ["net.Addr"]), $.methodSignature("Write", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")], ["hdr", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["data", /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice")], ["opts", /* @__PURE__ */ $.pointerType("transport.Options")]], ["error"])]
);

export type ServerTransport = {
	Close(err: $.GoError): void
	Drain(debugData: string): void
	HandleStreams(_p0: context.Context | null, _p1: ((_p0: Stream | $.VarRef<Stream> | null) => void) | null): void
	IncrMsgRecv(): void
	IncrMsgSent(): void
	Peer(): peer.Peer | $.VarRef<peer.Peer> | null
	Write(s: Stream | $.VarRef<Stream> | null, hdr: $.Slice<number>, data: mem.BufferSlice, opts: Options | $.VarRef<Options> | null): $.GoError | globalThis.Promise<$.GoError>
	WriteHeader(s: Stream | $.VarRef<Stream> | null, md: metadata.MD): $.GoError | globalThis.Promise<$.GoError>
	WriteStatus(s: Stream | $.VarRef<Stream> | null, st: status3.Status | $.VarRef<status3.Status> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"transport.ServerTransport",
	null,
	[$.methodSignature("Close", [["err", "error"]]), $.methodSignature("Drain", [["debugData", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("HandleStreams", ["context.Context", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("transport.Stream")], results: [] } as $.FunctionTypeInfo)]), $.methodSignature("IncrMsgRecv"), $.methodSignature("IncrMsgSent"), $.methodSignature("Peer", [], [/* @__PURE__ */ $.pointerType("peer.Peer")]), $.methodSignature("Write", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")], ["hdr", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["data", /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice")], ["opts", /* @__PURE__ */ $.pointerType("transport.Options")]], ["error"]), $.methodSignature("WriteHeader", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")], ["md", "metadata.MD"]], ["error"]), $.methodSignature("WriteStatus", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")], ["st", /* @__PURE__ */ $.pointerType("status.Status")]], ["error"])]
);

export type GoAwayReason = number

export class recvMsg {
	public get buffer(): mem.Buffer | null {
		return this._fields.buffer
	}

	public set buffer(value: mem.Buffer | null) {
		this._fields.buffer = value
	}

	// nil: received some data
	// io.EOF: stream is completed. data is nil.
	// other non-nil error: transport failure. data is nil.
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		buffer: mem.Buffer | null
		err: $.GoError
	}

	constructor(init?: Partial<{buffer?: mem.Buffer | null, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			buffer: init?.buffer ?? (null! as mem.Buffer | null),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): recvMsg {
		return new recvMsg(this, true)
	}

	public __goscriptAssign(source: recvMsg): void {
		const target = this._fields
		const values = source._fields
		target.buffer = $.assignFieldValue(target.buffer, values.buffer, "mem.Buffer")
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	static __typeInfo = $.registerStructType(
		"transport.recvMsg",
		() => new recvMsg(),
		() => [],
		recvMsg,
		() => [/* @__PURE__ */ $.structField("buffer", "mem.Buffer", [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("err", "error", [1], 16, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class recvBuffer {
	public get c(): $.Channel<recvMsg> | null {
		return this._fields.c
	}

	public set c(value: $.Channel<recvMsg> | null) {
		this._fields.c = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get backlog(): $.Slice<recvMsg> {
		return this._fields.backlog
	}

	public set backlog(value: $.Slice<recvMsg>) {
		this._fields.backlog = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		c: $.Channel<recvMsg> | null
		mu: sync.Mutex
		backlog: $.Slice<recvMsg>
		err: $.GoError
	}

	constructor(init?: Partial<{c?: $.Channel<recvMsg> | null, mu?: sync.Mutex, backlog?: $.Slice<recvMsg>, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			c: init?.c ?? (null! as $.Channel<recvMsg> | null),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			backlog: init?.backlog ?? (null! as $.Slice<recvMsg>),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): recvBuffer {
		return new recvBuffer(this, true)
	}

	public __goscriptAssign(source: recvBuffer): void {
		const target = this._fields
		const values = source._fields
		target.c = values.c
		$.assignStruct(target.mu, values.mu)
		target.backlog = values.backlog
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public ["get"](): $.Channel<recvMsg> | null {
		const b: recvBuffer | $.VarRef<recvBuffer> | null = this;
		return $.pointerValue<recvBuffer>(b).c
	}

	public async load(): globalThis.Promise<void> {
		let b: recvBuffer | $.VarRef<recvBuffer> | null = this;
		const b$: recvBuffer = b == null ? $.pointerTarget<recvBuffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<recvBuffer>(b)
		await (b$ as recvBuffer).mu.Lock()
		if ($.sliceLen((b$ as recvBuffer).backlog) > 0) {
			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: true,
					channel: (b$ as recvBuffer).c,
					value: $.arrayIndex((b$ as recvBuffer).backlog!, 0).clone(),
					onSelected: async (__goscriptSelect0Result) => {
						$.assignStruct($.sliceElems((b$ as recvBuffer).backlog!)[$.sliceSlot((b$ as recvBuffer).backlog!, 0)], new recvMsg(undefined, true));
						;(b$ as recvBuffer).backlog = $.goSlice((b$ as recvBuffer).backlog, 1, undefined)
					}
				},
				{
					id: -1,
					isSend: false,
					channel: null,
				}
			], true)
			if (__goscriptSelect0HasReturn) {
				return __goscriptSelect0Value
			}
		}
		void (b$ as recvBuffer).mu.Unlock()
	}

	public async put(r: recvMsg): globalThis.Promise<void> {
		let b: recvBuffer | $.VarRef<recvBuffer> | null = this;
		const b$: recvBuffer = b == null ? $.pointerTarget<recvBuffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<recvBuffer>(b)
		await (b$ as recvBuffer).mu.Lock()
		if ((b$ as recvBuffer).err != null) {
			// drop the buffer on the floor. Since b.err is not nil, any subsequent reads
			// will always return an error, making this buffer inaccessible.
			void (__goscriptAwait = $.pointerValue<Exclude<mem.Buffer, null>>(r.buffer).Free(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (b$ as recvBuffer).mu.Unlock()
			// An error had occurred earlier, don't accept more
			// data or errors.
			return
		}
		;(b$ as recvBuffer).err = r.err
		if ($.sliceLen((b$ as recvBuffer).backlog) == 0) {
			const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: true,
					channel: (b$ as recvBuffer).c,
					value: r,
					onSelected: async (__goscriptSelect1Result) => {
						void (b$ as recvBuffer).mu.Unlock()
						return $.selectVoidReturn()
					}
				},
				{
					id: -1,
					isSend: false,
					channel: null,
				}
			], true)
			if (__goscriptSelect1HasReturn) {
				return __goscriptSelect1Value
			}
		}
		;(b$ as recvBuffer).backlog = $.appendOne((b$ as recvBuffer).backlog, (r).clone())
		void (b$ as recvBuffer).mu.Unlock()
	}

	static __typeInfo = $.registerStructType(
		"transport.recvBuffer",
		() => new recvBuffer(),
		() => [$.methodSignature("get", [], [/* @__PURE__ */ $.channelType("transport.recvMsg", "receive")], true), $.methodSignature("load", [], [], true), $.methodSignature("put", [["r", "transport.recvMsg"]], [], true)],
		recvBuffer,
		() => [/* @__PURE__ */ $.structField("c", /* @__PURE__ */ $.channelType("transport.recvMsg", "both"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("backlog", /* @__PURE__ */ $.sliceType("transport.recvMsg"), [2], 16, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("err", "error", [3], 40, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class recvBufferReader {
	public get closeStream(): ((_p0: $.GoError) => void) | null {
		return this._fields.closeStream
	}

	public set closeStream(value: ((_p0: $.GoError) => void) | null) {
		this._fields.closeStream = value
	}

	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get ctxDone(): $.Channel<{}> | null {
		return this._fields.ctxDone
	}

	public set ctxDone(value: $.Channel<{}> | null) {
		this._fields.ctxDone = value
	}

	public get recv(): recvBuffer | $.VarRef<recvBuffer> | null {
		return this._fields.recv
	}

	public set recv(value: recvBuffer | $.VarRef<recvBuffer> | null) {
		this._fields.recv = value
	}

	public get last(): mem.Buffer | null {
		return this._fields.last
	}

	public set last(value: mem.Buffer | null) {
		this._fields.last = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		closeStream: ((_p0: $.GoError) => void) | null
		ctx: context.Context | null
		ctxDone: $.Channel<{}> | null
		recv: recvBuffer | $.VarRef<recvBuffer> | null
		last: mem.Buffer | null
		err: $.GoError
	}

	constructor(init?: Partial<{closeStream?: ((_p0: $.GoError) => void) | null, ctx?: context.Context | null, ctxDone?: $.Channel<{}> | null, recv?: recvBuffer | $.VarRef<recvBuffer> | null, last?: mem.Buffer | null, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			closeStream: init?.closeStream ?? (null! as ((_p0: $.GoError) => void) | null),
			ctx: init?.ctx ?? (null! as context.Context | null),
			ctxDone: init?.ctxDone ?? (null! as $.Channel<{}> | null),
			recv: init?.recv ?? (null! as recvBuffer | $.VarRef<recvBuffer> | null),
			last: init?.last ?? (null! as mem.Buffer | null),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): recvBufferReader {
		return new recvBufferReader(this, true)
	}

	public __goscriptAssign(source: recvBufferReader): void {
		const target = this._fields
		const values = source._fields
		target.closeStream = values.closeStream
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.ctxDone = values.ctxDone
		target.recv = values.recv
		target.last = $.assignFieldValue(target.last, values.last, "mem.Buffer")
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async Read(n: number): globalThis.Promise<[mem.Buffer | null, $.GoError]> {
		let r: recvBufferReader | $.VarRef<recvBufferReader> | null = this;
		let buf: mem.Buffer | null = null! as mem.Buffer | null
		let err: $.GoError = null! as $.GoError
		const r$: recvBufferReader = r == null ? $.pointerTarget<recvBufferReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<recvBufferReader>(r)
		if ((r$ as recvBufferReader).err != null) {
			return [null, (r$ as recvBufferReader).err]
		}
		if ((r$ as recvBufferReader).last != null) {
			buf = (r$ as recvBufferReader).last
			if ((__goscriptAwait = $.pointerValue<Exclude<mem.Buffer, null>>((r$ as recvBufferReader).last).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > n) {
				let __goscriptTuple0: any = await mem.SplitUnsafe(buf, n)
				buf = __goscriptTuple0[0];
				;(r$ as recvBufferReader).last = __goscriptTuple0[1]
			} else {
				;(r$ as recvBufferReader).last = null
			}
			return [buf, null]
		}
		if ((r$ as recvBufferReader).closeStream != null) {
			let __goscriptTuple1: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as recvBufferReader).readClient(n) : recvBufferReader.prototype.readClient.call(r, n))
			buf = __goscriptTuple1[0];
			;(r$ as recvBufferReader).err = __goscriptTuple1[1]
		} else {
			let __goscriptTuple2: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as recvBufferReader).read(n) : recvBufferReader.prototype.read.call(r, n))
			buf = __goscriptTuple2[0];
			;(r$ as recvBufferReader).err = __goscriptTuple2[1]
		}
		return [buf, (r$ as recvBufferReader).err]
	}

	public async ReadHeader(header: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let r: recvBufferReader | $.VarRef<recvBufferReader> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const r$: recvBufferReader = r == null ? $.pointerTarget<recvBufferReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<recvBufferReader>(r)
		if ((r$ as recvBufferReader).err != null) {
			return [0, (r$ as recvBufferReader).err]
		}
		if ((r$ as recvBufferReader).last != null) {
			let __goscriptTuple3: any = await mem.ReadUnsafe(header, (r$ as recvBufferReader).last)
			n = __goscriptTuple3[0];
			;(r$ as recvBufferReader).last = __goscriptTuple3[1]
			return [n, null]
		}
		if ((r$ as recvBufferReader).closeStream != null) {
			let __goscriptTuple4: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as recvBufferReader).readHeaderClient(header) : recvBufferReader.prototype.readHeaderClient.call(r, header))
			n = __goscriptTuple4[0];
			;(r$ as recvBufferReader).err = __goscriptTuple4[1]
		} else {
			let __goscriptTuple5: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as recvBufferReader).readHeader(header) : recvBufferReader.prototype.readHeader.call(r, header))
			n = __goscriptTuple5[0];
			;(r$ as recvBufferReader).err = __goscriptTuple5[1]
		}
		return [n, (r$ as recvBufferReader).err]
	}

	public async read(n: number): globalThis.Promise<[mem.Buffer | null, $.GoError]> {
		const r: recvBufferReader | $.VarRef<recvBufferReader> | null = this;
		let buf: mem.Buffer | null = null! as mem.Buffer | null
		let err: $.GoError = null! as $.GoError
		const r$: recvBufferReader = r == null ? $.pointerTarget<recvBufferReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<recvBufferReader>(r)
		const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, [mem.Buffer | null, $.GoError]>([
			{
				id: 0,
				isSend: false,
				channel: (r$ as recvBufferReader).ctxDone,
				onSelected: async (__goscriptSelect2Result) => {
					return [null, await ContextErr((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((r$ as recvBufferReader).ctx).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]
				}
			},
			{
				id: 1,
				isSend: false,
				channel: recvBuffer.prototype.get.call((r$ as recvBufferReader).recv),
				onSelected: async (__goscriptSelect2Result) => {
					let m = __goscriptSelect2Result.value
					return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as recvBufferReader).readAdditional((m).clone(), n) : recvBufferReader.prototype.readAdditional.call(r, (m).clone(), n))
				}
			}
		], false)
		if (__goscriptSelect2HasReturn) {
			return __goscriptSelect2Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async readAdditional(m: recvMsg, n: number): globalThis.Promise<[mem.Buffer | null, $.GoError]> {
		let r: recvBufferReader | $.VarRef<recvBufferReader> | null = this;
		let b: mem.Buffer | null = null! as mem.Buffer | null
		let err: $.GoError = null! as $.GoError
		const r$: recvBufferReader = r == null ? $.pointerTarget<recvBufferReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<recvBufferReader>(r)
		await recvBuffer.prototype.load.call((r$ as recvBufferReader).recv)
		if (m.err != null) {
			if (m.buffer != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<mem.Buffer, null>>(m.buffer).Free(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return [null, m.err]
		}

		if ((__goscriptAwait = $.pointerValue<Exclude<mem.Buffer, null>>(m.buffer).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > n) {
			let __goscriptTuple6: any = await mem.SplitUnsafe(m.buffer, n)
			m.buffer = __goscriptTuple6[0];
			;(r$ as recvBufferReader).last = __goscriptTuple6[1]
		}

		return [m.buffer, null]
	}

	public async readClient(n: number): globalThis.Promise<[mem.Buffer | null, $.GoError]> {
		const r: recvBufferReader | $.VarRef<recvBufferReader> | null = this;
		let buf: mem.Buffer | null = null! as mem.Buffer | null
		let err: $.GoError = null! as $.GoError
		const r$: recvBufferReader = r == null ? $.pointerTarget<recvBufferReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<recvBufferReader>(r)
		// If the context is canceled, then closes the stream with nil metadata.
		// closeStream writes its error parameter to r.recv as a recvMsg.
		// r.readAdditional acts on that message and returns the necessary error.
		const [__goscriptSelect3HasReturn, __goscriptSelect3Value] = await $.selectStatement<any, [mem.Buffer | null, $.GoError]>([
			{
				id: 0,
				isSend: false,
				channel: (r$ as recvBufferReader).ctxDone,
				onSelected: async (__goscriptSelect3Result) => {
					void (__goscriptAwait = (r$ as recvBufferReader).closeStream!(await ContextErr((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((r$ as recvBufferReader).ctx).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					let m = await $.chanRecv(recvBuffer.prototype.get.call((r$ as recvBufferReader).recv))
					return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as recvBufferReader).readAdditional((m).clone(), n) : recvBufferReader.prototype.readAdditional.call(r, (m).clone(), n))
				}
			},
			{
				id: 1,
				isSend: false,
				channel: recvBuffer.prototype.get.call((r$ as recvBufferReader).recv),
				onSelected: async (__goscriptSelect3Result) => {
					let m = __goscriptSelect3Result.value
					return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as recvBufferReader).readAdditional((m).clone(), n) : recvBufferReader.prototype.readAdditional.call(r, (m).clone(), n))
				}
			}
		], false)
		if (__goscriptSelect3HasReturn) {
			return __goscriptSelect3Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async readHeader(header: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const r: recvBufferReader | $.VarRef<recvBufferReader> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const r$: recvBufferReader = r == null ? $.pointerTarget<recvBufferReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<recvBufferReader>(r)
		const [__goscriptSelect4HasReturn, __goscriptSelect4Value] = await $.selectStatement<any, [number, $.GoError]>([
			{
				id: 0,
				isSend: false,
				channel: (r$ as recvBufferReader).ctxDone,
				onSelected: async (__goscriptSelect4Result) => {
					return [0, await ContextErr((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((r$ as recvBufferReader).ctx).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]
				}
			},
			{
				id: 1,
				isSend: false,
				channel: recvBuffer.prototype.get.call((r$ as recvBufferReader).recv),
				onSelected: async (__goscriptSelect4Result) => {
					let m = __goscriptSelect4Result.value
					return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as recvBufferReader).readHeaderAdditional(m, header) : recvBufferReader.prototype.readHeaderAdditional.call(r, m, header))
				}
			}
		], false)
		if (__goscriptSelect4HasReturn) {
			return __goscriptSelect4Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async readHeaderAdditional(m: recvMsg, header: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let r: recvBufferReader | $.VarRef<recvBufferReader> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const r$: recvBufferReader = r == null ? $.pointerTarget<recvBufferReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<recvBufferReader>(r)
		await recvBuffer.prototype.load.call((r$ as recvBufferReader).recv)
		if (m.err != null) {
			if (m.buffer != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<mem.Buffer, null>>(m.buffer).Free(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return [0, m.err]
		}

		let __goscriptTuple7: any = await mem.ReadUnsafe(header, m.buffer)
		n = __goscriptTuple7[0];
		;(r$ as recvBufferReader).last = __goscriptTuple7[1]

		return [n, null]
	}

	public async readHeaderClient(header: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const r: recvBufferReader | $.VarRef<recvBufferReader> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const r$: recvBufferReader = r == null ? $.pointerTarget<recvBufferReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<recvBufferReader>(r)
		// If the context is canceled, then closes the stream with nil metadata.
		// closeStream writes its error parameter to r.recv as a recvMsg.
		// r.readAdditional acts on that message and returns the necessary error.
		const [__goscriptSelect5HasReturn, __goscriptSelect5Value] = await $.selectStatement<any, [number, $.GoError]>([
			{
				id: 0,
				isSend: false,
				channel: (r$ as recvBufferReader).ctxDone,
				onSelected: async (__goscriptSelect5Result) => {
					void (__goscriptAwait = (r$ as recvBufferReader).closeStream!(await ContextErr((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((r$ as recvBufferReader).ctx).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					let m = await $.chanRecv(recvBuffer.prototype.get.call((r$ as recvBufferReader).recv))
					return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as recvBufferReader).readHeaderAdditional(m, header) : recvBufferReader.prototype.readHeaderAdditional.call(r, m, header))
				}
			},
			{
				id: 1,
				isSend: false,
				channel: recvBuffer.prototype.get.call((r$ as recvBufferReader).recv),
				onSelected: async (__goscriptSelect5Result) => {
					let m = __goscriptSelect5Result.value
					return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as recvBufferReader).readHeaderAdditional(m, header) : recvBufferReader.prototype.readHeaderAdditional.call(r, m, header))
				}
			}
		], false)
		if (__goscriptSelect5HasReturn) {
			return __goscriptSelect5Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"transport.recvBufferReader",
		() => new recvBufferReader(),
		() => [$.methodSignature("Read", [["n", /* @__PURE__ */ $.basicType("int")]], [["buf", "mem.Buffer"], ["err", "error"]], true), $.methodSignature("ReadHeader", [["header", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("read", [["n", /* @__PURE__ */ $.basicType("int")]], [["buf", "mem.Buffer"], ["err", "error"]], true), $.methodSignature("readAdditional", [["m", "transport.recvMsg"], ["n", /* @__PURE__ */ $.basicType("int")]], [["b", "mem.Buffer"], ["err", "error"]], true), $.methodSignature("readClient", [["n", /* @__PURE__ */ $.basicType("int")]], [["buf", "mem.Buffer"], ["err", "error"]], true), $.methodSignature("readHeader", [["header", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("readHeaderAdditional", [["m", "transport.recvMsg"], ["header", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("readHeaderClient", [["header", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		recvBufferReader,
		() => [/* @__PURE__ */ $.structField("closeStream", ({ kind: $.TypeKind.Function, params: ["error"], results: [] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("ctx", "context.Context", [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("ctxDone", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive"), [2], 24, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("recv", /* @__PURE__ */ $.pointerType("transport.recvBuffer"), [3], 32, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("last", "mem.Buffer", [4], 40, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("err", "error", [5], 56, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class Stream {
	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public get st(): ServerTransport | null {
		return this._fields.st
	}

	public set st(value: ServerTransport | null) {
		this._fields.st = value
	}

	public get ct(): ClientTransport | null {
		return this._fields.ct
	}

	public set ct(value: ClientTransport | null) {
		this._fields.ct = value
	}

	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get cancel(): (() => void) | null {
		return this._fields.cancel
	}

	public set cancel(value: (() => void) | null) {
		this._fields.cancel = value
	}

	public get done(): $.Channel<{}> | null {
		return this._fields.done
	}

	public set done(value: $.Channel<{}> | null) {
		this._fields.done = value
	}

	public get doneFunc(): (() => void) | null {
		return this._fields.doneFunc
	}

	public set doneFunc(value: (() => void) | null) {
		this._fields.doneFunc = value
	}

	public get ctxDone(): $.Channel<{}> | null {
		return this._fields.ctxDone
	}

	public set ctxDone(value: $.Channel<{}> | null) {
		this._fields.ctxDone = value
	}

	public get method(): string {
		return this._fields.method
	}

	public set method(value: string) {
		this._fields.method = value
	}

	public get recvCompress(): string {
		return this._fields.recvCompress
	}

	public set recvCompress(value: string) {
		this._fields.recvCompress = value
	}

	public get sendCompress(): string {
		return this._fields.sendCompress
	}

	public set sendCompress(value: string) {
		this._fields.sendCompress = value
	}

	public get buf(): recvBuffer | $.VarRef<recvBuffer> | null {
		return this._fields.buf
	}

	public set buf(value: recvBuffer | $.VarRef<recvBuffer> | null) {
		this._fields.buf = value
	}

	public get trReader(): transportReader | $.VarRef<transportReader> | null {
		return this._fields.trReader
	}

	public set trReader(value: transportReader | $.VarRef<transportReader> | null) {
		this._fields.trReader = value
	}

	public get fc(): __goscript_flowcontrol.inFlow | $.VarRef<__goscript_flowcontrol.inFlow> | null {
		return this._fields.fc
	}

	public set fc(value: __goscript_flowcontrol.inFlow | $.VarRef<__goscript_flowcontrol.inFlow> | null) {
		this._fields.fc = value
	}

	public get wq(): __goscript_flowcontrol.writeQuota | $.VarRef<__goscript_flowcontrol.writeQuota> | null {
		return this._fields.wq
	}

	public set wq(value: __goscript_flowcontrol.writeQuota | $.VarRef<__goscript_flowcontrol.writeQuota> | null) {
		this._fields.wq = value
	}

	// Holds compressor names passed in grpc-accept-encoding metadata from the
	// client. This is empty for the client side stream.
	public get clientAdvertisedCompressors(): string {
		return this._fields.clientAdvertisedCompressors
	}

	public set clientAdvertisedCompressors(value: string) {
		this._fields.clientAdvertisedCompressors = value
	}

	// Callback to state application's intentions to read data. This
	// is used to adjust flow control, if needed.
	public get requestRead(): ((_p0: number) => void) | null {
		return this._fields.requestRead
	}

	public set requestRead(value: ((_p0: number) => void) | null) {
		this._fields.requestRead = value
	}

	public get headerChan(): $.Channel<{}> | null {
		return this._fields.headerChan
	}

	public set headerChan(value: $.Channel<{}> | null) {
		this._fields.headerChan = value
	}

	public get headerChanClosed(): number {
		return this._fields.headerChanClosed
	}

	public set headerChanClosed(value: number) {
		this._fields.headerChanClosed = value
	}

	// headerValid indicates whether a valid header was received.  Only
	// meaningful after headerChan is closed (always call waitOnHeader() before
	// reading its value).  Not valid on server side.
	public get headerValid(): boolean {
		return this._fields.headerValid
	}

	public set headerValid(value: boolean) {
		this._fields.headerValid = value
	}

	public get headerWireLength(): number {
		return this._fields.headerWireLength
	}

	public set headerWireLength(value: number) {
		this._fields.headerWireLength = value
	}

	// hdrMu protects header and trailer metadata on the server-side.
	public get hdrMu(): sync.Mutex {
		return this._fields.hdrMu
	}

	public set hdrMu(value: sync.Mutex) {
		this._fields.hdrMu = value
	}

	// On client side, header keeps the received header metadata.
	//
	// On server side, header keeps the header set by SetHeader(). The complete
	// header will merged into this after t.WriteHeader() is called.
	public get header(): metadata.MD {
		return this._fields.header
	}

	public set header(value: metadata.MD) {
		this._fields.header = value
	}

	public get trailer(): metadata.MD {
		return this._fields.trailer
	}

	public set trailer(value: metadata.MD) {
		this._fields.trailer = value
	}

	public get noHeaders(): boolean {
		return this._fields.noHeaders
	}

	public set noHeaders(value: boolean) {
		this._fields.noHeaders = value
	}

	// On the server-side, headerSent is atomically set to 1 when the headers are sent out.
	public get headerSent(): number {
		return this._fields.headerSent
	}

	public set headerSent(value: number) {
		this._fields.headerSent = value
	}

	public get state(): streamState {
		return this._fields.state
	}

	public set state(value: streamState) {
		this._fields.state = value
	}

	// On client-side it is the status error received from the server.
	// On server-side it is unused.
	public get status(): status3.Status | $.VarRef<status3.Status> | null {
		return this._fields.status
	}

	public set status(value: status3.Status | $.VarRef<status3.Status> | null) {
		this._fields.status = value
	}

	public get bytesReceived(): number {
		return this._fields.bytesReceived
	}

	public set bytesReceived(value: number) {
		this._fields.bytesReceived = value
	}

	public get unprocessed(): number {
		return this._fields.unprocessed
	}

	public set unprocessed(value: number) {
		this._fields.unprocessed = value
	}

	// contentSubtype is the content-subtype for requests.
	// this must be lowercase or the behavior is undefined.
	public get contentSubtype(): string {
		return this._fields.contentSubtype
	}

	public set contentSubtype(value: string) {
		this._fields.contentSubtype = value
	}

	public _fields: {
		id: number
		st: ServerTransport | null
		ct: ClientTransport | null
		ctx: context.Context | null
		cancel: (() => void) | null
		done: $.Channel<{}> | null
		doneFunc: (() => void) | null
		ctxDone: $.Channel<{}> | null
		method: string
		recvCompress: string
		sendCompress: string
		buf: recvBuffer | $.VarRef<recvBuffer> | null
		trReader: transportReader | $.VarRef<transportReader> | null
		fc: __goscript_flowcontrol.inFlow | $.VarRef<__goscript_flowcontrol.inFlow> | null
		wq: __goscript_flowcontrol.writeQuota | $.VarRef<__goscript_flowcontrol.writeQuota> | null
		clientAdvertisedCompressors: string
		requestRead: ((_p0: number) => void) | null
		headerChan: $.Channel<{}> | null
		headerChanClosed: number
		headerValid: boolean
		headerWireLength: number
		hdrMu: sync.Mutex
		header: metadata.MD
		trailer: metadata.MD
		noHeaders: boolean
		headerSent: number
		state: streamState
		status: status3.Status | $.VarRef<status3.Status> | null
		bytesReceived: number
		unprocessed: number
		contentSubtype: string
	}

	constructor(init?: Partial<{id?: number, st?: ServerTransport | null, ct?: ClientTransport | null, ctx?: context.Context | null, cancel?: (() => void) | null, done?: $.Channel<{}> | null, doneFunc?: (() => void) | null, ctxDone?: $.Channel<{}> | null, method?: string, recvCompress?: string, sendCompress?: string, buf?: recvBuffer | $.VarRef<recvBuffer> | null, trReader?: transportReader | $.VarRef<transportReader> | null, fc?: __goscript_flowcontrol.inFlow | $.VarRef<__goscript_flowcontrol.inFlow> | null, wq?: __goscript_flowcontrol.writeQuota | $.VarRef<__goscript_flowcontrol.writeQuota> | null, clientAdvertisedCompressors?: string, requestRead?: ((_p0: number) => void) | null, headerChan?: $.Channel<{}> | null, headerChanClosed?: number, headerValid?: boolean, headerWireLength?: number, hdrMu?: sync.Mutex, header?: metadata.MD, trailer?: metadata.MD, noHeaders?: boolean, headerSent?: number, state?: streamState, status?: status3.Status | $.VarRef<status3.Status> | null, bytesReceived?: number, unprocessed?: number, contentSubtype?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			id: init?.id ?? (0 as number),
			st: init?.st ?? (null! as ServerTransport | null),
			ct: init?.ct ?? (null! as ClientTransport | null),
			ctx: init?.ctx ?? (null! as context.Context | null),
			cancel: init?.cancel ?? (null! as (() => void) | null),
			done: init?.done ?? (null! as $.Channel<{}> | null),
			doneFunc: init?.doneFunc ?? (null! as (() => void) | null),
			ctxDone: init?.ctxDone ?? (null! as $.Channel<{}> | null),
			method: init?.method ?? ("" as string),
			recvCompress: init?.recvCompress ?? ("" as string),
			sendCompress: init?.sendCompress ?? ("" as string),
			buf: init?.buf ?? (null! as recvBuffer | $.VarRef<recvBuffer> | null),
			trReader: init?.trReader ?? (null! as transportReader | $.VarRef<transportReader> | null),
			fc: init?.fc ?? (null! as __goscript_flowcontrol.inFlow | $.VarRef<__goscript_flowcontrol.inFlow> | null),
			wq: init?.wq ?? (null! as __goscript_flowcontrol.writeQuota | $.VarRef<__goscript_flowcontrol.writeQuota> | null),
			clientAdvertisedCompressors: init?.clientAdvertisedCompressors ?? ("" as string),
			requestRead: init?.requestRead ?? (null! as ((_p0: number) => void) | null),
			headerChan: init?.headerChan ?? (null! as $.Channel<{}> | null),
			headerChanClosed: init?.headerChanClosed ?? (0 as number),
			headerValid: init?.headerValid ?? (false as boolean),
			headerWireLength: init?.headerWireLength ?? (0 as number),
			hdrMu: init?.hdrMu ? $.markAsStructValue($.cloneStructValue(init.hdrMu)) : $.markAsStructValue(new sync.Mutex()),
			header: init?.header ?? (null! as metadata.MD),
			trailer: init?.trailer ?? (null! as metadata.MD),
			noHeaders: init?.noHeaders ?? (false as boolean),
			headerSent: init?.headerSent ?? (0 as number),
			state: init?.state ?? (0 as streamState),
			status: init?.status ?? (null! as status3.Status | $.VarRef<status3.Status> | null),
			bytesReceived: init?.bytesReceived ?? (0 as number),
			unprocessed: init?.unprocessed ?? (0 as number),
			contentSubtype: init?.contentSubtype ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Stream {
		return new Stream(this, true)
	}

	public __goscriptAssign(source: Stream): void {
		const target = this._fields
		const values = source._fields
		target.id = values.id
		target.st = $.assignFieldValue(target.st, values.st, "transport.ServerTransport")
		target.ct = $.assignFieldValue(target.ct, values.ct, "transport.ClientTransport")
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.cancel = values.cancel
		target.done = values.done
		target.doneFunc = values.doneFunc
		target.ctxDone = values.ctxDone
		target.method = values.method
		target.recvCompress = values.recvCompress
		target.sendCompress = values.sendCompress
		target.buf = values.buf
		target.trReader = values.trReader
		target.fc = values.fc
		target.wq = values.wq
		target.clientAdvertisedCompressors = values.clientAdvertisedCompressors
		target.requestRead = values.requestRead
		target.headerChan = values.headerChan
		target.headerChanClosed = values.headerChanClosed
		target.headerValid = values.headerValid
		target.headerWireLength = values.headerWireLength
		$.assignStruct(target.hdrMu, values.hdrMu)
		target.header = values.header
		target.trailer = values.trailer
		target.noHeaders = values.noHeaders
		target.headerSent = values.headerSent
		target.state = values.state
		target.status = values.status
		target.bytesReceived = values.bytesReceived
		target.unprocessed = values.unprocessed
		target.contentSubtype = values.contentSubtype
	}

	public BytesReceived(): boolean {
		const s: Stream | $.VarRef<Stream> | null = this;
		return atomic.LoadUint32($.fieldRef($.pointerValue<Stream>(s)._fields, "bytesReceived")) == 1
	}

	public ClientAdvertisedCompressors(): $.Slice<string> {
		const s: Stream | $.VarRef<Stream> | null = this;
		let values: $.Slice<string> = strings.Split($.pointerValue<Stream>(s).clientAdvertisedCompressors, ",")
		for (let __goscriptRangeTarget0 = values, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let v = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as string);
			;(__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] = strings.TrimSpace(v)
		}
		return values
	}

	public ContentSubtype(): string {
		const s: Stream | $.VarRef<Stream> | null = this;
		return $.pointerValue<Stream>(s).contentSubtype
	}

	public Context(): context.Context | null {
		const s: Stream | $.VarRef<Stream> | null = this;
		return $.pointerValue<Stream>(s).ctx
	}

	public Done(): $.Channel<{}> | null {
		const s: Stream | $.VarRef<Stream> | null = this;
		return $.pointerValue<Stream>(s).done
	}

	public async GoString(): globalThis.Promise<string> {
		const s: Stream | $.VarRef<Stream> | null = this;
		return fmt.Sprintf("<stream: %p, %v>", $.interfaceValue(s, "*transport.Stream", /* @__PURE__ */ $.pointerType("transport.Stream")), $.pointerValue<Stream>(s).method)
	}

	public async Header(): globalThis.Promise<[metadata.MD, $.GoError]> {
		const s: Stream | $.VarRef<Stream> | null = this;
		const s$: Stream = s == null ? $.pointerTarget<Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Stream>(s)
		if ((s$ as Stream).headerChan == null) {
			// On server side, return the header in stream. It will be the out
			// header after t.WriteHeader is called.
			return [metadata.MD_Copy((s$ as Stream).header), null]
		}
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Stream).waitOnHeader() : Stream.prototype.waitOnHeader.call(s))

		if (!(s$ as Stream).headerValid || (s$ as Stream).noHeaders) {
			return [null, status3.Status.prototype.Err.call((s$ as Stream).status)]
		}

		return [metadata.MD_Copy((s$ as Stream).header), null]
	}

	public HeaderWireLength(): number {
		const s: Stream | $.VarRef<Stream> | null = this;
		return $.pointerValue<Stream>(s).headerWireLength
	}

	public Method(): string {
		const s: Stream | $.VarRef<Stream> | null = this;
		return $.pointerValue<Stream>(s).method
	}

	public async Read(n: number): globalThis.Promise<[mem.BufferSlice, $.GoError]> {
		const s: Stream | $.VarRef<Stream> | null = this;
		let data: mem.BufferSlice = null! as mem.BufferSlice
		let err: $.GoError = null! as $.GoError
		const s$: Stream = s == null ? $.pointerTarget<Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Stream>(s)
		// Don't request a read if there was an error earlier
		{
			let er = $.pointerValue<transportReader>((s$ as Stream).trReader).er
			if (er != null) {
				return [(null as mem.BufferSlice), er]
			}
		}
		void (__goscriptAwait = (s$ as Stream).requestRead!(n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		while (n != 0) {
			let [buf, __goscriptShadow0] = await transportReader.prototype.Read.call((s$ as Stream).trReader, n)
			let bufLen: number = 0
			if (buf != null) {
				bufLen = (__goscriptAwait = (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? (buf as Exclude<mem.Buffer, null>) : $.pointerValue<Exclude<mem.Buffer, null>>(buf)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			n = n - (bufLen)
			if (n == 0) {
				__goscriptShadow0 = null
			}
			if (__goscriptShadow0 != null) {
				if ((bufLen > 0) && ($.comparableEqual(__goscriptShadow0, io.EOF))) {
					__goscriptShadow0 = io.ErrUnexpectedEOF
				}
				await mem.BufferSlice_Free(data)
				return [(null as mem.BufferSlice), __goscriptShadow0]
			}
			data = ($.appendOne((data as mem.BufferSlice), buf, $.appendZeros.nil) as mem.BufferSlice)
		}
		return [(data as mem.BufferSlice), null]
	}

	public async ReadHeader(header: $.Slice<number>): globalThis.Promise<$.GoError> {
		const s: Stream | $.VarRef<Stream> | null = this;
		let err: $.GoError = null! as $.GoError
		const s$: Stream = s == null ? $.pointerTarget<Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Stream>(s)
		// Don't request a read if there was an error earlier
		{
			let er = $.pointerValue<transportReader>((s$ as Stream).trReader).er
			if (er != null) {
				return er
			}
		}
		void (__goscriptAwait = (s$ as Stream).requestRead!($.sliceLen(header)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		while ($.sliceLen(header) != 0) {
			let [n, __goscriptShadow1] = await transportReader.prototype.ReadHeader.call((s$ as Stream).trReader, header)
			header = $.goSlice(header, n, undefined)
			if ($.sliceLen(header) == 0) {
				__goscriptShadow1 = null
			}
			if (__goscriptShadow1 != null) {
				if ((n > 0) && ($.comparableEqual(__goscriptShadow1, io.EOF))) {
					__goscriptShadow1 = io.ErrUnexpectedEOF
				}
				return __goscriptShadow1
			}
		}
		return null
	}

	public async RecvCompress(): globalThis.Promise<string> {
		const s: Stream | $.VarRef<Stream> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Stream).waitOnHeader() : Stream.prototype.waitOnHeader.call(s))
		return $.pointerValue<Stream>(s).recvCompress
	}

	public SendCompress(): string {
		const s: Stream | $.VarRef<Stream> | null = this;
		return $.pointerValue<Stream>(s).sendCompress
	}

	public async SendHeader(md: metadata.MD): globalThis.Promise<$.GoError> {
		const s: Stream | $.VarRef<Stream> | null = this;
		return $.pointerValue<Exclude<ServerTransport, null>>($.pointerValue<Stream>(s).st).WriteHeader(s, md)
	}

	public SetContext(ctx: context.Context | null): void {
		let s: Stream | $.VarRef<Stream> | null = this;
		$.pointerValue<Stream>(s).ctx = ctx
	}

	public async SetHeader(md: metadata.MD): globalThis.Promise<$.GoError> {
		let s: Stream | $.VarRef<Stream> | null = this;
		const s$: Stream = s == null ? $.pointerTarget<Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Stream>(s)
		if (metadata.MD_Len(md) == 0) {
			return null
		}
		if ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Stream).isHeaderSent() : Stream.prototype.isHeaderSent.call(s)) || ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Stream).getState() : Stream.prototype.getState.call(s)) == 3)) {
			return __goscript_http2_server.ErrIllegalHeaderWrite
		}
		await (s$ as Stream).hdrMu.Lock();
		;(s$ as Stream).header = metadata.Join($.arrayToSlice<metadata.MD>([(s$ as Stream).header, md]))
		void (s$ as Stream).hdrMu.Unlock()
		return null
	}

	public SetSendCompress(name: string): $.GoError {
		let s: Stream | $.VarRef<Stream> | null = this;
		if ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Stream).isHeaderSent() : Stream.prototype.isHeaderSent.call(s)) || ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Stream).getState() : Stream.prototype.getState.call(s)) == 3)) {
			return errors.New("transport: set send compressor called after headers sent or stream done")
		}

		$.pointerValue<Stream>(s).sendCompress = name
		return null
	}

	public async SetTrailer(md: metadata.MD): globalThis.Promise<$.GoError> {
		let s: Stream | $.VarRef<Stream> | null = this;
		const s$: Stream = s == null ? $.pointerTarget<Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Stream>(s)
		if (metadata.MD_Len(md) == 0) {
			return null
		}
		if ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Stream).getState() : Stream.prototype.getState.call(s)) == 3) {
			return __goscript_http2_server.ErrIllegalHeaderWrite
		}
		await (s$ as Stream).hdrMu.Lock();
		;(s$ as Stream).trailer = metadata.Join($.arrayToSlice<metadata.MD>([(s$ as Stream).trailer, md]))
		void (s$ as Stream).hdrMu.Unlock()
		return null
	}

	public Status(): status3.Status | $.VarRef<status3.Status> | null {
		const s: Stream | $.VarRef<Stream> | null = this;
		return $.pointerValue<Stream>(s).status
	}

	public Trailer(): metadata.MD {
		const s: Stream | $.VarRef<Stream> | null = this;
		let c: metadata.MD = metadata.MD_Copy($.pointerValue<Stream>(s).trailer)
		return c
	}

	public async TrailersOnly(): globalThis.Promise<boolean> {
		const s: Stream | $.VarRef<Stream> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Stream).waitOnHeader() : Stream.prototype.waitOnHeader.call(s))
		return $.pointerValue<Stream>(s).noHeaders
	}

	public Unprocessed(): boolean {
		const s: Stream | $.VarRef<Stream> | null = this;
		return atomic.LoadUint32($.fieldRef($.pointerValue<Stream>(s)._fields, "unprocessed")) == 1
	}

	public compareAndSwapState(oldState: streamState, newState: streamState): boolean {
		const s: Stream | $.VarRef<Stream> | null = this;
		return atomic.CompareAndSwapUint32($.fieldRef($.pointerValue<Stream>(s)._fields, "state"), $.uint(oldState, 32), $.uint(newState, 32))
	}

	public getState(): streamState {
		const s: Stream | $.VarRef<Stream> | null = this;
		return $.uint(atomic.LoadUint32($.fieldRef($.pointerValue<Stream>(s)._fields, "state")), 32)
	}

	public isHeaderSent(): boolean {
		const s: Stream | $.VarRef<Stream> | null = this;
		return atomic.LoadUint32($.fieldRef($.pointerValue<Stream>(s)._fields, "headerSent")) == 1
	}

	public swapState(st: streamState): streamState {
		const s: Stream | $.VarRef<Stream> | null = this;
		return $.uint(atomic.SwapUint32($.fieldRef($.pointerValue<Stream>(s)._fields, "state"), $.uint(st, 32)), 32)
	}

	public updateHeaderSent(): boolean {
		const s: Stream | $.VarRef<Stream> | null = this;
		return atomic.SwapUint32($.fieldRef($.pointerValue<Stream>(s)._fields, "headerSent"), 1) == 1
	}

	public async waitOnHeader(): globalThis.Promise<void> {
		const s: Stream | $.VarRef<Stream> | null = this;
		const s$: Stream = s == null ? $.pointerTarget<Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Stream>(s)
		if ((s$ as Stream).headerChan == null) {
			// On the server headerChan is always nil since a stream originates
			// only after having received headers.
			return
		}
		const [__goscriptSelect6HasReturn, __goscriptSelect6Value] = await $.selectStatement<any, void>([
			{
				id: 0,
				isSend: false,
				channel: ((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((s$ as Stream).ctx).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect6Result) => {
					void (__goscriptAwait = $.pointerValue<Exclude<ClientTransport, null>>((s$ as Stream).ct).CloseStream(s, await ContextErr((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((s$ as Stream).ctx).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					// headerChan could possibly not be closed yet if closeStream raced
					// with operateHeaders; wait until it is closed explicitly here.
					await $.chanRecv((s$ as Stream).headerChan)
				}
			},
			{
				id: 1,
				isSend: false,
				channel: (s$ as Stream).headerChan,
			}
		], false)
		if (__goscriptSelect6HasReturn) {
			return __goscriptSelect6Value
		}
	}

	public async write(m: recvMsg): globalThis.Promise<void> {
		const s: Stream | $.VarRef<Stream> | null = this;
		await recvBuffer.prototype.put.call($.pointerValue<Stream>(s).buf, (m).clone())
	}

	static __typeInfo = $.registerStructType(
		"transport.Stream",
		() => new Stream(),
		() => [$.methodSignature("BytesReceived", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("ClientAdvertisedCompressors", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("ContentSubtype", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Context", [], ["context.Context"], true), $.methodSignature("Done", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")], true), $.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Header", [], ["metadata.MD", "error"], true), $.methodSignature("HeaderWireLength", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Method", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Read", [["n", /* @__PURE__ */ $.basicType("int")]], [["data", /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice")], ["err", "error"]], true), $.methodSignature("ReadHeader", [["header", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["err", "error"]], true), $.methodSignature("RecvCompress", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("SendCompress", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("SendHeader", [["md", "metadata.MD"]], ["error"], true), $.methodSignature("SetContext", [["ctx", "context.Context"]], [], true), $.methodSignature("SetHeader", [["md", "metadata.MD"]], ["error"], true), $.methodSignature("SetSendCompress", [["name", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("SetTrailer", [["md", "metadata.MD"]], ["error"], true), $.methodSignature("Status", [], [/* @__PURE__ */ $.pointerType("status.Status")], true), $.methodSignature("Trailer", [], ["metadata.MD"], true), $.methodSignature("TrailersOnly", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unprocessed", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("compareAndSwapState", [["oldState", /* @__PURE__ */ $.basicType("uint32", "transport.streamState")], ["newState", /* @__PURE__ */ $.basicType("uint32", "transport.streamState")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getState", [], [/* @__PURE__ */ $.basicType("uint32", "transport.streamState")], true), $.methodSignature("isHeaderSent", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("swapState", [["st", /* @__PURE__ */ $.basicType("uint32", "transport.streamState")]], [/* @__PURE__ */ $.basicType("uint32", "transport.streamState")], true), $.methodSignature("updateHeaderSent", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("waitOnHeader", [], [], true), $.methodSignature("write", [["m", "transport.recvMsg"]], [], true)],
		Stream,
		() => [/* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("st", "transport.ServerTransport", [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("ct", "transport.ClientTransport", [2], 24, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("ctx", "context.Context", [3], 40, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("cancel", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), [4], 56, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("done", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [5], 64, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("doneFunc", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [6], 72, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("ctxDone", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive"), [7], 80, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("method", /* @__PURE__ */ $.basicType("string"), [8], 88, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("recvCompress", /* @__PURE__ */ $.basicType("string"), [9], 104, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("sendCompress", /* @__PURE__ */ $.basicType("string"), [10], 120, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.pointerType("transport.recvBuffer"), [11], 136, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("trReader", /* @__PURE__ */ $.pointerType("transport.transportReader"), [12], 144, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("fc", /* @__PURE__ */ $.pointerType("transport.inFlow"), [13], 152, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("wq", /* @__PURE__ */ $.pointerType("transport.writeQuota"), [14], 160, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("clientAdvertisedCompressors", /* @__PURE__ */ $.basicType("string"), [15], 168, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("requestRead", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo), [16], 184, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("headerChan", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [17], 192, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("headerChanClosed", /* @__PURE__ */ $.basicType("uint32"), [18], 200, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("headerValid", /* @__PURE__ */ $.basicType("bool"), [19], 204, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("headerWireLength", /* @__PURE__ */ $.basicType("int"), [20], 208, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("hdrMu", "sync.Mutex", [21], 216, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("header", "metadata.MD", [22], 224, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("trailer", "metadata.MD", [23], 232, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("noHeaders", /* @__PURE__ */ $.basicType("bool"), [24], 240, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("headerSent", /* @__PURE__ */ $.basicType("uint32"), [25], 244, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("uint32", "transport.streamState"), [26], 248, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("status", /* @__PURE__ */ $.pointerType("status.Status"), [27], 256, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("bytesReceived", /* @__PURE__ */ $.basicType("uint32"), [28], 264, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("unprocessed", /* @__PURE__ */ $.basicType("uint32"), [29], 268, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("contentSubtype", /* @__PURE__ */ $.basicType("string"), [30], 272, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class transportReader {
	public get reader(): recvBufferReader | $.VarRef<recvBufferReader> | null {
		return this._fields.reader
	}

	public set reader(value: recvBufferReader | $.VarRef<recvBufferReader> | null) {
		this._fields.reader = value
	}

	// The handler to control the window update procedure for both this
	// particular stream and the associated transport.
	public get windowHandler(): ((_p0: number) => void) | null {
		return this._fields.windowHandler
	}

	public set windowHandler(value: ((_p0: number) => void) | null) {
		this._fields.windowHandler = value
	}

	public get er(): $.GoError {
		return this._fields.er
	}

	public set er(value: $.GoError) {
		this._fields.er = value
	}

	public _fields: {
		reader: recvBufferReader | $.VarRef<recvBufferReader> | null
		windowHandler: ((_p0: number) => void) | null
		er: $.GoError
	}

	constructor(init?: Partial<{reader?: recvBufferReader | $.VarRef<recvBufferReader> | null, windowHandler?: ((_p0: number) => void) | null, er?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			reader: init?.reader ?? (null! as recvBufferReader | $.VarRef<recvBufferReader> | null),
			windowHandler: init?.windowHandler ?? (null! as ((_p0: number) => void) | null),
			er: init?.er ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): transportReader {
		return new transportReader(this, true)
	}

	public __goscriptAssign(source: transportReader): void {
		const target = this._fields
		const values = source._fields
		target.reader = values.reader
		target.windowHandler = values.windowHandler
		target.er = $.assignFieldValue(target.er, values.er, "error")
	}

	public async Read(n: number): globalThis.Promise<[mem.Buffer | null, $.GoError]> {
		let t: transportReader | $.VarRef<transportReader> | null = this;
		const t$: transportReader = t == null ? $.pointerTarget<transportReader>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<transportReader>(t)
		let [buf, err] = await recvBufferReader.prototype.Read.call((t$ as transportReader).reader, n)
		if (err != null) {
			;(t$ as transportReader).er = err
			return [buf, err]
		}
		void (__goscriptAwait = (t$ as transportReader).windowHandler!((__goscriptAwait = (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? (buf as Exclude<mem.Buffer, null>) : $.pointerValue<Exclude<mem.Buffer, null>>(buf)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [buf, null]
	}

	public async ReadHeader(header: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let t: transportReader | $.VarRef<transportReader> | null = this;
		const t$: transportReader = t == null ? $.pointerTarget<transportReader>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<transportReader>(t)
		let [n, err] = await recvBufferReader.prototype.ReadHeader.call((t$ as transportReader).reader, header)
		if (err != null) {
			;(t$ as transportReader).er = err
			return [0, err]
		}
		void (__goscriptAwait = (t$ as transportReader).windowHandler!(n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [n, null]
	}

	static __typeInfo = $.registerStructType(
		"transport.transportReader",
		() => new transportReader(),
		() => [$.methodSignature("Read", [["n", /* @__PURE__ */ $.basicType("int")]], ["mem.Buffer", "error"], true), $.methodSignature("ReadHeader", [["header", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		transportReader,
		() => [/* @__PURE__ */ $.structField("reader", /* @__PURE__ */ $.pointerType("transport.recvBufferReader"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("windowHandler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo), [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("er", "error", [2], 16, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class ServerConfig {
	public get MaxStreams(): number {
		return this._fields.MaxStreams
	}

	public set MaxStreams(value: number) {
		this._fields.MaxStreams = value
	}

	public get ConnectionTimeout(): time.Duration {
		return this._fields.ConnectionTimeout
	}

	public set ConnectionTimeout(value: time.Duration) {
		this._fields.ConnectionTimeout = value
	}

	public get Credentials(): credentials.TransportCredentials | null {
		return this._fields.Credentials
	}

	public set Credentials(value: credentials.TransportCredentials | null) {
		this._fields.Credentials = value
	}

	public get InTapHandle(): ((ctx: context.Context | null, info: tap.Info | $.VarRef<tap.Info> | null) => [context.Context | null, $.GoError] | globalThis.Promise<[context.Context | null, $.GoError]>) | null {
		return this._fields.InTapHandle
	}

	public set InTapHandle(value: ((ctx: context.Context | null, info: tap.Info | $.VarRef<tap.Info> | null) => [context.Context | null, $.GoError] | globalThis.Promise<[context.Context | null, $.GoError]>) | null) {
		this._fields.InTapHandle = value
	}

	public get StatsHandlers(): $.Slice<stats.Handler | null> {
		return this._fields.StatsHandlers
	}

	public set StatsHandlers(value: $.Slice<stats.Handler | null>) {
		this._fields.StatsHandlers = value
	}

	public get KeepaliveParams(): keepalive.ServerParameters {
		return this._fields.KeepaliveParams
	}

	public set KeepaliveParams(value: keepalive.ServerParameters) {
		this._fields.KeepaliveParams = value
	}

	public get KeepalivePolicy(): keepalive.EnforcementPolicy {
		return this._fields.KeepalivePolicy
	}

	public set KeepalivePolicy(value: keepalive.EnforcementPolicy) {
		this._fields.KeepalivePolicy = value
	}

	public get InitialWindowSize(): number {
		return this._fields.InitialWindowSize
	}

	public set InitialWindowSize(value: number) {
		this._fields.InitialWindowSize = value
	}

	public get InitialConnWindowSize(): number {
		return this._fields.InitialConnWindowSize
	}

	public set InitialConnWindowSize(value: number) {
		this._fields.InitialConnWindowSize = value
	}

	public get WriteBufferSize(): number {
		return this._fields.WriteBufferSize
	}

	public set WriteBufferSize(value: number) {
		this._fields.WriteBufferSize = value
	}

	public get ReadBufferSize(): number {
		return this._fields.ReadBufferSize
	}

	public set ReadBufferSize(value: number) {
		this._fields.ReadBufferSize = value
	}

	public get SharedWriteBuffer(): boolean {
		return this._fields.SharedWriteBuffer
	}

	public set SharedWriteBuffer(value: boolean) {
		this._fields.SharedWriteBuffer = value
	}

	public get ChannelzParent(): channelz.Server | $.VarRef<channelz.Server> | null {
		return this._fields.ChannelzParent
	}

	public set ChannelzParent(value: channelz.Server | $.VarRef<channelz.Server> | null) {
		this._fields.ChannelzParent = value
	}

	public get MaxHeaderListSize(): $.VarRef<number> | null {
		return this._fields.MaxHeaderListSize
	}

	public set MaxHeaderListSize(value: $.VarRef<number> | null) {
		this._fields.MaxHeaderListSize = value
	}

	public get HeaderTableSize(): $.VarRef<number> | null {
		return this._fields.HeaderTableSize
	}

	public set HeaderTableSize(value: $.VarRef<number> | null) {
		this._fields.HeaderTableSize = value
	}

	public get BufferPool(): mem.BufferPool | null {
		return this._fields.BufferPool
	}

	public set BufferPool(value: mem.BufferPool | null) {
		this._fields.BufferPool = value
	}

	public _fields: {
		MaxStreams: number
		ConnectionTimeout: time.Duration
		Credentials: credentials.TransportCredentials | null
		InTapHandle: ((ctx: context.Context | null, info: tap.Info | $.VarRef<tap.Info> | null) => [context.Context | null, $.GoError] | globalThis.Promise<[context.Context | null, $.GoError]>) | null
		StatsHandlers: $.Slice<stats.Handler | null>
		KeepaliveParams: keepalive.ServerParameters
		KeepalivePolicy: keepalive.EnforcementPolicy
		InitialWindowSize: number
		InitialConnWindowSize: number
		WriteBufferSize: number
		ReadBufferSize: number
		SharedWriteBuffer: boolean
		ChannelzParent: channelz.Server | $.VarRef<channelz.Server> | null
		MaxHeaderListSize: $.VarRef<number> | null
		HeaderTableSize: $.VarRef<number> | null
		BufferPool: mem.BufferPool | null
	}

	constructor(init?: Partial<{MaxStreams?: number, ConnectionTimeout?: time.Duration, Credentials?: credentials.TransportCredentials | null, InTapHandle?: ((ctx: context.Context | null, info: tap.Info | $.VarRef<tap.Info> | null) => [context.Context | null, $.GoError] | globalThis.Promise<[context.Context | null, $.GoError]>) | null, StatsHandlers?: $.Slice<stats.Handler | null>, KeepaliveParams?: keepalive.ServerParameters, KeepalivePolicy?: keepalive.EnforcementPolicy, InitialWindowSize?: number, InitialConnWindowSize?: number, WriteBufferSize?: number, ReadBufferSize?: number, SharedWriteBuffer?: boolean, ChannelzParent?: channelz.Server | $.VarRef<channelz.Server> | null, MaxHeaderListSize?: $.VarRef<number> | null, HeaderTableSize?: $.VarRef<number> | null, BufferPool?: mem.BufferPool | null}>, __goscriptValue?: boolean) {
		this._fields = {
			MaxStreams: init?.MaxStreams ?? (0 as number),
			ConnectionTimeout: init?.ConnectionTimeout ?? (0n as time.Duration),
			Credentials: init?.Credentials ?? (null! as credentials.TransportCredentials | null),
			InTapHandle: init?.InTapHandle ?? (null! as ((ctx: context.Context | null, info: tap.Info | $.VarRef<tap.Info> | null) => [context.Context | null, $.GoError] | globalThis.Promise<[context.Context | null, $.GoError]>) | null),
			StatsHandlers: init?.StatsHandlers ?? (null! as $.Slice<stats.Handler | null>),
			KeepaliveParams: init?.KeepaliveParams ? init.KeepaliveParams.clone() : new keepalive.ServerParameters(undefined, true),
			KeepalivePolicy: init?.KeepalivePolicy ? init.KeepalivePolicy.clone() : new keepalive.EnforcementPolicy(undefined, true),
			InitialWindowSize: init?.InitialWindowSize ?? (0 as number),
			InitialConnWindowSize: init?.InitialConnWindowSize ?? (0 as number),
			WriteBufferSize: init?.WriteBufferSize ?? (0 as number),
			ReadBufferSize: init?.ReadBufferSize ?? (0 as number),
			SharedWriteBuffer: init?.SharedWriteBuffer ?? (false as boolean),
			ChannelzParent: init?.ChannelzParent ?? (null! as channelz.Server | $.VarRef<channelz.Server> | null),
			MaxHeaderListSize: init?.MaxHeaderListSize ?? (null! as $.VarRef<number> | null),
			HeaderTableSize: init?.HeaderTableSize ?? (null! as $.VarRef<number> | null),
			BufferPool: init?.BufferPool ?? (null! as mem.BufferPool | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ServerConfig {
		return new ServerConfig(this, true)
	}

	public __goscriptAssign(source: ServerConfig): void {
		const target = this._fields
		const values = source._fields
		target.MaxStreams = values.MaxStreams
		target.ConnectionTimeout = values.ConnectionTimeout
		target.Credentials = $.assignFieldValue(target.Credentials, values.Credentials, "credentials.TransportCredentials")
		target.InTapHandle = values.InTapHandle
		target.StatsHandlers = values.StatsHandlers
		$.assignStruct(target.KeepaliveParams, values.KeepaliveParams)
		$.assignStruct(target.KeepalivePolicy, values.KeepalivePolicy)
		target.InitialWindowSize = values.InitialWindowSize
		target.InitialConnWindowSize = values.InitialConnWindowSize
		target.WriteBufferSize = values.WriteBufferSize
		target.ReadBufferSize = values.ReadBufferSize
		target.SharedWriteBuffer = values.SharedWriteBuffer
		target.ChannelzParent = values.ChannelzParent
		target.MaxHeaderListSize = values.MaxHeaderListSize
		target.HeaderTableSize = values.HeaderTableSize
		target.BufferPool = $.assignFieldValue(target.BufferPool, values.BufferPool, "mem.BufferPool")
	}

	static __typeInfo = $.registerStructType(
		"transport.ServerConfig",
		() => new ServerConfig(),
		() => [],
		ServerConfig,
		() => [/* @__PURE__ */ $.structField("MaxStreams", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true), /* @__PURE__ */ $.structField("ConnectionTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 8, true), /* @__PURE__ */ $.structField("Credentials", "credentials.TransportCredentials", [2], 16, true), /* @__PURE__ */ $.structField("InTapHandle", ({ kind: $.TypeKind.Function, name: "tap.ServerInHandle", params: ["context.Context", /* @__PURE__ */ $.pointerType("tap.Info")], results: ["context.Context", "error"] } as $.FunctionTypeInfo), [3], 32, true), /* @__PURE__ */ $.structField("StatsHandlers", /* @__PURE__ */ $.sliceType("stats.Handler"), [4], 40, true), /* @__PURE__ */ $.structField("KeepaliveParams", "keepalive.ServerParameters", [5], 64, true), /* @__PURE__ */ $.structField("KeepalivePolicy", "keepalive.EnforcementPolicy", [6], 104, true), /* @__PURE__ */ $.structField("InitialWindowSize", /* @__PURE__ */ $.basicType("int32"), [7], 120, true), /* @__PURE__ */ $.structField("InitialConnWindowSize", /* @__PURE__ */ $.basicType("int32"), [8], 124, true), /* @__PURE__ */ $.structField("WriteBufferSize", /* @__PURE__ */ $.basicType("int"), [9], 128, true), /* @__PURE__ */ $.structField("ReadBufferSize", /* @__PURE__ */ $.basicType("int"), [10], 136, true), /* @__PURE__ */ $.structField("SharedWriteBuffer", /* @__PURE__ */ $.basicType("bool"), [11], 144, true), /* @__PURE__ */ $.structField("ChannelzParent", /* @__PURE__ */ $.pointerType("channelz.Server"), [12], 152, true), /* @__PURE__ */ $.structField("MaxHeaderListSize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")), [13], 160, true), /* @__PURE__ */ $.structField("HeaderTableSize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")), [14], 168, true), /* @__PURE__ */ $.structField("BufferPool", "mem.BufferPool", [15], 176, true)]
	)
}

export class ConnectOptions {
	// UserAgent is the application user agent.
	public get UserAgent(): string {
		return this._fields.UserAgent
	}

	public set UserAgent(value: string) {
		this._fields.UserAgent = value
	}

	// Dialer specifies how to dial a network address.
	public get Dialer(): ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null {
		return this._fields.Dialer
	}

	public set Dialer(value: ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null) {
		this._fields.Dialer = value
	}

	// FailOnNonTempDialError specifies if gRPC fails on non-temporary dial errors.
	public get FailOnNonTempDialError(): boolean {
		return this._fields.FailOnNonTempDialError
	}

	public set FailOnNonTempDialError(value: boolean) {
		this._fields.FailOnNonTempDialError = value
	}

	// PerRPCCredentials stores the PerRPCCredentials required to issue RPCs.
	public get PerRPCCredentials(): $.Slice<credentials.PerRPCCredentials | null> {
		return this._fields.PerRPCCredentials
	}

	public set PerRPCCredentials(value: $.Slice<credentials.PerRPCCredentials | null>) {
		this._fields.PerRPCCredentials = value
	}

	// TransportCredentials stores the Authenticator required to setup a client
	// connection. Only one of TransportCredentials and CredsBundle is non-nil.
	public get TransportCredentials(): credentials.TransportCredentials | null {
		return this._fields.TransportCredentials
	}

	public set TransportCredentials(value: credentials.TransportCredentials | null) {
		this._fields.TransportCredentials = value
	}

	// CredsBundle is the credentials bundle to be used. Only one of
	// TransportCredentials and CredsBundle is non-nil.
	public get CredsBundle(): credentials.Bundle | null {
		return this._fields.CredsBundle
	}

	public set CredsBundle(value: credentials.Bundle | null) {
		this._fields.CredsBundle = value
	}

	// KeepaliveParams stores the keepalive parameters.
	public get KeepaliveParams(): keepalive.ClientParameters {
		return this._fields.KeepaliveParams
	}

	public set KeepaliveParams(value: keepalive.ClientParameters) {
		this._fields.KeepaliveParams = value
	}

	// StatsHandlers stores the handler for stats.
	public get StatsHandlers(): $.Slice<stats.Handler | null> {
		return this._fields.StatsHandlers
	}

	public set StatsHandlers(value: $.Slice<stats.Handler | null>) {
		this._fields.StatsHandlers = value
	}

	// InitialWindowSize sets the initial window size for a stream.
	public get InitialWindowSize(): number {
		return this._fields.InitialWindowSize
	}

	public set InitialWindowSize(value: number) {
		this._fields.InitialWindowSize = value
	}

	// InitialConnWindowSize sets the initial window size for a connection.
	public get InitialConnWindowSize(): number {
		return this._fields.InitialConnWindowSize
	}

	public set InitialConnWindowSize(value: number) {
		this._fields.InitialConnWindowSize = value
	}

	// WriteBufferSize sets the size of write buffer which in turn determines how much data can be batched before it's written on the wire.
	public get WriteBufferSize(): number {
		return this._fields.WriteBufferSize
	}

	public set WriteBufferSize(value: number) {
		this._fields.WriteBufferSize = value
	}

	// ReadBufferSize sets the size of read buffer, which in turn determines how much data can be read at most for one read syscall.
	public get ReadBufferSize(): number {
		return this._fields.ReadBufferSize
	}

	public set ReadBufferSize(value: number) {
		this._fields.ReadBufferSize = value
	}

	// SharedWriteBuffer indicates whether connections should reuse write buffer
	public get SharedWriteBuffer(): boolean {
		return this._fields.SharedWriteBuffer
	}

	public set SharedWriteBuffer(value: boolean) {
		this._fields.SharedWriteBuffer = value
	}

	// ChannelzParent sets the addrConn id which initiated the creation of this client transport.
	public get ChannelzParent(): channelz.SubChannel | $.VarRef<channelz.SubChannel> | null {
		return this._fields.ChannelzParent
	}

	public set ChannelzParent(value: channelz.SubChannel | $.VarRef<channelz.SubChannel> | null) {
		this._fields.ChannelzParent = value
	}

	// MaxHeaderListSize sets the max (uncompressed) size of header list that is prepared to be received.
	public get MaxHeaderListSize(): $.VarRef<number> | null {
		return this._fields.MaxHeaderListSize
	}

	public set MaxHeaderListSize(value: $.VarRef<number> | null) {
		this._fields.MaxHeaderListSize = value
	}

	// UseProxy specifies if a proxy should be used.
	public get UseProxy(): boolean {
		return this._fields.UseProxy
	}

	public set UseProxy(value: boolean) {
		this._fields.UseProxy = value
	}

	// The mem.BufferPool to use when reading/writing to the wire.
	public get BufferPool(): mem.BufferPool | null {
		return this._fields.BufferPool
	}

	public set BufferPool(value: mem.BufferPool | null) {
		this._fields.BufferPool = value
	}

	public _fields: {
		UserAgent: string
		Dialer: ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null
		FailOnNonTempDialError: boolean
		PerRPCCredentials: $.Slice<credentials.PerRPCCredentials | null>
		TransportCredentials: credentials.TransportCredentials | null
		CredsBundle: credentials.Bundle | null
		KeepaliveParams: keepalive.ClientParameters
		StatsHandlers: $.Slice<stats.Handler | null>
		InitialWindowSize: number
		InitialConnWindowSize: number
		WriteBufferSize: number
		ReadBufferSize: number
		SharedWriteBuffer: boolean
		ChannelzParent: channelz.SubChannel | $.VarRef<channelz.SubChannel> | null
		MaxHeaderListSize: $.VarRef<number> | null
		UseProxy: boolean
		BufferPool: mem.BufferPool | null
	}

	constructor(init?: Partial<{UserAgent?: string, Dialer?: ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null, FailOnNonTempDialError?: boolean, PerRPCCredentials?: $.Slice<credentials.PerRPCCredentials | null>, TransportCredentials?: credentials.TransportCredentials | null, CredsBundle?: credentials.Bundle | null, KeepaliveParams?: keepalive.ClientParameters, StatsHandlers?: $.Slice<stats.Handler | null>, InitialWindowSize?: number, InitialConnWindowSize?: number, WriteBufferSize?: number, ReadBufferSize?: number, SharedWriteBuffer?: boolean, ChannelzParent?: channelz.SubChannel | $.VarRef<channelz.SubChannel> | null, MaxHeaderListSize?: $.VarRef<number> | null, UseProxy?: boolean, BufferPool?: mem.BufferPool | null}>, __goscriptValue?: boolean) {
		this._fields = {
			UserAgent: init?.UserAgent ?? ("" as string),
			Dialer: init?.Dialer ?? (null! as ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null),
			FailOnNonTempDialError: init?.FailOnNonTempDialError ?? (false as boolean),
			PerRPCCredentials: init?.PerRPCCredentials ?? (null! as $.Slice<credentials.PerRPCCredentials | null>),
			TransportCredentials: init?.TransportCredentials ?? (null! as credentials.TransportCredentials | null),
			CredsBundle: init?.CredsBundle ?? (null! as credentials.Bundle | null),
			KeepaliveParams: init?.KeepaliveParams ? init.KeepaliveParams.clone() : new keepalive.ClientParameters(undefined, true),
			StatsHandlers: init?.StatsHandlers ?? (null! as $.Slice<stats.Handler | null>),
			InitialWindowSize: init?.InitialWindowSize ?? (0 as number),
			InitialConnWindowSize: init?.InitialConnWindowSize ?? (0 as number),
			WriteBufferSize: init?.WriteBufferSize ?? (0 as number),
			ReadBufferSize: init?.ReadBufferSize ?? (0 as number),
			SharedWriteBuffer: init?.SharedWriteBuffer ?? (false as boolean),
			ChannelzParent: init?.ChannelzParent ?? (null! as channelz.SubChannel | $.VarRef<channelz.SubChannel> | null),
			MaxHeaderListSize: init?.MaxHeaderListSize ?? (null! as $.VarRef<number> | null),
			UseProxy: init?.UseProxy ?? (false as boolean),
			BufferPool: init?.BufferPool ?? (null! as mem.BufferPool | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ConnectOptions {
		return new ConnectOptions(this, true)
	}

	public __goscriptAssign(source: ConnectOptions): void {
		const target = this._fields
		const values = source._fields
		target.UserAgent = values.UserAgent
		target.Dialer = values.Dialer
		target.FailOnNonTempDialError = values.FailOnNonTempDialError
		target.PerRPCCredentials = values.PerRPCCredentials
		target.TransportCredentials = $.assignFieldValue(target.TransportCredentials, values.TransportCredentials, "credentials.TransportCredentials")
		target.CredsBundle = $.assignFieldValue(target.CredsBundle, values.CredsBundle, "credentials.Bundle")
		$.assignStruct(target.KeepaliveParams, values.KeepaliveParams)
		target.StatsHandlers = values.StatsHandlers
		target.InitialWindowSize = values.InitialWindowSize
		target.InitialConnWindowSize = values.InitialConnWindowSize
		target.WriteBufferSize = values.WriteBufferSize
		target.ReadBufferSize = values.ReadBufferSize
		target.SharedWriteBuffer = values.SharedWriteBuffer
		target.ChannelzParent = values.ChannelzParent
		target.MaxHeaderListSize = values.MaxHeaderListSize
		target.UseProxy = values.UseProxy
		target.BufferPool = $.assignFieldValue(target.BufferPool, values.BufferPool, "mem.BufferPool")
	}

	static __typeInfo = $.registerStructType(
		"transport.ConnectOptions",
		() => new ConnectOptions(),
		() => [],
		ConnectOptions,
		() => [/* @__PURE__ */ $.structField("UserAgent", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Dialer", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string")], results: ["net.Conn", "error"] } as $.FunctionTypeInfo), [1], 16, true), /* @__PURE__ */ $.structField("FailOnNonTempDialError", /* @__PURE__ */ $.basicType("bool"), [2], 24, true), /* @__PURE__ */ $.structField("PerRPCCredentials", /* @__PURE__ */ $.sliceType("credentials.PerRPCCredentials"), [3], 32, true), /* @__PURE__ */ $.structField("TransportCredentials", "credentials.TransportCredentials", [4], 56, true), /* @__PURE__ */ $.structField("CredsBundle", "credentials.Bundle", [5], 72, true), /* @__PURE__ */ $.structField("KeepaliveParams", "keepalive.ClientParameters", [6], 88, true), /* @__PURE__ */ $.structField("StatsHandlers", /* @__PURE__ */ $.sliceType("stats.Handler"), [7], 112, true), /* @__PURE__ */ $.structField("InitialWindowSize", /* @__PURE__ */ $.basicType("int32"), [8], 136, true), /* @__PURE__ */ $.structField("InitialConnWindowSize", /* @__PURE__ */ $.basicType("int32"), [9], 140, true), /* @__PURE__ */ $.structField("WriteBufferSize", /* @__PURE__ */ $.basicType("int"), [10], 144, true), /* @__PURE__ */ $.structField("ReadBufferSize", /* @__PURE__ */ $.basicType("int"), [11], 152, true), /* @__PURE__ */ $.structField("SharedWriteBuffer", /* @__PURE__ */ $.basicType("bool"), [12], 160, true), /* @__PURE__ */ $.structField("ChannelzParent", /* @__PURE__ */ $.pointerType("channelz.SubChannel"), [13], 168, true), /* @__PURE__ */ $.structField("MaxHeaderListSize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")), [14], 176, true), /* @__PURE__ */ $.structField("UseProxy", /* @__PURE__ */ $.basicType("bool"), [15], 184, true), /* @__PURE__ */ $.structField("BufferPool", "mem.BufferPool", [16], 192, true)]
	)
}

export class Options {
	// Last indicates whether this write is the last piece for
	// this stream.
	public get Last(): boolean {
		return this._fields.Last
	}

	public set Last(value: boolean) {
		this._fields.Last = value
	}

	public _fields: {
		Last: boolean
	}

	constructor(init?: Partial<{Last?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Last: init?.Last ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Options {
		return new Options(this, true)
	}

	public __goscriptAssign(source: Options): void {
		const target = this._fields
		const values = source._fields
		target.Last = values.Last
	}

	static __typeInfo = $.registerStructType(
		"transport.Options",
		() => new Options(),
		() => [],
		Options,
		() => [/* @__PURE__ */ $.structField("Last", /* @__PURE__ */ $.basicType("bool"), [0], 0, true)]
	)
}

export class CallHdr {
	// Host specifies the peer's host.
	public get Host(): string {
		return this._fields.Host
	}

	public set Host(value: string) {
		this._fields.Host = value
	}

	// Method specifies the operation to perform.
	public get Method(): string {
		return this._fields.Method
	}

	public set Method(value: string) {
		this._fields.Method = value
	}

	// SendCompress specifies the compression algorithm applied on
	// outbound message.
	public get SendCompress(): string {
		return this._fields.SendCompress
	}

	public set SendCompress(value: string) {
		this._fields.SendCompress = value
	}

	// Creds specifies credentials.PerRPCCredentials for a call.
	public get Creds(): credentials.PerRPCCredentials | null {
		return this._fields.Creds
	}

	public set Creds(value: credentials.PerRPCCredentials | null) {
		this._fields.Creds = value
	}

	// ContentSubtype specifies the content-subtype for a request. For example, a
	// content-subtype of "proto" will result in a content-type of
	// "application/grpc+proto". The value of ContentSubtype must be all
	// lowercase, otherwise the behavior is undefined. See
	// https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md#requests
	// for more details.
	public get ContentSubtype(): string {
		return this._fields.ContentSubtype
	}

	public set ContentSubtype(value: string) {
		this._fields.ContentSubtype = value
	}

	public get PreviousAttempts(): number {
		return this._fields.PreviousAttempts
	}

	public set PreviousAttempts(value: number) {
		this._fields.PreviousAttempts = value
	}

	public get DoneFunc(): (() => void) | null {
		return this._fields.DoneFunc
	}

	public set DoneFunc(value: (() => void) | null) {
		this._fields.DoneFunc = value
	}

	public _fields: {
		Host: string
		Method: string
		SendCompress: string
		Creds: credentials.PerRPCCredentials | null
		ContentSubtype: string
		PreviousAttempts: number
		DoneFunc: (() => void) | null
	}

	constructor(init?: Partial<{Host?: string, Method?: string, SendCompress?: string, Creds?: credentials.PerRPCCredentials | null, ContentSubtype?: string, PreviousAttempts?: number, DoneFunc?: (() => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Host: init?.Host ?? ("" as string),
			Method: init?.Method ?? ("" as string),
			SendCompress: init?.SendCompress ?? ("" as string),
			Creds: init?.Creds ?? (null! as credentials.PerRPCCredentials | null),
			ContentSubtype: init?.ContentSubtype ?? ("" as string),
			PreviousAttempts: init?.PreviousAttempts ?? (0 as number),
			DoneFunc: init?.DoneFunc ?? (null! as (() => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CallHdr {
		return new CallHdr(this, true)
	}

	public __goscriptAssign(source: CallHdr): void {
		const target = this._fields
		const values = source._fields
		target.Host = values.Host
		target.Method = values.Method
		target.SendCompress = values.SendCompress
		target.Creds = $.assignFieldValue(target.Creds, values.Creds, "credentials.PerRPCCredentials")
		target.ContentSubtype = values.ContentSubtype
		target.PreviousAttempts = values.PreviousAttempts
		target.DoneFunc = values.DoneFunc
	}

	static __typeInfo = $.registerStructType(
		"transport.CallHdr",
		() => new CallHdr(),
		() => [],
		CallHdr,
		() => [/* @__PURE__ */ $.structField("Host", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Method", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("SendCompress", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Creds", "credentials.PerRPCCredentials", [3], 48, true), /* @__PURE__ */ $.structField("ContentSubtype", /* @__PURE__ */ $.basicType("string"), [4], 64, true), /* @__PURE__ */ $.structField("PreviousAttempts", /* @__PURE__ */ $.basicType("int"), [5], 80, true), /* @__PURE__ */ $.structField("DoneFunc", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [6], 88, true)]
	)
}

export class ConnectionError {
	public get Desc(): string {
		return this._fields.Desc
	}

	public set Desc(value: string) {
		this._fields.Desc = value
	}

	public get temp(): boolean {
		return this._fields.temp
	}

	public set temp(value: boolean) {
		this._fields.temp = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		Desc: string
		temp: boolean
		err: $.GoError
	}

	constructor(init?: Partial<{Desc?: string, temp?: boolean, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Desc: init?.Desc ?? ("" as string),
			temp: init?.temp ?? (false as boolean),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ConnectionError {
		return new ConnectionError(this, true)
	}

	public __goscriptAssign(source: ConnectionError): void {
		const target = this._fields
		const values = source._fields
		target.Desc = values.Desc
		target.temp = values.temp
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprintf("connection error: desc = %q", e.Desc)
	}

	public Origin(): $.GoError {
		const e = this;
		// Never return nil error here.
		// If the original error is nil, return itself.
		if (e.err == null) {
			return $.interfaceValue<$.GoError>((e).clone(), "transport.ConnectionError", "transport.ConnectionError")
		}
		return e.err
	}

	public Temporary(): boolean {
		const e = this;
		return e.temp
	}

	public Unwrap(): $.GoError {
		const e = this;
		return e.err
	}

	static __typeInfo = $.registerStructType(
		"transport.ConnectionError",
		() => new ConnectionError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Origin", [], ["error"]), $.methodSignature("Temporary", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Unwrap", [], ["error"])],
		ConnectionError,
		() => [/* @__PURE__ */ $.structField("Desc", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("temp", /* @__PURE__ */ $.basicType("bool"), [1], 16, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("err", "error", [2], 24, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export const logLevel: number = 2

export const streamActive: streamState = 0

export const streamWriteDone: streamState = 1

export const streamReadDone: streamState = 2

export const streamDone: streamState = 3

export const reachable: transportState = 0

export const closing: transportState = 1

export const draining: transportState = 2

export const GoAwayInvalid: GoAwayReason = 0

export const GoAwayNoReason: GoAwayReason = 1

export const GoAwayTooManyPings: GoAwayReason = 2

export function newRecvBuffer(): recvBuffer | $.VarRef<recvBuffer> | null {
	let b: recvBuffer | $.VarRef<recvBuffer> | null = new recvBuffer({c: $.makeChannel<recvMsg>(1, new recvMsg(undefined, true), "both")})
	return b
}

export async function NewClientTransport(connectCtx: context.Context | null, ctx: context.Context | null, addr: resolver.Address, opts: ConnectOptions, onClose: ((_p0: GoAwayReason) => void) | null): globalThis.Promise<[ClientTransport | null, $.GoError]> {
	const __goscriptReturn6 = await __goscript_http2_client.newHTTP2Client(connectCtx, ctx, (addr).clone(), (opts).clone(), onClose)
	return [$.interfaceValue<ClientTransport | null>(__goscriptReturn6[0], "*transport.http2Client", /* @__PURE__ */ $.pointerType("transport.http2Client")), __goscriptReturn6[1]]
	throw new globalThis.Error("goscript: unreachable return")
}

export async function connectionErrorf(temp: boolean, e: $.GoError, format: string, a: $.Slice<any>): globalThis.Promise<ConnectionError> {
	return (await (async () => { const __goscriptLiteralField0 = await fmt.Sprintf(format, ...(a ?? [])); return new ConnectionError({Desc: __goscriptLiteralField0, temp: temp, err: e}, true) })())
}

export let ErrConnClosing: ConnectionError = await connectionErrorf(true, null, "transport is closing", null)

export function __goscript_set_ErrConnClosing(__goscriptValue: ConnectionError): void {
	$.assignStruct(ErrConnClosing, __goscriptValue)
}

export let errStreamDrain: $.GoError = await status2.Error(14, "the connection is draining")

export function __goscript_set_errStreamDrain(__goscriptValue: $.GoError): void {
	errStreamDrain = __goscriptValue
}

export let errStreamDone: $.GoError = errors.New("the stream is done")

export function __goscript_set_errStreamDone(__goscriptValue: $.GoError): void {
	errStreamDone = __goscriptValue
}

export let statusGoAway: status3.Status | $.VarRef<status3.Status> | null = await status2.New(14, "the stream is rejected because server is draining the connection")

export function __goscript_set_statusGoAway(__goscriptValue: status3.Status | $.VarRef<status3.Status> | null): void {
	statusGoAway = __goscriptValue
}

export async function ContextErr(err: $.GoError): globalThis.Promise<$.GoError> {
	{
		let __goscriptSwitch0 = err
		switch ((true as boolean)) {
			case $.comparableEqual(__goscriptSwitch0, context.DeadlineExceeded):
			{
				return status2.Error(4, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				break
			}
			case $.comparableEqual(__goscriptSwitch0, context.Canceled):
			{
				return status2.Error(1, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				break
			}
		}
	}
	return status2.Errorf(13, "Unexpected error from context packet: %v", $.arrayToSlice<any>([(err as any)]))
}

var __goscriptAwait: any
