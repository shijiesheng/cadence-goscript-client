// Generated file based on subchannel.go
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

import * as __goscript_server from "./server.gs.ts"

import * as __goscript_socket from "./socket.gs.ts"

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
import "./server.gs.ts"
import "./socket.gs.ts"
import "./syscall_nonlinux.gs.ts"
import "./trace.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/internal/channelz", ["channelz.SubChannel"])

export class SubChannel {
	public get Entity(): __goscript_channelmap.Entity | null {
		return this._fields.Entity
	}

	public set Entity(value: __goscript_channelmap.Entity | null) {
		this._fields.Entity = value
	}

	// ID is the channelz id of this subchannel.
	public get ID(): bigint {
		return this._fields.ID
	}

	public set ID(value: bigint) {
		this._fields.ID = value
	}

	// RefName is the human readable reference string of this subchannel.
	public get RefName(): string {
		return this._fields.RefName
	}

	public set RefName(value: string) {
		this._fields.RefName = value
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

	public get parent(): __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null {
		return this._fields.parent
	}

	public set parent(value: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null) {
		this._fields.parent = value
	}

	public get trace(): __goscript_trace.ChannelTrace | $.VarRef<__goscript_trace.ChannelTrace> | null {
		return this._fields.trace
	}

	public set trace(value: __goscript_trace.ChannelTrace | $.VarRef<__goscript_trace.ChannelTrace> | null) {
		this._fields.trace = value
	}

	public get traceRefCount(): number {
		return this._fields.traceRefCount
	}

	public set traceRefCount(value: number) {
		this._fields.traceRefCount = value
	}

	public get ChannelMetrics(): __goscript_channel.ChannelMetrics {
		return this._fields.ChannelMetrics
	}

	public set ChannelMetrics(value: __goscript_channel.ChannelMetrics) {
		this._fields.ChannelMetrics = value
	}

	public _fields: {
		Entity: __goscript_channelmap.Entity | null
		ID: bigint
		RefName: string
		closeCalled: boolean
		sockets: globalThis.Map<bigint, string> | null
		parent: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null
		trace: __goscript_trace.ChannelTrace | $.VarRef<__goscript_trace.ChannelTrace> | null
		traceRefCount: number
		ChannelMetrics: __goscript_channel.ChannelMetrics
	}

	constructor(init?: Partial<{Entity?: __goscript_channelmap.Entity | null, ID?: bigint, RefName?: string, closeCalled?: boolean, sockets?: globalThis.Map<bigint, string> | null, parent?: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null, trace?: __goscript_trace.ChannelTrace | $.VarRef<__goscript_trace.ChannelTrace> | null, traceRefCount?: number, ChannelMetrics?: __goscript_channel.ChannelMetrics}>, __goscriptValue?: boolean) {
		this._fields = {
			Entity: init?.Entity ?? (null! as __goscript_channelmap.Entity | null),
			ID: init?.ID ?? (0n as bigint),
			RefName: init?.RefName ?? ("" as string),
			closeCalled: init?.closeCalled ?? (false as boolean),
			sockets: init?.sockets ?? (null! as globalThis.Map<bigint, string> | null),
			parent: init?.parent ?? (null! as __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null),
			trace: init?.trace ?? (null! as __goscript_trace.ChannelTrace | $.VarRef<__goscript_trace.ChannelTrace> | null),
			traceRefCount: init?.traceRefCount ?? (0 as number),
			ChannelMetrics: init?.ChannelMetrics ? init.ChannelMetrics.clone() : new __goscript_channel.ChannelMetrics(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SubChannel {
		return new SubChannel(this, true)
	}

	public __goscriptAssign(source: SubChannel): void {
		const target = this._fields
		const values = source._fields
		target.Entity = $.assignFieldValue(target.Entity, values.Entity, "channelz.Entity")
		target.ID = values.ID
		target.RefName = values.RefName
		target.closeCalled = values.closeCalled
		target.sockets = values.sockets
		target.parent = values.parent
		target.trace = values.trace
		target.traceRefCount = values.traceRefCount
		$.assignStruct(target.ChannelMetrics, values.ChannelMetrics)
	}

	public async Sockets(): globalThis.Promise<globalThis.Map<bigint, string> | null> {
		const sc: SubChannel | $.VarRef<SubChannel> | null = this;
		using __defer = new $.DisposableStack()
		await $.pointerValue<__goscript_channelmap.channelMap>(__goscript_funcs.__goscript_get_db()).mu.RLock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<__goscript_channelmap.channelMap>(__goscript_funcs.__goscript_get_db()).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		return __goscript_channelmap.copyMap($.pointerValue<SubChannel>(sc).sockets)
	}

	public async String(): globalThis.Promise<string> {
		const sc: SubChannel | $.VarRef<SubChannel> | null = this;
		const sc$: SubChannel = sc == null ? $.pointerTarget<SubChannel>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<SubChannel>(sc)
		return fmt.Sprintf("%s SubChannel #%d", $.interfaceValue((sc$ as SubChannel).parent, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel")), $.basicInterfaceValue((sc$ as SubChannel).ID, "int64"))
	}

	public async Trace(): globalThis.Promise<__goscript_trace.ChannelTrace | $.VarRef<__goscript_trace.ChannelTrace> | null> {
		const sc: SubChannel | $.VarRef<SubChannel> | null = this;
		using __defer = new $.DisposableStack()
		await $.pointerValue<__goscript_channelmap.channelMap>(__goscript_funcs.__goscript_get_db()).mu.RLock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<__goscript_channelmap.channelMap>(__goscript_funcs.__goscript_get_db()).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		return __goscript_trace.ChannelTrace.prototype.copy.call($.pointerValue<SubChannel>(sc).trace)
	}

	public async addChild(id: bigint, e: __goscript_channelmap.entry | null): globalThis.Promise<void> {
		let sc: SubChannel | $.VarRef<SubChannel> | null = this;
		{
			let __goscriptTuple0: any = $.typeAssertTuple<__goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null>(e, /* @__PURE__ */ $.pointerType("channelz.Socket"))
			let v: __goscript_socket.Socket | $.VarRef<__goscript_socket.Socket> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok && ($.stringEqual($.pointerValue<__goscript_socket.Socket>(v).SocketType, "NormalSocket"))) {
				$.mapSet($.pointerValue<SubChannel>(sc).sockets, id, $.pointerValue<__goscript_socket.Socket>(v).RefName)
			} else {
				void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_logging.logger).Errorf("cannot add a child (id = %d) of type %T to a subChannel", $.arrayToSlice<any>([$.basicInterfaceValue(id, "int64"), (e as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	}

	public decrTraceRefCount(): void {
		const sc: SubChannel | $.VarRef<SubChannel> | null = this;
		atomic.AddInt32($.fieldRef($.pointerValue<SubChannel>(sc)._fields, "traceRefCount"), -1)
	}

	public async deleteChild(id: bigint): globalThis.Promise<void> {
		const sc: SubChannel | $.VarRef<SubChannel> | null = this;
		$.deleteMapEntry($.pointerValue<SubChannel>(sc).sockets, id)
		await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as SubChannel).deleteSelfIfReady() : SubChannel.prototype.deleteSelfIfReady.call(sc))
	}

	public deleteSelfFromMap(): boolean {
		const sc: SubChannel | $.VarRef<SubChannel> | null = this;
		let _delete: boolean = false
		return (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as SubChannel).getTraceRefCount() : SubChannel.prototype.getTraceRefCount.call(sc)) == 0
	}

	public async deleteSelfFromTree(): globalThis.Promise<boolean> {
		const sc: SubChannel | $.VarRef<SubChannel> | null = this;
		let deleted: boolean = false
		const sc$: SubChannel = sc == null ? $.pointerTarget<SubChannel>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<SubChannel>(sc)
		if (!(sc$ as SubChannel).closeCalled || ($.len((sc$ as SubChannel).sockets) != 0)) {
			return false
		}
		await __goscript_channel.Channel.prototype.deleteChild.call((sc$ as SubChannel).parent, (sc$ as SubChannel).ID)
		return true
	}

	public async deleteSelfIfReady(): globalThis.Promise<void> {
		const sc: SubChannel | $.VarRef<SubChannel> | null = this;
		const sc$: SubChannel = sc == null ? $.pointerTarget<SubChannel>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<SubChannel>(sc)
		if (!await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as SubChannel).deleteSelfFromTree() : SubChannel.prototype.deleteSelfFromTree.call(sc))) {
			return
		}
		if (!(sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as SubChannel).deleteSelfFromMap() : SubChannel.prototype.deleteSelfFromMap.call(sc))) {
			return
		}
		__goscript_channelmap.channelMap.prototype.deleteEntry.call(__goscript_funcs.__goscript_get_db(), (sc$ as SubChannel).ID)
		await __goscript_trace.ChannelTrace.prototype.clear.call((sc$ as SubChannel).trace)
	}

	public getChannelTrace(): __goscript_trace.ChannelTrace | $.VarRef<__goscript_trace.ChannelTrace> | null {
		const sc: SubChannel | $.VarRef<SubChannel> | null = this;
		return $.pointerValue<SubChannel>(sc).trace
	}

	public getParentID(): bigint {
		const sc: SubChannel | $.VarRef<SubChannel> | null = this;
		return $.pointerValue<__goscript_channel.Channel>($.pointerValue<SubChannel>(sc).parent).ID
	}

	public getRefName(): string {
		const sc: SubChannel | $.VarRef<SubChannel> | null = this;
		return $.pointerValue<SubChannel>(sc).RefName
	}

	public getTraceRefCount(): number {
		const sc: SubChannel | $.VarRef<SubChannel> | null = this;
		let i = atomic.LoadInt32($.fieldRef($.pointerValue<SubChannel>(sc)._fields, "traceRefCount"))
		return $.int(i)
	}

	public id(): bigint {
		const sc: SubChannel | $.VarRef<SubChannel> | null = this;
		return $.pointerValue<SubChannel>(sc).ID
	}

	public incrTraceRefCount(): void {
		const sc: SubChannel | $.VarRef<SubChannel> | null = this;
		atomic.AddInt32($.fieldRef($.pointerValue<SubChannel>(sc)._fields, "traceRefCount"), 1)
	}

	public async triggerDelete(): globalThis.Promise<void> {
		let sc: SubChannel | $.VarRef<SubChannel> | null = this;
		$.pointerValue<SubChannel>(sc).closeCalled = true
		await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as SubChannel).deleteSelfIfReady() : SubChannel.prototype.deleteSelfIfReady.call(sc))
	}

	public isEntity(): any {
		return $.pointerValue<Exclude<__goscript_channelmap.Entity | null, null>>(this.Entity).isEntity()
	}

	static __typeInfo = $.registerStructType(
		"channelz.SubChannel",
		() => new SubChannel(),
		() => [$.methodSignature("Sockets", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Trace", [], [/* @__PURE__ */ $.pointerType("channelz.ChannelTrace")], true), $.methodSignature("addChild", [["id", /* @__PURE__ */ $.basicType("int64")], ["e", "channelz.entry"]], [], true), $.methodSignature("decrTraceRefCount", [], [], true), $.methodSignature("deleteChild", [["id", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("deleteSelfFromMap", [], [["delete", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("deleteSelfFromTree", [], [["deleted", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("deleteSelfIfReady", [], [], true), $.methodSignature("getChannelTrace", [], [/* @__PURE__ */ $.pointerType("channelz.ChannelTrace")], true), $.methodSignature("getParentID", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("getRefName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("getTraceRefCount", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("id", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("incrTraceRefCount", [], [], true), $.methodSignature("triggerDelete", [], [], true), $.methodSignature("isEntity")],
		SubChannel,
		() => [/* @__PURE__ */ $.structField("Entity", "channelz.Entity", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("int64"), [1], 16, true), /* @__PURE__ */ $.structField("RefName", /* @__PURE__ */ $.basicType("string"), [2], 24, true), /* @__PURE__ */ $.structField("closeCalled", /* @__PURE__ */ $.basicType("bool"), [3], 40, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("sockets", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.basicType("string")), [4], 48, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("parent", /* @__PURE__ */ $.pointerType("channelz.Channel"), [5], 56, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("trace", /* @__PURE__ */ $.pointerType("channelz.ChannelTrace"), [6], 64, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("traceRefCount", /* @__PURE__ */ $.basicType("int32"), [7], 72, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("ChannelMetrics", "channelz.ChannelMetrics", [8], 80, true)]
	)
}

var __goscriptAwait: any
