// Generated file based on x509.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as pkix2 from "@goscript/crypto/x509/pkix/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as iter from "@goscript/iter/index.js"

import * as maps from "@goscript/maps/index.js"

import * as net from "@goscript/net/index.js"

import * as netip from "@goscript/net/netip/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as slices from "@goscript/slices/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as ecdh from "@goscript/crypto/ecdh/index.js"

import * as ecdsa from "@goscript/crypto/ecdsa/index.js"

import * as ed25519 from "@goscript/crypto/ed25519/index.js"

import * as elliptic from "@goscript/crypto/elliptic/index.js"

import * as fips140 from "@goscript/crypto/fips140/index.js"

import * as mldsa from "@goscript/crypto/mldsa/index.js"

import * as rsa from "@goscript/crypto/rsa/index.js"

import * as sha1 from "@goscript/crypto/sha1/index.js"

import * as sha256 from "@goscript/crypto/sha256/index.js"

import * as asn1 from "@goscript/encoding/asn1/index.js"

import * as pem from "@goscript/encoding/pem/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

import * as io from "@goscript/io/index.js"

import * as big from "@goscript/math/big/index.js"

import * as url from "@goscript/net/url/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as unicode from "@goscript/unicode/index.js"

import "@goscript/crypto/sha512/index.js"

import * as cryptobyte from "@goscript/vendor/golang.org/x/crypto/cryptobyte/index.js"

import * as cryptobyte_asn1 from "@goscript/vendor/golang.org/x/crypto/cryptobyte/asn1/index.js"

import * as hash2 from "@goscript/hash/index.js"

import * as __goscript_cert_pool from "./cert_pool.gs.ts"

import * as __goscript_constraints from "./constraints.gs.ts"

import * as __goscript_oid from "./oid.gs.ts"

import * as __goscript_parser from "./parser.gs.ts"

import * as __goscript_pkcs1 from "./pkcs1.gs.ts"

import * as __goscript_root from "./root.gs.ts"

import * as __goscript_root_unix from "./root_unix.gs.ts"

import * as __goscript_verify from "./verify.gs.ts"

import * as __goscript_x509_string from "./x509_string.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/crypto/index.js"
import "@goscript/crypto/x509/pkix/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/iter/index.js"
import "@goscript/maps/index.js"
import "@goscript/net/index.js"
import "@goscript/net/netip/index.js"
import "@goscript/runtime/index.js"
import "@goscript/slices/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/crypto/ecdh/index.js"
import "@goscript/crypto/ecdsa/index.js"
import "@goscript/crypto/ed25519/index.js"
import "@goscript/crypto/elliptic/index.js"
import "@goscript/crypto/fips140/index.js"
import "@goscript/crypto/mldsa/index.js"
import "@goscript/crypto/rsa/index.js"
import "@goscript/crypto/sha1/index.js"
import "@goscript/crypto/sha256/index.js"
import "@goscript/encoding/asn1/index.js"
import "@goscript/encoding/pem/index.js"
import "@goscript/internal/godebug/index.js"
import "@goscript/io/index.js"
import "@goscript/math/big/index.js"
import "@goscript/net/url/index.js"
import "@goscript/strconv/index.js"
import "@goscript/unicode/index.js"
import "@goscript/vendor/golang.org/x/crypto/cryptobyte/index.js"
import "@goscript/vendor/golang.org/x/crypto/cryptobyte/asn1/index.js"
import "@goscript/hash/index.js"
import "./cert_pool.gs.ts"
import "./constraints.gs.ts"
import "./oid.gs.ts"
import "./parser.gs.ts"
import "./pkcs1.gs.ts"
import "./root.gs.ts"
import "./root_unix.gs.ts"
import "./verify.gs.ts"
import "./x509_string.gs.ts"

$.registerTypePackagePath("crypto/x509", ["x509.pkixPublicKey", "x509.certificate", "x509.tbsCertificate", "x509.dsaAlgorithmParameters", "x509.validity", "x509.publicKeyInfo", "x509.authKeyId", "x509.SignatureAlgorithm", "x509.PublicKeyAlgorithm", "x509.pssParameters", "x509.KeyUsage", "x509.ExtKeyUsage", "x509.Certificate", "x509.PolicyMapping", "x509.InsecureAlgorithmError", "x509.ConstraintViolationError", "x509.UnhandledCriticalExtension", "x509.basicConstraints", "x509.policyInformation", "x509.authorityInfoAccess", "x509.distributionPoint", "x509.distributionPointName", "x509.privateKey", "x509.CertificateRequest", "x509.tbsCertificateRequest", "x509.certificateRequest", "x509.pkcs10Attribute", "x509.RevocationListEntry", "x509.RevocationList", "x509.certificateList", "x509.tbsCertificateList"])

export type SignatureAlgorithm = number

