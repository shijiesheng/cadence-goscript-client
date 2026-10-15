// Generated file based on helpers.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time2 from "@goscript/time/index.js"

import * as gogo from "@goscript/github.com/gogo/protobuf/types/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/gogo/protobuf/types/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"

export function fromDoubleValue(v: $.VarRef<number> | null): gogo.DoubleValue | $.VarRef<gogo.DoubleValue> | null {
	if (v == null) {
		return null
	}
	return new gogo.DoubleValue({Value: $.pointerValue<number>(v)})
}

export function fromInt64Value(v: $.VarRef<bigint> | null): gogo.Int64Value | $.VarRef<gogo.Int64Value> | null {
	if (v == null) {
		return null
	}
	return new gogo.Int64Value({Value: $.pointerValue<bigint>(v)})
}

export function unixNanoToTime(t: $.VarRef<bigint> | null): gogo.Timestamp | $.VarRef<gogo.Timestamp> | null {
	if (t == null) {
		return null
	}
	let __goscriptTuple0: any = gogo.TimestampProto($.markAsStructValue($.cloneStructValue(time2.Unix(0n, $.pointerValue<bigint>(t)))))
	let __goscriptShadow0: gogo.Timestamp | $.VarRef<gogo.Timestamp> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		$.panic((err as any))
	}
	return __goscriptShadow0
}

export function daysToDuration(d: $.VarRef<number> | null): gogo.Duration | $.VarRef<gogo.Duration> | null {
	if (d == null) {
		return null
	}
	return gogo.DurationProto($.int64Mul($.int64($.pointerValue<number>(d)), 86400000000000n))
}

export function secondsToDuration(d: $.VarRef<number> | null): gogo.Duration | $.VarRef<gogo.Duration> | null {
	if (d == null) {
		return null
	}
	return gogo.DurationProto($.int64Mul($.int64($.pointerValue<number>(d)), 1000000000n))
}

export function int64To32(v: $.VarRef<bigint> | null): $.VarRef<number> | null {
	if (v == null) {
		return null
	}
	return common.Int32Ptr($.int($.pointerValue<bigint>(v), 32))
}

export function newFieldMask(fields: $.Slice<string>): gogo.FieldMask | $.VarRef<gogo.FieldMask> | null {
	return new gogo.FieldMask({Paths: fields})
}
