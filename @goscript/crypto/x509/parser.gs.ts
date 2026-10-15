// Generated file based on parser.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as dsa from "@goscript/crypto/dsa/index.js"

import * as ecdh from "@goscript/crypto/ecdh/index.js"

import * as ecdsa from "@goscript/crypto/ecdsa/index.js"

import * as ed25519 from "@goscript/crypto/ed25519/index.js"

import * as mldsa from "@goscript/crypto/mldsa/index.js"

import * as rsa from "@goscript/crypto/rsa/index.js"

import * as pkix from "@goscript/crypto/x509/pkix/index.js"

import * as asn1 from "@goscript/encoding/asn1/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

import * as math from "@goscript/math/index.js"

import * as big from "@goscript/math/big/index.js"

import * as net from "@goscript/net/index.js"

import * as url from "@goscript/net/url/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as utf16 from "@goscript/unicode/utf16/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as cryptobyte from "@goscript/vendor/golang.org/x/crypto/cryptobyte/index.js"

import * as cryptobyte_asn1 from "@goscript/vendor/golang.org/x/crypto/cryptobyte/asn1/index.js"

import type * as crypto from "@goscript/crypto/index.js"

import * as elliptic from "@goscript/crypto/elliptic/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_cert_pool from "./cert_pool.gs.ts"

import * as __goscript_oid from "./oid.gs.ts"

import * as __goscript_pkcs1 from "./pkcs1.gs.ts"

import * as __goscript_root_unix from "./root_unix.gs.ts"

import * as __goscript_verify from "./verify.gs.ts"

import * as __goscript_x509 from "./x509.gs.ts"

import * as __goscript_x509_string from "./x509_string.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/crypto/dsa/index.js"
import "@goscript/crypto/ecdh/index.js"
import "@goscript/crypto/ecdsa/index.js"
import "@goscript/crypto/ed25519/index.js"
import "@goscript/crypto/mldsa/index.js"
import "@goscript/crypto/rsa/index.js"
import "@goscript/crypto/x509/pkix/index.js"
import "@goscript/encoding/asn1/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/internal/godebug/index.js"
import "@goscript/math/index.js"
import "@goscript/math/big/index.js"
import "@goscript/net/index.js"
import "@goscript/net/url/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/unicode/utf16/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/vendor/golang.org/x/crypto/cryptobyte/index.js"
import "@goscript/vendor/golang.org/x/crypto/cryptobyte/asn1/index.js"
import "@goscript/crypto/elliptic/index.js"
import "./cert_pool.gs.ts"
import "./oid.gs.ts"
import "./pkcs1.gs.ts"
import "./root_unix.gs.ts"
import "./verify.gs.ts"
import "./x509.gs.ts"
import "./x509_string.gs.ts"

export const x509v2Version: number = 1

export function isPrintable(b: number): boolean {
	return (((((((((((97 <= b) && (b <= 122)) || ((65 <= b) && (b <= 90))) || ((48 <= b) && (b <= 57))) || ((39 <= b) && (b <= 41))) || ((43 <= b) && (b <= 47))) || (b == 32)) || (b == 58)) || (b == 61)) || (b == 63)) || (b == 42)) || (b == 38)
}

export function parseASN1String(tag: cryptobyte_asn1.Tag, value: $.Slice<number>): [string, $.GoError] {
	switch (tag) {
		case cryptobyte_asn1.T61String:
		{
			let buf: $.Slice<number> = $.makeSlice<number>(0, $.sliceLen(value), "byte")
			for (let __goscriptRangeTarget0 = value, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let v = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
				// All the 1-byte UTF-8 runes map 1-1 with Latin-1.
				buf = utf8.AppendRune(buf, $.int(v, 32))
			}
			return [$.bytesToString(buf), null]
			break
		}
		case cryptobyte_asn1.PrintableString:
		{
			for (let __goscriptRangeTarget1 = value, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				let b = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as number), 8)
				if (!isPrintable(b)) {
					return ["", errors.New("invalid PrintableString")]
				}
			}
			return [$.bytesToString(value), null]
			break
		}
		case cryptobyte_asn1.UTF8String:
		{
			if (!utf8.Valid(value)) {
				return ["", errors.New("invalid UTF-8 string")]
			}
			return [$.bytesToString(value), null]
			break
		}
		case $.uint(asn1.TagBMPString, 8):
		{
			if (($.sliceLen(value) % 2) != 0) {
				return ["", errors.New("invalid BMPString")]
			}

			// Strip terminator if present.
			{
				let l: number = $.sliceLen(value)
				if (((l >= 2) && ($.arrayIndex(value!, l - 1) == 0)) && ($.arrayIndex(value!, l - 2) == 0)) {
					value = $.goSlice(value, undefined, l - 2)
				}
			}

			let s: $.Slice<number> = $.makeSlice<number>(0, globalThis.Math.trunc($.sliceLen(value) / 2), "number")
			while ($.sliceLen(value) > 0) {
				let point = $.uint(((((($.uint($.arrayIndex(value!, 0), 16) << 8) & 0xffff)) + $.uint($.arrayIndex(value!, 1), 16)) & 0xffff), 16)
				// Reject UTF-16 code points that are permanently reserved
				// noncharacters (0xfffe, 0xffff, and 0xfdd0-0xfdef) and surrogates
				// (0xd800-0xdfff).
				if ((((point == 0xfffe) || (point == 0xffff)) || ((point >= 0xfdd0) && (point <= 0xfdef))) || ((point >= 0xd800) && (point <= 0xdfff))) {
					return ["", errors.New("invalid BMPString")]
				}
				s = $.appendOne(s, $.uint(point, 16))
				value = $.goSlice(value, 2, undefined)
			}

			return [$.runesToString(utf16.Decode(s)), null]
			break
		}
		case cryptobyte_asn1.IA5String:
		{
			let s = $.bytesToString(value)
			if (__goscript_x509.isIA5String(s) != null) {
				return ["", errors.New("invalid IA5String")]
			}
			return [s, null]
			break
		}
		case $.uint(asn1.TagNumericString, 8):
		{
			for (let __goscriptRangeTarget2 = value, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let b = $.uint((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as number), 8)
				if (!(((48 <= b) && (b <= 57)) || (b == 32))) {
					return ["", errors.New("invalid NumericString")]
				}
			}
			return [$.bytesToString(value), null]
			break
		}
	}
	return ["", fmt.Errorf("unsupported string type: %v", $.namedValueInterfaceValue<any>(tag, "asn1.Tag", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))]
}

