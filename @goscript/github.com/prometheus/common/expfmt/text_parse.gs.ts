// Generated file based on text_parse.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as dto from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as proto from "@goscript/github.com/golang/protobuf/proto/index.js"

import * as model from "@goscript/github.com/prometheus/common/model/index.js"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "@goscript/github.com/golang/protobuf/proto/index.js"
import "@goscript/github.com/prometheus/common/model/index.js"

$.registerTypePackagePath("github.com/prometheus/common/expfmt", ["expfmt.stateFn", "expfmt.ParseError", "expfmt.TextParser"])

export type stateFn = (() => stateFn | null | globalThis.Promise<stateFn | null>) | null

export class ParseError {
	public get Line(): number {
		return this._fields.Line
	}

	public set Line(value: number) {
		this._fields.Line = value
	}

	public get Msg(): string {
		return this._fields.Msg
	}

	public set Msg(value: string) {
		this._fields.Msg = value
	}

	public _fields: {
		Line: number
		Msg: string
	}

	constructor(init?: Partial<{Line?: number, Msg?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Line: init?.Line ?? (0 as number),
			Msg: init?.Msg ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ParseError {
		return new ParseError(this, true)
	}

	public __goscriptAssign(source: ParseError): void {
		const target = this._fields
		const values = source._fields
		target.Line = values.Line
		target.Msg = values.Msg
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprintf("text format parsing error in line %d: %s", $.basicInterfaceValue(e.Line, "int"), e.Msg)
	}

	static __typeInfo = $.registerStructType(
		"expfmt.ParseError",
		() => new ParseError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		ParseError,
		() => [/* @__PURE__ */ $.structField("Line", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("Msg", /* @__PURE__ */ $.basicType("string"), [1], 8, true)]
	)
}

export class TextParser {
	public get metricFamiliesByName(): globalThis.Map<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null> | null {
		return this._fields.metricFamiliesByName
	}

	public set metricFamiliesByName(value: globalThis.Map<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null> | null) {
		this._fields.metricFamiliesByName = value
	}

	public get buf(): bufio.Reader | $.VarRef<bufio.Reader> | null {
		return this._fields.buf
	}

	public set buf(value: bufio.Reader | $.VarRef<bufio.Reader> | null) {
		this._fields.buf = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get lineCount(): number {
		return this._fields.lineCount
	}

	public set lineCount(value: number) {
		this._fields.lineCount = value
	}

	public get currentByte(): number {
		return this._fields.currentByte
	}

	public set currentByte(value: number) {
		this._fields.currentByte = value
	}

	public get currentToken(): bytes.Buffer {
		return this._fields.currentToken
	}

	public set currentToken(value: bytes.Buffer) {
		this._fields.currentToken = value
	}

	public get currentMF(): dto.MetricFamily | $.VarRef<dto.MetricFamily> | null {
		return this._fields.currentMF
	}

	public set currentMF(value: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null) {
		this._fields.currentMF = value
	}

	public get currentMetric(): dto.Metric | $.VarRef<dto.Metric> | null {
		return this._fields.currentMetric
	}

	public set currentMetric(value: dto.Metric | $.VarRef<dto.Metric> | null) {
		this._fields.currentMetric = value
	}

	public get currentLabelPair(): dto.LabelPair | $.VarRef<dto.LabelPair> | null {
		return this._fields.currentLabelPair
	}

	public set currentLabelPair(value: dto.LabelPair | $.VarRef<dto.LabelPair> | null) {
		this._fields.currentLabelPair = value
	}

	// The remaining member variables are only used for summaries/histograms.
	public get currentLabels(): globalThis.Map<string, string> | null {
		return this._fields.currentLabels
	}

	public set currentLabels(value: globalThis.Map<string, string> | null) {
		this._fields.currentLabels = value
	}

	// Summary specific.
	public get summaries(): globalThis.Map<bigint, dto.Metric | $.VarRef<dto.Metric> | null> | null {
		return this._fields.summaries
	}

	public set summaries(value: globalThis.Map<bigint, dto.Metric | $.VarRef<dto.Metric> | null> | null) {
		this._fields.summaries = value
	}

	public get currentQuantile(): number {
		return this._fields.currentQuantile
	}

	public set currentQuantile(value: number) {
		this._fields.currentQuantile = value
	}

	// Histogram specific.
	public get histograms(): globalThis.Map<bigint, dto.Metric | $.VarRef<dto.Metric> | null> | null {
		return this._fields.histograms
	}

	public set histograms(value: globalThis.Map<bigint, dto.Metric | $.VarRef<dto.Metric> | null> | null) {
		this._fields.histograms = value
	}

	public get currentBucket(): number {
		return this._fields.currentBucket
	}

	public set currentBucket(value: number) {
		this._fields.currentBucket = value
	}

	// These tell us if the currently processed line ends on '_count' or
	// '_sum' respectively and belong to a summary/histogram, representing the sample
	// count and sum of that summary/histogram.
	public get currentIsSummaryCount(): boolean {
		return this._fields.currentIsSummaryCount
	}

	public set currentIsSummaryCount(value: boolean) {
		this._fields.currentIsSummaryCount = value
	}

	// These tell us if the currently processed line ends on '_count' or
	// '_sum' respectively and belong to a summary/histogram, representing the sample
	// count and sum of that summary/histogram.
	public get currentIsSummarySum(): boolean {
		return this._fields.currentIsSummarySum
	}

	public set currentIsSummarySum(value: boolean) {
		this._fields.currentIsSummarySum = value
	}

	public get currentIsHistogramCount(): boolean {
		return this._fields.currentIsHistogramCount
	}

	public set currentIsHistogramCount(value: boolean) {
		this._fields.currentIsHistogramCount = value
	}

	public get currentIsHistogramSum(): boolean {
		return this._fields.currentIsHistogramSum
	}

	public set currentIsHistogramSum(value: boolean) {
		this._fields.currentIsHistogramSum = value
	}

	public _fields: {
		metricFamiliesByName: globalThis.Map<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null> | null
		buf: bufio.Reader | $.VarRef<bufio.Reader> | null
		err: $.GoError
		lineCount: number
		currentByte: number
		currentToken: bytes.Buffer
		currentMF: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null
		currentMetric: dto.Metric | $.VarRef<dto.Metric> | null
		currentLabelPair: dto.LabelPair | $.VarRef<dto.LabelPair> | null
		currentLabels: globalThis.Map<string, string> | null
		summaries: globalThis.Map<bigint, dto.Metric | $.VarRef<dto.Metric> | null> | null
		currentQuantile: number
		histograms: globalThis.Map<bigint, dto.Metric | $.VarRef<dto.Metric> | null> | null
		currentBucket: number
		currentIsSummaryCount: boolean
		currentIsSummarySum: boolean
		currentIsHistogramCount: boolean
		currentIsHistogramSum: boolean
	}

	constructor(init?: Partial<{metricFamiliesByName?: globalThis.Map<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null> | null, buf?: bufio.Reader | $.VarRef<bufio.Reader> | null, err?: $.GoError, lineCount?: number, currentByte?: number, currentToken?: bytes.Buffer, currentMF?: dto.MetricFamily | $.VarRef<dto.MetricFamily> | null, currentMetric?: dto.Metric | $.VarRef<dto.Metric> | null, currentLabelPair?: dto.LabelPair | $.VarRef<dto.LabelPair> | null, currentLabels?: globalThis.Map<string, string> | null, summaries?: globalThis.Map<bigint, dto.Metric | $.VarRef<dto.Metric> | null> | null, currentQuantile?: number, histograms?: globalThis.Map<bigint, dto.Metric | $.VarRef<dto.Metric> | null> | null, currentBucket?: number, currentIsSummaryCount?: boolean, currentIsSummarySum?: boolean, currentIsHistogramCount?: boolean, currentIsHistogramSum?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			metricFamiliesByName: init?.metricFamiliesByName ?? (null! as globalThis.Map<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null> | null),
			buf: init?.buf ?? (null! as bufio.Reader | $.VarRef<bufio.Reader> | null),
			err: init?.err ?? (null! as $.GoError),
			lineCount: init?.lineCount ?? (0 as number),
			currentByte: init?.currentByte ?? (0 as number),
			currentToken: init?.currentToken ? $.markAsStructValue($.cloneStructValue(init.currentToken)) : $.markAsStructValue(new bytes.Buffer()),
			currentMF: init?.currentMF ?? (null! as dto.MetricFamily | $.VarRef<dto.MetricFamily> | null),
			currentMetric: init?.currentMetric ?? (null! as dto.Metric | $.VarRef<dto.Metric> | null),
			currentLabelPair: init?.currentLabelPair ?? (null! as dto.LabelPair | $.VarRef<dto.LabelPair> | null),
			currentLabels: init?.currentLabels ?? (null! as globalThis.Map<string, string> | null),
			summaries: init?.summaries ?? (null! as globalThis.Map<bigint, dto.Metric | $.VarRef<dto.Metric> | null> | null),
			currentQuantile: init?.currentQuantile ?? (0 as number),
			histograms: init?.histograms ?? (null! as globalThis.Map<bigint, dto.Metric | $.VarRef<dto.Metric> | null> | null),
			currentBucket: init?.currentBucket ?? (0 as number),
			currentIsSummaryCount: init?.currentIsSummaryCount ?? (false as boolean),
			currentIsSummarySum: init?.currentIsSummarySum ?? (false as boolean),
			currentIsHistogramCount: init?.currentIsHistogramCount ?? (false as boolean),
			currentIsHistogramSum: init?.currentIsHistogramSum ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TextParser {
		return new TextParser(this, true)
	}

	public __goscriptAssign(source: TextParser): void {
		const target = this._fields
		const values = source._fields
		target.metricFamiliesByName = values.metricFamiliesByName
		target.buf = values.buf
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.lineCount = values.lineCount
		target.currentByte = values.currentByte
		$.assignStruct(target.currentToken, values.currentToken)
		target.currentMF = values.currentMF
		target.currentMetric = values.currentMetric
		target.currentLabelPair = values.currentLabelPair
		target.currentLabels = values.currentLabels
		target.summaries = values.summaries
		target.currentQuantile = values.currentQuantile
		target.histograms = values.histograms
		target.currentBucket = values.currentBucket
		target.currentIsSummaryCount = values.currentIsSummaryCount
		target.currentIsSummarySum = values.currentIsSummarySum
		target.currentIsHistogramCount = values.currentIsHistogramCount
		target.currentIsHistogramSum = values.currentIsHistogramSum
	}

	public async TextToMetricFamilies(_in: io.Reader | null): globalThis.Promise<[globalThis.Map<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null> | null, $.GoError]> {
		const p: TextParser | $.VarRef<TextParser> | null = this;
		const p$: TextParser = p == null ? $.pointerTarget<TextParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TextParser>(p)
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).reset(_in) : TextParser.prototype.reset.call(p, _in))
		for (let nextState: (() => stateFn | null | globalThis.Promise<stateFn | null>) | null = $.functionValue(((__receiver) => () => __receiver.startOfLine())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).startOfLine-fm"); nextState != null; nextState = ((__goscriptAwait = nextState!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as stateFn | null)) {
		}
		// Get rid of empty metric families.
		for (const [k, mf] of (p$ as TextParser).metricFamiliesByName?.entries() ?? []) {
			if ($.sliceLen((mf !== null && (mf as any).__isVarRef !== true && (mf as any).__goValue === undefined ? ((mf as any) as dto.MetricFamily).GetMetric() : dto.MetricFamily.prototype.GetMetric.call(mf))) == 0) {
				$.deleteMapEntry((p$ as TextParser).metricFamiliesByName, k)
			}
		}
		// If p.err is io.EOF now, we have run into a premature end of the input
		// stream. Turn this error into something nicer and more
		// meaningful. (io.EOF is often used as a signal for the legitimate end
		// of an input stream.)
		if ($.comparableEqual((p$ as TextParser).err, io.EOF)) {
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).parseError("unexpected end of input stream") : TextParser.prototype.parseError.call(p, "unexpected end of input stream"))
		}
		return [(p$ as TextParser).metricFamiliesByName, (p$ as TextParser).err]
	}

	public parseError(msg: string): void {
		let p: TextParser | $.VarRef<TextParser> | null = this;
		const p$: TextParser = p == null ? $.pointerTarget<TextParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TextParser>(p);
		;(p$ as TextParser).err = $.interfaceValue<$.GoError>(new ParseError({Line: (p$ as TextParser).lineCount, Msg: msg}, true), "expfmt.ParseError", "expfmt.ParseError")
	}

	public async readTokenAsLabelName(): globalThis.Promise<void> {
		let p: TextParser | $.VarRef<TextParser> | null = this;
		const p$: TextParser = p == null ? $.pointerTarget<TextParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TextParser>(p)
		void (p$ as TextParser).currentToken.Reset()
		if (!isValidLabelNameStart((p$ as TextParser).currentByte)) {
			return
		}
		while (true) {
			void (p$ as TextParser).currentToken.WriteByte((p$ as TextParser).currentByte)
			let __goscriptTuple0: any = await bufio.Reader.prototype.ReadByte.call((p$ as TextParser).buf);
			;(p$ as TextParser).currentByte = __goscriptTuple0[0];
			;(p$ as TextParser).err = __goscriptTuple0[1]
			if (((p$ as TextParser).err != null) || !isValidLabelNameContinuation((p$ as TextParser).currentByte)) {
				return
			}
		}
	}

	public async readTokenAsLabelValue(): globalThis.Promise<void> {
		let p: TextParser | $.VarRef<TextParser> | null = this;
		const p$: TextParser = p == null ? $.pointerTarget<TextParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TextParser>(p)
		void (p$ as TextParser).currentToken.Reset()
		let escaped = false
		while (true) {
			{
				let __goscriptTuple1: any = await bufio.Reader.prototype.ReadByte.call((p$ as TextParser).buf);
				;(p$ as TextParser).currentByte = __goscriptTuple1[0];
				;(p$ as TextParser).err = __goscriptTuple1[1]
				if ((p$ as TextParser).err != null) {
					return
				}
			}
			if (escaped) {
				switch ((p$ as TextParser).currentByte) {
					case 34:
					case 92:
					{
						void (p$ as TextParser).currentToken.WriteByte((p$ as TextParser).currentByte)
						break
					}
					case 110:
					{
						void (p$ as TextParser).currentToken.WriteByte(10)
						break
					}
					default:
					{
						TextParser.prototype.parseError.call(p, await fmt.Sprintf("invalid escape sequence '\\%c'", $.basicInterfaceValue((p$ as TextParser).currentByte, "byte", "uint8")))
						return
						break
					}
				}
				escaped = false
				continue
			}
			switch ((p$ as TextParser).currentByte) {
				case 34:
				{
					return
					break
				}
				case 10:
				{
					void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).parseError(await fmt.Sprintf("label value %q contains unescaped new-line", (p$ as TextParser).currentToken.String())) : TextParser.prototype.parseError.call(p, await fmt.Sprintf("label value %q contains unescaped new-line", (p$ as TextParser).currentToken.String())))
					return
					break
				}
				case 92:
				{
					escaped = true
					break
				}
				default:
				{
					void (p$ as TextParser).currentToken.WriteByte((p$ as TextParser).currentByte)
					break
				}
			}
		}
	}

