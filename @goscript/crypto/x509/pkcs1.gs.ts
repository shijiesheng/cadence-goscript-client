// Generated file based on pkcs1.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as rsa from "@goscript/crypto/rsa/index.js"

import * as asn1 from "@goscript/encoding/asn1/index.js"

import * as errors from "@goscript/errors/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

import * as big from "@goscript/math/big/index.js"

import * as pkix from "@goscript/crypto/x509/pkix/index.js"

import * as __goscript_pkcs8 from "./pkcs8.gs.ts"

import * as __goscript_sec1 from "./sec1.gs.ts"

import * as __goscript_x509 from "./x509.gs.ts"
import "@goscript/crypto/rsa/index.js"
import "@goscript/encoding/asn1/index.js"
import "@goscript/errors/index.js"
import "@goscript/internal/godebug/index.js"
import "@goscript/math/big/index.js"
import "@goscript/crypto/x509/pkix/index.js"
import "./pkcs8.gs.ts"
import "./sec1.gs.ts"
import "./x509.gs.ts"

$.registerTypePackagePath("crypto/x509", ["x509.pkcs1PrivateKey", "x509.pkcs1AdditionalRSAPrime", "x509.pkcs1PublicKey"])

export class pkcs1PrivateKey {
	public get Version(): number {
		return this._fields.Version
	}

	public set Version(value: number) {
		this._fields.Version = value
	}

	public get N(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.N
	}

	public set N(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.N = value
	}

	public get E(): number {
		return this._fields.E
	}

	public set E(value: number) {
		this._fields.E = value
	}

	public get D(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.D
	}

	public set D(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.D = value
	}

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

	public get Dp(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.Dp
	}

	public set Dp(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.Dp = value
	}

	public get Dq(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.Dq
	}

	public set Dq(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.Dq = value
	}

	public get Qinv(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.Qinv
	}

	public set Qinv(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.Qinv = value
	}

	public get AdditionalPrimes(): $.Slice<pkcs1AdditionalRSAPrime> {
		return this._fields.AdditionalPrimes
	}

	public set AdditionalPrimes(value: $.Slice<pkcs1AdditionalRSAPrime>) {
		this._fields.AdditionalPrimes = value
	}

	public _fields: {
		Version: number
		N: big.Int | $.VarRef<big.Int> | null
		E: number
		D: big.Int | $.VarRef<big.Int> | null
		P: big.Int | $.VarRef<big.Int> | null
		Q: big.Int | $.VarRef<big.Int> | null
		Dp: big.Int | $.VarRef<big.Int> | null
		Dq: big.Int | $.VarRef<big.Int> | null
		Qinv: big.Int | $.VarRef<big.Int> | null
		AdditionalPrimes: $.Slice<pkcs1AdditionalRSAPrime>
	}

