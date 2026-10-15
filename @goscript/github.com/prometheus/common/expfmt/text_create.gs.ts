// Generated file based on text_create.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as ioutil from "@goscript/io/ioutil/index.js"

import * as math from "@goscript/math/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as model from "@goscript/github.com/prometheus/common/model/index.js"

import * as dto from "@goscript/github.com/prometheus/client_model/go/index.js"
import "@goscript/bufio/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/io/ioutil/index.js"
import "@goscript/math/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/github.com/prometheus/common/model/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"

$.registerTypePackagePath("github.com/prometheus/common/expfmt", ["expfmt.enhancedWriter"])

export type enhancedWriter = {
	Write(p: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	WriteByte(c: number): $.GoError | globalThis.Promise<$.GoError>
	WriteRune(r: number): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	WriteString(s: string): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
}

$.registerInterfaceType(
	"expfmt.enhancedWriter",
	null,
	[$.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("WriteByte", [["c", /* @__PURE__ */ $.basicType("uint8")]], ["error"]), $.methodSignature("WriteRune", [["r", /* @__PURE__ */ $.basicType("int32")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export const initialNumBufSize: number = 24

export let bufPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(bufio.NewWriter(ioutil.Discard), "*bufio.Writer", /* @__PURE__ */ $.pointerType("bufio.Writer"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_bufPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(bufPool.value, __goscriptValue)
}

export let numBufPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	let b: $.VarRef<$.Slice<number>> = $.varRef($.makeSlice<number>(0, 24, "byte"))
	return $.interfaceValue(b, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_numBufPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(numBufPool.value, __goscriptValue)
}

export async function MetricFamilyToText(out: io.Writer | null, _in: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null): globalThis.Promise<[number, $.GoError]> {
	let written: number = 0
	let err: $.GoError = null! as $.GoError
	await using __defer = new $.AsyncDisposableStack()
	const _in$: dto.MetricFamily = _in == null ? $.pointerTarget<dto.MetricFamily>(_in) : (_in as any).__isVarRef === true ? (_in as any).value : (_in as any).__goValue === undefined ? (_in as any) : $.pointerTarget<dto.MetricFamily>(_in)
	// Fail-fast checks.
	if ($.sliceLen((_in$ as dto.MetricFamily).Metric) == 0) {
		return [0, fmt.Errorf("MetricFamily has no metrics: %s", $.interfaceValue(_in, "*io_prometheus_client.MetricFamily", /* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")))]
	}
	let name = (_in !== null && (_in as any).__isVarRef !== true && (_in as any).__goValue === undefined ? ((_in as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(_in))
	if ($.stringEqual(name, "")) {
		return [0, fmt.Errorf("MetricFamily has no name: %s", $.interfaceValue(_in, "*io_prometheus_client.MetricFamily", /* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")))]
	}

	// Try the interface upgrade. If it doesn't work, we'll use a
	// bufio.Writer from the sync.Pool.
	let [w, ok] = $.typeAssertTuple<enhancedWriter | null>(out, "expfmt.enhancedWriter")
	if (!ok) {
		let b: bufio.Writer | $.VarRef<bufio.Writer> | null = $.mustTypeAssert<bufio.Writer | $.VarRef<bufio.Writer> | null>(await bufPool.value.Get(), /* @__PURE__ */ $.pointerType("bufio.Writer"))
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as bufio.Writer).Reset(out) : bufio.Writer.prototype.Reset.call(b, out))
		w = $.interfaceValue<enhancedWriter | null>(b, "*bufio.Writer", /* @__PURE__ */ $.pointerType("bufio.Writer"))
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			let bErr = await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as bufio.Writer).Flush() : bufio.Writer.prototype.Flush.call(b))
			if (err == null) {
				err = bErr
			}
			bufPool.value.Put($.interfaceValue(b, "*bufio.Writer", /* @__PURE__ */ $.pointerType("bufio.Writer")))
		})() })
	}

	let n: number = 0

	// Comments, first HELP, then TYPE.
	if ((_in$ as dto.MetricFamily).Help != null) {
		let __goscriptTuple0: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteString("# HELP ")
		n = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		written = written + (n)
		if (err != null) {
			await __defer.dispose()
			return [written, err]
		}
		let __goscriptTuple1: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteString(name)
		n = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		written = written + (n)
		if (err != null) {
			await __defer.dispose()
			return [written, err]
		}
		err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteByte(32), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		written++
		if (err != null) {
			await __defer.dispose()
			return [written, err]
		}
		let __goscriptTuple2: any = await writeEscapedString(w, $.pointerValue<string>((_in$ as dto.MetricFamily).Help), false)
		n = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		written = written + (n)
		if (err != null) {
			await __defer.dispose()
			return [written, err]
		}
		err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteByte(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		written++
		if (err != null) {
			await __defer.dispose()
			return [written, err]
		}
	}
	let __goscriptTuple3: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteString("# TYPE ")
	n = __goscriptTuple3[0]
	err = __goscriptTuple3[1]
	written = written + (n)
	if (err != null) {
		await __defer.dispose()
		return [written, err]
	}
	let __goscriptTuple4: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteString(name)
	n = __goscriptTuple4[0]
	err = __goscriptTuple4[1]
	written = written + (n)
	if (err != null) {
		await __defer.dispose()
		return [written, err]
	}
	let metricType = (_in !== null && (_in as any).__isVarRef !== true && (_in as any).__goValue === undefined ? ((_in as any) as dto.MetricFamily).GetType() : dto.MetricFamily.prototype.GetType.call(_in))
	switch (metricType) {
		case dto.MetricType_COUNTER:
		{
			let __goscriptTuple5: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteString(" counter\n")
			n = __goscriptTuple5[0]
			err = __goscriptTuple5[1]
			break
		}
		case dto.MetricType_GAUGE:
		{
			let __goscriptTuple6: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteString(" gauge\n")
			n = __goscriptTuple6[0]
			err = __goscriptTuple6[1]
			break
		}
		case dto.MetricType_SUMMARY:
		{
			let __goscriptTuple7: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteString(" summary\n")
			n = __goscriptTuple7[0]
			err = __goscriptTuple7[1]
			break
		}
		case dto.MetricType_UNTYPED:
		{
			let __goscriptTuple8: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteString(" untyped\n")
			n = __goscriptTuple8[0]
			err = __goscriptTuple8[1]
			break
		}
		case dto.MetricType_HISTOGRAM:
		{
			let __goscriptTuple9: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteString(" histogram\n")
			n = __goscriptTuple9[0]
			err = __goscriptTuple9[1]
			break
		}
		default:
		{
			const __goscriptReturn0: [number, $.GoError] = [written, fmt.Errorf("unknown metric type %s", dto.MetricType_String(metricType))]
			written = __goscriptReturn0[0]
			err = __goscriptReturn0[1]
			await __defer.dispose()
			return [written, err]
			break
		}
	}
	written = written + (n)
	if (err != null) {
		await __defer.dispose()
		return [written, err]
	}

	// Finally the samples, one line for each.
	for (let __goscriptRangeTarget2 = (_in$ as dto.MetricFamily).Metric, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let metric = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as dto.Metric | $.VarRef<dto.Metric> | null)
		switch (metricType) {
			case dto.MetricType_COUNTER:
			{
				if ($.pointerValue<dto.Metric>(metric).Counter == null) {
					const __goscriptReturn1: [number, $.GoError] = [written, fmt.Errorf("expected counter in metric %s %s", name, $.interfaceValue(metric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")))]
					written = __goscriptReturn1[0]
					err = __goscriptReturn1[1]
					await __defer.dispose()
					return [written, err]
				}
				let __goscriptTuple10: any = await writeSample(w, name, "", metric, "", 0, dto.Counter.prototype.GetValue.call($.pointerValue<dto.Metric>(metric).Counter))
				n = __goscriptTuple10[0]
				err = __goscriptTuple10[1]
				break
			}
			case dto.MetricType_GAUGE:
			{
				if ($.pointerValue<dto.Metric>(metric).Gauge == null) {
					const __goscriptReturn2: [number, $.GoError] = [written, fmt.Errorf("expected gauge in metric %s %s", name, $.interfaceValue(metric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")))]
					written = __goscriptReturn2[0]
					err = __goscriptReturn2[1]
					await __defer.dispose()
					return [written, err]
				}
				let __goscriptTuple11: any = await writeSample(w, name, "", metric, "", 0, dto.Gauge.prototype.GetValue.call($.pointerValue<dto.Metric>(metric).Gauge))
				n = __goscriptTuple11[0]
				err = __goscriptTuple11[1]
				break
			}
			case dto.MetricType_UNTYPED:
			{
				if ($.pointerValue<dto.Metric>(metric).Untyped == null) {
					const __goscriptReturn3: [number, $.GoError] = [written, fmt.Errorf("expected untyped in metric %s %s", name, $.interfaceValue(metric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")))]
					written = __goscriptReturn3[0]
					err = __goscriptReturn3[1]
					await __defer.dispose()
					return [written, err]
				}
				let __goscriptTuple12: any = await writeSample(w, name, "", metric, "", 0, dto.Untyped.prototype.GetValue.call($.pointerValue<dto.Metric>(metric).Untyped))
				n = __goscriptTuple12[0]
				err = __goscriptTuple12[1]
				break
			}
			case dto.MetricType_SUMMARY:
			{
				if ($.pointerValue<dto.Metric>(metric).Summary == null) {
					const __goscriptReturn4: [number, $.GoError] = [written, fmt.Errorf("expected summary in metric %s %s", name, $.interfaceValue(metric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")))]
					written = __goscriptReturn4[0]
					err = __goscriptReturn4[1]
					await __defer.dispose()
					return [written, err]
				}
				for (let __goscriptRangeTarget0 = $.pointerValue<dto.Summary>($.pointerValue<dto.Metric>(metric).Summary).Quantile, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
					let q = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as dto.Quantile | $.VarRef<dto.Quantile> | null)
					let __goscriptTuple13: any = await writeSample(w, name, "", metric, model.QuantileLabel, (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as dto.Quantile).GetQuantile() : dto.Quantile.prototype.GetQuantile.call(q)), (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as dto.Quantile).GetValue() : dto.Quantile.prototype.GetValue.call(q)))
					n = __goscriptTuple13[0]
					err = __goscriptTuple13[1]
					written = written + (n)
					if (err != null) {
						await __defer.dispose()
						return [written, err]
					}
				}
				let __goscriptTuple14: any = await writeSample(w, name, "_sum", metric, "", 0, dto.Summary.prototype.GetSampleSum.call($.pointerValue<dto.Metric>(metric).Summary))
				n = __goscriptTuple14[0]
				err = __goscriptTuple14[1]
				written = written + (n)
				if (err != null) {
					await __defer.dispose()
					return [written, err]
				}
				let __goscriptTuple15: any = await writeSample(w, name, "_count", metric, "", 0, globalThis.Number(dto.Summary.prototype.GetSampleCount.call($.pointerValue<dto.Metric>(metric).Summary)))
				n = __goscriptTuple15[0]
				err = __goscriptTuple15[1]
				break
			}
			case dto.MetricType_HISTOGRAM:
			{
				if ($.pointerValue<dto.Metric>(metric).Histogram == null) {
					const __goscriptReturn5: [number, $.GoError] = [written, fmt.Errorf("expected histogram in metric %s %s", name, $.interfaceValue(metric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")))]
					written = __goscriptReturn5[0]
					err = __goscriptReturn5[1]
					await __defer.dispose()
					return [written, err]
				}
				let infSeen = false
				for (let __goscriptRangeTarget1 = $.pointerValue<dto.Histogram>($.pointerValue<dto.Metric>(metric).Histogram).Bucket, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
					let b = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as dto.Bucket | $.VarRef<dto.Bucket> | null)
					let __goscriptTuple16: any = await writeSample(w, name, "_bucket", metric, model.BucketLabel, (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as dto.Bucket).GetUpperBound() : dto.Bucket.prototype.GetUpperBound.call(b)), globalThis.Number((b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as dto.Bucket).GetCumulativeCount() : dto.Bucket.prototype.GetCumulativeCount.call(b))))
					n = __goscriptTuple16[0]
					err = __goscriptTuple16[1]
					written = written + (n)
					if (err != null) {
						await __defer.dispose()
						return [written, err]
					}
					if (math.IsInf((b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as dto.Bucket).GetUpperBound() : dto.Bucket.prototype.GetUpperBound.call(b)), 1)) {
						infSeen = true
					}
				}
				if (!infSeen) {
					let __goscriptTuple17: any = await writeSample(w, name, "_bucket", metric, model.BucketLabel, math.Inf(1), globalThis.Number(dto.Histogram.prototype.GetSampleCount.call($.pointerValue<dto.Metric>(metric).Histogram)))
					n = __goscriptTuple17[0]
					err = __goscriptTuple17[1]
					written = written + (n)
					if (err != null) {
						await __defer.dispose()
						return [written, err]
					}
				}
				let __goscriptTuple18: any = await writeSample(w, name, "_sum", metric, "", 0, dto.Histogram.prototype.GetSampleSum.call($.pointerValue<dto.Metric>(metric).Histogram))
				n = __goscriptTuple18[0]
				err = __goscriptTuple18[1]
				written = written + (n)
				if (err != null) {
					await __defer.dispose()
					return [written, err]
				}
				let __goscriptTuple19: any = await writeSample(w, name, "_count", metric, "", 0, globalThis.Number(dto.Histogram.prototype.GetSampleCount.call($.pointerValue<dto.Metric>(metric).Histogram)))
				n = __goscriptTuple19[0]
				err = __goscriptTuple19[1]
				break
			}
			default:
			{
				const __goscriptReturn6: [number, $.GoError] = [written, fmt.Errorf("unexpected type in metric %s %s", name, $.interfaceValue(metric, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")))]
				written = __goscriptReturn6[0]
				err = __goscriptReturn6[1]
				await __defer.dispose()
				return [written, err]
				break
			}
		}
		written = written + (n)
		if (err != null) {
			await __defer.dispose()
			return [written, err]
		}
	}
	await __defer.dispose()
	return [written, err]
	throw new globalThis.Error("goscript: unreachable return")
}

export async function writeSample(w: enhancedWriter | null, name: string, suffix: string, metric: dto.Metric | $.VarRef<dto.Metric> | null, additionalLabelName: string, additionalLabelValue: number, value: number): globalThis.Promise<[number, $.GoError]> {
	const metric$: dto.Metric = metric == null ? $.pointerTarget<dto.Metric>(metric) : (metric as any).__isVarRef === true ? (metric as any).value : (metric as any).__goValue === undefined ? (metric as any) : $.pointerTarget<dto.Metric>(metric)
	let written: number = 0
	let [n, err] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteString(name)
	written = written + (n)
	if (err != null) {
		return [written, err]
	}
	if (!$.stringEqual(suffix, "")) {
		let __goscriptTuple20: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteString(suffix)
		n = __goscriptTuple20[0]
		err = __goscriptTuple20[1]
		written = written + (n)
		if (err != null) {
			return [written, err]
		}
	}
	let __goscriptTuple21: any = await writeLabelPairs(w, (metric$ as dto.Metric).Label, additionalLabelName, additionalLabelValue)
	n = __goscriptTuple21[0]
	err = __goscriptTuple21[1]
	written = written + (n)
	if (err != null) {
		return [written, err]
	}
	err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteByte(32), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	written++
	if (err != null) {
		return [written, err]
	}
	let __goscriptTuple22: any = await writeFloat(w, value)
	n = __goscriptTuple22[0]
	err = __goscriptTuple22[1]
	written = written + (n)
	if (err != null) {
		return [written, err]
	}
	if ((metric$ as dto.Metric).TimestampMs != null) {
		err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteByte(32), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		written++
		if (err != null) {
			return [written, err]
		}
		let __goscriptTuple23: any = await writeInt(w, $.pointerValue<bigint>((metric$ as dto.Metric).TimestampMs))
		n = __goscriptTuple23[0]
		err = __goscriptTuple23[1]
		written = written + (n)
		if (err != null) {
			return [written, err]
		}
	}
	err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteByte(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	written++
	if (err != null) {
		return [written, err]
	}
	return [written, null]
}

export async function writeLabelPairs(w: enhancedWriter | null, _in: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>, additionalLabelName: string, additionalLabelValue: number): globalThis.Promise<[number, $.GoError]> {
	if (($.sliceLen(_in) == 0) && ($.stringEqual(additionalLabelName, ""))) {
		return [0, null]
	}
	let written: number = 0
	let separator: number = 123
	for (let __goscriptRangeTarget3 = _in, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let lp = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
		let err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteByte(separator), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		written++
		if (err != null) {
			return [written, err]
		}
		let __goscriptTuple24: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteString((lp !== null && (lp as any).__isVarRef !== true && (lp as any).__goValue === undefined ? ((lp as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(lp)))
		let n = __goscriptTuple24[0]
		err = __goscriptTuple24[1]
		written = written + (n)
		if (err != null) {
			return [written, err]
		}
		let __goscriptTuple25: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteString("=\"")
		n = __goscriptTuple25[0]
		err = __goscriptTuple25[1]
		written = written + (n)
		if (err != null) {
			return [written, err]
		}
		let __goscriptTuple26: any = await writeEscapedString(w, (lp !== null && (lp as any).__isVarRef !== true && (lp as any).__goValue === undefined ? ((lp as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(lp)), true)
		n = __goscriptTuple26[0]
		err = __goscriptTuple26[1]
		written = written + (n)
		if (err != null) {
			return [written, err]
		}
		err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteByte(34), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		written++
		if (err != null) {
			return [written, err]
		}
		separator = 44
	}
	if (!$.stringEqual(additionalLabelName, "")) {
		let err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteByte(separator), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		written++
		if (err != null) {
			return [written, err]
		}
		let __goscriptTuple27: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteString(additionalLabelName)
		let n = __goscriptTuple27[0]
		err = __goscriptTuple27[1]
		written = written + (n)
		if (err != null) {
			return [written, err]
		}
		let __goscriptTuple28: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteString("=\"")
		n = __goscriptTuple28[0]
		err = __goscriptTuple28[1]
		written = written + (n)
		if (err != null) {
			return [written, err]
		}
		let __goscriptTuple29: any = await writeFloat(w, additionalLabelValue)
		n = __goscriptTuple29[0]
		err = __goscriptTuple29[1]
		written = written + (n)
		if (err != null) {
			return [written, err]
		}
		err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteByte(34), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		written++
		if (err != null) {
			return [written, err]
		}
	}
	let err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteByte(125), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	written++
	if (err != null) {
		return [written, err]
	}
	return [written, null]
}

export let escaper: strings.Replacer | $.VarRef<strings.Replacer> | null = strings.NewReplacer("\\", "\\\\", "\n", "\\n")

export function __goscript_set_escaper(__goscriptValue: strings.Replacer | $.VarRef<strings.Replacer> | null): void {
	escaper = __goscriptValue
}

export let quotedEscaper: strings.Replacer | $.VarRef<strings.Replacer> | null = strings.NewReplacer("\\", "\\\\", "\n", "\\n", "\"", "\\\"")

export function __goscript_set_quotedEscaper(__goscriptValue: strings.Replacer | $.VarRef<strings.Replacer> | null): void {
	quotedEscaper = __goscriptValue
}

export async function writeEscapedString(w: enhancedWriter | null, v: string, includeDoubleQuote: boolean): globalThis.Promise<[number, $.GoError]> {
	if (includeDoubleQuote) {
		return strings.Replacer.prototype.WriteString.call($.pointerValue<strings.Replacer>(quotedEscaper), $.pointerValueOrNil((w as io.Writer | null))!, v)
	}
	return strings.Replacer.prototype.WriteString.call($.pointerValue<strings.Replacer>(escaper), $.pointerValueOrNil((w as io.Writer | null))!, v)
}

export async function writeFloat(w: enhancedWriter | null, f: number): globalThis.Promise<[number, $.GoError]> {
	switch ((true as boolean)) {
		case f == 1:
		{
			return [1, (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteByte(49), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]
			break
		}
		case f == 0:
		{
			return [1, (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteByte(48), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]
			break
		}
		case f == -1:
		{
			return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteString("-1")
			break
		}
		case math.IsNaN(f):
		{
			return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteString("NaN")
			break
		}
		case math.IsInf(f, 1):
		{
			return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteString("+Inf")
			break
		}
		case math.IsInf(f, -1):
		{
			return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).WriteString("-Inf")
			break
		}
		default:
		{
			let bp = $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>(await numBufPool.value.Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
			bp!.value = strconv.AppendFloat($.goSlice(($.pointerValue<$.Slice<number>>(bp)), undefined, 0), f, 103, -1, 64)
			let [written, err] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).Write($.pointerValue<$.Slice<number>>(bp))
			numBufPool.value.Put($.interfaceValue(bp, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
			return [written, err]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function writeInt(w: enhancedWriter | null, i: bigint): globalThis.Promise<[number, $.GoError]> {
	let bp = $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>(await numBufPool.value.Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	bp!.value = strconv.AppendInt($.goSlice(($.pointerValue<$.Slice<number>>(bp)), undefined, 0), i, 10)
	let [written, err] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<enhancedWriter, null>) : $.pointerValue<Exclude<enhancedWriter, null>>(w)).Write($.pointerValue<$.Slice<number>>(bp))
	numBufPool.value.Put($.interfaceValue(bp, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
	return [written, err]
}

var __goscriptAwait: any
