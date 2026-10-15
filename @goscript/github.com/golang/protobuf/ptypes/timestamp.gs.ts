// Generated file based on timestamp.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as time from "@goscript/time/index.js"

import * as timestamppb from "@goscript/github.com/golang/protobuf/ptypes/timestamp/index.js"

import * as timestamppb2 from "@goscript/google.golang.org/protobuf/types/known/timestamppb/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/golang/protobuf/ptypes/timestamp/index.js"
import "@goscript/google.golang.org/protobuf/types/known/timestamppb/index.js"

export const minValidSeconds: number = -62135596800

export const maxValidSeconds: number = 253402300800

export function Timestamp(ts: timestamppb2.Timestamp | $.VarRef<timestamppb2.Timestamp> | null): [time.Time, $.GoError] {
	const ts$: timestamppb.Timestamp = ts == null ? $.pointerTarget<timestamppb.Timestamp>(ts) : (ts as any).__isVarRef === true ? (ts as any).value : (ts as any).__goValue === undefined ? (ts as any) : $.pointerTarget<timestamppb.Timestamp>(ts)
	// Don't return the zero value on error, because corresponds to a valid
	// timestamp. Instead return whatever time.Unix gives us.
	let t: time.Time = $.markAsStructValue(new time.Time())
	if (ts == null) {
		t = $.assignStruct(t, $.markAsStructValue($.cloneStructValue(time.Unix(0n, 0n))).UTC())
	} else {
		t = $.assignStruct(t, $.markAsStructValue($.cloneStructValue(time.Unix((ts$ as timestamppb.Timestamp).Seconds, $.int64((ts$ as timestamppb.Timestamp).Nanos)))).UTC())
	}
	return [$.markAsStructValue($.cloneStructValue(t)), validateTimestamp(ts)]
}

export function TimestampNow(): timestamppb2.Timestamp | $.VarRef<timestamppb2.Timestamp> | null {
	let __goscriptTuple0: any = TimestampProto($.markAsStructValue($.cloneStructValue(time.Now())))
	let ts: timestamppb2.Timestamp | $.VarRef<timestamppb2.Timestamp> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		$.panic("ptypes: time.Now() out of Timestamp range")
	}
	return ts
}

export function TimestampProto(t: time.Time): [timestamppb2.Timestamp | $.VarRef<timestamppb2.Timestamp> | null, $.GoError] {
	let ts: timestamppb2.Timestamp | $.VarRef<timestamppb2.Timestamp> | null = (() => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue(t)).Unix(); const __goscriptLiteralField1 = $.int($.markAsStructValue($.cloneStructValue(t)).Nanosecond(), 32); return new timestamppb2.Timestamp({Seconds: __goscriptLiteralField0, Nanos: __goscriptLiteralField1}) })()
	{
		let err = validateTimestamp(ts)
		if (err != null) {
			return [null, err]
		}
	}
	return [ts, null]
}

export async function TimestampString(ts: timestamppb2.Timestamp | $.VarRef<timestamppb2.Timestamp> | null): globalThis.Promise<string> {
	let [t, err] = Timestamp(ts)
	if (err != null) {
		return fmt.Sprintf("(%v)", (err as any))
	}
	return $.markAsStructValue($.cloneStructValue(t)).Format(time.RFC3339Nano)
}

export function validateTimestamp(ts: timestamppb2.Timestamp | $.VarRef<timestamppb2.Timestamp> | null): $.GoError {
	const ts$: timestamppb.Timestamp = ts == null ? $.pointerTarget<timestamppb.Timestamp>(ts) : (ts as any).__isVarRef === true ? (ts as any).value : (ts as any).__goValue === undefined ? (ts as any) : $.pointerTarget<timestamppb.Timestamp>(ts)
	if (ts == null) {
		return errors.New("timestamp: nil Timestamp")
	}
	if ((ts$ as timestamppb.Timestamp).Seconds < -62135596800n) {
		return fmt.Errorf("timestamp: %v before 0001-01-01", $.interfaceValue(ts, "*timestamppb.Timestamp", /* @__PURE__ */ $.pointerType("timestamppb.Timestamp")))
	}
	if ((ts$ as timestamppb.Timestamp).Seconds >= 253402300800n) {
		return fmt.Errorf("timestamp: %v after 10000-01-01", $.interfaceValue(ts, "*timestamppb.Timestamp", /* @__PURE__ */ $.pointerType("timestamppb.Timestamp")))
	}
	if (((ts$ as timestamppb.Timestamp).Nanos < 0) || ((ts$ as timestamppb.Timestamp).Nanos >= 1000000000)) {
		return fmt.Errorf("timestamp: %v: nanos not in range [0, 1e9)", $.interfaceValue(ts, "*timestamppb.Timestamp", /* @__PURE__ */ $.pointerType("timestamppb.Timestamp")))
	}
	return null
}
