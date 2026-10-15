// Generated file based on channelmap.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sort from "@goscript/sort/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as net from "@goscript/net/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_channel from "./channel.gs.ts"

import * as __goscript_funcs from "./funcs.gs.ts"

import * as __goscript_logging from "./logging.gs.ts"

import * as __goscript_server from "./server.gs.ts"

import * as __goscript_socket from "./socket.gs.ts"

import * as __goscript_subchannel from "./subchannel.gs.ts"

import * as __goscript_syscall_nonlinux from "./syscall_nonlinux.gs.ts"

import * as __goscript_trace from "./trace.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/sort/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/atomic/index.js"
import "./channel.gs.ts"
import "./funcs.gs.ts"
import "./logging.gs.ts"
import "./server.gs.ts"
import "./socket.gs.ts"
import "./subchannel.gs.ts"
import "./syscall_nonlinux.gs.ts"
import "./trace.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/internal/channelz", ["channelz.entry", "channelz.channelMap", "channelz.tracedChannel", "channelz.int64Slice", "channelz.dummyEntry", "channelz.Entity"])

export type entry = {
	String(): string | globalThis.Promise<string>
	addChild(id: bigint, e: entry | null): void
	deleteChild(id: bigint): void
	deleteSelfIfReady(): void
	getParentID(): bigint
	id(): bigint
	isEntity(): void
	triggerDelete(): void
}