$.registerNamedValueType(
	"x509.SignatureAlgorithm",
	{String: (receiver: any, ...args: any[]) => (SignatureAlgorithm_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), hashFunc: (receiver: any, ...args: any[]) => (SignatureAlgorithm_hashFunc as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), isRSAPSS: (receiver: any, ...args: any[]) => (SignatureAlgorithm_isRSAPSS as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("hashFunc", [], [/* @__PURE__ */ $.basicType("uint", "crypto.Hash")]), $.methodSignature("isRSAPSS", [], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*x509.SignatureAlgorithm",
	{String: (receiver: any, ...args: any[]) => (SignatureAlgorithm_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), hashFunc: (receiver: any, ...args: any[]) => (SignatureAlgorithm_hashFunc as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), isRSAPSS: (receiver: any, ...args: any[]) => (SignatureAlgorithm_isRSAPSS as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("hashFunc", [], [/* @__PURE__ */ $.basicType("uint", "crypto.Hash")]), $.methodSignature("isRSAPSS", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export type PublicKeyAlgorithm = number

$.registerNamedValueType(
	"x509.PublicKeyAlgorithm",
	{String: (receiver: any, ...args: any[]) => (PublicKeyAlgorithm_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*x509.PublicKeyAlgorithm",
	{String: (receiver: any, ...args: any[]) => (PublicKeyAlgorithm_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type KeyUsage = number

$.registerNamedValueType(
	"x509.KeyUsage",
	{String: (receiver: any, ...args: any[]) => (__goscript_x509_string.KeyUsage_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*x509.KeyUsage",
	{String: (receiver: any, ...args: any[]) => (__goscript_x509_string.KeyUsage_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type ExtKeyUsage = number

$.registerNamedValueType(
	"x509.ExtKeyUsage",
	{OID: (receiver: any, ...args: any[]) => (ExtKeyUsage_OID as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_x509_string.ExtKeyUsage_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("OID", [], ["x509.OID"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*x509.ExtKeyUsage",
	{OID: (receiver: any, ...args: any[]) => (ExtKeyUsage_OID as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_x509_string.ExtKeyUsage_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("OID", [], ["x509.OID"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type InsecureAlgorithmError = number

$.registerNamedValueType(
	"x509.InsecureAlgorithmError",
	{Error: (receiver: any, ...args: any[]) => (InsecureAlgorithmError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*x509.InsecureAlgorithmError",
	{Error: (receiver: any, ...args: any[]) => (InsecureAlgorithmError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class pkixPublicKey {
	public get Algo(): pkix2.AlgorithmIdentifier {
		return this._fields.Algo
	}

	public set Algo(value: pkix2.AlgorithmIdentifier) {
		this._fields.Algo = value
	}

	public get BitString(): asn1.BitString {
		return this._fields.BitString
	}

	public set BitString(value: asn1.BitString) {
		this._fields.BitString = value
	}

	public _fields: {
		Algo: pkix2.AlgorithmIdentifier
		BitString: asn1.BitString
	}

	constructor(init?: Partial<{Algo?: pkix2.AlgorithmIdentifier, BitString?: asn1.BitString}>, __goscriptValue?: boolean) {
		this._fields = {
			Algo: init?.Algo ? init.Algo.clone() : new pkix2.AlgorithmIdentifier(undefined, true),
			BitString: init?.BitString ? init.BitString.clone() : new asn1.BitString(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pkixPublicKey {
		return new pkixPublicKey(this, true)
	}

	public __goscriptAssign(source: pkixPublicKey): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Algo, values.Algo)
		$.assignStruct(target.BitString, values.BitString)
	}

	static __typeInfo = $.registerStructType(
		"x509.pkixPublicKey",
		() => new pkixPublicKey(),
		() => [],
		pkixPublicKey,
		() => [/* @__PURE__ */ $.structField("Algo", "pkix.AlgorithmIdentifier", [0], 0, true), /* @__PURE__ */ $.structField("BitString", "asn1.BitString", [1], 96, true)]
	)
}

export class validity {
	public get NotBefore(): time.Time {
		return this._fields.NotBefore
	}

	public set NotBefore(value: time.Time) {
		this._fields.NotBefore = value
	}

	public get NotAfter(): time.Time {
		return this._fields.NotAfter
	}

	public set NotAfter(value: time.Time) {
		this._fields.NotAfter = value
	}

	public _fields: {
		NotBefore: time.Time
		NotAfter: time.Time
	}

	constructor(init?: Partial<{NotBefore?: time.Time, NotAfter?: time.Time}>, __goscriptValue?: boolean) {
		this._fields = {
			NotBefore: init?.NotBefore ? $.markAsStructValue($.cloneStructValue(init.NotBefore)) : $.markAsStructValue(new time.Time()),
			NotAfter: init?.NotAfter ? $.markAsStructValue($.cloneStructValue(init.NotAfter)) : $.markAsStructValue(new time.Time())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): validity {
		return new validity(this, true)
	}

	public __goscriptAssign(source: validity): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.NotBefore, values.NotBefore)
		$.assignStruct(target.NotAfter, values.NotAfter)
	}

	static __typeInfo = $.registerStructType(
		"x509.validity",
		() => new validity(),
		() => [],
		validity,
		() => [/* @__PURE__ */ $.structField("NotBefore", "time.Time", [0], 0, true), /* @__PURE__ */ $.structField("NotAfter", "time.Time", [1], 24, true)]
	)
}

export class publicKeyInfo {
	public get Raw(): asn1.RawContent {
		return this._fields.Raw
	}

	public set Raw(value: asn1.RawContent) {
		this._fields.Raw = value
	}

	public get Algorithm(): pkix2.AlgorithmIdentifier {
		return this._fields.Algorithm
	}

	public set Algorithm(value: pkix2.AlgorithmIdentifier) {
		this._fields.Algorithm = value
	}

	public get PublicKey(): asn1.BitString {
		return this._fields.PublicKey
	}

	public set PublicKey(value: asn1.BitString) {
		this._fields.PublicKey = value
	}

	public _fields: {
		Raw: asn1.RawContent
		Algorithm: pkix2.AlgorithmIdentifier
		PublicKey: asn1.BitString
	}

	constructor(init?: Partial<{Raw?: asn1.RawContent, Algorithm?: pkix2.AlgorithmIdentifier, PublicKey?: asn1.BitString}>, __goscriptValue?: boolean) {
		this._fields = {
			Raw: init?.Raw ?? (null! as asn1.RawContent),
			Algorithm: init?.Algorithm ? init.Algorithm.clone() : new pkix2.AlgorithmIdentifier(undefined, true),
			PublicKey: init?.PublicKey ? init.PublicKey.clone() : new asn1.BitString(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): publicKeyInfo {
		return new publicKeyInfo(this, true)
	}

	public __goscriptAssign(source: publicKeyInfo): void {
		const target = this._fields
		const values = source._fields
		target.Raw = values.Raw
		$.assignStruct(target.Algorithm, values.Algorithm)
		$.assignStruct(target.PublicKey, values.PublicKey)
	}

	static __typeInfo = $.registerStructType(
		"x509.publicKeyInfo",
		() => new publicKeyInfo(),
		() => [],
		publicKeyInfo,
		() => [/* @__PURE__ */ $.structField("Raw", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "asn1.RawContent"), [0], 0, true), /* @__PURE__ */ $.structField("Algorithm", "pkix.AlgorithmIdentifier", [1], 24, true), /* @__PURE__ */ $.structField("PublicKey", "asn1.BitString", [2], 120, true)]
	)
}

export class tbsCertificate {
	public get Raw(): asn1.RawContent {
		return this._fields.Raw
	}

	public set Raw(value: asn1.RawContent) {
		this._fields.Raw = value
	}

	public get Version(): number {
		return this._fields.Version
	}

	public set Version(value: number) {
		this._fields.Version = value
	}

	public get SerialNumber(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.SerialNumber
	}

	public set SerialNumber(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.SerialNumber = value
	}

	public get SignatureAlgorithm(): pkix2.AlgorithmIdentifier {
		return this._fields.SignatureAlgorithm
	}

	public set SignatureAlgorithm(value: pkix2.AlgorithmIdentifier) {
		this._fields.SignatureAlgorithm = value
	}

	public get Issuer(): asn1.RawValue {
		return this._fields.Issuer
	}

	public set Issuer(value: asn1.RawValue) {
		this._fields.Issuer = value
	}

	public get Validity(): validity {
		return this._fields.Validity
	}

	public set Validity(value: validity) {
		this._fields.Validity = value
	}

	public get Subject(): asn1.RawValue {
		return this._fields.Subject
	}

	public set Subject(value: asn1.RawValue) {
		this._fields.Subject = value
	}

	public get PublicKey(): publicKeyInfo {
		return this._fields.PublicKey
	}

	public set PublicKey(value: publicKeyInfo) {
		this._fields.PublicKey = value
	}

	public get UniqueId(): asn1.BitString {
		return this._fields.UniqueId
	}

	public set UniqueId(value: asn1.BitString) {
		this._fields.UniqueId = value
	}

	public get SubjectUniqueId(): asn1.BitString {
		return this._fields.SubjectUniqueId
	}

	public set SubjectUniqueId(value: asn1.BitString) {
		this._fields.SubjectUniqueId = value
	}

	public get Extensions(): $.Slice<pkix2.Extension> {
		return this._fields.Extensions
	}

	public set Extensions(value: $.Slice<pkix2.Extension>) {
		this._fields.Extensions = value
	}

	public _fields: {
		Raw: asn1.RawContent
		Version: number
		SerialNumber: big.Int | $.VarRef<big.Int> | null
		SignatureAlgorithm: pkix2.AlgorithmIdentifier
		Issuer: asn1.RawValue
		Validity: validity
		Subject: asn1.RawValue
		PublicKey: publicKeyInfo
		UniqueId: asn1.BitString
		SubjectUniqueId: asn1.BitString
		Extensions: $.Slice<pkix2.Extension>
	}

	constructor(init?: Partial<{Raw?: asn1.RawContent, Version?: number, SerialNumber?: big.Int | $.VarRef<big.Int> | null, SignatureAlgorithm?: pkix2.AlgorithmIdentifier, Issuer?: asn1.RawValue, Validity?: validity, Subject?: asn1.RawValue, PublicKey?: publicKeyInfo, UniqueId?: asn1.BitString, SubjectUniqueId?: asn1.BitString, Extensions?: $.Slice<pkix2.Extension>}>, __goscriptValue?: boolean) {
		this._fields = {
			Raw: init?.Raw ?? (null! as asn1.RawContent),
			Version: init?.Version ?? (0 as number),
			SerialNumber: init?.SerialNumber ?? (null! as big.Int | $.VarRef<big.Int> | null),
			SignatureAlgorithm: init?.SignatureAlgorithm ? init.SignatureAlgorithm.clone() : new pkix2.AlgorithmIdentifier(undefined, true),
			Issuer: init?.Issuer ? init.Issuer.clone() : new asn1.RawValue(undefined, true),
			Validity: init?.Validity ? init.Validity.clone() : new validity(undefined, true),
			Subject: init?.Subject ? init.Subject.clone() : new asn1.RawValue(undefined, true),
			PublicKey: init?.PublicKey ? init.PublicKey.clone() : new publicKeyInfo(undefined, true),
			UniqueId: init?.UniqueId ? init.UniqueId.clone() : new asn1.BitString(undefined, true),
			SubjectUniqueId: init?.SubjectUniqueId ? init.SubjectUniqueId.clone() : new asn1.BitString(undefined, true),
			Extensions: init?.Extensions ?? (null! as $.Slice<pkix2.Extension>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tbsCertificate {
		return new tbsCertificate(this, true)
	}

	public __goscriptAssign(source: tbsCertificate): void {
		const target = this._fields
		const values = source._fields
		target.Raw = values.Raw
		target.Version = values.Version
		target.SerialNumber = values.SerialNumber
		$.assignStruct(target.SignatureAlgorithm, values.SignatureAlgorithm)
		$.assignStruct(target.Issuer, values.Issuer)
		$.assignStruct(target.Validity, values.Validity)
		$.assignStruct(target.Subject, values.Subject)
		$.assignStruct(target.PublicKey, values.PublicKey)
		$.assignStruct(target.UniqueId, values.UniqueId)
		$.assignStruct(target.SubjectUniqueId, values.SubjectUniqueId)
		target.Extensions = values.Extensions
	}

	static __typeInfo = $.registerStructType(
		"x509.tbsCertificate",
		() => new tbsCertificate(),
		() => [],
		tbsCertificate,
		() => [/* @__PURE__ */ $.structField("Raw", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "asn1.RawContent"), [0], 0, true), /* @__PURE__ */ $.structField("Version", /* @__PURE__ */ $.basicType("int"), [1], 24, true, { tag: "asn1:\"optional,explicit,default:0,tag:0\"" }), /* @__PURE__ */ $.structField("SerialNumber", /* @__PURE__ */ $.pointerType("big.Int"), [2], 32, true), /* @__PURE__ */ $.structField("SignatureAlgorithm", "pkix.AlgorithmIdentifier", [3], 40, true), /* @__PURE__ */ $.structField("Issuer", "asn1.RawValue", [4], 136, true), /* @__PURE__ */ $.structField("Validity", "x509.validity", [5], 208, true), /* @__PURE__ */ $.structField("Subject", "asn1.RawValue", [6], 256, true), /* @__PURE__ */ $.structField("PublicKey", "x509.publicKeyInfo", [7], 328, true), /* @__PURE__ */ $.structField("UniqueId", "asn1.BitString", [8], 480, true, { tag: "asn1:\"optional,tag:1\"" }), /* @__PURE__ */ $.structField("SubjectUniqueId", "asn1.BitString", [9], 512, true, { tag: "asn1:\"optional,tag:2\"" }), /* @__PURE__ */ $.structField("Extensions", /* @__PURE__ */ $.sliceType("pkix.Extension"), [10], 544, true, { tag: "asn1:\"omitempty,optional,explicit,tag:3\"" })]
	)
}

export class certificate {
	public get TBSCertificate(): tbsCertificate {
		return this._fields.TBSCertificate
	}

	public set TBSCertificate(value: tbsCertificate) {
		this._fields.TBSCertificate = value
	}

	public get SignatureAlgorithm(): pkix2.AlgorithmIdentifier {
		return this._fields.SignatureAlgorithm
	}

	public set SignatureAlgorithm(value: pkix2.AlgorithmIdentifier) {
		this._fields.SignatureAlgorithm = value
	}

	public get SignatureValue(): asn1.BitString {
		return this._fields.SignatureValue
	}

	public set SignatureValue(value: asn1.BitString) {
		this._fields.SignatureValue = value
	}

	public _fields: {
		TBSCertificate: tbsCertificate
		SignatureAlgorithm: pkix2.AlgorithmIdentifier
		SignatureValue: asn1.BitString
	}

	constructor(init?: Partial<{TBSCertificate?: tbsCertificate, SignatureAlgorithm?: pkix2.AlgorithmIdentifier, SignatureValue?: asn1.BitString}>, __goscriptValue?: boolean) {
		this._fields = {
			TBSCertificate: init?.TBSCertificate ? init.TBSCertificate.clone() : new tbsCertificate(undefined, true),
			SignatureAlgorithm: init?.SignatureAlgorithm ? init.SignatureAlgorithm.clone() : new pkix2.AlgorithmIdentifier(undefined, true),
			SignatureValue: init?.SignatureValue ? init.SignatureValue.clone() : new asn1.BitString(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): certificate {
		return new certificate(this, true)
	}

	public __goscriptAssign(source: certificate): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.TBSCertificate, values.TBSCertificate)
		$.assignStruct(target.SignatureAlgorithm, values.SignatureAlgorithm)
		$.assignStruct(target.SignatureValue, values.SignatureValue)
	}

	static __typeInfo = $.registerStructType(
		"x509.certificate",
		() => new certificate(),
		() => [],
		certificate,
		() => [/* @__PURE__ */ $.structField("TBSCertificate", "x509.tbsCertificate", [0], 0, true), /* @__PURE__ */ $.structField("SignatureAlgorithm", "pkix.AlgorithmIdentifier", [1], 568, true), /* @__PURE__ */ $.structField("SignatureValue", "asn1.BitString", [2], 664, true)]
	)
}

export class dsaAlgorithmParameters {
	public get P(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.P
	}

	public set P(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.P = value
	}

	public get Q(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.Q
	}

	public set Q(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.Q = value
	}

	public get G(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.G
	}

	public set G(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.G = value
	}

	public _fields: {
		P: big.Int | $.VarRef<big.Int> | null
		Q: big.Int | $.VarRef<big.Int> | null
		G: big.Int | $.VarRef<big.Int> | null
	}

	constructor(init?: Partial<{P?: big.Int | $.VarRef<big.Int> | null, Q?: big.Int | $.VarRef<big.Int> | null, G?: big.Int | $.VarRef<big.Int> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			P: init?.P ?? (null! as big.Int | $.VarRef<big.Int> | null),
			Q: init?.Q ?? (null! as big.Int | $.VarRef<big.Int> | null),
			G: init?.G ?? (null! as big.Int | $.VarRef<big.Int> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dsaAlgorithmParameters {
		return new dsaAlgorithmParameters(this, true)
	}

	public __goscriptAssign(source: dsaAlgorithmParameters): void {
		const target = this._fields
		const values = source._fields
		target.P = values.P
		target.Q = values.Q
		target.G = values.G
	}

	static __typeInfo = $.registerStructType(
		"x509.dsaAlgorithmParameters",
		() => new dsaAlgorithmParameters(),
		() => [],
		dsaAlgorithmParameters,
		() => [/* @__PURE__ */ $.structField("P", /* @__PURE__ */ $.pointerType("big.Int"), [0], 0, true), /* @__PURE__ */ $.structField("Q", /* @__PURE__ */ $.pointerType("big.Int"), [1], 8, true), /* @__PURE__ */ $.structField("G", /* @__PURE__ */ $.pointerType("big.Int"), [2], 16, true)]
	)
}

export class authKeyId {
	public get Id(): $.Slice<number> {
		return this._fields.Id
	}

	public set Id(value: $.Slice<number>) {
		this._fields.Id = value
	}

	public _fields: {
		Id: $.Slice<number>
	}

	constructor(init?: Partial<{Id?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Id: init?.Id ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): authKeyId {
		return new authKeyId(this, true)
	}

	public __goscriptAssign(source: authKeyId): void {
		const target = this._fields
		const values = source._fields
		target.Id = values.Id
	}

	static __typeInfo = $.registerStructType(
		"x509.authKeyId",
		() => new authKeyId(),
		() => [],
		authKeyId,
		() => [/* @__PURE__ */ $.structField("Id", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, true, { tag: "asn1:\"optional,tag:0\"" })]
	)
}

export class pssParameters {
	// The following three fields are not marked as
	// optional because the default values specify SHA-1,
	// which is no longer suitable for use in signatures.
	public get Hash(): pkix2.AlgorithmIdentifier {
		return this._fields.Hash
	}

	public set Hash(value: pkix2.AlgorithmIdentifier) {
		this._fields.Hash = value
	}

	public get MGF(): pkix2.AlgorithmIdentifier {
		return this._fields.MGF
	}

	public set MGF(value: pkix2.AlgorithmIdentifier) {
		this._fields.MGF = value
	}

	public get SaltLength(): number {
		return this._fields.SaltLength
	}

	public set SaltLength(value: number) {
		this._fields.SaltLength = value
	}

	public get TrailerField(): number {
		return this._fields.TrailerField
	}

	public set TrailerField(value: number) {
		this._fields.TrailerField = value
	}

	public _fields: {
		Hash: pkix2.AlgorithmIdentifier
		MGF: pkix2.AlgorithmIdentifier
		SaltLength: number
		TrailerField: number
	}

	constructor(init?: Partial<{Hash?: pkix2.AlgorithmIdentifier, MGF?: pkix2.AlgorithmIdentifier, SaltLength?: number, TrailerField?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Hash: init?.Hash ? init.Hash.clone() : new pkix2.AlgorithmIdentifier(undefined, true),
			MGF: init?.MGF ? init.MGF.clone() : new pkix2.AlgorithmIdentifier(undefined, true),
			SaltLength: init?.SaltLength ?? (0 as number),
			TrailerField: init?.TrailerField ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pssParameters {
		return new pssParameters(this, true)
	}

	public __goscriptAssign(source: pssParameters): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Hash, values.Hash)
		$.assignStruct(target.MGF, values.MGF)
		target.SaltLength = values.SaltLength
		target.TrailerField = values.TrailerField
	}

	static __typeInfo = $.registerStructType(
		"x509.pssParameters",
		() => new pssParameters(),
		() => [],
		pssParameters,
		() => [/* @__PURE__ */ $.structField("Hash", "pkix.AlgorithmIdentifier", [0], 0, true, { tag: "asn1:\"explicit,tag:0\"" }), /* @__PURE__ */ $.structField("MGF", "pkix.AlgorithmIdentifier", [1], 96, true, { tag: "asn1:\"explicit,tag:1\"" }), /* @__PURE__ */ $.structField("SaltLength", /* @__PURE__ */ $.basicType("int"), [2], 192, true, { tag: "asn1:\"explicit,tag:2\"" }), /* @__PURE__ */ $.structField("TrailerField", /* @__PURE__ */ $.basicType("int"), [3], 200, true, { tag: "asn1:\"optional,explicit,tag:3,default:1\"" })]
	)
}

export class Certificate {
	public get Raw(): $.Slice<number> {
		return this._fields.Raw
	}

	public set Raw(value: $.Slice<number>) {
		this._fields.Raw = value
	}

	public get RawTBSCertificate(): $.Slice<number> {
		return this._fields.RawTBSCertificate
	}

	public set RawTBSCertificate(value: $.Slice<number>) {
		this._fields.RawTBSCertificate = value
	}

	public get RawSubjectPublicKeyInfo(): $.Slice<number> {
		return this._fields.RawSubjectPublicKeyInfo
	}

	public set RawSubjectPublicKeyInfo(value: $.Slice<number>) {
		this._fields.RawSubjectPublicKeyInfo = value
	}

	public get RawSubject(): $.Slice<number> {
		return this._fields.RawSubject
	}

	public set RawSubject(value: $.Slice<number>) {
		this._fields.RawSubject = value
	}

	public get RawIssuer(): $.Slice<number> {
		return this._fields.RawIssuer
	}

	public set RawIssuer(value: $.Slice<number>) {
		this._fields.RawIssuer = value
	}

	public get RawSignatureAlgorithm(): $.Slice<number> {
		return this._fields.RawSignatureAlgorithm
	}

	public set RawSignatureAlgorithm(value: $.Slice<number>) {
		this._fields.RawSignatureAlgorithm = value
	}

	public get Signature(): $.Slice<number> {
		return this._fields.Signature
	}

	public set Signature(value: $.Slice<number>) {
		this._fields.Signature = value
	}

	public get SignatureAlgorithm(): SignatureAlgorithm {
		return this._fields.SignatureAlgorithm
	}

	public set SignatureAlgorithm(value: SignatureAlgorithm) {
		this._fields.SignatureAlgorithm = value
	}

	public get PublicKeyAlgorithm(): PublicKeyAlgorithm {
		return this._fields.PublicKeyAlgorithm
	}

	public set PublicKeyAlgorithm(value: PublicKeyAlgorithm) {
		this._fields.PublicKeyAlgorithm = value
	}

	public get PublicKey(): any {
		return this._fields.PublicKey
	}

	public set PublicKey(value: any) {
		this._fields.PublicKey = value
	}

	public get Version(): number {
		return this._fields.Version
	}

	public set Version(value: number) {
		this._fields.Version = value
	}

	public get SerialNumber(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.SerialNumber
	}

	public set SerialNumber(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.SerialNumber = value
	}

	public get Issuer(): pkix2.Name {
		return this._fields.Issuer
	}

	public set Issuer(value: pkix2.Name) {
		this._fields.Issuer = value
	}

	public get Subject(): pkix2.Name {
		return this._fields.Subject
	}

	public set Subject(value: pkix2.Name) {
		this._fields.Subject = value
	}

	public get NotBefore(): time.Time {
		return this._fields.NotBefore
	}

	public set NotBefore(value: time.Time) {
		this._fields.NotBefore = value
	}

	public get NotAfter(): time.Time {
		return this._fields.NotAfter
	}

	public set NotAfter(value: time.Time) {
		this._fields.NotAfter = value
	}

	public get KeyUsage(): KeyUsage {
		return this._fields.KeyUsage
	}

	public set KeyUsage(value: KeyUsage) {
		this._fields.KeyUsage = value
	}

	// Extensions contains raw X.509 extensions. When parsing certificates,
	// this can be used to extract non-critical extensions that are not
	// parsed by this package. When marshaling certificates, the Extensions
	// field is ignored, see ExtraExtensions.
	public get Extensions(): $.Slice<pkix2.Extension> {
		return this._fields.Extensions
	}

	public set Extensions(value: $.Slice<pkix2.Extension>) {
		this._fields.Extensions = value
	}

	// ExtraExtensions contains extensions to be copied, raw, into any
	// marshaled certificates. Values override any extensions that would
	// otherwise be produced based on the other fields. The ExtraExtensions
	// field is not populated when parsing certificates, see Extensions.
	public get ExtraExtensions(): $.Slice<pkix2.Extension> {
		return this._fields.ExtraExtensions
	}

	public set ExtraExtensions(value: $.Slice<pkix2.Extension>) {
		this._fields.ExtraExtensions = value
	}

	// UnhandledCriticalExtensions contains a list of extension IDs that
	// were not (fully) processed when parsing. Verify will fail if this
	// slice is non-empty, unless verification is delegated to an OS
	// library which understands all the critical extensions.
	//
	// Users can access these extensions using Extensions and can remove
	// elements from this slice if they believe that they have been
	// handled.
	public get UnhandledCriticalExtensions(): $.Slice<asn1.ObjectIdentifier> {
		return this._fields.UnhandledCriticalExtensions
	}

	public set UnhandledCriticalExtensions(value: $.Slice<asn1.ObjectIdentifier>) {
		this._fields.UnhandledCriticalExtensions = value
	}

	public get ExtKeyUsage(): $.Slice<ExtKeyUsage> {
		return this._fields.ExtKeyUsage
	}

	public set ExtKeyUsage(value: $.Slice<ExtKeyUsage>) {
		this._fields.ExtKeyUsage = value
	}

	public get UnknownExtKeyUsage(): $.Slice<asn1.ObjectIdentifier> {
		return this._fields.UnknownExtKeyUsage
	}

	public set UnknownExtKeyUsage(value: $.Slice<asn1.ObjectIdentifier>) {
		this._fields.UnknownExtKeyUsage = value
	}

	// BasicConstraintsValid indicates whether IsCA, MaxPathLen,
	// and MaxPathLenZero are valid.
	public get BasicConstraintsValid(): boolean {
		return this._fields.BasicConstraintsValid
	}

	public set BasicConstraintsValid(value: boolean) {
		this._fields.BasicConstraintsValid = value
	}

	public get IsCA(): boolean {
		return this._fields.IsCA
	}

	public set IsCA(value: boolean) {
		this._fields.IsCA = value
	}

	// MaxPathLen and MaxPathLenZero indicate the presence and
	// value of the BasicConstraints' "pathLenConstraint".
	//
	// When parsing a certificate, a positive non-zero MaxPathLen
	// means that the field was specified, -1 means it was unset,
	// and MaxPathLenZero being true mean that the field was
	// explicitly set to zero. The case of MaxPathLen==0 with MaxPathLenZero==false
	// should be treated equivalent to -1 (unset).
	//
	// When generating a certificate, an unset pathLenConstraint
	// can be requested with either MaxPathLen == -1 or using the
	// zero value for both MaxPathLen and MaxPathLenZero.
	public get MaxPathLen(): number {
		return this._fields.MaxPathLen
	}

	public set MaxPathLen(value: number) {
		this._fields.MaxPathLen = value
	}

	// MaxPathLenZero indicates that BasicConstraintsValid==true
	// and MaxPathLen==0 should be interpreted as an actual
	// maximum path length of zero. Otherwise, that combination is
	// interpreted as MaxPathLen not being set.
	public get MaxPathLenZero(): boolean {
		return this._fields.MaxPathLenZero
	}

	public set MaxPathLenZero(value: boolean) {
		this._fields.MaxPathLenZero = value
	}

	public get SubjectKeyId(): $.Slice<number> {
		return this._fields.SubjectKeyId
	}

	public set SubjectKeyId(value: $.Slice<number>) {
		this._fields.SubjectKeyId = value
	}

	public get AuthorityKeyId(): $.Slice<number> {
		return this._fields.AuthorityKeyId
	}

	public set AuthorityKeyId(value: $.Slice<number>) {
		this._fields.AuthorityKeyId = value
	}

	// RFC 5280, 4.2.2.1 (Authority Information Access)
	public get OCSPServer(): $.Slice<string> {
		return this._fields.OCSPServer
	}

	public set OCSPServer(value: $.Slice<string>) {
		this._fields.OCSPServer = value
	}

	public get IssuingCertificateURL(): $.Slice<string> {
		return this._fields.IssuingCertificateURL
	}

	public set IssuingCertificateURL(value: $.Slice<string>) {
		this._fields.IssuingCertificateURL = value
	}

	// Subject Alternate Name values. (Note that these values may not be valid
	// if invalid values were contained within a parsed certificate. For
	// example, an element of DNSNames may not be a valid DNS domain name.)
	public get DNSNames(): $.Slice<string> {
		return this._fields.DNSNames
	}

	public set DNSNames(value: $.Slice<string>) {
		this._fields.DNSNames = value
	}

	public get EmailAddresses(): $.Slice<string> {
		return this._fields.EmailAddresses
	}

	public set EmailAddresses(value: $.Slice<string>) {
		this._fields.EmailAddresses = value
	}

	public get IPAddresses(): $.Slice<net.IP> {
		return this._fields.IPAddresses
	}

	public set IPAddresses(value: $.Slice<net.IP>) {
		this._fields.IPAddresses = value
	}

	public get URIs(): $.Slice<url.URL | $.VarRef<url.URL> | null> {
		return this._fields.URIs
	}

	public set URIs(value: $.Slice<url.URL | $.VarRef<url.URL> | null>) {
		this._fields.URIs = value
	}

	// Name constraints
	public get PermittedDNSDomainsCritical(): boolean {
		return this._fields.PermittedDNSDomainsCritical
	}

	public set PermittedDNSDomainsCritical(value: boolean) {
		this._fields.PermittedDNSDomainsCritical = value
	}

	public get PermittedDNSDomains(): $.Slice<string> {
		return this._fields.PermittedDNSDomains
	}

	public set PermittedDNSDomains(value: $.Slice<string>) {
		this._fields.PermittedDNSDomains = value
	}

	public get ExcludedDNSDomains(): $.Slice<string> {
		return this._fields.ExcludedDNSDomains
	}

	public set ExcludedDNSDomains(value: $.Slice<string>) {
		this._fields.ExcludedDNSDomains = value
	}

	public get PermittedIPRanges(): $.Slice<net.IPNet | $.VarRef<net.IPNet> | null> {
		return this._fields.PermittedIPRanges
	}

	public set PermittedIPRanges(value: $.Slice<net.IPNet | $.VarRef<net.IPNet> | null>) {
		this._fields.PermittedIPRanges = value
	}

	public get ExcludedIPRanges(): $.Slice<net.IPNet | $.VarRef<net.IPNet> | null> {
		return this._fields.ExcludedIPRanges
	}

	public set ExcludedIPRanges(value: $.Slice<net.IPNet | $.VarRef<net.IPNet> | null>) {
		this._fields.ExcludedIPRanges = value
	}

	public get PermittedEmailAddresses(): $.Slice<string> {
		return this._fields.PermittedEmailAddresses
	}

	public set PermittedEmailAddresses(value: $.Slice<string>) {
		this._fields.PermittedEmailAddresses = value
	}

	public get ExcludedEmailAddresses(): $.Slice<string> {
		return this._fields.ExcludedEmailAddresses
	}

	public set ExcludedEmailAddresses(value: $.Slice<string>) {
		this._fields.ExcludedEmailAddresses = value
	}

	public get PermittedURIDomains(): $.Slice<string> {
		return this._fields.PermittedURIDomains
	}

	public set PermittedURIDomains(value: $.Slice<string>) {
		this._fields.PermittedURIDomains = value
	}

	public get ExcludedURIDomains(): $.Slice<string> {
		return this._fields.ExcludedURIDomains
	}

	public set ExcludedURIDomains(value: $.Slice<string>) {
		this._fields.ExcludedURIDomains = value
	}

	// CRL Distribution Points
	public get CRLDistributionPoints(): $.Slice<string> {
		return this._fields.CRLDistributionPoints
	}

	public set CRLDistributionPoints(value: $.Slice<string>) {
		this._fields.CRLDistributionPoints = value
	}

	// PolicyIdentifiers contains asn1.ObjectIdentifiers, the components
	// of which are limited to int32. If a certificate contains a policy which
	// cannot be represented by asn1.ObjectIdentifier, it will not be included in
	// PolicyIdentifiers, but will be present in Policies, which contains all parsed
	// policy OIDs.
	// See CreateCertificate for context about how this field and the Policies field
	// interact.
	public get PolicyIdentifiers(): $.Slice<asn1.ObjectIdentifier> {
		return this._fields.PolicyIdentifiers
	}

	public set PolicyIdentifiers(value: $.Slice<asn1.ObjectIdentifier>) {
		this._fields.PolicyIdentifiers = value
	}

	// Policies contains all policy identifiers included in the certificate.
	// See CreateCertificate for context about how this field and the PolicyIdentifiers field
	// interact.
	// In Go 1.22, encoding/gob cannot handle and ignores this field.
	public get Policies(): $.Slice<__goscript_oid.OID> {
		return this._fields.Policies
	}

	public set Policies(value: $.Slice<__goscript_oid.OID>) {
		this._fields.Policies = value
	}

	// InhibitAnyPolicy and InhibitAnyPolicyZero indicate the presence and value
	// of the inhibitAnyPolicy extension.
	//
	// The value of InhibitAnyPolicy indicates the number of additional
	// certificates in the path after this certificate that may use the
	// anyPolicy policy OID to indicate a match with any other policy.
	//
	// When parsing a certificate, a positive non-zero InhibitAnyPolicy means
	// that the field was specified, -1 means it was unset, and
	// InhibitAnyPolicyZero being true mean that the field was explicitly set to
	// zero. The case of InhibitAnyPolicy==0 with InhibitAnyPolicyZero==false
	// should be treated equivalent to -1 (unset).
	public get InhibitAnyPolicy(): number {
		return this._fields.InhibitAnyPolicy
	}

	public set InhibitAnyPolicy(value: number) {
		this._fields.InhibitAnyPolicy = value
	}

	// InhibitAnyPolicyZero indicates that InhibitAnyPolicy==0 should be
	// interpreted as an actual maximum path length of zero. Otherwise, that
	// combination is interpreted as InhibitAnyPolicy not being set.
	public get InhibitAnyPolicyZero(): boolean {
		return this._fields.InhibitAnyPolicyZero
	}

	public set InhibitAnyPolicyZero(value: boolean) {
		this._fields.InhibitAnyPolicyZero = value
	}

	// InhibitPolicyMapping and InhibitPolicyMappingZero indicate the presence
	// and value of the inhibitPolicyMapping field of the policyConstraints
	// extension.
	//
	// The value of InhibitPolicyMapping indicates the number of additional
	// certificates in the path after this certificate that may use policy
	// mapping.
	//
	// When parsing a certificate, a positive non-zero InhibitPolicyMapping
	// means that the field was specified, -1 means it was unset, and
	// InhibitPolicyMappingZero being true mean that the field was explicitly
	// set to zero. The case of InhibitPolicyMapping==0 with
	// InhibitPolicyMappingZero==false should be treated equivalent to -1
	// (unset).
	public get InhibitPolicyMapping(): number {
		return this._fields.InhibitPolicyMapping
	}

	public set InhibitPolicyMapping(value: number) {
		this._fields.InhibitPolicyMapping = value
	}

	// InhibitPolicyMappingZero indicates that InhibitPolicyMapping==0 should be
	// interpreted as an actual maximum path length of zero. Otherwise, that
	// combination is interpreted as InhibitAnyPolicy not being set.
	public get InhibitPolicyMappingZero(): boolean {
		return this._fields.InhibitPolicyMappingZero
	}

	public set InhibitPolicyMappingZero(value: boolean) {
		this._fields.InhibitPolicyMappingZero = value
	}

	// RequireExplicitPolicy and RequireExplicitPolicyZero indicate the presence
	// and value of the requireExplicitPolicy field of the policyConstraints
	// extension.
	//
	// The value of RequireExplicitPolicy indicates the number of additional
	// certificates in the path after this certificate before an explicit policy
	// is required for the rest of the path. When an explicit policy is required,
	// each subsequent certificate in the path must contain a required policy OID,
	// or a policy OID which has been declared as equivalent through the policy
	// mapping extension.
	//
	// When parsing a certificate, a positive non-zero RequireExplicitPolicy
	// means that the field was specified, -1 means it was unset, and
	// RequireExplicitPolicyZero being true mean that the field was explicitly
	// set to zero. The case of RequireExplicitPolicy==0 with
	// RequireExplicitPolicyZero==false should be treated equivalent to -1
	// (unset).
	public get RequireExplicitPolicy(): number {
		return this._fields.RequireExplicitPolicy
	}

	public set RequireExplicitPolicy(value: number) {
		this._fields.RequireExplicitPolicy = value
	}

	// RequireExplicitPolicyZero indicates that RequireExplicitPolicy==0 should be
	// interpreted as an actual maximum path length of zero. Otherwise, that
	// combination is interpreted as InhibitAnyPolicy not being set.
	public get RequireExplicitPolicyZero(): boolean {
		return this._fields.RequireExplicitPolicyZero
	}

	public set RequireExplicitPolicyZero(value: boolean) {
		this._fields.RequireExplicitPolicyZero = value
	}

	// PolicyMappings contains a list of policy mappings included in the certificate.
	public get PolicyMappings(): $.Slice<PolicyMapping> {
		return this._fields.PolicyMappings
	}

	public set PolicyMappings(value: $.Slice<PolicyMapping>) {
		this._fields.PolicyMappings = value
	}

	public _fields: {
		Raw: $.Slice<number>
		RawTBSCertificate: $.Slice<number>
		RawSubjectPublicKeyInfo: $.Slice<number>
		RawSubject: $.Slice<number>
		RawIssuer: $.Slice<number>
		RawSignatureAlgorithm: $.Slice<number>
		Signature: $.Slice<number>
		SignatureAlgorithm: SignatureAlgorithm
		PublicKeyAlgorithm: PublicKeyAlgorithm
		PublicKey: any
		Version: number
		SerialNumber: big.Int | $.VarRef<big.Int> | null
		Issuer: pkix2.Name
		Subject: pkix2.Name
		NotBefore: time.Time
		NotAfter: time.Time
		KeyUsage: KeyUsage
		Extensions: $.Slice<pkix2.Extension>
		ExtraExtensions: $.Slice<pkix2.Extension>
		UnhandledCriticalExtensions: $.Slice<asn1.ObjectIdentifier>
		ExtKeyUsage: $.Slice<ExtKeyUsage>
		UnknownExtKeyUsage: $.Slice<asn1.ObjectIdentifier>
		BasicConstraintsValid: boolean
		IsCA: boolean
		MaxPathLen: number
		MaxPathLenZero: boolean
		SubjectKeyId: $.Slice<number>
		AuthorityKeyId: $.Slice<number>
		OCSPServer: $.Slice<string>
		IssuingCertificateURL: $.Slice<string>
		DNSNames: $.Slice<string>
		EmailAddresses: $.Slice<string>
		IPAddresses: $.Slice<net.IP>
		URIs: $.Slice<url.URL | $.VarRef<url.URL> | null>
		PermittedDNSDomainsCritical: boolean
		PermittedDNSDomains: $.Slice<string>
		ExcludedDNSDomains: $.Slice<string>
		PermittedIPRanges: $.Slice<net.IPNet | $.VarRef<net.IPNet> | null>
		ExcludedIPRanges: $.Slice<net.IPNet | $.VarRef<net.IPNet> | null>
		PermittedEmailAddresses: $.Slice<string>
		ExcludedEmailAddresses: $.Slice<string>
		PermittedURIDomains: $.Slice<string>
		ExcludedURIDomains: $.Slice<string>
		CRLDistributionPoints: $.Slice<string>
		PolicyIdentifiers: $.Slice<asn1.ObjectIdentifier>
		Policies: $.Slice<__goscript_oid.OID>
		InhibitAnyPolicy: number
		InhibitAnyPolicyZero: boolean
		InhibitPolicyMapping: number
		InhibitPolicyMappingZero: boolean
		RequireExplicitPolicy: number
		RequireExplicitPolicyZero: boolean
		PolicyMappings: $.Slice<PolicyMapping>
	}

	constructor(init?: Partial<{Raw?: $.Slice<number>, RawTBSCertificate?: $.Slice<number>, RawSubjectPublicKeyInfo?: $.Slice<number>, RawSubject?: $.Slice<number>, RawIssuer?: $.Slice<number>, RawSignatureAlgorithm?: $.Slice<number>, Signature?: $.Slice<number>, SignatureAlgorithm?: SignatureAlgorithm, PublicKeyAlgorithm?: PublicKeyAlgorithm, PublicKey?: any, Version?: number, SerialNumber?: big.Int | $.VarRef<big.Int> | null, Issuer?: pkix2.Name, Subject?: pkix2.Name, NotBefore?: time.Time, NotAfter?: time.Time, KeyUsage?: KeyUsage, Extensions?: $.Slice<pkix2.Extension>, ExtraExtensions?: $.Slice<pkix2.Extension>, UnhandledCriticalExtensions?: $.Slice<asn1.ObjectIdentifier>, ExtKeyUsage?: $.Slice<ExtKeyUsage>, UnknownExtKeyUsage?: $.Slice<asn1.ObjectIdentifier>, BasicConstraintsValid?: boolean, IsCA?: boolean, MaxPathLen?: number, MaxPathLenZero?: boolean, SubjectKeyId?: $.Slice<number>, AuthorityKeyId?: $.Slice<number>, OCSPServer?: $.Slice<string>, IssuingCertificateURL?: $.Slice<string>, DNSNames?: $.Slice<string>, EmailAddresses?: $.Slice<string>, IPAddresses?: $.Slice<net.IP>, URIs?: $.Slice<url.URL | $.VarRef<url.URL> | null>, PermittedDNSDomainsCritical?: boolean, PermittedDNSDomains?: $.Slice<string>, ExcludedDNSDomains?: $.Slice<string>, PermittedIPRanges?: $.Slice<net.IPNet | $.VarRef<net.IPNet> | null>, ExcludedIPRanges?: $.Slice<net.IPNet | $.VarRef<net.IPNet> | null>, PermittedEmailAddresses?: $.Slice<string>, ExcludedEmailAddresses?: $.Slice<string>, PermittedURIDomains?: $.Slice<string>, ExcludedURIDomains?: $.Slice<string>, CRLDistributionPoints?: $.Slice<string>, PolicyIdentifiers?: $.Slice<asn1.ObjectIdentifier>, Policies?: $.Slice<__goscript_oid.OID>, InhibitAnyPolicy?: number, InhibitAnyPolicyZero?: boolean, InhibitPolicyMapping?: number, InhibitPolicyMappingZero?: boolean, RequireExplicitPolicy?: number, RequireExplicitPolicyZero?: boolean, PolicyMappings?: $.Slice<PolicyMapping>}>, __goscriptValue?: boolean) {
		this._fields = {
			Raw: init?.Raw ?? (null! as $.Slice<number>),
			RawTBSCertificate: init?.RawTBSCertificate ?? (null! as $.Slice<number>),
			RawSubjectPublicKeyInfo: init?.RawSubjectPublicKeyInfo ?? (null! as $.Slice<number>),
			RawSubject: init?.RawSubject ?? (null! as $.Slice<number>),
			RawIssuer: init?.RawIssuer ?? (null! as $.Slice<number>),
			RawSignatureAlgorithm: init?.RawSignatureAlgorithm ?? (null! as $.Slice<number>),
			Signature: init?.Signature ?? (null! as $.Slice<number>),
			SignatureAlgorithm: init?.SignatureAlgorithm ?? (0 as SignatureAlgorithm),
			PublicKeyAlgorithm: init?.PublicKeyAlgorithm ?? (0 as PublicKeyAlgorithm),
			PublicKey: init?.PublicKey ?? (null! as any),
			Version: init?.Version ?? (0 as number),
			SerialNumber: init?.SerialNumber ?? (null! as big.Int | $.VarRef<big.Int> | null),
			Issuer: init?.Issuer ? init.Issuer.clone() : new pkix2.Name(undefined, true),
			Subject: init?.Subject ? init.Subject.clone() : new pkix2.Name(undefined, true),
			NotBefore: init?.NotBefore ? $.markAsStructValue($.cloneStructValue(init.NotBefore)) : $.markAsStructValue(new time.Time()),
			NotAfter: init?.NotAfter ? $.markAsStructValue($.cloneStructValue(init.NotAfter)) : $.markAsStructValue(new time.Time()),
			KeyUsage: init?.KeyUsage ?? (0 as KeyUsage),
			Extensions: init?.Extensions ?? (null! as $.Slice<pkix2.Extension>),
			ExtraExtensions: init?.ExtraExtensions ?? (null! as $.Slice<pkix2.Extension>),
			UnhandledCriticalExtensions: init?.UnhandledCriticalExtensions ?? (null! as $.Slice<asn1.ObjectIdentifier>),
			ExtKeyUsage: init?.ExtKeyUsage ?? (null! as $.Slice<ExtKeyUsage>),
			UnknownExtKeyUsage: init?.UnknownExtKeyUsage ?? (null! as $.Slice<asn1.ObjectIdentifier>),
			BasicConstraintsValid: init?.BasicConstraintsValid ?? (false as boolean),
			IsCA: init?.IsCA ?? (false as boolean),
			MaxPathLen: init?.MaxPathLen ?? (0 as number),
			MaxPathLenZero: init?.MaxPathLenZero ?? (false as boolean),
			SubjectKeyId: init?.SubjectKeyId ?? (null! as $.Slice<number>),
			AuthorityKeyId: init?.AuthorityKeyId ?? (null! as $.Slice<number>),
			OCSPServer: init?.OCSPServer ?? (null! as $.Slice<string>),
			IssuingCertificateURL: init?.IssuingCertificateURL ?? (null! as $.Slice<string>),
			DNSNames: init?.DNSNames ?? (null! as $.Slice<string>),
			EmailAddresses: init?.EmailAddresses ?? (null! as $.Slice<string>),
			IPAddresses: init?.IPAddresses ?? (null! as $.Slice<net.IP>),
			URIs: init?.URIs ?? (null! as $.Slice<url.URL | $.VarRef<url.URL> | null>),
			PermittedDNSDomainsCritical: init?.PermittedDNSDomainsCritical ?? (false as boolean),
			PermittedDNSDomains: init?.PermittedDNSDomains ?? (null! as $.Slice<string>),
			ExcludedDNSDomains: init?.ExcludedDNSDomains ?? (null! as $.Slice<string>),
			PermittedIPRanges: init?.PermittedIPRanges ?? (null! as $.Slice<net.IPNet | $.VarRef<net.IPNet> | null>),
			ExcludedIPRanges: init?.ExcludedIPRanges ?? (null! as $.Slice<net.IPNet | $.VarRef<net.IPNet> | null>),
			PermittedEmailAddresses: init?.PermittedEmailAddresses ?? (null! as $.Slice<string>),
			ExcludedEmailAddresses: init?.ExcludedEmailAddresses ?? (null! as $.Slice<string>),
			PermittedURIDomains: init?.PermittedURIDomains ?? (null! as $.Slice<string>),
			ExcludedURIDomains: init?.ExcludedURIDomains ?? (null! as $.Slice<string>),
			CRLDistributionPoints: init?.CRLDistributionPoints ?? (null! as $.Slice<string>),
			PolicyIdentifiers: init?.PolicyIdentifiers ?? (null! as $.Slice<asn1.ObjectIdentifier>),
			Policies: init?.Policies ?? (null! as $.Slice<__goscript_oid.OID>),
			InhibitAnyPolicy: init?.InhibitAnyPolicy ?? (0 as number),
			InhibitAnyPolicyZero: init?.InhibitAnyPolicyZero ?? (false as boolean),
			InhibitPolicyMapping: init?.InhibitPolicyMapping ?? (0 as number),
			InhibitPolicyMappingZero: init?.InhibitPolicyMappingZero ?? (false as boolean),
			RequireExplicitPolicy: init?.RequireExplicitPolicy ?? (0 as number),
			RequireExplicitPolicyZero: init?.RequireExplicitPolicyZero ?? (false as boolean),
			PolicyMappings: init?.PolicyMappings ?? (null! as $.Slice<PolicyMapping>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Certificate {
		return new Certificate(this, true)
	}

	public __goscriptAssign(source: Certificate): void {
		const target = this._fields
		const values = source._fields
		target.Raw = values.Raw
		target.RawTBSCertificate = values.RawTBSCertificate
		target.RawSubjectPublicKeyInfo = values.RawSubjectPublicKeyInfo
		target.RawSubject = values.RawSubject
		target.RawIssuer = values.RawIssuer
		target.RawSignatureAlgorithm = values.RawSignatureAlgorithm
		target.Signature = values.Signature
		target.SignatureAlgorithm = values.SignatureAlgorithm
		target.PublicKeyAlgorithm = values.PublicKeyAlgorithm
		target.PublicKey = $.assignFieldValue(target.PublicKey, values.PublicKey, { kind: $.TypeKind.Interface, methods: [] })
		target.Version = values.Version
		target.SerialNumber = values.SerialNumber
		$.assignStruct(target.Issuer, values.Issuer)
		$.assignStruct(target.Subject, values.Subject)
		$.assignStruct(target.NotBefore, values.NotBefore)
		$.assignStruct(target.NotAfter, values.NotAfter)
		target.KeyUsage = values.KeyUsage
		target.Extensions = values.Extensions
		target.ExtraExtensions = values.ExtraExtensions
		target.UnhandledCriticalExtensions = values.UnhandledCriticalExtensions
		target.ExtKeyUsage = values.ExtKeyUsage
		target.UnknownExtKeyUsage = values.UnknownExtKeyUsage
		target.BasicConstraintsValid = values.BasicConstraintsValid
		target.IsCA = values.IsCA
		target.MaxPathLen = values.MaxPathLen
		target.MaxPathLenZero = values.MaxPathLenZero
		target.SubjectKeyId = values.SubjectKeyId
		target.AuthorityKeyId = values.AuthorityKeyId
		target.OCSPServer = values.OCSPServer
		target.IssuingCertificateURL = values.IssuingCertificateURL
		target.DNSNames = values.DNSNames
		target.EmailAddresses = values.EmailAddresses
		target.IPAddresses = values.IPAddresses
		target.URIs = values.URIs
		target.PermittedDNSDomainsCritical = values.PermittedDNSDomainsCritical
		target.PermittedDNSDomains = values.PermittedDNSDomains
		target.ExcludedDNSDomains = values.ExcludedDNSDomains
		target.PermittedIPRanges = values.PermittedIPRanges
		target.ExcludedIPRanges = values.ExcludedIPRanges
		target.PermittedEmailAddresses = values.PermittedEmailAddresses
		target.ExcludedEmailAddresses = values.ExcludedEmailAddresses
		target.PermittedURIDomains = values.PermittedURIDomains
		target.ExcludedURIDomains = values.ExcludedURIDomains
		target.CRLDistributionPoints = values.CRLDistributionPoints
		target.PolicyIdentifiers = values.PolicyIdentifiers
		target.Policies = values.Policies
		target.InhibitAnyPolicy = values.InhibitAnyPolicy
		target.InhibitAnyPolicyZero = values.InhibitAnyPolicyZero
		target.InhibitPolicyMapping = values.InhibitPolicyMapping
		target.InhibitPolicyMappingZero = values.InhibitPolicyMappingZero
		target.RequireExplicitPolicy = values.RequireExplicitPolicy
		target.RequireExplicitPolicyZero = values.RequireExplicitPolicyZero
		target.PolicyMappings = values.PolicyMappings
	}

	public async CheckCRLSignature(crl: pkix2.CertificateList | $.VarRef<pkix2.CertificateList> | null): globalThis.Promise<$.GoError> {
		const c: Certificate | $.VarRef<Certificate> | null = this;
		const crl$: pkix2.CertificateList = crl == null ? $.pointerTarget<pkix2.CertificateList>(crl) : (crl as any).__isVarRef === true ? (crl as any).value : (crl as any).__goValue === undefined ? (crl as any) : $.pointerTarget<pkix2.CertificateList>(crl)
		let algo = await getSignatureAlgorithmFromAI(((crl$ as pkix2.CertificateList).SignatureAlgorithm).clone())
		return Certificate.prototype.CheckSignature.call(c, algo, (crl$ as pkix2.CertificateList).TBSCertList.Raw, $.markAsStructValue($.cloneStructValue((crl$ as pkix2.CertificateList).SignatureValue)).RightAlign())
	}

	public async CheckSignature(algo: SignatureAlgorithm, signed: $.Slice<number>, signature: $.Slice<number>): globalThis.Promise<$.GoError> {
		const c: Certificate | $.VarRef<Certificate> | null = this;
		return checkSignature(algo, signed, signature, ($.pointerValue<Certificate>(c).PublicKey as crypto.PublicKey | null), true)
	}

	public async CheckSignatureFrom(parent: Certificate | $.VarRef<Certificate> | null): globalThis.Promise<$.GoError> {
		const c: Certificate | $.VarRef<Certificate> | null = this;
		const c$: Certificate = c == null ? $.pointerTarget<Certificate>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Certificate>(c)
		const parent$: Certificate = parent == null ? $.pointerTarget<Certificate>(parent) : (parent as any).__isVarRef === true ? (parent as any).value : (parent as any).__goValue === undefined ? (parent as any) : $.pointerTarget<Certificate>(parent)
		// RFC 5280, 4.2.1.9:
		// "If the basic constraints extension is not present in a version 3
		// certificate, or the extension is present but the cA boolean is not
		// asserted, then the certified public key MUST NOT be used to verify
		// certificate signatures."
		if ((((parent$ as Certificate).Version == 3) && !(parent$ as Certificate).BasicConstraintsValid) || ((parent$ as Certificate).BasicConstraintsValid && !(parent$ as Certificate).IsCA)) {
			return $.interfaceValue<$.GoError>(new ConstraintViolationError(undefined, true), "x509.ConstraintViolationError", "x509.ConstraintViolationError")
		}

		if (((parent$ as Certificate).KeyUsage != 0) && (((parent$ as Certificate).KeyUsage & 32) == 0)) {
			return $.interfaceValue<$.GoError>(new ConstraintViolationError(undefined, true), "x509.ConstraintViolationError", "x509.ConstraintViolationError")
		}

		if ((parent$ as Certificate).PublicKeyAlgorithm == 0) {
			return ErrUnsupportedAlgorithm
		}

		return checkSignature((c$ as Certificate).SignatureAlgorithm, (c$ as Certificate).RawTBSCertificate, (c$ as Certificate).Signature, ((parent$ as Certificate).PublicKey as crypto.PublicKey | null), false)
	}

	public async CreateCRL(rand: io.Reader | null, priv: any, revokedCerts: $.Slice<pkix2.RevokedCertificate>, now: time.Time, expiry: time.Time): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const c: Certificate | $.VarRef<Certificate> | null = this;
		let crlBytes: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		const c$: Certificate = c == null ? $.pointerTarget<Certificate>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Certificate>(c)
		let [key, ok] = $.typeAssertTuple<crypto.Signer | null>(priv, "crypto.Signer")
		if (!ok) {
			return [null, errors.New("x509: certificate private key does not implement crypto.Signer")]
		}

		let __goscriptTuple11: any = await signingParamsForKey(key, 0)
		let signatureAlgorithm = __goscriptTuple11[0]
		let algorithmIdentifier = __goscriptTuple11[1]
		err = __goscriptTuple11[2]
		if (err != null) {
			return [null, err]
		}

		// Force revocation times to UTC per RFC 5280.
		let revokedCertsUTC: $.Slice<pkix2.RevokedCertificate> = $.makeSlice<pkix2.RevokedCertificate>($.sliceLen(revokedCerts), undefined, undefined, () => new pkix2.RevokedCertificate(undefined, true))
		for (let __goscriptRangeTarget6 = revokedCerts, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __goscriptSliceWindow0 = $.sliceRange(revokedCertsUTC), i = 0; i < __goscriptRangeWindow6.length; i++) {
			let rc = ((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + i] as pkix2.RevokedCertificate)).clone()
			$.assignStruct(rc.RevocationTime, $.markAsStructValue($.cloneStructValue(rc.RevocationTime)).UTC())
			$.assignStruct((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)], rc)
		}

		let tbsCertList = (() => { const __goscriptLiteralField0 = ($.markAsStructValue($.cloneStructValue((c$ as Certificate).Subject)).ToRDNSequence() as pkix2.RDNSequence); const __goscriptLiteralField1 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(now)).UTC())); const __goscriptLiteralField2 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(expiry)).UTC())); return new pkix2.TBSCertificateList({Version: 1, Signature: algorithmIdentifier, Issuer: __goscriptLiteralField0, ThisUpdate: __goscriptLiteralField1, NextUpdate: __goscriptLiteralField2, RevokedCertificates: revokedCertsUTC}, true) })()

		// Authority Key Id
		if ($.sliceLen((c$ as Certificate).SubjectKeyId) > 0) {
			let aki: pkix2.Extension = new pkix2.Extension(undefined, true)
			aki.Id = (oidExtensionAuthorityKeyId as asn1.ObjectIdentifier)
			let __goscriptTuple12: any = await asn1.Marshal($.interfaceValue(new authKeyId({Id: (c$ as Certificate).SubjectKeyId}, true), "x509.authKeyId", "x509.authKeyId"))
			aki.Value = __goscriptTuple12[0]
			err = __goscriptTuple12[1]
			if (err != null) {
				return [null, err]
			}
			tbsCertList.Extensions = $.appendOne(tbsCertList.Extensions, (aki).clone())
		}

		let __goscriptTuple13: any = await asn1.Marshal($.interfaceValue((tbsCertList).clone(), "pkix.TBSCertificateList", "pkix.TBSCertificateList"))
		let tbsCertListContents: $.Slice<number> = __goscriptTuple13[0]
		err = __goscriptTuple13[1]
		if (err != null) {
			return [null, err]
		}
		tbsCertList.Raw = (tbsCertListContents as asn1.RawContent)

		let __goscriptTuple14: any = await signTBS(tbsCertListContents, key, signatureAlgorithm, rand)
		let signature: $.Slice<number> = __goscriptTuple14[0]
		err = __goscriptTuple14[1]
		if (err != null) {
			return [null, err]
		}

		return asn1.Marshal($.interfaceValue(new pkix2.CertificateList({TBSCertList: tbsCertList, SignatureAlgorithm: algorithmIdentifier, SignatureValue: new asn1.BitString({Bytes: signature, BitLength: $.sliceLen(signature) * 8}, true)}, true), "pkix.CertificateList", "pkix.CertificateList"))
	}

	public Equal(other: Certificate | $.VarRef<Certificate> | null): boolean {
		const c: Certificate | $.VarRef<Certificate> | null = this;
		if ((c == null) || (other == null)) {
			return $.pointerEqual(c, other)
		}
		return bytes.Equal($.pointerValue<Certificate>(c).Raw, $.pointerValue<Certificate>(other).Raw)
	}

	public async Verify(__goscriptParam0: __goscript_verify.VerifyOptions): globalThis.Promise<[$.Slice<$.Slice<Certificate | $.VarRef<Certificate> | null>>, $.GoError]> {
		const c: Certificate | $.VarRef<Certificate> | null = this;
		let opts: $.VarRef<__goscript_verify.VerifyOptions> = $.varRef(__goscriptParam0)

		if ($.sliceLen($.pointerValue<Certificate>(c).Raw) == 0) {
			return [null, __goscript_verify.errNotParsed]
		}
		for (let i = 0; i < __goscript_cert_pool.CertPool.prototype.len.call(opts.value.Intermediates); i++) {
			let __goscriptTuple15: any = await __goscript_cert_pool.CertPool.prototype.cert.call(opts.value.Intermediates, i)
			let __goscriptShadow3: Certificate | $.VarRef<Certificate> | null = __goscriptTuple15[0]
			let err = __goscriptTuple15[2]
			if (err != null) {
				return [null, fmt.Errorf("crypto/x509: error fetching intermediate: %w", (err as any))]
			}
			if ($.sliceLen($.pointerValue<Certificate>(__goscriptShadow3).Raw) == 0) {
				return [null, __goscript_verify.errNotParsed]
			}
		}

		if ((($.stringEqual(runtime.GOOS, "windows")) || ($.stringEqual(runtime.GOOS, "darwin"))) || ($.stringEqual(runtime.GOOS, "ios"))) {

			let systemPool: __goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null = await __goscript_root.systemRootsPool()
			if ((opts.value.Roots == null) && ((systemPool == null) || $.pointerValue<__goscript_cert_pool.CertPool>(systemPool).systemPool)) {
				return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Certificate).systemVerify(opts) : Certificate.prototype.systemVerify.call(c, opts))
			}
			if ((opts.value.Roots != null) && $.pointerValue<__goscript_cert_pool.CertPool>(opts.value.Roots).systemPool) {
				let __goscriptTuple16: any = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Certificate).systemVerify(opts) : Certificate.prototype.systemVerify.call(c, opts))
				let platformChains: $.Slice<$.Slice<Certificate | $.VarRef<Certificate> | null>> = __goscriptTuple16[0]
				let err = __goscriptTuple16[1]

				if ((err == null) || (__goscript_cert_pool.CertPool.prototype.len.call(opts.value.Roots) == 0)) {
					return [platformChains, err]
				}
			}
		}

		if (opts.value.Roots == null) {
			opts.value.Roots = await __goscript_root.systemRootsPool()
			if (opts.value.Roots == null) {
				return [null, $.interfaceValue<$.GoError>(new __goscript_verify.SystemRootsError({Err: __goscript_root.systemRootsErr}, true), "x509.SystemRootsError", "x509.SystemRootsError")]
			}
		}

		let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Certificate).isValid(0, null, opts) : Certificate.prototype.isValid.call(c, 0, null, opts))
		if (err != null) {
			return [null, err]
		}

		if ($.stringLen(opts.value.DNSName) > 0) {
			err = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Certificate).VerifyHostname(opts.value.DNSName) : Certificate.prototype.VerifyHostname.call(c, opts.value.DNSName))
			if (err != null) {
				return [null, err]
			}
		}

		let candidateChains: $.Slice<$.Slice<Certificate | $.VarRef<Certificate> | null>> = null! as $.Slice<$.Slice<Certificate | $.VarRef<Certificate> | null>>
		if (await __goscript_cert_pool.CertPool.prototype.contains.call(opts.value.Roots, c)) {
			candidateChains = $.arrayToSlice<$.Slice<Certificate | $.VarRef<Certificate> | null>>([$.arrayToSlice<Certificate | $.VarRef<Certificate> | null>([c])])
		} else {
			let __goscriptTuple17: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Certificate).buildChains($.arrayToSlice<Certificate | $.VarRef<Certificate> | null>([c]), null, opts) : Certificate.prototype.buildChains.call(c, $.arrayToSlice<Certificate | $.VarRef<Certificate> | null>([c]), null, opts))
			candidateChains = __goscriptTuple17[0]
			err = __goscriptTuple17[1]
			if (err != null) {
				return [null, err]
			}
		}

		let anyKeyUsage = false
		for (let __goscriptRangeTarget7 = opts.value.KeyUsages, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
			let eku = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as ExtKeyUsage)
			if (eku == 0) {

				anyKeyUsage = true
				break
			}
		}

		if ($.sliceLen(opts.value.KeyUsages) == 0) {
			opts.value.KeyUsages = $.arrayToSlice<ExtKeyUsage>([1])
		}

		let invalidPoliciesChains: number = 0
		let incompatibleKeyUsageChains: number = 0
		let constraintsHintErr: $.GoError = null! as $.GoError
		candidateChains = (await slices.DeleteFunc(candidateChains, $.functionValue(async (chain: $.Slice<Certificate | $.VarRef<Certificate> | null>): globalThis.Promise<boolean> => {
			if (!await __goscript_verify.policiesValid(chain, (opts.value).clone())) {
				invalidPoliciesChains++
				return true
			}

			if (!anyKeyUsage && !__goscript_verify.checkChainForKeyUsage(chain, opts.value.KeyUsages)) {
				incompatibleKeyUsageChains++
				return true
			}
			{
				let __goscriptShadow4 = await __goscript_constraints.checkChainConstraints(chain)
				if (__goscriptShadow4 != null) {
					if (constraintsHintErr == null) {
						constraintsHintErr = $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField3 = (__goscriptAwait = (__goscriptShadow4 !== null && (__goscriptShadow4 as any).__isVarRef !== true && (__goscriptShadow4 as any).__goValue === undefined ? (__goscriptShadow4 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow4)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_verify.CertificateInvalidError({Cert: c, Reason: 2, Detail: __goscriptLiteralField3}, true) })()), "x509.CertificateInvalidError", "x509.CertificateInvalidError")
					}
					return true
				}
			}
			return false
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.Certificate"))], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))) as $.Slice<$.Slice<Certificate | $.VarRef<Certificate> | null>>)

		if ($.sliceLen(candidateChains) == 0) {
			if (constraintsHintErr != null) {
				return [null, constraintsHintErr]
			}
			let details: $.Slice<string> = null! as $.Slice<string>
			if (incompatibleKeyUsageChains > 0) {
				if (invalidPoliciesChains == 0) {
					return [null, $.interfaceValue<$.GoError>(new __goscript_verify.CertificateInvalidError({Cert: c, Reason: 4, Detail: ""}, true), "x509.CertificateInvalidError", "x509.CertificateInvalidError")]
				}
				details = $.appendOne(details, await fmt.Sprintf("%d candidate chains with incompatible key usage", $.basicInterfaceValue(incompatibleKeyUsageChains, "int")))
			}
			if (invalidPoliciesChains > 0) {
				details = $.appendOne(details, await fmt.Sprintf("%d candidate chains with invalid policies", $.basicInterfaceValue(invalidPoliciesChains, "int")))
			}
			err = $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField4 = strings.Join(details, ", "); return new __goscript_verify.CertificateInvalidError({Cert: c, Reason: 10, Detail: __goscriptLiteralField4}, true) })(), "x509.CertificateInvalidError", "x509.CertificateInvalidError")
			return [null, err]
		}
		// encipherOnly
		return [candidateChains, null]
	}

	public VerifyHostname(h: string): $.GoError {
		const c: Certificate | $.VarRef<Certificate> | null = this;
		const c$: Certificate = c == null ? $.pointerTarget<Certificate>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Certificate>(c)

		let candidateIP = h
		if ((($.stringLen(h) >= 3) && ($.indexString(h, 0) == 91)) && ($.indexString(h, $.stringLen(h) - 1) == 93)) {
			candidateIP = $.sliceStringOrBytes(h, 1, $.stringLen(h) - 1)
		}

		{
			let [addr, err] = netip.ParseAddr(candidateIP)
			if (err == null) {

				let ip: net.IP = (($.markAsStructValue($.cloneStructValue(addr)).AsSlice() as net.IP) as net.IP)
				for (let __goscriptRangeTarget8 = (c$ as Certificate).IPAddresses, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
					let candidate = ((__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as net.IP) as net.IP)
					if (net.IP_Equal(ip, (candidate as net.IP))) {
						return null
					}
				}
				return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField5 = net.IP_String(ip); return new __goscript_verify.HostnameError({Certificate: c, Host: __goscriptLiteralField5}, true) })(), "x509.HostnameError", "x509.HostnameError")
			}
		}

		let candidateName = __goscript_verify.toLowerCaseASCII(h)
		let validCandidateName = __goscript_verify.validHostnameInput(candidateName)
		let hostParts: $.Slice<string> = __goscript_verify.splitHostname(candidateName)

		for (let __goscriptRangeTarget9 = (c$ as Certificate).DNSNames, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
			let match = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as string)

			// An InsecureAlgorithmError indicates that the [SignatureAlgorithm] used to
			// generate the signature is not secure, and the signature has been rejected.

			if (validCandidateName && __goscript_verify.validHostnamePattern(match)) {
				if (__goscript_verify.matchHostnames(match, hostParts)) {
					return null
				}
			} else {
				if (__goscript_verify.matchExactly(match, candidateName)) {
					return null
				}
			}
		}

		return $.interfaceValue<$.GoError>(new __goscript_verify.HostnameError({Certificate: c, Host: h}, true), "x509.HostnameError", "x509.HostnameError")
	}

	public async buildChains(currentChain: $.Slice<Certificate | $.VarRef<Certificate> | null>, sigChecks: $.VarRef<number> | null, opts: __goscript_verify.VerifyOptions | $.VarRef<__goscript_verify.VerifyOptions> | null): globalThis.Promise<[$.Slice<$.Slice<Certificate | $.VarRef<Certificate> | null>>, $.GoError]> {
		const c: Certificate | $.VarRef<Certificate> | null = this;
		let chains: $.Slice<$.Slice<Certificate | $.VarRef<Certificate> | null>> = null! as $.Slice<$.Slice<Certificate | $.VarRef<Certificate> | null>>
		let err: $.GoError = null! as $.GoError
		const opts$: __goscript_verify.VerifyOptions = opts == null ? $.pointerTarget<__goscript_verify.VerifyOptions>(opts) : (opts as any).__isVarRef === true ? (opts as any).value : (opts as any).__goValue === undefined ? (opts as any) : $.pointerTarget<__goscript_verify.VerifyOptions>(opts)
		let hintErr: $.GoError = null! as $.GoError
		let hintCert: Certificate | $.VarRef<Certificate> | null = null! as Certificate | $.VarRef<Certificate> | null

		let considerCandidate: ((certType: number, candidate: __goscript_cert_pool.potentialParent) => void) | null = $.functionValue(async (certType: number, candidate: __goscript_cert_pool.potentialParent): globalThis.Promise<void> => {
			if (sigChecks == null) {
				sigChecks = $.varRef<number>(0)
			}
			sigChecks!.value++
			if ($.pointerValue<number>(sigChecks) > 100) {
				err = __goscript_verify.errSignatureLimit
				return
			}

			if (($.pointerValue<Certificate>(candidate.cert).PublicKey == null) || __goscript_verify.alreadyInChain(candidate.cert, currentChain)) {
				return
			}

			{
				let __goscriptShadow5 = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Certificate).CheckSignatureFrom(candidate.cert) : Certificate.prototype.CheckSignatureFrom.call(c, candidate.cert))
				if (__goscriptShadow5 != null) {
					if (hintErr == null) {
						hintErr = __goscriptShadow5
						hintCert = candidate.cert
					}
					return
				}
			}

			err = await Certificate.prototype.isValid.call(candidate.cert, certType, currentChain, opts)
			if (err != null) {
				if (hintErr == null) {
					hintErr = err
					hintCert = candidate.cert
				}
				return
			}

			if (candidate.constraint != null) {
				{
					let __goscriptShadow6 = await candidate.constraint!(currentChain)
					if (__goscriptShadow6 != null) {
						if (hintErr == null) {
							hintErr = __goscriptShadow6
							hintCert = candidate.cert
						}
						return
					}
				}
			}
			// DER encoded SubjectPublicKeyInfo.
			switch (certType) {
				case 2:
				{
					chains = $.appendOne(chains, __goscript_verify.appendToFreshChain(currentChain, candidate.cert), $.appendZeros.nil)
					break
				}
				case 1:
				{
					let childChains: $.Slice<$.Slice<Certificate | $.VarRef<Certificate> | null>> = null! as $.Slice<$.Slice<Certificate | $.VarRef<Certificate> | null>>
					let __goscriptTuple18: any = await Certificate.prototype.buildChains.call(candidate.cert, __goscript_verify.appendToFreshChain(currentChain, candidate.cert), sigChecks, opts)
					childChains = __goscriptTuple18[0]
					err = __goscriptTuple18[1]
					chains = $.appendSlice(chains, childChains, $.appendZeros.nil)
					break
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), "x509.potentialParent"], results: [] } as $.FunctionTypeInfo))

		candidateLoop: for (let __goscriptRangeTarget11 = $.arrayToSlice<{"certType": number, "potentials": $.Slice<__goscript_cert_pool.potentialParent>}>([$.anonymousStructValue({certType: 2, potentials: await __goscript_cert_pool.CertPool.prototype.findPotentialParents.call((opts$ as __goscript_verify.VerifyOptions).Roots, c)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("certType", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("potentials", /* @__PURE__ */ $.sliceType("x509.potentialParent"), [1], 8, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({certType: 1, potentials: await __goscript_cert_pool.CertPool.prototype.findPotentialParents.call((opts$ as __goscript_verify.VerifyOptions).Intermediates, c)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("certType", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("potentials", /* @__PURE__ */ $.sliceType("x509.potentialParent"), [1], 8, false, { pkgPath: "crypto/x509" })] })]), __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
			let parents = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as {"certType": number, "potentials": $.Slice<__goscript_cert_pool.potentialParent>})))
			for (let __goscriptRangeTarget10 = parents.potentials, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
				let parent = ((__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as __goscript_cert_pool.potentialParent)).clone()
				void (__goscriptAwait = considerCandidate!(parents.certType, (parent).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if ($.comparableEqual(err, __goscript_verify.errSignatureLimit)) {
					break candidateLoop
				}
			}
		}

		if ($.sliceLen(chains) > 0) {
			err = null
		}
		if (($.sliceLen(chains) == 0) && (err == null)) {
			err = $.interfaceValue<$.GoError>(new __goscript_verify.UnknownAuthorityError({Cert: c, hintErr: hintErr, hintCert: hintCert}, true), "x509.UnknownAuthorityError", "x509.UnknownAuthorityError")
		}

		return [chains, err]
	}

	public getSANExtension(): $.Slice<number> {
		const c: Certificate | $.VarRef<Certificate> | null = this;
		for (let __goscriptRangeTarget12 = $.pointerValue<Certificate>(c).Extensions, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
			let e = ((__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as pkix2.Extension)).clone()
			if (asn1.ObjectIdentifier_Equal(e.Id, (oidExtensionSubjectAltName as asn1.ObjectIdentifier))) {
				return e.Value
			}
		}
		return null
	}

	public hasNameConstraints(): boolean {
		const c: Certificate | $.VarRef<Certificate> | null = this;
		return oidInExtensions((oidExtensionNameConstraints as asn1.ObjectIdentifier), $.pointerValue<Certificate>(c).Extensions)
	}

	public hasSANExtension(): boolean {
		const c: Certificate | $.VarRef<Certificate> | null = this;
		return oidInExtensions((oidExtensionSubjectAltName as asn1.ObjectIdentifier), $.pointerValue<Certificate>(c).Extensions)
	}

	public async isValid(certType: number, currentChain: $.Slice<Certificate | $.VarRef<Certificate> | null>, opts: __goscript_verify.VerifyOptions | $.VarRef<__goscript_verify.VerifyOptions> | null): globalThis.Promise<$.GoError> {
		const c: Certificate | $.VarRef<Certificate> | null = this;
		const c$: Certificate = c == null ? $.pointerTarget<Certificate>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Certificate>(c)
		if ($.sliceLen((c$ as Certificate).UnhandledCriticalExtensions) > 0) {
			return $.interfaceValue<$.GoError>(new UnhandledCriticalExtension(undefined, true), "x509.UnhandledCriticalExtension", "x509.UnhandledCriticalExtension")
		}

		if ($.sliceLen(currentChain) > 0) {
			let child: Certificate | $.VarRef<Certificate> | null = $.arrayIndex(currentChain!, $.sliceLen(currentChain) - 1)
			if (!bytes.Equal($.pointerValue<Certificate>(child).RawIssuer, (c$ as Certificate).RawSubject)) {
				return $.interfaceValue<$.GoError>(new __goscript_verify.CertificateInvalidError({Cert: c, Reason: 5, Detail: ""}, true), "x509.CertificateInvalidError", "x509.CertificateInvalidError")
			}
		}

		let now = $.markAsStructValue($.cloneStructValue($.pointerValue<__goscript_verify.VerifyOptions>(opts).CurrentTime))
		if ($.markAsStructValue($.cloneStructValue(now)).IsZero()) {
			now = $.assignStruct(now, time.Now())
		}
		if ($.markAsStructValue($.cloneStructValue(now)).Before($.markAsStructValue($.cloneStructValue((c$ as Certificate).NotBefore)))) {
			return $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField6 = await fmt.Sprintf("current time %s is before %s", $.markAsStructValue($.cloneStructValue(now)).Format(time.RFC3339), $.markAsStructValue($.cloneStructValue((c$ as Certificate).NotBefore)).Format(time.RFC3339)); return new __goscript_verify.CertificateInvalidError({Cert: c, Reason: 1, Detail: __goscriptLiteralField6}, true) })()), "x509.CertificateInvalidError", "x509.CertificateInvalidError")
		} else {
			if ($.markAsStructValue($.cloneStructValue(now)).After($.markAsStructValue($.cloneStructValue((c$ as Certificate).NotAfter)))) {
				return $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField7 = await fmt.Sprintf("current time %s is after %s", $.markAsStructValue($.cloneStructValue(now)).Format(time.RFC3339), $.markAsStructValue($.cloneStructValue((c$ as Certificate).NotAfter)).Format(time.RFC3339)); return new __goscript_verify.CertificateInvalidError({Cert: c, Reason: 1, Detail: __goscriptLiteralField7}, true) })()), "x509.CertificateInvalidError", "x509.CertificateInvalidError")
			}
		}

		if ((certType == 1) || (certType == 2)) {
			if ($.sliceLen(currentChain) == 0) {
				return errors.New("x509: internal error: empty chain when appending CA cert")
			}
		}

		if ((certType == 1) && (!(c$ as Certificate).BasicConstraintsValid || !(c$ as Certificate).IsCA)) {
			return $.interfaceValue<$.GoError>(new __goscript_verify.CertificateInvalidError({Cert: c, Reason: 0, Detail: ""}, true), "x509.CertificateInvalidError", "x509.CertificateInvalidError")
		}

		if ((c$ as Certificate).BasicConstraintsValid && ((c$ as Certificate).MaxPathLen >= 0)) {
			let numIntermediates = $.sliceLen(currentChain) - 1
			if (numIntermediates > (c$ as Certificate).MaxPathLen) {
				return $.interfaceValue<$.GoError>(new __goscript_verify.CertificateInvalidError({Cert: c, Reason: 3, Detail: ""}, true), "x509.CertificateInvalidError", "x509.CertificateInvalidError")
			}
		}

		return null
	}

	public systemVerify(opts: __goscript_verify.VerifyOptions | $.VarRef<__goscript_verify.VerifyOptions> | null): [$.Slice<$.Slice<Certificate | $.VarRef<Certificate> | null>>, $.GoError] {
		const c: Certificate | $.VarRef<Certificate> | null = this;
		let chains: $.Slice<$.Slice<Certificate | $.VarRef<Certificate> | null>> = null! as $.Slice<$.Slice<Certificate | $.VarRef<Certificate> | null>>
		let err: $.GoError = null! as $.GoError
		return [null, null]
	}

	static __typeInfo = $.registerStructType(
		"x509.Certificate",
		() => new Certificate(),
		() => [$.methodSignature("CheckCRLSignature", [["crl", /* @__PURE__ */ $.pointerType("pkix.CertificateList")]], ["error"], true), $.methodSignature("CheckSignature", [["algo", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm")], ["signed", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["signature", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("CheckSignatureFrom", [["parent", /* @__PURE__ */ $.pointerType("x509.Certificate")]], ["error"], true), $.methodSignature("CreateCRL", [["rand", "io.Reader"], ["priv", { kind: $.TypeKind.Interface, methods: [] }], ["revokedCerts", /* @__PURE__ */ $.sliceType("pkix.RevokedCertificate")], ["now", "time.Time"], ["expiry", "time.Time"]], [["crlBytes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("Equal", [["other", /* @__PURE__ */ $.pointerType("x509.Certificate")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Verify", [["opts", "x509.VerifyOptions"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.Certificate"))), "error"], true), $.methodSignature("VerifyHostname", [["h", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("buildChains", [["currentChain", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.Certificate"))], ["sigChecks", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int"))], ["opts", /* @__PURE__ */ $.pointerType("x509.VerifyOptions")]], [["chains", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.Certificate")))], ["err", "error"]], true), $.methodSignature("getSANExtension", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("hasNameConstraints", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("hasSANExtension", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("isValid", [["certType", /* @__PURE__ */ $.basicType("int")], ["currentChain", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.Certificate"))], ["opts", /* @__PURE__ */ $.pointerType("x509.VerifyOptions")]], ["error"], true), $.methodSignature("systemVerify", [["opts", /* @__PURE__ */ $.pointerType("x509.VerifyOptions")]], [["chains", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("x509.Certificate")))], ["err", "error"]], true)],
		Certificate,
		() => [/* @__PURE__ */ $.structField("Raw", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, true), /* @__PURE__ */ $.structField("RawTBSCertificate", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, true), /* @__PURE__ */ $.structField("RawSubjectPublicKeyInfo", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 48, true), /* @__PURE__ */ $.structField("RawSubject", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 72, true), /* @__PURE__ */ $.structField("RawIssuer", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 96, true), /* @__PURE__ */ $.structField("RawSignatureAlgorithm", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 120, true), /* @__PURE__ */ $.structField("Signature", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 144, true), /* @__PURE__ */ $.structField("SignatureAlgorithm", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [7], 168, true), /* @__PURE__ */ $.structField("PublicKeyAlgorithm", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [8], 176, true), /* @__PURE__ */ $.structField("PublicKey", { kind: $.TypeKind.Interface, methods: [] }, [9], 184, true), /* @__PURE__ */ $.structField("Version", /* @__PURE__ */ $.basicType("int"), [10], 200, true), /* @__PURE__ */ $.structField("SerialNumber", /* @__PURE__ */ $.pointerType("big.Int"), [11], 208, true), /* @__PURE__ */ $.structField("Issuer", "pkix.Name", [12], 216, true), /* @__PURE__ */ $.structField("Subject", "pkix.Name", [13], 464, true), /* @__PURE__ */ $.structField("NotBefore", "time.Time", [14], 712, true), /* @__PURE__ */ $.structField("NotAfter", "time.Time", [15], 736, true), /* @__PURE__ */ $.structField("KeyUsage", /* @__PURE__ */ $.basicType("int", "x509.KeyUsage"), [16], 760, true), /* @__PURE__ */ $.structField("Extensions", /* @__PURE__ */ $.sliceType("pkix.Extension"), [17], 768, true), /* @__PURE__ */ $.structField("ExtraExtensions", /* @__PURE__ */ $.sliceType("pkix.Extension"), [18], 792, true), /* @__PURE__ */ $.structField("UnhandledCriticalExtensions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier")), [19], 816, true), /* @__PURE__ */ $.structField("ExtKeyUsage", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int", "x509.ExtKeyUsage")), [20], 840, true), /* @__PURE__ */ $.structField("UnknownExtKeyUsage", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier")), [21], 864, true), /* @__PURE__ */ $.structField("BasicConstraintsValid", /* @__PURE__ */ $.basicType("bool"), [22], 888, true), /* @__PURE__ */ $.structField("IsCA", /* @__PURE__ */ $.basicType("bool"), [23], 889, true), /* @__PURE__ */ $.structField("MaxPathLen", /* @__PURE__ */ $.basicType("int"), [24], 896, true), /* @__PURE__ */ $.structField("MaxPathLenZero", /* @__PURE__ */ $.basicType("bool"), [25], 904, true), /* @__PURE__ */ $.structField("SubjectKeyId", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [26], 912, true), /* @__PURE__ */ $.structField("AuthorityKeyId", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [27], 936, true), /* @__PURE__ */ $.structField("OCSPServer", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [28], 960, true), /* @__PURE__ */ $.structField("IssuingCertificateURL", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [29], 984, true), /* @__PURE__ */ $.structField("DNSNames", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [30], 1008, true), /* @__PURE__ */ $.structField("EmailAddresses", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [31], 1032, true), /* @__PURE__ */ $.structField("IPAddresses", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")), [32], 1056, true), /* @__PURE__ */ $.structField("URIs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("url.URL")), [33], 1080, true), /* @__PURE__ */ $.structField("PermittedDNSDomainsCritical", /* @__PURE__ */ $.basicType("bool"), [34], 1104, true), /* @__PURE__ */ $.structField("PermittedDNSDomains", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [35], 1112, true), /* @__PURE__ */ $.structField("ExcludedDNSDomains", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [36], 1136, true), /* @__PURE__ */ $.structField("PermittedIPRanges", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("net.IPNet")), [37], 1160, true), /* @__PURE__ */ $.structField("ExcludedIPRanges", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("net.IPNet")), [38], 1184, true), /* @__PURE__ */ $.structField("PermittedEmailAddresses", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [39], 1208, true), /* @__PURE__ */ $.structField("ExcludedEmailAddresses", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [40], 1232, true), /* @__PURE__ */ $.structField("PermittedURIDomains", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [41], 1256, true), /* @__PURE__ */ $.structField("ExcludedURIDomains", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [42], 1280, true), /* @__PURE__ */ $.structField("CRLDistributionPoints", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [43], 1304, true), /* @__PURE__ */ $.structField("PolicyIdentifiers", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier")), [44], 1328, true), /* @__PURE__ */ $.structField("Policies", /* @__PURE__ */ $.sliceType("x509.OID"), [45], 1352, true), /* @__PURE__ */ $.structField("InhibitAnyPolicy", /* @__PURE__ */ $.basicType("int"), [46], 1376, true), /* @__PURE__ */ $.structField("InhibitAnyPolicyZero", /* @__PURE__ */ $.basicType("bool"), [47], 1384, true), /* @__PURE__ */ $.structField("InhibitPolicyMapping", /* @__PURE__ */ $.basicType("int"), [48], 1392, true), /* @__PURE__ */ $.structField("InhibitPolicyMappingZero", /* @__PURE__ */ $.basicType("bool"), [49], 1400, true), /* @__PURE__ */ $.structField("RequireExplicitPolicy", /* @__PURE__ */ $.basicType("int"), [50], 1408, true), /* @__PURE__ */ $.structField("RequireExplicitPolicyZero", /* @__PURE__ */ $.basicType("bool"), [51], 1416, true), /* @__PURE__ */ $.structField("PolicyMappings", /* @__PURE__ */ $.sliceType("x509.PolicyMapping"), [52], 1424, true)]
	)
}

export class PolicyMapping {
	// IssuerDomainPolicy contains a policy OID the issuing certificate considers
	// equivalent to SubjectDomainPolicy in the subject certificate.
	public get IssuerDomainPolicy(): __goscript_oid.OID {
		return this._fields.IssuerDomainPolicy
	}

	public set IssuerDomainPolicy(value: __goscript_oid.OID) {
		this._fields.IssuerDomainPolicy = value
	}

	// SubjectDomainPolicy contains a OID the issuing certificate considers
	// equivalent to IssuerDomainPolicy in the subject certificate.
	public get SubjectDomainPolicy(): __goscript_oid.OID {
		return this._fields.SubjectDomainPolicy
	}

	public set SubjectDomainPolicy(value: __goscript_oid.OID) {
		this._fields.SubjectDomainPolicy = value
	}

	public _fields: {
		IssuerDomainPolicy: __goscript_oid.OID
		SubjectDomainPolicy: __goscript_oid.OID
	}

	constructor(init?: Partial<{IssuerDomainPolicy?: __goscript_oid.OID, SubjectDomainPolicy?: __goscript_oid.OID}>, __goscriptValue?: boolean) {
		this._fields = {
			IssuerDomainPolicy: init?.IssuerDomainPolicy ? init.IssuerDomainPolicy.clone() : new __goscript_oid.OID(undefined, true),
			SubjectDomainPolicy: init?.SubjectDomainPolicy ? init.SubjectDomainPolicy.clone() : new __goscript_oid.OID(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PolicyMapping {
		return new PolicyMapping(this, true)
	}

	public __goscriptAssign(source: PolicyMapping): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.IssuerDomainPolicy, values.IssuerDomainPolicy)
		$.assignStruct(target.SubjectDomainPolicy, values.SubjectDomainPolicy)
	}

	static __typeInfo = $.registerStructType(
		"x509.PolicyMapping",
		() => new PolicyMapping(),
		() => [],
		PolicyMapping,
		() => [/* @__PURE__ */ $.structField("IssuerDomainPolicy", "x509.OID", [0], 0, true), /* @__PURE__ */ $.structField("SubjectDomainPolicy", "x509.OID", [1], 24, true)]
	)
}

export class ConstraintViolationError {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ConstraintViolationError {
		return new ConstraintViolationError(this, true)
	}

	public __goscriptAssign(source: ConstraintViolationError): void {
	}

	public Error(): string {
		return "x509: invalid signature: parent certificate cannot sign this kind of certificate"
	}

	static __typeInfo = $.registerStructType(
		"x509.ConstraintViolationError",
		() => new ConstraintViolationError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		ConstraintViolationError,
		() => []
	)
}

export class UnhandledCriticalExtension {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UnhandledCriticalExtension {
		return new UnhandledCriticalExtension(this, true)
	}

	public __goscriptAssign(source: UnhandledCriticalExtension): void {
	}

	public Error(): string {
		const h = this;
		return "x509: unhandled critical extension"
	}

	static __typeInfo = $.registerStructType(
		"x509.UnhandledCriticalExtension",
		() => new UnhandledCriticalExtension(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		UnhandledCriticalExtension,
		() => []
	)
}

export class basicConstraints {
	public get IsCA(): boolean {
		return this._fields.IsCA
	}

	public set IsCA(value: boolean) {
		this._fields.IsCA = value
	}

	public get MaxPathLen(): number {
		return this._fields.MaxPathLen
	}

	public set MaxPathLen(value: number) {
		this._fields.MaxPathLen = value
	}

	public _fields: {
		IsCA: boolean
		MaxPathLen: number
	}

	constructor(init?: Partial<{IsCA?: boolean, MaxPathLen?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			IsCA: init?.IsCA ?? (false as boolean),
			MaxPathLen: init?.MaxPathLen ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): basicConstraints {
		return new basicConstraints(this, true)
	}

	public __goscriptAssign(source: basicConstraints): void {
		const target = this._fields
		const values = source._fields
		target.IsCA = values.IsCA
		target.MaxPathLen = values.MaxPathLen
	}

	static __typeInfo = $.registerStructType(
		"x509.basicConstraints",
		() => new basicConstraints(),
		() => [],
		basicConstraints,
		() => [/* @__PURE__ */ $.structField("IsCA", /* @__PURE__ */ $.basicType("bool"), [0], 0, true, { tag: "asn1:\"optional\"" }), /* @__PURE__ */ $.structField("MaxPathLen", /* @__PURE__ */ $.basicType("int"), [1], 8, true, { tag: "asn1:\"optional,default:-1\"" })]
	)
}

export class policyInformation {
	public get Policy(): asn1.ObjectIdentifier {
		return this._fields.Policy
	}

	public set Policy(value: asn1.ObjectIdentifier) {
		this._fields.Policy = value
	}

	public _fields: {
		Policy: asn1.ObjectIdentifier
	}

	constructor(init?: Partial<{Policy?: asn1.ObjectIdentifier}>, __goscriptValue?: boolean) {
		this._fields = {
			Policy: init?.Policy ?? (null! as asn1.ObjectIdentifier)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): policyInformation {
		return new policyInformation(this, true)
	}

	public __goscriptAssign(source: policyInformation): void {
		const target = this._fields
		const values = source._fields
		target.Policy = values.Policy
	}

	static __typeInfo = $.registerStructType(
		"x509.policyInformation",
		() => new policyInformation(),
		() => [],
		policyInformation,
		() => [/* @__PURE__ */ $.structField("Policy", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [0], 0, true)]
	)
}

export class authorityInfoAccess {
	public get Method(): asn1.ObjectIdentifier {
		return this._fields.Method
	}

	public set Method(value: asn1.ObjectIdentifier) {
		this._fields.Method = value
	}

	public get Location(): asn1.RawValue {
		return this._fields.Location
	}

	public set Location(value: asn1.RawValue) {
		this._fields.Location = value
	}

	public _fields: {
		Method: asn1.ObjectIdentifier
		Location: asn1.RawValue
	}

	constructor(init?: Partial<{Method?: asn1.ObjectIdentifier, Location?: asn1.RawValue}>, __goscriptValue?: boolean) {
		this._fields = {
			Method: init?.Method ?? (null! as asn1.ObjectIdentifier),
			Location: init?.Location ? init.Location.clone() : new asn1.RawValue(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): authorityInfoAccess {
		return new authorityInfoAccess(this, true)
	}

	public __goscriptAssign(source: authorityInfoAccess): void {
		const target = this._fields
		const values = source._fields
		target.Method = values.Method
		$.assignStruct(target.Location, values.Location)
	}

	static __typeInfo = $.registerStructType(
		"x509.authorityInfoAccess",
		() => new authorityInfoAccess(),
		() => [],
		authorityInfoAccess,
		() => [/* @__PURE__ */ $.structField("Method", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [0], 0, true), /* @__PURE__ */ $.structField("Location", "asn1.RawValue", [1], 24, true)]
	)
}

export class distributionPointName {
	public get FullName(): $.Slice<asn1.RawValue> {
		return this._fields.FullName
	}

	public set FullName(value: $.Slice<asn1.RawValue>) {
		this._fields.FullName = value
	}

	public get RelativeName(): pkix2.RDNSequence {
		return this._fields.RelativeName
	}

	public set RelativeName(value: pkix2.RDNSequence) {
		this._fields.RelativeName = value
	}

	public _fields: {
		FullName: $.Slice<asn1.RawValue>
		RelativeName: pkix2.RDNSequence
	}

	constructor(init?: Partial<{FullName?: $.Slice<asn1.RawValue>, RelativeName?: pkix2.RDNSequence}>, __goscriptValue?: boolean) {
		this._fields = {
			FullName: init?.FullName ?? (null! as $.Slice<asn1.RawValue>),
			RelativeName: init?.RelativeName ?? (null! as pkix2.RDNSequence)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): distributionPointName {
		return new distributionPointName(this, true)
	}

	public __goscriptAssign(source: distributionPointName): void {
		const target = this._fields
		const values = source._fields
		target.FullName = values.FullName
		target.RelativeName = values.RelativeName
	}

	static __typeInfo = $.registerStructType(
		"x509.distributionPointName",
		() => new distributionPointName(),
		() => [],
		distributionPointName,
		() => [/* @__PURE__ */ $.structField("FullName", /* @__PURE__ */ $.sliceType("asn1.RawValue"), [0], 0, true, { tag: "asn1:\"optional,tag:0\"" }), /* @__PURE__ */ $.structField("RelativeName", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType("pkix.AttributeTypeAndValue", "pkix.RelativeDistinguishedNameSET"), "pkix.RDNSequence"), [1], 24, true, { tag: "asn1:\"optional,tag:1\"" })]
	)
}

export class distributionPoint {
	public get DistributionPoint(): distributionPointName {
		return this._fields.DistributionPoint
	}

	public set DistributionPoint(value: distributionPointName) {
		this._fields.DistributionPoint = value
	}

	public get Reason(): asn1.BitString {
		return this._fields.Reason
	}

	public set Reason(value: asn1.BitString) {
		this._fields.Reason = value
	}

	public get CRLIssuer(): asn1.RawValue {
		return this._fields.CRLIssuer
	}

	public set CRLIssuer(value: asn1.RawValue) {
		this._fields.CRLIssuer = value
	}

	public _fields: {
		DistributionPoint: distributionPointName
		Reason: asn1.BitString
		CRLIssuer: asn1.RawValue
	}

	constructor(init?: Partial<{DistributionPoint?: distributionPointName, Reason?: asn1.BitString, CRLIssuer?: asn1.RawValue}>, __goscriptValue?: boolean) {
		this._fields = {
			DistributionPoint: init?.DistributionPoint ? init.DistributionPoint.clone() : new distributionPointName(undefined, true),
			Reason: init?.Reason ? init.Reason.clone() : new asn1.BitString(undefined, true),
			CRLIssuer: init?.CRLIssuer ? init.CRLIssuer.clone() : new asn1.RawValue(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): distributionPoint {
		return new distributionPoint(this, true)
	}

	public __goscriptAssign(source: distributionPoint): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.DistributionPoint, values.DistributionPoint)
		$.assignStruct(target.Reason, values.Reason)
		$.assignStruct(target.CRLIssuer, values.CRLIssuer)
	}

	static __typeInfo = $.registerStructType(
		"x509.distributionPoint",
		() => new distributionPoint(),
		() => [],
		distributionPoint,
		() => [/* @__PURE__ */ $.structField("DistributionPoint", "x509.distributionPointName", [0], 0, true, { tag: "asn1:\"optional,tag:0\"" }), /* @__PURE__ */ $.structField("Reason", "asn1.BitString", [1], 48, true, { tag: "asn1:\"optional,tag:1\"" }), /* @__PURE__ */ $.structField("CRLIssuer", "asn1.RawValue", [2], 80, true, { tag: "asn1:\"optional,tag:2\"" })]
	)
}

export class CertificateRequest {
	public get Raw(): $.Slice<number> {
		return this._fields.Raw
	}

	public set Raw(value: $.Slice<number>) {
		this._fields.Raw = value
	}

	public get RawTBSCertificateRequest(): $.Slice<number> {
		return this._fields.RawTBSCertificateRequest
	}

	public set RawTBSCertificateRequest(value: $.Slice<number>) {
		this._fields.RawTBSCertificateRequest = value
	}

	public get RawSubjectPublicKeyInfo(): $.Slice<number> {
		return this._fields.RawSubjectPublicKeyInfo
	}

	public set RawSubjectPublicKeyInfo(value: $.Slice<number>) {
		this._fields.RawSubjectPublicKeyInfo = value
	}

	public get RawSubject(): $.Slice<number> {
		return this._fields.RawSubject
	}

	public set RawSubject(value: $.Slice<number>) {
		this._fields.RawSubject = value
	}

	public get RawSignatureAlgorithm(): $.Slice<number> {
		return this._fields.RawSignatureAlgorithm
	}

	public set RawSignatureAlgorithm(value: $.Slice<number>) {
		this._fields.RawSignatureAlgorithm = value
	}

	public get Version(): number {
		return this._fields.Version
	}

	public set Version(value: number) {
		this._fields.Version = value
	}

	public get Signature(): $.Slice<number> {
		return this._fields.Signature
	}

	public set Signature(value: $.Slice<number>) {
		this._fields.Signature = value
	}

	public get SignatureAlgorithm(): SignatureAlgorithm {
		return this._fields.SignatureAlgorithm
	}

	public set SignatureAlgorithm(value: SignatureAlgorithm) {
		this._fields.SignatureAlgorithm = value
	}

	public get PublicKeyAlgorithm(): PublicKeyAlgorithm {
		return this._fields.PublicKeyAlgorithm
	}

	public set PublicKeyAlgorithm(value: PublicKeyAlgorithm) {
		this._fields.PublicKeyAlgorithm = value
	}

	public get PublicKey(): any {
		return this._fields.PublicKey
	}

	public set PublicKey(value: any) {
		this._fields.PublicKey = value
	}

	public get Subject(): pkix2.Name {
		return this._fields.Subject
	}

	public set Subject(value: pkix2.Name) {
		this._fields.Subject = value
	}

	// Attributes contains the CSR attributes that can parse as
	// pkix.AttributeTypeAndValueSET.
	//
	// Deprecated: Use Extensions and ExtraExtensions instead for parsing and
	// generating the requestedExtensions attribute.
	public get Attributes(): $.Slice<pkix2.AttributeTypeAndValueSET> {
		return this._fields.Attributes
	}

	public set Attributes(value: $.Slice<pkix2.AttributeTypeAndValueSET>) {
		this._fields.Attributes = value
	}

	// Extensions contains all requested extensions, in raw form. When parsing
	// CSRs, this can be used to extract extensions that are not parsed by this
	// package.
	public get Extensions(): $.Slice<pkix2.Extension> {
		return this._fields.Extensions
	}

	public set Extensions(value: $.Slice<pkix2.Extension>) {
		this._fields.Extensions = value
	}

	// ExtraExtensions contains extensions to be copied, raw, into any CSR
	// marshaled by CreateCertificateRequest. Values override any extensions
	// that would otherwise be produced based on the other fields but are
	// overridden by any extensions specified in Attributes.
	//
	// The ExtraExtensions field is not populated by ParseCertificateRequest,
	// see Extensions instead.
	public get ExtraExtensions(): $.Slice<pkix2.Extension> {
		return this._fields.ExtraExtensions
	}

	public set ExtraExtensions(value: $.Slice<pkix2.Extension>) {
		this._fields.ExtraExtensions = value
	}

	// Subject Alternate Name values.
	public get DNSNames(): $.Slice<string> {
		return this._fields.DNSNames
	}

	public set DNSNames(value: $.Slice<string>) {
		this._fields.DNSNames = value
	}

	public get EmailAddresses(): $.Slice<string> {
		return this._fields.EmailAddresses
	}

	public set EmailAddresses(value: $.Slice<string>) {
		this._fields.EmailAddresses = value
	}

	public get IPAddresses(): $.Slice<net.IP> {
		return this._fields.IPAddresses
	}

	public set IPAddresses(value: $.Slice<net.IP>) {
		this._fields.IPAddresses = value
	}

	public get URIs(): $.Slice<url.URL | $.VarRef<url.URL> | null> {
		return this._fields.URIs
	}

	public set URIs(value: $.Slice<url.URL | $.VarRef<url.URL> | null>) {
		this._fields.URIs = value
	}

	public _fields: {
		Raw: $.Slice<number>
		RawTBSCertificateRequest: $.Slice<number>
		RawSubjectPublicKeyInfo: $.Slice<number>
		RawSubject: $.Slice<number>
		RawSignatureAlgorithm: $.Slice<number>
		Version: number
		Signature: $.Slice<number>
		SignatureAlgorithm: SignatureAlgorithm
		PublicKeyAlgorithm: PublicKeyAlgorithm
		PublicKey: any
		Subject: pkix2.Name
		Attributes: $.Slice<pkix2.AttributeTypeAndValueSET>
		Extensions: $.Slice<pkix2.Extension>
		ExtraExtensions: $.Slice<pkix2.Extension>
		DNSNames: $.Slice<string>
		EmailAddresses: $.Slice<string>
		IPAddresses: $.Slice<net.IP>
		URIs: $.Slice<url.URL | $.VarRef<url.URL> | null>
	}

	constructor(init?: Partial<{Raw?: $.Slice<number>, RawTBSCertificateRequest?: $.Slice<number>, RawSubjectPublicKeyInfo?: $.Slice<number>, RawSubject?: $.Slice<number>, RawSignatureAlgorithm?: $.Slice<number>, Version?: number, Signature?: $.Slice<number>, SignatureAlgorithm?: SignatureAlgorithm, PublicKeyAlgorithm?: PublicKeyAlgorithm, PublicKey?: any, Subject?: pkix2.Name, Attributes?: $.Slice<pkix2.AttributeTypeAndValueSET>, Extensions?: $.Slice<pkix2.Extension>, ExtraExtensions?: $.Slice<pkix2.Extension>, DNSNames?: $.Slice<string>, EmailAddresses?: $.Slice<string>, IPAddresses?: $.Slice<net.IP>, URIs?: $.Slice<url.URL | $.VarRef<url.URL> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			Raw: init?.Raw ?? (null! as $.Slice<number>),
			RawTBSCertificateRequest: init?.RawTBSCertificateRequest ?? (null! as $.Slice<number>),
			RawSubjectPublicKeyInfo: init?.RawSubjectPublicKeyInfo ?? (null! as $.Slice<number>),
			RawSubject: init?.RawSubject ?? (null! as $.Slice<number>),
			RawSignatureAlgorithm: init?.RawSignatureAlgorithm ?? (null! as $.Slice<number>),
			Version: init?.Version ?? (0 as number),
			Signature: init?.Signature ?? (null! as $.Slice<number>),
			SignatureAlgorithm: init?.SignatureAlgorithm ?? (0 as SignatureAlgorithm),
			PublicKeyAlgorithm: init?.PublicKeyAlgorithm ?? (0 as PublicKeyAlgorithm),
			PublicKey: init?.PublicKey ?? (null! as any),
			Subject: init?.Subject ? init.Subject.clone() : new pkix2.Name(undefined, true),
			Attributes: init?.Attributes ?? (null! as $.Slice<pkix2.AttributeTypeAndValueSET>),
			Extensions: init?.Extensions ?? (null! as $.Slice<pkix2.Extension>),
			ExtraExtensions: init?.ExtraExtensions ?? (null! as $.Slice<pkix2.Extension>),
			DNSNames: init?.DNSNames ?? (null! as $.Slice<string>),
			EmailAddresses: init?.EmailAddresses ?? (null! as $.Slice<string>),
			IPAddresses: init?.IPAddresses ?? (null! as $.Slice<net.IP>),
			URIs: init?.URIs ?? (null! as $.Slice<url.URL | $.VarRef<url.URL> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CertificateRequest {
		return new CertificateRequest(this, true)
	}

	public __goscriptAssign(source: CertificateRequest): void {
		const target = this._fields
		const values = source._fields
		target.Raw = values.Raw
		target.RawTBSCertificateRequest = values.RawTBSCertificateRequest
		target.RawSubjectPublicKeyInfo = values.RawSubjectPublicKeyInfo
		target.RawSubject = values.RawSubject
		target.RawSignatureAlgorithm = values.RawSignatureAlgorithm
		target.Version = values.Version
		target.Signature = values.Signature
		target.SignatureAlgorithm = values.SignatureAlgorithm
		target.PublicKeyAlgorithm = values.PublicKeyAlgorithm
		target.PublicKey = $.assignFieldValue(target.PublicKey, values.PublicKey, { kind: $.TypeKind.Interface, methods: [] })
		$.assignStruct(target.Subject, values.Subject)
		target.Attributes = values.Attributes
		target.Extensions = values.Extensions
		target.ExtraExtensions = values.ExtraExtensions
		target.DNSNames = values.DNSNames
		target.EmailAddresses = values.EmailAddresses
		target.IPAddresses = values.IPAddresses
		target.URIs = values.URIs
	}

	public async CheckSignature(): globalThis.Promise<$.GoError> {
		const c: CertificateRequest | $.VarRef<CertificateRequest> | null = this;
		const c$: CertificateRequest = c == null ? $.pointerTarget<CertificateRequest>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CertificateRequest>(c)
		return checkSignature((c$ as CertificateRequest).SignatureAlgorithm, (c$ as CertificateRequest).RawTBSCertificateRequest, (c$ as CertificateRequest).Signature, ((c$ as CertificateRequest).PublicKey as crypto.PublicKey | null), true)
	}

	static __typeInfo = $.registerStructType(
		"x509.CertificateRequest",
		() => new CertificateRequest(),
		() => [$.methodSignature("CheckSignature", [], ["error"], true)],
		CertificateRequest,
		() => [/* @__PURE__ */ $.structField("Raw", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, true), /* @__PURE__ */ $.structField("RawTBSCertificateRequest", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, true), /* @__PURE__ */ $.structField("RawSubjectPublicKeyInfo", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 48, true), /* @__PURE__ */ $.structField("RawSubject", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 72, true), /* @__PURE__ */ $.structField("RawSignatureAlgorithm", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 96, true), /* @__PURE__ */ $.structField("Version", /* @__PURE__ */ $.basicType("int"), [5], 120, true), /* @__PURE__ */ $.structField("Signature", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 128, true), /* @__PURE__ */ $.structField("SignatureAlgorithm", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [7], 152, true), /* @__PURE__ */ $.structField("PublicKeyAlgorithm", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [8], 160, true), /* @__PURE__ */ $.structField("PublicKey", { kind: $.TypeKind.Interface, methods: [] }, [9], 168, true), /* @__PURE__ */ $.structField("Subject", "pkix.Name", [10], 184, true), /* @__PURE__ */ $.structField("Attributes", /* @__PURE__ */ $.sliceType("pkix.AttributeTypeAndValueSET"), [11], 432, true), /* @__PURE__ */ $.structField("Extensions", /* @__PURE__ */ $.sliceType("pkix.Extension"), [12], 456, true), /* @__PURE__ */ $.structField("ExtraExtensions", /* @__PURE__ */ $.sliceType("pkix.Extension"), [13], 480, true), /* @__PURE__ */ $.structField("DNSNames", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [14], 504, true), /* @__PURE__ */ $.structField("EmailAddresses", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [15], 528, true), /* @__PURE__ */ $.structField("IPAddresses", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP")), [16], 552, true), /* @__PURE__ */ $.structField("URIs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("url.URL")), [17], 576, true)]
	)
}

export class tbsCertificateRequest {
	public get Raw(): asn1.RawContent {
		return this._fields.Raw
	}

	public set Raw(value: asn1.RawContent) {
		this._fields.Raw = value
	}

	public get Version(): number {
		return this._fields.Version
	}

	public set Version(value: number) {
		this._fields.Version = value
	}

	public get Subject(): asn1.RawValue {
		return this._fields.Subject
	}

	public set Subject(value: asn1.RawValue) {
		this._fields.Subject = value
	}

	public get PublicKey(): publicKeyInfo {
		return this._fields.PublicKey
	}

	public set PublicKey(value: publicKeyInfo) {
		this._fields.PublicKey = value
	}

	public get RawAttributes(): $.Slice<asn1.RawValue> {
		return this._fields.RawAttributes
	}

	public set RawAttributes(value: $.Slice<asn1.RawValue>) {
		this._fields.RawAttributes = value
	}

	public _fields: {
		Raw: asn1.RawContent
		Version: number
		Subject: asn1.RawValue
		PublicKey: publicKeyInfo
		RawAttributes: $.Slice<asn1.RawValue>
	}

	constructor(init?: Partial<{Raw?: asn1.RawContent, Version?: number, Subject?: asn1.RawValue, PublicKey?: publicKeyInfo, RawAttributes?: $.Slice<asn1.RawValue>}>, __goscriptValue?: boolean) {
		this._fields = {
			Raw: init?.Raw ?? (null! as asn1.RawContent),
			Version: init?.Version ?? (0 as number),
			Subject: init?.Subject ? init.Subject.clone() : new asn1.RawValue(undefined, true),
			PublicKey: init?.PublicKey ? init.PublicKey.clone() : new publicKeyInfo(undefined, true),
			RawAttributes: init?.RawAttributes ?? (null! as $.Slice<asn1.RawValue>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tbsCertificateRequest {
		return new tbsCertificateRequest(this, true)
	}

	public __goscriptAssign(source: tbsCertificateRequest): void {
		const target = this._fields
		const values = source._fields
		target.Raw = values.Raw
		target.Version = values.Version
		$.assignStruct(target.Subject, values.Subject)
		$.assignStruct(target.PublicKey, values.PublicKey)
		target.RawAttributes = values.RawAttributes
	}

	static __typeInfo = $.registerStructType(
		"x509.tbsCertificateRequest",
		() => new tbsCertificateRequest(),
		() => [],
		tbsCertificateRequest,
		() => [/* @__PURE__ */ $.structField("Raw", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "asn1.RawContent"), [0], 0, true), /* @__PURE__ */ $.structField("Version", /* @__PURE__ */ $.basicType("int"), [1], 24, true), /* @__PURE__ */ $.structField("Subject", "asn1.RawValue", [2], 32, true), /* @__PURE__ */ $.structField("PublicKey", "x509.publicKeyInfo", [3], 104, true), /* @__PURE__ */ $.structField("RawAttributes", /* @__PURE__ */ $.sliceType("asn1.RawValue"), [4], 256, true, { tag: "asn1:\"tag:0\"" })]
	)
}

export class certificateRequest {
	public get Raw(): asn1.RawContent {
		return this._fields.Raw
	}

	public set Raw(value: asn1.RawContent) {
		this._fields.Raw = value
	}

	public get TBSCSR(): tbsCertificateRequest {
		return this._fields.TBSCSR
	}

	public set TBSCSR(value: tbsCertificateRequest) {
		this._fields.TBSCSR = value
	}

	public get SignatureAlgorithm(): {"Raw": asn1.RawContent, "Algorithm": asn1.ObjectIdentifier, "Parameters": asn1.RawValue} {
		return this._fields.SignatureAlgorithm
	}

	public set SignatureAlgorithm(value: {"Raw": asn1.RawContent, "Algorithm": asn1.ObjectIdentifier, "Parameters": asn1.RawValue}) {
		this._fields.SignatureAlgorithm = value
	}

	public get SignatureValue(): asn1.BitString {
		return this._fields.SignatureValue
	}

	public set SignatureValue(value: asn1.BitString) {
		this._fields.SignatureValue = value
	}

	public _fields: {
		Raw: asn1.RawContent
		TBSCSR: tbsCertificateRequest
		SignatureAlgorithm: {"Raw": asn1.RawContent, "Algorithm": asn1.ObjectIdentifier, "Parameters": asn1.RawValue}
		SignatureValue: asn1.BitString
	}

	constructor(init?: Partial<{Raw?: asn1.RawContent, TBSCSR?: tbsCertificateRequest, SignatureAlgorithm?: {"Raw": asn1.RawContent, "Algorithm": asn1.ObjectIdentifier, "Parameters": asn1.RawValue}, SignatureValue?: asn1.BitString}>, __goscriptValue?: boolean) {
		this._fields = {
			Raw: init?.Raw ?? (null! as asn1.RawContent),
			TBSCSR: init?.TBSCSR ? init.TBSCSR.clone() : new tbsCertificateRequest(undefined, true),
			SignatureAlgorithm: init?.SignatureAlgorithm ? $.markAsStructValue($.cloneStructValue(init.SignatureAlgorithm)) : $.anonymousStructValue({"Raw": null, "Algorithm": null, "Parameters": new asn1.RawValue(undefined, true)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Raw", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "asn1.RawContent"), [0], 0, true), /* @__PURE__ */ $.structField("Algorithm", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [1], 24, true), /* @__PURE__ */ $.structField("Parameters", "asn1.RawValue", [2], 48, true, { tag: "asn1:\"optional\"" })] }),
			SignatureValue: init?.SignatureValue ? init.SignatureValue.clone() : new asn1.BitString(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): certificateRequest {
		return new certificateRequest(this, true)
	}

	public __goscriptAssign(source: certificateRequest): void {
		const target = this._fields
		const values = source._fields
		target.Raw = values.Raw
		$.assignStruct(target.TBSCSR, values.TBSCSR)
		$.assignStruct(target.SignatureAlgorithm, values.SignatureAlgorithm)
		$.assignStruct(target.SignatureValue, values.SignatureValue)
	}

	static __typeInfo = $.registerStructType(
		"x509.certificateRequest",
		() => new certificateRequest(),
		() => [],
		certificateRequest,
		() => [/* @__PURE__ */ $.structField("Raw", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "asn1.RawContent"), [0], 0, true), /* @__PURE__ */ $.structField("TBSCSR", "x509.tbsCertificateRequest", [1], 24, true), /* @__PURE__ */ $.structField("SignatureAlgorithm", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Raw", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "asn1.RawContent"), [0], 0, true), /* @__PURE__ */ $.structField("Algorithm", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [1], 24, true), /* @__PURE__ */ $.structField("Parameters", "asn1.RawValue", [2], 48, true, { tag: "asn1:\"optional\"" })] }, [2], 304, true), /* @__PURE__ */ $.structField("SignatureValue", "asn1.BitString", [3], 424, true)]
	)
}

export class RevocationListEntry {
	// Raw contains the raw bytes of the revokedCertificates entry. It is set when
	// parsing a CRL; it is ignored when generating a CRL.
	public get Raw(): $.Slice<number> {
		return this._fields.Raw
	}

	public set Raw(value: $.Slice<number>) {
		this._fields.Raw = value
	}

	// SerialNumber represents the serial number of a revoked certificate. It is
	// both used when creating a CRL and populated when parsing a CRL. It must not
	// be nil.
	public get SerialNumber(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.SerialNumber
	}

	public set SerialNumber(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.SerialNumber = value
	}

	// RevocationTime represents the time at which the certificate was revoked. It
	// is both used when creating a CRL and populated when parsing a CRL. It must
	// not be the zero time.
	public get RevocationTime(): time.Time {
		return this._fields.RevocationTime
	}

	public set RevocationTime(value: time.Time) {
		this._fields.RevocationTime = value
	}

	// ReasonCode represents the reason for revocation, using the integer enum
	// values specified in RFC 5280 Section 5.3.1. When creating a CRL, the zero
	// value will result in the reasonCode extension being omitted. When parsing a
	// CRL, the zero value may represent either the reasonCode extension being
	// absent (which implies the default revocation reason of 0/Unspecified), or
	// it may represent the reasonCode extension being present and explicitly
	// containing a value of 0/Unspecified (which should not happen according to
	// the DER encoding rules, but can and does happen anyway).
	public get ReasonCode(): number {
		return this._fields.ReasonCode
	}

	public set ReasonCode(value: number) {
		this._fields.ReasonCode = value
	}

	// Extensions contains raw X.509 extensions. When parsing CRL entries,
	// this can be used to extract non-critical extensions that are not
	// parsed by this package. When marshaling CRL entries, the Extensions
	// field is ignored, see ExtraExtensions.
	public get Extensions(): $.Slice<pkix2.Extension> {
		return this._fields.Extensions
	}

	public set Extensions(value: $.Slice<pkix2.Extension>) {
		this._fields.Extensions = value
	}

	// ExtraExtensions contains extensions to be copied, raw, into any
	// marshaled CRL entries. Values override any extensions that would
	// otherwise be produced based on the other fields. The ExtraExtensions
	// field is not populated when parsing CRL entries, see Extensions.
	public get ExtraExtensions(): $.Slice<pkix2.Extension> {
		return this._fields.ExtraExtensions
	}

	public set ExtraExtensions(value: $.Slice<pkix2.Extension>) {
		this._fields.ExtraExtensions = value
	}

	public _fields: {
		Raw: $.Slice<number>
		SerialNumber: big.Int | $.VarRef<big.Int> | null
		RevocationTime: time.Time
		ReasonCode: number
		Extensions: $.Slice<pkix2.Extension>
		ExtraExtensions: $.Slice<pkix2.Extension>
	}

	constructor(init?: Partial<{Raw?: $.Slice<number>, SerialNumber?: big.Int | $.VarRef<big.Int> | null, RevocationTime?: time.Time, ReasonCode?: number, Extensions?: $.Slice<pkix2.Extension>, ExtraExtensions?: $.Slice<pkix2.Extension>}>, __goscriptValue?: boolean) {
		this._fields = {
			Raw: init?.Raw ?? (null! as $.Slice<number>),
			SerialNumber: init?.SerialNumber ?? (null! as big.Int | $.VarRef<big.Int> | null),
			RevocationTime: init?.RevocationTime ? $.markAsStructValue($.cloneStructValue(init.RevocationTime)) : $.markAsStructValue(new time.Time()),
			ReasonCode: init?.ReasonCode ?? (0 as number),
			Extensions: init?.Extensions ?? (null! as $.Slice<pkix2.Extension>),
			ExtraExtensions: init?.ExtraExtensions ?? (null! as $.Slice<pkix2.Extension>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RevocationListEntry {
		return new RevocationListEntry(this, true)
	}

	public __goscriptAssign(source: RevocationListEntry): void {
		const target = this._fields
		const values = source._fields
		target.Raw = values.Raw
		target.SerialNumber = values.SerialNumber
		$.assignStruct(target.RevocationTime, values.RevocationTime)
		target.ReasonCode = values.ReasonCode
		target.Extensions = values.Extensions
		target.ExtraExtensions = values.ExtraExtensions
	}

	static __typeInfo = $.registerStructType(
		"x509.RevocationListEntry",
		() => new RevocationListEntry(),
		() => [],
		RevocationListEntry,
		() => [/* @__PURE__ */ $.structField("Raw", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, true), /* @__PURE__ */ $.structField("SerialNumber", /* @__PURE__ */ $.pointerType("big.Int"), [1], 24, true), /* @__PURE__ */ $.structField("RevocationTime", "time.Time", [2], 32, true), /* @__PURE__ */ $.structField("ReasonCode", /* @__PURE__ */ $.basicType("int"), [3], 56, true), /* @__PURE__ */ $.structField("Extensions", /* @__PURE__ */ $.sliceType("pkix.Extension"), [4], 64, true), /* @__PURE__ */ $.structField("ExtraExtensions", /* @__PURE__ */ $.sliceType("pkix.Extension"), [5], 88, true)]
	)
}

export class RevocationList {
	// Raw contains the complete ASN.1 DER content of the CRL (tbsCertList,
	// signatureAlgorithm, and signatureValue.)
	public get Raw(): $.Slice<number> {
		return this._fields.Raw
	}

	public set Raw(value: $.Slice<number>) {
		this._fields.Raw = value
	}

	// RawTBSRevocationList contains just the tbsCertList portion of the ASN.1
	// DER.
	public get RawTBSRevocationList(): $.Slice<number> {
		return this._fields.RawTBSRevocationList
	}

	public set RawTBSRevocationList(value: $.Slice<number>) {
		this._fields.RawTBSRevocationList = value
	}

	// RawIssuer contains the DER encoded Issuer.
	public get RawIssuer(): $.Slice<number> {
		return this._fields.RawIssuer
	}

	public set RawIssuer(value: $.Slice<number>) {
		this._fields.RawIssuer = value
	}

	// RawSignatureAlgorithm contains the DER encoded signature algorithm as a
	// PKIX AlgorithmIdentifier.
	public get RawSignatureAlgorithm(): $.Slice<number> {
		return this._fields.RawSignatureAlgorithm
	}

	public set RawSignatureAlgorithm(value: $.Slice<number>) {
		this._fields.RawSignatureAlgorithm = value
	}

	// Issuer contains the DN of the issuing certificate.
	public get Issuer(): pkix2.Name {
		return this._fields.Issuer
	}

	public set Issuer(value: pkix2.Name) {
		this._fields.Issuer = value
	}

	// AuthorityKeyId is used to identify the public key associated with the
	// issuing certificate. It is populated from the authorityKeyIdentifier
	// extension when parsing a CRL. It is ignored when creating a CRL; the
	// extension is populated from the issuing certificate itself.
	public get AuthorityKeyId(): $.Slice<number> {
		return this._fields.AuthorityKeyId
	}

	public set AuthorityKeyId(value: $.Slice<number>) {
		this._fields.AuthorityKeyId = value
	}

	public get Signature(): $.Slice<number> {
		return this._fields.Signature
	}

	public set Signature(value: $.Slice<number>) {
		this._fields.Signature = value
	}

	// SignatureAlgorithm is used to determine the signature algorithm to be
	// used when signing the CRL. If 0 the default algorithm for the signing
	// key will be used.
	public get SignatureAlgorithm(): SignatureAlgorithm {
		return this._fields.SignatureAlgorithm
	}

	public set SignatureAlgorithm(value: SignatureAlgorithm) {
		this._fields.SignatureAlgorithm = value
	}

	// RevokedCertificateEntries represents the revokedCertificates sequence in
	// the CRL. It is used when creating a CRL and also populated when parsing a
	// CRL. When creating a CRL, it may be empty or nil, in which case the
	// revokedCertificates ASN.1 sequence will be omitted from the CRL entirely.
	public get RevokedCertificateEntries(): $.Slice<RevocationListEntry> {
		return this._fields.RevokedCertificateEntries
	}

	public set RevokedCertificateEntries(value: $.Slice<RevocationListEntry>) {
		this._fields.RevokedCertificateEntries = value
	}

	// RevokedCertificates is used to populate the revokedCertificates
	// sequence in the CRL if RevokedCertificateEntries is empty. It may be empty
	// or nil, in which case an empty CRL will be created.
	//
	// Deprecated: Use RevokedCertificateEntries instead.
	public get RevokedCertificates(): $.Slice<pkix2.RevokedCertificate> {
		return this._fields.RevokedCertificates
	}

	public set RevokedCertificates(value: $.Slice<pkix2.RevokedCertificate>) {
		this._fields.RevokedCertificates = value
	}

	// Number is used to populate the X.509 v2 cRLNumber extension in the CRL,
	// which should be a monotonically increasing sequence number for a given
	// CRL scope and CRL issuer. It is also populated from the cRLNumber
	// extension when parsing a CRL.
	public get Number(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.Number
	}

	public set Number(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.Number = value
	}

	// ThisUpdate is used to populate the thisUpdate field in the CRL, which
	// indicates the issuance date of the CRL.
	public get ThisUpdate(): time.Time {
		return this._fields.ThisUpdate
	}

	public set ThisUpdate(value: time.Time) {
		this._fields.ThisUpdate = value
	}

	// NextUpdate is used to populate the nextUpdate field in the CRL, which
	// indicates the date by which the next CRL will be issued. NextUpdate
	// must be greater than ThisUpdate.
	public get NextUpdate(): time.Time {
		return this._fields.NextUpdate
	}

	public set NextUpdate(value: time.Time) {
		this._fields.NextUpdate = value
	}

	// Extensions contains raw X.509 extensions. When creating a CRL,
	// the Extensions field is ignored, see ExtraExtensions.
	public get Extensions(): $.Slice<pkix2.Extension> {
		return this._fields.Extensions
	}

	public set Extensions(value: $.Slice<pkix2.Extension>) {
		this._fields.Extensions = value
	}

	// ExtraExtensions contains any additional extensions to add directly to
	// the CRL.
	public get ExtraExtensions(): $.Slice<pkix2.Extension> {
		return this._fields.ExtraExtensions
	}

	public set ExtraExtensions(value: $.Slice<pkix2.Extension>) {
		this._fields.ExtraExtensions = value
	}

	public _fields: {
		Raw: $.Slice<number>
		RawTBSRevocationList: $.Slice<number>
		RawIssuer: $.Slice<number>
		RawSignatureAlgorithm: $.Slice<number>
		Issuer: pkix2.Name
		AuthorityKeyId: $.Slice<number>
		Signature: $.Slice<number>
		SignatureAlgorithm: SignatureAlgorithm
		RevokedCertificateEntries: $.Slice<RevocationListEntry>
		RevokedCertificates: $.Slice<pkix2.RevokedCertificate>
		Number: big.Int | $.VarRef<big.Int> | null
		ThisUpdate: time.Time
		NextUpdate: time.Time
		Extensions: $.Slice<pkix2.Extension>
		ExtraExtensions: $.Slice<pkix2.Extension>
	}

	constructor(init?: Partial<{Raw?: $.Slice<number>, RawTBSRevocationList?: $.Slice<number>, RawIssuer?: $.Slice<number>, RawSignatureAlgorithm?: $.Slice<number>, Issuer?: pkix2.Name, AuthorityKeyId?: $.Slice<number>, Signature?: $.Slice<number>, SignatureAlgorithm?: SignatureAlgorithm, RevokedCertificateEntries?: $.Slice<RevocationListEntry>, RevokedCertificates?: $.Slice<pkix2.RevokedCertificate>, Number?: big.Int | $.VarRef<big.Int> | null, ThisUpdate?: time.Time, NextUpdate?: time.Time, Extensions?: $.Slice<pkix2.Extension>, ExtraExtensions?: $.Slice<pkix2.Extension>}>, __goscriptValue?: boolean) {
		this._fields = {
			Raw: init?.Raw ?? (null! as $.Slice<number>),
			RawTBSRevocationList: init?.RawTBSRevocationList ?? (null! as $.Slice<number>),
			RawIssuer: init?.RawIssuer ?? (null! as $.Slice<number>),
			RawSignatureAlgorithm: init?.RawSignatureAlgorithm ?? (null! as $.Slice<number>),
			Issuer: init?.Issuer ? init.Issuer.clone() : new pkix2.Name(undefined, true),
			AuthorityKeyId: init?.AuthorityKeyId ?? (null! as $.Slice<number>),
			Signature: init?.Signature ?? (null! as $.Slice<number>),
			SignatureAlgorithm: init?.SignatureAlgorithm ?? (0 as SignatureAlgorithm),
			RevokedCertificateEntries: init?.RevokedCertificateEntries ?? (null! as $.Slice<RevocationListEntry>),
			RevokedCertificates: init?.RevokedCertificates ?? (null! as $.Slice<pkix2.RevokedCertificate>),
			Number: init?.Number ?? (null! as big.Int | $.VarRef<big.Int> | null),
			ThisUpdate: init?.ThisUpdate ? $.markAsStructValue($.cloneStructValue(init.ThisUpdate)) : $.markAsStructValue(new time.Time()),
			NextUpdate: init?.NextUpdate ? $.markAsStructValue($.cloneStructValue(init.NextUpdate)) : $.markAsStructValue(new time.Time()),
			Extensions: init?.Extensions ?? (null! as $.Slice<pkix2.Extension>),
			ExtraExtensions: init?.ExtraExtensions ?? (null! as $.Slice<pkix2.Extension>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RevocationList {
		return new RevocationList(this, true)
	}

	public __goscriptAssign(source: RevocationList): void {
		const target = this._fields
		const values = source._fields
		target.Raw = values.Raw
		target.RawTBSRevocationList = values.RawTBSRevocationList
		target.RawIssuer = values.RawIssuer
		target.RawSignatureAlgorithm = values.RawSignatureAlgorithm
		$.assignStruct(target.Issuer, values.Issuer)
		target.AuthorityKeyId = values.AuthorityKeyId
		target.Signature = values.Signature
		target.SignatureAlgorithm = values.SignatureAlgorithm
		target.RevokedCertificateEntries = values.RevokedCertificateEntries
		target.RevokedCertificates = values.RevokedCertificates
		target.Number = values.Number
		$.assignStruct(target.ThisUpdate, values.ThisUpdate)
		$.assignStruct(target.NextUpdate, values.NextUpdate)
		target.Extensions = values.Extensions
		target.ExtraExtensions = values.ExtraExtensions
	}

	public async CheckSignatureFrom(parent: Certificate | $.VarRef<Certificate> | null): globalThis.Promise<$.GoError> {
		const rl: RevocationList | $.VarRef<RevocationList> | null = this;
		const rl$: RevocationList = rl == null ? $.pointerTarget<RevocationList>(rl) : (rl as any).__isVarRef === true ? (rl as any).value : (rl as any).__goValue === undefined ? (rl as any) : $.pointerTarget<RevocationList>(rl)
		const parent$: Certificate = parent == null ? $.pointerTarget<Certificate>(parent) : (parent as any).__isVarRef === true ? (parent as any).value : (parent as any).__goValue === undefined ? (parent as any) : $.pointerTarget<Certificate>(parent)
		if ((((parent$ as Certificate).Version == 3) && !(parent$ as Certificate).BasicConstraintsValid) || ((parent$ as Certificate).BasicConstraintsValid && !(parent$ as Certificate).IsCA)) {
			return $.interfaceValue<$.GoError>(new ConstraintViolationError(undefined, true), "x509.ConstraintViolationError", "x509.ConstraintViolationError")
		}

		if (((parent$ as Certificate).KeyUsage != 0) && (((parent$ as Certificate).KeyUsage & 64) == 0)) {
			return $.interfaceValue<$.GoError>(new ConstraintViolationError(undefined, true), "x509.ConstraintViolationError", "x509.ConstraintViolationError")
		}

		if ((parent$ as Certificate).PublicKeyAlgorithm == 0) {
			return ErrUnsupportedAlgorithm
		}

		return Certificate.prototype.CheckSignature.call(parent, (rl$ as RevocationList).SignatureAlgorithm, (rl$ as RevocationList).RawTBSRevocationList, (rl$ as RevocationList).Signature)
	}

	static __typeInfo = $.registerStructType(
		"x509.RevocationList",
		() => new RevocationList(),
		() => [$.methodSignature("CheckSignatureFrom", [["parent", /* @__PURE__ */ $.pointerType("x509.Certificate")]], ["error"], true)],
		RevocationList,
		() => [/* @__PURE__ */ $.structField("Raw", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, true), /* @__PURE__ */ $.structField("RawTBSRevocationList", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, true), /* @__PURE__ */ $.structField("RawIssuer", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 48, true), /* @__PURE__ */ $.structField("RawSignatureAlgorithm", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 72, true), /* @__PURE__ */ $.structField("Issuer", "pkix.Name", [4], 96, true), /* @__PURE__ */ $.structField("AuthorityKeyId", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 344, true), /* @__PURE__ */ $.structField("Signature", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 368, true), /* @__PURE__ */ $.structField("SignatureAlgorithm", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [7], 392, true), /* @__PURE__ */ $.structField("RevokedCertificateEntries", /* @__PURE__ */ $.sliceType("x509.RevocationListEntry"), [8], 400, true), /* @__PURE__ */ $.structField("RevokedCertificates", /* @__PURE__ */ $.sliceType("pkix.RevokedCertificate"), [9], 424, true), /* @__PURE__ */ $.structField("Number", /* @__PURE__ */ $.pointerType("big.Int"), [10], 448, true), /* @__PURE__ */ $.structField("ThisUpdate", "time.Time", [11], 456, true), /* @__PURE__ */ $.structField("NextUpdate", "time.Time", [12], 480, true), /* @__PURE__ */ $.structField("Extensions", /* @__PURE__ */ $.sliceType("pkix.Extension"), [13], 504, true), /* @__PURE__ */ $.structField("ExtraExtensions", /* @__PURE__ */ $.sliceType("pkix.Extension"), [14], 528, true)]
	)
}

export class tbsCertificateList {
	public get Raw(): asn1.RawContent {
		return this._fields.Raw
	}

	public set Raw(value: asn1.RawContent) {
		this._fields.Raw = value
	}

	public get Version(): number {
		return this._fields.Version
	}

	public set Version(value: number) {
		this._fields.Version = value
	}

	public get Signature(): pkix2.AlgorithmIdentifier {
		return this._fields.Signature
	}

	public set Signature(value: pkix2.AlgorithmIdentifier) {
		this._fields.Signature = value
	}

	public get Issuer(): asn1.RawValue {
		return this._fields.Issuer
	}

	public set Issuer(value: asn1.RawValue) {
		this._fields.Issuer = value
	}

	public get ThisUpdate(): time.Time {
		return this._fields.ThisUpdate
	}

	public set ThisUpdate(value: time.Time) {
		this._fields.ThisUpdate = value
	}

	public get NextUpdate(): time.Time {
		return this._fields.NextUpdate
	}

	public set NextUpdate(value: time.Time) {
		this._fields.NextUpdate = value
	}

	public get RevokedCertificates(): $.Slice<pkix2.RevokedCertificate> {
		return this._fields.RevokedCertificates
	}

	public set RevokedCertificates(value: $.Slice<pkix2.RevokedCertificate>) {
		this._fields.RevokedCertificates = value
	}

	public get Extensions(): $.Slice<pkix2.Extension> {
		return this._fields.Extensions
	}

	public set Extensions(value: $.Slice<pkix2.Extension>) {
		this._fields.Extensions = value
	}

	public _fields: {
		Raw: asn1.RawContent
		Version: number
		Signature: pkix2.AlgorithmIdentifier
		Issuer: asn1.RawValue
		ThisUpdate: time.Time
		NextUpdate: time.Time
		RevokedCertificates: $.Slice<pkix2.RevokedCertificate>
		Extensions: $.Slice<pkix2.Extension>
	}

	constructor(init?: Partial<{Raw?: asn1.RawContent, Version?: number, Signature?: pkix2.AlgorithmIdentifier, Issuer?: asn1.RawValue, ThisUpdate?: time.Time, NextUpdate?: time.Time, RevokedCertificates?: $.Slice<pkix2.RevokedCertificate>, Extensions?: $.Slice<pkix2.Extension>}>, __goscriptValue?: boolean) {
		this._fields = {
			Raw: init?.Raw ?? (null! as asn1.RawContent),
			Version: init?.Version ?? (0 as number),
			Signature: init?.Signature ? init.Signature.clone() : new pkix2.AlgorithmIdentifier(undefined, true),
			Issuer: init?.Issuer ? init.Issuer.clone() : new asn1.RawValue(undefined, true),
			ThisUpdate: init?.ThisUpdate ? $.markAsStructValue($.cloneStructValue(init.ThisUpdate)) : $.markAsStructValue(new time.Time()),
			NextUpdate: init?.NextUpdate ? $.markAsStructValue($.cloneStructValue(init.NextUpdate)) : $.markAsStructValue(new time.Time()),
			RevokedCertificates: init?.RevokedCertificates ?? (null! as $.Slice<pkix2.RevokedCertificate>),
			Extensions: init?.Extensions ?? (null! as $.Slice<pkix2.Extension>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tbsCertificateList {
		return new tbsCertificateList(this, true)
	}

	public __goscriptAssign(source: tbsCertificateList): void {
		const target = this._fields
		const values = source._fields
		target.Raw = values.Raw
		target.Version = values.Version
		$.assignStruct(target.Signature, values.Signature)
		$.assignStruct(target.Issuer, values.Issuer)
		$.assignStruct(target.ThisUpdate, values.ThisUpdate)
		$.assignStruct(target.NextUpdate, values.NextUpdate)
		target.RevokedCertificates = values.RevokedCertificates
		target.Extensions = values.Extensions
	}

	static __typeInfo = $.registerStructType(
		"x509.tbsCertificateList",
		() => new tbsCertificateList(),
		() => [],
		tbsCertificateList,
		() => [/* @__PURE__ */ $.structField("Raw", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "asn1.RawContent"), [0], 0, true), /* @__PURE__ */ $.structField("Version", /* @__PURE__ */ $.basicType("int"), [1], 24, true, { tag: "asn1:\"optional,default:0\"" }), /* @__PURE__ */ $.structField("Signature", "pkix.AlgorithmIdentifier", [2], 32, true), /* @__PURE__ */ $.structField("Issuer", "asn1.RawValue", [3], 128, true), /* @__PURE__ */ $.structField("ThisUpdate", "time.Time", [4], 200, true), /* @__PURE__ */ $.structField("NextUpdate", "time.Time", [5], 224, true, { tag: "asn1:\"optional\"" }), /* @__PURE__ */ $.structField("RevokedCertificates", /* @__PURE__ */ $.sliceType("pkix.RevokedCertificate"), [6], 248, true, { tag: "asn1:\"optional\"" }), /* @__PURE__ */ $.structField("Extensions", /* @__PURE__ */ $.sliceType("pkix.Extension"), [7], 272, true, { tag: "asn1:\"tag:0,optional,explicit\"" })]
	)
}

export class certificateList {
	public get TBSCertList(): tbsCertificateList {
		return this._fields.TBSCertList
	}

	public set TBSCertList(value: tbsCertificateList) {
		this._fields.TBSCertList = value
	}

	public get SignatureAlgorithm(): pkix2.AlgorithmIdentifier {
		return this._fields.SignatureAlgorithm
	}

	public set SignatureAlgorithm(value: pkix2.AlgorithmIdentifier) {
		this._fields.SignatureAlgorithm = value
	}

	public get SignatureValue(): asn1.BitString {
		return this._fields.SignatureValue
	}

	public set SignatureValue(value: asn1.BitString) {
		this._fields.SignatureValue = value
	}

	public _fields: {
		TBSCertList: tbsCertificateList
		SignatureAlgorithm: pkix2.AlgorithmIdentifier
		SignatureValue: asn1.BitString
	}

	constructor(init?: Partial<{TBSCertList?: tbsCertificateList, SignatureAlgorithm?: pkix2.AlgorithmIdentifier, SignatureValue?: asn1.BitString}>, __goscriptValue?: boolean) {
		this._fields = {
			TBSCertList: init?.TBSCertList ? init.TBSCertList.clone() : new tbsCertificateList(undefined, true),
			SignatureAlgorithm: init?.SignatureAlgorithm ? init.SignatureAlgorithm.clone() : new pkix2.AlgorithmIdentifier(undefined, true),
			SignatureValue: init?.SignatureValue ? init.SignatureValue.clone() : new asn1.BitString(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): certificateList {
		return new certificateList(this, true)
	}

	public __goscriptAssign(source: certificateList): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.TBSCertList, values.TBSCertList)
		$.assignStruct(target.SignatureAlgorithm, values.SignatureAlgorithm)
		$.assignStruct(target.SignatureValue, values.SignatureValue)
	}

	static __typeInfo = $.registerStructType(
		"x509.certificateList",
		() => new certificateList(),
		() => [],
		certificateList,
		() => [/* @__PURE__ */ $.structField("TBSCertList", "x509.tbsCertificateList", [0], 0, true), /* @__PURE__ */ $.structField("SignatureAlgorithm", "pkix.AlgorithmIdentifier", [1], 296, true), /* @__PURE__ */ $.structField("SignatureValue", "asn1.BitString", [2], 392, true)]
	)
}

export const UnknownSignatureAlgorithm: SignatureAlgorithm = 0

export const MD2WithRSA: SignatureAlgorithm = 1

export const MD5WithRSA: SignatureAlgorithm = 2

export const SHA1WithRSA: SignatureAlgorithm = 3

export const SHA256WithRSA: SignatureAlgorithm = 4

export const SHA384WithRSA: SignatureAlgorithm = 5

export const SHA512WithRSA: SignatureAlgorithm = 6

export const DSAWithSHA1: SignatureAlgorithm = 7

export const DSAWithSHA256: SignatureAlgorithm = 8

export const ECDSAWithSHA1: SignatureAlgorithm = 9

export const ECDSAWithSHA256: SignatureAlgorithm = 10

export const ECDSAWithSHA384: SignatureAlgorithm = 11

export const ECDSAWithSHA512: SignatureAlgorithm = 12

export const SHA256WithRSAPSS: SignatureAlgorithm = 13

export const SHA384WithRSAPSS: SignatureAlgorithm = 14

export const SHA512WithRSAPSS: SignatureAlgorithm = 15

export const PureEd25519: SignatureAlgorithm = 16

export const MLDSA44: SignatureAlgorithm = 17

export const MLDSA65: SignatureAlgorithm = 18

export const MLDSA87: SignatureAlgorithm = 19

export const UnknownPublicKeyAlgorithm: PublicKeyAlgorithm = 0

export const RSA: PublicKeyAlgorithm = 1

export const DSA: PublicKeyAlgorithm = 2

export const ECDSA: PublicKeyAlgorithm = 3

export const Ed25519: PublicKeyAlgorithm = 4

export const MLDSA: PublicKeyAlgorithm = 5

export const KeyUsageDigitalSignature: KeyUsage = 1

export const KeyUsageContentCommitment: KeyUsage = 2

export const KeyUsageKeyEncipherment: KeyUsage = 4

export const KeyUsageDataEncipherment: KeyUsage = 8

export const KeyUsageKeyAgreement: KeyUsage = 16

export const KeyUsageCertSign: KeyUsage = 32

export const KeyUsageCRLSign: KeyUsage = 64

export const KeyUsageEncipherOnly: KeyUsage = 128

export const KeyUsageDecipherOnly: KeyUsage = 256

export const ExtKeyUsageAny: ExtKeyUsage = 0

export const ExtKeyUsageServerAuth: ExtKeyUsage = 1

export const ExtKeyUsageClientAuth: ExtKeyUsage = 2

export const ExtKeyUsageCodeSigning: ExtKeyUsage = 3

export const ExtKeyUsageEmailProtection: ExtKeyUsage = 4

export const ExtKeyUsageIPSECEndSystem: ExtKeyUsage = 5

export const ExtKeyUsageIPSECTunnel: ExtKeyUsage = 6

export const ExtKeyUsageIPSECUser: ExtKeyUsage = 7

export const ExtKeyUsageTimeStamping: ExtKeyUsage = 8

export const ExtKeyUsageOCSPSigning: ExtKeyUsage = 9

export const ExtKeyUsageMicrosoftServerGatedCrypto: ExtKeyUsage = 10

export const ExtKeyUsageNetscapeServerGatedCrypto: ExtKeyUsage = 11

export const ExtKeyUsageMicrosoftCommercialCodeSigning: ExtKeyUsage = 12

export const ExtKeyUsageMicrosoftKernelCodeSigning: ExtKeyUsage = 13

export const nameTypeEmail: number = 1

export const nameTypeDNS: number = 2

export const nameTypeURI: number = 6

export const nameTypeIP: number = 7

export async function ParsePKIXPublicKey(derBytes: $.Slice<number>): globalThis.Promise<[any, $.GoError]> {
	let pub: any = null! as any
	let err: $.GoError = null! as $.GoError
	let pki: $.VarRef<publicKeyInfo> = $.varRef(new publicKeyInfo(undefined, true))
	{
		let __goscriptTuple0: any = await asn1.Unmarshal(derBytes, $.interfaceValue(pki, "*x509.publicKeyInfo", /* @__PURE__ */ $.pointerType("x509.publicKeyInfo")))
		let rest: $.Slice<number> = __goscriptTuple0[0]
		let __goscriptShadow0 = __goscriptTuple0[1]
		if (__goscriptShadow0 != null) {
			{
				let [, __goscriptShadow1] = await asn1.Unmarshal(derBytes, $.interfaceValue(new __goscript_pkcs1.pkcs1PublicKey(), "*x509.pkcs1PublicKey", /* @__PURE__ */ $.pointerType("x509.pkcs1PublicKey")))
				if (__goscriptShadow1 == null) {
					return [null, errors.New("x509: failed to parse public key (use ParsePKCS1PublicKey instead for this key format)")]
				}
			}
			return [null, __goscriptShadow0]
		} else {
			if ($.sliceLen(rest) != 0) {
				return [null, errors.New("x509: trailing data after ASN.1 of public-key")]
			}
		}
	}
	return __goscript_parser.parsePublicKey(pki)
}

export async function marshalPublicKey(pub: any): globalThis.Promise<[$.Slice<number>, pkix2.AlgorithmIdentifier, $.GoError]> {
	let publicKeyBytes: $.Slice<number> = null! as $.Slice<number>
	let publicKeyAlgorithm: pkix2.AlgorithmIdentifier = new pkix2.AlgorithmIdentifier(undefined, true)
	let err: $.GoError = null! as $.GoError
	{
		const __goscriptTypeSwitchValue = pub
		switch (true) {
			case $.typeAssert<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PublicKey")).ok:
				{
					let pub: rsa.PublicKey | $.VarRef<rsa.PublicKey> | null = $.typeAssert<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PublicKey")).value
					let __goscriptTuple1: any = await asn1.Marshal($.interfaceValue(new __goscript_pkcs1.pkcs1PublicKey({N: $.pointerValue<rsa.PublicKey>(pub).N, E: $.pointerValue<rsa.PublicKey>(pub).E}, true), "x509.pkcs1PublicKey", "x509.pkcs1PublicKey"))
					publicKeyBytes = __goscriptTuple1[0]
					err = __goscriptTuple1[1]
					if (err != null) {
						return [null, new pkix2.AlgorithmIdentifier(undefined, true), err]
					}
					publicKeyAlgorithm.Algorithm = (oidPublicKeyRSA as asn1.ObjectIdentifier)
					// This is a NULL parameters value which is required by
					// RFC 3279, Section 2.3.1.
					$.assignStruct(publicKeyAlgorithm.Parameters, $.pointerValue<asn1.RawValue>(asn1.__goscript_get_NullRawValue()))
				}
				break
			case $.typeAssert<ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdsa.PublicKey")).ok:
				{
					let pub: ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null = $.typeAssert<ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdsa.PublicKey")).value
					let __goscriptTuple2: any = await oidFromNamedCurve($.pointerValue<ecdsa.PublicKey>(pub).Curve)
					let oid: asn1.ObjectIdentifier = (__goscriptTuple2[0] as asn1.ObjectIdentifier)
					let ok = __goscriptTuple2[1]
					if (!ok) {
						return [null, new pkix2.AlgorithmIdentifier(undefined, true), errors.New("x509: unsupported elliptic curve")]
					}
					let __goscriptTuple3: any = await (pub !== null && (pub as any).__isVarRef !== true && (pub as any).__goValue === undefined ? ((pub as any) as ecdsa.PublicKey).Bytes() : ecdsa.PublicKey.prototype.Bytes.call(pub))
					publicKeyBytes = __goscriptTuple3[0]
					err = __goscriptTuple3[1]
					if (err != null) {
						return [null, new pkix2.AlgorithmIdentifier(undefined, true), err]
					}
					publicKeyAlgorithm.Algorithm = (oidPublicKeyECDSA as asn1.ObjectIdentifier)
					let paramBytes: $.Slice<number> = null! as $.Slice<number>
					let __goscriptTuple4: any = await asn1.Marshal($.namedValueInterfaceValue<any>(oid, "asn1.ObjectIdentifier", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
					paramBytes = __goscriptTuple4[0]
					err = __goscriptTuple4[1]
					if (err != null) {
						return [publicKeyBytes, publicKeyAlgorithm, err]
					}
					publicKeyAlgorithm.Parameters.FullBytes = paramBytes
				}
				break
			case $.typeAssert<ed25519.PublicKey>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PublicKey")).ok:
				{
					let pub: ed25519.PublicKey = $.typeAssert<ed25519.PublicKey>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PublicKey")).value
					publicKeyBytes = pub
					publicKeyAlgorithm.Algorithm = (oidPublicKeyEd25519 as asn1.ObjectIdentifier)
				}
				break
			case $.typeAssert<mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mldsa.PublicKey")).ok:
				{
					let pub: mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null = $.typeAssert<mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mldsa.PublicKey")).value
					let __goscriptTuple5: any = oidFromMLDSAParameters((pub !== null && (pub as any).__isVarRef !== true && (pub as any).__goValue === undefined ? ((pub as any) as mldsa.PublicKey).Parameters() : mldsa.PublicKey.prototype.Parameters.call(pub)))
					let oid: asn1.ObjectIdentifier = (__goscriptTuple5[0] as asn1.ObjectIdentifier)
					let ok = __goscriptTuple5[1]
					if (!ok) {
						return [null, new pkix2.AlgorithmIdentifier(undefined, true), errors.New("x509: unsupported ML-DSA parameters")]
					}
					publicKeyBytes = (pub !== null && (pub as any).__isVarRef !== true && (pub as any).__goValue === undefined ? ((pub as any) as mldsa.PublicKey).Bytes() : mldsa.PublicKey.prototype.Bytes.call(pub))
					publicKeyAlgorithm.Algorithm = (oid as asn1.ObjectIdentifier)
				}
				break
			case $.typeAssert<ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdh.PublicKey")).ok:
				{
					let pub: ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null = $.typeAssert<ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdh.PublicKey")).value
					publicKeyBytes = ecdh.PublicKey.prototype.Bytes.call($.pointerValue<ecdh.PublicKey>(pub))
					if ($.comparableEqual(ecdh.PublicKey.prototype.Curve.call($.pointerValue<ecdh.PublicKey>(pub)), ecdh.X25519())) {
						publicKeyAlgorithm.Algorithm = (oidPublicKeyX25519 as asn1.ObjectIdentifier)
					} else {
						let __goscriptTuple6: any = oidFromECDHCurve(ecdh.PublicKey.prototype.Curve.call($.pointerValue<ecdh.PublicKey>(pub)))
						let oid: asn1.ObjectIdentifier = (__goscriptTuple6[0] as asn1.ObjectIdentifier)
						let ok = __goscriptTuple6[1]
						if (!ok) {
							return [null, new pkix2.AlgorithmIdentifier(undefined, true), errors.New("x509: unsupported elliptic curve")]
						}
						publicKeyAlgorithm.Algorithm = (oidPublicKeyECDSA as asn1.ObjectIdentifier)
						let paramBytes: $.Slice<number> = null! as $.Slice<number>
						let __goscriptTuple7: any = await asn1.Marshal($.namedValueInterfaceValue<any>(oid, "asn1.ObjectIdentifier", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
						paramBytes = __goscriptTuple7[0]
						err = __goscriptTuple7[1]
						if (err != null) {
							return [publicKeyBytes, publicKeyAlgorithm, err]
						}
						publicKeyAlgorithm.Parameters.FullBytes = paramBytes
					}
				}
				break
			default:
				{
					let pub: any = __goscriptTypeSwitchValue
					return [null, new pkix2.AlgorithmIdentifier(undefined, true), fmt.Errorf("x509: unsupported public key type: %T", pub)]
				}
				break
		}
	}

	return [publicKeyBytes, (publicKeyAlgorithm).clone(), null]
}

export async function MarshalPKIXPublicKey(pub: any): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let publicKeyBytes: $.Slice<number> = null! as $.Slice<number>
	let publicKeyAlgorithm: pkix2.AlgorithmIdentifier = new pkix2.AlgorithmIdentifier(undefined, true)
	let err: $.GoError = null! as $.GoError

	{
		let __goscriptTuple8: any = await marshalPublicKey(pub)
		publicKeyBytes = __goscriptTuple8[0]
		publicKeyAlgorithm = $.assignStruct(publicKeyAlgorithm, __goscriptTuple8[1])
		err = __goscriptTuple8[2]
		if (err != null) {
			return [null, err]
		}
	}

	let __goscriptShadow2 = new pkixPublicKey({Algo: publicKeyAlgorithm, BitString: new asn1.BitString({Bytes: publicKeyBytes, BitLength: 8 * $.sliceLen(publicKeyBytes)}, true)}, true)

	let __goscriptTuple9: any = await asn1.Marshal($.interfaceValue((__goscriptShadow2).clone(), "x509.pkixPublicKey", "x509.pkixPublicKey"))
	let ret: $.Slice<number> = __goscriptTuple9[0]
	return [ret, null]
}

export function SignatureAlgorithm_isRSAPSS(algo: SignatureAlgorithm): boolean {
	for (let __goscriptRangeTarget0 = __goscript_get_signatureAlgorithmDetails(), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let details = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as {"algo": SignatureAlgorithm, "name": string, "oid": asn1.ObjectIdentifier, "params": asn1.RawValue, "pubKeyAlgo": PublicKeyAlgorithm, "hash": crypto.Hash, "isRSAPSS": boolean})))
		if (details.algo == algo) {
			return details.isRSAPSS
		}
	}
	return false
}

export function SignatureAlgorithm_hashFunc(algo: SignatureAlgorithm): crypto.Hash {
	for (let __goscriptRangeTarget1 = __goscript_get_signatureAlgorithmDetails(), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let details = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as {"algo": SignatureAlgorithm, "name": string, "oid": asn1.ObjectIdentifier, "params": asn1.RawValue, "pubKeyAlgo": PublicKeyAlgorithm, "hash": crypto.Hash, "isRSAPSS": boolean})))
		if (details.algo == algo) {
			return details.hash
		}
	}
	return 0
}

export function SignatureAlgorithm_String(algo: SignatureAlgorithm): string {
	for (let __goscriptRangeTarget2 = __goscript_get_signatureAlgorithmDetails(), __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let details = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as {"algo": SignatureAlgorithm, "name": string, "oid": asn1.ObjectIdentifier, "params": asn1.RawValue, "pubKeyAlgo": PublicKeyAlgorithm, "hash": crypto.Hash, "isRSAPSS": boolean})))
		if (details.algo == algo) {
			return details.name
		}
	}
	return strconv.Itoa($.int(algo))
}

export let publicKeyAlgoName: string[] = $.arrayValue(["", "RSA", "DSA", "ECDSA", "Ed25519", "ML-DSA"])

export function __goscript_set_publicKeyAlgoName(__goscriptValue: string[]): void {
	publicKeyAlgoName = __goscriptValue
}

export function PublicKeyAlgorithm_String(algo: PublicKeyAlgorithm): string {
	if ((0 < algo) && ($.int(algo) < 6)) {
		return $.arrayIndex(publicKeyAlgoName, algo)
	}
	return strconv.Itoa($.int(algo))
}

export let oidSignatureMD5WithRSA: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 2, 840, 113549, 1, 1, 4]) as asn1.ObjectIdentifier)

export function __goscript_set_oidSignatureMD5WithRSA(__goscriptValue: asn1.ObjectIdentifier): void {
	oidSignatureMD5WithRSA = __goscriptValue
}

export let oidSignatureSHA1WithRSA: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 2, 840, 113549, 1, 1, 5]) as asn1.ObjectIdentifier)

export function __goscript_set_oidSignatureSHA1WithRSA(__goscriptValue: asn1.ObjectIdentifier): void {
	oidSignatureSHA1WithRSA = __goscriptValue
}

export let oidSignatureSHA256WithRSA: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 2, 840, 113549, 1, 1, 11]) as asn1.ObjectIdentifier)

