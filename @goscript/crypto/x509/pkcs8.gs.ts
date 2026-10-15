// Generated file based on pkcs8.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as ecdh from "@goscript/crypto/ecdh/index.js"

import * as ecdsa from "@goscript/crypto/ecdsa/index.js"

import * as ed25519 from "@goscript/crypto/ed25519/index.js"

import * as mldsa from "@goscript/crypto/mldsa/index.js"

import * as rsa from "@goscript/crypto/rsa/index.js"

import * as pkix from "@goscript/crypto/x509/pkix/index.js"

import * as asn1 from "@goscript/encoding/asn1/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as elliptic from "@goscript/crypto/elliptic/index.js"

import * as big from "@goscript/math/big/index.js"

import * as __goscript_pkcs1 from "./pkcs1.gs.ts"

import * as __goscript_sec1 from "./sec1.gs.ts"

import * as __goscript_x509 from "./x509.gs.ts"
import "@goscript/crypto/ecdh/index.js"
import "@goscript/crypto/ecdsa/index.js"
import "@goscript/crypto/ed25519/index.js"
import "@goscript/crypto/mldsa/index.js"
import "@goscript/crypto/rsa/index.js"
import "@goscript/crypto/x509/pkix/index.js"
import "@goscript/encoding/asn1/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/crypto/elliptic/index.js"
import "@goscript/math/big/index.js"
import "./pkcs1.gs.ts"
import "./sec1.gs.ts"
import "./x509.gs.ts"

$.registerTypePackagePath("crypto/x509", ["x509.pkcs8"])

export class pkcs8 {
	public get Version(): number {
		return this._fields.Version
	}

	public set Version(value: number) {
		this._fields.Version = value
	}

	public get Algo(): pkix.AlgorithmIdentifier {
		return this._fields.Algo
	}

	public set Algo(value: pkix.AlgorithmIdentifier) {
		this._fields.Algo = value
	}

	public get PrivateKey(): $.Slice<number> {
		return this._fields.PrivateKey
	}

	public set PrivateKey(value: $.Slice<number>) {
		this._fields.PrivateKey = value
	}

	public _fields: {
		Version: number
		Algo: pkix.AlgorithmIdentifier
		PrivateKey: $.Slice<number>
	}