$.registerInterfaceType(
	"channelz.entry",
	null,
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("addChild", [["id", /* @__PURE__ */ $.basicType("int64")], ["e", "channelz.entry"]]), $.methodSignature("deleteChild", [["id", /* @__PURE__ */ $.basicType("int64")]]), $.methodSignature("deleteSelfIfReady"), $.methodSignature("getParentID", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("id", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("isEntity"), $.methodSignature("triggerDelete")]
);

export type tracedChannel = {
	decrTraceRefCount(): void
	getChannelTrace(): __goscript_trace.ChannelTrace | $.VarRef<__goscript_trace.ChannelTrace> | null
	getRefName(): string
	incrTraceRefCount(): void
}

$.registerInterfaceType(
	"channelz.tracedChannel",
	null,
	[$.methodSignature("decrTraceRefCount"), $.methodSignature("getChannelTrace", [], [/* @__PURE__ */ $.pointerType("channelz.ChannelTrace")]), $.methodSignature("getRefName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("incrTraceRefCount")]
);

export type int64Slice = $.Slice<bigint>

$.registerNamedType("channelz.int64Slice", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")));

$.registerNamedValueType(
	"channelz.int64Slice",
	{Len: (receiver: any, ...args: any[]) => (int64Slice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (int64Slice_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (int64Slice_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*channelz.int64Slice",
	{Len: (receiver: any, ...args: any[]) => (int64Slice_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (int64Slice_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (int64Slice_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export type Entity = {
	String(): string | globalThis.Promise<string>
	id(): bigint
	isEntity(): void
}

$.registerInterfaceType(
	"channelz.Entity",
	null,
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("id", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("isEntity")]
);

export class channelMap {
	public get mu(): sync.RWMutex {
		return this._fields.mu
	}

	public set mu(value: sync.RWMutex) {
		this._fields.mu = value
	}

	public get topLevelChannels(): globalThis.Map<bigint, {}> | null {
		return this._fields.topLevelChannels
	}

	public set topLevelChannels(value: globalThis.Map<bigint, {}> | null) {
		this._fields.topLevelChannels = value
	}

	public get channels(): globalThis.Map<bigint, __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null> | null {
		return this._fields.channels
	}

	public set channels(value: globalThis.Map<bigint, __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null> | null) {
		this._fields.channels = value
	}

	public get subChannels(): globalThis.Map<bigint, __goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null> | null {
		return this._fields.subChannels
	}

	public set subChannels(value: globalThis.Map<bigint, __goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null> | null) {
		this._fields.subChannels = value
	}

	public get sockets(): globalThis.Map<bigint, __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null> | null {
		return this._fields.sockets
	}

	public set sockets(value: globalThis.Map<bigint, __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null> | null) {
		this._fields.sockets = value
	}

	public get servers(): globalThis.Map<bigint, __goscript_server.Server | $.VarRef<__goscript_server.Server> | null> | null {
		return this._fields.servers
	}

	public set servers(value: globalThis.Map<bigint, __goscript_server.Server | $.VarRef<__goscript_server.Server> | null> | null) {
		this._fields.servers = value
	}

	public _fields: {
		mu: sync.RWMutex
		topLevelChannels: globalThis.Map<bigint, {}> | null
		channels: globalThis.Map<bigint, __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null> | null
		subChannels: globalThis.Map<bigint, __goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null> | null
		sockets: globalThis.Map<bigint, __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null> | null
		servers: globalThis.Map<bigint, __goscript_server.Server | $.VarRef<__goscript_server.Server> | null> | null
	}

	constructor(init?: Partial<{mu?: sync.RWMutex, topLevelChannels?: globalThis.Map<bigint, {}> | null, channels?: globalThis.Map<bigint, __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null> | null, subChannels?: globalThis.Map<bigint, __goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null> | null, sockets?: globalThis.Map<bigint, __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null> | null, servers?: globalThis.Map<bigint, __goscript_server.Server | $.VarRef<__goscript_server.Server> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.RWMutex()),
			topLevelChannels: init?.topLevelChannels ?? (null! as globalThis.Map<bigint, {}> | null),
			channels: init?.channels ?? (null! as globalThis.Map<bigint, __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null> | null),
			subChannels: init?.subChannels ?? (null! as globalThis.Map<bigint, __goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null> | null),
			sockets: init?.sockets ?? (null! as globalThis.Map<bigint, __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null> | null),
			servers: init?.servers ?? (null! as globalThis.Map<bigint, __goscript_server.Server | $.VarRef<__goscript_server.Server> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): channelMap {
		return new channelMap(this, true)
	}

	public __goscriptAssign(source: channelMap): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.topLevelChannels = values.topLevelChannels
		target.channels = values.channels
		target.subChannels = values.subChannels
		target.sockets = values.sockets
		target.servers = values.servers
	}

	public async addChannel(id: bigint, cn: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null, isTopChannel: boolean, pid: bigint): globalThis.Promise<void> {
		let c: channelMap | $.VarRef<channelMap> | null = this;
		using __defer = new $.DisposableStack()
		const c$: channelMap = c == null ? $.pointerTarget<channelMap>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelMap>(c)
		await (c$ as channelMap).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as channelMap).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		$.pointerValue<__goscript_trace.ChannelTrace>($.pointerValue<__goscript_channel.Channel>(cn).trace).cm = c
		$.mapSet((c$ as channelMap).channels, id, cn)
		if (isTopChannel) {
			$.mapSet((c$ as channelMap).topLevelChannels, id, {})
		} else {
			{
				let p: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null = $.mapGet<bigint, __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null, __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>((c$ as channelMap).channels, pid, null)[0]
				if (p != null) {
					await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as __goscript_channel.Channel).addChild(id, $.interfaceValue<entry | null>(cn, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel"))) : __goscript_channel.Channel.prototype.addChild.call(p, id, $.interfaceValue<entry | null>(cn, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel"))))
				} else {
					void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_logging.logger).Infof("channel %d references invalid parent ID %d", $.arrayToSlice<any>([$.basicInterfaceValue(id, "int64"), $.basicInterfaceValue(pid, "int64")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
		}
	}

	public async addServer(id: bigint, s: __goscript_server.Server | $.VarRef<__goscript_server.Server> | null): globalThis.Promise<void> {
		let c: channelMap | $.VarRef<channelMap> | null = this;
		using __defer = new $.DisposableStack()
		const c$: channelMap = c == null ? $.pointerTarget<channelMap>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelMap>(c)
		await (c$ as channelMap).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as channelMap).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		$.pointerValue<__goscript_server.Server>(s).cm = c
		$.mapSet((c$ as channelMap).servers, id, s)
	}

	public async addSocket(s: __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null): globalThis.Promise<void> {
		let c: channelMap | $.VarRef<channelMap> | null = this;
		using __defer = new $.DisposableStack()
		const c$: channelMap = c == null ? $.pointerTarget<channelMap>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelMap>(c)
		const s$: __goscript_socket.Socket = s == null ? $.pointerTarget<__goscript_socket.Socket>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_socket.Socket>(s)
		await (c$ as channelMap).mu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as channelMap).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() });
		;(s$ as __goscript_socket.Socket).cm = c
		$.mapSet((c$ as channelMap).sockets, (s$ as __goscript_socket.Socket).ID, s)
		if ((s$ as __goscript_socket.Socket).Parent == null) {
			void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_logging.logger).Infof("normal socket %d has no parent", $.arrayToSlice<any>([$.basicInterfaceValue((s$ as __goscript_socket.Socket).ID, "int64")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		void (__goscriptAwait = $.pointerValue<Exclude<entry, null>>($.mustTypeAssert<entry | null>((s$ as __goscript_socket.Socket).Parent, "channelz.entry")).addChild((s$ as __goscript_socket.Socket).ID, $.interfaceValue<entry | null>(s, "*channelz.Socket", /* @__PURE__ */ $.pointerType("channelz.Socket"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async addSubChannel(id: bigint, sc: __goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null, pid: bigint): globalThis.Promise<void> {
		let c: channelMap | $.VarRef<channelMap> | null = this;
		using __defer = new $.DisposableStack()
		const c$: channelMap = c == null ? $.pointerTarget<channelMap>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelMap>(c)
		await (c$ as channelMap).mu.Lock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as channelMap).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })
		$.pointerValue<__goscript_trace.ChannelTrace>($.pointerValue<__goscript_subchannel.SubChannel>(sc).trace).cm = c
		$.mapSet((c$ as channelMap).subChannels, id, sc)
		{
			let p: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null = $.mapGet<bigint, __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null, __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>((c$ as channelMap).channels, pid, null)[0]
			if (p != null) {
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as __goscript_channel.Channel).addChild(id, $.interfaceValue<entry | null>(sc, "*channelz.SubChannel", /* @__PURE__ */ $.pointerType("channelz.SubChannel"))) : __goscript_channel.Channel.prototype.addChild.call(p, id, $.interfaceValue<entry | null>(sc, "*channelz.SubChannel", /* @__PURE__ */ $.pointerType("channelz.SubChannel"))))
			} else {
				void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_logging.logger).Infof("subchannel %d references invalid parent ID %d", $.arrayToSlice<any>([$.basicInterfaceValue(id, "int64"), $.basicInterfaceValue(pid, "int64")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	}

	public async decrTraceRefCount(id: bigint): globalThis.Promise<void> {
		const c: channelMap | $.VarRef<channelMap> | null = this;
		let e = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as channelMap).findEntry(id) : channelMap.prototype.findEntry.call(c, id))
		{
			let [v, ok] = $.typeAssertTuple<tracedChannel | null>(e, "channelz.tracedChannel")
			if (ok) {
				void (__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<tracedChannel, null>) : $.pointerValue<Exclude<tracedChannel, null>>(v)).decrTraceRefCount(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<entry, null>) : $.pointerValue<Exclude<entry, null>>(e)).deleteSelfIfReady(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	}

	public deleteEntry(id: bigint): entry | null {
		const c: channelMap | $.VarRef<channelMap> | null = this;
		const c$: channelMap = c == null ? $.pointerTarget<channelMap>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelMap>(c)
		{
			let __goscriptTuple0: any = $.mapGet<bigint, __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null, __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null>((c$ as channelMap).sockets, id, null)
			let v: __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				$.deleteMapEntry((c$ as channelMap).sockets, id)
				return $.interfaceValue<entry | null>(v, "*channelz.Socket", /* @__PURE__ */ $.pointerType("channelz.Socket"))
			}
		}
		{
			let __goscriptTuple1: any = $.mapGet<bigint, __goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null, __goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null>((c$ as channelMap).subChannels, id, null)
			let v: __goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				$.deleteMapEntry((c$ as channelMap).subChannels, id)
				return $.interfaceValue<entry | null>(v, "*channelz.SubChannel", /* @__PURE__ */ $.pointerType("channelz.SubChannel"))
			}
		}
		{
			let __goscriptTuple2: any = $.mapGet<bigint, __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null, __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>((c$ as channelMap).channels, id, null)
			let v: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			if (ok) {
				$.deleteMapEntry((c$ as channelMap).channels, id)
				$.deleteMapEntry((c$ as channelMap).topLevelChannels, id)
				return $.interfaceValue<entry | null>(v, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel"))
			}
		}
		{
			let __goscriptTuple3: any = $.mapGet<bigint, __goscript_server.Server | $.VarRef<__goscript_server.Server> | null, __goscript_server.Server | $.VarRef<__goscript_server.Server> | null>((c$ as channelMap).servers, id, null)
			let v: __goscript_server.Server | $.VarRef<__goscript_server.Server> | null = __goscriptTuple3[0]
			let ok = __goscriptTuple3[1]
			if (ok) {
				$.deleteMapEntry((c$ as channelMap).servers, id)
				return $.interfaceValue<entry | null>(v, "*channelz.Server", /* @__PURE__ */ $.pointerType("channelz.Server"))
			}
		}
		return $.interfaceValue<entry | null>(new dummyEntry({idNotFound: id}), "*channelz.dummyEntry", /* @__PURE__ */ $.pointerType("channelz.dummyEntry"))
	}

	public findEntry(id: bigint): entry | null {
		const c: channelMap | $.VarRef<channelMap> | null = this;
		const c$: channelMap = c == null ? $.pointerTarget<channelMap>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelMap>(c)
		{
			let __goscriptTuple4: any = $.mapGet<bigint, __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null, __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>((c$ as channelMap).channels, id, null)
			let v: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null = __goscriptTuple4[0]
			let ok = __goscriptTuple4[1]
			if (ok) {
				return $.interfaceValue<entry | null>(v, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel"))
			}
		}
		{
			let __goscriptTuple5: any = $.mapGet<bigint, __goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null, __goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null>((c$ as channelMap).subChannels, id, null)
			let v: __goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null = __goscriptTuple5[0]
			let ok = __goscriptTuple5[1]
			if (ok) {
				return $.interfaceValue<entry | null>(v, "*channelz.SubChannel", /* @__PURE__ */ $.pointerType("channelz.SubChannel"))
			}
		}
		{
			let __goscriptTuple6: any = $.mapGet<bigint, __goscript_server.Server | $.VarRef<__goscript_server.Server> | null, __goscript_server.Server | $.VarRef<__goscript_server.Server> | null>((c$ as channelMap).servers, id, null)
			let v: __goscript_server.Server | $.VarRef<__goscript_server.Server> | null = __goscriptTuple6[0]
			let ok = __goscriptTuple6[1]
			if (ok) {
				return $.interfaceValue<entry | null>(v, "*channelz.Server", /* @__PURE__ */ $.pointerType("channelz.Server"))
			}
		}
		{
			let __goscriptTuple7: any = $.mapGet<bigint, __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null, __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null>((c$ as channelMap).sockets, id, null)
			let v: __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null = __goscriptTuple7[0]
			let ok = __goscriptTuple7[1]
			if (ok) {
				return $.interfaceValue<entry | null>(v, "*channelz.Socket", /* @__PURE__ */ $.pointerType("channelz.Socket"))
			}
		}
		return $.interfaceValue<entry | null>(new dummyEntry({idNotFound: id}), "*channelz.dummyEntry", /* @__PURE__ */ $.pointerType("channelz.dummyEntry"))
	}

	public async getChannel(id: bigint): globalThis.Promise<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null> {
		const c: channelMap | $.VarRef<channelMap> | null = this;
		using __defer = new $.DisposableStack()
		const c$: channelMap = c == null ? $.pointerTarget<channelMap>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelMap>(c)
		await (c$ as channelMap).mu.RLock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((c$ as channelMap).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })
		return $.mapGet<bigint, __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null, __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>((c$ as channelMap).channels, id, null)[0]
	}

	public async getServer(id: bigint): globalThis.Promise<__goscript_server.Server | $.VarRef<__goscript_server.Server> | null> {
		const c: channelMap | $.VarRef<channelMap> | null = this;
		using __defer = new $.DisposableStack()
		const c$: channelMap = c == null ? $.pointerTarget<channelMap>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelMap>(c)
		await (c$ as channelMap).mu.RLock()
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((c$ as channelMap).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee5() })
		return $.mapGet<bigint, __goscript_server.Server | $.VarRef<__goscript_server.Server> | null, __goscript_server.Server | $.VarRef<__goscript_server.Server> | null>((c$ as channelMap).servers, id, null)[0]
	}

	public async getServerSockets(id: bigint, startID: bigint, maxResults: number): globalThis.Promise<[$.Slice<__goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null>, boolean]> {
		const c: channelMap | $.VarRef<channelMap> | null = this;
		using __defer = new $.DisposableStack()
		const c$: channelMap = c == null ? $.pointerTarget<channelMap>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelMap>(c)
		if (maxResults <= 0) {
			maxResults = __goscript_funcs.EntriesPerPage
		}
		await (c$ as channelMap).mu.RLock()
		const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((c$ as channelMap).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee6() })
		let __goscriptTuple8: any = $.mapGet<bigint, __goscript_server.Server | $.VarRef<__goscript_server.Server> | null, __goscript_server.Server | $.VarRef<__goscript_server.Server> | null>((c$ as channelMap).servers, id, null)
		let svr: __goscript_server.Server | $.VarRef<__goscript_server.Server> | null = __goscriptTuple8[0]
		let ok = __goscriptTuple8[1]
		if (!ok) {
			// server with id doesn't exist.
			return [null, true]
		}
		let svrskts: globalThis.Map<bigint, string> | null = $.pointerValue<__goscript_server.Server>(svr).sockets
		let ids: $.Slice<bigint> = $.makeSlice<bigint>(0, $.len(svrskts), "number")
		let sks: $.Slice<__goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null> = $.makeSlice<__goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null>(0, $.min($.len(svrskts), maxResults))
		for (const [k, __rangeValue] of svrskts?.entries() ?? []) {
			ids = $.appendOne(ids, k)
		}
		await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((ids as int64Slice), "channelz.int64Slice", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
		let idx = sort.Search($.sliceLen(ids), $.functionValue((i: number): boolean => {
			return $.arrayIndex(ids!, i) >= startID
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		let end = true
		for (let __goscriptRangeTarget0 = $.goSlice(ids, idx, undefined), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let v = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as bigint)
			if ($.sliceLen(sks) == maxResults) {
				end = false
				break
			}
			{
				let __goscriptTuple9: any = $.mapGet<bigint, __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null, __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null>((c$ as channelMap).sockets, v, null)
				let ns: __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null = __goscriptTuple9[0]
				let __goscriptShadow0 = __goscriptTuple9[1]
				if (__goscriptShadow0) {
					sks = $.appendOne(sks, ns, $.appendZeros.nil)
				}
			}
		}
		return [sks, end]
	}

	public async getServers(id: bigint, maxResults: number): globalThis.Promise<[$.Slice<__goscript_server.Server | $.VarRef<__goscript_server.Server> | null>, boolean]> {
		const c: channelMap | $.VarRef<channelMap> | null = this;
		using __defer = new $.DisposableStack()
		const c$: channelMap = c == null ? $.pointerTarget<channelMap>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelMap>(c)
		if (maxResults <= 0) {
			maxResults = __goscript_funcs.EntriesPerPage
		}
		await (c$ as channelMap).mu.RLock()
		const __goscriptDeferCallee7 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((c$ as channelMap).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee7() })
		let ids: $.Slice<bigint> = $.makeSlice<bigint>(0, $.len((c$ as channelMap).servers), "number")
		for (const [k, __rangeValue] of (c$ as channelMap).servers?.entries() ?? []) {
			ids = $.appendOne(ids, k)
		}
		await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((ids as int64Slice), "channelz.int64Slice", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
		let idx = sort.Search($.sliceLen(ids), $.functionValue((i: number): boolean => {
			return $.arrayIndex(ids!, i) >= id
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		let end = true
		let s: $.Slice<__goscript_server.Server | $.VarRef<__goscript_server.Server> | null> = null! as $.Slice<__goscript_server.Server | $.VarRef<__goscript_server.Server> | null>
		for (let __goscriptRangeTarget1 = $.goSlice(ids, idx, undefined), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let v = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as bigint)
			if ($.sliceLen(s) == maxResults) {
				end = false
				break
			}
			{
				let __goscriptTuple10: any = $.mapGet<bigint, __goscript_server.Server | $.VarRef<__goscript_server.Server> | null, __goscript_server.Server | $.VarRef<__goscript_server.Server> | null>((c$ as channelMap).servers, v, null)
				let svr: __goscript_server.Server | $.VarRef<__goscript_server.Server> | null = __goscriptTuple10[0]
				let ok = __goscriptTuple10[1]
				if (ok) {
					s = $.appendOne(s, svr, $.appendZeros.nil)
				}
			}
		}
		return [s, end]
	}

	public async getSocket(id: bigint): globalThis.Promise<__goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null> {
		const c: channelMap | $.VarRef<channelMap> | null = this;
		using __defer = new $.DisposableStack()
		const c$: channelMap = c == null ? $.pointerTarget<channelMap>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelMap>(c)
		await (c$ as channelMap).mu.RLock()
		const __goscriptDeferCallee8 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((c$ as channelMap).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee8() })
		return $.mapGet<bigint, __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null, __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null>((c$ as channelMap).sockets, id, null)[0]
	}

	public async getSubChannel(id: bigint): globalThis.Promise<__goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null> {
		const c: channelMap | $.VarRef<channelMap> | null = this;
		using __defer = new $.DisposableStack()
		const c$: channelMap = c == null ? $.pointerTarget<channelMap>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelMap>(c)
		await (c$ as channelMap).mu.RLock()
		const __goscriptDeferCallee9 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((c$ as channelMap).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee9() })
		return $.mapGet<bigint, __goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null, __goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null>((c$ as channelMap).subChannels, id, null)[0]
	}

	public async getTopChannels(id: bigint, maxResults: number): globalThis.Promise<[$.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>, boolean]> {
		const c: channelMap | $.VarRef<channelMap> | null = this;
		using __defer = new $.DisposableStack()
		const c$: channelMap = c == null ? $.pointerTarget<channelMap>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelMap>(c)
		if (maxResults <= 0) {
			maxResults = __goscript_funcs.EntriesPerPage
		}
		await (c$ as channelMap).mu.RLock()
		const __goscriptDeferCallee10 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((c$ as channelMap).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee10() })
		let l = $.int64($.len((c$ as channelMap).topLevelChannels))
		let ids: $.Slice<bigint> = $.makeSlice<bigint>(0, globalThis.Number(l), "number")

		for (const [k, __rangeValue] of (c$ as channelMap).topLevelChannels?.entries() ?? []) {
			ids = $.appendOne(ids, k)
		}
		await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((ids as int64Slice), "channelz.int64Slice", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
		let idx = sort.Search($.sliceLen(ids), $.functionValue((i: number): boolean => {
			return $.arrayIndex(ids!, i) >= id
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		let end = true
		let t: $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null> = null! as $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>
		for (let __goscriptRangeTarget2 = $.goSlice(ids, idx, undefined), __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let v = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as bigint)
			if ($.sliceLen(t) == maxResults) {
				end = false
				break
			}
			{
				let __goscriptTuple11: any = $.mapGet<bigint, __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null, __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>((c$ as channelMap).channels, v, null)
				let cn: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null = __goscriptTuple11[0]
				let ok = __goscriptTuple11[1]
				if (ok) {
					t = $.appendOne(t, cn, $.appendZeros.nil)
				}
			}
		}
		return [t, end]
	}

	public async removeEntry(id: bigint): globalThis.Promise<void> {
		const c: channelMap | $.VarRef<channelMap> | null = this;
		using __defer = new $.DisposableStack()
		const c$: channelMap = c == null ? $.pointerTarget<channelMap>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelMap>(c)
		await (c$ as channelMap).mu.Lock()
		const __goscriptDeferCallee11 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as channelMap).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee11() })
		void (__goscriptAwait = $.pointerValue<Exclude<entry, null>>((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as channelMap).findEntry(id) : channelMap.prototype.findEntry.call(c, id))).triggerDelete(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async traceEvent(id: bigint, desc: __goscript_trace.TraceEvent | $.VarRef<__goscript_trace.TraceEvent> | null): globalThis.Promise<void> {
		const c: channelMap | $.VarRef<channelMap> | null = this;
		using __defer = new $.DisposableStack()
		const c$: channelMap = c == null ? $.pointerTarget<channelMap>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<channelMap>(c)
		const desc$: __goscript_trace.TraceEvent = desc == null ? $.pointerTarget<__goscript_trace.TraceEvent>(desc) : (desc as any).__isVarRef === true ? (desc as any).value : (desc as any).__goValue === undefined ? (desc as any) : $.pointerTarget<__goscript_trace.TraceEvent>(desc)
		await (c$ as channelMap).mu.Lock()
		const __goscriptDeferCallee12 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as channelMap).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee12() })
		let child = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as channelMap).findEntry(id) : channelMap.prototype.findEntry.call(c, id))
		let [childTC, ok] = $.typeAssertTuple<tracedChannel | null>(child, "channelz.tracedChannel")
		if (!ok) {
			return
		}
		await __goscript_trace.ChannelTrace.prototype.append.call(((__goscriptAwait = (childTC !== null && (childTC as any).__isVarRef !== true && (childTC as any).__goValue === undefined ? (childTC as Exclude<tracedChannel, null>) : $.pointerValue<Exclude<tracedChannel, null>>(childTC)).getChannelTrace(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_trace.ChannelTrace | $.VarRef<__goscript_trace.ChannelTrace> | null), (() => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue(time.Now())); return new __goscript_trace.traceEvent({Desc: (desc$ as __goscript_trace.TraceEvent).Desc, Severity: (desc$ as __goscript_trace.TraceEvent).Severity, Timestamp: __goscriptLiteralField0}) })())
		if ((desc$ as __goscript_trace.TraceEvent).Parent != null) {
			let parent = channelMap.prototype.findEntry.call(c, (__goscriptAwait = (child !== null && (child as any).__isVarRef !== true && (child as any).__goValue === undefined ? (child as Exclude<entry, null>) : $.pointerValue<Exclude<entry, null>>(child)).getParentID(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			let chanType: __goscript_trace.RefChannelType = 0
			{
				const __goscriptTypeSwitchValue = child
				switch (true) {
					case $.typeAssert<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("channelz.Channel")).ok:
						{
							chanType = 1
						}
						break
					case $.typeAssert<__goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("channelz.SubChannel")).ok:
						{
							chanType = 2
						}
						break
				}
			}
			{
				let [parentTC, __goscriptShadow1] = $.typeAssertTuple<tracedChannel | null>(parent, "channelz.tracedChannel")
				if (__goscriptShadow1) {
					await __goscript_trace.ChannelTrace.prototype.append.call(((__goscriptAwait = (parentTC !== null && (parentTC as any).__isVarRef !== true && (parentTC as any).__goValue === undefined ? (parentTC as Exclude<tracedChannel, null>) : $.pointerValue<Exclude<tracedChannel, null>>(parentTC)).getChannelTrace(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_trace.ChannelTrace | $.VarRef<__goscript_trace.ChannelTrace> | null), (await (async () => { const __goscriptLiteralField1 = $.markAsStructValue($.cloneStructValue(time.Now())); const __goscriptLiteralField2 = (__goscriptAwait = (childTC !== null && (childTC as any).__isVarRef !== true && (childTC as any).__goValue === undefined ? (childTC as Exclude<tracedChannel, null>) : $.pointerValue<Exclude<tracedChannel, null>>(childTC)).getRefName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_trace.traceEvent({Desc: $.pointerValue<__goscript_trace.TraceEvent>((desc$ as __goscript_trace.TraceEvent).Parent).Desc, Severity: $.pointerValue<__goscript_trace.TraceEvent>((desc$ as __goscript_trace.TraceEvent).Parent).Severity, Timestamp: __goscriptLiteralField1, RefID: id, RefName: __goscriptLiteralField2, RefType: chanType}) })()))
					void (__goscriptAwait = (childTC !== null && (childTC as any).__isVarRef !== true && (childTC as any).__goValue === undefined ? (childTC as Exclude<tracedChannel, null>) : $.pointerValue<Exclude<tracedChannel, null>>(childTC)).incrTraceRefCount(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"channelz.channelMap",
		() => new channelMap(),
		() => [$.methodSignature("addChannel", [["id", /* @__PURE__ */ $.basicType("int64")], ["cn", /* @__PURE__ */ $.pointerType("channelz.Channel")], ["isTopChannel", /* @__PURE__ */ $.basicType("bool")], ["pid", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("addServer", [["id", /* @__PURE__ */ $.basicType("int64")], ["s", /* @__PURE__ */ $.pointerType("channelz.Server")]], [], true), $.methodSignature("addSocket", [["s", /* @__PURE__ */ $.pointerType("channelz.Socket")]], [], true), $.methodSignature("addSubChannel", [["id", /* @__PURE__ */ $.basicType("int64")], ["sc", /* @__PURE__ */ $.pointerType("channelz.SubChannel")], ["pid", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("decrTraceRefCount", [["id", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("deleteEntry", [["id", /* @__PURE__ */ $.basicType("int64")]], ["channelz.entry"], true), $.methodSignature("findEntry", [["id", /* @__PURE__ */ $.basicType("int64")]], ["channelz.entry"], true), $.methodSignature("getChannel", [["id", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.pointerType("channelz.Channel")], true), $.methodSignature("getServer", [["id", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.pointerType("channelz.Server")], true), $.methodSignature("getServerSockets", [["id", /* @__PURE__ */ $.basicType("int64")], ["startID", /* @__PURE__ */ $.basicType("int64")], ["maxResults", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("channelz.Socket")), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getServers", [["id", /* @__PURE__ */ $.basicType("int64")], ["maxResults", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("channelz.Server")), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getSocket", [["id", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.pointerType("channelz.Socket")], true), $.methodSignature("getSubChannel", [["id", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.pointerType("channelz.SubChannel")], true), $.methodSignature("getTopChannels", [["id", /* @__PURE__ */ $.basicType("int64")], ["maxResults", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("channelz.Channel")), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("removeEntry", [["id", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("traceEvent", [["id", /* @__PURE__ */ $.basicType("int64")], ["desc", /* @__PURE__ */ $.pointerType("channelz.TraceEvent")]], [], true)],
		channelMap,
		() => [/* @__PURE__ */ $.structField("mu", "sync.RWMutex", [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("topLevelChannels", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [1], 24, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("channels", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.pointerType("channelz.Channel")), [2], 32, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("subChannels", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.pointerType("channelz.SubChannel")), [3], 40, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("sockets", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.pointerType("channelz.Socket")), [4], 48, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("servers", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.pointerType("channelz.Server")), [5], 56, false, { pkgPath: "google.golang.org/grpc/internal/channelz" })]
	)
}

export class dummyEntry {
	// dummyEntry is a fake entry to handle entry not found case.
	public get idNotFound(): bigint {
		return this._fields.idNotFound
	}

	public set idNotFound(value: bigint) {
		this._fields.idNotFound = value
	}

	public get Entity(): Entity | null {
		return this._fields.Entity
	}

	public set Entity(value: Entity | null) {
		this._fields.Entity = value
	}

	public _fields: {
		idNotFound: bigint
		Entity: Entity | null
	}

	constructor(init?: Partial<{idNotFound?: bigint, Entity?: Entity | null}>, __goscriptValue?: boolean) {
		this._fields = {
			idNotFound: init?.idNotFound ?? (0n as bigint),
			Entity: init?.Entity ?? (null! as Entity | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dummyEntry {
		return new dummyEntry(this, true)
	}

	public __goscriptAssign(source: dummyEntry): void {
		const target = this._fields
		const values = source._fields
		target.idNotFound = values.idNotFound
		target.Entity = $.assignFieldValue(target.Entity, values.Entity, "channelz.Entity")
	}

	public ID(): bigint {
		const d: dummyEntry | $.VarRef<dummyEntry> | null = this;
		return $.pointerValue<dummyEntry>(d).idNotFound
	}

	public async String(): globalThis.Promise<string> {
		const d: dummyEntry | $.VarRef<dummyEntry> | null = this;
		return fmt.Sprintf("non-existent entity #%d", $.basicInterfaceValue($.pointerValue<dummyEntry>(d).idNotFound, "int64"))
	}

	public async addChild(id: bigint, e: entry | null): globalThis.Promise<void> {
		const d: dummyEntry | $.VarRef<dummyEntry> | null = this;
		// Note: It is possible for a normal program to reach here under race
		// condition.  For example, there could be a race between ClientConn.Close()
		// info being propagated to addrConn and http2Client. ClientConn.Close()
		// cancel the context and result in http2Client to error. The error info is
		// then caught by transport monitor and before addrConn.tearDown() is called
		// in side ClientConn.Close(). Therefore, the addrConn will create a new
		// transport. And when registering the new transport in channelz, its parent
		// addrConn could have already been torn down and deleted from channelz
		// tracking, and thus reach the code here.
		void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_logging.logger).Infof("attempt to add child of type %T with id %d to a parent (id=%d) that doesn't currently exist", $.arrayToSlice<any>([(e as any), $.basicInterfaceValue(id, "int64"), $.basicInterfaceValue($.pointerValue<dummyEntry>(d).idNotFound, "int64")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async deleteChild(id: bigint): globalThis.Promise<void> {
		const d: dummyEntry | $.VarRef<dummyEntry> | null = this;
		// It is possible for a normal program to reach here under race condition.
		// Refer to the example described in addChild().
		void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_logging.logger).Infof("attempt to delete child with id %d from a parent (id=%d) that doesn't currently exist", $.arrayToSlice<any>([$.basicInterfaceValue(id, "int64"), $.basicInterfaceValue($.pointerValue<dummyEntry>(d).idNotFound, "int64")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public deleteSelfIfReady(): void {
	}

	public getParentID(): bigint {
		return 0n
	}

	public async triggerDelete(): globalThis.Promise<void> {
		const d: dummyEntry | $.VarRef<dummyEntry> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_logging.logger).Warningf("attempt to delete an entry (id=%d) that doesn't currently exist", $.arrayToSlice<any>([$.basicInterfaceValue($.pointerValue<dummyEntry>(d).idNotFound, "int64")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public id(): any {
		return $.pointerValue<Exclude<Entity | null, null>>(this.Entity).id()
	}

	public isEntity(): any {
		return $.pointerValue<Exclude<Entity | null, null>>(this.Entity).isEntity()
	}

	static __typeInfo = $.registerStructType(
		"channelz.dummyEntry",
		() => new dummyEntry(),
		() => [$.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("addChild", [["id", /* @__PURE__ */ $.basicType("int64")], ["e", "channelz.entry"]], [], true), $.methodSignature("deleteChild", [["id", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("deleteSelfIfReady", [], [], true), $.methodSignature("getParentID", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("triggerDelete", [], [], true), $.methodSignature("id", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("isEntity")],
		dummyEntry,
		() => [/* @__PURE__ */ $.structField("idNotFound", /* @__PURE__ */ $.basicType("int64"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("Entity", "channelz.Entity", [1], 8, true, { anonymous: true })]
	)
}

export function newChannelMap(): channelMap | $.VarRef<channelMap> | null {
	return new channelMap({topLevelChannels: $.makeMap<bigint, {}>(), channels: $.makeMap<bigint, __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>(), subChannels: $.makeMap<bigint, __goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null>(), sockets: $.makeMap<bigint, __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null>(), servers: $.makeMap<bigint, __goscript_server.Server | $.VarRef<__goscript_server.Server> | null>()})
}

export function int64Slice_Len(s: int64Slice): number {
	return $.sliceLen((s as int64Slice))
}

export function int64Slice_Swap(s: int64Slice, i: number, j: number): void {
	let __goscriptAssign0_0: bigint = $.arrayIndex(s!, j)
	let __goscriptAssign0_1: bigint = $.arrayIndex(s!, i)
	$.sliceElems(s!)[$.sliceSlot(s!, i)] = __goscriptAssign0_0
	$.sliceElems(s!)[$.sliceSlot(s!, j)] = __goscriptAssign0_1
}

export function int64Slice_Less(s: int64Slice, i: number, j: number): boolean {
	return $.arrayIndex(s!, i) < $.arrayIndex(s!, j)
}

export function copyMap(m: globalThis.Map<bigint, string> | null): globalThis.Map<bigint, string> | null {
	let n: globalThis.Map<bigint, string> | null = $.makeMap<bigint, string>()
	for (let [k, v] of m?.entries() ?? []) {
		$.mapSet(n, k, v)
	}
	return n
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (int64Slice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (int64Slice_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (int64Slice_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64"), "channelz.int64Slice"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptAwait: any
