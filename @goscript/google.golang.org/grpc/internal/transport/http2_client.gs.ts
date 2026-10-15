// Generated file based on http2_client.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as net from "@goscript/net/index.js"

import * as http from "@goscript/net/http/index.js"

import * as filepath from "@goscript/path/filepath/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as http2 from "@goscript/golang.org/x/net/http2/index.js"

import * as hpack from "@goscript/golang.org/x/net/http2/hpack/index.js"

import * as codes from "@goscript/google.golang.org/grpc/codes/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/index.js"

import * as channelz2 from "@goscript/google.golang.org/grpc/internal/channelz/index.js"

import * as icredentials from "@goscript/google.golang.org/grpc/internal/credentials/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/internal/grpclog/index.js"

import * as grpcsync from "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"

import * as grpcutil from "@goscript/google.golang.org/grpc/internal/grpcutil/index.js"

import * as imetadata from "@goscript/google.golang.org/grpc/internal/metadata/index.js"

import * as istatus from "@goscript/google.golang.org/grpc/internal/status/index.js"

import * as isyscall from "@goscript/google.golang.org/grpc/internal/syscall/index.js"

import * as networktype from "@goscript/google.golang.org/grpc/internal/transport/networktype/index.js"

import * as keepalive2 from "@goscript/google.golang.org/grpc/keepalive/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as peer from "@goscript/google.golang.org/grpc/peer/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as stats from "@goscript/google.golang.org/grpc/stats/index.js"

import * as status2 from "@goscript/google.golang.org/grpc/status/index.js"

import * as bytes from "@goscript/bytes/index.js"

import type * as attributes from "@goscript/google.golang.org/grpc/attributes/index.js"

import * as grpclog2 from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal2 from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as __goscript_bdp_estimator from "./bdp_estimator.gs.ts"

import * as __goscript_controlbuf from "./controlbuf.gs.ts"

import * as __goscript_defaults from "./defaults.gs.ts"

import * as __goscript_flowcontrol from "./flowcontrol.gs.ts"

import * as __goscript_http_util from "./http_util.gs.ts"

import * as __goscript_logging from "./logging.gs.ts"

import * as __goscript_proxy from "./proxy.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/net/index.js"
import "@goscript/net/http/index.js"
import "@goscript/path/filepath/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/net/http2/index.js"
import "@goscript/golang.org/x/net/http2/hpack/index.js"
import "@goscript/google.golang.org/grpc/codes/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/channelz/index.js"
import "@goscript/google.golang.org/grpc/internal/credentials/index.js"
import "@goscript/google.golang.org/grpc/internal/grpclog/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcutil/index.js"
import "@goscript/google.golang.org/grpc/internal/metadata/index.js"
import "@goscript/google.golang.org/grpc/internal/status/index.js"
import "@goscript/google.golang.org/grpc/internal/syscall/index.js"
import "@goscript/google.golang.org/grpc/internal/transport/networktype/index.js"
import "@goscript/google.golang.org/grpc/keepalive/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"
import "@goscript/google.golang.org/grpc/peer/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/stats/index.js"
import "@goscript/google.golang.org/grpc/status/index.js"
import "@goscript/bytes/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "./bdp_estimator.gs.ts"
import "./controlbuf.gs.ts"
import "./defaults.gs.ts"
import "./flowcontrol.gs.ts"
import "./http_util.gs.ts"
import "./logging.gs.ts"
import "./proxy.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/internal/transport", ["transport.http2Client", "transport.NewStreamError"])

export class http2Client {
	public get lastRead(): bigint {
		return this._fields.lastRead
	}

	public set lastRead(value: bigint) {
		this._fields.lastRead = value
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

	public get ctxDone(): $.Channel<{}> | null {
		return this._fields.ctxDone
	}

	public set ctxDone(value: $.Channel<{}> | null) {
		this._fields.ctxDone = value
	}

	public get userAgent(): string {
		return this._fields.userAgent
	}

	public set userAgent(value: string) {
		this._fields.userAgent = value
	}

	// address contains the resolver returned address for this transport.
	// If the `ServerName` field is set, it takes precedence over `CallHdr.Host`
	// passed to `NewStream`, when determining the :authority header.
	public get address(): resolver.Address {
		return this._fields.address
	}

	public set address(value: resolver.Address) {
		this._fields.address = value
	}

	public get md(): metadata.MD {
		return this._fields.md
	}

	public set md(value: metadata.MD) {
		this._fields.md = value
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

	public get remoteAddr(): net.Addr | null {
		return this._fields.remoteAddr
	}

	public set remoteAddr(value: net.Addr | null) {
		this._fields.remoteAddr = value
	}

	public get localAddr(): net.Addr | null {
		return this._fields.localAddr
	}

	public set localAddr(value: net.Addr | null) {
		this._fields.localAddr = value
	}

	public get authInfo(): credentials.AuthInfo | null {
		return this._fields.authInfo
	}

	public set authInfo(value: credentials.AuthInfo | null) {
		this._fields.authInfo = value
	}

	public get readerDone(): $.Channel<{}> | null {
		return this._fields.readerDone
	}

	public set readerDone(value: $.Channel<{}> | null) {
		this._fields.readerDone = value
	}

	public get writerDone(): $.Channel<{}> | null {
		return this._fields.writerDone
	}

	public set writerDone(value: $.Channel<{}> | null) {
		this._fields.writerDone = value
	}

	// goAway is closed to notify the upper layer (i.e., addrConn.transportMonitor)
	// that the server sent GoAway on this transport.
	public get goAway(): $.Channel<{}> | null {
		return this._fields.goAway
	}

	public set goAway(value: $.Channel<{}> | null) {
		this._fields.goAway = value
	}

	public get framer(): __goscript_http_util.framer | $.VarRef<__goscript_http_util.framer> | null {
		return this._fields.framer
	}

	public set framer(value: __goscript_http_util.framer | $.VarRef<__goscript_http_util.framer> | null) {
		this._fields.framer = value
	}

	// controlBuf delivers all the control related tasks (e.g., window
	// updates, reset streams, and various settings) to the controller.
	// Do not access controlBuf with mu held.
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

	// The scheme used: https if TLS is on, http otherwise.
	public get scheme(): string {
		return this._fields.scheme
	}

	public set scheme(value: string) {
		this._fields.scheme = value
	}

	public get isSecure(): boolean {
		return this._fields.isSecure
	}

	public set isSecure(value: boolean) {
		this._fields.isSecure = value
	}

	public get perRPCCreds(): $.Slice<credentials.PerRPCCredentials | null> {
		return this._fields.perRPCCreds
	}

	public set perRPCCreds(value: $.Slice<credentials.PerRPCCredentials | null>) {
		this._fields.perRPCCreds = value
	}

	public get kp(): keepalive2.ClientParameters {
		return this._fields.kp
	}

	public set kp(value: keepalive2.ClientParameters) {
		this._fields.kp = value
	}

	public get keepaliveEnabled(): boolean {
		return this._fields.keepaliveEnabled
	}

	public set keepaliveEnabled(value: boolean) {
		this._fields.keepaliveEnabled = value
	}

	public get statsHandlers(): $.Slice<stats.Handler | null> {
		return this._fields.statsHandlers
	}

	public set statsHandlers(value: $.Slice<stats.Handler | null>) {
		this._fields.statsHandlers = value
	}

	public get initialWindowSize(): number {
		return this._fields.initialWindowSize
	}

	public set initialWindowSize(value: number) {
		this._fields.initialWindowSize = value
	}

	// configured by peer through SETTINGS_MAX_HEADER_LIST_SIZE
	public get maxSendHeaderListSize(): $.VarRef<number> | null {
		return this._fields.maxSendHeaderListSize
	}

	public set maxSendHeaderListSize(value: $.VarRef<number> | null) {
		this._fields.maxSendHeaderListSize = value
	}

	public get bdpEst(): __goscript_bdp_estimator.bdpEstimator | $.VarRef<__goscript_bdp_estimator.bdpEstimator> | null {
		return this._fields.bdpEst
	}

	public set bdpEst(value: __goscript_bdp_estimator.bdpEstimator | $.VarRef<__goscript_bdp_estimator.bdpEstimator> | null) {
		this._fields.bdpEst = value
	}

	public get maxConcurrentStreams(): number {
		return this._fields.maxConcurrentStreams
	}

	public set maxConcurrentStreams(value: number) {
		this._fields.maxConcurrentStreams = value
	}

	public get streamQuota(): bigint {
		return this._fields.streamQuota
	}

	public set streamQuota(value: bigint) {
		this._fields.streamQuota = value
	}

	public get streamsQuotaAvailable(): $.Channel<{}> | null {
		return this._fields.streamsQuotaAvailable
	}

	public set streamsQuotaAvailable(value: $.Channel<{}> | null) {
		this._fields.streamsQuotaAvailable = value
	}

	public get waitingStreams(): number {
		return this._fields.waitingStreams
	}

	public set waitingStreams(value: number) {
		this._fields.waitingStreams = value
	}

	public get registeredCompressors(): string {
		return this._fields.registeredCompressors
	}

	public set registeredCompressors(value: string) {
		this._fields.registeredCompressors = value
	}

	// Do not access controlBuf with mu held.
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get nextID(): number {
		return this._fields.nextID
	}

	public set nextID(value: number) {
		this._fields.nextID = value
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

	// prevGoAway ID records the Last-Stream-ID in the previous GOAway frame.
	public get prevGoAwayID(): number {
		return this._fields.prevGoAwayID
	}

	public set prevGoAwayID(value: number) {
		this._fields.prevGoAwayID = value
	}

	// goAwayReason records the http2.ErrCode and debug data received with the
	// GoAway frame.
	public get goAwayReason(): __goscript_transport.GoAwayReason {
		return this._fields.goAwayReason
	}

	public set goAwayReason(value: __goscript_transport.GoAwayReason) {
		this._fields.goAwayReason = value
	}

	// goAwayDebugMessage contains a detailed human readable string about a
	// GoAway frame, useful for error messages.
	public get goAwayDebugMessage(): string {
		return this._fields.goAwayDebugMessage
	}

	public set goAwayDebugMessage(value: string) {
		this._fields.goAwayDebugMessage = value
	}

	// A condition variable used to signal when the keepalive goroutine should
	// go dormant. The condition for dormancy is based on the number of active
	// streams and the `PermitWithoutStream` keepalive client parameter. And
	// since the number of active streams is guarded by the above mutex, we use
	// the same for this condition variable as well.
	public get kpDormancyCond(): sync.Cond | $.VarRef<sync.Cond> | null {
		return this._fields.kpDormancyCond
	}

	public set kpDormancyCond(value: sync.Cond | $.VarRef<sync.Cond> | null) {
		this._fields.kpDormancyCond = value
	}

	// A boolean to track whether the keepalive goroutine is dormant or not.
	// This is checked before attempting to signal the above condition
	// variable.
	public get kpDormant(): boolean {
		return this._fields.kpDormant
	}

	public set kpDormant(value: boolean) {
		this._fields.kpDormant = value
	}

	public get channelz(): channelz2.Socket | $.VarRef<channelz2.Socket> | null {
		return this._fields.channelz
	}

	public set channelz(value: channelz2.Socket | $.VarRef<channelz2.Socket> | null) {
		this._fields.channelz = value
	}

	public get onClose(): ((_p0: __goscript_transport.GoAwayReason) => void) | null {
		return this._fields.onClose
	}

	public set onClose(value: ((_p0: __goscript_transport.GoAwayReason) => void) | null) {
		this._fields.onClose = value
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

	public get logger(): grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null {
		return this._fields.logger
	}

	public set logger(value: grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null) {
		this._fields.logger = value
	}

	public _fields: {
		lastRead: bigint
		ctx: context.Context | null
		cancel: (() => void) | null
		ctxDone: $.Channel<{}> | null
		userAgent: string
		address: resolver.Address
		md: metadata.MD
		conn: net.Conn | null
		loopy: __goscript_controlbuf.loopyWriter | $.VarRef<__goscript_controlbuf.loopyWriter> | null
		remoteAddr: net.Addr | null
		localAddr: net.Addr | null
		authInfo: credentials.AuthInfo | null
		readerDone: $.Channel<{}> | null
		writerDone: $.Channel<{}> | null
		goAway: $.Channel<{}> | null
		framer: __goscript_http_util.framer | $.VarRef<__goscript_http_util.framer> | null
		controlBuf: __goscript_controlbuf.controlBuffer | $.VarRef<__goscript_controlbuf.controlBuffer> | null
		fc: __goscript_flowcontrol.trInFlow | $.VarRef<__goscript_flowcontrol.trInFlow> | null
		scheme: string
		isSecure: boolean
		perRPCCreds: $.Slice<credentials.PerRPCCredentials | null>
		kp: keepalive2.ClientParameters
		keepaliveEnabled: boolean
		statsHandlers: $.Slice<stats.Handler | null>
		initialWindowSize: number
		maxSendHeaderListSize: $.VarRef<number> | null
		bdpEst: __goscript_bdp_estimator.bdpEstimator | $.VarRef<__goscript_bdp_estimator.bdpEstimator> | null
		maxConcurrentStreams: number
		streamQuota: bigint
		streamsQuotaAvailable: $.Channel<{}> | null
		waitingStreams: number
		registeredCompressors: string
		mu: sync.Mutex
		nextID: number
		state: __goscript_transport.transportState
		activeStreams: globalThis.Map<number, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null> | null
		prevGoAwayID: number
		goAwayReason: __goscript_transport.GoAwayReason
		goAwayDebugMessage: string
		kpDormancyCond: sync.Cond | $.VarRef<sync.Cond> | null
		kpDormant: boolean
		channelz: channelz2.Socket | $.VarRef<channelz2.Socket> | null
		onClose: ((_p0: __goscript_transport.GoAwayReason) => void) | null
		bufferPool: mem.BufferPool | null
		connectionID: bigint
		logger: grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null
	}

	constructor(init?: Partial<{lastRead?: bigint, ctx?: context.Context | null, cancel?: (() => void) | null, ctxDone?: $.Channel<{}> | null, userAgent?: string, address?: resolver.Address, md?: metadata.MD, conn?: net.Conn | null, loopy?: __goscript_controlbuf.loopyWriter | $.VarRef<__goscript_controlbuf.loopyWriter> | null, remoteAddr?: net.Addr | null, localAddr?: net.Addr | null, authInfo?: credentials.AuthInfo | null, readerDone?: $.Channel<{}> | null, writerDone?: $.Channel<{}> | null, goAway?: $.Channel<{}> | null, framer?: __goscript_http_util.framer | $.VarRef<__goscript_http_util.framer> | null, controlBuf?: __goscript_controlbuf.controlBuffer | $.VarRef<__goscript_controlbuf.controlBuffer> | null, fc?: __goscript_flowcontrol.trInFlow | $.VarRef<__goscript_flowcontrol.trInFlow> | null, scheme?: string, isSecure?: boolean, perRPCCreds?: $.Slice<credentials.PerRPCCredentials | null>, kp?: keepalive2.ClientParameters, keepaliveEnabled?: boolean, statsHandlers?: $.Slice<stats.Handler | null>, initialWindowSize?: number, maxSendHeaderListSize?: $.VarRef<number> | null, bdpEst?: __goscript_bdp_estimator.bdpEstimator | $.VarRef<__goscript_bdp_estimator.bdpEstimator> | null, maxConcurrentStreams?: number, streamQuota?: bigint, streamsQuotaAvailable?: $.Channel<{}> | null, waitingStreams?: number, registeredCompressors?: string, mu?: sync.Mutex, nextID?: number, state?: __goscript_transport.transportState, activeStreams?: globalThis.Map<number, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null> | null, prevGoAwayID?: number, goAwayReason?: __goscript_transport.GoAwayReason, goAwayDebugMessage?: string, kpDormancyCond?: sync.Cond | $.VarRef<sync.Cond> | null, kpDormant?: boolean, channelz?: channelz2.Socket | $.VarRef<channelz2.Socket> | null, onClose?: ((_p0: __goscript_transport.GoAwayReason) => void) | null, bufferPool?: mem.BufferPool | null, connectionID?: bigint, logger?: grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			lastRead: init?.lastRead ?? (0n as bigint),
			ctx: init?.ctx ?? (null! as context.Context | null),
			cancel: init?.cancel ?? (null! as (() => void) | null),
			ctxDone: init?.ctxDone ?? (null! as $.Channel<{}> | null),
			userAgent: init?.userAgent ?? ("" as string),
			address: init?.address ? init.address.clone() : new resolver.Address(undefined, true),
			md: init?.md ?? (null! as metadata.MD),
			conn: init?.conn ?? (null! as net.Conn | null),
			loopy: init?.loopy ?? (null! as __goscript_controlbuf.loopyWriter | $.VarRef<__goscript_controlbuf.loopyWriter> | null),
			remoteAddr: init?.remoteAddr ?? (null! as net.Addr | null),
			localAddr: init?.localAddr ?? (null! as net.Addr | null),
			authInfo: init?.authInfo ?? (null! as credentials.AuthInfo | null),
			readerDone: init?.readerDone ?? (null! as $.Channel<{}> | null),
			writerDone: init?.writerDone ?? (null! as $.Channel<{}> | null),
			goAway: init?.goAway ?? (null! as $.Channel<{}> | null),
			framer: init?.framer ?? (null! as __goscript_http_util.framer | $.VarRef<__goscript_http_util.framer> | null),
			controlBuf: init?.controlBuf ?? (null! as __goscript_controlbuf.controlBuffer | $.VarRef<__goscript_controlbuf.controlBuffer> | null),
			fc: init?.fc ?? (null! as __goscript_flowcontrol.trInFlow | $.VarRef<__goscript_flowcontrol.trInFlow> | null),
			scheme: init?.scheme ?? ("" as string),
			isSecure: init?.isSecure ?? (false as boolean),
			perRPCCreds: init?.perRPCCreds ?? (null! as $.Slice<credentials.PerRPCCredentials | null>),
			kp: init?.kp ? init.kp.clone() : new keepalive2.ClientParameters(undefined, true),
			keepaliveEnabled: init?.keepaliveEnabled ?? (false as boolean),
			statsHandlers: init?.statsHandlers ?? (null! as $.Slice<stats.Handler | null>),
			initialWindowSize: init?.initialWindowSize ?? (0 as number),
			maxSendHeaderListSize: init?.maxSendHeaderListSize ?? (null! as $.VarRef<number> | null),
			bdpEst: init?.bdpEst ?? (null! as __goscript_bdp_estimator.bdpEstimator | $.VarRef<__goscript_bdp_estimator.bdpEstimator> | null),
			maxConcurrentStreams: init?.maxConcurrentStreams ?? (0 as number),
			streamQuota: init?.streamQuota ?? (0n as bigint),
			streamsQuotaAvailable: init?.streamsQuotaAvailable ?? (null! as $.Channel<{}> | null),
			waitingStreams: init?.waitingStreams ?? (0 as number),
			registeredCompressors: init?.registeredCompressors ?? ("" as string),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			nextID: init?.nextID ?? (0 as number),
			state: init?.state ?? (0 as __goscript_transport.transportState),
			activeStreams: init?.activeStreams ?? (null! as globalThis.Map<number, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null> | null),
			prevGoAwayID: init?.prevGoAwayID ?? (0 as number),
			goAwayReason: init?.goAwayReason ?? (0 as __goscript_transport.GoAwayReason),
			goAwayDebugMessage: init?.goAwayDebugMessage ?? ("" as string),
			kpDormancyCond: init?.kpDormancyCond ?? (null! as sync.Cond | $.VarRef<sync.Cond> | null),
			kpDormant: init?.kpDormant ?? (false as boolean),
			channelz: init?.channelz ?? (null! as channelz2.Socket | $.VarRef<channelz2.Socket> | null),
			onClose: init?.onClose ?? (null! as ((_p0: __goscript_transport.GoAwayReason) => void) | null),
			bufferPool: init?.bufferPool ?? (null! as mem.BufferPool | null),
			connectionID: init?.connectionID ?? (0n as bigint),
			logger: init?.logger ?? (null! as grpclog.PrefixLogger | $.VarRef<grpclog.PrefixLogger> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): http2Client {
		return new http2Client(this, true)
	}

	public __goscriptAssign(source: http2Client): void {
		const target = this._fields
		const values = source._fields
		target.lastRead = values.lastRead
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.cancel = values.cancel
		target.ctxDone = values.ctxDone
		target.userAgent = values.userAgent
		$.assignStruct(target.address, values.address)
		target.md = values.md
		target.conn = $.assignFieldValue(target.conn, values.conn, "net.Conn")
		target.loopy = values.loopy
		target.remoteAddr = $.assignFieldValue(target.remoteAddr, values.remoteAddr, "net.Addr")
		target.localAddr = $.assignFieldValue(target.localAddr, values.localAddr, "net.Addr")
		target.authInfo = $.assignFieldValue(target.authInfo, values.authInfo, "credentials.AuthInfo")
		target.readerDone = values.readerDone
		target.writerDone = values.writerDone
		target.goAway = values.goAway
		target.framer = values.framer
		target.controlBuf = values.controlBuf
		target.fc = values.fc
		target.scheme = values.scheme
		target.isSecure = values.isSecure
		target.perRPCCreds = values.perRPCCreds
		$.assignStruct(target.kp, values.kp)
		target.keepaliveEnabled = values.keepaliveEnabled
		target.statsHandlers = values.statsHandlers
		target.initialWindowSize = values.initialWindowSize
		target.maxSendHeaderListSize = values.maxSendHeaderListSize
		target.bdpEst = values.bdpEst
		target.maxConcurrentStreams = values.maxConcurrentStreams
		target.streamQuota = values.streamQuota
		target.streamsQuotaAvailable = values.streamsQuotaAvailable
		target.waitingStreams = values.waitingStreams
		target.registeredCompressors = values.registeredCompressors
		$.assignStruct(target.mu, values.mu)
		target.nextID = values.nextID
		target.state = values.state
		target.activeStreams = values.activeStreams
		target.prevGoAwayID = values.prevGoAwayID
		target.goAwayReason = values.goAwayReason
		target.goAwayDebugMessage = values.goAwayDebugMessage
		target.kpDormancyCond = values.kpDormancyCond
		target.kpDormant = values.kpDormant
		target.channelz = values.channelz
		target.onClose = values.onClose
		target.bufferPool = $.assignFieldValue(target.bufferPool, values.bufferPool, "mem.BufferPool")
		target.connectionID = values.connectionID
		target.logger = values.logger
	}

	public async Close(err: $.GoError): globalThis.Promise<void> {
		let t: http2Client | $.VarRef<http2Client> | null = this;
		using __defer = new $.DisposableStack()
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		void (__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((t$ as http2Client).conn).SetWriteDeadline($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time.Now())).Add(10000000000n)))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (t$ as http2Client).mu.Lock()
		// Make sure we only close once.
		if ((t$ as http2Client).state == 1) {
			void (t$ as http2Client).mu.Unlock()
			return
		}
		if (await grpclog.PrefixLogger.prototype.V.call((t$ as http2Client).logger, 2)) {
			await grpclog.PrefixLogger.prototype.Infof.call((t$ as http2Client).logger, "Closing: %v", $.arrayToSlice<any>([(err as any)]))
		}
		// Call t.onClose ASAP to prevent the client from attempting to create new
		// streams.
		if ((t$ as http2Client).state != 2) {
			void (__goscriptAwait = (t$ as http2Client).onClose!(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		;(t$ as http2Client).state = 1
		let streams: globalThis.Map<number, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null> | null = (t$ as http2Client).activeStreams;
		;(t$ as http2Client).activeStreams = null
		if ((t$ as http2Client).kpDormant) {
			// If the keepalive goroutine is blocked on this condition variable, we
			// should unblock it so that the goroutine eventually exits.
			sync.Cond.prototype.Signal.call($.pointerValue<sync.Cond>((t$ as http2Client).kpDormancyCond))
		}
		void (t$ as http2Client).mu.Unlock()

		// Per HTTP/2 spec, a GOAWAY frame must be sent before closing the
		// connection. See https://httpwg.org/specs/rfc7540.html#GOAWAY. It
		// also waits for loopyWriter to be closed with a timer to avoid the
		// long blocking in case the connection is blackholed, i.e. TCP is
		// just stuck.
		await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Client).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.goAway({code: 0, debugData: new Uint8Array([99, 108, 105, 101, 110, 116, 32, 116, 114, 97, 110, 115, 112, 111, 114, 116, 32, 115, 104, 117, 116, 100, 111, 119, 110]), closeConn: err}), "*transport.goAway", /* @__PURE__ */ $.pointerType("transport.goAway")))
		let timer: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer(goAwayLoopyWriterTimeout)
		__defer.defer(() => { time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(timer)) })
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
			{
				id: 0,
				isSend: false,
				channel: (t$ as http2Client).writerDone,
			},
			{
				id: 1,
				isSend: false,
				channel: $.pointerValue<time.Timer>(timer).C,
				onSelected: async (__goscriptSelect0Result) => {
					await grpclog.PrefixLogger.prototype.Infof.call((t$ as http2Client).logger, "Failed to write a GOAWAY frame as part of connection close after %s. Giving up and closing the transport.", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(goAwayLoopyWriterTimeout, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
				}
			}
		], false)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
		void (__goscriptAwait = (t$ as http2Client).cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((t$ as http2Client).conn).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await channelz2.RemoveEntry($.pointerValue<channelz2.Socket>((t$ as http2Client).channelz).ID)
		// Append info about previous goaways if there were any, since this may be important
		// for understanding the root cause for this connection to be closed.
		let [, goAwayDebugMessage] = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).GetGoAwayReason() : http2Client.prototype.GetGoAwayReason.call(t))

		let st: istatus.Status | $.VarRef<istatus.Status> | null = null! as istatus.Status | $.VarRef<istatus.Status> | null
		if ($.stringLen(goAwayDebugMessage) > 0) {
			st = await status2.Newf(14, "closing transport due to: %v, received prior goaway: %v", $.arrayToSlice<any>([(err as any), goAwayDebugMessage]))
			err = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as istatus.Status).Err() : istatus.Status.prototype.Err.call(st))
		} else {
			st = status2.New(14, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}

		// Notify all active streams.
		for (const [__rangeKey, s] of streams?.entries() ?? []) {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).closeStream(s, err, false, 0, st, null, false) : http2Client.prototype.closeStream.call(t, s, err, false, 0, st, null, false))
		}
		for (let __goscriptRangeTarget0 = (t$ as http2Client).statsHandlers, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let sh = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as stats.Handler | null)
			let connEnd: stats.ConnEnd | $.VarRef<stats.ConnEnd> | null = new stats.ConnEnd({Client: true})
			void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleConn((t$ as http2Client).ctx, $.interfaceValue<stats.ConnStats | null>(connEnd, "*stats.ConnEnd", /* @__PURE__ */ $.pointerType("stats.ConnEnd"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async CloseStream(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, err: $.GoError): globalThis.Promise<void> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		let rst: boolean = false
		let rstCode: http2.ErrCode = 0
		if (err != null) {
			rst = true
			rstCode = 8
		}
		await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).closeStream(s, err, rst, rstCode, await status2.Convert(err), null, false) : http2Client.prototype.closeStream.call(t, s, err, rst, rstCode, await status2.Convert(err), null, false))
	}

