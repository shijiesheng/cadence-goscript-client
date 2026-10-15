// Generated file based on introspection.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as time from "@goscript/time/index.js"

import * as context from "@goscript/golang.org/x/net/context/index.js"

import * as context2 from "@goscript/context/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as relay from "@goscript/github.com/uber/tchannel-go/relay/index.js"

import type * as arg22 from "@goscript/github.com/uber/tchannel-go/thrift/arg2/index.js"

import * as tos from "@goscript/github.com/uber/tchannel-go/tos/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as io from "@goscript/io/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as __goscript__arguments from "./arguments.gs.ts"

import * as __goscript_all_channels from "./all_channels.gs.ts"

import * as __goscript_calloptions from "./calloptions.gs.ts"

import * as __goscript_channel from "./channel.gs.ts"

import * as __goscript_channelstate_string from "./channelstate_string.gs.ts"

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

import * as __goscript_tracing from "./tracing.gs.ts"

import * as __goscript_version from "./version.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber/tchannel-go/relay/index.js"
import "@goscript/github.com/uber/tchannel-go/tos/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/io/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/syscall/index.js"
import "./arguments.gs.ts"
import "./all_channels.gs.ts"
import "./calloptions.gs.ts"
import "./channel.gs.ts"
import "./channelstate_string.gs.ts"
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
import "./tracing.gs.ts"
import "./version.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.IntrospectionOptions", "tchannel.RuntimeVersion", "tchannel.RuntimeState", "tchannel.GoRuntimeStateOptions", "tchannel.ChannelInfo", "tchannel.GoRuntimeState", "tchannel.SubChannelRuntimeState", "tchannel.HandlerRuntimeState", "tchannel.handlerType", "tchannel.SubPeerScore", "tchannel.ConnectionRuntimeState", "tchannel.RelayerRuntimeState", "tchannel.ExchangeSetRuntimeState", "tchannel.RelayItemSetState", "tchannel.ExchangeRuntimeState", "tchannel.RelayItemState", "tchannel.PeerRuntimeState", "tchannel.containsPeerList"])

export type handlerType = string

