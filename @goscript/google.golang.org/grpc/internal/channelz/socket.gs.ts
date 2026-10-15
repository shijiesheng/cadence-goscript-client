// Generated file based on socket.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as net from "@goscript/net/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_channel from "./channel.gs.ts"

import * as __goscript_channelmap from "./channelmap.gs.ts"

import * as __goscript_logging from "./logging.gs.ts"

import * as __goscript_server from "./server.gs.ts"

import * as __goscript_subchannel from "./subchannel.gs.ts"

import * as __goscript_syscall_nonlinux from "./syscall_nonlinux.gs.ts"

import * as __goscript_trace from "./trace.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./channel.gs.ts"
import "./channelmap.gs.ts"
import "./logging.gs.ts"
import "./server.gs.ts"
import "./subchannel.gs.ts"
import "./syscall_nonlinux.gs.ts"
import "./trace.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/internal/channelz", ["channelz.SocketMetrics", "channelz.EphemeralSocketMetrics", "channelz.SocketType", "channelz.Socket"])

export type SocketType = string

export class SocketMetrics {
	// The number of streams that have been started.
	public get StreamsStarted(): atomic.Int64 {
		return this._fields.StreamsStarted
	}

	public set StreamsStarted(value: atomic.Int64) {
		this._fields.StreamsStarted = value
	}

	// The number of streams that have ended successfully:
	// On client side, receiving frame with eos bit set.
	// On server side, sending frame with eos bit set.
	public get StreamsSucceeded(): atomic.Int64 {
		return this._fields.StreamsSucceeded
	}

	public set StreamsSucceeded(value: atomic.Int64) {
		this._fields.StreamsSucceeded = value
	}

	// The number of streams that have ended unsuccessfully:
	// On client side, termination without receiving frame with eos bit set.
	// On server side, termination without sending frame with eos bit set.
	public get StreamsFailed(): atomic.Int64 {
		return this._fields.StreamsFailed
	}

	public set StreamsFailed(value: atomic.Int64) {
		this._fields.StreamsFailed = value
	}

	// The number of messages successfully sent on this socket.
	public get MessagesSent(): atomic.Int64 {
		return this._fields.MessagesSent
	}

	public set MessagesSent(value: atomic.Int64) {
		this._fields.MessagesSent = value
	}

	public get MessagesReceived(): atomic.Int64 {
		return this._fields.MessagesReceived
	}

	public set MessagesReceived(value: atomic.Int64) {
		this._fields.MessagesReceived = value
	}

	// The number of keep alives sent.  This is typically implemented with HTTP/2
	// ping messages.
	public get KeepAlivesSent(): atomic.Int64 {
		return this._fields.KeepAlivesSent
	}

	public set KeepAlivesSent(value: atomic.Int64) {
		this._fields.KeepAlivesSent = value
	}

	// The last time a stream was created by this endpoint.  Usually unset for
	// servers.
	public get LastLocalStreamCreatedTimestamp(): atomic.Int64 {
		return this._fields.LastLocalStreamCreatedTimestamp
	}

	public set LastLocalStreamCreatedTimestamp(value: atomic.Int64) {
		this._fields.LastLocalStreamCreatedTimestamp = value
	}

	// The last time a stream was created by the remote endpoint.  Usually unset
	// for clients.
	public get LastRemoteStreamCreatedTimestamp(): atomic.Int64 {
		return this._fields.LastRemoteStreamCreatedTimestamp
	}

	public set LastRemoteStreamCreatedTimestamp(value: atomic.Int64) {
		this._fields.LastRemoteStreamCreatedTimestamp = value
	}

	// The last time a message was sent by this endpoint.
	public get LastMessageSentTimestamp(): atomic.Int64 {
		return this._fields.LastMessageSentTimestamp
	}

	public set LastMessageSentTimestamp(value: atomic.Int64) {
		this._fields.LastMessageSentTimestamp = value
	}

	// The last time a message was received by this endpoint.
	public get LastMessageReceivedTimestamp(): atomic.Int64 {
		return this._fields.LastMessageReceivedTimestamp
	}

