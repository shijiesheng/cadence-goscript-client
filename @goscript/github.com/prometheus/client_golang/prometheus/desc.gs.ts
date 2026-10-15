// Generated file based on desc.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strings from "@goscript/strings/index.js"

import * as xxhash from "@goscript/github.com/cespare/xxhash/v2/index.js"

import * as proto from "@goscript/github.com/golang/protobuf/proto/index.js"

import * as model from "@goscript/github.com/prometheus/common/model/index.js"

import * as dto from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as __goscript_labels from "./labels.gs.ts"

import * as __goscript_metric from "./metric.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/sort/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/cespare/xxhash/v2/index.js"
import "@goscript/github.com/golang/protobuf/proto/index.js"
import "@goscript/github.com/prometheus/common/model/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "./labels.gs.ts"
import "./metric.gs.ts"

$.registerTypePackagePath("github.com/prometheus/client_golang/prometheus", ["prometheus.Desc"])

export class Desc {
	// fqName has been built from Namespace, Subsystem, and Name.
	public get fqName(): string {
		return this._fields.fqName
	}

	public set fqName(value: string) {
		this._fields.fqName = value
	}

	// help provides some helpful information about this metric.
	public get help(): string {
		return this._fields.help
	}

	public set help(value: string) {
		this._fields.help = value
	}

	// constLabelPairs contains precalculated DTO label pairs based on
	// the constant labels.
	public get constLabelPairs(): $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null> {
		return this._fields.constLabelPairs
	}

	public set constLabelPairs(value: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>) {
		this._fields.constLabelPairs = value
	}

	// variableLabels contains names of labels for which the metric
	// maintains variable values.
	public get variableLabels(): $.Slice<string> {
		return this._fields.variableLabels
	}

	public set variableLabels(value: $.Slice<string>) {
		this._fields.variableLabels = value
	}

	// id is a hash of the values of the ConstLabels and fqName. This
	// must be unique among all registered descriptors and can therefore be
	// used as an identifier of the descriptor.
	public get id(): bigint {
		return this._fields.id
	}

	public set id(value: bigint) {
		this._fields.id = value
	}

	// dimHash is a hash of the label names (preset and variable) and the
	// Help string. Each Desc with the same fqName must have the same
	// dimHash.
	public get dimHash(): bigint {
		return this._fields.dimHash
	}

	public set dimHash(value: bigint) {
		this._fields.dimHash = value
	}

