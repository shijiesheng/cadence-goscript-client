// Generated file based on connection.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as time from "@goscript/time/index.js"

import * as tos from "@goscript/github.com/uber/tchannel-go/tos/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as context from "@goscript/golang.org/x/net/context/index.js"

import * as ipv42 from "@goscript/golang.org/x/net/ipv4/index.js"

import * as ipv62 from "@goscript/golang.org/x/net/ipv6/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as ext from "@goscript/github.com/opentracing/opentracing-go/ext/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import * as trand from "@goscript/github.com/uber/tchannel-go/trand/index.js"

import * as context2 from "@goscript/context/index.js"

import * as relay2 from "@goscript/github.com/uber/tchannel-go/relay/index.js"

import type * as arg2 from "@goscript/github.com/uber/tchannel-go/thrift/arg2/index.js"

import * as rand from "@goscript/math/rand/index.js"

import type * as __goscript__arguments from "./arguments.gs.ts"

import * as __goscript_calloptions from "./calloptions.gs.ts"

import * as __goscript_channel from "./channel.gs.ts"

import type * as __goscript_channelstate_string from "./channelstate_string.gs.ts"

import * as __goscript_checksum from "./checksum.gs.ts"

import * as __goscript_connection_direction from "./connection_direction.gs.ts"

import * as __goscript_connectionstate_string from "./connectionstate_string.gs.ts"

import * as __goscript_context from "./context.gs.ts"

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
import "@goscript/crypto/tls/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/net/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/syscall/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/uber/tchannel-go/tos/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/golang.org/x/net/ipv4/index.js"
import "@goscript/golang.org/x/net/ipv6/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/opentracing/opentracing-go/ext/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "@goscript/github.com/uber/tchannel-go/trand/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/uber/tchannel-go/relay/index.js"
import "@goscript/math/rand/index.js"
import "./calloptions.gs.ts"
import "./channel.gs.ts"
import "./checksum.gs.ts"
import "./connection_direction.gs.ts"
import "./connectionstate_string.gs.ts"
import "./context.gs.ts"
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

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.PeerVersion", "tchannel.PeerInfo", "tchannel.LocalPeerInfo", "tchannel.errConnectionUnknownState", "tchannel.SendBufferSizeOverride", "tchannel.ConnectionOptions", "tchannel.connectionEvents", "tchannel.Connection", "tchannel.peerAddressComponents", "tchannel.connectionState"])

export type connectionState = number

