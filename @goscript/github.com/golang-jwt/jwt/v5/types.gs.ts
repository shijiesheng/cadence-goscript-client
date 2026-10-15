// Generated file based on types.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_errors from "./errors.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/strconv/index.js"
import "@goscript/time/index.js"
import "./errors.gs.ts"

$.registerTypePackagePath("github.com/golang-jwt/jwt/v5", ["jwt.NumericDate", "jwt.ClaimStrings"])

export type ClaimStrings = $.Slice<string>

$.registerNamedType("jwt.ClaimStrings", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")));

$.registerNamedValueType(
	"jwt.ClaimStrings",
	{MarshalJSON: (receiver: any, ...args: any[]) => (ClaimStrings_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalJSON", [], [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]])]
);

$.registerNamedValueType(
	"*jwt.ClaimStrings",
	{MarshalJSON: (receiver: any, ...args: any[]) => (ClaimStrings_MarshalJSON as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (ClaimStrings_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalJSON", [], [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]]), $.methodSignature("UnmarshalJSON", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["err", "error"]])]
);

export class NumericDate {
	public get Time(): time.Time {
		return this._fields.Time
	}

	public set Time(value: time.Time) {
		this._fields.Time = value
	}

	public _fields: {
		Time: time.Time
	}

	constructor(init?: Partial<{Time?: time.Time}>, __goscriptValue?: boolean) {
		this._fields = {
			Time: init?.Time ? $.markAsStructValue($.cloneStructValue(init.Time)) : $.markAsStructValue(new time.Time())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NumericDate {
		return new NumericDate(this, true)
	}

	public __goscriptAssign(source: NumericDate): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Time, values.Time)
	}

	public MarshalJSON(): [$.Slice<number>, $.GoError] {
		const date = this;
		let b: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let prec: number = 0
		if (TimePrecision < 1000000000n) {
			prec = $.int(math.Log10(globalThis.Number(time.Second) / globalThis.Number(TimePrecision)))
		}
		let truncatedDate = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(date.Time)).Truncate(TimePrecision)))

		// For very large timestamps, UnixNano would overflow an int64, but this
		// function requires nanosecond level precision, so we have to use the
		// following technique to get round the issue:
		//
		// 1. Take the normal unix timestamp to form the whole number part of the
		//    output,
		// 2. Take the result of the Nanosecond function, which returns the offset
		//    within the second of the particular unix time instance, to form the
		//    decimal part of the output
		// 3. Concatenate them to produce the final result
		let seconds = strconv.FormatInt($.markAsStructValue($.cloneStructValue(truncatedDate)).Unix(), 10)
		let nanosecondsOffset = strconv.FormatFloat($.markAsStructValue($.cloneStructValue(truncatedDate)).Nanosecond() / globalThis.Number(time.Second), 102, prec, 64)

		let output: $.Slice<number> = $.appendSlice($.stringToBytes(seconds), $.goSlice($.stringToBytes(nanosecondsOffset), 1, undefined), $.byteSliceHint)

		return [output, null]
	}

	public async UnmarshalJSON(b: $.Slice<number>): globalThis.Promise<$.GoError> {
		let date: NumericDate | $.VarRef<NumericDate> | null = this;
		let err: $.GoError = null! as $.GoError
		let _number: $.VarRef<json.Number> = $.varRef("")
		let f: number = 0

		{
			err = await json.Unmarshal(b, $.namedValueInterfaceValue<any>(_number, "*json.Number", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
			if (err != null) {
				return fmt.Errorf("could not parse NumericData: %w", (err as any))
			}
		}

		{
			let __goscriptTuple0: any = json.Number_Float64(_number.value)
			f = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
			if (err != null) {
				return fmt.Errorf("could not convert json number value to float: %w", (err as any))
			}
		}

		let n: NumericDate | $.VarRef<NumericDate> | null = newNumericDateFromSeconds(f)
		$.assignStruct($.pointerValue<NumericDate>(date), $.pointerValue<NumericDate>(n))

		return null
	}

	public Add(d: any): any {
		return $.pointerValue<time.Time>(this.Time).Add(d)
	}

	public AddDate(years: any, months: any, days: any): any {
		return $.pointerValue<time.Time>(this.Time).AddDate(years, months, days)
	}

	public After(u: any): any {
		return $.pointerValue<time.Time>(this.Time).After(u)
	}

	public AppendBinary(b: any): any {
		return $.pointerValue<time.Time>(this.Time).AppendBinary(b)
	}

	public AppendFormat(b: any, layout: any): any {
		return $.pointerValue<time.Time>(this.Time).AppendFormat(b, layout)
	}

	public AppendText(b: any): any {
		return $.pointerValue<time.Time>(this.Time).AppendText(b)
	}

	public Before(u: any): any {
		return $.pointerValue<time.Time>(this.Time).Before(u)
	}

	public Clock(): any {
		return $.pointerValue<time.Time>(this.Time).Clock()
	}

	public Compare(u: any): any {
		return $.pointerValue<time.Time>(this.Time).Compare(u)
	}

	public Date(): any {
		return $.pointerValue<time.Time>(this.Time).Date()
	}

	public Day(): any {
		return $.pointerValue<time.Time>(this.Time).Day()
	}

	public Equal(u: any): any {
		return $.pointerValue<time.Time>(this.Time).Equal(u)
	}

	public Format(layout: any): any {
		return $.pointerValue<time.Time>(this.Time).Format(layout)
	}

	public GoString(): any {
		return $.pointerValue<time.Time>(this.Time).GoString()
	}

	public GobDecode(data: any): any {
		return $.pointerValue<time.Time>(this.Time).GobDecode(data)
	}

	public GobEncode(): any {
		return $.pointerValue<time.Time>(this.Time).GobEncode()
	}

	public Hour(): any {
		return $.pointerValue<time.Time>(this.Time).Hour()
	}

	public ISOWeek(): any {
		return $.pointerValue<time.Time>(this.Time).ISOWeek()
	}

	public In(loc: any): any {
		return $.pointerValue<time.Time>(this.Time).In(loc)
	}

	public IsDST(): any {
		return $.pointerValue<time.Time>(this.Time).IsDST()
	}

	public IsZero(): any {
		return $.pointerValue<time.Time>(this.Time).IsZero()
	}

	public Local(): any {
		return $.pointerValue<time.Time>(this.Time).Local()
	}

	public Location(): any {
		return $.pointerValue<time.Time>(this.Time).Location()
	}

	public MarshalBinary(): any {
		return $.pointerValue<time.Time>(this.Time).MarshalBinary()
	}

	public MarshalText(): any {
		return $.pointerValue<time.Time>(this.Time).MarshalText()
	}

	public Minute(): any {
		return $.pointerValue<time.Time>(this.Time).Minute()
	}

	public Month(): any {
		return $.pointerValue<time.Time>(this.Time).Month()
	}

	public Nanosecond(): any {
		return $.pointerValue<time.Time>(this.Time).Nanosecond()
	}

	public Round(d: any): any {
		return $.pointerValue<time.Time>(this.Time).Round(d)
	}

	public Second(): any {
		return $.pointerValue<time.Time>(this.Time).Second()
	}

	public String(): any {
		return $.pointerValue<time.Time>(this.Time).String()
	}

	public Sub(u: any): any {
		return $.pointerValue<time.Time>(this.Time).Sub(u)
	}

	public Truncate(d: any): any {
		return $.pointerValue<time.Time>(this.Time).Truncate(d)
	}

	public UTC(): any {
		return $.pointerValue<time.Time>(this.Time).UTC()
	}

	public Unix(): any {
		return $.pointerValue<time.Time>(this.Time).Unix()
	}

	public UnixMicro(): any {
		return $.pointerValue<time.Time>(this.Time).UnixMicro()
	}

	public UnixMilli(): any {
		return $.pointerValue<time.Time>(this.Time).UnixMilli()
	}

	public UnixNano(): any {
		return $.pointerValue<time.Time>(this.Time).UnixNano()
	}

	public UnmarshalBinary(data: any): any {
		return $.pointerValue<time.Time>(this.Time).UnmarshalBinary(data)
	}

	public UnmarshalText(data: any): any {
		return $.pointerValue<time.Time>(this.Time).UnmarshalText(data)
	}

	public Weekday(): any {
		return $.pointerValue<time.Time>(this.Time).Weekday()
	}

	public Year(): any {
		return $.pointerValue<time.Time>(this.Time).Year()
	}

	public YearDay(): any {
		return $.pointerValue<time.Time>(this.Time).YearDay()
	}

	public Zone(): any {
		return $.pointerValue<time.Time>(this.Time).Zone()
	}

	public ZoneBounds(): any {
		return $.pointerValue<time.Time>(this.Time).ZoneBounds()
	}

	static __typeInfo = $.registerStructType(
		"jwt.NumericDate",
		() => new NumericDate(),
		() => [$.methodSignature("MarshalJSON", [], [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["err", "error"]], true), $.methodSignature("Add", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["time.Time"]), $.methodSignature("AddDate", [["years", /* @__PURE__ */ $.basicType("int")], ["months", /* @__PURE__ */ $.basicType("int")], ["days", /* @__PURE__ */ $.basicType("int")]], ["time.Time"]), $.methodSignature("After", [["u", "time.Time"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("AppendBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("AppendFormat", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["layout", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("AppendText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Before", [["u", "time.Time"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Clock", [], [["hour", /* @__PURE__ */ $.basicType("int")], ["min", /* @__PURE__ */ $.basicType("int")], ["sec", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("Compare", [["u", "time.Time"]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Date", [], [["year", /* @__PURE__ */ $.basicType("int")], ["month", /* @__PURE__ */ $.basicType("int", "time.Month")], ["day", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("Day", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Equal", [["u", "time.Time"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Format", [["layout", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("GobDecode", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("GobEncode", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Hour", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ISOWeek", [], [["year", /* @__PURE__ */ $.basicType("int")], ["week", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("In", [["loc", /* @__PURE__ */ $.pointerType("time.Location")]], ["time.Time"]), $.methodSignature("IsDST", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsZero", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Local", [], ["time.Time"]), $.methodSignature("Location", [], [/* @__PURE__ */ $.pointerType("time.Location")]), $.methodSignature("MarshalBinary", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Minute", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Month", [], [/* @__PURE__ */ $.basicType("int", "time.Month")]), $.methodSignature("Nanosecond", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Round", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["time.Time"]), $.methodSignature("Second", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Sub", [["u", "time.Time"]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Truncate", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["time.Time"]), $.methodSignature("UTC", [], ["time.Time"]), $.methodSignature("Unix", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("UnixMicro", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("UnixMilli", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("UnixNano", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("UnmarshalBinary", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("UnmarshalText", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("Weekday", [], [/* @__PURE__ */ $.basicType("int", "time.Weekday")]), $.methodSignature("Year", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("YearDay", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Zone", [], [["name", /* @__PURE__ */ $.basicType("string")], ["offset", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("ZoneBounds", [], [["start", "time.Time"], ["end", "time.Time"]])],
		NumericDate,
		() => [/* @__PURE__ */ $.structField("Time", "time.Time", [0], 0, true, { anonymous: true })]
	)
}

export let TimePrecision: time.Duration = 1000000000n

export function __goscript_set_TimePrecision(__goscriptValue: time.Duration): void {
	TimePrecision = __goscriptValue
}

export let MarshalSingleStringAsArray: boolean = true

export function __goscript_set_MarshalSingleStringAsArray(__goscriptValue: boolean): void {
	MarshalSingleStringAsArray = __goscriptValue
}

export function NewNumericDate(t: time.Time): NumericDate | $.VarRef<NumericDate> | null {
	return (() => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(t)).Truncate(TimePrecision))); return new NumericDate({Time: __goscriptLiteralField0}) })()
}

export function newNumericDateFromSeconds(f: number): NumericDate | $.VarRef<NumericDate> | null {
	let [round, frac] = math.Modf(f)
	return NewNumericDate($.markAsStructValue($.cloneStructValue(time.Unix($.int64(round), $.int64(frac * 1e9)))))
}

export async function ClaimStrings_UnmarshalJSON(s: $.VarRef<ClaimStrings> | null, data: $.Slice<number>): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	let value: $.VarRef<any> = $.varRef(null! as any)

	{
		err = await json.Unmarshal(data, $.interfaceValue(value, "*interface{}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })))
		if (err != null) {
			return err
		}
	}

	let aud: $.Slice<string> = null! as $.Slice<string>

	{
		const __goscriptTypeSwitchValue = value.value
		switch (true) {
			case $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).ok:
				{
					let v: string = $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).value
					aud = $.appendOne(aud, v)
				}
				break
			case $.typeAssert<$.Slice<string>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))).ok:
				{
					let v: $.Slice<string> = $.typeAssert<$.Slice<string>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))).value
					aud = (v as ClaimStrings)
				}
				break
			case $.typeAssert<$.Slice<any>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })).ok:
				{
					let v: $.Slice<any> = $.typeAssert<$.Slice<any>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })).value
					for (let __goscriptRangeTarget0 = v, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
						let vv = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as any)
						let [vs, ok] = $.typeAssertTuple<string>(vv, /* @__PURE__ */ $.basicType("string"))
						if (!ok) {
							return __goscript_errors.ErrInvalidType
						}
						aud = $.appendOne(aud, vs)
					}
				}
				break
			case __goscriptTypeSwitchValue == null:
				{
					let v: any = __goscriptTypeSwitchValue
					return null
				}
				break
			default:
				{
					let v: any = __goscriptTypeSwitchValue
					return __goscript_errors.ErrInvalidType
				}
				break
		}
	}

	s!.value = (aud as ClaimStrings)

	return err
}

export async function ClaimStrings_MarshalJSON(s: ClaimStrings): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let b: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	// This handles a special case in the JWT RFC. If the string array, e.g.
	// used by the "aud" field, only contains one element, it MAY be serialized
	// as a single string. This may or may not be desired based on the ecosystem
	// of other JWT library used, so we make it configurable by the variable
	// MarshalSingleStringAsArray.
	if (($.sliceLen((s as ClaimStrings)) == 1) && !MarshalSingleStringAsArray) {
		return json.Marshal($.arrayIndex(s!, 0))
	}

	return json.Marshal($.interfaceValue(s, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Float64: (receiver: any, ...args: any[]) => (json.Number_Float64 as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Int64: (receiver: any, ...args: any[]) => (json.Number_Int64 as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalJSONTo: (receiver: any, ...args: any[]) => (json.Number_MarshalJSONTo as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (json.Number_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSONFrom: (receiver: any, ...args: any[]) => (json.Number_UnmarshalJSONFrom as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string", "json.Number")))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Float64", [], [/* @__PURE__ */ $.basicType("float64"), "error"]), $.methodSignature("Int64", [], [/* @__PURE__ */ $.basicType("int64"), "error"]), $.methodSignature("MarshalJSONTo", [["enc", /* @__PURE__ */ $.pointerType("jsontext.Encoder")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalJSONFrom", [["dec", /* @__PURE__ */ $.pointerType("jsontext.Decoder")]], ["error"])])
}