export function __goscript_set_oidSignatureSHA256WithRSA(__goscriptValue: asn1.ObjectIdentifier): void {
	oidSignatureSHA256WithRSA = __goscriptValue
}

export let oidSignatureSHA384WithRSA: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 2, 840, 113549, 1, 1, 12]) as asn1.ObjectIdentifier)

export function __goscript_set_oidSignatureSHA384WithRSA(__goscriptValue: asn1.ObjectIdentifier): void {
	oidSignatureSHA384WithRSA = __goscriptValue
}

export let oidSignatureSHA512WithRSA: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 2, 840, 113549, 1, 1, 13]) as asn1.ObjectIdentifier)

export function __goscript_set_oidSignatureSHA512WithRSA(__goscriptValue: asn1.ObjectIdentifier): void {
	oidSignatureSHA512WithRSA = __goscriptValue
}

export let oidSignatureRSAPSS: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 2, 840, 113549, 1, 1, 10]) as asn1.ObjectIdentifier)

export function __goscript_set_oidSignatureRSAPSS(__goscriptValue: asn1.ObjectIdentifier): void {
	oidSignatureRSAPSS = __goscriptValue
}

export let oidSignatureDSAWithSHA1: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 2, 840, 10040, 4, 3]) as asn1.ObjectIdentifier)

