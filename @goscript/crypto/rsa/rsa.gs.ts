// Generated file based on rsa.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as boring from "@goscript/crypto/internal/boring/index.js"

import * as bbig from "@goscript/crypto/internal/boring/bbig/index.js"

import * as bigmod from "@goscript/crypto/internal/fips140/bigmod/index.js"

import * as rsa from "@goscript/crypto/internal/fips140/rsa/index.js"

import * as fips140only from "@goscript/crypto/internal/fips140only/index.js"

import * as rand2 from "@goscript/crypto/internal/rand/index.js"

import * as cryptorand from "@goscript/crypto/rand/index.js"

import * as subtle from "@goscript/crypto/subtle/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as big from "@goscript/math/big/index.js"

import * as hash from "@goscript/hash/index.js"

import * as __goscript_fips from "./fips.gs.ts"

import * as __goscript_pkcs1v15 from "./pkcs1v15.gs.ts"
import "@goscript/crypto/index.js"
import "@goscript/crypto/internal/boring/index.js"
import "@goscript/crypto/internal/boring/bbig/index.js"
import "@goscript/crypto/internal/fips140/bigmod/index.js"
import "@goscript/crypto/internal/fips140/rsa/index.js"
import "@goscript/crypto/internal/fips140only/index.js"
import "@goscript/crypto/internal/rand/index.js"
import "@goscript/crypto/rand/index.js"
import "@goscript/crypto/subtle/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/internal/godebug/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/big/index.js"
import "@goscript/hash/index.js"
import "./fips.gs.ts"
import "./pkcs1v15.gs.ts"

$.registerTypePackagePath("crypto/rsa", ["rsa.PublicKey", "rsa.OAEPOptions", "rsa.PrivateKey", "rsa.PrecomputedValues", "rsa.CRTValue"])

export class PublicKey {
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

	public clone(): PublicKey {
		return new PublicKey(this, true)
	}

	public __goscriptAssign(source: PublicKey): void {
		const target = this._fields
		const values = source._fields
		target.N = values.N
		target.E = values.E
	}

	public Equal(x: crypto.PublicKey | null): boolean {
		const pub: PublicKey | $.VarRef<PublicKey> | null = this;
		const pub$: PublicKey = pub == null ? $.pointerTarget<PublicKey>(pub) : (pub as any).__isVarRef === true ? (pub as any).value : (pub as any).__goValue === undefined ? (pub as any) : $.pointerTarget<PublicKey>(pub)
		let __goscriptTuple0: any = $.typeAssertTuple<PublicKey | $.VarRef<PublicKey> | null>(x, /* @__PURE__ */ $.pointerType("rsa.PublicKey"))
		let xx: PublicKey | $.VarRef<PublicKey> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		let xx$: PublicKey = xx == null ? $.pointerTarget<PublicKey>(xx) : (xx as any).__isVarRef === true ? (xx as any).value : (xx as any).__goValue === undefined ? (xx as any) : $.pointerTarget<PublicKey>(xx)
		if (!ok) {
			return false
		}
		return bigIntEqual((pub$ as PublicKey).N, (xx$ as PublicKey).N) && ((pub$ as PublicKey).E == (xx$ as PublicKey).E)
	}

	public Size(): number {
		const pub: PublicKey | $.VarRef<PublicKey> | null = this;
		return globalThis.Math.trunc((big.Int.prototype.BitLen.call($.pointerValue<PublicKey>(pub).N) + 7) / 8)
	}

