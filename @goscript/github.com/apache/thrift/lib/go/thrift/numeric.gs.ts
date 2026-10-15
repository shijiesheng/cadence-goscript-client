// Generated file based on numeric.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_simple_json_protocol from "./simple_json_protocol.gs.ts"
import "@goscript/math/index.js"
import "@goscript/strconv/index.js"
import "./simple_json_protocol.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.Numeric", "thrift.numeric"])

export type Numeric = {
	Byte(): number
	Float32(): number
	Float64(): number
	Int(): number
	Int16(): number
	Int32(): number
	Int64(): bigint
	String(): string
	isNull(): boolean
}

$.registerInterfaceType(
	"thrift.Numeric",
	null,
	[$.methodSignature("Byte", [], [/* @__PURE__ */ $.basicType("uint8")]), $.methodSignature("Float32", [], [/* @__PURE__ */ $.basicType("float32")]), $.methodSignature("Float64", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Int", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Int16", [], [/* @__PURE__ */ $.basicType("int16")]), $.methodSignature("Int32", [], [/* @__PURE__ */ $.basicType("int32")]), $.methodSignature("Int64", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("isNull", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export class numeric {
	public get iValue(): bigint {
		return this._fields.iValue
	}

	public set iValue(value: bigint) {
		this._fields.iValue = value
	}

	public get dValue(): number {
		return this._fields.dValue
	}

	public set dValue(value: number) {
		this._fields.dValue = value
	}

	public get sValue(): string {
		return this._fields.sValue
	}

	public set sValue(value: string) {
		this._fields.sValue = value
	}

	public get isNil(): boolean {
		return this._fields.isNil
	}

	public set isNil(value: boolean) {
		this._fields.isNil = value
	}

	public _fields: {
		iValue: bigint
		dValue: number
		sValue: string
		isNil: boolean
	}

	constructor(init?: Partial<{iValue?: bigint, dValue?: number, sValue?: string, isNil?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			iValue: init?.iValue ?? (0n as bigint),
			dValue: init?.dValue ?? (0 as number),
			sValue: init?.sValue ?? ("" as string),
			isNil: init?.isNil ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): numeric {
		return new numeric(this, true)
	}

	public __goscriptAssign(source: numeric): void {
		const target = this._fields
		const values = source._fields
		target.iValue = values.iValue
		target.dValue = values.dValue
		target.sValue = values.sValue
		target.isNil = values.isNil
	}

	public Byte(): number {
		const p: numeric | $.VarRef<numeric> | null = this;
		return $.uint($.pointerValue<numeric>(p).iValue, 8)
	}

	public Float32(): number {
		const p: numeric | $.VarRef<numeric> | null = this;
		return globalThis.Math.fround($.pointerValue<numeric>(p).dValue)
	}

	public Float64(): number {
		const p: numeric | $.VarRef<numeric> | null = this;
		return $.pointerValue<numeric>(p).dValue
	}

	public Int(): number {
		const p: numeric | $.VarRef<numeric> | null = this;
		return $.int($.pointerValue<numeric>(p).iValue)
	}

	public Int16(): number {
		const p: numeric | $.VarRef<numeric> | null = this;
		return $.int($.pointerValue<numeric>(p).iValue, 16)
	}

	public Int32(): number {
		const p: numeric | $.VarRef<numeric> | null = this;
		return $.int($.pointerValue<numeric>(p).iValue, 32)
	}

	public Int64(): bigint {
		const p: numeric | $.VarRef<numeric> | null = this;
		return $.pointerValue<numeric>(p).iValue
	}

	public String(): string {
		const p: numeric | $.VarRef<numeric> | null = this;
		return $.pointerValue<numeric>(p).sValue
	}

	public isNull(): boolean {
		const p: numeric | $.VarRef<numeric> | null = this;
		return $.pointerValue<numeric>(p).isNil
	}

	static __typeInfo = $.registerStructType(
		"thrift.numeric",
		() => new numeric(),
		() => [$.methodSignature("Byte", [], [/* @__PURE__ */ $.basicType("uint8")], true), $.methodSignature("Float32", [], [/* @__PURE__ */ $.basicType("float32")], true), $.methodSignature("Float64", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("Int", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Int16", [], [/* @__PURE__ */ $.basicType("int16")], true), $.methodSignature("Int32", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("Int64", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("isNull", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		numeric,
		() => [/* @__PURE__ */ $.structField("iValue", /* @__PURE__ */ $.basicType("int64"), [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("dValue", /* @__PURE__ */ $.basicType("float64"), [1], 8, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("sValue", /* @__PURE__ */ $.basicType("string"), [2], 16, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("isNil", /* @__PURE__ */ $.basicType("bool"), [3], 32, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export let INFINITY: Numeric | null = null! as Numeric | null

export function __goscript_set_INFINITY(__goscriptValue: Numeric | null): void {
	INFINITY = __goscriptValue
}

export let NEGATIVE_INFINITY: Numeric | null = null! as Numeric | null

export function __goscript_set_NEGATIVE_INFINITY(__goscriptValue: Numeric | null): void {
	NEGATIVE_INFINITY = __goscriptValue
}

export let NAN: Numeric | null = null! as Numeric | null

export function __goscript_set_NAN(__goscriptValue: Numeric | null): void {
	NAN = __goscriptValue
}

export let ZERO: Numeric | null = null! as Numeric | null

export function __goscript_set_ZERO(__goscriptValue: Numeric | null): void {
	ZERO = __goscriptValue
}

export let NUMERIC_NULL: Numeric | null = null! as Numeric | null

export function __goscript_set_NUMERIC_NULL(__goscriptValue: Numeric | null): void {
	NUMERIC_NULL = __goscriptValue
}

export function NewNumericFromDouble(dValue: number): Numeric | null {
	if (math.IsInf(dValue, 1)) {
		return INFINITY
	}
	if (math.IsInf(dValue, -1)) {
		return NEGATIVE_INFINITY
	}
	if (math.IsNaN(dValue)) {
		return NAN
	}
	let iValue = $.int64(dValue)
	let sValue = strconv.FormatFloat(dValue, 103, 10, 64)
	let isNil = false
	return $.interfaceValue<Numeric | null>(new numeric({iValue: iValue, dValue: dValue, sValue: sValue, isNil: isNil}), "*thrift.numeric", /* @__PURE__ */ $.pointerType("thrift.numeric"))
}

export function NewNumericFromI64(iValue: bigint): Numeric | null {
	let dValue = globalThis.Number(iValue)
	let sValue = strconv.FormatInt(iValue, 10)
	let isNil = false
	return $.interfaceValue<Numeric | null>(new numeric({iValue: iValue, dValue: dValue, sValue: sValue, isNil: isNil}), "*thrift.numeric", /* @__PURE__ */ $.pointerType("thrift.numeric"))
}

export function NewNumericFromI32(iValue: number): Numeric | null {
	let dValue = iValue
	let sValue = strconv.FormatInt($.int64(iValue), 10)
	let isNil = false
	return $.interfaceValue<Numeric | null>(new numeric({iValue: $.int64(iValue), dValue: dValue, sValue: sValue, isNil: isNil}), "*thrift.numeric", /* @__PURE__ */ $.pointerType("thrift.numeric"))
}

export function NewNumericFromString(sValue: string): Numeric | null {
	if ($.stringEqual(sValue, (INFINITY !== null && (INFINITY as any).__isVarRef !== true && (INFINITY as any).__goValue === undefined ? (INFINITY as Exclude<Numeric, null>) : $.pointerValue<Exclude<Numeric, null>>(INFINITY)).String())) {
		return INFINITY
	}
	if ($.stringEqual(sValue, (NEGATIVE_INFINITY !== null && (NEGATIVE_INFINITY as any).__isVarRef !== true && (NEGATIVE_INFINITY as any).__goValue === undefined ? (NEGATIVE_INFINITY as Exclude<Numeric, null>) : $.pointerValue<Exclude<Numeric, null>>(NEGATIVE_INFINITY)).String())) {
		return NEGATIVE_INFINITY
	}
	if ($.stringEqual(sValue, (NAN !== null && (NAN as any).__isVarRef !== true && (NAN as any).__goValue === undefined ? (NAN as Exclude<Numeric, null>) : $.pointerValue<Exclude<Numeric, null>>(NAN)).String())) {
		return NAN
	}
	let [iValue, ] = strconv.ParseInt(sValue, 10, 64)
	let [dValue, ] = strconv.ParseFloat(sValue, 64)
	let isNil = $.stringLen(sValue) == 0
	return $.interfaceValue<Numeric | null>(new numeric({iValue: iValue, dValue: dValue, sValue: sValue, isNil: isNil}), "*thrift.numeric", /* @__PURE__ */ $.pointerType("thrift.numeric"))
}

export function NewNumericFromJSONString(sValue: string, isNull: boolean): Numeric | null {
	if (isNull) {
		return NewNullNumeric()
	}
	if ($.stringEqual(sValue, __goscript_simple_json_protocol.JSON_INFINITY)) {
		return INFINITY
	}
	if ($.stringEqual(sValue, __goscript_simple_json_protocol.JSON_NEGATIVE_INFINITY)) {
		return NEGATIVE_INFINITY
	}
	if ($.stringEqual(sValue, __goscript_simple_json_protocol.JSON_NAN)) {
		return NAN
	}
	let [iValue, ] = strconv.ParseInt(sValue, 10, 64)
	let [dValue, ] = strconv.ParseFloat(sValue, 64)
	return $.interfaceValue<Numeric | null>(new numeric({iValue: iValue, dValue: dValue, sValue: sValue, isNil: isNull}), "*thrift.numeric", /* @__PURE__ */ $.pointerType("thrift.numeric"))
}

export function NewNullNumeric(): Numeric | null {
	return $.interfaceValue<Numeric | null>(new numeric({iValue: 0n, dValue: 0.0, sValue: "", isNil: true}), "*thrift.numeric", /* @__PURE__ */ $.pointerType("thrift.numeric"))
}

function __goscriptInit0(): void {
	INFINITY = $.interfaceValue<Numeric | null>((() => { const __goscriptLiteralField0 = math.Inf(1); return new numeric({iValue: 0n, dValue: __goscriptLiteralField0, sValue: "Infinity", isNil: false}) })(), "*thrift.numeric", /* @__PURE__ */ $.pointerType("thrift.numeric"))
	NEGATIVE_INFINITY = $.interfaceValue<Numeric | null>((() => { const __goscriptLiteralField1 = math.Inf(-1); return new numeric({iValue: 0n, dValue: __goscriptLiteralField1, sValue: "-Infinity", isNil: false}) })(), "*thrift.numeric", /* @__PURE__ */ $.pointerType("thrift.numeric"))
	NAN = $.interfaceValue<Numeric | null>((() => { const __goscriptLiteralField2 = math.NaN(); return new numeric({iValue: 0n, dValue: __goscriptLiteralField2, sValue: "NaN", isNil: false}) })(), "*thrift.numeric", /* @__PURE__ */ $.pointerType("thrift.numeric"))
	ZERO = $.interfaceValue<Numeric | null>(new numeric({iValue: 0n, dValue: 0, sValue: "0", isNil: false}), "*thrift.numeric", /* @__PURE__ */ $.pointerType("thrift.numeric"))
	NUMERIC_NULL = $.interfaceValue<Numeric | null>(new numeric({iValue: 0n, dValue: 0, sValue: "0", isNil: true}), "*thrift.numeric", /* @__PURE__ */ $.pointerType("thrift.numeric"))
}

export { __goscriptInit0 }
