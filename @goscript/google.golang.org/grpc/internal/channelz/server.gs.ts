// Generated file based on server.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_channel from "./channel.gs.ts"

import * as __goscript_channelmap from "./channelmap.gs.ts"

import * as __goscript_funcs from "./funcs.gs.ts"

import * as __goscript_logging from "./logging.gs.ts"

import * as __goscript_socket from "./socket.gs.ts"

import * as __goscript_subchannel from "./subchannel.gs.ts"

import * as __goscript_syscall_nonlinux from "./syscall_nonlinux.gs.ts"

import * as __goscript_trace from "./trace.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./channel.gs.ts"
import "./channelmap.gs.ts"
import "./funcs.gs.ts"
import "./logging.gs.ts"
import "./socket.gs.ts"
import "./subchannel.gs.ts"
import "./syscall_nonlinux.gs.ts"
import "./trace.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/internal/channelz", ["channelz.Server", "channelz.ServerMetrics"])

export class ServerMetrics {
	// The number of incoming calls started on the server.
	public get CallsStarted(): atomic.Int64 {
		return this._fields.CallsStarted
	}

	public set CallsStarted(value: atomic.Int64) {
		this._fields.CallsStarted = value
	}

	// The number of incoming calls that have completed with an OK status.
	public get CallsSucceeded(): atomic.Int64 {
		return this._fields.CallsSucceeded
	}

	public set CallsSucceeded(value: atomic.Int64) {
		this._fields.CallsSucceeded = value
	}

	// The number of incoming calls that have a completed with a non-OK status.
	public get CallsFailed(): atomic.Int64 {
		return this._fields.CallsFailed
	}

	public set CallsFailed(value: atomic.Int64) {
		this._fields.CallsFailed = value
	}

	// The last time a call was started on the server.
	public get LastCallStartedTimestamp(): atomic.Int64 {
		return this._fields.LastCallStartedTimestamp
	}

	public set LastCallStartedTimestamp(value: atomic.Int64) {
		this._fields.LastCallStartedTimestamp = value
	}

	public _fields: {
		CallsStarted: atomic.Int64
		CallsSucceeded: atomic.Int64
		CallsFailed: atomic.Int64
		LastCallStartedTimestamp: atomic.Int64
	}

	constructor(init?: Partial<{CallsStarted?: atomic.Int64, CallsSucceeded?: atomic.Int64, CallsFailed?: atomic.Int64, LastCallStartedTimestamp?: atomic.Int64}>, __goscriptValue?: boolean) {
		this._fields = {
			CallsStarted: init?.CallsStarted ? $.markAsStructValue($.cloneStructValue(init.CallsStarted)) : $.markAsStructValue(new atomic.Int64()),
			CallsSucceeded: init?.CallsSucceeded ? $.markAsStructValue($.cloneStructValue(init.CallsSucceeded)) : $.markAsStructValue(new atomic.Int64()),
			CallsFailed: init?.CallsFailed ? $.markAsStructValue($.cloneStructValue(init.CallsFailed)) : $.markAsStructValue(new atomic.Int64()),
			LastCallStartedTimestamp: init?.LastCallStartedTimestamp ? $.markAsStructValue($.cloneStructValue(init.LastCallStartedTimestamp)) : $.markAsStructValue(new atomic.Int64())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ServerMetrics {
		return new ServerMetrics(this, true)
	}

	public __goscriptAssign(source: ServerMetrics): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.CallsStarted, values.CallsStarted)
		$.assignStruct(target.CallsSucceeded, values.CallsSucceeded)
		$.assignStruct(target.CallsFailed, values.CallsFailed)
		$.assignStruct(target.LastCallStartedTimestamp, values.LastCallStartedTimestamp)
	}

	public CopyFrom(o: ServerMetrics | $.VarRef<ServerMetrics> | null): void {
		const sm: ServerMetrics | $.VarRef<ServerMetrics> | null = this;
		const sm$: ServerMetrics = sm == null ? $.pointerTarget<ServerMetrics>(sm) : (sm as any).__isVarRef === true ? (sm as any).value : (sm as any).__goValue === undefined ? (sm as any) : $.pointerTarget<ServerMetrics>(sm)
		const o$: ServerMetrics = o == null ? $.pointerTarget<ServerMetrics>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<ServerMetrics>(o)
		void (sm$ as ServerMetrics).CallsStarted.Store((o$ as ServerMetrics).CallsStarted.Load())
		void (sm$ as ServerMetrics).CallsSucceeded.Store((o$ as ServerMetrics).CallsSucceeded.Load())
		void (sm$ as ServerMetrics).CallsFailed.Store((o$ as ServerMetrics).CallsFailed.Load())
		void (sm$ as ServerMetrics).LastCallStartedTimestamp.Store((o$ as ServerMetrics).LastCallStartedTimestamp.Load())
	}

