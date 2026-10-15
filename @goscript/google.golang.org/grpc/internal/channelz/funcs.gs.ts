// Generated file based on funcs.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/index.js"

import type * as fmt from "@goscript/fmt/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_channel from "./channel.gs.ts"

import * as __goscript_channelmap from "./channelmap.gs.ts"

import * as __goscript_server from "./server.gs.ts"

import * as __goscript_socket from "./socket.gs.ts"

import * as __goscript_subchannel from "./subchannel.gs.ts"

import * as __goscript_syscall_nonlinux from "./syscall_nonlinux.gs.ts"

import * as __goscript_trace from "./trace.gs.ts"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "./channel.gs.ts"
import "./channelmap.gs.ts"
import "./server.gs.ts"
import "./socket.gs.ts"
import "./subchannel.gs.ts"
import "./syscall_nonlinux.gs.ts"
import "./trace.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/internal/channelz", ["channelz.IDGenerator", "channelz.Identifier"])

export type Identifier = {
	String(): string | globalThis.Promise<string>
	channelzIdentifier(): void
	id(): bigint
	isEntity(): void
}

$.registerInterfaceType(
	"channelz.Identifier",
	null,
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("channelzIdentifier"), $.methodSignature("id", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("isEntity")]
);

export class IDGenerator {
	public get id(): bigint {
		return this._fields.id
	}

	public set id(value: bigint) {
		this._fields.id = value
	}

	public _fields: {
		id: bigint
	}