	public set LastMessageReceivedTimestamp(value: atomic.Int64) {
		this._fields.LastMessageReceivedTimestamp = value
	}

	public _fields: {
		StreamsStarted: atomic.Int64
		StreamsSucceeded: atomic.Int64
		StreamsFailed: atomic.Int64
		MessagesSent: atomic.Int64
		MessagesReceived: atomic.Int64
		KeepAlivesSent: atomic.Int64
		LastLocalStreamCreatedTimestamp: atomic.Int64
		LastRemoteStreamCreatedTimestamp: atomic.Int64
		LastMessageSentTimestamp: atomic.Int64
		LastMessageReceivedTimestamp: atomic.Int64
	}

	constructor(init?: Partial<{StreamsStarted?: atomic.Int64, StreamsSucceeded?: atomic.Int64, StreamsFailed?: atomic.Int64, MessagesSent?: atomic.Int64, MessagesReceived?: atomic.Int64, KeepAlivesSent?: atomic.Int64, LastLocalStreamCreatedTimestamp?: atomic.Int64, LastRemoteStreamCreatedTimestamp?: atomic.Int64, LastMessageSentTimestamp?: atomic.Int64, LastMessageReceivedTimestamp?: atomic.Int64}>, __goscriptValue?: boolean) {
		this._fields = {
			StreamsStarted: init?.StreamsStarted ? $.markAsStructValue($.cloneStructValue(init.StreamsStarted)) : $.markAsStructValue(new atomic.Int64()),
			StreamsSucceeded: init?.StreamsSucceeded ? $.markAsStructValue($.cloneStructValue(init.StreamsSucceeded)) : $.markAsStructValue(new atomic.Int64()),
			StreamsFailed: init?.StreamsFailed ? $.markAsStructValue($.cloneStructValue(init.StreamsFailed)) : $.markAsStructValue(new atomic.Int64()),
			MessagesSent: init?.MessagesSent ? $.markAsStructValue($.cloneStructValue(init.MessagesSent)) : $.markAsStructValue(new atomic.Int64()),
			MessagesReceived: init?.MessagesReceived ? $.markAsStructValue($.cloneStructValue(init.MessagesReceived)) : $.markAsStructValue(new atomic.Int64()),
			KeepAlivesSent: init?.KeepAlivesSent ? $.markAsStructValue($.cloneStructValue(init.KeepAlivesSent)) : $.markAsStructValue(new atomic.Int64()),
			LastLocalStreamCreatedTimestamp: init?.LastLocalStreamCreatedTimestamp ? $.markAsStructValue($.cloneStructValue(init.LastLocalStreamCreatedTimestamp)) : $.markAsStructValue(new atomic.Int64()),
			LastRemoteStreamCreatedTimestamp: init?.LastRemoteStreamCreatedTimestamp ? $.markAsStructValue($.cloneStructValue(init.LastRemoteStreamCreatedTimestamp)) : $.markAsStructValue(new atomic.Int64()),
			LastMessageSentTimestamp: init?.LastMessageSentTimestamp ? $.markAsStructValue($.cloneStructValue(init.LastMessageSentTimestamp)) : $.markAsStructValue(new atomic.Int64()),
			LastMessageReceivedTimestamp: init?.LastMessageReceivedTimestamp ? $.markAsStructValue($.cloneStructValue(init.LastMessageReceivedTimestamp)) : $.markAsStructValue(new atomic.Int64())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SocketMetrics {
		return new SocketMetrics(this, true)
	}

	public __goscriptAssign(source: SocketMetrics): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.StreamsStarted, values.StreamsStarted)
		$.assignStruct(target.StreamsSucceeded, values.StreamsSucceeded)
		$.assignStruct(target.StreamsFailed, values.StreamsFailed)
		$.assignStruct(target.MessagesSent, values.MessagesSent)
		$.assignStruct(target.MessagesReceived, values.MessagesReceived)
		$.assignStruct(target.KeepAlivesSent, values.KeepAlivesSent)
		$.assignStruct(target.LastLocalStreamCreatedTimestamp, values.LastLocalStreamCreatedTimestamp)
		$.assignStruct(target.LastRemoteStreamCreatedTimestamp, values.LastRemoteStreamCreatedTimestamp)
		$.assignStruct(target.LastMessageSentTimestamp, values.LastMessageSentTimestamp)
		$.assignStruct(target.LastMessageReceivedTimestamp, values.LastMessageReceivedTimestamp)
	}

