// Generated file based on asn1.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as encoding_asn1 from "@goscript/encoding/asn1/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as big from "@goscript/math/big/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as time from "@goscript/time/index.js"

import * as asn1 from "@goscript/vendor/golang.org/x/crypto/cryptobyte/asn1/index.js"

import * as __goscript__string from "./string.gs.ts"

import * as __goscript_builder from "./builder.gs.ts"
import "@goscript/encoding/asn1/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/big/index.js"
import "@goscript/reflect/index.js"
import "@goscript/time/index.js"
import "@goscript/vendor/golang.org/x/crypto/cryptobyte/asn1/index.js"
import "./string.gs.ts"
import "./builder.gs.ts"

export const generalizedTimeFormatStr: string = "20060102150405Z0700"

export const defaultUTCTimeFormatStr: string = "060102150405Z0700"

export function isValidOID(oid: encoding_asn1.ObjectIdentifier): boolean {
	if ($.sliceLen((oid as encoding_asn1.ObjectIdentifier)) < 2) {
		return false
	}

	if (($.arrayIndex(oid!, 0) > 2) || (($.arrayIndex(oid!, 0) <= 1) && ($.arrayIndex(oid!, 1) >= 40))) {
		return false
	}

	for (let __goscriptRangeTarget0 = oid, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number)
		if (v < 0) {
			return false
		}
	}

	return true
}

export function String_ReadASN1Boolean(s: $.VarRef<__goscript__string.String> | null, out: $.VarRef<boolean> | null): boolean {
	let bytes: $.VarRef<__goscript__string.String> = $.varRef(null! as __goscript__string.String)
	if (!String_ReadASN1(s, bytes, 1) || ($.sliceLen((bytes.value as __goscript__string.String)) != 1)) {
		return false
	}

	switch ($.arrayIndex(bytes.value!, 0)) {
		case 0:
		{
			out!.value = false
			break
		}
		case 0xff:
		{
			out!.value = true
			break
		}
		default:
		{
			return false
			break
		}
	}

	return true
}

export function String_ReadASN1Integer(s: $.VarRef<__goscript__string.String> | null, out: any): boolean {
	{
		const __goscriptTypeSwitchValue = out
		switch (true) {
			case $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8"))) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int16"))) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32"))) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))):
				{
					let out = __goscriptTypeSwitchValue
					let i: $.VarRef<bigint> = $.varRef(0n)
					if (!String_readASN1Int64(s, i) || $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf(out))).Elem())).OverflowInt(i.value)) {
						return false
					}
					$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf(out))).Elem())).SetInt(i.value)
					return true
				}
				break
			case $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint"))) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint8"))) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint16"))) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))):
				{
					let out = __goscriptTypeSwitchValue
					let u: $.VarRef<bigint> = $.varRef(0n)
					if (!String_readASN1Uint64(s, u) || $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf(out))).Elem())).OverflowUint(u.value)) {
						return false
					}
					$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf(out))).Elem())).SetUint(u.value)
					return true
				}
				break
			case $.typeAssert<big.Int | $.VarRef<big.Int> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("big.Int")).ok:
				{
					let out: big.Int | $.VarRef<big.Int> | null = $.typeAssert<big.Int | $.VarRef<big.Int> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("big.Int")).value
					return String_readASN1BigInt(s, out)
				}
				break
			case $.typeAssert<$.VarRef<$.Slice<number>> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))).ok:
				{
					let out: $.VarRef<$.Slice<number>> | null = $.typeAssert<$.VarRef<$.Slice<number>> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))).value
					return String_readASN1Bytes(s, out)
				}
				break
			default:
				{
					let out: any = __goscriptTypeSwitchValue
					$.panic("out does not point to an integer type")
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function checkASN1Integer(bytes: $.Slice<number>): boolean {
	if ($.sliceLen(bytes) == 0) {
		// An INTEGER is encoded with at least one octet.
		return false
	}
	if ($.sliceLen(bytes) == 1) {
		return true
	}
	if ((($.arrayIndex(bytes!, 0) == 0) && ($.uint(($.arrayIndex(bytes!, 1) & 0x80), 8) == 0)) || (($.arrayIndex(bytes!, 0) == 0xff) && ($.uint(($.arrayIndex(bytes!, 1) & 0x80), 8) == 0x80))) {
		// Value is not minimally encoded.
		return false
	}
	return true
}

export let bigOne: big.Int | $.VarRef<big.Int> | null = await big.NewInt(1n)

export function __goscript_set_bigOne(__goscriptValue: big.Int | $.VarRef<big.Int> | null): void {
	bigOne = __goscriptValue
}

export function String_readASN1BigInt(s: $.VarRef<__goscript__string.String> | null, out: big.Int | $.VarRef<big.Int> | null): boolean {
	let bytes: $.VarRef<__goscript__string.String> = $.varRef(null! as __goscript__string.String)
	if (!String_ReadASN1(s, bytes, 2) || !checkASN1Integer(bytes.value)) {
		return false
	}
	if ($.uint(($.arrayIndex(bytes.value!, 0) & 0x80), 8) == 0x80) {
		// Negative number.
		let neg: $.Slice<number> = $.makeSlice<number>($.sliceLen((bytes.value as __goscript__string.String)), undefined, "byte")
		for (let __goscriptRangeTarget1 = bytes.value, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow0 = $.sliceRange(neg), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let b = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as number), 8);
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = $.uint($.uint(~b, 8), 8)
		}
		void (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as big.Int).SetBytes(neg) : big.Int.prototype.SetBytes.call(out, neg))
		void (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as big.Int).Add(out, bigOne) : big.Int.prototype.Add.call(out, out, bigOne))
		void (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as big.Int).Neg(out) : big.Int.prototype.Neg.call(out, out))
	} else {
		void (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as big.Int).SetBytes(bytes.value) : big.Int.prototype.SetBytes.call(out, bytes.value))
	}
	return true
}

