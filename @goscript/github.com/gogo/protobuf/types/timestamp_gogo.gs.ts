// Generated file based on timestamp_gogo.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import type * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as __goscript_protosize from "./protosize.gs.ts"

import * as __goscript_timestamp from "./timestamp.gs.ts"

import * as __goscript_timestamp_pb from "./timestamp.pb.gs.ts"
import "@goscript/time/index.js"
import "./protosize.gs.ts"
import "./timestamp.gs.ts"
import "./timestamp.pb.gs.ts"

export async function NewPopulatedTimestamp(r: any, easy: boolean): globalThis.Promise<__goscript_timestamp_pb.Timestamp | $.VarRef<__goscript_timestamp_pb.Timestamp> | null> {
	let _this: __goscript_timestamp_pb.Timestamp | $.VarRef<__goscript_timestamp_pb.Timestamp> | null = new __goscript_timestamp_pb.Timestamp()
	let _this$: __goscript_timestamp_pb.Timestamp = _this == null ? $.pointerTarget<__goscript_timestamp_pb.Timestamp>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<__goscript_timestamp_pb.Timestamp>(_this)
	let ns = $.int64((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as any) : $.pointerValue<any>(r)).Int63(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait));
	;(_this$ as __goscript_timestamp_pb.Timestamp).Seconds = $.int64Div(ns, 1000000000n);
	;(_this$ as __goscript_timestamp_pb.Timestamp).Nanos = $.int($.int64Mod(ns, 1000000000n), 32)
	return _this
}

export async function NewPopulatedStdTime(r: any, easy: boolean): globalThis.Promise<time.Time | $.VarRef<time.Time> | null> {
	let timestamp: __goscript_timestamp_pb.Timestamp | $.VarRef<__goscript_timestamp_pb.Timestamp> | null = await NewPopulatedTimestamp(r, easy)
	let __goscriptTuple0: any = __goscript_timestamp.TimestampFromProto(timestamp)
	let t = $.varRef(__goscriptTuple0[0])
	let err = __goscriptTuple0[1]
	if (err != null) {
		return null
	}
	return t
}

export function SizeOfStdTime(t: time.Time): number {
	let __goscriptTuple1: any = __goscript_timestamp.TimestampProto(t)
	let ts: __goscript_timestamp_pb.Timestamp | $.VarRef<__goscript_timestamp_pb.Timestamp> | null = __goscriptTuple1[0]
	let err = __goscriptTuple1[1]
	if (err != null) {
		return 0
	}
	return (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as __goscript_timestamp_pb.Timestamp).Size() : __goscript_timestamp_pb.Timestamp.prototype.Size.call(ts))
}

export function StdTimeMarshal(t: time.Time): [$.Slice<number>, $.GoError] {
	let size = SizeOfStdTime(t)
	let buf: $.Slice<number> = $.makeSlice<number>(size, undefined, "byte")
	let [, err] = StdTimeMarshalTo(t, buf)
	return [buf, err]
}

export function StdTimeMarshalTo(t: time.Time, data: $.Slice<number>): [number, $.GoError] {
	let __goscriptTuple2: any = __goscript_timestamp.TimestampProto(t)
	let ts: __goscript_timestamp_pb.Timestamp | $.VarRef<__goscript_timestamp_pb.Timestamp> | null = __goscriptTuple2[0]
	let err = __goscriptTuple2[1]
	if (err != null) {
		return [0, err]
	}
	return (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as __goscript_timestamp_pb.Timestamp).MarshalTo(data) : __goscript_timestamp_pb.Timestamp.prototype.MarshalTo.call(ts, data))
}

export function StdTimeUnmarshal(t: time.Time | $.VarRef<time.Time> | null, data: $.Slice<number>): $.GoError {
	let ts: __goscript_timestamp_pb.Timestamp | $.VarRef<__goscript_timestamp_pb.Timestamp> | null = new __goscript_timestamp_pb.Timestamp()
	{
		let err = (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as __goscript_timestamp_pb.Timestamp).Unmarshal(data) : __goscript_timestamp_pb.Timestamp.prototype.Unmarshal.call(ts, data))
		if (err != null) {
			return err
		}
	}
	let [tt, err] = __goscript_timestamp.TimestampFromProto(ts)
	if (err != null) {
		return err
	}
	$.assignStruct($.pointerValue<time.Time>(t), tt)
	return null
}

var __goscriptAwait: any
