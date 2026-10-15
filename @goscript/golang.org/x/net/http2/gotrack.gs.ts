// Generated file based on gotrack.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as os from "@goscript/os/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/os/index.js"
import "@goscript/runtime/index.js"
import "@goscript/strconv/index.js"
import "@goscript/sync/index.js"

$.registerTypePackagePath("golang.org/x/net/http2", ["http2.goroutineLock"])

export type goroutineLock = bigint

$.registerNamedValueType(
	"http2.goroutineLock",
	{check: (receiver: any, ...args: any[]) => (goroutineLock_check as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), checkNotOn: (receiver: any, ...args: any[]) => (goroutineLock_checkNotOn as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("check"), $.methodSignature("checkNotOn")]
);

$.registerNamedValueType(
	"*http2.goroutineLock",
	{check: (receiver: any, ...args: any[]) => (goroutineLock_check as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), checkNotOn: (receiver: any, ...args: any[]) => (goroutineLock_checkNotOn as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("check"), $.methodSignature("checkNotOn")]
);

export let DebugGoroutines: boolean = $.stringEqual(os.Getenv("DEBUG_HTTP2_GOROUTINES"), "1")

export function __goscript_set_DebugGoroutines(__goscriptValue: boolean): void {
	DebugGoroutines = __goscriptValue
}

export async function newGoroutineLock(): globalThis.Promise<goroutineLock> {
	if (!DebugGoroutines) {
		return 0n
	}
	return $.uint64(await curGoroutineID())
}

export async function goroutineLock_check(g: goroutineLock): globalThis.Promise<void> {
	if (!DebugGoroutines) {
		return
	}
	if (await curGoroutineID() != $.uint64(g)) {
		$.panic("running on the wrong goroutine")
	}
}

export async function goroutineLock_checkNotOn(g: goroutineLock): globalThis.Promise<void> {
	if (!DebugGoroutines) {
		return
	}
	if (await curGoroutineID() == $.uint64(g)) {
		$.panic("running on the wrong goroutine")
	}
}

export let goroutineSpace: $.Slice<number> = new Uint8Array([103, 111, 114, 111, 117, 116, 105, 110, 101, 32])

export function __goscript_set_goroutineSpace(__goscriptValue: $.Slice<number>): void {
	goroutineSpace = __goscriptValue
}

export async function curGoroutineID(): globalThis.Promise<bigint> {
	using __defer = new $.DisposableStack()
	let bp = $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>(await littleBuf.value.Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (x: any) => __receiver.Put(x))(littleBuf.value), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), "sync.(*Pool).Put-fm")
	const __goscriptDeferArg0 = $.interfaceValue(bp, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	__defer.defer(() => { __goscriptDeferCallee0(__goscriptDeferArg0) })
	let b: $.Slice<number> = $.pointerValue<$.Slice<number>>(bp)
	b = $.goSlice(b, undefined, runtime.Stack(b, false))
	// Parse the 4707 out of "goroutine 4707 ["
	b = bytes.TrimPrefix(b, goroutineSpace)
	let i: number = bytes.IndexByte(b, 32)
	if (i < 0) {
		$.panic(await fmt.Sprintf("No space found in %q", $.interfaceValue(b, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
	}
	b = $.goSlice(b, undefined, i)
	let [n, err] = parseUintBytes(b, 10, 64)
	if (err != null) {
		$.panic(await fmt.Sprintf("Failed to parse goroutine ID out of %q: %v", $.interfaceValue(b, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), (err as any)))
	}
	return n
}

export let littleBuf: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	let buf: $.VarRef<$.Slice<number>> = $.varRef($.makeSlice<number>(64, undefined, "byte"))
	return $.interfaceValue(buf, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_littleBuf(__goscriptValue: sync.Pool): void {
	$.assignStruct(littleBuf.value, __goscriptValue)
}

export function parseUintBytes(s: $.Slice<number>, base: number, bitSize: number): [bigint, $.GoError] {
	let n: bigint = 0n
	let err: $.GoError = null! as $.GoError
	let cutoff: bigint = 0n
	let maxVal: bigint = 0n

	if (bitSize == 0) {
		bitSize = 64
	}

	let s0: $.Slice<number> = s
	Error: {
		switch ((true as boolean)) {
			case $.sliceLen(s) < 1:
			{
				err = strconv.ErrSyntax
				break Error
				break
			}
			case (2 <= base) && (base <= 36):
			{
				break
			}
			case base == 0:
			{
				switch ((true as boolean)) {
					case (($.arrayIndex(s!, 0) == 48) && ($.sliceLen(s) > 1)) && (($.arrayIndex(s!, 1) == 120) || ($.arrayIndex(s!, 1) == 88)):
					{
						base = 16
						s = $.goSlice(s, 2, undefined)
						if ($.sliceLen(s) < 1) {
							err = strconv.ErrSyntax
							break Error
						}
						break
					}
					case $.arrayIndex(s!, 0) == 48:
					{
						base = 8
						break
					}
					default:
					{
						base = 10
						break
					}
				}
				break
			}
			default:
			{
				err = errors.New($.concatString("invalid base ", strconv.Itoa(base)))
				break Error
				break
			}
		}

		n = 0n
		cutoff = cutoff64(base)
		maxVal = $.uint64Sub(($.uint64Shl(1n, $.uint(bitSize, 64))), 1n)

		for (let __goscriptSliceWindow0 = $.sliceRange(s), i = 0; i < __goscriptSliceWindow0.length; i++) {
			let v: number = 0
			let d = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number)
			switch ((true as boolean)) {
				case (48 <= d) && (d <= 57):
				{
					v = $.uint(((d - 48) & 0xff), 8)
					break
				}
				case (97 <= d) && (d <= 122):
				{
					v = $.uint((((((d - 97) & 0xff)) + 10) & 0xff), 8)
					break
				}
				case (65 <= d) && (d <= 90):
				{
					v = $.uint((((((d - 65) & 0xff)) + 10) & 0xff), 8)
					break
				}
				default:
				{
					n = 0n
					err = strconv.ErrSyntax
					break Error
					break
				}
			}
			if ($.int(v) >= base) {
				n = 0n
				err = strconv.ErrSyntax
				break Error
			}

			if (n >= cutoff) {
				// n*base overflows
				n = 18446744073709551615n
				err = strconv.ErrRange
				break Error
			}
			n = $.uint64Mul(n, $.uint64(base))

			let n1: bigint = $.uint64Add(n, $.uint64(v))
			if ((n1 < n) || (n1 > maxVal)) {
				// n+v overflows
				n = 18446744073709551615n
				err = strconv.ErrRange
				break Error
			}
			n = n1
		}

		return [n, null]
	}
	return [n, $.interfaceValue<$.GoError>(new strconv.NumError({Func: "ParseUint", Num: $.bytesToString(s0), Err: err}), "*strconv.NumError", /* @__PURE__ */ $.pointerType("strconv.NumError"))]
}

export function cutoff64(base: number): bigint {
	if (base < 2) {
		return 0n
	}
	return $.uint64Add(($.uint64Div(18446744073709551615n, $.uint64(base))), 1n)
}
