// Generated file based on time.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time2 from "@goscript/time/index.js"

import type * as __goscript_dce from "./dce.gs.ts"

import type * as __goscript_json from "./json.gs.ts"

import type * as __goscript_node from "./node.gs.ts"

import type * as __goscript_sql from "./sql.gs.ts"

import * as __goscript_util from "./util.gs.ts"

import type * as __goscript_uuid from "./uuid.gs.ts"
import "@goscript/encoding/binary/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./util.gs.ts"

$.registerTypePackagePath("github.com/pborman/uuid", ["uuid.Time"])

export type Time = bigint

$.registerNamedValueType(
	"uuid.Time",
	{UnixTime: (receiver: any, ...args: any[]) => (Time_UnixTime as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("UnixTime", [], [["sec", /* @__PURE__ */ $.basicType("int64")], ["nsec", /* @__PURE__ */ $.basicType("int64")]])]
);

$.registerNamedValueType(
	"*uuid.Time",
	{UnixTime: (receiver: any, ...args: any[]) => (Time_UnixTime as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("UnixTime", [], [["sec", /* @__PURE__ */ $.basicType("int64")], ["nsec", /* @__PURE__ */ $.basicType("int64")]])]
);

export const lillian: number = 2299160

export const unix: number = 2440587

export const epoch: number = 141427

export const g1582: number = 12219292800

export const g1582ns100: number = 122192928000000000

export let timeMu: $.VarRef<sync.Mutex> = $.varRef($.markAsStructValue(new sync.Mutex()))

export function __goscript_set_timeMu(__goscriptValue: sync.Mutex): void {
	$.assignStruct(timeMu.value, __goscriptValue)
}

export let lasttime: bigint = 0n

export function __goscript_set_lasttime(__goscriptValue: bigint): void {
	lasttime = __goscriptValue
}

export let clock_seq: number = 0

export function __goscript_set_clock_seq(__goscriptValue: number): void {
	clock_seq = __goscriptValue
}

export let timeNow: (() => time2.Time | globalThis.Promise<time2.Time>) | null = time2.Now

export function __goscript_set_timeNow(__goscriptValue: (() => time2.Time | globalThis.Promise<time2.Time>) | null): void {
	timeNow = __goscriptValue
}

export function Time_UnixTime(t: Time): [bigint, bigint] {
	let sec: bigint = 0n
	let nsec: bigint = 0n
	sec = $.int64($.int64Sub(t, 122192928000000000n))
	nsec = $.int64Mul(($.int64Mod(sec, 10000000n)), 100n)
	sec = $.int64Div(sec, 10000000n)
	return [sec, nsec]
}

export async function GetTime(): globalThis.Promise<[Time, number, $.GoError]> {
	using __defer = new $.DisposableStack()
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())(timeMu.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee0() })
	await timeMu.value.Lock()
	return await getTime()
}

export async function getTime(): globalThis.Promise<[Time, number, $.GoError]> {
	let t = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = timeNow!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time2.Time)))

	// If we don't have a clock sequence already, set one.
	if (clock_seq == 0) {
		await setClockSequence(-1)
	}
	let now = $.uint64Add($.uint64($.int64Div($.markAsStructValue($.cloneStructValue(t)).UnixNano(), 100n)), 122192928000000000n)

	// If time has gone backwards with this clock sequence then we
	// increment the clock sequence
	if (now <= lasttime) {
		clock_seq = $.uint(((((clock_seq + 1) & 0xffff)) & 0x3fff) | 0x8000, 16)
	}
	lasttime = now
	return [$.int64(now), clock_seq, null]
}

export async function ClockSequence(): globalThis.Promise<number> {
	using __defer = new $.DisposableStack()
	const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())(timeMu.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee1() })
	await timeMu.value.Lock()
	return await clockSequence()
}

export async function clockSequence(): globalThis.Promise<number> {
	if (clock_seq == 0) {
		await setClockSequence(-1)
	}
	return $.int(clock_seq & 0x3fff)
}

export async function SetClockSequence(seq: number): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())(timeMu.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee2() })
	await timeMu.value.Lock()
	await setClockSequence(seq)
}

export async function setClockSequence(seq: number): globalThis.Promise<void> {
	if (seq == -1) {
		let b: Uint8Array = $.arrayValue(new Uint8Array(2))
		await __goscript_util.randomBits($.goSlice(b, undefined, undefined))
		seq = ($.int($.arrayIndex(b, 0)) << 8) | $.int($.arrayIndex(b, 1))
	}
	let old_seq = clock_seq
	clock_seq = $.uint($.uint(seq & 0x3fff, 16) | 0x8000, 16)
	if (old_seq != clock_seq) {
		lasttime = 0n
	}
}

export function UUID_Time(uuid: __goscript_uuid.UUID): [Time, boolean] {
	if ($.sliceLen((uuid as __goscript_uuid.UUID)) != 16) {
		return [0n, false]
	}
	let __goscriptShadow0 = $.int64($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint32($.goSlice(uuid, 0, 4)))
	__goscriptShadow0 = $.int64Or(__goscriptShadow0, $.int64Shl($.int64($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint16($.goSlice(uuid, 4, 6))), 32n))
	__goscriptShadow0 = $.int64Or(__goscriptShadow0, $.int64Shl($.int64($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint16($.goSlice(uuid, 6, 8)) & 0xfff), 48n))
	return [$.int64(__goscriptShadow0), true]
}

export function UUID_ClockSequence(uuid: __goscript_uuid.UUID): [number, boolean] {
	if ($.sliceLen((uuid as __goscript_uuid.UUID)) != 16) {
		return [0, false]
	}
	return [$.int($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint16($.goSlice(uuid, 8, 10))) & 0x3fff, true]
}

var __goscriptAwait: any
