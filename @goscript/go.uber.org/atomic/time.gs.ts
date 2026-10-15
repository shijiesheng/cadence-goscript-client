// Generated file based on time.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_nocmp from "./nocmp.gs.ts"

import * as __goscript_time_ext from "./time_ext.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/time/index.js"
import "@goscript/sync/atomic/index.js"
import "./nocmp.gs.ts"
import "./time_ext.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("go.uber.org/atomic", ["atomic.Time"])

export class Time {
	public get _blank0(): __goscript_nocmp.nocmp {
		return this._fields._blank0
	}

	public set _blank0(value: __goscript_nocmp.nocmp) {
		this._fields._blank0 = value
	}

	public get v(): __goscript_value.Value {
		return this._fields.v
	}

	public set v(value: __goscript_value.Value) {
		this._fields.v = value
	}

	public _fields: {
		_blank0: __goscript_nocmp.nocmp
		v: __goscript_value.Value
	}

	constructor(init?: Partial<{_blank0?: __goscript_nocmp.nocmp, v?: __goscript_value.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "atomic.nocmp") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			v: init?.v ? init.v.clone() : new __goscript_value.Value(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Time {
		return new Time(this, true)
	}

	public __goscriptAssign(source: Time): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "atomic.nocmp")
		$.assignStruct(target.v, values.v)
	}

	public Load(): time.Time {
		const x: Time | $.VarRef<Time> | null = this;
		return __goscript_time_ext.unpackTime($.pointerValue<Time>(x).v.Value.Load())
	}

	public Store(val: time.Time): void {
		const x: Time | $.VarRef<Time> | null = this;
		$.pointerValue<Time>(x).v.Value.Store(__goscript_time_ext.packTime(val))
	}

	static __typeInfo = $.registerStructType(
		"atomic.Time",
		() => new Time(),
		() => [$.methodSignature("Load", [], ["time.Time"], true), $.methodSignature("Store", [["val", "time.Time"]], [], true)],
		Time,
		() => [/* @__PURE__ */ $.structField("_", "atomic.nocmp", [0], 0, false, { key: "_blank0", pkgPath: "go.uber.org/atomic" }), /* @__PURE__ */ $.structField("v", "atomic.Value", [1], 0, false, { pkgPath: "go.uber.org/atomic" })]
	)
}

export let _zeroTime: time.Time = $.markAsStructValue(new time.Time())

export function __goscript_set__zeroTime(__goscriptValue: time.Time): void {
	$.assignStruct(_zeroTime, __goscriptValue)
}

export function NewTime(val: time.Time): Time | $.VarRef<Time> | null {
	let x: Time | $.VarRef<Time> | null = new Time()
	if (!$.structEqual(val, _zeroTime)) {
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Time).Store(val) : Time.prototype.Store.call(x, val))
	}
	return x
}