	constructor(init?: Partial<{Version?: number, N?: big.Int | $.VarRef<big.Int> | null, E?: number, D?: big.Int | $.VarRef<big.Int> | null, P?: big.Int | $.VarRef<big.Int> | null, Q?: big.Int | $.VarRef<big.Int> | null, Dp?: big.Int | $.VarRef<big.Int> | null, Dq?: big.Int | $.VarRef<big.Int> | null, Qinv?: big.Int | $.VarRef<big.Int> | null, AdditionalPrimes?: $.Slice<pkcs1AdditionalRSAPrime>}>, __goscriptValue?: boolean) {
		this._fields = {
			Version: init?.Version ?? (0 as number),
			N: init?.N ?? (null! as big.Int | $.VarRef<big.Int> | null),
			E: init?.E ?? (0 as number),
			D: init?.D ?? (null! as big.Int | $.VarRef<big.Int> | null),
			P: init?.P ?? (null! as big.Int | $.VarRef<big.Int> | null),
			Q: init?.Q ?? (null! as big.Int | $.VarRef<big.Int> | null),
			Dp: init?.Dp ?? (null! as big.Int | $.VarRef<big.Int> | null),
			Dq: init?.Dq ?? (null! as big.Int | $.VarRef<big.Int> | null),
			Qinv: init?.Qinv ?? (null! as big.Int | $.VarRef<big.Int> | null),
			AdditionalPrimes: init?.AdditionalPrimes ?? (null! as $.Slice<pkcs1AdditionalRSAPrime>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pkcs1PrivateKey {
		return new pkcs1PrivateKey(this, true)
	}

	public __goscriptAssign(source: pkcs1PrivateKey): void {
		const target = this._fields
		const values = source._fields
		target.Version = values.Version
		target.N = values.N
		target.E = values.E
		target.D = values.D
		target.P = values.P
		target.Q = values.Q
		target.Dp = values.Dp
		target.Dq = values.Dq
		target.Qinv = values.Qinv
		target.AdditionalPrimes = values.AdditionalPrimes
	}

	static __typeInfo = $.registerStructType(
		"x509.pkcs1PrivateKey",
		() => new pkcs1PrivateKey(),
		() => [],
		pkcs1PrivateKey,
		() => [/* @__PURE__ */ $.structField("Version", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("N", /* @__PURE__ */ $.pointerType("big.Int"), [1], 8, true), /* @__PURE__ */ $.structField("E", /* @__PURE__ */ $.basicType("int"), [2], 16, true), /* @__PURE__ */ $.structField("D", /* @__PURE__ */ $.pointerType("big.Int"), [3], 24, true), /* @__PURE__ */ $.structField("P", /* @__PURE__ */ $.pointerType("big.Int"), [4], 32, true), /* @__PURE__ */ $.structField("Q", /* @__PURE__ */ $.pointerType("big.Int"), [5], 40, true), /* @__PURE__ */ $.structField("Dp", /* @__PURE__ */ $.pointerType("big.Int"), [6], 48, true, { tag: "asn1:\"optional\"" }), /* @__PURE__ */ $.structField("Dq", /* @__PURE__ */ $.pointerType("big.Int"), [7], 56, true, { tag: "asn1:\"optional\"" }), /* @__PURE__ */ $.structField("Qinv", /* @__PURE__ */ $.pointerType("big.Int"), [8], 64, true, { tag: "asn1:\"optional\"" }), /* @__PURE__ */ $.structField("AdditionalPrimes", /* @__PURE__ */ $.sliceType("x509.pkcs1AdditionalRSAPrime"), [9], 72, true, { tag: "asn1:\"optional,omitempty\"" })]
	)
}

export class pkcs1AdditionalRSAPrime {
	public get Prime(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.Prime
	}

	public set Prime(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.Prime = value
	}

	// We ignore these values because rsa will calculate them.
	public get Exp(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.Exp
	}

	public set Exp(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.Exp = value
	}

	public get Coeff(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.Coeff
	}

	public set Coeff(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.Coeff = value
	}

	public _fields: {
		Prime: big.Int | $.VarRef<big.Int> | null
		Exp: big.Int | $.VarRef<big.Int> | null
		Coeff: big.Int | $.VarRef<big.Int> | null
	}

	constructor(init?: Partial<{Prime?: big.Int | $.VarRef<big.Int> | null, Exp?: big.Int | $.VarRef<big.Int> | null, Coeff?: big.Int | $.VarRef<big.Int> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Prime: init?.Prime ?? (null! as big.Int | $.VarRef<big.Int> | null),
			Exp: init?.Exp ?? (null! as big.Int | $.VarRef<big.Int> | null),
			Coeff: init?.Coeff ?? (null! as big.Int | $.VarRef<big.Int> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pkcs1AdditionalRSAPrime {
		return new pkcs1AdditionalRSAPrime(this, true)
	}

	public __goscriptAssign(source: pkcs1AdditionalRSAPrime): void {
		const target = this._fields
		const values = source._fields
		target.Prime = values.Prime
		target.Exp = values.Exp
		target.Coeff = values.Coeff
	}

	static __typeInfo = $.registerStructType(
		"x509.pkcs1AdditionalRSAPrime",
		() => new pkcs1AdditionalRSAPrime(),
		() => [],
		pkcs1AdditionalRSAPrime,
		() => [/* @__PURE__ */ $.structField("Prime", /* @__PURE__ */ $.pointerType("big.Int"), [0], 0, true), /* @__PURE__ */ $.structField("Exp", /* @__PURE__ */ $.pointerType("big.Int"), [1], 8, true), /* @__PURE__ */ $.structField("Coeff", /* @__PURE__ */ $.pointerType("big.Int"), [2], 16, true)]
	)
}

export class pkcs1PublicKey {
	public get N(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.N
	}

	public set N(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.N = value
	}

	public get E(): number {
		return this._fields.E
	}

	public set E(value: number) {
		this._fields.E = value
	}

	public _fields: {
		N: big.Int | $.VarRef<big.Int> | null
		E: number
	}

	constructor(init?: Partial<{N?: big.Int | $.VarRef<big.Int> | null, E?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			N: init?.N ?? (null! as big.Int | $.VarRef<big.Int> | null),
			E: init?.E ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pkcs1PublicKey {
		return new pkcs1PublicKey(this, true)
	}

	public __goscriptAssign(source: pkcs1PublicKey): void {
		const target = this._fields
		const values = source._fields
		target.N = values.N
		target.E = values.E
	}

	static __typeInfo = $.registerStructType(
		"x509.pkcs1PublicKey",
		() => new pkcs1PublicKey(),
		() => [],
		pkcs1PublicKey,
		() => [/* @__PURE__ */ $.structField("N", /* @__PURE__ */ $.pointerType("big.Int"), [0], 0, true), /* @__PURE__ */ $.structField("E", /* @__PURE__ */ $.basicType("int"), [1], 8, true)]
	)
}

export let x509rsacrt: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("x509rsacrt")

export function __goscript_set_x509rsacrt(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	x509rsacrt = __goscriptValue
}

export async function ParsePKCS1PrivateKey(der: $.Slice<number>): globalThis.Promise<[rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null, $.GoError]> {
	let priv: $.VarRef<pkcs1PrivateKey> = $.varRef(new pkcs1PrivateKey(undefined, true))
	let __goscriptTuple0: any = await asn1.Unmarshal(der, $.interfaceValue(priv, "*x509.pkcs1PrivateKey", /* @__PURE__ */ $.pointerType("x509.pkcs1PrivateKey")))
	let rest: $.Slice<number> = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if ($.sliceLen(rest) > 0) {
		return [null, $.interfaceValue<$.GoError>(new asn1.SyntaxError({Msg: "trailing data"}, true), "asn1.SyntaxError", "asn1.SyntaxError")]
	}
	if (err != null) {
		{
			let [, __goscriptShadow0] = await asn1.Unmarshal(der, $.interfaceValue(new __goscript_sec1.ecPrivateKey(), "*x509.ecPrivateKey", /* @__PURE__ */ $.pointerType("x509.ecPrivateKey")))
			if (__goscriptShadow0 == null) {
				return [null, errors.New("x509: failed to parse private key (use ParseECPrivateKey instead for this key format)")]
			}
		}
		{
			let [, __goscriptShadow1] = await asn1.Unmarshal(der, $.interfaceValue(new __goscript_pkcs8.pkcs8(), "*x509.pkcs8", /* @__PURE__ */ $.pointerType("x509.pkcs8")))
			if (__goscriptShadow1 == null) {
				return [null, errors.New("x509: failed to parse private key (use ParsePKCS8PrivateKey instead for this key format)")]
			}
		}
		return [null, err]
	}

	if (priv.value.Version > 1) {
		return [null, errors.New("x509: unsupported private key version")]
	}

	if (((((((big.Int.prototype.Sign.call(priv.value.N) <= 0) || (big.Int.prototype.Sign.call(priv.value.D) <= 0)) || (big.Int.prototype.Sign.call(priv.value.P) <= 0)) || (big.Int.prototype.Sign.call(priv.value.Q) <= 0)) || ((priv.value.Dp != null) && (big.Int.prototype.Sign.call(priv.value.Dp) <= 0))) || ((priv.value.Dq != null) && (big.Int.prototype.Sign.call(priv.value.Dq) <= 0))) || ((priv.value.Qinv != null) && (big.Int.prototype.Sign.call(priv.value.Qinv) <= 0))) {
		return [null, errors.New("x509: private key contains zero or negative value")]
	}

	let key: rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null = new rsa.PrivateKey()
	let key$: rsa.PrivateKey = key == null ? $.pointerTarget<rsa.PrivateKey>(key) : (key as any).__isVarRef === true ? (key as any).value : (key as any).__goValue === undefined ? (key as any) : $.pointerTarget<rsa.PrivateKey>(key)
	$.assignStruct((key$ as rsa.PrivateKey).PublicKey, new rsa.PublicKey({E: priv.value.E, N: priv.value.N}, true));

	;(key$ as rsa.PrivateKey).D = priv.value.D;
	;(key$ as rsa.PrivateKey).Primes = $.makeSlice<big.Int | $.VarRef<big.Int> | null>(2 + $.sliceLen(priv.value.AdditionalPrimes))
	$.sliceElems((key$ as rsa.PrivateKey).Primes!)[$.sliceSlot((key$ as rsa.PrivateKey).Primes!, 0)] = priv.value.P
	$.sliceElems((key$ as rsa.PrivateKey).Primes!)[$.sliceSlot((key$ as rsa.PrivateKey).Primes!, 1)] = priv.value.Q;
	;(key$ as rsa.PrivateKey).Precomputed.Dp = priv.value.Dp;
	;(key$ as rsa.PrivateKey).Precomputed.Dq = priv.value.Dq;
	;(key$ as rsa.PrivateKey).Precomputed.Qinv = priv.value.Qinv
	for (let __goscriptRangeTarget0 = priv.value.AdditionalPrimes, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let a = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as pkcs1AdditionalRSAPrime)).clone()
		if (big.Int.prototype.Sign.call(a.Prime) <= 0) {
			return [null, errors.New("x509: private key contains zero or negative prime")]
		}
		$.sliceElems((key$ as rsa.PrivateKey).Primes!)[$.sliceSlot((key$ as rsa.PrivateKey).Primes!, i + 2)] = a.Prime
	}

	await (key !== null && (key as any).__isVarRef !== true && (key as any).__goValue === undefined ? ((key as any) as rsa.PrivateKey).Precompute() : rsa.PrivateKey.prototype.Precompute.call(key))
	{
		let __goscriptShadow2 = await (key !== null && (key as any).__isVarRef !== true && (key as any).__goValue === undefined ? ((key as any) as rsa.PrivateKey).Validate() : rsa.PrivateKey.prototype.Validate.call(key))
		if (__goscriptShadow2 != null) {
			// If x509rsacrt=0 is set, try dropping the CRT values and
			// rerunning precomputation and key validation.
			if ($.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(x509rsacrt)), "0")) {
				;(key$ as rsa.PrivateKey).Precomputed.Dp = null;
				;(key$ as rsa.PrivateKey).Precomputed.Dq = null;
				;(key$ as rsa.PrivateKey).Precomputed.Qinv = null
				await (key !== null && (key as any).__isVarRef !== true && (key as any).__goValue === undefined ? ((key as any) as rsa.PrivateKey).Precompute() : rsa.PrivateKey.prototype.Precompute.call(key))
				{
					let __goscriptShadow3 = await (key !== null && (key as any).__isVarRef !== true && (key as any).__goValue === undefined ? ((key as any) as rsa.PrivateKey).Validate() : rsa.PrivateKey.prototype.Validate.call(key))
					if (__goscriptShadow3 == null) {
						godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(x509rsacrt))
						return [key, null]
					}
				}
			}

			return [null, __goscriptShadow2]
		}
	}

	return [key, null]
}

export async function MarshalPKCS1PrivateKey(key: rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null): globalThis.Promise<$.Slice<number>> {
	const key$: rsa.PrivateKey = key == null ? $.pointerTarget<rsa.PrivateKey>(key) : (key as any).__isVarRef === true ? (key as any).value : (key as any).__goValue === undefined ? (key as any) : $.pointerTarget<rsa.PrivateKey>(key)
	await (key !== null && (key as any).__isVarRef !== true && (key as any).__goValue === undefined ? ((key as any) as rsa.PrivateKey).Precompute() : rsa.PrivateKey.prototype.Precompute.call(key))

	let version = 0
	if ($.sliceLen((key$ as rsa.PrivateKey).Primes) > 2) {
		version = 1
	}

	let priv = new pkcs1PrivateKey({Version: version, N: (key$ as rsa.PrivateKey).PublicKey.N, E: (key$ as rsa.PrivateKey).PublicKey.E, D: (key$ as rsa.PrivateKey).D, P: $.arrayIndex((key$ as rsa.PrivateKey).Primes!, 0), Q: $.arrayIndex((key$ as rsa.PrivateKey).Primes!, 1), Dp: (key$ as rsa.PrivateKey).Precomputed.Dp, Dq: (key$ as rsa.PrivateKey).Precomputed.Dq, Qinv: (key$ as rsa.PrivateKey).Precomputed.Qinv}, true)

	priv.AdditionalPrimes = $.makeSlice<pkcs1AdditionalRSAPrime>($.sliceLen((key$ as rsa.PrivateKey).Precomputed.CRTValues), undefined, undefined, () => new pkcs1AdditionalRSAPrime(undefined, true))
	for (let __goscriptRangeTarget1 = (key$ as rsa.PrivateKey).Precomputed.CRTValues, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		let values = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as rsa.CRTValue)).clone()
		$.arrayIndex(priv.AdditionalPrimes!, i).Prime = $.arrayIndex((key$ as rsa.PrivateKey).Primes!, 2 + i)
		$.arrayIndex(priv.AdditionalPrimes!, i).Exp = values.Exp
		$.arrayIndex(priv.AdditionalPrimes!, i).Coeff = values.Coeff
	}

	let __goscriptTuple1: any = await asn1.Marshal($.interfaceValue((priv).clone(), "x509.pkcs1PrivateKey", "x509.pkcs1PrivateKey"))
	let b: $.Slice<number> = __goscriptTuple1[0]
	return b
}

export async function ParsePKCS1PublicKey(der: $.Slice<number>): globalThis.Promise<[rsa.PublicKey | $.VarRef<rsa.PublicKey> | null, $.GoError]> {
	let pub: $.VarRef<pkcs1PublicKey> = $.varRef(new pkcs1PublicKey(undefined, true))
	let __goscriptTuple2: any = await asn1.Unmarshal(der, $.interfaceValue(pub, "*x509.pkcs1PublicKey", /* @__PURE__ */ $.pointerType("x509.pkcs1PublicKey")))
	let rest: $.Slice<number> = __goscriptTuple2[0]
	let err = __goscriptTuple2[1]
	if (err != null) {
		{
			let [, __goscriptShadow4] = await asn1.Unmarshal(der, $.interfaceValue(new __goscript_x509.publicKeyInfo(), "*x509.publicKeyInfo", /* @__PURE__ */ $.pointerType("x509.publicKeyInfo")))
			if (__goscriptShadow4 == null) {
				return [null, errors.New("x509: failed to parse public key (use ParsePKIXPublicKey instead for this key format)")]
			}
		}
		return [null, err]
	}
	if ($.sliceLen(rest) > 0) {
		return [null, $.interfaceValue<$.GoError>(new asn1.SyntaxError({Msg: "trailing data"}, true), "asn1.SyntaxError", "asn1.SyntaxError")]
	}

	if ((big.Int.prototype.Sign.call(pub.value.N) <= 0) || (pub.value.E <= 0)) {
		return [null, errors.New("x509: public key contains zero or negative value")]
	}
	if (pub.value.E > 2147483647) {
		return [null, errors.New("x509: public key contains large public exponent")]
	}

	return [new rsa.PublicKey({E: pub.value.E, N: pub.value.N}), null]
}

export async function MarshalPKCS1PublicKey(key: rsa.PublicKey | $.VarRef<rsa.PublicKey> | null): globalThis.Promise<$.Slice<number>> {
	const key$: rsa.PublicKey = key == null ? $.pointerTarget<rsa.PublicKey>(key) : (key as any).__isVarRef === true ? (key as any).value : (key as any).__goValue === undefined ? (key as any) : $.pointerTarget<rsa.PublicKey>(key)
	let __goscriptTuple3: any = await asn1.Marshal($.interfaceValue(new pkcs1PublicKey({N: (key$ as rsa.PublicKey).N, E: (key$ as rsa.PublicKey).E}, true), "x509.pkcs1PublicKey", "x509.pkcs1PublicKey"))
	let derBytes: $.Slice<number> = __goscriptTuple3[0]
	return derBytes
}
