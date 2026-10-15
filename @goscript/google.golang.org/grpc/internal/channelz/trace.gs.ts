// Generated file based on trace.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as net from "@goscript/net/index.js"

import * as __goscript_channel from "./channel.gs.ts"

import * as __goscript_channelmap from "./channelmap.gs.ts"

import * as __goscript_funcs from "./funcs.gs.ts"

import * as __goscript_server from "./server.gs.ts"

import * as __goscript_socket from "./socket.gs.ts"

import * as __goscript_subchannel from "./subchannel.gs.ts"

import * as __goscript_syscall_nonlinux from "./syscall_nonlinux.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/net/index.js"
import "./channel.gs.ts"
import "./channelmap.gs.ts"
import "./funcs.gs.ts"
import "./server.gs.ts"
import "./socket.gs.ts"
import "./subchannel.gs.ts"
import "./syscall_nonlinux.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/internal/channelz", ["channelz.traceEvent", "channelz.TraceEvent", "channelz.ChannelTrace", "channelz.Severity", "channelz.RefChannelType"])

export type Severity = number

export type RefChannelType = number

$.registerNamedValueType(
	"channelz.RefChannelType",
	{String: (receiver: any, ...args: any[]) => (RefChannelType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*channelz.RefChannelType",
	{String: (receiver: any, ...args: any[]) => (RefChannelType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class traceEvent {
	// Desc is a simple description of the trace event.
	public get Desc(): string {
		return this._fields.Desc
	}

	public set Desc(value: string) {
		this._fields.Desc = value
	}

	// Severity states the severity of this trace event.
	public get Severity(): Severity {
		return this._fields.Severity
	}

	public set Severity(value: Severity) {
		this._fields.Severity = value
	}

	// Timestamp is the event time.
	public get Timestamp(): time.Time {
		return this._fields.Timestamp
	}

	public set Timestamp(value: time.Time) {
		this._fields.Timestamp = value
	}

	// RefID is the id of the entity that gets referenced in the event. RefID is 0 if no other entity is
	// involved in this event.
	// e.g. SubChannel (id: 4[]) Created. --> RefID = 4, RefName = "" (inside [])
	public get RefID(): bigint {
		return this._fields.RefID
	}

	public set RefID(value: bigint) {
		this._fields.RefID = value
	}

	// RefName is the reference name for the entity that gets referenced in the event.
	public get RefName(): string {
		return this._fields.RefName
	}

	public set RefName(value: string) {
		this._fields.RefName = value
	}

	// RefType indicates the referenced entity type, i.e Channel or SubChannel.
	public get RefType(): RefChannelType {
		return this._fields.RefType
	}

	public set RefType(value: RefChannelType) {
		this._fields.RefType = value
	}

	public _fields: {
		Desc: string
		Severity: Severity
		Timestamp: time.Time
		RefID: bigint
		RefName: string
		RefType: RefChannelType
	}

	constructor(init?: Partial<{Desc?: string, Severity?: Severity, Timestamp?: time.Time, RefID?: bigint, RefName?: string, RefType?: RefChannelType}>, __goscriptValue?: boolean) {
		this._fields = {
			Desc: init?.Desc ?? ("" as string),
			Severity: init?.Severity ?? (0 as Severity),
			Timestamp: init?.Timestamp ? $.markAsStructValue($.cloneStructValue(init.Timestamp)) : $.markAsStructValue(new time.Time()),
			RefID: init?.RefID ?? (0n as bigint),
			RefName: init?.RefName ?? ("" as string),
			RefType: init?.RefType ?? (0 as RefChannelType)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): traceEvent {
		return new traceEvent(this, true)
	}

	public __goscriptAssign(source: traceEvent): void {
		const target = this._fields
		const values = source._fields
		target.Desc = values.Desc
		target.Severity = values.Severity
		$.assignStruct(target.Timestamp, values.Timestamp)
		target.RefID = values.RefID
		target.RefName = values.RefName
		target.RefType = values.RefType
	}

	static __typeInfo = $.registerStructType(
		"channelz.traceEvent",
		() => new traceEvent(),
		() => [],
		traceEvent,
		() => [/* @__PURE__ */ $.structField("Desc", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Severity", /* @__PURE__ */ $.basicType("int", "channelz.Severity"), [1], 16, true), /* @__PURE__ */ $.structField("Timestamp", "time.Time", [2], 24, true), /* @__PURE__ */ $.structField("RefID", /* @__PURE__ */ $.basicType("int64"), [3], 48, true), /* @__PURE__ */ $.structField("RefName", /* @__PURE__ */ $.basicType("string"), [4], 56, true), /* @__PURE__ */ $.structField("RefType", /* @__PURE__ */ $.basicType("int", "channelz.RefChannelType"), [5], 72, true)]
	)
}

export class TraceEvent {
	public get Desc(): string {
		return this._fields.Desc
	}

	public set Desc(value: string) {
		this._fields.Desc = value
	}

	public get Severity(): Severity {
		return this._fields.Severity
	}

	public set Severity(value: Severity) {
		this._fields.Severity = value
	}

	public get Parent(): TraceEvent | $.VarRef<TraceEvent> | null {
		return this._fields.Parent
	}

	public set Parent(value: TraceEvent | $.VarRef<TraceEvent> | null) {
		this._fields.Parent = value
	}

	public _fields: {
		Desc: string
		Severity: Severity
		Parent: TraceEvent | $.VarRef<TraceEvent> | null
	}

	constructor(init?: Partial<{Desc?: string, Severity?: Severity, Parent?: TraceEvent | $.VarRef<TraceEvent> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Desc: init?.Desc ?? ("" as string),
			Severity: init?.Severity ?? (0 as Severity),
			Parent: init?.Parent ?? (null! as TraceEvent | $.VarRef<TraceEvent> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TraceEvent {
		return new TraceEvent(this, true)
	}

	public __goscriptAssign(source: TraceEvent): void {
		const target = this._fields
		const values = source._fields
		target.Desc = values.Desc
		target.Severity = values.Severity
		target.Parent = values.Parent
	}

	static __typeInfo = $.registerStructType(
		"channelz.TraceEvent",
		() => new TraceEvent(),
		() => [],
		TraceEvent,
		() => [/* @__PURE__ */ $.structField("Desc", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Severity", /* @__PURE__ */ $.basicType("int", "channelz.Severity"), [1], 16, true), /* @__PURE__ */ $.structField("Parent", /* @__PURE__ */ $.pointerType("channelz.TraceEvent"), [2], 24, true)]
	)
}

export class ChannelTrace {
	public get cm(): __goscript_channelmap.channelMap | $.VarRef<__goscript_channelmap.channelMap> | null {
		return this._fields.cm
	}

	public set cm(value: __goscript_channelmap.channelMap | $.VarRef<__goscript_channelmap.channelMap> | null) {
		this._fields.cm = value
	}

	public get clearCalled(): boolean {
		return this._fields.clearCalled
	}

	public set clearCalled(value: boolean) {
		this._fields.clearCalled = value
	}

	public get CreationTime(): time.Time {
		return this._fields.CreationTime
	}

	public set CreationTime(value: time.Time) {
		this._fields.CreationTime = value
	}

	public get EventNum(): bigint {
		return this._fields.EventNum
	}

	public set EventNum(value: bigint) {
		this._fields.EventNum = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get Events(): $.Slice<traceEvent | $.VarRef<traceEvent> | null> {
		return this._fields.Events
	}

	public set Events(value: $.Slice<traceEvent | $.VarRef<traceEvent> | null>) {
		this._fields.Events = value
	}

	public _fields: {
		cm: __goscript_channelmap.channelMap | $.VarRef<__goscript_channelmap.channelMap> | null
		clearCalled: boolean
		CreationTime: time.Time
		EventNum: bigint
		mu: sync.Mutex
		Events: $.Slice<traceEvent | $.VarRef<traceEvent> | null>
	}

	constructor(init?: Partial<{cm?: __goscript_channelmap.channelMap | $.VarRef<__goscript_channelmap.channelMap> | null, clearCalled?: boolean, CreationTime?: time.Time, EventNum?: bigint, mu?: sync.Mutex, Events?: $.Slice<traceEvent | $.VarRef<traceEvent> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			cm: init?.cm ?? (null! as __goscript_channelmap.channelMap | $.VarRef<__goscript_channelmap.channelMap> | null),
			clearCalled: init?.clearCalled ?? (false as boolean),
			CreationTime: init?.CreationTime ? $.markAsStructValue($.cloneStructValue(init.CreationTime)) : $.markAsStructValue(new time.Time()),
			EventNum: init?.EventNum ?? (0n as bigint),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			Events: init?.Events ?? (null! as $.Slice<traceEvent | $.VarRef<traceEvent> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ChannelTrace {
		return new ChannelTrace(this, true)
	}

	public __goscriptAssign(source: ChannelTrace): void {
		const target = this._fields
		const values = source._fields
		target.cm = values.cm
		target.clearCalled = values.clearCalled
		$.assignStruct(target.CreationTime, values.CreationTime)
		target.EventNum = values.EventNum
		$.assignStruct(target.mu, values.mu)
		target.Events = values.Events
	}

	public async append(e: traceEvent | $.VarRef<traceEvent> | null): globalThis.Promise<void> {
		let c: ChannelTrace | $.VarRef<ChannelTrace> | null = this;
		const c$: ChannelTrace = c == null ? $.pointerTarget<ChannelTrace>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ChannelTrace>(c)
		await (c$ as ChannelTrace).mu.Lock()
		if ($.sliceLen((c$ as ChannelTrace).Events) == getMaxTraceEntry()) {
			let del: traceEvent | $.VarRef<traceEvent> | null = $.arrayIndex((c$ as ChannelTrace).Events!, 0)
			let del$: traceEvent = del == null ? $.pointerTarget<traceEvent>(del) : (del as any).__isVarRef === true ? (del as any).value : (del as any).__goValue === undefined ? (del as any) : $.pointerTarget<traceEvent>(del);
			;(c$ as ChannelTrace).Events = $.goSlice((c$ as ChannelTrace).Events, 1, undefined)
			if ((del$ as traceEvent).RefID != 0n) {
				// start recursive cleanup in a goroutine to not block the call originated from grpc.
				queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
					// need to acquire c.cm.mu lock to call the unlocked attemptCleanup func.
					await $.pointerValue<__goscript_channelmap.channelMap>((c$ as ChannelTrace).cm).mu.Lock()
					await __goscript_channelmap.channelMap.prototype.decrTraceRefCount.call((c$ as ChannelTrace).cm, (del$ as traceEvent).RefID)
					$.pointerValue<__goscript_channelmap.channelMap>((c$ as ChannelTrace).cm).mu.Unlock()
				})() })
			}
		}
		$.assignStruct($.pointerValue<traceEvent>(e).Timestamp, time.Now());
		;(c$ as ChannelTrace).Events = $.appendOne((c$ as ChannelTrace).Events, e, $.appendZeros.nil);
		;(c$ as ChannelTrace).EventNum++
		void (c$ as ChannelTrace).mu.Unlock()
	}

	public async clear(): globalThis.Promise<void> {
		let c: ChannelTrace | $.VarRef<ChannelTrace> | null = this;
		const c$: ChannelTrace = c == null ? $.pointerTarget<ChannelTrace>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ChannelTrace>(c)
		if ((c$ as ChannelTrace).clearCalled) {
			return
		}
		;(c$ as ChannelTrace).clearCalled = true
		await (c$ as ChannelTrace).mu.Lock()
		for (let __goscriptRangeTarget0 = (c$ as ChannelTrace).Events, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let e = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as traceEvent | $.VarRef<traceEvent> | null)
			if ($.pointerValue<traceEvent>(e).RefID != 0n) {
				// caller should have already held the c.cm.mu lock.
				await __goscript_channelmap.channelMap.prototype.decrTraceRefCount.call((c$ as ChannelTrace).cm, $.pointerValue<traceEvent>(e).RefID)
			}
		}
		void (c$ as ChannelTrace).mu.Unlock()
	}

	public copy(): ChannelTrace | $.VarRef<ChannelTrace> | null {
		const c: ChannelTrace | $.VarRef<ChannelTrace> | null = this;
		const c$: ChannelTrace = c == null ? $.pointerTarget<ChannelTrace>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ChannelTrace>(c)
		return new ChannelTrace({CreationTime: $.markAsStructValue($.cloneStructValue((c$ as ChannelTrace).CreationTime)), EventNum: (c$ as ChannelTrace).EventNum, Events: $.appendSlice<traceEvent | $.VarRef<traceEvent> | null>(null, (c$ as ChannelTrace).Events, $.appendZeros.nil)})
	}

	static __typeInfo = $.registerStructType(
		"channelz.ChannelTrace",
		() => new ChannelTrace(),
		() => [$.methodSignature("append", [["e", /* @__PURE__ */ $.pointerType("channelz.traceEvent")]], [], true), $.methodSignature("clear", [], [], true), $.methodSignature("copy", [], [/* @__PURE__ */ $.pointerType("channelz.ChannelTrace")], true)],
		ChannelTrace,
		() => [/* @__PURE__ */ $.structField("cm", /* @__PURE__ */ $.pointerType("channelz.channelMap"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("clearCalled", /* @__PURE__ */ $.basicType("bool"), [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("CreationTime", "time.Time", [2], 16, true), /* @__PURE__ */ $.structField("EventNum", /* @__PURE__ */ $.basicType("int64"), [3], 40, true), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [4], 48, false, { pkgPath: "google.golang.org/grpc/internal/channelz" }), /* @__PURE__ */ $.structField("Events", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("channelz.traceEvent")), [5], 56, true)]
	)
}

export const defaultMaxTraceEntry: number = 30

export const CtUnknown: Severity = 0

export const CtInfo: Severity = 1

export const CtWarning: Severity = 2

export const CtError: Severity = 3

export const RefUnknown: RefChannelType = 0

export const RefChannel: RefChannelType = 1

export const RefSubChannel: RefChannelType = 2

export const RefServer: RefChannelType = 3

export const RefListenSocket: RefChannelType = 4

export const RefNormalSocket: RefChannelType = 5

export let maxTraceEntry: $.VarRef<number> = $.varRef(30)

export function __goscript_set_maxTraceEntry(__goscriptValue: number): void {
	maxTraceEntry.value = __goscriptValue
}

export function SetMaxTraceEntry(i: number): void {
	atomic.StoreInt32(maxTraceEntry, i)
}

export function ResetMaxTraceEntryToDefault(): void {
	atomic.StoreInt32(maxTraceEntry, 30)
}

export function getMaxTraceEntry(): number {
	let i = atomic.LoadInt32(maxTraceEntry)
	return $.int(i)
}

export let refChannelTypeToString: globalThis.Map<RefChannelType, string> | null = $.makeMap<RefChannelType, string>([[0, "Unknown"], [1, "Channel"], [2, "SubChannel"], [3, "Server"], [4, "ListenSocket"], [5, "NormalSocket"]])

export function __goscript_set_refChannelTypeToString(__goscriptValue: globalThis.Map<RefChannelType, string> | null): void {
	refChannelTypeToString = __goscriptValue
}

export function RefChannelType_String(r: RefChannelType): string {
	return $.mapGet<RefChannelType, string, string>(refChannelTypeToString, r, "")[0]
}

export async function AddTraceEvent(l: grpclog.DepthLoggerV2 | null, e: __goscript_channelmap.Entity | null, depth: number, desc: TraceEvent | $.VarRef<TraceEvent> | null): globalThis.Promise<void> {
	const desc$: TraceEvent = desc == null ? $.pointerTarget<TraceEvent>(desc) : (desc as any).__isVarRef === true ? (desc as any).value : (desc as any).__goValue === undefined ? (desc as any) : $.pointerTarget<TraceEvent>(desc)
	// Log only the trace description associated with the bottom most entity.
	let d = await fmt.Sprintf("[%s]%s", (e as any), (desc$ as TraceEvent).Desc)
	switch ((desc$ as TraceEvent).Severity) {
		case 0:
		case 1:
		{
			void (__goscriptAwait = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? (l as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(l)).InfoDepth(depth + 1, $.arrayToSlice<any>([d])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		case 2:
		{
			void (__goscriptAwait = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? (l as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(l)).WarningDepth(depth + 1, $.arrayToSlice<any>([d])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		case 3:
		{
			void (__goscriptAwait = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? (l as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(l)).ErrorDepth(depth + 1, $.arrayToSlice<any>([d])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
	}

	if (getMaxTraceEntry() == 0) {
		return
	}
	if (__goscript_funcs.IsOn()) {
		await __goscript_channelmap.channelMap.prototype.traceEvent.call(__goscript_funcs.__goscript_get_db(), (__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<__goscript_channelmap.Entity, null>) : $.pointerValue<Exclude<__goscript_channelmap.Entity, null>>(e)).id(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), desc)
	}
}

var __goscriptAwait: any