	public async Error(): globalThis.Promise<$.Channel<{}> | null> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		return $.pointerValue<Exclude<context.Context, null>>($.pointerValue<http2Client>(t).ctx).Done()
	}

	public async GetGoAwayReason(): globalThis.Promise<[__goscript_transport.GoAwayReason, string]> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		using __defer = new $.DisposableStack()
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		await (t$ as http2Client).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((t$ as http2Client).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		return [(t$ as http2Client).goAwayReason, (t$ as http2Client).goAwayDebugMessage]
	}

	public GoAway(): $.Channel<{}> | null {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		return $.pointerValue<http2Client>(t).goAway
	}

	public async GracefulClose(): globalThis.Promise<void> {
		let t: http2Client | $.VarRef<http2Client> | null = this;
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		await (t$ as http2Client).mu.Lock()
		// Make sure we move to draining only from active.
		if (((t$ as http2Client).state == 2) || ((t$ as http2Client).state == 1)) {
			void (t$ as http2Client).mu.Unlock()
			return
		}
		if (await grpclog.PrefixLogger.prototype.V.call((t$ as http2Client).logger, 2)) {
			await grpclog.PrefixLogger.prototype.Infof.call((t$ as http2Client).logger, "GracefulClose called", null)
		}
		void (__goscriptAwait = (t$ as http2Client).onClose!(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(t$ as http2Client).state = 2
		let active = $.len((t$ as http2Client).activeStreams)
		void (t$ as http2Client).mu.Unlock()
		if (active == 0) {
			await http2Client.prototype.Close.call(t, $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(true, null, "no active streams left to process while draining", null), "transport.ConnectionError", "transport.ConnectionError"))
			return
		}
		await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Client).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.incomingGoAway(), "*transport.incomingGoAway", /* @__PURE__ */ $.pointerType("transport.incomingGoAway")))
	}

	public IncrMsgRecv(): void {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		$.pointerValue<channelz2.Socket>((t$ as http2Client).channelz).SocketMetrics.MessagesReceived.Add(1n)
		$.pointerValue<channelz2.Socket>((t$ as http2Client).channelz).SocketMetrics.LastMessageReceivedTimestamp.Store($.markAsStructValue($.cloneStructValue(time.Now())).UnixNano())
	}

	public IncrMsgSent(): void {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		$.pointerValue<channelz2.Socket>((t$ as http2Client).channelz).SocketMetrics.MessagesSent.Add(1n)
		$.pointerValue<channelz2.Socket>((t$ as http2Client).channelz).SocketMetrics.LastMessageSentTimestamp.Store($.markAsStructValue($.cloneStructValue(time.Now())).UnixNano())
	}

	public async NewStream(ctx: context.Context | null, callHdr: __goscript_transport.CallHdr | $.VarRef<__goscript_transport.CallHdr> | null): globalThis.Promise<[__goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, $.GoError]> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		ctx = peer.NewContext(ctx, (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).getPeer() : http2Client.prototype.getPeer.call(t)))

		// ServerName field of the resolver returned address takes precedence over
		// Host field of CallHdr to determine the :authority header. This is because,
		// the ServerName field takes precedence for server authentication during
		// TLS handshake, and the :authority header should match the value used
		// for server authentication.
		if (!$.stringEqual((t$ as http2Client).address.ServerName, "")) {
			let newCallHdr: $.VarRef<__goscript_transport.CallHdr> = $.varRef(($.pointerValue<__goscript_transport.CallHdr>(callHdr)).clone())
			newCallHdr.value.Host = (t$ as http2Client).address.ServerName
			callHdr = newCallHdr
		}

		let __goscriptTuple0: any = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).createHeaderFields(ctx, callHdr) : http2Client.prototype.createHeaderFields.call(t, ctx, callHdr))
		let headerFields: $.Slice<hpack.HeaderField> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, $.interfaceValue<$.GoError>(new NewStreamError({Err: err, AllowTransparentRetry: false}), "*transport.NewStreamError", /* @__PURE__ */ $.pointerType("transport.NewStreamError"))]
		}
		let s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).newStream(ctx, callHdr) : http2Client.prototype.newStream.call(t, ctx, callHdr))
		let s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		let cleanup: ((err: $.GoError) => void) | null = $.functionValue(async (err: $.GoError): globalThis.Promise<void> => {
			if ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).swapState(3) : __goscript_transport.Stream.prototype.swapState.call(s, 3)) == 3) {
				// If it was already done, return.
				return
			}
			// The stream was unprocessed by the server.
			atomic.StoreUint32($.fieldRef((s$ as __goscript_transport.Stream)._fields, "unprocessed"), 1)
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).write(new __goscript_transport.recvMsg({err: err}, true)) : __goscript_transport.Stream.prototype.write.call(s, new __goscript_transport.recvMsg({err: err}, true)))
			void (s$ as __goscript_transport.Stream).done!.close()
			// If headerChan isn't closed, then close it.
			if (atomic.CompareAndSwapUint32($.fieldRef((s$ as __goscript_transport.Stream)._fields, "headerChanClosed"), 0, 1)) {
				void (s$ as __goscript_transport.Stream).headerChan!.close()
			}
		}, ({ kind: $.TypeKind.Function, params: ["error"], results: [] } as $.FunctionTypeInfo))
		let hdr: __goscript_controlbuf.headerFrame | $.VarRef<__goscript_controlbuf.headerFrame> | null = new __goscript_controlbuf.headerFrame({hf: headerFields, endStream: false, initStream: $.functionValue(async (_p0: number): globalThis.Promise<$.GoError> => {
			await (t$ as http2Client).mu.Lock()
			// TODO: handle transport closure in loopy instead and remove this
			// initStream is never called when transport is draining.
			if ((t$ as http2Client).state == 1) {
				void (t$ as http2Client).mu.Unlock()
				void (__goscriptAwait = cleanup!($.interfaceValue<$.GoError>((__goscript_transport.ErrConnClosing).clone(), "transport.ConnectionError", "transport.ConnectionError")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return $.interfaceValue<$.GoError>((__goscript_transport.ErrConnClosing).clone(), "transport.ConnectionError", "transport.ConnectionError")
			}
			if (channelz2.IsOn()) {
				$.pointerValue<channelz2.Socket>((t$ as http2Client).channelz).SocketMetrics.StreamsStarted.Add(1n)
				$.pointerValue<channelz2.Socket>((t$ as http2Client).channelz).SocketMetrics.LastLocalStreamCreatedTimestamp.Store($.markAsStructValue($.cloneStructValue(time.Now())).UnixNano())
			}
			// If the keepalive goroutine has gone dormant, wake it up.
			if ((t$ as http2Client).kpDormant) {
				sync.Cond.prototype.Signal.call($.pointerValue<sync.Cond>((t$ as http2Client).kpDormancyCond))
			}
			void (t$ as http2Client).mu.Unlock()
			return null
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint32")], results: ["error"] } as $.FunctionTypeInfo)), onOrphaned: cleanup, wq: (s$ as __goscript_transport.Stream).wq})
		let hdr$: __goscript_controlbuf.headerFrame = hdr == null ? $.pointerTarget<__goscript_controlbuf.headerFrame>(hdr) : (hdr as any).__isVarRef === true ? (hdr as any).value : (hdr as any).__goValue === undefined ? (hdr as any) : $.pointerTarget<__goscript_controlbuf.headerFrame>(hdr)
		let firstTry = true
		let ch: $.Channel<{}> | null = null! as $.Channel<{}> | null
		let transportDrainRequired = false
		let checkForStreamQuota: (() => boolean | globalThis.Promise<boolean>) | null = $.functionValue(async (): globalThis.Promise<boolean> => {
			if ((t$ as http2Client).streamQuota <= 0n) {
				if (firstTry) {
					;(t$ as http2Client).waitingStreams = (((t$ as http2Client).waitingStreams + 1) >>> 0)
				}
				ch = (t$ as http2Client).streamsQuotaAvailable
				return false
			}
			if (!firstTry) {
				;(t$ as http2Client).waitingStreams = (((t$ as http2Client).waitingStreams - 1) >>> 0)
			}
			;(t$ as http2Client).streamQuota--

			await (t$ as http2Client).mu.Lock()
			if (((t$ as http2Client).state == 2) || ((t$ as http2Client).activeStreams == null)) {
				void (t$ as http2Client).mu.Unlock()
				return false
			}

			;(hdr$ as __goscript_controlbuf.headerFrame).streamID = (t$ as http2Client).nextID;
			;(t$ as http2Client).nextID = $.uint((t$ as http2Client).nextID + (2), 32)
			// Drain client transport if nextID > MaxStreamID which signals gRPC that
			// the connection is closed and a new one must be created for subsequent RPCs.
			transportDrainRequired = (t$ as http2Client).nextID > __goscript_defaults.MaxStreamID;

			;(s$ as __goscript_transport.Stream).id = (hdr$ as __goscript_controlbuf.headerFrame).streamID;
			;(s$ as __goscript_transport.Stream).fc = new __goscript_flowcontrol.inFlow({limit: $.uint((t$ as http2Client).initialWindowSize, 32)})
			$.mapSet((t$ as http2Client).activeStreams, (s$ as __goscript_transport.Stream).id, s)
			void (t$ as http2Client).mu.Unlock()

			if (((t$ as http2Client).streamQuota > 0n) && ((t$ as http2Client).waitingStreams > 0)) {
				const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, boolean>([
					{
						id: 0,
						isSend: true,
						channel: (t$ as http2Client).streamsQuotaAvailable,
						value: {},
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
			return true
		}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
		let hdrListSizeErr: $.GoError = null! as $.GoError
		let checkForHeaderListSize: (() => boolean | globalThis.Promise<boolean>) | null = $.functionValue(async (): globalThis.Promise<boolean> => {
			if ((t$ as http2Client).maxSendHeaderListSize == null) {
				return true
			}
			let sz: bigint = 0n
			for (let __goscriptRangeTarget1 = (hdr$ as __goscript_controlbuf.headerFrame).hf, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				let f = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as hpack.HeaderField)).clone()
				{
					sz = $.int64Add(sz, $.int64(f.Size()))
					if (sz > $.int64($.pointerValue<number>((t$ as http2Client).maxSendHeaderListSize))) {
						hdrListSizeErr = await status2.Errorf(13, "header list size to send violates the maximum size (%d bytes) set by server", $.arrayToSlice<any>([$.basicInterfaceValue($.pointerValue<number>((t$ as http2Client).maxSendHeaderListSize), "uint32")]))
						return false
					}
				}
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
		while (true) {
			let [success, __goscriptShadow0] = await __goscript_controlbuf.controlBuffer.prototype.executeAndPut.call((t$ as http2Client).controlBuf, $.functionValue(async (): globalThis.Promise<boolean> => {
				return (__goscriptAwait = checkForHeaderListSize!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && (__goscriptAwait = checkForStreamQuota!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)), $.interfaceValue<__goscript_controlbuf.cbItem | null>(hdr, "*transport.headerFrame", /* @__PURE__ */ $.pointerType("transport.headerFrame")))
			if (__goscriptShadow0 != null) {
				// Connection closed.
				return [null, $.interfaceValue<$.GoError>(new NewStreamError({Err: __goscriptShadow0, AllowTransparentRetry: true}), "*transport.NewStreamError", /* @__PURE__ */ $.pointerType("transport.NewStreamError"))]
			}
			if (success) {
				break
			}
			if (hdrListSizeErr != null) {
				return [null, $.interfaceValue<$.GoError>(new NewStreamError({Err: hdrListSizeErr}), "*transport.NewStreamError", /* @__PURE__ */ $.pointerType("transport.NewStreamError"))]
			}
			firstTry = false
			const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, [__goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, $.GoError]>([
				{
					id: 0,
					isSend: false,
					channel: ch,
				},
				{
					id: 1,
					isSend: false,
					channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
					onSelected: async (__goscriptSelect2Result) => {
						return [null, $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField0 = await __goscript_transport.ContextErr((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)); return new NewStreamError({Err: __goscriptLiteralField0}) })()), "*transport.NewStreamError", /* @__PURE__ */ $.pointerType("transport.NewStreamError"))]
					}
				},
				{
					id: 2,
					isSend: false,
					channel: (t$ as http2Client).goAway,
					onSelected: async (__goscriptSelect2Result) => {
						return [null, $.interfaceValue<$.GoError>(new NewStreamError({Err: __goscript_transport.errStreamDrain, AllowTransparentRetry: true}), "*transport.NewStreamError", /* @__PURE__ */ $.pointerType("transport.NewStreamError"))]
					}
				},
				{
					id: 3,
					isSend: false,
					channel: ((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((t$ as http2Client).ctx).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
					onSelected: async (__goscriptSelect2Result) => {
						return [null, $.interfaceValue<$.GoError>(new NewStreamError({Err: $.interfaceValue<$.GoError>((__goscript_transport.ErrConnClosing).clone(), "transport.ConnectionError", "transport.ConnectionError"), AllowTransparentRetry: true}), "*transport.NewStreamError", /* @__PURE__ */ $.pointerType("transport.NewStreamError"))]
					}
				}
			], false)
			if (__goscriptSelect2HasReturn) {
				return __goscriptSelect2Value
			}
		}
		if ($.sliceLen((t$ as http2Client).statsHandlers) != 0) {
			let __goscriptTuple1: any = await metadata.FromOutgoingContext(ctx)
			let header: metadata.MD = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				metadata.MD_Set(header, "user-agent", $.arrayToSlice<string>([(t$ as http2Client).userAgent]))
			} else {
				header = await metadata.Pairs($.arrayToSlice<string>(["user-agent", (t$ as http2Client).userAgent]))
			}
			for (let __goscriptRangeTarget2 = (t$ as http2Client).statsHandlers, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let sh = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as stats.Handler | null)
				// Note: The header fields are compressed with hpack after this call returns.
				// No WireLength field is set here.
				// Note: Creating a new stats object to prevent pollution.
				let outHeader: stats.OutHeader | $.VarRef<stats.OutHeader> | null = new stats.OutHeader({Client: true, FullMethod: $.pointerValue<__goscript_transport.CallHdr>(callHdr).Method, RemoteAddr: (t$ as http2Client).remoteAddr, LocalAddr: (t$ as http2Client).localAddr, Compression: $.pointerValue<__goscript_transport.CallHdr>(callHdr).SendCompress, Header: header})
				void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleRPC((s$ as __goscript_transport.Stream).ctx, $.interfaceValue<stats.RPCStats | null>(outHeader, "*stats.OutHeader", /* @__PURE__ */ $.pointerType("stats.OutHeader"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		if (transportDrainRequired) {
			if (await grpclog.PrefixLogger.prototype.V.call((t$ as http2Client).logger, 2)) {
				await grpclog.PrefixLogger.prototype.Infof.call((t$ as http2Client).logger, "Draining transport: t.nextID > MaxStreamID", null)
			}
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).GracefulClose() : http2Client.prototype.GracefulClose.call(t))
		}
		return [s, null]
	}

	public RemoteAddr(): net.Addr | null {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		return $.pointerValue<http2Client>(t).remoteAddr
	}

	public async Write(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, hdr: $.Slice<number>, data: mem.BufferSlice, opts: __goscript_transport.Options | $.VarRef<__goscript_transport.Options> | null): globalThis.Promise<$.GoError> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		const s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		const opts$: __goscript_transport.Options = opts == null ? $.pointerTarget<__goscript_transport.Options>(opts) : (opts as any).__isVarRef === true ? (opts as any).value : (opts as any).__goValue === undefined ? (opts as any) : $.pointerTarget<__goscript_transport.Options>(opts)
		let reader = mem.BufferSlice_Reader(data)

		if ((opts$ as __goscript_transport.Options).Last) {
			// If it's the last message, update stream state.
			if (!(s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).compareAndSwapState(0, 1) : __goscript_transport.Stream.prototype.compareAndSwapState.call(s, 0, 1))) {
				;(__goscriptAwait = (reader !== null && (reader as any).__isVarRef !== true && (reader as any).__goValue === undefined ? (reader as Exclude<mem.Reader, null>) : $.pointerValue<Exclude<mem.Reader, null>>(reader)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return __goscript_transport.errStreamDone
			}
		} else {
			if ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).getState() : __goscript_transport.Stream.prototype.getState.call(s)) != 0) {
				;(__goscriptAwait = (reader !== null && (reader as any).__isVarRef !== true && (reader as any).__goValue === undefined ? (reader as Exclude<mem.Reader, null>) : $.pointerValue<Exclude<mem.Reader, null>>(reader)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return __goscript_transport.errStreamDone
			}
		}
		let df: __goscript_controlbuf.dataFrame | $.VarRef<__goscript_controlbuf.dataFrame> | null = new __goscript_controlbuf.dataFrame({streamID: (s$ as __goscript_transport.Stream).id, endStream: (opts$ as __goscript_transport.Options).Last, h: hdr, reader: reader})
		let df$: __goscript_controlbuf.dataFrame = df == null ? $.pointerTarget<__goscript_controlbuf.dataFrame>(df) : (df as any).__isVarRef === true ? (df as any).value : (df as any).__goValue === undefined ? (df as any) : $.pointerTarget<__goscript_controlbuf.dataFrame>(df)
		if ((hdr != null) || ((__goscriptAwait = $.pointerValue<Exclude<mem.Reader, null>>((df$ as __goscript_controlbuf.dataFrame).reader).Remaining(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
			{
				let err = await __goscript_flowcontrol.writeQuota.prototype.get.call((s$ as __goscript_transport.Stream).wq, $.int($.sliceLen(hdr) + (__goscriptAwait = $.pointerValue<Exclude<mem.Reader, null>>((df$ as __goscript_controlbuf.dataFrame).reader).Remaining(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32))
				if (err != null) {
					;(__goscriptAwait = (reader !== null && (reader as any).__isVarRef !== true && (reader as any).__goValue === undefined ? (reader as Exclude<mem.Reader, null>) : $.pointerValue<Exclude<mem.Reader, null>>(reader)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					return err
				}
			}
		}
		{
			let err = await __goscript_controlbuf.controlBuffer.prototype.put.call($.pointerValue<http2Client>(t).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(df, "*transport.dataFrame", /* @__PURE__ */ $.pointerType("transport.dataFrame")))
			if (err != null) {
				;(__goscriptAwait = (reader !== null && (reader as any).__isVarRef !== true && (reader as any).__goValue === undefined ? (reader as Exclude<mem.Reader, null>) : $.pointerValue<Exclude<mem.Reader, null>>(reader)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return err
			}
		}
		return null
	}

	public async adjustWindow(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, n: number): globalThis.Promise<void> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		const s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		{
			let w = await __goscript_flowcontrol.inFlow.prototype.maybeAdjust.call((s$ as __goscript_transport.Stream).fc, n)
			if (w > 0) {
				await __goscript_controlbuf.controlBuffer.prototype.put.call($.pointerValue<http2Client>(t).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.outgoingWindowUpdate({streamID: (s$ as __goscript_transport.Stream).id, increment: w}), "*transport.outgoingWindowUpdate", /* @__PURE__ */ $.pointerType("transport.outgoingWindowUpdate")))
			}
		}
	}

	public async closeStream(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, err: $.GoError, rst: boolean, rstCode: http2.ErrCode, st: istatus.Status | $.VarRef<istatus.Status> | null, mdata: globalThis.Map<string, $.Slice<string>> | null, eosReceived: boolean): globalThis.Promise<void> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		const s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		// Set stream status to done.
		if ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).swapState(3) : __goscript_transport.Stream.prototype.swapState.call(s, 3)) == 3) {
			// If it was already done, return.  If multiple closeStream calls
			// happen simultaneously, wait for the first to finish.
			await $.chanRecv((s$ as __goscript_transport.Stream).done)
			return
		}
		// status and trailers can be updated here without any synchronization because the stream goroutine will
		// only read it after it sees an io.EOF error from read or write and we'll write those errors
		// only after updating this.
		;(s$ as __goscript_transport.Stream).status = st
		if ($.len(mdata) > 0) {
			;(s$ as __goscript_transport.Stream).trailer = mdata
		}
		if (err != null) {
			// This will unblock reads eventually.
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).write(new __goscript_transport.recvMsg({err: err}, true)) : __goscript_transport.Stream.prototype.write.call(s, new __goscript_transport.recvMsg({err: err}, true)))
		}
		// If headerChan isn't closed, then close it.
		if (atomic.CompareAndSwapUint32($.fieldRef((s$ as __goscript_transport.Stream)._fields, "headerChanClosed"), 0, 1)) {
			;(s$ as __goscript_transport.Stream).noHeaders = true
			void (s$ as __goscript_transport.Stream).headerChan!.close()
		}
		let cleanup: __goscript_controlbuf.cleanupStream | $.VarRef<__goscript_controlbuf.cleanupStream> | null = new __goscript_controlbuf.cleanupStream({streamID: (s$ as __goscript_transport.Stream).id, onWrite: $.functionValue(async (): globalThis.Promise<void> => {
			await (t$ as http2Client).mu.Lock()
			if ((t$ as http2Client).activeStreams != null) {
				$.deleteMapEntry((t$ as http2Client).activeStreams, (s$ as __goscript_transport.Stream).id)
			}
			void (t$ as http2Client).mu.Unlock()
			if (channelz2.IsOn()) {
				if (eosReceived) {
					$.pointerValue<channelz2.Socket>((t$ as http2Client).channelz).SocketMetrics.StreamsSucceeded.Add(1n)
				} else {
					$.pointerValue<channelz2.Socket>((t$ as http2Client).channelz).SocketMetrics.StreamsFailed.Add(1n)
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), rst: rst, rstCode: rstCode})
		let addBackStreamQuota: (() => boolean | globalThis.Promise<boolean>) | null = $.functionValue(async (): globalThis.Promise<boolean> => {
			;(t$ as http2Client).streamQuota++
			if (((t$ as http2Client).streamQuota > 0n) && ((t$ as http2Client).waitingStreams > 0)) {
				const [__goscriptSelect3HasReturn, __goscriptSelect3Value] = await $.selectStatement<any, boolean>([
					{
						id: 0,
						isSend: true,
						channel: (t$ as http2Client).streamsQuotaAvailable,
						value: {},
					},
					{
						id: -1,
						isSend: false,
						channel: null,
					}
				], true)
				if (__goscriptSelect3HasReturn) {
					return __goscriptSelect3Value
				}
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
		await __goscript_controlbuf.controlBuffer.prototype.executeAndPut.call((t$ as http2Client).controlBuf, addBackStreamQuota, $.interfaceValue<__goscript_controlbuf.cbItem | null>(cleanup, "*transport.cleanupStream", /* @__PURE__ */ $.pointerType("transport.cleanupStream")))
		// This will unblock write.
		void (s$ as __goscript_transport.Stream).done!.close()
		if ((s$ as __goscript_transport.Stream).doneFunc != null) {
			void (__goscriptAwait = (s$ as __goscript_transport.Stream).doneFunc!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public createAudience(callHdr: __goscript_transport.CallHdr | $.VarRef<__goscript_transport.CallHdr> | null): string {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		const callHdr$: __goscript_transport.CallHdr = callHdr == null ? $.pointerTarget<__goscript_transport.CallHdr>(callHdr) : (callHdr as any).__isVarRef === true ? (callHdr as any).value : (callHdr as any).__goValue === undefined ? (callHdr as any) : $.pointerTarget<__goscript_transport.CallHdr>(callHdr)
		// Create an audience string only if needed.
		if (($.sliceLen($.pointerValue<http2Client>(t).perRPCCreds) == 0) && ((callHdr$ as __goscript_transport.CallHdr).Creds == null)) {
			return ""
		}
		// Construct URI required to get auth request metadata.
		// Omit port if it is the default one.
		let host = strings.TrimSuffix((callHdr$ as __goscript_transport.CallHdr).Host, ":443")
		let pos = strings.LastIndex((callHdr$ as __goscript_transport.CallHdr).Method, "/")
		if (pos == -1) {
			pos = $.stringLen((callHdr$ as __goscript_transport.CallHdr).Method)
		}
		return $.concatString(($.concatString("https://", host)), $.sliceStringOrBytes((callHdr$ as __goscript_transport.CallHdr).Method, undefined, pos))
	}

	public async createHeaderFields(ctx: context.Context | null, callHdr: __goscript_transport.CallHdr | $.VarRef<__goscript_transport.CallHdr> | null): globalThis.Promise<[$.Slice<hpack.HeaderField>, $.GoError]> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		const callHdr$: __goscript_transport.CallHdr = callHdr == null ? $.pointerTarget<__goscript_transport.CallHdr>(callHdr) : (callHdr as any).__isVarRef === true ? (callHdr as any).value : (callHdr as any).__goValue === undefined ? (callHdr as any) : $.pointerTarget<__goscript_transport.CallHdr>(callHdr)
		let aud = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).createAudience(callHdr) : http2Client.prototype.createAudience.call(t, callHdr))
		let ri = new credentials.RequestInfo({Method: (callHdr$ as __goscript_transport.CallHdr).Method, AuthInfo: (t$ as http2Client).authInfo}, true)
		let ctxWithRequestInfo = icredentials.NewRequestInfoContext(ctx, $.interfaceValue((ri).clone(), "credentials.RequestInfo", "credentials.RequestInfo"))
		let __goscriptTuple2: any = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).getTrAuthData(ctxWithRequestInfo, aud) : http2Client.prototype.getTrAuthData.call(t, ctxWithRequestInfo, aud))
		let authData: globalThis.Map<string, string> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}
		let __goscriptTuple3: any = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).getCallAuthData(ctxWithRequestInfo, aud, callHdr) : http2Client.prototype.getCallAuthData.call(t, ctxWithRequestInfo, aud, callHdr))
		let callAuthData: globalThis.Map<string, string> | null = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}
		// TODO(mmukhi): Benchmark if the performance gets better if count the metadata and other header fields
		// first and create a slice of that exact size.
		// Make the slice of certain predictable size to reduce allocations made by append.
		let hfLen = 7
		hfLen = hfLen + ($.len(authData) + $.len(callAuthData))
		let headerFields: $.Slice<hpack.HeaderField> = $.makeSlice<hpack.HeaderField>(0, hfLen, undefined, () => new hpack.HeaderField(undefined, true))
		headerFields = $.appendOne(headerFields, new hpack.HeaderField({Name: ":method", Value: "POST"}, true))
		headerFields = $.appendOne(headerFields, new hpack.HeaderField({Name: ":scheme", Value: (t$ as http2Client).scheme}, true))
		headerFields = $.appendOne(headerFields, new hpack.HeaderField({Name: ":path", Value: (callHdr$ as __goscript_transport.CallHdr).Method}, true))
		headerFields = $.appendOne(headerFields, new hpack.HeaderField({Name: ":authority", Value: (callHdr$ as __goscript_transport.CallHdr).Host}, true))
		headerFields = $.appendOne(headerFields, (() => { const __goscriptLiteralField1 = grpcutil.ContentType((callHdr$ as __goscript_transport.CallHdr).ContentSubtype); return new hpack.HeaderField({Name: "content-type", Value: __goscriptLiteralField1}, true) })())
		headerFields = $.appendOne(headerFields, new hpack.HeaderField({Name: "user-agent", Value: (t$ as http2Client).userAgent}, true))
		headerFields = $.appendOne(headerFields, new hpack.HeaderField({Name: "te", Value: "trailers"}, true))
		if ((callHdr$ as __goscript_transport.CallHdr).PreviousAttempts > 0) {
			headerFields = $.appendOne(headerFields, (() => { const __goscriptLiteralField2 = strconv.Itoa((callHdr$ as __goscript_transport.CallHdr).PreviousAttempts); return new hpack.HeaderField({Name: "grpc-previous-rpc-attempts", Value: __goscriptLiteralField2}, true) })())
		}

		let registeredCompressors = (t$ as http2Client).registeredCompressors
		if (!$.stringEqual((callHdr$ as __goscript_transport.CallHdr).SendCompress, "")) {
			headerFields = $.appendOne(headerFields, new hpack.HeaderField({Name: "grpc-encoding", Value: (callHdr$ as __goscript_transport.CallHdr).SendCompress}, true))
			// Include the outgoing compressor name when compressor is not registered
			// via encoding.RegisterCompressor. This is possible when client uses
			// WithCompressor dial option.
			if (!grpcutil.IsCompressorNameRegistered((callHdr$ as __goscript_transport.CallHdr).SendCompress)) {
				if (!$.stringEqual(registeredCompressors, "")) {
					registeredCompressors = $.concatString(registeredCompressors, ",")
				}
				registeredCompressors = $.concatString(registeredCompressors, (callHdr$ as __goscript_transport.CallHdr).SendCompress)
			}
		}

		if (!$.stringEqual(registeredCompressors, "")) {
			headerFields = $.appendOne(headerFields, new hpack.HeaderField({Name: "grpc-accept-encoding", Value: registeredCompressors}, true))
		}
		{
			let [dl, ok] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Deadline()
			if (ok) {
				// Send out timeout regardless its value. The server can detect timeout context by itself.
				// TODO(mmukhi): Perhaps this field should be updated when actually writing out to the wire.
				let timeout = time.Until($.markAsStructValue($.cloneStructValue(dl)))
				headerFields = $.appendOne(headerFields, (() => { const __goscriptLiteralField3 = grpcutil.EncodeDuration(timeout); return new hpack.HeaderField({Name: "grpc-timeout", Value: __goscriptLiteralField3}, true) })())
			}
		}
		for (const [k, v] of authData?.entries() ?? []) {
			headerFields = $.appendOne(headerFields, (() => { const __goscriptLiteralField4 = __goscript_http_util.encodeMetadataHeader(k, v); return new hpack.HeaderField({Name: k, Value: __goscriptLiteralField4}, true) })())
		}
		for (const [k, v] of callAuthData?.entries() ?? []) {
			headerFields = $.appendOne(headerFields, (() => { const __goscriptLiteralField5 = __goscript_http_util.encodeMetadataHeader(k, v); return new hpack.HeaderField({Name: k, Value: __goscriptLiteralField5}, true) })())
		}
		{
			let b: $.Slice<number> = await stats.OutgoingTags(ctx)
			if (b != null) {
				headerFields = $.appendOne(headerFields, (() => { const __goscriptLiteralField6 = __goscript_http_util.encodeBinHeader(b); return new hpack.HeaderField({Name: "grpc-tags-bin", Value: __goscriptLiteralField6}, true) })())
			}
		}
		{
			let b: $.Slice<number> = await stats.OutgoingTrace(ctx)
			if (b != null) {
				headerFields = $.appendOne(headerFields, (() => { const __goscriptLiteralField7 = __goscript_http_util.encodeBinHeader(b); return new hpack.HeaderField({Name: "grpc-trace-bin", Value: __goscriptLiteralField7}, true) })())
			}
		}

		{
			let __goscriptTuple4: any = await metadataFromOutgoingContextRaw!(ctx)
			let md: metadata.MD = __goscriptTuple4[0]
			let added: $.Slice<$.Slice<string>> = __goscriptTuple4[1]
			let ok = __goscriptTuple4[2]
			if (ok) {
				let k: string = ""
				for (const [k, vv] of md?.entries() ?? []) {
					// HTTP doesn't allow you to set pseudoheaders after non pseudoheaders were set.
					if (__goscript_http_util.isReservedHeader(k)) {
						continue
					}
					for (let __goscriptRangeTarget3 = vv, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
						let v = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string)
						headerFields = $.appendOne(headerFields, (() => { const __goscriptLiteralField8 = __goscript_http_util.encodeMetadataHeader(k, v); return new hpack.HeaderField({Name: k, Value: __goscriptLiteralField8}, true) })())
					}
				}
				for (let __goscriptRangeTarget5 = added, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
					let vv = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as $.Slice<string>)
					for (let __goscriptRangeTarget4 = vv, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow5.length; i++) {
						let v = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + i] as string)
						if ((i % 2) == 0) {
							k = strings.ToLower(v)
							continue
						}
						// HTTP doesn't allow you to set pseudoheaders after non pseudoheaders were set.
						if (__goscript_http_util.isReservedHeader(k)) {
							continue
						}
						headerFields = $.appendOne(headerFields, (() => { const __goscriptLiteralField9 = __goscript_http_util.encodeMetadataHeader(k, v); return new hpack.HeaderField({Name: k, Value: __goscriptLiteralField9}, true) })())
					}
				}
			}
		}
		for (const [k, vv] of (t$ as http2Client).md?.entries() ?? []) {
			if (__goscript_http_util.isReservedHeader(k)) {
				continue
			}
			for (let __goscriptRangeTarget6 = vv, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
				let v = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as string)
				headerFields = $.appendOne(headerFields, (() => { const __goscriptLiteralField10 = __goscript_http_util.encodeMetadataHeader(k, v); return new hpack.HeaderField({Name: k, Value: __goscriptLiteralField10}, true) })())
			}
		}
		return [headerFields, null]
	}

	public async getCallAuthData(ctx: context.Context | null, audience: string, callHdr: __goscript_transport.CallHdr | $.VarRef<__goscript_transport.CallHdr> | null): globalThis.Promise<[globalThis.Map<string, string> | null, $.GoError]> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		let callAuthData: globalThis.Map<string, string> | null = null! as globalThis.Map<string, string> | null
		// Check if credentials.PerRPCCredentials were provided via call options.
		// Note: if these credentials are provided both via dial options and call
		// options, then both sets of credentials will be applied.
		{
			let callCreds = $.pointerValue<__goscript_transport.CallHdr>(callHdr).Creds
			if (callCreds != null) {
				if ((__goscriptAwait = (callCreds !== null && (callCreds as any).__isVarRef !== true && (callCreds as any).__goValue === undefined ? (callCreds as Exclude<credentials.PerRPCCredentials, null>) : $.pointerValue<Exclude<credentials.PerRPCCredentials, null>>(callCreds)).RequireTransportSecurity(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					let [ri, ] = await credentials.RequestInfoFromContext(ctx)
					if (!$.pointerValue<http2Client>(t).isSecure || (await credentials.CheckSecurityLevel(ri.AuthInfo, 3) != null)) {
						return [null, status2.Error(16, "transport: cannot send secure credentials on an insecure connection")]
					}
				}
				let __goscriptTuple5: any = await (callCreds !== null && (callCreds as any).__isVarRef !== true && (callCreds as any).__goValue === undefined ? (callCreds as Exclude<credentials.PerRPCCredentials, null>) : $.pointerValue<Exclude<credentials.PerRPCCredentials, null>>(callCreds)).GetRequestMetadata(ctx, $.arrayToSlice<string>([audience]))
				let data: globalThis.Map<string, string> | null = __goscriptTuple5[0]
				let err = __goscriptTuple5[1]
				if (err != null) {
					{
						let __goscriptTuple6: any = await status2.FromError(err)
						let st: istatus.Status | $.VarRef<istatus.Status> | null = __goscriptTuple6[0]
						let ok = __goscriptTuple6[1]
						if (ok) {
							// Restrict the code to the list allowed by gRFC A54.
							if (istatus.IsRestrictedControlPlaneCode(st)) {
								err = await status2.Errorf(13, "transport: received per-RPC creds error with illegal status: %v", $.arrayToSlice<any>([(err as any)]))
							}
							return [null, err]
						}
					}
					return [null, await status2.Errorf(13, "transport: per-RPC creds failed due to error: %v", $.arrayToSlice<any>([(err as any)]))]
				}
				callAuthData = $.makeMap<string, string>()
				for (let [k, v] of data?.entries() ?? []) {
					// Capital header names are illegal in HTTP/2
					k = strings.ToLower(k)
					$.mapSet(callAuthData, k, v)
				}
			}
		}
		return [callAuthData, null]
	}

	public async getOutFlowWindow(): globalThis.Promise<bigint> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		using __defer = new $.DisposableStack()
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		let resp: $.Channel<number> | null = $.makeChannel<number>(1, 0, "both")
		let timer: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer(1000000000n)
		__defer.defer(() => { time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(timer)) })
		await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Client).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.outFlowControlSizeRequest({resp: resp}), "*transport.outFlowControlSizeRequest", /* @__PURE__ */ $.pointerType("transport.outFlowControlSizeRequest")))
		const [__goscriptSelect4HasReturn, __goscriptSelect4Value] = await $.selectStatement<any, bigint>([
			{
				id: 0,
				isSend: false,
				channel: resp,
				onSelected: async (__goscriptSelect4Result) => {
					let sz = __goscriptSelect4Result.value
					return $.int64(sz)
				}
			},
			{
				id: 1,
				isSend: false,
				channel: (t$ as http2Client).ctxDone,
				onSelected: async (__goscriptSelect4Result) => {
					return -1n
				}
			},
			{
				id: 2,
				isSend: false,
				channel: $.pointerValue<time.Timer>(timer).C,
				onSelected: async (__goscriptSelect4Result) => {
					return -2n
				}
			}
		], false)
		if (__goscriptSelect4HasReturn) {
			return __goscriptSelect4Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public getPeer(): peer.Peer | $.VarRef<peer.Peer> | null {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		return new peer.Peer({Addr: (t$ as http2Client).remoteAddr, AuthInfo: (t$ as http2Client).authInfo, LocalAddr: (t$ as http2Client).localAddr})
	}

	public async getStream(f: http2.Frame | null): globalThis.Promise<__goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		await (t$ as http2Client).mu.Lock()
		let s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null = $.mapGet<number, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null>((t$ as http2Client).activeStreams, ((__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<http2.Frame, null>) : $.pointerValue<Exclude<http2.Frame, null>>(f)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as http2.FrameHeader).StreamID, null)[0]
		void (t$ as http2Client).mu.Unlock()
		return s
	}

	public async getTrAuthData(ctx: context.Context | null, audience: string): globalThis.Promise<[globalThis.Map<string, string> | null, $.GoError]> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		if ($.sliceLen((t$ as http2Client).perRPCCreds) == 0) {
			return [null, null]
		}
		let authData: globalThis.Map<string, string> | null = $.makeMap<string, string>([])
		for (let __goscriptRangeTarget7 = (t$ as http2Client).perRPCCreds, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
			let c = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as credentials.PerRPCCredentials | null)
			let __goscriptTuple7: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<credentials.PerRPCCredentials, null>) : $.pointerValue<Exclude<credentials.PerRPCCredentials, null>>(c)).GetRequestMetadata(ctx, $.arrayToSlice<string>([audience]))
			let data: globalThis.Map<string, string> | null = __goscriptTuple7[0]
			let err = __goscriptTuple7[1]
			if (err != null) {
				{
					let __goscriptTuple8: any = await status2.FromError(err)
					let st: istatus.Status | $.VarRef<istatus.Status> | null = __goscriptTuple8[0]
					let ok = __goscriptTuple8[1]
					if (ok) {
						// Restrict the code to the list allowed by gRFC A54.
						if (istatus.IsRestrictedControlPlaneCode(st)) {
							err = await status2.Errorf(13, "transport: received per-RPC creds error with illegal status: %v", $.arrayToSlice<any>([(err as any)]))
						}
						return [null, err]
					}
				}

				return [null, await status2.Errorf(16, "transport: per-RPC creds failed due to error: %v", $.arrayToSlice<any>([(err as any)]))]
			}
			for (let [k, v] of data?.entries() ?? []) {
				// Capital header names are illegal in HTTP/2.
				k = strings.ToLower(k)
				$.mapSet(authData, k, v)
			}
		}
		return [authData, null]
	}

	public async handleData(f: http2.DataFrame | $.VarRef<http2.DataFrame> | null): globalThis.Promise<void> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		let size = $.pointerValue<http2.DataFrame>(f).FrameHeader.Header().Length
		let sendBDPPing: boolean = false
		if ((t$ as http2Client).bdpEst != null) {
			sendBDPPing = await __goscript_bdp_estimator.bdpEstimator.prototype.add.call((t$ as http2Client).bdpEst, size)
		}
		// Decouple connection's flow control from application's read.
		// An update on connection's flow control should not depend on
		// whether user application has read the data or not. Such a
		// restriction is already imposed on the stream's flow control,
		// and therefore the sender will be blocked anyways.
		// Decoupling the connection flow control will prevent other
		// active(fast) streams from starving in presence of slow or
		// inactive streams.
		//
		{
			let w = __goscript_flowcontrol.trInFlow.prototype.onData.call((t$ as http2Client).fc, size)
			if (w > 0) {
				await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Client).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.outgoingWindowUpdate({streamID: 0, increment: w}), "*transport.outgoingWindowUpdate", /* @__PURE__ */ $.pointerType("transport.outgoingWindowUpdate")))
			}
		}
		if (sendBDPPing) {
			// Avoid excessive ping detection (e.g. in an L7 proxy)
			// by sending a window update prior to the BDP ping.

			{
				let w = __goscript_flowcontrol.trInFlow.prototype.reset.call((t$ as http2Client).fc)
				if (w > 0) {
					await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Client).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.outgoingWindowUpdate({streamID: 0, increment: w}), "*transport.outgoingWindowUpdate", /* @__PURE__ */ $.pointerType("transport.outgoingWindowUpdate")))
				}
			}

			await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Client).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(__goscript_bdp_estimator.__goscript_get_bdpPing(), "*transport.ping", /* @__PURE__ */ $.pointerType("transport.ping")))
		}
		// Select the right stream to dispatch.
		let s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).getStream($.interfaceValue<http2.Frame | null>(f, "*http2.DataFrame", /* @__PURE__ */ $.pointerType("http2.DataFrame"))) : http2Client.prototype.getStream.call(t, $.interfaceValue<http2.Frame | null>(f, "*http2.DataFrame", /* @__PURE__ */ $.pointerType("http2.DataFrame"))))
		let s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		if (s == null) {
			return
		}
		if (size > 0) {
			{
				let err = await __goscript_flowcontrol.inFlow.prototype.onData.call((s$ as __goscript_transport.Stream).fc, size)
				if (err != null) {
					await http2Client.prototype.closeStream.call(t, s, io.EOF, true, 3, status2.New(13, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), null, false)
					return
				}
			}
			if (http2.Flags_Has($.pointerValue<http2.DataFrame>(f).FrameHeader.Header().Flags, 8)) {
				{
					let w = await __goscript_flowcontrol.inFlow.prototype.onRead.call((s$ as __goscript_transport.Stream).fc, $.uint(((size - $.uint($.sliceLen((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as http2.DataFrame).Data() : http2.DataFrame.prototype.Data.call(f))), 32)) >>> 0), 32))
					if (w > 0) {
						await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Client).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.outgoingWindowUpdate({streamID: (s$ as __goscript_transport.Stream).id, increment: w}), "*transport.outgoingWindowUpdate", /* @__PURE__ */ $.pointerType("transport.outgoingWindowUpdate")))
					}
				}
			}
			// TODO(bradfitz, zhaoq): A copy is required here because there is no
			// guarantee f.Data() is consumed before the arrival of next frame.
			// Can this copy be eliminated?
			if ($.sliceLen((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as http2.DataFrame).Data() : http2.DataFrame.prototype.Data.call(f))) > 0) {
				let pool = (t$ as http2Client).bufferPool
				if (pool == null) {
					// Note that this is only supposed to be nil in tests. Otherwise, stream is
					// always initialized with a BufferPool.
					pool = mem.DefaultBufferPool()
				}
				await __goscript_transport.Stream.prototype.write.call(s, (await (async () => { const __goscriptLiteralField11 = await mem.Copy((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as http2.DataFrame).Data() : http2.DataFrame.prototype.Data.call(f)), pool); return new __goscript_transport.recvMsg({buffer: __goscriptLiteralField11}, true) })()))
			}
		}
		// The server has closed the stream without sending trailers.  Record that
		// the read direction is closed, and set the status appropriately.
		if ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as http2.DataFrame).StreamEnded() : http2.DataFrame.prototype.StreamEnded.call(f))) {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).closeStream(s, io.EOF, false, 0, status2.New(13, "server closed the stream without sending trailers"), null, true) : http2Client.prototype.closeStream.call(t, s, io.EOF, false, 0, status2.New(13, "server closed the stream without sending trailers"), null, true))
		}
	}

	public async handleGoAway(f: http2.GoAwayFrame | $.VarRef<http2.GoAwayFrame> | null): globalThis.Promise<void> {
		let t: http2Client | $.VarRef<http2Client> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		const f$: http2.GoAwayFrame = f == null ? $.pointerTarget<http2.GoAwayFrame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<http2.GoAwayFrame>(f)
		await (t$ as http2Client).mu.Lock()
		if ((t$ as http2Client).state == 1) {
			void (t$ as http2Client).mu.Unlock()
			return
		}
		if (((f$ as http2.GoAwayFrame).ErrCode == 11) && ($.stringEqual($.bytesToString((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as http2.GoAwayFrame).DebugData() : http2.GoAwayFrame.prototype.DebugData.call(f))), "too_many_pings"))) {
			// When a client receives a GOAWAY with error code ENHANCE_YOUR_CALM and debug
			// data equal to ASCII "too_many_pings", it should log the occurrence at a log level that is
			// enabled by default and double the configure KEEPALIVE_TIME used for new connections
			// on that channel.
			void (__goscriptAwait = $.pointerValue<Exclude<grpclog2.DepthLoggerV2, null>>(__goscript_logging.logger).Errorf("Client received GoAway with error code ENHANCE_YOUR_CALM and debug data equal to ASCII \"too_many_pings\".", null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		let id = (f$ as http2.GoAwayFrame).LastStreamID
		if ((id > 0) && ($.uint((id % 2), 32) == 0)) {
			void (t$ as http2Client).mu.Unlock()
			await http2Client.prototype.Close.call(t, $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(true, null, "received goaway with non-zero even-numbered stream id: %v", $.arrayToSlice<any>([$.basicInterfaceValue(id, "uint32")])), "transport.ConnectionError", "transport.ConnectionError"))
			return
		}
		// A client can receive multiple GoAways from the server (see
		// https://github.com/grpc/grpc-go/issues/1387).  The idea is that the first
		// GoAway will be sent with an ID of MaxInt32 and the second GoAway will be
		// sent after an RTT delay with the ID of the last stream the server will
		// process.
		//
		// Therefore, when we get the first GoAway we don't necessarily close any
		// streams. While in case of second GoAway we close all streams created after
		// the GoAwayId. This way streams that were in-flight while the GoAway from
		// server was being sent don't get killed.
		const [__goscriptSelect5HasReturn, __goscriptSelect5Value] = await $.selectStatement<any, void>([
			{
				id: 0,
				isSend: false,
				channel: (t$ as http2Client).goAway,
				onSelected: async (__goscriptSelect5Result) => {
					if (id > (t$ as http2Client).prevGoAwayID) {
						void (t$ as http2Client).mu.Unlock()
						await http2Client.prototype.Close.call(t, $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(true, null, "received goaway with stream id: %v, which exceeds stream id of previous goaway: %v", $.arrayToSlice<any>([$.basicInterfaceValue(id, "uint32"), $.basicInterfaceValue((t$ as http2Client).prevGoAwayID, "uint32")])), "transport.ConnectionError", "transport.ConnectionError"))
						return $.selectVoidReturn()
					}
				}
			},
			{
				id: -1,
				isSend: false,
				channel: null,
				onSelected: async (__goscriptSelect5Result) => {
					await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).setGoAwayReason(f) : http2Client.prototype.setGoAwayReason.call(t, f))
					void (t$ as http2Client).goAway!.close()
					const __goscriptDeferCallee1 = $.functionValue(((__receiver) => (it: __goscript_controlbuf.cbItem | null) => __receiver.put(it))($.pointerValue<__goscript_controlbuf.controlBuffer>((t$ as http2Client).controlBuf)), ({ kind: $.TypeKind.Function, params: ["transport.cbItem"], results: ["error"] } as $.FunctionTypeInfo), "google.golang.org/grpc/internal/transport.(*controlBuffer).put-fm")
					const __goscriptDeferArg0 = $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.incomingGoAway(), "*transport.incomingGoAway", /* @__PURE__ */ $.pointerType("transport.incomingGoAway"))
					__defer.defer(async () => { await __goscriptDeferCallee1(__goscriptDeferArg0) })
					// Notify the clientconn about the GOAWAY before we set the state to
					// draining, to allow the client to stop attempting to create streams
					// before disallowing new streams on this connection.
					if ((t$ as http2Client).state != 2) {
						void (__goscriptAwait = (t$ as http2Client).onClose!((t$ as http2Client).goAwayReason), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
						;(t$ as http2Client).state = 2
					}
				}
			}
		], true)
		if (__goscriptSelect5HasReturn) {
			return __goscriptSelect5Value
		}
		// All streams with IDs greater than the GoAwayId
		// and smaller than the previous GoAway ID should be killed.
		let upperLimit = (t$ as http2Client).prevGoAwayID
		if (upperLimit == 0) {
			upperLimit = 4294967295
		}

		;(t$ as http2Client).prevGoAwayID = id
		if ($.len((t$ as http2Client).activeStreams) == 0) {
			void (t$ as http2Client).mu.Unlock()
			await http2Client.prototype.Close.call(t, $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(true, null, "received goaway and there are no active streams", null), "transport.ConnectionError", "transport.ConnectionError"))
			return
		}

		let streamsToClose: $.Slice<__goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null> = $.makeSlice<__goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null>(0)
		for (const [streamID, stream] of (t$ as http2Client).activeStreams?.entries() ?? []) {
			if ((streamID > id) && (streamID <= upperLimit)) {
				// The stream was unprocessed by the server.
				atomic.StoreUint32($.fieldRef($.pointerValue<__goscript_transport.Stream>(stream)._fields, "unprocessed"), 1)
				streamsToClose = $.appendOne(streamsToClose, stream, $.appendZeros.nil)
			}
		}
		void (t$ as http2Client).mu.Unlock()
		// Called outside t.mu because closeStream can take controlBuf's mu, which
		// could induce deadlock and is not allowed.
		for (let __goscriptRangeTarget8 = streamsToClose, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
			let stream = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null)
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).closeStream(stream, __goscript_transport.errStreamDrain, false, 0, __goscript_transport.statusGoAway, null, false) : http2Client.prototype.closeStream.call(t, stream, __goscript_transport.errStreamDrain, false, 0, __goscript_transport.statusGoAway, null, false))
		}
	}

	public async handlePing(f: http2.PingFrame | $.VarRef<http2.PingFrame> | null): globalThis.Promise<void> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		const f$: http2.PingFrame = f == null ? $.pointerTarget<http2.PingFrame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<http2.PingFrame>(f)
		if ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as http2.PingFrame).IsAck() : http2.PingFrame.prototype.IsAck.call(f))) {
			// Maybe it's a BDP ping.
			if ((t$ as http2Client).bdpEst != null) {
				await __goscript_bdp_estimator.bdpEstimator.prototype.calculate.call((t$ as http2Client).bdpEst, $.cloneArrayValue((f$ as http2.PingFrame).Data, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)))
			}
			return
		}
		let pingAck: __goscript_controlbuf.ping | $.VarRef<__goscript_controlbuf.ping> | null = new __goscript_controlbuf.ping({ack: true})
		$.copy($.goSlice($.pointerValue<__goscript_controlbuf.ping>(pingAck).data, undefined, undefined), $.goSlice((f$ as http2.PingFrame).Data, undefined, undefined))
		await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Client).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(pingAck, "*transport.ping", /* @__PURE__ */ $.pointerType("transport.ping")))
	}

	public async handleRSTStream(f: http2.RSTStreamFrame | $.VarRef<http2.RSTStreamFrame> | null): globalThis.Promise<void> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		const f$: http2.RSTStreamFrame = f == null ? $.pointerTarget<http2.RSTStreamFrame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<http2.RSTStreamFrame>(f)
		let s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).getStream($.interfaceValue<http2.Frame | null>(f, "*http2.RSTStreamFrame", /* @__PURE__ */ $.pointerType("http2.RSTStreamFrame"))) : http2Client.prototype.getStream.call(t, $.interfaceValue<http2.Frame | null>(f, "*http2.RSTStreamFrame", /* @__PURE__ */ $.pointerType("http2.RSTStreamFrame"))))
		let s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		if (s == null) {
			return
		}
		if ((f$ as http2.RSTStreamFrame).ErrCode == 7) {
			// The stream was unprocessed by the server.
			atomic.StoreUint32($.fieldRef((s$ as __goscript_transport.Stream)._fields, "unprocessed"), 1)
		}
		let [statusCode, ok] = $.mapGet<http2.ErrCode, codes.Code, codes.Code>(__goscript_http_util.http2ErrConvTab, (f$ as http2.RSTStreamFrame).ErrCode, 0)
		if (!ok) {
			if (await grpclog.PrefixLogger.prototype.V.call((t$ as http2Client).logger, 2)) {
				await grpclog.PrefixLogger.prototype.Infof.call((t$ as http2Client).logger, "Received a RST_STREAM frame with code %q, but found no mapped gRPC status", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((f$ as http2.RSTStreamFrame).ErrCode, "http2.ErrCode", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())]))
			}
			statusCode = 2
		}
		if (statusCode == 1) {
			{
				let [d, __goscriptShadow1] = await $.pointerValue<Exclude<context.Context, null>>((s$ as __goscript_transport.Stream).ctx).Deadline()
				if (__goscriptShadow1 && !$.markAsStructValue($.cloneStructValue(d)).After($.markAsStructValue($.cloneStructValue(time.Now())))) {
					// Our deadline was already exceeded, and that was likely the cause
					// of this cancellation.  Alter the status code accordingly.
					statusCode = 4
				}
			}
		}
		await http2Client.prototype.closeStream.call(t, s, io.EOF, false, 0, await status2.Newf(statusCode, "stream terminated by RST_STREAM with error code: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((f$ as http2.RSTStreamFrame).ErrCode, "http2.ErrCode", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())])), null, false)
	}

	public async handleSettings(f: http2.SettingsFrame | $.VarRef<http2.SettingsFrame> | null, isFirst: boolean): globalThis.Promise<void> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		if ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as http2.SettingsFrame).IsAck() : http2.SettingsFrame.prototype.IsAck.call(f))) {
			return
		}
		let maxStreams: $.VarRef<number> | null = null! as $.VarRef<number> | null
		let ss: $.Slice<http2.Setting> = null! as $.Slice<http2.Setting>
		let updateFuncs: $.Slice<(() => void) | null> = null! as $.Slice<(() => void) | null>
		await http2.SettingsFrame.prototype.ForeachSetting.call(f, $.functionValue((s: http2.Setting): $.GoError => {
			switch (s.ID) {
				case http2.SettingMaxConcurrentStreams:
				{
					maxStreams = $.varRef<number>(0)
					maxStreams!.value = s.Val
					break
				}
				case http2.SettingMaxHeaderListSize:
				{
					updateFuncs = $.appendOne(updateFuncs, $.functionValue((): void => {
						;(t$ as http2Client).maxSendHeaderListSize = $.varRef<number>(0);
						;(t$ as http2Client).maxSendHeaderListSize!.value = s.Val
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
		if (isFirst && (maxStreams == null)) {
			maxStreams = $.varRef<number>(0)
			maxStreams!.value = 4294967295
		}
		let sf: __goscript_controlbuf.incomingSettings | $.VarRef<__goscript_controlbuf.incomingSettings> | null = new __goscript_controlbuf.incomingSettings({ss: ss})
		if (maxStreams != null) {
			let updateStreamQuota: (() => void) | null = $.functionValue((): void => {
				let delta = $.int64Sub($.int64($.pointerValue<number>(maxStreams)), $.int64((t$ as http2Client).maxConcurrentStreams));
				;(t$ as http2Client).maxConcurrentStreams = $.pointerValue<number>(maxStreams);
				;(t$ as http2Client).streamQuota = $.int64Add((t$ as http2Client).streamQuota, delta)
				if ((delta > 0n) && ((t$ as http2Client).waitingStreams > 0)) {
					void (t$ as http2Client).streamsQuotaAvailable!.close();
					;(t$ as http2Client).streamsQuotaAvailable = $.makeChannel<{}>(1, {}, "both")
				}
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
			updateFuncs = $.appendOne(updateFuncs, updateStreamQuota, $.appendZeros.nil)
		}
		await __goscript_controlbuf.controlBuffer.prototype.executeAndPut.call((t$ as http2Client).controlBuf, $.functionValue(async (): globalThis.Promise<boolean> => {
			for (let __goscriptRangeTarget9 = updateFuncs, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
				let f = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as (() => void) | null)
				void (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)), $.interfaceValue<__goscript_controlbuf.cbItem | null>(sf, "*transport.incomingSettings", /* @__PURE__ */ $.pointerType("transport.incomingSettings")))
	}

	public async handleWindowUpdate(f: http2.WindowUpdateFrame | $.VarRef<http2.WindowUpdateFrame> | null): globalThis.Promise<void> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		await __goscript_controlbuf.controlBuffer.prototype.put.call($.pointerValue<http2Client>(t).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.incomingWindowUpdate({streamID: $.pointerValue<http2.WindowUpdateFrame>(f).FrameHeader.Header().StreamID, increment: $.pointerValue<http2.WindowUpdateFrame>(f).Increment}), "*transport.incomingWindowUpdate", /* @__PURE__ */ $.pointerType("transport.incomingWindowUpdate")))
	}

	public async keepalive(): globalThis.Promise<void> {
		let t: http2Client | $.VarRef<http2Client> | null = this;
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		let p: __goscript_controlbuf.ping | $.VarRef<__goscript_controlbuf.ping> | null = new __goscript_controlbuf.ping({data: $.arrayValue(new Uint8Array(8))})
		// True iff a ping has been sent, and no data has been received since then.
		let outstandingPing = false
		// Amount of time remaining before which we should receive an ACK for the
		// last sent ping.
		let timeoutLeft = 0n
		// Records the last value of t.lastRead before we go block on the timer.
		// This is required to check for read activity since then.
		let prevNano = $.markAsStructValue($.cloneStructValue(time.Now())).UnixNano()
		let timer: time.Timer | $.VarRef<time.Timer> | null = time.NewTimer((t$ as http2Client).kp.Time)
		let timer$: time.Timer = timer == null ? $.pointerTarget<time.Timer>(timer) : (timer as any).__isVarRef === true ? (timer as any).value : (timer as any).__goValue === undefined ? (timer as any) : $.pointerTarget<time.Timer>(timer)
		while (true) {
			const [__goscriptSelect6HasReturn, __goscriptSelect6Value] = await $.selectStatement<any, any>([
				{
					id: 0,
					isSend: false,
					channel: (timer$ as time.Timer).C,
					onSelected: async (__goscriptSelect6Result) => {
						return __goscriptSelect6Result
					}
				},
				{
					id: 1,
					isSend: false,
					channel: ((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((t$ as http2Client).ctx).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
					onSelected: async (__goscriptSelect6Result) => {
						return __goscriptSelect6Result
					}
				}
			], false)
			switch (__goscriptSelect6Value?.id) {
				case 0:
					{
						const __goscriptSelect6Result = __goscriptSelect6Value
						let lastRead = atomic.LoadInt64($.fieldRef((t$ as http2Client)._fields, "lastRead"))
						if (lastRead > prevNano) {
							// There has been read activity since the last time we were here.
							outstandingPing = false
							// Next timer should fire at kp.Time seconds from lastRead time.
							time.Timer.prototype.Reset.call($.pointerValue<time.Timer>(timer), $.int64Sub(($.int64Add($.int64(lastRead), (t$ as http2Client).kp.Time)), $.int64($.markAsStructValue($.cloneStructValue(time.Now())).UnixNano())))
							prevNano = lastRead
							continue
						}
						if (outstandingPing && (timeoutLeft <= 0n)) {
							await http2Client.prototype.Close.call(t, $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(true, null, "keepalive ping failed to receive ACK within timeout", null), "transport.ConnectionError", "transport.ConnectionError"))
							return
						}
						await (t$ as http2Client).mu.Lock()
						if ((t$ as http2Client).state == 1) {
							// If the transport is closing, we should exit from the
							// keepalive goroutine here. If not, we could have a race
							// between the call to Signal() from Close() and the call to
							// Wait() here, whereby the keepalive goroutine ends up
							// blocking on the condition variable which will never be
							// signalled again.
							void (t$ as http2Client).mu.Unlock()
							return
						}
						if (($.len((t$ as http2Client).activeStreams) < 1) && !(t$ as http2Client).kp.PermitWithoutStream) {
							// If a ping was sent out previously (because there were active
							// streams at that point) which wasn't acked and its timeout
							// hadn't fired, but we got here and are about to go dormant,
							// we should make sure that we unconditionally send a ping once
							// we awaken.
							outstandingPing = false;
							;(t$ as http2Client).kpDormant = true
							await sync.Cond.prototype.Wait.call($.pointerValue<sync.Cond>((t$ as http2Client).kpDormancyCond))
						}
						;(t$ as http2Client).kpDormant = false
						void (t$ as http2Client).mu.Unlock()

						// We get here either because we were dormant and a new stream was
						// created which unblocked the Wait() call, or because the
						// keepalive timer expired. In both cases, we need to send a ping.
						if (!outstandingPing) {
							if (channelz2.IsOn()) {
								$.pointerValue<channelz2.Socket>((t$ as http2Client).channelz).SocketMetrics.KeepAlivesSent.Add(1n)
							}
							await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Client).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(p, "*transport.ping", /* @__PURE__ */ $.pointerType("transport.ping")))
							timeoutLeft = (t$ as http2Client).kp.Timeout
							outstandingPing = true
						}
						// The amount of time to sleep here is the minimum of kp.Time and
						// timeoutLeft. This will ensure that we wait only for kp.Time
						// before sending out the next ping (for cases where the ping is
						// acked).
						let sleepDuration = $.min((t$ as http2Client).kp.Time, timeoutLeft)
						timeoutLeft = $.int64Sub(timeoutLeft, sleepDuration)
						time.Timer.prototype.Reset.call($.pointerValue<time.Timer>(timer), sleepDuration)
						break
					}
				case 1:
					{
						const __goscriptSelect6Result = __goscriptSelect6Value
						if (!time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(timer))) {
							await $.chanRecv((timer$ as time.Timer).C)
						}
						return
						break
					}
			}
		}
	}

	public async newStream(ctx: context.Context | null, callHdr: __goscript_transport.CallHdr | $.VarRef<__goscript_transport.CallHdr> | null): globalThis.Promise<__goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		const callHdr$: __goscript_transport.CallHdr = callHdr == null ? $.pointerTarget<__goscript_transport.CallHdr>(callHdr) : (callHdr as any).__isVarRef === true ? (callHdr as any).value : (callHdr as any).__goValue === undefined ? (callHdr as any) : $.pointerTarget<__goscript_transport.CallHdr>(callHdr)
		// TODO(zhaoq): Handle uint32 overflow of Stream.id.
		let s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null = (() => { const __goscriptLiteralField12 = __goscript_transport.newRecvBuffer(); return new __goscript_transport.Stream({ct: $.interfaceValue<__goscript_transport.ClientTransport | null>(t, "*transport.http2Client", /* @__PURE__ */ $.pointerType("transport.http2Client")), done: $.makeChannel<{}>(0, {}, "both"), method: (callHdr$ as __goscript_transport.CallHdr).Method, sendCompress: (callHdr$ as __goscript_transport.CallHdr).SendCompress, buf: __goscriptLiteralField12, headerChan: $.makeChannel<{}>(0, {}, "both"), contentSubtype: (callHdr$ as __goscript_transport.CallHdr).ContentSubtype, doneFunc: (callHdr$ as __goscript_transport.CallHdr).DoneFunc}) })()
		let s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s);
		;(s$ as __goscript_transport.Stream).wq = __goscript_flowcontrol.newWriteQuota(65536, (s$ as __goscript_transport.Stream).done);
		;(s$ as __goscript_transport.Stream).requestRead = $.functionValue(async (n: number): globalThis.Promise<void> => {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).adjustWindow(s, $.uint(n, 32)) : http2Client.prototype.adjustWindow.call(t, s, $.uint(n, 32)))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo));
		// The client side stream context should have exactly the same life cycle with the user provided context.
		// That means, s.ctx should be read-only. And s.ctx is done iff ctx is done.
		// So we use the original context here instead of creating a copy.
		;(s$ as __goscript_transport.Stream).ctx = ctx;
		;(s$ as __goscript_transport.Stream).trReader = new __goscript_transport.transportReader({reader: (await (async () => { const __goscriptLiteralField13 = ((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((s$ as __goscript_transport.Stream).ctx).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null); return new __goscript_transport.recvBufferReader({ctx: (s$ as __goscript_transport.Stream).ctx, ctxDone: __goscriptLiteralField13, recv: (s$ as __goscript_transport.Stream).buf, closeStream: $.functionValue(async (err: $.GoError): globalThis.Promise<void> => {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).CloseStream(s, err) : http2Client.prototype.CloseStream.call(t, s, err))
		}, ({ kind: $.TypeKind.Function, params: ["error"], results: [] } as $.FunctionTypeInfo))}) })()), windowHandler: $.functionValue(async (n: number): globalThis.Promise<void> => {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).updateWindow(s, $.uint(n, 32)) : http2Client.prototype.updateWindow.call(t, s, $.uint(n, 32)))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo))})
		return s
	}

	public async operateHeaders(frame: http2.MetaHeadersFrame | $.VarRef<http2.MetaHeadersFrame> | null): globalThis.Promise<void> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		const frame$: http2.MetaHeadersFrame = frame == null ? $.pointerTarget<http2.MetaHeadersFrame>(frame) : (frame as any).__isVarRef === true ? (frame as any).value : (frame as any).__goValue === undefined ? (frame as any) : $.pointerTarget<http2.MetaHeadersFrame>(frame)
		let s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null = await http2Client.prototype.getStream.call(t, $.interfaceValue<http2.Frame | null>(frame, "*http2.MetaHeadersFrame", /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")))
		let s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		if (s == null) {
			return
		}
		let endStream = $.pointerValue<http2.HeadersFrame>((frame$ as http2.MetaHeadersFrame).HeadersFrame).StreamEnded()
		atomic.StoreUint32($.fieldRef((s$ as __goscript_transport.Stream)._fields, "bytesReceived"), 1)
		let initialHeader = atomic.LoadUint32($.fieldRef((s$ as __goscript_transport.Stream)._fields, "headerChanClosed")) == 0

		if (!initialHeader && !endStream) {
			// As specified by gRPC over HTTP2, a HEADERS frame (and associated CONTINUATION frames) can only appear at the start or end of a stream. Therefore, second HEADERS frame must have EOS bit set.
			let st: istatus.Status | $.VarRef<istatus.Status> | null = status2.New(13, "a HEADERS frame cannot appear in the middle of a stream")
			await http2Client.prototype.closeStream.call(t, s, (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as istatus.Status).Err() : istatus.Status.prototype.Err.call(st)), true, 1, st, null, false)
			return
		}

		// frame.Truncated is set to true when framer detects that the current header
		// list size hits MaxHeaderListSize limit.
		if ((frame$ as http2.MetaHeadersFrame).Truncated) {
			let se: istatus.Status | $.VarRef<istatus.Status> | null = status2.New(13, "peer header list size exceeded limit")
			await http2Client.prototype.closeStream.call(t, s, (se !== null && (se as any).__isVarRef !== true && (se as any).__goValue === undefined ? ((se as any) as istatus.Status).Err() : istatus.Status.prototype.Err.call(se)), true, 6, se, null, endStream)
			return
		}

		let isGRPC: boolean = !initialHeader
		let mdata: globalThis.Map<string, $.Slice<string>> | null = $.makeMap<string, $.Slice<string>>()
		let contentTypeErr: string = "malformed header: missing HTTP content-type"
		let grpcMessage: string = ""
		let recvCompress: string = ""
		let httpStatusCode: $.VarRef<number> | null = null! as $.VarRef<number> | null
		let httpStatusErr: string = ""
		let rawStatusCode: codes.Code = 2
		let headerError: string = ""

		if (initialHeader) {
			httpStatusErr = "malformed header: missing HTTP status"
		}

		for (let __goscriptRangeTarget10 = (frame$ as http2.MetaHeadersFrame).Fields, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
			let hf = ((__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as hpack.HeaderField)).clone()
			switch (hf.Name) {
				case "content-type":
				{
					{
						let [, validContentType] = grpcutil.ContentSubtype(hf.Value)
						if (!validContentType) {
							contentTypeErr = await fmt.Sprintf("transport: received unexpected content-type %q", hf.Value)
							break
						}
					}
					contentTypeErr = ""
					$.mapSet(mdata, hf.Name, $.appendOne($.mapGet<string, $.Slice<string>, $.Slice<string>>(mdata, hf.Name, null)[0], hf.Value))
					isGRPC = true
					break
				}
				case "grpc-encoding":
				{
					recvCompress = hf.Value
					break
				}
				case "grpc-status":
				{
					let [code, err] = strconv.ParseInt(hf.Value, 10, 32)
					if (err != null) {
						let se: istatus.Status | $.VarRef<istatus.Status> | null = status2.New(13, await fmt.Sprintf("transport: malformed grpc-status: %v", (err as any)))
						await http2Client.prototype.closeStream.call(t, s, (se !== null && (se as any).__isVarRef !== true && (se as any).__goValue === undefined ? ((se as any) as istatus.Status).Err() : istatus.Status.prototype.Err.call(se)), true, 1, se, null, endStream)
						return
					}
					rawStatusCode = $.uint($.uint(code, 32), 32)
					break
				}
				case "grpc-message":
				{
					grpcMessage = __goscript_http_util.decodeGrpcMessage(hf.Value)
					break
				}
				case ":status":
				{
					if ($.stringEqual(hf.Value, "200")) {
						httpStatusErr = ""
						let statusCode = $.varRef(200)
						httpStatusCode = statusCode
						break
					}

					let [c, err] = strconv.ParseInt(hf.Value, 10, 32)
					if (err != null) {
						let se: istatus.Status | $.VarRef<istatus.Status> | null = status2.New(13, await fmt.Sprintf("transport: malformed http-status: %v", (err as any)))
						await http2Client.prototype.closeStream.call(t, s, (se !== null && (se as any).__isVarRef !== true && (se as any).__goValue === undefined ? ((se as any) as istatus.Status).Err() : istatus.Status.prototype.Err.call(se)), true, 1, se, null, endStream)
						return
					}
					let statusCode = $.varRef($.int(c))
					httpStatusCode = statusCode

					httpStatusErr = await fmt.Sprintf("unexpected HTTP status code received from server: %d (%s)", $.basicInterfaceValue(statusCode.value, "int"), http.StatusText(statusCode.value))
					break
				}
				default:
				{
					if (__goscript_http_util.isReservedHeader(hf.Name) && !__goscript_http_util.isWhitelistedHeader(hf.Name)) {
						break
					}
					let [v, err] = __goscript_http_util.decodeMetadataHeader(hf.Name, hf.Value)
					if (err != null) {
						headerError = await fmt.Sprintf("transport: malformed %s: %v", hf.Name, (err as any))
						void (__goscriptAwait = $.pointerValue<Exclude<grpclog2.DepthLoggerV2, null>>(__goscript_logging.logger).Warningf("Failed to decode metadata header (%q, %q): %v", $.arrayToSlice<any>([hf.Name, hf.Value, (err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						break
					}
					$.mapSet(mdata, hf.Name, $.appendOne($.mapGet<string, $.Slice<string>, $.Slice<string>>(mdata, hf.Name, null)[0], v))
					break
				}
			}
		}

		if (!isGRPC || (!$.stringEqual(httpStatusErr, ""))) {
			let code: codes.Code = 13

			if (httpStatusCode != null) {
				let ok: boolean = false
				let __goscriptTuple9: any = $.mapGet<number, codes.Code, codes.Code>(__goscript_http_util.HTTPStatusConvTab, $.pointerValue<number>(httpStatusCode), 0)
				code = __goscriptTuple9[0]
				ok = __goscriptTuple9[1]
				if (!ok) {
					code = 2
				}
			}
			let errs: $.Slice<string> = null! as $.Slice<string>
			if (!$.stringEqual(httpStatusErr, "")) {
				errs = $.appendOne(errs, httpStatusErr)
			}
			if (!$.stringEqual(contentTypeErr, "")) {
				errs = $.appendOne(errs, contentTypeErr)
			}
			// Verify the HTTP response is a 200.
			let se: istatus.Status | $.VarRef<istatus.Status> | null = status2.New(code, strings.Join(errs, "; "))
			await http2Client.prototype.closeStream.call(t, s, (se !== null && (se as any).__isVarRef !== true && (se as any).__goValue === undefined ? ((se as any) as istatus.Status).Err() : istatus.Status.prototype.Err.call(se)), true, 1, se, null, endStream)
			return
		}

		if (!$.stringEqual(headerError, "")) {
			let se: istatus.Status | $.VarRef<istatus.Status> | null = status2.New(13, headerError)
			await http2Client.prototype.closeStream.call(t, s, (se !== null && (se as any).__isVarRef !== true && (se as any).__goValue === undefined ? ((se as any) as istatus.Status).Err() : istatus.Status.prototype.Err.call(se)), true, 1, se, null, endStream)
			return
		}

		// For headers, set them in s.header and close headerChan.  For trailers or
		// trailers-only, closeStream will set the trailers and close headerChan as
		// needed.
		if (!endStream) {
			// If headerChan hasn't been closed yet (expected, given we checked it
			// above, but something else could have potentially closed the whole
			// stream).
			if (atomic.CompareAndSwapUint32($.fieldRef((s$ as __goscript_transport.Stream)._fields, "headerChanClosed"), 0, 1)) {
				;(s$ as __goscript_transport.Stream).headerValid = true;
				// These values can be set without any synchronization because
				// stream goroutine will read it only after seeing a closed
				// headerChan which we'll close after setting this.
				;(s$ as __goscript_transport.Stream).recvCompress = recvCompress
				if ($.len(mdata) > 0) {
					;(s$ as __goscript_transport.Stream).header = mdata
				}
				void (s$ as __goscript_transport.Stream).headerChan!.close()
			}
		}

		for (let __goscriptRangeTarget11 = $.pointerValue<http2Client>(t).statsHandlers, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
			let sh = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as stats.Handler | null)
			if (!endStream) {
				let inHeader: stats.InHeader | $.VarRef<stats.InHeader> | null = (() => { const __goscriptLiteralField14 = metadata.MD_Copy(mdata); return new stats.InHeader({Client: true, WireLength: $.int($.pointerValue<http2.HeadersFrame>((frame$ as http2.MetaHeadersFrame).HeadersFrame).FrameHeader.Header().Length), Header: __goscriptLiteralField14, Compression: (s$ as __goscript_transport.Stream).recvCompress}) })()
				void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleRPC((s$ as __goscript_transport.Stream).ctx, $.interfaceValue<stats.RPCStats | null>(inHeader, "*stats.InHeader", /* @__PURE__ */ $.pointerType("stats.InHeader"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				let inTrailer: stats.InTrailer | $.VarRef<stats.InTrailer> | null = (() => { const __goscriptLiteralField15 = metadata.MD_Copy(mdata); return new stats.InTrailer({Client: true, WireLength: $.int($.pointerValue<http2.HeadersFrame>((frame$ as http2.MetaHeadersFrame).HeadersFrame).FrameHeader.Header().Length), Trailer: __goscriptLiteralField15}) })()
				void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleRPC((s$ as __goscript_transport.Stream).ctx, $.interfaceValue<stats.RPCStats | null>(inTrailer, "*stats.InTrailer", /* @__PURE__ */ $.pointerType("stats.InTrailer"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		if (!endStream) {
			return
		}

		let __goscriptShadow2: istatus.Status | $.VarRef<istatus.Status> | null = await istatus.NewWithProto(rawStatusCode, grpcMessage, $.mapGet<string, $.Slice<string>, $.Slice<string>>(mdata, __goscript_http_util.grpcStatusDetailsBinHeader, null)[0])

		// If client received END_STREAM from server while stream was still active,
		// send RST_STREAM.
		let rstStream = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_transport.Stream).getState() : __goscript_transport.Stream.prototype.getState.call(s)) == 0
		await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).closeStream(s, io.EOF, rstStream, 0, __goscriptShadow2, mdata, true) : http2Client.prototype.closeStream.call(t, s, io.EOF, rstStream, 0, __goscriptShadow2, mdata, true))
	}

	public async outgoingGoAwayHandler(g: __goscript_controlbuf.goAway | $.VarRef<__goscript_controlbuf.goAway> | null): globalThis.Promise<[boolean, $.GoError]> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		using __defer = new $.DisposableStack()
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		const g$: __goscript_controlbuf.goAway = g == null ? $.pointerTarget<__goscript_controlbuf.goAway>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<__goscript_controlbuf.goAway>(g)
		await (t$ as http2Client).mu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((t$ as http2Client).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
		{
			let err = await http2.Framer.prototype.WriteGoAway.call($.pointerValue<__goscript_http_util.framer>((t$ as http2Client).framer).fr, $.uint((((t$ as http2Client).nextID - 2) >>> 0), 32), 0, (g$ as __goscript_controlbuf.goAway).debugData)
			if (err != null) {
				return [false, err]
			}
		}
		return [false, (g$ as __goscript_controlbuf.goAway).closeConn]
	}

	public async readServerPreface(): globalThis.Promise<$.GoError> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		let [frame, err] = await http2.Framer.prototype.ReadFrame.call($.pointerValue<__goscript_http_util.framer>($.pointerValue<http2Client>(t).framer).fr)
		if (err != null) {
			return $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(true, err, "error reading server preface: %v", $.arrayToSlice<any>([(err as any)])), "transport.ConnectionError", "transport.ConnectionError")
		}
		let __goscriptTuple10: any = $.typeAssertTuple<http2.SettingsFrame | $.VarRef<http2.SettingsFrame> | null>(frame, /* @__PURE__ */ $.pointerType("http2.SettingsFrame"))
		let sf: http2.SettingsFrame | $.VarRef<http2.SettingsFrame> | null = __goscriptTuple10[0]
		let ok = __goscriptTuple10[1]
		if (!ok) {
			return $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(true, null, "initial http2 frame from server is not a settings frame: %T", $.arrayToSlice<any>([(frame as any)])), "transport.ConnectionError", "transport.ConnectionError")
		}
		await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).handleSettings(sf, true) : http2Client.prototype.handleSettings.call(t, sf, true))
		return null
	}

	public async reader(errCh: $.Channel<$.GoError> | null): globalThis.Promise<void> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		using __defer = new $.DisposableStack()
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		const __goscriptDeferArg1 = (t$ as http2Client).readerDone
		__defer.defer(() => { __goscriptDeferArg1!.close() })

		{
			let err = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).readServerPreface() : http2Client.prototype.readServerPreface.call(t))
			if (err != null) {
				await $.chanSend(errCh, err)
				return
			}
		}
		errCh!.close()
		if ((t$ as http2Client).keepaliveEnabled) {
			atomic.StoreInt64($.fieldRef((t$ as http2Client)._fields, "lastRead"), $.markAsStructValue($.cloneStructValue(time.Now())).UnixNano())
		}

		// loop to keep reading incoming messages on this transport.
		while (true) {
			await __goscript_controlbuf.controlBuffer.prototype.throttle.call((t$ as http2Client).controlBuf)
			let [frame, err] = await http2.Framer.prototype.ReadFrame.call($.pointerValue<__goscript_http_util.framer>((t$ as http2Client).framer).fr)
			if ((t$ as http2Client).keepaliveEnabled) {
				atomic.StoreInt64($.fieldRef((t$ as http2Client)._fields, "lastRead"), $.markAsStructValue($.cloneStructValue(time.Now())).UnixNano())
			}
			if (err != null) {
				// Abort an active stream if the http2.Framer returns a
				// http2.StreamError. This can happen only if the server's response
				// is malformed http2.
				{
					let [se, ok] = $.typeAssertTuple<http2.StreamError>(err, "http2.StreamError")
					if (ok) {
						await (t$ as http2Client).mu.Lock()
						let s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null = $.mapGet<number, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null>((t$ as http2Client).activeStreams, se.StreamID, null)[0]
						void (t$ as http2Client).mu.Unlock()
						if (s != null) {
							// use error detail to provide better err message
							let code = $.mapGet<http2.ErrCode, codes.Code, codes.Code>(__goscript_http_util.http2ErrConvTab, se.Code, 0)[0]
							let errorDetail = http2.Framer.prototype.ErrorDetail.call($.pointerValue<__goscript_http_util.framer>((t$ as http2Client).framer).fr)
							let msg: string = ""
							if (errorDetail != null) {
								msg = (__goscriptAwait = (errorDetail !== null && (errorDetail as any).__isVarRef !== true && (errorDetail as any).__goValue === undefined ? (errorDetail as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(errorDetail)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							} else {
								msg = "received invalid frame"
							}
							await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).closeStream(s, status2.Error(code, msg), true, 1, status2.New(code, msg), null, false) : http2Client.prototype.closeStream.call(t, s, status2.Error(code, msg), true, 1, status2.New(code, msg), null, false))
						}
						continue
					}
				}
				// Transport error.
				await http2Client.prototype.Close.call(t, $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(true, err, "error reading from server: %v", $.arrayToSlice<any>([(err as any)])), "transport.ConnectionError", "transport.ConnectionError"))
				return
			}
			{
				const __goscriptTypeSwitchValue = frame
				switch (true) {
					case $.typeAssert<http2.MetaHeadersFrame | $.VarRef<http2.MetaHeadersFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")).ok:
						{
							let frame: http2.MetaHeadersFrame | $.VarRef<http2.MetaHeadersFrame> | null = $.typeAssert<http2.MetaHeadersFrame | $.VarRef<http2.MetaHeadersFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")).value
							await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).operateHeaders(frame) : http2Client.prototype.operateHeaders.call(t, frame))
						}
						break
					case $.typeAssert<http2.DataFrame | $.VarRef<http2.DataFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.DataFrame")).ok:
						{
							let frame: http2.DataFrame | $.VarRef<http2.DataFrame> | null = $.typeAssert<http2.DataFrame | $.VarRef<http2.DataFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.DataFrame")).value
							await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).handleData(frame) : http2Client.prototype.handleData.call(t, frame))
						}
						break
					case $.typeAssert<http2.RSTStreamFrame | $.VarRef<http2.RSTStreamFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.RSTStreamFrame")).ok:
						{
							let frame: http2.RSTStreamFrame | $.VarRef<http2.RSTStreamFrame> | null = $.typeAssert<http2.RSTStreamFrame | $.VarRef<http2.RSTStreamFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.RSTStreamFrame")).value
							await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).handleRSTStream(frame) : http2Client.prototype.handleRSTStream.call(t, frame))
						}
						break
					case $.typeAssert<http2.SettingsFrame | $.VarRef<http2.SettingsFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.SettingsFrame")).ok:
						{
							let frame: http2.SettingsFrame | $.VarRef<http2.SettingsFrame> | null = $.typeAssert<http2.SettingsFrame | $.VarRef<http2.SettingsFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.SettingsFrame")).value
							await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).handleSettings(frame, false) : http2Client.prototype.handleSettings.call(t, frame, false))
						}
						break
					case $.typeAssert<http2.PingFrame | $.VarRef<http2.PingFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.PingFrame")).ok:
						{
							let frame: http2.PingFrame | $.VarRef<http2.PingFrame> | null = $.typeAssert<http2.PingFrame | $.VarRef<http2.PingFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.PingFrame")).value
							await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).handlePing(frame) : http2Client.prototype.handlePing.call(t, frame))
						}
						break
					case $.typeAssert<http2.GoAwayFrame | $.VarRef<http2.GoAwayFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.GoAwayFrame")).ok:
						{
							let frame: http2.GoAwayFrame | $.VarRef<http2.GoAwayFrame> | null = $.typeAssert<http2.GoAwayFrame | $.VarRef<http2.GoAwayFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.GoAwayFrame")).value
							await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).handleGoAway(frame) : http2Client.prototype.handleGoAway.call(t, frame))
						}
						break
					case $.typeAssert<http2.WindowUpdateFrame | $.VarRef<http2.WindowUpdateFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.WindowUpdateFrame")).ok:
						{
							let frame: http2.WindowUpdateFrame | $.VarRef<http2.WindowUpdateFrame> | null = $.typeAssert<http2.WindowUpdateFrame | $.VarRef<http2.WindowUpdateFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.WindowUpdateFrame")).value
							await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).handleWindowUpdate(frame) : http2Client.prototype.handleWindowUpdate.call(t, frame))
						}
						break
					default:
						{
							let frame: any = __goscriptTypeSwitchValue
							if ((__goscriptAwait = $.pointerValue<Exclude<grpclog2.DepthLoggerV2, null>>(__goscript_logging.logger).V(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
								void (__goscriptAwait = $.pointerValue<Exclude<grpclog2.DepthLoggerV2, null>>(__goscript_logging.logger).Errorf("transport: http2Client.reader got unhandled frame type %v.", $.arrayToSlice<any>([(frame as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							}
						}
						break
				}
			}
		}
	}

	public async setGoAwayReason(f: http2.GoAwayFrame | $.VarRef<http2.GoAwayFrame> | null): globalThis.Promise<void> {
		let t: http2Client | $.VarRef<http2Client> | null = this;
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		const f$: http2.GoAwayFrame = f == null ? $.pointerTarget<http2.GoAwayFrame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<http2.GoAwayFrame>(f);
		;(t$ as http2Client).goAwayReason = 1
		switch ((f$ as http2.GoAwayFrame).ErrCode) {
			case http2.ErrCodeEnhanceYourCalm:
			{
				if ($.stringEqual($.bytesToString((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as http2.GoAwayFrame).DebugData() : http2.GoAwayFrame.prototype.DebugData.call(f))), "too_many_pings")) {
					;(t$ as http2Client).goAwayReason = 2
				}
				break
			}
		}
		if ($.sliceLen((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as http2.GoAwayFrame).DebugData() : http2.GoAwayFrame.prototype.DebugData.call(f))) == 0) {
			;(t$ as http2Client).goAwayDebugMessage = await fmt.Sprintf("code: %s", $.namedValueInterfaceValue<any>((f$ as http2.GoAwayFrame).ErrCode, "http2.ErrCode", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))
		} else {
			;(t$ as http2Client).goAwayDebugMessage = await fmt.Sprintf("code: %s, debug data: %q", $.namedValueInterfaceValue<any>((f$ as http2.GoAwayFrame).ErrCode, "http2.ErrCode", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), $.bytesToString((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as http2.GoAwayFrame).DebugData() : http2.GoAwayFrame.prototype.DebugData.call(f))))
		}
	}

	public async socketMetrics(): globalThis.Promise<channelz2.EphemeralSocketMetrics | $.VarRef<channelz2.EphemeralSocketMetrics> | null> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		return (await (async () => { const __goscriptLiteralField16 = $.int64(__goscript_flowcontrol.trInFlow.prototype.getSize.call($.pointerValue<http2Client>(t).fc)); const __goscriptLiteralField17 = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).getOutFlowWindow() : http2Client.prototype.getOutFlowWindow.call(t)); return new channelz2.EphemeralSocketMetrics({LocalFlowControlWindow: __goscriptLiteralField16, RemoteFlowControlWindow: __goscriptLiteralField17}) })())
	}

	public async stateForTesting(): globalThis.Promise<__goscript_transport.transportState> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		using __defer = new $.DisposableStack()
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		await (t$ as http2Client).mu.Lock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((t$ as http2Client).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })
		return (t$ as http2Client).state
	}

	public async updateFlowControl(n: number): globalThis.Promise<void> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		const t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
		let updateIWS: (() => boolean | globalThis.Promise<boolean>) | null = $.functionValue(async (): globalThis.Promise<boolean> => {
			;(t$ as http2Client).initialWindowSize = $.int(n, 32)
			await (t$ as http2Client).mu.Lock()
			for (const [__rangeKey, s] of (t$ as http2Client).activeStreams?.entries() ?? []) {
				await __goscript_flowcontrol.inFlow.prototype.newLimit.call($.pointerValue<__goscript_transport.Stream>(s).fc, n)
			}
			void (t$ as http2Client).mu.Unlock()
			return true
		}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
		await __goscript_controlbuf.controlBuffer.prototype.executeAndPut.call((t$ as http2Client).controlBuf, updateIWS, $.interfaceValue<__goscript_controlbuf.cbItem | null>((() => { const __goscriptLiteralField18 = __goscript_flowcontrol.trInFlow.prototype.newLimit.call((t$ as http2Client).fc, n); return new __goscript_controlbuf.outgoingWindowUpdate({streamID: 0, increment: __goscriptLiteralField18}) })(), "*transport.outgoingWindowUpdate", /* @__PURE__ */ $.pointerType("transport.outgoingWindowUpdate")))
		await __goscript_controlbuf.controlBuffer.prototype.put.call((t$ as http2Client).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.outgoingSettings({ss: $.arrayToSlice<http2.Setting>([new http2.Setting({ID: 4, Val: n}, true)])}), "*transport.outgoingSettings", /* @__PURE__ */ $.pointerType("transport.outgoingSettings")))
	}

	public async updateWindow(s: __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null, n: number): globalThis.Promise<void> {
		const t: http2Client | $.VarRef<http2Client> | null = this;
		const s$: __goscript_transport.Stream = s == null ? $.pointerTarget<__goscript_transport.Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_transport.Stream>(s)
		{
			let w = await __goscript_flowcontrol.inFlow.prototype.onRead.call((s$ as __goscript_transport.Stream).fc, n)
			if (w > 0) {
				await __goscript_controlbuf.controlBuffer.prototype.put.call($.pointerValue<http2Client>(t).controlBuf, $.interfaceValue<__goscript_controlbuf.cbItem | null>(new __goscript_controlbuf.outgoingWindowUpdate({streamID: (s$ as __goscript_transport.Stream).id, increment: w}), "*transport.outgoingWindowUpdate", /* @__PURE__ */ $.pointerType("transport.outgoingWindowUpdate")))
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"transport.http2Client",
		() => new http2Client(),
		() => [$.methodSignature("Close", [["err", "error"]], [], true), $.methodSignature("CloseStream", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")], ["err", "error"]], [], true), $.methodSignature("Error", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")], true), $.methodSignature("GetGoAwayReason", [], [/* @__PURE__ */ $.basicType("uint8", "transport.GoAwayReason"), /* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GoAway", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")], true), $.methodSignature("GracefulClose", [], [], true), $.methodSignature("IncrMsgRecv", [], [], true), $.methodSignature("IncrMsgSent", [], [], true), $.methodSignature("NewStream", [["ctx", "context.Context"], ["callHdr", /* @__PURE__ */ $.pointerType("transport.CallHdr")]], [/* @__PURE__ */ $.pointerType("transport.Stream"), "error"], true), $.methodSignature("RemoteAddr", [], ["net.Addr"], true), $.methodSignature("Write", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")], ["hdr", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["data", /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice")], ["opts", /* @__PURE__ */ $.pointerType("transport.Options")]], ["error"], true), $.methodSignature("adjustWindow", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")], ["n", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("closeStream", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")], ["err", "error"], ["rst", /* @__PURE__ */ $.basicType("bool")], ["rstCode", /* @__PURE__ */ $.basicType("uint32", "http2.ErrCode")], ["st", /* @__PURE__ */ $.pointerType("status.Status")], ["mdata", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))], ["eosReceived", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("createAudience", [["callHdr", /* @__PURE__ */ $.pointerType("transport.CallHdr")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("createHeaderFields", [["ctx", "context.Context"], ["callHdr", /* @__PURE__ */ $.pointerType("transport.CallHdr")]], [/* @__PURE__ */ $.sliceType("hpack.HeaderField"), "error"], true), $.methodSignature("getCallAuthData", [["ctx", "context.Context"], ["audience", /* @__PURE__ */ $.basicType("string")], ["callHdr", /* @__PURE__ */ $.pointerType("transport.CallHdr")]], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), "error"], true), $.methodSignature("getOutFlowWindow", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("getPeer", [], [/* @__PURE__ */ $.pointerType("peer.Peer")], true), $.methodSignature("getStream", [["f", "http2.Frame"]], [/* @__PURE__ */ $.pointerType("transport.Stream")], true), $.methodSignature("getTrAuthData", [["ctx", "context.Context"], ["audience", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), "error"], true), $.methodSignature("handleData", [["f", /* @__PURE__ */ $.pointerType("http2.DataFrame")]], [], true), $.methodSignature("handleGoAway", [["f", /* @__PURE__ */ $.pointerType("http2.GoAwayFrame")]], [], true), $.methodSignature("handlePing", [["f", /* @__PURE__ */ $.pointerType("http2.PingFrame")]], [], true), $.methodSignature("handleRSTStream", [["f", /* @__PURE__ */ $.pointerType("http2.RSTStreamFrame")]], [], true), $.methodSignature("handleSettings", [["f", /* @__PURE__ */ $.pointerType("http2.SettingsFrame")], ["isFirst", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("handleWindowUpdate", [["f", /* @__PURE__ */ $.pointerType("http2.WindowUpdateFrame")]], [], true), $.methodSignature("keepalive", [], [], true), $.methodSignature("newStream", [["ctx", "context.Context"], ["callHdr", /* @__PURE__ */ $.pointerType("transport.CallHdr")]], [/* @__PURE__ */ $.pointerType("transport.Stream")], true), $.methodSignature("operateHeaders", [["frame", /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")]], [], true), $.methodSignature("outgoingGoAwayHandler", [["g", /* @__PURE__ */ $.pointerType("transport.goAway")]], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("readServerPreface", [], ["error"], true), $.methodSignature("reader", [["errCh", /* @__PURE__ */ $.channelType("error", "send")]], [], true), $.methodSignature("setGoAwayReason", [["f", /* @__PURE__ */ $.pointerType("http2.GoAwayFrame")]], [], true), $.methodSignature("socketMetrics", [], [/* @__PURE__ */ $.pointerType("channelz.EphemeralSocketMetrics")], true), $.methodSignature("stateForTesting", [], [/* @__PURE__ */ $.basicType("int", "transport.transportState")], true), $.methodSignature("updateFlowControl", [["n", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("updateWindow", [["s", /* @__PURE__ */ $.pointerType("transport.Stream")], ["n", /* @__PURE__ */ $.basicType("uint32")]], [], true)],
		http2Client,
		() => [/* @__PURE__ */ $.structField("lastRead", /* @__PURE__ */ $.basicType("int64"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("ctx", "context.Context", [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("cancel", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), [2], 24, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("ctxDone", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive"), [3], 32, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("userAgent", /* @__PURE__ */ $.basicType("string"), [4], 40, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("address", "resolver.Address", [5], 56, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("md", "metadata.MD", [6], 120, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("conn", "net.Conn", [7], 128, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("loopy", /* @__PURE__ */ $.pointerType("transport.loopyWriter"), [8], 144, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("remoteAddr", "net.Addr", [9], 152, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("localAddr", "net.Addr", [10], 168, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("authInfo", "credentials.AuthInfo", [11], 184, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("readerDone", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [12], 200, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("writerDone", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [13], 208, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("goAway", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [14], 216, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("framer", /* @__PURE__ */ $.pointerType("transport.framer"), [15], 224, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("controlBuf", /* @__PURE__ */ $.pointerType("transport.controlBuffer"), [16], 232, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("fc", /* @__PURE__ */ $.pointerType("transport.trInFlow"), [17], 240, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("scheme", /* @__PURE__ */ $.basicType("string"), [18], 248, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("isSecure", /* @__PURE__ */ $.basicType("bool"), [19], 264, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("perRPCCreds", /* @__PURE__ */ $.sliceType("credentials.PerRPCCredentials"), [20], 272, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("kp", "keepalive.ClientParameters", [21], 296, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("keepaliveEnabled", /* @__PURE__ */ $.basicType("bool"), [22], 320, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("statsHandlers", /* @__PURE__ */ $.sliceType("stats.Handler"), [23], 328, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("initialWindowSize", /* @__PURE__ */ $.basicType("int32"), [24], 352, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("maxSendHeaderListSize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")), [25], 360, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("bdpEst", /* @__PURE__ */ $.pointerType("transport.bdpEstimator"), [26], 368, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("maxConcurrentStreams", /* @__PURE__ */ $.basicType("uint32"), [27], 376, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("streamQuota", /* @__PURE__ */ $.basicType("int64"), [28], 384, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("streamsQuotaAvailable", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [29], 392, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("waitingStreams", /* @__PURE__ */ $.basicType("uint32"), [30], 400, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("registeredCompressors", /* @__PURE__ */ $.basicType("string"), [31], 408, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [32], 424, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("nextID", /* @__PURE__ */ $.basicType("uint32"), [33], 432, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "transport.transportState"), [34], 440, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("activeStreams", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.pointerType("transport.Stream")), [35], 448, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("prevGoAwayID", /* @__PURE__ */ $.basicType("uint32"), [36], 456, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("goAwayReason", /* @__PURE__ */ $.basicType("uint8", "transport.GoAwayReason"), [37], 460, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("goAwayDebugMessage", /* @__PURE__ */ $.basicType("string"), [38], 464, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("kpDormancyCond", /* @__PURE__ */ $.pointerType("sync.Cond"), [39], 480, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("kpDormant", /* @__PURE__ */ $.basicType("bool"), [40], 488, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("channelz", /* @__PURE__ */ $.pointerType("channelz.Socket"), [41], 496, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("onClose", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint8", "transport.GoAwayReason")], results: [] } as $.FunctionTypeInfo), [42], 504, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("bufferPool", "mem.BufferPool", [43], 512, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("connectionID", /* @__PURE__ */ $.basicType("uint64"), [44], 528, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("grpclog.PrefixLogger"), [45], 536, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class NewStreamError {
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public get AllowTransparentRetry(): boolean {
		return this._fields.AllowTransparentRetry
	}

	public set AllowTransparentRetry(value: boolean) {
		this._fields.AllowTransparentRetry = value
	}

	public _fields: {
		Err: $.GoError
		AllowTransparentRetry: boolean
	}

	constructor(init?: Partial<{Err?: $.GoError, AllowTransparentRetry?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Err: init?.Err ?? (null! as $.GoError),
			AllowTransparentRetry: init?.AllowTransparentRetry ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NewStreamError {
		return new NewStreamError(this, true)
	}

	public __goscriptAssign(source: NewStreamError): void {
		const target = this._fields
		const values = source._fields
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
		target.AllowTransparentRetry = values.AllowTransparentRetry
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return $.pointerValue<Exclude<$.GoError, null>>(e.Err).Error()
	}

	static __typeInfo = $.registerStructType(
		"transport.NewStreamError",
		() => new NewStreamError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		NewStreamError,
		() => [/* @__PURE__ */ $.structField("Err", "error", [0], 0, true), /* @__PURE__ */ $.structField("AllowTransparentRetry", /* @__PURE__ */ $.basicType("bool"), [1], 16, true)]
	)
}

export let clientConnectionCounter: $.VarRef<bigint> = $.varRef(0n)

export function __goscript_set_clientConnectionCounter(__goscriptValue: bigint): void {
	clientConnectionCounter.value = __goscriptValue
}

export let goAwayLoopyWriterTimeout: time.Duration = 5000000000n

export function __goscript_set_goAwayLoopyWriterTimeout(__goscriptValue: time.Duration): void {
	goAwayLoopyWriterTimeout = __goscriptValue
}

export let metadataFromOutgoingContextRaw: ((_p0: context.Context | null) => [metadata.MD, $.Slice<$.Slice<string>>, boolean] | globalThis.Promise<[metadata.MD, $.Slice<$.Slice<string>>, boolean]>) | null = $.mustTypeAssert<((_p0: context.Context | null) => [metadata.MD, $.Slice<$.Slice<string>>, boolean] | globalThis.Promise<[metadata.MD, $.Slice<$.Slice<string>>, boolean]>) | null>(internal.FromOutgoingContextRaw, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["metadata.MD", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))), /* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))

export function __goscript_set_metadataFromOutgoingContextRaw(__goscriptValue: ((_p0: context.Context | null) => [metadata.MD, $.Slice<$.Slice<string>>, boolean] | globalThis.Promise<[metadata.MD, $.Slice<$.Slice<string>>, boolean]>) | null): void {
	metadataFromOutgoingContextRaw = __goscriptValue
}

export async function dial(ctx: context.Context | null, fn: ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null, addr: resolver.Address, useProxy: boolean, grpcUA: string): globalThis.Promise<[net.Conn | null, $.GoError]> {
	let address = addr.Addr
	let [networkType, ok] = networktype.Get((addr).clone())
	if (fn != null) {
		// Special handling for unix scheme with custom dialer. Back in the day,
		// we did not have a unix resolver and therefore targets with a unix
		// scheme would end up using the passthrough resolver. So, user's used a
		// custom dialer in this case and expected the original dial target to
		// be passed to the custom dialer. Now, we have a unix resolver. But if
		// a custom dialer is specified, we want to retain the old behavior in
		// terms of the address being passed to the custom dialer.
		if (($.stringEqual(networkType, "unix")) && !strings.HasPrefix(address, "\x00")) {
			// Supported unix targets are either "unix://absolute-path" or
			// "unix:relative-path".
			if (filepath.IsAbs(address)) {
				return fn!(ctx, $.concatString("unix://", address))
			}
			return fn!(ctx, $.concatString("unix:", address))
		}
		return fn!(ctx, address)
	}
	if (!ok) {
		let __goscriptTuple11: any = __goscript_http_util.parseDialTarget(address)
		networkType = __goscriptTuple11[0]
		address = __goscriptTuple11[1]
	}
	if (($.stringEqual(networkType, "tcp")) && useProxy) {
		return __goscript_proxy.proxyDial(ctx, address, grpcUA)
	}
	return net.Dialer.prototype.DialContext.call(internal.NetDialerWithTCPKeepalive(), ctx, networkType, address)
}

export async function isTemporary(err: $.GoError): globalThis.Promise<boolean> {
	{
		const __goscriptTypeSwitchValue = err
		switch (true) {
			case $.typeAssert<any>(__goscriptTypeSwitchValue, { kind: $.TypeKind.Interface, methods: [{ name: "Temporary", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.basicType("bool") }] }] }).ok:
				{
					let err: any = $.typeAssert<any>(__goscriptTypeSwitchValue, { kind: $.TypeKind.Interface, methods: [{ name: "Temporary", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.basicType("bool") }] }] }).value
					return (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as any) : $.pointerValue<any>(err)).Temporary()
				}
				break
			case $.typeAssert<any>(__goscriptTypeSwitchValue, { kind: $.TypeKind.Interface, methods: [{ name: "Timeout", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.basicType("bool") }] }] }).ok:
				{
					let err: any = $.typeAssert<any>(__goscriptTypeSwitchValue, { kind: $.TypeKind.Interface, methods: [{ name: "Timeout", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.basicType("bool") }] }] }).value
					return (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as any) : $.pointerValue<any>(err)).Timeout()
				}
				break
		}
	}
	return true
}

export async function newHTTP2Client(connectCtx: context.Context | null, ctx: context.Context | null, addr: resolver.Address, opts: __goscript_transport.ConnectOptions, onClose: ((_p0: __goscript_transport.GoAwayReason) => void) | null): globalThis.Promise<[http2Client | $.VarRef<http2Client> | null, $.GoError]> {
	let err: $.GoError = null! as $.GoError
	await using __defer = new $.AsyncDisposableStack()
	let scheme = "http"
	let __goscriptTuple12: any = context.WithCancel($.pointerValueOrNil(ctx)!)
	ctx = __goscriptTuple12[0]
	let cancel = __goscriptTuple12[1]
	__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
		if (err != null) {
			void (__goscriptAwait = cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	})() })

	// gRPC, resolver, balancer etc. can specify arbitrary data in the
	// Attributes field of resolver.Address, which is shoved into connectCtx
	// and passed to the dialer and credential handshaker. This makes it possible for
	// address specific arbitrary data to reach custom dialers and credential handshakers.
	connectCtx = icredentials.NewClientHandshakeInfoContext(connectCtx, $.interfaceValue(new credentials.ClientHandshakeInfo({Attributes: addr.Attributes}, true), "credentials.ClientHandshakeInfo", "credentials.ClientHandshakeInfo"))

	let __goscriptTuple13: any = await dial(connectCtx, opts.Dialer, addr, opts.UseProxy, opts.UserAgent)
	let conn = __goscriptTuple13[0]
	err = __goscriptTuple13[1]
	if (err != null) {
		if (opts.FailOnNonTempDialError) {
			const __goscriptReturn5: [http2Client | $.VarRef<http2Client> | null, $.GoError] = [null, $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(await isTemporary(err), err, "transport: error while dialing: %v", $.arrayToSlice<any>([(err as any)])), "transport.ConnectionError", "transport.ConnectionError")]
			err = __goscriptReturn5[1]
			await __defer.dispose()
			return [__goscriptReturn5[0], err]
		}
		const __goscriptReturn6: [http2Client | $.VarRef<http2Client> | null, $.GoError] = [null, $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(true, err, "transport: Error while dialing: %v", $.arrayToSlice<any>([(err as any)])), "transport.ConnectionError", "transport.ConnectionError")]
		err = __goscriptReturn6[1]
		await __defer.dispose()
		return [__goscriptReturn6[0], err]
	}

	// Any further errors will close the underlying connection
	const __goscriptDeferArg2 = conn
	__defer.defer(async () => { await (async (conn: net.Conn | null): globalThis.Promise<void> => {
		if (err != null) {
			void (__goscriptAwait = (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? (conn as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(conn)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	})(__goscriptDeferArg2) })

	// The following defer and goroutine monitor the connectCtx for cancellation
	// and deadline.  On context expiration, the connection is hard closed and
	// this function will naturally fail as a result.  Otherwise, the defer
	// waits for the goroutine to exit to prevent the context from being
	// monitored (and to prevent the connection from ever being closed) after
	// returning from this function.
	let ctxMonitorDone: grpcsync.Event | $.VarRef<grpcsync.Event> | null = grpcsync.NewEvent()
	let [newClientCtx, newClientDone] = context.WithCancel($.pointerValueOrNil(connectCtx)!)
	__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
		void (__goscriptAwait = newClientDone!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await $.chanRecv((ctxMonitorDone !== null && (ctxMonitorDone as any).__isVarRef !== true && (ctxMonitorDone as any).__goValue === undefined ? ((ctxMonitorDone as any) as grpcsync.Event).Done() : grpcsync.Event.prototype.Done.call(ctxMonitorDone)))
	})() })
	const __goscriptDeferArg3 = conn
	queueMicrotask(async () => { await (async (conn: net.Conn | null): globalThis.Promise<void> => {
		await using __defer = new $.AsyncDisposableStack()
		__defer.defer(async () => { await (ctxMonitorDone !== null && (ctxMonitorDone as any).__isVarRef !== true && (ctxMonitorDone as any).__goValue === undefined ? ((ctxMonitorDone as any) as grpcsync.Event).Fire() : grpcsync.Event.prototype.Fire.call(ctxMonitorDone)) })
		await $.chanRecv(((__goscriptAwait = (newClientCtx !== null && (newClientCtx as any).__isVarRef !== true && (newClientCtx as any).__goValue === undefined ? (newClientCtx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(newClientCtx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null))
		{
			let __goscriptShadow3 = (__goscriptAwait = (connectCtx !== null && (connectCtx as any).__isVarRef !== true && (connectCtx as any).__goValue === undefined ? (connectCtx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(connectCtx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow3 != null) {
				// connectCtx expired before exiting the function.  Hard close the connection.
				if ((__goscriptAwait = $.pointerValue<Exclude<grpclog2.DepthLoggerV2, null>>(__goscript_logging.logger).V(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					void (__goscriptAwait = $.pointerValue<Exclude<grpclog2.DepthLoggerV2, null>>(__goscript_logging.logger).Infof("Aborting due to connect deadline expiring: %v", $.arrayToSlice<any>([(__goscriptShadow3 as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				void (__goscriptAwait = (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? (conn as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(conn)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	})(__goscriptDeferArg3) })

	let kp = (opts.KeepaliveParams).clone()
	// Validate keepalive parameters.
	if (kp.Time == 0n) {
		kp.Time = 9223372036854775807n
	}
	if (kp.Timeout == 0n) {
		kp.Timeout = 20000000000n
	}
	let keepaliveEnabled = false
	if (kp.Time != 9223372036854775807n) {
		{
			err = await isyscall.SetTCPUserTimeout(conn, kp.Timeout)
			if (err != null) {
				const __goscriptReturn7: [http2Client | $.VarRef<http2Client> | null, $.GoError] = [null, $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(false, err, "transport: failed to set TCP_USER_TIMEOUT: %v", $.arrayToSlice<any>([(err as any)])), "transport.ConnectionError", "transport.ConnectionError")]
				err = __goscriptReturn7[1]
				await __defer.dispose()
				return [__goscriptReturn7[0], err]
			}
		}
		keepaliveEnabled = true
	}
	let isSecure: boolean = false
	let authInfo: credentials.AuthInfo | null = null! as credentials.AuthInfo | null
	let transportCreds = opts.TransportCredentials
	let perRPCCreds: $.Slice<credentials.PerRPCCredentials | null> = opts.PerRPCCredentials

	{
		let b = opts.CredsBundle
		if (b != null) {
			{
				let t = (__goscriptAwait = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? (b as Exclude<credentials.Bundle, null>) : $.pointerValue<Exclude<credentials.Bundle, null>>(b)).TransportCredentials(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (t != null) {
					transportCreds = t
				}
			}
			{
				let t = (__goscriptAwait = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? (b as Exclude<credentials.Bundle, null>) : $.pointerValue<Exclude<credentials.Bundle, null>>(b)).PerRPCCredentials(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (t != null) {
					perRPCCreds = $.appendOne(perRPCCreds, t, $.appendZeros.nil)
				}
			}
		}
	}
	if (transportCreds != null) {
		let __goscriptTuple14: any = await (transportCreds !== null && (transportCreds as any).__isVarRef !== true && (transportCreds as any).__goValue === undefined ? (transportCreds as Exclude<credentials.TransportCredentials, null>) : $.pointerValue<Exclude<credentials.TransportCredentials, null>>(transportCreds)).ClientHandshake(connectCtx, addr.ServerName, conn)
		conn = __goscriptTuple14[0]
		authInfo = __goscriptTuple14[1]
		err = __goscriptTuple14[2]
		if (err != null) {
			const __goscriptReturn8: [http2Client | $.VarRef<http2Client> | null, $.GoError] = [null, $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(await isTemporary(err), err, "transport: authentication handshake failed: %v", $.arrayToSlice<any>([(err as any)])), "transport.ConnectionError", "transport.ConnectionError")]
			err = __goscriptReturn8[1]
			await __defer.dispose()
			return [__goscriptReturn8[0], err]
		}
		for (let __goscriptRangeTarget12 = perRPCCreds, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
			let cd = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as credentials.PerRPCCredentials | null)
			if ((__goscriptAwait = (cd !== null && (cd as any).__isVarRef !== true && (cd as any).__goValue === undefined ? (cd as Exclude<credentials.PerRPCCredentials, null>) : $.pointerValue<Exclude<credentials.PerRPCCredentials, null>>(cd)).RequireTransportSecurity(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				{
					let [ci, ok] = $.typeAssertTuple<any>(authInfo, { kind: $.TypeKind.Interface, methods: [{ name: "GetCommonAuthInfo", args: [], returns: [{ name: "_r0", type: "credentials.CommonAuthInfo" }] }] })
					if (ok) {
						let secLevel = ((__goscriptAwait = (ci !== null && (ci as any).__isVarRef !== true && (ci as any).__goValue === undefined ? (ci as any) : $.pointerValue<any>(ci)).GetCommonAuthInfo(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as credentials.CommonAuthInfo).SecurityLevel
						if ((secLevel != 0) && (secLevel < 3)) {
							const __goscriptReturn9: [http2Client | $.VarRef<http2Client> | null, $.GoError] = [null, $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(true, null, "transport: cannot send secure credentials on an insecure connection", null), "transport.ConnectionError", "transport.ConnectionError")]
							err = __goscriptReturn9[1]
							await __defer.dispose()
							return [__goscriptReturn9[0], err]
						}
					}
				}
			}
		}
		isSecure = true
		if ($.stringEqual(((__goscriptAwait = (transportCreds !== null && (transportCreds as any).__isVarRef !== true && (transportCreds as any).__goValue === undefined ? (transportCreds as Exclude<credentials.TransportCredentials, null>) : $.pointerValue<Exclude<credentials.TransportCredentials, null>>(transportCreds)).Info(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as credentials.ProtocolInfo).SecurityProtocol, "tls")) {
			scheme = "https"
		}
	}
	let dynamicWindow = true
	let icwz = 65535
	if (opts.InitialConnWindowSize >= 65535) {
		icwz = opts.InitialConnWindowSize
		dynamicWindow = false
	}
	let writeBufSize = opts.WriteBufferSize
	let readBufSize = opts.ReadBufferSize
	let maxHeaderListSize = 16777216
	if (opts.MaxHeaderListSize != null) {
		maxHeaderListSize = $.pointerValue<number>(opts.MaxHeaderListSize)
	}

	let t: http2Client | $.VarRef<http2Client> | null = (await (async () => { const __goscriptLiteralField19 = ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null); const __goscriptLiteralField20 = grpcutil.RegisteredCompressors(); const __goscriptLiteralField21 = (__goscriptAwait = (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? (conn as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(conn)).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField22 = (__goscriptAwait = (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? (conn as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(conn)).LocalAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField23 = await __goscript_http_util.newFramer(conn, writeBufSize, readBufSize, opts.SharedWriteBuffer, maxHeaderListSize); return new http2Client({ctx: ctx, ctxDone: __goscriptLiteralField19, cancel: cancel, userAgent: opts.UserAgent, registeredCompressors: __goscriptLiteralField20, address: addr, conn: conn, remoteAddr: __goscriptLiteralField21, localAddr: __goscriptLiteralField22, authInfo: authInfo, readerDone: $.makeChannel<{}>(0, {}, "both"), writerDone: $.makeChannel<{}>(0, {}, "both"), goAway: $.makeChannel<{}>(0, {}, "both"), framer: __goscriptLiteralField23, fc: new __goscript_flowcontrol.trInFlow({limit: $.uint(icwz, 32)}), scheme: scheme, activeStreams: $.makeMap<number, __goscript_transport.Stream | $.VarRef<__goscript_transport.Stream> | null>(), isSecure: isSecure, perRPCCreds: perRPCCreds, kp: kp, statsHandlers: opts.StatsHandlers, initialWindowSize: 65535, nextID: 1, maxConcurrentStreams: 100, streamQuota: 100n, streamsQuotaAvailable: $.makeChannel<{}>(1, {}, "both"), keepaliveEnabled: keepaliveEnabled, bufferPool: opts.BufferPool, onClose: onClose}) })())
	let t$: http2Client = t == null ? $.pointerTarget<http2Client>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<http2Client>(t)
	let czSecurity: credentials.ChannelzSecurityValue | null = null! as credentials.ChannelzSecurityValue | null
	{
		let [au, ok] = $.typeAssertTuple<credentials.ChannelzSecurityInfo | null>(authInfo, "credentials.ChannelzSecurityInfo")
		if (ok) {
			czSecurity = (__goscriptAwait = (au !== null && (au as any).__isVarRef !== true && (au as any).__goValue === undefined ? (au as Exclude<credentials.ChannelzSecurityInfo, null>) : $.pointerValue<Exclude<credentials.ChannelzSecurityInfo, null>>(au)).GetSecurityValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	;(t$ as http2Client).channelz = await channelz2.RegisterSocket((() => { const __goscriptLiteralField24 = channelz2.GetSocketOption(((t$ as http2Client).conn as any)); return new channelz2.Socket({SocketType: channelz2.SocketTypeNormal, Parent: $.interfaceValue<channelz2.Entity | null>(opts.ChannelzParent, "*channelz.SubChannel", /* @__PURE__ */ $.pointerType("channelz.SubChannel")), SocketMetrics: new channelz2.SocketMetrics(undefined, true), EphemeralMetrics: $.functionValue(((__receiver) => () => __receiver.socketMetrics())((t$ as http2Client)), ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("channelz.EphemeralSocketMetrics")] } as $.FunctionTypeInfo), "google.golang.org/grpc/internal/transport.(*http2Client).socketMetrics-fm"), LocalAddr: (t$ as http2Client).localAddr, RemoteAddr: (t$ as http2Client).remoteAddr, SocketOptions: __goscriptLiteralField24, Security: czSecurity}) })());
	;(t$ as http2Client).logger = await __goscript_logging.prefixLoggerForClientTransport(t);
	// Add peer information to the http2client context.
	;(t$ as http2Client).ctx = peer.NewContext((t$ as http2Client).ctx, (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).getPeer() : http2Client.prototype.getPeer.call(t)))

	{
		let __goscriptTuple15: any = $.typeAssertTuple<$.VarRef<metadata.MD> | null>(addr.Metadata, /* @__PURE__ */ $.pointerType("metadata.MD"))
		let md: $.VarRef<metadata.MD> | null = __goscriptTuple15[0]
		let ok = __goscriptTuple15[1]
		if (ok) {
			;(t$ as http2Client).md = $.pointerValue<metadata.MD>(md)
		} else {
			{
				let __goscriptShadow4: metadata.MD = imetadata.Get(addr)
				if (__goscriptShadow4 != null) {
					;(t$ as http2Client).md = __goscriptShadow4
				}
			}
		}
	}
	;(t$ as http2Client).controlBuf = __goscript_controlbuf.newControlBuffer((t$ as http2Client).ctxDone)
	if (opts.InitialWindowSize >= 65535) {
		;(t$ as http2Client).initialWindowSize = opts.InitialWindowSize
		dynamicWindow = false
	}
	if (dynamicWindow) {
		;(t$ as http2Client).bdpEst = new __goscript_bdp_estimator.bdpEstimator({bdp: 65535, updateFlowControl: $.functionValue(((__receiver) => (n: number) => __receiver.updateFlowControl(n))((t$ as http2Client)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint32")], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc/internal/transport.(*http2Client).updateFlowControl-fm")})
	}
	for (let __goscriptRangeTarget13 = (t$ as http2Client).statsHandlers, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
		let sh = (__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as stats.Handler | null);
		;(t$ as http2Client).ctx = (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).TagConn((t$ as http2Client).ctx, new stats.ConnTagInfo({RemoteAddr: (t$ as http2Client).remoteAddr, LocalAddr: (t$ as http2Client).localAddr})), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let connBegin: stats.ConnBegin | $.VarRef<stats.ConnBegin> | null = new stats.ConnBegin({Client: true})
		void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleConn((t$ as http2Client).ctx, $.interfaceValue<stats.ConnStats | null>(connBegin, "*stats.ConnBegin", /* @__PURE__ */ $.pointerType("stats.ConnBegin"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	if ((t$ as http2Client).keepaliveEnabled) {
		;(t$ as http2Client).kpDormancyCond = sync.NewCond($.pointerValueOrNil($.interfaceValue<sync.Locker | null>($.fieldRef((t$ as http2Client)._fields, "mu"), "*sync.Mutex", /* @__PURE__ */ $.pointerType("sync.Mutex")))!)
		queueMicrotask(async () => { await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).keepalive() : http2Client.prototype.keepalive.call(t)) })
	}

	// Start the reader goroutine for incoming messages. Each transport has a
	// dedicated goroutine which reads HTTP2 frames from the network. Then it
	// dispatches the frame to the corresponding stream entity.  When the
	// server preface is received, readerErrCh is closed.  If an error occurs
	// first, an error is pushed to the channel.  This must be checked before
	// returning from this function.
	let readerErrCh: $.Channel<$.GoError> | null = $.makeChannel<$.GoError>(1, null! as $.GoError, "both")
	const __goscriptDeferArg4 = readerErrCh
	queueMicrotask(async () => { await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).reader(__goscriptDeferArg4) : http2Client.prototype.reader.call(t, __goscriptDeferArg4)) })
	__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
		if (err != null) {
			// writerDone should be closed since the loopy goroutine
			// wouldn't have started in the case this function returns an error.
			void (t$ as http2Client).writerDone!.close()
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as http2Client).Close(err) : http2Client.prototype.Close.call(t, err))
		}
	})() })

	// Send connection preface to server.
	let __goscriptTuple16: any = await $.pointerValue<Exclude<net.Conn, null>>((t$ as http2Client).conn).Write(__goscript_http_util.clientPreface)
	let n = __goscriptTuple16[0]
	err = __goscriptTuple16[1]
	if (err != null) {
		err = $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(true, err, "transport: failed to write client preface: %v", $.arrayToSlice<any>([(err as any)])), "transport.ConnectionError", "transport.ConnectionError")
		const __goscriptReturn10: [http2Client | $.VarRef<http2Client> | null, $.GoError] = [null, err]
		err = __goscriptReturn10[1]
		await __defer.dispose()
		return [__goscriptReturn10[0], err]
	}
	if (n != $.sliceLen(__goscript_http_util.clientPreface)) {
		err = $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(true, null, "transport: preface mismatch, wrote %d bytes; want %d", $.arrayToSlice<any>([$.basicInterfaceValue(n, "int"), $.basicInterfaceValue($.sliceLen(__goscript_http_util.clientPreface), "int")])), "transport.ConnectionError", "transport.ConnectionError")
		const __goscriptReturn11: [http2Client | $.VarRef<http2Client> | null, $.GoError] = [null, err]
		err = __goscriptReturn11[1]
		await __defer.dispose()
		return [__goscriptReturn11[0], err]
	}
	let ss: $.Slice<http2.Setting> = null! as $.Slice<http2.Setting>

	if ((t$ as http2Client).initialWindowSize != 65535) {
		ss = $.appendOne(ss, new http2.Setting({ID: 4, Val: $.uint((t$ as http2Client).initialWindowSize, 32)}, true))
	}
	if (opts.MaxHeaderListSize != null) {
		ss = $.appendOne(ss, new http2.Setting({ID: 6, Val: $.pointerValue<number>(opts.MaxHeaderListSize)}, true))
	}
	err = await http2.Framer.prototype.WriteSettings.call($.pointerValue<__goscript_http_util.framer>((t$ as http2Client).framer).fr, ss)
	if (err != null) {
		err = $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(true, err, "transport: failed to write initial settings frame: %v", $.arrayToSlice<any>([(err as any)])), "transport.ConnectionError", "transport.ConnectionError")
		const __goscriptReturn12: [http2Client | $.VarRef<http2Client> | null, $.GoError] = [null, err]
		err = __goscriptReturn12[1]
		await __defer.dispose()
		return [__goscriptReturn12[0], err]
	}
	// Adjust the connection flow control window if needed.
	{
		let delta = $.uint($.int(((icwz - 65535) | 0), 32), 32)
		if (delta > 0) {
			{
				let __goscriptShadow5 = await http2.Framer.prototype.WriteWindowUpdate.call($.pointerValue<__goscript_http_util.framer>((t$ as http2Client).framer).fr, 0, delta)
				if (__goscriptShadow5 != null) {
					__goscriptShadow5 = $.interfaceValue<$.GoError>(await __goscript_transport.connectionErrorf(true, __goscriptShadow5, "transport: failed to write window update: %v", $.arrayToSlice<any>([(__goscriptShadow5 as any)])), "transport.ConnectionError", "transport.ConnectionError")
					const __goscriptReturn13: [http2Client | $.VarRef<http2Client> | null, $.GoError] = [null, __goscriptShadow5]
					err = __goscriptReturn13[1]
					await __defer.dispose()
					return [__goscriptReturn13[0], err]
				}
			}
		}
	}

	;(t$ as http2Client).connectionID = atomic.AddUint64(clientConnectionCounter, 1n)

	{
		let __goscriptShadow6 = await __goscript_http_util.bufWriter.prototype.Flush.call($.pointerValue<__goscript_http_util.framer>((t$ as http2Client).framer).writer)
		if (__goscriptShadow6 != null) {
			const __goscriptReturn14: [http2Client | $.VarRef<http2Client> | null, $.GoError] = [null, __goscriptShadow6]
			err = __goscriptReturn14[1]
			await __defer.dispose()
			return [__goscriptReturn14[0], err]
		}
	}
	// Block until the server preface is received successfully or an error occurs.
	{
		err = await $.chanRecv(readerErrCh)
		if (err != null) {
			const __goscriptReturn15: [http2Client | $.VarRef<http2Client> | null, $.GoError] = [null, err]
			err = __goscriptReturn15[1]
			await __defer.dispose()
			return [__goscriptReturn15[0], err]
		}
	}
	queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
		;(t$ as http2Client).loopy = await __goscript_controlbuf.newLoopyWriter(0, (t$ as http2Client).framer, (t$ as http2Client).controlBuf, (t$ as http2Client).bdpEst, (t$ as http2Client).conn, (t$ as http2Client).logger, $.functionValue(((__receiver) => (g: __goscript_controlbuf.goAway | $.VarRef<__goscript_controlbuf.goAway> | null) => __receiver.outgoingGoAwayHandler(g))((t$ as http2Client)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("transport.goAway")], results: [/* @__PURE__ */ $.basicType("bool"), "error"] } as $.FunctionTypeInfo), "google.golang.org/grpc/internal/transport.(*http2Client).outgoingGoAwayHandler-fm"), (t$ as http2Client).bufferPool)
		{
			let __goscriptShadow7 = await __goscript_controlbuf.loopyWriter.prototype.run.call((t$ as http2Client).loopy)
			if (!__goscript_http_util.isIOError(__goscriptShadow7)) {
				// Immediately close the connection, as the loopy writer returns
				// when there are no more active streams and we were draining (the
				// server sent a GOAWAY).  For I/O errors, the reader will hit it
				// after draining any remaining incoming data.
				void (__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((t$ as http2Client).conn).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		void (t$ as http2Client).writerDone!.close()
	})() })
	const __goscriptReturn16: [http2Client | $.VarRef<http2Client> | null, $.GoError] = [t, null]
	err = __goscriptReturn16[1]
	await __defer.dispose()
	return [__goscriptReturn16[0], err]
	throw new globalThis.Error("goscript: unreachable return")
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

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({String: (receiver: any, ...args: any[]) => (http2.ErrCode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), stringToken: (receiver: any, ...args: any[]) => (http2.ErrCode_stringToken as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("uint32", "http2.ErrCode"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("stringToken", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