	static __typeInfo = $.registerStructType(
		"channelz.ServerMetrics",
		() => new ServerMetrics(),
		() => [$.methodSignature("CopyFrom", [["o", /* @__PURE__ */ $.pointerType("channelz.ServerMetrics")]], [], true)],
		ServerMetrics,
		() => [/* @__PURE__ */ $.structField("CallsStarted", "atomic.Int64", [0], 0, true), /* @__PURE__ */ $.structField("CallsSucceeded", "atomic.Int64", [1], 8, true), /* @__PURE__ */ $.structField("CallsFailed", "atomic.Int64", [2], 16, true), /* @__PURE__ */ $.structField("LastCallStartedTimestamp", "atomic.Int64", [3], 24, true)]
	)
}

export class Server {
	public get Entity(): __goscript_channelmap.Entity | null {
		return this._fields.Entity
	}

	public set Entity(value: __goscript_channelmap.Entity | null) {
		this._fields.Entity = value
	}

	public get ID(): bigint {
		return this._fields.ID
	}

	public set ID(value: bigint) {
		this._fields.ID = value
	}

	public get RefName(): string {
		return this._fields.RefName
	}

	public set RefName(value: string) {
		this._fields.RefName = value
	}

	public get ServerMetrics(): ServerMetrics {
		return this._fields.ServerMetrics
	}

	public set ServerMetrics(value: ServerMetrics) {
		this._fields.ServerMetrics = value
	}

	public get closeCalled(): boolean {
		return this._fields.closeCalled
	}

	public set closeCalled(value: boolean) {
		this._fields.closeCalled = value
	}

	public get sockets(): globalThis.Map<bigint, string> | null {
		return this._fields.sockets
	}

	public set sockets(value: globalThis.Map<bigint, string> | null) {
		this._fields.sockets = value
	}

	public get listenSockets(): globalThis.Map<bigint, string> | null {
		return this._fields.listenSockets
	}

	public set listenSockets(value: globalThis.Map<bigint, string> | null) {
		this._fields.listenSockets = value
	}

	public get cm(): __goscript_channelmap.channelMap | $.VarRef<__goscript_channelmap.channelMap> | null {
		return this._fields.cm
	}

	public set cm(value: __goscript_channelmap.channelMap | $.VarRef<__goscript_channelmap.channelMap> | null) {
		this._fields.cm = value
	}

	public _fields: {
		Entity: __goscript_channelmap.Entity | null
		ID: bigint
		RefName: string
		ServerMetrics: ServerMetrics
		closeCalled: boolean
		sockets: globalThis.Map<bigint, string> | null
		listenSockets: globalThis.Map<bigint, string> | null
		cm: __goscript_channelmap.channelMap | $.VarRef<__goscript_channelmap.channelMap> | null
	}

