// Generated file based on handler_server.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as http from "@goscript/net/http/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as http2 from "@goscript/golang.org/x/net/http2/index.js"

import * as codes from "@goscript/google.golang.org/grpc/codes/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/internal/grpclog/index.js"

import * as grpcutil from "@goscript/google.golang.org/grpc/internal/grpcutil/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as peer2 from "@goscript/google.golang.org/grpc/peer/index.js"

import * as stats2 from "@goscript/google.golang.org/grpc/stats/index.js"

import * as status from "@goscript/google.golang.org/grpc/status/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import type * as tls from "@goscript/crypto/tls/index.js"

import * as status2 from "@goscript/google.golang.org/genproto/googleapis/rpc/status/index.js"

import * as status3 from "@goscript/google.golang.org/grpc/internal/status/index.js"

import type * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import type * as anypb from "@goscript/google.golang.org/protobuf/types/known/anypb/index.js"

import * as url from "@goscript/net/url/index.js"

import * as __goscript_flowcontrol from "./flowcontrol.gs.ts"

import * as __goscript_http_util from "./http_util.gs.ts"

import * as __goscript_logging from "./logging.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/net/index.js"
import "@goscript/net/http/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/net/http2/index.js"
import "@goscript/google.golang.org/grpc/codes/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/internal/grpclog/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcutil/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"
import "@goscript/google.golang.org/grpc/peer/index.js"
import "@goscript/google.golang.org/grpc/stats/index.js"
import "@goscript/google.golang.org/grpc/status/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/genproto/googleapis/rpc/status/index.js"
import "@goscript/google.golang.org/grpc/internal/status/index.js"
import "@goscript/net/url/index.js"
import "./flowcontrol.gs.ts"
import "./http_util.gs.ts"
import "./logging.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/internal/transport", ["transport.serverHandlerTransport", "transport.strAddr"])

export type strAddr = string