	// err is an error that occurred during construction. It is reported on
	// registration time.
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		fqName: string
		help: string
		constLabelPairs: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>
		variableLabels: $.Slice<string>
		id: bigint
		dimHash: bigint
		err: $.GoError
	}

	constructor(init?: Partial<{fqName?: string, help?: string, constLabelPairs?: $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>, variableLabels?: $.Slice<string>, id?: bigint, dimHash?: bigint, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			fqName: init?.fqName ?? ("" as string),
			help: init?.help ?? ("" as string),
			constLabelPairs: init?.constLabelPairs ?? (null! as $.Slice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>),
			variableLabels: init?.variableLabels ?? (null! as $.Slice<string>),
			id: init?.id ?? (0n as bigint),
			dimHash: init?.dimHash ?? (0n as bigint),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Desc {
		return new Desc(this, true)
	}

	public __goscriptAssign(source: Desc): void {
		const target = this._fields
		const values = source._fields
		target.fqName = values.fqName
		target.help = values.help
		target.constLabelPairs = values.constLabelPairs
		target.variableLabels = values.variableLabels
		target.id = values.id
		target.dimHash = values.dimHash
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async String(): globalThis.Promise<string> {
		const d: Desc | $.VarRef<Desc> | null = this;
		const d$: Desc = d == null ? $.pointerTarget<Desc>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Desc>(d)
		let lpStrings: $.Slice<string> = $.makeSlice<string>(0, $.sliceLen((d$ as Desc).constLabelPairs), "string")
		for (let __goscriptRangeTarget0 = (d$ as Desc).constLabelPairs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let lp = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as dto.LabelPair | $.VarRef<dto.LabelPair> | null)
			lpStrings = $.appendOne(lpStrings, await fmt.Sprintf("%s=%q", (lp !== null && (lp as any).__isVarRef !== true && (lp as any).__goValue === undefined ? ((lp as any) as dto.LabelPair).GetName() : dto.LabelPair.prototype.GetName.call(lp)), (lp !== null && (lp as any).__isVarRef !== true && (lp as any).__goValue === undefined ? ((lp as any) as dto.LabelPair).GetValue() : dto.LabelPair.prototype.GetValue.call(lp))))
		}
		return fmt.Sprintf("Desc{fqName: %q, help: %q, constLabels: {%s}, variableLabels: %v}", (d$ as Desc).fqName, (d$ as Desc).help, strings.Join(lpStrings, ","), $.interfaceValue((d$ as Desc).variableLabels, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
	}

	static __typeInfo = $.registerStructType(
		"prometheus.Desc",
		() => new Desc(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Desc,
		() => [/* @__PURE__ */ $.structField("fqName", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("help", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("constLabelPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")), [2], 32, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("variableLabels", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 56, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint64"), [4], 80, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("dimHash", /* @__PURE__ */ $.basicType("uint64"), [5], 88, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" }), /* @__PURE__ */ $.structField("err", "error", [6], 96, false, { pkgPath: "github.com/prometheus/client_golang/prometheus" })]
	)
}

export async function NewDesc(fqName: string, help: string, variableLabels: $.Slice<string>, constLabels: __goscript_labels.Labels): globalThis.Promise<Desc | $.VarRef<Desc> | null> {
	let d: Desc | $.VarRef<Desc> | null = new Desc({fqName: fqName, help: help, variableLabels: variableLabels})
	let d$: Desc = d == null ? $.pointerTarget<Desc>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Desc>(d)
	if (!model.IsValidMetricName(fqName)) {
		;(d$ as Desc).err = fmt.Errorf("%q is not a valid metric name", fqName)
		return d
	}
	// labelValues contains the label values of const labels (in order of
	// their sorted label names) plus the fqName (at position 0).
	let labelValues: $.Slice<string> = $.makeSlice<string>(1, $.len(constLabels) + 1, "string")
	$.sliceElems(labelValues!)[$.sliceSlot(labelValues!, 0)] = fqName
	let labelNames: $.Slice<string> = $.makeSlice<string>(0, $.len(constLabels) + $.sliceLen(variableLabels), "string")
	let labelNameSet: globalThis.Map<string, {}> | null = $.makeMap<string, {}>([])
	// First add only the const label names and sort them...
	for (let [labelName, __rangeValue] of constLabels?.entries() ?? []) {
		if (!__goscript_labels.checkLabelName(labelName)) {
			;(d$ as Desc).err = fmt.Errorf("%q is not a valid label name for metric %q", labelName, fqName)
			return d
		}
		labelNames = $.appendOne(labelNames, labelName)
		$.mapSet(labelNameSet, labelName, {})
	}
	sort.Strings(labelNames)
	// ... so that we can now add const label values in the order of their names.
	for (let __goscriptRangeTarget1 = labelNames, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let labelName = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
		labelValues = $.appendOne(labelValues, $.mapGet<string, string, string>(constLabels, labelName, "")[0])
	}
	// Validate the const label values. They can't have a wrong cardinality, so
	// use in len(labelValues) as expectedNumberOfValues.
	{
		let err = __goscript_labels.validateLabelValues(labelValues, $.sliceLen(labelValues))
		if (err != null) {
			;(d$ as Desc).err = err
			return d
		}
	}
	// Now add the variable label names, but prefix them with something that
	// cannot be in a regular label name. That prevents matching the label
	// dimension with a different mix between preset and variable labels.
	for (let __goscriptRangeTarget2 = variableLabels, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let labelName = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
		if (!__goscript_labels.checkLabelName(labelName)) {
			;(d$ as Desc).err = fmt.Errorf("%q is not a valid label name for metric %q", labelName, fqName)
			return d
		}
		labelNames = $.appendOne(labelNames, $.concatString("$", labelName))
		$.mapSet(labelNameSet, labelName, {})
	}
	if ($.sliceLen(labelNames) != $.len(labelNameSet)) {
		;(d$ as Desc).err = errors.New("duplicate label names")
		return d
	}

	let xxh: xxhash.Digest | $.VarRef<xxhash.Digest> | null = xxhash.New()
	for (let __goscriptRangeTarget3 = labelValues, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let val = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string)
		void (xxh !== null && (xxh as any).__isVarRef !== true && (xxh as any).__goValue === undefined ? ((xxh as any) as xxhash.Digest).WriteString(val) : xxhash.Digest.prototype.WriteString.call(xxh, val))
		void (xxh !== null && (xxh as any).__isVarRef !== true && (xxh as any).__goValue === undefined ? ((xxh as any) as xxhash.Digest).Write(__goscript_metric.__goscript_get_separatorByteSlice()) : xxhash.Digest.prototype.Write.call(xxh, __goscript_metric.__goscript_get_separatorByteSlice()))
	}
	;(d$ as Desc).id = (xxh !== null && (xxh as any).__isVarRef !== true && (xxh as any).__goValue === undefined ? ((xxh as any) as xxhash.Digest).Sum64() : xxhash.Digest.prototype.Sum64.call(xxh))
	// Sort labelNames so that order doesn't matter for the hash.
	sort.Strings(labelNames)
	// Now hash together (in this order) the help string and the sorted
	// label names.
	void (xxh !== null && (xxh as any).__isVarRef !== true && (xxh as any).__goValue === undefined ? ((xxh as any) as xxhash.Digest).Reset() : xxhash.Digest.prototype.Reset.call(xxh))
	void (xxh !== null && (xxh as any).__isVarRef !== true && (xxh as any).__goValue === undefined ? ((xxh as any) as xxhash.Digest).WriteString(help) : xxhash.Digest.prototype.WriteString.call(xxh, help))
	void (xxh !== null && (xxh as any).__isVarRef !== true && (xxh as any).__goValue === undefined ? ((xxh as any) as xxhash.Digest).Write(__goscript_metric.__goscript_get_separatorByteSlice()) : xxhash.Digest.prototype.Write.call(xxh, __goscript_metric.__goscript_get_separatorByteSlice()))
	for (let __goscriptRangeTarget4 = labelNames, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let labelName = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as string)
		void (xxh !== null && (xxh as any).__isVarRef !== true && (xxh as any).__goValue === undefined ? ((xxh as any) as xxhash.Digest).WriteString(labelName) : xxhash.Digest.prototype.WriteString.call(xxh, labelName))
		void (xxh !== null && (xxh as any).__isVarRef !== true && (xxh as any).__goValue === undefined ? ((xxh as any) as xxhash.Digest).Write(__goscript_metric.__goscript_get_separatorByteSlice()) : xxhash.Digest.prototype.Write.call(xxh, __goscript_metric.__goscript_get_separatorByteSlice()))
	}
	;(d$ as Desc).dimHash = (xxh !== null && (xxh as any).__isVarRef !== true && (xxh as any).__goValue === undefined ? ((xxh as any) as xxhash.Digest).Sum64() : xxhash.Digest.prototype.Sum64.call(xxh));

	;(d$ as Desc).constLabelPairs = $.makeSlice<dto.LabelPair | $.VarRef<dto.LabelPair> | null>(0, $.len(constLabels))
	for (const [n, v] of constLabels?.entries() ?? []) {
		;(d$ as Desc).constLabelPairs = $.appendOne((d$ as Desc).constLabelPairs, (() => { const __goscriptLiteralField0 = proto.String(n); const __goscriptLiteralField1 = proto.String(v); return new dto.LabelPair({Name: __goscriptLiteralField0, Value: __goscriptLiteralField1}) })(), $.appendZeros.nil)
	}
	await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>(((d$ as Desc).constLabelPairs as __goscript_metric.labelPairSorter), "prometheus.labelPairSorter", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
	return d
}

export function NewInvalidDesc(err: $.GoError): Desc | $.VarRef<Desc> | null {
	return new Desc({err: err})
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (__goscript_metric.labelPairSorter_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (__goscript_metric.labelPairSorter_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (__goscript_metric.labelPairSorter_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair"), "prometheus.labelPairSorter"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}