export function String_readASN1Bytes(s: $.VarRef<__goscript__string.String> | null, out: $.VarRef<$.Slice<number>> | null): boolean {
	let bytes: $.VarRef<__goscript__string.String> = $.varRef(null! as __goscript__string.String)
	if (!String_ReadASN1(s, bytes, 2) || !checkASN1Integer(bytes.value)) {
		return false
	}
	if ($.uint(($.arrayIndex(bytes.value!, 0) & 0x80), 8) == 0x80) {
		return false
	}
	while (($.sliceLen((bytes.value as __goscript__string.String)) > 1) && ($.arrayIndex(bytes.value!, 0) == 0)) {
		bytes.value = ($.goSlice(bytes.value, 1, undefined) as __goscript__string.String)
	}
	out!.value = bytes.value
	return true
}

export function String_readASN1Int64(s: $.VarRef<__goscript__string.String> | null, out: $.VarRef<bigint> | null): boolean {
	let bytes: $.VarRef<__goscript__string.String> = $.varRef(null! as __goscript__string.String)
	if ((!String_ReadASN1(s, bytes, 2) || !checkASN1Integer(bytes.value)) || !asn1Signed(out, bytes.value)) {
		return false
	}
	return true
}

export function asn1Signed(out: $.VarRef<bigint> | null, n: $.Slice<number>): boolean {
	let length = $.sliceLen(n)
	if (length > 8) {
		return false
	}
	for (let __goscriptSliceWindow1 = $.sliceRange(n), i = 0; i < length; i++) {
		out!.value = $.int64Shl(out!.value, 8n)
		out!.value = $.int64Or(out!.value, $.int64(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as number)))
	}
	// Shift up and down in order to sign extend the result.
	out!.value = $.int64Shl(out!.value, $.int64(((64 - ($.uint(length, 8) * 8)) & 0xff)))
	out!.value = $.int64Shr(out!.value, $.int64(((64 - ($.uint(length, 8) * 8)) & 0xff)))
	return true
}

