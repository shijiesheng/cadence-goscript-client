// Generated file based on channel.go
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

import * as __goscript_channelmap from "./channelmap.gs.ts"

import * as __goscript_funcs from "./funcs.gs.ts"

import * as __goscript_logging from "./logging.gs.ts"

import * as __goscript_server from "./server.gs.ts"

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
import "./channelmap.gs.ts"
import "./funcs.gs.ts"
import "./logging.gs.ts"
import "./server.gs.ts"
import "./socket.gs.ts"
import "./subchannel.gs.ts"
import "./syscall_nonlinux.gs.ts"
import "./trace.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/internal/channelz", ["channelz.Channel", "channelz.ChannelMetrics"])

export class ChannelMetrics {
	// The current connectivity state of the channel.
	public get State(): atomic.Pointer<connectivity.State> {
		return this._fields.State
	}

	public set State(value: atomic.Pointer<connectivity.State>) {
		this._fields.State = value
	}

	// The target this channel originally tried to connect to.  May be absent
	public get Target(): atomic.Pointer<string> {
		return this._fields.Target
	}

	public set Target(value: atomic.Pointer<string>) {
		this._fields.Target = value
	}

	// The number of calls started on the channel.
	public get CallsStarted(): atomic.Int64 {
		return this._fields.CallsStarted
	}

	public set CallsStarted(value: atomic.Int64) {
		this._fields.CallsStarted = value
	}

	// The number of calls that have completed with an OK status.
	public get CallsSucceeded(): atomic.Int64 {
		return this._fields.CallsSucceeded
	}

	public set CallsSucceeded(value: atomic.Int64) {
		this._fields.CallsSucceeded = value
	}

	// The number of calls that have a completed with a non-OK status.
	public get CallsFailed(): atomic.Int64 {
		return this._fields.CallsFailed
	}

	public set CallsFailed(value: atomic.Int64) {
		this._fields.CallsFailed = value
	}

	// The last time a call was started on the channel.
	public get LastCallStartedTimestamp(): atomic.Int64 {
		return this._fields.LastCallStartedTimestamp
	}

	public set LastCallStartedTimestamp(value: atomic.Int64) {
		this._fields.LastCallStartedTimestamp = value
	}

	public _fields: {
		State: atomic.Pointer<connectivity.State>
		Target: atomic.Pointer<string>
		CallsStarted: atomic.Int64
		CallsSucceeded: atomic.Int64
		CallsFailed: atomic.Int64
		LastCallStartedTimestamp: atomic.Int64
	}

	constructor(init?: Partial<{State?: atomic.Pointer<connectivity.State>, Target?: atomic.Pointer<string>, CallsStarted?: atomic.Int64, CallsSucceeded?: atomic.Int64, CallsFailed?: atomic.Int64, LastCallStartedTimestamp?: atomic.Int64}>, __goscriptValue?: boolean) {
		this._fields = {
			State: init?.State ? $.markAsStructValue($.cloneStructValue(init.State)) : $.markAsStructValue(new atomic.Pointer<connectivity.State>()),
			Target: init?.Target ? $.markAsStructValue($.cloneStructValue(init.Target)) : $.markAsStructValue(new atomic.Pointer<string>()),
			CallsStarted: init?.CallsStarted ? $.markAsStructValue($.cloneStructValue(init.CallsStarted)) : $.markAsStructValue(new atomic.Int64()),
			CallsSucceeded: init?.CallsSucceeded ? $.markAsStructValue($.cloneStructValue(init.CallsSucceeded)) : $.markAsStructValue(new atomic.Int64()),
			CallsFailed: init?.CallsFailed ? $.markAsStructValue($.cloneStructValue(init.CallsFailed)) : $.markAsStructValue(new atomic.Int64()),
			LastCallStartedTimestamp: init?.LastCallStartedTimestamp ? $.markAsStructValue($.cloneStructValue(init.LastCallStartedTimestamp)) : $.markAsStructValue(new atomic.Int64())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ChannelMetrics {
		return new ChannelMetrics(this, true)
	}

	public __goscriptAssign(source: ChannelMetrics): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.State, values.State)
		$.assignStruct(target.Target, values.Target)
		$.assignStruct(target.CallsStarted, values.CallsStarted)
		$.assignStruct(target.CallsSucceeded, values.CallsSucceeded)
		$.assignStruct(target.CallsFailed, values.CallsFailed)
		$.assignStruct(target.LastCallStartedTimestamp, values.LastCallStartedTimestamp)
	}

