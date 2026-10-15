// Generated file based on duration_gogo.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as time from "@goscript/time/index.js"

import type * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as __goscript_duration from "./duration.gs.ts"

import * as __goscript_duration_pb from "./duration.pb.gs.ts"

import * as __goscript_protosize from "./protosize.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/time/index.js"
import "./duration.gs.ts"
import "./duration.pb.gs.ts"
import "./protosize.gs.ts"

export async function NewPopulatedDuration(r: any, easy: boolean): globalThis.Promise<__goscript_duration_pb.Duration | $.VarRef<__goscript_duration_pb.Duration> | null> {
	let _this: __goscript_duration_pb.Duration | $.VarRef<__goscript_duration_pb.Duration> | null = new __goscript_duration_pb.Duration()
	let _this$: __goscript_duration_pb.Duration = _this == null ? $.pointerTarget<__goscript_duration_pb.Duration>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<__goscript_duration_pb.Duration>(_this)
	let maxSecs = $.int64Div(time.Duration_Nanoseconds(time.Hour), 1000000000n)
	let max = $.int64Mul(2n, maxSecs)
	let s = $.int64Mod($.int64((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as any) : $.pointerValue<any>(r)).Int63(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), max)
	s = $.int64Sub(s, maxSecs)
	let neg = 1n
	if (s < 0n) {
		neg = -1n
	}
	;(_this$ as __goscript_duration_pb.Duration).Seconds = s;
	;(_this$ as __goscript_duration_pb.Duration).Nanos = $.int($.int64Mul(neg, ($.int64Mod((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as any) : $.pointerValue<any>(r)).Int63(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 1000000000n))), 32)
	return _this
}

export async function NewPopulatedStdDuration(r: any, easy: boolean): globalThis.Promise<$.VarRef<time.Duration> | null> {
	let dur: __goscript_duration_pb.Duration | $.VarRef<__goscript_duration_pb.Duration> | null = await NewPopulatedDuration(r, easy)
	let __goscriptTuple0: any = __goscript_duration.DurationFromProto(dur)
	let d = $.varRef(__goscriptTuple0[0])
	let err = __goscriptTuple0[1]
	if (err != null) {
		return null
	}
	return d
}

export function SizeOfStdDuration(d: time.Duration): number {
	let dur: __goscript_duration_pb.Duration | $.VarRef<__goscript_duration_pb.Duration> | null = __goscript_duration.DurationProto(d)
	return (dur !== null && (dur as any).__isVarRef !== true && (dur as any).__goValue === undefined ? ((dur as any) as __goscript_duration_pb.Duration).Size() : __goscript_duration_pb.Duration.prototype.Size.call(dur))
}

export function StdDurationMarshal(d: time.Duration): [$.Slice<number>, $.GoError] {
	let size = SizeOfStdDuration(d)
	let buf: $.Slice<number> = $.makeSlice<number>(size, undefined, "byte")
	let [, err] = StdDurationMarshalTo(d, buf)
	return [buf, err]
}

export function StdDurationMarshalTo(d: time.Duration, data: $.Slice<number>): [number, $.GoError] {
	let dur: __goscript_duration_pb.Duration | $.VarRef<__goscript_duration_pb.Duration> | null = __goscript_duration.DurationProto(d)
	return (dur !== null && (dur as any).__isVarRef !== true && (dur as any).__goValue === undefined ? ((dur as any) as __goscript_duration_pb.Duration).MarshalTo(data) : __goscript_duration_pb.Duration.prototype.MarshalTo.call(dur, data))
}

export function StdDurationUnmarshal(d: $.VarRef<time.Duration> | null, data: $.Slice<number>): $.GoError {
	let dur: __goscript_duration_pb.Duration | $.VarRef<__goscript_duration_pb.Duration> | null = new __goscript_duration_pb.Duration()
	{
		let err = (dur !== null && (dur as any).__isVarRef !== true && (dur as any).__goValue === undefined ? ((dur as any) as __goscript_duration_pb.Duration).Unmarshal(data) : __goscript_duration_pb.Duration.prototype.Unmarshal.call(dur, data))
		if (err != null) {
			return err
		}
	}
	let [dd, err] = __goscript_duration.DurationFromProto(dur)
	if (err != null) {
		return err
	}
	d!.value = dd
	return null
}

var __goscriptAwait: any
