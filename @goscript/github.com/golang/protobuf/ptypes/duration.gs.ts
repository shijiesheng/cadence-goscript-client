// Generated file based on duration.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as time from "@goscript/time/index.js"

import * as durationpb from "@goscript/github.com/golang/protobuf/ptypes/duration/index.js"

import * as durationpb2 from "@goscript/google.golang.org/protobuf/types/known/durationpb/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/golang/protobuf/ptypes/duration/index.js"
import "@goscript/google.golang.org/protobuf/types/known/durationpb/index.js"

export const maxSeconds: bigint = 315576000000n

export const minSeconds: bigint = -315576000000n

export function Duration(dur: durationpb2.Duration | $.VarRef<durationpb2.Duration> | null): [time.Duration, $.GoError] {
	const dur$: durationpb.Duration = dur == null ? $.pointerTarget<durationpb.Duration>(dur) : (dur as any).__isVarRef === true ? (dur as any).value : (dur as any).__goValue === undefined ? (dur as any) : $.pointerTarget<durationpb.Duration>(dur)
	{
		let err = validateDuration(dur)
		if (err != null) {
			return [0n, err]
		}
	}
	let d = $.int64Mul($.int64((dur$ as durationpb.Duration).Seconds), 1000000000n)
	if ($.int64($.int64Div(d, 1000000000n)) != (dur$ as durationpb.Duration).Seconds) {
		return [0n, fmt.Errorf("duration: %v is out of range for time.Duration", $.interfaceValue(dur, "*durationpb.Duration", /* @__PURE__ */ $.pointerType("durationpb.Duration")))]
	}
	if ((dur$ as durationpb.Duration).Nanos != 0) {
		d = $.int64Add(d, $.int64Mul($.int64((dur$ as durationpb.Duration).Nanos), 1n))
		if ((d < 0n) != ((dur$ as durationpb.Duration).Nanos < 0)) {
			return [0n, fmt.Errorf("duration: %v is out of range for time.Duration", $.interfaceValue(dur, "*durationpb.Duration", /* @__PURE__ */ $.pointerType("durationpb.Duration")))]
		}
	}
	return [d, null]
}

export function DurationProto(d: time.Duration): durationpb2.Duration | $.VarRef<durationpb2.Duration> | null {
	let nanos = time.Duration_Nanoseconds(d)
	let secs = $.int64Div(nanos, 1000000000n)
	nanos = $.int64Sub(nanos, $.int64Mul(secs, 1000000000n))
	return new durationpb2.Duration({Seconds: $.int64(secs), Nanos: $.int(nanos, 32)})
}

export function validateDuration(dur: durationpb2.Duration | $.VarRef<durationpb2.Duration> | null): $.GoError {
	const dur$: durationpb.Duration = dur == null ? $.pointerTarget<durationpb.Duration>(dur) : (dur as any).__isVarRef === true ? (dur as any).value : (dur as any).__goValue === undefined ? (dur as any) : $.pointerTarget<durationpb.Duration>(dur)
	if (dur == null) {
		return errors.New("duration: nil Duration")
	}
	if (((dur$ as durationpb.Duration).Seconds < -315576000000n) || ((dur$ as durationpb.Duration).Seconds > 315576000000n)) {
		return fmt.Errorf("duration: %v: seconds out of range", $.interfaceValue(dur, "*durationpb.Duration", /* @__PURE__ */ $.pointerType("durationpb.Duration")))
	}
	if (((dur$ as durationpb.Duration).Nanos <= -1000000000) || ((dur$ as durationpb.Duration).Nanos >= 1000000000)) {
		return fmt.Errorf("duration: %v: nanos out of range", $.interfaceValue(dur, "*durationpb.Duration", /* @__PURE__ */ $.pointerType("durationpb.Duration")))
	}
	// Seconds and Nanos must have the same sign, unless d.Nanos is zero.
	if ((((dur$ as durationpb.Duration).Seconds < 0n) && ((dur$ as durationpb.Duration).Nanos > 0)) || (((dur$ as durationpb.Duration).Seconds > 0n) && ((dur$ as durationpb.Duration).Nanos < 0))) {
		return fmt.Errorf("duration: %v: seconds and nanos have different signs", $.interfaceValue(dur, "*durationpb.Duration", /* @__PURE__ */ $.pointerType("durationpb.Duration")))
	}
	return null
}