	public async readTokenAsMetricName(): globalThis.Promise<void> {
		let p: TextParser | $.VarRef<TextParser> | null = this;
		const p$: TextParser = p == null ? $.pointerTarget<TextParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TextParser>(p)
		void (p$ as TextParser).currentToken.Reset()
		if (!isValidMetricNameStart((p$ as TextParser).currentByte)) {
			return
		}
		while (true) {
			void (p$ as TextParser).currentToken.WriteByte((p$ as TextParser).currentByte)
			let __goscriptTuple2: any = await bufio.Reader.prototype.ReadByte.call((p$ as TextParser).buf);
			;(p$ as TextParser).currentByte = __goscriptTuple2[0];
			;(p$ as TextParser).err = __goscriptTuple2[1]
			if (((p$ as TextParser).err != null) || !isValidMetricNameContinuation((p$ as TextParser).currentByte)) {
				return
			}
		}
	}

	public async readTokenUntilNewline(recognizeEscapeSequence: boolean): globalThis.Promise<void> {
		let p: TextParser | $.VarRef<TextParser> | null = this;
		const p$: TextParser = p == null ? $.pointerTarget<TextParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TextParser>(p)
		void (p$ as TextParser).currentToken.Reset()
		let escaped = false
		while ((p$ as TextParser).err == null) {
			if (recognizeEscapeSequence && escaped) {
				switch ((p$ as TextParser).currentByte) {
					case 92:
					{
						void (p$ as TextParser).currentToken.WriteByte((p$ as TextParser).currentByte)
						break
					}
					case 110:
					{
						void (p$ as TextParser).currentToken.WriteByte(10)
						break
					}
					default:
					{
						TextParser.prototype.parseError.call(p, await fmt.Sprintf("invalid escape sequence '\\%c'", $.basicInterfaceValue((p$ as TextParser).currentByte, "byte", "uint8")))
						return
						break
					}
				}
				escaped = false
			} else {
				switch ((p$ as TextParser).currentByte) {
					case 10:
					{
						return
						break
					}
					case 92:
					{
						escaped = true
						break
					}
					default:
					{
						void (p$ as TextParser).currentToken.WriteByte((p$ as TextParser).currentByte)
						break
					}
				}
			}
			let __goscriptTuple3: any = await bufio.Reader.prototype.ReadByte.call((p$ as TextParser).buf);
			;(p$ as TextParser).currentByte = __goscriptTuple3[0];
			;(p$ as TextParser).err = __goscriptTuple3[1]
		}
	}

