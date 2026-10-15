// Generated file based on timestamp.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_timestamp_gogo from "./timestamp_gogo.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/time/index.js"
import "./timestamp_gogo.gs.ts"

export const minValidSeconds: number = -62135596800

export const maxValidSeconds: number = 253402300800

export function validateTimestamp(ts: __goscript_timestamp_gogo.timestamp | $.VarRef<__goscript_timestamp_gogo.timestamp> | null): $.GoError {
	const ts$: __goscript_timestamp_gogo.timestamp = ts == null ? $.pointerTarget<__goscript_timestamp_gogo.timestamp>(ts) : (ts as any).__isVarRef === true ? (ts as any).value : (ts as any).__goValue === undefined ? (ts as any) : $.pointerTarget<__goscript_timestamp_gogo.timestamp>(ts)
	if (ts == null) {
		return errors.New("timestamp: nil Timestamp")
	}
	if ((ts$ as __goscript_timestamp_gogo.timestamp).Seconds < -62135596800n) {
		return fmt.Errorf("timestamp: %#v before 0001-01-01", $.interfaceValue(ts, "*proto.timestamp", /* @__PURE__ */ $.pointerType("proto.timestamp")))
	}
	if ((ts$ as __goscript_timestamp_gogo.timestamp).Seconds >= 253402300800n) {
		return fmt.Errorf("timestamp: %#v after 10000-01-01", $.interfaceValue(ts, "*proto.timestamp", /* @__PURE__ */ $.pointerType("proto.timestamp")))
	}
	if (((ts$ as __goscript_timestamp_gogo.timestamp).Nanos < 0) || ((ts$ as __goscript_timestamp_gogo.timestamp).Nanos >= 1000000000)) {
		return fmt.Errorf("timestamp: %#v: nanos not in range [0, 1e9)", $.interfaceValue(ts, "*proto.timestamp", /* @__PURE__ */ $.pointerType("proto.timestamp")))
	}
	return null
}

export function timestampFromProto(ts: __goscript_timestamp_gogo.timestamp | $.VarRef<__goscript_timestamp_gogo.timestamp> | null): [time.Time, $.GoError] {
	const ts$: __goscript_timestamp_gogo.timestamp = ts == null ? $.pointerTarget<__goscript_timestamp_gogo.timestamp>(ts) : (ts as any).__isVarRef === true ? (ts as any).value : (ts as any).__goValue === undefined ? (ts as any) : $.pointerTarget<__goscript_timestamp_gogo.timestamp>(ts)
	// Don't return the zero value on error, because corresponds to a valid
	// timestamp. Instead return whatever time.Unix gives us.
	let t: time.Time = $.markAsStructValue(new time.Time())
	if (ts == null) {
		t = $.assignStruct(t, $.markAsStructValue($.cloneStructValue(time.Unix(0n, 0n))).UTC())
	} else {
		t = $.assignStruct(t, $.markAsStructValue($.cloneStructValue(time.Unix((ts$ as __goscript_timestamp_gogo.timestamp).Seconds, $.int64((ts$ as __goscript_timestamp_gogo.timestamp).Nanos)))).UTC())
	}
	return [$.markAsStructValue($.cloneStructValue(t)), validateTimestamp(ts)]
}

export function timestampProto(t: time.Time): [__goscript_timestamp_gogo.timestamp | $.VarRef<__goscript_timestamp_gogo.timestamp> | null, $.GoError] {
	let seconds = $.markAsStructValue($.cloneStructValue(t)).Unix()
	let nanos = $.int($.markAsStructValue($.cloneStructValue(t)).Sub($.markAsStructValue($.cloneStructValue(time.Unix(seconds, 0n)))), 32)
	let ts: __goscript_timestamp_gogo.timestamp | $.VarRef<__goscript_timestamp_gogo.timestamp> | null = new __goscript_timestamp_gogo.timestamp({Seconds: seconds, Nanos: nanos})
	{
		let err = validateTimestamp(ts)
		if (err != null) {
			return [null, err]
		}
	}
	return [ts, null]
}
