// Generated file based on sec1.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as ecdh from "@goscript/crypto/ecdh/index.js"

import * as ecdsa from "@goscript/crypto/ecdsa/index.js"

import * as elliptic from "@goscript/crypto/elliptic/index.js"

import * as asn1 from "@goscript/encoding/asn1/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as pkix from "@goscript/crypto/x509/pkix/index.js"

import * as big from "@goscript/math/big/index.js"

import * as __goscript_pkcs1 from "./pkcs1.gs.ts"

import * as __goscript_pkcs8 from "./pkcs8.gs.ts"

import * as __goscript_x509 from "./x509.gs.ts"
import "@goscript/crypto/ecdh/index.js"
import "@goscript/crypto/ecdsa/index.js"
import "@goscript/crypto/elliptic/index.js"
import "@goscript/encoding/asn1/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/crypto/x509/pkix/index.js"
import "@goscript/math/big/index.js"
import "./pkcs1.gs.ts"
import "./pkcs8.gs.ts"
import "./x509.gs.ts"

$.registerTypePackagePath("crypto/x509", ["x509.ecPrivateKey"])

export class ecPrivateKey {
	public get Version(): number {
		return this._fields.Version
	}

	public set Version(value: number) {
		this._fields.Version = value
	}

	public get PrivateKey(): $.Slice<number> {
		return this._fields.PrivateKey
	}

	public set PrivateKey(value: $.Slice<number>) {
		this._fields.PrivateKey = value
	}

	public get NamedCurveOID(): asn1.ObjectIdentifier {
		return this._fields.NamedCurveOID
	}

	public set NamedCurveOID(value: asn1.ObjectIdentifier) {
		this._fields.NamedCurveOID = value
	}

	public get PublicKey(): asn1.BitString {
		return this._fields.PublicKey
	}

	public set PublicKey(value: asn1.BitString) {
		this._fields.PublicKey = value
	}

	public _fields: {
		Version: number
		PrivateKey: $.Slice<number>
		NamedCurveOID: asn1.ObjectIdentifier
		PublicKey: asn1.BitString
	}

