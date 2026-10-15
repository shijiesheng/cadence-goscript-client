// Generated file based on duration.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_duration_gogo from "./duration_gogo.gs.ts"

import * as __goscript_duration_pb from "./duration.pb.gs.ts"

import * as __goscript_protosize from "./protosize.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/time/index.js"
import "./duration_gogo.gs.ts"
import "./duration.pb.gs.ts"
import "./protosize.gs.ts"

export const maxSeconds: bigint = 315576000000n

export const minSeconds: bigint = -315576000000n

export function validateDuration(d: __goscript_duration_pb.Duration | $.VarRef<__goscript_duration_pb.Duration> | null): $.GoError {
	const d$: __goscript_duration_pb.Duration = d == null ? $.pointerTarget<__goscript_duration_pb.Duration>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<__goscript_duration_pb.Duration>(d)
	if (d == null) {
		return errors.New("duration: nil Duration")
	}
	if (((d$ as __goscript_duration_pb.Duration).Seconds < -315576000000n) || ((d$ as __goscript_duration_pb.Duration).Seconds > 315576000000n)) {
		return fmt.Errorf("duration: %#v: seconds out of range", $.interfaceValue(d, "*types.Duration", /* @__PURE__ */ $.pointerType("types.Duration")))
	}
	if (((d$ as __goscript_duration_pb.Duration).Nanos <= -1000000000) || ((d$ as __goscript_duration_pb.Duration).Nanos >= 1000000000)) {
		return fmt.Errorf("duration: %#v: nanos out of range", $.interfaceValue(d, "*types.Duration", /* @__PURE__ */ $.pointerType("types.Duration")))
	}
	// Seconds and Nanos must have the same sign, unless d.Nanos is zero.
	if ((((d$ as __goscript_duration_pb.Duration).Seconds < 0n) && ((d$ as __goscript_duration_pb.Duration).Nanos > 0)) || (((d$ as __goscript_duration_pb.Duration).Seconds > 0n) && ((d$ as __goscript_duration_pb.Duration).Nanos < 0))) {
		return fmt.Errorf("duration: %#v: seconds and nanos have different signs", $.interfaceValue(d, "*types.Duration", /* @__PURE__ */ $.pointerType("types.Duration")))
	}
	return null
}

export function DurationFromProto(p: __goscript_duration_pb.Duration | $.VarRef<__goscript_duration_pb.Duration> | null): [time.Duration, $.GoError] {
	const p$: __goscript_duration_pb.Duration = p == null ? $.pointerTarget<__goscript_duration_pb.Duration>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<__goscript_duration_pb.Duration>(p)
	{
		let err = validateDuration(p)
		if (err != null) {
			return [0n, err]
		}
	}
	let d = $.int64Mul($.int64((p$ as __goscript_duration_pb.Duration).Seconds), 1000000000n)
	if ($.int64($.int64Div(d, 1000000000n)) != (p$ as __goscript_duration_pb.Duration).Seconds) {
		return [0n, fmt.Errorf("duration: %#v is out of range for time.Duration", $.interfaceValue(p, "*types.Duration", /* @__PURE__ */ $.pointerType("types.Duration")))]
	}
	if ((p$ as __goscript_duration_pb.Duration).Nanos != 0) {
		d = $.int64Add(d, $.int64Mul($.int64((p$ as __goscript_duration_pb.Duration).Nanos), 1n))
		if ((d < 0n) != ((p$ as __goscript_duration_pb.Duration).Nanos < 0)) {
			return [0n, fmt.Errorf("duration: %#v is out of range for time.Duration", $.interfaceValue(p, "*types.Duration", /* @__PURE__ */ $.pointerType("types.Duration")))]
		}
	}
	return [d, null]
}

export function DurationProto(d: time.Duration): __goscript_duration_pb.Duration | $.VarRef<__goscript_duration_pb.Duration> | null {
	let nanos = time.Duration_Nanoseconds(d)
	let secs = $.int64Div(nanos, 1000000000n)
	nanos = $.int64Sub(nanos, $.int64Mul(secs, 1000000000n))
	return new __goscript_duration_pb.Duration({Seconds: secs, Nanos: $.int(nanos, 32)})
}
