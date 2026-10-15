// Generated file based on timeseries.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as log from "@goscript/log/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/fmt/index.js"
import "@goscript/log/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("golang.org/x/net/internal/timeseries", ["timeseries.Observable", "timeseries.Float", "timeseries.Clock", "timeseries.defaultClock", "timeseries.tsLevel", "timeseries.timeSeries", "timeseries.TimeSeries", "timeseries.MinuteHourSeries"])

export type Observable = {
	Add(other: Observable | null): void
	Clear(): void
	CopyFrom(other: Observable | null): void
	Multiply(ratio: number): void
}

$.registerInterfaceType(
	"timeseries.Observable",
	null,
	[$.methodSignature("Add", [["other", "timeseries.Observable"]]), $.methodSignature("Clear"), $.methodSignature("CopyFrom", [["other", "timeseries.Observable"]]), $.methodSignature("Multiply", [["ratio", /* @__PURE__ */ $.basicType("float64")]])]
);

export type Float = number

$.registerNamedValueType(
	"*timeseries.Float",
	{Add: (receiver: any, ...args: any[]) => (Float_Add as any)(receiver, ...$.stripGenericTypeArgs(args)), Clear: (receiver: any, ...args: any[]) => (Float_Clear as any)(receiver, ...$.stripGenericTypeArgs(args)), CopyFrom: (receiver: any, ...args: any[]) => (Float_CopyFrom as any)(receiver, ...$.stripGenericTypeArgs(args)), Multiply: (receiver: any, ...args: any[]) => (Float_Multiply as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Float_String as any)(receiver, ...$.stripGenericTypeArgs(args)), Value: (receiver: any, ...args: any[]) => (Float_Value as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Add", [["other", "timeseries.Observable"]]), $.methodSignature("Clear"), $.methodSignature("CopyFrom", [["other", "timeseries.Observable"]]), $.methodSignature("Multiply", [["ratio", /* @__PURE__ */ $.basicType("float64")]]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Value", [], [/* @__PURE__ */ $.basicType("float64")])]
);

export type Clock = {
	Time(): time.Time | globalThis.Promise<time.Time>
}

$.registerInterfaceType(
	"timeseries.Clock",
	null,
	[$.methodSignature("Time", [], ["time.Time"])]
);

export type defaultClock = number