export function String_readASN1Uint64(s: $.VarRef<__goscript__string.String> | null, out: $.VarRef<bigint> | null): boolean {
	let bytes: $.VarRef<__goscript__string.String> = $.varRef(null! as __goscript__string.String)
	if ((!String_ReadASN1(s, bytes, 2) || !checkASN1Integer(bytes.value)) || !asn1Unsigned(out, bytes.value)) {
		return false
	}
	return true
}

export function asn1Unsigned(out: $.VarRef<bigint> | null, n: $.Slice<number>): boolean {
	let length = $.sliceLen(n)
	if ((length > 9) || ((length == 9) && ($.arrayIndex(n!, 0) != 0))) {
		// Too large for uint64.
		return false
	}
	if ($.uint(($.arrayIndex(n!, 0) & 0x80), 8) != 0) {
		// Negative number.
		return false
	}
	for (let __goscriptSliceWindow2 = $.sliceRange(n), i = 0; i < length; i++) {
		out!.value = $.uint64Shl(out!.value, 8n)
		out!.value = $.uint64Or(out!.value, $.uint64(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as number)))
	}
	return true
}

export function String_ReadASN1Int64WithTag(s: $.VarRef<__goscript__string.String> | null, out: $.VarRef<bigint> | null, tag: asn1.Tag): boolean {
	let bytes: $.VarRef<__goscript__string.String> = $.varRef(null! as __goscript__string.String)
	return (String_ReadASN1(s, bytes, tag) && checkASN1Integer(bytes.value)) && asn1Signed(out, bytes.value)
}

export function String_ReadASN1Enum(s: $.VarRef<__goscript__string.String> | null, out: $.VarRef<number> | null): boolean {
	let bytes: $.VarRef<__goscript__string.String> = $.varRef(null! as __goscript__string.String)
	let i: $.VarRef<bigint> = $.varRef(0n)
	if ((!String_ReadASN1(s, bytes, 10) || !checkASN1Integer(bytes.value)) || !asn1Signed(i, bytes.value)) {
		return false
	}
	if ($.int64($.int(i.value)) != i.value) {
		return false
	}
	out!.value = $.int(i.value)
	return true
}

export function String_readBase128Int(s: $.VarRef<__goscript__string.String> | null, out: $.VarRef<number> | null): boolean {
	let ret = 0
	for (let i = 0; $.sliceLen(($.pointerValue<__goscript__string.String>(s) as __goscript__string.String)) > 0; i++) {
		if (i == 5) {
			return false
		}
		// Avoid overflowing int on a 32-bit platform.
		// We don't want different behavior based on the architecture.
		if (ret >= 16777216) {
			return false
		}
		ret = ret << (7)
		let b = $.uint($.arrayIndex(__goscript__string.String_read(s, 1)!, 0), 8)

		// ITU-T X.690, section 8.19.2:
		// The subidentifier shall be encoded in the fewest possible octets,
		// that is, the leading octet of the subidentifier shall not have the value 0x80.
		if ((i == 0) && (b == 0x80)) {
			return false
		}

		ret = ret | ($.int(b & 0x7f))
		if ($.uint((b & 0x80), 8) == 0) {
			out!.value = ret
			return true
		}
	}
	return false
}

