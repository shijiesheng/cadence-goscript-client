// Generated file based on events.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as template from "@goscript/html/template/index.js"

import * as io from "@goscript/io/index.js"

import * as log from "@goscript/log/index.js"

import * as http from "@goscript/net/http/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as tabwriter from "@goscript/text/tabwriter/index.js"

import * as time from "@goscript/time/index.js"

import * as template2 from "@goscript/text/template/index.js"

import * as __goscript_trace from "./trace.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/html/template/index.js"
import "@goscript/io/index.js"
import "@goscript/log/index.js"
import "@goscript/net/http/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/text/tabwriter/index.js"
import "@goscript/time/index.js"
import "@goscript/text/template/index.js"
import "./trace.gs.ts"

$.registerTypePackagePath("golang.org/x/net/trace", ["trace.bucket", "trace.EventLog", "trace.eventFamily", "trace.eventLogs", "trace.logEntry", "trace.eventLog"])

export type EventLog = {
	Errorf(format: string, a: $.Slice<any>): void
	Finish(): void
	Printf(format: string, a: $.Slice<any>): void
}

$.registerInterfaceType(
	"trace.EventLog",
	null,
	[$.methodSignature("Errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Finish"), $.methodSignature("Printf", [["format", /* @__PURE__ */ $.basicType("string")], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]])]
);

export type eventLogs = $.Slice<eventLog | $.VarRef<eventLog> | null>

