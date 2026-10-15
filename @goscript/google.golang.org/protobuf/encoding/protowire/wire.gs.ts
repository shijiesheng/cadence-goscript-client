// Generated file based on wire.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/encoding/protowire", ["protowire.Number", "protowire.Type"])

export type Number = number

$.registerNamedValueType(
	"protowire.Number",
	{IsValid: (receiver: any, ...args: any[]) => (Number_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*protowire.Number",
	{IsValid: (receiver: any, ...args: any[]) => (Number_IsValid as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export type Type = number

export const MinValidNumber: Number = 1

export const FirstReservedNumber: Number = 19000

export const LastReservedNumber: Number = 19999

export const MaxValidNumber: Number = 536870911

export const DefaultRecursionLimit: number = 10000

export const VarintType: Type = 0

export const Fixed32Type: Type = 5

export const Fixed64Type: Type = 1

export const BytesType: Type = 2

export const StartGroupType: Type = 3

export const EndGroupType: Type = 4

export const errCodeTruncated: number = -1

export const errCodeFieldNumber: number = -2

export const errCodeOverflow: number = -3

export const errCodeReserved: number = -4

export const errCodeEndGroup: number = -5

export const errCodeRecursionDepth: number = -6

export function Number_IsValid(n: Number): boolean {
	return (1 <= n) && (n <= 536870911)
}

export let errFieldNumber: $.GoError = await errors.New("invalid field number", null)

export function __goscript_set_errFieldNumber(__goscriptValue: $.GoError): void {
	errFieldNumber = __goscriptValue
}

export let errOverflow: $.GoError = await errors.New("variable length integer overflow", null)

export function __goscript_set_errOverflow(__goscriptValue: $.GoError): void {
	errOverflow = __goscriptValue
}

export let errReserved: $.GoError = await errors.New("cannot parse reserved wire type", null)

export function __goscript_set_errReserved(__goscriptValue: $.GoError): void {
	errReserved = __goscriptValue
}

export let errEndGroup: $.GoError = await errors.New("mismatching end group marker", null)

export function __goscript_set_errEndGroup(__goscriptValue: $.GoError): void {
	errEndGroup = __goscriptValue
}

export let errParse: $.GoError = await errors.New("parse error", null)

export function __goscript_set_errParse(__goscriptValue: $.GoError): void {
	errParse = __goscriptValue
}

export function ParseError(n: number): $.GoError {
	if (n >= 0) {
		return null
	}
	switch (n) {
		case -1:
		{
			return io.ErrUnexpectedEOF
			break
		}
		case -2:
		{
			return errFieldNumber
			break
		}
		case -3:
		{
			return errOverflow
			break
		}
		case -4:
		{
			return errReserved
			break
		}
		case -5:
		{
			return errEndGroup
			break
		}
		default:
		{
			return errParse
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function ConsumeField(b: $.Slice<number>): [Number, Type, number] {
	let [num, typ, n] = ConsumeTag(b)
	if (n < 0) {
		return [0, 0, n]
	}
	let m = ConsumeFieldValue(num, typ, $.goSlice(b, n, undefined))
	if (m < 0) {
		return [0, 0, m]
	}
	return [num, typ, n + m]
}

export function ConsumeFieldValue(num: Number, typ: Type, b: $.Slice<number>): number {
	let n: number = 0
	return consumeFieldValueD(num, typ, b, 10000)
}

export function consumeFieldValueD(num: Number, typ: Type, b: $.Slice<number>, depth: number): number {
	let n: number = 0
	switch (typ) {
		case 0:
		{
			let __goscriptTuple0: any = ConsumeVarint(b)
			n = __goscriptTuple0[1]
			return n
			break
		}
		case 5:
		{
			let __goscriptTuple1: any = ConsumeFixed32(b)
			n = __goscriptTuple1[1]
			return n
			break
		}
		case 1:
		{
			let __goscriptTuple2: any = ConsumeFixed64(b)
			n = __goscriptTuple2[1]
			return n
			break
		}
		case 2:
		{
			let __goscriptTuple3: any = ConsumeBytes(b)
			n = __goscriptTuple3[1]
			return n
			break
		}
		case 3:
		{
			if (depth < 0) {
				return -6
			}
			let n0 = $.sliceLen(b)
			while (true) {
				let [num2, typ2, __goscriptShadow0] = ConsumeTag(b)
				if (__goscriptShadow0 < 0) {
					return __goscriptShadow0
				}
				b = $.goSlice(b, __goscriptShadow0, undefined)
				if (typ2 == 4) {
					if (num != num2) {
						return -5
					}
					return n0 - $.sliceLen(b)
				}

				__goscriptShadow0 = consumeFieldValueD(num2, typ2, b, depth - 1)
				if (__goscriptShadow0 < 0) {
					return __goscriptShadow0
				}
				b = $.goSlice(b, __goscriptShadow0, undefined)
			}
			break
		}
		case 4:
		{
			return -5
			break
		}
		default:
		{
			return -4
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function AppendTag(b: $.Slice<number>, num: Number, typ: Type): $.Slice<number> {
	return AppendVarint(b, EncodeTag(num, typ))
}

export function ConsumeTag(b: $.Slice<number>): [Number, Type, number] {
	let [v, n] = ConsumeVarint(b)
	if (n < 0) {
		return [0, 0, n]
	}
	let [num, typ] = DecodeTag(v)
	if (num < 1) {
		return [0, 0, -2]
	}
	return [num, typ, n]
}

export function SizeTag(num: Number): number {
	return SizeVarint(EncodeTag(num, 0))
}

export function AppendVarint(b: $.Slice<number>, v: bigint): $.Slice<number> {
	switch ((true as boolean)) {
		case v < 128n:
		{
			b = $.append(b, $.uint($.uint(v, 8), 8), $.byteSliceHint)
			break
		}
		case v < 16384n:
		{
			b = $.append(b, $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 0n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Shr(v, 7n), 8), 8), $.byteSliceHint)
			break
		}
		case v < 2097152n:
		{
			b = $.append(b, $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 0n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 7n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Shr(v, 14n), 8), 8), $.byteSliceHint)
			break
		}
		case v < 268435456n:
		{
			b = $.append(b, $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 0n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 7n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 14n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Shr(v, 21n), 8), 8), $.byteSliceHint)
			break
		}
		case v < 34359738368n:
		{
			b = $.append(b, $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 0n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 7n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 14n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 21n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Shr(v, 28n), 8), 8), $.byteSliceHint)
			break
		}
		case v < 4398046511104n:
		{
			b = $.append(b, $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 0n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 7n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 14n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 21n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 28n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Shr(v, 35n), 8), 8), $.byteSliceHint)
			break
		}
		case v < 562949953421312n:
		{
			b = $.append(b, $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 0n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 7n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 14n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 21n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 28n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 35n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Shr(v, 42n), 8), 8), $.byteSliceHint)
			break
		}
		case v < 72057594037927936n:
		{
			b = $.append(b, $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 0n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 7n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 14n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 21n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 28n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 35n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 42n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Shr(v, 49n), 8), 8), $.byteSliceHint)
			break
		}
		case v < 9223372036854775808n:
		{
			b = $.append(b, $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 0n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 7n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 14n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 21n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 28n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 35n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 42n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 49n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Shr(v, 56n), 8), 8), $.byteSliceHint)
			break
		}
		default:
		{
			b = $.append(b, $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 0n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 7n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 14n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 21n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 28n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 35n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 42n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 49n)), 127n)), 128n), 8), 8), $.uint($.uint($.uint64Or(($.uint64And(($.uint64Shr(v, 56n)), 127n)), 128n), 8), 8), $.uint(1, 8), $.byteSliceHint)
			break
		}
	}
	return b
}