	public CopyFrom(o: ChannelMetrics | $.VarRef<ChannelMetrics> | null): void {
		const c: ChannelMetrics | $.VarRef<ChannelMetrics> | null = this;
		const c$: ChannelMetrics = c == null ? $.pointerTarget<ChannelMetrics>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ChannelMetrics>(c)
		const o$: ChannelMetrics = o == null ? $.pointerTarget<ChannelMetrics>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<ChannelMetrics>(o)
		void (c$ as ChannelMetrics).State.Store((o$ as ChannelMetrics).State.Load())
		void (c$ as ChannelMetrics).Target.Store((o$ as ChannelMetrics).Target.Load())
		void (c$ as ChannelMetrics).CallsStarted.Store((o$ as ChannelMetrics).CallsStarted.Load())
		void (c$ as ChannelMetrics).CallsSucceeded.Store((o$ as ChannelMetrics).CallsSucceeded.Load())
		void (c$ as ChannelMetrics).CallsFailed.Store((o$ as ChannelMetrics).CallsFailed.Load())
		void (c$ as ChannelMetrics).LastCallStartedTimestamp.Store((o$ as ChannelMetrics).LastCallStartedTimestamp.Load())
	}

	public Equal(o: any): boolean {
		const c: ChannelMetrics | $.VarRef<ChannelMetrics> | null = this;
		const c$: ChannelMetrics = c == null ? $.pointerTarget<ChannelMetrics>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ChannelMetrics>(c)
		let __goscriptTuple0: any = $.typeAssertTuple<ChannelMetrics | $.VarRef<ChannelMetrics> | null>(o, /* @__PURE__ */ $.pointerType("channelz.ChannelMetrics"))
		let oc: ChannelMetrics | $.VarRef<ChannelMetrics> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		let oc$: ChannelMetrics = oc == null ? $.pointerTarget<ChannelMetrics>(oc) : (oc as any).__isVarRef === true ? (oc as any).value : (oc as any).__goValue === undefined ? (oc as any) : $.pointerTarget<ChannelMetrics>(oc)
		if (!ok) {
			return false
		}
		if (((c$ as ChannelMetrics).State.Load() == null) != ((oc$ as ChannelMetrics).State.Load() == null)) {
			return false
		}
		if (((c$ as ChannelMetrics).State.Load() != null) && ($.pointerValue<connectivity.State>((c$ as ChannelMetrics).State.Load()) != $.pointerValue<connectivity.State>((oc$ as ChannelMetrics).State.Load()))) {
			return false
		}
		if (((c$ as ChannelMetrics).Target.Load() == null) != ((oc$ as ChannelMetrics).Target.Load() == null)) {
			return false
		}
		if (((c$ as ChannelMetrics).Target.Load() != null) && (!$.stringEqual($.pointerValue<string>((c$ as ChannelMetrics).Target.Load()), $.pointerValue<string>((oc$ as ChannelMetrics).Target.Load())))) {
			return false
		}
		return ((((c$ as ChannelMetrics).CallsStarted.Load() == (oc$ as ChannelMetrics).CallsStarted.Load()) && ((c$ as ChannelMetrics).CallsFailed.Load() == (oc$ as ChannelMetrics).CallsFailed.Load())) && ((c$ as ChannelMetrics).CallsSucceeded.Load() == (oc$ as ChannelMetrics).CallsSucceeded.Load())) && ((c$ as ChannelMetrics).LastCallStartedTimestamp.Load() == (oc$ as ChannelMetrics).LastCallStartedTimestamp.Load())
	}

	public async String(): globalThis.Promise<string> {
		const c: ChannelMetrics | $.VarRef<ChannelMetrics> | null = this;
		const c$: ChannelMetrics = c == null ? $.pointerTarget<ChannelMetrics>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ChannelMetrics>(c)
		return fmt.Sprintf("State: %v, Target: %s, CallsStarted: %v, CallsSucceeded: %v, CallsFailed: %v, LastCallStartedTimestamp: %v", $.namedValueInterfaceValue<any>((c$ as ChannelMetrics).State.Load(), "*connectivity.State", __goscriptStatic2(), __goscriptStatic3(), __goscriptStatic4()), strFromPointer((c$ as ChannelMetrics).Target.Load()), $.basicInterfaceValue((c$ as ChannelMetrics).CallsStarted.Load(), "int64"), $.basicInterfaceValue((c$ as ChannelMetrics).CallsSucceeded.Load(), "int64"), $.basicInterfaceValue((c$ as ChannelMetrics).CallsFailed.Load(), "int64"), $.basicInterfaceValue((c$ as ChannelMetrics).LastCallStartedTimestamp.Load(), "int64"))
	}