export function readASN1Any(der: $.VarRef<cryptobyte.String> | null): [any, $.GoError] {
	let fullValue: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	let valueTag: $.VarRef<cryptobyte_asn1.Tag> = $.varRef(0)
	if (!cryptobyte.String_ReadAnyASN1Element(der, fullValue, valueTag)) {
		return [null, errors.New("invalid ASN.1 element")]
	}
	switch (valueTag.value) {
		case cryptobyte_asn1.T61String:
		case cryptobyte_asn1.PrintableString:
		case cryptobyte_asn1.UTF8String:
		case $.uint(asn1.TagBMPString, 8):
		case cryptobyte_asn1.IA5String:
		case $.uint(asn1.TagNumericString, 8):
		{
			let rawValue: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
			if (!cryptobyte.String_ReadASN1(fullValue, rawValue, valueTag.value)) {
				return [null, errors.New("invalid ASN.1 element")]
			}
			return parseASN1String(valueTag.value, rawValue.value)
			break
		}
		case cryptobyte_asn1.INTEGER:
		{
			let i: $.VarRef<bigint> = $.varRef(0n)
			if (!cryptobyte.String_ReadASN1Integer(fullValue, $.interfaceValue(i, "*int64", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64"))))) {
				return [null, errors.New("invalid ASN.1 integer")]
			}
			return [$.basicInterfaceValue(i.value, "int64"), null]
			break
		}
		case cryptobyte_asn1.BIT_STRING:
		{
			let bs: $.VarRef<asn1.BitString> = $.varRef(new asn1.BitString(undefined, true))
			if (!cryptobyte.String_ReadASN1BitString(fullValue, bs)) {
				return [null, errors.New("invalid ASN.1 BIT STRING")]
			}
			return [$.interfaceValue((bs.value).clone(), "asn1.BitString", "asn1.BitString"), null]
			break
		}
		case cryptobyte_asn1.OCTET_STRING:
		{
			let s: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
			if (!cryptobyte.String_ReadASN1(fullValue, s, 4)) {
				return [null, errors.New("invalid ASN.1 OCTET STRING")]
			}
			return [$.interfaceValue(s.value, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), null]
			break
		}
		case cryptobyte_asn1.OBJECT_IDENTIFIER:
		{
			let oid: $.VarRef<asn1.ObjectIdentifier> = $.varRef(null! as asn1.ObjectIdentifier)
			if (!cryptobyte.String_ReadASN1ObjectIdentifier(fullValue, oid)) {
				return [null, errors.New("invalid ASN.1 OBJECT IDENTIFIER")]
			}
			return [$.namedValueInterfaceValue<any>(oid.value, "asn1.ObjectIdentifier", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), null]
			break
		}
		case cryptobyte_asn1.UTCTime:
		case cryptobyte_asn1.GeneralizedTime:
		{
			let [out, err] = readASN1Time(fullValue)
			return [$.interfaceValue($.markAsStructValue($.cloneStructValue(out)), "time.Time", "time.Time"), err]
			break
		}
		case cryptobyte_asn1.BOOLEAN:
		{
			let b: $.VarRef<boolean> = $.varRef(false)
			if (!cryptobyte.String_ReadASN1Boolean(fullValue, b)) {
				return [null, errors.New("invalid ASN.1 BOOLEAN")]
			}
			return [b.value, null]
			break
		}
		case cryptobyte_asn1.NULL:
		{
			return [null, null]
			break
		}
		default:
		{
			let v: asn1.RawValue = new asn1.RawValue(undefined, true)
			v.Class = $.int($.uintShr(valueTag.value, 6, 8))
			v.IsCompound = $.uint((valueTag.value & 0x20), 8) == 0x20
			v.Tag = $.int(valueTag.value & 0x1f)
			v.FullBytes = fullValue.value
			if (!cryptobyte.String_ReadAnyASN1(fullValue, $.fieldRef(v._fields, "Bytes"), valueTag)) {
				return [null, errors.New("invalid ASN.1 element")]
			}
			return [$.interfaceValue((v).clone(), "asn1.RawValue", "asn1.RawValue"), null]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function parseName(__goscriptParam0: cryptobyte.String): [$.VarRef<pkix.RDNSequence> | null, $.GoError] {
	let raw: $.VarRef<cryptobyte.String> = $.varRef(__goscriptParam0)
	if (!cryptobyte.String_ReadASN1(raw, raw, 48)) {
		return [null, errors.New("x509: invalid RDNSequence")]
	}

	let rdnSeq: $.VarRef<pkix.RDNSequence> = $.varRef(null! as pkix.RDNSequence)
	while (!cryptobyte.String_Empty(raw.value)) {
		let rdnSet: pkix.RelativeDistinguishedNameSET = null! as pkix.RelativeDistinguishedNameSET
		let _set: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
		if (!cryptobyte.String_ReadASN1(raw, _set, 49)) {
			return [null, errors.New("x509: invalid RDNSequence")]
		}
		while (!cryptobyte.String_Empty(_set.value)) {
			let atav: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
			if (!cryptobyte.String_ReadASN1(_set, atav, 48)) {
				return [null, errors.New("x509: invalid RDNSequence: invalid attribute")]
			}
			let attr: pkix.AttributeTypeAndValue = new pkix.AttributeTypeAndValue(undefined, true)
			if (!cryptobyte.String_ReadASN1ObjectIdentifier(atav, $.fieldRef(attr._fields, "Type"))) {
				return [null, errors.New("x509: invalid RDNSequence: invalid attribute type")]
			}
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple0: any = readASN1Any(atav)
			attr.Value = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
			if (err != null) {
				return [null, fmt.Errorf("x509: invalid RDNSequence: invalid attribute value: %s", (err as any))]
			}
			rdnSet = ($.appendOne((rdnSet as pkix.RelativeDistinguishedNameSET), (attr).clone()) as pkix.RelativeDistinguishedNameSET)
		}

		rdnSeq.value = ($.appendOne((rdnSeq.value as pkix.RDNSequence), (rdnSet as pkix.RelativeDistinguishedNameSET), $.appendZeros.nil) as pkix.RDNSequence)
	}

	return [rdnSeq, null]
}

export function parseAI(__goscriptParam1: cryptobyte.String): [pkix.AlgorithmIdentifier, $.GoError] {
	let der: $.VarRef<cryptobyte.String> = $.varRef(__goscriptParam1)
	let ai = new pkix.AlgorithmIdentifier(undefined, true)
	if (!cryptobyte.String_ReadASN1ObjectIdentifier(der, $.fieldRef(ai._fields, "Algorithm"))) {
		return [(ai).clone(), errors.New("x509: malformed OID")]
	}
	if (cryptobyte.String_Empty(der.value)) {
		return [(ai).clone(), null]
	}
	let params: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	let tag: $.VarRef<cryptobyte_asn1.Tag> = $.varRef(0)
	if (!cryptobyte.String_ReadAnyASN1Element(der, params, tag)) {
		return [(ai).clone(), errors.New("x509: malformed parameters")]
	}
	ai.Parameters.Tag = $.int(tag.value)
	ai.Parameters.FullBytes = params.value
	return [(ai).clone(), null]
}

export function readASN1Time(der: $.VarRef<cryptobyte.String> | null): [time.Time, $.GoError] {
	let t: $.VarRef<time.Time> = $.varRef($.markAsStructValue(new time.Time()))
	switch ((true as boolean)) {
		case cryptobyte.String_PeekASN1Tag($.pointerValue<cryptobyte.String>(der), 23):
		{
			if (!cryptobyte.String_ReadASN1UTCTime(der, t)) {
				return [$.markAsStructValue($.cloneStructValue(t.value)), errors.New("x509: malformed UTCTime")]
			}
			break
		}
		case cryptobyte.String_PeekASN1Tag($.pointerValue<cryptobyte.String>(der), 24):
		{
			if (!cryptobyte.String_ReadASN1GeneralizedTime(der, t)) {
				return [$.markAsStructValue($.cloneStructValue(t.value)), errors.New("x509: malformed GeneralizedTime")]
			}
			break
		}
		default:
		{
			return [$.markAsStructValue($.cloneStructValue(t.value)), errors.New("x509: unsupported time format")]
			break
		}
	}
	return [$.markAsStructValue($.cloneStructValue(t.value)), null]
}

export function parseValidity(__goscriptParam2: cryptobyte.String): [time.Time, time.Time, $.GoError] {
	let der: $.VarRef<cryptobyte.String> = $.varRef(__goscriptParam2)
	let [notBefore, err] = readASN1Time(der)
	if (err != null) {
		return [$.markAsStructValue(new time.Time()), $.markAsStructValue(new time.Time()), err]
	}
	let __goscriptTuple1: any = readASN1Time(der)
	let notAfter = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		return [$.markAsStructValue(new time.Time()), $.markAsStructValue(new time.Time()), err]
	}

	return [$.markAsStructValue($.cloneStructValue(notBefore)), $.markAsStructValue($.cloneStructValue(notAfter)), null]
}

export function parseExtension(__goscriptParam3: cryptobyte.String): [pkix.Extension, $.GoError] {
	let der: $.VarRef<cryptobyte.String> = $.varRef(__goscriptParam3)
	let ext: pkix.Extension = new pkix.Extension(undefined, true)
	if (!cryptobyte.String_ReadASN1ObjectIdentifier(der, $.fieldRef(ext._fields, "Id"))) {
		return [(ext).clone(), errors.New("x509: malformed extension OID field")]
	}
	if (cryptobyte.String_PeekASN1Tag(der.value, 1)) {
		if (!cryptobyte.String_ReadASN1Boolean(der, $.fieldRef(ext._fields, "Critical"))) {
			return [(ext).clone(), errors.New("x509: malformed extension critical field")]
		}
	}
	let val: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	if (!cryptobyte.String_ReadASN1(der, val, 4)) {
		return [(ext).clone(), errors.New("x509: malformed extension value field")]
	}
	ext.Value = val.value
	return [(ext).clone(), null]
}

export async function parsePublicKey(keyData: __goscript_x509.publicKeyInfo | $.VarRef<__goscript_x509.publicKeyInfo> | null): globalThis.Promise<[any, $.GoError]> {
	const keyData$: __goscript_x509.publicKeyInfo = keyData == null ? $.pointerTarget<__goscript_x509.publicKeyInfo>(keyData) : (keyData as any).__isVarRef === true ? (keyData as any).value : (keyData as any).__goValue === undefined ? (keyData as any) : $.pointerTarget<__goscript_x509.publicKeyInfo>(keyData)
	let oid: asn1.ObjectIdentifier = ((keyData$ as __goscript_x509.publicKeyInfo).Algorithm.Algorithm as asn1.ObjectIdentifier)
	let params = ((keyData$ as __goscript_x509.publicKeyInfo).Algorithm.Parameters).clone()
	let data: $.Slice<number> = $.markAsStructValue($.cloneStructValue((keyData$ as __goscript_x509.publicKeyInfo).PublicKey)).RightAlign()
	switch ((true as boolean)) {
		case asn1.ObjectIdentifier_Equal(oid, (__goscript_x509.oidPublicKeyRSA as asn1.ObjectIdentifier)):
		{
			if (!bytes.Equal(params.FullBytes, asn1.__goscript_get_NullBytes())) {
				return [null, errors.New("x509: RSA key missing NULL parameters")]
			}

			let der: $.VarRef<cryptobyte.String> = $.varRef(((data as cryptobyte.String) as cryptobyte.String))
			let p: __goscript_pkcs1.pkcs1PublicKey | $.VarRef<__goscript_pkcs1.pkcs1PublicKey> | null = new __goscript_pkcs1.pkcs1PublicKey({N: new big.Int()})
			let p$: __goscript_pkcs1.pkcs1PublicKey = p == null ? $.pointerTarget<__goscript_pkcs1.pkcs1PublicKey>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<__goscript_pkcs1.pkcs1PublicKey>(p)
			if (!cryptobyte.String_ReadASN1(der, der, 48)) {
				return [null, errors.New("x509: invalid RSA public key")]
			}
			if (!cryptobyte.String_ReadASN1Integer(der, $.interfaceValue((p$ as __goscript_pkcs1.pkcs1PublicKey).N, "*big.Int", /* @__PURE__ */ $.pointerType("big.Int")))) {
				return [null, errors.New("x509: invalid RSA modulus")]
			}
			if (!cryptobyte.String_ReadASN1Integer(der, $.interfaceValue($.fieldRef((p$ as __goscript_pkcs1.pkcs1PublicKey)._fields, "E"), "*int", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))))) {
				return [null, errors.New("x509: invalid RSA public exponent")]
			}

			if (big.Int.prototype.Sign.call((p$ as __goscript_pkcs1.pkcs1PublicKey).N) <= 0) {
				return [null, errors.New("x509: RSA modulus is not a positive number")]
			}
			if ((p$ as __goscript_pkcs1.pkcs1PublicKey).E <= 0) {
				return [null, errors.New("x509: RSA public exponent is not a positive number")]
			}

			let pub: rsa.PublicKey | $.VarRef<rsa.PublicKey> | null = new rsa.PublicKey({E: (p$ as __goscript_pkcs1.pkcs1PublicKey).E, N: (p$ as __goscript_pkcs1.pkcs1PublicKey).N})
			return [$.interfaceValue(pub, "*rsa.PublicKey", /* @__PURE__ */ $.pointerType("rsa.PublicKey")), null]
			break
		}
		case asn1.ObjectIdentifier_Equal(oid, (__goscript_x509.oidPublicKeyECDSA as asn1.ObjectIdentifier)):
		{
			let paramsDer: $.VarRef<cryptobyte.String> = $.varRef(((params.FullBytes as cryptobyte.String) as cryptobyte.String))
			let namedCurveOID: $.VarRef<asn1.ObjectIdentifier> | null = $.varRef<asn1.ObjectIdentifier>(null! as asn1.ObjectIdentifier)
			if (!cryptobyte.String_ReadASN1ObjectIdentifier(paramsDer, namedCurveOID)) {
				return [null, errors.New("x509: invalid ECDSA parameters")]
			}
			let namedCurve = await __goscript_x509.namedCurveFromOID(($.pointerValue<asn1.ObjectIdentifier>(namedCurveOID) as asn1.ObjectIdentifier))
			if (namedCurve == null) {
				return [null, errors.New("x509: unsupported elliptic curve")]
			}
			const __goscriptReturn1 = await ecdsa.ParseUncompressedPublicKey(namedCurve, data)
			return [$.interfaceValue(__goscriptReturn1[0], "*ecdsa.PublicKey", /* @__PURE__ */ $.pointerType("ecdsa.PublicKey")), __goscriptReturn1[1]]
			break
		}
		case asn1.ObjectIdentifier_Equal(oid, (__goscript_x509.oidPublicKeyEd25519 as asn1.ObjectIdentifier)):
		{
			if ($.sliceLen(params.FullBytes) != 0) {
				return [null, errors.New("x509: Ed25519 key encoded with illegal parameters")]
			}
			if ($.sliceLen(data) != 32) {
				return [null, errors.New("x509: wrong Ed25519 public key size")]
			}
			return [$.namedValueInterfaceValue<any>((data as ed25519.PublicKey), "ed25519.PublicKey", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8()), null]
			break
		}
		case asn1.ObjectIdentifier_Equal(oid, (__goscript_x509.oidPublicKeyMLDSA44 as asn1.ObjectIdentifier)):
		case asn1.ObjectIdentifier_Equal(oid, (__goscript_x509.oidPublicKeyMLDSA65 as asn1.ObjectIdentifier)):
		case asn1.ObjectIdentifier_Equal(oid, (__goscript_x509.oidPublicKeyMLDSA87 as asn1.ObjectIdentifier)):
		{
			if ($.sliceLen(params.FullBytes) != 0) {
				return [null, errors.New("x509: ML-DSA key encoded with illegal parameters")]
			}
			let [__goscriptShadow0, ok] = __goscript_x509.mldsaParametersFromOID((oid as asn1.ObjectIdentifier))
			if (!ok) {
				return [null, errors.New("x509: unsupported ML-DSA parameters")]
			}
			const __goscriptReturn2 = mldsa.NewPublicKey(__goscriptShadow0, data)
			return [$.interfaceValue(__goscriptReturn2[0], "*mldsa.PublicKey", /* @__PURE__ */ $.pointerType("mldsa.PublicKey")), __goscriptReturn2[1]]
			break
		}
		case asn1.ObjectIdentifier_Equal(oid, (__goscript_x509.oidPublicKeyX25519 as asn1.ObjectIdentifier)):
		{
			if ($.sliceLen(params.FullBytes) != 0) {
				return [null, errors.New("x509: X25519 key encoded with illegal parameters")]
			}
			const __goscriptReturn3 = await $.pointerValue<Exclude<ecdh.Curve, null>>(ecdh.X25519()).NewPublicKey(data)
			return [$.interfaceValue(__goscriptReturn3[0], "*ecdh.PublicKey", /* @__PURE__ */ $.pointerType("ecdh.PublicKey")), __goscriptReturn3[1]]
			break
		}
		case asn1.ObjectIdentifier_Equal(oid, (__goscript_x509.oidPublicKeyDSA as asn1.ObjectIdentifier)):
		{
			let der: $.VarRef<cryptobyte.String> = $.varRef(((data as cryptobyte.String) as cryptobyte.String))
			let y: big.Int | $.VarRef<big.Int> | null = new big.Int()
			if (!cryptobyte.String_ReadASN1Integer(der, $.interfaceValue(y, "*big.Int", /* @__PURE__ */ $.pointerType("big.Int")))) {
				return [null, errors.New("x509: invalid DSA public key")]
			}
			let pub: dsa.PublicKey | $.VarRef<dsa.PublicKey> | null = new dsa.PublicKey({Y: y, Parameters: new dsa.Parameters({P: new big.Int(), Q: new big.Int(), G: new big.Int()}, true)})
			let pub$: dsa.PublicKey = pub == null ? $.pointerTarget<dsa.PublicKey>(pub) : (pub as any).__isVarRef === true ? (pub as any).value : (pub as any).__goValue === undefined ? (pub as any) : $.pointerTarget<dsa.PublicKey>(pub)
			let paramsDer: $.VarRef<cryptobyte.String> = $.varRef(((params.FullBytes as cryptobyte.String) as cryptobyte.String))
			if (((!cryptobyte.String_ReadASN1(paramsDer, paramsDer, 48) || !cryptobyte.String_ReadASN1Integer(paramsDer, $.interfaceValue((pub$ as dsa.PublicKey).Parameters.P, "*big.Int", /* @__PURE__ */ $.pointerType("big.Int")))) || !cryptobyte.String_ReadASN1Integer(paramsDer, $.interfaceValue((pub$ as dsa.PublicKey).Parameters.Q, "*big.Int", /* @__PURE__ */ $.pointerType("big.Int")))) || !cryptobyte.String_ReadASN1Integer(paramsDer, $.interfaceValue((pub$ as dsa.PublicKey).Parameters.G, "*big.Int", /* @__PURE__ */ $.pointerType("big.Int")))) {
				return [null, errors.New("x509: invalid DSA parameters")]
			}
			if ((((big.Int.prototype.Sign.call((pub$ as dsa.PublicKey).Y) <= 0) || (big.Int.prototype.Sign.call((pub$ as dsa.PublicKey).Parameters.P) <= 0)) || (big.Int.prototype.Sign.call((pub$ as dsa.PublicKey).Parameters.Q) <= 0)) || (big.Int.prototype.Sign.call((pub$ as dsa.PublicKey).Parameters.G) <= 0)) {
				return [null, errors.New("x509: zero or negative DSA parameter")]
			}
			return [$.interfaceValue(pub, "*dsa.PublicKey", /* @__PURE__ */ $.pointerType("dsa.PublicKey")), null]
			break
		}
		default:
		{
			return [null, errors.New("x509: unknown public key algorithm")]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function parseKeyUsageExtension(__goscriptParam4: cryptobyte.String): [__goscript_x509.KeyUsage, $.GoError] {
	let der: $.VarRef<cryptobyte.String> = $.varRef(__goscriptParam4)
	let usageBits: $.VarRef<asn1.BitString> = $.varRef(new asn1.BitString(undefined, true))
	if (!cryptobyte.String_ReadASN1BitString(der, usageBits)) {
		return [0, errors.New("x509: invalid key usage")]
	}

	let usage: number = 0
	for (let i = 0; i < 9; i++) {
		if (usageBits.value.At(i) != 0) {
			usage = usage | (1 << $.uint(i, 64))
		}
	}
	return [$.int(usage), null]
}

export function parseBasicConstraintsExtension(__goscriptParam5: cryptobyte.String): [boolean, number, $.GoError] {
	let der: $.VarRef<cryptobyte.String> = $.varRef(__goscriptParam5)
	let isCA: $.VarRef<boolean> = $.varRef(false)
	if (!cryptobyte.String_ReadASN1(der, der, 48)) {
		return [false, 0, errors.New("x509: invalid basic constraints")]
	}
	if (cryptobyte.String_PeekASN1Tag(der.value, 1)) {
		if (!cryptobyte.String_ReadASN1Boolean(der, isCA)) {
			return [false, 0, errors.New("x509: invalid basic constraints")]
		}
	}

	let maxPathLen = -1
	if (cryptobyte.String_PeekASN1Tag(der.value, 2)) {
		let mpl: $.VarRef<number> = $.varRef(0)
		if (!cryptobyte.String_ReadASN1Integer(der, $.interfaceValue(mpl, "*uint", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint")))) || (mpl.value > $.uint("9223372036854775807", 64))) {
			return [false, 0, errors.New("x509: invalid basic constraints")]
		}
		maxPathLen = $.int(mpl.value)
	}

	return [isCA.value, maxPathLen, null]
}

export async function forEachSAN(__goscriptParam6: cryptobyte.String, callback: ((tag: number, data: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
	let der: $.VarRef<cryptobyte.String> = $.varRef(__goscriptParam6)
	if (!cryptobyte.String_ReadASN1(der, der, 48)) {
		return errors.New("x509: invalid subject alternative names")
	}
	while (!cryptobyte.String_Empty(der.value)) {
		let san: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
		let tag: $.VarRef<cryptobyte_asn1.Tag> = $.varRef(0)
		if (!cryptobyte.String_ReadAnyASN1(der, san, tag)) {
			return errors.New("x509: invalid subject alternative name")
		}
		{
			let err = (__goscriptAwait = callback!($.int(tag.value ^ 0x80), san.value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
	}

	return null
}

export async function parseSANExtension(der: cryptobyte.String): globalThis.Promise<[$.Slice<string>, $.Slice<string>, $.Slice<net.IP>, $.Slice<url.URL | $.VarRef<url.URL> | null>, $.GoError]> {
	let dnsNames: $.Slice<string> = null! as $.Slice<string>
	let emailAddresses: $.Slice<string> = null! as $.Slice<string>
	let ipAddresses: $.Slice<net.IP> = null! as $.Slice<net.IP>
	let uris: $.Slice<url.URL | $.VarRef<url.URL> | null> = null! as $.Slice<url.URL | $.VarRef<url.URL> | null>
	let err: $.GoError = null! as $.GoError
	err = await forEachSAN((der as cryptobyte.String), $.functionValue((tag: number, data: $.Slice<number>): $.GoError => {
		switch (tag) {
			case 1:
			{
				let email = $.bytesToString(data)
				{
					let __goscriptShadow1 = __goscript_x509.isIA5String(email)
					if (__goscriptShadow1 != null) {
						return errors.New("x509: SAN rfc822Name is malformed")
					}
				}
				emailAddresses = $.appendOne(emailAddresses, email)
				break
			}
			case 2:
			{
				let name = $.bytesToString(data)
				{
					let __goscriptShadow2 = __goscript_x509.isIA5String(name)
					if (__goscriptShadow2 != null) {
						return errors.New("x509: SAN dNSName is malformed")
					}
				}
				dnsNames = $.appendOne(dnsNames, name)
				break
			}
			case 6:
			{
				let uriStr = $.bytesToString(data)
				{
					let __goscriptShadow3 = __goscript_x509.isIA5String(uriStr)
					if (__goscriptShadow3 != null) {
						return errors.New("x509: SAN uniformResourceIdentifier is malformed")
					}
				}
				let __goscriptTuple2: any = url.Parse(uriStr)
				let uri: url.URL | $.VarRef<url.URL> | null = __goscriptTuple2[0]
				let __goscriptShadow4 = __goscriptTuple2[1]
				let uri$: url.URL = uri == null ? $.pointerTarget<url.URL>(uri) : (uri as any).__isVarRef === true ? (uri as any).value : (uri as any).__goValue === undefined ? (uri as any) : $.pointerTarget<url.URL>(uri)
				if (__goscriptShadow4 != null) {
					return fmt.Errorf("x509: cannot parse URI %q: %s", uriStr, (__goscriptShadow4 as any))
				}
				if (($.stringLen((uri$ as url.URL).Host) > 0) && !domainNameValid((uri$ as url.URL).Host, false)) {
					return fmt.Errorf("x509: cannot parse URI %q: invalid domain", uriStr)
				}
				uris = $.appendOne(uris, uri, $.appendZeros.nil)
				break
			}
			case 7:
			{
				switch ($.sliceLen(data)) {
					case net.IPv6len:
					{
						if (net.IP_To4((data as net.IP)) != null) {
							return errors.New("x509: SAN iPAddress contains IPv4-mapped IPv6 address")
						}
						ipAddresses = $.appendOne(ipAddresses, (data as net.IP), $.appendZeros.nil)
						break
					}
					case net.IPv4len:
					{
						ipAddresses = $.appendOne(ipAddresses, (data as net.IP), $.appendZeros.nil)
						break
					}
					default:
					{
						return errors.New($.concatString("x509: cannot parse IP address of length ", strconv.Itoa($.sliceLen(data))))
						break
					}
				}
				break
			}
		}

		return null
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo)))

	return [dnsNames, emailAddresses, ipAddresses, uris, err]
}

export function parseAuthorityKeyIdentifier(e: pkix.Extension): [$.Slice<number>, $.GoError] {
	// RFC 5280, Section 4.2.1.1
	if (e.Critical) {
		// Conforming CAs MUST mark this extension as non-critical
		return [null, errors.New("x509: authority key identifier incorrectly marked critical")]
	}
	let val: $.VarRef<cryptobyte.String> = $.varRef(((e.Value as cryptobyte.String) as cryptobyte.String))
	let akid: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	if (!cryptobyte.String_ReadASN1(val, akid, 48)) {
		return [null, errors.New("x509: invalid authority key identifier")]
	}
	if (cryptobyte.String_PeekASN1Tag(akid.value, cryptobyte_asn1.Tag_ContextSpecific(0))) {
		if (!cryptobyte.String_ReadASN1(akid, akid, cryptobyte_asn1.Tag_ContextSpecific(0))) {
			return [null, errors.New("x509: invalid authority key identifier")]
		}
		return [akid.value, null]
	}
	return [null, null]
}

export function parseExtKeyUsageExtension(__goscriptParam7: cryptobyte.String): [$.Slice<__goscript_x509.ExtKeyUsage>, $.Slice<asn1.ObjectIdentifier>, $.GoError] {
	let der: $.VarRef<cryptobyte.String> = $.varRef(__goscriptParam7)
	let extKeyUsages: $.Slice<__goscript_x509.ExtKeyUsage> = null! as $.Slice<__goscript_x509.ExtKeyUsage>
	let unknownUsages: $.Slice<asn1.ObjectIdentifier> = null! as $.Slice<asn1.ObjectIdentifier>
	if (!cryptobyte.String_ReadASN1(der, der, 48)) {
		return [null, null, errors.New("x509: invalid extended key usages")]
	}
	while (!cryptobyte.String_Empty(der.value)) {
		let eku: $.VarRef<asn1.ObjectIdentifier> = $.varRef(null! as asn1.ObjectIdentifier)
		if (!cryptobyte.String_ReadASN1ObjectIdentifier(der, eku)) {
			return [null, null, errors.New("x509: invalid extended key usages")]
		}
		{
			let [extKeyUsage, ok] = __goscript_x509.extKeyUsageFromOID((eku.value as asn1.ObjectIdentifier))
			if (ok) {
				extKeyUsages = $.appendOne(extKeyUsages, extKeyUsage)
			} else {
				unknownUsages = $.appendOne(unknownUsages, (eku.value as asn1.ObjectIdentifier), $.appendZeros.nil)
			}
		}
	}
	return [extKeyUsages, unknownUsages, null]
}

export function parseCertificatePoliciesExtension(__goscriptParam8: cryptobyte.String): [$.Slice<__goscript_oid.OID>, $.GoError] {
	let der: $.VarRef<cryptobyte.String> = $.varRef(__goscriptParam8)
	let oids: $.Slice<__goscript_oid.OID> = null! as $.Slice<__goscript_oid.OID>
	let seenOIDs: globalThis.Map<string, boolean> | null = $.makeMap<string, boolean>([])
	if (!cryptobyte.String_ReadASN1(der, der, 48)) {
		return [null, errors.New("x509: invalid certificate policies")]
	}
	while (!cryptobyte.String_Empty(der.value)) {
		let cp: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
		let OIDBytes: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
		if (!cryptobyte.String_ReadASN1(der, cp, 48) || !cryptobyte.String_ReadASN1(cp, OIDBytes, 6)) {
			return [null, errors.New("x509: invalid certificate policies")]
		}
		if ($.mapGet<string, boolean, boolean>(seenOIDs, $.bytesToString(OIDBytes.value), false)[0]) {
			return [null, errors.New("x509: invalid certificate policies")]
		}
		$.mapSet(seenOIDs, $.bytesToString(OIDBytes.value), true)
		let [oid, ok] = __goscript_oid.newOIDFromDER(OIDBytes.value)
		if (!ok) {
			return [null, errors.New("x509: invalid certificate policies")]
		}
		oids = $.appendOne(oids, (oid).clone())
	}
	return [oids, null]
}

export function isValidIPMask(mask: $.Slice<number>): boolean {
	let seenZero = false

	for (let __goscriptRangeTarget3 = mask, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let b = $.uint((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as number), 8)
		if (seenZero) {
			if (b != 0) {
				return false
			}

			continue
		}

		switch (b) {
			case 0x00:
			case 0x80:
			case 0xc0:
			case 0xe0:
			case 0xf0:
			case 0xf8:
			case 0xfc:
			case 0xfe:
			{
				seenZero = true
				break
			}
			case 0xff:
			{
				break
			}
			default:
			{
				return false
				break
			}
		}
	}

	return true
}

export async function parseNameConstraintsExtension(out: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, e: pkix.Extension): globalThis.Promise<[boolean, $.GoError]> {
	let unhandled: boolean = false
	let err: $.GoError = null! as $.GoError
	const out$: __goscript_x509.Certificate = out == null ? $.pointerTarget<__goscript_x509.Certificate>(out) : (out as any).__isVarRef === true ? (out as any).value : (out as any).__goValue === undefined ? (out as any) : $.pointerTarget<__goscript_x509.Certificate>(out)
	// RFC 5280, 4.2.1.10

	// NameConstraints ::= SEQUENCE {
	//      permittedSubtrees       [0]     GeneralSubtrees OPTIONAL,
	//      excludedSubtrees        [1]     GeneralSubtrees OPTIONAL }
	//
	// GeneralSubtrees ::= SEQUENCE SIZE (1..MAX) OF GeneralSubtree
	//
	// GeneralSubtree ::= SEQUENCE {
	//      base                    GeneralName,
	//      minimum         [0]     BaseDistance DEFAULT 0,
	//      maximum         [1]     BaseDistance OPTIONAL }
	//
	// BaseDistance ::= INTEGER (0..MAX)

	let outer: $.VarRef<cryptobyte.String> = $.varRef(((e.Value as cryptobyte.String) as cryptobyte.String))
	let toplevel: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	let permitted: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	let excluded: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	let havePermitted: $.VarRef<boolean> = $.varRef(false)
	let haveExcluded: $.VarRef<boolean> = $.varRef(false)
	if ((((!cryptobyte.String_ReadASN1(outer, toplevel, 48) || !cryptobyte.String_Empty(outer.value)) || !cryptobyte.String_ReadOptionalASN1(toplevel, permitted, havePermitted, cryptobyte_asn1.Tag_Constructed(cryptobyte_asn1.Tag_ContextSpecific(0)))) || !cryptobyte.String_ReadOptionalASN1(toplevel, excluded, haveExcluded, cryptobyte_asn1.Tag_Constructed(cryptobyte_asn1.Tag_ContextSpecific(1)))) || !cryptobyte.String_Empty(toplevel.value)) {
		return [false, errors.New("x509: invalid NameConstraints extension")]
	}

	if ((!havePermitted.value && !haveExcluded.value) || (($.sliceLen((permitted.value as cryptobyte.String)) == 0) && ($.sliceLen((excluded.value as cryptobyte.String)) == 0))) {
		// From RFC 5280, Section 4.2.1.10:
		//   “either the permittedSubtrees field
		//   or the excludedSubtrees MUST be
		//   present”
		return [false, errors.New("x509: empty name constraints extension")]
	}

	let getValues: ((subtrees: cryptobyte.String) => [$.Slice<string>, $.Slice<net.IPNet | $.VarRef<net.IPNet> | null>, $.Slice<string>, $.Slice<string>, $.GoError] | globalThis.Promise<[$.Slice<string>, $.Slice<net.IPNet | $.VarRef<net.IPNet> | null>, $.Slice<string>, $.Slice<string>, $.GoError]>) | null = $.functionValue(async (__goscriptParam9: cryptobyte.String): globalThis.Promise<[$.Slice<string>, $.Slice<net.IPNet | $.VarRef<net.IPNet> | null>, $.Slice<string>, $.Slice<string>, $.GoError]> => {
		let subtrees: $.VarRef<cryptobyte.String> = $.varRef(__goscriptParam9)
		let dnsNames: $.Slice<string> = null! as $.Slice<string>
		let ips: $.Slice<net.IPNet | $.VarRef<net.IPNet> | null> = null! as $.Slice<net.IPNet | $.VarRef<net.IPNet> | null>
		let emails: $.Slice<string> = null! as $.Slice<string>
		let uriDomains: $.Slice<string> = null! as $.Slice<string>
		let err: $.GoError = null! as $.GoError
		while (!cryptobyte.String_Empty(subtrees.value)) {
			let seq: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
			let value: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
			let tag: $.VarRef<cryptobyte_asn1.Tag> = $.varRef(0)
			if (!cryptobyte.String_ReadASN1(subtrees, seq, 48) || !cryptobyte.String_ReadAnyASN1(seq, value, tag)) {
				return [null, null, null, null, fmt.Errorf("x509: invalid NameConstraints extension")]
			}

			let dnsTag: cryptobyte_asn1.Tag = cryptobyte_asn1.Tag_ContextSpecific(2)
			let emailTag: cryptobyte_asn1.Tag = cryptobyte_asn1.Tag_ContextSpecific(1)
			let ipTag: cryptobyte_asn1.Tag = cryptobyte_asn1.Tag_ContextSpecific(7)
			let uriTag: cryptobyte_asn1.Tag = cryptobyte_asn1.Tag_ContextSpecific(6)

			switch (tag.value) {
				case dnsTag:
				{
					let domain = $.bytesToString(value.value)
					{
						let __goscriptShadow5 = __goscript_x509.isIA5String(domain)
						if (__goscriptShadow5 != null) {
							return [null, null, null, null, errors.New($.concatString("x509: invalid constraint value: ", (__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow5)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
						}
					}

					if (!domainNameValid(domain, true)) {
						return [null, null, null, null, fmt.Errorf("x509: failed to parse dnsName constraint %q", domain)]
					}
					dnsNames = $.appendOne(dnsNames, domain)
					break
				}
				case ipTag:
				{
					let l = $.sliceLen((value.value as cryptobyte.String))
					let ip: $.Slice<number> = null! as $.Slice<number>
					let mask: $.Slice<number> = null! as $.Slice<number>

					switch (l) {
						case 8:
						{
							ip = $.goSlice(value.value, undefined, 4)
							mask = $.goSlice(value.value, 4, undefined)
							break
						}
						case 32:
						{
							ip = $.goSlice(value.value, undefined, 16)
							mask = $.goSlice(value.value, 16, undefined)
							break
						}
						default:
						{
							return [null, null, null, null, fmt.Errorf("x509: IP constraint contained value of length %d", $.basicInterfaceValue(l, "int"))]
							break
						}
					}

					if (!isValidIPMask(mask)) {
						return [null, null, null, null, fmt.Errorf("x509: IP constraint contained invalid mask %x", $.interfaceValue(mask, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))]
					}

					if (($.sliceLen(ip) == 16) && (net.IP_To4((ip as net.IP)) != null)) {
						return [null, null, null, null, errors.New("x509: IP constraint contained IPv4-mapped IPv6 address")]
					}

					ips = $.appendOne(ips, new net.IPNet({IP: ((ip as net.IP) as net.IP), Mask: ((mask as net.IPMask) as net.IPMask)}), $.appendZeros.nil)
					break
				}
				case emailTag:
				{
					let constraint = $.bytesToString(value.value)
					{
						let __goscriptShadow6 = __goscript_x509.isIA5String(constraint)
						if (__goscriptShadow6 != null) {
							return [null, null, null, null, errors.New($.concatString("x509: invalid constraint value: ", (__goscriptAwait = (__goscriptShadow6 !== null && (__goscriptShadow6 as any).__isVarRef !== true && (__goscriptShadow6 as any).__goValue === undefined ? (__goscriptShadow6 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow6)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
						}
					}

					// If the constraint contains an @ then
					// it specifies an exact mailbox name.
					if (strings.Contains(constraint, "@")) {
						{
							let [, ok] = __goscript_verify.parseRFC2821Mailbox(constraint)
							if (!ok) {
								return [null, null, null, null, fmt.Errorf("x509: failed to parse rfc822Name constraint %q", constraint)]
							}
						}
					} else {
						if (!domainNameValid(constraint, true)) {
							return [null, null, null, null, fmt.Errorf("x509: failed to parse rfc822Name constraint %q", constraint)]
						}
					}
					emails = $.appendOne(emails, constraint)
					break
				}
				case uriTag:
				{
					let domain = $.bytesToString(value.value)
					{
						let __goscriptShadow7 = __goscript_x509.isIA5String(domain)
						if (__goscriptShadow7 != null) {
							return [null, null, null, null, errors.New($.concatString("x509: invalid constraint value: ", (__goscriptAwait = (__goscriptShadow7 !== null && (__goscriptShadow7 as any).__isVarRef !== true && (__goscriptShadow7 as any).__goValue === undefined ? (__goscriptShadow7 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow7)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
						}
					}

					if (net.ParseIP(domain) != null) {
						return [null, null, null, null, fmt.Errorf("x509: failed to parse URI constraint %q: cannot be IP address", domain)]
					}

					if (!domainNameValid(domain, true)) {
						return [null, null, null, null, fmt.Errorf("x509: failed to parse URI constraint %q", domain)]
					}
					uriDomains = $.appendOne(uriDomains, domain)
					break
				}
				default:
				{
					unhandled = true
					break
				}
			}
		}

		return [dnsNames, ips, emails, uriDomains, null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "cryptobyte.String")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("net.IPNet")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), "error"] } as $.FunctionTypeInfo))

	{
		let __goscriptTuple3: any = await getValues!((permitted.value as cryptobyte.String));
		;(out$ as __goscript_x509.Certificate).PermittedDNSDomains = __goscriptTuple3[0];
		;(out$ as __goscript_x509.Certificate).PermittedIPRanges = __goscriptTuple3[1];
		;(out$ as __goscript_x509.Certificate).PermittedEmailAddresses = __goscriptTuple3[2];
		;(out$ as __goscript_x509.Certificate).PermittedURIDomains = __goscriptTuple3[3]
		err = __goscriptTuple3[4]
		if (err != null) {
			return [false, err]
		}
	}
	{
		let __goscriptTuple4: any = await getValues!((excluded.value as cryptobyte.String));
		;(out$ as __goscript_x509.Certificate).ExcludedDNSDomains = __goscriptTuple4[0];
		;(out$ as __goscript_x509.Certificate).ExcludedIPRanges = __goscriptTuple4[1];
		;(out$ as __goscript_x509.Certificate).ExcludedEmailAddresses = __goscriptTuple4[2];
		;(out$ as __goscript_x509.Certificate).ExcludedURIDomains = __goscriptTuple4[3]
		err = __goscriptTuple4[4]
		if (err != null) {
			return [false, err]
		}
	}
	;(out$ as __goscript_x509.Certificate).PermittedDNSDomainsCritical = e.Critical

	return [unhandled, null]
}

export async function processExtensions(out: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null): globalThis.Promise<$.GoError> {
	const out$: __goscript_x509.Certificate = out == null ? $.pointerTarget<__goscript_x509.Certificate>(out) : (out as any).__isVarRef === true ? (out as any).value : (out as any).__goValue === undefined ? (out as any) : $.pointerTarget<__goscript_x509.Certificate>(out)
	let err: $.GoError = null! as $.GoError
	for (let __goscriptRangeTarget5 = (out$ as __goscript_x509.Certificate).Extensions, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let e = ((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as pkix.Extension)).clone()
		let unhandled = false

		if (((($.sliceLen((e.Id as asn1.ObjectIdentifier)) == 4) && ($.arrayIndex(e.Id!, 0) == 2)) && ($.arrayIndex(e.Id!, 1) == 5)) && ($.arrayIndex(e.Id!, 2) == 29)) {
			switch ($.arrayIndex(e.Id!, 3)) {
				case 15:
				{
					let __goscriptTuple5: any = parseKeyUsageExtension((e.Value as cryptobyte.String));
					;(out$ as __goscript_x509.Certificate).KeyUsage = __goscriptTuple5[0]
					err = __goscriptTuple5[1]
					if (err != null) {
						return err
					}
					break
				}
				case 19:
				{
					let __goscriptTuple6: any = parseBasicConstraintsExtension((e.Value as cryptobyte.String));
					;(out$ as __goscript_x509.Certificate).IsCA = __goscriptTuple6[0];
					;(out$ as __goscript_x509.Certificate).MaxPathLen = __goscriptTuple6[1]
					err = __goscriptTuple6[2]
					if (err != null) {
						return err
					}
					;(out$ as __goscript_x509.Certificate).BasicConstraintsValid = true;
					;(out$ as __goscript_x509.Certificate).MaxPathLenZero = (out$ as __goscript_x509.Certificate).MaxPathLen == 0
					break
				}
				case 17:
				{
					let __goscriptTuple7: any = await parseSANExtension((e.Value as cryptobyte.String));
					;(out$ as __goscript_x509.Certificate).DNSNames = __goscriptTuple7[0];
					;(out$ as __goscript_x509.Certificate).EmailAddresses = __goscriptTuple7[1];
					;(out$ as __goscript_x509.Certificate).IPAddresses = __goscriptTuple7[2];
					;(out$ as __goscript_x509.Certificate).URIs = __goscriptTuple7[3]
					err = __goscriptTuple7[4]
					if (err != null) {
						return err
					}

					if (((($.sliceLen((out$ as __goscript_x509.Certificate).DNSNames) == 0) && ($.sliceLen((out$ as __goscript_x509.Certificate).EmailAddresses) == 0)) && ($.sliceLen((out$ as __goscript_x509.Certificate).IPAddresses) == 0)) && ($.sliceLen((out$ as __goscript_x509.Certificate).URIs) == 0)) {
						// If we didn't parse anything then we do the critical check, below.
						unhandled = true
					}
					break
				}
				case 30:
				{
					let __goscriptTuple8: any = await parseNameConstraintsExtension(out, (e).clone())
					unhandled = __goscriptTuple8[0]
					err = __goscriptTuple8[1]
					if (err != null) {
						return err
					}
					break
				}
				case 31:
				{
					let val: $.VarRef<cryptobyte.String> = $.varRef(((e.Value as cryptobyte.String) as cryptobyte.String))
					if (!cryptobyte.String_ReadASN1(val, val, 48)) {
						return errors.New("x509: invalid CRL distribution points")
					}
					while (!cryptobyte.String_Empty(val.value)) {
						let dpDER: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
						if (!cryptobyte.String_ReadASN1(val, dpDER, 48)) {
							return errors.New("x509: invalid CRL distribution point")
						}
						let dpNameDER: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
						let dpNamePresent: $.VarRef<boolean> = $.varRef(false)
						if (!cryptobyte.String_ReadOptionalASN1(dpDER, dpNameDER, dpNamePresent, cryptobyte_asn1.Tag_ContextSpecific(cryptobyte_asn1.Tag_Constructed(0)))) {
							return errors.New("x509: invalid CRL distribution point")
						}
						if (!dpNamePresent.value) {
							continue
						}
						if (!cryptobyte.String_ReadASN1(dpNameDER, dpNameDER, cryptobyte_asn1.Tag_ContextSpecific(cryptobyte_asn1.Tag_Constructed(0)))) {
							return errors.New("x509: invalid CRL distribution point")
						}
						while (!cryptobyte.String_Empty(dpNameDER.value)) {
							if (!cryptobyte.String_PeekASN1Tag(dpNameDER.value, cryptobyte_asn1.Tag_ContextSpecific(6))) {
								break
							}
							let uri: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
							if (!cryptobyte.String_ReadASN1(dpNameDER, uri, cryptobyte_asn1.Tag_ContextSpecific(6))) {
								return errors.New("x509: invalid CRL distribution point")
							}
							;(out$ as __goscript_x509.Certificate).CRLDistributionPoints = $.appendOne((out$ as __goscript_x509.Certificate).CRLDistributionPoints, $.bytesToString(uri.value))
						}
					}
					break
				}
				case 35:
				{
					let __goscriptTuple9: any = parseAuthorityKeyIdentifier((e).clone());
					;(out$ as __goscript_x509.Certificate).AuthorityKeyId = __goscriptTuple9[0]
					err = __goscriptTuple9[1]
					if (err != null) {
						return err
					}
					break
				}
				case 36:
				{
					let val: $.VarRef<cryptobyte.String> = $.varRef(((e.Value as cryptobyte.String) as cryptobyte.String))
					if (!cryptobyte.String_ReadASN1(val, val, 48)) {
						return errors.New("x509: invalid policy constraints extension")
					}
					if (cryptobyte.String_PeekASN1Tag(val.value, cryptobyte_asn1.Tag_ContextSpecific(0))) {
						let v: $.VarRef<bigint> = $.varRef(0n)
						if (!cryptobyte.String_ReadASN1Int64WithTag(val, v, cryptobyte_asn1.Tag_ContextSpecific(0))) {
							return errors.New("x509: invalid policy constraints extension")
						}
						;(out$ as __goscript_x509.Certificate).RequireExplicitPolicy = $.int(v.value)
						// Check for overflow.
						if ($.int64((out$ as __goscript_x509.Certificate).RequireExplicitPolicy) != v.value) {
							return errors.New("x509: policy constraints requireExplicitPolicy field overflows int")
						}
						;(out$ as __goscript_x509.Certificate).RequireExplicitPolicyZero = (out$ as __goscript_x509.Certificate).RequireExplicitPolicy == 0
					}
					if (cryptobyte.String_PeekASN1Tag(val.value, cryptobyte_asn1.Tag_ContextSpecific(1))) {
						let v: $.VarRef<bigint> = $.varRef(0n)
						if (!cryptobyte.String_ReadASN1Int64WithTag(val, v, cryptobyte_asn1.Tag_ContextSpecific(1))) {
							return errors.New("x509: invalid policy constraints extension")
						}
						;(out$ as __goscript_x509.Certificate).InhibitPolicyMapping = $.int(v.value)
						// Check for overflow.
						if ($.int64((out$ as __goscript_x509.Certificate).InhibitPolicyMapping) != v.value) {
							return errors.New("x509: policy constraints inhibitPolicyMapping field overflows int")
						}
						;(out$ as __goscript_x509.Certificate).InhibitPolicyMappingZero = (out$ as __goscript_x509.Certificate).InhibitPolicyMapping == 0
					}
					break
				}
				case 37:
				{
					let __goscriptTuple10: any = parseExtKeyUsageExtension((e.Value as cryptobyte.String));
					;(out$ as __goscript_x509.Certificate).ExtKeyUsage = __goscriptTuple10[0];
					;(out$ as __goscript_x509.Certificate).UnknownExtKeyUsage = __goscriptTuple10[1]
					err = __goscriptTuple10[2]
					if (err != null) {
						return err
					}
					break
				}
				case 14:
				{
					if (e.Critical) {
						// Conforming CAs MUST mark this extension as non-critical
						return errors.New("x509: subject key identifier incorrectly marked critical")
					}
					let val: $.VarRef<cryptobyte.String> = $.varRef(((e.Value as cryptobyte.String) as cryptobyte.String))
					let skid: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if (!cryptobyte.String_ReadASN1(val, skid, 4)) {
						return errors.New("x509: invalid subject key identifier")
					}
					;(out$ as __goscript_x509.Certificate).SubjectKeyId = skid.value
					break
				}
				case 32:
				{
					let __goscriptTuple11: any = parseCertificatePoliciesExtension((e.Value as cryptobyte.String));
					;(out$ as __goscript_x509.Certificate).Policies = __goscriptTuple11[0]
					err = __goscriptTuple11[1]
					if (err != null) {
						return err
					}
					;(out$ as __goscript_x509.Certificate).PolicyIdentifiers = $.makeSlice<asn1.ObjectIdentifier>(0, $.sliceLen((out$ as __goscript_x509.Certificate).Policies))
					for (let __goscriptRangeTarget4 = (out$ as __goscript_x509.Certificate).Policies, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
						let oid = ((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as __goscript_oid.OID)).clone()
						let __goscriptShadow8 = oid
						{
							let __goscriptTuple12: any = __goscriptShadow8.toASN1OID()
							let __goscriptShadow9: asn1.ObjectIdentifier = (__goscriptTuple12[0] as asn1.ObjectIdentifier)
							let ok = __goscriptTuple12[1]
							if (ok) {
								;(out$ as __goscript_x509.Certificate).PolicyIdentifiers = $.appendOne((out$ as __goscript_x509.Certificate).PolicyIdentifiers, (__goscriptShadow9 as asn1.ObjectIdentifier), $.appendZeros.nil)
							}
						}
					}
					break
				}
				case 33:
				{
					let val: $.VarRef<cryptobyte.String> = $.varRef(((e.Value as cryptobyte.String) as cryptobyte.String))
					if (!cryptobyte.String_ReadASN1(val, val, 48)) {
						return errors.New("x509: invalid policy mappings extension")
					}
					while (!cryptobyte.String_Empty(val.value)) {
						let s: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
						let issuer: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
						let subject: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
						if ((!cryptobyte.String_ReadASN1(val, s, 48) || !cryptobyte.String_ReadASN1(s, issuer, 6)) || !cryptobyte.String_ReadASN1(s, subject, 6)) {
							return errors.New("x509: invalid policy mappings extension")
						}
						;(out$ as __goscript_x509.Certificate).PolicyMappings = $.appendOne((out$ as __goscript_x509.Certificate).PolicyMappings, new __goscript_x509.PolicyMapping({IssuerDomainPolicy: new __goscript_oid.OID({der: issuer.value}, true), SubjectDomainPolicy: new __goscript_oid.OID({der: subject.value}, true)}, true))
					}
					break
				}
				case 54:
				{
					let val: $.VarRef<cryptobyte.String> = $.varRef(((e.Value as cryptobyte.String) as cryptobyte.String))
					if (!cryptobyte.String_ReadASN1Integer(val, $.interfaceValue($.fieldRef((out$ as __goscript_x509.Certificate)._fields, "InhibitAnyPolicy"), "*int", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))))) {
						return errors.New("x509: invalid inhibit any policy extension")
					}
					;(out$ as __goscript_x509.Certificate).InhibitAnyPolicyZero = (out$ as __goscript_x509.Certificate).InhibitAnyPolicy == 0
					break
				}
				default:
				{
					unhandled = true
					break
				}
			}
		} else {
			if (asn1.ObjectIdentifier_Equal(e.Id, (__goscript_x509.oidExtensionAuthorityInfoAccess as asn1.ObjectIdentifier))) {
				// RFC 5280 4.2.2.1: Authority Information Access
				if (e.Critical) {
					// Conforming CAs MUST mark this extension as non-critical
					return errors.New("x509: authority info access incorrectly marked critical")
				}
				let val: $.VarRef<cryptobyte.String> = $.varRef(((e.Value as cryptobyte.String) as cryptobyte.String))
				if (!cryptobyte.String_ReadASN1(val, val, 48)) {
					return errors.New("x509: invalid authority info access")
				}
				while (!cryptobyte.String_Empty(val.value)) {
					let aiaDER: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if (!cryptobyte.String_ReadASN1(val, aiaDER, 48)) {
						return errors.New("x509: invalid authority info access")
					}
					let method: $.VarRef<asn1.ObjectIdentifier> = $.varRef(null! as asn1.ObjectIdentifier)
					if (!cryptobyte.String_ReadASN1ObjectIdentifier(aiaDER, method)) {
						return errors.New("x509: invalid authority info access")
					}
					if (!cryptobyte.String_PeekASN1Tag(aiaDER.value, cryptobyte_asn1.Tag_ContextSpecific(6))) {
						continue
					}
					if (!cryptobyte.String_ReadASN1(aiaDER, aiaDER, cryptobyte_asn1.Tag_ContextSpecific(6))) {
						return errors.New("x509: invalid authority info access")
					}
					switch ((true as boolean)) {
						case asn1.ObjectIdentifier_Equal(method.value, (__goscript_x509.oidAuthorityInfoAccessOcsp as asn1.ObjectIdentifier)):
						{
							;(out$ as __goscript_x509.Certificate).OCSPServer = $.appendOne((out$ as __goscript_x509.Certificate).OCSPServer, $.bytesToString(aiaDER.value))
							break
						}
						case asn1.ObjectIdentifier_Equal(method.value, (__goscript_x509.oidAuthorityInfoAccessIssuers as asn1.ObjectIdentifier)):
						{
							;(out$ as __goscript_x509.Certificate).IssuingCertificateURL = $.appendOne((out$ as __goscript_x509.Certificate).IssuingCertificateURL, $.bytesToString(aiaDER.value))
							break
						}
					}
				}
			} else {
				// Unknown extensions are recorded if critical.
				unhandled = true
			}
		}

		if (e.Critical && unhandled) {
			;(out$ as __goscript_x509.Certificate).UnhandledCriticalExtensions = $.appendOne((out$ as __goscript_x509.Certificate).UnhandledCriticalExtensions, (e.Id as asn1.ObjectIdentifier), $.appendZeros.nil)
		}
	}

	return null
}

export let x509negativeserial: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("x509negativeserial")

export function __goscript_set_x509negativeserial(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	x509negativeserial = __goscriptValue
}

export async function parseCertificate(der: $.Slice<number>): globalThis.Promise<[__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, $.GoError]> {
	let cert: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null = new __goscript_x509.Certificate()
	let cert$: __goscript_x509.Certificate = cert == null ? $.pointerTarget<__goscript_x509.Certificate>(cert) : (cert as any).__isVarRef === true ? (cert as any).value : (cert as any).__goValue === undefined ? (cert as any) : $.pointerTarget<__goscript_x509.Certificate>(cert)

	let input: $.VarRef<cryptobyte.String> = $.varRef(((der as cryptobyte.String) as cryptobyte.String))
	// we read the SEQUENCE including length and tag bytes so that
	// we can populate Certificate.Raw, before unwrapping the
	// SEQUENCE so it can be operated on
	if (!cryptobyte.String_ReadASN1Element(input, input, 48)) {
		return [null, errors.New("x509: malformed certificate")]
	}
	;(cert$ as __goscript_x509.Certificate).Raw = input.value
	if (!cryptobyte.String_ReadASN1(input, input, 48)) {
		return [null, errors.New("x509: malformed certificate")]
	}

	let tbs: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	// do the same trick again as above to extract the raw
	// bytes for Certificate.RawTBSCertificate
	if (!cryptobyte.String_ReadASN1Element(input, tbs, 48)) {
		return [null, errors.New("x509: malformed tbs certificate")]
	}
	;(cert$ as __goscript_x509.Certificate).RawTBSCertificate = tbs.value
	if (!cryptobyte.String_ReadASN1(tbs, tbs, 48)) {
		return [null, errors.New("x509: malformed tbs certificate")]
	}

	if (!cryptobyte.String_ReadOptionalASN1Integer(tbs, $.interfaceValue($.fieldRef((cert$ as __goscript_x509.Certificate)._fields, "Version"), "*int", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))), cryptobyte_asn1.Tag_ContextSpecific(cryptobyte_asn1.Tag_Constructed(0)), $.basicInterfaceValue(0, "int"))) {
		return [null, errors.New("x509: malformed version")]
	}
	if ((cert$ as __goscript_x509.Certificate).Version < 0) {
		return [null, errors.New("x509: malformed version")]
	}
	// for backwards compat reasons Version is one-indexed,
	// rather than zero-indexed as defined in 5280
	;(cert$ as __goscript_x509.Certificate).Version++
	if ((cert$ as __goscript_x509.Certificate).Version > 3) {
		return [null, errors.New("x509: invalid version")]
	}

	let serial: big.Int | $.VarRef<big.Int> | null = new big.Int()
	if (!cryptobyte.String_ReadASN1Integer(tbs, $.interfaceValue(serial, "*big.Int", /* @__PURE__ */ $.pointerType("big.Int")))) {
		return [null, errors.New("x509: malformed serial number")]
	}
	if ((serial !== null && (serial as any).__isVarRef !== true && (serial as any).__goValue === undefined ? ((serial as any) as big.Int).Sign() : big.Int.prototype.Sign.call(serial)) == -1) {
		if (!$.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(x509negativeserial)), "1")) {
			return [null, errors.New("x509: negative serial number")]
		} else {
			godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(x509negativeserial))
		}
	}
	;(cert$ as __goscript_x509.Certificate).SerialNumber = serial

	let sigAISeq: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	if (!cryptobyte.String_ReadASN1Element(tbs, sigAISeq, 48)) {
		return [null, errors.New("x509: malformed signature algorithm identifier")]
	}
	;(cert$ as __goscript_x509.Certificate).RawSignatureAlgorithm = sigAISeq.value
	if (!cryptobyte.String_ReadASN1(sigAISeq, sigAISeq, 48)) {
		return [null, errors.New("x509: malformed signature algorithm identifier")]
	}
	// Before parsing the inner algorithm identifier, extract
	// the outer algorithm identifier and make sure that they
	// match.
	let outerSigAISeq: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	if (!cryptobyte.String_ReadASN1(input, outerSigAISeq, 48)) {
		return [null, errors.New("x509: malformed algorithm identifier")]
	}
	if (!bytes.Equal(outerSigAISeq.value, sigAISeq.value)) {
		return [null, errors.New("x509: inner and outer signature algorithm identifiers don't match")]
	}
	let [sigAI, err] = parseAI((sigAISeq.value as cryptobyte.String))
	if (err != null) {
		return [null, err]
	}
	;(cert$ as __goscript_x509.Certificate).SignatureAlgorithm = await __goscript_x509.getSignatureAlgorithmFromAI(sigAI)

	let issuerSeq: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	if (!cryptobyte.String_ReadASN1Element(tbs, issuerSeq, 48)) {
		return [null, errors.New("x509: malformed issuer")]
	}
	;(cert$ as __goscript_x509.Certificate).RawIssuer = issuerSeq.value
	let __goscriptTuple13: any = parseName((issuerSeq.value as cryptobyte.String))
	let issuerRDNs: $.VarRef<pkix.RDNSequence> | null = __goscriptTuple13[0]
	err = __goscriptTuple13[1]
	if (err != null) {
		return [null, err]
	}
	void (cert$ as __goscript_x509.Certificate).Issuer.FillFromRDNSequence(issuerRDNs)

	let __goscriptShadow10: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	if (!cryptobyte.String_ReadASN1(tbs, __goscriptShadow10, 48)) {
		return [null, errors.New("x509: malformed validity")]
	}
	let __goscriptTuple14: any = parseValidity((__goscriptShadow10.value as cryptobyte.String))
	$.assignStruct((cert$ as __goscript_x509.Certificate).NotBefore, __goscriptTuple14[0])
	$.assignStruct((cert$ as __goscript_x509.Certificate).NotAfter, __goscriptTuple14[1])
	err = __goscriptTuple14[2]
	if (err != null) {
		return [null, err]
	}

	let subjectSeq: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	if (!cryptobyte.String_ReadASN1Element(tbs, subjectSeq, 48)) {
		return [null, errors.New("x509: malformed issuer")]
	}
	;(cert$ as __goscript_x509.Certificate).RawSubject = subjectSeq.value
	let __goscriptTuple15: any = parseName((subjectSeq.value as cryptobyte.String))
	let subjectRDNs: $.VarRef<pkix.RDNSequence> | null = __goscriptTuple15[0]
	err = __goscriptTuple15[1]
	if (err != null) {
		return [null, err]
	}
	void (cert$ as __goscript_x509.Certificate).Subject.FillFromRDNSequence(subjectRDNs)

	let spki: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	if (!cryptobyte.String_ReadASN1Element(tbs, spki, 48)) {
		return [null, errors.New("x509: malformed spki")]
	}
	;(cert$ as __goscript_x509.Certificate).RawSubjectPublicKeyInfo = spki.value
	if (!cryptobyte.String_ReadASN1(spki, spki, 48)) {
		return [null, errors.New("x509: malformed spki")]
	}
	let pkAISeq: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	if (!cryptobyte.String_ReadASN1(spki, pkAISeq, 48)) {
		return [null, errors.New("x509: malformed public key algorithm identifier")]
	}
	let __goscriptTuple16: any = parseAI((pkAISeq.value as cryptobyte.String))
	let pkAI = __goscriptTuple16[0]
	err = __goscriptTuple16[1]
	if (err != null) {
		return [null, err]
	}
	;(cert$ as __goscript_x509.Certificate).PublicKeyAlgorithm = __goscript_x509.getPublicKeyAlgorithmFromOID((pkAI.Algorithm as asn1.ObjectIdentifier))
	let spk: $.VarRef<asn1.BitString> = $.varRef(new asn1.BitString(undefined, true))
	if (!cryptobyte.String_ReadASN1BitString(spki, spk)) {
		return [null, errors.New("x509: malformed subjectPublicKey")]
	}
	if ((cert$ as __goscript_x509.Certificate).PublicKeyAlgorithm != 0) {
		let __goscriptTuple17: any = await parsePublicKey(new __goscript_x509.publicKeyInfo({Algorithm: pkAI, PublicKey: spk.value}));
		;(cert$ as __goscript_x509.Certificate).PublicKey = __goscriptTuple17[0]
		err = __goscriptTuple17[1]
		if (err != null) {
			return [null, err]
		}
	}

	if ((cert$ as __goscript_x509.Certificate).Version > 1) {
		if (!cryptobyte.String_SkipOptionalASN1(tbs, cryptobyte_asn1.Tag_ContextSpecific(1))) {
			return [null, errors.New("x509: malformed issuerUniqueID")]
		}
		if (!cryptobyte.String_SkipOptionalASN1(tbs, cryptobyte_asn1.Tag_ContextSpecific(2))) {
			return [null, errors.New("x509: malformed subjectUniqueID")]
		}
		if ((cert$ as __goscript_x509.Certificate).Version == 3) {
			let extensions: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
			let present: $.VarRef<boolean> = $.varRef(false)
			if (!cryptobyte.String_ReadOptionalASN1(tbs, extensions, present, cryptobyte_asn1.Tag_ContextSpecific(cryptobyte_asn1.Tag_Constructed(3)))) {
				return [null, errors.New("x509: malformed extensions")]
			}
			if (present.value) {
				let seenExts: globalThis.Map<string, boolean> | null = $.makeMap<string, boolean>()
				if (!cryptobyte.String_ReadASN1(extensions, extensions, 48)) {
					return [null, errors.New("x509: malformed extensions")]
				}
				while (!cryptobyte.String_Empty(extensions.value)) {
					let extension: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if (!cryptobyte.String_ReadASN1(extensions, extension, 48)) {
						return [null, errors.New("x509: malformed extension")]
					}
					let [ext, __goscriptShadow11] = parseExtension((extension.value as cryptobyte.String))
					if (__goscriptShadow11 != null) {
						return [null, __goscriptShadow11]
					}
					let oidStr = asn1.ObjectIdentifier_String(ext.Id)
					if ($.mapGet<string, boolean, boolean>(seenExts, oidStr, false)[0]) {
						return [null, fmt.Errorf("x509: certificate contains duplicate extension with OID %q", oidStr)]
					}
					$.mapSet(seenExts, oidStr, true);
					;(cert$ as __goscript_x509.Certificate).Extensions = $.appendOne((cert$ as __goscript_x509.Certificate).Extensions, (ext).clone())
				}
				err = await processExtensions(cert)
				if (err != null) {
					return [null, err]
				}
			}
		}
	}

	let signature: $.VarRef<asn1.BitString> = $.varRef(new asn1.BitString(undefined, true))
	if (!cryptobyte.String_ReadASN1BitString(input, signature)) {
		return [null, errors.New("x509: malformed signature")]
	}
	;(cert$ as __goscript_x509.Certificate).Signature = $.markAsStructValue($.cloneStructValue(signature.value)).RightAlign()

	return [cert, null]
}

export async function ParseCertificate(der: $.Slice<number>): globalThis.Promise<[__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null, $.GoError]> {
	let __goscriptTuple18: any = await parseCertificate(der)
	let cert: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null = __goscriptTuple18[0]
	let err = __goscriptTuple18[1]
	if (err != null) {
		return [null, err]
	}
	if ($.sliceLen(der) != $.sliceLen($.pointerValue<__goscript_x509.Certificate>(cert).Raw)) {
		return [null, errors.New("x509: trailing data")]
	}
	return [cert, null]
}

export async function ParseCertificates(der: $.Slice<number>): globalThis.Promise<[$.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>, $.GoError]> {
	let certs: $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null> = null! as $.Slice<__goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null>
	while ($.sliceLen(der) > 0) {
		let __goscriptTuple19: any = await parseCertificate(der)
		let cert: __goscript_x509.Certificate | $.VarRef<__goscript_x509.Certificate> | null = __goscriptTuple19[0]
		let err = __goscriptTuple19[1]
		if (err != null) {
			return [null, err]
		}
		certs = $.appendOne(certs, cert, $.appendZeros.nil)
		der = $.goSlice(der, $.sliceLen($.pointerValue<__goscript_x509.Certificate>(cert).Raw), undefined)
	}
	return [certs, null]
}

export async function ParseRevocationList(der: $.Slice<number>): globalThis.Promise<[__goscript_x509.RevocationList | $.VarRef<__goscript_x509.RevocationList> | null, $.GoError]> {
	let rl: __goscript_x509.RevocationList | $.VarRef<__goscript_x509.RevocationList> | null = new __goscript_x509.RevocationList()
	let rl$: __goscript_x509.RevocationList = rl == null ? $.pointerTarget<__goscript_x509.RevocationList>(rl) : (rl as any).__isVarRef === true ? (rl as any).value : (rl as any).__goValue === undefined ? (rl as any) : $.pointerTarget<__goscript_x509.RevocationList>(rl)

	let input: $.VarRef<cryptobyte.String> = $.varRef(((der as cryptobyte.String) as cryptobyte.String))
	// we read the SEQUENCE including length and tag bytes so that
	// we can populate RevocationList.Raw, before unwrapping the
	// SEQUENCE so it can be operated on
	if (!cryptobyte.String_ReadASN1Element(input, input, 48)) {
		return [null, errors.New("x509: malformed crl")]
	}
	;(rl$ as __goscript_x509.RevocationList).Raw = input.value
	if (!cryptobyte.String_ReadASN1(input, input, 48)) {
		return [null, errors.New("x509: malformed crl")]
	}

	let tbs: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	// do the same trick again as above to extract the raw
	// bytes for Certificate.RawTBSCertificate
	if (!cryptobyte.String_ReadASN1Element(input, tbs, 48)) {
		return [null, errors.New("x509: malformed tbs crl")]
	}
	;(rl$ as __goscript_x509.RevocationList).RawTBSRevocationList = tbs.value
	if (!cryptobyte.String_ReadASN1(tbs, tbs, 48)) {
		return [null, errors.New("x509: malformed tbs crl")]
	}

	let version: $.VarRef<number> = $.varRef(0)
	if (!cryptobyte.String_PeekASN1Tag(tbs.value, 2)) {
		return [null, errors.New("x509: unsupported crl version")]
	}
	if (!cryptobyte.String_ReadASN1Integer(tbs, $.interfaceValue(version, "*int", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))))) {
		return [null, errors.New("x509: malformed crl")]
	}
	if (version.value != 1) {
		return [null, fmt.Errorf("x509: unsupported crl version: %d", $.basicInterfaceValue(version.value, "int"))]
	}

	let sigAISeq: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	if (!cryptobyte.String_ReadASN1Element(tbs, sigAISeq, 48)) {
		return [null, errors.New("x509: malformed signature algorithm identifier")]
	}
	;(rl$ as __goscript_x509.RevocationList).RawSignatureAlgorithm = sigAISeq.value
	if (!cryptobyte.String_ReadASN1(sigAISeq, sigAISeq, 48)) {
		return [null, errors.New("x509: malformed signature algorithm identifier")]
	}
	// Before parsing the inner algorithm identifier, extract
	// the outer algorithm identifier and make sure that they
	// match.
	let outerSigAISeq: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	if (!cryptobyte.String_ReadASN1(input, outerSigAISeq, 48)) {
		return [null, errors.New("x509: malformed algorithm identifier")]
	}
	if (!bytes.Equal(outerSigAISeq.value, sigAISeq.value)) {
		return [null, errors.New("x509: inner and outer signature algorithm identifiers don't match")]
	}
	let [sigAI, err] = parseAI((sigAISeq.value as cryptobyte.String))
	if (err != null) {
		return [null, err]
	}
	;(rl$ as __goscript_x509.RevocationList).SignatureAlgorithm = await __goscript_x509.getSignatureAlgorithmFromAI(sigAI)

	let signature: $.VarRef<asn1.BitString> = $.varRef(new asn1.BitString(undefined, true))
	if (!cryptobyte.String_ReadASN1BitString(input, signature)) {
		return [null, errors.New("x509: malformed signature")]
	}
	;(rl$ as __goscript_x509.RevocationList).Signature = $.markAsStructValue($.cloneStructValue(signature.value)).RightAlign()

	let issuerSeq: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	if (!cryptobyte.String_ReadASN1Element(tbs, issuerSeq, 48)) {
		return [null, errors.New("x509: malformed issuer")]
	}
	;(rl$ as __goscript_x509.RevocationList).RawIssuer = issuerSeq.value
	let __goscriptTuple20: any = parseName((issuerSeq.value as cryptobyte.String))
	let issuerRDNs: $.VarRef<pkix.RDNSequence> | null = __goscriptTuple20[0]
	err = __goscriptTuple20[1]
	if (err != null) {
		return [null, err]
	}
	void (rl$ as __goscript_x509.RevocationList).Issuer.FillFromRDNSequence(issuerRDNs)

	let __goscriptTuple21: any = readASN1Time(tbs)
	$.assignStruct((rl$ as __goscript_x509.RevocationList).ThisUpdate, __goscriptTuple21[0])
	err = __goscriptTuple21[1]
	if (err != null) {
		return [null, err]
	}
	if (cryptobyte.String_PeekASN1Tag(tbs.value, 24) || cryptobyte.String_PeekASN1Tag(tbs.value, 23)) {
		let __goscriptTuple22: any = readASN1Time(tbs)
		$.assignStruct((rl$ as __goscript_x509.RevocationList).NextUpdate, __goscriptTuple22[0])
		err = __goscriptTuple22[1]
		if (err != null) {
			return [null, err]
		}
	}

	if (cryptobyte.String_PeekASN1Tag(tbs.value, 48)) {
		let revokedSeq: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
		if (!cryptobyte.String_ReadASN1(tbs, revokedSeq, 48)) {
			return [null, errors.New("x509: malformed crl")]
		}
		while (!cryptobyte.String_Empty(revokedSeq.value)) {
			let rce = new __goscript_x509.RevocationListEntry(undefined, true)

			let certSeq: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
			if (!cryptobyte.String_ReadASN1Element(revokedSeq, certSeq, 48)) {
				return [null, errors.New("x509: malformed crl")]
			}
			rce.Raw = certSeq.value
			if (!cryptobyte.String_ReadASN1(certSeq, certSeq, 48)) {
				return [null, errors.New("x509: malformed crl")]
			}

			rce.SerialNumber = new big.Int()
			if (!cryptobyte.String_ReadASN1Integer(certSeq, $.interfaceValue(rce.SerialNumber, "*big.Int", /* @__PURE__ */ $.pointerType("big.Int")))) {
				return [null, errors.New("x509: malformed serial number")]
			}
			let __goscriptTuple23: any = readASN1Time(certSeq)
			$.assignStruct(rce.RevocationTime, __goscriptTuple23[0])
			err = __goscriptTuple23[1]
			if (err != null) {
				return [null, err]
			}
			let extensions: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
			let present: $.VarRef<boolean> = $.varRef(false)
			if (!cryptobyte.String_ReadOptionalASN1(certSeq, extensions, present, 48)) {
				return [null, errors.New("x509: malformed extensions")]
			}
			if (present.value) {
				while (!cryptobyte.String_Empty(extensions.value)) {
					let extension: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
					if (!cryptobyte.String_ReadASN1(extensions, extension, 48)) {
						return [null, errors.New("x509: malformed extension")]
					}
					let [ext, __goscriptShadow12] = parseExtension((extension.value as cryptobyte.String))
					if (__goscriptShadow12 != null) {
						return [null, __goscriptShadow12]
					}
					if (asn1.ObjectIdentifier_Equal(ext.Id, (__goscript_x509.oidExtensionReasonCode as asn1.ObjectIdentifier))) {
						let val: $.VarRef<cryptobyte.String> = $.varRef(((ext.Value as cryptobyte.String) as cryptobyte.String))
						if (!cryptobyte.String_ReadASN1Enum(val, $.fieldRef(rce._fields, "ReasonCode"))) {
							return [null, fmt.Errorf("x509: malformed reasonCode extension")]
						}
					}
					rce.Extensions = $.appendOne(rce.Extensions, (ext).clone())
				}
			}

			;(rl$ as __goscript_x509.RevocationList).RevokedCertificateEntries = $.appendOne((rl$ as __goscript_x509.RevocationList).RevokedCertificateEntries, (rce).clone())
			let rcDeprecated = new pkix.RevokedCertificate({SerialNumber: rce.SerialNumber, RevocationTime: $.markAsStructValue($.cloneStructValue(rce.RevocationTime)), Extensions: rce.Extensions}, true);
			;(rl$ as __goscript_x509.RevocationList).RevokedCertificates = $.appendOne((rl$ as __goscript_x509.RevocationList).RevokedCertificates, (rcDeprecated).clone())
		}
	}

	let extensions: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	let present: $.VarRef<boolean> = $.varRef(false)
	if (!cryptobyte.String_ReadOptionalASN1(tbs, extensions, present, cryptobyte_asn1.Tag_ContextSpecific(cryptobyte_asn1.Tag_Constructed(0)))) {
		return [null, errors.New("x509: malformed extensions")]
	}
	if (present.value) {
		if (!cryptobyte.String_ReadASN1(extensions, extensions, 48)) {
			return [null, errors.New("x509: malformed extensions")]
		}
		while (!cryptobyte.String_Empty(extensions.value)) {
			let extension: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
			if (!cryptobyte.String_ReadASN1(extensions, extension, 48)) {
				return [null, errors.New("x509: malformed extension")]
			}
			let [ext, __goscriptShadow13] = parseExtension((extension.value as cryptobyte.String))
			if (__goscriptShadow13 != null) {
				return [null, __goscriptShadow13]
			}
			if (asn1.ObjectIdentifier_Equal(ext.Id, (__goscript_x509.oidExtensionAuthorityKeyId as asn1.ObjectIdentifier))) {
				let __goscriptTuple24: any = parseAuthorityKeyIdentifier(ext);
				;(rl$ as __goscript_x509.RevocationList).AuthorityKeyId = __goscriptTuple24[0]
				__goscriptShadow13 = __goscriptTuple24[1]
				if (__goscriptShadow13 != null) {
					return [null, __goscriptShadow13]
				}
			} else {
				if (asn1.ObjectIdentifier_Equal(ext.Id, (__goscript_x509.oidExtensionCRLNumber as asn1.ObjectIdentifier))) {
					let value: $.VarRef<cryptobyte.String> = $.varRef(((ext.Value as cryptobyte.String) as cryptobyte.String));
					;(rl$ as __goscript_x509.RevocationList).Number = new big.Int()
					if (!cryptobyte.String_ReadASN1Integer(value, $.interfaceValue((rl$ as __goscript_x509.RevocationList).Number, "*big.Int", /* @__PURE__ */ $.pointerType("big.Int")))) {
						return [null, errors.New("x509: malformed crl number")]
					}
				}
			}
			;(rl$ as __goscript_x509.RevocationList).Extensions = $.appendOne((rl$ as __goscript_x509.RevocationList).Extensions, (ext).clone())
		}
	}

	return [rl, null]
}

export function domainNameValid(s: string, constraint: boolean): boolean {
	// TODO(#75835): This function omits a number of checks which we
	// really should be doing to enforce that domain names are valid names per
	// RFC 1034. We previously enabled these checks, but this broke a
	// significant number of certificates we previously considered valid, and we
	// happily create via CreateCertificate (et al). We should enable these
	// checks, but will need to gate them behind a GODEBUG.
	//
	// I have left the checks we previously enabled, noted with "TODO(#75835)" so
	// that we can easily re-enable them once we unbreak everyone.

	// TODO(#75835): this should only be true for constraints.
	if ($.stringLen(s) == 0) {
		return true
	}

	// Do not allow trailing period (FQDN format is not allowed in SANs or
	// constraints).
	if ($.indexString(s, $.stringLen(s) - 1) == 46) {
		return false
	}

	// TODO(#75835): domains must have at least one label, cannot have
	// a leading empty label, and cannot be longer than 253 characters.
	// if len(s) == 0 || (!constraint && s[0] == '.') || len(s) > 253 {
	// 	return false
	// }

	let lastDot = -1
	if (constraint && ($.indexString(s, 0) == 46)) {
		s = $.sliceStringOrBytes(s, 1, undefined)
	}

	for (let i = 0; i <= $.stringLen(s); i++) {
		if ((i < $.stringLen(s)) && (($.indexString(s, i) < 33) || ($.indexString(s, i) > 126))) {
			// Invalid character.
			return false
		}
		if ((i == $.stringLen(s)) || ($.indexString(s, i) == 46)) {
			let labelLen = i
			if (lastDot >= 0) {
				labelLen = labelLen - (lastDot + 1)
			}
			if (labelLen == 0) {
				return false
			}
			// TODO(#75835): labels cannot be longer than 63 characters.
			// if labelLen > 63 {
			// 	return false
			// }
			lastDot = i
		}
	}

	return true
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Constructed: (receiver: any, ...args: any[]) => (cryptobyte_asn1.Tag_Constructed as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ContextSpecific: (receiver: any, ...args: any[]) => (cryptobyte_asn1.Tag_ContextSpecific as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "asn1.Tag"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Constructed", [], [/* @__PURE__ */ $.basicType("uint8", "asn1.Tag")]), $.methodSignature("ContextSpecific", [], [/* @__PURE__ */ $.basicType("uint8", "asn1.Tag")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Equal: (receiver: any, ...args: any[]) => (asn1.ObjectIdentifier_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (asn1.ObjectIdentifier_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Equal", [["other", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({Equal: (receiver: any, ...args: any[]) => (ed25519.PublicKey_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PublicKey"))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ([$.methodSignature("Equal", [["x", "crypto.PublicKey"]], [/* @__PURE__ */ $.basicType("bool")])])
}

var __goscriptAwait: any
