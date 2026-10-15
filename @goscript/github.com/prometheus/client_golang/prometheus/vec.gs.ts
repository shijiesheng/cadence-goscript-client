// Generated file based on vec.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sync from "@goscript/sync/index.js"

import * as model from "@goscript/github.com/prometheus/common/model/index.js"

import * as io_prometheus_client from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as __goscript_desc from "./desc.gs.ts"

import * as __goscript_fnv from "./fnv.gs.ts"

import * as __goscript_labels from "./labels.gs.ts"

import * as __goscript_metric from "./metric.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/sync/index.js"
import "@goscript/github.com/prometheus/common/model/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "./desc.gs.ts"
import "./fnv.gs.ts"
import "./labels.gs.ts"
import "./metric.gs.ts"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus", ["prometheus.MetricVec", "prometheus.metricWithLabelValues", "prometheus.curriedLabelValue", "prometheus.metricMap"])

export class MetricVec {
	public get metricMap(): metricMap | $.VarRef<metricMap> | null {
		return this._fields.metricMap
	}

	public set metricMap(value: metricMap | $.VarRef<metricMap> | null) {
		this._fields.metricMap = value
	}

	public get curry(): $.Slice<curriedLabelValue> {
		return this._fields.curry
	}

	public set curry(value: $.Slice<curriedLabelValue>) {
		this._fields.curry = value
	}

	// hashAdd and hashAddByte can be replaced for testing collision handling.
	public get hashAdd(): ((h: bigint, s: string) => bigint | globalThis.Promise<bigint>) | null {
		return this._fields.hashAdd
	}

	public set hashAdd(value: ((h: bigint, s: string) => bigint | globalThis.Promise<bigint>) | null) {
		this._fields.hashAdd = value
	}

	public get hashAddByte(): ((h: bigint, b: number) => bigint | globalThis.Promise<bigint>) | null {
		return this._fields.hashAddByte
	}

	public set hashAddByte(value: ((h: bigint, b: number) => bigint | globalThis.Promise<bigint>) | null) {
		this._fields.hashAddByte = value
	}

	public _fields: {
		metricMap: metricMap | $.VarRef<metricMap> | null
		curry: $.Slice<curriedLabelValue>
		hashAdd: ((h: bigint, s: string) => bigint | globalThis.Promise<bigint>) | null
		hashAddByte: ((h: bigint, b: number) => bigint | globalThis.Promise<bigint>) | null
	}

