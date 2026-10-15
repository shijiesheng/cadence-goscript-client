// Generated file based on decode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as mime from "@goscript/mime/index.js"

import * as http from "@goscript/net/http/index.js"

import * as dto from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as pbutil from "@goscript/github.com/matttproud/golang_protobuf_extensions/pbutil/index.js"

import * as model from "@goscript/github.com/prometheus/common/model/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import type * as proto from "@goscript/github.com/golang/protobuf/proto/index.js"

import type * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as __goscript_expfmt from "./expfmt.gs.ts"

import * as __goscript_text_parse from "./text_parse.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/mime/index.js"
import "@goscript/net/http/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "@goscript/github.com/matttproud/golang_protobuf_extensions/pbutil/index.js"
import "@goscript/github.com/prometheus/common/model/index.js"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "./expfmt.gs.ts"
import "./text_parse.gs.ts"

$.registerTypePackagePath("github.com/prometheus/common/expfmt", ["expfmt.Decoder", "expfmt.DecodeOptions", "expfmt.protoDecoder", "expfmt.textDecoder", "expfmt.SampleDecoder"])

export type Decoder = {
	Decode(_p0: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"expfmt.Decoder",
	null,
	[$.methodSignature("Decode", [/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")], ["error"])]
);

export class DecodeOptions {
	// Timestamp is added to each value from the stream that has no explicit timestamp set.
	public get Timestamp(): model.Time {
		return this._fields.Timestamp
	}

	public set Timestamp(value: model.Time) {
		this._fields.Timestamp = value
	}

	public _fields: {
		Timestamp: model.Time
	}

	constructor(init?: Partial<{Timestamp?: model.Time}>, __goscriptValue?: boolean) {
		this._fields = {
			Timestamp: init?.Timestamp ?? (0n as model.Time)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DecodeOptions {
		return new DecodeOptions(this, true)
	}

	public __goscriptAssign(source: DecodeOptions): void {
		const target = this._fields
		const values = source._fields
		target.Timestamp = values.Timestamp
	}

	static __typeInfo = $.registerStructType(
		"expfmt.DecodeOptions",
		() => new DecodeOptions(),
		() => [],
		DecodeOptions,
		() => [/* @__PURE__ */ $.structField("Timestamp", /* @__PURE__ */ $.basicType("int64", "model.Time"), [0], 0, true)]
	)
}

export class protoDecoder {
	public get r(): io.Reader | null {
		return this._fields.r
	}

	public set r(value: io.Reader | null) {
		this._fields.r = value
	}

	public _fields: {
		r: io.Reader | null
	}

	constructor(init?: Partial<{r?: io.Reader | null}>, __goscriptValue?: boolean) {
		this._fields = {
			r: init?.r ?? (null! as io.Reader | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): protoDecoder {
		return new protoDecoder(this, true)
	}

	public __goscriptAssign(source: protoDecoder): void {
		const target = this._fields
		const values = source._fields
		target.r = $.assignFieldValue(target.r, values.r, "io.Reader")
	}

	public async Decode(v: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null): globalThis.Promise<$.GoError> {
		const d: protoDecoder | $.VarRef<protoDecoder> | null = this;
		let [, err] = await pbutil.ReadDelimited($.pointerValue<protoDecoder>(d).r, $.interfaceValue<proto.Message | null>(v, "*io_prometheus_client.MetricFamily", /* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")))
		if (err != null) {
			return err
		}
		if (!model.IsValidMetricName((v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(v)))) {
			return fmt.Errorf("invalid metric name %q", (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(v)))
		}
		for (let __goscriptRangeTarget1 = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as dto.MetricFamily).GetMetric() : dto.MetricFamily.prototype.GetMetric.call(v)), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let m = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as dto.Metric | $.VarRef<dto.Metric> | null)
			if (m == null) {
				continue
			}
			for (let __goscriptRangeTarget0 = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as dto.Metric).GetLabel() : dto.Metric.prototype.GetLabel.call(m)), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				let l = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
				if (l == null) {
					continue
				}
				if (!model.LabelValue_IsValid((l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(l)))) {
					return fmt.Errorf("invalid label value %q", (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(l)))
				}
				if (!model.LabelName_IsValid((l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(l)))) {
					return fmt.Errorf("invalid label name %q", (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(l)))
				}
			}
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"expfmt.protoDecoder",
		() => new protoDecoder(),
		() => [$.methodSignature("Decode", [["v", /* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")]], ["error"], true)],
		protoDecoder,
		() => [/* @__PURE__ */ $.structField("r", "io.Reader", [0], 0, false, { pkgPath: "github.com/prometheus/common/expfmt" })]
	)
}

export class textDecoder {
	public get r(): io.Reader | null {
		return this._fields.r
	}

	public set r(value: io.Reader | null) {
		this._fields.r = value
	}

	public get p(): __goscript_text_parse.TextParser {
		return this._fields.p
	}

	public set p(value: __goscript_text_parse.TextParser) {
		this._fields.p = value
	}

	public get fams(): $.Slice<dto.MetricFamily | $.VarRef<dto.MetricFamily> | null> {
		return this._fields.fams
	}

	public set fams(value: $.Slice<dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>) {
		this._fields.fams = value
	}

	public _fields: {
		r: io.Reader | null
		p: __goscript_text_parse.TextParser
		fams: $.Slice<dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>
	}

	constructor(init?: Partial<{r?: io.Reader | null, p?: __goscript_text_parse.TextParser, fams?: $.Slice<dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			r: init?.r ?? (null! as io.Reader | null),
			p: init?.p ? init.p.clone() : new __goscript_text_parse.TextParser(undefined, true),
			fams: init?.fams ?? (null! as $.Slice<dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): textDecoder {
		return new textDecoder(this, true)
	}

	public __goscriptAssign(source: textDecoder): void {
		const target = this._fields
		const values = source._fields
		target.r = $.assignFieldValue(target.r, values.r, "io.Reader")
		$.assignStruct(target.p, values.p)
		target.fams = values.fams
	}

	public async Decode(v: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null): globalThis.Promise<$.GoError> {
		let d: textDecoder | $.VarRef<textDecoder> | null = this;
		const d$: textDecoder = d == null ? $.pointerTarget<textDecoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<textDecoder>(d)
		// TODO(fabxc): Wrap this as a line reader to make streaming safer.
		if ($.sliceLen((d$ as textDecoder).fams) == 0) {
			// No cached metric families, read everything and parse metrics.
			let __goscriptTuple1: any = await (d$ as textDecoder).p.TextToMetricFamilies((d$ as textDecoder).r)
			let fams: globalThis.Map<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null> | null = __goscriptTuple1[0]
			let err = __goscriptTuple1[1]
			if (err != null) {
				return err
			}
			if ($.len(fams) == 0) {
				return io.EOF
			}
			;(d$ as textDecoder).fams = $.makeSlice<dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>(0, $.len(fams))
			for (const [__rangeKey, f] of fams?.entries() ?? []) {
				;(d$ as textDecoder).fams = $.appendOne((d$ as textDecoder).fams, f, $.appendZeros.nil)
			}
		}

		$.assignStruct($.pointerValue<dto.MetricFamily>(v), $.pointerValue<dto.MetricFamily>($.arrayIndex((d$ as textDecoder).fams!, 0)));
		;(d$ as textDecoder).fams = $.goSlice((d$ as textDecoder).fams, 1, undefined)

		return null
	}

	static __typeInfo = $.registerStructType(
		"expfmt.textDecoder",
		() => new textDecoder(),
		() => [$.methodSignature("Decode", [["v", /* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")]], ["error"], true)],
		textDecoder,
		() => [/* @__PURE__ */ $.structField("r", "io.Reader", [0], 0, false, { pkgPath: "github.com/prometheus/common/expfmt" }), /* @__PURE__ */ $.structField("p", "expfmt.TextParser", [1], 16, false, { pkgPath: "github.com/prometheus/common/expfmt" }), /* @__PURE__ */ $.structField("fams", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")), [2], 176, false, { pkgPath: "github.com/prometheus/common/expfmt" })]
	)
}

export class SampleDecoder {
	public get Dec(): Decoder | null {
		return this._fields.Dec
	}

	public set Dec(value: Decoder | null) {
		this._fields.Dec = value
	}

	public get Opts(): DecodeOptions | $.VarRef<DecodeOptions> | null {
		return this._fields.Opts
	}

	public set Opts(value: DecodeOptions | $.VarRef<DecodeOptions> | null) {
		this._fields.Opts = value
	}

	public get f(): dto.MetricFamily {
		return this._fields.f
	}

	public set f(value: dto.MetricFamily) {
		this._fields.f = value
	}

	public _fields: {
		Dec: Decoder | null
		Opts: DecodeOptions | $.VarRef<DecodeOptions> | null
		f: dto.MetricFamily
	}

	constructor(init?: Partial<{Dec?: Decoder | null, Opts?: DecodeOptions | $.VarRef<DecodeOptions> | null, f?: dto.MetricFamily}>, __goscriptValue?: boolean) {
		this._fields = {
			Dec: init?.Dec ?? (null! as Decoder | null),
			Opts: init?.Opts ?? (null! as DecodeOptions | $.VarRef<DecodeOptions> | null),
			f: init?.f ? $.markAsStructValue($.cloneStructValue(init.f)) : $.markAsStructValue(new dto.MetricFamily())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SampleDecoder {
		return new SampleDecoder(this, true)
	}

	public __goscriptAssign(source: SampleDecoder): void {
		const target = this._fields
		const values = source._fields
		target.Dec = $.assignFieldValue(target.Dec, values.Dec, "expfmt.Decoder")
		target.Opts = values.Opts
		$.assignStruct(target.f, values.f)
	}

	public async Decode(s: $.VarRef<model.Vector> | null): globalThis.Promise<$.GoError> {
		const sd: SampleDecoder | $.VarRef<SampleDecoder> | null = this;
		const sd$: SampleDecoder = sd == null ? $.pointerTarget<SampleDecoder>(sd) : (sd as any).__isVarRef === true ? (sd as any).value : (sd as any).__goValue === undefined ? (sd as any) : $.pointerTarget<SampleDecoder>(sd)
		let err = (__goscriptAwait = $.pointerValue<Exclude<Decoder, null>>((sd$ as SampleDecoder).Dec).Decode($.fieldRef((sd$ as SampleDecoder)._fields, "f")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			return err
		}
		let __goscriptTuple2: any = await extractSamples($.fieldRef((sd$ as SampleDecoder)._fields, "f"), (sd$ as SampleDecoder).Opts)
		s!.value = (__goscriptTuple2[0] as model.Vector)
		err = __goscriptTuple2[1]
		return err
	}

	static __typeInfo = $.registerStructType(
		"expfmt.SampleDecoder",
		() => new SampleDecoder(),
		() => [$.methodSignature("Decode", [["s", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("model.Sample"), "model.Vector"))]], ["error"], true)],
		SampleDecoder,
		() => [/* @__PURE__ */ $.structField("Dec", "expfmt.Decoder", [0], 0, true), /* @__PURE__ */ $.structField("Opts", /* @__PURE__ */ $.pointerType("expfmt.DecodeOptions"), [1], 16, true), /* @__PURE__ */ $.structField("f", "io_prometheus_client.MetricFamily", [2], 24, false, { pkgPath: "github.com/prometheus/common/expfmt" })]
	)
}

export async function ResponseFormat(h: http.Header): globalThis.Promise<__goscript_expfmt.Format> {
	let ct = await http.Header_Get(h, "Content-Type")

	let __goscriptTuple0: any = mime.ParseMediaType(ct)
	let mediatype = __goscriptTuple0[0]
	let params: globalThis.Map<string, string> | null = __goscriptTuple0[1]
	let err = __goscriptTuple0[2]
	if (err != null) {
		return "<unknown>"
	}

	const textType: string = "text/plain"

	switch (mediatype) {
		case "application/vnd.google.protobuf":
		{
			{
				let [p, ok] = $.mapGet<string, string, string>(params, "proto", "")
				if (ok && (!$.stringEqual(p, "io.prometheus.client.MetricFamily"))) {
					return "<unknown>"
				}
			}
			{
				let [e, ok] = $.mapGet<string, string, string>(params, "encoding", "")
				if (ok && (!$.stringEqual(e, "delimited"))) {
					return "<unknown>"
				}
			}
			return "application/vnd.google.protobuf; proto=io.prometheus.client.MetricFamily; encoding=delimited"
			break
		}
		case "text/plain":
		{
			{
				let [v, ok] = $.mapGet<string, string, string>(params, "version", "")
				if (ok && (!$.stringEqual(v, "0.0.4"))) {
					return "<unknown>"
				}
			}
			return "text/plain; version=0.0.4; charset=utf-8"
			break
		}
	}

	return "<unknown>"
}

export function NewDecoder(r: io.Reader | null, format: __goscript_expfmt.Format): Decoder | null {
	switch (format) {
		case "application/vnd.google.protobuf; proto=io.prometheus.client.MetricFamily; encoding=delimited":
		{
			return $.interfaceValue<Decoder | null>(new protoDecoder({r: r}), "*expfmt.protoDecoder", /* @__PURE__ */ $.pointerType("expfmt.protoDecoder"))
			break
		}
	}
	return $.interfaceValue<Decoder | null>(new textDecoder({r: r}), "*expfmt.textDecoder", /* @__PURE__ */ $.pointerType("expfmt.textDecoder"))
}

export async function ExtractSamples(o: DecodeOptions | $.VarRef<DecodeOptions> | null, fams: $.Slice<dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>): globalThis.Promise<[model.Vector, $.GoError]> {
	let all: model.Vector = null! as model.Vector
	let lastErr: $.GoError = null! as $.GoError
	for (let __goscriptRangeTarget2 = fams, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let f = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as dto.MetricFamily | $.VarRef<dto.MetricFamily> | null)
		let __goscriptTuple3: any = await extractSamples(f, o)
		let some: model.Vector = (__goscriptTuple3[0] as model.Vector)
		let err = __goscriptTuple3[1]
		if (err != null) {
			lastErr = err
			continue
		}
		all = ($.appendSlice((all as model.Vector), some, $.appendZeros.nil) as model.Vector)
	}
	return [(all as model.Vector), lastErr]
}

export async function extractSamples(f: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null, o: DecodeOptions | $.VarRef<DecodeOptions> | null): globalThis.Promise<[model.Vector, $.GoError]> {
	switch ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as dto.MetricFamily).GetType() : dto.MetricFamily.prototype.GetType.call(f))) {
		case dto.MetricType_COUNTER:
		{
			return [(extractCounter(o, f) as model.Vector), null]
			break
		}
		case dto.MetricType_GAUGE:
		{
			return [(extractGauge(o, f) as model.Vector), null]
			break
		}
		case dto.MetricType_SUMMARY:
		{
			return [(await extractSummary(o, f) as model.Vector), null]
			break
		}
		case dto.MetricType_UNTYPED:
		{
			return [(extractUntyped(o, f) as model.Vector), null]
			break
		}
		case dto.MetricType_HISTOGRAM:
		{
			return [(await extractHistogram(o, f) as model.Vector), null]
			break
		}
	}
	return [(null as model.Vector), fmt.Errorf("expfmt.extractSamples: unknown metric family type %v", $.namedValueInterfaceValue<any>((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as dto.MetricFamily).GetType() : dto.MetricFamily.prototype.GetType.call(f)), "io_prometheus_client.MetricType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))]
}

export function extractCounter(o: DecodeOptions | $.VarRef<DecodeOptions> | null, f: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null): model.Vector {
	const f$: dto.MetricFamily = f == null ? $.pointerTarget<dto.MetricFamily>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<dto.MetricFamily>(f)
	let samples: model.Vector = ($.makeSlice<model.Sample | $.VarRef<model.Sample> | null>(0, $.sliceLen((f$ as dto.MetricFamily).Metric)) as model.Vector)

	for (let __goscriptRangeTarget4 = (f$ as dto.MetricFamily).Metric, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let m = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as dto.Metric | $.VarRef<dto.Metric> | null)
		if ($.pointerValue<dto.Metric>(m).Counter == null) {
			continue
		}

		let lset: model.LabelSet = $.makeMap<model.LabelName, model.LabelValue>()
		for (let __goscriptRangeTarget3 = $.pointerValue<dto.Metric>(m).Label, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let p = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
			$.mapSet(lset, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(p)), (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(p)))
		}
		$.mapSet(lset, model.MetricNameLabel, (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(f)))

		let smpl: model.Sample | $.VarRef<model.Sample> | null = (() => { const __goscriptLiteralField0 = dto.Counter.prototype.GetValue.call($.pointerValue<dto.Metric>(m).Counter); return new model.Sample({Metric: lset, Value: __goscriptLiteralField0}) })()
		let smpl$: model.Sample = smpl == null ? $.pointerTarget<model.Sample>(smpl) : (smpl as any).__isVarRef === true ? (smpl as any).value : (smpl as any).__goValue === undefined ? (smpl as any) : $.pointerTarget<model.Sample>(smpl)

		if ($.pointerValue<dto.Metric>(m).TimestampMs != null) {
			;(smpl$ as model.Sample).Timestamp = model.TimeFromUnixNano($.int64Mul($.pointerValue<bigint>($.pointerValue<dto.Metric>(m).TimestampMs), 1000000n))
		} else {
			;(smpl$ as model.Sample).Timestamp = $.pointerValue<DecodeOptions>(o).Timestamp
		}

		samples = ($.appendOne((samples as model.Vector), smpl, $.appendZeros.nil) as model.Vector)
	}

	return (samples as model.Vector)
}

export function extractGauge(o: DecodeOptions | $.VarRef<DecodeOptions> | null, f: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null): model.Vector {
	const f$: dto.MetricFamily = f == null ? $.pointerTarget<dto.MetricFamily>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<dto.MetricFamily>(f)
	let samples: model.Vector = ($.makeSlice<model.Sample | $.VarRef<model.Sample> | null>(0, $.sliceLen((f$ as dto.MetricFamily).Metric)) as model.Vector)

	for (let __goscriptRangeTarget6 = (f$ as dto.MetricFamily).Metric, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		let m = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as dto.Metric | $.VarRef<dto.Metric> | null)
		if ($.pointerValue<dto.Metric>(m).Gauge == null) {
			continue
		}

		let lset: model.LabelSet = $.makeMap<model.LabelName, model.LabelValue>()
		for (let __goscriptRangeTarget5 = $.pointerValue<dto.Metric>(m).Label, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let p = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
			$.mapSet(lset, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(p)), (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(p)))
		}
		$.mapSet(lset, model.MetricNameLabel, (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(f)))

		let smpl: model.Sample | $.VarRef<model.Sample> | null = (() => { const __goscriptLiteralField1 = dto.Gauge.prototype.GetValue.call($.pointerValue<dto.Metric>(m).Gauge); return new model.Sample({Metric: lset, Value: __goscriptLiteralField1}) })()
		let smpl$: model.Sample = smpl == null ? $.pointerTarget<model.Sample>(smpl) : (smpl as any).__isVarRef === true ? (smpl as any).value : (smpl as any).__goValue === undefined ? (smpl as any) : $.pointerTarget<model.Sample>(smpl)

		if ($.pointerValue<dto.Metric>(m).TimestampMs != null) {
			;(smpl$ as model.Sample).Timestamp = model.TimeFromUnixNano($.int64Mul($.pointerValue<bigint>($.pointerValue<dto.Metric>(m).TimestampMs), 1000000n))
		} else {
			;(smpl$ as model.Sample).Timestamp = $.pointerValue<DecodeOptions>(o).Timestamp
		}

		samples = ($.appendOne((samples as model.Vector), smpl, $.appendZeros.nil) as model.Vector)
	}

	return (samples as model.Vector)
}

export function extractUntyped(o: DecodeOptions | $.VarRef<DecodeOptions> | null, f: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null): model.Vector {
	const f$: dto.MetricFamily = f == null ? $.pointerTarget<dto.MetricFamily>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<dto.MetricFamily>(f)
	let samples: model.Vector = ($.makeSlice<model.Sample | $.VarRef<model.Sample> | null>(0, $.sliceLen((f$ as dto.MetricFamily).Metric)) as model.Vector)

	for (let __goscriptRangeTarget8 = (f$ as dto.MetricFamily).Metric, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
		let m = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as dto.Metric | $.VarRef<dto.Metric> | null)
		if ($.pointerValue<dto.Metric>(m).Untyped == null) {
			continue
		}

		let lset: model.LabelSet = $.makeMap<model.LabelName, model.LabelValue>()
		for (let __goscriptRangeTarget7 = $.pointerValue<dto.Metric>(m).Label, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
			let p = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
			$.mapSet(lset, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(p)), (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(p)))
		}
		$.mapSet(lset, model.MetricNameLabel, (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(f)))

		let smpl: model.Sample | $.VarRef<model.Sample> | null = (() => { const __goscriptLiteralField2 = dto.Untyped.prototype.GetValue.call($.pointerValue<dto.Metric>(m).Untyped); return new model.Sample({Metric: lset, Value: __goscriptLiteralField2}) })()
		let smpl$: model.Sample = smpl == null ? $.pointerTarget<model.Sample>(smpl) : (smpl as any).__isVarRef === true ? (smpl as any).value : (smpl as any).__goValue === undefined ? (smpl as any) : $.pointerTarget<model.Sample>(smpl)

		if ($.pointerValue<dto.Metric>(m).TimestampMs != null) {
			;(smpl$ as model.Sample).Timestamp = model.TimeFromUnixNano($.int64Mul($.pointerValue<bigint>($.pointerValue<dto.Metric>(m).TimestampMs), 1000000n))
		} else {
			;(smpl$ as model.Sample).Timestamp = $.pointerValue<DecodeOptions>(o).Timestamp
		}

		samples = ($.appendOne((samples as model.Vector), smpl, $.appendZeros.nil) as model.Vector)
	}

	return (samples as model.Vector)
}

export async function extractSummary(o: DecodeOptions | $.VarRef<DecodeOptions> | null, f: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null): globalThis.Promise<model.Vector> {
	const f$: dto.MetricFamily = f == null ? $.pointerTarget<dto.MetricFamily>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<dto.MetricFamily>(f)
	let samples: model.Vector = ($.makeSlice<model.Sample | $.VarRef<model.Sample> | null>(0, $.sliceLen((f$ as dto.MetricFamily).Metric)) as model.Vector)

	for (let __goscriptRangeTarget13 = (f$ as dto.MetricFamily).Metric, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
		let m = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as dto.Metric | $.VarRef<dto.Metric> | null)
		if ($.pointerValue<dto.Metric>(m).Summary == null) {
			continue
		}

		let timestamp = $.pointerValue<DecodeOptions>(o).Timestamp
		if ($.pointerValue<dto.Metric>(m).TimestampMs != null) {
			timestamp = model.TimeFromUnixNano($.int64Mul($.pointerValue<bigint>($.pointerValue<dto.Metric>(m).TimestampMs), 1000000n))
		}

		for (let __goscriptRangeTarget10 = $.pointerValue<dto.Summary>($.pointerValue<dto.Metric>(m).Summary).Quantile, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
			let q = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as dto.Quantile | $.VarRef<dto.Quantile> | null)
			let lset: model.LabelSet = $.makeMap<model.LabelName, model.LabelValue>()
			for (let __goscriptRangeTarget9 = $.pointerValue<dto.Metric>(m).Label, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
				let p = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
				$.mapSet(lset, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(p)), (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(p)))
			}
			// BUG(matt): Update other names to "quantile".
			$.mapSet(lset, model.QuantileLabel, await fmt.Sprint($.basicInterfaceValue((q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as dto.Quantile).GetQuantile() : dto.Quantile.prototype.GetQuantile.call(q)), "float64")))
			$.mapSet(lset, model.MetricNameLabel, (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(f)))

			samples = ($.appendOne((samples as model.Vector), (() => { const __goscriptLiteralField3 = (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as dto.Quantile).GetValue() : dto.Quantile.prototype.GetValue.call(q)); return new model.Sample({Metric: lset, Value: __goscriptLiteralField3, Timestamp: timestamp}) })(), $.appendZeros.nil) as model.Vector)
		}

		let lset: model.LabelSet = $.makeMap<model.LabelName, model.LabelValue>()
		for (let __goscriptRangeTarget11 = $.pointerValue<dto.Metric>(m).Label, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
			let p = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
			$.mapSet(lset, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(p)), (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(p)))
		}
		$.mapSet(lset, model.MetricNameLabel, ($.concatString((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(f)), "_sum")))

		samples = ($.appendOne((samples as model.Vector), (() => { const __goscriptLiteralField4 = dto.Summary.prototype.GetSampleSum.call($.pointerValue<dto.Metric>(m).Summary); return new model.Sample({Metric: lset, Value: __goscriptLiteralField4, Timestamp: timestamp}) })(), $.appendZeros.nil) as model.Vector)

		lset = $.makeMap<model.LabelName, model.LabelValue>()
		for (let __goscriptRangeTarget12 = $.pointerValue<dto.Metric>(m).Label, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
			let p = (__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
			$.mapSet(lset, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(p)), (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(p)))
		}
		$.mapSet(lset, model.MetricNameLabel, ($.concatString((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(f)), "_count")))

		samples = ($.appendOne((samples as model.Vector), (() => { const __goscriptLiteralField5 = globalThis.Number(dto.Summary.prototype.GetSampleCount.call($.pointerValue<dto.Metric>(m).Summary)); return new model.Sample({Metric: lset, Value: __goscriptLiteralField5, Timestamp: timestamp}) })(), $.appendZeros.nil) as model.Vector)
	}

	return (samples as model.Vector)
}

export async function extractHistogram(o: DecodeOptions | $.VarRef<DecodeOptions> | null, f: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null): globalThis.Promise<model.Vector> {
	const f$: dto.MetricFamily = f == null ? $.pointerTarget<dto.MetricFamily>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<dto.MetricFamily>(f)
	let samples: model.Vector = ($.makeSlice<model.Sample | $.VarRef<model.Sample> | null>(0, $.sliceLen((f$ as dto.MetricFamily).Metric)) as model.Vector)

	for (let __goscriptRangeTarget19 = (f$ as dto.MetricFamily).Metric, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget19), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow14.length; __rangeIndex++) {
		let m = (__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + __rangeIndex] as dto.Metric | $.VarRef<dto.Metric> | null)
		if ($.pointerValue<dto.Metric>(m).Histogram == null) {
			continue
		}

		let timestamp = $.pointerValue<DecodeOptions>(o).Timestamp
		if ($.pointerValue<dto.Metric>(m).TimestampMs != null) {
			timestamp = model.TimeFromUnixNano($.int64Mul($.pointerValue<bigint>($.pointerValue<dto.Metric>(m).TimestampMs), 1000000n))
		}

		let infSeen = false

		for (let __goscriptRangeTarget15 = $.pointerValue<dto.Histogram>($.pointerValue<dto.Metric>(m).Histogram).Bucket, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow15.length; __rangeIndex++) {
			let q = (__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + __rangeIndex] as dto.Bucket | $.VarRef<dto.Bucket> | null)
			let lset: model.LabelSet = $.makeMap<model.LabelName, model.LabelValue>()
			for (let __goscriptRangeTarget14 = $.pointerValue<dto.Metric>(m).Label, __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget14), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow16.length; __rangeIndex++) {
				let p = (__goscriptRangeWindow16.backing[__goscriptRangeWindow16.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
				$.mapSet(lset, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(p)), (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(p)))
			}
			$.mapSet(lset, model.BucketLabel, await fmt.Sprint($.basicInterfaceValue((q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as dto.Bucket).GetUpperBound() : dto.Bucket.prototype.GetUpperBound.call(q)), "float64")))
			$.mapSet(lset, model.MetricNameLabel, ($.concatString((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(f)), "_bucket")))

			if (math.IsInf((q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as dto.Bucket).GetUpperBound() : dto.Bucket.prototype.GetUpperBound.call(q)), 1)) {
				infSeen = true
			}

			samples = ($.appendOne((samples as model.Vector), (() => { const __goscriptLiteralField6 = globalThis.Number((q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as dto.Bucket).GetCumulativeCount() : dto.Bucket.prototype.GetCumulativeCount.call(q))); return new model.Sample({Metric: lset, Value: __goscriptLiteralField6, Timestamp: timestamp}) })(), $.appendZeros.nil) as model.Vector)
		}

		let lset: model.LabelSet = $.makeMap<model.LabelName, model.LabelValue>()
		for (let __goscriptRangeTarget16 = $.pointerValue<dto.Metric>(m).Label, __goscriptRangeWindow17 = $.sliceRange(__goscriptRangeTarget16), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow17.length; __rangeIndex++) {
			let p = (__goscriptRangeWindow17.backing[__goscriptRangeWindow17.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
			$.mapSet(lset, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(p)), (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(p)))
		}
		$.mapSet(lset, model.MetricNameLabel, ($.concatString((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(f)), "_sum")))

		samples = ($.appendOne((samples as model.Vector), (() => { const __goscriptLiteralField7 = dto.Histogram.prototype.GetSampleSum.call($.pointerValue<dto.Metric>(m).Histogram); return new model.Sample({Metric: lset, Value: __goscriptLiteralField7, Timestamp: timestamp}) })(), $.appendZeros.nil) as model.Vector)

		lset = $.makeMap<model.LabelName, model.LabelValue>()
		for (let __goscriptRangeTarget17 = $.pointerValue<dto.Metric>(m).Label, __goscriptRangeWindow18 = $.sliceRange(__goscriptRangeTarget17), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow18.length; __rangeIndex++) {
			let p = (__goscriptRangeWindow18.backing[__goscriptRangeWindow18.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
			$.mapSet(lset, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(p)), (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(p)))
		}
		$.mapSet(lset, model.MetricNameLabel, ($.concatString((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(f)), "_count")))

		let count: model.Sample | $.VarRef<model.Sample> | null = (() => { const __goscriptLiteralField8 = globalThis.Number(dto.Histogram.prototype.GetSampleCount.call($.pointerValue<dto.Metric>(m).Histogram)); return new model.Sample({Metric: lset, Value: __goscriptLiteralField8, Timestamp: timestamp}) })()
		samples = ($.appendOne((samples as model.Vector), count, $.appendZeros.nil) as model.Vector)

		if (!infSeen) {
			// Append an infinity bucket sample.
			let __goscriptShadow0: model.LabelSet = $.makeMap<model.LabelName, model.LabelValue>()
			for (let __goscriptRangeTarget18 = $.pointerValue<dto.Metric>(m).Label, __goscriptRangeWindow19 = $.sliceRange(__goscriptRangeTarget18), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow19.length; __rangeIndex++) {
				let p = (__goscriptRangeWindow19.backing[__goscriptRangeWindow19.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
				$.mapSet(__goscriptShadow0, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(p)), (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(p)))
			}
			$.mapSet(__goscriptShadow0, model.BucketLabel, "+Inf")
			$.mapSet(__goscriptShadow0, model.MetricNameLabel, ($.concatString((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as dto.MetricFamily).GetName() : dto.MetricFamily.prototype.GetName.call(f)), "_bucket")))

			samples = ($.appendOne((samples as model.Vector), new model.Sample({Metric: __goscriptShadow0, Value: $.pointerValue<model.Sample>(count).Value, Timestamp: timestamp}), $.appendZeros.nil) as model.Vector)
		}
	}

	return (samples as model.Vector)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (dto.MetricType_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (dto.MetricType_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (dto.MetricType_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (dto.MetricType_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (dto.MetricType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (dto.MetricType_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int32", "io_prometheus_client.MetricType"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "io_prometheus_client.MetricType"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptAwait: any