	static __typeInfo = $.registerStructType(
		"channelz.ChannelMetrics",
		() => new ChannelMetrics(),
		() => [$.methodSignature("CopyFrom", [["o", /* @__PURE__ */ $.pointerType("channelz.ChannelMetrics")]], [], true), $.methodSignature("Equal", [["o", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		ChannelMetrics,
		() => [/* @__PURE__ */ $.structField("State", "atomic.Pointer", [0], 0, true), /* @__PURE__ */ $.structField("Target", "atomic.Pointer", [1], 8, true), /* @__PURE__ */ $.structField("CallsStarted", "atomic.Int64", [2], 16, true), /* @__PURE__ */ $.structField("CallsSucceeded", "atomic.Int64", [3], 24, true), /* @__PURE__ */ $.structField("CallsFailed", "atomic.Int64", [4], 32, true), /* @__PURE__ */ $.structField("LastCallStartedTimestamp", "atomic.Int64", [5], 40, true)]
	)
}

export class Channel {
	public get Entity(): __goscript_channelmap.Entity | null {
		return this._fields.Entity
	}

	public set Entity(value: __goscript_channelmap.Entity | null) {
		this._fields.Entity = value
	}

	// ID is the channelz id of this channel.
	public get ID(): bigint {
		return this._fields.ID
	}

	public set ID(value: bigint) {
		this._fields.ID = value
	}

	// RefName is the human readable reference string of this channel.
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

	public get nestedChans(): globalThis.Map<bigint, string> | null {
		return this._fields.nestedChans
	}

	public set nestedChans(value: globalThis.Map<bigint, string> | null) {
		this._fields.nestedChans = value
	}

	public get subChans(): globalThis.Map<bigint, string> | null {
		return this._fields.subChans
	}

	public set subChans(value: globalThis.Map<bigint, string> | null) {
		this._fields.subChans = value
	}

	public get Parent(): Channel | $.VarRef<Channel> | null {
		return this._fields.Parent
	}

	public set Parent(value: Channel | $.VarRef<Channel> | null) {
		this._fields.Parent = value
	}

	public get trace(): __goscript_trace.ChannelTrace | $.VarRef<__goscript_trace.ChannelTrace> | null {
		return this._fields.trace
	}

	public set trace(value: __goscript_trace.ChannelTrace | $.VarRef<__goscript_trace.ChannelTrace> | null) {
		this._fields.trace = value
	}

	// traceRefCount is the number of trace events that reference this channel.
	// Non-zero traceRefCount means the trace of this channel cannot be deleted.
	public get traceRefCount(): number {
		return this._fields.traceRefCount
	}

	public set traceRefCount(value: number) {
		this._fields.traceRefCount = value
	}

	public get ChannelMetrics(): ChannelMetrics {
		return this._fields.ChannelMetrics
	}

	public set ChannelMetrics(value: ChannelMetrics) {
		this._fields.ChannelMetrics = value
	}

	public _fields: {
		Entity: __goscript_channelmap.Entity | null
		ID: bigint
		RefName: string
		closeCalled: boolean
		nestedChans: globalThis.Map<bigint, string> | null
		subChans: globalThis.Map<bigint, string> | null
		Parent: Channel | $.VarRef<Channel> | null
		trace: __goscript_trace.ChannelTrace | $.VarRef<__goscript_trace.ChannelTrace> | null
		traceRefCount: number
		ChannelMetrics: ChannelMetrics
	}

	constructor(init?: Partial<{Entity?: __goscript_channelmap.Entity | null, ID?: bigint, RefName?: string, closeCalled?: boolean, nestedChans?: globalThis.Map<bigint, string> | null, subChans?: globalThis.Map<bigint, string> | null, Parent?: Channel | $.VarRef<Channel> | null, trace?: __goscript_trace.ChannelTrace | $.VarRef<__goscript_trace.ChannelTrace> | null, traceRefCount?: number, ChannelMetrics?: ChannelMetrics}>, __goscriptValue?: boolean) {
		this._fields = {
			Entity: init?.Entity ?? (null! as __goscript_channelmap.Entity | null),
			ID: init?.ID ?? (0n as bigint),
			RefName: init?.RefName ?? ("" as string),
			closeCalled: init?.closeCalled ?? (false as boolean),
			nestedChans: init?.nestedChans ?? (null! as globalThis.Map<bigint, string> | null),
			subChans: init?.subChans ?? (null! as globalThis.Map<bigint, string> | null),
			Parent: init?.Parent ?? (null! as Channel | $.VarRef<Channel> | null),
			trace: init?.trace ?? (null! as __goscript_trace.ChannelTrace | $.VarRef<__goscript_trace.ChannelTrace> | null),
			traceRefCount: init?.traceRefCount ?? (0 as number),
			ChannelMetrics: init?.ChannelMetrics ? init.ChannelMetrics.clone() : new ChannelMetrics(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Channel {
		return new Channel(this, true)
	}

	public __goscriptAssign(source: Channel): void {
		const target = this._fields
		const values = source._fields
		target.Entity = $.assignFieldValue(target.Entity, values.Entity, "channelz.Entity")
		target.ID = values.ID
		target.RefName = values.RefName
		target.closeCalled = values.closeCalled
		target.nestedChans = values.nestedChans
		target.subChans = values.subChans
		target.Parent = values.Parent
		target.trace = values.trace
		target.traceRefCount = values.traceRefCount
		$.assignStruct(target.ChannelMetrics, values.ChannelMetrics)
	}

	public async NestedChans(): globalThis.Promise<globalThis.Map<bigint, string> | null> {
		const c: Channel | $.VarRef<Channel> | null = this;
		using __defer = new $.DisposableStack()
		await $.pointerValue<__goscript_channelmap.channelMap>(__goscript_funcs.__goscript_get_db()).mu.RLock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<__goscript_channelmap.channelMap>(__goscript_funcs.__goscript_get_db()).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		return __goscript_channelmap.copyMap($.pointerValue<Channel>(c).nestedChans)
	}

	public async String(): globalThis.Promise<string> {
		const c: Channel | $.VarRef<Channel> | null = this;
		const c$: Channel = c == null ? $.pointerTarget<Channel>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Channel>(c)
		if ((c$ as Channel).Parent == null) {
			return fmt.Sprintf("Channel #%d", $.basicInterfaceValue((c$ as Channel).ID, "int64"))
		}
		return fmt.Sprintf("%s Channel #%d", $.interfaceValue((c$ as Channel).Parent, "*channelz.Channel", /* @__PURE__ */ $.pointerType("channelz.Channel")), $.basicInterfaceValue((c$ as Channel).ID, "int64"))
	}

	public async SubChans(): globalThis.Promise<globalThis.Map<bigint, string> | null> {
		const c: Channel | $.VarRef<Channel> | null = this;
		using __defer = new $.DisposableStack()
		await $.pointerValue<__goscript_channelmap.channelMap>(__goscript_funcs.__goscript_get_db()).mu.RLock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<__goscript_channelmap.channelMap>(__goscript_funcs.__goscript_get_db()).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		return __goscript_channelmap.copyMap($.pointerValue<Channel>(c).subChans)
	}

	public async Trace(): globalThis.Promise<__goscript_trace.ChannelTrace | $.VarRef<__goscript_trace.ChannelTrace> | null> {
		const c: Channel | $.VarRef<Channel> | null = this;
		using __defer = new $.DisposableStack()
		await $.pointerValue<__goscript_channelmap.channelMap>(__goscript_funcs.__goscript_get_db()).mu.RLock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<__goscript_channelmap.channelMap>(__goscript_funcs.__goscript_get_db()).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
		return __goscript_trace.ChannelTrace.prototype.copy.call($.pointerValue<Channel>(c).trace)
	}

	public async addChild(id: bigint, e: __goscript_channelmap.entry | null): globalThis.Promise<void> {
		let c: Channel | $.VarRef<Channel> | null = this;
		const c$: Channel = c == null ? $.pointerTarget<Channel>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Channel>(c)
		{
			const __goscriptTypeSwitchValue = e
			switch (true) {
				case $.typeAssert<__goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("channelz.SubChannel")).ok:
					{
						let v: __goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null = $.typeAssert<__goscript_subchannel.SubChannel | $.VarRef<__goscript_subchannel.SubChannel> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("channelz.SubChannel")).value
						$.mapSet((c$ as Channel).subChans, id, $.pointerValue<__goscript_subchannel.SubChannel>(v).RefName)
					}
					break
				case $.typeAssert<Channel | $.VarRef<Channel> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("channelz.Channel")).ok:
					{
						let v: Channel | $.VarRef<Channel> | null = $.typeAssert<Channel | $.VarRef<Channel> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("channelz.Channel")).value
						$.mapSet((c$ as Channel).nestedChans, id, $.pointerValue<Channel>(v).RefName)
					}
					break
				default:
					{
						let v: any = __goscriptTypeSwitchValue
						void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_logging.logger).Errorf("cannot add a child (id = %d) of type %T to a channel", $.arrayToSlice<any>([$.basicInterfaceValue(id, "int64"), (e as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
			}
		}
	}

	public channelzIdentifier(): void {
		const c: Channel | $.VarRef<Channel> | null = this;
	}

	public decrTraceRefCount(): void {
		const c: Channel | $.VarRef<Channel> | null = this;
		atomic.AddInt32($.fieldRef($.pointerValue<Channel>(c)._fields, "traceRefCount"), -1)
	}

	public async deleteChild(id: bigint): globalThis.Promise<void> {
		const c: Channel | $.VarRef<Channel> | null = this;
		const c$: Channel = c == null ? $.pointerTarget<Channel>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Channel>(c)
		$.deleteMapEntry((c$ as Channel).subChans, id)
		$.deleteMapEntry((c$ as Channel).nestedChans, id)
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Channel).deleteSelfIfReady() : Channel.prototype.deleteSelfIfReady.call(c))
	}

	public deleteSelfFromMap(): boolean {
		const c: Channel | $.VarRef<Channel> | null = this;
		let _delete: boolean = false
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Channel).getTraceRefCount() : Channel.prototype.getTraceRefCount.call(c)) == 0
	}

	public async deleteSelfFromTree(): globalThis.Promise<boolean> {
		const c: Channel | $.VarRef<Channel> | null = this;
		let deleted: boolean = false
		const c$: Channel = c == null ? $.pointerTarget<Channel>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Channel>(c)
		if (!(c$ as Channel).closeCalled || (($.len((c$ as Channel).subChans) + $.len((c$ as Channel).nestedChans)) != 0)) {
			return false
		}
		// not top channel
		if ((c$ as Channel).Parent != null) {
			await Channel.prototype.deleteChild.call((c$ as Channel).Parent, (c$ as Channel).ID)
		}
		return true
	}

	public async deleteSelfIfReady(): globalThis.Promise<void> {
		const c: Channel | $.VarRef<Channel> | null = this;
		const c$: Channel = c == null ? $.pointerTarget<Channel>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Channel>(c)
		if (!await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Channel).deleteSelfFromTree() : Channel.prototype.deleteSelfFromTree.call(c))) {
			return
		}
		if (!(c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Channel).deleteSelfFromMap() : Channel.prototype.deleteSelfFromMap.call(c))) {
			return
		}
		__goscript_channelmap.channelMap.prototype.deleteEntry.call(__goscript_funcs.__goscript_get_db(), (c$ as Channel).ID)
		await __goscript_trace.ChannelTrace.prototype.clear.call((c$ as Channel).trace)
	}

