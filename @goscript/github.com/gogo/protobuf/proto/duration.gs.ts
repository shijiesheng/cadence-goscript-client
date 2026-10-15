// Generated file based on duration.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_duration_gogo from "./duration_gogo.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/time/index.js"
import "./duration_gogo.gs.ts"

export const maxSeconds: bigint = 315576000000n

export const minSeconds: bigint = -315576000000n

export function validateDuration(d: __goscript_duration_gogo.duration | $.VarRef<__goscript_duration_gogo.duration> | null): $.GoError {
	const d$: __goscript_duration_gogo.duration = d == null ? $.pointerTarget<__goscript_duration_gogo.duration>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<__goscript_duration_gogo.duration>(d)
	if (d == null) {
		return errors.New("duration: nil Duration")
	}
	if (((d$ as __goscript_duration_gogo.duration).Seconds < -315576000000n) || ((d$ as __goscript_duration_gogo.duration).Seconds > 315576000000n)) {
		return fmt.Errorf("duration: %#v: seconds out of range", $.interfaceValue(d, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration")))
	}
	if (((d$ as __goscript_duration_gogo.duration).Nanos <= -1000000000) || ((d$ as __goscript_duration_gogo.duration).Nanos >= 1000000000)) {
		return fmt.Errorf("duration: %#v: nanos out of range", $.interfaceValue(d, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration")))
	}
	// Seconds and Nanos must have the same sign, unless d.Nanos is zero.
	if ((((d$ as __goscript_duration_gogo.duration).Seconds < 0n) && ((d$ as __goscript_duration_gogo.duration).Nanos > 0)) || (((d$ as __goscript_duration_gogo.duration).Seconds > 0n) && ((d$ as __goscript_duration_gogo.duration).Nanos < 0))) {
		return fmt.Errorf("duration: %#v: seconds and nanos have different signs", $.interfaceValue(d, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration")))
	}
	return null
}

export function durationFromProto(p: __goscript_duration_gogo.duration | $.VarRef<__goscript_duration_gogo.duration> | null): [time.Duration, $.GoError] {
	const p$: __goscript_duration_gogo.duration = p == null ? $.pointerTarget<__goscript_duration_gogo.duration>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<__goscript_duration_gogo.duration>(p)
	{
		let err = validateDuration(p)
		if (err != null) {
			return [0n, err]
		}
	}
	let d = $.int64Mul($.int64((p$ as __goscript_duration_gogo.duration).Seconds), 1000000000n)
	if ($.int64($.int64Div(d, 1000000000n)) != (p$ as __goscript_duration_gogo.duration).Seconds) {
		return [0n, fmt.Errorf("duration: %#v is out of range for time.Duration", $.interfaceValue(p, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration")))]
	}
	if ((p$ as __goscript_duration_gogo.duration).Nanos != 0) {
		d = $.int64Add(d, $.int64((p$ as __goscript_duration_gogo.duration).Nanos))
		if ((d < 0n) != ((p$ as __goscript_duration_gogo.duration).Nanos < 0)) {
			return [0n, fmt.Errorf("duration: %#v is out of range for time.Duration", $.interfaceValue(p, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration")))]
		}
	}
	return [d, null]
}

export function durationProto(d: time.Duration): __goscript_duration_gogo.duration | $.VarRef<__goscript_duration_gogo.duration> | null {
	let nanos = time.Duration_Nanoseconds(d)
	let secs = $.int64Div(nanos, 1000000000n)
	nanos = $.int64Sub(nanos, $.int64Mul(secs, 1000000000n))
	return new __goscript_duration_gogo.duration({Seconds: secs, Nanos: $.int(nanos, 32)})
}