	static __typeInfo = $.registerStructType(
		"channelz.SocketMetrics",
		() => new SocketMetrics(),
		() => [],
		SocketMetrics,
		() => [/* @__PURE__ */ $.structField("StreamsStarted", "atomic.Int64", [0], 0, true), /* @__PURE__ */ $.structField("StreamsSucceeded", "atomic.Int64", [1], 8, true), /* @__PURE__ */ $.structField("StreamsFailed", "atomic.Int64", [2], 16, true), /* @__PURE__ */ $.structField("MessagesSent", "atomic.Int64", [3], 24, true), /* @__PURE__ */ $.structField("MessagesReceived", "atomic.Int64", [4], 32, true), /* @__PURE__ */ $.structField("KeepAlivesSent", "atomic.Int64", [5], 40, true), /* @__PURE__ */ $.structField("LastLocalStreamCreatedTimestamp", "atomic.Int64", [6], 48, true), /* @__PURE__ */ $.structField("LastRemoteStreamCreatedTimestamp", "atomic.Int64", [7], 56, true), /* @__PURE__ */ $.structField("LastMessageSentTimestamp", "atomic.Int64", [8], 64, true), /* @__PURE__ */ $.structField("LastMessageReceivedTimestamp", "atomic.Int64", [9], 72, true)]
	)
}

export class EphemeralSocketMetrics {
	// The amount of window, granted to the local endpoint by the remote endpoint.
	// This may be slightly out of date due to network latency.  This does NOT
	// include stream level or TCP level flow control info.
	public get LocalFlowControlWindow(): bigint {
		return this._fields.LocalFlowControlWindow
	}

	public set LocalFlowControlWindow(value: bigint) {
		this._fields.LocalFlowControlWindow = value
	}

	// The amount of window, granted to the remote endpoint by the local endpoint.
	// This may be slightly out of date due to network latency.  This does NOT
	// include stream level or TCP level flow control info.
	public get RemoteFlowControlWindow(): bigint {
		return this._fields.RemoteFlowControlWindow
	}

	public set RemoteFlowControlWindow(value: bigint) {
		this._fields.RemoteFlowControlWindow = value
	}

	public _fields: {
		LocalFlowControlWindow: bigint
		RemoteFlowControlWindow: bigint
	}