	constructor(init?: Partial<{id?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			id: init?.id ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): IDGenerator {
		return new IDGenerator(this, true)
	}

	public __goscriptAssign(source: IDGenerator): void {
		const target = this._fields
		const values = source._fields
		target.id = values.id
	}

	public Reset(): void {
		const i: IDGenerator | $.VarRef<IDGenerator> | null = this;
		atomic.StoreInt64($.fieldRef($.pointerValue<IDGenerator>(i)._fields, "id"), 0n)
	}

	public genID(): bigint {
		const i: IDGenerator | $.VarRef<IDGenerator> | null = this;
		return atomic.AddInt64($.fieldRef($.pointerValue<IDGenerator>(i)._fields, "id"), 1n)
	}

	static __typeInfo = $.registerStructType(
		"channelz.IDGenerator",
		() => new IDGenerator(),
		() => [$.methodSignature("Reset", [], [], true), $.methodSignature("genID", [], [/* @__PURE__ */ $.basicType("int64")], true)],
		IDGenerator,
		() => [/* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("int64"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/channelz" })]
	)
}

export let IDGen: $.VarRef<IDGenerator> = $.varRef(new IDGenerator(undefined, true))

export function __goscript_set_IDGen(__goscriptValue: IDGenerator): void {
	$.assignStruct(IDGen.value, __goscriptValue)
}

export var db: __goscript_channelmap.channelMap | $.VarRef<__goscript_channelmap.channelMap> | null

export function __goscript_init_db(): void {
	if (((db) as any) === undefined) {
		db = __goscript_channelmap.newChannelMap()
	}
}

export function __goscript_get_db(): __goscript_channelmap.channelMap | $.VarRef<__goscript_channelmap.channelMap> | null {
	if (((db) as any) === undefined) {
		__goscript_init_db()
	}
	return db
}

export function __goscript_set_db(__goscriptValue: __goscript_channelmap.channelMap | $.VarRef<__goscript_channelmap.channelMap> | null): void {
	db = __goscriptValue
}

export let EntriesPerPage: number = 50

export function __goscript_set_EntriesPerPage(__goscriptValue: number): void {
	EntriesPerPage = __goscriptValue
}

export let curState: $.VarRef<number> = $.varRef(0)

export function __goscript_set_curState(__goscriptValue: number): void {
	curState.value = __goscriptValue
}

export function TurnOn(): void {
	atomic.StoreInt32(curState, 1)
}

function __goscriptInit0(): void {
	internal.__goscript_set_ChannelzTurnOffForTesting($.functionValue((): void => {
		atomic.StoreInt32(curState, 0)
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
}

export function IsOn(): boolean {
	return atomic.LoadInt32(curState) == 1
}

export async function GetTopChannels(id: bigint, maxResults: number): globalThis.Promise<[$.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>, boolean]> {
	return __goscript_channelmap.channelMap.prototype.getTopChannels.call(__goscript_get_db(), id, maxResults)
}

export async function GetServers(id: bigint, maxResults: number): globalThis.Promise<[$.Slice<__goscript_server.Server | $.VarRef<__goscript_server.Server> | null>, boolean]> {
	return __goscript_channelmap.channelMap.prototype.getServers.call(__goscript_get_db(), id, maxResults)
}

export async function GetServerSockets(id: bigint, startID: bigint, maxResults: number): globalThis.Promise<[$.Slice<__goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null>, boolean]> {
	return __goscript_channelmap.channelMap.prototype.getServerSockets.call(__goscript_get_db(), id, startID, maxResults)
}

export async function GetChannel(id: bigint): globalThis.Promise<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null> {
	return __goscript_channelmap.channelMap.prototype.getChannel.call(__goscript_get_db(), id)
}

export async function GetSubChannel(id: bigint): globalThis.Promise<__goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null> {
	return __goscript_channelmap.channelMap.prototype.getSubChannel.call(__goscript_get_db(), id)
}

export async function GetSocket(id: bigint): globalThis.Promise<__goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null> {
	return __goscript_channelmap.channelMap.prototype.getSocket.call(__goscript_get_db(), id)
}

export async function GetServer(id: bigint): globalThis.Promise<__goscript_server.Server | $.VarRef<__goscript_server.Server> | null> {
	return __goscript_channelmap.channelMap.prototype.getServer.call(__goscript_get_db(), id)
}

export async function RegisterChannel(parent: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null, __goscriptParam0: string): globalThis.Promise<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null> {
	let target: $.VarRef<string> = $.varRef(__goscriptParam0)
	let id = IDGen.value.genID()

	if (!IsOn()) {
		return new __goscript_channel.Channel({ID: id})
	}

	let isTopChannel = parent == null

	let cn: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null = new __goscript_channel.Channel({ID: id, RefName: target.value, nestedChans: $.makeMap<bigint, string>(), subChans: $.makeMap<bigint, string>(), Parent: parent, trace: (() => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue(time.Now())); const __goscriptLiteralField1 = $.makeSlice<__goscript_trace.traceEvent | $.VarRef<__goscript_trace.traceEvent> | null>(0, __goscript_trace.getMaxTraceEntry()); return new __goscript_trace.ChannelTrace({CreationTime: __goscriptLiteralField0, Events: __goscriptLiteralField1}) })()})
	$.pointerValue<__goscript_channel.Channel>(cn).ChannelMetrics.Target.Store(target)
	await __goscript_channelmap.channelMap.prototype.addChannel.call(__goscript_get_db(), id, cn, isTopChannel, (cn !== null && (cn as any).__isVarRef !== true && (cn as any).__goValue === undefined ? ((cn as any) as __goscript_channel.Channel).getParentID() : __goscript_channel.Channel.prototype.getParentID.call(cn)))
	return cn
}

export async function RegisterSubChannel(parent: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null, ref: string): globalThis.Promise<__goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null> {
	let id = IDGen.value.genID()
	let sc: __goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null = new __goscript_subchannel.SubChannel({ID: id, RefName: ref, parent: parent})
	let sc$: __goscript_subchannel.SubChannel = sc == null ? $.pointerTarget<__goscript_subchannel.SubChannel>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<__goscript_subchannel.SubChannel>(sc)

	if (!IsOn()) {
		return sc
	}

	;(sc$ as __goscript_subchannel.SubChannel).sockets = $.makeMap<bigint, string>();
	;(sc$ as __goscript_subchannel.SubChannel).trace = (() => { const __goscriptLiteralField2 = $.markAsStructValue($.cloneStructValue(time.Now())); const __goscriptLiteralField3 = $.makeSlice<__goscript_trace.traceEvent | $.VarRef<__goscript_trace.traceEvent> | null>(0, __goscript_trace.getMaxTraceEntry()); return new __goscript_trace.ChannelTrace({CreationTime: __goscriptLiteralField2, Events: __goscriptLiteralField3}) })()
	await __goscript_channelmap.channelMap.prototype.addSubChannel.call(__goscript_get_db(), id, sc, $.pointerValue<__goscript_channel.Channel>(parent).ID)
	return sc
}

export async function RegisterServer(ref: string): globalThis.Promise<__goscript_server.Server | $.VarRef<__goscript_server.Server> | null> {
	let id = IDGen.value.genID()
	if (!IsOn()) {
		return new __goscript_server.Server({ID: id})
	}

	let svr: __goscript_server.Server | $.VarRef<__goscript_server.Server> | null = new __goscript_server.Server({RefName: ref, sockets: $.makeMap<bigint, string>(), listenSockets: $.makeMap<bigint, string>(), ID: id})
	await __goscript_channelmap.channelMap.prototype.addServer.call(__goscript_get_db(), id, svr)
	return svr
}

export async function RegisterSocket(skt: __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null): globalThis.Promise<__goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null> {
	$.pointerValue<__goscript_socket.Socket>(skt).ID = IDGen.value.genID()
	if (IsOn()) {
		await __goscript_channelmap.channelMap.prototype.addSocket.call(__goscript_get_db(), skt)
	}
	return skt
}

export async function RemoveEntry(id: bigint): globalThis.Promise<void> {
	if (!IsOn()) {
		return
	}
	await __goscript_channelmap.channelMap.prototype.removeEntry.call(__goscript_get_db(), id)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }})
}

export { __goscriptInit0 }