export function __goscript_set_oidSignatureDSAWithSHA1(__goscriptValue: asn1.ObjectIdentifier): void {
	oidSignatureDSAWithSHA1 = __goscriptValue
}

export let oidSignatureDSAWithSHA256: asn1.ObjectIdentifier = ($.arrayToSlice<number>([2, 16, 840, 1, 101, 3, 4, 3, 2]) as asn1.ObjectIdentifier)

export function __goscript_set_oidSignatureDSAWithSHA256(__goscriptValue: asn1.ObjectIdentifier): void {
	oidSignatureDSAWithSHA256 = __goscriptValue
}

export let oidSignatureECDSAWithSHA1: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 2, 840, 10045, 4, 1]) as asn1.ObjectIdentifier)

export function __goscript_set_oidSignatureECDSAWithSHA1(__goscriptValue: asn1.ObjectIdentifier): void {
	oidSignatureECDSAWithSHA1 = __goscriptValue
}

export let oidSignatureECDSAWithSHA256: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 2, 840, 10045, 4, 3, 2]) as asn1.ObjectIdentifier)

export function __goscript_set_oidSignatureECDSAWithSHA256(__goscriptValue: asn1.ObjectIdentifier): void {
	oidSignatureECDSAWithSHA256 = __goscriptValue
}