export function ConsumeVarint(b: $.Slice<number>): [bigint, number] {
	let v: bigint = 0n
	let n: number = 0
	let y: bigint = 0n
	if ($.sliceLen(b) <= 0) {
		return [0n, -1]
	}
	v = $.uint64($.arrayIndex(b!, 0))
	if (v < 128n) {
		return [v, 1]
	}
	v = $.uint64Sub(v, 128n)

	if ($.sliceLen(b) <= 1) {
		return [0n, -1]
	}
	y = $.uint64($.arrayIndex(b!, 1))
	v = $.uint64Add(v, $.uint64Shl(y, 7n))
	if (y < 128n) {
		return [v, 2]
	}
	v = $.uint64Sub(v, 16384n)

	if ($.sliceLen(b) <= 2) {
		return [0n, -1]
	}
	y = $.uint64($.arrayIndex(b!, 2))
	v = $.uint64Add(v, $.uint64Shl(y, 14n))
	if (y < 128n) {
		return [v, 3]
	}
	v = $.uint64Sub(v, 2097152n)

	if ($.sliceLen(b) <= 3) {
		return [0n, -1]
	}
	y = $.uint64($.arrayIndex(b!, 3))
	v = $.uint64Add(v, $.uint64Shl(y, 21n))
	if (y < 128n) {
		return [v, 4]
	}
	v = $.uint64Sub(v, 268435456n)

	if ($.sliceLen(b) <= 4) {
		return [0n, -1]
	}
	y = $.uint64($.arrayIndex(b!, 4))
	v = $.uint64Add(v, $.uint64Shl(y, 28n))
	if (y < 128n) {
		return [v, 5]
	}
	v = $.uint64Sub(v, 34359738368n)

	if ($.sliceLen(b) <= 5) {
		return [0n, -1]
	}
	y = $.uint64($.arrayIndex(b!, 5))
	v = $.uint64Add(v, $.uint64Mul(y, (2 ** 35)))
	if (y < 128n) {
		return [v, 6]
	}
	v = $.uint64Sub(v, 4398046511104n)

	if ($.sliceLen(b) <= 6) {
		return [0n, -1]
	}
	y = $.uint64($.arrayIndex(b!, 6))
	v = $.uint64Add(v, $.uint64Mul(y, (2 ** 42)))
	if (y < 128n) {
		return [v, 7]
	}
	v = $.uint64Sub(v, 562949953421312n)

	if ($.sliceLen(b) <= 7) {
		return [0n, -1]
	}
	y = $.uint64($.arrayIndex(b!, 7))
	v = $.uint64Add(v, $.uint64Mul(y, (2 ** 49)))
	if (y < 128n) {
		return [v, 8]
	}
	v = $.uint64Sub(v, 72057594037927936n)

	if ($.sliceLen(b) <= 8) {
		return [0n, -1]
	}
	y = $.uint64($.arrayIndex(b!, 8))
	v = $.uint64Add(v, $.uint64Mul(y, (2 ** 56)))
	if (y < 128n) {
		return [v, 9]
	}
	v = $.uint64Sub(v, 9223372036854775808n)

	if ($.sliceLen(b) <= 9) {
		return [0n, -1]
	}
	y = $.uint64($.arrayIndex(b!, 9))
	v = $.uint64Add(v, $.uint64Mul(y, (2 ** 63)))
	if (y < 2n) {
		return [v, 10]
	}
	return [0n, -3]
}

