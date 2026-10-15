// Generated file based on http2_server.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as net from "@goscript/net/index.js"

import * as http from "@goscript/net/http/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as http2 from "@goscript/golang.org/x/net/http2/index.js"

import * as hpack from "@goscript/golang.org/x/net/http2/hpack/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/internal/grpclog/index.js"

import * as grpcutil from "@goscript/google.golang.org/grpc/internal/grpcutil/index.js"

import * as pretty from "@goscript/google.golang.org/grpc/internal/pretty/index.js"

import * as syscall from "@goscript/google.golang.org/grpc/internal/syscall/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as codes from "@goscript/google.golang.org/grpc/codes/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as channelz2 from "@goscript/google.golang.org/grpc/internal/channelz/index.js"

import * as grpcsync from "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"

import * as keepalive2 from "@goscript/google.golang.org/grpc/keepalive/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as peer2 from "@goscript/google.golang.org/grpc/peer/index.js"

import * as stats2 from "@goscript/google.golang.org/grpc/stats/index.js"

import * as status from "@goscript/google.golang.org/grpc/status/index.js"

import * as tap from "@goscript/google.golang.org/grpc/tap/index.js"

import * as status2 from "@goscript/google.golang.org/genproto/googleapis/rpc/status/index.js"

import * as status3 from "@goscript/google.golang.org/grpc/internal/status/index.js"

import type * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import type * as anypb from "@goscript/google.golang.org/protobuf/types/known/anypb/index.js"

import * as __goscript_bdp_estimator from "./bdp_estimator.gs.ts"

import * as __goscript_controlbuf from "./controlbuf.gs.ts"

import * as __goscript_defaults from "./defaults.gs.ts"

import * as __goscript_flowcontrol from "./flowcontrol.gs.ts"

import * as __goscript_http_util from "./http_util.gs.ts"

import * as __goscript_logging from "./logging.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/net/index.js"
import "@goscript/net/http/index.js"
import "@goscript/strconv/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/net/http2/index.js"
import "@goscript/golang.org/x/net/http2/hpack/index.js"
import "@goscript/google.golang.org/grpc/internal/grpclog/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcutil/index.js"
import "@goscript/google.golang.org/grpc/internal/pretty/index.js"
import "@goscript/google.golang.org/grpc/internal/syscall/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/grpc/codes/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/internal/channelz/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"
import "@goscript/google.golang.org/grpc/keepalive/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"
import "@goscript/google.golang.org/grpc/peer/index.js"
import "@goscript/google.golang.org/grpc/stats/index.js"
import "@goscript/google.golang.org/grpc/status/index.js"
import "@goscript/google.golang.org/grpc/tap/index.js"
import "@goscript/google.golang.org/genproto/googleapis/rpc/status/index.js"
import "@goscript/google.golang.org/grpc/internal/status/index.js"
import "./bdp_estimator.gs.ts"
import "./controlbuf.gs.ts"
import "./defaults.gs.ts"
import "./flowcontrol.gs.ts"
import "./http_util.gs.ts"
import "./logging.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/internal/transport", ["transport.http2Server", "transport.connectionKey"])

export class http2Server {
	public get lastRead(): bigint {
		return this._fields.lastRead
	}

	public set lastRead(value: bigint) {
		this._fields.lastRead = value
	}

	public get done(): $.Channel<{}> | null {
		return this._fields.done
	}

	public set done(value: $.Channel<{}> | null) {
		this._fields.done = value
	}

	public get conn(): net.Conn | null {
		return this._fields.conn
	}

	public set conn(value: net.Conn | null) {
		this._fields.conn = value
	}

	public get loopy(): __goscript_controlbuf.loopyWriter | $.VarRef<__goscript_controlbuf.loopyWriter> | null {
		return this._fields.loopy
	}

	public set loopy(value: __goscript_controlbuf.loopyWriter | $.VarRef<__goscript_controlbuf.loopyWriter> | null) {
		this._fields.loopy = value
	}

	public get readerDone(): $.Channel<{}> | null {
		return this._fields.readerDone
	}

	public set readerDone(value: $.Channel<{}> | null) {
		this._fields.readerDone = value
	}

	public get loopyWriterDone(): $.Channel<{}> | null {
		return this._fields.loopyWriterDone
	}

	public set loopyWriterDone(value: $.Channel<{}> | null) {
		this._fields.loopyWriterDone = value
	}

	public get peer(): peer2.Peer {
		return this._fields.peer
	}

	public set peer(value: peer2.Peer) {
		this._fields.peer = value
	}

	public get inTapHandle(): ((ctx: context.Context | null, info: tap.Info | $.VarRef<tap.Info> | null) => [context.Context | null, $.GoError] | globalThis.Promise<[context.Context | null, $.GoError]>) | null {
		return this._fields.inTapHandle
	}

	public set inTapHandle(value: ((ctx: context.Context | null, info: tap.Info | $.VarRef<tap.Info> | null) => [context.Context | null, $.GoError] | globalThis.Promise<[context.Context | null, $.GoError]>) | null) {
		this._fields.inTapHandle = value
	}

	public get framer(): __goscript_http_util.framer | $.VarRef<__goscript_http_util.framer> | null {
		return this._fields.framer
	}

	public set framer(value: __goscript_http_util.framer | $.VarRef<__goscript_http_util.framer> | null) {
		this._fields.framer = value
	}

	// The max number of concurrent streams.
	public get maxStreams(): number {
		return this._fields.maxStreams
	}

	public set maxStreams(value: number) {
		this._fields.maxStreams = value
	}

	// controlBuf delivers all the control related tasks (e.g., window
	// updates, reset streams, and various settings) to the controller.
	public get controlBuf(): __goscript_controlbuf.controlBuffer | $.VarRef<__goscript_controlbuf.controlBuffer> | null {
		return this._fields.controlBuf
	}

	public set controlBuf(value: __goscript_controlbuf.controlBuffer | $.VarRef<__goscript_controlbuf.controlBuffer> | null) {
		this._fields.controlBuf = value
	}

	public get fc(): __goscript_flowcontrol.trInFlow | $.VarRef<__goscript_flowcontrol.trInFlow> | null {
		return this._fields.fc
	}

	public set fc(value: __goscript_flowcontrol.trInFlow | $.VarRef<__goscript_flowcontrol.trInFlow> | null) {
		this._fields.fc = value
	}

	public get stats(): $.Slice<stats2.Handler | null> {
		return this._fields.stats
	}

	public set stats(value: $.Slice<stats2.Handler | null>) {
		this._fields.stats = value
	}

	// Keepalive and max-age parameters for the server.
	public get kp(): keepalive2.ServerParameters {
		return this._fields.kp
	}

	public set kp(value: keepalive2.ServerParameters) {
		this._fields.kp = value
	}

	// Keepalive enforcement policy.
	public get kep(): keepalive2.EnforcementPolicy {
		return this._fields.kep
	}

	public set kep(value: keepalive2.EnforcementPolicy) {
		this._fields.kep = value
	}

	// The time instance last ping was received.
	public get lastPingAt(): time.Time {
		return this._fields.lastPingAt
	}

	public set lastPingAt(value: time.Time) {
		this._fields.lastPingAt = value
	}

	// Number of times the client has violated keepalive ping policy so far.
	public get pingStrikes(): number {
		return this._fields.pingStrikes
	}

	public set pingStrikes(value: number) {
		this._fields.pingStrikes = value
	}

	// Flag to signify that number of ping strikes should be reset to 0.
	// This is set whenever data or header frames are sent.
	// 1 means yes.
	public get resetPingStrikes(): number {
		return this._fields.resetPingStrikes
	}

	public set resetPingStrikes(value: number) {
		this._fields.resetPingStrikes = value
	}

	public get initialWindowSize(): number {
		return this._fields.initialWindowSize
	}

	public set initialWindowSize(value: number) {
		this._fields.initialWindowSize = value
	}

	public get bdpEst(): __goscript_bdp_estimator.bdpEstimator | $.VarRef<__goscript_bdp_estimator.bdpEstimator> | null {
		return this._fields.bdpEst
	}

	public set bdpEst(value: __goscript_bdp_estimator.bdpEstimator | $.VarRef<__goscript_bdp_estimator.bdpEstimator> | null) {
		this._fields.bdpEst = value
	}

	public get maxSendHeaderListSize(): $.VarRef<number> | null {
		return this._fields.maxSendHeaderListSize
	}