$.registerNamedValueType(
	"tchannel.connectionState",
	{String: (receiver: any, ...args: any[]) => (__goscript_connectionstate_string.connectionState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*tchannel.connectionState",
	{String: (receiver: any, ...args: any[]) => (__goscript_connectionstate_string.connectionState_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class PeerVersion {
	public get Language(): string {
		return this._fields.Language
	}

	public set Language(value: string) {
		this._fields.Language = value
	}

	public get LanguageVersion(): string {
		return this._fields.LanguageVersion
	}

	public set LanguageVersion(value: string) {
		this._fields.LanguageVersion = value
	}

	public get TChannelVersion(): string {
		return this._fields.TChannelVersion
	}

	public set TChannelVersion(value: string) {
		this._fields.TChannelVersion = value
	}

	public _fields: {
		Language: string
		LanguageVersion: string
		TChannelVersion: string
	}

	constructor(init?: Partial<{Language?: string, LanguageVersion?: string, TChannelVersion?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Language: init?.Language ?? ("" as string),
			LanguageVersion: init?.LanguageVersion ?? ("" as string),
			TChannelVersion: init?.TChannelVersion ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PeerVersion {
		return new PeerVersion(this, true)
	}

	public __goscriptAssign(source: PeerVersion): void {
		const target = this._fields
		const values = source._fields
		target.Language = values.Language
		target.LanguageVersion = values.LanguageVersion
		target.TChannelVersion = values.TChannelVersion
	}

	static __typeInfo = $.registerStructType(
		"tchannel.PeerVersion",
		() => new PeerVersion(),
		() => [],
		PeerVersion,
		() => [/* @__PURE__ */ $.structField("Language", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"language\"" }), /* @__PURE__ */ $.structField("LanguageVersion", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"languageVersion\"" }), /* @__PURE__ */ $.structField("TChannelVersion", /* @__PURE__ */ $.basicType("string"), [2], 32, true, { tag: "json:\"tchannelVersion\"" })]
	)
}

export class PeerInfo {
	// The host and port that can be used to contact the peer, as encoded by net.JoinHostPort
	public get HostPort(): string {
		return this._fields.HostPort
	}

	public set HostPort(value: string) {
		this._fields.HostPort = value
	}

	// The logical process name for the peer, used for only for logging / debugging
	public get ProcessName(): string {
		return this._fields.ProcessName
	}

	public set ProcessName(value: string) {
		this._fields.ProcessName = value
	}

	// IsEphemeral returns whether the remote host:port is ephemeral (e.g. not listening).
	public get IsEphemeral(): boolean {
		return this._fields.IsEphemeral
	}

	public set IsEphemeral(value: boolean) {
		this._fields.IsEphemeral = value
	}

	// Version returns the version information for the remote peer.
	public get Version(): PeerVersion {
		return this._fields.Version
	}

	public set Version(value: PeerVersion) {
		this._fields.Version = value
	}

	public _fields: {
		HostPort: string
		ProcessName: string
		IsEphemeral: boolean
		Version: PeerVersion
	}

	constructor(init?: Partial<{HostPort?: string, ProcessName?: string, IsEphemeral?: boolean, Version?: PeerVersion}>, __goscriptValue?: boolean) {
		this._fields = {
			HostPort: init?.HostPort ?? ("" as string),
			ProcessName: init?.ProcessName ?? ("" as string),
			IsEphemeral: init?.IsEphemeral ?? (false as boolean),
			Version: init?.Version ? init.Version.clone() : new PeerVersion(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PeerInfo {
		return new PeerInfo(this, true)
	}

	public __goscriptAssign(source: PeerInfo): void {
		const target = this._fields
		const values = source._fields
		target.HostPort = values.HostPort
		target.ProcessName = values.ProcessName
		target.IsEphemeral = values.IsEphemeral
		$.assignStruct(target.Version, values.Version)
	}

	public IsEphemeralHostPort(): boolean {
		const p = this;
		return p.IsEphemeral
	}

	public async String(): globalThis.Promise<string> {
		const p = this;
		return fmt.Sprintf("%s(%s)", p.HostPort, p.ProcessName)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.PeerInfo",
		() => new PeerInfo(),
		() => [$.methodSignature("IsEphemeralHostPort", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		PeerInfo,
		() => [/* @__PURE__ */ $.structField("HostPort", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"hostPort\"" }), /* @__PURE__ */ $.structField("ProcessName", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"processName\"" }), /* @__PURE__ */ $.structField("IsEphemeral", /* @__PURE__ */ $.basicType("bool"), [2], 32, true, { tag: "json:\"isEphemeral\"" }), /* @__PURE__ */ $.structField("Version", "tchannel.PeerVersion", [3], 40, true, { tag: "json:\"version\"" })]
	)
}

export class LocalPeerInfo {
	public get PeerInfo(): PeerInfo {
		return this._fields.PeerInfo
	}

	public set PeerInfo(value: PeerInfo) {
		this._fields.PeerInfo = value
	}

	// ServiceName is the service name for the local peer.
	public get ServiceName(): string {
		return this._fields.ServiceName
	}

	public set ServiceName(value: string) {
		this._fields.ServiceName = value
	}

	public _fields: {
		PeerInfo: PeerInfo
		ServiceName: string
	}

	constructor(init?: Partial<{PeerInfo?: PeerInfo, ServiceName?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			PeerInfo: init?.PeerInfo ? init.PeerInfo.clone() : new PeerInfo(undefined, true),
			ServiceName: init?.ServiceName ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LocalPeerInfo {
		return new LocalPeerInfo(this, true)
	}

	public __goscriptAssign(source: LocalPeerInfo): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.PeerInfo, values.PeerInfo)
		target.ServiceName = values.ServiceName
	}

	public async String(): globalThis.Promise<string> {
		const p = this;
		return fmt.Sprintf("%v: %v", p.ServiceName, $.interfaceValue((p.PeerInfo).clone(), "tchannel.PeerInfo", "tchannel.PeerInfo"))
	}

	public IsEphemeralHostPort(): any {
		return $.pointerValue<PeerInfo>(this.PeerInfo).IsEphemeralHostPort()
	}

	static __typeInfo = $.registerStructType(
		"tchannel.LocalPeerInfo",
		() => new LocalPeerInfo(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IsEphemeralHostPort", [], [/* @__PURE__ */ $.basicType("bool")])],
		LocalPeerInfo,
		() => [/* @__PURE__ */ $.structField("PeerInfo", "tchannel.PeerInfo", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("ServiceName", /* @__PURE__ */ $.basicType("string"), [1], 88, true, { tag: "json:\"serviceName\"" })]
	)
}

export class errConnectionUnknownState {
	public get site(): string {
		return this._fields.site
	}

	public set site(value: string) {
		this._fields.site = value
	}

	public get state(): connectionState {
		return this._fields.state
	}

	public set state(value: connectionState) {
		this._fields.state = value
	}

	public _fields: {
		site: string
		state: connectionState
	}

	constructor(init?: Partial<{site?: string, state?: connectionState}>, __goscriptValue?: boolean) {
		this._fields = {
			site: init?.site ?? ("" as string),
			state: init?.state ?? (0 as connectionState)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errConnectionUnknownState {
		return new errConnectionUnknownState(this, true)
	}

	public __goscriptAssign(source: errConnectionUnknownState): void {
		const target = this._fields
		const values = source._fields
		target.site = values.site
		target.state = values.state
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprintf("connection is in unknown state: %v at %v", $.namedValueInterfaceValue<any>(e.state, "tchannel.connectionState", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), e.site)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.errConnectionUnknownState",
		() => new errConnectionUnknownState(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		errConnectionUnknownState,
		() => [/* @__PURE__ */ $.structField("site", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "tchannel.connectionState"), [1], 16, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class SendBufferSizeOverride {
	public get ProcessNamePrefix(): string {
		return this._fields.ProcessNamePrefix
	}

	public set ProcessNamePrefix(value: string) {
		this._fields.ProcessNamePrefix = value
	}

	public get SendBufferSize(): number {
		return this._fields.SendBufferSize
	}

	public set SendBufferSize(value: number) {
		this._fields.SendBufferSize = value
	}

	public _fields: {
		ProcessNamePrefix: string
		SendBufferSize: number
	}

	constructor(init?: Partial<{ProcessNamePrefix?: string, SendBufferSize?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			ProcessNamePrefix: init?.ProcessNamePrefix ?? ("" as string),
			SendBufferSize: init?.SendBufferSize ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SendBufferSizeOverride {
		return new SendBufferSizeOverride(this, true)
	}

	public __goscriptAssign(source: SendBufferSizeOverride): void {
		const target = this._fields
		const values = source._fields
		target.ProcessNamePrefix = values.ProcessNamePrefix
		target.SendBufferSize = values.SendBufferSize
	}

	static __typeInfo = $.registerStructType(
		"tchannel.SendBufferSizeOverride",
		() => new SendBufferSizeOverride(),
		() => [],
		SendBufferSizeOverride,
		() => [/* @__PURE__ */ $.structField("ProcessNamePrefix", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("SendBufferSize", /* @__PURE__ */ $.basicType("int"), [1], 16, true)]
	)
}

export class ConnectionOptions {
	// The frame pool, allowing better management of frame buffers. Defaults to using raw heap.
	public get FramePool(): __goscript_frame_pool.FramePool | null {
		return this._fields.FramePool
	}

	public set FramePool(value: __goscript_frame_pool.FramePool | null) {
		this._fields.FramePool = value
	}

	// NOTE: This is deprecated and not used for anything.
	public get RecvBufferSize(): number {
		return this._fields.RecvBufferSize
	}

	public set RecvBufferSize(value: number) {
		this._fields.RecvBufferSize = value
	}

	// The size of send channel buffers. Defaults to 512.
	public get SendBufferSize(): number {
		return this._fields.SendBufferSize
	}

	public set SendBufferSize(value: number) {
		this._fields.SendBufferSize = value
	}

	// Per-process name prefix override for SendBufferSize
	// Note that order matters, if there are multiple matches, the first one is used.
	public get SendBufferSizeOverrides(): $.Slice<SendBufferSizeOverride> {
		return this._fields.SendBufferSizeOverrides
	}

	public set SendBufferSizeOverrides(value: $.Slice<SendBufferSizeOverride>) {
		this._fields.SendBufferSizeOverrides = value
	}

	// The type of checksum to use when sending messages.
	public get ChecksumType(): __goscript_checksum.ChecksumType {
		return this._fields.ChecksumType
	}

	public set ChecksumType(value: __goscript_checksum.ChecksumType) {
		this._fields.ChecksumType = value
	}

	// ToS class name marked on outbound packets.
	public get TosPriority(): tos.ToS {
		return this._fields.TosPriority
	}

	public set TosPriority(value: tos.ToS) {
		this._fields.TosPriority = value
	}

	// HealthChecks configures active connection health checking for this channel.
	// By default, health checks are not enabled.
	public get HealthChecks(): __goscript_health.HealthCheckOptions {
		return this._fields.HealthChecks
	}

	public set HealthChecks(value: __goscript_health.HealthCheckOptions) {
		this._fields.HealthChecks = value
	}

	// MaxCloseTime controls how long we allow a connection to complete pending
	// calls before shutting down. Only used if it is non-zero.
	public get MaxCloseTime(): time.Duration {
		return this._fields.MaxCloseTime
	}

	public set MaxCloseTime(value: time.Duration) {
		this._fields.MaxCloseTime = value
	}

	// PropagateCancel enables cancel messages to cancel contexts.
	// By default, cancel messages are ignored.
	// This only affects inbounds (servers handling calls).
	public get PropagateCancel(): boolean {
		return this._fields.PropagateCancel
	}

	public set PropagateCancel(value: boolean) {
		this._fields.PropagateCancel = value
	}

	// SendCancelOnContextCanceled enables sending cancel messages
	// when a request context is canceled before receiving a response.
	// This only affects outbounds (clients making calls).
	public get SendCancelOnContextCanceled(): boolean {
		return this._fields.SendCancelOnContextCanceled
	}

	public set SendCancelOnContextCanceled(value: boolean) {
		this._fields.SendCancelOnContextCanceled = value
	}

	public _fields: {
		FramePool: __goscript_frame_pool.FramePool | null
		RecvBufferSize: number
		SendBufferSize: number
		SendBufferSizeOverrides: $.Slice<SendBufferSizeOverride>
		ChecksumType: __goscript_checksum.ChecksumType
		TosPriority: tos.ToS
		HealthChecks: __goscript_health.HealthCheckOptions
		MaxCloseTime: time.Duration
		PropagateCancel: boolean
		SendCancelOnContextCanceled: boolean
	}

	constructor(init?: Partial<{FramePool?: __goscript_frame_pool.FramePool | null, RecvBufferSize?: number, SendBufferSize?: number, SendBufferSizeOverrides?: $.Slice<SendBufferSizeOverride>, ChecksumType?: __goscript_checksum.ChecksumType, TosPriority?: tos.ToS, HealthChecks?: __goscript_health.HealthCheckOptions, MaxCloseTime?: time.Duration, PropagateCancel?: boolean, SendCancelOnContextCanceled?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			FramePool: init?.FramePool ?? (null! as __goscript_frame_pool.FramePool | null),
			RecvBufferSize: init?.RecvBufferSize ?? (0 as number),
			SendBufferSize: init?.SendBufferSize ?? (0 as number),
			SendBufferSizeOverrides: init?.SendBufferSizeOverrides ?? (null! as $.Slice<SendBufferSizeOverride>),
			ChecksumType: init?.ChecksumType ?? (0 as __goscript_checksum.ChecksumType),
			TosPriority: init?.TosPriority ?? (0 as tos.ToS),
			HealthChecks: init?.HealthChecks ? init.HealthChecks.clone() : new __goscript_health.HealthCheckOptions(undefined, true),
			MaxCloseTime: init?.MaxCloseTime ?? (0n as time.Duration),
			PropagateCancel: init?.PropagateCancel ?? (false as boolean),
			SendCancelOnContextCanceled: init?.SendCancelOnContextCanceled ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ConnectionOptions {
		return new ConnectionOptions(this, true)
	}

	public __goscriptAssign(source: ConnectionOptions): void {
		const target = this._fields
		const values = source._fields
		target.FramePool = $.assignFieldValue(target.FramePool, values.FramePool, "tchannel.FramePool")
		target.RecvBufferSize = values.RecvBufferSize
		target.SendBufferSize = values.SendBufferSize
		target.SendBufferSizeOverrides = values.SendBufferSizeOverrides
		target.ChecksumType = values.ChecksumType
		target.TosPriority = values.TosPriority
		$.assignStruct(target.HealthChecks, values.HealthChecks)
		target.MaxCloseTime = values.MaxCloseTime
		target.PropagateCancel = values.PropagateCancel
		target.SendCancelOnContextCanceled = values.SendCancelOnContextCanceled
	}

	public getSendBufferSize(processName: string): number {
		const co = this;
		for (let __goscriptRangeTarget0 = co.SendBufferSizeOverrides, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let override = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as SendBufferSizeOverride)).clone()
			if (strings.HasPrefix(processName, override.ProcessNamePrefix)) {
				return override.SendBufferSize
			}
		}
		return co.SendBufferSize
	}

	public withDefaults(): ConnectionOptions {
		let co: ConnectionOptions = this;
		if (co.ChecksumType == 0) {
			co.ChecksumType = 1
		}
		if (co.FramePool == null) {
			co.FramePool = __goscript_frame_pool.DefaultFramePool
		}
		if (co.SendBufferSize <= 0) {
			co.SendBufferSize = 512
		}
		$.assignStruct(co.HealthChecks, $.markAsStructValue($.cloneStructValue(co.HealthChecks)).withDefaults())
		return (co).clone()
	}

	static __typeInfo = $.registerStructType(
		"tchannel.ConnectionOptions",
		() => new ConnectionOptions(),
		() => [$.methodSignature("getSendBufferSize", [["processName", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("withDefaults", [], ["tchannel.ConnectionOptions"])],
		ConnectionOptions,
		() => [/* @__PURE__ */ $.structField("FramePool", "tchannel.FramePool", [0], 0, true), /* @__PURE__ */ $.structField("RecvBufferSize", /* @__PURE__ */ $.basicType("int"), [1], 16, true), /* @__PURE__ */ $.structField("SendBufferSize", /* @__PURE__ */ $.basicType("int"), [2], 24, true), /* @__PURE__ */ $.structField("SendBufferSizeOverrides", /* @__PURE__ */ $.sliceType("tchannel.SendBufferSizeOverride"), [3], 32, true), /* @__PURE__ */ $.structField("ChecksumType", /* @__PURE__ */ $.basicType("uint8", "tchannel.ChecksumType"), [4], 56, true), /* @__PURE__ */ $.structField("TosPriority", /* @__PURE__ */ $.basicType("uint8", "tos.ToS"), [5], 57, true), /* @__PURE__ */ $.structField("HealthChecks", "tchannel.HealthCheckOptions", [6], 64, true), /* @__PURE__ */ $.structField("MaxCloseTime", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [7], 88, true), /* @__PURE__ */ $.structField("PropagateCancel", /* @__PURE__ */ $.basicType("bool"), [8], 96, true), /* @__PURE__ */ $.structField("SendCancelOnContextCanceled", /* @__PURE__ */ $.basicType("bool"), [9], 97, true)]
	)
}

export class connectionEvents {
	// OnActive is called when a connection becomes active.
	public get OnActive(): ((c: Connection | $.VarRef<Connection> | null) => void) | null {
		return this._fields.OnActive
	}

	public set OnActive(value: ((c: Connection | $.VarRef<Connection> | null) => void) | null) {
		this._fields.OnActive = value
	}

	// OnCloseStateChange is called when a connection that is closing changes state.
	public get OnCloseStateChange(): ((c: Connection | $.VarRef<Connection> | null) => void) | null {
		return this._fields.OnCloseStateChange
	}

	public set OnCloseStateChange(value: ((c: Connection | $.VarRef<Connection> | null) => void) | null) {
		this._fields.OnCloseStateChange = value
	}

	// OnExchangeUpdated is called when a message exchange added or removed.
	public get OnExchangeUpdated(): ((c: Connection | $.VarRef<Connection> | null) => void) | null {
		return this._fields.OnExchangeUpdated
	}

	public set OnExchangeUpdated(value: ((c: Connection | $.VarRef<Connection> | null) => void) | null) {
		this._fields.OnExchangeUpdated = value
	}

	public _fields: {
		OnActive: ((c: Connection | $.VarRef<Connection> | null) => void) | null
		OnCloseStateChange: ((c: Connection | $.VarRef<Connection> | null) => void) | null
		OnExchangeUpdated: ((c: Connection | $.VarRef<Connection> | null) => void) | null
	}

	constructor(init?: Partial<{OnActive?: ((c: Connection | $.VarRef<Connection> | null) => void) | null, OnCloseStateChange?: ((c: Connection | $.VarRef<Connection> | null) => void) | null, OnExchangeUpdated?: ((c: Connection | $.VarRef<Connection> | null) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			OnActive: init?.OnActive ?? (null! as ((c: Connection | $.VarRef<Connection> | null) => void) | null),
			OnCloseStateChange: init?.OnCloseStateChange ?? (null! as ((c: Connection | $.VarRef<Connection> | null) => void) | null),
			OnExchangeUpdated: init?.OnExchangeUpdated ?? (null! as ((c: Connection | $.VarRef<Connection> | null) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): connectionEvents {
		return new connectionEvents(this, true)
	}

	public __goscriptAssign(source: connectionEvents): void {
		const target = this._fields
		const values = source._fields
		target.OnActive = values.OnActive
		target.OnCloseStateChange = values.OnCloseStateChange
		target.OnExchangeUpdated = values.OnExchangeUpdated
	}

	static __typeInfo = $.registerStructType(
		"tchannel.connectionEvents",
		() => new connectionEvents(),
		() => [],
		connectionEvents,
		() => [/* @__PURE__ */ $.structField("OnActive", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Connection")], results: [] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("OnCloseStateChange", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Connection")], results: [] } as $.FunctionTypeInfo), [1], 8, true), /* @__PURE__ */ $.structField("OnExchangeUpdated", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.Connection")], results: [] } as $.FunctionTypeInfo), [2], 16, true)]
	)
}

export class peerAddressComponents {
	public get port(): number {
		return this._fields.port
	}

	public set port(value: number) {
		this._fields.port = value
	}

	public get ipv4(): number {
		return this._fields.ipv4
	}

	public set ipv4(value: number) {
		this._fields.ipv4 = value
	}

	public get ipv6(): string {
		return this._fields.ipv6
	}

	public set ipv6(value: string) {
		this._fields.ipv6 = value
	}

	public get hostname(): string {
		return this._fields.hostname
	}

	public set hostname(value: string) {
		this._fields.hostname = value
	}

	public _fields: {
		port: number
		ipv4: number
		ipv6: string
		hostname: string
	}

	constructor(init?: Partial<{port?: number, ipv4?: number, ipv6?: string, hostname?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			port: init?.port ?? (0 as number),
			ipv4: init?.ipv4 ?? (0 as number),
			ipv6: init?.ipv6 ?? ("" as string),
			hostname: init?.hostname ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): peerAddressComponents {
		return new peerAddressComponents(this, true)
	}

	public __goscriptAssign(source: peerAddressComponents): void {
		const target = this._fields
		const values = source._fields
		target.port = values.port
		target.ipv4 = values.ipv4
		target.ipv6 = values.ipv6
		target.hostname = values.hostname
	}

	static __typeInfo = $.registerStructType(
		"tchannel.peerAddressComponents",
		() => new peerAddressComponents(),
		() => [],
		peerAddressComponents,
		() => [/* @__PURE__ */ $.structField("port", /* @__PURE__ */ $.basicType("uint16"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("ipv4", /* @__PURE__ */ $.basicType("uint32"), [1], 4, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("ipv6", /* @__PURE__ */ $.basicType("string"), [2], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("hostname", /* @__PURE__ */ $.basicType("string"), [3], 24, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class Connection {
	public get channelConnectionCommon(): __goscript_channel.channelConnectionCommon {
		return this._fields.channelConnectionCommon
	}

	public set channelConnectionCommon(value: __goscript_channel.channelConnectionCommon) {
		this._fields.channelConnectionCommon = value
	}

	public get connID(): number {
		return this._fields.connID
	}

	public set connID(value: number) {
		this._fields.connID = value
	}

	public get connDirection(): __goscript_connection_direction.connectionDirection {
		return this._fields.connDirection
	}

	public set connDirection(value: __goscript_connection_direction.connectionDirection) {
		this._fields.connDirection = value
	}

	public get opts(): ConnectionOptions {
		return this._fields.opts
	}

	public set opts(value: ConnectionOptions) {
		this._fields.opts = value
	}

	public get conn(): net.Conn | null {
		return this._fields.conn
	}

	public set conn(value: net.Conn | null) {
		this._fields.conn = value
	}

	public get sysConn(): syscall.RawConn | null {
		return this._fields.sysConn
	}

	public set sysConn(value: syscall.RawConn | null) {
		this._fields.sysConn = value
	}

	public get localPeerInfo(): LocalPeerInfo {
		return this._fields.localPeerInfo
	}

	public set localPeerInfo(value: LocalPeerInfo) {
		this._fields.localPeerInfo = value
	}

	public get remotePeerInfo(): PeerInfo {
		return this._fields.remotePeerInfo
	}

	public set remotePeerInfo(value: PeerInfo) {
		this._fields.remotePeerInfo = value
	}

	public get sendCh(): $.Channel<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null> | null {
		return this._fields.sendCh
	}

	public set sendCh(value: $.Channel<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null> | null) {
		this._fields.sendCh = value
	}

	public get stopCh(): $.Channel<{}> | null {
		return this._fields.stopCh
	}

	public set stopCh(value: $.Channel<{}> | null) {
		this._fields.stopCh = value
	}

	public get state(): connectionState {
		return this._fields.state
	}

	public set state(value: connectionState) {
		this._fields.state = value
	}

	public get stateMut(): sync.RWMutex {
		return this._fields.stateMut
	}

	public set stateMut(value: sync.RWMutex) {
		this._fields.stateMut = value
	}

	public get inbound(): __goscript_mex.messageExchangeSet | $.VarRef<__goscript_mex.messageExchangeSet> | null {
		return this._fields.inbound
	}

	public set inbound(value: __goscript_mex.messageExchangeSet | $.VarRef<__goscript_mex.messageExchangeSet> | null) {
		this._fields.inbound = value
	}

	public get outbound(): __goscript_mex.messageExchangeSet | $.VarRef<__goscript_mex.messageExchangeSet> | null {
		return this._fields.outbound
	}

	public set outbound(value: __goscript_mex.messageExchangeSet | $.VarRef<__goscript_mex.messageExchangeSet> | null) {
		this._fields.outbound = value
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

	public get nextMessageID(): atomic.Uint32 {
		return this._fields.nextMessageID
	}

	public set nextMessageID(value: atomic.Uint32) {
		this._fields.nextMessageID = value
	}

	public get events(): connectionEvents {
		return this._fields.events
	}

	public set events(value: connectionEvents) {
		this._fields.events = value
	}

	public get commonStatsTags(): globalThis.Map<string, string> | null {
		return this._fields.commonStatsTags
	}

	public set commonStatsTags(value: globalThis.Map<string, string> | null) {
		this._fields.commonStatsTags = value
	}

	public get relay(): __goscript_relay.Relayer | $.VarRef<__goscript_relay.Relayer> | null {
		return this._fields.relay
	}

	public set relay(value: __goscript_relay.Relayer | $.VarRef<__goscript_relay.Relayer> | null) {
		this._fields.relay = value
	}

	public get baseContext(): context.Context | null {
		return this._fields.baseContext
	}

	public set baseContext(value: context.Context | null) {
		this._fields.baseContext = value
	}

	// outboundHP is the host:port we used to create this outbound connection.
	// It may not match remotePeerInfo.HostPort, in which case the connection is
	// added to peers for both host:ports. For inbound connections, this is empty.
	public get outboundHP(): string {
		return this._fields.outboundHP
	}

	public set outboundHP(value: string) {
		this._fields.outboundHP = value
	}

	// closeNetworkCalled is used to avoid errors from being logged
	// when this side closes a connection.
	public get closeNetworkCalled(): atomic.Bool {
		return this._fields.closeNetworkCalled
	}

	public set closeNetworkCalled(value: atomic.Bool) {
		this._fields.closeNetworkCalled = value
	}

	// stoppedExchanges is atomically set when exchanges are stopped due to error.
	public get stoppedExchanges(): atomic.Bool {
		return this._fields.stoppedExchanges
	}

	public set stoppedExchanges(value: atomic.Bool) {
		this._fields.stoppedExchanges = value
	}

	// remotePeerAddress is used as a cache for remote peer address parsed into individual
	// components that can be used to set peer tags on OpenTracing Span.
	public get remotePeerAddress(): peerAddressComponents {
		return this._fields.remotePeerAddress
	}

	public set remotePeerAddress(value: peerAddressComponents) {
		this._fields.remotePeerAddress = value
	}

	// healthCheckCtx/Quit are used to stop health checks.
	public get healthCheckCtx(): context.Context | null {
		return this._fields.healthCheckCtx
	}

	public set healthCheckCtx(value: context.Context | null) {
		this._fields.healthCheckCtx = value
	}

	public get healthCheckQuit(): (() => void) | null {
		return this._fields.healthCheckQuit
	}

	public set healthCheckQuit(value: (() => void) | null) {
		this._fields.healthCheckQuit = value
	}

	public get healthCheckDone(): $.Channel<{}> | null {
		return this._fields.healthCheckDone
	}

	public set healthCheckDone(value: $.Channel<{}> | null) {
		this._fields.healthCheckDone = value
	}

	public get healthCheckHistory(): __goscript_health.healthHistory | $.VarRef<__goscript_health.healthHistory> | null {
		return this._fields.healthCheckHistory
	}

	public set healthCheckHistory(value: __goscript_health.healthHistory | $.VarRef<__goscript_health.healthHistory> | null) {
		this._fields.healthCheckHistory = value
	}

	// lastActivity{Read,Write} is used to track how long the connection has been
	// idle for the recieve and send connections respectively. (unix time, nano)
	public get lastActivityRead(): atomic.Int64 {
		return this._fields.lastActivityRead
	}

	public set lastActivityRead(value: atomic.Int64) {
		this._fields.lastActivityRead = value
	}

	public get lastActivityWrite(): atomic.Int64 {
		return this._fields.lastActivityWrite
	}

	public set lastActivityWrite(value: atomic.Int64) {
		this._fields.lastActivityWrite = value
	}

	public _fields: {
		channelConnectionCommon: __goscript_channel.channelConnectionCommon
		connID: number
		connDirection: __goscript_connection_direction.connectionDirection
		opts: ConnectionOptions
		conn: net.Conn | null
		sysConn: syscall.RawConn | null
		localPeerInfo: LocalPeerInfo
		remotePeerInfo: PeerInfo
		sendCh: $.Channel<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null> | null
		stopCh: $.Channel<{}> | null
		state: connectionState
		stateMut: sync.RWMutex
		inbound: __goscript_mex.messageExchangeSet | $.VarRef<__goscript_mex.messageExchangeSet> | null
		outbound: __goscript_mex.messageExchangeSet | $.VarRef<__goscript_mex.messageExchangeSet> | null
		internalHandlers: __goscript_handlers.handlerMap | $.VarRef<__goscript_handlers.handlerMap> | null
		handler: __goscript_handlers.Handler | null
		nextMessageID: atomic.Uint32
		events: connectionEvents
		commonStatsTags: globalThis.Map<string, string> | null
		relay: __goscript_relay.Relayer | $.VarRef<__goscript_relay.Relayer> | null
		baseContext: context.Context | null
		outboundHP: string
		closeNetworkCalled: atomic.Bool
		stoppedExchanges: atomic.Bool
		remotePeerAddress: peerAddressComponents
		healthCheckCtx: context.Context | null
		healthCheckQuit: (() => void) | null
		healthCheckDone: $.Channel<{}> | null
		healthCheckHistory: __goscript_health.healthHistory | $.VarRef<__goscript_health.healthHistory> | null
		lastActivityRead: atomic.Int64
		lastActivityWrite: atomic.Int64
	}

	constructor(init?: Partial<{channelConnectionCommon?: __goscript_channel.channelConnectionCommon, connID?: number, connDirection?: __goscript_connection_direction.connectionDirection, opts?: ConnectionOptions, conn?: net.Conn | null, sysConn?: syscall.RawConn | null, localPeerInfo?: LocalPeerInfo, remotePeerInfo?: PeerInfo, sendCh?: $.Channel<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null> | null, stopCh?: $.Channel<{}> | null, state?: connectionState, stateMut?: sync.RWMutex, inbound?: __goscript_mex.messageExchangeSet | $.VarRef<__goscript_mex.messageExchangeSet> | null, outbound?: __goscript_mex.messageExchangeSet | $.VarRef<__goscript_mex.messageExchangeSet> | null, internalHandlers?: __goscript_handlers.handlerMap | $.VarRef<__goscript_handlers.handlerMap> | null, handler?: __goscript_handlers.Handler | null, nextMessageID?: atomic.Uint32, events?: connectionEvents, commonStatsTags?: globalThis.Map<string, string> | null, relay?: __goscript_relay.Relayer | $.VarRef<__goscript_relay.Relayer> | null, baseContext?: context.Context | null, outboundHP?: string, closeNetworkCalled?: atomic.Bool, stoppedExchanges?: atomic.Bool, remotePeerAddress?: peerAddressComponents, healthCheckCtx?: context.Context | null, healthCheckQuit?: (() => void) | null, healthCheckDone?: $.Channel<{}> | null, healthCheckHistory?: __goscript_health.healthHistory | $.VarRef<__goscript_health.healthHistory> | null, lastActivityRead?: atomic.Int64, lastActivityWrite?: atomic.Int64}>, __goscriptValue?: boolean) {
		this._fields = {
			channelConnectionCommon: init?.channelConnectionCommon ? init.channelConnectionCommon.clone() : new __goscript_channel.channelConnectionCommon(undefined, true),
			connID: init?.connID ?? (0 as number),
			connDirection: init?.connDirection ?? (0 as __goscript_connection_direction.connectionDirection),
			opts: init?.opts ? init.opts.clone() : new ConnectionOptions(undefined, true),
			conn: init?.conn ?? (null! as net.Conn | null),
			sysConn: init?.sysConn ?? (null! as syscall.RawConn | null),
			localPeerInfo: init?.localPeerInfo ? init.localPeerInfo.clone() : new LocalPeerInfo(undefined, true),
			remotePeerInfo: init?.remotePeerInfo ? init.remotePeerInfo.clone() : new PeerInfo(undefined, true),
			sendCh: init?.sendCh ?? (null! as $.Channel<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null> | null),
			stopCh: init?.stopCh ?? (null! as $.Channel<{}> | null),
			state: init?.state ?? (0 as connectionState),
			stateMut: init?.stateMut ? $.markAsStructValue($.cloneStructValue(init.stateMut)) : $.markAsStructValue(new sync.RWMutex()),
			inbound: init?.inbound ?? (null! as __goscript_mex.messageExchangeSet | $.VarRef<__goscript_mex.messageExchangeSet> | null),
			outbound: init?.outbound ?? (null! as __goscript_mex.messageExchangeSet | $.VarRef<__goscript_mex.messageExchangeSet> | null),
			internalHandlers: init?.internalHandlers ?? (null! as __goscript_handlers.handlerMap | $.VarRef<__goscript_handlers.handlerMap> | null),
			handler: init?.handler ?? (null! as __goscript_handlers.Handler | null),
			nextMessageID: init?.nextMessageID ? init.nextMessageID.clone() : new atomic.Uint32(undefined, true),
			events: init?.events ? init.events.clone() : new connectionEvents(undefined, true),
			commonStatsTags: init?.commonStatsTags ?? (null! as globalThis.Map<string, string> | null),
			relay: init?.relay ?? (null! as __goscript_relay.Relayer | $.VarRef<__goscript_relay.Relayer> | null),
			baseContext: init?.baseContext ?? (null! as context.Context | null),
			outboundHP: init?.outboundHP ?? ("" as string),
			closeNetworkCalled: init?.closeNetworkCalled ? init.closeNetworkCalled.clone() : new atomic.Bool(undefined, true),
			stoppedExchanges: init?.stoppedExchanges ? init.stoppedExchanges.clone() : new atomic.Bool(undefined, true),
			remotePeerAddress: init?.remotePeerAddress ? init.remotePeerAddress.clone() : new peerAddressComponents(undefined, true),
			healthCheckCtx: init?.healthCheckCtx ?? (null! as context.Context | null),
			healthCheckQuit: init?.healthCheckQuit ?? (null! as (() => void) | null),
			healthCheckDone: init?.healthCheckDone ?? (null! as $.Channel<{}> | null),
			healthCheckHistory: init?.healthCheckHistory ?? (null! as __goscript_health.healthHistory | $.VarRef<__goscript_health.healthHistory> | null),
			lastActivityRead: init?.lastActivityRead ? init.lastActivityRead.clone() : new atomic.Int64(undefined, true),
			lastActivityWrite: init?.lastActivityWrite ? init.lastActivityWrite.clone() : new atomic.Int64(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Connection {
		return new Connection(this, true)
	}

	public __goscriptAssign(source: Connection): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.channelConnectionCommon, values.channelConnectionCommon)
		target.connID = values.connID
		target.connDirection = values.connDirection
		$.assignStruct(target.opts, values.opts)
		target.conn = $.assignFieldValue(target.conn, values.conn, "net.Conn")
		target.sysConn = $.assignFieldValue(target.sysConn, values.sysConn, "syscall.RawConn")
		$.assignStruct(target.localPeerInfo, values.localPeerInfo)
		$.assignStruct(target.remotePeerInfo, values.remotePeerInfo)
		target.sendCh = values.sendCh
		target.stopCh = values.stopCh
		target.state = values.state
		$.assignStruct(target.stateMut, values.stateMut)
		target.inbound = values.inbound
		target.outbound = values.outbound
		target.internalHandlers = values.internalHandlers
		target.handler = $.assignFieldValue(target.handler, values.handler, "tchannel.Handler")
		$.assignStruct(target.nextMessageID, values.nextMessageID)
		$.assignStruct(target.events, values.events)
		target.commonStatsTags = values.commonStatsTags
		target.relay = values.relay
		target.baseContext = $.assignFieldValue(target.baseContext, values.baseContext, "context.Context")
		target.outboundHP = values.outboundHP
		$.assignStruct(target.closeNetworkCalled, values.closeNetworkCalled)
		$.assignStruct(target.stoppedExchanges, values.stoppedExchanges)
		$.assignStruct(target.remotePeerAddress, values.remotePeerAddress)
		target.healthCheckCtx = $.assignFieldValue(target.healthCheckCtx, values.healthCheckCtx, "context.Context")
		target.healthCheckQuit = values.healthCheckQuit
		target.healthCheckDone = values.healthCheckDone
		target.healthCheckHistory = values.healthCheckHistory
		$.assignStruct(target.lastActivityRead, values.lastActivityRead)
		$.assignStruct(target.lastActivityWrite, values.lastActivityWrite)
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const c: Connection | $.VarRef<Connection> | null = this;
		return Connection.prototype.close.call(c, $.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "reason", Value: "user initiated"}, true)]))
	}

	public async IntrospectState(opts: __goscript_introspection.IntrospectionOptions | $.VarRef<__goscript_introspection.IntrospectionOptions> | null): globalThis.Promise<__goscript_introspection.ConnectionRuntimeState> {
		const c: Connection | $.VarRef<Connection> | null = this;
		using __defer = new $.DisposableStack()
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		await (c$ as Connection).stateMut.RLock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((c$ as Connection).stateMut), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		let __goscriptTuple0: any = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).sendBufSize() : Connection.prototype.sendBufSize.call(c))
		let sendBufUsage = __goscriptTuple0[0]
		let sendBufSize = __goscriptTuple0[1]

		let state = (await (async () => { const __goscriptLiteralField0 = await __goscript_connectionstate_string.connectionState_String((c$ as Connection).state); const __goscriptLiteralField1 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((c$ as Connection).conn).LocalAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField2 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((c$ as Connection).conn).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField3 = await __goscript_mex.messageExchangeSet.prototype.IntrospectState.call((c$ as Connection).inbound, opts); const __goscriptLiteralField4 = await __goscript_mex.messageExchangeSet.prototype.IntrospectState.call((c$ as Connection).outbound, opts); const __goscriptLiteralField5 = await __goscript_health.healthHistory.prototype.asBools.call((c$ as Connection).healthCheckHistory); const __goscriptLiteralField6 = (c$ as Connection).lastActivityRead.Load(); const __goscriptLiteralField7 = (c$ as Connection).lastActivityWrite.Load(); return new __goscript_introspection.ConnectionRuntimeState({ID: (c$ as Connection).connID, ConnectionState: __goscriptLiteralField0, LocalHostPort: __goscriptLiteralField1, RemoteHostPort: __goscriptLiteralField2, OutboundHostPort: (c$ as Connection).outboundHP, RemotePeer: (c$ as Connection).remotePeerInfo, InboundExchange: __goscriptLiteralField3, OutboundExchange: __goscriptLiteralField4, HealthChecks: __goscriptLiteralField5, LastActivityRead: __goscriptLiteralField6, LastActivityWrite: __goscriptLiteralField7, SendChQueued: $.len((c$ as Connection).sendCh), SendChCapacity: $.cap((c$ as Connection).sendCh), SendBufferUsage: sendBufUsage, SendBufferSize: sendBufSize}, true) })())
		if ((c$ as Connection).relay != null) {
			$.assignStruct(state.Relayer, await __goscript_relay.Relayer.prototype.IntrospectState.call((c$ as Connection).relay, opts))
		}
		return (state).clone()
	}

	public async IsActive(): globalThis.Promise<boolean> {
		const c: Connection | $.VarRef<Connection> | null = this;
		return await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).readState() : Connection.prototype.readState.call(c)) == 1
	}

	public NextMessageID(): number {
		const c: Connection | $.VarRef<Connection> | null = this;
		return $.pointerValue<Connection>(c).nextMessageID.Inc()
	}

	public RemotePeerInfo(): PeerInfo {
		const c: Connection | $.VarRef<Connection> | null = this;
		return ($.pointerValue<Connection>(c).remotePeerInfo).clone()
	}

	public async SendSystemError(id: number, span: __goscript_tracing.Span, err: $.GoError): globalThis.Promise<$.GoError> {
		const c: Connection | $.VarRef<Connection> | null = this;
		let sendErr: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		// Allocate an error frame to be sent over the connection. A nil is
		// returned if the frame was successfully sent, otherwise an error is
		// returned, and we must release the error frame back to the pool.
		let frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null = ((__goscriptAwait = $.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>((c$ as Connection).opts.FramePool).Get(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			if (sendErr != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>((c$ as Connection).opts.FramePool).Release(frame), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		})() })

		let __goscriptShadow0 = err
		{
			let __goscriptShadow1 = __goscript_frame.Frame.prototype.write.call(frame, $.interfaceValue<__goscript_messages.message | null>((await (async () => { const __goscriptLiteralField8 = __goscript_errors.GetSystemErrorCode(__goscriptShadow0); const __goscriptLiteralField9 = await __goscript_errors.GetSystemErrorMessage(__goscriptShadow0); return new __goscript_messages.errorMessage({id: id, errCode: __goscriptLiteralField8, tracing: span, message: __goscriptLiteralField9}) })()), "*tchannel.errorMessage", /* @__PURE__ */ $.pointerType("tchannel.errorMessage")))
			if (__goscriptShadow1 != null) {
				// This shouldn't happen - it means writing the errorMessage is broken.
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "remotePeer", Value: $.interfaceValue(((c$ as Connection).remotePeerInfo).clone(), "tchannel.PeerInfo", "tchannel.PeerInfo")}, true), new __goscript_logger.LogField({Key: "id", Value: $.basicInterfaceValue(id, "uint32")}, true), await __goscript_logger.ErrField(__goscriptShadow1)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Couldn't create outbound frame."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				const __goscriptReturn0: $.GoError = fmt.Errorf("failed to create outbound error frame: %v", (__goscriptShadow1 as any))
				sendErr = __goscriptReturn0
				await __defer.dispose()
				return sendErr
			}
		}

		// When sending errors, we hold the state rlock to ensure that sendCh is not closed
		// as we are sending the frame.
		const __goscriptReturn1: $.GoError = await Connection.prototype.withStateRLock.call(c, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			// Errors cannot be sent if the connection has been closed.
			if ((c$ as Connection).state == 4) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "remotePeer", Value: $.interfaceValue(((c$ as Connection).remotePeerInfo).clone(), "tchannel.PeerInfo", "tchannel.PeerInfo")}, true), new __goscript_logger.LogField({Key: "id", Value: $.basicInterfaceValue(id, "uint32")}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Info("Could not send error frame on closed connection."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return fmt.Errorf("failed to send error frame, connection state %v", $.namedValueInterfaceValue<any>((c$ as Connection).state, "tchannel.connectionState", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
			}

			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, $.GoError>([
				{
					id: 0,
					isSend: true,
					channel: (c$ as Connection).sendCh,
					value: frame,
					onSelected: async (__goscriptSelect0Result) => {
						return null
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
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "remotePeer", Value: $.interfaceValue(((c$ as Connection).remotePeerInfo).clone(), "tchannel.PeerInfo", "tchannel.PeerInfo")}, true), new __goscript_logger.LogField({Key: "id", Value: $.basicInterfaceValue(id, "uint32")}, true), await __goscript_logger.ErrField(err)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Couldn't send outbound frame."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return fmt.Errorf("failed to send error frame, buffer full")
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
		sendErr = __goscriptReturn1
		await __defer.dispose()
		return sendErr
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async beginCall(ctx: context.Context | null, serviceName: string, methodName: string, callOptions: __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null): globalThis.Promise<[__goscript_outbound.OutboundCall | $.VarRef<__goscript_outbound.OutboundCall> | null, $.GoError]> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		let now = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (c$ as Connection).channelConnectionCommon.timeNow!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time)))

		{
			let state = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).readState() : Connection.prototype.readState.call(c))
			switch (state) {
				case 1:
				{
					break
					break
				}
				case 2:
				case 3:
				case 4:
				{
					return [null, ErrConnectionClosed]
					break
				}
				default:
				{
					return [null, $.interfaceValue<$.GoError>(new errConnectionUnknownState({site: "beginCall", state: state}, true), "tchannel.errConnectionUnknownState", "tchannel.errConnectionUnknownState")]
					break
				}
			}
		}

		let [deadline, ok] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context2.Context, null>) : $.pointerValue<Exclude<context2.Context, null>>(ctx)).Deadline()
		if (!ok) {

			return [null, __goscript_errors.ErrTimeoutRequired]
		}
		// PeerVersion contains version related information for a specific peer.
		// These values are extracted from the init headers.

		let timeToLive = $.markAsStructValue($.cloneStructValue(deadline)).Sub($.markAsStructValue($.cloneStructValue(now)))
		if (timeToLive < 1000000n) {
			return [null, __goscript_errors.ErrTimeout]
		}

		{
			let err = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context2.Context, null>) : $.pointerValue<Exclude<context2.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [null, __goscript_errors.GetContextError(err)]
			}
		}

		let requestID = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).NextMessageID() : Connection.prototype.NextMessageID.call(c))
		let __goscriptTuple1: any = await __goscript_mex.messageExchangeSet.prototype.newExchange.call((c$ as Connection).outbound, ctx, $.functionValue(((__receiver) => () => __receiver.outboundCtxCancel())((c$ as Connection)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Connection).outboundCtxCancel-fm"), (c$ as Connection).opts.FramePool, 3, requestID, 2)
		let mex: __goscript_mex.messageExchange | $.VarRef<__goscript_mex.messageExchange> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}

		{
			let state = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).readState() : Connection.prototype.readState.call(c))
			if (state != 1) {
				await (mex !== null && (mex as any).__isVarRef !== true && (mex as any).__goValue === undefined ? ((mex as any) as __goscript_mex.messageExchange).shutdown() : __goscript_mex.messageExchange.prototype.shutdown.call(mex))
				return [null, ErrConnectionClosed]
			}
		}

		let headers: __goscript_messages.transportHeaders = $.makeMap<__goscript_messages.TransportHeaderName, string>([["cn", (c$ as Connection).localPeerInfo.ServiceName]])
		void (callOptions !== null && (callOptions as any).__isVarRef !== true && (callOptions as any).__goValue === undefined ? ((callOptions as any) as __goscript_calloptions.CallOptions).setHeaders(headers) : __goscript_calloptions.CallOptions.prototype.setHeaders.call(callOptions, headers))
		{
			let opts: __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null = await __goscript_context.currentCallOptions(ctx)
			if (opts != null) {
				void (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? ((opts as any) as __goscript_calloptions.CallOptions).overrideHeaders(headers) : __goscript_calloptions.CallOptions.prototype.overrideHeaders.call(opts, headers))
			}
		}

		let call: __goscript_outbound.OutboundCall | $.VarRef<__goscript_outbound.OutboundCall> | null = new __goscript_outbound.OutboundCall()
		let call$: __goscript_outbound.OutboundCall = call == null ? $.pointerTarget<__goscript_outbound.OutboundCall>(call) : (call as any).__isVarRef === true ? (call as any).value : (call as any).__goValue === undefined ? (call as any) : $.pointerTarget<__goscript_outbound.OutboundCall>(call);
		;(call$ as __goscript_outbound.OutboundCall).reqResWriter.mex = mex;
		;(call$ as __goscript_outbound.OutboundCall).reqResWriter.conn = c
		$.assignStruct((call$ as __goscript_outbound.OutboundCall).callReq, new __goscript_messages.callReq({id: requestID, Headers: headers, Service: serviceName, TimeToLive: timeToLive}, true));
		;(call$ as __goscript_outbound.OutboundCall).statsReporter = (c$ as Connection).channelConnectionCommon.statsReporter
		void (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_outbound.OutboundCall).createStatsTags((c$ as Connection).commonStatsTags, callOptions, methodName) : __goscript_outbound.OutboundCall.prototype.createStatsTags.call(call, (c$ as Connection).commonStatsTags, callOptions, methodName));
		;(call$ as __goscript_outbound.OutboundCall).reqResWriter.log = (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "Out-Call", Value: $.basicInterfaceValue(requestID, "uint32")}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);

		;(call$ as __goscript_outbound.OutboundCall).reqResWriter.messageForFragment = $.functionValue((initial: boolean): __goscript_messages.message | null => {
			if (initial) {
				return $.interfaceValue<__goscript_messages.message | null>($.fieldRef((call$ as __goscript_outbound.OutboundCall)._fields, "callReq"), "*tchannel.callReq", /* @__PURE__ */ $.pointerType("tchannel.callReq"))
			}

			return $.interfaceValue<__goscript_messages.message | null>(new __goscript_messages.callReqContinue(), "*tchannel.callReqContinue", /* @__PURE__ */ $.pointerType("tchannel.callReqContinue"))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("bool")], results: ["tchannel.message"] } as $.FunctionTypeInfo));
		// ErrConnectionNotReady is no longer used.
		;(call$ as __goscript_outbound.OutboundCall).reqResWriter.contents = __goscript_fragmenting_writer.newFragmentingWriter((call$ as __goscript_outbound.OutboundCall).reqResWriter.log, $.interfaceValue<__goscript_fragmenting_writer.fragmentSender | null>(call, "*tchannel.OutboundCall", /* @__PURE__ */ $.pointerType("tchannel.OutboundCall")), await __goscript_checksum.ChecksumType_New((c$ as Connection).opts.ChecksumType))

		let response: __goscript_outbound.OutboundCallResponse | $.VarRef<__goscript_outbound.OutboundCallResponse> | null = new __goscript_outbound.OutboundCallResponse()
		let response$: __goscript_outbound.OutboundCallResponse = response == null ? $.pointerTarget<__goscript_outbound.OutboundCallResponse>(response) : (response as any).__isVarRef === true ? (response as any).value : (response as any).__goValue === undefined ? (response as any) : $.pointerTarget<__goscript_outbound.OutboundCallResponse>(response)
		$.assignStruct((response$ as __goscript_outbound.OutboundCallResponse).startedAt, now);
		;(response$ as __goscript_outbound.OutboundCallResponse).timeNow = (c$ as Connection).channelConnectionCommon.timeNow;
		;(response$ as __goscript_outbound.OutboundCallResponse).requestState = $.pointerValue<__goscript_calloptions.CallOptions>(callOptions).RequestState;
		;(response$ as __goscript_outbound.OutboundCallResponse).reqResReader.mex = mex;
		;(response$ as __goscript_outbound.OutboundCallResponse).reqResReader.log = (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "Out-Response", Value: $.basicInterfaceValue(requestID, "uint32")}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(response$ as __goscript_outbound.OutboundCallResponse).span = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).startOutboundSpan(ctx, serviceName, methodName, call, $.markAsStructValue($.cloneStructValue(now))) : Connection.prototype.startOutboundSpan.call(c, ctx, serviceName, methodName, call, $.markAsStructValue($.cloneStructValue(now))));
		;(response$ as __goscript_outbound.OutboundCallResponse).reqResReader.messageForFragment = $.functionValue((initial: boolean): __goscript_messages.message | null => {
			if (initial) {
				return $.interfaceValue<__goscript_messages.message | null>($.fieldRef((response$ as __goscript_outbound.OutboundCallResponse)._fields, "callRes"), "*tchannel.callRes", /* @__PURE__ */ $.pointerType("tchannel.callRes"))
			}

			return $.interfaceValue<__goscript_messages.message | null>(new __goscript_messages.callResContinue(), "*tchannel.callResContinue", /* @__PURE__ */ $.pointerType("tchannel.callResContinue"))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("bool")], results: ["tchannel.message"] } as $.FunctionTypeInfo));
		;(response$ as __goscript_outbound.OutboundCallResponse).reqResReader.contents = __goscript_fragmenting_reader.newFragmentingReader((response$ as __goscript_outbound.OutboundCallResponse).reqResReader.log, $.interfaceValue<__goscript_fragmenting_reader.fragmentReceiver | null>(response, "*tchannel.OutboundCallResponse", /* @__PURE__ */ $.pointerType("tchannel.OutboundCallResponse")));
		;(response$ as __goscript_outbound.OutboundCallResponse).statsReporter = (call$ as __goscript_outbound.OutboundCall).statsReporter;
		;(response$ as __goscript_outbound.OutboundCallResponse).commonStatsTags = (call$ as __goscript_outbound.OutboundCall).commonStatsTags;

		;(call$ as __goscript_outbound.OutboundCall).response = response

		{
			let __goscriptShadow2 = await (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_outbound.OutboundCall).writeMethod($.stringToBytes(methodName)) : __goscript_outbound.OutboundCall.prototype.writeMethod.call(call, $.stringToBytes(methodName)))
			if (__goscriptShadow2 != null) {
				return [null, __goscriptShadow2]
			}
		}
		return [call, null]
	}

	public async callOnActive(): globalThis.Promise<void> {
		let c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		let log = (c$ as Connection).channelConnectionCommon.log
		{
			let remoteVersion = ((c$ as Connection).remotePeerInfo.Version).clone()
			if (!$.structEqual(remoteVersion, (new PeerVersion(undefined, true)))) {
				log = (__goscriptAwait = (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? (log as Exclude<__goscript_logger.Logger, null>) : $.pointerValue<Exclude<__goscript_logger.Logger, null>>(log)).WithFields(($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "remotePeerLanguage", Value: remoteVersion.Language}, true), new __goscript_logger.LogField({Key: "remotePeerLanguageVersion", Value: remoteVersion.LanguageVersion}, true), new __goscript_logger.LogField({Key: "remotePeerTChannelVersion", Value: remoteVersion.TChannelVersion}, true)]) as $.Slice<__goscript_logger.LogField>)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		void (__goscriptAwait = (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? (log as Exclude<__goscript_logger.Logger, null>) : $.pointerValue<Exclude<__goscript_logger.Logger, null>>(log)).Debug("Created new active connection."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		{
			let f: ((c: Connection | $.VarRef<Connection> | null) => void) | null = (c$ as Connection).events.OnActive
			if (f != null) {
				void (__goscriptAwait = f!(c), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		if ((c$ as Connection).opts.HealthChecks.enabled()) {
			let __goscriptTuple2: any = context.WithCancel(context.Background());
			;(c$ as Connection).healthCheckCtx = __goscriptTuple2[0];
			;(c$ as Connection).healthCheckQuit = __goscriptTuple2[1];
			;(c$ as Connection).healthCheckDone = $.makeChannel<{}>(0, {}, "both")
			const __goscriptDeferCallee1 = $.functionValue(((__receiver) => (connID: number) => __receiver.healthCheck(connID))((c$ as Connection)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint32")], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Connection).healthCheck-fm")
			const __goscriptDeferArg0 = (c$ as Connection).connID
			queueMicrotask(async () => { await __goscriptDeferCallee1(__goscriptDeferArg0) })
		}
	}

	public async callOnCloseStateChange(): globalThis.Promise<void> {
		const c: Connection | $.VarRef<Connection> | null = this;
		{
			let f: ((c: Connection | $.VarRef<Connection> | null) => void) | null = $.pointerValue<Connection>(c).events.OnCloseStateChange
			if (f != null) {
				void (__goscriptAwait = f!(c), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	}

	public async callOnExchangeChange(): globalThis.Promise<void> {
		const c: Connection | $.VarRef<Connection> | null = this;
		{
			let f: ((c: Connection | $.VarRef<Connection> | null) => void) | null = $.pointerValue<Connection>(c).events.OnExchangeUpdated
			if (f != null) {
				void (__goscriptAwait = f!(c), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	}

	public async checkExchanges(): globalThis.Promise<void> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).callOnExchangeChange() : Connection.prototype.callOnExchangeChange.call(c))

		let moveState: ((fromState: connectionState, toState: connectionState) => boolean | globalThis.Promise<boolean>) | null = $.functionValue(async (fromState: connectionState, toState: connectionState): globalThis.Promise<boolean> => {
			let err = await Connection.prototype.withStateLock.call(c, $.functionValue((): $.GoError => {
				if ((c$ as Connection).state != fromState) {
					return errors.New("")
				}
				;(c$ as Connection).state = toState
				return null
			}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
			return err == null
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int", "tchannel.connectionState"), /* @__PURE__ */ $.basicType("int", "tchannel.connectionState")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))

		let curState = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).readState() : Connection.prototype.readState.call(c))
		let origState = curState

		if ((curState != 4) && (c$ as Connection).stoppedExchanges.Load()) {
			if ((__goscriptAwait = moveState!(curState, 4), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				curState = 4
			}
		}

		if (curState == 2) {
			if (!__goscript_relay.Relayer.prototype.canClose.call((c$ as Connection).relay)) {
				return
			}
			if ((await __goscript_mex.messageExchangeSet.prototype.count.call((c$ as Connection).inbound) == 0) && (__goscriptAwait = moveState!(2, 3), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				curState = 3
			}
		}

		if (curState == 3) {
			// Safety check -- this should never happen since we already did the check
			// when transitioning to connectionInboundClosed.
			if (!__goscript_relay.Relayer.prototype.canClose.call((c$ as Connection).relay)) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>($.pointerValue<__goscript_relay.Relayer>((c$ as Connection).relay).logger).Error("Relay can't close even though state is InboundClosed."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return
			}

			if ((await __goscript_mex.messageExchangeSet.prototype.count.call((c$ as Connection).outbound) == 0) && (__goscriptAwait = moveState!(3, 4), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				curState = 4
			}
		}

		if (curState != origState) {
			// If the connection is closed, we can notify writeFrames to stop which
			// closes the underlying network connection. We never close sendCh to avoid
			// races causing panics, see 93ef5c112c8b321367ae52d2bd79396e2e874f31
			if (curState == 4) {
				void (c$ as Connection).stopCh!.close()
			}

			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "newState", Value: $.namedValueInterfaceValue<any>(curState, "tchannel.connectionState", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Debug("Connection state updated during shutdown."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).callOnCloseStateChange() : Connection.prototype.callOnCloseStateChange.call(c))
		}
	}

	public async close(fields: $.Slice<__goscript_logger.LogField>): globalThis.Promise<$.GoError> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields(fields), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Debug("Connection closing."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		// Update the state which will start blocking incoming calls.
		{
			let err = await Connection.prototype.withStateLock.call(c, $.functionValue((): $.GoError => {
				{
					let s = (c$ as Connection).state
					switch (s) {
						case 1:
						{
							;(c$ as Connection).state = 2
							break
						}
						default:
						{
							return fmt.Errorf("connection must be Active to Close, but it is %v", $.namedValueInterfaceValue<any>(s, "tchannel.connectionState", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
							break
						}
					}
				}
				return null
			}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
			if (err != null) {
				return err
			}
		}

		// Set a read deadline with any close timeout. This will cause a i/o timeout
		// if the connection isn't closed by then.
		if ((c$ as Connection).opts.MaxCloseTime > 0n) {
			void (__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((c$ as Connection).conn).SetReadDeadline($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (c$ as Connection).channelConnectionCommon.timeNow!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).Add((c$ as Connection).opts.MaxCloseTime)))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([(await (async () => { const __goscriptLiteralField10 = $.namedValueInterfaceValue<any>(await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).readState() : Connection.prototype.readState.call(c)), "tchannel.connectionState", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()); return new __goscript_logger.LogField({Key: "newState", Value: __goscriptLiteralField10}, true) })())])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Debug("Connection state updated in Close."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).callOnCloseStateChange() : Connection.prototype.callOnCloseStateChange.call(c))

		// Check all in-flight requests to see whether we can transition the Close state.
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).checkExchanges() : Connection.prototype.checkExchanges.call(c))

		return null
	}

	public async closeNetwork(): globalThis.Promise<void> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		// NB(mmihic): The sender goroutine will exit once the connection is
		// closed; no need to close the send channel (and closing the send
		// channel would be dangerous since other goroutine might be sending)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).Debugf("Closing underlying network connection", null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).stopHealthCheck() : Connection.prototype.stopHealthCheck.call(c))
		void (c$ as Connection).closeNetworkCalled.Store(true)
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((c$ as Connection).conn).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "remotePeer", Value: $.interfaceValue(((c$ as Connection).remotePeerInfo).clone(), "tchannel.PeerInfo", "tchannel.PeerInfo")}, true), await __goscript_logger.ErrField(err)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Couldn't close connection to peer."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	}

	public async connectionError(site: string, err: $.GoError): globalThis.Promise<$.GoError> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		let closeLogFields: __goscript_logger.LogFields = null! as __goscript_logger.LogFields
		if ($.comparableEqual(err, io.EOF)) {
			closeLogFields = ($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "reason", Value: "network connection EOF"}, true)]) as __goscript_logger.LogFields)
		} else {
			closeLogFields = ($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "reason", Value: "connection error"}, true), await __goscript_logger.ErrField(err)]) as __goscript_logger.LogFields)
		}

		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).stopHealthCheck() : Connection.prototype.stopHealthCheck.call(c))
		err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).logConnectionError(site, err) : Connection.prototype.logConnectionError.call(c, site, err))
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).close((closeLogFields as $.Slice<__goscript_logger.LogField>)) : Connection.prototype.close.call(c, (closeLogFields as $.Slice<__goscript_logger.LogField>)))

		// On any connection error, notify the exchanges of this error.
		if ((c$ as Connection).stoppedExchanges.CAS(false, true)) {
			await __goscript_mex.messageExchangeSet.prototype.stopExchanges.call((c$ as Connection).outbound, err)
			await __goscript_mex.messageExchangeSet.prototype.stopExchanges.call((c$ as Connection).inbound, err)
		}

		// checkExchanges will close the connection due to stoppedExchanges.
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).checkExchanges() : Connection.prototype.checkExchanges.call(c))
		return err
	}

	public async dispatchInbound(_p0: number, _p1: number, call: __goscript_inbound.InboundCall | $.VarRef<__goscript_inbound.InboundCall> | null, frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<void> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		const call$: __goscript_inbound.InboundCall = call == null ? $.pointerTarget<__goscript_inbound.InboundCall>(call) : (call as any).__isVarRef === true ? (call as any).value : (call as any).__goValue === undefined ? (call as any) : $.pointerTarget<__goscript_inbound.InboundCall>(call)
		if ((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((call$ as __goscript_inbound.InboundCall).reqResReader.log).Enabled(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((call$ as __goscript_inbound.InboundCall).reqResReader.log).Debugf("Received incoming call for %s from %s", $.arrayToSlice<any>([(call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).ServiceName() : __goscript_inbound.InboundCall.prototype.ServiceName.call(call)), $.interfaceValue(((c$ as Connection).remotePeerInfo).clone(), "tchannel.PeerInfo", "tchannel.PeerInfo")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		// OnCloseStateChange is called when a connection that is closing changes state.
		{
			let err = await (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).readMethod() : __goscript_inbound.InboundCall.prototype.readMethod.call(call))
			if (err != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((call$ as __goscript_inbound.InboundCall).reqResReader.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "remotePeer", Value: $.interfaceValue(((c$ as Connection).remotePeerInfo).clone(), "tchannel.PeerInfo", "tchannel.PeerInfo")}, true), await __goscript_logger.ErrField(err)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Error("Couldn't read method."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>((c$ as Connection).opts.FramePool).Release(frame), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return
			}
		}

		$.mapSet((call$ as __goscript_inbound.InboundCall).commonStatsTags, "endpoint", (call$ as __goscript_inbound.InboundCall).methodString)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_stats.StatsReporter, null>>((call$ as __goscript_inbound.InboundCall).statsReporter).IncCounter("inbound.calls.recvd", (call$ as __goscript_inbound.InboundCall).commonStatsTags, 1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		{
			let span = $.pointerValue<__goscript_inbound.InboundCallResponse>((call$ as __goscript_inbound.InboundCall).response).span
			if (span != null) {
				void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).SetOperationName((call$ as __goscript_inbound.InboundCall).methodString), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		// may be nil if conn cannot be converted

		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: ((__goscriptAwait = $.pointerValue<Exclude<context2.Context, null>>($.pointerValue<__goscript_mex.messageExchange>((call$ as __goscript_inbound.InboundCall).reqResReader.mex).ctx).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
					onSelected: async (__goscriptSelect1Result) => {
						if ((__goscriptAwait = $.pointerValue<Exclude<context2.Context, null>>($.pointerValue<__goscript_mex.messageExchange>((call$ as __goscript_inbound.InboundCall).reqResReader.mex).ctx).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) {
							await __goscript_mex.messageExchange.prototype.inboundExpired.call((call$ as __goscript_inbound.InboundCall).reqResReader.mex)
						}
					}
				},
				{
					id: 1,
					isSend: false,
					channel: $.pointerValue<__goscript_mex.messageExchange>((call$ as __goscript_inbound.InboundCall).reqResReader.mex).errCh.c,
					onSelected: async (__goscriptSelect1Result) => {
						if ((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).Enabled(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
							void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((call$ as __goscript_inbound.InboundCall).reqResReader.log).Debugf("Wait for timeout/cancellation interrupted by error: %v", $.arrayToSlice<any>([($.pointerValue<__goscript_mex.messageExchange>((call$ as __goscript_inbound.InboundCall).reqResReader.mex).errCh.err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}

						void (__goscriptAwait = $.pointerValue<__goscript_inbound.InboundCallResponse>((call$ as __goscript_inbound.InboundCall).response).cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						await __goscript_mex.messageExchange.prototype.inboundExpired.call((call$ as __goscript_inbound.InboundCall).reqResReader.mex)
					}
				}
			], false)
			if (__goscriptSelect1HasReturn) {
				return __goscriptSelect1Value
			}
		})() })

		// stoppedExchanges is atomically set when exchanges are stopped due to error.
		if ($.stringEqual((call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).ServiceName() : __goscript_inbound.InboundCall.prototype.ServiceName.call(call)), "tchannel")) {
			{
				let h = await __goscript_handlers.handlerMap.prototype.find.call((c$ as Connection).internalHandlers, (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).Method() : __goscript_inbound.InboundCall.prototype.Method.call(call)))
				if (h != null) {
					void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_handlers.Handler, null>) : $.pointerValue<Exclude<__goscript_handlers.Handler, null>>(h)).Handle($.pointerValue<__goscript_mex.messageExchange>((call$ as __goscript_inbound.InboundCall).reqResReader.mex).ctx, call), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					return
				}
			}
		}

		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_handlers.Handler, null>>((c$ as Connection).handler).Handle($.pointerValue<__goscript_mex.messageExchange>((call$ as __goscript_inbound.InboundCall).reqResReader.mex).ctx, call), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async extractInboundSpan(callReq: __goscript_messages.callReq | $.VarRef<__goscript_messages.callReq> | null): globalThis.Promise<opentracing.Span | null> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const callReq$: __goscript_messages.callReq = callReq == null ? $.pointerTarget<__goscript_messages.callReq>(callReq) : (callReq as any).__isVarRef === true ? (callReq as any).value : (callReq as any).__goValue === undefined ? (callReq as any) : $.pointerTarget<__goscript_messages.callReq>(callReq)
		let [spanCtx, err] = await $.pointerValue<Exclude<opentracing.Tracer, null>>($.pointerValue<Connection>(c).channelConnectionCommon.Tracer()).Extract("zipkin-span-format", $.interfaceValue($.fieldRef((callReq$ as __goscript_messages.callReq)._fields, "Tracing"), "*tchannel.Span", /* @__PURE__ */ $.pointerType("tchannel.Span")))
		if (err != null) {
			if ((!$.comparableEqual(err, opentracing.ErrUnsupportedFormat)) && (!$.comparableEqual(err, opentracing.ErrSpanContextNotFound))) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>($.pointerValue<Connection>(c).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([await __goscript_logger.ErrField(err)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Error("Failed to extract Zipkin-style span."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return null
		}
		if (spanCtx == null) {
			return null
		}
		let operationName = ""
		let span = (__goscriptAwait = $.pointerValue<Exclude<opentracing.Tracer, null>>($.pointerValue<Connection>(c).channelConnectionCommon.Tracer()).StartSpan(operationName, $.arrayToSlice<opentracing.StartSpanOption | null>([ext.RPCServerOption(spanCtx)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).SetTag("as", $.mapGet<__goscript_messages.TransportHeaderName, string, string>((callReq$ as __goscript_messages.callReq).Headers, "as", "")[0]), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await ext.StringTagName_Set(ext.PeerService, span, $.mapGet<__goscript_messages.TransportHeaderName, string, string>((callReq$ as __goscript_messages.callReq).Headers, "cn", "")[0])
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).setPeerHostPort(span) : Connection.prototype.setPeerHostPort.call(c, span))
		return span
	}

	public getLastActivityReadTime(): time.Time {
		const c: Connection | $.VarRef<Connection> | null = this;
		return $.markAsStructValue($.cloneStructValue(time.Unix(0n, $.pointerValue<Connection>(c).lastActivityRead.Load())))
	}

	public getLastActivityWriteTime(): time.Time {
		const c: Connection | $.VarRef<Connection> | null = this;
		return $.markAsStructValue($.cloneStructValue(time.Unix(0n, $.pointerValue<Connection>(c).lastActivityWrite.Load())))
	}

	public async handleCallReq(frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<boolean> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		const frame$: __goscript_frame.Frame = frame == null ? $.pointerTarget<__goscript_frame.Frame>(frame) : (frame as any).__isVarRef === true ? (frame as any).value : (frame as any).__goValue === undefined ? (frame as any) : $.pointerTarget<__goscript_frame.Frame>(frame)
		let now = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (c$ as Connection).channelConnectionCommon.timeNow!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time)))
		{
			let state = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).readState() : Connection.prototype.readState.call(c))
			switch (state) {
				case 1:
				{
					break
					break
				}
				case 2:
				case 3:
				case 4:
				{
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).SendSystemError((frame$ as __goscript_frame.Frame).Header.ID, __goscript_messages.callReqSpan(frame), __goscript_errors.ErrChannelClosed) : Connection.prototype.SendSystemError.call(c, (frame$ as __goscript_frame.Frame).Header.ID, __goscript_messages.callReqSpan(frame), __goscript_errors.ErrChannelClosed))
					return true
					break
				}
				default:
				{
					$.panic((fmt.Errorf("unknown connection state for call req: %v", $.namedValueInterfaceValue<any>(state, "tchannel.connectionState", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())) as any))
					break
				}
			}
		}

		let __goscriptShadow3: __goscript_messages.callReq | $.VarRef<__goscript_messages.callReq> | null = new __goscript_messages.callReq()
		$.pointerValue<__goscript_messages.callReq>(__goscriptShadow3).id = (frame$ as __goscript_frame.Frame).Header.ID
		let __goscriptTuple3: any = __goscript_reqres.parseInboundFragment((c$ as Connection).opts.FramePool, frame, $.interfaceValue<__goscript_messages.message | null>(__goscriptShadow3, "*tchannel.callReq", /* @__PURE__ */ $.pointerType("tchannel.callReq")))
		let initialFragment: __goscript_fragmenting_reader.readableFragment | $.VarRef<__goscript_fragmenting_reader.readableFragment> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err != null) {

			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "header", Value: $.interfaceValue(((frame$ as __goscript_frame.Frame).Header).clone(), "tchannel.FrameHeader", "tchannel.FrameHeader")}, true), await __goscript_logger.ErrField(err)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Error("Couldn't decode initial fragment."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}

		let call: __goscript_inbound.InboundCall | $.VarRef<__goscript_inbound.InboundCall> | null = new __goscript_inbound.InboundCall()
		let call$: __goscript_inbound.InboundCall = call == null ? $.pointerTarget<__goscript_inbound.InboundCall>(call) : (call as any).__isVarRef === true ? (call as any).value : (call as any).__goValue === undefined ? (call as any) : $.pointerTarget<__goscript_inbound.InboundCall>(call);
		;(call$ as __goscript_inbound.InboundCall).conn = c
		let [ctx, cancel] = await __goscript_context.newIncomingContext((c$ as Connection).baseContext, $.interfaceValue<__goscript_context.IncomingCall | null>(call, "*tchannel.InboundCall", /* @__PURE__ */ $.pointerType("tchannel.InboundCall")), $.pointerValue<__goscript_messages.callReq>(__goscriptShadow3).TimeToLive)

		let __goscriptTuple4: any = await __goscript_mex.messageExchangeSet.prototype.newExchange.call((c$ as Connection).inbound, ctx, cancel, (c$ as Connection).opts.FramePool, (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? ((__goscriptShadow3 as any) as __goscript_messages.callReq).messageType() : __goscript_messages.callReq.prototype.messageType.call(__goscriptShadow3)), (frame$ as __goscript_frame.Frame).Header.ID, 2)
		let mex: __goscript_mex.messageExchange | $.VarRef<__goscript_mex.messageExchange> | null = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		let mex$: __goscript_mex.messageExchange = mex == null ? $.pointerTarget<__goscript_mex.messageExchange>(mex) : (mex as any).__isVarRef === true ? (mex as any).value : (mex as any).__goValue === undefined ? (mex as any) : $.pointerTarget<__goscript_mex.messageExchange>(mex)
		if (err != null) {
			if ($.comparableEqual(err, __goscript_mex.errDuplicateMex)) {
				err = __goscript_inbound.errInboundRequestAlreadyActive
			}
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "header", Value: $.interfaceValue(((frame$ as __goscript_frame.Frame).Header).clone(), "tchannel.FrameHeader", "tchannel.FrameHeader")}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Error("Couldn't register exchange."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).protocolError((frame$ as __goscript_frame.Frame).Header.ID, __goscript_inbound.errInboundRequestAlreadyActive) : Connection.prototype.protocolError.call(c, (frame$ as __goscript_frame.Frame).Header.ID, __goscript_inbound.errInboundRequestAlreadyActive))
			return true
		}

		if (await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).readState() : Connection.prototype.readState.call(c)) != 1) {
			await (mex !== null && (mex as any).__isVarRef !== true && (mex as any).__goValue === undefined ? ((mex as any) as __goscript_mex.messageExchange).shutdown() : __goscript_mex.messageExchange.prototype.shutdown.call(mex))
			return true
		}

		let response: __goscript_inbound.InboundCallResponse | $.VarRef<__goscript_inbound.InboundCallResponse> | null = new __goscript_inbound.InboundCallResponse()
		let response$: __goscript_inbound.InboundCallResponse = response == null ? $.pointerTarget<__goscript_inbound.InboundCallResponse>(response) : (response as any).__isVarRef === true ? (response as any).value : (response as any).__goValue === undefined ? (response as any) : $.pointerTarget<__goscript_inbound.InboundCallResponse>(response);
		;(response$ as __goscript_inbound.InboundCallResponse).call = call
		$.assignStruct((response$ as __goscript_inbound.InboundCallResponse).calledAt, now);
		;(response$ as __goscript_inbound.InboundCallResponse).timeNow = (c$ as Connection).channelConnectionCommon.timeNow;
		;(response$ as __goscript_inbound.InboundCallResponse).span = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).extractInboundSpan(__goscriptShadow3) : Connection.prototype.extractInboundSpan.call(c, __goscriptShadow3))
		if ((response$ as __goscript_inbound.InboundCallResponse).span != null) {
			;(mex$ as __goscript_mex.messageExchange).ctx = await opentracing.ContextWithSpan((mex$ as __goscript_mex.messageExchange).ctx, (response$ as __goscript_inbound.InboundCallResponse).span)
		}
		;(response$ as __goscript_inbound.InboundCallResponse).reqResWriter.mex = mex;
		;(response$ as __goscript_inbound.InboundCallResponse).reqResWriter.conn = c;
		;(response$ as __goscript_inbound.InboundCallResponse).cancel = cancel;
		;(response$ as __goscript_inbound.InboundCallResponse).reqResWriter.log = (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([(() => { const __goscriptLiteralField11 = $.basicInterfaceValue((__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? ((__goscriptShadow3 as any) as __goscript_messages.callReq).ID() : __goscript_messages.callReq.prototype.ID.call(__goscriptShadow3)), "uint32"); return new __goscript_logger.LogField({Key: "In-Response", Value: __goscriptLiteralField11}, true) })()])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(response$ as __goscript_inbound.InboundCallResponse).reqResWriter.contents = __goscript_fragmenting_writer.newFragmentingWriter((response$ as __goscript_inbound.InboundCallResponse).reqResWriter.log, $.interfaceValue<__goscript_fragmenting_writer.fragmentSender | null>(response, "*tchannel.InboundCallResponse", /* @__PURE__ */ $.pointerType("tchannel.InboundCallResponse")), await __goscript_checksum.ChecksumType_New($.pointerValue<__goscript_fragmenting_reader.readableFragment>(initialFragment).checksumType));
		;(response$ as __goscript_inbound.InboundCallResponse).headers = $.makeMap<__goscript_messages.TransportHeaderName, string>([]);
		;(response$ as __goscript_inbound.InboundCallResponse).reqResWriter.messageForFragment = $.functionValue((initial: boolean): __goscript_messages.message | null => {
			if (initial) {
				let __goscriptShadow4: __goscript_messages.callRes | $.VarRef<__goscript_messages.callRes> | null = new __goscript_messages.callRes()
				$.pointerValue<__goscript_messages.callRes>(__goscriptShadow4).Headers = (response$ as __goscript_inbound.InboundCallResponse).headers
				$.pointerValue<__goscript_messages.callRes>(__goscriptShadow4).ResponseCode = 0
				if ((response$ as __goscript_inbound.InboundCallResponse).applicationError) {
					$.pointerValue<__goscript_messages.callRes>(__goscriptShadow4).ResponseCode = 1
				}
				return $.interfaceValue<__goscript_messages.message | null>(__goscriptShadow4, "*tchannel.callRes", /* @__PURE__ */ $.pointerType("tchannel.callRes"))
			}

			return $.interfaceValue<__goscript_messages.message | null>(new __goscript_messages.callResContinue(), "*tchannel.callResContinue", /* @__PURE__ */ $.pointerType("tchannel.callResContinue"))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("bool")], results: ["tchannel.message"] } as $.FunctionTypeInfo));

		;(call$ as __goscript_inbound.InboundCall).reqResReader.mex = mex;
		;(call$ as __goscript_inbound.InboundCall).reqResReader.initialFragment = initialFragment;
		;(call$ as __goscript_inbound.InboundCall).serviceName = $.pointerValue<__goscript_messages.callReq>(__goscriptShadow3).Service;
		;(call$ as __goscript_inbound.InboundCall).headers = $.pointerValue<__goscript_messages.callReq>(__goscriptShadow3).Headers;
		;(call$ as __goscript_inbound.InboundCall).response = response;
		;(call$ as __goscript_inbound.InboundCall).reqResReader.log = (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([(() => { const __goscriptLiteralField12 = $.basicInterfaceValue((__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? ((__goscriptShadow3 as any) as __goscript_messages.callReq).ID() : __goscript_messages.callReq.prototype.ID.call(__goscriptShadow3)), "uint32"); return new __goscript_logger.LogField({Key: "In-Call", Value: __goscriptLiteralField12}, true) })()])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(call$ as __goscript_inbound.InboundCall).reqResReader.messageForFragment = $.functionValue((initial: boolean): __goscript_messages.message | null => {
			return $.interfaceValue<__goscript_messages.message | null>(new __goscript_messages.callReqContinue(), "*tchannel.callReqContinue", /* @__PURE__ */ $.pointerType("tchannel.callReqContinue"))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("bool")], results: ["tchannel.message"] } as $.FunctionTypeInfo));
		;(call$ as __goscript_inbound.InboundCall).reqResReader.contents = __goscript_fragmenting_reader.newFragmentingReader((call$ as __goscript_inbound.InboundCall).reqResReader.log, $.interfaceValue<__goscript_fragmenting_reader.fragmentReceiver | null>(call, "*tchannel.InboundCall", /* @__PURE__ */ $.pointerType("tchannel.InboundCall")));
		;(call$ as __goscript_inbound.InboundCall).statsReporter = (c$ as Connection).channelConnectionCommon.statsReporter
		void (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).createStatsTags((c$ as Connection).commonStatsTags) : __goscript_inbound.InboundCall.prototype.createStatsTags.call(call, (c$ as Connection).commonStatsTags));

		;(response$ as __goscript_inbound.InboundCallResponse).statsReporter = (c$ as Connection).channelConnectionCommon.statsReporter;
		;(response$ as __goscript_inbound.InboundCallResponse).commonStatsTags = (call$ as __goscript_inbound.InboundCall).commonStatsTags

		__goscript_calloptions.setResponseHeaders((call$ as __goscript_inbound.InboundCall).headers, (response$ as __goscript_inbound.InboundCallResponse).headers)
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => (_p0: number, _p1: number, call: __goscript_inbound.InboundCall | $.VarRef<__goscript_inbound.InboundCall> | null, frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null) => __receiver.dispatchInbound(_p0, _p1, call, frame))((c$ as Connection)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.pointerType("tchannel.InboundCall"), /* @__PURE__ */ $.pointerType("tchannel.Frame")], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Connection).dispatchInbound-fm")
		const __goscriptDeferArg1 = (c$ as Connection).connID
		const __goscriptDeferArg2 = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? ((__goscriptShadow3 as any) as __goscript_messages.callReq).ID() : __goscript_messages.callReq.prototype.ID.call(__goscriptShadow3))
		const __goscriptDeferArg3 = call
		const __goscriptDeferArg4 = frame
		queueMicrotask(async () => { await __goscriptDeferCallee2(__goscriptDeferArg1, __goscriptDeferArg2, __goscriptDeferArg3, __goscriptDeferArg4) })
		return false
	}

	public async handleCallReqContinue(frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<boolean> {
		const c: Connection | $.VarRef<Connection> | null = this;
		{
			let err = await __goscript_mex.messageExchangeSet.prototype.forwardPeerFrame.call($.pointerValue<Connection>(c).inbound, frame)
			if (err != null) {

				return true
			}
		}
		return false
	}

	public async handleCallRes(frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<boolean> {
		const c: Connection | $.VarRef<Connection> | null = this;
		{
			let err = await __goscript_mex.messageExchangeSet.prototype.forwardPeerFrame.call($.pointerValue<Connection>(c).outbound, frame)
			if (err != null) {
				return true
			}
		}
		return false
	}

	public async handleCallResContinue(frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<boolean> {
		const c: Connection | $.VarRef<Connection> | null = this;
		{
			let err = await __goscript_mex.messageExchangeSet.prototype.forwardPeerFrame.call($.pointerValue<Connection>(c).outbound, frame)
			if (err != null) {
				return true
			}
		}
		return false
	}

	public async handleCancel(frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<boolean> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_stats.StatsReporter, null>>((c$ as Connection).channelConnectionCommon.statsReporter).IncCounter("inbound.cancels.requested", (c$ as Connection).commonStatsTags, 1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		if (!(c$ as Connection).opts.PropagateCancel) {
			if ((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).Enabled(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).Debugf("Ignoring cancel for %v", $.arrayToSlice<any>([$.basicInterfaceValue($.pointerValue<__goscript_frame.Frame>(frame).Header.ID, "uint32")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return true
		}

		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_stats.StatsReporter, null>>((c$ as Connection).channelConnectionCommon.statsReporter).IncCounter("inbound.cancels.honored", (c$ as Connection).commonStatsTags, 1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		await __goscript_mex.messageExchangeSet.prototype.handleCancel.call((c$ as Connection).inbound, frame)
		// MaxCloseTime controls how long we allow a connection to complete pending
		// calls before shutting down. Only used if it is non-zero.
		return true
	}

	public async handleError(frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<boolean> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		const frame$: __goscript_frame.Frame = frame == null ? $.pointerTarget<__goscript_frame.Frame>(frame) : (frame as any).__isVarRef === true ? (frame as any).value : (frame as any).__goValue === undefined ? (frame as any) : $.pointerTarget<__goscript_frame.Frame>(frame)
		let errMsg = $.varRef(new __goscript_messages.errorMessage({id: (frame$ as __goscript_frame.Frame).Header.ID}, true))
		let rbuf: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null = typed.NewReadBuffer((frame !== null && (frame as any).__isVarRef !== true && (frame as any).__goValue === undefined ? ((frame as any) as __goscript_frame.Frame).SizedPayload() : __goscript_frame.Frame.prototype.SizedPayload.call(frame)))
		{
			let err = errMsg.value.read(rbuf)
			if (err != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "remotePeer", Value: $.interfaceValue(((c$ as Connection).remotePeerInfo).clone(), "tchannel.PeerInfo", "tchannel.PeerInfo")}, true), await __goscript_logger.ErrField(err)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Unable to read error frame."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).connectionError("parsing error frame", err) : Connection.prototype.connectionError.call(c, "parsing error frame", err))
				return true
			}
		}

		if (errMsg.value.errCode == 255) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "remotePeer", Value: $.interfaceValue(((c$ as Connection).remotePeerInfo).clone(), "tchannel.PeerInfo", "tchannel.PeerInfo")}, true), new __goscript_logger.LogField({Key: "error", Value: errMsg.value.message}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Peer reported protocol error."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).connectionError("received protocol error", await $.markAsStructValue($.cloneStructValue(errMsg.value)).AsSystemError()) : Connection.prototype.connectionError.call(c, "received protocol error", await $.markAsStructValue($.cloneStructValue(errMsg.value)).AsSystemError()))
			return true
		}

		{
			let err = await __goscript_mex.messageExchangeSet.prototype.forwardPeerFrame.call((c$ as Connection).outbound, frame)
			if (err != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([(await (async () => { const __goscriptLiteralField13 = await $.markAsStructValue($.cloneStructValue((frame$ as __goscript_frame.Frame).Header)).String(); return new __goscript_logger.LogField({Key: "frameHeader", Value: __goscriptLiteralField13}, true) })()), new __goscript_logger.LogField({Key: "id", Value: $.basicInterfaceValue(errMsg.value.id, "uint32")}, true), new __goscript_logger.LogField({Key: "errorMessage", Value: errMsg.value.message}, true), new __goscript_logger.LogField({Key: "errorCode", Value: $.namedValueInterfaceValue<any>(errMsg.value.errCode, "tchannel.SystemErrCode", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())}, true), await __goscript_logger.ErrField(err)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Info("Failed to forward error frame."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return true
			}
		}

		return false
	}

	public async handleFrameNoRelay(frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<boolean> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		const frame$: __goscript_frame.Frame = frame == null ? $.pointerTarget<__goscript_frame.Frame>(frame) : (frame as any).__isVarRef === true ? (frame as any).value : (frame as any).__goValue === undefined ? (frame as any) : $.pointerTarget<__goscript_frame.Frame>(frame)
		let releaseFrame = true

		// call req and call res messages may not want the frame released immediately.
		switch ((frame$ as __goscript_frame.Frame).Header.messageType) {
			case 3:
			{
				releaseFrame = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).handleCallReq(frame) : Connection.prototype.handleCallReq.call(c, frame))
				break
			}
			case 19:
			{
				releaseFrame = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).handleCallReqContinue(frame) : Connection.prototype.handleCallReqContinue.call(c, frame))
				break
			}
			case 4:
			{
				releaseFrame = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).handleCallRes(frame) : Connection.prototype.handleCallRes.call(c, frame))
				break
			}
			case 20:
			{
				releaseFrame = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).handleCallResContinue(frame) : Connection.prototype.handleCallResContinue.call(c, frame))
				break
			}
			case 208:
			{
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).handlePingReq(frame) : Connection.prototype.handlePingReq.call(c, frame))
				break
			}
			case 209:
			{
				releaseFrame = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).handlePingRes(frame) : Connection.prototype.handlePingRes.call(c, frame))
				break
			}
			case 255:
			{
				releaseFrame = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).handleError(frame) : Connection.prototype.handleError.call(c, frame))
				break
			}
			case 192:
			{
				releaseFrame = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).handleCancel(frame) : Connection.prototype.handleCancel.call(c, frame))
				break
			}
			default:
			{
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "header", Value: $.interfaceValue(((frame$ as __goscript_frame.Frame).Header).clone(), "tchannel.FrameHeader", "tchannel.FrameHeader")}, true), new __goscript_logger.LogField({Key: "remotePeer", Value: $.interfaceValue(((c$ as Connection).remotePeerInfo).clone(), "tchannel.PeerInfo", "tchannel.PeerInfo")}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Error("Received unexpected frame."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
		}

		return releaseFrame
	}

	public async handleFrameRelay(frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<boolean> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		const frame$: __goscript_frame.Frame = frame == null ? $.pointerTarget<__goscript_frame.Frame>(frame) : (frame as any).__isVarRef === true ? (frame as any).value : (frame as any).__goValue === undefined ? (frame as any) : $.pointerTarget<__goscript_frame.Frame>(frame)
		if (((frame$ as __goscript_frame.Frame).Header.messageType == 192) && !(c$ as Connection).opts.PropagateCancel) {
			// If cancel propagation is disabled, don't do anything for this frame.
			if ((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).Enabled(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).Debugf("Ignoring cancel in relay for %v", $.arrayToSlice<any>([$.basicInterfaceValue((frame$ as __goscript_frame.Frame).Header.ID, "uint32")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return true
		}

		{
			let msgType = (frame$ as __goscript_frame.Frame).Header.messageType
			switch (msgType) {
				case 3:
				case 19:
				case 4:
				case 20:
				case 255:
				case 192:
				{
					let [shouldRelease, err] = await __goscript_relay.Relayer.prototype.Relay.call((c$ as Connection).relay, frame)
					if (err != null) {
						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([await __goscript_logger.ErrField(err), new __goscript_logger.LogField({Key: "header", Value: $.interfaceValue(((frame$ as __goscript_frame.Frame).Header).clone(), "tchannel.FrameHeader", "tchannel.FrameHeader")}, true), new __goscript_logger.LogField({Key: "remotePeer", Value: $.interfaceValue(((c$ as Connection).remotePeerInfo).clone(), "tchannel.PeerInfo", "tchannel.PeerInfo")}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Error("Failed to relay frame."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return shouldRelease
					break
				}
				default:
				{
					return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).handleFrameNoRelay(frame) : Connection.prototype.handleFrameNoRelay.call(c, frame))
					break
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async handlePingReq(frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<void> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const frame$: __goscript_frame.Frame = frame == null ? $.pointerTarget<__goscript_frame.Frame>(frame) : (frame as any).__isVarRef === true ? (frame as any).value : (frame as any).__goValue === undefined ? (frame as any) : $.pointerTarget<__goscript_frame.Frame>(frame)
		{
			let state = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).readState() : Connection.prototype.readState.call(c))
			if (state != 1) {
				await Connection.prototype.protocolError.call(c, (frame$ as __goscript_frame.Frame).Header.ID, $.interfaceValue<$.GoError>(new __goscript_errors.errConnNotActive({info: "ping on incoming", state: state}, true), "tchannel.errConnNotActive", "tchannel.errConnNotActive"))
				return
			}
		}

		let __goscriptShadow5: __goscript_messages.pingRes | $.VarRef<__goscript_messages.pingRes> | null = new __goscript_messages.pingRes({id: (frame$ as __goscript_frame.Frame).Header.ID})
		{
			let err = await Connection.prototype.sendMessage.call(c, $.interfaceValue<__goscript_messages.message | null>(__goscriptShadow5, "*tchannel.pingRes", /* @__PURE__ */ $.pointerType("tchannel.pingRes")))
			if (err != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).connectionError("send pong", err) : Connection.prototype.connectionError.call(c, "send pong", err))
			}
		}
	}

	public async handlePingRes(frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<boolean> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		{
			let err = await __goscript_mex.messageExchangeSet.prototype.forwardPeerFrame.call((c$ as Connection).outbound, frame)
			if (err != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "response", Value: $.interfaceValue(($.pointerValue<__goscript_frame.Frame>(frame).Header).clone(), "tchannel.FrameHeader", "tchannel.FrameHeader")}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Unexpected ping response."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return true
			}
		}
		// ping req is waiting for this frame, and will release it.
		return false
	}

	public async hasPendingCalls(): globalThis.Promise<boolean> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		if ((await __goscript_mex.messageExchangeSet.prototype.count.call((c$ as Connection).inbound) > 0) || (await __goscript_mex.messageExchangeSet.prototype.count.call((c$ as Connection).outbound) > 0)) {
			return true
		}
		if (!__goscript_relay.Relayer.prototype.canClose.call((c$ as Connection).relay)) {
			return true
		}

		return false
	}

	public async healthCheck(connID: number): globalThis.Promise<void> {
		const c: Connection | $.VarRef<Connection> | null = this;
		using __defer = new $.DisposableStack()
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		const __goscriptDeferArg5 = (c$ as Connection).healthCheckDone
		__defer.defer(() => { __goscriptDeferArg5!.close() })

		let opts = ((c$ as Connection).opts.HealthChecks).clone()

		let ticker: time.Ticker | $.VarRef<time.Ticker> | null = ((__goscriptAwait = (c$ as Connection).channelConnectionCommon.timeTicker!(opts.Interval), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Ticker | $.VarRef<time.Ticker> | null)
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Stop())($.pointerValue<time.Ticker>(ticker)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "time.(*Ticker).Stop-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })

		let consecutiveFailures = 0
		while (true) {
			const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: $.pointerValue<time.Ticker>(ticker).C,
				},
				{
					id: 1,
					isSend: false,
					channel: ((__goscriptAwait = $.pointerValue<Exclude<context2.Context, null>>((c$ as Connection).healthCheckCtx).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
					onSelected: async (__goscriptSelect2Result) => {
						return $.selectVoidReturn()
					}
				}
			], false)
			if (__goscriptSelect2HasReturn) {
				return __goscriptSelect2Value
			}

			let [ctx, cancel] = context.WithTimeout((c$ as Connection).healthCheckCtx, opts.Timeout)
			let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).ping(ctx) : Connection.prototype.ping.call(c, ctx))
			void (__goscriptAwait = cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await __goscript_health.healthHistory.prototype.add.call((c$ as Connection).healthCheckHistory, err == null)
			if (err == null) {
				if ((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).Enabled(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).Debug("Performed successful active health check."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				consecutiveFailures = 0
				continue
			}

			// NOTE: This is deprecated and not used for anything.

			if ((__goscript_errors.GetSystemErrorCode(err) == 2) || ($.comparableEqual(err, (await __goscript_peer.__goscript_init_ErrInvalidConnectionState(), __goscript_peer.__goscript_get_ErrInvalidConnectionState())))) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([await __goscript_logger.ErrField(err)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Debug("Health checker stopped."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return
			}

			consecutiveFailures++
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields(($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "consecutiveFailures", Value: $.basicInterfaceValue(consecutiveFailures, "int")}, true), await __goscript_logger.ErrField(err), new __goscript_logger.LogField({Key: "failuresToClose", Value: $.basicInterfaceValue(opts.FailuresToClose, "int")}, true)]) as $.Slice<__goscript_logger.LogField>)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Failed active health check."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			// ToS class name marked on outbound packets.
			if (consecutiveFailures >= opts.FailuresToClose) {
				await Connection.prototype.close.call(c, ($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "reason", Value: "health check failure"}, true), await __goscript_logger.ErrField(err)]) as $.Slice<__goscript_logger.LogField>))
				return
			}
		}
	}

	public async logConnectionError(site: string, err: $.GoError): globalThis.Promise<$.GoError> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		let errCode = 7
		if ($.comparableEqual(err, io.EOF)) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).Debugf("Connection got EOF", null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			let logger = (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "site", Value: site}, true), await __goscript_logger.ErrField(err)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

			{
				let [se, ok] = $.typeAssertTuple<__goscript_errors.SystemError>(err, "tchannel.SystemError")
				if (ok && (se.Code() != 7)) {
					errCode = se.Code()
					void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<__goscript_logger.Logger, null>) : $.pointerValue<Exclude<__goscript_logger.Logger, null>>(logger)).Error("Connection error."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				} else {
					{
						let [ne, __goscriptShadow6] = $.typeAssertTuple<net.Error | null>(err, "net.Error")
						if (__goscriptShadow6 && (__goscriptAwait = (ne !== null && (ne as any).__isVarRef !== true && (ne as any).__goValue === undefined ? (ne as Exclude<net.Error, null>) : $.pointerValue<Exclude<net.Error, null>>(ne)).Timeout(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
							void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<__goscript_logger.Logger, null>) : $.pointerValue<Exclude<__goscript_logger.Logger, null>>(logger)).Warn("Connection error due to timeout."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						} else {
							void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<__goscript_logger.Logger, null>) : $.pointerValue<Exclude<__goscript_logger.Logger, null>>(logger)).Info("Connection error."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
					}
				}
			}
		}
		return __goscript_errors.NewWrappedSystemError(errCode, err)
	}

	public async onCancel(msgID: number): globalThis.Promise<void> {
		const c: Connection | $.VarRef<Connection> | null = this;
		if (!$.pointerValue<Connection>(c).opts.SendCancelOnContextCanceled) {
			return
		}

		let cancelMsg: __goscript_messages.cancelMessage | $.VarRef<__goscript_messages.cancelMessage> | null = (await (async () => { const __goscriptLiteralField14 = (__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>(__goscript_errors.ErrRequestCancelled).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_messages.cancelMessage({id: msgID, message: __goscriptLiteralField14}) })())
		{
			let err = await Connection.prototype.sendMessage.call(c, $.interfaceValue<__goscript_messages.message | null>(cancelMsg, "*tchannel.cancelMessage", /* @__PURE__ */ $.pointerType("tchannel.cancelMessage")))
			if (err != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).connectionError("send cancel", err) : Connection.prototype.connectionError.call(c, "send cancel", err))
			}
		}
	}

	public async onExchangeAdded(): globalThis.Promise<void> {
		const c: Connection | $.VarRef<Connection> | null = this;
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).callOnExchangeChange() : Connection.prototype.callOnExchangeChange.call(c))
	}

	public async outboundCtxCancel(): globalThis.Promise<void> {
		const c: Connection | $.VarRef<Connection> | null = this;

		// The size of send channel buffers. Defaults to 512.
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>($.pointerValue<Connection>(c).channelConnectionCommon.log).Debug("unexpected cancel of outbound context"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async ping(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const c: Connection | $.VarRef<Connection> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		let req: __goscript_messages.pingReq | $.VarRef<__goscript_messages.pingReq> | null = (() => { const __goscriptLiteralField15 = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).NextMessageID() : Connection.prototype.NextMessageID.call(c)); return new __goscript_messages.pingReq({id: __goscriptLiteralField15}) })()
		let __goscriptTuple5: any = await __goscript_mex.messageExchangeSet.prototype.newExchange.call((c$ as Connection).outbound, ctx, $.functionValue(((__receiver) => () => __receiver.outboundCtxCancel())((c$ as Connection)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Connection).outboundCtxCancel-fm"), (c$ as Connection).opts.FramePool, (req !== null && (req as any).__isVarRef !== true && (req as any).__goValue === undefined ? ((req as any) as __goscript_messages.pingReq).messageType() : __goscript_messages.pingReq.prototype.messageType.call(req)), (req !== null && (req as any).__isVarRef !== true && (req as any).__goValue === undefined ? ((req as any) as __goscript_messages.pingReq).ID() : __goscript_messages.pingReq.prototype.ID.call(req)), 1)
		let mex: __goscript_mex.messageExchange | $.VarRef<__goscript_mex.messageExchange> | null = __goscriptTuple5[0]
		let err = __goscriptTuple5[1]
		if (err != null) {
			return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).connectionError("create ping exchange", err) : Connection.prototype.connectionError.call(c, "create ping exchange", err))
		}
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => (msgID: number) => __receiver.removeExchange(msgID))($.pointerValue<__goscript_mex.messageExchangeSet>((c$ as Connection).outbound)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint32")], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*messageExchangeSet).removeExchange-fm")
		const __goscriptDeferArg6 = (req !== null && (req as any).__isVarRef !== true && (req as any).__goValue === undefined ? ((req as any) as __goscript_messages.pingReq).ID() : __goscript_messages.pingReq.prototype.ID.call(req))
		__defer.defer(async () => { await __goscriptDeferCallee4(__goscriptDeferArg6) })

		{
			let __goscriptShadow7 = await Connection.prototype.sendMessage.call(c, $.interfaceValue<__goscript_messages.message | null>(req, "*tchannel.pingReq", /* @__PURE__ */ $.pointerType("tchannel.pingReq")))
			if (__goscriptShadow7 != null) {
				return await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).connectionError("send ping", __goscriptShadow7) : Connection.prototype.connectionError.call(c, "send ping", __goscriptShadow7))
			}
		}

		return await Connection.prototype.recvMessage.call(c, ctx, $.interfaceValue<__goscript_messages.message | null>(new __goscript_messages.pingRes(), "*tchannel.pingRes", /* @__PURE__ */ $.pointerType("tchannel.pingRes")), mex)
	}

	public async protocolError(id: number, err: $.GoError): globalThis.Promise<$.GoError> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([await __goscript_logger.ErrField(err)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Protocol error."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let sysErr = await __goscript_errors.NewWrappedSystemError(255, err)
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).SendSystemError(id, new __goscript_tracing.Span(undefined, true), sysErr) : Connection.prototype.SendSystemError.call(c, id, new __goscript_tracing.Span(undefined, true), sysErr))
		// Don't close the connection until the error has been sent.
		await Connection.prototype.close.call(c, $.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "reason", Value: "protocol error"}, true), await __goscript_logger.ErrField(err)]))

		// On any connection error, notify the exchanges of this error.
		if ((c$ as Connection).stoppedExchanges.CAS(false, true)) {
			await __goscript_mex.messageExchangeSet.prototype.stopExchanges.call((c$ as Connection).outbound, sysErr)
			await __goscript_mex.messageExchangeSet.prototype.stopExchanges.call((c$ as Connection).inbound, sysErr)
		}
		return sysErr
	}

	public async readFrames(_p0: number): globalThis.Promise<void> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		let headerBuf: $.Slice<number> = $.makeSlice<number>(16, undefined, "byte")

		let handleErr: ((err: $.GoError) => void) | null = $.functionValue(async (err: $.GoError): globalThis.Promise<void> => {
			if (!(c$ as Connection).closeNetworkCalled.Load()) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).connectionError("read frames", err) : Connection.prototype.connectionError.call(c, "read frames", err))
			} else {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).Debugf("Ignoring error after connection was closed: %v", $.arrayToSlice<any>([(err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}, ({ kind: $.TypeKind.Function, params: ["error"], results: [] } as $.FunctionTypeInfo))

		while (true) {
			// Read the header, avoid allocating the frame till we know the size
			// we need to allocate.
			{
				let [, err] = await io.ReadFull($.pointerValueOrNil(((c$ as Connection).conn as io.Reader | null))!, headerBuf)
				if (err != null) {
					void (__goscriptAwait = handleErr!(err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					return
				}
			}

			let frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null = ((__goscriptAwait = $.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>((c$ as Connection).opts.FramePool).Get(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null)
			{
				let err = await (frame !== null && (frame as any).__isVarRef !== true && (frame as any).__goValue === undefined ? ((frame as any) as __goscript_frame.Frame).ReadBody(headerBuf, ((c$ as Connection).conn as io.Reader | null)) : __goscript_frame.Frame.prototype.ReadBody.call(frame, headerBuf, ((c$ as Connection).conn as io.Reader | null)))
				if (err != null) {
					void (__goscriptAwait = handleErr!(err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>((c$ as Connection).opts.FramePool).Release(frame), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					return
				}
			}

			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).updateLastActivityRead(frame) : Connection.prototype.updateLastActivityRead.call(c, frame))

			let releaseFrame: boolean = false
			if ((c$ as Connection).relay == null) {
				releaseFrame = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).handleFrameNoRelay(frame) : Connection.prototype.handleFrameNoRelay.call(c, frame))
			} else {
				releaseFrame = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).handleFrameRelay(frame) : Connection.prototype.handleFrameRelay.call(c, frame))
			}
			if (releaseFrame) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>((c$ as Connection).opts.FramePool).Release(frame), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	}

	public async readState(): globalThis.Promise<connectionState> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		await (c$ as Connection).stateMut.RLock()
		let state = (c$ as Connection).state
		void (c$ as Connection).stateMut.RUnlock()
		return state
	}

	public async recvMessage(ctx: context.Context | null, msg: __goscript_messages.message | null, mex: __goscript_mex.messageExchange | $.VarRef<__goscript_mex.messageExchange> | null): globalThis.Promise<$.GoError> {
		const c: Connection | $.VarRef<Connection> | null = this;
		let __goscriptTuple6: any = await __goscript_mex.messageExchange.prototype.recvPeerFrameOfType.call(mex, (__goscriptAwait = (msg !== null && (msg as any).__isVarRef !== true && (msg as any).__goValue === undefined ? (msg as Exclude<__goscript_messages.message, null>) : $.pointerValue<Exclude<__goscript_messages.message, null>>(msg)).messageType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		let frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null = __goscriptTuple6[0]
		let err = __goscriptTuple6[1]
		if (err != null) {
			let __goscriptShadow8 = err
			{
				let __goscriptTuple7: any = $.typeAssertTuple<__goscript_messages.errorMessage>(__goscriptShadow8, "tchannel.errorMessage")
				let __goscriptShadow9 = __goscriptTuple7[0]
				let ok = __goscriptTuple7[1]
				if (ok) {
					return __goscriptShadow9.AsSystemError()
				}
			}
			return err
		}

		err = (frame !== null && (frame as any).__isVarRef !== true && (frame as any).__goValue === undefined ? ((frame as any) as __goscript_frame.Frame).read(msg) : __goscript_frame.Frame.prototype.read.call(frame, msg))
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>($.pointerValue<Connection>(c).opts.FramePool).Release(frame), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public sendBufSize(): [number, number, $.GoError] {
		const c: Connection | $.VarRef<Connection> | null = this;
		let sendBufUsage: number = 0
		let sendBufSize: number = 0
		return [-1, -1, errNoSyscallConn]
	}

	public async sendMessage(msg: __goscript_messages.message | null): globalThis.Promise<$.GoError> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		let frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null = ((__goscriptAwait = $.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>((c$ as Connection).opts.FramePool).Get(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null)
		{
			let err = (frame !== null && (frame as any).__isVarRef !== true && (frame as any).__goValue === undefined ? ((frame as any) as __goscript_frame.Frame).write(msg) : __goscript_frame.Frame.prototype.write.call(frame, msg))
			if (err != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>((c$ as Connection).opts.FramePool).Release(frame), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return err
			}
		}

		const [__goscriptSelect3HasReturn, __goscriptSelect3Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: true,
				channel: (c$ as Connection).sendCh,
				value: frame,
				onSelected: async (__goscriptSelect3Result) => {
					return null
				}
			},
			{
				id: -1,
				isSend: false,
				channel: null,
				onSelected: async (__goscriptSelect3Result) => {
					return ErrSendBufferFull
				}
			}
		], true)
		if (__goscriptSelect3HasReturn) {
			return __goscriptSelect3Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async setPeerHostPort(span: opentracing.Span | null): globalThis.Promise<void> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		if ((c$ as Connection).remotePeerAddress.ipv4 != 0) {
			await ext.IPv4TagName_Set(ext.PeerHostIPv4, span, (c$ as Connection).remotePeerAddress.ipv4)
		}
		if (!$.stringEqual((c$ as Connection).remotePeerAddress.ipv6, "")) {
			await ext.StringTagName_Set(ext.PeerHostIPv6, span, (c$ as Connection).remotePeerAddress.ipv6)
		}
		if (!$.stringEqual((c$ as Connection).remotePeerAddress.hostname, "")) {
			await ext.StringTagName_Set(ext.PeerHostname, span, (c$ as Connection).remotePeerAddress.hostname)
		}
		if ((c$ as Connection).remotePeerAddress.port != 0) {
			await ext.Uint16TagName_Set(ext.PeerPort, span, (c$ as Connection).remotePeerAddress.port)
		}
	}

	public async startOutboundSpan(ctx: context.Context | null, serviceName: string, methodName: string, call: __goscript_outbound.OutboundCall | $.VarRef<__goscript_outbound.OutboundCall> | null, startTime: time.Time): globalThis.Promise<opentracing.Span | null> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const call$: __goscript_outbound.OutboundCall = call == null ? $.pointerTarget<__goscript_outbound.OutboundCall>(call) : (call as any).__isVarRef === true ? (call as any).value : (call as any).__goValue === undefined ? (call as any) : $.pointerTarget<__goscript_outbound.OutboundCall>(call)
		let parent: opentracing.SpanContext | null = null! as opentracing.SpanContext | null
		{
			let s = await opentracing.SpanFromContext(ctx)
			if (s != null) {
				parent = (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(s)).Context(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		let span = (__goscriptAwait = $.pointerValue<Exclude<opentracing.Tracer, null>>($.pointerValue<Connection>(c).channelConnectionCommon.Tracer()).StartSpan(methodName, $.arrayToSlice<opentracing.StartSpanOption | null>([$.interfaceValue<opentracing.StartSpanOption | null>(opentracing.ChildOf(parent), "opentracing.SpanReference", "opentracing.SpanReference"), $.interfaceValue<opentracing.StartSpanOption | null>(($.namedStructConversion<opentracing.StartTime>(startTime)).clone(), "opentracing.StartTime", "opentracing.StartTime")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (await __goscript_context.isTracingDisabled(ctx)) {
			await ext.Uint16TagName_Set(ext.SamplingPriority, span, 0)
		}
		await $.markAsStructValue($.cloneStructValue($.pointerValue<opentracing.Tag>(ext.SpanKindRPCClient))).Set(span)
		await ext.StringTagName_Set(ext.PeerService, span, serviceName)
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).setPeerHostPort(span) : Connection.prototype.setPeerHostPort.call(c, span))
		void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).SetTag("as", $.mapGet<__goscript_messages.TransportHeaderName, string, string>((call$ as __goscript_outbound.OutboundCall).callReq.Headers, "as", "")[0]), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let injectable: $.VarRef<__goscript_tracing.injectableSpan> = $.varRef(new __goscript_tracing.injectableSpan(undefined, true))
		{
			let err = await injectable.value.initFromOpenTracing(span)
			if (err == null) {
				$.assignStruct((call$ as __goscript_outbound.OutboundCall).callReq.Tracing, (() => { const __goscriptConvert0 = injectable.value; return $.markAsStructValue(new __goscript_tracing.Span({traceID: __goscriptConvert0.traceID, parentID: __goscriptConvert0.parentID, spanID: __goscriptConvert0.spanID, flags: __goscriptConvert0.flags})) })())
			} else {
				await (call$ as __goscript_outbound.OutboundCall).callReq.Tracing.initRandom()
			}
		}
		return span
	}

	public async stopHealthCheck(): globalThis.Promise<void> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)

		if ((c$ as Connection).healthCheckDone == null) {
			return
		}

		if ((__goscriptAwait = $.pointerValue<Exclude<context2.Context, null>>((c$ as Connection).healthCheckCtx).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) {
			return
		}
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).Debug("Stopping health checks."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = (c$ as Connection).healthCheckQuit!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await $.chanRecv((c$ as Connection).healthCheckDone)
	}

	public async updateLastActivityRead(frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<void> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		if (isMessageTypeCall(frame)) {
			void (c$ as Connection).lastActivityRead.Store($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (c$ as Connection).channelConnectionCommon.timeNow!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).UnixNano())
		}
	}

	public async updateLastActivityWrite(frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<void> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		if (isMessageTypeCall(frame)) {
			void (c$ as Connection).lastActivityWrite.Store($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (c$ as Connection).channelConnectionCommon.timeNow!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).UnixNano())
		}
	}

	public async withStateLock(f: (() => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		await (c$ as Connection).stateMut.Lock()
		let err = (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (c$ as Connection).stateMut.Unlock()

		return err
	}

	public async withStateRLock(f: (() => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
		const c: Connection | $.VarRef<Connection> | null = this;
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		await (c$ as Connection).stateMut.RLock()
		let err = (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (c$ as Connection).stateMut.RUnlock()

		return err
	}

	public async writeFrames(_p0: number): globalThis.Promise<void> {
		const c: Connection | $.VarRef<Connection> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const c$: Connection = c == null ? $.pointerTarget<Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Connection>(c)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			await $.chanRecv((c$ as Connection).stopCh)
			// Drain and release any remaining frames in sendCh for best-effort
			// reduction in leaked frames
			while ($.len((c$ as Connection).sendCh) > 0) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>((c$ as Connection).opts.FramePool).Release(await $.chanRecv((c$ as Connection).sendCh)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		})() })

		while (true) {
			const [__goscriptSelect4HasReturn, __goscriptSelect4Value] = await $.selectStatement<any, any>([
				{
					id: 0,
					isSend: false,
					channel: (c$ as Connection).sendCh,
					onSelected: async (__goscriptSelect4Result) => {
						return __goscriptSelect4Result
					}
				},
				{
					id: 1,
					isSend: false,
					channel: (c$ as Connection).stopCh,
					onSelected: async (__goscriptSelect4Result) => {
						return __goscriptSelect4Result
					}
				}
			], false)
			switch (__goscriptSelect4Value?.id) {
				case 0:
					{
						const __goscriptSelect4Result = __goscriptSelect4Value
						let f = __goscriptSelect4Result.value
						if ((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).Enabled(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
							void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as Connection).channelConnectionCommon.log).Debugf("Writing frame %s", $.arrayToSlice<any>([$.interfaceValue(($.pointerValue<__goscript_frame.Frame>(f).Header).clone(), "tchannel.FrameHeader", "tchannel.FrameHeader")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}

						await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).updateLastActivityWrite(f) : Connection.prototype.updateLastActivityWrite.call(c, f))
						let err = await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.Frame).WriteOut(((c$ as Connection).conn as io.Writer | null)) : __goscript_frame.Frame.prototype.WriteOut.call(f, ((c$ as Connection).conn as io.Writer | null)))
						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>((c$ as Connection).opts.FramePool).Release(f), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (err != null) {
							await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).connectionError("write frames", err) : Connection.prototype.connectionError.call(c, "write frames", err))
							return
						}
						break
					}
				case 1:
					{
						const __goscriptSelect4Result = __goscriptSelect4Value
						if ($.len((c$ as Connection).sendCh) > 0) {
							continue
						}
						// Close the network once we're no longer writing frames.
						await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Connection).closeNetwork() : Connection.prototype.closeNetwork.call(c))
						return
						break
					}
			}
		}
	}

	public Tracer(): any {
		return $.pointerValue<__goscript_channel.channelConnectionCommon>(this.channelConnectionCommon).Tracer()
	}

	static __typeInfo = $.registerStructType(
		"tchannel.Connection",
		() => new Connection(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("IntrospectState", [["opts", /* @__PURE__ */ $.pointerType("tchannel.IntrospectionOptions")]], ["tchannel.ConnectionRuntimeState"], true), $.methodSignature("IsActive", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NextMessageID", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("RemotePeerInfo", [], ["tchannel.PeerInfo"], true), $.methodSignature("SendSystemError", [["id", /* @__PURE__ */ $.basicType("uint32")], ["span", "tchannel.Span"], ["err", "error"]], [["sendErr", "error"]], true), $.methodSignature("beginCall", [["ctx", "context.Context"], ["serviceName", /* @__PURE__ */ $.basicType("string")], ["methodName", /* @__PURE__ */ $.basicType("string")], ["callOptions", /* @__PURE__ */ $.pointerType("tchannel.CallOptions")]], [/* @__PURE__ */ $.pointerType("tchannel.OutboundCall"), "error"], true), $.methodSignature("callOnActive", [], [], true), $.methodSignature("callOnCloseStateChange", [], [], true), $.methodSignature("callOnExchangeChange", [], [], true), $.methodSignature("checkExchanges", [], [], true), $.methodSignature("close", [["fields", /* @__PURE__ */ $.sliceType("tchannel.LogField")]], ["error"], true), $.methodSignature("closeNetwork", [], [], true), $.methodSignature("connectionError", [["site", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], ["error"], true), $.methodSignature("dispatchInbound", [["_", /* @__PURE__ */ $.basicType("uint32")], ["_", /* @__PURE__ */ $.basicType("uint32")], ["call", /* @__PURE__ */ $.pointerType("tchannel.InboundCall")], ["frame", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], [], true), $.methodSignature("extractInboundSpan", [["callReq", /* @__PURE__ */ $.pointerType("tchannel.callReq")]], ["opentracing.Span"], true), $.methodSignature("getLastActivityReadTime", [], ["time.Time"], true), $.methodSignature("getLastActivityWriteTime", [], ["time.Time"], true), $.methodSignature("handleCallReq", [["frame", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("handleCallReqContinue", [["frame", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("handleCallRes", [["frame", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("handleCallResContinue", [["frame", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("handleCancel", [["frame", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("handleError", [["frame", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("handleFrameNoRelay", [["frame", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("handleFrameRelay", [["frame", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("handlePingReq", [["frame", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], [], true), $.methodSignature("handlePingRes", [["frame", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("hasPendingCalls", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("healthCheck", [["connID", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("logConnectionError", [["site", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], ["error"], true), $.methodSignature("onCancel", [["msgID", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("onExchangeAdded", [], [], true), $.methodSignature("outboundCtxCancel", [], [], true), $.methodSignature("ping", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("protocolError", [["id", /* @__PURE__ */ $.basicType("uint32")], ["err", "error"]], ["error"], true), $.methodSignature("readFrames", [["_", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("readState", [], [/* @__PURE__ */ $.basicType("int", "tchannel.connectionState")], true), $.methodSignature("recvMessage", [["ctx", "context.Context"], ["msg", "tchannel.message"], ["mex", /* @__PURE__ */ $.pointerType("tchannel.messageExchange")]], ["error"], true), $.methodSignature("sendBufSize", [], [["sendBufUsage", /* @__PURE__ */ $.basicType("int")], ["sendBufSize", /* @__PURE__ */ $.basicType("int")], ["_", "error"]], true), $.methodSignature("sendMessage", [["msg", "tchannel.message"]], ["error"], true), $.methodSignature("setPeerHostPort", [["span", "opentracing.Span"]], [], true), $.methodSignature("startOutboundSpan", [["ctx", "context.Context"], ["serviceName", /* @__PURE__ */ $.basicType("string")], ["methodName", /* @__PURE__ */ $.basicType("string")], ["call", /* @__PURE__ */ $.pointerType("tchannel.OutboundCall")], ["startTime", "time.Time"]], ["opentracing.Span"], true), $.methodSignature("stopHealthCheck", [], [], true), $.methodSignature("updateLastActivityRead", [["frame", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], [], true), $.methodSignature("updateLastActivityWrite", [["frame", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], [], true), $.methodSignature("withStateLock", [["f", ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("withStateRLock", [["f", ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("writeFrames", [["_", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("Tracer", [], ["opentracing.Tracer"])],
		Connection,
		() => [/* @__PURE__ */ $.structField("channelConnectionCommon", "tchannel.channelConnectionCommon", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go", anonymous: true }), /* @__PURE__ */ $.structField("connID", /* @__PURE__ */ $.basicType("uint32"), [1], 80, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("connDirection", /* @__PURE__ */ $.basicType("int", "tchannel.connectionDirection"), [2], 88, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("opts", "tchannel.ConnectionOptions", [3], 96, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("conn", "net.Conn", [4], 200, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("sysConn", "syscall.RawConn", [5], 216, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("localPeerInfo", "tchannel.LocalPeerInfo", [6], 232, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("remotePeerInfo", "tchannel.PeerInfo", [7], 336, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("sendCh", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("tchannel.Frame"), "both"), [8], 424, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("stopCh", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [9], 432, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "tchannel.connectionState"), [10], 440, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("stateMut", "sync.RWMutex", [11], 448, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("inbound", /* @__PURE__ */ $.pointerType("tchannel.messageExchangeSet"), [12], 472, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("outbound", /* @__PURE__ */ $.pointerType("tchannel.messageExchangeSet"), [13], 480, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("internalHandlers", /* @__PURE__ */ $.pointerType("tchannel.handlerMap"), [14], 488, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("handler", "tchannel.Handler", [15], 496, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("nextMessageID", "atomic.Uint32", [16], 512, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("events", "tchannel.connectionEvents", [17], 520, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("commonStatsTags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [18], 544, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("relay", /* @__PURE__ */ $.pointerType("tchannel.Relayer"), [19], 552, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("baseContext", "context.Context", [20], 560, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("outboundHP", /* @__PURE__ */ $.basicType("string"), [21], 576, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("closeNetworkCalled", "atomic.Bool", [22], 592, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("stoppedExchanges", "atomic.Bool", [23], 600, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("remotePeerAddress", "tchannel.peerAddressComponents", [24], 608, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("healthCheckCtx", "context.Context", [25], 648, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("healthCheckQuit", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), [26], 664, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("healthCheckDone", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [27], 672, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("healthCheckHistory", /* @__PURE__ */ $.pointerType("tchannel.healthHistory"), [28], 680, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("lastActivityRead", "atomic.Int64", [29], 688, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("lastActivityWrite", "atomic.Int64", [30], 696, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export const CurrentProtocolVersion: number = 2

export const DefaultConnectTimeout: time.Duration = 5000000000n

export const DefaultConnectionBufferSize: number = 512

export const connectionActive: connectionState = 1

export const connectionStartClose: connectionState = 2

export const connectionInboundClosed: connectionState = 3

export const connectionClosed: connectionState = 4

export let ErrConnectionClosed: $.GoError = errors.New("connection is closed")

export function __goscript_set_ErrConnectionClosed(__goscriptValue: $.GoError): void {
	ErrConnectionClosed = __goscriptValue
}

export let ErrSendBufferFull: $.GoError = errors.New("connection send buffer is full, cannot send frame")

export function __goscript_set_ErrSendBufferFull(__goscriptValue: $.GoError): void {
	ErrSendBufferFull = __goscriptValue
}

export let ErrConnectionNotReady: $.GoError = errors.New("connection is not yet ready")

export function __goscript_set_ErrConnectionNotReady(__goscriptValue: $.GoError): void {
	ErrConnectionNotReady = __goscriptValue
}

export let errNoSyscallConn: $.GoError = errors.New("no syscall.RawConn available")

export function __goscript_set_errNoSyscallConn(__goscriptValue: $.GoError): void {
	errNoSyscallConn = __goscriptValue
}

export let _nextConnID: $.VarRef<atomic.Uint32> = $.varRef(new atomic.Uint32(undefined, true))

export function __goscript_set__nextConnID(__goscriptValue: atomic.Uint32): void {
	$.assignStruct(_nextConnID.value, __goscriptValue)
}

export async function getTimeout(ctx: context.Context | null): globalThis.Promise<time.Duration> {
	let [deadline, ok] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context2.Context, null>) : $.pointerValue<Exclude<context2.Context, null>>(ctx)).Deadline()
	if (!ok) {
		return 5000000000n
	}

	return $.markAsStructValue($.cloneStructValue(deadline)).Sub($.markAsStructValue($.cloneStructValue(time.Now())))
}

export async function getSysConn(conn: net.Conn | null, log: __goscript_logger.Logger | null): globalThis.Promise<syscall.RawConn | null> {
	let connSyscall: syscall.Conn | null = null! as syscall.Conn | null
	let ok: boolean = false
	{
		const __goscriptTypeSwitchValue = conn
		switch (true) {
			case $.typeAssert<syscall.Conn | null>(__goscriptTypeSwitchValue, "syscall.Conn").ok:
				{
					let v: syscall.Conn | null = $.typeAssert<syscall.Conn | null>(__goscriptTypeSwitchValue, "syscall.Conn").value
					connSyscall = v
					ok = true
				}
				break
			case $.typeAssert<tls.Conn | $.VarRef<tls.Conn> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("tls.Conn")).ok:
				{
					let v: tls.Conn | $.VarRef<tls.Conn> | null = $.typeAssert<tls.Conn | $.VarRef<tls.Conn> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("tls.Conn")).value
					let __goscriptTuple8: any = $.typeAssertTuple<syscall.Conn | null>((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as tls.Conn).NetConn() : tls.Conn.prototype.NetConn.call(v)), "syscall.Conn")
					connSyscall = __goscriptTuple8[0]
					ok = __goscriptTuple8[1]
				}
				break
		}
	}

	if (!ok) {
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? (log as Exclude<__goscript_logger.Logger, null>) : $.pointerValue<Exclude<__goscript_logger.Logger, null>>(log)).WithFields($.arrayToSlice<__goscript_logger.LogField>([(await (async () => { const __goscriptLiteralField16 = await fmt.Sprintf("%T", (conn as any)); return new __goscript_logger.LogField({Key: "connectionType", Value: __goscriptLiteralField16}, true) })())])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Error("Connection does not implement SyscallConn."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return null
	}

	let [sysConn, err] = await (connSyscall !== null && (connSyscall as any).__isVarRef !== true && (connSyscall as any).__goValue === undefined ? (connSyscall as Exclude<syscall.Conn, null>) : $.pointerValue<Exclude<syscall.Conn, null>>(connSyscall)).SyscallConn()
	if (err != null) {
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? (log as Exclude<__goscript_logger.Logger, null>) : $.pointerValue<Exclude<__goscript_logger.Logger, null>>(log)).WithFields($.arrayToSlice<__goscript_logger.LogField>([await __goscript_logger.ErrField(err)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Error("Could not get SyscallConn."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return null
	}

	return sysConn
}

export function isMessageTypeCall(frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): boolean {
	// Pings are ignored for last activity.
	switch ($.pointerValue<__goscript_frame.Frame>(frame).Header.messageType) {
		case 3:
		case 19:
		case 4:
		case 20:
		case 255:
		{
			return true
			break
		}
	}

	return false
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_connectionstate_string.connectionState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "tchannel.connectionState"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({MetricsKey: (receiver: any, ...args: any[]) => (__goscript_errors.SystemErrCode_MetricsKey as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_systemerrcode_string.SystemErrCode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), relayMetricsKey: (receiver: any, ...args: any[]) => (__goscript_errors.SystemErrCode_relayMetricsKey as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("uint8", "tchannel.SystemErrCode"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("MetricsKey", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("relayMetricsKey", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