export function SizeVarint(v: bigint): number {
	// This computes 1 + (bits.Len64(v)-1)/7.
	// 9/64 is a good enough approximation of 1/7
	return globalThis.Math.trunc($.int($.uint((((globalThis.Math.imul(9, $.uint(bits.Len64(v), 32)) >>> 0) + 64) >>> 0), 32)) / 64)
}

export function AppendFixed32(b: $.Slice<number>, v: number): $.Slice<number> {
	return $.append(b, $.uint($.uint($.uintShr(v, 0, 32), 8), 8), $.uint($.uint($.uintShr(v, 8, 32), 8), 8), $.uint($.uint($.uintShr(v, 16, 32), 8), 8), $.uint($.uint($.uintShr(v, 24, 32), 8), 8), $.byteSliceHint)
}

export function ConsumeFixed32(b: $.Slice<number>): [number, number] {
	let v: number = 0
	let n: number = 0
	if ($.sliceLen(b) < 4) {
		return [0, -1]
	}
	v = $.uint(((((($.uint($.arrayIndex(b!, 0), 32) << 0) >>> 0)) | ((($.uint($.arrayIndex(b!, 1), 32) << 8) >>> 0))) | ((($.uint($.arrayIndex(b!, 2), 32) << 16) >>> 0))) | ((($.uint($.arrayIndex(b!, 3), 32) << 24) >>> 0)), 32)
	return [v, 4]
}

export function SizeFixed32(): number {
	return 4
}

export function AppendFixed64(b: $.Slice<number>, v: bigint): $.Slice<number> {
	return $.append(b, $.uint($.uint($.uint64Shr(v, 0n), 8), 8), $.uint($.uint($.uint64Shr(v, 8n), 8), 8), $.uint($.uint($.uint64Shr(v, 16n), 8), 8), $.uint($.uint($.uint64Shr(v, 24n), 8), 8), $.uint($.uint($.uint64Shr(v, 32n), 8), 8), $.uint($.uint($.uint64Shr(v, 40n), 8), 8), $.uint($.uint($.uint64Shr(v, 48n), 8), 8), $.uint($.uint($.uint64Shr(v, 56n), 8), 8), $.byteSliceHint)
}