export let oidSignatureECDSAWithSHA384: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 2, 840, 10045, 4, 3, 3]) as asn1.ObjectIdentifier)

export function __goscript_set_oidSignatureECDSAWithSHA384(__goscriptValue: asn1.ObjectIdentifier): void {
	oidSignatureECDSAWithSHA384 = __goscriptValue
}

export let oidSignatureECDSAWithSHA512: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 2, 840, 10045, 4, 3, 4]) as asn1.ObjectIdentifier)

export function __goscript_set_oidSignatureECDSAWithSHA512(__goscriptValue: asn1.ObjectIdentifier): void {
	oidSignatureECDSAWithSHA512 = __goscriptValue
}

export let oidSignatureEd25519: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 101, 112]) as asn1.ObjectIdentifier)

export function __goscript_set_oidSignatureEd25519(__goscriptValue: asn1.ObjectIdentifier): void {
	oidSignatureEd25519 = __goscriptValue
}

export let oidSHA256: asn1.ObjectIdentifier = ($.arrayToSlice<number>([2, 16, 840, 1, 101, 3, 4, 2, 1]) as asn1.ObjectIdentifier)

export function __goscript_set_oidSHA256(__goscriptValue: asn1.ObjectIdentifier): void {
	oidSHA256 = __goscriptValue
}

export let oidSHA384: asn1.ObjectIdentifier = ($.arrayToSlice<number>([2, 16, 840, 1, 101, 3, 4, 2, 2]) as asn1.ObjectIdentifier)

export function __goscript_set_oidSHA384(__goscriptValue: asn1.ObjectIdentifier): void {
	oidSHA384 = __goscriptValue
}

export let oidSHA512: asn1.ObjectIdentifier = ($.arrayToSlice<number>([2, 16, 840, 1, 101, 3, 4, 2, 3]) as asn1.ObjectIdentifier)

export function __goscript_set_oidSHA512(__goscriptValue: asn1.ObjectIdentifier): void {
	oidSHA512 = __goscriptValue
}

export let oidMGF1: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 2, 840, 113549, 1, 1, 8]) as asn1.ObjectIdentifier)

export function __goscript_set_oidMGF1(__goscriptValue: asn1.ObjectIdentifier): void {
	oidMGF1 = __goscriptValue
}

export let oidISOSignatureSHA1WithRSA: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 14, 3, 2, 29]) as asn1.ObjectIdentifier)

export function __goscript_set_oidISOSignatureSHA1WithRSA(__goscriptValue: asn1.ObjectIdentifier): void {
	oidISOSignatureSHA1WithRSA = __goscriptValue
}

export var signatureAlgorithmDetails: $.Slice<{"algo": SignatureAlgorithm, "name": string, "oid": asn1.ObjectIdentifier, "params": asn1.RawValue, "pubKeyAlgo": PublicKeyAlgorithm, "hash": crypto.Hash, "isRSAPSS": boolean}>