	static __typeInfo = $.registerStructType(
		"rsa.PublicKey",
		() => new PublicKey(),
		() => [$.methodSignature("Equal", [["x", "crypto.PublicKey"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true)],
		PublicKey,
		() => [/* @__PURE__ */ $.structField("N", /* @__PURE__ */ $.pointerType("big.Int"), [0], 0, true), /* @__PURE__ */ $.structField("E", /* @__PURE__ */ $.basicType("int"), [1], 8, true)]
	)
}

export class OAEPOptions {
	// Hash is the hash function that will be used when generating the mask.
	public get Hash(): crypto.Hash {
		return this._fields.Hash
	}

	public set Hash(value: crypto.Hash) {
		this._fields.Hash = value
	}

	// MGFHash is the hash function used for MGF1.
	// If zero, Hash is used instead.
	public get MGFHash(): crypto.Hash {
		return this._fields.MGFHash
	}

	public set MGFHash(value: crypto.Hash) {
		this._fields.MGFHash = value
	}

	// Label is an arbitrary byte string that must be equal to the value
	// used when encrypting.
	public get Label(): $.Slice<number> {
		return this._fields.Label
	}

	public set Label(value: $.Slice<number>) {
		this._fields.Label = value
	}

	public _fields: {
		Hash: crypto.Hash
		MGFHash: crypto.Hash
		Label: $.Slice<number>
	}

	constructor(init?: Partial<{Hash?: crypto.Hash, MGFHash?: crypto.Hash, Label?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Hash: init?.Hash ?? (0 as crypto.Hash),
			MGFHash: init?.MGFHash ?? (0 as crypto.Hash),
			Label: init?.Label ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OAEPOptions {
		return new OAEPOptions(this, true)
	}

	public __goscriptAssign(source: OAEPOptions): void {
		const target = this._fields
		const values = source._fields
		target.Hash = values.Hash
		target.MGFHash = values.MGFHash
		target.Label = values.Label
	}

	static __typeInfo = $.registerStructType(
		"rsa.OAEPOptions",
		() => new OAEPOptions(),
		() => [],
		OAEPOptions,
		() => [/* @__PURE__ */ $.structField("Hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [0], 0, true), /* @__PURE__ */ $.structField("MGFHash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [1], 8, true), /* @__PURE__ */ $.structField("Label", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true)]
	)
}

export class PrecomputedValues {
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

	// CRTValues is used for the 3rd and subsequent primes. Due to a
	// historical accident, the CRT for the first two primes is handled
	// differently in PKCS #1 and interoperability is sufficiently
	// important that we mirror this.
	//
	// Deprecated: These values are still filled in by Precompute for
	// backwards compatibility but are not used. Multi-prime RSA is very rare,
	// and is implemented by this package without CRT optimizations to limit
	// complexity.
	public get CRTValues(): $.Slice<CRTValue> {
		return this._fields.CRTValues
	}

	public set CRTValues(value: $.Slice<CRTValue>) {
		this._fields.CRTValues = value
	}

	public get fips(): rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null {
		return this._fields.fips
	}

	public set fips(value: rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null) {
		this._fields.fips = value
	}

	public _fields: {
		Dp: big.Int | $.VarRef<big.Int> | null
		Dq: big.Int | $.VarRef<big.Int> | null
		Qinv: big.Int | $.VarRef<big.Int> | null
		CRTValues: $.Slice<CRTValue>
		fips: rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null
	}

	constructor(init?: Partial<{Dp?: big.Int | $.VarRef<big.Int> | null, Dq?: big.Int | $.VarRef<big.Int> | null, Qinv?: big.Int | $.VarRef<big.Int> | null, CRTValues?: $.Slice<CRTValue>, fips?: rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Dp: init?.Dp ?? (null! as big.Int | $.VarRef<big.Int> | null),
			Dq: init?.Dq ?? (null! as big.Int | $.VarRef<big.Int> | null),
			Qinv: init?.Qinv ?? (null! as big.Int | $.VarRef<big.Int> | null),
			CRTValues: init?.CRTValues ?? (null! as $.Slice<CRTValue>),
			fips: init?.fips ?? (null! as rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PrecomputedValues {
		return new PrecomputedValues(this, true)
	}

	public __goscriptAssign(source: PrecomputedValues): void {
		const target = this._fields
		const values = source._fields
		target.Dp = values.Dp
		target.Dq = values.Dq
		target.Qinv = values.Qinv
		target.CRTValues = values.CRTValues
		target.fips = values.fips
	}

	static __typeInfo = $.registerStructType(
		"rsa.PrecomputedValues",
		() => new PrecomputedValues(),
		() => [],
		PrecomputedValues,
		() => [/* @__PURE__ */ $.structField("Dp", /* @__PURE__ */ $.pointerType("big.Int"), [0], 0, true), /* @__PURE__ */ $.structField("Dq", /* @__PURE__ */ $.pointerType("big.Int"), [1], 8, true), /* @__PURE__ */ $.structField("Qinv", /* @__PURE__ */ $.pointerType("big.Int"), [2], 16, true), /* @__PURE__ */ $.structField("CRTValues", /* @__PURE__ */ $.sliceType("rsa.CRTValue"), [3], 24, true), /* @__PURE__ */ $.structField("fips", /* @__PURE__ */ $.pointerType("rsa.PrivateKey"), [4], 48, false, { pkgPath: "crypto/rsa" })]
	)
}

export class PrivateKey {
	public get PublicKey(): PublicKey {
		return this._fields.PublicKey
	}

	public set PublicKey(value: PublicKey) {
		this._fields.PublicKey = value
	}

	public get D(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.D
	}

	public set D(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.D = value
	}

	public get Primes(): $.Slice<big.Int | $.VarRef<big.Int> | null> {
		return this._fields.Primes
	}

	public set Primes(value: $.Slice<big.Int | $.VarRef<big.Int> | null>) {
		this._fields.Primes = value
	}

	// Precomputed contains precomputed values that speed up RSA operations,
	// if available. It must be generated by calling PrivateKey.Precompute and
	// must not be modified afterwards.
	public get Precomputed(): PrecomputedValues {
		return this._fields.Precomputed
	}

	public set Precomputed(value: PrecomputedValues) {
		this._fields.Precomputed = value
	}

	public _fields: {
		PublicKey: PublicKey
		D: big.Int | $.VarRef<big.Int> | null
		Primes: $.Slice<big.Int | $.VarRef<big.Int> | null>
		Precomputed: PrecomputedValues
	}

	constructor(init?: Partial<{PublicKey?: PublicKey, D?: big.Int | $.VarRef<big.Int> | null, Primes?: $.Slice<big.Int | $.VarRef<big.Int> | null>, Precomputed?: PrecomputedValues}>, __goscriptValue?: boolean) {
		this._fields = {
			PublicKey: init?.PublicKey ? init.PublicKey.clone() : new PublicKey(undefined, true),
			D: init?.D ?? (null! as big.Int | $.VarRef<big.Int> | null),
			Primes: init?.Primes ?? (null! as $.Slice<big.Int | $.VarRef<big.Int> | null>),
			Precomputed: init?.Precomputed ? init.Precomputed.clone() : new PrecomputedValues(undefined, true)
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
		target.Primes = values.Primes
		$.assignStruct(target.Precomputed, values.Precomputed)
	}

	public async Decrypt(rand: io.Reader | null, ciphertext: $.Slice<number>, opts: crypto.DecrypterOpts | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		let plaintext: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		if (opts == null) {
			return __goscript_pkcs1v15.DecryptPKCS1v15(rand, priv, ciphertext)
		}

		{
			const __goscriptTypeSwitchValue = opts
			switch (true) {
				case $.typeAssert<OAEPOptions | $.VarRef<OAEPOptions> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.OAEPOptions")).ok:
					{
						let opts: OAEPOptions | $.VarRef<OAEPOptions> | null = $.typeAssert<OAEPOptions | $.VarRef<OAEPOptions> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.OAEPOptions")).value
						if (!crypto.Hash_Available($.pointerValue<OAEPOptions>(opts).Hash)) {
							return [null, errors.New($.concatString("rsa: requested hash function unavailable: ", crypto.Hash_String($.pointerValue<OAEPOptions>(opts).Hash)))]
						}
						if (($.pointerValue<OAEPOptions>(opts).MGFHash != 0) && !crypto.Hash_Available($.pointerValue<OAEPOptions>(opts).MGFHash)) {
							return [null, errors.New($.concatString("rsa: requested hash function unavailable: ", crypto.Hash_String($.pointerValue<OAEPOptions>(opts).MGFHash)))]
						}
						if ($.pointerValue<OAEPOptions>(opts).MGFHash == 0) {
							return __goscript_fips.decryptOAEP(await crypto.Hash_New($.pointerValue<OAEPOptions>(opts).Hash), await crypto.Hash_New($.pointerValue<OAEPOptions>(opts).Hash), priv, ciphertext, $.pointerValue<OAEPOptions>(opts).Label)
						} else {
							return __goscript_fips.decryptOAEP(await crypto.Hash_New($.pointerValue<OAEPOptions>(opts).Hash), await crypto.Hash_New($.pointerValue<OAEPOptions>(opts).MGFHash), priv, ciphertext, $.pointerValue<OAEPOptions>(opts).Label)
						}
					}
					break
				case $.typeAssert<__goscript_pkcs1v15.PKCS1v15DecryptOptions | $.VarRef<__goscript_pkcs1v15.PKCS1v15DecryptOptions> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PKCS1v15DecryptOptions")).ok:
					{
						let opts: __goscript_pkcs1v15.PKCS1v15DecryptOptions | $.VarRef<__goscript_pkcs1v15.PKCS1v15DecryptOptions> | null = $.typeAssert<__goscript_pkcs1v15.PKCS1v15DecryptOptions | $.VarRef<__goscript_pkcs1v15.PKCS1v15DecryptOptions> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PKCS1v15DecryptOptions")).value
						{
							let l = $.pointerValue<__goscript_pkcs1v15.PKCS1v15DecryptOptions>(opts).SessionKeyLen
							if (l > 0) {
								plaintext = $.makeSlice<number>(l, undefined, "byte")
								{
									let [, __goscriptShadow0] = await io.ReadFull($.pointerValueOrNil(rand)!, plaintext)
									if (__goscriptShadow0 != null) {
										return [null, __goscriptShadow0]
									}
								}
								{
									let __goscriptShadow1 = await __goscript_pkcs1v15.DecryptPKCS1v15SessionKey(rand, priv, ciphertext, plaintext)
									if (__goscriptShadow1 != null) {
										return [null, __goscriptShadow1]
									}
								}
								return [plaintext, null]
							} else {
								return __goscript_pkcs1v15.DecryptPKCS1v15(rand, priv, ciphertext)
							}
						}
					}
					break
				default:
					{
						let opts: any = __goscriptTypeSwitchValue
						return [null, errors.New("crypto/rsa: invalid options for Decrypt")]
					}
					break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public Equal(x: crypto.PrivateKey | null): boolean {
		const priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		const priv$: PrivateKey = priv == null ? $.pointerTarget<PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<PrivateKey>(priv)
		let __goscriptTuple1: any = $.typeAssertTuple<PrivateKey | $.VarRef<PrivateKey> | null>(x, /* @__PURE__ */ $.pointerType("rsa.PrivateKey"))
		let xx: PrivateKey | $.VarRef<PrivateKey> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		let xx$: PrivateKey = xx == null ? $.pointerTarget<PrivateKey>(xx) : (xx as any).__isVarRef === true ? (xx as any).value : (xx as any).__goValue === undefined ? (xx as any) : $.pointerTarget<PrivateKey>(xx)
		if (!ok) {
			return false
		}
		if (!(priv$ as PrivateKey).PublicKey.Equal($.interfaceValue<crypto.PublicKey | null>($.fieldRef((xx$ as PrivateKey)._fields, "PublicKey"), "*rsa.PublicKey", /* @__PURE__ */ $.pointerType("rsa.PublicKey"))) || !bigIntEqual((priv$ as PrivateKey).D, (xx$ as PrivateKey).D)) {
			return false
		}
		if ($.sliceLen((priv$ as PrivateKey).Primes) != $.sliceLen((xx$ as PrivateKey).Primes)) {
			return false
		}
		for (let __goscriptRangeTarget0 = (priv$ as PrivateKey).Primes, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			if (!bigIntEqual($.arrayIndex((priv$ as PrivateKey).Primes!, i), $.arrayIndex((xx$ as PrivateKey).Primes!, i))) {
				return false
			}
		}
		return true
	}

	public async Precompute(): globalThis.Promise<void> {
		let priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		const priv$: PrivateKey = priv == null ? $.pointerTarget<PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<PrivateKey>(priv)
		if ((priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? ((priv as any) as PrivateKey).precomputedIsConsistent() : PrivateKey.prototype.precomputedIsConsistent.call(priv))) {
			return
		}

		let [precomputed, err] = await (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? ((priv as any) as PrivateKey).precompute() : PrivateKey.prototype.precompute.call(priv))
		if (err != null) {
			// We don't have a way to report errors, so just leave Precomputed.fips
			// nil. Validate will re-run precompute and report its error.
			;(priv$ as PrivateKey).Precomputed.fips = null
			return
		}
		$.assignStruct((priv$ as PrivateKey).Precomputed, precomputed)
	}

	public Public(): crypto.PublicKey | null {
		const priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		return $.interfaceValue<crypto.PublicKey | null>($.fieldRef($.pointerValue<PrivateKey>(priv)._fields, "PublicKey"), "*rsa.PublicKey", /* @__PURE__ */ $.pointerType("rsa.PublicKey"))
	}

	public async Sign(rand: io.Reader | null, digest: $.Slice<number>, opts: crypto.SignerOpts | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		{
			let __goscriptTuple2: any = $.typeAssertTuple<__goscript_fips.PSSOptions | $.VarRef<__goscript_fips.PSSOptions> | null>(opts, /* @__PURE__ */ $.pointerType("rsa.PSSOptions"))
			let pssOpts: __goscript_fips.PSSOptions | $.VarRef<__goscript_fips.PSSOptions> | null = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			if (ok) {
				return __goscript_fips.SignPSS(rand, priv, $.pointerValue<__goscript_fips.PSSOptions>(pssOpts).Hash, digest, pssOpts)
			}
		}

		return __goscript_fips.SignPKCS1v15(rand, priv, (__goscriptAwait = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? (opts as Exclude<crypto.SignerOpts, null>) : $.pointerValue<Exclude<crypto.SignerOpts, null>>(opts)).HashFunc(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), digest)
	}

	public async Validate(): globalThis.Promise<$.GoError> {
		const priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		const priv$: PrivateKey = priv == null ? $.pointerTarget<PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<PrivateKey>(priv)
		// We can operate on keys based on d alone, but they can't be encoded with
		// [crypto/x509.MarshalPKCS1PrivateKey], which unfortunately doesn't return
		// an error, so we need to reject them here.
		if ($.sliceLen((priv$ as PrivateKey).Primes) < 2) {
			return errors.New("crypto/rsa: missing primes")
		}
		// If Precomputed.fips is set and consistent, then the key has been
		// validated by [rsa.NewPrivateKey] or [rsa.NewPrivateKeyWithoutCRT].
		if ((priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? ((priv as any) as PrivateKey).precomputedIsConsistent() : PrivateKey.prototype.precomputedIsConsistent.call(priv))) {
			return null
		}
		if ((priv$ as PrivateKey).Precomputed.fips != null) {
			return errors.New("crypto/rsa: precomputed values are inconsistent with the key")
		}
		let [, err] = await (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? ((priv as any) as PrivateKey).precompute() : PrivateKey.prototype.precompute.call(priv))
		return err
	}

	public async precompute(): globalThis.Promise<[PrecomputedValues, $.GoError]> {
		const priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		const priv$: PrivateKey = priv == null ? $.pointerTarget<PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<PrivateKey>(priv)
		let precomputed: PrecomputedValues = new PrecomputedValues(undefined, true)

		if ((priv$ as PrivateKey).PublicKey.N == null) {
			return [(precomputed).clone(), errors.New("crypto/rsa: missing public modulus")]
		}
		if ((priv$ as PrivateKey).D == null) {
			return [(precomputed).clone(), errors.New("crypto/rsa: missing private exponent")]
		}
		if ($.sliceLen((priv$ as PrivateKey).Primes) != 2) {
			return (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? ((priv as any) as PrivateKey).precomputeLegacy() : PrivateKey.prototype.precomputeLegacy.call(priv))
		}
		if ($.arrayIndex((priv$ as PrivateKey).Primes!, 0) == null) {
			return [(precomputed).clone(), errors.New("crypto/rsa: prime P is nil")]
		}
		if ($.arrayIndex((priv$ as PrivateKey).Primes!, 1) == null) {
			return [(precomputed).clone(), errors.New("crypto/rsa: prime Q is nil")]
		}

		// If the CRT values are already set, use them.
		if ((((priv$ as PrivateKey).Precomputed.Dp != null) && ((priv$ as PrivateKey).Precomputed.Dq != null)) && ((priv$ as PrivateKey).Precomputed.Qinv != null)) {
			let __goscriptTuple3: any = rsa.NewPrivateKeyWithPrecomputation(big.Int.prototype.Bytes.call((priv$ as PrivateKey).PublicKey.N), (priv$ as PrivateKey).PublicKey.E, big.Int.prototype.Bytes.call((priv$ as PrivateKey).D), big.Int.prototype.Bytes.call($.arrayIndex((priv$ as PrivateKey).Primes!, 0)), big.Int.prototype.Bytes.call($.arrayIndex((priv$ as PrivateKey).Primes!, 1)), big.Int.prototype.Bytes.call((priv$ as PrivateKey).Precomputed.Dp), big.Int.prototype.Bytes.call((priv$ as PrivateKey).Precomputed.Dq), big.Int.prototype.Bytes.call((priv$ as PrivateKey).Precomputed.Qinv))
			let k: rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null = __goscriptTuple3[0]
			let err = __goscriptTuple3[1]
			if (err != null) {
				return [(precomputed).clone(), err]
			}
			precomputed = $.assignStruct(precomputed, (priv$ as PrivateKey).Precomputed)
			precomputed.fips = k
			precomputed.CRTValues = $.makeSlice<CRTValue>(0, undefined, undefined, () => new CRTValue(undefined, true))
			return [(precomputed).clone(), null]
		}

		let __goscriptTuple4: any = rsa.NewPrivateKey(big.Int.prototype.Bytes.call((priv$ as PrivateKey).PublicKey.N), (priv$ as PrivateKey).PublicKey.E, big.Int.prototype.Bytes.call((priv$ as PrivateKey).D), big.Int.prototype.Bytes.call($.arrayIndex((priv$ as PrivateKey).Primes!, 0)), big.Int.prototype.Bytes.call($.arrayIndex((priv$ as PrivateKey).Primes!, 1)))
		let k: rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null = __goscriptTuple4[0]
		let err = __goscriptTuple4[1]
		if (err != null) {
			return [(precomputed).clone(), err]
		}

		precomputed.fips = k
		let __goscriptTuple5: any = (k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as rsa.PrivateKey).Export() : rsa.PrivateKey.prototype.Export.call(k))
		let dP: $.Slice<number> = __goscriptTuple5[5]
		let dQ: $.Slice<number> = __goscriptTuple5[6]
		let qInv: $.Slice<number> = __goscriptTuple5[7]
		precomputed.Dp = big.Int.prototype.SetBytes.call(new big.Int(), dP)
		precomputed.Dq = big.Int.prototype.SetBytes.call(new big.Int(), dQ)
		precomputed.Qinv = big.Int.prototype.SetBytes.call(new big.Int(), qInv)
		precomputed.CRTValues = $.makeSlice<CRTValue>(0, undefined, undefined, () => new CRTValue(undefined, true))
		return [(precomputed).clone(), null]
	}

	public async precomputeLegacy(): globalThis.Promise<[PrecomputedValues, $.GoError]> {
		const priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		const priv$: PrivateKey = priv == null ? $.pointerTarget<PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<PrivateKey>(priv)
		let precomputed: PrecomputedValues = new PrecomputedValues(undefined, true)

		let __goscriptTuple6: any = rsa.NewPrivateKeyWithoutCRT(big.Int.prototype.Bytes.call((priv$ as PrivateKey).PublicKey.N), (priv$ as PrivateKey).PublicKey.E, big.Int.prototype.Bytes.call((priv$ as PrivateKey).D))
		let k: rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null = __goscriptTuple6[0]
		let err = __goscriptTuple6[1]
		if (err != null) {
			return [(precomputed).clone(), err]
		}
		precomputed.fips = k

		if ($.sliceLen((priv$ as PrivateKey).Primes) < 2) {
			return [(precomputed).clone(), null]
		}

		// Ensure the Mod and ModInverse calls below don't panic.
		for (let __goscriptRangeTarget1 = (priv$ as PrivateKey).Primes, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let prime = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as big.Int | $.VarRef<big.Int> | null)
			if (prime == null) {
				return [(precomputed).clone(), errors.New("crypto/rsa: prime factor is nil")]
			}
			if ((prime !== null && (prime as any).__isVarRef !== true && (prime as any).__goValue === undefined ? ((prime as any) as big.Int).Cmp(bigOne) : big.Int.prototype.Cmp.call(prime, bigOne)) <= 0) {
				return [(precomputed).clone(), errors.New("crypto/rsa: prime factor is <= 1")]
			}
		}

		precomputed.Dp = big.Int.prototype.Sub.call(new big.Int(), $.arrayIndex((priv$ as PrivateKey).Primes!, 0), bigOne)
		await big.Int.prototype.Mod.call(precomputed.Dp, (priv$ as PrivateKey).D, precomputed.Dp)

		precomputed.Dq = big.Int.prototype.Sub.call(new big.Int(), $.arrayIndex((priv$ as PrivateKey).Primes!, 1), bigOne)
		await big.Int.prototype.Mod.call(precomputed.Dq, (priv$ as PrivateKey).D, precomputed.Dq)

		precomputed.Qinv = await big.Int.prototype.ModInverse.call(new big.Int(), $.arrayIndex((priv$ as PrivateKey).Primes!, 1), $.arrayIndex((priv$ as PrivateKey).Primes!, 0))
		if (precomputed.Qinv == null) {
			return [(precomputed).clone(), errors.New("crypto/rsa: prime factors are not relatively prime")]
		}

		let r: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.Mul.call(new big.Int(), $.arrayIndex((priv$ as PrivateKey).Primes!, 0), $.arrayIndex((priv$ as PrivateKey).Primes!, 1))
		precomputed.CRTValues = $.makeSlice<CRTValue>($.sliceLen((priv$ as PrivateKey).Primes) - 2, undefined, undefined, () => new CRTValue(undefined, true))
		for (let i = 2; i < $.sliceLen((priv$ as PrivateKey).Primes); i++) {
			let prime: big.Int | $.VarRef<big.Int> | null = $.arrayIndex((priv$ as PrivateKey).Primes!, i)
			let values: CRTValue | $.VarRef<CRTValue> | null = $.indexRef(precomputed.CRTValues!, i - 2)
			let values$: CRTValue = values == null ? $.pointerTarget<CRTValue>(values) : (values as any).__isVarRef === true ? (values as any).value : (values as any).__goValue === undefined ? (values as any) : $.pointerTarget<CRTValue>(values);

			;(values$ as CRTValue).Exp = big.Int.prototype.Sub.call(new big.Int(), prime, bigOne)
			await big.Int.prototype.Mod.call((values$ as CRTValue).Exp, (priv$ as PrivateKey).D, (values$ as CRTValue).Exp);

			;(values$ as CRTValue).R = big.Int.prototype.Set.call(new big.Int(), r);
			;(values$ as CRTValue).Coeff = await big.Int.prototype.ModInverse.call(new big.Int(), r, prime)
			if ((values$ as CRTValue).Coeff == null) {
				return [(precomputed).clone(), errors.New("crypto/rsa: prime factors are not relatively prime")]
			}

			await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as big.Int).Mul(r, prime) : big.Int.prototype.Mul.call(r, r, prime))
		}

		return [(precomputed).clone(), null]
	}

	public precomputedIsConsistent(): boolean {
		const priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		const priv$: PrivateKey = priv == null ? $.pointerTarget<PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<PrivateKey>(priv)
		if ((priv$ as PrivateKey).Precomputed.fips == null) {
			return false
		}
		let __goscriptTuple7: any = rsa.PrivateKey.prototype.Export.call((priv$ as PrivateKey).Precomputed.fips)
		let N: $.Slice<number> = __goscriptTuple7[0]
		let e = __goscriptTuple7[1]
		let d: $.Slice<number> = __goscriptTuple7[2]
		let P: $.Slice<number> = __goscriptTuple7[3]
		let Q: $.Slice<number> = __goscriptTuple7[4]
		let dP: $.Slice<number> = __goscriptTuple7[5]
		let dQ: $.Slice<number> = __goscriptTuple7[6]
		let qInv: $.Slice<number> = __goscriptTuple7[7]
		if ((!bigIntEqualToBytes((priv$ as PrivateKey).PublicKey.N, N) || ((priv$ as PrivateKey).PublicKey.E != e)) || !bigIntEqualToBytes((priv$ as PrivateKey).D, d)) {
			return false
		}
		if ($.sliceLen((priv$ as PrivateKey).Primes) != 2) {
			return ((((P == null) && (Q == null)) && (dP == null)) && (dQ == null)) && (qInv == null)
		}
		return (((bigIntEqualToBytes($.arrayIndex((priv$ as PrivateKey).Primes!, 0), P) && bigIntEqualToBytes($.arrayIndex((priv$ as PrivateKey).Primes!, 1), Q)) && bigIntEqualToBytes((priv$ as PrivateKey).Precomputed.Dp, dP)) && bigIntEqualToBytes((priv$ as PrivateKey).Precomputed.Dq, dQ)) && bigIntEqualToBytes((priv$ as PrivateKey).Precomputed.Qinv, qInv)
	}

	public Size(): any {
		return $.pointerValue<PublicKey>(this.PublicKey).Size()
	}

	static __typeInfo = $.registerStructType(
		"rsa.PrivateKey",
		() => new PrivateKey(),
		() => [$.methodSignature("Decrypt", [["rand", "io.Reader"], ["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["opts", "crypto.DecrypterOpts"]], [["plaintext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("Equal", [["x", "crypto.PrivateKey"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Precompute", [], [], true), $.methodSignature("Public", [], ["crypto.PublicKey"], true), $.methodSignature("Sign", [["rand", "io.Reader"], ["digest", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["opts", "crypto.SignerOpts"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Validate", [], ["error"], true), $.methodSignature("precompute", [], ["rsa.PrecomputedValues", "error"], true), $.methodSignature("precomputeLegacy", [], ["rsa.PrecomputedValues", "error"], true), $.methodSignature("precomputedIsConsistent", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true)],
		PrivateKey,
		() => [/* @__PURE__ */ $.structField("PublicKey", "rsa.PublicKey", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("D", /* @__PURE__ */ $.pointerType("big.Int"), [1], 16, true), /* @__PURE__ */ $.structField("Primes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("big.Int")), [2], 24, true), /* @__PURE__ */ $.structField("Precomputed", "rsa.PrecomputedValues", [3], 48, true)]
	)
}

export class CRTValue {
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

	public get R(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.R
	}

	public set R(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.R = value
	}

	public _fields: {
		Exp: big.Int | $.VarRef<big.Int> | null
		Coeff: big.Int | $.VarRef<big.Int> | null
		R: big.Int | $.VarRef<big.Int> | null
	}

	constructor(init?: Partial<{Exp?: big.Int | $.VarRef<big.Int> | null, Coeff?: big.Int | $.VarRef<big.Int> | null, R?: big.Int | $.VarRef<big.Int> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Exp: init?.Exp ?? (null! as big.Int | $.VarRef<big.Int> | null),
			Coeff: init?.Coeff ?? (null! as big.Int | $.VarRef<big.Int> | null),
			R: init?.R ?? (null! as big.Int | $.VarRef<big.Int> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CRTValue {
		return new CRTValue(this, true)
	}

	public __goscriptAssign(source: CRTValue): void {
		const target = this._fields
		const values = source._fields
		target.Exp = values.Exp
		target.Coeff = values.Coeff
		target.R = values.R
	}

	static __typeInfo = $.registerStructType(
		"rsa.CRTValue",
		() => new CRTValue(),
		() => [],
		CRTValue,
		() => [/* @__PURE__ */ $.structField("Exp", /* @__PURE__ */ $.pointerType("big.Int"), [0], 0, true), /* @__PURE__ */ $.structField("Coeff", /* @__PURE__ */ $.pointerType("big.Int"), [1], 8, true), /* @__PURE__ */ $.structField("R", /* @__PURE__ */ $.pointerType("big.Int"), [2], 16, true)]
	)
}

export let bigOne: big.Int | $.VarRef<big.Int> | null = await big.NewInt(1n)

export function __goscript_set_bigOne(__goscriptValue: big.Int | $.VarRef<big.Int> | null): void {
	bigOne = __goscriptValue
}

export function bigIntEqual(a: big.Int | $.VarRef<big.Int> | null, b: big.Int | $.VarRef<big.Int> | null): boolean {
	return subtle.ConstantTimeCompare((a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as big.Int).Bytes() : big.Int.prototype.Bytes.call(a)), (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as big.Int).Bytes() : big.Int.prototype.Bytes.call(b))) == 1
}

export function bigIntEqualToBytes(a: big.Int | $.VarRef<big.Int> | null, b: $.Slice<number>): boolean {
	if ((a == null) || ((a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as big.Int).BitLen() : big.Int.prototype.BitLen.call(a)) > ($.sliceLen(b) * 8))) {
		return false
	}
	let buf: $.Slice<number> = (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as big.Int).FillBytes($.makeSlice<number>($.sliceLen(b), undefined, "byte")) : big.Int.prototype.FillBytes.call(a, $.makeSlice<number>($.sliceLen(b), undefined, "byte")))
	return subtle.ConstantTimeCompare(buf, b) == 1
}

export let rsa1024min: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("rsa1024min")

export function __goscript_set_rsa1024min(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	rsa1024min = __goscriptValue
}

export function checkKeySize(size: number): $.GoError {
	if (size >= 1024) {
		return null
	}
	if ($.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(rsa1024min)), "0")) {
		godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(rsa1024min))
		return null
	}
	return fmt.Errorf("crypto/rsa: %d-bit keys are insecure (see https://go.dev/pkg/crypto/rsa#hdr-Minimum_key_size)", $.basicInterfaceValue(size, "int"))
}

export function checkPublicKeySize(k: PublicKey | $.VarRef<PublicKey> | null): $.GoError {
	const k$: PublicKey = k == null ? $.pointerTarget<PublicKey>(k) : (k as any).__isVarRef === true ? (k as any).value : (k as any).__goValue === undefined ? (k as any) : $.pointerTarget<PublicKey>(k)
	if ((k$ as PublicKey).N == null) {
		return errors.New("crypto/rsa: missing public modulus")
	}
	return checkKeySize(big.Int.prototype.BitLen.call((k$ as PublicKey).N))
}

export async function GenerateKey(random: io.Reader | null, bits: number): globalThis.Promise<[PrivateKey | $.VarRef<PrivateKey> | null, $.GoError]> {
	{
		let err = checkKeySize(bits)
		if (err != null) {
			return [null, err]
		}
	}

	if ((boring.Enabled && rand2.IsDefaultReader(random)) && (((bits == 2048) || (bits == 3072)) || (bits == 4096))) {
		let __goscriptTuple8: any = boring.GenerateKeyRSA(bits)
		let bN: boring.BigInt = (__goscriptTuple8[0] as boring.BigInt)
		let bE: boring.BigInt = (__goscriptTuple8[1] as boring.BigInt)
		let bD: boring.BigInt = (__goscriptTuple8[2] as boring.BigInt)
		let bP: boring.BigInt = (__goscriptTuple8[3] as boring.BigInt)
		let bQ: boring.BigInt = (__goscriptTuple8[4] as boring.BigInt)
		let bDp: boring.BigInt = (__goscriptTuple8[5] as boring.BigInt)
		let bDq: boring.BigInt = (__goscriptTuple8[6] as boring.BigInt)
		let bQinv: boring.BigInt = (__goscriptTuple8[7] as boring.BigInt)
		let err = __goscriptTuple8[8]
		if (err != null) {
			return [null, err]
		}
		let N: big.Int | $.VarRef<big.Int> | null = bbig.Dec((bN as boring.BigInt))
		let E: big.Int | $.VarRef<big.Int> | null = bbig.Dec((bE as boring.BigInt))
		let D: big.Int | $.VarRef<big.Int> | null = bbig.Dec((bD as boring.BigInt))
		let P: big.Int | $.VarRef<big.Int> | null = bbig.Dec((bP as boring.BigInt))
		let Q: big.Int | $.VarRef<big.Int> | null = bbig.Dec((bQ as boring.BigInt))
		let Dp: big.Int | $.VarRef<big.Int> | null = bbig.Dec((bDp as boring.BigInt))
		let Dq: big.Int | $.VarRef<big.Int> | null = bbig.Dec((bDq as boring.BigInt))
		let Qinv: big.Int | $.VarRef<big.Int> | null = bbig.Dec((bQinv as boring.BigInt))
		let e64 = (E !== null && (E as any).__isVarRef !== true && (E as any).__goValue === undefined ? ((E as any) as big.Int).Int64() : big.Int.prototype.Int64.call(E))
		if (!(E !== null && (E as any).__isVarRef !== true && (E as any).__goValue === undefined ? ((E as any) as big.Int).IsInt64() : big.Int.prototype.IsInt64.call(E)) || ($.int64($.int(e64)) != e64)) {
			return [null, errors.New("crypto/rsa: generated key exponent too large")]
		}

		let key: PrivateKey | $.VarRef<PrivateKey> | null = new PrivateKey({PublicKey: new PublicKey({N: N, E: $.int(e64)}, true), D: D, Primes: $.arrayToSlice<big.Int | $.VarRef<big.Int> | null>([P, Q]), Precomputed: new PrecomputedValues({Dp: Dp, Dq: Dq, Qinv: Qinv, CRTValues: $.makeSlice<CRTValue>(0, undefined, undefined, () => new CRTValue(undefined, true))}, true)})
		return [key, null]
	}

	random = await rand2.CustomReader(random)

	if (fips140only.Enforced() && (bits < 2048)) {
		return [null, errors.New("crypto/rsa: use of keys smaller than 2048 bits is not allowed in FIPS 140-only mode")]
	}
	if (fips140only.Enforced() && ((bits % 2) == 1)) {
		return [null, errors.New("crypto/rsa: use of keys with odd size is not allowed in FIPS 140-only mode")]
	}
	if (fips140only.Enforced() && !fips140only.ApprovedRandomReader(random)) {
		return [null, errors.New("crypto/rsa: only crypto/rand.Reader is allowed in FIPS 140-only mode")]
	}

	let __goscriptTuple9: any = await rsa.GenerateKey(random, bits)
	let k: rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null = __goscriptTuple9[0]
	let err = __goscriptTuple9[1]
	if ((bits < 256) && (err != null)) {
		// Toy-sized keys have a non-negligible chance of hitting two hard
		// failure cases: p == q and d <= 2^(nlen / 2).
		//
		// Since these are impossible to hit for real keys, we don't want to
		// make the production code path more complex and harder to think about
		// to handle them.
		//
		// Instead, just rerun the whole process a total of 8 times, which
		// brings the chance of failure for 32-bit keys down to the same as for
		// 256-bit keys.
		for (let i = 1; (i < 8) && (err != null); i++) {
			let __goscriptTuple10: any = await rsa.GenerateKey(random, bits)
			k = __goscriptTuple10[0]
			err = __goscriptTuple10[1]
		}
	}
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple11: any = (k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as rsa.PrivateKey).Export() : rsa.PrivateKey.prototype.Export.call(k))
	let N: $.Slice<number> = __goscriptTuple11[0]
	let e = __goscriptTuple11[1]
	let d: $.Slice<number> = __goscriptTuple11[2]
	let p: $.Slice<number> = __goscriptTuple11[3]
	let q: $.Slice<number> = __goscriptTuple11[4]
	let dP: $.Slice<number> = __goscriptTuple11[5]
	let dQ: $.Slice<number> = __goscriptTuple11[6]
	let qInv: $.Slice<number> = __goscriptTuple11[7]
	let key: PrivateKey | $.VarRef<PrivateKey> | null = (() => { const __goscriptLiteralField1 = big.Int.prototype.SetBytes.call(new big.Int(), d); return new PrivateKey({PublicKey: (() => { const __goscriptLiteralField0 = big.Int.prototype.SetBytes.call(new big.Int(), N); return new PublicKey({N: __goscriptLiteralField0, E: e}, true) })(), D: __goscriptLiteralField1, Primes: $.arrayToSlice<big.Int | $.VarRef<big.Int> | null>([big.Int.prototype.SetBytes.call(new big.Int(), p), big.Int.prototype.SetBytes.call(new big.Int(), q)]), Precomputed: (() => { const __goscriptLiteralField2 = big.Int.prototype.SetBytes.call(new big.Int(), dP); const __goscriptLiteralField3 = big.Int.prototype.SetBytes.call(new big.Int(), dQ); const __goscriptLiteralField4 = big.Int.prototype.SetBytes.call(new big.Int(), qInv); return new PrecomputedValues({fips: k, Dp: __goscriptLiteralField2, Dq: __goscriptLiteralField3, Qinv: __goscriptLiteralField4, CRTValues: $.makeSlice<CRTValue>(0, undefined, undefined, () => new CRTValue(undefined, true))}, true) })()}) })()
	return [key, null]
}

export async function GenerateMultiPrimeKey(random: io.Reader | null, nprimes: number, bits: number): globalThis.Promise<[PrivateKey | $.VarRef<PrivateKey> | null, $.GoError]> {
	if (nprimes == 2) {
		return GenerateKey(random, bits)
	}
	if (fips140only.Enforced()) {
		return [null, errors.New("crypto/rsa: multi-prime RSA is not allowed in FIPS 140-only mode")]
	}

	random = await rand2.CustomReader(random)

	let priv: PrivateKey | $.VarRef<PrivateKey> | null = new PrivateKey()
	let priv$: PrivateKey = priv == null ? $.pointerTarget<PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<PrivateKey>(priv);
	;(priv$ as PrivateKey).PublicKey.E = 65537

	if (nprimes < 2) {
		return [null, errors.New("crypto/rsa: GenerateMultiPrimeKey: nprimes must be >= 2")]
	}

	if (bits < 64) {
		let primeLimit = globalThis.Number($.uint64Shl(1n, $.uint(globalThis.Math.trunc(bits / nprimes), 64)))
		// pi approximates the number of primes less than primeLimit
		let pi = primeLimit / (math.Log(primeLimit) - 1)
		// Generated primes start with 11 (in binary) so we can only
		// use a quarter of them.
		pi = pi / (4)
		// Use a factor of two to ensure that key generation terminates
		// in a reasonable amount of time.
		pi = pi / (2)
		if (pi <= nprimes) {
			return [null, errors.New("crypto/rsa: too few primes of given length to generate an RSA key")]
		}
	}

	let primes: $.Slice<big.Int | $.VarRef<big.Int> | null> = $.makeSlice<big.Int | $.VarRef<big.Int> | null>(nprimes)

	NextSetOfPrimes: for (let __goscriptSliceWindow0 = $.sliceRange(primes); true; ) {
		let todo = bits
		// crypto/rand should set the top two bits in each prime.
		// Thus each prime has the form
		//   p_i = 2^bitlen(p_i) × 0.11... (in base 2).
		// And the product is:
		//   P = 2^todo × α
		// where α is the product of nprimes numbers of the form 0.11...
		//
		// If α < 1/2 (which can happen for nprimes > 2), we need to
		// shift todo to compensate for lost bits: the mean value of 0.11...
		// is 7/8, so todo + shift - nprimes * log2(7/8) ~= bits - 1/2
		// will give good results.
		if (nprimes >= 7) {
			todo = todo + (globalThis.Math.trunc((nprimes - 2) / 5))
		}
		for (let i = 0; i < nprimes; i++) {
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple12: any = await cryptorand.Prime($.pointerValueOrNil(random)!, globalThis.Math.trunc(todo / (nprimes - i)));
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = __goscriptTuple12[0]
			err = __goscriptTuple12[1]
			if (err != null) {
				return [null, err]
			}
			todo = todo - (big.Int.prototype.BitLen.call(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as big.Int | $.VarRef<big.Int> | null)))
		}

		// Make sure that primes is pairwise unequal.
		for (let __goscriptRangeTarget2 = primes, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
			let prime = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as big.Int | $.VarRef<big.Int> | null)
			for (let j = 0; j < i; j++) {
				if (big.Int.prototype.Cmp.call(prime, ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] as big.Int | $.VarRef<big.Int> | null)) == 0) {
					continue NextSetOfPrimes
				}
			}
		}

		let n: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.Set.call(new big.Int(), bigOne)
		let totient: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.Set.call(new big.Int(), bigOne)
		let pminus1: big.Int | $.VarRef<big.Int> | null = new big.Int()
		for (let __goscriptRangeTarget3 = primes, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let prime = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as big.Int | $.VarRef<big.Int> | null)
			await (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as big.Int).Mul(n, prime) : big.Int.prototype.Mul.call(n, n, prime))
			void (pminus1 !== null && (pminus1 as any).__isVarRef !== true && (pminus1 as any).__goValue === undefined ? ((pminus1 as any) as big.Int).Sub(prime, bigOne) : big.Int.prototype.Sub.call(pminus1, prime, bigOne))
			await (totient !== null && (totient as any).__isVarRef !== true && (totient as any).__goValue === undefined ? ((totient as any) as big.Int).Mul(totient, pminus1) : big.Int.prototype.Mul.call(totient, totient, pminus1))
		}
		if ((n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as big.Int).BitLen() : big.Int.prototype.BitLen.call(n)) != bits) {
			// This should never happen for nprimes == 2 because
			// crypto/rand should set the top two bits in each prime.
			// For nprimes > 2 we hope it does not happen often.
			continue NextSetOfPrimes
		}

		;(priv$ as PrivateKey).D = new big.Int()
		let e: big.Int | $.VarRef<big.Int> | null = big.NewInt($.int64((priv$ as PrivateKey).PublicKey.E))
		let ok: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.ModInverse.call((priv$ as PrivateKey).D, e, totient)

		if (ok != null) {
			;(priv$ as PrivateKey).Primes = primes;
			;(priv$ as PrivateKey).PublicKey.N = n
			break
		}
	}

	await (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? ((priv as any) as PrivateKey).Precompute() : PrivateKey.prototype.Precompute.call(priv))
	{
		let err = await (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? ((priv as any) as PrivateKey).Validate() : PrivateKey.prototype.Validate.call(priv))
		if (err != null) {
			return [null, err]
		}
	}

	return [priv, null]
}

export let ErrMessageTooLong: $.GoError = errors.New("crypto/rsa: message too long for RSA key size")

export function __goscript_set_ErrMessageTooLong(__goscriptValue: $.GoError): void {
	ErrMessageTooLong = __goscriptValue
}

export let ErrDecryption: $.GoError = errors.New("crypto/rsa: decryption error")

export function __goscript_set_ErrDecryption(__goscriptValue: $.GoError): void {
	ErrDecryption = __goscriptValue
}

export let ErrVerification: $.GoError = errors.New("crypto/rsa: verification error")

export function __goscript_set_ErrVerification(__goscriptValue: $.GoError): void {
	ErrVerification = __goscriptValue
}

export function fipsPublicKey(pub: PublicKey | $.VarRef<PublicKey> | null): [rsa.PublicKey | $.VarRef<rsa.PublicKey> | null, $.GoError] {
	const pub$: PublicKey = pub == null ? $.pointerTarget<PublicKey>(pub) : (pub as any).__isVarRef === true ? (pub as any).value : (pub as any).__goValue === undefined ? (pub as any) : $.pointerTarget<PublicKey>(pub)
	let __goscriptTuple13: any = bigmod.NewModulus(big.Int.prototype.Bytes.call((pub$ as PublicKey).N))
	let N: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = __goscriptTuple13[0]
	let err = __goscriptTuple13[1]
	if (err != null) {
		return [null, err]
	}
	return [new rsa.PublicKey({N: N, E: (pub$ as PublicKey).E}), null]
}

export async function fipsPrivateKey(priv: PrivateKey | $.VarRef<PrivateKey> | null): globalThis.Promise<[rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null, $.GoError]> {
	const priv$: PrivateKey = priv == null ? $.pointerTarget<PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<PrivateKey>(priv)
	if ((priv$ as PrivateKey).Precomputed.fips != null) {
		return [(priv$ as PrivateKey).Precomputed.fips, null]
	}
	let [precomputed, err] = await (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? ((priv as any) as PrivateKey).precompute() : PrivateKey.prototype.precompute.call(priv))
	if (err != null) {
		return [null, err]
	}
	return [precomputed.fips, null]
}

var __goscriptAwait: any
