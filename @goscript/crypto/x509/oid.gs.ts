// Generated file based on oid.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes2 from "@goscript/bytes/index.js"

import * as asn1 from "@goscript/encoding/asn1/index.js"

import * as errors from "@goscript/errors/index.js"

import * as math from "@goscript/math/index.js"

import * as big from "@goscript/math/big/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/bytes/index.js"
import "@goscript/encoding/asn1/index.js"
import "@goscript/errors/index.js"
import "@goscript/math/index.js"
import "@goscript/math/big/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"

$.registerTypePackagePath("crypto/x509", ["x509.OID"])

export class OID {
	public get der(): $.Slice<number> {
		return this._fields.der
	}

	public set der(value: $.Slice<number>) {
		this._fields.der = value
	}

	public _fields: {
		der: $.Slice<number>
	}

	constructor(init?: Partial<{der?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			der: init?.der ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OID {
		return new OID(this, true)
	}

	public __goscriptAssign(source: OID): void {
		const target = this._fields
		const values = source._fields
		target.der = values.der
	}

	public AppendBinary(b: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const o = this;
		return [$.appendSlice(b, o.der, $.byteSliceHint), null]
	}

	public async AppendText(b: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const o = this;
		return [$.appendSlice(b, $.stringToBytes(await o.String()), $.byteSliceHint), null]
	}

	public Equal(other: OID): boolean {
		const oid = this;
		// There is only one possible DER encoding of
		// each unique Object Identifier.
		return bytes2.Equal(oid.der, other.der)
	}

	public EqualASN1OID(other: asn1.ObjectIdentifier): boolean {
		const oid = this;
		if ($.sliceLen((other as asn1.ObjectIdentifier)) < 2) {
			return false
		}
		let [v, offset, failed] = parseBase128Int(oid.der, 0)
		if (failed) {
			// This should never happen, since we've already parsed the OID,
			// but just in case.
			return false
		}
		if (v < 80) {
			let a = globalThis.Math.trunc(v / 40)
			let b = v % 40
			if (($.arrayIndex(other!, 0) != a) || ($.arrayIndex(other!, 1) != b)) {
				return false
			}
		} else {
			let a = 2
			let b = v - 80
			if (($.arrayIndex(other!, 0) != a) || ($.arrayIndex(other!, 1) != b)) {
				return false
			}
		}

		let i = 2
		for (let __goscriptSliceWindow0 = $.sliceRange(other); offset < $.sliceLen(oid.der); i++) {
			let __goscriptTuple0: any = parseBase128Int(oid.der, offset)
			v = __goscriptTuple0[0]
			offset = __goscriptTuple0[1]
			failed = __goscriptTuple0[2]
			if (failed) {
				// Again, shouldn't happen, since we've already parsed
				// the OID, but better safe than sorry.
				return false
			}
			if ((i >= __goscriptSliceWindow0.length) || (v != ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number))) {
				return false
			}
		}

		return i == $.sliceLen((other as asn1.ObjectIdentifier))
	}

	public MarshalBinary(): [$.Slice<number>, $.GoError] {
		const o = this;
		return o.AppendBinary(null)
	}

	public async MarshalText(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const o = this;
		return o.AppendText(null)
	}

	public async String(): globalThis.Promise<string> {
		const oid = this;
		let b: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		b.value.Grow(32)
		const valSize: number = 64
		const bitsPerByte: number = 7
		const maxValSafeShift: number = 144115188075855871
		let start: number = 0
		let val: bigint = 0n
		let numBuf: $.Slice<number> = $.makeSlice<number>(0, 21, "byte")
		let bigVal: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
		let overflow: boolean = false
		for (let __goscriptRangeTarget0 = oid.der, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let v = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as number), 8)
			let curVal = $.uint(v & 0x7F, 8)
			let valEnd = $.uint((v & 0x80), 8) == 0
			if (valEnd) {
				if (start != 0) {
					b.value.WriteByte(46)
				}
			}
			if (!overflow && (val > 144115188075855871n)) {
				if (bigVal == null) {
					bigVal = new big.Int()
				}
				bigVal = (bigVal !== null && (bigVal as any).__isVarRef !== true && (bigVal as any).__goValue === undefined ? ((bigVal as any) as big.Int).SetUint64(val) : big.Int.prototype.SetUint64.call(bigVal, val))
				overflow = true
			}
			if (overflow) {
				bigVal = big.Int.prototype.Or.call((bigVal !== null && (bigVal as any).__isVarRef !== true && (bigVal as any).__goValue === undefined ? ((bigVal as any) as big.Int).Lsh(bigVal, 7) : big.Int.prototype.Lsh.call(bigVal, bigVal, 7)), bigVal, big.NewInt($.int64(curVal)))
				if (valEnd) {
					if (start == 0) {
						b.value.WriteString("2.")
						bigVal = (bigVal !== null && (bigVal as any).__isVarRef !== true && (bigVal as any).__goValue === undefined ? ((bigVal as any) as big.Int).Sub(bigVal, big.NewInt(80n)) : big.Int.prototype.Sub.call(bigVal, bigVal, big.NewInt(80n)))
					}
					numBuf = await (bigVal !== null && (bigVal as any).__isVarRef !== true && (bigVal as any).__goValue === undefined ? ((bigVal as any) as big.Int).Append(numBuf, 10) : big.Int.prototype.Append.call(bigVal, numBuf, 10))
					b.value.Write(numBuf)
					numBuf = $.goSlice(numBuf, undefined, 0)
					val = 0n
					start = i + 1
					overflow = false
				}
				continue
			}
			val = $.uint64Shl(val, 7n)
			val = $.uint64Or(val, $.uint64(curVal))
			if (valEnd) {
				if (start == 0) {
					if (val < 80n) {
						b.value.Write(strconv.AppendUint(numBuf, $.uint64Div(val, 40n), 10))
						b.value.WriteByte(46)
						b.value.Write(strconv.AppendUint(numBuf, $.uint64Mod(val, 40n), 10))
					} else {
						b.value.WriteString("2.")
						b.value.Write(strconv.AppendUint(numBuf, $.uint64Sub(val, 80n), 10))
					}
				} else {
					b.value.Write(strconv.AppendUint(numBuf, val, 10))
				}
				val = 0n
				start = i + 1
			}
		}
		return b.value.String()
	}

	public UnmarshalBinary(b: $.Slice<number>): $.GoError {
		let o: OID | $.VarRef<OID> | null = this;
		let [oid, ok] = newOIDFromDER(bytes2.Clone(b))
		if (!ok) {
			return errInvalidOID
		}
		$.assignStruct($.pointerValue<OID>(o), oid)
		return null
	}

	public async UnmarshalText(text: $.Slice<number>): globalThis.Promise<$.GoError> {
		const o: OID | $.VarRef<OID> | null = this;
		return (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as OID).unmarshalOIDText($.bytesToString(text)) : OID.prototype.unmarshalOIDText.call(o, $.bytesToString(text)))
	}

	public toASN1OID(): [asn1.ObjectIdentifier, boolean] {
		const oid = this;
		let out: $.Slice<number> = $.makeSlice<number>(0, $.sliceLen(oid.der) + 1, "number")

		const valSize: number = 31
		const bitsPerByte: number = 7
		const maxValSafeShift: number = 16777215

		let val = 0

		for (let __goscriptRangeTarget1 = oid.der, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let v = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as number), 8)
			if (val > 16777215) {
				return [(null as asn1.ObjectIdentifier), false]
			}

			val = val << (7)
			val = val | ($.int(v & 0x7F))

			if ($.uint((v & 0x80), 8) == 0) {
				if ($.sliceLen(out) == 0) {
					if (val < 80) {
						out = $.appendOne(out, globalThis.Math.trunc(val / 40))
						out = $.appendOne(out, val % 40)
					} else {
						out = $.appendOne(out, 2)
						out = $.appendOne(out, val - 80)
					}
					val = 0
					continue
				}
				out = $.appendOne(out, val)
				val = 0
			}
		}

		return [(out as asn1.ObjectIdentifier), true]
	}

	public async unmarshalOIDText(oid: string): globalThis.Promise<$.GoError> {
		let o: OID | $.VarRef<OID> | null = this;
		// (*big.Int).SetString allows +/- signs, but we don't want
		// to allow them in the string representation of Object Identifier, so
		// reject such encodings.
		for (let __goscriptRunes0 = $.stringRunes(oid); __goscriptRunes0.next(); ) {
			const c = __goscriptRunes0.rune
			let isDigit = (c >= 48) && (c <= 57)
			if (!isDigit && (c != 46)) {
				return errInvalidOID
			}
		}

		let firstNum: string = ""
		let secondNum: string = ""

		let nextComponentExists: boolean = false
		let __goscriptTuple1: any = strings.Cut(oid, ".")
		firstNum = __goscriptTuple1[0]
		oid = __goscriptTuple1[1]
		nextComponentExists = __goscriptTuple1[2]
		if (!nextComponentExists) {
			return errInvalidOID
		}
		let __goscriptTuple2: any = strings.Cut(oid, ".")
		secondNum = __goscriptTuple2[0]
		oid = __goscriptTuple2[1]
		nextComponentExists = __goscriptTuple2[2]

		let first: big.Int | $.VarRef<big.Int> | null = big.NewInt(0n)
		let second: big.Int | $.VarRef<big.Int> | null = big.NewInt(0n)

		{
			let [, ok] = await (first !== null && (first as any).__isVarRef !== true && (first as any).__goValue === undefined ? ((first as any) as big.Int).SetString(firstNum, 10) : big.Int.prototype.SetString.call(first, firstNum, 10))
			if (!ok) {
				return errInvalidOID
			}
		}
		{
			let [, ok] = await (second !== null && (second as any).__isVarRef !== true && (second as any).__goValue === undefined ? ((second as any) as big.Int).SetString(secondNum, 10) : big.Int.prototype.SetString.call(second, secondNum, 10))
			if (!ok) {
				return errInvalidOID
			}
		}

		if (((first !== null && (first as any).__isVarRef !== true && (first as any).__goValue === undefined ? ((first as any) as big.Int).Cmp(big.NewInt(2n)) : big.Int.prototype.Cmp.call(first, big.NewInt(2n))) > 0) || (((first !== null && (first as any).__isVarRef !== true && (first as any).__goValue === undefined ? ((first as any) as big.Int).Cmp(big.NewInt(2n)) : big.Int.prototype.Cmp.call(first, big.NewInt(2n))) < 0) && ((second !== null && (second as any).__isVarRef !== true && (second as any).__goValue === undefined ? ((second as any) as big.Int).Cmp(big.NewInt(40n)) : big.Int.prototype.Cmp.call(second, big.NewInt(40n))) >= 0))) {
			return errInvalidOID
		}

		let firstComponent: big.Int | $.VarRef<big.Int> | null = await (first !== null && (first as any).__isVarRef !== true && (first as any).__goValue === undefined ? ((first as any) as big.Int).Mul(first, big.NewInt(40n)) : big.Int.prototype.Mul.call(first, first, big.NewInt(40n)))
		void (firstComponent !== null && (firstComponent as any).__isVarRef !== true && (firstComponent as any).__goValue === undefined ? ((firstComponent as any) as big.Int).Add(firstComponent, second) : big.Int.prototype.Add.call(firstComponent, firstComponent, second))

		let der: $.Slice<number> = appendBase128BigInt($.makeSlice<number>(0, 32, "byte"), firstComponent)

		while (nextComponentExists) {
			let strNum: string = ""
			let __goscriptTuple3: any = strings.Cut(oid, ".")
			strNum = __goscriptTuple3[0]
			oid = __goscriptTuple3[1]
			nextComponentExists = __goscriptTuple3[2]
			let __goscriptTuple4: any = await big.Int.prototype.SetString.call(big.NewInt(0n), strNum, 10)
			let b: big.Int | $.VarRef<big.Int> | null = __goscriptTuple4[0]
			let ok = __goscriptTuple4[1]
			if (!ok) {
				return errInvalidOID
			}
			der = appendBase128BigInt(der, b)
		}

		$.pointerValue<OID>(o).der = der
		return null
	}

	static __typeInfo = $.registerStructType(
		"x509.OID",
		() => new OID(),
		() => [$.methodSignature("AppendBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("AppendText", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Equal", [["other", "x509.OID"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("EqualASN1OID", [["other", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalBinary", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("UnmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("toASN1OID", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("unmarshalOIDText", [["oid", /* @__PURE__ */ $.basicType("string")]], ["error"], true)],
		OID,
		() => [/* @__PURE__ */ $.structField("der", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "crypto/x509" })]
	)
}

export let errInvalidOID: $.GoError = errors.New("invalid oid")

export function __goscript_set_errInvalidOID(__goscriptValue: $.GoError): void {
	errInvalidOID = __goscriptValue
}

export async function ParseOID(oid: string): globalThis.Promise<[OID, $.GoError]> {
	let o: $.VarRef<OID> = $.varRef(new OID(undefined, true))
	return [(o.value).clone(), await o.value.unmarshalOIDText(oid)]
}

export function newOIDFromDER(der: $.Slice<number>): [OID, boolean] {
	if (($.sliceLen(der) == 0) || ($.uint(($.arrayIndex(der!, $.sliceLen(der) - 1) & 0x80), 8) != 0)) {
		return [new OID(undefined, true), false]
	}

	let start = 0
	for (let __goscriptRangeTarget2 = der, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
		let v = $.uint((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as number), 8)
		// ITU-T X.690, section 8.19.2:
		// The subidentifier shall be encoded in the fewest possible octets,
		// that is, the leading octet of the subidentifier shall not have the value 0x80.
		if ((i == start) && (v == 0x80)) {
			return [new OID(undefined, true), false]
		}
		if ($.uint((v & 0x80), 8) == 0) {
			start = i + 1
		}
	}

	return [new OID({der: der}, true), true]
}

export function OIDFromInts(oid: $.Slice<bigint>): [OID, $.GoError] {
	if ((($.sliceLen(oid) < 2) || ($.arrayIndex(oid!, 0) > 2n)) || (($.arrayIndex(oid!, 0) < 2n) && ($.arrayIndex(oid!, 1) >= 40n))) {
		return [new OID(undefined, true), errInvalidOID]
	}

	let length = base128IntLength($.uint64Add(($.uint64Mul($.arrayIndex(oid!, 0), 40n)), $.arrayIndex(oid!, 1)))
	for (let __goscriptRangeTarget3 = $.goSlice(oid, 2, undefined), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as bigint)
		length = length + (base128IntLength(v))
	}

	let der: $.Slice<number> = $.makeSlice<number>(0, length, "byte")
	der = appendBase128Int(der, $.uint64Add(($.uint64Mul($.arrayIndex(oid!, 0), 40n)), $.arrayIndex(oid!, 1)))
	for (let __goscriptRangeTarget4 = $.goSlice(oid, 2, undefined), __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as bigint)
		der = appendBase128Int(der, v)
	}
	return [new OID({der: der}, true), null]
}

export function base128IntLength(n: bigint): number {
	if (n == 0n) {
		return 1
	}
	return globalThis.Math.trunc((bits.Len64(n) + 6) / 7)
}

export function appendBase128Int(dst: $.Slice<number>, n: bigint): $.Slice<number> {
	for (let i = base128IntLength(n) - 1; i >= 0; i--) {
		let o = $.uint($.uint64Shr(n, $.uint(i * 7, 64)), 8)
		o = o & (0x7f)
		if (i != 0) {
			o = o | (0x80)
		}
		dst = $.append(dst, $.uint(o, 8), $.byteSliceHint)
	}
	return dst
}

export function base128BigIntLength(n: big.Int | $.VarRef<big.Int> | null): number {
	if ((n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as big.Int).Cmp(big.NewInt(0n)) : big.Int.prototype.Cmp.call(n, big.NewInt(0n))) == 0) {
		return 1
	}
	return globalThis.Math.trunc(((n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as big.Int).BitLen() : big.Int.prototype.BitLen.call(n)) + 6) / 7)
}

export function appendBase128BigInt(dst: $.Slice<number>, n: big.Int | $.VarRef<big.Int> | null): $.Slice<number> {
	if ((n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as big.Int).Cmp(big.NewInt(0n)) : big.Int.prototype.Cmp.call(n, big.NewInt(0n))) == 0) {
		return $.append(dst, $.uint(0, 8), $.byteSliceHint)
	}

	for (let i = base128BigIntLength(n) - 1; i >= 0; i--) {
		let o = $.uint($.arrayIndex(big.Int.prototype.Bits.call(big.Int.prototype.Rsh.call(big.NewInt(0n), n, $.uint($.uint64Mul($.uint(i, 64), 7n), 64)))!, 0), 8)
		o = o & (0x7f)
		if (i != 0) {
			o = o | (0x80)
		}
		dst = $.append(dst, $.uint(o, 8), $.byteSliceHint)
	}
	return dst
}