$.registerNamedValueType(
	"transport.strAddr",
	{Network: (receiver: any, ...args: any[]) => (strAddr_Network as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (strAddr_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Network", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*transport.strAddr",
	{Network: (receiver: any, ...args: any[]) => (strAddr_Network as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (strAddr_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Network", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class serverHandlerTransport {
	public get rw(): http.ResponseWriter | null {
		return this._fields.rw
	}

	public set rw(value: http.ResponseWriter | null) {
		this._fields.rw = value
	}

	public get req(): http.Request | $.VarRef<http.Request> | null {
		return this._fields.req
	}

	public set req(value: http.Request | $.VarRef<http.Request> | null) {
		this._fields.req = value
	}

	public get timeoutSet(): boolean {
		return this._fields.timeoutSet
	}

	public set timeoutSet(value: boolean) {
		this._fields.timeoutSet = value
	}

	public get timeout(): time.Duration {
		return this._fields.timeout
	}

	public set timeout(value: time.Duration) {
		this._fields.timeout = value
	}

	public get headerMD(): metadata.MD {
		return this._fields.headerMD
	}

	public set headerMD(value: metadata.MD) {
		this._fields.headerMD = value
	}

	public get peer(): peer2.Peer {
		return this._fields.peer
	}

	public set peer(value: peer2.Peer) {
		this._fields.peer = value
	}

	public get closeOnce(): sync.Once {
		return this._fields.closeOnce
	}

	public set closeOnce(value: sync.Once) {
		this._fields.closeOnce = value
	}

	public get closedCh(): $.Channel<{}> | null {
		return this._fields.closedCh
	}

	public set closedCh(value: $.Channel<{}> | null) {
		this._fields.closedCh = value
	}

	// writes is a channel of code to run serialized in the
	// ServeHTTP (HandleStreams) goroutine. The channel is closed
	// when WriteStatus is called.
	public get writes(): $.Channel<(() => void) | null> | null {
		return this._fields.writes
	}

	public set writes(value: $.Channel<(() => void) | null> | null) {
		this._fields.writes = value
	}

	// block concurrent WriteStatus calls
	// e.g. grpc/(*serverStream).SendMsg/RecvMsg
	public get writeStatusMu(): sync.Mutex {
		return this._fields.writeStatusMu
	}

	public set writeStatusMu(value: sync.Mutex) {
		this._fields.writeStatusMu = value
	}

	// we just mirror the request content-type
	public get contentType(): string {
		return this._fields.contentType
	}

	public set contentType(value: string) {
		this._fields.contentType = value
	}

	// we store both contentType and contentSubtype so we don't keep recreating them
	// TODO make sure this is consistent across handler_server and http2_server
	public get contentSubtype(): string {
		return this._fields.contentSubtype
	}

	public set contentSubtype(value: string) {
		this._fields.contentSubtype = value
	}

	public get stats(): $.Slice<stats2.Handler | null> {
		return this._fields.stats
	}

	public set stats(value: $.Slice<stats2.Handler | null>) {
		this._fields.stats = value
	}

	public get logger(): grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null {
		return this._fields.logger
	}

	public set logger(value: grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null) {
		this._fields.logger = value
	}

	public get bufferPool(): mem.BufferPool | null {
		return this._fields.bufferPool
	}

	public set bufferPool(value: mem.BufferPool | null) {
		this._fields.bufferPool = value
	}

	public _fields: {
		rw: http.ResponseWriter | null
		req: http.Request | $.VarRef<http.Request> | null
		timeoutSet: boolean
		timeout: time.Duration
		headerMD: metadata.MD
		peer: peer2.Peer
		closeOnce: sync.Once
		closedCh: $.Channel<{}> | null
		writes: $.Channel<(() => void) | null> | null
		writeStatusMu: sync.Mutex
		contentType: string
		contentSubtype: string
		stats: $.Slice<stats2.Handler | null>
		logger: grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null
		bufferPool: mem.BufferPool | null
	}

	constructor(init?: Partial<{rw?: http.ResponseWriter | null, req?: http.Request | $.VarRef<http.Request> | null, timeoutSet?: boolean, timeout?: time.Duration, headerMD?: metadata.MD, peer?: peer2.Peer, closeOnce?: sync.Once, closedCh?: $.Channel<{}> | null, writes?: $.Channel<(() => void) | null> | null, writeStatusMu?: sync.Mutex, contentType?: string, contentSubtype?: string, stats?: $.Slice<stats2.Handler | null>, logger?: grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null, bufferPool?: mem.BufferPool | null}>, __goscriptValue?: boolean) {
		this._fields = {
			rw: init?.rw ?? (null! as http.ResponseWriter | null),
			req: init?.req ?? (null! as http.Request | $.VarRef<http.Request> | null),
			timeoutSet: init?.timeoutSet ?? (false as boolean),
			timeout: init?.timeout ?? (0n as time.Duration),
			headerMD: init?.headerMD ?? (null! as metadata.MD),
			peer: init?.peer ? init.peer.clone() : new peer2.Peer(undefined, true),
			closeOnce: init?.closeOnce ? $.markAsStructValue($.cloneStructValue(init.closeOnce)) : $.markAsStructValue(new sync.Once()),
			closedCh: init?.closedCh ?? (null! as $.Channel<{}> | null),
			writes: init?.writes ?? (null! as $.Channel<(() => void) | null> | null),
			writeStatusMu: init?.writeStatusMu ? $.markAsStructValue($.cloneStructValue(init.writeStatusMu)) : $.markAsStructValue(new sync.Mutex()),
			contentType: init?.contentType ?? ("" as string),
			contentSubtype: init?.contentSubtype ?? ("" as string),
			stats: init?.stats ?? (null! as $.Slice<stats2.Handler | null>),
			logger: init?.logger ?? (null! as grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null),
			bufferPool: init?.bufferPool ?? (null! as mem.BufferPool | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): serverHandlerTransport {
		return new serverHandlerTransport(this, true)
	}

	public __goscriptAssign(source: serverHandlerTransport): void {
		const target = this._fields
		const values = source._fields
		target.rw = $.assignFieldValue(target.rw, values.rw, "http.ResponseWriter")
		target.req = values.req
		target.timeoutSet = values.timeoutSet
		target.timeout = values.timeout
		target.headerMD = values.headerMD
		$.assignStruct(target.peer, values.peer)
		$.assignStruct(target.closeOnce, values.closeOnce)
		target.closedCh = values.closedCh
		target.writes = values.writes
		$.assignStruct(target.writeStatusMu, values.writeStatusMu)
		target.contentType = values.contentType
		target.contentSubtype = values.contentSubtype
		target.stats = values.stats
		target.logger = values.logger
		target.bufferPool = $.assignFieldValue(target.bufferPool, values.bufferPool, "mem.BufferPool")
	}

	public async Close(err: $.GoError): globalThis.Promise<void> {
		const ht: serverHandlerTransport | $.VarRef<serverHandlerTransport> | null = this;
		const ht$: serverHandlerTransport = ht == null ? $.pointerTarget<serverHandlerTransport>(ht) : (ht as any).__isVarRef === true ? (ht as any).value : (ht as any).__goValue === undefined ? (ht as any) : $.pointerTarget<serverHandlerTransport>(ht)
		await (ht$ as serverHandlerTransport).closeOnce.Do($.functionValue(async (): globalThis.Promise<void> => {
			if (await grpclog.PrefixLogger.prototype.V.call((ht$ as serverHandlerTransport).logger, 2)) {
				await grpclog.PrefixLogger.prototype.Infof.call((ht$ as serverHandlerTransport).logger, "Closing: %v", $.arrayToSlice<any>([(err as any)]))
			}
			void (ht$ as serverHandlerTransport).closedCh!.close()
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	}

	public Drain(_p0: string): void {
		const ht: serverHandlerTransport | $.VarRef<serverHandlerTransport> | null = this;
		$.panic("Drain() is not implemented")
	}

	public async HandleStreams(ctx: context.Context | null, startStream: ((_p0: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null) => void) | null): globalThis.Promise<void> {
		const ht: serverHandlerTransport | $.VarRef<serverHandlerTransport> | null = this;
		const ht$: serverHandlerTransport = ht == null ? $.pointerTarget<serverHandlerTransport>(ht) : (ht as any).__isVarRef === true ? (ht as any).value : (ht as any).__goValue === undefined ? (ht as any) : $.pointerTarget<serverHandlerTransport>(ht)
		// With this transport type there will be exactly 1 stream: this HTTP request.
		let cancel: context.CancelFunc | null = null! as context.CancelFunc | null
		if ((ht$ as serverHandlerTransport).timeoutSet) {
			let __goscriptTuple2: any = context.WithTimeout($.pointerValueOrNil(ctx)!, (ht$ as serverHandlerTransport).timeout)
			ctx = __goscriptTuple2[0]
			cancel = __goscriptTuple2[1]
		} else {
			let __goscriptTuple3: any = context.WithCancel($.pointerValueOrNil(ctx)!)
			ctx = __goscriptTuple3[0]
			cancel = __goscriptTuple3[1]
		}

		// requestOver is closed when the status has been written via WriteStatus.
		let requestOver: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: requestOver,
				},
				{
					id: 1,
					isSend: false,
					channel: (ht$ as serverHandlerTransport).closedCh,
				},
				{
					id: 2,
					isSend: false,
					channel: ((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>(http.Request.prototype.Context.call($.pointerValue<http.Request>((ht$ as serverHandlerTransport).req))).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				}
			], false)
			if (__goscriptSelect0HasReturn) {
				return __goscriptSelect0Value
			}
			void (__goscriptAwait = cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await (ht !== null && (ht as any).__isVarRef !== true && (ht as any).__goValue === undefined ? ((ht as any) as serverHandlerTransport).Close(errors.New("request is done processing")) : serverHandlerTransport.prototype.Close.call(ht, errors.New("request is done processing")))
		})() })

		ctx = metadata.NewIncomingContext(ctx, (ht$ as serverHandlerTransport).headerMD)
		let req: http.Request | $.VarRef<http.Request> | null = (ht$ as serverHandlerTransport).req
		let req$: http.Request = req == null ? $.pointerTarget<http.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<http.Request>(req)
		let s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null = (await (async () => { const __goscriptLiteralField0 = __goscript_transport.newRecvBuffer(); const __goscriptLiteralField1 = await http.Header_Get((req$ as http.Request).Header, "grpc-encoding"); return new __goscript_transport.Stream({id: 0, ctx: ctx, requestRead: $.functionValue((_p0: number): void => {
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo)), cancel: cancel, buf: __goscriptLiteralField0, st: $.interfaceValue<__goscript_transport.ServerTransport | null>(ht, "*transport.serverHandlerTransport", /* @__PURE__ */ $.pointerType("transport.serverHandlerTransport")), method: $.pointerValue<url.URL>((req$ as http.Request).URL).Path, recvCompress: __goscriptLiteralField1, contentSubtype: (ht$ as serverHandlerTransport).contentSubtype, headerWireLength: 0}) })())
		let s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s);
		;(s$ as __goscript_transport.Stream).trReader = new __goscript_transport.transportReader({reader: (await (async () => { const __goscriptLiteralField2 = ((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((s$ as __goscript_transport.Stream).ctx).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null); return new __goscript_transport.recvBufferReader({ctx: (s$ as __goscript_transport.Stream).ctx, ctxDone: __goscriptLiteralField2, recv: (s$ as __goscript_transport.Stream).buf}) })()), windowHandler: $.functionValue((_p0: number): void => {
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo))})

		// readerDone is closed when the Body.Read-ing goroutine exits.
		let readerDone: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			using __defer = new $.DisposableStack()
			const __goscriptDeferArg0 = readerDone
			__defer.defer(() => { __goscriptDeferArg0!.close() })

			while (true) {
				let buf = ((__goscriptAwait = $.pointerValue<Exclude<mem.BufferPool, null>>((ht$ as serverHandlerTransport).bufferPool).Get(16384), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<$.Slice<number>> | null)
				let [n, err] = await $.pointerValue<Exclude<io.ReadCloser, null>>((req$ as http.Request).Body).Read($.pointerValue<$.Slice<number>>(buf))
				if (n > 0) {
					buf!.value = $.goSlice(($.pointerValue<$.Slice<number>>(buf)), undefined, n)
					await __goscript_transport.recvBuffer.prototype.put.call((s$ as __goscript_transport.Stream).buf, (await (async () => { const __goscriptLiteralField3 = await mem.NewBuffer(buf, (ht$ as serverHandlerTransport).bufferPool); return new __goscript_transport.recvMsg({buffer: __goscriptLiteralField3}, true) })()))
				} else {
					void (__goscriptAwait = $.pointerValue<Exclude<mem.BufferPool, null>>((ht$ as serverHandlerTransport).bufferPool).Put(buf), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				if (err != null) {
					await __goscript_transport.recvBuffer.prototype.put.call((s$ as __goscript_transport.Stream).buf, (await (async () => { const __goscriptLiteralField4 = await mapRecvMsgError(err); return new __goscript_transport.recvMsg({err: __goscriptLiteralField4}, true) })()))
					return
				}
			}
		})() })

		// startStream is provided by the *grpc.Server's serveStreams.
		// It starts a goroutine serving s and exits immediately.
		// The goroutine that is started is the one that then calls
		// into ht, calling WriteHeader, Write, WriteStatus, Close, etc.
		void (__goscriptAwait = startStream!(s), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		await (ht !== null && (ht as any).__isVarRef !== true && (ht as any).__goValue === undefined ? ((ht as any) as serverHandlerTransport).runStream() : serverHandlerTransport.prototype.runStream.call(ht))
		requestOver!.close()

		// Wait for reading goroutine to finish.
		await $.pointerValue<Exclude<io.ReadCloser, null>>((req$ as http.Request).Body).Close()
		await $.chanRecv(readerDone)
	}

	public IncrMsgRecv(): void {
		const ht: serverHandlerTransport | $.VarRef<serverHandlerTransport> | null = this;
	}

	public IncrMsgSent(): void {
		const ht: serverHandlerTransport | $.VarRef<serverHandlerTransport> | null = this;
	}

	public Peer(): peer2.Peer | $.VarRef<peer2.Peer> | null {
		const ht: serverHandlerTransport | $.VarRef<serverHandlerTransport> | null = this;
		const ht$: serverHandlerTransport = ht == null ? $.pointerTarget<serverHandlerTransport>(ht) : (ht as any).__isVarRef === true ? (ht as any).value : (ht as any).__goValue === undefined ? (ht as any) : $.pointerTarget<serverHandlerTransport>(ht)
		return new peer2.Peer({Addr: (ht$ as serverHandlerTransport).peer.Addr, LocalAddr: (ht$ as serverHandlerTransport).peer.LocalAddr, AuthInfo: (ht$ as serverHandlerTransport).peer.AuthInfo})
	}

	public async Write(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, hdr: $.Slice<number>, data: mem.BufferSlice, _p3: __goscript_transport.Options | $.VarRef<__goscript_transport.Options> | null): globalThis.Promise<$.GoError> {
		const ht: serverHandlerTransport | $.VarRef<serverHandlerTransport> | null = this;
		const ht$: serverHandlerTransport = ht == null ? $.pointerTarget<serverHandlerTransport>(ht) : (ht as any).__isVarRef === true ? (ht as any).value : (ht as any).__goValue === undefined ? (ht as any) : $.pointerTarget<serverHandlerTransport>(ht)
		// Always take a reference because otherwise there is no guarantee the data will
		// be available after this function returns. This is what callers to Write
		// expect.
		mem.BufferSlice_Ref(data)
		let headersWritten = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).updateHeaderSent() : __goscript_transport.Stream.prototype.updateHeaderSent.call(s))
		let err = await serverHandlerTransport.prototype.do.call(ht, $.functionValue(async (): globalThis.Promise<void> => {
			await using __defer = new $.AsyncDisposableStack()
			const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => mem.BufferSlice_Free(__receiver))(data), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc/mem.BufferSlice.Free-fm")
			__defer.defer(async () => { await __goscriptDeferCallee0() })
			if (!headersWritten) {
				await (ht !== null && (ht as any).__isVarRef !== true && (ht as any).__goValue === undefined ? ((ht as any) as serverHandlerTransport).writePendingHeaders(s) : serverHandlerTransport.prototype.writePendingHeaders.call(ht, s))
			}
			await $.pointerValue<Exclude<http.ResponseWriter, null>>((ht$ as serverHandlerTransport).rw).Write(hdr)
			for (let __goscriptRangeTarget1 = data, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				let b = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as mem.Buffer | null)
				await $.pointerValue<Exclude<http.ResponseWriter, null>>((ht$ as serverHandlerTransport).rw).Write(((__goscriptAwait = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? (b as Exclude<mem.Buffer, null>) : $.pointerValue<Exclude<mem.Buffer, null>>(b)).ReadOnlyData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>))
			}
			void (__goscriptAwait = $.pointerValue<Exclude<http.Flusher, null>>($.mustTypeAssert<http.Flusher | null>((ht$ as serverHandlerTransport).rw, "http.Flusher")).Flush(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		if (err != null) {
			await mem.BufferSlice_Free(data)
			return err
		}
		return null
	}

	public async WriteHeader(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, md: metadata.MD): globalThis.Promise<$.GoError> {
		const ht: serverHandlerTransport | $.VarRef<serverHandlerTransport> | null = this;
		const ht$: serverHandlerTransport = ht == null ? $.pointerTarget<serverHandlerTransport>(ht) : (ht as any).__isVarRef === true ? (ht as any).value : (ht as any).__goValue === undefined ? (ht as any) : $.pointerTarget<serverHandlerTransport>(ht)
		{
			let err = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).SetHeader(md) : __goscript_transport.Stream.prototype.SetHeader.call(s, md))
			if (err != null) {
				return err
			}
		}

		let headersWritten = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).updateHeaderSent() : __goscript_transport.Stream.prototype.updateHeaderSent.call(s))
		let err = await serverHandlerTransport.prototype.do.call(ht, $.functionValue(async (): globalThis.Promise<void> => {
			if (!headersWritten) {
				await (ht !== null && (ht as any).__isVarRef !== true && (ht as any).__goValue === undefined ? ((ht as any) as serverHandlerTransport).writePendingHeaders(s) : serverHandlerTransport.prototype.writePendingHeaders.call(ht, s))
			}

			void (__goscriptAwait = $.pointerValue<Exclude<http.ResponseWriter, null>>((ht$ as serverHandlerTransport).rw).WriteHeader(200), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = $.pointerValue<Exclude<http.Flusher, null>>($.mustTypeAssert<http.Flusher | null>((ht$ as serverHandlerTransport).rw, "http.Flusher")).Flush(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))

		if (err == null) {
			for (let __goscriptRangeTarget2 = (ht$ as serverHandlerTransport).stats, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let sh = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as stats2.Handler | null)
				// Note: The header fields are compressed with hpack after this call returns.
				// No WireLength field is set here.
				void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats2.Handler, null>) : $.pointerValue<Exclude<stats2.Handler, null>>(sh)).HandleRPC((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).Context() : __goscript_transport.Stream.prototype.Context.call(s)), $.interfaceValue<stats2.RPCStats | null>((() => { const __goscriptLiteralField5 = metadata.MD_Copy(md); return new stats2.OutHeader({Header: __goscriptLiteralField5, Compression: $.pointerValue<__goscript_transport.Stream>(s).sendCompress}) })(), "*stats.OutHeader", /* @__PURE__ */ $.pointerType("stats.OutHeader"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return err
	}

	public async WriteStatus(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, st: status3.Status | $.VarRef<status3.Status> | null): globalThis.Promise<$.GoError> {
		const ht: serverHandlerTransport | $.VarRef<serverHandlerTransport> | null = this;
		using __defer = new $.DisposableStack()
		const ht$: serverHandlerTransport = ht == null ? $.pointerTarget<serverHandlerTransport>(ht) : (ht as any).__isVarRef === true ? (ht as any).value : (ht as any).__goValue === undefined ? (ht as any) : $.pointerTarget<serverHandlerTransport>(ht)
		const s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		await (ht$ as serverHandlerTransport).writeStatusMu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((ht$ as serverHandlerTransport).writeStatusMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })

		let headersWritten = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).updateHeaderSent() : __goscript_transport.Stream.prototype.updateHeaderSent.call(s))
		let err = await serverHandlerTransport.prototype.do.call(ht, $.functionValue(async (): globalThis.Promise<void> => {
			using __defer = new $.DisposableStack()
			if (!headersWritten) {
				await (ht !== null && (ht as any).__isVarRef !== true && (ht as any).__goValue === undefined ? ((ht as any) as serverHandlerTransport).writePendingHeaders(s) : serverHandlerTransport.prototype.writePendingHeaders.call(ht, s))
			}

			// And flush, in case no header or body has been sent yet.
			// This forces a separation of headers and trailers if this is the
			// first call (for example, in end2end tests's TestNoService).
			void (__goscriptAwait = $.pointerValue<Exclude<http.Flusher, null>>($.mustTypeAssert<http.Flusher | null>((ht$ as serverHandlerTransport).rw, "http.Flusher")).Flush(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

			let h: http.Header = ((__goscriptAwait = $.pointerValue<Exclude<http.ResponseWriter, null>>((ht$ as serverHandlerTransport).rw).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as http.Header)
			http.Header_Set(h, "Grpc-Status", await fmt.Sprintf("%d", $.namedValueInterfaceValue<any>((st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as status3.Status).Code() : status3.Status.prototype.Code.call(st)), "codes.Code", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())))
			{
				let m = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as status3.Status).Message() : status3.Status.prototype.Message.call(st))
				if (!$.stringEqual(m, "")) {
					http.Header_Set(h, "Grpc-Message", await __goscript_http_util.encodeGrpcMessage(m))
				}
			}

			await (s$ as __goscript_transport.Stream).hdrMu.Lock()
			const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as __goscript_transport.Stream).hdrMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee2() })
			{
				let p: status2.Status | $.VarRef<status2.Status> | null = await (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as status3.Status).Proto() : status3.Status.prototype.Proto.call(st))
				if ((p != null) && ($.sliceLen($.pointerValue<status2.Status>(p).Details) > 0)) {
					$.deleteMapEntry((s$ as __goscript_transport.Stream).trailer, __goscript_http_util.grpcStatusDetailsBinHeader)
					let __goscriptTuple4: any = await proto.Marshal($.interfaceValue<proto.Message | null>(p, "*status.Status", /* @__PURE__ */ $.pointerType("status.Status")))
					let stBytes: $.Slice<number> = __goscriptTuple4[0]
					let __goscriptShadow2 = __goscriptTuple4[1]
					if (__goscriptShadow2 != null) {
						// TODO: return error instead, when callers are able to handle it.
						$.panic((__goscriptShadow2 as any))
					}

					http.Header_Set(h, __goscript_http_util.grpcStatusDetailsBinHeader, __goscript_http_util.encodeBinHeader(stBytes))
				}
			}

			if ($.len((s$ as __goscript_transport.Stream).trailer) > 0) {
				for (const [k, vv] of (s$ as __goscript_transport.Stream).trailer?.entries() ?? []) {
					// Clients don't tolerate reading restricted headers after some non restricted ones were sent.
					if (__goscript_http_util.isReservedHeader(k)) {
						continue
					}
					for (let __goscriptRangeTarget3 = vv, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
						let v = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string)
						// http2 ResponseWriter mechanism to send undeclared Trailers after
						// the headers have possibly been written.
						http.Header_Add(h, $.concatString(http2.TrailerPrefix, k), __goscript_http_util.encodeMetadataHeader(k, v))
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))

		if (err == null) {
			// Note: The trailer fields are compressed with hpack after this call returns.
			// No WireLength field is set here.
			for (let __goscriptRangeTarget4 = (ht$ as serverHandlerTransport).stats, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
				let sh = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as stats2.Handler | null)
				void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats2.Handler, null>) : $.pointerValue<Exclude<stats2.Handler, null>>(sh)).HandleRPC((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).Context() : __goscript_transport.Stream.prototype.Context.call(s)), $.interfaceValue<stats2.RPCStats | null>((() => { const __goscriptLiteralField6 = metadata.MD_Copy((s$ as __goscript_transport.Stream).trailer); return new stats2.OutTrailer({Trailer: __goscriptLiteralField6}) })(), "*stats.OutTrailer", /* @__PURE__ */ $.pointerType("stats.OutTrailer"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		await (ht !== null && (ht as any).__isVarRef !== true && (ht as any).__goValue === undefined ? ((ht as any) as serverHandlerTransport).Close(errors.New("finished writing status")) : serverHandlerTransport.prototype.Close.call(ht, errors.New("finished writing status")))
		return err
	}

	public async ["do"](fn: (() => void) | null): globalThis.Promise<$.GoError> {
		const ht: serverHandlerTransport | $.VarRef<serverHandlerTransport> | null = this;
		const ht$: serverHandlerTransport = ht == null ? $.pointerTarget<serverHandlerTransport>(ht) : (ht as any).__isVarRef === true ? (ht as any).value : (ht as any).__goValue === undefined ? (ht as any) : $.pointerTarget<serverHandlerTransport>(ht)
		const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: false,
				channel: (ht$ as serverHandlerTransport).closedCh,
				onSelected: async (__goscriptSelect1Result) => {
					return $.interfaceValue<$.GoError>((__goscript_transport.ErrConnClosing).clone(), "transport.ConnectionError", "transport.ConnectionError")
				}
			},
			{
				id: 1,
				isSend: true,
				channel: (ht$ as serverHandlerTransport).writes,
				value: fn,
				onSelected: async (__goscriptSelect1Result) => {
					return null
				}
			}
		], false)
		if (__goscriptSelect1HasReturn) {
			return __goscriptSelect1Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async runStream(): globalThis.Promise<void> {
		const ht: serverHandlerTransport | $.VarRef<serverHandlerTransport> | null = this;
		const ht$: serverHandlerTransport = ht == null ? $.pointerTarget<serverHandlerTransport>(ht) : (ht as any).__isVarRef === true ? (ht as any).value : (ht as any).__goValue === undefined ? (ht as any) : $.pointerTarget<serverHandlerTransport>(ht)
		while (true) {
			const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: (ht$ as serverHandlerTransport).writes,
					onSelected: async (__goscriptSelect2Result) => {
						let fn = __goscriptSelect2Result.value
						void (__goscriptAwait = fn!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				},
				{
					id: 1,
					isSend: false,
					channel: (ht$ as serverHandlerTransport).closedCh,
					onSelected: async (__goscriptSelect2Result) => {
						return $.selectVoidReturn()
					}
				}
			], false)
			if (__goscriptSelect2HasReturn) {
				return __goscriptSelect2Value
			}
		}
	}

	public async writeCommonHeaders(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null): globalThis.Promise<void> {
		const ht: serverHandlerTransport | $.VarRef<serverHandlerTransport> | null = this;
		const ht$: serverHandlerTransport = ht == null ? $.pointerTarget<serverHandlerTransport>(ht) : (ht as any).__isVarRef === true ? (ht as any).value : (ht as any).__goValue === undefined ? (ht as any) : $.pointerTarget<serverHandlerTransport>(ht)
		const s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		let h: http.Header = ((__goscriptAwait = $.pointerValue<Exclude<http.ResponseWriter, null>>((ht$ as serverHandlerTransport).rw).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as http.Header)
		$.mapSet(h, "Date", null)
		http.Header_Set(h, "Content-Type", (ht$ as serverHandlerTransport).contentType)

		// Predeclare trailers we'll set later in WriteStatus (after the body).
		// This is a SHOULD in the HTTP RFC, and the way you add (known)
		// Trailers per the net/http.ResponseWriter contract.
		// See https://golang.org/pkg/net/http/#ResponseWriter
		// and https://golang.org/pkg/net/http/#example_ResponseWriter_trailers
		http.Header_Add(h, "Trailer", "Grpc-Status")
		http.Header_Add(h, "Trailer", "Grpc-Message")
		http.Header_Add(h, "Trailer", "Grpc-Status-Details-Bin")

		if (!$.stringEqual((s$ as __goscript_transport.Stream).sendCompress, "")) {
			http.Header_Set(h, "Grpc-Encoding", (s$ as __goscript_transport.Stream).sendCompress)
		}
	}

	public async writeCustomHeaders(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null): globalThis.Promise<void> {
		const ht: serverHandlerTransport | $.VarRef<serverHandlerTransport> | null = this;
		const s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		let h: http.Header = ((__goscriptAwait = $.pointerValue<Exclude<http.ResponseWriter, null>>($.pointerValue<serverHandlerTransport>(ht).rw).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as http.Header)

		await (s$ as __goscript_transport.Stream).hdrMu.Lock()
		for (const [k, vv] of (s$ as __goscript_transport.Stream).header?.entries() ?? []) {
			if (__goscript_http_util.isReservedHeader(k)) {
				continue
			}
			for (let __goscriptRangeTarget5 = vv, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
				let v = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as string)
				http.Header_Add(h, k, __goscript_http_util.encodeMetadataHeader(k, v))
			}
		}

		void (s$ as __goscript_transport.Stream).hdrMu.Unlock()
	}

	public async writePendingHeaders(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null): globalThis.Promise<void> {
		const ht: serverHandlerTransport | $.VarRef<serverHandlerTransport> | null = this;
		await (ht !== null && (ht as any).__isVarRef !== true && (ht as any).__goValue === undefined ? ((ht as any) as serverHandlerTransport).writeCommonHeaders(s) : serverHandlerTransport.prototype.writeCommonHeaders.call(ht, s))
		await (ht !== null && (ht as any).__isVarRef !== true && (ht as any).__goValue === undefined ? ((ht as any) as serverHandlerTransport).writeCustomHeaders(s) : serverHandlerTransport.prototype.writeCustomHeaders.call(ht, s))
	}

	static __typeInfo = $.registerStructType(
		"transport.serverHandlerTransport",
		() => new serverHandlerTransport(),
		() => [$.methodSignature("Close", [["err", "error"]], [], true), $.methodSignature("Drain", [/* @__PURE__ */ $.basicType("string")], [], true), $.methodSignature("HandleStreams", [["ctx", "context.Context"], ["startStream", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("transport.Stream")], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("IncrMsgRecv", [], [], true), $.methodSignature("IncrMsgSent", [], [], true), $.methodSignature("Peer", [], [/* @__PURE__ */ $.pointerType("peer.Peer")], true), $.methodSignature("Write", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")], ["hdr", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["data", /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice")], ["_", /* @__PURE__ */ $.pointerType("transport.Options")]], ["error"], true), $.methodSignature("WriteHeader", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")], ["md", "metadata.MD"]], ["error"], true), $.methodSignature("WriteStatus", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")], ["st", /* @__PURE__ */ $.pointerType("status.Status")]], ["error"], true), $.methodSignature("do", [["fn", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("runStream", [], [], true), $.methodSignature("writeCommonHeaders", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")]], [], true), $.methodSignature("writeCustomHeaders", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")]], [], true), $.methodSignature("writePendingHeaders", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")]], [], true)],
		serverHandlerTransport,
		() => [/* @__PURE__ */ $.structField("rw", "http.ResponseWriter", [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("req", /* @__PURE__ */ $.pointerType("http.Request"), [1], 16, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("timeoutSet", /* @__PURE__ */ $.basicType("bool"), [2], 24, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("timeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 32, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("headerMD", "metadata.MD", [4], 40, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("peer", "peer.Peer", [5], 48, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("closeOnce", "sync.Once", [6], 96, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("closedCh", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [7], 112, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("writes", /* @__PURE__ */ $.channelType(({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "both"), [8], 120, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("writeStatusMu", "sync.Mutex", [9], 128, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("contentType", /* @__PURE__ */ $.basicType("string"), [10], 136, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("contentSubtype", /* @__PURE__ */ $.basicType("string"), [11], 152, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("stats", /* @__PURE__ */ $.sliceType("stats.Handler"), [12], 168, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("grpclog.PrefixLogger"), [13], 192, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("bufferPool", "mem.BufferPool", [14], 200, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export async function NewServerHandlerTransport(w: http.ResponseWriter | null, r: http.Request | $.VarRef<http.Request> | null, stats: $.Slice<stats2.Handler | null>, bufferPool: mem.BufferPool | null): globalThis.Promise<[__goscript_transport.ServerTransport | null, $.GoError]> {
	const r$: http.Request = r == null ? $.pointerTarget<http.Request>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<http.Request>(r)
	if (!$.stringEqual((r$ as http.Request).Method, http.MethodPost)) {
		http.Header_Set(((__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<http.ResponseWriter, null>) : $.pointerValue<Exclude<http.ResponseWriter, null>>(w)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as http.Header), "Allow", http.MethodPost)
		let msg = await fmt.Sprintf("invalid gRPC request method %q", (r$ as http.Request).Method)
		http.Error($.pointerValueOrNil(w)!, msg, 405)
		return [null, errors.New(msg)]
	}
	let contentType = await http.Header_Get((r$ as http.Request).Header, "Content-Type")
	// TODO: do we assume contentType is lowercase? we did before
	let [contentSubtype, validContentType] = grpcutil.ContentSubtype(contentType)
	if (!validContentType) {
		let msg = await fmt.Sprintf("invalid gRPC request content-type %q", contentType)
		http.Error($.pointerValueOrNil(w)!, msg, 415)
		return [null, errors.New(msg)]
	}
	if ((r$ as http.Request).ProtoMajor != 2) {
		let msg = "gRPC requires HTTP/2"
		http.Error($.pointerValueOrNil(w)!, msg, 505)
		return [null, errors.New(msg)]
	}
	{
		let [, ok] = $.typeAssertTuple<http.Flusher | null>(w, "http.Flusher")
		if (!ok) {
			let msg = "gRPC requires a ResponseWriter supporting http.Flusher"
			http.Error($.pointerValueOrNil(w)!, msg, 500)
			return [null, errors.New(msg)]
		}
	}

	let localAddr: net.Addr | null = null! as net.Addr | null
	{
		let la = (__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>(http.Request.prototype.Context.call($.pointerValue<http.Request>(r))).Value($.interfaceValue(http.LocalAddrContextKey, "*http.contextKey", /* @__PURE__ */ $.pointerType("http.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (la != null) {
			let __goscriptTuple0: any = $.typeAssertTuple<net.Addr | null>(la, "net.Addr")
			localAddr = __goscriptTuple0[0]
		}
	}
	let authInfo: credentials.AuthInfo | null = null! as credentials.AuthInfo | null
	if ((r$ as http.Request).TLS != null) {
		authInfo = $.interfaceValue<credentials.AuthInfo | null>(new credentials.TLSInfo({State: $.pointerValue<tls.ConnectionState>((r$ as http.Request).TLS), CommonAuthInfo: new credentials.CommonAuthInfo({SecurityLevel: 3}, true)}, true), "credentials.TLSInfo", "credentials.TLSInfo")
	}
	let p = new peer2.Peer({Addr: $.namedValueInterfaceValue<net.Addr | null>((r$ as http.Request).RemoteAddr, "transport.strAddr", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), LocalAddr: localAddr, AuthInfo: authInfo}, true)
	let st: serverHandlerTransport | $.VarRef<serverHandlerTransport> | null = new serverHandlerTransport({rw: w, req: r, closedCh: $.makeChannel<{}>(0, {}, "both"), writes: $.makeChannel<(() => void) | null>(0, null! as (() => void) | null, "both"), peer: p, contentType: contentType, contentSubtype: contentSubtype, stats: stats, bufferPool: bufferPool})
	let st$: serverHandlerTransport = st == null ? $.pointerTarget<serverHandlerTransport>(st) : (st as any).__isVarRef === true ? (st as any).value : (st as any).__goValue === undefined ? (st as any) : $.pointerTarget<serverHandlerTransport>(st);
	;(st$ as serverHandlerTransport).logger = await __goscript_logging.prefixLoggerForServerHandlerTransport(st)

	{
		let v = await http.Header_Get((r$ as http.Request).Header, "grpc-timeout")
		if (!$.stringEqual(v, "")) {
			let [to, err] = __goscript_http_util.decodeTimeout(v)
			if (err != null) {
				let msg = await fmt.Sprintf("malformed grpc-timeout: %v", (err as any))
				http.Error($.pointerValueOrNil(w)!, msg, 400)
				return [null, status.Error(13, msg)]
			}
			;(st$ as serverHandlerTransport).timeoutSet = true;
			;(st$ as serverHandlerTransport).timeout = to
		}
	}

	let metakv: $.Slice<string> = $.arrayToSlice<string>(["content-type", contentType])
	if (!$.stringEqual((r$ as http.Request).Host, "")) {
		metakv = $.append(metakv, ":authority", (r$ as http.Request).Host)
	}
	for (let [k, vv] of (r$ as http.Request).Header?.entries() ?? []) {
		k = strings.ToLower(k)
		if (__goscript_http_util.isReservedHeader(k) && !__goscript_http_util.isWhitelistedHeader(k)) {
			continue
		}
		for (let __goscriptRangeTarget0 = vv, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let v = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
			let __goscriptShadow0 = v
			let __goscriptTuple1: any = __goscript_http_util.decodeMetadataHeader(k, __goscriptShadow0)
			let __goscriptShadow1 = __goscriptTuple1[0]
			let err = __goscriptTuple1[1]
			if (err != null) {
				let msg = await fmt.Sprintf("malformed binary metadata %q in header %q: %v", __goscriptShadow1, k, (err as any))
				http.Error($.pointerValueOrNil(w)!, msg, 400)
				return [null, status.Error(13, msg)]
			}
			metakv = $.append(metakv, k, __goscriptShadow1)
		}
	}
	;(st$ as serverHandlerTransport).headerMD = await metadata.Pairs(metakv)

	return [$.interfaceValue<__goscript_transport.ServerTransport | null>(st, "*transport.serverHandlerTransport", /* @__PURE__ */ $.pointerType("transport.serverHandlerTransport")), null]
}

export function strAddr_Network(a: strAddr): string {
	if (!$.stringEqual(a, "")) {
		// Per the documentation on net/http.Request.RemoteAddr, if this is
		// set, it's set to the IP:port of the peer (hence, TCP):
		// https://golang.org/pkg/net/http/#Request
		//
		// If we want to support Unix sockets later, we can
		// add our own grpc-specific convention within the
		// grpc codebase to set RemoteAddr to a different
		// format, or probably better: we can attach it to the
		// context and use that from serverHandlerTransport.RemoteAddr.
		return "tcp"
	}
	return ""
}

export function strAddr_String(a: strAddr): string {
	return a
}

export async function mapRecvMsgError(err: $.GoError): globalThis.Promise<$.GoError> {
	if (($.comparableEqual(err, io.EOF)) || ($.comparableEqual(err, io.ErrUnexpectedEOF))) {
		return err
	}
	{
		let [se, ok] = $.typeAssertTuple<http2.StreamError>(err, "http2.StreamError")
		if (ok) {
			{
				let [code, __goscriptShadow3] = $.mapGet<http2.ErrCode, codes.Code, codes.Code>(__goscript_http_util.http2ErrConvTab, se.Code, 0)
				if (__goscriptShadow3) {
					return status.Error(code, await se.Error())
				}
			}
		}
	}
	if (strings.Contains((__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "body closed by handler")) {
		return status.Error(1, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}
	return $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(true, err, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null), "transport.ConnectionError", "transport.ConnectionError")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Network: (receiver: any, ...args: any[]) => (strAddr_Network as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (strAddr_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "transport.strAddr"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Network", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({String: (receiver: any, ...args: any[]) => (codes.Code_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("uint32", "codes.Code"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
