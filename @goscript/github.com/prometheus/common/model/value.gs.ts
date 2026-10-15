// Generated file based on value.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import type * as time from "@goscript/time/index.js"

import type * as __goscript_fingerprinting from "./fingerprinting.gs.ts"

import type * as __goscript_labels from "./labels.gs.ts"

import * as __goscript_metric from "./metric.gs.ts"

import * as __goscript_time from "./time.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "./metric.gs.ts"
import "./time.gs.ts"

$.registerTypePackagePath("github.com/prometheus/common/model", ["model.SampleValue", "model.SamplePair", "model.Sample", "model.Samples", "model.SampleStream", "model.Value", "model.ValueType", "model.Scalar", "model.String", "model.Vector", "model.Matrix"])

export type SampleValue = number

$.registerNamedValueType(
	"model.SampleValue",
	{Equal: (receiver: any, ...args: any[]) => (SampleValue_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (SampleValue_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (SampleValue_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Equal", [["o", /* @__PURE__ */ $.basicType("float64", "model.SampleValue")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*model.SampleValue",
	{Equal: (receiver: any, ...args: any[]) => (SampleValue_Equal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (SampleValue_MarshalJSON as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (SampleValue_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (SampleValue_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Equal", [["o", /* @__PURE__ */ $.basicType("float64", "model.SampleValue")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type Samples = $.Slice<Sample | $.VarRef<Sample> | null>

$.registerNamedType("model.Samples", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("model.Sample")));

$.registerNamedValueType(
	"model.Samples",
	{Equal: (receiver: any, ...args: any[]) => (Samples_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (Samples_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Samples_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Samples_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Equal", [["o", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("model.Sample"), "model.Samples")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*model.Samples",
	{Equal: (receiver: any, ...args: any[]) => (Samples_Equal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (Samples_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Samples_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Samples_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Equal", [["o", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("model.Sample"), "model.Samples")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export type Value = {
	String(): string | globalThis.Promise<string>
	Type(): ValueType
}

$.registerInterfaceType(
	"model.Value",
	null,
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "model.ValueType")])]
);

export type ValueType = number

$.registerNamedValueType(
	"model.ValueType",
	{MarshalJSON: (receiver: any, ...args: any[]) => (ValueType_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ValueType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*model.ValueType",
	{MarshalJSON: (receiver: any, ...args: any[]) => (ValueType_MarshalJSON as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ValueType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (ValueType_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type Vector = $.Slice<Sample | $.VarRef<Sample> | null>

$.registerNamedType("model.Vector", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("model.Sample")));

$.registerNamedValueType(
	"model.Vector",
	{Equal: (receiver: any, ...args: any[]) => (Vector_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (Vector_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Vector_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Vector_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Vector_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (Vector_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Equal", [["o", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("model.Sample"), "model.Vector")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "model.ValueType")])]
);

$.registerNamedValueType(
	"*model.Vector",
	{Equal: (receiver: any, ...args: any[]) => (Vector_Equal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (Vector_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Vector_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Vector_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Vector_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (Vector_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Equal", [["o", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("model.Sample"), "model.Vector")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "model.ValueType")])]
);

export type Matrix = $.Slice<SampleStream | $.VarRef<SampleStream> | null>

$.registerNamedType("model.Matrix", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("model.SampleStream")));

$.registerNamedValueType(
	"model.Matrix",
	{Len: (receiver: any, ...args: any[]) => (Matrix_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Matrix_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Matrix_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Matrix_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (Matrix_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "model.ValueType")])]
);

$.registerNamedValueType(
	"*model.Matrix",
	{Len: (receiver: any, ...args: any[]) => (Matrix_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Matrix_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Matrix_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Matrix_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (Matrix_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "model.ValueType")])]
);

export class SamplePair {
	public get Timestamp(): __goscript_time.Time {
		return this._fields.Timestamp
	}

	public set Timestamp(value: __goscript_time.Time) {
		this._fields.Timestamp = value
	}

	public get Value(): SampleValue {
		return this._fields.Value
	}

	public set Value(value: SampleValue) {
		this._fields.Value = value
	}

	public _fields: {
		Timestamp: __goscript_time.Time
		Value: SampleValue
	}

	constructor(init?: Partial<{Timestamp?: __goscript_time.Time, Value?: SampleValue}>, __goscriptValue?: boolean) {
		this._fields = {
			Timestamp: init?.Timestamp ?? (0n as __goscript_time.Time),
			Value: init?.Value ?? (0 as SampleValue)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SamplePair {
		return new SamplePair(this, true)
	}

	public __goscriptAssign(source: SamplePair): void {
		const target = this._fields
		const values = source._fields
		target.Timestamp = values.Timestamp
		target.Value = values.Value
	}

	public Equal(o: SamplePair | $.VarRef<SamplePair> | null): boolean {
		const s: SamplePair | $.VarRef<SamplePair> | null = this;
		const s$: SamplePair = s == null ? $.pointerTarget<SamplePair>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<SamplePair>(s)
		const o$: SamplePair = o == null ? $.pointerTarget<SamplePair>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<SamplePair>(o)
		return ($.pointerEqual(s, o)) || (SampleValue_Equal((s$ as SamplePair).Value, (o$ as SamplePair).Value) && __goscript_time.Time_Equal((s$ as SamplePair).Timestamp, (o$ as SamplePair).Timestamp))
	}

	public async MarshalJSON(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const s = this;
		let __goscriptTuple0: any = await json.Marshal($.namedValueInterfaceValue<any>(s.Timestamp, "model.Time", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
		let t: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		let __goscriptTuple1: any = await json.Marshal($.namedValueInterfaceValue<any>(s.Value, "model.SampleValue", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))
		let v: $.Slice<number> = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		return [$.stringToBytes(await fmt.Sprintf("[%s,%s]", $.interfaceValue(t, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), $.interfaceValue(v, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))), null]
	}

	public async String(): globalThis.Promise<string> {
		const s = this;
		return fmt.Sprintf("%s @[%s]", $.namedValueInterfaceValue<any>(s.Value, "model.SampleValue", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), $.namedValueInterfaceValue<any>(s.Timestamp, "model.Time", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}

	public async UnmarshalJSON(b: $.Slice<number>): globalThis.Promise<$.GoError> {
		const s: SamplePair | $.VarRef<SamplePair> | null = this;
		const s$: SamplePair = s == null ? $.pointerTarget<SamplePair>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<SamplePair>(s)
		let v = $.varRef($.arrayValue([$.namedValueInterfaceValue<json.Unmarshaler | null>($.fieldRef((s$ as SamplePair)._fields, "Timestamp"), "*model.Time", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8()), $.namedValueInterfaceValue<json.Unmarshaler | null>($.fieldRef((s$ as SamplePair)._fields, "Value"), "*model.SampleValue", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic11())]))
		return json.Unmarshal(b, $.interfaceValue(v, "*[2]json.Unmarshaler", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType("json.Unmarshaler", 2))))
	}

	static __typeInfo = $.registerStructType(
		"model.SamplePair",
		() => new SamplePair(),
		() => [$.methodSignature("Equal", [["o", /* @__PURE__ */ $.pointerType("model.SamplePair")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		SamplePair,
		() => [/* @__PURE__ */ $.structField("Timestamp", /* @__PURE__ */ $.basicType("int64", "model.Time"), [0], 0, true), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.basicType("float64", "model.SampleValue"), [1], 8, true)]
	)
}

export class Sample {
	public get Metric(): __goscript_metric.Metric {
		return this._fields.Metric
	}

	public set Metric(value: __goscript_metric.Metric) {
		this._fields.Metric = value
	}

	public get Value(): SampleValue {
		return this._fields.Value
	}

	public set Value(value: SampleValue) {
		this._fields.Value = value
	}

	public get Timestamp(): __goscript_time.Time {
		return this._fields.Timestamp
	}

	public set Timestamp(value: __goscript_time.Time) {
		this._fields.Timestamp = value
	}

	public _fields: {
		Metric: __goscript_metric.Metric
		Value: SampleValue
		Timestamp: __goscript_time.Time
	}

	constructor(init?: Partial<{Metric?: __goscript_metric.Metric, Value?: SampleValue, Timestamp?: __goscript_time.Time}>, __goscriptValue?: boolean) {
		this._fields = {
			Metric: init?.Metric ?? (null! as __goscript_metric.Metric),
			Value: init?.Value ?? (0 as SampleValue),
			Timestamp: init?.Timestamp ?? (0n as __goscript_time.Time)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Sample {
		return new Sample(this, true)
	}

	public __goscriptAssign(source: Sample): void {
		const target = this._fields
		const values = source._fields
		target.Metric = values.Metric
		target.Value = values.Value
		target.Timestamp = values.Timestamp
	}

	public Equal(o: Sample | $.VarRef<Sample> | null): boolean {
		const s: Sample | $.VarRef<Sample> | null = this;
		const s$: Sample = s == null ? $.pointerTarget<Sample>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Sample>(s)
		const o$: Sample = o == null ? $.pointerTarget<Sample>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<Sample>(o)
		if ($.pointerEqual(s, o)) {
			return true
		}

		if (!__goscript_metric.Metric_Equal((s$ as Sample).Metric, (o$ as Sample).Metric)) {
			return false
		}
		if (!__goscript_time.Time_Equal((s$ as Sample).Timestamp, (o$ as Sample).Timestamp)) {
			return false
		}

		return SampleValue_Equal((s$ as Sample).Value, (o$ as Sample).Value)
	}

	public async MarshalJSON(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const s = this;
		let v = $.varRef($.anonymousStructValue({Metric: s.Metric, Value: new SamplePair({Timestamp: s.Timestamp, Value: s.Value}, true)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Metric", "model.Metric", [0], 0, true, { tag: "json:\"metric\"" }), /* @__PURE__ */ $.structField("Value", "model.SamplePair", [1], 8, true, { tag: "json:\"value\"" })] }))

		return json.Marshal($.interfaceValue(v, "*struct{Metric model.Metric \"json:\\\"metric\\\"\"; Value model.SamplePair \"json:\\\"value\\\"\"}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Metric", "model.Metric", [0], 0, true, { tag: "json:\"metric\"" }), /* @__PURE__ */ $.structField("Value", "model.SamplePair", [1], 8, true, { tag: "json:\"value\"" })] })))
	}

	public async String(): globalThis.Promise<string> {
		const s = this;
		return fmt.Sprintf("%s => %s", $.namedValueInterfaceValue<any>(s.Metric, "model.Metric", __goscriptStatic12(), __goscriptStatic13(), __goscriptStatic14()), $.interfaceValue(new SamplePair({Timestamp: s.Timestamp, Value: s.Value}, true), "model.SamplePair", "model.SamplePair"))
	}

	public async UnmarshalJSON(b: $.Slice<number>): globalThis.Promise<$.GoError> {
		let s: Sample | $.VarRef<Sample> | null = this;
		const s$: Sample = s == null ? $.pointerTarget<Sample>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Sample>(s)
		let v = $.varRef($.anonymousStructValue({Metric: (s$ as Sample).Metric, Value: new SamplePair({Timestamp: (s$ as Sample).Timestamp, Value: (s$ as Sample).Value}, true)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Metric", "model.Metric", [0], 0, true, { tag: "json:\"metric\"" }), /* @__PURE__ */ $.structField("Value", "model.SamplePair", [1], 8, true, { tag: "json:\"value\"" })] }))

		{
			let err = await json.Unmarshal(b, $.interfaceValue(v, "*struct{Metric model.Metric \"json:\\\"metric\\\"\"; Value model.SamplePair \"json:\\\"value\\\"\"}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Metric", "model.Metric", [0], 0, true, { tag: "json:\"metric\"" }), /* @__PURE__ */ $.structField("Value", "model.SamplePair", [1], 8, true, { tag: "json:\"value\"" })] })))
			if (err != null) {
				return err
			}
		}

		;(s$ as Sample).Metric = v.value.Metric;
		;(s$ as Sample).Timestamp = v.value.Value.Timestamp;
		;(s$ as Sample).Value = v.value.Value.Value

		return null
	}

	static __typeInfo = $.registerStructType(
		"model.Sample",
		() => new Sample(),
		() => [$.methodSignature("Equal", [["o", /* @__PURE__ */ $.pointerType("model.Sample")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		Sample,
		() => [/* @__PURE__ */ $.structField("Metric", "model.Metric", [0], 0, true, { tag: "json:\"metric\"" }), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.basicType("float64", "model.SampleValue"), [1], 8, true, { tag: "json:\"value\"" }), /* @__PURE__ */ $.structField("Timestamp", /* @__PURE__ */ $.basicType("int64", "model.Time"), [2], 16, true, { tag: "json:\"timestamp\"" })]
	)
}

export class SampleStream {
	public get Metric(): __goscript_metric.Metric {
		return this._fields.Metric
	}

	public set Metric(value: __goscript_metric.Metric) {
		this._fields.Metric = value
	}

	public get Values(): $.Slice<SamplePair> {
		return this._fields.Values
	}

	public set Values(value: $.Slice<SamplePair>) {
		this._fields.Values = value
	}

	public _fields: {
		Metric: __goscript_metric.Metric
		Values: $.Slice<SamplePair>
	}

	constructor(init?: Partial<{Metric?: __goscript_metric.Metric, Values?: $.Slice<SamplePair>}>, __goscriptValue?: boolean) {
		this._fields = {
			Metric: init?.Metric ?? (null! as __goscript_metric.Metric),
			Values: init?.Values ?? (null! as $.Slice<SamplePair>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SampleStream {
		return new SampleStream(this, true)
	}

	public __goscriptAssign(source: SampleStream): void {
		const target = this._fields
		const values = source._fields
		target.Metric = values.Metric
		target.Values = values.Values
	}

	public async String(): globalThis.Promise<string> {
		const ss = this;
		let vals: $.Slice<string> = $.makeSlice<string>($.sliceLen(ss.Values), undefined, "string")
		for (let __goscriptRangeTarget1 = ss.Values, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow1 = $.sliceRange(vals), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let v = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as SamplePair)).clone();
			;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = await $.markAsStructValue($.cloneStructValue(v)).String()
		}
		return fmt.Sprintf("%s =>\n%s", $.namedValueInterfaceValue<any>(ss.Metric, "model.Metric", __goscriptStatic12(), __goscriptStatic13(), __goscriptStatic14()), strings.Join(vals, "\n"))
	}

	static __typeInfo = $.registerStructType(
		"model.SampleStream",
		() => new SampleStream(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		SampleStream,
		() => [/* @__PURE__ */ $.structField("Metric", "model.Metric", [0], 0, true, { tag: "json:\"metric\"" }), /* @__PURE__ */ $.structField("Values", /* @__PURE__ */ $.sliceType("model.SamplePair"), [1], 8, true, { tag: "json:\"values\"" })]
	)
}

export class Scalar {
	public get Value(): SampleValue {
		return this._fields.Value
	}

	public set Value(value: SampleValue) {
		this._fields.Value = value
	}

	public get Timestamp(): __goscript_time.Time {
		return this._fields.Timestamp
	}

	public set Timestamp(value: __goscript_time.Time) {
		this._fields.Timestamp = value
	}

	public _fields: {
		Value: SampleValue
		Timestamp: __goscript_time.Time
	}

	constructor(init?: Partial<{Value?: SampleValue, Timestamp?: __goscript_time.Time}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? (0 as SampleValue),
			Timestamp: init?.Timestamp ?? (0n as __goscript_time.Time)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Scalar {
		return new Scalar(this, true)
	}

	public __goscriptAssign(source: Scalar): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
		target.Timestamp = values.Timestamp
	}

	public async MarshalJSON(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const s = this;
		let v = strconv.FormatFloat(s.Value, 102, -1, 64)
		return json.Marshal($.arrayValue([$.namedValueInterfaceValue<any>(s.Timestamp, "model.Time", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), v]))
	}

	public async String(): globalThis.Promise<string> {
		const s = this;
		return fmt.Sprintf("scalar: %v @[%v]", $.namedValueInterfaceValue<any>(s.Value, "model.SampleValue", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), $.namedValueInterfaceValue<any>(s.Timestamp, "model.Time", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}

	public Type(): ValueType {
		return 1
	}

	public async UnmarshalJSON(b: $.Slice<number>): globalThis.Promise<$.GoError> {
		let s: Scalar | $.VarRef<Scalar> | null = this;
		const s$: Scalar = s == null ? $.pointerTarget<Scalar>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Scalar>(s)
		let f: $.VarRef<string> = $.varRef("")
		let v = $.varRef($.arrayValue([$.namedValueInterfaceValue<any>($.fieldRef((s$ as Scalar)._fields, "Timestamp"), "*model.Time", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8()), $.interfaceValue(f, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))]))

		{
			let err = await json.Unmarshal(b, $.interfaceValue(v, "*[2]interface{}", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType({ kind: $.TypeKind.Interface, methods: [] }, 2))))
			if (err != null) {
				return err
			}
		}

		let [value, err] = strconv.ParseFloat(f.value, 64)
		if (err != null) {
			return fmt.Errorf("error parsing sample value: %s", (err as any))
		}
		;(s$ as Scalar).Value = value
		return null
	}

	static __typeInfo = $.registerStructType(
		"model.Scalar",
		() => new Scalar(),
		() => [$.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "model.ValueType")], true), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		Scalar,
		() => [/* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.basicType("float64", "model.SampleValue"), [0], 0, true, { tag: "json:\"value\"" }), /* @__PURE__ */ $.structField("Timestamp", /* @__PURE__ */ $.basicType("int64", "model.Time"), [1], 8, true, { tag: "json:\"timestamp\"" })]
	)
}

export class String {
	public get Value(): string {
		return this._fields.Value
	}

	public set Value(value: string) {
		this._fields.Value = value
	}

	public get Timestamp(): __goscript_time.Time {
		return this._fields.Timestamp
	}

	public set Timestamp(value: __goscript_time.Time) {
		this._fields.Timestamp = value
	}

	public _fields: {
		Value: string
		Timestamp: __goscript_time.Time
	}

	constructor(init?: Partial<{Value?: string, Timestamp?: __goscript_time.Time}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? ("" as string),
			Timestamp: init?.Timestamp ?? (0n as __goscript_time.Time)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): String {
		return new String(this, true)
	}

	public __goscriptAssign(source: String): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
		target.Timestamp = values.Timestamp
	}

	public async MarshalJSON(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const s = this;
		return json.Marshal($.interfaceValue($.arrayToSlice<any>([$.namedValueInterfaceValue<any>(s.Timestamp, "model.Time", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), s.Value]), "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })))
	}

	public String(): string {
		const s: String | $.VarRef<String> | null = this;
		return $.pointerValue<String>(s).Value
	}

	public Type(): ValueType {
		return 4
	}

	public async UnmarshalJSON(b: $.Slice<number>): globalThis.Promise<$.GoError> {
		const s: String | $.VarRef<String> | null = this;
		const s$: String = s == null ? $.pointerTarget<String>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<String>(s)
		let v = $.varRef($.arrayValue([$.namedValueInterfaceValue<any>($.fieldRef((s$ as String)._fields, "Timestamp"), "*model.Time", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8()), $.interfaceValue($.fieldRef((s$ as String)._fields, "Value"), "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))]))
		return json.Unmarshal(b, $.interfaceValue(v, "*[2]interface{}", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType({ kind: $.TypeKind.Interface, methods: [] }, 2))))
	}

	static __typeInfo = $.registerStructType(
		"model.String",
		() => new String(),
		() => [$.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "model.ValueType")], true), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		String,
		() => [/* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"value\"" }), /* @__PURE__ */ $.structField("Timestamp", /* @__PURE__ */ $.basicType("int64", "model.Time"), [1], 16, true, { tag: "json:\"timestamp\"" })]
	)
}

export const ValNone: ValueType = 0

export const ValScalar: ValueType = 1

export const ValVector: ValueType = 2

export const ValMatrix: ValueType = 3

export const ValString: ValueType = 4

export var ZeroSamplePair: SamplePair

export function __goscript_init_ZeroSamplePair(): void {
	if (((ZeroSamplePair) as any) === undefined) {
		ZeroSamplePair = new SamplePair({Timestamp: -9223372036854775808n}, true)
	}
}

export function __goscript_get_ZeroSamplePair(): SamplePair {
	if (((ZeroSamplePair) as any) === undefined) {
		__goscript_init_ZeroSamplePair()
	}
	return ZeroSamplePair
}

export function __goscript_set_ZeroSamplePair(__goscriptValue: SamplePair): void {
	$.assignStruct(ZeroSamplePair, __goscriptValue)
}

export var ZeroSample: Sample

export function __goscript_init_ZeroSample(): void {
	if (((ZeroSample) as any) === undefined) {
		ZeroSample = new Sample({Timestamp: -9223372036854775808n}, true)
	}
}

export function __goscript_get_ZeroSample(): Sample {
	if (((ZeroSample) as any) === undefined) {
		__goscript_init_ZeroSample()
	}
	return ZeroSample
}

export function __goscript_set_ZeroSample(__goscriptValue: Sample): void {
	$.assignStruct(ZeroSample, __goscriptValue)
}

export async function SampleValue_MarshalJSON(v: SampleValue): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	return json.Marshal(SampleValue_String(v))
}

export function SampleValue_UnmarshalJSON(v: $.VarRef<SampleValue> | null, b: $.Slice<number>): $.GoError {
	if ((($.sliceLen(b) < 2) || ($.arrayIndex(b!, 0) != 34)) || ($.arrayIndex(b!, $.sliceLen(b) - 1) != 34)) {
		return fmt.Errorf("sample value must be a quoted string")
	}
	let [f, err] = strconv.ParseFloat($.bytesToString($.goSlice(b, 1, $.sliceLen(b) - 1)), 64)
	if (err != null) {
		return err
	}
	v!.value = f
	return null
}

export function SampleValue_Equal(v: SampleValue, o: SampleValue): boolean {
	if (v == o) {
		return true
	}
	return math.IsNaN(v) && math.IsNaN(o)
}

export function SampleValue_String(v: SampleValue): string {
	return strconv.FormatFloat(v, 102, -1, 64)
}

export function Samples_Len(s: Samples): number {
	return $.sliceLen((s as Samples))
}

export async function Samples_Less(s: Samples, i: number, j: number): globalThis.Promise<boolean> {
	switch ((true as boolean)) {
		case await __goscript_metric.Metric_Before($.pointerValue<Sample>($.arrayIndex(s!, i)).Metric, $.pointerValue<Sample>($.arrayIndex(s!, j)).Metric):
		{
			return true
			break
		}
		case await __goscript_metric.Metric_Before($.pointerValue<Sample>($.arrayIndex(s!, j)).Metric, $.pointerValue<Sample>($.arrayIndex(s!, i)).Metric):
		{
			return false
			break
		}
		case __goscript_time.Time_Before($.pointerValue<Sample>($.arrayIndex(s!, i)).Timestamp, $.pointerValue<Sample>($.arrayIndex(s!, j)).Timestamp):
		{
			return true
			break
		}
		default:
		{
			return false
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function Samples_Swap(s: Samples, i: number, j: number): void {
	let __goscriptAssign0_0: Sample | $.VarRef<Sample> | null = $.arrayIndex(s!, j)
	let __goscriptAssign0_1: Sample | $.VarRef<Sample> | null = $.arrayIndex(s!, i)
	$.sliceElems(s!)[$.sliceSlot(s!, i)] = __goscriptAssign0_0
	$.sliceElems(s!)[$.sliceSlot(s!, j)] = __goscriptAssign0_1
}

export function Samples_Equal(s: Samples, o: Samples): boolean {
	if ($.sliceLen((s as Samples)) != $.sliceLen((o as Samples))) {
		return false
	}

	for (let __goscriptRangeTarget0 = s, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(o), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let sample = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as Sample | $.VarRef<Sample> | null)
		if (!(sample !== null && (sample as any).__isVarRef !== true && (sample as any).__goValue === undefined ? ((sample as any) as Sample).Equal(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as Sample | $.VarRef<Sample> | null)) : Sample.prototype.Equal.call(sample, ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as Sample | $.VarRef<Sample> | null)))) {
			return false
		}
	}
	return true
}

export function Matrix_Type(recv: Matrix): ValueType {
	return 3
}

export function Vector_Type(recv: Vector): ValueType {
	return 2
}

export async function ValueType_MarshalJSON(et: ValueType): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	return json.Marshal(ValueType_String(et))
}

export async function ValueType_UnmarshalJSON(et: $.VarRef<ValueType> | null, b: $.Slice<number>): globalThis.Promise<$.GoError> {
	let s: $.VarRef<string> = $.varRef("")
	{
		let err = await json.Unmarshal(b, $.interfaceValue(s, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))))
		if (err != null) {
			return err
		}
	}
	switch (s.value) {
		case "<ValNone>":
		{
			et!.value = 0
			break
		}
		case "scalar":
		{
			et!.value = 1
			break
		}
		case "vector":
		{
			et!.value = 2
			break
		}
		case "matrix":
		{
			et!.value = 3
			break
		}
		case "string":
		{
			et!.value = 4
			break
		}
		default:
		{
			return fmt.Errorf("unknown value type %q", s.value)
			break
		}
	}
	return null
}

export function ValueType_String(e: ValueType): string {
	switch (e) {
		case 0:
		{
			return "<ValNone>"
			break
		}
		case 1:
		{
			return "scalar"
			break
		}
		case 2:
		{
			return "vector"
			break
		}
		case 3:
		{
			return "matrix"
			break
		}
		case 4:
		{
			return "string"
			break
		}
	}
	$.panic("ValueType.String: unhandled value type")
	throw new globalThis.Error("goscript: unreachable return")
}

export async function Vector_String(vec: Vector): globalThis.Promise<string> {
	let entries: $.Slice<string> = $.makeSlice<string>($.sliceLen((vec as Vector)), undefined, "string")
	for (let __goscriptRangeTarget2 = vec, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __goscriptSliceWindow2 = $.sliceRange(entries), i = 0; i < __goscriptRangeWindow2.length; i++) {
		let s = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as Sample | $.VarRef<Sample> | null);
		;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] = await $.markAsStructValue($.cloneStructValue($.pointerValue<Sample>(s))).String()
	}
	return strings.Join(entries, "\n")
}

export function Vector_Len(vec: Vector): number {
	return $.sliceLen((vec as Vector))
}

export function Vector_Swap(vec: Vector, i: number, j: number): void {
	let __goscriptAssign1_0: Sample | $.VarRef<Sample> | null = $.arrayIndex(vec!, j)
	let __goscriptAssign1_1: Sample | $.VarRef<Sample> | null = $.arrayIndex(vec!, i)
	$.sliceElems(vec!)[$.sliceSlot(vec!, i)] = __goscriptAssign1_0
	$.sliceElems(vec!)[$.sliceSlot(vec!, j)] = __goscriptAssign1_1
}

export async function Vector_Less(vec: Vector, i: number, j: number): globalThis.Promise<boolean> {
	switch ((true as boolean)) {
		case await __goscript_metric.Metric_Before($.pointerValue<Sample>($.arrayIndex(vec!, i)).Metric, $.pointerValue<Sample>($.arrayIndex(vec!, j)).Metric):
		{
			return true
			break
		}
		case await __goscript_metric.Metric_Before($.pointerValue<Sample>($.arrayIndex(vec!, j)).Metric, $.pointerValue<Sample>($.arrayIndex(vec!, i)).Metric):
		{
			return false
			break
		}
		case __goscript_time.Time_Before($.pointerValue<Sample>($.arrayIndex(vec!, i)).Timestamp, $.pointerValue<Sample>($.arrayIndex(vec!, j)).Timestamp):
		{
			return true
			break
		}
		default:
		{
			return false
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function Vector_Equal(vec: Vector, o: Vector): boolean {
	if ($.sliceLen((vec as Vector)) != $.sliceLen((o as Vector))) {
		return false
	}

	for (let __goscriptRangeTarget3 = vec, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __goscriptSliceWindow3 = $.sliceRange(o), i = 0; i < __goscriptRangeWindow3.length; i++) {
		let sample = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as Sample | $.VarRef<Sample> | null)
		if (!(sample !== null && (sample as any).__isVarRef !== true && (sample as any).__goValue === undefined ? ((sample as any) as Sample).Equal(((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] as Sample | $.VarRef<Sample> | null)) : Sample.prototype.Equal.call(sample, ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] as Sample | $.VarRef<Sample> | null)))) {
			return false
		}
	}
	return true
}

export function Matrix_Len(m: Matrix): number {
	return $.sliceLen((m as Matrix))
}

export async function Matrix_Less(m: Matrix, i: number, j: number): globalThis.Promise<boolean> {
	return __goscript_metric.Metric_Before($.pointerValue<SampleStream>($.arrayIndex(m!, i)).Metric, $.pointerValue<SampleStream>($.arrayIndex(m!, j)).Metric)
}

export function Matrix_Swap(m: Matrix, i: number, j: number): void {
	let __goscriptAssign2_0: SampleStream | $.VarRef<SampleStream> | null = $.arrayIndex(m!, j)
	let __goscriptAssign2_1: SampleStream | $.VarRef<SampleStream> | null = $.arrayIndex(m!, i)
	$.sliceElems(m!)[$.sliceSlot(m!, i)] = __goscriptAssign2_0
	$.sliceElems(m!)[$.sliceSlot(m!, j)] = __goscriptAssign2_1
}

export async function Matrix_String(mat: Matrix): globalThis.Promise<string> {
	let matCp: Matrix = ($.makeSlice<SampleStream | $.VarRef<SampleStream> | null>($.sliceLen((mat as Matrix))) as Matrix)
	$.copy((matCp as Matrix), (mat as Matrix))
	await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>(matCp, "model.Matrix", __goscriptStatic15(), __goscriptStatic16(), __goscriptStatic17()))!)

	let strs: $.Slice<string> = $.makeSlice<string>($.sliceLen((matCp as Matrix)), undefined, "string")

	for (let __goscriptRangeTarget4 = matCp, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __goscriptSliceWindow4 = $.sliceRange(strs), i = 0; i < __goscriptRangeWindow4.length; i++) {
		let ss = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as SampleStream | $.VarRef<SampleStream> | null);
		;(__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] = await $.markAsStructValue($.cloneStructValue($.pointerValue<SampleStream>(ss))).String()
	}

	return strings.Join(strs, "\n")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Add: (receiver: any, ...args: any[]) => (__goscript_time.Time_Add as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), After: (receiver: any, ...args: any[]) => (__goscript_time.Time_After as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Before: (receiver: any, ...args: any[]) => (__goscript_time.Time_Before as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => (__goscript_time.Time_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (__goscript_time.Time_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_time.Time_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Sub: (receiver: any, ...args: any[]) => (__goscript_time.Time_Sub as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Time: (receiver: any, ...args: any[]) => (__goscript_time.Time_Time as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Unix: (receiver: any, ...args: any[]) => (__goscript_time.Time_Unix as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), UnixNano: (receiver: any, ...args: any[]) => (__goscript_time.Time_UnixNano as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int64", "model.Time"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Add", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "model.Time")]), $.methodSignature("After", [["o", /* @__PURE__ */ $.basicType("int64", "model.Time")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Before", [["o", /* @__PURE__ */ $.basicType("int64", "model.Time")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Equal", [["o", /* @__PURE__ */ $.basicType("int64", "model.Time")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Sub", [["o", /* @__PURE__ */ $.basicType("int64", "model.Time")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Time", [], ["time.Time"]), $.methodSignature("Unix", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("UnixNano", [], [/* @__PURE__ */ $.basicType("int64")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Equal: (receiver: any, ...args: any[]) => (SampleValue_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (SampleValue_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (SampleValue_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("float64", "model.SampleValue"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Equal", [["o", /* @__PURE__ */ $.basicType("float64", "model.SampleValue")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({Add: (receiver: any, ...args: any[]) => (__goscript_time.Time_Add as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), After: (receiver: any, ...args: any[]) => (__goscript_time.Time_After as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Before: (receiver: any, ...args: any[]) => (__goscript_time.Time_Before as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => (__goscript_time.Time_Equal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (__goscript_time.Time_MarshalJSON as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_time.Time_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Sub: (receiver: any, ...args: any[]) => (__goscript_time.Time_Sub as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Time: (receiver: any, ...args: any[]) => (__goscript_time.Time_Time as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Unix: (receiver: any, ...args: any[]) => (__goscript_time.Time_Unix as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnixNano: (receiver: any, ...args: any[]) => (__goscript_time.Time_UnixNano as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (__goscript_time.Time_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "model.Time")))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ([$.methodSignature("Add", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "model.Time")]), $.methodSignature("After", [["o", /* @__PURE__ */ $.basicType("int64", "model.Time")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Before", [["o", /* @__PURE__ */ $.basicType("int64", "model.Time")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Equal", [["o", /* @__PURE__ */ $.basicType("int64", "model.Time")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Sub", [["o", /* @__PURE__ */ $.basicType("int64", "model.Time")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Time", [], ["time.Time"]), $.methodSignature("Unix", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("UnixNano", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])])
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ({Equal: (receiver: any, ...args: any[]) => (SampleValue_Equal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (SampleValue_MarshalJSON as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (SampleValue_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (SampleValue_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64", "model.SampleValue")))
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ([$.methodSignature("Equal", [["o", /* @__PURE__ */ $.basicType("float64", "model.SampleValue")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])])
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= ({Before: (receiver: any, ...args: any[]) => (__goscript_metric.Metric_Before as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Clone: (receiver: any, ...args: any[]) => (__goscript_metric.Metric_Clone as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => (__goscript_metric.Metric_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), FastFingerprint: (receiver: any, ...args: any[]) => (__goscript_metric.Metric_FastFingerprint as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Fingerprint: (receiver: any, ...args: any[]) => (__goscript_metric.Metric_Fingerprint as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_metric.Metric_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic13$value: any
function __goscriptStatic13(): any {
	return __goscriptStatic13$value ??= ("model.Metric")
}

var __goscriptStatic14$value: any
function __goscriptStatic14(): any {
	return __goscriptStatic14$value ??= ([$.methodSignature("Before", [["o", "model.Metric"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Clone", [], ["model.Metric"]), $.methodSignature("Equal", [["o", "model.Metric"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("FastFingerprint", [], [/* @__PURE__ */ $.basicType("uint64", "model.Fingerprint")]), $.methodSignature("Fingerprint", [], [/* @__PURE__ */ $.basicType("uint64", "model.Fingerprint")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic15$value: any
function __goscriptStatic15(): any {
	return __goscriptStatic15$value ??= ({Len: (receiver: any, ...args: any[]) => (Matrix_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Matrix_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Matrix_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Matrix_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (Matrix_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic16$value: any
function __goscriptStatic16(): any {
	return __goscriptStatic16$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("model.SampleStream"), "model.Matrix"))
}

var __goscriptStatic17$value: any
function __goscriptStatic17(): any {
	return __goscriptStatic17$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "model.ValueType")])])
}
