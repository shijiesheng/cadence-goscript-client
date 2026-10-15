// Generated file based on tally.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as sort from "@goscript/sort/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as push from "@goscript/go.uber.org/net/metrics/push/index.js"
import "@goscript/math/index.js"
import "@goscript/sort/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/net/metrics/push/index.js"

$.registerTypePackagePath("go.uber.org/net/metrics/tallypush", ["tallypush.target", "tallypush.counter", "tallypush.gauge", "tallypush.histogram"])

export class target {
	public get Scope(): tally.Scope | null {
		return this._fields.Scope
	}

	public set Scope(value: tally.Scope | null) {
		this._fields.Scope = value
	}

	public _fields: {
		Scope: tally.Scope | null
	}

	constructor(init?: Partial<{Scope?: tally.Scope | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Scope: init?.Scope ?? (null! as tally.Scope | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): target {
		return new target(this, true)
	}

	public __goscriptAssign(source: target): void {
		const target = this._fields
		const values = source._fields
		target.Scope = $.assignFieldValue(target.Scope, values.Scope, "tally.Scope")
	}

	public async NewCounter(spec: push.Spec): globalThis.Promise<push.Counter | null> {
		const tp: target | $.VarRef<target> | null = this;
		return $.interfaceValue<push.Counter | null>((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<target>(tp).Scope).Tagged(spec.Tags))).Counter(spec.Name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new counter({Counter: __goscriptLiteralField0}) })()), "*tallypush.counter", /* @__PURE__ */ $.pointerType("tallypush.counter"))
	}

	public async NewGauge(spec: push.Spec): globalThis.Promise<push.Gauge | null> {
		const tp: target | $.VarRef<target> | null = this;
		return $.interfaceValue<push.Gauge | null>((await (async () => { const __goscriptLiteralField1 = (__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<target>(tp).Scope).Tagged(spec.Tags))).Gauge(spec.Name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new gauge({Gauge: __goscriptLiteralField1}) })()), "*tallypush.gauge", /* @__PURE__ */ $.pointerType("tallypush.gauge"))
	}

	public async NewHistogram(spec: push.HistogramSpec): globalThis.Promise<push.Histogram | null> {
		const tp: target | $.VarRef<target> | null = this;
		let buckets: $.Slice<number> = $.makeSlice<number>($.sliceLen(spec.Buckets), undefined, "number")
		for (let __goscriptRangeTarget0 = spec.Buckets, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(buckets), i = 0; i < __goscriptRangeWindow0.length; i++) {
			if ($.arrayIndex(spec.Buckets!, i) == 9223372036854775807n) {
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = math.MaxFloat64
			} else {
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = globalThis.Number($.arrayIndex(spec.Buckets!, i))
			}
		}
		return $.interfaceValue<push.Histogram | null>((await (async () => { const __goscriptLiteralField2 = (__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((await $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<target>(tp).Scope).Tagged(spec.Spec.Tags))).Histogram(spec.Spec.Name, $.namedValueInterfaceValue<tally.Buckets | null>((buckets as tally.ValueBuckets), "tally.ValueBuckets", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new histogram({Histogram: __goscriptLiteralField2, lasts: $.makeSlice<bigint>($.sliceLen(buckets), undefined, "number"), bucketValue: spec.Buckets}) })()), "*tallypush.histogram", /* @__PURE__ */ $.pointerType("tallypush.histogram"))
	}

	public async Capabilities(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<tally.Scope | null, null>>(this.Scope).Capabilities()
	}

	public async Counter(name: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<tally.Scope | null, null>>(this.Scope).Counter(name)
	}

	public async Gauge(name: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<tally.Scope | null, null>>(this.Scope).Gauge(name)
	}

	public async Histogram(name: any, buckets: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<tally.Scope | null, null>>(this.Scope).Histogram(name, buckets)
	}

	public async SubScope(name: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<tally.Scope | null, null>>(this.Scope).SubScope(name)
	}

	public async Tagged(tags: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<tally.Scope | null, null>>(this.Scope).Tagged(tags)
	}

	public async Timer(name: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<tally.Scope | null, null>>(this.Scope).Timer(name)
	}

	static __typeInfo = $.registerStructType(
		"tallypush.target",
		() => new target(),
		() => [$.methodSignature("NewCounter", [["spec", "push.Spec"]], ["push.Counter"], true), $.methodSignature("NewGauge", [["spec", "push.Spec"]], ["push.Gauge"], true), $.methodSignature("NewHistogram", [["spec", "push.HistogramSpec"]], ["push.Histogram"], true), $.methodSignature("Capabilities", [], ["tally.Capabilities"]), $.methodSignature("Counter", [["name", /* @__PURE__ */ $.basicType("string")]], ["tally.Counter"]), $.methodSignature("Gauge", [["name", /* @__PURE__ */ $.basicType("string")]], ["tally.Gauge"]), $.methodSignature("Histogram", [["name", /* @__PURE__ */ $.basicType("string")], ["buckets", "tally.Buckets"]], ["tally.Histogram"]), $.methodSignature("SubScope", [["name", /* @__PURE__ */ $.basicType("string")]], ["tally.Scope"]), $.methodSignature("Tagged", [["tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]], ["tally.Scope"]), $.methodSignature("Timer", [["name", /* @__PURE__ */ $.basicType("string")]], ["tally.Timer"])],
		target,
		() => [/* @__PURE__ */ $.structField("Scope", "tally.Scope", [0], 0, true, { anonymous: true })]
	)
}

export class counter {
	public get Counter(): tally.Counter | null {
		return this._fields.Counter
	}

	public set Counter(value: tally.Counter | null) {
		this._fields.Counter = value
	}

	public get last(): bigint {
		return this._fields.last
	}

	public set last(value: bigint) {
		this._fields.last = value
	}

	public _fields: {
		Counter: tally.Counter | null
		last: bigint
	}

	constructor(init?: Partial<{Counter?: tally.Counter | null, last?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Counter: init?.Counter ?? (null! as tally.Counter | null),
			last: init?.last ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): counter {
		return new counter(this, true)
	}

	public __goscriptAssign(source: counter): void {
		const target = this._fields
		const values = source._fields
		target.Counter = $.assignFieldValue(target.Counter, values.Counter, "tally.Counter")
		target.last = values.last
	}

	public async Set(total: bigint): globalThis.Promise<void> {
		let c: counter | $.VarRef<counter> | null = this;
		const c$: counter = c == null ? $.pointerTarget<counter>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<counter>(c)
		let delta = $.int64Sub(total, (c$ as counter).last);
		;(c$ as counter).last = total
		await $.pointerValue<Exclude<tally.Counter, null>>((c$ as counter).Counter).Inc(delta)
	}

	public async Inc(delta: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<tally.Counter | null, null>>(this.Counter).Inc(delta)
	}

	static __typeInfo = $.registerStructType(
		"tallypush.counter",
		() => new counter(),
		() => [$.methodSignature("Set", [["total", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("Inc", [["delta", /* @__PURE__ */ $.basicType("int64")]])],
		counter,
		() => [/* @__PURE__ */ $.structField("Counter", "tally.Counter", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("last", /* @__PURE__ */ $.basicType("int64"), [1], 16, false, { pkgPath: "go.uber.org/net/metrics/tallypush" })]
	)
}

export class gauge {
	public get Gauge(): tally.Gauge | null {
		return this._fields.Gauge
	}

	public set Gauge(value: tally.Gauge | null) {
		this._fields.Gauge = value
	}

	public _fields: {
		Gauge: tally.Gauge | null
	}

	constructor(init?: Partial<{Gauge?: tally.Gauge | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Gauge: init?.Gauge ?? (null! as tally.Gauge | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): gauge {
		return new gauge(this, true)
	}

	public __goscriptAssign(source: gauge): void {
		const target = this._fields
		const values = source._fields
		target.Gauge = $.assignFieldValue(target.Gauge, values.Gauge, "tally.Gauge")
	}

	public async Set(value: bigint): globalThis.Promise<void> {
		const tg: gauge | $.VarRef<gauge> | null = this;
		await $.pointerValue<Exclude<tally.Gauge, null>>($.pointerValue<gauge>(tg).Gauge).Update(globalThis.Number(value))
	}

	public async Update(value: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<tally.Gauge | null, null>>(this.Gauge).Update(value)
	}

	static __typeInfo = $.registerStructType(
		"tallypush.gauge",
		() => new gauge(),
		() => [$.methodSignature("Set", [["value", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("Update", [["value", /* @__PURE__ */ $.basicType("float64")]])],
		gauge,
		() => [/* @__PURE__ */ $.structField("Gauge", "tally.Gauge", [0], 0, true, { anonymous: true })]
	)
}

export class histogram {
	public get Histogram(): tally.Histogram | null {
		return this._fields.Histogram
	}

	public set Histogram(value: tally.Histogram | null) {
		this._fields.Histogram = value
	}

	// lasts keeps the last value pushed to tally
	public get lasts(): $.Slice<bigint> {
		return this._fields.lasts
	}

	public set lasts(value: $.Slice<bigint>) {
		this._fields.lasts = value
	}

	// bucketValue keeps the static bucket value to be able to report correctly
	public get bucketValue(): $.Slice<bigint> {
		return this._fields.bucketValue
	}

	public set bucketValue(value: $.Slice<bigint>) {
		this._fields.bucketValue = value
	}

	public _fields: {
		Histogram: tally.Histogram | null
		lasts: $.Slice<bigint>
		bucketValue: $.Slice<bigint>
	}

	constructor(init?: Partial<{Histogram?: tally.Histogram | null, lasts?: $.Slice<bigint>, bucketValue?: $.Slice<bigint>}>, __goscriptValue?: boolean) {
		this._fields = {
			Histogram: init?.Histogram ?? (null! as tally.Histogram | null),
			lasts: init?.lasts ?? (null! as $.Slice<bigint>),
			bucketValue: init?.bucketValue ?? (null! as $.Slice<bigint>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): histogram {
		return new histogram(this, true)
	}

	public __goscriptAssign(source: histogram): void {
		const target = this._fields
		const values = source._fields
		target.Histogram = $.assignFieldValue(target.Histogram, values.Histogram, "tally.Histogram")
		target.lasts = values.lasts
		target.bucketValue = values.bucketValue
	}

	public async Set(bucket: bigint, total: bigint): globalThis.Promise<void> {
		const th: histogram | $.VarRef<histogram> | null = this;
		const th$: histogram = th == null ? $.pointerTarget<histogram>(th) : (th as any).__isVarRef === true ? (th as any).value : (th as any).__goValue === undefined ? (th as any) : $.pointerTarget<histogram>(th)
		let index = sort.Search($.sliceLen((th$ as histogram).lasts), $.functionValue((i: number): boolean => {
			return $.arrayIndex((th$ as histogram).bucketValue!, i) >= bucket
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))

		void (th !== null && (th as any).__isVarRef !== true && (th as any).__goValue === undefined ? ((th as any) as histogram).ensureBucket(index, bucket, false) : histogram.prototype.ensureBucket.call(th, index, bucket, false))
		await (th !== null && (th as any).__isVarRef !== true && (th as any).__goValue === undefined ? ((th as any) as histogram).recordValue(index, bucket, total) : histogram.prototype.recordValue.call(th, index, bucket, total))
	}

	public async SetIndex(bucketIndex: number, bucket: bigint, total: bigint): globalThis.Promise<void> {
		const th: histogram | $.VarRef<histogram> | null = this;
		void (th !== null && (th as any).__isVarRef !== true && (th as any).__goValue === undefined ? ((th as any) as histogram).ensureBucket(bucketIndex, bucket, true) : histogram.prototype.ensureBucket.call(th, bucketIndex, bucket, true))
		await (th !== null && (th as any).__isVarRef !== true && (th as any).__goValue === undefined ? ((th as any) as histogram).recordValue(bucketIndex, bucket, total) : histogram.prototype.recordValue.call(th, bucketIndex, bucket, total))
	}

	public ensureBucket(index: number, bucket: bigint, panicOnError: boolean): void {
		let th: histogram | $.VarRef<histogram> | null = this;
		const th$: histogram = th == null ? $.pointerTarget<histogram>(th) : (th as any).__isVarRef === true ? (th as any).value : (th as any).__goValue === undefined ? (th as any) : $.pointerTarget<histogram>(th)
		switch ((true as boolean)) {
			case index >= $.sliceLen((th$ as histogram).bucketValue):
			{
				;(th$ as histogram).bucketValue = $.appendOne((th$ as histogram).bucketValue, bucket);
				;(th$ as histogram).lasts = $.appendOne((th$ as histogram).lasts, 0)
				break
			}
			case bucket != $.arrayIndex((th$ as histogram).bucketValue!, index):
			{
				if (panicOnError) {
					$.panic("insertion is not supported")
				}
				;(th$ as histogram).lasts = $.appendSlice($.goSlice((th$ as histogram).lasts, undefined, index), $.appendSlice($.arrayToSlice<bigint>([0n]), $.goSlice((th$ as histogram).lasts, index, undefined)));
				;(th$ as histogram).bucketValue = $.appendSlice($.goSlice((th$ as histogram).bucketValue, undefined, index), $.appendSlice($.arrayToSlice<bigint>([bucket]), $.goSlice((th$ as histogram).bucketValue, index, undefined)))
				break
			}
		}
	}

	public async recordValue(index: number, bucket: bigint, total: bigint): globalThis.Promise<void> {
		let th: histogram | $.VarRef<histogram> | null = this;
		const th$: histogram = th == null ? $.pointerTarget<histogram>(th) : (th as any).__isVarRef === true ? (th as any).value : (th as any).__goValue === undefined ? (th as any) : $.pointerTarget<histogram>(th)
		let delta = $.int64Sub(total, $.arrayIndex((th$ as histogram).lasts!, index))
		$.sliceElems((th$ as histogram).lasts!)[$.sliceSlot((th$ as histogram).lasts!, index)] = total

		for (let i = 0n; i < delta; i++) {
			await $.pointerValue<Exclude<tally.Histogram, null>>((th$ as histogram).Histogram).RecordValue(globalThis.Number(bucket))
		}
	}

	public async RecordDuration(value: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<tally.Histogram | null, null>>(this.Histogram).RecordDuration(value)
	}

	public async RecordValue(value: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<tally.Histogram | null, null>>(this.Histogram).RecordValue(value)
	}

	public async Start(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<tally.Histogram | null, null>>(this.Histogram).Start()
	}

	static __typeInfo = $.registerStructType(
		"tallypush.histogram",
		() => new histogram(),
		() => [$.methodSignature("Set", [["bucket", /* @__PURE__ */ $.basicType("int64")], ["total", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("SetIndex", [["bucketIndex", /* @__PURE__ */ $.basicType("int")], ["bucket", /* @__PURE__ */ $.basicType("int64")], ["total", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("ensureBucket", [["index", /* @__PURE__ */ $.basicType("int")], ["bucket", /* @__PURE__ */ $.basicType("int64")], ["panicOnError", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("recordValue", [["index", /* @__PURE__ */ $.basicType("int")], ["bucket", /* @__PURE__ */ $.basicType("int64")], ["total", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("RecordDuration", [["value", /* @__PURE__ */ $.basicType("int64", "time.Duration")]]), $.methodSignature("RecordValue", [["value", /* @__PURE__ */ $.basicType("float64")]]), $.methodSignature("Start", [], ["tally.Stopwatch"])],
		histogram,
		() => [/* @__PURE__ */ $.structField("Histogram", "tally.Histogram", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("lasts", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")), [1], 16, false, { pkgPath: "go.uber.org/net/metrics/tallypush" }), /* @__PURE__ */ $.structField("bucketValue", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")), [2], 40, false, { pkgPath: "go.uber.org/net/metrics/tallypush" })]
	)
}

export function New(scope: tally.Scope | null): push.Target | null {
	return $.interfaceValue<push.Target | null>(new target({Scope: scope}), "*tallypush.target", /* @__PURE__ */ $.pointerType("tallypush.target"))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({AsDurations: (receiver: any, ...args: any[]) => (tally.ValueBuckets_AsDurations as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), AsValues: (receiver: any, ...args: any[]) => (tally.ValueBuckets_AsValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (tally.ValueBuckets_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (tally.ValueBuckets_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (tally.ValueBuckets_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (tally.ValueBuckets_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"), "tally.ValueBuckets"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("AsDurations", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))]), $.methodSignature("AsValues", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptAwait: any