export function ConsumeFixed64(b: $.Slice<number>): [bigint, number] {
	let v: bigint = 0n
	let n: number = 0
	if ($.sliceLen(b) < 8) {
		return [0n, -1]
	}
	v = $.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Shl($.uint64($.arrayIndex(b!, 0)), 0n)), ($.uint64Shl($.uint64($.arrayIndex(b!, 1)), 8n)))), ($.uint64Shl($.uint64($.arrayIndex(b!, 2)), 16n)))), ($.uint64Shl($.uint64($.arrayIndex(b!, 3)), 24n)))), ($.uint64Mul($.uint64($.arrayIndex(b!, 4)), (2 ** 32))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 5)), (2 ** 40))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 6)), (2 ** 48))))), ($.uint64Mul($.uint64($.arrayIndex(b!, 7)), (2 ** 56))))
	return [v, 8]
}

export function SizeFixed64(): number {
	return 8
}

export function AppendBytes(b: $.Slice<number>, v: $.Slice<number>): $.Slice<number> {
	return $.appendSlice(AppendVarint(b, $.uint64($.sliceLen(v))), v, $.byteSliceHint)
}

export function ConsumeBytes(b: $.Slice<number>): [$.Slice<number>, number] {
	let v: $.Slice<number> = null! as $.Slice<number>
	let n: number = 0
	let __goscriptTuple4: any = ConsumeVarint(b)
	let m = __goscriptTuple4[0]
	n = __goscriptTuple4[1]
	if (n < 0) {
		return [null, n]
	}
	if (m > $.uint64($.sliceLen($.goSlice(b, n, undefined)))) {
		return [null, -1]
	}
	return [$.goSlice($.goSlice(b, n, undefined), undefined, globalThis.Number(m)), n + $.int(m)]
}

export function SizeBytes(n: number): number {
	return SizeVarint($.uint64(n)) + n
}

export function AppendString(b: $.Slice<number>, v: string): $.Slice<number> {
	return $.appendSlice(AppendVarint(b, $.uint64($.stringLen(v))), $.stringToBytes(v), $.byteSliceHint)
}

export function ConsumeString(b: $.Slice<number>): [string, number] {
	let v: string = ""
	let n: number = 0
	let __goscriptTuple5: any = ConsumeBytes(b)
	let bb: $.Slice<number> = __goscriptTuple5[0]
	n = __goscriptTuple5[1]
	return [$.bytesToString(bb), n]
}

export function AppendGroup(b: $.Slice<number>, num: Number, v: $.Slice<number>): $.Slice<number> {
	return AppendVarint($.appendSlice(b, v, $.byteSliceHint), EncodeTag(num, 4))
}

export function ConsumeGroup(num: Number, b: $.Slice<number>): [$.Slice<number>, number] {
	let v: $.Slice<number> = null! as $.Slice<number>
	let n: number = 0
	n = ConsumeFieldValue(num, 3, b)
	if (n < 0) {
		return [null, n]
	}
	b = $.goSlice(b, undefined, n)

	// Truncate off end group marker, but need to handle denormalized varints.
	// Assuming end marker is never 0 (which is always the case since
	// EndGroupType is non-zero), we can truncate all trailing bytes where the
	// lower 7 bits are all zero (implying that the varint is denormalized).
	while (($.sliceLen(b) > 0) && ($.uint(($.arrayIndex(b!, $.sliceLen(b) - 1) & 0x7f), 8) == 0)) {
		b = $.goSlice(b, undefined, $.sliceLen(b) - 1)
	}
	b = $.goSlice(b, undefined, $.sliceLen(b) - SizeTag(num))
	return [b, n]
}

export function SizeGroup(num: Number, n: number): number {
	return n + SizeTag(num)
}

export function DecodeTag(x: bigint): [Number, Type] {
	// NOTE: MessageSet allows for larger field numbers than normal.
	if (($.uint64Shr(x, 3n)) > 2147483647n) {
		return [-1, 0]
	}
	return [$.int($.uint64Shr(x, 3n), 32), $.int($.uint64And(x, 7n), 8)]
}

export function EncodeTag(num: Number, typ: Type): bigint {
	return $.uint64Or(($.uint64Shl($.uint64(num), 3n)), $.uint64(typ & 7))
}

export function DecodeZigZag(x: bigint): bigint {
	return $.int64Xor($.int64($.uint64Shr(x, 1n)), ($.int64Shr(($.int64Shl($.int64(x), 63n)), 63n)))
}

export function EncodeZigZag(x: bigint): bigint {
	return $.uint64Xor($.uint64($.int64Shl(x, 1n)), $.uint64($.int64Shr(x, 63n)))
}

export function DecodeBool(x: bigint): boolean {
	return x != 0n
}

export function EncodeBool(x: boolean): bigint {
	if (x) {
		return 1n
	}
	return 0n
}
