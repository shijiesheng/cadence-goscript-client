// Generated file based on channel.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as net from "@goscript/net/index.js"

import * as os from "@goscript/os/index.js"

import * as filepath from "@goscript/path/filepath/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as tnet from "@goscript/github.com/uber/tchannel-go/tnet/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as context from "@goscript/golang.org/x/net/context/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as io from "@goscript/io/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as tos from "@goscript/github.com/uber/tchannel-go/tos/index.js"

import * as ipv4 from "@goscript/golang.org/x/net/ipv4/index.js"

import * as ipv6 from "@goscript/golang.org/x/net/ipv6/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as math from "@goscript/math/index.js"

import * as context2 from "@goscript/context/index.js"

import * as relay from "@goscript/github.com/uber/tchannel-go/relay/index.js"

import type * as arg22 from "@goscript/github.com/uber/tchannel-go/thrift/arg2/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as __goscript__arguments from "./arguments.gs.ts"

import * as __goscript_all_channels from "./all_channels.gs.ts"

import * as __goscript_calloptions from "./calloptions.gs.ts"

import * as __goscript_channelstate_string from "./channelstate_string.gs.ts"

import * as __goscript_checksum from "./checksum.gs.ts"

import * as __goscript_connection from "./connection.gs.ts"

import * as __goscript_connection_direction from "./connection_direction.gs.ts"

import * as __goscript_connectionstate_string from "./connectionstate_string.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_dial_17 from "./dial_17.gs.ts"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_fragmenting_reader from "./fragmenting_reader.gs.ts"

import * as __goscript_fragmenting_writer from "./fragmenting_writer.gs.ts"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_frame_pool from "./frame_pool.gs.ts"

import * as __goscript_handlers from "./handlers.gs.ts"

import * as __goscript_health from "./health.gs.ts"

import * as __goscript_idle_sweep from "./idle_sweep.gs.ts"

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

import * as __goscript_root_peer_list from "./root_peer_list.gs.ts"

import * as __goscript_sockio_non_unix from "./sockio_non_unix.gs.ts"

import * as __goscript_stats from "./stats.gs.ts"

import * as __goscript_subchannel from "./subchannel.gs.ts"

import * as __goscript_systemerrcode_string from "./systemerrcode_string.gs.ts"

import * as __goscript_tracing from "./tracing.gs.ts"

import * as __goscript_version from "./version.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/net/index.js"
import "@goscript/os/index.js"
import "@goscript/path/filepath/index.js"
import "@goscript/runtime/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/uber/tchannel-go/tnet/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/io/index.js"
import "@goscript/syscall/index.js"
import "@goscript/github.com/uber/tchannel-go/tos/index.js"
import "@goscript/golang.org/x/net/ipv4/index.js"
import "@goscript/golang.org/x/net/ipv6/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/math/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/uber/tchannel-go/relay/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "@goscript/math/rand/index.js"
import "./arguments.gs.ts"
import "./all_channels.gs.ts"
import "./calloptions.gs.ts"
import "./channelstate_string.gs.ts"
import "./checksum.gs.ts"
import "./connection.gs.ts"
import "./connection_direction.gs.ts"
import "./connectionstate_string.gs.ts"
import "./context.gs.ts"
import "./dial_17.gs.ts"
import "./errors.gs.ts"
import "./fragmenting_reader.gs.ts"
import "./fragmenting_writer.gs.ts"
import "./frame.gs.ts"
import "./frame_pool.gs.ts"
import "./handlers.gs.ts"
import "./health.gs.ts"
import "./idle_sweep.gs.ts"
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
import "./root_peer_list.gs.ts"
import "./sockio_non_unix.gs.ts"
import "./stats.gs.ts"
import "./subchannel.gs.ts"
import "./systemerrcode_string.gs.ts"
import "./tracing.gs.ts"
import "./version.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.ChannelOptions", "tchannel.ChannelState", "tchannel.Channel", "tchannel.channelConnectionCommon", "tchannel.Registrar"])

export type ChannelState = number