$.registerNamedValueType(
	"timeseries.defaultClock",
	{Time: (receiver: any, ...args: any[]) => (defaultClock_Time as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Time", [], ["time.Time"])]
);

$.registerNamedValueType(
	"*timeseries.defaultClock",
	{Time: (receiver: any, ...args: any[]) => (defaultClock_Time as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Time", [], ["time.Time"])]
);

export class tsLevel {
	public get oldest(): number {
		return this._fields.oldest
	}

	public set oldest(value: number) {
		this._fields.oldest = value
	}

	public get newest(): number {
		return this._fields.newest
	}

	public set newest(value: number) {
		this._fields.newest = value
	}

	public get end(): time.Time {
		return this._fields.end
	}

	public set end(value: time.Time) {
		this._fields.end = value
	}

	public get size(): time.Duration {
		return this._fields.size
	}

	public set size(value: time.Duration) {
		this._fields.size = value
	}

	public get buckets(): $.Slice<Observable | null> {
		return this._fields.buckets
	}

	public set buckets(value: $.Slice<Observable | null>) {
		this._fields.buckets = value
	}

	public get provider(): (() => Observable | null | globalThis.Promise<Observable | null>) | null {
		return this._fields.provider
	}

	public set provider(value: (() => Observable | null | globalThis.Promise<Observable | null>) | null) {
		this._fields.provider = value
	}

	public _fields: {
		oldest: number
		newest: number
		end: time.Time
		size: time.Duration
		buckets: $.Slice<Observable | null>
		provider: (() => Observable | null | globalThis.Promise<Observable | null>) | null
	}

	constructor(init?: Partial<{oldest?: number, newest?: number, end?: time.Time, size?: time.Duration, buckets?: $.Slice<Observable | null>, provider?: (() => Observable | null | globalThis.Promise<Observable | null>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			oldest: init?.oldest ?? (0 as number),
			newest: init?.newest ?? (0 as number),
			end: init?.end ? $.markAsStructValue($.cloneStructValue(init.end)) : $.markAsStructValue(new time.Time()),
			size: init?.size ?? (0n as time.Duration),
			buckets: init?.buckets ?? (null! as $.Slice<Observable | null>),
			provider: init?.provider ?? (null! as (() => Observable | null | globalThis.Promise<Observable | null>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tsLevel {
		return new tsLevel(this, true)
	}

	public __goscriptAssign(source: tsLevel): void {
		const target = this._fields
		const values = source._fields
		target.oldest = values.oldest
		target.newest = values.newest
		$.assignStruct(target.end, values.end)
		target.size = values.size
		target.buckets = values.buckets
		target.provider = values.provider
	}

	public async Clear(): globalThis.Promise<void> {
		let l: tsLevel | $.VarRef<tsLevel> | null = this;
		const l$: tsLevel = l == null ? $.pointerTarget<tsLevel>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<tsLevel>(l);
		;(l$ as tsLevel).oldest = 0;
		;(l$ as tsLevel).newest = $.sliceLen((l$ as tsLevel).buckets) - 1
		$.assignStruct((l$ as tsLevel).end, $.markAsStructValue(new time.Time()))
		for (let __goscriptRangeTarget0 = (l$ as tsLevel).buckets, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			if ($.arrayIndex((l$ as tsLevel).buckets!, i) != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<Observable, null>>($.arrayIndex((l$ as tsLevel).buckets!, i)).Clear(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				$.sliceElems((l$ as tsLevel).buckets!)[$.sliceSlot((l$ as tsLevel).buckets!, i)] = null
			}
		}
	}

	public InitLevel(size: time.Duration, numBuckets: number, f: (() => Observable | null | globalThis.Promise<Observable | null>) | null): void {
		let l: tsLevel | $.VarRef<tsLevel> | null = this;
		const l$: tsLevel = l == null ? $.pointerTarget<tsLevel>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<tsLevel>(l);
		;(l$ as tsLevel).size = size;
		;(l$ as tsLevel).provider = f;
		;(l$ as tsLevel).buckets = $.makeSlice<Observable | null>(numBuckets)
	}

	static __typeInfo = $.registerStructType(
		"timeseries.tsLevel",
		() => new tsLevel(),
		() => [$.methodSignature("Clear", [], [], true), $.methodSignature("InitLevel", [["size", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["numBuckets", /* @__PURE__ */ $.basicType("int")], ["f", ({ kind: $.TypeKind.Function, params: [], results: ["timeseries.Observable"] } as $.FunctionTypeInfo)]], [], true)],
		tsLevel,
		() => [/* @__PURE__ */ $.structField("oldest", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "golang.org/x/net/internal/timeseries" }), /* @__PURE__ */ $.structField("newest", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "golang.org/x/net/internal/timeseries" }), /* @__PURE__ */ $.structField("end", "time.Time", [2], 16, false, { pkgPath: "golang.org/x/net/internal/timeseries" }), /* @__PURE__ */ $.structField("size", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 40, false, { pkgPath: "golang.org/x/net/internal/timeseries" }), /* @__PURE__ */ $.structField("buckets", /* @__PURE__ */ $.sliceType("timeseries.Observable"), [4], 48, false, { pkgPath: "golang.org/x/net/internal/timeseries" }), /* @__PURE__ */ $.structField("provider", ({ kind: $.TypeKind.Function, params: [], results: ["timeseries.Observable"] } as $.FunctionTypeInfo), [5], 72, false, { pkgPath: "golang.org/x/net/internal/timeseries" })]
	)
}

export class timeSeries {
	public get provider(): (() => Observable | null | globalThis.Promise<Observable | null>) | null {
		return this._fields.provider
	}

	public set provider(value: (() => Observable | null | globalThis.Promise<Observable | null>) | null) {
		this._fields.provider = value
	}

	public get numBuckets(): number {
		return this._fields.numBuckets
	}

	public set numBuckets(value: number) {
		this._fields.numBuckets = value
	}

	public get levels(): $.Slice<tsLevel | $.VarRef<tsLevel> | null> {
		return this._fields.levels
	}

	public set levels(value: $.Slice<tsLevel | $.VarRef<tsLevel> | null>) {
		this._fields.levels = value
	}

	public get lastAdd(): time.Time {
		return this._fields.lastAdd
	}

	public set lastAdd(value: time.Time) {
		this._fields.lastAdd = value
	}

	public get total(): Observable | null {
		return this._fields.total
	}

	public set total(value: Observable | null) {
		this._fields.total = value
	}

	public get clock(): Clock | null {
		return this._fields.clock
	}

	public set clock(value: Clock | null) {
		this._fields.clock = value
	}

	public get pending(): Observable | null {
		return this._fields.pending
	}

	public set pending(value: Observable | null) {
		this._fields.pending = value
	}

	public get pendingTime(): time.Time {
		return this._fields.pendingTime
	}

	public set pendingTime(value: time.Time) {
		this._fields.pendingTime = value
	}

	public get dirty(): boolean {
		return this._fields.dirty
	}

	public set dirty(value: boolean) {
		this._fields.dirty = value
	}

	public _fields: {
		provider: (() => Observable | null | globalThis.Promise<Observable | null>) | null
		numBuckets: number
		levels: $.Slice<tsLevel | $.VarRef<tsLevel> | null>
		lastAdd: time.Time
		total: Observable | null
		clock: Clock | null
		pending: Observable | null
		pendingTime: time.Time
		dirty: boolean
	}

	constructor(init?: Partial<{provider?: (() => Observable | null | globalThis.Promise<Observable | null>) | null, numBuckets?: number, levels?: $.Slice<tsLevel | $.VarRef<tsLevel> | null>, lastAdd?: time.Time, total?: Observable | null, clock?: Clock | null, pending?: Observable | null, pendingTime?: time.Time, dirty?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			provider: init?.provider ?? (null! as (() => Observable | null | globalThis.Promise<Observable | null>) | null),
			numBuckets: init?.numBuckets ?? (0 as number),
			levels: init?.levels ?? (null! as $.Slice<tsLevel | $.VarRef<tsLevel> | null>),
			lastAdd: init?.lastAdd ? $.markAsStructValue($.cloneStructValue(init.lastAdd)) : $.markAsStructValue(new time.Time()),
			total: init?.total ?? (null! as Observable | null),
			clock: init?.clock ?? (null! as Clock | null),
			pending: init?.pending ?? (null! as Observable | null),
			pendingTime: init?.pendingTime ? $.markAsStructValue($.cloneStructValue(init.pendingTime)) : $.markAsStructValue(new time.Time()),
			dirty: init?.dirty ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): timeSeries {
		return new timeSeries(this, true)
	}

	public __goscriptAssign(source: timeSeries): void {
		const target = this._fields
		const values = source._fields
		target.provider = values.provider
		target.numBuckets = values.numBuckets
		target.levels = values.levels
		$.assignStruct(target.lastAdd, values.lastAdd)
		target.total = $.assignFieldValue(target.total, values.total, "timeseries.Observable")
		target.clock = $.assignFieldValue(target.clock, values.clock, "timeseries.Clock")
		target.pending = $.assignFieldValue(target.pending, values.pending, "timeseries.Observable")
		$.assignStruct(target.pendingTime, values.pendingTime)
		target.dirty = values.dirty
	}

	public async Add(observation: Observable | null): globalThis.Promise<void> {
		const ts: timeSeries | $.VarRef<timeSeries> | null = this;
		await timeSeries.prototype.AddWithTime.call(ts, observation, $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<Clock, null>>($.pointerValue<timeSeries>(ts).clock).Time(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))))
	}

	public async AddWithTime(observation: Observable | null, t: time.Time): globalThis.Promise<void> {
		let ts: timeSeries | $.VarRef<timeSeries> | null = this;
		const ts$: timeSeries = ts == null ? $.pointerTarget<timeSeries>(ts) : (ts as any).__isVarRef === true ? (ts as any).value : (ts as any).__goValue === undefined ? (ts as any) : $.pointerTarget<timeSeries>(ts)

		let smallBucketDuration = $.pointerValue<tsLevel>($.arrayIndex((ts$ as timeSeries).levels!, 0)).size

		if ($.markAsStructValue($.cloneStructValue(t)).After($.markAsStructValue($.cloneStructValue((ts$ as timeSeries).lastAdd)))) {
			$.assignStruct((ts$ as timeSeries).lastAdd, t)
		}

		if ($.markAsStructValue($.cloneStructValue(t)).After($.markAsStructValue($.cloneStructValue((ts$ as timeSeries).pendingTime)))) {
			await (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).advance($.markAsStructValue($.cloneStructValue(t))) : timeSeries.prototype.advance.call(ts, $.markAsStructValue($.cloneStructValue(t))))
			await (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).mergePendingUpdates() : timeSeries.prototype.mergePendingUpdates.call(ts))
			$.assignStruct((ts$ as timeSeries).pendingTime, $.pointerValue<tsLevel>($.arrayIndex((ts$ as timeSeries).levels!, 0)).end)
			void (__goscriptAwait = $.pointerValue<Exclude<Observable, null>>((ts$ as timeSeries).pending).CopyFrom(observation), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
			;(ts$ as timeSeries).dirty = true
		} else {
			if ($.markAsStructValue($.cloneStructValue(t)).After($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((ts$ as timeSeries).pendingTime)).Add($.int64Mul(-1n, smallBucketDuration)))))) {
				// The observation is close enough to go into the pending bucket.
				// This compensates for clock skewing and small scheduling delays
				// by letting the update stay in the fast path.
				void (__goscriptAwait = $.pointerValue<Exclude<Observable, null>>((ts$ as timeSeries).pending).Add(observation), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
				;(ts$ as timeSeries).dirty = true
			} else {
				await (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).mergeValue(observation, t) : timeSeries.prototype.mergeValue.call(ts, observation, t))
			}
		}
	}

	public async Clear(): globalThis.Promise<void> {
		let ts: timeSeries | $.VarRef<timeSeries> | null = this;
		const ts$: timeSeries = ts == null ? $.pointerTarget<timeSeries>(ts) : (ts as any).__isVarRef === true ? (ts as any).value : (ts as any).__goValue === undefined ? (ts as any) : $.pointerTarget<timeSeries>(ts)
		$.assignStruct((ts$ as timeSeries).lastAdd, $.markAsStructValue(new time.Time()));
		;(ts$ as timeSeries).total = await (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).resetObservation((ts$ as timeSeries).total) : timeSeries.prototype.resetObservation.call(ts, (ts$ as timeSeries).total));
		;(ts$ as timeSeries).pending = await (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).resetObservation((ts$ as timeSeries).pending) : timeSeries.prototype.resetObservation.call(ts, (ts$ as timeSeries).pending))
		$.assignStruct((ts$ as timeSeries).pendingTime, $.markAsStructValue(new time.Time()));
		;(ts$ as timeSeries).dirty = false

		for (let __goscriptRangeTarget1 = (ts$ as timeSeries).levels, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			await tsLevel.prototype.Clear.call($.arrayIndex((ts$ as timeSeries).levels!, i))
		}
	}

	public async ComputeRange(start: time.Time, finish: time.Time, num: number): globalThis.Promise<$.Slice<Observable | null>> {
		const ts: timeSeries | $.VarRef<timeSeries> | null = this;
		const ts$: timeSeries = ts == null ? $.pointerTarget<timeSeries>(ts) : (ts as any).__isVarRef === true ? (ts as any).value : (ts as any).__goValue === undefined ? (ts as any) : $.pointerTarget<timeSeries>(ts)
		if ($.markAsStructValue($.cloneStructValue(start)).After($.markAsStructValue($.cloneStructValue(finish)))) {
			await log.Printf("timeseries: start > finish, %v>%v", $.arrayToSlice<any>([$.interfaceValue($.markAsStructValue($.cloneStructValue(start)), "time.Time", "time.Time"), $.interfaceValue($.markAsStructValue($.cloneStructValue(finish)), "time.Time", "time.Time")]))
			return null
		}

		if (num < 0) {
			await log.Printf("timeseries: num < 0, %v", $.arrayToSlice<any>([$.basicInterfaceValue(num, "int")]))
			return null
		}

		let results: $.Slice<Observable | null> = $.makeSlice<Observable | null>(num)

		for (let __goscriptRangeTarget2 = (ts$ as timeSeries).levels, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let l = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as tsLevel | $.VarRef<tsLevel> | null)
			if (!$.markAsStructValue($.cloneStructValue(start)).Before($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.pointerValue<tsLevel>(l).end)).Add($.int64Mul(-$.pointerValue<tsLevel>(l).size, $.int64((ts$ as timeSeries).numBuckets))))))) {
				await (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).extract(l, start, finish, num, results) : timeSeries.prototype.extract.call(ts, l, start, finish, num, results))
				return results
			}
		}

		// Failed to find a level that covers the desired range. So just
		// extract from the last level, even if it doesn't cover the entire
		// desired range.
		await (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).extract($.arrayIndex((ts$ as timeSeries).levels!, $.sliceLen((ts$ as timeSeries).levels) - 1), start, finish, num, results) : timeSeries.prototype.extract.call(ts, $.arrayIndex((ts$ as timeSeries).levels!, $.sliceLen((ts$ as timeSeries).levels) - 1), start, finish, num, results))

		return results
	}

	public async Latest(level: number, num: number): globalThis.Promise<Observable | null> {
		const ts: timeSeries | $.VarRef<timeSeries> | null = this;
		const ts$: timeSeries = ts == null ? $.pointerTarget<timeSeries>(ts) : (ts as any).__isVarRef === true ? (ts as any).value : (ts as any).__goValue === undefined ? (ts as any) : $.pointerTarget<timeSeries>(ts)
		let now = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<Clock, null>>((ts$ as timeSeries).clock).Time(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time)))
		if ($.markAsStructValue($.cloneStructValue($.pointerValue<tsLevel>($.arrayIndex((ts$ as timeSeries).levels!, 0)).end)).Before($.markAsStructValue($.cloneStructValue(now)))) {
			await (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).advance($.markAsStructValue($.cloneStructValue(now))) : timeSeries.prototype.advance.call(ts, $.markAsStructValue($.cloneStructValue(now))))
		}

		await (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).mergePendingUpdates() : timeSeries.prototype.mergePendingUpdates.call(ts))

		let result = (__goscriptAwait = (ts$ as timeSeries).provider!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let l: tsLevel | $.VarRef<tsLevel> | null = $.arrayIndex((ts$ as timeSeries).levels!, level)
		let l$: tsLevel = l == null ? $.pointerTarget<tsLevel>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<tsLevel>(l)
		let index = (l$ as tsLevel).newest

		for (let i = 0; i < num; i++) {
			if ($.arrayIndex((l$ as tsLevel).buckets!, index) != null) {
				void (__goscriptAwait = (result !== null && (result as any).__isVarRef !== true && (result as any).__goValue === undefined ? (result as Exclude<Observable, null>) : $.pointerValue<Exclude<Observable, null>>(result)).Add($.arrayIndex((l$ as tsLevel).buckets!, index)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if (index == 0) {
				index = (ts$ as timeSeries).numBuckets
			}
			index--
		}

		return result
	}

	public async LatestBuckets(level: number, num: number): globalThis.Promise<$.Slice<Observable | null>> {
		const ts: timeSeries | $.VarRef<timeSeries> | null = this;
		const ts$: timeSeries = ts == null ? $.pointerTarget<timeSeries>(ts) : (ts as any).__isVarRef === true ? (ts as any).value : (ts as any).__goValue === undefined ? (ts as any) : $.pointerTarget<timeSeries>(ts)
		if ((level < 0) || (level > $.sliceLen((ts$ as timeSeries).levels))) {
			await log.Print($.arrayToSlice<any>(["timeseries: bad level argument: ", $.basicInterfaceValue(level, "int")]))
			return null
		}
		if ((num < 0) || (num >= (ts$ as timeSeries).numBuckets)) {
			await log.Print($.arrayToSlice<any>(["timeseries: bad num argument: ", $.basicInterfaceValue(num, "int")]))
			return null
		}

		let results: $.Slice<Observable | null> = $.makeSlice<Observable | null>(num)
		let now = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<Clock, null>>((ts$ as timeSeries).clock).Time(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time)))
		if ($.markAsStructValue($.cloneStructValue($.pointerValue<tsLevel>($.arrayIndex((ts$ as timeSeries).levels!, 0)).end)).Before($.markAsStructValue($.cloneStructValue(now)))) {
			await (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).advance($.markAsStructValue($.cloneStructValue(now))) : timeSeries.prototype.advance.call(ts, $.markAsStructValue($.cloneStructValue(now))))
		}

		await (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).mergePendingUpdates() : timeSeries.prototype.mergePendingUpdates.call(ts))

		let l: tsLevel | $.VarRef<tsLevel> | null = $.arrayIndex((ts$ as timeSeries).levels!, level)
		let l$: tsLevel = l == null ? $.pointerTarget<tsLevel>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<tsLevel>(l)
		let index = (l$ as tsLevel).newest

		for (let __goscriptSliceWindow0 = $.sliceRange(results), i = 0; i < num; i++) {
			let result = (__goscriptAwait = (ts$ as timeSeries).provider!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = result
			if ($.arrayIndex((l$ as tsLevel).buckets!, index) != null) {
				void (__goscriptAwait = (result !== null && (result as any).__isVarRef !== true && (result as any).__goValue === undefined ? (result as Exclude<Observable, null>) : $.pointerValue<Exclude<Observable, null>>(result)).CopyFrom($.arrayIndex((l$ as tsLevel).buckets!, index)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}

			if (index == 0) {
				index = (ts$ as timeSeries).numBuckets
			}
			index = index - (1)
		}
		return results
	}

	public async Range(start: time.Time, finish: time.Time): globalThis.Promise<Observable | null> {
		const ts: timeSeries | $.VarRef<timeSeries> | null = this;
		return $.arrayIndex((await (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).ComputeRange(start, finish, 1) : timeSeries.prototype.ComputeRange.call(ts, start, finish, 1)))!, 0)
	}

	public async Recent(delta: time.Duration): globalThis.Promise<Observable | null> {
		const ts: timeSeries | $.VarRef<timeSeries> | null = this;
		let now = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<Clock, null>>($.pointerValue<timeSeries>(ts).clock).Time(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time)))
		return (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).Range($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(now)).Add(-delta))), now) : timeSeries.prototype.Range.call(ts, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(now)).Add(-delta))), now))
	}

	public async RecentList(delta: time.Duration, num: number): globalThis.Promise<$.Slice<Observable | null>> {
		const ts: timeSeries | $.VarRef<timeSeries> | null = this;
		if (delta < 0n) {
			return null
		}
		let now = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<Clock, null>>($.pointerValue<timeSeries>(ts).clock).Time(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time)))
		return (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).ComputeRange($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(now)).Add(-delta))), now, num) : timeSeries.prototype.ComputeRange.call(ts, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(now)).Add(-delta))), now, num))
	}

	public async ScaleBy(factor: number): globalThis.Promise<void> {
		const ts: timeSeries | $.VarRef<timeSeries> | null = this;
		const ts$: timeSeries = ts == null ? $.pointerTarget<timeSeries>(ts) : (ts as any).__isVarRef === true ? (ts as any).value : (ts as any).__goValue === undefined ? (ts as any) : $.pointerTarget<timeSeries>(ts)
		for (let __goscriptRangeTarget3 = (ts$ as timeSeries).levels, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let l = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as tsLevel | $.VarRef<tsLevel> | null)
			for (let i = 0; i < (ts$ as timeSeries).numBuckets; i++) {
				void (__goscriptAwait = $.pointerValue<Exclude<Observable, null>>($.arrayIndex($.pointerValue<tsLevel>(l).buckets!, i)).Multiply(factor), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		void (__goscriptAwait = $.pointerValue<Exclude<Observable, null>>((ts$ as timeSeries).total).Multiply(factor), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = $.pointerValue<Exclude<Observable, null>>((ts$ as timeSeries).pending).Multiply(factor), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Total(): globalThis.Promise<Observable | null> {
		const ts: timeSeries | $.VarRef<timeSeries> | null = this;
		await (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).mergePendingUpdates() : timeSeries.prototype.mergePendingUpdates.call(ts))
		return $.pointerValue<timeSeries>(ts).total
	}

	public async advance(t: time.Time): globalThis.Promise<void> {
		const ts: timeSeries | $.VarRef<timeSeries> | null = this;
		const ts$: timeSeries = ts == null ? $.pointerTarget<timeSeries>(ts) : (ts as any).__isVarRef === true ? (ts as any).value : (ts as any).__goValue === undefined ? (ts as any) : $.pointerTarget<timeSeries>(ts)
		if (!$.markAsStructValue($.cloneStructValue(t)).After($.markAsStructValue($.cloneStructValue($.pointerValue<tsLevel>($.arrayIndex((ts$ as timeSeries).levels!, 0)).end)))) {
			return
		}
		for (let i = 0; i < $.sliceLen((ts$ as timeSeries).levels); i++) {
			let level: tsLevel | $.VarRef<tsLevel> | null = $.arrayIndex((ts$ as timeSeries).levels!, i)
			let level$: tsLevel = level == null ? $.pointerTarget<tsLevel>(level) : (level as any).__isVarRef === true ? (level as any).value : (level as any).__goValue === undefined ? (level as any) : $.pointerTarget<tsLevel>(level)
			if (!$.markAsStructValue($.cloneStructValue((level$ as tsLevel).end)).Before($.markAsStructValue($.cloneStructValue(t)))) {
				break
			}

			// If the time is sufficiently far, just clear the level and advance
			// directly.
			if (!$.markAsStructValue($.cloneStructValue(t)).Before($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((level$ as tsLevel).end)).Add($.int64Mul((level$ as tsLevel).size, $.int64((ts$ as timeSeries).numBuckets))))))) {
				for (let __goscriptRangeTarget4 = (level$ as tsLevel).buckets, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
					let b = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as Observable | null)
					await (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).resetObservation(b) : timeSeries.prototype.resetObservation.call(ts, b))
				}
				$.assignStruct((level$ as tsLevel).end, time.Unix(0n, $.int64Mul(($.int64Div($.markAsStructValue($.cloneStructValue(t)).UnixNano(), time.Duration_Nanoseconds((level$ as tsLevel).size))), time.Duration_Nanoseconds((level$ as tsLevel).size))))
			}

			while ($.markAsStructValue($.cloneStructValue(t)).After($.markAsStructValue($.cloneStructValue((level$ as tsLevel).end)))) {
				$.assignStruct((level$ as tsLevel).end, $.markAsStructValue($.cloneStructValue((level$ as tsLevel).end)).Add((level$ as tsLevel).size));
				;(level$ as tsLevel).newest = (level$ as tsLevel).oldest;
				;(level$ as tsLevel).oldest = ((level$ as tsLevel).oldest + 1) % (ts$ as timeSeries).numBuckets
				await (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).resetObservation($.arrayIndex((level$ as tsLevel).buckets!, (level$ as tsLevel).newest)) : timeSeries.prototype.resetObservation.call(ts, $.arrayIndex((level$ as tsLevel).buckets!, (level$ as tsLevel).newest)))
			}

			t = $.assignStruct(t, (level$ as tsLevel).end)
		}
	}

	public async extract(l: tsLevel | $.VarRef<tsLevel> | null, start: time.Time, finish: time.Time, num: number, results: $.Slice<Observable | null>): globalThis.Promise<void> {
		const ts: timeSeries | $.VarRef<timeSeries> | null = this;
		const ts$: timeSeries = ts == null ? $.pointerTarget<timeSeries>(ts) : (ts as any).__isVarRef === true ? (ts as any).value : (ts as any).__goValue === undefined ? (ts as any) : $.pointerTarget<timeSeries>(ts)
		const l$: tsLevel = l == null ? $.pointerTarget<tsLevel>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<tsLevel>(l)
		await (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).mergePendingUpdates() : timeSeries.prototype.mergePendingUpdates.call(ts))

		let srcInterval = (l$ as tsLevel).size
		let dstInterval = $.int64Div($.markAsStructValue($.cloneStructValue(finish)).Sub($.markAsStructValue($.cloneStructValue(start))), $.int64(num))
		let dstStart = $.markAsStructValue($.cloneStructValue(start))
		let srcStart = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((l$ as tsLevel).end)).Add($.int64Mul(-srcInterval, $.int64((ts$ as timeSeries).numBuckets)))))

		let srcIndex = 0

		// Where should scanning start?
		if ($.markAsStructValue($.cloneStructValue(dstStart)).After($.markAsStructValue($.cloneStructValue(srcStart)))) {
			let advance: number = $.int($.int64Div($.markAsStructValue($.cloneStructValue(dstStart)).Sub($.markAsStructValue($.cloneStructValue(srcStart))), srcInterval))
			srcIndex = srcIndex + (advance)
			srcStart = $.assignStruct(srcStart, $.markAsStructValue($.cloneStructValue(srcStart)).Add($.int64Mul($.int64(advance), srcInterval)))
		}

		// The i'th value is computed as show below.
		// interval = (finish/start)/num
		// i'th value = sum of observation in range
		//   [ start + i       * interval,
		//     start + (i + 1) * interval )
		for (let __goscriptSliceWindow1 = $.sliceRange(results), i = 0; i < num; i++) {
			;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = await (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).resetObservation(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as Observable | null)) : timeSeries.prototype.resetObservation.call(ts, ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as Observable | null)))
			let dstEnd = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(dstStart)).Add(dstInterval)))
			while ((srcIndex < (ts$ as timeSeries).numBuckets) && $.markAsStructValue($.cloneStructValue(srcStart)).Before($.markAsStructValue($.cloneStructValue(dstEnd)))) {
				let srcEnd = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(srcStart)).Add(srcInterval)))
				if ($.markAsStructValue($.cloneStructValue(srcEnd)).After($.markAsStructValue($.cloneStructValue((ts$ as timeSeries).lastAdd)))) {
					srcEnd = $.assignStruct(srcEnd, (ts$ as timeSeries).lastAdd)
				}

				if (!$.markAsStructValue($.cloneStructValue(srcEnd)).Before($.markAsStructValue($.cloneStructValue(dstStart)))) {
					let srcValue = $.arrayIndex((l$ as tsLevel).buckets!, (srcIndex + (l$ as tsLevel).oldest) % (ts$ as timeSeries).numBuckets)
					if (!$.markAsStructValue($.cloneStructValue(srcStart)).Before($.markAsStructValue($.cloneStructValue(dstStart))) && !$.markAsStructValue($.cloneStructValue(srcEnd)).After($.markAsStructValue($.cloneStructValue(dstEnd)))) {
						// dst completely contains src.
						if (srcValue != null) {
							void (__goscriptAwait = $.pointerValue<Exclude<Observable, null>>(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as Observable | null)).Add(srcValue), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
					} else {
						// dst partially overlaps src.
						let overlapStart = maxTime(srcStart, dstStart)
						let overlapEnd = minTime(srcEnd, dstEnd)
						let base = $.markAsStructValue($.cloneStructValue(srcEnd)).Sub($.markAsStructValue($.cloneStructValue(srcStart)))
						let fraction = time.Duration_Seconds($.markAsStructValue($.cloneStructValue(overlapEnd)).Sub($.markAsStructValue($.cloneStructValue(overlapStart)))) / time.Duration_Seconds(base)

						let used = (__goscriptAwait = (ts$ as timeSeries).provider!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (srcValue != null) {
							void (__goscriptAwait = (used !== null && (used as any).__isVarRef !== true && (used as any).__goValue === undefined ? (used as Exclude<Observable, null>) : $.pointerValue<Exclude<Observable, null>>(used)).CopyFrom(srcValue), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
						void (__goscriptAwait = (used !== null && (used as any).__isVarRef !== true && (used as any).__goValue === undefined ? (used as Exclude<Observable, null>) : $.pointerValue<Exclude<Observable, null>>(used)).Multiply(fraction), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						void (__goscriptAwait = $.pointerValue<Exclude<Observable, null>>(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as Observable | null)).Add(used), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}

					if ($.markAsStructValue($.cloneStructValue(srcEnd)).After($.markAsStructValue($.cloneStructValue(dstEnd)))) {
						break
					}
				}
				srcIndex++
				srcStart = $.assignStruct(srcStart, $.markAsStructValue($.cloneStructValue(srcStart)).Add(srcInterval))
			}
			dstStart = $.assignStruct(dstStart, $.markAsStructValue($.cloneStructValue(dstStart)).Add(dstInterval))
		}
	}

	public async init(resolutions: $.Slice<time.Duration>, f: (() => Observable | null | globalThis.Promise<Observable | null>) | null, numBuckets: number, clock: Clock | null): globalThis.Promise<void> {
		let ts: timeSeries | $.VarRef<timeSeries> | null = this;
		const ts$: timeSeries = ts == null ? $.pointerTarget<timeSeries>(ts) : (ts as any).__isVarRef === true ? (ts as any).value : (ts as any).__goValue === undefined ? (ts as any) : $.pointerTarget<timeSeries>(ts);
		;(ts$ as timeSeries).provider = f;
		;(ts$ as timeSeries).numBuckets = numBuckets;
		;(ts$ as timeSeries).clock = clock;
		;(ts$ as timeSeries).levels = $.makeSlice<tsLevel | $.VarRef<tsLevel> | null>($.sliceLen(resolutions))

		for (let __goscriptRangeTarget5 = resolutions, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
			if ((i > 0) && (((__goscriptRangeWindow5.backing as any[])[$.windowSlot(__goscriptRangeWindow5, i - 1)] as time.Duration) >= ((__goscriptRangeWindow5.backing as any[])[__goscriptRangeWindow5.offset + i] as time.Duration))) {
				await log.Print($.arrayToSlice<any>(["timeseries: resolutions must be monotonically increasing"]))
				break
			}
			let newLevel: tsLevel | $.VarRef<tsLevel> | null = new tsLevel()
			tsLevel.prototype.InitLevel.call(newLevel, ((__goscriptRangeWindow5.backing as any[])[__goscriptRangeWindow5.offset + i] as time.Duration), (ts$ as timeSeries).numBuckets, (ts$ as timeSeries).provider)
			$.sliceElems((ts$ as timeSeries).levels!)[$.sliceSlot((ts$ as timeSeries).levels!, i)] = newLevel
		}

		await (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).Clear() : timeSeries.prototype.Clear.call(ts))
	}

	public async mergePendingUpdates(): globalThis.Promise<void> {
		let ts: timeSeries | $.VarRef<timeSeries> | null = this;
		const ts$: timeSeries = ts == null ? $.pointerTarget<timeSeries>(ts) : (ts as any).__isVarRef === true ? (ts as any).value : (ts as any).__goValue === undefined ? (ts as any) : $.pointerTarget<timeSeries>(ts)
		if ((ts$ as timeSeries).dirty) {
			await (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).mergeValue((ts$ as timeSeries).pending, $.markAsStructValue($.cloneStructValue((ts$ as timeSeries).pendingTime))) : timeSeries.prototype.mergeValue.call(ts, (ts$ as timeSeries).pending, $.markAsStructValue($.cloneStructValue((ts$ as timeSeries).pendingTime))));
			;(ts$ as timeSeries).pending = await (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as timeSeries).resetObservation((ts$ as timeSeries).pending) : timeSeries.prototype.resetObservation.call(ts, (ts$ as timeSeries).pending));
			;(ts$ as timeSeries).dirty = false
		}
	}

	public async mergeValue(observation: Observable | null, t: time.Time): globalThis.Promise<void> {
		const ts: timeSeries | $.VarRef<timeSeries> | null = this;
		const ts$: timeSeries = ts == null ? $.pointerTarget<timeSeries>(ts) : (ts as any).__isVarRef === true ? (ts as any).value : (ts as any).__goValue === undefined ? (ts as any) : $.pointerTarget<timeSeries>(ts)
		for (let __goscriptRangeTarget6 = (ts$ as timeSeries).levels, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let level = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as tsLevel | $.VarRef<tsLevel> | null)
			let index = ((ts$ as timeSeries).numBuckets - 1) - $.int($.int64Div($.markAsStructValue($.cloneStructValue($.pointerValue<tsLevel>(level).end)).Sub($.markAsStructValue($.cloneStructValue(t))), $.pointerValue<tsLevel>(level).size))
			if ((0 <= index) && (index < (ts$ as timeSeries).numBuckets)) {
				let bucketNumber = ($.pointerValue<tsLevel>(level).oldest + index) % (ts$ as timeSeries).numBuckets
				if ($.arrayIndex($.pointerValue<tsLevel>(level).buckets!, bucketNumber) == null) {
					$.sliceElems($.pointerValue<tsLevel>(level).buckets!)[$.sliceSlot($.pointerValue<tsLevel>(level).buckets!, bucketNumber)] = (__goscriptAwait = $.pointerValue<tsLevel>(level).provider!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				void (__goscriptAwait = $.pointerValue<Exclude<Observable, null>>($.arrayIndex($.pointerValue<tsLevel>(level).buckets!, bucketNumber)).Add(observation), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		void (__goscriptAwait = $.pointerValue<Exclude<Observable, null>>((ts$ as timeSeries).total).Add(observation), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async resetObservation(observation: Observable | null): globalThis.Promise<Observable | null> {
		const ts: timeSeries | $.VarRef<timeSeries> | null = this;
		if (observation == null) {
			observation = (__goscriptAwait = $.pointerValue<timeSeries>(ts).provider!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			void (__goscriptAwait = (observation !== null && (observation as any).__isVarRef !== true && (observation as any).__goValue === undefined ? (observation as Exclude<Observable, null>) : $.pointerValue<Exclude<Observable, null>>(observation)).Clear(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return observation
	}

	static __typeInfo = $.registerStructType(
		"timeseries.timeSeries",
		() => new timeSeries(),
		() => [$.methodSignature("Add", [["observation", "timeseries.Observable"]], [], true), $.methodSignature("AddWithTime", [["observation", "timeseries.Observable"], ["t", "time.Time"]], [], true), $.methodSignature("Clear", [], [], true), $.methodSignature("ComputeRange", [["start", "time.Time"], ["finish", "time.Time"], ["num", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType("timeseries.Observable")], true), $.methodSignature("Latest", [["level", /* @__PURE__ */ $.basicType("int")], ["num", /* @__PURE__ */ $.basicType("int")]], ["timeseries.Observable"], true), $.methodSignature("LatestBuckets", [["level", /* @__PURE__ */ $.basicType("int")], ["num", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType("timeseries.Observable")], true), $.methodSignature("Range", [["start", "time.Time"], ["finish", "time.Time"]], ["timeseries.Observable"], true), $.methodSignature("Recent", [["delta", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["timeseries.Observable"], true), $.methodSignature("RecentList", [["delta", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["num", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType("timeseries.Observable")], true), $.methodSignature("ScaleBy", [["factor", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("Total", [], ["timeseries.Observable"], true), $.methodSignature("advance", [["t", "time.Time"]], [], true), $.methodSignature("extract", [["l", /* @__PURE__ */ $.pointerType("timeseries.tsLevel")], ["start", "time.Time"], ["finish", "time.Time"], ["num", /* @__PURE__ */ $.basicType("int")], ["results", /* @__PURE__ */ $.sliceType("timeseries.Observable")]], [], true), $.methodSignature("init", [["resolutions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))], ["f", ({ kind: $.TypeKind.Function, params: [], results: ["timeseries.Observable"] } as $.FunctionTypeInfo)], ["numBuckets", /* @__PURE__ */ $.basicType("int")], ["clock", "timeseries.Clock"]], [], true), $.methodSignature("mergePendingUpdates", [], [], true), $.methodSignature("mergeValue", [["observation", "timeseries.Observable"], ["t", "time.Time"]], [], true), $.methodSignature("resetObservation", [["observation", "timeseries.Observable"]], ["timeseries.Observable"], true)],
		timeSeries,
		() => [/* @__PURE__ */ $.structField("provider", ({ kind: $.TypeKind.Function, params: [], results: ["timeseries.Observable"] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "golang.org/x/net/internal/timeseries" }), /* @__PURE__ */ $.structField("numBuckets", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "golang.org/x/net/internal/timeseries" }), /* @__PURE__ */ $.structField("levels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("timeseries.tsLevel")), [2], 16, false, { pkgPath: "golang.org/x/net/internal/timeseries" }), /* @__PURE__ */ $.structField("lastAdd", "time.Time", [3], 40, false, { pkgPath: "golang.org/x/net/internal/timeseries" }), /* @__PURE__ */ $.structField("total", "timeseries.Observable", [4], 64, false, { pkgPath: "golang.org/x/net/internal/timeseries" }), /* @__PURE__ */ $.structField("clock", "timeseries.Clock", [5], 80, false, { pkgPath: "golang.org/x/net/internal/timeseries" }), /* @__PURE__ */ $.structField("pending", "timeseries.Observable", [6], 96, false, { pkgPath: "golang.org/x/net/internal/timeseries" }), /* @__PURE__ */ $.structField("pendingTime", "time.Time", [7], 112, false, { pkgPath: "golang.org/x/net/internal/timeseries" }), /* @__PURE__ */ $.structField("dirty", /* @__PURE__ */ $.basicType("bool"), [8], 136, false, { pkgPath: "golang.org/x/net/internal/timeseries" })]
	)
}

export class TimeSeries {
	public get timeSeries(): timeSeries {
		return this._fields.timeSeries
	}

	public set timeSeries(value: timeSeries) {
		this._fields.timeSeries = value
	}

	public _fields: {
		timeSeries: timeSeries
	}

	constructor(init?: Partial<{timeSeries?: timeSeries}>, __goscriptValue?: boolean) {
		this._fields = {
			timeSeries: init?.timeSeries ? init.timeSeries.clone() : new timeSeries(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TimeSeries {
		return new TimeSeries(this, true)
	}

	public __goscriptAssign(source: TimeSeries): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.timeSeries, values.timeSeries)
	}

	public async Add(observation: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).Add(observation)
	}

	public async AddWithTime(observation: any, t: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).AddWithTime(observation, t)
	}

	public async Clear(): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).Clear()
	}

	public async ComputeRange(start: any, finish: any, num: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).ComputeRange(start, finish, num)
	}

	public async Latest(level: any, num: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).Latest(level, num)
	}

	public async LatestBuckets(level: any, num: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).LatestBuckets(level, num)
	}

	public async Range(start: any, finish: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).Range(start, finish)
	}

	public async Recent(delta: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).Recent(delta)
	}

	public async RecentList(delta: any, num: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).RecentList(delta, num)
	}

	public async ScaleBy(factor: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).ScaleBy(factor)
	}

	public async Total(): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).Total()
	}

	public async advance(t: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).advance(t)
	}

	public async extract(l: any, start: any, finish: any, num: any, results: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).extract(l, start, finish, num, results)
	}

	public async init(resolutions: any, f: any, numBuckets: any, clock: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).init(resolutions, f, numBuckets, clock)
	}

	public async mergePendingUpdates(): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).mergePendingUpdates()
	}

	public async mergeValue(observation: any, t: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).mergeValue(observation, t)
	}

	public async resetObservation(observation: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).resetObservation(observation)
	}

	static __typeInfo = $.registerStructType(
		"timeseries.TimeSeries",
		() => new TimeSeries(),
		() => [$.methodSignature("Add", [["observation", "timeseries.Observable"]], [], true), $.methodSignature("AddWithTime", [["observation", "timeseries.Observable"], ["t", "time.Time"]], [], true), $.methodSignature("Clear", [], [], true), $.methodSignature("ComputeRange", [["start", "time.Time"], ["finish", "time.Time"], ["num", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType("timeseries.Observable")], true), $.methodSignature("Latest", [["level", /* @__PURE__ */ $.basicType("int")], ["num", /* @__PURE__ */ $.basicType("int")]], ["timeseries.Observable"], true), $.methodSignature("LatestBuckets", [["level", /* @__PURE__ */ $.basicType("int")], ["num", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType("timeseries.Observable")], true), $.methodSignature("Range", [["start", "time.Time"], ["finish", "time.Time"]], ["timeseries.Observable"], true), $.methodSignature("Recent", [["delta", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["timeseries.Observable"], true), $.methodSignature("RecentList", [["delta", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["num", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType("timeseries.Observable")], true), $.methodSignature("ScaleBy", [["factor", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("Total", [], ["timeseries.Observable"], true), $.methodSignature("advance", [["t", "time.Time"]], [], true), $.methodSignature("extract", [["l", /* @__PURE__ */ $.pointerType("timeseries.tsLevel")], ["start", "time.Time"], ["finish", "time.Time"], ["num", /* @__PURE__ */ $.basicType("int")], ["results", /* @__PURE__ */ $.sliceType("timeseries.Observable")]], [], true), $.methodSignature("init", [["resolutions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))], ["f", ({ kind: $.TypeKind.Function, params: [], results: ["timeseries.Observable"] } as $.FunctionTypeInfo)], ["numBuckets", /* @__PURE__ */ $.basicType("int")], ["clock", "timeseries.Clock"]], [], true), $.methodSignature("mergePendingUpdates", [], [], true), $.methodSignature("mergeValue", [["observation", "timeseries.Observable"], ["t", "time.Time"]], [], true), $.methodSignature("resetObservation", [["observation", "timeseries.Observable"]], ["timeseries.Observable"], true)],
		TimeSeries,
		() => [/* @__PURE__ */ $.structField("timeSeries", "timeseries.timeSeries", [0], 0, false, { pkgPath: "golang.org/x/net/internal/timeseries", anonymous: true })]
	)
}

export class MinuteHourSeries {
	public get timeSeries(): timeSeries {
		return this._fields.timeSeries
	}

	public set timeSeries(value: timeSeries) {
		this._fields.timeSeries = value
	}

	public _fields: {
		timeSeries: timeSeries
	}

	constructor(init?: Partial<{timeSeries?: timeSeries}>, __goscriptValue?: boolean) {
		this._fields = {
			timeSeries: init?.timeSeries ? init.timeSeries.clone() : new timeSeries(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MinuteHourSeries {
		return new MinuteHourSeries(this, true)
	}

	public __goscriptAssign(source: MinuteHourSeries): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.timeSeries, values.timeSeries)
	}

	public async Hour(): globalThis.Promise<Observable | null> {
		const ts: MinuteHourSeries | $.VarRef<MinuteHourSeries> | null = this;
		return $.pointerValue<MinuteHourSeries>(ts).timeSeries.Latest(1, 60)
	}

	public async Minute(): globalThis.Promise<Observable | null> {
		const ts: MinuteHourSeries | $.VarRef<MinuteHourSeries> | null = this;
		return $.pointerValue<MinuteHourSeries>(ts).timeSeries.Latest(0, 60)
	}

	public async Add(observation: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).Add(observation)
	}

	public async AddWithTime(observation: any, t: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).AddWithTime(observation, t)
	}

	public async Clear(): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).Clear()
	}

	public async ComputeRange(start: any, finish: any, num: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).ComputeRange(start, finish, num)
	}

	public async Latest(level: any, num: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).Latest(level, num)
	}

	public async LatestBuckets(level: any, num: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).LatestBuckets(level, num)
	}

	public async Range(start: any, finish: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).Range(start, finish)
	}

	public async Recent(delta: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).Recent(delta)
	}

	public async RecentList(delta: any, num: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).RecentList(delta, num)
	}

	public async ScaleBy(factor: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).ScaleBy(factor)
	}

	public async Total(): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).Total()
	}

	public async advance(t: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).advance(t)
	}

	public async extract(l: any, start: any, finish: any, num: any, results: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).extract(l, start, finish, num, results)
	}

	public async init(resolutions: any, f: any, numBuckets: any, clock: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).init(resolutions, f, numBuckets, clock)
	}

	public async mergePendingUpdates(): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).mergePendingUpdates()
	}

	public async mergeValue(observation: any, t: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).mergeValue(observation, t)
	}

	public async resetObservation(observation: any): globalThis.Promise<any> {
		return await $.pointerValue<timeSeries>(this.timeSeries).resetObservation(observation)
	}

	static __typeInfo = $.registerStructType(
		"timeseries.MinuteHourSeries",
		() => new MinuteHourSeries(),
		() => [$.methodSignature("Hour", [], ["timeseries.Observable"], true), $.methodSignature("Minute", [], ["timeseries.Observable"], true), $.methodSignature("Add", [["observation", "timeseries.Observable"]], [], true), $.methodSignature("AddWithTime", [["observation", "timeseries.Observable"], ["t", "time.Time"]], [], true), $.methodSignature("Clear", [], [], true), $.methodSignature("ComputeRange", [["start", "time.Time"], ["finish", "time.Time"], ["num", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType("timeseries.Observable")], true), $.methodSignature("Latest", [["level", /* @__PURE__ */ $.basicType("int")], ["num", /* @__PURE__ */ $.basicType("int")]], ["timeseries.Observable"], true), $.methodSignature("LatestBuckets", [["level", /* @__PURE__ */ $.basicType("int")], ["num", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType("timeseries.Observable")], true), $.methodSignature("Range", [["start", "time.Time"], ["finish", "time.Time"]], ["timeseries.Observable"], true), $.methodSignature("Recent", [["delta", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["timeseries.Observable"], true), $.methodSignature("RecentList", [["delta", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["num", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType("timeseries.Observable")], true), $.methodSignature("ScaleBy", [["factor", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("Total", [], ["timeseries.Observable"], true), $.methodSignature("advance", [["t", "time.Time"]], [], true), $.methodSignature("extract", [["l", /* @__PURE__ */ $.pointerType("timeseries.tsLevel")], ["start", "time.Time"], ["finish", "time.Time"], ["num", /* @__PURE__ */ $.basicType("int")], ["results", /* @__PURE__ */ $.sliceType("timeseries.Observable")]], [], true), $.methodSignature("init", [["resolutions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))], ["f", ({ kind: $.TypeKind.Function, params: [], results: ["timeseries.Observable"] } as $.FunctionTypeInfo)], ["numBuckets", /* @__PURE__ */ $.basicType("int")], ["clock", "timeseries.Clock"]], [], true), $.methodSignature("mergePendingUpdates", [], [], true), $.methodSignature("mergeValue", [["observation", "timeseries.Observable"], ["t", "time.Time"]], [], true), $.methodSignature("resetObservation", [["observation", "timeseries.Observable"]], ["timeseries.Observable"], true)],
		MinuteHourSeries,
		() => [/* @__PURE__ */ $.structField("timeSeries", "timeseries.timeSeries", [0], 0, false, { pkgPath: "golang.org/x/net/internal/timeseries", anonymous: true })]
	)
}

export const timeSeriesNumBuckets: number = 64

export const minuteHourSeriesNumBuckets: number = 60

export let timeSeriesResolutions: $.Slice<time.Duration> = $.arrayToSlice<time.Duration>([1000000000n, 10000000000n, 60000000000n, 600000000000n, 3600000000000n, 21600000000000n, 86400000000000n, 604800000000000n, 2419200000000000n, 9676800000000000n])

export function __goscript_set_timeSeriesResolutions(__goscriptValue: $.Slice<time.Duration>): void {
	timeSeriesResolutions = __goscriptValue
}

export let minuteHourSeriesResolutions: $.Slice<time.Duration> = $.arrayToSlice<time.Duration>([1000000000n, 60000000000n])

export function __goscript_set_minuteHourSeriesResolutions(__goscriptValue: $.Slice<time.Duration>): void {
	minuteHourSeriesResolutions = __goscriptValue
}

export function NewFloat(): Observable | null {
	let f = $.varRef(0)
	return $.namedValueInterfaceValue<Observable | null>(f, "*timeseries.Float", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export async function Float_String(f: $.VarRef<Float> | null): globalThis.Promise<string> {
	return fmt.Sprintf("%g", $.basicInterfaceValue(Float_Value(f), "float64"))
}

export function Float_Value(f: $.VarRef<Float> | null): number {
	return $.pointerValue<Float>(f)
}

export function Float_Multiply(f: $.VarRef<Float> | null, ratio: number): void {
	f!.value = f!.value * (ratio)
}

export function Float_Add(f: $.VarRef<Float> | null, other: Observable | null): void {
	let o: $.VarRef<Float> | null = $.mustTypeAssert<$.VarRef<Float> | null>(other, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64", "timeseries.Float")))
	f!.value = f!.value + ($.pointerValue<Float>(o))
}

export function Float_Clear(f: $.VarRef<Float> | null): void {
	f!.value = 0
}

export function Float_CopyFrom(f: $.VarRef<Float> | null, other: Observable | null): void {
	let o: $.VarRef<Float> | null = $.mustTypeAssert<$.VarRef<Float> | null>(other, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64", "timeseries.Float")))
	f!.value = $.pointerValue<Float>(o)
}

export let defaultClockInstance: defaultClock = 0

export function __goscript_set_defaultClockInstance(__goscriptValue: defaultClock): void {
	defaultClockInstance = __goscriptValue
}

export function defaultClock_Time(recv: defaultClock): time.Time {
	return $.markAsStructValue($.cloneStructValue(time.Now()))
}

export async function NewTimeSeries(f: (() => Observable | null | globalThis.Promise<Observable | null>) | null): globalThis.Promise<TimeSeries | $.VarRef<TimeSeries> | null> {
	return NewTimeSeriesWithClock(f, $.namedValueInterfaceValue<Clock | null>(defaultClockInstance, "timeseries.defaultClock", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))
}

export async function NewTimeSeriesWithClock(f: (() => Observable | null | globalThis.Promise<Observable | null>) | null, clock: Clock | null): globalThis.Promise<TimeSeries | $.VarRef<TimeSeries> | null> {
	let ts: TimeSeries | $.VarRef<TimeSeries> | null = new TimeSeries()
	await $.pointerValue<TimeSeries>(ts).timeSeries.init(timeSeriesResolutions, f, 64, clock)
	return ts
}

export async function NewMinuteHourSeries(f: (() => Observable | null | globalThis.Promise<Observable | null>) | null): globalThis.Promise<MinuteHourSeries | $.VarRef<MinuteHourSeries> | null> {
	return NewMinuteHourSeriesWithClock(f, $.namedValueInterfaceValue<Clock | null>(defaultClockInstance, "timeseries.defaultClock", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))
}

export async function NewMinuteHourSeriesWithClock(f: (() => Observable | null | globalThis.Promise<Observable | null>) | null, clock: Clock | null): globalThis.Promise<MinuteHourSeries | $.VarRef<MinuteHourSeries> | null> {
	let ts: MinuteHourSeries | $.VarRef<MinuteHourSeries> | null = new MinuteHourSeries()
	await $.pointerValue<MinuteHourSeries>(ts).timeSeries.init(minuteHourSeriesResolutions, f, 60, clock)
	return ts
}

export function minTime(a: time.Time, b: time.Time): time.Time {
	if ($.markAsStructValue($.cloneStructValue(a)).Before($.markAsStructValue($.cloneStructValue(b)))) {
		return $.markAsStructValue($.cloneStructValue(a))
	}
	return $.markAsStructValue($.cloneStructValue(b))
}

export function maxTime(a: time.Time, b: time.Time): time.Time {
	if ($.markAsStructValue($.cloneStructValue(a)).After($.markAsStructValue($.cloneStructValue(b)))) {
		return $.markAsStructValue($.cloneStructValue(a))
	}
	return $.markAsStructValue($.cloneStructValue(b))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Add: (receiver: any, ...args: any[]) => (Float_Add as any)(receiver, ...$.stripGenericTypeArgs(args)), Clear: (receiver: any, ...args: any[]) => (Float_Clear as any)(receiver, ...$.stripGenericTypeArgs(args)), CopyFrom: (receiver: any, ...args: any[]) => (Float_CopyFrom as any)(receiver, ...$.stripGenericTypeArgs(args)), Multiply: (receiver: any, ...args: any[]) => (Float_Multiply as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Float_String as any)(receiver, ...$.stripGenericTypeArgs(args)), Value: (receiver: any, ...args: any[]) => (Float_Value as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64", "timeseries.Float")))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Add", [["other", "timeseries.Observable"]]), $.methodSignature("Clear"), $.methodSignature("CopyFrom", [["other", "timeseries.Observable"]]), $.methodSignature("Multiply", [["ratio", /* @__PURE__ */ $.basicType("float64")]]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Value", [], [/* @__PURE__ */ $.basicType("float64")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Time: (receiver: any, ...args: any[]) => (defaultClock_Time as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int", "timeseries.defaultClock"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Time", [], ["time.Time"])])
}

var __goscriptAwait: any
