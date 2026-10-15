// Generated file based on ecdsa.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as ecdh from "@goscript/crypto/ecdh/index.js"

import * as elliptic from "@goscript/crypto/elliptic/index.js"

import * as boring from "@goscript/crypto/internal/boring/index.js"

import * as bbig from "@goscript/crypto/internal/boring/bbig/index.js"

import * as ecdsa from "@goscript/crypto/internal/fips140/ecdsa/index.js"

import * as nistec from "@goscript/crypto/internal/fips140/nistec/index.js"

import * as fips140cache from "@goscript/crypto/internal/fips140cache/index.js"

import * as fips140hash from "@goscript/crypto/internal/fips140hash/index.js"

import * as fips140only from "@goscript/crypto/internal/fips140only/index.js"

import * as rand2 from "@goscript/crypto/internal/rand/index.js"

import * as sha512 from "@goscript/crypto/sha512/index.js"

import * as subtle from "@goscript/crypto/subtle/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as big from "@goscript/math/big/index.js"

import * as cryptobyte from "@goscript/vendor/golang.org/x/crypto/cryptobyte/index.js"

import * as asn1 from "@goscript/vendor/golang.org/x/crypto/cryptobyte/asn1/index.js"

import * as hash2 from "@goscript/hash/index.js"

import * as __goscript_ecdsa_legacy from "./ecdsa_legacy.gs.ts"

import * as __goscript_notboring from "./notboring.gs.ts"
import "@goscript/crypto/index.js"
import "@goscript/crypto/ecdh/index.js"
import "@goscript/crypto/elliptic/index.js"
import "@goscript/crypto/internal/boring/index.js"
import "@goscript/crypto/internal/boring/bbig/index.js"
import "@goscript/crypto/internal/fips140/ecdsa/index.js"
import "@goscript/crypto/internal/fips140/nistec/index.js"
import "@goscript/crypto/internal/fips140cache/index.js"
import "@goscript/crypto/internal/fips140hash/index.js"
import "@goscript/crypto/internal/fips140only/index.js"
import "@goscript/crypto/internal/rand/index.js"
import "@goscript/crypto/sha512/index.js"
import "@goscript/crypto/subtle/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/math/big/index.js"
import "@goscript/vendor/golang.org/x/crypto/cryptobyte/index.js"
import "@goscript/vendor/golang.org/x/crypto/cryptobyte/asn1/index.js"
import "@goscript/hash/index.js"
import "./ecdsa_legacy.gs.ts"
import "./notboring.gs.ts"

$.registerTypePackagePath("crypto/ecdsa", ["ecdsa.PublicKey", "ecdsa.PrivateKey"])

export class PublicKey {
	public get Curve(): elliptic.Curve | null {
		return this._fields.Curve
	}

	public set Curve(value: elliptic.Curve | null) {
		this._fields.Curve = value
	}

	// X, Y are the coordinates of the public key point.
	//
	// Deprecated: modifying the raw coordinates can produce invalid keys, and may
	// invalidate internal optimizations; moreover, [big.Int] methods are not
	// suitable for operating on cryptographic values. To encode and decode
	// PublicKey values, use [PublicKey.Bytes] and [ParseUncompressedPublicKey]
	// or [crypto/x509.MarshalPKIXPublicKey] and [crypto/x509.ParsePKIXPublicKey].
	// For ECDH, use [crypto/ecdh]. For lower-level elliptic curve operations,
	// use a third-party module like filippo.io/nistec.
	public get X(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.X
	}

	public set X(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.X = value
	}

	// X, Y are the coordinates of the public key point.
	//
	// Deprecated: modifying the raw coordinates can produce invalid keys, and may
	// invalidate internal optimizations; moreover, [big.Int] methods are not
	// suitable for operating on cryptographic values. To encode and decode
	// PublicKey values, use [PublicKey.Bytes] and [ParseUncompressedPublicKey]
	// or [crypto/x509.MarshalPKIXPublicKey] and [crypto/x509.ParsePKIXPublicKey].
	// For ECDH, use [crypto/ecdh]. For lower-level elliptic curve operations,
	// use a third-party module like filippo.io/nistec.
	public get Y(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.Y
	}

	public set Y(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.Y = value
	}

	public _fields: {
		Curve: elliptic.Curve | null
		X: big.Int | $.VarRef<big.Int> | null
		Y: big.Int | $.VarRef<big.Int> | null
	}