$.registerNamedValueType(
	"tchannel.handlerType",
	{String: (receiver: any, ...args: any[]) => (handlerType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*tchannel.handlerType",
	{String: (receiver: any, ...args: any[]) => (handlerType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type containsPeerList = {
	Copy(): globalThis.Map<string, __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null> | null | globalThis.Promise<globalThis.Map<string, __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null> | null>
}

$.registerInterfaceType(
	"tchannel.containsPeerList",
	null,
	[$.methodSignature("Copy", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("tchannel.Peer"))])]
);

export class IntrospectionOptions {
	// IncludeExchanges will include all the IDs in the message exchanges.
	public get IncludeExchanges(): boolean {
		return this._fields.IncludeExchanges
	}

	public set IncludeExchanges(value: boolean) {
		this._fields.IncludeExchanges = value
	}

	// IncludeEmptyPeers will include peers, even if they have no connections.
	public get IncludeEmptyPeers(): boolean {
		return this._fields.IncludeEmptyPeers
	}

	public set IncludeEmptyPeers(value: boolean) {
		this._fields.IncludeEmptyPeers = value
	}

	// IncludeTombstones will include tombstones when introspecting relays.
	public get IncludeTombstones(): boolean {
		return this._fields.IncludeTombstones
	}

	public set IncludeTombstones(value: boolean) {
		this._fields.IncludeTombstones = value
	}

	// IncludeOtherChannels will include basic information about other channels
	// created in the same process as this channel.
	public get IncludeOtherChannels(): boolean {
		return this._fields.IncludeOtherChannels
	}

	public set IncludeOtherChannels(value: boolean) {
		this._fields.IncludeOtherChannels = value
	}

	public _fields: {
		IncludeExchanges: boolean
		IncludeEmptyPeers: boolean
		IncludeTombstones: boolean
		IncludeOtherChannels: boolean
	}

	constructor(init?: Partial<{IncludeExchanges?: boolean, IncludeEmptyPeers?: boolean, IncludeTombstones?: boolean, IncludeOtherChannels?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			IncludeExchanges: init?.IncludeExchanges ?? (false as boolean),
			IncludeEmptyPeers: init?.IncludeEmptyPeers ?? (false as boolean),
			IncludeTombstones: init?.IncludeTombstones ?? (false as boolean),
			IncludeOtherChannels: init?.IncludeOtherChannels ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): IntrospectionOptions {
		return new IntrospectionOptions(this, true)
	}

	public __goscriptAssign(source: IntrospectionOptions): void {
		const target = this._fields
		const values = source._fields
		target.IncludeExchanges = values.IncludeExchanges
		target.IncludeEmptyPeers = values.IncludeEmptyPeers
		target.IncludeTombstones = values.IncludeTombstones
		target.IncludeOtherChannels = values.IncludeOtherChannels
	}

	static __typeInfo = $.registerStructType(
		"tchannel.IntrospectionOptions",
		() => new IntrospectionOptions(),
		() => [],
		IntrospectionOptions,
		() => [/* @__PURE__ */ $.structField("IncludeExchanges", /* @__PURE__ */ $.basicType("bool"), [0], 0, true, { tag: "json:\"includeExchanges\"" }), /* @__PURE__ */ $.structField("IncludeEmptyPeers", /* @__PURE__ */ $.basicType("bool"), [1], 1, true, { tag: "json:\"includeEmptyPeers\"" }), /* @__PURE__ */ $.structField("IncludeTombstones", /* @__PURE__ */ $.basicType("bool"), [2], 2, true, { tag: "json:\"includeTombstones\"" }), /* @__PURE__ */ $.structField("IncludeOtherChannels", /* @__PURE__ */ $.basicType("bool"), [3], 3, true, { tag: "json:\"includeOtherChannels\"" })]
	)
}

export class RuntimeVersion {
	public get GoVersion(): string {
		return this._fields.GoVersion
	}

	public set GoVersion(value: string) {
		this._fields.GoVersion = value
	}

	public get LibraryVersion(): string {
		return this._fields.LibraryVersion
	}

	public set LibraryVersion(value: string) {
		this._fields.LibraryVersion = value
	}

	public _fields: {
		GoVersion: string
		LibraryVersion: string
	}

	constructor(init?: Partial<{GoVersion?: string, LibraryVersion?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			GoVersion: init?.GoVersion ?? ("" as string),
			LibraryVersion: init?.LibraryVersion ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RuntimeVersion {
		return new RuntimeVersion(this, true)
	}

	public __goscriptAssign(source: RuntimeVersion): void {
		const target = this._fields
		const values = source._fields
		target.GoVersion = values.GoVersion
		target.LibraryVersion = values.LibraryVersion
	}

	static __typeInfo = $.registerStructType(
		"tchannel.RuntimeVersion",
		() => new RuntimeVersion(),
		() => [],
		RuntimeVersion,
		() => [/* @__PURE__ */ $.structField("GoVersion", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"goVersion\"" }), /* @__PURE__ */ $.structField("LibraryVersion", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"tchannelVersion\"" })]
	)
}

export class RuntimeState {
	public get ID(): number {
		return this._fields.ID
	}

	public set ID(value: number) {
		this._fields.ID = value
	}

	public get ChannelState(): string {
		return this._fields.ChannelState
	}

	public set ChannelState(value: string) {
		this._fields.ChannelState = value
	}

	// CreatedStack is the stack for how this channel was created.
	public get CreatedStack(): string {
		return this._fields.CreatedStack
	}

	public set CreatedStack(value: string) {
		this._fields.CreatedStack = value
	}

	// LocalPeer is the local peer information (service name, host-port, etc).
	public get LocalPeer(): __goscript_connection.LocalPeerInfo {
		return this._fields.LocalPeer
	}

	public set LocalPeer(value: __goscript_connection.LocalPeerInfo) {
		this._fields.LocalPeer = value
	}

	// SubChannels contains information about any subchannels.
	public get SubChannels(): globalThis.Map<string, SubChannelRuntimeState> | null {
		return this._fields.SubChannels
	}

	public set SubChannels(value: globalThis.Map<string, SubChannelRuntimeState> | null) {
		this._fields.SubChannels = value
	}

	// RootPeers contains information about all the peers on this channel and their connections.
	public get RootPeers(): globalThis.Map<string, PeerRuntimeState> | null {
		return this._fields.RootPeers
	}

	public set RootPeers(value: globalThis.Map<string, PeerRuntimeState> | null) {
		this._fields.RootPeers = value
	}

	// Peers is the list of shared peers for this channel.
	public get Peers(): $.Slice<SubPeerScore> {
		return this._fields.Peers
	}

	public set Peers(value: $.Slice<SubPeerScore>) {
		this._fields.Peers = value
	}

	// NumConnections is the number of connections stored in the channel.
	public get NumConnections(): number {
		return this._fields.NumConnections
	}

	public set NumConnections(value: number) {
		this._fields.NumConnections = value
	}

	// Connections is the list of connection IDs in the channel
	public get Connections(): $.Slice<number> {
		return this._fields.Connections
	}

	public set Connections(value: $.Slice<number>) {
		this._fields.Connections = value
	}

	// InactiveConnections is the connection state for connections that are not active,
	// and hence are not reported as part of root peers.
	public get InactiveConnections(): $.Slice<ConnectionRuntimeState> {
		return this._fields.InactiveConnections
	}

	public set InactiveConnections(value: $.Slice<ConnectionRuntimeState>) {
		this._fields.InactiveConnections = value
	}

	// OtherChannels is information about any other channels running in this process.
	public get OtherChannels(): globalThis.Map<string, $.Slice<ChannelInfo>> | null {
		return this._fields.OtherChannels
	}

	public set OtherChannels(value: globalThis.Map<string, $.Slice<ChannelInfo>> | null) {
		this._fields.OtherChannels = value
	}

	// RuntimeVersion is the version information about the runtime and the library.
	public get RuntimeVersion(): RuntimeVersion {
		return this._fields.RuntimeVersion
	}

	public set RuntimeVersion(value: RuntimeVersion) {
		this._fields.RuntimeVersion = value
	}

	public _fields: {
		ID: number
		ChannelState: string
		CreatedStack: string
		LocalPeer: __goscript_connection.LocalPeerInfo
		SubChannels: globalThis.Map<string, SubChannelRuntimeState> | null
		RootPeers: globalThis.Map<string, PeerRuntimeState> | null
		Peers: $.Slice<SubPeerScore>
		NumConnections: number
		Connections: $.Slice<number>
		InactiveConnections: $.Slice<ConnectionRuntimeState>
		OtherChannels: globalThis.Map<string, $.Slice<ChannelInfo>> | null
		RuntimeVersion: RuntimeVersion
	}

	constructor(init?: Partial<{ID?: number, ChannelState?: string, CreatedStack?: string, LocalPeer?: __goscript_connection.LocalPeerInfo, SubChannels?: globalThis.Map<string, SubChannelRuntimeState> | null, RootPeers?: globalThis.Map<string, PeerRuntimeState> | null, Peers?: $.Slice<SubPeerScore>, NumConnections?: number, Connections?: $.Slice<number>, InactiveConnections?: $.Slice<ConnectionRuntimeState>, OtherChannels?: globalThis.Map<string, $.Slice<ChannelInfo>> | null, RuntimeVersion?: RuntimeVersion}>, __goscriptValue?: boolean) {
		this._fields = {
			ID: init?.ID ?? (0 as number),
			ChannelState: init?.ChannelState ?? ("" as string),
			CreatedStack: init?.CreatedStack ?? ("" as string),
			LocalPeer: init?.LocalPeer ? init.LocalPeer.clone() : new __goscript_connection.LocalPeerInfo(undefined, true),
			SubChannels: init?.SubChannels ?? (null! as globalThis.Map<string, SubChannelRuntimeState> | null),
			RootPeers: init?.RootPeers ?? (null! as globalThis.Map<string, PeerRuntimeState> | null),
			Peers: init?.Peers ?? (null! as $.Slice<SubPeerScore>),
			NumConnections: init?.NumConnections ?? (0 as number),
			Connections: init?.Connections ?? (null! as $.Slice<number>),
			InactiveConnections: init?.InactiveConnections ?? (null! as $.Slice<ConnectionRuntimeState>),
			OtherChannels: init?.OtherChannels ?? (null! as globalThis.Map<string, $.Slice<ChannelInfo>> | null),
			RuntimeVersion: init?.RuntimeVersion ? init.RuntimeVersion.clone() : new RuntimeVersion(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RuntimeState {
		return new RuntimeState(this, true)
	}

	public __goscriptAssign(source: RuntimeState): void {
		const target = this._fields
		const values = source._fields
		target.ID = values.ID
		target.ChannelState = values.ChannelState
		target.CreatedStack = values.CreatedStack
		$.assignStruct(target.LocalPeer, values.LocalPeer)
		target.SubChannels = values.SubChannels
		target.RootPeers = values.RootPeers
		target.Peers = values.Peers
		target.NumConnections = values.NumConnections
		target.Connections = values.Connections
		target.InactiveConnections = values.InactiveConnections
		target.OtherChannels = values.OtherChannels
		$.assignStruct(target.RuntimeVersion, values.RuntimeVersion)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.RuntimeState",
		() => new RuntimeState(),
		() => [],
		RuntimeState,
		() => [/* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true, { tag: "json:\"id\"" }), /* @__PURE__ */ $.structField("ChannelState", /* @__PURE__ */ $.basicType("string"), [1], 8, true, { tag: "json:\"channelState\"" }), /* @__PURE__ */ $.structField("CreatedStack", /* @__PURE__ */ $.basicType("string"), [2], 24, true, { tag: "json:\"createdStack\"" }), /* @__PURE__ */ $.structField("LocalPeer", "tchannel.LocalPeerInfo", [3], 40, true, { tag: "json:\"localPeer\"" }), /* @__PURE__ */ $.structField("SubChannels", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tchannel.SubChannelRuntimeState"), [4], 144, true, { tag: "json:\"subChannels\"" }), /* @__PURE__ */ $.structField("RootPeers", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tchannel.PeerRuntimeState"), [5], 152, true, { tag: "json:\"rootPeers\"" }), /* @__PURE__ */ $.structField("Peers", /* @__PURE__ */ $.sliceType("tchannel.SubPeerScore"), [6], 160, true, { tag: "json:\"peers\"" }), /* @__PURE__ */ $.structField("NumConnections", /* @__PURE__ */ $.basicType("int"), [7], 184, true, { tag: "json:\"numConnections\"" }), /* @__PURE__ */ $.structField("Connections", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32")), [8], 192, true, { tag: " json:\"connections\"" }), /* @__PURE__ */ $.structField("InactiveConnections", /* @__PURE__ */ $.sliceType("tchannel.ConnectionRuntimeState"), [9], 216, true, { tag: "json:\"inactiveConnections\"" }), /* @__PURE__ */ $.structField("OtherChannels", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("tchannel.ChannelInfo")), [10], 240, true, { tag: "json:\"otherChannels,omitEmpty\"" }), /* @__PURE__ */ $.structField("RuntimeVersion", "tchannel.RuntimeVersion", [11], 248, true, { tag: "json:\"runtimeVersion\"" })]
	)
}

export class GoRuntimeStateOptions {
	// IncludeGoStacks will include all goroutine stacks.
	public get IncludeGoStacks(): boolean {
		return this._fields.IncludeGoStacks
	}

	public set IncludeGoStacks(value: boolean) {
		this._fields.IncludeGoStacks = value
	}

	public _fields: {
		IncludeGoStacks: boolean
	}

	constructor(init?: Partial<{IncludeGoStacks?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			IncludeGoStacks: init?.IncludeGoStacks ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GoRuntimeStateOptions {
		return new GoRuntimeStateOptions(this, true)
	}

	public __goscriptAssign(source: GoRuntimeStateOptions): void {
		const target = this._fields
		const values = source._fields
		target.IncludeGoStacks = values.IncludeGoStacks
	}

	static __typeInfo = $.registerStructType(
		"tchannel.GoRuntimeStateOptions",
		() => new GoRuntimeStateOptions(),
		() => [],
		GoRuntimeStateOptions,
		() => [/* @__PURE__ */ $.structField("IncludeGoStacks", /* @__PURE__ */ $.basicType("bool"), [0], 0, true, { tag: "json:\"includeGoStacks\"" })]
	)
}

export class ChannelInfo {
	public get ID(): number {
		return this._fields.ID
	}

	public set ID(value: number) {
		this._fields.ID = value
	}

	public get CreatedStack(): string {
		return this._fields.CreatedStack
	}

	public set CreatedStack(value: string) {
		this._fields.CreatedStack = value
	}

	public get LocalPeer(): __goscript_connection.LocalPeerInfo {
		return this._fields.LocalPeer
	}

	public set LocalPeer(value: __goscript_connection.LocalPeerInfo) {
		this._fields.LocalPeer = value
	}

	public _fields: {
		ID: number
		CreatedStack: string
		LocalPeer: __goscript_connection.LocalPeerInfo
	}

	constructor(init?: Partial<{ID?: number, CreatedStack?: string, LocalPeer?: __goscript_connection.LocalPeerInfo}>, __goscriptValue?: boolean) {
		this._fields = {
			ID: init?.ID ?? (0 as number),
			CreatedStack: init?.CreatedStack ?? ("" as string),
			LocalPeer: init?.LocalPeer ? init.LocalPeer.clone() : new __goscript_connection.LocalPeerInfo(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ChannelInfo {
		return new ChannelInfo(this, true)
	}

	public __goscriptAssign(source: ChannelInfo): void {
		const target = this._fields
		const values = source._fields
		target.ID = values.ID
		target.CreatedStack = values.CreatedStack
		$.assignStruct(target.LocalPeer, values.LocalPeer)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.ChannelInfo",
		() => new ChannelInfo(),
		() => [],
		ChannelInfo,
		() => [/* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true, { tag: "json:\"id\"" }), /* @__PURE__ */ $.structField("CreatedStack", /* @__PURE__ */ $.basicType("string"), [1], 8, true, { tag: "json:\"createdStack\"" }), /* @__PURE__ */ $.structField("LocalPeer", "tchannel.LocalPeerInfo", [2], 24, true, { tag: "json:\"localPeer\"" })]
	)
}

export class GoRuntimeState {
	public get MemStats(): runtime.MemStats {
		return this._fields.MemStats
	}

	public set MemStats(value: runtime.MemStats) {
		this._fields.MemStats = value
	}

	public get NumGoroutines(): number {
		return this._fields.NumGoroutines
	}

	public set NumGoroutines(value: number) {
		this._fields.NumGoroutines = value
	}

	public get NumCPU(): number {
		return this._fields.NumCPU
	}

	public set NumCPU(value: number) {
		this._fields.NumCPU = value
	}

	public get NumCGo(): bigint {
		return this._fields.NumCGo
	}

	public set NumCGo(value: bigint) {
		this._fields.NumCGo = value
	}

	public get GoStacks(): $.Slice<number> {
		return this._fields.GoStacks
	}

	public set GoStacks(value: $.Slice<number>) {
		this._fields.GoStacks = value
	}

	public _fields: {
		MemStats: runtime.MemStats
		NumGoroutines: number
		NumCPU: number
		NumCGo: bigint
		GoStacks: $.Slice<number>
	}

	constructor(init?: Partial<{MemStats?: runtime.MemStats, NumGoroutines?: number, NumCPU?: number, NumCGo?: bigint, GoStacks?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			MemStats: init?.MemStats ? $.markAsStructValue($.cloneStructValue(init.MemStats)) : $.markAsStructValue(new runtime.MemStats()),
			NumGoroutines: init?.NumGoroutines ?? (0 as number),
			NumCPU: init?.NumCPU ?? (0 as number),
			NumCGo: init?.NumCGo ?? (0n as bigint),
			GoStacks: init?.GoStacks ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GoRuntimeState {
		return new GoRuntimeState(this, true)
	}

	public __goscriptAssign(source: GoRuntimeState): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.MemStats, values.MemStats)
		target.NumGoroutines = values.NumGoroutines
		target.NumCPU = values.NumCPU
		target.NumCGo = values.NumCGo
		target.GoStacks = values.GoStacks
	}

	static __typeInfo = $.registerStructType(
		"tchannel.GoRuntimeState",
		() => new GoRuntimeState(),
		() => [],
		GoRuntimeState,
		() => [/* @__PURE__ */ $.structField("MemStats", "runtime.MemStats", [0], 0, true, { tag: "json:\"memStats\"" }), /* @__PURE__ */ $.structField("NumGoroutines", /* @__PURE__ */ $.basicType("int"), [1], 5776, true, { tag: "json:\"numGoRoutines\"" }), /* @__PURE__ */ $.structField("NumCPU", /* @__PURE__ */ $.basicType("int"), [2], 5784, true, { tag: "json:\"numCPU\"" }), /* @__PURE__ */ $.structField("NumCGo", /* @__PURE__ */ $.basicType("int64"), [3], 5792, true, { tag: "json:\"numCGo\"" }), /* @__PURE__ */ $.structField("GoStacks", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 5800, true, { tag: "json:\"goStacks,omitempty\"" })]
	)
}

export class HandlerRuntimeState {
	public get Type(): handlerType {
		return this._fields.Type
	}

	public set Type(value: handlerType) {
		this._fields.Type = value
	}

	public get Methods(): $.Slice<string> {
		return this._fields.Methods
	}

	public set Methods(value: $.Slice<string>) {
		this._fields.Methods = value
	}

	public _fields: {
		Type: handlerType
		Methods: $.Slice<string>
	}

	constructor(init?: Partial<{Type?: handlerType, Methods?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			Type: init?.Type ?? ("" as handlerType),
			Methods: init?.Methods ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HandlerRuntimeState {
		return new HandlerRuntimeState(this, true)
	}

	public __goscriptAssign(source: HandlerRuntimeState): void {
		const target = this._fields
		const values = source._fields
		target.Type = values.Type
		target.Methods = values.Methods
	}

	static __typeInfo = $.registerStructType(
		"tchannel.HandlerRuntimeState",
		() => new HandlerRuntimeState(),
		() => [],
		HandlerRuntimeState,
		() => [/* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("string", "tchannel.handlerType"), [0], 0, true, { tag: "json:\"type\"" }), /* @__PURE__ */ $.structField("Methods", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [1], 16, true, { tag: "json:\"methods,omitempty\"" })]
	)
}

export class SubChannelRuntimeState {
	public get Service(): string {
		return this._fields.Service
	}

	public set Service(value: string) {
		this._fields.Service = value
	}

	public get Isolated(): boolean {
		return this._fields.Isolated
	}

	public set Isolated(value: boolean) {
		this._fields.Isolated = value
	}

	// IsolatedPeers is the list of all isolated peers for this channel.
	public get IsolatedPeers(): $.Slice<SubPeerScore> {
		return this._fields.IsolatedPeers
	}

	public set IsolatedPeers(value: $.Slice<SubPeerScore>) {
		this._fields.IsolatedPeers = value
	}

	public get Handler(): HandlerRuntimeState {
		return this._fields.Handler
	}

	public set Handler(value: HandlerRuntimeState) {
		this._fields.Handler = value
	}

	public _fields: {
		Service: string
		Isolated: boolean
		IsolatedPeers: $.Slice<SubPeerScore>
		Handler: HandlerRuntimeState
	}

	constructor(init?: Partial<{Service?: string, Isolated?: boolean, IsolatedPeers?: $.Slice<SubPeerScore>, Handler?: HandlerRuntimeState}>, __goscriptValue?: boolean) {
		this._fields = {
			Service: init?.Service ?? ("" as string),
			Isolated: init?.Isolated ?? (false as boolean),
			IsolatedPeers: init?.IsolatedPeers ?? (null! as $.Slice<SubPeerScore>),
			Handler: init?.Handler ? init.Handler.clone() : new HandlerRuntimeState(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SubChannelRuntimeState {
		return new SubChannelRuntimeState(this, true)
	}

	public __goscriptAssign(source: SubChannelRuntimeState): void {
		const target = this._fields
		const values = source._fields
		target.Service = values.Service
		target.Isolated = values.Isolated
		target.IsolatedPeers = values.IsolatedPeers
		$.assignStruct(target.Handler, values.Handler)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.SubChannelRuntimeState",
		() => new SubChannelRuntimeState(),
		() => [],
		SubChannelRuntimeState,
		() => [/* @__PURE__ */ $.structField("Service", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"service\"" }), /* @__PURE__ */ $.structField("Isolated", /* @__PURE__ */ $.basicType("bool"), [1], 16, true, { tag: "json:\"isolated\"" }), /* @__PURE__ */ $.structField("IsolatedPeers", /* @__PURE__ */ $.sliceType("tchannel.SubPeerScore"), [2], 24, true, { tag: "json:\"isolatedPeers,omitempty\"" }), /* @__PURE__ */ $.structField("Handler", "tchannel.HandlerRuntimeState", [3], 48, true, { tag: "json:\"handler\"" })]
	)
}

export class SubPeerScore {
	public get HostPort(): string {
		return this._fields.HostPort
	}

	public set HostPort(value: string) {
		this._fields.HostPort = value
	}

	public get Score(): bigint {
		return this._fields.Score
	}

	public set Score(value: bigint) {
		this._fields.Score = value
	}

	public _fields: {
		HostPort: string
		Score: bigint
	}

	constructor(init?: Partial<{HostPort?: string, Score?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			HostPort: init?.HostPort ?? ("" as string),
			Score: init?.Score ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SubPeerScore {
		return new SubPeerScore(this, true)
	}

	public __goscriptAssign(source: SubPeerScore): void {
		const target = this._fields
		const values = source._fields
		target.HostPort = values.HostPort
		target.Score = values.Score
	}

	static __typeInfo = $.registerStructType(
		"tchannel.SubPeerScore",
		() => new SubPeerScore(),
		() => [],
		SubPeerScore,
		() => [/* @__PURE__ */ $.structField("HostPort", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"hostPort\"" }), /* @__PURE__ */ $.structField("Score", /* @__PURE__ */ $.basicType("uint64"), [1], 16, true, { tag: "json:\"score\"" })]
	)
}

export class ExchangeSetRuntimeState {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Count(): number {
		return this._fields.Count
	}

	public set Count(value: number) {
		this._fields.Count = value
	}

	public get Exchanges(): globalThis.Map<string, ExchangeRuntimeState> | null {
		return this._fields.Exchanges
	}

	public set Exchanges(value: globalThis.Map<string, ExchangeRuntimeState> | null) {
		this._fields.Exchanges = value
	}

	public _fields: {
		Name: string
		Count: number
		Exchanges: globalThis.Map<string, ExchangeRuntimeState> | null
	}

	constructor(init?: Partial<{Name?: string, Count?: number, Exchanges?: globalThis.Map<string, ExchangeRuntimeState> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Count: init?.Count ?? (0 as number),
			Exchanges: init?.Exchanges ?? (null! as globalThis.Map<string, ExchangeRuntimeState> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ExchangeSetRuntimeState {
		return new ExchangeSetRuntimeState(this, true)
	}

	public __goscriptAssign(source: ExchangeSetRuntimeState): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Count = values.Count
		target.Exchanges = values.Exchanges
	}

	static __typeInfo = $.registerStructType(
		"tchannel.ExchangeSetRuntimeState",
		() => new ExchangeSetRuntimeState(),
		() => [],
		ExchangeSetRuntimeState,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"name\"" }), /* @__PURE__ */ $.structField("Count", /* @__PURE__ */ $.basicType("int"), [1], 16, true, { tag: "json:\"count\"" }), /* @__PURE__ */ $.structField("Exchanges", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tchannel.ExchangeRuntimeState"), [2], 24, true, { tag: "json:\"exchanges,omitempty\"" })]
	)
}

export class RelayItemSetState {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Count(): number {
		return this._fields.Count
	}

	public set Count(value: number) {
		this._fields.Count = value
	}

	public get Items(): globalThis.Map<string, RelayItemState> | null {
		return this._fields.Items
	}

	public set Items(value: globalThis.Map<string, RelayItemState> | null) {
		this._fields.Items = value
	}

	public _fields: {
		Name: string
		Count: number
		Items: globalThis.Map<string, RelayItemState> | null
	}

	constructor(init?: Partial<{Name?: string, Count?: number, Items?: globalThis.Map<string, RelayItemState> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Count: init?.Count ?? (0 as number),
			Items: init?.Items ?? (null! as globalThis.Map<string, RelayItemState> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RelayItemSetState {
		return new RelayItemSetState(this, true)
	}

	public __goscriptAssign(source: RelayItemSetState): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Count = values.Count
		target.Items = values.Items
	}

	static __typeInfo = $.registerStructType(
		"tchannel.RelayItemSetState",
		() => new RelayItemSetState(),
		() => [],
		RelayItemSetState,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"name\"" }), /* @__PURE__ */ $.structField("Count", /* @__PURE__ */ $.basicType("int"), [1], 16, true, { tag: "json:\"count\"" }), /* @__PURE__ */ $.structField("Items", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tchannel.RelayItemState"), [2], 24, true, { tag: "json:\"items,omitempty\"" })]
	)
}

export class RelayerRuntimeState {
	public get Count(): number {
		return this._fields.Count
	}

	public set Count(value: number) {
		this._fields.Count = value
	}

	public get InboundItems(): RelayItemSetState {
		return this._fields.InboundItems
	}

	public set InboundItems(value: RelayItemSetState) {
		this._fields.InboundItems = value
	}

	public get OutboundItems(): RelayItemSetState {
		return this._fields.OutboundItems
	}

	public set OutboundItems(value: RelayItemSetState) {
		this._fields.OutboundItems = value
	}

	public get MaxTimeout(): time.Duration {
		return this._fields.MaxTimeout
	}

	public set MaxTimeout(value: time.Duration) {
		this._fields.MaxTimeout = value
	}

	public get MaxConnectionTimeout(): time.Duration {
		return this._fields.MaxConnectionTimeout
	}

	public set MaxConnectionTimeout(value: time.Duration) {
		this._fields.MaxConnectionTimeout = value
	}

	public _fields: {
		Count: number
		InboundItems: RelayItemSetState
		OutboundItems: RelayItemSetState
		MaxTimeout: time.Duration
		MaxConnectionTimeout: time.Duration
	}

	constructor(init?: Partial<{Count?: number, InboundItems?: RelayItemSetState, OutboundItems?: RelayItemSetState, MaxTimeout?: time.Duration, MaxConnectionTimeout?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			Count: init?.Count ?? (0 as number),
			InboundItems: init?.InboundItems ? init.InboundItems.clone() : new RelayItemSetState(undefined, true),
			OutboundItems: init?.OutboundItems ? init.OutboundItems.clone() : new RelayItemSetState(undefined, true),
			MaxTimeout: init?.MaxTimeout ?? (0n as time.Duration),
			MaxConnectionTimeout: init?.MaxConnectionTimeout ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RelayerRuntimeState {
		return new RelayerRuntimeState(this, true)
	}

	public __goscriptAssign(source: RelayerRuntimeState): void {
		const target = this._fields
		const values = source._fields
		target.Count = values.Count
		$.assignStruct(target.InboundItems, values.InboundItems)
		$.assignStruct(target.OutboundItems, values.OutboundItems)
		target.MaxTimeout = values.MaxTimeout
		target.MaxConnectionTimeout = values.MaxConnectionTimeout
	}

	static __typeInfo = $.registerStructType(
		"tchannel.RelayerRuntimeState",
		() => new RelayerRuntimeState(),
		() => [],
		RelayerRuntimeState,
		() => [/* @__PURE__ */ $.structField("Count", /* @__PURE__ */ $.basicType("int"), [0], 0, true, { tag: "json:\"count\"" }), /* @__PURE__ */ $.structField("InboundItems", "tchannel.RelayItemSetState", [1], 8, true, { tag: "json:\"inboundItems\"" }), /* @__PURE__ */ $.structField("OutboundItems", "tchannel.RelayItemSetState", [2], 40, true, { tag: "json:\"outboundItems\"" }), /* @__PURE__ */ $.structField("MaxTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 72, true, { tag: "json:\"maxTimeout\"" }), /* @__PURE__ */ $.structField("MaxConnectionTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [4], 80, true, { tag: "json:\"maxConnectionTimeout\"" })]
	)
}

export class ConnectionRuntimeState {
	public get ID(): number {
		return this._fields.ID
	}

	public set ID(value: number) {
		this._fields.ID = value
	}

	public get ConnectionState(): string {
		return this._fields.ConnectionState
	}

	public set ConnectionState(value: string) {
		this._fields.ConnectionState = value
	}

	public get LocalHostPort(): string {
		return this._fields.LocalHostPort
	}

	public set LocalHostPort(value: string) {
		this._fields.LocalHostPort = value
	}

	public get RemoteHostPort(): string {
		return this._fields.RemoteHostPort
	}

	public set RemoteHostPort(value: string) {
		this._fields.RemoteHostPort = value
	}

	public get OutboundHostPort(): string {
		return this._fields.OutboundHostPort
	}

	public set OutboundHostPort(value: string) {
		this._fields.OutboundHostPort = value
	}

	public get RemotePeer(): __goscript_connection.PeerInfo {
		return this._fields.RemotePeer
	}

	public set RemotePeer(value: __goscript_connection.PeerInfo) {
		this._fields.RemotePeer = value
	}

	public get InboundExchange(): ExchangeSetRuntimeState {
		return this._fields.InboundExchange
	}

	public set InboundExchange(value: ExchangeSetRuntimeState) {
		this._fields.InboundExchange = value
	}

	public get OutboundExchange(): ExchangeSetRuntimeState {
		return this._fields.OutboundExchange
	}

	public set OutboundExchange(value: ExchangeSetRuntimeState) {
		this._fields.OutboundExchange = value
	}

	public get Relayer(): RelayerRuntimeState {
		return this._fields.Relayer
	}

	public set Relayer(value: RelayerRuntimeState) {
		this._fields.Relayer = value
	}

	public get HealthChecks(): $.Slice<boolean> {
		return this._fields.HealthChecks
	}

	public set HealthChecks(value: $.Slice<boolean>) {
		this._fields.HealthChecks = value
	}

	public get LastActivityRead(): bigint {
		return this._fields.LastActivityRead
	}

	public set LastActivityRead(value: bigint) {
		this._fields.LastActivityRead = value
	}

	public get LastActivityWrite(): bigint {
		return this._fields.LastActivityWrite
	}

	public set LastActivityWrite(value: bigint) {
		this._fields.LastActivityWrite = value
	}

	public get SendChQueued(): number {
		return this._fields.SendChQueued
	}

	public set SendChQueued(value: number) {
		this._fields.SendChQueued = value
	}

	public get SendChCapacity(): number {
		return this._fields.SendChCapacity
	}

	public set SendChCapacity(value: number) {
		this._fields.SendChCapacity = value
	}

	public get SendBufferUsage(): number {
		return this._fields.SendBufferUsage
	}

	public set SendBufferUsage(value: number) {
		this._fields.SendBufferUsage = value
	}

	public get SendBufferSize(): number {
		return this._fields.SendBufferSize
	}

	public set SendBufferSize(value: number) {
		this._fields.SendBufferSize = value
	}

	public _fields: {
		ID: number
		ConnectionState: string
		LocalHostPort: string
		RemoteHostPort: string
		OutboundHostPort: string
		RemotePeer: __goscript_connection.PeerInfo
		InboundExchange: ExchangeSetRuntimeState
		OutboundExchange: ExchangeSetRuntimeState
		Relayer: RelayerRuntimeState
		HealthChecks: $.Slice<boolean>
		LastActivityRead: bigint
		LastActivityWrite: bigint
		SendChQueued: number
		SendChCapacity: number
		SendBufferUsage: number
		SendBufferSize: number
	}

	constructor(init?: Partial<{ID?: number, ConnectionState?: string, LocalHostPort?: string, RemoteHostPort?: string, OutboundHostPort?: string, RemotePeer?: __goscript_connection.PeerInfo, InboundExchange?: ExchangeSetRuntimeState, OutboundExchange?: ExchangeSetRuntimeState, Relayer?: RelayerRuntimeState, HealthChecks?: $.Slice<boolean>, LastActivityRead?: bigint, LastActivityWrite?: bigint, SendChQueued?: number, SendChCapacity?: number, SendBufferUsage?: number, SendBufferSize?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			ID: init?.ID ?? (0 as number),
			ConnectionState: init?.ConnectionState ?? ("" as string),
			LocalHostPort: init?.LocalHostPort ?? ("" as string),
			RemoteHostPort: init?.RemoteHostPort ?? ("" as string),
			OutboundHostPort: init?.OutboundHostPort ?? ("" as string),
			RemotePeer: init?.RemotePeer ? init.RemotePeer.clone() : new __goscript_connection.PeerInfo(undefined, true),
			InboundExchange: init?.InboundExchange ? init.InboundExchange.clone() : new ExchangeSetRuntimeState(undefined, true),
			OutboundExchange: init?.OutboundExchange ? init.OutboundExchange.clone() : new ExchangeSetRuntimeState(undefined, true),
			Relayer: init?.Relayer ? init.Relayer.clone() : new RelayerRuntimeState(undefined, true),
			HealthChecks: init?.HealthChecks ?? (null! as $.Slice<boolean>),
			LastActivityRead: init?.LastActivityRead ?? (0n as bigint),
			LastActivityWrite: init?.LastActivityWrite ?? (0n as bigint),
			SendChQueued: init?.SendChQueued ?? (0 as number),
			SendChCapacity: init?.SendChCapacity ?? (0 as number),
			SendBufferUsage: init?.SendBufferUsage ?? (0 as number),
			SendBufferSize: init?.SendBufferSize ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ConnectionRuntimeState {
		return new ConnectionRuntimeState(this, true)
	}

	public __goscriptAssign(source: ConnectionRuntimeState): void {
		const target = this._fields
		const values = source._fields
		target.ID = values.ID
		target.ConnectionState = values.ConnectionState
		target.LocalHostPort = values.LocalHostPort
		target.RemoteHostPort = values.RemoteHostPort
		target.OutboundHostPort = values.OutboundHostPort
		$.assignStruct(target.RemotePeer, values.RemotePeer)
		$.assignStruct(target.InboundExchange, values.InboundExchange)
		$.assignStruct(target.OutboundExchange, values.OutboundExchange)
		$.assignStruct(target.Relayer, values.Relayer)
		target.HealthChecks = values.HealthChecks
		target.LastActivityRead = values.LastActivityRead
		target.LastActivityWrite = values.LastActivityWrite
		target.SendChQueued = values.SendChQueued
		target.SendChCapacity = values.SendChCapacity
		target.SendBufferUsage = values.SendBufferUsage
		target.SendBufferSize = values.SendBufferSize
	}

	static __typeInfo = $.registerStructType(
		"tchannel.ConnectionRuntimeState",
		() => new ConnectionRuntimeState(),
		() => [],
		ConnectionRuntimeState,
		() => [/* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true, { tag: "json:\"id\"" }), /* @__PURE__ */ $.structField("ConnectionState", /* @__PURE__ */ $.basicType("string"), [1], 8, true, { tag: "json:\"connectionState\"" }), /* @__PURE__ */ $.structField("LocalHostPort", /* @__PURE__ */ $.basicType("string"), [2], 24, true, { tag: "json:\"localHostPort\"" }), /* @__PURE__ */ $.structField("RemoteHostPort", /* @__PURE__ */ $.basicType("string"), [3], 40, true, { tag: "json:\"remoteHostPort\"" }), /* @__PURE__ */ $.structField("OutboundHostPort", /* @__PURE__ */ $.basicType("string"), [4], 56, true, { tag: "json:\"outboundHostPort\"" }), /* @__PURE__ */ $.structField("RemotePeer", "tchannel.PeerInfo", [5], 72, true, { tag: "json:\"remotePeer\"" }), /* @__PURE__ */ $.structField("InboundExchange", "tchannel.ExchangeSetRuntimeState", [6], 160, true, { tag: "json:\"inboundExchange\"" }), /* @__PURE__ */ $.structField("OutboundExchange", "tchannel.ExchangeSetRuntimeState", [7], 192, true, { tag: "json:\"outboundExchange\"" }), /* @__PURE__ */ $.structField("Relayer", "tchannel.RelayerRuntimeState", [8], 224, true, { tag: "json:\"relayer\"" }), /* @__PURE__ */ $.structField("HealthChecks", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool")), [9], 312, true, { tag: "json:\"healthChecks,omitempty\"" }), /* @__PURE__ */ $.structField("LastActivityRead", /* @__PURE__ */ $.basicType("int64"), [10], 336, true, { tag: "json:\"lastActivityRead\"" }), /* @__PURE__ */ $.structField("LastActivityWrite", /* @__PURE__ */ $.basicType("int64"), [11], 344, true, { tag: "json:\"lastActivityWrite\"" }), /* @__PURE__ */ $.structField("SendChQueued", /* @__PURE__ */ $.basicType("int"), [12], 352, true, { tag: "json:\"sendChQueued\"" }), /* @__PURE__ */ $.structField("SendChCapacity", /* @__PURE__ */ $.basicType("int"), [13], 360, true, { tag: "json:\"sendChCapacity\"" }), /* @__PURE__ */ $.structField("SendBufferUsage", /* @__PURE__ */ $.basicType("int"), [14], 368, true, { tag: "json:\"sendBufferUsage\"" }), /* @__PURE__ */ $.structField("SendBufferSize", /* @__PURE__ */ $.basicType("int"), [15], 376, true, { tag: "json:\"sendBufferSize\"" })]
	)
}

export class ExchangeRuntimeState {
	public get ID(): number {
		return this._fields.ID
	}

	public set ID(value: number) {
		this._fields.ID = value
	}

	public get MessageType(): __goscript_messages.messageType {
		return this._fields.MessageType
	}

	public set MessageType(value: __goscript_messages.messageType) {
		this._fields.MessageType = value
	}

	public _fields: {
		ID: number
		MessageType: __goscript_messages.messageType
	}

	constructor(init?: Partial<{ID?: number, MessageType?: __goscript_messages.messageType}>, __goscriptValue?: boolean) {
		this._fields = {
			ID: init?.ID ?? (0 as number),
			MessageType: init?.MessageType ?? (0 as __goscript_messages.messageType)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ExchangeRuntimeState {
		return new ExchangeRuntimeState(this, true)
	}

	public __goscriptAssign(source: ExchangeRuntimeState): void {
		const target = this._fields
		const values = source._fields
		target.ID = values.ID
		target.MessageType = values.MessageType
	}

	static __typeInfo = $.registerStructType(
		"tchannel.ExchangeRuntimeState",
		() => new ExchangeRuntimeState(),
		() => [],
		ExchangeRuntimeState,
		() => [/* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true, { tag: "json:\"id\"" }), /* @__PURE__ */ $.structField("MessageType", /* @__PURE__ */ $.basicType("uint8", "tchannel.messageType"), [1], 4, true, { tag: "json:\"messageType\"" })]
	)
}

export class RelayItemState {
	public get ID(): number {
		return this._fields.ID
	}

	public set ID(value: number) {
		this._fields.ID = value
	}

	public get RemapID(): number {
		return this._fields.RemapID
	}

	public set RemapID(value: number) {
		this._fields.RemapID = value
	}

	public get DestinationConnectionID(): number {
		return this._fields.DestinationConnectionID
	}

	public set DestinationConnectionID(value: number) {
		this._fields.DestinationConnectionID = value
	}

	public get Tomb(): boolean {
		return this._fields.Tomb
	}

	public set Tomb(value: boolean) {
		this._fields.Tomb = value
	}

	public _fields: {
		ID: number
		RemapID: number
		DestinationConnectionID: number
		Tomb: boolean
	}

	constructor(init?: Partial<{ID?: number, RemapID?: number, DestinationConnectionID?: number, Tomb?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			ID: init?.ID ?? (0 as number),
			RemapID: init?.RemapID ?? (0 as number),
			DestinationConnectionID: init?.DestinationConnectionID ?? (0 as number),
			Tomb: init?.Tomb ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RelayItemState {
		return new RelayItemState(this, true)
	}

	public __goscriptAssign(source: RelayItemState): void {
		const target = this._fields
		const values = source._fields
		target.ID = values.ID
		target.RemapID = values.RemapID
		target.DestinationConnectionID = values.DestinationConnectionID
		target.Tomb = values.Tomb
	}

	static __typeInfo = $.registerStructType(
		"tchannel.RelayItemState",
		() => new RelayItemState(),
		() => [],
		RelayItemState,
		() => [/* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true, { tag: "json:\"id\"" }), /* @__PURE__ */ $.structField("RemapID", /* @__PURE__ */ $.basicType("uint32"), [1], 4, true, { tag: "json:\"remapID\"" }), /* @__PURE__ */ $.structField("DestinationConnectionID", /* @__PURE__ */ $.basicType("uint32"), [2], 8, true, { tag: "json:\"destinationConnectionID\"" }), /* @__PURE__ */ $.structField("Tomb", /* @__PURE__ */ $.basicType("bool"), [3], 12, true, { tag: "json:\"tomb\"" })]
	)
}

export class PeerRuntimeState {
	public get HostPort(): string {
		return this._fields.HostPort
	}

	public set HostPort(value: string) {
		this._fields.HostPort = value
	}

	public get OutboundConnections(): $.Slice<ConnectionRuntimeState> {
		return this._fields.OutboundConnections
	}

	public set OutboundConnections(value: $.Slice<ConnectionRuntimeState>) {
		this._fields.OutboundConnections = value
	}

	public get InboundConnections(): $.Slice<ConnectionRuntimeState> {
		return this._fields.InboundConnections
	}

	public set InboundConnections(value: $.Slice<ConnectionRuntimeState>) {
		this._fields.InboundConnections = value
	}

	public get ChosenCount(): bigint {
		return this._fields.ChosenCount
	}

	public set ChosenCount(value: bigint) {
		this._fields.ChosenCount = value
	}

	public get SCCount(): number {
		return this._fields.SCCount
	}

	public set SCCount(value: number) {
		this._fields.SCCount = value
	}

	public _fields: {
		HostPort: string
		OutboundConnections: $.Slice<ConnectionRuntimeState>
		InboundConnections: $.Slice<ConnectionRuntimeState>
		ChosenCount: bigint
		SCCount: number
	}

	constructor(init?: Partial<{HostPort?: string, OutboundConnections?: $.Slice<ConnectionRuntimeState>, InboundConnections?: $.Slice<ConnectionRuntimeState>, ChosenCount?: bigint, SCCount?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			HostPort: init?.HostPort ?? ("" as string),
			OutboundConnections: init?.OutboundConnections ?? (null! as $.Slice<ConnectionRuntimeState>),
			InboundConnections: init?.InboundConnections ?? (null! as $.Slice<ConnectionRuntimeState>),
			ChosenCount: init?.ChosenCount ?? (0n as bigint),
			SCCount: init?.SCCount ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PeerRuntimeState {
		return new PeerRuntimeState(this, true)
	}

	public __goscriptAssign(source: PeerRuntimeState): void {
		const target = this._fields
		const values = source._fields
		target.HostPort = values.HostPort
		target.OutboundConnections = values.OutboundConnections
		target.InboundConnections = values.InboundConnections
		target.ChosenCount = values.ChosenCount
		target.SCCount = values.SCCount
	}

	static __typeInfo = $.registerStructType(
		"tchannel.PeerRuntimeState",
		() => new PeerRuntimeState(),
		() => [],
		PeerRuntimeState,
		() => [/* @__PURE__ */ $.structField("HostPort", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"hostPort\"" }), /* @__PURE__ */ $.structField("OutboundConnections", /* @__PURE__ */ $.sliceType("tchannel.ConnectionRuntimeState"), [1], 16, true, { tag: "json:\"outboundConnections\"" }), /* @__PURE__ */ $.structField("InboundConnections", /* @__PURE__ */ $.sliceType("tchannel.ConnectionRuntimeState"), [2], 40, true, { tag: "json:\"inboundConnections\"" }), /* @__PURE__ */ $.structField("ChosenCount", /* @__PURE__ */ $.basicType("uint64"), [3], 64, true, { tag: "json:\"chosenCount\"" }), /* @__PURE__ */ $.structField("SCCount", /* @__PURE__ */ $.basicType("uint32"), [4], 72, true, { tag: "json:\"scCount\"" })]
	)
}

export const methodHandler: handlerType = "methods"

export const overrideHandler: string = "overriden"

export function handlerType_String(h: handlerType): string {
	return h
}

export async function fromPeerList(peers: containsPeerList | null, opts: IntrospectionOptions | $.VarRef<IntrospectionOptions> | null): globalThis.Promise<globalThis.Map<string, PeerRuntimeState> | null> {
	let m: globalThis.Map<string, PeerRuntimeState> | null = $.makeMap<string, PeerRuntimeState>()
	for (let [__rangeKey, peer] of ((__goscriptAwait = (peers !== null && (peers as any).__isVarRef !== true && (peers as any).__goValue === undefined ? (peers as Exclude<containsPeerList, null>) : $.pointerValue<Exclude<containsPeerList, null>>(peers)).Copy(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as globalThis.Map<string, __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null> | null)?.entries() ?? []) {
		let peerState = await (peer !== null && (peer as any).__isVarRef !== true && (peer as any).__goValue === undefined ? ((peer as any) as __goscript_peer.Peer).IntrospectState(opts) : __goscript_peer.Peer.prototype.IntrospectState.call(peer, opts))
		if ((($.sliceLen(peerState.InboundConnections) + $.sliceLen(peerState.OutboundConnections)) > 0) || $.pointerValue<IntrospectionOptions>(opts).IncludeEmptyPeers) {
			$.mapSet(m, (peer !== null && (peer as any).__isVarRef !== true && (peer as any).__goValue === undefined ? ((peer as any) as __goscript_peer.Peer).HostPort() : __goscript_peer.Peer.prototype.HostPort.call(peer)), (peerState).clone())
		}
	}
	return m
}

export async function getConnectionRuntimeState(conns: $.Slice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null>, opts: IntrospectionOptions | $.VarRef<IntrospectionOptions> | null): globalThis.Promise<$.Slice<ConnectionRuntimeState>> {
	let connStates: $.Slice<ConnectionRuntimeState> = $.makeSlice<ConnectionRuntimeState>($.sliceLen(conns), undefined, undefined, () => new ConnectionRuntimeState(undefined, true))

	for (let __goscriptRangeTarget0 = conns, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(connStates), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let conn = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null)
		$.assignStruct((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)], await (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as __goscript_connection.Connection).IntrospectState(opts) : __goscript_connection.Connection.prototype.IntrospectState.call(conn, opts)))
	}

	return connStates
}

export function getStacks(all: boolean): $.Slice<number> {
	let buf: $.Slice<number> = null! as $.Slice<number>
	for (let n = 4096; n < 10485760; n = n * (2)) {
		buf = $.makeSlice<number>(n, undefined, "byte")
		let stackLen = runtime.Stack(buf, all)
		if (stackLen < n) {
			return $.goSlice(buf, undefined, stackLen)
		}
	}

	// return the first 10MB of stacks if we have more than 10MB.
	return buf
}

export async function handleInternalRuntime(arg3: $.Slice<number>): globalThis.Promise<any> {
	let opts: $.VarRef<GoRuntimeStateOptions> = $.varRef(new GoRuntimeStateOptions(undefined, true))
	await json.Unmarshal(arg3, $.interfaceValue(opts, "*tchannel.GoRuntimeStateOptions", /* @__PURE__ */ $.pointerType("tchannel.GoRuntimeStateOptions")))

	let state = (() => { const __goscriptLiteralField0 = runtime.NumGoroutine(); const __goscriptLiteralField1 = runtime.NumCPU(); const __goscriptLiteralField2 = runtime.NumCgoCall(); return new GoRuntimeState({NumGoroutines: __goscriptLiteralField0, NumCPU: __goscriptLiteralField1, NumCGo: __goscriptLiteralField2}, true) })()
	runtime.ReadMemStats($.fieldRef(state._fields, "MemStats"))
	if (opts.value.IncludeGoStacks) {
		state.GoStacks = getStacks(true)
	}

	return $.interfaceValue((state).clone(), "tchannel.GoRuntimeState", "tchannel.GoRuntimeState")
}

export function introspectRuntimeVersion(): RuntimeVersion {
	return (() => { const __goscriptLiteralField3 = runtime.Version(); return new RuntimeVersion({GoVersion: __goscriptLiteralField3, LibraryVersion: "1.34.3-dev"}, true) })()
}

var __goscriptAwait: any