export function String_ReadASN1ObjectIdentifier(s: $.VarRef<__goscript__string.String> | null, out: $.VarRef<encoding_asn1.ObjectIdentifier> | null): boolean {
	let bytes: $.VarRef<__goscript__string.String> = $.varRef(null! as __goscript__string.String)
	if (!String_ReadASN1(s, bytes, 6) || ($.sliceLen((bytes.value as __goscript__string.String)) == 0)) {
		return false
	}

	// In the worst case, we get two elements from the first byte (which is
	// encoded differently) and then every varint is a single byte long.
	let components: $.Slice<number> = $.makeSlice<number>($.sliceLen((bytes.value as __goscript__string.String)) + 1, undefined, "number")

	// The first varint is 40*value1 + value2:
	// According to this packing, value1 can take the values 0, 1 and 2 only.
	// When value1 = 0 or value1 = 1, then value2 is <= 39. When value1 = 2,
	// then there are no restrictions on value2.
	let v: $.VarRef<number> = $.varRef(0)
	if (!String_readBase128Int(bytes, v)) {
		return false
	}
	if (v.value < 80) {
		$.sliceElems(components!)[$.sliceSlot(components!, 0)] = globalThis.Math.trunc(v.value / 40)
		$.sliceElems(components!)[$.sliceSlot(components!, 1)] = v.value % 40
	} else {
		$.sliceElems(components!)[$.sliceSlot(components!, 0)] = 2
		$.sliceElems(components!)[$.sliceSlot(components!, 1)] = v.value - 80
	}

	let i = 2
	for (let __goscriptSliceWindow3 = $.sliceRange(components); $.sliceLen((bytes.value as __goscript__string.String)) > 0; i++) {
		if (!String_readBase128Int(bytes, v)) {
			return false
		}
		;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] = v.value
	}
	out!.value = ($.goSlice(components, undefined, i) as encoding_asn1.ObjectIdentifier)
	return true
}

export function String_ReadASN1GeneralizedTime(s: $.VarRef<__goscript__string.String> | null, out: time.Time | $.VarRef<time.Time> | null): boolean {
	let bytes: $.VarRef<__goscript__string.String> = $.varRef(null! as __goscript__string.String)
	if (!String_ReadASN1(s, bytes, 24)) {
		return false
	}
	let t = $.bytesToString(bytes.value)
	let [res, err] = time.Parse("20060102150405Z0700", t)
	if (err != null) {
		return false
	}
	{
		let serialized = $.markAsStructValue($.cloneStructValue(res)).Format("20060102150405Z0700")
		if (!$.stringEqual(serialized, t)) {
			return false
		}
	}
	$.assignStruct($.pointerValue<time.Time>(out), res)
	return true
}

export function String_ReadASN1UTCTime(s: $.VarRef<__goscript__string.String> | null, out: time.Time | $.VarRef<time.Time> | null): boolean {
	let bytes: $.VarRef<__goscript__string.String> = $.varRef(null! as __goscript__string.String)
	if (!String_ReadASN1(s, bytes, 23)) {
		return false
	}
	let t = $.bytesToString(bytes.value)

	let formatStr = "060102150405Z0700"
	let err: $.GoError = null! as $.GoError
	let __goscriptTuple0: any = time.Parse(formatStr, t)
	let res = __goscriptTuple0[0]
	err = __goscriptTuple0[1]
	if (err != null) {
		// Fallback to minute precision if we can't parse second
		// precision. If we are following X.509 or X.690 we shouldn't
		// support this, but we do.
		formatStr = "0601021504Z0700"
		let __goscriptTuple1: any = time.Parse(formatStr, t)
		res = $.assignStruct(res, __goscriptTuple1[0])
		err = __goscriptTuple1[1]
	}
	if (err != null) {
		return false
	}

	{
		let serialized = $.markAsStructValue($.cloneStructValue(res)).Format(formatStr)
		if (!$.stringEqual(serialized, t)) {
			return false
		}
	}

	if ($.markAsStructValue($.cloneStructValue(res)).Year() >= 2050) {
		// UTCTime interprets the low order digits 50-99 as 1950-99.
		// This only applies to its use in the X.509 profile.
		// See https://tools.ietf.org/html/rfc5280#section-4.1.2.5.1
		res = $.assignStruct(res, $.markAsStructValue($.cloneStructValue(res)).AddDate(-100, 0, 0))
	}
	$.assignStruct($.pointerValue<time.Time>(out), res)
	return true
}