	constructor(init?: Partial<{Curve?: elliptic.Curve | null, X?: big.Int | $.VarRef<big.Int> | null, Y?: big.Int | $.VarRef<big.Int> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Curve: init?.Curve ?? (null! as elliptic.Curve | null),
			X: init?.X ?? (null! as big.Int | $.VarRef<big.Int> | null),
			Y: init?.Y ?? (null! as big.Int | $.VarRef<big.Int> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PublicKey {
		return new PublicKey(this, true)
	}

	public __goscriptAssign(source: PublicKey): void {
		const target = this._fields
		const values = source._fields
		target.Curve = $.assignFieldValue(target.Curve, values.Curve, "elliptic.Curve")
		target.X = values.X
		target.Y = values.Y
	}

	public async Bytes(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const pub: PublicKey | $.VarRef<PublicKey> | null = this;
		{
			let __goscriptSwitch0 = $.pointerValue<PublicKey>(pub).Curve
			switch ((true as boolean)) {
				case $.comparableEqual(__goscriptSwitch0, await elliptic.P224()):
				{
					return publicKeyBytes(__goscriptStatic0(), await ecdsa.P224(), pub)
					break
				}
				case $.comparableEqual(__goscriptSwitch0, await elliptic.P256()):
				{
					return publicKeyBytes(__goscriptStatic1(), await ecdsa.P256(), pub)
					break
				}
				case $.comparableEqual(__goscriptSwitch0, await elliptic.P384()):
				{
					return publicKeyBytes(__goscriptStatic2(), await ecdsa.P384(), pub)
					break
				}
				case $.comparableEqual(__goscriptSwitch0, await elliptic.P521()):
				{
					return publicKeyBytes(__goscriptStatic3(), await ecdsa.P521(), pub)
					break
				}
				default:
				{
					return [null, errors.New("ecdsa: curve not supported by PublicKey.Bytes")]
					break
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async ECDH(): globalThis.Promise<[ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null, $.GoError]> {
		const pub: PublicKey | $.VarRef<PublicKey> | null = this;
		let c = await curveToECDH($.pointerValue<PublicKey>(pub).Curve)
		if (c == null) {
			return [null, errors.New("ecdsa: unsupported curve by crypto/ecdh")]
		}
		let __goscriptTuple0: any = await (pub !== null && (pub as any).__isVarRef !== true && (pub as any).__goValue === undefined ? ((pub as any) as PublicKey).Bytes() : PublicKey.prototype.Bytes.call(pub))
		let k: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<ecdh.Curve, null>) : $.pointerValue<Exclude<ecdh.Curve, null>>(c)).NewPublicKey(k)
	}

	public Equal(x: crypto.PublicKey | null): boolean {
		const pub: PublicKey | $.VarRef<PublicKey> | null = this;
		const pub$: PublicKey = pub == null ? $.pointerTarget<PublicKey>(pub) : (pub as any).__isVarRef === true ? (pub as any).value : (pub as any).__goValue === undefined ? (pub as any) : $.pointerTarget<PublicKey>(pub)
		let __goscriptTuple1: any = $.typeAssertTuple<PublicKey | $.VarRef<PublicKey> | null>(x, /* @__PURE__ */ $.pointerType("ecdsa.PublicKey"))
		let xx: PublicKey | $.VarRef<PublicKey> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		let xx$: PublicKey = xx == null ? $.pointerTarget<PublicKey>(xx) : (xx as any).__isVarRef === true ? (xx as any).value : (xx as any).__goValue === undefined ? (xx as any) : $.pointerTarget<PublicKey>(xx)
		if (!ok) {
			return false
		}
		return (bigIntEqual((pub$ as PublicKey).X, (xx$ as PublicKey).X) && bigIntEqual((pub$ as PublicKey).Y, (xx$ as PublicKey).Y)) && ($.comparableEqual((pub$ as PublicKey).Curve, (xx$ as PublicKey).Curve))
	}

	public async Add(x1: any, y1: any, x2: any, y2: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<elliptic.Curve | null, null>>(this.Curve).Add(x1, y1, x2, y2)
	}

	public async Double(x1: any, y1: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<elliptic.Curve | null, null>>(this.Curve).Double(x1, y1)
	}

	public async IsOnCurve(x: any, y: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<elliptic.Curve | null, null>>(this.Curve).IsOnCurve(x, y)
	}

	public Params(): any {
		return $.pointerValue<Exclude<elliptic.Curve | null, null>>(this.Curve).Params()
	}

	public async ScalarBaseMult(k: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<elliptic.Curve | null, null>>(this.Curve).ScalarBaseMult(k)
	}

	public async ScalarMult(x1: any, y1: any, k: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<elliptic.Curve | null, null>>(this.Curve).ScalarMult(x1, y1, k)
	}

	static __typeInfo = $.registerStructType(
		"ecdsa.PublicKey",
		() => new PublicKey(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("ECDH", [], [/* @__PURE__ */ $.pointerType("ecdh.PublicKey"), "error"], true), $.methodSignature("Equal", [["x", "crypto.PublicKey"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Add", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")], ["x2", /* @__PURE__ */ $.pointerType("big.Int")], ["y2", /* @__PURE__ */ $.pointerType("big.Int")]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("Double", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("IsOnCurve", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Params", [], [/* @__PURE__ */ $.pointerType("elliptic.CurveParams")]), $.methodSignature("ScalarBaseMult", [["k", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("ScalarMult", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")], ["k", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]])],
		PublicKey,
		() => [/* @__PURE__ */ $.structField("Curve", "elliptic.Curve", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("X", /* @__PURE__ */ $.pointerType("big.Int"), [1], 16, true), /* @__PURE__ */ $.structField("Y", /* @__PURE__ */ $.pointerType("big.Int"), [2], 24, true)]
	)
}

export class PrivateKey {
	public get PublicKey(): PublicKey {
		return this._fields.PublicKey
	}

	public set PublicKey(value: PublicKey) {
		this._fields.PublicKey = value
	}

	// D is the private scalar value.
	//
	// Deprecated: modifying the raw value can produce invalid keys, and may
	// invalidate internal optimizations; moreover, [big.Int] methods are not
	// suitable for operating on cryptographic values. To encode and decode
	// PrivateKey values, use [PrivateKey.Bytes] and [ParseRawPrivateKey] or
	// [crypto/x509.MarshalPKCS8PrivateKey] and [crypto/x509.ParsePKCS8PrivateKey].
	// For ECDH, use [crypto/ecdh].
	public get D(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.D
	}

	public set D(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.D = value
	}

	public _fields: {
		PublicKey: PublicKey
		D: big.Int | $.VarRef<big.Int> | null
	}

	constructor(init?: Partial<{PublicKey?: PublicKey, D?: big.Int | $.VarRef<big.Int> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			PublicKey: init?.PublicKey ? init.PublicKey.clone() : new PublicKey(undefined, true),
			D: init?.D ?? (null! as big.Int | $.VarRef<big.Int> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PrivateKey {
		return new PrivateKey(this, true)
	}

	public __goscriptAssign(source: PrivateKey): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.PublicKey, values.PublicKey)
		target.D = values.D
	}

	public async Bytes(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		{
			let __goscriptSwitch2 = $.pointerValue<PrivateKey>(priv).PublicKey.Curve
			switch ((true as boolean)) {
				case $.comparableEqual(__goscriptSwitch2, await elliptic.P224()):
				{
					return privateKeyBytes(__goscriptStatic0(), await ecdsa.P224(), priv)
					break
				}
				case $.comparableEqual(__goscriptSwitch2, await elliptic.P256()):
				{
					return privateKeyBytes(__goscriptStatic1(), await ecdsa.P256(), priv)
					break
				}
				case $.comparableEqual(__goscriptSwitch2, await elliptic.P384()):
				{
					return privateKeyBytes(__goscriptStatic2(), await ecdsa.P384(), priv)
					break
				}
				case $.comparableEqual(__goscriptSwitch2, await elliptic.P521()):
				{
					return privateKeyBytes(__goscriptStatic3(), await ecdsa.P521(), priv)
					break
				}
				default:
				{
					return [null, errors.New("ecdsa: curve not supported by PrivateKey.Bytes")]
					break
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async ECDH(): globalThis.Promise<[ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null, $.GoError]> {
		const priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		let c = await curveToECDH($.pointerValue<PrivateKey>(priv).PublicKey.Curve)
		if (c == null) {
			return [null, errors.New("ecdsa: unsupported curve by crypto/ecdh")]
		}
		let __goscriptTuple4: any = await (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? ((priv as any) as PrivateKey).Bytes() : PrivateKey.prototype.Bytes.call(priv))
		let k: $.Slice<number> = __goscriptTuple4[0]
		let err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<ecdh.Curve, null>) : $.pointerValue<Exclude<ecdh.Curve, null>>(c)).NewPrivateKey(k)
	}

	public Equal(x: crypto.PrivateKey | null): boolean {
		const priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		const priv$: PrivateKey = priv == null ? $.pointerTarget<PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<PrivateKey>(priv)
		let __goscriptTuple5: any = $.typeAssertTuple<PrivateKey | $.VarRef<PrivateKey> | null>(x, /* @__PURE__ */ $.pointerType("ecdsa.PrivateKey"))
		let xx: PrivateKey | $.VarRef<PrivateKey> | null = __goscriptTuple5[0]
		let ok = __goscriptTuple5[1]
		let xx$: PrivateKey = xx == null ? $.pointerTarget<PrivateKey>(xx) : (xx as any).__isVarRef === true ? (xx as any).value : (xx as any).__goValue === undefined ? (xx as any) : $.pointerTarget<PrivateKey>(xx)
		if (!ok) {
			return false
		}
		return (priv$ as PrivateKey).PublicKey.Equal($.interfaceValue<crypto.PublicKey | null>($.fieldRef((xx$ as PrivateKey)._fields, "PublicKey"), "*ecdsa.PublicKey", /* @__PURE__ */ $.pointerType("ecdsa.PublicKey"))) && bigIntEqual((priv$ as PrivateKey).D, (xx$ as PrivateKey).D)
	}

	public Public(): crypto.PublicKey | null {
		const priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		return $.interfaceValue<crypto.PublicKey | null>($.fieldRef($.pointerValue<PrivateKey>(priv)._fields, "PublicKey"), "*ecdsa.PublicKey", /* @__PURE__ */ $.pointerType("ecdsa.PublicKey"))
	}

	public async Sign(random: io.Reader | null, digest: $.Slice<number>, opts: crypto.SignerOpts | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		if (opts != null) {
			let h = (__goscriptAwait = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? (opts as Exclude<crypto.SignerOpts, null>) : $.pointerValue<Exclude<crypto.SignerOpts, null>>(opts)).HashFunc(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (h == 0) {
				return [null, errors.New("ecdsa: Sign must be called with a hash, not with crypto.Hash(0)")]
			}
			if (crypto.Hash_Size(h) != $.sliceLen(digest)) {
				return [null, errors.New("ecdsa: hash length does not match hash function")]
			}
		}
		if (random == null) {
			return signRFC6979(priv, digest, opts)
		}
		random = await rand2.CustomReader(random)
		return SignASN1(random, priv, digest)
	}

	public async Add(x1: any, y1: any, x2: any, y2: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<PublicKey>(this.PublicKey).Curve).Add(x1, y1, x2, y2)
	}

	public async Double(x1: any, y1: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<PublicKey>(this.PublicKey).Curve).Double(x1, y1)
	}

	public async IsOnCurve(x: any, y: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<PublicKey>(this.PublicKey).Curve).IsOnCurve(x, y)
	}

	public Params(): any {
		return $.pointerValue<any>($.pointerValue<PublicKey>(this.PublicKey).Curve).Params()
	}

	public async ScalarBaseMult(k: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<PublicKey>(this.PublicKey).Curve).ScalarBaseMult(k)
	}

	public async ScalarMult(x1: any, y1: any, k: any): globalThis.Promise<any> {
		return await $.pointerValue<any>($.pointerValue<PublicKey>(this.PublicKey).Curve).ScalarMult(x1, y1, k)
	}

	static __typeInfo = $.registerStructType(
		"ecdsa.PrivateKey",
		() => new PrivateKey(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("ECDH", [], [/* @__PURE__ */ $.pointerType("ecdh.PrivateKey"), "error"], true), $.methodSignature("Equal", [["x", "crypto.PrivateKey"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Public", [], ["crypto.PublicKey"], true), $.methodSignature("Sign", [["random", "io.Reader"], ["digest", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["opts", "crypto.SignerOpts"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Add", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")], ["x2", /* @__PURE__ */ $.pointerType("big.Int")], ["y2", /* @__PURE__ */ $.pointerType("big.Int")]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("Double", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("IsOnCurve", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Params", [], [/* @__PURE__ */ $.pointerType("elliptic.CurveParams")]), $.methodSignature("ScalarBaseMult", [["k", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]]), $.methodSignature("ScalarMult", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")], ["k", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]])],
		PrivateKey,
		() => [/* @__PURE__ */ $.structField("PublicKey", "ecdsa.PublicKey", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("D", /* @__PURE__ */ $.pointerType("big.Int"), [1], 32, true)]
	)
}

export async function ParseUncompressedPublicKey(curve: elliptic.Curve | null, data: $.Slice<number>): globalThis.Promise<[PublicKey | $.VarRef<PublicKey> | null, $.GoError]> {
	if (($.sliceLen(data) < 1) || ($.arrayIndex(data!, 0) != 4)) {
		return [null, errors.New("ecdsa: invalid uncompressed public key")]
	}
	{
		let __goscriptSwitch1 = curve
		switch ((true as boolean)) {
			case $.comparableEqual(__goscriptSwitch1, await elliptic.P224()):
			{
				return parseUncompressedPublicKey(__goscriptStatic0(), await ecdsa.P224(), curve, data)
				break
			}
			case $.comparableEqual(__goscriptSwitch1, await elliptic.P256()):
			{
				return parseUncompressedPublicKey(__goscriptStatic1(), await ecdsa.P256(), curve, data)
				break
			}
			case $.comparableEqual(__goscriptSwitch1, await elliptic.P384()):
			{
				return parseUncompressedPublicKey(__goscriptStatic2(), await ecdsa.P384(), curve, data)
				break
			}
			case $.comparableEqual(__goscriptSwitch1, await elliptic.P521()):
			{
				return parseUncompressedPublicKey(__goscriptStatic3(), await ecdsa.P521(), curve, data)
				break
			}
			default:
			{
				return [null, errors.New("ecdsa: curve not supported by ParseUncompressedPublicKey")]
				break
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function parseUncompressedPublicKey(__typeArgs: $.GenericTypeArgs | undefined, c: ecdsa.Curve | $.VarRef<ecdsa.Curve> | null, curve: elliptic.Curve | null, data: $.Slice<number>): globalThis.Promise<[PublicKey | $.VarRef<PublicKey> | null, $.GoError]> {
	let __goscriptTuple2: any = await ecdsa.NewPublicKey({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, data)
	let k: ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null = __goscriptTuple2[0]
	let err = __goscriptTuple2[1]
	if (err != null) {
		return [null, err]
	}
	return publicKeyFromFIPS(curve, k)
}

export async function publicKeyBytes(__typeArgs: $.GenericTypeArgs | undefined, c: ecdsa.Curve | $.VarRef<ecdsa.Curve> | null, pub: PublicKey | $.VarRef<PublicKey> | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let __goscriptTuple3: any = await publicKeyToFIPS({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, pub)
	let k: ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null = __goscriptTuple3[0]
	let err = __goscriptTuple3[1]
	if (err != null) {
		return [null, err]
	}
	return [(k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as ecdsa.PublicKey).Bytes() : ecdsa.PublicKey.prototype.Bytes.call(k)), null]
}

export async function curveToECDH(c: elliptic.Curve | null): globalThis.Promise<ecdh.Curve | null> {
	{
		let __goscriptSwitch3 = c
		switch ((true as boolean)) {
			case $.comparableEqual(__goscriptSwitch3, await elliptic.P256()):
			{
				return ecdh.P256()
				break
			}
			case $.comparableEqual(__goscriptSwitch3, await elliptic.P384()):
			{
				return ecdh.P384()
				break
			}
			case $.comparableEqual(__goscriptSwitch3, await elliptic.P521()):
			{
				return ecdh.P521()
				break
			}
			default:
			{
				return null
				break
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function bigIntEqual(a: big.Int | $.VarRef<big.Int> | null, b: big.Int | $.VarRef<big.Int> | null): boolean {
	return subtle.ConstantTimeCompare((a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as big.Int).Bytes() : big.Int.prototype.Bytes.call(a)), (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as big.Int).Bytes() : big.Int.prototype.Bytes.call(b))) == 1
}

export async function ParseRawPrivateKey(curve: elliptic.Curve | null, data: $.Slice<number>): globalThis.Promise<[PrivateKey | $.VarRef<PrivateKey> | null, $.GoError]> {
	{
		let __goscriptSwitch4 = curve
		switch ((true as boolean)) {
			case $.comparableEqual(__goscriptSwitch4, await elliptic.P224()):
			{
				return parseRawPrivateKey(__goscriptStatic0(), await ecdsa.P224(), nistec.NewP224Point, curve, data)
				break
			}
			case $.comparableEqual(__goscriptSwitch4, await elliptic.P256()):
			{
				return parseRawPrivateKey(__goscriptStatic1(), await ecdsa.P256(), nistec.NewP256Point, curve, data)
				break
			}
			case $.comparableEqual(__goscriptSwitch4, await elliptic.P384()):
			{
				return parseRawPrivateKey(__goscriptStatic2(), await ecdsa.P384(), nistec.NewP384Point, curve, data)
				break
			}
			case $.comparableEqual(__goscriptSwitch4, await elliptic.P521()):
			{
				return parseRawPrivateKey(__goscriptStatic3(), await ecdsa.P521(), nistec.NewP521Point, curve, data)
				break
			}
			default:
			{
				return [null, errors.New("ecdsa: curve not supported by ParseRawPrivateKey")]
				break
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function parseRawPrivateKey(__typeArgs: $.GenericTypeArgs | undefined, c: ecdsa.Curve | $.VarRef<ecdsa.Curve> | null, newPoint: (() => any | globalThis.Promise<any>) | null, curve: elliptic.Curve | null, data: $.Slice<number>): globalThis.Promise<[PrivateKey | $.VarRef<PrivateKey> | null, $.GoError]> {
	let __goscriptTuple6: any = await $.callGenericMethod(__typeArgs, "P", "ScalarBaseMult", (__goscriptAwait = newPoint!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), data)
	let q = (__goscriptTuple6[0] as any)
	let err = __goscriptTuple6[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple7: any = await ecdsa.NewPrivateKey({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, data, ((__goscriptAwait = $.callGenericMethod(__typeArgs, "P", "Bytes", q), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>))
	let k: ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null = __goscriptTuple7[0]
	err = __goscriptTuple7[1]
	if (err != null) {
		return [null, err]
	}
	return privateKeyFromFIPS(curve, k)
}

export async function privateKeyBytes(__typeArgs: $.GenericTypeArgs | undefined, c: ecdsa.Curve | $.VarRef<ecdsa.Curve> | null, priv: PrivateKey | $.VarRef<PrivateKey> | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let __goscriptTuple8: any = await privateKeyToFIPS({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, priv)
	let k: ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null = __goscriptTuple8[0]
	let err = __goscriptTuple8[1]
	if (err != null) {
		return [null, err]
	}
	return [(k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as ecdsa.PrivateKey).Bytes() : ecdsa.PrivateKey.prototype.Bytes.call(k)), null]
}

export async function GenerateKey(c: elliptic.Curve | null, r: io.Reader | null): globalThis.Promise<[PrivateKey | $.VarRef<PrivateKey> | null, $.GoError]> {
	if (boring.Enabled && rand2.IsDefaultReader(r)) {
		let __goscriptTuple9: any = boring.GenerateKeyECDSA($.pointerValue<elliptic.CurveParams>(((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<elliptic.Curve, null>) : $.pointerValue<Exclude<elliptic.Curve, null>>(c)).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null)).Name)
		let x: boring.BigInt = (__goscriptTuple9[0] as boring.BigInt)
		let y: boring.BigInt = (__goscriptTuple9[1] as boring.BigInt)
		let d: boring.BigInt = (__goscriptTuple9[2] as boring.BigInt)
		let err = __goscriptTuple9[3]
		if (err != null) {
			return [null, err]
		}
		return [(() => { const __goscriptLiteralField2 = bbig.Dec((d as boring.BigInt)); return new PrivateKey({PublicKey: (() => { const __goscriptLiteralField0 = bbig.Dec((x as boring.BigInt)); const __goscriptLiteralField1 = bbig.Dec((y as boring.BigInt)); return new PublicKey({Curve: c, X: __goscriptLiteralField0, Y: __goscriptLiteralField1}, true) })(), D: __goscriptLiteralField2}) })(), null]
	}
	boring.UnreachableExceptTests()

	r = await rand2.CustomReader(r)

	switch (((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<elliptic.Curve, null>) : $.pointerValue<Exclude<elliptic.Curve, null>>(c)).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null)) {
		case ((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>((await elliptic.P224())).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null):
		{
			return generateFIPS(__goscriptStatic0(), c, await ecdsa.P224(), r)
			break
		}
		case ((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>((await elliptic.P256())).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null):
		{
			return generateFIPS(__goscriptStatic1(), c, await ecdsa.P256(), r)
			break
		}
		case ((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>((await elliptic.P384())).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null):
		{
			return generateFIPS(__goscriptStatic2(), c, await ecdsa.P384(), r)
			break
		}
		case ((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>((await elliptic.P521())).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null):
		{
			return generateFIPS(__goscriptStatic3(), c, await ecdsa.P521(), r)
			break
		}
		default:
		{
			return __goscript_ecdsa_legacy.generateLegacy(c, r)
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function generateFIPS(__typeArgs: $.GenericTypeArgs | undefined, curve: elliptic.Curve | null, c: ecdsa.Curve | $.VarRef<ecdsa.Curve> | null, rand: io.Reader | null): globalThis.Promise<[PrivateKey | $.VarRef<PrivateKey> | null, $.GoError]> {
	if (fips140only.Enforced() && !fips140only.ApprovedRandomReader(rand)) {
		return [null, errors.New("crypto/ecdsa: only crypto/rand.Reader is allowed in FIPS 140-only mode")]
	}
	let __goscriptTuple10: any = await ecdsa.GenerateKey({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, rand)
	let privateKey: ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null = __goscriptTuple10[0]
	let err = __goscriptTuple10[1]
	if (err != null) {
		return [null, err]
	}
	return privateKeyFromFIPS(curve, privateKey)
}

export async function SignASN1(r: io.Reader | null, priv: PrivateKey | $.VarRef<PrivateKey> | null, hash: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	if ($.sliceLen(hash) == 0) {
		return [null, errors.New("ecdsa: hash cannot be empty")]
	}

	if (boring.Enabled && rand2.IsDefaultReader(r)) {
		let __goscriptTuple11: any = __goscript_notboring.boringPrivateKey(priv)
		let b: boring.PrivateKeyECDSA | $.VarRef<boring.PrivateKeyECDSA> | null = __goscriptTuple11[0]
		let err = __goscriptTuple11[1]
		if (err != null) {
			return [null, err]
		}
		return boring.SignMarshalECDSA(b, hash)
	}
	boring.UnreachableExceptTests()

	r = await rand2.CustomReader(r)

	switch (((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>($.pointerValue<PrivateKey>(priv).PublicKey.Curve).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null)) {
		case ((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>((await elliptic.P224())).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null):
		{
			return signFIPS(__goscriptStatic0(), await ecdsa.P224(), priv, r, hash)
			break
		}
		case ((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>((await elliptic.P256())).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null):
		{
			return signFIPS(__goscriptStatic1(), await ecdsa.P256(), priv, r, hash)
			break
		}
		case ((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>((await elliptic.P384())).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null):
		{
			return signFIPS(__goscriptStatic2(), await ecdsa.P384(), priv, r, hash)
			break
		}
		case ((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>((await elliptic.P521())).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null):
		{
			return signFIPS(__goscriptStatic3(), await ecdsa.P521(), priv, r, hash)
			break
		}
		default:
		{
			return __goscript_ecdsa_legacy.signLegacy(priv, r, hash)
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function signFIPS(__typeArgs: $.GenericTypeArgs | undefined, c: ecdsa.Curve | $.VarRef<ecdsa.Curve> | null, priv: PrivateKey | $.VarRef<PrivateKey> | null, rand: io.Reader | null, hash: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	if (fips140only.Enforced() && !fips140only.ApprovedRandomReader(rand)) {
		return [null, errors.New("crypto/ecdsa: only crypto/rand.Reader is allowed in FIPS 140-only mode")]
	}
	let __goscriptTuple12: any = await privateKeyToFIPS({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, priv)
	let k: ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null = __goscriptTuple12[0]
	let err = __goscriptTuple12[1]
	if (err != null) {
		return [null, err]
	}
	// Always using SHA-512 instead of the hash that computed hash is
	// technically a violation of draft-irtf-cfrg-det-sigs-with-noise-04 but in
	// our API we don't get to know what it was, and this has no security impact.
	let __goscriptTuple13: any = await ecdsa.Sign({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }, H: { type: "hash.Hash", zero: () => null, methods: {BlockSize: (receiver: any, ...args: any[]) => receiver.BlockSize(...$.stripGenericTypeArgs(args)), Reset: (receiver: any, ...args: any[]) => receiver.Reset(...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => receiver.Size(...$.stripGenericTypeArgs(args)), Sum: (receiver: any, ...args: any[]) => receiver.Sum(...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => receiver.Write(...$.stripGenericTypeArgs(args))} }}, c, sha512.New, k, rand, hash)
	let sig: ecdsa.Signature | $.VarRef<ecdsa.Signature> | null = __goscriptTuple13[0]
	err = __goscriptTuple13[1]
	let sig$: ecdsa.Signature = sig == null ? $.pointerTarget<ecdsa.Signature>(sig) : (sig as any).__isVarRef === true ? (sig as any).value : (sig as any).__goValue === undefined ? (sig as any) : $.pointerTarget<ecdsa.Signature>(sig)
	if (err != null) {
		return [null, err]
	}
	return encodeSignature((sig$ as ecdsa.Signature).R, (sig$ as ecdsa.Signature).S)
}

export async function signRFC6979(priv: PrivateKey | $.VarRef<PrivateKey> | null, hash: $.Slice<number>, opts: crypto.SignerOpts | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	if (opts == null) {
		return [null, errors.New("ecdsa: Sign called with nil random and nil opts")]
	}
	let h = (__goscriptAwait = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? (opts as Exclude<crypto.SignerOpts, null>) : $.pointerValue<Exclude<crypto.SignerOpts, null>>(opts)).HashFunc(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	switch (((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>($.pointerValue<PrivateKey>(priv).PublicKey.Curve).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null)) {
		case ((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>((await elliptic.P224())).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null):
		{
			return signFIPSDeterministic(__goscriptStatic0(), await ecdsa.P224(), h, priv, hash)
			break
		}
		case ((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>((await elliptic.P256())).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null):
		{
			return signFIPSDeterministic(__goscriptStatic1(), await ecdsa.P256(), h, priv, hash)
			break
		}
		case ((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>((await elliptic.P384())).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null):
		{
			return signFIPSDeterministic(__goscriptStatic2(), await ecdsa.P384(), h, priv, hash)
			break
		}
		case ((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>((await elliptic.P521())).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null):
		{
			return signFIPSDeterministic(__goscriptStatic3(), await ecdsa.P521(), h, priv, hash)
			break
		}
		default:
		{
			return [null, errors.New("ecdsa: curve not supported by deterministic signatures")]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function signFIPSDeterministic(__typeArgs: $.GenericTypeArgs | undefined, c: ecdsa.Curve | $.VarRef<ecdsa.Curve> | null, hashFunc: crypto.Hash, priv: PrivateKey | $.VarRef<PrivateKey> | null, hash: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let __goscriptTuple14: any = await privateKeyToFIPS({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, priv)
	let k: ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null = __goscriptTuple14[0]
	let err = __goscriptTuple14[1]
	if (err != null) {
		return [null, err]
	}
	if (!crypto.Hash_Available(hashFunc)) {
		return [null, errors.New($.concatString("ecdsa: requested hash function unavailable: ", crypto.Hash_String(hashFunc)))]
	}
	let h: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null = await fips140hash.UnwrapNew(__goscriptStatic4(), $.functionValue(((__receiver) => () => crypto.Hash_New(__receiver))(hashFunc), ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), "crypto.Hash.New-fm"))
	if (fips140only.Enforced() && !fips140only.ApprovedHash((__goscriptAwait = h!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
		return [null, errors.New("crypto/ecdsa: use of hash functions other than SHA-2 or SHA-3 is not allowed in FIPS 140-only mode")]
	}
	let __goscriptTuple15: any = await ecdsa.SignDeterministic({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }, H: { type: "hash.Hash", zero: () => null, methods: {BlockSize: (receiver: any, ...args: any[]) => receiver.BlockSize(...$.stripGenericTypeArgs(args)), Reset: (receiver: any, ...args: any[]) => receiver.Reset(...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => receiver.Size(...$.stripGenericTypeArgs(args)), Sum: (receiver: any, ...args: any[]) => receiver.Sum(...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => receiver.Write(...$.stripGenericTypeArgs(args))} }}, c, h, k, hash)
	let sig: ecdsa.Signature | $.VarRef<ecdsa.Signature> | null = __goscriptTuple15[0]
	err = __goscriptTuple15[1]
	let sig$: ecdsa.Signature = sig == null ? $.pointerTarget<ecdsa.Signature>(sig) : (sig as any).__isVarRef === true ? (sig as any).value : (sig as any).__goValue === undefined ? (sig as any) : $.pointerTarget<ecdsa.Signature>(sig)
	if (err != null) {
		return [null, err]
	}
	return encodeSignature((sig$ as ecdsa.Signature).R, (sig$ as ecdsa.Signature).S)
}

export async function encodeSignature(r: $.Slice<number>, s: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let b: $.VarRef<cryptobyte.Builder> = $.varRef(new cryptobyte.Builder(undefined, true))
	await b.value.AddASN1(48, $.functionValue(async (b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): globalThis.Promise<void> => {
		await addASN1IntBytes(b, r)
		await addASN1IntBytes(b, s)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
	return b.value.Bytes()
}

export async function addASN1IntBytes(b: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null, bytes: $.Slice<number>): globalThis.Promise<void> {
	while (($.sliceLen(bytes) > 0) && ($.arrayIndex(bytes!, 0) == 0)) {
		bytes = $.goSlice(bytes, 1, undefined)
	}
	if ($.sliceLen(bytes) == 0) {
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as cryptobyte.Builder).SetError(errors.New("invalid integer")) : cryptobyte.Builder.prototype.SetError.call(b, errors.New("invalid integer")))
		return
	}
	await cryptobyte.Builder.prototype.AddASN1.call(b, 2, $.functionValue((c: cryptobyte.Builder | $.VarRef<cryptobyte.Builder> | null): void => {
		if ($.uint(($.arrayIndex(bytes!, 0) & 0x80), 8) != 0) {
			void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as cryptobyte.Builder).AddUint8(0) : cryptobyte.Builder.prototype.AddUint8.call(c, 0))
		}
		void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as cryptobyte.Builder).AddBytes(bytes) : cryptobyte.Builder.prototype.AddBytes.call(c, bytes))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("cryptobyte.Builder")], results: [] } as $.FunctionTypeInfo)))
}

export async function VerifyASN1(pub: PublicKey | $.VarRef<PublicKey> | null, hash: $.Slice<number>, sig: $.Slice<number>): globalThis.Promise<boolean> {
	if ($.sliceLen(hash) == 0) {
		return false
	}

	if (boring.Enabled) {
		let __goscriptTuple16: any = __goscript_notboring.boringPublicKey(pub)
		let key: boring.PublicKeyECDSA | $.VarRef<boring.PublicKeyECDSA> | null = __goscriptTuple16[0]
		let err = __goscriptTuple16[1]
		if (err != null) {
			return false
		}
		return boring.VerifyECDSA(key, hash, sig)
	}
	boring.UnreachableExceptTests()

	switch (((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>($.pointerValue<PublicKey>(pub).Curve).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null)) {
		case ((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>((await elliptic.P224())).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null):
		{
			return verifyFIPS(__goscriptStatic0(), await ecdsa.P224(), pub, hash, sig)
			break
		}
		case ((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>((await elliptic.P256())).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null):
		{
			return verifyFIPS(__goscriptStatic1(), await ecdsa.P256(), pub, hash, sig)
			break
		}
		case ((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>((await elliptic.P384())).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null):
		{
			return verifyFIPS(__goscriptStatic2(), await ecdsa.P384(), pub, hash, sig)
			break
		}
		case ((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>((await elliptic.P521())).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null):
		{
			return verifyFIPS(__goscriptStatic3(), await ecdsa.P521(), pub, hash, sig)
			break
		}
		default:
		{
			return __goscript_ecdsa_legacy.verifyLegacy(pub, hash, sig)
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function verifyFIPS(__typeArgs: $.GenericTypeArgs | undefined, c: ecdsa.Curve | $.VarRef<ecdsa.Curve> | null, pub: PublicKey | $.VarRef<PublicKey> | null, hash: $.Slice<number>, sig: $.Slice<number>): globalThis.Promise<boolean> {
	let __goscriptTuple17: any = parseSignature(sig)
	let r: $.Slice<number> = __goscriptTuple17[0]
	let s: $.Slice<number> = __goscriptTuple17[1]
	let err = __goscriptTuple17[2]
	if (err != null) {
		return false
	}
	let __goscriptTuple18: any = await publicKeyToFIPS({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, pub)
	let k: ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null = __goscriptTuple18[0]
	err = __goscriptTuple18[1]
	if (err != null) {
		return false
	}
	{
		let __goscriptShadow0 = await ecdsa.Verify({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, k, hash, new ecdsa.Signature({R: r, S: s}))
		if (__goscriptShadow0 != null) {
			return false
		}
	}
	return true
}

export function parseSignature(sig: $.Slice<number>): [$.Slice<number>, $.Slice<number>, $.GoError] {
	let r: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
	let s: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
	let err: $.GoError = null! as $.GoError
	let inner: $.VarRef<cryptobyte.String> = $.varRef(null! as cryptobyte.String)
	let input: $.VarRef<cryptobyte.String> = $.varRef(((sig as cryptobyte.String) as cryptobyte.String))
	if ((((!cryptobyte.String_ReadASN1(input, inner, 48) || !cryptobyte.String_Empty(input.value)) || !cryptobyte.String_ReadASN1Integer(inner, $.interfaceValue(r, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))) || !cryptobyte.String_ReadASN1Integer(inner, $.interfaceValue(s, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))) || !cryptobyte.String_Empty(inner.value)) {
		return [null, null, errors.New("invalid ASN.1")]
	}
	return [r.value, s.value, null]
}

export async function publicKeyFromFIPS(curve: elliptic.Curve | null, pub: ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null): globalThis.Promise<[PublicKey | $.VarRef<PublicKey> | null, $.GoError]> {
	let __goscriptTuple19: any = await pointToAffine(curve, (pub !== null && (pub as any).__isVarRef !== true && (pub as any).__goValue === undefined ? ((pub as any) as ecdsa.PublicKey).Bytes() : ecdsa.PublicKey.prototype.Bytes.call(pub)))
	let x: big.Int | $.VarRef<big.Int> | null = __goscriptTuple19[0]
	let y: big.Int | $.VarRef<big.Int> | null = __goscriptTuple19[1]
	let err = __goscriptTuple19[2]
	if (err != null) {
		return [null, err]
	}
	return [new PublicKey({Curve: curve, X: x, Y: y}), null]
}

export async function privateKeyFromFIPS(curve: elliptic.Curve | null, priv: ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null): globalThis.Promise<[PrivateKey | $.VarRef<PrivateKey> | null, $.GoError]> {
	let __goscriptTuple20: any = await publicKeyFromFIPS(curve, (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? ((priv as any) as ecdsa.PrivateKey).PublicKey() : ecdsa.PrivateKey.prototype.PublicKey.call(priv)))
	let pub: PublicKey | $.VarRef<PublicKey> | null = __goscriptTuple20[0]
	let err = __goscriptTuple20[1]
	if (err != null) {
		return [null, err]
	}
	return [(() => { const __goscriptLiteralField3 = big.Int.prototype.SetBytes.call(new big.Int(), (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? ((priv as any) as ecdsa.PrivateKey).Bytes() : ecdsa.PrivateKey.prototype.Bytes.call(priv))); return new PrivateKey({PublicKey: $.pointerValue<PublicKey>(pub), D: __goscriptLiteralField3}) })(), null]
}

export async function publicKeyToFIPS(__typeArgs: $.GenericTypeArgs | undefined, c: ecdsa.Curve | $.VarRef<ecdsa.Curve> | null, pub: PublicKey | $.VarRef<PublicKey> | null): globalThis.Promise<[ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null, $.GoError]> {
	const pub$: PublicKey = pub == null ? $.pointerTarget<PublicKey>(pub) : (pub as any).__isVarRef === true ? (pub as any).value : (pub as any).__goValue === undefined ? (pub as any) : $.pointerTarget<PublicKey>(pub)
	let __goscriptTuple21: any = await pointFromAffine((pub$ as PublicKey).Curve, (pub$ as PublicKey).X, (pub$ as PublicKey).Y)
	let Q: $.Slice<number> = __goscriptTuple21[0]
	let err = __goscriptTuple21[1]
	if (err != null) {
		return [null, err]
	}
	return ecdsa.NewPublicKey({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, Q)
}

export let privateKeyCache: $.VarRef<fips140cache.Cache> = $.varRef($.markAsStructValue(new fips140cache.Cache()))

export function __goscript_set_privateKeyCache(__goscriptValue: fips140cache.Cache): void {
	$.assignStruct(privateKeyCache.value, __goscriptValue)
}

export async function privateKeyToFIPS(__typeArgs: $.GenericTypeArgs | undefined, c: ecdsa.Curve | $.VarRef<ecdsa.Curve> | null, priv: PrivateKey | $.VarRef<PrivateKey> | null): globalThis.Promise<[ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null, $.GoError]> {
	const priv$: PrivateKey = priv == null ? $.pointerTarget<PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<PrivateKey>(priv)
	let __goscriptTuple22: any = await pointFromAffine((priv$ as PrivateKey).PublicKey.Curve, (priv$ as PrivateKey).PublicKey.X, (priv$ as PrivateKey).PublicKey.Y)
	let Q: $.Slice<number> = __goscriptTuple22[0]
	let err = __goscriptTuple22[1]
	if (err != null) {
		return [null, err]
	}

	// Reject values that would not get correctly encoded.
	if (big.Int.prototype.BitLen.call((priv$ as PrivateKey).D) > big.Int.prototype.BitLen.call($.pointerValue<elliptic.CurveParams>(((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>((priv$ as PrivateKey).PublicKey.Curve).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null)).N)) {
		return [null, errors.New("ecdsa: private key scalar too large")]
	}
	if (big.Int.prototype.Sign.call((priv$ as PrivateKey).D) <= 0) {
		return [null, errors.New("ecdsa: private key scalar is zero or negative")]
	}

	let size = globalThis.Math.trunc((big.Int.prototype.BitLen.call($.pointerValue<elliptic.CurveParams>(((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>((priv$ as PrivateKey).PublicKey.Curve).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null)).N) + 7) / 8)
	const maxScalarSize: number = 66
	if (size > 66) {
		return [null, errors.New("ecdsa: internal error: curve size too large")]
	}
	let D: $.Slice<number> = big.Int.prototype.FillBytes.call((priv$ as PrivateKey).D, $.makeSlice<number>(size, 66, "byte"))

	const __goscriptReturn43 = await privateKeyCache.value.Get(__goscriptStatic5(), priv, $.functionValue(async (): globalThis.Promise<[ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null, $.GoError]> => {
		return await ecdsa.NewPrivateKey({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, D, Q)
	}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("ecdsa.PrivateKey"), "error"] } as $.FunctionTypeInfo)), $.functionValue((k: ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null): boolean => {
		return (subtle.ConstantTimeCompare(ecdsa.PublicKey.prototype.Bytes.call((k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as ecdsa.PrivateKey).PublicKey() : ecdsa.PrivateKey.prototype.PublicKey.call(k))), Q) == 1) && (subtle.ConstantTimeCompare((k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as ecdsa.PrivateKey).Bytes() : ecdsa.PrivateKey.prototype.Bytes.call(k)), D) == 1)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("ecdsa.PrivateKey")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
	return [(__goscriptReturn43[0] as ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null), __goscriptReturn43[1]]
	throw new globalThis.Error("goscript: unreachable return")
}

export async function pointFromAffine(curve: elliptic.Curve | null, x: big.Int | $.VarRef<big.Int> | null, y: big.Int | $.VarRef<big.Int> | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let bitSize = $.pointerValue<elliptic.CurveParams>(((__goscriptAwait = (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? (curve as Exclude<elliptic.Curve, null>) : $.pointerValue<Exclude<elliptic.Curve, null>>(curve)).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null)).BitSize
	// Reject values that would not get correctly encoded.
	if (((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).Sign() : big.Int.prototype.Sign.call(x)) < 0) || ((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as big.Int).Sign() : big.Int.prototype.Sign.call(y)) < 0)) {
		return [null, errors.New("negative coordinate")]
	}
	if (((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).BitLen() : big.Int.prototype.BitLen.call(x)) > bitSize) || ((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as big.Int).BitLen() : big.Int.prototype.BitLen.call(y)) > bitSize)) {
		return [null, errors.New("overflowing coordinate")]
	}
	// Encode the coordinates and let [ecdsa.NewPublicKey] reject invalid points.
	let byteLen = globalThis.Math.trunc((bitSize + 7) / 8)
	let buf: $.Slice<number> = $.makeSlice<number>(1 + (2 * byteLen), undefined, "byte")
	$.sliceElems(buf!)[$.sliceSlot(buf!, 0)] = 4
	void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).FillBytes($.goSlice(buf, 1, 1 + byteLen)) : big.Int.prototype.FillBytes.call(x, $.goSlice(buf, 1, 1 + byteLen)))
	void (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as big.Int).FillBytes($.goSlice(buf, 1 + byteLen, 1 + (2 * byteLen))) : big.Int.prototype.FillBytes.call(y, $.goSlice(buf, 1 + byteLen, 1 + (2 * byteLen))))
	return [buf, null]
}

export async function pointToAffine(curve: elliptic.Curve | null, p: $.Slice<number>): globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null, $.GoError]> {
	let x: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
	let y: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
	let err: $.GoError = null! as $.GoError
	if (($.sliceLen(p) == 1) && ($.arrayIndex(p!, 0) == 0)) {
		// This is the encoding of the point at infinity.
		return [null, null, errors.New("ecdsa: public key point is the infinity")]
	}
	let byteLen = globalThis.Math.trunc(($.pointerValue<elliptic.CurveParams>(((__goscriptAwait = (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? (curve as Exclude<elliptic.Curve, null>) : $.pointerValue<Exclude<elliptic.Curve, null>>(curve)).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null)).BitSize + 7) / 8)
	x = big.Int.prototype.SetBytes.call(new big.Int(), $.goSlice(p, 1, 1 + byteLen))
	y = big.Int.prototype.SetBytes.call(new big.Int(), $.goSlice(p, 1 + byteLen, undefined))
	return [x, y, null]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: { type: /* @__PURE__ */ $.pointerType("nistec.P224Point"), zero: () => null, methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), BytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesCompressed(...$.stripGenericTypeArgs(args)), BytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesX(...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(...$.stripGenericTypeArgs(args)), Select: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Select(...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Set(...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBytes(...$.stripGenericTypeArgs(args)), SetGenerator: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetGenerator(...$.stripGenericTypeArgs(args)), bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytes(...$.stripGenericTypeArgs(args)), bytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesCompressed(...$.stripGenericTypeArgs(args)), bytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesX(...$.stripGenericTypeArgs(args)), generatorTable: (receiver: any, ...args: any[]) => $.pointerValue(receiver).generatorTable(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: { type: /* @__PURE__ */ $.pointerType("nistec.P256Point"), zero: () => null, methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), AddAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddAffine(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), BytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesCompressed(...$.stripGenericTypeArgs(args)), BytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesX(...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(...$.stripGenericTypeArgs(args)), Negate: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Negate(...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(...$.stripGenericTypeArgs(args)), Select: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Select(...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Set(...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBytes(...$.stripGenericTypeArgs(args)), SetGenerator: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetGenerator(...$.stripGenericTypeArgs(args)), bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytes(...$.stripGenericTypeArgs(args)), bytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesCompressed(...$.stripGenericTypeArgs(args)), bytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesX(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: { type: /* @__PURE__ */ $.pointerType("nistec.P384Point"), zero: () => null, methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), BytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesCompressed(...$.stripGenericTypeArgs(args)), BytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesX(...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(...$.stripGenericTypeArgs(args)), Select: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Select(...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Set(...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBytes(...$.stripGenericTypeArgs(args)), SetGenerator: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetGenerator(...$.stripGenericTypeArgs(args)), bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytes(...$.stripGenericTypeArgs(args)), bytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesCompressed(...$.stripGenericTypeArgs(args)), bytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesX(...$.stripGenericTypeArgs(args)), generatorTable: (receiver: any, ...args: any[]) => $.pointerValue(receiver).generatorTable(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: { type: /* @__PURE__ */ $.pointerType("nistec.P521Point"), zero: () => null, methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), BytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesCompressed(...$.stripGenericTypeArgs(args)), BytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesX(...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(...$.stripGenericTypeArgs(args)), Select: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Select(...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Set(...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBytes(...$.stripGenericTypeArgs(args)), SetGenerator: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetGenerator(...$.stripGenericTypeArgs(args)), bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytes(...$.stripGenericTypeArgs(args)), bytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesCompressed(...$.stripGenericTypeArgs(args)), bytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesX(...$.stripGenericTypeArgs(args)), generatorTable: (receiver: any, ...args: any[]) => $.pointerValue(receiver).generatorTable(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Hash: { type: "hash.Hash", zero: () => null, methods: {BlockSize: (receiver: any, ...args: any[]) => receiver.BlockSize(...$.stripGenericTypeArgs(args)), Reset: (receiver: any, ...args: any[]) => receiver.Reset(...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => receiver.Size(...$.stripGenericTypeArgs(args)), Sum: (receiver: any, ...args: any[]) => receiver.Sum(...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => receiver.Write(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, K: { type: "ecdsa.PrivateKey", zero: () => new PrivateKey(undefined, true), methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(...$.stripGenericTypeArgs(args)), IsOnCurve: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsOnCurve(...$.stripGenericTypeArgs(args)), Params: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Params(...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(...$.stripGenericTypeArgs(args))} }, V: { type: "ecdsa.PrivateKey", zero: () => new ecdsa.PrivateKey(undefined, true) }})
}

var __goscriptAwait: any
