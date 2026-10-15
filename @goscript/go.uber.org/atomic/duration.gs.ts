// Generated file based on duration.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_duration_ext from "./duration_ext.gs.ts"

import * as __goscript_int64 from "./int64.gs.ts"

import * as __goscript_nocmp from "./nocmp.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/time/index.js"
import "./duration_ext.gs.ts"
import "./int64.gs.ts"
import "./nocmp.gs.ts"

$.registerTypePackagePath("go.uber.org/atomic", ["atomic.Duration"])

export class Duration {
	public get _blank0(): __goscript_nocmp.nocmp {
		return this._fields._blank0
	}

	public set _blank0(value: __goscript_nocmp.nocmp) {
		this._fields._blank0 = value
	}

	public get v(): __goscript_int64.Int64 {
		return this._fields.v
	}

	public set v(value: __goscript_int64.Int64) {
		this._fields.v = value
	}

	public _fields: {
		_blank0: __goscript_nocmp.nocmp
		v: __goscript_int64.Int64
	}

	constructor(init?: Partial<{_blank0?: __goscript_nocmp.nocmp, v?: __goscript_int64.Int64}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "atomic.nocmp") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			v: init?.v ? init.v.clone() : new __goscript_int64.Int64(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Duration {
		return new Duration(this, true)
	}

	public __goscriptAssign(source: Duration): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "atomic.nocmp")
		$.assignStruct(target.v, values.v)
	}

	public Add(delta: time.Duration): time.Duration {
		const d: Duration | $.VarRef<Duration> | null = this;
		return $.int64($.pointerValue<Duration>(d).v.Add($.int64(delta)))
	}

	public CAS(old: time.Duration, _new: time.Duration): boolean {
		const x: Duration | $.VarRef<Duration> | null = this;
		let swapped: boolean = false
		return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Duration).CompareAndSwap(old, _new) : Duration.prototype.CompareAndSwap.call(x, old, _new))
	}

	public CompareAndSwap(old: time.Duration, _new: time.Duration): boolean {
		const x: Duration | $.VarRef<Duration> | null = this;
		let swapped: boolean = false
		return $.pointerValue<Duration>(x).v.CompareAndSwap($.int64(old), $.int64(_new))
	}

	public Load(): time.Duration {
		const x: Duration | $.VarRef<Duration> | null = this;
		return $.int64($.pointerValue<Duration>(x).v.Load())
	}

	public async MarshalJSON(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const x: Duration | $.VarRef<Duration> | null = this;
		return json.Marshal($.namedValueInterfaceValue<any>((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Duration).Load() : Duration.prototype.Load.call(x)), "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}

	public Store(val: time.Duration): void {
		const x: Duration | $.VarRef<Duration> | null = this;
		$.pointerValue<Duration>(x).v.Store($.int64(val))
	}

	public String(): string {
		const d: Duration | $.VarRef<Duration> | null = this;
		return time.Duration_String((d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Duration).Load() : Duration.prototype.Load.call(d)))
	}

	public Sub(delta: time.Duration): time.Duration {
		const d: Duration | $.VarRef<Duration> | null = this;
		return $.int64($.pointerValue<Duration>(d).v.Sub($.int64(delta)))
	}

	public Swap(val: time.Duration): time.Duration {
		const x: Duration | $.VarRef<Duration> | null = this;
		let old: time.Duration = 0n
		return $.int64($.pointerValue<Duration>(x).v.Swap($.int64(val)))
	}

	public async UnmarshalJSON(b: $.Slice<number>): globalThis.Promise<$.GoError> {
		const x: Duration | $.VarRef<Duration> | null = this;
		let v: $.VarRef<time.Duration> = $.varRef(0n)
		{
			let err = await json.Unmarshal(b, $.namedValueInterfaceValue<any>(v, "*time.Duration", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()))
			if (err != null) {
				return err
			}
		}
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Duration).Store(v.value) : Duration.prototype.Store.call(x, v.value))
		return null
	}

	static __typeInfo = $.registerStructType(
		"atomic.Duration",
		() => new Duration(),
		() => [$.methodSignature("Add", [["delta", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("CAS", [["old", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["new", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("CompareAndSwap", [["old", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["new", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Load", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Store", [["val", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Sub", [["delta", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("Swap", [["val", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [["old", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], true), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		Duration,
		() => [/* @__PURE__ */ $.structField("_", "atomic.nocmp", [0], 0, false, { key: "_blank0", pkgPath: "go.uber.org/atomic" }), /* @__PURE__ */ $.structField("v", "atomic.Int64", [1], 0, false, { pkgPath: "go.uber.org/atomic" })]
	)
}

export let _zeroDuration: time.Duration = 0n

export function __goscript_set__zeroDuration(__goscriptValue: time.Duration): void {
	_zeroDuration = __goscriptValue
}

export function NewDuration(val: time.Duration): Duration | $.VarRef<Duration> | null {
	let x: Duration | $.VarRef<Duration> | null = new Duration()
	if (val != _zeroDuration) {
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Duration).Store(val) : Duration.prototype.Store.call(x, val))
	}
	return x
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

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration")))
}