export function String_ReadASN1BitString(s: $.VarRef<__goscript__string.String> | null, out: encoding_asn1.BitString | $.VarRef<encoding_asn1.BitString> | null): boolean {
	const out$: encoding_asn1.BitString = out == null ? $.pointerTarget<encoding_asn1.BitString>(out) : (out as any).__isVarRef === true ? (out as any).value : (out as any).__goValue === undefined ? (out as any) : $.pointerTarget<encoding_asn1.BitString>(out)
	let bytes: $.VarRef<__goscript__string.String> = $.varRef(null! as __goscript__string.String)
	if ((!String_ReadASN1(s, bytes, 3) || ($.sliceLen((bytes.value as __goscript__string.String)) == 0)) || ((globalThis.Math.trunc(($.sliceLen((bytes.value as __goscript__string.String)) * 8) / 8)) != $.sliceLen((bytes.value as __goscript__string.String)))) {
		return false
	}

	let paddingBits = $.arrayIndex(bytes.value!, 0)
	bytes.value = ($.goSlice(bytes.value, 1, undefined) as __goscript__string.String)
	if (((paddingBits > 7) || (($.sliceLen((bytes.value as __goscript__string.String)) == 0) && (paddingBits != 0))) || (($.sliceLen((bytes.value as __goscript__string.String)) > 0) && ($.uint(($.arrayIndex(bytes.value!, $.sliceLen((bytes.value as __goscript__string.String)) - 1) & ((((((1 << paddingBits) & 0xff)) - 1) & 0xff))), 8) != 0))) {
		return false
	}

	;(out$ as encoding_asn1.BitString).BitLength = ($.sliceLen((bytes.value as __goscript__string.String)) * 8) - $.int(paddingBits);
	;(out$ as encoding_asn1.BitString).Bytes = bytes.value
	return true
}

export function String_ReadASN1BitStringAsBytes(s: $.VarRef<__goscript__string.String> | null, out: $.VarRef<$.Slice<number>> | null): boolean {
	let bytes: $.VarRef<__goscript__string.String> = $.varRef(null! as __goscript__string.String)
	if (!String_ReadASN1(s, bytes, 3) || ($.sliceLen((bytes.value as __goscript__string.String)) == 0)) {
		return false
	}

	let paddingBits = $.arrayIndex(bytes.value!, 0)
	if (paddingBits != 0) {
		return false
	}
	out!.value = $.goSlice(bytes.value, 1, undefined)
	return true
}

export function String_ReadASN1Bytes(s: $.VarRef<__goscript__string.String> | null, out: $.VarRef<$.Slice<number>> | null, tag: asn1.Tag): boolean {
	return String_ReadASN1(s, out, tag)
}

export function String_ReadASN1(s: $.VarRef<__goscript__string.String> | null, out: $.VarRef<__goscript__string.String> | null, tag: asn1.Tag): boolean {
	let t: $.VarRef<asn1.Tag> = $.varRef(0)
	if (!String_ReadAnyASN1(s, out, t) || (t.value != tag)) {
		return false
	}
	return true
}

export function String_ReadASN1Element(s: $.VarRef<__goscript__string.String> | null, out: $.VarRef<__goscript__string.String> | null, tag: asn1.Tag): boolean {
	let t: $.VarRef<asn1.Tag> = $.varRef(0)
	if (!String_ReadAnyASN1Element(s, out, t) || (t.value != tag)) {
		return false
	}
	return true
}

export function String_ReadAnyASN1(s: $.VarRef<__goscript__string.String> | null, out: $.VarRef<__goscript__string.String> | null, outTag: $.VarRef<asn1.Tag> | null): boolean {
	return String_readASN1(s, out, outTag, true)
}

export function String_ReadAnyASN1Element(s: $.VarRef<__goscript__string.String> | null, out: $.VarRef<__goscript__string.String> | null, outTag: $.VarRef<asn1.Tag> | null): boolean {
	return String_readASN1(s, out, outTag, false)
}

export function String_PeekASN1Tag(s: __goscript__string.String, tag: asn1.Tag): boolean {
	if ($.sliceLen((s as __goscript__string.String)) == 0) {
		return false
	}
	return $.uint($.arrayIndex(s!, 0), 8) == tag
}

