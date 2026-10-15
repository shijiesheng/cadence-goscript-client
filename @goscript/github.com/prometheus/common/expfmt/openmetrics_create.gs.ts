// Generated file based on openmetrics_create.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as ptypes from "@goscript/github.com/golang/protobuf/ptypes/index.js"

import * as model from "@goscript/github.com/prometheus/common/model/index.js"

import * as dto from "@goscript/github.com/prometheus/client_model/go/index.js"

import type * as timestamp from "@goscript/github.com/golang/protobuf/ptypes/timestamp/index.js"

import type * as timestamppb from "@goscript/google.golang.org/protobuf/types/known/timestamppb/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_text_create from "./text_create.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/golang/protobuf/ptypes/index.js"
import "@goscript/github.com/prometheus/common/model/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./text_create.gs.ts"

export async function MetricFamilyToOpenMetrics(out: io.Writer | null, _in: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null): globalThis.Promise<[number, $.GoError]> {
	let written: number = 0
	let err: $.GoError = null! as $.GoError
	await using __defer = new $.AsyncDisposableStack()
	const _in$: dto.MetricFamily = _in == null ? $.pointerTarget<dto.MetricFamily>(_in) : (_in as any).__isVarRef === true ? (_in as any).value : (_in as any).__goValue === undefined ? (_in as any) : $.pointerTarget<dto.MetricFamily>(_in)
	let name = (_in !== null && (_in as any).__isVarRef !== true && (_in as any).__goValue === undefined ? ((_in as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(_in))
	if ($.stringEqual(name, "")) {
		return [0, fmt.Errorf("MetricFamily has no name: %s", $.interfaceValue(_in, "*io_prometheus_client.MetricFamily", /* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")))]
	}

	// Try the interface upgrade. If it doesn't work, we'll use a
	// bufio.Writer from the sync.Pool.
	let [w, ok] = $.typeAssertTuple<__goscript_text_create.enhancedWriter | null>(out, "expfmt.enhancedWriter")
	if (!ok) {
		let b: bufio.Writer | $.VarRef<bufio.Writer> | null = $.mustTypeAssert<bufio.Writer | $.VarRef<bufio.Writer> | null>(await $.pointerValue<sync.Pool>(__goscript_text_create.bufPool).Get(), /* @__PURE__ */ $.pointerType("bufio.Writer"))
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as bufio.Writer).Reset(out) : bufio.Writer.prototype.Reset.call(b, out))
		w = $.interfaceValue<__goscript_text_create.enhancedWriter | null>(b, "*bufio.Writer", /* @__PURE__ */ $.pointerType("bufio.Writer"))
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			let bErr = await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as bufio.Writer).Flush() : bufio.Writer.prototype.Flush.call(b))
			if (err == null) {
				err = bErr
			}
			$.pointerValue<sync.Pool>(__goscript_text_create.bufPool).Put($.interfaceValue(b, "*bufio.Writer", /* @__PURE__ */ $.pointerType("bufio.Writer")))
		})() })
	}

	let n: number = 0
	let metricType: dto.MetricType = (_in !== null && (_in as any).__isVarRef !== true && (_in as any).__goValue === undefined ? ((_in as any) as dto.MetricFamily).GetType() : dto.MetricFamily.prototype.GetType.call(_in))
	let shortName: string = name
	if ((metricType == 0) && strings.HasSuffix(shortName, "_total")) {
		shortName = $.sliceStringOrBytes(name, undefined, $.stringLen(name) - 6)
	}

	// Comments, first HELP, then TYPE.
	if ((_in$ as dto.MetricFamily).Help != null) {
		let __goscriptTuple0: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString("# HELP ")
		n = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		written = written + (n)
		if (err != null) {
			await __defer.dispose()
			return [written, err]
		}
		let __goscriptTuple1: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString(shortName)
		n = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		written = written + (n)
		if (err != null) {
			await __defer.dispose()
			return [written, err]
		}
		err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteByte(32), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		written++
		if (err != null) {
			await __defer.dispose()
			return [written, err]
		}
		let __goscriptTuple2: any = await __goscript_text_create.writeEscapedString(w, $.pointerValue<string>((_in$ as dto.MetricFamily).Help), true)
		n = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		written = written + (n)
		if (err != null) {
			await __defer.dispose()
			return [written, err]
		}
		err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteByte(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		written++
		if (err != null) {
			await __defer.dispose()
			return [written, err]
		}
	}
	let __goscriptTuple3: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString("# TYPE ")
	n = __goscriptTuple3[0]
	err = __goscriptTuple3[1]
	written = written + (n)
	if (err != null) {
		await __defer.dispose()
		return [written, err]
	}
	let __goscriptTuple4: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString(shortName)
	n = __goscriptTuple4[0]
	err = __goscriptTuple4[1]
	written = written + (n)
	if (err != null) {
		await __defer.dispose()
		return [written, err]
	}
	switch (metricType) {
		case dto.MetricType_COUNTER:
		{
			if (strings.HasSuffix(name, "_total")) {
				let __goscriptTuple5: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString(" counter\n")
				n = __goscriptTuple5[0]
				err = __goscriptTuple5[1]
			} else {
				let __goscriptTuple6: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString(" unknown\n")
				n = __goscriptTuple6[0]
				err = __goscriptTuple6[1]
			}
			break
		}
		case dto.MetricType_GAUGE:
		{
			let __goscriptTuple7: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString(" gauge\n")
			n = __goscriptTuple7[0]
			err = __goscriptTuple7[1]
			break
		}
		case dto.MetricType_SUMMARY:
		{
			let __goscriptTuple8: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString(" summary\n")
			n = __goscriptTuple8[0]
			err = __goscriptTuple8[1]
			break
		}
		case dto.MetricType_UNTYPED:
		{
			let __goscriptTuple9: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString(" unknown\n")
			n = __goscriptTuple9[0]
			err = __goscriptTuple9[1]
			break
		}
		case dto.MetricType_HISTOGRAM:
		{
			let __goscriptTuple10: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString(" histogram\n")
			n = __goscriptTuple10[0]
			err = __goscriptTuple10[1]
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
				// Note that we have ensured above that either the name
				// ends on `_total` or that the rendered type is
				// `unknown`. Therefore, no `_total` must be added here.
				let __goscriptTuple11: any = await writeOpenMetricsSample(w, name, "", metric, "", 0, dto.Counter.prototype.GetValue.call($.pointerValue<dto.Metric>(metric).Counter), 0n, false, $.pointerValue<dto.Counter>($.pointerValue<dto.Metric>(metric).Counter).Exemplar)
				n = __goscriptTuple11[0]
				err = __goscriptTuple11[1]
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
				let __goscriptTuple12: any = await writeOpenMetricsSample(w, name, "", metric, "", 0, dto.Gauge.prototype.GetValue.call($.pointerValue<dto.Metric>(metric).Gauge), 0n, false, null)
				n = __goscriptTuple12[0]
				err = __goscriptTuple12[1]
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
				let __goscriptTuple13: any = await writeOpenMetricsSample(w, name, "", metric, "", 0, dto.Untyped.prototype.GetValue.call($.pointerValue<dto.Metric>(metric).Untyped), 0n, false, null)
				n = __goscriptTuple13[0]
				err = __goscriptTuple13[1]
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
					let __goscriptTuple14: any = await writeOpenMetricsSample(w, name, "", metric, model.QuantileLabel, (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as dto.Quantile).GetQuantile() : dto.Quantile.prototype.GetQuantile.call(q)), (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as dto.Quantile).GetValue() : dto.Quantile.prototype.GetValue.call(q)), 0n, false, null)
					n = __goscriptTuple14[0]
					err = __goscriptTuple14[1]
					written = written + (n)
					if (err != null) {
						await __defer.dispose()
						return [written, err]
					}
				}
				let __goscriptTuple15: any = await writeOpenMetricsSample(w, name, "_sum", metric, "", 0, dto.Summary.prototype.GetSampleSum.call($.pointerValue<dto.Metric>(metric).Summary), 0n, false, null)
				n = __goscriptTuple15[0]
				err = __goscriptTuple15[1]
				written = written + (n)
				if (err != null) {
					await __defer.dispose()
					return [written, err]
				}
				let __goscriptTuple16: any = await writeOpenMetricsSample(w, name, "_count", metric, "", 0, 0, dto.Summary.prototype.GetSampleCount.call($.pointerValue<dto.Metric>(metric).Summary), true, null)
				n = __goscriptTuple16[0]
				err = __goscriptTuple16[1]
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
					let __goscriptTuple17: any = await writeOpenMetricsSample(w, name, "_bucket", metric, model.BucketLabel, (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as dto.Bucket).GetUpperBound() : dto.Bucket.prototype.GetUpperBound.call(b)), 0, (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as dto.Bucket).GetCumulativeCount() : dto.Bucket.prototype.GetCumulativeCount.call(b)), true, $.pointerValue<dto.Bucket>(b).Exemplar)
					n = __goscriptTuple17[0]
					err = __goscriptTuple17[1]
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
					let __goscriptTuple18: any = await writeOpenMetricsSample(w, name, "_bucket", metric, model.BucketLabel, math.Inf(1), 0, dto.Histogram.prototype.GetSampleCount.call($.pointerValue<dto.Metric>(metric).Histogram), true, null)
					n = __goscriptTuple18[0]
					err = __goscriptTuple18[1]
					written = written + (n)
					if (err != null) {
						await __defer.dispose()
						return [written, err]
					}
				}
				let __goscriptTuple19: any = await writeOpenMetricsSample(w, name, "_sum", metric, "", 0, dto.Histogram.prototype.GetSampleSum.call($.pointerValue<dto.Metric>(metric).Histogram), 0n, false, null)
				n = __goscriptTuple19[0]
				err = __goscriptTuple19[1]
				written = written + (n)
				if (err != null) {
					await __defer.dispose()
					return [written, err]
				}
				let __goscriptTuple20: any = await writeOpenMetricsSample(w, name, "_count", metric, "", 0, 0, dto.Histogram.prototype.GetSampleCount.call($.pointerValue<dto.Metric>(metric).Histogram), true, null)
				n = __goscriptTuple20[0]
				err = __goscriptTuple20[1]
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