$.registerNamedValueType(
	"tchannel.ChannelState",
	{String: (receiver: any, ...args: any[]) => (__goscript_channelstate_string.ChannelState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*tchannel.ChannelState",
	{String: (receiver: any, ...args: any[]) => (__goscript_channelstate_string.ChannelState_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type Registrar = {
	Logger(): __goscript_logger.Logger | null
	Peers(): __goscript_peer.PeerList | $.VarRef<__goscript_peer.PeerList> | null
	Register(h: __goscript_handlers.Handler | null, methodName: string): void
	ServiceName(): string | globalThis.Promise<string>
	StatsReporter(): __goscript_stats.StatsReporter | null
	StatsTags(): globalThis.Map<string, string> | null
}

$.registerInterfaceType(
	"tchannel.Registrar",
	null,
	[$.methodSignature("Logger", [], ["tchannel.Logger"]), $.methodSignature("Peers", [], [/* @__PURE__ */ $.pointerType("tchannel.PeerList")]), $.methodSignature("Register", [["h", "tchannel.Handler"], ["methodName", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("ServiceName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("StatsReporter", [], ["tchannel.StatsReporter"]), $.methodSignature("StatsTags", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))])]
);

export class ChannelOptions {
	// Default Connection options
	public get DefaultConnectionOptions(): __goscript_connection.ConnectionOptions {
		return this._fields.DefaultConnectionOptions
	}

	public set DefaultConnectionOptions(value: __goscript_connection.ConnectionOptions) {
		this._fields.DefaultConnectionOptions = value
	}

	// The name of the process, for logging and reporting to peers
	public get ProcessName(): string {
		return this._fields.ProcessName
	}

	public set ProcessName(value: string) {
		this._fields.ProcessName = value
	}

	// OnPeerStatusChanged is an optional callback that receives a notification
	// whenever the channel establishes a usable connection to a peer, or loses
	// a connection to a peer.
	public get OnPeerStatusChanged(): ((_p0: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null) => void) | null {
		return this._fields.OnPeerStatusChanged
	}

	public set OnPeerStatusChanged(value: ((_p0: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null) => void) | null) {
		this._fields.OnPeerStatusChanged = value
	}

	// The logger to use for this channel
	public get Logger(): __goscript_logger.Logger | null {
		return this._fields.Logger
	}

	public set Logger(value: __goscript_logger.Logger | null) {
		this._fields.Logger = value
	}

	// The host:port selection implementation to use for relaying. This is an
	// unstable API - breaking changes are likely.
	public get RelayHost(): __goscript_relay_api.RelayHost | null {
		return this._fields.RelayHost
	}

	public set RelayHost(value: __goscript_relay_api.RelayHost | null) {
		this._fields.RelayHost = value
	}

	// The list of service names that should be handled locally by this channel.
	// This is an unstable API - breaking changes are likely.
	public get RelayLocalHandlers(): $.Slice<string> {
		return this._fields.RelayLocalHandlers
	}

	public set RelayLocalHandlers(value: $.Slice<string>) {
		this._fields.RelayLocalHandlers = value
	}

	// The maximum allowable timeout for relayed calls (longer timeouts are
	// clamped to this value). Passing zero uses the default of 2m.
	// This is an unstable API - breaking changes are likely.
	public get RelayMaxTimeout(): time.Duration {
		return this._fields.RelayMaxTimeout
	}

	public set RelayMaxTimeout(value: time.Duration) {
		this._fields.RelayMaxTimeout = value
	}

	// If the relay needs to connect while processing a frame, this specifies
	// the max connection timeout used.
	public get RelayMaxConnectionTimeout(): time.Duration {
		return this._fields.RelayMaxConnectionTimeout
	}

	public set RelayMaxConnectionTimeout(value: time.Duration) {
		this._fields.RelayMaxConnectionTimeout = value
	}

	// RelayMaxTombs is the maximum number of timed-out calls that the relay
	// will keep track of per-connection to avoid spurious logs
	// for late-arriving frames.
	// This is an unstable API - breaking changes are likely.
	public get RelayMaxTombs(): bigint {
		return this._fields.RelayMaxTombs
	}

	public set RelayMaxTombs(value: bigint) {
		this._fields.RelayMaxTombs = value
	}

	// RelayTimerVerification will disable pooling of relay timers, and instead
	// verify that timers are not used once they are released.
	// This is an unstable API - breaking changes are likely.
	public get RelayTimerVerification(): boolean {
		return this._fields.RelayTimerVerification
	}

	public set RelayTimerVerification(value: boolean) {
		this._fields.RelayTimerVerification = value
	}

	// The reporter to use for reporting stats for this channel.
	public get StatsReporter(): __goscript_stats.StatsReporter | null {
		return this._fields.StatsReporter
	}

	public set StatsReporter(value: __goscript_stats.StatsReporter | null) {
		this._fields.StatsReporter = value
	}

	// TimeNow is a variable for overriding time.Now in unit tests.
	// Note: This is not a stable part of the API and may change.
	public get TimeNow(): (() => time.Time | globalThis.Promise<time.Time>) | null {
		return this._fields.TimeNow
	}

	public set TimeNow(value: (() => time.Time | globalThis.Promise<time.Time>) | null) {
		this._fields.TimeNow = value
	}

	// TimeTicker is a variable for overriding time.Ticker in unit tests.
	// Note: This is not a stable part of the API and may change.
	public get TimeTicker(): ((d: time.Duration) => time.Ticker | $.VarRef<time.Ticker> | null | globalThis.Promise<time.Ticker | $.VarRef<time.Ticker> | null>) | null {
		return this._fields.TimeTicker
	}

	public set TimeTicker(value: ((d: time.Duration) => time.Ticker | $.VarRef<time.Ticker> | null | globalThis.Promise<time.Ticker | $.VarRef<time.Ticker> | null>) | null) {
		this._fields.TimeTicker = value
	}

	// MaxIdleTime controls how long we allow an idle connection to exist
	// before tearing it down. Must be set to non-zero if IdleCheckInterval
	// is set.
	public get MaxIdleTime(): time.Duration {
		return this._fields.MaxIdleTime
	}

	public set MaxIdleTime(value: time.Duration) {
		this._fields.MaxIdleTime = value
	}

	// IdleCheckInterval controls how often the channel runs a sweep over
	// all active connections to see if they can be dropped. Connections that
	// are idle for longer than MaxIdleTime are disconnected. If this is set to
	// zero (the default), idle checking is disabled.
	public get IdleCheckInterval(): time.Duration {
		return this._fields.IdleCheckInterval
	}

	public set IdleCheckInterval(value: time.Duration) {
		this._fields.IdleCheckInterval = value
	}

	// Tracer is an OpenTracing Tracer used to manage distributed tracing spans.
	// If not set, opentracing.GlobalTracer() is used.
	public get Tracer(): opentracing.Tracer | null {
		return this._fields.Tracer
	}

	public set Tracer(value: opentracing.Tracer | null) {
		this._fields.Tracer = value
	}

	// Handler is an alternate handler for all inbound requests, overriding the
	// default handler that delegates to a subchannel.
	public get Handler(): __goscript_handlers.Handler | null {
		return this._fields.Handler
	}

	public set Handler(value: __goscript_handlers.Handler | null) {
		this._fields.Handler = value
	}

	// SkipHandlerMethods allow users to configure TChannel server such that
	// requests with specified methods can be ignored by the above passed-in handler
	// and handled natively by TChannel.
	// Requests with other methods will be handled by passed-in handler.
	// Methods should be in the format of Service::Method.
	// This is useful for the gradual migration purpose.
	public get SkipHandlerMethods(): $.Slice<string> {
		return this._fields.SkipHandlerMethods
	}

	public set SkipHandlerMethods(value: $.Slice<string>) {
		this._fields.SkipHandlerMethods = value
	}

	// Dialer is optional factory method which can be used for overriding
	// outbound connections for things like TLS handshake
	public get Dialer(): ((ctx: context.Context | null, network: string, hostPort: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null {
		return this._fields.Dialer
	}

	public set Dialer(value: ((ctx: context.Context | null, network: string, hostPort: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null) {
		this._fields.Dialer = value
	}

	// ConnContext runs when a connection is established, which updates
	// the per-connection base context. This context is used as the parent context
	// for incoming calls.
	public get ConnContext(): ((ctx: context.Context | null, conn: net.Conn | null) => context.Context | null | globalThis.Promise<context.Context | null>) | null {
		return this._fields.ConnContext
	}

	public set ConnContext(value: ((ctx: context.Context | null, conn: net.Conn | null) => context.Context | null | globalThis.Promise<context.Context | null>) | null) {
		this._fields.ConnContext = value
	}

	public _fields: {
		DefaultConnectionOptions: __goscript_connection.ConnectionOptions
		ProcessName: string
		OnPeerStatusChanged: ((_p0: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null) => void) | null
		Logger: __goscript_logger.Logger | null
		RelayHost: __goscript_relay_api.RelayHost | null
		RelayLocalHandlers: $.Slice<string>
		RelayMaxTimeout: time.Duration
		RelayMaxConnectionTimeout: time.Duration
		RelayMaxTombs: bigint
		RelayTimerVerification: boolean
		StatsReporter: __goscript_stats.StatsReporter | null
		TimeNow: (() => time.Time | globalThis.Promise<time.Time>) | null
		TimeTicker: ((d: time.Duration) => time.Ticker | $.VarRef<time.Ticker> | null | globalThis.Promise<time.Ticker | $.VarRef<time.Ticker> | null>) | null
		MaxIdleTime: time.Duration
		IdleCheckInterval: time.Duration
		Tracer: opentracing.Tracer | null
		Handler: __goscript_handlers.Handler | null
		SkipHandlerMethods: $.Slice<string>
		Dialer: ((ctx: context.Context | null, network: string, hostPort: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null
		ConnContext: ((ctx: context.Context | null, conn: net.Conn | null) => context.Context | null | globalThis.Promise<context.Context | null>) | null
	}

	constructor(init?: Partial<{DefaultConnectionOptions?: __goscript_connection.ConnectionOptions, ProcessName?: string, OnPeerStatusChanged?: ((_p0: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null) => void) | null, Logger?: __goscript_logger.Logger | null, RelayHost?: __goscript_relay_api.RelayHost | null, RelayLocalHandlers?: $.Slice<string>, RelayMaxTimeout?: time.Duration, RelayMaxConnectionTimeout?: time.Duration, RelayMaxTombs?: bigint, RelayTimerVerification?: boolean, StatsReporter?: __goscript_stats.StatsReporter | null, TimeNow?: (() => time.Time | globalThis.Promise<time.Time>) | null, TimeTicker?: ((d: time.Duration) => time.Ticker | $.VarRef<time.Ticker> | null | globalThis.Promise<time.Ticker | $.VarRef<time.Ticker> | null>) | null, MaxIdleTime?: time.Duration, IdleCheckInterval?: time.Duration, Tracer?: opentracing.Tracer | null, Handler?: __goscript_handlers.Handler | null, SkipHandlerMethods?: $.Slice<string>, Dialer?: ((ctx: context.Context | null, network: string, hostPort: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null, ConnContext?: ((ctx: context.Context | null, conn: net.Conn | null) => context.Context | null | globalThis.Promise<context.Context | null>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			DefaultConnectionOptions: init?.DefaultConnectionOptions ? init.DefaultConnectionOptions.clone() : new __goscript_connection.ConnectionOptions(undefined, true),
			ProcessName: init?.ProcessName ?? ("" as string),
			OnPeerStatusChanged: init?.OnPeerStatusChanged ?? (null! as ((_p0: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null) => void) | null),
			Logger: init?.Logger ?? (null! as __goscript_logger.Logger | null),
			RelayHost: init?.RelayHost ?? (null! as __goscript_relay_api.RelayHost | null),
			RelayLocalHandlers: init?.RelayLocalHandlers ?? (null! as $.Slice<string>),
			RelayMaxTimeout: init?.RelayMaxTimeout ?? (0n as time.Duration),
			RelayMaxConnectionTimeout: init?.RelayMaxConnectionTimeout ?? (0n as time.Duration),
			RelayMaxTombs: init?.RelayMaxTombs ?? (0n as bigint),
			RelayTimerVerification: init?.RelayTimerVerification ?? (false as boolean),
			StatsReporter: init?.StatsReporter ?? (null! as __goscript_stats.StatsReporter | null),
			TimeNow: init?.TimeNow ?? (null! as (() => time.Time | globalThis.Promise<time.Time>) | null),
			TimeTicker: init?.TimeTicker ?? (null! as ((d: time.Duration) => time.Ticker | $.VarRef<time.Ticker> | null | globalThis.Promise<time.Ticker | $.VarRef<time.Ticker> | null>) | null),
			MaxIdleTime: init?.MaxIdleTime ?? (0n as time.Duration),
			IdleCheckInterval: init?.IdleCheckInterval ?? (0n as time.Duration),
			Tracer: init?.Tracer ?? (null! as opentracing.Tracer | null),
			Handler: init?.Handler ?? (null! as __goscript_handlers.Handler | null),
			SkipHandlerMethods: init?.SkipHandlerMethods ?? (null! as $.Slice<string>),
			Dialer: init?.Dialer ?? (null! as ((ctx: context.Context | null, network: string, hostPort: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null),
			ConnContext: init?.ConnContext ?? (null! as ((ctx: context.Context | null, conn: net.Conn | null) => context.Context | null | globalThis.Promise<context.Context | null>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ChannelOptions {
		return new ChannelOptions(this, true)
	}

	public __goscriptAssign(source: ChannelOptions): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.DefaultConnectionOptions, values.DefaultConnectionOptions)
		target.ProcessName = values.ProcessName
		target.OnPeerStatusChanged = values.OnPeerStatusChanged
		target.Logger = $.assignFieldValue(target.Logger, values.Logger, "tchannel.Logger")
		target.RelayHost = $.assignFieldValue(target.RelayHost, values.RelayHost, "tchannel.RelayHost")
		target.RelayLocalHandlers = values.RelayLocalHandlers
		target.RelayMaxTimeout = values.RelayMaxTimeout
		target.RelayMaxConnectionTimeout = values.RelayMaxConnectionTimeout
		target.RelayMaxTombs = values.RelayMaxTombs
		target.RelayTimerVerification = values.RelayTimerVerification
		target.StatsReporter = $.assignFieldValue(target.StatsReporter, values.StatsReporter, "tchannel.StatsReporter")
		target.TimeNow = values.TimeNow
		target.TimeTicker = values.TimeTicker
		target.MaxIdleTime = values.MaxIdleTime
		target.IdleCheckInterval = values.IdleCheckInterval
		target.Tracer = $.assignFieldValue(target.Tracer, values.Tracer, "opentracing.Tracer")
		target.Handler = $.assignFieldValue(target.Handler, values.Handler, "tchannel.Handler")
		target.SkipHandlerMethods = values.SkipHandlerMethods
		target.Dialer = values.Dialer
		target.ConnContext = values.ConnContext
	}

	public validateIdleCheck(): $.GoError {
		const o: ChannelOptions | $.VarRef<ChannelOptions> | null = this;
		const o$: ChannelOptions = o == null ? $.pointerTarget<ChannelOptions>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<ChannelOptions>(o)
		if (((o$ as ChannelOptions).IdleCheckInterval > 0n) && ((o$ as ChannelOptions).MaxIdleTime <= 0n)) {
			return errMaxIdleTimeNotSet
		}

		return null
	}

	static __typeInfo = $.registerStructType(
		"tchannel.ChannelOptions",
		() => new ChannelOptions(),
		() => [$.methodSignature("validateIdleCheck", [], ["error"], true)],
		ChannelOptions,
		() => [/* @__PURE__ */ $.structField("DefaultConnectionOptions", "tchannel.ConnectionOptions", [0], 0, true), /* @__PURE__ */ $.structField("ProcessName", /* @__PURE__ */ $.basicType("string"), [1], 104, true), /* @__PURE__ */ $.structField("OnPeerStatusChanged", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Peer")], results: [] } as $.FunctionTypeInfo), [2], 120, true), /* @__PURE__ */ $.structField("Logger", "tchannel.Logger", [3], 128, true), /* @__PURE__ */ $.structField("RelayHost", "tchannel.RelayHost", [4], 144, true), /* @__PURE__ */ $.structField("RelayLocalHandlers", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [5], 160, true), /* @__PURE__ */ $.structField("RelayMaxTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [6], 184, true), /* @__PURE__ */ $.structField("RelayMaxConnectionTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [7], 192, true), /* @__PURE__ */ $.structField("RelayMaxTombs", /* @__PURE__ */ $.basicType("uint64"), [8], 200, true), /* @__PURE__ */ $.structField("RelayTimerVerification", /* @__PURE__ */ $.basicType("bool"), [9], 208, true), /* @__PURE__ */ $.structField("StatsReporter", "tchannel.StatsReporter", [10], 216, true), /* @__PURE__ */ $.structField("TimeNow", ({ kind: $.TypeKind.Function, params: [], results: ["time.Time"] } as $.FunctionTypeInfo), [11], 232, true), /* @__PURE__ */ $.structField("TimeTicker", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int64", "time.Duration")], results: [/* @__PURE__ */ $.pointerType("time.Ticker")] } as $.FunctionTypeInfo), [12], 240, true), /* @__PURE__ */ $.structField("MaxIdleTime", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [13], 248, true), /* @__PURE__ */ $.structField("IdleCheckInterval", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [14], 256, true), /* @__PURE__ */ $.structField("Tracer", "opentracing.Tracer", [15], 264, true), /* @__PURE__ */ $.structField("Handler", "tchannel.Handler", [16], 280, true), /* @__PURE__ */ $.structField("SkipHandlerMethods", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [17], 296, true), /* @__PURE__ */ $.structField("Dialer", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["net.Conn", "error"] } as $.FunctionTypeInfo), [18], 320, true), /* @__PURE__ */ $.structField("ConnContext", ({ kind: $.TypeKind.Function, params: ["context.Context", "net.Conn"], results: ["context.Context"] } as $.FunctionTypeInfo), [19], 328, true)]
	)
}

export class channelConnectionCommon {
	public get log(): __goscript_logger.Logger | null {
		return this._fields.log
	}

	public set log(value: __goscript_logger.Logger | null) {
		this._fields.log = value
	}

	public get relayLocal(): globalThis.Map<string, {}> | null {
		return this._fields.relayLocal
	}

	public set relayLocal(value: globalThis.Map<string, {}> | null) {
		this._fields.relayLocal = value
	}

	public get statsReporter(): __goscript_stats.StatsReporter | null {
		return this._fields.statsReporter
	}

	public set statsReporter(value: __goscript_stats.StatsReporter | null) {
		this._fields.statsReporter = value
	}

	public get tracer(): opentracing.Tracer | null {
		return this._fields.tracer
	}

	public set tracer(value: opentracing.Tracer | null) {
		this._fields.tracer = value
	}

	public get subChannels(): __goscript_subchannel.subChannelMap | $.VarRef<__goscript_subchannel.subChannelMap> | null {
		return this._fields.subChannels
	}

	public set subChannels(value: __goscript_subchannel.subChannelMap | $.VarRef<__goscript_subchannel.subChannelMap> | null) {
		this._fields.subChannels = value
	}

	public get timeNow(): (() => time.Time | globalThis.Promise<time.Time>) | null {
		return this._fields.timeNow
	}

	public set timeNow(value: (() => time.Time | globalThis.Promise<time.Time>) | null) {
		this._fields.timeNow = value
	}

	public get timeTicker(): ((_p0: time.Duration) => time.Ticker | $.VarRef<time.Ticker> | null | globalThis.Promise<time.Ticker | $.VarRef<time.Ticker> | null>) | null {
		return this._fields.timeTicker
	}

	public set timeTicker(value: ((_p0: time.Duration) => time.Ticker | $.VarRef<time.Ticker> | null | globalThis.Promise<time.Ticker | $.VarRef<time.Ticker> | null>) | null) {
		this._fields.timeTicker = value
	}

	public _fields: {
		log: __goscript_logger.Logger | null
		relayLocal: globalThis.Map<string, {}> | null
		statsReporter: __goscript_stats.StatsReporter | null
		tracer: opentracing.Tracer | null
		subChannels: __goscript_subchannel.subChannelMap | $.VarRef<__goscript_subchannel.subChannelMap> | null
		timeNow: (() => time.Time | globalThis.Promise<time.Time>) | null
		timeTicker: ((_p0: time.Duration) => time.Ticker | $.VarRef<time.Ticker> | null | globalThis.Promise<time.Ticker | $.VarRef<time.Ticker> | null>) | null
	}

	constructor(init?: Partial<{log?: __goscript_logger.Logger | null, relayLocal?: globalThis.Map<string, {}> | null, statsReporter?: __goscript_stats.StatsReporter | null, tracer?: opentracing.Tracer | null, subChannels?: __goscript_subchannel.subChannelMap | $.VarRef<__goscript_subchannel.subChannelMap> | null, timeNow?: (() => time.Time | globalThis.Promise<time.Time>) | null, timeTicker?: ((_p0: time.Duration) => time.Ticker | $.VarRef<time.Ticker> | null | globalThis.Promise<time.Ticker | $.VarRef<time.Ticker> | null>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			log: init?.log ?? (null! as __goscript_logger.Logger | null),
			relayLocal: init?.relayLocal ?? (null! as globalThis.Map<string, {}> | null),
			statsReporter: init?.statsReporter ?? (null! as __goscript_stats.StatsReporter | null),
			tracer: init?.tracer ?? (null! as opentracing.Tracer | null),
			subChannels: init?.subChannels ?? (null! as __goscript_subchannel.subChannelMap | $.VarRef<__goscript_subchannel.subChannelMap> | null),
			timeNow: init?.timeNow ?? (null! as (() => time.Time | globalThis.Promise<time.Time>) | null),
			timeTicker: init?.timeTicker ?? (null! as ((_p0: time.Duration) => time.Ticker | $.VarRef<time.Ticker> | null | globalThis.Promise<time.Ticker | $.VarRef<time.Ticker> | null>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): channelConnectionCommon {
		return new channelConnectionCommon(this, true)
	}

	public __goscriptAssign(source: channelConnectionCommon): void {
		const target = this._fields
		const values = source._fields
		target.log = $.assignFieldValue(target.log, values.log, "tchannel.Logger")
		target.relayLocal = values.relayLocal
		target.statsReporter = $.assignFieldValue(target.statsReporter, values.statsReporter, "tchannel.StatsReporter")
		target.tracer = $.assignFieldValue(target.tracer, values.tracer, "opentracing.Tracer")
		target.subChannels = values.subChannels
		target.timeNow = values.timeNow
		target.timeTicker = values.timeTicker
	}

	public Tracer(): opentracing.Tracer | null {
		const ccc = this;
		if (ccc.tracer != null) {
			return ccc.tracer
		}
		return opentracing.GlobalTracer()
	}

	static __typeInfo = $.registerStructType(
		"tchannel.channelConnectionCommon",
		() => new channelConnectionCommon(),
		() => [$.methodSignature("Tracer", [], ["opentracing.Tracer"])],
		channelConnectionCommon,
		() => [/* @__PURE__ */ $.structField("log", "tchannel.Logger", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("relayLocal", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [1], 16, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("statsReporter", "tchannel.StatsReporter", [2], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("tracer", "opentracing.Tracer", [3], 40, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("subChannels", /* @__PURE__ */ $.pointerType("tchannel.subChannelMap"), [4], 56, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("timeNow", ({ kind: $.TypeKind.Function, params: [], results: ["time.Time"] } as $.FunctionTypeInfo), [5], 64, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("timeTicker", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int64", "time.Duration")], results: [/* @__PURE__ */ $.pointerType("time.Ticker")] } as $.FunctionTypeInfo), [6], 72, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class Channel {
	public get channelConnectionCommon(): channelConnectionCommon {
		return this._fields.channelConnectionCommon
	}

	public set channelConnectionCommon(value: channelConnectionCommon) {
		this._fields.channelConnectionCommon = value
	}

	public get chID(): number {
		return this._fields.chID
	}

	public set chID(value: number) {
		this._fields.chID = value
	}

	public get createdStack(): string {
		return this._fields.createdStack
	}

	public set createdStack(value: string) {
		this._fields.createdStack = value
	}

	public get commonStatsTags(): globalThis.Map<string, string> | null {
		return this._fields.commonStatsTags
	}

	public set commonStatsTags(value: globalThis.Map<string, string> | null) {
		this._fields.commonStatsTags = value
	}

	public get connectionOptions(): __goscript_connection.ConnectionOptions {
		return this._fields.connectionOptions
	}

	public set connectionOptions(value: __goscript_connection.ConnectionOptions) {
		this._fields.connectionOptions = value
	}

	public get peers(): __goscript_peer.PeerList | $.VarRef<__goscript_peer.PeerList> | null {
		return this._fields.peers
	}

	public set peers(value: __goscript_peer.PeerList | $.VarRef<__goscript_peer.PeerList> | null) {
		this._fields.peers = value
	}

	public get relayHost(): __goscript_relay_api.RelayHost | null {
		return this._fields.relayHost
	}

	public set relayHost(value: __goscript_relay_api.RelayHost | null) {
		this._fields.relayHost = value
	}

	public get relayMaxTimeout(): time.Duration {
		return this._fields.relayMaxTimeout
	}

	public set relayMaxTimeout(value: time.Duration) {
		this._fields.relayMaxTimeout = value
	}

	public get relayMaxConnTimeout(): time.Duration {
		return this._fields.relayMaxConnTimeout
	}

	public set relayMaxConnTimeout(value: time.Duration) {
		this._fields.relayMaxConnTimeout = value
	}

	public get relayMaxTombs(): bigint {
		return this._fields.relayMaxTombs
	}

	public set relayMaxTombs(value: bigint) {
		this._fields.relayMaxTombs = value
	}

	public get relayTimerVerify(): boolean {
		return this._fields.relayTimerVerify
	}

	public set relayTimerVerify(value: boolean) {
		this._fields.relayTimerVerify = value
	}

	public get internalHandlers(): __goscript_handlers.handlerMap | $.VarRef<__goscript_handlers.handlerMap> | null {
		return this._fields.internalHandlers
	}

	public set internalHandlers(value: __goscript_handlers.handlerMap | $.VarRef<__goscript_handlers.handlerMap> | null) {
		this._fields.internalHandlers = value
	}

	public get handler(): __goscript_handlers.Handler | null {
		return this._fields.handler
	}

	public set handler(value: __goscript_handlers.Handler | null) {
		this._fields.handler = value
	}

	public get onPeerStatusChanged(): ((_p0: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null) => void) | null {
		return this._fields.onPeerStatusChanged
	}

	public set onPeerStatusChanged(value: ((_p0: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null) => void) | null) {
		this._fields.onPeerStatusChanged = value
	}

	public get dialer(): ((ctx: context.Context | null, hostPort: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null {
		return this._fields.dialer
	}

	public set dialer(value: ((ctx: context.Context | null, hostPort: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null) {
		this._fields.dialer = value
	}

	public get connContext(): ((ctx: context.Context | null, conn: net.Conn | null) => context.Context | null | globalThis.Promise<context.Context | null>) | null {
		return this._fields.connContext
	}

	public set connContext(value: ((ctx: context.Context | null, conn: net.Conn | null) => context.Context | null | globalThis.Promise<context.Context | null>) | null) {
		this._fields.connContext = value
	}

	public get closed(): $.Channel<{}> | null {
		return this._fields.closed
	}

	public set closed(value: $.Channel<{}> | null) {
		this._fields.closed = value
	}

	// mutable contains all the members of Channel which are mutable.
	public get mutable(): {"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null} {
		return this._fields.mutable
	}

	public set mutable(value: {"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null}) {
		this._fields.mutable = value
	}

	public _fields: {
		channelConnectionCommon: channelConnectionCommon
		chID: number
		createdStack: string
		commonStatsTags: globalThis.Map<string, string> | null
		connectionOptions: __goscript_connection.ConnectionOptions
		peers: __goscript_peer.PeerList | $.VarRef<__goscript_peer.PeerList> | null
		relayHost: __goscript_relay_api.RelayHost | null
		relayMaxTimeout: time.Duration
		relayMaxConnTimeout: time.Duration
		relayMaxTombs: bigint
		relayTimerVerify: boolean
		internalHandlers: __goscript_handlers.handlerMap | $.VarRef<__goscript_handlers.handlerMap> | null
		handler: __goscript_handlers.Handler | null
		onPeerStatusChanged: ((_p0: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null) => void) | null
		dialer: ((ctx: context.Context | null, hostPort: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null
		connContext: ((ctx: context.Context | null, conn: net.Conn | null) => context.Context | null | globalThis.Promise<context.Context | null>) | null
		closed: $.Channel<{}> | null
		mutable: {"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null}
	}

	constructor(init?: Partial<{channelConnectionCommon?: channelConnectionCommon, chID?: number, createdStack?: string, commonStatsTags?: globalThis.Map<string, string> | null, connectionOptions?: __goscript_connection.ConnectionOptions, peers?: __goscript_peer.PeerList | $.VarRef<__goscript_peer.PeerList> | null, relayHost?: __goscript_relay_api.RelayHost | null, relayMaxTimeout?: time.Duration, relayMaxConnTimeout?: time.Duration, relayMaxTombs?: bigint, relayTimerVerify?: boolean, internalHandlers?: __goscript_handlers.handlerMap | $.VarRef<__goscript_handlers.handlerMap> | null, handler?: __goscript_handlers.Handler | null, onPeerStatusChanged?: ((_p0: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null) => void) | null, dialer?: ((ctx: context.Context | null, hostPort: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null, connContext?: ((ctx: context.Context | null, conn: net.Conn | null) => context.Context | null | globalThis.Promise<context.Context | null>) | null, closed?: $.Channel<{}> | null, mutable?: {"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null}}>, __goscriptValue?: boolean) {
		this._fields = {
			channelConnectionCommon: init?.channelConnectionCommon ? init.channelConnectionCommon.clone() : new channelConnectionCommon(undefined, true),
			chID: init?.chID ?? (0 as number),
			createdStack: init?.createdStack ?? ("" as string),
			commonStatsTags: init?.commonStatsTags ?? (null! as globalThis.Map<string, string> | null),
			connectionOptions: init?.connectionOptions ? init.connectionOptions.clone() : new __goscript_connection.ConnectionOptions(undefined, true),
			peers: init?.peers ?? (null! as __goscript_peer.PeerList | $.VarRef<__goscript_peer.PeerList> | null),
			relayHost: init?.relayHost ?? (null! as __goscript_relay_api.RelayHost | null),
			relayMaxTimeout: init?.relayMaxTimeout ?? (0n as time.Duration),
			relayMaxConnTimeout: init?.relayMaxConnTimeout ?? (0n as time.Duration),
			relayMaxTombs: init?.relayMaxTombs ?? (0n as bigint),
			relayTimerVerify: init?.relayTimerVerify ?? (false as boolean),
			internalHandlers: init?.internalHandlers ?? (null! as __goscript_handlers.handlerMap | $.VarRef<__goscript_handlers.handlerMap> | null),
			handler: init?.handler ?? (null! as __goscript_handlers.Handler | null),
			onPeerStatusChanged: init?.onPeerStatusChanged ?? (null! as ((_p0: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null) => void) | null),
			dialer: init?.dialer ?? (null! as ((ctx: context.Context | null, hostPort: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null),
			connContext: init?.connContext ?? (null! as ((ctx: context.Context | null, conn: net.Conn | null) => context.Context | null | globalThis.Promise<context.Context | null>) | null),
			closed: init?.closed ?? (null! as $.Channel<{}> | null),
			mutable: init?.mutable ? $.markAsStructValue($.cloneStructValue(init.mutable)) : $.anonymousStructValue({"RWMutex": $.markAsStructValue(new sync.RWMutex()), "state": 0, "peerInfo": new __goscript_connection.LocalPeerInfo(undefined, true), "l": null, "idleSweep": null, "conns": null}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("RWMutex", "sync.RWMutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "tchannel.ChannelState"), [1], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("peerInfo", "tchannel.LocalPeerInfo", [2], 32, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("l", "net.Listener", [3], 136, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("idleSweep", /* @__PURE__ */ $.pointerType("tchannel.idleSweep"), [4], 152, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("conns", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.pointerType("tchannel.Connection")), [5], 160, false, { pkgPath: "github.com/uber/tchannel-go" })] })
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Channel {
		return new Channel(this, true)
	}

	public __goscriptAssign(source: Channel): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.channelConnectionCommon, values.channelConnectionCommon)
		target.chID = values.chID
		target.createdStack = values.createdStack
		target.commonStatsTags = values.commonStatsTags
		$.assignStruct(target.connectionOptions, values.connectionOptions)
		target.peers = values.peers
		target.relayHost = $.assignFieldValue(target.relayHost, values.relayHost, "tchannel.RelayHost")
		target.relayMaxTimeout = values.relayMaxTimeout
		target.relayMaxConnTimeout = values.relayMaxConnTimeout
		target.relayMaxTombs = values.relayMaxTombs
		target.relayTimerVerify = values.relayTimerVerify
		target.internalHandlers = values.internalHandlers
		target.handler = $.assignFieldValue(target.handler, values.handler, "tchannel.Handler")
		target.onPeerStatusChanged = values.onPeerStatusChanged
		target.dialer = values.dialer
		target.connContext = values.connContext
		target.closed = values.closed
		$.assignStruct(target.mutable, values.mutable)
	}

	public async BeginCall(ctx: context.Context | null, hostPort: string, serviceName: string, methodName: string, callOptions: __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null): globalThis.Promise<[__goscript_outbound.OutboundCall | $.VarRef<__goscript_outbound.OutboundCall> | null, $.GoError]> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		let p: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null = await __goscript_root_peer_list.RootPeerList.prototype.GetOrAdd.call((ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).RootPeers() : Channel.prototype.RootPeers.call(ch)), hostPort)
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as __goscript_peer.Peer).BeginCall(ctx, serviceName, methodName, callOptions) : __goscript_peer.Peer.prototype.BeginCall.call(p, ctx, serviceName, methodName, callOptions))
	}

	public async Close(): globalThis.Promise<void> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		const ch$: Channel = ch == null ? $.pointerTarget<Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<Channel>(ch)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).Logger() : Channel.prototype.Logger.call(ch))).Info("Channel.Close called."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let connections: $.Slice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> = null! as $.Slice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null>
		let channelClosed: boolean = false

		await (async (): globalThis.Promise<void> => {
			using __defer = new $.DisposableStack()
			await (ch$ as Channel).mutable.RWMutex.Lock()
			const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((ch$ as Channel).mutable.RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee0() })

			if ((ch$ as Channel).mutable.state == 5) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).Logger() : Channel.prototype.Logger.call(ch))).Info("Channel already closed, skipping additional Close() calls"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return
			}

			if ((ch$ as Channel).mutable.l != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<net.Listener, null>>((ch$ as Channel).mutable.l).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}

			// Stop the idle connections timer.
			await __goscript_idle_sweep.idleSweep.prototype.Stop.call((ch$ as Channel).mutable.idleSweep);

			;(ch$ as Channel).mutable.state = 3
			if ($.len((ch$ as Channel).mutable.conns) == 0) {
				;(ch$ as Channel).mutable.state = 5
				channelClosed = true
			}
			for (const [__rangeKey, c] of (ch$ as Channel).mutable.conns?.entries() ?? []) {
				connections = $.appendOne(connections, c, $.appendZeros.nil)
			}
		})()

		for (let __goscriptRangeTarget0 = connections, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let c = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null)
			await __goscript_connection.Connection.prototype.close.call(c, $.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "reason", Value: "channel closing"}, true)]))
		}

		if (channelClosed) {
			await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).onClosed() : Channel.prototype.onClosed.call(ch))
		}
	}

	public async Closed(): globalThis.Promise<boolean> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		return await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).State() : Channel.prototype.State.call(ch)) == 5
	}

	public ClosedChan(): $.Channel<{}> | null {
		const ch: Channel | $.VarRef<Channel> | null = this;
		return $.pointerValue<Channel>(ch).closed
	}

	public async Connect(ctx: context.Context | null, hostPort: string): globalThis.Promise<[__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, $.GoError]> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const ch$: Channel = ch == null ? $.pointerTarget<Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<Channel>(ch)
		{
			let state = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).State() : Channel.prototype.State.call(ch))
			switch (state) {
				case 1:
				case 2:
				{
					break
					break
				}
				default:
				{
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((ch$ as Channel).channelConnectionCommon.log).Debugf("Connect rejecting new connection as state is %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(state, "tchannel.ChannelState", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					return [null, errInvalidStateForOp]
					break
				}
			}
		}

		// The context timeout applies to the whole call, but users may want a lower
		// connect timeout (e.g. for streams).
		{
			let params: __goscript_context.tchannelCtxParams | $.VarRef<__goscript_context.tchannelCtxParams> | null = await __goscript_context.getTChannelParams(ctx)
			if ((params != null) && ($.pointerValue<__goscript_context.tchannelCtxParams>(params).connectTimeout > 0n)) {
				let cancel: context.CancelFunc = null! as context.CancelFunc
				let __goscriptTuple0: any = context.WithTimeout(ctx, $.pointerValue<__goscript_context.tchannelCtxParams>(params).connectTimeout)
				ctx = __goscriptTuple0[0]
				cancel = __goscriptTuple0[1]
				const __goscriptDeferCallee1 = cancel
				__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee1!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			}
		}

		let events = new __goscript_connection.connectionEvents({OnActive: $.functionValue(((__receiver) => (c: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null) => __receiver.outboundConnectionActive(c))((ch$ as Channel)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Connection")], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Channel).outboundConnectionActive-fm"), OnCloseStateChange: $.functionValue(((__receiver) => (c: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null) => __receiver.connectionCloseStateChange(c))((ch$ as Channel)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Connection")], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Channel).connectionCloseStateChange-fm"), OnExchangeUpdated: $.functionValue(((__receiver) => (c: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null) => __receiver.exchangeUpdated(c))((ch$ as Channel)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Connection")], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Channel).exchangeUpdated-fm")}, true)

		{
			let err = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context2.Context, null>) : $.pointerValue<Exclude<context2.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [null, __goscript_errors.GetContextError(err)]
			}
		}

		let timeout = await __goscript_connection.getTimeout(ctx)
		let [tcpConn, err] = await (ch$ as Channel).dialer!(ctx, hostPort)
		if (err != null) {
			{
				let [ne, ok] = $.typeAssertTuple<net.Error | null>(err, "net.Error")
				if (ok && (__goscriptAwait = (ne !== null && (ne as any).__isVarRef !== true && (ne as any).__goValue === undefined ? (ne as Exclude<net.Error, null>) : $.pointerValue<Exclude<net.Error, null>>(ne)).Timeout(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((ch$ as Channel).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "remoteHostPort", Value: hostPort}, true), new __goscript_logger.LogField({Key: "timeout", Value: $.namedValueInterfaceValue<any>(timeout, "time.Duration", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Info("Outbound net.Dial timed out."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					err = __goscript_errors.ErrTimeout
				} else {
					if ($.comparableEqual((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context2.Context, null>) : $.pointerValue<Exclude<context2.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), context.Canceled)) {
						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((ch$ as Channel).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "remoteHostPort", Value: hostPort}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Info("Outbound net.Dial was cancelled."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						err = __goscript_errors.GetContextError(__goscript_errors.ErrRequestCancelled)
					} else {
						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((ch$ as Channel).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([await __goscript_logger.ErrField(err), new __goscript_logger.LogField({Key: "remoteHostPort", Value: hostPort}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Info("Outbound net.Dial failed."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
			}
			return [null, err]
		}

		let __goscriptTuple1: any = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).outboundHandshake(ctx, tcpConn, hostPort, events) : Channel.prototype.outboundHandshake.call(ch, ctx, tcpConn, hostPort, events))
		let conn: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		let conn$: __goscript_connection.Connection = conn == null ? $.pointerTarget<__goscript_connection.Connection>(conn) : (conn as any).__isVarRef === true ? (conn as any).value : (conn as any).__goValue === undefined ? (conn as any) : $.pointerTarget<__goscript_connection.Connection>(conn)
		if (conn != null) {
			// It's possible that the connection we just created responds with a host:port
			// that is not what we tried to connect to. E.g., we may have connected to
			// 127.0.0.1:1234, but the returned host:port may be 10.0.0.1:1234.
			// In this case, the connection won't be added to 127.0.0.1:1234 peer
			// and so future calls to that peer may end up creating new connections. To
			// avoid this issue, and to avoid clients being aware of any TCP relays, we
			// add the connection to the intended peer.
			if (!$.stringEqual(hostPort, (conn$ as __goscript_connection.Connection).remotePeerInfo.HostPort)) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((conn$ as __goscript_connection.Connection).channelConnectionCommon.log).Debugf("Outbound connection host:port mismatch, adding to peer %v", $.arrayToSlice<any>([(conn$ as __goscript_connection.Connection).remotePeerInfo.HostPort])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).addConnectionToPeer(hostPort, conn, 2) : Channel.prototype.addConnectionToPeer.call(ch, hostPort, conn, 2))
			}
		}

		return [conn, err]
	}

	public ConnectionOptions(): __goscript_connection.ConnectionOptions | $.VarRef<__goscript_connection.ConnectionOptions> | null {
		const ch: Channel | $.VarRef<Channel> | null = this;
		return $.fieldRef($.pointerValue<Channel>(ch)._fields, "connectionOptions")
	}

	public async GetSubChannel(serviceName: string, opts: $.Slice<__goscript_subchannel.SubChannelOption | null>): globalThis.Promise<__goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		let __goscriptTuple2: any = await __goscript_subchannel.subChannelMap.prototype.getOrAdd.call($.pointerValue<Channel>(ch).channelConnectionCommon.subChannels, serviceName, ch)
		let sub: __goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null = __goscriptTuple2[0]
		let added = __goscriptTuple2[1]
		if (added) {
			for (let __goscriptRangeTarget1 = opts, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				let opt = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_subchannel.SubChannelOption | null)
				void (__goscriptAwait = opt!(sub), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return sub
	}

	public async IntrospectNumConnections(): globalThis.Promise<number> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		const ch$: Channel = ch == null ? $.pointerTarget<Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<Channel>(ch)
		await (ch$ as Channel).mutable.RWMutex.RLock()
		let numConns = $.len((ch$ as Channel).mutable.conns)
		void (ch$ as Channel).mutable.RWMutex.RUnlock()
		return numConns
	}

	public async IntrospectOthers(opts: __goscript_introspection.IntrospectionOptions | $.VarRef<__goscript_introspection.IntrospectionOptions> | null): globalThis.Promise<globalThis.Map<string, $.Slice<__goscript_introspection.ChannelInfo>> | null> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		using __defer = new $.DisposableStack()
		if (!$.pointerValue<__goscript_introspection.IntrospectionOptions>(opts).IncludeOtherChannels) {
			return null
		}

		await $.pointerValue<{"Mutex": sync.Mutex, "existing": globalThis.Map<string, $.Slice<Channel | $.VarRef<Channel> | null>> | null}>(__goscript_all_channels.__goscript_get_channelMap()).Mutex.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<{"Mutex": sync.Mutex, "existing": globalThis.Map<string, $.Slice<Channel | $.VarRef<Channel> | null>> | null}>(__goscript_all_channels.__goscript_get_channelMap()).Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		let states: globalThis.Map<string, $.Slice<__goscript_introspection.ChannelInfo>> | null = $.makeMap<string, $.Slice<__goscript_introspection.ChannelInfo>>()
		for (let [svc, channels] of $.pointerValue<{"Mutex": sync.Mutex, "existing": globalThis.Map<string, $.Slice<Channel | $.VarRef<Channel> | null>> | null}>(__goscript_all_channels.__goscript_get_channelMap()).existing?.entries() ?? []) {
			let channelInfos: $.Slice<__goscript_introspection.ChannelInfo> = $.makeSlice<__goscript_introspection.ChannelInfo>(0, $.sliceLen(channels), undefined, () => new __goscript_introspection.ChannelInfo(undefined, true))
			for (let __goscriptRangeTarget2 = channels, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let otherChan = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as Channel | $.VarRef<Channel> | null)
				if ($.pointerEqual(ch, otherChan)) {
					continue
				}
				channelInfos = $.appendOne(channelInfos, await (otherChan !== null && (otherChan as any).__isVarRef !== true && (otherChan as any).__goValue === undefined ? ((otherChan as any) as Channel).ReportInfo(opts) : Channel.prototype.ReportInfo.call(otherChan, opts)))
			}
			$.mapSet(states, svc, channelInfos)
		}

		return states
	}

	public async IntrospectState(opts: __goscript_introspection.IntrospectionOptions | $.VarRef<__goscript_introspection.IntrospectionOptions> | null): globalThis.Promise<__goscript_introspection.RuntimeState | $.VarRef<__goscript_introspection.RuntimeState> | null> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		const ch$: Channel = ch == null ? $.pointerTarget<Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<Channel>(ch)
		if (opts == null) {
			opts = new __goscript_introspection.IntrospectionOptions()
		}

		await (ch$ as Channel).mutable.RWMutex.RLock()
		let state = (ch$ as Channel).mutable.state
		let numConns = $.len((ch$ as Channel).mutable.conns)
		let inactiveConns: $.Slice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> = $.makeSlice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null>(0, numConns)
		let connIDs: $.Slice<number> = $.makeSlice<number>(0, numConns, "number")
		for (const [id, conn] of (ch$ as Channel).mutable.conns?.entries() ?? []) {
			connIDs = $.appendOne(connIDs, $.uint(id, 32))
			if (!await (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as __goscript_connection.Connection).IsActive() : __goscript_connection.Connection.prototype.IsActive.call(conn))) {
				inactiveConns = $.appendOne(inactiveConns, conn, $.appendZeros.nil)
			}
		}

		void (ch$ as Channel).mutable.RWMutex.RUnlock()

		await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).State() : Channel.prototype.State.call(ch))
		return (await (async () => { const __goscriptLiteralField0 = await __goscript_channelstate_string.ChannelState_String(state); const __goscriptLiteralField1 = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).PeerInfo() : Channel.prototype.PeerInfo.call(ch)); const __goscriptLiteralField2 = await __goscript_subchannel.subChannelMap.prototype.IntrospectState.call((ch$ as Channel).channelConnectionCommon.subChannels, opts); const __goscriptLiteralField3 = await __goscript_root_peer_list.RootPeerList.prototype.IntrospectState.call((ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).RootPeers() : Channel.prototype.RootPeers.call(ch)), opts); const __goscriptLiteralField4 = await __goscript_peer.PeerList.prototype.IntrospectList.call((ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).Peers() : Channel.prototype.Peers.call(ch)), opts); const __goscriptLiteralField5 = await __goscript_introspection.getConnectionRuntimeState(inactiveConns, opts); const __goscriptLiteralField6 = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).IntrospectOthers(opts) : Channel.prototype.IntrospectOthers.call(ch, opts)); const __goscriptLiteralField7 = __goscript_introspection.introspectRuntimeVersion(); return new __goscript_introspection.RuntimeState({ID: (ch$ as Channel).chID, ChannelState: __goscriptLiteralField0, CreatedStack: (ch$ as Channel).createdStack, LocalPeer: __goscriptLiteralField1, SubChannels: __goscriptLiteralField2, RootPeers: __goscriptLiteralField3, Peers: __goscriptLiteralField4, NumConnections: numConns, Connections: connIDs, InactiveConnections: __goscriptLiteralField5, OtherChannels: __goscriptLiteralField6, RuntimeVersion: __goscriptLiteralField7}) })())
	}

	public async ListenAndServe(hostPort: string): globalThis.Promise<$.GoError> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		let mutable = $.fieldRef($.pointerValue<Channel>(ch)._fields, "mutable")
		await $.pointerValue<{"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null}>(mutable).RWMutex.RLock()

		if ($.pointerValue<{"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null}>(mutable).l != null) {
			$.pointerValue<{"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null}>(mutable).RWMutex.RUnlock()
			return errAlreadyListening
		}

		let [l, err] = await net.Listen("tcp", hostPort)
		if (err != null) {
			$.pointerValue<{"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null}>(mutable).RWMutex.RUnlock()
			return err
		}

		$.pointerValue<{"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null}>(mutable).RWMutex.RUnlock()
		return (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).Serve(l) : Channel.prototype.Serve.call(ch, l))
	}

	public Logger(): __goscript_logger.Logger | null {
		const ch: Channel | $.VarRef<Channel> | null = this;
		return $.pointerValue<Channel>(ch).channelConnectionCommon.log
	}

	public async PeerInfo(): globalThis.Promise<__goscript_connection.LocalPeerInfo> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		const ch$: Channel = ch == null ? $.pointerTarget<Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<Channel>(ch)
		await (ch$ as Channel).mutable.RWMutex.RLock()
		let peerInfo = ((ch$ as Channel).mutable.peerInfo).clone()
		void (ch$ as Channel).mutable.RWMutex.RUnlock()

		return (peerInfo).clone()
	}

	public Peers(): __goscript_peer.PeerList | $.VarRef<__goscript_peer.PeerList> | null {
		const ch: Channel | $.VarRef<Channel> | null = this;
		return $.pointerValue<Channel>(ch).peers
	}

	public async Ping(ctx: context.Context | null, hostPort: string): globalThis.Promise<$.GoError> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		let peer: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null = await __goscript_root_peer_list.RootPeerList.prototype.GetOrAdd.call((ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).RootPeers() : Channel.prototype.RootPeers.call(ch)), hostPort)
		let __goscriptTuple3: any = await (peer !== null && (peer as any).__isVarRef !== true && (peer as any).__goValue === undefined ? ((peer as any) as __goscript_peer.Peer).GetConnection(ctx) : __goscript_peer.Peer.prototype.GetConnection.call(peer, ctx))
		let conn: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err != null) {
			return err
		}

		return (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as __goscript_connection.Connection).ping(ctx) : __goscript_connection.Connection.prototype.ping.call(conn, ctx))
	}

	public async Register(h: __goscript_handlers.Handler | null, methodName: string): globalThis.Promise<void> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		let [r, ok] = $.typeAssertTuple<__goscript_handlers.registrar | null>($.pointerValue<Channel>(ch).handler, "tchannel.registrar")
		if (!ok) {
			$.panic("can't register handler when channel configured with alternate root handler without Register method")
		}

		void (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<__goscript_handlers.registrar, null>) : $.pointerValue<Exclude<__goscript_handlers.registrar, null>>(r)).Register(h, methodName), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public RelayHost(): __goscript_relay_api.RelayHost | null {
		const ch: Channel | $.VarRef<Channel> | null = this;
		return $.pointerValue<Channel>(ch).relayHost
	}

	public async ReportInfo(opts: __goscript_introspection.IntrospectionOptions | $.VarRef<__goscript_introspection.IntrospectionOptions> | null): globalThis.Promise<__goscript_introspection.ChannelInfo> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		const ch$: Channel = ch == null ? $.pointerTarget<Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<Channel>(ch)
		return (await (async () => { const __goscriptLiteralField8 = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).PeerInfo() : Channel.prototype.PeerInfo.call(ch)); return new __goscript_introspection.ChannelInfo({ID: (ch$ as Channel).chID, CreatedStack: (ch$ as Channel).createdStack, LocalPeer: __goscriptLiteralField8}, true) })())
	}

	public RootPeers(): __goscript_root_peer_list.RootPeerList | $.VarRef<__goscript_root_peer_list.RootPeerList> | null {
		const ch: Channel | $.VarRef<Channel> | null = this;
		return $.pointerValue<__goscript_peer.PeerList>($.pointerValue<Channel>(ch).peers).parent
	}

	public async RunWithRetry(runCtx: context.Context | null, f: ((_p0: context.Context | null, _p1: __goscript_retry.RequestState | $.VarRef<__goscript_retry.RequestState> | null) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		using __defer = new $.DisposableStack()
		const ch$: Channel = ch == null ? $.pointerTarget<Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<Channel>(ch)
		let err: $.GoError = null! as $.GoError

		let opts: __goscript_retry.RetryOptions | $.VarRef<__goscript_retry.RetryOptions> | null = await __goscript_retry.getRetryOptions(runCtx)
		let opts$: __goscript_retry.RetryOptions = opts == null ? $.pointerTarget<__goscript_retry.RetryOptions>(opts) : (opts as any).__isVarRef === true ? (opts as any).value : (opts as any).__goValue === undefined ? (opts as any) : $.pointerTarget<__goscript_retry.RetryOptions>(opts)
		let rs: __goscript_retry.RequestState | $.VarRef<__goscript_retry.RequestState> | null = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).getRequestState(opts) : Channel.prototype.getRequestState.call(ch, opts))
		let rs$: __goscript_retry.RequestState = rs == null ? $.pointerTarget<__goscript_retry.RequestState>(rs) : (rs as any).__isVarRef === true ? (rs as any).value : (rs as any).__goValue === undefined ? (rs as any) : $.pointerTarget<__goscript_retry.RequestState>(rs)
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => (x: any) => __receiver.Put(x))($.pointerValue<sync.Pool>(__goscript_retry.requestStatePool)), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), "sync.(*Pool).Put-fm")
		const __goscriptDeferArg0 = $.interfaceValue(rs, "*tchannel.RequestState", /* @__PURE__ */ $.pointerType("tchannel.RequestState"))
		__defer.defer(() => { __goscriptDeferCallee3(__goscriptDeferArg0) })

		for (let i = 0; i < (opts$ as __goscript_retry.RetryOptions).MaxAttempts; i++) {
			;(rs$ as __goscript_retry.RequestState).Attempt++

			if ((opts$ as __goscript_retry.RetryOptions).TimeoutPerAttempt == 0n) {
				err = (__goscriptAwait = f!(runCtx, rs), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				let [attemptCtx, cancel] = context.WithTimeout(runCtx, (opts$ as __goscript_retry.RetryOptions).TimeoutPerAttempt)
				err = (__goscriptAwait = f!(attemptCtx, rs), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (__goscriptAwait = cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}

			if (err == null) {
				return null
			}
			if (!__goscript_retry.RetryOn_CanRetry((opts$ as __goscript_retry.RetryOptions).RetryOn, err)) {
				if ((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((ch$ as Channel).channelConnectionCommon.log).Enabled(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((ch$ as Channel).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([await __goscript_logger.ErrField(err)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Info("Failed after non-retriable error."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				return err
			}

			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((ch$ as Channel).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([await __goscript_logger.ErrField(err), new __goscript_logger.LogField({Key: "attempt", Value: $.basicInterfaceValue((rs$ as __goscript_retry.RequestState).Attempt, "int")}, true), new __goscript_logger.LogField({Key: "maxAttempts", Value: $.basicInterfaceValue((opts$ as __goscript_retry.RetryOptions).MaxAttempts, "int")}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Info("Retrying request after retryable error."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		return err
	}

	public async Serve(l: net.Listener | null): globalThis.Promise<$.GoError> {
		let ch: Channel | $.VarRef<Channel> | null = this;
		using __defer = new $.DisposableStack()
		const ch$: Channel = ch == null ? $.pointerTarget<Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<Channel>(ch)
		let mutable = $.fieldRef((ch$ as Channel)._fields, "mutable")
		let mutable$: {"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null} = mutable == null ? $.pointerTarget<{"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null}>(mutable) : (mutable as any).__isVarRef === true ? (mutable as any).value : (mutable as any).__goValue === undefined ? (mutable as any) : $.pointerTarget<{"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null}>(mutable)
		await (mutable$ as {"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null}).RWMutex.Lock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())((mutable$ as {"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null}).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })

		if ((mutable$ as {"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null}).l != null) {
			return errAlreadyListening
		}
		;(mutable$ as {"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null}).l = tnet.Wrap(l)

		if ((mutable$ as {"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null}).state != 1) {
			return errInvalidStateForOp
		}
		;(mutable$ as {"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null}).state = 2;

		;(mutable$ as {"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null}).peerInfo.PeerInfo.HostPort = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((__goscriptAwait = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? (l as Exclude<net.Listener, null>) : $.pointerValue<Exclude<net.Listener, null>>(l)).Addr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(mutable$ as {"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null}).peerInfo.PeerInfo.IsEphemeral = false;
		;(ch$ as Channel).channelConnectionCommon.log = (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((ch$ as Channel).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "hostPort", Value: (mutable$ as {"RWMutex": sync.RWMutex, "state": ChannelState, "peerInfo": __goscript_connection.LocalPeerInfo, "l": net.Listener | null, "idleSweep": __goscript_idle_sweep.idleSweep | $.VarRef<__goscript_idle_sweep.idleSweep> | null, "conns": globalThis.Map<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> | null}).peerInfo.PeerInfo.HostPort}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((ch$ as Channel).channelConnectionCommon.log).Info("Channel is listening."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.serve())((ch$ as Channel)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Channel).serve-fm")
		queueMicrotask(async () => { await __goscriptDeferCallee5() })
		return null
	}

	public async ServiceName(): globalThis.Promise<string> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		return (await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).PeerInfo() : Channel.prototype.PeerInfo.call(ch))).ServiceName
	}

	public async State(): globalThis.Promise<ChannelState> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		const ch$: Channel = ch == null ? $.pointerTarget<Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<Channel>(ch)
		await (ch$ as Channel).mutable.RWMutex.RLock()
		let state = (ch$ as Channel).mutable.state
		void (ch$ as Channel).mutable.RWMutex.RUnlock()

		return state
	}

	public StatsReporter(): __goscript_stats.StatsReporter | null {
		const ch: Channel | $.VarRef<Channel> | null = this;
		return $.pointerValue<Channel>(ch).channelConnectionCommon.statsReporter
	}

	public StatsTags(): globalThis.Map<string, string> | null {
		const ch: Channel | $.VarRef<Channel> | null = this;
		let m: globalThis.Map<string, string> | null = $.makeMap<string, string>()
		for (let [k, v] of $.pointerValue<Channel>(ch).commonStatsTags?.entries() ?? []) {
			$.mapSet(m, k, v)
		}
		return m
	}

	public async addConnection(c: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, direction: __goscript_connection_direction.connectionDirection): globalThis.Promise<boolean> {
		let ch: Channel | $.VarRef<Channel> | null = this;
		using __defer = new $.DisposableStack()
		const ch$: Channel = ch == null ? $.pointerTarget<Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<Channel>(ch)
		await (ch$ as Channel).mutable.RWMutex.Lock()
		const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.Unlock())((ch$ as Channel).mutable.RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee6() })

		if (await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_connection.Connection).readState() : __goscript_connection.Connection.prototype.readState.call(c)) != 1) {
			return false
		}

		{
			let state = (ch$ as Channel).mutable.state
			switch (state) {
				case 1:
				case 2:
				{
					break
					break
				}
				default:
				{
					return false
					break
				}
			}
		}

		$.mapSet((ch$ as Channel).mutable.conns, $.pointerValue<__goscript_connection.Connection>(c).connID, c)
		return true
	}

	public async addConnectionToPeer(hostPort: string, c: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, direction: __goscript_connection_direction.connectionDirection): globalThis.Promise<void> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		const c$: __goscript_connection.Connection = c == null ? $.pointerTarget<__goscript_connection.Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_connection.Connection>(c)
		let p: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null = await __goscript_root_peer_list.RootPeerList.prototype.GetOrAdd.call((ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).RootPeers() : Channel.prototype.RootPeers.call(ch)), hostPort)
		{
			let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as __goscript_peer.Peer).addConnection(c, direction) : __goscript_peer.Peer.prototype.addConnection.call(p, c, direction))
			if (err != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as __goscript_connection.Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "remoteHostPort", Value: (c$ as __goscript_connection.Connection).remotePeerInfo.HostPort}, true), new __goscript_logger.LogField({Key: "direction", Value: $.namedValueInterfaceValue<any>(direction, "tchannel.connectionDirection", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic2())}, true), await __goscript_logger.ErrField(err)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Failed to add connection to peer."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).updatePeer(p) : Channel.prototype.updatePeer.call(ch, p))
	}

	public async connectionActive(c: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, direction: __goscript_connection_direction.connectionDirection): globalThis.Promise<void> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		const c$: __goscript_connection.Connection = c == null ? $.pointerTarget<__goscript_connection.Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_connection.Connection>(c)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as __goscript_connection.Connection).channelConnectionCommon.log).Debugf("New active %v connection for peer %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(direction, "tchannel.connectionDirection", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic2()), (c$ as __goscript_connection.Connection).remotePeerInfo.HostPort])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		{
			let added = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).addConnection(c, direction) : Channel.prototype.addConnection.call(ch, c, direction))
			if (!added) {
				// The channel isn't in a valid state to accept this connection, close the connection.
				await __goscript_connection.Connection.prototype.close.call(c, $.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "reason", Value: "new active connection on closing channel"}, true)]))
				return
			}
		}

		await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).addConnectionToPeer((c$ as __goscript_connection.Connection).remotePeerInfo.HostPort, c, direction) : Channel.prototype.addConnectionToPeer.call(ch, (c$ as __goscript_connection.Connection).remotePeerInfo.HostPort, c, direction))
	}

	public async connectionCloseStateChange(c: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null): globalThis.Promise<void> {
		let ch: Channel | $.VarRef<Channel> | null = this;
		const ch$: Channel = ch == null ? $.pointerTarget<Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<Channel>(ch)
		const c$: __goscript_connection.Connection = c == null ? $.pointerTarget<__goscript_connection.Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_connection.Connection>(c)
		await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).removeClosedConn(c) : Channel.prototype.removeClosedConn.call(ch, c))
		{
			let __goscriptTuple4: any = await __goscript_root_peer_list.RootPeerList.prototype.Get.call((ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).RootPeers() : Channel.prototype.RootPeers.call(ch)), (c$ as __goscript_connection.Connection).remotePeerInfo.HostPort)
			let peer: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null = __goscriptTuple4[0]
			let ok = __goscriptTuple4[1]
			if (ok) {
				await (peer !== null && (peer as any).__isVarRef !== true && (peer as any).__goValue === undefined ? ((peer as any) as __goscript_peer.Peer).connectionCloseStateChange(c) : __goscript_peer.Peer.prototype.connectionCloseStateChange.call(peer, c))
				await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).updatePeer(peer) : Channel.prototype.updatePeer.call(ch, peer))
			}
		}
		if ((!$.stringEqual((c$ as __goscript_connection.Connection).outboundHP, "")) && (!$.stringEqual((c$ as __goscript_connection.Connection).outboundHP, (c$ as __goscript_connection.Connection).remotePeerInfo.HostPort))) {
			// Outbound connections may be in multiple peers.
			{
				let __goscriptTuple5: any = await __goscript_root_peer_list.RootPeerList.prototype.Get.call((ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).RootPeers() : Channel.prototype.RootPeers.call(ch)), (c$ as __goscript_connection.Connection).outboundHP)
				let peer: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null = __goscriptTuple5[0]
				let ok = __goscriptTuple5[1]
				if (ok) {
					await (peer !== null && (peer as any).__isVarRef !== true && (peer as any).__goValue === undefined ? ((peer as any) as __goscript_peer.Peer).connectionCloseStateChange(c) : __goscript_peer.Peer.prototype.connectionCloseStateChange.call(peer, c))
					await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).updatePeer(peer) : Channel.prototype.updatePeer.call(ch, peer))
				}
			}
		}

		let chState = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).State() : Channel.prototype.State.call(ch))
		if ((chState != 3) && (chState != 4)) {
			return
		}

		await (ch$ as Channel).mutable.RWMutex.RLock()
		let minState = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).getMinConnectionState() : Channel.prototype.getMinConnectionState.call(ch))
		void (ch$ as Channel).mutable.RWMutex.RUnlock()

		let updateTo: ChannelState = 0
		if (minState >= 4) {
			updateTo = 5
		} else {
			if ((minState >= 3) && (chState == 3)) {
				updateTo = 4
			}
		}

		let updatedToState: ChannelState = 0
		if (updateTo > 0) {
			await (ch$ as Channel).mutable.RWMutex.Lock()
			// Recheck the state as it's possible another goroutine changed the state
			// from what we expected, and so we might make a stale change.
			if ((ch$ as Channel).mutable.state == chState) {
				;(ch$ as Channel).mutable.state = updateTo
				updatedToState = updateTo
			}
			void (ch$ as Channel).mutable.RWMutex.Unlock()
			chState = updateTo
		}

		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as __goscript_connection.Connection).channelConnectionCommon.log).Debugf("ConnectionCloseStateChange channel state = %v connection minState = %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(chState, "tchannel.ChannelState", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(minState, "tchannel.connectionState", __goscriptStatic8(), __goscriptStatic9(), __goscriptStatic2())])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		if (updatedToState == 5) {
			await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).onClosed() : Channel.prototype.onClosed.call(ch))
		}
	}

	public async createCommonStats(): globalThis.Promise<void> {
		let ch: Channel | $.VarRef<Channel> | null = this;
		const ch$: Channel = ch == null ? $.pointerTarget<Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<Channel>(ch);
		;(ch$ as Channel).commonStatsTags = $.makeMap<string, string>([["app", (ch$ as Channel).mutable.peerInfo.PeerInfo.ProcessName], ["service", (ch$ as Channel).mutable.peerInfo.ServiceName]])
		let [host, err] = os.Hostname()
		if (err != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((ch$ as Channel).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([await __goscript_logger.ErrField(err)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Info("Channel creation failed to get host."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		$.mapSet((ch$ as Channel).commonStatsTags, "host", host)
	}

	public async createInternalHandlers(): globalThis.Promise<__goscript_handlers.handlerMap | $.VarRef<__goscript_handlers.handlerMap> | null> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		let internalHandlers: __goscript_handlers.handlerMap | $.VarRef<__goscript_handlers.handlerMap> | null = new __goscript_handlers.handlerMap()

		let endpoints: $.Slice<{"name": string, "handler": ((_p0: $.Slice<number>) => any | globalThis.Promise<any>) | null}> = $.arrayToSlice<{"name": string, "handler": ((_p0: $.Slice<number>) => any | globalThis.Promise<any>) | null}>([$.anonymousStructValue({name: "_gometa_introspect", handler: $.functionValue(((__receiver) => (arg3: $.Slice<number>) => __receiver.handleIntrospection(arg3))($.pointerValue<Channel>(ch)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Channel).handleIntrospection-fm")}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo), [1], 16, false, { pkgPath: "github.com/uber/tchannel-go" })] }), $.anonymousStructValue({name: "_gometa_runtime", handler: __goscript_introspection.handleInternalRuntime}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo), [1], 16, false, { pkgPath: "github.com/uber/tchannel-go" })] })])
		// Perform the connection handshake in a background goroutine.
		for (let __goscriptRangeTarget3 = endpoints, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let ep = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as {"name": string, "handler": ((_p0: $.Slice<number>) => any | globalThis.Promise<any>) | null})))
			// Register the connection in the peer once the channel is set up.
			let __goscriptShadow0 = ep
			let __goscriptShadow1 = $.markAsStructValue($.cloneStructValue(__goscriptShadow0))
			let handler: ((ctx: context.Context | null, call: __goscript_inbound.InboundCall | $.VarRef<__goscript_inbound.InboundCall> | null) => void) | null = $.functionValue(async (ctx: context.Context | null, call: __goscript_inbound.InboundCall | $.VarRef<__goscript_inbound.InboundCall> | null): globalThis.Promise<void> => {
				let arg2: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
				let arg3: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
				{
					let err = await $.markAsStructValue($.cloneStructValue(__goscript__arguments.NewArgReader(...((await (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).Arg2Reader() : __goscript_inbound.InboundCall.prototype.Arg2Reader.call(call))) as [__goscript__arguments.ArgReader | null, $.GoError])))).Read(arg2)
					if (err != null) {
						return
					}
				}
				{
					let err = await $.markAsStructValue($.cloneStructValue(__goscript__arguments.NewArgReader(...((await (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).Arg3Reader() : __goscript_inbound.InboundCall.prototype.Arg3Reader.call(call))) as [__goscript__arguments.ArgReader | null, $.GoError])))).Read(arg3)
					if (err != null) {
						return
					}
				}
				{
					let err = await $.markAsStructValue($.cloneStructValue(__goscript__arguments.NewArgWriter(...(await (async () => { const __goscriptTupleArg0 = await __goscript_inbound.InboundCallResponse.prototype.Arg2Writer.call((call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).Response() : __goscript_inbound.InboundCall.prototype.Response.call(call))); return [(__goscriptTupleArg0[0] as io.WriteCloser | null), __goscriptTupleArg0[1]] as [io.WriteCloser | null, $.GoError] })())))).Write(null)
					if (err != null) {
						return
					}
				}
				await $.markAsStructValue($.cloneStructValue(__goscript__arguments.NewArgWriter(...(await (async () => { const __goscriptTupleArg1 = await __goscript_inbound.InboundCallResponse.prototype.Arg3Writer.call((call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).Response() : __goscript_inbound.InboundCall.prototype.Response.call(call))); return [(__goscriptTupleArg1[0] as io.WriteCloser | null), __goscriptTupleArg1[1]] as [io.WriteCloser | null, $.GoError] })())))).WriteJSON(await __goscriptShadow1.handler!(arg3.value))
			}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.pointerType("tchannel.InboundCall")], results: [] } as $.FunctionTypeInfo))

			let h = $.namedFunction(handler, "tchannel.HandlerFunc", ({ kind: $.TypeKind.Function, name: "tchannel.HandlerFunc", params: ["context.Context", /* @__PURE__ */ $.pointerType("tchannel.InboundCall")], results: [] } as $.FunctionTypeInfo))
			await __goscript_handlers.handlerMap.prototype.Register.call(internalHandlers, $.namedValueInterfaceValue<__goscript_handlers.Handler | null>(h, "tchannel.HandlerFunc", __goscriptStatic10(), __goscriptStatic11(), __goscriptStatic12()), __goscriptShadow1.name)

			await __goscript_subchannel.SubChannel.prototype.Register.call(await Channel.prototype.GetSubChannel.call(ch, (await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).PeerInfo() : Channel.prototype.PeerInfo.call(ch))).ServiceName, null), $.namedValueInterfaceValue<__goscript_handlers.Handler | null>(h, "tchannel.HandlerFunc", __goscriptStatic10(), __goscriptStatic11(), __goscriptStatic12()), __goscriptShadow1.name)
		}

		return internalHandlers
	}

	public async exchangeUpdated(c: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null): globalThis.Promise<void> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		const c$: __goscript_connection.Connection = c == null ? $.pointerTarget<__goscript_connection.Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_connection.Connection>(c)
		if ($.stringEqual((c$ as __goscript_connection.Connection).remotePeerInfo.HostPort, "")) {
			// Hostport is unknown until we get init resp.
			return
		}

		let __goscriptTuple6: any = await __goscript_root_peer_list.RootPeerList.prototype.Get.call((ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).RootPeers() : Channel.prototype.RootPeers.call(ch)), (c$ as __goscript_connection.Connection).remotePeerInfo.HostPort)
		let p: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null = __goscriptTuple6[0]
		let ok = __goscriptTuple6[1]
		if (!ok) {
			return
		}

		await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).updatePeer(p) : Channel.prototype.updatePeer.call(ch, p))
	}

	public async getInitMessage(ctx: context.Context | null, id: number): globalThis.Promise<__goscript_messages.initMessage> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		let msg = (await (async () => { const __goscriptLiteralField9 = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).getInitParams() : Channel.prototype.getInitParams.call(ch)); return new __goscript_messages.initMessage({id: id, Version: 2, initParams: __goscriptLiteralField9}, true) })())
		{
			let p: __goscript_context.tchannelCtxParams | $.VarRef<__goscript_context.tchannelCtxParams> | null = await __goscript_context.getTChannelParams(ctx)
			if ((p != null) && $.pointerValue<__goscript_context.tchannelCtxParams>(p).hideListeningOnOutbound) {
				$.mapSet(msg.initParams, "host_port", "0.0.0.0:0")
			}
		}

		return (msg).clone()
	}

	public async getInitParams(): globalThis.Promise<__goscript_messages.initParams> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		let localPeer = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).PeerInfo() : Channel.prototype.PeerInfo.call(ch))
		return $.makeMap<string, string>([["host_port", localPeer.PeerInfo.HostPort], ["process_name", localPeer.PeerInfo.ProcessName], ["tchannel_language", localPeer.PeerInfo.Version.Language], ["tchannel_language_version", localPeer.PeerInfo.Version.LanguageVersion], ["tchannel_version", localPeer.PeerInfo.Version.TChannelVersion]])
	}

	public async getMinConnectionState(): globalThis.Promise<__goscript_connection.connectionState> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		let minState = 4
		for (const [__rangeKey, c] of $.pointerValue<Channel>(ch).mutable.conns?.entries() ?? []) {
			{
				let s = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_connection.Connection).readState() : __goscript_connection.Connection.prototype.readState.call(c))
				if (s < minState) {
					minState = s
				}
			}
		}
		return minState
	}

	public async getRequestState(retryOpts: __goscript_retry.RetryOptions | $.VarRef<__goscript_retry.RetryOptions> | null): globalThis.Promise<__goscript_retry.RequestState | $.VarRef<__goscript_retry.RequestState> | null> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		let rs: __goscript_retry.RequestState | $.VarRef<__goscript_retry.RequestState> | null = $.mustTypeAssert<__goscript_retry.RequestState | $.VarRef<__goscript_retry.RequestState> | null>(await $.pointerValue<sync.Pool>(__goscript_retry.requestStatePool).Get(), /* @__PURE__ */ $.pointerType("tchannel.RequestState"))
		$.assignStruct($.pointerValue<__goscript_retry.RequestState>(rs), (await (async () => { const __goscriptLiteralField10 = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Channel>(ch).channelConnectionCommon.timeNow!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))); return new __goscript_retry.RequestState({Start: __goscriptLiteralField10, retryOpts: retryOpts}, true) })()))
		return rs
	}

	public async handleIntrospection(arg3: $.Slice<number>): globalThis.Promise<any> {
		let ch: Channel | $.VarRef<Channel> | null = this;
		let opts: $.VarRef<{"IntrospectionOptions": __goscript_introspection.IntrospectionOptions, "ChannelID": $.VarRef<number> | null}> = $.varRef($.anonymousStructValue({"IntrospectionOptions": new __goscript_introspection.IntrospectionOptions(undefined, true), "ChannelID": null}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("IntrospectionOptions", "tchannel.IntrospectionOptions", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("ChannelID", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")), [1], 8, true, { tag: "json:\"id\"" })] }))
		await json.Unmarshal(arg3, $.interfaceValue(opts, "*struct{tchannel.IntrospectionOptions; ChannelID *uint32 \"json:\\\"id\\\"\"}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("IntrospectionOptions", "tchannel.IntrospectionOptions", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("ChannelID", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")), [1], 8, true, { tag: "json:\"id\"" })] })))

		if (opts.value.ChannelID != null) {
			let id = $.pointerValue<number>(opts.value.ChannelID)

			let ok: boolean = false
			let __goscriptTuple7: any = await __goscript_all_channels.findChannelByID(id)
			ch = __goscriptTuple7[0]
			ok = __goscriptTuple7[1]
			if (!ok) {
				return $.interfaceValue($.makeMap<string, string>([["error", await fmt.Sprintf("failed to find channel with \"id\": %v", $.basicInterfaceValue(id, "uint32"))]]), "map[string]string", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")))
			}
		}

		return $.interfaceValue(await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).IntrospectState($.fieldRef(opts.value, "IntrospectionOptions")) : Channel.prototype.IntrospectState.call(ch, $.fieldRef(opts.value, "IntrospectionOptions"))), "*tchannel.RuntimeState", /* @__PURE__ */ $.pointerType("tchannel.RuntimeState"))
	}

	public async inboundConnectionActive(c: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null): globalThis.Promise<void> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).connectionActive(c, 1) : Channel.prototype.connectionActive.call(ch, c, 1))
	}

	public async inboundHandshake(ctx: context.Context | null, c: net.Conn | null, events: __goscript_connection.connectionEvents): globalThis.Promise<[__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, $.GoError]> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		let id = 4294967295

		const __goscriptDeferCallee7 = await __goscript_preinit_connection.setInitDeadline(ctx, c)
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee7!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			err = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).initError(c, 1, id, err) : Channel.prototype.initError.call(ch, c, 1, id, err))
		})() })

		let req: __goscript_messages.initReq | $.VarRef<__goscript_messages.initReq> | null = new __goscript_messages.initReq()
		let req$: __goscript_messages.initReq = req == null ? $.pointerTarget<__goscript_messages.initReq>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<__goscript_messages.initReq>(req)
		let __goscriptTuple8: any = await Channel.prototype.readMessage.call(ch, c, $.interfaceValue<__goscript_messages.message | null>(req, "*tchannel.initReq", /* @__PURE__ */ $.pointerType("tchannel.initReq")))
		id = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			const __goscriptReturn1: [__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, $.GoError] = [null, err]
			err = __goscriptReturn1[1]
			await __defer.dispose()
			return [__goscriptReturn1[0], err]
		}

		if ((req$ as __goscript_messages.initReq).initMessage.Version < 2) {
			const __goscriptReturn2: [__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, $.GoError] = [null, await __goscript_preinit_connection.unsupportedProtocolVersion((req$ as __goscript_messages.initReq).initMessage.Version)]
			err = __goscriptReturn2[1]
			await __defer.dispose()
			return [__goscriptReturn2[0], err]
		}

		let __goscriptTuple9: any = await __goscript_preinit_connection.parseRemotePeer((req$ as __goscript_messages.initReq).initMessage.initParams, (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(c)).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		let remotePeer = __goscriptTuple9[0]
		let remotePeerAddress = __goscriptTuple9[1]
		err = __goscriptTuple9[2]
		if (err != null) {
			const __goscriptReturn3: [__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, $.GoError] = [null, await __goscript_errors.NewWrappedSystemError(255, err)]
			err = __goscriptReturn3[1]
			await __defer.dispose()
			return [__goscriptReturn3[0], err]
		}

		let res: __goscript_messages.initRes | $.VarRef<__goscript_messages.initRes> | null = (await (async () => { const __goscriptLiteralField11 = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).getInitMessage(ctx, id) : Channel.prototype.getInitMessage.call(ch, ctx, id)); return new __goscript_messages.initRes({initMessage: __goscriptLiteralField11}) })())
		{
			let __goscriptShadow2 = await Channel.prototype.writeMessage.call(ch, c, $.interfaceValue<__goscript_messages.message | null>(res, "*tchannel.initRes", /* @__PURE__ */ $.pointerType("tchannel.initRes")))
			if (__goscriptShadow2 != null) {
				const __goscriptReturn4: [__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, $.GoError] = [null, __goscriptShadow2]
				err = __goscriptReturn4[1]
				await __defer.dispose()
				return [__goscriptReturn4[0], err]
			}
		}

		const __goscriptReturn5: [__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, $.GoError] = [await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).newConnection(ctx, c, 0, "", (remotePeer).clone(), (remotePeerAddress).clone(), (events).clone()) : Channel.prototype.newConnection.call(ch, ctx, c, 0, "", (remotePeer).clone(), (remotePeerAddress).clone(), (events).clone())), null]
		err = __goscriptReturn5[1]
		await __defer.dispose()
		return [__goscriptReturn5[0], err]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async initError(c: net.Conn | null, connDir: __goscript_connection_direction.connectionDirection, id: number, err: $.GoError): globalThis.Promise<$.GoError> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		if (err == null) {
			return null
		}

		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>($.pointerValue<Channel>(ch).channelConnectionCommon.log).WithFields(($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "connectionDirection", Value: $.namedValueInterfaceValue<any>(connDir, "tchannel.connectionDirection", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic2())}, true), (await (async () => { const __goscriptLiteralField12 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(c)).LocalAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_logger.LogField({Key: "localAddr", Value: __goscriptLiteralField12}, true) })()), (await (async () => { const __goscriptLiteralField13 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(c)).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_logger.LogField({Key: "remoteAddr", Value: __goscriptLiteralField13}, true) })()), await __goscript_logger.ErrField(err)]) as $.Slice<__goscript_logger.LogField>)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Error("Failed during connection handshake."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		{
			let [ne, ok] = $.typeAssertTuple<net.Error | null>(err, "net.Error")
			if (ok && (__goscriptAwait = (ne !== null && (ne as any).__isVarRef !== true && (ne as any).__goValue === undefined ? (ne as Exclude<net.Error, null>) : $.pointerValue<Exclude<net.Error, null>>(ne)).Timeout(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				err = __goscript_errors.ErrTimeout
			}
		}
		if ($.comparableEqual(err, io.EOF)) {
			err = await __goscript_errors.NewWrappedSystemError(7, io.EOF)
		}
		await Channel.prototype.writeMessage.call(ch, c, $.interfaceValue<__goscript_messages.message | null>((await (async () => { const __goscriptLiteralField14 = __goscript_errors.GetSystemErrorCode(err); const __goscriptLiteralField15 = (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_messages.errorMessage({id: id, errCode: __goscriptLiteralField14, message: __goscriptLiteralField15}) })()), "*tchannel.errorMessage", /* @__PURE__ */ $.pointerType("tchannel.errorMessage")))
		void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(c)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async newConnection(baseCtx: context.Context | null, conn: net.Conn | null, initialID: number, outboundHP: string, remotePeer: __goscript_connection.PeerInfo, remotePeerAddress: __goscript_connection.peerAddressComponents, events: __goscript_connection.connectionEvents): globalThis.Promise<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		const ch$: Channel = ch == null ? $.pointerTarget<Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<Channel>(ch)
		let opts = $.markAsStructValue($.cloneStructValue((ch$ as Channel).connectionOptions)).withDefaults()

		let connID = $.pointerValue<atomic.Uint32>(__goscript_connection._nextConnID).Inc()
		let connDirection = 1
		let log = (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((ch$ as Channel).channelConnectionCommon.log).WithFields(($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "connID", Value: $.basicInterfaceValue(connID, "uint32")}, true), (await (async () => { const __goscriptLiteralField16 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((__goscriptAwait = (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? (conn as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(conn)).LocalAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_logger.LogField({Key: "localAddr", Value: __goscriptLiteralField16}, true) })()), (await (async () => { const __goscriptLiteralField17 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((__goscriptAwait = (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? (conn as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(conn)).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_logger.LogField({Key: "remoteAddr", Value: __goscriptLiteralField17}, true) })()), new __goscript_logger.LogField({Key: "remoteHostPort", Value: remotePeer.HostPort}, true), new __goscript_logger.LogField({Key: "remoteIsEphemeral", Value: remotePeer.IsEphemeral}, true), new __goscript_logger.LogField({Key: "remoteProcess", Value: remotePeer.ProcessName}, true)]) as $.Slice<__goscript_logger.LogField>)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (!$.stringEqual(outboundHP, "")) {
			connDirection = 2
			log = (__goscriptAwait = (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? (log as Exclude<__goscript_logger.Logger, null>) : $.pointerValue<Exclude<__goscript_logger.Logger, null>>(log)).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "outboundHP", Value: outboundHP}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		log = (__goscriptAwait = (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? (log as Exclude<__goscript_logger.Logger, null>) : $.pointerValue<Exclude<__goscript_logger.Logger, null>>(log)).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "connectionDirection", Value: $.namedValueInterfaceValue<any>(connDirection, "tchannel.connectionDirection", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic2())}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let peerInfo = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).PeerInfo() : Channel.prototype.PeerInfo.call(ch))
		let timeNow = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (ch$ as Channel).channelConnectionCommon.timeNow!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).UnixNano()

		let c: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null = (await (async () => { const __goscriptLiteralField18 = await __goscript_connection.getSysConn(conn, log); const __goscriptLiteralField19 = $.makeChannel<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null>(opts.getSendBufferSize(remotePeer.ProcessName), null! as __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null, "both"); const __goscriptLiteralField20 = await __goscript_mex.newMessageExchangeSet(log, "inbound"); const __goscriptLiteralField21 = await __goscript_mex.newMessageExchangeSet(log, "outbound"); const __goscriptLiteralField22 = __goscript_health.newHealthHistory(); const __goscriptLiteralField23 = $.pointerValue<atomic.Int64>(atomic.NewInt64(timeNow)); const __goscriptLiteralField24 = $.pointerValue<atomic.Int64>(atomic.NewInt64(timeNow)); const __goscriptLiteralField25 = (__goscriptAwait = (ch$ as Channel).connContext!(baseCtx, conn), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_connection.Connection({channelConnectionCommon: (ch$ as Channel).channelConnectionCommon, connID: connID, conn: conn, sysConn: __goscriptLiteralField18, connDirection: connDirection, opts: opts, state: 1, sendCh: __goscriptLiteralField19, stopCh: $.makeChannel<{}>(0, {}, "both"), localPeerInfo: peerInfo, remotePeerInfo: remotePeer, remotePeerAddress: remotePeerAddress, outboundHP: outboundHP, inbound: __goscriptLiteralField20, outbound: __goscriptLiteralField21, internalHandlers: (ch$ as Channel).internalHandlers, handler: (ch$ as Channel).handler, events: events, commonStatsTags: (ch$ as Channel).commonStatsTags, healthCheckHistory: __goscriptLiteralField22, lastActivityRead: __goscriptLiteralField23, lastActivityWrite: __goscriptLiteralField24, baseContext: __goscriptLiteralField25}) })())
		let c$: __goscript_connection.Connection = c == null ? $.pointerTarget<__goscript_connection.Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_connection.Connection>(c)

		{
			let tosPriority = opts.TosPriority
			if (tosPriority > 0) {
				{
					let err = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).setConnectionTosPriority(tosPriority, conn) : Channel.prototype.setConnectionTosPriority.call(ch, tosPriority, conn))
					if (err != null) {
						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? (log as Exclude<__goscript_logger.Logger, null>) : $.pointerValue<Exclude<__goscript_logger.Logger, null>>(log)).WithFields($.arrayToSlice<__goscript_logger.LogField>([await __goscript_logger.ErrField(err)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Error("Failed to set ToS priority."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
			}
		}

		void (c$ as __goscript_connection.Connection).nextMessageID.Store(initialID);
		;(c$ as __goscript_connection.Connection).channelConnectionCommon.log = log
		$.pointerValue<__goscript_mex.messageExchangeSet>((c$ as __goscript_connection.Connection).outbound).onCancel = $.functionValue(((__receiver) => (msgID: number) => __receiver.onCancel(msgID))((c$ as __goscript_connection.Connection)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint32")], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Connection).onCancel-fm")
		$.pointerValue<__goscript_mex.messageExchangeSet>((c$ as __goscript_connection.Connection).inbound).onRemoved = $.functionValue(((__receiver) => () => __receiver.checkExchanges())((c$ as __goscript_connection.Connection)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Connection).checkExchanges-fm")
		$.pointerValue<__goscript_mex.messageExchangeSet>((c$ as __goscript_connection.Connection).outbound).onRemoved = $.functionValue(((__receiver) => () => __receiver.checkExchanges())((c$ as __goscript_connection.Connection)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Connection).checkExchanges-fm")
		$.pointerValue<__goscript_mex.messageExchangeSet>((c$ as __goscript_connection.Connection).inbound).onAdded = $.functionValue(((__receiver) => () => __receiver.onExchangeAdded())((c$ as __goscript_connection.Connection)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Connection).onExchangeAdded-fm")
		$.pointerValue<__goscript_mex.messageExchangeSet>((c$ as __goscript_connection.Connection).outbound).onAdded = $.functionValue(((__receiver) => () => __receiver.onExchangeAdded())((c$ as __goscript_connection.Connection)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Connection).onExchangeAdded-fm")

		if ((ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).RelayHost() : Channel.prototype.RelayHost.call(ch)) != null) {
			;(c$ as __goscript_connection.Connection).relay = await __goscript_relay.NewRelayer(ch, c)
		}

		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_connection.Connection).callOnActive() : __goscript_connection.Connection.prototype.callOnActive.call(c))

		const __goscriptDeferCallee8 = $.functionValue(((__receiver) => (_p0: number) => __receiver.readFrames(_p0))((c$ as __goscript_connection.Connection)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint32")], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Connection).readFrames-fm")
		const __goscriptDeferArg1 = connID
		queueMicrotask(async () => { await __goscriptDeferCallee8(__goscriptDeferArg1) })
		const __goscriptDeferCallee9 = $.functionValue(((__receiver) => (_p0: number) => __receiver.writeFrames(_p0))((c$ as __goscript_connection.Connection)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint32")], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Connection).writeFrames-fm")
		const __goscriptDeferArg2 = connID
		queueMicrotask(async () => { await __goscriptDeferCallee9(__goscriptDeferArg2) })
		return c
	}

	public async onClosed(): globalThis.Promise<void> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		const ch$: Channel = ch == null ? $.pointerTarget<Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<Channel>(ch)
		await __goscript_all_channels.removeClosedChannel(ch)

		void (ch$ as Channel).closed!.close()
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((ch$ as Channel).channelConnectionCommon.log).Infof("Channel closed.", null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async outboundConnectionActive(c: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null): globalThis.Promise<void> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).connectionActive(c, 2) : Channel.prototype.connectionActive.call(ch, c, 2))
	}

	public async outboundHandshake(ctx: context.Context | null, c: net.Conn | null, outboundHP: string, events: __goscript_connection.connectionEvents): globalThis.Promise<[__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, $.GoError]> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const __goscriptDeferCallee10 = await __goscript_preinit_connection.setInitDeadline(ctx, c)
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee10!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			err = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).initError(c, 2, 1, err) : Channel.prototype.initError.call(ch, c, 2, 1, err))
		})() })

		let msg: __goscript_messages.initReq | $.VarRef<__goscript_messages.initReq> | null = (await (async () => { const __goscriptLiteralField26 = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).getInitMessage(ctx, 1) : Channel.prototype.getInitMessage.call(ch, ctx, 1)); return new __goscript_messages.initReq({initMessage: __goscriptLiteralField26}) })())
		let msg$: __goscript_messages.initReq = msg == null ? $.pointerTarget<__goscript_messages.initReq>(msg) : (msg as any).__isVarRef === true ? (msg as any).value : (msg as any).__goValue === undefined ? (msg as any) : $.pointerTarget<__goscript_messages.initReq>(msg)
		{
			let __goscriptShadow3 = await Channel.prototype.writeMessage.call(ch, c, $.interfaceValue<__goscript_messages.message | null>(msg, "*tchannel.initReq", /* @__PURE__ */ $.pointerType("tchannel.initReq")))
			if (__goscriptShadow3 != null) {
				const __goscriptReturn6: [__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, $.GoError] = [null, __goscriptShadow3]
				err = __goscriptReturn6[1]
				await __defer.dispose()
				return [__goscriptReturn6[0], err]
			}
		}

		let res: __goscript_messages.initRes | $.VarRef<__goscript_messages.initRes> | null = new __goscript_messages.initRes()
		let res$: __goscript_messages.initRes = res == null ? $.pointerTarget<__goscript_messages.initRes>(res) : (res as any).__isVarRef === true ? (res as any).value : (res as any).__goValue === undefined ? (res as any) : $.pointerTarget<__goscript_messages.initRes>(res)
		let __goscriptTuple10: any = await Channel.prototype.readMessage.call(ch, c, $.interfaceValue<__goscript_messages.message | null>(res, "*tchannel.initRes", /* @__PURE__ */ $.pointerType("tchannel.initRes")))
		let id = __goscriptTuple10[0]
		err = __goscriptTuple10[1]
		if (err != null) {
			const __goscriptReturn7: [__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, $.GoError] = [null, err]
			err = __goscriptReturn7[1]
			await __defer.dispose()
			return [__goscriptReturn7[0], err]
		}

		if (id != (msg$ as __goscript_messages.initReq).initMessage.id) {
			const __goscriptReturn8: [__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, $.GoError] = [null, await __goscript_errors.NewSystemError(255, "received initRes with invalid ID, wanted %v, got %v", $.arrayToSlice<any>([$.basicInterfaceValue((msg$ as __goscript_messages.initReq).initMessage.id, "uint32"), $.basicInterfaceValue(id, "uint32")]))]
			err = __goscriptReturn8[1]
			await __defer.dispose()
			return [__goscriptReturn8[0], err]
		}
		// Default Connection options
		if ((res$ as __goscript_messages.initRes).initMessage.Version != 2) {
			const __goscriptReturn9: [__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, $.GoError] = [null, await __goscript_preinit_connection.unsupportedProtocolVersion((res$ as __goscript_messages.initRes).initMessage.Version)]
			err = __goscriptReturn9[1]
			await __defer.dispose()
			return [__goscriptReturn9[0], err]
		}

		let __goscriptTuple11: any = await __goscript_preinit_connection.parseRemotePeer((res$ as __goscript_messages.initRes).initMessage.initParams, (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(c)).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		let remotePeer = __goscriptTuple11[0]
		let remotePeerAddress = __goscriptTuple11[1]
		err = __goscriptTuple11[2]
		if (err != null) {
			const __goscriptReturn10: [__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, $.GoError] = [null, await __goscript_errors.NewWrappedSystemError(255, err)]
			err = __goscriptReturn10[1]
			await __defer.dispose()
			return [__goscriptReturn10[0], err]
		}

		let baseCtx = context.Background()
		{
			let p: __goscript_context.tchannelCtxParams | $.VarRef<__goscript_context.tchannelCtxParams> | null = await __goscript_context.getTChannelParams(ctx)
			if ((p != null) && ($.pointerValue<__goscript_context.tchannelCtxParams>(p).connectBaseContext != null)) {
				baseCtx = $.pointerValue<__goscript_context.tchannelCtxParams>(p).connectBaseContext
			}
		}

		const __goscriptReturn11: [__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, $.GoError] = [await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).newConnection(baseCtx, c, 1, outboundHP, (remotePeer).clone(), (remotePeerAddress).clone(), (events).clone()) : Channel.prototype.newConnection.call(ch, baseCtx, c, 1, outboundHP, (remotePeer).clone(), (remotePeerAddress).clone(), (events).clone())), null]
		err = __goscriptReturn11[1]
		await __defer.dispose()
		return [__goscriptReturn11[0], err]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async readMessage(c: net.Conn | null, msg: __goscript_messages.message | null): globalThis.Promise<[number, $.GoError]> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const ch$: Channel = ch == null ? $.pointerTarget<Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<Channel>(ch)
		let frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null = ((__goscriptAwait = $.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>((ch$ as Channel).connectionOptions.FramePool).Get(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null)
		let frame$: __goscript_frame.Frame = frame == null ? $.pointerTarget<__goscript_frame.Frame>(frame) : (frame as any).__isVarRef === true ? (frame as any).value : (frame as any).__goValue === undefined ? (frame as any) : $.pointerTarget<__goscript_frame.Frame>(frame)
		const __goscriptDeferCallee11 = $.functionValue(((__receiver) => (f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null) => __receiver.Release(f))($.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>((ch$ as Channel).connectionOptions.FramePool)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Frame")], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.FramePool.Release-fm")
		const __goscriptDeferArg3 = frame
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee11(__goscriptDeferArg3), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		{
			let err = await (frame !== null && (frame as any).__isVarRef !== true && (frame as any).__goValue === undefined ? ((frame as any) as __goscript_frame.Frame).ReadIn((c as io.Reader | null)) : __goscript_frame.Frame.prototype.ReadIn.call(frame, (c as io.Reader | null)))
			if (err != null) {
				return [0, err]
			}
		}

		if ((frame$ as __goscript_frame.Frame).Header.messageType != (__goscriptAwait = (msg !== null && (msg as any).__isVarRef !== true && (msg as any).__goValue === undefined ? (msg as Exclude<__goscript_messages.message, null>) : $.pointerValue<Exclude<__goscript_messages.message, null>>(msg)).messageType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			if ((frame$ as __goscript_frame.Frame).Header.messageType == 255) {
				return [(frame$ as __goscript_frame.Frame).Header.ID, await __goscript_preinit_connection.readError(frame)]
			}
			return [(frame$ as __goscript_frame.Frame).Header.ID, await __goscript_errors.NewSystemError(255, "expected message type %v, got %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (msg !== null && (msg as any).__isVarRef !== true && (msg as any).__goValue === undefined ? (msg as Exclude<__goscript_messages.message, null>) : $.pointerValue<Exclude<__goscript_messages.message, null>>(msg)).messageType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "tchannel.messageType", __goscriptStatic13(), __goscriptStatic14(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((frame$ as __goscript_frame.Frame).Header.messageType, "tchannel.messageType", __goscriptStatic13(), __goscriptStatic14(), __goscriptStatic2())]))]
		}

		return [(frame$ as __goscript_frame.Frame).Header.ID, (frame !== null && (frame as any).__isVarRef !== true && (frame as any).__goValue === undefined ? ((frame as any) as __goscript_frame.Frame).read(msg) : __goscript_frame.Frame.prototype.read.call(frame, msg))]
	}

	public async removeClosedConn(c: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null): globalThis.Promise<void> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		const ch$: Channel = ch == null ? $.pointerTarget<Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<Channel>(ch)
		if (await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_connection.Connection).readState() : __goscript_connection.Connection.prototype.readState.call(c)) != 4) {
			return
		}

		await (ch$ as Channel).mutable.RWMutex.Lock()
		$.deleteMapEntry((ch$ as Channel).mutable.conns, $.pointerValue<__goscript_connection.Connection>(c).connID)
		void (ch$ as Channel).mutable.RWMutex.Unlock()
	}

	public async serve(): globalThis.Promise<void> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		const ch$: Channel = ch == null ? $.pointerTarget<Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<Channel>(ch)
		let acceptBackoff = 0n

		while (true) {
			let [netConn, err] = await $.pointerValue<Exclude<net.Listener, null>>((ch$ as Channel).mutable.l).Accept()
			if (err != null) {
				// Backoff from new accepts if this is a temporary error
				{
					let [ne, ok] = $.typeAssertTuple<net.Error | null>(err, "net.Error")
					if (ok && (__goscriptAwait = (ne !== null && (ne as any).__isVarRef !== true && (ne as any).__goValue === undefined ? (ne as Exclude<net.Error, null>) : $.pointerValue<Exclude<net.Error, null>>(ne)).Temporary(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						if (acceptBackoff == 0n) {
							acceptBackoff = 5000000n
						} else {
							acceptBackoff = $.int64Mul(acceptBackoff, 2n)
						}
						{
							let max = 1000000000n
							if (acceptBackoff > max) {
								acceptBackoff = max
							}
						}
						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((ch$ as Channel).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([await __goscript_logger.ErrField(err), new __goscript_logger.LogField({Key: "backoff", Value: $.namedValueInterfaceValue<any>(acceptBackoff, "time.Duration", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Accept error, will wait and retry."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						await time.Sleep(acceptBackoff)
						continue
					} else {
						// Only log an error if this didn't happen due to a Close.
						if (await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).State() : Channel.prototype.State.call(ch)) >= 3) {
							return
						}
						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((ch$ as Channel).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([await __goscript_logger.ErrField(err)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fatal("Unrecoverable accept error, closing server."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						return
					}
				}
			}

			acceptBackoff = 0n

			// Perform the connection handshake in a background goroutine.
			queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
				// Register the connection in the peer once the channel is set up.
				let events = new __goscript_connection.connectionEvents({OnActive: $.functionValue(((__receiver) => (c: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null) => __receiver.inboundConnectionActive(c))((ch$ as Channel)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Connection")], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Channel).inboundConnectionActive-fm"), OnCloseStateChange: $.functionValue(((__receiver) => (c: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null) => __receiver.connectionCloseStateChange(c))((ch$ as Channel)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Connection")], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Channel).connectionCloseStateChange-fm"), OnExchangeUpdated: $.functionValue(((__receiver) => (c: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null) => __receiver.exchangeUpdated(c))((ch$ as Channel)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Connection")], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Channel).exchangeUpdated-fm")}, true)
				{
					let [, __goscriptShadow4] = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).inboundHandshake(context.Background(), netConn, (events).clone()) : Channel.prototype.inboundHandshake.call(ch, context.Background(), netConn, (events).clone()))
					if (__goscriptShadow4 != null) {
						void (__goscriptAwait = (netConn !== null && (netConn as any).__isVarRef !== true && (netConn as any).__goValue === undefined ? (netConn as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(netConn)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
			})() })
		}
	}

	public async setConnectionTosPriority(tosPriority: tos.ToS, c: net.Conn | null): globalThis.Promise<$.GoError> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		let __goscriptTuple12: any = $.typeAssertTuple<net.TCPAddr | $.VarRef<net.TCPAddr> | null>((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(c)).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("net.TCPAddr"))
		let tcpAddr: net.TCPAddr | $.VarRef<net.TCPAddr> | null = __goscriptTuple12[0]
		let isTCP = __goscriptTuple12[1]
		if (!isTCP) {
			return null
		}

		let err: $.GoError = null! as $.GoError
		{
			let ip: net.IP = ($.pointerValue<net.TCPAddr>(tcpAddr).IP as net.IP)
			switch ((true as boolean)) {
				case (net.IP_To16(ip) != null) && (net.IP_To4(ip) == null):
				{
					err = await $.pointerValue<ipv6.Conn>(await ipv6.NewConn(c)).genericOpt.SetTrafficClass($.int(tosPriority))
					break
				}
				case net.IP_To4(ip) != null:
				{
					err = await $.pointerValue<ipv4.Conn>(await ipv4.NewConn(c)).genericOpt.SetTOS($.int(tosPriority))
					break
				}
			}
		}
		return err
	}

	public async updatePeer(p: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null): globalThis.Promise<void> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		const ch$: Channel = ch == null ? $.pointerTarget<Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<Channel>(ch)
		await __goscript_peer.PeerList.prototype.onPeerChange.call((ch$ as Channel).peers, p)
		await __goscript_subchannel.subChannelMap.prototype.updatePeer.call((ch$ as Channel).channelConnectionCommon.subChannels, p)
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as __goscript_peer.Peer).callOnUpdateComplete() : __goscript_peer.Peer.prototype.callOnUpdateComplete.call(p))
	}

	public async writeMessage(c: net.Conn | null, msg: __goscript_messages.message | null): globalThis.Promise<$.GoError> {
		const ch: Channel | $.VarRef<Channel> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const ch$: Channel = ch == null ? $.pointerTarget<Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<Channel>(ch)
		let frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null = ((__goscriptAwait = $.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>((ch$ as Channel).connectionOptions.FramePool).Get(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null)
		const __goscriptDeferCallee12 = $.functionValue(((__receiver) => (f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null) => __receiver.Release(f))($.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>((ch$ as Channel).connectionOptions.FramePool)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Frame")], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.FramePool.Release-fm")
		const __goscriptDeferArg4 = frame
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee12(__goscriptDeferArg4), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		{
			let err = (frame !== null && (frame as any).__isVarRef !== true && (frame as any).__goValue === undefined ? ((frame as any) as __goscript_frame.Frame).write(msg) : __goscript_frame.Frame.prototype.write.call(frame, msg))
			if (err != null) {
				return err
			}
		}
		return await (frame !== null && (frame as any).__isVarRef !== true && (frame as any).__goValue === undefined ? ((frame as any) as __goscript_frame.Frame).WriteOut((c as io.Writer | null)) : __goscript_frame.Frame.prototype.WriteOut.call(frame, (c as io.Writer | null)))
	}

	public Tracer(): any {
		return $.pointerValue<channelConnectionCommon>(this.channelConnectionCommon).Tracer()
	}

	static __typeInfo = $.registerStructType(
		"tchannel.Channel",
		() => new Channel(),
		() => [$.methodSignature("BeginCall", [["ctx", "context.Context"], ["hostPort", /* @__PURE__ */ $.basicType("string")], ["serviceName", /* @__PURE__ */ $.basicType("string")], ["methodName", /* @__PURE__ */ $.basicType("string")], ["callOptions", /* @__PURE__ */ $.pointerType("tchannel.CallOptions")]], [/* @__PURE__ */ $.pointerType("tchannel.OutboundCall"), "error"], true), $.methodSignature("Close", [], [], true), $.methodSignature("Closed", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("ClosedChan", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")], true), $.methodSignature("Connect", [["ctx", "context.Context"], ["hostPort", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("tchannel.Connection"), "error"], true), $.methodSignature("ConnectionOptions", [], [/* @__PURE__ */ $.pointerType("tchannel.ConnectionOptions")], true), $.methodSignature("GetSubChannel", [["serviceName", /* @__PURE__ */ $.basicType("string")], ["opts", /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, name: "tchannel.SubChannelOption", params: [/* @__PURE__ */ $.pointerType("tchannel.SubChannel")], results: [] } as $.FunctionTypeInfo))]], [/* @__PURE__ */ $.pointerType("tchannel.SubChannel")], true), $.methodSignature("IntrospectNumConnections", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("IntrospectOthers", [["opts", /* @__PURE__ */ $.pointerType("tchannel.IntrospectionOptions")]], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("tchannel.ChannelInfo"))], true), $.methodSignature("IntrospectState", [["opts", /* @__PURE__ */ $.pointerType("tchannel.IntrospectionOptions")]], [/* @__PURE__ */ $.pointerType("tchannel.RuntimeState")], true), $.methodSignature("ListenAndServe", [["hostPort", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("Logger", [], ["tchannel.Logger"], true), $.methodSignature("PeerInfo", [], ["tchannel.LocalPeerInfo"], true), $.methodSignature("Peers", [], [/* @__PURE__ */ $.pointerType("tchannel.PeerList")], true), $.methodSignature("Ping", [["ctx", "context.Context"], ["hostPort", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("Register", [["h", "tchannel.Handler"], ["methodName", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("RelayHost", [], ["tchannel.RelayHost"], true), $.methodSignature("ReportInfo", [["opts", /* @__PURE__ */ $.pointerType("tchannel.IntrospectionOptions")]], ["tchannel.ChannelInfo"], true), $.methodSignature("RootPeers", [], [/* @__PURE__ */ $.pointerType("tchannel.RootPeerList")], true), $.methodSignature("RunWithRetry", [["runCtx", "context.Context"], ["f", ({ kind: $.TypeKind.Function, name: "tchannel.RetriableFunc", params: ["context.Context", /* @__PURE__ */ $.pointerType("tchannel.RequestState")], results: ["error"] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("Serve", [["l", "net.Listener"]], ["error"], true), $.methodSignature("ServiceName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("State", [], [/* @__PURE__ */ $.basicType("int", "tchannel.ChannelState")], true), $.methodSignature("StatsReporter", [], ["tchannel.StatsReporter"], true), $.methodSignature("StatsTags", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("addConnection", [["c", /* @__PURE__ */ $.pointerType("tchannel.Connection")], ["direction", /* @__PURE__ */ $.basicType("int", "tchannel.connectionDirection")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("addConnectionToPeer", [["hostPort", /* @__PURE__ */ $.basicType("string")], ["c", /* @__PURE__ */ $.pointerType("tchannel.Connection")], ["direction", /* @__PURE__ */ $.basicType("int", "tchannel.connectionDirection")]], [], true), $.methodSignature("connectionActive", [["c", /* @__PURE__ */ $.pointerType("tchannel.Connection")], ["direction", /* @__PURE__ */ $.basicType("int", "tchannel.connectionDirection")]], [], true), $.methodSignature("connectionCloseStateChange", [["c", /* @__PURE__ */ $.pointerType("tchannel.Connection")]], [], true), $.methodSignature("createCommonStats", [], [], true), $.methodSignature("createInternalHandlers", [], [/* @__PURE__ */ $.pointerType("tchannel.handlerMap")], true), $.methodSignature("exchangeUpdated", [["c", /* @__PURE__ */ $.pointerType("tchannel.Connection")]], [], true), $.methodSignature("getInitMessage", [["ctx", "context.Context"], ["id", /* @__PURE__ */ $.basicType("uint32")]], ["tchannel.initMessage"], true), $.methodSignature("getInitParams", [], ["tchannel.initParams"], true), $.methodSignature("getMinConnectionState", [], [/* @__PURE__ */ $.basicType("int", "tchannel.connectionState")], true), $.methodSignature("getRequestState", [["retryOpts", /* @__PURE__ */ $.pointerType("tchannel.RetryOptions")]], [/* @__PURE__ */ $.pointerType("tchannel.RequestState")], true), $.methodSignature("handleIntrospection", [["arg3", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("inboundConnectionActive", [["c", /* @__PURE__ */ $.pointerType("tchannel.Connection")]], [], true), $.methodSignature("inboundHandshake", [["ctx", "context.Context"], ["c", "net.Conn"], ["events", "tchannel.connectionEvents"]], [["_", /* @__PURE__ */ $.pointerType("tchannel.Connection")], ["err", "error"]], true), $.methodSignature("initError", [["c", "net.Conn"], ["connDir", /* @__PURE__ */ $.basicType("int", "tchannel.connectionDirection")], ["id", /* @__PURE__ */ $.basicType("uint32")], ["err", "error"]], ["error"], true), $.methodSignature("newConnection", [["baseCtx", "context.Context"], ["conn", "net.Conn"], ["initialID", /* @__PURE__ */ $.basicType("uint32")], ["outboundHP", /* @__PURE__ */ $.basicType("string")], ["remotePeer", "tchannel.PeerInfo"], ["remotePeerAddress", "tchannel.peerAddressComponents"], ["events", "tchannel.connectionEvents"]], [/* @__PURE__ */ $.pointerType("tchannel.Connection")], true), $.methodSignature("onClosed", [], [], true), $.methodSignature("outboundConnectionActive", [["c", /* @__PURE__ */ $.pointerType("tchannel.Connection")]], [], true), $.methodSignature("outboundHandshake", [["ctx", "context.Context"], ["c", "net.Conn"], ["outboundHP", /* @__PURE__ */ $.basicType("string")], ["events", "tchannel.connectionEvents"]], [["_", /* @__PURE__ */ $.pointerType("tchannel.Connection")], ["err", "error"]], true), $.methodSignature("readMessage", [["c", "net.Conn"], ["msg", "tchannel.message"]], [/* @__PURE__ */ $.basicType("uint32"), "error"], true), $.methodSignature("removeClosedConn", [["c", /* @__PURE__ */ $.pointerType("tchannel.Connection")]], [], true), $.methodSignature("serve", [], [], true), $.methodSignature("setConnectionTosPriority", [["tosPriority", /* @__PURE__ */ $.basicType("uint8", "tos.ToS")], ["c", "net.Conn"]], ["error"], true), $.methodSignature("updatePeer", [["p", /* @__PURE__ */ $.pointerType("tchannel.Peer")]], [], true), $.methodSignature("writeMessage", [["c", "net.Conn"], ["msg", "tchannel.message"]], ["error"], true), $.methodSignature("Tracer", [], ["opentracing.Tracer"])],
		Channel,
		() => [/* @__PURE__ */ $.structField("channelConnectionCommon", "tchannel.channelConnectionCommon", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go", anonymous: true }), /* @__PURE__ */ $.structField("chID", /* @__PURE__ */ $.basicType("uint32"), [1], 80, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("createdStack", /* @__PURE__ */ $.basicType("string"), [2], 88, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("commonStatsTags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [3], 104, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("connectionOptions", "tchannel.ConnectionOptions", [4], 112, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("peers", /* @__PURE__ */ $.pointerType("tchannel.PeerList"), [5], 216, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("relayHost", "tchannel.RelayHost", [6], 224, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("relayMaxTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [7], 240, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("relayMaxConnTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [8], 248, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("relayMaxTombs", /* @__PURE__ */ $.basicType("uint64"), [9], 256, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("relayTimerVerify", /* @__PURE__ */ $.basicType("bool"), [10], 264, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("internalHandlers", /* @__PURE__ */ $.pointerType("tchannel.handlerMap"), [11], 272, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("handler", "tchannel.Handler", [12], 280, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("onPeerStatusChanged", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Peer")], results: [] } as $.FunctionTypeInfo), [13], 296, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("dialer", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string")], results: ["net.Conn", "error"] } as $.FunctionTypeInfo), [14], 304, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("connContext", ({ kind: $.TypeKind.Function, params: ["context.Context", "net.Conn"], results: ["context.Context"] } as $.FunctionTypeInfo), [15], 312, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("closed", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [16], 320, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("mutable", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("RWMutex", "sync.RWMutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "tchannel.ChannelState"), [1], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("peerInfo", "tchannel.LocalPeerInfo", [2], 32, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("l", "net.Listener", [3], 136, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("idleSweep", /* @__PURE__ */ $.pointerType("tchannel.idleSweep"), [4], 152, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("conns", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.pointerType("tchannel.Connection")), [5], 160, false, { pkgPath: "github.com/uber/tchannel-go" })] }, [17], 328, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export const ephemeralHostPort: string = "0.0.0.0:0"

export const ChannelClient: ChannelState = 1

export const ChannelListening: ChannelState = 2

export const ChannelStartClose: ChannelState = 3

export const ChannelInboundClosed: ChannelState = 4

export const ChannelClosed: ChannelState = 5

export let errAlreadyListening: $.GoError = errors.New("channel already listening")

export function __goscript_set_errAlreadyListening(__goscriptValue: $.GoError): void {
	errAlreadyListening = __goscriptValue
}

export let errInvalidStateForOp: $.GoError = errors.New("channel is in an invalid state for that method")

export function __goscript_set_errInvalidStateForOp(__goscriptValue: $.GoError): void {
	errInvalidStateForOp = __goscriptValue
}

export let errMaxIdleTimeNotSet: $.GoError = errors.New("IdleCheckInterval is set but MaxIdleTime is zero")

export function __goscript_set_errMaxIdleTimeNotSet(__goscriptValue: $.GoError): void {
	errMaxIdleTimeNotSet = __goscriptValue
}

export let ErrNoServiceName: $.GoError = errors.New("no service name provided")

export function __goscript_set_ErrNoServiceName(__goscriptValue: $.GoError): void {
	ErrNoServiceName = __goscriptValue
}

export let _nextChID: $.VarRef<atomic.Uint32> = $.varRef(new atomic.Uint32(undefined, true))

export function __goscript_set__nextChID(__goscriptValue: atomic.Uint32): void {
	$.assignStruct(_nextChID.value, __goscriptValue)
}

export async function NewChannel(serviceName: string, opts: ChannelOptions | $.VarRef<ChannelOptions> | null): globalThis.Promise<[Channel | $.VarRef<Channel> | null, $.GoError]> {
	if ($.stringEqual(serviceName, "")) {
		return [null, ErrNoServiceName]
	}

	if (opts == null) {
		opts = new ChannelOptions()
	}

	let processName = $.pointerValue<ChannelOptions>(opts).ProcessName
	if ($.stringEqual(processName, "")) {
		processName = await fmt.Sprintf("%s[%d]", filepath.Base($.arrayIndex(os.Args!, 0)), $.basicInterfaceValue(os.Getpid(), "int"))
	}

	let logger = $.pointerValue<ChannelOptions>(opts).Logger
	if (logger == null) {
		logger = __goscript_logger.NullLogger
	}

	let statsReporter = $.pointerValue<ChannelOptions>(opts).StatsReporter
	if (statsReporter == null) {
		statsReporter = __goscript_stats.NullStatsReporter
	}

	let timeNow: (() => time.Time | globalThis.Promise<time.Time>) | null = $.pointerValue<ChannelOptions>(opts).TimeNow
	if (timeNow == null) {
		timeNow = time.Now
	}

	let timeTicker: ((d: time.Duration) => time.Ticker | $.VarRef<time.Ticker> | null | globalThis.Promise<time.Ticker | $.VarRef<time.Ticker> | null>) | null = $.pointerValue<ChannelOptions>(opts).TimeTicker
	if (timeTicker == null) {
		timeTicker = time.NewTicker
	}

	let chID = _nextChID.value.Inc()
	logger = (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<__goscript_logger.Logger, null>) : $.pointerValue<Exclude<__goscript_logger.Logger, null>>(logger)).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "serviceName", Value: serviceName}, true), new __goscript_logger.LogField({Key: "process", Value: processName}, true), new __goscript_logger.LogField({Key: "chID", Value: $.basicInterfaceValue(chID, "uint32")}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	{
		let err = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? ((opts as any) as ChannelOptions).validateIdleCheck() : ChannelOptions.prototype.validateIdleCheck.call(opts))
		if (err != null) {
			return [null, err]
		}
	}

	// Default to dialContext if dialer is not passed in as an option
	let dialCtx: ((ctx: context2.Context | null, hostPort: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null = __goscript_dial_17.dialContext
	if ($.pointerValue<ChannelOptions>(opts).Dialer != null) {
		dialCtx = $.functionValue(async (ctx: context.Context | null, hostPort: string): globalThis.Promise<[net.Conn | null, $.GoError]> => {
			return await $.pointerValue<ChannelOptions>(opts).Dialer!(ctx, "tcp", hostPort)
		}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string")], results: ["net.Conn", "error"] } as $.FunctionTypeInfo))
	}

	if ($.pointerValue<ChannelOptions>(opts).ConnContext == null) {
		$.pointerValue<ChannelOptions>(opts).ConnContext = $.functionValue((ctx: context.Context | null, conn: net.Conn | null): context.Context | null => {
			return ctx
		}, ({ kind: $.TypeKind.Function, params: ["context.Context", "net.Conn"], results: ["context.Context"] } as $.FunctionTypeInfo))
	}

	let ch: Channel | $.VarRef<Channel> | null = (await (async () => { const __goscriptLiteralField28 = $.markAsStructValue($.cloneStructValue($.pointerValue<ChannelOptions>(opts).DefaultConnectionOptions)).withDefaults(); const __goscriptLiteralField29 = await __goscript_relay.validateRelayMaxTimeout($.pointerValue<ChannelOptions>(opts).RelayMaxTimeout, logger); return new Channel({channelConnectionCommon: (() => { const __goscriptLiteralField27 = toStringSet($.pointerValue<ChannelOptions>(opts).RelayLocalHandlers); return new channelConnectionCommon({log: logger, relayLocal: __goscriptLiteralField27, statsReporter: statsReporter, subChannels: new __goscript_subchannel.subChannelMap(), timeNow: timeNow, timeTicker: timeTicker, tracer: $.pointerValue<ChannelOptions>(opts).Tracer}, true) })(), chID: chID, connectionOptions: __goscriptLiteralField28, relayHost: $.pointerValue<ChannelOptions>(opts).RelayHost, relayMaxTimeout: __goscriptLiteralField29, relayMaxConnTimeout: $.pointerValue<ChannelOptions>(opts).RelayMaxConnectionTimeout, relayMaxTombs: $.pointerValue<ChannelOptions>(opts).RelayMaxTombs, relayTimerVerify: $.pointerValue<ChannelOptions>(opts).RelayTimerVerification, dialer: dialCtx, connContext: $.pointerValue<ChannelOptions>(opts).ConnContext, closed: $.makeChannel<{}>(0, {}, "both")}) })())
	let ch$: Channel = ch == null ? $.pointerTarget<Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<Channel>(ch);
	;(ch$ as Channel).peers = __goscript_root_peer_list.RootPeerList.prototype.newChild.call(__goscript_root_peer_list.newRootPeerList($.interfaceValue<__goscript_peer.Connectable | null>(ch, "*tchannel.Channel", /* @__PURE__ */ $.pointerType("tchannel.Channel")), $.pointerValue<ChannelOptions>(opts).OnPeerStatusChanged))

	switch ((true as boolean)) {
		case ($.sliceLen($.pointerValue<ChannelOptions>(opts).SkipHandlerMethods) > 0) && ($.pointerValue<ChannelOptions>(opts).Handler != null):
		{
			let __goscriptTuple13: any = toServiceMethodSet($.pointerValue<ChannelOptions>(opts).SkipHandlerMethods)
			let sm: globalThis.Map<string, {}> | null = __goscriptTuple13[0]
			let err = __goscriptTuple13[1]
			if (err != null) {
				return [null, err]
			}
			;(ch$ as Channel).handler = $.interfaceValue<__goscript_handlers.Handler | null>(new __goscript_handlers.userHandlerWithSkip({localHandler: new __goscript_handlers.channelHandler({ch: ch}, true), ignoreUserHandler: sm, userHandler: $.pointerValue<ChannelOptions>(opts).Handler}, true), "tchannel.userHandlerWithSkip", "tchannel.userHandlerWithSkip")
			break
		}
		case $.pointerValue<ChannelOptions>(opts).Handler != null:
		{
			;(ch$ as Channel).handler = $.pointerValue<ChannelOptions>(opts).Handler
			break
		}
		default:
		{
			;(ch$ as Channel).handler = $.interfaceValue<__goscript_handlers.Handler | null>(new __goscript_handlers.channelHandler({ch: ch}, true), "tchannel.channelHandler", "tchannel.channelHandler")
			break
		}
	}

	$.assignStruct((ch$ as Channel).mutable.peerInfo, new __goscript_connection.LocalPeerInfo({PeerInfo: new __goscript_connection.PeerInfo({ProcessName: processName, HostPort: "0.0.0.0:0", IsEphemeral: true, Version: (() => { const __goscriptLiteralField30 = strings.TrimPrefix(runtime.Version(), "go"); return new __goscript_connection.PeerVersion({Language: "go", LanguageVersion: __goscriptLiteralField30, TChannelVersion: "1.34.3-dev"}, true) })()}, true), ServiceName: serviceName}, true));
	;(ch$ as Channel).mutable.state = 1;
	;(ch$ as Channel).mutable.conns = $.makeMap<number, __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null>()
	await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).createCommonStats() : Channel.prototype.createCommonStats.call(ch));
	;(ch$ as Channel).internalHandlers = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as Channel).createInternalHandlers() : Channel.prototype.createInternalHandlers.call(ch))

	await __goscript_all_channels.registerNewChannel(ch)

	if ($.pointerValue<ChannelOptions>(opts).RelayHost != null) {
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_relay_api.RelayHost, null>>($.pointerValue<ChannelOptions>(opts).RelayHost).SetChannel(ch), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	// Start the idle connection timer.
	;(ch$ as Channel).mutable.idleSweep = await __goscript_idle_sweep.startIdleSweep(ch, opts)

	return [ch, null]
}

export function toStringSet(ss: $.Slice<string>): globalThis.Map<string, {}> | null {
	let _set: globalThis.Map<string, {}> | null = $.makeMap<string, {}>()
	for (let __goscriptRangeTarget4 = ss, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let s = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as string)
		$.mapSet(_set, s, {})
	}
	return _set
}

export function toServiceMethodSet(sms: $.Slice<string>): [globalThis.Map<string, {}> | null, $.GoError] {
	let _set: globalThis.Map<string, {}> | null = $.makeMap<string, {}>([])
	for (let __goscriptRangeTarget5 = sms, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		let sm = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as string)
		if ($.sliceLen(strings.Split(sm, "::")) != 2) {
			return [null, fmt.Errorf("each %q value should be of service::Method format but got %q", "SkipHandlerMethods", sm)]
		}
		$.mapSet(_set, sm, {})
	}
	return [_set, null]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_channelstate_string.ChannelState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "tchannel.ChannelState"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_connection_direction.connectionDirection_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.basicType("int", "tchannel.connectionDirection"))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_connectionstate_string.connectionState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= (/* @__PURE__ */ $.basicType("int", "tchannel.connectionState"))
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= ({Handle: (receiver: any, ...args: any[]) => (__goscript_handlers.HandlerFunc_Handle as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= (({ kind: $.TypeKind.Function, name: "tchannel.HandlerFunc", params: ["context.Context", /* @__PURE__ */ $.pointerType("tchannel.InboundCall")], results: [] } as $.FunctionTypeInfo))
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= ([$.methodSignature("Handle", [["ctx", "context.Context"], ["call", /* @__PURE__ */ $.pointerType("tchannel.InboundCall")]])])
}

var __goscriptStatic13$value: any
function __goscriptStatic13(): any {
	return __goscriptStatic13$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_messagetype_string.messageType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic14$value: any
function __goscriptStatic14(): any {
	return __goscriptStatic14$value ??= (/* @__PURE__ */ $.basicType("uint8", "tchannel.messageType"))
}

var __goscriptAwait: any