export function String_SkipASN1(s: $.VarRef<__goscript__string.String> | null, tag: asn1.Tag): boolean {
	let unused: $.VarRef<__goscript__string.String> = $.varRef(null! as __goscript__string.String)
	return String_ReadASN1(s, unused, tag)
}

export function String_ReadOptionalASN1(s: $.VarRef<__goscript__string.String> | null, out: $.VarRef<__goscript__string.String> | null, outPresent: $.VarRef<boolean> | null, tag: asn1.Tag): boolean {
	let present = String_PeekASN1Tag($.pointerValue<__goscript__string.String>(s), tag)
	if (outPresent != null) {
		outPresent!.value = present
	}
	if (present && !String_ReadASN1(s, out, tag)) {
		return false
	}
	return true
}

export function String_SkipOptionalASN1(s: $.VarRef<__goscript__string.String> | null, tag: asn1.Tag): boolean {
	if (!String_PeekASN1Tag($.pointerValue<__goscript__string.String>(s), tag)) {
		return true
	}
	let unused: $.VarRef<__goscript__string.String> = $.varRef(null! as __goscript__string.String)
	return String_ReadASN1(s, unused, tag)
}

export function String_ReadOptionalASN1Integer(s: $.VarRef<__goscript__string.String> | null, out: any, tag: asn1.Tag, defaultValue: any): boolean {
	let present: $.VarRef<boolean> = $.varRef(false)
	let i: $.VarRef<__goscript__string.String> = $.varRef(null! as __goscript__string.String)
	if (!String_ReadOptionalASN1(s, i, present, tag)) {
		return false
	}
	if (!present.value) {
		{
			const __goscriptTypeSwitchValue = out
			switch (true) {
				case $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8"))) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int16"))) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32"))) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint"))) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint8"))) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint16"))) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32"))) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64"))) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))):
					{
						$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf(out))).Elem())).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf(defaultValue))))
					}
					break
				case $.typeAssert<big.Int | $.VarRef<big.Int> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("big.Int")).ok:
					{
						let __goscriptShadow0 = defaultValue
						{
							let __goscriptTuple2: any = $.typeAssertTuple<big.Int | $.VarRef<big.Int> | null>(__goscriptShadow0, /* @__PURE__ */ $.pointerType("big.Int"))
							let __goscriptShadow1: big.Int | $.VarRef<big.Int> | null = __goscriptTuple2[0]
							let ok = __goscriptTuple2[1]
							if (ok) {
								big.Int.prototype.Set.call(((out as any)?.__goType === "*big.Int" && (out as any).__goValue === undefined && (out as any).__isTypedNil !== true ? ((out as any) as big.Int | $.VarRef<big.Int> | null) : $.mustTypeAssert<big.Int | $.VarRef<big.Int> | null>(out, /* @__PURE__ */ $.pointerType("big.Int"))), __goscriptShadow1)
							} else {
								$.panic("out points to big.Int, but defaultValue does not")
							}
						}
					}
					break
				default:
					{
						$.panic("invalid integer type")
					}
					break
			}
		}
		return true
	}
	if (!String_ReadASN1Integer(i, out) || !__goscript__string.String_Empty(i.value)) {
		return false
	}
	return true
}

export function String_ReadOptionalASN1OctetString(s: $.VarRef<__goscript__string.String> | null, out: $.VarRef<$.Slice<number>> | null, outPresent: $.VarRef<boolean> | null, tag: asn1.Tag): boolean {
	let present: $.VarRef<boolean> = $.varRef(false)
	let child: $.VarRef<__goscript__string.String> = $.varRef(null! as __goscript__string.String)
	if (!String_ReadOptionalASN1(s, child, present, tag)) {
		return false
	}
	if (outPresent != null) {
		outPresent!.value = present.value
	}
	if (present.value) {
		let oct: $.VarRef<__goscript__string.String> = $.varRef(null! as __goscript__string.String)
		if (!String_ReadASN1(child, oct, 4) || !__goscript__string.String_Empty(child.value)) {
			return false
		}
		out!.value = oct.value
	} else {
		out!.value = null
	}
	return true
}