	constructor(init?: Partial<{LocalFlowControlWindow?: bigint, RemoteFlowControlWindow?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			LocalFlowControlWindow: init?.LocalFlowControlWindow ?? (0n as bigint),
			RemoteFlowControlWindow: init?.RemoteFlowControlWindow ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EphemeralSocketMetrics {
		return new EphemeralSocketMetrics(this, true)
	}

	public __goscriptAssign(source: EphemeralSocketMetrics): void {
		const target = this._fields
		const values = source._fields
		target.LocalFlowControlWindow = values.LocalFlowControlWindow
		target.RemoteFlowControlWindow = values.RemoteFlowControlWindow
	}

	static __typeInfo = $.registerStructType(
		"channelz.EphemeralSocketMetrics",
		() => new EphemeralSocketMetrics(),
		() => [],
		EphemeralSocketMetrics,
		() => [/* @__PURE__ */ $.structField("LocalFlowControlWindow", /* @__PURE__ */ $.basicType("int64"), [0], 0, true), /* @__PURE__ */ $.structField("RemoteFlowControlWindow", /* @__PURE__ */ $.basicType("int64"), [1], 8, true)]
	)
}

export class Socket {
	public get Entity(): __goscript_channelmap.Entity | null {
		return this._fields.Entity
	}

	public set Entity(value: __goscript_channelmap.Entity | null) {
		this._fields.Entity = value
	}

	public get SocketType(): SocketType {
		return this._fields.SocketType
	}

	public set SocketType(value: SocketType) {
		this._fields.SocketType = value
	}

	public get ID(): bigint {
		return this._fields.ID
	}

	public set ID(value: bigint) {
		this._fields.ID = value
	}

	public get Parent(): __goscript_channelmap.Entity | null {
		return this._fields.Parent
	}

	public set Parent(value: __goscript_channelmap.Entity | null) {
		this._fields.Parent = value
	}

	public get cm(): __goscript_channelmap.channelMap | $.VarRef<__goscript_channelmap.channelMap> | null {
		return this._fields.cm
	}

	public set cm(value: __goscript_channelmap.channelMap | $.VarRef<__goscript_channelmap.channelMap> | null) {
		this._fields.cm = value
	}

	public get SocketMetrics(): SocketMetrics {
		return this._fields.SocketMetrics
	}

	public set SocketMetrics(value: SocketMetrics) {
		this._fields.SocketMetrics = value
	}

	public get EphemeralMetrics(): (() => EphemeralSocketMetrics | $.VarRef<EphemeralSocketMetrics> | null | globalThis.Promise<EphemeralSocketMetrics | $.VarRef<EphemeralSocketMetrics> | null>) | null {
		return this._fields.EphemeralMetrics
	}

	public set EphemeralMetrics(value: (() => EphemeralSocketMetrics | $.VarRef<EphemeralSocketMetrics> | null | globalThis.Promise<EphemeralSocketMetrics | $.VarRef<EphemeralSocketMetrics> | null>) | null) {
		this._fields.EphemeralMetrics = value
	}

	public get RefName(): string {
		return this._fields.RefName
	}

	public set RefName(value: string) {
		this._fields.RefName = value
	}

	// The locally bound address.  Immutable.
	public get LocalAddr(): net.Addr | null {
		return this._fields.LocalAddr
	}

	public set LocalAddr(value: net.Addr | null) {
		this._fields.LocalAddr = value
	}

	// The remote bound address.  May be absent.  Immutable.
	public get RemoteAddr(): net.Addr | null {
		return this._fields.RemoteAddr
	}

	public set RemoteAddr(value: net.Addr | null) {
		this._fields.RemoteAddr = value
	}

	// Optional, represents the name of the remote endpoint, if different than
	// the original target name.  Immutable.
	public get RemoteName(): string {
		return this._fields.RemoteName
	}

	public set RemoteName(value: string) {
		this._fields.RemoteName = value
	}

	// Immutable.
	public get SocketOptions(): __goscript_syscall_nonlinux.SocketOptionData | $.VarRef<__goscript_syscall_nonlinux.SocketOptionData> | null {
		return this._fields.SocketOptions
	}

	public set SocketOptions(value: __goscript_syscall_nonlinux.SocketOptionData | $.VarRef<__goscript_syscall_nonlinux.SocketOptionData> | null) {
		this._fields.SocketOptions = value
	}

	// Immutable.
	public get Security(): credentials.ChannelzSecurityValue | null {
		return this._fields.Security
	}

	public set Security(value: credentials.ChannelzSecurityValue | null) {
		this._fields.Security = value
	}

	public _fields: {
		Entity: __goscript_channelmap.Entity | null
		SocketType: SocketType
		ID: bigint
		Parent: __goscript_channelmap.Entity | null
		cm: __goscript_channelmap.channelMap | $.VarRef<__goscript_channelmap.channelMap> | null
		SocketMetrics: SocketMetrics
		EphemeralMetrics: (() => EphemeralSocketMetrics | $.VarRef<EphemeralSocketMetrics> | null | globalThis.Promise<EphemeralSocketMetrics | $.VarRef<EphemeralSocketMetrics> | null>) | null
		RefName: string
		LocalAddr: net.Addr | null
		RemoteAddr: net.Addr | null
		RemoteName: string
		SocketOptions: __goscript_syscall_nonlinux.SocketOptionData | $.VarRef<__goscript_syscall_nonlinux.SocketOptionData> | null
		Security: credentials.ChannelzSecurityValue | null
	}

	constructor(init?: Partial<{Entity?: __goscript_channelmap.Entity | null, SocketType?: SocketType, ID?: bigint, Parent?: __goscript_channelmap.Entity | null, cm?: __goscript_channelmap.channelMap | $.VarRef<__goscript_channelmap.channelMap> | null, SocketMetrics?: SocketMetrics, EphemeralMetrics?: (() => EphemeralSocketMetrics | $.VarRef<EphemeralSocketMetrics> | null | globalThis.Promise<EphemeralSocketMetrics | $.VarRef<EphemeralSocketMetrics> | null>) | null, RefName?: string, LocalAddr?: net.Addr | null, RemoteAddr?: net.Addr | null, RemoteName?: string, SocketOptions?: __goscript_syscall_nonlinux.SocketOptionData | $.VarRef<__goscript_syscall_nonlinux.SocketOptionData> | null, Security?: credentials.ChannelzSecurityValue | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Entity: init?.Entity ?? (null! as __goscript_channelmap.Entity | null),
			SocketType: init?.SocketType ?? ("" as SocketType),
			ID: init?.ID ?? (0n as bigint),
			Parent: init?.Parent ?? (null! as __goscript_channelmap.Entity | null),
			cm: init?.cm ?? (null! as __goscript_channelmap.channelMap | $.VarRef<__goscript_channelmap.channelMap> | null),
			SocketMetrics: init?.SocketMetrics ? init.SocketMetrics.clone() : new SocketMetrics(undefined, true),
			EphemeralMetrics: init?.EphemeralMetrics ?? (null! as (() => EphemeralSocketMetrics | $.VarRef<EphemeralSocketMetrics> | null | globalThis.Promise<EphemeralSocketMetrics | $.VarRef<EphemeralSocketMetrics> | null>) | null),
			RefName: init?.RefName ?? ("" as string),
			LocalAddr: init?.LocalAddr ?? (null! as net.Addr | null),
			RemoteAddr: init?.RemoteAddr ?? (null! as net.Addr | null),
			RemoteName: init?.RemoteName ?? ("" as string),
			SocketOptions: init?.SocketOptions ?? (null! as __goscript_syscall_nonlinux.SocketOptionData | $.VarRef<__goscript_syscall_nonlinux.SocketOptionData> | null),
			Security: init?.Security ?? (null! as credentials.ChannelzSecurityValue | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Socket {
		return new Socket(this, true)
	}

	public __goscriptAssign(source: Socket): void {
		const target = this._fields
		const values = source._fields
		target.Entity = $.assignFieldValue(target.Entity, values.Entity, "channelz.Entity")
		target.SocketType = values.SocketType
		target.ID = values.ID
		target.Parent = $.assignFieldValue(target.Parent, values.Parent, "channelz.Entity")
		target.cm = values.cm
		$.assignStruct(target.SocketMetrics, values.SocketMetrics)
		target.EphemeralMetrics = values.EphemeralMetrics
		target.RefName = values.RefName
		target.LocalAddr = $.assignFieldValue(target.LocalAddr, values.LocalAddr, "net.Addr")
		target.RemoteAddr = $.assignFieldValue(target.RemoteAddr, values.RemoteAddr, "net.Addr")
		target.RemoteName = values.RemoteName
		target.SocketOptions = values.SocketOptions
		target.Security = $.assignFieldValue(target.Security, values.Security, "credentials.ChannelzSecurityValue")
	}

	public async String(): globalThis.Promise<string> {
		const ls: Socket | $.VarRef<Socket> | null = this;
		const ls$: Socket = ls == null ? $.pointerTarget<Socket>(ls) : (ls as any).__isVarRef === true ? (ls as any).value : (ls as any).__goValue === undefined ? (ls as any) : $.pointerTarget<Socket>(ls)
		return fmt.Sprintf("%s %s #%d", ((ls$ as Socket).Parent as any), $.namedValueInterfaceValue<any>((ls$ as Socket).SocketType, "channelz.SocketType", {}, /* @__PURE__ */ $.basicType("string", "channelz.SocketType")), $.basicInterfaceValue((ls$ as Socket).ID, "int64"))
	}

	public async addChild(id: bigint, e: __goscript_channelmap.entry | null): globalThis.Promise<void> {
		const ls: Socket | $.VarRef<Socket> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_logging.logger).Errorf("cannot add a child (id = %d) of type %T to a listen socket", $.arrayToSlice<any>([$.basicInterfaceValue(id, "int64"), (e as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async deleteChild(id: bigint): globalThis.Promise<void> {
		const ls: Socket | $.VarRef<Socket> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_logging.logger).Errorf("cannot delete a child (id = %d) from a listen socket", $.arrayToSlice<any>([$.basicInterfaceValue(id, "int64")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async deleteSelfIfReady(): globalThis.Promise<void> {
		const ls: Socket | $.VarRef<Socket> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_logging.logger).Errorf("cannot call deleteSelfIfReady on a listen socket", null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public getParentID(): bigint {
		const ls: Socket | $.VarRef<Socket> | null = this;
		return $.pointerValue<Exclude<__goscript_channelmap.Entity, null>>($.pointerValue<Socket>(ls).Parent).id()
	}

	public id(): bigint {
		const ls: Socket | $.VarRef<Socket> | null = this;
		return $.pointerValue<Socket>(ls).ID
	}

	public async triggerDelete(): globalThis.Promise<void> {
		const ls: Socket | $.VarRef<Socket> | null = this;
		const ls$: Socket = ls == null ? $.pointerTarget<Socket>(ls) : (ls as any).__isVarRef === true ? (ls as any).value : (ls as any).__goValue === undefined ? (ls as any) : $.pointerTarget<Socket>(ls)
		__goscript_channelmap.channelMap.prototype.deleteEntry.call((ls$ as Socket).cm, (ls$ as Socket).ID)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_channelmap.entry, null>>($.mustTypeAssert<__goscript_channelmap.entry | null>((ls$ as Socket).Parent, "channelz.entry")).deleteChild((ls$ as Socket).ID), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public isEntity(): any {
		return $.pointerValue<Exclude<__goscript_channelmap.Entity | null, null>>(this.Entity).isEntity()
	}

	static __typeInfo = $.registerStructType(
		"channelz.Socket",
		() => new Socket(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("addChild", [["id", /* @__PURE__ */ $.basicType("int64")], ["e", "channelz.entry"]], [], true), $.methodSignature("deleteChild", [["id", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("deleteSelfIfReady", [], [], true), $.methodSignature("getParentID", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("id", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("triggerDelete", [], [], true), $.methodSignature("isEntity")],
		Socket,
		() => [/* @__PURE__ */ $.structField("Entity", "channelz.Entity", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("SocketType", /* @__PURE__ */ $.basicType("string", "channelz.SocketType"), [1], 16, true), /* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("int64"), [2], 32, true), /* @__PURE__ */ $.structField("Parent", "channelz.Entity", [3], 40, true), /* @__PURE__ */ $.structField("cm", /* @__PURE__ */ $.pointerType("channelz.channelMap"), [4], 56, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("SocketMetrics", "channelz.SocketMetrics", [5], 64, true), /* @__PURE__ */ $.structField("EphemeralMetrics", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("channelz.EphemeralSocketMetrics")] } as $.FunctionTypeInfo), [6], 144, true), /* @__PURE__ */ $.structField("RefName", /* @__PURE__ */ $.basicType("string"), [7], 152, true), /* @__PURE__ */ $.structField("LocalAddr", "net.Addr", [8], 168, true), /* @__PURE__ */ $.structField("RemoteAddr", "net.Addr", [9], 184, true), /* @__PURE__ */ $.structField("RemoteName", /* @__PURE__ */ $.basicType("string"), [10], 200, true), /* @__PURE__ */ $.structField("SocketOptions", /* @__PURE__ */ $.pointerType("channelz.SocketOptionData"), [11], 216, true), /* @__PURE__ */ $.structField("Security", "credentials.ChannelzSecurityValue", [12], 224, true)]
	)
}

export const SocketTypeNormal: string = "NormalSocket"

export const SocketTypeListen: string = "ListenSocket"

var __goscriptAwait: any