	public getChannelTrace(): __goscript_trace.ChannelTrace | $.VarRef<__goscript_trace.ChannelTrace> | null {
		const c: Channel | $.VarRef<Channel> | null = this;
		return $.pointerValue<Channel>(c).trace
	}

	public getParentID(): bigint {
		const c: Channel | $.VarRef<Channel> | null = this;
		const c$: Channel = c == null ? $.pointerTarget<Channel>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Channel>(c)
		if ((c$ as Channel).Parent == null) {
			return -1n
		}
		return $.pointerValue<Channel>((c$ as Channel).Parent).ID
	}

	public getRefName(): string {
		const c: Channel | $.VarRef<Channel> | null = this;
		return $.pointerValue<Channel>(c).RefName
	}

	public getTraceRefCount(): number {
		const c: Channel | $.VarRef<Channel> | null = this;
		let i = atomic.LoadInt32($.fieldRef($.pointerValue<Channel>(c)._fields, "traceRefCount"))
		return $.int(i)
	}

	public id(): bigint {
		const c: Channel | $.VarRef<Channel> | null = this;
		return $.pointerValue<Channel>(c).ID
	}

	public incrTraceRefCount(): void {
		const c: Channel | $.VarRef<Channel> | null = this;
		atomic.AddInt32($.fieldRef($.pointerValue<Channel>(c)._fields, "traceRefCount"), 1)
	}