	public set maxSendHeaderListSize(value: $.VarRef<number> | null) {
		this._fields.maxSendHeaderListSize = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	// drainEvent is initialized when Drain() is called the first time. After
	// which the server writes out the first GoAway(with ID 2^31-1) frame. Then
	// an independent goroutine will be launched to later send the second
	// GoAway. During this time we don't want to write another first GoAway(with
	// ID 2^31 -1) frame. Thus call to Drain() will be a no-op if drainEvent is
	// already initialized since draining is already underway.
	public get drainEvent(): grpcsync.Event | $.VarRef<grpcsync.Event> | null {
		return this._fields.drainEvent
	}

	public set drainEvent(value: grpcsync.Event | $.VarRef<grpcsync.Event> | null) {
		this._fields.drainEvent = value
	}

	public get state(): __goscript_transport.transportState {
		return this._fields.state
	}

	public set state(value: __goscript_transport.transportState) {
		this._fields.state = value
	}

	public get activeStreams(): globalThis.Map<number, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null> | null {
		return this._fields.activeStreams
	}

	public set activeStreams(value: globalThis.Map<number, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null> | null) {
		this._fields.activeStreams = value
	}

	// idle is the time instant when the connection went idle.
	// This is either the beginning of the connection or when the number of
	// RPCs go down to 0.
	// When the connection is busy, this value is set to 0.
	public get idle(): time.Time {
		return this._fields.idle
	}

	public set idle(value: time.Time) {
		this._fields.idle = value
	}

	// Fields below are for channelz metric collection.
	public get channelz(): channelz2.Socket | $.VarRef<channelz2.Socket> | null {
		return this._fields.channelz
	}

	public set channelz(value: channelz2.Socket | $.VarRef<channelz2.Socket> | null) {
		this._fields.channelz = value
	}

	public get bufferPool(): mem.BufferPool | null {
		return this._fields.bufferPool
	}

	public set bufferPool(value: mem.BufferPool | null) {
		this._fields.bufferPool = value
	}

	public get connectionID(): bigint {
		return this._fields.connectionID
	}

	public set connectionID(value: bigint) {
		this._fields.connectionID = value
	}

	// maxStreamMu guards the maximum stream ID
	// This lock may not be taken if mu is already held.
	public get maxStreamMu(): sync.Mutex {
		return this._fields.maxStreamMu
	}

	public set maxStreamMu(value: sync.Mutex) {
		this._fields.maxStreamMu = value
	}

	public get maxStreamID(): number {
		return this._fields.maxStreamID
	}

	public set maxStreamID(value: number) {
		this._fields.maxStreamID = value
	}

	public get logger(): grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null {
		return this._fields.logger
	}

	public set logger(value: grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null) {
		this._fields.logger = value
	}

	public _fields: {
		lastRead: bigint
		done: $.Channel<{}> | null
		conn: net.Conn | null
		loopy: __goscript_controlbuf.loopyWriter | $.VarRef<__goscript_controlbuf.loopyWriter> | null
		readerDone: $.Channel<{}> | null
		loopyWriterDone: $.Channel<{}> | null
		peer: peer2.Peer
		inTapHandle: ((ctx: context.Context | null, info: tap.Info | $.VarRef<tap.Info> | null) => [context.Context | null, $.GoError] | globalThis.Promise<[context.Context | null, $.GoError]>) | null
		framer: __goscript_http_util.framer | $.VarRef<__goscript_http_util.framer> | null
		maxStreams: number
		controlBuf: __goscript_controlbuf.controlBuffer | $.VarRef<__goscript_controlbuf.controlBuffer> | null
		fc: __goscript_flowcontrol.trInFlow | $.VarRef<__goscript_flowcontrol.trInFlow> | null
		stats: $.Slice<stats2.Handler | null>
		kp: keepalive2.ServerParameters
		kep: keepalive2.EnforcementPolicy
		lastPingAt: time.Time
		pingStrikes: number
		resetPingStrikes: number
		initialWindowSize: number
		bdpEst: __goscript_bdp_estimator.bdpEstimator | $.VarRef<__goscript_bdp_estimator.bdpEstimator> | null
		maxSendHeaderListSize: $.VarRef<number> | null
		mu: sync.Mutex
		drainEvent: grpcsync.Event | $.VarRef<grpcsync.Event> | null
		state: __goscript_transport.transportState
		activeStreams: globalThis.Map<number, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null> | null
		idle: time.Time
		channelz: channelz2.Socket | $.VarRef<channelz2.Socket> | null
		bufferPool: mem.BufferPool | null
		connectionID: bigint
		maxStreamMu: sync.Mutex
		maxStreamID: number
		logger: grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null
	}

	constructor(init?: Partial<{lastRead?: bigint, done?: $.Channel<{}> | null, conn?: net.Conn | null, loopy?: __goscript_controlbuf.loopyWriter | $.VarRef<__goscript_controlbuf.loopyWriter> | null, readerDone?: $.Channel<{}> | null, loopyWriterDone?: $.Channel<{}> | null, peer?: peer2.Peer, inTapHandle?: ((ctx: context.Context | null, info: tap.Info | $.VarRef<tap.Info> | null) => [context.Context | null, $.GoError] | globalThis.Promise<[context.Context | null, $.GoError]>) | null, framer?: __goscript_http_util.framer | $.VarRef<__goscript_http_util.framer> | null, maxStreams?: number, controlBuf?: __goscript_controlbuf.controlBuffer | $.VarRef<__goscript_controlbuf.controlBuffer> | null, fc?: __goscript_flowcontrol.trInFlow | $.VarRef<__goscript_flowcontrol.trInFlow> | null, stats?: $.Slice<stats2.Handler | null>, kp?: keepalive2.ServerParameters, kep?: keepalive2.EnforcementPolicy, lastPingAt?: time.Time, pingStrikes?: number, resetPingStrikes?: number, initialWindowSize?: number, bdpEst?: __goscript_bdp_estimator.bdpEstimator | $.VarRef<__goscript_bdp_estimator.bdpEstimator> | null, maxSendHeaderListSize?: $.VarRef<number> | null, mu?: sync.Mutex, drainEvent?: grpcsync.Event | $.VarRef<grpcsync.Event> | null, state?: __goscript_transport.transportState, activeStreams?: globalThis.Map<number, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null> | null, idle?: time.Time, channelz?: channelz2.Socket | $.VarRef<channelz2.Socket> | null, bufferPool?: mem.BufferPool | null, connectionID?: bigint, maxStreamMu?: sync.Mutex, maxStreamID?: number, logger?: grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			lastRead: init?.lastRead ?? (0n as bigint),
			done: init?.done ?? (null! as $.Channel<{}> | null),
			conn: init?.conn ?? (null! as net.Conn | null),
			loopy: init?.loopy ?? (null! as __goscript_controlbuf.loopyWriter | $.VarRef<__goscript_controlbuf.loopyWriter> | null),
			readerDone: init?.readerDone ?? (null! as $.Channel<{}> | null),
			loopyWriterDone: init?.loopyWriterDone ?? (null! as $.Channel<{}> | null),
			peer: init?.peer ? init.peer.clone() : new peer2.Peer(undefined, true),
			inTapHandle: init?.inTapHandle ?? (null! as ((ctx: context.Context | null, info: tap.Info | $.VarRef<tap.Info> | null) => [context.Context | null, $.GoError] | globalThis.Promise<[context.Context | null, $.GoError]>) | null),
			framer: init?.framer ?? (null! as __goscript_http_util.framer | $.VarRef<__goscript_http_util.framer> | null),
			maxStreams: init?.maxStreams ?? (0 as number),
			controlBuf: init?.controlBuf ?? (null! as __goscript_controlbuf.controlBuffer | $.VarRef<__goscript_controlbuf.controlBuffer> | null),
			fc: init?.fc ?? (null! as __goscript_flowcontrol.trInFlow | $.VarRef<__goscript_flowcontrol.trInFlow> | null),
			stats: init?.stats ?? (null! as $.Slice<stats2.Handler | null>),
			kp: init?.kp ? init.kp.clone() : new keepalive2.ServerParameters(undefined, true),
			kep: init?.kep ? init.kep.clone() : new keepalive2.EnforcementPolicy(undefined, true),
			lastPingAt: init?.lastPingAt ? $.markAsStructValue($.cloneStructValue(init.lastPingAt)) : $.markAsStructValue(new time.Time()),
			pingStrikes: init?.pingStrikes ?? (0 as number),
			resetPingStrikes: init?.resetPingStrikes ?? (0 as number),
			initialWindowSize: init?.initialWindowSize ?? (0 as number),
			bdpEst: init?.bdpEst ?? (null! as __goscript_bdp_estimator.bdpEstimator | $.VarRef<__goscript_bdp_estimator.bdpEstimator> | null),
			maxSendHeaderListSize: init?.maxSendHeaderListSize ?? (null! as $.VarRef<number> | null),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			drainEvent: init?.drainEvent ?? (null! as grpcsync.Event | $.VarRef<grpcsync.Event> | null),
			state: init?.state ?? (0 as __goscript_transport.transportState),
			activeStreams: init?.activeStreams ?? (null! as globalThis.Map<number, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null> | null),
			idle: init?.idle ? $.markAsStructValue($.cloneStructValue(init.idle)) : $.markAsStructValue(new time.Time()),
			channelz: init?.channelz ?? (null! as channelz2.Socket | $.VarRef<channelz2.Socket> | null),
			bufferPool: init?.bufferPool ?? (null! as mem.BufferPool | null),
			connectionID: init?.connectionID ?? (0n as bigint),
			maxStreamMu: init?.maxStreamMu ? $.markAsStructValue($.cloneStructValue(init.maxStreamMu)) : $.markAsStructValue(new sync.Mutex()),
			maxStreamID: init?.maxStreamID ?? (0 as number),
			logger: init?.logger ?? (null! as grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): http2Server {
		return new http2Server(this, true)
	}

	public __goscriptAssign(source: http2Server): void {
		const target = this._fields
		const values = source._fields
		target.lastRead = values.lastRead
		target.done = values.done
		target.conn = $.assignFieldValue(target.conn, values.conn, "net.Conn")
		target.loopy = values.loopy
		target.readerDone = values.readerDone
		target.loopyWriterDone = values.loopyWriterDone
		$.assignStruct(target.peer, values.peer)
		target.inTapHandle = values.inTapHandle
		target.framer = values.framer
		target.maxStreams = values.maxStreams
		target.controlBuf = values.controlBuf
		target.fc = values.fc
		target.stats = values.stats
		$.assignStruct(target.kp, values.kp)
		$.assignStruct(target.kep, values.kep)
		$.assignStruct(target.lastPingAt, values.lastPingAt)
		target.pingStrikes = values.pingStrikes
		target.resetPingStrikes = values.resetPingStrikes
		target.initialWindowSize = values.initialWindowSize
		target.bdpEst = values.bdpEst
		target.maxSendHeaderListSize = values.maxSendHeaderListSize
		$.assignStruct(target.mu, values.mu)
		target.drainEvent = values.drainEvent
		target.state = values.state
		target.activeStreams = values.activeStreams
		$.assignStruct(target.idle, values.idle)
		target.channelz = values.channelz
		target.bufferPool = $.assignFieldValue(target.bufferPool, values.bufferPool, "mem.BufferPool")
		target.connectionID = values.connectionID
		$.assignStruct(target.maxStreamMu, values.maxStreamMu)
		target.maxStreamID = values.maxStreamID
		target.logger = values.logger
	}

	public async Close(err: $.GoError): globalThis.Promise<void> {
		let t: http2Server | $.VarRef<http2Server> | null = this;
		const t$: http2Server = t == null ? $.pointerTarget<http2Server>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Server>(t)
		await (t$ as http2Server).mu.Lock()
		if ((t$ as http2Server).state == 1) {
			void (t$ as http2Server).mu.Unlock()
			return
		}
		if (await grpclog.PrefixLogger.prototype.V.call((t$ as http2Server).logger, 2)) {
			await grpclog.PrefixLogger.prototype.Infof.call((t$ as http2Server).logger, "Closing: %v", $.arrayToSlice<any>([(err as any)]))
		}
		;(t$ as http2Server).state = 1
		let streams: globalThis.Map<number, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null> | null = (t$ as http2Server).activeStreams;
		;(t$ as http2Server).activeStreams = null
		void (t$ as http2Server).mu.Unlock()
		await __goscript_controlbuf.controlBuffer.prototype.finish.call((t$ as http2Server).controlBuf)
		void (t$ as http2Server).done!.close()
		{
			let __goscriptShadow0 = (__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((t$ as http2Server).conn).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ((__goscriptShadow0 != null) && await grpclog.PrefixLogger.prototype.V.call((t$ as http2Server).logger, 2)) {
				await grpclog.PrefixLogger.prototype.Infof.call((t$ as http2Server).logger, "Error closing underlying net.Conn during Close: %v", $.arrayToSlice<any>([(__goscriptShadow0 as any)]))
			}
		}
		await channelz2.RemoveEntry($.pointerValue<channelz2.Socket>((t$ as http2Server).channelz).ID)
		// Cancel all active streams.
		for (const [__rangeKey, s] of streams?.entries() ?? []) {
			void (__goscriptAwait = $.pointerValue<__goscript_transport.Stream>(s).cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async Drain(debugData: string): globalThis.Promise<void> {
		let t: http2Server | $.VarRef<http2Server> | null = this;
		using __defer = new $.DisposableStack()
		const t$: http2Server = t == null ? $.pointerTarget<http2Server>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Server>(t)
		await (t$ as http2Server).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((t$ as http2Server).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		if ((t$ as http2Server).drainEvent != null) {
			return
		}
		;(t$ as http2Server).drainEvent = grpcsync.NewEvent()
		await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.goAway({code: 0, debugData: $.stringToBytes(debugData), headsUp: true}), "*transport.goAway", /* @__PURE__ */ $.pointerType("transport.goAway")))
	}

	public async HandleStreams(ctx: context.Context | null, handle: ((_p0: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null) => void) | null): globalThis.Promise<void> {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const t$: http2Server = t == null ? $.pointerTarget<http2Server>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Server>(t)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			void (t$ as http2Server).readerDone!.close()
			await $.chanRecv((t$ as http2Server).loopyWriterDone)
		})() })
		while (true) {
			await __goscript_controlbuf.controlBuffer.prototype.throttle.call((t$ as http2Server).controlBuf)
			let [frame, err] = await http2.Framer.prototype.ReadFrame.call($.pointerValue<__goscript_http_util.framer>((t$ as http2Server).framer).fr)
			atomic.StoreInt64($.fieldRef((t$ as http2Server)._fields, "lastRead"), $.markAsStructValue($.cloneStructValue(time.Now())).UnixNano())
			if (err != null) {
				{
					let [se, ok] = $.typeAssertTuple<http2.StreamError>(err, "http2.StreamError")
					if (ok) {
						if (await grpclog.PrefixLogger.prototype.V.call((t$ as http2Server).logger, 2)) {
							await grpclog.PrefixLogger.prototype.Warningf.call((t$ as http2Server).logger, "Encountered http2.StreamError: %v", $.arrayToSlice<any>([$.interfaceValue((se).clone(), "http2.StreamError", "http2.StreamError")]))
						}
						await (t$ as http2Server).mu.Lock()
						let s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null = $.mapGet<number, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null>((t$ as http2Server).activeStreams, se.StreamID, null)[0]
						void (t$ as http2Server).mu.Unlock()
						if (s != null) {
							await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).closeStream(s, true, se.Code, false) : http2Server.prototype.closeStream.call(t, s, true, se.Code, false))
						} else {
							await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.cleanupStream({streamID: se.StreamID, rst: true, rstCode: se.Code, onWrite: $.functionValue((): void => {
							}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))}), "*transport.cleanupStream", /* @__PURE__ */ $.pointerType("transport.cleanupStream")))
						}
						continue
					}
				}
				await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).Close(err) : http2Server.prototype.Close.call(t, err))
				return
			}
			{
				const __goscriptTypeSwitchValue = frame
				switch (true) {
					case $.typeAssert<http2.MetaHeadersFrame | $.VarRef<http2.MetaHeadersFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")).ok:
						{
							let frame: http2.MetaHeadersFrame | $.VarRef<http2.MetaHeadersFrame> | null = $.typeAssert<http2.MetaHeadersFrame | $.VarRef<http2.MetaHeadersFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")).value
							{
								let __goscriptShadow1 = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).operateHeaders(ctx, frame, handle) : http2Server.prototype.operateHeaders.call(t, ctx, frame, handle))
								if (__goscriptShadow1 != null) {
									// Any error processing client headers, e.g. invalid stream ID,
									// is considered a protocol violation.
									await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>((await (async () => { const __goscriptLiteralField0 = $.stringToBytes((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow1)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)); return new __goscript_controlbuf.goAway({code: 1, debugData: __goscriptLiteralField0, closeConn: __goscriptShadow1}) })()), "*transport.goAway", /* @__PURE__ */ $.pointerType("transport.goAway")))
									continue
								}
							}
						}
						break
					case $.typeAssert<http2.DataFrame | $.VarRef<http2.DataFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.DataFrame")).ok:
						{
							let frame: http2.DataFrame | $.VarRef<http2.DataFrame> | null = $.typeAssert<http2.DataFrame | $.VarRef<http2.DataFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.DataFrame")).value
							await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).handleData(frame) : http2Server.prototype.handleData.call(t, frame))
						}
						break
					case $.typeAssert<http2.RSTStreamFrame | $.VarRef<http2.RSTStreamFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.RSTStreamFrame")).ok:
						{
							let frame: http2.RSTStreamFrame | $.VarRef<http2.RSTStreamFrame> | null = $.typeAssert<http2.RSTStreamFrame | $.VarRef<http2.RSTStreamFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.RSTStreamFrame")).value
							await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).handleRSTStream(frame) : http2Server.prototype.handleRSTStream.call(t, frame))
						}
						break
					case $.typeAssert<http2.SettingsFrame | $.VarRef<http2.SettingsFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.SettingsFrame")).ok:
						{
							let frame: http2.SettingsFrame | $.VarRef<http2.SettingsFrame> | null = $.typeAssert<http2.SettingsFrame | $.VarRef<http2.SettingsFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.SettingsFrame")).value
							await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).handleSettings(frame) : http2Server.prototype.handleSettings.call(t, frame))
						}
						break
					case $.typeAssert<http2.PingFrame | $.VarRef<http2.PingFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.PingFrame")).ok:
						{
							let frame: http2.PingFrame | $.VarRef<http2.PingFrame> | null = $.typeAssert<http2.PingFrame | $.VarRef<http2.PingFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.PingFrame")).value
							await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).handlePing(frame) : http2Server.prototype.handlePing.call(t, frame))
						}
						break
					case $.typeAssert<http2.WindowUpdateFrame | $.VarRef<http2.WindowUpdateFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.WindowUpdateFrame")).ok:
						{
							let frame: http2.WindowUpdateFrame | $.VarRef<http2.WindowUpdateFrame> | null = $.typeAssert<http2.WindowUpdateFrame | $.VarRef<http2.WindowUpdateFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.WindowUpdateFrame")).value
							await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).handleWindowUpdate(frame) : http2Server.prototype.handleWindowUpdate.call(t, frame))
						}
						break
					case $.typeAssert<http2.GoAwayFrame | $.VarRef<http2.GoAwayFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.GoAwayFrame")).ok:
						{
							let frame: http2.GoAwayFrame | $.VarRef<http2.GoAwayFrame> | null = $.typeAssert<http2.GoAwayFrame | $.VarRef<http2.GoAwayFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.GoAwayFrame")).value
						}
						break
					default:
						{
							let frame: any = __goscriptTypeSwitchValue
							if (await grpclog.PrefixLogger.prototype.V.call((t$ as http2Server).logger, 2)) {
								await grpclog.PrefixLogger.prototype.Infof.call((t$ as http2Server).logger, "Received unsupported frame type %T", $.arrayToSlice<any>([(frame as any)]))
							}
						}
						break
				}
			}
		}
	}

	public IncrMsgRecv(): void {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		const t$: http2Server = t == null ? $.pointerTarget<http2Server>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Server>(t)
		$.pointerValue<channelz2.Socket>((t$ as http2Server).channelz).SocketMetrics.MessagesReceived.Add(1n)
		$.pointerValue<channelz2.Socket>((t$ as http2Server).channelz).SocketMetrics.LastMessageReceivedTimestamp.Add(1n)
	}

	public IncrMsgSent(): void {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		const t$: http2Server = t == null ? $.pointerTarget<http2Server>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Server>(t)
		$.pointerValue<channelz2.Socket>((t$ as http2Server).channelz).SocketMetrics.MessagesSent.Add(1n)
		$.pointerValue<channelz2.Socket>((t$ as http2Server).channelz).SocketMetrics.LastMessageSentTimestamp.Add(1n)
	}

	public Peer(): peer2.Peer | $.VarRef<peer2.Peer> | null {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		const t$: http2Server = t == null ? $.pointerTarget<http2Server>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Server>(t)
		return new peer2.Peer({Addr: (t$ as http2Server).peer.Addr, LocalAddr: (t$ as http2Server).peer.LocalAddr, AuthInfo: (t$ as http2Server).peer.AuthInfo})
	}

	public async Write(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, hdr: $.Slice<number>, data: mem.BufferSlice, _p3: __goscript_transport.Options | $.VarRef<__goscript_transport.Options> | null): globalThis.Promise<$.GoError> {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		const s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		let reader = mem.BufferSlice_Reader(data)

		if (!(s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).isHeaderSent() : __goscript_transport.Stream.prototype.isHeaderSent.call(s))) {
			{
				let err = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).WriteHeader(s, null) : http2Server.prototype.WriteHeader.call(t, s, null))
				if (err != null) {
					;(__goscriptAwait = (reader !== null && (reader as any).__isVarRef !== true && (reader as any).__goValue === undefined ? (reader as Exclude<mem.Reader, null>) : $.pointerValue<Exclude<mem.Reader, null>>(reader)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					return err
				}
			}
		} else {
			// Writing headers checks for this condition.
			if ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).getState() : __goscript_transport.Stream.prototype.getState.call(s)) == 3) {
				;(__goscriptAwait = (reader !== null && (reader as any).__isVarRef !== true && (reader as any).__goValue === undefined ? (reader as Exclude<mem.Reader, null>) : $.pointerValue<Exclude<mem.Reader, null>>(reader)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).streamContextErr(s) : http2Server.prototype.streamContextErr.call(t, s))
			}
		}

		let df: __goscript_controlbuf.dataFrame | $.VarRef<__goscript_controlbuf.dataFrame> | null = new __goscript_controlbuf.dataFrame({streamID: (s$ as __goscript_transport.Stream).id, h: hdr, reader: reader, onEachWrite: $.functionValue(((__receiver) => () => __receiver.setResetPingStrikes())($.pointerValue<http2Server>(t)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc/internal/transport.(*http2Server).setResetPingStrikes-fm")})
		{
			let err = await __goscript_flowcontrol.writeQuota.prototype.get.call((s$ as __goscript_transport.Stream).wq, $.int($.sliceLen(hdr) + (__goscriptAwait = $.pointerValue<Exclude<mem.Reader, null>>($.pointerValue<__goscript_controlbuf.dataFrame>(df).reader).Remaining(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32))
			if (err != null) {
				;(__goscriptAwait = (reader !== null && (reader as any).__isVarRef !== true && (reader as any).__goValue === undefined ? (reader as Exclude<mem.Reader, null>) : $.pointerValue<Exclude<mem.Reader, null>>(reader)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).streamContextErr(s) : http2Server.prototype.streamContextErr.call(t, s))
			}
		}
		{
			let err = await __goscript_controlbuf.controlBuffer.prototype.put.call($.pointerValue<http2Server>(t).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(df, "*transport.dataFrame", /* @__PURE__ */ $.pointerType("transport.dataFrame")))
			if (err != null) {
				;(__goscriptAwait = (reader !== null && (reader as any).__isVarRef !== true && (reader as any).__goValue === undefined ? (reader as Exclude<mem.Reader, null>) : $.pointerValue<Exclude<mem.Reader, null>>(reader)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return err
			}
		}
		return null
	}

	public async WriteHeader(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, md: metadata.MD): globalThis.Promise<$.GoError> {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		using __defer = new $.DisposableStack()
		const s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		await (s$ as __goscript_transport.Stream).hdrMu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as __goscript_transport.Stream).hdrMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		if ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).getState() : __goscript_transport.Stream.prototype.getState.call(s)) == 3) {
			return await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).streamContextErr(s) : http2Server.prototype.streamContextErr.call(t, s))
		}

		if ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).updateHeaderSent() : __goscript_transport.Stream.prototype.updateHeaderSent.call(s))) {
			return ErrIllegalHeaderWrite
		}

		if (metadata.MD_Len(md) > 0) {
			if (metadata.MD_Len((s$ as __goscript_transport.Stream).header) > 0) {
				;(s$ as __goscript_transport.Stream).header = metadata.Join($.arrayToSlice<metadata.MD>([(s$ as __goscript_transport.Stream).header, md]))
			} else {
				;(s$ as __goscript_transport.Stream).header = md
			}
		}
		{
			let err = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).writeHeaderLocked(s) : http2Server.prototype.writeHeaderLocked.call(t, s))
			if (err != null) {
				{
					const __goscriptTypeSwitchValue = err
					switch (true) {
						case $.typeAssert<__goscript_transport.ConnectionError>(__goscriptTypeSwitchValue, "transport.ConnectionError").ok:
							{
								let e: __goscript_transport.ConnectionError = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_transport.ConnectionError>(__goscriptTypeSwitchValue, "transport.ConnectionError").value))
								return status.Error(14, e.Desc)
							}
							break
						default:
							{
								let e: any = __goscriptTypeSwitchValue
								return status3.Status.prototype.Err.call(await status.Convert(err))
							}
							break
					}
				}
			}
		}
		return null
	}

	public async WriteStatus(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, st: status3.Status | $.VarRef<status3.Status> | null): globalThis.Promise<$.GoError> {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		using __defer = new $.DisposableStack()
		const t$: http2Server = t == null ? $.pointerTarget<http2Server>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Server>(t)
		const s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		await (s$ as __goscript_transport.Stream).hdrMu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as __goscript_transport.Stream).hdrMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		if ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).getState() : __goscript_transport.Stream.prototype.getState.call(s)) == 3) {
			return null
		}

		// TODO(mmukhi): Benchmark if the performance gets better if count the metadata and other header fields
		// first and create a slice of that exact size.
		let headerFields: $.Slice<hpack.HeaderField> = $.makeSlice<hpack.HeaderField>(0, 2, undefined, () => new hpack.HeaderField(undefined, true))
		if (!(s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).updateHeaderSent() : __goscript_transport.Stream.prototype.updateHeaderSent.call(s))) {
			if ($.len((s$ as __goscript_transport.Stream).header) > 0) {
				{
					let err = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).writeHeaderLocked(s) : http2Server.prototype.writeHeaderLocked.call(t, s))
					if (err != null) {
						return err
					}
				}
			} else {
				headerFields = $.appendOne(headerFields, new hpack.HeaderField({Name: ":status", Value: "200"}, true))
				headerFields = $.appendOne(headerFields, (() => { const __goscriptLiteralField1 = grpcutil.ContentType((s$ as __goscript_transport.Stream).contentSubtype); return new hpack.HeaderField({Name: "content-type", Value: __goscriptLiteralField1}, true) })())
			}
		}
		headerFields = $.appendOne(headerFields, (() => { const __goscriptLiteralField2 = strconv.Itoa($.int((st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as status3.Status).Code() : status3.Status.prototype.Code.call(st)))); return new hpack.HeaderField({Name: "grpc-status", Value: __goscriptLiteralField2}, true) })())
		headerFields = $.appendOne(headerFields, (await (async () => { const __goscriptLiteralField3 = await __goscript_http_util.encodeGrpcMessage((st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as status3.Status).Message() : status3.Status.prototype.Message.call(st))); return new hpack.HeaderField({Name: "grpc-message", Value: __goscriptLiteralField3}, true) })()))

		{
			let p: status2.Status | $.VarRef<status2.Status> | null = await (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as status3.Status).Proto() : status3.Status.prototype.Proto.call(st))
			if ((p != null) && ($.sliceLen($.pointerValue<status2.Status>(p).Details) > 0)) {
				// Do not use the user's grpc-status-details-bin (if present) if we are
				// even attempting to set our own.
				$.deleteMapEntry((s$ as __goscript_transport.Stream).trailer, __goscript_http_util.grpcStatusDetailsBinHeader)
				let __goscriptTuple0: any = await proto.Marshal($.interfaceValue<proto.Message | null>(p, "*status.Status", /* @__PURE__ */ $.pointerType("status.Status")))
				let stBytes: $.Slice<number> = __goscriptTuple0[0]
				let err = __goscriptTuple0[1]
				if (err != null) {
					// TODO: return error instead, when callers are able to handle it.
					await grpclog.PrefixLogger.prototype.Errorf.call((t$ as http2Server).logger, "Failed to marshal rpc status: %s, error: %v", $.arrayToSlice<any>([await pretty.ToJSON($.interfaceValue(p, "*status.Status", /* @__PURE__ */ $.pointerType("status.Status"))), (err as any)]))
				} else {
					headerFields = $.appendOne(headerFields, (() => { const __goscriptLiteralField4 = __goscript_http_util.encodeBinHeader(stBytes); return new hpack.HeaderField({Name: __goscript_http_util.grpcStatusDetailsBinHeader, Value: __goscriptLiteralField4}, true) })())
				}
			}
		}

		// Attach the trailer metadata.
		headerFields = appendHeaderFieldsFromMD(headerFields, (s$ as __goscript_transport.Stream).trailer)
		let trailingHeader: __goscript_controlbuf.headerFrame | $.VarRef<__goscript_controlbuf.headerFrame> | null = new __goscript_controlbuf.headerFrame({streamID: (s$ as __goscript_transport.Stream).id, hf: headerFields, endStream: true, onWrite: $.functionValue(((__receiver) => () => __receiver.setResetPingStrikes())((t$ as http2Server)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc/internal/transport.(*http2Server).setResetPingStrikes-fm")})

		let [success, err] = await __goscript_controlbuf.controlBuffer.prototype.executeAndPut.call((t$ as http2Server).controlBuf, $.functionValue(async (): globalThis.Promise<boolean> => {
			return await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).checkForHeaderListSize($.interfaceValue(trailingHeader, "*transport.headerFrame", /* @__PURE__ */ $.pointerType("transport.headerFrame"))) : http2Server.prototype.checkForHeaderListSize.call(t, $.interfaceValue(trailingHeader, "*transport.headerFrame", /* @__PURE__ */ $.pointerType("transport.headerFrame"))))
		}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)), null)
		if (!success) {
			if (err != null) {
				return err
			}
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).closeStream(s, true, 2, false) : http2Server.prototype.closeStream.call(t, s, true, 2, false))
			return ErrHeaderListSizeLimitViolation
		}
		// Send a RST_STREAM after the trailers if the client has not already half-closed.
		let rst = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).getState() : __goscript_transport.Stream.prototype.getState.call(s)) == 0
		await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).finishStream(s, rst, 0, trailingHeader, true) : http2Server.prototype.finishStream.call(t, s, rst, 0, trailingHeader, true))
		for (let __goscriptRangeTarget0 = (t$ as http2Server).stats, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let sh = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as stats2.Handler | null)
			// Note: The trailer fields are compressed with hpack after this call returns.
			// No WireLength field is set here.
			void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats2.Handler, null>) : $.pointerValue<Exclude<stats2.Handler, null>>(sh)).HandleRPC((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).Context() : __goscript_transport.Stream.prototype.Context.call(s)), $.interfaceValue<stats2.RPCStats | null>((() => { const __goscriptLiteralField5 = metadata.MD_Copy((s$ as __goscript_transport.Stream).trailer); return new stats2.OutTrailer({Trailer: __goscriptLiteralField5}) })(), "*stats.OutTrailer", /* @__PURE__ */ $.pointerType("stats.OutTrailer"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return null
	}

	public async adjustWindow(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, n: number): globalThis.Promise<void> {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		const s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		{
			let w = await __goscript_flowcontrol.inFlow.prototype.maybeAdjust.call((s$ as __goscript_transport.Stream).fc, n)
			if (w > 0) {
				await __goscript_controlbuf.controlBuffer.prototype.put.call($.pointerValue<http2Server>(t).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.outgoingWindowUpdate({streamID: (s$ as __goscript_transport.Stream).id, increment: w}), "*transport.outgoingWindowUpdate", /* @__PURE__ */ $.pointerType("transport.outgoingWindowUpdate")))
			}
		}
	}

	public async checkForHeaderListSize(it: any): globalThis.Promise<boolean> {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		const t$: http2Server = t == null ? $.pointerTarget<http2Server>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Server>(t)
		if ((t$ as http2Server).maxSendHeaderListSize == null) {
			return true
		}
		let hdrFrame: __goscript_controlbuf.headerFrame | $.VarRef<__goscript_controlbuf.headerFrame> | null = ((it as any)?.__goType === "*transport.headerFrame" && (it as any).__goValue === undefined && (it as any).__isTypedNil !== true ? ((it as any) as __goscript_controlbuf.headerFrame | $.VarRef<__goscript_controlbuf.headerFrame> | null) : $.mustTypeAssert<__goscript_controlbuf.headerFrame | $.VarRef<__goscript_controlbuf.headerFrame> | null>(it, /* @__PURE__ */ $.pointerType("transport.headerFrame")))
		let sz: bigint = 0n
		for (let __goscriptRangeTarget1 = $.pointerValue<__goscript_controlbuf.headerFrame>(hdrFrame).hf, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let f = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as hpack.HeaderField)).clone()
			{
				sz = $.int64Add(sz, $.int64(f.Size()))
				if (sz > $.int64($.pointerValue<number>((t$ as http2Server).maxSendHeaderListSize))) {
					if (await grpclog.PrefixLogger.prototype.V.call((t$ as http2Server).logger, 2)) {
						await grpclog.PrefixLogger.prototype.Infof.call((t$ as http2Server).logger, "Header list size to send violates the maximum size (%d bytes) set by client", $.arrayToSlice<any>([$.basicInterfaceValue($.pointerValue<number>((t$ as http2Server).maxSendHeaderListSize), "uint32")]))
					}
					return false
				}
			}
		}
		return true
	}

	public async closeStream(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, rst: boolean, rstCode: http2.ErrCode, eosReceived: boolean): globalThis.Promise<void> {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		const s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		// In case stream sending and receiving are invoked in separate
		// goroutines (e.g., bi-directional streaming), cancel needs to be
		// called to interrupt the potential blocking on other goroutines.
		void (__goscriptAwait = (s$ as __goscript_transport.Stream).cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).swapState(3) : __goscript_transport.Stream.prototype.swapState.call(s, 3))
		await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).deleteStream(s, eosReceived) : http2Server.prototype.deleteStream.call(t, s, eosReceived))

		await __goscript_controlbuf.controlBuffer.prototype.put.call($.pointerValue<http2Server>(t).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.cleanupStream({streamID: (s$ as __goscript_transport.Stream).id, rst: rst, rstCode: rstCode, onWrite: $.functionValue((): void => {
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))}), "*transport.cleanupStream", /* @__PURE__ */ $.pointerType("transport.cleanupStream")))
	}

	public async deleteStream(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, eosReceived: boolean): globalThis.Promise<void> {
		let t: http2Server | $.VarRef<http2Server> | null = this;
		const t$: http2Server = t == null ? $.pointerTarget<http2Server>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Server>(t)
		const s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)

		await (t$ as http2Server).mu.Lock()
		{
			let [, ok] = $.mapGet<number, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null>((t$ as http2Server).activeStreams, (s$ as __goscript_transport.Stream).id, null)
			if (ok) {
				$.deleteMapEntry((t$ as http2Server).activeStreams, (s$ as __goscript_transport.Stream).id)
				if ($.len((t$ as http2Server).activeStreams) == 0) {
					$.assignStruct((t$ as http2Server).idle, time.Now())
				}
			}
		}
		void (t$ as http2Server).mu.Unlock()

		if (channelz2.IsOn()) {
			if (eosReceived) {
				$.pointerValue<channelz2.Socket>((t$ as http2Server).channelz).SocketMetrics.StreamsSucceeded.Add(1n)
			} else {
				$.pointerValue<channelz2.Socket>((t$ as http2Server).channelz).SocketMetrics.StreamsFailed.Add(1n)
			}
		}
	}

	public async finishStream(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, rst: boolean, rstCode: http2.ErrCode, hdr: __goscript_controlbuf.headerFrame | $.VarRef<__goscript_controlbuf.headerFrame> | null, eosReceived: boolean): globalThis.Promise<void> {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		const s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		// In case stream sending and receiving are invoked in separate
		// goroutines (e.g., bi-directional streaming), cancel needs to be
		// called to interrupt the potential blocking on other goroutines.
		void (__goscriptAwait = (s$ as __goscript_transport.Stream).cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let oldState = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).swapState(3) : __goscript_transport.Stream.prototype.swapState.call(s, 3))
		if (oldState == 3) {
			// If the stream was already done, return.
			return
		}

		$.pointerValue<__goscript_controlbuf.headerFrame>(hdr).cleanup = new __goscript_controlbuf.cleanupStream({streamID: (s$ as __goscript_transport.Stream).id, rst: rst, rstCode: rstCode, onWrite: $.functionValue(async (): globalThis.Promise<void> => {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).deleteStream(s, eosReceived) : http2Server.prototype.deleteStream.call(t, s, eosReceived))
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))})
		await __goscript_controlbuf.controlBuffer.prototype.put.call($.pointerValue<http2Server>(t).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(hdr, "*transport.headerFrame", /* @__PURE__ */ $.pointerType("transport.headerFrame")))
	}

	public async getOutFlowWindow(): globalThis.Promise<bigint> {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		using __defer = new $.DisposableStack()
		const t$: http2Server = t == null ? $.pointerTarget<http2Server>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Server>(t)
		let resp: $.Channel<number> | null = $.makeChannel<number>(1, 0, "both")
		let timer: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer(1000000000n)
		__defer.defer(() => { time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(timer)) })
		await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.outFlowControlSizeRequest({resp: resp}), "*transport.outFlowControlSizeRequest", /* @__PURE__ */ $.pointerType("transport.outFlowControlSizeRequest")))
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, bigint>([
			{
				id: 0,
				isSend: false,
				channel: resp,
				onSelected: async (__goscriptSelect0Result) => {
					let sz = __goscriptSelect0Result.value
					return $.int64(sz)
				}
			},
			{
				id: 1,
				isSend: false,
				channel: (t$ as http2Server).done,
				onSelected: async (__goscriptSelect0Result) => {
					return -1n
				}
			},
			{
				id: 2,
				isSend: false,
				channel: $.pointerValue<time.Timer>(timer).C,
				onSelected: async (__goscriptSelect0Result) => {
					return -2n
				}
			}
		], false)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async getStream(f: http2.Frame | null): globalThis.Promise<[__goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, boolean]> {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		using __defer = new $.DisposableStack()
		const t$: http2Server = t == null ? $.pointerTarget<http2Server>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Server>(t)
		await (t$ as http2Server).mu.Lock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((t$ as http2Server).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })
		if ((t$ as http2Server).activeStreams == null) {
			// The transport is closing.
			return [null, false]
		}
		let __goscriptTuple1: any = $.mapGet<number, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null>((t$ as http2Server).activeStreams, ((__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<http2.Frame, null>) : $.pointerValue<Exclude<http2.Frame, null>>(f)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as http2.FrameHeader).StreamID, null)
		let s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (!ok) {
			// The stream is already done.
			return [null, false]
		}
		return [s, true]
	}

	public async handleData(f: http2.DataFrame | $.VarRef<http2.DataFrame> | null): globalThis.Promise<void> {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		const t$: http2Server = t == null ? $.pointerTarget<http2Server>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Server>(t)
		let size = $.pointerValue<http2.DataFrame>(f).FrameHeader.Header().Length
		let sendBDPPing: boolean = false
		if ((t$ as http2Server).bdpEst != null) {
			sendBDPPing = await __goscript_bdp_estimator.bdpEstimator.prototype.add.call((t$ as http2Server).bdpEst, size)
		}
		// Decouple connection's flow control from application's read.
		// An update on connection's flow control should not depend on
		// whether user application has read the data or not. Such a
		// restriction is already imposed on the stream's flow control,
		// and therefore the sender will be blocked anyways.
		// Decoupling the connection flow control will prevent other
		// active(fast) streams from starving in presence of slow or
		// inactive streams.
		{
			let w = __goscript_flowcontrol.trInFlow.prototype.onData.call((t$ as http2Server).fc, size)
			if (w > 0) {
				await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.outgoingWindowUpdate({streamID: 0, increment: w}), "*transport.outgoingWindowUpdate", /* @__PURE__ */ $.pointerType("transport.outgoingWindowUpdate")))
			}
		}
		if (sendBDPPing) {
			// Avoid excessive ping detection (e.g. in an L7 proxy)
			// by sending a window update prior to the BDP ping.
			{
				let w = __goscript_flowcontrol.trInFlow.prototype.reset.call((t$ as http2Server).fc)
				if (w > 0) {
					await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.outgoingWindowUpdate({streamID: 0, increment: w}), "*transport.outgoingWindowUpdate", /* @__PURE__ */ $.pointerType("transport.outgoingWindowUpdate")))
				}
			}
			await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(__goscript_bdp_estimator.__goscript_get_bdpPing(), "*transport.ping", /* @__PURE__ */ $.pointerType("transport.ping")))
		}
		// Select the right stream to dispatch.
		let __goscriptTuple2: any = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).getStream($.interfaceValue<http2.Frame | null>(f, "*http2.DataFrame", /* @__PURE__ */ $.pointerType("http2.DataFrame"))) : http2Server.prototype.getStream.call(t, $.interfaceValue<http2.Frame | null>(f, "*http2.DataFrame", /* @__PURE__ */ $.pointerType("http2.DataFrame"))))
		let s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		let s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		if (!ok) {
			return
		}
		if ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).getState() : __goscript_transport.Stream.prototype.getState.call(s)) == 2) {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).closeStream(s, true, 5, false) : http2Server.prototype.closeStream.call(t, s, true, 5, false))
			return
		}
		if (size > 0) {
			{
				let err = await __goscript_flowcontrol.inFlow.prototype.onData.call((s$ as __goscript_transport.Stream).fc, size)
				if (err != null) {
					await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).closeStream(s, true, 3, false) : http2Server.prototype.closeStream.call(t, s, true, 3, false))
					return
				}
			}
			if (http2.Flags_Has($.pointerValue<http2.DataFrame>(f).FrameHeader.Header().Flags, 8)) {
				{
					let w = await __goscript_flowcontrol.inFlow.prototype.onRead.call((s$ as __goscript_transport.Stream).fc, $.uint(((size - $.uint($.sliceLen((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as http2.DataFrame).Data() : http2.DataFrame.prototype.Data.call(f))), 32)) >>> 0), 32))
					if (w > 0) {
						await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.outgoingWindowUpdate({streamID: (s$ as __goscript_transport.Stream).id, increment: w}), "*transport.outgoingWindowUpdate", /* @__PURE__ */ $.pointerType("transport.outgoingWindowUpdate")))
					}
				}
			}
			// TODO(bradfitz, zhaoq): A copy is required here because there is no
			// guarantee f.Data() is consumed before the arrival of next frame.
			// Can this copy be eliminated?
			if ($.sliceLen((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as http2.DataFrame).Data() : http2.DataFrame.prototype.Data.call(f))) > 0) {
				let pool = (t$ as http2Server).bufferPool
				if (pool == null) {
					// Note that this is only supposed to be nil in tests. Otherwise, stream is
					// always initialized with a BufferPool.
					pool = mem.DefaultBufferPool()
				}
				await __goscript_transport.Stream.prototype.write.call(s, (await (async () => { const __goscriptLiteralField6 = await mem.Copy((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as http2.DataFrame).Data() : http2.DataFrame.prototype.Data.call(f)), pool); return new __goscript_transport.recvMsg({buffer: __goscriptLiteralField6}, true) })()))
			}
		}
		if ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as http2.DataFrame).StreamEnded() : http2.DataFrame.prototype.StreamEnded.call(f))) {
			// Received the end of stream from the client.
			void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).compareAndSwapState(0, 2) : __goscript_transport.Stream.prototype.compareAndSwapState.call(s, 0, 2))
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).write(new __goscript_transport.recvMsg({err: io.EOF}, true)) : __goscript_transport.Stream.prototype.write.call(s, new __goscript_transport.recvMsg({err: io.EOF}, true)))
		}
	}

	public async handlePing(f: http2.PingFrame | $.VarRef<http2.PingFrame> | null): globalThis.Promise<void> {
		let t: http2Server | $.VarRef<http2Server> | null = this;
		using __defer = new $.DisposableStack()
		const t$: http2Server = t == null ? $.pointerTarget<http2Server>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Server>(t)
		const f$: http2.PingFrame = f == null ? $.pointerTarget<http2.PingFrame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<http2.PingFrame>(f)
		if ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as http2.PingFrame).IsAck() : http2.PingFrame.prototype.IsAck.call(f))) {
			if (($.arrayEqual((f$ as http2.PingFrame).Data, $.pointerValue<__goscript_controlbuf.ping>(__goscript_get_goAwayPing()).data)) && ((t$ as http2Server).drainEvent != null)) {
				await grpcsync.Event.prototype.Fire.call((t$ as http2Server).drainEvent)
				return
			}
			// Maybe it's a BDP ping.
			if ((t$ as http2Server).bdpEst != null) {
				await __goscript_bdp_estimator.bdpEstimator.prototype.calculate.call((t$ as http2Server).bdpEst, $.cloneArrayValue((f$ as http2.PingFrame).Data, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)))
			}
			return
		}
		let pingAck: __goscript_controlbuf.ping | $.VarRef<__goscript_controlbuf.ping> | null = new __goscript_controlbuf.ping({ack: true})
		$.copy($.goSlice($.pointerValue<__goscript_controlbuf.ping>(pingAck).data, undefined, undefined), $.goSlice((f$ as http2.PingFrame).Data, undefined, undefined))
		await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(pingAck, "*transport.ping", /* @__PURE__ */ $.pointerType("transport.ping")))

		let now = $.markAsStructValue($.cloneStructValue(time.Now()))
		__defer.defer(() => { ((): void => {
			$.assignStruct((t$ as http2Server).lastPingAt, now)
		})() })
		// A reset ping strikes means that we don't need to check for policy
		// violation for this ping and the pingStrikes counter should be set
		// to 0.
		if (atomic.CompareAndSwapUint32($.fieldRef((t$ as http2Server)._fields, "resetPingStrikes"), 1, 0)) {
			;(t$ as http2Server).pingStrikes = 0
			return
		}
		await (t$ as http2Server).mu.Lock()
		let ns = $.len((t$ as http2Server).activeStreams)
		void (t$ as http2Server).mu.Unlock()
		if ((ns < 1) && !(t$ as http2Server).kep.PermitWithoutStream) {
			// Keepalive shouldn't be active thus, this new ping should
			// have come after at least defaultPingTimeout.
			if ($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((t$ as http2Server).lastPingAt)).Add(7200000000000n))).After($.markAsStructValue($.cloneStructValue(now)))) {
				;(t$ as http2Server).pingStrikes = (((t$ as http2Server).pingStrikes + 1) & 0xff)
			}
		} else {
			// Check if keepalive policy is respected.
			if ($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((t$ as http2Server).lastPingAt)).Add((t$ as http2Server).kep.MinTime))).After($.markAsStructValue($.cloneStructValue(now)))) {
				;(t$ as http2Server).pingStrikes = (((t$ as http2Server).pingStrikes + 1) & 0xff)
			}
		}

		if ((t$ as http2Server).pingStrikes > 2) {
			// Send goaway and close the connection.
			await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>((() => { const __goscriptLiteralField7 = errors.New("got too many pings from the client"); return new __goscript_controlbuf.goAway({code: 11, debugData: new Uint8Array([116, 111, 111, 95, 109, 97, 110, 121, 95, 112, 105, 110, 103, 115]), closeConn: __goscriptLiteralField7}) })(), "*transport.goAway", /* @__PURE__ */ $.pointerType("transport.goAway")))
		}
	}

	public async handleRSTStream(f: http2.RSTStreamFrame | $.VarRef<http2.RSTStreamFrame> | null): globalThis.Promise<void> {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		// If the stream is not deleted from the transport's active streams map, then do a regular close stream.
		{
			let __goscriptTuple3: any = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).getStream($.interfaceValue<http2.Frame | null>(f, "*http2.RSTStreamFrame", /* @__PURE__ */ $.pointerType("http2.RSTStreamFrame"))) : http2Server.prototype.getStream.call(t, $.interfaceValue<http2.Frame | null>(f, "*http2.RSTStreamFrame", /* @__PURE__ */ $.pointerType("http2.RSTStreamFrame"))))
			let s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null = __goscriptTuple3[0]
			let ok = __goscriptTuple3[1]
			if (ok) {
				await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).closeStream(s, false, 0, false) : http2Server.prototype.closeStream.call(t, s, false, 0, false))
				return
			}
		}
		// If the stream is already deleted from the active streams map, then put a cleanupStream item into controlbuf to delete the stream from loopy writer's established streams map.
		await __goscript_controlbuf.controlBuffer.prototype.put.call($.pointerValue<http2Server>(t).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.cleanupStream({streamID: $.pointerValue<http2.RSTStreamFrame>(f).FrameHeader.Header().StreamID, rst: false, rstCode: 0, onWrite: $.functionValue((): void => {
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))}), "*transport.cleanupStream", /* @__PURE__ */ $.pointerType("transport.cleanupStream")))
	}

	public async handleSettings(f: http2.SettingsFrame | $.VarRef<http2.SettingsFrame> | null): globalThis.Promise<void> {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		const t$: http2Server = t == null ? $.pointerTarget<http2Server>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Server>(t)
		if ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as http2.SettingsFrame).IsAck() : http2.SettingsFrame.prototype.IsAck.call(f))) {
			return
		}
		let ss: $.Slice<http2.Setting> = null! as $.Slice<http2.Setting>
		let updateFuncs: $.Slice<(() => void) | null> = null! as $.Slice<(() => void) | null>
		await http2.SettingsFrame.prototype.ForeachSetting.call(f, $.functionValue((s: http2.Setting): $.GoError => {
			switch (s.ID) {
				case http2.SettingMaxHeaderListSize:
				{
					updateFuncs = $.appendOne(updateFuncs, $.functionValue((): void => {
						;(t$ as http2Server).maxSendHeaderListSize = $.varRef<number>(0);
						;(t$ as http2Server).maxSendHeaderListSize!.value = s.Val
					}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), $.appendZeros.nil)
					break
				}
				default:
				{
					ss = $.appendOne(ss, (s).clone())
					break
				}
			}
			return null
		}, ({ kind: $.TypeKind.Function, params: ["http2.Setting"], results: ["error"] } as $.FunctionTypeInfo)))
		await __goscript_controlbuf.controlBuffer.prototype.executeAndPut.call((t$ as http2Server).controlBuf, $.functionValue(async (): globalThis.Promise<boolean> => {
			for (let __goscriptRangeTarget2 = updateFuncs, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let f = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as (() => void) | null)
				void (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)), $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.incomingSettings({ss: ss}), "*transport.incomingSettings", /* @__PURE__ */ $.pointerType("transport.incomingSettings")))
	}

	public async handleWindowUpdate(f: http2.WindowUpdateFrame | $.VarRef<http2.WindowUpdateFrame> | null): globalThis.Promise<void> {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		await __goscript_controlbuf.controlBuffer.prototype.put.call($.pointerValue<http2Server>(t).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.incomingWindowUpdate({streamID: $.pointerValue<http2.WindowUpdateFrame>(f).FrameHeader.Header().StreamID, increment: $.pointerValue<http2.WindowUpdateFrame>(f).Increment}), "*transport.incomingWindowUpdate", /* @__PURE__ */ $.pointerType("transport.incomingWindowUpdate")))
	}

	public async keepalive(): globalThis.Promise<void> {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		using __defer = new $.DisposableStack()
		const t$: http2Server = t == null ? $.pointerTarget<http2Server>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Server>(t)
		let p: __goscript_controlbuf.ping | $.VarRef<__goscript_controlbuf.ping> | null = new __goscript_controlbuf.ping()
		// True iff a ping has been sent, and no data has been received since then.
		let outstandingPing = false
		// Amount of time remaining before which we should receive an ACK for the
		// last sent ping.
		let kpTimeoutLeft = 0n
		// Records the last value of t.lastRead before we go block on the timer.
		// This is required to check for read activity since then.
		let prevNano = $.markAsStructValue($.cloneStructValue(time.Now())).UnixNano()
		// Initialize the different timers to their default values.
		let idleTimer: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer((t$ as http2Server).kp.MaxConnectionIdle)
		let ageTimer: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer((t$ as http2Server).kp.MaxConnectionAge)
		let ageTimer$: time.Timer = ageTimer == null ? $.pointerTarget<time.Timer>(ageTimer) : (ageTimer as any).__isVarRef === true ? (ageTimer as any).value : (ageTimer as any).__goValue === undefined ? (ageTimer as any) : $.pointerTarget<time.Timer>(ageTimer)
		let kpTimer: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer((t$ as http2Server).kp.Time)
		__defer.defer(() => { ((): void => {
			// We need to drain the underlying channel in these timers after a call
			// to Stop(), only if we are interested in resetting them. Clearly we
			// are not interested in resetting them here.
			time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(idleTimer))
			time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(ageTimer))
			time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(kpTimer))
		})() })

		while (true) {
			const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, any>([
				{
					id: 0,
					isSend: false,
					channel: $.pointerValue<time.Timer>(idleTimer).C,
					onSelected: async (__goscriptSelect1Result) => {
						return __goscriptSelect1Result
					}
				},
				{
					id: 1,
					isSend: false,
					channel: (ageTimer$ as time.Timer).C,
					onSelected: async (__goscriptSelect1Result) => {
						return __goscriptSelect1Result
					}
				},
				{
					id: 2,
					isSend: false,
					channel: $.pointerValue<time.Timer>(kpTimer).C,
					onSelected: async (__goscriptSelect1Result) => {
						return __goscriptSelect1Result
					}
				},
				{
					id: 3,
					isSend: false,
					channel: (t$ as http2Server).done,
					onSelected: async (__goscriptSelect1Result) => {
						return __goscriptSelect1Result
					}
				}
			], false)
			switch (__goscriptSelect1Value?.id) {
				case 0:
					{
						const __goscriptSelect1Result = __goscriptSelect1Value
						await (t$ as http2Server).mu.Lock()
						let idle = $.markAsStructValue($.cloneStructValue((t$ as http2Server).idle))
						if ($.markAsStructValue($.cloneStructValue(idle)).IsZero()) {
							void (t$ as http2Server).mu.Unlock()
							time.Timer.prototype.Reset.call($.pointerValue<time.Timer>(idleTimer), (t$ as http2Server).kp.MaxConnectionIdle)
							continue
						}
						let val = $.int64Sub((t$ as http2Server).kp.MaxConnectionIdle, time.Since($.markAsStructValue($.cloneStructValue(idle))))
						void (t$ as http2Server).mu.Unlock()
						if (val <= 0n) {
							// The connection has been idle for a duration of keepalive.MaxConnectionIdle or more.
							// Gracefully close the connection.
							await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).Drain("max_idle") : http2Server.prototype.Drain.call(t, "max_idle"))
							return
						}
						time.Timer.prototype.Reset.call($.pointerValue<time.Timer>(idleTimer), val)
						break
					}
				case 1:
					{
						const __goscriptSelect1Result = __goscriptSelect1Value
						await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).Drain("max_age") : http2Server.prototype.Drain.call(t, "max_age"))
						time.Timer.prototype.Reset.call($.pointerValue<time.Timer>(ageTimer), (t$ as http2Server).kp.MaxConnectionAgeGrace)
						const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, void>([
							{
								id: 0,
								isSend: false,
								channel: (ageTimer$ as time.Timer).C,
								onSelected: async (__goscriptSelect2Result) => {
									if (await grpclog.PrefixLogger.prototype.V.call((t$ as http2Server).logger, 2)) {
										await grpclog.PrefixLogger.prototype.Infof.call((t$ as http2Server).logger, "Closing server transport due to maximum connection age", null)
									}
									await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.closeConnection(undefined, true), "transport.closeConnection", "transport.closeConnection"))
								}
							},
							{
								id: 1,
								isSend: false,
								channel: (t$ as http2Server).done,
							}
						], false)
						if (__goscriptSelect2HasReturn) {
							return __goscriptSelect2Value
						}
						return
						break
					}
				case 2:
					{
						const __goscriptSelect1Result = __goscriptSelect1Value
						let lastRead = atomic.LoadInt64($.fieldRef((t$ as http2Server)._fields, "lastRead"))
						if (lastRead > prevNano) {
							// There has been read activity since the last time we were
							// here. Setup the timer to fire at kp.Time seconds from
							// lastRead time and continue.
							outstandingPing = false
							time.Timer.prototype.Reset.call($.pointerValue<time.Timer>(kpTimer), $.int64Sub(($.int64Add($.int64(lastRead), (t$ as http2Server).kp.Time)), $.int64($.markAsStructValue($.cloneStructValue(time.Now())).UnixNano())))
							prevNano = lastRead
							continue
						}
						if (outstandingPing && (kpTimeoutLeft <= 0n)) {
							await http2Server.prototype.Close.call(t, fmt.Errorf("keepalive ping not acked within timeout %s", $.namedValueInterfaceValue<any>((t$ as http2Server).kp.Timeout, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
							return
						}
						if (!outstandingPing) {
							if (channelz2.IsOn()) {
								$.pointerValue<channelz2.Socket>((t$ as http2Server).channelz).SocketMetrics.KeepAlivesSent.Add(1n)
							}
							await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(p, "*transport.ping", /* @__PURE__ */ $.pointerType("transport.ping")))
							kpTimeoutLeft = (t$ as http2Server).kp.Timeout
							outstandingPing = true
						}
						// The amount of time to sleep here is the minimum of kp.Time and
						// timeoutLeft. This will ensure that we wait only for kp.Time
						// before sending out the next ping (for cases where the ping is
						// acked).
						let sleepDuration = $.min((t$ as http2Server).kp.Time, kpTimeoutLeft)
						kpTimeoutLeft = $.int64Sub(kpTimeoutLeft, sleepDuration)
						time.Timer.prototype.Reset.call($.pointerValue<time.Timer>(kpTimer), sleepDuration)
						break
					}
				case 3:
					{
						const __goscriptSelect1Result = __goscriptSelect1Value
						return
						break
					}
			}
		}
	}

	public async operateHeaders(ctx: context.Context | null, frame: http2.MetaHeadersFrame | $.VarRef<http2.MetaHeadersFrame> | null, handle: ((_p0: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null) => void) | null): globalThis.Promise<$.GoError> {
		let t: http2Server | $.VarRef<http2Server> | null = this;
		using __defer = new $.DisposableStack()
		const t$: http2Server = t == null ? $.pointerTarget<http2Server>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Server>(t)
		const frame$: http2.MetaHeadersFrame = frame == null ? $.pointerTarget<http2.MetaHeadersFrame>(frame) : (frame as any).__isVarRef === true ? (frame as any).value : (frame as any).__goValue === undefined ? (frame as any) : $.pointerTarget<http2.MetaHeadersFrame>(frame)
		// Acquire max stream ID lock for entire duration
		await (t$ as http2Server).maxStreamMu.Lock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())((t$ as http2Server).maxStreamMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })

		let streamID = $.pointerValue<http2.HeadersFrame>((frame$ as http2.MetaHeadersFrame).HeadersFrame).FrameHeader.Header().StreamID

		// frame.Truncated is set to true when framer detects that the current header
		// list size hits MaxHeaderListSize limit.
		if ((frame$ as http2.MetaHeadersFrame).Truncated) {
			await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.cleanupStream({streamID: streamID, rst: true, rstCode: 6, onWrite: $.functionValue((): void => {
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))}), "*transport.cleanupStream", /* @__PURE__ */ $.pointerType("transport.cleanupStream")))
			return null
		}

		if (($.uint((streamID % 2), 32) != 1) || (streamID <= (t$ as http2Server).maxStreamID)) {
			// illegal gRPC stream id.
			return fmt.Errorf("received an illegal stream id: %v. headers frame: %+v", $.basicInterfaceValue(streamID, "uint32"), $.interfaceValue(frame, "*http2.MetaHeadersFrame", /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")))
		}
		;(t$ as http2Server).maxStreamID = streamID

		let buf: __goscript_transport.recvBuffer | $.VarRef<__goscript_transport.recvBuffer> | null = __goscript_transport.newRecvBuffer()
		let s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null = new __goscript_transport.Stream({id: streamID, st: $.interfaceValue<__goscript_transport.ServerTransport | null>(t, "*transport.http2Server", /* @__PURE__ */ $.pointerType("transport.http2Server")), buf: buf, fc: new __goscript_flowcontrol.inFlow({limit: $.uint((t$ as http2Server).initialWindowSize, 32)}), headerWireLength: $.int($.pointerValue<http2.HeadersFrame>((frame$ as http2.MetaHeadersFrame).HeadersFrame).FrameHeader.Header().Length)})
		let s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		let isGRPC: boolean = false
		let contentType: string = ""
		let mdata: metadata.MD = $.makeMap<string, $.Slice<string>>()
		let httpMethod: string = ""
		let protocolError: boolean = false
		let headerError: status3.Status | $.VarRef<status3.Status> | null = null! as status3.Status | $.VarRef<status3.Status> | null
		let timeoutSet: boolean = false
		let timeout: time.Duration = 0n

		for (let __goscriptRangeTarget3 = (frame$ as http2.MetaHeadersFrame).Fields, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let hf = ((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as hpack.HeaderField)).clone()
			switch (hf.Name) {
				case "content-type":
				{
					let [contentSubtype, validContentType] = grpcutil.ContentSubtype(hf.Value)
					if (!validContentType) {
						contentType = hf.Value
						break
					}
					$.mapSet(mdata, hf.Name, $.appendOne($.mapGet<string, $.Slice<string>, $.Slice<string>>(mdata, hf.Name, null)[0], hf.Value));
					;(s$ as __goscript_transport.Stream).contentSubtype = contentSubtype
					isGRPC = true
					break
				}
				case "grpc-accept-encoding":
				{
					$.mapSet(mdata, hf.Name, $.appendOne($.mapGet<string, $.Slice<string>, $.Slice<string>>(mdata, hf.Name, null)[0], hf.Value))
					if ($.stringEqual(hf.Value, "")) {
						continue
					}
					let compressors = hf.Value
					if (!$.stringEqual((s$ as __goscript_transport.Stream).clientAdvertisedCompressors, "")) {
						compressors = $.concatString(($.concatString((s$ as __goscript_transport.Stream).clientAdvertisedCompressors, ",")), compressors)
					}
					;(s$ as __goscript_transport.Stream).clientAdvertisedCompressors = compressors
					break
				}
				case "grpc-encoding":
				{
					;(s$ as __goscript_transport.Stream).recvCompress = hf.Value
					break
				}
				case ":method":
				{
					httpMethod = hf.Value
					break
				}
				case ":path":
				{
					;(s$ as __goscript_transport.Stream).method = hf.Value
					break
				}
				case "grpc-timeout":
				{
					timeoutSet = true
					let err: $.GoError = null! as $.GoError
					{
						let __goscriptTuple4: any = __goscript_http_util.decodeTimeout(hf.Value)
						timeout = __goscriptTuple4[0]
						err = __goscriptTuple4[1]
						if (err != null) {
							headerError = await status.Newf(13, "malformed grpc-timeout: %v", $.arrayToSlice<any>([(err as any)]))
						}
					}
					break
				}
				case "connection":
				{
					if (await grpclog.PrefixLogger.prototype.V.call((t$ as http2Server).logger, 2)) {
						await grpclog.PrefixLogger.prototype.Infof.call((t$ as http2Server).logger, "Received a HEADERS frame with a :connection header which makes the request malformed, as per the HTTP/2 spec", null)
					}
					protocolError = true
					break
				}
				default:
				{
					if (__goscript_http_util.isReservedHeader(hf.Name) && !__goscript_http_util.isWhitelistedHeader(hf.Name)) {
						break
					}
					let [v, err] = __goscript_http_util.decodeMetadataHeader(hf.Name, hf.Value)
					if (err != null) {
						headerError = await status.Newf(13, "malformed binary metadata %q in header %q: %v", $.arrayToSlice<any>([hf.Value, hf.Name, (err as any)]))
						await grpclog.PrefixLogger.prototype.Warningf.call((t$ as http2Server).logger, "Failed to decode metadata header (%q, %q): %v", $.arrayToSlice<any>([hf.Name, hf.Value, (err as any)]))
						break
					}
					$.mapSet(mdata, hf.Name, $.appendOne($.mapGet<string, $.Slice<string>, $.Slice<string>>(mdata, hf.Name, null)[0], v))
					break
				}
			}
		}

		// "If multiple Host headers or multiple :authority headers are present, the
		// request must be rejected with an HTTP status code 400 as required by Host
		// validation in RFC 7230 §5.4, gRPC status code INTERNAL, or RST_STREAM
		// with HTTP/2 error code PROTOCOL_ERROR." - A41. Since this is a HTTP/2
		// error, this takes precedence over a client not speaking gRPC.
		if (($.sliceLen($.mapGet<string, $.Slice<string>, $.Slice<string>>(mdata, ":authority", null)[0]) > 1) || ($.sliceLen($.mapGet<string, $.Slice<string>, $.Slice<string>>(mdata, "host", null)[0]) > 1)) {
			let errMsg = await fmt.Sprintf("num values of :authority: %v, num values of host: %v, both must only have 1 value as per HTTP/2 spec", $.basicInterfaceValue($.sliceLen($.mapGet<string, $.Slice<string>, $.Slice<string>>(mdata, ":authority", null)[0]), "int"), $.basicInterfaceValue($.sliceLen($.mapGet<string, $.Slice<string>, $.Slice<string>>(mdata, "host", null)[0]), "int"))
			if (await grpclog.PrefixLogger.prototype.V.call((t$ as http2Server).logger, 2)) {
				await grpclog.PrefixLogger.prototype.Infof.call((t$ as http2Server).logger, "Aborting the stream early: %v", $.arrayToSlice<any>([errMsg]))
			}
			await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>((() => { const __goscriptLiteralField8 = status.New(13, errMsg); const __goscriptLiteralField9 = !$.pointerValue<http2.HeadersFrame>((frame$ as http2.MetaHeadersFrame).HeadersFrame).StreamEnded(); return new __goscript_controlbuf.earlyAbortStream({httpStatus: 400, streamID: streamID, contentSubtype: (s$ as __goscript_transport.Stream).contentSubtype, status: __goscriptLiteralField8, rst: __goscriptLiteralField9}) })(), "*transport.earlyAbortStream", /* @__PURE__ */ $.pointerType("transport.earlyAbortStream")))
			return null
		}

		if (protocolError) {
			await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.cleanupStream({streamID: streamID, rst: true, rstCode: 1, onWrite: $.functionValue((): void => {
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))}), "*transport.cleanupStream", /* @__PURE__ */ $.pointerType("transport.cleanupStream")))
			return null
		}
		if (!isGRPC) {
			await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>((await (async () => { const __goscriptLiteralField10 = await status.Newf(3, "invalid gRPC request content-type %q", $.arrayToSlice<any>([contentType])); const __goscriptLiteralField11 = !$.pointerValue<http2.HeadersFrame>((frame$ as http2.MetaHeadersFrame).HeadersFrame).StreamEnded(); return new __goscript_controlbuf.earlyAbortStream({httpStatus: 415, streamID: streamID, contentSubtype: (s$ as __goscript_transport.Stream).contentSubtype, status: __goscriptLiteralField10, rst: __goscriptLiteralField11}) })()), "*transport.earlyAbortStream", /* @__PURE__ */ $.pointerType("transport.earlyAbortStream")))
			return null
		}
		if (headerError != null) {
			await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>((() => { const __goscriptLiteralField12 = !$.pointerValue<http2.HeadersFrame>((frame$ as http2.MetaHeadersFrame).HeadersFrame).StreamEnded(); return new __goscript_controlbuf.earlyAbortStream({httpStatus: 400, streamID: streamID, contentSubtype: (s$ as __goscript_transport.Stream).contentSubtype, status: headerError, rst: __goscriptLiteralField12}) })(), "*transport.earlyAbortStream", /* @__PURE__ */ $.pointerType("transport.earlyAbortStream")))
			return null
		}

		// "If :authority is missing, Host must be renamed to :authority." - A41
		if ($.sliceLen($.mapGet<string, $.Slice<string>, $.Slice<string>>(mdata, ":authority", null)[0]) == 0) {
			// No-op if host isn't present, no eventual :authority header is a valid
			// RPC.
			{
				let __goscriptTuple5: any = $.mapGet<string, $.Slice<string>, $.Slice<string>>(mdata, "host", null)
				let host: $.Slice<string> = __goscriptTuple5[0]
				let ok = __goscriptTuple5[1]
				if (ok) {
					$.mapSet(mdata, ":authority", host)
					$.deleteMapEntry(mdata, "host")
				}
			}
		} else {
			// "If :authority is present, Host must be discarded" - A41
			$.deleteMapEntry(mdata, "host")
		}

		if ($.pointerValue<http2.HeadersFrame>((frame$ as http2.MetaHeadersFrame).HeadersFrame).StreamEnded()) {
			// s is just created by the caller. No lock needed.
			;(s$ as __goscript_transport.Stream).state = 2
		}
		if (timeoutSet) {
			let __goscriptTuple6: any = context.WithTimeout($.pointerValueOrNil(ctx)!, timeout);
			;(s$ as __goscript_transport.Stream).ctx = __goscriptTuple6[0];
			;(s$ as __goscript_transport.Stream).cancel = __goscriptTuple6[1]
		} else {
			let __goscriptTuple7: any = context.WithCancel($.pointerValueOrNil(ctx)!);
			;(s$ as __goscript_transport.Stream).ctx = __goscriptTuple7[0];
			;(s$ as __goscript_transport.Stream).cancel = __goscriptTuple7[1]
		}

		// Attach the received metadata to the context.
		if ($.len(mdata) > 0) {
			;(s$ as __goscript_transport.Stream).ctx = metadata.NewIncomingContext((s$ as __goscript_transport.Stream).ctx, mdata)
			{
				let statsTags: $.Slice<string> = $.mapGet<string, $.Slice<string>, $.Slice<string>>(mdata, "grpc-tags-bin", null)[0]
				if ($.sliceLen(statsTags) > 0) {
					;(s$ as __goscript_transport.Stream).ctx = stats2.SetIncomingTags((s$ as __goscript_transport.Stream).ctx, $.stringToBytes($.arrayIndex(statsTags!, $.sliceLen(statsTags) - 1)))
				}
			}
			{
				let statsTrace: $.Slice<string> = $.mapGet<string, $.Slice<string>, $.Slice<string>>(mdata, "grpc-trace-bin", null)[0]
				if ($.sliceLen(statsTrace) > 0) {
					;(s$ as __goscript_transport.Stream).ctx = stats2.SetIncomingTrace((s$ as __goscript_transport.Stream).ctx, $.stringToBytes($.arrayIndex(statsTrace!, $.sliceLen(statsTrace) - 1)))
				}
			}
		}
		await (t$ as http2Server).mu.Lock()
		if ((t$ as http2Server).state != 0) {
			void (t$ as http2Server).mu.Unlock()
			void (__goscriptAwait = (s$ as __goscript_transport.Stream).cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return null
		}
		if ($.uint($.len((t$ as http2Server).activeStreams), 32) >= (t$ as http2Server).maxStreams) {
			void (t$ as http2Server).mu.Unlock()
			await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.cleanupStream({streamID: streamID, rst: true, rstCode: 7, onWrite: $.functionValue((): void => {
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))}), "*transport.cleanupStream", /* @__PURE__ */ $.pointerType("transport.cleanupStream")))
			void (__goscriptAwait = (s$ as __goscript_transport.Stream).cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return null
		}
		if (!$.stringEqual(httpMethod, http.MethodPost)) {
			void (t$ as http2Server).mu.Unlock()
			let errMsg = await fmt.Sprintf("Received a HEADERS frame with :method %q which should be POST", httpMethod)
			if (await grpclog.PrefixLogger.prototype.V.call((t$ as http2Server).logger, 2)) {
				await grpclog.PrefixLogger.prototype.Infof.call((t$ as http2Server).logger, "Aborting the stream early: %v", $.arrayToSlice<any>([errMsg]))
			}
			await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>((() => { const __goscriptLiteralField13 = status.New(13, errMsg); const __goscriptLiteralField14 = !$.pointerValue<http2.HeadersFrame>((frame$ as http2.MetaHeadersFrame).HeadersFrame).StreamEnded(); return new __goscript_controlbuf.earlyAbortStream({httpStatus: 405, streamID: streamID, contentSubtype: (s$ as __goscript_transport.Stream).contentSubtype, status: __goscriptLiteralField13, rst: __goscriptLiteralField14}) })(), "*transport.earlyAbortStream", /* @__PURE__ */ $.pointerType("transport.earlyAbortStream")))
			void (__goscriptAwait = (s$ as __goscript_transport.Stream).cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return null
		}
		if ((t$ as http2Server).inTapHandle != null) {
			let err: $.GoError = null! as $.GoError
			{
				let __goscriptTuple8: any = await (t$ as http2Server).inTapHandle!((s$ as __goscript_transport.Stream).ctx, new tap.Info({FullMethodName: (s$ as __goscript_transport.Stream).method, Header: mdata}));
				;(s$ as __goscript_transport.Stream).ctx = __goscriptTuple8[0]
				err = __goscriptTuple8[1]
				if (err != null) {
					void (t$ as http2Server).mu.Unlock()
					if (await grpclog.PrefixLogger.prototype.V.call((t$ as http2Server).logger, 2)) {
						await grpclog.PrefixLogger.prototype.Infof.call((t$ as http2Server).logger, "Aborting the stream early due to InTapHandle failure: %v", $.arrayToSlice<any>([(err as any)]))
					}
					let __goscriptTuple9: any = await status.FromError(err)
					let stat: status3.Status | $.VarRef<status3.Status> | null = __goscriptTuple9[0]
					let ok = __goscriptTuple9[1]
					if (!ok) {
						stat = status.New(7, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					}
					await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>((() => { const __goscriptLiteralField15 = !$.pointerValue<http2.HeadersFrame>((frame$ as http2.MetaHeadersFrame).HeadersFrame).StreamEnded(); return new __goscript_controlbuf.earlyAbortStream({httpStatus: 200, streamID: (s$ as __goscript_transport.Stream).id, contentSubtype: (s$ as __goscript_transport.Stream).contentSubtype, status: stat, rst: __goscriptLiteralField15}) })(), "*transport.earlyAbortStream", /* @__PURE__ */ $.pointerType("transport.earlyAbortStream")))
					return null
				}
			}
		}
		$.mapSet((t$ as http2Server).activeStreams, streamID, s)
		if ($.len((t$ as http2Server).activeStreams) == 1) {
			$.assignStruct((t$ as http2Server).idle, $.markAsStructValue(new time.Time()))
		}
		void (t$ as http2Server).mu.Unlock()
		if (channelz2.IsOn()) {
			$.pointerValue<channelz2.Socket>((t$ as http2Server).channelz).SocketMetrics.StreamsStarted.Add(1n)
			$.pointerValue<channelz2.Socket>((t$ as http2Server).channelz).SocketMetrics.LastRemoteStreamCreatedTimestamp.Store($.markAsStructValue($.cloneStructValue(time.Now())).UnixNano())
		}
		;(s$ as __goscript_transport.Stream).requestRead = $.functionValue(async (n: number): globalThis.Promise<void> => {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).adjustWindow(s, $.uint(n, 32)) : http2Server.prototype.adjustWindow.call(t, s, $.uint(n, 32)))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo));
		;(s$ as __goscript_transport.Stream).ctxDone = ((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((s$ as __goscript_transport.Stream).ctx).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null);
		;(s$ as __goscript_transport.Stream).wq = __goscript_flowcontrol.newWriteQuota(65536, (s$ as __goscript_transport.Stream).ctxDone);
		;(s$ as __goscript_transport.Stream).trReader = new __goscript_transport.transportReader({reader: new __goscript_transport.recvBufferReader({ctx: (s$ as __goscript_transport.Stream).ctx, ctxDone: (s$ as __goscript_transport.Stream).ctxDone, recv: (s$ as __goscript_transport.Stream).buf}), windowHandler: $.functionValue(async (n: number): globalThis.Promise<void> => {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).updateWindow(s, $.uint(n, 32)) : http2Server.prototype.updateWindow.call(t, s, $.uint(n, 32)))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo))})
		// Register the stream with loopy.
		await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.registerStream({streamID: (s$ as __goscript_transport.Stream).id, wq: (s$ as __goscript_transport.Stream).wq}), "*transport.registerStream", /* @__PURE__ */ $.pointerType("transport.registerStream")))
		void (__goscriptAwait = handle!(s), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return null
	}

	public async outgoingGoAwayHandler(g: __goscript_controlbuf.goAway | $.VarRef<__goscript_controlbuf.goAway> | null): globalThis.Promise<[boolean, $.GoError]> {
		let t: http2Server | $.VarRef<http2Server> | null = this;
		const t$: http2Server = t == null ? $.pointerTarget<http2Server>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Server>(t)
		const g$: __goscript_controlbuf.goAway = g == null ? $.pointerTarget<__goscript_controlbuf.goAway>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<__goscript_controlbuf.goAway>(g)
		await (t$ as http2Server).maxStreamMu.Lock()
		await (t$ as http2Server).mu.Lock()
		if ((t$ as http2Server).state == 1) {
			void (t$ as http2Server).mu.Unlock()
			void (t$ as http2Server).maxStreamMu.Unlock()
			// The transport is closing.
			return [false, $.interfaceValue<$.GoError>((__goscript_transport.ErrConnClosing).clone(), "transport.ConnectionError", "transport.ConnectionError")]
		}
		if (!(g$ as __goscript_controlbuf.goAway).headsUp) {
			// Stop accepting more streams now.
			;(t$ as http2Server).state = 2
			let sid = (t$ as http2Server).maxStreamID
			let retErr = (g$ as __goscript_controlbuf.goAway).closeConn
			if ($.len((t$ as http2Server).activeStreams) == 0) {
				retErr = errors.New("second GOAWAY written and no active streams left to process")
			}
			void (t$ as http2Server).mu.Unlock()
			void (t$ as http2Server).maxStreamMu.Unlock()
			{
				let err = await http2.Framer.prototype.WriteGoAway.call($.pointerValue<__goscript_http_util.framer>((t$ as http2Server).framer).fr, sid, (g$ as __goscript_controlbuf.goAway).code, (g$ as __goscript_controlbuf.goAway).debugData)
				if (err != null) {
					return [false, err]
				}
			}
			await __goscript_http_util.bufWriter.prototype.Flush.call($.pointerValue<__goscript_http_util.framer>((t$ as http2Server).framer).writer)
			if (retErr != null) {
				return [false, retErr]
			}
			return [true, null]
		}
		void (t$ as http2Server).mu.Unlock()
		void (t$ as http2Server).maxStreamMu.Unlock()
		// For a graceful close, send out a GoAway with stream ID of MaxUInt32,
		// Follow that with a ping and wait for the ack to come back or a timer
		// to expire. During this time accept new streams since they might have
		// originated before the GoAway reaches the client.
		// After getting the ack or timer expiration send out another GoAway this
		// time with an ID of the max stream server intends to process.
		{
			let err = await http2.Framer.prototype.WriteGoAway.call($.pointerValue<__goscript_http_util.framer>((t$ as http2Server).framer).fr, 4294967295, 0, (g$ as __goscript_controlbuf.goAway).debugData)
			if (err != null) {
				return [false, err]
			}
		}
		{
			let err = await http2.Framer.prototype.WritePing.call($.pointerValue<__goscript_http_util.framer>((t$ as http2Server).framer).fr, false, $.cloneArrayValue($.pointerValue<__goscript_controlbuf.ping>(__goscript_get_goAwayPing()).data, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)))
			if (err != null) {
				return [false, err]
			}
		}
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			using __defer = new $.DisposableStack()
			let timer: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer(5000000000n)
			__defer.defer(() => { time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(timer)) })
			const [__goscriptSelect3HasReturn, __goscriptSelect3Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: grpcsync.Event.prototype.Done.call((t$ as http2Server).drainEvent),
				},
				{
					id: 1,
					isSend: false,
					channel: $.pointerValue<time.Timer>(timer).C,
				},
				{
					id: 2,
					isSend: false,
					channel: (t$ as http2Server).done,
					onSelected: async (__goscriptSelect3Result) => {
						return $.selectVoidReturn()
					}
				}
			], false)
			if (__goscriptSelect3HasReturn) {
				return __goscriptSelect3Value
			}
			await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.goAway({code: (g$ as __goscript_controlbuf.goAway).code, debugData: (g$ as __goscript_controlbuf.goAway).debugData}), "*transport.goAway", /* @__PURE__ */ $.pointerType("transport.goAway")))
		})() })
		return [false, null]
	}

	public setResetPingStrikes(): void {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		atomic.StoreUint32($.fieldRef($.pointerValue<http2Server>(t)._fields, "resetPingStrikes"), 1)
	}

	public async socketMetrics(): globalThis.Promise<channelz2.EphemeralSocketMetrics | $.VarRef<channelz2.EphemeralSocketMetrics> | null> {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		return (await (async () => { const __goscriptLiteralField16 = $.int64(__goscript_flowcontrol.trInFlow.prototype.getSize.call($.pointerValue<http2Server>(t).fc)); const __goscriptLiteralField17 = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).getOutFlowWindow() : http2Server.prototype.getOutFlowWindow.call(t)); return new channelz2.EphemeralSocketMetrics({LocalFlowControlWindow: __goscriptLiteralField16, RemoteFlowControlWindow: __goscriptLiteralField17}) })())
	}

	public async streamContextErr(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null): globalThis.Promise<$.GoError> {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		const [__goscriptSelect4HasReturn, __goscriptSelect4Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: false,
				channel: $.pointerValue<http2Server>(t).done,
				onSelected: async (__goscriptSelect4Result) => {
					return $.interfaceValue<$.GoError>((__goscript_transport.ErrConnClosing).clone(), "transport.ConnectionError", "transport.ConnectionError")
				}
			},
			{
				id: -1,
				isSend: false,
				channel: null,
			}
		], true)
		if (__goscriptSelect4HasReturn) {
			return __goscriptSelect4Value
		}
		return __goscript_transport.ContextErr((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>($.pointerValue<__goscript_transport.Stream>(s).ctx).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	public async updateFlowControl(n: number): globalThis.Promise<void> {
		let t: http2Server | $.VarRef<http2Server> | null = this;
		const t$: http2Server = t == null ? $.pointerTarget<http2Server>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Server>(t)
		await (t$ as http2Server).mu.Lock()
		for (const [__rangeKey, s] of (t$ as http2Server).activeStreams?.entries() ?? []) {
			await __goscript_flowcontrol.inFlow.prototype.newLimit.call($.pointerValue<__goscript_transport.Stream>(s).fc, n)
		}
		;(t$ as http2Server).initialWindowSize = $.int(n, 32)
		void (t$ as http2Server).mu.Unlock()
		await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>((() => { const __goscriptLiteralField18 = __goscript_flowcontrol.trInFlow.prototype.newLimit.call((t$ as http2Server).fc, n); return new __goscript_controlbuf.outgoingWindowUpdate({streamID: 0, increment: __goscriptLiteralField18}) })(), "*transport.outgoingWindowUpdate", /* @__PURE__ */ $.pointerType("transport.outgoingWindowUpdate")))
		await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Server).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.outgoingSettings({ss: $.arrayToSlice<http2.Setting>([new http2.Setting({ID: 4, Val: n}, true)])}), "*transport.outgoingSettings", /* @__PURE__ */ $.pointerType("transport.outgoingSettings")))
	}

	public async updateWindow(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, n: number): globalThis.Promise<void> {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		const s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		{
			let w = await __goscript_flowcontrol.inFlow.prototype.onRead.call((s$ as __goscript_transport.Stream).fc, n)
			if (w > 0) {
				await __goscript_controlbuf.controlBuffer.prototype.put.call($.pointerValue<http2Server>(t).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.outgoingWindowUpdate({streamID: (s$ as __goscript_transport.Stream).id, increment: w}), "*transport.outgoingWindowUpdate", /* @__PURE__ */ $.pointerType("transport.outgoingWindowUpdate")))
			}
		}
	}

	public async writeHeaderLocked(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null): globalThis.Promise<$.GoError> {
		const t: http2Server | $.VarRef<http2Server> | null = this;
		const t$: http2Server = t == null ? $.pointerTarget<http2Server>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Server>(t)
		const s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		// TODO(mmukhi): Benchmark if the performance gets better if count the metadata and other header fields
		// first and create a slice of that exact size.
		let headerFields: $.Slice<hpack.HeaderField> = $.makeSlice<hpack.HeaderField>(0, 2, undefined, () => new hpack.HeaderField(undefined, true))
		headerFields = $.appendOne(headerFields, new hpack.HeaderField({Name: ":status", Value: "200"}, true))
		headerFields = $.appendOne(headerFields, (() => { const __goscriptLiteralField19 = grpcutil.ContentType((s$ as __goscript_transport.Stream).contentSubtype); return new hpack.HeaderField({Name: "content-type", Value: __goscriptLiteralField19}, true) })())
		if (!$.stringEqual((s$ as __goscript_transport.Stream).sendCompress, "")) {
			headerFields = $.appendOne(headerFields, new hpack.HeaderField({Name: "grpc-encoding", Value: (s$ as __goscript_transport.Stream).sendCompress}, true))
		}
		headerFields = appendHeaderFieldsFromMD(headerFields, (s$ as __goscript_transport.Stream).header)
		let hf: __goscript_controlbuf.headerFrame | $.VarRef<__goscript_controlbuf.headerFrame> | null = new __goscript_controlbuf.headerFrame({streamID: (s$ as __goscript_transport.Stream).id, hf: headerFields, endStream: false, onWrite: $.functionValue(((__receiver) => () => __receiver.setResetPingStrikes())((t$ as http2Server)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc/internal/transport.(*http2Server).setResetPingStrikes-fm")})
		let [success, err] = await __goscript_controlbuf.controlBuffer.prototype.executeAndPut.call((t$ as http2Server).controlBuf, $.functionValue(async (): globalThis.Promise<boolean> => {
			return await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).checkForHeaderListSize($.interfaceValue(hf, "*transport.headerFrame", /* @__PURE__ */ $.pointerType("transport.headerFrame"))) : http2Server.prototype.checkForHeaderListSize.call(t, $.interfaceValue(hf, "*transport.headerFrame", /* @__PURE__ */ $.pointerType("transport.headerFrame"))))
		}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)), $.interfaceValue<__goscript_controlbuf.cbItem | null>(hf, "*transport.headerFrame", /* @__PURE__ */ $.pointerType("transport.headerFrame")))
		if (!success) {
			if (err != null) {
				return err
			}
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).closeStream(s, true, 2, false) : http2Server.prototype.closeStream.call(t, s, true, 2, false))
			return ErrHeaderListSizeLimitViolation
		}
		for (let __goscriptRangeTarget4 = (t$ as http2Server).stats, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let sh = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as stats2.Handler | null)
			// Note: Headers are compressed with hpack after this call returns.
			// No WireLength field is set here.
			let outHeader: stats2.OutHeader | $.VarRef<stats2.OutHeader> | null = (() => { const __goscriptLiteralField20 = metadata.MD_Copy((s$ as __goscript_transport.Stream).header); return new stats2.OutHeader({Header: __goscriptLiteralField20, Compression: (s$ as __goscript_transport.Stream).sendCompress}) })()
			void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats2.Handler, null>) : $.pointerValue<Exclude<stats2.Handler, null>>(sh)).HandleRPC((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).Context() : __goscript_transport.Stream.prototype.Context.call(s)), $.interfaceValue<stats2.RPCStats | null>(outHeader, "*stats.OutHeader", /* @__PURE__ */ $.pointerType("stats.OutHeader"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"transport.http2Server",
		() => new http2Server(),
		() => [$.methodSignature("Close", [["err", "error"]], [], true), $.methodSignature("Drain", [["debugData", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("HandleStreams", [["ctx", "context.Context"], ["handle", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("transport.Stream")], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("IncrMsgRecv", [], [], true), $.methodSignature("IncrMsgSent", [], [], true), $.methodSignature("Peer", [], [/* @__PURE__ */ $.pointerType("peer.Peer")], true), $.methodSignature("Write", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")], ["hdr", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["data", /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice")], ["_", /* @__PURE__ */ $.pointerType("transport.Options")]], ["error"], true), $.methodSignature("WriteHeader", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")], ["md", "metadata.MD"]], ["error"], true), $.methodSignature("WriteStatus", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")], ["st", /* @__PURE__ */ $.pointerType("status.Status")]], ["error"], true), $.methodSignature("adjustWindow", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")], ["n", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("checkForHeaderListSize", [["it", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("closeStream", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")], ["rst", /* @__PURE__ */ $.basicType("bool")], ["rstCode", /* @__PURE__ */ $.basicType("uint32", "http2.ErrCode")], ["eosReceived", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("deleteStream", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")], ["eosReceived", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("finishStream", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")], ["rst", /* @__PURE__ */ $.basicType("bool")], ["rstCode", /* @__PURE__ */ $.basicType("uint32", "http2.ErrCode")], ["hdr", /* @__PURE__ */ $.pointerType("transport.headerFrame")], ["eosReceived", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("getOutFlowWindow", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("getStream", [["f", "http2.Frame"]], [/* @__PURE__ */ $.pointerType("transport.Stream"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("handleData", [["f", /* @__PURE__ */ $.pointerType("http2.DataFrame")]], [], true), $.methodSignature("handlePing", [["f", /* @__PURE__ */ $.pointerType("http2.PingFrame")]], [], true), $.methodSignature("handleRSTStream", [["f", /* @__PURE__ */ $.pointerType("http2.RSTStreamFrame")]], [], true), $.methodSignature("handleSettings", [["f", /* @__PURE__ */ $.pointerType("http2.SettingsFrame")]], [], true), $.methodSignature("handleWindowUpdate", [["f", /* @__PURE__ */ $.pointerType("http2.WindowUpdateFrame")]], [], true), $.methodSignature("keepalive", [], [], true), $.methodSignature("operateHeaders", [["ctx", "context.Context"], ["frame", /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")], ["handle", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("transport.Stream")], results: [] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("outgoingGoAwayHandler", [["g", /* @__PURE__ */ $.pointerType("transport.goAway")]], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("setResetPingStrikes", [], [], true), $.methodSignature("socketMetrics", [], [/* @__PURE__ */ $.pointerType("channelz.EphemeralSocketMetrics")], true), $.methodSignature("streamContextErr", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")]], ["error"], true), $.methodSignature("updateFlowControl", [["n", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("updateWindow", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")], ["n", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("writeHeaderLocked", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")]], ["error"], true)],
		http2Server,
		() => [/* @__PURE__ */ $.structField("lastRead", /* @__PURE__ */ $.basicType("int64"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("done", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("conn", "net.Conn", [2], 16, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("loopy", /* @__PURE__ */ $.pointerType("transport.loopyWriter"), [3], 32, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("readerDone", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [4], 40, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("loopyWriterDone", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [5], 48, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("peer", "peer.Peer", [6], 56, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("inTapHandle", ({ kind: $.TypeKind.Function, name: "tap.ServerInHandle", params: ["context.Context", /* @__PURE__ */ $.pointerType("tap.Info")], results: ["context.Context", "error"] } as $.FunctionTypeInfo), [7], 104, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("framer", /* @__PURE__ */ $.pointerType("transport.framer"), [8], 112, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("maxStreams", /* @__PURE__ */ $.basicType("uint32"), [9], 120, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("controlBuf", /* @__PURE__ */ $.pointerType("transport.controlBuffer"), [10], 128, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("fc", /* @__PURE__ */ $.pointerType("transport.trInFlow"), [11], 136, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("stats", /* @__PURE__ */ $.sliceType("stats.Handler"), [12], 144, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("kp", "keepalive.ServerParameters", [13], 168, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("kep", "keepalive.EnforcementPolicy", [14], 208, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("lastPingAt", "time.Time", [15], 224, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("pingStrikes", /* @__PURE__ */ $.basicType("uint8"), [16], 248, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("resetPingStrikes", /* @__PURE__ */ $.basicType("uint32"), [17], 252, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("initialWindowSize", /* @__PURE__ */ $.basicType("int32"), [18], 256, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("bdpEst", /* @__PURE__ */ $.pointerType("transport.bdpEstimator"), [19], 264, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("maxSendHeaderListSize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")), [20], 272, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [21], 280, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("drainEvent", /* @__PURE__ */ $.pointerType("grpcsync.Event"), [22], 288, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "transport.transportState"), [23], 296, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("activeStreams", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.pointerType("transport.Stream")), [24], 304, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("idle", "time.Time", [25], 312, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("channelz", /* @__PURE__ */ $.pointerType("channelz.Socket"), [26], 336, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("bufferPool", "mem.BufferPool", [27], 344, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("connectionID", /* @__PURE__ */ $.basicType("uint64"), [28], 360, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("maxStreamMu", "sync.Mutex", [29], 368, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("maxStreamID", /* @__PURE__ */ $.basicType("uint32"), [30], 376, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("grpclog.PrefixLogger"), [31], 384, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class connectionKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): connectionKey {
		return new connectionKey(this, true)
	}

	public __goscriptAssign(source: connectionKey): void {
	}

	static __typeInfo = $.registerStructType(
		"transport.connectionKey",
		() => new connectionKey(),
		() => [],
		connectionKey,
		() => []
	)
}

export const maxPingStrikes: number = 2

export const defaultPingTimeout: time.Duration = 7200000000000n

export let ErrIllegalHeaderWrite: $.GoError = await status.Error(13, "transport: SendHeader called multiple times")

export function __goscript_set_ErrIllegalHeaderWrite(__goscriptValue: $.GoError): void {
	ErrIllegalHeaderWrite = __goscriptValue
}

export let ErrHeaderListSizeLimitViolation: $.GoError = await status.Error(13, "transport: trying to send header list size larger than the limit set by peer")

export function __goscript_set_ErrHeaderListSizeLimitViolation(__goscriptValue: $.GoError): void {
	ErrHeaderListSizeLimitViolation = __goscriptValue
}

export let serverConnectionCounter: $.VarRef<bigint> = $.varRef(0n)

export function __goscript_set_serverConnectionCounter(__goscriptValue: bigint): void {
	serverConnectionCounter.value = __goscriptValue
}

export async function NewServerTransport(conn: net.Conn | null, config: __goscript_transport.ServerConfig | $.VarRef<__goscript_transport.ServerConfig> | null): globalThis.Promise<[__goscript_transport.ServerTransport | null, $.GoError]> {
	let err: $.GoError = null! as $.GoError
	await using __defer = new $.AsyncDisposableStack()
	const config$: __goscript_transport.ServerConfig = config == null ? $.pointerTarget<__goscript_transport.ServerConfig>(config) : (config as any).__isVarRef === true ? (config as any).value : (config as any).__goValue === undefined ? (config as any) : $.pointerTarget<__goscript_transport.ServerConfig>(config)
	let authInfo: credentials.AuthInfo | null = null! as credentials.AuthInfo | null
	let rawConn: net.Conn | null = conn
	if ((config$ as __goscript_transport.ServerConfig).Credentials != null) {
		let __goscriptShadow2: $.GoError = null! as $.GoError
		let __goscriptTuple10: any = await $.pointerValue<Exclude<credentials.TransportCredentials, null>>((config$ as __goscript_transport.ServerConfig).Credentials).ServerHandshake(rawConn)
		conn = __goscriptTuple10[0]
		authInfo = __goscriptTuple10[1]
		__goscriptShadow2 = __goscriptTuple10[2]
		if (__goscriptShadow2 != null) {
			// ErrConnDispatched means that the connection was dispatched away
			// from gRPC; those connections should be left open. io.EOF means
			// the connection was closed before handshaking completed, which can
			// happen naturally from probers. Return these errors directly.
			if (($.comparableEqual(__goscriptShadow2, credentials.ErrConnDispatched)) || ($.comparableEqual(__goscriptShadow2, io.EOF))) {
				return [null, __goscriptShadow2]
			}
			return [null, $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(false, __goscriptShadow2, "ServerHandshake(%q) failed: %v", $.arrayToSlice<any>([((__goscriptAwait = (rawConn !== null && (rawConn as any).__isVarRef !== true && (rawConn as any).__goValue === undefined ? (rawConn as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(rawConn)).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any), (__goscriptShadow2 as any)])), "transport.ConnectionError", "transport.ConnectionError")]
		}
	}
	let writeBufSize = (config$ as __goscript_transport.ServerConfig).WriteBufferSize
	let readBufSize = (config$ as __goscript_transport.ServerConfig).ReadBufferSize
	let maxHeaderListSize = 16777216
	if ((config$ as __goscript_transport.ServerConfig).MaxHeaderListSize != null) {
		maxHeaderListSize = $.pointerValue<number>((config$ as __goscript_transport.ServerConfig).MaxHeaderListSize)
	}
	let __goscriptShadow3: __goscript_http_util.framer | $.VarRef<__goscript_http_util.framer> | null = await __goscript_http_util.newFramer(conn, writeBufSize, readBufSize, (config$ as __goscript_transport.ServerConfig).SharedWriteBuffer, maxHeaderListSize)
	// Send initial settings as connection preface to client.
	let isettings: $.Slice<http2.Setting> = $.arrayToSlice<http2.Setting>([new http2.Setting({ID: 5, Val: 16384}, true)])
	if ((config$ as __goscript_transport.ServerConfig).MaxStreams != 4294967295) {
		isettings = $.appendOne(isettings, new http2.Setting({ID: 3, Val: (config$ as __goscript_transport.ServerConfig).MaxStreams}, true))
	}
	let dynamicWindow = true
	let iwz = 65535
	if ((config$ as __goscript_transport.ServerConfig).InitialWindowSize >= 65535) {
		iwz = (config$ as __goscript_transport.ServerConfig).InitialWindowSize
		dynamicWindow = false
	}
	let icwz = 65535
	if ((config$ as __goscript_transport.ServerConfig).InitialConnWindowSize >= 65535) {
		icwz = (config$ as __goscript_transport.ServerConfig).InitialConnWindowSize
		dynamicWindow = false
	}
	if (iwz != 65535) {
		isettings = $.appendOne(isettings, new http2.Setting({ID: 4, Val: $.uint(iwz, 32)}, true))
	}
	if ((config$ as __goscript_transport.ServerConfig).MaxHeaderListSize != null) {
		isettings = $.appendOne(isettings, new http2.Setting({ID: 6, Val: $.pointerValue<number>((config$ as __goscript_transport.ServerConfig).MaxHeaderListSize)}, true))
	}
	if ((config$ as __goscript_transport.ServerConfig).HeaderTableSize != null) {
		isettings = $.appendOne(isettings, new http2.Setting({ID: 1, Val: $.pointerValue<number>((config$ as __goscript_transport.ServerConfig).HeaderTableSize)}, true))
	}
	{
		let __goscriptShadow4 = await http2.Framer.prototype.WriteSettings.call($.pointerValue<__goscript_http_util.framer>(__goscriptShadow3).fr, isettings)
		if (__goscriptShadow4 != null) {
			return [null, $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(false, __goscriptShadow4, "transport: %v", $.arrayToSlice<any>([(__goscriptShadow4 as any)])), "transport.ConnectionError", "transport.ConnectionError")]
		}
	}
	// Adjust the connection flow control window if needed.
	{
		let delta = $.uint($.int(((icwz - 65535) | 0), 32), 32)
		if (delta > 0) {
			{
				let __goscriptShadow5 = await http2.Framer.prototype.WriteWindowUpdate.call($.pointerValue<__goscript_http_util.framer>(__goscriptShadow3).fr, 0, delta)
				if (__goscriptShadow5 != null) {
					return [null, $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(false, __goscriptShadow5, "transport: %v", $.arrayToSlice<any>([(__goscriptShadow5 as any)])), "transport.ConnectionError", "transport.ConnectionError")]
				}
			}
		}
	}
	let kp = ((config$ as __goscript_transport.ServerConfig).KeepaliveParams).clone()
	if (kp.MaxConnectionIdle == 0n) {
		kp.MaxConnectionIdle = 9223372036854775807n
	}
	if (kp.MaxConnectionAge == 0n) {
		kp.MaxConnectionAge = 9223372036854775807n
	}
	// Add a jitter to MaxConnectionAge.
	kp.MaxConnectionAge = $.int64Add(kp.MaxConnectionAge, await getJitter(kp.MaxConnectionAge))
	if (kp.MaxConnectionAgeGrace == 0n) {
		kp.MaxConnectionAgeGrace = 9223372036854775807n
	}
	if (kp.Time == 0n) {
		kp.Time = 7200000000000n
	}
	if (kp.Timeout == 0n) {
		kp.Timeout = 20000000000n
	}
	if (kp.Time != 9223372036854775807n) {
		{
			err = await syscall.SetTCPUserTimeout(rawConn, kp.Timeout)
			if (err != null) {
				return [null, $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(false, err, "transport: failed to set TCP_USER_TIMEOUT: %v", $.arrayToSlice<any>([(err as any)])), "transport.ConnectionError", "transport.ConnectionError")]
			}
		}
	}
	let kep = ((config$ as __goscript_transport.ServerConfig).KeepalivePolicy).clone()
	if (kep.MinTime == 0n) {
		kep.MinTime = 300000000000n
	}

	let done: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
	let __goscriptShadow6 = (await (async () => { const __goscriptLiteralField21 = (__goscriptAwait = (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? (conn as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(conn)).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField22 = (__goscriptAwait = (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? (conn as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(conn)).LocalAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new peer2.Peer({Addr: __goscriptLiteralField21, LocalAddr: __goscriptLiteralField22, AuthInfo: authInfo}, true) })())
	let t: http2Server | $.VarRef<http2Server> | null = (() => { const __goscriptLiteralField23 = $.markAsStructValue($.cloneStructValue(time.Now())); return new http2Server({done: done, conn: conn, peer: __goscriptShadow6, framer: __goscriptShadow3, readerDone: $.makeChannel<{}>(0, {}, "both"), loopyWriterDone: $.makeChannel<{}>(0, {}, "both"), maxStreams: (config$ as __goscript_transport.ServerConfig).MaxStreams, inTapHandle: (config$ as __goscript_transport.ServerConfig).InTapHandle, fc: new __goscript_flowcontrol.trInFlow({limit: $.uint(icwz, 32)}), state: 0, activeStreams: $.makeMap<number, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null>(), stats: (config$ as __goscript_transport.ServerConfig).StatsHandlers, kp: kp, idle: __goscriptLiteralField23, kep: kep, initialWindowSize: iwz, bufferPool: (config$ as __goscript_transport.ServerConfig).BufferPool}) })()
	let t$: http2Server = t == null ? $.pointerTarget<http2Server>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Server>(t)
	let czSecurity: credentials.ChannelzSecurityValue | null = null! as credentials.ChannelzSecurityValue | null
	{
		let [au, ok] = $.typeAssertTuple<credentials.ChannelzSecurityInfo | null>(authInfo, "credentials.ChannelzSecurityInfo")
		if (ok) {
			czSecurity = (__goscriptAwait = (au !== null && (au as any).__isVarRef !== true && (au as any).__goValue === undefined ? (au as Exclude<credentials.ChannelzSecurityInfo, null>) : $.pointerValue<Exclude<credentials.ChannelzSecurityInfo, null>>(au)).GetSecurityValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	;(t$ as http2Server).channelz = await channelz2.RegisterSocket((() => { const __goscriptLiteralField24 = channelz2.GetSocketOption(((t$ as http2Server).conn as any)); return new channelz2.Socket({SocketType: channelz2.SocketTypeNormal, Parent: $.interfaceValue<channelz2.Entity | null>((config$ as __goscript_transport.ServerConfig).ChannelzParent, "*channelz.Server", /* @__PURE__ */ $.pointerType("channelz.Server")), SocketMetrics: new channelz2.SocketMetrics(undefined, true), EphemeralMetrics: $.functionValue(((__receiver) => () => __receiver.socketMetrics())((t$ as http2Server)), ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("channelz.EphemeralSocketMetrics")] } as $.FunctionTypeInfo), "google.golang.org/grpc/internal/transport.(*http2Server).socketMetrics-fm"), LocalAddr: (t$ as http2Server).peer.LocalAddr, RemoteAddr: (t$ as http2Server).peer.Addr, SocketOptions: __goscriptLiteralField24, Security: czSecurity}) })());
	;(t$ as http2Server).logger = await __goscript_logging.prefixLoggerForServerTransport(t);

	;(t$ as http2Server).controlBuf = __goscript_controlbuf.newControlBuffer((t$ as http2Server).done)
	if (dynamicWindow) {
		;(t$ as http2Server).bdpEst = new __goscript_bdp_estimator.bdpEstimator({bdp: 65535, updateFlowControl: $.functionValue(((__receiver) => (n: number) => __receiver.updateFlowControl(n))((t$ as http2Server)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint32")], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc/internal/transport.(*http2Server).updateFlowControl-fm")})
	}

	;(t$ as http2Server).connectionID = atomic.AddUint64(serverConnectionCounter, 1n)
	await __goscript_http_util.bufWriter.prototype.Flush.call($.pointerValue<__goscript_http_util.framer>((t$ as http2Server).framer).writer)

	__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
		if (err != null) {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).Close(err) : http2Server.prototype.Close.call(t, err))
		}
	})() })

	// Check the validity of client preface.
	let preface: $.Slice<number> = $.makeSlice<number>($.sliceLen(__goscript_http_util.clientPreface), undefined, "byte")
	{
		let [, __goscriptShadow7] = await io.ReadFull($.pointerValueOrNil(((t$ as http2Server).conn as io.Reader | null))!, preface)
		if (__goscriptShadow7 != null) {
			// In deployments where a gRPC server runs behind a cloud load balancer
			// which performs regular TCP level health checks, the connection is
			// closed immediately by the latter.  Returning io.EOF here allows the
			// grpc server implementation to recognize this scenario and suppress
			// logging to reduce spam.
			if ($.comparableEqual(__goscriptShadow7, io.EOF)) {
				const __goscriptReturn0: [__goscript_transport.ServerTransport | null, $.GoError] = [null, io.EOF]
				err = __goscriptReturn0[1]
				await __defer.dispose()
				return [__goscriptReturn0[0], err]
			}
			const __goscriptReturn1: [__goscript_transport.ServerTransport | null, $.GoError] = [null, $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(false, __goscriptShadow7, "transport: http2Server.HandleStreams failed to receive the preface from client: %v", $.arrayToSlice<any>([(__goscriptShadow7 as any)])), "transport.ConnectionError", "transport.ConnectionError")]
			err = __goscriptReturn1[1]
			await __defer.dispose()
			return [__goscriptReturn1[0], err]
		}
	}
	if (!bytes.Equal(preface, __goscript_http_util.clientPreface)) {
		const __goscriptReturn2: [__goscript_transport.ServerTransport | null, $.GoError] = [null, $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(false, null, "transport: http2Server.HandleStreams received bogus greeting from client: %q", $.arrayToSlice<any>([$.interfaceValue(preface, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))])), "transport.ConnectionError", "transport.ConnectionError")]
		err = __goscriptReturn2[1]
		await __defer.dispose()
		return [__goscriptReturn2[0], err]
	}

	let __goscriptTuple11: any = await http2.Framer.prototype.ReadFrame.call($.pointerValue<__goscript_http_util.framer>((t$ as http2Server).framer).fr)
	let frame = __goscriptTuple11[0]
	err = __goscriptTuple11[1]
	if (($.comparableEqual(err, io.EOF)) || ($.comparableEqual(err, io.ErrUnexpectedEOF))) {
		const __goscriptReturn3: [__goscript_transport.ServerTransport | null, $.GoError] = [null, err]
		err = __goscriptReturn3[1]
		await __defer.dispose()
		return [__goscriptReturn3[0], err]
	}
	if (err != null) {
		const __goscriptReturn4: [__goscript_transport.ServerTransport | null, $.GoError] = [null, $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(false, err, "transport: http2Server.HandleStreams failed to read initial settings frame: %v", $.arrayToSlice<any>([(err as any)])), "transport.ConnectionError", "transport.ConnectionError")]
		err = __goscriptReturn4[1]
		await __defer.dispose()
		return [__goscriptReturn4[0], err]
	}
	atomic.StoreInt64($.fieldRef((t$ as http2Server)._fields, "lastRead"), $.markAsStructValue($.cloneStructValue(time.Now())).UnixNano())
	let __goscriptTuple12: any = $.typeAssertTuple<http2.SettingsFrame | $.VarRef<http2.SettingsFrame> | null>(frame, /* @__PURE__ */ $.pointerType("http2.SettingsFrame"))
	let sf: http2.SettingsFrame | $.VarRef<http2.SettingsFrame> | null = __goscriptTuple12[0]
	let ok = __goscriptTuple12[1]
	if (!ok) {
		const __goscriptReturn5: [__goscript_transport.ServerTransport | null, $.GoError] = [null, $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(false, null, "transport: http2Server.HandleStreams saw invalid preface type %T from client", $.arrayToSlice<any>([(frame as any)])), "transport.ConnectionError", "transport.ConnectionError")]
		err = __goscriptReturn5[1]
		await __defer.dispose()
		return [__goscriptReturn5[0], err]
	}
	await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).handleSettings(sf) : http2Server.prototype.handleSettings.call(t, sf))

	queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
		using __defer = new $.DisposableStack()
		;(t$ as http2Server).loopy = await __goscript_controlbuf.newLoopyWriter(1, (t$ as http2Server).framer, (t$ as http2Server).controlBuf, (t$ as http2Server).bdpEst, (t$ as http2Server).conn, (t$ as http2Server).logger, $.functionValue(((__receiver) => (g: __goscript_controlbuf.goAway | $.VarRef<__goscript_controlbuf.goAway> | null) => __receiver.outgoingGoAwayHandler(g))((t$ as http2Server)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("transport.goAway")], results: [/* @__PURE__ */ $.basicType("bool"), "error"] } as $.FunctionTypeInfo), "google.golang.org/grpc/internal/transport.(*http2Server).outgoingGoAwayHandler-fm"), (t$ as http2Server).bufferPool)
		let __goscriptShadow8 = await __goscript_controlbuf.loopyWriter.prototype.run.call((t$ as http2Server).loopy)
		void (t$ as http2Server).loopyWriterDone!.close()
		if (!__goscript_http_util.isIOError(__goscriptShadow8)) {
			// Close the connection if a non-I/O error occurs (for I/O errors
			// the reader will also encounter the error and close).  Wait 1
			// second before closing the connection, or when the reader is done
			// (i.e. the client already closed the connection or a connection
			// error occurred).  This avoids the potential problem where there
			// is unread data on the receive side of the connection, which, if
			// closed, would lead to a TCP RST instead of FIN, and the client
			// encountering errors.  For more info:
			// https://github.com/grpc/grpc-go/issues/5358
			let timer: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer(1000000000n)
			__defer.defer(() => { time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(timer)) })
			const [__goscriptSelect5HasReturn, __goscriptSelect5Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: (t$ as http2Server).readerDone,
				},
				{
					id: 1,
					isSend: false,
					channel: $.pointerValue<time.Timer>(timer).C,
				}
			], false)
			if (__goscriptSelect5HasReturn) {
				return __goscriptSelect5Value
			}
			void (__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((t$ as http2Server).conn).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	})() })
	queueMicrotask(async () => { await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Server).keepalive() : http2Server.prototype.keepalive.call(t)) })
	const __goscriptReturn6: [__goscript_transport.ServerTransport | null, $.GoError] = [$.interfaceValue<__goscript_transport.ServerTransport | null>(t, "*transport.http2Server", /* @__PURE__ */ $.pointerType("transport.http2Server")), null]
	err = __goscriptReturn6[1]
	await __defer.dispose()
	return [__goscriptReturn6[0], err]
	throw new globalThis.Error("goscript: unreachable return")
}

export function appendHeaderFieldsFromMD(headerFields: $.Slice<hpack.HeaderField>, md: metadata.MD): $.Slice<hpack.HeaderField> {
	for (const [k, vv] of md?.entries() ?? []) {
		if (__goscript_http_util.isReservedHeader(k)) {
			// Clients don't tolerate reading restricted headers after some non restricted ones were sent.
			continue
		}
		for (let __goscriptRangeTarget5 = vv, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let v = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as string)
			headerFields = $.appendOne(headerFields, (() => { const __goscriptLiteralField25 = __goscript_http_util.encodeMetadataHeader(k, v); return new hpack.HeaderField({Name: k, Value: __goscriptLiteralField25}, true) })())
		}
	}
	return headerFields
}

export var goAwayPing: __goscript_controlbuf.ping | $.VarRef<__goscript_controlbuf.ping> | null

export function __goscript_init_goAwayPing(): void {
	if (((goAwayPing) as any) === undefined) {
		goAwayPing = new __goscript_controlbuf.ping({data: $.arrayValue(new Uint8Array([1, 6, 1, 8, 0, 3, 3, 9]))})
	}
}

export function __goscript_get_goAwayPing(): __goscript_controlbuf.ping | $.VarRef<__goscript_controlbuf.ping> | null {
	if (((goAwayPing) as any) === undefined) {
		__goscript_init_goAwayPing()
	}
	return goAwayPing
}

export function __goscript_set_goAwayPing(__goscriptValue: __goscript_controlbuf.ping | $.VarRef<__goscript_controlbuf.ping> | null): void {
	goAwayPing = __goscriptValue
}

export async function getJitter(v: time.Duration): globalThis.Promise<time.Duration> {
	if (v == 9223372036854775807n) {
		return 0n
	}
	// Generate a jitter between +/- 10% of the value.
	let r = $.int64($.int64Div(v, 10n))
	let j = $.int64Sub(await rand.Int63n($.int64Mul(2n, r)), r)
	return $.int64(j)
}

export async function GetConnection(ctx: context.Context | null): globalThis.Promise<net.Conn | null> {
	let [conn, ] = $.typeAssertTuple<net.Conn | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new connectionKey(undefined, true), "transport.connectionKey", "transport.connectionKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "net.Conn")
	return conn
}

export function SetConnection(ctx: context.Context | null, conn: net.Conn | null): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(new connectionKey(undefined, true), "transport.connectionKey", "transport.connectionKey"), (conn as any))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptAwait: any
