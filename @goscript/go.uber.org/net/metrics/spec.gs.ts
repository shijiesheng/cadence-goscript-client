// Generated file based on spec.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_tag from "./tag.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/time/index.js"
import "./tag.gs.ts"

$.registerTypePackagePath("go.uber.org/net/metrics", ["metrics.Spec", "metrics.HistogramSpec"])

export class Spec {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Help(): string {
		return this._fields.Help
	}

	public set Help(value: string) {
		this._fields.Help = value
	}

	public get ConstTags(): __goscript_tag.Tags {
		return this._fields.ConstTags
	}

	public set ConstTags(value: __goscript_tag.Tags) {
		this._fields.ConstTags = value
	}

	public get VarTags(): $.Slice<string> {
		return this._fields.VarTags
	}

	public set VarTags(value: $.Slice<string>) {
		this._fields.VarTags = value
	}

	public get DisablePush(): boolean {
		return this._fields.DisablePush
	}

	public set DisablePush(value: boolean) {
		this._fields.DisablePush = value
	}

	public _fields: {
		Name: string
		Help: string
		ConstTags: __goscript_tag.Tags
		VarTags: $.Slice<string>
		DisablePush: boolean
	}

	constructor(init?: Partial<{Name?: string, Help?: string, ConstTags?: __goscript_tag.Tags, VarTags?: $.Slice<string>, DisablePush?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Help: init?.Help ?? ("" as string),
			ConstTags: init?.ConstTags ?? (null! as __goscript_tag.Tags),
			VarTags: init?.VarTags ?? (null! as $.Slice<string>),
			DisablePush: init?.DisablePush ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Spec {
		return new Spec(this, true)
	}

	public __goscriptAssign(source: Spec): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Help = values.Help
		target.ConstTags = values.ConstTags
		target.VarTags = values.VarTags
		target.DisablePush = values.DisablePush
	}

	public validate(): $.GoError {
		const s = this;
		if ($.stringLen(s.Name) == 0) {
			return errors.New("all metrics must have a name")
		}
		if ($.stringEqual(s.Help, "")) {
			return errors.New("metric help must not be empty")
		}
		return null
	}

	public validateScalar(): $.GoError {
		const s = this;
		{
			let err = s.validate()
			if (err != null) {
				return err
			}
		}
		if ($.sliceLen(s.VarTags) > 0) {
			return errors.New("only vectors may have variable tags")
		}
		return null
	}

	public validateVector(): $.GoError {
		const s = this;
		{
			let err = s.validate()
			if (err != null) {
				return err
			}
		}
		if ($.sliceLen(s.VarTags) == 0) {
			return errors.New("vectors must have variable tags")
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"metrics.Spec",
		() => new Spec(),
		() => [$.methodSignature("validate", [], ["error"]), $.methodSignature("validateScalar", [], ["error"]), $.methodSignature("validateVector", [], ["error"])],
		Spec,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Help", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("ConstTags", "metrics.Tags", [2], 32, true), /* @__PURE__ */ $.structField("VarTags", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 40, true), /* @__PURE__ */ $.structField("DisablePush", /* @__PURE__ */ $.basicType("bool"), [4], 64, true)]
	)
}

export class HistogramSpec {
	public get Spec(): Spec {
		return this._fields.Spec
	}

	public set Spec(value: Spec) {
		this._fields.Spec = value
	}

	// Durations are exposed as simple numbers, not strings or rich objects.
	// Unit specifies the desired granularity for histogram observations. For
	// example, an observation of time.Second with a unit of time.Millisecond is
	// exposed as 1000. Typically, the unit should also be part of the metric
	// name.
	public get Unit(): time.Duration {
		return this._fields.Unit
	}

	public set Unit(value: time.Duration) {
		this._fields.Unit = value
	}

	// Upper bounds (inclusive) for the histogram buckets in terms of the unit.
	// A catch-all bucket for large observations is automatically created, if
	// necessary.
	public get Buckets(): $.Slice<bigint> {
		return this._fields.Buckets
	}

	public set Buckets(value: $.Slice<bigint>) {
		this._fields.Buckets = value
	}

	public _fields: {
		Spec: Spec
		Unit: time.Duration
		Buckets: $.Slice<bigint>
	}

	constructor(init?: Partial<{Spec?: Spec, Unit?: time.Duration, Buckets?: $.Slice<bigint>}>, __goscriptValue?: boolean) {
		this._fields = {
			Spec: init?.Spec ? init.Spec.clone() : new Spec(undefined, true),
			Unit: init?.Unit ?? (0n as time.Duration),
			Buckets: init?.Buckets ?? (null! as $.Slice<bigint>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HistogramSpec {
		return new HistogramSpec(this, true)
	}

	public __goscriptAssign(source: HistogramSpec): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Spec, values.Spec)
		target.Unit = values.Unit
		target.Buckets = values.Buckets
	}

	public validateHistogram(): $.GoError {
		const hs = this;
		if (hs.Unit < 1n) {
			return fmt.Errorf("duration unit must be positive, got %v", $.namedValueInterfaceValue<any>(hs.Unit, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
		}
		if ($.sliceLen(hs.Buckets) == 0) {
			return fmt.Errorf("must specify some buckets")
		}
		let prev = -9223372036854775808n
		for (let __goscriptRangeTarget0 = hs.Buckets, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let upper = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as bigint)
			if (upper <= prev) {
				return fmt.Errorf("bucket upper bounds must be sorted in increasing order")
			}
			prev = upper
		}
		return null
	}

	public validateScalar(): $.GoError {
		const hs = this;
		{
			let err = hs.validateHistogram()
			if (err != null) {
				return err
			}
		}
		return hs.Spec.validateScalar()
	}

	public validateVector(): $.GoError {
		const hs = this;
		{
			let err = hs.validateHistogram()
			if (err != null) {
				return err
			}
		}
		return hs.Spec.validateVector()
	}

	public validate(): any {
		return $.pointerValue<Spec>(this.Spec).validate()
	}

	static __typeInfo = $.registerStructType(
		"metrics.HistogramSpec",
		() => new HistogramSpec(),
		() => [$.methodSignature("validateHistogram", [], ["error"]), $.methodSignature("validateScalar", [], ["error"]), $.methodSignature("validateVector", [], ["error"]), $.methodSignature("validate", [], ["error"])],
		HistogramSpec,
		() => [/* @__PURE__ */ $.structField("Spec", "metrics.Spec", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Unit", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 72, true), /* @__PURE__ */ $.structField("Buckets", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")), [2], 80, true)]
	)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}