	constructor(init?: Partial<{Entity?: __goscript_channelmap.Entity | null, ID?: bigint, RefName?: string, ServerMetrics?: ServerMetrics, closeCalled?: boolean, sockets?: globalThis.Map<bigint, string> | null, listenSockets?: globalThis.Map<bigint, string> | null, cm?: __goscript_channelmap.channelMap | $.VarRef<__goscript_channelmap.channelMap> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Entity: init?.Entity ?? (null! as __goscript_channelmap.Entity | null),
			ID: init?.ID ?? (0n as bigint),
			RefName: init?.RefName ?? ("" as string),
			ServerMetrics: init?.ServerMetrics ? init.ServerMetrics.clone() : new ServerMetrics(undefined, true),
			closeCalled: init?.closeCalled ?? (false as boolean),
			sockets: init?.sockets ?? (null! as globalThis.Map<bigint, string> | null),
			listenSockets: init?.listenSockets ?? (null! as globalThis.Map<bigint, string> | null),
			cm: init?.cm ?? (null! as __goscript_channelmap.channelMap | $.VarRef<__goscript_channelmap.channelMap> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Server {
		return new Server(this, true)
	}

	public __goscriptAssign(source: Server): void {
		const target = this._fields
		const values = source._fields
		target.Entity = $.assignFieldValue(target.Entity, values.Entity, "channelz.Entity")
		target.ID = values.ID
		target.RefName = values.RefName
		$.assignStruct(target.ServerMetrics, values.ServerMetrics)
		target.closeCalled = values.closeCalled
		target.sockets = values.sockets
		target.listenSockets = values.listenSockets
		target.cm = values.cm
	}

	public async ListenSockets(): globalThis.Promise<globalThis.Map<bigint, string> | null> {
		const s: Server | $.VarRef<Server> | null = this;
		using __defer = new $.DisposableStack()
		await $.pointerValue<__goscript_channelmap.channelMap>(__goscript_funcs.__goscript_get_db()).mu.RLock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<__goscript_channelmap.channelMap>(__goscript_funcs.__goscript_get_db()).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		return __goscript_channelmap.copyMap($.pointerValue<Server>(s).listenSockets)
	}

	public async String(): globalThis.Promise<string> {
		const s: Server | $.VarRef<Server> | null = this;
		return fmt.Sprintf("Server #%d", $.basicInterfaceValue($.pointerValue<Server>(s).ID, "int64"))
	}

	public async addChild(id: bigint, e: __goscript_channelmap.entry | null): globalThis.Promise<void> {
		let s: Server | $.VarRef<Server> | null = this;
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		{
			const __goscriptTypeSwitchValue = e
			switch (true) {
				case $.typeAssert<__goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("channelz.Socket")).ok:
					{
						let v: __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null = $.typeAssert<__goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("channelz.Socket")).value
						switch ($.pointerValue<__goscript_socket.Socket>(v).SocketType) {
							case "NormalSocket":
							{
								$.mapSet((s$ as Server).sockets, id, $.pointerValue<__goscript_socket.Socket>(v).RefName)
								break
							}
							case "ListenSocket":
							{
								$.mapSet((s$ as Server).listenSockets, id, $.pointerValue<__goscript_socket.Socket>(v).RefName)
								break
							}
						}
					}
					break
				default:
					{
						let v: any = __goscriptTypeSwitchValue
						void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_logging.logger).Errorf("cannot add a child (id = %d) of type %T to a server", $.arrayToSlice<any>([$.basicInterfaceValue(id, "int64"), (e as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
			}
		}
	}

	public deleteChild(id: bigint): void {
		const s: Server | $.VarRef<Server> | null = this;
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		$.deleteMapEntry((s$ as Server).sockets, id)
		$.deleteMapEntry((s$ as Server).listenSockets, id)
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).deleteSelfIfReady() : Server.prototype.deleteSelfIfReady.call(s))
	}

	public deleteSelfIfReady(): void {
		const s: Server | $.VarRef<Server> | null = this;
		const s$: Server = s == null ? $.pointerTarget<Server>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Server>(s)
		if (!(s$ as Server).closeCalled || (($.len((s$ as Server).sockets) + $.len((s$ as Server).listenSockets)) != 0)) {
			return
		}
		__goscript_channelmap.channelMap.prototype.deleteEntry.call((s$ as Server).cm, (s$ as Server).ID)
	}

	public getParentID(): bigint {
		const s: Server | $.VarRef<Server> | null = this;
		return 0n
	}

	public id(): bigint {
		const s: Server | $.VarRef<Server> | null = this;
		return $.pointerValue<Server>(s).ID
	}

	public triggerDelete(): void {
		let s: Server | $.VarRef<Server> | null = this;
		$.pointerValue<Server>(s).closeCalled = true
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Server).deleteSelfIfReady() : Server.prototype.deleteSelfIfReady.call(s))
	}

	public isEntity(): any {
		return $.pointerValue<Exclude<__goscript_channelmap.Entity | null, null>>(this.Entity).isEntity()
	}

	static __typeInfo = $.registerStructType(
		"channelz.Server",
		() => new Server(),
		() => [$.methodSignature("ListenSockets", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("addChild", [["id", /* @__PURE__ */ $.basicType("int64")], ["e", "channelz.entry"]], [], true), $.methodSignature("deleteChild", [["id", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("deleteSelfIfReady", [], [], true), $.methodSignature("getParentID", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("id", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("triggerDelete", [], [], true), $.methodSignature("isEntity")],
		Server,
		() => [/* @__PURE__ */ $.structField("Entity", "channelz.Entity", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("int64"), [1], 16, true), /* @__PURE__ */ $.structField("RefName", /* @__PURE__ */ $.basicType("string"), [2], 24, true), /* @__PURE__ */ $.structField("ServerMetrics", "channelz.ServerMetrics", [3], 40, true), /* @__PURE__ */ $.structField("closeCalled", /* @__PURE__ */ $.basicType("bool"), [4], 72, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("sockets", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.basicType("string")), [5], 80, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("listenSockets", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.basicType("string")), [6], 88, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("cm", /* @__PURE__ */ $.pointerType("channelz.channelMap"), [7], 96, false, { pkgPath: "google.golang.org/grpc/internal/channelz" })]
	)
}

export function NewServerMetricsForTesting(started: bigint, succeeded: bigint, failed: bigint, timestamp: bigint): ServerMetrics | $.VarRef<ServerMetrics> | null {
	let sm: ServerMetrics | $.VarRef<ServerMetrics> | null = new ServerMetrics()
	let sm$: ServerMetrics = sm == null ? $.pointerTarget<ServerMetrics>(sm) : (sm as any).__isVarRef === true ? (sm as any).value : (sm as any).__goValue === undefined ? (sm as any) : $.pointerTarget<ServerMetrics>(sm)
	void (sm$ as ServerMetrics).CallsStarted.Store(started)
	void (sm$ as ServerMetrics).CallsSucceeded.Store(succeeded)
	void (sm$ as ServerMetrics).CallsFailed.Store(failed)
	void (sm$ as ServerMetrics).LastCallStartedTimestamp.Store(timestamp)
	return sm
}

var __goscriptAwait: any