$.registerNamedType("trace.eventLogs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("trace.eventLog")));

$.registerNamedValueType(
	"trace.eventLogs",
	{Free: (receiver: any, ...args: any[]) => (eventLogs_Free as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (eventLogs_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (eventLogs_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (eventLogs_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Free"), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*trace.eventLogs",
	{Free: (receiver: any, ...args: any[]) => (eventLogs_Free as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (eventLogs_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (eventLogs_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (eventLogs_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Free"), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export class bucket {
	public get MaxErrAge(): time.Duration {
		return this._fields.MaxErrAge
	}

	public set MaxErrAge(value: time.Duration) {
		this._fields.MaxErrAge = value
	}

	public get String(): string {
		return this._fields.String
	}

	public set String(value: string) {
		this._fields.String = value
	}

	public _fields: {
		MaxErrAge: time.Duration
		String: string
	}

	constructor(init?: Partial<{MaxErrAge?: time.Duration, String?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			MaxErrAge: init?.MaxErrAge ?? (0n as time.Duration),
			String: init?.String ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): bucket {
		return new bucket(this, true)
	}

	public __goscriptAssign(source: bucket): void {
		const target = this._fields
		const values = source._fields
		target.MaxErrAge = values.MaxErrAge
		target.String = values.String
	}

	static __typeInfo = $.registerStructType(
		"trace.bucket",
		() => new bucket(),
		() => [],
		bucket,
		() => [/* @__PURE__ */ $.structField("MaxErrAge", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [0], 0, true), /* @__PURE__ */ $.structField("String", /* @__PURE__ */ $.basicType("string"), [1], 8, true)]
	)
}

export class eventFamily {
	public get mu(): sync.RWMutex {
		return this._fields.mu
	}

	public set mu(value: sync.RWMutex) {
		this._fields.mu = value
	}

	public get eventLogs(): eventLogs {
		return this._fields.eventLogs
	}

	public set eventLogs(value: eventLogs) {
		this._fields.eventLogs = value
	}

	public _fields: {
		mu: sync.RWMutex
		eventLogs: eventLogs
	}

	constructor(init?: Partial<{mu?: sync.RWMutex, eventLogs?: eventLogs}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.RWMutex()),
			eventLogs: init?.eventLogs ?? (null! as eventLogs)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): eventFamily {
		return new eventFamily(this, true)
	}

	public __goscriptAssign(source: eventFamily): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.eventLogs = values.eventLogs
	}

	public async Copy(now: time.Time, maxErrAge: time.Duration): globalThis.Promise<eventLogs> {
		const f: eventFamily | $.VarRef<eventFamily> | null = this;
		let els: eventLogs = null! as eventLogs
		using __defer = new $.DisposableStack()
		const f$: eventFamily = f == null ? $.pointerTarget<eventFamily>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<eventFamily>(f)
		await (f$ as eventFamily).mu.RLock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((f$ as eventFamily).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })
		els = ($.makeSlice<eventLog | $.VarRef<eventLog> | null>(0, $.sliceLen(((f$ as eventFamily).eventLogs as eventLogs))) as eventLogs)
		for (let __goscriptRangeTarget2 = (f$ as eventFamily).eventLogs, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let el = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as eventLog | $.VarRef<eventLog> | null)
			if (await (el !== null && (el as any).__isVarRef !== true && (el as any).__goValue === undefined ? ((el as any) as eventLog).hasRecentError(now, maxErrAge) : eventLog.prototype.hasRecentError.call(el, now, maxErrAge))) {
				void (el !== null && (el as any).__isVarRef !== true && (el as any).__goValue === undefined ? ((el as any) as eventLog).ref() : eventLog.prototype.ref.call(el))
				els = ($.appendOne((els as eventLogs), el, $.appendZeros.nil) as eventLogs)
			}
		}
		__defer.dispose()
		return els
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Count(now: time.Time, maxErrAge: time.Duration): globalThis.Promise<number> {
		const f: eventFamily | $.VarRef<eventFamily> | null = this;
		let n: number = 0
		using __defer = new $.DisposableStack()
		const f$: eventFamily = f == null ? $.pointerTarget<eventFamily>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<eventFamily>(f)
		await (f$ as eventFamily).mu.RLock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((f$ as eventFamily).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })
		for (let __goscriptRangeTarget3 = (f$ as eventFamily).eventLogs, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let el = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as eventLog | $.VarRef<eventLog> | null)
			if (await (el !== null && (el as any).__isVarRef !== true && (el as any).__goValue === undefined ? ((el as any) as eventLog).hasRecentError(now, maxErrAge) : eventLog.prototype.hasRecentError.call(el, now, maxErrAge))) {
				n++
			}
		}
		__defer.dispose()
		return n
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async add(el: eventLog | $.VarRef<eventLog> | null): globalThis.Promise<void> {
		let f: eventFamily | $.VarRef<eventFamily> | null = this;
		const f$: eventFamily = f == null ? $.pointerTarget<eventFamily>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<eventFamily>(f)
		await (f$ as eventFamily).mu.Lock();
		;(f$ as eventFamily).eventLogs = ($.appendOne(((f$ as eventFamily).eventLogs as eventLogs), el, $.appendZeros.nil) as eventLogs)
		void (f$ as eventFamily).mu.Unlock()
	}

	public async remove(el: eventLog | $.VarRef<eventLog> | null): globalThis.Promise<void> {
		let f: eventFamily | $.VarRef<eventFamily> | null = this;
		using __defer = new $.DisposableStack()
		const f$: eventFamily = f == null ? $.pointerTarget<eventFamily>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<eventFamily>(f)
		await (f$ as eventFamily).mu.Lock()
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Unlock())((f$ as eventFamily).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee5() })
		for (let __goscriptRangeTarget4 = (f$ as eventFamily).eventLogs, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
			let el0 = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as eventLog | $.VarRef<eventLog> | null)
			if ($.pointerEqual(el, el0)) {
				$.copy(($.goSlice((f$ as eventFamily).eventLogs, i, undefined) as eventLogs), ($.goSlice((f$ as eventFamily).eventLogs, i + 1, undefined) as eventLogs));
				;(f$ as eventFamily).eventLogs = ($.goSlice((f$ as eventFamily).eventLogs, undefined, $.sliceLen(((f$ as eventFamily).eventLogs as eventLogs)) - 1) as eventLogs)
				return
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"trace.eventFamily",
		() => new eventFamily(),
		() => [$.methodSignature("Copy", [["now", "time.Time"], ["maxErrAge", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [["els", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("trace.eventLog"), "trace.eventLogs")]], true), $.methodSignature("Count", [["now", "time.Time"], ["maxErrAge", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("add", [["el", /* @__PURE__ */ $.pointerType("trace.eventLog")]], [], true), $.methodSignature("remove", [["el", /* @__PURE__ */ $.pointerType("trace.eventLog")]], [], true)],
		eventFamily,
		() => [/* @__PURE__ */ $.structField("mu", "sync.RWMutex", [0], 0, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("eventLogs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("trace.eventLog"), "trace.eventLogs"), [1], 24, false, { pkgPath: "golang.org/x/net/trace" })]
	)
}

export class logEntry {
	public get When(): time.Time {
		return this._fields.When
	}

	public set When(value: time.Time) {
		this._fields.When = value
	}

	public get Elapsed(): time.Duration {
		return this._fields.Elapsed
	}

	public set Elapsed(value: time.Duration) {
		this._fields.Elapsed = value
	}

	public get NewDay(): boolean {
		return this._fields.NewDay
	}

	public set NewDay(value: boolean) {
		this._fields.NewDay = value
	}

	public get What(): string {
		return this._fields.What
	}

	public set What(value: string) {
		this._fields.What = value
	}

	public get IsErr(): boolean {
		return this._fields.IsErr
	}

	public set IsErr(value: boolean) {
		this._fields.IsErr = value
	}

	public _fields: {
		When: time.Time
		Elapsed: time.Duration
		NewDay: boolean
		What: string
		IsErr: boolean
	}

	constructor(init?: Partial<{When?: time.Time, Elapsed?: time.Duration, NewDay?: boolean, What?: string, IsErr?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			When: init?.When ? $.markAsStructValue($.cloneStructValue(init.When)) : $.markAsStructValue(new time.Time()),
			Elapsed: init?.Elapsed ?? (0n as time.Duration),
			NewDay: init?.NewDay ?? (false as boolean),
			What: init?.What ?? ("" as string),
			IsErr: init?.IsErr ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): logEntry {
		return new logEntry(this, true)
	}

	public __goscriptAssign(source: logEntry): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.When, values.When)
		target.Elapsed = values.Elapsed
		target.NewDay = values.NewDay
		target.What = values.What
		target.IsErr = values.IsErr
	}

	public WhenString(): string {
		const e = this;
		if (e.NewDay) {
			return $.markAsStructValue($.cloneStructValue(e.When)).Format("2006/01/02 15:04:05.000000")
		}
		return $.markAsStructValue($.cloneStructValue(e.When)).Format("15:04:05.000000")
	}

	static __typeInfo = $.registerStructType(
		"trace.logEntry",
		() => new logEntry(),
		() => [$.methodSignature("WhenString", [], [/* @__PURE__ */ $.basicType("string")])],
		logEntry,
		() => [/* @__PURE__ */ $.structField("When", "time.Time", [0], 0, true), /* @__PURE__ */ $.structField("Elapsed", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 24, true), /* @__PURE__ */ $.structField("NewDay", /* @__PURE__ */ $.basicType("bool"), [2], 32, true), /* @__PURE__ */ $.structField("What", /* @__PURE__ */ $.basicType("string"), [3], 40, true), /* @__PURE__ */ $.structField("IsErr", /* @__PURE__ */ $.basicType("bool"), [4], 56, true)]
	)
}

export class eventLog {
	// Family is the top-level grouping of event logs to which this belongs.
	public get Family(): string {
		return this._fields.Family
	}

	public set Family(value: string) {
		this._fields.Family = value
	}

	// Title is the title of this event log.
	public get Title(): string {
		return this._fields.Title
	}

	public set Title(value: string) {
		this._fields.Title = value
	}

	// Timing information.
	public get Start(): time.Time {
		return this._fields.Start
	}

	public set Start(value: time.Time) {
		this._fields.Start = value
	}

	// Call stack where this event log was created.
	public get stack(): $.Slice<number> {
		return this._fields.stack
	}

	public set stack(value: $.Slice<number>) {
		this._fields.stack = value
	}

	// Append-only sequence of events.
	//
	// TODO(sameer): change this to a ring buffer to avoid the array copy
	// when we hit maxEventsPerLog.
	public get mu(): sync.RWMutex {
		return this._fields.mu
	}

	public set mu(value: sync.RWMutex) {
		this._fields.mu = value
	}

	public get events(): $.Slice<logEntry> {
		return this._fields.events
	}

	public set events(value: $.Slice<logEntry>) {
		this._fields.events = value
	}

	public get LastErrorTime(): time.Time {
		return this._fields.LastErrorTime
	}

	public set LastErrorTime(value: time.Time) {
		this._fields.LastErrorTime = value
	}

	public get discarded(): number {
		return this._fields.discarded
	}

	public set discarded(value: number) {
		this._fields.discarded = value
	}

	public get refs(): number {
		return this._fields.refs
	}

	public set refs(value: number) {
		this._fields.refs = value
	}

	public _fields: {
		Family: string
		Title: string
		Start: time.Time
		stack: $.Slice<number>
		mu: sync.RWMutex
		events: $.Slice<logEntry>
		LastErrorTime: time.Time
		discarded: number
		refs: number
	}

	constructor(init?: Partial<{Family?: string, Title?: string, Start?: time.Time, stack?: $.Slice<number>, mu?: sync.RWMutex, events?: $.Slice<logEntry>, LastErrorTime?: time.Time, discarded?: number, refs?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Family: init?.Family ?? ("" as string),
			Title: init?.Title ?? ("" as string),
			Start: init?.Start ? $.markAsStructValue($.cloneStructValue(init.Start)) : $.markAsStructValue(new time.Time()),
			stack: init?.stack ?? (null! as $.Slice<number>),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.RWMutex()),
			events: init?.events ?? (null! as $.Slice<logEntry>),
			LastErrorTime: init?.LastErrorTime ? $.markAsStructValue($.cloneStructValue(init.LastErrorTime)) : $.markAsStructValue(new time.Time()),
			discarded: init?.discarded ?? (0 as number),
			refs: init?.refs ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): eventLog {
		return new eventLog(this, true)
	}

	public __goscriptAssign(source: eventLog): void {
		const target = this._fields
		const values = source._fields
		target.Family = values.Family
		target.Title = values.Title
		$.assignStruct(target.Start, values.Start)
		target.stack = values.stack
		$.assignStruct(target.mu, values.mu)
		target.events = values.events
		$.assignStruct(target.LastErrorTime, values.LastErrorTime)
		target.discarded = values.discarded
		target.refs = values.refs
	}

	public async ElapsedTime(): globalThis.Promise<string> {
		const el: eventLog | $.VarRef<eventLog> | null = this;
		let elapsed = time.Since($.markAsStructValue($.cloneStructValue($.pointerValue<eventLog>(el).Start)))
		return fmt.Sprintf("%.6f", $.basicInterfaceValue(time.Duration_Seconds(elapsed), "float64"))
	}

	public async Errorf(format: string, a: $.Slice<any>): globalThis.Promise<void> {
		const el: eventLog | $.VarRef<eventLog> | null = this;
		await (el !== null && (el as any).__isVarRef !== true && (el as any).__goValue === undefined ? ((el as any) as eventLog).printf(true, format, a) : eventLog.prototype.printf.call(el, true, format, a))
	}

	public async Events(): globalThis.Promise<$.Slice<logEntry>> {
		const el: eventLog | $.VarRef<eventLog> | null = this;
		using __defer = new $.DisposableStack()
		const el$: eventLog = el == null ? $.pointerTarget<eventLog>(el) : (el as any).__isVarRef === true ? (el as any).value : (el as any).__goValue === undefined ? (el as any) : $.pointerTarget<eventLog>(el)
		await (el$ as eventLog).mu.RLock()
		const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((el$ as eventLog).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee6() })
		return (el$ as eventLog).events
	}

	public async Finish(): globalThis.Promise<void> {
		const el: eventLog | $.VarRef<eventLog> | null = this;
		await eventFamily.prototype.remove.call(await getEventFamily($.pointerValue<eventLog>(el).Family), el)
		await (el !== null && (el as any).__isVarRef !== true && (el as any).__goValue === undefined ? ((el as any) as eventLog).unref() : eventLog.prototype.unref.call(el))
	}

	public async Printf(format: string, a: $.Slice<any>): globalThis.Promise<void> {
		const el: eventLog | $.VarRef<eventLog> | null = this;
		await (el !== null && (el as any).__isVarRef !== true && (el as any).__goValue === undefined ? ((el as any) as eventLog).printf(false, format, a) : eventLog.prototype.printf.call(el, false, format, a))
	}

	public async Stack(): globalThis.Promise<string> {
		const el: eventLog | $.VarRef<eventLog> | null = this;
		let buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null = new bytes.Buffer()
		let tw: tabwriter.Writer | $.VarRef<tabwriter.Writer> | null = tabwriter.NewWriter($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")), 1, 8, 1, 9, 0)
		await printStackRecord($.interfaceValue<io.Writer | null>(tw, "*tabwriter.Writer", /* @__PURE__ */ $.pointerType("tabwriter.Writer")), $.pointerValue<eventLog>(el).stack)
		await (tw !== null && (tw as any).__isVarRef !== true && (tw as any).__goValue === undefined ? ((tw as any) as tabwriter.Writer).Flush() : tabwriter.Writer.prototype.Flush.call(tw))
		return bytes.Buffer.prototype.String.call($.pointerValue<bytes.Buffer>(buf))
	}

	public When(): string {
		const el: eventLog | $.VarRef<eventLog> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<eventLog>(el).Start)).Format("2006/01/02 15:04:05.000000")
	}

	public delta(t: time.Time): [time.Duration, boolean] {
		const el: eventLog | $.VarRef<eventLog> | null = this;
		const el$: eventLog = el == null ? $.pointerTarget<eventLog>(el) : (el as any).__isVarRef === true ? (el as any).value : (el as any).__goValue === undefined ? (el as any) : $.pointerTarget<eventLog>(el)
		if ($.sliceLen((el$ as eventLog).events) == 0) {
			return [$.markAsStructValue($.cloneStructValue(t)).Sub($.markAsStructValue($.cloneStructValue((el$ as eventLog).Start))), false]
		}
		let prev = $.markAsStructValue($.cloneStructValue($.arrayIndex((el$ as eventLog).events!, $.sliceLen((el$ as eventLog).events) - 1).When))
		return [$.markAsStructValue($.cloneStructValue(t)).Sub($.markAsStructValue($.cloneStructValue(prev))), $.markAsStructValue($.cloneStructValue(prev)).Day() != $.markAsStructValue($.cloneStructValue(t)).Day()]
	}

	public async hasRecentError(now: time.Time, maxErrAge: time.Duration): globalThis.Promise<boolean> {
		const el: eventLog | $.VarRef<eventLog> | null = this;
		using __defer = new $.DisposableStack()
		const el$: eventLog = el == null ? $.pointerTarget<eventLog>(el) : (el as any).__isVarRef === true ? (el as any).value : (el as any).__goValue === undefined ? (el as any) : $.pointerTarget<eventLog>(el)
		if (maxErrAge == 0n) {
			return true
		}
		await (el$ as eventLog).mu.RLock()
		const __goscriptDeferCallee7 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((el$ as eventLog).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee7() })
		return $.markAsStructValue($.cloneStructValue(now)).Sub($.markAsStructValue($.cloneStructValue((el$ as eventLog).LastErrorTime))) < maxErrAge
	}

	public async printf(isErr: boolean, format: string, a: $.Slice<any>): globalThis.Promise<void> {
		let el: eventLog | $.VarRef<eventLog> | null = this;
		const el$: eventLog = el == null ? $.pointerTarget<eventLog>(el) : (el as any).__isVarRef === true ? (el as any).value : (el as any).__goValue === undefined ? (el as any) : $.pointerTarget<eventLog>(el)
		let e = (await (async () => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue(time.Now())); const __goscriptLiteralField1 = await fmt.Sprintf(format, ...(a ?? [])); return new logEntry({When: __goscriptLiteralField0, IsErr: isErr, What: __goscriptLiteralField1}, true) })())
		await (el$ as eventLog).mu.Lock()
		let __goscriptTuple2: any = (el !== null && (el as any).__isVarRef !== true && (el as any).__goValue === undefined ? ((el as any) as eventLog).delta(e.When) : eventLog.prototype.delta.call(el, e.When))
		e.Elapsed = __goscriptTuple2[0]
		e.NewDay = __goscriptTuple2[1]
		if ($.sliceLen((el$ as eventLog).events) < 100) {
			;(el$ as eventLog).events = $.appendOne((el$ as eventLog).events, (e).clone())
		} else {
			// Discard the oldest event.
			if ((el$ as eventLog).discarded == 0) {
				// el.discarded starts at two to count for the event it
				// is replacing, plus the next one that we are about to
				// drop.
				;(el$ as eventLog).discarded = 2
			} else {
				;(el$ as eventLog).discarded++
			}
			// TODO(sameer): if this causes allocations on a critical path,
			// change eventLog.What to be a fmt.Stringer, as in trace.go.
			$.arrayIndex((el$ as eventLog).events!, 0).What = await fmt.Sprintf("(%d events discarded)", $.basicInterfaceValue((el$ as eventLog).discarded, "int"))
			// The timestamp of the discarded meta-event should be
			// the time of the last event it is representing.
			$.assignStruct($.arrayIndex((el$ as eventLog).events!, 0).When, $.arrayIndex((el$ as eventLog).events!, 1).When)
			$.copy($.goSlice((el$ as eventLog).events, 1, undefined), $.goSlice((el$ as eventLog).events, 2, undefined))
			$.assignStruct($.sliceElems((el$ as eventLog).events!)[$.sliceSlot((el$ as eventLog).events!, 100 - 1)], e)
		}
		if (e.IsErr) {
			$.assignStruct((el$ as eventLog).LastErrorTime, e.When)
		}
		void (el$ as eventLog).mu.Unlock()
	}

	public ref(): void {
		const el: eventLog | $.VarRef<eventLog> | null = this;
		atomic.AddInt32($.fieldRef($.pointerValue<eventLog>(el)._fields, "refs"), 1)
	}

	public reset(): void {
		let el: eventLog | $.VarRef<eventLog> | null = this;
		const el$: eventLog = el == null ? $.pointerTarget<eventLog>(el) : (el as any).__isVarRef === true ? (el as any).value : (el as any).__goValue === undefined ? (el as any) : $.pointerTarget<eventLog>(el);
		// Clear all but the mutex. Mutexes may not be copied, even when unlocked.
		;(el$ as eventLog).Family = "";
		;(el$ as eventLog).Title = ""
		$.assignStruct((el$ as eventLog).Start, $.markAsStructValue(new time.Time()));
		;(el$ as eventLog).stack = null;
		;(el$ as eventLog).events = null
		$.assignStruct((el$ as eventLog).LastErrorTime, $.markAsStructValue(new time.Time()));
		;(el$ as eventLog).discarded = 0;
		;(el$ as eventLog).refs = 0
	}

	public async unref(): globalThis.Promise<void> {
		const el: eventLog | $.VarRef<eventLog> | null = this;
		if (atomic.AddInt32($.fieldRef($.pointerValue<eventLog>(el)._fields, "refs"), -1) == 0) {
			await freeEventLog(el)
		}
	}

	static __typeInfo = $.registerStructType(
		"trace.eventLog",
		() => new eventLog(),
		() => [$.methodSignature("ElapsedTime", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Events", [], [/* @__PURE__ */ $.sliceType("trace.logEntry")], true), $.methodSignature("Finish", [], [], true), $.methodSignature("Printf", [["format", /* @__PURE__ */ $.basicType("string")], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Stack", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("When", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("delta", [["t", "time.Time"]], [/* @__PURE__ */ $.basicType("int64", "time.Duration"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("hasRecentError", [["now", "time.Time"], ["maxErrAge", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("printf", [["isErr", /* @__PURE__ */ $.basicType("bool")], ["format", /* @__PURE__ */ $.basicType("string")], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("ref", [], [], true), $.methodSignature("reset", [], [], true), $.methodSignature("unref", [], [], true)],
		eventLog,
		() => [/* @__PURE__ */ $.structField("Family", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Title", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Start", "time.Time", [2], 32, true), /* @__PURE__ */ $.structField("stack", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr")), [3], 56, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("mu", "sync.RWMutex", [4], 80, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("events", /* @__PURE__ */ $.sliceType("trace.logEntry"), [5], 104, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("LastErrorTime", "time.Time", [6], 128, true), /* @__PURE__ */ $.structField("discarded", /* @__PURE__ */ $.basicType("int"), [7], 152, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("refs", /* @__PURE__ */ $.basicType("int32"), [8], 160, false, { pkgPath: "golang.org/x/net/trace" })]
	)
}

export const maxEventsPerLog: number = 100

export const eventsHTML: string = "\n<html>\n\t<head>\n\t\t<title>events</title>\n\t</head>\n\t<style type=\"text/css\">\n\t\tbody {\n\t\t\tfont-family: sans-serif;\n\t\t}\n\t\ttable#req-status td.family {\n\t\t\tpadding-right: 2em;\n\t\t}\n\t\ttable#req-status td.active {\n\t\t\tpadding-right: 1em;\n\t\t}\n\t\ttable#req-status td.empty {\n\t\t\tcolor: #aaa;\n\t\t}\n\t\ttable#reqs {\n\t\t\tmargin-top: 1em;\n\t\t}\n\t\ttable#reqs tr.first {\n\t\t\t{{if $.Expanded}}font-weight: bold;{{end}}\n\t\t}\n\t\ttable#reqs td {\n\t\t\tfont-family: monospace;\n\t\t}\n\t\ttable#reqs td.when {\n\t\t\ttext-align: right;\n\t\t\twhite-space: nowrap;\n\t\t}\n\t\ttable#reqs td.elapsed {\n\t\t\tpadding: 0 0.5em;\n\t\t\ttext-align: right;\n\t\t\twhite-space: pre;\n\t\t\twidth: 10em;\n\t\t}\n\t\taddress {\n\t\t\tfont-size: smaller;\n\t\t\tmargin-top: 5em;\n\t\t}\n\t</style>\n\t<body>\n\n<h1>/debug/events</h1>\n\n<table id=\"req-status\">\n\t{{range $i, $fam := .Families}}\n\t<tr>\n\t\t<td class=\"family\">{{$fam}}</td>\n\n\t        {{range $j, $bucket := $.Buckets}}\n\t        {{$n := index $.Counts $i $j}}\n\t\t<td class=\"{{if not $bucket.MaxErrAge}}active{{end}}{{if not $n}}empty{{end}}\">\n\t                {{if $n}}<a href=\"?fam={{$fam}}&b={{$j}}{{if $.Expanded}}&exp=1{{end}}\">{{end}}\n\t\t        [{{$n}} {{$bucket.String}}]\n\t\t\t{{if $n}}</a>{{end}}\n\t\t</td>\n                {{end}}\n\n\t</tr>{{end}}\n</table>\n\n{{if $.EventLogs}}\n<hr />\n<h3>Family: {{$.Family}}</h3>\n\n{{if $.Expanded}}<a href=\"?fam={{$.Family}}&b={{$.Bucket}}\">{{end}}\n[Summary]{{if $.Expanded}}</a>{{end}}\n\n{{if not $.Expanded}}<a href=\"?fam={{$.Family}}&b={{$.Bucket}}&exp=1\">{{end}}\n[Expanded]{{if not $.Expanded}}</a>{{end}}\n\n<table id=\"reqs\">\n\t<tr><th>When</th><th>Elapsed</th></tr>\n\t{{range $el := $.EventLogs}}\n\t<tr class=\"first\">\n\t\t<td class=\"when\">{{$el.When}}</td>\n\t\t<td class=\"elapsed\">{{$el.ElapsedTime}}</td>\n\t\t<td>{{$el.Title}}\n\t</tr>\n\t{{if $.Expanded}}\n\t<tr>\n\t\t<td class=\"when\"></td>\n\t\t<td class=\"elapsed\"></td>\n\t\t<td><pre>{{$el.Stack|trimSpace}}</pre></td>\n\t</tr>\n\t{{range $el.Events}}\n\t<tr>\n\t\t<td class=\"when\">{{.WhenString}}</td>\n\t\t<td class=\"elapsed\">{{elapsed .Elapsed}}</td>\n\t\t<td>.{{if .IsErr}}E{{else}}.{{end}}. {{.What}}</td>\n\t</tr>\n\t{{end}}\n\t{{end}}\n\t{{end}}\n</table>\n{{end}}\n\t</body>\n</html>\n"

export let buckets: $.Slice<bucket> = $.arrayToSlice<bucket>([new bucket({MaxErrAge: 0n, String: "total"}, true), new bucket({MaxErrAge: 10000000000n, String: "errs<10s"}, true), new bucket({MaxErrAge: 60000000000n, String: "errs<1m"}, true), new bucket({MaxErrAge: 600000000000n, String: "errs<10m"}, true), new bucket({MaxErrAge: 3600000000000n, String: "errs<1h"}, true), new bucket({MaxErrAge: 36000000000000n, String: "errs<10h"}, true), new bucket({MaxErrAge: 86400000000000000n, String: "errors"}, true)])

export function __goscript_set_buckets(__goscriptValue: $.Slice<bucket>): void {
	buckets = __goscriptValue
}

export async function RenderEvents(w: http.ResponseWriter | null, req: http.Request | $.VarRef<http.Request> | null, sensitive: boolean): globalThis.Promise<void> {
	await using __defer = new $.AsyncDisposableStack()
	let now = $.markAsStructValue($.cloneStructValue(time.Now()))
	let __goscriptShadow0 = $.varRef($.anonymousStructValue({Families: (null as $.Slice<string>), Buckets: buckets, Counts: (null as $.Slice<$.Slice<number>>), Family: ("" as string), Bucket: (0 as number), EventLogs: (null as eventLogs), Expanded: (false as boolean)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Families", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, true), /* @__PURE__ */ $.structField("Buckets", /* @__PURE__ */ $.sliceType("trace.bucket"), [1], 24, true), /* @__PURE__ */ $.structField("Counts", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))), [2], 48, true), /* @__PURE__ */ $.structField("Family", /* @__PURE__ */ $.basicType("string"), [3], 72, true), /* @__PURE__ */ $.structField("Bucket", /* @__PURE__ */ $.basicType("int"), [4], 88, true), /* @__PURE__ */ $.structField("EventLogs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("trace.eventLog"), "trace.eventLogs"), [5], 96, true), /* @__PURE__ */ $.structField("Expanded", /* @__PURE__ */ $.basicType("bool"), [6], 120, true)] }))

	$.pointerValue<{"Families": $.Slice<string>, "Buckets": $.Slice<bucket>, "Counts": $.Slice<$.Slice<number>>, "Family": string, "Bucket": number, "EventLogs": eventLogs, "Expanded": boolean}>(__goscriptShadow0).Families = $.makeSlice<string>(0, $.len(families), "string")
	await famMu.value.RLock()
	for (const [name, __rangeValue] of families?.entries() ?? []) {
		$.pointerValue<{"Families": $.Slice<string>, "Buckets": $.Slice<bucket>, "Counts": $.Slice<$.Slice<number>>, "Family": string, "Bucket": number, "EventLogs": eventLogs, "Expanded": boolean}>(__goscriptShadow0).Families = $.appendOne($.pointerValue<{"Families": $.Slice<string>, "Buckets": $.Slice<bucket>, "Counts": $.Slice<$.Slice<number>>, "Family": string, "Bucket": number, "EventLogs": eventLogs, "Expanded": boolean}>(__goscriptShadow0).Families, name)
	}
	famMu.value.RUnlock()
	sort.Strings($.pointerValue<{"Families": $.Slice<string>, "Buckets": $.Slice<bucket>, "Counts": $.Slice<$.Slice<number>>, "Family": string, "Bucket": number, "EventLogs": eventLogs, "Expanded": boolean}>(__goscriptShadow0).Families)

	// Count the number of eventLogs in each family for each error age.
	$.pointerValue<{"Families": $.Slice<string>, "Buckets": $.Slice<bucket>, "Counts": $.Slice<$.Slice<number>>, "Family": string, "Bucket": number, "EventLogs": eventLogs, "Expanded": boolean}>(__goscriptShadow0).Counts = $.makeSlice<$.Slice<number>>($.sliceLen($.pointerValue<{"Families": $.Slice<string>, "Buckets": $.Slice<bucket>, "Counts": $.Slice<$.Slice<number>>, "Family": string, "Bucket": number, "EventLogs": eventLogs, "Expanded": boolean}>(__goscriptShadow0).Families))
	for (let __goscriptRangeTarget1 = $.pointerValue<{"Families": $.Slice<string>, "Buckets": $.Slice<bucket>, "Counts": $.Slice<$.Slice<number>>, "Family": string, "Bucket": number, "EventLogs": eventLogs, "Expanded": boolean}>(__goscriptShadow0).Families, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let name = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as string)
		// TODO(sameer): move this loop under the family lock.
		let f: eventFamily | $.VarRef<eventFamily> | null = await getEventFamily(name)
		$.indexRef($.pointerValue<{"Families": $.Slice<string>, "Buckets": $.Slice<bucket>, "Counts": $.Slice<$.Slice<number>>, "Family": string, "Bucket": number, "EventLogs": eventLogs, "Expanded": boolean}>(__goscriptShadow0).Counts!, i).value = $.makeSlice<number>($.sliceLen($.pointerValue<{"Families": $.Slice<string>, "Buckets": $.Slice<bucket>, "Counts": $.Slice<$.Slice<number>>, "Family": string, "Bucket": number, "EventLogs": eventLogs, "Expanded": boolean}>(__goscriptShadow0).Buckets), undefined, "number")
		for (let __goscriptRangeTarget0 = $.pointerValue<{"Families": $.Slice<string>, "Buckets": $.Slice<bucket>, "Counts": $.Slice<$.Slice<number>>, "Family": string, "Bucket": number, "EventLogs": eventLogs, "Expanded": boolean}>(__goscriptShadow0).Buckets, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget0), j = 0; j < __goscriptRangeWindow1.length; j++) {
			let b = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + j] as bucket)).clone()
			$.indexRef($.arrayIndex($.pointerValue<{"Families": $.Slice<string>, "Buckets": $.Slice<bucket>, "Counts": $.Slice<$.Slice<number>>, "Family": string, "Bucket": number, "EventLogs": eventLogs, "Expanded": boolean}>(__goscriptShadow0).Counts!, i)!, j).value = await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as eventFamily).Count(now, b.MaxErrAge) : eventFamily.prototype.Count.call(f, now, b.MaxErrAge))
		}
	}

	if (req != null) {
		let ok: boolean = false
		let __goscriptTuple0: any = parseEventsArgs(req)
		$.pointerValue<{"Families": $.Slice<string>, "Buckets": $.Slice<bucket>, "Counts": $.Slice<$.Slice<number>>, "Family": string, "Bucket": number, "EventLogs": eventLogs, "Expanded": boolean}>(__goscriptShadow0).Family = __goscriptTuple0[0]
		$.pointerValue<{"Families": $.Slice<string>, "Buckets": $.Slice<bucket>, "Counts": $.Slice<$.Slice<number>>, "Family": string, "Bucket": number, "EventLogs": eventLogs, "Expanded": boolean}>(__goscriptShadow0).Bucket = __goscriptTuple0[1]
		ok = __goscriptTuple0[2]
		if (!ok) {
		} else {
			$.pointerValue<{"Families": $.Slice<string>, "Buckets": $.Slice<bucket>, "Counts": $.Slice<$.Slice<number>>, "Family": string, "Bucket": number, "EventLogs": eventLogs, "Expanded": boolean}>(__goscriptShadow0).EventLogs = (await eventFamily.prototype.Copy.call(await getEventFamily($.pointerValue<{"Families": $.Slice<string>, "Buckets": $.Slice<bucket>, "Counts": $.Slice<$.Slice<number>>, "Family": string, "Bucket": number, "EventLogs": eventLogs, "Expanded": boolean}>(__goscriptShadow0).Family), now, $.arrayIndex(buckets!, $.pointerValue<{"Families": $.Slice<string>, "Buckets": $.Slice<bucket>, "Counts": $.Slice<$.Slice<number>>, "Family": string, "Bucket": number, "EventLogs": eventLogs, "Expanded": boolean}>(__goscriptShadow0).Bucket).MaxErrAge) as eventLogs)
		}
		if ($.pointerValue<{"Families": $.Slice<string>, "Buckets": $.Slice<bucket>, "Counts": $.Slice<$.Slice<number>>, "Family": string, "Bucket": number, "EventLogs": eventLogs, "Expanded": boolean}>(__goscriptShadow0).EventLogs != null) {
			const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => eventLogs_Free(__receiver))($.pointerValue<{"Families": $.Slice<string>, "Buckets": $.Slice<bucket>, "Counts": $.Slice<$.Slice<number>>, "Family": string, "Bucket": number, "EventLogs": eventLogs, "Expanded": boolean}>(__goscriptShadow0).EventLogs), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "golang.org/x/net/trace.eventLogs.Free-fm")
			__defer.defer(async () => { await __goscriptDeferCallee0() })
			await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>($.pointerValue<{"Families": $.Slice<string>, "Buckets": $.Slice<bucket>, "Counts": $.Slice<$.Slice<number>>, "Family": string, "Bucket": number, "EventLogs": eventLogs, "Expanded": boolean}>(__goscriptShadow0).EventLogs, "trace.eventLogs", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
		}
		{
			let [exp, err] = strconv.ParseBool(http.Request.prototype.FormValue.call($.pointerValue<http.Request>(req), "exp"))
			if (err == null) {
				$.pointerValue<{"Families": $.Slice<string>, "Buckets": $.Slice<bucket>, "Counts": $.Slice<$.Slice<number>>, "Family": string, "Bucket": number, "EventLogs": eventLogs, "Expanded": boolean}>(__goscriptShadow0).Expanded = exp
			}
		}
	}

	await famMu.value.RLock()
	const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(famMu.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
	__defer.defer(() => { __goscriptDeferCallee1() })
	{
		let err = await template.Template.prototype.Execute.call(await eventsTmpl(), (w as io.Writer | null), $.interfaceValue(__goscriptShadow0, "*struct{Families []string; Buckets []trace.bucket; Counts [][]int; Family string; Bucket int; EventLogs trace.eventLogs; Expanded bool}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Families", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, true), /* @__PURE__ */ $.structField("Buckets", /* @__PURE__ */ $.sliceType("trace.bucket"), [1], 24, true), /* @__PURE__ */ $.structField("Counts", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))), [2], 48, true), /* @__PURE__ */ $.structField("Family", /* @__PURE__ */ $.basicType("string"), [3], 72, true), /* @__PURE__ */ $.structField("Bucket", /* @__PURE__ */ $.basicType("int"), [4], 88, true), /* @__PURE__ */ $.structField("EventLogs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("trace.eventLog"), "trace.eventLogs"), [5], 96, true), /* @__PURE__ */ $.structField("Expanded", /* @__PURE__ */ $.basicType("bool"), [6], 120, true)] })))
		if (err != null) {
			await log.Printf("net/trace: Failed executing template: %v", $.arrayToSlice<any>([(err as any)]))
		}
	}
}

export function parseEventsArgs(req: http.Request | $.VarRef<http.Request> | null): [string, number, boolean] {
	let fam: string = ""
	let b: number = 0
	let ok: boolean = false
	fam = http.Request.prototype.FormValue.call($.pointerValue<http.Request>(req), "fam")
	let bStr = http.Request.prototype.FormValue.call($.pointerValue<http.Request>(req), "b")
	if (($.stringEqual(fam, "")) || ($.stringEqual(bStr, ""))) {
		return ["", 0, false]
	}
	let __goscriptTuple1: any = strconv.Atoi(bStr)
	b = __goscriptTuple1[0]
	let err = __goscriptTuple1[1]
	if (((err != null) || (b < 0)) || (b >= $.sliceLen(buckets))) {
		return ["", 0, false]
	}
	return [fam, b, true]
}

export async function NewEventLog(family: string, title: string): globalThis.Promise<EventLog | null> {
	let el: eventLog | $.VarRef<eventLog> | null = await newEventLog()
	let el$: eventLog = el == null ? $.pointerTarget<eventLog>(el) : (el as any).__isVarRef === true ? (el as any).value : (el as any).__goValue === undefined ? (el as any) : $.pointerTarget<eventLog>(el)
	void (el !== null && (el as any).__isVarRef !== true && (el as any).__goValue === undefined ? ((el as any) as eventLog).ref() : eventLog.prototype.ref.call(el))
	let __goscriptAssign0_0: string = family
	let __goscriptAssign0_1: string = title;
	;(el$ as eventLog).Family = __goscriptAssign0_0;
	;(el$ as eventLog).Title = __goscriptAssign0_1
	$.assignStruct((el$ as eventLog).Start, time.Now());
	;(el$ as eventLog).events = $.makeSlice<logEntry>(0, 100, undefined, () => new logEntry(undefined, true));
	;(el$ as eventLog).stack = $.makeSlice<number>(32, undefined, "number")
	let n = runtime.Callers(2, (el$ as eventLog).stack);
	;(el$ as eventLog).stack = $.goSlice((el$ as eventLog).stack, undefined, n)

	await eventFamily.prototype.add.call(await getEventFamily(family), el)
	return $.interfaceValue<EventLog | null>(el, "*trace.eventLog", /* @__PURE__ */ $.pointerType("trace.eventLog"))
}

export let famMu: $.VarRef<sync.RWMutex> = $.varRef($.markAsStructValue(new sync.RWMutex()))

export function __goscript_set_famMu(__goscriptValue: sync.RWMutex): void {
	$.assignStruct(famMu.value, __goscriptValue)
}

export let families: globalThis.Map<string, eventFamily | $.VarRef<eventFamily> | null> | null = $.makeMap<string, eventFamily | $.VarRef<eventFamily> | null>()

export function __goscript_set_families(__goscriptValue: globalThis.Map<string, eventFamily | $.VarRef<eventFamily> | null> | null): void {
	families = __goscriptValue
}

export async function getEventFamily(fam: string): globalThis.Promise<eventFamily | $.VarRef<eventFamily> | null> {
	using __defer = new $.DisposableStack()
	await famMu.value.Lock()
	const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())(famMu.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee2() })
	let f: eventFamily | $.VarRef<eventFamily> | null = $.mapGet<string, eventFamily | $.VarRef<eventFamily> | null, eventFamily | $.VarRef<eventFamily> | null>(families, fam, null)[0]
	if (f == null) {
		f = new eventFamily()
		$.mapSet(families, fam, f)
	}
	return f
}

export async function eventLogs_Free(els: eventLogs): globalThis.Promise<void> {
	for (let __goscriptRangeTarget5 = els, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		let el = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as eventLog | $.VarRef<eventLog> | null)
		await (el !== null && (el as any).__isVarRef !== true && (el as any).__goValue === undefined ? ((el as any) as eventLog).unref() : eventLog.prototype.unref.call(el))
	}
}

export function eventLogs_Len(els: eventLogs): number {
	return $.sliceLen((els as eventLogs))
}

export function eventLogs_Less(els: eventLogs, i: number, j: number): boolean {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<eventLog>($.arrayIndex(els!, i)).Start)).After($.markAsStructValue($.cloneStructValue($.pointerValue<eventLog>($.arrayIndex(els!, j)).Start)))
}

export function eventLogs_Swap(els: eventLogs, i: number, j: number): void {
	let __goscriptAssign1_0: eventLog | $.VarRef<eventLog> | null = $.arrayIndex(els!, j)
	let __goscriptAssign1_1: eventLog | $.VarRef<eventLog> | null = $.arrayIndex(els!, i)
	$.sliceElems(els!)[$.sliceSlot(els!, i)] = __goscriptAssign1_0
	$.sliceElems(els!)[$.sliceSlot(els!, j)] = __goscriptAssign1_1
}

export async function printStackRecord(w: io.Writer | null, stk: $.Slice<number>): globalThis.Promise<void> {
	for (let __goscriptRangeTarget6 = stk, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
		let pc = $.uint((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as number), 64)
		let f: runtime.Func | $.VarRef<runtime.Func> | null = runtime.FuncForPC(pc)
		if (f == null) {
			continue
		}
		let [file, line] = runtime.Func.prototype.FileLine.call($.pointerValue<runtime.Func>(f), pc)
		let name = runtime.Func.prototype.Name.call($.pointerValueOrNil(f))
		// Hide runtime.goexit and any runtime functions at the beginning.
		if (strings.HasPrefix(name, "runtime.")) {
			continue
		}
		await fmt.Fprintf($.pointerValueOrNil(w)!, "#   %s\t%s:%d\n", name, file, $.basicInterfaceValue(line, "int"))
	}
}

export let freeEventLogs: $.Channel<eventLog | $.VarRef<eventLog> | null> | null = $.makeChannel<eventLog | $.VarRef<eventLog> | null>(1000, null! as eventLog | $.VarRef<eventLog> | null, "both")

export function __goscript_set_freeEventLogs(__goscriptValue: $.Channel<eventLog | $.VarRef<eventLog> | null> | null): void {
	freeEventLogs = __goscriptValue
}

export async function newEventLog(): globalThis.Promise<eventLog | $.VarRef<eventLog> | null> {
	const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, eventLog | $.VarRef<eventLog> | null>([
		{
			id: 0,
			isSend: false,
			channel: freeEventLogs,
			onSelected: async (__goscriptSelect0Result) => {
				let el = __goscriptSelect0Result.value
				return el
			}
		},
		{
			id: -1,
			isSend: false,
			channel: null,
			onSelected: async (__goscriptSelect0Result) => {
				return new eventLog()
			}
		}
	], true)
	if (__goscriptSelect0HasReturn) {
		return __goscriptSelect0Value
	}
	throw new globalThis.Error("unreachable select")
	throw new globalThis.Error("goscript: unreachable return")
}

export async function freeEventLog(el: eventLog | $.VarRef<eventLog> | null): globalThis.Promise<void> {
	void (el !== null && (el as any).__isVarRef !== true && (el as any).__goValue === undefined ? ((el as any) as eventLog).reset() : eventLog.prototype.reset.call(el))
	const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, void>([
		{
			id: 0,
			isSend: true,
			channel: freeEventLogs,
			value: el,
		},
		{
			id: -1,
			isSend: false,
			channel: null,
		}
	], true)
	if (__goscriptSelect1HasReturn) {
		return __goscriptSelect1Value
	}
}

export let eventsTmplCache: template.Template | $.VarRef<template.Template> | null = null! as template.Template | $.VarRef<template.Template> | null

export function __goscript_set_eventsTmplCache(__goscriptValue: template.Template | $.VarRef<template.Template> | null): void {
	eventsTmplCache = __goscriptValue
}

export let eventsTmplOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_eventsTmplOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(eventsTmplOnce.value, __goscriptValue)
}

export async function eventsTmpl(): globalThis.Promise<template.Template | $.VarRef<template.Template> | null> {
	await eventsTmplOnce.value.Do($.functionValue(async (): globalThis.Promise<void> => {
		eventsTmplCache = template.Must(...((await template.Template.prototype.Parse.call(await template.Template.prototype.Funcs.call(template.New("events"), $.makeMap<string, any>([["elapsed", $.interfaceValue($.goFunc(__goscript_trace.elapsed, "golang.org/x/net/trace.elapsed"), "func(d time.Duration) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int64", "time.Duration")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo))], ["trimSpace", $.interfaceValue($.goFunc(strings.TrimSpace, "strings.TrimSpace"), "func(s string) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo))]])), "\n<html>\n\t<head>\n\t\t<title>events</title>\n\t</head>\n\t<style type=\"text/css\">\n\t\tbody {\n\t\t\tfont-family: sans-serif;\n\t\t}\n\t\ttable#req-status td.family {\n\t\t\tpadding-right: 2em;\n\t\t}\n\t\ttable#req-status td.active {\n\t\t\tpadding-right: 1em;\n\t\t}\n\t\ttable#req-status td.empty {\n\t\t\tcolor: #aaa;\n\t\t}\n\t\ttable#reqs {\n\t\t\tmargin-top: 1em;\n\t\t}\n\t\ttable#reqs tr.first {\n\t\t\t{{if $.Expanded}}font-weight: bold;{{end}}\n\t\t}\n\t\ttable#reqs td {\n\t\t\tfont-family: monospace;\n\t\t}\n\t\ttable#reqs td.when {\n\t\t\ttext-align: right;\n\t\t\twhite-space: nowrap;\n\t\t}\n\t\ttable#reqs td.elapsed {\n\t\t\tpadding: 0 0.5em;\n\t\t\ttext-align: right;\n\t\t\twhite-space: pre;\n\t\t\twidth: 10em;\n\t\t}\n\t\taddress {\n\t\t\tfont-size: smaller;\n\t\t\tmargin-top: 5em;\n\t\t}\n\t</style>\n\t<body>\n\n<h1>/debug/events</h1>\n\n<table id=\"req-status\">\n\t{{range $i, $fam := .Families}}\n\t<tr>\n\t\t<td class=\"family\">{{$fam}}</td>\n\n\t        {{range $j, $bucket := $.Buckets}}\n\t        {{$n := index $.Counts $i $j}}\n\t\t<td class=\"{{if not $bucket.MaxErrAge}}active{{end}}{{if not $n}}empty{{end}}\">\n\t                {{if $n}}<a href=\"?fam={{$fam}}&b={{$j}}{{if $.Expanded}}&exp=1{{end}}\">{{end}}\n\t\t        [{{$n}} {{$bucket.String}}]\n\t\t\t{{if $n}}</a>{{end}}\n\t\t</td>\n                {{end}}\n\n\t</tr>{{end}}\n</table>\n\n{{if $.EventLogs}}\n<hr />\n<h3>Family: {{$.Family}}</h3>\n\n{{if $.Expanded}}<a href=\"?fam={{$.Family}}&b={{$.Bucket}}\">{{end}}\n[Summary]{{if $.Expanded}}</a>{{end}}\n\n{{if not $.Expanded}}<a href=\"?fam={{$.Family}}&b={{$.Bucket}}&exp=1\">{{end}}\n[Expanded]{{if not $.Expanded}}</a>{{end}}\n\n<table id=\"reqs\">\n\t<tr><th>When</th><th>Elapsed</th></tr>\n\t{{range $el := $.EventLogs}}\n\t<tr class=\"first\">\n\t\t<td class=\"when\">{{$el.When}}</td>\n\t\t<td class=\"elapsed\">{{$el.ElapsedTime}}</td>\n\t\t<td>{{$el.Title}}\n\t</tr>\n\t{{if $.Expanded}}\n\t<tr>\n\t\t<td class=\"when\"></td>\n\t\t<td class=\"elapsed\"></td>\n\t\t<td><pre>{{$el.Stack|trimSpace}}</pre></td>\n\t</tr>\n\t{{range $el.Events}}\n\t<tr>\n\t\t<td class=\"when\">{{.WhenString}}</td>\n\t\t<td class=\"elapsed\">{{elapsed .Elapsed}}</td>\n\t\t<td>.{{if .IsErr}}E{{else}}.{{end}}. {{.What}}</td>\n\t</tr>\n\t{{end}}\n\t{{end}}\n\t{{end}}\n</table>\n{{end}}\n\t</body>\n</html>\n")) as [template.Template | $.VarRef<template.Template> | null, $.GoError]))
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	return eventsTmplCache
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Free: (receiver: any, ...args: any[]) => (eventLogs_Free as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (eventLogs_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (eventLogs_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (eventLogs_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("trace.eventLog"), "trace.eventLogs"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Free"), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}
