// Generated file based on string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as encoding_asn1 from "@goscript/encoding/asn1/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as big from "@goscript/math/big/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as time from "@goscript/time/index.js"

import * as asn1 from "@goscript/vendor/golang.org/x/crypto/cryptobyte/asn1/index.js"

import * as __goscript_asn1 from "./asn1.gs.ts"
import "@goscript/encoding/asn1/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/big/index.js"
import "@goscript/reflect/index.js"
import "@goscript/time/index.js"
import "@goscript/vendor/golang.org/x/crypto/cryptobyte/asn1/index.js"
import "./asn1.gs.ts"

$.registerTypePackagePath("vendor/golang.org/x/crypto/cryptobyte", ["cryptobyte.String"])

export type String = $.Slice<number>

$.registerNamedType("cryptobyte.String", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")));

$.registerNamedValueType(
	"cryptobyte.String",
	{Empty: (receiver: any, ...args: any[]) => (String_Empty as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), PeekASN1Tag: (receiver: any, ...args: any[]) => (__goscript_asn1.String_PeekASN1Tag as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Empty", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("PeekASN1Tag", [["tag", /* @__PURE__ */ $.basicType("uint8", "asn1.Tag")]], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*cryptobyte.String",
	{CopyBytes: (receiver: any, ...args: any[]) => (String_CopyBytes as any)(receiver, ...$.stripGenericTypeArgs(args)), Empty: (receiver: any, ...args: any[]) => (String_Empty as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), PeekASN1Tag: (receiver: any, ...args: any[]) => (__goscript_asn1.String_PeekASN1Tag as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ReadASN1: (receiver: any, ...args: any[]) => (__goscript_asn1.String_ReadASN1 as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadASN1BitString: (receiver: any, ...args: any[]) => (__goscript_asn1.String_ReadASN1BitString as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadASN1BitStringAsBytes: (receiver: any, ...args: any[]) => (__goscript_asn1.String_ReadASN1BitStringAsBytes as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadASN1Boolean: (receiver: any, ...args: any[]) => (__goscript_asn1.String_ReadASN1Boolean as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadASN1Bytes: (receiver: any, ...args: any[]) => (__goscript_asn1.String_ReadASN1Bytes as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadASN1Element: (receiver: any, ...args: any[]) => (__goscript_asn1.String_ReadASN1Element as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadASN1Enum: (receiver: any, ...args: any[]) => (__goscript_asn1.String_ReadASN1Enum as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadASN1GeneralizedTime: (receiver: any, ...args: any[]) => (__goscript_asn1.String_ReadASN1GeneralizedTime as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadASN1Int64WithTag: (receiver: any, ...args: any[]) => (__goscript_asn1.String_ReadASN1Int64WithTag as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadASN1Integer: (receiver: any, ...args: any[]) => (__goscript_asn1.String_ReadASN1Integer as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadASN1ObjectIdentifier: (receiver: any, ...args: any[]) => (__goscript_asn1.String_ReadASN1ObjectIdentifier as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadASN1UTCTime: (receiver: any, ...args: any[]) => (__goscript_asn1.String_ReadASN1UTCTime as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadAnyASN1: (receiver: any, ...args: any[]) => (__goscript_asn1.String_ReadAnyASN1 as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadAnyASN1Element: (receiver: any, ...args: any[]) => (__goscript_asn1.String_ReadAnyASN1Element as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadBytes: (receiver: any, ...args: any[]) => (String_ReadBytes as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadOptionalASN1: (receiver: any, ...args: any[]) => (__goscript_asn1.String_ReadOptionalASN1 as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadOptionalASN1Boolean: (receiver: any, ...args: any[]) => (__goscript_asn1.String_ReadOptionalASN1Boolean as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadOptionalASN1Integer: (receiver: any, ...args: any[]) => (__goscript_asn1.String_ReadOptionalASN1Integer as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadOptionalASN1OctetString: (receiver: any, ...args: any[]) => (__goscript_asn1.String_ReadOptionalASN1OctetString as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadUint16: (receiver: any, ...args: any[]) => (String_ReadUint16 as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadUint16LengthPrefixed: (receiver: any, ...args: any[]) => (String_ReadUint16LengthPrefixed as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadUint24: (receiver: any, ...args: any[]) => (String_ReadUint24 as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadUint24LengthPrefixed: (receiver: any, ...args: any[]) => (String_ReadUint24LengthPrefixed as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadUint32: (receiver: any, ...args: any[]) => (String_ReadUint32 as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadUint48: (receiver: any, ...args: any[]) => (String_ReadUint48 as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadUint64: (receiver: any, ...args: any[]) => (String_ReadUint64 as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadUint8: (receiver: any, ...args: any[]) => (String_ReadUint8 as any)(receiver, ...$.stripGenericTypeArgs(args)), ReadUint8LengthPrefixed: (receiver: any, ...args: any[]) => (String_ReadUint8LengthPrefixed as any)(receiver, ...$.stripGenericTypeArgs(args)), Skip: (receiver: any, ...args: any[]) => (String_Skip as any)(receiver, ...$.stripGenericTypeArgs(args)), SkipASN1: (receiver: any, ...args: any[]) => (__goscript_asn1.String_SkipASN1 as any)(receiver, ...$.stripGenericTypeArgs(args)), SkipOptionalASN1: (receiver: any, ...args: any[]) => (__goscript_asn1.String_SkipOptionalASN1 as any)(receiver, ...$.stripGenericTypeArgs(args)), read: (receiver: any, ...args: any[]) => (String_read as any)(receiver, ...$.stripGenericTypeArgs(args)), readASN1: (receiver: any, ...args: any[]) => (__goscript_asn1.String_readASN1 as any)(receiver, ...$.stripGenericTypeArgs(args)), readASN1BigInt: (receiver: any, ...args: any[]) => (__goscript_asn1.String_readASN1BigInt as any)(receiver, ...$.stripGenericTypeArgs(args)), readASN1Bytes: (receiver: any, ...args: any[]) => (__goscript_asn1.String_readASN1Bytes as any)(receiver, ...$.stripGenericTypeArgs(args)), readASN1Int64: (receiver: any, ...args: any[]) => (__goscript_asn1.String_readASN1Int64 as any)(receiver, ...$.stripGenericTypeArgs(args)), readASN1Uint64: (receiver: any, ...args: any[]) => (__goscript_asn1.String_readASN1Uint64 as any)(receiver, ...$.stripGenericTypeArgs(args)), readBase128Int: (receiver: any, ...args: any[]) => (__goscript_asn1.String_readBase128Int as any)(receiver, ...$.stripGenericTypeArgs(args)), readLengthPrefixed: (receiver: any, ...args: any[]) => (String_readLengthPrefixed as any)(receiver, ...$.stripGenericTypeArgs(args)), readUnsigned: (receiver: any, ...args: any[]) => (String_readUnsigned as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("CopyBytes", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Empty", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("PeekASN1Tag", [["tag", /* @__PURE__ */ $.basicType("uint8", "asn1.Tag")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadASN1", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "cryptobyte.String"))], ["tag", /* @__PURE__ */ $.basicType("uint8", "asn1.Tag")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadASN1BitString", [["out", /* @__PURE__ */ $.pointerType("asn1.BitString")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadASN1BitStringAsBytes", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadASN1Boolean", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadASN1Bytes", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))], ["tag", /* @__PURE__ */ $.basicType("uint8", "asn1.Tag")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadASN1Element", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "cryptobyte.String"))], ["tag", /* @__PURE__ */ $.basicType("uint8", "asn1.Tag")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadASN1Enum", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadASN1GeneralizedTime", [["out", /* @__PURE__ */ $.pointerType("time.Time")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadASN1Int64WithTag", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))], ["tag", /* @__PURE__ */ $.basicType("uint8", "asn1.Tag")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadASN1Integer", [["out", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadASN1ObjectIdentifier", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadASN1UTCTime", [["out", /* @__PURE__ */ $.pointerType("time.Time")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadAnyASN1", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "cryptobyte.String"))], ["outTag", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint8", "asn1.Tag"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadAnyASN1Element", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "cryptobyte.String"))], ["outTag", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint8", "asn1.Tag"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadBytes", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))], ["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadOptionalASN1", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "cryptobyte.String"))], ["outPresent", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool"))], ["tag", /* @__PURE__ */ $.basicType("uint8", "asn1.Tag")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadOptionalASN1Boolean", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool"))], ["tag", /* @__PURE__ */ $.basicType("uint8", "asn1.Tag")], ["defaultValue", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadOptionalASN1Integer", [["out", { kind: $.TypeKind.Interface, methods: [] }], ["tag", /* @__PURE__ */ $.basicType("uint8", "asn1.Tag")], ["defaultValue", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadOptionalASN1OctetString", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))], ["outPresent", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool"))], ["tag", /* @__PURE__ */ $.basicType("uint8", "asn1.Tag")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadUint16", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint16"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadUint16LengthPrefixed", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "cryptobyte.String"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadUint24", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadUint24LengthPrefixed", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "cryptobyte.String"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadUint32", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadUint48", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadUint64", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadUint8", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadUint8LengthPrefixed", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "cryptobyte.String"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Skip", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("SkipASN1", [["tag", /* @__PURE__ */ $.basicType("uint8", "asn1.Tag")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("SkipOptionalASN1", [["tag", /* @__PURE__ */ $.basicType("uint8", "asn1.Tag")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("read", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("readASN1", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "cryptobyte.String"))], ["outTag", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint8", "asn1.Tag"))], ["skipHeader", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("readASN1BigInt", [["out", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("readASN1Bytes", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("readASN1Int64", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("readASN1Uint64", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("readBase128Int", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("readLengthPrefixed", [["lenLen", /* @__PURE__ */ $.basicType("int")], ["outChild", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "cryptobyte.String"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("readUnsigned", [["out", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))], ["length", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")])]
);

export function String_read(s: $.VarRef<String> | null, n: number): $.Slice<number> {
	if (($.sliceLen(($.pointerValue<String>(s) as String)) < n) || (n < 0)) {
		return null
	}
	let v: String = ($.goSlice(($.pointerValue<String>(s)), undefined, n) as String)
	s!.value = ($.goSlice(($.pointerValue<String>(s)), n, undefined) as String)
	return v
}

export function String_Skip(s: $.VarRef<String> | null, n: number): boolean {
	return String_read(s, n) != null
}

export function String_ReadUint8(s: $.VarRef<String> | null, out: $.VarRef<number> | null): boolean {
	let v: $.Slice<number> = String_read(s, 1)
	if (v == null) {
		return false
	}
	out!.value = $.uint($.arrayIndex(v!, 0), 8)
	return true
}

export function String_ReadUint16(s: $.VarRef<String> | null, out: $.VarRef<number> | null): boolean {
	let v: $.Slice<number> = String_read(s, 2)
	if (v == null) {
		return false
	}
	out!.value = $.uint(((($.uint($.arrayIndex(v!, 0), 16) << 8) & 0xffff)) | $.uint($.arrayIndex(v!, 1), 16), 16)
	return true
}

export function String_ReadUint24(s: $.VarRef<String> | null, out: $.VarRef<number> | null): boolean {
	let v: $.Slice<number> = String_read(s, 3)
	if (v == null) {
		return false
	}
	out!.value = $.uint((((($.uint($.arrayIndex(v!, 0), 32) << 16) >>> 0)) | ((($.uint($.arrayIndex(v!, 1), 32) << 8) >>> 0))) | $.uint($.arrayIndex(v!, 2), 32), 32)
	return true
}

export function String_ReadUint32(s: $.VarRef<String> | null, out: $.VarRef<number> | null): boolean {
	let v: $.Slice<number> = String_read(s, 4)
	if (v == null) {
		return false
	}
	out!.value = $.uint(((((($.uint($.arrayIndex(v!, 0), 32) << 24) >>> 0)) | ((($.uint($.arrayIndex(v!, 1), 32) << 16) >>> 0))) | ((($.uint($.arrayIndex(v!, 2), 32) << 8) >>> 0))) | $.uint($.arrayIndex(v!, 3), 32), 32)
	return true
}

export function String_ReadUint48(s: $.VarRef<String> | null, out: $.VarRef<bigint> | null): boolean {
	let v: $.Slice<number> = String_read(s, 6)
	if (v == null) {
		return false
	}
	out!.value = $.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Mul($.uint64($.arrayIndex(v!, 0)), (2 ** 40))), ($.uint64Mul($.uint64($.arrayIndex(v!, 1)), (2 ** 32))))), ($.uint64Shl($.uint64($.arrayIndex(v!, 2)), 24n)))), ($.uint64Shl($.uint64($.arrayIndex(v!, 3)), 16n)))), ($.uint64Shl($.uint64($.arrayIndex(v!, 4)), 8n)))), $.uint64($.arrayIndex(v!, 5)))
	return true
}

export function String_ReadUint64(s: $.VarRef<String> | null, out: $.VarRef<bigint> | null): boolean {
	let v: $.Slice<number> = String_read(s, 8)
	if (v == null) {
		return false
	}
	out!.value = $.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Or(($.uint64Mul($.uint64($.arrayIndex(v!, 0)), (2 ** 56))), ($.uint64Mul($.uint64($.arrayIndex(v!, 1)), (2 ** 48))))), ($.uint64Mul($.uint64($.arrayIndex(v!, 2)), (2 ** 40))))), ($.uint64Mul($.uint64($.arrayIndex(v!, 3)), (2 ** 32))))), ($.uint64Shl($.uint64($.arrayIndex(v!, 4)), 24n)))), ($.uint64Shl($.uint64($.arrayIndex(v!, 5)), 16n)))), ($.uint64Shl($.uint64($.arrayIndex(v!, 6)), 8n)))), $.uint64($.arrayIndex(v!, 7)))
	return true
}

export function String_readUnsigned(s: $.VarRef<String> | null, out: $.VarRef<number> | null, length: number): boolean {
	let v: $.Slice<number> = String_read(s, length)
	if (v == null) {
		return false
	}
	let result: number = 0
	for (let __goscriptSliceWindow0 = $.sliceRange(v), i = 0; i < length; i++) {
		result = $.uint(result << (8), 32)
		result = result | ($.uint(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number), 32))
	}
	out!.value = result
	return true
}

export function String_readLengthPrefixed(s: $.VarRef<String> | null, lenLen: number, outChild: $.VarRef<String> | null): boolean {
	let lenBytes: $.Slice<number> = String_read(s, lenLen)
	if (lenBytes == null) {
		return false
	}
	let length: number = 0
	for (let __goscriptRangeTarget0 = lenBytes, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let b = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
		length = $.uint(((length << 8) >>> 0), 32)
		length = $.uint(length | $.uint(b, 32), 32)
	}
	let v: $.Slice<number> = String_read(s, $.int(length))
	if (v == null) {
		return false
	}
	outChild!.value = (v as String)
	return true
}

export function String_ReadUint8LengthPrefixed(s: $.VarRef<String> | null, out: $.VarRef<String> | null): boolean {
	return String_readLengthPrefixed(s, 1, out)
}

export function String_ReadUint16LengthPrefixed(s: $.VarRef<String> | null, out: $.VarRef<String> | null): boolean {
	return String_readLengthPrefixed(s, 2, out)
}

export function String_ReadUint24LengthPrefixed(s: $.VarRef<String> | null, out: $.VarRef<String> | null): boolean {
	return String_readLengthPrefixed(s, 3, out)
}

export function String_ReadBytes(s: $.VarRef<String> | null, out: $.VarRef<$.Slice<number>> | null, n: number): boolean {
	let v: $.Slice<number> = String_read(s, n)
	if (v == null) {
		return false
	}
	out!.value = v
	return true
}

export function String_CopyBytes(s: $.VarRef<String> | null, out: $.Slice<number>): boolean {
	let n = $.sliceLen(out)
	let v: $.Slice<number> = String_read(s, n)
	if (v == null) {
		return false
	}
	return $.copy(out, v) == n
}

export function String_Empty(s: String): boolean {
	return $.sliceLen((s as String)) == 0
}