	public async triggerDelete(): globalThis.Promise<void> {
		let c: Channel | $.VarRef<Channel> | null = this;
		$.pointerValue<Channel>(c).closeCalled = true
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Channel).deleteSelfIfReady() : Channel.prototype.deleteSelfIfReady.call(c))
	}

	public isEntity(): any {
		return $.pointerValue<Exclude<__goscript_channelmap.Entity | null, null>>(this.Entity).isEntity()
	}

	static __typeInfo = $.registerStructType(
		"channelz.Channel",
		() => new Channel(),
		() => [$.methodSignature("NestedChans", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("SubChans", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("Trace", [], [/* @__PURE__ */ $.pointerType("channelz.ChannelTrace")], true), $.methodSignature("addChild", [["id", /* @__PURE__ */ $.basicType("int64")], ["e", "channelz.entry"]], [], true), $.methodSignature("channelzIdentifier", [], [], true), $.methodSignature("decrTraceRefCount", [], [], true), $.methodSignature("deleteChild", [["id", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("deleteSelfFromMap", [], [["delete", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("deleteSelfFromTree", [], [["deleted", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("deleteSelfIfReady", [], [], true), $.methodSignature("getChannelTrace", [], [/* @__PURE__ */ $.pointerType("channelz.ChannelTrace")], true), $.methodSignature("getParentID", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("getRefName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("getTraceRefCount", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("id", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("incrTraceRefCount", [], [], true), $.methodSignature("triggerDelete", [], [], true), $.methodSignature("isEntity")],
		Channel,
		() => [/* @__PURE__ */ $.structField("Entity", "channelz.Entity", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("int64"), [1], 16, true), /* @__PURE__ */ $.structField("RefName", /* @__PURE__ */ $.basicType("string"), [2], 24, true), /* @__PURE__ */ $.structField("closeCalled", /* @__PURE__ */ $.basicType("bool"), [3], 40, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("nestedChans", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.basicType("string")), [4], 48, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("subChans", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.basicType("string")), [5], 56, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("Parent", /* @__PURE__ */ $.pointerType("channelz.Channel"), [6], 64, true), /* @__PURE__ */ $.structField("trace", /* @__PURE__ */ $.pointerType("channelz.ChannelTrace"), [7], 72, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("traceRefCount", /* @__PURE__ */ $.basicType("int32"), [8], 80, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("ChannelMetrics", "channelz.ChannelMetrics", [9], 88, true)]
	)
}

export function strFromPointer(s: $.VarRef<string> | null): string {
	if (s == null) {
		return ""
	}
	return $.pointerValue<string>(s)
}

export function NewChannelMetricForTesting(__goscriptParam0: connectivity.State, __goscriptParam1: string, started: bigint, succeeded: bigint, failed: bigint, timestamp: bigint): ChannelMetrics | $.VarRef<ChannelMetrics> | null {
	let state: $.VarRef<connectivity.State> = $.varRef(__goscriptParam0)
	let target: $.VarRef<string> = $.varRef(__goscriptParam1)
	let c: ChannelMetrics | $.VarRef<ChannelMetrics> | null = new ChannelMetrics()
	let c$: ChannelMetrics = c == null ? $.pointerTarget<ChannelMetrics>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ChannelMetrics>(c)
	void (c$ as ChannelMetrics).State.Store(state)
	void (c$ as ChannelMetrics).Target.Store(target)
	void (c$ as ChannelMetrics).CallsStarted.Store(started)
	void (c$ as ChannelMetrics).CallsSucceeded.Store(succeeded)
	void (c$ as ChannelMetrics).CallsFailed.Store(failed)
	void (c$ as ChannelMetrics).LastCallStartedTimestamp.Store(timestamp)
	return c
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("int", "connectivity.State"), zero: () => 0, methods: {String: (receiver: any, ...args: any[]) => (connectivity.State_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])] }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ({String: (receiver: any, ...args: any[]) => (connectivity.State_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "connectivity.State")))
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