export function parseBase128Int(bytes: $.Slice<number>, initOffset: number): [number, number, boolean] {
	let ret: number = 0
	let offset: number = 0
	let failed: boolean = false
	offset = initOffset
	let ret64: bigint = 0n
	for (let __goscriptSliceWindow1 = $.sliceRange(bytes), shifted = 0; offset < __goscriptSliceWindow1.length; shifted++) {
		// 5 * 7 bits per byte == 35 bits of data
		// Thus the representation is either non-minimal or too large for an int32
		if (shifted == 5) {
			failed = true
			return [ret, offset, failed]
		}
		ret64 = $.int64Shl(ret64, 7n)
		let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, offset)] as number)
		// integers should be minimally encoded, so the leading octet should
		// never be 0x80
		if ((shifted == 0) && (b == 0x80)) {
			failed = true
			return [ret, offset, failed]
		}
		ret64 = $.int64Or(ret64, $.int64(b & 0x7f))
		offset++
		if ($.uint((b & 0x80), 8) == 0) {
			ret = $.int(ret64)
			// Ensure that the returned value fits in an int on all platforms
			if (ret64 > 2147483647n) {
				failed = true
			}
			return [ret, offset, failed]
		}
	}
	failed = true
	return [ret, offset, failed]
}

export function OIDFromASN1OID(asn1OID: asn1.ObjectIdentifier): [OID, $.GoError] {
	let uint64OID: $.Slice<bigint> = $.makeSlice<bigint>(0, $.sliceLen((asn1OID as asn1.ObjectIdentifier)), "number")
	for (let __goscriptRangeTarget5 = asn1OID, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		let component = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as number)
		if (component < 0) {
			return [new OID(undefined, true), errors.New("x509: OID components must be non-negative")]
		}
		uint64OID = $.appendOne(uint64OID, $.uint64(component))
	}
	return OIDFromInts(uint64OID)
}