	constructor(init?: Partial<{Version?: number, Algo?: pkix.AlgorithmIdentifier, PrivateKey?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Version: init?.Version ?? (0 as number),
			Algo: init?.Algo ? init.Algo.clone() : new pkix.AlgorithmIdentifier(undefined, true),
			PrivateKey: init?.PrivateKey ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pkcs8 {
		return new pkcs8(this, true)
	}

	public __goscriptAssign(source: pkcs8): void {
		const target = this._fields
		const values = source._fields
		target.Version = values.Version
		$.assignStruct(target.Algo, values.Algo)
		target.PrivateKey = values.PrivateKey
	}

	static __typeInfo = $.registerStructType(
		"x509.pkcs8",
		() => new pkcs8(),
		() => [],
		pkcs8,
		() => [/* @__PURE__ */ $.structField("Version", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("Algo", "pkix.AlgorithmIdentifier", [1], 8, true), /* @__PURE__ */ $.structField("PrivateKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 104, true)]
	)
}

export async function ParsePKCS8PrivateKey(der: $.Slice<number>): globalThis.Promise<[any, $.GoError]> {
	let key: any = null! as any
	let err: $.GoError = null! as $.GoError
	let privKey: $.VarRef<pkcs8> = $.varRef(new pkcs8(undefined, true))
	{
		let [, __goscriptShadow0] = await asn1.Unmarshal(der, $.interfaceValue(privKey, "*x509.pkcs8", /* @__PURE__ */ $.pointerType("x509.pkcs8")))
		if (__goscriptShadow0 != null) {
			{
				let [, __goscriptShadow1] = await asn1.Unmarshal(der, $.interfaceValue(new __goscript_sec1.ecPrivateKey(), "*x509.ecPrivateKey", /* @__PURE__ */ $.pointerType("x509.ecPrivateKey")))
				if (__goscriptShadow1 == null) {
					return [null, errors.New("x509: failed to parse private key (use ParseECPrivateKey instead for this key format)")]
				}
			}
			{
				let [, __goscriptShadow2] = await asn1.Unmarshal(der, $.interfaceValue(new __goscript_pkcs1.pkcs1PrivateKey(), "*x509.pkcs1PrivateKey", /* @__PURE__ */ $.pointerType("x509.pkcs1PrivateKey")))
				if (__goscriptShadow2 == null) {
					return [null, errors.New("x509: failed to parse private key (use ParsePKCS1PrivateKey instead for this key format)")]
				}
			}
			return [null, __goscriptShadow0]
		}
	}
	switch ((true as boolean)) {
		case asn1.ObjectIdentifier_Equal(privKey.value.Algo.Algorithm, (__goscript_x509.oidPublicKeyRSA as asn1.ObjectIdentifier)):
		{
			let __goscriptTuple0: any = await __goscript_pkcs1.ParsePKCS1PrivateKey(privKey.value.PrivateKey)
			key = $.interfaceValue(__goscriptTuple0[0], "*rsa.PrivateKey", /* @__PURE__ */ $.pointerType("rsa.PrivateKey"))
			err = __goscriptTuple0[1]
			if (err != null) {
				return [null, errors.New($.concatString("x509: failed to parse RSA private key embedded in PKCS#8: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
			}
			return [key, null]
			break
		}
		case asn1.ObjectIdentifier_Equal(privKey.value.Algo.Algorithm, (__goscript_x509.oidPublicKeyECDSA as asn1.ObjectIdentifier)):
		{
			let bytes: $.Slice<number> = privKey.value.Algo.Parameters.FullBytes
			let namedCurveOID: $.VarRef<asn1.ObjectIdentifier> | null = $.varRef<asn1.ObjectIdentifier>(null! as asn1.ObjectIdentifier)
			{
				let [, __goscriptShadow3] = await asn1.Unmarshal(bytes, $.namedValueInterfaceValue<any>(namedCurveOID, "*asn1.ObjectIdentifier", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
				if (__goscriptShadow3 != null) {
					namedCurveOID = null
				}
			}
			let __goscriptTuple1: any = await __goscript_sec1.parseECPrivateKey(namedCurveOID, privKey.value.PrivateKey)
			key = $.interfaceValue(__goscriptTuple1[0], "*ecdsa.PrivateKey", /* @__PURE__ */ $.pointerType("ecdsa.PrivateKey"))
			err = __goscriptTuple1[1]
			if (err != null) {
				return [null, errors.New($.concatString("x509: failed to parse EC private key embedded in PKCS#8: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
			}
			return [key, null]
			break
		}
		case asn1.ObjectIdentifier_Equal(privKey.value.Algo.Algorithm, (__goscript_x509.oidPublicKeyEd25519 as asn1.ObjectIdentifier)):
		{
			{
				let l = $.sliceLen(privKey.value.Algo.Parameters.FullBytes)
				if (l != 0) {
					return [null, errors.New("x509: invalid Ed25519 private key parameters")]
				}
			}
			let curvePrivateKey: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
			{
				let [, __goscriptShadow4] = await asn1.Unmarshal(privKey.value.PrivateKey, $.interfaceValue(curvePrivateKey, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
				if (__goscriptShadow4 != null) {
					return [null, fmt.Errorf("x509: invalid Ed25519 private key: %v", (__goscriptShadow4 as any))]
				}
			}
			{
				let l = $.sliceLen(curvePrivateKey.value)
				if (l != 32) {
					return [null, fmt.Errorf("x509: invalid Ed25519 private key length: %d", $.basicInterfaceValue(l, "int"))]
				}
			}
			return [$.namedValueInterfaceValue<any>(await ed25519.NewKeyFromSeed(curvePrivateKey.value), "ed25519.PrivateKey", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), null]
			break
		}
		case asn1.ObjectIdentifier_Equal(privKey.value.Algo.Algorithm, (__goscript_x509.oidPublicKeyMLDSA44 as asn1.ObjectIdentifier)):
		case asn1.ObjectIdentifier_Equal(privKey.value.Algo.Algorithm, (__goscript_x509.oidPublicKeyMLDSA65 as asn1.ObjectIdentifier)):
		case asn1.ObjectIdentifier_Equal(privKey.value.Algo.Algorithm, (__goscript_x509.oidPublicKeyMLDSA87 as asn1.ObjectIdentifier)):
		{
			{
				let l = $.sliceLen(privKey.value.Algo.Parameters.FullBytes)
				if (l != 0) {
					return [null, errors.New("x509: invalid ML-DSA private key parameters")]
				}
			}
			{
				let l = $.sliceLen(privKey.value.PrivateKey)
				if (l == 0) {
					return [null, fmt.Errorf("x509: invalid ML-DSA private key length: %d", $.basicInterfaceValue(l, "int"))]
				}
			}
			switch ($.arrayIndex(privKey.value.PrivateKey!, 0)) {
				case 0x80:
				{
					break
				}
				case 0x04:
				{
					return [null, errors.New("x509: semi-expanded ML-DSA private keys without seed are not supported")]
					break
				}
				case 0x30:
				{
					return [null, errors.New("x509: ML-DSA private keys with both seed and expanded key are not supported, use e.g. \"openssl pkey -provparam ml-dsa.output_formats=seed-only\" to convert to a seed-only key")]
					break
				}
				default:
				{
					return [null, fmt.Errorf("x509: invalid ML-DSA private key: invalid ASN.1 tag %02x", $.basicInterfaceValue($.arrayIndex(privKey.value.PrivateKey!, 0), "byte", "uint8"))]
					break
				}
			}
			{
				let l = $.sliceLen(privKey.value.PrivateKey)
				if (l != 34) {
					return [null, fmt.Errorf("x509: invalid ML-DSA private key length: %d", $.basicInterfaceValue(l, "int"))]
				}
			}
			if ($.arrayIndex(privKey.value.PrivateKey!, 1) != 32) {
				return [null, fmt.Errorf("x509: invalid ML-DSA private key ASN.1 encoding")]
			}
			let [params, ok] = __goscript_x509.mldsaParametersFromOID((privKey.value.Algo.Algorithm as asn1.ObjectIdentifier))
			if (!ok) {
				return [null, errors.New("x509: unknown ML-DSA parameters")]
			}
			const __goscriptReturn0 = await mldsa.NewPrivateKey(params, $.goSlice(privKey.value.PrivateKey, 2, undefined))
			return [$.interfaceValue(__goscriptReturn0[0], "*mldsa.PrivateKey", /* @__PURE__ */ $.pointerType("mldsa.PrivateKey")), __goscriptReturn0[1]]
			break
		}
		case asn1.ObjectIdentifier_Equal(privKey.value.Algo.Algorithm, (__goscript_x509.oidPublicKeyX25519 as asn1.ObjectIdentifier)):
		{
			{
				let l = $.sliceLen(privKey.value.Algo.Parameters.FullBytes)
				if (l != 0) {
					return [null, errors.New("x509: invalid X25519 private key parameters")]
				}
			}
			let curvePrivateKey: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
			{
				let [, __goscriptShadow5] = await asn1.Unmarshal(privKey.value.PrivateKey, $.interfaceValue(curvePrivateKey, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
				if (__goscriptShadow5 != null) {
					return [null, fmt.Errorf("x509: invalid X25519 private key: %v", (__goscriptShadow5 as any))]
				}
			}
			const __goscriptReturn1 = await $.pointerValue<Exclude<ecdh.Curve, null>>(ecdh.X25519()).NewPrivateKey(curvePrivateKey.value)
			return [$.interfaceValue(__goscriptReturn1[0], "*ecdh.PrivateKey", /* @__PURE__ */ $.pointerType("ecdh.PrivateKey")), __goscriptReturn1[1]]
			break
		}
		default:
		{
			return [null, fmt.Errorf("x509: PKCS#8 wrapping contained private key with unknown algorithm: %v", $.namedValueInterfaceValue<any>(privKey.value.Algo.Algorithm, "asn1.ObjectIdentifier", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic2()))]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function MarshalPKCS8PrivateKey(key: any): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let privKey: pkcs8 = new pkcs8(undefined, true)

	{
		const __goscriptTypeSwitchValue = key
		switch (true) {
			case $.typeAssert<rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PrivateKey")).ok:
				{
					let k: rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null = $.typeAssert<rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PrivateKey")).value
					$.assignStruct(privKey.Algo, new pkix.AlgorithmIdentifier({Algorithm: (__goscript_x509.oidPublicKeyRSA as asn1.ObjectIdentifier), Parameters: $.pointerValue<asn1.RawValue>(asn1.__goscript_get_NullRawValue())}, true))
					await (k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as rsa.PrivateKey).Precompute() : rsa.PrivateKey.prototype.Precompute.call(k))
					{
						let err = await (k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as rsa.PrivateKey).Validate() : rsa.PrivateKey.prototype.Validate.call(k))
						if (err != null) {
							return [null, err]
						}
					}
					privKey.PrivateKey = await __goscript_pkcs1.MarshalPKCS1PrivateKey(k)
				}
				break
			case $.typeAssert<ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdsa.PrivateKey")).ok:
				{
					let k: ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null = $.typeAssert<ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdsa.PrivateKey")).value
					let __goscriptTuple2: any = await __goscript_x509.oidFromNamedCurve($.pointerValue<ecdsa.PrivateKey>(k).PublicKey.Curve)
					let oid: asn1.ObjectIdentifier = (__goscriptTuple2[0] as asn1.ObjectIdentifier)
					let ok = __goscriptTuple2[1]
					if (!ok) {
						return [null, errors.New("x509: unknown curve while marshaling to PKCS#8")]
					}
					let __goscriptTuple3: any = await asn1.Marshal($.namedValueInterfaceValue<any>(oid, "asn1.ObjectIdentifier", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic2()))
					let oidBytes: $.Slice<number> = __goscriptTuple3[0]
					let err = __goscriptTuple3[1]
					if (err != null) {
						return [null, errors.New($.concatString("x509: failed to marshal curve OID: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
					}
					$.assignStruct(privKey.Algo, new pkix.AlgorithmIdentifier({Algorithm: (__goscript_x509.oidPublicKeyECDSA as asn1.ObjectIdentifier), Parameters: new asn1.RawValue({FullBytes: oidBytes}, true)}, true))
					{
						let __goscriptTuple4: any = await __goscript_sec1.marshalECPrivateKeyWithOID(k, (null as asn1.ObjectIdentifier))
						privKey.PrivateKey = __goscriptTuple4[0]
						err = __goscriptTuple4[1]
						if (err != null) {
							return [null, errors.New($.concatString("x509: failed to marshal EC private key while building PKCS#8: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
						}
					}
				}
				break
			case $.typeAssert<ed25519.PrivateKey>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PrivateKey")).ok:
				{
					let k: ed25519.PrivateKey = $.typeAssert<ed25519.PrivateKey>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PrivateKey")).value
					$.assignStruct(privKey.Algo, new pkix.AlgorithmIdentifier({Algorithm: (__goscript_x509.oidPublicKeyEd25519 as asn1.ObjectIdentifier)}, true))
					let __goscriptTuple5: any = await asn1.Marshal($.interfaceValue(ed25519.PrivateKey_Seed(k), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
					let curvePrivateKey: $.Slice<number> = __goscriptTuple5[0]
					let err = __goscriptTuple5[1]
					if (err != null) {
						return [null, fmt.Errorf("x509: failed to marshal private key: %v", (err as any))]
					}
					privKey.PrivateKey = curvePrivateKey
				}
				break
			case $.typeAssert<mldsa.PrivateKey | $.VarRef<mldsa.PrivateKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mldsa.PrivateKey")).ok:
				{
					let k: mldsa.PrivateKey | $.VarRef<mldsa.PrivateKey> | null = $.typeAssert<mldsa.PrivateKey | $.VarRef<mldsa.PrivateKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mldsa.PrivateKey")).value
					let __goscriptTuple6: any = __goscript_x509.oidFromMLDSAParameters(mldsa.PublicKey.prototype.Parameters.call((k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as mldsa.PrivateKey).PublicKey() : mldsa.PrivateKey.prototype.PublicKey.call(k))))
					let oid: asn1.ObjectIdentifier = (__goscriptTuple6[0] as asn1.ObjectIdentifier)
					let ok = __goscriptTuple6[1]
					if (!ok) {
						return [null, errors.New("x509: unknown ML-DSA parameters while marshaling to PKCS#8")]
					}
					$.assignStruct(privKey.Algo, new pkix.AlgorithmIdentifier({Algorithm: (oid as asn1.ObjectIdentifier)}, true))
					privKey.PrivateKey = $.appendSlice(new Uint8Array([128, 32]) as $.Slice<number>, (k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as mldsa.PrivateKey).Bytes() : mldsa.PrivateKey.prototype.Bytes.call(k)), $.byteSliceHint)
				}
				break
			case $.typeAssert<ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdh.PrivateKey")).ok:
				{
					let k: ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null = $.typeAssert<ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdh.PrivateKey")).value
					if ($.comparableEqual(ecdh.PrivateKey.prototype.Curve.call($.pointerValue<ecdh.PrivateKey>(k)), ecdh.X25519())) {
						$.assignStruct(privKey.Algo, new pkix.AlgorithmIdentifier({Algorithm: (__goscript_x509.oidPublicKeyX25519 as asn1.ObjectIdentifier)}, true))
						let err: $.GoError = null! as $.GoError
						{
							let __goscriptTuple7: any = await asn1.Marshal($.interfaceValue(ecdh.PrivateKey.prototype.Bytes.call($.pointerValue<ecdh.PrivateKey>(k)), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
							privKey.PrivateKey = __goscriptTuple7[0]
							err = __goscriptTuple7[1]
							if (err != null) {
								return [null, fmt.Errorf("x509: failed to marshal private key: %v", (err as any))]
							}
						}
					} else {
						let __goscriptTuple8: any = __goscript_x509.oidFromECDHCurve(ecdh.PrivateKey.prototype.Curve.call($.pointerValue<ecdh.PrivateKey>(k)))
						let oid: asn1.ObjectIdentifier = (__goscriptTuple8[0] as asn1.ObjectIdentifier)
						let ok = __goscriptTuple8[1]
						if (!ok) {
							return [null, errors.New("x509: unknown curve while marshaling to PKCS#8")]
						}
						let __goscriptTuple9: any = await asn1.Marshal($.namedValueInterfaceValue<any>(oid, "asn1.ObjectIdentifier", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic2()))
						let oidBytes: $.Slice<number> = __goscriptTuple9[0]
						let err = __goscriptTuple9[1]
						if (err != null) {
							return [null, errors.New($.concatString("x509: failed to marshal curve OID: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
						}
						$.assignStruct(privKey.Algo, new pkix.AlgorithmIdentifier({Algorithm: (__goscript_x509.oidPublicKeyECDSA as asn1.ObjectIdentifier), Parameters: new asn1.RawValue({FullBytes: oidBytes}, true)}, true))
						{
							let __goscriptTuple10: any = await __goscript_sec1.marshalECDHPrivateKey(k)
							privKey.PrivateKey = __goscriptTuple10[0]
							err = __goscriptTuple10[1]
							if (err != null) {
								return [null, errors.New($.concatString("x509: failed to marshal EC private key while building PKCS#8: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
							}
						}
					}
				}
				break
			default:
				{
					let k: any = __goscriptTypeSwitchValue
					return [null, fmt.Errorf("x509: unknown key type while marshaling PKCS#8: %T", key)]
				}
				break
		}
	}

	return asn1.Marshal($.interfaceValue((privKey).clone(), "x509.pkcs8", "x509.pkcs8"))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Equal: (receiver: any, ...args: any[]) => (asn1.ObjectIdentifier_Equal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (asn1.ObjectIdentifier_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier")))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Equal", [["other", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Equal: (receiver: any, ...args: any[]) => (ed25519.PrivateKey_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Public: (receiver: any, ...args: any[]) => (ed25519.PrivateKey_Public as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seed: (receiver: any, ...args: any[]) => (ed25519.PrivateKey_Seed as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Sign: (receiver: any, ...args: any[]) => (ed25519.PrivateKey_Sign as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PrivateKey"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Equal", [["x", "crypto.PrivateKey"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Public", [], ["crypto.PublicKey"]), $.methodSignature("Seed", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Sign", [["rand", "io.Reader"], ["message", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["opts", "crypto.SignerOpts"]], [["signature", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({Equal: (receiver: any, ...args: any[]) => (asn1.ObjectIdentifier_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (asn1.ObjectIdentifier_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"), "asn1.ObjectIdentifier"))
}

var __goscriptAwait: any