export async function FinalizeOpenMetrics(w: io.Writer | null): globalThis.Promise<[number, $.GoError]> {
	let written: number = 0
	let err: $.GoError = null! as $.GoError
	return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(new Uint8Array([35, 32, 69, 79, 70, 10]))
}

export async function writeOpenMetricsSample(w: __goscript_text_create.enhancedWriter | null, name: string, suffix: string, metric: dto.Metric | $.VarRef<dto.Metric> | null, additionalLabelName: string, additionalLabelValue: number, floatValue: number, intValue: bigint, useIntValue: boolean, exemplar: dto.Exemplar | $.VarRef<dto.Exemplar> | null): globalThis.Promise<[number, $.GoError]> {
	const metric$: dto.Metric = metric == null ? $.pointerTarget<dto.Metric>(metric) : (metric as any).__isVarRef === true ? (metric as any).value : (metric as any).__goValue === undefined ? (metric as any) : $.pointerTarget<dto.Metric>(metric)
	let written: number = 0
	let [n, err] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString(name)
	written = written + (n)
	if (err != null) {
		return [written, err]
	}
	if (!$.stringEqual(suffix, "")) {
		let __goscriptTuple21: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString(suffix)
		n = __goscriptTuple21[0]
		err = __goscriptTuple21[1]
		written = written + (n)
		if (err != null) {
			return [written, err]
		}
	}
	let __goscriptTuple22: any = await writeOpenMetricsLabelPairs(w, (metric$ as dto.Metric).Label, additionalLabelName, additionalLabelValue)
	n = __goscriptTuple22[0]
	err = __goscriptTuple22[1]
	written = written + (n)
	if (err != null) {
		return [written, err]
	}
	err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteByte(32), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	written++
	if (err != null) {
		return [written, err]
	}
	if (useIntValue) {
		let __goscriptTuple23: any = await writeUint(w, intValue)
		n = __goscriptTuple23[0]
		err = __goscriptTuple23[1]
	} else {
		let __goscriptTuple24: any = await writeOpenMetricsFloat(w, floatValue)
		n = __goscriptTuple24[0]
		err = __goscriptTuple24[1]
	}
	written = written + (n)
	if (err != null) {
		return [written, err]
	}
	if ((metric$ as dto.Metric).TimestampMs != null) {
		err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteByte(32), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		written++
		if (err != null) {
			return [written, err]
		}
		// TODO(beorn7): Format this directly without converting to a float first.
		let __goscriptTuple25: any = await writeOpenMetricsFloat(w, globalThis.Number($.pointerValue<bigint>((metric$ as dto.Metric).TimestampMs)) / 1000)
		n = __goscriptTuple25[0]
		err = __goscriptTuple25[1]
		written = written + (n)
		if (err != null) {
			return [written, err]
		}
	}
	if (exemplar != null) {
		let __goscriptTuple26: any = await writeExemplar(w, exemplar)
		n = __goscriptTuple26[0]
		err = __goscriptTuple26[1]
		written = written + (n)
		if (err != null) {
			return [written, err]
		}
	}
	err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteByte(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	written++
	if (err != null) {
		return [written, err]
	}
	return [written, null]
}

export async function writeOpenMetricsLabelPairs(w: __goscript_text_create.enhancedWriter | null, _in: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>, additionalLabelName: string, additionalLabelValue: number): globalThis.Promise<[number, $.GoError]> {
	if (($.sliceLen(_in) == 0) && ($.stringEqual(additionalLabelName, ""))) {
		return [0, null]
	}
	let written: number = 0
	let separator: number = 123
	for (let __goscriptRangeTarget3 = _in, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let lp = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
		let err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteByte(separator), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		written++
		if (err != null) {
			return [written, err]
		}
		let __goscriptTuple27: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString((lp !== null && (lp as any).__isVarRef !== true && (lp as any).__goValue === undefined ? ((lp as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(lp)))
		let n = __goscriptTuple27[0]
		err = __goscriptTuple27[1]
		written = written + (n)
		if (err != null) {
			return [written, err]
		}
		let __goscriptTuple28: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString("=\"")
		n = __goscriptTuple28[0]
		err = __goscriptTuple28[1]
		written = written + (n)
		if (err != null) {
			return [written, err]
		}
		let __goscriptTuple29: any = await __goscript_text_create.writeEscapedString(w, (lp !== null && (lp as any).__isVarRef !== true && (lp as any).__goValue === undefined ? ((lp as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(lp)), true)
		n = __goscriptTuple29[0]
		err = __goscriptTuple29[1]
		written = written + (n)
		if (err != null) {
			return [written, err]
		}
		err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteByte(34), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		written++
		if (err != null) {
			return [written, err]
		}
		separator = 44
	}
	if (!$.stringEqual(additionalLabelName, "")) {
		let err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteByte(separator), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		written++
		if (err != null) {
			return [written, err]
		}
		let __goscriptTuple30: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString(additionalLabelName)
		let n = __goscriptTuple30[0]
		err = __goscriptTuple30[1]
		written = written + (n)
		if (err != null) {
			return [written, err]
		}
		let __goscriptTuple31: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString("=\"")
		n = __goscriptTuple31[0]
		err = __goscriptTuple31[1]
		written = written + (n)
		if (err != null) {
			return [written, err]
		}
		let __goscriptTuple32: any = await writeOpenMetricsFloat(w, additionalLabelValue)
		n = __goscriptTuple32[0]
		err = __goscriptTuple32[1]
		written = written + (n)
		if (err != null) {
			return [written, err]
		}
		err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteByte(34), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		written++
		if (err != null) {
			return [written, err]
		}
	}
	let err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteByte(125), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	written++
	if (err != null) {
		return [written, err]
	}
	return [written, null]
}

export async function writeExemplar(w: __goscript_text_create.enhancedWriter | null, e: dto.Exemplar | $.VarRef<dto.Exemplar> | null): globalThis.Promise<[number, $.GoError]> {
	const e$: dto.Exemplar = e == null ? $.pointerTarget<dto.Exemplar>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<dto.Exemplar>(e)
	let written = 0
	let [n, err] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString(" # ")
	written = written + (n)
	if (err != null) {
		return [written, err]
	}
	let __goscriptTuple33: any = await writeOpenMetricsLabelPairs(w, (e$ as dto.Exemplar).Label, "", 0)
	n = __goscriptTuple33[0]
	err = __goscriptTuple33[1]
	written = written + (n)
	if (err != null) {
		return [written, err]
	}
	err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteByte(32), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	written++
	if (err != null) {
		return [written, err]
	}
	let __goscriptTuple34: any = await writeOpenMetricsFloat(w, (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as dto.Exemplar).GetValue() : dto.Exemplar.prototype.GetValue.call(e)))
	n = __goscriptTuple34[0]
	err = __goscriptTuple34[1]
	written = written + (n)
	if (err != null) {
		return [written, err]
	}
	if ((e$ as dto.Exemplar).Timestamp != null) {
		err = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteByte(32), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		written++
		if (err != null) {
			return [written, err]
		}
		let [ts, __goscriptShadow0] = ptypes.Timestamp(((e$ as dto.Exemplar)).Timestamp)
		if (__goscriptShadow0 != null) {
			return [written, __goscriptShadow0]
		}
		// TODO(beorn7): Format this directly from components of ts to
		// avoid overflow/underflow and precision issues of the float
		// conversion.
		let __goscriptTuple35: any = await writeOpenMetricsFloat(w, globalThis.Number($.markAsStructValue($.cloneStructValue(ts)).UnixNano()) / 1e9)
		n = __goscriptTuple35[0]
		__goscriptShadow0 = __goscriptTuple35[1]
		written = written + (n)
		if (__goscriptShadow0 != null) {
			return [written, __goscriptShadow0]
		}
	}
	return [written, null]
}

export async function writeOpenMetricsFloat(w: __goscript_text_create.enhancedWriter | null, f: number): globalThis.Promise<[number, $.GoError]> {
	switch ((true as boolean)) {
		case f == 1:
		{
			return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString("1.0")
			break
		}
		case f == 0:
		{
			return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString("0.0")
			break
		}
		case f == -1:
		{
			return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString("-1.0")
			break
		}
		case math.IsNaN(f):
		{
			return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString("NaN")
			break
		}
		case math.IsInf(f, 1):
		{
			return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString("+Inf")
			break
		}
		case math.IsInf(f, -1):
		{
			return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).WriteString("-Inf")
			break
		}
		default:
		{
			let bp = $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>(await $.pointerValue<sync.Pool>(__goscript_text_create.numBufPool).Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
			bp!.value = strconv.AppendFloat($.goSlice(($.pointerValue<$.Slice<number>>(bp)), undefined, 0), f, 103, -1, 64)
			if (!bytes.ContainsAny($.pointerValue<$.Slice<number>>(bp), "e.")) {
				bp!.value = $.append($.pointerValue<$.Slice<number>>(bp), $.uint(46, 8), $.uint(48, 8), $.byteSliceHint)
			}
			let [written, err] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).Write($.pointerValue<$.Slice<number>>(bp))
			$.pointerValue<sync.Pool>(__goscript_text_create.numBufPool).Put($.interfaceValue(bp, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
			return [written, err]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function writeUint(w: __goscript_text_create.enhancedWriter | null, u: bigint): globalThis.Promise<[number, $.GoError]> {
	let bp = $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>(await $.pointerValue<sync.Pool>(__goscript_text_create.numBufPool).Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	bp!.value = strconv.AppendUint($.goSlice(($.pointerValue<$.Slice<number>>(bp)), undefined, 0), u, 10)
	let [written, err] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<__goscript_text_create.enhancedWriter, null>) : $.pointerValue<Exclude<__goscript_text_create.enhancedWriter, null>>(w)).Write($.pointerValue<$.Slice<number>>(bp))
	$.pointerValue<sync.Pool>(__goscript_text_create.numBufPool).Put($.interfaceValue(bp, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
	return [written, err]
}

var __goscriptAwait: any