	constructor(init?: Partial<{metricMap?: metricMap | $.VarRef<metricMap> | null, curry?: $.Slice<curriedLabelValue>, hashAdd?: ((h: bigint, s: string) => bigint | globalThis.Promise<bigint>) | null, hashAddByte?: ((h: bigint, b: number) => bigint | globalThis.Promise<bigint>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			metricMap: init?.metricMap ?? (null! as metricMap | $.VarRef<metricMap> | null),
			curry: init?.curry ?? (null! as $.Slice<curriedLabelValue>),
			hashAdd: init?.hashAdd ?? (null! as ((h: bigint, s: string) => bigint | globalThis.Promise<bigint>) | null),
			hashAddByte: init?.hashAddByte ?? (null! as ((h: bigint, b: number) => bigint | globalThis.Promise<bigint>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MetricVec {
		return new MetricVec(this, true)
	}

	public __goscriptAssign(source: MetricVec): void {
		const target = this._fields
		const values = source._fields
		target.metricMap = values.metricMap
		target.curry = values.curry
		target.hashAdd = values.hashAdd
		target.hashAddByte = values.hashAddByte
	}

	public async Collect(ch: $.Channel<__goscript_metric.Metric | null> | null): globalThis.Promise<void> {
		const m: MetricVec | $.VarRef<MetricVec> | null = this;
		await metricMap.prototype.Collect.call($.pointerValue<MetricVec>(m).metricMap, ch)
	}

	public CurryWith(labels: __goscript_labels.Labels): [MetricVec | $.VarRef<MetricVec> | null, $.GoError] {
		const m: MetricVec | $.VarRef<MetricVec> | null = this;
		const m$: MetricVec = m == null ? $.pointerTarget<MetricVec>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<MetricVec>(m)
		let newCurry: $.Slice<curriedLabelValue> = null! as $.Slice<curriedLabelValue>
		let oldCurry: $.Slice<curriedLabelValue> = (m$ as MetricVec).curry
		let iCurry: number = 0
		for (let __goscriptRangeTarget0 = $.pointerValue<__goscript_desc.Desc>($.pointerValue<metricMap>((m$ as MetricVec).metricMap).desc).variableLabels, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(oldCurry), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let label = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as string)
			let [val, ok] = $.mapGet<string, string, string>(labels, label, "")
			if ((iCurry < __goscriptSliceWindow0.length) && (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iCurry)] as curriedLabelValue).index == i)) {
				if (ok) {
					return [null, fmt.Errorf("label name %q is already curried", label)]
				}
				newCurry = $.appendOne(newCurry, (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iCurry)] as curriedLabelValue)).clone())
				iCurry++
			} else {
				if (!ok) {
					continue
				}
				newCurry = $.appendOne(newCurry, new curriedLabelValue({index: i, value: val}, true))
			}
		}
		{
			let l = ($.sliceLen(oldCurry) + $.len(labels)) - $.sliceLen(newCurry)
			if (l > 0) {
				return [null, fmt.Errorf("%d unknown label(s) found during currying", $.basicInterfaceValue(l, "int"))]
			}
		}

		return [new MetricVec({metricMap: (m$ as MetricVec).metricMap, curry: newCurry, hashAdd: (m$ as MetricVec).hashAdd, hashAddByte: (m$ as MetricVec).hashAddByte}), null]
	}

	public async Delete(labels: __goscript_labels.Labels): globalThis.Promise<boolean> {
		const m: MetricVec | $.VarRef<MetricVec> | null = this;
		const m$: MetricVec = m == null ? $.pointerTarget<MetricVec>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<MetricVec>(m)
		let [h, err] = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as MetricVec).hashLabels(labels) : MetricVec.prototype.hashLabels.call(m, labels))
		if (err != null) {
			return false
		}

		return metricMap.prototype.deleteByHashWithLabels.call((m$ as MetricVec).metricMap, h, labels, (m$ as MetricVec).curry)
	}

	public async DeleteLabelValues(lvs: $.Slice<string>): globalThis.Promise<boolean> {
		const m: MetricVec | $.VarRef<MetricVec> | null = this;
		const m$: MetricVec = m == null ? $.pointerTarget<MetricVec>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<MetricVec>(m)
		let [h, err] = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as MetricVec).hashLabelValues(lvs) : MetricVec.prototype.hashLabelValues.call(m, lvs))
		if (err != null) {
			return false
		}

		return metricMap.prototype.deleteByHashWithLabelValues.call((m$ as MetricVec).metricMap, h, lvs, (m$ as MetricVec).curry)
	}

	public async Describe(ch: $.Channel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null): globalThis.Promise<void> {
		const m: MetricVec | $.VarRef<MetricVec> | null = this;
		await metricMap.prototype.Describe.call($.pointerValue<MetricVec>(m).metricMap, ch)
	}

	public async GetMetricWith(labels: __goscript_labels.Labels): globalThis.Promise<[__goscript_metric.Metric | null, $.GoError]> {
		const m: MetricVec | $.VarRef<MetricVec> | null = this;
		const m$: MetricVec = m == null ? $.pointerTarget<MetricVec>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<MetricVec>(m)
		let [h, err] = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as MetricVec).hashLabels(labels) : MetricVec.prototype.hashLabels.call(m, labels))
		if (err != null) {
			return [null, err]
		}

		return [await metricMap.prototype.getOrCreateMetricWithLabels.call((m$ as MetricVec).metricMap, h, labels, (m$ as MetricVec).curry), null]
	}

	public async GetMetricWithLabelValues(lvs: $.Slice<string>): globalThis.Promise<[__goscript_metric.Metric | null, $.GoError]> {
		const m: MetricVec | $.VarRef<MetricVec> | null = this;
		const m$: MetricVec = m == null ? $.pointerTarget<MetricVec>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<MetricVec>(m)
		let [h, err] = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as MetricVec).hashLabelValues(lvs) : MetricVec.prototype.hashLabelValues.call(m, lvs))
		if (err != null) {
			return [null, err]
		}

		return [await metricMap.prototype.getOrCreateMetricWithLabelValues.call((m$ as MetricVec).metricMap, h, lvs, (m$ as MetricVec).curry), null]
	}

	public async Reset(): globalThis.Promise<void> {
		const m: MetricVec | $.VarRef<MetricVec> | null = this;
		await metricMap.prototype.Reset.call($.pointerValue<MetricVec>(m).metricMap)
	}

	public async hashLabelValues(vals: $.Slice<string>): globalThis.Promise<[bigint, $.GoError]> {
		const m: MetricVec | $.VarRef<MetricVec> | null = this;
		const m$: MetricVec = m == null ? $.pointerTarget<MetricVec>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<MetricVec>(m)
		{
			let err = __goscript_labels.validateLabelValues(vals, $.sliceLen($.pointerValue<__goscript_desc.Desc>($.pointerValue<metricMap>((m$ as MetricVec).metricMap).desc).variableLabels) - $.sliceLen((m$ as MetricVec).curry))
			if (err != null) {
				return [0n, err]
			}
		}

		let h: bigint = __goscript_fnv.hashNew()
		let __goscriptShadow0: $.Slice<curriedLabelValue> = (m$ as MetricVec).curry
		let iVals: number = 0
		let iCurry: number = 0
		for (let __goscriptSliceWindow1 = $.sliceRange(__goscriptShadow0), __goscriptSliceWindow2 = $.sliceRange(vals), i = 0; i < $.sliceLen($.pointerValue<__goscript_desc.Desc>($.pointerValue<metricMap>((m$ as MetricVec).metricMap).desc).variableLabels); i++) {
			if ((iCurry < __goscriptSliceWindow1.length) && (((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iCurry)] as curriedLabelValue).index == i)) {
				h = (__goscriptAwait = (m$ as MetricVec).hashAdd!(h, ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iCurry)] as curriedLabelValue).value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				iCurry++
			} else {
				h = (__goscriptAwait = (m$ as MetricVec).hashAdd!(h, ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, iVals)] as string)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				iVals++
			}
			h = (__goscriptAwait = (m$ as MetricVec).hashAddByte!(h, 255), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return [h, null]
	}

	public async hashLabels(labels: __goscript_labels.Labels): globalThis.Promise<[bigint, $.GoError]> {
		const m: MetricVec | $.VarRef<MetricVec> | null = this;
		const m$: MetricVec = m == null ? $.pointerTarget<MetricVec>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<MetricVec>(m)
		{
			let err = __goscript_labels.validateValuesInLabels(labels, $.sliceLen($.pointerValue<__goscript_desc.Desc>($.pointerValue<metricMap>((m$ as MetricVec).metricMap).desc).variableLabels) - $.sliceLen((m$ as MetricVec).curry))
			if (err != null) {
				return [0n, err]
			}
		}

		let h: bigint = __goscript_fnv.hashNew()
		let __goscriptShadow1: $.Slice<curriedLabelValue> = (m$ as MetricVec).curry
		let iCurry: number = 0
		for (let __goscriptRangeTarget1 = $.pointerValue<__goscript_desc.Desc>($.pointerValue<metricMap>((m$ as MetricVec).metricMap).desc).variableLabels, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow3 = $.sliceRange(__goscriptShadow1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let label = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as string)
			let [val, ok] = $.mapGet<string, string, string>(labels, label, "")
			if ((iCurry < __goscriptSliceWindow3.length) && (((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iCurry)] as curriedLabelValue).index == i)) {
				if (ok) {
					return [0n, fmt.Errorf("label name %q is already curried", label)]
				}
				h = (__goscriptAwait = (m$ as MetricVec).hashAdd!(h, ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iCurry)] as curriedLabelValue).value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				iCurry++
			} else {
				if (!ok) {
					return [0n, fmt.Errorf("label name %q missing in label map", label)]
				}
				h = (__goscriptAwait = (m$ as MetricVec).hashAdd!(h, val), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			h = (__goscriptAwait = (m$ as MetricVec).hashAddByte!(h, 255), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return [h, null]
	}

	public async deleteByHashWithLabelValues(h: any, lvs: any, curry: any): globalThis.Promise<any> {
		return await $.pointerValue<metricMap>(this.metricMap).deleteByHashWithLabelValues(h, lvs, curry)
	}

	public async deleteByHashWithLabels(h: any, labels: any, curry: any): globalThis.Promise<any> {
		return await $.pointerValue<metricMap>(this.metricMap).deleteByHashWithLabels(h, labels, curry)
	}

	public getMetricWithHashAndLabelValues(h: any, lvs: any, curry: any): any {
		return $.pointerValue<metricMap>(this.metricMap).getMetricWithHashAndLabelValues(h, lvs, curry)
	}

	public getMetricWithHashAndLabels(h: any, labels: any, curry: any): any {
		return $.pointerValue<metricMap>(this.metricMap).getMetricWithHashAndLabels(h, labels, curry)
	}

	public async getOrCreateMetricWithLabelValues(hash: any, lvs: any, curry: any): globalThis.Promise<any> {
		return await $.pointerValue<metricMap>(this.metricMap).getOrCreateMetricWithLabelValues(hash, lvs, curry)
	}

	public async getOrCreateMetricWithLabels(hash: any, labels: any, curry: any): globalThis.Promise<any> {
		return await $.pointerValue<metricMap>(this.metricMap).getOrCreateMetricWithLabels(hash, labels, curry)
	}

	static __typeInfo = $.registerStructType(
		"prometheus.MetricVec",
		() => new MetricVec(),
		() => [$.methodSignature("Collect", [["ch", /* @__PURE__ */ $.channelType("prometheus.Metric", "send")]], [], true), $.methodSignature("CurryWith", [["labels", "prometheus.Labels"]], [/* @__PURE__ */ $.pointerType("prometheus.MetricVec"), "error"], true), $.methodSignature("Delete", [["labels", "prometheus.Labels"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("DeleteLabelValues", [["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Describe", [["ch", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]], [], true), $.methodSignature("GetMetricWith", [["labels", "prometheus.Labels"]], ["prometheus.Metric", "error"], true), $.methodSignature("GetMetricWithLabelValues", [["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["prometheus.Metric", "error"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("hashLabelValues", [["vals", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.basicType("uint64"), "error"], true), $.methodSignature("hashLabels", [["labels", "prometheus.Labels"]], [/* @__PURE__ */ $.basicType("uint64"), "error"], true), $.methodSignature("deleteByHashWithLabelValues", [["h", /* @__PURE__ */ $.basicType("uint64")], ["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("deleteByHashWithLabels", [["h", /* @__PURE__ */ $.basicType("uint64")], ["labels", "prometheus.Labels"], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getMetricWithHashAndLabelValues", [["h", /* @__PURE__ */ $.basicType("uint64")], ["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric", /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getMetricWithHashAndLabels", [["h", /* @__PURE__ */ $.basicType("uint64")], ["labels", "prometheus.Labels"], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric", /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getOrCreateMetricWithLabelValues", [["hash", /* @__PURE__ */ $.basicType("uint64")], ["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric"]), $.methodSignature("getOrCreateMetricWithLabels", [["hash", /* @__PURE__ */ $.basicType("uint64")], ["labels", "prometheus.Labels"], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric"])],
		MetricVec,
		() => [/* @__PURE__ */ $.structField("metricMap", /* @__PURE__ */ $.pointerType("prometheus.metricMap"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus", anonymous: true }), /* @__PURE__ */ $.structField("curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue"), [1], 8, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("hashAdd", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("uint64")] } as $.FunctionTypeInfo), [2], 32, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("hashAddByte", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.basicType("uint8")], results: [/* @__PURE__ */ $.basicType("uint64")] } as $.FunctionTypeInfo), [3], 40, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export class metricWithLabelValues {
	public get values(): $.Slice<string> {
		return this._fields.values
	}

	public set values(value: $.Slice<string>) {
		this._fields.values = value
	}

	public get metric(): __goscript_metric.Metric | null {
		return this._fields.metric
	}

	public set metric(value: __goscript_metric.Metric | null) {
		this._fields.metric = value
	}

	public _fields: {
		values: $.Slice<string>
		metric: __goscript_metric.Metric | null
	}

	constructor(init?: Partial<{values?: $.Slice<string>, metric?: __goscript_metric.Metric | null}>, __goscriptValue?: boolean) {
		this._fields = {
			values: init?.values ?? (null! as $.Slice<string>),
			metric: init?.metric ?? (null! as __goscript_metric.Metric | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): metricWithLabelValues {
		return new metricWithLabelValues(this, true)
	}

	public __goscriptAssign(source: metricWithLabelValues): void {
		const target = this._fields
		const values = source._fields
		target.values = values.values
		target.metric = $.assignFieldValue(target.metric, values.metric, "prometheus.Metric")
	}

	static __typeInfo = $.registerStructType(
		"prometheus.metricWithLabelValues",
		() => new metricWithLabelValues(),
		() => [],
		metricWithLabelValues,
		() => [/* @__PURE__ */ $.structField("values", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("metric", "prometheus.Metric", [1], 24, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export class curriedLabelValue {
	public get index(): number {
		return this._fields.index
	}

	public set index(value: number) {
		this._fields.index = value
	}

	public get value(): string {
		return this._fields.value
	}

	public set value(value: string) {
		this._fields.value = value
	}

	public _fields: {
		index: number
		value: string
	}

	constructor(init?: Partial<{index?: number, value?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			index: init?.index ?? (0 as number),
			value: init?.value ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): curriedLabelValue {
		return new curriedLabelValue(this, true)
	}

	public __goscriptAssign(source: curriedLabelValue): void {
		const target = this._fields
		const values = source._fields
		target.index = values.index
		target.value = values.value
	}

	static __typeInfo = $.registerStructType(
		"prometheus.curriedLabelValue",
		() => new curriedLabelValue(),
		() => [],
		curriedLabelValue,
		() => [/* @__PURE__ */ $.structField("index", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("value", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export class metricMap {
	public get mtx(): sync.RWMutex {
		return this._fields.mtx
	}

	public set mtx(value: sync.RWMutex) {
		this._fields.mtx = value
	}

	public get metrics(): globalThis.Map<bigint, $.Slice<metricWithLabelValues>> | null {
		return this._fields.metrics
	}

	public set metrics(value: globalThis.Map<bigint, $.Slice<metricWithLabelValues>> | null) {
		this._fields.metrics = value
	}

	public get desc(): __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null {
		return this._fields.desc
	}

	public set desc(value: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null) {
		this._fields.desc = value
	}

	public get newMetric(): ((labelValues: $.Slice<string>) => __goscript_metric.Metric | null | globalThis.Promise<__goscript_metric.Metric | null>) | null {
		return this._fields.newMetric
	}

	public set newMetric(value: ((labelValues: $.Slice<string>) => __goscript_metric.Metric | null | globalThis.Promise<__goscript_metric.Metric | null>) | null) {
		this._fields.newMetric = value
	}

	public _fields: {
		mtx: sync.RWMutex
		metrics: globalThis.Map<bigint, $.Slice<metricWithLabelValues>> | null
		desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null
		newMetric: ((labelValues: $.Slice<string>) => __goscript_metric.Metric | null | globalThis.Promise<__goscript_metric.Metric | null>) | null
	}

	constructor(init?: Partial<{mtx?: sync.RWMutex, metrics?: globalThis.Map<bigint, $.Slice<metricWithLabelValues>> | null, desc?: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, newMetric?: ((labelValues: $.Slice<string>) => __goscript_metric.Metric | null | globalThis.Promise<__goscript_metric.Metric | null>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mtx: init?.mtx ? $.markAsStructValue($.cloneStructValue(init.mtx)) : $.markAsStructValue(new sync.RWMutex()),
			metrics: init?.metrics ?? (null! as globalThis.Map<bigint, $.Slice<metricWithLabelValues>> | null),
			desc: init?.desc ?? (null! as __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null),
			newMetric: init?.newMetric ?? (null! as ((labelValues: $.Slice<string>) => __goscript_metric.Metric | null | globalThis.Promise<__goscript_metric.Metric | null>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): metricMap {
		return new metricMap(this, true)
	}

	public __goscriptAssign(source: metricMap): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mtx, values.mtx)
		target.metrics = values.metrics
		target.desc = values.desc
		target.newMetric = values.newMetric
	}

	public async Collect(ch: $.Channel<__goscript_metric.Metric | null> | null): globalThis.Promise<void> {
		const m: metricMap | $.VarRef<metricMap> | null = this;
		using __defer = new $.DisposableStack()
		const m$: metricMap = m == null ? $.pointerTarget<metricMap>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<metricMap>(m)
		await (m$ as metricMap).mtx.RLock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((m$ as metricMap).mtx), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		for (const [__rangeKey, __goscriptRangeShadow0] of (m$ as metricMap).metrics?.entries() ?? []) {
			for (let __goscriptRangeTarget2 = __goscriptRangeShadow0, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let metric = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as metricWithLabelValues)).clone()
				await $.chanSend(ch, metric.metric)
			}
		}
	}

	public async Describe(ch: $.Channel<__goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null> | null): globalThis.Promise<void> {
		const m: metricMap | $.VarRef<metricMap> | null = this;
		await $.chanSend(ch, $.pointerValue<metricMap>(m).desc)
	}

	public async Reset(): globalThis.Promise<void> {
		const m: metricMap | $.VarRef<metricMap> | null = this;
		using __defer = new $.DisposableStack()
		const m$: metricMap = m == null ? $.pointerTarget<metricMap>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<metricMap>(m)
		await (m$ as metricMap).mtx.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as metricMap).mtx), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })

		for (const [h, __rangeValue] of (m$ as metricMap).metrics?.entries() ?? []) {
			$.deleteMapEntry((m$ as metricMap).metrics, h)
		}
	}

	public async deleteByHashWithLabelValues(h: bigint, lvs: $.Slice<string>, curry: $.Slice<curriedLabelValue>): globalThis.Promise<boolean> {
		let m: metricMap | $.VarRef<metricMap> | null = this;
		using __defer = new $.DisposableStack()
		const m$: metricMap = m == null ? $.pointerTarget<metricMap>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<metricMap>(m)
		await (m$ as metricMap).mtx.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as metricMap).mtx), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		let __goscriptTuple0: any = $.mapGet<bigint, $.Slice<metricWithLabelValues>, $.Slice<metricWithLabelValues>>((m$ as metricMap).metrics, h, null)
		let metrics: $.Slice<metricWithLabelValues> = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			return false
		}

		let i = findMetricWithLabelValues(metrics, lvs, curry)
		if (i >= $.sliceLen(metrics)) {
			return false
		}

		if ($.sliceLen(metrics) > 1) {
			let old: $.Slice<metricWithLabelValues> = metrics
			$.mapSet((m$ as metricMap).metrics, h, $.appendSlice($.goSlice(metrics, undefined, i), $.goSlice(metrics, i + 1, undefined)))
			$.assignStruct($.sliceElems(old!)[$.sliceSlot(old!, $.sliceLen(old) - 1)], new metricWithLabelValues(undefined, true))
		} else {
			$.deleteMapEntry((m$ as metricMap).metrics, h)
		}
		return true
	}

	public async deleteByHashWithLabels(h: bigint, labels: __goscript_labels.Labels, curry: $.Slice<curriedLabelValue>): globalThis.Promise<boolean> {
		let m: metricMap | $.VarRef<metricMap> | null = this;
		using __defer = new $.DisposableStack()
		const m$: metricMap = m == null ? $.pointerTarget<metricMap>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<metricMap>(m)
		await (m$ as metricMap).mtx.Lock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as metricMap).mtx), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })

		let __goscriptTuple1: any = $.mapGet<bigint, $.Slice<metricWithLabelValues>, $.Slice<metricWithLabelValues>>((m$ as metricMap).metrics, h, null)
		let metrics: $.Slice<metricWithLabelValues> = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (!ok) {
			return false
		}
		let i = findMetricWithLabels((m$ as metricMap).desc, metrics, labels, curry)
		if (i >= $.sliceLen(metrics)) {
			return false
		}

		if ($.sliceLen(metrics) > 1) {
			let old: $.Slice<metricWithLabelValues> = metrics
			$.mapSet((m$ as metricMap).metrics, h, $.appendSlice($.goSlice(metrics, undefined, i), $.goSlice(metrics, i + 1, undefined)))
			$.assignStruct($.sliceElems(old!)[$.sliceSlot(old!, $.sliceLen(old) - 1)], new metricWithLabelValues(undefined, true))
		} else {
			$.deleteMapEntry((m$ as metricMap).metrics, h)
		}
		return true
	}

	public getMetricWithHashAndLabelValues(h: bigint, lvs: $.Slice<string>, curry: $.Slice<curriedLabelValue>): [__goscript_metric.Metric | null, boolean] {
		const m: metricMap | $.VarRef<metricMap> | null = this;
		let __goscriptTuple2: any = $.mapGet<bigint, $.Slice<metricWithLabelValues>, $.Slice<metricWithLabelValues>>($.pointerValue<metricMap>(m).metrics, h, null)
		let metrics: $.Slice<metricWithLabelValues> = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (ok) {
			{
				let i = findMetricWithLabelValues(metrics, lvs, curry)
				if (i < $.sliceLen(metrics)) {
					return [$.arrayIndex(metrics!, i).metric, true]
				}
			}
		}
		return [null, false]
	}

	public getMetricWithHashAndLabels(h: bigint, labels: __goscript_labels.Labels, curry: $.Slice<curriedLabelValue>): [__goscript_metric.Metric | null, boolean] {
		const m: metricMap | $.VarRef<metricMap> | null = this;
		const m$: metricMap = m == null ? $.pointerTarget<metricMap>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<metricMap>(m)
		let __goscriptTuple3: any = $.mapGet<bigint, $.Slice<metricWithLabelValues>, $.Slice<metricWithLabelValues>>((m$ as metricMap).metrics, h, null)
		let metrics: $.Slice<metricWithLabelValues> = __goscriptTuple3[0]
		let ok = __goscriptTuple3[1]
		if (ok) {
			{
				let i = findMetricWithLabels((m$ as metricMap).desc, metrics, labels, curry)
				if (i < $.sliceLen(metrics)) {
					return [$.arrayIndex(metrics!, i).metric, true]
				}
			}
		}
		return [null, false]
	}

	public async getOrCreateMetricWithLabelValues(hash: bigint, lvs: $.Slice<string>, curry: $.Slice<curriedLabelValue>): globalThis.Promise<__goscript_metric.Metric | null> {
		let m: metricMap | $.VarRef<metricMap> | null = this;
		using __defer = new $.DisposableStack()
		const m$: metricMap = m == null ? $.pointerTarget<metricMap>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<metricMap>(m)
		await (m$ as metricMap).mtx.RLock()
		let [metric, ok] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as metricMap).getMetricWithHashAndLabelValues(hash, lvs, curry) : metricMap.prototype.getMetricWithHashAndLabelValues.call(m, hash, lvs, curry))
		void (m$ as metricMap).mtx.RUnlock()
		if (ok) {
			return metric
		}

		await (m$ as metricMap).mtx.Lock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as metricMap).mtx), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as metricMap).getMetricWithHashAndLabelValues(hash, lvs, curry) : metricMap.prototype.getMetricWithHashAndLabelValues.call(m, hash, lvs, curry))
		metric = __goscriptTuple4[0]
		ok = __goscriptTuple4[1]
		if (!ok) {
			let inlinedLVs: $.Slice<string> = inlineLabelValues(lvs, curry)
			metric = (__goscriptAwait = (m$ as metricMap).newMetric!(inlinedLVs), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			$.mapSet((m$ as metricMap).metrics, hash, $.appendOne($.mapGet<bigint, $.Slice<metricWithLabelValues>, $.Slice<metricWithLabelValues>>((m$ as metricMap).metrics, hash, null)[0], new metricWithLabelValues({values: inlinedLVs, metric: metric}, true)))
		}
		return metric
	}

	public async getOrCreateMetricWithLabels(hash: bigint, labels: __goscript_labels.Labels, curry: $.Slice<curriedLabelValue>): globalThis.Promise<__goscript_metric.Metric | null> {
		let m: metricMap | $.VarRef<metricMap> | null = this;
		using __defer = new $.DisposableStack()
		const m$: metricMap = m == null ? $.pointerTarget<metricMap>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<metricMap>(m)
		await (m$ as metricMap).mtx.RLock()
		let [metric, ok] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as metricMap).getMetricWithHashAndLabels(hash, labels, curry) : metricMap.prototype.getMetricWithHashAndLabels.call(m, hash, labels, curry))
		void (m$ as metricMap).mtx.RUnlock()
		if (ok) {
			return metric
		}

		await (m$ as metricMap).mtx.Lock()
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as metricMap).mtx), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee5() })
		let __goscriptTuple5: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as metricMap).getMetricWithHashAndLabels(hash, labels, curry) : metricMap.prototype.getMetricWithHashAndLabels.call(m, hash, labels, curry))
		metric = __goscriptTuple5[0]
		ok = __goscriptTuple5[1]
		if (!ok) {
			let lvs: $.Slice<string> = extractLabelValues((m$ as metricMap).desc, labels, curry)
			metric = (__goscriptAwait = (m$ as metricMap).newMetric!(lvs), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			$.mapSet((m$ as metricMap).metrics, hash, $.appendOne($.mapGet<bigint, $.Slice<metricWithLabelValues>, $.Slice<metricWithLabelValues>>((m$ as metricMap).metrics, hash, null)[0], new metricWithLabelValues({values: lvs, metric: metric}, true)))
		}
		return metric
	}

	static __typeInfo = $.registerStructType(
		"prometheus.metricMap",
		() => new metricMap(),
		() => [$.methodSignature("Collect", [["ch", /* @__PURE__ */ $.channelType("prometheus.Metric", "send")]], [], true), $.methodSignature("Describe", [["ch", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("prometheus.Desc"), "send")]], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("deleteByHashWithLabelValues", [["h", /* @__PURE__ */ $.basicType("uint64")], ["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("deleteByHashWithLabels", [["h", /* @__PURE__ */ $.basicType("uint64")], ["labels", "prometheus.Labels"], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getMetricWithHashAndLabelValues", [["h", /* @__PURE__ */ $.basicType("uint64")], ["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric", /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getMetricWithHashAndLabels", [["h", /* @__PURE__ */ $.basicType("uint64")], ["labels", "prometheus.Labels"], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric", /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getOrCreateMetricWithLabelValues", [["hash", /* @__PURE__ */ $.basicType("uint64")], ["lvs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric"], true), $.methodSignature("getOrCreateMetricWithLabels", [["hash", /* @__PURE__ */ $.basicType("uint64")], ["labels", "prometheus.Labels"], ["curry", /* @__PURE__ */ $.sliceType("prometheus.curriedLabelValue")]], ["prometheus.Metric"], true)],
		metricMap,
		() => [/* @__PURE__ */ $.structField("mtx", "sync.RWMutex", [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("metrics", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.sliceType("prometheus.metricWithLabelValues")), [1], 24, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("desc", /* @__PURE__ */ $.pointerType("prometheus.Desc"), [2], 32, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("newMetric", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], results: ["prometheus.Metric"], isVariadic: true } as $.FunctionTypeInfo), [3], 40, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export async function NewMetricVec(desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, newMetric: ((lvs: $.Slice<string>) => __goscript_metric.Metric | null | globalThis.Promise<__goscript_metric.Metric | null>) | null): globalThis.Promise<MetricVec | $.VarRef<MetricVec> | null> {
	return new MetricVec({metricMap: new metricMap({metrics: $.makeMap<bigint, $.Slice<metricWithLabelValues>>([]), desc: desc, newMetric: newMetric}), hashAdd: __goscript_fnv.hashAdd, hashAddByte: __goscript_fnv.hashAddByte})
}

export function findMetricWithLabelValues(metrics: $.Slice<metricWithLabelValues>, lvs: $.Slice<string>, curry: $.Slice<curriedLabelValue>): number {
	for (let __goscriptRangeTarget3 = metrics, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
		let metric = ((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as metricWithLabelValues)).clone()
		if (matchLabelValues(metric.values, lvs, curry)) {
			return i
		}
	}
	return $.sliceLen(metrics)
}

export function findMetricWithLabels(desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, metrics: $.Slice<metricWithLabelValues>, labels: __goscript_labels.Labels, curry: $.Slice<curriedLabelValue>): number {
	for (let __goscriptRangeTarget4 = metrics, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
		let metric = ((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as metricWithLabelValues)).clone()
		if (matchLabels(desc, metric.values, labels, curry)) {
			return i
		}
	}
	return $.sliceLen(metrics)
}

export function matchLabelValues(values: $.Slice<string>, lvs: $.Slice<string>, curry: $.Slice<curriedLabelValue>): boolean {
	if ($.sliceLen(values) != ($.sliceLen(lvs) + $.sliceLen(curry))) {
		return false
	}
	let iLVs: number = 0
	let iCurry: number = 0
	for (let __goscriptRangeTarget5 = values, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __goscriptSliceWindow4 = $.sliceRange(curry), __goscriptSliceWindow5 = $.sliceRange(lvs), i = 0; i < __goscriptRangeWindow5.length; i++) {
		let v = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + i] as string)
		if ((iCurry < __goscriptSliceWindow4.length) && (((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iCurry)] as curriedLabelValue).index == i)) {
			if (!$.stringEqual(v, ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iCurry)] as curriedLabelValue).value)) {
				return false
			}
			iCurry++
			continue
		}
		if (!$.stringEqual(v, ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iLVs)] as string))) {
			return false
		}
		iLVs++
	}
	return true
}

export function matchLabels(desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, values: $.Slice<string>, labels: __goscript_labels.Labels, curry: $.Slice<curriedLabelValue>): boolean {
	if ($.sliceLen(values) != ($.len(labels) + $.sliceLen(curry))) {
		return false
	}
	let iCurry = 0
	for (let __goscriptRangeTarget6 = $.pointerValue<__goscript_desc.Desc>(desc).variableLabels, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __goscriptSliceWindow6 = $.sliceRange(curry), __goscriptSliceWindow7 = $.sliceRange(values), i = 0; i < __goscriptRangeWindow6.length; i++) {
		let k = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + i] as string)
		if ((iCurry < __goscriptSliceWindow6.length) && (((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iCurry)] as curriedLabelValue).index == i)) {
			if (!$.stringEqual(((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, i)] as string), ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iCurry)] as curriedLabelValue).value)) {
				return false
			}
			iCurry++
			continue
		}
		if (!$.stringEqual(((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, i)] as string), $.mapGet<string, string, string>(labels, k, "")[0])) {
			return false
		}
	}
	return true
}

export function extractLabelValues(desc: __goscript_desc.Desc | $.VarRef<__goscript_desc.Desc> | null, labels: __goscript_labels.Labels, curry: $.Slice<curriedLabelValue>): $.Slice<string> {
	let labelValues: $.Slice<string> = $.makeSlice<string>($.len(labels) + $.sliceLen(curry), undefined, "string")
	let iCurry = 0
	for (let __goscriptRangeTarget7 = $.pointerValue<__goscript_desc.Desc>(desc).variableLabels, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __goscriptSliceWindow8 = $.sliceRange(curry), __goscriptSliceWindow9 = $.sliceRange(labelValues), i = 0; i < __goscriptRangeWindow7.length; i++) {
		let k = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + i] as string)
		if ((iCurry < __goscriptSliceWindow8.length) && (((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iCurry)] as curriedLabelValue).index == i)) {
			;(__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, i)] = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iCurry)] as curriedLabelValue).value
			iCurry++
			continue
		}
		;(__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, i)] = $.mapGet<string, string, string>(labels, k, "")[0]
	}
	return labelValues
}

export function inlineLabelValues(lvs: $.Slice<string>, curry: $.Slice<curriedLabelValue>): $.Slice<string> {
	let labelValues: $.Slice<string> = $.makeSlice<string>($.sliceLen(lvs) + $.sliceLen(curry), undefined, "string")
	let iCurry: number = 0
	let iLVs: number = 0
	for (let __goscriptRangeTarget8 = labelValues, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __goscriptSliceWindow10 = $.sliceRange(curry), __goscriptSliceWindow11 = $.sliceRange(lvs), i = 0; i < __goscriptRangeWindow8.length; i++) {
		if ((iCurry < __goscriptSliceWindow10.length) && (((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iCurry)] as curriedLabelValue).index == i)) {
			;(__goscriptRangeWindow8.backing as any[])[__goscriptRangeWindow8.offset + i] = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iCurry)] as curriedLabelValue).value
			iCurry++
			continue
		}
		;(__goscriptRangeWindow8.backing as any[])[__goscriptRangeWindow8.offset + i] = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iLVs)] as string)
		iLVs++
	}
	return labelValues
}

var __goscriptAwait: any