	public async readTokenUntilWhitespace(): globalThis.Promise<void> {
		let p: TextParser | $.VarRef<TextParser> | null = this;
		const p$: TextParser = p == null ? $.pointerTarget<TextParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TextParser>(p)
		void (p$ as TextParser).currentToken.Reset()
		while ((((p$ as TextParser).err == null) && !isBlankOrTab((p$ as TextParser).currentByte)) && ((p$ as TextParser).currentByte != 10)) {
			void (p$ as TextParser).currentToken.WriteByte((p$ as TextParser).currentByte)
			let __goscriptTuple4: any = await bufio.Reader.prototype.ReadByte.call((p$ as TextParser).buf);
			;(p$ as TextParser).currentByte = __goscriptTuple4[0];
			;(p$ as TextParser).err = __goscriptTuple4[1]
		}
	}

	public async readingHelp(): globalThis.Promise<stateFn | null> {
		let p: TextParser | $.VarRef<TextParser> | null = this;
		const p$: TextParser = p == null ? $.pointerTarget<TextParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TextParser>(p)
		if ($.pointerValue<dto.MetricFamily>((p$ as TextParser).currentMF).Help != null) {
			TextParser.prototype.parseError.call(p, await fmt.Sprintf("second HELP line for metric name %q", dto.MetricFamily.prototype.GetName.call((p$ as TextParser).currentMF)))
			return (null as stateFn | null)
		}
		// Rest of line is the docstring.
		{
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).readTokenUntilNewline(true) : TextParser.prototype.readTokenUntilNewline.call(p, true))
			if ((p$ as TextParser).err != null) {
				return (null as stateFn | null)
			}
		}
		$.pointerValue<dto.MetricFamily>((p$ as TextParser).currentMF).Help = proto.String((p$ as TextParser).currentToken.String())
		return $.functionValue(((__receiver) => () => __receiver.startOfLine())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).startOfLine-fm")
	}

	public readingLabels(): stateFn | null {
		let p: TextParser | $.VarRef<TextParser> | null = this;
		const p$: TextParser = p == null ? $.pointerTarget<TextParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TextParser>(p)
		// Summaries/histograms are special. We have to reset the
		// currentLabels map, currentQuantile and currentBucket before starting to
		// read labels.
		if ((dto.MetricFamily.prototype.GetType.call((p$ as TextParser).currentMF) == 2) || (dto.MetricFamily.prototype.GetType.call((p$ as TextParser).currentMF) == 4)) {
			;(p$ as TextParser).currentLabels = $.makeMap<string, string>([])
			$.mapSet((p$ as TextParser).currentLabels, model.MetricNameLabel, dto.MetricFamily.prototype.GetName.call((p$ as TextParser).currentMF));
			;(p$ as TextParser).currentQuantile = math.NaN();
			;(p$ as TextParser).currentBucket = math.NaN()
		}
		if ((p$ as TextParser).currentByte != 123) {
			return $.functionValue(((__receiver) => () => __receiver.readingValue())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).readingValue-fm")
		}
		return $.functionValue(((__receiver) => () => __receiver.startLabelName())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).startLabelName-fm")
	}

	public async readingMetricName(): globalThis.Promise<stateFn | null> {
		let p: TextParser | $.VarRef<TextParser> | null = this;
		const p$: TextParser = p == null ? $.pointerTarget<TextParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TextParser>(p)
		{
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).readTokenAsMetricName() : TextParser.prototype.readTokenAsMetricName.call(p))
			if ((p$ as TextParser).err != null) {
				return (null as stateFn | null)
			}
		}
		if ((p$ as TextParser).currentToken.Len() == 0) {
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).parseError("invalid metric name") : TextParser.prototype.parseError.call(p, "invalid metric name"))
			return (null as stateFn | null)
		}
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).setOrCreateCurrentMF() : TextParser.prototype.setOrCreateCurrentMF.call(p))
		// Now is the time to fix the type if it hasn't happened yet.
		if ($.pointerValue<dto.MetricFamily>((p$ as TextParser).currentMF).Type == null) {
			$.pointerValue<dto.MetricFamily>((p$ as TextParser).currentMF).Type = dto.MetricType_Enum(dto.MetricType_UNTYPED)
		}
		;(p$ as TextParser).currentMetric = new dto.Metric()
		// Do not append the newly created currentMetric to
		// currentMF.Metric right now. First wait if this is a summary,
		// and the metric exists already, which we can only know after
		// having read all the labels.
		{
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).skipBlankTabIfCurrentBlankTab() : TextParser.prototype.skipBlankTabIfCurrentBlankTab.call(p))
			if ((p$ as TextParser).err != null) {
				return (null as stateFn | null)
			}
		}
		return $.functionValue(((__receiver) => () => __receiver.readingLabels())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).readingLabels-fm")
	}

	public async readingType(): globalThis.Promise<stateFn | null> {
		let p: TextParser | $.VarRef<TextParser> | null = this;
		const p$: TextParser = p == null ? $.pointerTarget<TextParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TextParser>(p)
		if ($.pointerValue<dto.MetricFamily>((p$ as TextParser).currentMF).Type != null) {
			TextParser.prototype.parseError.call(p, await fmt.Sprintf("second TYPE line for metric name %q, or TYPE reported after samples", dto.MetricFamily.prototype.GetName.call((p$ as TextParser).currentMF)))
			return (null as stateFn | null)
		}
		// Rest of line is the type.
		{
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).readTokenUntilNewline(false) : TextParser.prototype.readTokenUntilNewline.call(p, false))
			if ((p$ as TextParser).err != null) {
				return (null as stateFn | null)
			}
		}
		let [metricType, ok] = $.mapGet<string, number, number>(dto.MetricType_value, strings.ToUpper((p$ as TextParser).currentToken.String()), 0)
		if (!ok) {
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).parseError(await fmt.Sprintf("unknown metric type %q", (p$ as TextParser).currentToken.String())) : TextParser.prototype.parseError.call(p, await fmt.Sprintf("unknown metric type %q", (p$ as TextParser).currentToken.String())))
			return (null as stateFn | null)
		}
		$.pointerValue<dto.MetricFamily>((p$ as TextParser).currentMF).Type = dto.MetricType_Enum($.int(metricType, 32))
		return $.functionValue(((__receiver) => () => __receiver.startOfLine())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).startOfLine-fm")
	}

	public async readingValue(): globalThis.Promise<stateFn | null> {
		let p: TextParser | $.VarRef<TextParser> | null = this;
		const p$: TextParser = p == null ? $.pointerTarget<TextParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TextParser>(p)
		// When we are here, we have read all the labels, so for the
		// special case of a summary/histogram, we can finally find out
		// if the metric already exists.
		if (dto.MetricFamily.prototype.GetType.call((p$ as TextParser).currentMF) == 2) {
			let signature = model.LabelsToSignature((p$ as TextParser).currentLabels)
			{
				let summary: dto.Metric | $.VarRef<dto.Metric> | null = $.mapGet<bigint, dto.Metric | $.VarRef<dto.Metric> | null, dto.Metric | $.VarRef<dto.Metric> | null>((p$ as TextParser).summaries, signature, null)[0]
				if (summary != null) {
					;(p$ as TextParser).currentMetric = summary
				} else {
					$.mapSet((p$ as TextParser).summaries, signature, (p$ as TextParser).currentMetric)
					$.pointerValue<dto.MetricFamily>((p$ as TextParser).currentMF).Metric = $.appendOne($.pointerValue<dto.MetricFamily>((p$ as TextParser).currentMF).Metric, (p$ as TextParser).currentMetric, $.appendZeros.nil)
				}
			}
		} else {
			if (dto.MetricFamily.prototype.GetType.call((p$ as TextParser).currentMF) == 4) {
				let signature = model.LabelsToSignature((p$ as TextParser).currentLabels)
				{
					let histogram: dto.Metric | $.VarRef<dto.Metric> | null = $.mapGet<bigint, dto.Metric | $.VarRef<dto.Metric> | null, dto.Metric | $.VarRef<dto.Metric> | null>((p$ as TextParser).histograms, signature, null)[0]
					if (histogram != null) {
						;(p$ as TextParser).currentMetric = histogram
					} else {
						$.mapSet((p$ as TextParser).histograms, signature, (p$ as TextParser).currentMetric)
						$.pointerValue<dto.MetricFamily>((p$ as TextParser).currentMF).Metric = $.appendOne($.pointerValue<dto.MetricFamily>((p$ as TextParser).currentMF).Metric, (p$ as TextParser).currentMetric, $.appendZeros.nil)
					}
				}
			} else {
				$.pointerValue<dto.MetricFamily>((p$ as TextParser).currentMF).Metric = $.appendOne($.pointerValue<dto.MetricFamily>((p$ as TextParser).currentMF).Metric, (p$ as TextParser).currentMetric, $.appendZeros.nil)
			}
		}
		{
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).readTokenUntilWhitespace() : TextParser.prototype.readTokenUntilWhitespace.call(p))
			if ((p$ as TextParser).err != null) {
				return (null as stateFn | null)
			}
		}
		let [value, err] = parseFloat((p$ as TextParser).currentToken.String())
		if (err != null) {
			// Create a more helpful error message.
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).parseError(await fmt.Sprintf("expected float as value, got %q", (p$ as TextParser).currentToken.String())) : TextParser.prototype.parseError.call(p, await fmt.Sprintf("expected float as value, got %q", (p$ as TextParser).currentToken.String())))
			return (null as stateFn | null)
		}
		switch (dto.MetricFamily.prototype.GetType.call((p$ as TextParser).currentMF)) {
			case dto.MetricType_COUNTER:
			{
				$.pointerValue<dto.Metric>((p$ as TextParser).currentMetric).Counter = (() => { const __goscriptLiteralField0 = proto.Float64(value); return new dto.Counter({Value: __goscriptLiteralField0}) })()
				break
			}
			case dto.MetricType_GAUGE:
			{
				$.pointerValue<dto.Metric>((p$ as TextParser).currentMetric).Gauge = (() => { const __goscriptLiteralField1 = proto.Float64(value); return new dto.Gauge({Value: __goscriptLiteralField1}) })()
				break
			}
			case dto.MetricType_UNTYPED:
			{
				$.pointerValue<dto.Metric>((p$ as TextParser).currentMetric).Untyped = (() => { const __goscriptLiteralField2 = proto.Float64(value); return new dto.Untyped({Value: __goscriptLiteralField2}) })()
				break
			}
			case dto.MetricType_SUMMARY:
			{
				if ($.pointerValue<dto.Metric>((p$ as TextParser).currentMetric).Summary == null) {
					$.pointerValue<dto.Metric>((p$ as TextParser).currentMetric).Summary = new dto.Summary()
				}
				switch ((true as boolean)) {
					case (p$ as TextParser).currentIsSummaryCount:
					{
						$.pointerValue<dto.Summary>($.pointerValue<dto.Metric>((p$ as TextParser).currentMetric).Summary).SampleCount = proto.Uint64($.uint64(value))
						break
					}
					case (p$ as TextParser).currentIsSummarySum:
					{
						$.pointerValue<dto.Summary>($.pointerValue<dto.Metric>((p$ as TextParser).currentMetric).Summary).SampleSum = proto.Float64(value)
						break
					}
					case !math.IsNaN((p$ as TextParser).currentQuantile):
					{
						$.pointerValue<dto.Summary>($.pointerValue<dto.Metric>((p$ as TextParser).currentMetric).Summary).Quantile = $.appendOne($.pointerValue<dto.Summary>($.pointerValue<dto.Metric>((p$ as TextParser).currentMetric).Summary).Quantile, (() => { const __goscriptLiteralField3 = proto.Float64((p$ as TextParser).currentQuantile); const __goscriptLiteralField4 = proto.Float64(value); return new dto.Quantile({Quantile: __goscriptLiteralField3, Value: __goscriptLiteralField4}) })(), $.appendZeros.nil)
						break
					}
				}
				break
			}
			case dto.MetricType_HISTOGRAM:
			{
				if ($.pointerValue<dto.Metric>((p$ as TextParser).currentMetric).Histogram == null) {
					$.pointerValue<dto.Metric>((p$ as TextParser).currentMetric).Histogram = new dto.Histogram()
				}
				switch ((true as boolean)) {
					case (p$ as TextParser).currentIsHistogramCount:
					{
						$.pointerValue<dto.Histogram>($.pointerValue<dto.Metric>((p$ as TextParser).currentMetric).Histogram).SampleCount = proto.Uint64($.uint64(value))
						break
					}
					case (p$ as TextParser).currentIsHistogramSum:
					{
						$.pointerValue<dto.Histogram>($.pointerValue<dto.Metric>((p$ as TextParser).currentMetric).Histogram).SampleSum = proto.Float64(value)
						break
					}
					case !math.IsNaN((p$ as TextParser).currentBucket):
					{
						$.pointerValue<dto.Histogram>($.pointerValue<dto.Metric>((p$ as TextParser).currentMetric).Histogram).Bucket = $.appendOne($.pointerValue<dto.Histogram>($.pointerValue<dto.Metric>((p$ as TextParser).currentMetric).Histogram).Bucket, (() => { const __goscriptLiteralField5 = proto.Float64((p$ as TextParser).currentBucket); const __goscriptLiteralField6 = proto.Uint64($.uint64(value)); return new dto.Bucket({UpperBound: __goscriptLiteralField5, CumulativeCount: __goscriptLiteralField6}) })(), $.appendZeros.nil)
						break
					}
				}
				break
			}
			default:
			{
				;(p$ as TextParser).err = fmt.Errorf("unexpected type for metric name %q", dto.MetricFamily.prototype.GetName.call((p$ as TextParser).currentMF))
				break
			}
		}
		if ((p$ as TextParser).currentByte == 10) {
			return $.functionValue(((__receiver) => () => __receiver.startOfLine())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).startOfLine-fm")
		}
		return $.functionValue(((__receiver) => () => __receiver.startTimestamp())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).startTimestamp-fm")
	}

	public reset(_in: io.Reader | null): void {
		let p: TextParser | $.VarRef<TextParser> | null = this;
		const p$: TextParser = p == null ? $.pointerTarget<TextParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TextParser>(p);
		;(p$ as TextParser).metricFamiliesByName = $.makeMap<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>([])
		if ((p$ as TextParser).buf == null) {
			;(p$ as TextParser).buf = bufio.NewReader(_in)
		} else {
			bufio.Reader.prototype.Reset.call((p$ as TextParser).buf, _in)
		}
		;(p$ as TextParser).err = null;
		;(p$ as TextParser).lineCount = 0
		if (((p$ as TextParser).summaries == null) || ($.len((p$ as TextParser).summaries) > 0)) {
			;(p$ as TextParser).summaries = $.makeMap<bigint, dto.Metric | $.VarRef<dto.Metric> | null>([])
		}
		if (((p$ as TextParser).histograms == null) || ($.len((p$ as TextParser).histograms) > 0)) {
			;(p$ as TextParser).histograms = $.makeMap<bigint, dto.Metric | $.VarRef<dto.Metric> | null>([])
		}
		;(p$ as TextParser).currentQuantile = math.NaN();
		;(p$ as TextParser).currentBucket = math.NaN()
	}

	public setOrCreateCurrentMF(): void {
		let p: TextParser | $.VarRef<TextParser> | null = this;
		const p$: TextParser = p == null ? $.pointerTarget<TextParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TextParser>(p);
		;(p$ as TextParser).currentIsSummaryCount = false;
		;(p$ as TextParser).currentIsSummarySum = false;
		;(p$ as TextParser).currentIsHistogramCount = false;
		;(p$ as TextParser).currentIsHistogramSum = false
		let name = (p$ as TextParser).currentToken.String()
		{
			;(p$ as TextParser).currentMF = $.mapGet<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>((p$ as TextParser).metricFamiliesByName, name, null)[0]
			if ((p$ as TextParser).currentMF != null) {
				return
			}
		}
		// Try out if this is a _sum or _count for a summary/histogram.
		let summaryName = summaryMetricName(name)
		{
			;(p$ as TextParser).currentMF = $.mapGet<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>((p$ as TextParser).metricFamiliesByName, summaryName, null)[0]
			if ((p$ as TextParser).currentMF != null) {
				if (dto.MetricFamily.prototype.GetType.call((p$ as TextParser).currentMF) == 2) {
					if (isCount(name)) {
						;(p$ as TextParser).currentIsSummaryCount = true
					}
					if (isSum(name)) {
						;(p$ as TextParser).currentIsSummarySum = true
					}
					return
				}
			}
		}
		let histogramName = histogramMetricName(name)
		{
			;(p$ as TextParser).currentMF = $.mapGet<string, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null, dto.MetricFamily | $.VarRef<dto.MetricFamily> | null>((p$ as TextParser).metricFamiliesByName, histogramName, null)[0]
			if ((p$ as TextParser).currentMF != null) {
				if (dto.MetricFamily.prototype.GetType.call((p$ as TextParser).currentMF) == 4) {
					if (isCount(name)) {
						;(p$ as TextParser).currentIsHistogramCount = true
					}
					if (isSum(name)) {
						;(p$ as TextParser).currentIsHistogramSum = true
					}
					return
				}
			}
		}
		;(p$ as TextParser).currentMF = (() => { const __goscriptLiteralField7 = proto.String(name); return new dto.MetricFamily({Name: __goscriptLiteralField7}) })()
		$.mapSet((p$ as TextParser).metricFamiliesByName, name, (p$ as TextParser).currentMF)
	}

	public async skipBlankTab(): globalThis.Promise<void> {
		let p: TextParser | $.VarRef<TextParser> | null = this;
		const p$: TextParser = p == null ? $.pointerTarget<TextParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TextParser>(p)
		while (true) {
			{
				let __goscriptTuple5: any = await bufio.Reader.prototype.ReadByte.call((p$ as TextParser).buf);
				;(p$ as TextParser).currentByte = __goscriptTuple5[0];
				;(p$ as TextParser).err = __goscriptTuple5[1]
				if (((p$ as TextParser).err != null) || !isBlankOrTab((p$ as TextParser).currentByte)) {
					return
				}
			}
		}
	}

	public async skipBlankTabIfCurrentBlankTab(): globalThis.Promise<void> {
		const p: TextParser | $.VarRef<TextParser> | null = this;
		if (isBlankOrTab($.pointerValue<TextParser>(p).currentByte)) {
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).skipBlankTab() : TextParser.prototype.skipBlankTab.call(p))
		}
	}

	public async startComment(): globalThis.Promise<stateFn | null> {
		let p: TextParser | $.VarRef<TextParser> | null = this;
		const p$: TextParser = p == null ? $.pointerTarget<TextParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TextParser>(p)
		{
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).skipBlankTab() : TextParser.prototype.skipBlankTab.call(p))
			if ((p$ as TextParser).err != null) {
				return (null as stateFn | null)
			}
		}
		if ((p$ as TextParser).currentByte == 10) {
			return $.functionValue(((__receiver) => () => __receiver.startOfLine())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).startOfLine-fm")
		}
		{
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).readTokenUntilWhitespace() : TextParser.prototype.readTokenUntilWhitespace.call(p))
			if ((p$ as TextParser).err != null) {
				return (null as stateFn | null)
			}
		}
		// If we have hit the end of line already, there is nothing left
		// to do. This is not considered a syntax error.
		if ((p$ as TextParser).currentByte == 10) {
			return $.functionValue(((__receiver) => () => __receiver.startOfLine())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).startOfLine-fm")
		}
		let keyword = (p$ as TextParser).currentToken.String()
		if ((!$.stringEqual(keyword, "HELP")) && (!$.stringEqual(keyword, "TYPE"))) {
			// Generic comment, ignore by fast forwarding to end of line.
			while ((p$ as TextParser).currentByte != 10) {
				{
					let __goscriptTuple6: any = await bufio.Reader.prototype.ReadByte.call((p$ as TextParser).buf);
					;(p$ as TextParser).currentByte = __goscriptTuple6[0];
					;(p$ as TextParser).err = __goscriptTuple6[1]
					if ((p$ as TextParser).err != null) {
						return (null as stateFn | null)
					}
				}
			}
			return $.functionValue(((__receiver) => () => __receiver.startOfLine())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).startOfLine-fm")
		}
		// There is something. Next has to be a metric name.
		{
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).skipBlankTab() : TextParser.prototype.skipBlankTab.call(p))
			if ((p$ as TextParser).err != null) {
				return (null as stateFn | null)
			}
		}
		{
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).readTokenAsMetricName() : TextParser.prototype.readTokenAsMetricName.call(p))
			if ((p$ as TextParser).err != null) {
				return (null as stateFn | null)
			}
		}
		if ((p$ as TextParser).currentByte == 10) {
			// At the end of the line already.
			// Again, this is not considered a syntax error.
			return $.functionValue(((__receiver) => () => __receiver.startOfLine())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).startOfLine-fm")
		}
		if (!isBlankOrTab((p$ as TextParser).currentByte)) {
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).parseError("invalid metric name in comment") : TextParser.prototype.parseError.call(p, "invalid metric name in comment"))
			return (null as stateFn | null)
		}
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).setOrCreateCurrentMF() : TextParser.prototype.setOrCreateCurrentMF.call(p))
		{
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).skipBlankTab() : TextParser.prototype.skipBlankTab.call(p))
			if ((p$ as TextParser).err != null) {
				return (null as stateFn | null)
			}
		}
		if ((p$ as TextParser).currentByte == 10) {
			// At the end of the line already.
			// Again, this is not considered a syntax error.
			return $.functionValue(((__receiver) => () => __receiver.startOfLine())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).startOfLine-fm")
		}
		switch (keyword) {
			case "HELP":
			{
				return $.functionValue(((__receiver) => () => __receiver.readingHelp())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).readingHelp-fm")
				break
			}
			case "TYPE":
			{
				return $.functionValue(((__receiver) => () => __receiver.readingType())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).readingType-fm")
				break
			}
		}
		$.panic(await fmt.Sprintf("code error: unexpected keyword %q", keyword))
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async startLabelName(): globalThis.Promise<stateFn | null> {
		let p: TextParser | $.VarRef<TextParser> | null = this;
		const p$: TextParser = p == null ? $.pointerTarget<TextParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TextParser>(p)
		{
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).skipBlankTab() : TextParser.prototype.skipBlankTab.call(p))
			if ((p$ as TextParser).err != null) {
				return (null as stateFn | null)
			}
		}
		if ((p$ as TextParser).currentByte == 125) {
			{
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).skipBlankTab() : TextParser.prototype.skipBlankTab.call(p))
				if ((p$ as TextParser).err != null) {
					return (null as stateFn | null)
				}
			}
			return $.functionValue(((__receiver) => () => __receiver.readingValue())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).readingValue-fm")
		}
		{
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).readTokenAsLabelName() : TextParser.prototype.readTokenAsLabelName.call(p))
			if ((p$ as TextParser).err != null) {
				return (null as stateFn | null)
			}
		}
		if ((p$ as TextParser).currentToken.Len() == 0) {
			TextParser.prototype.parseError.call(p, await fmt.Sprintf("invalid label name for metric %q", dto.MetricFamily.prototype.GetName.call((p$ as TextParser).currentMF)))
			return (null as stateFn | null)
		}
		;(p$ as TextParser).currentLabelPair = (() => { const __goscriptLiteralField8 = proto.String((p$ as TextParser).currentToken.String()); return new dto.LabelPair({Name: __goscriptLiteralField8}) })()
		if ($.stringEqual(dto.LabelPair.prototype.GetName.call((p$ as TextParser).currentLabelPair), model.MetricNameLabel)) {
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).parseError(await fmt.Sprintf("label name %q is reserved", model.MetricNameLabel)) : TextParser.prototype.parseError.call(p, await fmt.Sprintf("label name %q is reserved", model.MetricNameLabel)))
			return (null as stateFn | null)
		}
		// Special summary/histogram treatment. Don't add 'quantile' and 'le'
		// labels to 'real' labels.
		if (!((dto.MetricFamily.prototype.GetType.call((p$ as TextParser).currentMF) == 2) && ($.stringEqual(dto.LabelPair.prototype.GetName.call((p$ as TextParser).currentLabelPair), model.QuantileLabel))) && !((dto.MetricFamily.prototype.GetType.call((p$ as TextParser).currentMF) == 4) && ($.stringEqual(dto.LabelPair.prototype.GetName.call((p$ as TextParser).currentLabelPair), model.BucketLabel)))) {
			$.pointerValue<dto.Metric>((p$ as TextParser).currentMetric).Label = $.appendOne($.pointerValue<dto.Metric>((p$ as TextParser).currentMetric).Label, (p$ as TextParser).currentLabelPair, $.appendZeros.nil)
		}
		{
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).skipBlankTabIfCurrentBlankTab() : TextParser.prototype.skipBlankTabIfCurrentBlankTab.call(p))
			if ((p$ as TextParser).err != null) {
				return (null as stateFn | null)
			}
		}
		if ((p$ as TextParser).currentByte != 61) {
			TextParser.prototype.parseError.call(p, await fmt.Sprintf("expected '=' after label name, found %q", $.basicInterfaceValue((p$ as TextParser).currentByte, "byte", "uint8")))
			return (null as stateFn | null)
		}
		// Check for duplicate label names.
		let labels: globalThis.Map<string, {}> | null = $.makeMap<string, {}>()
		for (let __goscriptRangeTarget0 = $.pointerValue<dto.Metric>((p$ as TextParser).currentMetric).Label, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let l = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
			let lName = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(l))
			{
				let [, exists] = $.mapGet<string, {}, {}>(labels, lName, {})
				if (!exists) {
					$.mapSet(labels, lName, {})
				} else {
					TextParser.prototype.parseError.call(p, await fmt.Sprintf("duplicate label names for metric %q", dto.MetricFamily.prototype.GetName.call((p$ as TextParser).currentMF)))
					return (null as stateFn | null)
				}
			}
		}
		return $.functionValue(((__receiver) => () => __receiver.startLabelValue())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).startLabelValue-fm")
	}

	public async startLabelValue(): globalThis.Promise<stateFn | null> {
		let p: TextParser | $.VarRef<TextParser> | null = this;
		const p$: TextParser = p == null ? $.pointerTarget<TextParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TextParser>(p)
		{
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).skipBlankTab() : TextParser.prototype.skipBlankTab.call(p))
			if ((p$ as TextParser).err != null) {
				return (null as stateFn | null)
			}
		}
		if ((p$ as TextParser).currentByte != 34) {
			TextParser.prototype.parseError.call(p, await fmt.Sprintf("expected '\"' at start of label value, found %q", $.basicInterfaceValue((p$ as TextParser).currentByte, "byte", "uint8")))
			return (null as stateFn | null)
		}
		{
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).readTokenAsLabelValue() : TextParser.prototype.readTokenAsLabelValue.call(p))
			if ((p$ as TextParser).err != null) {
				return (null as stateFn | null)
			}
		}
		if (!model.LabelValue_IsValid((p$ as TextParser).currentToken.String())) {
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).parseError(await fmt.Sprintf("invalid label value %q", (p$ as TextParser).currentToken.String())) : TextParser.prototype.parseError.call(p, await fmt.Sprintf("invalid label value %q", (p$ as TextParser).currentToken.String())))
			return (null as stateFn | null)
		}
		$.pointerValue<dto.LabelPair>((p$ as TextParser).currentLabelPair).Value = proto.String((p$ as TextParser).currentToken.String())
		// Special treatment of summaries:
		// - Quantile labels are special, will result in dto.Quantile later.
		// - Other labels have to be added to currentLabels for signature calculation.
		if (dto.MetricFamily.prototype.GetType.call((p$ as TextParser).currentMF) == 2) {
			if ($.stringEqual(dto.LabelPair.prototype.GetName.call((p$ as TextParser).currentLabelPair), model.QuantileLabel)) {
				{
					let __goscriptTuple7: any = parseFloat(dto.LabelPair.prototype.GetValue.call((p$ as TextParser).currentLabelPair));
					;(p$ as TextParser).currentQuantile = __goscriptTuple7[0];
					;(p$ as TextParser).err = __goscriptTuple7[1]
					if ((p$ as TextParser).err != null) {
						// Create a more helpful error message.
						TextParser.prototype.parseError.call(p, await fmt.Sprintf("expected float as value for 'quantile' label, got %q", dto.LabelPair.prototype.GetValue.call((p$ as TextParser).currentLabelPair)))
						return (null as stateFn | null)
					}
				}
			} else {
				$.mapSet((p$ as TextParser).currentLabels, dto.LabelPair.prototype.GetName.call((p$ as TextParser).currentLabelPair), dto.LabelPair.prototype.GetValue.call((p$ as TextParser).currentLabelPair))
			}
		}
		// Similar special treatment of histograms.
		if (dto.MetricFamily.prototype.GetType.call((p$ as TextParser).currentMF) == 4) {
			if ($.stringEqual(dto.LabelPair.prototype.GetName.call((p$ as TextParser).currentLabelPair), model.BucketLabel)) {
				{
					let __goscriptTuple8: any = parseFloat(dto.LabelPair.prototype.GetValue.call((p$ as TextParser).currentLabelPair));
					;(p$ as TextParser).currentBucket = __goscriptTuple8[0];
					;(p$ as TextParser).err = __goscriptTuple8[1]
					if ((p$ as TextParser).err != null) {
						// Create a more helpful error message.
						TextParser.prototype.parseError.call(p, await fmt.Sprintf("expected float as value for 'le' label, got %q", dto.LabelPair.prototype.GetValue.call((p$ as TextParser).currentLabelPair)))
						return (null as stateFn | null)
					}
				}
			} else {
				$.mapSet((p$ as TextParser).currentLabels, dto.LabelPair.prototype.GetName.call((p$ as TextParser).currentLabelPair), dto.LabelPair.prototype.GetValue.call((p$ as TextParser).currentLabelPair))
			}
		}
		{
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).skipBlankTab() : TextParser.prototype.skipBlankTab.call(p))
			if ((p$ as TextParser).err != null) {
				return (null as stateFn | null)
			}
		}
		switch ((p$ as TextParser).currentByte) {
			case 44:
			{
				return $.functionValue(((__receiver) => () => __receiver.startLabelName())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).startLabelName-fm")
				break
			}
			case 125:
			{
				{
					await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).skipBlankTab() : TextParser.prototype.skipBlankTab.call(p))
					if ((p$ as TextParser).err != null) {
						return (null as stateFn | null)
					}
				}
				return $.functionValue(((__receiver) => () => __receiver.readingValue())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).readingValue-fm")
				break
			}
			default:
			{
				TextParser.prototype.parseError.call(p, await fmt.Sprintf("unexpected end of label value %q", dto.LabelPair.prototype.GetValue.call((p$ as TextParser).currentLabelPair)))
				return (null as stateFn | null)
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async startOfLine(): globalThis.Promise<stateFn | null> {
		let p: TextParser | $.VarRef<TextParser> | null = this;
		const p$: TextParser = p == null ? $.pointerTarget<TextParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TextParser>(p);
		;(p$ as TextParser).lineCount++
		{
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).skipBlankTab() : TextParser.prototype.skipBlankTab.call(p))
			if ((p$ as TextParser).err != null) {
				// End of input reached. This is the only case where
				// that is not an error but a signal that we are done.
				;(p$ as TextParser).err = null
				return (null as stateFn | null)
			}
		}
		switch ((p$ as TextParser).currentByte) {
			case 35:
			{
				return $.functionValue(((__receiver) => () => __receiver.startComment())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).startComment-fm")
				break
			}
			case 10:
			{
				return $.functionValue(((__receiver) => () => __receiver.startOfLine())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).startOfLine-fm")
				break
			}
		}
		return $.functionValue(((__receiver) => () => __receiver.readingMetricName())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).readingMetricName-fm")
	}

	public async startTimestamp(): globalThis.Promise<stateFn | null> {
		let p: TextParser | $.VarRef<TextParser> | null = this;
		const p$: TextParser = p == null ? $.pointerTarget<TextParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TextParser>(p)
		{
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).skipBlankTab() : TextParser.prototype.skipBlankTab.call(p))
			if ((p$ as TextParser).err != null) {
				return (null as stateFn | null)
			}
		}
		{
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).readTokenUntilWhitespace() : TextParser.prototype.readTokenUntilWhitespace.call(p))
			if ((p$ as TextParser).err != null) {
				return (null as stateFn | null)
			}
		}
		let [timestamp, err] = strconv.ParseInt((p$ as TextParser).currentToken.String(), 10, 64)
		if (err != null) {
			// Create a more helpful error message.
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).parseError(await fmt.Sprintf("expected integer as timestamp, got %q", (p$ as TextParser).currentToken.String())) : TextParser.prototype.parseError.call(p, await fmt.Sprintf("expected integer as timestamp, got %q", (p$ as TextParser).currentToken.String())))
			return (null as stateFn | null)
		}
		$.pointerValue<dto.Metric>((p$ as TextParser).currentMetric).TimestampMs = proto.Int64(timestamp)
		{
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).readTokenUntilNewline(false) : TextParser.prototype.readTokenUntilNewline.call(p, false))
			if ((p$ as TextParser).err != null) {
				return (null as stateFn | null)
			}
		}
		if ((p$ as TextParser).currentToken.Len() > 0) {
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TextParser).parseError(await fmt.Sprintf("spurious string after timestamp: %q", (p$ as TextParser).currentToken.String())) : TextParser.prototype.parseError.call(p, await fmt.Sprintf("spurious string after timestamp: %q", (p$ as TextParser).currentToken.String())))
			return (null as stateFn | null)
		}
		return $.functionValue(((__receiver) => () => __receiver.startOfLine())((p$ as TextParser)), ({ kind: $.TypeKind.Function, params: [], results: [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo), "github.com/prometheus/common/expfmt.(*TextParser).startOfLine-fm")
	}

	static __typeInfo = $.registerStructType(
		"expfmt.TextParser",
		() => new TextParser(),
		() => [$.methodSignature("TextToMetricFamilies", [["in", "io.Reader"]], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")), "error"], true), $.methodSignature("parseError", [["msg", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("readTokenAsLabelName", [], [], true), $.methodSignature("readTokenAsLabelValue", [], [], true), $.methodSignature("readTokenAsMetricName", [], [], true), $.methodSignature("readTokenUntilNewline", [["recognizeEscapeSequence", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("readTokenUntilWhitespace", [], [], true), $.methodSignature("readingHelp", [], [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)], true), $.methodSignature("readingLabels", [], [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)], true), $.methodSignature("readingMetricName", [], [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)], true), $.methodSignature("readingType", [], [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)], true), $.methodSignature("readingValue", [], [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)], true), $.methodSignature("reset", [["in", "io.Reader"]], [], true), $.methodSignature("setOrCreateCurrentMF", [], [], true), $.methodSignature("skipBlankTab", [], [], true), $.methodSignature("skipBlankTabIfCurrentBlankTab", [], [], true), $.methodSignature("startComment", [], [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)], true), $.methodSignature("startLabelName", [], [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)], true), $.methodSignature("startLabelValue", [], [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)], true), $.methodSignature("startOfLine", [], [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)], true), $.methodSignature("startTimestamp", [], [({ kind: $.TypeKind.Function, name: "expfmt.stateFn", params: [], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)], true)],
		TextParser,
		() => [/* @__PURE__ */ $.structField("metricFamiliesByName", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")), [0], 0, false, { pkgPath: "github.com/prometheus/common/expfmt" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.pointerType("bufio.Reader"), [1], 8, false, { pkgPath: "github.com/prometheus/common/expfmt" }), /* @__PURE__ */ $.structField("err", "error", [2], 16, false, { pkgPath: "github.com/prometheus/common/expfmt" }), /* @__PURE__ */ $.structField("lineCount", /* @__PURE__ */ $.basicType("int"), [3], 32, false, { pkgPath: "github.com/prometheus/common/expfmt" }), /* @__PURE__ */ $.structField("currentByte", /* @__PURE__ */ $.basicType("uint8"), [4], 40, false, { pkgPath: "github.com/prometheus/common/expfmt" }), /* @__PURE__ */ $.structField("currentToken", "bytes.Buffer", [5], 48, false, { pkgPath: "github.com/prometheus/common/expfmt" }), /* @__PURE__ */ $.structField("currentMF", /* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily"), [6], 88, false, { pkgPath: "github.com/prometheus/common/expfmt" }), /* @__PURE__ */ $.structField("currentMetric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric"), [7], 96, false, { pkgPath: "github.com/prometheus/common/expfmt" }), /* @__PURE__ */ $.structField("currentLabelPair", /* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair"), [8], 104, false, { pkgPath: "github.com/prometheus/common/expfmt" }), /* @__PURE__ */ $.structField("currentLabels", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [9], 112, false, { pkgPath: "github.com/prometheus/common/expfmt" }), /* @__PURE__ */ $.structField("summaries", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")), [10], 120, false, { pkgPath: "github.com/prometheus/common/expfmt" }), /* @__PURE__ */ $.structField("currentQuantile", /* @__PURE__ */ $.basicType("float64"), [11], 128, false, { pkgPath: "github.com/prometheus/common/expfmt" }), /* @__PURE__ */ $.structField("histograms", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint64"), /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")), [12], 136, false, { pkgPath: "github.com/prometheus/common/expfmt" }), /* @__PURE__ */ $.structField("currentBucket", /* @__PURE__ */ $.basicType("float64"), [13], 144, false, { pkgPath: "github.com/prometheus/common/expfmt" }), /* @__PURE__ */ $.structField("currentIsSummaryCount", /* @__PURE__ */ $.basicType("bool"), [14], 152, false, { pkgPath: "github.com/prometheus/common/expfmt" }), /* @__PURE__ */ $.structField("currentIsSummarySum", /* @__PURE__ */ $.basicType("bool"), [15], 153, false, { pkgPath: "github.com/prometheus/common/expfmt" }), /* @__PURE__ */ $.structField("currentIsHistogramCount", /* @__PURE__ */ $.basicType("bool"), [16], 154, false, { pkgPath: "github.com/prometheus/common/expfmt" }), /* @__PURE__ */ $.structField("currentIsHistogramSum", /* @__PURE__ */ $.basicType("bool"), [17], 155, false, { pkgPath: "github.com/prometheus/common/expfmt" })]
	)
}

export function isValidLabelNameStart(b: number): boolean {
	return (((b >= 97) && (b <= 122)) || ((b >= 65) && (b <= 90))) || (b == 95)
}

export function isValidLabelNameContinuation(b: number): boolean {
	return isValidLabelNameStart(b) || ((b >= 48) && (b <= 57))
}

export function isValidMetricNameStart(b: number): boolean {
	return isValidLabelNameStart(b) || (b == 58)
}

export function isValidMetricNameContinuation(b: number): boolean {
	return isValidLabelNameContinuation(b) || (b == 58)
}

export function isBlankOrTab(b: number): boolean {
	return (b == 32) || (b == 9)
}

export function isCount(name: string): boolean {
	return ($.stringLen(name) > 6) && ($.stringEqual($.sliceStringOrBytes(name, $.stringLen(name) - 6, undefined), "_count"))
}

export function isSum(name: string): boolean {
	return ($.stringLen(name) > 4) && ($.stringEqual($.sliceStringOrBytes(name, $.stringLen(name) - 4, undefined), "_sum"))
}

export function isBucket(name: string): boolean {
	return ($.stringLen(name) > 7) && ($.stringEqual($.sliceStringOrBytes(name, $.stringLen(name) - 7, undefined), "_bucket"))
}

export function summaryMetricName(name: string): string {
	switch ((true as boolean)) {
		case isCount(name):
		{
			return $.sliceStringOrBytes(name, undefined, $.stringLen(name) - 6)
			break
		}
		case isSum(name):
		{
			return $.sliceStringOrBytes(name, undefined, $.stringLen(name) - 4)
			break
		}
		default:
		{
			return name
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function histogramMetricName(name: string): string {
	switch ((true as boolean)) {
		case isCount(name):
		{
			return $.sliceStringOrBytes(name, undefined, $.stringLen(name) - 6)
			break
		}
		case isSum(name):
		{
			return $.sliceStringOrBytes(name, undefined, $.stringLen(name) - 4)
			break
		}
		case isBucket(name):
		{
			return $.sliceStringOrBytes(name, undefined, $.stringLen(name) - 7)
			break
		}
		default:
		{
			return name
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function parseFloat(s: string): [number, $.GoError] {
	if (strings.ContainsAny(s, "pP_")) {
		return [0, fmt.Errorf("unsupported character in float")]
	}
	return strconv.ParseFloat(s, 64)
}

var __goscriptAwait: any