export function String_ReadOptionalASN1Boolean(s: $.VarRef<__goscript__string.String> | null, out: $.VarRef<boolean> | null, tag: asn1.Tag, defaultValue: boolean): boolean {
	let present: $.VarRef<boolean> = $.varRef(false)
	let child: $.VarRef<__goscript__string.String> = $.varRef(null! as __goscript__string.String)
	if (!String_ReadOptionalASN1(s, child, present, tag)) {
		return false
	}

	if (!present.value) {
		out!.value = defaultValue
		return true
	}

	return String_ReadASN1Boolean(child, out)
}

export function String_readASN1(s: $.VarRef<__goscript__string.String> | null, out: $.VarRef<__goscript__string.String> | null, outTag: $.VarRef<asn1.Tag> | null, skipHeader: boolean): boolean {
	if ($.sliceLen(($.pointerValue<__goscript__string.String>(s) as __goscript__string.String)) < 2) {
		return false
	}
	let tag = $.arrayIndex(($.pointerValue<__goscript__string.String>(s))!, 0)
	let lenByte = $.arrayIndex(($.pointerValue<__goscript__string.String>(s))!, 1)

	if ($.uint((tag & 0x1f), 8) == 0x1f) {
		// ITU-T X.690 section 8.1.2
		//
		// An identifier octet with a tag part of 0x1f indicates a high-tag-number
		// form identifier with two or more octets. We only support tags less than
		// 31 (i.e. low-tag-number form, single octet identifier).
		return false
	}

	if (outTag != null) {
		outTag!.value = $.uint(tag, 8)
	}

	// ITU-T X.690 section 8.1.3
	//
	// Bit 8 of the first length byte indicates whether the length is short- or
	// long-form.
	let length: number = 0
	let headerLen: number = 0
	if ($.uint((lenByte & 0x80), 8) == 0) {
		// Short-form length (section 8.1.3.4), encoded in bits 1-7.
		length = $.uint((($.uint(lenByte, 32) + 2) >>> 0), 32)
		headerLen = 2
	} else {
		// Long-form length (section 8.1.3.5). Bits 1-7 encode the number of octets
		// used to encode the length.
		let lenLen = $.uint(lenByte & 0x7f, 8)
		let len32: $.VarRef<number> = $.varRef(0)

		if (((lenLen == 0) || (lenLen > 4)) || ($.sliceLen(($.pointerValue<__goscript__string.String>(s) as __goscript__string.String)) < $.int($.uint(((2 + lenLen) & 0xff), 8)))) {
			return false
		}

		let lenBytes: $.VarRef<__goscript__string.String> = $.varRef((($.goSlice(($.pointerValue<__goscript__string.String>(s)), 2, ((2 + lenLen) & 0xff)) as __goscript__string.String) as __goscript__string.String))
		if (!__goscript__string.String_readUnsigned(lenBytes, len32, $.int(lenLen))) {
			return false
		}

		// ITU-T X.690 section 10.1 (DER length forms) requires encoding the length
		// with the minimum number of octets.
		if (len32.value < 128) {
			// Length should have used short-form encoding.
			return false
		}
		if ($.uint(($.uintShr(len32.value, ((((lenLen - 1) & 0xff)) * 8), 32)), 32) == 0) {
			// Leading octet is 0. Length should have been at least one byte shorter.
			return false
		}

		headerLen = $.uint(((2 + $.uint(lenLen, 32)) >>> 0), 32)
		if ($.uint((((headerLen + len32.value) >>> 0)), 32) < len32.value) {
			// Overflow.
			return false
		}
		length = $.uint(((headerLen + len32.value) >>> 0), 32)
	}

	if (($.int(length) < 0) || !__goscript__string.String_ReadBytes(s, out, $.int(length))) {
		return false
	}
	if (skipHeader && !__goscript__string.String_Skip(out, $.int(headerLen))) {
		$.panic("cryptobyte: internal error")
	}

	return true
}