export function __goscript_init_signatureAlgorithmDetails(): void {
	if (((signatureAlgorithmDetails) as any) === undefined) {
		signatureAlgorithmDetails = $.arrayToSlice<{"algo": SignatureAlgorithm, "name": string, "oid": asn1.ObjectIdentifier, "params": asn1.RawValue, "pubKeyAlgo": PublicKeyAlgorithm, "hash": crypto.Hash, "isRSAPSS": boolean}>([$.anonymousStructValue({algo: 2, name: "MD5-RSA", oid: (oidSignatureMD5WithRSA as asn1.ObjectIdentifier), params: ($.pointerValue<asn1.RawValue>(asn1.__goscript_get_NullRawValue())).clone(), pubKeyAlgo: 1, hash: 2, isRSAPSS: false}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("algo", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [2], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("params", "asn1.RawValue", [3], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("pubKeyAlgo", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [4], 120, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [5], 128, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("isRSAPSS", /* @__PURE__ */ $.basicType("bool"), [6], 136, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({algo: 3, name: "SHA1-RSA", oid: (oidSignatureSHA1WithRSA as asn1.ObjectIdentifier), params: ($.pointerValue<asn1.RawValue>(asn1.__goscript_get_NullRawValue())).clone(), pubKeyAlgo: 1, hash: 3, isRSAPSS: false}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("algo", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [2], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("params", "asn1.RawValue", [3], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("pubKeyAlgo", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [4], 120, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [5], 128, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("isRSAPSS", /* @__PURE__ */ $.basicType("bool"), [6], 136, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({algo: 3, name: "SHA1-RSA", oid: (oidISOSignatureSHA1WithRSA as asn1.ObjectIdentifier), params: ($.pointerValue<asn1.RawValue>(asn1.__goscript_get_NullRawValue())).clone(), pubKeyAlgo: 1, hash: 3, isRSAPSS: false}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("algo", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [2], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("params", "asn1.RawValue", [3], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("pubKeyAlgo", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [4], 120, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [5], 128, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("isRSAPSS", /* @__PURE__ */ $.basicType("bool"), [6], 136, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({algo: 4, name: "SHA256-RSA", oid: (oidSignatureSHA256WithRSA as asn1.ObjectIdentifier), params: ($.pointerValue<asn1.RawValue>(asn1.__goscript_get_NullRawValue())).clone(), pubKeyAlgo: 1, hash: 5, isRSAPSS: false}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("algo", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [2], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("params", "asn1.RawValue", [3], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("pubKeyAlgo", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [4], 120, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [5], 128, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("isRSAPSS", /* @__PURE__ */ $.basicType("bool"), [6], 136, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({algo: 5, name: "SHA384-RSA", oid: (oidSignatureSHA384WithRSA as asn1.ObjectIdentifier), params: ($.pointerValue<asn1.RawValue>(asn1.__goscript_get_NullRawValue())).clone(), pubKeyAlgo: 1, hash: 6, isRSAPSS: false}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("algo", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [2], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("params", "asn1.RawValue", [3], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("pubKeyAlgo", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [4], 120, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [5], 128, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("isRSAPSS", /* @__PURE__ */ $.basicType("bool"), [6], 136, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({algo: 6, name: "SHA512-RSA", oid: (oidSignatureSHA512WithRSA as asn1.ObjectIdentifier), params: ($.pointerValue<asn1.RawValue>(asn1.__goscript_get_NullRawValue())).clone(), pubKeyAlgo: 1, hash: 7, isRSAPSS: false}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("algo", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [2], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("params", "asn1.RawValue", [3], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("pubKeyAlgo", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [4], 120, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [5], 128, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("isRSAPSS", /* @__PURE__ */ $.basicType("bool"), [6], 136, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({algo: 13, name: "SHA256-RSAPSS", oid: (oidSignatureRSAPSS as asn1.ObjectIdentifier), params: (pssParametersSHA256).clone(), pubKeyAlgo: 1, hash: 5, isRSAPSS: true}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("algo", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [2], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("params", "asn1.RawValue", [3], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("pubKeyAlgo", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [4], 120, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [5], 128, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("isRSAPSS", /* @__PURE__ */ $.basicType("bool"), [6], 136, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({algo: 14, name: "SHA384-RSAPSS", oid: (oidSignatureRSAPSS as asn1.ObjectIdentifier), params: (pssParametersSHA384).clone(), pubKeyAlgo: 1, hash: 6, isRSAPSS: true}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("algo", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [2], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("params", "asn1.RawValue", [3], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("pubKeyAlgo", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [4], 120, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [5], 128, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("isRSAPSS", /* @__PURE__ */ $.basicType("bool"), [6], 136, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({algo: 15, name: "SHA512-RSAPSS", oid: (oidSignatureRSAPSS as asn1.ObjectIdentifier), params: (pssParametersSHA512).clone(), pubKeyAlgo: 1, hash: 7, isRSAPSS: true}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("algo", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [2], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("params", "asn1.RawValue", [3], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("pubKeyAlgo", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [4], 120, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [5], 128, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("isRSAPSS", /* @__PURE__ */ $.basicType("bool"), [6], 136, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({algo: 7, name: "DSA-SHA1", oid: (oidSignatureDSAWithSHA1 as asn1.ObjectIdentifier), params: (emptyRawValue).clone(), pubKeyAlgo: 2, hash: 3, isRSAPSS: false}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("algo", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [2], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("params", "asn1.RawValue", [3], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("pubKeyAlgo", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [4], 120, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [5], 128, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("isRSAPSS", /* @__PURE__ */ $.basicType("bool"), [6], 136, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({algo: 8, name: "DSA-SHA256", oid: (oidSignatureDSAWithSHA256 as asn1.ObjectIdentifier), params: (emptyRawValue).clone(), pubKeyAlgo: 2, hash: 5, isRSAPSS: false}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("algo", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [2], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("params", "asn1.RawValue", [3], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("pubKeyAlgo", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [4], 120, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [5], 128, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("isRSAPSS", /* @__PURE__ */ $.basicType("bool"), [6], 136, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({algo: 9, name: "ECDSA-SHA1", oid: (oidSignatureECDSAWithSHA1 as asn1.ObjectIdentifier), params: (emptyRawValue).clone(), pubKeyAlgo: 3, hash: 3, isRSAPSS: false}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("algo", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [2], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("params", "asn1.RawValue", [3], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("pubKeyAlgo", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [4], 120, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [5], 128, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("isRSAPSS", /* @__PURE__ */ $.basicType("bool"), [6], 136, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({algo: 10, name: "ECDSA-SHA256", oid: (oidSignatureECDSAWithSHA256 as asn1.ObjectIdentifier), params: (emptyRawValue).clone(), pubKeyAlgo: 3, hash: 5, isRSAPSS: false}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("algo", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [2], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("params", "asn1.RawValue", [3], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("pubKeyAlgo", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [4], 120, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [5], 128, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("isRSAPSS", /* @__PURE__ */ $.basicType("bool"), [6], 136, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({algo: 11, name: "ECDSA-SHA384", oid: (oidSignatureECDSAWithSHA384 as asn1.ObjectIdentifier), params: (emptyRawValue).clone(), pubKeyAlgo: 3, hash: 6, isRSAPSS: false}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("algo", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [2], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("params", "asn1.RawValue", [3], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("pubKeyAlgo", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [4], 120, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [5], 128, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("isRSAPSS", /* @__PURE__ */ $.basicType("bool"), [6], 136, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({algo: 12, name: "ECDSA-SHA512", oid: (oidSignatureECDSAWithSHA512 as asn1.ObjectIdentifier), params: (emptyRawValue).clone(), pubKeyAlgo: 3, hash: 7, isRSAPSS: false}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("algo", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [2], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("params", "asn1.RawValue", [3], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("pubKeyAlgo", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [4], 120, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [5], 128, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("isRSAPSS", /* @__PURE__ */ $.basicType("bool"), [6], 136, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({algo: 16, name: "Ed25519", oid: (oidSignatureEd25519 as asn1.ObjectIdentifier), params: (emptyRawValue).clone(), pubKeyAlgo: 4, hash: 0, isRSAPSS: false}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("algo", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [2], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("params", "asn1.RawValue", [3], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("pubKeyAlgo", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [4], 120, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [5], 128, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("isRSAPSS", /* @__PURE__ */ $.basicType("bool"), [6], 136, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({algo: 17, name: "ML-DSA-44", oid: (oidPublicKeyMLDSA44 as asn1.ObjectIdentifier), params: (emptyRawValue).clone(), pubKeyAlgo: 5, hash: 0, isRSAPSS: false}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("algo", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [2], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("params", "asn1.RawValue", [3], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("pubKeyAlgo", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [4], 120, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [5], 128, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("isRSAPSS", /* @__PURE__ */ $.basicType("bool"), [6], 136, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({algo: 18, name: "ML-DSA-65", oid: (oidPublicKeyMLDSA65 as asn1.ObjectIdentifier), params: (emptyRawValue).clone(), pubKeyAlgo: 5, hash: 0, isRSAPSS: false}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("algo", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [2], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("params", "asn1.RawValue", [3], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("pubKeyAlgo", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [4], 120, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [5], 128, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("isRSAPSS", /* @__PURE__ */ $.basicType("bool"), [6], 136, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({algo: 19, name: "ML-DSA-87", oid: (oidPublicKeyMLDSA87 as asn1.ObjectIdentifier), params: (emptyRawValue).clone(), pubKeyAlgo: 5, hash: 0, isRSAPSS: false}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("algo", /* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [2], 24, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("params", "asn1.RawValue", [3], 48, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("pubKeyAlgo", /* @__PURE__ */ $.basicType("int", "x509.PublicKeyAlgorithm"), [4], 120, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [5], 128, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("isRSAPSS", /* @__PURE__ */ $.basicType("bool"), [6], 136, false, { pkgPath: "crypto/x509" })] })])
	}
}

export function __goscript_get_signatureAlgorithmDetails(): $.Slice<{"algo": SignatureAlgorithm, "name": string, "oid": asn1.ObjectIdentifier, "params": asn1.RawValue, "pubKeyAlgo": PublicKeyAlgorithm, "hash": crypto.Hash, "isRSAPSS": boolean}> {
	if (((signatureAlgorithmDetails) as any) === undefined) {
		__goscript_init_signatureAlgorithmDetails()
	}
	return signatureAlgorithmDetails
}

export function __goscript_set_signatureAlgorithmDetails(__goscriptValue: $.Slice<{"algo": SignatureAlgorithm, "name": string, "oid": asn1.ObjectIdentifier, "params": asn1.RawValue, "pubKeyAlgo": PublicKeyAlgorithm, "hash": crypto.Hash, "isRSAPSS": boolean}>): void {
	signatureAlgorithmDetails = __goscriptValue
}

export let emptyRawValue: asn1.RawValue = new asn1.RawValue(undefined, true)

export function __goscript_set_emptyRawValue(__goscriptValue: asn1.RawValue): void {
	$.assignStruct(emptyRawValue, __goscriptValue)
}

export let pssParametersSHA256: asn1.RawValue = new asn1.RawValue({FullBytes: new Uint8Array([48, 52, 160, 15, 48, 13, 6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 1, 5, 0, 161, 28, 48, 26, 6, 9, 42, 134, 72, 134, 247, 13, 1, 1, 8, 48, 13, 6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 1, 5, 0, 162, 3, 2, 1, 32]) as $.Slice<number>}, true)

export function __goscript_set_pssParametersSHA256(__goscriptValue: asn1.RawValue): void {
	$.assignStruct(pssParametersSHA256, __goscriptValue)
}

export let pssParametersSHA384: asn1.RawValue = new asn1.RawValue({FullBytes: new Uint8Array([48, 52, 160, 15, 48, 13, 6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 2, 5, 0, 161, 28, 48, 26, 6, 9, 42, 134, 72, 134, 247, 13, 1, 1, 8, 48, 13, 6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 2, 5, 0, 162, 3, 2, 1, 48]) as $.Slice<number>}, true)

export function __goscript_set_pssParametersSHA384(__goscriptValue: asn1.RawValue): void {
	$.assignStruct(pssParametersSHA384, __goscriptValue)
}

export let pssParametersSHA512: asn1.RawValue = new asn1.RawValue({FullBytes: new Uint8Array([48, 52, 160, 15, 48, 13, 6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 3, 5, 0, 161, 28, 48, 26, 6, 9, 42, 134, 72, 134, 247, 13, 1, 1, 8, 48, 13, 6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 3, 5, 0, 162, 3, 2, 1, 64]) as $.Slice<number>}, true)

export function __goscript_set_pssParametersSHA512(__goscriptValue: asn1.RawValue): void {
	$.assignStruct(pssParametersSHA512, __goscriptValue)
}

export async function getSignatureAlgorithmFromAI(ai: pkix2.AlgorithmIdentifier): globalThis.Promise<SignatureAlgorithm> {
	if (((asn1.ObjectIdentifier_Equal(ai.Algorithm, (oidSignatureEd25519 as asn1.ObjectIdentifier)) || asn1.ObjectIdentifier_Equal(ai.Algorithm, (oidPublicKeyMLDSA44 as asn1.ObjectIdentifier))) || asn1.ObjectIdentifier_Equal(ai.Algorithm, (oidPublicKeyMLDSA65 as asn1.ObjectIdentifier))) || asn1.ObjectIdentifier_Equal(ai.Algorithm, (oidPublicKeyMLDSA87 as asn1.ObjectIdentifier))) {
		// RFC 8410, Section 3
		// > For all of the OIDs, the parameters MUST be absent.
		// RFC 9881, Section 2
		// > The contents of the parameters component for each algorithm MUST be absent.
		if ($.sliceLen(ai.Parameters.FullBytes) != 0) {
			return 0
		}
	}

	if (!asn1.ObjectIdentifier_Equal(ai.Algorithm, (oidSignatureRSAPSS as asn1.ObjectIdentifier))) {
		for (let __goscriptRangeTarget3 = __goscript_get_signatureAlgorithmDetails(), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let details = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as {"algo": SignatureAlgorithm, "name": string, "oid": asn1.ObjectIdentifier, "params": asn1.RawValue, "pubKeyAlgo": PublicKeyAlgorithm, "hash": crypto.Hash, "isRSAPSS": boolean})))
			if (asn1.ObjectIdentifier_Equal(ai.Algorithm, (details.oid as asn1.ObjectIdentifier))) {
				return details.algo
			}
		}
		return 0
	}

	// RSA PSS is special because it encodes important parameters
	// in the Parameters.

	let params: $.VarRef<pssParameters> = $.varRef(new pssParameters(undefined, true))
	{
		let [, err] = await asn1.Unmarshal(ai.Parameters.FullBytes, $.interfaceValue(params, "*x509.pssParameters", /* @__PURE__ */ $.pointerType("x509.pssParameters")))
		if (err != null) {
			return 0
		}
	}

	let mgf1HashFunc: $.VarRef<pkix2.AlgorithmIdentifier> = $.varRef(new pkix2.AlgorithmIdentifier(undefined, true))
	{
		let [, err] = await asn1.Unmarshal(params.value.MGF.Parameters.FullBytes, $.interfaceValue(mgf1HashFunc, "*pkix.AlgorithmIdentifier", /* @__PURE__ */ $.pointerType("pkix.AlgorithmIdentifier")))
		if (err != null) {
			return 0
		}
	}

	// PSS is greatly overburdened with options. This code forces them into
	// three buckets by requiring that the MGF1 hash function always match the
	// message hash function (as recommended in RFC 3447, Section 8.1), that the
	// salt length matches the hash length, and that the trailer field has the
	// default value.
	if (((((($.sliceLen(params.value.Hash.Parameters.FullBytes) != 0) && !bytes.Equal(params.value.Hash.Parameters.FullBytes, asn1.__goscript_get_NullBytes())) || !asn1.ObjectIdentifier_Equal(params.value.MGF.Algorithm, (oidMGF1 as asn1.ObjectIdentifier))) || !asn1.ObjectIdentifier_Equal(mgf1HashFunc.value.Algorithm, (params.value.Hash.Algorithm as asn1.ObjectIdentifier))) || (($.sliceLen(mgf1HashFunc.value.Parameters.FullBytes) != 0) && !bytes.Equal(mgf1HashFunc.value.Parameters.FullBytes, asn1.__goscript_get_NullBytes()))) || (params.value.TrailerField != 1)) {
		return 0
	}

	switch ((true as boolean)) {
		case asn1.ObjectIdentifier_Equal(params.value.Hash.Algorithm, (oidSHA256 as asn1.ObjectIdentifier)) && (params.value.SaltLength == 32):
		{
			return 13
			break
		}
		case asn1.ObjectIdentifier_Equal(params.value.Hash.Algorithm, (oidSHA384 as asn1.ObjectIdentifier)) && (params.value.SaltLength == 48):
		{
			return 14
			break
		}
		case asn1.ObjectIdentifier_Equal(params.value.Hash.Algorithm, (oidSHA512 as asn1.ObjectIdentifier)) && (params.value.SaltLength == 64):
		{
			return 15
			break
		}
	}

	return 0
}

export let oidPublicKeyRSA: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 2, 840, 113549, 1, 1, 1]) as asn1.ObjectIdentifier)

export function __goscript_set_oidPublicKeyRSA(__goscriptValue: asn1.ObjectIdentifier): void {
	oidPublicKeyRSA = __goscriptValue
}

export let oidPublicKeyDSA: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 2, 840, 10040, 4, 1]) as asn1.ObjectIdentifier)

export function __goscript_set_oidPublicKeyDSA(__goscriptValue: asn1.ObjectIdentifier): void {
	oidPublicKeyDSA = __goscriptValue
}

export let oidPublicKeyECDSA: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 2, 840, 10045, 2, 1]) as asn1.ObjectIdentifier)

export function __goscript_set_oidPublicKeyECDSA(__goscriptValue: asn1.ObjectIdentifier): void {
	oidPublicKeyECDSA = __goscriptValue
}

export let oidPublicKeyX25519: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 101, 110]) as asn1.ObjectIdentifier)

export function __goscript_set_oidPublicKeyX25519(__goscriptValue: asn1.ObjectIdentifier): void {
	oidPublicKeyX25519 = __goscriptValue
}

export let oidPublicKeyEd25519: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 101, 112]) as asn1.ObjectIdentifier)

export function __goscript_set_oidPublicKeyEd25519(__goscriptValue: asn1.ObjectIdentifier): void {
	oidPublicKeyEd25519 = __goscriptValue
}

export let oidPublicKeyMLDSA44: asn1.ObjectIdentifier = ($.arrayToSlice<number>([2, 16, 840, 1, 101, 3, 4, 3, 17]) as asn1.ObjectIdentifier)

export function __goscript_set_oidPublicKeyMLDSA44(__goscriptValue: asn1.ObjectIdentifier): void {
	oidPublicKeyMLDSA44 = __goscriptValue
}

export let oidPublicKeyMLDSA65: asn1.ObjectIdentifier = ($.arrayToSlice<number>([2, 16, 840, 1, 101, 3, 4, 3, 18]) as asn1.ObjectIdentifier)

export function __goscript_set_oidPublicKeyMLDSA65(__goscriptValue: asn1.ObjectIdentifier): void {
	oidPublicKeyMLDSA65 = __goscriptValue
}

export let oidPublicKeyMLDSA87: asn1.ObjectIdentifier = ($.arrayToSlice<number>([2, 16, 840, 1, 101, 3, 4, 3, 19]) as asn1.ObjectIdentifier)

export function __goscript_set_oidPublicKeyMLDSA87(__goscriptValue: asn1.ObjectIdentifier): void {
	oidPublicKeyMLDSA87 = __goscriptValue
}

export function getPublicKeyAlgorithmFromOID(oid: asn1.ObjectIdentifier): PublicKeyAlgorithm {
	switch ((true as boolean)) {
		case asn1.ObjectIdentifier_Equal(oid, (oidPublicKeyRSA as asn1.ObjectIdentifier)):
		{
			return 1
			break
		}
		case asn1.ObjectIdentifier_Equal(oid, (oidPublicKeyDSA as asn1.ObjectIdentifier)):
		{
			return 2
			break
		}
		case asn1.ObjectIdentifier_Equal(oid, (oidPublicKeyECDSA as asn1.ObjectIdentifier)):
		{
			return 3
			break
		}
		case asn1.ObjectIdentifier_Equal(oid, (oidPublicKeyEd25519 as asn1.ObjectIdentifier)):
		{
			return 4
			break
		}
		case asn1.ObjectIdentifier_Equal(oid, (oidPublicKeyMLDSA44 as asn1.ObjectIdentifier)):
		case asn1.ObjectIdentifier_Equal(oid, (oidPublicKeyMLDSA65 as asn1.ObjectIdentifier)):
		case asn1.ObjectIdentifier_Equal(oid, (oidPublicKeyMLDSA87 as asn1.ObjectIdentifier)):
		{
			if ($.stringEqual(fips140.Version(), "v1.0.0")) {
				return 0
			}
			return 5
			break
		}
	}
	return 0
}

export let oidNamedCurveP224: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 132, 0, 33]) as asn1.ObjectIdentifier)

export function __goscript_set_oidNamedCurveP224(__goscriptValue: asn1.ObjectIdentifier): void {
	oidNamedCurveP224 = __goscriptValue
}

export let oidNamedCurveP256: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 2, 840, 10045, 3, 1, 7]) as asn1.ObjectIdentifier)

export function __goscript_set_oidNamedCurveP256(__goscriptValue: asn1.ObjectIdentifier): void {
	oidNamedCurveP256 = __goscriptValue
}

export let oidNamedCurveP384: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 132, 0, 34]) as asn1.ObjectIdentifier)

export function __goscript_set_oidNamedCurveP384(__goscriptValue: asn1.ObjectIdentifier): void {
	oidNamedCurveP384 = __goscriptValue
}

export let oidNamedCurveP521: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 132, 0, 35]) as asn1.ObjectIdentifier)

export function __goscript_set_oidNamedCurveP521(__goscriptValue: asn1.ObjectIdentifier): void {
	oidNamedCurveP521 = __goscriptValue
}

export async function namedCurveFromOID(oid: asn1.ObjectIdentifier): globalThis.Promise<elliptic.Curve | null> {
	switch ((true as boolean)) {
		case asn1.ObjectIdentifier_Equal(oid, (oidNamedCurveP224 as asn1.ObjectIdentifier)):
		{
			return elliptic.P224()
			break
		}
		case asn1.ObjectIdentifier_Equal(oid, (oidNamedCurveP256 as asn1.ObjectIdentifier)):
		{
			return elliptic.P256()
			break
		}
		case asn1.ObjectIdentifier_Equal(oid, (oidNamedCurveP384 as asn1.ObjectIdentifier)):
		{
			return elliptic.P384()
			break
		}
		case asn1.ObjectIdentifier_Equal(oid, (oidNamedCurveP521 as asn1.ObjectIdentifier)):
		{
			return elliptic.P521()
			break
		}
	}
	return null
}

export async function oidFromNamedCurve(curve: elliptic.Curve | null): globalThis.Promise<[asn1.ObjectIdentifier, boolean]> {
	{
		let __goscriptSwitch0 = curve
		switch ((true as boolean)) {
			case $.comparableEqual(__goscriptSwitch0, await elliptic.P224()):
			{
				return [(oidNamedCurveP224 as asn1.ObjectIdentifier), true]
				break
			}
			case $.comparableEqual(__goscriptSwitch0, await elliptic.P256()):
			{
				return [(oidNamedCurveP256 as asn1.ObjectIdentifier), true]
				break
			}
			case $.comparableEqual(__goscriptSwitch0, await elliptic.P384()):
			{
				return [(oidNamedCurveP384 as asn1.ObjectIdentifier), true]
				break
			}
			case $.comparableEqual(__goscriptSwitch0, await elliptic.P521()):
			{
				return [(oidNamedCurveP521 as asn1.ObjectIdentifier), true]
				break
			}
		}
	}

	return [(null as asn1.ObjectIdentifier), false]
}

export function oidFromECDHCurve(curve: ecdh.Curve | null): [asn1.ObjectIdentifier, boolean] {
	{
		let __goscriptSwitch1 = curve
		switch ((true as boolean)) {
			case $.comparableEqual(__goscriptSwitch1, ecdh.X25519()):
			{
				return [(oidPublicKeyX25519 as asn1.ObjectIdentifier), true]
				break
			}
			case $.comparableEqual(__goscriptSwitch1, ecdh.P256()):
			{
				return [(oidNamedCurveP256 as asn1.ObjectIdentifier), true]
				break
			}
			case $.comparableEqual(__goscriptSwitch1, ecdh.P384()):
			{
				return [(oidNamedCurveP384 as asn1.ObjectIdentifier), true]
				break
			}
			case $.comparableEqual(__goscriptSwitch1, ecdh.P521()):
			{
				return [(oidNamedCurveP521 as asn1.ObjectIdentifier), true]
				break
			}
		}
	}

	return [(null as asn1.ObjectIdentifier), false]
}

export function mldsaParametersFromOID(oid: asn1.ObjectIdentifier): [mldsa.Parameters, boolean] {
	switch ((true as boolean)) {
		case asn1.ObjectIdentifier_Equal(oid, (oidPublicKeyMLDSA44 as asn1.ObjectIdentifier)):
		{
			return [mldsa.MLDSA44(), true]
			break
		}
		case asn1.ObjectIdentifier_Equal(oid, (oidPublicKeyMLDSA65 as asn1.ObjectIdentifier)):
		{
			return [mldsa.MLDSA65(), true]
			break
		}
		case asn1.ObjectIdentifier_Equal(oid, (oidPublicKeyMLDSA87 as asn1.ObjectIdentifier)):
		{
			return [mldsa.MLDSA87(), true]
			break
		}
	}
	return [new mldsa.Parameters(undefined, true), false]
}

export function oidFromMLDSAParameters(params: mldsa.Parameters): [asn1.ObjectIdentifier, boolean] {
	switch ((true as boolean)) {
		case $.structEqual(params, mldsa.MLDSA44()):
		{
			return [(oidPublicKeyMLDSA44 as asn1.ObjectIdentifier), true]
			break
		}
		case $.structEqual(params, mldsa.MLDSA65()):
		{
			return [(oidPublicKeyMLDSA65 as asn1.ObjectIdentifier), true]
			break
		}
		case $.structEqual(params, mldsa.MLDSA87()):
		{
			return [(oidPublicKeyMLDSA87 as asn1.ObjectIdentifier), true]
			break
		}
	}
	return [(null as asn1.ObjectIdentifier), false]
}

export let oidExtKeyUsageAny: asn1.ObjectIdentifier = ($.arrayToSlice<number>([2, 5, 29, 37, 0]) as asn1.ObjectIdentifier)

export function __goscript_set_oidExtKeyUsageAny(__goscriptValue: asn1.ObjectIdentifier): void {
	oidExtKeyUsageAny = __goscriptValue
}

export let oidExtKeyUsageServerAuth: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 6, 1, 5, 5, 7, 3, 1]) as asn1.ObjectIdentifier)

export function __goscript_set_oidExtKeyUsageServerAuth(__goscriptValue: asn1.ObjectIdentifier): void {
	oidExtKeyUsageServerAuth = __goscriptValue
}

export let oidExtKeyUsageClientAuth: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 6, 1, 5, 5, 7, 3, 2]) as asn1.ObjectIdentifier)

export function __goscript_set_oidExtKeyUsageClientAuth(__goscriptValue: asn1.ObjectIdentifier): void {
	oidExtKeyUsageClientAuth = __goscriptValue
}

export let oidExtKeyUsageCodeSigning: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 6, 1, 5, 5, 7, 3, 3]) as asn1.ObjectIdentifier)

export function __goscript_set_oidExtKeyUsageCodeSigning(__goscriptValue: asn1.ObjectIdentifier): void {
	oidExtKeyUsageCodeSigning = __goscriptValue
}

export let oidExtKeyUsageEmailProtection: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 6, 1, 5, 5, 7, 3, 4]) as asn1.ObjectIdentifier)

export function __goscript_set_oidExtKeyUsageEmailProtection(__goscriptValue: asn1.ObjectIdentifier): void {
	oidExtKeyUsageEmailProtection = __goscriptValue
}

export let oidExtKeyUsageIPSECEndSystem: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 6, 1, 5, 5, 7, 3, 5]) as asn1.ObjectIdentifier)

export function __goscript_set_oidExtKeyUsageIPSECEndSystem(__goscriptValue: asn1.ObjectIdentifier): void {
	oidExtKeyUsageIPSECEndSystem = __goscriptValue
}

export let oidExtKeyUsageIPSECTunnel: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 6, 1, 5, 5, 7, 3, 6]) as asn1.ObjectIdentifier)

export function __goscript_set_oidExtKeyUsageIPSECTunnel(__goscriptValue: asn1.ObjectIdentifier): void {
	oidExtKeyUsageIPSECTunnel = __goscriptValue
}

export let oidExtKeyUsageIPSECUser: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 6, 1, 5, 5, 7, 3, 7]) as asn1.ObjectIdentifier)

export function __goscript_set_oidExtKeyUsageIPSECUser(__goscriptValue: asn1.ObjectIdentifier): void {
	oidExtKeyUsageIPSECUser = __goscriptValue
}

export let oidExtKeyUsageTimeStamping: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 6, 1, 5, 5, 7, 3, 8]) as asn1.ObjectIdentifier)

export function __goscript_set_oidExtKeyUsageTimeStamping(__goscriptValue: asn1.ObjectIdentifier): void {
	oidExtKeyUsageTimeStamping = __goscriptValue
}

export let oidExtKeyUsageOCSPSigning: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 6, 1, 5, 5, 7, 3, 9]) as asn1.ObjectIdentifier)

export function __goscript_set_oidExtKeyUsageOCSPSigning(__goscriptValue: asn1.ObjectIdentifier): void {
	oidExtKeyUsageOCSPSigning = __goscriptValue
}

export let oidExtKeyUsageMicrosoftServerGatedCrypto: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 6, 1, 4, 1, 311, 10, 3, 3]) as asn1.ObjectIdentifier)

export function __goscript_set_oidExtKeyUsageMicrosoftServerGatedCrypto(__goscriptValue: asn1.ObjectIdentifier): void {
	oidExtKeyUsageMicrosoftServerGatedCrypto = __goscriptValue
}

export let oidExtKeyUsageNetscapeServerGatedCrypto: asn1.ObjectIdentifier = ($.arrayToSlice<number>([2, 16, 840, 1, 113730, 4, 1]) as asn1.ObjectIdentifier)

export function __goscript_set_oidExtKeyUsageNetscapeServerGatedCrypto(__goscriptValue: asn1.ObjectIdentifier): void {
	oidExtKeyUsageNetscapeServerGatedCrypto = __goscriptValue
}

export let oidExtKeyUsageMicrosoftCommercialCodeSigning: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 6, 1, 4, 1, 311, 2, 1, 22]) as asn1.ObjectIdentifier)

export function __goscript_set_oidExtKeyUsageMicrosoftCommercialCodeSigning(__goscriptValue: asn1.ObjectIdentifier): void {
	oidExtKeyUsageMicrosoftCommercialCodeSigning = __goscriptValue
}

export let oidExtKeyUsageMicrosoftKernelCodeSigning: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 6, 1, 4, 1, 311, 61, 1, 1]) as asn1.ObjectIdentifier)

export function __goscript_set_oidExtKeyUsageMicrosoftKernelCodeSigning(__goscriptValue: asn1.ObjectIdentifier): void {
	oidExtKeyUsageMicrosoftKernelCodeSigning = __goscriptValue
}

export let extKeyUsageOIDs: $.Slice<{"extKeyUsage": ExtKeyUsage, "oid": asn1.ObjectIdentifier}> = $.arrayToSlice<{"extKeyUsage": ExtKeyUsage, "oid": asn1.ObjectIdentifier}>([$.anonymousStructValue({extKeyUsage: 0, oid: (oidExtKeyUsageAny as asn1.ObjectIdentifier)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("extKeyUsage", /* @__PURE__ */ $.basicType("int", "x509.ExtKeyUsage"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [1], 8, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({extKeyUsage: 1, oid: (oidExtKeyUsageServerAuth as asn1.ObjectIdentifier)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("extKeyUsage", /* @__PURE__ */ $.basicType("int", "x509.ExtKeyUsage"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [1], 8, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({extKeyUsage: 2, oid: (oidExtKeyUsageClientAuth as asn1.ObjectIdentifier)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("extKeyUsage", /* @__PURE__ */ $.basicType("int", "x509.ExtKeyUsage"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [1], 8, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({extKeyUsage: 3, oid: (oidExtKeyUsageCodeSigning as asn1.ObjectIdentifier)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("extKeyUsage", /* @__PURE__ */ $.basicType("int", "x509.ExtKeyUsage"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [1], 8, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({extKeyUsage: 4, oid: (oidExtKeyUsageEmailProtection as asn1.ObjectIdentifier)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("extKeyUsage", /* @__PURE__ */ $.basicType("int", "x509.ExtKeyUsage"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [1], 8, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({extKeyUsage: 5, oid: (oidExtKeyUsageIPSECEndSystem as asn1.ObjectIdentifier)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("extKeyUsage", /* @__PURE__ */ $.basicType("int", "x509.ExtKeyUsage"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [1], 8, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({extKeyUsage: 6, oid: (oidExtKeyUsageIPSECTunnel as asn1.ObjectIdentifier)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("extKeyUsage", /* @__PURE__ */ $.basicType("int", "x509.ExtKeyUsage"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [1], 8, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({extKeyUsage: 7, oid: (oidExtKeyUsageIPSECUser as asn1.ObjectIdentifier)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("extKeyUsage", /* @__PURE__ */ $.basicType("int", "x509.ExtKeyUsage"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [1], 8, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({extKeyUsage: 8, oid: (oidExtKeyUsageTimeStamping as asn1.ObjectIdentifier)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("extKeyUsage", /* @__PURE__ */ $.basicType("int", "x509.ExtKeyUsage"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [1], 8, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({extKeyUsage: 9, oid: (oidExtKeyUsageOCSPSigning as asn1.ObjectIdentifier)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("extKeyUsage", /* @__PURE__ */ $.basicType("int", "x509.ExtKeyUsage"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [1], 8, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({extKeyUsage: 10, oid: (oidExtKeyUsageMicrosoftServerGatedCrypto as asn1.ObjectIdentifier)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("extKeyUsage", /* @__PURE__ */ $.basicType("int", "x509.ExtKeyUsage"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [1], 8, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({extKeyUsage: 11, oid: (oidExtKeyUsageNetscapeServerGatedCrypto as asn1.ObjectIdentifier)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("extKeyUsage", /* @__PURE__ */ $.basicType("int", "x509.ExtKeyUsage"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [1], 8, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({extKeyUsage: 12, oid: (oidExtKeyUsageMicrosoftCommercialCodeSigning as asn1.ObjectIdentifier)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("extKeyUsage", /* @__PURE__ */ $.basicType("int", "x509.ExtKeyUsage"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [1], 8, false, { pkgPath: "crypto/x509" })] }), $.anonymousStructValue({extKeyUsage: 13, oid: (oidExtKeyUsageMicrosoftKernelCodeSigning as asn1.ObjectIdentifier)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("extKeyUsage", /* @__PURE__ */ $.basicType("int", "x509.ExtKeyUsage"), [0], 0, false, { pkgPath: "crypto/x509" }), /* @__PURE__ */ $.structField("oid", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [1], 8, false, { pkgPath: "crypto/x509" })] })])

export function __goscript_set_extKeyUsageOIDs(__goscriptValue: $.Slice<{"extKeyUsage": ExtKeyUsage, "oid": asn1.ObjectIdentifier}>): void {
	extKeyUsageOIDs = __goscriptValue
}

export function extKeyUsageFromOID(oid: asn1.ObjectIdentifier): [ExtKeyUsage, boolean] {
	let eku: ExtKeyUsage = 0
	let ok: boolean = false
	for (let __goscriptRangeTarget4 = extKeyUsageOIDs, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let pair = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as {"extKeyUsage": ExtKeyUsage, "oid": asn1.ObjectIdentifier})))
		if (asn1.ObjectIdentifier_Equal(oid, (pair.oid as asn1.ObjectIdentifier))) {
			return [pair.extKeyUsage, true]
		}
	}
	return [eku, ok]
}

export function oidFromExtKeyUsage(eku: ExtKeyUsage): [asn1.ObjectIdentifier, boolean] {
	let oid: asn1.ObjectIdentifier = null! as asn1.ObjectIdentifier
	let ok: boolean = false
	for (let __goscriptRangeTarget5 = extKeyUsageOIDs, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		let pair = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as {"extKeyUsage": ExtKeyUsage, "oid": asn1.ObjectIdentifier})))
		if (eku == pair.extKeyUsage) {
			return [(pair.oid as asn1.ObjectIdentifier), true]
		}
	}
	return [oid, ok]
}

export function ExtKeyUsage_OID(eku: ExtKeyUsage): __goscript_oid.OID {
	let __goscriptTuple10: any = oidFromExtKeyUsage(eku)
	let asn1OID: asn1.ObjectIdentifier = (__goscriptTuple10[0] as asn1.ObjectIdentifier)
	let ok = __goscriptTuple10[1]
	if (!ok) {
		$.panic("x509: internal error: known ExtKeyUsage has no OID")
	}
	let [oid, err] = __goscript_oid.OIDFromASN1OID((asn1OID as asn1.ObjectIdentifier))
	if (err != null) {
		$.panic("x509: internal error: known ExtKeyUsage has invalid OID")
	}
	return (oid).clone()
}

export let ErrUnsupportedAlgorithm: $.GoError = errors.New("x509: cannot verify signature: algorithm unimplemented")

export function __goscript_set_ErrUnsupportedAlgorithm(__goscriptValue: $.GoError): void {
	ErrUnsupportedAlgorithm = __goscriptValue
}

export async function InsecureAlgorithmError_Error(e: InsecureAlgorithmError): globalThis.Promise<string> {
	return fmt.Sprintf("x509: cannot verify signature: insecure algorithm %v", $.namedValueInterfaceValue<any>($.int(e), "x509.SignatureAlgorithm", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))
}

export function signaturePublicKeyAlgoMismatchError(expectedPubKeyAlgo: PublicKeyAlgorithm, pubKey: any): $.GoError {
	return fmt.Errorf("x509: signature algorithm specifies an %s public key, but have public key of type %T", PublicKeyAlgorithm_String(expectedPubKeyAlgo), pubKey)
}

export function signatureMLDSAParametersMismatchError(expectedSigAlgo: SignatureAlgorithm, pubKey: mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null): $.GoError {
	return fmt.Errorf("x509: signature algorithm specifies an ML-DSA public key with %s parameters, but have a public key with %s parameters", $.namedValueInterfaceValue<any>(expectedSigAlgo, "x509.SignatureAlgorithm", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), $.interfaceValue((pubKey !== null && (pubKey as any).__isVarRef !== true && (pubKey as any).__goValue === undefined ? ((pubKey as any) as mldsa.PublicKey).Parameters() : mldsa.PublicKey.prototype.Parameters.call(pubKey)), "mldsa.Parameters", "mldsa.Parameters"))
}

export async function checkSignature(algo: SignatureAlgorithm, signed: $.Slice<number>, signature: $.Slice<number>, publicKey: crypto.PublicKey | null, allowSHA1: boolean): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	let hashType: crypto.Hash = 0
	let pubKeyAlgo: PublicKeyAlgorithm = 0

	for (let __goscriptRangeTarget13 = __goscript_get_signatureAlgorithmDetails(), __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
		let details = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as {"algo": SignatureAlgorithm, "name": string, "oid": asn1.ObjectIdentifier, "params": asn1.RawValue, "pubKeyAlgo": PublicKeyAlgorithm, "hash": crypto.Hash, "isRSAPSS": boolean})))
		if (details.algo == algo) {
			hashType = details.hash
			pubKeyAlgo = details.pubKeyAlgo
			break
		}
	}

	switch (hashType) {
		case 0:
		{
			if ((pubKeyAlgo != 4) && (pubKeyAlgo != 5)) {
				return ErrUnsupportedAlgorithm
			}
			break
		}
		case crypto.MD5:
		{
			return $.namedValueInterfaceValue<$.GoError>($.int(algo), "x509.InsecureAlgorithmError", {"Error": InsecureAlgorithmError_Error}, /* @__PURE__ */ $.basicType("int", "x509.InsecureAlgorithmError"))
			break
		}
		case crypto.SHA1:
		{
			if (!allowSHA1) {
				return $.namedValueInterfaceValue<$.GoError>($.int(algo), "x509.InsecureAlgorithmError", {"Error": InsecureAlgorithmError_Error}, /* @__PURE__ */ $.basicType("int", "x509.InsecureAlgorithmError"))
			}
		}
		default:
		{
			if (!crypto.Hash_Available(hashType)) {
				return ErrUnsupportedAlgorithm
			}
			let h = await crypto.Hash_New(hashType)
			await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Write(signed)
			signed = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Sum(null)
			break
		}
	}

	{
		const __goscriptTypeSwitchValue = publicKey
		switch (true) {
			case $.typeAssert<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PublicKey")).ok:
				{
					let pub: rsa.PublicKey | $.VarRef<rsa.PublicKey> | null = $.typeAssert<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PublicKey")).value
					if (pubKeyAlgo != 1) {
						return signaturePublicKeyAlgoMismatchError(pubKeyAlgo, $.interfaceValue(pub, "*rsa.PublicKey", /* @__PURE__ */ $.pointerType("rsa.PublicKey")))
					}
					if (SignatureAlgorithm_isRSAPSS(algo)) {
						return rsa.VerifyPSS(pub, hashType, signed, signature, new rsa.PSSOptions({SaltLength: -1}))
					} else {
						return rsa.VerifyPKCS1v15(pub, hashType, signed, signature)
					}
				}
				break
			case $.typeAssert<ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdsa.PublicKey")).ok:
				{
					let pub: ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null = $.typeAssert<ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdsa.PublicKey")).value
					if (pubKeyAlgo != 3) {
						return signaturePublicKeyAlgoMismatchError(pubKeyAlgo, $.interfaceValue(pub, "*ecdsa.PublicKey", /* @__PURE__ */ $.pointerType("ecdsa.PublicKey")))
					}
					if (!await ecdsa.VerifyASN1(pub, signed, signature)) {
						return errors.New("x509: ECDSA verification failure")
					}
					return err
				}
				break
			case $.typeAssert<ed25519.PublicKey>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PublicKey")).ok:
				{
					let pub: ed25519.PublicKey = $.typeAssert<ed25519.PublicKey>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PublicKey")).value
					if (pubKeyAlgo != 4) {
						return signaturePublicKeyAlgoMismatchError(pubKeyAlgo, $.namedValueInterfaceValue<any>(pub, "ed25519.PublicKey", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8()))
					}
					if (!await ed25519.Verify((pub as ed25519.PublicKey), signed, signature)) {
						return errors.New("x509: Ed25519 verification failure")
					}
					return err
				}
				break
			case $.typeAssert<mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mldsa.PublicKey")).ok:
				{
					let pub: mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null = $.typeAssert<mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mldsa.PublicKey")).value
					if (pubKeyAlgo != 5) {
						return signaturePublicKeyAlgoMismatchError(pubKeyAlgo, $.interfaceValue(pub, "*mldsa.PublicKey", /* @__PURE__ */ $.pointerType("mldsa.PublicKey")))
					}
					switch ((pub !== null && (pub as any).__isVarRef !== true && (pub as any).__goValue === undefined ? ((pub as any) as mldsa.PublicKey).Parameters() : mldsa.PublicKey.prototype.Parameters.call(pub))) {
						case mldsa.MLDSA44():
						{
							if (algo != 17) {
								return signatureMLDSAParametersMismatchError(algo, pub)
							}
							break
						}
						case mldsa.MLDSA65():
						{
							if (algo != 18) {
								return signatureMLDSAParametersMismatchError(algo, pub)
							}
							break
						}
						case mldsa.MLDSA87():
						{
							if (algo != 19) {
								return signatureMLDSAParametersMismatchError(algo, pub)
							}
							break
						}
						default:
						{
							return fmt.Errorf("x509: unknown ML-DSA parameters: %s", $.interfaceValue((pub !== null && (pub as any).__isVarRef !== true && (pub as any).__goValue === undefined ? ((pub as any) as mldsa.PublicKey).Parameters() : mldsa.PublicKey.prototype.Parameters.call(pub)), "mldsa.Parameters", "mldsa.Parameters"))
							break
						}
					}
					{
						let __goscriptShadow7 = await mldsa.Verify(pub, signed, signature, null)
						if (__goscriptShadow7 != null) {
							return fmt.Errorf("x509: ML-DSA verification failure: %w", (__goscriptShadow7 as any))
						}
					}
					return err
				}
				break
		}
	}
	return ErrUnsupportedAlgorithm
}

export function reverseBitsInAByte(_in: number): number {
	let b1 = $.uint(($.uintShr(_in, 4, 8)) | (((_in << 4) & 0xff)), 8)
	let b2 = $.uint((($.uintShr(b1, 2, 8)) & 0x33) | ((((b1 << 2) & 0xff)) & 0xcc), 8)
	let b3 = $.uint((($.uintShr(b2, 1, 8)) & 0x55) | ((((b2 << 1) & 0xff)) & 0xaa), 8)
	return b3
}

export function asn1BitLength(bitString: $.Slice<number>): number {
	let bitLen = $.sliceLen(bitString) * 8

	for (let __goscriptRangeTarget14 = bitString, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), i = 0; i < __goscriptRangeWindow14.length; i++) {
		let b = ((__goscriptRangeWindow14.backing as any[])[$.windowSlot(__goscriptRangeWindow14, (__goscriptRangeWindow14.length - i) - 1)] as number)

		for (let bit = 0; bit < 8; bit++) {
			if ($.uint((($.uintShr(b, bit, 8)) & 1), 8) == 1) {
				return bitLen
			}
			bitLen--
		}
	}

	return 0
}

export let oidExtensionSubjectKeyId: $.Slice<number> = $.arrayToSlice<number>([2, 5, 29, 14])

export function __goscript_set_oidExtensionSubjectKeyId(__goscriptValue: $.Slice<number>): void {
	oidExtensionSubjectKeyId = __goscriptValue
}

export let oidExtensionKeyUsage: $.Slice<number> = $.arrayToSlice<number>([2, 5, 29, 15])

export function __goscript_set_oidExtensionKeyUsage(__goscriptValue: $.Slice<number>): void {
	oidExtensionKeyUsage = __goscriptValue
}

export let oidExtensionExtendedKeyUsage: $.Slice<number> = $.arrayToSlice<number>([2, 5, 29, 37])

export function __goscript_set_oidExtensionExtendedKeyUsage(__goscriptValue: $.Slice<number>): void {
	oidExtensionExtendedKeyUsage = __goscriptValue
}

export let oidExtensionAuthorityKeyId: $.Slice<number> = $.arrayToSlice<number>([2, 5, 29, 35])

export function __goscript_set_oidExtensionAuthorityKeyId(__goscriptValue: $.Slice<number>): void {
	oidExtensionAuthorityKeyId = __goscriptValue
}

export let oidExtensionBasicConstraints: $.Slice<number> = $.arrayToSlice<number>([2, 5, 29, 19])

export function __goscript_set_oidExtensionBasicConstraints(__goscriptValue: $.Slice<number>): void {
	oidExtensionBasicConstraints = __goscriptValue
}

export let oidExtensionSubjectAltName: $.Slice<number> = $.arrayToSlice<number>([2, 5, 29, 17])

export function __goscript_set_oidExtensionSubjectAltName(__goscriptValue: $.Slice<number>): void {
	oidExtensionSubjectAltName = __goscriptValue
}

export let oidExtensionCertificatePolicies: $.Slice<number> = $.arrayToSlice<number>([2, 5, 29, 32])

export function __goscript_set_oidExtensionCertificatePolicies(__goscriptValue: $.Slice<number>): void {
	oidExtensionCertificatePolicies = __goscriptValue
}

export let oidExtensionNameConstraints: $.Slice<number> = $.arrayToSlice<number>([2, 5, 29, 30])

export function __goscript_set_oidExtensionNameConstraints(__goscriptValue: $.Slice<number>): void {
	oidExtensionNameConstraints = __goscriptValue
}

export let oidExtensionCRLDistributionPoints: $.Slice<number> = $.arrayToSlice<number>([2, 5, 29, 31])

export function __goscript_set_oidExtensionCRLDistributionPoints(__goscriptValue: $.Slice<number>): void {
	oidExtensionCRLDistributionPoints = __goscriptValue
}

export let oidExtensionAuthorityInfoAccess: $.Slice<number> = $.arrayToSlice<number>([1, 3, 6, 1, 5, 5, 7, 1, 1])

export function __goscript_set_oidExtensionAuthorityInfoAccess(__goscriptValue: $.Slice<number>): void {
	oidExtensionAuthorityInfoAccess = __goscriptValue
}

export let oidExtensionCRLNumber: $.Slice<number> = $.arrayToSlice<number>([2, 5, 29, 20])

export function __goscript_set_oidExtensionCRLNumber(__goscriptValue: $.Slice<number>): void {
	oidExtensionCRLNumber = __goscriptValue
}

export let oidExtensionReasonCode: $.Slice<number> = $.arrayToSlice<number>([2, 5, 29, 21])

export function __goscript_set_oidExtensionReasonCode(__goscriptValue: $.Slice<number>): void {
	oidExtensionReasonCode = __goscriptValue
}

export let oidAuthorityInfoAccessOcsp: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 6, 1, 5, 5, 7, 48, 1]) as asn1.ObjectIdentifier)

export function __goscript_set_oidAuthorityInfoAccessOcsp(__goscriptValue: asn1.ObjectIdentifier): void {
	oidAuthorityInfoAccessOcsp = __goscriptValue
}

export let oidAuthorityInfoAccessIssuers: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 3, 6, 1, 5, 5, 7, 48, 2]) as asn1.ObjectIdentifier)

export function __goscript_set_oidAuthorityInfoAccessIssuers(__goscriptValue: asn1.ObjectIdentifier): void {
	oidAuthorityInfoAccessIssuers = __goscriptValue
}

export function oidInExtensions(oid: asn1.ObjectIdentifier, extensions: $.Slice<pkix2.Extension>): boolean {
	for (let __goscriptRangeTarget15 = extensions, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow15.length; __rangeIndex++) {
		let e = ((__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + __rangeIndex] as pkix2.Extension)).clone()
		if (asn1.ObjectIdentifier_Equal(e.Id, (oid as asn1.ObjectIdentifier))) {
			return true
		}
	}
	return false
}

export async function marshalSANs(dnsNames: $.Slice<string>, emailAddresses: $.Slice<string>, ipAddresses: $.Slice<net.IP>, uris: $.Slice<url.URL | $.VarRef<url.URL> | null>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let derBytes: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	let rawValues: $.Slice<asn1.RawValue> = null! as $.Slice<asn1.RawValue>
	for (let __goscriptRangeTarget16 = dnsNames, __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow16.length; __rangeIndex++) {
		let name = (__goscriptRangeWindow16.backing[__goscriptRangeWindow16.offset + __rangeIndex] as string)
		{
			let __goscriptShadow8 = isIA5String(name)
			if (__goscriptShadow8 != null) {
				return [null, __goscriptShadow8]
			}
		}
		rawValues = $.appendOne(rawValues, new asn1.RawValue({Tag: 2, Class: 2, Bytes: $.stringToBytes(name)}, true))
	}
	for (let __goscriptRangeTarget17 = emailAddresses, __goscriptRangeWindow17 = $.sliceRange(__goscriptRangeTarget17), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow17.length; __rangeIndex++) {
		let email = (__goscriptRangeWindow17.backing[__goscriptRangeWindow17.offset + __rangeIndex] as string)
		{
			let __goscriptShadow9 = isIA5String(email)
			if (__goscriptShadow9 != null) {
				return [null, __goscriptShadow9]
			}
		}
		rawValues = $.appendOne(rawValues, new asn1.RawValue({Tag: 1, Class: 2, Bytes: $.stringToBytes(email)}, true))
	}
	for (let __goscriptRangeTarget18 = ipAddresses, __goscriptRangeWindow18 = $.sliceRange(__goscriptRangeTarget18), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow18.length; __rangeIndex++) {
		let rawIP = ((__goscriptRangeWindow18.backing[__goscriptRangeWindow18.offset + __rangeIndex] as net.IP) as net.IP)
		// If possible, we always want to encode IPv4 addresses in 4 bytes.
		let ip: net.IP = (net.IP_To4(rawIP) as net.IP)
		if (ip == null) {
			ip = (rawIP as net.IP)
		}
		rawValues = $.appendOne(rawValues, new asn1.RawValue({Tag: 7, Class: 2, Bytes: ip}, true))
	}
	for (let __goscriptRangeTarget19 = uris, __goscriptRangeWindow19 = $.sliceRange(__goscriptRangeTarget19), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow19.length; __rangeIndex++) {
		let uri = (__goscriptRangeWindow19.backing[__goscriptRangeWindow19.offset + __rangeIndex] as url.URL | $.VarRef<url.URL> | null)
		let uriStr = (uri !== null && (uri as any).__isVarRef !== true && (uri as any).__goValue === undefined ? ((uri as any) as url.URL).String() : url.URL.prototype.String.call(uri))
		{
			let __goscriptShadow10 = isIA5String(uriStr)
			if (__goscriptShadow10 != null) {
				return [null, __goscriptShadow10]
			}
		}
		rawValues = $.appendOne(rawValues, new asn1.RawValue({Tag: 6, Class: 2, Bytes: $.stringToBytes(uriStr)}, true))
	}
	return asn1.Marshal($.interfaceValue(rawValues, "[]asn1.RawValue", /* @__PURE__ */ $.sliceType("asn1.RawValue")))
}

export function isIA5String(s: string): $.GoError {
	for (let __goscriptRunes0 = $.stringRunes(s); __goscriptRunes0.next(); ) {
		const r = __goscriptRunes0.rune
		// Per RFC5280 "IA5String is limited to the set of ASCII characters"
		if (r > 127) {
			return fmt.Errorf("x509: %q cannot be encoded as an IA5String", s)
		}
	}

	return null
}

export let x509usepolicies: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("x509usepolicies")

export function __goscript_set_x509usepolicies(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	x509usepolicies = __goscriptValue
}

export async function buildCertExtensions(template: Certificate | $.VarRef<Certificate> | null, subjectIsEmpty: boolean, authorityKeyId: $.Slice<number>, subjectKeyId: $.Slice<number>): globalThis.Promise<[$.Slice<pkix2.Extension>, $.GoError]> {
	let ret: $.Slice<pkix2.Extension> = null! as $.Slice<pkix2.Extension>
	let err: $.GoError = null! as $.GoError
	const template$: Certificate = template == null ? $.pointerTarget<Certificate>(template) : (template as any).__isVarRef === true ? (template as any).value : (template as any).__goValue === undefined ? (template as any) : $.pointerTarget<Certificate>(template)
	ret = $.makeSlice<pkix2.Extension>(10, undefined, undefined, () => new pkix2.Extension(undefined, true))
	let n = 0

	if (((template$ as Certificate).KeyUsage != 0) && !oidInExtensions((oidExtensionKeyUsage as asn1.ObjectIdentifier), (template$ as Certificate).ExtraExtensions)) {
		let __goscriptTuple19: any = await marshalKeyUsage((template$ as Certificate).KeyUsage)
		$.assignStruct($.sliceElems(ret!)[$.sliceSlot(ret!, n)], __goscriptTuple19[0])
		err = __goscriptTuple19[1]
		if (err != null) {
			return [null, err]
		}
		n++
	}

	if ((($.sliceLen((template$ as Certificate).ExtKeyUsage) > 0) || ($.sliceLen((template$ as Certificate).UnknownExtKeyUsage) > 0)) && !oidInExtensions((oidExtensionExtendedKeyUsage as asn1.ObjectIdentifier), (template$ as Certificate).ExtraExtensions)) {
		let __goscriptTuple20: any = await marshalExtKeyUsage((template$ as Certificate).ExtKeyUsage, (template$ as Certificate).UnknownExtKeyUsage)
		$.assignStruct($.sliceElems(ret!)[$.sliceSlot(ret!, n)], __goscriptTuple20[0])
		err = __goscriptTuple20[1]
		if (err != null) {
			return [null, err]
		}
		n++
	}

	if ((template$ as Certificate).BasicConstraintsValid && !oidInExtensions((oidExtensionBasicConstraints as asn1.ObjectIdentifier), (template$ as Certificate).ExtraExtensions)) {
		let __goscriptTuple21: any = await marshalBasicConstraints((template$ as Certificate).IsCA, (template$ as Certificate).MaxPathLen, (template$ as Certificate).MaxPathLenZero)
		$.assignStruct($.sliceElems(ret!)[$.sliceSlot(ret!, n)], __goscriptTuple21[0])
		err = __goscriptTuple21[1]
		if (err != null) {
			return [null, err]
		}
		n++
	}

	if (($.sliceLen(subjectKeyId) > 0) && !oidInExtensions((oidExtensionSubjectKeyId as asn1.ObjectIdentifier), (template$ as Certificate).ExtraExtensions)) {
		$.arrayIndex(ret!, n).Id = (oidExtensionSubjectKeyId as asn1.ObjectIdentifier)
		let __goscriptTuple22: any = await asn1.Marshal($.interfaceValue(subjectKeyId, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
		$.arrayIndex(ret!, n).Value = __goscriptTuple22[0]
		err = __goscriptTuple22[1]
		if (err != null) {
			return [ret, err]
		}
		n++
	}

	if (($.sliceLen(authorityKeyId) > 0) && !oidInExtensions((oidExtensionAuthorityKeyId as asn1.ObjectIdentifier), (template$ as Certificate).ExtraExtensions)) {
		$.arrayIndex(ret!, n).Id = (oidExtensionAuthorityKeyId as asn1.ObjectIdentifier)
		let __goscriptTuple23: any = await asn1.Marshal($.interfaceValue(new authKeyId({Id: authorityKeyId}, true), "x509.authKeyId", "x509.authKeyId"))
		$.arrayIndex(ret!, n).Value = __goscriptTuple23[0]
		err = __goscriptTuple23[1]
		if (err != null) {
			return [ret, err]
		}
		n++
	}

	if ((($.sliceLen((template$ as Certificate).OCSPServer) > 0) || ($.sliceLen((template$ as Certificate).IssuingCertificateURL) > 0)) && !oidInExtensions((oidExtensionAuthorityInfoAccess as asn1.ObjectIdentifier), (template$ as Certificate).ExtraExtensions)) {
		$.arrayIndex(ret!, n).Id = (oidExtensionAuthorityInfoAccess as asn1.ObjectIdentifier)
		let aiaValues: $.Slice<authorityInfoAccess> = null! as $.Slice<authorityInfoAccess>
		for (let __goscriptRangeTarget20 = (template$ as Certificate).OCSPServer, __goscriptRangeWindow20 = $.sliceRange(__goscriptRangeTarget20), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow20.length; __rangeIndex++) {
			let name = (__goscriptRangeWindow20.backing[__goscriptRangeWindow20.offset + __rangeIndex] as string)
			aiaValues = $.appendOne(aiaValues, new authorityInfoAccess({Method: (oidAuthorityInfoAccessOcsp as asn1.ObjectIdentifier), Location: new asn1.RawValue({Tag: 6, Class: 2, Bytes: $.stringToBytes(name)}, true)}, true))
		}
		for (let __goscriptRangeTarget21 = (template$ as Certificate).IssuingCertificateURL, __goscriptRangeWindow21 = $.sliceRange(__goscriptRangeTarget21), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow21.length; __rangeIndex++) {
			let name = (__goscriptRangeWindow21.backing[__goscriptRangeWindow21.offset + __rangeIndex] as string)
			aiaValues = $.appendOne(aiaValues, new authorityInfoAccess({Method: (oidAuthorityInfoAccessIssuers as asn1.ObjectIdentifier), Location: new asn1.RawValue({Tag: 6, Class: 2, Bytes: $.stringToBytes(name)}, true)}, true))
		}
		let __goscriptTuple24: any = await asn1.Marshal($.interfaceValue(aiaValues, "[]x509.authorityInfoAccess", /* @__PURE__ */ $.sliceType("x509.authorityInfoAccess")))
		$.arrayIndex(ret!, n).Value = __goscriptTuple24[0]
		err = __goscriptTuple24[1]
		if (err != null) {
			return [ret, err]
		}
		n++
	}

	if ((((($.sliceLen((template$ as Certificate).DNSNames) > 0) || ($.sliceLen((template$ as Certificate).EmailAddresses) > 0)) || ($.sliceLen((template$ as Certificate).IPAddresses) > 0)) || ($.sliceLen((template$ as Certificate).URIs) > 0)) && !oidInExtensions((oidExtensionSubjectAltName as asn1.ObjectIdentifier), (template$ as Certificate).ExtraExtensions)) {
		$.arrayIndex(ret!, n).Id = (oidExtensionSubjectAltName as asn1.ObjectIdentifier)
		// From RFC 5280, Section 4.2.1.6:
		// “If the subject field contains an empty sequence ... then
		// subjectAltName extension ... is marked as critical”
		$.arrayIndex(ret!, n).Critical = subjectIsEmpty
		let __goscriptTuple25: any = await marshalSANs((template$ as Certificate).DNSNames, (template$ as Certificate).EmailAddresses, (template$ as Certificate).IPAddresses, (template$ as Certificate).URIs)
		$.arrayIndex(ret!, n).Value = __goscriptTuple25[0]
		err = __goscriptTuple25[1]
		if (err != null) {
			return [ret, err]
		}
		n++
	}

	let usePolicies = !$.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(x509usepolicies)), "0")
	if (((!usePolicies && ($.sliceLen((template$ as Certificate).PolicyIdentifiers) > 0)) || (usePolicies && ($.sliceLen((template$ as Certificate).Policies) > 0))) && !oidInExtensions((oidExtensionCertificatePolicies as asn1.ObjectIdentifier), (template$ as Certificate).ExtraExtensions)) {
		let __goscriptTuple26: any = await marshalCertificatePolicies((template$ as Certificate).Policies, (template$ as Certificate).PolicyIdentifiers)
		$.assignStruct($.sliceElems(ret!)[$.sliceSlot(ret!, n)], __goscriptTuple26[0])
		err = __goscriptTuple26[1]
		if (err != null) {
			return [null, err]
		}
		n++
	}

	if ((((((((($.sliceLen((template$ as Certificate).PermittedDNSDomains) > 0) || ($.sliceLen((template$ as Certificate).ExcludedDNSDomains) > 0)) || ($.sliceLen((template$ as Certificate).PermittedIPRanges) > 0)) || ($.sliceLen((template$ as Certificate).ExcludedIPRanges) > 0)) || ($.sliceLen((template$ as Certificate).PermittedEmailAddresses) > 0)) || ($.sliceLen((template$ as Certificate).ExcludedEmailAddresses) > 0)) || ($.sliceLen((template$ as Certificate).PermittedURIDomains) > 0)) || ($.sliceLen((template$ as Certificate).ExcludedURIDomains) > 0)) && !oidInExtensions((oidExtensionNameConstraints as asn1.ObjectIdentifier), (template$ as Certificate).ExtraExtensions)) {
		$.arrayIndex(ret!, n).Id = (oidExtensionNameConstraints as asn1.ObjectIdentifier)
		$.arrayIndex(ret!, n).Critical = (template$ as Certificate).PermittedDNSDomainsCritical

		let ipAndMask: ((ipNet: net.IPNet | $.VarRef<net.IPNet> | null) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null = $.functionValue((ipNet: net.IPNet | $.VarRef<net.IPNet> | null): [$.Slice<number>, $.GoError] => {
			let maskedIP: net.IP = (net.IP_Mask($.pointerValue<net.IPNet>(ipNet).IP, ($.pointerValue<net.IPNet>(ipNet).Mask as net.IPMask)) as net.IP)
			// This is extremely unlikely to actually happen, but lets save people from doing something they
			// probably shouldn't.
			if (($.sliceLen((maskedIP as net.IP)) == 16) && (net.IP_To4(maskedIP) != null)) {
				return [null, errors.New("x509: IP constraint contained IPv4-mapped IPv6 address with a IPv6 mask")]
			}
			let __goscriptShadow11: $.Slice<number> = $.makeSlice<number>(0, $.sliceLen((maskedIP as net.IP)) + $.sliceLen(($.pointerValue<net.IPNet>(ipNet).Mask as net.IPMask)), "byte")
			__goscriptShadow11 = $.appendSlice(__goscriptShadow11, maskedIP, $.byteSliceHint)
			__goscriptShadow11 = $.appendSlice(__goscriptShadow11, $.pointerValue<net.IPNet>(ipNet).Mask, $.byteSliceHint)
			return [__goscriptShadow11, null]
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("net.IPNet")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))

		let serialiseConstraints: ((dns: $.Slice<string>, ips: $.Slice<net.IPNet | $.VarRef<net.IPNet> | null>, emails: $.Slice<string>, uriDomains: $.Slice<string>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null = $.functionValue(async (dns: $.Slice<string>, ips: $.Slice<net.IPNet | $.VarRef<net.IPNet> | null>, emails: $.Slice<string>, uriDomains: $.Slice<string>): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
			let der: $.Slice<number> = null! as $.Slice<number>
			let err: $.GoError = null! as $.GoError
			let b: $.VarRef<cryptobyte.Builder> = $.varRef(new cryptobyte.Builder(undefined, true))

			for (let __goscriptRangeTarget22 = dns, __goscriptRangeWindow22 = $.sliceRange(__goscriptRangeTarget22), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow22.length; __rangeIndex++) {
				let name = (__goscriptRangeWindow22.backing[__goscriptRangeWindow22.offset + __rangeIndex] as string)
				{
					err = isIA5String(name)
					if (err != null) {
						return [null, err]
					}
				}

				await b.value.AddASN1(48, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
					await cryptobyte.Builder.prototype.AddASN1.call(b, cryptobyte_asn1.Tag_ContextSpecific(2), $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
						void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes($.stringToBytes(name)) : cryptobyte.Builder.prototype.AddBytes.call(b, $.stringToBytes(name)))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}

			for (let __goscriptRangeTarget23 = ips, __goscriptRangeWindow23 = $.sliceRange(__goscriptRangeTarget23), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow23.length; __rangeIndex++) {
				let ipNet = (__goscriptRangeWindow23.backing[__goscriptRangeWindow23.offset + __rangeIndex] as net.IPNet | $.VarRef<net.IPNet> | null)
				let __goscriptTuple27: any = await ipAndMask!(ipNet)
				let encodedIPNet: $.Slice<number> = __goscriptTuple27[0]
				let __goscriptShadow12 = __goscriptTuple27[1]
				if (__goscriptShadow12 != null) {
					return [null, __goscriptShadow12]
				}
				await b.value.AddASN1(48, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
					await cryptobyte.Builder.prototype.AddASN1.call(b, cryptobyte_asn1.Tag_ContextSpecific(7), $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
						void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes(encodedIPNet) : cryptobyte.Builder.prototype.AddBytes.call(b, encodedIPNet))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}

			for (let __goscriptRangeTarget24 = emails, __goscriptRangeWindow24 = $.sliceRange(__goscriptRangeTarget24), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow24.length; __rangeIndex++) {
				let email = (__goscriptRangeWindow24.backing[__goscriptRangeWindow24.offset + __rangeIndex] as string)
				{
					err = isIA5String(email)
					if (err != null) {
						return [null, err]
					}
				}

				await b.value.AddASN1(48, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
					await cryptobyte.Builder.prototype.AddASN1.call(b, cryptobyte_asn1.Tag_ContextSpecific(1), $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
						void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes($.stringToBytes(email)) : cryptobyte.Builder.prototype.AddBytes.call(b, $.stringToBytes(email)))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}

			for (let __goscriptRangeTarget25 = uriDomains, __goscriptRangeWindow25 = $.sliceRange(__goscriptRangeTarget25), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow25.length; __rangeIndex++) {
				let uriDomain = (__goscriptRangeWindow25.backing[__goscriptRangeWindow25.offset + __rangeIndex] as string)
				{
					err = isIA5String(uriDomain)
					if (err != null) {
						return [null, err]
					}
				}

				await b.value.AddASN1(48, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
					await cryptobyte.Builder.prototype.AddASN1.call(b, cryptobyte_asn1.Tag_ContextSpecific(6), $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
						void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes($.stringToBytes(uriDomain)) : cryptobyte.Builder.prototype.AddBytes.call(b, $.stringToBytes(uriDomain)))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}

			return b.value.Bytes()
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("net.IPNet")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))

		let __goscriptTuple28: any = await serialiseConstraints!((template$ as Certificate).PermittedDNSDomains, (template$ as Certificate).PermittedIPRanges, (template$ as Certificate).PermittedEmailAddresses, (template$ as Certificate).PermittedURIDomains)
		let permitted: $.Slice<number> = __goscriptTuple28[0]
		let __goscriptShadow13 = __goscriptTuple28[1]
		if (__goscriptShadow13 != null) {
			return [null, __goscriptShadow13]
		}

		let __goscriptTuple29: any = await serialiseConstraints!((template$ as Certificate).ExcludedDNSDomains, (template$ as Certificate).ExcludedIPRanges, (template$ as Certificate).ExcludedEmailAddresses, (template$ as Certificate).ExcludedURIDomains)
		let excluded: $.Slice<number> = __goscriptTuple29[0]
		__goscriptShadow13 = __goscriptTuple29[1]
		if (__goscriptShadow13 != null) {
			return [null, __goscriptShadow13]
		}

		let b: $.VarRef<cryptobyte.Builder> = $.varRef(new cryptobyte.Builder(undefined, true))
		await b.value.AddASN1(48, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
			if ($.sliceLen(permitted) > 0) {
				await cryptobyte.Builder.prototype.AddASN1.call(b, cryptobyte_asn1.Tag_Constructed(cryptobyte_asn1.Tag_ContextSpecific(0)), $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes(permitted) : cryptobyte.Builder.prototype.AddBytes.call(b, permitted))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}

			if ($.sliceLen(excluded) > 0) {
				await cryptobyte.Builder.prototype.AddASN1.call(b, cryptobyte_asn1.Tag_Constructed(cryptobyte_asn1.Tag_ContextSpecific(1)), $.functionValue((b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).AddBytes(excluded) : cryptobyte.Builder.prototype.AddBytes.call(b, excluded))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))

		let __goscriptTuple30: any = b.value.Bytes()
		$.arrayIndex(ret!, n).Value = __goscriptTuple30[0]
		__goscriptShadow13 = __goscriptTuple30[1]
		if (__goscriptShadow13 != null) {
			return [null, __goscriptShadow13]
		}
		n++
	}

	if (($.sliceLen((template$ as Certificate).CRLDistributionPoints) > 0) && !oidInExtensions((oidExtensionCRLDistributionPoints as asn1.ObjectIdentifier), (template$ as Certificate).ExtraExtensions)) {
		$.arrayIndex(ret!, n).Id = (oidExtensionCRLDistributionPoints as asn1.ObjectIdentifier)

		let crlDp: $.Slice<distributionPoint> = null! as $.Slice<distributionPoint>
		for (let __goscriptRangeTarget26 = (template$ as Certificate).CRLDistributionPoints, __goscriptRangeWindow26 = $.sliceRange(__goscriptRangeTarget26), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow26.length; __rangeIndex++) {
			let name = (__goscriptRangeWindow26.backing[__goscriptRangeWindow26.offset + __rangeIndex] as string)
			let dp = new distributionPoint({DistributionPoint: new distributionPointName({FullName: $.arrayToSlice<asn1.RawValue>([new asn1.RawValue({Tag: 6, Class: 2, Bytes: $.stringToBytes(name)}, true)])}, true)}, true)
			crlDp = $.appendOne(crlDp, (dp).clone())
		}

		let __goscriptTuple31: any = await asn1.Marshal($.interfaceValue(crlDp, "[]x509.distributionPoint", /* @__PURE__ */ $.sliceType("x509.distributionPoint")))
		$.arrayIndex(ret!, n).Value = __goscriptTuple31[0]
		err = __goscriptTuple31[1]
		if (err != null) {
			return [ret, err]
		}
		n++
	}

	// Adding another extension here? Remember to update the maximum number
	// of elements in the make() at the top of the function and the list of
	// template fields used in CreateCertificate documentation.

	return [$.appendSlice($.goSlice(ret, undefined, n), (template$ as Certificate).ExtraExtensions), null]
}

export async function marshalKeyUsage(ku: KeyUsage): globalThis.Promise<[pkix2.Extension, $.GoError]> {
	let ext = new pkix2.Extension({Id: (oidExtensionKeyUsage as asn1.ObjectIdentifier), Critical: true}, true)

	let a: Uint8Array = $.arrayValue(new Uint8Array(2))
	a[0] = reverseBitsInAByte($.uint(ku, 8))
	a[1] = reverseBitsInAByte($.uint(ku >> 8, 8))

	let l = 1
	if ($.arrayIndex(a, 1) != 0) {
		l = 2
	}

	let bitString: $.Slice<number> = $.goSlice(a, undefined, l)
	let err: $.GoError = null! as $.GoError
	let __goscriptTuple32: any = await asn1.Marshal($.interfaceValue((() => { const __goscriptLiteralField8 = asn1BitLength(bitString); return new asn1.BitString({Bytes: bitString, BitLength: __goscriptLiteralField8}, true) })(), "asn1.BitString", "asn1.BitString"))
	ext.Value = __goscriptTuple32[0]
	err = __goscriptTuple32[1]
	return [(ext).clone(), err]
}

export async function marshalExtKeyUsage(extUsages: $.Slice<ExtKeyUsage>, unknownUsages: $.Slice<asn1.ObjectIdentifier>): globalThis.Promise<[pkix2.Extension, $.GoError]> {
	let ext = new pkix2.Extension({Id: (oidExtensionExtendedKeyUsage as asn1.ObjectIdentifier)}, true)

	let oids: $.Slice<asn1.ObjectIdentifier> = $.makeSlice<asn1.ObjectIdentifier>($.sliceLen(extUsages) + $.sliceLen(unknownUsages))
	for (let __goscriptRangeTarget27 = extUsages, __goscriptRangeWindow27 = $.sliceRange(__goscriptRangeTarget27), __goscriptSliceWindow1 = $.sliceRange(oids), i = 0; i < __goscriptRangeWindow27.length; i++) {
		let u = (__goscriptRangeWindow27.backing[__goscriptRangeWindow27.offset + i] as ExtKeyUsage)
		{
			let __goscriptTuple33: any = oidFromExtKeyUsage(u)
			let oid: asn1.ObjectIdentifier = (__goscriptTuple33[0] as asn1.ObjectIdentifier)
			let ok = __goscriptTuple33[1]
			if (ok) {
				;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = (oid as asn1.ObjectIdentifier)
			} else {
				return [(ext).clone(), errors.New("x509: unknown extended key usage")]
			}
		}
	}

	$.copy($.goSlice(oids, $.sliceLen(extUsages), undefined), unknownUsages)

	let err: $.GoError = null! as $.GoError
	let __goscriptTuple34: any = await asn1.Marshal($.interfaceValue(oids, "[]asn1.ObjectIdentifier", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"))))
	ext.Value = __goscriptTuple34[0]
	err = __goscriptTuple34[1]
	return [(ext).clone(), err]
}

export async function marshalBasicConstraints(isCA: boolean, maxPathLen: number, maxPathLenZero: boolean): globalThis.Promise<[pkix2.Extension, $.GoError]> {
	let ext = new pkix2.Extension({Id: (oidExtensionBasicConstraints as asn1.ObjectIdentifier), Critical: true}, true)
	// Leaving MaxPathLen as zero indicates that no maximum path
	// length is desired, unless MaxPathLenZero is set. A value of
	// -1 causes encoding/asn1 to omit the value as desired.
	if ((maxPathLen == 0) && !maxPathLenZero) {
		maxPathLen = -1
	}
	let err: $.GoError = null! as $.GoError
	let __goscriptTuple35: any = await asn1.Marshal($.interfaceValue(new basicConstraints({IsCA: isCA, MaxPathLen: maxPathLen}, true), "x509.basicConstraints", "x509.basicConstraints"))
	ext.Value = __goscriptTuple35[0]
	err = __goscriptTuple35[1]
	return [(ext).clone(), err]
}

export async function marshalCertificatePolicies(policies: $.Slice<__goscript_oid.OID>, policyIdentifiers: $.Slice<asn1.ObjectIdentifier>): globalThis.Promise<[pkix2.Extension, $.GoError]> {
	let ext = new pkix2.Extension({Id: (oidExtensionCertificatePolicies as asn1.ObjectIdentifier)}, true)

	let b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null = cryptobyte.NewBuilder($.makeSlice<number>(0, 128, "byte"))
	await cryptobyte.Builder.prototype.AddASN1.call(b, 48, $.functionValue(async (child: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
		if (!$.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(x509usepolicies)), "0")) {
			godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(x509usepolicies))
			for (let __goscriptRangeTarget28 = policies, __goscriptRangeWindow28 = $.sliceRange(__goscriptRangeTarget28), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow28.length; __rangeIndex++) {
				let v = ((__goscriptRangeWindow28.backing[__goscriptRangeWindow28.offset + __rangeIndex] as __goscript_oid.OID)).clone()
				await cryptobyte.Builder.prototype.AddASN1.call(child, 48, $.functionValue(async (child: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
					await cryptobyte.Builder.prototype.AddASN1.call(child, 6, $.functionValue((child: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
						if ($.sliceLen(v.der) == 0) {
							void (child !== null && (child as any).__isVarRef !== true && (child as any).__goValue === undefined ? ((child as any) as cryptobyte.Builder).SetError(errors.New("invalid policy object identifier")) : cryptobyte.Builder.prototype.SetError.call(child, errors.New("invalid policy object identifier")))
							return
						}
						void (child !== null && (child as any).__isVarRef !== true && (child as any).__goValue === undefined ? ((child as any) as cryptobyte.Builder).AddBytes(v.der) : cryptobyte.Builder.prototype.AddBytes.call(child, v.der))
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}
		} else {
			for (let __goscriptRangeTarget29 = policyIdentifiers, __goscriptRangeWindow29 = $.sliceRange(__goscriptRangeTarget29), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow29.length; __rangeIndex++) {
				let v = ((__goscriptRangeWindow29.backing[__goscriptRangeWindow29.offset + __rangeIndex] as asn1.ObjectIdentifier) as asn1.ObjectIdentifier)
				await cryptobyte.Builder.prototype.AddASN1.call(child, 48, $.functionValue(async (child: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
					await (child !== null && (child as any).__isVarRef !== true && (child as any).__goValue === undefined ? ((child as any) as cryptobyte.Builder).AddASN1ObjectIdentifier((v as asn1.ObjectIdentifier)) : cryptobyte.Builder.prototype.AddASN1ObjectIdentifier.call(child, (v as asn1.ObjectIdentifier)))
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
			}
		}
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))

	let err: $.GoError = null! as $.GoError
	let __goscriptTuple36: any = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).Bytes() : cryptobyte.Builder.prototype.Bytes.call(b))
	ext.Value = __goscriptTuple36[0]
	err = __goscriptTuple36[1]
	return [(ext).clone(), err]
}

export async function buildCSRExtensions(template: CertificateRequest | $.VarRef<CertificateRequest> | null): globalThis.Promise<[$.Slice<pkix2.Extension>, $.GoError]> {
	const template$: CertificateRequest = template == null ? $.pointerTarget<CertificateRequest>(template) : (template as any).__isVarRef === true ? (template as any).value : (template as any).__goValue === undefined ? (template as any) : $.pointerTarget<CertificateRequest>(template)
	let ret: $.Slice<pkix2.Extension> = null! as $.Slice<pkix2.Extension>

	if ((((($.sliceLen((template$ as CertificateRequest).DNSNames) > 0) || ($.sliceLen((template$ as CertificateRequest).EmailAddresses) > 0)) || ($.sliceLen((template$ as CertificateRequest).IPAddresses) > 0)) || ($.sliceLen((template$ as CertificateRequest).URIs) > 0)) && !oidInExtensions((oidExtensionSubjectAltName as asn1.ObjectIdentifier), (template$ as CertificateRequest).ExtraExtensions)) {
		let __goscriptTuple37: any = await marshalSANs((template$ as CertificateRequest).DNSNames, (template$ as CertificateRequest).EmailAddresses, (template$ as CertificateRequest).IPAddresses, (template$ as CertificateRequest).URIs)
		let sanBytes: $.Slice<number> = __goscriptTuple37[0]
		let err = __goscriptTuple37[1]
		if (err != null) {
			return [null, err]
		}

		ret = $.appendOne(ret, new pkix2.Extension({Id: (oidExtensionSubjectAltName as asn1.ObjectIdentifier), Value: sanBytes}, true))
	}

	return [$.appendSlice(ret, (template$ as CertificateRequest).ExtraExtensions), null]
}

export async function subjectBytes(cert: Certificate | $.VarRef<Certificate> | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	const cert$: Certificate = cert == null ? $.pointerTarget<Certificate>(cert) : (cert as any).__isVarRef === true ? (cert as any).value : (cert as any).__goValue === undefined ? (cert as any) : $.pointerTarget<Certificate>(cert)
	if ($.sliceLen((cert$ as Certificate).RawSubject) > 0) {
		return [(cert$ as Certificate).RawSubject, null]
	}

	return asn1.Marshal($.namedValueInterfaceValue<any>($.markAsStructValue($.cloneStructValue((cert$ as Certificate).Subject)).ToRDNSequence(), "pkix.RDNSequence", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic11()))
}

export async function signingParamsForKey(key: crypto.Signer | null, sigAlgo: SignatureAlgorithm): globalThis.Promise<[SignatureAlgorithm, pkix2.AlgorithmIdentifier, $.GoError]> {
	let ai: pkix2.AlgorithmIdentifier = new pkix2.AlgorithmIdentifier(undefined, true)
	let pubType: PublicKeyAlgorithm = 0
	let defaultAlgo: SignatureAlgorithm = 0

	{
		const __goscriptTypeSwitchValue = (__goscriptAwait = (key !== null && (key as any).__isVarRef !== true && (key as any).__goValue === undefined ? (key as Exclude<crypto.Signer, null>) : $.pointerValue<Exclude<crypto.Signer, null>>(key)).Public(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		switch (true) {
			case $.typeAssert<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PublicKey")).ok:
				{
					let pub: rsa.PublicKey | $.VarRef<rsa.PublicKey> | null = $.typeAssert<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PublicKey")).value
					pubType = 1
					defaultAlgo = 4
				}
				break
			case $.typeAssert<ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdsa.PublicKey")).ok:
				{
					let pub: ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null = $.typeAssert<ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdsa.PublicKey")).value
					pubType = 3
					{
						let __goscriptSwitch2 = $.pointerValue<ecdsa.PublicKey>(pub).Curve
						switch ((true as boolean)) {
							case $.comparableEqual(__goscriptSwitch2, await elliptic.P224()):
							case $.comparableEqual(__goscriptSwitch2, await elliptic.P256()):
							{
								defaultAlgo = 10
								break
							}
							case $.comparableEqual(__goscriptSwitch2, await elliptic.P384()):
							{
								defaultAlgo = 11
								break
							}
							case $.comparableEqual(__goscriptSwitch2, await elliptic.P521()):
							{
								defaultAlgo = 12
								break
							}
							default:
							{
								return [0, (ai).clone(), errors.New("x509: unsupported elliptic curve")]
								break
							}
						}
					}
				}
				break
			case $.typeAssert<ed25519.PublicKey>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PublicKey")).ok:
				{
					let pub: ed25519.PublicKey = $.typeAssert<ed25519.PublicKey>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PublicKey")).value
					pubType = 4
					defaultAlgo = 16
				}
				break
			case $.typeAssert<mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mldsa.PublicKey")).ok:
				{
					let pub: mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null = $.typeAssert<mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mldsa.PublicKey")).value
					pubType = 5
					switch ((pub !== null && (pub as any).__isVarRef !== true && (pub as any).__goValue === undefined ? ((pub as any) as mldsa.PublicKey).Parameters() : mldsa.PublicKey.prototype.Parameters.call(pub))) {
						case mldsa.MLDSA44():
						{
							defaultAlgo = 17
							break
						}
						case mldsa.MLDSA65():
						{
							defaultAlgo = 18
							break
						}
						case mldsa.MLDSA87():
						{
							defaultAlgo = 19
							break
						}
						default:
						{
							return [0, (ai).clone(), fmt.Errorf("x509: unsupported ML-DSA parameters: %s", $.interfaceValue((pub !== null && (pub as any).__isVarRef !== true && (pub as any).__goValue === undefined ? ((pub as any) as mldsa.PublicKey).Parameters() : mldsa.PublicKey.prototype.Parameters.call(pub)), "mldsa.Parameters", "mldsa.Parameters"))]
							break
						}
					}
				}
				break
			default:
				{
					let pub: any = __goscriptTypeSwitchValue
					return [0, (ai).clone(), errors.New("x509: only RSA, ECDSA, ML-DSA and Ed25519 keys supported")]
				}
				break
		}
	}

	if (sigAlgo == 0) {
		sigAlgo = defaultAlgo
	}

	for (let __goscriptRangeTarget30 = __goscript_get_signatureAlgorithmDetails(), __goscriptRangeWindow30 = $.sliceRange(__goscriptRangeTarget30), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow30.length; __rangeIndex++) {
		let details = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow30.backing[__goscriptRangeWindow30.offset + __rangeIndex] as {"algo": SignatureAlgorithm, "name": string, "oid": asn1.ObjectIdentifier, "params": asn1.RawValue, "pubKeyAlgo": PublicKeyAlgorithm, "hash": crypto.Hash, "isRSAPSS": boolean})))
		if (details.algo == sigAlgo) {
			if (details.pubKeyAlgo != pubType) {
				return [0, (ai).clone(), errors.New("x509: requested SignatureAlgorithm does not match private key type")]
			}
			if ((pubType == 5) && (sigAlgo != defaultAlgo)) {
				return [0, (ai).clone(), errors.New("x509: requested SignatureAlgorithm does not match ML-DSA parameters")]
			}
			if (details.hash == 2) {
				return [0, (ai).clone(), errors.New("x509: signing with MD5 is not supported")]
			}

			return [sigAlgo, new pkix2.AlgorithmIdentifier({Algorithm: (details.oid as asn1.ObjectIdentifier), Parameters: details.params}, true), null]
		}
	}

	return [0, (ai).clone(), errors.New("x509: unknown SignatureAlgorithm")]
}

export async function signTBS(tbs: $.Slice<number>, key: crypto.Signer | null, sigAlg: SignatureAlgorithm, rand: io.Reader | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let hashFunc = SignatureAlgorithm_hashFunc(sigAlg)

	let signerOpts: crypto.SignerOpts | null = $.namedValueInterfaceValue<crypto.SignerOpts | null>(hashFunc, "crypto.Hash", __goscriptStatic12(), __goscriptStatic13(), __goscriptStatic14())
	if (SignatureAlgorithm_isRSAPSS(sigAlg)) {
		signerOpts = $.interfaceValue<crypto.SignerOpts | null>(new rsa.PSSOptions({SaltLength: -1, Hash: hashFunc}), "*rsa.PSSOptions", /* @__PURE__ */ $.pointerType("rsa.PSSOptions"))
	}

	let __goscriptTuple38: any = await crypto.SignMessage(key, rand, tbs, signerOpts)
	let signature: $.Slice<number> = __goscriptTuple38[0]
	let err = __goscriptTuple38[1]
	if (err != null) {
		return [null, err]
	}

	// Check the signature to ensure the crypto.Signer behaved correctly.
	{
		let __goscriptShadow14 = await checkSignature(sigAlg, tbs, signature, (__goscriptAwait = (key !== null && (key as any).__isVarRef !== true && (key as any).__goValue === undefined ? (key as Exclude<crypto.Signer, null>) : $.pointerValue<Exclude<crypto.Signer, null>>(key)).Public(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), true)
		if (__goscriptShadow14 != null) {
			return [null, fmt.Errorf("x509: signature returned by signer is invalid: %w", (__goscriptShadow14 as any))]
		}
	}

	return [signature, null]
}

export let emptyASN1Subject: $.Slice<number> = new Uint8Array([48, 0]) as $.Slice<number>

export function __goscript_set_emptyASN1Subject(__goscriptValue: $.Slice<number>): void {
	emptyASN1Subject = __goscriptValue
}

export async function CreateCertificate(rand: io.Reader | null, template: Certificate | $.VarRef<Certificate> | null, parent: Certificate | $.VarRef<Certificate> | null, pub: any, priv: any): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let [key, ok] = $.typeAssertTuple<crypto.Signer | null>(priv, "crypto.Signer")
	if (!ok) {
		return [null, errors.New("x509: certificate private key does not implement crypto.Signer")]
	}

	let serialNumber: big.Int | $.VarRef<big.Int> | null = $.pointerValue<Certificate>(template).SerialNumber
	if (serialNumber == null) {
		// Generate a serial number following RFC 5280, Section 4.1.2.2 if one
		// is not provided. The serial number must be positive and at most 20
		// octets *when encoded*.
		let serialBytes: $.Slice<number> = $.makeSlice<number>(20, undefined, "byte")
		{
			let [, err] = await io.ReadFull($.pointerValueOrNil(rand)!, serialBytes)
			if (err != null) {
				return [null, err]
			}
		}
		// If the top bit is set, the serial will be padded with a leading zero
		// byte during encoding, so that it's not interpreted as a negative
		// integer. This padding would make the serial 21 octets so we clear the
		// top bit to ensure the correct length in all cases.
		$.sliceElems(serialBytes!)[$.sliceSlot(serialBytes!, 0)] = $.sliceElems(serialBytes!)[$.sliceSlot(serialBytes!, 0)] & (0b0111_1111)
		serialNumber = big.Int.prototype.SetBytes.call(new big.Int(), serialBytes)
	}

	// RFC 5280 Section 4.1.2.2: serial number must be positive
	//
	// We _should_ also restrict serials to <= 20 octets, but it turns out a lot of people
	// get this wrong, in part because the encoding can itself alter the length of the
	// serial. For now we accept these non-conformant serials.
	if ((serialNumber !== null && (serialNumber as any).__isVarRef !== true && (serialNumber as any).__goValue === undefined ? ((serialNumber as any) as big.Int).Sign() : big.Int.prototype.Sign.call(serialNumber)) == -1) {
		return [null, errors.New("x509: serial number must be positive")]
	}

	if ($.pointerValue<Certificate>(template).BasicConstraintsValid && ($.pointerValue<Certificate>(template).MaxPathLen < -1)) {
		return [null, errors.New("x509: invalid MaxPathLen, must be greater or equal to -1")]
	}

	if ((($.pointerValue<Certificate>(template).BasicConstraintsValid && !$.pointerValue<Certificate>(template).IsCA) && ($.pointerValue<Certificate>(template).MaxPathLen != -1)) && (($.pointerValue<Certificate>(template).MaxPathLen != 0) || $.pointerValue<Certificate>(template).MaxPathLenZero)) {
		return [null, errors.New("x509: only CAs are allowed to specify MaxPathLen")]
	}

	let [signatureAlgorithm, algorithmIdentifier, err] = await signingParamsForKey(key, $.pointerValue<Certificate>(template).SignatureAlgorithm)
	if (err != null) {
		return [null, err]
	}

	let __goscriptTuple39: any = await marshalPublicKey(pub)
	let publicKeyBytes: $.Slice<number> = __goscriptTuple39[0]
	let publicKeyAlgorithm = __goscriptTuple39[1]
	err = __goscriptTuple39[2]
	if (err != null) {
		return [null, err]
	}
	if (getPublicKeyAlgorithmFromOID((publicKeyAlgorithm.Algorithm as asn1.ObjectIdentifier)) == 0) {
		return [null, fmt.Errorf("x509: unsupported public key type: %T", pub)]
	}

	let __goscriptTuple40: any = await subjectBytes(parent)
	let asn1Issuer: $.Slice<number> = __goscriptTuple40[0]
	err = __goscriptTuple40[1]
	if (err != null) {
		return [null, err]
	}

	let __goscriptTuple41: any = await subjectBytes(template)
	let asn1Subject: $.Slice<number> = __goscriptTuple41[0]
	err = __goscriptTuple41[1]
	if (err != null) {
		return [null, err]
	}

	let authorityKeyId: $.Slice<number> = $.pointerValue<Certificate>(template).AuthorityKeyId
	if (!bytes.Equal(asn1Issuer, asn1Subject) && ($.sliceLen($.pointerValue<Certificate>(parent).SubjectKeyId) > 0)) {
		authorityKeyId = $.pointerValue<Certificate>(parent).SubjectKeyId
	}

	let subjectKeyId: $.Slice<number> = $.pointerValue<Certificate>(template).SubjectKeyId
	if (($.sliceLen(subjectKeyId) == 0) && $.pointerValue<Certificate>(template).IsCA) {
		if ($.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(x509sha256skid)), "0")) {
			godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(x509sha256skid))
			// SubjectKeyId generated using method 1 in RFC 5280, Section 4.2.1.2:
			//   (1) The keyIdentifier is composed of the 160-bit SHA-1 hash of the
			//   value of the BIT STRING subjectPublicKey (excluding the tag,
			//   length, and number of unused bits).
			let h = $.cloneArrayValue(await sha1.Sum(publicKeyBytes), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 20))
			subjectKeyId = $.goSlice(h, undefined, undefined)
		} else {
			// SubjectKeyId generated using method 1 in RFC 7093, Section 2:
			//    1) The keyIdentifier is composed of the leftmost 160-bits of the
			//    SHA-256 hash of the value of the BIT STRING subjectPublicKey
			//    (excluding the tag, length, and number of unused bits).
			let h = $.cloneArrayValue(await sha256.Sum256(publicKeyBytes), /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
			subjectKeyId = $.goSlice(h, undefined, 20)
		}
	}

	// Check that the signer's public key matches the private key, if available.
	type privateKey = {
		Equal(_p0: crypto.PublicKey | null): boolean
	}

	$.registerInterfaceType(
		"x509.privateKey",
		null,
		[$.methodSignature("Equal", ["crypto.PublicKey"], [/* @__PURE__ */ $.basicType("bool")])]
	);
	{
		let [privPub, __goscriptShadow15] = $.typeAssertTuple<privateKey | null>((__goscriptAwait = (key !== null && (key as any).__isVarRef !== true && (key as any).__goValue === undefined ? (key as Exclude<crypto.Signer, null>) : $.pointerValue<Exclude<crypto.Signer, null>>(key)).Public(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "x509.privateKey")
		if (!__goscriptShadow15) {
			return [null, errors.New("x509: internal error: supported public key does not implement Equal")]
		} else {
			if (($.pointerValue<Certificate>(parent).PublicKey != null) && !(__goscriptAwait = (privPub !== null && (privPub as any).__isVarRef !== true && (privPub as any).__goValue === undefined ? (privPub as Exclude<privateKey, null>) : $.pointerValue<Exclude<privateKey, null>>(privPub)).Equal(($.pointerValue<Certificate>(parent).PublicKey as crypto.PublicKey | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return [null, errors.New("x509: provided PrivateKey doesn't match parent's PublicKey")]
			}
		}
	}

	let __goscriptTuple42: any = await buildCertExtensions(template, bytes.Equal(asn1Subject, emptyASN1Subject), authorityKeyId, subjectKeyId)
	let extensions: $.Slice<pkix2.Extension> = __goscriptTuple42[0]
	err = __goscriptTuple42[1]
	if (err != null) {
		return [null, err]
	}

	let encodedPublicKey = new asn1.BitString({BitLength: $.sliceLen(publicKeyBytes) * 8, Bytes: publicKeyBytes}, true)
	let c = new tbsCertificate({Version: 2, SerialNumber: serialNumber, SignatureAlgorithm: algorithmIdentifier, Issuer: new asn1.RawValue({FullBytes: asn1Issuer}, true), Validity: (() => { const __goscriptLiteralField9 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.pointerValue<Certificate>(template).NotBefore)).UTC())); const __goscriptLiteralField10 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.pointerValue<Certificate>(template).NotAfter)).UTC())); return new validity({NotBefore: __goscriptLiteralField9, NotAfter: __goscriptLiteralField10}, true) })(), Subject: new asn1.RawValue({FullBytes: asn1Subject}, true), PublicKey: new publicKeyInfo({Raw: (null as asn1.RawContent), Algorithm: publicKeyAlgorithm, PublicKey: encodedPublicKey}, true), Extensions: extensions}, true)

	let __goscriptTuple43: any = await asn1.Marshal($.interfaceValue((c).clone(), "x509.tbsCertificate", "x509.tbsCertificate"))
	let tbsCertContents: $.Slice<number> = __goscriptTuple43[0]
	err = __goscriptTuple43[1]
	if (err != null) {
		return [null, err]
	}
	c.Raw = (tbsCertContents as asn1.RawContent)

	let __goscriptTuple44: any = await signTBS(tbsCertContents, key, signatureAlgorithm, rand)
	let signature: $.Slice<number> = __goscriptTuple44[0]
	err = __goscriptTuple44[1]
	if (err != null) {
		return [null, err]
	}

	return asn1.Marshal($.interfaceValue(new certificate({TBSCertificate: c, SignatureAlgorithm: algorithmIdentifier, SignatureValue: new asn1.BitString({Bytes: signature, BitLength: $.sliceLen(signature) * 8}, true)}, true), "x509.certificate", "x509.certificate"))
}

export let x509sha256skid: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("x509sha256skid")

export function __goscript_set_x509sha256skid(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	x509sha256skid = __goscriptValue
}

export let pemCRLPrefix: $.Slice<number> = new Uint8Array([45, 45, 45, 45, 45, 66, 69, 71, 73, 78, 32, 88, 53, 48, 57, 32, 67, 82, 76])

export function __goscript_set_pemCRLPrefix(__goscriptValue: $.Slice<number>): void {
	pemCRLPrefix = __goscriptValue
}

export let pemType: string = "X509 CRL"

export function __goscript_set_pemType(__goscriptValue: string): void {
	pemType = __goscriptValue
}

export async function ParseCRL(crlBytes: $.Slice<number>): globalThis.Promise<[pkix2.CertificateList | $.VarRef<pkix2.CertificateList> | null, $.GoError]> {
	if (bytes.HasPrefix(crlBytes, pemCRLPrefix)) {
		let __goscriptTuple45: any = pem.Decode(crlBytes)
		let block: pem.Block | $.VarRef<pem.Block> | null = __goscriptTuple45[0]
		let block$: pem.Block = block == null ? $.pointerTarget<pem.Block>(block) : (block as any).__isVarRef === true ? (block as any).value : (block as any).__goValue === undefined ? (block as any) : $.pointerTarget<pem.Block>(block)
		if ((block != null) && ($.stringEqual((block$ as pem.Block).Type, pemType))) {
			crlBytes = (block$ as pem.Block).Bytes
		}
	}
	return ParseDERCRL(crlBytes)
}

export async function ParseDERCRL(derBytes: $.Slice<number>): globalThis.Promise<[pkix2.CertificateList | $.VarRef<pkix2.CertificateList> | null, $.GoError]> {
	let certList: pkix2.CertificateList | $.VarRef<pkix2.CertificateList> | null = new pkix2.CertificateList()
	{
		let __goscriptTuple46: any = await asn1.Unmarshal(derBytes, $.interfaceValue(certList, "*pkix.CertificateList", /* @__PURE__ */ $.pointerType("pkix.CertificateList")))
		let rest: $.Slice<number> = __goscriptTuple46[0]
		let err = __goscriptTuple46[1]
		if (err != null) {
			return [null, err]
		} else {
			if ($.sliceLen(rest) != 0) {
				return [null, errors.New("x509: trailing data after CRL")]
			}
		}
	}
	return [certList, null]
}

export let oidExtensionRequest: asn1.ObjectIdentifier = ($.arrayToSlice<number>([1, 2, 840, 113549, 1, 9, 14]) as asn1.ObjectIdentifier)

export function __goscript_set_oidExtensionRequest(__goscriptValue: asn1.ObjectIdentifier): void {
	oidExtensionRequest = __goscriptValue
}

export async function newRawAttributes(attributes: $.Slice<pkix2.AttributeTypeAndValueSET>): globalThis.Promise<[$.Slice<asn1.RawValue>, $.GoError]> {
	let rawAttributes: $.VarRef<$.Slice<asn1.RawValue>> = $.varRef(null! as $.Slice<asn1.RawValue>)
	let __goscriptTuple47: any = await asn1.Marshal($.interfaceValue(attributes, "[]pkix.AttributeTypeAndValueSET", /* @__PURE__ */ $.sliceType("pkix.AttributeTypeAndValueSET")))
	let b: $.Slice<number> = __goscriptTuple47[0]
	let err = __goscriptTuple47[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple48: any = await asn1.Unmarshal(b, $.interfaceValue(rawAttributes, "*[]asn1.RawValue", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType("asn1.RawValue"))))
	let rest: $.Slice<number> = __goscriptTuple48[0]
	err = __goscriptTuple48[1]
	if (err != null) {
		return [null, err]
	}
	if ($.sliceLen(rest) != 0) {
		return [null, errors.New("x509: failed to unmarshal raw CSR Attributes")]
	}
	return [rawAttributes.value, null]
}

export async function parseRawAttributes(rawAttributes: $.Slice<asn1.RawValue>): globalThis.Promise<$.Slice<pkix2.AttributeTypeAndValueSET>> {
	let attributes: $.Slice<pkix2.AttributeTypeAndValueSET> = null! as $.Slice<pkix2.AttributeTypeAndValueSET>
	for (let __goscriptRangeTarget31 = rawAttributes, __goscriptRangeWindow31 = $.sliceRange(__goscriptRangeTarget31), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow31.length; __rangeIndex++) {
		let rawAttr = ((__goscriptRangeWindow31.backing[__goscriptRangeWindow31.offset + __rangeIndex] as asn1.RawValue)).clone()
		let attr: $.VarRef<pkix2.AttributeTypeAndValueSET> = $.varRef(new pkix2.AttributeTypeAndValueSET(undefined, true))
		let __goscriptTuple49: any = await asn1.Unmarshal(rawAttr.FullBytes, $.interfaceValue(attr, "*pkix.AttributeTypeAndValueSET", /* @__PURE__ */ $.pointerType("pkix.AttributeTypeAndValueSET")))
		let rest: $.Slice<number> = __goscriptTuple49[0]
		let err = __goscriptTuple49[1]
		// Ignore attributes that don't parse into pkix.AttributeTypeAndValueSET
		// (i.e.: challengePassword or unstructuredName).
		if ((err == null) && ($.sliceLen(rest) == 0)) {
			attributes = $.appendOne(attributes, (attr.value).clone())
		}
	}
	return attributes
}

export async function parseCSRExtensions(rawAttributes: $.Slice<asn1.RawValue>): globalThis.Promise<[$.Slice<pkix2.Extension>, $.GoError]> {
	// pkcs10Attribute reflects the Attribute structure from RFC 2986, Section 4.1.
	class pkcs10Attribute {
		public get Id(): asn1.ObjectIdentifier {
			return this._fields.Id
		}

		public set Id(value: asn1.ObjectIdentifier) {
			this._fields.Id = value
		}

		public get Values(): $.Slice<asn1.RawValue> {
			return this._fields.Values
		}

		public set Values(value: $.Slice<asn1.RawValue>) {
			this._fields.Values = value
		}

		public _fields: {
			Id: asn1.ObjectIdentifier
			Values: $.Slice<asn1.RawValue>
		}

		constructor(init?: Partial<{Id?: asn1.ObjectIdentifier, Values?: $.Slice<asn1.RawValue>}>, __goscriptValue?: boolean) {
			this._fields = {
				Id: init?.Id ?? (null! as asn1.ObjectIdentifier),
				Values: init?.Values ?? (null! as $.Slice<asn1.RawValue>)
			}
			;(this as any)[$.structValueMarker] = __goscriptValue === true
		}

		public clone(): pkcs10Attribute {
			return new pkcs10Attribute(this, true)
		}

		public __goscriptAssign(source: pkcs10Attribute): void {
			const target = this._fields
			const values = source._fields
			target.Id = values.Id
			target.Values = values.Values
		}

		static __typeInfo = $.registerStructType(
			"x509.pkcs10Attribute",
			() => new pkcs10Attribute(),
			() => [],
			pkcs10Attribute,
			() => [/* @__PURE__ */ $.structField("Id", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [0], 0, true), /* @__PURE__ */ $.structField("Values", /* @__PURE__ */ $.sliceType("asn1.RawValue"), [1], 24, true, { tag: "asn1:\"set\"" })]
		)
	}

	let ret: $.Slice<pkix2.Extension> = null! as $.Slice<pkix2.Extension>
	let requestedExts: globalThis.Map<string, boolean> | null = $.makeMap<string, boolean>()
	for (let __goscriptRangeTarget33 = rawAttributes, __goscriptRangeWindow32 = $.sliceRange(__goscriptRangeTarget33), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow32.length; __rangeIndex++) {
		let rawAttr = ((__goscriptRangeWindow32.backing[__goscriptRangeWindow32.offset + __rangeIndex] as asn1.RawValue)).clone()
		let attr: $.VarRef<pkcs10Attribute> = $.varRef($.markAsStructValue(new pkcs10Attribute()))
		{
			let __goscriptTuple50: any = await asn1.Unmarshal(rawAttr.FullBytes, $.interfaceValue(attr, "*x509.pkcs10Attribute", /* @__PURE__ */ $.pointerType("x509.pkcs10Attribute")))
			let rest: $.Slice<number> = __goscriptTuple50[0]
			let err = __goscriptTuple50[1]
			if (((err != null) || ($.sliceLen(rest) != 0)) || ($.sliceLen(attr.value.Values) == 0)) {
				// Ignore attributes that don't parse.
				continue
			}
		}

		if (!asn1.ObjectIdentifier_Equal(attr.value.Id, (oidExtensionRequest as asn1.ObjectIdentifier))) {
			continue
		}

		let extensions: $.VarRef<$.Slice<pkix2.Extension>> = $.varRef(null! as $.Slice<pkix2.Extension>)
		{
			let [, err] = await asn1.Unmarshal($.arrayIndex(attr.value.Values!, 0).FullBytes, $.interfaceValue(extensions, "*[]pkix.Extension", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType("pkix.Extension"))))
			if (err != null) {
				return [null, err]
			}
		}
		for (let __goscriptRangeTarget32 = extensions.value, __goscriptRangeWindow33 = $.sliceRange(__goscriptRangeTarget32), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow33.length; __rangeIndex++) {
			let ext = ((__goscriptRangeWindow33.backing[__goscriptRangeWindow33.offset + __rangeIndex] as pkix2.Extension)).clone()
			let oidStr = asn1.ObjectIdentifier_String(ext.Id)
			if ($.mapGet<string, boolean, boolean>(requestedExts, oidStr, false)[0]) {
				return [null, errors.New("x509: certificate request contains duplicate requested extensions")]
			}
			$.mapSet(requestedExts, oidStr, true)
		}
		ret = $.appendSlice(ret, extensions.value)
	}

	return [ret, null]
}

export async function CreateCertificateRequest(rand: io.Reader | null, template: CertificateRequest | $.VarRef<CertificateRequest> | null, priv: any): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let csr: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	const template$: CertificateRequest = template == null ? $.pointerTarget<CertificateRequest>(template) : (template as any).__isVarRef === true ? (template as any).value : (template as any).__goValue === undefined ? (template as any) : $.pointerTarget<CertificateRequest>(template)
	let [key, ok] = $.typeAssertTuple<crypto.Signer | null>(priv, "crypto.Signer")
	if (!ok) {
		return [null, errors.New("x509: certificate private key does not implement crypto.Signer")]
	}

	let __goscriptTuple51: any = await signingParamsForKey(key, (template$ as CertificateRequest).SignatureAlgorithm)
	let signatureAlgorithm = __goscriptTuple51[0]
	let algorithmIdentifier = __goscriptTuple51[1]
	err = __goscriptTuple51[2]
	if (err != null) {
		return [null, err]
	}

	let publicKeyBytes: $.Slice<number> = null! as $.Slice<number>
	let publicKeyAlgorithm: pkix2.AlgorithmIdentifier = new pkix2.AlgorithmIdentifier(undefined, true)
	let __goscriptTuple52: any = await marshalPublicKey(((__goscriptAwait = (key !== null && (key as any).__isVarRef !== true && (key as any).__goValue === undefined ? (key as Exclude<crypto.Signer, null>) : $.pointerValue<Exclude<crypto.Signer, null>>(key)).Public(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any))
	publicKeyBytes = __goscriptTuple52[0]
	publicKeyAlgorithm = $.assignStruct(publicKeyAlgorithm, __goscriptTuple52[1])
	err = __goscriptTuple52[2]
	if (err != null) {
		return [null, err]
	}

	let __goscriptTuple53: any = await buildCSRExtensions(template)
	let extensions: $.Slice<pkix2.Extension> = __goscriptTuple53[0]
	err = __goscriptTuple53[1]
	if (err != null) {
		return [null, err]
	}

	// Make a copy of template.Attributes because we may alter it below.
	let attributes: $.Slice<pkix2.AttributeTypeAndValueSET> = $.makeSlice<pkix2.AttributeTypeAndValueSET>(0, $.sliceLen((template$ as CertificateRequest).Attributes), undefined, () => new pkix2.AttributeTypeAndValueSET(undefined, true))
	for (let __goscriptRangeTarget34 = (template$ as CertificateRequest).Attributes, __goscriptRangeWindow34 = $.sliceRange(__goscriptRangeTarget34), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow34.length; __rangeIndex++) {
		let attr = ((__goscriptRangeWindow34.backing[__goscriptRangeWindow34.offset + __rangeIndex] as pkix2.AttributeTypeAndValueSET)).clone()
		let values: $.Slice<$.Slice<pkix2.AttributeTypeAndValue>> = $.makeSlice<$.Slice<pkix2.AttributeTypeAndValue>>($.sliceLen(attr.Value))
		$.copy(values, attr.Value)
		attributes = $.appendOne(attributes, new pkix2.AttributeTypeAndValueSET({Type: (attr.Type as asn1.ObjectIdentifier), Value: values}, true))
	}

	let extensionsAppended = false
	if ($.sliceLen(extensions) > 0) {
		// Append the extensions to an existing attribute if possible.
		for (let __goscriptRangeTarget38 = attributes, __goscriptRangeWindow35 = $.sliceRange(__goscriptRangeTarget38), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow35.length; __rangeIndex++) {
			let atvSet = ((__goscriptRangeWindow35.backing[__goscriptRangeWindow35.offset + __rangeIndex] as pkix2.AttributeTypeAndValueSET)).clone()
			if (!asn1.ObjectIdentifier_Equal(atvSet.Type, (oidExtensionRequest as asn1.ObjectIdentifier)) || ($.sliceLen(atvSet.Value) == 0)) {
				continue
			}

			// specifiedExtensions contains all the extensions that we
			// found specified via template.Attributes.
			let specifiedExtensions: globalThis.Map<string, boolean> | null = $.makeMap<string, boolean>()

			for (let __goscriptRangeTarget36 = atvSet.Value, __goscriptRangeWindow36 = $.sliceRange(__goscriptRangeTarget36), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow36.length; __rangeIndex++) {
				let atvs = (__goscriptRangeWindow36.backing[__goscriptRangeWindow36.offset + __rangeIndex] as $.Slice<pkix2.AttributeTypeAndValue>)
				for (let __goscriptRangeTarget35 = atvs, __goscriptRangeWindow37 = $.sliceRange(__goscriptRangeTarget35), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow37.length; __rangeIndex++) {
					let atv = ((__goscriptRangeWindow37.backing[__goscriptRangeWindow37.offset + __rangeIndex] as pkix2.AttributeTypeAndValue)).clone()
					$.mapSet(specifiedExtensions, asn1.ObjectIdentifier_String(atv.Type), true)
				}
			}

			let newValue: $.Slice<pkix2.AttributeTypeAndValue> = $.makeSlice<pkix2.AttributeTypeAndValue>(0, $.sliceLen($.arrayIndex(atvSet.Value!, 0)) + $.sliceLen(extensions), undefined, () => new pkix2.AttributeTypeAndValue(undefined, true))
			newValue = $.appendSlice(newValue, $.arrayIndex(atvSet.Value!, 0))

			for (let __goscriptRangeTarget37 = extensions, __goscriptRangeWindow38 = $.sliceRange(__goscriptRangeTarget37), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow38.length; __rangeIndex++) {
				let e = ((__goscriptRangeWindow38.backing[__goscriptRangeWindow38.offset + __rangeIndex] as pkix2.Extension)).clone()
				if ($.mapGet<string, boolean, boolean>(specifiedExtensions, asn1.ObjectIdentifier_String(e.Id), false)[0]) {
					// Attributes already contained a value for
					// this extension and it takes priority.
					continue
				}

				newValue = $.appendOne(newValue, new pkix2.AttributeTypeAndValue({Type: (e.Id as asn1.ObjectIdentifier), Value: $.interfaceValue(e.Value, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))}, true))
			}

			$.sliceElems(atvSet.Value!)[$.sliceSlot(atvSet.Value!, 0)] = newValue
			extensionsAppended = true
			break
		}
	}

	let __goscriptTuple54: any = await newRawAttributes(attributes)
	let rawAttributes: $.Slice<asn1.RawValue> = __goscriptTuple54[0]
	err = __goscriptTuple54[1]
	if (err != null) {
		return [null, err]
	}

	// If not included in attributes, add a new attribute for the
	// extensions.
	if (($.sliceLen(extensions) > 0) && !extensionsAppended) {
		let attr = $.anonymousStructValue({Type: (oidExtensionRequest as asn1.ObjectIdentifier), Value: $.arrayToSlice<$.Slice<pkix2.Extension>>([extensions])}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [0], 0, true), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType("pkix.Extension")), [1], 24, true, { tag: "asn1:\"set\"" })] })

		let __goscriptTuple55: any = await asn1.Marshal($.interfaceValue($.markAsStructValue($.cloneStructValue(attr)), "struct{Type asn1.ObjectIdentifier; Value [][]pkix.Extension \"asn1:\\\"set\\\"\"}", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [0], 0, true), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType("pkix.Extension")), [1], 24, true, { tag: "asn1:\"set\"" })] }))
		let b: $.Slice<number> = __goscriptTuple55[0]
		let __goscriptShadow16 = __goscriptTuple55[1]
		if (__goscriptShadow16 != null) {
			return [null, errors.New($.concatString("x509: failed to serialise extensions attribute: ", (__goscriptAwait = (__goscriptShadow16 !== null && (__goscriptShadow16 as any).__isVarRef !== true && (__goscriptShadow16 as any).__goValue === undefined ? (__goscriptShadow16 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow16)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
		}

		let rawValue: $.VarRef<asn1.RawValue> = $.varRef(new asn1.RawValue(undefined, true))
		{
			let [, __goscriptShadow17] = await asn1.Unmarshal(b, $.interfaceValue(rawValue, "*asn1.RawValue", /* @__PURE__ */ $.pointerType("asn1.RawValue")))
			if (__goscriptShadow17 != null) {
				return [null, __goscriptShadow17]
			}
		}

		rawAttributes = $.appendOne(rawAttributes, (rawValue.value).clone())
	}

	let asn1Subject: $.Slice<number> = (template$ as CertificateRequest).RawSubject
	if ($.sliceLen(asn1Subject) == 0) {
		let __goscriptTuple56: any = await asn1.Marshal($.namedValueInterfaceValue<any>($.markAsStructValue($.cloneStructValue((template$ as CertificateRequest).Subject)).ToRDNSequence(), "pkix.RDNSequence", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic11()))
		asn1Subject = __goscriptTuple56[0]
		err = __goscriptTuple56[1]
		if (err != null) {
			return [null, err]
		}
	}

	let tbsCSR = new tbsCertificateRequest({Version: 0, Subject: new asn1.RawValue({FullBytes: asn1Subject}, true), PublicKey: new publicKeyInfo({Algorithm: publicKeyAlgorithm, PublicKey: new asn1.BitString({Bytes: publicKeyBytes, BitLength: $.sliceLen(publicKeyBytes) * 8}, true)}, true), RawAttributes: rawAttributes}, true)

	let __goscriptTuple57: any = await asn1.Marshal($.interfaceValue((tbsCSR).clone(), "x509.tbsCertificateRequest", "x509.tbsCertificateRequest"))
	let tbsCSRContents: $.Slice<number> = __goscriptTuple57[0]
	err = __goscriptTuple57[1]
	if (err != null) {
		return [null, err]
	}
	tbsCSR.Raw = (tbsCSRContents as asn1.RawContent)

	let __goscriptTuple58: any = await signTBS(tbsCSRContents, key, signatureAlgorithm, rand)
	let signature: $.Slice<number> = __goscriptTuple58[0]
	err = __goscriptTuple58[1]
	if (err != null) {
		return [null, err]
	}

	let cr = new certificateRequest(undefined, true)
	$.assignStruct(cr.TBSCSR, tbsCSR)
	cr.SignatureAlgorithm.Algorithm = (algorithmIdentifier.Algorithm as asn1.ObjectIdentifier)
	$.assignStruct(cr.SignatureAlgorithm.Parameters, algorithmIdentifier.Parameters)
	$.assignStruct(cr.SignatureValue, new asn1.BitString({Bytes: signature, BitLength: $.sliceLen(signature) * 8}, true))
	return asn1.Marshal($.interfaceValue((cr).clone(), "x509.certificateRequest", "x509.certificateRequest"))
}

export async function ParseCertificateRequest(asn1Data: $.Slice<number>): globalThis.Promise<[CertificateRequest | $.VarRef<CertificateRequest> | null, $.GoError]> {
	let csr: $.VarRef<certificateRequest> = $.varRef(new certificateRequest(undefined, true))

	let __goscriptTuple59: any = await asn1.Unmarshal(asn1Data, $.interfaceValue(csr, "*x509.certificateRequest", /* @__PURE__ */ $.pointerType("x509.certificateRequest")))
	let rest: $.Slice<number> = __goscriptTuple59[0]
	let err = __goscriptTuple59[1]
	if (err != null) {
		return [null, err]
	} else {
		if ($.sliceLen(rest) != 0) {
			return [null, $.interfaceValue<$.GoError>(new asn1.SyntaxError({Msg: "trailing data"}, true), "asn1.SyntaxError", "asn1.SyntaxError")]
		}
	}

	return parseCertificateRequest(csr)
}

export async function parseCertificateRequest(_in: certificateRequest | $.VarRef<certificateRequest> | null): globalThis.Promise<[CertificateRequest | $.VarRef<CertificateRequest> | null, $.GoError]> {
	const _in$: certificateRequest = _in == null ? $.pointerTarget<certificateRequest>(_in) : (_in as any).__isVarRef === true ? (_in as any).value : (_in as any).__goValue === undefined ? (_in as any) : $.pointerTarget<certificateRequest>(_in)
	let out: CertificateRequest | $.VarRef<CertificateRequest> | null = (await (async () => { const __goscriptLiteralField11 = $.markAsStructValue($.cloneStructValue((_in$ as certificateRequest).SignatureValue)).RightAlign(); const __goscriptLiteralField12 = await getSignatureAlgorithmFromAI(new pkix2.AlgorithmIdentifier({Algorithm: ((_in$ as certificateRequest).SignatureAlgorithm.Algorithm as asn1.ObjectIdentifier), Parameters: (_in$ as certificateRequest).SignatureAlgorithm.Parameters}, true)); const __goscriptLiteralField13 = getPublicKeyAlgorithmFromOID(((_in$ as certificateRequest).TBSCSR.PublicKey.Algorithm.Algorithm as asn1.ObjectIdentifier)); const __goscriptLiteralField14 = await parseRawAttributes((_in$ as certificateRequest).TBSCSR.RawAttributes); return new CertificateRequest({Raw: (_in$ as certificateRequest).Raw, RawTBSCertificateRequest: (_in$ as certificateRequest).TBSCSR.Raw, RawSubjectPublicKeyInfo: (_in$ as certificateRequest).TBSCSR.PublicKey.Raw, RawSubject: (_in$ as certificateRequest).TBSCSR.Subject.FullBytes, RawSignatureAlgorithm: (_in$ as certificateRequest).SignatureAlgorithm.Raw, Signature: __goscriptLiteralField11, SignatureAlgorithm: __goscriptLiteralField12, PublicKeyAlgorithm: __goscriptLiteralField13, Version: (_in$ as certificateRequest).TBSCSR.Version, Attributes: __goscriptLiteralField14}) })())
	let out$: CertificateRequest = out == null ? $.pointerTarget<CertificateRequest>(out) : (out as any).__isVarRef === true ? (out as any).value : (out as any).__goValue === undefined ? (out as any) : $.pointerTarget<CertificateRequest>(out)

	let err: $.GoError = null! as $.GoError
	if ((out$ as CertificateRequest).PublicKeyAlgorithm != 0) {
		let __goscriptTuple60: any = await __goscript_parser.parsePublicKey($.fieldRef((_in$ as certificateRequest).TBSCSR._fields, "PublicKey"));
		;(out$ as CertificateRequest).PublicKey = __goscriptTuple60[0]
		err = __goscriptTuple60[1]
		if (err != null) {
			return [null, err]
		}
	}

	let __goscriptTuple61: any = __goscript_parser.parseName(((_in$ as certificateRequest).TBSCSR.Subject.FullBytes as cryptobyte.String))
	let subject: $.VarRef<pkix2.RDNSequence> | null = __goscriptTuple61[0]
	err = __goscriptTuple61[1]
	if (err != null) {
		return [null, err]
	}
	void (out$ as CertificateRequest).Subject.FillFromRDNSequence(subject)

	{
		let __goscriptTuple62: any = await parseCSRExtensions((_in$ as certificateRequest).TBSCSR.RawAttributes);
		;(out$ as CertificateRequest).Extensions = __goscriptTuple62[0]
		err = __goscriptTuple62[1]
		if (err != null) {
			return [null, err]
		}
	}

	for (let __goscriptRangeTarget39 = (out$ as CertificateRequest).Extensions, __goscriptRangeWindow39 = $.sliceRange(__goscriptRangeTarget39), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow39.length; __rangeIndex++) {
		let extension = ((__goscriptRangeWindow39.backing[__goscriptRangeWindow39.offset + __rangeIndex] as pkix2.Extension)).clone()
		switch ((true as boolean)) {
			case asn1.ObjectIdentifier_Equal(extension.Id, (oidExtensionSubjectAltName as asn1.ObjectIdentifier)):
			{
				let __goscriptTuple63: any = await __goscript_parser.parseSANExtension((extension.Value as cryptobyte.String));
				;(out$ as CertificateRequest).DNSNames = __goscriptTuple63[0];
				;(out$ as CertificateRequest).EmailAddresses = __goscriptTuple63[1];
				;(out$ as CertificateRequest).IPAddresses = __goscriptTuple63[2];
				;(out$ as CertificateRequest).URIs = __goscriptTuple63[3]
				err = __goscriptTuple63[4]
				if (err != null) {
					return [null, err]
				}
				break
			}
		}
	}

	return [out, null]
}

export async function CreateRevocationList(rand: io.Reader | null, template: RevocationList | $.VarRef<RevocationList> | null, issuer: Certificate | $.VarRef<Certificate> | null, priv: crypto.Signer | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	const template$: RevocationList = template == null ? $.pointerTarget<RevocationList>(template) : (template as any).__isVarRef === true ? (template as any).value : (template as any).__goValue === undefined ? (template as any) : $.pointerTarget<RevocationList>(template)
	const issuer$: Certificate = issuer == null ? $.pointerTarget<Certificate>(issuer) : (issuer as any).__isVarRef === true ? (issuer as any).value : (issuer as any).__goValue === undefined ? (issuer as any) : $.pointerTarget<Certificate>(issuer)
	if (template == null) {
		return [null, errors.New("x509: template can not be nil")]
	}
	if (issuer == null) {
		return [null, errors.New("x509: issuer can not be nil")]
	}
	if (((issuer$ as Certificate).KeyUsage & 64) == 0) {
		return [null, errors.New("x509: issuer must have the crlSign key usage bit set")]
	}
	if ($.sliceLen((issuer$ as Certificate).SubjectKeyId) == 0) {
		return [null, errors.New("x509: issuer certificate doesn't contain a subject key identifier")]
	}
	if ($.markAsStructValue($.cloneStructValue((template$ as RevocationList).NextUpdate)).Before($.markAsStructValue($.cloneStructValue((template$ as RevocationList).ThisUpdate)))) {
		return [null, errors.New("x509: template.ThisUpdate is after template.NextUpdate")]
	}
	if ((template$ as RevocationList).Number == null) {
		return [null, errors.New("x509: template contains nil Number field")]
	}

	let [signatureAlgorithm, algorithmIdentifier, err] = await signingParamsForKey(priv, (template$ as RevocationList).SignatureAlgorithm)
	if (err != null) {
		return [null, err]
	}

	let revokedCerts: $.Slice<pkix2.RevokedCertificate> = null! as $.Slice<pkix2.RevokedCertificate>
	// Only process the deprecated RevokedCertificates field if it is populated
	// and the new RevokedCertificateEntries field is not populated.
	if (($.sliceLen((template$ as RevocationList).RevokedCertificates) > 0) && ($.sliceLen((template$ as RevocationList).RevokedCertificateEntries) == 0)) {
		// Force revocation times to UTC per RFC 5280.
		revokedCerts = $.makeSlice<pkix2.RevokedCertificate>($.sliceLen((template$ as RevocationList).RevokedCertificates), undefined, undefined, () => new pkix2.RevokedCertificate(undefined, true))
		for (let __goscriptRangeTarget40 = (template$ as RevocationList).RevokedCertificates, __goscriptRangeWindow40 = $.sliceRange(__goscriptRangeTarget40), __goscriptSliceWindow2 = $.sliceRange(revokedCerts), i = 0; i < __goscriptRangeWindow40.length; i++) {
			let rc = ((__goscriptRangeWindow40.backing[__goscriptRangeWindow40.offset + i] as pkix2.RevokedCertificate)).clone()
			$.assignStruct(rc.RevocationTime, $.markAsStructValue($.cloneStructValue(rc.RevocationTime)).UTC())
			$.assignStruct((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)], rc)
		}
	} else {
		// Convert the ReasonCode field to a proper extension, and force revocation
		// times to UTC per RFC 5280.
		revokedCerts = $.makeSlice<pkix2.RevokedCertificate>($.sliceLen((template$ as RevocationList).RevokedCertificateEntries), undefined, undefined, () => new pkix2.RevokedCertificate(undefined, true))
		for (let __goscriptRangeTarget42 = (template$ as RevocationList).RevokedCertificateEntries, __goscriptRangeWindow41 = $.sliceRange(__goscriptRangeTarget42), __goscriptSliceWindow3 = $.sliceRange(revokedCerts), i = 0; i < __goscriptRangeWindow41.length; i++) {
			let rce = ((__goscriptRangeWindow41.backing[__goscriptRangeWindow41.offset + i] as RevocationListEntry)).clone()
			if (rce.SerialNumber == null) {
				return [null, errors.New("x509: template contains entry with nil SerialNumber field")]
			}
			if ($.markAsStructValue($.cloneStructValue(rce.RevocationTime)).IsZero()) {
				return [null, errors.New("x509: template contains entry with zero RevocationTime field")]
			}

			let rc = (() => { const __goscriptLiteralField15 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(rce.RevocationTime)).UTC())); return new pkix2.RevokedCertificate({SerialNumber: rce.SerialNumber, RevocationTime: __goscriptLiteralField15}, true) })()

			// Copy over any extra extensions, except for a Reason Code extension,
			// because we'll synthesize that ourselves to ensure it is correct.
			let exts: $.Slice<pkix2.Extension> = $.makeSlice<pkix2.Extension>(0, $.sliceLen(rce.ExtraExtensions), undefined, () => new pkix2.Extension(undefined, true))
			for (let __goscriptRangeTarget41 = rce.ExtraExtensions, __goscriptRangeWindow42 = $.sliceRange(__goscriptRangeTarget41), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow42.length; __rangeIndex++) {
				let ext = ((__goscriptRangeWindow42.backing[__goscriptRangeWindow42.offset + __rangeIndex] as pkix2.Extension)).clone()
				if (asn1.ObjectIdentifier_Equal(ext.Id, (oidExtensionReasonCode as asn1.ObjectIdentifier))) {
					return [null, errors.New("x509: template contains entry with ReasonCode ExtraExtension; use ReasonCode field instead")]
				}
				exts = $.appendOne(exts, (ext).clone())
			}

			// Only add a reasonCode extension if the reason is non-zero, as per
			// RFC 5280 Section 5.3.1.
			if (rce.ReasonCode != 0) {
				let __goscriptTuple64: any = await asn1.Marshal($.namedValueInterfaceValue<any>($.int(rce.ReasonCode), "asn1.Enumerated", {}, /* @__PURE__ */ $.basicType("int", "asn1.Enumerated")))
				let reasonBytes: $.Slice<number> = __goscriptTuple64[0]
				let __goscriptShadow18 = __goscriptTuple64[1]
				if (__goscriptShadow18 != null) {
					return [null, __goscriptShadow18]
				}

				exts = $.appendOne(exts, new pkix2.Extension({Id: (oidExtensionReasonCode as asn1.ObjectIdentifier), Value: reasonBytes}, true))
			}

			if ($.sliceLen(exts) > 0) {
				rc.Extensions = exts
			}
			$.assignStruct((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)], rc)
		}
	}

	let __goscriptTuple65: any = await asn1.Marshal($.interfaceValue(new authKeyId({Id: (issuer$ as Certificate).SubjectKeyId}, true), "x509.authKeyId", "x509.authKeyId"))
	let aki: $.Slice<number> = __goscriptTuple65[0]
	err = __goscriptTuple65[1]
	if (err != null) {
		return [null, err]
	}

	{
		let numBytes: $.Slice<number> = big.Int.prototype.Bytes.call((template$ as RevocationList).Number)
		if (($.sliceLen(numBytes) > 20) || (($.sliceLen(numBytes) == 20) && ($.uint(($.arrayIndex(numBytes!, 0) & 0x80), 8) != 0))) {
			return [null, errors.New("x509: CRL number exceeds 20 octets")]
		}
	}
	let __goscriptTuple66: any = await asn1.Marshal($.interfaceValue((template$ as RevocationList).Number, "*big.Int", /* @__PURE__ */ $.pointerType("big.Int")))
	let crlNum: $.Slice<number> = __goscriptTuple66[0]
	err = __goscriptTuple66[1]
	if (err != null) {
		return [null, err]
	}

	// Correctly use the issuer's subject sequence if one is specified.
	let __goscriptTuple67: any = await subjectBytes(issuer)
	let issuerSubject: $.Slice<number> = __goscriptTuple67[0]
	err = __goscriptTuple67[1]
	if (err != null) {
		return [null, err]
	}

	let tbsCertList = (() => { const __goscriptLiteralField16 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((template$ as RevocationList).ThisUpdate)).UTC())); const __goscriptLiteralField17 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((template$ as RevocationList).NextUpdate)).UTC())); return new tbsCertificateList({Version: 1, Signature: algorithmIdentifier, Issuer: new asn1.RawValue({FullBytes: issuerSubject}, true), ThisUpdate: __goscriptLiteralField16, NextUpdate: __goscriptLiteralField17, Extensions: $.arrayToSlice<pkix2.Extension>([new pkix2.Extension({Id: (oidExtensionAuthorityKeyId as asn1.ObjectIdentifier), Value: aki}, true), new pkix2.Extension({Id: (oidExtensionCRLNumber as asn1.ObjectIdentifier), Value: crlNum}, true)])}, true) })()
	if ($.sliceLen(revokedCerts) > 0) {
		tbsCertList.RevokedCertificates = revokedCerts
	}

	if ($.sliceLen((template$ as RevocationList).ExtraExtensions) > 0) {
		tbsCertList.Extensions = $.appendSlice(tbsCertList.Extensions, (template$ as RevocationList).ExtraExtensions)
	}

	let __goscriptTuple68: any = await asn1.Marshal($.interfaceValue((tbsCertList).clone(), "x509.tbsCertificateList", "x509.tbsCertificateList"))
	let tbsCertListContents: $.Slice<number> = __goscriptTuple68[0]
	err = __goscriptTuple68[1]
	if (err != null) {
		return [null, err]
	}

	// Optimization to only marshal this struct once, when signing and
	// then embedding in certificateList below.
	tbsCertList.Raw = (tbsCertListContents as asn1.RawContent)

	let __goscriptTuple69: any = await signTBS(tbsCertListContents, priv, signatureAlgorithm, rand)
	let signature: $.Slice<number> = __goscriptTuple69[0]
	err = __goscriptTuple69[1]
	if (err != null) {
		return [null, err]
	}

	return asn1.Marshal($.interfaceValue(new certificateList({TBSCertList: tbsCertList, SignatureAlgorithm: algorithmIdentifier, SignatureValue: new asn1.BitString({Bytes: signature, BitLength: $.sliceLen(signature) * 8}, true)}, true), "x509.certificateList", "x509.certificateList"))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Equal: (receiver: any, ...args: any[]) => (asn1.ObjectIdentifier_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (asn1.ObjectIdentifier_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Equal", [["other", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({String: (receiver: any, ...args: any[]) => (SignatureAlgorithm_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), hashFunc: (receiver: any, ...args: any[]) => (SignatureAlgorithm_hashFunc as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), isRSAPSS: (receiver: any, ...args: any[]) => (SignatureAlgorithm_isRSAPSS as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int", "x509.SignatureAlgorithm"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("hashFunc", [], [/* @__PURE__ */ $.basicType("uint", "crypto.Hash")]), $.methodSignature("isRSAPSS", [], [/* @__PURE__ */ $.basicType("bool")])])
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

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ({String: (receiver: any, ...args: any[]) => (pkix2.RDNSequence_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType("pkix.AttributeTypeAndValue", "pkix.RelativeDistinguishedNameSET"), "pkix.RDNSequence"))
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= ({Available: (receiver: any, ...args: any[]) => (crypto.Hash_Available as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), HashFunc: (receiver: any, ...args: any[]) => (crypto.Hash_HashFunc as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), New: (receiver: any, ...args: any[]) => (crypto.Hash_New as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => (crypto.Hash_Size as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (crypto.Hash_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic13$value: any
function __goscriptStatic13(): any {
	return __goscriptStatic13$value ??= (/* @__PURE__ */ $.basicType("uint", "crypto.Hash"))
}

var __goscriptStatic14$value: any
function __goscriptStatic14(): any {
	return __goscriptStatic14$value ??= ([$.methodSignature("Available", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("HashFunc", [], [/* @__PURE__ */ $.basicType("uint", "crypto.Hash")]), $.methodSignature("New", [], ["hash.Hash"]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
