// Generated file based on helpers.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as time from "@goscript/time/index.js"

import * as gogo from "@goscript/github.com/gogo/protobuf/types/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/math/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/gogo/protobuf/types/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"

$.registerTypePackagePath("go.uber.org/cadence/internal/compatibility/thrift", ["thrift.fieldSet"])

export type fieldSet = globalThis.Map<string, {}> | null

$.registerNamedType("thrift.fieldSet", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Struct, methods: [], fields: [] }));

$.registerNamedValueType(
	"thrift.fieldSet",
	{isSet: (receiver: any, ...args: any[]) => (fieldSet_isSet as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("isSet", [["field", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*thrift.fieldSet",
	{isSet: (receiver: any, ...args: any[]) => (fieldSet_isSet as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("isSet", [["field", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")])]
);

export function boolPtr(__goscriptParam0: boolean): $.VarRef<boolean> | null {
	let b: $.VarRef<boolean> = $.varRef(__goscriptParam0)
	return b
}

export function toDoubleValue(v: gogo.DoubleValue | $.VarRef<gogo.DoubleValue> | null): $.VarRef<number> | null {
	if (v == null) {
		return null
	}
	return $.fieldRef($.pointerValue<gogo.DoubleValue>(v)._fields, "Value")
}

export function toInt64Value(v: gogo.Int64Value | $.VarRef<gogo.Int64Value> | null): $.VarRef<bigint> | null {
	if (v == null) {
		return null
	}
	return common.Int64Ptr($.pointerValue<gogo.Int64Value>(v).Value)
}

export function timeToUnixNano(t: gogo.Timestamp | $.VarRef<gogo.Timestamp> | null): $.VarRef<bigint> | null {
	if (t == null) {
		return null
	}
	let [timestamp, err] = gogo.TimestampFromProto(t)
	if (err != null) {
		$.panic((err as any))
	}
	return common.Int64Ptr($.markAsStructValue($.cloneStructValue(timestamp)).UnixNano())
}

export function durationToDays(d: gogo.Duration | $.VarRef<gogo.Duration> | null): $.VarRef<number> | null {
	if (d == null) {
		return null
	}
	let [duration, err] = gogo.DurationFromProto(d)
	if (err != null) {
		$.panic((err as any))
	}
	return common.Int32Ptr($.int($.int64Div(duration, 86400000000000n), 32))
}

export function durationToSeconds(d: gogo.Duration | $.VarRef<gogo.Duration> | null): $.VarRef<number> | null {
	if (d == null) {
		return null
	}
	let [duration, err] = gogo.DurationFromProto(d)
	if (err != null) {
		$.panic((err as any))
	}
	return common.Int32Ptr($.int($.int64Div(duration, 1000000000n), 32))
}

export function durationToSecondsCeil(d: gogo.Duration | $.VarRef<gogo.Duration> | null): $.VarRef<number> | null {
	if (d == null) {
		return null
	}
	let [duration, err] = gogo.DurationFromProto(d)
	if (err != null) {
		$.panic((err as any))
	}
	return common.Int32Ptr($.int(math.Ceil(time.Duration_Seconds(duration)), 32))
}

export function int32To64(v: $.VarRef<number> | null): $.VarRef<bigint> | null {
	if (v == null) {
		return null
	}
	return common.Int64Ptr($.int64($.pointerValue<number>(v)))
}

export function newFieldSet(mask: gogo.FieldMask | $.VarRef<gogo.FieldMask> | null): fieldSet {
	if (mask == null) {
		return null
	}
	let fs: globalThis.Map<string, {}> | null = $.makeMap<string, {}>([])
	for (let __goscriptRangeTarget0 = $.pointerValue<gogo.FieldMask>(mask).Paths, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let field = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		$.mapSet(fs, field, {})
	}
	return fs
}

export function fieldSet_isSet(fs: fieldSet, field: string): boolean {
	if (fs == null) {
		return true
	}
	let [, ok] = $.mapGet<string, {}, {}>(fs, field, {})
	return ok
}