	constructor(init?: Partial<{Version?: number, PrivateKey?: $.Slice<number>, NamedCurveOID?: asn1.ObjectIdentifier, PublicKey?: asn1.BitString}>, __goscriptValue?: boolean) {
		this._fields = {
			Version: init?.Version ?? (0 as number),
			PrivateKey: init?.PrivateKey ?? (null! as $.Slice<number>),
			NamedCurveOID: init?.NamedCurveOID ?? (null! as asn1.ObjectIdentifier),
			PublicKey: init?.PublicKey ? init.PublicKey.clone() : new asn1.BitString(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ecPrivateKey {
		return new ecPrivateKey(this, true)
	}

	public __goscriptAssign(source: ecPrivateKey): void {
		const target = this._fields
		const values = source._fields
		target.Version = values.Version
		target.PrivateKey = values.PrivateKey
		target.NamedCurveOID = values.NamedCurveOID
		$.assignStruct(target.PublicKey, values.PublicKey)
	}

	static __typeInfo = $.registerStructType(
		"x509.ecPrivateKey",
		() => new ecPrivateKey(),
		() => [],
		ecPrivateKey,
		() => [/* @__PURE__ */ $.structField("Version", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("PrivateKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, true), /* @__PURE__ */ $.structField("NamedCurveOID", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"), [2], 32, true, { tag: "asn1:\"optional,explicit,tag:0\"" }), /* @__PURE__ */ $.structField("PublicKey", "asn1.BitString", [3], 56, true, { tag: "asn1:\"optional,explicit,tag:1\"" })]
	)
}

export const ecPrivKeyVersion: number = 1

export async function ParseECPrivateKey(der: $.Slice<number>): globalThis.Promise<[ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null, $.GoError]> {
	return parseECPrivateKey(null, der)
}

export async function MarshalECPrivateKey(key: ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let __goscriptTuple0: any = await __goscript_x509.oidFromNamedCurve($.pointerValue<ecdsa.PrivateKey>(key).PublicKey.Curve)
	let oid: asn1.ObjectIdentifier = (__goscriptTuple0[0] as asn1.ObjectIdentifier)
	let ok = __goscriptTuple0[1]
	if (!ok) {
		return [null, errors.New("x509: unknown elliptic curve")]
	}

	return marshalECPrivateKeyWithOID(key, (oid as asn1.ObjectIdentifier))
}

export async function marshalECPrivateKeyWithOID(key: ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null, oid: asn1.ObjectIdentifier): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let __goscriptTuple1: any = await (key !== null && (key as any).__isVarRef !== true && (key as any).__goValue === undefined ? ((key as any) as ecdsa.PrivateKey).Bytes() : ecdsa.PrivateKey.prototype.Bytes.call(key))
	let privateKey: $.Slice<number> = __goscriptTuple1[0]
	let err = __goscriptTuple1[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple2: any = await $.pointerValue<ecdsa.PrivateKey>(key).PublicKey.Bytes()
	let publicKey: $.Slice<number> = __goscriptTuple2[0]
	err = __goscriptTuple2[1]
	if (err != null) {
		return [null, err]
	}
	return asn1.Marshal($.interfaceValue(new ecPrivateKey({Version: 1, PrivateKey: privateKey, NamedCurveOID: (oid as asn1.ObjectIdentifier), PublicKey: new asn1.BitString({Bytes: publicKey}, true)}, true), "x509.ecPrivateKey", "x509.ecPrivateKey"))
}

export async function marshalECDHPrivateKey(key: ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	return asn1.Marshal($.interfaceValue((() => { const __goscriptLiteralField0 = ecdh.PrivateKey.prototype.Bytes.call($.pointerValue<ecdh.PrivateKey>(key)); return new ecPrivateKey({Version: 1, PrivateKey: __goscriptLiteralField0, PublicKey: (() => { const __goscriptLiteralField1 = ecdh.PublicKey.prototype.Bytes.call($.pointerValue<ecdh.PublicKey>(ecdh.PrivateKey.prototype.PublicKey.call($.pointerValue<ecdh.PrivateKey>(key)))); return new asn1.BitString({Bytes: __goscriptLiteralField1}, true) })()}, true) })(), "x509.ecPrivateKey", "x509.ecPrivateKey"))
}

export async function parseECPrivateKey(namedCurveOID: $.VarRef<asn1.ObjectIdentifier> | null, der: $.Slice<number>): globalThis.Promise<[ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null, $.GoError]> {
	let key: ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null = null! as ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null
	let err: $.GoError = null! as $.GoError
	let privKey: $.VarRef<ecPrivateKey> = $.varRef(new ecPrivateKey(undefined, true))
	{
		let [, __goscriptShadow0] = await asn1.Unmarshal(der, $.interfaceValue(privKey, "*x509.ecPrivateKey", /* @__PURE__ */ $.pointerType("x509.ecPrivateKey")))
		if (__goscriptShadow0 != null) {
			{
				let [, __goscriptShadow1] = await asn1.Unmarshal(der, $.interfaceValue(new __goscript_pkcs8.pkcs8(), "*x509.pkcs8", /* @__PURE__ */ $.pointerType("x509.pkcs8")))
				if (__goscriptShadow1 == null) {
					return [null, errors.New("x509: failed to parse private key (use ParsePKCS8PrivateKey instead for this key format)")]
				}
			}
			{
				let [, __goscriptShadow2] = await asn1.Unmarshal(der, $.interfaceValue(new __goscript_pkcs1.pkcs1PrivateKey(), "*x509.pkcs1PrivateKey", /* @__PURE__ */ $.pointerType("x509.pkcs1PrivateKey")))
				if (__goscriptShadow2 == null) {
					return [null, errors.New("x509: failed to parse private key (use ParsePKCS1PrivateKey instead for this key format)")]
				}
			}
			return [null, errors.New($.concatString("x509: failed to parse EC private key: ", (__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow0)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
		}
	}
	if (privKey.value.Version != 1) {
		return [null, fmt.Errorf("x509: unknown EC private key version %d", $.basicInterfaceValue(privKey.value.Version, "int"))]
	}

	let curve: elliptic.Curve | null = null! as elliptic.Curve | null
	if (namedCurveOID != null) {
		curve = await __goscript_x509.namedCurveFromOID(($.pointerValue<asn1.ObjectIdentifier>(namedCurveOID) as asn1.ObjectIdentifier))
	} else {
		curve = await __goscript_x509.namedCurveFromOID((privKey.value.NamedCurveOID as asn1.ObjectIdentifier))
	}
	if (curve == null) {
		return [null, errors.New("x509: unknown elliptic curve")]
	}

	let size = globalThis.Math.trunc((big.Int.prototype.BitLen.call($.pointerValue<elliptic.CurveParams>(((__goscriptAwait = (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? (curve as Exclude<elliptic.Curve, null>) : $.pointerValue<Exclude<elliptic.Curve, null>>(curve)).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null)).N) + 7) / 8)
	let privateKey: $.Slice<number> = $.makeSlice<number>(size, undefined, "byte")

	// Some private keys have leading zero padding. This is invalid
	// according to [SEC1], but this code will ignore it.
	while ($.sliceLen(privKey.value.PrivateKey) > $.sliceLen(privateKey)) {
		if ($.arrayIndex(privKey.value.PrivateKey!, 0) != 0) {
			return [null, errors.New("x509: invalid private key length")]
		}
		privKey.value.PrivateKey = $.goSlice(privKey.value.PrivateKey, 1, undefined)
	}

	// Some private keys remove all leading zeros, this is also invalid
	// according to [SEC1] but since OpenSSL used to do this, we ignore
	// this too.
	$.copy($.goSlice(privateKey, $.sliceLen(privateKey) - $.sliceLen(privKey.value.PrivateKey), undefined), privKey.value.PrivateKey)

	return ecdsa.ParseRawPrivateKey(curve, privateKey)
}

var __goscriptAwait: any
